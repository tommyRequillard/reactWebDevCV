import { useState } from 'react';
import axios from 'axios';


export default function ShodanScan(){
    const [ip, setIp] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        setResults(null);

        try {
            const response = await axios.get(`https://internetdb.shodan.io/${ip}`);
            setResults(response.data);
        } catch (err) {
            setError('Erreur lors de la recherche : ' + (err.response?.data?.error || err.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Enrichissement IP Shodan</h2>
            <p className="mb-4">Obtenez des informations sur les ports ouverts et plus pour une adresse IP</p>
            
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Entrez une adresse IP" 
                    value={ip} 
                    onChange={(e) => setIp(e.target.value)} 
                    className="w-full p-2 border rounded"
                />
            </div>
            
            <button 
                onClick={handleSearch} 
                className="bg-blue-500 hover:bg-indigo-500 text-white p-2 rounded w-full"
                disabled={loading}
            >
                {loading ? 'Recherche en cours...' : 'Rechercher'}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {results && (
                <div className="mt-4">
                    <h3 className="font-semibold">Résultats pour {ip} :</h3>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Ports ouverts : {results.ports.join(', ')}</li>
                        <li>CPEs : {results.cpes.join(', ')}</li>
                        <li>Noms d'hôte : {results.hostnames.join(', ')}</li>
                        <li>Tags : {results.tags.join(', ')}</li>
                        <li>Vulnérabilités : {results.vulns ? results.vulns.join(', ') : 'Aucune détectée'}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};
