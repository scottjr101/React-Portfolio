import React, { Fragment } from 'react';
import Weather from "../weather/weather";

const Footer = () => {
  return (
    <Fragment>
      {/* Signup Section */}
      <section id='signup' className='signup-section'>
        <Weather />
      </section>
      {/* Contact Section */}
      <section className='contact-section bg-black'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mb-3 mb-md-0'>
              <div className='card py-4 h-100'>
                <div className='card-body text-center'>
                  <i className='font-size-6 fas fa-file-word text-primary mb-2' />
                  <h4 className='text-uppercase m-0'>Resume</h4>
                  <hr className='my-4' />
                  <div className='text-black-50'>
                    <a href='https://docs.google.com/file/d/1QOsbAmm9rI3eX5PtsUy2ynAToHJxshOc/view'>
                      Click here to view
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3 mb-md-0'>
              <div className='card py-4 h-100'>
                <div className='card-body text-center'>
                  <i className='font-size-6 fas fa-envelope text-primary mb-2' />
                  <h4 className='text-uppercase m-0'>Email</h4>
                  <hr className='my-4' />
                  <div className='text-black-50'>
                    <a href='mailto:scottjr101@gmail.com'>
                      Scottjr101@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3 mb-md-0'>
              <div className='card py-4 h-100'>
                <div className='card-body text-center'>
                  <i className='font-size-6 fas fa-mobile-alt text-primary mb-2' />
                  <h4 className='text-uppercase m-0'>Phone</h4>
                  <hr className='my-4' />
                  <div className='text-black-50'>+1 (404) 435-7803</div>
                </div>
              </div>
            </div>
          </div>
          <div className='social d-flex justify-content-center font-size-6'>
            <a
              href='https://www.linkedin.com/in/scott-ladd-1988abc/'
              className='mx-2'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a href='https://reddit.com/u/Scottjr101' className='mx-2'>
              <i className='fab fa-reddit-alien' />
            </a>
            <a href='https://github.com/scottjr101' className='mx-2'>
              <i className='fab fa-github-alt' />
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className='bg-black text-center text-white-50'>
        <div className='container'>Copyright &copy; Scott Ladd 2020</div>
      </footer>
    </Fragment>
  );
};

export default Footer;
