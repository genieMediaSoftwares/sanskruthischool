import React from 'react';
import { PageRoute } from '../types';
import { 
  SCHOOL_INFO, MANDATORY_DISCLOSURE_DOCS, 
  RESULT_STATISTICS, STAFF_INFO, INFRASTRUCTURE_SPECS 
} from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { 
  FileCheck, Download, Eye, ExternalLink, ShieldCheck, 
  Building2, Users, GraduationCap, Award 
} from 'lucide-react';

interface DisclosurePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DisclosurePage: React.FC<DisclosurePageProps> = ({ onNavigate }) => {
  const handleDownload = (docName: string) => {
    alert(`Downloading official verified CBSE document: ${docName}`);
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="CBSE Mandatory Public Disclosure"
        subtitle="In accordance with the directives of the Central Board of Secondary Education (CBSE), New Delhi, Appendix IX Circular No. 03/2021."
        category="Statutory Compliance"
        breadcrumbs={[{ label: 'Mandatory Public Disclosure' }]}
        onNavigate={onNavigate}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section A: General Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-7 h-7 rounded-lg bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center font-bold text-xs">
                A
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">
                General Information
              </h3>
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700 w-1/3">Name of the School</td>
                    <td className="py-3 px-4 text-[#0B1930] font-semibold">{SCHOOL_INFO.name}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700">Affiliation Number</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#142B49]">{SCHOOL_INFO.affiliationNumber}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700">School Code</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#142B49]">{SCHOOL_INFO.schoolCode}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700">Complete Address with PIN Code</td>
                    <td className="py-3 px-4 text-slate-700">
                      PS Bonangi, Parwada Mandal, Visakhapatnam – 531021, Andhra Pradesh, India.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700">Principal Name & Qualification</td>
                    <td className="py-3 px-4 text-slate-700 font-semibold">{STAFF_INFO.principal}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700">School Email ID</td>
                    <td className="py-3 px-4 text-slate-700">{SCHOOL_INFO.emails.general}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-700">Contact Telephone Numbers</td>
                    <td className="py-3 px-4 text-slate-700">{SCHOOL_INFO.phones.join(' / ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section B: Documents and Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-7 h-7 rounded-lg bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center font-bold text-xs">
                B
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">
                Documents & Official Information
              </h3>
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0B1930] text-white">
                    <th className="py-3 px-4 font-bold font-heading w-12 text-center">S.No</th>
                    <th className="py-3 px-4 font-bold font-heading">Document / Information Title</th>
                    <th className="py-3 px-4 font-bold font-heading text-right">View / Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MANDATORY_DISCLOSURE_DOCS.map((doc) => (
                    <tr key={doc.sno} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono font-bold text-slate-500 text-center">{doc.sno}</td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-800">{doc.information}</div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">{doc.docName} ({doc.fileSize})</div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDownload(doc.docName)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-[#0B1930] hover:text-white transition-colors font-medium text-slate-700 text-xs cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>PDF Document</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section C: Result & Academics */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-7 h-7 rounded-lg bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center font-bold text-xs">
                C
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">
                Result & Academics
              </h3>
            </div>

            {/* Class X Results */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B49]">
                CBSE Class X (AISSE) Examination Performance (Last 3 Years)
              </h4>
              <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#142B49] text-white">
                      <th className="py-2.5 px-4 font-bold">Academic Year</th>
                      <th className="py-2.5 px-4 font-bold">Students Registered</th>
                      <th className="py-2.5 px-4 font-bold">Students Passed</th>
                      <th className="py-2.5 px-4 font-bold">Pass Percentage</th>
                      <th className="py-2.5 px-4 font-bold">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {RESULT_STATISTICS.classX.map((res, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-semibold text-slate-800">{res.year}</td>
                        <td className="py-2.5 px-4 font-mono">{res.registered}</td>
                        <td className="py-2.5 px-4 font-mono">{res.passed}</td>
                        <td className="py-2.5 px-4 font-bold text-emerald-700">{res.passPercentage}</td>
                        <td className="py-2.5 px-4 text-slate-600">{res.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Class XII Results */}
            <div className="space-y-2 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B49]">
                CBSE Class XII (AISSCE) Examination Performance (Last 3 Years)
              </h4>
              <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#142B49] text-white">
                      <th className="py-2.5 px-4 font-bold">Academic Year</th>
                      <th className="py-2.5 px-4 font-bold">Students Registered</th>
                      <th className="py-2.5 px-4 font-bold">Students Passed</th>
                      <th className="py-2.5 px-4 font-bold">Pass Percentage</th>
                      <th className="py-2.5 px-4 font-bold">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {RESULT_STATISTICS.classXII.map((res, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-semibold text-slate-800">{res.year}</td>
                        <td className="py-2.5 px-4 font-mono">{res.registered}</td>
                        <td className="py-2.5 px-4 font-mono">{res.passed}</td>
                        <td className="py-2.5 px-4 font-bold text-emerald-700">{res.passPercentage}</td>
                        <td className="py-2.5 px-4 text-slate-600">{res.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section D: Staff Teaching Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-7 h-7 rounded-lg bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center font-bold text-xs">
                D
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">
                Staff (Teaching) Details
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                <div className="text-xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.totalTeachers}</div>
                <div className="text-[11px] text-slate-600 mt-1 font-semibold">Total Teachers</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                <div className="text-xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.pgt}</div>
                <div className="text-[11px] text-slate-600 mt-1 font-semibold">PGT (Class XI–XII)</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                <div className="text-xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.tgt}</div>
                <div className="text-[11px] text-slate-600 mt-1 font-semibold">TGT (Class VI–X)</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F6F2] border border-slate-200">
                <div className="text-xl font-bold font-heading text-[#0B1930]">{STAFF_INFO.teacherStudentRatio}</div>
                <div className="text-[11px] text-slate-600 mt-1 font-semibold">Teacher-Student Ratio</div>
              </div>
            </div>
          </div>

          {/* Section E: Infrastructure Metrics */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-7 h-7 rounded-lg bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center font-bold text-xs">
                E
              </span>
              <h3 className="text-xl font-bold font-heading text-[#0B1930]">
                School Infrastructure
              </h3>
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <tbody className="divide-y divide-slate-100">
                  {INFRASTRUCTURE_SPECS.map((spec, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/2">{spec.item}</td>
                      <td className="py-2.5 px-4 font-mono text-[#0B1930]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
