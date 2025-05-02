
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Database, Settings, File, Settings as SettingsIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-oralia-dark-gray h-screen w-60 flex flex-col border-r border-oralia-light-gray">
      <div className="p-4 border-b border-oralia-light-gray">
        <h1 className="text-2xl font-bold text-white">Oralia</h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/lab" className="flex items-center px-4 py-2 text-gray-400 rounded-md hover:bg-oralia-light-gray">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <span>Lab</span>
            </Link>
          </li>
          <li>
            <Link to="/bots" className="flex items-center px-4 py-2 text-gray-400 rounded-md hover:bg-oralia-light-gray">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <span>Your Bots</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center px-4 py-2 text-white bg-oralia-light-gray rounded-md">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <File className="w-5 h-5" />
              </div>
              <span>Sources</span>
            </Link>
          </li>
          <li>
            <Link to="/subscriptions" className="flex items-center px-4 py-2 text-gray-400 rounded-md hover:bg-oralia-light-gray">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <span className="text-lg">💳</span>
              </div>
              <span>Subscriptions</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center px-4 py-2 text-gray-400 rounded-md hover:bg-oralia-light-gray">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <SettingsIcon className="w-5 h-5" />
              </div>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-oralia-light-gray">
        <button className="flex items-center justify-center w-full px-4 py-2 bg-oralia-light-gray hover:bg-gray-700 text-white rounded-md">
          <Search className="w-4 h-4 mr-2" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
