import { useState } from 'react';
import axios from 'axios';

const VirusTotalScan = () => {
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState('');
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showDetails, setShowDetails] = useState(false); // État pour gérer l'affichage des détails

    const handleScan = async () => {
        setLoading(true);
        setError('');
        setReport(null);

        try {
            const cleanUrl = url.replace(/^https?:\/\//, '');
            const scanOptions = {
                method: 'POST',
                url: 'https://www.virustotal.com/api/v3/urls',
                headers: {
                    'x-apikey': '368d836d2188fd6e080b74946fff0ce4e4d3d79b4dde937304f81ee8debc7eab',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: `url=${encodeURIComponent(cleanUrl)}`
            };

            const scanResponse = await axios.request(scanOptions);
            const scanId = scanResponse.data.data.id;

            let scanStatus;
            do {
                const statusOptions = {
                    method: 'GET',
                    url: `https://www.virustotal.com/api/v3/analyses/${scanId}`,
                    headers: {
                        'x-apikey': '368d836d2188fd6e080b74946fff0ce4e4d3d79b4dde937304f81ee8debc7eab'
                    }
                };
                
                const statusResponse = await axios.request(statusOptions);
                scanStatus = statusResponse.data.data.attributes.status;
                setStatus(scanStatus);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } while (scanStatus !== 'completed');

            const reportOptions = {
                method: 'GET',
                url: `https://www.virustotal.com/api/v3/analyses/${scanId}`,
                headers: {
                    'x-apikey': '368d836d2188fd6e080b74946fff0ce4e4d3d79b4dde937304f81ee8debc7eab'
                }
            };
            
            const reportResponse = await axios.request(reportOptions);
            setReport(reportResponse.data);
        } catch (err) {
            setError('Erreur lors du scan : ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fonction pour calculer les pourcentages
    const calculatePercentages = () => {
        if (!report) return { clean: 0, malicious: 0 };

        let totalEngines = Object.keys(report.data.attributes.results).length;
        let cleanCount = 0;
        let maliciousCount = 0;

        for (let result of Object.values(report.data.attributes.results)) {
            if (result.result === "clean") cleanCount++;
            else if (result.result === "malicious") maliciousCount++;
        }

        return {
            clean: ((cleanCount / totalEngines) * 100).toFixed(2),
            malicious: ((maliciousCount / totalEngines) * 100).toFixed(2)
        };
    };

    // Fonction pour afficher le rapport de manière ludique
    const renderReportSummary = () => {
        if (!report) return null;

        const { clean, malicious } = calculatePercentages();

        return (
            <div className="mt-4">
                <h3 className="font-semibold">Résumé du Scan</h3>
                <p>Pourcentage de sécurité : {clean}% clean, {malicious}% malicieux</p>
                <button 
                    onClick={() => setShowDetails(!showDetails)} 
                    className="mt-2 bg-blue-500 text-white p-2 rounded"
                >
                    {showDetails ? 'Masquer les Détails' : 'Afficher les Détails'}
                </button>
                
                {showDetails && (
                    <div className="mt-2 bg-gray-200 p-2 rounded">
                        <h4>Détails des résultats :</h4>
                        <ul>
                            {Object.entries(report.data.attributes.results).map(([engine, result]) => (
                                <li key={engine} className="border-b border-gray-300 py-1">
                                    <strong>{engine}:</strong> {result.result} ({result.category})
                                </li>
                            ))}
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
                className="mt-2 bg-blue-500 text-white p-2 rounded"
                disabled={loading}
            >
                {loading ? 'Scanning...' : 'Lancer le Scan'}
            </button>
            {status && <p className="mt-2">Statut du scan : {status}</p>}
            {error && <p className="text-red-500">{error}</p>}
            {renderReportSummary()}
        </div>
    );
};

export default VirusTotalScan;