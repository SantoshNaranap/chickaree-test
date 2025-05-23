
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentFooter from '../components/ContentFooter';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, RefreshCw, Filter, Plus, ExternalLink, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import DataSource from '../components/DataSource';
import { Link } from 'react-router-dom';

interface DataSource {
  id: string;
  name: string;
  url: string;
  dateAdded: string;
  type: 'Website' | 'File';
  status: 'Trained' | 'Yet To Start';
  count: number;
  active: boolean;
  links?: {
    url: string;
    size: number;
  }[];
  characters?: number;
  lastTrained?: string;
}

const Sources = () => {
  const [dataSources, setDataSources] = useState<DataSource[]>([
    {
      id: '1',
      name: 'Mindera Website',
      url: 'https://www.mindera.com',
      dateAdded: 'Apr 22, 2023 5:38 PM',
      type: 'Website',
      status: 'Trained',
      count: 61,
      active: true,
      lastTrained: 'Apr 24, 2023 9:17 AM',
      links: [
        { url: 'https://www.mindera.com/privacy-policy', size: 8647 },
        { url: 'https://www.mindera.com/careers', size: 8 },
        { url: 'https://www.mindera.com/blog?tags=290', size: 5713 },
        { url: 'https://www.mindera.com/blog/top-10-tips-for-leaders-to-increase-business-agility', size: 8 },
        { url: 'https://www.mindera.com/blog/ai-and-ecommerce-new', size: 11990 },
        { url: 'https://www.mindera.com/blog?tags=268', size: 5713 },
        { url: 'https://www.mindera.com', size: 8 },
        { url: 'https://www.mindera.com/education', size: 8 }
      ],
      characters: 225618
    },
    {
      id: '2',
      name: 'nuware',
      url: 'https://www.nuware.com',
      dateAdded: 'Apr 22, 2023 7:39 AM',
      type: 'Website',
      status: 'Trained',
      count: 117,
      active: false
    },
    {
      id: '3',
      name: 'Report',
      url: 'Voucher_Report_Unknown (5).pdf',
      dateAdded: 'Apr 7, 2023 11:40 AM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false
    },
    {
      id: '4',
      name: 'Barcodes cat',
      url: 'barcodes_catalog.pdf',
      dateAdded: 'Apr 5, 2023 3:15 PM',
      type: 'File',
      status: 'Yet To Start',
      count: 1,
      active: false
    },
  ]);

  const [selectedSource, setSelectedSource] = useState<DataSource | null>(
    dataSources.find(source => source.active) || null
  );

  const handleSourceSelect = (source: DataSource) => {
    // Update active state in dataSources
    const updatedSources = dataSources.map(s => ({
      ...s,
      active: s.id === source.id
    }));
    
    setDataSources(updatedSources);
    setSelectedSource(source);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col space-y-6">
            {/* Data sources grid section */}
            <div className="w-full bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-lg">
              <div className="mb-4 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-light">Your Data Sources</h1>
                  <p className="text-muted-foreground">Connect and manage your knowledge sources</p>
                </div>
                <Link to="/sources/add">
                  <Button className="bg-card hover:bg-muted border border-border text-foreground">
                    <Plus className="mr-2" size={18} />
                    Add New Data Source
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {dataSources.map(source => (
                  <div key={source.id} onClick={() => handleSourceSelect(source)} className="cursor-pointer">
                    <DataSource 
                      id={source.id}
                      name={source.name}
                      url={source.url}
                      dateAdded={source.dateAdded}
                      type={source.type}
                      status={source.status}
                      count={source.count}
                      active={source.active}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Source editor section - now below the grid */}
            <div className="w-full mt-8">
              {selectedSource ? (
                <Card className="border-border bg-card w-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h2 className="text-xl font-medium">Data Source Details</h2>
                      </div>
                      <Button className="bg-blue-500 hover:bg-blue-600">Update</Button>
                    </div>
                    
                    <div className="space-y-6 grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="name">Data Source Name</Label>
                          <Input 
                            id="name" 
                            value={selectedSource.name} 
                            className="mt-1" 
                            readOnly 
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <Label className="block">{selectedSource.type}</Label>
                          <Input 
                            value={selectedSource.url} 
                            className="bg-background"
                            readOnly
                          />
                          {selectedSource.lastTrained && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Last trained on {selectedSource.lastTrained} with {selectedSource.count} links
                            </p>
                          )}
                        </div>
                        
                        {selectedSource.type === 'Website' && (
                          <div className="bg-muted/30 rounded-md p-4">
                            <div className="flex items-center text-sm">
                              <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center mr-2">
                                <div className="w-3 h-3 text-blue-500">🔍</div>
                              </div>
                              <p>This will crawl all the links starting with {selectedSource.url} (not including files on the website)</p>
                              <Button variant="outline" size="sm" className="ml-auto">
                                <RefreshCw size={14} className="mr-1" />
                                Re-Fetch
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        {selectedSource.characters && (
                          <div className="mt-6 pt-4 border-t border-border">
                            <h3 className="font-medium mb-2">Sources</h3>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Links: </span>
                                <span>{selectedSource.count}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Detected Characters: </span>
                                <span>{selectedSource.characters.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Total Detected Characters: </span>
                                <span>{selectedSource.characters.toLocaleString()}</span>
                              </div>
                            </div>
                            
                            <div className="mt-4 bg-oralia-green rounded-md p-3 flex items-center justify-center">
                              <Check className="mr-2" size={18} />
                              <span>Trained</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {selectedSource.links && selectedSource.links.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center mr-2">
                                <div className="w-3 h-3 text-blue-500">🔗</div>
                              </div>
                              <h3 className="font-medium">Included Links</h3>
                              <Badge variant="secondary" className="ml-2">{selectedSource.links.length}</Badge>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Filter size={14} className="mr-1" />
                                Filter
                              </Button>
                              <Button variant="outline" size="sm">
                                <Plus size={14} className="mr-1" />
                                Add Links
                              </Button>
                            </div>
                          </div>
                          
                          <div className="border border-border rounded-md overflow-hidden">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="w-[30px]">
                                    <input type="checkbox" />
                                  </TableHead>
                                  <TableHead>URL</TableHead>
                                  <TableHead className="w-[100px] text-right">Size</TableHead>
                                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {selectedSource.links.map((link, index) => (
                                  <TableRow key={index}>
                                    <TableCell>
                                      <input type="checkbox" />
                                    </TableCell>
                                    <TableCell className="font-light text-sm text-blue-400 hover:underline">
                                      {link.url}
                                    </TableCell>
                                    <TableCell className="text-right">{link.size}</TableCell>
                                    <TableCell className="text-right">
                                      <div className="flex justify-end space-x-2">
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                          <ExternalLink size={14} />
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                          <Trash2 size={14} />
                                        </Button>
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border bg-card w-full">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-32 text-center">
                    <div className="text-muted-foreground">
                      <h3 className="text-xl font-light mb-2">No Data Source Selected</h3>
                      <p>Please select a data source to view and edit its details</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          <ContentFooter />
        </div>
      </div>
    </div>
  );
};

export default Sources;
