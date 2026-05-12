'use client';

import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { Search, Shuffle, Moon, Sun, Sparkles, Layers, Code2, Package, Clock, X, Trash2, Tag, FolderOpen } from 'lucide-react';
import { useEffectsStore, getCategoryColor } from '@/lib/effects-store';
import { effects, categories } from '@/lib/effects-data';
import { motion, AnimatePresence } from 'framer-motion';

// Subtle particle dots for the header background
function HeaderParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useEffectsStore((s) => s.theme);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const numParticles = 20;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = theme === 'dark' ? '16, 185, 129' : '5, 150, 105';
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

interface SearchSuggestion {
  type: 'effect' | 'category' | 'tag';
  text: string;
  description?: string;
}

// Animated number counter hook
function useAnimatedNumber(target: number, duration: number = 1500) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startValue + (target - startValue) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return value;
}

// Animated stat pill component with pulse glow
function AnimatedStatPill({ icon: Icon, label, targetValue, color, gradientFrom, gradientTo, isDark }: {
  icon: typeof Sparkles;
  label: string;
  targetValue: number;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  isDark: boolean;
}) {
  const animatedValue = useAnimatedNumber(targetValue);
  const displayValue = label === 'Pure CSS' ? `${animatedValue}%` :
                       label === 'Dependencies' ? 'Zero' :
                       animatedValue.toString();

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border bg-gradient-to-br ${gradientFrom} ${gradientTo} stat-pill-glow ${isDark ? 'border-gray-800/40' : 'border-gray-200/60'}`}>
      <Icon className={`w-4 h-4 ${color} opacity-70`} />
      <span className={`${color} font-bold text-sm`}>{displayValue}</span>
      <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</span>
    </div>
  );
}

// Typing effect component for subtitle
function TypingSubtitle({ phrases, isDark }: { phrases: string[]; isDark: boolean }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 40);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsPaused(true);
        }, 0);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 25);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, isTyping, isPaused, currentPhraseIndex, phrases]);

  return (
    <span className={`text-sm tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
}

