import React, { useState, useEffect } from 'react';
import {
  FileText,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  ShieldCheck,
  Share2,
  Star,
  ChevronRight,
  Sparkles,
  Mail,
  Linkedin,
  Check,
  Hash,
  Image as ImageIcon,
  Sliders,
  X,
  ExternalLink,
} from 'lucide-react';
import { NotionAIBlock } from './NotionAIBlock';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

interface NotionHeaderProps {
  onOpenResume: () => void;
}

interface CoverOption {
  id: string;
  name: string;
  url: string;
  category: string;
}

const CURATED_COVERS: CoverOption[] = [
  {
    id: 'exec-studio',
    name: 'Executive Tech Studio (Default)',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85',
    category: 'Corporate Minimal',
  },
  {
    id: 'sv-office',
    name: 'Silicon Valley Innovation HQ',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=85',
    category: 'Modern Tech Office',
  },
  {
    id: 'arch-atrium',
    name: 'Architectural Glass Atrium',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    category: 'Skyscrapers & Glass',
  },
  {
    id: 'product-lab',
    name: 'Contemporary Product Design Lab',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=85',
    category: 'Design Workspace',
  },
  {
    id: 'minimal-light',
    name: 'Architectural Daylight Studio',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2400&q=85',
    category: 'Clean Minimalist',
  },
];

