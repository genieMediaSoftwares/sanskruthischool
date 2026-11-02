import React, { useState } from 'react';
import { PageRoute, GalleryItem } from '../types';
import { 
  SCHOOL_INFO, QUICK_STATS, ACADEMIC_PROGRAMMES, 
  SPORTS_ACTIVITIES, RESIDENTIAL_CAMPUS_DETAILS, 
  ACHIEVEMENTS_DATA, NEWS_AND_CIRCULARS, GALLERY_ITEMS, 
  SPECIALIZED_LABS 
} from '../data/schoolData';
import { CampusImage } from '../components/common/CampusImage';
import { LightboxModal } from '../components/common/LightboxModal';
import { AdmissionForm } from '../components/forms/AdmissionForm';
import { 
  ArrowRight, ShieldCheck, Award, BookOpen, Compass, 
  Users, Check, Trophy, Calendar, Sparkles, MapPin, 
  Phone, ArrowUpRight, GraduationCap, ChevronRight, Eye
} from 'lucide-react';

import { HeroBackground } from '../components/home/HeroBackground';

interface HomePageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'sports' | 'academics' | 'campus'>('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  }).slice(0, 8);

  return (
    <div className="space-y-0 text-[#202B38]">
      {/* =========================================================================
          SECTION 3: HERO EXPERIENCE
          Cinematic full-bleed background, authoritative, welcoming
         ========================================================================= */}
      <section className="relative min-h-[640px] lg:min-h-[760px] bg-[#071E10] text-white flex flex-col justify-center overflow-hidden border-b-4 border-[#D4AF37]">
        {/* Full-Bleed Panoramic Architectural Campus Background */}
        <HeroBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-20 w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F3E2B8] tracking-wider uppercase bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full shadow-lg">
                <ShieldCheck className="w-4 h-4 text-[#EAC775]" />
                <span>CBSE Affiliated No. 130302/2013 · Visakhapatnam</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] text-balance drop-shadow-xl">
                Where Young Minds Discover Their <span className="text-[#EAC775] drop-shadow-lg">Extraordinary Potential.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-100 max-w-2xl leading-relaxed drop-shadow font-normal">
                An inspiring environment where academic discipline, Indian cultural values, and holistic development come together to prepare students for a changing world. A scenic 10-acre residential and day boarding sanctuary at Bonangi, Visakhapatnam.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('admissions', 'enquiry-form')}
                  className="px-6 py-3.5 rounded-lg bg-[#D01C24] text-white hover:bg-[#B3151D] font-bold text-xs uppercase tracking-wider transition-all shadow-2xl flex items-center gap-2 border border-[#EAC775]/50 cursor-pointer hover:shadow-red-900/50"
                >
                  <Sparkles className="w-4 h-4 text-[#EAC775]" />
                  <span>Admissions 2026–27 Open</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 rounded-lg bg-black/40 backdrop-blur-md text-white hover:bg-black/60 font-bold text-xs uppercase tracking-wider transition-all border border-white/40 flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Explore Our School</span>
                </button>
              </div>

              {/* Highlights Micro-list */}
              <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white">
                <span className="flex items-center gap-1.5 font-semibold drop-shadow">
                  <Check className="w-4 h-4 text-[#EAC775]" /> Horse Riding & Archery Academies
                </span>
                <span className="flex items-center gap-1.5 font-semibold drop-shadow">
                  <Check className="w-4 h-4 text-[#EAC775]" /> IIT-JEE & NEET Foundation
                </span>
                <span className="flex items-center gap-1.5 font-semibold drop-shadow">
                  <Check className="w-4 h-4 text-[#EAC775]" /> 100% CBSE Board Pass Record
                </span>
              </div>
            </div>

            {/* Right Visual Column: Featured Campus View Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-2.5 bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl">
                <CampusImage
                  type="campus"
                  alt="Sanskruthi Global School 10-Acre Campus View"
                  aspectRatio="4:3"
                  className="w-full h-full shadow-lg rounded-xl overflow-hidden"
                />

                {/* Floating Stat Overlay */}
                <div className="absolute -bottom-4 -left-4 bg-white text-[#0B2514] p-4 rounded-xl shadow-2xl border border-slate-200 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#114B25] text-[#D4AF37] flex items-center justify-center font-bold font-heading text-lg shadow-sm">
                    10
                  </div>
                  <div>
                    <div className="text-xs font-bold font-heading text-[#0B2514]">Acres Campus</div>
                    <div className="text-[11px] text-slate-500">Bonangi, Visakhapatnam</div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-[#D01C24] text-white border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-md hidden sm:block">
                  CBSE Affiliation: 130302
                </div>
              </div>
            </div>
          </div>

          {/* Quick Campus Spotlight Cards Strip (Below Split) */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('campus')}
              className="p-3.5 sm:p-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-left transition-all cursor-pointer group shadow-lg"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#EAC775] mb-0.5">Campus Life</div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EAC775] flex items-center justify-between">
                <span>10-Acre Setting</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#EAC775] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">Tranquil hills & clean air</p>
            </button>

            <button
              onClick={() => onNavigate('sports-and-activities', 'horse-riding')}
              className="p-3.5 sm:p-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-left transition-all cursor-pointer group shadow-lg"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#EAC775] mb-0.5">Equestrian</div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EAC775] flex items-center justify-between">
                <span>Horse Riding Academy</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#EAC775] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">Dedicated sand manege</p>
            </button>

            <button
              onClick={() => onNavigate('sports-and-activities', 'swimming')}
              className="p-3.5 sm:p-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-left transition-all cursor-pointer group shadow-lg"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#EAC775] mb-0.5">Aquatics</div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EAC775] flex items-center justify-between">
                <span>Semi-Olympic Pool</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#EAC775] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">6 lanes & certified coaches</p>
            </button>

            <button
              onClick={() => onNavigate('academics', 'digital-classrooms')}
              className="p-3.5 sm:p-4 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-left transition-all cursor-pointer group shadow-lg"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#EAC775] mb-0.5">Innovation</div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EAC775] flex items-center justify-between">
                <span>THINKEDGE STEM Lab</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#EAC775] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">Robotics & micro-controllers</p>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS STRIP
         ========================================================================= */}
      <section className="bg-white border-b border-slate-200/90 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {QUICK_STATS.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-2 first:pt-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#142B49] mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WELCOME TO SANSKRUTHI
          Philosophy, Annapurna Educational Society heritage, "Education for Life"
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Block */}
            <div className="lg:col-span-5 space-y-4">
              <CampusImage
                type="hostel"
                alt="Residential Campus Life at Sanskruthi Global School"
                aspectRatio="4:3"
              />
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <blockquote className="font-editorial italic text-sm md:text-base text-slate-700 leading-relaxed">
                  "Education is not merely the imparting of knowledge; it is the ignition of character, intellectual courage, and enduring human values."
                </blockquote>
                <div className="mt-3 text-xs font-bold text-[#0B1930] flex items-center justify-between border-t border-slate-100 pt-2">
                  <span>Annapurna Educational Society</span>
                  <span className="text-[#C6A15B] font-mono">Heritage Since 1984</span>
                </div>
              </div>
            </div>

            {/* Content Narrative Block */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Welcome to Sanskruthi Global School
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
                "Education for Life."
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded under the aegis of <strong className="text-slate-900">Annapurna Educational Society</strong>—with institutional educational roots tracing back to 1984—Sanskruthi Global School was established at Bonangi, Visakhapatnam to redefine schooling in coastal Andhra Pradesh.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating on a peaceful 10-acre campus surrounded by lush hills, our school seamlessly blends the prestigious Central Board of Secondary Education (CBSE) curriculum with world-class co-curricular training, dedicated sports academies like Horse Riding and Archery, and state-of-the-art STEM innovation laboratories.
              </p>

              {/* 3 Core Institutional Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1930] text-[#C6A15B] flex items-center justify-center mb-2">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-heading text-[#0B1930]">Academic Rigour</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    CBSE excellence with integrated IIT-JEE and NEET foundation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1930] text-[#C6A15B] flex items-center justify-center mb-2">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-heading text-[#0B1930]">Elite Sports</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Horse riding, archery, 10m shooting range, and swimming pool.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#0B1930] text-[#C6A15B] flex items-center justify-center mb-2">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-heading text-[#0B1930]">Character & Culture</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    NCC wings, organic farming, musical performers & Indian ethos.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#142B49] hover:text-[#C6A15B] transition-colors cursor-pointer group"
                >
                  <span>Read our full institutional history and messages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ACADEMIC EXCELLENCE
          "Learning Beyond the Classroom"
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Curriculum & Streams
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
                Learning Beyond the Classroom
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              From joyful sensory exploration in kindergarten to rigorous senior secondary science streams with national competitive exam mentorship.
            </p>
          </div>

          {/* Academic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_PROGRAMMES.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="rounded-2xl p-6 bg-[#F7F6F2] border border-slate-200 hover:border-[#C6A15B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#244D78] mb-2">
                    <span>{prog.grades}</span>
                    <span className="text-slate-500 font-normal">Age: {prog.ageGroup}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B1930] mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {prog.summary}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/80 pt-3">
                    {prog.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#C6A15B] font-bold">·</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('academics')}
                    className="text-xs font-bold text-[#142B49] hover:text-[#C6A15B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Senior Secondary MPC & BiPC Special Feature */}
          <div className="rounded-2xl bg-[#0B1930] text-white p-6 md:p-8 border border-[#C6A15B]/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E8D6AD] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#C6A15B]" />
                  <span>Senior Secondary (Classes XI & XII)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  MPC & BiPC Streams Integrated with IIT-JEE & NEET Coaching
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Comprehensive dual-preparation combining high CBSE board percentiles with intensive competitive test-series, doubt clinics, and experienced faculty who have mentored All-India Rankers.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-[#E8D6AD] pt-1">
                  <span>✓ Mathematics, Physics, Chemistry</span>
                  <span>·</span>
                  <span>✓ Biology, Physics, Chemistry</span>
                  <span>·</span>
                  <span>✓ Regular All-India Mock Rankings</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  onClick={() => onNavigate('academics', 'senior-secondary')}
                  className="px-5 py-3 rounded-lg bg-[#C6A15B] text-[#0B1930] hover:bg-[#E8D6AD] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
                >
                  Explore Science Streams
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INFRASTRUCTURE & SPECIALIZED LABS
          "A Campus Designed for Discovery"
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              World-Class Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              A Campus Designed for Discovery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Purpose-built facilities engineered to inspire curiosity, physical vigor, and collaborative scientific experimentation.
            </p>
          </div>

          {/* 4 Specialized Labs & Facilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZED_LABS.map((lab, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0B1930] mb-2">
                    {lab.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-[#142B49]">
                  CBSE Verified Standards
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Visual Showcase Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CampusImage
              type="stem"
              alt="THINKEDGE Robotics and STEM Innovation Lab"
              aspectRatio="4:3"
            />
            <CampusImage
              type="swimming"
              alt="Semi-Olympic Swimming Pool Facility"
              aspectRatio="4:3"
            />
            <CampusImage
              type="equestrian"
              alt="School Equestrian Horse Riding Academy"
              aspectRatio="4:3"
            />
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('campus')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1930] text-white hover:bg-[#142B49] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Explore Complete 10-Acre Campus Infrastructure</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: SPORTS AND SCHOOL CLUBS
          "Building Confidence Beyond Academics"
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Sports & Extracurricular Excellence
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
                Building Confidence Beyond Academics
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Sanskruthi Global School hosts rare and distinguished sports academies including equestrian riding, archery, 10m rifle shooting, and competitive swimming.
            </p>
          </div>

          {/* Sports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPORTS_ACTIVITIES.slice(0, 4).map((sport) => (
              <div
                key={sport.id}
                className="rounded-2xl p-5 bg-[#F7F6F2] border border-slate-200 hover:border-[#C6A15B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B] mb-1">
                    {sport.category}
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#0B1930] mb-2">
                    {sport.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {sport.summary}
                  </p>
                  <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-lg border border-slate-200/80 mb-3">
                    <strong className="text-slate-700 block">Coach & Mentor:</strong>
                    {sport.coach}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('sports-and-activities', sport.id)}
                  className="pt-2 text-xs font-bold text-[#142B49] hover:text-[#C6A15B] flex items-center justify-between border-t border-slate-200 cursor-pointer"
                >
                  <span>Academy Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Second Row Sports Quick View */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {SPORTS_ACTIVITIES.slice(4).map((sport) => (
              <div
                key={sport.id}
                onClick={() => onNavigate('sports-and-activities', sport.id)}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#0B1930] transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold font-heading text-[#0B1930] group-hover:text-[#C6A15B]">
                    {sport.name}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B1930]" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{sport.summary}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('sports-and-activities')}
              className="px-6 py-3 rounded-lg bg-[#0B1930] text-[#E8D6AD] hover:bg-[#142B49] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              View All Sports & Cadet Clubs
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: RESIDENTIAL CAMPUS
          Immersive boarding introduction
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1930] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Residential Campus Life
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                {RESIDENTIAL_CAMPUS_DETAILS.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {RESIDENTIAL_CAMPUS_DETAILS.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {RESIDENTIAL_CAMPUS_DETAILS.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <h4 className="text-xs font-bold text-[#E8D6AD]">{feat.title}</h4>
                    <p className="text-[11px] text-slate-300/80 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('campus', 'residential-campus')}
                  className="px-6 py-3 rounded-lg bg-[#C6A15B] text-[#0B1930] hover:bg-[#E8D6AD] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow"
                >
                  Explore Residential Campus
                </button>
                <button
                  onClick={() => onNavigate('admissions', 'enquiry-form')}
                  className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 font-semibold text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer"
                >
                  Request Hostel Prospectus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl p-2 bg-gradient-to-br from-[#C6A15B]/30 to-white/5 border border-white/10">
                <CampusImage
                  type="hostel"
                  alt="Sanskruthi Global School Student Residencies"
                  aspectRatio="4:3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 & 11: ACHIEVEMENTS & ANNOUNCEMENTS
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Achievements */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                  Official Track Record
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
                  School Achievements
                </h2>
              </div>

              <div className="space-y-4">
                {ACHIEVEMENTS_DATA.slice(0, 3).map((ach) => (
                  <div
                    key={ach.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-[#C6A15B] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-bold text-[#142B49]">{ach.category}</span>
                        <span>·</span>
                        <span>Year {ach.year}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {ach.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#0B1930]">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('media', 'achievements')}
                className="text-xs font-bold text-[#142B49] hover:text-[#C6A15B] flex items-center gap-1 cursor-pointer"
              >
                <span>View all verified board and sports accolades</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Circulars & Notices */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                  Notice Board
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
                  News & Circulars
                </h2>
              </div>

              <div className="space-y-3">
                {NEWS_AND_CIRCULARS.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#142B49] transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span className="font-semibold text-[#C6A15B]">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-[#0B1930] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onNavigate('media', 'circulars')}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-xs font-bold text-slate-800 text-center transition-colors cursor-pointer"
                >
                  View All Official Circulars & Notices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: GALLERY
          Asymmetric photography grid with category filtering & Lightbox
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Campus & Activities Photography
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight mt-1">
                Glimpses of Life at Sanskruthi
              </h2>
            </div>

            {/* Interactive Filter Tabs (Buttons allowed for filters per constitution) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full">
              {(['all', 'sports', 'academics', 'campus'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap capitalize ${
                    activeTab === tab
                      ? 'bg-white text-[#0B1930] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === 'all' ? 'All Glimpses' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid with rich scenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredGallery.map((item) => {
              const visualTypeMap: Record<string, any> = {
                'g-1': 'campus',
                'g-2': 'equestrian',
                'g-3': 'swimming',
                'g-4': 'stem',
                'g-5': 'archery',
                'g-6': 'shooting',
                'g-7': 'classroom',
                'g-8': 'organic-farm',
                'g-9': 'kindergarten',
                'g-10': 'hostel',
                'g-11': 'sports',
                'g-12': 'cultural'
              };
              const vType = visualTypeMap[item.id] || item.category || 'campus';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CampusImage
                    type={vType}
                    alt={item.title}
                    aspectRatio="4:3"
                    showBadge={false}
                    customSrc={item.imageUrl}
                    className="w-full h-full"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#0B2514]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-[#0B2514] font-bold text-xs shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#D01C24]" />
                      <span>View Photo</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('media')}
              className="text-xs font-bold text-[#142B49] hover:text-[#C6A15B] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore complete media centre with video gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: ADMISSIONS CALL TO ACTION & EMBEDDED FORM
          "Every Great Journey Begins With a First Step."
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1930] text-white border-t-4 border-[#C6A15B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy block */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Begin Your Journey
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                "Every Great Journey Begins With a First Step."
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Discover the Sanskruthi Global School learning environment and connect with our admissions counsellors. Admissions are actively open for Day Scholars and Residential scholars across Nursery to Class XI for the 2026–27 session.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] font-bold">1</div>
                  <span>Submit the quick enquiry form with student details</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] font-bold">2</div>
                  <span>Receive official prospectus & personalized counselling call</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] font-bold">3</div>
                  <span>Schedule guided campus tour at Bonangi, Visakhapatnam</span>
                </div>
              </div>

              {/* Direct Phone / WhatsApp Quick Connect */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Need Immediate Assistance?</div>
                  <div className="text-sm font-bold text-[#E8D6AD]">{SCHOOL_INFO.phones[0]}</div>
                </div>
                <a
                  href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="px-4 py-2 rounded-lg bg-[#C6A15B] text-[#0B1930] font-bold text-xs uppercase tracking-wider hover:bg-[#E8D6AD] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Embedded Live Admission Form */}
            <div className="lg:col-span-6">
              <AdmissionForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
};
