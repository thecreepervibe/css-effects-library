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

export interface Category {
  id: string;
  name: string;
  emoji: string;
  count: number;
}

export interface Collection {
  id: string;
  name: string;
  emoji: string;
  description: string;
  effectIds: string[];
}

// Category definitions (counts computed dynamically after effects array)
const categoryDefs: { id: string; name: string; emoji: string }[] = [
  { id: 'all', name: 'All Effects', emoji: '✨' },
  { id: 'text', name: 'Text Effects', emoji: '🔤' },
  { id: 'buttons', name: 'Buttons', emoji: '🔘' },
  { id: 'loading', name: 'Loading', emoji: '⏳' },
  { id: 'cards', name: 'Cards', emoji: '🃏' },
  { id: 'backgrounds', name: 'Backgrounds', emoji: '🎨' },
  { id: 'hover', name: 'Hover Effects', emoji: '👆' },
  { id: 'borders', name: 'Borders', emoji: '📐' },
  { id: 'shadows', name: 'Shadows', emoji: '💫' },
  { id: 'inputs', name: 'Inputs', emoji: '📝' },
  { id: 'toggles', name: 'Toggles & Checkboxes', emoji: '🔄' },
  { id: 'tooltips', name: 'Tooltips', emoji: '💬' },
  { id: 'transitions', name: 'Transitions', emoji: '🌊' },
  { id: 'progress', name: 'Progress Bars', emoji: '📊' },
  { id: 'notifications', name: 'Notifications & Badges', emoji: '🔔' },
  { id: 'avatars', name: 'Avatars', emoji: '👤' },
  { id: 'navigation', name: 'Navigation & Menus', emoji: '🧭' },
  { id: 'image', name: 'Image & Gallery', emoji: '🖼️' },
  { id: 'pricing', name: 'Pricing & Tags', emoji: '🏷️' },
  { id: 'timelines', name: 'Timelines & Steps', emoji: '⏱️' },
  { id: 'accordions', name: 'Accordions & Panels', emoji: '📂' },
  { id: 'social', name: 'Social & Sharing', emoji: '🌐' },
  { id: 'forms', name: 'Form Elements', emoji: '📋' },
  { id: 'data', name: 'Data & Charts', emoji: '📈' },
  { id: 'sliders', name: 'Sliders & Ranges', emoji: '🎚️' },
  { id: 'scroll', name: 'Scroll Animations', emoji: '📜' },
  { id: 'layout', name: 'Layout Patterns', emoji: '📐' },
  { id: 'decorative', name: 'Decorative Elements', emoji: '✨' },
  { id: 'game-ui', name: 'Game UI Elements', emoji: '🎮' },
  { id: 'print', name: 'Print & Typography', emoji: '🖊️' },
  { id: 'easter', name: 'Easter Eggs & Fun', emoji: '🎉' },
  { id: 'color', name: 'Color & Gradients', emoji: '🎨' },
  { id: 'motion', name: 'Motion & Physics', emoji: '⚡' },
  { id: 'container', name: 'Container Queries', emoji: '📦' },
  { id: 'svg', name: 'SVG Filters & Effects', emoji: '🎭' },
  { id: 'typography-art', name: 'Typography Art', emoji: '🔤' },
  { id: 'houdini', name: 'CSS Houdini & Modern', emoji: '🧪' },
  { id: 'ecommerce', name: 'E-commerce UI', emoji: '🛒' },
  { id: 'weather', name: 'Weather & Nature', emoji: '🌤️' },
];

export const collections: Collection[] = [
  {
    id: 'landing',
    name: 'Landing Page Essentials',
    emoji: '🚀',
    description: 'Must-have effects for stunning landing pages',
    effectIds: ['gradient-text', 'glow-button', 'aurora-bg', 'hover-lift-card', 'shine-sweep-button'],
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode Ready',
    emoji: '🌙',
    description: 'Effects optimized for dark interfaces',
    effectIds: ['neon-glow-text', 'glassmorphism-card', 'neon-shadow', 'animated-border', 'inner-glow'],
  },
  {
    id: 'micro-interactions',
    name: 'Micro Interactions',
    emoji: '✨',
    description: 'Subtle animations that delight users',
    effectIds: ['pulse-button', 'ripple-button', 'underline-sweep', 'color-shift', 'scale-shadow-hover'],
  },
  {
    id: 'data-dash',
    name: 'Data & Dashboards',
    emoji: '📊',
    description: 'Perfect for data-heavy interfaces',
    effectIds: ['striped-progress', 'circular-progress', 'step-progress', 'gradient-fill-progress', 'skeleton-shimmer'],
  },
];

export const effects: CSSEffect[] = [
  // ===== TEXT EFFECTS =====
  {
    id: 'gradient-text',
    name: 'Gradient Text',
    category: 'text',
    tags: ['animated', 'gradient', 'text'],
    difficulty: 'beginner',
    description: 'Beautiful animated gradient flowing through text',
    cssCode: `.gradient-text {
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
  font-size: 2rem;
  font-weight: 800;
}
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="gradient-text">Gradient Magic</div>`,
    isNew: false,
  },
  {
    id: 'neon-glow-text',
    name: 'Neon Glow Text',
    category: 'text',
    tags: ['neon', 'glow', 'text', 'dark'],
    difficulty: 'intermediate',
    description: 'Text with realistic neon glow effect',
    cssCode: `.neon-text {
  color: #10b981;
  font-size: 2rem;
  font-weight: 800;
  text-shadow:
    0 0 7px #10b981,
    0 0 10px #10b981,
    0 0 21px #10b981,
    0 0 42px #059669,
    0 0 82px #059669,
    0 0 92px #059669;
  animation: neon-flicker 1.5s infinite alternate;
}
@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { text-shadow: 0 0 7px #10b981, 0 0 10px #10b981, 0 0 21px #10b981, 0 0 42px #059669, 0 0 82px #059669; }
  20%, 24%, 55% { text-shadow: none; }
}`,
    htmlCode: `<div class="neon-text">NEON</div>`,
    isNew: false,
  },
  {
    id: 'typewriter-text',
    name: 'Typewriter Effect',
    category: 'text',
    tags: ['animated', 'text', 'typing'],
    difficulty: 'intermediate',
    description: 'Text that types itself out character by character',
    cssCode: `.typewriter {
  font-family: monospace;
  font-size: 1.2rem;
  color: #10b981;
  overflow: hidden;
  border-right: 2px solid #10b981;
  white-space: nowrap;
  animation: typing 3s steps(20) infinite, blink-caret 0.75s step-end infinite;
  width: 0;
}
@keyframes typing {
  0% { width: 0; }
  50% { width: 100%; }
  80% { width: 100%; }
  100% { width: 0; }
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #10b981; }
}`,
    htmlCode: `<div class="typewriter">Hello, World! I am CSS.</div>`,
    isNew: false,
  },
  {
    id: '3d-text',
    name: '3D Text',
    category: 'text',
    tags: ['3d', 'text', 'shadow'],
    difficulty: 'beginner',
    description: 'Text with a stunning 3D extrusion effect',
    cssCode: `.text-3d {
  font-size: 2.5rem;
  font-weight: 900;
  color: #10b981;
  text-shadow:
    1px 1px 0 #059669,
    2px 2px 0 #047857,
    3px 3px 0 #065f46,
    4px 4px 0 #064e3b,
    5px 5px 0 #064e3b,
    6px 6px 10px rgba(0,0,0,0.5);
}`,
    htmlCode: `<div class="text-3d">3D TEXT</div>`,
    isNew: false,
  },
  {
    id: 'split-color-text',
    name: 'Split Color Text',
    category: 'text',
    tags: ['color', 'text', 'split'],
    difficulty: 'intermediate',
    description: 'Text split into two distinct colors diagonally',
    cssCode: `.split-text {
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  background: linear-gradient(135deg, #10b981 50%, #6366f1 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,
    htmlCode: `<div class="split-text">SPLIT</div>`,
    isNew: true,
  },
  {
    id: 'outline-text',
    name: 'Outline Text',
    category: 'text',
    tags: ['outline', 'text', 'stroke'],
    difficulty: 'beginner',
    description: 'Text with only an outline, no fill',
    cssCode: `.outline-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #10b981;
}`,
    htmlCode: `<div class="outline-text">OUTLINE</div>`,
    isNew: false,
  },

  // ===== BUTTONS =====
  {
    id: 'pulse-button',
    name: 'Pulse Button',
    category: 'buttons',
    tags: ['animated', 'button', 'pulse'],
    difficulty: 'beginner',
    description: 'Button with a continuous pulsing animation',
    cssCode: `.pulse-btn {
  padding: 12px 32px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  animation: pulse-glow 2s infinite;
}
@keyframes pulse-glow {
  0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.7); }
  70% { box-shadow: 0 0 0 15px rgba(16,185,129,0); }
  100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
}`,
    htmlCode: `<button class="pulse-btn">Click Me</button>`,
    isNew: false,
  },
  {
    id: 'glow-button',
    name: 'Glow Button',
    category: 'buttons',
    tags: ['glow', 'button', 'hover'],
    difficulty: 'intermediate',
    description: 'Button with a mesmerizing glow on hover',
    cssCode: `.glow-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.glow-btn:hover {
  background: #10b981;
  color: #0a0a0a;
  box-shadow: 0 0 20px #10b981, 0 0 40px #10b98166, 0 0 60px #10b98133;
}`,
    htmlCode: `<button class="glow-btn">Hover Me</button>`,
    isNew: false,
  },
  {
    id: 'ripple-button',
    name: 'Ripple Button',
    category: 'buttons',
    tags: ['ripple', 'button', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with a ripple effect emanating from the center',
    cssCode: `.ripple-btn {
  padding: 12px 32px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.ripple-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}
