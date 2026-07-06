/**
 * Central content model for the portfolio.
 * Editing content here updates every section — no need to touch components.
 */

export const profile = {
  name: 'Erickson Dela Cruz',
  roles: ['Software Developer', 'Full Stack Developer', 'DevOps Engineer'],
  tagline: 'Software Developer • Full Stack • DevOps',
  summary:
    'Results-driven Software Developer and Cum Laude graduate with experience building scalable production-grade applications across Android, microservices, and full-stack platforms.',
  location: 'Cagayan de Oro, Philippines',
  email: 'avilasonson@gmail.com',
  // BASE_URL keeps the link correct whether served at '/' or under a Pages sub-path.
  cvUrl: import.meta.env.BASE_URL + 'Erickson_DelaCruz_CV_2026.pdf',
  socials: [
    { label: 'GitHub', icon: 'Github', url: 'https://github.com/Ye1enaaa' },
    { label: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/' },
    { label: 'Email', icon: 'Mail', url: 'mailto:avilasonson@gmail.com' },
  ],
  stats: [
    { value: '2+', label: 'Years coding' },
    { value: '4', label: 'Honors & awards' },
    { value: '∞', label: 'Coffee cups' },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    icon: 'Code2',
    accent: 'from-brand-500 to-brand-400',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Dart', level: 85 },
      { name: 'Python', level: 84 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 86 },
      { name: 'Kotlin', level: 78 },
    ],
  },
  {
    title: 'Frameworks & Tech',
    icon: 'Boxes',
    accent: 'from-accent-500 to-brand-500',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Vue.js', level: 88 },
      { name: 'Flutter', level: 84 },
      { name: 'Flask', level: 80 },
      { name: 'Android SDK', level: 82 },
      { name: 'REST APIs', level: 91 },
      { name: 'Kafka', level: 78 },
      { name: 'Microservices', level: 85 },
    ],
  },
  {
    title: 'DevOps',
    icon: 'Server',
    accent: 'from-brand-500 to-accent-400',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 82 },
      { name: 'Git', level: 92 },
      { name: 'CI/CD', level: 84 },
      { name: 'Deployment Pipelines', level: 83 },
    ],
  },
  {
    title: 'Testing',
    icon: 'FlaskConical',
    accent: 'from-accent-400 to-brand-400',
    skills: [
      { name: 'JUnit', level: 86 },
      { name: 'Mockito', level: 82 },
      { name: 'Cypress', level: 79 },
    ],
  },
]

export const timeline = [
  {
    id: 'edu-ustp',
    period: '2020 – 2024',
    role: 'B.S. in Information Technology',
    org: 'University of Science and Technology of Southern Philippines',
    type: 'education',
    icon: 'GraduationCap',
    current: false,
    points: [
      'Graduated Cum Laude',
      'Latin Honor Awardee',
      'Best in Capstone',
      'TOPCIT Awardee — Top 15',
    ],
    tags: ['Cum Laude', 'Latin Honor', 'Capstone'],
  },
  {
    id: 'intern-apollotech',
    period: 'Feb 2024 – May 2024',
    role: 'Software Developer Intern',
    org: 'Apollotech Software Corporation',
    type: 'work',
    icon: 'Code2',
    current: false,
    points: [
      'Enhanced frontend and backend components of WorkConnect',
      'Built infrastructure dashboard improvements',
      'Monitored store availability systems',
      'Improved real-time functionality',
    ],
    tags: ['Frontend', 'Backend', 'Dashboards'],
  },
  {
    id: 'swe-apollotech',
    period: 'Aug 2024 – Jun 2026',
    role: 'Software Developer / DevOps Engineer',
    org: 'Apollotech Software Corporation',
    type: 'work',
    icon: 'Rocket',
    current: true,
    points: [
      'Developed scalable software applications',
      'Designed frontend and backend systems, built APIs',
      'Worked on microservices architecture',
      'Dockerized applications and deployed to Kubernetes clusters',
      'Managed deployments, DevOps workflows and CI/CD pipelines',
      'Optimized application reliability and scalability',
      'Collaborated with cross-functional teams',
    ],
    tags: ['Microservices', 'Docker', 'Kubernetes', 'CI/CD'],
  },
]

export const projects = [
  {
    id: 'wallet',
    title: 'Digital Wallet & Loyalty Platform',
    blurb: 'Secure transfers, rewards and event-driven microservices at scale.',
    tech: ['Vue.js', 'Spring Boot', 'MySQL', 'Kafka', 'Docker'],
    points: [
      'Built core modules for a digital wallet and loyalty platform',
      'Secure transfers and rewards system',
      'REST APIs with event-driven communication',
      'Comprehensive testing implementation',
    ],
    icon: 'Wallet',
    accent: 'from-brand-500 to-accent-500',
    featured: true,
  },
  {
    id: 'asenso',
    title: 'Asenso Mobile Banking App',
    blurb: 'Reliable mobile banking with resilient backend services.',
    tech: ['Flutter', 'Python Flask'],
    points: [
      'Built and maintained a mobile banking application',
      'Debugged and stabilized backend services',
      'Improved API reliability',
    ],
    icon: 'Smartphone',
    accent: 'from-accent-500 to-brand-500',
    featured: false,
  },
  {
    id: 'terminal',
    title: 'Card Terminal Software',
    blurb: 'Android POS terminal with secure QR payment integration.',
    tech: ['Android', 'Java'],
    points: [
      'Android-based card terminal system',
      'QR payment integration',
      'Secure payment implementation',
    ],
    icon: 'CreditCard',
    accent: 'from-brand-600 to-brand-400',
    featured: false,
  },
  {
    id: 'elibease',
    title: 'E-LibEase: IoT Web Monitoring',
    blurb: 'Smart library monitoring with real-time device integration.',
    tech: ['IoT', 'Vue.js', 'Web', 'Database'],
    points: [
      'Thesis / academic project',
      'IoT-based web monitoring system',
      'Smart library monitoring and management',
      'Real-time monitoring & data visualization',
    ],
    icon: 'Radio',
    accent: 'from-accent-400 to-brand-500',
    featured: false,
  },
]

export const extraWork = {
  title: 'Academic & Freelance Systems',
  blurb:
    'Beyond flagship products, I ship a steady stream of client and academic systems — end to end.',
  items: [
    'Built multiple thesis systems',
    'Created custom management systems',
    'Full-stack development projects',
    'Database-driven applications',
    'Client-based systems',
  ],
}

export const awards = [
  {
    title: 'Cum Laude Graduate',
    desc: 'Graduated with Latin honors in Information Technology.',
    icon: 'GraduationCap',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Best in Capstone',
    desc: 'Recognized for the top capstone project of the cohort.',
    icon: 'Trophy',
    accent: 'from-brand-500 to-accent-500',
  },
  {
    title: 'TOPCIT Top 15 Awardee',
    desc: 'Ranked among the top 15 in the national TOPCIT assessment.',
    icon: 'Medal',
    accent: 'from-accent-500 to-brand-500',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]
