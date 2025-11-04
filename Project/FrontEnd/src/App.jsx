import React, { useState, useEffect } from 'react';

// Import all the pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

/**
 * This is the main "brain" of your application.
 * It controls which page is currently visible and holds the
 * authentication state (userRole).
 */
export default function App() {
  // 'home', 'login', 'register', 'userDashboard', 'adminDashboard'
  const [currentPage, setCurrentPage] = useState('home');
  
  // 'null', 'user', 'admin'
  // We can try to get this from localStorage in case the user
  // refreshed the page, but for now we'll start logged out.
  const [userRole, setUserRole] = useState(null); 
  const isLoggedIn = userRole !== null;
  
  // --- Navigation and Auth Functions ---
  // We pass these functions down to the page components as "props"

  /**
   * Navigates to a different page.
   * @param {string} page - The page to navigate to.
   */
  const navigate = (page) => {
    setCurrentPage(page);
  };

  /**
   * Called by LoginPage when login is successful.
   * @param {string} role - The role of the user ('USER' or 'ADMIN').
   */
  const handleLogin = (role) => {
    // The role from your Spring Boot API might be "USER" or "ADMIN"
    const normalizedRole = role.toLowerCase();
    setUserRole(normalizedRole);
    
    // Navigate to the correct dashboard based on role
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
    // Clear the token from localStorage
    localStorage.removeItem('authToken');
  };

  // --- Render Logic ---
  // This logic decides which page component to show.

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
      // Render user-specific pages
      // Add more pages here (e.g., 'myPolicies', 'myClaims')
      switch (currentPage) {
        case 'userDashboard':
        default:
          return <UserDashboard onLogout={handleLogout} />;
      }

    case 'admin':
      // Render admin-specific pages
      // Add more pages here (e.g., 'managePolicies', 'manageClaims')
      switch (currentPage) {
        case 'adminDashboard':
        default:
          return <AdminDashboard onLogout={handleLogout} />;
      }
      
    default:
      // This is a fallback, should not be reached
      return <HomePage onNavigate={navigate} />;
  }
}
