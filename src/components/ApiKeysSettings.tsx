
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Copy, Plus } from 'lucide-react';

const ApiKeyItem = ({ provider, value }: { provider: string, value: string }) => {
  const [showKey, setShowKey] = React.useState(false);
  
  return (
    <div className="space-y-2">
      <Label>{provider} API Key</Label>
      <div className="flex">
        <div className="relative flex-grow">
          <Input
            type={showKey ? "text" : "password"}
            value={value}
            className="bg-oralia-dark-gray border-oralia-light-gray text-white pr-20"
            readOnly
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7" 
              onClick={() => setShowKey(!showKey)}
            >
              {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7"
              onClick={() => navigator.clipboard.writeText(value)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button variant="outline" className="ml-2">
          Revoke
        </Button>
      </div>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-sm font-medium block">{children}</label>
);

const ApiKeysSettings = () => {
  return (
    <div className="w-full max-w-3xl p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">API Keys</h2>
        <p className="text-oralia-text-gray">Manage API keys for external services</p>
      </div>

      <div className="space-y-6">
        <ApiKeyItem 
          provider="OpenAI" 
          value="sk-ABcd1234efGHijkLMnoPQRst5678uvWXYZab"
        />

        <ApiKeyItem 
          provider="Anthropic" 
          value="sk-ant-xxxxxxxxxxxxxxxxxxxxx" 
        />

        <div className="pt-4">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add API Key
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeysSettings;
