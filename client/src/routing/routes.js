import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/layout/home/homepage';
import Navbar from '../components/layout/navbar/navbar';
import Footer from '../components/layout/footer/footer';
import NoMatch from '../components/layout/nomatch/noMatch';

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Routes;
