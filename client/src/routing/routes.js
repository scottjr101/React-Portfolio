import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/layout/home/homepage';
import Navbar from '../components/layout/navbar/navbar';
import Footer from '../components/layout/footer/footer';

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Routes;
