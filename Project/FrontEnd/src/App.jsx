import React, { useState, useEffect } from 'react';

// Import all the pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

// We no longer need to import the sub-pages here
// The Dashboard components will handle that

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState(null); 
  const isLoggedIn = userRole !== null;
  
  // --- Check for token on app load ---
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole'); // We will store the role on login
    
    if (token && role) {
      // In a real app, you'd validate the token with a /api/auth/validate endpoint
      // For now, we trust the stored token and role
      setUserRole(role);
      if (role === 'admin') {
        setCurrentPage('adminDashboard');
      } else {
        setCurrentPage('userDashboard');
      }
    }
  }, []); // Empty array means this runs once on app load


  const navigate = (page) => {
    setCurrentPage(page);
  };

  /**
   * Called by LoginPage when login is successful.
   * @param {string} role - The role of the user ('USER' or 'ADMIN').
   */
  const handleLogin = (role) => {
    const normalizedRole = role.toLowerCase();
    setUserRole(normalizedRole);
    
    // --- Store role in localStorage for persistent login ---
    localStorage.setItem('userRole', normalizedRole); 
    
    if (normalizedRole === 'admin') {
      setCurrentPage('adminDashboard');
    } else {
      setCurrentPage('userDashboard');
    }
  };

  /**
   * Logs the user out.
   */
  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('home');
    // Clear the token AND role
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  };

  // --- Render Logic ---

  // If the user is NOT logged in
  if (!isLoggedIn) {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
      case 'register':
        return <RegisterPage onNavigate={navigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  }

  // If the user IS logged in
  switch (userRole) {
    case 'user':
      // The UserDashboard now handles its own internal navigation
      return <UserDashboard onLogout={handleLogout} />;

    case 'admin':
      // The AdminDashboard now handles its own internal navigation
      return <AdminDashboard onLogout={handleLogout} />;
      
    default:
      // This is a fallback, should not be reached
      // If role is corrupted, log out
      handleLogout();
      return <HomePage onNavigate={navigate} />;
  }
}