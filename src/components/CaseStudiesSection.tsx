import React, { useState } from 'react';
import { CASE_STUDIES, CERTIFICATES } from '../data/portfolioData';
import { CaseStudy, CertificateItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { RealCertificateView } from './RealCertificateView';
import { CertificateModal } from './CertificateModal';
import {
  FolderKanban,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  Clock,
  Briefcase,
  Award,
  Maximize2,
  LayoutGrid,
  Table as TableIcon,
  FileText,
  Calendar,
  Tag,
  ExternalLink,
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedCert, setInspectedCert] = useState<CertificateItem | null>(null);
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('gallery');

  const categories = ['All', 'AI Products', 'Growth & Strategy', 'UI/UX & Commercialization'];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  const handleOpenCert = (certId: string) => {
    const cert = CERTIFICATES.find((c) => c.id === certId);
    if (cert) setInspectedCert(cert);
  };

  return (
    <section
      id="case-studies"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Notion Database • Case Studies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies & Shipped Work
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Deep dives into zero-to-one product development, AI architecture, pricing elasticity, and commercial design execution. Switch between Gallery and Table database views.
            </p>
          </div>

          {/* Database View Switcher & Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* View Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('gallery')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'gallery'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Gallery View</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'table'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Table View</span>
              </button>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* NOTION TABLE VIEW */}
        {viewMode === 'table' ? (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="py-3 px-4 sm:px-6">Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Primary Metric</th>
                    <th className="py-3 px-4">Timeline</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Credential</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-normal text-slate-700 dark:text-slate-300">
                  {filteredStudies.map((study) => (
                    <tr
                      key={study.id}
                      onClick={() => setSelectedCase(study)}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors group"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <FileText className="w-4 h-4 text-indigo-500 group-hover:text-indigo-600" />
                        <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {study.title}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 whitespace-nowrap">
                          {study.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {study.role}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                          {study.metrics[0]?.value} {study.metrics[0]?.label}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {study.timeline}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {study.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {study.certificateAttachment ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenCert(study.certificateAttachment!);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200/60 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
                          >
                            <Award className="w-3 h-3 text-amber-500" />
                            <span>Verified Scan</span>
                          </button>
                        ) : (
                          <span className="text-slate-400 text-[11px]">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                          <span>Open</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 text-[11px] text-slate-400 px-6 flex items-center justify-between">
              <span>Showing {filteredStudies.length} Notion records</span>
              <span>Click any row to open full Notion page view</span>
            </div>
          </div>
        ) : (
          /* NOTION GALLERY VIEW (Original visual cards with enhanced Notion styling) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Banner Header */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {study.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {study.status}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {study.timeline}
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {study.tagline}
                    </p>
                  </div>

                  {/* Role badge */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Role: <strong className="text-slate-700 dark:text-slate-200">{study.role}</strong></span>
                  </div>

                  {/* Problem vs Solution Snip */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-200 block mb-0.5">The Challenge:</span>
                      <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{study.problem}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-0.5">PM Approach:</span>
                      <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{study.solution}</p>
                    </div>
                  </div>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                    {study.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-center"
                      >
                        <span className="font-display font-extrabold text-sm sm:text-base text-indigo-600 dark:text-indigo-400 block">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate block mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Verified Credential Badge (Modal Link, Non-Repetitive) */}
                  {study.certificateAttachment && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-medium">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Official Competition Credential</span>
                      </span>
                      <button
                        onClick={() => handleOpenCert(study.certificateAttachment!)}
                        className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect Scan</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="p-5 px-6 sm:px-7 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Full PRD & Analysis Available
                  </span>
                  <button
                    onClick={() => setSelectedCase(study)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/20 transition-all active:scale-95"
                  >
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />

      {/* Certificate Modal */}
      <CertificateModal
        certificate={inspectedCert}
        onClose={() => setInspectedCert(null)}
      />
    </section>
  );
};
