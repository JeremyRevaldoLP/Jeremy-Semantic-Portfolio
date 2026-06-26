// ===== Profile Data Types =====

export interface PersonalInfo {
  fullName: string;
  title: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  website: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  gpa: number;
  coursework: string[];
  description: string;
}

export interface Experience {
  position: string;
  organization: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
  type: 'internship' | 'part-time' | 'freelance' | 'project';
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  status: 'completed' | 'in-progress' | 'planned';
  type: 'academic' | 'personal' | 'freelance';
  highlights: string[];
}

export interface Organization {
  name: string;
  role: string;
  period: string;
  description: string;
  type: 'student-org' | 'community' | 'event' | 'team';
}

export interface RDFTriple {
  subject: string;
  predicate: string;
  object: string;
  subjectType?: string;
  objectType?: string;
}

export interface SchemaEntity {
  type: string;
  description: string;
  properties: Record<string, string>;
}

export type ThemeMode = 'light' | 'dark';

export interface NavItem {
  id: string;
  label: string;
}
