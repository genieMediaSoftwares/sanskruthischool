import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { AdmissionForm } from '../components/forms/AdmissionForm';
import { TCVerificationModal } from '../components/forms/TCVerificationModal';
import { 
  FileCheck, Calendar, Phone, Sparkles, CheckCircle2, 
  ChevronDown, Search, ArrowRight, ShieldCheck, Download
} from 'lucide-react';

interface AdmissionsPageProps {
  onNavigate: (route: PageRoute, subSection?: string) => void;
  subSection?: string;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate, subSection }) => {
  const [tcModalOpen, setTcModalOpen] = useState(subSection === 'tc-verification');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const admissionSteps = [
    {
      step: "01",
      title: "Online Enquiry or Campus Visit",
      desc: "Submit the online enquiry form or visit the Bonangi campus admissions desk to register your interest and obtain the official prospectus."
    },
    {
      step: "02",
      title: "Interaction & Baseline Assessment",
      desc: "For primary and secondary candidates, a friendly interaction and diagnostic baseline review is conducted to understand learning readiness."
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Submit previous school Transfer Certificate (TC), report cards, birth certificate, Aadhaar copies, and student passport photographs."
    },
    {
      step: "04",
      title: "Enrolment & Welcome Orientation",
      desc: "Complete fee payment formalities, collect uniform and learning kits, and participate in the parent-student induction day."
    }
  ];

  const ageCriteria = [
    { grade: "Nursery", minAge: "3 Years as on 31st May", stream: "Early Childhood Foundation" },
    { grade: "LKG", minAge: "4 Years as on 31st May", stream: "Foundational Literacy & Phonics" },
    { grade: "UKG", minAge: "5 Years as on 31st May", stream: "Sensory Numeracy & Exploration" },
    { grade: "Class I", minAge: "6 Years as on 31st May", stream: "Primary CBSE Foundation" },
    { grade: "Class VI – VIII", minAge: "11 – 13 Years", stream: "Middle CBSE + STEM Labs" },
    { grade: "Class IX – X", minAge: "14 – 15 Years", stream: "Secondary CBSE AISSE" },
    { grade: "Class XI", minAge: "16 Years (Passed Class X)", stream: "MPC & BiPC Science Streams" }
  ];

  const admissionFaqs = [
    {
      q: "When do admissions open for the 2026–27 academic year?",
      a: "Admissions for the 2026–27 session are officially open now for Day Scholars and Residential scholars across Nursery to Class IX, and Class XI (MPC & BiPC science streams)."
    },
    {
      q: "Is transportation provided for day scholars across Visakhapatnam?",
      a: "Yes. Our GPS-monitored school bus fleet covers routes across Visakhapatnam, Gajuwaka, Kurmannapalem, Steel Plant township, Anakapalle, and Parwada."
    },
    {
      q: "What documents are required at the time of admission?",
      a: "Original Transfer Certificate (counter-signed if from another state or non-CBSE board), birth certificate copy, recent passport-size photographs, previous year's mark sheet, and Aadhaar cards of the child and parents."
    },
    {
      q: "Can outstation parents apply for hostel accommodation?",
      a: "Yes. Our residential campus accommodates scholars from Class IV upwards with separate boys' and girls' wings, nutritious dining, and round-the-clock medical care."
    }
  ];

  return (
    <div className="space-y-0">
      <PageHero
        title="Admissions 2026–2027 Open"
        subtitle="Embark on an extraordinary educational journey at Sanskruthi Global School. Applications invited for Day Scholars and Residential Boarders across Nursery to Class XI."
        category="Admissions Portal"
        breadcrumbs={[{ label: 'Admissions' }]}
        onNavigate={onNavigate}
        ctaText="Verify Student TC"
        onCtaClick={() => setTcModalOpen(true)}
      />

      {/* Main Admission Process & Form Grid */}
      <section id="enquiry-form" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Process Overview & Contact */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                  Admission Overview
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0B1930] tracking-tight">
                  Transparent, Student-Centred Admission Process
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We seek to make the admission process seamless, welcoming, and transparent for parents. Our admissions team is available six days a week to answer questions, guide subject selection for senior secondary streams, and arrange campus walkthroughs.
                </p>
              </div>

              {/* 4 Steps */}
              <div className="space-y-4">
                {admissionSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-[#0B1930] text-[#E8D6AD] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-[#0B1930]">{step.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Help Card */}
              <div className="p-6 rounded-2xl bg-[#0B1930] text-white space-y-3">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                  Admissions Helpline
                </div>
                <div className="text-xl font-bold font-heading text-white">
                  Speak Directly With an Admissions Counsellor
                </div>
                <p className="text-xs text-slate-300">
                  Monday to Saturday: 8:30 AM – 5:00 PM IST
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`}
                    className="px-4 py-2 rounded-lg bg-[#C6A15B] text-[#0B1930] font-bold text-xs uppercase hover:bg-[#E8D6AD] transition-colors"
                  >
                    {SCHOOL_INFO.phones[0]}
                  </a>
                  <a
                    href={`tel:${SCHOOL_INFO.phones[1].replace(/\s+/g, '')}`}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-colors border border-white/20"
                  >
                    {SCHOOL_INFO.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Embedded Interactive Admission Form */}
            <div className="lg:col-span-6">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Age Eligibility & Criteria Table */}
      <section id="admission-process" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Eligibility Guidelines
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0B1930]">
              Age Criteria & Stream Guidelines (2026–27)
            </h3>
            <p className="text-xs text-slate-500">
              In accordance with Central Board of Secondary Education (CBSE) and NEP age benchmarks.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0B1930] text-white">
                  <th className="py-3 px-4 font-bold font-heading">Class / Grade</th>
                  <th className="py-3 px-4 font-bold font-heading">Minimum Age Requirement</th>
                  <th className="py-3 px-4 font-bold font-heading">Stream / Focus Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ageCriteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-[#0B1930]">{item.grade}</td>
                    <td className="py-3 px-4 text-slate-700">{item.minAge}</td>
                    <td className="py-3 px-4 text-slate-600">{item.stream}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transfer Certificate (TC) Banner & Verification */}
      <section id="tc-verification" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B1930] text-white p-8 border border-[#C6A15B]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6A15B] uppercase tracking-wider">
              <FileCheck className="w-4 h-4" />
              <span>Mandatory CBSE Compliance</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Online Transfer Certificate (TC) Verification
            </h3>
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
              Verify the authenticity of any Transfer Certificate issued by Sanskruthi Global School instantly using student admission number or TC registry serial number.
            </p>
          </div>

          <button
            onClick={() => setTcModalOpen(true)}
            className="px-6 py-3 rounded-lg bg-[#C6A15B] text-[#0B1930] hover:bg-[#E8D6AD] font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow"
          >
            Open TC Verification Portal
          </button>
        </div>
      </section>

      {/* Admissions FAQs */}
      <section id="admission-faqs" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F6F2] border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0B1930]">
              Admissions FAQ
            </h3>
          </div>

          <div className="space-y-3">
            {admissionFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
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

      {/* TC Verification Modal */}
      <TCVerificationModal
        isOpen={tcModalOpen}
        onClose={() => setTcModalOpen(false)}
      />
    </div>
  );
};
