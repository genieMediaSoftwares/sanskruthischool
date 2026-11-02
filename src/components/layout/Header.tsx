import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../common/Logo';
import { PageRoute } from '../../types';
import { 
  Menu, X, ChevronDown, Phone, CreditCard, 
  Sparkles, FileText, ArrowRight
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, subSection?: string) => void;
}

interface NavItem {
  label: string;
  route: PageRoute;
  children?: { label: string; sectionId?: string; isExternal?: boolean }[];
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', route: 'home' },
    {
      label: 'About Us',
      route: 'about',
      children: [
        { label: 'About Sanskruthi Global School', sectionId: 'about-school' },
        { label: 'Vision & Mission', sectionId: 'vision-mission' },
        { label: 'Chairman’s Message', sectionId: 'chairman-message' },
        { label: 'Principal’s Message', sectionId: 'principal-message' },
        { label: 'Our Staff & Leadership', sectionId: 'our-staff' },
        { label: 'Why Choose Sanskruthi?', sectionId: 'why-choose' }
      ]
    },
    {
      label: 'Academics',
      route: 'academics',
      children: [
        { label: 'CBSE Curriculum Framework', sectionId: 'cbse-curriculum' },
        { label: 'MPC & BiPC (Senior Secondary)', sectionId: 'senior-secondary' },
        { label: 'IIT-JEE & NEET Foundation', sectionId: 'competitive-coaching' },
        { label: 'THINKEDGE STEM Lab & SmartClass', sectionId: 'digital-classrooms' },
        { label: 'Skills & Public Speaking', sectionId: 'skills-lab' },
        { label: 'Academic Evaluation & Calendar', sectionId: 'academic-calendar' }
      ]
    },
    {
      label: 'Campus',
      route: 'campus',
      children: [
        { label: '10-Acre Campus Overview', sectionId: 'campus-overview' },
        { label: 'Advanced Classrooms & Labs', sectionId: 'smart-classrooms' },
        { label: 'Central Knowledge Library', sectionId: 'library' },
        { label: 'Safe GPS Transport Fleet', sectionId: 'transport' },
        { label: 'Residential Campus & Hostels', sectionId: 'residential-campus' }
      ]
    },
    {
      label: 'Sports & Clubs',
      route: 'sports-and-activities',
      children: [
        { label: 'Horse Riding Academy', sectionId: 'horse-riding' },
        { label: 'Archery Academy', sectionId: 'archery' },
        { label: 'Rifle Shooting Range', sectionId: 'rifle-shooting' },
        { label: 'Semi-Olympic Swimming Pool', sectionId: 'swimming' },
        { label: 'Taekwondo & Martial Arts', sectionId: 'martial-arts' },
        { label: 'Athletics & Basketball', sectionId: 'athletics' },
        { label: 'NCC (Naval, Army, Air Force)', sectionId: 'ncc' },
        { label: 'SGS Musical Performers', sectionId: 'music' }
      ]
    },
    {
      label: '@ Sanskruthi',
      route: 'student-life',
      children: [
        { label: 'School House System', sectionId: 'house-system' },
        { label: 'Organic Farming & Nature', sectionId: 'organic-farm' },
        { label: 'Cultural Festivals & Arts', sectionId: 'cultural-activities' },
        { label: 'Educational Field Trips', sectionId: 'field-trips' }
      ]
    },
    {
      label: 'Admissions',
      route: 'admissions',
      children: [
        { label: 'Admissions 2026–27 Overview', sectionId: 'admissions-overview' },
        { label: 'Admission Process & Eligibility', sectionId: 'admission-process' },
        { label: 'Enquiry Form', sectionId: 'enquiry-form' },
        { label: 'Transfer Certificate (TC) Verification', sectionId: 'tc-verification' },
        { label: 'Admissions FAQs', sectionId: 'admission-faqs' }
      ]
    },
    {
      label: 'Media Centre',
      route: 'media',
      children: [
        { label: 'Photo Gallery', sectionId: 'photo-gallery' },
        { label: 'School Achievements', sectionId: 'achievements' },
        { label: 'News & Events', sectionId: 'news-events' },
        { label: 'Circulars & Official Notices', sectionId: 'circulars' }
      ]
    },
    { label: 'Contact', route: 'contact' }
  ];

  const handleNavClick = (route: PageRoute, sectionId?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(route, sectionId);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' 
          : 'bg-white border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4" ref={dropdownRef}>
          {/* Brand Logo - Official Sanskruthi Global School */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B49] rounded-lg cursor-pointer"
            aria-label="Sanskruthi Global School Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              const hasDropdown = !!item.children;
              const isOpen = activeDropdown === item.label;

              return (
                <div key={item.label} className="relative">
                  {hasDropdown ? (
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      aria-expanded={isOpen}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-[13px] xl:text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[#142B49] bg-slate-100/80 font-bold'
                          : 'text-[#202B38] hover:text-[#142B49] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C6A15B]' : 'text-slate-400'}`} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.route)}
                      className={`px-3 py-2 text-[13px] xl:text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[#142B49] bg-slate-100/80 font-bold'
                          : 'text-[#202B38] hover:text-[#142B49] hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 overflow-hidden">
                        {/* Dropdown header with parent link */}
                        <button
                          onClick={() => handleNavClick(item.route)}
                          className="w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B] hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between cursor-pointer"
                        >
                          <span>Explore All {item.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="py-1">
                          {item.children?.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() => handleNavClick(item.route, sub.sectionId)}
                              className="w-full text-left px-4 py-2 text-[13px] font-medium text-slate-700 hover:text-[#0B1930] hover:bg-[#F7F6F2] transition-colors flex items-center justify-between cursor-pointer group"
                            >
                              <span>{sub.label}</span>
                              <span className="text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Primary Action Button (Admissions CTA) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('admissions', 'enquiry-form')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#D01C24] text-white hover:bg-[#A8141B] transition-all shadow-md font-bold text-xs uppercase tracking-wider border border-[#D4AF37]/40 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAC775]" />
              <span>Admissions 2026–27</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('admissions')}
              className="px-3 py-1.5 text-xs font-bold rounded bg-[#D01C24] text-white uppercase shadow-sm"
            >
              Admissions
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-50">
          <div className="p-4 space-y-2">
            {/* Quick Action Strip in Mobile Menu */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <a
                href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#F7F6F2] text-xs font-semibold text-[#0B1930]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Call Campus</span>
              </a>
              <button
                onClick={() => handleNavClick('online-payment')}
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#0B1930] text-xs font-semibold text-[#E8D6AD]"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Fee Payment</span>
              </button>
            </div>

            {/* Navigation Accordion List */}
            {navItems.map((item) => {
              const hasDropdown = !!item.children;
              const isExpanded = activeDropdown === item.label;

              return (
                <div key={item.label} className="border-b border-slate-100 last:border-b-0 pb-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick(item.route)}
                      className="text-left py-2.5 text-sm font-bold text-[#0B1930] hover:text-[#C6A15B]"
                    >
                      {item.label}
                    </button>
                    {hasDropdown && (
                      <button
                        onClick={() => setActiveDropdown(isExpanded ? null : item.label)}
                        className="p-2 text-slate-500 hover:text-slate-900"
                        aria-label={`Toggle ${item.label} sub-links`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#C6A15B]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isExpanded && (
                    <div className="pl-3 pb-2 space-y-1.5 border-l-2 border-[#C6A15B]/40 ml-1">
                      {item.children?.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(item.route, sub.sectionId)}
                          className="w-full text-left py-1.5 text-xs font-medium text-slate-600 hover:text-[#0B1930] block"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Footer Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => handleNavClick('mandatory-public-disclosure')}
                className="w-full text-left text-xs font-medium text-slate-500 hover:text-[#0B1930] flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>CBSE Mandatory Public Disclosure</span>
              </button>
              <div className="text-[11px] text-slate-400 pt-2">
                PS Bonangi, Parwada Mandal, Visakhapatnam – 531021
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
