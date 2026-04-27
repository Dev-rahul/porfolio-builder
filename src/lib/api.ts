import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PortfolioData, ProjectData } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');
const projectsDirectory = path.join(contentDirectory, 'projects');

export function getPortfolioData(): PortfolioData {
  const portfolioPath = path.join(contentDirectory, 'portfolio.json');
  const themePath = path.join(contentDirectory, 'theme.json');
  
  let portfolioData: Partial<PortfolioData> = {};
  let theme: PortfolioData['theme'] = 'minimal';

  try {
    const fileContents = fs.readFileSync(portfolioPath, 'utf8');
    portfolioData = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading portfolio.json:", error);
  }

  try {
    const themeContents = fs.readFileSync(themePath, 'utf8');
    const themeData = JSON.parse(themeContents);
    theme = themeData.theme || 'minimal';
  } catch (error) {
    console.error("Error reading theme.json:", error);
  }

  return {
    name: portfolioData.name || "Your Name",
    title: portfolioData.title || "Your Title",
    bio: portfolioData.bio || "Your bio here.",
    profileImage: portfolioData.profileImage,
    email: portfolioData.email || "hello@example.com",
    socialLinks: portfolioData.socialLinks || [],
    theme,
    skills: portfolioData.skills || [],
    experience: portfolioData.experience || [],
    education: portfolioData.education || [],
    certifications: portfolioData.certifications || [],
  };
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
