
import React, { useEffect, useRef } from 'react';

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('active');
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Company logos (using placeholder names, you can replace with actual SVGs/images)
  const clients = [
    { name: 'Shopify', logo: 'M' },
    { name: 'Airbnb', logo: 'A' },
    { name: 'Slack', logo: 'S' },
    { name: 'Microsoft', logo: 'M' },
    { name: 'Google', logo: 'G' },
    { name: 'Amazon', logo: 'A' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="text-center reveal-on-scroll"
        >
          <p className="text-gray-500 mb-8">Trusted by businesses worldwide</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div 
                key={index}
                className={`flex items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 stagger-${index % 5 + 1}`}
              >
                <div className="h-8 w-8 mr-2 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-bold">
                  {client.logo}
                </div>
                <span className="text-gray-500 font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
