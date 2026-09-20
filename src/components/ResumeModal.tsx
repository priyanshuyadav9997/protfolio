import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATION_DATA, CASE_STUDIES, CERTIFICATES } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
Product Manager
LinkedIn: ${PERSONAL_INFO.linkedin}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}

SKILLS SUMMARY
Technical: User Research, Market Research, Business Development, MS Excel, PowerPoint, Canva, Miro, SPSS, Power BI, Figma, n8n, Google AI Studio, Base44, Automation, Stitch AI.
Power Skills: Leadership, Adaptability, Selling, Marketing, Public Speaking, Negotiation, Team Collaboration.

EXPERIENCE
Management Trainee | Skilled Sapiens | New Delhi (Jun 2026 - Aug 2026)
- Coordinated 5+ podcast sessions with industry leaders.
- Counseled 30+ prospective learners via consultative selling.
- Analyzed LMS learner feedback, identifying UX pain points for product enhancements.
- Established collaborations with 5+ colleges to expand campus outreach.

PROJECTS / LIVE PRODUCTS
- CVxpress (AI Career Acceleration Platform | Aug 2026 - Present): Zero-fabrication ATS resume optimization via Google AI Studio & n8n.
- Managerial Interview Simulator (AI EdTech | Aug 2026 - Present): STAR framework leadership interview simulator deployed on Cloud Run.
- Shin Bakers (Revenue Growth Project | Oct 2025 - Nov 2025): Dynamic pricing and demand modeling, generating ₹26,000+ (250% QoQ growth).
- HR Tech Platform UI (Oct 2025 - Nov 2025): Designed recruitment platform, sold prototype for ₹10,000 to client company.

AWARDS & HONORS
- Ranked 2nd among 200+ teams in National Level Management Mosaic 2.0 (LPU).
- Ranked 6th out of 200+ participants in Nexus: Where Prompts Become Products (Unstop).
- Raised ₹41,000+ total revenue across 3 independent sales & marketing projects.

