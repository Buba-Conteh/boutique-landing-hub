
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay: number;
}

const PricingPlan = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular, 
  buttonText,
  delay 
}: PricingPlanProps) => {
  const planRef = useRef<HTMLDivElement>(null);

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

    if (planRef.current) {
      observer.observe(planRef.current);
    }

    return () => {
      if (planRef.current) {
        observer.unobserve(planRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={planRef}
      className={`relative ${
        isPopular 
          ? 'border-2 border-boutique-blue shadow-lg' 
          : 'border border-gray-200'
      } rounded-xl bg-white overflow-hidden transition-all hover:shadow-xl reveal-on-scroll stagger-${delay}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-boutique-blue text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">{period}</span>
        </div>
        
        <Button 
          className={isPopular 
            ? "w-full bg-boutique-blue hover:bg-boutique-blue-dark" 
            : "w-full bg-white border border-boutique-blue text-boutique-blue hover:bg-boutique-blue-lightest"
          }
        >
          {buttonText}
        </Button>
      </div>
      
      <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50">
        <h4 className="font-medium mb-4">What's included:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-green-500 flex-shrink-0 mt-1">
                <Check size={16} />
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-custom">
        <div 
          ref={headingRef}
          className="text-center mb-16 reveal-on-scroll"
        >
          <p className="text-boutique-blue font-medium mb-3">PRICING</p>
          <h2 className="heading-lg mb-4">Plans that fit your scale</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works for your business size and needs. All plans include core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingPlan
            title="Basic plan"
            price="$10"
            period="/month"
            description="Perfect for small businesses just getting started."
            features={[
              "Up to 500 inventory items",
              "Sales & invoicing",
              "Basic reporting",
              "Single user access",
              "Email support"
            ]}
            buttonText="Get Started"
            delay={1}
          />
          
          <PricingPlan
            title="Business plan"
            price="$20"
            period="/month"
            description="For growing businesses with expanding needs."
            features={[
              "Everything in Basic",
              "Unlimited inventory items",
              "Multi-store management",
              "Advanced analytics",
              "5 user accounts",
              "Priority support"
            ]}
            isPopular={true}
            buttonText="Get Started"
            delay={2}
          />
          
          <PricingPlan
            title="Enterprise plan"
            price="$40"
            period="/month"
            description="For established businesses with complex operations."
            features={[
              "Everything in Business",
              "Manufacturing support",
              "Advanced user permissions",
              "API access",
              "Unlimited users",
              "Dedicated account manager",
              "Custom integrations"
            ]}
            buttonText="Contact Sales"
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
