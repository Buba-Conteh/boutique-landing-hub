
import React, { useEffect, useRef } from 'react';
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
          className="mb-20 reveal-on-scroll"
        >
          <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
            <h3 className="font-medium text-gray-800 mb-4">Sales & Inventory Overview</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Sales"
                    stackId="1"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="Inventory"
                    stackId="2"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
