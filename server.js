//server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const path = require('path');
const port = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const contactRoutes = require('./routes/contact');

// Use routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/contact', contactRoutes);

// Serve home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Handle logout
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home'); 
        }
        res.clearCookie('connect.sid'); // Clear the cookie
        res.redirect('/login'); // Redirect to login page
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
