import React, { useState, useEffect, createContext } from 'react';

// Created context for Weather component
const WeatherContext = createContext();

// Then create a provider Component
const WeatherProvider = props => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState([]);
  
  // Grab Lat and Long from user
  const getCoords = () => {
    !window.navigator.geolocation
      ? alert('Geolocation is not supported by your browser')
      : window.navigator.geolocation.getCurrentPosition(success => {
          setLatitude(success.coords.latitude);
          setLongitude(success.coords.longitude);
        });
  };
  
  // Setup variables for fetch parameter
  const data = { latitude, longitude };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  
  // Hook for ComponentDidUpdate, waiting for the lat and long to change.
  useEffect(() => {
    latitude === null || longitude === null
      ? console.log('Not Ready')
      : fetch('/weather', options)
          .then(res => res.json())
          .then(result => setWeather([result]))
          .catch(error => console.log(error));
  }, [latitude, longitude, options, setWeather]);

  return (
    <WeatherContext.Provider
      value={{
        getLocation: getCoords,
        weather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
