
import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentFooter from '../components/ContentFooter';
import { Button } from "@/components/ui/button";
import { Plus, Check, Search, Scroll } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ModelSettings from '../components/ModelSettings';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ConfigureBot from '../components/ConfigureBot';
import Concierge from '../components/Concierge';
import { ScrollArea } from "@/components/ui/scroll-area";

const Lab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const dataSources = [
    {
      id: '1',
      name: 'Mindera Website',
      url: 'https://www.mindera.com',
      dateAdded: 'Apr 22, 2023 5:38 PM',
      type: 'Website',
      status: 'Trained',
      count: 61,
      active: true,
    },
    {
      id: '2',
      name: 'nuware',
      url: 'https://www.nuware.com',
      dateAdded: 'Apr 22, 2023 7:39 AM',
      type: 'Website',
      status: 'Trained',
      count: 117,
      active: false,
    },
    {
      id: '3',
      name: 'Report',
      url: 'Voucher_Report_Unknown (5).pdf',
      dateAdded: 'Apr 7, 2023 11:40 AM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false,
    },
    {
      id: '4',
      name: 'Barcodes cat',
      url: 'barcodes_catalog.pdf',
      dateAdded: 'Apr 5, 2023 3:15 PM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false,
    },
    {
      id: '5',
      name: 'Technical Docs',
      url: 'https://docs.technical.com',
      dateAdded: 'May 2, 2023 10:22 AM',
      type: 'Website',
      status: 'Trained',
      count: 83,
      active: false,
    },
    {
      id: '6',
      name: 'Annual Report 2023',
      url: 'Annual_Report_2023.pdf',
      dateAdded: 'May 10, 2023 2:15 PM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false,
    },
    {
      id: '7',
      name: 'Product Catalog',
      url: 'https://products.example.com',
      dateAdded: 'May 15, 2023 9:05 AM',
      type: 'Website',
      status: 'Trained',
      count: 152,
      active: false,
    },
    {
      id: '8',
      name: 'User Manual',
      url: 'User_Manual_v2.pdf',
      dateAdded: 'May 17, 2023 11:30 AM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false,
    },
    {
      id: '9',
      name: 'API Documentation',
      url: 'https://api.docs.example.com',
      dateAdded: 'May 18, 2023 4:45 PM',
      type: 'Website',
      status: 'Trained',
      count: 78,
      active: false,
    },
  ];
  
  // Filter data sources based on search term
  const filteredDataSources = dataSources.filter(source => 
    source.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Add scroll event listener to detect scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const handleScroll = () => {
      if (filteredDataSources.length > 4) {
        setIsScrolling(true);
        
        // Hide scroll indicator after 1.5 seconds of no scrolling
        const timeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1500);
        
        return () => clearTimeout(timeout);
      }
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [filteredDataSources.length]);

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            <div className="lg:col-span-2 flex flex-col">
              <h2 className="text-2xl font-light mb-4">Data Sources</h2>
              
              {/* Added border and bg-card class to match other sections */}
              <div className="bg-card border border-border rounded-lg p-6 mb-6 relative">
                {/* Search bar */}
                <div className="mb-4 relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search data sources..."
                      className="pl-10 bg-background"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Scrolling indicator that appears when scrolling */}
                {filteredDataSources.length > 4 && (
                  <div 
                    className={`absolute right-4 bottom-4 bg-oralia-purple text-white p-2 rounded-full transition-opacity duration-300 flex items-center gap-2 ${
                      isScrolling ? 'opacity-80' : 'opacity-0'
                    }`}
                  >
                    <Scroll className="h-4 w-4" />
                    <span className="text-xs">Scrolling</span>
                  </div>
                )}
                
                <ScrollArea className="h-[400px]" ref={scrollContainerRef}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pr-4">
                    {filteredDataSources.map((source) => (
                      <Card key={source.id} className={`border-border ${source.active ? 'bg-gradient-to-r from-oralia-light-purple to-oralia-purple' : 'bg-card'}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start mb-4">
                            <input 
                              type="radio" 
                              id={source.id} 
                              name="dataSource" 
                              checked={source.active} 
                              className="mt-1 mr-3"
                              readOnly
                            />
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl">{source.type === 'Website' ? '🌐' : '📄'}</span>
                                  <h3 className="text-lg font-light">{source.name}</h3>
                                </div>
                                {source.status === 'Trained' ? (
                                  <div className="bg-oralia-green text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                                    <Check className="w-3 h-3" /> Trained
                                  </div>
                                ) : (
                                  <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded-md">Yet To Start</div>
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm truncate font-light">{source.url}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                            <div>
                              <span className="block font-medium mb-1">Date Added:</span>
                              <span className="font-light">{source.dateAdded}</span>
                            </div>
                            <div>
                              <span className="block font-medium mb-1">Source Type:</span>
                              <span className="font-light">{source.type}</span>
                            </div>
                            <div>
                              <span className="block font-medium mb-1">{source.type === 'Website' ? 'Links:' : 'Files:'}</span>
                              <span className="font-light">{source.count}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    
                    {filteredDataSources.length === 0 && (
                      <div className="col-span-2 py-8 text-center text-muted-foreground">
                        No data sources found matching "{searchTerm}"
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-light mb-4">Configure Bot</h2>
                  <div className="bg-card border border-border rounded-lg flex-grow">
                    <ConfigureBot />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl font-light mb-4">Model Settings</h2>
                  <div className="bg-card border border-border rounded-lg flex-grow">
                    <div className="p-6 h-full">
                      <ModelSettings />
                    </div>
                  </div>
                </div>
              </div>
              
              <ContentFooter />
            </div>
            
            <div className="flex flex-col h-full">
              <div className="bg-card border border-border rounded-lg flex-grow">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-grow h-full">
                    <Concierge />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
