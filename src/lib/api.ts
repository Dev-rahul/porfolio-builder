import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PortfolioData, ProjectData } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');
const projectsDirectory = path.join(contentDirectory, 'projects');

export function getPortfolioData(): PortfolioData {
  const fullPath = path.join(contentDirectory, 'portfolio.json');
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents) as PortfolioData;
  } catch (error) {
    console.error("Error reading portfolio.json:", error);
    // Return default empty data if it fails
    return {
      name: "Your Name",
      title: "Your Title",
      bio: "Your bio here.",
      email: "hello@example.com",
      socialLinks: [],
      theme: "minimal",
      skills: [],
      experience: [],
      education: [],
      certifications: [],
    };
  }
}

export function getProjects(): ProjectData[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          body: matterResult.content,
          ...matterResult.data,
        } as ProjectData;
      });

    return allProjectsData;
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}
