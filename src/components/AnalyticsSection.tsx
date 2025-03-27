
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsSection = () => {
  const data = [
    { name: 'Jan', Sales: 4000, Inventory: 2400 },
    { name: 'Feb', Sales: 3000, Inventory: 1398 },
    { name: 'Mar', Sales: 2000, Inventory: 9800 },
    { name: 'Apr', Sales: 2780, Inventory: 3908 },
    { name: 'May', Sales: 1890, Inventory: 4800 },
    { name: 'Jun', Sales: 2390, Inventory: 3800 },
    { name: 'Jul', Sales: 3490, Inventory: 4300 },
  ];

  const chartConfig = {
    Sales: {
      color: "#3B82F6",
      label: "Sales",
    },
    Inventory: {
      color: "#8B5CF6",
      label: "Inventory",
    },
  };

  const statsItems = [
    { value: '400+', label: 'Businesses improved' },
    { value: '600%', label: 'ROI increase' },
    { value: '10k+', label: 'Hours saved monthly' },
  ];

  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [statsRef, titleRef, chartRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [statsRef, titleRef, chartRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="analytics" className="section bg-white border-t border-gray-100 py-16 lg:py-24">
      <div className="container-custom">
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 reveal-on-scroll"
        >
          {statsItems.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className={`text-4xl md:text-5xl font-bold mb-2 text-boutique-blue stagger-${index + 1}`}>
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div 
          ref={titleRef}
          className="text-center mb-16 reveal-on-scroll"
        >
          <p className="text-boutique-blue font-medium mb-3">DATA-DRIVEN INSIGHTS</p>
          <h2 className="heading-lg mb-4">Unleash the full power of data</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your business data into actionable insights. Monitor key metrics, 
            identify trends, and make informed decisions.
          </p>
        </div>
        
        <div 
          ref={chartRef}
          className="mb-20 reveal-on-scroll w-full"
        >
          <Card className="border-gray-100 shadow-card overflow-hidden w-full">
            <CardHeader className="bg-white border-b border-gray-100 px-6 py-5">
              <CardTitle className="text-lg font-medium text-gray-800">Sales & Inventory Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-0 w-full">
              <div className="p-6 pt-4 w-full">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorInventory" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="name" 
                        tickLine={false} 
                        axisLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        dy={10}
                      />
                      <YAxis 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        dx={-10}
                      />
                      <ChartTooltip 
                        content={({active, payload, label}) => (
                          <ChartTooltipContent active={active} payload={payload} label={label} />
                        )}
                      />
                      <Area
                        type="monotone"
                        dataKey="Sales"
                        stroke="#3B82F6"
                        fillOpacity={1}
                        fill="url(#colorSales)"
                        activeDot={{ r: 6, strokeWidth: 0 }}
                        isAnimationActive={true}
                        animationDuration={1000}
                      />
                      <Area
                        type="monotone"
                        dataKey="Inventory"
                        stroke="#8B5CF6"
                        fillOpacity={1}
                        fill="url(#colorInventory)"
                        activeDot={{ r: 6, strokeWidth: 0 }}
                        isAnimationActive={true}
                        animationDuration={1000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
