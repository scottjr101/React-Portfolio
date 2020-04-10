import React, { Fragment, useState, useEffect } from 'react';
import Cat from '../../../assets/imgs/404-cat.jpg';

const NoMatch = () => {
  const [facts, setFacts] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Grab Latitude and Longitude from user on page load.
  useEffect(() => {
    fetch('https://catfact.ninja/facts', options)
      .then((res) => res.json())
      .then((result) => setFacts([result]))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className='FadedHeader' />
      <div className='container-fluid p-5 bg-light'>
        <div className='row d-flex justify-content-center'>
          <div className='col d-flex justify-content-center mb-5'>
            <h1 className='NotFound m-0'>404 Page Not Found</h1>
          </div>
        </div>
        <div className='row no-gutters justify-content-center'>
          <div className='col-12 col-md-10 col-lg-6'>
            <img className='img-fluid' src={Cat} alt='Cat' />
          </div>
          <div className='bg-black col-12 col-md-10 col-lg-6 p-3 p-lg-2'>
            <div className='d-flex h-100'>
              <div className='w-100 my-auto text-center'>
                <h3 className='text-white mb-4'>
                  You stumbled upon a bad route, but since you're here... take a
                  look at this cat and read a random{' '}
                  <a href='https://catfact.ninja/'>Cat Fact</a>
                </h3>
                <hr className='break' />
                {facts.map((D) => (
                  <Fragment key={D}>
                    <h4 className='text-white-50 mt-4'>"{D.data[0].fact}"</h4>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoMatch;
