import React, { useState } from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateModal } from './CertificateModal';
import { RealCertificateView } from './RealCertificateView';
import { normalizeCertId, clearAllRealCertificates } from '../utils/certificateStorage';
import {
  Award,
  ShieldCheck,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Trophy,
  Medal,
  Sparkles,
  ArrowRight,
  Maximize2,
  RotateCcw,
} from 'lucide-react';

export const CertificatesSection: React.FC = () => {
  const [inspectedCert, setInspectedCert] = useState<CertificateItem | null>(null);

  const handleResetAll = () => {
    if (window.confirm('Clear all uploaded certificate files and reset to empty upload slots?')) {
      clearAllRealCertificates();
    }
  };

  return (
    <section
      id="credentials"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-3">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Verified Institutional Credentials</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Real Certificates & Verified Documents
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Physical credential verification records for national strategy competitions, hackathons, management internships, and leadership debates. Each card has its own dedicated slot — upload your genuine documents (PNG, JPG, PDF) directly into their respective cards below.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>4 Independent Slots</span>
            </div>
            <button
              onClick={handleResetAll}
              title="Reset all uploaded certificates to clean empty slots"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 hover:text-rose-600 hover:border-rose-300 dark:hover:text-rose-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Slots</span>
            </button>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Real Certificate Display */}
                <div className="relative rounded-xl overflow-hidden mb-5">
                  <RealCertificateView
                    certificateId={normalizeCertId(cert.id)}
                    interactive={true}
                    allowDirectUpload={true}
                    onExpand={() => setInspectedCert(cert)}
                  />
                </div>

                {/* Top Row: Issuer & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{cert.issuer.split(',')[0]}</span>
                  </span>
                  
                  {cert.rank ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                      <Trophy className="w-3 h-3 text-amber-500" />
                      <span>{cert.rank}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Certificate Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  {cert.subtitle}
                </p>

                {/* Verification Metadata Box */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block font-medium">Date of Issue</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{cert.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Record / Badge ID</span>
                    <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400 truncate block">
                      {cert.certificateNumber || 'OFFICIAL-RECORD'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Direct Upload Match
                </span>
                <button
                  onClick={() => setInspectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Fullscreen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Detailed Modal */}
      <CertificateModal
        certificate={inspectedCert}
        onClose={() => setInspectedCert(null)}
      />
    </section>
  );
};
