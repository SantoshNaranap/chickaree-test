
import React from 'react';
import ConfigureBot from './ConfigureBot';
import ModelSettings from './ModelSettings';

const ConfigurationSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-light mb-4">Configure Bot</h2>
        <div className="bg-card border border-border rounded-lg flex-grow">
          <ConfigureBot />
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl font-light mb-4">Model Settings</h2>
        <div className="bg-card border border-border rounded-lg flex-grow">
          <div className="p-6 h-full">
            <ModelSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationSection;
