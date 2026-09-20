import React, { useState } from 'react';
import { WORK_EXPERIENCES, EDUCATION_DATA, CERTIFICATES } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { RealCertificateView } from './RealCertificateView';
import { CertificateModal } from './CertificateModal';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Award,
  ChevronRight,
  BookOpen,
  Maximize2,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const handleOpenCert = (certId: string) => {
    const found = CERTIFICATES.find((c) => c.id === certId);
    if (found) setSelectedCert(found);
  };

  return (
    <section
      id="experience"
      className="py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory & Verification</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Experience & Verified Credentials
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Chronological milestones spanning management training, AI product ventures, and business school honors — with official real certificates presented directly below the work.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-700/50">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work & Live Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Honors</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {WORK_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 my-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Core Accomplishments & Responsibilities:
                  </span>
                  <ul className="space-y-2">
                    {exp.highlights.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Metrics & Skill Tags */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.metricsTag && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{exp.metricsTag}</span>
                    </span>
                  )}
                </div>

                {/* Verified Role Certificate Badge */}
                {exp.certificateAttachment && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-medium">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Verified Completion Certificate</span>
                    </span>
                    <button
                      onClick={() => handleOpenCert(exp.certificateAttachment!)}
                      className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Scan</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.specialization && (
                      <span className="inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        Specialization: {edu.specialization}
                      </span>
                    )}
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.details && (
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Academic Highlights:
                    </span>
                    <ul className="space-y-1.5 pl-5 list-disc marker:text-indigo-500 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {edu.details.map((item, dIdx) => (
                        <li key={dIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Verified Credential Badge for Mittal School of Business */}
                {edu.institution.includes('Lovely Professional University') && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[#ea580c] font-medium">
                      <Award className="w-4 h-4 text-[#ea580c]" />
                      <span>Certificate of Merit (2nd Place — Management Mosaic 2.0)</span>
                    </span>
                    <button
                      onClick={() => handleOpenCert('mosaic')}
                      className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Scan</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Inspection Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
