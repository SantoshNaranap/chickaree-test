
import React from 'react';
import Header from '../components/Header';
import ContentFooter from '../components/ContentFooter';
import Concierge from '../components/Concierge';
import DataSourcesSection from '../components/DataSourcesSection';
import ConfigurationSection from '../components/ConfigurationSection';
import { dataSources } from '../data/dataSources';

const Lab = () => {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      
      <div className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="text-2xl font-light mb-4">Data Sources</h2>
            
            <DataSourcesSection dataSources={dataSources} />
            
            <ConfigurationSection />
            
            <ContentFooter />
          </div>
          
          <div className="flex flex-col h-full sticky top-8">
            <div className="bg-card border border-border rounded-lg flex-grow shadow-lg">
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
  );
};

export default Lab;
