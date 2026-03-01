const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve static assets from the src/assets folder
app.use('/api/assets', express.static(path.join(__dirname, '..', 'src', 'assets')));
app.use('/api/public', express.static(path.join(__dirname, '..', 'public')));

// Routes
app.get('/api/portfolio', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data.json');
        if (!fs.existsSync(filePath)) {
            return res.status(500).json({ error: 'data.json not found', path: filePath });
        }
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/services', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'services.json');
        if (!fs.existsSync(filePath)) {
            return res.status(500).json({ error: 'services.json not found', path: filePath });
        }
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// For Vercel, we export the app
module.exports = app;
