import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by"); // Désactiver l'en-tête x-powered-by

app.post('/api/scan', [
    body('url').isURL().withMessage('URL must be valid'), // Validation de l'URL
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const cleanUrl = req.body.url.replace(/^https?:\/\//, "");
        const response = await axios.post('https://www.virustotal.com/api/v3/urls', `url=${encodeURIComponent(cleanUrl)}`, {
            headers: {
                'x-apikey': process.env.VIRUS_TOTAL_API_KEY,
                'Content-Type': 'application/x-www-form-urlencoded',
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
    console.log(`Server running on http://localhost:${PORT}`);
});
