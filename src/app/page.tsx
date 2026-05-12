'use client';

import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { Header } from '@/components/css-effects/header';
import { Sidebar } from '@/components/css-effects/sidebar';
import { FilterToolbar } from '@/components/css-effects/filter-toolbar';
import { EffectCard } from '@/components/css-effects/effect-card';
import { EffectDetailModal } from '@/components/css-effects/effect-detail-modal';
import { Footer } from '@/components/css-effects/footer';
import { useEffectsStore, featuredEffectIds } from '@/lib/effects-store';
import { effects, collections } from '@/lib/effects-data';
import { Menu, ArrowUp, GitCompare, X, SearchX, RotateCcw, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Compare Modal Component
function CompareModal() {
  const { compareModalOpen, setCompareModalOpen, compareIds, clearCompare, theme } = useEffectsStore();
  const [activeCompareTab, setActiveCompareTab] = useState<Record<string, 'preview' | 'css' | 'html'>>({});
  const previewRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const styleRefs = useRef<Record<string, HTMLStyleElement | null>>({});
  const isDark = theme === 'dark';

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
        className={`fixed inset-4 md:inset-8 lg:inset-12 border rounded-2xl z-[60] overflow-hidden flex flex-col glass-modal ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <GitCompare className="w-4 h-4 text-emerald-400" />
            <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Compare Effects ({compareEffects.length})</h2>
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
              className={`p-2 rounded-lg transition-all ${isDark ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'}`}
              aria-label="Close compare modal"
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
                <div key={effect.id} className={`flex flex-col border rounded-xl overflow-hidden ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
                  <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-800/50 bg-[#111]' : 'border-gray-200 bg-gray-50'}`}>
                    <h3 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{effect.name}</h3>
                    <p className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{effect.description}</p>
                  </div>
                  {/* Tabs */}
                  <div className={`flex border-b ${isDark ? 'border-gray-800/30' : 'border-gray-200'}`}>
                    {(['preview', 'css', 'html'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveCompareTab((prev) => ({ ...prev, [effect.id]: t }))}
                        className={`flex-1 px-3 py-1.5 text-[10px] font-medium transition-all ${
                          tab === t ? 'text-emerald-400 border-b border-emerald-400' : isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 overflow-auto custom-scrollbar">
                    {tab === 'preview' && (
                      <div className={`flex items-center justify-center min-h-[200px] p-6 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
                        <div
                          ref={(el) => { previewRefs.current[effect.id] = el; }}
                          className="transform scale-110"
                        />
                      </div>
                    )}
                    {tab === 'css' && (
                      <pre className={`p-4 text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed m-0 ${isDark ? 'bg-[#0a0a0a] text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                        {effect.cssCode}
                      </pre>
                    )}
                    {tab === 'html' && (
                      <pre className={`p-4 text-[11px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed m-0 ${isDark ? 'bg-[#0a0a0a] text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
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

// Enhanced scroll-to-top button with circular progress ring
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const theme = useEffectsStore((s) => s.theme);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circular progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress * circumference);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 group"
          title="Back to top"
          aria-label="Scroll to top"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Circular progress ring */}
            <svg
              className="absolute inset-0 w-12 h-12 -rotate-90"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                stroke={isDark ? '#1a1a2e' : '#e5e7eb'}
                strokeWidth="2.5"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="scroll-top-ring"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                }}
              />
            </svg>
            {/* Inner button */}
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isDark
                ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/30'
                : 'bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 group-hover:bg-emerald-500/25'
            }`}>
              <ArrowUp className="w-4 h-4" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
      setVisible(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%`, opacity: visible ? 1 : 0 }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}

// Onboarding Tooltip Component
function OnboardingTooltips() {
  const { onboarded, setOnboarded, theme } = useEffectsStore();
  const isDark = theme === 'dark';
  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (onboarded) return;

    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 4500),
      setTimeout(() => setStep(3), 7500),
      setTimeout(() => {
        setOnboarded(true);
        setDismissed(true);
      }, 10500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onboarded, setOnboarded]);

  // Dismiss on any interaction
  useEffect(() => {
    if (onboarded || dismissed) return;

    const handleInteraction = () => {
      setOnboarded(true);
      setDismissed(true);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [onboarded, dismissed, setOnboarded]);

  if (onboarded || dismissed || step === 0) return null;

  const tooltips = [
    null,
    { text: 'Search 198 CSS effects...', target: 'search' },
    { text: 'Browse by category', target: 'sidebar' },
    { text: 'Try a random effect!', target: 'random' },
  ];

  const currentTooltip = tooltips[step];
  if (!currentTooltip) return null;

  // Position based on target
  const getStyle = (): React.CSSProperties => {
    switch (currentTooltip.target) {
      case 'search':
        return { top: '140px', left: '50%', transform: 'translateX(-50%)' };
      case 'sidebar':
        return { top: '200px', left: '80px' };
      case 'random':
        return { top: '140px', right: '120px' };
      default:
        return {};
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="onboarding-tooltip fixed z-[80] px-4 py-2.5 rounded-xl border shadow-xl"
        style={{
          ...getStyle(),
          background: isDark ? 'rgba(16, 185, 129, 0.9)' : 'rgba(16, 185, 129, 0.95)',
          color: '#000',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{currentTooltip.text}</span>
          <span className="text-[10px] opacity-60">{step}/3</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Enhanced empty state component
function EmptyState() {
  const { clearAllFilters, setSelectedCategory, setSearchQuery, theme } = useEffectsStore();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-24 text-center"
    >
      {/* Animated illustration */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center float-bounce">
          <SearchX className="w-10 h-10 text-emerald-500/30" />
        </div>
        {/* Decorative dots */}
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500/10 float-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-emerald-500/10 float-bounce" style={{ animationDelay: '1s' }} />
      </div>

      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>No effects found</h3>
      <p className={`text-sm max-w-md mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        We couldn&apos;t find any effects matching your current filters. Try one of these options:
      </p>

      {/* Suggestion buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            clearAllFilters();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Clear all filters
        </button>
        <button
          onClick={() => setSelectedCategory('text')}
          className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-medium transition-all ${
            isDark ? 'bg-[#111] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
          }`}
        >
          <Compass className="w-4 h-4" />
          Browse Text Effects
        </button>
        <button
          onClick={() => {
            setSearchQuery('button');
            setSelectedCategory('all');
          }}
          className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-medium transition-all ${
            isDark ? 'bg-[#111] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
          }`}
        >
          <SearchX className="w-4 h-4" />
          Search &quot;button&quot;
        </button>
      </div>
    </motion.div>
  );
}

// Loading skeleton for cards - realistic shape matching actual card layout
function CardSkeleton() {
  const { theme } = useEffectsStore();
  const isDark = theme === 'dark';
  return (
    <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-[#111]' : 'bg-white border border-gray-200'}`}>
      {/* Preview area skeleton */}
      <div className={`h-40 relative skeleton-pulse ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        {/* Simulated dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle, #fff 1px, transparent 1px)'
              : 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
      </div>
      {/* Complexity bar */}
      <div className={`h-0.5 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200/60'}`}>
        <div className={`h-full w-1/3 skeleton-pulse ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-500/20'}`} />
      </div>
      {/* Card info */}
      <div className="p-4 space-y-3">
        {/* Title + NEW badge */}
        <div className="flex items-center gap-2">
          <div className={`h-4 rounded w-2/3 skeleton-pulse ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'}`} />
          <div className={`h-4 rounded w-10 skeleton-pulse ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-500/10'}`} />
        </div>
        {/* Description */}
        <div className="space-y-1.5">
          <div className={`h-3 rounded w-full skeleton-pulse ${isDark ? 'bg-gray-800/30' : 'bg-gray-100'}`} />
          <div className={`h-3 rounded w-4/5 skeleton-pulse ${isDark ? 'bg-gray-800/20' : 'bg-gray-100'}`} />
        </div>
        {/* Difficulty + category row */}
        <div className="flex items-center gap-2">
          <div className={`h-5 rounded-full w-16 skeleton-pulse ${isDark ? 'bg-gray-800/30' : 'bg-gray-100'}`} />
          <div className={`h-5 rounded-full w-20 skeleton-pulse ${isDark ? 'bg-gray-800/20' : 'bg-gray-100'}`} />
        </div>
        {/* Tags row */}
        <div className="flex items-center gap-1.5">
          <div className={`h-4 rounded w-12 skeleton-pulse ${isDark ? 'bg-gray-800/20' : 'bg-gray-100'}`} />
          <div className={`h-4 rounded w-14 skeleton-pulse ${isDark ? 'bg-gray-800/20' : 'bg-gray-100'}`} />
          <div className={`h-4 rounded w-10 skeleton-pulse ${isDark ? 'bg-gray-800/20' : 'bg-gray-100'}`} />
        </div>
        {/* Copy code button */}
        <div className={`h-8 rounded-lg w-full skeleton-pulse ${isDark ? 'bg-gray-800/20' : 'bg-gray-100'}`} />
      </div>
    </div>
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
    setSelectedEffectId,
    selectedEffectId,
    focusedEffectIndex,
    setFocusedEffectIndex,
    visibleCount,
    setVisibleCount,
    theme,
    selectedFeatured,
    selectedUserCollection,
    userCollections,
  } = useEffectsStore();

  const isDark = theme === 'dark';
  const [isLoaded, setIsLoaded] = useState(false);

  const filteredEffects = useMemo(() => {
    let filtered = effects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === selectedCategory);
    }

    if (selectedCollection === 'favorites') {
      const favs = useEffectsStore.getState().favorites;
      filtered = filtered.filter((e) => favs.includes(e.id));
    } else if (selectedCollection === 'featured' || selectedFeatured) {
      filtered = filtered.filter((e) => featuredEffectIds.includes(e.id));
    } else if (selectedCollection) {
      const col = collections.find((c) => c.id === selectedCollection);
      if (col) {
        filtered = filtered.filter((e) => col.effectIds.includes(e.id));
      }
    }

    // User collections filter
    if (selectedUserCollection) {
      const userCol = userCollections.find((c) => c.id === selectedUserCollection);
      if (userCol) {
        filtered = filtered.filter((e) => userCol.effectIds.includes(e.id));
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
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTags, selectedCollection, selectedFeatured, selectedUserCollection, userCollections]);

  // Apply pagination - slice the visible effects
  const visibleEffects = useMemo(() => {
    return filteredEffects.slice(0, visibleCount);
  }, [filteredEffects, visibleCount]);

  // Update filtered count in store
  useEffect(() => {
    useEffectsStore.getState().setFilteredCount(filteredEffects.length);
  }, [filteredEffects.length]);

  // Hydrate localStorage-dependent state after mount to avoid SSR mismatch
  useEffect(() => {
    useEffectsStore.getState().hydrateFavorites();
    useEffectsStore.getState().hydrateRecentlyViewed();
    useEffectsStore.getState().hydrateTheme();
    useEffectsStore.getState().hydrateSearchHistory();
    useEffectsStore.getState().hydrateRatings();
    useEffectsStore.getState().hydrateOnboarded();
    useEffectsStore.getState().hydrateUserCollections();
    useEffectsStore.getState().hydrateBookmarks();
    useEffectsStore.getState().hydratePreviewDarkMode();
  }, []);

  // Mark as loaded after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTags, selectedCollection, selectedFeatured, selectedUserCollection, setVisibleCount]);

  // URL hash handling for effect sharing
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#effect=')) {
      const effectId = hash.replace('#effect=', '');
      const effectExists = effects.some((e) => e.id === effectId);
      if (effectExists) {
        setTimeout(() => setSelectedEffectId(effectId), 300);
      }
    }
  }, [setSelectedEffectId]);

  // Update URL hash when effect is selected
  useEffect(() => {
    if (selectedEffectId) {
      window.location.hash = `effect=${selectedEffectId}`;
    } else {
      if (window.location.hash.startsWith('#effect=')) {
        window.location.hash = '';
      }
    }
  }, [selectedEffectId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (useEffectsStore.getState().selectedEffectId) return;
      if (useEffectsStore.getState().compareModalOpen) return;

      const currentFiltered = filteredEffects;
      if (currentFiltered.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight': {
          e.preventDefault();
          const current = useEffectsStore.getState().focusedEffectIndex;
          const next = current === null ? 0 : Math.min(current + 1, currentFiltered.length - 1);
          setFocusedEffectIndex(next);
          break;
        }
        case 'ArrowUp':
        case 'ArrowLeft': {
          e.preventDefault();
          const current = useEffectsStore.getState().focusedEffectIndex;
          const next = current === null ? 0 : Math.max(current - 1, 0);
          setFocusedEffectIndex(next);
          break;
        }
        case 'Enter': {
          const current = useEffectsStore.getState().focusedEffectIndex;
          if (current !== null && current < currentFiltered.length) {
            e.preventDefault();
            setSelectedEffectId(currentFiltered[current].id);
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredEffects, setFocusedEffectIndex, setSelectedEffectId]);

  // Reset focused index when filters change
  useEffect(() => {
    setFocusedEffectIndex(null);
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedTags, selectedCollection, selectedFeatured, selectedUserCollection, setFocusedEffectIndex]);

  return (
    <div className={`min-h-screen flex flex-col animated-bg page-transition ${isDark ? 'bg-[#0a0a0a] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Skip navigation link */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top section: Header with glass morphism */}
      <header className={`w-full border-b z-30 glass ${isDark ? 'border-gray-800/30' : 'border-gray-200/60'}`}>
        {/* Animated gradient border under header */}
        <div className="header-animated-border" />
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 py-4 md:py-6">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2 mb-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className={`flex items-center gap-2 px-3 py-2 border rounded-lg text-sm ${isDark ? 'bg-[#111] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'}`}
              aria-label="Open category menu"
            >
              <Menu className="w-4 h-4" />
              Categories
            </button>
            <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
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
        <main id="main-content" role="main" className="flex-1 min-w-0 px-3 sm:px-4 md:px-6 py-4">
          <FilterToolbar />

          {/* Effects grid / list */}
          <div className="mt-4">
            {!isLoaded ? (
              // Show skeleton while loading
              <div
                className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{
                  gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(200, cardSize * 2.2)}px, 1fr))`,
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            ) : filteredEffects.length === 0 ? (
              <EmptyState />
            ) : viewMode === 'grid' ? (
              <div
                className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{
                  gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(200, cardSize * 2.2)}px, 1fr))`,
                }}
              >
                <AnimatePresence mode="popLayout">
                  {visibleEffects.map((effect, index) => (
                    <EffectCard
                      key={effect.id}
                      effect={effect}
                      index={index}
                      isFocused={focusedEffectIndex === index}
                    />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                  {visibleEffects.map((effect, index) => (
                    <EffectCard
                      key={effect.id}
                      effect={effect}
                      index={index}
                      isFocused={focusedEffectIndex === index}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* Load More at bottom of grid */}
            {isLoaded && visibleCount < filteredEffects.length && (
              <div className="flex items-center justify-center gap-3 py-8">
                <button
                  onClick={() => useEffectsStore.getState().loadMore()}
                  className="flex items-center gap-2 px-8 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all"
                >
                  Load More (+24)
                </button>
                <button
                  onClick={() => useEffectsStore.getState().showAll()}
                  className={`flex items-center gap-2 px-8 py-3 border rounded-xl text-sm font-medium transition-all ${
                    isDark
                      ? 'bg-[#111] border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700'
                      : 'bg-white border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Show All ({filteredEffects.length})
                </button>
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
            aria-label={`Compare ${compareIds.length} effects`}
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

      {/* Scroll to top with progress ring */}
      <ScrollToTop />

      {/* Onboarding Tooltips */}
      <OnboardingTooltips />
    </div>
  );
}
