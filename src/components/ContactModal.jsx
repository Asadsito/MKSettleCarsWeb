import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone } from 'lucide-react';
import { companyInfo } from './carData';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Get In Touch
                </h2>

                <p className="text-sm text-white/60 mb-6">
                  NOTE: Prices may vary depending on the state of your license and age.
                </p>

                <div className="space-y-4">

                  {/* Email */}
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center justify-center gap-3 p-4 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-xl hover:bg-[#C9A962]/20 transition-all group"
                  >
                    <Mail className="w-5 h-5 text-[#C9A962]" />
                    <div className="text-left">
                      <p className="text-white/60 text-xs">Enquire at:</p>
                      <p className="text-white font-medium">{companyInfo.email}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-3 p-4 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-xl hover:bg-[#C9A962]/20 transition-all group"
                  >
                    <Phone className="w-5 h-5 text-[#C9A962]" />
                    <div className="text-left">
                      <p className="text-white/60 text-xs">Call us:</p>
                      <p className="text-white font-medium">{companyInfo.phone}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
