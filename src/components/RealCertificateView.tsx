import React, { useState, useEffect, useRef } from 'react';
import {
  getRealCertificate,
  saveRealCertificate,
  removeRealCertificate,
  normalizeCertId,
  NormalizedCertId,
  StoredCertificate,
} from '../utils/certificateStorage';
import {
  UploadCloud,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
  RefreshCw,
  Maximize2,
  Download,
  AlertCircle,
} from 'lucide-react';

interface RealCertificateViewProps {
  certificateId: NormalizedCertId | string;
  interactive?: boolean;
  onExpand?: () => void;
  allowDirectUpload?: boolean;
}

const CERTIFICATE_METADATA: Record<
  NormalizedCertId,
  {
    title: string;
    issuer: string;
    event: string;
    recordId: string;
    accentColor: string;
    publicFallbackPath: string;
  }
> = {
  mosaic: {
    title: 'Certificate of Merit — 2nd Position',
    issuer: 'Mittal School of Business, Lovely Professional University',
    event: 'Management Mosaic 2.0 (National Strategy & Simulation)',
    recordId: 'Cert #423042',
    accentColor: 'border-orange-500 text-orange-600 bg-orange-50',
    publicFallbackPath: '/certificates/mosaic.jpg',
  },
  nexus: {
    title: 'Certificate of Participation & Rank 6th',
    issuer: 'TechVerse Solutions & Unstop',
    event: 'Nexus: Where Prompts Become Products Hackathon',
    recordId: 'Nexus 2026 Record',
    accentColor: 'border-blue-500 text-blue-600 bg-blue-50',
    publicFallbackPath: '/certificates/nexus.jpg',
  },
  'skilled-sapiens': {
    title: 'Certificate of Internship Completion',
    issuer: 'Skilled Sapiens (Corporate HQ, New Delhi)',
    event: 'Management Trainee Summer Internship (Jun – Aug 2026)',
    recordId: 'SS-SIP-26-19049',
    accentColor: 'border-emerald-500 text-emerald-600 bg-emerald-50',
    publicFallbackPath: '/certificates/skilled-sapiens.jpg',
  },
  'round-table': {
    title: 'Badge of Appreciation — Discussion Lead',
    issuer: 'Fluent Voices Club, Lovely Professional University',
    event: 'The Round Table (Executive Leadership Debate)',
    recordId: 'Badge FV30012026115',
    accentColor: 'border-indigo-500 text-indigo-600 bg-indigo-50',
    publicFallbackPath: '/certificates/round-table.jpg',
  },
};

