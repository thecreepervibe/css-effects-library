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
      {/* Top gradient border (emerald fade) - more prominent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent 5%, #10b98130, #10b981, #10b98130, transparent 95%)',
        }}
      />

      <div className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col gap-5">
            {/* Top row: Title and tech */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-base font-bold text-gray-200">
                  CSS Effects Library
                </span>
                <span className="text-sm text-emerald-400/80 font-medium">
                  — Pure CSS, No Dependencies
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Built with <span className="text-gray-300">Next.js</span> & <span className="text-gray-300">Tailwind CSS</span>
              </span>
            </div>

            {/* Middle row: Stats - more prominent */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-base">{totalEffects}</span>
                effects
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-base">{totalCategories}</span>
                categories
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-base">100%</span>
                Pure CSS
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-base">Zero</span>
                Dependencies
              </span>
            </div>

            {/* Bottom row: Difficulty breakdown with more prominent bars */}
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium text-gray-300">Difficulty Breakdown</span>

                {/* Beginner bar */}
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-gray-400 w-24">Beginner</span>
                  <div className="w-24 h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${beginnerPct}%` }}
                    />
                  </div>
                  <span className="text-sm text-emerald-400 font-bold w-8">{beginnerCount}</span>
                </div>

                {/* Intermediate bar */}
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-gray-400 w-28">Intermediate</span>
                  <div className="w-24 h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                      style={{ width: `${intermediatePct}%` }}
                    />
                  </div>
                  <span className="text-sm text-yellow-400 font-bold w-8">{intermediateCount}</span>
                </div>

                {/* Advanced bar */}
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-gray-400 w-20">Advanced</span>
                  <div className="w-24 h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-500"
                      style={{ width: `${advancedPct}%` }}
                    />
                  </div>
                  <span className="text-sm text-red-400 font-bold w-8">{advancedCount}</span>
                </div>
              </div>

              <span className="text-sm text-gray-500">
                📜 Most Popular: <span className="text-gray-300 font-medium">{topCategory.name}</span>{' '}
                <span className="text-emerald-400/60">({topCategory.count} effects)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
