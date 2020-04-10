import React, { Fragment } from 'react';
import PortHeader from '../../../assets/imgs/Port-header.png';
import Reach from '../../../assets/imgs/reach-display.png';
import Litty from '../../../assets/imgs/Litty-App.png';
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
                  being a part of. Each project includes a link to the deployed
                  site and the Github repository.
                </p>
              </div>
            </div>
          </div>
          {/* Project One Row */}
          <div className='row justify-content-center no-gutters mb-5 mb-lg-5 mb-xl-0'>
            <div className='img-preview col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Reach} alt='Reach App' />
              <div className='overlay d-flex align-items-center justify-content-center'>
                <div className='row d-flex align-items-center justify-content-center'>
                  <div className='col-7 px-0'>
                    <a href='https://project3-reach.herokuapp.com/'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Deployed site
                      </div>
                    </a>
                  </div>
                  <div className='col-7 px-0'>
                    <a href='https://github.com/Fgailey/Reach'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Github Repo
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-9 col-xl-6'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-xl-left'>
                    <h4 className='text-white'>
                      Reach - Social Networking App
                    </h4>
                    <p className='mb-3 text-white-50'>
                      Reach is a social media site with a variaty of ways to
                      communicate with friends or meet new people. With posts,
                      instant chat, video chat and more! You have the ability to
                      create an account with backend password encryption and
                      customize your own profile to share interesting things
                      about yourself.
                    </p>
                    <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
                    <p className='mb-0 text-white-50'>
                      JSX, CSS, Bootstrap, Javascript, React.js, Redux,
                      Socket.io, MongoDB, Mongoose, JSON Web Tokens, Bcrypt, and
                      Node.js
                    </p>
                    {/* <hr className='d-none d-xl-block mb-0 ml-0' /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Two Row */}
          <div className='row justify-content-center no-gutters'>
            <div className='img-preview col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Litty} alt='Litty App' />
              <div className='overlay d-flex align-items-center justify-content-center'>
                <a href='https://intense-tor-53215.herokuapp.com/'>
                  <div className='btn btn-primary btn-md mx-1'>
                    Deployed site
                  </div>
                </a>
                <a href='https://github.com/scottjr101/Litty-Chat-App'>
                  <div className='btn btn-primary btn-md mx-1'>Github Repo</div>
                </a>
              </div>
            </div>
            <div className='col-lg-9 col-xl-6 order-xl-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-xl-right'>
                    <h4 className='text-white'>Mountains</h4>
                    <p className='mb-0 text-white-50'>
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                    <hr className='d-none d-xl-block mb-0 mr-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Three Row */}
          <div className='row justify-content-center no-gutters mt-5 mb-5 mb-lg-5 mb-xl-0'>
            <div className='col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Reach} alt='Reach App' />
            </div>
            <div className='col-lg-9 col-xl-6'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-xl-left'>
                    <h4 className='text-white'>Misty</h4>
                    <p className='mb-0 text-white-50'>
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                    <hr className='d-none d-xl-block mb-0 ml-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Four Row */}
          <div className='row justify-content-center no-gutters'>
            <div className='col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Litty} alt='Litty App' />
            </div>
            <div className='col-lg-9 col-xl-6 order-xl-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-xl-right'>
                    <h4 className='text-white'>Mountains</h4>
                    <p className='mb-0 text-white-50'>
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                    <hr className='d-none d-xl-block mb-0 mr-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
