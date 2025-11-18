import React from 'react';

// This is the content that was originally in UserDashboard.jsx
const DashboardHome = () => {
  return (
    <>
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

      {/* My Policies Table (Mockup) */}
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
    </>
  );
};

export default DashboardHome;