import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CarCard from '../components/CarCard';
import { cars, companyInfo, services, taxiPlates } from '../components/carData';

export default function Home() {
  const featuredCars = cars.filter((car) => car.featured);
  const location = useLocation();
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => setShowMobileCta(window.scrollY > 420);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">
      <Header overlay />
      <HeroSection />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A962] mb-3">
                Our fleet
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Find the right vehicle
                <br className="hidden md:block" /> for the journey.
              </h2>
            </div>
            <Link
              to={createPageUrl('Fleet')}
              className="text-[12px] font-semibold tracking-[0.14em] uppercase border-b border-[#111] pb-1 self-start"
            >
              View full fleet
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <img
          src="/cars/prius-street.jpg"
          alt="Toyota Prius"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 md:px-8 pb-12">
            <p className="font-display text-white text-4xl md:text-6xl max-w-xl leading-tight">
              Built for the road.
              <span className="italic text-[#C9A962]"> Ready for hire.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A962] mb-3">
            Our services
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-14 max-w-xl">
            What we provide.
          </h2>
          <div className="divide-y divide-[#DCDCDC] border-y border-[#DCDCDC]">
            {services.map((item) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10"
              >
                <p className="md:col-span-2 font-display text-3xl text-[#C9A962]">
                  {item.number}
                </p>
                <h3 className="md:col-span-4 font-display text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="md:col-span-6 text-[#555] leading-relaxed text-[16px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[12px] border border-[#E4E4E0]">
          <img
            src="/cars/kia-niro-2021-side.jpg"
            alt="Kia Niro"
            className="w-full h-full min-h-[280px] object-cover"
          />
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A962] mb-3">
              Taxi plates
            </p>
            <h2 className="font-display text-4xl mb-4">Licensed for the areas you work.</h2>
            <p className="text-[#555] leading-relaxed mb-8">
              Ask for the plate you need when you enquire. We can supply vehicles
              with plates for the following licensing authorities:
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[15px] text-[#111]">
              {taxiPlates.map((plate) => (
                <li key={plate} className="border-b border-[#EFEFEF] py-2">
                  {plate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A962] mb-3">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              A straightforward rental company.
            </h2>
          </div>
          <div className="lg:col-span-7 text-[#555] text-[17px] leading-relaxed space-y-5">
            <p>
              MK Settle Cars offers quality taxi rental from Lancashire. The fleet
              is focused on reliable, fuel-efficient hybrids — Toyota Prius saloons
              from 2014 to 2020, and the 2021 Kia Niro SUV.
            </p>
            <p>
              Every vehicle is well maintained and regularly serviced. Insurance,
              servicing, MOT, road tax and dash cam are included in the deal.
              Delivery and pickup can be arranged at your convenience.
            </p>
            <p>
              There is no online booking. Browse the fleet, then enquire by phone
              or email and we will handle the rental directly.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="bg-white border border-[#E4E4E0] rounded-[12px] grid lg:grid-cols-2 overflow-hidden">
            <img
              src="/cars/business-handshake-desk.jpg"
              alt="Agreement being finalised"
              className="w-full h-full min-h-[280px] object-cover"
            />
            <div className="bg-[#111] text-white p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#C9A962] mb-4">
                  Get in touch
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                    {companyInfo.phones.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="block font-display text-2xl hover:text-[#C9A962]"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="font-display text-2xl hover:text-[#C9A962] break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Based in</p>
                    <p className="font-display text-2xl">{companyInfo.address}</p>
                  </div>
                </div>
              </div>
              <p className="text-white/45 text-sm mt-10">{companyInfo.openingHours}</p>
            </div>
          </div>
        </div>
      </section>

      {showMobileCta && (
        <>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F7F7F5]/95 border-t border-[#DCDCDC]">
            <a
              href="#contact"
              className="block text-center bg-[#111] text-white py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase rounded-[7px]"
            >
              Enquire now
            </a>
          </div>
          <div className="lg:hidden h-16" />
        </>
      )}

      <Footer />
    </div>
  );
}
