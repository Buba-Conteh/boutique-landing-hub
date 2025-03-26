
import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqItems = [
    {
      question: "How easy is it to get started with Boutique ERP?",
      answer: "Getting started with Boutique ERP is simple. After signing up, our guided setup process will help you import your inventory, configure your store settings, and set up user accounts. Most businesses are up and running within a day, and our support team is available to assist you every step of the way."
    },
    {
      question: "Can I manage multiple stores with Boutique?",
      answer: "Yes, our Business and Enterprise plans support multi-store management. You can track inventory across locations, view consolidated reporting, and set location-specific pricing and policies, all from a single dashboard."
    },
    {
      question: "Is there a limit to how many products I can manage?",
      answer: "Our Basic plan supports up to 500 inventory items, while our Business and Enterprise plans offer unlimited inventory management. Each plan is designed to scale with your business needs."
    },
    {
      question: "Do you offer integration with other platforms?",
      answer: "Boutique ERP integrates with popular e-commerce platforms, payment processors, accounting software, and shipping services. Our Enterprise plan also includes custom integration options for specialized business needs."
    },
    {
      question: "How secure is my business data?",
      answer: "We take security seriously. Boutique ERP uses industry-standard encryption, regular security audits, and strict access controls to protect your data. All information is backed up regularly, and we are compliant with relevant data protection regulations."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

    [sectionRef, contactRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [sectionRef, contactRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="faq" className="section bg-white border-t border-gray-100">
      <div className="container-custom">
        <div 
          ref={sectionRef}
          className="text-center mb-16 reveal-on-scroll"
        >
          <p className="text-boutique-blue font-medium mb-3">FAQ</p>
          <h2 className="heading-lg mb-4">Frequently asked questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Boutique ERP's features, pricing, and implementation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div 
          ref={contactRef}
          className="bg-boutique-blue-lightest rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto reveal-on-scroll"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-boutique-blue-light opacity-20 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-boutique-purple-light opacity-20 rounded-tr-full"></div>
          
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Our team is here to help. Contact us for personalized assistance with your business needs.
          </p>
          <Button size="lg" className="bg-boutique-blue shadow-button hover:bg-boutique-blue-dark">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
