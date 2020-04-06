import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import fahrenheitIcon from '@iconify/icons-wi/fahrenheit';
import { WeatherContext } from '../../../context/weather/context';
// import './weatherstyles.css';
import WeatherIcons from './img';

const Weather = () => {
  return (
    <Fragment>
      <WeatherContext.Consumer>
        {(context) => (
          <div className='container'>
            {context.weather.map((data) => (
              <Fragment key={data.id}>
                <div className='row mx-auto'>
                  <div className='col text-white d-flex align-items-center justify-content-end'>
                    <WeatherIcons />{' '}
                  </div>
                  <div className='col text-white'>
                    <h1 className='m-0'>
                      {data.main.temp} <Icon icon={fahrenheitIcon} />
                    </h1>
                    <p className='text-uppercase my-1'>
                      {data.weather[0].description}
                    </p>
                    <p className='text-uppercase my-1'>{data.name}</p>
                  </div>
                </div>
              </Fragment>
            ))}
            <div className='row mx-auto d-flex justify-content-center'>
              <button
                className='btn btn-primary mt-3'
                onClick={context.getLocation}
              >
                Current Weather
              </button>
            </div>
          </div>
        )}
      </WeatherContext.Consumer>
    </Fragment>
  );
};

export default Weather;
