//api.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3301@Wire',
    database: 'farm2table'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// API endpoint for products
router.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).send('Error fetching products.');
        }
        res.json(results);
    });
});

// API endpoint for farmers
router.get('/farmers', (req, res) => {
    const query = 'SELECT * FROM farmers';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching farmers:', err);
            return res.status(500).send('Error fetching farmers.');
        }
        res.json(results);
    });
});

module.exports = router;
