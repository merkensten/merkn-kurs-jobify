import React from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

// intenal imports
import Wrapper from '../assets/wrappers/Navbar';
import { useAppContext } from '../exports/contexts';
import { Logo } from '../exports/components';

const Navbar = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext();

  const [showLogout, setShowLogout] = React.useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
