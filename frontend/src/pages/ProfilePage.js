import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve mock user data

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear session
    navigate('/login'); // Redirect to login page
  };

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <p>You must log in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="profile-page" style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Welcome, {user.username}!</h2>
      <p>This is your profile page.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
