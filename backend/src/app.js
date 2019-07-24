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
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;