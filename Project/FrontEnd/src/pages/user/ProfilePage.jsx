import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // You would uncomment this for real API calls

const ProfilePage = () => {
  // Mock user data
  // In a real app, fetch this from '/api/user/profile'
  const [profile, setProfile] = useState({
    username: 'Abhishek.Sharma',
    email: 'holyandpuresoul7@gmail.com',
    fullName: 'Abhishek Sharma',
    phone: '123-456-7890',
    address: '123 InsurAI St, Tech City, 110001'
  });
  
  // State for handling edits
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  useEffect(() => {
    // This would be where you fetch profile data
    // const token = localStorage.getItem('authToken');
    // axios.get('/api/user/profile', { headers: { 'Authorization': `Bearer ${token}` }})
    //   .then(response => {
    //     setProfile(response.data);
    //     setFormData(response.data);
    //   })
    //   .catch(error => console.error('Error fetching profile', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // This would be where you save profile data
    // const token = localStorage.getItem('authToken');
    // axios.put('/api/user/profile', formData, { headers: { 'Authorization': `Bearer ${token}` }})
    //   .then(response => {
    //     setProfile(response.data);
    //     setIsEditing(false);
    //   })
    //   .catch(error => console.error('Error saving profile', error));
    
    // For now, just mock the save
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-x-2">
            <button 
              onClick={() => {
                setIsEditing(false);
                setFormData(profile); // Reset changes
              }}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Username (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-500">Username</label>
              <input
                type="text"
                value={profile.username}
                disabled
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
            {/* Email (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <input
                type="email"
                value={profile.email}
                disabled
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
          </div>
          
          <hr />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md disabled:bg-gray-50"
              />
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                disabled={!isEditing}
                onChange={handleChange}
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md disabled:bg-gray-50"
              />
            </div>
          </div>
          
          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              id="address"
              rows="3"
              value={formData.address}
              disabled={!isEditing}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md disabled:bg-gray-50"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default ProfilePage;