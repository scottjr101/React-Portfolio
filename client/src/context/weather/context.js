import React, { useState, useEffect, createContext } from 'react';

// Created context for Weather component
const WeatherContext = createContext();

// Then create a provider Component
const WeatherProvider = (props) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Setup variables for fetch parameter
  const data = { latitude, longitude };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  // Grab Lat and Long from user
  const getCoords = () => {
    setToggle(true);
    console.log(latitude, longitude);
    latitude === null || longitude === null
      ? alert(
          "You have't allowed this site to access your location, please do so now."
        )
      : fetch('/weather', options)
          .then((res) => res.json())
          .then((result) => setWeather([result]))
          .catch((error) => console.log(error));
  };

  // Grab Latitude and Longitude from user on page load.
  useEffect(() => {
    !window.navigator.geolocation
      ? alert('Geolocation is not supported by your browser')
      : window.navigator.geolocation.getCurrentPosition((success) => {
          setLatitude(success.coords.latitude);
          setLongitude(success.coords.longitude);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        getLocation: getCoords,
        weather,
        toggle,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
