import React from 'react';
import {
  ChartIcon,
  DocumentIcon,
  UserIcon,
  UsersIcon,
  LogoutIcon,
} from '../components/Icons'; // Import icons
import InsureAiPngLogo from '../assets/InsureAi.png'; // Import PNG logo

// Receives 'onLogout' from App.jsx
const AdminDashboard = ({ onLogout }) => {
  // In a real app, you would use useEffect to fetch data from your
  // Spring Boot API (e.g., /api/admin/stats) using axios
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
            <span>Manage Policies</span>
          </li>
          <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 flex items-center space-x-3 cursor-pointer">
            <UserIcon className="w-5 h-5" />
            <span>Manage Claims</span>
          </li>
          <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 flex items-center space-x-3 cursor-pointer">
            <UsersIcon className="w-5 h-5" />
            <span>Manage Users</span>
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
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome back, Admin!</p>

        {/* Stats Cards (from mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">1,204</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">
              Total Policies
            </h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">89</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">
              Pending Claims
            </h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">15</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">$250,840</p>
          </div>
        </div>

        {/* Charts (Mockups from Admin Dashboard) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Claims Over Time
            </h2>
            <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              [Line Chart Placeholder]
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Policy Distribution
            </h2>
            <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              [Pie Chart Placeholder]
            </div>
          </div>
        </div>

        {/* Manage Claims Table (from mockup) */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Claims for Review
            </h2>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              View All
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Claim ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  CLM-40582
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Jane Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $1,250.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2025-10-26
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Review
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

export default AdminDashboard;