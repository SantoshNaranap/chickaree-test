
import React from 'react';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ChatInterfaceSettings = () => {
  return (
    <div className="w-full max-w-3xl p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Chat Interface</h2>
        <p className="text-oralia-text-gray">Configure how your chat interface appears to users</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Initial Messages</h3>
          <Textarea 
            placeholder="Hi! What can I help you with?"
            className="min-h-24 bg-oralia-dark-gray border-oralia-light-gray text-white"
          />
          <p className="text-xs text-oralia-text-gray">Enter each message in a new line.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Suggested Messages</h3>
          <Textarea 
            placeholder="Could you tell me what is the site about?"
            className="min-h-24 bg-oralia-dark-gray border-oralia-light-gray text-white"
          />
          <p className="text-xs text-oralia-text-gray">Enter each message in a new line.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Message Placeholder</h3>
          <Input 
            placeholder="Ask a question"
            className="bg-oralia-dark-gray border-oralia-light-gray text-white"
          />
        </div>

        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="text-sm font-medium">Collect User Feedback</h3>
            <p className="text-xs text-oralia-text-gray">Allow users to rate responses</p>
          </div>
          <Switch />
        </div>

        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="text-sm font-medium">Regenerate Messages</h3>
            <p className="text-xs text-oralia-text-gray">Allow users to regenerate AI responses</p>
          </div>
          <Switch />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Footer</h3>
          <Input 
            placeholder="An Oralia Innovation"
            className="bg-oralia-dark-gray border-oralia-light-gray text-white"
          />
        </div>

        <Button className="w-full bg-oralia-light-purple hover:bg-oralia-purple mt-4">
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default ChatInterfaceSettings;
