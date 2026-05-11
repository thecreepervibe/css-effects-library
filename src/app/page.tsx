'use client';

import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { Header } from '@/components/css-effects/header';
import { Sidebar } from '@/components/css-effects/sidebar';
import { FilterToolbar } from '@/components/css-effects/filter-toolbar';
import { EffectCard } from '@/components/css-effects/effect-card';
import { EffectDetailModal } from '@/components/css-effects/effect-detail-modal';
import { Footer } from '@/components/css-effects/footer';
import { useEffectsStore } from '@/lib/effects-store';
import { effects, collections } from '@/lib/effects-data';
import { Menu, ArrowUp, GitCompare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Compare Modal Component
function CompareModal() {
  const { compareModalOpen, setCompareModalOpen, compareIds, clearCompare } = useEffectsStore();
  const [activeCompareTab, setActiveCompareTab] = useState<Record<string, 'preview' | 'css' | 'html'>>({});
  const previewRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const styleRefs = useRef<Record<string, HTMLStyleElement | null>>({});

  const compareEffects = effects.filter((e) => compareIds.includes(e.id));

  // Inject previews for compare
  useEffect(() => {
    compareEffects.forEach((effect) => {
      const tab = activeCompareTab[effect.id] || 'preview';
      const ref = previewRefs.current[effect.id];
      if (tab !== 'preview' || !ref) return;

      const uniquePrefix = `compare-${effect.id}-`;
      let modifiedCss = effect.cssCode;

      const classMatches = effect.cssCode.match(/\.([a-zA-Z0-9_-]+)/g);
      if (classMatches) {
        const uniqueClasses = new Set<string>();
        classMatches.forEach((match) => {
          const className = match.substring(1);
          if (!uniqueClasses.has(className)) {
            uniqueClasses.add(className);
            const regex = new RegExp(`\\.${className}(?=[\\s{,:])`, 'g');
            modifiedCss = modifiedCss.replace(regex, `.${uniquePrefix}${className}`);
          }
        });
      }

      const animMatches = modifiedCss.match(/@keyframes\s+([a-zA-Z0-9_-]+)/g);
      if (animMatches) {
        animMatches.forEach((match) => {
          const animName = match.replace('@keyframes ', '');
          const uniqueAnimName = `${uniquePrefix}${animName}`;
          modifiedCss = modifiedCss.replace(
            new RegExp(`@keyframes\\s+${animName}`, 'g'),
            `@keyframes ${uniqueAnimName}`
          );
          modifiedCss = modifiedCss.replace(
            new RegExp(`animation:\\s*([^}]*?)${animName}`, 'g'),
            `animation: $1${uniqueAnimName}`
          );
        });
      }

      if (styleRefs.current[effect.id]) {
        styleRefs.current[effect.id]!.remove();
      }

      const style = document.createElement('style');
      style.textContent = modifiedCss;
      document.head.appendChild(style);
      styleRefs.current[effect.id] = style;

      let modifiedHtml = effect.htmlCode;
      if (classMatches) {
        const uniqueClasses = new Set<string>();
        classMatches.forEach((match) => {
          const className = match.substring(1);
          if (!uniqueClasses.has(className)) {
            uniqueClasses.add(className);
            modifiedHtml = modifiedHtml.replace(
              new RegExp(`class="([^"]*?)${className}([^"]*?)"`, 'g'),
              (full, before, after) => `class="${before}${uniquePrefix}${className}${after}"`
            );
            modifiedHtml = modifiedHtml.replace(
              new RegExp(`class="${className}"`, 'g'),
              `class="${uniquePrefix}${className}"`
            );
          }
        });
      }

      ref.innerHTML = modifiedHtml;
    });

    return () => {
      Object.values(styleRefs.current).forEach((s) => {
        if (s) s.remove();
      });
      styleRefs.current = {};
    };
  }, [compareEffects, activeCompareTab]);

  if (!compareModalOpen || compareEffects.length < 2) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
        onClick={() => setCompareModalOpen(false)}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-4 md:inset-8 lg:inset-12 bg-[#0f0f1a] border border-gray-800 rounded-2xl z-[60] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <GitCompare className="w-4 h-4 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Compare Effects ({compareEffects.length})</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                clearCompare();
                setCompareModalOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-all"
            >
              <X className="w-3 h-3" />
              Clear & Close
            </button>
            <button
              onClick={() => setCompareModalOpen(false)}
              className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Compare grid */}
        <div className="flex-1 overflow-auto custom-scrollbar p-4">
          <div
            className="grid gap-4 h-full"
            style={{
              gridTemplateColumns: `repeat(${Math.min(compareEffects.length, 4)}, 1fr)`,
            }}
          >
            {compareEffects.map((effect) => {
              const tab = activeCompareTab[effect.id] || 'preview';
              return (
                <div key={effect.id} className="flex flex-col border border-gray-800/50 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-800/50 bg-[#111]">
                    <h3 className="text-sm font-semibold text-white">{effect.name}</h3>
                    <p className="text-[10px] text-gray-500">{effect.description}</p>
                  </div>
                  {/* Tabs */}
                  <div className="flex border-b border-gray-800/30">
                    {(['preview', 'css', 'html'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveCompareTab((prev) => ({ ...prev, [effect.id]: t }))}
                        className={`flex-1 px-3 py-1.5 text-[10px] font-medium transition-all ${
                          tab === t ? 'text-emerald-400 border-b border-emerald-400' : 'text-gray-500'
                        }`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 overflow-auto custom-scrollbar">
                    {tab === 'preview' && (
                      <div className="flex items-center justify-center min-h-[200px] p-6 bg-[#0a0a0a]">
                        <div
                          ref={(el) => { previewRefs.current[effect.id] = el; }}
                          className="transform scale-110"
                        />
                      </div>
                    )}
                    {tab === 'css' && (
                      <pre className="p-4 text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed bg-[#0a0a0a] m-0 text-gray-300">
                        {effect.cssCode}
                      </pre>
                    )}
                    {tab === 'html' && (
                      <pre className="p-4 text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed bg-[#0a0a0a] m-0 text-gray-300">
                        {effect.htmlCode}
                      </pre>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Scroll to top button
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 hover:bg-emerald-500/30 transition-all shadow-lg shadow-emerald-500/10"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

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
    compareIds,
    setCompareModalOpen,
  } = useEffectsStore();

  const filteredEffects = useMemo(() => {
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-24 h-24 mb-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">No effects found</h3>
                <p className="text-sm text-gray-500 max-w-sm">
                  Try adjusting your filters or search query. You can also click &quot;Clear all&quot; to reset all filters.
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

      {/* Compare floating button */}
      <AnimatePresence>
        {compareIds.length >= 2 && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={() => setCompareModalOpen(true)}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-5 py-3 bg-emerald-500 text-black rounded-xl font-semibold text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/30"
          >
            <GitCompare className="w-4 h-4" />
            Compare ({compareIds.length})
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      <EffectDetailModal />

      {/* Compare Modal */}
      <CompareModal />

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
