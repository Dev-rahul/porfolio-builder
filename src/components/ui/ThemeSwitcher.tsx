'use client';

import { useState } from 'react';
import { Palette, X } from 'lucide-react';

const THEMES = [
  { key: 'minimal', label: 'Minimal', icon: '✦', desc: 'Clean & typographic' },
  { key: 'modern', label: 'Modern', icon: '◈', desc: 'Cards & gradients' },
  { key: 'developer', label: 'Developer', icon: '⌨', desc: 'Dark & terminal' },
] as const;

type Theme = 'minimal' | 'modern' | 'developer';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onSwitch: (theme: Theme) => void;
}

export default function ThemeSwitcher({ currentTheme, onSwitch }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Theme options */}
      {open && (
        <div className="flex flex-col gap-2 mb-2">
          {THEMES.map((theme) => (
            <button
              key={theme.key}
              onClick={() => { onSwitch(theme.key); setOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium shadow-lg border transition-all duration-200 backdrop-blur-sm
                ${currentTheme === theme.key
                  ? 'bg-indigo-600 text-white border-indigo-500 scale-105'
                  : 'bg-white/90 text-gray-800 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300'
                }`}
            >
              <span className="text-lg leading-none">{theme.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{theme.label}</div>
                <div className={`text-xs ${currentTheme === theme.key ? 'text-indigo-200' : 'text-gray-400'}`}>
                  {theme.desc}
                </div>
              </div>
              {currentTheme === theme.key && (
                <span className="ml-auto text-xs bg-white/20 rounded-full px-2 py-0.5">Active</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border-4 border-white"
        title="Switch Theme"
      >
        {open ? <X className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
      </button>
    </div>
  );
}
