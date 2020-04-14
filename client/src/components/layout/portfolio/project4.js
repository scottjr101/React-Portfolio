import React from 'react';
import Clicky from '../../../assets/imgs/Memory-Game.png';

const Project4 = () => {
  return (
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
                Simple little React App. Much like this portfolio site, I wanted
                to show off my abilities to construct responsive clean layouts.
                I really enjoy building on my CSS knowledge.
              </p>
              <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
              <p className='mb-0 text-white-50'>
                HTML, CSS, JQuery, Javascript, Bootstrap, and ReactJS.
              </p>
              <a
                className='d-block d-md-none my-2'
                href='https://react-memory-game-sl.surge.sh/'
              >
                Deployed Site
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
  );
};

export default Project4;
