
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ModelSettings = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="model-select">Model</Label>
        <Select defaultValue="gpt4">
          <SelectTrigger id="model-select" className="bg-[#252525] border-gray-700">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent className="bg-[#252525] border-gray-700">
            <SelectItem value="gpt4">GPT-4</SelectItem>
            <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
            <SelectItem value="claude">Claude 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="system-prompt">System Prompt</Label>
        <Textarea 
          id="system-prompt" 
          placeholder="Enter system prompt..." 
          className="bg-[#252525] border-gray-700 min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default ModelSettings;
