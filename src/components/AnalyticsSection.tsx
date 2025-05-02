
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
    <div className="rounded-xl">
      {title && <h2 className="text-2xl font-light mb-6">{title}</h2>}
      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.label} className="flex items-center">
            <div className="w-6 text-center mr-4 font-light">{item.label}</div>
            <div className="flex-1">
              <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] h-2" 
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
            <div className="w-12 text-right ml-4 font-light">{item.percentage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSection;
