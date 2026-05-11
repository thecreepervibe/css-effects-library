'use client';

import { effects, categories } from '@/lib/effects-data';

export function Footer() {
  const beginnerCount = effects.filter((e) => e.difficulty === 'beginner').length;
  const intermediateCount = effects.filter((e) => e.difficulty === 'intermediate').length;
  const advancedCount = effects.filter((e) => e.difficulty === 'advanced').length;
  const totalEffects = effects.length;
  const totalCategories = categories.filter((c) => c.id !== 'all').length;

  // Find the most popular category
  const topCategory = categories
    .filter((c) => c.id !== 'all')
    .reduce((max, c) => (c.count > max.count ? c : max), categories[1]);

  return (
    <footer className="border-t border-gray-800/50 bg-[#0a0a0a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col gap-3">
          {/* Top row: Title and tech */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-300">
                CSS Effects Library
              </span>
              <span className="text-xs text-emerald-400/80 font-medium">
                — Pure CSS, No Dependencies
              </span>
            </div>
            <span className="text-xs text-gray-600">
              Built with <span className="text-gray-400">Next.js</span> & <span className="text-gray-400">Tailwind CSS</span>
            </span>
          </div>

          {/* Middle row: Stats */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold text-xs">{totalEffects}</span>
              effects
            </span>
            <span className="text-gray-800">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold text-xs">{totalCategories}</span>
              categories
            </span>
            <span className="text-gray-800">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold text-xs">100%</span>
              Pure CSS
            </span>
            <span className="text-gray-800">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold text-xs">Zero</span>
              Dependencies
            </span>
          </div>

          {/* Bottom row: Difficulty breakdown and popular category */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <span className="font-medium text-gray-400">Difficulty Breakdown:</span>
              <span>🟢 Beginner <span className="text-gray-300 font-semibold">{beginnerCount}</span></span>
              <span>🟡 Intermediate <span className="text-gray-300 font-semibold">{intermediateCount}</span></span>
              <span>🔴 Advanced <span className="text-gray-300 font-semibold">{advancedCount}</span></span>
            </div>
            <span className="text-[11px] text-gray-600">
              📜 Most Popular Category: <span className="text-gray-400 font-medium">{topCategory.name}</span>{' '}
              <span className="text-emerald-400/60">({topCategory.count} effects)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
