
import React, { useState } from 'react';
import Header from '../components/Header';
import ContentFooter from '../components/ContentFooter';
import DataSource from '../components/DataSource';
import { Button } from "@/components/ui/button";
import { Plus, Save, Trash } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Sources = () => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [editedName, setEditedName] = useState<string>('');
  const [editedUrl, setEditedUrl] = useState<string>('');

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

  const handleSourceClick = (sourceId: string) => {
    const source = sources.find(s => s.id === sourceId);
    if (selectedSource === sourceId) {
      setSelectedSource(null);
      setEditedName('');
      setEditedUrl('');
    } else {
      setSelectedSource(sourceId);
      if (source) {
        setEditedName(source.name);
        setEditedUrl(source.url);
      }
    }
  };

  const selectedSourceData = sources.find(s => s.id === selectedSource);

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
              onClick={() => handleSourceClick(source.id)}
            />
          ))}
        </div>
        
        {selectedSource && selectedSourceData && (
          <Card className="bg-oralia-dark-gray rounded-xl border border-oralia-light-gray mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Edit Data Source</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <Input 
                      value={editedName} 
                      onChange={(e) => setEditedName(e.target.value)} 
                      className="bg-oralia-dark border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">URL</label>
                    <Input 
                      value={editedUrl} 
                      onChange={(e) => setEditedUrl(e.target.value)} 
                      className="bg-oralia-dark border-gray-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Type</label>
                    <div className="px-3 py-2 rounded border border-gray-600 bg-oralia-dark text-white">
                      {selectedSourceData.type}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                    <div className="px-3 py-2 rounded border border-gray-600 bg-oralia-dark text-white">
                      {selectedSourceData.status}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-900 hover:text-white">
                  <Trash className="w-4 h-4 mr-2" /> Delete
                </Button>
                <Button className="bg-oralia-purple hover:bg-oralia-light-purple">
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <ContentFooter />
      </div>
    </div>
  );
};

export default Sources;
