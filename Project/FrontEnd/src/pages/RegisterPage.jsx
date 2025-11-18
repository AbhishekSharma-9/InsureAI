import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import {
  // InsurAiLogo, // Remove old
  UserIcon,
  LockIcon,
  EmailIcon,
} from '../components/Icons'; // Import icons

// --- IMPORT YOUR IMAGE ---
import InsureAiPngLogo from '../assets/InsureAi.png'; // Correct path from pages folder

// Receives 'onNavigate' from App.jsx
const RegisterPage = ({ onNavigate }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('USER');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // This function calls your Spring Boot /register endpoint
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // Call your Spring Boot API
      const response = await axios.post(
        'http://localhost:8080/api/auth/register',
        {
          username: username,
          email: email,
          password: password,
          accountType: accountType, // "USER" or "ADMIN"
        }
      );

      // API call was successful
      setSuccess('Account created successfully! Please sign in.');
      // Optionally navigate to login after a short delay
      setTimeout(() => {
        onNavigate('login');
      }, 2000);
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data) {
        // Use the improved error message from backend
        const errorMessage = typeof err.response.data === 'string' 
          ? err.response.data 
          : 'Registration failed. Please check your input.';
        setError(errorMessage); 
      } else {
        setError('Registration failed. Please try again later.');
      }
      console.error('Registration error:', err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
          {/* --- USE IMG TAG --- */}
          <img
            src={InsureAiPngLogo}
            alt="InsurAI Logo"
            className="h-10 w-auto" // Adjust size as needed
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create your account
        </h2>

        {error && (
          <div className="p-3 text-sm text-center text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="p-3 text-sm text-center text-green-800 bg-green-100 rounded-lg">
            {success}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full h-10 pl-10 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="john.doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EmailIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full h-10 pl-10 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full h-10 pl-10 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full h-10 pl-10 pr-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Account Type */}
          <div>
            <label
              htmlFor="account-type"
              className="block text-sm font-medium text-gray-700"
            >
              Account Type
            </label>
            <select
              id="account-type"
              name="account-type"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="block w-full h-10 pl-3 pr-10 mt-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="USER">User (Customer)</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || !!success}
              className="w-full h-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
            >
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('login')}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;