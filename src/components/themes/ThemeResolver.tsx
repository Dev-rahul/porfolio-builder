'use client';

import { ThemeProps } from './types';
import MinimalTheme from './MinimalTheme';
import ModernTheme from './ModernTheme';
import DeveloperTheme from './DeveloperTheme';
import BentoTheme from './BentoTheme';
import GlassTheme from './GlassTheme';
import BrutalistTheme from './BrutalistTheme';
import TimelineTheme from './TimelineTheme';
import CyberpunkTheme from './CyberpunkTheme';
import CreativeTheme from './CreativeTheme';
import ZenTheme from './ZenTheme';

const themes = {
  minimal: MinimalTheme,
  modern: ModernTheme,
  developer: DeveloperTheme,
  bento: BentoTheme,
  glass: GlassTheme,
  brutalist: BrutalistTheme,
  timeline: TimelineTheme,
  cyberpunk: CyberpunkTheme,
  creative: CreativeTheme,
  zen: ZenTheme,
};

export default function ThemeResolver({ data, projects }: ThemeProps) {
  const ThemeComponent = themes[data.theme] || MinimalTheme;
  return <ThemeComponent data={data} projects={projects} />;
}

