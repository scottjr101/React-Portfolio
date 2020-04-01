import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      {/* Navigation */}
      <nav
        className='navbar navbar-expand-lg navbar-light fixed-top'
        id='mainNav'
      >
        <div className='container pl-0'>
          <a className='navbar-brand js-scroll-trigger SL' href='#page-top'>
            Scott Ladd
          </a>
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
            <i id='NavMenu' className='fas fa-bars pl-1' />
            {/* <i className="fas fa-skull" /> */}
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#projects'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll-trigger' href='#signup'>
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
