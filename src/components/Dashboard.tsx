import React from 'react';
import { PieChart, Clock, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', completion: 75 },
    { id: 2, name: 'Mobile App Development', status: 'Planning', completion: 25 },
    { id: 3, name: 'E-commerce Integration', status: 'Completed', completion: 100 },
    { id: 4, name: 'Marketing Campaign', status: 'On Hold', completion: 60 },
    { id: 5, name: 'Database Migration', status: 'In Progress', completion: 45 }
  ];

  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const pendingProjects = projects.filter(p => p.status !== 'Completed').length;
  const averageCompletion = Math.round(
    projects.reduce((acc, curr) => acc + curr.completion, 0) / totalProjects
  );

  const stats = [
    { label: 'Total Projects', value: totalProjects.toString(), icon: <PieChart className="w-6 h-6" /> },
    { label: 'Pending Projects', value: pendingProjects.toString(), icon: <Clock className="w-6 h-6" /> },
    { label: 'Completed Projects', value: completedProjects.toString(), icon: <CheckCircle className="w-6 h-6" /> },
  ];

  const pendingProjectsList = projects.filter(p => p.status !== 'Completed')
    .sort((a, b) => b.completion - a.completion);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="text-indigo-600">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Pending Projects</h3>
          <div className="space-y-4">
            {pendingProjectsList.map(project => (
              <div key={project.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{project.name}</p>
                  <div className="mt-1">
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{project.completion}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Project Completion Overview</h3>
          <div className="flex items-center justify-center h-48">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeDasharray={`${averageCompletion}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-900">{averageCompletion}%</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Average Project Completion</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;