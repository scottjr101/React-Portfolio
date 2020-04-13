import React, { Fragment } from 'react';
import PortHeader from '../../../assets/imgs/Port-header.png';
import Reach from '../../../assets/imgs/reach-display.png';
import Litty from '../../../assets/imgs/Litty-App.png';
import NPR from '../../../assets/imgs/NPR-scraper.png';
import Clicky from '../../../assets/imgs/Memory-Game.png';
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
          <div className='row justify-content-center no-gutters mb-5 mb-lg-5 mb-xl-0'>
            <div className='img-preview col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Reach} alt='Reach App' />
              <div className='overlay d-none d-md-flex align-items-center justify-content-center'>
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
                      Reach is a social media site with a variety of ways to
                      communicate with friends or meet new people. With posts,
                      instant chat, video chat and more, you have the ability to
                      create an account with backend password encryption and
                      customize your own profile to share interesting things
                      about yourself.
                    </p>
                    <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
                    <p className='mb-0 text-white-50'>
                      JSX, CSS, Bootstrap, Javascript, React.js, Redux,
                      Socket.io, MongoDB, Mongoose, JSON Web Tokens, Bcrypt, and
                      Node.js.
                    </p>
                    <a
                      className='d-block d-md-none my-2'
                      href='https://project3-reach.herokuapp.com/'
                    >
                      Deployed site
                    </a>
                    <a
                      className='d-block d-md-none'
                      href='https://github.com/Fgailey/Reach'
                    >
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Two Row */}
          <div className='row justify-content-center no-gutters'>
            <div className='img-preview col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Litty} alt='Litty App' />
              <div className='overlay d-none d-md-flex align-items-center justify-content-center'>
                <div className='row d-flex align-items-center justify-content-center'>
                  <div className='col-7 px-0'>
                    <a href='https://intense-tor-53215.herokuapp.com/'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Deployed site
                      </div>
                    </a>
                  </div>
                  <div className='col-7 px-0'>
                    <a href='https://github.com/scottjr101/Litty-Chat-App'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Github Repo
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-9 col-xl-6 order-xl-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-xl-right'>
                    <h4 className='text-white'>Litty - Chat App</h4>
                    <p className='mb-3 text-white-50'>
                      Litty is chat room with sign-up/login feature. Built with
                      Passportjs for login verification, Nodejs and Expressjs
                      for server-side scripting, MySQL for storing user login
                      credentials and chat history, Handlebars as our HTML
                      compiler, and Materialize for our CSS framework.
                    </p>
                    <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
                    <p className='mb-0 text-white-50'>
                      HTML, CSS, JQuery, Javascript, Node.js, MySQL, Socket.io,
                      Passportjs, Materialize, and Handlebars.
                    </p>
                    <a
                      className='d-block d-md-none my-2'
                      href='https://intense-tor-53215.herokuapp.com/'
                    >
                      Deployed site
                    </a>
                    <a
                      className='d-block d-md-none'
                      href='https://github.com/scottjr101/Litty-Chat-App'
                    >
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Three Row */}
          <div className='row justify-content-center no-gutters my-5 mb-lg-5 mb-xl-0'>
            <div className='img-preview col-lg-9 col-xl-6'>
              <img className='img-fluid' src={NPR} alt='Reach App' />
              <div className='overlay d-none d-md-flex align-items-center justify-content-center'>
                <div className='row d-flex align-items-center justify-content-center'>
                  <div className='col-7 px-0'>
                    <a href='https://nprnewsscraper1.herokuapp.com/'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Deployed site
                      </div>
                    </a>
                  </div>
                  <div className='col-7 px-0'>
                    <a href='https://github.com/scottjr101/Mongo-Scraper'>
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
                    <h4 className='text-white'>NPR News Scraper App</h4>
                    <p className='mb-3 text-white-50'>
                      This site scrapes news articles from NPRs text only news
                      site. It then saves them to a MongoDB Atlas database and
                      renders them onto the page for the users to view. You can
                      then save or un-save articles. Once an article has been
                      saved you, can add a note which all gets saved to the
                      database.
                    </p>
                    <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
                    <p className='mb-0 text-white-50'>
                      HTML, CSS, JQuery, Javascript, Node.js, MongoDB,
                      Bootstrap, and Handlebars.
                    </p>
                    <a
                      className='d-block d-md-none my-2'
                      href='https://nprnewsscraper1.herokuapp.com/'
                    >
                      Deployed site
                    </a>
                    <a
                      className='d-block d-md-none'
                      href='https://github.com/scottjr101/Mongo-Scraper'
                    >
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Four Row */}
          <div className='row justify-content-center no-gutters'>
            <div className='img-preview col-lg-9 col-xl-6'>
              <img className='img-fluid' src={Clicky} alt='Litty App' />
              <div className='overlay d-none d-md-flex align-items-center justify-content-center'>
                <div className='row d-flex align-items-center justify-content-center'>
                  <div className='col-7 px-0'>
                    <a href='https://react-memory-game-sl.surge.sh/'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Deployed site
                      </div>
                    </a>
                  </div>
                  <div className='col-7 px-0'>
                    <a href='https://github.com/scottjr101/Clicky-Game'>
                      <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                        Github Repo
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-9 col-xl-6 order-xl-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-xl-right'>
                    <h4 className='text-white'>Old Greg - Memory Game App</h4>
                    <p className='mb-3 text-white-50'>
                      Simple little React App. Much like this portfolio site, I
                      wanted to show off my abilities to construct responsive
                      clean layouts. I really enjoy building on my CSS
                      knowledge.
                    </p>
                    <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
                    <p className='mb-0 text-white-50'>
                      HTML, CSS, JQuery, Javascript, Bootstrap, and ReactJS.
                    </p>
                    <a
                      className='d-block d-md-none my-2'
                      href='https://react-memory-game-sl.surge.sh/'
                    >
                      Deployed site
                    </a>
                    <a
                      className='d-block d-md-none'
                      href='https://github.com/scottjr101/Clicky-Game'
                    >
                      Github Repo
                    </a>
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
