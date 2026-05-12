'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { useEffectsStore } from '@/lib/effects-store';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, Sparkles, Check, Heart, GitCompare, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
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
  const { viewMode, cardSize, setSelectedEffectId, toggleFavorite, favorites, toggleCompare, compareIds, theme } = useEffectsStore();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [heartAnimating, setHeartAnimating] = useState(false);
  const [checkAnimating, setCheckAnimating] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const isFavorited = favorites.includes(effect.id);
  const isComparing = compareIds.includes(effect.id);
  const complexity = getComplexity(effect.cssCode);
  const starCount = getStarCount(effect.difficulty);
  const isDark = theme === 'dark';

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

  const difficultyStarColor = {
    beginner: 'text-emerald-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  };

  const complexityColor = complexity > 70 ? 'bg-red-500' : complexity > 40 ? 'bg-yellow-500' : 'bg-emerald-500';

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
              <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded shrink-0">
                NEW
              </span>
            )}
          </div>
          <p className={`text-xs truncate ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{effect.description}</p>
        </div>

        {/* Star rating */}
        <div className="flex items-center gap-0.5 shrink-0" title={`${starCount} star${starCount > 1 ? 's' : ''} difficulty`}>
          {[1, 2, 3].map((s) => (
            <Star
              key={s}
              className={`w-3 h-3 ${s <= starCount ? `${difficultyStarColor[effect.difficulty]} fill-current star-filled` : isDark ? 'text-gray-700' : 'text-gray-300'}`}
            />
          ))}
        </div>

        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${difficultyColors[effect.difficulty]}`}>
          {effect.difficulty}
        </span>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleFavorite}
            className={`p-1.5 transition-colors ${isFavorited ? 'text-red-400' : isDark ? 'text-gray-600 hover:text-red-400' : 'text-gray-400 hover:text-red-400'} ${heartAnimating ? 'heart-pop' : ''}`}
            aria-label={`Favorite ${effect.name}`}
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
      onClick={() => setSelectedEffectId(effect.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 emerald-pulse-glow card-shine ${
        isFocused ? 'effect-card-focused border-emerald-500/40' : ''
      } ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200 shadow-sm'}`}
      style={{
        minHeight: `${cardSize * 2}px`,
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
      {/* Animated gradient border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          padding: '1.5px',
          background: 'linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981)',
          backgroundSize: '300% 300%',
          animation: 'gradient-border-spin 4s ease infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Hover lift effect */}
      <div className="group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300 h-full flex flex-col">
        {/* Preview area */}
        <div
          className="relative overflow-hidden flex items-center justify-center card-preview-shimmer"
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

          {/* Preview content with scale animation */}
          <div
            ref={previewRef}
            className="relative z-10 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-400 pointer-events-none"
          />

          {/* "View Code →" overlay on hover with backdrop blur - smooth slide up */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent py-3 px-4 flex items-center justify-center z-20 backdrop-blur-[2px]"
          >
            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
              View Code <span className="text-emerald-400">→</span>
            </span>
          </motion.div>

          {/* Favorite button - top right with heart pop */}
          <motion.button
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={handleFavorite}
            className={`absolute top-2 right-2 z-20 p-1.5 rounded-lg backdrop-blur-sm transition-colors ${heartAnimating ? 'heart-pop' : ''} ${
              isFavorited
                ? 'bg-red-500/20 text-red-400'
                : 'bg-black/40 text-gray-400 hover:text-red-400'
            }`}
            aria-label={`Favorite ${effect.name}`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
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
                <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5" /> NEW
                </span>
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
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[effect.difficulty]}`}>
              {effect.difficulty}
            </span>
            <span className={`text-[10px] capitalize ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{effect.category.replace('-', ' ')}</span>
            <span className={`text-[10px] ml-auto`} title="Complexity based on CSS properties" style={{ color: complexity > 70 ? '#f87171' : complexity > 40 ? '#fbbf24' : '#34d399' }}>
              {complexity > 70 ? 'Complex' : complexity > 40 ? 'Medium' : 'Simple'}
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {effect.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded ${isDark ? 'bg-[#1a1a2e] text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                {tag}
              </span>
            ))}
            {effect.tags.length > 3 && (
              <span className={`text-[10px] px-1.5 py-0.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>+{effect.tags.length - 3}</span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <button
              onClick={handleCopy}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 copy-bounce'
                  : 'bg-emerald-500/10 text-emerald-400/80 hover:bg-emerald-500/20 border border-emerald-500/10 hover:border-emerald-500/30'
              }`}
              aria-label={`Copy code for ${effect.name}`}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEffectId(effect.id);
              }}
              className={`p-1.5 rounded-lg transition-colors border ${
                isDark
                  ? 'bg-[#1a1a2e] text-gray-500 hover:text-emerald-400 border-gray-800/30 hover:border-emerald-500/20'
                  : 'bg-gray-100 text-gray-400 hover:text-emerald-600 border-gray-200 hover:border-emerald-500/30'
              }`}
              aria-label={`Open ${effect.name} detail`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
