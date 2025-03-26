
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold text-boutique-blue">Boutique</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Simplify your business operations with our all-in-one ERP solution designed for boutique retailers and growing businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-boutique-blue border border-gray-200 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-boutique-blue border border-gray-200 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-boutique-blue border border-gray-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-boutique-blue border border-gray-200 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Press</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-boutique-blue transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={16} className="text-gray-500 mr-2 mt-1" />
                <a href="mailto:info@boutique-erp.com" className="text-gray-600 hover:text-boutique-blue transition-colors">info@boutique-erp.com</a>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-gray-500 mr-2 mt-1" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-boutique-blue transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-gray-500 mr-2 mt-1" />
                <span className="text-gray-600">123 Business Ave, Suite 100<br />San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-200 mt-12 pt-8 md:mt-16 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-600">Get the latest updates, tips, and special offers.</p>
            </div>
            <div className="flex max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-boutique-blue focus:border-transparent"
              />
              <button className="bg-boutique-blue text-white px-4 py-2 rounded-r-md hover:bg-boutique-blue-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Boutique ERP. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-boutique-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-boutique-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-boutique-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
