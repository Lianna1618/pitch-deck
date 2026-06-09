import type { IconType } from 'react-icons/lib';

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: string;
  image: string;
  category: 'mobile' | 'mini-app' | 'web' | 'smart-contract';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon?: string;
}
