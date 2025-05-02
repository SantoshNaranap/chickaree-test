
import React from 'react';
import { Check } from 'lucide-react';

interface DataSourceProps {
  id: string;
  name: string;
  url: string;
  dateAdded: string;
  type: 'Website' | 'File';
  status: 'Trained' | 'Yet To Start';
  count: number;
  active?: boolean;
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
}) => {
  return (
    <div className={`data-source-card ${active ? 'active' : ''}`}>
      <div className="flex items-start mb-2">
        <input 
          type="radio" 
          id={id} 
          name="dataSource" 
          checked={active} 
          className="mt-1 mr-2"
          readOnly
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xl mr-2">{type === 'Website' ? '🌐' : '📄'}</span>
              <h3 className="text-white font-medium">{name}</h3>
            </div>
            {status === 'Trained' ? (
              <div className="trained-badge">
                <Check className="w-3 h-3" /> Trained
              </div>
            ) : (
              <div className="yet-to-start-badge">Yet To Start</div>
            )}
          </div>
          <p className="text-gray-400 text-sm truncate">{url}</p>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <div>
          <span className="block font-medium">Date Added:</span>
          <span>{dateAdded}</span>
        </div>
        <div>
          <span className="block font-medium">Data Source Type:</span>
          <span>{type}</span>
        </div>
        <div>
          <span className="block font-medium">{type === 'Website' ? 'Links Crawled:' : 'Files Count:'}</span>
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
};

export default DataSource;
