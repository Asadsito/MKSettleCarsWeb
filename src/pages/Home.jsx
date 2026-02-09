import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CarCard from '../components/CarCard';
import { cars } from '../components/carData';

export default function Home() {
  const featuredCars = cars.filter(car => car.featured);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero */}
      <HeroSection />

      {/* Featured Cars Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-[#C9A962] text-sm tracking-widest uppercase">Our Collection</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Featured Vehicles</h2>
              <p className="text-white/60 mt-4 max-w-xl">
                Explore our selection of reliable, well-maintained vehicles, ready for your journey.
              </p>
            </div>
            <Link 
              to={createPageUrl('Fleet')}
              className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#d4b872] transition-colors group"
            >
              View All Cars
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Featured Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A962] text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">The MK Settle Difference</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Reliable Fleet",
                description: "Every vehicle in our fleet is well maintained and regularly serviced for your safety and comfort."
              },
              {
                number: "02",
                title: "All included",
                description: "Insurance , services , tyre changes , MOT and road tax all included in the deal."
              },
              {
                number: "03",
                title: "Concierge Service",
                description: "Experience excellent service with delivery and pickup at your convenience."
              }
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-[#1A1A1A] rounded-2xl border border-white/5 group hover:border-[#C9A962]/30 transition-all"
              >
                <span className="text-6xl font-bold text-[#C9A962]/10 absolute top-4 right-6">
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))} 
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Hit
              <span className="text-[#C9A962]"> The Road?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Browse our complete fleet and find the perfect vehicle for your next journey.
            </p>
            <Link 
              to={createPageUrl('Fleet')}
              className="inline-flex items-center gap-3 bg-[#C9A962] text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#d4b872] transition-all group"
            >
              Explore Our Fleet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}