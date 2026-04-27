import { getPortfolioData, getProjects } from '@/lib/api';
import ThemeResolver from '@/components/themes/ThemeResolver';

export default function Home() {
  const data = getPortfolioData();
  const projects = getProjects();

  return <ThemeResolver data={data} projects={projects} />;
}
