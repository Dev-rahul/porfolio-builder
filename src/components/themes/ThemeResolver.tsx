'use client';

import { ThemeProps } from './types';
import MinimalTheme from './MinimalTheme';
import ModernTheme from './ModernTheme';
import DeveloperTheme from './DeveloperTheme';

const themes = {
  minimal: MinimalTheme,
  modern: ModernTheme,
  developer: DeveloperTheme,
};

export default function ThemeResolver({ data, projects }: ThemeProps) {
  const ThemeComponent = themes[data.theme] || MinimalTheme;
  
  return <ThemeComponent data={data} projects={projects} />;
}
