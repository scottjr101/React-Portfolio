import React from 'react';
import Reach from '../../../assets/imgs/reach-display.png';

const Project1 = () => {
  return (
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
              <h4 className='text-white'>Reach - Social Networking App</h4>
              <p className='mb-3 text-white-50'>
                Reach is a social media site with a variety of ways to
                communicate with friends or meet new people. With posts, instant
                chat, video chat and more, you have the ability to create an
                account with backend password encryption and customize your own
                profile to share interesting things about yourself.
              </p>
              <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
              <p className='mb-0 text-white-50'>
                JSX, CSS, Bootstrap, Javascript, React.js, Redux, Socket.io,
                MongoDB, Mongoose, JSON Web Tokens, Bcrypt, and Node.js.
              </p>
              <a
                className='d-block d-md-none my-2'
                href='https://project3-reach.herokuapp.com/'
              >
                Deployed Site
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
  );
};

export default Project1;
