'use client';

import { useRef, useEffect, useState } from 'react';
import { Search, Shuffle, Moon, Sun, Sparkles, Layers, Code2, Package } from 'lucide-react';
import { useEffectsStore } from '@/lib/effects-store';
import { effects } from '@/lib/effects-data';
import { motion } from 'framer-motion';

export function Header() {
  const { searchQuery, setSearchQuery, setSelectedEffectId } = useEffectsStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') {
        document.documentElement.classList.remove('dark');
        return false;
      }
      document.documentElement.classList.add('dark');
    }
    return true;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setSearchQuery('');
        setSelectedEffectId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchQuery, setSelectedEffectId]);

  const handleRandom = () => {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setSelectedEffectId(randomEffect.id);
  };

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const isNowDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isNowDark);
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  };

  const totalEffects = effects.length;
  const totalCategories = 38;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-6"
    >
      {/* Badge - smaller and more subtle */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-3">
        <Sparkles className="w-3 h-3 text-emerald-400/60" />
        <span className="text-emerald-400/70 text-[10px] font-medium tracking-wider uppercase">CSS EFFECTS LAB</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
        CSS <span className="text-emerald-400">Effects</span> Library
      </h1>
      <p className="text-gray-500 max-w-2xl mx-auto mb-5 text-sm">
        A curated collection of beautiful CSS effects with live preview &amp; ready-to-use code. Copy, paste, and create magic. ✨
      </p>

      {/* Search Bar */}
      <div className="flex items-center gap-3 max-w-lg mx-auto mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search effects... (press / to focus)"
            className="w-full pl-10 pr-4 py-2.5 bg-[#111] border border-gray-800 rounded-xl text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
          />
        </div>
        <button
          onClick={handleRandom}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all shrink-0"
        >
          <Shuffle className="w-4 h-4" />
          Random
        </button>
        <button
          onClick={handleToggleTheme}
          className="flex items-center justify-center w-10 h-10 bg-[#111] border border-gray-800 rounded-xl text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all shrink-0"
          title="Toggle theme"
        >
          {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>

      {/* Stats Row - more prominent with icons */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {[
          { icon: Sparkles, label: 'Effects', value: totalEffects.toString(), color: 'text-emerald-400' },
          { icon: Layers, label: 'Categories', value: totalCategories.toString(), color: 'text-emerald-400' },
          { icon: Code2, label: 'Pure CSS', value: '100%', color: 'text-emerald-400' },
          { icon: Package, label: 'Dependencies', value: 'Zero', color: 'text-emerald-400' },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2 bg-[#111]/50 px-3 py-1.5 rounded-lg border border-gray-800/30">
            <stat.icon className={`w-3.5 h-3.5 ${stat.color} opacity-70`} />
            <span className={`${stat.color} font-bold text-sm`}>{stat.value}</span>
            <span className="text-gray-500 text-xs">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
