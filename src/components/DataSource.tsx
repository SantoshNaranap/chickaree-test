
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface DataSourceProps {
  id: string;
  name: string;
  url: string;
  dateAdded: string;
  type: 'Website' | 'File';
  status: 'Trained' | 'Yet To Start';
  count: number;
  active?: boolean;
  onClick: () => void;
}

const DataSource: React.FC<DataSourceProps> = ({
  id,
  name,
  url,
  dateAdded,
  type,
  status,
  count,
  active = false,
  onClick,
}) => {
  return (
    <Card 
      className={`border-gray-800 ${active ? 'bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]' : 'bg-[#1a1a24]'} transition-all hover:shadow-lg cursor-pointer`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start mb-4">
          <input 
            type="radio" 
            id={id} 
            name="dataSource" 
            checked={active} 
            className="mt-1 mr-3"
            readOnly
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{type === 'Website' ? '🌐' : '📄'}</span>
                <h3 className="text-lg font-light">{name}</h3>
              </div>
              {status === 'Trained' ? (
                <div className="bg-oralia-green text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <Check className="w-3 h-3" /> Trained
                </div>
              ) : (
                <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded-md">Yet To Start</div>
              )}
            </div>
            <p className="text-gray-400 text-sm truncate font-light">{url}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 pt-2 border-t border-gray-800">
          <div>
            <span className="block font-medium mb-1">Date Added:</span>
            <span className="font-light">{dateAdded}</span>
          </div>
          <div>
            <span className="block font-medium mb-1">Source Type:</span>
            <span className="font-light">{type}</span>
          </div>
          <div>
            <span className="block font-medium mb-1">{type === 'Website' ? 'Links:' : 'Files:'}</span>
            <span className="font-light">{count}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSource;
