
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const ConfigureBot: React.FC = () => {
  return (
    <div className="my-8">
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-4 flex justify-between">
          <h3 className="text-lg text-foreground font-medium">AI Actions</h3>
          <span className="text-amber-500 text-sm bg-amber-900/30 px-2 py-0.5 rounded-md flex items-center gap-1">
            <span>⚠️</span> No actions found
          </span>
        </div>
        
        <div className="bg-secondary rounded-lg flex flex-col items-center justify-center p-10 my-4">
          <p className="text-muted-foreground mb-4">No actions configured yet</p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Add Action
          </Button>
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-xl p-6 mt-6">
        <div className="mb-4">
          <h3 className="text-lg text-foreground font-medium">System prompt</h3>
        </div>
        
        <div className="bg-secondary rounded-lg p-4 h-24 my-2">
          <p className="text-muted-foreground">You are a helpful AI assistant. Your responses should be...</p>
        </div>
      </div>
    </div>
  );
};

export default ConfigureBot;
