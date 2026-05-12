'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { effects } from '@/lib/effects-data';
import { useEffectsStore, getEffectViews, getCategoryColor, getSimulatedRating, minifyCSS } from '@/lib/effects-store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Code2, Eye, FileCode, Maximize2, Minimize2, Share2, Download, FileDown, Terminal, RotateCcw, BarChart3, ThumbsUp, ThumbsDown, Sun, Moon, FolderPlus, XCircle, Palette, ClipboardList } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';

// Enhanced syntax highlighting for CSS code
function highlightCSS(code: string): string {
  return code
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color:#6b7280;font-style:italic">$1</span>')
    .replace(/(@[\w-]+)/g, '<span style="color:#c084fc">$1</span>')
    .replace(/^([.#:@\[][\w\-"'=\\\s]*)(?=\s*\{)/gm, '<span style="color:#67e8f9">$1</span>')
    .replace(/^(\s*)([\w-]+)(\s*:)/gm, '$1<span style="color:#93c5fd">$2</span>$3')
    .replace(/(\b\d+\.?\d*)(px|rem|em|%|deg|s|ms|fr|vh|vw|turn|cm|mm|in|pt|pc)/g, '<span style="color:#fbbf24">$1$2</span>')
    .replace(/(#[0-9a-fA-F]{3,8})\b/g, '<span style="color:#f472b6">$1</span>')
    .replace(/\b(rgba?|hsla?)\s*\(/g, '<span style="color:#f472b6">$1(</span>')
    .replace(/\b(infinite|ease|linear|alternate|alternate-reverse|forwards|backwards|both|none|auto|transparent|solid|dashed|dotted|hidden|visible|relative|absolute|fixed|sticky|flex|grid|block|inline|inline-block|center|space-between|space-around|space-evenly|column|row|wrap|nowrap|inherit|initial|unset|ease-in-out|ease-in|ease-out|step-end|step-start|normal|pointer|collapse|separate|cover|contain|scroll|no-repeat|border-box|content-box|bold|italic|uppercase|lowercase|capitalize|baseline|middle|top|bottom|left|right|start|end|stretch|scale|rotate|translate|skew|matrix|perspective|currentcolor|evenodd|nonzero)\b/g, '<span style="color:#34d399">$1</span>')
    .replace(/(!important)/g, '<span style="color:#f87171;font-weight:bold">$1</span>')
    .replace(/(["'])([^"']*)\1/g, '<span style="color:#fbbf24">$1$2$1</span>')
    .replace(/([{}])/g, '<span style="color:#9ca3af">$1</span>');
}

function highlightHTML(code: string): string {
  return code
    .replace(/(&lt;|<)(\/?)([\w-]+)/g, '$1$2<span style="color:#f472b6">$3</span>')
    .replace(/([\w-]+)(=)/g, '<span style="color:#93c5fd">$1</span><span style="color:#9ca3af">$2</span>')
    .replace(/(".*?")/g, '<span style="color:#fbbf24">$1</span>')
    .replace(/(\/?>)/g, '<span style="color:#9ca3af">$1</span>')
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span style="color:#6b7280;font-style:italic">$1</span>');
}

function addLineNumbers(code: string, isDark: boolean): string {
  const lines = code.split('\n');
  const maxLineNum = lines.length.toString().length;
  return lines
    .map((line, i) => {
      const num = (i + 1).toString().padStart(maxLineNum, ' ');
      return `<span class="${isDark ? 'text-gray-600' : 'text-gray-400'} select-none pr-4 border-r ${isDark ? 'border-gray-800/50' : 'border-gray-200'} mr-4 inline-block" style="min-width:${maxLineNum + 1}ch">${num}</span>${line}`;
    })
    .join('\n');
}

// CSS Statistics analyzer
function analyzeCSS(cssCode: string) {
  const lines = cssCode.split('\n').filter(l => l.trim().length > 0);
  const totalLines = lines.length;

  // Unique CSS properties
  const propertyRegex = /^\s*([\w-]+)\s*:/gm;
  const properties = new Set<string>();
  let match;
  while ((match = propertyRegex.exec(cssCode)) !== null) {
    properties.add(match[1]);
  }

  // Keyframe animations
  const keyframeMatches = cssCode.match(/@keyframes\s+[\w-]+/g) || [];
  const keyframeCount = keyframeMatches.length;

  // CSS selectors
  const selectorRegex = /^([^@{}\/\n][^{]*)\{/gm;
  const selectors = new Set<string>();
  while ((match = selectorRegex.exec(cssCode)) !== null) {
    selectors.add(match[1].trim());
  }

  // Property type distribution
  const layoutProps = ['display', 'position', 'top', 'right', 'bottom', 'left', 'width', 'height', 'margin', 'padding', 'flex', 'grid', 'align', 'justify', 'gap', 'float', 'clear', 'overflow', 'z-index', 'transform', 'box-sizing'];
  const colorProps = ['color', 'background', 'border-color', 'outline-color', 'box-shadow', 'text-shadow', 'filter', 'opacity', 'fill', 'stroke'];
  const animationProps = ['animation', 'transition', 'keyframes', 'transform', 'will-change'];
  const typographyProps = ['font', 'text', 'letter-spacing', 'line-height', 'word-spacing', 'white-space'];

  let layoutCount = 0, colorCount = 0, animationCount = 0, typographyCount = 0, otherCount = 0;

  properties.forEach((prop) => {
    if (layoutProps.some(p => prop.includes(p))) layoutCount++;
    else if (colorProps.some(p => prop.includes(p))) colorCount++;
    else if (animationProps.some(p => prop.includes(p))) animationCount++;
    else if (typographyProps.some(p => prop.includes(p))) typographyCount++;
    else otherCount++;
  });

  const total = layoutCount + colorCount + animationCount + typographyCount + otherCount;

  // Complexity score based on multiple factors
  const complexityScore = Math.min(100, Math.round(
    (totalLines * 0.8) +
    (properties.size * 1.5) +
    (keyframeCount * 10) +
    (selectors.size * 2)
  ));

  // Browser compatibility estimate (simple heuristic)
  const modernProps = ['container', 'has', 'is', 'where', 'nesting', 'subgrid', 'scroll-snap', 'aspect-ratio', 'clamp', 'min', 'max'];
  let compatScore = 95;
  modernProps.forEach(prop => {
    if (cssCode.toLowerCase().includes(prop)) compatScore -= 5;
  });
  if (cssCode.includes('-webkit-') || cssCode.includes('-moz-') || cssCode.includes('-ms-')) compatScore = Math.min(compatScore + 5, 98);

  return {
    totalLines,
    uniqueProperties: properties.size,
    keyframeCount,
    selectorCount: selectors.size,
    propertyDistribution: {
      layout: { count: layoutCount, pct: total > 0 ? Math.round((layoutCount / total) * 100) : 0 },
      color: { count: colorCount, pct: total > 0 ? Math.round((colorCount / total) * 100) : 0 },
      animation: { count: animationCount, pct: total > 0 ? Math.round((animationCount / total) * 100) : 0 },
      typography: { count: typographyCount, pct: total > 0 ? Math.round((typographyCount / total) * 100) : 0 },
      other: { count: otherCount, pct: total > 0 ? Math.round((otherCount / total) * 100) : 0 },
    },
    complexityScore,
    compatScore: Math.max(compatScore, 60),
  };
}

// Feature 2: Color Palette Extractor - extract colors from CSS code
interface ExtractedColor {
  value: string;
  type: 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla';
}

function extractColors(cssCode: string, htmlCode: string): ExtractedColor[] {
  const colors: ExtractedColor[] = [];
  const seen = new Set<string>();
  const combined = cssCode + '\n' + htmlCode;

  // Extract hex colors (#rgb, #rrggbb, #rrggbbaa)
  const hexMatches = combined.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
  hexMatches.forEach(hex => {
    const normalized = hex.toLowerCase();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      colors.push({ value: normalized, type: 'hex' });
    }
  });

  // Extract rgb/rgba
  const rgbMatches = combined.match(/rgba?\s*\([^)]+\)/g) || [];
  rgbMatches.forEach(rgb => {
    const normalized = rgb.replace(/\s/g, '').toLowerCase();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      const type = rgb.startsWith('rgba') ? 'rgba' : 'rgb';
      colors.push({ value: rgb.trim(), type });
    }
  });

  // Extract hsl/hsla
  const hslMatches = combined.match(/hsla?\s*\([^)]+\)/g) || [];
  hslMatches.forEach(hsl => {
    const normalized = hsl.replace(/\s/g, '').toLowerCase();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      const type = hsl.startsWith('hsla') ? 'hsla' : 'hsl';
      colors.push({ value: hsl.trim(), type });
    }
  });

  return colors;
}

// Convert any color to hex for display
function colorToHex(color: ExtractedColor): string {
  if (color.type === 'hex') return color.value;
  // For rgb/rgba/hsl, use a canvas trick via the browser
  return color.value; // fallback: show raw value
}

// Color Palette Tab Component
function ColorPaletteTab({ effect, isDark, copied, setCopied }: {
  effect: CSSEffect;
  isDark: boolean;
  copied: string | null;
  setCopied: (v: string | null) => void;
}) {
  const colors = useMemo(() => extractColors(effect.cssCode, effect.htmlCode), [effect.cssCode, effect.htmlCode]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // Inject preview for color tab
  useEffect(() => {
    if (!previewRef.current) return;
    const uniquePrefix = `colors-${effect.id}-`;
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
        modifiedCss = modifiedCss.replace(new RegExp(`@keyframes\\s+${animName}`, 'g'), `@keyframes ${uniqueAnimName}`);
        modifiedCss = modifiedCss.replace(new RegExp(`animation:\\s*([^}]*?)${animName}`, 'g'), `animation: $1${uniqueAnimName}`);
      });
    }
    if (styleRef.current) styleRef.current.remove();
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
          modifiedHtml = modifiedHtml.replace(new RegExp(`class="${className}"`, 'g'), `class="${uniquePrefix}${className}"`);
          modifiedHtml = modifiedHtml.replace(new RegExp(`class="${className} `, 'g'), `class="${uniquePrefix}${className} `);
        }
      });
    }
    previewRef.current.innerHTML = modifiedHtml;
    return () => { if (styleRef.current) { styleRef.current.remove(); styleRef.current = null; } };
  }, [effect]);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
    toast.success(`Copied ${color}`, { duration: 1500 });
  };

  const handleCopyAllColors = () => {
    const cssVars = colors.map((c, i) => `  --color-${i + 1}: ${c.value};`).join('\n');
    const block = `:root {\n${cssVars}\n}`;
    navigator.clipboard.writeText(block);
    setCopied('colors');
    setTimeout(() => setCopied(null), 2000);
    toast.success('All colors copied as CSS variables!', { duration: 2000 });
  };

  return (
    <div className={`${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
      {/* Mini preview at top */}
      <div className={`flex items-center justify-center p-6 border-b relative ${isDark ? 'border-gray-800/30' : 'border-gray-200'}`}>
        <div ref={previewRef} className="relative z-10 transform scale-110" />
      </div>

      <div className="p-6">
        {/* Header with copy all */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Extracted Colors
            </h3>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {colors.length} color{colors.length !== 1 ? 's' : ''} found in CSS &amp; HTML
            </p>
          </div>
          {colors.length > 0 && (
            <button
              onClick={handleCopyAllColors}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all"
              aria-label="Copy all colors as CSS variables"
            >
              {copied === 'colors' ? <Check className="w-3 h-3" /> : <ClipboardList className="w-3 h-3" />}
              {copied === 'colors' ? 'Copied!' : 'Copy All'}
            </button>
          )}
        </div>

        {colors.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${isDark ? 'bg-gray-800/30' : 'bg-gray-100'}`}>
              <Palette className={`w-8 h-8 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
            <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>No colors found</p>
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>This effect doesn&apos;t use explicit color values</p>
          </div>
        ) : (
          <>
            {/* Color swatches grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {colors.map((color, i) => {
                const displayValue = color.type === 'hex' ? color.value : color.value;
                const isCopied = copiedColor === color.value;
                return (
                  <motion.button
                    key={`${color.value}-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    onClick={() => handleCopyColor(color.value)}
                    className={`group flex flex-col items-center gap-2 p-3 rounded-xl border transition-all cursor-pointer hover:scale-105 ${
                      isCopied
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : isDark ? 'border-gray-800/50 bg-[#111] hover:border-gray-700' : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    aria-label={`Copy color ${color.value}`}
                  >
                    {/* Color swatch */}
                    <div
                      className="w-12 h-12 rounded-lg border shadow-sm relative overflow-hidden"
                      style={{
                        backgroundColor: color.value,
                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                      }}
                    >
                      {/* Checkerboard for transparency */}
                      {color.type === 'rgba' && (
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)',
                          backgroundSize: '8px 8px',
                          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
                          zIndex: 0,
                        }} />
                      )}
                      {/* Copied checkmark overlay */}
                      {isCopied && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                    {/* Color value */}
                    <span className={`text-[10px] font-mono truncate w-full text-center transition-colors ${
                      isCopied
                        ? 'text-emerald-400'
                        : isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-gray-700'
                    }`}>
                      {displayValue}
                    </span>
                    {/* Type badge */}
                    <span className={`text-[8px] uppercase font-medium px-1.5 py-0.5 rounded ${
                      color.type === 'hex'
                        ? 'bg-pink-500/10 text-pink-400/70'
                        : color.type === 'rgb' || color.type === 'rgba'
                          ? 'bg-blue-500/10 text-blue-400/70'
                          : 'bg-purple-500/10 text-purple-400/70'
                    }`}>
                      {color.type}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* CSS Variables Preview */}
            <div className={`mt-6 p-4 rounded-xl border ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>CSS Variables Preview</h4>
              </div>
              <pre className={`text-[11px] font-mono leading-relaxed overflow-x-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <code>:root {'{'}</code>
                {'\n'}{colors.map((c, i) => (
                  <span key={i}>
                    {'  '}<span style={{ color: '#f472b6' }}>--color-{i + 1}</span>: <span style={{ color: '#34d399' }}>{c.value}</span>;
                    {i < colors.length - 1 ? '\n' : ''}
                  </span>
                ))}
                {'\n'}{'}'}
              </pre>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Inner modal content - resets via key when effect changes
function ModalContent({ effect }: { effect: CSSEffect }) {
  const { setSelectedEffectId, theme, playgroundCss, setPlaygroundCss, resetPlaygroundCss, ratings, rateEffect, previewDarkMode, setPreviewDarkMode, userCollections, addUserCollection, addEffectToCollection, COLLECTION_COLORS } = useEffectsStore();
  const [activeTab, setActiveTab] = useState<'preview' | 'css' | 'html' | 'playground' | 'statistics' | 'colors'>('preview');
  const [copied, setCopied] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [tabKey, setTabKey] = useState(0);
  const [prevTab, setPrevTab] = useState<string>('preview');
  const [tabDirection, setTabDirection] = useState<'left' | 'right'>('right');
  const [ratingAnim, setRatingAnim] = useState<'up' | 'down' | null>(null);
  const [showCollectionMenu, setShowCollectionMenu] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState('');
  const previewRef = useRef<HTMLDivElement>(null);
  const playgroundPreviewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const playgroundStyleRef = useRef<HTMLStyleElement | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDark = theme === 'dark';

  const userRating = ratings[effect.id] || null;
  const simulatedRating = getSimulatedRating(effect.id);

  const injectPreview = useCallback(() => {
    if (!effect || !previewRef.current) return;

    const uniquePrefix = `detail-${effect.id}-`;
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

    previewRef.current.innerHTML = modifiedHtml;
  }, [effect]);

  // Inject playground preview with modified CSS
  const injectPlaygroundPreview = useCallback((cssToUse: string) => {
    if (!effect || !playgroundPreviewRef.current) return;

    const uniquePrefix = `playground-${effect.id}-`;
    let modifiedCss = cssToUse;

    const classMatches = cssToUse.match(/\.([a-zA-Z0-9_-]+)/g);
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

    if (playgroundStyleRef.current) {
      playgroundStyleRef.current.remove();
    }

    const style = document.createElement('style');
    style.textContent = modifiedCss;
    document.head.appendChild(style);
    playgroundStyleRef.current = style;

    let modifiedHtml = effect.htmlCode;
    if (classMatches) {
      const uniqueClasses = new Set<string>();
      classMatches.forEach((match) => {
        const className = match.substring(1);
        if (!uniqueClasses.has(className)) {
          uniqueClasses.add(className);
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

    playgroundPreviewRef.current.innerHTML = modifiedHtml;
  }, [effect]);

  useEffect(() => {
    if (effect && activeTab === 'preview') {
      const timer = setTimeout(injectPreview, 100);
      return () => clearTimeout(timer);
    }
    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, [effect, activeTab, injectPreview]);

  // Playground preview - debounced update
  useEffect(() => {
    if (activeTab !== 'playground') return;
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      const cssToUse = playgroundCss || effect.cssCode;
      injectPlaygroundPreview(cssToUse);
    }, 300);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (playgroundStyleRef.current) {
        playgroundStyleRef.current.remove();
        playgroundStyleRef.current = null;
      }
    };
  }, [playgroundCss, activeTab, effect, injectPlaygroundPreview]);

  // Initialize playground CSS when switching to playground tab
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      resetPlaygroundCss();
      setSelectedEffectId(null);
    }, 200);
  }, [resetPlaygroundCss, setSelectedEffectId]);

  useEffect(() => {
    if (activeTab === 'playground' && !playgroundCss) {
      setPlaygroundCss(effect.cssCode);
    }
  }, [activeTab, effect.cssCode, playgroundCss, setPlaygroundCss]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, handleClose]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label === 'all' ? 'All code' : label.toUpperCase()} copied to clipboard!`, { duration: 2000 });
    setTimeout(() => setCopied(null), 2000);
  };

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#effect=${effect.id}`;
    navigator.clipboard.writeText(url);
    toast.success('Share URL copied to clipboard!', { duration: 2000 });
  };

  const handleExportHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${effect.name} - CSS Effect</title>
  <style>
    /* Reset */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1a1a2e;
      font-family: system-ui, -apple-system, sans-serif;
    }

    /* Effect CSS */
