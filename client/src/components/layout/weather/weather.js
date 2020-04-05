import React, { Fragment } from 'react';
import { WeatherContext } from '../../../context/weather/context';

const Weather = () => {
  return (
    <Fragment>
      <WeatherContext.Consumer>
        {context => (
          <Fragment>
            <button className='btn btn-primary' onClick={context.getLocation}>
              Click Here
            </button>
            {context.weather.map(data => (
              <Fragment key={data.id}>
                <div className='row'>
                  <div className='col-md-6 text-white'>
                    <ul>
                      <li>City Name: {data.name}</li>
                      <li>Current Longitude: {data.coord.lon}</li>
                      <li>Current Latitude: {data.coord.lat}</li>
                      <li>Current Temp: {data.main.temp} °F</li>
                    </ul>
                  </div>
                </div>
              </Fragment>
            ))}
          </Fragment>
        )}
      </WeatherContext.Consumer>
    </Fragment>
  );
};

export default Weather;
