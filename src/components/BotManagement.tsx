
import React from 'react';
import { Filter, Eye, Edit, Trash2, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BotsList from './BotsList';
import AnalyticsSection from './AnalyticsSection';
import AuditTable from './AuditTable';

const BotManagement = () => {
  return (
    <div className="space-y-6">
      <div className="bg-oralia-dark-gray rounded-lg border border-oralia-light-gray p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Your Bots</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-white border-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="text-white border-gray-700">
              Export
            </Button>
          </div>
        </div>
        
        <BotsList />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      
      <div className="bg-oralia-dark-gray rounded-lg border border-oralia-light-gray p-4">
        <h2 className="text-xl font-medium mb-4">Audit Information Table</h2>
        <AuditTable />
      </div>
    </div>
  );
};

export default BotManagement;
