
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BotsList from './BotsList';
import AnalyticsSection from './AnalyticsSection';
import AuditTable from './AuditTable';

const BotManagement = () => {
  return (
    <div className="space-y-8">
      <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Your Bots</h2>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm border-border/50 hover:bg-background/90">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="bg-background/70 backdrop-blur-sm border-border/50 hover:bg-background/90">
              Export
            </Button>
          </div>
        </div>
        
        <BotsList />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnalyticsSection 
          title="User Analytics" 
          data={[
            { label: 'A', value: 30, percentage: '30%' },
            { label: 'B', value: 50, percentage: '50%' },
            { label: 'C', value: 20, percentage: '20%' }
          ]}
        />
        <AnalyticsSection 
          title="Chat Analytics" 
          data={[
            { label: 'A', value: 35, percentage: '35%' },
            { label: 'B', value: 55, percentage: '55%' },
            { label: 'C', value: 15, percentage: '15%' }
          ]}
        />
      </div>
      
      <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-medium mb-6">Audit Information Table</h2>
        <AuditTable />
      </div>
    </div>
  );
};

export default BotManagement;
