export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface CSSEffect {
  id: string;
  name: string;
  category: string;
  tags: string[];
  difficulty: Difficulty;
  description: string;
  cssCode: string;
  htmlCode: string;
  isNew: boolean;
}

export const effectsNewBatch11: CSSEffect[] = [
  // ==================== COLOR (20) ====================
  {
    id: 'color-chromatic-aberration',
    name: 'Chromatic Aberration',
    category: 'color',
    tags: ['color', 'chromatic', 'distortion', 'rgb', 'split'],
    difficulty: 'advanced',
    description: 'A chromatic aberration effect that splits RGB channels with offset colors',
    cssCode: `.chromatic-aberr {
  font-size: 1.8rem;
  font-weight: 900;
  color: #e2e8f0;
  position: relative;
  letter-spacing: 2px;
}
.chromatic-aberr::before,
.chromatic-aberr::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
.chromatic-aberr::before {
  color: #ff0040;
  animation: chroma-r 2s ease-in-out infinite;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
}
.chromatic-aberr::after {
  color: #00ff88;
  animation: chroma-b 2s ease-in-out infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}
@keyframes chroma-r {
  0%, 100% { transform: translate(-3px, -1px); }
  50% { transform: translate(3px, 1px); }
}
@keyframes chroma-b {
  0%, 100% { transform: translate(3px, 1px); }
  50% { transform: translate(-3px, -1px); }
}`,
    htmlCode: `<div class="chromatic-aberr" data-text="CHROMA">CHROMA</div>`,
    isNew: true,
  },
  {
    id: 'color-sepia-wave',
    name: 'Sepia Wave',
    category: 'color',
    tags: ['color', 'sepia', 'wave', 'vintage', 'filter'],
    difficulty: 'beginner',
    description: 'A wave-like sepia filter that oscillates between full color and sepia tones',
    cssCode: `.sepia-wave {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 10px;
  animation: sepia-osc 3s ease-in-out infinite;
}
@keyframes sepia-osc {
  0%, 100% { filter: sepia(0%) brightness(1.1); }
  50% { filter: sepia(100%) brightness(0.9); }
}`,
    htmlCode: `<div class="sepia-wave"></div>`,
    isNew: true,
  },
  {
    id: 'color-rainbow-border-pulse',
    name: 'Rainbow Border Pulse',
    category: 'color',
    tags: ['color', 'rainbow', 'border', 'pulse', 'animated'],
    difficulty: 'intermediate',
    description: 'An element with a pulsing rainbow border that cycles through the full spectrum',
    cssCode: `.rainbow-border-pulse {
  width: 120px;
  height: 80px;
  background: #0a0a1a;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 700;
}
.rainbow-border-pulse::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  background: conic-gradient(from var(--angle, 0deg), #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0000);
  z-index: -1;
  animation: rainbow-spin 2s linear infinite;
}
@keyframes rainbow-spin {
  to { --angle: 360deg; }
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}`,
    htmlCode: `<div class="rainbow-border-pulse">Rainbow</div>`,
    isNew: true,
  },
  {
    id: 'color-iridescent-shimmer',
    name: 'Iridescent Shimmer',
    category: 'color',
    tags: ['color', 'iridescent', 'shimmer', 'prismatic', 'shiny'],
    difficulty: 'advanced',
    description: 'An iridescent shimmer effect with shifting multi-color reflections',
    cssCode: `.iridescent-shimmer {
  width: 160px;
  height: 100px;
  background: #0f0f1a;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}
.iridescent-shimmer::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, transparent, #10b98144, transparent, #3b82f644, transparent, #8b5cf644, transparent);
  animation: iri-rotate 4s linear infinite;
}
.iridescent-shimmer::after {
  content: 'Iridescent';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 700;
  background: #0f0f1a88;
  backdrop-filter: blur(2px);
  border-radius: 12px;
}
@keyframes iri-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="iridescent-shimmer"></div>`,
    isNew: true,
  },
  {
    id: 'color-holographic-text',
    name: 'Holographic Text',
    category: 'color',
    tags: ['color', 'holographic', 'text', 'rainbow', 'shimmer'],
    difficulty: 'advanced',
    description: 'Text with a holographic rainbow shimmer effect using background clip',
    cssCode: `.holographic-text {
  font-size: 1.6rem;
  font-weight: 900;
  background: linear-gradient(
    90deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: holo-shift 3s linear infinite;
}
@keyframes holo-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<div class="holographic-text">HOLO</div>`,
    isNew: true,
  },
  {
    id: 'color-gradient-text-fill',
    name: 'Gradient Text Fill',
    category: 'color',
    tags: ['color', 'gradient', 'text', 'fill', 'animated'],
    difficulty: 'beginner',
    description: 'Text with an animated gradient fill that flows across the letters',
    cssCode: `.gradient-text-fill {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #10b981, #059669, #10b981);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: grad-text-flow 2s linear infinite;
}
@keyframes grad-text-flow {
  to { background-position: 200% center; }
}`,
    htmlCode: `<div class="gradient-text-fill">Gradient Fill</div>`,
    isNew: true,
  },
  {
    id: 'color-spectral-prism',
    name: 'Spectral Prism',
    category: 'color',
    tags: ['color', 'spectral', 'prism', 'light', 'rainbow'],
    difficulty: 'intermediate',
    description: 'A prism effect that splits white light into a spectrum of colors',
    cssCode: `.spectral-prism {
  width: 140px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spectral-prism-beam {
  width: 40px;
  height: 4px;
  background: #fff;
  border-radius: 2px;
  animation: beam-in 2s ease-in-out infinite;
}
.spectral-prism::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 60px;
  height: 80px;
  background: linear-gradient(180deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff);
  clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 70%);
  animation: prism-glow 2s ease-in-out infinite;
  opacity: 0.8;
}
@keyframes beam-in {
  0%, 100% { opacity: 0.5; width: 20px; }
  50% { opacity: 1; width: 60px; }
}
@keyframes prism-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="spectral-prism"><div class="spectral-prism-beam"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-contrast-wave',
    name: 'Contrast Wave',
    category: 'color',
    tags: ['color', 'contrast', 'wave', 'filter', 'dynamic'],
    difficulty: 'intermediate',
    description: 'A wave of contrast changes that sweeps across an element',
    cssCode: `.contrast-wave {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #1a1a2e, #3b82f6);
  border-radius: 10px;
  animation: contrast-sweep 3s ease-in-out infinite;
}
@keyframes contrast-sweep {
  0% { filter: contrast(1) brightness(1); }
  25% { filter: contrast(2) brightness(1.2); }
  50% { filter: contrast(0.5) brightness(0.8); }
  75% { filter: contrast(1.8) brightness(1.1); }
  100% { filter: contrast(1) brightness(1); }
}`,
    htmlCode: `<div class="contrast-wave"></div>`,
    isNew: true,
  },
  {
    id: 'color-brightness-breathe',
    name: 'Brightness Breathe',
    category: 'color',
    tags: ['color', 'brightness', 'breathe', 'pulse', 'soft'],
    difficulty: 'beginner',
    description: 'A gentle brightness breathing effect that makes an element glow and dim',
    cssCode: `.brightness-breathe {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #10b981, #059669);
  border-radius: 50%;
  animation: breathe-light 3s ease-in-out infinite;
}
@keyframes breathe-light {
  0%, 100% { filter: brightness(0.7); box-shadow: 0 0 10px #10b98133; }
  50% { filter: brightness(1.4); box-shadow: 0 0 30px #10b98166; }
}`,
    htmlCode: `<div class="brightness-breathe"></div>`,
    isNew: true,
  },
  {
    id: 'color-opacity-echo',
    name: 'Opacity Echo',
    category: 'color',
    tags: ['color', 'opacity', 'echo', 'fade', 'layers'],
    difficulty: 'beginner',
    description: 'Multiple layers fading at different rates creating an echo effect',
    cssCode: `.opacity-echo {
  position: relative;
  width: 100px;
  height: 100px;
}
.opacity-echo-layer {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #10b981;
  animation: echo-fade 2s ease-out infinite;
}
.opacity-echo-layer:nth-child(2) {
  inset: -8px;
  opacity: 0.5;
  animation-delay: 0.15s;
  border-radius: 16px;
}
.opacity-echo-layer:nth-child(3) {
  inset: -16px;
  opacity: 0.3;
  animation-delay: 0.3s;
  border-radius: 20px;
}
@keyframes echo-fade {
  0%, 100% { opacity: 0; transform: scale(0.9); }
  20% { opacity: 0.7; transform: scale(1); }
  80% { opacity: 0.1; }
}`,
    htmlCode: `<div class="opacity-echo"><div class="opacity-echo-layer"></div><div class="opacity-echo-layer"></div><div class="opacity-echo-layer"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-blend-overlay',
    name: 'Blend Overlay',
    category: 'color',
    tags: ['color', 'blend', 'overlay', 'mix', 'layers'],
    difficulty: 'intermediate',
    description: 'Overlapping colored layers using CSS blend modes to create new color mixes',
    cssCode: `.blend-overlay {
  width: 140px;
  height: 100px;
  position: relative;
  background: #0a0a1a;
  border-radius: 10px;
  overflow: hidden;
}
.blend-overlay-a {
  position: absolute;
  width: 80px;
  height: 80px;
  background: #10b981;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  mix-blend-mode: screen;
  animation: blend-move-a 3s ease-in-out infinite;
}
.blend-overlay-b {
  position: absolute;
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 50%;
  bottom: 10px;
  right: 10px;
  mix-blend-mode: screen;
  animation: blend-move-b 3s ease-in-out infinite;
}
@keyframes blend-move-a {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, 10px); }
}
@keyframes blend-move-b {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -10px); }
}`,
    htmlCode: `<div class="blend-overlay"><div class="blend-overlay-a"></div><div class="blend-overlay-b"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-splash-ripple',
    name: 'Color Splash Ripple',
    category: 'color',
    tags: ['color', 'splash', 'ripple', 'radial', 'expand'],
    difficulty: 'intermediate',
    description: 'A color splash that ripples outward from center with expanding rings',
    cssCode: `.color-splash-ripple {
  width: 140px;
  height: 140px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-splash-ring {
  position: absolute;
  border-radius: 50%;
  border: 3px solid #10b981;
  animation: splash-expand 2.5s ease-out infinite;
}
.color-splash-ring:nth-child(2) { animation-delay: 0.5s; border-color: #3b82f6; }
.color-splash-ring:nth-child(3) { animation-delay: 1s; border-color: #8b5cf6; }
.color-splash-dot {
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  z-index: 1;
}
@keyframes splash-expand {
  0% { width: 20px; height: 20px; opacity: 1; }
  100% { width: 140px; height: 140px; opacity: 0; }
}`,
    htmlCode: `<div class="color-splash-ripple"><div class="color-splash-ring"></div><div class="color-splash-ring"></div><div class="color-splash-ring"></div><div class="color-splash-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-hue-oscillate',
    name: 'Hue Oscillate',
    category: 'color',
    tags: ['color', 'hue', 'oscillate', 'shift', 'cycle'],
    difficulty: 'beginner',
    description: 'A smooth hue rotation that oscillates back and forth through the color spectrum',
    cssCode: `.hue-oscillate {
  width: 120px;
  height: 90px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-radius: 10px;
  animation: hue-osc 4s ease-in-out infinite;
}
@keyframes hue-osc {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
}`,
    htmlCode: `<div class="hue-oscillate"></div>`,
    isNew: true,
  },
  {
    id: 'color-gradient-orbit',
    name: 'Gradient Orbit',
    category: 'color',
    tags: ['color', 'gradient', 'orbit', 'rotate', 'dynamic'],
    difficulty: 'intermediate',
    description: 'A gradient that orbits around an element creating a spinning color halo',
    cssCode: `.gradient-orbit {
  width: 100px;
  height: 100px;
  background: #0a0a1a;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
}
.gradient-orbit::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(#10b981, #3b82f6, #8b5cf6, #10b981);
  animation: orbit-spin 2s linear infinite;
  z-index: -1;
}
.gradient-orbit::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: #0a0a1a;
  border-radius: 50%;
  z-index: -1;
}
@keyframes orbit-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="gradient-orbit">ORBIT</div>`,
    isNew: true,
  },
  {
    id: 'color-duotone-shift',
    name: 'Duotone Shift',
    category: 'color',
    tags: ['color', 'duotone', 'shift', 'filter', 'two-tone'],
    difficulty: 'intermediate',
    description: 'A duotone effect that shifts between two color pairs over time',
    cssCode: `.duotone-shift {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #059669, #064e3b);
  border-radius: 10px;
  animation: duotone-change 4s ease-in-out infinite;
  position: relative;
}
@keyframes duotone-change {
  0%, 100% {
    filter: url(#duo1);
    background: linear-gradient(135deg, #10b981, #059669, #064e3b);
  }
  50% {
    background: linear-gradient(135deg, #8b5cf6, #6d28d9, #4c1d95);
  }
}
.duotone-shift::after {
  content: 'Duotone';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
}`,
    htmlCode: `<div class="duotone-shift"></div>`,
    isNew: true,
  },
  {
    id: 'color-neon-glow-pulse',
    name: 'Neon Glow Pulse',
    category: 'color',
    tags: ['color', 'neon', 'glow', 'pulse', 'bright'],
    difficulty: 'beginner',
    description: 'A neon glow that pulses between dim and bright emerald light',
    cssCode: `.neon-glow-pulse {
  font-size: 1.4rem;
  font-weight: 900;
  color: #10b981;
  text-shadow: 0 0 7px #10b981, 0 0 20px #10b98166, 0 0 40px #10b98133;
  animation: neon-pulse 2s ease-in-out infinite;
}
@keyframes neon-pulse {
  0%, 100% { text-shadow: 0 0 4px #10b98144, 0 0 8px #10b98122; opacity: 0.8; }
  50% { text-shadow: 0 0 10px #10b981, 0 0 30px #10b98166, 0 0 60px #10b98133; opacity: 1; }
}`,
    htmlCode: `<div class="neon-glow-pulse">NEON</div>`,
    isNew: true,
  },
  {
    id: 'color-warm-cool-shift',
    name: 'Warm Cool Shift',
    category: 'color',
    tags: ['color', 'warm', 'cool', 'temperature', 'shift'],
    difficulty: 'intermediate',
    description: 'A color temperature shift that transitions between warm and cool tones',
    cssCode: `.warm-cool-shift {
  width: 140px;
  height: 100px;
  border-radius: 10px;
  animation: temp-shift 5s ease-in-out infinite;
}
@keyframes temp-shift {
  0%, 100% {
    background: linear-gradient(135deg, #f59e0b, #ef4444, #f97316);
    box-shadow: 0 0 20px #f59e0b33;
  }
  50% {
    background: linear-gradient(135deg, #3b82f6, #10b981, #06b6d4);
    box-shadow: 0 0 20px #3b82f633;
  }
}`,
    htmlCode: `<div class="warm-cool-shift"></div>`,
    isNew: true,
  },
  {
    id: 'color-spectrum-sweep',
    name: 'Spectrum Sweep',
    category: 'color',
    tags: ['color', 'spectrum', 'sweep', 'rainbow', 'bar'],
    difficulty: 'intermediate',
    description: 'A color spectrum bar that sweeps through the full rainbow continuously',
    cssCode: `.spectrum-sweep {
  width: 200px;
  height: 20px;
  border-radius: 10px;
  background: linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0000);
  background-size: 200% 100%;
  animation: spectrum-move 2s linear infinite;
  box-shadow: 0 0 15px #10b98133;
}
@keyframes spectrum-move {
  to { background-position: -200% 0; }
}`,
    htmlCode: `<div class="spectrum-sweep"></div>`,
    isNew: true,
  },
  {
    id: 'color-inversion-flash',
    name: 'Inversion Flash',
    category: 'color',
    tags: ['color', 'inversion', 'flash', 'negative', 'dramatic'],
    difficulty: 'advanced',
    description: 'A dramatic color inversion flash that briefly inverts all colors',
    cssCode: `.inversion-flash {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #1a1a2e, #3b82f6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 700;
  animation: inv-flash 3s ease-in-out infinite;
}
@keyframes inv-flash {
  0%, 40%, 60%, 100% { filter: invert(0); }
  45% { filter: invert(0.3); }
  50% { filter: invert(1); }
  55% { filter: invert(0.3); }
}`,
    htmlCode: `<div class="inversion-flash">INVERT</div>`,
    isNew: true,
  },
  {
    id: 'color-prismatic-ring',
    name: 'Prismatic Ring',
    category: 'color',
    tags: ['color', 'prismatic', 'ring', 'rotate', 'spectrum'],
    difficulty: 'advanced',
    description: 'A prismatic ring that rotates through spectral colors with 3D depth',
    cssCode: `.prismatic-ring {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 6px solid transparent;
  background: conic-gradient(from 0deg, #ff0000, #ff8800, #ffff00, #00ff00, #0088ff, #8800ff, #ff0000) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: prism-ring-rotate 3s linear infinite;
  box-shadow: 0 0 20px #10b98144;
}
@keyframes prism-ring-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="prismatic-ring"></div>`,
    isNew: true,
  },

  // ==================== MOTION (20) ====================
  {
    id: 'motion-bounce-settle',
    name: 'Bounce Settle',
    category: 'motion',
    tags: ['motion', 'bounce', 'settle', 'physics', 'landing'],
    difficulty: 'intermediate',
    description: 'An element that bounces and settles with decreasing amplitude like a real object',
    cssCode: `.bounce-settle {
  width: 60px;
  height: 60px;
  background: #10b981;
  border-radius: 50%;
  animation: bounce-down 2s cubic-bezier(0.36, 0, 0.66, -0.56) infinite alternate;
}
@keyframes bounce-down {
  0% { transform: translateY(-50px) scaleX(1) scaleY(1); }
  30% { transform: translateY(0) scaleX(1.1) scaleY(0.9); }
  50% { transform: translateY(-20px) scaleX(1) scaleY(1); }
  70% { transform: translateY(0) scaleX(1.05) scaleY(0.95); }
  85% { transform: translateY(-8px) scaleX(1) scaleY(1); }
  100% { transform: translateY(0) scaleX(1.02) scaleY(0.98); }
}`,
    htmlCode: `<div class="bounce-settle"></div>`,
    isNew: true,
  },
  {
    id: 'motion-spring-deform',
    name: 'Spring Deform',
    category: 'motion',
    tags: ['motion', 'spring', 'deform', 'elastic', 'stretch'],
    difficulty: 'intermediate',
    description: 'An element that deforms like a spring with stretch and compression',
    cssCode: `.spring-deform {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 12px;
  animation: spring-stretch 1.5s ease-in-out infinite;
}
@keyframes spring-stretch {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  15% { transform: scaleX(1.4) scaleY(0.7); }
  30% { transform: scaleX(0.8) scaleY(1.2); }
  45% { transform: scaleX(1.15) scaleY(0.88); }
  60% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.05) scaleY(0.96); }
  90% { transform: scaleX(0.98) scaleY(1.02); }
}`,
    htmlCode: `<div class="spring-deform"></div>`,
    isNew: true,
  },
  {
    id: 'motion-whip-snap',
    name: 'Whip Snap',
    category: 'motion',
    tags: ['motion', 'whip', 'snap', 'fast', 'sharp'],
    difficulty: 'advanced',
    description: 'A fast whip-like snap motion with overshoot and quick settle',
    cssCode: `.whip-snap {
  width: 80px;
  height: 10px;
  background: #10b981;
  border-radius: 5px;
  transform-origin: left center;
  animation: whip-motion 1.2s ease-in-out infinite;
}
@keyframes whip-motion {
  0%, 100% { transform: rotate(0deg); }
  10% { transform: rotate(-60deg); }
  20% { transform: rotate(80deg); }
  30% { transform: rotate(-40deg); }
  40% { transform: rotate(50deg); }
  55% { transform: rotate(-15deg); }
  70% { transform: rotate(8deg); }
  85% { transform: rotate(-3deg); }
}`,
    htmlCode: `<div class="whip-snap"></div>`,
    isNew: true,
  },
  {
    id: 'motion-recoil-spring',
    name: 'Recoil Spring',
    category: 'motion',
    tags: ['motion', 'recoil', 'spring', 'pull', 'release'],
    difficulty: 'intermediate',
    description: 'An element that pulls back and then springs forward with recoil',
    cssCode: `.recoil-spring {
  width: 60px;
  height: 60px;
  background: #10b981;
  border-radius: 12px;
  animation: recoil 2s ease-in-out infinite;
}
@keyframes recoil {
  0% { transform: translateX(0); }
  20% { transform: translateX(-40px); }
  50% { transform: translateX(60px); }
  65% { transform: translateX(-15px); }
  80% { transform: translateX(10px); }
  90% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
}`,
    htmlCode: `<div class="recoil-spring"></div>`,
    isNew: true,
  },
  {
    id: 'motion-friction-decel',
    name: 'Friction Decelerate',
    category: 'motion',
    tags: ['motion', 'friction', 'decelerate', 'slow', 'physics'],
    difficulty: 'beginner',
    description: 'An element that slides and decelerates due to friction, gradually stopping',
    cssCode: `.friction-decel {
  width: 50px;
  height: 50px;
  background: #10b981;
  border-radius: 50%;
  animation: friction-slide 2.5s ease-out infinite;
}
@keyframes friction-slide {
  0% { transform: translateX(-80px); opacity: 1; }
  60% { transform: translateX(60px); opacity: 1; }
  100% { transform: translateX(80px); opacity: 0.5; }
}`,
    htmlCode: `<div class="friction-decel"></div>`,
    isNew: true,
  },
  {
    id: 'motion-orbital-ellipse',
    name: 'Orbital Ellipse',
    category: 'motion',
    tags: ['motion', 'orbital', 'ellipse', 'orbit', 'planet'],
    difficulty: 'intermediate',
    description: 'An element orbiting in an elliptical path like a planet around a star',
    cssCode: `.orbital-ellipse {
  width: 160px;
  height: 100px;
  position: relative;
}
.orbital-ellipse-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  background: #f59e0b;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px #f59e0b66;
}
.orbital-ellipse-planet {
  position: absolute;
  width: 14px;
  height: 14px;
  background: #10b981;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: orbit-ell 3s linear infinite;
  box-shadow: 0 0 8px #10b98144;
}
@keyframes orbit-ell {
  0% { transform: translate(-50%, -50%) translateX(70px) translateY(0px); }
  25% { transform: translate(-50%, -50%) translateX(0px) translateY(-40px); }
  50% { transform: translate(-50%, -50%) translateX(-70px) translateY(0px); }
  75% { transform: translate(-50%, -50%) translateX(0px) translateY(40px); }
  100% { transform: translate(-50%, -50%) translateX(70px) translateY(0px); }
}`,
    htmlCode: `<div class="orbital-ellipse"><div class="orbital-ellipse-center"></div><div class="orbital-ellipse-planet"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-collision-bounce',
    name: 'Collision Bounce',
    category: 'motion',
    tags: ['motion', 'collision', 'bounce', 'physics', 'impact'],
    difficulty: 'advanced',
    description: 'Two elements that collide and bounce off each other with physics-like motion',
    cssCode: `.collision-bounce {
  width: 160px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
}
.collision-ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
}
.collision-ball-a {
  background: #10b981;
  left: 10px;
  animation: collide-a 1.5s ease-in-out infinite;
}
.collision-ball-b {
  background: #3b82f6;
  right: 10px;
  animation: collide-b 1.5s ease-in-out infinite;
}
@keyframes collide-a {
  0%, 100% { transform: translateX(0); }
  40% { transform: translateX(55px) scaleX(0.8); }
  50% { transform: translateX(40px) scaleX(1.1); }
}
@keyframes collide-b {
  0%, 100% { transform: translateX(0); }
  40% { transform: translateX(-55px) scaleX(0.8); }
  50% { transform: translateX(-40px) scaleX(1.1); }
}`,
    htmlCode: `<div class="collision-bounce"><div class="collision-ball collision-ball-a"></div><div class="collision-ball collision-ball-b"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-accel-curve',
    name: 'Accelerate Curve',
    category: 'motion',
    tags: ['motion', 'accelerate', 'curve', 'ease', 'speed'],
    difficulty: 'beginner',
    description: 'An element that accelerates along a curve, starting slow and gaining speed',
    cssCode: `.accel-curve {
  width: 40px;
  height: 40px;
  background: #10b981;
  border-radius: 50%;
  animation: accel-path 2s cubic-bezier(0.4, 0, 1, 1) infinite;
}
@keyframes accel-path {
  0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  100% { transform: translate(120px, -40px) scale(0.7); opacity: 1; }
}`,
    htmlCode: `<div class="accel-curve"></div>`,
    isNew: true,
  },
  {
    id: 'motion-resonance-vibrate',
    name: 'Resonance Vibrate',
    category: 'motion',
    tags: ['motion', 'resonance', 'vibrate', 'oscillate', 'frequency'],
    difficulty: 'advanced',
    description: 'Resonance vibration with increasing and decreasing amplitude at a specific frequency',
    cssCode: `.resonance-vibrate {
  width: 120px;
  height: 60px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 2px solid #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  animation: resonance 2s ease-in-out infinite;
}
@keyframes resonance {
  0%, 100% { transform: translateX(0); }
  5% { transform: translateX(1px); }
  10% { transform: translateX(-2px); }
  15% { transform: translateX(4px); }
  20% { transform: translateX(-6px); }
  25% { transform: translateX(8px); }
  30% { transform: translateX(-10px); }
  35% { transform: translateX(10px); }
  40% { transform: translateX(-9px); }
  50% { transform: translateX(7px); }
  60% { transform: translateX(-5px); }
  70% { transform: translateX(3px); }
  80% { transform: translateX(-1px); }
  90% { transform: translateX(0.5px); }
}`,
    htmlCode: `<div class="resonance-vibrate">RESONANCE</div>`,
    isNew: true,
  },
  {
    id: 'motion-kinetic-typography',
    name: 'Kinetic Typography',
    category: 'motion',
    tags: ['motion', 'kinetic', 'typography', 'text', 'dynamic'],
    difficulty: 'intermediate',
    description: 'Text characters that animate with kinetic energy, each letter moving independently',
    cssCode: `.kinetic-type {
  display: flex;
  gap: 2px;
  font-size: 1.4rem;
  font-weight: 900;
}
.kinetic-type span {
  display: inline-block;
  color: #10b981;
  animation: kinetic-bounce 1.5s ease-in-out infinite;
}
.kinetic-type span:nth-child(2) { animation-delay: 0.1s; }
.kinetic-type span:nth-child(3) { animation-delay: 0.2s; }
.kinetic-type span:nth-child(4) { animation-delay: 0.3s; }
.kinetic-type span:nth-child(5) { animation-delay: 0.4s; }
@keyframes kinetic-bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  25% { transform: translateY(-15px) scale(1.1); }
  50% { transform: translateY(0) scale(1); }
}`,
    htmlCode: `<div class="kinetic-type"><span>K</span><span>I</span><span>N</span><span>E</span><span>T</span></div>`,
    isNew: true,
  },
  {
    id: 'motion-momentum-scroll',
    name: 'Momentum Scroll',
    category: 'motion',
    tags: ['motion', 'momentum', 'scroll', 'coast', 'decelerate'],
    difficulty: 'beginner',
    description: 'An element that coasts with momentum and gradually decelerates',
    cssCode: `.momentum-scroll {
  width: 200px;
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.momentum-scroll-dot {
  position: absolute;
  top: 2px;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: momentum-coast 2.5s ease-out infinite;
}
@keyframes momentum-coast {
  0% { left: 0%; }
  70% { left: 85%; }
  100% { left: 95%; }
}`,
    htmlCode: `<div class="momentum-scroll"><div class="momentum-scroll-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-pendulum-damp',
    name: 'Pendulum Dampened',
    category: 'motion',
    tags: ['motion', 'pendulum', 'dampened', 'swing', 'decay'],
    difficulty: 'intermediate',
    description: 'A pendulum that swings with decreasing amplitude until it settles',
    cssCode: `.pendulum-damp {
  width: 120px;
  height: 120px;
  position: relative;
  transform-origin: top center;
}
.pendulum-damp-arm {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 60px;
  background: #2a2a3e;
  transform-origin: top center;
  animation: pend-swing 3s ease-out infinite;
}
.pendulum-damp-arm::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: -10px;
  width: 22px;
  height: 22px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b98144;
}
.pendulum-damp-pivot {
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #64748b;
  border-radius: 50%;
  transform: translateX(-50%);
}
@keyframes pend-swing {
  0% { transform: rotate(40deg); }
  15% { transform: rotate(-35deg); }
  30% { transform: rotate(28deg); }
  45% { transform: rotate(-22deg); }
  60% { transform: rotate(16deg); }
  75% { transform: rotate(-10deg); }
  90% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<div class="pendulum-damp"><div class="pendulum-damp-pivot"></div><div class="pendulum-damp-arm"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-inertia-overshoot',
    name: 'Inertia Overshoot',
    category: 'motion',
    tags: ['motion', 'inertia', 'overshoot', 'slide', 'bounce'],
    difficulty: 'beginner',
    description: 'An element that slides with inertia and overshoots its target before settling',
    cssCode: `.inertia-overshoot {
  width: 50px;
  height: 50px;
  background: #10b981;
  border-radius: 10px;
  animation: overshoot-slide 1.8s ease-in-out infinite;
}
@keyframes overshoot-slide {
  0% { transform: translateX(-60px); }
  50% { transform: translateX(70px); }
  65% { transform: translateX(55px); }
  80% { transform: translateX(62px); }
  90% { transform: translateX(58px); }
  100% { transform: translateX(60px); }
}`,
    htmlCode: `<div class="inertia-overshoot"></div>`,
    isNew: true,
  },
  {
    id: 'motion-velocity-trail',
    name: 'Velocity Trail',
    category: 'motion',
    tags: ['motion', 'velocity', 'trail', 'ghost', 'speed'],
    difficulty: 'intermediate',
    description: 'An element moving fast with ghostly trails showing its velocity path',
    cssCode: `.velocity-trail {
  position: relative;
  width: 160px;
  height: 40px;
}
.velocity-trail-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  animation: vel-move 2s ease-in-out infinite;
}
.velocity-trail-dot:nth-child(2) {
  opacity: 0.5;
  animation-delay: 0.08s;
  filter: blur(1px);
}
.velocity-trail-dot:nth-child(3) {
  opacity: 0.3;
  animation-delay: 0.16s;
  filter: blur(2px);
}
.velocity-trail-dot:nth-child(4) {
  opacity: 0.15;
  animation-delay: 0.24s;
  filter: blur(3px);
}
@keyframes vel-move {
  0%, 100% { left: 0; }
  50% { left: 140px; }
}`,
    htmlCode: `<div class="velocity-trail"><div class="velocity-trail-dot"></div><div class="velocity-trail-dot"></div><div class="velocity-trail-dot"></div><div class="velocity-trail-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-gravity-stack',
    name: 'Gravity Stack',
    category: 'motion',
    tags: ['motion', 'gravity', 'stack', 'fall', 'drop'],
    difficulty: 'intermediate',
    description: 'Elements that fall and stack up with gravity, each landing with a small bounce',
    cssCode: `.gravity-stack {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 100px;
}
.gravity-block {
  width: 24px;
  height: 24px;
  background: #10b981;
  border-radius: 4px;
  animation: gravity-drop 1.5s ease-in infinite;
}
.gravity-block:nth-child(2) { animation-delay: 0.2s; background: #059669; }
.gravity-block:nth-child(3) { animation-delay: 0.4s; background: #047857; }
.gravity-block:nth-child(4) { animation-delay: 0.6s; background: #065f46; }
@keyframes gravity-drop {
  0% { transform: translateY(-80px); opacity: 0; }
  30% { opacity: 1; }
  60% { transform: translateY(5px); }
  75% { transform: translateY(-4px); }
  90% { transform: translateY(2px); }
  100% { transform: translateY(0); }
}`,
    htmlCode: `<div class="gravity-stack"><div class="gravity-block"></div><div class="gravity-block"></div><div class="gravity-block"></div><div class="gravity-block"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-decel-land',
    name: 'Decelerate Landing',
    category: 'motion',
    tags: ['motion', 'decelerate', 'landing', 'soft', 'touch'],
    difficulty: 'beginner',
    description: 'An element that decelerates softly as it lands, like a feather touching down',
    cssCode: `.decel-land {
  width: 40px;
  height: 40px;
  background: #10b981;
  border-radius: 50%;
  animation: soft-land 2s ease-out infinite;
}
@keyframes soft-land {
  0% { transform: translateY(-80px) scale(0.8); opacity: 0; }
  30% { opacity: 1; }
  80% { transform: translateY(5px) scale(1.05, 0.95); }
  100% { transform: translateY(0) scale(1); }
}`,
    htmlCode: `<div class="decel-land"></div>`,
    isNew: true,
  },
  {
    id: 'motion-centrifugal-ring',
    name: 'Centrifugal Ring',
    category: 'motion',
    tags: ['motion', 'centrifugal', 'ring', 'spin', 'expand'],
    difficulty: 'intermediate',
    description: 'Elements spinning outward in a centrifugal pattern, pulled by rotation',
    cssCode: `.centrifugal-ring {
  width: 120px;
  height: 120px;
  position: relative;
  animation: centrif-rotate 4s linear infinite;
}
.centrifugal-ring-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: centrif-out 4s ease-in-out infinite;
}
.centrifugal-ring-dot:nth-child(2) { animation-delay: -1s; background: #3b82f6; }
.centrifugal-ring-dot:nth-child(3) { animation-delay: -2s; background: #8b5cf6; }
.centrifugal-ring-dot:nth-child(4) { animation-delay: -3s; background: #f59e0b; }
@keyframes centrif-rotate {
  to { transform: rotate(360deg); }
}
@keyframes centrif-out {
  0%, 100% { transform: translate(-50%, -50%) translateX(0); }
  50% { transform: translate(-50%, -50%) translateX(45px); }
}`,
    htmlCode: `<div class="centrifugal-ring"><div class="centrifugal-ring-dot"></div><div class="centrifugal-ring-dot"></div><div class="centrifugal-ring-dot"></div><div class="centrifugal-ring-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-spring-chain',
    name: 'Spring Chain',
    category: 'motion',
    tags: ['motion', 'spring', 'chain', 'cascade', 'linked'],
    difficulty: 'advanced',
    description: 'A chain of connected elements where each spring motion cascades to the next',
    cssCode: `.spring-chain {
  display: flex;
  gap: 6px;
  align-items: center;
}
.spring-chain-link {
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  animation: chain-spring 1.8s ease-in-out infinite;
}
.spring-chain-link:nth-child(2) { animation-delay: 0.15s; background: #059669; }
.spring-chain-link:nth-child(3) { animation-delay: 0.3s; background: #047857; }
.spring-chain-link:nth-child(4) { animation-delay: 0.45s; background: #065f46; }
.spring-chain-link:nth-child(5) { animation-delay: 0.6s; background: #064e3b; }
@keyframes chain-spring {
  0%, 100% { transform: translateY(0) scaleX(1) scaleY(1); }
  15% { transform: translateY(-20px) scaleX(0.85) scaleY(1.15); }
  30% { transform: translateY(0) scaleX(1.1) scaleY(0.9); }
  45% { transform: translateY(-8px) scaleX(0.95) scaleY(1.05); }
  60% { transform: translateY(0) scaleX(1.02) scaleY(0.98); }
}`,
    htmlCode: `<div class="spring-chain"><div class="spring-chain-link"></div><div class="spring-chain-link"></div><div class="spring-chain-link"></div><div class="spring-chain-link"></div><div class="spring-chain-link"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-rubber-snap',
    name: 'Rubber Snap',
    category: 'motion',
    tags: ['motion', 'rubber', 'snap', 'elastic', 'stretch'],
    difficulty: 'beginner',
    description: 'A rubber-like snap that stretches and snaps back quickly',
    cssCode: `.rubber-snap {
  width: 80px;
  height: 80px;
  background: #10b981;
  border-radius: 16px;
  animation: rubber 1s ease-in-out infinite;
}
@keyframes rubber {
  0%, 100% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
}`,
    htmlCode: `<div class="rubber-snap"></div>`,
    isNew: true,
  },
  {
    id: 'motion-oscillate-fade',
    name: 'Oscillate Fade',
    category: 'motion',
    tags: ['motion', 'oscillate', 'fade', 'dampened', 'decay'],
    difficulty: 'intermediate',
    description: 'An oscillating motion that fades over time, like a decaying wave',
    cssCode: `.oscillate-fade {
  width: 120px;
  height: 8px;
  background: #1a1a2e;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.oscillate-fade-ball {
  position: absolute;
  top: 1px;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: osc-decay 2.5s ease-out infinite;
}
@keyframes osc-decay {
  0% { left: 50%; opacity: 1; }
  10% { left: 85%; }
  20% { left: 20%; }
  30% { left: 75%; opacity: 0.8; }
  40% { left: 30%; }
  50% { left: 65%; opacity: 0.6; }
  65% { left: 40%; }
  80% { left: 55%; opacity: 0.3; }
  100% { left: 50%; opacity: 0; }
}`,
    htmlCode: `<div class="oscillate-fade"><div class="oscillate-fade-ball"></div></div>`,
    isNew: true,
  },

  // ==================== SVG (20) ====================
  {
    id: 'svg-displacement-wave',
    name: 'SVG Displacement Wave',
    category: 'svg',
    tags: ['svg', 'displacement', 'wave', 'distort', 'filter'],
    difficulty: 'intermediate',
    description: 'An SVG displacement map filter that creates a wavy distortion effect',
    cssCode: `.svg-disp-wave {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-radius: 10px;
  filter: url(#wave-displace);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  animation: svg-wave 3s ease-in-out infinite;
}
@keyframes svg-wave {
  0%, 100% { filter: blur(0px) hue-rotate(0deg); }
  50% { filter: blur(0.5px) hue-rotate(15deg); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="wave-displace"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.08" numOctaves="2" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="8"/></filter></svg><div class="svg-disp-wave">WAVE</div>`,
    isNew: true,
  },
  {
    id: 'svg-color-matrix-shift',
    name: 'SVG Color Matrix Shift',
    category: 'svg',
    tags: ['svg', 'color', 'matrix', 'shift', 'filter'],
    difficulty: 'advanced',
    description: 'An SVG feColorMatrix filter that shifts colors dynamically',
    cssCode: `.svg-cm-shift {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 10px;
  filter: url(#cm-shift);
  animation: cm-anim 4s ease-in-out infinite;
}
@keyframes cm-anim {
  0%, 100% { filter: url(#cm-shift) brightness(1); }
  50% { filter: url(#cm-shift) brightness(1.2); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="cm-shift"><feColorMatrix type="hueRotate" values="90"/></filter></svg><div class="svg-cm-shift"></div>`,
    isNew: true,
  },
  {
    id: 'svg-convolve-emboss',
    name: 'SVG Convolve Emboss',
    category: 'svg',
    tags: ['svg', 'convolve', 'emboss', 'texture', 'filter'],
    difficulty: 'intermediate',
    description: 'An SVG feConvolveMatrix filter that creates an emboss effect',
    cssCode: `.svg-conv-emboss {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 10px;
  filter: url(#emboss);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
}`,
    htmlCode: `<svg width="0" height="0"><filter id="emboss"><feConvolveMatrix order="3" kernelMatrix="-2 -1 0 -1 1 1 0 1 2"/></filter></svg><div class="svg-conv-emboss">Emboss</div>`,
    isNew: true,
  },
  {
    id: 'svg-turbulence-liquid',
    name: 'SVG Turbulence Liquid',
    category: 'svg',
    tags: ['svg', 'turbulence', 'liquid', 'organic', 'filter'],
    difficulty: 'advanced',
    description: 'An SVG turbulence filter that creates a liquid organic distortion effect',
    cssCode: `.svg-turb-liquid {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  border-radius: 10px;
  filter: url(#liquid-turb);
  animation: turb-seed 5s linear infinite;
}
@keyframes turb-seed {
  0% { filter: url(#liquid-turb) hue-rotate(0deg); }
  100% { filter: url(#liquid-turb) hue-rotate(360deg); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="liquid-turb"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="2" result="turb"/><feDisplacementMap in="SourceGraphic" in2="turb" scale="12"/></filter></svg><div class="svg-turb-liquid"></div>`,
    isNew: true,
  },
  {
    id: 'svg-composite-overlay',
    name: 'SVG Composite Overlay',
    category: 'svg',
    tags: ['svg', 'composite', 'overlay', 'blend', 'filter'],
    difficulty: 'intermediate',
    description: 'An SVG composite operation that blends a noise layer over the element',
    cssCode: `.svg-comp-overlay {
  width: 140px;
  height: 100px;
  background: #10b981;
  border-radius: 10px;
  filter: url(#comp-over);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
}`,
    htmlCode: `<svg width="0" height="0"><filter id="comp-over"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise"/><feColorMatrix in="noise" type="saturate" values="0" result="bw"/><feComposite in="SourceGraphic" in2="bw" operator="arithmetic" k1="0.8" k2="0.3" k3="0.1" k4="0"/></filter></svg><div class="svg-comp-overlay">Composite</div>`,
    isNew: true,
  },
  {
    id: 'svg-lighting-specular',
    name: 'SVG Lighting Specular',
    category: 'svg',
    tags: ['svg', 'lighting', 'specular', '3d', 'filter'],
    difficulty: 'advanced',
    description: 'An SVG specular lighting filter that adds a 3D shine to elements',
    cssCode: `.svg-light-spec {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border-radius: 10px;
  filter: url(#spec-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
}`,
    htmlCode: `<svg width="0" height="0"><filter id="spec-light"><feSpecularLighting surfaceScale="4" specularConstant="1" specularExponent="25" result="spec"><fePointLight x="70" y="50" z="120"/></feSpecularLighting><feComposite in="SourceGraphic" in2="spec" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/></filter></svg><div class="svg-light-spec">Specular</div>`,
    isNew: true,
  },
  {
    id: 'svg-gradient-radial-spin',
    name: 'SVG Radial Gradient Spin',
    category: 'svg',
    tags: ['svg', 'gradient', 'radial', 'spin', 'animated'],
    difficulty: 'beginner',
    description: 'An SVG element with a radial gradient fill that spins continuously',
    cssCode: `.svg-grad-spin {
  width: 100px;
  height: 100px;
  animation: svg-spin 3s linear infinite;
}
.svg-grad-spin circle {
  fill: none;
  stroke-width: 6;
  stroke-dasharray: 180;
  stroke-dashoffset: 60;
}
@keyframes svg-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<svg class="svg-grad-spin" viewBox="0 0 100 100"><defs><radialGradient id="rg-spin"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/></radialGradient></defs><circle cx="50" cy="50" r="40" stroke="url(#rg-spin)"/></svg>`,
    isNew: true,
  },
  {
    id: 'svg-path-draw-circle',
    name: 'SVG Path Draw Circle',
    category: 'svg',
    tags: ['svg', 'path', 'draw', 'stroke', 'animate'],
    difficulty: 'beginner',
    description: 'An SVG circle that draws itself with animated stroke-dashoffset',
    cssCode: `.svg-path-draw {
  width: 100px;
  height: 100px;
}
.svg-path-draw circle {
  fill: none;
  stroke: #10b981;
  stroke-width: 4;
  stroke-dasharray: 251;
  stroke-dashoffset: 251;
  stroke-linecap: round;
  animation: draw-circle 2s ease-in-out infinite;
}
@keyframes draw-circle {
  0% { stroke-dashoffset: 251; }
  50% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -251; }
}`,
    htmlCode: `<svg class="svg-path-draw" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>`,
    isNew: true,
  },
  {
    id: 'svg-stroke-dash-flow',
    name: 'SVG Stroke Dash Flow',
    category: 'svg',
    tags: ['svg', 'stroke', 'dash', 'flow', 'animated'],
    difficulty: 'intermediate',
    description: 'SVG paths with flowing dash patterns that move along the stroke',
    cssCode: `.svg-stroke-flow {
  width: 140px;
  height: 80px;
}
.svg-stroke-flow line {
  stroke: #10b981;
  stroke-width: 3;
  stroke-dasharray: 15 10;
  stroke-linecap: round;
  animation: dash-flow 1.5s linear infinite;
}
.svg-stroke-flow line:nth-child(2) {
  stroke: #3b82f6;
  animation-delay: -0.3s;
  y1: 30; y2: 30;
}
.svg-stroke-flow line:nth-child(3) {
  stroke: #8b5cf6;
  animation-delay: -0.6s;
  y1: 50; y2: 50;
}
@keyframes dash-flow {
  to { stroke-dashoffset: -50; }
}`,
    htmlCode: `<svg class="svg-stroke-flow" viewBox="0 0 140 80"><line x1="10" y1="15" x2="130" y2="15"/><line x1="10" y1="30" x2="130" y2="30"/><line x1="10" y1="50" x2="130" y2="50"/></svg>`,
    isNew: true,
  },
  {
    id: 'svg-filter-chain-glow',
    name: 'SVG Filter Chain Glow',
    category: 'svg',
    tags: ['svg', 'filter', 'chain', 'glow', 'neon'],
    difficulty: 'intermediate',
    description: 'A chained SVG filter that produces a multi-layer neon glow effect',
    cssCode: `.svg-chain-glow {
  font-size: 1.4rem;
  font-weight: 900;
  color: #10b981;
  filter: url(#chain-glow);
  animation: glow-pulse-svg 2s ease-in-out infinite;
}
@keyframes glow-pulse-svg {
  0%, 100% { filter: url(#chain-glow) brightness(1); }
  50% { filter: url(#chain-glow) brightness(1.3); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="chain-glow"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1"/><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2"/><feMerge><feMergeNode in="blur2"/><feMergeNode in="blur1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></svg><div class="svg-chain-glow">GLOW</div>`,
    isNew: true,
  },
  {
    id: 'svg-pixelate-effect',
    name: 'SVG Pixelate Effect',
    category: 'svg',
    tags: ['svg', 'pixelate', 'pixel', 'mosaic', 'filter'],
    difficulty: 'intermediate',
    description: 'An SVG filter that creates a pixelation/mosaic effect on elements',
    cssCode: `.svg-pixelate {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 10px;
  filter: url(#pixelate);
  animation: pix-osc 3s ease-in-out infinite;
}
@keyframes pix-osc {
  0%, 100% { filter: url(#pixelate); }
  50% { filter: none; }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="pixelate"><feFlood x="4" y="4" height="2" width="2"/><feComposite width="8" height="8"/><feTile result="a"/><feComposite in="SourceGraphic" in2="a" operator="in"/><feMorphology operator="dilate" radius="4"/></filter></svg><div class="svg-pixelate"></div>`,
    isNew: true,
  },
  {
    id: 'svg-noise-grain',
    name: 'SVG Noise Grain',
    category: 'svg',
    tags: ['svg', 'noise', 'grain', 'texture', 'film'],
    difficulty: 'beginner',
    description: 'An SVG noise filter that adds a film grain texture overlay',
    cssCode: `.svg-noise-grain {
  width: 140px;
  height: 100px;
  background: #0f0f1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.svg-noise-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  filter: url(#grain);
  opacity: 0.4;
  mix-blend-mode: overlay;
  background: #10b981;
}
.svg-noise-grain-label {
  position: relative;
  z-index: 1;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 16px;
}`,
    htmlCode: `<svg width="0" height="0"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/></filter></svg><div class="svg-noise-grain"><div class="svg-noise-grain-label">Film Grain</div></div>`,
    isNew: true,
  },
  {
    id: 'svg-clip-path-morph',
    name: 'SVG Clip Path Morph',
    category: 'svg',
    tags: ['svg', 'clip', 'path', 'morph', 'shape'],
    difficulty: 'advanced',
    description: 'An SVG clip-path that morphs between different shapes with animation',
    cssCode: `.svg-clip-morph {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  animation: clip-morph 4s ease-in-out infinite;
}
@keyframes clip-morph {
  0%, 100% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
  25% { clip-path: polygon(50% 5%, 95% 25%, 80% 95%, 20% 95%, 5% 25%); }
  50% { clip-path: circle(50% at 50% 50%); }
  75% { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
}`,
    htmlCode: `<div class="svg-clip-morph"></div>`,
    isNew: true,
  },
  {
    id: 'svg-pattern-animated',
    name: 'SVG Pattern Animated',
    category: 'svg',
    tags: ['svg', 'pattern', 'animated', 'repeat', 'tile'],
    difficulty: 'intermediate',
    description: 'An SVG pattern fill with animated elements that move within the pattern tiles',
    cssCode: `.svg-pattern-anim {
  width: 140px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}
.svg-pattern-anim rect {
  animation: pat-move 3s linear infinite;
}
@keyframes pat-move {
  to { transform: translateX(20px); }
}`,
    htmlCode: `<svg class="svg-pattern-anim" viewBox="0 0 140 100"><defs><pattern id="pat-anim" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="4" fill="#10b981" opacity="0.8"/><circle cx="0" cy="0" r="2" fill="#3b82f6" opacity="0.5"/><circle cx="20" cy="20" r="2" fill="#3b82f6" opacity="0.5"/></pattern></defs><rect width="140" height="100" fill="#0a0a1a"/><rect width="140" height="100" fill="url(#pat-anim)"/></svg>`,
    isNew: true,
  },
  {
    id: 'svg-blur-motion',
    name: 'SVG Blur Motion',
    category: 'svg',
    tags: ['svg', 'blur', 'motion', 'speed', 'filter'],
    difficulty: 'beginner',
    description: 'An SVG directional blur filter that simulates motion blur',
    cssCode: `.svg-blur-motion {
  width: 100px;
  height: 60px;
  background: #10b981;
  border-radius: 10px;
  filter: url(#motion-blur);
  animation: motion-blur-move 1.5s ease-in-out infinite;
}
@keyframes motion-blur-move {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="motion-blur"><feGaussianBlur in="SourceGraphic" stdDeviation="0 4"/></filter></svg><div class="svg-blur-motion"></div>`,
    isNew: true,
  },
  {
    id: 'svg-glow-outer',
    name: 'SVG Outer Glow',
    category: 'svg',
    tags: ['svg', 'glow', 'outer', 'neon', 'filter'],
    difficulty: 'beginner',
    description: 'An SVG filter that creates a soft outer glow effect around elements',
    cssCode: `.svg-glow-outer {
  font-size: 1.3rem;
  font-weight: 900;
  color: #10b981;
  filter: url(#outer-glow);
  animation: outer-glow-pulse 2s ease-in-out infinite;
}
@keyframes outer-glow-pulse {
  0%, 100% { filter: url(#outer-glow) brightness(0.9); }
  50% { filter: url(#outer-glow) brightness(1.2); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="outer-glow"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/><feFlood flood-color="#10b981" flood-opacity="0.6"/><feComposite in2="blur" operator="in" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter></svg><div class="svg-glow-outer">GLOW</div>`,
    isNew: true,
  },
  {
    id: 'svg-morph-path',
    name: 'SVG Morph Path',
    category: 'svg',
    tags: ['svg', 'morph', 'path', 'animate', 'shape'],
    difficulty: 'advanced',
    description: 'An SVG path that morphs between two shapes using CSS animation',
    cssCode: `.svg-morph-path {
  width: 120px;
  height: 120px;
}
.svg-morph-path path {
  fill: #10b981;
  d: path("M60 10 C90 10, 110 40, 110 60 C110 90, 80 110, 60 110 C30 110, 10 80, 10 60 C10 30, 30 10, 60 10");
  animation: morph-svg 3s ease-in-out infinite alternate;
}
@keyframes morph-svg {
  to {
    d: path("M60 5 C100 5, 115 35, 115 60 C115 95, 85 115, 60 115 C25 115, 5 85, 5 60 C5 25, 25 5, 60 5");
  }
}`,
    htmlCode: `<svg class="svg-morph-path" viewBox="0 0 120 120"><path/></svg>`,
    isNew: true,
  },
  {
    id: 'svg-feoffset-shadow',
    name: 'SVG Offset Shadow',
    category: 'svg',
    tags: ['svg', 'offset', 'shadow', 'drop', 'filter'],
    difficulty: 'intermediate',
    description: 'An SVG filter using feOffset to create a custom drop shadow with color',
    cssCode: `.svg-offset-shadow {
  width: 100px;
  height: 60px;
  background: #10b981;
  border-radius: 12px;
  filter: url(#offset-shadow);
  animation: shadow-drift 3s ease-in-out infinite;
}
@keyframes shadow-drift {
  0%, 100% { filter: url(#offset-shadow); }
  50% { filter: url(#offset-shadow-alt); }
}`,
    htmlCode: `<svg width="0" height="0"><filter id="offset-shadow"><feDropShadow dx="4" dy="4" stdDeviation="3" flood-color="#059669" flood-opacity="0.6"/></filter><filter id="offset-shadow-alt"><feDropShadow dx="-4" dy="-2" stdDeviation="5" flood-color="#3b82f6" flood-opacity="0.4"/></filter></svg><div class="svg-offset-shadow"></div>`,
    isNew: true,
  },
  {
    id: 'svg-flood-blend',
    name: 'SVG Flood Blend',
    category: 'svg',
    tags: ['svg', 'flood', 'blend', 'color', 'filter'],
    difficulty: 'intermediate',
    description: 'An SVG filter that floods color and blends it with the source element',
    cssCode: `.svg-flood-blend {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border-radius: 10px;
  filter: url(#flood-blend);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 700;
}`,
    htmlCode: `<svg width="0" height="0"><filter id="flood-blend"><feFlood flood-color="#10b981" flood-opacity="0.3" result="flood"/><feBlend in="SourceGraphic" in2="flood" mode="screen"/></filter></svg><div class="svg-flood-blend">Flood Blend</div>`,
    isNew: true,
  },
  {
    id: 'svg-animate-transform',
    name: 'SVG Animate Transform',
    category: 'svg',
    tags: ['svg', 'animate', 'transform', 'rotate', 'scale'],
    difficulty: 'beginner',
    description: 'An SVG element using native animateTransform for continuous rotation and scaling',
    cssCode: `.svg-anim-transform {
  width: 100px;
  height: 100px;
}
.svg-anim-transform rect {
  fill: none;
  stroke: #10b981;
  stroke-width: 3;
  rx: 8;
}`,
    htmlCode: `<svg class="svg-anim-transform" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite"/></rect><rect x="30" y="30" width="40" height="40" stroke="#3b82f6" stroke-width="2" fill="none" rx="4"><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="3s" repeatCount="indefinite"/></rect></svg>`,
    isNew: true,
  },

  // ==================== HOUDINI (20) ====================
  {
    id: 'houdini-property-color',
    name: 'Houdini Property Color',
    category: 'houdini',
    tags: ['houdini', 'property', 'color', 'custom', 'animate'],
    difficulty: 'beginner',
    description: 'CSS @property declaration for animating a custom color property',
    cssCode: `@property --houdini-c {
  syntax: '<color>';
  initial-value: #10b981;
  inherits: false;
}
.houdini-prop-color {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--houdini-c);
  animation: h-color 3s ease-in-out infinite alternate;
}
@keyframes h-color {
  to { --houdini-c: #3b82f6; }
}`,
    htmlCode: `<div class="houdini-prop-color"></div>`,
    isNew: true,
  },
  {
    id: 'houdini-math-clamp',
    name: 'Houdini Math Clamp',
    category: 'houdini',
    tags: ['houdini', 'math', 'clamp', 'responsive', 'calc'],
    difficulty: 'beginner',
    description: 'CSS clamp() function creating a responsive element that adapts its size',
    cssCode: `.houdini-math-clamp {
  width: clamp(80px, 50%, 160px);
  height: clamp(60px, 30%, 100px);
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: clamp(6px, 2vw, 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: clamp(0.6rem, 1.5vw, 0.85rem);
  font-weight: 700;
  animation: clamp-breathe 2s ease-in-out infinite;
}
@keyframes clamp-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`,
    htmlCode: `<div class="houdini-math-clamp">Clamp</div>`,
    isNew: true,
  },
  {
    id: 'houdini-container-query',
    name: 'Container Query',
    category: 'houdini',
    tags: ['houdini', 'container', 'query', 'responsive', 'layout'],
    difficulty: 'intermediate',
    description: 'CSS container queries that change layout based on container size',
    cssCode: `.houdini-cq-wrap {
  container-type: inline-size;
  width: 160px;
  height: 100px;
  background: #0a0a1a;
  border-radius: 10px;
  border: 1px solid #1a1a2e;
  padding: 10px;
  box-sizing: border-box;
}
.houdini-cq-card {
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 8px;
  padding: 8px;
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: all 0.3s ease;
}
.houdini-cq-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  flex-shrink: 0;
}
@container (min-width: 120px) {
  .houdini-cq-card { flex-direction: column; text-align: center; }
}`,
    htmlCode: `<div class="houdini-cq-wrap"><div class="houdini-cq-card"><div class="houdini-cq-dot"></div>Container Query</div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-cascade-layer',
    name: 'Cascade Layer',
    category: 'houdini',
    tags: ['houdini', 'cascade', 'layer', 'priority', 'modern'],
    difficulty: 'intermediate',
    description: 'CSS cascade layers demonstrating layer priority with visual styling',
    cssCode: `.houdini-cascade {
  width: 160px;
  padding: 16px;
  background: #0a0a1a;
  border-radius: 10px;
  border: 2px solid #10b981;
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  animation: layer-pulse 2s ease-in-out infinite;
}
@keyframes layer-pulse {
  0%, 100% { border-color: #10b981; box-shadow: 0 0 8px #10b98122; }
  50% { border-color: #3b82f6; box-shadow: 0 0 16px #3b82f622; }
}`,
    htmlCode: `<div class="houdini-cascade">Cascade Layer</div>`,
    isNew: true,
  },
  {
    id: 'houdini-accent-color',
    name: 'Accent Color',
    category: 'houdini',
    tags: ['houdini', 'accent', 'color', 'form', 'modern'],
    difficulty: 'beginner',
    description: 'CSS accent-color property that styles form controls with the emerald accent',
    cssCode: `.houdini-accent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background: #0a0a1a;
  border-radius: 10px;
  border: 1px solid #1a1a2e;
}
.houdini-accent input[type="checkbox"],
.houdini-accent input[type="radio"] {
  accent-color: #10b981;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.houdini-accent input[type="range"] {
  accent-color: #10b981;
  width: 120px;
  cursor: pointer;
}
.houdini-accent progress {
  accent-color: #10b981;
  width: 120px;
}
.houdini-accent label {
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}`,
    htmlCode: `<div class="houdini-accent"><label><input type="checkbox" checked> Checked</label><label><input type="range" value="60"></label><progress value="70" max="100"></progress></div>`,
    isNew: true,
  },
  {
    id: 'houdini-aspect-ratio',
    name: 'Aspect Ratio Box',
    category: 'houdini',
    tags: ['houdini', 'aspect', 'ratio', 'layout', 'modern'],
    difficulty: 'beginner',
    description: 'CSS aspect-ratio property creating perfectly proportioned elements',
    cssCode: `.houdini-aspect {
  width: 140px;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #10b98122, #3b82f622);
  border: 2px solid #10b981;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  animation: aspect-glow 2s ease-in-out infinite;
}
@keyframes aspect-glow {
  0%, 100% { box-shadow: 0 0 5px #10b98122; }
  50% { box-shadow: 0 0 20px #10b98144; }
}`,
    htmlCode: `<div class="houdini-aspect">16:9 Ratio</div>`,
    isNew: true,
  },
  {
    id: 'houdini-has-selector',
    name: 'Has Selector Demo',
    category: 'houdini',
    tags: ['houdini', 'has', 'selector', 'parent', 'modern'],
    difficulty: 'advanced',
    description: 'CSS :has() selector that styles a parent based on its child state',
    cssCode: `.houdini-has {
  padding: 16px;
  background: #0a0a1a;
  border-radius: 10px;
  border: 2px solid #2a2a3e;
  transition: all 0.3s ease;
  text-align: center;
}
.houdini-has:has(.houdini-has-check:checked) {
  border-color: #10b981;
  background: #10b98111;
  box-shadow: 0 0 15px #10b98122;
}
.houdini-has-check {
  accent-color: #10b981;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.houdini-has-label {
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 8px;
  cursor: pointer;
}`,
    htmlCode: `<div class="houdini-has"><input type="checkbox" id="has-check" class="houdini-has-check"><label for="has-check" class="houdini-has-label">Toggle :has()</label></div>`,
    isNew: true,
  },
  {
    id: 'houdini-color-mix',
    name: 'Color Mix',
    category: 'houdini',
    tags: ['houdini', 'color', 'mix', 'blend', 'modern'],
    difficulty: 'intermediate',
    description: 'CSS color-mix() function blending emerald with another color at different ratios',
    cssCode: `.houdini-color-mix {
  display: flex;
  gap: 4px;
  padding: 8px;
  background: #0a0a1a;
  border-radius: 10px;
}
.houdini-color-mix-step {
  width: 28px;
  height: 60px;
  border-radius: 6px;
  animation: mix-shift 3s ease-in-out infinite alternate;
}
.houdini-color-mix-step:nth-child(1) { background: color-mix(in srgb, #10b981 100%, #3b82f6); }
.houdini-color-mix-step:nth-child(2) { background: color-mix(in srgb, #10b981 75%, #3b82f6); }
.houdini-color-mix-step:nth-child(3) { background: color-mix(in srgb, #10b981 50%, #3b82f6); }
.houdini-color-mix-step:nth-child(4) { background: color-mix(in srgb, #10b981 25%, #3b82f6); }
.houdini-color-mix-step:nth-child(5) { background: color-mix(in srgb, #10b981 0%, #3b82f6); }
@keyframes mix-shift {
  to { transform: scaleY(0.85); }
}`,
    htmlCode: `<div class="houdini-color-mix"><div class="houdini-color-mix-step"></div><div class="houdini-color-mix-step"></div><div class="houdini-color-mix-step"></div><div class="houdini-color-mix-step"></div><div class="houdini-color-mix-step"></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-relative-color',
    name: 'Relative Color Syntax',
    category: 'houdini',
    tags: ['houdini', 'relative', 'color', 'syntax', 'modern'],
    difficulty: 'advanced',
    description: 'CSS relative color syntax creating color variations from a base emerald color',
    cssCode: `.houdini-rel-color {
  display: flex;
  gap: 6px;
  padding: 10px;
}
.houdini-rel-color-box {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  animation: rel-bounce 2s ease-in-out infinite;
}
.houdini-rel-color-box:nth-child(1) { background: hsl(from #10b981 h s l); animation-delay: 0s; }
.houdini-rel-color-box:nth-child(2) { background: hsl(from #10b981 h s calc(l + 15%)); animation-delay: 0.1s; }
.houdini-rel-color-box:nth-child(3) { background: hsl(from #10b981 h s calc(l + 30%)); animation-delay: 0.2s; }
.houdini-rel-color-box:nth-child(4) { background: hsl(from #10b981 calc(h + 60) s l); animation-delay: 0.3s; }
@keyframes rel-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}`,
    htmlCode: `<div class="houdini-rel-color"><div class="houdini-rel-color-box"></div><div class="houdini-rel-color-box"></div><div class="houdini-rel-color-box"></div><div class="houdini-rel-color-box"></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-nesting-style',
    name: 'Nesting Style',
    category: 'houdini',
    tags: ['houdini', 'nesting', 'style', 'modern', 'clean'],
    difficulty: 'intermediate',
    description: 'CSS nesting syntax demonstration with emerald-themed card styling',
    cssCode: `.houdini-nesting {
  width: 150px;
  padding: 14px;
  background: #0a0a1a;
  border-radius: 10px;
  border: 1px solid #1a1a2e;
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  & .houdini-nest-title {
    color: #10b981;
    font-size: 0.85rem;
    font-weight: 800;
    margin-bottom: 6px;
  }
  & .houdini-nest-bar {
    height: 4px;
    background: #10b98133;
    border-radius: 2px;
    margin-top: 8px;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: #10b981;
      animation: nest-fill 2s ease-in-out infinite;
    }
  }
}
@keyframes nest-fill {
  0% { width: 0; }
  50% { width: 80%; }
  100% { width: 0; }
}`,
    htmlCode: `<div class="houdini-nesting"><div class="houdini-nest-title">Nested</div>CSS nesting demo<div class="houdini-nest-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-scroll-driven',
    name: 'Scroll Driven Animation',
    category: 'houdini',
    tags: ['houdini', 'scroll', 'driven', 'animation', 'timeline'],
    difficulty: 'advanced',
    description: 'CSS scroll-driven animation that moves an element based on scroll position',
    cssCode: `.houdini-scroll-driven {
  width: 160px;
  height: 80px;
  background: #0a0a1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #1a1a2e;
  position: relative;
}
.houdini-scroll-track {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 4px;
  background: #1a1a2e;
  border-radius: 2px;
}
.houdini-scroll-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  animation: scroll-progress 3s ease-in-out infinite;
}
.houdini-scroll-bar {
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 40px;
  width: 4px;
  background: #1a1a2e;
  border-radius: 2px;
}
.houdini-scroll-indicator {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background: #10b98144;
  border-radius: 2px;
  animation: scroll-v 3s ease-in-out infinite;
}
@keyframes scroll-progress {
  0% { left: 0; }
  50% { left: 70%; }
  100% { left: 0; }
}
@keyframes scroll-v {
  0% { top: 0; }
  50% { top: 50%; }
  100% { top: 0; }
}`,
    htmlCode: `<div class="houdini-scroll-driven"><div class="houdini-scroll-track"><div class="houdini-scroll-thumb"></div></div><div class="houdini-scroll-bar"><div class="houdini-scroll-indicator"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-view-transition',
    name: 'View Transition',
    category: 'houdini',
    tags: ['houdini', 'view', 'transition', 'morph', 'modern'],
    difficulty: 'advanced',
    description: 'A view transition simulation that morphs between two states with cross-fade',
    cssCode: `.houdini-view-trans {
  width: 140px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.houdini-vt-a {
  position: absolute;
  inset: 0;
  background: #10b981;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  animation: vt-a 3s ease-in-out infinite;
}
.houdini-vt-b {
  position: absolute;
  inset: 0;
  background: #3b82f6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  animation: vt-b 3s ease-in-out infinite;
}
@keyframes vt-a {
  0%, 40% { clip-path: circle(75% at 50% 50%); }
  50%, 90% { clip-path: circle(0% at 50% 50%); }
  100% { clip-path: circle(75% at 50% 50%); }
}
@keyframes vt-b {
  0%, 40% { clip-path: circle(0% at 50% 50%); }
  50%, 90% { clip-path: circle(75% at 50% 50%); }
  100% { clip-path: circle(0% at 50% 50%); }
}`,
    htmlCode: `<div class="houdini-view-trans"><div class="houdini-vt-a">State A</div><div class="houdini-vt-b">State B</div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-dialog-anim',
    name: 'Dialog Animation',
    category: 'houdini',
    tags: ['houdini', 'dialog', 'animation', 'modal', 'modern'],
    difficulty: 'intermediate',
    description: 'A dialog-style element with entrance and exit animations using modern CSS',
    cssCode: `.houdini-dialog {
  width: 150px;
  padding: 16px;
  background: #0f0f1a;
  border: 1px solid #10b98144;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 0.7rem;
  text-align: center;
  animation: dialog-enter 2s ease-in-out infinite;
  box-shadow: 0 0 30px #10b98111;
}
.houdini-dialog-title {
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.houdini-dialog-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 16px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 700;
}
@keyframes dialog-enter {
  0%, 100% { opacity: 0; transform: scale(0.9) translateY(10px); }
  15% { opacity: 1; transform: scale(1.03) translateY(-2px); }
  25% { transform: scale(0.98) translateY(0); }
  80% { opacity: 1; transform: scale(1) translateY(0); }
  95% { opacity: 0; transform: scale(0.95) translateY(5px); }
}`,
    htmlCode: `<div class="houdini-dialog"><div class="houdini-dialog-title">Dialog</div>Modern dialog animation<div class="houdini-dialog-btn">OK</div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-popover-effect',
    name: 'Popover Effect',
    category: 'houdini',
    tags: ['houdini', 'popover', 'overlay', 'modern', 'animate'],
    difficulty: 'intermediate',
    description: 'A popover-style element with animated entrance using CSS popover concepts',
    cssCode: `.houdini-popover-wrap {
  position: relative;
  display: inline-block;
}
.houdini-popover-trigger {
  padding: 8px 18px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}
.houdini-popover-content {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(10px) scale(0.9);
  padding: 10px 16px;
  background: #0f0f1a;
  border: 1px solid #10b98144;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.65rem;
  font-weight: 600;
  white-space: nowrap;
  animation: popover-appear 2.5s ease-in-out infinite;
  box-shadow: 0 4px 20px #00000066;
}
@keyframes popover-appear {
  0%, 100% { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.9); }
  15%, 80% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
}`,
    htmlCode: `<div class="houdini-popover-wrap"><div class="houdini-popover-content">Popover tip!</div><div class="houdini-popover-trigger">Click me</div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-starting-style',
    name: 'Starting Style',
    category: 'houdini',
    tags: ['houdini', 'starting', 'style', 'transition', 'modern'],
    difficulty: 'intermediate',
    description: 'CSS @starting-style simulation for entry transitions from zero state',
    cssCode: `.houdini-start-style {
  width: 140px;
  padding: 14px;
  background: #0a0a1a;
  border: 1px solid #10b98144;
  border-radius: 10px;
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  animation: start-style-in 2.5s ease-in-out infinite;
}
@keyframes start-style-in {
  0% { opacity: 0; transform: translateY(20px) scale(0.8); filter: blur(4px); }
  20% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  80% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-10px) scale(0.95); }
}`,
    htmlCode: `<div class="houdini-start-style">@starting-style</div>`,
    isNew: true,
  },
  {
    id: 'houdini-calc-advanced',
    name: 'Advanced Calc',
    category: 'houdini',
    tags: ['houdini', 'calc', 'math', 'advanced', 'modern'],
    difficulty: 'beginner',
    description: 'CSS calc() with min(), max(), and clamp() for dynamic sizing',
    cssCode: `.houdini-calc-adv {
  width: calc(min(160px, 80%) );
  height: calc(clamp(60px, 40%, 90px));
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: calc(max(6px, 1vw));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: calc(clamp(0.6rem, 1.2vw, 0.8rem));
  font-weight: 700;
  animation: calc-pulse 2s ease-in-out infinite;
  margin: 0 auto;
}
@keyframes calc-pulse {
  0%, 100% { box-shadow: 0 0 0 #10b98100; }
  50% { box-shadow: 0 0 20px #10b98133; }
}`,
    htmlCode: `<div class="houdini-calc-adv">calc() + min/max/clamp</div>`,
    isNew: true,
  },
  {
    id: 'houdini-subgrid-layout',
    name: 'Subgrid Layout',
    category: 'houdini',
    tags: ['houdini', 'subgrid', 'layout', 'grid', 'modern'],
    difficulty: 'advanced',
    description: 'CSS subgrid layout that aligns nested grid items to parent grid tracks',
    cssCode: `.houdini-subgrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
  width: 160px;
  padding: 10px;
  background: #0a0a1a;
  border-radius: 10px;
  border: 1px solid #1a1a2e;
}
.houdini-sub-item {
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 6px;
  padding: 6px;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
  text-align: center;
  animation: sub-fade 2s ease-in-out infinite;
}
.houdini-sub-item:nth-child(odd) { animation-delay: 0.3s; }
.houdini-sub-item:nth-child(3n) { background: #3b82f622; border-color: #3b82f644; color: #3b82f6; }
@keyframes sub-fade {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="houdini-subgrid"><div class="houdini-sub-item">A1</div><div class="houdini-sub-item">A2</div><div class="houdini-sub-item">A3</div><div class="houdini-sub-item">B1</div><div class="houdini-sub-item">B2</div><div class="houdini-sub-item">B3</div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-typed-om',
    name: 'Typed OM Demo',
    category: 'houdini',
    tags: ['houdini', 'typed', 'om', 'property', 'modern'],
    difficulty: 'intermediate',
    description: 'CSS Typed OM concepts using custom properties with type annotations',
    cssCode: `@property --typed-size {
  syntax: '<length>';
  initial-value: 40px;
  inherits: false;
}
@property --typed-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.houdini-typed-om {
  width: var(--typed-size);
  height: var(--typed-size);
  background: #10b981;
  border-radius: 8px;
  animation: typed-anim 2s ease-in-out infinite alternate;
}
@keyframes typed-anim {
  to {
    --typed-size: 80px;
    --typed-angle: 180deg;
    transform: rotate(var(--typed-angle));
  }
}`,
    htmlCode: `<div class="houdini-typed-om"></div>`,
    isNew: true,
  },
  {
    id: 'houdini-paint-simulation',
    name: 'Paint Worklet Sim',
    category: 'houdini',
    tags: ['houdini', 'paint', 'worklet', 'simulation', 'modern'],
    difficulty: 'intermediate',
    description: 'A CSS Paint Worklet simulation using gradients and patterns to mimic paint output',
    cssCode: `.houdini-paint-sim {
  width: 140px;
  height: 100px;
  background:
    radial-gradient(circle at 20% 30%, #10b98144 2px, transparent 2px),
    radial-gradient(circle at 50% 60%, #10b98133 3px, transparent 3px),
    radial-gradient(circle at 80% 40%, #10b98122 1.5px, transparent 1.5px),
    radial-gradient(circle at 30% 80%, #3b82f622 2px, transparent 2px),
    radial-gradient(circle at 70% 20%, #3b82f622 2.5px, transparent 2.5px),
    #0a0a1a;
  border-radius: 10px;
  border: 1px solid #1a1a2e;
  animation: paint-shift 3s ease-in-out infinite;
}
@keyframes paint-shift {
  0%, 100% { background-position: 0 0, 0 0, 0 0, 0 0, 0 0; }
  50% { background-position: 10px 5px, -5px 10px, 8px -3px, -8px 6px, 5px -8px; }
}`,
    htmlCode: `<div class="houdini-paint-sim"></div>`,
    isNew: true,
  },
  {
    id: 'houdini-custom-anim-prop',
    name: 'Custom Anim Property',
    category: 'houdini',
    tags: ['houdini', 'custom', 'property', 'animate', 'registered'],
    difficulty: 'beginner',
    description: 'A registered custom property that animates smoothly between values',
    cssCode: `@property --custom-pct {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}
.houdini-custom-anim {
  width: 160px;
  height: 14px;
  background: #1a1a2e;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
}
.houdini-custom-anim-fill {
  height: 100%;
  width: var(--custom-pct);
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 7px;
  animation: custom-fill 2.5s ease-in-out infinite alternate;
}
@keyframes custom-fill {
  to { --custom-pct: 100%; }
}`,
    htmlCode: `<div class="houdini-custom-anim"><div class="houdini-custom-anim-fill"></div></div>`,
    isNew: true,
  },
];
