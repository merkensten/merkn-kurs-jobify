// imports
import React from 'react';
import { Outlet } from 'react-router-dom';

// internal imports
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, SmallSidebar, BigSidebar } from '../../exports/components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
