import React, { useState, useEffect, Fragment } from 'react';
import { Icon } from '@iconify/react';
import fahrenheitIcon from '@iconify/icons-wi/fahrenheit';
import dayStormShowers from '@iconify/icons-wi/day-storm-showers';

const Weather = () => {
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
    !window.navigator.geolocation
      ? alert('Geolocation is not supported by your browser')
      : window.navigator.geolocation.getCurrentPosition((success) => {
          setLatitude(success.coords.latitude);
          setLongitude(success.coords.longitude);
        });
    setToggle(true);
  };

  // API call from backend with latitude and longitude, but not untill setState is done.
  useEffect(() => {
    console.log(latitude, longitude);
    latitude === null || longitude === null
      ? console.log('Not Ready')
      : fetch('/weather', options)
          .then((res) => res.json())
          .then((result) => setWeather([result]))
          .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  return (
    <Fragment>
      <div className='container'>
        {toggle === true ? (
          weather.map((data) => (
            <Fragment key={data.id}>
              <div className='row mx-auto'>
                <div className='col px-3 text-white d-flex align-items-center justify-content-end'>
                  <img
                    className='weatherIcons'
                    src={`https://download.spinetix.com/content/widgets/icons/weather/${data.weather[0].icon}.png`}
                    alt='weather condition'
                  />
                </div>
                <div className='col px-1 mt-2 text-white'>
                  <h3 className='m-0'>
                    {data.main.temp} <Icon icon={fahrenheitIcon} />
                  </h3>
                  <p className='text-uppercase my-1'>
                    {data.weather[0].description}
                  </p>
                  <p className='text-uppercase my-1'>{data.name}</p>
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <div className='row'>
            <div className='col text-white text-center mb-2'>
              <h4 className='mb-2'>
                Click below to view the current weather in your area
              </h4>
              <Icon icon={dayStormShowers} height={60} />
            </div>
          </div>
        )}
        <div className='row mx-auto d-flex justify-content-center'>
          <button className='btn btn-primary btn-md mt-3' onClick={getCoords}>
            Your Weather
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Weather;
