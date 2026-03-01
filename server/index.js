const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));
app.use('/public', express.static(path.join(__dirname, '../public')));

// Helper function to read data
const readData = (fileName = 'data.json') => {
    try {
        const filePath = path.join(__dirname, fileName);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8');
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${fileName}:`, error);
        return [];
    }
};

// Helper function to write data
const writeData = (data, fileName = 'data.json') => {
    try {
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error(`Error writing ${fileName}:`, error);
    }
};

// Routes
app.get('/api/portfolio', (req, res) => {
    const data = readData();
    res.json(data);
});

app.post('/api/portfolio', (req, res) => {
    const data = readData();
    const newItem = {
        id: Date.now(),
        ...req.body
    };
    data.push(newItem);
    writeData(data);
    res.status(201).json(newItem);
});

app.put('/api/portfolio/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);

    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        writeData(data);
        res.json(data[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.delete('/api/portfolio/:id', (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const filteredData = data.filter(item => item.id !== id);
    writeData(filteredData);
    res.status(204).send();
});

// Services Routes
app.get('/api/services', (req, res) => {
    const data = readData('services.json');
    res.json(data);
});

app.post('/api/services', (req, res) => {
    const data = readData('services.json');
    const newItem = {
        id: Date.now(),
        ...req.body
    };
    data.push(newItem);
    writeData(data, 'services.json');
    res.status(201).json(newItem);
});

app.put('/api/services/:id', (req, res) => {
    const data = readData('services.json');
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);

    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        writeData(data, 'services.json');
        res.json(data[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.delete('/api/services/:id', (req, res) => {
    const data = readData('services.json');
    const id = parseInt(req.params.id);
    const filteredData = data.filter(item => item.id !== id);
    writeData(filteredData, 'services.json');
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
