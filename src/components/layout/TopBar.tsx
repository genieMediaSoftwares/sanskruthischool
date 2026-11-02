import React from 'react';
import { Phone, Mail, CreditCard, FileCheck, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';
import { PageRoute } from '../../types';

interface TopBarProps {
  onNavigate: (route: PageRoute) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0B2514] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30 hidden md:block select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`}
            className="flex items-center gap-2 hover:text-[#EAC775] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-tight">{SCHOOL_INFO.phones[0]}</span>
          </a>

          <a
            href={`tel:${SCHOOL_INFO.phones[1].replace(/\s+/g, '')}`}
            className="flex items-center gap-2 hover:text-[#EAC775] transition-colors hidden lg:flex"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-tight">{SCHOOL_INFO.phones[1]}</span>
          </a>

          <a
            href={`mailto:${SCHOOL_INFO.emails.general}`}
            className="flex items-center gap-2 hover:text-[#EAC775] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{SCHOOL_INFO.emails.general}</span>
          </a>
        </div>

        {/* Right: Quick Portals & Disclosure */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => onNavigate('online-payment')}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#EAC775] transition-colors font-semibold cursor-pointer"
          >
            <CreditCard className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Online Fee Payment</span>
          </button>

          <span className="text-white/20">|</span>

          <button
            onClick={() => onNavigate('mandatory-public-disclosure')}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#EAC775] transition-colors font-semibold cursor-pointer"
          >
            <FileCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CBSE Mandatory Disclosure</span>
          </button>

          <span className="text-white/20">|</span>

          <button
            onClick={() => onNavigate('admissions')}
            className="inline-flex items-center gap-1 font-bold text-[#EAC775] hover:text-white transition-colors cursor-pointer"
          >
            <span>Admissions 2026–27 Open</span>
            <ArrowRight className="w-3 h-3 text-[#D01C24]" />
          </button>
        </div>
      </div>
    </div>
  );
};
