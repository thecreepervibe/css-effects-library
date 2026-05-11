'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { useEffectsStore } from '@/lib/effects-store';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, Sparkles, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface EffectCardProps {
  effect: CSSEffect;
  index: number;
}

export function EffectCard({ effect, index }: EffectCardProps) {
  const { viewMode, cardSize, setSelectedEffectId } = useEffectsStore();
  const [copied, setCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

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

  const difficultyColors = {
    beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  if (viewMode === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.5) }}
        onClick={() => setSelectedEffectId(effect.id)}
        className="flex items-center gap-4 p-3 bg-[#111] border border-gray-800/50 rounded-xl hover:border-emerald-500/30 transition-all cursor-pointer group"
      >
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
            onClick={handleCopy}
            className="p-1.5 text-gray-600 hover:text-emerald-400 transition-colors"
            title="Copy code"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    );
  }

  // Grid view
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.5) }}
      onClick={() => setSelectedEffectId(effect.id)}
      className="group bg-[#111] border border-gray-800/50 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer"
      style={{ minHeight: `${cardSize * 2}px` }}
    >
      {/* Preview area */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: `${cardSize * 1.2}px` }}
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
        <div
          ref={previewRef}
          className="relative z-10 flex items-center justify-center scale-90 group-hover:scale-95 transition-transform duration-300"
        />
      </div>

      {/* Card info */}
      <div className="p-3 border-t border-gray-800/30">
        <div className="flex items-start justify-between gap-2 mb-1.5">
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

        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[effect.difficulty]}`}>
            {effect.difficulty}
          </span>
          <span className="text-[10px] text-gray-600 capitalize">{effect.category.replace('-', ' ')}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {effect.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-[#1a1a2e] text-gray-500 rounded">
              {tag}
            </span>
          ))}
          {effect.tags.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 text-gray-600">+{effect.tags.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
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
    </motion.div>
  );
}
