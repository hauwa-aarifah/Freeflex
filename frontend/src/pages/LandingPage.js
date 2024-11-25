// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header'; // Adjust the path if needed
// import Footer from '../components/Footer'; // Adjust the path if needed
// import SearchBar from '../components/SearchBar'; // Adjust the path if needed
// import Gallery from '../components/Gallery';

// const LandingPage = () => {
//   return (
//     <div className="landing-page" style={{ backgroundColor: '#111', minHeight: '100vh' }}>
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
//         {/* Welcome Section */}
//         <div style={{ flex: 1, color: '#fff', padding: '0 2rem' }}>
//           <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>Welcome.</h1>

//           {/* Search Bar */}
//           <SearchBar />

//           {/* Buttons */}
//           <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
//             <Link to="/get-started/step1">
//               <button className="full-rounded get-started">
//                 <span>Get Started</span>
//                 <div className="border full-rounded"></div>
//               </button>
//             </Link>
//             <Link to="/login">
//               <button className="full-rounded log-in">
//                 <span>Login</span>
//                 <div className="border full-rounded"></div>
//               </button>
//             </Link>
//           </div>
//         </div>
//         {/* Gallery Section */}
//         <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//             <Gallery />
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Change this import
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';

const LandingPage = () => {
  const navigate = useNavigate();  // Add this

  const handleGetStarted = () => {
    navigate('/get-started/step1');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page" style={{ backgroundColor: '#111', minHeight: '100vh' }}>
      <Header />

      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem' }}>
        <div style={{ flex: 1, color: '#fff', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>Welcome.</h1>

          <SearchBar />

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button 
              className="full-rounded get-started"
              onClick={handleGetStarted}
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                borderRadius: '25px',
                backgroundColor: '#DEFE7F',
                color: '#111',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Get Started</span>
              <div className="border full-rounded"></div>
            </button>

            <button 
              className="full-rounded log-in"
              onClick={handleLogin}
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                borderRadius: '25px',
                backgroundColor: 'transparent',
                color: '#DEFE7F',
                border: '1px solid #DEFE7F',
                cursor: 'pointer',
              }}
            >
              <span>Login</span>
              <div className="border full-rounded"></div>
            </button>
          </div>
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;