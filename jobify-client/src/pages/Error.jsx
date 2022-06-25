// Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import NotFoundImg from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={NotFoundImg} alt="Not Found" />
        <h3>Ohh! Page not found</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
          earum necessitatibus. Adipisci expedita, ex libero modi dignissimos
          quos fuga.
        </p>
        <Link to="/">Go to Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
