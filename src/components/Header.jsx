import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Header({ overlay = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink =
    'text-[13px] tracking-[0.14em] uppercase transition-colors text-white/80 hover:text-white';

  const goHomeSection = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/' || location.pathname === '/Home') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !overlay
            ? 'bg-[#01112B]/98 border-b border-white/10 py-2'
            : 'bg-[#01112B] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-6">
          <Link to={createPageUrl('Home')} className="flex items-center min-w-0">
            <img
              src="/logos/mk-settle-logo-new.png"
              alt="MK Settle Cars"
              className="h-14 sm:h-16 md:h-[4.5rem] w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to={createPageUrl('Fleet')} className={navLink}>
              Fleet
            </Link>
            <Link
              to={createPageUrl('Home') + '#services'}
              onClick={() => goHomeSection('services')}
              className={navLink}
            >
              Services
            </Link>
            <Link
              to={createPageUrl('Home') + '#about'}
              onClick={() => goHomeSection('about')}
              className={navLink}
            >
              About
            </Link>
            <Link
              to={createPageUrl('Home') + '#contact'}
              onClick={() => goHomeSection('contact')}
              className={navLink}
            >
              Contact
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="ml-2 bg-[#FBD201] text-[#01112B] px-5 py-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase rounded-[7px] hover:bg-[#ffe14a] transition-colors"
            >
              Enquire now
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#01112B] border-t border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col px-5 py-4 gap-1">
                {[
                  { to: createPageUrl('Fleet'), label: 'Fleet' },
                  { to: createPageUrl('Home') + '#services', label: 'Services', id: 'services' },
                  { to: createPageUrl('Home') + '#about', label: 'About', id: 'about' },
                  { to: createPageUrl('Home') + '#contact', label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => {
                      if (item.id) goHomeSection(item.id);
                      else setIsMobileMenuOpen(false);
                    }}
                    className="py-3 text-white border-b border-white/10 tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 bg-[#FBD201] text-[#01112B] py-3.5 text-sm font-semibold tracking-[0.12em] uppercase rounded-[7px]"
                >
                  Enquire now
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
