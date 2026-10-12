export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'AI & Data' | 'Frontend & Web' | 'Core CS' | 'Productivity & Tools';
  level: string;
  experience: string;
  highlight: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: string;
  highlights?: string[];
  tags: string[];
  image?: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationDetail {
  degree: string;
  institution: string;
  location: string;
  year: string;
  period: string;
  focusAreas: string[];
  coursework: string[];
  highlights: string[];
}
