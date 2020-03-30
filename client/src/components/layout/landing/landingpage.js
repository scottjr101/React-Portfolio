import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className='masthead'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0'>Scott Ladd</h1>
            
            <a href='#about' className='js-scroll-trigger enter'>
              Enter
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Landing;
