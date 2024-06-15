//contact.js
const express = require('express');
const router = express.Router();
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit_form') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = querystring.parse(body);
      const name = formData.name;
      const email = formData.email;
      const message = formData.message;

      // Do something with the form data, e.g., send an email or store in a database
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

      // Send a success message back to the user
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Thank you, ${name}! Your message has been received.`);
    });
  } else {
    // Serve the HTML file for other requests
    fs.readFile('./contact.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
});

module.exports = router;