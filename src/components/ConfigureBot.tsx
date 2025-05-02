
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const ConfigureBot: React.FC = () => {
  return (
    <div className="my-8">
      <div className="bg-oralia-dark-gray rounded-xl p-6">
        <div className="mb-2 flex justify-between">
          <h3 className="text-lg text-white font-medium">AI Actions</h3>
          <span className="text-amber-500 text-sm bg-amber-900/30 px-2 py-0.5 rounded-md flex items-center gap-1">
            <span>⚠️</span> No actions found
          </span>
        </div>
        
        <div className="bg-oralia-light-gray rounded-lg flex flex-col items-center justify-center p-10">
          <p className="text-gray-400 mb-4">No actions configured yet</p>
          <Button className="bg-oralia-purple hover:bg-oralia-light-purple flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Add Action
          </Button>
        </div>
      </div>
      
      <div className="bg-oralia-dark-gray rounded-xl p-6 mt-4">
        <div className="mb-4">
          <h3 className="text-lg text-white font-medium">System prompt</h3>
        </div>
        
        <div className="bg-oralia-light-gray rounded-lg p-4 h-24">
          <p className="text-gray-400">You are a helpful AI assistant. Your responses should be...</p>
        </div>
      </div>
    </div>
  );
};

export default ConfigureBot;
