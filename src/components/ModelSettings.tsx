
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Settings, Thermometer, MessageSquare } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ModelSettings = () => {
  const [temperature, setTemperature] = useState(0.5);

  const handleTemperatureChange = (value: number[]) => {
    setTemperature(value[0]);
  };

  return (
    <div className="space-y-6 relative">
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-20 blur-xl"></div>
      
      {/* Model Selection */}
      <div className="space-y-2 bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-purple-400" />
            <Label htmlFor="model-select" className="text-lg font-medium">Model</Label>
          </div>
        </div>
        <Select defaultValue="gpt4">
          <SelectTrigger id="model-select" className="bg-background/70 backdrop-blur-sm border-border/50">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent className="bg-background/95 border-border/50 backdrop-blur-sm">
            <SelectItem value="gpt4">GPT-4o Mini</SelectItem>
            <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
            <SelectItem value="claude">Claude 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Temperature Slider */}
      <div className="space-y-4 bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-orange-400" />
            <Label htmlFor="temperature" className="text-lg font-medium">Temperature</Label>
          </div>
          <span className="text-sm bg-background/80 px-2 py-1 rounded-md">{temperature}</span>
        </div>
        <Slider 
          id="temperature"
          defaultValue={[0.5]} 
          value={[temperature]}
          onValueChange={handleTemperatureChange}
          max={1} 
          step={0.1} 
          className="py-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <div className="flex flex-col items-center">
            <div className="w-1 h-1 rounded-full bg-blue-400 mb-1"></div>
            <span>Reserved</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-1 h-1 rounded-full bg-orange-400 mb-1"></div>
            <span>Creative</span>
          </div>
        </div>
      </div>
      
      {/* System Prompt */}
      <div className="space-y-2 bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5 text-green-400" />
          <Label htmlFor="system-prompt" className="text-lg font-medium">System Prompt</Label>
        </div>
        <Textarea 
          id="system-prompt" 
          placeholder="You are a helpful AI assistant. Your responses should be..." 
          className="bg-background/70 backdrop-blur-sm border-border/50 min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default ModelSettings;
