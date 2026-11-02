import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageHero } from '../components/common/PageHero';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, Navigation, ExternalLink 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="space-y-0">
      <PageHero
        title="Contact Sanskruthi Global School"
        subtitle="We invite prospective parents, students, and educators to visit our serene 10-acre campus at Bonangi, Visakhapatnam. Connect with our administrative team today."
        category="Get in Touch"
        breadcrumbs={[{ label: 'Contact Us' }]}
        onNavigate={onNavigate}
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Main 3 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Campus Address Card */}
            <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#0B1930]">
                  Official Campus Address
                </h3>
                <address className="not-italic text-xs text-slate-600 leading-relaxed">
                  <strong>Sanskruthi Global School</strong><br />
                  PS Bonangi, Parwada Mandal,<br />
                  Visakhapatnam – 531021,<br />
                  Andhra Pradesh, India.
                </address>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] text-slate-500 font-semibold">
                  Landmark: Near Bonangi Panchayat, Parwada
                </span>
              </div>
            </div>

            {/* Telephone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#0B1930]">
                  Phone Lines & WhatsApp
                </h3>
                <div className="space-y-1.5 text-xs">
                  <a
                    href={`tel:${SCHOOL_INFO.phones[0].replace(/\s+/g, '')}`}
                    className="block font-semibold text-[#142B49] hover:text-[#C6A15B]"
                  >
                    {SCHOOL_INFO.phones[0]} (Primary Desk)
                  </a>
                  <a
                    href={`tel:${SCHOOL_INFO.phones[1].replace(/\s+/g, '')}`}
                    className="block font-semibold text-[#142B49] hover:text-[#C6A15B]"
                  >
                    {SCHOOL_INFO.phones[1]} (Admissions Helpline)
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Sanskruthi%20Global%20School,%20I%20would%20like%20to%20enquire%20about...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email & Office Hours Card */}
            <div className="p-6 rounded-2xl bg-[#F7F6F2] border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B1930] text-[#C6A15B] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-[#0B1930]">
                  Visiting Hours & Email
                </h3>
                <div className="space-y-1 text-xs text-slate-600">
                  <div><strong>Office Hours:</strong></div>
                  <div>{SCHOOL_INFO.officeHours}</div>
                  <div className="pt-1"><strong>Official Inquiries:</strong></div>
                  <a href={`mailto:${SCHOOL_INFO.emails.general}`} className="text-[#142B49] hover:underline">
                    {SCHOOL_INFO.emails.general}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] text-slate-500 font-semibold">
                  Sundays: Prior appointment required
                </span>
              </div>
            </div>
          </div>

          {/* Form & Map Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Direct Message Form */}
            <div className="lg:col-span-6 bg-[#F7F6F2] rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                  Send a Direct Message
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1930] mt-1">
                  We'd Love to Hear From You
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have questions about academics, sports facilities, or hostel life? Leave a message below.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-white border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-[#0B1930]">Message Sent Successfully</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {formData.name}. Our administrative team has received your inquiry and will revert shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' });
                    }}
                    className="text-xs text-[#142B49] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Venkat Raman"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="venkat@example.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                    >
                      <option value="General Enquiry">General Information</option>
                      <option value="Admissions 2026-27">Admissions & Enrolment</option>
                      <option value="Hostel & Residential">Residential School Facilities</option>
                      <option value="Sports Academies">Sports Academies (Horse Riding, Archery)</option>
                      <option value="Transport Routes">Transport Bus Routes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or message here..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#142B49]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-lg bg-[#0B1930] text-[#E8D6AD] font-bold text-xs uppercase tracking-wider hover:bg-[#142B49] hover:text-white transition-all shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Google Maps & Route Guide */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="p-4 bg-[#0B1930] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#C6A15B]" />
                    <span className="text-xs font-bold font-heading">Campus Location Map</span>
                  </div>
                  <span className="text-[11px] text-[#E8D6AD]">Bonangi, Visakhapatnam</span>
                </div>

                {/* Google Maps Embed iframe */}
                <div className="w-full h-80 bg-slate-100 relative">
                  <iframe
                    title="Sanskruthi Global School Bonangi Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.418471253043!2d83.13670987517377!3d17.65399998327918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396f4dc9494371%3A0x6338cf94cebbbe95!2sSanskruthi%20Global%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Driving Directions Guide */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1930]">
                  How to Reach Bonangi Campus:
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#142B49]">From Duvvada Railway Station:</span>
                    <span>Approx. 12 km via Parwada Road. Easy auto/cab availability.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#142B49]">From Gajuwaka Junction:</span>
                    <span>Approx. 16 km via Kurmannapalem and Steel Plant township.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#142B49]">From Visakhapatnam Airport (VTZ):</span>
                    <span>Approx. 22 km via NH16 bypass towards Parwada.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
