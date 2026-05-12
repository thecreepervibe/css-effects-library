'use client';

import { effects, categories } from '@/lib/effects-data';
import { useEffectsStore } from '@/lib/effects-store';
import { Heart, Github, Twitter, Code2, Sparkles, Layers, BookOpen, ExternalLink, Circle, Zap, Flame, Download, Star, Users } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

// Animated counter component for footer - self-contained with IntersectionObserver
function AnimatedCounter({ target, className }: { target: number; className?: string }) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className={`footer-counter ${className || ''}`}>{value}</span>;
}

export function Footer() {
  const { theme } = useEffectsStore();
  const isDark = theme === 'dark';

  const beginnerCount = effects.filter((e) => e.difficulty === 'beginner').length;
  const intermediateCount = effects.filter((e) => e.difficulty === 'intermediate').length;
  const advancedCount = effects.filter((e) => e.difficulty === 'advanced').length;
  const totalEffects = effects.length;
  const totalCategories = categories.filter((c) => c.id !== 'all').length;

  // Find the most popular category
  const topCategory = categories
    .filter((c) => c.id !== 'all')
    .reduce((max, c) => (c.count > max.count ? c : max), categories[1]);

  // Difficulty percentages for bars
  const maxCount = Math.max(beginnerCount, intermediateCount, advancedCount);
  const beginnerPct = (beginnerCount / maxCount) * 100;
  const intermediatePct = (intermediateCount / maxCount) * 100;
  const advancedPct = (advancedCount / maxCount) * 100;

  const quickLinks = [
    { icon: Sparkles, label: 'All Effects', href: '#', count: totalEffects },
    { icon: Layers, label: 'Categories', href: '#', count: totalCategories },
    { icon: Code2, label: 'Beginner', href: '#', count: beginnerCount },
    { icon: BookOpen, label: 'Documentation', href: '#' },
  ];

  // Community stats (fake but realistic)
  const communityStats = [
    { icon: Download, label: 'Downloads', value: '12K+' },
    { icon: Star, label: 'Stars', value: '500+' },
    { icon: Users, label: 'Contributors', value: '48' },
    { icon: Heart, label: 'Users', value: '3.2K' },
  ];

  return (
    <footer className="relative mt-auto" role="contentinfo">
      {/* Wave SVG separator */}
      <div className="overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          className="footer-wave-anim"
          viewBox="0 0 2400 80"
          preserveAspectRatio="none"
          style={{ width: '200%', height: 40, display: 'block' }}
        >
          <path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 C1400,80 1600,0 1800,40 C2000,80 2200,0 2400,40 L2400,80 L0,80 Z"
            fill={isDark ? '#0a0a0a' : '#f5f5f5'}
            opacity="0.5"
          />
          <path
            d="M0,50 C300,20 500,70 800,40 C1100,10 1300,70 1600,40 C1900,10 2100,70 2400,40 L2400,80 L0,80 Z"
            fill={isDark ? '#0a0a0a' : '#f5f5f5'}
          />
        </svg>
      </div>

      {/* Top gradient border with animation */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] footer-gradient-anim"
      />

      <div className={isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand & Description */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-lg font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  CSS Effects Library
                </span>
              </div>
              <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                A curated collection of <AnimatedCounter target={totalEffects} className="text-emerald-400 font-bold" /> beautiful CSS effects with live preview &amp; ready-to-use code. Pure CSS, zero dependencies.
              </p>
              {/* "Pure CSS, No Dependencies" badge - with shimmer */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl footer-shimmer-badge">
                <Sparkles className="w-4 h-4 text-emerald-400 relative z-10" />
                <span className="text-sm text-emerald-400 font-bold relative z-10">Pure CSS, No Dependencies</span>
              </div>

              {/* Social Links with bounce up on hover */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="#"
                  className={`p-2 rounded-lg border transition-all social-link-bounce ${
                    isDark
                      ? 'border-gray-800 text-gray-500 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10'
                      : 'border-gray-200 text-gray-400 hover:text-emerald-600 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
                  }`}
                  aria-label="GitHub"
                  onClick={(e) => e.preventDefault()}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className={`p-2 rounded-lg border transition-all social-link-bounce ${
                    isDark
                      ? 'border-gray-800 text-gray-500 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10'
                      : 'border-gray-200 text-gray-400 hover:text-emerald-600 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
                  }`}
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className={`p-2 rounded-lg border transition-all social-link-bounce ${
                    isDark
                      ? 'border-gray-800 text-gray-500 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10'
                      : 'border-gray-200 text-gray-400 hover:text-emerald-600 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
                  }`}
                  aria-label="Code examples"
                  onClick={(e) => e.preventDefault()}
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`flex items-center gap-2 text-sm transition-colors ${
                        isDark ? 'text-gray-500 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <link.icon className="w-3.5 h-3.5" />
                      {link.label}
                      {link.count && <span className="text-emerald-400/60 text-xs">({link.count})</span>}
                      <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Difficulty Breakdown */}
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Difficulty Breakdown
              </h3>
              <div className="space-y-3">
                {/* Beginner bar with tiny icon */}
                <div className="flex items-center gap-2.5">
                  <Circle className="w-3 h-3 text-emerald-400 fill-current shrink-0" />
                  <span className={`text-sm w-24 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Beginner</span>
                  <div className={`w-24 h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${beginnerPct}%` }}
                    />
                  </div>
                  <AnimatedCounter target={beginnerCount} className="text-sm text-emerald-400 font-bold w-8" />
                </div>

                {/* Intermediate bar with tiny icon */}
                <div className="flex items-center gap-2.5">
                  <Zap className="w-3 h-3 text-yellow-400 fill-current shrink-0" />
                  <span className={`text-sm w-24 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Intermediate</span>
                  <div className={`w-24 h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                      style={{ width: `${intermediatePct}%` }}
                    />
                  </div>
                  <AnimatedCounter target={intermediateCount} className="text-sm text-yellow-400 font-bold w-8" />
                </div>

                {/* Advanced bar with tiny icon */}
                <div className="flex items-center gap-2.5">
                  <Flame className="w-3 h-3 text-red-400 fill-current shrink-0" />
                  <span className={`text-sm w-24 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Advanced</span>
                  <div className={`w-24 h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-500"
                      style={{ width: `${advancedPct}%` }}
                    />
                  </div>
                  <AnimatedCounter target={advancedCount} className="text-sm text-red-400 font-bold w-8" />
                </div>
              </div>

              <p className={`text-sm mt-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Most Popular: <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{topCategory.name}</span>{' '}
                <span className="text-emerald-400/60">({topCategory.count} effects)</span>
              </p>
            </div>

            {/* Column 4: Backed by the CSS Community */}
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Backed by the CSS Community
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {communityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center p-3 rounded-xl border community-stat-card ${
                      isDark
                        ? 'bg-[#111] border-gray-800/50'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <stat.icon className={`w-4 h-4 mb-1 ${isDark ? 'text-emerald-400/60' : 'text-emerald-600/60'}`} />
                    <span className={`text-lg font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{stat.value}</span>
                    <span className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            <div className={`text-sm flex items-center gap-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Built with <Heart className="w-3 h-3 text-red-400 fill-current" /> by CSS Effects Lab
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Built with <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Next.js</span> & <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>
                <AnimatedCounter target={totalEffects} className="text-emerald-400 font-bold" /> effects
              </span>
              <span className={isDark ? 'text-gray-700' : 'text-gray-300'}>•</span>
              <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>
                <AnimatedCounter target={totalCategories} className="text-emerald-400 font-bold" /> categories
              </span>
              <span className={isDark ? 'text-gray-700' : 'text-gray-300'}>•</span>
              <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>
                <span className="text-emerald-400 font-bold">100%</span> Pure CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
