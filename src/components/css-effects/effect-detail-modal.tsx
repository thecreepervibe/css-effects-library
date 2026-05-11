'use client';

import type { CSSEffect } from '@/lib/effects-data';
import { effects } from '@/lib/effects-data';
import { useEffectsStore } from '@/lib/effects-store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Code2, Eye, FileCode, Maximize2, Minimize2 } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

// Simple syntax highlighting for CSS code
function highlightCSS(code: string): string {
  return code
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color:#6b7280">$1</span>')
    .replace(/(@[\w-]+)/g, '<span style="color:#c084fc">$1</span>')
    .replace(/^([.#:@][\w-]+)/gm, '<span style="color:#67e8f9">$1</span>')
    .replace(/([\w-]+)(\s*:)/g, '<span style="color:#93c5fd">$1</span>$2')
    .replace(/(\d+\.?\d*)(px|rem|em|%|deg|s|ms|fr|vh|vw)/g, '<span style="color:#fbbf24">$1$2</span>')
    .replace(/(#[0-9a-fA-F]{3,8})/g, '<span style="color:#f472b6">$1</span>')
    .replace(/\b(infinite|ease|linear|alternate|forwards|none|auto|transparent|solid|dashed|hidden|visible|relative|absolute|fixed|sticky|flex|grid|block|inline|center|space-between|column|row|wrap|nowrap|inherit|initial|unset|ease-in-out|ease-in|ease-out|step-end|normal|pointer|collapse|separate|cover|contain|scroll|no-repeat|border-box|content-box)\b/g, '<span style="color:#34d399">$1</span>');
}

function highlightHTML(code: string): string {
  return code
    .replace(/(&lt;|<)(\/?[\w-]+)/g, '$1<span style="color:#f472b6">$2</span>')
    .replace(/([\w-]+)(=)/g, '<span style="color:#93c5fd">$1</span>$2')
    .replace(/(".*?")/g, '<span style="color:#fbbf24">$1</span>')
    .replace(/(\/?>)/g, '<span style="color:#6b7280">$1</span>');
}

function addLineNumbers(code: string): string {
  const lines = code.split('\n');
  const maxLineNum = lines.length.toString().length;
  return lines
    .map((line, i) => {
      const num = (i + 1).toString().padStart(maxLineNum, ' ');
      return `<span class="text-gray-600 select-none pr-4 border-r border-gray-800/50 mr-4 inline-block" style="min-width:${maxLineNum + 1}ch">${num}</span>${line}`;
    })
    .join('\n');
}

// Inner modal content - resets via key when effect changes
function ModalContent({ effect }: { effect: CSSEffect }) {
  const { setSelectedEffectId } = useEffectsStore();
  const [activeTab, setActiveTab] = useState<'preview' | 'css' | 'html'>('preview');
  const [copied, setCopied] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          setSelectedEffectId(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedEffectId, isFullscreen]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const difficultyColors = {
    beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  const tabConfig = [
    { id: 'preview' as const, label: 'Preview', icon: Eye },
    { id: 'css' as const, label: 'CSS', icon: Code2 },
    { id: 'html' as const, label: 'HTML', icon: FileCode },
  ];

  return (
    <>
      {/* Backdrop with blur animation */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 z-50"
        onClick={() => setSelectedEffectId(null)}
      />

      {/* Modal with gradient border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`fixed z-50 overflow-hidden flex flex-col ${
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
          <div className="w-full h-full bg-[#0f0f1a] rounded-2xl" />
        </div>

        <div className="relative flex flex-col h-full bg-[#0f0f1a] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/50">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-white">{effect.name}</h2>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyColors[effect.difficulty]}`}>
                  {effect.difficulty}
                </span>
                {effect.isNew && (
                  <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">{effect.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen preview'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setSelectedEffectId(null)}
                className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tabs with icons */}
          <div className="flex border-b border-gray-800/50">
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto custom-scrollbar">
            {activeTab === 'preview' && (
              <div className={`flex items-center justify-center p-10 bg-[#0a0a0a] relative ${
                isFullscreen ? 'min-h-[calc(100vh-180px)]' : 'min-h-[400px]'
              }`}>
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
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
                >
                  {copied === 'css' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied === 'css' ? 'Copied!' : 'Copy CSS'}
                </button>
                <pre className="p-6 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed bg-[#0a0a0a] m-0">
                  <code dangerouslySetInnerHTML={{ __html: addLineNumbers(highlightCSS(effect.cssCode.replace(/</g, '&lt;').replace(/>/g, '&gt;'))) }} />
                </pre>
              </div>
            )}

            {activeTab === 'html' && (
              <div className="relative">
                <button
                  onClick={() => handleCopy(effect.htmlCode, 'html')}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all z-10"
                >
                  {copied === 'html' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied === 'html' ? 'Copied!' : 'Copy HTML'}
                </button>
                <pre className="p-6 text-sm font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed bg-[#0a0a0a] m-0">
                  <code dangerouslySetInnerHTML={{ __html: addLineNumbers(highlightHTML(effect.htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;'))) }} />
                </pre>
              </div>
            )}
          </div>

          {/* Tags footer */}
          <div className="px-6 py-3 border-t border-gray-800/50 flex flex-wrap gap-2 items-center">
            {effect.tags.map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-0.5 bg-[#1a1a2e] text-gray-500 rounded-full">
                {tag}
              </span>
            ))}
            <div className="flex-1" />
            <button
              onClick={() => handleCopy(effect.cssCode + '\n\n' + effect.htmlCode, 'all')}
              className="flex items-center gap-1.5 px-5 py-2 bg-emerald-500 text-black rounded-lg text-xs font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
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
