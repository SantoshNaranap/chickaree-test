
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RefreshCw, MoreHorizontal, Send, Plus } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatWindow {
  id: number;
  message: string;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose }) => {
  const [chatWindows, setChatWindows] = useState<ChatWindow[]>([
    { id: 1, message: '' },
    { id: 2, message: '' }
  ]);

  const addChatWindow = () => {
    setChatWindows([...chatWindows, { 
      id: chatWindows.length > 0 ? Math.max(...chatWindows.map(w => w.id)) + 1 : 1, 
      message: '' 
    }]);
  };

  const handleMessageChange = (id: number, value: string) => {
    setChatWindows(chatWindows.map(window => 
      window.id === id ? { ...window, message: value } : window
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 gap-0">
        <div className="flex flex-col h-[600px]">
          {/* Chat windows container with horizontal scroll if needed */}
          <div className="flex overflow-x-auto h-full">
            {chatWindows.map((chatWindow) => (
              <div key={chatWindow.id} className="min-w-[300px] flex-1 border-r border-border h-full flex flex-col">
                <div className="flex items-center justify-between p-3 bg-card border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-oralia-purple flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <span className="font-medium">GPT-4o Mini</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1 text-sm text-muted-foreground">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Sync</span>
                    </label>
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-3 flex-1 overflow-y-auto">
                  <div className="bg-secondary rounded-lg p-3 mb-3 max-w-[85%]">
                    <p className="text-sm">Hi! What can I help you with?</p>
                  </div>
                </div>
                <div className="border-t border-border p-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={chatWindow.message}
                      onChange={(e) => handleMessageChange(chatWindow.id, e.target.value)}
                      placeholder="Ask a question"
                      className="w-full border border-input rounded-md p-2 pe-8 text-sm"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-xs text-muted-foreground text-center mt-2">
                    Powered By Kaaylabs.com
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add Bot Button */}
          <div className="border-t border-border p-3 flex justify-center">
            <Button 
              onClick={addChatWindow} 
              variant="outline" 
              className="bg-oralia-purple hover:bg-oralia-light-purple text-white border-none"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Bot
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;
