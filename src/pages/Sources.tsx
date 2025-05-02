
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
    { 
      id: '1', 
      name: 'Knowledge Base', 
      type: 'PDF', 
      status: 'Connected', 
      lastUpdated: '2 days ago',
      url: 'https://docs.knowledge-base.com',
      dateAdded: 'Apr 30, 2025',
      count: 12
    },
    { 
      id: '2', 
      name: 'Company Website', 
      type: 'Website', 
      status: 'Trained', 
      lastUpdated: '5 days ago',
      url: 'https://company-website.com',
      dateAdded: 'Apr 25, 2025',
      count: 8
    },
    { 
      id: '3', 
      name: 'Documentation', 
      type: 'File', 
      status: 'Yet To Start', 
      lastUpdated: '1 week ago',
      url: 'https://docs.example.com',
      dateAdded: 'Apr 20, 2025',
      count: 5
    },
    { 
      id: '4', 
      name: 'API Reference', 
      type: 'Website', 
      status: 'Trained', 
      lastUpdated: '3 days ago',
      url: 'https://api-docs.example.com',
      dateAdded: 'Apr 27, 2025',
      count: 15
    },
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
              id={source.id}
              name={source.name}
              url={source.url}
              dateAdded={source.dateAdded}
              type={source.type === 'Website' ? 'Website' : 'File'}
              status={source.status === 'Trained' ? 'Trained' : 'Yet To Start'}
              count={source.count}
              active={selectedSource === source.id}
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
