import React, { useState } from 'react';
import { X, RefreshCw, ArrowLeft, Send, MoreHorizontal } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose }) => {
  const [leftMessage, setLeftMessage] = useState('');
  const [rightMessage, setRightMessage] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-foreground hover:bg-secondary"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-medium">Compare</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Reset</Button>
            <Button variant="outline" size="sm">Clear all chats</Button>
            <Button className="bg-oralia-purple hover:bg-oralia-purple/90" size="sm">Add a chatbot</Button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-grow flex overflow-hidden">
          {/* Left sidebar - can be used for bot selection */}
          <div className="w-56 border-r border-border hidden md:block p-4">
            <h3 className="font-medium mb-4">Available Bots</h3>
            <div className="space-y-2">
              <div className="p-2 rounded-md bg-secondary cursor-pointer">GPT-4o Mini</div>
              <div className="p-2 rounded-md hover:bg-secondary cursor-pointer">Claude 3</div>
              <div className="p-2 rounded-md hover:bg-secondary cursor-pointer">Custom Bot</div>
            </div>
          </div>
          
          {/* Main content - comparison area */}
          <div className="flex-grow flex flex-col sm:flex-row overflow-hidden">
            {/* Left comparison panel */}
            <div className="flex-1 border-r border-border flex flex-col h-[600px] md:h-[500px]">
              <div className="p-2 border-b border-border flex items-center justify-between bg-secondary/20">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-oralia-purple rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">AI</span>
                  </div>
                  <span className="font-medium">GPT-4o Mini</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-1" /> Sync
                  </label>
                  <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8 p-1.5">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8 p-1.5">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-grow overflow-y-auto p-4 bg-background">
                <div className="bg-secondary/30 rounded-lg p-3 mb-4 text-sm">
                  <p>Hi! What can I help you with?</p>
                </div>
                {/* Other messages would go here */}
              </div>
              <div className="p-2 border-t border-border bg-background">
                <div className="relative">
                  <Input
                    value={leftMessage}
                    onChange={(e) => setLeftMessage(e.target.value)}
                    placeholder="Ask a question"
                    className="pr-10 pl-3 py-2 text-sm h-9"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-primary h-7 w-7"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="text-xs text-center text-muted-foreground mt-2">
                  Powered By Kaaylabs.com
                </div>
              </div>
            </div>
            
            {/* Right comparison panel */}
            <div className="flex-1 flex flex-col border-t sm:border-t-0 h-[600px] md:h-[500px]">
              <div className="p-2 border-b border-border flex items-center justify-between bg-secondary/20">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-oralia-purple rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">AI</span>
                  </div>
                  <span className="font-medium">GPT-4o Mini</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-1" /> Sync
                  </label>
                  <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8 p-1.5">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8 p-1.5">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-grow overflow-y-auto p-4 bg-background">
                <div className="bg-secondary/30 rounded-lg p-3 mb-4 text-sm">
                  <p>Hi! What can I help you with?</p>
                </div>
                {/* Other messages would go here */}
              </div>
              <div className="p-2 border-t border-border bg-background">
                <div className="relative">
                  <Input
                    value={rightMessage}
                    onChange={(e) => setRightMessage(e.target.value)}
                    placeholder="Ask a question"
                    className="pr-10 pl-3 py-2 text-sm h-9"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-primary h-7 w-7"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="text-xs text-center text-muted-foreground mt-2">
                  Powered By Kaaylabs.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
