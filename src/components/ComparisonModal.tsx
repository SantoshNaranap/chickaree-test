
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RefreshCw, Send, Mic, X } from 'lucide-react';

interface ComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ open, onOpenChange }) => {
  const [chatbots, setChatbots] = useState([
    { id: 1, name: "ChatGPT", messages: [{ role: "assistant", content: "Hi! How can I help you today?" }] },
    { id: 2, name: "Claude", messages: [{ role: "assistant", content: "Hello! I'm Claude. What can I assist you with?" }] },
    { id: 3, name: "Gemini", messages: [{ role: "assistant", content: "Hey there! I'm Gemini. Ask me anything!" }] }
  ]);
  
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({
    1: "",
    2: "",
    3: ""
  });
  
  const [isListening, setIsListening] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false
  });
  
  const handleMicToggle = (id: number) => {
    setIsListening(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleInputChange = (id: number, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSendMessage = (id: number) => {
    if (!inputValues[id].trim()) return;
    
    // Add user message
    const updatedChatbots = chatbots.map(bot => {
      if (bot.id === id) {
        return {
          ...bot,
          messages: [
            ...bot.messages,
            { role: "user", content: inputValues[id] },
            { role: "assistant", content: `Response to: ${inputValues[id]}` } // Simulate response
          ]
        };
      }
      return bot;
    });
    
    setChatbots(updatedChatbots);
    handleInputChange(id, "");
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] h-[80vh] p-0 bg-oralia-dark border-oralia-light-gray">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-oralia-light-gray">
            <h2 className="text-xl text-white font-medium">Compare Chatbots</h2>
            <button 
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-grow flex overflow-hidden">
            {chatbots.map((chatbot) => (
              <div key={chatbot.id} className="flex-1 flex flex-col h-full border-r border-oralia-light-gray last:border-r-0">
                <div className="flex items-center justify-between p-3 border-b border-oralia-light-gray">
                  <h3 className="text-lg text-white">{chatbot.name}</h3>
                  <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex-grow overflow-y-auto p-4">
                  {chatbot.messages.map((message, index) => (
                    <div key={index} className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 bg-oralia-purple rounded-full flex items-center justify-center text-white mr-3">
                          AI
                        </div>
                      )}
                      
                      <div 
                        className={`rounded-lg p-3 max-w-[80%] ${
                          message.role === 'user' 
                            ? 'bg-oralia-purple text-white ml-3' 
                            : 'bg-oralia-light-gray text-white'
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      
                      {message.role === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white ml-3">
                          JD
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-oralia-light-gray">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputValues[chatbot.id]}
                      onChange={(e) => handleInputChange(chatbot.id, e.target.value)}
                      placeholder="Ask a question..."
                      className="message-input w-full bg-oralia-light-gray rounded-lg px-4 py-2 text-white border-none focus:outline-none focus:ring-1 focus:ring-oralia-purple"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage(chatbot.id);
                        }
                      }}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <button 
                        className={`text-gray-400 hover:text-oralia-purple ${isListening[chatbot.id] ? 'text-oralia-purple' : ''}`}
                        onClick={() => handleMicToggle(chatbot.id)}
                      >
                        <Mic className="w-5 h-5" />
                      </button>
                      <button 
                        className="text-oralia-purple hover:text-white"
                        onClick={() => handleSendMessage(chatbot.id)}
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t border-oralia-light-gray text-center">
            <p className="text-xs text-gray-500">Powered by Kaaylabs.com</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;