export const NotionHeader: React.FC<NotionHeaderProps> = ({ onOpenResume }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [starred, setStarred] = useState(false);
  const [showCoverPicker, setShowCoverPicker] = useState(false);
  const [coverUrl, setCoverUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('py_portfolio_cover');
      if (saved && !saved.includes('photo-1618005182384-a83a8bd57fbe')) {
        return saved;
      }
      return CURATED_COVERS[0].url;
    }
    return CURATED_COVERS[0].url;
  });
  const [coverPosition, setCoverPosition] = useState<'center' | 'top' | 'bottom'>('center');
  const [customCoverInput, setCustomCoverInput] = useState('');

  const handleSelectCover = (url: string) => {
    setCoverUrl(url);
    if (typeof window !== 'undefined') {
      localStorage.setItem('py_portfolio_cover', url);
    }
  };

  const handleCustomCoverSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCoverInput.trim()) return;
    handleSelectCover(customCoverInput.trim());
    setCustomCoverInput('');
    setShowCoverPicker(false);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Priyanshu Yadav | Product Manager Portfolio',
      text: 'Explore the Product Management & AI portfolio of Priyanshu Yadav (Zero-to-One MVPs, Verified Metrics & Credentials)',
      url: window.location.href,
    };
    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
        return;
      } catch (e) {
        // Fallback to clipboard if cancelled or declined
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const navLinks = [
    { id: 'notion-ai', label: '✦ Notion AI' },
    { id: 'metrics', label: 'Impact' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'experience', label: 'Experience & Education' },
    { id: 'credentials', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="w-full">
      {/* Top Notion Window Chrome */}
      <div className="border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 sm:px-8 py-2.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 select-none">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap py-0.5">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Priyanshu's Workspace</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 dark:text-slate-400">Product Management</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
            <span>💼</span>
            <span>Priyanshu Yadav (Executive Portfolio)</span>
          </span>
        </div>

        {/* Right Notion Meta Actions */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-[11px] text-slate-400">
            Updated today
          </span>
          <button
            onClick={handleShare}
            className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 transition-colors text-slate-700 dark:text-slate-300 font-medium"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
          </button>
          <button
            onClick={() => setStarred(!starred)}
            className={`p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
              starred ? 'text-amber-500' : 'text-slate-400'
            }`}
            title="Star page"
          >
            <Star className={`w-3.5 h-3.5 ${starred ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Notion Photographic Cover Banner with Atmospheric Soft Lighting */}
      <div className="relative h-56 sm:h-72 lg:h-80 w-full overflow-hidden border-b border-slate-200/80 dark:border-slate-800 group select-none">
        {/* Real Cover Photo with Position Control */}
        <img
          src={coverUrl}
          alt="Notion Portfolio Cover"
          className={`w-full h-full object-cover transition-all duration-700 ${
            coverPosition === 'top'
              ? 'object-top'
              : coverPosition === 'bottom'
              ? 'object-bottom'
              : 'object-center'
          }`}
        />

        {/* Soft atmospheric gradient wash for light mode readability & elegant visual blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/10 to-black/15 dark:from-slate-950 dark:via-slate-950/20 dark:to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />

        {/* Cover Meta Controls (Notion style interactive bar) */}
        <div className="absolute top-3 right-4 sm:right-8 flex items-center gap-2">
          {/* Change Cover Button */}
          <button
            onClick={() => setShowCoverPicker(!showCoverPicker)}
            className="px-2.5 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-xs backdrop-blur-md transition-all flex items-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60 active:scale-95"
          >
            <ImageIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Change Cover</span>
          </button>

          {/* Reposition Toggle */}
          <button
            onClick={() =>
              setCoverPosition((prev) =>
                prev === 'center' ? 'top' : prev === 'top' ? 'bottom' : 'center'
              )
            }
            className="px-2.5 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white text-xs font-medium backdrop-blur-md transition-all hidden sm:flex items-center gap-1 border border-white/20 active:scale-95"
            title="Adjust photo vertical positioning"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="capitalize">{coverPosition}</span>
          </button>
        </div>

        {/* Interactive Cover Picker Popover */}
        {showCoverPicker && (
          <div className="absolute top-12 right-4 sm:right-8 z-30 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-indigo-600" />
                <span>Choose Cover Photo</span>
              </span>
              <button
                onClick={() => setShowCoverPicker(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Curated Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-3">
              {CURATED_COVERS.map((cover) => (
                <button
                  key={cover.id}
                  onClick={() => handleSelectCover(cover.url)}
                  className={`group/item relative h-20 rounded-xl overflow-hidden border-2 text-left transition-all ${
                    coverUrl === cover.url
                      ? 'border-indigo-600 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                  }`}
                >
                  <img
                    src={cover.url}
                    alt={cover.name}
                    className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-1.5 flex flex-col justify-end">
                    <span className="text-[10px] font-bold text-white leading-tight">
                      {cover.name}
                    </span>
                    <span className="text-[9px] text-slate-300">{cover.category}</span>
                  </div>
                  {coverUrl === cover.url && (
                    <div className="absolute top-1 right-1 p-0.5 rounded-full bg-indigo-600 text-white">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Custom Image URL Bar */}
            <form onSubmit={handleCustomCoverSubmit} className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-1.5">
              <input
                type="url"
                value={customCoverInput}
                onChange={(e) => setCustomCoverInput(e.target.value)}
                placeholder="Paste custom image URL..."
                className="flex-1 px-2.5 py-1 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0"
              >
                Apply
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Main Notion Page Container with Elevated Clean Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 -mt-14 sm:-mt-16 relative z-10 pb-12">
        
        {/* Executive Profile Avatar (Priyanshu's Portrait with upload & drag-and-drop support) */}
        <div className="flex flex-wrap items-end gap-4 mb-5">
          <ProfileAvatar size="xl" editable={true} />
          <div className="pb-1">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Executive Portrait</span>
              <span>•</span>
              <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">Click photo to update</span>
            </div>
            <p className="text-[11px] text-slate-400">Drag or click to choose &quot;photo for cv.jpeg&quot; anytime</p>
          </div>
        </div>

        {/* Page Title & Status Pill */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Product Roles</span>
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">Executive Candidate Document</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Priyanshu Yadav
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-1 font-medium">
              Product Manager • AI & Growth • MBA (Mittal School of Business, LPU)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold shadow-xs hover:shadow transition-all flex items-center gap-1.5 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400 dark:text-indigo-600" />
              <span>Full Notion CV</span>
            </button>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/80 border border-blue-200/80 dark:border-blue-800/80 text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Connect</span>
            </a>
          </div>
        </div>

        {/* Notion Database Properties Table (Light & Clean Aesthetics) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs mb-8">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <span>Page Properties</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="font-normal lowercase">notion executive schema</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-xs">
            {/* Property 1: Role */}
            <div className="flex items-center gap-2.5">
              <span className="w-24 text-slate-400 flex items-center gap-1.5 shrink-0">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Primary Role</span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                Product Manager (AI / Growth)
              </span>
            </div>

            {/* Property 2: Focus Area */}
            <div className="flex items-center gap-2.5">
              <span className="w-24 text-slate-400 flex items-center gap-1.5 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>Focus Area</span>
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60">
                GenAI, LLM Apps & GTM
              </span>
            </div>

            {/* Property 3: Education */}
            <div className="flex items-center gap-2.5">
              <span className="w-24 text-slate-400 flex items-center gap-1.5 shrink-0">
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                <span>Education</span>
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-300 truncate">
                MBA, Mittal School of Business
              </span>
            </div>

            {/* Property 4: Location */}
            <div className="flex items-center gap-2.5">
              <span className="w-24 text-slate-400 flex items-center gap-1.5 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Location</span>
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                New Delhi & Punjab, India
              </span>
            </div>

            {/* Property 5: Status */}
            <div className="flex items-center gap-2.5">
              <span className="w-24 text-slate-400 flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Availability</span>
              </span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/60">
                Open for High-Impact PM Roles
              </span>
            </div>

            {/* Property 6: Verification */}
            <div className="flex items-center gap-2.5">
              <span className="w-24 text-slate-400 flex items-center gap-1.5 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Credentials</span>
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-200 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                4 Institutional Scans Attached
              </span>
            </div>
          </div>
        </div>

        {/* Notion Table of Contents Quick Bar */}
        <div className="mb-8 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between overflow-x-auto gap-2 text-xs">
          <div className="flex items-center gap-1 shrink-0 text-slate-400 font-medium px-1">
            <Hash className="w-3.5 h-3.5" />
            <span>Contents:</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto py-0.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-2.5 py-1 rounded-md text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium whitespace-nowrap transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Notion AI Executive Summary Embed Block */}
        <div id="notion-ai" className="mb-10">
          <NotionAIBlock />
        </div>

      </div>
    </div>
  );
};
