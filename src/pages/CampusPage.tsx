import React from 'react';
import { PageRoute } from '../types';
import { INFRASTRUCTURE_SPECS, RESIDENTIAL_CAMPUS_DETAILS } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { CampusImage } from '../components/common/CampusImage';
import { 
  Building2, BookOpen, Bus, ShieldCheck, HeartPulse, 
  UtensilsCrossed, Trees, CheckCircle2, Award, Wifi 
} from 'lucide-react';

interface CampusPageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const CampusPage: React.FC<CampusPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      <PageHero
        title="10-Acre Scenic Campus & Star Infrastructure"
        subtitle="A tranquil haven at Bonangi, Parwada Mandal, Visakhapatnam, purpose-built with modern digital classrooms, science laboratories, equestrian manege, and residential hostels."
        category="Campus & Facilities"
        breadcrumbs={[{ label: 'Campus' }]}
        onNavigate={onNavigate}
        ctaText="Plan a Campus Visit"
        onCtaClick={() => onNavigate('contact')}
      />

      {/* 10-Acre Overview & Star Standard */}
      <section id="campus-overview" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Bonangi, Visakhapatnam
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
                A 10-Acre Sanctuary for Mind & Body
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Sanskruthi Global School is situated on an expansive 10-acre campus embraced by scenic green hillocks in Bonangi, Parwada Mandal. Free from city noise, traffic hazards, and urban air pollution, our students experience learning in an inspiring natural microclimate.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our infrastructure adheres strictly to CBSE Star Standards—featuring broad corridors, well-ventilated natural-light classrooms, fire safety certifications, round-the-clock CCTV surveillance, and dedicated athletic fields.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F7F6F2] border border-slate-200 text-center">
                  <div className="text-xl font-bold font-heading text-[#0B1930]">10.0</div>
                  <div className="text-[11px] text-slate-600 font-semibold">Total Acres</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F6F2] border border-slate-200 text-center">
                  <div className="text-xl font-bold font-heading text-[#0B1930]">38</div>
                  <div className="text-[11px] text-slate-600 font-semibold">Smart Classrooms</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F6F2] border border-slate-200 text-center">
                  <div className="text-xl font-bold font-heading text-[#0B1930]">18,200</div>
                  <div className="text-[11px] text-slate-600 font-semibold">Sq.m Sports Area</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <CampusImage
                type="campus"
                alt="Sanskruthi Global School 10-Acre Campus View"
                aspectRatio="4:3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid: Classrooms, Labs, Library, Transport */}
      <section id="smart-classrooms" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Key Infrastructure Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              Spaces Designed for Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Advanced Classrooms */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B1930]">Digital Smart Classrooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Spacious, ergonomic learning rooms equipped with interactive digital smartboards, audio systems, and high-efficiency ventilation.
              </p>
              <div className="text-[11px] text-[#244D78] font-semibold">
                Classroom count: 38 Rooms (Avg. 500+ sq.ft each)
              </div>
            </div>

            {/* Central Library */}
            <div id="library" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B1930]">Central Knowledge Library</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Housing over 5,500 volumes of fiction, non-fiction, encyclopaedias, reference works, 15 educational periodicals, and digital archives.
              </p>
              <div className="text-[11px] text-[#244D78] font-semibold">
                Includes peaceful quiet reading carrels
              </div>
            </div>

            {/* Safe Transport Fleet */}
            <div id="transport" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B1930]">GPS-Enabled Fleet Transport</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comfortable school buses with speed governors, CCTV cameras, female care attendants, and real-time GPS tracking for parents.
              </p>
              <div className="text-[11px] text-[#244D78] font-semibold">
                Routes: Visakhapatnam, Gajuwaka, Anakapalle & Parwada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Campus Deep Dive */}
      <section id="residential-campus" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1930] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Boarding & Student Care
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
              Residential Campus & Hostels
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              A home away from home providing physical safety, structured routine, nutritious food, and deep academic mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Separate Boy & Girl Hostels</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated residential buildings supervised by full-time resident wardens. Biometric access controls and 24/7 security perimeter guards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Hygienic Dining Hall</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nutritionally designed four-course daily meals (breakfast, lunch, evening snacks, dinner) prepared with RO purified water and fresh ingredients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">24/7 Medical Care</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                On-campus healthcare infirmary with a resident qualified nurse, daily health checks, and emergency vehicle tie-up with specialty hospitals in Vizag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official CBSE Infrastructure Dimensions Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">CBSE Standard Specs</div>
            <h3 className="text-xl font-bold font-heading text-[#0B1930]">Official Infrastructure Metrics</h3>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0B1930] text-white">
                  <th className="py-3 px-4 font-bold font-heading">Infrastructure Item</th>
                  <th className="py-3 px-4 font-bold font-heading">Specification / Dimension</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INFRASTRUCTURE_SPECS.map((spec, i) => (
                  <tr key={i} className="hover:bg-[#F7F6F2]">
                    <td className="py-2.5 px-4 font-semibold text-slate-800">{spec.item}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
