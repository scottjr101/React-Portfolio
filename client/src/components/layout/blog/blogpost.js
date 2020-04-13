import React, { Fragment } from 'react';
import BlogHeader from '../../../assets/imgs/Blog-header.jpg';

const Blog = () => {
  return (
    <Fragment>
      <div className='FadedHeader' />
      <div className='projects-section bg-light'>
        <div className='container'>
          <div className='row align-items-center no-gutters mb-4 mb-lg-5'>
            <div className='col-xl-8 col-lg-7'>
              <img
                className='img-fluid mb-3 mb-lg-0'
                src={BlogHeader}
                alt='Blog Header'
              />
            </div>
            <div className='col-xl-4 col-lg-5'>
              <div className='featured-text text-center text-lg-left'>
                <h4>Blog Post</h4>
                <p className='text-black-50 mb-0'>
                  This is where I will discuss about my projects and new
                  technologies I come across in more depth.
                </p>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className='card p-5 bg-dark'>
              <h2 className='m-0 text-white'>No Post Yet</h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
