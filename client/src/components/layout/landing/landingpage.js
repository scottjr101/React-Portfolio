import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className='masthead'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0'>Scott Ladd</h1>
            <div className='container d-flex justify-content-center px-0'>
              <a href='#about' className='js-scroll-trigger'>
                <div className='A-btn btn-two'>
                  <span>Enter</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Landing;
