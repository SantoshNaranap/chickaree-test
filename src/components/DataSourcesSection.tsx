
import React, { useState, useRef, useEffect } from 'react';
import { Search, Scroll, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DataSource } from '../data/dataSources';

interface DataSourcesSectionProps {
  dataSources: DataSource[];
}

const DataSourcesSection: React.FC<DataSourcesSectionProps> = ({ dataSources }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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
  );
};

export default DataSourcesSection;
