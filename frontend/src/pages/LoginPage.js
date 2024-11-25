// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ theme }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const { login, isGuest, user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock credentials
    const mockUsername = "freeflex.test";
    const mockPassword = "password";

    if (username === mockUsername && password === mockPassword) {
      const userData = {
        username,
        id: '1', // mock user ID
        type: 'registered',
        // If converting from guest, preserve their data
        ...(isGuest && { formData: user?.formData })
      };
      
      login(userData);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (username.length < 3 || password.length < 6) {
      setError("Username must be at least 3 characters and password at least 6 characters");
      return;
    }

    const userData = {
      username,
      id: 'user-' + Date.now(),
      type: 'registered',
      // If converting from guest, preserve their data
      ...(isGuest && { formData: user?.formData })
    };
    
    login(userData);
    navigate("/dashboard");
  };

  return (
    <div
      className="login-page"
      style={{
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#111",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>
          {isRegistering ? "Create Account" : "Login"}
        </h2>

        {isGuest && (
          <div
            style={{
              backgroundColor: "rgba(222, 254, 127, 0.1)",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          >
            <p>Convert your guest account to save your data</p>
          </div>
        )}

        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "5px",
                backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
                color: theme === "dark" ? "#fff" : "#111",
                border: theme === "dark" ? "1px solid #333" : "1px solid #ddd",
              }}
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "5px",
                backgroundColor: theme === "dark" ? "#222" : "#f5f5f5",
                color: theme === "dark" ? "#fff" : "#111",
                border: theme === "dark" ? "1px solid #333" : "1px solid #ddd",
              }}
            />
          </div>

          {error && (
            <p style={{ color: "#ff4444", margin: "0.5rem 0" }}>{error}</p>
          )}

          <button
            type="submit"
            style={{
              padding: "0.8rem",
              borderRadius: "25px",
              backgroundColor: "#DEFE7F",
              color: "#111",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            {isRegistering ? "Create Account" : "Login"}
          </button>
        </form>

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            style={{
              background: "none",
              border: "none",
              color: "#DEFE7F",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              color: theme === "dark" ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;