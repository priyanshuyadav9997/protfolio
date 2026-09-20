import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Check,
  Copy,
} from 'lucide-react';

interface PresetPrompt {
  id: string;
  label: string;
  icon: string;
  shortSummary: string;
  keyPoints: string[];
}

const PRESET_PROMPTS: PresetPrompt[] = [
  {
    id: 'recruiter-summary',
    label: '⚡ 30s Executive Summary',
    icon: '⚡',
    shortSummary:
      'Product Manager combining a technical foundation (BCA) with business acumen (MBA, Mittal School of Business, LPU). Built 2 GenAI MVPs, led user discovery at Skilled Sapiens, and placed top 1% nationally in business strategy simulations.',
    keyPoints: [
      'Focus: GenAI product design, automated ATS optimization, and rapid prototype-to-GTM execution.',
      'Distinctive edge: Technical literacy to architect system prompts & evaluate APIs, backed by unit economics rigor.',
      'Status: Open for Product Management (AI / Growth / Platform) opportunities.',
    ],
  },
  {
    id: 'ai-products',
    label: '🤖 AI Workflows & Architecture',
    icon: '🤖',
    shortSummary:
      'Engineered two live GenAI MVPs addressing recruitment and career readiness workflows:',
    keyPoints: [
      'CVxpress: End-to-end ATS resume optimizer using structured semantic parsing to achieve 94% parsing accuracy.',
      'Managerial Interview Simulator: Dynamic multi-turn evaluation assessing communication clarity, structured thinking, and managerial presence.',
      'Prompt Engineering: Validated via 6th Rank nationally at Nexus Hackathon (TechVerse / Unstop) for prompt chains and LLM system design.',
    ],
  },
  {
    id: 'growth-strategy',
    label: '📈 Business Rigor & Experience',
    icon: '📈',
    shortSummary:
      'Track record of customer discovery, commercial pricing, and strategic problem-solving:',
    keyPoints: [
      'Skilled Sapiens: Management Trainee — drove LMS user research (8 prioritized feature requests) and produced 5+ executive podcasts.',
      'Management Mosaic 2.0: Ranked 2nd of 200+ teams in national business simulation at Mittal School of Business.',
      'Zero-to-One Venture: Generated ₹41,000+ revenue through localized pricing elasticity and 250% QoQ growth.',
    ],
  },
];

export const NotionAIBlock: React.FC = () => {
  const [selectedPromptId, setSelectedPromptId] = useState<string>('recruiter-summary');
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const activePrompt = PRESET_PROMPTS.find((p) => p.id === selectedPromptId) || PRESET_PROMPTS[0];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    const q = customQuestion.toLowerCase();
    let answer = '';

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      answer =
        'Direct contact: priyanshuyadav9997@gmail.com | Phone: +91-6396587552 | LinkedIn: https://www.linkedin.com/in/priyanshu-yadav-130618356. Open for product roles.';
    } else if (q.includes('cert') || q.includes('degree') || q.includes('lpu') || q.includes('mba')) {
      answer =
        'Priyanshu holds a BCA and is completing his MBA at Mittal School of Business (LPU, 2024–2026). All 4 official credential scans are available to inspect in the Verified Credentials section below.';
    } else if (q.includes('tool') || q.includes('skill') || q.includes('tech')) {
      answer =
        'PM Toolkit: PRD authoring, user journey mapping, prompt engineering (Gemini/OpenAI), Jira, Figma, Mixpanel, SQL, and agile sprint planning.';
    } else {
      answer = `Regarding "${customQuestion}": Priyanshu focuses on bridging technical LLM capabilities with customer needs — building tested MVPs, validating with user interviews, and measuring hard business outcomes.`;
    }

    setCustomAnswer(answer);
  };

  const handleCopy = () => {
    const text = customAnswer || `${activePrompt.shortSummary}\n\n${activePrompt.keyPoints.map((p) => `• ${p}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 shadow-xs transition-all">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200/70 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-4 h-4" />
          <span>Notion AI • Quick Recruiter Assistant</span>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* 3 Quick Chips */}
      <div className="flex flex-wrap gap-1.5 pt-3 pb-3">
        {PRESET_PROMPTS.map((prompt) => {
          const isSelected = selectedPromptId === prompt.id && !customAnswer;
          return (
            <button
              key={prompt.id}
              onClick={() => {
                setSelectedPromptId(prompt.id);
                setCustomAnswer(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-indigo-300'
              }`}
            >
              {prompt.label}
            </button>
          );
        })}
      </div>

      {/* Answer Body (Short & Punchy) */}
      <div className="rounded-xl bg-white dark:bg-slate-950 p-4 border border-slate-200/60 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        {customAnswer ? (
          <div className="space-y-2">
            <p className="font-medium leading-relaxed">{customAnswer}</p>
            <button
              onClick={() => setCustomAnswer(null)}
              className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              ← Back to presets
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
              {activePrompt.shortSummary}
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
              {activePrompt.keyPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Single-line Ask Bar */}
      <form onSubmit={handleCustomSubmit} className="mt-3 flex items-center gap-2">
        <input
          type="text"
          value={customQuestion}
          onChange={(e) => setCustomQuestion(e.target.value)}
          placeholder="Ask Notion AI a specific question about Priyanshu..."
          className="flex-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-1"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Ask</span>
        </button>
      </form>
    </div>
  );
};
