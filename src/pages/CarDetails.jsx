import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Phone, 
  Calendar, 
  Fuel, 
  Users, 
  DoorOpen, 
  Briefcase,
  Gauge,
  Cog,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import ContactModal from '../components/ContactModal';
import { cars, companyInfo } from '../components/carData';

export default function CarDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const carId = parseInt(urlParams.get('id'));
  const car = cars.find(c => c.id === carId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Vehicle Not Found</h1>
          <Link 
            to={createPageUrl('Fleet')}
            className="text-[#C9A962] hover:text-[#d4b872] transition-colors"
          >
            ← Back to Fleet
          </Link>
        </div>
      </div>
    );
  }

  const allImages = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];
  
  // Get similar cars
  const similarCars = cars
    .filter(c => c.id !== car.id && c.category === car.category)
    .slice(0, 3);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Back Navigation */}
      <section className="pt-28 pb-4 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={createPageUrl('Fleet')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#C9A962] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Fleet
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1A1A1A]">
                <img 
                  src={allImages[activeImageIndex]} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs tracking-wider uppercase rounded-full border border-white/20">
                    {car.category}
                  </span>
                </div>

                {/* Availability */}
                {car.available ? (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-green-500/20 backdrop-blur-md text-green-400 text-xs font-medium rounded-full border border-green-500/40">
                      Available Now
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-red-500/20 backdrop-blur-md text-red-400 text-xs font-medium rounded-full border border-red-500/40">
                      Currently Reserved
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        index === activeImageIndex 
                          ? 'border-[#C9A962]' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Title & Price */}
              <div>
                <p className="text-[#C9A962] text-sm tracking-widest uppercase mb-2">
                  {car.brand} · {car.year}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {car.name}
                </h1>
                
                <div className="flex flex-wrap gap-6">
                  <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Daily Rate</p>
                    <p className="text-3xl font-bold text-white">
                      £{car.pricePerDay}
                      <span className="text-white/40 text-sm font-normal">/day</span>
                    </p>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Weekly Rate</p>
                    <p className="text-3xl font-bold text-[#C9A962]">
                      £{car.pricePerWeek}
                      <span className="text-[#C9A962]/60 text-sm font-normal">/week</span>
                    </p>
                  </div>
                </div>
              </div>
              

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">About This Vehicle</h2>
                <p className="text-white/70 leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Key Specs Grid */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Key Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-white/5">
                    <Fuel className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Fuel</p>
                    <p className="text-white font-medium text-sm">{car.specs.fuelType}</p>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-white/5">
                    <Gauge className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Power</p>
                    <p className="text-white font-medium text-sm">{car.specs.horsepower}</p>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-white/5">
                    <Cog className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Transmission</p>
                    <p className="text-white font-medium text-sm">{car.specs.transmission.split(' ')[0]}</p>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-white/5">
                    <Users className="w-5 h-5 text-[#C9A962] mx-auto mb-2" />
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Seats</p>
                    <p className="text-white font-medium text-sm">{car.specs.seats} Passengers</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-[#C9A962] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#d4b872] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Full Specs Section */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden">
                {[
                  { label: 'Engine', value: car.specs.engine, icon: Cog },
                  { label: 'Horsepower', value: car.specs.horsepower, icon: Gauge },
                  { label: 'Transmission', value: car.specs.transmission, icon: Cog },
                  { label: 'Fuel Type', value: car.specs.fuelType, icon: Fuel },
                  { label: 'Seating Capacity', value: `${car.specs.seats} Passengers`, icon: Users },
                  { label: 'Doors', value: `${car.specs.doors} Doors`, icon: DoorOpen },
                  { label: 'Luggage Capacity', value: car.specs.luggage, icon: Briefcase },
                  { label: 'Fuel Economy', value: car.specs.mpg, icon: Fuel },
                ].map((spec, index) => (
                  <div 
                    key={spec.label}
                    className={`flex items-center justify-between p-4 ${
                      index !== 7 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <spec.icon className="w-4 h-4 text-[#C9A962]" />
                      <span className="text-white/60">{spec.label}</span>
                    </div>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Features & Equipment</h2>
              <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {car.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#C9A962]" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Similar Cars */}
      {similarCars.length > 0 && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarCars.map((similarCar, index) => (
                <CarCard key={similarCar.id} car={similarCar} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}