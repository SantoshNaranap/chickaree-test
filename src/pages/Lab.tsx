
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentFooter from '../components/ContentFooter';
import BogarAnalytics from '../components/BogarAnalytics';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LabExperience from '../components/LabExperience';

const Lab = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-[#111111] to-[#1a1a24] text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-light tracking-tight">Laboratory</h1>
            <Button className="bg-white text-black hover:bg-gray-100 hover:text-black transition-all duration-300 rounded-full">
              <PlusCircle className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
          
          <div className="mb-8">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="bg-transparent border-b border-gray-800 w-full justify-start rounded-none mb-6 p-0">
                <TabsTrigger 
                  value="experience" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none data-[state=active]:shadow-none px-6 py-2 text-lg"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger 
                  value="models" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none data-[state=active]:shadow-none px-6 py-2 text-lg"
                >
                  Models
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none data-[state=active]:shadow-none px-6 py-2 text-lg"
                >
                  Analytics
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="mt-0">
                <LabExperience />
              </TabsContent>
              
              <TabsContent value="models" className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all">
                      <h3 className="text-xl font-light mb-3">Model {item}</h3>
                      <p className="text-gray-400 mb-4 text-sm">Configure this model to enhance your lab experience</p>
                      <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 rounded-full">
                        Configure
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-0">
                <BogarAnalytics />
              </TabsContent>
            </Tabs>
          </div>
          
          <ContentFooter />
        </div>
      </div>
    </div>
  );
};

export default Lab;
