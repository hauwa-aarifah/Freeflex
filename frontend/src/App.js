// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import GetStarted from './pages/GetStarted';
import KeyMetrics from './pages/KeyMetrics';
import SkillMap from './pages/SkillMap';
import Dashboard from './pages/Dashboard';
import JobDemand from './pages/JobDemand';  // Make sure to import JobDemand
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`app ${theme}`}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/get-started/*" element={<GetStarted />} />
            <Route 
              path="/login" 
              element={<LoginPage theme={theme} />} 
            />

            {/* Protected routes with navigation bar */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <div style={{ display: 'flex' }}>
                    <NavigationBar theme={theme} toggleTheme={toggleTheme} />
                    <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
                      <Dashboard />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />

            {/* Add JobDemand route */}
            <Route
              path="/job-demand"
              element={
                <ProtectedRoute>
                  <div style={{ display: 'flex' }}>
                    <NavigationBar theme={theme} toggleTheme={toggleTheme} />
                    <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
                      <JobDemand />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />

            <Route
              path="/key-metrics"
              element={
                <ProtectedRoute>
                  <div style={{ display: 'flex' }}>
                    <NavigationBar theme={theme} toggleTheme={toggleTheme} />
                    <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
                      <KeyMetrics />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />

            <Route
              path="/skill-map"
              element={
                <ProtectedRoute>
                  <div style={{ display: 'flex' }}>
                    <NavigationBar theme={theme} toggleTheme={toggleTheme} />
                    <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
                      <SkillMap />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <div style={{ display: 'flex' }}>
                    <NavigationBar theme={theme} toggleTheme={toggleTheme} />
                    <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
                      <ProfilePage />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;