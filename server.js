const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const ApiKey = process.env.APIKey;

const app = express();

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Define API routes here
app.post('/weather', async (req, res) => {
  const { latitude, longitude } = req.body;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.data;

    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
