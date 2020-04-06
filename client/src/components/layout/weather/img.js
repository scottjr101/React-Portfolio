import { WeatherContext } from '../../../context/weather/context';
import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import daySunny from '@iconify/icons-wi/day-sunny';
import nightClear from '@iconify/icons-wi/night-clear';
import dayCloudy from '@iconify/icons-wi/day-cloudy';
import nightAltCloudy from '@iconify/icons-wi/night-alt-cloudy';
import cloudIcon from '@iconify/icons-wi/cloud';
import cloudyIcon from '@iconify/icons-wi/cloudy';
import dayShowers from '@iconify/icons-wi/day-showers';
import nightAltShowers from '@iconify/icons-wi/night-alt-showers';
import dayRain from '@iconify/icons-wi/day-rain';
import nightAltRain from '@iconify/icons-wi/night-alt-rain';
import thunderstormIcon from '@iconify/icons-wi/thunderstorm';
import snowflakeCold from '@iconify/icons-wi/snowflake-cold';
import fogIcon from '@iconify/icons-wi/fog';
import volcanoIcon from '@iconify/icons-wi/volcano';

const WeatherIcons = () => {
  return (
    <Fragment>
      <WeatherContext.Consumer>
        {(context) => (
          <Fragment>
            {context.weather.map((data) => (
              <Fragment key={data.id}>
                {data.weather[0].icon === '01d' ? (
                  <Icon icon={daySunny} height={80} />
                ) : data.weather[0].icon === '01n' ? (
                  <Icon icon={nightClear} height={80} />
                ) : data.weather[0].icon === '02d' ? (
                  <Icon icon={dayCloudy} height={80} />
                ) : data.weather[0].icon === '02n' ? (
                  <Icon icon={nightAltCloudy} height={80} />
                ) : data.weather[0].icon === '03d' || '03n' ? (
                  <Icon icon={cloudIcon} height={80} />
                ) : data.weather[0].icon === '04d' || '04n' ? (
                  <Icon icon={cloudyIcon} height={80} />
                ) : data.weather[0].icon === '09d' ? (
                  <Icon icon={dayShowers} height={80} />
                ) : data.weather[0].icon === '09n' ? (
                  <Icon icon={nightAltShowers} height={80} />
                ) : data.weather[0].icon === '10d' ? (
                  <Icon icon={dayRain} height={80} />
                ) : data.weather[0].icon === '10n' ? (
                  <Icon icon={nightAltRain} height={80} />
                ) : data.weather[0].icon === '11d' || '11n' ? (
                  <Icon icon={thunderstormIcon} height={80} />
                ) : data.weather[0].icon === '13d' || '13n' ? (
                  <Icon icon={snowflakeCold} height={80} />
                ) : data.weather[0].icon === '50d' || '50n' ? (
                  <Icon icon={fogIcon} height={80} />
                ) : (
                  <Icon icon={volcanoIcon} height={80} />
                )}
              </Fragment>
            ))}
          </Fragment>
        )}
      </WeatherContext.Consumer>
    </Fragment>
  );
};

export default WeatherIcons;
