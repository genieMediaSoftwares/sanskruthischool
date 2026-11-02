import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ACADEMIC_PROGRAMMES, SPECIALIZED_LABS } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { CampusImage } from '../components/common/CampusImage';
import { 
  BookOpen, GraduationCap, Cpu, CheckCircle2, ArrowRight, 
  Sparkles, Award, Compass, MessageSquare, FileCheck
} from 'lucide-react';

interface AcademicsPageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onNavigate }) => {
  const [selectedProgramme, setSelectedProgramme] = useState(ACADEMIC_PROGRAMMES[0].id);

  const activeProg = ACADEMIC_PROGRAMMES.find(p => p.id === selectedProgramme) || ACADEMIC_PROGRAMMES[0];

  return (
    <div className="space-y-0">
      <PageHero
        title="Academic Excellence & Integrated Learning"
        subtitle="CBSE curriculum aligned with NEP benchmarks, enhanced by digital interactive classrooms, THINKEDGE innovation labs, and senior secondary IIT-JEE / NEET foundation coaching."
        category="Academics at Sanskruthi"
        breadcrumbs={[{ label: 'Academics' }]}
        onNavigate={onNavigate}
        ctaText="Admissions 2026–27 Open"
        onCtaClick={() => onNavigate('admissions', 'enquiry-form')}
      />

      {/* Interactive Academic Streams Explorer */}
      <section id="cbse-curriculum" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Progression Framework
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              Academic Programmes from Nursery to Class XII
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select a stage below to view curriculum philosophy, subject combinations, and distinctive highlights.
            </p>
          </div>

          {/* Stream Selector Buttons (Interactive filter/tab controls per constitution) */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
            {ACADEMIC_PROGRAMMES.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedProgramme(prog.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedProgramme === prog.id
                    ? 'bg-[#0B1930] text-[#E8D6AD] shadow'
                    : 'bg-[#F7F6F2] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {prog.title}
              </button>
            ))}
          </div>

          {/* Active Programme Detail Card */}
          <div className="bg-[#F7F6F2] rounded-2xl p-6 md:p-10 border border-slate-200 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div>
                <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider block mb-1">
                  {activeProg.grades} · Age Group: {activeProg.ageGroup}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
                  {activeProg.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('admissions', 'enquiry-form')}
                  className="px-5 py-2.5 bg-[#0B1930] text-[#E8D6AD] text-xs font-bold rounded-lg hover:bg-[#142B49] transition-colors cursor-pointer"
                >
                  Enquire for {activeProg.grades}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {activeProg.summary}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1930] mb-3">
                    Curriculum Pillars & Pedagogy:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeProg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1930]">
                    Distinctive Advantages
                  </h4>
                  <div className="space-y-2">
                    {activeProg.highlights.map((high, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-[#F7F6F2] p-2.5 rounded-lg">
                        <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0B1930] text-white space-y-2 text-xs">
                  <div className="font-bold text-[#E8D6AD]">CBSE Board Standards</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Continuous comprehensive evaluation, child-friendly learning materials, and practical laboratory verification at every grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Secondary MPC & BiPC Deep Dive */}
      <section id="senior-secondary" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1930] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Senior Secondary Focus (Classes XI & XII)
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                Specialized Science Streams: MPC & BiPC
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Sanskruthi Global School offers rigorous Senior Secondary education designed specifically for students aspiring for premier engineering, medical, scientific, and technological universities in India and abroad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-sm font-bold text-[#E8D6AD]">MPC Stream</div>
                  <p className="text-xs text-slate-300">
                    Mathematics, Physics, Chemistry, English Core, and optional Computer Science or Physical Education.
                  </p>
                  <div className="text-[11px] text-[#C6A15B] font-semibold">
                    Integrated JEE Mains & Advanced Coaching
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-sm font-bold text-[#E8D6AD]">BiPC Stream</div>
                  <p className="text-xs text-slate-300">
                    Biology, Physics, Chemistry, English Core, and optional Informatics Practices or Physical Education.
                  </p>
                  <div className="text-[11px] text-[#C6A15B] font-semibold">
                    Integrated NEET & AIIMS Medical Coaching
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-[#0B1930] p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">
                Why Parents Choose SGS for Class XI & XII
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span><strong>Zero Commute Stress:</strong> Residential scholars have on-campus coaching, labs, and study prep.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span><strong>Distinguished Entrance Pedigree:</strong> Faculty with proven track records in IIT-JEE and NEET national percentiles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span><strong>Supervised Evening Prep:</strong> Mandatory 2-hour quiet study time supervised by subject teachers.</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('admissions', 'enquiry-form')}
                  className="w-full py-2.5 rounded-lg bg-[#0B1930] text-[#E8D6AD] font-bold text-xs uppercase tracking-wider hover:bg-[#142B49] transition-colors cursor-pointer text-center"
                >
                  Enquire for Class XI (2026–27)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Classrooms & Labs */}
      <section id="digital-classrooms" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Technological Pedagogy
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              THINKEDGE Lab & Digital Classrooms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Empowering students to transition from passive consumers of knowledge to active builders, coders, and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">THINKEDGE Innovation & STEM Lab</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The proprietary THINKEDGE Lab at SGS introduces young learners to computational thinking, sensor mechanics, micro-controller programming (Arduino/Raspberry Pi), mechanical assembly, and basic robotics. Students build working models solving real-world challenges such as agricultural moisture detectors and automated water conservation valves.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-[#142B49]">
                <span className="bg-slate-100 px-2.5 py-1 rounded">Robotics & Mechanics</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Micro-controllers</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Design Thinking</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">Educomp SmartClass & Audio-Visual Pedagogy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All 38 classrooms at Sanskruthi Global School are equipped with high-resolution digital interactive whiteboards and licensed Educomp SmartClass repository content. Abstract concepts in molecular physics, plant biology, human anatomy, and 3D spatial geometry come alive through animated simulations.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-[#142B49]">
                <span className="bg-slate-100 px-2.5 py-1 rounded">3D Concept Visualizers</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Interactive Whiteboards</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Digital Assessment Quizzes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Lab & Public Speaking */}
      <section id="skills-lab" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Holistic Competencies
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
                Skills Lab, Public Speaking & Career Guidance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Academic success must be paired with expressive confidence. At Sanskruthi, we conduct structured speech laboratories, Model United Nations simulations, inter-school debates, and personality grooming modules to empower every student to articulate ideas with clarity and grace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Elocution & Model United Nations (MUN)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Career Mapping & Aptitude Profiling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Stress Management & Emotional Wellness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Creative Writing & Book Reviews</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold font-heading text-[#0B1930]">
                Academic Schedule & Evaluation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The academic year runs from June to April, divided into two balanced terms with continuous formative assessments (FA) and summative examinations (SA) in strict compliance with CBSE circulars.
              </p>
              <div className="text-xs space-y-2 border-t border-slate-200 pt-3 text-slate-700">
                <div className="flex justify-between">
                  <span>Term 1 Assessments:</span>
                  <strong className="text-[#0B1930]">September – October</strong>
                </div>
                <div className="flex justify-between">
                  <span>Term 2 / Annual Finals:</span>
                  <strong className="text-[#0B1930]">February – March</strong>
                </div>
                <div className="flex justify-between">
                  <span>Parent-Teacher Meetings:</span>
                  <strong className="text-[#0B1930]">Monthly Scheduled Reviews</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
