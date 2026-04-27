'use client';

import { useState } from 'react';
import { ThemeProps } from './types';
import MinimalTheme from './MinimalTheme';
import ModernTheme from './ModernTheme';
import DeveloperTheme from './DeveloperTheme';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const themes = {
  minimal: MinimalTheme,
  modern: ModernTheme,
  developer: DeveloperTheme,
};

type Theme = 'minimal' | 'modern' | 'developer';

export default function ThemeResolver({ data, projects }: ThemeProps) {
  const [activeTheme, setActiveTheme] = useState<Theme>(data.theme || 'minimal');
  const ThemeComponent = themes[activeTheme] || MinimalTheme;

  return (
    <>
      <ThemeComponent data={{ ...data, theme: activeTheme }} projects={projects} />
      <ThemeSwitcher currentTheme={activeTheme} onSwitch={setActiveTheme} />
    </>
  );
}

