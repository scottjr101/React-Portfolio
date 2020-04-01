import React, { Fragment } from 'react';
import './homestyles.css';

const Home = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className='masthead2'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0'>Hello</h1>
            <h2 className='text-white-50 mx-auto mt-2 mb-5'>
              Welcome to my page. Scroll down to begin.
            </h2>
          </div>
        </div>
      </header>
      {/* About Section */}
      <section id='about' className='about-section text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h2 className='text-white mb-4'>Built with Bootstrap 4</h2>
              <p className='text-white-50'>
                Grayscale is a free Bootstrap theme created by Start Bootstrap.
                It can be yours right now, simply download the template on
                <a href='http://startbootstrap.com/template-overviews/grayscale/'>
                  the preview page
                </a>
                . The theme is open source, and you can use it for any purpose,
                personal or commercial.
              </p>
            </div>
          </div>
          {/* <img src='img/ipad.png' className='img-fluid' alt /> */}
        </div>
      </section>
      {/* Projects Section */}
      <section id='projects' className='projects-section bg-light'>
        <div className='container'>
          {/* Featured Project Row */}
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              {/* <img
                className='img-fluid mb-3 mb-lg-0'
                src='img/bg-masthead.jpg'
                alt
              /> */}
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h4>Shoreline</h4>
                <p className='text-black-50 mb-0'>
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download
                  it, customize it, and publish your website!
                </p>
              </div>
            </div>
          </div>
          {/* Project One Row */}
          <div className='row justify-content-center no-gutters mb-5 mb-lg-0'>
            <div className='col-lg-6'>
              {/* <img className='img-fluid' src='img/demo-image-01.jpg' alt /> */}
            </div>
            <div className='col-lg-6'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-lg-left'>
                    <h4 className='text-white'>Misty</h4>
                    <p className='mb-0 text-white-50'>
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                    <hr className='d-none d-lg-block mb-0 ml-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Two Row */}
          <div className='row justify-content-center no-gutters'>
            <div className='col-lg-6'>
              {/* <img className='img-fluid' src='img/demo-image-02.jpg' alt /> */}
            </div>
            <div className='col-lg-6 order-lg-first'>
              <div className='bg-black text-center h-100 project'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-lg-right'>
                    <h4 className='text-white'>Mountains</h4>
                    <p className='mb-0 text-white-50'>
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well, try this theme on a small screen!
                    </p>
                    <hr className='d-none d-lg-block mb-0 mr-0' />
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

export default Home;
