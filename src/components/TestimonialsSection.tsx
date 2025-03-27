
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Boutique ERP has transformed how we manage our inventory. We've reduced stockouts by 75% and streamlined our ordering process. The time savings alone made it worth the investment.",
      author: "Sarah Johnson",
      role: "Operations Manager",
      company: "StyleHub Clothing"
    },
    {
      content: "The sales analytics provided by Boutique has been a game-changer for our business. We can now identify trends quickly and make data-driven decisions that have increased our revenue by 32%.",
      author: "Michael Chen",
      role: "Owner",
      company: "Urban Trends Retail"
    },
    {
      content: "As a multi-store operation, we needed a system that could handle complex inventory management across locations. Boutique ERP not only met our needs but exceeded them with their intuitive interface.",
      author: "Olivia Martinez",
      role: "Retail Director",
      company: "Bella Boutiques"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white border-t border-gray-100 py-16 lg:py-24">
      <div className="container-custom">
        <div 
          ref={sectionRef}
          className="text-center mb-12 reveal-on-scroll"
        >
          <p className="text-boutique-blue font-medium mb-3">TESTIMONIALS</p>
          <h2 className="heading-lg mb-4">What our customers say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See how Boutique ERP has helped businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div 
            ref={imageRef}
            className="reveal-on-scroll order-2 lg:order-1"
          >
            <div className="relative bg-white p-4 rounded-xl shadow-soft overflow-hidden">
              <img 
                src="/lovable-uploads/3d67d7ad-7062-4090-bfba-202517811196.png" 
                alt="Boutique ERP Dashboard" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <p className="text-center text-sm text-gray-500 mt-3">Real-time tracking of sales, inventory, and profits</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative bg-boutique-blue-lightest p-8 md:p-12 rounded-2xl overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-boutique-blue-light opacity-20 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-boutique-purple-light opacity-20 rounded-tr-full"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-boutique-blue opacity-20">
                <Quote size={48} />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-white hover:text-boutique-blue transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-white hover:text-boutique-blue transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pagination indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-boutique-blue w-6' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
