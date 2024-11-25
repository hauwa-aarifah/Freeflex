// src/pages/Dashboard.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isGuest, convertGuestToUser, logout } = useAuth();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Get data either from location state or user object
  const formData = location.state?.formData || user?.formData || null;
  const backendResponse = location.state?.backendResponse || null;

  const handleRegister = (e) => {
    e.preventDefault();
    convertGuestToUser(credentials);
    setShowRegisterModal(false);
  };

  return (
    <div style={{ 
      textAlign: "center", 
      color: "#fff", 
      backgroundColor: "#111", 
      minHeight: "100vh",
      padding: "2rem"
    }}>
      {isGuest && (
        <div style={{
          backgroundColor: "rgba(222, 254, 127, 0.1)",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem"
        }}>
          <p>You're viewing as a guest. Create an account to save your data.</p>
          <button
            onClick={() => setShowRegisterModal(true)}
            style={{
              backgroundColor: "#DEFE7F",
              color: "#111",
              padding: "0.5rem 1rem",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Create Account
          </button>
        </div>
      )}

      <h1>Dashboard</h1>

      <button
        onClick={logout}
        style={{
          backgroundColor: "#DEFE7F",
          color: "#111",
          padding: "0.5rem 1rem",
          borderRadius: "25px",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          top: "1rem",
          right: "1rem"
        }}
      >
        {isGuest ? "Exit" : "Log out"}
      </button>

      {/* Registration Modal */}
      {showRegisterModal && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#222",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          zIndex: 1000
        }}>
          <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              style={{
                margin: "0.5rem 0",
                padding: "0.5rem",
                width: "100%",
                borderRadius: "4px"
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              style={{
                margin: "0.5rem 0",
                padding: "0.5rem",
                width: "100%",
                borderRadius: "4px"
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#DEFE7F",
                color: "#111",
                padding: "0.5rem 1rem",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                marginTop: "1rem"
              }}
            >
              Register
            </button>
          </form>
        </div>
      )}

      <h2>Collected Form Data</h2>
      {formData ? (
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      ) : (
        <p>No form data found.</p>
      )}

      <h2>Backend Response</h2>
      {backendResponse ? (
        <pre>{JSON.stringify(backendResponse, null, 2)}</pre>
      ) : (
        <p>No backend response available.</p>
      )}
    </div>
  );
};

export default Dashboard;