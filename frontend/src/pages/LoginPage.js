import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock credentials
    const mockUsername = 'freeflex.test';
    const mockPassword = 'password';

    // Validate user input
    if (username === mockUsername && password === mockPassword) {
      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/profile'); // Redirect to the profile page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page" style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ display: 'block', padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: 'block', padding: '0.5rem', width: '100%' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button class = "full rounded">
        <span>Login</span>
        <div class="border full-rounded"></div>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
