'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { Search, Shuffle, Moon, Sun, Sparkles, Layers, Code2, Package } from 'lucide-react';
import { useEffectsStore } from '@/lib/effects-store';
import { effects } from '@/lib/effects-data';
import { motion, AnimatePresence } from 'framer-motion';

// Subtle particle dots for the header background
function HeaderParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    // Fewer, more subtle particles
    const numParticles = 20;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        // Smaller, fainter particles
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export function Header() {
  const { searchQuery, setSearchQuery, setSelectedEffectId, filteredCount } = useEffectsStore();
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

  const handleRandom = useCallback(() => {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setSelectedEffectId(randomEffect.id);
  }, [setSelectedEffectId]);

  const handleToggleTheme = useCallback(() => {
    document.documentElement.classList.toggle('dark');
    const isNowDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isNowDark);
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  }, []);

  const totalEffects = effects.length;
  const totalCategories = 38;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-6 relative"
    >
      {/* Particle background - more subtle with lower opacity */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-40">
        <HeaderParticles />
      </div>

      {/* Subtle gradient overlay behind text for readability */}
      <div className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10, 10, 10, 0.6) 0%, transparent 70%)',
        }}
      />

      {/* Badge with shimmer */}
      <div className="relative inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-3 overflow-hidden">
        <div className="absolute inset-0 shimmer-gradient" />
        <Sparkles className="w-3 h-3 text-emerald-400/60 relative z-10" />
        <span className="text-emerald-400/70 text-[10px] font-medium tracking-wider uppercase relative z-10">CSS EFFECTS LAB</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight relative z-10">
        CSS{' '}
        <span
          className="gradient-text-animate"
          style={{
            background: 'linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 4s ease infinite',
          }}
        >
          Effects
        </span>{' '}
        Library
      </h1>
      <p className="text-gray-500 max-w-2xl mx-auto mb-5 text-sm relative z-10">
        A curated collection of beautiful CSS effects with live preview &amp; ready-to-use code. Copy, paste, and create magic. ✨
      </p>

      {/* Search Bar - full width on mobile */}
      <div className="flex items-center gap-3 max-w-lg mx-auto mb-5 px-2 sm:px-0 relative z-10">
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
          <span className="hidden sm:inline">Random</span>
        </button>
        <button
          onClick={handleToggleTheme}
          className="flex items-center justify-center w-10 h-10 bg-[#111] border border-gray-800 rounded-xl text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all shrink-0"
          title="Toggle theme"
        >
          {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>

      {/* Stats Row - larger and more prominent pills */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
        {[
          { icon: Sparkles, label: 'Effects', value: totalEffects.toString(), color: 'text-emerald-400' },
          { icon: Layers, label: 'Categories', value: totalCategories.toString(), color: 'text-emerald-400' },
          { icon: Code2, label: 'Pure CSS', value: '100%', color: 'text-emerald-400' },
          { icon: Package, label: 'Dependencies', value: 'Zero', color: 'text-emerald-400' },
        ].map((stat) => (
          <div key={stat.label} className="flex items-center gap-2 bg-[#111]/70 px-4 py-2 rounded-xl border border-gray-800/40">
            <stat.icon className={`w-4 h-4 ${stat.color} opacity-70`} />
            <span className={`${stat.color} font-bold text-sm`}>{stat.value}</span>
            <span className="text-gray-500 text-xs">{stat.label}</span>
          </div>
        ))}

        {/* Animated counter badge showing filtered count */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredCount}
            initial={{ scale: 1.2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20"
          >
            <span className="text-emerald-400 font-bold text-sm">{filteredCount}</span>
            <span className="text-emerald-400/70 text-xs">matching</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
