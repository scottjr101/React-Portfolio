import React, { Fragment } from 'react';
import PortHeader from '../../../assets/imgs/Port-header.png';
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';
import './portstyles.css';

const Portfolio = () => {
  return (
    <Fragment>
      <div className='FadedHeader' />
      <section className='projects-section bg-light'>
        <div className='container'>
          {/* Featured Project Row */}
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img
                className='img-fluid mb-3 mb-lg-0'
                src={PortHeader}
                alt='Portfolio Header'
              />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h4>Portfolio</h4>
                <p className='text-black-50 mb-0'>
                  Take a look at all of the projects I have had the pleasure of
                  being a part of. Each one includes a link to the deployed site
                  and the Github repository.
                </p>
              </div>
            </div>
          </div>
          {/* Project One Row */}
          <Project1 />
          {/* Project Two Row */}
          <Project2 />
          {/* Project Three Row */}
          <Project3 />
          {/* Project Four Row */}
          <Project4 />
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
