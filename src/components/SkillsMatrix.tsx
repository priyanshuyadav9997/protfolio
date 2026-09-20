import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import {
  Compass,
  Sparkles,
  Layout,
  Users,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-500" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-500" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Core Competencies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & PM Toolkit
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
            Structured across strategic product management, generative AI prototyping, quantitative design & data tools, and executive power skills.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow space-y-5"
            >
              {/* Group Title */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                  {getGroupIcon(group.icon)}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                          {skill.tag}
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        skill.level === 'Expert'
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                          : skill.level === 'Advanced'
                          ? 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300 border border-violet-200 dark:border-violet-800'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
