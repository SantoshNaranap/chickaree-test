import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentFooter from '../components/ContentFooter';
import { Button } from "@/components/ui/button";
import { Plus, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ModelSettings from '../components/ModelSettings';
import { Textarea } from "@/components/ui/textarea";
import ConfigureBot from '../components/ConfigureBot';
import Concierge from '../components/Concierge';

const Lab = () => {
  const dataSources = [
    {
      id: '1',
      name: 'Mindera Website',
      url: 'https://www.mindera.com',
      dateAdded: 'Apr 22, 2023 5:38 PM',
      type: 'Website',
      status: 'Trained',
      count: 61,
      active: true,
    },
    {
      id: '2',
      name: 'nuware',
      url: 'https://www.nuware.com',
      dateAdded: 'Apr 22, 2023 7:39 AM',
      type: 'Website',
      status: 'Trained',
      count: 117,
      active: false,
    },
    {
      id: '3',
      name: 'Report',
      url: 'Voucher_Report_Unknown (5).pdf',
      dateAdded: 'Apr 7, 2023 11:40 AM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false,
    },
    {
      id: '4',
      name: 'Barcodes cat',
      url: 'barcodes_catalog.pdf',
      dateAdded: 'Apr 5, 2023 3:15 PM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false,
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#111111] to-[#1a1a24] text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            <div className="lg:col-span-2 flex flex-col">
              <h2 className="text-2xl font-light mb-4">Data Sources</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                {dataSources.map((source) => (
                  <Card key={source.id} className={`border-gray-800 ${source.active ? 'bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]' : 'bg-[#1e1e1e]'}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start mb-4">
                        <input 
                          type="radio" 
                          id={source.id} 
                          name="dataSource" 
                          checked={source.active} 
                          className="mt-1 mr-3"
                          readOnly
                        />
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{source.type === 'Website' ? '🌐' : '📄'}</span>
                              <h3 className="text-lg font-light">{source.name}</h3>
                            </div>
                            {source.status === 'Trained' ? (
                              <div className="bg-oralia-green text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                                <Check className="w-3 h-3" /> Trained
                              </div>
                            ) : (
                              <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded-md">Yet To Start</div>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm truncate font-light">{source.url}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 pt-2 border-t border-gray-800">
                        <div>
                          <span className="block font-medium mb-1">Date Added:</span>
                          <span className="font-light">{source.dateAdded}</span>
                        </div>
                        <div>
                          <span className="block font-medium mb-1">Source Type:</span>
                          <span className="font-light">{source.type}</span>
                        </div>
                        <div>
                          <span className="block font-medium mb-1">{source.type === 'Website' ? 'Links:' : 'Files:'}</span>
                          <span className="font-light">{source.count}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-light mb-4">Configure Bot</h2>
                  <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg flex-grow">
                    <ConfigureBot />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl font-light mb-4">Model Settings</h2>
                  <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg flex-grow">
                    <div className="p-6 h-full">
                      <ModelSettings />
                    </div>
                  </div>
                </div>
              </div>
              
              <ContentFooter />
            </div>
            
            <div className="flex flex-col h-full">
              <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg flex-grow">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-grow h-full">
                    <Concierge />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
