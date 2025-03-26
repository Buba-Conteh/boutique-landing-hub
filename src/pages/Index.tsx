
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import FeaturesSection from '../components/FeaturesSection';
import AnalyticsSection from '../components/AnalyticsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation
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

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
