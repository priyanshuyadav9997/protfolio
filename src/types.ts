export type ThemeMode = 'dark' | 'light';

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
  category: 'growth' | 'product' | 'leadership' | 'strategy';
  icon: string;
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: 'AI Products' | 'Growth & Strategy' | 'UI/UX & Commercialization';
  status: 'In Production' | 'Live MVP' | 'Commercialized' | 'Completed';
  timeline: string;
  role: string;
  summary: string;
  problem: string;
  targetUsers: {
    persona: string;
    painPoint: string;
  }[];
  solution: string;
  productProcess: {
    phase: string;
    description: string;
    deliverables: string[];
  }[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  keyLearnings: string[];
  color: string;
  certificateAttachment?: 'mosaic' | 'nexus' | 'skilled-sapiens' | 'round-table';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Live Project' | 'Leadership';
  description: string;
  highlights: string[];
  skills: string[];
  metricsTag?: string;
  certificateAttachment?: 'mosaic' | 'nexus' | 'skilled-sapiens' | 'round-table';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization?: string;
  details?: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  certificateNumber?: string;
  badgeType: 'Gold' | 'Merit' | 'Completion' | 'Participation';
  rank?: string;
  description: string;
  skillsHighlighted: string[];
  verifyDetails: {
    key: string;
    val: string;
  }[];
  themeColor: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  date: string;
  type: 'Consumer Research & Analytics' | 'Socio-Ecological Research';
  abstract: string;
  methodology: string;
  keyFindings: string[];
  productApplications: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    tag?: string;
  }[];
}
