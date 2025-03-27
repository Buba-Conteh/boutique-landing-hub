
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, Package, CreditCard, BarChart2, 
  Users, Database, Store, Factory, DollarSign, Settings, ChevronRight
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('active');
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`feature-card reveal-on-scroll stagger-${delay}`}
    >
      <div className="w-12 h-12 bg-boutique-blue-lightest rounded-lg flex items-center justify-center mb-4 text-boutique-blue">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Database size={24} />,
      title: "Stock Management",
      description: "Track inventory levels, monitor stock movements, and get low-stock alerts."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Sales & Invoicing",
      description: "Process sales orders, generate invoices, and manage customer payments."
    },
    {
      icon: <Package size={24} />,
      title: "Item Packaging",
      description: "Create packages with multiple items for bundled products and special offers."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Expense Tracking",
      description: "Record, categorize, and analyze all business expenses in one place."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Banking Management",
      description: "Connect your business accounts and reconcile financial transactions."
    },
    {
      icon: <Store size={24} />,
      title: "POS System",
      description: "Streamlined point-of-sale interface for fast in-store transactions."
    },
    {
      icon: <Users size={24} />,
      title: "Multi-User Access",
      description: "Role-based permissions for different team members and departments."
    },
    {
      icon: <Factory size={24} />,
      title: "Manufacturing Support",
      description: "Track production processes, raw materials, and finished goods."
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Credit Management",
      description: "Monitor customer credit limits, payment terms, and outstanding balances."
    },
    {
      icon: <Settings size={24} />,
      title: "Flexible Configuration",
      description: "Customize the system to match your specific business needs."
    }
  ];

  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    [headingRef, imageRef, ctaRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [headingRef, imageRef, ctaRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="features" className="section bg-white py-16 lg:py-24">
      <div className="container-custom">
        <div 
          ref={headingRef}
          className="text-center mb-16 reveal-on-scroll"
        >
          <p className="text-boutique-blue font-medium mb-3">FEATURES</p>
          <h2 className="heading-lg mb-4">Everything you need to manage your boutique</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Boutique ERP provides all the tools you need to streamline operations, 
            increase efficiency, and grow your business.
          </p>
        </div>

        <div 
          ref={imageRef}
          className="mb-16 reveal-on-scroll p-4 bg-white rounded-xl shadow-soft max-w-4xl mx-auto"
        >
          <img 
            src="/lovable-uploads/b262a75b-1da6-4958-8cf1-36263b83cbd5.png" 
            alt="Boutique POS Terminal Interface" 
            className="w-full h-auto rounded-lg border border-gray-100"
          />
          <p className="text-center text-sm text-gray-500 mt-3">The intuitive POS interface makes checkout simple and efficient</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={(index % 5) + 1}
            />
          ))}
        </div>
        
        <div 
          ref={ctaRef}
          className="text-center reveal-on-scroll"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-8 py-3 h-auto"
          >
            Explore All Features <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
