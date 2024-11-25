// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for existing user or guest session
    const savedUser = localStorage.getItem('user');
    const guestUser = localStorage.getItem('guestUser');
    
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsLoggedIn(true);
      setIsGuest(false);
    } else if (guestUser) {
      const guestData = JSON.parse(guestUser);
      setUser(guestData);
      setIsGuest(true);
      setIsLoggedIn(false);
    }
  }, []);

  const loginAsGuest = (formData) => {
    const guestUser = {
      id: 'guest-' + Date.now(),
      type: 'guest',
      formData: formData
    };
    setUser(guestUser);
    setIsGuest(true);
    setIsLoggedIn(false);
    localStorage.setItem('guestUser', JSON.stringify(guestUser));
  };

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsGuest(false);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.removeItem('guestUser'); // Clear guest session if exists
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsGuest(false);
    localStorage.removeItem('user');
    localStorage.removeItem('guestUser');
  };

  const convertGuestToUser = (credentials) => {
    if (user?.type === 'guest') {
      const registeredUser = {
        ...user,
        ...credentials,
        type: 'registered',
        id: 'user-' + Date.now()
      };
      login(registeredUser);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      isGuest, 
      user, 
      login, 
      logout, 
      loginAsGuest, 
      convertGuestToUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};