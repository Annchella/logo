const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/portfolio', (req, res) => {
    const filePath = path.join(process.cwd(), 'server', 'data.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(data);
});

app.get('/api/services', (req, res) => {
    const filePath = path.join(process.cwd(), 'server', 'services.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(data);
});

// For Vercel, we export the app
module.exports = app;
