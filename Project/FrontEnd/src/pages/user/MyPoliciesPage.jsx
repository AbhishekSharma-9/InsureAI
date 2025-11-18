import React from 'react';

// Mock data for policies
const policies = [
  { id: 'POL-10023', name: 'Life Shield (Health)', status: 'Active', expiry: '2026-10-26', premium: 1200 },
  { id: 'POL-10024', name: 'AutoSecure (Vehicle)', status: 'Active', expiry: '2025-11-15', premium: 800 },
  { id: 'POL-10021', name: 'HomeGuard (Property)', status: 'Expired', expiry: '2024-09-01', premium: 1500 },
];

const MyPoliciesPage = () => {
  // In a real app, you would use React.useEffect to fetch this data from '/api/user/policies'
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Policies</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {policies.map((policy) => (
              <tr key={policy.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{policy.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{policy.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${policy.premium}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    policy.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {policy.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.expiry}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                  <a href="#" className="text-blue-600 hover:text-blue-900 ml-4">Renew</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyPoliciesPage;