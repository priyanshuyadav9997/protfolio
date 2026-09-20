import React from 'react';
import {
  Cpu,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      value: '2 Live MVPs',
      label: 'GenAI Products Built',
      detail: 'CVxpress (ATS Optimizer) & Managerial Interview Simulator with real rubric evaluation.',
      tag: 'AI Engineering',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      value: '₹41,000+',
      label: 'Zero-to-One Venture Revenue',
      detail: '250% QoQ commercial expansion driven by pricing elasticity and customer acquisition.',
      tag: 'GTM & Revenue',
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      value: 'Top 1%',
      label: 'National Strategy & Hackathons',
      detail: '2nd / 200+ teams in Management Mosaic 2.0 & 6th Rank at Nexus GenAI Hackathon.',
      tag: 'Competitive Merit',
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      value: '40+ Guests',
      label: 'Executive & Learner Engagement',
      detail: 'Curated industry leaders and led LMS learner discovery at Skilled Sapiens.',
      tag: 'Product Discovery',
    },
  ];

  return (
    <section
      id="metrics"
      className="py-12 bg-slate-50/70 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Impact Overview
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              Measurable Outcomes Across AI, Strategy & Growth
            </h2>
          </div>
          <span className="hidden sm:inline text-xs text-slate-400 font-mono">
            4 Core Indicators
          </span>
        </div>

        {/* 4 Crisp Stats in a single row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                    {item.tag}
                  </span>
                </div>

                <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>

                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {item.label}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
