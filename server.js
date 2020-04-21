const express = require('express');
var cors = require('cors')
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
app.use(cors())

// Define API routes here
app.post('/weather', async (req, res) => {
  // Pull Lat and Long out of HTTP headers
  const { latitude, longitude } = req.body;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.data;
    // Debugging
    console.log(`OpenWeatherMap API Call Successful!`);
    // Send weather data from Openweather back to client side
    return res.json(data);
    // Catch any errors
  } catch (error) {
    console.log(
      `OpenWeatherMap API Call Failed, This Is Why ==> '${error.response.statusText}'`
    );
  }
});

app.post('/weather-zipcode', async (req, res) => {
  // Pull Lat and Long out of HTTP headers
  const { zipcode } = req.body;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${ApiKey}`
    );
    const data = await response.data;
    // Debugging
    console.log(`OpenWeatherMap API Call Successful!`);
    // Send weather data from Openweather back to client side
    return res.json(data);
    // Catch any errors
  } catch (error) {
    console.log(
      `OpenWeatherMap API Call Failed, This Is Why ==> '${error.response.statusText}'`
    );
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
