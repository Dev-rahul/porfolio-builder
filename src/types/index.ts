export interface SocialLink {
  platform: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  profileImage?: string;
  email: string;
  socialLinks: SocialLink[];
  theme: 'minimal' | 'modern' | 'developer';
  skills: SkillCategory[];
  experience: Experience[];
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  liveLink?: string;
  githubLink?: string;
  body: string;
}
