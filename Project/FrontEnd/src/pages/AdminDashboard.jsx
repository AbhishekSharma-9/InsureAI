import React, { useState } from 'react';
import {
  ChartIcon,
  DocumentIcon,
  UserIcon,
  UsersIcon,
  LogoutIcon,
} from '../components/Icons'; // Import icons

// --- IMPORT YOUR IMAGE ---
import InsureAiPngLogo from '../assets/InsureAi.png'; // Correct path

// --- IMPORT THE ADMIN SUB-PAGES ---
import AdminDashboardHome from './admin/AdminDashboardHome';
import ManagePoliciesPage from './admin/ManagePoliciesPage';
import ManageClaimsPage from './admin/ManageClaimsPage';
import ManageUsersPage from './admin/ManageUsersPage';
import ProfilePage from './user/ProfilePage'; // Admin can share the profile page

// Receives 'onLogout' from App.jsx
const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'policies', 'claims', 'users', 'profile'

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'policies':
        return <ManagePoliciesPage />;
      case 'claims':
        return <ManageClaimsPage />;
      case 'users':
        return <ManageUsersPage />;
      case 'profile':
        return <ProfilePage />; // Re-using the user profile page
      case 'dashboard':
      default:
        return <AdminDashboardHome />;
    }
  };

  // Helper component for sidebar links
  const NavLink = ({ tabName, icon, children }) => {
    const isActive = activeTab === tabName;
    return (
      <li
        onClick={() => setActiveTab(tabName)}
        className={`px-6 py-3 flex items-center space-x-3 cursor-pointer ${
          isActive
            ? 'bg-blue-50 text-blue-600 font-semibold rounded-r-full'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        {icon}
        <span>{children}</span>
      </li>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-md flex flex-col flex-shrink-0">
        <div className="py-4 px-6 flex items-center space-x-2">
          {/* --- USE IMG TAG --- */}
          <img
            src={InsureAiPngLogo}
            alt="InsurAI Logo"
            className="h-8 w-auto" // Adjust size as needed
          />
          <span className="text-2xl font-bold text-gray-900">InsurAI</span>
        </div>
        <ul className="mt-6 space-y-2 flex-grow">
          <NavLink tabName="dashboard" icon={<ChartIcon className="w-5 h-5" />}>
            Dashboard
          </NavLink>
          <NavLink tabName="policies" icon={<DocumentIcon className="w-5 h-5" />}>
            Manage Policies
          </NavLink>
          <NavLink tabName="claims" icon={<UserIcon className="w-5 h-5" />}>
            Manage Claims
          </NavLink>
          <NavLink tabName="users" icon={<UsersIcon className="w-5 h-5" />}>
            Manage Users
          </NavLink>
          <NavLink tabName="profile" icon={<UserIcon className="w-5 h-5" />}>
            Profile
          </NavLink>
        </ul>
        <div className="p-6">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50"
          >
            <LogoutIcon className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default AdminDashboard;