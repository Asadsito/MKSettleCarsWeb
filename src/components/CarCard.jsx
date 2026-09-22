import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function CarCard({ car, index = 0 }) {
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
        className="group bg-white border border-[#E4E4E0] rounded-[10px] overflow-hidden"
      >
        <Link to={createPageUrl(`CarDetails?id=${car.id}`)} className="block">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#ECECE8]">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </Link>
        <div className="p-5 md:p-6">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#888] mb-1">
            {car.category} · {car.year}
          </p>
          <h3 className="font-display text-[1.65rem] leading-tight text-[#111] mb-2">
            {car.name}
          </h3>
          <p className="text-[#666] text-sm leading-relaxed mb-4 line-clamp-2">
            {car.description}
          </p>
          <p className="text-[13px] text-[#444] mb-5">
            {car.specs.transmission.split(' ')[0]} · {car.specs.seats} seats ·{' '}
            {car.specs.fuelType} · {car.specs.doors} doors
          </p>
          <div className="flex items-end justify-between gap-4 pt-4 border-t border-[#EDEDED]">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#888] mb-0.5">From</p>
              <p className="text-xl font-semibold text-[#111]">
                £{car.pricePerWeek}
                <span className="text-sm font-normal text-[#888]"> / week</span>
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Link
                to={createPageUrl(`CarDetails?id=${car.id}`)}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#111] border-b border-[#C9A962] pb-0.5"
              >
                View details
              </Link>
              <button
                onClick={() => setEnquireOpen(true)}
                className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#888] hover:text-[#111]"
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </motion.article>

      <ContactModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        vehicleName={car.name}
      />
    </>
  );
}
