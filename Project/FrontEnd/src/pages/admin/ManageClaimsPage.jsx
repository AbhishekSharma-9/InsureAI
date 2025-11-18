import React from 'react';
// This page is for admins to review and approve/reject claims
const ManageClaimsPage = () => {
  return (
     <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Manage Claims</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* A full table of all claims (pending, approved, rejected) would go here */}
         <div className="p-6 text-center text-gray-500">
           Claims management table placeholder.
         </div>
      </div>
    </>
  );
};
export default ManageClaimsPage;