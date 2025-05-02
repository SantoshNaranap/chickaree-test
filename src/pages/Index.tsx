
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DataSource from '../components/DataSource';
import ConfigureBot from '../components/ConfigureBot';
import ModelSettings from '../components/ModelSettings';
import Concierge from '../components/Concierge';
import ContentFooter from '../components/ContentFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Tabs defaultValue="sources" className="w-full">
            <TabsList className="w-full bg-[#1a1a24] border-b border-gray-800 mb-6 rounded-xl">
              <TabsTrigger value="sources" className="flex-1 text-lg font-light">Data Sources</TabsTrigger>
              <TabsTrigger value="configure" className="flex-1 text-lg font-light">Configure</TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 text-lg font-light">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="sources">
              <Card className="border-gray-800 bg-[#1a1a24] mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">Your Data Sources</CardTitle>
                  <CardDescription className="text-gray-400">
                    Connect and manage your knowledge sources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {dataSources.map((source) => (
                      <DataSource key={source.id} {...source} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="configure">
              <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 mb-6">
                <ConfigureBot />
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                  <Card className="border-gray-800 bg-[#1a1a24] mb-6">
                    <CardHeader>
                      <CardTitle className="text-2xl font-light">Model Settings</CardTitle>
                      <CardDescription className="text-gray-400">
                        Customize your AI model
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ModelSettings />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className="border-gray-800 bg-[#1a1a24]">
                    <CardHeader>
                      <CardTitle className="text-2xl font-light">Concierge</CardTitle>
                      <CardDescription className="text-gray-400">
                        Your personal assistant
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Concierge />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <ContentFooter />
        </div>
      </div>
    </div>
  );
};

export default Index;
