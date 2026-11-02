import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { 
  CreditCard, ShieldCheck, ExternalLink, HelpCircle, 
  ArrowRight, CheckCircle2, Lock, AlertCircle, FileText 
} from 'lucide-react';

interface PaymentPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate }) => {
  const [studentId, setStudentId] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('Term 1 (2026–27)');

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Official secure payment redirection
    window.open('https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="Official Online Fee Payment"
        subtitle="Convenient, secure, and verified digital payment portal for tuition, residential boarding, and transport fees."
        category="Student Accounts & Billing"
        breadcrumbs={[{ label: 'Online Payment' }]}
        onNavigate={onNavigate}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Official Security Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold">Official Payment Security Advisory:</strong>
              Sanskruthi Global School does not collect card numbers or net-banking passwords directly on this website. All online fee transactions are routed securely to verified authorized banking gateways (SBI Collect / HDFC Qfix).
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Payment Portal Launcher Card */}
            <div className="lg:col-span-7 bg-[#F7F6F2] rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                  Direct Fee Gateway
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1930] mt-1">
                  Pay Student School Fees
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter student details below to launch the official verified banking checkout.
                </p>
              </div>

              <form onSubmit={handleProceedToPayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Admission Number / Student ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g. SGS/2023/184 or Admission No."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Find this on your previous fee receipt, ID card, or student report card.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Fee Head / Session
                  </label>
                  <select
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                  >
                    <option value="Term 1 (2026–27)">Term 1 Tuition & Activity Fee (2026–27)</option>
                    <option value="Term 2 (2026–27)">Term 2 Tuition & Activity Fee (2026–27)</option>
                    <option value="Hostel & Residential">Residential Boarding & Mess Charges</option>
                    <option value="Transport Route Fee">Annual / Half-Yearly Transport Bus Fee</option>
                    <option value="Admissions Registration">New Admissions Registration Fee</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-[#0B1930] text-[#E8D6AD] hover:bg-[#142B49] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Official Payment Gateway</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </button>
                </div>
              </form>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>256-Bit SSL Encrypted Banking</span>
                </span>
                <span>UPI · Net Banking · Cards</span>
              </div>
            </div>

            {/* Payment Guide & Instructions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-bold font-heading text-[#0B1930] uppercase tracking-wider">
                  Step-by-Step Payment Instructions
                </h4>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                    <div>Click "Proceed to Official Payment Gateway" to open the verified banking portal.</div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                    <div>Search and select <strong>Sanskruthi Global School (Visakhapatnam)</strong> from educational institutions list.</div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                    <div>Enter student Admission Number, Student Name, and Class to populate fee heads automatically.</div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center text-[10px] font-bold shrink-0">4</div>
                    <div>Pay via UPI (GPay, PhonePe, Paytm), Debit Card, Credit Card, or Net Banking.</div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0B1930] text-[#E8D6AD] flex items-center justify-center text-[10px] font-bold shrink-0">5</div>
                    <div>Save or print the generated digital receipt with the DU / Transaction Reference Number.</div>
                  </div>
                </div>
              </div>

              {/* Accounts Desk Contact */}
              <div className="p-5 rounded-2xl bg-[#0B1930] text-white space-y-2 text-xs">
                <div className="font-bold text-[#E8D6AD]">Accounts Desk Assistance</div>
                <p className="text-slate-300">
                  For fee ledger queries, payment receipts, or RTGS/NEFT bank details, please contact:
                </p>
                <div className="pt-1 font-mono text-sm text-white">
                  +91 9133096954 / +91 9963808636
                </div>
                <div className="text-[11px] text-slate-400">
                  Email: info@sanskruthiglobalschool.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
