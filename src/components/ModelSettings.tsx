
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Settings, Thermometer, MessageSquare, Bot, ChevronDown } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

const ModelSettings = () => {
  const [temperature, setTemperature] = useState(0.5);
  const [selectedModel, setSelectedModel] = useState("gpt4");

  const handleTemperatureChange = (value: number[]) => {
    setTemperature(value[0]);
  };

  const modelOptions = [
    {
      value: "gpt4",
      label: "GPT-4o Mini",
      description: "Optimized for performance and speed",
      color: "from-purple-500 to-indigo-500"
    },
    {
      value: "gpt35",
      label: "GPT-3.5 Turbo",
      description: "Fast and efficient responses",
      color: "from-green-400 to-teal-500"
    },
    {
      value: "claude",
      label: "Claude 2",
      description: "Enhanced reasoning capabilities",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <div className="space-y-6 relative">
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-20 blur-xl"></div>
      
      {/* Custom Model Selection */}
      <div className="space-y-2 bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-purple-400" />
            <Label htmlFor="model-select" className="text-lg font-medium">Select AI Model</Label>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left bg-gradient-to-r from-background/70 to-background/90 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all" 
              id="model-dropdown"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${modelOptions.find(m => m.value === selectedModel)?.color || "from-purple-500 to-indigo-500"} flex items-center justify-center`}>
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">{modelOptions.find(m => m.value === selectedModel)?.label || "Select Model"}</p>
                  <p className="text-xs text-muted-foreground">{modelOptions.find(m => m.value === selectedModel)?.description || ""}</p>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[340px] p-0 bg-background/95 backdrop-blur-md border-purple-500/20 shadow-lg shadow-purple-500/10">
            <Command>
              <CommandInput placeholder="Search models..." className="border-none focus:ring-0" />
              <CommandEmpty>No model found.</CommandEmpty>
              <CommandGroup className="p-2">
                {modelOptions.map((model) => (
                  <CommandItem 
                    key={model.value}
                    onSelect={() => setSelectedModel(model.value)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer ${selectedModel === model.value ? 'bg-purple-500/10 border-l-2 border-purple-500' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${model.color} flex items-center justify-center`}>
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{model.label}</p>
                      <p className="text-xs text-muted-foreground">{model.description}</p>
                    </div>
                    {selectedModel === model.value && (
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </DropdownMenuContent>
        </DropdownMenu>
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
