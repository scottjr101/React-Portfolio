import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './landingstyles.css';

const Landing = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className='masthead'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0'>Scott Ladd</h1>
            <div className='container d-flex justify-content-center px-0'>
              <Link to='/home'>
                <div className='A-btn btn-two'>
                  <span>Enter</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Landing;
