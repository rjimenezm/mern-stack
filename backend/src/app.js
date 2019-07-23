const express = require('express');
const cors = require('cors');
const app = express();

// settings 
// Variables a nivel de servidor. Nombre del servidor, Motor de plantillas, Puerto definido etc.
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', (req, res) => res.send('Users Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));

module.exports = app;