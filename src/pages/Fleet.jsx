import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import { cars, categories } from '../components/carData';

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCars = cars
    .filter((car) => selectedCategory === 'All' || car.category === selectedCategory)
    .sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111]">
      <Header />

      <section className="pt-28 pb-10 md:pt-36 md:pb-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A962] mb-3">
            Catalogue
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Our fleet</h1>
          <p className="text-[#555] max-w-2xl text-lg leading-relaxed">
            Toyota Prius saloons from 2014 to 2020 and the 2021 Kia Niro. All
            vehicles listed here are available to enquire about, with taxi plates
            for Wolverhampton, Sefton, Pendle and other areas.
          </p>
        </div>
      </section>

      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-[12px] tracking-[0.12em] uppercase rounded-[7px] border transition-colors ${
                selectedCategory === category
                  ? 'bg-[#111] text-white border-[#111]'
                  : 'bg-transparent text-[#444] border-[#DCDCDC] hover:border-[#111]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-sm text-[#888] mb-8">
            {filteredCars.length} vehicles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
