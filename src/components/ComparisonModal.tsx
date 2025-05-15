import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RefreshCw, Send, Mic, X, PlusCircle, ChevronDown, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface ComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ModelConfig {
  temperature: number;
  maxTokens: number;
  model: string;
  systemPrompt: string;
}

interface ChatBot {
  id: number;
  name: string;
  messages: { role: "user" | "assistant"; content: string }[];
  config: ModelConfig;
}

const DEFAULT_CONFIG: ModelConfig = {
  temperature: 0.7,
  maxTokens: 2048,
  model: "gpt4o",
  systemPrompt: "You are a helpful assistant."
};

const ComparisonModal: React.FC<ComparisonModalProps> = ({ open, onOpenChange }) => {
  const [chatbots, setChatbots] = useState<ChatBot[]>([
    { 
      id: 1, 
      name: "ChatGPT", 
      messages: [{ role: "assistant", content: "Hi! How can I help you today?" }],
      config: { ...DEFAULT_CONFIG, model: "gpt4o" }
    },
    { 
      id: 2, 
      name: "Claude", 
      messages: [{ role: "assistant", content: "Hello! I'm Claude. What can I assist you with?" }],
      config: { ...DEFAULT_CONFIG, model: "claude" }
    },
    { 
      id: 3, 
      name: "Gemini", 
      messages: [{ role: "assistant", content: "Hey there! I'm Gemini. Ask me anything!" }],
      config: { ...DEFAULT_CONFIG, model: "gemini" }
    }
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

  const [showConfig, setShowConfig] = useState<{ [key: number]: boolean }>({
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
    if (!inputValues[id]?.trim()) return;
    
    // Add user message
    const updatedChatbots = chatbots.map(bot => {
      if (bot.id === id) {
        return {
          ...bot,
          messages: [
            ...bot.messages,
            { role: "user" as const, content: inputValues[id] },
            { role: "assistant" as const, content: `Response to: ${inputValues[id]}` } // Simulate response
          ]
        };
      }
      return bot;
    });
    
    setChatbots(updatedChatbots);
    handleInputChange(id, "");
  };

  const addNewBot = () => {
    const newId = chatbots.length > 0 ? Math.max(...chatbots.map(bot => bot.id)) + 1 : 1;
    const newBot: ChatBot = {
      id: newId,
      name: "New Bot",
      messages: [{ role: "assistant" as const, content: "Hello! I'm ready to help." }],
      config: { ...DEFAULT_CONFIG }
    };
    
    setChatbots([...chatbots, newBot]);
    
    // Initialize input and listening states for the new bot
    setInputValues(prev => ({
      ...prev,
      [newId]: ""
    }));
    
    setIsListening(prev => ({
      ...prev,
      [newId]: false
    }));

    setShowConfig(prev => ({
      ...prev,
      [newId]: false
    }));
  };

  const toggleConfigPanel = (id: number) => {
    setShowConfig(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const updateBotConfig = (id: number, field: keyof ModelConfig, value: any) => {
    setChatbots(chatbots.map(bot => 
      bot.id === id ? { ...bot, config: { ...bot.config, [field]: value } } : bot
    ));
  };

  const resetConversation = (id: number) => {
    setChatbots(chatbots.map(bot => 
      bot.id === id ? { 
        ...bot, 
        messages: [{ role: "assistant" as const, content: `Hi! I'm ${bot.name}. How can I help?` }] 
      } : bot
    ));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] h-[80vh] p-0 bg-oralia-dark border-oralia-light-gray">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-oralia-light-gray">
            <h2 className="text-xl text-white font-medium">Compare Chatbots</h2>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="text-white border-gray-700 hover:bg-oralia-light-gray"
                onClick={addNewBot}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Bot
              </Button>
              <button 
                onClick={() => onOpenChange(false)}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex-grow flex overflow-x-auto overflow-y-hidden">
            {chatbots.map((chatbot) => (
              <div key={chatbot.id} className="flex-shrink-0 flex flex-col h-full border-r border-oralia-light-gray last:border-r-0" style={{ width: `${100 / Math.min(chatbots.length, 3)}%`, minWidth: '300px' }}>
                <div className="flex flex-col">
                  {/* Bot header with settings dropdown */}
                  <div className="flex items-center justify-between p-3 border-b border-oralia-light-gray bg-oralia-dark">
                    <h3 className="text-lg text-white">{chatbot.name}</h3>
                    <div className="flex items-center space-x-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray">
                            <Settings className="w-4 h-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-oralia-dark-gray border-oralia-light-gray text-white">
                          <DropdownMenuItem onClick={() => toggleConfigPanel(chatbot.id)} className="cursor-pointer hover:bg-oralia-light-gray">
                            Model Configuration
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-oralia-light-gray" />
                          <DropdownMenuItem onClick={() => resetConversation(chatbot.id)} className="cursor-pointer hover:bg-oralia-light-gray">
                            Reset Conversation
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <button className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-oralia-light-gray">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Model Configuration Panel */}
                  {showConfig[chatbot.id] && (
                    <div className="p-3 border-b border-oralia-light-gray bg-oralia-dark-gray">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">Model</label>
                          <Select 
                            value={chatbot.config.model}
                            onValueChange={(value) => updateBotConfig(chatbot.id, "model", value)}
                          >
                            <SelectTrigger className="bg-oralia-dark-gray border-oralia-light-gray text-white">
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent className="bg-oralia-dark-gray border-oralia-light-gray">
                              <SelectItem value="gpt4o">GPT-4o</SelectItem>
                              <SelectItem value="claude">Claude</SelectItem>
                              <SelectItem value="gemini">Gemini</SelectItem>
                              <SelectItem value="llama3">Llama 3</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <label className="text-sm text-gray-400">Temperature</label>
                            <span className="text-sm text-gray-400">{chatbot.config.temperature}</span>
                          </div>
                          <Slider 
                            value={[chatbot.config.temperature]} 
                            max={1} 
                            step={0.1}
                            onValueChange={(value) => updateBotConfig(chatbot.id, "temperature", value[0])} 
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <label className="text-sm text-gray-400">Max Tokens</label>
                            <span className="text-sm text-gray-400">{chatbot.config.maxTokens}</span>
                          </div>
                          <Slider 
                            value={[chatbot.config.maxTokens]} 
                            max={4096} 
                            step={64}
                            onValueChange={(value) => updateBotConfig(chatbot.id, "maxTokens", value[0])} 
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400 mb-1 block">System Prompt</label>
                          <textarea
                            value={chatbot.config.systemPrompt}
                            onChange={(e) => updateBotConfig(chatbot.id, "systemPrompt", e.target.value)}
                            className="w-full bg-oralia-light-gray rounded-lg px-3 py-2 text-white border-none focus:outline-none focus:ring-1 focus:ring-oralia-purple text-sm"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  )}
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
                      value={inputValues[chatbot.id] || ""}
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
