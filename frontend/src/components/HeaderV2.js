import React from "react";
import { Link } from "react-router-dom";
import freeflexLogo from "../img/freeflex-logo.png"; // Adjust the path if needed

const HeaderV2 = () => {
  return (
    <header
      className="header-v2"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "none",
        color: "#fff",
      }}
    >
      {/* Logo Section */}
      <div className="logo">
        <Link to="/">
          <img
            src={freeflexLogo}
            alt="Freeflex Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </Link>
      </div>

      {/* Login Button */}
      <div>
        <Link to="/login">
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "20px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderV2;
