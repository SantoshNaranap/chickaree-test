
import React, { useState } from 'react';
import Header from '../components/Header';
import ContentFooter from '../components/ContentFooter';
import DataSource from '../components/DataSource';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const Sources = () => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  // Dummy data for sources
  const sources = [
    { id: '1', name: 'Knowledge Base', type: 'PDF', status: 'Connected', lastUpdated: '2 days ago' },
    { id: '2', name: 'Company Website', type: 'Web', status: 'Connected', lastUpdated: '5 days ago' },
    { id: '3', name: 'Documentation', type: 'Text', status: 'Pending', lastUpdated: '1 week ago' },
    { id: '4', name: 'API Reference', type: 'Web', status: 'Connected', lastUpdated: '3 days ago' },
  ];

  return (
    <div className="flex flex-col h-screen bg-oralia-dark text-white">
      <Header />
      
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Connect and manage your knowledge sources</h1>
          <Button className="bg-gradient-to-r from-oralia-purple to-oralia-light-purple hover:from-oralia-light-purple hover:to-oralia-purple transition-all duration-300">
            <Plus className="w-4 h-4 mr-2" />
            Add New Data Source
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {sources.map(source => (
            <DataSource 
              key={source.id}
              source={source}
              isSelected={selectedSource === source.id}
              onClick={() => setSelectedSource(selectedSource === source.id ? null : source.id)}
            />
          ))}
        </div>
        
        {selectedSource && (
          <div className="bg-oralia-dark-gray rounded-xl p-6 border border-oralia-light-gray mb-8">
            <h2 className="text-xl font-medium mb-4">Source Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Name</p>
                <p>{sources.find(s => s.id === selectedSource)?.name}</p>
              </div>
              <div>
                <p className="text-gray-400">Type</p>
                <p>{sources.find(s => s.id === selectedSource)?.type}</p>
              </div>
              <div>
                <p className="text-gray-400">Status</p>
                <p>{sources.find(s => s.id === selectedSource)?.status}</p>
              </div>
              <div>
                <p className="text-gray-400">Last Updated</p>
                <p>{sources.find(s => s.id === selectedSource)?.lastUpdated}</p>
              </div>
            </div>
          </div>
        )}
        
        <ContentFooter />
      </div>
    </div>
  );
};

export default Sources;
