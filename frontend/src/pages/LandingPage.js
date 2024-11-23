import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust the path if needed
import Footer from '../components/Footer'; // Adjust the path if needed
import WelcomeMessage from '../components/WelcomeMessage'; // Adjust the path if needed
import SearchBar from '../components/SearchBar'; // Adjust the path if needed
import Gallery from '../components/Gallery';
import freeflexLogo from '../img/freeflex-logo.png'; // Adjust the path if needed

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundColor: '#111', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
        {/* Welcome Section */}
        <div style={{ flex: 1, color: '#fff', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>Welcome.</h1>

          {/* Search Bar */}
          <SearchBar />

          {/* Buttons */}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <Link to="/get-started">
              <button className="full-rounded get-started">
                <span>Get Started</span>
                <div className="border full-rounded"></div>
              </button>
            </Link>
            <Link to="/login">
              <button className="full-rounded log-in">
                <span>Login</span>
                <div className="border full-rounded"></div>
              </button>
            </Link>
          </div>
        </div>
        {/* Gallery Section */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Gallery />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
