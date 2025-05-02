
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-oralia-dark dark:bg-oralia-dark flex items-center justify-between p-4 border-b border-oralia-light-gray">
      <div className="flex items-center">
        <button className="text-gray-400 mr-4 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl text-white font-medium">Lab</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <Button variant="outline" className="text-white border-gray-700">
          Compare
        </Button>
        <Button className="bg-oralia-purple hover:bg-oralia-light-purple">
          Save As Bot
        </Button>
        <div className="w-8 h-8 ml-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
