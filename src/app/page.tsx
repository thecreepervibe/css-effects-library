'use client';

import { useMemo } from 'react';
import { Header } from '@/components/css-effects/header';
import { Sidebar } from '@/components/css-effects/sidebar';
import { FilterToolbar } from '@/components/css-effects/filter-toolbar';
import { EffectCard } from '@/components/css-effects/effect-card';
import { EffectDetailModal } from '@/components/css-effects/effect-detail-modal';
import { Footer } from '@/components/css-effects/footer';
import { useEffectsStore } from '@/lib/effects-store';
import { effects, collections } from '@/lib/effects-data';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const {
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedTags,
    viewMode,
    cardSize,
    selectedCollection,
    setSidebarOpen,
  } = useEffectsStore();

  const filteredEffects = useMemo(() => {
    let filtered = effects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    if (selectedCollection) {
      const col = collections.find((c) => c.id === selectedCollection);
      if (col) {
        filtered = filtered.filter((e) => col.effectIds.includes(e.id));
      }
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter((e) => e.difficulty === selectedDifficulty);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((e) =>
        selectedTags.some((tag) => e.tags.includes(tag))
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.tags.some((t) => t.toLowerCase().includes(q)) ||
          e.category.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTags, selectedCollection]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-gray-100">
      {/* Top section: Header */}
      <header className="w-full border-b border-gray-800/30 bg-[#0a0a0a] sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2 mb-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-[#111] border border-gray-800 rounded-lg text-gray-400 text-sm"
            >
              <Menu className="w-4 h-4" />
              Categories
            </button>
            <span className="text-xs text-gray-600">
              {filteredEffects.length} effects
            </span>
          </div>
          <Header />
        </div>
      </header>

      {/* Main content area */}
      <div className="flex-1 flex max-w-[1600px] mx-auto w-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 min-w-0 px-3 sm:px-4 md:px-6 py-4">
          <FilterToolbar />

          {/* Effects grid / list */}
          <div className="mt-4">
            {filteredEffects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">No effects found</h3>
                <p className="text-sm text-gray-600">
                  Try adjusting your filters or search query
                </p>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <div
                className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{
                  gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(200, cardSize * 2.2)}px, 1fr))`,
                }}
              >
                <AnimatePresence mode="popLayout">
                  {filteredEffects.map((effect, index) => (
                    <EffectCard key={effect.id} effect={effect} index={index} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                  {filteredEffects.map((effect, index) => (
                    <EffectCard key={effect.id} effect={effect} index={index} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      <EffectDetailModal />
    </div>
  );
}
