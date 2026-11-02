import React from 'react';
import { PageRoute } from '../types';
import { PageHero } from '../components/common/PageHero';
import { CampusImage } from '../components/common/CampusImage';
import { 
  Users, Leaf, Trophy, MapPin, Sparkles, Heart, 
  Flame, Wind, Droplets, Mountain 
} from 'lucide-react';

interface StudentLifePageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const StudentLifePage: React.FC<StudentLifePageProps> = ({ onNavigate }) => {
  const houses = [
    {
      name: "Agni House",
      color: "from-amber-600 to-red-600",
      textColor: "text-red-700",
      bgLight: "bg-red-50",
      borderColor: "border-red-200",
      motto: "Courage & Radiance",
      symbol: "Fire",
      icon: Flame,
      desc: "Instilling fierce determination, energetic passion, and fearless leadership in every academic and athletic challenge."
    },
    {
      name: "Prithvi House",
      color: "from-emerald-700 to-green-800",
      textColor: "text-emerald-800",
      bgLight: "bg-emerald-50",
      borderColor: "border-emerald-200",
      motto: "Stability & Integrity",
      symbol: "Earth",
      icon: Mountain,
      desc: "Emphasizing grounded humility, patient perseverance, ecological responsibility, and steadfast resilience."
    },
    {
      name: "Vayu House",
      color: "from-sky-600 to-blue-700",
      textColor: "text-sky-800",
      bgLight: "bg-sky-50",
      borderColor: "border-sky-200",
      motto: "Agility & Vision",
      symbol: "Air",
      icon: Wind,
      desc: "Inspiring swift intellectual agility, unrestricted imagination, free inquiry, and open-minded cooperation."
    },
    {
      name: "Jal House",
      color: "from-blue-700 to-indigo-900",
      textColor: "text-indigo-900",
      bgLight: "bg-indigo-50",
      borderColor: "border-indigo-200",
      motto: "Purity & Adaptation",
      symbol: "Water",
      icon: Droplets,
      desc: "Reflecting harmonious adaptability, ethical clarity, continuous flow of knowledge, and deep empathy."
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="@ Sanskruthi – Student Life & Culture"
        subtitle="Where character is forged through the school house system, hands-on organic farming, cultural celebrations, and enriching educational field immersions."
        category="Life at Sanskruthi"
        breadcrumbs={[{ label: '@ Sanskruthi' }]}
        onNavigate={onNavigate}
        ctaText="Explore Admissions"
        onCtaClick={() => onNavigate('admissions', 'enquiry-form')}
      />

      {/* House System */}
      <section id="house-system" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Brotherhood & Healthy Competition
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              The Four School Houses
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Named after the primordial elements (Pancha Bhoota), our houses cultivate esprit de corps, inter-grade camaraderie, and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house) => {
              const IconComp = house.icon;
              return (
                <div
                  key={house.name}
                  className={`rounded-2xl p-6 border ${house.borderColor} ${house.bgLight} flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center ${house.textColor}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {house.symbol}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold font-heading ${house.textColor}`}>
                      {house.name}
                    </h3>
                    <div className="text-xs font-semibold text-slate-700 italic">
                      "{house.motto}"
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {house.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                    Captains & Vice-Captains elected annually
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organic Farming & Nature Study */}
      <section id="organic-farm" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Environmental Stewardship
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
                Organic Farms & Campus Ecology
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Sanskruthi Global School, environmental consciousness is not confined to textbooks. Within our 10-acre campus, students maintain organic farming plots where they cultivate indigenous vegetables, medicinal herbs, and seasonal fruits using natural vermicompost.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under the guidance of agricultural mentors, students learn soil conservation, drip irrigation, seed germination cycles, and the importance of chemical-free agriculture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-[#0B1930] flex items-center gap-1.5">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span>Zero-Chemical Produce</span>
                  </div>
                  <p className="text-slate-500">Organic yield integrated into campus hostel dining.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-[#0B1930] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                    <span>Vermicompost Station</span>
                  </div>
                  <p className="text-slate-500">Organic waste from campus recycled into natural fertilizer.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <CampusImage
                type="cultural"
                alt="Students in Organic Farm at Sanskruthi Global School"
                aspectRatio="4:3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Field Trips & Educational Excursions */}
      <section id="field-trips" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Experiential Journeys
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              Educational Field Trips & Immersions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Broadening perspectives through annual expeditions to regional scientific, ecological, and industrial landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold font-heading text-[#0B1930]">Visakhapatnam Port & Navy Docks</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Naval NCC cadets and secondary students study maritime engineering, commercial harbor logistics, and submarine museum exhibits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold font-heading text-[#0B1930]">Araku Valley Biodiversity Study</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Annual botanical excursions exploring Eastern Ghats flora, coffee plantation ecology, and tribal heritage museums.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold font-heading text-[#0B1930]">Regional Science Centre & Planetarium</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interactive astrophysics and planetary mechanics demonstrations reinforcing classroom concepts with cosmic wonder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
