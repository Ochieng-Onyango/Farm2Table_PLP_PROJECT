//server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const port = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

// Use routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Serve home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
