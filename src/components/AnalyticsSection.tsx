
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
    <div className="bg-gradient-to-r from-oralia-dark-gray to-[#1a1a24] rounded-xl border border-oralia-light-gray p-6 shadow-lg">
      <h2 className="text-2xl font-medium mb-6">{title}</h2>
      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.label} className="flex items-center">
            <div className="w-6 text-center mr-4 font-medium">{item.label}</div>
            <div className="flex-1">
              <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-oralia-purple to-oralia-light-purple h-4" 
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
            <div className="w-10 text-right ml-4 font-medium">{item.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSection;