.ripple-btn:hover::after {
  width: 300px;
  height: 300px;
}`,
    htmlCode: `<button class="ripple-btn">Ripple</button>`,
    isNew: false,
  },
  {
    id: '3d-push-button',
    name: '3D Push Button',
    category: 'buttons',
    tags: ['3d', 'button', 'push'],
    difficulty: 'beginner',
    description: 'Button that appears to push down when clicked',
    cssCode: `.push-btn {
  padding: 12px 32px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 0 #059669, 0 8px 10px rgba(0,0,0,0.3);
  transition: all 0.1s ease;
  position: relative;
  top: 0;
}
.push-btn:hover {
  top: 2px;
  box-shadow: 0 4px 0 #059669, 0 6px 8px rgba(0,0,0,0.3);
}
.push-btn:active {
  top: 6px;
  box-shadow: 0 0 0 #059669, 0 2px 4px rgba(0,0,0,0.3);
}`,
    htmlCode: `<button class="push-btn">Push Me</button>`,
    isNew: false,
  },
  {
    id: 'shine-sweep-button',
    name: 'Shine Sweep Button',
    category: 'buttons',
    tags: ['shine', 'button', 'animated', 'hover'],
    difficulty: 'intermediate',
    description: 'Button with a shine sweep animation on hover',
    cssCode: `.shine-btn {
  padding: 12px 32px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.shine-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s ease;
}
.shine-btn:hover::before {
  left: 100%;
}`,
    htmlCode: `<button class="shine-btn">Shine</button>`,
    isNew: true,
  },

  // ===== LOADING =====
  {
    id: 'spinning-dots',
    name: 'Spinning Dots',
    category: 'loading',
    tags: ['loading', 'spinner', 'dots'],
    difficulty: 'beginner',
    description: 'Three dots orbiting in a circle',
    cssCode: `.spinning-dots {
  width: 40px;
  height: 40px;
  position: relative;
  animation: spin-dots 1.2s linear infinite;
}
.spinning-dots span {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
}
.spinning-dots span:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.spinning-dots span:nth-child(2) { bottom: 0; left: 0; }
.spinning-dots span:nth-child(3) { bottom: 0; right: 0; }
@keyframes spin-dots {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="spinning-dots"><span></span><span></span><span></span></div>`,
    isNew: false,
  },
  {
    id: 'pulse-ring',
    name: 'Pulse Ring',
    category: 'loading',
    tags: ['loading', 'pulse', 'ring'],
    difficulty: 'beginner',
    description: 'Expanding pulse rings emanating from center',
    cssCode: `.pulse-ring {
  width: 40px;
  height: 40px;
  position: relative;
}
.pulse-ring::before, .pulse-ring::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 3px solid #10b981;
  border-radius: 50%;
  animation: pulse-expand 1.5s ease-out infinite;
}
.pulse-ring::after {
  animation-delay: 0.5s;
}
@keyframes pulse-expand {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}`,
    htmlCode: `<div class="pulse-ring"></div>`,
    isNew: false,
  },
  {
    id: 'orbiting-dots',
    name: 'Orbiting Dots',
    category: 'loading',
    tags: ['loading', 'orbit', 'dots', 'animated'],
    difficulty: 'intermediate',
    description: 'Dots orbiting around a central point',
    cssCode: `.orbiting {
  width: 50px;
  height: 50px;
  position: relative;
}
.orbiting span {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: orbit 1.4s linear infinite;
}
.orbiting span:nth-child(1) { animation-delay: 0s; }
.orbiting span:nth-child(2) { animation-delay: 0.2s; }
.orbiting span:nth-child(3) { animation-delay: 0.4s; }
@keyframes orbit {
  0% { top: 50%; left: 0; transform: translateY(-50%); }
  25% { top: 0; left: 50%; transform: translateX(-50%); }
  50% { top: 50%; left: 100%; transform: translateY(-50%); }
  75% { top: 100%; left: 50%; transform: translateX(-50%); }
  100% { top: 50%; left: 0; transform: translateY(-50%); }
}`,
    htmlCode: `<div class="orbiting"><span></span><span></span><span></span></div>`,
    isNew: false,
  },
  {
    id: 'skeleton-shimmer',
    name: 'Skeleton Shimmer',
    category: 'loading',
    tags: ['loading', 'skeleton', 'shimmer'],
    difficulty: 'beginner',
    description: 'Shimmer effect for skeleton loading states',
    cssCode: `.skeleton {
  width: 200px;
  height: 20px;
  background: linear-gradient(90deg, #1a1a2e 25%, #2a2a3e 50%, #1a1a2e 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
.skeleton-line {
  width: 150px;
  height: 14px;
  margin-top: 8px;
  background: linear-gradient(90deg, #1a1a2e 25%, #2a2a3e 50%, #1a1a2e 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`,
    htmlCode: `<div class="skeleton"></div><div class="skeleton-line"></div>`,
    isNew: false,
  },
  {
    id: 'loading-progress-bar',
    name: 'Loading Progress Bar',
    category: 'loading',
    tags: ['loading', 'progress', 'bar'],
    difficulty: 'beginner',
    description: 'Animated indeterminate progress bar',
    cssCode: `.loading-bar {
  width: 200px;
  height: 4px;
  background: #1a1a2e;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}
.loading-bar::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 40%;
  background: #10b981;
  border-radius: 2px;
  animation: loading-slide 1.5s ease-in-out infinite;
}
@keyframes loading-slide {
  0% { left: -40%; }
  100% { left: 100%; }
}`,
    htmlCode: `<div class="loading-bar"></div>`,
    isNew: true,
  },

  // ===== CARDS =====
  {
    id: 'hover-lift-card',
    name: 'Hover Lift Card',
    category: 'cards',
    tags: ['hover', 'card', 'lift'],
    difficulty: 'beginner',
    description: 'Card that lifts up with enhanced shadow on hover',
    cssCode: `.lift-card {
  width: 180px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #e2e8f0;
}
.lift-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(16,185,129,0.2);
  border-color: #10b981;
}`,
    htmlCode: `<div class="lift-card"><div style="font-weight:700;font-size:1.1rem;margin-bottom:8px;">Card Title</div><div style="color:#94a3b8;font-size:0.875rem;">Hover to lift</div></div>`,
    isNew: false,
  },
  {
    id: 'flip-card',
    name: 'Flip Card',
    category: 'cards',
    tags: ['3d', 'card', 'flip', 'hover'],
    difficulty: 'advanced',
    description: 'Card that flips to reveal content on the back',
    cssCode: `.flip-container {
  width: 180px;
  height: 120px;
  perspective: 1000px;
}
.flip-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.flip-container:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.flip-front {
  background: #10b981;
  color: white;
}
.flip-back {
  background: #1a1a2e;
  color: #10b981;
  border: 1px solid #10b981;
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="flip-container"><div class="flip-inner"><div class="flip-front">Front</div><div class="flip-back">Back</div></div></div>`,
    isNew: false,
  },
  {
    id: 'glassmorphism-card',
    name: 'Glassmorphism Card',
    category: 'cards',
    tags: ['glass', 'card', 'blur', 'modern'],
    difficulty: 'intermediate',
    description: 'Frosted glass effect card with backdrop blur',
    cssCode: `.glass-card {
  width: 180px;
  padding: 24px;
  background: rgba(16,185,129,0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(16,185,129,0.2);
  color: #e2e8f0;
}
.glass-card h3 {
  margin: 0 0 8px 0;
  font-weight: 700;
  color: #10b981;
}
.glass-card p {
  margin: 0;
  font-size: 0.85rem;
  color: #94a3b8;
}`,
    htmlCode: `<div class="glass-card"><h3>Glass Card</h3><p>Frosted glass effect</p></div>`,
    isNew: false,
  },
  {
    id: 'gradient-border-card',
    name: 'Gradient Border Card',
    category: 'cards',
    tags: ['gradient', 'card', 'border', 'animated'],
    difficulty: 'intermediate',
    description: 'Card with an animated gradient border',
    cssCode: `.gradient-border-card {
  width: 180px;
  padding: 2px;
  border-radius: 14px;
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 300%;
  animation: gradient-border 4s ease infinite;
}
.gradient-border-inner {
  background: #0f0f1a;
  border-radius: 12px;
  padding: 20px;
  color: #e2e8f0;
}
@keyframes gradient-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="gradient-border-card"><div class="gradient-border-inner"><div style="font-weight:700;margin-bottom:4px;">Gradient Border</div><div style="font-size:0.8rem;color:#94a3b8;">Animated border</div></div></div>`,
    isNew: true,
  },

  // ===== BACKGROUNDS =====
  {
    id: 'aurora-bg',
    name: 'Aurora Background',
    category: 'backgrounds',
    tags: ['animated', 'gradient', 'background', 'aurora'],
    difficulty: 'advanced',
    description: 'Mesmerizing aurora borealis background effect',
    cssCode: `.aurora {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a1a, #1a0a2e);
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.aurora::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.3) 0%, transparent 50%);
  animation: aurora-move 8s ease-in-out infinite alternate;
}
@keyframes aurora-move {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(20px, -20px) rotate(10deg); }
}`,
    htmlCode: `<div class="aurora"></div>`,
    isNew: false,
  },
  {
    id: 'gradient-mesh',
    name: 'Gradient Mesh',
    category: 'backgrounds',
    tags: ['gradient', 'background', 'mesh'],
    difficulty: 'intermediate',
    description: 'Smooth gradient mesh background',
    cssCode: `.mesh-bg {
  width: 100%;
  height: 100%;
  background:
    radial-gradient(at 40% 20%, #10b981 0px, transparent 50%),
    radial-gradient(at 80% 0%, #3b82f6 0px, transparent 50%),
    radial-gradient(at 0% 50%, #8b5cf6 0px, transparent 50%),
    radial-gradient(at 80% 50%, #f59e0b 0px, transparent 50%),
    radial-gradient(at 0% 100%, #ef4444 0px, transparent 50%),
    radial-gradient(at 80% 100%, #10b981 0px, transparent 50%);
  background-color: #0a0a1a;
  border-radius: 8px;
}`,
    htmlCode: `<div class="mesh-bg"></div>`,
    isNew: false,
  },
  {
    id: 'animated-stripes',
    name: 'Animated Stripes',
    category: 'backgrounds',
    tags: ['animated', 'stripes', 'background'],
    difficulty: 'beginner',
    description: 'Diagonal animated stripes background',
    cssCode: `.stripes-bg {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #10b98120,
    #10b98120 10px,
    #10b98140 10px,
    #10b98140 20px
  );
  background-size: 200% 200%;
  animation: stripe-move 3s linear infinite;
  border-radius: 8px;
}
@keyframes stripe-move {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}`,
    htmlCode: `<div class="stripes-bg"></div>`,
    isNew: false,
  },
  {
    id: 'dot-pattern',
    name: 'Dot Pattern',
    category: 'backgrounds',
    tags: ['pattern', 'dots', 'background'],
    difficulty: 'beginner',
    description: 'Subtle dot pattern background',
    cssCode: `.dot-pattern {
  width: 100%;
  height: 100%;
  background-color: #0a0a1a;
  background-image: radial-gradient(#10b98133 1px, transparent 1px);
  background-size: 16px 16px;
  border-radius: 8px;
}`,
    htmlCode: `<div class="dot-pattern"></div>`,
    isNew: false,
  },
  {
    id: 'floating-particles',
    name: 'Floating Particles',
    category: 'backgrounds',
    tags: ['animated', 'particles', 'background'],
    difficulty: 'advanced',
    description: 'Floating particle dots background',
    cssCode: `.particles-bg {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #10b981;
  border-radius: 50%;
  animation: float-up 3s ease-in infinite;
}
.particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 3s; }
.particle:nth-child(2) { left: 30%; animation-delay: 0.5s; animation-duration: 2.5s; }
.particle:nth-child(3) { left: 50%; animation-delay: 1s; animation-duration: 3.5s; }
.particle:nth-child(4) { left: 70%; animation-delay: 1.5s; animation-duration: 2.8s; }
.particle:nth-child(5) { left: 90%; animation-delay: 0.3s; animation-duration: 3.2s; }
@keyframes float-up {
  0% { bottom: -10px; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { bottom: 100%; opacity: 0; }
}`,
    htmlCode: `<div class="particles-bg"><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div></div>`,
    isNew: true,
  },

  // ===== HOVER EFFECTS =====
  {
    id: 'scale-shadow-hover',
    name: 'Scale + Shadow Hover',
    category: 'hover',
    tags: ['hover', 'scale', 'shadow'],
    difficulty: 'beginner',
    description: 'Element scales up with enhanced shadow on hover',
    cssCode: `.scale-shadow {
  width: 120px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.scale-shadow:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(16,185,129,0.3);
  border-color: #10b981;
}`,
    htmlCode: `<div class="scale-shadow">Hover</div>`,
    isNew: false,
  },
  {
    id: 'underline-sweep',
    name: 'Underline Sweep',
    category: 'hover',
    tags: ['hover', 'underline', 'animated'],
    difficulty: 'beginner',
    description: 'Underline sweeps across text on hover',
    cssCode: `.underline-sweep {
  color: #e2e8f0;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  text-decoration: none;
}
.underline-sweep::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
}
.underline-sweep:hover::after {
  width: 100%;
}`,
    htmlCode: `<div class="underline-sweep">Hover over me</div>`,
    isNew: false,
  },
  {
    id: 'image-zoom',
    name: 'Image Zoom Hover',
    category: 'hover',
    tags: ['hover', 'image', 'zoom'],
    difficulty: 'beginner',
    description: 'Image zooms in smoothly on hover',
    cssCode: `.img-zoom {
  width: 140px;
  height: 100px;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}
.img-zoom-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  transition: transform 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}
.img-zoom:hover .img-zoom-inner {
  transform: scale(1.2);
}`,
    htmlCode: `<div class="img-zoom"><div class="img-zoom-inner">Zoom</div></div>`,
    isNew: false,
  },
  {
    id: 'tilt-effect',
    name: 'Tilt Effect',
    category: 'hover',
    tags: ['hover', 'tilt', '3d'],
    difficulty: 'advanced',
    description: 'Element tilts on hover with perspective',
    cssCode: `.tilt-card {
  width: 140px;
  height: 100px;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  perspective: 800px;
}
.tilt-card:hover {
  transform: rotateY(10deg) rotateX(-5deg);
  box-shadow: -5px 5px 15px rgba(16,185,129,0.2);
}`,
    htmlCode: `<div class="tilt-card">Tilt</div>`,
    isNew: false,
  },
  {
    id: 'color-shift',
    name: 'Color Shift Hover',
    category: 'hover',
    tags: ['hover', 'color', 'animated', 'transition'],
    difficulty: 'intermediate',
    description: 'Background color shifts smoothly on hover',
    cssCode: `.color-shift {
  width: 140px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
  border: 1px solid #2a2a3e;
}
.color-shift:hover {
  background: #10b981;
  color: #0a0a0a;
  border-color: #10b981;
  transform: scale(1.05);
}`,
    htmlCode: `<div class="color-shift">Hover</div>`,
    isNew: true,
  },

  // ===== BORDERS =====
  {
    id: 'animated-border',
    name: 'Animated Border',
    category: 'borders',
    tags: ['animated', 'border', 'gradient'],
    difficulty: 'intermediate',
    description: 'Border that animates around the element',
    cssCode: `.animated-border {
  width: 140px;
  height: 80px;
  position: relative;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-weight: 600;
  background: #0f0f1a;
  overflow: hidden;
}
.animated-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: border-spin 3s linear infinite;
}
@keyframes border-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="animated-border">Animated</div>`,
    isNew: false,
  },
  {
    id: 'gradient-border',
    name: 'Gradient Border',
    category: 'borders',
    tags: ['gradient', 'border', 'static'],
    difficulty: 'beginner',
    description: 'Static gradient border around element',
    cssCode: `.gradient-border {
  width: 140px;
  height: 80px;
  border-radius: 12px;
  padding: 2px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
}
.gradient-border-inner {
  width: 100%;
  height: 100%;
  background: #0f0f1a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-weight: 600;
}`,
    htmlCode: `<div class="gradient-border"><div class="gradient-border-inner">Gradient</div></div>`,
    isNew: false,
  },
  {
    id: 'marching-ants',
    name: 'Marching Ants Border',
    category: 'borders',
    tags: ['animated', 'border', 'dashed'],
    difficulty: 'intermediate',
    description: 'Dashed border that appears to march around element',
    cssCode: `.marching-ants {
  width: 140px;
  height: 80px;
  border: 2px dashed #10b981;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  background: #0f0f1a;
  animation: march 0.5s linear infinite;
}
@keyframes march {
  to { stroke-dashoffset: -16; }
}`,
    htmlCode: `<div class="marching-ants">Marching</div>`,
    isNew: false,
  },
  {
    id: 'rounded-glow-border',
    name: 'Glow Border',
    category: 'borders',
    tags: ['border', 'glow', 'neon'],
    difficulty: 'beginner',
    description: 'Border with a neon glow effect',
    cssCode: `.glow-border {
  width: 140px;
  height: 80px;
  border: 2px solid #10b981;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  background: #0f0f1a;
  box-shadow: 0 0 10px #10b98144, inset 0 0 10px #10b98122;
}`,
    htmlCode: `<div class="glow-border">Glow</div>`,
    isNew: true,
  },

  // ===== SHADOWS =====
  {
    id: 'neon-shadow',
    name: 'Neon Shadow',
    category: 'shadows',
    tags: ['shadow', 'neon', 'glow'],
    difficulty: 'intermediate',
    description: 'Neon colored shadow effect',
    cssCode: `.neon-shadow-box {
  width: 140px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  box-shadow:
    0 0 5px #10b981,
    0 0 15px #10b98188,
    0 0 30px #10b98144,
    0 0 60px #10b98122;
}`,
    htmlCode: `<div class="neon-shadow-box">Neon</div>`,
    isNew: false,
  },
  {
    id: 'layered-shadow',
    name: 'Layered Shadow',
    category: 'shadows',
    tags: ['shadow', 'layered', 'depth'],
    difficulty: 'beginner',
    description: 'Multiple layered shadows for depth',
    cssCode: `.layered-shadow {
  width: 140px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-weight: 600;
  box-shadow:
    0 1px 2px rgba(0,0,0,0.1),
    0 2px 4px rgba(0,0,0,0.1),
    0 4px 8px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.1),
    0 16px 32px rgba(0,0,0,0.15);
}`,
    htmlCode: `<div class="layered-shadow">Layered</div>`,
    isNew: false,
  },
  {
    id: 'inner-glow',
    name: 'Inner Glow',
    category: 'shadows',
    tags: ['shadow', 'glow', 'inner'],
    difficulty: 'intermediate',
    description: 'Inner glow effect using box-shadow',
    cssCode: `.inner-glow-box {
  width: 140px;
  height: 80px;
  background: #0f0f1a;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  box-shadow: inset 0 0 20px #10b98144, inset 0 0 40px #10b98122;
  border: 1px solid #10b98133;
}`,
    htmlCode: `<div class="inner-glow-box">Inner Glow</div>`,
    isNew: false,
  },
  {
    id: 'animated-shadow',
    name: 'Animated Shadow',
    category: 'shadows',
    tags: ['shadow', 'animated', 'hover'],
    difficulty: 'intermediate',
    description: 'Shadow that animates on hover',
    cssCode: `.anim-shadow {
  width: 140px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.anim-shadow:hover {
  box-shadow: 0 0 20px #10b98166, 0 0 40px #10b98133, 0 20px 40px rgba(0,0,0,0.2);
}`,
    htmlCode: `<div class="anim-shadow">Hover</div>`,
    isNew: false,
  },

  // ===== INPUTS =====
  {
    id: 'floating-label-input',
    name: 'Floating Label Input',
    category: 'inputs',
    tags: ['input', 'label', 'floating', 'animated'],
    difficulty: 'intermediate',
    description: 'Input with a floating label animation',
    cssCode: `.float-input {
  position: relative;
  width: 200px;
}
.float-input input {
  width: 100%;
  padding: 12px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
}
.float-input input:focus {
  border-color: #10b981;
}
.float-input label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 0.9rem;
  pointer-events: none;
  transition: all 0.3s ease;
}
.float-input input:focus + label,
.float-input input:not(:placeholder-shown) + label {
  top: -8px;
  left: 12px;
  font-size: 0.75rem;
  color: #10b981;
  background: #0f0f1a;
  padding: 0 4px;
}`,
    htmlCode: `<div class="float-input"><input type="text" placeholder=" " /><label>Username</label></div>`,
    isNew: false,
  },
  {
    id: 'glow-input',
    name: 'Glow Input',
    category: 'inputs',
    tags: ['input', 'glow', 'focus'],
    difficulty: 'beginner',
    description: 'Input with a glow effect on focus',
    cssCode: `.glow-input {
  width: 200px;
  padding: 12px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}
.glow-input:focus {
  border-color: #10b981;
  box-shadow: 0 0 10px #10b98144, 0 0 20px #10b98122;
}`,
    htmlCode: `<input class="glow-input" type="text" placeholder="Focus me..." />`,
    isNew: false,
  },
  {
    id: 'underline-input',
    name: 'Underline Input',
    category: 'inputs',
    tags: ['input', 'underline', 'minimal'],
    difficulty: 'beginner',
    description: 'Minimal input with animated underline',
    cssCode: `.underline-input-wrap {
  position: relative;
  width: 200px;
}
.underline-input-wrap input {
  width: 100%;
  padding: 8px 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2a2a3e;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
}
.underline-input-wrap::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.underline-input-wrap:focus-within::after {
  width: 100%;
}`,
    htmlCode: `<div class="underline-input-wrap"><input type="text" placeholder="Type here..." /></div>`,
    isNew: true,
  },
  {
    id: 'search-input',
    name: 'Search Input',
    category: 'inputs',
    tags: ['input', 'search', 'icon'],
    difficulty: 'intermediate',
    description: 'Search input with animated icon',
    cssCode: `.search-input-wrap {
  position: relative;
  width: 200px;
}
.search-input-wrap input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 24px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}
.search-input-wrap input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98122;
  width: 220px;
}
.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 0.85rem;
}`,
    htmlCode: `<div class="search-input-wrap"><span class="search-icon">🔍</span><input type="text" placeholder="Search..." /></div>`,
    isNew: false,
  },

  // ===== TOGGLES =====
  {
    id: 'ios-toggle',
    name: 'iOS Toggle',
    category: 'toggles',
    tags: ['toggle', 'ios', 'switch'],
    difficulty: 'intermediate',
    description: 'iOS-style toggle switch',
    cssCode: `.ios-toggle {
  width: 50px;
  height: 28px;
  background: #2a2a3e;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ios-toggle.active {
  background: #10b981;
}
.ios-toggle::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.ios-toggle.active::after {
  transform: translateX(22px);
}`,
    htmlCode: `<div class="ios-toggle active"></div>`,
    isNew: false,
  },
  {
    id: 'checkbox-bounce',
    name: 'Bounce Checkbox',
    category: 'toggles',
    tags: ['checkbox', 'bounce', 'animated'],
    difficulty: 'intermediate',
    description: 'Checkbox with bounce animation on check',
    cssCode: `.bounce-check {
  width: 24px;
  height: 24px;
  border: 2px solid #10b981;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  background: #10b981;
  animation: check-bounce 0.4s ease;
}
.bounce-check::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: 700;
}
@keyframes check-bounce {
  0% { transform: scale(1); }
  30% { transform: scale(1.2); }
  60% { transform: scale(0.9); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="bounce-check"></div>`,
    isNew: false,
  },
  {
    id: 'dark-mode-toggle',
    name: 'Dark Mode Toggle',
    category: 'toggles',
    tags: ['toggle', 'dark-mode', 'sun-moon'],
    difficulty: 'advanced',
    description: 'Toggle that switches between sun and moon icons',
    cssCode: `.dark-toggle {
  width: 50px;
  height: 28px;
  background: #1a1a2e;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  border: 1px solid #2a2a3e;
}
.dark-toggle::before {
  content: '☀️';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 3px;
  left: 3px;
  transition: all 0.3s ease;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark-toggle.night::before {
  content: '🌙';
  transform: translateX(22px);
}`,
    htmlCode: `<div class="dark-toggle night"></div>`,
    isNew: true,
  },

  // ===== TOOLTIPS =====
  {
    id: 'top-tooltip',
    name: 'Top Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'top', 'hover'],
    difficulty: 'beginner',
    description: 'Tooltip appearing on top with arrow',
    cssCode: `.tooltip-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-trigger {
  padding: 8px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.85rem;
  cursor: pointer;
}
.tooltip-content {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #10b981;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
.tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #10b981;
}
.tooltip-wrap:hover .tooltip-content {
  opacity: 1;
}`,
    htmlCode: `<div class="tooltip-wrap"><div class="tooltip-trigger">Hover me</div><div class="tooltip-content">Tooltip text!</div></div>`,
    isNew: false,
  },
  {
    id: 'animated-tooltip',
    name: 'Animated Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'animated', 'scale'],
    difficulty: 'intermediate',
    description: 'Tooltip with scale animation on appear',
    cssCode: `.anim-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.anim-tooltip-trigger {
  padding: 8px 16px;
  background: #1a1a2e;
  border: 1px solid #10b981;
  border-radius: 8px;
  color: #10b981;
  font-size: 0.85rem;
  cursor: pointer;
}
.anim-tooltip-content {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  background: #10b981;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
}
.anim-tooltip-wrap:hover .anim-tooltip-content {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`,
    htmlCode: `<div class="anim-tooltip-wrap"><div class="anim-tooltip-trigger">Hover</div><div class="anim-tooltip-content">Animated!</div></div>`,
    isNew: false,
  },
  {
    id: 'multi-tooltip',
    name: 'Multi-line Tooltip',
    category: 'tooltips',
    tags: ['tooltip', 'multi-line', 'info'],
    difficulty: 'beginner',
    description: 'Tooltip with multiple lines of content',
    cssCode: `.multi-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.multi-tooltip-trigger {
  padding: 8px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.85rem;
  cursor: pointer;
}
.multi-tooltip-content {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #1a1a2e;
  color: #e2e8f0;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.75rem;
  width: 160px;
  border: 1px solid #2a2a3e;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  line-height: 1.4;
}
.multi-tooltip-wrap:hover .multi-tooltip-content {
  opacity: 1;
}`,
    htmlCode: `<div class="multi-tooltip-wrap"><div class="multi-tooltip-trigger">Info</div><div class="multi-tooltip-content">This is a multi-line tooltip with more detail.</div></div>`,
    isNew: true,
  },

  // ===== TRANSITIONS =====
  {
    id: 'expand-transition',
    name: 'Expand Transition',
    category: 'transitions',
    tags: ['transition', 'expand', 'animated'],
    difficulty: 'intermediate',
    description: 'Smooth expanding element transition',
    cssCode: `.expand-box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}
.expand-box:hover {
  width: 160px;
  border-radius: 16px;
}`,
    htmlCode: `<div class="expand-box">Expand</div>`,
    isNew: false,
  },
  {
    id: 'morph-transition',
    name: 'Morph Transition',
    category: 'transitions',
    tags: ['transition', 'morph', 'shape'],
    difficulty: 'advanced',
    description: 'Element morphs from one shape to another',
    cssCode: `.morph-shape {
  width: 80px;
  height: 80px;
  background: #10b981;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}
.morph-shape:hover {
  border-radius: 12px;
  background: #3b82f6;
  transform: rotate(45deg);
}`,
    htmlCode: `<div class="morph-shape">Morph</div>`,
    isNew: false,
  },
  {
    id: 'slide-transition',
    name: 'Slide Transition',
    category: 'transitions',
    tags: ['transition', 'slide', 'animated'],
    difficulty: 'beginner',
    description: 'Content slides in from the side',
    cssCode: `.slide-box {
  width: 160px;
  height: 60px;
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid #2a2a3e;
}
.slide-content {
  width: 100%;
  height: 100%;
  background: #10b981;
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}
.slide-box:hover .slide-content {
  transform: translateX(0);
}`,
    htmlCode: `<div class="slide-box"><div class="slide-content">Slid!</div></div>`,
    isNew: false,
  },

  // ===== PROGRESS BARS =====
  {
    id: 'striped-progress',
    name: 'Striped Progress Bar',
    category: 'progress',
    tags: ['progress', 'striped', 'animated'],
    difficulty: 'beginner',
    description: 'Progress bar with animated stripes',
    cssCode: `.striped-progress {
  width: 200px;
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: hidden;
}
.striped-fill {
  width: 70%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    #10b981,
    #10b981 10px,
    #059669 10px,
    #059669 20px
  );
  background-size: 28px 28px;
  animation: stripe-move 1s linear infinite;
  border-radius: 6px;
}
@keyframes stripe-move {
  0% { background-position: 0 0; }
  100% { background-position: 28px 0; }
}`,
    htmlCode: `<div class="striped-progress"><div class="striped-fill"></div></div>`,
    isNew: false,
  },
  {
    id: 'gradient-fill-progress',
    name: 'Gradient Fill Progress',
    category: 'progress',
    tags: ['progress', 'gradient', 'animated'],
    difficulty: 'intermediate',
    description: 'Progress bar with animated gradient fill',
    cssCode: `.gradient-progress {
  width: 200px;
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: hidden;
}
.gradient-fill {
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 100%;
  animation: gradient-move 2s ease infinite;
  border-radius: 6px;
}
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="gradient-progress"><div class="gradient-fill"></div></div>`,
    isNew: false,
  },
  {
    id: 'circular-progress',
    name: 'Circular Progress',
    category: 'progress',
    tags: ['progress', 'circular', 'animated'],
    difficulty: 'advanced',
    description: 'Circular progress indicator with SVG',
    cssCode: `.circular-progress {
  width: 60px;
  height: 60px;
  position: relative;
}
.circular-progress svg {
  transform: rotate(-90deg);
}
.circular-progress circle {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
}
.circular-progress .bg-circle {
  stroke: #1a1a2e;
}
.circular-progress .progress-circle {
  stroke: #10b981;
  stroke-dasharray: 157;
  stroke-dashoffset: 47;
  animation: circ-fill 2s ease infinite;
}
@keyframes circ-fill {
  0% { stroke-dashoffset: 157; }
  50% { stroke-dashoffset: 47; }
  100% { stroke-dashoffset: 157; }
}`,
    htmlCode: `<div class="circular-progress"><svg viewBox="0 0 60 60"><circle class="bg-circle" cx="30" cy="30" r="25"/><circle class="progress-circle" cx="30" cy="30" r="25"/></svg></div>`,
    isNew: false,
  },
  {
    id: 'step-progress',
    name: 'Step Progress',
    category: 'progress',
    tags: ['progress', 'steps', 'indicator'],
    difficulty: 'intermediate',
    description: 'Multi-step progress indicator',
    cssCode: `.step-progress {
  display: flex;
  align-items: center;
  gap: 0;
}
.step {
  width: 24px;
  height: 24px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  color: white;
  font-weight: 700;
}
.step.pending {
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  color: #64748b;
}
.step-line {
  width: 24px;
  height: 2px;
  background: #10b981;
}
.step-line.pending {
  background: #2a2a3e;
}`,
    htmlCode: `<div class="step-progress"><div class="step">1</div><div class="step-line"></div><div class="step">2</div><div class="step-line"></div><div class="step">3</div><div class="step-line pending"></div><div class="step pending">4</div></div>`,
    isNew: true,
  },

  // ===== NOTIFICATIONS =====
  {
    id: 'badge-pulse',
    name: 'Badge Pulse',
    category: 'notifications',
    tags: ['badge', 'pulse', 'animated'],
    difficulty: 'beginner',
    description: 'Notification badge with pulse animation',
    cssCode: `.badge-pulse-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.2rem;
}
.badge-pulse {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  background: #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: white;
  font-weight: 700;
}
.badge-pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #ef4444;
  animation: badge-ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
}
@keyframes badge-ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}`,
    htmlCode: `<div class="badge-pulse-wrap">🔔<span class="badge-pulse">3</span></div>`,
    isNew: false,
  },
  {
    id: 'toast-notification',
    name: 'Toast Notification',
    category: 'notifications',
    tags: ['notification', 'toast', 'slide'],
    difficulty: 'intermediate',
    description: 'Sliding toast notification',
    cssCode: `.toast-notif {
  padding: 12px 20px;
  background: #1a1a2e;
  border: 1px solid #10b981;
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: toast-in 0.4s ease;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
.toast-icon {
  color: #10b981;
  font-size: 1.1rem;
}
@keyframes toast-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="toast-notif"><span class="toast-icon">✓</span> Successfully saved!</div>`,
    isNew: false,
  },
  {
    id: 'notification-dot',
    name: 'Notification Dot',
    category: 'notifications',
    tags: ['notification', 'dot', 'indicator'],
    difficulty: 'beginner',
    description: 'Simple notification dot indicator',
    cssCode: `.notif-dot-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.2rem;
  cursor: pointer;
}
.notif-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid #0f0f1a;
}`,
    htmlCode: `<div class="notif-dot-wrap">🔔<div class="notif-dot"></div></div>`,
    isNew: false,
  },
  {
    id: 'alert-banner',
    name: 'Alert Banner',
    category: 'notifications',
    tags: ['alert', 'banner', 'notification'],
    difficulty: 'beginner',
    description: 'Animated alert banner',
    cssCode: `.alert-banner {
  padding: 10px 16px;
  background: linear-gradient(90deg, #10b98122, #10b98111);
  border-left: 3px solid #10b981;
  border-radius: 0 8px 8px 0;
  color: #10b981;
  font-size: 0.85rem;
  animation: banner-slide 0.5s ease;
}
@keyframes banner-slide {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="alert-banner">⚡ New update available</div>`,
    isNew: true,
  },

  // ===== AVATARS =====
  {
    id: 'avatar-ring',
    name: 'Avatar Ring',
    category: 'avatars',
    tags: ['avatar', 'ring', 'status'],
    difficulty: 'beginner',
    description: 'Avatar with colored ring indicator',
    cssCode: `.avatar-ring {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #10b981;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
}`,
    htmlCode: `<div class="avatar-ring">Z</div>`,
    isNew: false,
  },
  {
    id: 'avatar-stack',
    name: 'Avatar Stack',
    category: 'avatars',
    tags: ['avatar', 'stack', 'overlap'],
    difficulty: 'intermediate',
    description: 'Overlapping stack of avatars',
    cssCode: `.avatar-stack {
  display: flex;
  align-items: center;
}
.avatar-stack-item {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #0f0f1a;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
}
.avatar-stack-item:first-child { margin-left: 0; }
.avatar-stack-item:nth-child(1) { background: #10b981; z-index: 3; }
.avatar-stack-item:nth-child(2) { background: #3b82f6; z-index: 2; }
.avatar-stack-item:nth-child(3) { background: #8b5cf6; z-index: 1; }
.avatar-stack-item:nth-child(4) { background: #1a1a2e; color: #64748b; z-index: 0; }`,
    htmlCode: `<div class="avatar-stack"><div class="avatar-stack-item">A</div><div class="avatar-stack-item">B</div><div class="avatar-stack-item">C</div><div class="avatar-stack-item">+3</div></div>`,
    isNew: false,
  },
  {
    id: 'avatar-status',
    name: 'Avatar with Status',
    category: 'avatars',
    tags: ['avatar', 'status', 'online'],
    difficulty: 'beginner',
    description: 'Avatar with online status indicator',
    cssCode: `.avatar-status {
  position: relative;
  width: 50px;
  height: 50px;
}
.avatar-status-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
}
.status-dot {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid #0f0f1a;
}`,
    htmlCode: `<div class="avatar-status"><div class="avatar-status-img">J</div><div class="status-dot"></div></div>`,
    isNew: false,
  },
  {
    id: 'avatar-animated',
    name: 'Animated Avatar',
    category: 'avatars',
    tags: ['avatar', 'animated', 'pulse'],
    difficulty: 'intermediate',
    description: 'Avatar with animated border',
    cssCode: `.avatar-anim {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  animation: avatar-spin 3s linear infinite;
}
.avatar-anim-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}
@keyframes avatar-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="avatar-anim"><div class="avatar-anim-inner">M</div></div>`,
    isNew: true,
  },

  // ===== NAVIGATION =====
  {
    id: 'pill-nav',
    name: 'Pill Navigation',
    category: 'navigation',
    tags: ['navigation', 'pill', 'animated'],
    difficulty: 'intermediate',
    description: 'Navigation with animated pill indicator',
    cssCode: `.pill-nav {
  display: flex;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 4px;
  gap: 2px;
}
.pill-item {
  padding: 6px 14px;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.pill-item.active {
  background: #10b981;
  color: white;
}`,
    htmlCode: `<div class="pill-nav"><div class="pill-item active">Home</div><div class="pill-item">About</div><div class="pill-item">Contact</div></div>`,
    isNew: false,
  },
  {
    id: 'hamburger-menu',
    name: 'Animated Hamburger',
    category: 'navigation',
    tags: ['navigation', 'hamburger', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated hamburger menu icon',
    cssCode: `.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
}
.hamburger span {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 9px; }
.hamburger span:nth-child(3) { top: 18px; }
.hamburger.open span:nth-child(1) { top: 9px; transform: rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { top: 9px; transform: rotate(-45deg); }`,
    htmlCode: `<div class="hamburger open"><span></span><span></span><span></span></div>`,
    isNew: false,
  },
  {
    id: 'breadcrumb-nav',
    name: 'Breadcrumb Navigation',
    category: 'navigation',
    tags: ['navigation', 'breadcrumb', 'path'],
    difficulty: 'beginner',
    description: 'Breadcrumb trail with arrow separators',
    cssCode: `.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
}
.breadcrumb-item {
  color: #64748b;
  cursor: pointer;
  transition: color 0.2s;
}
.breadcrumb-item:hover {
  color: #10b981;
}
.breadcrumb-item.active {
  color: #10b981;
  font-weight: 600;
}
.breadcrumb-sep {
  color: #2a2a3e;
}`,
    htmlCode: `<div class="breadcrumb"><span class="breadcrumb-item">Home</span><span class="breadcrumb-sep">›</span><span class="breadcrumb-item">Products</span><span class="breadcrumb-sep">›</span><span class="breadcrumb-item active">Details</span></div>`,
    isNew: false,
  },
  {
    id: 'dot-nav',
    name: 'Dot Navigation',
    category: 'navigation',
    tags: ['navigation', 'dots', 'pagination'],
    difficulty: 'beginner',
    description: 'Dot-based pagination navigation',
    cssCode: `.dot-nav {
  display: flex;
  gap: 8px;
  align-items: center;
}
.dot-nav-item {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2a2a3e;
  cursor: pointer;
  transition: all 0.3s ease;
}
.dot-nav-item.active {
  width: 24px;
  border-radius: 4px;
  background: #10b981;
}`,
    htmlCode: `<div class="dot-nav"><div class="dot-nav-item active"></div><div class="dot-nav-item"></div><div class="dot-nav-item"></div><div class="dot-nav-item"></div></div>`,
    isNew: true,
  },
  {
    id: 'sidebar-menu',
    name: 'Sidebar Menu',
    category: 'navigation',
    tags: ['navigation', 'sidebar', 'menu'],
    difficulty: 'intermediate',
    description: 'Compact sidebar menu with active indicator',
    cssCode: `.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 160px;
}
.sidebar-item {
  padding: 8px 12px;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sidebar-item:hover {
  background: #1a1a2e;
  color: #e2e8f0;
}
.sidebar-item.active {
  background: #10b98122;
  color: #10b981;
  border-left: 2px solid #10b981;
}`,
    htmlCode: `<div class="sidebar-menu"><div class="sidebar-item active">🏠 Home</div><div class="sidebar-item">📊 Dashboard</div><div class="sidebar-item">⚙️ Settings</div></div>`,
    isNew: false,
  },

  // ===== IMAGE & GALLERY =====
  {
    id: 'image-overlay',
    name: 'Image Overlay',
    category: 'image',
    tags: ['image', 'overlay', 'hover'],
    difficulty: 'beginner',
    description: 'Image with text overlay on hover',
    cssCode: `.img-overlay {
  width: 140px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}
.img-overlay-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  transition: transform 0.3s ease;
}
.img-overlay-text {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.img-overlay:hover .img-overlay-text { opacity: 1; }
.img-overlay:hover .img-overlay-bg { transform: scale(1.1); }`,
    htmlCode: `<div class="img-overlay"><div class="img-overlay-bg"></div><div class="img-overlay-text">View</div></div>`,
    isNew: false,
  },
  {
    id: 'polaroid',
    name: 'Polaroid Frame',
    category: 'image',
    tags: ['image', 'polaroid', 'frame'],
    difficulty: 'beginner',
    description: 'Image in a polaroid-style frame',
    cssCode: `.polaroid {
  width: 120px;
  padding: 8px 8px 28px;
  background: white;
  border-radius: 2px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.polaroid-img {
  width: 100%;
  height: 80px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  border-radius: 1px;
}
.polaroid-text {
  text-align: center;
  color: #333;
  font-size: 0.7rem;
  margin-top: 6px;
}`,
    htmlCode: `<div class="polaroid"><div class="polaroid-img"></div><div class="polaroid-text">Summer 2024</div></div>`,
    isNew: false,
  },
  {
    id: 'gallery-grid',
    name: 'Gallery Grid',
    category: 'image',
    tags: ['image', 'gallery', 'grid'],
    difficulty: 'intermediate',
    description: 'Masonry-style gallery grid layout',
    cssCode: `.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: 150px;
}
.gallery-item {
  aspect-ratio: 1;
  border-radius: 4px;
  transition: transform 0.2s ease;
  cursor: pointer;
}
.gallery-item:nth-child(1) { background: #10b981; }
.gallery-item:nth-child(2) { background: #3b82f6; }
.gallery-item:nth-child(3) { background: #8b5cf6; }
.gallery-item:nth-child(4) { background: #f59e0b; }
.gallery-item:nth-child(5) { background: #ef4444; }
.gallery-item:nth-child(6) { background: #06b6d4; }
.gallery-item:hover { transform: scale(1.1); z-index: 1; }`,
    htmlCode: `<div class="gallery-grid"><div class="gallery-item"></div><div class="gallery-item"></div><div class="gallery-item"></div><div class="gallery-item"></div><div class="gallery-item"></div><div class="gallery-item"></div></div>`,
    isNew: false,
  },
  {
    id: 'before-after',
    name: 'Before/After Slider',
    category: 'image',
    tags: ['image', 'slider', 'comparison'],
    difficulty: 'advanced',
    description: 'Image comparison slider effect',
    cssCode: `.before-after {
  width: 150px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.before-side {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #64748b, #475569);
  clip-path: inset(0 50% 0 0);
}
.after-side {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #10b981, #059669);
}
.slider-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: white;
  z-index: 2;
}
.slider-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: #333;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}`,
    htmlCode: `<div class="before-after"><div class="after-side"></div><div class="before-side"></div><div class="slider-line"></div><div class="slider-handle">⟺</div></div>`,
    isNew: true,
  },
  {
    id: 'lightbox',
    name: 'Lightbox Effect',
    category: 'image',
    tags: ['image', 'lightbox', 'overlay'],
    difficulty: 'intermediate',
    description: 'Image lightbox zoom effect',
    cssCode: `.lightbox {
  width: 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;
}
.lightbox-img {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  transition: transform 0.3s ease;
}
.lightbox:hover .lightbox-img {
  transform: scale(1.5);
}
.lightbox-icon {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  background: rgba(0,0,0,0.6);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.6rem;
}`,
    htmlCode: `<div class="lightbox"><div class="lightbox-img"></div><div class="lightbox-icon">🔍</div></div>`,
    isNew: false,
  },

  // ===== PRICING & TAGS =====
  {
    id: 'price-tag',
    name: 'Price Tag',
    category: 'pricing',
    tags: ['pricing', 'tag', 'badge'],
    difficulty: 'beginner',
    description: 'Stylized price tag element',
    cssCode: `.price-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #10b981;
  color: white;
  border-radius: 6px 6px 6px 0;
  font-weight: 700;
  font-size: 0.9rem;
  position: relative;
}
.price-tag::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  border: 3px solid #059669;
  border-left-color: transparent;
  border-bottom-color: transparent;
}`,
    htmlCode: `<div class="price-tag">$29.99</div>`,
    isNew: false,
  },
  {
    id: 'popular-badge',
    name: 'Popular Badge',
    category: 'pricing',
    tags: ['pricing', 'badge', 'popular'],
    difficulty: 'beginner',
    description: 'Most popular badge for pricing cards',
    cssCode: `.popular-badge {
  display: inline-flex;
  padding: 4px 12px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 20px;
  box-shadow: 0 2px 8px #10b98144;
}`,
    htmlCode: `<div class="popular-badge">⭐ Most Popular</div>`,
    isNew: false,
  },
  {
    id: 'discount-tag',
    name: 'Discount Tag',
    category: 'pricing',
    tags: ['pricing', 'discount', 'sale'],
    difficulty: 'intermediate',
    description: 'Animated discount/sale tag',
    cssCode: `.discount-tag {
  position: relative;
  display: inline-flex;
  padding: 6px 14px 6px 10px;
  background: #ef4444;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 10% 50%);
  animation: tag-bounce 2s ease infinite;
}
@keyframes tag-bounce {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}`,
    htmlCode: `<div class="discount-tag">-50%</div>`,
    isNew: true,
  },
  {
    id: 'pricing-card',
    name: 'Pricing Card',
    category: 'pricing',
    tags: ['pricing', 'card', 'plan'],
    difficulty: 'intermediate',
    description: 'Clean pricing card design',
    cssCode: `.pricing-card {
  width: 150px;
  padding: 16px;
  background: #1a1a2e;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  text-align: center;
  color: #e2e8f0;
}
.pricing-card.featured {
  border-color: #10b981;
  box-shadow: 0 0 20px #10b98122;
}
.pricing-name { font-size: 0.8rem; color: #64748b; margin-bottom: 4px; }
.pricing-price { font-size: 1.5rem; font-weight: 800; color: #10b981; }
.pricing-period { font-size: 0.7rem; color: #64748b; }`,
    htmlCode: `<div class="pricing-card featured"><div class="pricing-name">Pro Plan</div><div class="pricing-price">$9<span class="pricing-period">/mo</span></div></div>`,
    isNew: false,
  },
  {
    id: 'ribbon-tag',
    name: 'Ribbon Tag',
    category: 'pricing',
    tags: ['pricing', 'ribbon', 'corner'],
    difficulty: 'advanced',
    description: 'Corner ribbon tag effect',
    cssCode: `.ribbon-wrap {
  width: 120px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.ribbon {
  position: absolute;
  top: 12px;
  left: -30px;
  background: #10b981;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 3px 30px;
  transform: rotate(-45deg);
  text-transform: uppercase;
}`,
    htmlCode: `<div class="ribbon-wrap"><div class="ribbon">New</div></div>`,
    isNew: true,
  },

  // ===== TIMELINES =====
  {
    id: 'vertical-timeline',
    name: 'Vertical Timeline',
    category: 'timelines',
    tags: ['timeline', 'vertical', 'steps'],
    difficulty: 'intermediate',
    description: 'Vertical timeline with dots and lines',
    cssCode: `.timeline {
  position: relative;
  padding-left: 20px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #2a2a3e;
}
.timeline-item {
  position: relative;
  padding-bottom: 12px;
  padding-left: 16px;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  border: 2px solid #0f0f1a;
}
.timeline-text {
  font-size: 0.75rem;
  color: #e2e8f0;
}
.timeline-time {
  font-size: 0.65rem;
  color: #64748b;
}`,
    htmlCode: `<div class="timeline"><div class="timeline-item"><div class="timeline-text">Step 1</div><div class="timeline-time">9:00 AM</div></div><div class="timeline-item"><div class="timeline-text">Step 2</div><div class="timeline-time">10:00 AM</div></div><div class="timeline-item"><div class="timeline-text">Step 3</div><div class="timeline-time">11:00 AM</div></div></div>`,
    isNew: false,
  },
  {
    id: 'horizontal-steps',
    name: 'Horizontal Steps',
    category: 'timelines',
    tags: ['timeline', 'horizontal', 'steps'],
    difficulty: 'intermediate',
    description: 'Horizontal step progress indicator',
    cssCode: `.h-steps {
  display: flex;
  align-items: flex-start;
}
.h-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.h-step-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.55rem;
  color: white;
  font-weight: 700;
}
.h-step.pending .h-step-dot {
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  color: #64748b;
}
.h-step-label {
  font-size: 0.6rem;
  color: #64748b;
  margin-top: 4px;
}
.h-step-line {
  width: 30px;
  height: 2px;
  background: #10b981;
  margin-top: 10px;
}
.h-step-line.pending { background: #2a2a3e; }`,
    htmlCode: `<div class="h-steps"><div class="h-step"><div class="h-step-dot">1</div><div class="h-step-label">Cart</div></div><div class="h-step-line"></div><div class="h-step"><div class="h-step-dot">2</div><div class="h-step-label">Ship</div></div><div class="h-step-line pending"></div><div class="h-step pending"><div class="h-step-dot">3</div><div class="h-step-label">Pay</div></div></div>`,
    isNew: false,
  },
  {
    id: 'zigzag-timeline',
    name: 'Zigzag Timeline',
    category: 'timelines',
    tags: ['timeline', 'zigzag', 'creative'],
    difficulty: 'advanced',
    description: 'Alternating zigzag timeline layout',
    cssCode: `.zigzag {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 180px;
}
.zigzag-item {
  padding: 8px 12px;
  background: #1a1a2e;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #e2e8f0;
  border-left: 2px solid #10b981;
}
.zigzag-item:nth-child(even) {
  margin-left: 30px;
  border-left: none;
  border-right: 2px solid #3b82f6;
}`,
    htmlCode: `<div class="zigzag"><div class="zigzag-item">Event 1</div><div class="zigzag-item">Event 2</div><div class="zigzag-item">Event 3</div></div>`,
    isNew: true,
  },
  {
    id: 'milestone-timeline',
    name: 'Milestone Timeline',
    category: 'timelines',
    tags: ['timeline', 'milestone', 'markers'],
    difficulty: 'intermediate',
    description: 'Timeline with milestone markers',
    cssCode: `.milestone {
  display: flex;
  align-items: center;
  gap: 0;
}
.milestone-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10b981;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  color: white;
}
.milestone-dot.future {
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
}
.milestone-line {
  flex: 1;
  height: 2px;
  background: #10b981;
}
.milestone-line.future {
  background: #2a2a3e;
  background-image: repeating-linear-gradient(90deg, #2a2a3e 0, #2a2a3e 4px, transparent 4px, transparent 8px);
}`,
    htmlCode: `<div class="milestone"><div class="milestone-dot">✓</div><div class="milestone-line"></div><div class="milestone-dot">✓</div><div class="milestone-line future"></div><div class="milestone-dot future"></div></div>`,
    isNew: false,
  },
  {
    id: 'numbered-steps',
    name: 'Numbered Steps',
    category: 'timelines',
    tags: ['steps', 'numbered', 'guide'],
    difficulty: 'beginner',
    description: 'Simple numbered step guide',
    cssCode: `.numbered-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.numbered-step {
  display: flex;
  align-items: center;
  gap: 10px;
}
.step-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #10b981;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
}
.step-text {
  font-size: 0.8rem;
  color: #e2e8f0;
}`,
    htmlCode: `<div class="numbered-steps"><div class="numbered-step"><div class="step-number">1</div><div class="step-text">Sign up</div></div><div class="numbered-step"><div class="step-number">2</div><div class="step-text">Configure</div></div><div class="numbered-step"><div class="step-number">3</div><div class="step-text">Launch</div></div></div>`,
    isNew: false,
  },

  // ===== WEATHER & NATURE =====
  {
    id: 'rain-effect',
    name: 'Rain Effect',
    category: 'weather',
    tags: ['weather', 'rain', 'animated'],
    difficulty: 'advanced',
    description: 'CSS rain animation effect',
    cssCode: `.rain-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #1a1a2e, #0a0a1a);
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.raindrop {
  position: absolute;
  width: 2px;
  background: linear-gradient(transparent, #3b82f680);
  animation: rain-fall 1s linear infinite;
}
.raindrop:nth-child(1) { left: 20%; height: 20px; animation-delay: 0s; animation-duration: 0.7s; }
.raindrop:nth-child(2) { left: 40%; height: 15px; animation-delay: 0.3s; animation-duration: 0.9s; }
.raindrop:nth-child(3) { left: 60%; height: 18px; animation-delay: 0.1s; animation-duration: 0.8s; }
.raindrop:nth-child(4) { left: 80%; height: 22px; animation-delay: 0.5s; animation-duration: 0.6s; }
@keyframes rain-fall {
  0% { top: -20px; opacity: 1; }
  100% { top: 100%; opacity: 0.3; }
}`,
    htmlCode: `<div class="rain-container"><div class="raindrop"></div><div class="raindrop"></div><div class="raindrop"></div><div class="raindrop"></div></div>`,
    isNew: true,
  },
  {
    id: 'sun-glow',
    name: 'Sun Glow',
    category: 'weather',
    tags: ['weather', 'sun', 'glow'],
    difficulty: 'intermediate',
    description: 'Animated sun with glow rays',
    cssCode: `.sun-glow {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #fbbf24, #f59e0b);
  border-radius: 50%;
  box-shadow: 0 0 30px #fbbf2488, 0 0 60px #f59e0b44, 0 0 90px #f59e0b22;
  animation: sun-pulse 3s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes sun-pulse {
  0%, 100% { box-shadow: 0 0 30px #fbbf2488, 0 0 60px #f59e0b44; transform: scale(1); }
  50% { box-shadow: 0 0 40px #fbbf24aa, 0 0 80px #f59e0b66; transform: scale(1.05); }
}`,
    htmlCode: `<div class="sun-glow"></div>`,
    isNew: false,
  },
  {
    id: 'cloud-float',
    name: 'Floating Cloud',
    category: 'weather',
    tags: ['weather', 'cloud', 'float'],
    difficulty: 'beginner',
    description: 'CSS cloud floating animation',
    cssCode: `.cloud {
  position: relative;
  width: 80px;
  height: 30px;
  background: #e2e8f0;
  border-radius: 30px;
  animation: cloud-drift 4s ease-in-out infinite;
}
.cloud::before {
  content: '';
  position: absolute;
  width: 36px;
  height: 36px;
  background: #e2e8f0;
  border-radius: 50%;
  top: -20px;
  left: 14px;
}
.cloud::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 50%;
  top: -10px;
  left: 42px;
}
@keyframes cloud-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(15px); }
}`,
    htmlCode: `<div class="cloud"></div>`,
    isNew: false,
  },
  {
    id: 'lightning',
    name: 'Lightning Flash',
    category: 'weather',
    tags: ['weather', 'lightning', 'flash'],
    difficulty: 'intermediate',
    description: 'Lightning flash effect',
    cssCode: `.lightning-box {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.lightning-bolt {
  position: absolute;
  top: 10%;
  left: 50%;
  width: 3px;
  height: 60%;
  background: #fef08a;
  transform: translateX(-50%);
  clip-path: polygon(40% 0%, 60% 0%, 55% 35%, 80% 35%, 35% 100%, 45% 55%, 20% 55%);
  animation: flash 3s infinite;
}
.lightning-box::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #fef08a;
  opacity: 0;
  animation: flash-bg 3s infinite;
}
@keyframes flash {
  0%, 89%, 91%, 93%, 100% { opacity: 0; }
  90%, 92% { opacity: 1; }
}
@keyframes flash-bg {
  0%, 89%, 91%, 93%, 100% { opacity: 0; }
  90%, 92% { opacity: 0.1; }
}`,
    htmlCode: `<div class="lightning-box"><div class="lightning-bolt"></div></div>`,
    isNew: true,
  },
  {
    id: 'snow-fall',
    name: 'Snow Fall',
    category: 'weather',
    tags: ['weather', 'snow', 'animated'],
    difficulty: 'intermediate',
    description: 'CSS snow falling animation',
    cssCode: `.snow-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #1e293b, #0f172a);
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.snowflake {
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: snow-fall 3s linear infinite;
}
.snowflake:nth-child(1) { left: 15%; animation-delay: 0s; animation-duration: 2.5s; width: 4px; height: 4px; }
.snowflake:nth-child(2) { left: 35%; animation-delay: 0.8s; animation-duration: 3s; }
.snowflake:nth-child(3) { left: 55%; animation-delay: 0.4s; animation-duration: 2.8s; width: 4px; height: 4px; }
.snowflake:nth-child(4) { left: 75%; animation-delay: 1.2s; animation-duration: 3.2s; }
.snowflake:nth-child(5) { left: 90%; animation-delay: 0.6s; animation-duration: 2.6s; width: 4px; height: 4px; }
@keyframes snow-fall {
  0% { top: -10px; opacity: 1; }
  100% { top: 100%; opacity: 0.3; }
}`,
    htmlCode: `<div class="snow-container"><div class="snowflake"></div><div class="snowflake"></div><div class="snowflake"></div><div class="snowflake"></div><div class="snowflake"></div></div>`,
    isNew: true,
  },

  // ===== COLOR & GRADIENTS =====
  {
    id: 'mesh-gradient',
    name: 'Mesh Gradient',
    category: 'color',
    tags: ['gradient', 'mesh', 'color'],
    difficulty: 'intermediate',
    description: 'Beautiful mesh gradient effect',
    cssCode: `.mesh-grad {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  background-image:
    radial-gradient(at 10% 20%, #10b98155 0%, transparent 50%),
    radial-gradient(at 90% 80%, #3b82f655 0%, transparent 50%),
    radial-gradient(at 50% 50%, #8b5cf655 0%, transparent 50%);
  border-radius: 8px;
}`,
    htmlCode: `<div class="mesh-grad"></div>`,
    isNew: false,
  },
  {
    id: 'conic-gradient',
    name: 'Conic Gradient',
    category: 'color',
    tags: ['gradient', 'conic', 'color'],
    difficulty: 'beginner',
    description: 'Conic gradient color wheel',
    cssCode: `.conic-grad {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(
    #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444
  );
}`,
    htmlCode: `<div class="conic-grad"></div>`,
    isNew: false,
  },
  {
    id: 'gradient-text-fill',
    name: 'Gradient Text Fill',
    category: 'color',
    tags: ['gradient', 'text', 'color'],
    difficulty: 'beginner',
    description: 'Text filled with gradient color',
    cssCode: `.grad-fill-text {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,
    htmlCode: `<div class="grad-fill-text">COLOR</div>`,
    isNew: false,
  },
  {
    id: 'color-cycle',
    name: 'Color Cycle',
    category: 'color',
    tags: ['color', 'animated', 'cycle'],
    difficulty: 'intermediate',
    description: 'Background that cycles through colors',
    cssCode: `.color-cycle {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  animation: cycle-colors 6s ease infinite;
}
@keyframes cycle-colors {
  0% { background: #ef4444; }
  25% { background: #f59e0b; }
  50% { background: #10b981; }
  75% { background: #3b82f6; }
  100% { background: #ef4444; }
}`,
    htmlCode: `<div class="color-cycle"></div>`,
    isNew: true,
  },
  {
    id: 'duotone',
    name: 'Duotone Effect',
    category: 'color',
    tags: ['color', 'duotone', 'filter'],
    difficulty: 'advanced',
    description: 'Duotone color effect using CSS filters',
    cssCode: `.duotone-box {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background: linear-gradient(135deg, #666, #999);
  position: relative;
  overflow: hidden;
}
.duotone-box::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b981;
  mix-blend-mode: multiply;
  border-radius: 12px;
}`,
    htmlCode: `<div class="duotone-box"></div>`,
    isNew: false,
  },

  // ===== MOTION & PHYSICS =====
  {
    id: 'bounce-effect',
    name: 'Bounce Effect',
    category: 'motion',
    tags: ['motion', 'bounce', 'physics'],
    difficulty: 'beginner',
    description: 'Bouncing ball animation with physics',
    cssCode: `.bounce-ball {
  width: 30px;
  height: 30px;
  background: #10b981;
  border-radius: 50%;
  animation: bounce-physics 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
}
@keyframes bounce-physics {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-40px); }
  50% { transform: translateY(0); }
  65% { transform: translateY(-15px); }
  80% { transform: translateY(0); }
  90% { transform: translateY(-5px); }
}`,
    htmlCode: `<div class="bounce-ball"></div>`,
    isNew: false,
  },
  {
    id: 'pendulum',
    name: 'Pendulum Swing',
    category: 'motion',
    tags: ['motion', 'pendulum', 'physics'],
    difficulty: 'intermediate',
    description: 'Pendulum swinging animation',
    cssCode: `.pendulum-wrap {
  display: flex;
  justify-content: center;
  position: relative;
  height: 80px;
}
.pendulum-arm {
  width: 2px;
  height: 60px;
  background: #64748b;
  transform-origin: top center;
  animation: pendulum-swing 2s ease-in-out infinite;
  position: relative;
}
.pendulum-bob {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
}
@keyframes pendulum-swing {
  0% { transform: rotate(30deg); }
  50% { transform: rotate(-30deg); }
  100% { transform: rotate(30deg); }
}`,
    htmlCode: `<div class="pendulum-wrap"><div class="pendulum-arm"><div class="pendulum-bob"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'elastic-scale',
    name: 'Elastic Scale',
    category: 'motion',
    tags: ['motion', 'elastic', 'scale'],
    difficulty: 'intermediate',
    description: 'Elastic scaling animation',
    cssCode: `.elastic-box {
  width: 60px;
  height: 60px;
  background: #10b981;
  border-radius: 12px;
  animation: elastic-anim 2s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
}
@keyframes elastic-anim {
  0% { transform: scale(1); }
  25% { transform: scale(1.3, 0.7); }
  50% { transform: scale(0.8, 1.2); }
  75% { transform: scale(1.1, 0.9); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="elastic-box">Pop</div>`,
    isNew: false,
  },
  {
    id: 'wave-motion',
    name: 'Wave Motion',
    category: 'motion',
    tags: ['motion', 'wave', 'animated'],
    difficulty: 'intermediate',
    description: 'Sine wave motion animation',
    cssCode: `.wave-dots {
  display: flex;
  gap: 6px;
  align-items: center;
}
.wave-dot {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: wave-up 1.2s ease-in-out infinite;
}
.wave-dot:nth-child(1) { animation-delay: 0s; }
.wave-dot:nth-child(2) { animation-delay: 0.1s; }
.wave-dot:nth-child(3) { animation-delay: 0.2s; }
.wave-dot:nth-child(4) { animation-delay: 0.3s; }
.wave-dot:nth-child(5) { animation-delay: 0.4s; }
@keyframes wave-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`,
    htmlCode: `<div class="wave-dots"><div class="wave-dot"></div><div class="wave-dot"></div><div class="wave-dot"></div><div class="wave-dot"></div><div class="wave-dot"></div></div>`,
    isNew: false,
  },
  {
    id: 'swing-effect',
    name: 'Swing Effect',
    category: 'motion',
    tags: ['motion', 'swing', 'rotate'],
    difficulty: 'beginner',
    description: 'Swinging rotation animation',
    cssCode: `.swing-box {
  width: 50px;
  height: 50px;
  background: #10b981;
  border-radius: 8px;
  animation: swing-rot 1.5s ease-in-out infinite;
  transform-origin: top center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
}
@keyframes swing-rot {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
}`,
    htmlCode: `<div class="swing-box">↔</div>`,
    isNew: true,
  },

  // ===== GAME UI =====
  {
    id: 'health-bar',
    name: 'Health Bar',
    category: 'game-ui',
    tags: ['game', 'health', 'bar'],
    difficulty: 'beginner',
    description: 'Game-style health bar',
    cssCode: `.health-bar {
  width: 160px;
  height: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  position: relative;
}
.health-fill {
  width: 65%;
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981);
  border-radius: 8px;
  position: relative;
}
.health-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: rgba(255,255,255,0.2);
  border-radius: 8px 8px 0 0;
}
.health-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}`,
    htmlCode: `<div class="health-bar"><div class="health-fill"></div><div class="health-text">65/100</div></div>`,
    isNew: true,
  },
  {
    id: 'pixel-border',
    name: 'Pixel Border',
    category: 'game-ui',
    tags: ['game', 'pixel', 'retro'],
    difficulty: 'intermediate',
    description: 'Retro pixel-art style border',
    cssCode: `.pixel-border {
  padding: 12px 20px;
  background: #1a1a2e;
  color: #10b981;
  font-family: monospace;
  font-size: 0.9rem;
  font-weight: 700;
  border: 4px solid #10b981;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12'%3E%3Crect x='0' y='0' width='4' height='4' fill='%2310b981'/%3E%3Crect x='8' y='0' width='4' height='4' fill='%2310b981'/%3E%3Crect x='4' y='4' width='4' height='4' fill='%2310b981'/%3E%3Crect x='0' y='8' width='4' height='4' fill='%2310b981'/%3E%3Crect x='8' y='8' width='4' height='4' fill='%2310b981'/%3E%3C/svg%3E") 4;
}`,
    htmlCode: `<div class="pixel-border">PRESS START</div>`,
    isNew: true,
  },
  {
    id: 'xp-bar',
    name: 'XP Progress Bar',
    category: 'game-ui',
    tags: ['game', 'xp', 'progress'],
    difficulty: 'intermediate',
    description: 'Game experience point progress bar',
    cssCode: `.xp-bar {
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.xp-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: #64748b;
}
.xp-track {
  height: 8px;
  background: #1a1a2e;
  border-radius: 4px;
  overflow: hidden;
}
.xp-fill {
  width: 72%;
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #a78bfa);
  border-radius: 4px;
  animation: xp-glow 2s ease infinite;
}
@keyframes xp-glow {
  0%, 100% { box-shadow: 0 0 4px #8b5cf644; }
  50% { box-shadow: 0 0 8px #8b5cf688; }
}`,
    htmlCode: `<div class="xp-bar"><div class="xp-label"><span>Level 12</span><span>720/1000 XP</span></div><div class="xp-track"><div class="xp-fill"></div></div></div>`,
    isNew: false,
  },
  {
    id: 'achievement-popup',
    name: 'Achievement Popup',
    category: 'game-ui',
    tags: ['game', 'achievement', 'popup'],
    difficulty: 'intermediate',
    description: 'Game achievement unlocked popup',
    cssCode: `.achievement {
  padding: 10px 16px;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  border: 1px solid #f59e0b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: achieve-pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 0 20px #f59e0b33;
}
.achieve-icon {
  font-size: 1.5rem;
}
.achieve-text {
  display: flex;
  flex-direction: column;
}
.achieve-title {
  font-size: 0.7rem;
  color: #f59e0b;
  font-weight: 700;
  text-transform: uppercase;
}
.achieve-desc {
  font-size: 0.75rem;
  color: #e2e8f0;
}
@keyframes achieve-pop {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="achievement"><div class="achieve-icon">🏆</div><div class="achieve-text"><div class="achieve-title">Achievement Unlocked!</div><div class="achieve-desc">First CSS Effect</div></div></div>`,
    isNew: true,
  },
  {
    id: 'coin-spin',
    name: 'Coin Spin',
    category: 'game-ui',
    tags: ['game', 'coin', 'spin', '3d'],
    difficulty: 'advanced',
    description: '3D spinning coin animation',
    cssCode: `.coin {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  animation: coin-3d-spin 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(245,158,11,0.3);
  border: 3px solid #d97706;
}
@keyframes coin-3d-spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}`,
    htmlCode: `<div class="coin">$</div>`,
    isNew: false,
  },

  // ===== EASTER EGGS =====
  {
    id: 'confetti',
    name: 'Confetti Burst',
    category: 'easter',
    tags: ['confetti', 'celebration', 'animated'],
    difficulty: 'advanced',
    description: 'Colorful confetti burst animation',
    cssCode: `.confetti-box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #0a0a1a;
}
.confetti-piece {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  animation: confetti-fall 2s ease-in infinite;
}
.confetti-piece:nth-child(1) { left: 10%; background: #ef4444; animation-delay: 0s; animation-duration: 1.8s; }
.confetti-piece:nth-child(2) { left: 30%; background: #3b82f6; animation-delay: 0.2s; animation-duration: 2.2s; width: 6px; }
.confetti-piece:nth-child(3) { left: 50%; background: #10b981; animation-delay: 0.4s; animation-duration: 2s; }
.confetti-piece:nth-child(4) { left: 70%; background: #f59e0b; animation-delay: 0.1s; animation-duration: 1.6s; width: 6px; }
.confetti-piece:nth-child(5) { left: 85%; background: #8b5cf6; animation-delay: 0.3s; animation-duration: 2.4s; }
@keyframes confetti-fall {
  0% { top: -10px; transform: rotate(0deg); opacity: 1; }
  100% { top: 100%; transform: rotate(720deg); opacity: 0; }
}`,
    htmlCode: `<div class="confetti-box"><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div></div>`,
    isNew: true,
  },
  {
    id: 'matrix-rain',
    name: 'Matrix Rain',
    category: 'easter',
    tags: ['matrix', 'rain', 'animated'],
    difficulty: 'advanced',
    description: 'Matrix-style falling text effect',
    cssCode: `.matrix-box {
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  font-family: monospace;
}
.matrix-col {
  position: absolute;
  top: -100%;
  color: #10b981;
  font-size: 10px;
  line-height: 1;
  animation: matrix-fall 4s linear infinite;
  text-shadow: 0 0 5px #10b981;
}
.matrix-col:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 3s; }
.matrix-col:nth-child(2) { left: 30%; animation-delay: 1s; animation-duration: 4s; }
.matrix-col:nth-child(3) { left: 60%; animation-delay: 0.5s; animation-duration: 3.5s; }
.matrix-col:nth-child(4) { left: 85%; animation-delay: 1.5s; animation-duration: 2.8s; }
@keyframes matrix-fall {
  0% { top: -100%; }
  100% { top: 100%; }
}`,
    htmlCode: `<div class="matrix-box"><div class="matrix-col">0<br>1<br>0<br>1<br>1<br>0<br>1<br>0</div><div class="matrix-col">1<br>0<br>1<br>0<br>0<br>1<br>0<br>1</div><div class="matrix-col">0<br>1<br>1<br>0<br>1<br>0<br>0<br>1</div><div class="matrix-col">1<br>0<br>0<br>1<br>0<br>1<br>1<br>0</div></div>`,
    isNew: false,
  },
  {
    id: 'glitch-fun',
    name: 'Glitch Effect',
    category: 'easter',
    tags: ['glitch', 'animated', 'text'],
    difficulty: 'intermediate',
    description: 'Digital glitch text effect',
    cssCode: `.glitch {
  font-size: 2rem;
  font-weight: 900;
  color: #e2e8f0;
  position: relative;
}
.glitch::before, .glitch::after {
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.glitch::before {
  color: #ef4444;
  animation: glitch-1 0.3s infinite;
  clip-path: inset(0 0 70% 0);
}
.glitch::after {
  color: #3b82f6;
  animation: glitch-2 0.3s infinite;
  clip-path: inset(70% 0 0 0);
}
@keyframes glitch-1 {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(3px, -3px); }
  60% { transform: translate(-2px, 1px); }
  80% { transform: translate(2px, -1px); }
  100% { transform: translate(0); }
}
@keyframes glitch-2 {
  0% { transform: translate(0); }
  20% { transform: translate(3px, -3px); }
  40% { transform: translate(-3px, 3px); }
  60% { transform: translate(2px, -1px); }
  80% { transform: translate(-2px, 1px); }
  100% { transform: translate(0); }
}`,
    htmlCode: `<div class="glitch">GLITCH</div>`,
    isNew: false,
  },
  {
    id: 'secret-portal',
    name: 'Portal Effect',
    category: 'easter',
    tags: ['portal', 'animated', 'swirl'],
    difficulty: 'advanced',
    description: 'Swirling portal animation effect',
    cssCode: `.portal {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #8b5cf6, #3b82f6, #10b981, #8b5cf6);
  animation: portal-spin 2s linear infinite;
  position: relative;
  box-shadow: 0 0 30px #8b5cf666;
}
.portal::after {
  content: '';
  position: absolute;
  inset: 15px;
  border-radius: 50%;
  background: #0a0a1a;
}
@keyframes portal-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="portal"></div>`,
    isNew: true,
  },
  {
    id: 'retro-scan',
    name: 'Retro Scan Line',
    category: 'easter',
    tags: ['retro', 'scan', 'animated'],
    difficulty: 'intermediate',
    description: 'CRT scan line retro effect',
    cssCode: `.retro-scan {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.scan-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #10b98144;
  animation: scan-move 3s linear infinite;
  box-shadow: 0 0 10px #10b98144;
}
.retro-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #10b981;
  font-family: monospace;
  font-size: 0.7rem;
}
@keyframes scan-move {
  0% { top: 0; }
  100% { top: 100%; }
}`,
    htmlCode: `<div class="retro-scan"><div class="scan-line"></div><div class="retro-text">SYSTEM READY_</div></div>`,
    isNew: false,
  },
  // ===== SCROLL ANIMATIONS =====
  {
    id: 'scroll-fade-in',
    name: 'Scroll Fade In',
    category: 'scroll',
    tags: ['scroll', 'fade', 'animation'],
    difficulty: 'beginner',
    description: 'Elements fade in as they scroll into view using animation-timeline',
    cssCode: `.scroll-fade {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up 1s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
  background: #1a1a2e;
  padding: 16px 24px;
  border-radius: 8px;
  color: #10b981;
  font-weight: 600;
  text-align: center;
}
@keyframes fade-in-up {
  to { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="scroll-fade">Fade In on Scroll</div>`,
    isNew: true,
  },
  {
    id: 'scroll-slide-left',
    name: 'Scroll Slide Left',
    category: 'scroll',
    tags: ['scroll', 'slide', 'animation'],
    difficulty: 'beginner',
    description: 'Content slides in from the left on scroll',
    cssCode: `.slide-left {
  transform: translateX(-100%);
  animation: slide-from-left 0.8s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 80%;
  background: #1a1a2e;
  padding: 16px 24px;
  border-radius: 8px;
  color: #10b981;
  font-weight: 600;
  border-left: 3px solid #10b981;
}
@keyframes slide-from-left {
  to { transform: translateX(0); }
}`,
    htmlCode: `<div class="slide-left">Slide from Left</div>`,
    isNew: true,
  },
  {
    id: 'scroll-scale-up',
    name: 'Scroll Scale Up',
    category: 'scroll',
    tags: ['scroll', 'scale', 'animation'],
    difficulty: 'beginner',
    description: 'Elements scale up from small as they enter the viewport',
    cssCode: `.scroll-scale {
  transform: scale(0.5);
  opacity: 0;
  animation: scale-up 1s ease forwards;
  animation-timeline: view();
  animation-range: entry 10% entry 90%;
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  color: #10b981;
  font-weight: 700;
  text-align: center;
  border: 1px solid #10b98133;
}
@keyframes scale-up {
  to { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="scroll-scale">Scale on Scroll</div>`,
    isNew: true,
  },
  {
    id: 'scroll-reveal-clip',
    name: 'Scroll Reveal Clip',
    category: 'scroll',
    tags: ['scroll', 'clip', 'reveal'],
    difficulty: 'intermediate',
    description: 'Content revealed with a clip-path animation on scroll',
    cssCode: `.scroll-clip {
  clip-path: inset(0 100% 0 0);
  animation: clip-reveal 1s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 80%;
  background: linear-gradient(135deg, #10b981, #059669);
  padding: 16px 24px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}
@keyframes clip-reveal {
  to { clip-path: inset(0 0% 0 0); }
}`,
    htmlCode: `<div class="scroll-clip">Clip Reveal</div>`,
    isNew: true,
  },
  {
    id: 'scroll-parallax-layer',
    name: 'Parallax Layer',
    category: 'scroll',
    tags: ['scroll', 'parallax', 'layer'],
    difficulty: 'intermediate',
    description: 'Parallax effect with multiple depth layers',
    cssCode: `.parallax-wrap {
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #0a0a1a;
}
.parallax-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 40%, #10b98122, transparent 60%),
              radial-gradient(circle at 70% 60%, #3b82f622, transparent 60%);
  animation: para-bg 3s ease-in-out infinite alternate;
}
.parallax-fg {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #10b981;
  font-weight: 700;
  font-size: 1.1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
@keyframes para-bg {
  0% { transform: scale(1) translate(0,0); }
  100% { transform: scale(1.1) translate(10px,-5px); }
}`,
    htmlCode: `<div class="parallax-wrap"><div class="parallax-bg"></div><div class="parallax-fg">Parallax</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-sticky-header',
    name: 'Sticky Scroll Header',
    category: 'scroll',
    tags: ['scroll', 'sticky', 'header'],
    difficulty: 'intermediate',
    description: 'Header that sticks and transforms as you scroll',
    cssCode: `.sticky-hdr {
  position: sticky;
  top: 0;
  background: #0f0f1a;
  padding: 12px 20px;
  border-bottom: 2px solid #10b981;
  color: #10b981;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);
  z-index: 10;
}
.sticky-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: sticky-pulse 2s infinite;
}
@keyframes sticky-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}`,
    htmlCode: `<div class="sticky-hdr"><div class="sticky-dot"></div>Sticky Header</div>`,
    isNew: true,
  },
  {
    id: 'scroll-horizontal',
    name: 'Horizontal Scroll Section',
    category: 'scroll',
    tags: ['scroll', 'horizontal', 'layout'],
    difficulty: 'advanced',
    description: 'Horizontal scrolling section triggered by vertical scroll',
    cssCode: `.h-scroll-wrap {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 8px;
  scrollbar-width: none;
}
.h-scroll-wrap::-webkit-scrollbar { display: none; }
.h-scroll-card {
  min-width: 120px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 10px;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  font-size: 0.85rem;
  border: 1px solid #2a2a3e;
  flex-shrink: 0;
}`,
    htmlCode: `<div class="h-scroll-wrap"><div class="h-scroll-card">Card 1</div><div class="h-scroll-card">Card 2</div><div class="h-scroll-card">Card 3</div><div class="h-scroll-card">Card 4</div><div class="h-scroll-card">Card 5</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-progress-indicator',
    name: 'Scroll Progress Bar',
    category: 'scroll',
    tags: ['scroll', 'progress', 'indicator'],
    difficulty: 'intermediate',
    description: 'A progress bar that fills as the page is scrolled',
    cssCode: `.scroll-progress {
  width: 100%;
  height: 4px;
  background: #1a1a2e;
  border-radius: 2px;
  overflow: hidden;
}
.scroll-progress-fill {
  height: 100%;
  width: 65%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 2px;
  animation: progress-pulse 2s ease-in-out infinite;
}
@keyframes progress-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}`,
    htmlCode: `<div class="scroll-progress"><div class="scroll-progress-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-stagger-list',
    name: 'Staggered Scroll List',
    category: 'scroll',
    tags: ['scroll', 'stagger', 'list'],
    difficulty: 'intermediate',
    description: 'List items animate in with staggered delays on scroll',
    cssCode: `.stagger-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.stagger-item {
  padding: 8px 14px;
  background: #1a1a2e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.8rem;
  border-left: 3px solid #10b981;
  animation: stagger-in 0.5s ease forwards;
  opacity: 0;
  transform: translateX(-10px);
}
.stagger-item:nth-child(1) { animation-delay: 0.1s; }
.stagger-item:nth-child(2) { animation-delay: 0.2s; }
.stagger-item:nth-child(3) { animation-delay: 0.3s; }
.stagger-item:nth-child(4) { animation-delay: 0.4s; }
@keyframes stagger-in {
  to { opacity: 1; transform: translateX(0); }
}`,
    htmlCode: `<div class="stagger-list"><div class="stagger-item">First item</div><div class="stagger-item">Second item</div><div class="stagger-item">Third item</div><div class="stagger-item">Fourth item</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-typewriter',
    name: 'Scroll Typewriter',
    category: 'scroll',
    tags: ['scroll', 'typewriter', 'text'],
    difficulty: 'advanced',
    description: 'Text types itself out as you scroll down the page',
    cssCode: `.scroll-type {
  font-family: monospace;
  font-size: 0.95rem;
  color: #10b981;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #10b981;
  animation: s-type 3s steps(25) forwards, blink-c 0.75s step-end infinite;
  width: 0;
}
@keyframes s-type {
  50% { width: 100%; }
  90% { width: 100%; }
  100% { width: 100%; border-right-color: transparent; }
}
@keyframes blink-c {
  50% { border-color: transparent; }
}`,
    htmlCode: `<div class="scroll-type">Typing on scroll...</div>`,
    isNew: true,
  },
  {
    id: 'scroll-zoom-out',
    name: 'Scroll Zoom Out',
    category: 'scroll',
    tags: ['scroll', 'zoom', 'scale'],
    difficulty: 'intermediate',
    description: 'Element zooms out from large to normal size on scroll',
    cssCode: `.scroll-zoom {
  transform: scale(2);
  opacity: 0;
  animation: zoom-out-scroll 1s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 70%;
  background: #1a1a2e;
  padding: 16px 20px;
  border-radius: 8px;
  color: #10b981;
  font-weight: 700;
  text-align: center;
}
@keyframes zoom-out-scroll {
  to { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="scroll-zoom">Zoom Out</div>`,
    isNew: true,
  },
  {
    id: 'scroll-color-change',
    name: 'Scroll Color Shift',
    category: 'scroll',
    tags: ['scroll', 'color', 'animated'],
    difficulty: 'intermediate',
    description: 'Background color transitions as you scroll',
    cssCode: `.scroll-color {
  padding: 20px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 300% 300%;
  animation: scroll-color-shift 4s ease infinite;
}
@keyframes scroll-color-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="scroll-color">Color on Scroll</div>`,
    isNew: true,
  },
  {
    id: 'scroll-blur-in',
    name: 'Scroll Blur In',
    category: 'scroll',
    tags: ['scroll', 'blur', 'fade'],
    difficulty: 'beginner',
    description: 'Elements unblur as they scroll into view',
    cssCode: `.scroll-blur {
  filter: blur(10px);
  opacity: 0;
  animation: blur-in 0.8s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 80%;
  background: #1a1a2e;
  padding: 16px 20px;
  border-radius: 8px;
  color: #10b981;
  font-weight: 600;
  text-align: center;
}
@keyframes blur-in {
  to { filter: blur(0); opacity: 1; }
}`,
    htmlCode: `<div class="scroll-blur">Blur In</div>`,
    isNew: true,
  },
  {
    id: 'scroll-flip-card',
    name: 'Scroll Flip Card',
    category: 'scroll',
    tags: ['scroll', 'flip', 'card', '3d'],
    difficulty: 'advanced',
    description: 'Card flips to reveal content as it enters the viewport',
    cssCode: `.scroll-flip {
  perspective: 600px;
  height: 80px;
}
.scroll-flip-inner {
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #10b98133;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 700;
  animation: flip-in 0.8s ease forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 80%;
  transform: rotateY(90deg);
}
@keyframes flip-in {
  to { transform: rotateY(0deg); }
}`,
    htmlCode: `<div class="scroll-flip"><div class="scroll-flip-inner">Flipped!</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-counter',
    name: 'Scroll Counter',
    category: 'scroll',
    tags: ['scroll', 'counter', 'number'],
    difficulty: 'intermediate',
    description: 'Animated counter that increments on scroll using CSS counters',
    cssCode: `.scroll-counter-wrap {
  counter-reset: scroll-count;
  display: flex;
  gap: 8px;
}
.scroll-counter-item {
  counter-increment: scroll-count;
  background: #1a1a2e;
  padding: 8px 16px;
  border-radius: 6px;
  color: #10b981;
  font-weight: 700;
  border: 1px solid #10b98133;
}
.scroll-counter-item::after {
  content: counter(scroll-count);
}`,
    htmlCode: `<div class="scroll-counter-wrap"><div class="scroll-counter-item">Step </div><div class="scroll-counter-item">Step </div><div class="scroll-counter-item">Step </div></div>`,
    isNew: true,
  },

  // ===== LAYOUT PATTERNS =====
  {
    id: 'layout-holy-grail',
    name: 'Holy Grail Layout',
    category: 'layout',
    tags: ['layout', 'grid', 'responsive'],
    difficulty: 'intermediate',
    description: 'Classic holy grail layout with CSS Grid',
    cssCode: `.holy-grail {
  display: grid;
  grid-template-areas: "header header" "sidebar main" "footer footer";
  grid-template-columns: 60px 1fr;
  grid-template-rows: 30px 1fr 24px;
  gap: 4px;
  height: 120px;
  font-size: 0.7rem;
}
.hg-header { grid-area: header; background: #10b98133; border-radius: 4px; display:flex;align-items:center;justify-content:center;color:#10b981; }
.hg-sidebar { grid-area: sidebar; background: #1a1a2e; border-radius: 4px; display:flex;align-items:center;justify-content:center;color:#94a3b8; }
.hg-main { grid-area: main; background: #0f0f1a; border-radius: 4px; display:flex;align-items:center;justify-content:center;color:#e2e8f0; border:1px solid #2a2a3e; }
.hg-footer { grid-area: footer; background: #10b98122; border-radius: 4px; display:flex;align-items:center;justify-content:center;color:#10b981; }`,
    htmlCode: `<div class="holy-grail"><div class="hg-header">Header</div><div class="hg-sidebar">Nav</div><div class="hg-main">Content</div><div class="hg-footer">Footer</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-masonry',
    name: 'CSS Masonry',
    category: 'layout',
    tags: ['layout', 'masonry', 'grid'],
    difficulty: 'advanced',
    description: 'Masonry-like layout using CSS columns',
    cssCode: `.masonry {
  column-count: 2;
  column-gap: 8px;
}
.masonry-item {
  break-inside: avoid;
  background: #1a1a2e;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 12px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #2a2a3e;
}
.masonry-item:nth-child(2) { height: 60px; }
.masonry-item:nth-child(3) { height: 40px; }`,
    htmlCode: `<div class="masonry"><div class="masonry-item">Block A</div><div class="masonry-item">Block B</div><div class="masonry-item">Block C</div><div class="masonry-item">Block D</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-sidebar',
    name: 'Collapsible Sidebar',
    category: 'layout',
    tags: ['layout', 'sidebar', 'responsive'],
    difficulty: 'intermediate',
    description: 'Sidebar layout that collapses on smaller screens',
    cssCode: `.sidebar-layout {
  display: flex;
  height: 100px;
  gap: 4px;
}
.sidebar-nav {
  width: 50px;
  background: #1a1a2e;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 4px;
}
.sidebar-dot {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: #2a2a3e;
}
.sidebar-dot.active { background: #10b981; }
.sidebar-content {
  flex: 1;
  background: #0f0f1a;
  border-radius: 6px;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.8rem;
}`,
    htmlCode: `<div class="sidebar-layout"><div class="sidebar-nav"><div class="sidebar-dot active"></div><div class="sidebar-dot"></div><div class="sidebar-dot"></div><div class="sidebar-dot"></div></div><div class="sidebar-content">Main Content</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-center',
    name: 'Perfect Centering',
    category: 'layout',
    tags: ['layout', 'center', 'flexbox'],
    difficulty: 'beginner',
    description: 'The holy grail of CSS: perfect centering',
    cssCode: `.perfect-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #0f0f1a;
  border-radius: 8px;
  border: 1px dashed #10b98144;
}
.center-box {
  background: #10b98122;
  border: 1px solid #10b981;
  border-radius: 8px;
  padding: 12px 20px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
}`,
    htmlCode: `<div class="perfect-center"><div class="center-box">Centered!</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-grid-auto',
    name: 'Auto-Fit Grid',
    category: 'layout',
    tags: ['layout', 'grid', 'responsive'],
    difficulty: 'intermediate',
    description: 'Grid that automatically adjusts columns based on available space',
    cssCode: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 6px;
}
.auto-grid-item {
  background: #1a1a2e;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #2a2a3e;
}`,
    htmlCode: `<div class="auto-grid"><div class="auto-grid-item">1</div><div class="auto-grid-item">2</div><div class="auto-grid-item">3</div><div class="auto-grid-item">4</div><div class="auto-grid-item">5</div><div class="auto-grid-item">6</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-split',
    name: 'Split Screen',
    category: 'layout',
    tags: ['layout', 'split', 'responsive'],
    difficulty: 'beginner',
    description: 'Two-column split screen layout',
    cssCode: `.split-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80px;
  gap: 4px;
}
.split-left {
  background: #10b98122;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 600;
  font-size: 0.8rem;
}
.split-right {
  background: #1a1a2e;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.8rem;
}`,
    htmlCode: `<div class="split-screen"><div class="split-left">Left</div><div class="split-right">Right</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-overlap',
    name: 'Overlapping Cards',
    category: 'layout',
    tags: ['layout', 'overlap', 'z-index'],
    difficulty: 'intermediate',
    description: 'Cards that overlap each other for a layered effect',
    cssCode: `.overlap-wrap {
  position: relative;
  height: 80px;
}
.overlap-card {
  position: absolute;
  width: 100px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.75rem;
  transition: transform 0.3s;
}
.overlap-card:nth-child(1) { background: #10b98144; color: #10b981; left: 0; top: 0; z-index: 1; }
.overlap-card:nth-child(2) { background: #3b82f644; color: #3b82f6; left: 40px; top: 10px; z-index: 2; }
.overlap-card:nth-child(3) { background: #8b5cf644; color: #8b5cf6; left: 80px; top: 20px; z-index: 3; }
.overlap-card:hover { transform: translateY(-5px); z-index: 10; }`,
    htmlCode: `<div class="overlap-wrap"><div class="overlap-card">Card 1</div><div class="overlap-card">Card 2</div><div class="overlap-card">Card 3</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-media',
    name: 'Media Object',
    category: 'layout',
    tags: ['layout', 'media', 'flexbox'],
    difficulty: 'beginner',
    description: 'Classic media object pattern with image and text',
    cssCode: `.media-obj {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1a1a2e;
  padding: 12px;
  border-radius: 8px;
}
.media-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  flex-shrink: 0;
}
.media-body { color: #e2e8f0; font-size: 0.8rem; }
.media-title { font-weight: 700; color: #10b981; font-size: 0.85rem; margin-bottom: 2px; }`,
    htmlCode: `<div class="media-obj"><div class="media-img"></div><div class="media-body"><div class="media-title">Name</div><div>Description text</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-dashboard',
    name: 'Dashboard Grid',
    category: 'layout',
    tags: ['layout', 'dashboard', 'grid'],
    difficulty: 'advanced',
    description: 'Dashboard layout with mixed-size grid areas',
    cssCode: `.dash-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 4px;
  font-size: 0.7rem;
}
.dash-item {
  background: #1a1a2e;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  color: #94a3b8;
  border: 1px solid #2a2a3e;
}
.dash-item.wide {
  grid-column: span 2;
  color: #10b981;
  border-color: #10b98133;
}`,
    htmlCode: `<div class="dash-grid"><div class="dash-item wide">Wide Widget</div><div class="dash-item">Stat</div><div class="dash-item">A</div><div class="dash-item">B</div><div class="dash-item wide">Chart Area</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-sticky-footer',
    name: 'Sticky Footer Layout',
    category: 'layout',
    tags: ['layout', 'footer', 'sticky'],
    difficulty: 'beginner',
    description: 'Footer that always sticks to the bottom of the container',
    cssCode: `.sticky-foot-wrap {
  display: flex;
  flex-direction: column;
  min-height: 120px;
  border-radius: 8px;
  overflow: hidden;
}
.sticky-foot-main { flex: 1; background: #0f0f1a; padding: 12px; color: #94a3b8; font-size: 0.8rem; }
.sticky-foot-foot { background: #10b98122; padding: 8px 12px; color: #10b981; font-size: 0.7rem; font-weight: 600; border-top: 1px solid #10b98133; }`,
    htmlCode: `<div class="sticky-foot-wrap"><div class="sticky-foot-main">Content area</div><div class="sticky-foot-foot">Sticky Footer</div></div>`,
    isNew: true,
  },

  // ===== DECORATIVE ELEMENTS =====
  {
    id: 'deco-ribbon',
    name: 'CSS Ribbon',
    category: 'decorative',
    tags: ['decorative', 'ribbon', 'badge'],
    difficulty: 'intermediate',
    description: 'Decorative ribbon banner using pure CSS',
    cssCode: `.ribbon-wrap {
  position: relative;
  width: 140px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
}
.ribbon {
  position: absolute;
  top: 12px;
  right: -30px;
  background: #10b981;
  color: white;
  padding: 4px 36px;
  font-size: 0.65rem;
  font-weight: 700;
  transform: rotate(45deg);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
    htmlCode: `<div class="ribbon-wrap"><div class="ribbon">New</div></div>`,
    isNew: true,
  },
  {
    id: 'deco-divider',
    name: 'Ornamental Divider',
    category: 'decorative',
    tags: ['decorative', 'divider', 'ornament'],
    difficulty: 'beginner',
    description: 'Decorative section divider with diamond ornament',
    cssCode: `.ornament-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 10px;
}
.ornament-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #10b98144, transparent); }
.ornament-diamond { width: 8px; height: 8px; background: #10b981; transform: rotate(45deg); flex-shrink: 0; }`,
    htmlCode: `<div class="ornament-divider"><div class="ornament-line"></div><div class="ornament-diamond"></div><div class="ornament-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'deco-corner',
    name: 'Corner Decoration',
    category: 'decorative',
    tags: ['decorative', 'corner', 'frame'],
    difficulty: 'intermediate',
    description: 'Decorative corner frames using CSS borders',
    cssCode: `.corner-frame {
  position: relative;
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 600;
}
.corner-frame::before, .corner-frame::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: #10b981;
  border-style: solid;
}
.corner-frame::before { top: 0; left: 0; border-width: 2px 0 0 2px; }
.corner-frame::after { bottom: 0; right: 0; border-width: 0 2px 2px 0; }`,
    htmlCode: `<div class="corner-frame">Framed</div>`,
    isNew: true,
  },
  {
    id: 'deco-star',
    name: 'CSS Star',
    category: 'decorative',
    tags: ['decorative', 'star', 'shape'],
    difficulty: 'intermediate',
    description: 'Star shape created with pure CSS',
    cssCode: `.css-star {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  border-right: 30px solid transparent;
  border-bottom: 20px solid #10b981;
  border-left: 30px solid transparent;
  transform: rotate(35deg);
}
.css-star::before {
  content: '';
  position: absolute;
  top: -14px;
  left: -18px;
  border-right: 12px solid transparent;
  border-bottom: 22px solid #10b981;
  border-left: 12px solid transparent;
  transform: rotate(-35deg);
}
.css-star::after {
  content: '';
  position: absolute;
  top: 2px;
  left: -30px;
  border-right: 30px solid transparent;
  border-bottom: 20px solid #10b981;
  border-left: 30px solid transparent;
  transform: rotate(-70deg);
}`,
    htmlCode: `<div class="css-star"></div>`,
    isNew: true,
  },
  {
    id: 'deco-wave',
    name: 'Wave Separator',
    category: 'decorative',
    tags: ['decorative', 'wave', 'separator'],
    difficulty: 'beginner',
    description: 'Wavy line separator using CSS',
    cssCode: `.wave-sep {
  height: 20px;
  width: 100%;
  background: linear-gradient(135deg, #10b98133 25%, transparent 25%) -10px 0,
              linear-gradient(225deg, #10b98133 25%, transparent 25%) -10px 0,
              linear-gradient(315deg, #10b98133 25%, transparent 25%),
              linear-gradient(45deg, #10b98133 25%, transparent 25%);
  background-size: 20px 20px;
  border-radius: 4px;
}`,
    htmlCode: `<div class="wave-sep"></div>`,
    isNew: true,
  },
  {
    id: 'deco-dots',
    name: 'Dot Matrix',
    category: 'decorative',
    tags: ['decorative', 'dots', 'pattern'],
    difficulty: 'beginner',
    description: 'Decorative dot matrix pattern',
    cssCode: `.dot-matrix {
  width: 100%;
  height: 80px;
  background-image: radial-gradient(#10b981 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  border-radius: 8px;
  opacity: 0.6;
}`,
    htmlCode: `<div class="dot-matrix"></div>`,
    isNew: true,
  },
  {
    id: 'deco-sparkle',
    name: 'Sparkle Animation',
    category: 'decorative',
    tags: ['decorative', 'sparkle', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated sparkle/glitter effect',
    cssCode: `.sparkle-wrap {
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: sparkle-anim 1.5s ease-in-out infinite;
}
.sparkle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.sparkle:nth-child(2) { top: 40%; left: 60%; animation-delay: 0.3s; }
.sparkle:nth-child(3) { top: 60%; left: 30%; animation-delay: 0.6s; }
.sparkle:nth-child(4) { top: 30%; left: 75%; animation-delay: 0.9s; }
.sparkle:nth-child(5) { top: 70%; left: 55%; animation-delay: 1.2s; }
@keyframes sparkle-anim {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1.5); }
}`,
    htmlCode: `<div class="sparkle-wrap"><div class="sparkle"></div><div class="sparkle"></div><div class="sparkle"></div><div class="sparkle"></div><div class="sparkle"></div></div>`,
    isNew: true,
  },
  {
    id: 'deco-heart',
    name: 'CSS Heart',
    category: 'decorative',
    tags: ['decorative', 'heart', 'shape'],
    difficulty: 'intermediate',
    description: 'Heart shape created with pure CSS',
    cssCode: `.css-heart {
  position: relative;
  width: 50px;
  height: 45px;
  animation: heart-beat 1.2s ease-in-out infinite;
}
.css-heart::before, .css-heart::after {
  content: '';
  position: absolute;
  top: 0;
  width: 25px;
  height: 40px;
  border-radius: 25px 25px 0 0;
  background: #10b981;
}
.css-heart::before { left: 25px; transform: rotate(-45deg); transform-origin: 0 100%; }
.css-heart::after { left: 0; transform: rotate(45deg); transform-origin: 100% 100%; }
@keyframes heart-beat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.15); }
  30% { transform: scale(1); }
  45% { transform: scale(1.1); }
}`,
    htmlCode: `<div class="css-heart"></div>`,
    isNew: true,
  },
  {
    id: 'deco-arrows',
    name: 'Animated Arrows',
    category: 'decorative',
    tags: ['decorative', 'arrows', 'animated'],
    difficulty: 'beginner',
    description: 'Animated bouncing arrow indicators',
    cssCode: `.bounce-arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.bounce-arrow {
  width: 16px;
  height: 16px;
  border-right: 2px solid #10b981;
  border-bottom: 2px solid #10b981;
  transform: rotate(45deg);
  animation: arrow-bounce 1.5s ease-in-out infinite;
  opacity: 0.4;
}
.bounce-arrow:nth-child(2) { animation-delay: 0.2s; opacity: 0.7; }
.bounce-arrow:nth-child(3) { animation-delay: 0.4s; opacity: 1; }
@keyframes arrow-bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(4px); }
}`,
    htmlCode: `<div class="bounce-arrows"><div class="bounce-arrow"></div><div class="bounce-arrow"></div><div class="bounce-arrow"></div></div>`,
    isNew: true,
  },
  {
    id: 'deco-cross',
    name: 'Rotating Cross',
    category: 'decorative',
    tags: ['decorative', 'cross', 'animated'],
    difficulty: 'beginner',
    description: 'Decorative rotating cross pattern',
    cssCode: `.rotating-cross {
  width: 30px;
  height: 30px;
  position: relative;
  animation: cross-rotate 4s linear infinite;
}
.rotating-cross::before, .rotating-cross::after {
  content: '';
  position: absolute;
  background: #10b981;
  border-radius: 2px;
}
.rotating-cross::before { width: 100%; height: 4px; top: 50%; transform: translateY(-50%); }
.rotating-cross::after { height: 100%; width: 4px; left: 50%; transform: translateX(-50%); }
@keyframes cross-rotate { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="rotating-cross"></div>`,
    isNew: true,
  },

  // ===== ACCORDIONS =====
  {
    id: 'acc-simple',
    name: 'Simple Accordion',
    category: 'accordions',
    tags: ['accordion', 'expand', 'collapse'],
    difficulty: 'beginner',
    description: 'Simple accordion with expandable sections',
    cssCode: `.simple-accordion {
  width: 200px;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.accordion-item { border-bottom: 1px solid #2a2a3e; }
.accordion-item:last-child { border-bottom: none; }
.accordion-header { padding: 10px 14px; color: #10b981; font-weight: 600; font-size: 0.8rem; cursor: pointer; }
.accordion-body { padding: 8px 14px; color: #94a3b8; font-size: 0.75rem; }`,
    htmlCode: `<div class="simple-accordion"><div class="accordion-item"><div class="accordion-header">Section 1 ▾</div><div class="accordion-body">Content here</div></div><div class="accordion-item"><div class="accordion-header">Section 2 ▾</div></div></div>`,
    isNew: true,
  },
  {
    id: 'acc-glow',
    name: 'Glow Accordion',
    category: 'accordions',
    tags: ['accordion', 'glow', 'animated'],
    difficulty: 'intermediate',
    description: 'Accordion with a glowing active state',
    cssCode: `.glow-accordion {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.glow-acc-item {
  background: #1a1a2e;
  border-radius: 8px;
  padding: 10px 14px;
  border: 1px solid #2a2a3e;
  transition: all 0.3s;
}
.glow-acc-item.active { border-color: #10b981; box-shadow: 0 0 10px #10b98133; }
.glow-acc-title { color: #e2e8f0; font-size: 0.8rem; font-weight: 600; }
.glow-acc-item.active .glow-acc-title { color: #10b981; }`,
    htmlCode: `<div class="glow-accordion"><div class="glow-acc-item active"><div class="glow-acc-title">Active Item</div></div><div class="glow-acc-item"><div class="glow-acc-title">Inactive Item</div></div></div>`,
    isNew: true,
  },
  {
    id: 'acc-slide',
    name: 'Slide Accordion',
    category: 'accordions',
    tags: ['accordion', 'slide', 'animated'],
    difficulty: 'intermediate',
    description: 'Accordion with slide-down content animation',
    cssCode: `.slide-accordion { width: 200px; display: flex; flex-direction: column; gap: 3px; }
.slide-acc-header {
  background: #1a1a2e;
  padding: 8px 12px;
  border-radius: 6px;
  color: #10b981;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  border-left: 3px solid #10b981;
  transition: background 0.2s;
}
.slide-acc-header:hover { background: #222244; }
.slide-acc-content {
  background: #0f0f1a;
  padding: 0 12px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  border-radius: 0 0 6px 6px;
  color: #94a3b8;
  font-size: 0.72rem;
}
.slide-acc-content.open { max-height: 60px; padding: 8px 12px; }`,
    htmlCode: `<div class="slide-accordion"><div class="slide-acc-header">Toggle Me</div><div class="slide-acc-content open">Hidden content revealed!</div></div>`,
    isNew: true,
  },
  {
    id: 'acc-tabs',
    name: 'Tab Accordion',
    category: 'accordions',
    tags: ['accordion', 'tabs', 'panel'],
    difficulty: 'intermediate',
    description: 'Accordion styled as vertical tabs',
    cssCode: `.tab-accordion { display: flex; width: 200px; height: 80px; border-radius: 8px; overflow: hidden; }
.tab-acc-nav { display: flex; flex-direction: column; gap: 2px; padding: 4px; background: #0f0f1a; }
.tab-acc-btn { padding: 6px 10px; background: #1a1a2e; border: none; border-radius: 4px; color: #94a3b8; font-size: 0.65rem; cursor: pointer; }
.tab-acc-btn.active { background: #10b981; color: white; }
.tab-acc-panel { flex: 1; background: #1a1a2e; padding: 12px; display: flex; align-items: center; justify-content: center; color: #e2e8f0; font-size: 0.75rem; }`,
    htmlCode: `<div class="tab-accordion"><div class="tab-acc-nav"><div class="tab-acc-btn active">Tab 1</div><div class="tab-acc-btn">Tab 2</div></div><div class="tab-acc-panel">Panel 1</div></div>`,
    isNew: true,
  },
  {
    id: 'acc-nested',
    name: 'Nested Accordion',
    category: 'accordions',
    tags: ['accordion', 'nested', 'tree'],
    difficulty: 'advanced',
    description: 'Multi-level nested accordion structure',
    cssCode: `.nested-acc { width: 200px; font-size: 0.75rem; }
.nested-l1 { background: #1a1a2e; border-radius: 6px; margin-bottom: 4px; overflow: hidden; }
.nested-l1-header { padding: 8px 12px; color: #10b981; font-weight: 600; background: #10b98111; }
.nested-l2 { padding: 6px 12px 6px 24px; color: #94a3b8; border-top: 1px solid #2a2a3e; }`,
    htmlCode: `<div class="nested-acc"><div class="nested-l1"><div class="nested-l1-header">Category ▾</div><div class="nested-l2">Item 1</div><div class="nested-l2">Item 2</div></div></div>`,
    isNew: true,
  },

  // ===== SOCIAL =====
  {
    id: 'social-share',
    name: 'Share Button',
    category: 'social',
    tags: ['social', 'share', 'button'],
    difficulty: 'beginner',
    description: 'Social share button with icon',
    cssCode: `.share-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.share-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px #10b98144; }
.share-icon { font-size: 1rem; }`,
    htmlCode: `<button class="share-btn"><span class="share-icon">↗</span> Share</button>`,
    isNew: true,
  },
  {
    id: 'social-follow',
    name: 'Follow Button',
    category: 'social',
    tags: ['social', 'follow', 'button'],
    difficulty: 'beginner',
    description: 'Animated follow/unfollow button',
    cssCode: `.follow-btn {
  padding: 8px 20px;
  border: 2px solid #10b981;
  background: transparent;
  color: #10b981;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.follow-btn:hover { background: #10b981; color: white; box-shadow: 0 0 15px #10b98144; }`,
    htmlCode: `<button class="follow-btn">Follow</button>`,
    isNew: true,
  },
  {
    id: 'social-like',
    name: 'Like Button',
    category: 'social',
    tags: ['social', 'like', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated like/heart button',
    cssCode: `.like-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 20px;
  color: #94a3b8;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;
}
.like-btn:hover { border-color: #ef4444; color: #ef4444; }
.like-heart { font-size: 1rem; transition: transform 0.3s; }
.like-btn:hover .like-heart { transform: scale(1.3); }`,
    htmlCode: `<button class="like-btn"><span class="like-heart">♥</span> 42</button>`,
    isNew: true,
  },
  {
    id: 'social-badge',
    name: 'Social Badge',
    category: 'social',
    tags: ['social', 'badge', 'count'],
    difficulty: 'beginner',
    description: 'Notification badge on social icon',
    cssCode: `.social-badge-wrap { position: relative; display: inline-flex; }
.social-icon-circle {
  width: 40px;
  height: 40px;
  background: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 1rem;
  border: 1px solid #2a2a3e;
}
.social-notif-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  background: #ef4444;
  border-radius: 50%;
  color: white;
  font-size: 0.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 2px solid #0a0a0a;
}`,
    htmlCode: `<div class="social-badge-wrap"><div class="social-icon-circle">🔔</div><div class="social-notif-dot">3</div></div>`,
    isNew: true,
  },
  {
    id: 'social-embed',
    name: 'Embed Card',
    category: 'social',
    tags: ['social', 'embed', 'card'],
    difficulty: 'intermediate',
    description: 'Social media embed-style card',
    cssCode: `.embed-card { width: 200px; background: #1a1a2e; border-radius: 10px; border: 1px solid #2a2a3e; padding: 12px; }
.embed-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.embed-avatar { width: 24px; height: 24px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; }
.embed-name { color: #e2e8f0; font-size: 0.75rem; font-weight: 600; }
.embed-handle { color: #64748b; font-size: 0.65rem; }
.embed-text { color: #94a3b8; font-size: 0.72rem; line-height: 1.4; }`,
    htmlCode: `<div class="embed-card"><div class="embed-header"><div class="embed-avatar"></div><div><div class="embed-name">User</div><div class="embed-handle">@handle</div></div></div><div class="embed-text">Just shipped a new feature! 🚀</div></div>`,
    isNew: true,
  },

  // ===== FORMS =====
  {
    id: 'form-radio',
    name: 'Custom Radio',
    category: 'forms',
    tags: ['form', 'radio', 'custom'],
    difficulty: 'intermediate',
    description: 'Custom styled radio button',
    cssCode: `.custom-radio { display: flex; align-items: center; gap: 8px; cursor: pointer; }
.radio-outer { width: 18px; height: 18px; border: 2px solid #2a2a3e; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: border-color 0.2s; }
.radio-inner { width: 8px; height: 8px; background: #10b981; border-radius: 50%; transform: scale(0); transition: transform 0.2s; }
.custom-radio.selected .radio-outer { border-color: #10b981; }
.custom-radio.selected .radio-inner { transform: scale(1); }
.radio-label { color: #e2e8f0; font-size: 0.8rem; }`,
    htmlCode: `<div class="custom-radio selected"><div class="radio-outer"><div class="radio-inner"></div></div><span class="radio-label">Option A</span></div>`,
    isNew: true,
  },
  {
    id: 'form-checkbox',
    name: 'Custom Checkbox',
    category: 'forms',
    tags: ['form', 'checkbox', 'custom'],
    difficulty: 'beginner',
    description: 'Custom styled checkbox with animation',
    cssCode: `.custom-check { display: flex; align-items: center; gap: 8px; cursor: pointer; }
.check-box { width: 18px; height: 18px; border: 2px solid #2a2a3e; border-radius: 4px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; background: #1a1a2e; }
.custom-check.checked .check-box { background: #10b981; border-color: #10b981; }
.check-mark { color: white; font-size: 0.7rem; font-weight: 700; opacity: 0; transition: opacity 0.2s; }
.custom-check.checked .check-mark { opacity: 1; }
.check-label { color: #e2e8f0; font-size: 0.8rem; }`,
    htmlCode: `<div class="custom-check checked"><div class="check-box"><span class="check-mark">✓</span></div><span class="check-label">Remember me</span></div>`,
    isNew: true,
  },
  {
    id: 'form-textarea',
    name: 'Styled Textarea',
    category: 'forms',
    tags: ['form', 'textarea', 'animated'],
    difficulty: 'intermediate',
    description: 'Styled textarea with focus animation',
    cssCode: `.styled-textarea {
  width: 200px;
  min-height: 60px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px 14px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.styled-textarea:focus { border-color: #10b981; box-shadow: 0 0 0 3px #10b98122; }`,
    htmlCode: `<textarea class="styled-textarea" placeholder="Write something..."></textarea>`,
    isNew: true,
  },
  {
    id: 'form-select',
    name: 'Custom Select',
    category: 'forms',
    tags: ['form', 'select', 'dropdown'],
    difficulty: 'intermediate',
    description: 'Custom styled select dropdown',
    cssCode: `.custom-select { position: relative; width: 180px; }
.select-trigger {
  padding: 10px 14px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
}
.select-trigger:hover { border-color: #10b981; }
.select-arrow { color: #64748b; font-size: 0.7rem; }`,
    htmlCode: `<div class="custom-select"><div class="select-trigger"><span>Choose option</span><span class="select-arrow">▾</span></div></div>`,
    isNew: true,
  },
  {
    id: 'form-stepper',
    name: 'Number Stepper',
    category: 'forms',
    tags: ['form', 'stepper', 'number'],
    difficulty: 'beginner',
    description: 'Number input with increment/decrement buttons',
    cssCode: `.num-stepper {
  display: flex;
  align-items: center;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
}
.stepper-btn { padding: 8px 14px; background: #10b98111; color: #10b981; border: none; font-size: 1rem; cursor: pointer; transition: background 0.2s; }
.stepper-btn:hover { background: #10b98122; }
.stepper-val { padding: 8px 16px; color: #e2e8f0; font-size: 0.85rem; font-weight: 600; min-width: 40px; text-align: center; }`,
    htmlCode: `<div class="num-stepper"><button class="stepper-btn">−</button><span class="stepper-val">5</span><button class="stepper-btn">+</button></div>`,
    isNew: true,
  },

  // ===== DATA =====
  {
    id: 'data-bar-chart',
    name: 'CSS Bar Chart',
    category: 'data',
    tags: ['data', 'chart', 'bar'],
    difficulty: 'intermediate',
    description: 'Simple bar chart using pure CSS',
    cssCode: `.css-bar-chart { display: flex; align-items: flex-end; gap: 8px; height: 80px; padding: 10px 0; }
.bar-col { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.bar { width: 24px; border-radius: 4px 4px 0 0; background: linear-gradient(to top, #10b981, #10b981aa); animation: bar-grow 1s ease forwards; transform-origin: bottom; }
@keyframes bar-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
.bar-label { font-size: 0.6rem; color: #64748b; }`,
    htmlCode: `<div class="css-bar-chart"><div class="bar-col"><div class="bar" style="height:50px"></div><div class="bar-label">M</div></div><div class="bar-col"><div class="bar" style="height:70px"></div><div class="bar-label">T</div></div><div class="bar-col"><div class="bar" style="height:35px"></div><div class="bar-label">W</div></div><div class="bar-col"><div class="bar" style="height:60px"></div><div class="bar-label">T</div></div></div>`,
    isNew: true,
  },
  {
    id: 'data-donut',
    name: 'CSS Donut Chart',
    category: 'data',
    tags: ['data', 'chart', 'donut'],
    difficulty: 'intermediate',
    description: 'Donut chart using conic-gradient',
    cssCode: `.donut-chart {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(#10b981 0deg 200deg, #3b82f6 200deg 280deg, #2a2a3e 280deg 360deg);
  position: relative;
}
.donut-hole {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 700;
}`,
    htmlCode: `<div class="donut-chart"><div class="donut-hole">56%</div></div>`,
    isNew: true,
  },
  {
    id: 'data-stat',
    name: 'Stat Card',
    category: 'data',
    tags: ['data', 'stat', 'card'],
    difficulty: 'beginner',
    description: 'Stat display card with trend indicator',
    cssCode: `.stat-card { background: #1a1a2e; border-radius: 10px; padding: 14px 18px; border: 1px solid #2a2a3e; width: 160px; }
.stat-label { color: #64748b; font-size: 0.7rem; margin-bottom: 4px; }
.stat-value { color: #e2e8f0; font-size: 1.4rem; font-weight: 800; }
.stat-trend { color: #10b981; font-size: 0.7rem; font-weight: 600; margin-top: 4px; }`,
    htmlCode: `<div class="stat-card"><div class="stat-label">Revenue</div><div class="stat-value">$12.4k</div><div class="stat-trend">↑ 12.5%</div></div>`,
    isNew: true,
  },
  {
    id: 'data-table',
    name: 'Styled Table',
    category: 'data',
    tags: ['data', 'table', 'styled'],
    difficulty: 'beginner',
    description: 'Clean styled data table',
    cssCode: `.styled-table { width: 200px; border-collapse: collapse; font-size: 0.7rem; }
.styled-table th { text-align: left; padding: 6px 10px; background: #10b98122; color: #10b981; font-weight: 600; border-bottom: 1px solid #10b98133; }
.styled-table td { padding: 6px 10px; color: #94a3b8; border-bottom: 1px solid #1a1a2e; }`,
    htmlCode: `<table class="styled-table"><tr><th>Name</th><th>Value</th></tr><tr><td>Alpha</td><td>42</td></tr><tr><td>Beta</td><td>78</td></tr></table>`,
    isNew: true,
  },
  {
    id: 'data-sparkline',
    name: 'CSS Sparkline',
    category: 'data',
    tags: ['data', 'sparkline', 'chart'],
    difficulty: 'advanced',
    description: 'Mini sparkline chart using CSS gradients',
    cssCode: `.sparkline {
  width: 120px;
  height: 30px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.sparkline-bar {
  position: absolute;
  bottom: 0;
  width: 8px;
  background: #10b98144;
  border-radius: 2px 2px 0 0;
}
.sparkline-bar:nth-child(1) { left: 0; height: 40%; }
.sparkline-bar:nth-child(2) { left: 14px; height: 70%; }
.sparkline-bar:nth-child(3) { left: 28px; height: 50%; }
.sparkline-bar:nth-child(4) { left: 42px; height: 85%; }
.sparkline-bar:nth-child(5) { left: 56px; height: 65%; background: #10b981; }
.sparkline-bar:nth-child(6) { left: 70px; height: 90%; background: #10b981; }`,
    htmlCode: `<div class="sparkline"><div class="sparkline-bar"></div><div class="sparkline-bar"></div><div class="sparkline-bar"></div><div class="sparkline-bar"></div><div class="sparkline-bar"></div><div class="sparkline-bar"></div></div>`,
    isNew: true,
  },

  // ===== SLIDERS =====
  {
    id: 'slider-custom',
    name: 'Custom Range Slider',
    category: 'sliders',
    tags: ['slider', 'range', 'custom'],
    difficulty: 'intermediate',
    description: 'Custom styled range input slider',
    cssCode: `.custom-range { width: 180px; height: 6px; background: #2a2a3e; border-radius: 3px; position: relative; }
.custom-range-fill { height: 100%; width: 60%; background: linear-gradient(90deg, #10b981, #059669); border-radius: 3px; position: relative; }
.custom-range-thumb {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: #10b981;
  border-radius: 50%;
  border: 3px solid #0a0a0a;
  box-shadow: 0 0 6px #10b98144;
}`,
    htmlCode: `<div class="custom-range"><div class="custom-range-fill"><div class="custom-range-thumb"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-volume',
    name: 'Volume Slider',
    category: 'sliders',
    tags: ['slider', 'volume', 'audio'],
    difficulty: 'beginner',
    description: 'Volume control style slider',
    cssCode: `.vol-slider { display: flex; align-items: center; gap: 8px; }
.vol-icon { color: #10b981; font-size: 0.9rem; }
.vol-track { width: 120px; height: 4px; background: #2a2a3e; border-radius: 2px; overflow: hidden; }
.vol-fill { width: 75%; height: 100%; background: #10b981; border-radius: 2px; }`,
    htmlCode: `<div class="vol-slider"><span class="vol-icon">🔊</span><div class="vol-track"><div class="vol-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-toggle',
    name: 'Toggle Range',
    category: 'sliders',
    tags: ['slider', 'toggle', 'range'],
    difficulty: 'intermediate',
    description: 'Range slider with toggle labels',
    cssCode: `.toggle-range { display: flex; align-items: center; gap: 10px; }
.toggle-label { font-size: 0.7rem; font-weight: 600; padding: 3px 8px; border-radius: 4px; }
.toggle-label.off { color: #64748b; background: #1a1a2e; }
.toggle-label.on { color: #10b981; background: #10b98122; }
.toggle-track { width: 80px; height: 4px; background: #2a2a3e; border-radius: 2px; position: relative; }
.toggle-dot { position: absolute; left: 55%; top: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; background: #10b981; border-radius: 50%; border: 2px solid #0a0a0a; }`,
    htmlCode: `<div class="toggle-range"><span class="toggle-label off">Off</span><div class="toggle-track"><div class="toggle-dot"></div></div><span class="toggle-label on">On</span></div>`,
    isNew: true,
  },
  {
    id: 'slider-vertical',
    name: 'Vertical Slider',
    category: 'sliders',
    tags: ['slider', 'vertical', 'custom'],
    difficulty: 'intermediate',
    description: 'Vertical orientation range slider',
    cssCode: `.vert-slider { height: 80px; width: 6px; background: #2a2a3e; border-radius: 3px; position: relative; display: flex; flex-direction: column-reverse; }
.vert-fill { width: 100%; height: 60%; background: linear-gradient(to top, #10b981, #059669); border-radius: 3px; position: relative; }
.vert-thumb { position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); width: 14px; height: 14px; background: #10b981; border-radius: 50%; border: 2px solid #0a0a0a; }`,
    htmlCode: `<div class="vert-slider"><div class="vert-fill"><div class="vert-thumb"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-dual',
    name: 'Dual Range Slider',
    category: 'sliders',
    tags: ['slider', 'dual', 'range'],
    difficulty: 'advanced',
    description: 'Dual thumb range slider for min/max selection',
    cssCode: `.dual-range { width: 180px; height: 6px; background: #2a2a3e; border-radius: 3px; position: relative; }
.dual-range-fill { position: absolute; left: 20%; right: 15%; height: 100%; background: #10b981; border-radius: 3px; }
.dual-thumb { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 14px; height: 14px; background: #10b981; border-radius: 50%; border: 2px solid #0a0a0a; }
.dual-thumb.min { left: 20%; }
.dual-thumb.max { left: 85%; }`,
    htmlCode: `<div class="dual-range"><div class="dual-range-fill"></div><div class="dual-thumb min"></div><div class="dual-thumb max"></div></div>`,
    isNew: true,
  },

  // ===== PRINT =====
  {
    id: 'print-drop-cap',
    name: 'Drop Cap',
    category: 'print',
    tags: ['print', 'drop-cap', 'typography'],
    difficulty: 'beginner',
    description: 'Classic drop cap initial letter',
    cssCode: `.drop-cap { color: #e2e8f0; font-size: 0.8rem; line-height: 1.5; max-width: 200px; }
.drop-cap::first-letter { float: left; font-size: 2.5rem; line-height: 1; padding-right: 6px; color: #10b981; font-weight: 900; }`,
    htmlCode: `<div class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</div>`,
    isNew: true,
  },
  {
    id: 'print-pull-quote',
    name: 'Pull Quote',
    category: 'print',
    tags: ['print', 'quote', 'typography'],
    difficulty: 'intermediate',
    description: 'Elegant pull quote styling',
    cssCode: `.pull-quote {
  position: relative;
  padding: 12px 16px 12px 20px;
  border-left: 3px solid #10b981;
  color: #e2e8f0;
  font-style: italic;
  font-size: 0.85rem;
  line-height: 1.5;
  max-width: 200px;
  background: #10b98108;
  border-radius: 0 8px 8px 0;
}
.pull-quote::before { content: '"'; position: absolute; top: -4px; left: 6px; font-size: 2rem; color: #10b981; font-style: normal; }`,
    htmlCode: `<div class="pull-quote">Design is not just what it looks like. Design is how it works.</div>`,
    isNew: true,
  },
  {
    id: 'print-columns',
    name: 'Text Columns',
    category: 'print',
    tags: ['print', 'columns', 'layout'],
    difficulty: 'beginner',
    description: 'Newspaper-style multi-column text',
    cssCode: `.text-columns { column-count: 2; column-gap: 12px; column-rule: 1px solid #2a2a3e; font-size: 0.7rem; color: #94a3b8; line-height: 1.5; max-width: 200px; }`,
    htmlCode: `<div class="text-columns">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</div>`,
    isNew: true,
  },
  {
    id: 'print-hyphenation',
    name: 'Smart Hyphenation',
    category: 'print',
    tags: ['print', 'hyphen', 'text'],
    difficulty: 'beginner',
    description: 'CSS hyphenation for better text flow',
    cssCode: `.smart-hyphen { max-width: 120px; font-size: 0.8rem; color: #e2e8f0; hyphens: auto; text-align: justify; background: #1a1a2e; padding: 12px; border-radius: 8px; border: 1px solid #2a2a3e; }`,
    htmlCode: `<div class="smart-hyphen">This extraordinarily demonstrates automatic hyphenation in CSS.</div>`,
    isNew: true,
  },
  {
    id: 'print-ornamental',
    name: 'Ornamental Break',
    category: 'print',
    tags: ['print', 'ornament', 'decorative'],
    difficulty: 'beginner',
    description: 'Elegant section break with ornamental characters',
    cssCode: `.orn-break { text-align: center; color: #10b981; font-size: 0.9rem; letter-spacing: 8px; opacity: 0.6; padding: 4px 0; }`,
    htmlCode: `<div class="orn-break">❧ ❧ ❧</div>`,
    isNew: true,
  },

  // ===== CONTAINER =====
  {
    id: 'cq-card',
    name: 'Container Query Card',
    category: 'container',
    tags: ['container', 'responsive', 'card'],
    difficulty: 'intermediate',
    description: 'Card that adapts layout based on container size',
    cssCode: `.cq-wrap { container-type: inline-size; container-name: card; width: 100%; }
.cq-card { display: flex; flex-direction: column; gap: 6px; background: #1a1a2e; padding: 12px; border-radius: 8px; border: 1px solid #2a2a3e; }
.cq-card-title { color: #10b981; font-weight: 700; font-size: 0.8rem; }
.cq-card-text { color: #94a3b8; font-size: 0.7rem; }
@container card (min-width: 300px) { .cq-card { flex-direction: row; align-items: center; } }`,
    htmlCode: `<div class="cq-wrap"><div class="cq-card"><div class="cq-card-title">Adaptive</div><div class="cq-card-text">Resizes with container</div></div></div>`,
    isNew: true,
  },
  {
    id: 'cq-sidebar',
    name: 'Container Sidebar',
    category: 'container',
    tags: ['container', 'sidebar', 'layout'],
    difficulty: 'advanced',
    description: 'Sidebar layout that adapts to container width',
    cssCode: `.cq-sidebar-wrap { display: flex; gap: 6px; height: 80px; }
.cq-sidebar { width: 50px; background: #1a1a2e; border-radius: 6px; display: flex; flex-direction: column; gap: 4px; padding: 6px; }
.cq-sidebar-item { height: 8px; background: #2a2a3e; border-radius: 2px; }
.cq-sidebar-item.active { background: #10b981; }
.cq-main { flex: 1; background: #0f0f1a; border-radius: 6px; border: 1px solid #2a2a3e; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 0.75rem; }`,
    htmlCode: `<div class="cq-sidebar-wrap"><div class="cq-sidebar"><div class="cq-sidebar-item active"></div><div class="cq-sidebar-item"></div><div class="cq-sidebar-item"></div></div><div class="cq-main">Content</div></div>`,
    isNew: true,
  },
  {
    id: 'cq-grid',
    name: 'Container Grid',
    category: 'container',
    tags: ['container', 'grid', 'responsive'],
    difficulty: 'intermediate',
    description: 'Grid that adjusts columns based on container size',
    cssCode: `.cq-grid-wrap { container-type: inline-size; width: 100%; }
.cq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.cq-grid-item { background: #1a1a2e; padding: 10px; border-radius: 6px; text-align: center; color: #10b981; font-size: 0.7rem; font-weight: 600; border: 1px solid #2a2a3e; }
@container (min-width: 300px) { .cq-grid { grid-template-columns: 1fr 1fr 1fr; } }`,
    htmlCode: `<div class="cq-grid-wrap"><div class="cq-grid"><div class="cq-grid-item">A</div><div class="cq-grid-item">B</div><div class="cq-grid-item">C</div><div class="cq-grid-item">D</div></div></div>`,
    isNew: true,
  },
  {
    id: 'cq-nav',
    name: 'Container Nav',
    category: 'container',
    tags: ['container', 'nav', 'responsive'],
    difficulty: 'intermediate',
    description: 'Navigation that adapts to its container',
    cssCode: `.cq-nav-wrap { container-type: inline-size; width: 100%; }
.cq-nav { display: flex; flex-direction: column; gap: 3px; background: #1a1a2e; padding: 6px; border-radius: 8px; }
.cq-nav-item { padding: 6px 10px; background: #0f0f1a; border-radius: 4px; color: #94a3b8; font-size: 0.7rem; text-align: center; }
.cq-nav-item.active { background: #10b98122; color: #10b981; font-weight: 600; }
@container (min-width: 250px) { .cq-nav { flex-direction: row; } }`,
    htmlCode: `<div class="cq-nav-wrap"><div class="cq-nav"><div class="cq-nav-item active">Home</div><div class="cq-nav-item">About</div><div class="cq-nav-item">Blog</div></div></div>`,
    isNew: true,
  },
  {
    id: 'cq-stack',
    name: 'Container Stack',
    category: 'container',
    tags: ['container', 'stack', 'layout'],
    difficulty: 'beginner',
    description: 'Stack layout that adapts spacing based on container',
    cssCode: `.cq-stack-wrap { container-type: inline-size; container-name: stack; width: 100%; }
.cq-stack { display: flex; flex-direction: column; gap: 4px; }
.cq-stack-item { background: #1a1a2e; padding: 8px 12px; border-radius: 6px; color: #94a3b8; font-size: 0.72rem; border-left: 2px solid #10b981; }
@container stack (min-width: 250px) { .cq-stack { gap: 8px; } .cq-stack-item { padding: 12px 16px; font-size: 0.8rem; } }`,
    htmlCode: `<div class="cq-stack-wrap"><div class="cq-stack"><div class="cq-stack-item">First</div><div class="cq-stack-item">Second</div><div class="cq-stack-item">Third</div></div></div>`,
    isNew: true,
  },

  // ===== SVG =====
  {
    id: 'svg-gooey',
    name: 'Gooey Effect',
    category: 'svg',
    tags: ['svg', 'filter', 'gooey'],
    difficulty: 'advanced',
    description: 'SVG gooey/merge filter effect',
    cssCode: `.gooey-wrap { display: flex; align-items: center; justify-content: center; gap: 0; }
.gooey-dot { width: 24px; height: 24px; background: #10b981; border-radius: 50%; animation: gooey-bounce 2s ease-in-out infinite; }
.gooey-dot:nth-child(2) { animation-delay: 0.1s; }
.gooey-dot:nth-child(3) { animation-delay: 0.2s; }
@keyframes gooey-bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }`,
    htmlCode: `<svg style="position:absolute;width:0;height:0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"/></filter></defs></svg><div class="gooey-wrap"><div class="gooey-dot"></div><div class="gooey-dot"></div><div class="gooey-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'svg-glitch',
    name: 'SVG Glitch',
    category: 'svg',
    tags: ['svg', 'filter', 'glitch'],
    difficulty: 'advanced',
    description: 'SVG filter-based glitch effect',
    cssCode: `.svg-glitch { font-size: 1.5rem; font-weight: 900; color: #10b981; position: relative; animation: glitch-anim 3s infinite; }
@keyframes glitch-anim {
  0%, 90%, 100% { transform: none; opacity: 1; }
  92% { transform: skew(0.5deg, 0.1deg); }
  94% { transform: skew(-0.5deg, -0.1deg); }
  96% { transform: skew(0.3deg, 0.2deg); opacity: 0.8; }
  98% { transform: none; opacity: 1; }
}`,
    htmlCode: `<div class="svg-glitch">GLITCH</div>`,
    isNew: true,
  },
  {
    id: 'svg-duotone',
    name: 'Duotone Filter',
    category: 'svg',
    tags: ['svg', 'filter', 'duotone'],
    difficulty: 'intermediate',
    description: 'SVG duotone color filter effect',
    cssCode: `.duotone-box { width: 80px; height: 60px; background: linear-gradient(135deg, #64748b, #94a3b8); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.8rem; }`,
    htmlCode: `<div class="duotone-box">Duo</div>`,
    isNew: true,
  },
  {
    id: 'svg-noise',
    name: 'SVG Noise',
    category: 'svg',
    tags: ['svg', 'filter', 'noise'],
    difficulty: 'intermediate',
    description: 'SVG turbulence noise filter background',
    cssCode: `.noise-bg { width: 100%; height: 80px; border-radius: 8px; background: #10b98122; position: relative; overflow: hidden; }
.noise-overlay { position: absolute; inset: 0; opacity: 0.15; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }`,
    htmlCode: `<div class="noise-bg"><div class="noise-overlay"></div></div>`,
    isNew: true,
  },
  {
    id: 'svg-emboss',
    name: 'Emboss Effect',
    category: 'svg',
    tags: ['svg', 'filter', 'emboss'],
    difficulty: 'intermediate',
    description: 'SVG emboss/relief filter effect',
    cssCode: `.emboss-box { width: 100px; height: 60px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.85rem; filter: contrast(1.2) brightness(0.9); }`,
    htmlCode: `<div class="emboss-box">Emboss</div>`,
    isNew: true,
  },

  // ===== TYPOGRAPHY ART =====
  {
    id: 'typo-wave',
    name: 'Wave Text',
    category: 'typography-art',
    tags: ['typography', 'wave', 'animated'],
    difficulty: 'intermediate',
    description: 'Text with a wave animation effect',
    cssCode: `.wave-text { display: flex; font-size: 1.5rem; font-weight: 800; color: #10b981; }
.wave-text span { display: inline-block; animation: wave-char 1.5s ease-in-out infinite; }
.wave-text span:nth-child(1) { animation-delay: 0s; }
.wave-text span:nth-child(2) { animation-delay: 0.1s; }
.wave-text span:nth-child(3) { animation-delay: 0.2s; }
.wave-text span:nth-child(4) { animation-delay: 0.3s; }
.wave-text span:nth-child(5) { animation-delay: 0.4s; }
@keyframes wave-char { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`,
    htmlCode: `<div class="wave-text"><span>W</span><span>A</span><span>V</span><span>E</span><span>S</span></div>`,
    isNew: true,
  },
  {
    id: 'typo-glitch',
    name: 'Glitch Text',
    category: 'typography-art',
    tags: ['typography', 'glitch', 'animated'],
    difficulty: 'advanced',
    description: 'Text with a glitch distortion effect',
    cssCode: `.glitch-text { font-size: 1.5rem; font-weight: 900; color: #e2e8f0; position: relative; }
.glitch-text::before, .glitch-text::after { content: 'GLITCH'; position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.glitch-text::before { color: #10b981; animation: glitch-1 2s infinite; clip-path: inset(0 0 60% 0); }
.glitch-text::after { color: #ef4444; animation: glitch-2 2s infinite; clip-path: inset(60% 0 0 0); }
@keyframes glitch-1 { 0%, 100% { transform: translate(0); } 20% { transform: translate(-2px, 1px); } 40% { transform: translate(2px, -1px); } }
@keyframes glitch-2 { 0%, 100% { transform: translate(0); } 20% { transform: translate(2px, -1px); } 40% { transform: translate(-2px, 1px); } }`,
    htmlCode: `<div class="glitch-text">GLITCH</div>`,
    isNew: true,
  },
  {
    id: 'typo-reveal',
    name: 'Text Reveal',
    category: 'typography-art',
    tags: ['typography', 'reveal', 'animated'],
    difficulty: 'intermediate',
    description: 'Text revealed with a sliding mask animation',
    cssCode: `.text-reveal { font-size: 1.2rem; font-weight: 800; color: #10b981; position: relative; overflow: hidden; white-space: nowrap; }
.text-reveal::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0a0a0a; animation: reveal-slide 2s ease forwards; transform-origin: left; }
@keyframes reveal-slide { to { transform: scaleX(0); } }`,
    htmlCode: `<div class="text-reveal">REVEALED</div>`,
    isNew: true,
  },
  {
    id: 'typo-shadow',
    name: 'Shadow Stack Text',
    category: 'typography-art',
    tags: ['typography', 'shadow', 'stack'],
    difficulty: 'beginner',
    description: 'Text with stacked colored shadows',
    cssCode: `.shadow-stack { font-size: 1.8rem; font-weight: 900; color: #10b981; text-shadow: 3px 3px 0 #059669, 6px 6px 0 #047857, 9px 9px 0 #065f46, 12px 12px 0 #064e3b; }`,
    htmlCode: `<div class="shadow-stack">STACK</div>`,
    isNew: true,
  },
  {
    id: 'typo-rainbow',
    name: 'Rainbow Text',
    category: 'typography-art',
    tags: ['typography', 'rainbow', 'gradient'],
    difficulty: 'beginner',
    description: 'Text with a rainbow gradient animation',
    cssCode: `.rainbow-text {
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: rainbow-move 3s linear infinite;
}
@keyframes rainbow-move { to { background-position: 300% 0; } }`,
    htmlCode: `<div class="rainbow-text">RAINBOW</div>`,
    isNew: true,
  },

  // ===== HOUDINI =====
  {
    id: 'houdini-paint',
    name: 'Paint API Demo',
    category: 'houdini',
    tags: ['houdini', 'paint', 'modern'],
    difficulty: 'advanced',
    description: 'CSS Houdini Paint API concept with custom background',
    cssCode: `.houdini-paint {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  background: repeating-conic-gradient(#1a1a2e 0% 25%, #0f0f1a 0% 50%) 0 0 / 20px 20px;
}`,
    htmlCode: `<div class="houdini-paint">Paint API</div>`,
    isNew: true,
  },
  {
    id: 'houdini-property',
    name: 'Custom Property',
    category: 'houdini',
    tags: ['houdini', 'property', 'animated'],
    difficulty: 'intermediate',
    description: 'Animating custom properties with @property',
    cssCode: `.houdini-prop {
  width: 120px;
  height: 80px;
  border-radius: 12px;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  border: 2px solid #10b981;
  transition: all 0.3s;
}
.houdini-prop:hover { box-shadow: 0 0 15px #10b98144; transform: scale(1.05); }`,
    htmlCode: `<div class="houdini-prop">Hover Me</div>`,
    isNew: true,
  },
  {
    id: 'houdini-layout',
    name: 'Layout API Concept',
    category: 'houdini',
    tags: ['houdini', 'layout', 'modern'],
    difficulty: 'advanced',
    description: 'CSS Houdini Layout API concept',
    cssCode: `.houdini-layout { display: flex; flex-wrap: wrap; gap: 4px; }
.houdini-layout-item { background: #1a1a2e; border-radius: 4px; color: #10b981; font-size: 0.65rem; padding: 6px 10px; font-weight: 600; }
.houdini-layout-item:nth-child(2) { flex-basis: 60%; }
.houdini-layout-item:nth-child(3) { flex-basis: 35%; }`,
    htmlCode: `<div class="houdini-layout"><div class="houdini-layout-item">A</div><div class="houdini-layout-item">B</div><div class="houdini-layout-item">C</div><div class="houdini-layout-item">D</div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-counter',
    name: 'Typed OM Counter',
    category: 'houdini',
    tags: ['houdini', 'counter', 'modern'],
    difficulty: 'intermediate',
    description: 'CSS counter with modern typed OM styling',
    cssCode: `.typed-counter { counter-reset: step; display: flex; gap: 8px; }
.typed-step { counter-increment: step; width: 30px; height: 30px; border-radius: 50%; background: #1a1a2e; border: 2px solid #2a2a3e; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 0.7rem; font-weight: 600; }
.typed-step.active { border-color: #10b981; background: #10b98122; color: #10b981; }
.typed-step::after { content: counter(step); }`,
    htmlCode: `<div class="typed-counter"><div class="typed-step active"></div><div class="typed-step active"></div><div class="typed-step"></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-worklet',
    name: 'Animation Worklet',
    category: 'houdini',
    tags: ['houdini', 'animation', 'worklet'],
    difficulty: 'advanced',
    description: 'Smooth scroll-linked animation worklet concept',
    cssCode: `.worklet-demo { width: 100%; height: 60px; background: #1a1a2e; border-radius: 8px; position: relative; overflow: hidden; }
.worklet-bar { position: absolute; left: 0; top: 0; height: 100%; width: 60%; background: linear-gradient(90deg, #10b981, #059669); border-radius: 8px; animation: worklet-slide 3s ease-in-out infinite alternate; }
@keyframes worklet-slide { 0% { width: 30%; } 100% { width: 90%; } }`,
    htmlCode: `<div class="worklet-demo"><div class="worklet-bar"></div></div>`,
    isNew: true,
  },

  // ===== E-COMMERCE =====
  {
    id: 'ecom-product',
    name: 'Product Card',
    category: 'ecommerce',
    tags: ['ecommerce', 'product', 'card'],
    difficulty: 'intermediate',
    description: 'E-commerce product card with price and CTA',
    cssCode: `.product-card { width: 160px; background: #1a1a2e; border-radius: 10px; overflow: hidden; border: 1px solid #2a2a3e; }
.product-img { height: 60px; background: linear-gradient(135deg, #10b98122, #3b82f622); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
.product-info { padding: 10px; }
.product-name { color: #e2e8f0; font-size: 0.8rem; font-weight: 600; margin-bottom: 4px; }
.product-price { color: #10b981; font-size: 0.9rem; font-weight: 800; margin-bottom: 6px; }
.product-btn { width: 100%; padding: 6px; background: #10b981; color: white; border: none; border-radius: 6px; font-size: 0.7rem; font-weight: 600; cursor: pointer; }`,
    htmlCode: `<div class="product-card"><div class="product-img">👟</div><div class="product-info"><div class="product-name">Sneakers</div><div class="product-price">$99.99</div><button class="product-btn">Add to Cart</button></div></div>`,
    isNew: true,
  },
  {
    id: 'ecom-cart',
    name: 'Cart Badge',
    category: 'ecommerce',
    tags: ['ecommerce', 'cart', 'badge'],
    difficulty: 'beginner',
    description: 'Shopping cart icon with item count badge',
    cssCode: `.cart-badge-wrap { position: relative; display: inline-flex; }
.cart-icon { font-size: 1.5rem; color: #e2e8f0; }
.cart-count { position: absolute; top: -6px; right: -10px; min-width: 16px; height: 16px; background: #ef4444; color: white; border-radius: 8px; font-size: 0.6rem; font-weight: 700; display: flex; align-items: center; justify-content: center; padding: 0 4px; animation: cart-bounce 2s ease infinite; }
@keyframes cart-bounce { 0%, 80%, 100% { transform: scale(1); } 90% { transform: scale(1.2); } }`,
    htmlCode: `<div class="cart-badge-wrap"><span class="cart-icon">🛒</span><span class="cart-count">3</span></div>`,
    isNew: true,
  },
  {
    id: 'ecom-price-tag',
    name: 'Price Tag',
    category: 'ecommerce',
    tags: ['ecommerce', 'price', 'tag'],
    difficulty: 'intermediate',
    description: 'Decorative price tag shape',
    cssCode: `.price-tag { display: inline-flex; align-items: center; gap: 8px; background: #10b981; color: white; padding: 6px 14px 6px 20px; font-size: 0.8rem; font-weight: 700; clip-path: polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%); }`,
    htmlCode: `<div class="price-tag">$49.99</div>`,
    isNew: true,
  },
  {
    id: 'ecom-sale',
    name: 'Sale Badge',
    category: 'ecommerce',
    tags: ['ecommerce', 'sale', 'badge'],
    difficulty: 'beginner',
    description: 'Animated sale/discount badge',
    cssCode: `.sale-badge { display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; background: #ef4444; color: white; border-radius: 4px; font-size: 0.75rem; font-weight: 700; animation: sale-pulse 2s ease-in-out infinite; text-transform: uppercase; }
@keyframes sale-pulse { 0%, 100% { box-shadow: 0 0 0 0 #ef444466; } 50% { box-shadow: 0 0 0 6px #ef444400; } }`,
    htmlCode: `<div class="sale-badge">🔥 -30% OFF</div>`,
    isNew: true,
  },
  {
    id: 'ecom-rating',
    name: 'Star Rating',
    category: 'ecommerce',
    tags: ['ecommerce', 'rating', 'stars'],
    difficulty: 'beginner',
    description: 'Star rating display',
    cssCode: `.star-rating { display: flex; gap: 2px; font-size: 1rem; }
.star-filled { color: #f59e0b; }
.star-empty { color: #2a2a3e; }
.rating-count { color: #64748b; font-size: 0.7rem; margin-left: 4px; }`,
    htmlCode: `<div class="star-rating"><span class="star-filled">★</span><span class="star-filled">★</span><span class="star-filled">★</span><span class="star-filled">★</span><span class="star-empty">★</span><span class="rating-count">(42)</span></div>`,
    isNew: true,
  },

];

// Compute categories with dynamic counts from effects
export const categories: Category[] = categoryDefs.map(def => ({
  ...def,
  count: def.id === 'all' ? effects.length : effects.filter(e => e.category === def.id).length,
}));


// Compute tag counts for the filter toolbar
export function getTagCounts(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const effect of effects) {
    for (const tag of effect.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

// Get recently added effects
export function getRecentlyAdded(count: number = 15): CSSEffect[] {
  return effects
    .filter(e => e.isNew)
    .slice(0, count);
}
