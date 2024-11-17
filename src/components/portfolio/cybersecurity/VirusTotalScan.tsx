import { useState } from "react";
import axios from "axios";

interface VirusTotalScanResult {
    result: string; // "clean", "malicious", etc.
    category: string; // Catégorie du résultat
}

interface VirusTotalReport {
    data: {
        attributes: {
            results: Record<string, VirusTotalScanResult>;
        };
    };
}

const VirusTotalScan = () => {
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState("");
    const [report, setReport] = useState<VirusTotalReport | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showDetails, setShowDetails] = useState(false);
    const myApiKey = import.meta.env.VITE_VIRUS_TOTAL_API_KEY;

    const handleScan = async () => {
        setLoading(true);
        setError(null);
        setReport(null);

        try {
            const cleanUrl = url.replace(/^https?:\/\//, "");
            const scanResponse = await axios.post("http://localhost:3000/api/scan", { url: cleanUrl });
            const scanId = scanResponse.data.data.id;
            let scanStatus;
            do {
                const statusResponse = await axios.get(`http://localhost:3000/api/report/${scanId}`);
                scanStatus = statusResponse.data.data.attributes.status;
                setStatus(scanStatus);
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } while (scanStatus !== "completed");

            const reportResponse = await axios.get(`http://localhost:3000/api/report/${scanId}`);
            setReport(reportResponse.data);

        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error(err.response?.data);
                setError("Erreur lors du scan : " + (err.response?.data?.message || err.message));
            } else if (err instanceof Error) {
                setError("Erreur inconnue : " + err.message);
            } else {
                setError("Erreur inconnue");
            }
        } finally {
            setLoading(false);
        }
    };

    // Fonction pour calculer les pourcentages
    const calculatePercentages = () => {
        if (!report) return { clean: 0, malicious: 0 };

        const totalEngines = Object.keys(report.data.attributes.results).length;
        let cleanCount = 0;
        let maliciousCount = 0;

        for (const result of Object.values(report.data.attributes.results)) {
            if (result.result === "clean") cleanCount++;
            else if (result.result === "malicious") maliciousCount++;
        }

        return {
            clean: parseFloat(((cleanCount / totalEngines) * 100).toFixed(2)),
            malicious: parseFloat(((maliciousCount / totalEngines) * 100).toFixed(2)),
        };
    };

    // Fonction pour afficher le rapport de manière ludique
    const renderReportSummary = () => {
        if (!report) return null;

        const { clean, malicious } = calculatePercentages();

        return (
            <div className="mt-4">
                <h3 className="font-semibold">Résumé du Scan</h3>
                <p className={`${clean > 50 ? 'text-green-600' : 'text-red-600'}`}>
                    Pourcentage de sécurité :
                    <span className={`font-bold text-${clean > 50 ? 'green-600' : 'red-600'}`}>
                        {' ' + clean}%
                    </span>
                    Clean
                </p>
                <p className={`text-${malicious > 0 ? 'red-600' : 'green-600'}`}>
                    Pourcentage malicieux :
                    <span className={`font-bold text-${malicious > 0 ? 'red-600' : 'green-600'}`}>
                        {' ' + malicious}%
                    </span>
                    Malicieux
                </p>
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="mt-2 bg-blue-500 hover:bg-indigo-500 text-white p-2 rounded"
                >
                    {showDetails ? "Masquer les Détails" : "Afficher les Détails"}
                </button>

                {showDetails && (
                    <div className="mt-2 bg-gray-200 p-2 rounded">
                        <h4>Détails des résultats :</h4>
                        <ul>
                            {Object.entries(report.data.attributes.results).map(
                                ([engine, result]) => (
                                    <li key={engine} className="border-b border-gray-300 py-1">
                                        <strong>{engine}:</strong> {result.result} ({result.category})
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Analyse des URLs et des Fichiers</h3>
            <p>Vérification des URLs et fichiers pour détecter les menaces</p>
            <input
                type="text"
                placeholder="Entrez l'URL à scanner"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border p-2 rounded w-full mt-2"
            />
            <button
                onClick={handleScan}
                className="mt-2 bg-blue-500 hover:bg-indigo-500 text-white p-2 rounded"
                disabled={loading}
            >
                {loading ? "Scanning..." : "Lancer le Scan"}
            </button>
            {status && <p className="mt-2">Statut du scan : {status}</p>}
            {error && <p className="text-red-500">{error}</p>}
            {renderReportSummary()}
        </div>
    );
};

export default VirusTotalScan;