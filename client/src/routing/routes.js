import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/layout/home/homepage';
import Navbar from '../components/layout/navbar/navbar';

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
