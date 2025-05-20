
import React from 'react';
import ConfigureBot from './ConfigureBot';
import ModelSettings from './ModelSettings';
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ConfigurationSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-light mb-4">Configure Bot</h2>
        <Card className="flex-grow shadow-md border-2">
          <ConfigureBot />
        </Card>
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl font-light mb-4 flex items-center gap-2">
          Model Settings
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Important</span>
        </h2>
        <Card className="flex-grow shadow-md border-2 border-primary/20">
          <ScrollArea className="h-[500px] pr-4">
            <CardContent className="p-6">
              <ModelSettings />
            </CardContent>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default ConfigurationSection;
