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
              <span className="text-[#C9A962] text-sm tracking-widest uppercase">
                Our Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                Featured Vehicles
              </h2>
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

          {/* Featured Cars OR Empty State */}
          {featuredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-12 text-center overflow-hidden"
            >
              {/* Message */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Sorry — all vehicles are currently reserved
              </h3>
              <p className="text-white/60 max-w-xl mx-auto mb-10">
                Our entire fleet is fully booked at the moment. Please check back soon or view
                our full fleet for upcoming availability.
              </p>

              {/* Road */}
              <div className="relative h-24 overflow-hidden">
                <div className="absolute bottom-6 left-0 right-0 h-1 bg-white/10 rounded-full" />

                {/* Animated Car */}
                <motion.div
                  initial={{ x: '-20%' }}
                  animate={{ x: '120%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: 'linear'
                  }}
                  className="absolute bottom-8 left-0"
                >
                  <div className="w-16 h-8 bg-[#C9A962] rounded-md relative shadow-lg">
                    <div className="absolute -bottom-2 left-2 w-3 h-3 bg-black rounded-full" />
                    <div className="absolute -bottom-2 right-2 w-3 h-3 bg-black rounded-full" />
                    <div className="absolute top-1 left-3 w-4 h-3 bg-black/30 rounded-sm" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
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
            <span className="text-[#C9A962] text-sm tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              The MK Settle Difference
            </h2>
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
                description: "Insurance, services, tyre changes, MOT and road tax all included in the deal."
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
                className="relative p-8 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-[#C9A962]/30 transition-all"
              >
                <span className="text-6xl font-bold text-[#C9A962]/10 absolute top-4 right-6">
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
