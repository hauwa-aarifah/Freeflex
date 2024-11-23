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

      {/* Navigation Links */}
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
