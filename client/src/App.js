import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WeatherProvider } from './context/weather/context';
import Landing from './components/layout/landing/landingpage';
import Routes from './routing/routes';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <WeatherProvider>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </WeatherProvider>
        <ScrollUpButton AnimationDuration={1500} />
      </Fragment>
    </Router>
  );
};

export default App;
