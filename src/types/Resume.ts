export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  link: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
  current: boolean;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  projects: Project[];
}

export type ResumeTemplate = 'modern' | 'compact';