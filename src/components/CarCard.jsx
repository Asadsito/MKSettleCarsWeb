import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { Fuel, Users, Gauge, Calendar, ChevronRight } from 'lucide-react';

export default function CarCard({ car, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={createPageUrl(`CarDetails?id=${car.id}`)}
        className="group block bg-[#1A1A1A] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#C9A962]/10 transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={car.image} 
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs tracking-wider uppercase rounded-full border border-white/20">
              {car.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-[#C9A962] text-black text-xs font-semibold rounded-full flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {car.year}
            </span>
          </div>

          {/* Availability Badge */}
          {!car.available && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Currently Reserved</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Brand */}
          <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-1">
            {car.brand}
          </p>
          
          {/* Name */}
          <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-[#C9A962] transition-colors">
            {car.name}
          </h3>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center p-3 bg-black/40 rounded-xl">
              <Fuel className="w-4 h-4 text-[#C9A962] mb-1" />
              <span className="text-white/60 text-xs">{car.specs.fuelType}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-black/40 rounded-xl">
              <Users className="w-4 h-4 text-[#C9A962] mb-1" />
              <span className="text-white/60 text-xs">{car.specs.seats} Seats</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-black/40 rounded-xl">
              <Gauge className="w-4 h-4 text-[#C9A962] mb-1" />
              <span className="text-white/60 text-xs">{car.specs.horsepower}</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-end justify-between pt-4 border-t border-white/10">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">From</p>
              <p className="text-white text-2xl font-bold">
                £{car.pricePerWeek}
                <span className="text-white/40 text-sm font-normal">/Week</span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-[#C9A962] text-sm font-medium group-hover:gap-2 transition-all">
              View Details
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}