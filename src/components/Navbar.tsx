
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="font-display text-2xl font-bold text-boutique-blue">Boutique</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-boutique-blue transition-colors">Features</a>
          <a href="#analytics" className="text-gray-600 hover:text-boutique-blue transition-colors">Analytics</a>
          <a href="#pricing" className="text-gray-600 hover:text-boutique-blue transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-boutique-blue transition-colors">FAQ</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hover:bg-gray-100 border-gray-200">
            Log in
          </Button>
          <Button className="bg-boutique-blue hover:bg-boutique-blue-dark shadow-button">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transform transition-transform duration-300",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 text-lg">
          <a href="#features" 
             className="text-gray-800 hover:text-boutique-blue transition-colors py-2 border-b border-gray-100"
             onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#analytics" 
             className="text-gray-800 hover:text-boutique-blue transition-colors py-2 border-b border-gray-100"
             onClick={() => setMobileMenuOpen(false)}>
            Analytics
          </a>
          <a href="#pricing" 
             className="text-gray-800 hover:text-boutique-blue transition-colors py-2 border-b border-gray-100"
             onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" 
             className="text-gray-800 hover:text-boutique-blue transition-colors py-2 border-b border-gray-100"
             onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <div className="pt-4 flex flex-col space-y-4">
            <Button variant="outline" className="w-full hover:bg-gray-100 border-gray-200">
              Log in
            </Button>
            <Button className="w-full bg-boutique-blue hover:bg-boutique-blue-dark">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
