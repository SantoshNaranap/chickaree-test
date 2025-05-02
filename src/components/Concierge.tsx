
import React, { useState } from 'react';
import { Send, RefreshCw } from 'lucide-react';

const Concierge: React.FC = () => {
  const [message, setMessage] = useState('');
  
  return (
    <div className="bg-oralia-dark-gray rounded-xl overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-oralia-light-gray">
        <h2 className="text-xl text-white font-medium">Your Concierge</h2>
        <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4 h-48 overflow-y-auto">
        <div className="flex mb-4">
          <div className="w-8 h-8 bg-oralia-purple rounded-full flex items-center justify-center text-white mr-3">
            AI
          </div>
          <div className="bg-oralia-light-gray rounded-lg p-3 max-w-[80%]">
            <p className="text-white">Hi! What can I help you with?</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-oralia-light-gray">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question..."
            className="message-input"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-oralia-purple hover:text-white">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Concierge;
