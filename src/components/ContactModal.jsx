import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { companyInfo } from './carData';

export default function ContactModal({ isOpen, onClose, vehicleName = '' }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-white border border-[#DCDCDC] shadow-[0_24px_80px_rgba(0,0,0,0.28)] rounded-[10px] p-6 sm:p-8 max-w-md w-full relative my-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#666] hover:text-[#111]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#C9A962] mb-2">
                Contact
              </p>
              <h2 className="font-display text-3xl text-[#111] mb-2">Get in touch</h2>
              <p className="text-[#666] text-sm mb-6">
                {vehicleName
                  ? `Call or email us about the ${vehicleName}.`
                  : 'Call or email us and we will handle the rental directly.'}
              </p>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#888] mb-1">Phone</p>
                  {companyInfo.phones.map((p) => (
                    <p key={p.href}>
                      <a href={p.href} className="text-[#111] text-lg hover:text-[#C9A962]">
                        {p.display}
                      </a>
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#888] mb-1">Email</p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-[#111] text-lg hover:text-[#C9A962] break-all"
                  >
                    {companyInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#888] mb-1">Based in</p>
                  <p className="text-[#111] text-lg">{companyInfo.address}</p>
                </div>
              </div>
              <p className="text-xs text-[#888] mt-6">{companyInfo.openingHours}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
