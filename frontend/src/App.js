import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/get-started/*" element={<GetStarted />} />
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
