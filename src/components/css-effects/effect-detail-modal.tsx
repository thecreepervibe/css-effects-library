'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { effects } from '@/lib/effects-data';
import { useEffectsStore, getEffectViews } from '@/lib/effects-store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Code2, Eye, FileCode, Maximize2, Minimize2, Share2, Download, FileDown, Terminal, RotateCcw, Eye as EyeIcon } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
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

// Inner modal content - resets via key when effect changes
function ModalContent({ effect }: { effect: CSSEffect }) {
  const { setSelectedEffectId, theme, playgroundCss, setPlaygroundCss, resetPlaygroundCss } = useEffectsStore();
  const [activeTab, setActiveTab] = useState<'preview' | 'css' | 'html' | 'playground'>('preview');
  const [copied, setCopied] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [tabKey, setTabKey] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const playgroundPreviewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);
  const playgroundStyleRef = useRef<HTMLStyleElement | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDark = theme === 'dark';

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

  const difficultyColors = {
    beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  const viewCount = getEffectViews(effect.id);
  const formatViews = (count: number): string => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  const tabConfig = [
    { id: 'preview' as const, label: 'Preview', icon: Eye },
    { id: 'css' as const, label: 'CSS', icon: Code2 },
    { id: 'html' as const, label: 'HTML', icon: FileCode },
    { id: 'playground' as const, label: 'Playground', icon: Terminal },
  ];

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
          {/* Header - staggered reveal */}
          <div className={`flex items-center justify-between px-6 py-4 border-b modal-stagger-header ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
            <div>
              <div className="flex items-center gap-3">
                <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{effect.name}</h2>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[effect.difficulty]}`}>
                  {effect.difficulty}
                </span>
                {effect.isNew && (
                  <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded new-badge-pulse">
                    NEW
                  </span>
                )}
                <span className={`text-[10px] flex items-center gap-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  <EyeIcon className="w-3 h-3" />
                  {formatViews(viewCount)} views
                </span>
              </div>
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{effect.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Export buttons */}
              <button
                onClick={handleExportHTML}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10'
                }`}
                title="Export as HTML file"
                aria-label="Export as HTML file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={handleExportCSS}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10'
                }`}
                title="Export CSS only"
                aria-label="Export CSS only"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">CSS Only</span>
              </button>
              {/* Share button */}
              <button
                onClick={handleShare}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
                  isDark
                    ? 'text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-600 hover:bg-emerald-500/10'
                }`}
                title="Copy share URL"
                aria-label="Share effect URL"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Share</span>
              </button>
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
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setTabKey(prev => prev + 1); }}
                className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                    : isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content - staggered reveal with tab animation */}
          <div className="flex-1 overflow-auto custom-scrollbar modal-stagger-content tab-scale-in" key={tabKey}>
            {activeTab === 'preview' && (
              <div className={`flex items-center justify-center p-10 relative ${
                isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
              } ${isFullscreen ? 'min-h-[calc(100vh-180px)]' : 'min-h-[400px]'}`}>
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: isDark
                      ? 'radial-gradient(circle, #fff 1px, transparent 1px)'
                      : 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />
                <div ref={previewRef} className="relative z-10 transform scale-125" />
              </div>
            )}

            {activeTab === 'css' && (
              <div className="relative">
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
              <div className="relative">
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
          </div>

          {/* Tags footer */}
          <div className={`px-6 py-3 border-t flex flex-wrap gap-2 items-center ${isDark ? 'border-gray-800/50' : 'border-gray-200'}`}>
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
