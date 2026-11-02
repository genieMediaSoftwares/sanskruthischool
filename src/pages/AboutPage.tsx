import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SCHOOL_INFO, STAFF_INFO } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { Logo } from '../components/common/Logo';
import { 
  History, Eye, Target, Award, Users, ChevronDown, 
  ShieldCheck, CheckCircle2, Sparkles, BookOpen 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, subSection }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the historical background of Sanskruthi Global School?",
      a: "Sanskruthi Global School was established under the aegis of Annapurna Educational Society, drawing inspiration and educational pedigree from institutional traditions dating back to 1984. The dedicated campus at Bonangi, Visakhapatnam was established in 2009–10 to deliver modern CBSE schooling enriched by Indian cultural values and elite sports."
    },
    {
      q: "Which educational board is the school affiliated with?",
      a: "The school is permanently affiliated with the Central Board of Secondary Education (CBSE), New Delhi, under Affiliation Number 130327 (School Code: 57077), following the National Curriculum Framework and NEP guidelines from Kindergarten through Senior Secondary (Classes XI & XII)."
    },
    {
      q: "What makes the 10-acre campus setting unique in Visakhapatnam?",
      a: "Located at PS Bonangi, Parwada Mandal, our 10-acre campus is surrounded by natural scenery and tranquil hills away from urban congestion and industrial pollution. It provides an ideal sanctuary for deep academic focus, clean outdoor sports, and residential living."
    },
    {
      q: "What is the teacher-to-student ratio at Sanskruthi?",
      a: "We maintain an optimal 1:15 teacher-to-student ratio across all classrooms to ensure personalized academic attention, emotional mentorship, and continuous tracking of every child's strengths and areas for growth."
    },
    {
      q: "Does the school provide residential facilities for outstation students?",
      a: "Yes. SGS features safe, secure, and modern residential hostels with separate wings for boys and girls, 24/7 infirmary support, nutritious balanced dining, and supervised evening faculty prep."
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="About Sanskruthi Global School"
        subtitle="Founded on timeless Indian values, driven by academic discipline, and inspired by an institutional heritage since 1984."
        category="Institutional Profile"
        breadcrumbs={[{ label: 'About Us' }]}
        onNavigate={onNavigate}
        ctaText="Schedule Campus Visit"
        onCtaClick={() => onNavigate('contact')}
      />

      {/* Institutional History Section */}
      <section id="about-school" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Heritage & Founding
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
                Rooted in Values. Designed for the Future.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The narrative of <strong>Sanskruthi Global School</strong> is interwoven with the vision of <strong>Annapurna Educational Society</strong> and the educational movement initiated in 1984 through The Chaitanya Institutions in Andhra Pradesh.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                In 2009–10, recognizing the need for a truly integrated school that marries competitive academic prowess with deep character-building, equestrian and sports training, and international pedagogical standards, the Bonangi campus was inaugurated. Over more than a decade and a half, Sanskruthi has grown into one of Visakhapatnam's premier CBSE residential and day boarding institutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                  <div className="text-xs font-bold text-[#0B1930] flex items-center gap-2 mb-1">
                    <History className="w-4 h-4 text-[#C6A15B]" />
                    <span>Established 2009–10</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Founded under Annapurna Educational Society with a sprawling 10-acre purpose-built campus.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                  <div className="text-xs font-bold text-[#0B1930] flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                    <span>CBSE Affiliation #130327</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Compliant with national educational codes, NEP benchmarks, and star infrastructure standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 md:p-8 rounded-2xl bg-[#0B2514] text-white border border-[#D4AF37]/50 shadow-xl space-y-6 text-center">
                <div className="bg-white rounded-xl p-4 shadow-inner border border-[#D4AF37]/40 flex justify-center">
                  <img
                    src="/assets/aistudio/image_a1e1217d.png"
                    alt="Sanskruthi Global School Official Logo"
                    className="h-20 sm:h-24 w-auto object-contain"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    The Symbolism of Our Crest
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    "Education for Life"
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    The official emblem of Sanskruthi Global School features a rich forest green circular medallion, a globe of universal knowledge, the white lotus of purity, and golden laurel ribbons. Underneath, the banner proclaims the lifelong institutional creed: <strong>"Education for Life"</strong>.
                  </p>
                </div>
                <div className="pt-2 text-xs font-mono text-[#D4AF37] tracking-wider uppercase border-t border-white/10 text-center">
                  CBSE Affiliation No. 130302/2013 · School Code: 57077
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Core Purpose
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930] tracking-tight">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be an internationally recognized centre of educational excellence that nurtures intellectually curious, ethically grounded, physically robust, and compassionate leaders who contribute meaningfully to the nation and the global society.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Cultivating intellectual autonomy and problem-solving courage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Preserving rich Indian cultural heritage with a progressive outlook</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide holistic CBSE education through interactive digital classrooms, specialized sports academies, state-of-the-art STEM labs, and personalized faculty mentorship within a safe, green residential environment.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Deliver rigorous foundations for IIT-JEE, NEET, and Olympiads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>Build character through horse riding, archery, NCC, and arts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages: Chairman & Principal */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Chairman's Message */}
          <div id="chairman-message" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 bg-[#0B1930] text-white p-6 rounded-2xl border border-[#C6A15B]/30 text-center space-y-3">
              <div className="w-24 h-24 rounded-full bg-[#142B49] border-2 border-[#C6A15B] mx-auto flex items-center justify-center text-[#E8D6AD] font-heading font-bold text-2xl">
                AES
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-white">Chairman’s Desk</h4>
                <div className="text-xs text-[#E8D6AD]">Annapurna Educational Society</div>
              </div>
              <p className="text-[11px] text-slate-300">
                Guiding institutional growth and educational philanthropy across Andhra Pradesh since 1984.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Leadership Vision
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B1930]">
                Chairman’s Message
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                "When we founded Sanskruthi Global School at Bonangi, our dream was straightforward yet profound: to create an institution where children don't just study for exams, but learn how to navigate life with conviction, humility, and excellence. We invested in large open acres, equestrian sports, and science labs because we believe true education demands space—physical space to breathe and explore, and mental space to question and innovate."
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                "We welcome parents to partner with us in this remarkable journey of shaping India's promising tomorrow."
              </p>
            </div>
          </div>

          {/* Principal's Message */}
          <div id="principal-message" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-slate-200">
            <div className="lg:col-span-8 space-y-4 order-2 lg:order-1">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                Academic Leadership
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0B1930]">
                Principal’s Message
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                "Every child who enters Sanskruthi Global School brings a unique spark of genius. As educators, our responsibility under the CBSE framework is not to mold all children into the same shape, but to fan that spark into a flame of curiosity, self-discipline, and accomplishment."
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                "Whether in our THINKEDGE robotics lab, on the equestrian manege, in the swimming pool, or during supervised evening residential prep, our faculty stands beside every scholar. Our consistent 100% board examination record is the natural outcome of this deliberate, caring pedagogy."
              </p>
              <div className="text-xs font-bold text-[#0B1930]">
                {STAFF_INFO.principal}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F7F6F2] p-6 rounded-2xl border border-slate-200 text-center space-y-3 order-1 lg:order-2">
              <div className="w-24 h-24 rounded-full bg-[#0B1930] border-2 border-[#C6A15B] mx-auto flex items-center justify-center text-[#E8D6AD] font-heading font-bold text-2xl">
                SGS
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-[#0B1930]">{STAFF_INFO.principal}</h4>
                <div className="text-xs text-slate-500">Principal, Sanskruthi Global School</div>
              </div>
              <p className="text-[11px] text-slate-500">
                Over 25 years of CBSE academic leadership, pedagogy development, and student counselling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff & Faculty Overview */}
      <section id="our-staff" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Dedicated Mentors
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
              Our Staff & Faculty
            </h2>
            <p className="text-xs text-slate-600">
              Experienced, trained, and CBSE-certified teachers committed to nurturing character and conceptual mastery.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-xl bg-white border border-slate-200">
              <div className="text-2xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.totalTeachers}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Total Full-Time Faculty</div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200">
              <div className="text-2xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.pgt}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Post Graduate Teachers (PGT)</div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200">
              <div className="text-2xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.tgt}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Trained Graduate Teachers (TGT)</div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200">
              <div className="text-2xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.teacherStudentRatio}</div>
              <div className="text-xs font-semibold text-slate-600 mt-1">Teacher-Student Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Common Inquiries
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1930]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#0B1930] hover:text-[#C6A15B] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C6A15B]' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
