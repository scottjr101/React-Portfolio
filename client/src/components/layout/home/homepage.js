import React, { Fragment } from 'react';
import MongodbLogo from '../../../assets/imgs/MongoDB-logo.png';
import NodejsLogo from '../../../assets/imgs/Nodejs-logo.png';
import ReactjsLogo from '../../../assets/imgs/React-logo.png';
import Me from '../../../assets/imgs/Profile-pic.jpg';
import Icons from './icons';
import { Icon } from '@iconify/react';
import checkBold from '@iconify/icons-mdi/check-bold';
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
      <section className='bg-light py-5 px-2 px-md-5'>
        <div className='container-fluid px-0'>
          <div className='row mx-0 my-1 my-lg-3'>
            <div className='bg-black col-11 col-lg-8 col-xl-8 px-2 text-center text-xl-left mx-auto'>
              <div className='d-flex h-100 p-4'>
                <div className='w-100 my-auto'>
                  <h3 className='text-white m-0'>About Me</h3>
                  <p className='text-white-50 mb-3 mt-2'>
                    I'm a Full Stack Developer with passion for learning new
                    frameworks. I continue to thrive in constantly changing
                    environments. My work reflects my ability to provide
                    efficient and clean code. I currently live Atlanta, Ga and
                    I'm looking for a coding job.
                  </p>
                  <h3 className='text-white m-0'>Interest</h3>
                  <p className='text-white-50 mb-5 mb-xl-0 mt-2'>
                    Aside from spending most of time building new React
                    projects, I enjoy relaxing at home with my wife and seven
                    animals! We love to watch comedy and cooking shows like
                    Community, 30 Rock, LetterKenny, and TopChef.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-11 col-lg-8 col-xl-4 mx-auto px-0'>
              <img className='img-fluid' src={Me} alt='Tenth grade realness' />
            </div>
          </div>
          {/* Skills Section */}
          <div className='skills'>
            <div className='row p-4 d-flex justify-content-center'>
              <h1 className='font-weight-bolder'>Skills</h1>
            </div>
            <div className='row mb-2 py-2 pl-4 pr-3'>
              <h3 className='m-0'>Programming Languages & Tools</h3>
            </div>
            <Icons />
            <div className='row my-2 py-2 px-4'>
              <h3 className='m-0'>My Strengths</h3>
            </div>
            <div className='row my-0 pt-1 pl-4 pl-md-5 pr-3'>
              <Icon icon={checkBold} height={25} />{' '}
              <h5 className='CustomMargin pl-2 text-black-75'>
                Agile Development & Scrum
              </h5>
            </div>
            <div className='row my-0 pt-1 pl-4 pl-md-5 pr-3'>
              <Icon icon={checkBold} height={25} />{' '}
              <h5 className='CustomMargin pl-2 text-black-75'>
                Mobile-First, Responsive Design
              </h5>
            </div>
            <div className='row my-0 pt-1 pl-4 pl-md-5 pr-3'>
              <Icon icon={checkBold} height={25} />{' '}
              <h5 className='CustomMargin pl-2 text-black-75'>
                Hard Worker, Fast Learner
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
