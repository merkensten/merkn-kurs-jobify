import React from 'react';

// internal imports
import Wrapper from '../assets/wrappers/BigSidebar';
import { NavLinks, Logo } from '../exports/components';
import { useAppContext } from '../exports/contexts';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
