
import React from 'react';

interface AnalyticsItem {
  label: string;
  value: number;
  percentage: string;
}

interface AnalyticsSectionProps {
  title: string;
  data: AnalyticsItem[];
}

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ title, data }) => {
  return (
    <div className="bg-oralia-dark-gray rounded-xl border border-oralia-light-gray p-4">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.label} className="flex items-center">
            <div className="w-6 text-center mr-4">{item.label}</div>
            <div className="flex-1">
              <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-oralia-purple h-4" 
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
            <div className="w-10 text-right ml-4">{item.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSection;
