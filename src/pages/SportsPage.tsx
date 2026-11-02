import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SPORTS_ACTIVITIES } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { CampusImage } from '../components/common/CampusImage';
import { 
  Trophy, Award, Shield, Users, ArrowRight, CheckCircle2, 
  Sparkles, Clock, Compass 
} from 'lucide-react';

interface SportsPageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const SportsPage: React.FC<SportsPageProps> = ({ onNavigate, subSection }) => {
  const [selectedSportId, setSelectedSportId] = useState(subSection || SPORTS_ACTIVITIES[0].id);

  const activeSport = SPORTS_ACTIVITIES.find(s => s.id === selectedSportId) || SPORTS_ACTIVITIES[0];

  return (
    <div className="space-y-0">
      <PageHero
        title="Sports Academies & Co-Curricular Clubs"
        subtitle="Uncommon sporting opportunities including professional equestrian training, Olympic-style archery, 10m precision rifle shooting, semi-Olympic swimming, and NCC wings."
        category="Athletic & Character Excellence"
        breadcrumbs={[{ label: 'Sports & Activities' }]}
        onNavigate={onNavigate}
        ctaText="Join an Academy"
        onCtaClick={() => onNavigate('admissions', 'enquiry-form')}
      />

      {/* Main Interactive Sports Explorer */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Elite Athletic Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              Specialized Sporting Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select an activity below to explore coaching details, training timetables, facilities, and competition achievements.
            </p>
          </div>

          {/* Sports Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
            {SPORTS_ACTIVITIES.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSportId(sport.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedSportId === sport.id
                    ? 'bg-[#0B1930] text-[#E8D6AD] shadow'
                    : 'bg-[#F7F6F2] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sport.name}
              </button>
            ))}
          </div>

          {/* Active Sport Spotlight Card */}
          <div className="bg-[#F7F6F2] rounded-2xl p-6 md:p-10 border border-slate-200 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B] block mb-1">
                  {activeSport.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
                  {activeSport.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('admissions', 'enquiry-form')}
                  className="px-5 py-2.5 bg-[#0B1930] text-[#E8D6AD] text-xs font-bold rounded-lg hover:bg-[#142B49] transition-colors cursor-pointer"
                >
                  Register for {activeSport.name}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {activeSport.summary}
                </p>

                {/* Facilities List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1930] mb-3">
                    Academy Facilities & Infrastructure:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSport.facilities.map((fac, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements block */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                  <div className="text-xs font-bold text-[#0B1930] flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#C6A15B]" />
                    <span>Recent Highlights & Honors</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeSport.achievementsSummary}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {/* Visual Representation */}
                {activeSport.id === 'horse-riding' && (
                  <CampusImage type="equestrian" alt="Horse Riding Academy at SGS" aspectRatio="4:3" />
                )}
                {activeSport.id === 'archery' && (
                  <CampusImage type="archery" alt="Archery Academy at SGS" aspectRatio="4:3" />
                )}
                {activeSport.id === 'rifle-shooting' && (
                  <CampusImage type="shooting" alt="10m Rifle Shooting Range at SGS" aspectRatio="4:3" />
                )}
                {activeSport.id === 'swimming' && (
                  <CampusImage type="swimming" alt="Semi-Olympic Swimming Pool at SGS" aspectRatio="4:3" />
                )}
                {!['horse-riding', 'archery', 'rifle-shooting', 'swimming'].includes(activeSport.id) && (
                  <CampusImage type="cultural" alt={activeSport.name} aspectRatio="4:3" />
                )}

                <div className="p-4 rounded-xl bg-[#0B1930] text-white space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider block">Coaching Staff</span>
                    <span className="font-semibold text-slate-200">{activeSport.coach}</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 flex items-center gap-2 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="text-[11px]">{activeSport.schedule}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NCC Wings Spotlight */}
      <section id="ncc" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Patriotism & Leadership
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
                National Cadet Corps (NCC) – Naval, Army & Air Force
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sanskruthi Global School holds the distinction of offering NCC training across three divisions: Naval Wing, Army Wing, and Air Force Wing. Cadets undergo rigorous drill parades, weapon handling theory, map reading, disaster management drills, and outdoor survival camps.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                  <div className="font-bold text-[#0B1930]">Naval Wing</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Seamanship & coastal leadership</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                  <div className="font-bold text-[#0B1930]">Army Wing</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Drill, obstacle courses & firing</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-center">
                  <div className="font-bold text-[#0B1930]">Air Force Wing</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Aviation basics & aero-modelling</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B1930] text-white space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Cadet Honors
              </div>
              <h4 className="text-lg font-bold font-heading text-white">
                Republic Day Camp (RDC) Representation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                SGS cadets consistently secure nominations for the prestigious Republic Day Camp (RDC) at New Delhi and Thal Sainik camps, representing Andhra Pradesh and Telangana Directorate with pride.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
