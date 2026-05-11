'use client';

import { useEffectsStore } from '@/lib/effects-store';
import { getTagCounts, effects, collections } from '@/lib/effects-data';
import type { Difficulty } from '@/lib/effects-data';
import { LayoutGrid, List, Shuffle, Keyboard } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  } = useEffectsStore();

  const [showTags, setShowTags] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const tagCounts = useMemo(() => getTagCounts(), []);

  // Calculate filtered count
  const filteredCount = useMemo(() => {
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

    return filtered.length;
  }, [selectedCategory, selectedCollection, selectedDifficulty, selectedTags, searchQuery]);

  const difficulties: { value: Difficulty | 'all'; label: string; emoji: string }[] = [
    { value: 'all', label: 'All Levels', emoji: '' },
    { value: 'beginner', label: 'Beginner', emoji: '🟢' },
    { value: 'intermediate', label: 'Intermediate', emoji: '🟡' },
    { value: 'advanced', label: 'Advanced', emoji: '🔴' },
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

  return (
    <div className="space-y-3">
      {/* Top toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-400">
          Showing <span className="text-emerald-400 font-semibold">{filteredCount}</span> effects
        </span>

        <div className="flex-1" />

        <button
          onClick={handleSurprise}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition-all"
        >
          <Shuffle className="w-3 h-3" />
          Surprise me
        </button>

        {/* Size slider */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[10px] text-gray-600">Size</span>
          <input
            type="range"
            min={60}
            max={140}
            value={cardSize}
            onChange={(e) => setCardSize(Number(e.target.value))}
            className="w-20 h-1 accent-emerald-500"
          />
        </div>

        {/* View toggle */}
        <div className="flex items-center border border-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 transition-all ${
              viewMode === 'grid'
                ? 'bg-emerald-500/15 text-emerald-400'
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('compact')}
            className={`p-1.5 transition-all ${
              viewMode === 'compact'
                ? 'bg-emerald-500/15 text-emerald-400'
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            <List className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setShowShortcuts(!showShortcuts)}
          className="p-1.5 text-gray-600 hover:text-gray-400 transition-colors"
          title="Keyboard shortcuts"
        >
          <Keyboard className="w-4 h-4" />
        </button>
      </div>

      {/* Difficulty filter */}
      <div className="flex flex-wrap gap-2">
        {difficulties.map((d) => (
          <button
            key={d.value}
            onClick={() => setSelectedDifficulty(d.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedDifficulty === d.value
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'bg-[#111] text-gray-500 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
            }`}
          >
            {d.emoji && <span className="mr-1">{d.emoji}</span>}
            {d.label}
          </button>
        ))}
      </div>

      {/* Tags toggle and list */}
      <div>
        <button
          onClick={() => setShowTags(!showTags)}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors mb-2"
        >
          {showTags ? '▾' : '▸'} Tags ({tagCounts.length})
        </button>
        <AnimatePresence>
          {showTags && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto custom-scrollbar pb-1">
                {tagCounts.slice(0, 30).map(({ tag, count }) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-[#111] text-gray-500 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
                    }`}
                  >
                    {tag} <span className="text-gray-600">{count}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Keyboard shortcuts popup */}
      <AnimatePresence>
        {showShortcuts && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#111] border border-gray-800 rounded-xl p-4 text-xs"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-[#1a1a2e] border border-gray-700 rounded text-gray-400 font-mono">/</kbd>
                <span className="text-gray-400">Focus search</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-[#1a1a2e] border border-gray-700 rounded text-gray-400 font-mono">Esc</kbd>
                <span className="text-gray-400">Close / Clear</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
