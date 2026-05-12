'use client';

import { useEffectsStore, featuredEffectIds, getCategoryColor } from '@/lib/effects-store';
import { getTagCounts, effects, collections, categories } from '@/lib/effects-data';
import type { Difficulty } from '@/lib/effects-data';
import { LayoutGrid, List, Shuffle, Keyboard, X, Download, FileDown, Heart, GitCompare, RotateCcw, ChevronDown } from 'lucide-react';
import { useMemo, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

// Batch export: generate HTML file with multiple effects
function generateBatchHTML(effectIds: string[], title: string): string {
  const selectedEffects = effects.filter((e) => effectIds.includes(e.id));

  const effectsHTML = selectedEffects.map((effect) => `
    <div class="effect-item">
      <div class="effect-header">
        <h3>${effect.name}</h3>
        <span class="difficulty ${effect.difficulty}">${effect.difficulty}</span>
      </div>
      <p class="description">${effect.description}</p>
      <div class="preview-container">
        <style>${effect.cssCode}</style>
        ${effect.htmlCode}
      </div>
      <details>
        <summary>CSS Code</summary>
        <pre><code>${effect.cssCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      </details>
      <details>
        <summary>HTML Code</summary>
        <pre><code>${effect.htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      </details>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #e5e5e5;
      padding: 2rem;
    }
    h1 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(90deg, #10b981, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      text-align: center;
      color: #666;
      font-size: 0.875rem;
      margin-bottom: 2rem;
    }
    .effects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .effect-item {
      background: #111;
      border: 1px solid #222;
      border-radius: 12px;
      padding: 1.25rem;
    }
    .effect-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }
    .effect-header h3 {
      font-size: 1rem;
      font-weight: 600;
      color: #e5e5e5;
    }
    .difficulty {
      font-size: 0.625rem;
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
      font-weight: 500;
    }
    .difficulty.beginner { background: rgba(16,185,129,0.15); color: #34d399; }
    .difficulty.intermediate { background: rgba(234,179,8,0.15); color: #fbbf24; }
    .difficulty.advanced { background: rgba(239,68,68,0.15); color: #f87171; }
    .description {
      font-size: 0.75rem;
      color: #666;
      margin-bottom: 1rem;
    }
    .preview-container {
      background: #0a0a0a;
      border-radius: 8px;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 120px;
      margin-bottom: 1rem;
    }
    details {
      margin-top: 0.5rem;
    }
    summary {
      cursor: pointer;
      font-size: 0.75rem;
      color: #10b981;
      padding: 0.25rem 0;
    }
    pre {
      background: #0a0a0a;
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      font-size: 0.75rem;
      line-height: 1.5;
      color: #9ca3af;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p class="subtitle">${selectedEffects.length} CSS effects from CSS Effects Library</p>
  <div class="effects-grid">
    ${effectsHTML}
  </div>
</body>
</html>`;
}

function doDownload(htmlContent: string, filename: string) {
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Keyboard Shortcuts Dialog
function KeyboardShortcutsDialog() {
  const { keyboardShortcutsOpen, setKeyboardShortcutsOpen, theme } = useEffectsStore();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && keyboardShortcutsOpen) {
        setKeyboardShortcutsOpen(false);
      }
    };
    if (keyboardShortcutsOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardShortcutsOpen, setKeyboardShortcutsOpen]);

  if (!keyboardShortcutsOpen) return null;

  const shortcuts = [
    { id: 'focus-search', keys: ['/'], description: 'Focus search bar', icon: '🔍' },
    { id: 'nav-up-down', keys: ['↑', '↓'], description: 'Navigate effects (vertical)', icon: '🧭' },
    { id: 'open-detail', keys: ['Enter'], description: 'Open effect detail', icon: '📋' },
    { id: 'close-modal', keys: ['Esc'], description: 'Close modal / dialog', icon: '✕' },
    { id: 'nav-left-right', keys: ['←', '→'], description: 'Navigate effects (horizontal)', icon: '↔️' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center"
        onClick={() => setKeyboardShortcutsOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`w-full max-w-md mx-4 rounded-2xl border shadow-2xl overflow-hidden ${
            isDark ? 'bg-[#0f0f1a] border-gray-800' : 'bg-white border-gray-200'
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            <div className="flex items-center gap-2">
              <Keyboard className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <h2 className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Keyboard Shortcuts</h2>
            </div>
            <button
              onClick={() => setKeyboardShortcutsOpen(false)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDark ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Close keyboard shortcuts"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Shortcuts list */}
          <div className="px-6 py-4 space-y-3">
            {shortcuts.map((shortcut) => (
              <div key={shortcut.id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm">{shortcut.icon}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{shortcut.description}</span>
                </div>
                <div className="flex items-center gap-1">
                  {shortcut.keys.map((key, i) => (
                    <span key={i}>
                      <kbd className={`inline-flex items-center justify-center min-w-[28px] h-7 px-2 text-xs font-mono font-medium rounded-md border ${
                        isDark
                          ? 'bg-[#1a1a2e] border-gray-700 text-gray-300 shadow-sm'
                          : 'bg-gray-50 border-gray-300 text-gray-700 shadow-sm'
                      }`}>
                        {key}
                      </kbd>
                      {i < shortcut.keys.length - 1 && (
                        <span className={`mx-0.5 text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer hint */}
          <div className={`px-6 py-3 border-t text-center ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            <span className={`text-[11px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Press <kbd className={`px-1 py-0.5 text-[10px] rounded border ${isDark ? 'bg-[#1a1a2e] border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-300 text-gray-500'}`}>Esc</kbd> to close
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

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
    theme,
    favorites,
    compareIds,
    selectedFeatured,
    setKeyboardShortcutsOpen,
  } = useEffectsStore();

  const isDark = theme === 'dark';
  const tagCounts = useMemo(() => getTagCounts(), []);
  const [showBatchMenu, setShowBatchMenu] = useState(false);
  const [bouncingDiff, setBouncingDiff] = useState<string | null>(null);
  const [countFlash, setCountFlash] = useState(false);
  const [diffRipples, setDiffRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [tagsExpanded, setTagsExpanded] = useState(true);
  const batchMenuRef = useRef<HTMLDivElement>(null);

  // Close batch menu on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (batchMenuRef.current && !batchMenuRef.current.contains(e.target as Node)) {
        setShowBatchMenu(false);
      }
    };
    if (showBatchMenu) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showBatchMenu]);

  // Calculate filtered count
  const filteredCount = useMemo(() => {
    let filtered = effects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    if (selectedCollection === 'favorites') {
      const favs = useEffectsStore.getState().favorites;
      filtered = filtered.filter((e) => favs.includes(e.id));
    } else if (selectedCollection === 'featured') {
      filtered = filtered.filter((e) => featuredEffectIds.includes(e.id));
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

  // Flash count when filters change
  useEffect(() => {
    setCountFlash(true);
    const timer = setTimeout(() => setCountFlash(false), 600);
    return () => clearTimeout(timer);
  }, [filteredCount]);

  // Get visible effect IDs for batch export
  const getVisibleEffectIds = useMemo(() => {
    let filtered = effects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    if (selectedCollection === 'favorites') {
      filtered = filtered.filter((e) => favorites.includes(e.id));
    } else if (selectedCollection === 'featured') {
      filtered = filtered.filter((e) => featuredEffectIds.includes(e.id));
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

    return filtered.map((e) => e.id);
  }, [selectedCategory, selectedCollection, selectedDifficulty, selectedTags, searchQuery, favorites]);

  const hasActiveFilters = selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedTags.length > 0 || selectedCollection !== null || searchQuery.trim() !== '' || selectedFeatured;

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

  const handleDifficultyClick = (value: Difficulty | 'all', e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDifficulty(value);
    setBouncingDiff(value);
    setTimeout(() => setBouncingDiff(null), 300);
    // Ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setDiffRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setDiffRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  const handleBatchExport = (type: 'visible' | 'favorites' | 'compared') => {
    let ids: string[] = [];
    let title = '';

    switch (type) {
      case 'visible':
        ids = getVisibleEffectIds;
        title = `CSS Effects - ${ids.length} Effects`;
        break;
      case 'favorites':
        ids = favorites;
        title = `CSS Effects - Favorites (${ids.length})`;
        break;
      case 'compared':
        ids = compareIds;
        title = `CSS Effects - Compared (${ids.length})`;
        break;
    }

    if (ids.length === 0) {
      toast('No effects to export', { duration: 2000 });
      return;
    }

    const html = generateBatchHTML(ids, title);
    doDownload(html, `css-effects-${type}.html`);
    toast.success(`Exported ${ids.length} effects!`, { duration: 2000 });
    setShowBatchMenu(false);
  };

  // Active filter chips data
  const activeFilters: { label: string; onClear: () => void }[] = [];
  if (selectedCategory !== 'all') {
    activeFilters.push({
      label: `Category: ${selectedCategory}`,
      onClear: () => useEffectsStore.getState().setSelectedCategory('all'),
    });
  }
  if (selectedFeatured) {
    activeFilters.push({
      label: '⭐ Featured',
      onClear: () => useEffectsStore.getState().setSelectedFeatured(false),
    });
  }
  if (selectedCollection) {
    if (selectedCollection === 'favorites') {
      activeFilters.push({
        label: 'Favorites',
        onClear: () => useEffectsStore.getState().setSelectedCollection(null),
      });
    } else if (selectedCollection === 'featured') {
      // Already handled by selectedFeatured above
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
  const isDefaultSize = cardSize === 100;

  return (
    <div className="space-y-3">
      {/* Top toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Showing <span className={`font-semibold ${countFlash ? 'count-flash' : ''} text-emerald-400`}>{showingCount}</span> of <span className={`font-semibold ${countFlash ? 'count-flash' : ''} text-emerald-400`}>{filteredCount}</span> effects
        </span>

        <div className="flex-1" />

        {hasActiveFilters && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-all"
          >
            <RotateCcw className="w-3 h-3" />
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

        {/* Batch Export Button */}
        <div className="relative" ref={batchMenuRef}>
          <button
            onClick={() => setShowBatchMenu(!showBatchMenu)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs border rounded-lg transition-all ${
              isDark
                ? 'bg-[#111] border-gray-800 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30'
                : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-500/40'
            }`}
            aria-label="Batch export effects"
          >
            <Download className="w-3 h-3" />
            Batch Export
          </button>

          <AnimatePresence>
            {showBatchMenu && (
              <motion.div
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`absolute right-0 top-full mt-1 w-64 rounded-xl border shadow-lg z-50 overflow-hidden ${
                  isDark
                    ? 'bg-[#111] border-gray-800 shadow-black/40'
                    : 'bg-white border-gray-200 shadow-gray-200/60'
                }`}
              >
                <div className={`px-3 py-2 border-b ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Export Options
                  </span>
                </div>
                <div className="py-1">
                  <button
                    onClick={() => handleBatchExport('visible')}
                    className={`w-full text-left px-3 py-2.5 text-xs flex items-center gap-2.5 transition-colors ${
                      isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <FileDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-medium">Export All Visible</div>
                      <div className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{getVisibleEffectIds.length} effects as HTML</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleBatchExport('favorites')}
                    className={`w-full text-left px-3 py-2.5 text-xs flex items-center gap-2.5 transition-colors ${
                      isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <div>
                      <div className="font-medium">Export Favorites</div>
                      <div className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{favorites.length} favorited effects</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleBatchExport('compared')}
                    className={`w-full text-left px-3 py-2.5 text-xs flex items-center gap-2.5 transition-colors ${
                      isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <GitCompare className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-medium">Export Compared</div>
                      <div className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{compareIds.length} compared effects</div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Size slider with reset button */}
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
          {/* Reset size button - only shows when not default */}
          {!isDefaultSize && (
            <button
              onClick={() => setCardSize(100)}
              className={`p-1 rounded transition-colors ${
                isDark ? 'text-gray-600 hover:text-emerald-400' : 'text-gray-400 hover:text-emerald-600'
              }`}
              title="Reset to default size"
              aria-label="Reset card size to default"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
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

        {/* Keyboard shortcuts button - NOW OPENS DIALOG */}
        <button
          onClick={() => setKeyboardShortcutsOpen(true)}
          className={`p-1.5 transition-colors rounded-lg ${isDark ? 'text-gray-600 hover:text-gray-400 hover:bg-white/5' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}
          aria-label="Show keyboard shortcuts"
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

      {/* Filters group with shared container/border */}
      <div className={`rounded-xl border p-3 ${isDark ? 'border-gray-800/40 bg-[#0a0a0a]/50' : 'border-gray-200/60 bg-gray-50/50'}`}>
        {/* Section label */}
        <div className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          Filters
        </div>

        {/* Difficulty filter with glow and bounce */}
        <div className="flex flex-wrap gap-2 mb-2">
          {difficulties.map((d) => (
            <button
              key={d.value}
              onClick={(e) => handleDifficultyClick(d.value, e)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all diff-ripple-container relative ${
                bouncingDiff === d.value ? 'diff-bounce' : ''
              } ${
                selectedDifficulty === d.value
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 active-border-bottom'
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
              {/* Ripple effects */}
              {diffRipples.filter(r => r.id === diffRipples[diffRipples.length - 1]?.id).map(ripple => (
                <span
                  key={ripple.id}
                  className="ripple-effect"
                  style={{
                    left: ripple.x - 10,
                    top: ripple.y - 10,
                    width: 20,
                    height: 20,
                  }}
                />
              ))}
            </button>
          ))}
        </div>

        {/* Gradient separator between difficulty and tags */}
        <div className="filter-gradient-separator" />

        {/* Tags - shown by default with expand/collapse */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <button
              onClick={() => setTagsExpanded(!tagsExpanded)}
              className={`text-[10px] font-medium flex items-center gap-1 transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${tagsExpanded ? '' : '-rotate-90'}`} />
              Tags
            </button>
          </div>
          <AnimatePresence>
            {tagsExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto custom-scrollbar pb-1">
                  {tagCounts.slice(0, 30).map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 active-border-bottom'
                          : isDark
                            ? 'bg-[#111] text-gray-500 border border-gray-800 hover:border-gray-700 hover:text-gray-300'
                            : 'bg-gray-50 text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {tag} <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>{count}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination info */}
      {visibleCount < filteredCount && (
        <p className={`text-center text-xs pt-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          Scroll down for more effects ↓
        </p>
      )}

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsDialog />
    </div>
  );
}
