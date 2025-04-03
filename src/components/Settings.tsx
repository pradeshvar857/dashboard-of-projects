import React from 'react';
import { Shield, MessageCircle, AlertCircle, Info } from 'lucide-react';

const Settings = ({ onLogout }) => {
  const settingsSections = [
    {
      title: 'Permissions',
      icon: <Shield className="w-5 h-5" />,
      description: 'Manage website and user permissions',
    },
    {
      title: 'Feedback',
      icon: <MessageCircle className="w-5 h-5" />,
      description: 'Send feedback about the platform',
    },
    {
      title: 'Raise Issue',
      icon: <AlertCircle className="w-5 h-5" />,
      description: 'Report technical issues or bugs',
    },
    {
      title: 'About',
      icon: <Info className="w-5 h-5" />,
      description: 'View information about the platform',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 text-indigo-600">{section.icon}</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={onLogout}
          className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;