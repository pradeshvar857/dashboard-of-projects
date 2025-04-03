import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Help = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Help Center</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <Phone className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Contact Support</h3>
            <p className="text-gray-500 mt-2">Available 24/7 at</p>
            <p className="text-indigo-600">1-800-123-4567</p>
          </div>

          <div className="p-4 border rounded-lg">
            <Mail className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
            <p className="text-gray-500 mt-2">Send us an email at</p>
            <p className="text-indigo-600">support@projecthub.com</p>
          </div>

          <div className="p-4 border rounded-lg">
            <MessageSquare className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
            <p className="text-gray-500 mt-2">Chat with our support team</p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-700">Start Chat</button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="text-gray-900">How do I create a new project?</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-2 text-gray-500">
              To create a new project, click on the "Projects" tab in the sidebar, then click the "New Project" button. Fill in the required information and click "Create Project".
            </p>
          </details>

          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="text-gray-900">How can I add team members?</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-2 text-gray-500">
              Navigate to the "Team" tab and click "Add Member". Enter their email address and assign their role. They will receive an invitation to join the project.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Help;