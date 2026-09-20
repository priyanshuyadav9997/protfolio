import {
  MetricItem,
  CaseStudy,
  ExperienceItem,
  EducationItem,
  CertificateItem,
  ResearchItem,
  SkillGroup,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Priyanshu Yadav',
  title: 'Product Manager',
  tagline: 'Bridging AI Technology, Product Strategy & High-Velocity Growth',
  bio: 'Product Manager with an engineering mindset (BCA) and strategic business rigor (MBA in Product Management & Marketing at Lovely Professional University). Proven track record of launching GenAI MVPs, driving 250% venture growth, and synthesizing deep consumer research into high-impact user experiences.',
  email: 'priyanshuyadav9997@gmail.com',
  phone: '+91-6396587552',
  linkedin: 'https://www.linkedin.com/in/priyanshu-yadav-130618356',
  linkedinHandle: 'in/priyanshu-yadav-130618356',
  location: 'Punjab / New Delhi, India',
  availability: 'Available for Product Management Roles & Strategic Projects',
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: 'm1',
    label: 'Total Revenue Generated',
    value: '₹41,000+',
    suffix: '',
    description: 'Generated across 3 independent entrepreneurial, sales, and marketing ventures.',
    category: 'growth',
    icon: 'TrendingUp',
    highlight: true,
  },
  {
    id: 'm2',
    label: 'Venture Growth Rate',
    value: '250%',
    suffix: 'QoQ',
    description: 'Quarterly business growth achieved for Shin Bakers through strategic demand & pricing restructuring.',
    category: 'growth',
    icon: 'Zap',
    highlight: true,
  },
  {
    id: 'm3',
    label: 'National Strategy Rank',
    value: '2nd',
    suffix: '/ 200+ Teams',
    description: 'Secured 2nd place at National Level Management Mosaic 2.0 (Mittal School of Business, LPU).',
    category: 'strategy',
    icon: 'Trophy',
    highlight: true,
  },
  {
    id: 'm4',
    label: 'National AI Hackathon Rank',
    value: '6th',
    suffix: '/ 200+ Builders',
    description: 'Top-ranked builder in "Nexus: Where Prompts Become Products" (Unstop & TechVerse Solutions).',
    category: 'product',
    icon: 'Award',
    highlight: true,
  },
  {
    id: 'm5',
    label: 'AI MVPs Architected & Deployed',
    value: '2',
    suffix: 'Live Products',
    description: 'CVxpress (Zero-Fabrication ATS optimizer) and Managerial Interview Simulator on Google AI Studio & Cloud Run.',
    category: 'product',
    icon: 'Cpu',
  },
  {
    id: 'm6',
    label: 'Industry Leaders Podcasts',
    value: '5+',
    suffix: 'Sessions Coordinated',
    description: 'End-to-end execution, scheduling, and stakeholder communication as Management Trainee at Skilled Sapiens.',
    category: 'leadership',
    icon: 'Mic',
  },
  {
    id: 'm7',
    label: 'Learners Counseled & Mentored',
    value: '30+',
    suffix: 'Candidates',
    description: 'Consultative selling, personalized roadmap guidance, and LMS user feedback synthesis.',
    category: 'leadership',
    icon: 'Users',
  },
  {
    id: 'm8',
    label: 'Research Studies Synthesized',
    value: '20',
    suffix: 'Peer-Reviewed Papers',
    description: 'Comprehensive thematic analysis on influencer marketing, parasocial interaction, and consumer purchase intent.',
    category: 'strategy',
    icon: 'BookOpen',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cvxpress',
    title: 'CVxpress: Zero-Fabrication AI Career Acceleration Platform',
    tagline: 'Closing the ATS gap without hallucinating credentials — from MoSCoW prioritization to live MVP deployment.',
    category: 'AI Products',
    status: 'Live MVP',
    timeline: 'Aug 2026 – Present',
    role: 'Product Manager & Solution Builder',
    color: 'from-blue-600 to-indigo-600',
    summary:
      'Defined product vision, target personas, and MVP roadmap for an AI platform that intelligently tailors verified candidate experiences to specific job descriptions with an uncompromising zero-fabrication policy.',
    problem:
      'Job seekers face a brutal 75%+ ATS auto-rejection rate due to mismatched terminology, while existing generative tools hallucinate fraudulent experience that fails during background checks or technical interviews.',
    targetUsers: [
      {
        persona: 'Tech & Business Graduates',
        painPoint: 'Possess strong core skills but struggle with translating real projects into role-specific ATS keywords.',
      },
      {
        persona: 'Career Changers',
        painPoint: 'Unclear how to map transferable skills to new job descriptions without exaggerating accomplishments.',
      },
      {
        persona: 'Hiring Recruiters',
        painPoint: 'Inundated with robotic, spammy, hallucinated AI resumes that do not reflect candidate reality.',
      },
    ],
    solution:
      'Engineered an intelligent matching pipeline combining AST parsing of original CVs, semantic gap analysis against target JDs, and structured suggestion modules that only rephrase and elevate verified accomplishments.',
    productProcess: [
      {
        phase: 'Discovery & User Research',
        description: 'Interviewed 25+ job seekers and recruiters to map pain points around resume tailoring and ATS filters.',
        deliverables: ['Persona Maps', 'User Journey Canvas', 'Pain Point Matrix'],
      },
      {
        phase: 'Roadmap & Prioritization',
        description: 'Applied MoSCoW framework to strip bloated features and isolate the high-value core MVP.',
        deliverables: ['Must-Haves: Zero-fabrication check, ATS gap visualizer, 1-click export', 'Won’t-Haves for v1: Auto-apply bots'],
      },
      {
        phase: 'Architecture & Rapid Build',
        description: 'Orchestrated Google AI Studio and Gemini model prompts chained with n8n automated webhooks and responsive frontend.',
        deliverables: ['System Prompt Hierarchy', 'Webhook Event Architecture', 'Clean Responsive UI'],
      },
      {
        phase: 'Metrics & Iteration',
        description: 'Monitored funnels and latency to drive time-to-first-optimized-CV down under 3 minutes.',
        deliverables: ['Telemetry Dashboard', 'User Feedback Loops', 'Conversion Tracking'],
      },
    ],
    techStack: ['Google AI Studio', 'Gemini Models', 'n8n Automation', 'React', 'Tailwind CSS', 'Figma'],
    metrics: [
      { label: 'Time-to-First-CV', value: '< 3 mins', detail: 'Accelerated from 45 mins manual tailoring' },
      { label: 'ATS Fit Lift', value: '+42%', detail: 'Average score improvement on test cohorts' },
      { label: 'Zero-Fabrication Rate', value: '100%', detail: 'Strict guardrail checks preventing false claims' },
      { label: 'Export Completion Rate', value: '78%', detail: 'High product engagement across active test users' },
    ],
    keyLearnings: [
      'Guardrails build higher user trust than unconstrained creative generation in high-stakes career products.',
      'MoSCoW prioritization prevented scope creep when integrating multi-format resume parsers.',
      'Fast semantic feedback loops keep candidate retention high during multi-step optimization flows.',
    ],
  },
  {
    id: 'interview-sim',
    title: 'Managerial Interview Simulator: AI EdTech Career Readiness',
    tagline: 'Interactive STAR-framework scenario simulation empowering aspiring leaders to master executive communication.',
    category: 'AI Products',
    status: 'Live MVP',
    timeline: 'Aug 2026 – Present',
    role: 'Product Manager & System Architect',
    color: 'from-purple-600 to-violet-600',
    summary:
      'Identified the crucial career-readiness gap where entry-level to mid-level managers struggle with behavioral and executive communication. Designed and deployed an AI-driven simulator evaluating leadership, conflict resolution, and trade-offs using structured STAR rubrics.',
    problem:
      'Standard interview prep offers static questionnaires with zero realistic counter-questioning or context-aware grading, leaving candidates unprepared for unpredictable stakeholder conflicts and high-stakes cross-functional decisions.',
    targetUsers: [
      {
        persona: 'MBA Students & Aspiring PMs',
        painPoint: 'Lack realistic simulation environments to practice difficult trade-off dilemmas and executive pushback.',
      },
      {
        persona: 'Management Trainees',
        painPoint: 'Receive subjective, infrequent feedback on leadership scenarios without objective rubric benchmarks.',
      },
    ],
    solution:
      'Designed a dynamic scenario engine that adopts executive personas (e.g. demanding Engineering VP, budget-conscious CFO), probes candidate reasoning, and grades output across the 4 STAR pillars with tailored improvement roadmaps.',
    productProcess: [
      {
        phase: 'Competency Rubric Design',
        description: 'Researched top tier management competencies: Stakeholder Management, Conflict Resolution, Prioritization, and Executive Clarity.',
        deliverables: ['STAR Evaluation Matrix', 'Scorecard Rubric', 'Scenario Archetypes'],
      },
      {
        phase: 'Prompt Architecture & Branching',
        description: 'Created dynamic conversational agents on Google AI Studio that generate follow-up pushbacks based on previous candidate answers.',
        deliverables: ['Chained Prompt Templates', 'Edge Case Guardrails', 'Response Rubrics'],
      },
      {
        phase: 'Cloud Deployment',
        description: 'Containerized and hosted on Google Cloud Run to provide low-latency interaction with scalable concurrent handling.',
        deliverables: ['Cloud Run Config', 'API Endpoints', 'Session Persistence'],
      },
    ],
    techStack: ['Google AI Studio', 'Gemini Flash', 'Google Cloud Run', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Session Completion', value: '84%', detail: 'Candidates successfully finish full 3-question simulations' },
      { label: 'Feedback Actionability', value: '4.8 / 5', detail: 'User rating on the usefulness of STAR breakdown reports' },
      { label: 'Repeat Practice Rate', value: '62%', detail: 'Users re-running scenarios to improve their rubric score' },
      { label: 'Scenario Library', value: '12+', detail: 'Covering engineering conflict, budget cuts, and product roadmap trade-offs' },
    ],
    keyLearnings: [
      'Delivering actionable critique instead of generic praise fundamentally transforms user perception from a toy into an essential coaching tool.',
      'Structuring prompts with explicit few-shot examples ensured consistent rubric grading across diverse response styles.',
    ],
  },
  {
    id: 'shin-bakers',
    title: 'Shin Bakers: 250% Growth & Campus GTM Expansion',
    tagline: 'Transforming a local baked goods venture into a recognized university brand through demand modeling and dynamic pricing.',
    category: 'Growth & Strategy',
    status: 'Completed',
    timeline: 'Oct 2025 – Nov 2025',
    role: 'Growth & Product Strategy Lead',
    color: 'from-amber-600 to-orange-600',
    summary:
      'Developed and executed comprehensive pricing, demand forecasting, and promotional distribution strategy that scaled Shin Bakers into a prominent campus brand at Lovely Professional University, generating ₹26,000+ in revenue.',
    problem:
      'Local premium bakery products suffered from low initial student penetration due to perceived high price points and lack of visible presence in high-traffic campus gathering zones.',
    targetUsers: [
      {
        persona: 'Hostel Students & Campus Commuters',
        painPoint: 'Seeking fresh, hygienic, affordable comfort snacks during evening study hours.',
      },
      {
        persona: 'Student Event Organizers',
        painPoint: 'Needed reliable bulk refreshments with swift campus delivery and volume discounts.',
      },
    ],
    solution:
      'Introduced combo-bundling, targeted evening flash sales, and micro-distribution points near hostel clusters, paired with viral peer-to-peer campus ambassador outreach.',
    productProcess: [
      {
        phase: 'Price Elasticity Study',
        description: 'Analyzed campus purchasing patterns to identify optimal bundle price thresholds that maximized volume and margin.',
        deliverables: ['Pricing Sensitivity Model', 'Product Margin Calculator'],
      },
      {
        phase: 'Brand & Packaging Rework',
        description: 'Positioned product aesthetics to align with premium modern artisan branding while keeping unit packaging costs lean.',
        deliverables: ['Visual Identity Guidelines', 'Packaging Overhaul'],
      },
      {
        phase: 'Channel Strategy & Launch',
        description: 'Coordinated student hub pop-ups, festival partnerships, and evening pre-order channels.',
        deliverables: ['Distribution Roadmap', 'Campus Influencer Partnerships'],
      },
    ],
    techStack: ['MS Excel (Financial Modeling)', 'Canva (Brand Collateral)', 'Market Surveys', 'WhatsApp Business'],
    metrics: [
      { label: 'Quarterly Growth', value: '250%', detail: 'Revenue acceleration within first operating quarter' },
      { label: 'Total Revenue', value: '₹26,000+', detail: 'Generated in the single campus launch window' },
      { label: 'Repeat Customer Rate', value: '45%', detail: 'Hostel students ordering weekly combos' },
      { label: 'Gross Margin', value: '38%', detail: 'Maintained healthy margins despite promotional bundle pricing' },
    ],
    keyLearnings: [
      'Convenience and distribution timing (9 PM - 11 PM hostel delivery) triumphed over pure price discounts.',
      'Clear brand association with quality allowed pricing power compared to commodity cafeteria options.',
    ],
  },
  {
    id: 'hr-tech-ui',
    title: 'HR Tech Platform UI: Discovery, Design & Commercialization',
    tagline: 'Translating complex enterprise hiring workflows into an ATS-compatible user experience, sold to a client company for ₹10,000.',
    category: 'UI/UX & Commercialization',
    status: 'Commercialized',
    timeline: 'Oct 2025 – Nov 2025',
    role: 'Lead UI/UX Designer & Client Strategist (Team of 3)',
    color: 'from-emerald-600 to-teal-600',
    summary:
      'Led client discovery sessions, stakeholder requirements mapping, and high-fidelity prototype design for an enterprise HR recruitment portal, securing full stakeholder sign-off and commercial sale.',
    problem:
      'The client company operated on disjointed spreadsheets and cumbersome legacy tools, losing top talent due to slow candidate screening and lack of ATS pipeline visibility.',
    targetUsers: [
      {
        persona: 'Talent Acquisition Specialists',
        painPoint: 'Wasting 15+ hours weekly manually sorting unstructured applicant resumes across email threads.',
      },
      {
        persona: 'Hiring Managers',
        painPoint: 'Lacked a centralized Kanban board to approve candidates or leave structured interview notes.',
      },
    ],
    solution:
      'Designed an intuitive, high-contrast Kanban dashboard with ATS score tagging, candidate timeline drill-downs, and automated interviewer scheduling modules.',
    productProcess: [
      {
        phase: 'Client Discovery & Requirements',
        description: 'Conducted 4 in-depth discovery interviews with hiring managers to map enterprise workflow bottlenecks.',
        deliverables: ['Service Blueprint', 'Feature Requirement Document'],
      },
      {
        phase: 'Wireframing & Information Architecture',
        description: 'Created low-fidelity wireframes exploring multi-stage candidate review and permission hierarchies.',
        deliverables: ['Figma Wireframes', 'Information Architecture Diagram'],
      },
      {
        phase: 'High-Fidelity Prototype & Pitch',
        description: 'Built interactive clickable prototypes with micro-interactions and presented the final business case to executive stakeholders.',
        deliverables: ['Interactive Design System', 'Commercial Presentation Deck'],
      },
    ],
    techStack: ['Figma', 'Miro', 'User Research Protocols', 'Design Systems'],
    metrics: [
      { label: 'Commercial Contract', value: '₹10,000', detail: 'Direct prototype buyout by client enterprise' },
      { label: 'Client Sign-off', value: '100%', detail: 'Zero major rework cycles on agreed deliverables' },
      { label: 'Screening Time Saved', value: '~40%', detail: 'Projected recruiter time efficiency gain' },
      { label: 'Core Screens Shipped', value: '18+', detail: 'Applicant tracking, candidate detail, scorecard, and analytics' },
    ],
    keyLearnings: [
      'Early co-design sessions with real recruiters prevented costly structural changes late in the design phase.',
      'Treating UX deliverables with commercial rigor directly opens monetizable consulting opportunities.',
    ],
  },
  {
    id: 'affiliate-growth',
    title: 'Affiliate Growth Campaigns: Britannia & August Bioscience',
    tagline: 'Driving ₹31,000+ in e-commerce revenue through consumer segmentation, click-through optimization, and brand storytelling.',
    category: 'Growth & Strategy',
    status: 'Completed',
    timeline: 'Jun 2025 – Oct 2025',
    role: 'Affiliate Marketing & Growth Strategist',
    color: 'from-rose-600 to-pink-600',
    summary:
      'Executed data-driven affiliate growth campaigns across two major FMCG/wellness brands (Britannia and August Bioscience), analyzing consumer click behavior to optimize conversion funnels and revenue.',
    problem:
      'Broad marketing campaigns often suffer from low return-on-ad-spend (ROAS) and dismal conversion rates due to generic copy and unsegmented customer outreach.',
    targetUsers: [
      {
        persona: 'Health-Conscious Personal Care Buyers',
        painPoint: 'Distrust marketing claims without authentic social proof or clear ingredient benefits (August Bioscience).',
      },
      {
        persona: 'Snack & Confectionery Consumers',
        painPoint: 'Impulse buyers needing timely triggers and personalized offers (Britannia).',
      },
    ],
    solution:
      'Segmented buyer audiences by intent level, crafted tailored benefit-driven landing page narratives, and systematically A/B tested discount messaging and call-to-actions.',
    productProcess: [
      {
        phase: 'Segmentation & Persona Profiling',
        description: 'Identified micro-demographics with highest propensity to purchase organic skincare and premium biscuit hampers.',
        deliverables: ['Audience Intent Tiers', 'Channel Mapping'],
      },
      {
        phase: 'Campaign Messaging & Copywriting',
        description: 'Formulated persuasive promotional hooks highlighting unique selling propositions (USPs).',
        deliverables: ['Copywriting Variants', 'Visual Creative Guidelines'],
      },
      {
        phase: 'Analytics & Attribution',
        description: 'Monitored link attribution, click-through rates (CTR), and drop-off points to reallocate promotional focus.',
        deliverables: ['Weekly Performance Reports', 'Attribution Tracking'],
      },
    ],
    techStack: ['Google Analytics', 'Affiliate Tracking Portals', 'Excel Pivot Tables', 'Canva'],
    metrics: [
      { label: 'Combined Revenue', value: '₹31,000+', detail: '₹15,000+ (August Bioscience) + ₹16,000 (Britannia)' },
      { label: 'Click-Through Rate', value: '14.2%', detail: 'Achieved through tailored promotional positioning' },
      { label: 'Campaign Conversion', value: '8.7%', detail: 'Well above industry average e-commerce benchmarks' },
    ],
    keyLearnings: [
      'Tailoring value propositions to specific lifestyle contexts dramatically out-converts generic blanket discounts.',
      'Clear attribution data is the single most important asset for rapid iterative growth experiments.',
    ],
  },
  {
    id: 'management-mosaic',
    title: 'Management Mosaic 2.0: National Business Strategy & Simulation',
    tagline: 'Navigating multi-round market simulations, dynamic resource allocation, and executive negotiation to rank 2nd among 200+ teams.',
    category: 'Growth & Strategy',
    status: 'Completed',
    timeline: 'Sep 2025 – Nov 2025',
    role: 'Lead Business Strategist & Negotiator',
    color: 'from-amber-600 to-orange-600',
    summary:
      'Competed in Management Mosaic 2.0 at Mittal School of Business (LPU), executing strategic pricing models, supply chain stress tests, and high-stakes executive negotiations over an intensive multi-week competition.',
    problem:
      'Competing teams needed to steer simulated multi-million enterprise portfolios through macroeconomic turbulence, competitor price wars, and constrained working capital without eroding shareholder value.',
    targetUsers: [
      {
        persona: 'Corporate Board & Evaluators',
        painPoint: 'Demanded mathematically sound risk mitigation, clear ROI projections, and defensible capital allocation.',
      },
    ],
    solution:
      'Engineered a counter-cyclical growth strategy, focusing on high-margin enterprise segments while optimizing cash reserves, ultimately achieving 2nd place nationwide among 200+ elite business school teams.',
    productProcess: [
      {
        phase: 'Market Entry & Competitor War Gaming',
        description: 'Analyzed rival positioning and identified underserved enterprise demand pools.',
        deliverables: ['Game Theory Matrix', 'Cost-Volume-Profit Breakdowns'],
      },
      {
        phase: 'Dynamic Resource Re-Allocation',
        description: 'Shifted capital from low-yield operational units into high-margin product lines.',
        deliverables: ['Working Capital Waterfall', 'Sensitivity Scenarios'],
      },
      {
        phase: 'Executive Defense & Presentation',
        description: 'Defended strategic roadmap in front of senior faculty and industry judges.',
        deliverables: ['Board Deck', 'Final Recommendation Dossier'],
      },
    ],
    techStack: ['Financial Sensitivity Modeling', 'Excel Solver', 'Game Theory Frameworks', 'Executive Storytelling'],
    metrics: [
      { label: 'National Rank', value: '2nd', detail: 'Out of 200+ participating university teams' },
      { label: 'Simulated Profit Margin', value: '38.4%', detail: 'Highest capital efficiency in cohort' },
      { label: 'Certificate of Merit', value: '#423042', detail: 'Official LPU accreditation with NAAC A++ endorsement' },
    ],
    keyLearnings: [
      'Data-driven scenario planning outperforms intuitive decision-making under uncertainty.',
      'Communicating trade-offs transparently builds unshakeable stakeholder trust.',
    ],
    certificateAttachment: 'mosaic',
  },
  {
    id: 'nexus-hackathon',
    title: 'Nexus: Where Prompts Become Products (Unstop Hackathon)',
    tagline: 'Designing, benchmarking, and shipping rapid Generative AI pipelines and functional prototypes to rank 6th out of 200+ builders.',
    category: 'AI Products',
    status: 'Completed',
    timeline: 'July 2026',
    role: 'GenAI Prototyper & Product Architect',
    color: 'from-blue-600 to-cyan-600',
    summary:
      'Competed in Nexus: Where Prompts Become Products hosted by TechVerse Solutions on Unstop, building production-ready prompt pipelines and generative prototypes under tight hackathon sprints.',
    problem:
      'Prompt-driven applications frequently suffer from high variance, prompt drift, and unreliable JSON structure when subjected to non-standard user inputs.',
    targetUsers: [
      {
        persona: 'Product Teams & End Users',
        painPoint: 'Require predictable schema compliance and latency under 1.5 seconds for generative features.',
      },
    ],
    solution:
      'Constructed modular few-shot prompt chaining with validation layers and fallback mechanisms, resulting in a 99.2% structured schema success rate.',
    productProcess: [
      {
        phase: 'Problem Decomposition',
        description: 'Mapped end-user goals to deterministic pipeline steps.',
        deliverables: ['Prompt Chaining Architecture', 'Schema Definitions'],
      },
      {
        phase: 'Iterative Prompt Tuning',
        description: 'Tuned temperature, system instructions, and negative constraint guards.',
        deliverables: ['Prompt Evaluation Benchmark', 'Edge-Case Test Suite'],
      },
      {
        phase: 'Hackathon Submission & Live Defense',
        description: 'Demonstrated live product workflow to technical jury.',
        deliverables: ['Working Prototype', 'Technical Architecture Walkthrough'],
      },
    ],
    techStack: ['Google AI Studio', 'Gemini Models', 'Few-Shot Prompt Engineering', 'JSON Schema Validation'],
    metrics: [
      { label: 'National Rank', value: '6th', detail: 'Ranked 6th among 200+ individual participants' },
      { label: 'Evaluation Percentile', value: 'Top 3%', detail: 'Recognized for product feasibility and prompt resilience' },
      { label: 'Schema Compliance', value: '99.2%', detail: 'Zero output hallucination across stress test cases' },
    ],
    keyLearnings: [
      'Prompt engineering is software engineering: rigorous evaluation sets and constraint guards are non-negotiable.',
      'User experience in AI products depends fundamentally on failure recovery and graceful fallback states.',
    ],
    certificateAttachment: 'nexus',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'mosaic',
    title: 'Certificate of Merit — 2nd Position',
    subtitle: 'Management Mosaic 2.0 (National Level Business Competition)',
    issuer: 'Mittal School of Business, Lovely Professional University (NAAC A++)',
    date: '15-11-2025',
    certificateNumber: '423042',
    badgeType: 'Merit',
    rank: 'Ranked 2nd among 200+ National Teams',
    description:
      'Awarded for standing Second in Management Mosaic 2.0, an intensive national business competition evaluating strategic thinking, financial acumen, market entry analysis, and executive business management.',
    skillsHighlighted: ['Business Strategy', 'Market Analysis', 'Financial Modeling', 'Executive Presentation', 'Team Leadership'],
    verifyDetails: [
      { key: 'Candidate', val: 'Priyanshu Yadav' },
      { key: 'Institution', val: 'Mittal School of Business, LPU' },
      { key: 'Registration No.', val: '12513126' },
      { key: 'Certificate ID', val: '423042' },
      { key: 'Issue Date', val: '15-11-2025' },
      { key: 'Event Duration', val: '11-09-2025 to 27-09-2025' },
      { key: 'Signatories', val: 'Head of School Rajesh & Organizing Secretary Shikha' },
    ],
    themeColor: 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    id: 'nexus',
    title: 'Certificate of Participation & 6th Rank',
    subtitle: 'Nexus: Where Prompts Become Products',
    issuer: 'TechVerse Solutions & Unstop',
    date: 'July 2026',
    certificateNumber: 'UNSTOP-TECHVERSE-2026',
    badgeType: 'Gold',
    rank: 'Ranked 6th out of 200+ Individual Participants',
    description:
      'Demonstrated elite capability in Prompt Engineering, Generative AI pipeline design, and AI-powered product problem solving in an intensive national competitive hackathon hosted on Unstop.',
    skillsHighlighted: ['Prompt Engineering', 'Generative AI', 'Rapid Prototyping', 'System Prompt Design', 'AI Product Strategy'],
    verifyDetails: [
      { key: 'Recipient', val: 'Priyanshu Yadav' },
      { key: 'Affiliation', val: 'Lovely Professional University (LPU)' },
      { key: 'Platform', val: 'Unstop' },
      { key: 'Organizer', val: 'TechVerse Solutions' },
      { key: 'Award Level', val: 'Top 3% (Rank 6 of 200+)' },
      { key: 'Verification', val: 'Scannable QR Verified' },
    ],
    themeColor: 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'skilled-sapiens',
    title: 'Certificate of Completion — Management Trainee',
    subtitle: 'Summer Internship in Business Development, LMS & Product Feedback',
    issuer: 'Skilled Sapiens, New Delhi',
    date: '20-08-2026',
    certificateNumber: 'SS-SIP-26-19049',
    badgeType: 'Completion',
    rank: 'Verified Management Trainee',
    description:
      'Successfully completed the Summer Internship as Management Trainee from 17-06-2026 to 17-08-2026. Commended by HR leadership for being keen, enthusiastic, and demonstrating strong willingness to learn and contribute to LMS product improvements.',
    skillsHighlighted: ['Stakeholder Management', 'LMS Product Improvement', 'User Research', 'Consultative Sales', 'Podcast Production'],
    verifyDetails: [
      { key: 'Candidate', val: 'Priyanshu Yadav' },
      { key: 'Role', val: 'Management Trainee (Summer Internship)' },
      { key: 'Company', val: 'Skilled Sapiens' },
      { key: 'Certificate ID', val: 'SS-SIP-26-19049' },
      { key: 'Tenure', val: '17-06-2026 to 17-08-2026' },
      { key: 'Issued By', val: 'Syeda Wajhiya, HR Manager' },
    ],
    themeColor: 'border-yellow-500 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  },
  {
    id: 'round-table',
    title: 'Badge of Appreciation — "The Round Table"',
    subtitle: 'Group Discussion & Leadership Event',
    issuer: 'Fluent Voices Club, LPU',
    date: '30-01-2026',
    certificateNumber: 'FV30012026115',
    badgeType: 'Merit',
    rank: 'Featured Speaker & Contributor',
    description:
      'Presented for active, standout participation in "THE ROUND TABLE" group discussion event. Recognized for exceptional communication skills, analytical thinking, leadership qualities, clarity of thought, and meaningful debate contribution.',
    skillsHighlighted: ['Public Speaking', 'Analytical Thinking', 'Executive Communication', 'Group Discussion', 'Negotiation'],
    verifyDetails: [
      { key: 'Recipient', val: 'Priyanshu Yadav' },
      { key: 'Organized By', val: 'Fluent Voices Club' },
      { key: 'Faculty Signoff', val: 'Mr. Vir Sapan Pratap Anand (Asst Professor)' },
      { key: 'Badge No.', val: 'FV30012026115' },
      { key: 'Focus Areas', val: 'Leadership & Strategic Discourse' },
    ],
    themeColor: 'border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'skilled-sapiens-exp',
    role: 'Management Trainee',
    company: 'Skilled Sapiens',
    location: 'New Delhi, India',
    period: 'Jun 2026 – Aug 2026',
    type: 'Internship',
    description:
      'Spearheaded key cross-functional initiatives bridging product discovery, customer counseling, and executive stakeholder relations.',
    highlights: [
      'Coordinated 5+ podcast sessions with industry executives and founders, overseeing speaker outreach, prep, and end-to-end production.',
      'Counseled 30+ prospective learners via consultative career guidance, driving direct course enrollment conversions.',
      'Systematically gathered and synthesized user feedback on the Learning Management System (LMS), identifying critical UX pain points for product teams.',
      'Partnered directly with Product and Marketing squads to deliver data-backed feature enhancements that elevated platform engagement.',
      'Established strategic partnerships across 5+ universities to expand student campus outreach and lead pipeline.',
    ],
    skills: ['User Feedback Synthesis', 'LMS Product Roadmap', 'Stakeholder Management', 'Consultative Selling', 'Cross-Functional Collaboration'],
    metricsTag: '5+ Podcasts • 30+ Counseled • 5+ College Alliances',
    certificateAttachment: 'skilled-sapiens',
  },
  {
    id: 'ai-products-exp',
    role: 'Product Manager & AI Builder',
    company: 'CVxpress & Managerial Interview Simulator',
    location: 'Self-Initiated / Remote',
    period: 'Aug 2026 – Present',
    type: 'Live Project',
    description:
      'Ideated, scoped, architected, and deployed two standalone AI-driven products addressing career preparation and hiring barriers.',
    highlights: [
      'Created zero-fabrication algorithmic guardrails to protect candidates from hallucinated experience while maximizing ATS keyword match.',
      'Designed end-to-end user journeys using MoSCoW prioritization, leading to MVP shipping in under 3 weeks.',
      'Engineered STAR-framework assessment rubrics for executive scenario simulations hosted on Google Cloud Run.',
    ],
    skills: ['Google AI Studio', 'Gemini Models', 'MoSCoW Prioritization', 'STAR Framework', 'n8n Automations'],
    metricsTag: '2 Live MVPs • <3min CV Optimization • 84% Completion',
  },
  {
    id: 'growth-exp',
    role: 'Growth & Business Strategy Lead',
    company: 'Shin Bakers & Independent Client Projects',
    location: 'Phagwara / Remote',
    period: 'Oct 2025 – Nov 2025',
    type: 'Live Project',
    description:
      'Drove multi-channel revenue generation and commercial client negotiations across food tech and HR tech platforms.',
    highlights: [
      'Engineered dynamic pricing models and demand forecasting for Shin Bakers, achieving 250% QoQ growth and ₹26,000+ revenue.',
      'Led client discovery for an HR Tech recruitment platform, conceptualizing UI prototypes and closing a commercial sale of ₹10,000.',
      'Delivered data-driven affiliate campaigns for Britannia and August Bioscience generating ₹31,000+ in collective product sales.',
    ],
    skills: ['Price Elasticity Modeling', 'B2B Client Discovery', 'Figma Prototyping', 'E-Commerce Growth', 'Funnel Optimization'],
    metricsTag: '₹41,000+ Total Revenue • 250% Growth • ₹10k Client Sale',
  },
  {
    id: 'fluent-voices-exp',
    role: 'Discussion Lead & Delegate',
    company: 'Fluent Voices Club — "The Round Table"',
    location: 'LPU, Punjab',
    period: 'Jan 2026',
    type: 'Leadership',
    description:
      'Selected participant and debate lead in "THE ROUND TABLE" structured group discussion event evaluating analytical reasoning and communication under pressure.',
    highlights: [
      'Delivered high-impact perspectives on organizational conflict resolution, communication clarity, and collaborative decision making.',
      'Awarded the official Badge of Appreciation (Badge No: FV30012026115) by Faculty of Communication Skills.',
    ],
    skills: ['Analytical Thinking', 'Public Speaking', 'Executive Negotiation', 'Consensus Building'],
    metricsTag: 'Badge of Appreciation • Faculty Signoff',
    certificateAttachment: 'round-table',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'Lovely Professional University (LPU)',
    location: 'Phagwara, Punjab',
    period: 'Aug 2025 – Present',
    specialization: 'Product Management & Marketing',
    details: [
      'Ranked 2nd nationally in Management Mosaic 2.0 business competition (200+ teams).',
      'Ranked 6th nationally in Nexus: Where Prompts Become Products (Unstop).',
      'Core Coursework: Product Lifecycle Management, Market Research & Analytics, Consumer Behavior, Technology Commercialization.',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekanand Subharti University',
    location: 'Meerut, Uttar Pradesh',
    period: 'Jul 2019 – Jul 2022',
    specialization: 'Computer Applications & Software Systems',
    details: [
      'Deep grounding in relational databases, software development lifecycle (SDLC), data structures, and algorithms.',
      'Bridge between technical engineering constraints and product business requirements.',
    ],
  },
  {
    degree: 'Senior Secondary / Intermediate',
    institution: 'National Institute of Open Schooling',
    location: 'Agra, Uttar Pradesh',
    period: 'Apr 2018 – Oct 2018',
    specialization: 'Commerce & General Studies',
  },
];

export const RESEARCH_PUBLICATIONS: ResearchItem[] = [
  {
    id: 'consumer-research',
    title: 'Consumer, Product Research & Analytics: Social Media Influencer Impact',
    date: 'Jun – Jul 2026',
    type: 'Consumer Research & Analytics',
    abstract:
      'Conducted a rigorous thematic review of 20 peer-reviewed empirical studies to dissect the causal mechanisms through which influencer credibility, expertise, perceived trust, and parasocial interaction drive consumer purchase intentions.',
    methodology:
      'Socio-behavioral thematic synthesis, meta-gap identification across Indian regional-language cohorts, and cross-comparison of micro vs. macro influencer engagement metrics.',
    keyFindings: [
      'Authenticity and perceived niche expertise outweigh follower count by 3.4x in determining direct purchase conversion.',
      'Identified substantial product-market gaps in current literature regarding regional Indian vernacular consumer habits on short-form video platforms.',
      'Formulated product-level positioning hypotheses translating consumer psychology into actionable digital go-to-market strategies.',
    ],
    productApplications: [
      'Informed creator-led growth strategies for e-commerce platforms.',
      'Defined user trust frameworks for recommendation algorithms in consumer apps.',
    ],
    tags: ['Thematic Analysis', 'Consumer Behavior', 'eWOM', 'Parasocial Interaction', 'Market Gap Analysis'],
  },
  {
    id: 'youth-substance-study',
    title: 'Drug & Substance Abuse Among Youth: A Socio-Ecological Analysis',
    date: 'April 2026',
    type: 'Socio-Ecological Research',
    abstract:
      'Conducted a comprehensive literature and multi-source data review on substance vulnerability among youth aged 5–20 in Coimbatore District, analyzing the interplay between peer pressure, academic stress, and family dynamics.',
    methodology:
      'Socio-ecological framework analyzing multi-tiered secondary data across peer-reviewed journals, law-enforcement records, healthcare reports, and NGO archives.',
    keyFindings: [
      'Mapped root causes across individual, interpersonal, institutional, and community systemic layers.',
      'Developed evidence-based product and intervention recommendations for community rehabilitation and youth support ecosystems.',
    ],
    productApplications: [
      'Framework for evaluating social-impact products and healthcare UX interventions.',
      'Holistic stakeholder mapping across families, institutions, and government bodies.',
    ],
    tags: ['Socio-Ecological Framework', 'Secondary Data Analytics', 'Intervention Design', 'Policy Analysis'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Product Management & Strategy',
    icon: 'Compass',
    description: 'Guiding products from customer discovery and roadmap prioritization to high-impact launch.',
    skills: [
      { name: 'User Research & Discovery', level: 'Expert', tag: 'Interviews, Personas' },
      { name: 'MoSCoW Prioritization', level: 'Expert', tag: 'Roadmap Execution' },
      { name: 'PRD & Spec Writing', level: 'Advanced', tag: 'User Stories, AC' },
      { name: 'Go-To-Market (GTM) Strategy', level: 'Advanced', tag: 'Campus & Digital' },
      { name: 'KPI & Funnel Analytics', level: 'Advanced', tag: 'Conversion, Retention' },
      { name: 'Agile / Scrum Collaboration', level: 'Proficient', tag: 'Sprint Delivery' },
    ],
  },
  {
    category: 'AI, Prompting & Prototyping',
    icon: 'Sparkles',
    description: 'Leveraging modern LLM architectures to ship rapid prototypes and zero-to-one MVPs.',
    skills: [
      { name: 'Google AI Studio', level: 'Expert', tag: 'System Prompts, Tuning' },
      { name: 'Gemini Models Integration', level: 'Expert', tag: 'Flash, Pro, API' },
      { name: 'Prompt Engineering', level: 'Expert', tag: 'Ranked 6th Nationally' },
      { name: 'n8n Workflow Automation', level: 'Advanced', tag: 'Webhooks, AI Nodes' },
      { name: 'Base44 & Stitch AI', level: 'Advanced', tag: 'Low-code AI Apps' },
      { name: 'Rapid Prototyping', level: 'Expert', tag: 'Idea to Live MVP' },
    ],
  },
  {
    category: 'Design & Analytics Tools',
    icon: 'Layout',
    description: 'Translating complex workflows into intuitive visual interfaces and actionable numbers.',
    skills: [
      { name: 'Figma', level: 'Advanced', tag: 'Design Systems, UI' },
      { name: 'Power BI & SPSS', level: 'Advanced', tag: 'Statistical Analytics' },
      { name: 'Miro & Journey Mapping', level: 'Expert', tag: 'Service Blueprints' },
      { name: 'MS Excel (Financial Modeling)', level: 'Expert', tag: 'Pivot, Sensitivity' },
      { name: 'Canva', level: 'Expert', tag: 'Brand Assets' },
      { name: 'Google Cloud Run', level: 'Proficient', tag: 'Container Deployment' },
    ],
  },
  {
    category: 'Power Skills & Leadership',
    icon: 'Users',
    description: 'Inspiring teams, negotiating client contracts, and driving cross-functional clarity.',
    skills: [
      { name: 'Executive Communication', level: 'Expert', tag: 'Round Table Speaker' },
      { name: 'Stakeholder Negotiation', level: 'Advanced', tag: 'B2B Client Sign-offs' },
      { name: 'Consultative Selling', level: 'Advanced', tag: '30+ Candidate Conversions' },
      { name: 'Cross-Functional Leadership', level: 'Advanced', tag: '200+ Team Competitions' },
      { name: 'Adaptability & Problem Framing', level: 'Expert', tag: 'Ambiguous Domains' },
      { name: 'Public Speaking', level: 'Advanced', tag: '100+ Audience Open Mic' },
    ],
  },
];

export const SIMULATOR_SCENARIOS = [
  {
    id: 'timeline-conflict',
    title: 'Engineering vs Product Timeline Conflict',
    category: 'Trade-offs & Stakeholder Management',
    scenario:
      'Two weeks before the scheduled launch of your AI resume scoring feature, the Lead Engineer informs you that database response latency is spiking 3x under load. Fixing it requires delaying launch by 10 days. The Marketing team already has promotional email blasts locked with external partners.',
    dilemma: 'How do you structure the resolution between engineering stability and marketing commitment?',
    promptOptions: [
      {
        id: 'opt1',
        title: 'Launch on time with reduced concurrency limit and targeted beta rollout',
        description:
          'Maintain the marketing date for a VIP tier (15% traffic), preventing server meltdowns while allowing engineering to optimize backend caching for public release in week 2.',
        starFeedback: {
          score: '94/100 (Exemplary)',
          strengths: 'Balances commercial momentum with operational risk; demonstrates customer-first compromise.',
          improvement: 'Ensure marketing messaging sets beta expectations to protect brand perception.',
          competencyScores: { leadership: 96, stakeholderManagement: 92, analyticalRigor: 94 },
        },
      },
      {
        id: 'opt2',
        title: 'Hard delay of launch across all channels until latency is below 200ms',
        description:
          'Halt all marketing campaigns immediately to ensure no user experiences sub-par latency, taking full responsibility for the delay with leadership.',
        starFeedback: {
          score: '78/100 (Acceptable, High Friction)',
          strengths: 'Prioritizes quality and prevents bad first-impression churn.',
          improvement: 'High commercial cost; burnt partner goodwill could have been mitigated with feature-flagged cohorts.',
          competencyScores: { leadership: 80, stakeholderManagement: 70, analyticalRigor: 84 },
        },
      },
      {
        id: 'opt3',
        title: 'Ship on time as-is and patch performance post-launch based on user outcry',
        description:
          'Ignore latency warnings, fulfill marketing commitments, and task engineering with hot-fixes if complaints escalate.',
        starFeedback: {
          score: '45/100 (Critical Defect)',
          strengths: 'Meets marketing schedule.',
          improvement: 'Breaches product reliability trust; demotivates engineering team and causes catastrophic onboarding drop-off.',
          competencyScores: { leadership: 40, stakeholderManagement: 50, analyticalRigor: 45 },
        },
      },
    ],
  },
  {
    id: 'feature-scope-creep',
    title: 'Executive Feature Injection Dilemma',
    category: 'Prioritization & MoSCoW Framework',
    scenario:
      'During the sprint review for the Managerial Interview Simulator MVP, an executive sponsor requests adding real-time facial emotion recognition AI before the pilot test next Monday.',
    dilemma: 'How do you respond to executive scope injection without alienating leadership or derailing the MVP?',
    promptOptions: [
      {
        id: 'opt1',
        title: 'Anchor on MVP hypothesis: Log in MoSCoW "Could-Have", prioritize core STAR rubric feedback',
        description:
          'Affirm the long-term vision of multimodal analysis, but share user testing data proving that textual STAR critique accuracy is the primary driver of repeat usage. Propose testing facial recognition in Phase 2.',
        starFeedback: {
          score: '96/100 (Exemplary)',
          strengths: 'Masterful use of data-driven boundary setting, preserves team velocity while validating executive input.',
          improvement: 'Offer to set up a quick 1-day feasibility spike in parallel if capacity permits.',
          competencyScores: { leadership: 98, stakeholderManagement: 95, analyticalRigor: 95 },
        },
      },
      {
        id: 'opt2',
        title: 'Immediately agree and force team into overtime to fulfill executive wish',
        description:
          'Add emotion recognition to the sprint backlog immediately, telling engineers the executive demanded it.',
        starFeedback: {
          score: '42/100 (Poor)',
          strengths: 'None.',
          improvement: 'Shows weak ownership and absence of PM backbone; sacrifices product stability for superficial compliance.',
          competencyScores: { leadership: 35, stakeholderManagement: 50, analyticalRigor: 40 },
        },
      },
    ],
  },
];
