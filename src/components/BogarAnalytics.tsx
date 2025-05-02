
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnalyticsSection from './AnalyticsSection';

const BogarAnalytics: React.FC = () => {
  const trafficData = [
    { label: 'A', value: 85, percentage: '85%' },
    { label: 'B', value: 65, percentage: '65%' },
    { label: 'C', value: 42, percentage: '42%' },
    { label: 'D', value: 27, percentage: '27%' }
  ];

  const performanceData = [
    { label: 'A', value: 92, percentage: '92%' },
    { label: 'B', value: 78, percentage: '78%' },
    { label: 'C', value: 53, percentage: '53%' },
    { label: 'D', value: 34, percentage: '34%' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-gray-800 bg-[#1a1a24]">
          <CardHeader>
            <CardTitle className="text-2xl font-light">Traffic Overview</CardTitle>
            <CardDescription className="text-gray-400">Analytics for the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsSection title="" data={trafficData} />
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-[#1a1a24]">
          <CardHeader>
            <CardTitle className="text-2xl font-light">Performance</CardTitle>
            <CardDescription className="text-gray-400">System performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsSection title="" data={performanceData} />
          </CardContent>
        </Card>
      </div>

      <Card className="border-gray-800 bg-[#1a1a24]">
        <CardHeader>
          <CardTitle className="text-2xl font-light">Usage Statistics</CardTitle>
          <CardDescription className="text-gray-400">Monthly breakdown of system usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: 'Total Requests', value: '1,285,492', change: '+12.3%' },
              { title: 'Avg. Response Time', value: '0.24s', change: '-8.1%' },
              { title: 'Completion Rate', value: '98.7%', change: '+2.4%' },
              { title: 'Active Users', value: '12,849', change: '+18.2%' }
            ].map((stat, idx) => (
              <div key={idx} className="border-l-2 border-gray-700 pl-4">
                <h3 className="text-sm font-normal text-gray-400 mb-1">{stat.title}</h3>
                <p className="text-3xl font-light">{stat.value}</p>
                <p className={`text-sm ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BogarAnalytics;
