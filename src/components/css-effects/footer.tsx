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

  // Difficulty percentages for bars
  const maxCount = Math.max(beginnerCount, intermediateCount, advancedCount);
  const beginnerPct = (beginnerCount / maxCount) * 100;
  const intermediatePct = (intermediateCount / maxCount) * 100;
  const advancedPct = (advancedCount / maxCount) * 100;

  return (
    <footer className="relative mt-auto">
      {/* Top gradient border (emerald fade) */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #10b98140, #10b981, #10b98140, transparent)',
        }}
      />

      <div className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col gap-4">
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

            {/* Bottom row: Difficulty breakdown with bars */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-medium text-gray-400">Difficulty Breakdown</span>

                {/* Beginner bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-500">Beginner</span>
                  <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${beginnerPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold">{beginnerCount}</span>
                </div>

                {/* Intermediate bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-500">Intermediate</span>
                  <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                      style={{ width: `${intermediatePct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-yellow-400 font-semibold">{intermediateCount}</span>
                </div>

                {/* Advanced bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-500">Advanced</span>
                  <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-500"
                      style={{ width: `${advancedPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-red-400 font-semibold">{advancedCount}</span>
                </div>
              </div>

              <span className="text-[11px] text-gray-600">
                📜 Most Popular: <span className="text-gray-400 font-medium">{topCategory.name}</span>{' '}
                <span className="text-emerald-400/60">({topCategory.count} effects)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