export const RealCertificateView: React.FC<RealCertificateViewProps> = ({
  certificateId,
  interactive = true,
  onExpand,
  allowDirectUpload = true,
}) => {
  const normId = normalizeCertId(certificateId);

  const [storedCert, setStoredCert] = useState<StoredCertificate | null>(() =>
    getRealCertificate(normId)
  );
  const [fallbackImageExists, setFallbackImageExists] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const meta = CERTIFICATE_METADATA[normId];

  // Listen for storage changes specifically for this certificate
  useEffect(() => {
    const handleUpdate = (e: any) => {
      if (!e.detail || !e.detail.certificateId || normalizeCertId(e.detail.certificateId) === normId) {
        setStoredCert(getRealCertificate(normId));
      }
    };

    window.addEventListener('py_real_cert_updated', handleUpdate);
    // Initial sync
    setStoredCert(getRealCertificate(normId));

    // Also check if public fallback file exists
    const img = new Image();
    img.src = meta.publicFallbackPath;
    img.onload = () => setFallbackImageExists(true);
    img.onerror = () => setFallbackImageExists(false);

    return () => {
      window.removeEventListener('py_real_cert_updated', handleUpdate);
    };
  }, [normId, meta.publicFallbackPath]);

  const handleProcessFile = (file: File) => {
    setUploadError(null);

    // Validate type: images or pdf
    const isImage = file.type.startsWith('image/');
    const isPdf = file.type === 'application/pdf';

    if (!isImage && !isPdf) {
      setUploadError('Please upload an image (PNG, JPG, WEBP) or PDF scan.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setUploadError('File size exceeds 15MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const saved = saveRealCertificate(normId, file, reader.result);
        setStoredCert(saved);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to read file. Please try again.');
    };

    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Remove uploaded document for ${meta.title}?`)) {
      removeRealCertificate(normId);
      setStoredCert(null);
    }
  };

  const imageSrc = storedCert?.dataUrl || (fallbackImageExists ? meta.publicFallbackPath : null);

  // If a real certificate file exists (either uploaded by user or located in public static path)
  if (imageSrc) {
    const isPdf = storedCert?.fileType === 'application/pdf' || imageSrc.endsWith('.pdf');

    return (
      <div className="relative w-full aspect-[1.414/1] bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group">
        {isPdf ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 p-6 text-center">
            <FileText className="w-12 h-12 text-indigo-600 mb-2" />
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">{storedCert?.fileName || meta.title}</h4>
            <p className="text-xs text-slate-500 mt-1">Official PDF Document Scan Attached</p>
            <a
              href={imageSrc}
              download={storedCert?.fileName || `${certificateId}-certificate.pdf`}
              className="mt-3 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={`${meta.title} — Real Certificate`}
            className="w-full h-full object-contain bg-white dark:bg-slate-950 select-none"
            loading="lazy"
          />
        )}

        {/* Top Verified Document Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-[10px] font-semibold backdrop-blur-md border border-white/20 shadow-md">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Real Certificate Scan</span>
          {storedCert && (
            <span className="text-slate-400 border-l border-slate-700 pl-1.5 ml-0.5">
              {(storedCert.fileSize / 1024).toFixed(0)} KB
            </span>
          )}
        </div>

        {/* Action Controls Toolbar */}
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
          {allowDirectUpload && (
            <>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                accept="image/*,.pdf"
                className="hidden"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                title="Replace with new real scan"
                className="p-1.5 rounded-lg bg-slate-900/85 hover:bg-slate-900 text-white text-xs backdrop-blur-md border border-white/20 shadow-md transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              {storedCert && (
                <button
                  onClick={handleRemove}
                  title="Remove uploaded document"
                  className="p-1.5 rounded-lg bg-rose-600/90 hover:bg-rose-700 text-white text-xs backdrop-blur-md shadow-md transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          )}

          {onExpand && (
            <button
              onClick={onExpand}
              title="Inspect full screen"
              className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs shadow-md transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Bottom Metadata bar */}
        <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white flex items-center justify-between text-[11px] backdrop-blur-[1px]">
          <span className="font-semibold truncate max-w-[70%]">{meta.title}</span>
          <span className="font-mono text-slate-300 text-[10px]">{meta.recordId}</span>
        </div>
      </div>
    );
  }

  // If no real certificate file has been attached yet:
  // Show an authentic document upload slot rather than an AI-made replica!
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`relative w-full aspect-[1.414/1] rounded-xl border-2 border-dashed transition-all p-5 flex flex-col justify-between select-none ${
        isDragging
          ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 scale-[1.01]'
          : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 hover:border-indigo-400'
      }`}
    >
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*,.pdf"
        className="hidden"
      />

      {/* Top Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Real Credential Attachment
          </span>
          <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug mt-0.5">
            {meta.title}
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {meta.issuer}
          </p>
        </div>

        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
          {meta.recordId}
        </span>
      </div>

      {/* Center Drag & Drop Action Zone */}
      <div className="my-auto py-3 text-center flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2.5 shadow-sm">
          <UploadCloud className="w-6 h-6" />
        </div>

        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
          Upload Genuine Physical Certificate Scan
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs mt-0.5 leading-relaxed">
          Drag & drop your original certificate photo or scan here (JPG, PNG, WEBP, or PDF)
        </p>

        {uploadError && (
          <p className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{uploadError}</span>
          </p>
        )}

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="mt-3 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm hover:shadow transition-all active:scale-95 flex items-center gap-1.5"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Select Real Certificate File</span>
        </button>
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
        <span>Verified Event: {meta.event}</span>
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Recipient: Priyanshu Yadav
        </span>
      </div>
    </div>
  );
};
