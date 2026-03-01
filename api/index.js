const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Load data using require to ensure it's bundled by Vercel
const portfolioData = require('./data.json');
const servicesData = require('./services.json');

// Routes
app.get('/api/portfolio', (req, res) => {
    res.json(portfolioData);
});

app.get('/api/services', (req, res) => {
    res.json(servicesData);
});

// For Vercel, we export the app
module.exports = app;
