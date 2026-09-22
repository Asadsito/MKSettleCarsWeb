import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import ContactModal from '../components/ContactModal';
import { cars, companyInfo, taxiPlates } from '../components/carData';

export default function CarDetails() {
  const [searchParams] = useSearchParams();
  const carId = parseInt(searchParams.get('id'), 10);
  const car = cars.find((c) => c.id === carId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo(0, 0);
  }, [carId]);

  if (!car) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-4">Vehicle not found</h1>
          <Link to={createPageUrl('Fleet')} className="text-[#666] border-b border-[#C9A962]">
            Back to fleet
          </Link>
        </div>
      </div>
    );
  }

  const allImages = car.gallery?.length ? car.gallery : [car.image];
  const similarCars = cars.filter((c) => c.id !== car.id && c.category === car.category).slice(0, 3);

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  const sideImages = allImages.slice(1, 3);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">
      <Header />

      <section className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Link
            to={createPageUrl('Fleet')}
            className="text-sm text-[#666] hover:text-[#111]"
          >
            ← Back to fleet
          </Link>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:col-span-7"
            >
              <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-3 h-[520px]">
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(0)}
                  className="col-span-2 row-span-2 overflow-hidden rounded-[12px] bg-[#ECECE8]"
                >
                  <img
                    src={allImages[0]}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                {sideImages.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImageIndex(i + 1)}
                    className="overflow-hidden rounded-[12px] bg-[#ECECE8]"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="md:hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-[#ECECE8]">
                  <img
                    src={allImages[activeImageIndex]}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-[7px] flex items-center justify-center"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-[7px] flex items-center justify-center"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === activeImageIndex ? 'w-6 bg-[#111]' : 'w-1.5 bg-[#CCC]'
                      }`}
                      aria-label={`Image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5"
            >
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#C9A962] mb-2">
                {car.brand} · {car.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl mb-6">{car.name}</h1>

              <p className="text-3xl font-semibold mb-8">
                £{car.pricePerWeek}
                <span className="text-base font-normal text-[#888]"> / week</span>
              </p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] text-[#444] mb-8 pb-8 border-b border-[#E4E4E0]">
                <li>Automatic</li>
                <li>{car.specs.seats} seats</li>
                <li>{car.specs.fuelType}</li>
                <li>{car.specs.doors} doors</li>
                <li>{car.specs.engine}</li>
                <li>{car.specs.mpg}</li>
              </ul>

              <h2 className="text-sm font-semibold tracking-wide uppercase mb-3">
                About this vehicle
              </h2>
              <p className="text-[#555] leading-relaxed mb-8">{car.description}</p>

              <h2 className="text-sm font-semibold tracking-wide uppercase mb-3">
                Taxi plates available
              </h2>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                {taxiPlates.join(', ')}. Let us know which plate you need when you enquire.
              </p>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full bg-[#111] text-white py-4 text-[12px] font-semibold tracking-[0.14em] uppercase rounded-[7px] hover:bg-[#C9A962] hover:text-black transition-colors"
              >
                Enquire about this vehicle
              </button>
              <p className="text-xs text-[#888] mt-3">
                Or call {companyInfo.phones[0].display}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#E4E4E0]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-6">Specifications</h2>
            <dl>
              {[
                ['Engine', car.specs.engine],
                ['Power', car.specs.horsepower],
                ['Transmission', car.specs.transmission],
                ['Fuel', car.specs.fuelType],
                ['Seats', `${car.specs.seats}`],
                ['Doors', `${car.specs.doors}`],
                ['Luggage', car.specs.luggage],
                ['Economy', car.specs.mpg],
              ].map(([label, value], index, arr) => (
                <div
                  key={label}
                  className={`flex justify-between py-3 ${
                    index !== arr.length - 1 ? 'border-b border-[#E8E8E8]' : ''
                  }`}
                >
                  <dt className="text-[#888]">{label}</dt>
                  <dd className="text-[#111]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-display text-3xl mb-6">Equipment</h2>
            <ul className="space-y-3">
              {car.features.map((feature) => (
                <li key={feature} className="text-[#444] border-b border-[#EFEFEF] pb-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {similarCars.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h2 className="font-display text-3xl mb-8">Other vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {similarCars.map((similarCar, index) => (
                <CarCard key={similarCar.id} car={similarCar} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        vehicleName={car.name}
      />
    </div>
  );
}
