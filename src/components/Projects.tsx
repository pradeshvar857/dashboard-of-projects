import React from 'react';
import { Plus, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      status: 'In Progress',
      completion: 75,
      dueDate: '2024-03-30',
      description: 'Complete overhaul of company website with modern design',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'Planning',
      completion: 25,
      dueDate: '2024-05-15',
      description: 'Cross-platform mobile application for customer engagement',
    },
    {
      id: 3,
      name: 'E-commerce Integration',
      status: 'Completed',
      completion: 100,
      dueDate: '2024-02-28',
      description: 'Integration of payment gateway and inventory management',
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      status: 'On Hold',
      completion: 60,
      dueDate: '2024-04-10',
      description: 'Digital marketing campaign for Q2 product launch',
    },
    {
      id: 5,
      name: 'Database Migration',
      status: 'In Progress',
      completion: 45,
      dueDate: '2024-04-20',
      description: 'Migration of legacy database to new cloud infrastructure',
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'planning':
        return 'bg-blue-100 text-blue-800';
      case 'on hold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNewProject = () => {
    navigate('/newProject');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        <button 
          onClick={handleNewProject}
          className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                    <p className="text-sm text-gray-500 mt-1">Due: {project.dueDate}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-500">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${project.completion}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{project.completion}% Complete</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;