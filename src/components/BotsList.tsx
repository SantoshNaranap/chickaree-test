
import React, { useState } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

interface Bot {
  id: string;
  name: string;
  url: string;
  published: string;
  access: string;
  status: 'Active' | 'In-Active';
}

const BotsList: React.FC = () => {
  const [selectedBot, setSelectedBot] = useState<string | null>(null);
  
  const bots: Bot[] = [
    {
      id: '1',
      name: 'Testing 1',
      url: 'https://Multi.Mahindra.Com',
      published: '2025-02-17 08:18:38',
      access: 'Public',
      status: 'In-Active'
    },
    {
      id: '2',
      name: 'US Census Data',
      url: 'https://Www.Census.Gov',
      published: '2025-02-17 10:45:14',
      access: 'Public',
      status: 'In-Active'
    },
    {
      id: '3',
      name: 'Lucid Motors',
      url: 'https://LucidMotors.Com',
      published: '2025-02-26 13:13:44',
      access: 'Public',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Mahindra Chatbot',
      url: 'https://Mahindra.Com',
      published: '2025-02-15 09:19:38',
      access: 'Public',
      status: 'In-Active'
    },
  ];

  const handleSelectBot = (botId: string) => {
    setSelectedBot(botId === selectedBot ? null : botId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {bots.map((bot) => (
        <div 
          key={bot.id} 
          className={`relative overflow-hidden border border-border/50 bg-background/70 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
            bot.status === 'Active' ? 'ring-1 ring-oralia-purple/30' : ''
          } ${
            selectedBot === bot.id ? 'ring-2 ring-oralia-light-purple bg-gradient-to-br from-oralia-purple/10 to-oralia-light-purple/5' : ''
          }`}
          onClick={() => handleSelectBot(bot.id)}
        >
          {/* Decorative gradient elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-oralia-light-purple to-oralia-purple rounded-full opacity-10 blur-xl"></div>
          {bot.status === 'Active' && (
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-oralia-green to-emerald-600 rounded-full opacity-10 blur-xl"></div>
          )}
          
          {/* Selection indicator */}
          {selectedBot === bot.id && (
            <div className="absolute inset-0 bg-gradient-to-br from-oralia-light-purple/20 to-transparent opacity-50 pointer-events-none"></div>
          )}
          
          <div className="flex justify-between items-start mb-3 relative z-10">
            <h3 className={`font-medium text-lg ${selectedBot === bot.id ? 'text-oralia-light-purple' : ''}`}>
              {bot.name}
            </h3>
            <span className={`text-xs px-2.5 py-1 rounded-full ${
              bot.status === 'Active' 
                ? 'bg-gradient-to-r from-oralia-green to-emerald-600 text-white' 
                : 'bg-background/90 border border-border text-muted-foreground'
            }`}>
              {bot.status}
            </span>
          </div>
          
          <div className="space-y-1.5 mb-4 text-xs text-muted-foreground relative z-10">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              </svg>
              {bot.url}
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Published: {bot.published}
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Access: {bot.access}
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 pt-3 border-t border-border/30 relative z-10">
            <button className={`${selectedBot === bot.id ? 'text-oralia-light-purple' : 'text-muted-foreground'} hover:text-oralia-purple transition-colors`} onClick={(e) => e.stopPropagation()}>
              <Eye className="w-4 h-4" />
            </button>
            <button className={`${selectedBot === bot.id ? 'text-oralia-light-purple' : 'text-muted-foreground'} hover:text-oralia-purple transition-colors`} onClick={(e) => e.stopPropagation()}>
              <Edit className="w-4 h-4" />
            </button>
            <button className={`${selectedBot === bot.id ? 'text-oralia-light-purple' : 'text-muted-foreground'} hover:text-oralia-purple transition-colors`} onClick={(e) => e.stopPropagation()}>
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotsList;
