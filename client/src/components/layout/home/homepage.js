import React, { Fragment } from 'react';
import MongodbLogo from '../../../assets/imgs/MongoDB-logo.png';
import NodejsLogo from '../../../assets/imgs/Nodejs-logo.png';
import ReactjsLogo from '../../../assets/imgs/React-logo.png';
import './homestyles.css';

const Home = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className='masthead2'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0'>Welcome</h1>
            <h2 className='text-white-50 mx-auto mt-2 mb-5'>
              Scroll down to begin.
            </h2>
          </div>
        </div>
      </header>
      {/* Made with Section */}
      <section className='about-section text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h3 className='text-white'>
                This site was crafted with{' '}
                <span role='img' aria-label='heart'>
                  ♥️
                </span>{' '}
                from the following:
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col Logos'>
              <img src={MongodbLogo} className='img-fluid' alt='MongoDB Logo' />
            </div>
            <div className='col d-flex align-items-center Logos'>
              <img src={NodejsLogo} className='img-fluid' alt='Nodejs Logo' />
            </div>
            <div className='col Logos'>
              <img src={ReactjsLogo} className='img-fluid' alt='Reactjs Logo' />
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section className='bg-light py-5'>
        <div className='container px-0'>
          {/* Featured Project Row */}
          <div className='row no-gutters my-1 my-lg-3'>
            <div className='col-xl-8 col-lg-7 p-3'>
              <h3 className='ABhighlight'>About Me</h3>
              <p className='text-black-50 mb-0 mt-3'>
                I'm a Full Stack Developer with passion for learning new
                frameworks. I continue to thrive in constantly changing
                environments. My work reflects my ability to provide efficient
                and clean code. I currently live Atlanta, Ga and I'm looking for
                a coding job. Head over to my Blog page to get to know me
                better.
              </p>
            </div>
            <div className='col-xl-4 col-lg-5 p-3'>
              <h3 className='Skhighlight'>Skills</h3>
              <p className='text-black-50 mb-0 mt-3'>
                I'm a Full Stack Developer with passion for learning new
                frameworks. I continue to thrive in constantly changing
                environments. My work reflects my ability to provide efficient
                and clean code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
