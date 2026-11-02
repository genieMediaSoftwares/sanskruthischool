import React, { useState } from 'react';
import { CheckCircle2, Send, PhoneCall, MessageSquare } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface AdmissionFormProps {
  compact?: boolean;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Class I',
    boardingType: 'Day Scholar',
    academicYear: '2026–2027',
    previousSchool: '',
    message: '',
    agreePrivacy: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) errs.studentName = 'Student name is required';
    if (!formData.parentName.trim()) errs.parentName = 'Parent/Guardian name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.agreePrivacy) {
      errs.agreePrivacy = 'Consent is required to process enquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission to admissions desk
    setTimeout(() => {
      const generatedRef = `SGS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 800);
  };

  if (submittedRef) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-xl font-bold font-heading text-[#0B1930] mb-2">
          Admissions Enquiry Received
        </h3>
        <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
          Thank you for your interest in Sanskruthi Global School. Our admissions counsellor will contact you within 24 business hours.
        </p>

        <div className="bg-[#F7F6F2] rounded-xl p-4 max-w-sm mx-auto mb-6 text-left border border-slate-200">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Enquiry Reference Number</div>
          <div className="text-lg font-mono font-bold text-[#0B1930]">{submittedRef}</div>
          <div className="text-xs text-slate-500 mt-1">Student: <strong>{formData.studentName}</strong> ({formData.grade})</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1930] text-white text-xs font-semibold hover:bg-[#142B49] transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#C6A15B]" />
            <span>Call Admissions Desk</span>
          </a>
          <a
            href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Sanskruthi%20Global%20School,%20I%20have%20submitted%20an%20enquiry%20(Ref:%20${submittedRef})%20for%20${encodeURIComponent(formData.studentName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmittedRef(null);
            setFormData({
              studentName: '',
              parentName: '',
              phone: '',
              email: '',
              grade: 'Class I',
              boardingType: 'Day Scholar',
              academicYear: '2026–2027',
              previousSchool: '',
              message: '',
              agreePrivacy: true
            });
          }}
          className="mt-6 text-xs text-slate-500 underline hover:text-slate-800"
        >
          Submit another admission enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Admissions 2026–27</div>
        <h3 className="text-xl md:text-2xl font-bold font-heading text-[#0B1930] mt-1">
          Apply or Register Your Enquiry
        </h3>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Complete the form below to receive our prospectus and schedule a personal campus tour at Bonangi.
        </p>
      </div>

      <div className="space-y-4">
        {/* Student & Parent Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Student’s Full Name *
            </label>
            <input
              type="text"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="e.g. Aarav Sharma"
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49] ${
                errors.studentName ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.studentName && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.studentName}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Parent / Guardian Name *
            </label>
            <input
              type="text"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49] ${
                errors.parentName ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.parentName && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.parentName}</span>}
          </div>
        </div>

        {/* Contact Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Contact Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49] ${
                errors.phone ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.phone && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone}</span>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="parent@example.com"
              className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49] ${
                errors.email ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.email && <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email}</span>}
          </div>
        </div>

        {/* Grade Applying & Boarding Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Class Applying For
            </label>
            <select
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
            >
              <option value="Nursery">Nursery / Playgroup</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Class I">Class I</option>
              <option value="Class II">Class II</option>
              <option value="Class III">Class III</option>
              <option value="Class IV">Class IV</option>
              <option value="Class V">Class V</option>
              <option value="Class VI">Class VI</option>
              <option value="Class VII">Class VII</option>
              <option value="Class VIII">Class VIII</option>
              <option value="Class IX">Class IX</option>
              <option value="Class X">Class X (Transfer subject to CBSE norms)</option>
              <option value="Class XI - MPC (Maths, Physics, Chem)">Class XI - MPC (IIT-JEE)</option>
              <option value="Class XI - BiPC (Bio, Physics, Chem)">Class XI - BiPC (NEET)</option>
              <option value="Class XII - Science">Class XII - Science</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Campus Mode
            </label>
            <select
              value={formData.boardingType}
              onChange={(e) => setFormData({ ...formData, boardingType: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
            >
              <option value="Day Scholar">Day Scholar (With GPS Bus)</option>
              <option value="Residential Boarding">Residential Boarding (Hostel)</option>
              <option value="Extended Day Care">Extended Day Scholar</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Academic Session
            </label>
            <select
              value={formData.academicYear}
              onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
            >
              <option value="2026–2027">2026–2027 (Immediate)</option>
              <option value="Mid-Session Transfer">2025–2026 (Mid-Session Transfer)</option>
            </select>
          </div>
        </div>

        {!compact && (
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Questions or Specific Interests (Sports, Co-curricular, Transport)
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Interested in Horse Riding Academy and hostel accommodation details..."
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
            />
          </div>
        )}

        {/* Privacy Consent */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="privacyConsent"
            checked={formData.agreePrivacy}
            onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
            className="mt-0.5 rounded border-slate-300 text-[#142B49] focus:ring-[#142B49]"
          />
          <label htmlFor="privacyConsent" className="text-[11px] text-slate-500 leading-tight">
            I authorize Sanskruthi Global School admissions desk to contact me via phone, email, or WhatsApp regarding admissions and campus tours.
          </label>
        </div>
        {errors.agreePrivacy && <span className="text-[11px] text-red-500 block">{errors.agreePrivacy}</span>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-lg bg-[#0B1930] text-[#E8D6AD] font-bold text-xs uppercase tracking-wider hover:bg-[#142B49] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Transmitting Enquiry...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Submit Admission Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
