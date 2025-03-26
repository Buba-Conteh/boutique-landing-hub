
import React, { useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Smartphone, TrendingUp } from 'lucide-react';

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
  const deviceRef = useRef<HTMLDivElement>(null);

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

    [statsRef, titleRef, chartRef, deviceRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [statsRef, titleRef, chartRef, deviceRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <section id="analytics" className="section bg-white border-t border-gray-100">
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

      {/* Device Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center">
            <div 
              ref={deviceRef}
              className="w-full lg:w-1/2 mb-12 lg:mb-0 reveal-on-scroll"
            >
              <div className="relative max-w-md mx-auto lg:mr-0">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-boutique-blue-light rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-boutique-purple-light rounded-full opacity-20 blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Smartphone frame */}
                  <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl mx-auto w-64">
                    <div className="bg-gray-800 rounded-xl w-full overflow-hidden">
                      {/* Notch */}
                      <div className="w-1/2 h-6 bg-gray-900 mx-auto rounded-b-xl mb-1"></div>
                      
                      {/* App Screen */}
                      <div className="bg-white h-[28rem] p-3 overflow-y-auto">
                        <div className="bg-boutique-blue text-white p-3 rounded-lg flex items-center mb-3">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Boutique Mobile</span>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-500 mb-2">TODAY'S SUMMARY</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <p className="text-xs text-gray-500">Sales</p>
                              <p className="text-sm font-bold">$2,450</p>
                            </div>
                            <div className="bg-purple-50 p-2 rounded-lg">
                              <p className="text-xs text-gray-500">Orders</p>
                              <p className="text-sm font-bold">24</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-500 mb-2">RECENT SALES</h4>
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="border-b border-gray-100 py-2 flex justify-between items-center">
                              <div>
                                <p className="text-xs font-medium">Order #{1000 + item}</p>
                                <p className="text-xs text-gray-500">2 items</p>
                              </div>
                              <p className="text-xs font-bold">${(item * 120).toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 mb-2">LOW STOCK ALERTS</h4>
                          {[1, 2].map((item) => (
                            <div key={item} className="bg-red-50 p-2 rounded-lg mb-2 flex justify-between items-center">
                              <div>
                                <p className="text-xs font-medium">Product #{item}</p>
                                <p className="text-xs text-red-500">Only {item * 2} left</p>
                              </div>
                              <button className="text-xs bg-white px-2 py-1 rounded text-blue-500">
                                Restock
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Home button */}
                    <div className="w-10 h-1 bg-gray-700 mx-auto mt-3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="max-w-lg">
                <p className="text-boutique-blue font-medium mb-3">MOBILE ACCESS</p>
                <h2 className="heading-md mb-6">Manage your business from anywhere</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-10 h-10 bg-boutique-blue-lightest rounded-lg flex items-center justify-center mr-4 text-boutique-blue flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Real-time monitoring</h3>
                      <p className="text-gray-600">Stay updated with sales, inventory, and customer data, no matter where you are.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 bg-boutique-blue-lightest rounded-lg flex items-center justify-center mr-4 text-boutique-blue flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Instant notifications</h3>
                      <p className="text-gray-600">Get alerts for low stock, large orders, and important business events.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 bg-boutique-blue-lightest rounded-lg flex items-center justify-center mr-4 text-boutique-blue flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Team coordination</h3>
                      <p className="text-gray-600">Collaborate with your team and assign tasks directly from your mobile device.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalyticsSection;
