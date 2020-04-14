import React from 'react';
import Litty from '../../../assets/imgs/Litty-App.png';

const Project2 = () => {
  return (
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
                Passportjs for login verification, Nodejs and Expressjs for
                server-side scripting, MySQL for storing user login credentials
                and chat history, Handlebars as our HTML compiler, and
                Materialize for our CSS framework.
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
                Deployed Site
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
  );
};

export default Project2;
