
import React, { useState } from 'react';
import { ArrowLeft, File, Text, Upload } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentFooter from '../components/ContentFooter';

const AddSource = () => {
  const [sourceType, setSourceType] = useState('files');
  const [sourceName, setSourceName] = useState('');
  
  const handleSourceTypeChange = (type: string) => {
    setSourceType(type);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            {/* Back button and title */}
            <div className="flex items-center mb-8">
              <Link to="/sources" className="mr-4 text-muted-foreground hover:text-foreground">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-2xl font-medium">Add Source</h1>
            </div>

            {/* Source Type Section */}
            <div className="mb-8 bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-medium mb-6">Source Type</h2>
              
              <div className="space-y-2">
                {/* Files Option */}
                <div 
                  className={`flex items-center p-4 rounded-md cursor-pointer
                    ${sourceType === 'files' ? 'bg-blue-500/10 border-l-4 border-blue-500' : 'hover:bg-muted/50'}`}
                  onClick={() => handleSourceTypeChange('files')}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3
                    ${sourceType === 'files' ? 'bg-blue-500' : 'bg-muted'}`}
                  >
                    <File className={`w-4 h-4 ${sourceType === 'files' ? 'text-white' : 'text-foreground'}`} />
                  </div>
                  <span>Files</span>
                </div>
                
                {/* Text Option */}
                <div 
                  className={`flex items-center p-4 rounded-md cursor-pointer
                    ${sourceType === 'text' ? 'bg-blue-500/10 border-l-4 border-blue-500' : 'hover:bg-muted/50'}`}
                  onClick={() => handleSourceTypeChange('text')}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3
                    ${sourceType === 'text' ? 'bg-blue-500' : 'bg-muted'}`}
                  >
                    <Text className={`w-4 h-4 ${sourceType === 'text' ? 'text-white' : 'text-foreground'}`} />
                  </div>
                  <span>Text</span>
                </div>
                
                {/* Website Option */}
                <div 
                  className={`flex items-center p-4 rounded-md cursor-pointer
                    ${sourceType === 'website' ? 'bg-blue-500/10 border-l-4 border-blue-500' : 'hover:bg-muted/50'}`}
                  onClick={() => handleSourceTypeChange('website')}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3
                    ${sourceType === 'website' ? 'bg-blue-500' : 'bg-muted'}`}
                  >
                    <span className="text-lg">🌐</span>
                  </div>
                  <span>Website</span>
                </div>
              </div>
            </div>

            {/* Data Source Name */}
            <div className="mb-8 bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Data Source Name</h2>
              <Input 
                placeholder="Enter Data Source Name" 
                className="bg-background" 
                value={sourceName}
                onChange={(e) => setSourceName(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-2">Give your data source a descriptive name for easy identification</p>
            </div>

            {/* Upload Documents Section */}
            {sourceType === 'files' && (
              <div className="mb-8 bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Upload Documents</h2>
                
                <Tabs defaultValue="upload">
                  <TabsList className="mb-4">
                    <TabsTrigger value="upload">Upload Files</TabsTrigger>
                    <TabsTrigger value="recent">Recent Files</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upload" className="mt-0">
                    <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-12 flex flex-col items-center justify-center bg-muted/30">
                      <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                        <Upload className="w-6 h-6 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">Upload your documents</h3>
                      <p className="text-muted-foreground text-center mb-4">
                        Drag and drop your files here, or click the button below to browse
                      </p>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        <Upload className="w-4 h-4 mr-2" /> Select Files
                      </Button>
                      
                      <div className="w-full mt-8 pt-6 border-t border-border">
                        <p className="text-center text-sm text-muted-foreground mb-4">Supported Formats</p>
                        <div className="flex justify-center space-x-8">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-10 bg-red-500/10 rounded flex items-center justify-center">
                              <span className="text-red-500 text-xs font-medium">PDF</span>
                            </div>
                            <span className="text-xs mt-1">PDF</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-10 bg-green-500/10 rounded flex items-center justify-center">
                              <span className="text-green-500 text-xs font-medium">CSV</span>
                            </div>
                            <span className="text-xs mt-1">CSV</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-10 bg-blue-500/10 rounded flex items-center justify-center">
                              <span className="text-blue-500 text-xs font-medium">DOC</span>
                            </div>
                            <span className="text-xs mt-1">DOCX</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-10 bg-purple-500/10 rounded flex items-center justify-center">
                              <span className="text-purple-500 text-xs font-medium">TXT</span>
                            </div>
                            <span className="text-xs mt-1">TXT</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="recent">
                    <div className="text-center py-8 text-muted-foreground">
                      No recent files found
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {/* Website URL */}
            {sourceType === 'website' && (
              <div className="mb-8 bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Website URL</h2>
                <Input 
                  placeholder="Enter website URL (e.g., https://www.example.com)" 
                  className="bg-background" 
                />
                <p className="text-xs text-muted-foreground mt-2">Enter the full URL including https://</p>
              </div>
            )}
            
            {/* Text Input */}
            {sourceType === 'text' && (
              <div className="mb-8 bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Enter Text</h2>
                <textarea 
                  className="w-full min-h-[200px] p-4 bg-background border border-input rounded-md text-sm"
                  placeholder="Paste or enter your text here..."
                ></textarea>
              </div>
            )}

            {/* Processing Options */}
            <div className="mb-8 bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Processing Options</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="extract-tables" />
                  <div>
                    <label htmlFor="extract-tables" className="text-sm font-medium cursor-pointer">
                      Extract tables from documents
                    </label>
                    <p className="text-xs text-muted-foreground">Attempt to extract tabular data from documents</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="preserve-formatting" />
                  <div>
                    <label htmlFor="preserve-formatting" className="text-sm font-medium cursor-pointer">
                      Preserve document formatting
                    </label>
                    <p className="text-xs text-muted-foreground">Keep original document layout and styling</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="auto-detect" defaultChecked />
                  <div>
                    <label htmlFor="auto-detect" className="text-sm font-medium cursor-pointer">
                      Auto-detect language
                    </label>
                    <p className="text-xs text-muted-foreground">Automatically detect document language</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Link to="/sources">
                <Button variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button className="bg-oralia-purple hover:bg-oralia-light-purple">
                Add Source
              </Button>
            </div>
          </div>
          
          <ContentFooter />
        </div>
      </div>
    </div>
  );
};

export default AddSource;
