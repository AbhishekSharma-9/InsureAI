import React from 'react';
import {
  ChartIcon,
  DocumentIcon,
  UserIcon,
  LogoutIcon,
} from '../components/Icons'; // Import icons
import InsureAiPngLogo from '../assets/InsureAi.png'; // Import PNG logo

// Receives 'onLogout' from App.jsx
const UserDashboard = ({ onLogout }) => {
  // In a real app, you would use useEffect to fetch data from your
  // Spring Boot API (e.g., /api/user/policies) using axios
  // and the token from localStorage.

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md">
        <div className="py-4 px-6 flex items-center space-x-2 text-blue-600">
          <img
            src={InsureAiPngLogo}
            alt="InsurAI Logo"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-gray-900">InsurAI</span>
        </div>
        <ul className="mt-6 space-y-2">
          <li className="px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-r-full flex items-center space-x-3">
            <ChartIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </li>
          <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 flex items-center space-x-3 cursor-pointer">
            <DocumentIcon className="w-5 h-5" />
            <span>My Policies</span>
          </li>
          <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 flex items-center space-x-3 cursor-pointer">
            <UserIcon className="w-5 h-5" />
            <span>My Claims</span>
          </li>
          <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 flex items-center space-x-3 cursor-pointer">
            <UserIcon className="w-5 h-5" />
            <span>Profile</span>
          </li>
        </ul>
        <div className="absolute bottom-0 w-64 p-6">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50"
          >
            <LogoutIcon className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome back, User!</p>

        {/* Stats Cards (from mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">
              Active Policies
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">
              Pending Claims
            </h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">1</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">Total Claims</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">5</p>
          </div>
        </div>

        {/* My Policies Table (from mockup) */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              My Policies
            </h2>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Policy ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Policy Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  POL-10023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Life Shield (Health)
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2026-10-26
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    View
                  </a>
                </td>
              </tr>
              {/* Add more mock rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
