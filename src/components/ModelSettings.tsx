
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check } from 'lucide-react';

const ModelSettings: React.FC = () => {
  const [temperature, setTemperature] = useState([0.5]);
  
  return (
    <div className="bg-oralia-dark-gray rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-white font-medium">Model Settings</h2>
        <button className="text-gray-400 hover:text-white">
          <span className="sr-only">Info</span>
          ⓘ
        </button>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Model</label>
          <div className="relative">
            <select className="w-full bg-oralia-light-gray border border-gray-700 rounded-md py-2 pl-3 pr-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-oralia-purple">
              <option>GPT-4o Mini</option>
              <option>GPT-4o</option>
              <option>Claude 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-400">Temperature</label>
            <span className="text-white font-medium">{temperature[0]}</span>
          </div>
          <Slider
            value={temperature}
            onValueChange={setTemperature}
            max={1}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>Reserved</span>
            <span>Creative</span>
          </div>
        </div>
        
        <div className="flex space-x-4 pt-4">
          <Button variant="outline" className="flex-1">Reset</Button>
          <Button className="flex-1 bg-oralia-purple hover:bg-oralia-light-purple">
            Save to chatbot
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelSettings;
