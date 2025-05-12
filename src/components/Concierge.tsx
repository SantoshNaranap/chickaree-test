
import React, { useState } from 'react';
import { Send, RefreshCw, Mic, Compare } from 'lucide-react';
import ComparisonModal from './ComparisonModal';

const Concierge: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  
  const handleMicToggle = () => {
    setIsListening(!isListening);
  };

  const handleCompareClick = () => {
    setIsCompareModalOpen(true);
  };
  
  return (
    <div className="bg-oralia-dark-gray rounded-xl overflow-hidden h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-oralia-light-gray">
        <h2 className="text-xl text-white font-medium">Your Concierge</h2>
        <div className="flex items-center gap-2">
          <button 
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray"
            onClick={handleCompareClick}
          >
            <Compare className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-grow overflow-y-auto">
        <div className="flex mb-4">
          <div className="w-8 h-8 bg-oralia-purple rounded-full flex items-center justify-center text-white mr-3">
            AI
          </div>
          <div className="bg-oralia-light-gray rounded-lg p-3 max-w-[80%]">
            <p className="text-white">Hi! What can I help you with?</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-oralia-light-gray mt-auto">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question..."
            className="message-input w-full bg-oralia-light-gray rounded-lg px-4 py-2 text-white border-none focus:outline-none focus:ring-1 focus:ring-oralia-purple"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <button 
              className={`text-gray-400 hover:text-oralia-purple ${isListening ? 'text-oralia-purple' : ''}`}
              onClick={handleMicToggle}
            >
              <Mic className="w-5 h-5" />
            </button>
            <button className="text-oralia-purple hover:text-white">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Comparison Modal */}
      <ComparisonModal 
        isOpen={isCompareModalOpen} 
        onClose={() => setIsCompareModalOpen(false)} 
      />
    </div>
  );
};

export default Concierge;