${effect.cssCode}
  </style>
</head>
<body>
  ${effect.htmlCode}
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${effect.id}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('HTML file exported!', { duration: 2000 });
  };

  const handleExportCSS = () => {
    const blob = new Blob([effect.cssCode], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${effect.id}.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('CSS file exported!', { duration: 2000 });
  };

  const handleExportMinifiedCSS = () => {
    const originalSize = new Blob([effect.cssCode]).size;
    const minified = minifyCSS(effect.cssCode);
    const minifiedSize = new Blob([minified]).size;
    const reduction = Math.round(((originalSize - minifiedSize) / originalSize) * 100);
    const blob = new Blob([minified], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${effect.id}.min.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Minified: ${(originalSize / 1024).toFixed(1)}KB → ${(minifiedSize / 1024).toFixed(1)}KB (${reduction}% smaller)`, { duration: 3000 });
  };

  const handlePlaygroundReset = () => {
    setPlaygroundCss(effect.cssCode);
    toast.success('CSS reset to original', { duration: 1500 });
  };

  const handleCopyModified = () => {
    const cssToCopy = playgroundCss || effect.cssCode;
    navigator.clipboard.writeText(cssToCopy);
    setCopied('playground');
    toast.success('Modified CSS copied to clipboard!', { duration: 2000 });
    setTimeout(() => setCopied(null), 2000);
  };

  const handleRate = (rating: 'up' | 'down') => {
    rateEffect(effect.id, rating);
    setRatingAnim(rating);
    setTimeout(() => setRatingAnim(null), 350);
    const current = ratings[effect.id];
    if (current === rating) {
      toast('Rating removed', { duration: 1500 });
    } else {
      toast(rating === 'up' ? '👍 Liked!' : '👎 Not for me', { duration: 1500 });
    }
  };

  const difficultyColors = {
    beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  const catColor = getCategoryColor(effect.category);
  const cssLines = effect.cssCode.split('\n').length;
  const viewCount = getEffectViews(effect.id);
  const formatViews = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  const tabConfig = [
    { id: 'preview' as const, label: 'Preview', icon: Eye },
    { id: 'css' as const, label: 'CSS', icon: Code2 },
    { id: 'html' as const, label: 'HTML', icon: FileCode },
    { id: 'colors' as const, label: 'Colors', icon: Palette },
    { id: 'playground' as const, label: 'Playground', icon: Terminal },
    { id: 'statistics' as const, label: 'Statistics', icon: BarChart3 },
  ];

  // Related effects - same category or overlapping tags
  const relatedEffects = effects
    .filter(e => e.id !== effect.id)
    .map(e => ({
      effect: e,
      score: (e.category === effect.category ? 2 : 0) + e.tags.filter(t => effect.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(r => r.effect);

  // CSS statistics
  const cssStats = analyzeCSS(effect.cssCode);

  return (
    <>
      {/* Backdrop with zoom blur effect */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px) brightness(1)' }}
        animate={{ opacity: 1, backdropFilter: isClosing ? 'blur(0px) brightness(1)' : 'blur(8px) brightness(0.95)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px) brightness(1)' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 z-50"
        onClick={handleClose}
      />

      {/* Modal with glass morphism and staggered reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{
          opacity: isClosing ? 0 : 1,
          scale: isClosing ? 0.94 : 1,
          y: isClosing ? 10 : 0,
        }}
        exit={{ opacity: 0, scale: 0.94, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, duration: isClosing ? 0.2 : undefined }}
        className={`fixed z-50 overflow-hidden flex flex-col glass-modal rounded-2xl ${
          isFullscreen
            ? 'inset-2'
            : 'inset-4 md:inset-8 lg:inset-16'
        }`}
      >
        {/* Gradient border wrapper */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            padding: '1.5px',
            background: 'linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981)',
            backgroundSize: '300% 300%',
          }}
        >
          <div className={`w-full h-full rounded-2xl ${isDark ? 'bg-[#0f0f1a]' : 'bg-white/95'}`} />
        </div>

        <div className={`relative flex flex-col h-full rounded-2xl overflow-hidden ${isDark ? 'bg-[#0f0f1a]' : 'bg-white/95'}`}>
          {/* Header - with gradient background, enhanced design */}
          <div className={`flex items-center justify-between px-6 py-4 border-b modal-stagger-header modal-header-gradient ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Small preview thumbnail */}
              <div
                className={`w-10 h-10 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border ${
                  isDark ? 'bg-[#0a0a0a] border-gray-800/30' : 'bg-gray-50 border-gray-200'
                }`}
                dangerouslySetInnerHTML={{ __html: effect.htmlCode.substring(0, 200) }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className={`text-lg font-bold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{effect.name}</h2>
                  {/* Category color badge - more prominent */}
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full border capitalize"
                    style={{ backgroundColor: `${catColor}18`, color: catColor, borderColor: `${catColor}30` }}
                  >
                    {effect.category.replace('-', ' ')}
                  </span>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[effect.difficulty]}`}>
                    {effect.difficulty}
                  </span>
                  {effect.isNew && (
                    <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded new-badge-pulse">
                      NEW
                    </span>
                  )}
                  {/* Line count indicator */}
                  <span className={`text-[10px] flex items-center gap-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Code2 className="w-3 h-3" />
                    {cssLines} lines
                  </span>
                  <span className={`text-[10px] flex items-center gap-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Eye className="w-3 h-3" />
                    {formatViews(viewCount)} views
                  </span>
                  {/* Rating percentage */}
                  <span className={`text-[10px] font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {simulatedRating}% positive
                  </span>
                </div>
                <p className={`text-xs mt-1 truncate ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{effect.description}</p>
              </div>
            </div>
            {/* Action buttons - grouped */}
            <div className="flex items-center gap-1 shrink-0 ml-3">
              <button
                onClick={handleExportHTML}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10'
                }`}
                title="Export as HTML file"
                aria-label="Export as HTML file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Export</span>
              </button>
              <button
                onClick={handleExportCSS}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10'
                }`}
                title="Export CSS only"
                aria-label="Export CSS only"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">CSS</span>
              </button>
              <button
                onClick={handleExportMinifiedCSS}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-amber-400 hover:bg-amber-500/10'
                    : 'text-gray-400 hover:text-amber-600 hover:bg-amber-500/10'
                }`}
                title="Export minified CSS"
                aria-label="Export minified CSS"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Minified</span>
              </button>
              <button
                onClick={handleShare}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10'
                }`}
                title="Copy share URL"
                aria-label="Share effect URL"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Share</span>
              </button>
              {/* Save to Collection button */}
              <div className="relative">
                <button
                  onClick={() => setShowCollectionMenu(!showCollectionMenu)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all text-xs ${
                    isDark
                      ? 'text-gray-500 hover:text-purple-400 hover:bg-purple-500/10'
                      : 'text-gray-400 hover:text-purple-600 hover:bg-purple-500/10'
                  }`}
                  title="Save to collection"
                  aria-label="Save to collection"
                >
                  <FolderPlus className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">Save</span>
                </button>
                <AnimatePresence>
                  {showCollectionMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={`absolute right-0 top-full mt-1 w-64 rounded-xl border shadow-xl z-50 overflow-hidden ${
                        isDark ? 'bg-[#111] border-gray-800 shadow-black/30' : 'bg-white border-gray-200 shadow-gray-200/50'
                      }`}
                    >
                      <div className={`px-3 py-2 border-b flex items-center justify-between ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Save to Collection</span>
                        <button onClick={() => setShowCollectionMenu(false)} className={`${isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`} aria-label="Close menu">
                          <XCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="max-h-40 overflow-y-auto custom-scrollbar">
                        {userCollections.length === 0 && (
                          <div className={`px-3 py-3 text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>No collections yet. Create one below.</div>
                        )}
                        {userCollections.map((col) => {
                          const isInCollection = col.effectIds.includes(effect.id);
                          return (
                            <button
                              key={col.id}
                              onClick={() => {
                                if (!isInCollection) {
                                  addEffectToCollection(col.id, effect.id);
                                  toast.success(`Added to "${col.name}"`, { duration: 2000 });
                                }
                                setShowCollectionMenu(false);
                              }}
                              className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 transition-colors ${
                                isInCollection
                                  ? isDark ? 'text-emerald-400/60' : 'text-emerald-600/60'
                                  : isDark ? 'text-gray-400 hover:bg-white/5 hover:text-gray-200' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                              }`}
                              disabled={isInCollection}
                            >
                              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: col.color }} />
                              <span className="truncate">{col.name}</span>
                              {isInCollection && <span className="ml-auto text-[9px] text-emerald-400/50">✓ saved</span>}
                            </button>
                          );
                        })}
                      </div>
                      <div className={`px-3 py-2 border-t ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
                        <div className="flex gap-1.5">
                          <input
                            value={newCollectionName}
                            onChange={(e) => setNewCollectionName(e.target.value)}
                            placeholder="New collection..."
                            className={`flex-1 px-2 py-1 text-xs rounded-md border ${
                              isDark ? 'bg-[#0a0a0a] border-gray-800 text-gray-200 placeholder:text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                            }`}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && newCollectionName.trim()) {
                                const color = COLLECTION_COLORS[userCollections.length % COLLECTION_COLORS.length];
                                addUserCollection(newCollectionName.trim(), color);
                                toast.success(`Collection "${newCollectionName.trim()}" created!`, { duration: 2000 });
                                setNewCollectionName('');
                              }
                            }}
                          />
                          <button
                            onClick={() => {
                              if (newCollectionName.trim()) {
                                const color = COLLECTION_COLORS[userCollections.length % COLLECTION_COLORS.length];
                                addUserCollection(newCollectionName.trim(), color);
                                toast.success(`Collection "${newCollectionName.trim()}" created!`, { duration: 2000 });
                                setNewCollectionName('');
                              }
                            }}
                            className="px-2 py-1 text-[10px] font-medium rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors"
                            aria-label="Create collection"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={`w-px h-5 mx-1 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className={`p-2 rounded-lg transition-all ${
                  isDark ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
                }`}
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen preview'}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen preview'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleClose}
                className={`p-2 rounded-lg transition-all ${
                  isDark ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tabs with icons - staggered reveal */}
          <div className={`flex border-b modal-stagger-tabs ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            {tabConfig.map((tab) => {
              const tabIndex = tabConfig.findIndex(t => t.id === tab.id);
              const activeIndex = tabConfig.findIndex(t => t.id === activeTab);
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setTabDirection(tabIndex > activeIndex ? 'right' : 'left');
                    setPrevTab(activeTab);
                    setActiveTab(tab.id);
                    setTabKey(prev => prev + 1);
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all relative ${
                    activeTab === tab.id
                      ? 'text-emerald-400 border-b-2 border-emerald-400'
                      : isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" style={{ animation: 'border-bottom-grow 0.2s ease-out forwards' }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content - with directional slide animation and blur */}
          <div className={`flex-1 overflow-auto custom-scrollbar modal-stagger-content modal-tab-blur ${tabDirection === 'right' ? 'tab-slide-in-right' : 'tab-slide-in-left'}`} key={tabKey}>
            {activeTab === 'preview' && (
              <div className={`flex items-center justify-center p-10 relative ${
                previewDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'
              } ${isFullscreen ? 'min-h-[calc(100vh-180px)]' : 'min-h-[400px]'}`}>
                {/* Dark/Light preview toggle */}
                <button
                  onClick={() => setPreviewDarkMode(!previewDarkMode)}
                  className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                    previewDarkMode
                      ? 'bg-white/10 border-gray-700 text-gray-400 hover:text-amber-400 hover:border-amber-500/30'
                      : 'bg-gray-100 border-gray-300 text-gray-600 hover:text-amber-600 hover:border-amber-400'
                  }`}
                  aria-label={previewDarkMode ? 'Switch to light preview' : 'Switch to dark preview'}
                  title={previewDarkMode ? 'Preview on light background' : 'Preview on dark background'}
                >
                  {previewDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  {previewDarkMode ? 'Light' : 'Dark'}
                </button>
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: previewDarkMode
                      ? 'radial-gradient(circle, #fff 1px, transparent 1px)'
                      : 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
                <div ref={previewRef} className="relative z-10 transform scale-125" />
              </div>
            )}

            {activeTab === 'css' && (
              <div className="relative code-block-overlay">
                <button
                  onClick={() => handleCopy(effect.cssCode, 'css')}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all z-10"
                  aria-label="Copy CSS code"
                >
                  {copied === 'css' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied === 'css' ? 'Copied!' : 'Copy CSS'}
                </button>
                <pre className={`p-6 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed m-0 ${isDark ? 'bg-[#0a0a0a] text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                  <code dangerouslySetInnerHTML={{ __html: addLineNumbers(highlightCSS(effect.cssCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')), isDark) }} />
                </pre>
              </div>
            )}

            {activeTab === 'html' && (
              <div className="relative code-block-overlay">
                <button
                  onClick={() => handleCopy(effect.htmlCode, 'html')}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all z-10"
                  aria-label="Copy HTML code"
                >
                  {copied === 'html' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied === 'html' ? 'Copied!' : 'Copy HTML'}
                </button>
                <pre className={`p-6 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed m-0 ${isDark ? 'bg-[#0a0a0a] text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                  <code dangerouslySetInnerHTML={{ __html: addLineNumbers(highlightHTML(effect.htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')), isDark) }} />
                </pre>
              </div>
            )}

            {activeTab === 'colors' && (
              <ColorPaletteTab effect={effect} isDark={isDark} copied={copied} setCopied={setCopied} />
            )}

            {activeTab === 'playground' && (
              <div className="flex flex-col lg:flex-row h-full min-h-[400px]">
                {/* Left: Code editor */}
                <div className="w-full lg:w-1/2 flex flex-col border-r border-gray-800/30">
                  <div className={`flex items-center justify-between px-4 py-2 border-b ${isDark ? 'border-gray-800/50 bg-[#0d1117]' : 'border-gray-200 bg-gray-50'}`}>
                    <span className={`text-xs font-medium flex items-center gap-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Terminal className="w-3 h-3" />
                      CSS Editor
                      <span className="playground-cursor" />
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePlaygroundReset}
                        className="flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded border transition-all bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20"
                        aria-label="Reset CSS to original"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                        Reset
                      </button>
                      <button
                        onClick={handleCopyModified}
                        className="flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded border transition-all bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20"
                        aria-label="Copy modified CSS"
                      >
                        {copied === 'playground' ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                        {copied === 'playground' ? 'Copied!' : 'Copy Modified'}
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 relative">
                    {/* Line numbers background */}
                    <div className="absolute inset-0 flex">
                      <div className={`w-10 shrink-0 py-4 text-right pr-2 text-[13px] leading-[1.6] font-mono select-none ${isDark ? 'bg-[#0d1117] text-gray-700' : 'bg-gray-100 text-gray-400'}`}>
                        {(playgroundCss || effect.cssCode).split('\n').map((_, i) => (
                          <div key={i}>{i + 1}</div>
                        ))}
                      </div>
                      <textarea
                        value={playgroundCss || effect.cssCode}
                        onChange={(e) => setPlaygroundCss(e.target.value)}
                        className="playground-textarea flex-1 border-0 rounded-none"
                        spellCheck={false}
                        aria-label="CSS code editor"
                      />
                    </div>
                  </div>
                </div>
                {/* Right: Live preview */}
                <div className={`w-full lg:w-1/2 flex flex-col ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
                  <div className={`flex items-center px-4 py-2 border-b ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
                    <span className={`text-xs font-medium flex items-center gap-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Eye className="w-3 h-3" />
                      Live Preview
                    </span>
                    <span className={`ml-2 text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      Auto-updates as you type (300ms delay)
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center p-10 relative">
                    <div className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: isDark
                          ? 'radial-gradient(circle, #fff 1px, transparent 1px)'
                          : 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    />
                    <div ref={playgroundPreviewRef} className="relative z-10 transform scale-110" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'statistics' && (
              <div className={`p-6 space-y-6 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
                {/* Overview stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Lines', value: cssStats.totalLines, color: '#10b981' },
                    { label: 'Unique Properties', value: cssStats.uniqueProperties, color: '#3b82f6' },
                    { label: 'Keyframes', value: cssStats.keyframeCount, color: '#8b5cf6' },
                    { label: 'Selectors', value: cssStats.selectorCount, color: '#f59e0b' },
                  ].map((stat) => (
                    <div key={stat.label} className={`p-4 rounded-xl border ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200'}`}>
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Property type distribution */}
                <div className={`p-5 rounded-xl border ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200'}`}>
                  <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Property Distribution</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Layout', ...cssStats.propertyDistribution.layout, color: '#10b981' },
                      { label: 'Color', ...cssStats.propertyDistribution.color, color: '#3b82f6' },
                      { label: 'Animation', ...cssStats.propertyDistribution.animation, color: '#8b5cf6' },
                      { label: 'Typography', ...cssStats.propertyDistribution.typography, color: '#f59e0b' },
                      { label: 'Other', ...cssStats.propertyDistribution.other, color: '#6b7280' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className={`text-xs w-20 shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</span>
                        <div className={`flex-1 h-5 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                          <div
                            className="stats-bar h-full"
                            style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                          />
                        </div>
                        <span className={`text-xs w-16 text-right shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.count} ({item.pct}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complexity & Browser Compatibility */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-5 rounded-xl border ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200'}`}>
                    <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Complexity Score</h3>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20">
                        <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                          <circle cx="18" cy="18" r="16" fill="none" stroke={isDark ? '#1a1a2e' : '#e5e7eb'} strokeWidth="3" />
                          <circle cx="18" cy="18" r="16" fill="none"
                            stroke={cssStats.complexityScore > 70 ? '#f87171' : cssStats.complexityScore > 40 ? '#fbbf24' : '#10b981'}
                            strokeWidth="3"
                            strokeDasharray={`${cssStats.complexityScore * 1.005} 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{cssStats.complexityScore}</span>
                        </div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${
                          cssStats.complexityScore > 70 ? 'text-red-400' :
                          cssStats.complexityScore > 40 ? 'text-yellow-400' : 'text-emerald-400'
                        }`}>
                          {cssStats.complexityScore > 70 ? 'Complex' : cssStats.complexityScore > 40 ? 'Medium' : 'Simple'}
                        </div>
                        <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          Based on lines, properties, keyframes &amp; selectors
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-5 rounded-xl border ${isDark ? 'bg-[#111] border-gray-800/50' : 'bg-white border-gray-200'}`}>
                    <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Browser Compatibility</h3>
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20">
                        <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                          <circle cx="18" cy="18" r="16" fill="none" stroke={isDark ? '#1a1a2e' : '#e5e7eb'} strokeWidth="3" />
                          <circle cx="18" cy="18" r="16" fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            strokeDasharray={`${cssStats.compatScore * 1.005} 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{cssStats.compatScore}%</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-emerald-400">Estimated</div>
                        <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          Based on CSS properties used (heuristic)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Effects Section */}
          {relatedEffects.length > 0 && activeTab !== 'statistics' && (
            <div className={`px-6 py-3 border-t ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Related Effects
              </div>
              <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
                {relatedEffects.map((relEffect) => {
                  const relCatColor = getCategoryColor(relEffect.category);
                  return (
                    <button
                      key={relEffect.id}
                      onClick={() => {
                        setSelectedEffectId(relEffect.id);
                      }}
                      className={`related-card-hover flex items-center gap-2 px-3 py-2 rounded-lg border shrink-0 text-left min-w-[160px] ${
                        isDark
                          ? 'bg-[#111] border-gray-800/50 hover:border-emerald-500/30'
                          : 'bg-white border-gray-200 hover:border-emerald-500/40'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded overflow-hidden shrink-0 flex items-center justify-center border"
                        style={{ backgroundColor: `${relCatColor}10`, borderColor: `${relCatColor}20` }}
                        dangerouslySetInnerHTML={{ __html: relEffect.htmlCode.substring(0, 100) }}
                      />
                      <div className="min-w-0">
                        <div className={`text-xs font-medium truncate ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {relEffect.name}
                        </div>
                        <div className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                          {relEffect.difficulty}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tags footer with rating buttons */}
          <div className={`px-6 py-3 border-t flex flex-wrap gap-2 items-center ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            {/* Rating buttons */}
            <div className="flex items-center gap-1 mr-3">
              <button
                onClick={() => handleRate('up')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border ${
                  userRating === 'up'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : isDark
                      ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10 border-gray-800/30'
                      : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10 border-gray-200'
                } ${ratingAnim === 'up' ? 'rating-pop' : ''}`}
                aria-label="Thumbs up"
                aria-pressed={userRating === 'up'}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{simulatedRating}%</span>
              </button>
              <button
                onClick={() => handleRate('down')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border ${
                  userRating === 'down'
                    ? 'bg-red-500/20 text-red-400 border-red-500/30'
                    : isDark
                      ? 'text-gray-500 hover:text-red-400 hover:bg-red-500/10 border-gray-800/30'
                      : 'text-gray-400 hover:text-red-500 hover:bg-red-500/10 border-gray-200'
                } ${ratingAnim === 'down' ? 'rating-pop' : ''}`}
                aria-label="Thumbs down"
                aria-pressed={userRating === 'down'}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {effect.tags.map((tag) => (
              <span key={tag} className={`text-[11px] px-2 py-0.5 rounded-full ${isDark ? 'bg-[#1a1a2e] text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                {tag}
              </span>
            ))}
            <div className="flex-1" />
            <button
              onClick={() => handleCopy(effect.cssCode + '\n\n' + effect.htmlCode, 'all')}
              className="flex items-center gap-1.5 px-5 py-2 bg-emerald-500 text-black rounded-lg text-xs font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              aria-label="Copy all code"
            >
              {copied === 'all' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied === 'all' ? 'Copied!' : 'Copy All Code'}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function EffectDetailModal() {
  const { selectedEffectId } = useEffectsStore();
  const effect = effects.find((e) => e.id === selectedEffectId) || null;

  return (
    <AnimatePresence>
      {selectedEffectId && effect && (
        <ModalContent key={effect.id} effect={effect} />
      )}
    </AnimatePresence>
  );
}
