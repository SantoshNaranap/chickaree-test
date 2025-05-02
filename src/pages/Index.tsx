
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DataSource from '../components/DataSource';
import ConfigureBot from '../components/ConfigureBot';
import ModelSettings from '../components/ModelSettings';
import Concierge from '../components/Concierge';
import ContentFooter from '../components/ContentFooter';

const Index = () => {
  const dataSources = [
    {
      id: '1',
      name: 'Mindera Website',
      url: 'https://www.mindera.com',
      dateAdded: 'Apr 22, 2023 5:38 PM',
      type: 'Website' as const,
      status: 'Trained' as const,
      count: 61,
      active: true,
    },
    {
      id: '2',
      name: 'nuware',
      url: 'https://www.nuware.com',
      dateAdded: 'Apr 22, 2023 7:39 AM',
      type: 'Website' as const,
      status: 'Trained' as const,
      count: 117,
      active: false,
    },
    {
      id: '3',
      name: 'Report',
      url: 'Voucher_Report_Unknown (5).pdf',
      dateAdded: 'Apr 7, 2023 11:40 AM',
      type: 'File' as const,
      status: 'Yet To Start' as const,
      count: 1,
      active: false,
    },
    {
      id: '4',
      name: 'Barcodes cat',
      url: 'barcodes_catalog.pdf',
      dateAdded: 'Apr 5, 2023 3:15 PM',
      type: 'File' as const,
      status: 'Yet To Start' as const,
      count: 1,
      active: false,
    },
  ];

  return (
    <div className="flex h-screen bg-oralia-dark text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-medium mb-4">Data Sources</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {dataSources.map((source) => (
                  <DataSource key={source.id} {...source} />
                ))}
              </div>
              
              <ConfigureBot />
            </div>
            
            <div className="w-80 space-y-6">
              <ModelSettings />
              <Concierge />
            </div>
          </div>
          
          <ContentFooter />
        </div>
      </div>
    </div>
  );
};

export default Index;
