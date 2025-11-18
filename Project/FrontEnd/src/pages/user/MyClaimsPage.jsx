import React from 'react';

// Mock data for claims
const claims = [
  { id: 'CLM-50089', policy: 'AutoSecure (Vehicle)', status: 'Pending', amount: 1250, date: '2025-10-26' },
  { id: 'CLM-50088', policy: 'Life Shield (Health)', status: 'Approved', amount: 300, date: '2025-10-15' },
  { id: 'CLM-50085', policy: 'Life Shield (Health)', status: 'Rejected', amount: 500, date: '2025-09-20' },
];

const MyClaimsPage = () => {
  // In a real app, you would use React.useEffect to fetch this data from '/api/user/claims'
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Claims</h1>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          File a New Claim
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claim ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Submitted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {claims.map((claim) => (
              <tr key={claim.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{claim.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{claim.policy}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${claim.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    claim.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    claim.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {claim.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{claim.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">View Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClaimsPage;