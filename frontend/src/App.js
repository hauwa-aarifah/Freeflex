// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import WelcomeMessage from './components/WelcomeMessage';
// import SearchBar from './components/SearchBar';
// import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import GetStarted from './pages/GetStarted';
import KeyMetrics from './pages/KeyMetrics';
import SkillMap from './pages/SkillMap';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
// import backgroundLogo from './img/background-logo.png';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/key-metrics" element={<KeyMetrics />} />
        <Route path="/skill-map" element={<SkillMap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
