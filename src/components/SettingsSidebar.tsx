
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const settingsNavItems = [
  { name: 'Chat Interface', path: '/settings/chat-interface' },
  { name: 'Model Config', path: '/settings/model-config' },
  { name: 'API Keys', path: '/settings/api-keys' },
  { name: 'Account', path: '/settings/account' },
  { name: 'Billing', path: '/settings/billing' },
];

const SettingsSidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-60 border-r border-oralia-light-gray h-full">
      <div className="p-5 mb-4">
        <h2 className="text-xl font-bold">Settings</h2>
      </div>
      <nav>
        <ul className="space-y-1">
          {settingsNavItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-5 py-2 hover:bg-oralia-light-gray transition-colors ${
                  location.pathname === item.path 
                    ? 'text-white bg-oralia-light-gray' 
                    : 'text-oralia-text-gray'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SettingsSidebar;
