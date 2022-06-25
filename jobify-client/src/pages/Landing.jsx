// Imports
import React from 'react';

// Styles
import Wrapper from '../assets/wrappers/LandingPage';

// Images
import mainImg from '../assets/images/main.svg';

// Components
import { Logo } from '../components';

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            aperiam. Quia, laboriosam quaerat. Dolores nam, ad repudiandae
            labore facilis atque ipsum aperiam voluptate eveniet aspernatur
            soluta ratione fuga hic numquam quibusdam saepe, rem, repellendus
            enim officia.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={mainImg} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
