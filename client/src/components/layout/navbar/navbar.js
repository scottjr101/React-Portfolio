import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      {/* Navigation */}
      <nav
        className='navbar navbar-expand-lg navbar-light fixed-top py-0'
        id='mainNav'
      >
        <div className='container pl-0'>
          <Link className='navbar-brand js-scroll-trigger SL' to='/home'>
            Scott Ladd
          </Link>
          <button
            className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='.navbar-collapse.show'
              >
                <Link className='nav-link' to='/home'>
                  Home
                </Link>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='.navbar-collapse.show'
              >
                <Link className='nav-link' to='/blog'>
                  Blog
                </Link>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='.navbar-collapse.show'
              >
                <Link className='nav-link' to='/portfolio'>
                  Portfolio
                </Link>
              </li>
              <li
                className='nav-item'
                data-toggle='collapse'
                data-target='.navbar-collapse.show'
              >
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
