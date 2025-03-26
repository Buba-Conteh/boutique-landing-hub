
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2 } from 'lucide-react';

const HeroSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = elementsRef.current.filter(Boolean) as HTMLDivElement[];
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="bg-gradient-to-b from-boutique-blue-lightest to-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div 
              className="reveal-on-scroll" 
              ref={(el) => (elementsRef.current[0] = el)}
            >
              <h1 className="heading-xl text-gray-900 mb-6 leading-tight">
                Streamline Your Boutique <span className="text-boutique-blue">Business</span> Operations
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                All-in-one ERP solution that simplifies inventory management, sales tracking, and business analytics for your growing enterprise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  size="lg" 
                  className="bg-boutique-blue hover:bg-boutique-blue-dark text-white font-medium px-8 py-3 h-auto shadow-button"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-8 py-3 h-auto"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div 
            className="w-full lg:w-1/2 reveal-on-scroll" 
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-boutique-purple-light rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-boutique-blue-light rounded-full opacity-20 blur-3xl"></div>
              
              <div className="glass-card p-4 sm:p-6 relative z-10 animate-float">
                <div className="bg-boutique-blue-dark rounded-lg p-3 text-white flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2" />
                    <span className="font-medium">Sales Dashboard</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                    <p className="text-2xl font-bold text-gray-900">$24,582</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <span className="inline-block mr-1">↑</span> 12.5% from last month
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Inventory Value</p>
                    <p className="text-2xl font-bold text-gray-900">$56,271</p>
                    <p className="text-xs text-blue-500 flex items-center mt-1">
                      <span className="inline-block mr-1">•</span> 432 unique items
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-700">Sales Trend</h3>
                    <div className="text-xs text-gray-500">Last 7 days</div>
                  </div>
                  <div className="h-32 flex items-end justify-between space-x-2">
                    {[65, 45, 75, 55, 80, 62, 90].map((height, index) => (
                      <div key={index} className="relative flex-1 flex items-end">
                        <div 
                          className="w-full bg-boutique-blue rounded-t-sm transition-all duration-500"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
