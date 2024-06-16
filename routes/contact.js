//contact.js
const express = require('express');
const router = express.Router();
const path = require('path'); 

router.post('/submit_form', (req, res) => {
  const formData = req.body;
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

      // Do something with the form data, e.g., send an email or store in a database
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

      // Send a success message back to the user
      res.status(200).send(`Thank you, ${name}! Your message has been received.`);
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

module.exports = router;