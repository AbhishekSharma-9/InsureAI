import React from 'react';
import {
  // InsurAiLogo, // No longer needed
  DocumentIcon,
  UserIcon,
  ChartIcon,
} from '../components/Icons'; // Import icons

// --- IMPORT YOUR IMAGE ---
import InsureAiPngLogo from '../assets/InsureAi.png'; // Correct path from pages folder

// Note: We receive 'onNavigate' as a prop from App.jsx
const HomePage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-6 md:px-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* --- USE IMG TAG --- */}
            <img
              src={InsureAiPngLogo}
              alt="InsurAI Logo"
              className="h-8 w-auto" // Adjust size as needed
            />
            <span className="text-2xl font-bold text-gray-900">InsurAI</span>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onNavigate('login')}
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Sign In
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Create Account
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto flex flex-col items-center justify-center text-center py-24 px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              AI-Powered Insurance
              <br />
              <span className="text-blue-600">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Discover, manage, and purchase corporate policies with the power
              of artificial intelligence. Streamline claims, get instant
              support, and gain valuable insights.
            </p>
            <button
              onClick={() => onNavigate('register')}
              className="mt-10 px-8 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform"
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Why Choose InsurAI?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We provide a comprehensive platform for both customers and
              administrators, integrating automation and AI services for
              seamless interactions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                  <DocumentIcon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Policy Management
                </h3>
                <p className="mt-2 text-gray-600">
                  Easily browse, apply for, and manage your corporate insurance
                  policies all in one place.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                  <UserIcon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Claims Processing
                </h3>
                <p className="mt-2 text-gray-600">
                  Submit new claims, track existing claims in real-time, and get
                  updates without the hassle.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                  <ChartIcon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  AI-Powered Assistant
                </h3>
                <p className="mt-2 text-gray-600">
                  Get 24/7 support for your policy and claim-related questions
                  instantly within InsurAI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} InsurAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;