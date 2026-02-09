import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { companyInfo } from './carData';
import ContactModal from './ContactModal';

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A962] to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#C9A962]/20 border border-[#C9A962]/40 rounded-full text-[#C9A962] text-sm tracking-widest uppercase mb-8">
              Quality Car Rental
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Rent Your
            <span className="block text-[#C9A962]">Perfect Car</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Choose from our diverse fleet of reliable vehicles. From fuel-efficient hybrids to spacious family cars, 
            find the right vehicle for your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to={createPageUrl('Fleet')}
              className="inline-flex items-center justify-center gap-3 bg-[#C9A962] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#d4b872] transition-all group"
            >
              View Our Fleet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="w-14 h-14 bg-[#C9A962]/20 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-[#C9A962]" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Fully Insured</h3>
              <p className="text-white/50 text-sm">Comprehensive coverage included</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="w-14 h-14 bg-[#C9A962]/20 rounded-xl flex items-center justify-center">
              <Clock className="w-7 h-7 text-[#C9A962]" />
            </div>
            <div>
              <h3 className="text-white font-semibold">24/7 Support</h3>
              <p className="text-white/50 text-sm">Always here when you need us</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <div className="w-14 h-14 bg-[#C9A962]/20 rounded-xl flex items-center justify-center">
              <Award className="w-7 h-7 text-[#C9A962]" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Quality Service</h3>
              <p className="text-white/50 text-sm">Well-maintained vehicles</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#C9A962] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>

    {/* Contact Modal */}
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={() => setIsContactModalOpen(false)} 
    />
    </>
  );
}