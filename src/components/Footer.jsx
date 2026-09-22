import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { companyInfo, taxiPlates } from './carData';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#01112B] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/logos/mk-settle-logo-new.png"
              alt="MK Settle Cars"
              className="h-16 md:h-[4.5rem] w-auto"
            />
          </div>
          <p className="text-white/55 leading-relaxed max-w-md text-[15px]">
            Reliable taxi rental from Lancashire. Toyota Prius hybrids and the Kia
            Niro, with plates available for Wolverhampton, Sefton, Pendle and other
            licensing authorities.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#C9A962] mb-5">
            Navigate
          </p>
          <nav className="flex flex-col gap-2.5 text-white/70 text-[15px]">
            <Link to={createPageUrl('Home')} className="hover:text-white">
              Home
            </Link>
            <Link to={createPageUrl('Fleet')} className="hover:text-white">
              Fleet
            </Link>
            <Link to={createPageUrl('Home') + '#services'} className="hover:text-white">
              Services
            </Link>
            <Link to={createPageUrl('Home') + '#contact'} className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#C9A962] mb-5">
            Taxi plates
          </p>
          <p className="text-white/70 text-[14px] leading-relaxed">
            {taxiPlates.slice(0, 8).join(', ')}
            {' '}and more.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#C9A962] mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-2 text-white/70 text-[15px]">
            {companyInfo.phones.map((p) => (
              <a key={p.href} href={p.href} className="hover:text-white">
                {p.display}
              </a>
            ))}
            <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
              {companyInfo.email}
            </a>
            <p>{companyInfo.address}</p>
            <p className="text-white/45 text-sm mt-1">{companyInfo.openingHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/35 text-sm">
            <span>Developed and maintained by</span>
            <a
              href="https://www.instagram.com/QualystGroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-100"
              aria-label="Qualyst on Instagram"
            >
              <img
                src="/logos/qualyst-logo.png"
                alt="Qualyst"
                className="h-4 w-auto opacity-60 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-flex';
                }}
              />
              <span className="text-[#C9A962] font-medium items-center gap-1 hidden">
                Qualyst
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
