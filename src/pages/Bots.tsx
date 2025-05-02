
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
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Bot Management</h1>
            <Button className="bg-gradient-to-r from-oralia-purple to-oralia-light-purple hover:from-oralia-light-purple hover:to-oralia-purple transition-all duration-300">
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
