import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LabExperience = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-light mb-4">Prompt</h3>
          <Textarea 
            placeholder="Enter your prompt here..." 
            className="min-h-[200px] bg-[#252525] border-gray-700"
          />
          <div className="flex justify-end mt-4">
            <Button className="bg-oralia-purple hover:bg-oralia-light-purple">
              Generate
            </Button>
          </div>
        </div>
        
        <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-light mb-4">Response</h3>
          <div className="bg-[#252525] border border-gray-700 rounded-md p-4 min-h-[300px] text-gray-300">
            <p>The AI response will appear here after generation...</p>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg">
          <Tabs defaultValue="model">
            <TabsList className="w-full grid grid-cols-3 bg-[#252525] rounded-t-lg border-b border-gray-800">
              <TabsTrigger value="model" className="data-[state=active]:bg-[#1e1e1e] rounded-none">Model</TabsTrigger>
              <TabsTrigger value="parameters" className="data-[state=active]:bg-[#1e1e1e] rounded-none">Parameters</TabsTrigger>
              <TabsTrigger value="simulation" className="data-[state=active]:bg-[#1e1e1e] rounded-none">Simulation Space</TabsTrigger>
            </TabsList>
            
            <TabsContent value="model" className="p-6 space-y-4">
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
            </TabsContent>
            
            <TabsContent value="parameters" className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="temperature">Temperature: 0.7</Label>
                  <span className="text-sm text-gray-400">0.7</span>
                </div>
                <Slider 
                  id="temperature"
                  defaultValue={[0.7]} 
                  max={1} 
                  step={0.1} 
                  className="py-4"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="max-tokens">Max Tokens: 1000</Label>
                  <span className="text-sm text-gray-400">1000</span>
                </div>
                <Slider 
                  id="max-tokens"
                  defaultValue={[1000]} 
                  max={4000} 
                  step={100} 
                  className="py-4"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="top-p">Top P: 0.9</Label>
                  <span className="text-sm text-gray-400">0.9</span>
                </div>
                <Slider 
                  id="top-p"
                  defaultValue={[0.9]} 
                  max={1} 
                  step={0.1} 
                  className="py-4"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="stream">Stream Response</Label>
                <Switch id="stream" defaultChecked />
              </div>
            </TabsContent>
            
            <TabsContent value="simulation" className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="persona">Persona</Label>
                <Select defaultValue="default">
                  <SelectTrigger id="persona" className="bg-[#252525] border-gray-700">
                    <SelectValue placeholder="Select persona" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-gray-700">
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="expert">Domain Expert</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="context">Context</Label>
                <Textarea 
                  id="context" 
                  placeholder="Add additional context..." 
                  className="bg-[#252525] border-gray-700 min-h-[100px]"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="memory">Enable Memory</Label>
                <Switch id="memory" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LabExperience;
