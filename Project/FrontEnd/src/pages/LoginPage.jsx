import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
// import { InsurAiLogo, UserIcon, LockIcon } from '../components/Icons'; // Remove old
import { UserIcon, LockIcon } from '../components/Icons'; // Import only needed icons

// --- IMPORT YOUR IMAGE ---
import InsureAiPngLogo from '../assets/InsureAi.png'; // Correct path from pages folder

// Receives 'onLogin' and 'onNavigate' from App.jsx
const LoginPage = ({ onLogin, onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // This is the function from the backend_guide.md
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Call your Spring Boot API
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
          username: username,
          password: password,
        }
      );

      // API call was successful
      const { token, role } = response.data;

      // 1. Store the token in localStorage for future API calls
      localStorage.setItem('authToken', token);

      // 2. Set the user role in your app's state (from App.jsx)
      onLogin(role); // This will trigger navigation to the dashboard
    } catch (err) {
      // Handle errors
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        setError('Invalid username or password.');
      } else {
        setError('Login failed. Please try again later.');
      }
      console.error('Login error:', err);
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
          Sign in to your account
        </h2>

        {error && (
          <div className="p-3 text-sm text-center text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
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

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('register')}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Create your account
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;