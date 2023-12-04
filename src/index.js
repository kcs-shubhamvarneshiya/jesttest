const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Express API!' });
});

// You can define more routes and middleware here
app.listen(8000,()=>{
    console.log('server is running');
})
module.exports = app;
