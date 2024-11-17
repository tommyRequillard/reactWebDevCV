import { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js'; // Importation de la bibliothèque crypto-js

const HaveIBeenPwnedPasswordCheck = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCheck = async () => {
        setLoading(true);
        setError('');
        setResult(null);

        // Hacher le mot de passe avec SHA-1
        const hashedPassword = CryptoJS.SHA1(password).toString().toUpperCase();
        const prefix = hashedPassword.slice(0, 5);
        const suffix = hashedPassword.slice(5);

        try {
            // Vérifiez si le mot de passe a été compromis
            const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);

            // Vérifiez si le suffixe du mot de passe est présent dans la réponse
            const data = response.data;
            const lines = data.split('\n');
            const found = lines.some((line: string) => line.startsWith(suffix));

            if (found) {
                setResult("Ce mot de passe a été compromis !");
            } else {
                setResult("Ce mot de passe n\'a pas été compromis.");
            }
        } catch (err) {
            setError(`Erreur lors de la vérification : ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-2 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Vérification de compromission des Mots de Passe</h3>
            <input 
                type="password" 
                placeholder="Verifier la compromission d'un mot de passe" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="border p-2 rounded w-full mt-2"
            />
            <button 
                onClick={handleCheck} 
                className="mt-2 bg-blue-500 hover:bg-indigo-500 text-white p-2 rounded"
                disabled={loading}
            >
                {loading ? 'Vérification...' : 'Vérifier'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {result && (
                <div className="mt-4">
                    <h4 className="font-semibold">Résultat (cf https://haveibeenpwned.com/):</h4>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default HaveIBeenPwnedPasswordCheck;