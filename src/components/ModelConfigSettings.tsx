
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Save } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ModelConfigSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your model settings have been saved successfully",
    });
  };

  const handleSaveToChatbot = () => {
    toast({
      title: "Settings applied to chatbot",
      description: "Your model settings have been applied to your chatbot",
    });
  };

  return (
    <div className="w-full max-w-3xl p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Model Configuration</h2>
        <p className="text-oralia-text-gray">Configure AI model settings</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="model">Model</Label>
          <Select>
            <SelectTrigger id="model" className="bg-oralia-dark-gray border-oralia-light-gray text-white">
              <SelectValue placeholder="GPT-4" />
            </SelectTrigger>
            <SelectContent className="bg-oralia-dark-gray border-oralia-light-gray">
              <SelectItem value="gpt4">GPT-4</SelectItem>
              <SelectItem value="gpt3.5">GPT-3.5</SelectItem>
              <SelectItem value="claude">Claude</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="temperature">Temperature</Label>
            <span className="text-oralia-text-gray">0.7</span>
          </div>
          <Slider defaultValue={[0.7]} max={1} step={0.1} />
          <p className="text-xs text-oralia-text-gray">Controls randomness: Lowering results in less random responses</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="max-tokens">Max Tokens</Label>
            <span className="text-oralia-text-gray">2048</span>
          </div>
          <Slider defaultValue={[2048]} max={4096} step={64} />
          <p className="text-xs text-oralia-text-gray">The maximum number of tokens to generate in the response</p>
        </div>

        <div className="flex gap-4 mt-6">
          <Button className="flex-1 bg-oralia-light-purple hover:bg-oralia-purple" onClick={handleSave}>
            SAVE
          </Button>
          
          <Button 
            className="flex-1 bg-oralia-green hover:bg-oralia-green/90 text-white"
            onClick={handleSaveToChatbot}
          >
            <Save className="mr-2 h-4 w-4" />
            Save to Chatbot
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelConfigSettings;
