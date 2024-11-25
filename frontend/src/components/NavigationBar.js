// src/components/NavigationBar.js
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaUser, FaChartLine, FaMapMarkedAlt, FaTachometerAlt } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import freeflexLogo from '../img/freeflex-logo.png';  

const NavigationBar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, isGuest, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Helper function to check if a path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const getLinkStyle = (path) => ({
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    padding: "0.8rem 2rem",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: isActivePath(path) ? "rgba(222, 254, 127, 0.1)" : "transparent",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(222, 254, 127, 0.05)",
    }
  });

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#111",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "1rem 0",
        position: "fixed",
        borderRight: theme === "dark" ? "1px solid #333" : "1px solid #eee",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "1rem 2rem",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img
          src={freeflexLogo}
          alt="Freeflex Logo"
          style={{ width: "150px", height: "auto" }}
        />
      </div>

      {/* User Info (if logged in or guest) */}
      {(isLoggedIn || isGuest) && (
        <div
          style={{
            padding: "1rem 2rem",
            marginBottom: "2rem",
            borderBottom: theme === "dark" ? "1px solid #333" : "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaUser />
            <div>
              <p style={{ margin: 0, fontWeight: "bold" }}>
                {isGuest ? "Guest User" : user?.username}
              </p>
              <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.7 }}>
                {isGuest ? "Limited Access" : "Full Access"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav style={{ flex: 1 }}>
        <Link to="/dashboard" style={getLinkStyle("/dashboard")}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>

        <Link to="/key-metrics" style={getLinkStyle("/key-metrics")}>
          <FaChartLine />
          <span>Key Metrics</span>
        </Link>

        <Link to="/job-demand" style={getLinkStyle("/job-demand")}>
          <FaMapMarkedAlt />
          <span>Job Demand</span>
        </Link>

        <Link to="/skill-map" style={getLinkStyle("/skill-map")}>
          <FaMapMarkedAlt />
          <span>Skill Map</span>
        </Link>
      </nav>

      {/* Footer Section */}
      <div style={{ padding: "1rem 2rem" }}>
        {/* Theme Toggle */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </div>

        {/* Login/Logout Button */}
        <button
          onClick={isLoggedIn || isGuest ? handleLogout : () => navigate("/login")}
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "25px",
            backgroundColor: theme === "dark" ? "#DEFE7F" : "#333",
            color: theme === "dark" ? "#111" : "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          {isLoggedIn ? "Log out" : isGuest ? "Exit Guest Mode" : "Log in"}
        </button>

        {/* Guest Mode Banner */}
        {isGuest && (
          <div
            style={{
              marginTop: "1rem",
              padding: "0.5rem",
              backgroundColor: "rgba(222, 254, 127, 0.1)",
              borderRadius: "5px",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0 }}>You're in guest mode</p>
            <button
              onClick={() => navigate("/login")}
              style={{
                background: "none",
                border: "none",
                color: "#DEFE7F",
                cursor: "pointer",
                padding: "0.5rem",
                fontSize: "0.8rem",
              }}
            >
              Create Account to Save Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;