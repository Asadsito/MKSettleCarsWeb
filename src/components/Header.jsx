import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from './carData';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md py-3 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to={createPageUrl('Home')} className="flex items-center gap-3">
          <div className="relative">
            {/* 
              TO ADD YOUR LOGO:
              1. Put your logo image in: public/logos/mk-settle-logo.png
              2. Uncomment the <img> line below and comment/delete the fallback div
            */}
            <img 
              src="/logos/mk-settle-logo.png" 
              alt="MK Settle Cars" 
              className="h-12 w-auto"
              onError={(e) => {
                // Fallback if image not found
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-12 h-12 border-2 border-[#C9A962] rounded-full items-center justify-center hidden">
              <span className="text-[#C9A962] font-bold text-lg tracking-tight">MK</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-semibold text-lg tracking-wide">
              {companyInfo.name}
            </h1>
            <p className="text-[#C9A962] text-xs tracking-widest uppercase">
              {companyInfo.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link 
            to={createPageUrl('Home')} 
            className="text-white/80 hover:text-[#C9A962] transition-colors text-sm tracking-wide uppercase"
          >
            Home
          </Link>
          <Link 
            to={createPageUrl('Fleet')} 
            className="text-white/80 hover:text-[#C9A962] transition-colors text-sm tracking-wide uppercase"
          >
            Our Fleet
          </Link>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="flex items-center gap-2 bg-[#C9A962] text-black px-6 py-3 rounded-full hover:bg-[#d4b872] transition-all text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us Now</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <nav className="flex flex-col p-6 gap-4">
              <Link 
                to={createPageUrl('Home')} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#C9A962] transition-colors py-3 border-b border-white/10"
              >
                Home
              </Link>
              <Link 
                to={createPageUrl('Fleet')} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#C9A962] transition-colors py-3 border-b border-white/10"
              >
                Our Fleet
              </Link>
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-[#C9A962] text-black px-6 py-4 rounded-full mt-2 font-medium w-full"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us Now</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}
