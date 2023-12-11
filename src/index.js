const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Express API!' });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'test reached successfully!' });
})

app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'another test reached successfully!' });
})

module.exports = app;
