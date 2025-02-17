import React from 'react';
import { 
  Mail, 
  Users, 
  BarChart2, 
  Settings, 
  LogOut, 
  Menu,
  Home,
  HelpCircle
} from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { navigationRoutes } from '../routes/routes';

function Sidebar({ isCollapsed, setIsCollapsed }) {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [activePage, setActivePage] = React.useState(location.pathname); // Set active page initially from location

    React.useEffect(() => {
      // Update activePage when location changes
      setActivePage(location.pathname);
    }, [location]);

    return (
      <div className={`bg-gray-900 text-white h-screen transition-all duration-300
        ${isCollapsed ? 'w-16' : 'w-64'}`}
      >
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          {!isCollapsed && <span className="text-xl font-bold overflow-hidden whitespace-nowrap">MailMaster</span>}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-800"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6">
          {navigationRoutes.map((item) => (
            <Link 
              key={item.id}
              to={item.path} 
              onClick={() => setActivePage(item.path)} // Update active page
              className={`w-full flex items-center px-4 py-3 transition-all duration-300
                ${activePage === item.path ? 'bg-blue-600' : 'hover:bg-gray-800'}
                ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <item.icon className="w-5 h-5" />
              <span 
                className={`ml-3 overflow-hidden transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full">
          <Link 
            to="/logout" 
            className={`w-full flex items-center px-4 py-3 text-red-400
            ${isCollapsed ? 'justify-center' : 'justify-start'}`}
          >
            <LogOut className="w-5 h-5" />
            <span 
              className={`ml-3 overflow-hidden transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}
            >
              Logout
            </span>
          </Link>
        </div>
      </div>
    );
}

export default Sidebar;