export function Header() {
  const { searchQuery, setSearchQuery, setSelectedEffectId, filteredCount, theme, toggleTheme, searchHistory, addSearchHistory, clearSearchHistory } = useEffectsStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isDark = theme === 'dark';

  const typingPhrases = useMemo(() => [
    'A curated collection of beautiful CSS effects',
    'Copy, paste, and create magic',
    '198 pure CSS effects ready to use',
  ], []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setSearchQuery('');
        setSelectedEffectId(null);
        setShowSuggestions(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchQuery, setSelectedEffectId]);

  const handleRandom = useCallback(() => {
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setSelectedEffectId(randomEffect.id);
  }, [setSelectedEffectId]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      addSearchHistory(query);
    }
  }, [setSearchQuery, addSearchHistory]);

  const handleHistoryClick = useCallback((query: string) => {
    setSearchQuery(query);
    setShowHistory(false);
    setShowSuggestions(false);
    inputRef.current?.focus();
  }, [setSearchQuery]);

  const handleSuggestionClick = useCallback((suggestion: SearchSuggestion) => {
    if (suggestion.type === 'effect') {
      const effect = effects.find(e => e.name === suggestion.text);
      if (effect) {
        setSelectedEffectId(effect.id);
      }
    } else if (suggestion.type === 'category') {
      const cat = categories.find(c => c.name === suggestion.text);
      if (cat) {
        useEffectsStore.getState().setSelectedCategory(cat.id);
      }
    } else if (suggestion.type === 'tag') {
      useEffectsStore.getState().toggleTag(suggestion.text);
    }
    setShowSuggestions(false);
    setShowHistory(false);
    inputRef.current?.blur();
  }, [setSelectedEffectId]);

  const handleInputFocus = () => {
    if (searchQuery.trim()) {
      setShowSuggestions(true);
    } else {
      setShowHistory(true);
    }
  };

  const handleInputBlur = () => {
    // Delay to allow click on history/suggestion items
    setTimeout(() => {
      setShowHistory(false);
      setShowSuggestions(false);
    }, 200);
  };

  // Auto-suggestions based on search query
  const suggestions = useMemo((): SearchSuggestion[] => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: SearchSuggestion[] = [];

    // Matching effects (max 4)
    const matchingEffects = effects.filter(e => e.name.toLowerCase().includes(q)).slice(0, 4);
    matchingEffects.forEach(e => {
      results.push({ type: 'effect', text: e.name, description: e.description });
    });

    // Matching categories (max 3)
    const matchingCategories = categories.filter(c => c.id !== 'all' && c.name.toLowerCase().includes(q)).slice(0, 3);
    matchingCategories.forEach(c => {
      results.push({ type: 'category', text: c.name, description: `${c.count} effects` });
    });

    // Matching tags (max 3)
    const allTags = new Set<string>();
    effects.forEach(e => e.tags.forEach(t => allTags.add(t)));
    const matchingTags = Array.from(allTags).filter(t => t.toLowerCase().includes(q)).slice(0, 3);
    matchingTags.forEach(t => {
      const count = effects.filter(e => e.tags.includes(t)).length;
      results.push({ type: 'tag', text: t, description: `${count} effects` });
    });

    return results.slice(0, 8);
  }, [searchQuery]);

  const totalEffects = effects.length;
  const totalCategories = 38;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-6 relative"
    >
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-40">
        <HeaderParticles />
      </div>

      {/* Gradient overlay behind text for readability */}
      <div className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(10, 10, 10, 0.6) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, transparent 70%)',
        }}
      />

      {/* Badge with shimmer */}
      <div className="relative inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-3 overflow-hidden">
        <div className="absolute inset-0 shimmer-gradient" />
        <Sparkles className="w-3 h-3 text-emerald-400/60 relative z-10" />
        <span className="text-emerald-400/70 text-[10px] font-medium tracking-wider uppercase relative z-10">CSS EFFECTS LAB</span>
      </div>

      <h1 className={`text-3xl md:text-4xl font-extrabold mb-2 tracking-tight relative z-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        CSS{' '}
        <span
          className="text-4xl md:text-5xl"
          style={{
            background: 'linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 4s ease infinite',
          }}
        >
          Effects
        </span>{' '}
        Library
      </h1>
      
      {/* Animated typing subtitle */}
      <div className={`max-w-2xl mx-auto mb-7 relative z-10 min-h-[28px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <TypingSubtitle phrases={typingPhrases} isDark={isDark} />
      </div>

      {/* Search Bar - full width on mobile */}
      <div className="flex items-center gap-3 max-w-lg mx-auto mb-6 px-2 sm:px-0 relative z-10">
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              handleSearch(e.target.value);
              if (e.target.value.trim()) {
                setShowSuggestions(true);
                setShowHistory(false);
              } else {
                setShowSuggestions(false);
              }
            }}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Search effects... (press / to focus)"
            aria-label="Search effects"
            className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all ${
              isDark
                ? 'bg-[#111] border-gray-800 text-gray-200 placeholder:text-gray-600'
                : 'bg-white border-gray-200 text-gray-800 placeholder:text-gray-400'
            }`}
          />

          {/* Search Suggestions Dropdown */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className={`absolute top-full left-0 right-0 mt-1 rounded-xl border shadow-lg z-50 overflow-hidden ${
                  isDark
                    ? 'bg-[#111] border-gray-800 shadow-black/30'
                    : 'bg-white border-gray-200 shadow-gray-200/50'
                }`}
              >
                <div className={`px-3 py-2 border-b ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Suggestions
                  </span>
                </div>
                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                  {suggestions.map((s, i) => (
                    <button
                      key={`${s.type}-${s.text}-${i}`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSuggestionClick(s);
                      }}
                      className={`w-full text-left px-3 py-2.5 text-xs flex items-center gap-2.5 search-suggestion-item ${
                        isDark
                          ? 'text-gray-400 hover:text-gray-200'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {s.type === 'effect' && <Sparkles className="w-3.5 h-3.5 shrink-0 text-emerald-400/70" />}
                      {s.type === 'category' && <FolderOpen className="w-3.5 h-3.5 shrink-0 text-blue-400/70" />}
                      {s.type === 'tag' && <Tag className="w-3.5 h-3.5 shrink-0 text-purple-400/70" />}
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium">{s.text}</div>
                        {s.description && (
                          <div className={`text-[10px] truncate ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{s.description}</div>
                        )}
                      </div>
                      <span className={`text-[9px] uppercase font-medium px-1.5 py-0.5 rounded shrink-0 ${
                        s.type === 'effect'
                          ? 'bg-emerald-500/10 text-emerald-400/70'
                          : s.type === 'category'
                            ? 'bg-blue-500/10 text-blue-400/70'
                            : 'bg-purple-500/10 text-purple-400/70'
                      }`}>
                        {s.type}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search History Dropdown */}
          <AnimatePresence>
            {showHistory && !searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className={`absolute top-full left-0 right-0 mt-1 rounded-xl border shadow-lg z-50 overflow-hidden ${
                  isDark
                    ? 'bg-[#111] border-gray-800 shadow-black/30'
                    : 'bg-white border-gray-200 shadow-gray-200/50'
                }`}
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-inherit">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Clock className="w-3 h-3" />
                    Recent Searches
                  </span>
                  {searchHistory.length > 0 && (
                    <button
                      onClick={clearSearchHistory}
                      className={`text-[10px] font-medium flex items-center gap-0.5 transition-colors ${
                        isDark ? 'text-red-400/60 hover:text-red-400' : 'text-red-500/60 hover:text-red-500'
                      }`}
                      aria-label="Clear search history"
                    >
                      <Trash2 className="w-2.5 h-2.5" />
                      Clear
                    </button>
                  )}
                </div>
                {searchHistory.length > 0 ? (
                  <div className="max-h-48 overflow-y-auto custom-scrollbar">
                    {searchHistory.map((query, i) => (
                      <button
                        key={`${query}-${i}`}
                        onClick={() => handleHistoryClick(query)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 transition-colors ${
                          isDark
                            ? 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                        }`}
                      >
                        <Clock className="w-3 h-3 shrink-0 opacity-40" />
                        <span className="truncate">{query}</span>
                        <X className={`w-2.5 h-2.5 ml-auto opacity-0 group-hover:opacity-100 shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/5 border border-emerald-500/10 mb-3">
                      <Clock className={`w-5 h-5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                    </div>
                    <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      Your search history will appear here
                    </p>
                    <p className={`text-[10px] mt-1 ${isDark ? 'text-gray-700' : 'text-gray-300'}`}>
                      Start typing to search for effects
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={handleRandom}
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all shrink-0"
          aria-label="Random effect"
        >
          <Shuffle className="w-4 h-4" />
          <span className="hidden sm:inline">Random</span>
        </button>
        <button
          onClick={toggleTheme}
          className={`flex items-center justify-center w-10 h-10 border rounded-xl transition-all shrink-0 ${
            isDark
              ? 'bg-[#111] border-gray-800 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30'
              : 'bg-white border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-500/30'
          }`}
          title="Toggle theme"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>

      {/* Stats Row with animated counters + pulse glow */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
        <AnimatedStatPill
          icon={Sparkles}
          label="Effects"
          targetValue={totalEffects}
          color="text-emerald-400"
          gradientFrom="from-emerald-500/8"
          gradientTo="to-emerald-500/3"
          isDark={isDark}
        />
        <AnimatedStatPill
          icon={Layers}
          label="Categories"
          targetValue={totalCategories}
          color="text-emerald-400"
          gradientFrom="from-blue-500/8"
          gradientTo="to-blue-500/3"
          isDark={isDark}
        />
        <AnimatedStatPill
          icon={Code2}
          label="Pure CSS"
          targetValue={100}
          color="text-emerald-400"
          gradientFrom="from-purple-500/8"
          gradientTo="to-purple-500/3"
          isDark={isDark}
        />
        <AnimatedStatPill
          icon={Package}
          label="Dependencies"
          targetValue={0}
          color="text-emerald-400"
          gradientFrom="from-amber-500/8"
          gradientTo="to-amber-500/3"
          isDark={isDark}
        />

        {/* Animated counter badge showing filtered count */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredCount}
            initial={{ scale: 1.2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20"
          >
            <span className="text-emerald-400 font-bold text-sm">{filteredCount}</span>
            <span className="text-emerald-400/70 text-xs">matching</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
