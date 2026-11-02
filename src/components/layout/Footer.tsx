import React from 'react';
import { Logo } from '../common/Logo';
import { PageRoute } from '../../types';
import { SCHOOL_INFO } from '../../data/schoolData';
import { 
  Phone, Mail, MapPin, ExternalLink, ArrowRight, 
  ShieldCheck, Award, CreditCard, ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B2514] text-slate-200 pt-16 pb-8 border-t-4 border-[#D4AF37] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: School Identity & Heritage */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" size="lg" />
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-md pt-2">
              Established under the aegis of <strong className="text-white">Annapurna Educational Society</strong> and inspired by a heritage dating back to 1984, Sanskruthi Global School fosters academic excellence, moral discipline, sportsmanship, and global preparedness in a serene 10-acre campus setting.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#EAC775]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>CBSE Affiliation: 130302/2013</span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>School Code: 57077</span>
              </div>
            </div>

            {/* Quick Online Payment Highlight */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('online-payment')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D01C24] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#A8141B] transition-all cursor-pointer shadow"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#EAC775]" />
                <span>Pay Student Fees Online</span>
              </button>
            </div>
          </div>

          {/* Col 3: Academic & Campus Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8D6AD] border-b border-white/10 pb-2">
              Academics & Campus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('academics', 'cbse-curriculum')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>CBSE Curriculum (I to X)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'senior-secondary')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Senior Secondary (MPC & BiPC)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'competitive-coaching')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>IIT-JEE & NEET Foundation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics', 'digital-classrooms')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>THINKEDGE STEM & SmartClass</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campus', 'residential-campus')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Residential Hostels & Dining</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campus', 'transport')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>GPS Transport Routes</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Sports & Co-Curricular */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8D6AD] border-b border-white/10 pb-2">
              Sports & Life
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('sports-and-activities', 'horse-riding')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Horse Riding Academy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sports-and-activities', 'archery')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Archery & Rifle Shooting</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sports-and-activities', 'swimming')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Semi-Olympic Swimming Pool</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sports-and-activities', 'martial-arts')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Taekwondo & Martial Arts</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sports-and-activities', 'ncc')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>NCC Wings & Band Performers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('student-life', 'organic-farm')}
                  className="hover:text-[#E8D6AD] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]" />
                  <span>Organic Farming & Nature</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8D6AD] border-b border-white/10 pb-2">
              Official Campus
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>
                  PS Bonangi, Parwada Mandal, Visakhapatnam – 531021, Andhra Pradesh, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`} className="hover:text-[#E8D6AD]">
                    {SCHOOL_INFO.phones[0]}
                  </a>
                  <a href={`tel:${SCHOOL_INFO.phones[1].replace(/\s+/g, '')}`} className="hover:text-[#E8D6AD]">
                    {SCHOOL_INFO.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.emails.general}`} className="hover:text-[#E8D6AD] break-all">
                  {SCHOOL_INFO.emails.general}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E8D6AD] hover:underline"
                >
                  <span>Get Driving Directions</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Sanskruthi Global School. All rights reserved. Managed by Annapurna Educational Society.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('mandatory-public-disclosure')}
              className="hover:text-[#E8D6AD] transition-colors underline underline-offset-4"
            >
              CBSE Mandatory Public Disclosure
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('admissions', 'tc-verification')}
              className="hover:text-[#E8D6AD] transition-colors"
            >
              TC Verification
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('online-payment')}
              className="hover:text-[#E8D6AD] transition-colors"
            >
              Fee Payment Gateway
            </button>
            <span>·</span>
            <a
              href="https://sanskruthiglobalschool.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8D6AD] inline-flex items-center gap-1"
            >
              <span>Legacy Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
