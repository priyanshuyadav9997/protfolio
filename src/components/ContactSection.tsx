import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Calendar,
  FileText,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    topic: 'Full-Time Product Manager Role',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Discuss Product Strategy & Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
            Whether you are hiring for a high-velocity Product Management role, seeking an AI prototyping builder, or looking to discuss product strategy — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <ProfileAvatar size="md" editable={false} />
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    Direct Contact Details
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Priyanshu Yadav • Open for PM Roles
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Email Address</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Mobile Phone</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-500 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">LinkedIn Profile</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.linkedinHandle}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Current Location</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {PERSONAL_INFO.availability}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Available for immediate exploratory conversations, portfolio walkthroughs, and case study assessments.
                </p>
              </div>
            </div>

            {/* Quick Resume CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white flex items-center justify-between shadow-lg">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                  Curriculum Vitae
                </span>
                <h4 className="font-display font-bold text-sm">Download Verified CV (PDF)</h4>
              </div>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors"
              >
                View CV
              </button>
            </div>

          </div>

          {/* Right Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message or Schedule Coffee Chat
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the quick form below or reach out directly at{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-indigo-600 dark:text-indigo-400 underline">
                  {PERSONAL_INFO.email}
                </a>.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-lg">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your note regarding <strong>{formData.topic}</strong> has been received. I'll get back to you within 24 hours at <em>{formData.email}</em>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block font-semibold text-slate-700 dark:text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-semibold text-slate-700 dark:text-slate-300">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@techventures.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block font-semibold text-slate-700 dark:text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.roleOrCompany}
                        onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                        placeholder="e.g. Acme Corp / Venture Labs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-semibold text-slate-700 dark:text-slate-300">
                        Discussion Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Full-Time Product Manager Role">Full-Time Product Manager Role</option>
                        <option value="Associate Product Manager (APM)">Associate Product Manager (APM)</option>
                        <option value="AI Product Prototyping Collaboration">AI Product Prototyping Collaboration</option>
                        <option value="Product Strategy Coffee Chat">Product Strategy Coffee Chat</option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300">
                      Message / Notes *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Priyanshu, we loved your CVxpress & Management Mosaic case studies and would like to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
