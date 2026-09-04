export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  university: string;
  description: string;
  tagline: string;
  url: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface PillarItem {
  id: string;
  title: string;
  society: 'CS' | 'CIS' | 'RESEARCH' | 'COMMUNITY';
  tagline: string;
  description: string;
  topics: string[];
  accentColor: 'orange' | 'cyan' | 'blue' | 'slate';
}

export interface ManifestoStep {
  label: string;
  emphasis: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  society: 'CS' | 'CIS' | 'JOINT';
  tagline: string;
  description: string;
  keyQuestions: string[];
  applications: string[];
  technologies: string[];
  status: 'active' | 'exploratory';
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Workshop' | 'Tech Talk' | 'Hackathon' | 'Bootcamp' | 'Panel';
  date: string;
  time: string;
  location: string;
  modality: 'Presencial' | 'Híbrido' | 'Virtual';
  status: 'upcoming' | 'featured' | 'past';
  summary: string;
  speaker?: string;
  speakerRole?: string;
  registrationUrl?: string;
  image: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  featured: boolean;
  society: 'CS' | 'CIS' | 'CONVERGENCE';
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  team: string[];
  status: 'Desarrollo Activo' | 'Completado' | 'Investigación';
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Liderazgo' | 'Desarrollo & IA' | 'Asesoría';
  focus: string[];
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
}
