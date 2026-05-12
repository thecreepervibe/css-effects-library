'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { useEffectsStore, getCategoryColor, getEffectViews, getSimulatedRating } from '@/lib/effects-store';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, ExternalLink, Sparkles, Check, Heart, GitCompare, Star, Eye, Code2, Bookmark, Maximize2, Minimize2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

interface EffectCardProps {
  effect: CSSEffect;
  index: number;
  isFocused?: boolean;
}

// Count semicolons in CSS as rough complexity metric
function getComplexity(cssCode: string): number {
  const semicolonCount = (cssCode.match(/;/g) || []).length;
  return Math.min(100, Math.round((semicolonCount / 40) * 100));
}

// Get star count based on difficulty
function getStarCount(difficulty: string): number {
  if (difficulty === 'beginner') return 1;
  if (difficulty === 'intermediate') return 2;
  return 3;
}

export function EffectCard({ effect, index, isFocused }: EffectCardProps) {
  const { viewMode, cardSize, setSelectedEffectId, toggleFavorite, favorites, toggleCompare, compareIds, theme, ratings, bookmarks, toggleBookmark } = useEffectsStore();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [heartAnimating, setHeartAnimating] = useState(false);
  const [checkAnimating, setCheckAnimating] = useState(false);
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false);
  const [showCodeTooltip, setShowCodeTooltip] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const previewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glowPos, setGlowPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const isFavorited = favorites.includes(effect.id);
  const isComparing = compareIds.includes(effect.id);
  const isBookmarked = bookmarks.includes(effect.id);
  const complexity = getComplexity(effect.cssCode);
  const starCount = getStarCount(effect.difficulty);
  const isDark = theme === 'dark';
  const catColor = getCategoryColor(effect.category);
  const viewCount = getEffectViews(effect.id);
  const userRating = ratings[effect.id] || null;
  const simulatedRating = getSimulatedRating(effect.id);
  const thumbsUpCount = Math.round(simulatedRating);
  const thumbsDownCount = 100 - thumbsUpCount;

  // Code preview tooltip: show after 800ms hover
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    hoverTimerRef.current = setTimeout(() => {
      setShowCodeTooltip(true);
    }, 800);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setShowCodeTooltip(false);
    setTiltStyle({});
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  // Ripple effect on click
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  }, []);

  // 3D tilt effect on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4; // subtle tilt
    const rotateY = ((x - centerX) / centerX) * 4;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.15s ease-out',
    });
    setGlowPos({ x, y });
  }, []);

  // Inject CSS for the preview
  useEffect(() => {
    if (previewRef.current) {
      const uniquePrefix = `preview-${effect.id}-`;
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
          modifiedCss = modifiedCss.replace(
            new RegExp(`animation-name:\\s*${animName}`, 'g'),
            `animation-name: ${uniqueAnimName}`
          );
        });
      }

      if (styleRef.current) {
        styleRef.current.remove();
      }

      const style = document.createElement('style');
      style.textContent = modifiedCss;
      document.head.appendChild(style);
      styleRef.current = style;

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
            modifiedHtml = modifiedHtml.replace(
              new RegExp(`class="${className} `, 'g'),
              `class="${uniquePrefix}${className} `
            );
            modifiedHtml = modifiedHtml.replace(
              new RegExp(` ${className}"`, 'g'),
              ` ${uniquePrefix}${className}"`
            );
            modifiedHtml = modifiedHtml.replace(
              new RegExp(` ${className} `, 'g'),
              ` ${uniquePrefix}${className} `
            );
          }
        });
      }

      if (previewRef.current) {
        previewRef.current.innerHTML = modifiedHtml;
      }
    }

    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, [effect]);

  // Scroll focused card into view
  useEffect(() => {
    if (isFocused && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isFocused]);

  // Cleanup hover timer
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(effect.cssCode + '\n\n' + effect.htmlCode);
    setCopied(true);
    toast.success('Code copied to clipboard!', { duration: 2000 });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isNowFav = !isFavorited;
    toggleFavorite(effect.id);
    setHeartAnimating(true);
    setTimeout(() => setHeartAnimating(false), 400);
    toast(isNowFav ? 'Added to favorites ❤️' : 'Removed from favorites', {
      duration: 1500,
    });
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(effect.id);
    setBookmarkAnimating(true);
    setTimeout(() => setBookmarkAnimating(false), 350);
    toast(isBookmarked ? 'Bookmark removed' : 'Bookmarked! 🔖', { duration: 1500 });
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleCompare(effect.id);
    setCheckAnimating(true);
    setTimeout(() => setCheckAnimating(false), 300);
  };

  const difficultyColors = {
    beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  const difficultyBorderColors = {
    beginner: 'border-l-emerald-400',
    intermediate: 'border-l-yellow-400',
    advanced: 'border-l-red-400',
  };

  const difficultyStarColor = {
    beginner: 'text-emerald-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  };

  const complexityColor = complexity > 70 ? 'bg-red-500' : complexity > 40 ? 'bg-yellow-500' : 'bg-emerald-500';

  // Get first 4 lines of CSS for tooltip
  const cssPreviewLines = effect.cssCode.split('\n').slice(0, 4).join('\n');

  // Format view count
  const formatViews = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  // Feature 3: Quick Preview expand/collapse
  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // Staggered entrance animation - more dramatic
  const staggerDelay = Math.min(index * 0.04, 0.6);

  if (viewMode === 'compact') {
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: -20, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: staggerDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={() => setSelectedEffectId(effect.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center gap-4 p-3 border rounded-xl transition-all cursor-pointer group relative emerald-pulse-glow card-shine ${
          isFocused ? 'effect-card-focused border-emerald-500/40' : ''
        } ${isDark ? 'bg-[#111] border-gray-800/50 hover:border-emerald-500/30' : 'bg-white border-gray-200 hover:border-emerald-500/40 shadow-sm'}`}
        data-effect-index={index}
      >
        {/* Compare checkbox */}
        <button
          onClick={handleCompare}
          aria-label={`Compare ${effect.name}`}
          className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${
            isComparing
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : isDark ? 'border-gray-700 hover:border-emerald-500/50' : 'border-gray-300 hover:border-emerald-500/50'
          }`}
        >
          {isComparing && <GitCompare className={`w-3 h-3 ${checkAnimating ? 'checkmark-draw' : ''}`} />}
        </button>

        {/* Mini preview */}
        <div
          ref={previewRef}
          className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border pointer-events-none ${
            isDark ? 'bg-[#0a0a0a] border-gray-800/30' : 'bg-gray-50 border-gray-200/60'
          }`}
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`text-sm font-semibold truncate group-hover:text-emerald-400 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {effect.name}
            </h3>
            {effect.isNew && (
              <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded shrink-0 new-badge-pulse">
                NEW
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className={`text-xs truncate ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{effect.description}</p>
          </div>
        </div>

        {/* Category color badge */}
        <span
          className="text-[10px] px-2 py-0.5 rounded-full border shrink-0"
          style={{ backgroundColor: `${catColor}15`, color: catColor, borderColor: `${catColor}30` }}
        >
          {effect.category.replace('-', ' ')}
        </span>

        {/* Star rating */}
        <div className="flex items-center gap-0.5 shrink-0" title={`${starCount} star${starCount > 1 ? 's' : ''} difficulty`}>
          {[1, 2, 3].map((s) => (
            <Star
              key={s}
              className={`w-3 h-3 ${s <= starCount ? `${difficultyStarColor[effect.difficulty]} fill-current star-filled` : isDark ? 'text-gray-700' : 'text-gray-300'}`}
            />
          ))}
        </div>

        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border border-l-2 ${difficultyColors[effect.difficulty]} ${difficultyBorderColors[effect.difficulty]}`}>
          {effect.difficulty}
        </span>

        {/* Views count */}
        <span className={`text-[10px] flex items-center gap-0.5 shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          <Eye className="w-3 h-3" />
          {formatViews(viewCount)}
        </span>

        {/* Rating indicator */}
        {userRating && (
          <span className="text-[10px] shrink-0">
            {userRating === 'up' ? '👍' : '👎'}
          </span>
        )}

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Bookmark button */}
          <button
            onClick={handleBookmark}
            aria-label={`Bookmark ${effect.name}`}
            aria-pressed={isBookmarked}
            className={`p-1.5 transition-colors ${isBookmarked ? 'text-amber-400' : isDark ? 'text-gray-600 hover:text-amber-400' : 'text-gray-400 hover:text-amber-400'} ${bookmarkAnimating ? 'bookmark-pop' : ''}`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleFavorite}
            aria-label={`Favorite ${effect.name}`}
            aria-pressed={isFavorited}
            className={`p-1.5 transition-colors ${isFavorited ? 'text-red-400' : isDark ? 'text-gray-600 hover:text-red-400' : 'text-gray-400 hover:text-red-400'} ${heartAnimating ? 'heart-pop' : ''}`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleCopy}
            className={`p-1.5 transition-colors ${isDark ? 'text-gray-600 hover:text-emerald-400' : 'text-gray-400 hover:text-emerald-400'} ${copied ? 'copy-bounce' : ''}`}
            aria-label={`Copy code for ${effect.name}`}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </motion.div>
    );
  }

  // Grid view
  const previewHeight = Math.max(140, cardSize * 1.4);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: staggerDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={(e) => {
        handleClick(e);
        setSelectedEffectId(effect.id);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`group relative border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 emerald-pulse-glow card-shine card-3d-tilt card-mouse-glow ${
        isFocused ? 'effect-card-focused border-emerald-500/40' : ''
      } ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200 shadow-sm'}`}
      style={{
        minHeight: `${cardSize * 2}px`,
        ...tiltStyle,
      }}
      data-effect-index={index}
      tabIndex={0}
      role="button"
      aria-label={`View ${effect.name} effect`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSelectedEffectId(effect.id);
        }
      }}
    >
      {/* Animated gradient border on hover - rotating conic gradient */}
      <div className="card-glow-border rounded-2xl" />

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="card-ripple"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}

      {/* Hover lift effect */}
      <div className="group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300 h-full flex flex-col">
        {/* Preview area with animated gradient border */}
        <div
          className="relative overflow-hidden flex items-center justify-center card-preview-shimmer preview-gradient-border rounded-t-2xl"
          style={{ height: `${previewHeight}px` }}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: isDark
                  ? 'radial-gradient(circle, #fff 1px, transparent 1px)'
                  : 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>

          {/* Mouse glow that follows cursor position */}
          {isHovered && (
            <div
              className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{
                left: glowPos.x - 128,
                top: glowPos.y - 128,
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.03) 40%, transparent 70%)',
                transition: 'left 0.1s ease-out, top 0.1s ease-out',
                zIndex: 5,
              }}
            />
          )}

          {/* Preview content with scale animation */}
          <div
            ref={previewRef}
            className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden scale-90 group-hover:scale-100 transition-transform duration-400 pointer-events-none"
          />

          {/* Gradient overlay at bottom of preview for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-5 pointer-events-none" />

          {/* "View Code →" overlay on hover with backdrop blur - smooth slide up */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent py-3 px-4 flex items-center justify-between z-20 backdrop-blur-[2px]"
          >
            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
              View Code <span className="text-emerald-400">→</span>
            </span>
            {/* Views count in overlay */}
            <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
              <Eye className="w-3 h-3" />
              {formatViews(viewCount)}
            </span>
          </motion.div>

          {/* Favorite button - top right with heart pop */}
          <motion.button
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={handleFavorite}
            aria-label={`Favorite ${effect.name}`}
            aria-pressed={isFavorited}
            className={`absolute top-2 right-2 z-20 p-1.5 rounded-lg backdrop-blur-sm transition-colors ${heartAnimating ? 'heart-pop' : ''} ${
              isFavorited
                ? 'bg-red-500/20 text-red-400'
                : 'bg-black/40 text-gray-400 hover:text-red-400'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
          </motion.button>

          {/* Bookmark button - top right, next to favorite */}
          <motion.button
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.15, delay: 0.03 }}
            onClick={handleBookmark}
            aria-label={`Bookmark ${effect.name}`}
            aria-pressed={isBookmarked}
            className={`absolute top-2 right-11 z-20 p-1.5 rounded-lg backdrop-blur-sm transition-colors ${bookmarkAnimating ? 'bookmark-pop' : ''} ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-400'
                : 'bg-black/40 text-gray-400 hover:text-amber-400'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </motion.button>

          {/* Compare button - top left with checkmark draw */}
          <motion.button
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.15, delay: 0.05 }}
            onClick={handleCompare}
            className={`absolute top-2 left-2 z-20 p-1.5 rounded-lg backdrop-blur-sm transition-colors ${
              isComparing
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-black/40 text-gray-400 hover:text-emerald-400'
            }`}
            aria-label={`Compare ${effect.name}`}
          >
            <GitCompare className={`w-3.5 h-3.5 ${checkAnimating ? 'checkmark-draw' : ''}`} />
          </motion.button>

          {/* Code Preview Tooltip */}
          <AnimatePresence>
            {showCodeTooltip && isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="code-tooltip absolute top-2 left-1/2 -translate-x-1/2 z-30"
              >
                <div className={`rounded-lg border shadow-xl overflow-hidden ${
                  isDark ? 'bg-[#0d1117] border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <div className={`px-2.5 py-1.5 border-b flex items-center gap-1.5 ${isDark ? 'border-gray-800 bg-[#0d1117]' : 'border-gray-200 bg-gray-50'}`}>
                    <Code2 className="w-3 h-3 text-emerald-400/70" />
                    <span className={`text-[9px] font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>CSS Preview</span>
                  </div>
                  <pre className={`px-2.5 py-2 text-[9px] font-mono leading-relaxed whitespace-pre max-w-[260px] overflow-hidden ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cssPreviewLines}
                    {'\n...'}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Complexity bar under preview */}
        <div className={`h-0.5 w-full ${isDark ? 'bg-gray-800/50' : 'bg-gray-200/60'}`}>
          <div
            className={`h-full ${complexityColor} transition-all duration-500`}
            style={{ width: `${complexity}%` }}
          />
        </div>

        {/* Card info */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`text-sm font-semibold truncate group-hover:text-emerald-400 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {effect.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              {effect.isNew && (
                <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded flex items-center gap-0.5 new-badge-pulse">
                  <Sparkles className="w-2.5 h-2.5" /> NEW
                </span>
              )}
              {userRating && (
                <span className="text-[10px]">{userRating === 'up' ? '👍' : '👎'}</span>
              )}
            </div>
          </div>

          <p className={`text-xs mb-2 line-clamp-2 leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{effect.description}</p>

          <div className="flex items-center gap-2 mb-3">
            {/* Star rating */}
            <div className="flex items-center gap-0.5" title={`${starCount} star${starCount > 1 ? 's' : ''} difficulty`}>
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  className={`w-3 h-3 ${s <= starCount ? `${difficultyStarColor[effect.difficulty]} fill-current star-filled` : isDark ? 'text-gray-700' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border border-l-2 ${difficultyColors[effect.difficulty]} ${difficultyBorderColors[effect.difficulty]}`}>
              {effect.difficulty}
            </span>
            {/* Category color badge */}
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border capitalize"
              style={{ backgroundColor: `${catColor}12`, color: catColor, borderColor: `${catColor}25` }}
            >
              {effect.category.replace('-', ' ')}
            </span>
            <span className={`text-[10px] ml-auto`} title="Complexity based on CSS properties" style={{ color: complexity > 70 ? '#f87171' : complexity > 40 ? '#fbbf24' : '#34d399' }}>
              {complexity > 70 ? 'Complex' : complexity > 40 ? 'Medium' : 'Simple'}
            </span>
          </div>

          {/* Enhanced Tag Pills with gradient bg, dot indicator, hover effect */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {effect.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`tag-pill-enhanced text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 ${
                  isDark ? 'border border-gray-800/40' : 'border border-gray-200/60'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${catColor}08, ${catColor}14)`,
                  color: isDark ? '#9ca3af' : '#6b7280',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: catColor, opacity: 0.7 }}
                />
                {tag}
              </span>
            ))}
            {effect.tags.length > 3 && (
              <span className={`text-[10px] px-1.5 py-0.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>+{effect.tags.length - 3}</span>
            )}
          </div>

          {/* Feature 5: Effect Rating Summary */}
          <div className={`flex items-center gap-2 mb-2 px-0.5`}>
            <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-800/60' : 'bg-gray-200/80'}`}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${simulatedRating}%`,
                  background: simulatedRating >= 80 ? '#10b981' : simulatedRating >= 65 ? '#fbbf24' : '#f87171',
                }}
              />
            </div>
            <div className={`flex items-center gap-1.5 shrink-0`}>
              <span className="flex items-center gap-0.5 text-[9px] text-emerald-400/70">
                <ThumbsUp className="w-2.5 h-2.5" />
                <span>{thumbsUpCount}%</span>
              </span>
              <span className="flex items-center gap-0.5 text-[9px] text-gray-500/50">
                <ThumbsDown className="w-2.5 h-2.5" />
                <span>{thumbsDownCount}%</span>
              </span>
            </div>
          </div>

          {/* Card footer separator */}
          <div className="card-footer-separator mb-2" />

          {/* Improved card footer with Quick Actions Row */}
          <div className="flex items-center gap-2 mt-auto">
            <button
              onClick={handleCopy}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all copy-btn-gradient ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 copy-bounce'
                  : 'text-emerald-400/80 hover:text-emerald-400'
              }`}
              aria-label={`Copy code for ${effect.name}`}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
            {/* Feature 3: Quick Preview expand button */}
            <button
              onClick={handleToggleExpand}
              className={`p-1.5 rounded-lg transition-colors border ${
                isExpanded
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  : isDark
                    ? 'bg-emerald-500/10 text-emerald-400/70 hover:text-emerald-400 border-emerald-500/20 hover:border-emerald-500/30'
                    : 'bg-emerald-500/10 text-emerald-600/70 hover:text-emerald-600 border-emerald-500/20 hover:border-emerald-500/30'
              }`}
              aria-label={isExpanded ? 'Collapse preview' : 'Expand preview'}
              title={isExpanded ? 'Collapse' : 'Quick Preview'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            {/* Quick View icon button - opens modal to preview tab */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEffectId(effect.id);
              }}
              className={`p-1.5 rounded-lg transition-colors border ${
                isDark
                  ? 'bg-emerald-500/10 text-emerald-400/70 hover:text-emerald-400 border-emerald-500/20 hover:border-emerald-500/30'
                  : 'bg-emerald-500/10 text-emerald-600/70 hover:text-emerald-600 border-emerald-500/20 hover:border-emerald-500/30'
              }`}
              aria-label={`Quick view ${effect.name}`}
              title="Quick View"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            {/* Details text link */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEffectId(effect.id);
              }}
              className={`text-xs font-medium transition-colors whitespace-nowrap ${
                isDark ? 'text-emerald-400/60 hover:text-emerald-400' : 'text-emerald-600/60 hover:text-emerald-600'
              }`}
              aria-label={`View details for ${effect.name}`}
            >
              Details →
            </button>
          </div>

          {/* Feature 3: Quick Preview Expansion - larger preview + CSS code */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="card-footer-separator mt-2 mb-2" />
                {/* Expanded preview area - double height */}
                <div
                  className={`relative overflow-hidden flex items-center justify-center rounded-lg border ${
                    isDark ? 'bg-[#0a0a0a] border-gray-800/40' : 'bg-gray-50 border-gray-200'
                  }`}
                  style={{ height: `${previewHeight * 2}px` }}
                >
                  <div className={`absolute inset-0 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: isDark
                          ? 'radial-gradient(circle, #fff 1px, transparent 1px)'
                          : 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '12px 12px',
                      }}
                    />
                  </div>
                  {/* Re-render preview content in expanded area */}
                  <div
                    ref={(el) => {
                      if (el && previewRef.current) {
                        el.innerHTML = previewRef.current.innerHTML;
                      }
                    }}
                    className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden scale-110 pointer-events-none"
                  />
                </div>
                {/* CSS code preview */}
                <div className={`mt-2 rounded-lg border overflow-hidden ${isDark ? 'bg-[#0d1117] border-gray-800/40' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 border-b ${isDark ? 'border-gray-800/50 bg-[#0d1117]' : 'border-gray-200 bg-gray-100'}`}>
                    <Code2 className="w-3 h-3 text-emerald-400/70" />
                    <span className={`text-[9px] font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>CSS</span>
                  </div>
                  <pre className={`px-3 py-2 text-[9px] font-mono leading-relaxed whitespace-pre-wrap max-h-32 overflow-y-auto custom-scrollbar ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {effect.cssCode}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
