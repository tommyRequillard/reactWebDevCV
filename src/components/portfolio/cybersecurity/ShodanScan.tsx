import React, { useState } from 'react';
import axios from 'axios';

const ShodanScan = () => {
    const [ip, setIp] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_KEY = 'hNmG92sMJLl863A0yBacLP03q6jgsiLZ'; 

    const handleScan = async () => {
        setLoading(true);
        setError('');
        setResults(null);

        try {
            const response = await axios.get(`https://api.shodan.io/shodan/host/${ip}?key=${API_KEY}`);
            setResults(response.data);
        } catch (err) {
            setError('Erreur lors de l\'analyse : ' + (err.response?.data?.error || err.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Analyse des Dispositifs Connectés</h2>
            <p className="mb-4">Recherche d'informations sur les dispositifs exposés</p>
            
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
                onClick={handleScan} 
                className="bg-blue-500 text-white p-2 rounded w-full"
                disabled={loading}
            >
                {loading ? 'Analyse en cours...' : 'Analyser'}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {results && (
                <div className="mt-4">
                    <h3 className="font-semibold">Résultats pour {ip} :</h3>
                    <ul className="list-disc pl-5 mt-2">
                        <li>Pays : {results.country_name || 'Non disponible'}</li>
                        <li>Organisation : {results.org || 'Non disponible'}</li>
                        <li>Système d'exploitation : {results.os || 'Non détecté'}</li>
                        <li>Ports ouverts : {results.ports ? results.ports.join(', ') : 'Aucun détecté'}</li>
                        <li>Ville : {results.city || 'Non disponible'}</li>
                        <li>Latitude : {results.latitude || 'Non disponible'}</li>
                        <li>Longitude : {results.longitude || 'Non disponible'}</li>
                        <li>Dernière mise à jour : {results.last_update || 'Non disponible'}</li>
                        <li>Noms d'hôte : {results.hostnames ? results.hostnames.join(', ') : 'Aucun détecté'}</li>
                    </ul>
                    {results.data && results.data.length > 0 && (
                        <>
                            <h4 className="font-semibold mt-4">Services détectés :</h4>
                            <ul className="list-disc pl-5 mt-2">
                                {results.data.map((service, index) => (
                                    <li key={index}>
                                        Port {service.port} : {service._shodan?.module || 'Inconnu'}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShodanScan;