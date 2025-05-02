
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock } from 'lucide-react';

const LabExperience: React.FC = () => {
  const experiments = [
    { 
      id: 1, 
      title: "Text Generation", 
      description: "Advanced text generation with context awareness", 
      status: "trained", 
      progress: 100,
      lastModified: "2 days ago"
    },
    { 
      id: 2, 
      title: "Image Recognition", 
      description: "Visual pattern recognition and classification", 
      status: "in-progress", 
      progress: 68,
      lastModified: "4 hours ago"
    },
    { 
      id: 3, 
      title: "Voice Analysis", 
      description: "Analyze voice patterns and sentiment", 
      status: "yet-to-start", 
      progress: 0,
      lastModified: "1 week ago"
    },
    { 
      id: 4, 
      title: "Data Clustering", 
      description: "Unsupervised learning pattern discovery", 
      status: "trained", 
      progress: 100,
      lastModified: "3 days ago"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {experiments.map((experiment) => (
        <Card 
          key={experiment.id} 
          className="border-gray-800 bg-[#1a1a24] overflow-hidden relative group"
        >
          <div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]" 
            style={{ width: `${experiment.progress}%` }} 
          />
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-light">{experiment.title}</CardTitle>
                <CardDescription className="text-gray-400 mt-1">{experiment.description}</CardDescription>
              </div>
              {experiment.status === 'trained' && (
                <div className="trained-badge bg-gradient-to-r from-[#10b981] to-[#059669] flex items-center gap-1 text-xs px-2 py-1 rounded-full">
                  <Check className="w-3 h-3" />
                  <span>Trained</span>
                </div>
              )}
              {experiment.status === 'yet-to-start' && (
                <div className="yet-to-start-badge bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Pending</span>
                </div>
              )}
              {experiment.status === 'in-progress' && (
                <div className="in-progress-badge bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{experiment.progress}%</span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-400">
              <span>Last modified: {experiment.lastModified}</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 rounded-full">
              Configure
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 hover:text-black transition-all duration-300 rounded-full flex gap-1 items-center">
              <span>Run</span> 
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LabExperience;
