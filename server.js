const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

server.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });