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
  startYear: string;
  endYear: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startYear: string;
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
}

export type ResumeTemplate = 'modern' | 'compact';