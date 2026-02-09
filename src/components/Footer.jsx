import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { companyInfo } from './carData';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logos/mk-settle-logo.png" 
                alt="MK Settle Cars" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback if image not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 border-2 border-[#C9A962] rounded-full items-center justify-center hidden">
                <span className="text-[#C9A962] font-bold text-lg">MK</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{companyInfo.name}</h3>
                <p className="text-[#C9A962] text-xs tracking-widest uppercase">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              Reliable car rental services with a diverse fleet of well-maintained vehicles. 
              From fuel-efficient hybrids to comfortable family cars, we provide quality 
              transportation solutions for all your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to={createPageUrl('Home')} className="text-white/60 hover:text-[#C9A962] transition-colors">
                Home
              </Link>
              <Link to={createPageUrl('Fleet')} className="text-white/60 hover:text-[#C9A962] transition-colors">
                Our Fleet
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-white/60 hover:text-[#C9A962] transition-colors">
                <Phone className="w-4 h-4 text-[#C9A962]" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-white/60 hover:text-[#C9A962] transition-colors">
                <Mail className="w-4 h-4 text-[#C9A962]" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#C9A962] mt-1 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Clock className="w-4 h-4 text-[#C9A962]" />
                <span>{companyInfo.openingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Developed and maintained by</span>
              <img 
                src="/logos/qualyst-logo.png" 
                alt="Qualyst" 
                className="h-4 w-auto opacity-60 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Fallback if image not found , show text
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-flex';
                }}
              />
              <span className="text-[#C9A962] font-medium items-center gap-1 hidden">
                Qualyst
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}