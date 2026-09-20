import React, { useState, useEffect } from 'react';
import { CertificateItem } from '../types';
import { RealCertificateView } from './RealCertificateView';
import { normalizeCertId } from '../utils/certificateStorage';
import {
  X,
  Award,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!certificate) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
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
        {/* Header */}
        <div className="p-4 sm:p-5 px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Verified Credential Document
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Authentic Document Scan & Institutional Records • Priyanshu Yadav
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Replica Canvas */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Authentic Real Certificate Replica */}
          <div className="w-full max-w-3xl mx-auto shadow-2xl rounded-sm overflow-hidden border border-slate-300 dark:border-slate-700">
            <RealCertificateView
              certificateId={normalizeCertId(certificate.id)}
              interactive={true}
              allowDirectUpload={true}
            />
          </div>

          {/* Verification Attributes Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
              <span>Authenticity Record Details</span>
              <span className="text-[11px] font-normal text-slate-400">Direct from user submission</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certificate.verifyDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider">
                      {detail.key}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {detail.val}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(detail.val, detail.key)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    title="Copy value"
                  >
                    {copiedKey === detail.key ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Competency tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Demonstrated PM Competencies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skillsHighlighted.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Official document matches submitted certificates
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            Done Inspecting
          </button>
        </div>
      </div>
    </div>
  );
};
