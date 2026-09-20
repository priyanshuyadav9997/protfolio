import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { RealCertificateView } from './RealCertificateView';
import {
  X,
  Target,
  Users,
  Compass,
  Layers,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'personas' | 'process' | 'metrics' | 'certificate'>('overview');

  useEffect(() => {
    if (!caseStudy) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                {caseStudy.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {caseStudy.status}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {caseStudy.timeline}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {caseStudy.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Role: <strong className="text-slate-900 dark:text-white">{caseStudy.role}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Sub-Nav Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-white dark:bg-slate-900 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Problem & Solution</span>
          </button>
          <button
            onClick={() => setActiveTab('personas')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'personas'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Target Personas</span>
          </button>
          <button
            onClick={() => setActiveTab('process')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'process'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PM Process & Roadmap</span>
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'metrics'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>KPIs & Learnings</span>
          </button>
          {caseStudy.certificateAttachment && (
            <button
              onClick={() => setActiveTab('certificate')}
              className={`py-3 px-4 border-b-2 font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'certificate'
                  ? 'border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Official Certificate</span>
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 dark:text-slate-300">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Executive Summary
                </h4>
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {caseStudy.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-red-200/80 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20 space-y-2">
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400 text-sm font-bold">
                    <Target className="w-4 h-4" />
                    <span>The Core Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-sm font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>The Product Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Tech Stack & System Tools</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Personas */}
          {activeTab === 'personas' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                User research and qualitative discovery synthesized into key persona segments:
              </p>
              <div className="space-y-3">
                {caseStudy.targetUsers.map((user, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                      <Users className="w-4 h-4 text-indigo-500" />
                      <span>{user.persona}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pl-6">
                      <strong className="text-slate-700 dark:text-slate-300 font-semibold">Core Pain Point: </strong>
                      {user.painPoint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Process & Roadmap */}
          {activeTab === 'process' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Structured product management phases from discovery to shipping:
              </p>
              <div className="relative pl-6 space-y-6 border-l-2 border-indigo-200 dark:border-indigo-900/60">
                {caseStudy.productProcess.map((step, idx) => (
                  <div key={idx} className="relative space-y-2">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900" />
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.phase}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {step.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                          <span>{deliv}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Metrics & Learnings */}
          {activeTab === 'metrics' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Success Metrics & Key Performance Indicators</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700"
                    >
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">
                        {metric.label}
                      </span>
                      <span className="font-display text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1 block">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 block">
                        {metric.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Key Product Learnings & Retrospective</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc pl-5 marker:text-indigo-500">
                  {caseStudy.keyLearnings.map((learning, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 5: Attached Verified Certificate */}
          {activeTab === 'certificate' && caseStudy.certificateAttachment && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Official Institutional Credential</span>
                  </h4>
                  <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mt-0.5">
                    Authentic certificate validating project participation, national rank, and demonstrated skills.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-md">
                <RealCertificateView
                  certificateId={caseStudy.certificateAttachment}
                  interactive={true}
                />
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Case Study: {caseStudy.title.split(':')[0]}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
