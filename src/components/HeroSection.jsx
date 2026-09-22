import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100svh] bg-[#111] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/cars/hero-drive.jpg"
            alt="Hybrid taxi on the road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 min-h-[100svh] grid lg:grid-cols-12 gap-10 items-end lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="text-[#C9A962] text-[12px] tracking-[0.22em] uppercase mb-6">
              Lancashire taxi rental
            </p>
            <h1 className="font-display text-[3.4rem] sm:text-7xl lg:text-[5.4rem] leading-[0.92] mb-8 drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
              Premium
              <br />
              hybrids.
              <span className="block mt-2 italic text-[#C9A962]">Rented simply.</span>
            </h1>
            <p className="text-white/90 text-lg max-w-md leading-relaxed mb-10">
              Toyota Prius from 2014 to 2020 and the 2021 Kia Niro, supplied for
              private hire with plates for Wolverhampton, Sefton, Pendle and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={createPageUrl('Fleet')}
                className="inline-flex items-center justify-center bg-[#C9A962] text-[#111] px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase rounded-[7px] hover:bg-[#d4b872] transition-colors"
              >
                View our fleet
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center border border-white/40 text-white px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase rounded-[7px] hover:bg-white hover:text-[#111] transition-colors"
              >
                Enquire now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="ml-auto max-w-sm border border-white/20 bg-black/30 p-6">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#C9A962] mb-3">
                The fleet
              </p>
              <p className="font-display text-3xl leading-tight mb-4">
                Prius saloons &amp; Niro SUV
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                Insurance, MOT, road tax and dash cam included. Delivery and
                collection arranged with the team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
