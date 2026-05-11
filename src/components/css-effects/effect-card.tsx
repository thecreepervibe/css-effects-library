'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { useEffectsStore } from '@/lib/effects-store';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, Sparkles, Check, Heart, GitCompare } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface EffectCardProps {
  effect: CSSEffect;
  index: number;
}

export function EffectCard({ effect, index }: EffectCardProps) {
  const { viewMode, cardSize, setSelectedEffectId, toggleFavorite, favorites, toggleCompare, compareIds } = useEffectsStore();
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  const isFavorited = favorites.includes(effect.id);
  const isComparing = compareIds.includes(effect.id);

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

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(effect.cssCode + '\n\n' + effect.htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(effect.id);
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleCompare(effect.id);
  };

  const difficultyColors = {
    beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  if (viewMode === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.4) }}
        onClick={() => setSelectedEffectId(effect.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-4 p-3 bg-[#111] border border-gray-800/50 rounded-xl hover:border-emerald-500/30 transition-all cursor-pointer group relative"
      >
        {/* Compare checkbox */}
        <button
          onClick={handleCompare}
          className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${
            isComparing
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-gray-700 hover:border-emerald-500/50'
          }`}
        >
          {isComparing && <GitCompare className="w-3 h-3" />}
        </button>

        {/* Mini preview */}
        <div
          ref={previewRef}
          className="w-16 h-12 rounded-lg overflow-hidden bg-[#0a0a0a] shrink-0 flex items-center justify-center border border-gray-800/30"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-gray-200 truncate group-hover:text-emerald-400 transition-colors">
              {effect.name}
            </h3>
            {effect.isNew && (
              <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded shrink-0">
                NEW
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate">{effect.description}</p>
        </div>

        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${difficultyColors[effect.difficulty]}`}>
          {effect.difficulty}
        </span>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleFavorite}
            className={`p-1.5 transition-colors ${isFavorited ? 'text-red-400' : 'text-gray-600 hover:text-red-400'}`}
            title="Favorite"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-600 hover:text-emerald-400 transition-colors"
            title="Copy code"
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
      initial={{ opacity: 0, y: 15, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.5), ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => setSelectedEffectId(effect.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#111] border border-gray-800/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        minHeight: `${cardSize * 2}px`,
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
          className="relative overflow-hidden flex items-center justify-center"
          style={{ height: `${previewHeight}px` }}
        >
          <div className="absolute inset-0 bg-[#0a0a0a]">
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>

          {/* Preview content with scale animation */}
          <div
            ref={previewRef}
            className="relative z-10 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-400"
          />

          {/* "View Code →" overlay on hover */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-3 px-4 flex items-center justify-center z-20"
          >
            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
              View Code <span className="text-emerald-400">→</span>
            </span>
          </motion.div>

          {/* Favorite button - top right */}
          <motion.button
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={handleFavorite}
            className={`absolute top-2 right-2 z-20 p-1.5 rounded-lg backdrop-blur-sm transition-colors ${
              isFavorited
                ? 'bg-red-500/20 text-red-400'
                : 'bg-black/40 text-gray-400 hover:text-red-400'
            }`}
            title="Favorite"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current' : ''}`} />
          </motion.button>

          {/* Compare button - top left */}
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
            title="Compare"
          >
            <GitCompare className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Card info */}
        <div className="p-4 border-t border-gray-800/30 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-semibold text-gray-200 truncate group-hover:text-emerald-400 transition-colors">
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

          <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">{effect.description}</p>

          <div className="flex items-center gap-2 mb-3">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[effect.difficulty]}`}>
              {effect.difficulty}
            </span>
            <span className="text-[10px] text-gray-600 capitalize">{effect.category.replace('-', ' ')}</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {effect.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-[#1a1a2e] text-gray-500 rounded">
                {tag}
              </span>
            ))}
            {effect.tags.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 text-gray-600">+{effect.tags.length - 3}</span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <button
              onClick={handleCopy}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-emerald-500/10 text-emerald-400/80 hover:bg-emerald-500/20 border border-emerald-500/10 hover:border-emerald-500/30'
              }`}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEffectId(effect.id);
              }}
              className="p-1.5 bg-[#1a1a2e] text-gray-500 hover:text-emerald-400 rounded-lg transition-colors border border-gray-800/30 hover:border-emerald-500/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
