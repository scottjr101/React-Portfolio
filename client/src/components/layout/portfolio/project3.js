import React from 'react';
import NPR from '../../../assets/imgs/NPR-scraper.png';

const Project3 = () => {
  return (
    <div className='row justify-content-center no-gutters my-5 mb-lg-5 mb-xl-0'>
      <div className='img-preview col-lg-9 col-xl-6'>
        <img className='img-fluid' src={NPR} alt='Reach App' />
        <div className='overlay d-none d-md-flex align-items-center justify-content-center'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-7 px-0'>
              <a href='https://nprnewsscraper1.herokuapp.com/'>
                <div className='d-flex justify-content-center btn btn-primary btn-md my-2'>
                  Deployed site
                </div>
              </a>
            </div>
            <div className='col-7 px-0'>
              <a href='https://github.com/scottjr101/Mongo-Scraper'>
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
              <h4 className='text-white'>NPR News Scraper App</h4>
              <p className='mb-3 text-white-50'>
                This site scrapes news articles from NPRs text only news site.
                It then saves them to a MongoDB Atlas database and renders them
                onto the page for the users to view. You can then save or
                un-save articles. Once an article has been saved you, can add a
                note which all gets saved to the database.
              </p>
              <h6 className='text-white mb-3'>TECHNOLOGIES USED</h6>
              <p className='mb-0 text-white-50'>
                HTML, CSS, JQuery, Javascript, Node.js, MongoDB, Bootstrap, and
                Handlebars.
              </p>
              <a
                className='d-block d-md-none my-2'
                href='https://nprnewsscraper1.herokuapp.com/'
              >
                Deployed Site
              </a>
              <a
                className='d-block d-md-none'
                href='https://github.com/scottjr101/Mongo-Scraper'
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

export default Project3;
