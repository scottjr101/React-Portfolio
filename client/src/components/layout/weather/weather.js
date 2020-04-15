import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import fahrenheitIcon from '@iconify/icons-wi/fahrenheit';
import dayStormShowers from '@iconify/icons-wi/day-storm-showers';
import { WeatherContext } from '../../../context/weather/context';

const Weather = () => {
  return (
    <Fragment>
      <WeatherContext.Consumer>
        {(context) => (
          <div className='container'>
            {context.toggle === true ? (
              context.weather.map((data) => (
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
              <button
                className='btn btn-primary btn-md mt-3'
                onClick={context.getLocation}
              >
                Click Here
              </button>
            </div>
          </div>
        )}
      </WeatherContext.Consumer>
    </Fragment>
  );
};

export default Weather;
