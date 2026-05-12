'use client';

import { useEffectsStore } from '@/lib/effects-store';
import { getTagCounts, effects, collections } from '@/lib/effects-data';
import type { Difficulty } from '@/lib/effects-data';
import { LayoutGrid, List, Shuffle, Keyboard, X } from 'lucide-react';
import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function FilterToolbar() {
  const {
    selectedDifficulty,
    setSelectedDifficulty,
    selectedTags,
    toggleTag,
    viewMode,
    setViewMode,
    cardSize,
    setCardSize,
    selectedCategory,
    selectedCollection,
    searchQuery,
    setSelectedEffectId,
    clearAllFilters,
    visibleCount,
    loadMore,
    showAll,
    theme,
  } = useEffectsStore();

  const isDark = theme === 'dark';
  const tagCounts = useMemo(() => getTagCounts(), []);

  // Calculate filtered count
  const filteredCount = useMemo(() => {
    let filtered = effects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    if (selectedCollection === 'favorites') {
      const favs = useEffectsStore.getState().favorites;
      filtered = filtered.filter((e) => favs.includes(e.id));
    } else if (selectedCollection) {
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

    return filtered.length;
  }, [selectedCategory, selectedCollection, selectedDifficulty, selectedTags, searchQuery]);

  const hasActiveFilters = selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedTags.length > 0 || selectedCollection !== null || searchQuery.trim() !== '';

  const difficulties: { value: Difficulty | 'all'; label: string; emoji: string; glowColor: string }[] = [
    { value: 'all', label: 'All Levels', emoji: '', glowColor: '' },
    { value: 'beginner', label: 'Beginner', emoji: '🟢', glowColor: 'rgba(16,185,129,0.3)' },
    { value: 'intermediate', label: 'Intermediate', emoji: '🟡', glowColor: 'rgba(234,179,8,0.3)' },
    { value: 'advanced', label: 'Advanced', emoji: '🔴', glowColor: 'rgba(239,68,68,0.3)' },
  ];

  const handleSurprise = () => {
    let pool = effects;
    if (selectedCategory !== 'all') {
      pool = pool.filter((e) => e.category === selectedCategory);
    }
    if (pool.length > 0) {
      const random = pool[Math.floor(Math.random() * pool.length)];
      setSelectedEffectId(random.id);
    }
  };

  const handleClearAll = () => {
    clearAllFilters();
    toast('All filters cleared', { duration: 1500 });
  };

  // Active filter chips data
  const activeFilters: { label: string; onClear: () => void }[] = [];
  if (selectedCategory !== 'all') {
    activeFilters.push({
      label: `Category: ${selectedCategory}`,
      onClear: () => useEffectsStore.getState().setSelectedCategory('all'),
    });
  }
  if (selectedCollection) {
    if (selectedCollection === 'favorites') {
      activeFilters.push({
        label: 'Favorites',
        onClear: () => useEffectsStore.getState().setSelectedCollection(null),
    });
    } else {
      const col = collections.find((c) => c.id === selectedCollection);
      if (col) {
        activeFilters.push({
          label: `Collection: ${col.name}`,
          onClear: () => useEffectsStore.getState().setSelectedCollection(null),
        });
      }
    }
  }
  if (selectedDifficulty !== 'all') {
    activeFilters.push({
      label: `Difficulty: ${selectedDifficulty}`,
      onClear: () => setSelectedDifficulty('all'),
    });
  }
  selectedTags.forEach((tag) => {
    activeFilters.push({
      label: `Tag: ${tag}`,
      onClear: () => toggleTag(tag),
    });
  });
  if (searchQuery.trim()) {
    activeFilters.push({
      label: `Search: "${searchQuery}"`,
      onClear: () => useEffectsStore.getState().setSearchQuery(''),
    });
  }

  const showingCount = Math.min(visibleCount, filteredCount);

  return (
    <div className="space-y-3">
      {/* Top toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Showing <span className="text-emerald-400 font-semibold">{showingCount}</span> of <span className="text-emerald-400 font-semibold">{filteredCount}</span> effects
        </span>

        <div className="flex-1" />

        {hasActiveFilters && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-all"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}

        <button
          onClick={handleSurprise}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-all"
        >
          <Shuffle className="w-3 h-3" />
          Surprise me
        </button>

        {/* Size slider */}
        <div className="hidden sm:flex items-center gap-2">
          <span className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Size</span>
          <input
            type="range"
            min={60}
            max={140}
            value={cardSize}
            onChange={(e) => setCardSize(Number(e.target.value))}
            className="w-20 h-1 accent-emerald-500"
            aria-label="Card size"
          />
        </div>

        {/* View toggle */}
        <div className={`flex items-center border rounded-lg overflow-hidden ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 transition-all ${
              viewMode === 'grid'
                ? 'bg-emerald-500/15 text-emerald-400'
                : isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('compact')}
            className={`p-1.5 transition-all ${
              viewMode === 'compact'
                ? 'bg-emerald-500/15 text-emerald-400'
                : isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'
            }`}
            aria-label="Compact view"
          >
            <List className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          className={`p-1.5 transition-colors ${isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`}
          title="Keyboard shortcuts: / to search, ↑↓ to navigate, Enter to open, Esc to close"
          aria-label="Keyboard shortcuts"
        >
          <Keyboard className="w-4 h-4" />
        </button>
      </div>

      {/* Active filter chips */}
      <AnimatePresence>
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-1.5 overflow-hidden"
          >
            {activeFilters.map((filter) => (
              <button
                key={filter.label}
                onClick={filter.onClear}
                className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] text-emerald-400 hover:bg-emerald-500/20 transition-all"
              >
                {filter.label}
                <X className="w-2.5 h-2.5" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Difficulty filter with glow */}
      <div className="flex flex-wrap gap-2">
        {difficulties.map((d) => (
          <button
            key={d.value}
            onClick={() => setSelectedDifficulty(d.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedDifficulty === d.value
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : isDark
                  ? 'bg-[#111] text-gray-500 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
                  : 'bg-gray-50 text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
            }`}
            style={
              selectedDifficulty === d.value && d.glowColor
                ? { boxShadow: `0 0 12px ${d.glowColor}` }
                : undefined
            }
          >
            {d.emoji && <span className="mr-1">{d.emoji}</span>}
            {d.label}
          </button>
        ))}
      </div>

      {/* Tags - shown by default */}
      <div>
        <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto custom-scrollbar pb-1">
          {tagCounts.slice(0, 30).map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                selectedTags.includes(tag)
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : isDark
                    ? 'bg-[#111] text-gray-500 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tag} <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Load More / Show All pagination */}
      {visibleCount < filteredCount && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={loadMore}
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all"
          >
            Load More (+24)
          </button>
          <button
            onClick={showAll}
            className={`flex items-center gap-2 px-6 py-2.5 border rounded-xl text-sm font-medium transition-all ${
              isDark
                ? 'bg-[#111] border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700'
                : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Show All ({filteredCount})
          </button>
        </div>
      )}
    </div>
  );
}
