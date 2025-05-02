
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BotManagement from '../components/BotManagement';
import ContentFooter from '../components/ContentFooter';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const Bots = () => {
  return (
    <div className="flex h-screen bg-oralia-dark text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Bot Management</h1>
            <Button className="bg-oralia-purple hover:bg-oralia-light-purple">
              <Plus className="w-4 h-4 mr-2" />
              Add Bot
            </Button>
          </div>
          
          <BotManagement />
          
          <ContentFooter />
        </div>
      </div>
    </div>
  );
};

export default Bots;
