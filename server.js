const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.post('/register', (req, res) => {
    const { name, email, password, location } = req.body;
    const query = 'INSERT INTO users (name, email, password, location) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, password, location], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).send('Error registering new user.');
        }
        res.redirect('/login');
    });
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).send('Error during login.');
        }
        if (results.length > 0) {
            res.redirect('/home');
        } else {
            res.redirect('/login');
        }
    });
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
