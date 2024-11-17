import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

// Route pour gérer les requêtes GET à la racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express !');
});

// Route pour traiter le scan
app.post('/api/scan', [
    body('url').isURL().withMessage('URL must be valid'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const cleanUrl = req.body.url.replace(/^https?:\/\//, "");
        const response = await axios.post(`https://www.virustotal.com/api/v3/urls`, `url=${encodeURIComponent(cleanUrl)}`, {
            headers: {
                'x-apikey': process.env.VITE_VIRUS_TOTAL_API_KEY,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: "Erreur inconnue" });
    }
});

// Route pour récupérer le rapport du scan
app.get('/api/report/:scanId', async (req, res) => {
    const { scanId } = req.params;

    try {
        const response = await axios.get(`https://www.virustotal.com/api/v3/analyses/${scanId}`, {
            headers: {
                'x-apikey': process.env.VITE_VIRUS_TOTAL_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: "Erreur inconnue" });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on https://dented-ripple-pink.glitch.me:${PORT}`);
});