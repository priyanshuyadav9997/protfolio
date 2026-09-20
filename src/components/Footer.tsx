import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowUp,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-100/80 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold font-display text-sm shadow-sm">
              PY
            </div>
            <div>
              <p className="font-display font-bold text-slate-900 dark:text-white text-sm tracking-tight">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Product Manager • Lovely Professional University (MBA) & BCA
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center items-center gap-5 text-slate-600 dark:text-slate-400 font-medium">
            <a href="#top" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Overview</a>
            <a href="#metrics" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Impact</a>
            <a href="#case-studies" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Case Studies</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Experience</a>
            <a href="#credentials" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Certificates</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span className="text-[11px] font-semibold">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sub-footer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Priyanshu Yadav. All verified credentials, case studies and metrics preserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
