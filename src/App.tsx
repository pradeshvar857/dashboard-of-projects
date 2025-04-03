import React, { useState } from 'react';
import { 
  Users, Settings, FolderPlus, Home, HelpCircle, 
  LogOut, Download, Bell, User, MessageSquare 
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Team from './components/Team';
import SettingsPage from './components/Settings';
import Profile from './components/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewProject from './components/NewProject';
import Help from './components/Help';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    if (!isAuthenticated && !['login', 'signup'].includes(currentPage)) {
      setCurrentPage('login');
      return <Login onLogin={handleLogin} />;
    }

    switch(currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <Projects onNewProject={() => setCurrentPage('newProject')} />;
      case 'team': return <Team />;
      case 'settings': return <SettingsPage onLogout={handleLogout} />;
      case 'profile': return <Profile />;
      case 'login': return <Login onLogin={handleLogin} />;
      case 'signup': return <SignUp onSignUp={handleSignUp} />;
      case 'newProject': return <NewProject onProjectCreated={() => setCurrentPage('projects')} />;
      case 'help': return <Help />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      {isAuthenticated && (
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-indigo-600">ProjectHub</h1>
          </div>
          <nav className="mt-8">
            <SidebarLink icon={<Home />} label="Dashboard" onClick={() => setCurrentPage('dashboard')} />
            <SidebarLink icon={<FolderPlus />} label="Projects" onClick={() => setCurrentPage('projects')} />
            <SidebarLink icon={<Users />} label="Team" onClick={() => setCurrentPage('team')} />
            <SidebarLink icon={<Settings />} label="Settings" onClick={() => setCurrentPage('settings')} />
            <SidebarLink icon={<HelpCircle />} label="Help" onClick={() => setCurrentPage('help')} />
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800 capitalize">{currentPage}</h2>
            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  <button 
                    onClick={() => setCurrentPage('login')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setCurrentPage('signup')}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
                  <User 
                    className="w-6 h-6 text-gray-600 cursor-pointer"
                    onClick={() => setCurrentPage('profile')}
                  />
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 w-full px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default App;