
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onCompareClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCompareClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Navigation items
  const navItems = [
    { name: "Lab", path: "/lab" },
    { name: "Your Bots", path: "/bots" },
    { name: "Sources", path: "/sources" },
    { name: "Subscriptions", path: "/subscriptions" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <header className="bg-oralia-dark dark:bg-oralia-dark flex items-center justify-between p-4 border-b border-oralia-light-gray">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-xl font-semibold text-white">Oralia</div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`px-2 py-1 ${currentPath === item.path ? 
                'text-white border-b-2 border-oralia-purple' : 
                'text-gray-400 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-400 mr-4 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Status indicator - green badge */}
        <div className="hidden md:block">
          <div className="px-3 py-1 bg-oralia-green bg-opacity-20 text-oralia-green rounded-full text-xs">
            URL found and already trained
          </div>
        </div>
        
        <ThemeToggle />
        
        <Button 
          variant="outline" 
          className="text-white border-gray-700"
          onClick={onCompareClick}
        >
          Compare
        </Button>
        
        <Button className="bg-oralia-purple hover:bg-oralia-light-purple">
          Save As Bot
        </Button>
        
        <div className="w-8 h-8 ml-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-medium">
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;
