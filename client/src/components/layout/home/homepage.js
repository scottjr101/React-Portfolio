import React, { Fragment } from 'react';
import MongodbLogo from '../../../assets/imgs/MongoDB-logo.png';
import NodejsLogo from '../../../assets/imgs/Nodejs-logo.png';
import ReactjsLogo from '../../../assets/imgs/React-logo.png';
import Me from '../../../assets/imgs/High-school.png';
import { Icon } from '@iconify/react';
import languageHtml5 from '@iconify/icons-mdi/language-html5';
import languageCss3 from '@iconify/icons-mdi/language-css3';
import jqueryIcon from '@iconify/icons-mdi/jquery';
import languageJavascript from '@iconify/icons-mdi/language-javascript';
import nodejsIcon from '@iconify/icons-mdi/nodejs';
import reactIcon from '@iconify/icons-mdi/react';
import dockerIcon from '@iconify/icons-mdi/docker';
import googleCloud from '@iconify/icons-mdi/google-cloud';
import bootstrapIcon from '@iconify/icons-mdi/bootstrap';
import linuxIcon from '@iconify/icons-mdi/linux';
import mysqlIcon from '@iconify/icons-logos/mysql';
import handlebarsIcon from '@iconify/icons-logos/handlebars';
import githubFaceIcon from '@iconify/icons-mdi/github-face';
import './homestyles.css';

const Home = () => {
  return (
    <Fragment>
      {/* Header */}
      <header className='masthead2'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0'>Welcome</h1>
            <h2 className='text-white-50 mx-auto mt-2 mb-5'>
              Scroll down to begin.
            </h2>
          </div>
        </div>
      </header>
      {/* Made with Section */}
      <section className='about-section text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <h3 className='text-white'>
                This site was crafted with{' '}
                <span role='img' aria-label='heart'>
                  ♥️
                </span>{' '}
                from the following:
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col Logos'>
              <img src={MongodbLogo} className='img-fluid' alt='MongoDB Logo' />
            </div>
            <div className='col d-flex align-items-center Logos'>
              <img src={NodejsLogo} className='img-fluid' alt='Nodejs Logo' />
            </div>
            <div className='col Logos'>
              <img src={ReactjsLogo} className='img-fluid' alt='Reactjs Logo' />
            </div>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section className='bg-light py-5 px-2 px-md-5'>
        <div className='container-fluid px-0'>
          {/* Featured Project Row */}
          <div className='row mx-0 my-1 my-lg-3'>
            <div className='col-xl-8 px-3 text-center text-xl-left'>
              <h2 className='m-0'>About me</h2>
              {/* <div className='ABhighlight' /> */}
              <p className='text-black-50 mb-3 mt-2'>
                I'm a Full Stack Developer with passion for learning new
                frameworks. I continue to thrive in constantly changing
                environments. My work reflects my ability to provide efficient
                and clean code. I currently live Atlanta, Ga and I'm looking for
                a coding job.
              </p>
              <h2 className='m-0'>About this picture...</h2>
              {/* <div className='ABhighlight' /> */}
              <p className='text-black-50 mb-3 mt-2'>
                I don't know what's more professional than a 10th grade picture
                of yourself. Let's just say if you want to see the updated
                version of this firmware then you'll just have to reach out to
                me.
              </p>
              <h2 className='m-0'>Interest</h2>
              {/* <div className='ABhighlight' /> */}
              <p className='text-black-50 mb-5 mb-xl-0 mt-2'>
                Aside from spending most of time building new React projects, I
                enjoy relaxing at home with my wife and seven animals! We love
                to watch comedy and cooking shows like Community, 30 Rock,
                LetterKenny, and TopChef.
              </p>
            </div>
            <div className='col-9 col-md-7 col-lg-6 col-xl-4 mx-auto'>
              <img className='img-fluid' src={Me} alt='Tenth grade realness' />
            </div>
          </div>
          <div className='row mt-3 p-4 d-flex justify-content-center'>
            <h1 className='font-weight-bolder skills'>Skills</h1>
          </div>
          <div className='row my-0 py-2 px-4'>
            <h3>Programming languages and tools</h3>
          </div>
          <div className='row my-0 py-2 px-4 d-flex align-items-center'>
            <Icon icon={languageHtml5} height={70} />
            <Icon icon={languageCss3} height={70} />
            <Icon icon={jqueryIcon} height={70} />
            <Icon icon={languageJavascript} height={70} />
            <Icon icon={nodejsIcon} height={70} />
            <Icon icon={reactIcon} height={70} />
            <Icon icon={bootstrapIcon} height={70} />
            <Icon icon={mysqlIcon} height={65} />
            <Icon icon={handlebarsIcon} height={25} />
            <Icon icon={githubFaceIcon} height={70} />
            <Icon icon={dockerIcon} height={70} />
            <Icon icon={googleCloud} height={70} />
            <Icon icon={linuxIcon} height={70} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
