import React from 'react';
import { Link } from 'react-router-dom';
import freeflexLogo from '../img/freeflex-logo.png'; // Adjust the path if needed

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">
          <img src={freeflexLogo} alt="Freeflex Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
