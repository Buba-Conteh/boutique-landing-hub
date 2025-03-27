
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
                <img 
                  src="/lovable-uploads/9dbb6184-40f6-4338-bdf2-3d8321c39985.png" 
                  alt="Boutique Dashboard Interface" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
