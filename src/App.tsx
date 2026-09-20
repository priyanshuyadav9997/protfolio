/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { NotionHeader } from './components/NotionHeader';
import { MetricsSection } from './components/MetricsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificatesSection } from './components/CertificatesSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('py_portfolio_theme', 'light');
    }
    return 'light';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync theme with html root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('py_portfolio_theme', theme);
  }, [theme]);

  // Synchronize dynamic social share meta tags with the active host
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      const ogImage = `${origin}/og-image.png`;
      const currentUrl = window.location.href;

      const setMeta = (selector: string, attr: string, value: string) => {
        const el = document.querySelector(selector);
        if (el) {
          el.setAttribute(attr, value);
        }
      };

      setMeta('meta[property="og:image"]', 'content', ogImage);
      setMeta('meta[property="og:image:secure_url"]', 'content', ogImage);
      setMeta('meta[name="twitter:image"]', 'content', ogImage);
      setMeta('meta[property="og:url"]', 'content', currentUrl);
      setMeta('meta[name="twitter:url"]', 'content', currentUrl);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
      {/* Top Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="top" className="pt-16">
        {/* 1. Notion Cover, Properties, TOC & Notion AI Executive Assistant */}
        <NotionHeader onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Key Metrics & Quantified Impact (Compact 4-Card Strip) */}
        <MetricsSection />

        {/* 3. Shipped Products & Case Studies (Notion Gallery & Table Database) */}
        <CaseStudiesSection />

        {/* 4. Experience & Education Timeline */}
        <ExperienceSection />

        {/* 5. Verified Credentials & Physical Certificates (Single Source of Truth) */}
        <CertificatesSection />

        {/* 6. Core Product Management Skills Matrix */}
        <SkillsMatrix />

        {/* 7. Contact & Collaboration */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