EDUCATION
- MBA in Product Management & Marketing, Lovely Professional University (Aug 2025 - Present)
- Bachelor of Computer Applications (BCA), Swami Vivekanand Subharti University (2019 - 2022)
    `;
    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="p-4 px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">
              Priyanshu Yadav — Curriculum Vitae
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Verified CV
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans print:p-0 print:m-0 print:shadow-none print:border-none">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex justify-center mb-2">
              <ProfileAvatar size="md" editable={false} showStatus={false} />
            </div>
            <h1 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              Product Management & Marketing • AI Products & Growth
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                {PERSONAL_INFO.linkedinHandle}
              </span>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Skills Summary
            </h2>
            <div className="text-xs space-y-1">
              <p>
                <strong className="text-slate-900 dark:text-white">Technical Skills: </strong>
                User Research, Market Research, Business Development, MS Word, MS Excel, PowerPoint, Canva, Miro, SPSS, Power BI, Figma, n8n, Google AI Studio, Base44, Automation, Stitch AI.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Power Skills: </strong>
                Leadership, Adaptability, Selling, Marketing, Public Speaking, Negotiation, Team Collaboration.
              </p>
            </div>
          </div>

          {/* Internships */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Internships
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs font-bold">
                <span className="text-slate-900 dark:text-white">MANAGEMENT TRAINEE | Skilled Sapiens | New Delhi</span>
                <span className="text-slate-500">Jun 2026 – Aug 2026</span>
              </div>
              <ul className="text-xs space-y-1 mt-1.5 pl-4 list-disc marker:text-slate-400 text-slate-700 dark:text-slate-300">
                <li>Coordinated 5+ podcast sessions with industry leaders, managing stakeholder communication, scheduling, and end-to-end execution.</li>
                <li>Counseled 30+ prospective learners, contributing to course enrollments through consultative selling and personalized career guidance.</li>
                <li>Collected and analyzed learner feedback on the Learning Management System (LMS), identifying user pain points and recommending product improvements.</li>
                <li>Partnered with Product and Marketing teams to provide data-driven recommendations improving platform usability.</li>
                <li>Established collaborations with 5+ colleges to expand campus outreach and generate qualified leads.</li>
              </ul>
            </div>
          </div>

          {/* Projects / Live Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Projects / Live Projects
            </h2>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900 dark:text-white">AI Career Acceleration Platform | CVxpress</span>
                  <span className="text-slate-500">Aug 2026 – Present</span>
                </div>
                <ul className="space-y-1 mt-1 pl-4 list-disc marker:text-slate-400 text-slate-700 dark:text-slate-300">
                  <li>Defined product vision, target personas, and MVP roadmap for an AI platform tailoring verified resumes with a zero-fabrication policy.</li>
                  <li>Designed end-to-end user journey from CV/JD ingestion to ATS-fit analysis and tailored export using MoSCoW prioritization.</li>
                  <li>Built and deployed MVP using Google AI Studio, Gemini, and n8n; tracking time-to-first optimized CV, export rate, and conversion.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900 dark:text-white">AI EdTech & Career Readiness | Managerial Interview Simulator</span>
                  <span className="text-slate-500">Aug 2026 – Present</span>
                </div>
                <ul className="space-y-1 mt-1 pl-4 list-disc marker:text-slate-400 text-slate-700 dark:text-slate-300">
                  <li>Identified leadership interview readiness gaps; designed AI simulator for conflict resolution, trade-offs, and executive communication.</li>
                  <li>Structured competency rubrics using the STAR framework delivering scenario-based interviews with actionable feedback.</li>
                  <li>Prototyped and deployed on Google AI Studio & Cloud Run with session completion and score improvement metrics.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900 dark:text-white">Revenue Growth Project | Shin Bakers</span>
                  <span className="text-slate-500">Oct 2025 – Nov 2025</span>
                </div>
                <ul className="space-y-1 mt-1 pl-4 list-disc marker:text-slate-400 text-slate-700 dark:text-slate-300">
                  <li>Developed pricing and demand strategy, produced ₹26,000+ in revenue (250% QoQ growth); branded into recognized campus brand.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span className="text-slate-900 dark:text-white">UI Design & Sales | HR Tech Platform (Team of 3)</span>
                  <span className="text-slate-500">Oct 2025 – Nov 2025</span>
                </div>
                <ul className="space-y-1 mt-1 pl-4 list-disc marker:text-slate-400 text-slate-700 dark:text-slate-300">
                  <li>Led discovery and designed ATS-compatible UI; commercially sold prototype to a client company for ₹10,000 with full sign-off.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Awards & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Awards & Achievements
            </h2>
            <ul className="text-xs space-y-1 pl-4 list-disc marker:text-slate-400 text-slate-700 dark:text-slate-300">
              <li>Ranked 2nd among 200+ teams at National Level Management Mosaic 2.0 (Strategy & Business Management).</li>
              <li>Ranked 6th out of 200+ individual participants in Nexus: Where Prompts Become Products (Unstop & TechVerse).</li>
              <li>Raised ₹41,000+ in total revenue across 3 independent sales and marketing ventures.</li>
              <li>Achieved 250% growth in Shin Bakers venture within the first operating quarter.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="text-xs space-y-2">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Lovely Professional University | Phagwara, Punjab</p>
                  <p className="text-slate-600 dark:text-slate-400">Master of Business Administration – Product Management & Marketing</p>
                </div>
                <span className="text-slate-500 font-medium">Aug 2025 – Present</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Swami Vivekanand Subharti University | Meerut, Uttar Pradesh</p>
                  <p className="text-slate-600 dark:text-slate-400">Bachelor of Computer Applications (General)</p>
                </div>
                <span className="text-slate-500 font-medium">Jul 2019 – Jul 2022</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-xs text-slate-500">
          <span>Source: Official CV & Institutional Records</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
