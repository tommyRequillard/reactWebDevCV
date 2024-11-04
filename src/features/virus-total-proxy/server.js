import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/scan', async (req, res) => {
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
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: "Erreur inconnue" });
    }
});

// dans un terminal saisir node server.js sur le path de ce folder
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
