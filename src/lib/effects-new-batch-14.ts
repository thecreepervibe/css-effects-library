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

export const effectsNewBatch14: CSSEffect[] = [
  // ==================== TEXT EFFECTS (20) ====================
  {
    id: 'text-clip-reveal',
    name: 'Text Clip Reveal',
    category: 'text',
    tags: ['text', 'clip-path', 'reveal', 'mask', 'animated'],
    difficulty: 'intermediate',
    description: 'Text revealed through an expanding clip-path animation from center outward',
    cssCode: `.text-clip-reveal {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  background: #0a0a1a;
  padding: 16px 24px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #10b981, #3b82f6);
  animation: clip-reveal 2s ease-in-out infinite;
}
@keyframes clip-reveal {
  0%, 10% { clip-path: inset(50% 50% 50% 50%); }
  40%, 60% { clip-path: inset(0% 0% 0% 0%); }
  90%, 100% { clip-path: inset(50% 50% 50% 50%); }
}`,
    htmlCode: `<div class="text-clip-reveal">REVEAL</div>`,
    isNew: true,
  },
  {
    id: 'text-bg-clip-pattern',
    name: 'Text Background Clip Pattern',
    category: 'text',
    tags: ['text', 'background-clip', 'pattern', 'striped', 'animated'],
    difficulty: 'intermediate',
    description: 'Text filled with an animated diagonal stripe pattern using background-clip',
    cssCode: `.text-bg-clip-pattern {
  font-size: 2.2rem;
  font-weight: 900;
  background: repeating-linear-gradient(
    -45deg, #10b981, #10b981 6px, #059669 6px, #059669 12px
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: stripe-scroll 2s linear infinite;
}
@keyframes stripe-scroll {
  to { background-position: 200% 0; }
}`,
    htmlCode: `<div class="text-bg-clip-pattern">STRIPES</div>`,
    isNew: true,
  },
  {
    id: 'text-mask-anim',
    name: 'Text Mask Animation',
    category: 'text',
    tags: ['text', 'mask', 'animation', 'sweep', 'reveal'],
    difficulty: 'advanced',
    description: 'Text revealed by a sweeping mask that moves across with a gradient fade',
    cssCode: `.text-mask-anim {
  font-size: 2rem;
  font-weight: 900;
  color: #e2e8f0;
  background: #0a0a1a;
  padding: 16px;
  position: relative;
  overflow: hidden;
}
.text-mask-anim::after {
  content: 'MASKED';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  color: #10b981;
  background: #0a0a1a;
  animation: mask-sweep 3s ease-in-out infinite;
}
@keyframes mask-sweep {
  0%, 10% { clip-path: inset(0 100% 0 0); }
  40%, 60% { clip-path: inset(0 0 0 0); }
  90%, 100% { clip-path: inset(0 0 0 100%); }
}`,
    htmlCode: `<div class="text-mask-anim">MASKED</div>`,
    isNew: true,
  },
  {
    id: 'text-split-color-var',
    name: 'Text Split Color Variation',
    category: 'text',
    tags: ['text', 'split', 'color', 'dual', 'gradient'],
    difficulty: 'beginner',
    description: 'Text with a split color effect using a gradient that divides the text into two colors',
    cssCode: `.text-split-color-var {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(90deg, #10b981 50%, #3b82f6 50%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  animation: split-shift 3s ease-in-out infinite alternate;
}
@keyframes split-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}`,
    htmlCode: `<div class="text-split-color-var">SPLIT</div>`,
    isNew: true,
  },
  {
    id: 'text-shadow-stack',
    name: 'Text Shadow Stack',
    category: 'text',
    tags: ['text', 'shadow', 'stacked', 'depth', 'layered'],
    difficulty: 'beginner',
    description: 'Text with stacked shadow layers creating a 3D extruded depth effect',
    cssCode: `.text-shadow-stack {
  font-size: 2.5rem;
  font-weight: 900;
  color: #10b981;
  background: #0a0a1a;
  padding: 16px;
  text-shadow:
    1px 1px 0 #059669,
    2px 2px 0 #047857,
    3px 3px 0 #065f46,
    4px 4px 0 #064e3b,
    5px 5px 0 #022c22,
    6px 6px 8px rgba(0,0,0,0.5);
  animation: shadow-push 2s ease-in-out infinite;
}
@keyframes shadow-push {
  0%, 100% { text-shadow: 1px 1px 0 #059669,2px 2px 0 #047857,3px 3px 0 #065f46,4px 4px 0 #064e3b,5px 5px 0 #022c22,6px 6px 8px rgba(0,0,0,0.5); }
  50% { text-shadow: 1px 1px 0 #059669,2px 2px 0 #047857,3px 3px 0 #065f46,4px 4px 0 #064e3b,5px 5px 0 #022c22,8px 8px 16px rgba(16,185,129,0.3); }
}`,
    htmlCode: `<div class="text-shadow-stack">STACK</div>`,
    isNew: true,
  },
  {
    id: 'text-blur-reveal',
    name: 'Text Blur Reveal',
    category: 'text',
    tags: ['text', 'blur', 'reveal', 'focus', 'animated'],
    difficulty: 'beginner',
    description: 'Text that transitions from blurred to sharp, creating a focus reveal effect',
    cssCode: `.text-blur-reveal {
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  background: #0a0a1a;
  padding: 16px;
  animation: blur-in 2.5s ease-in-out infinite;
}
@keyframes blur-in {
  0%, 10% { filter: blur(12px); opacity: 0.3; }
  30%, 70% { filter: blur(0); opacity: 1; }
  90%, 100% { filter: blur(12px); opacity: 0.3; }
}`,
    htmlCode: `<div class="text-blur-reveal">FOCUS</div>`,
    isNew: true,
  },
  {
    id: 'text-scramble-fx',
    name: 'Text Scramble Effect',
    category: 'text',
    tags: ['text', 'scramble', 'decode', 'random', 'animated'],
    difficulty: 'advanced',
    description: 'Text that appears to scramble and decode with a rotating character effect',
    cssCode: `.text-scramble-fx {
  font-size: 1.6rem;
  font-weight: 700;
  font-family: monospace;
  color: #10b981;
  background: #0a0a1a;
  padding: 16px 20px;
  position: relative;
  display: inline-block;
}
.text-scramble-fx::before, .text-scramble-fx::after {
  content: 'DECODE';
  position: absolute;
  left: 20px;
  top: 16px;
}
.text-scramble-fx::before {
  color: #3b82f644;
  animation: scramble1 0.15s steps(2) infinite;
}
.text-scramble-fx::after {
  color: #8b5cf644;
  animation: scramble2 0.12s steps(3) infinite;
}
@keyframes scramble1 {
  0% { transform: translate(-2px, 1px); clip-path: inset(0 80% 0 0); }
  50% { transform: translate(2px, -1px); clip-path: inset(0 40% 0 0); }
  100% { transform: translate(-1px, 2px); clip-path: inset(0 60% 0 0); }
}
@keyframes scramble2 {
  0% { transform: translate(1px, -2px); clip-path: inset(0 60% 0 0); }
  50% { transform: translate(-2px, 1px); clip-path: inset(0 20% 0 0); }
  100% { transform: translate(2px, -1px); clip-path: inset(0 80% 0 0); }
}`,
    htmlCode: `<div class="text-scramble-fx">DECODE</div>`,
    isNew: true,
  },
  {
    id: 'text-wave-motion',
    name: 'Text Wave Motion',
    category: 'text',
    tags: ['text', 'wave', 'motion', 'sine', 'animated'],
    difficulty: 'intermediate',
    description: 'Text letters that move in a smooth sine wave motion vertically',
    cssCode: `.text-wave-motion {
  display: flex;
  font-size: 1.8rem;
  font-weight: 800;
  color: #10b981;
  background: #0a0a1a;
  padding: 20px;
  gap: 2px;
}
.text-wave-motion span {
  display: inline-block;
  animation: wave-letter 1.5s ease-in-out infinite;
}
.text-wave-motion span:nth-child(1) { animation-delay: 0s; }
.text-wave-motion span:nth-child(2) { animation-delay: 0.1s; }
.text-wave-motion span:nth-child(3) { animation-delay: 0.2s; }
.text-wave-motion span:nth-child(4) { animation-delay: 0.3s; }
.text-wave-motion span:nth-child(5) { animation-delay: 0.4s; }
@keyframes wave-letter {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`,
    htmlCode: `<div class="text-wave-motion"><span>W</span><span>A</span><span>V</span><span>E</span><span>S</span></div>`,
    isNew: true,
  },
  {
    id: 'text-rotate-cascade',
    name: 'Text Rotation Cascade',
    category: 'text',
    tags: ['text', 'rotate', 'cascade', '3d', 'staggered'],
    difficulty: 'intermediate',
    description: 'Text letters that cascade with a 3D rotation effect, staggered per letter',
    cssCode: `.text-rotate-cascade {
  display: flex;
  font-size: 1.8rem;
  font-weight: 800;
  color: #10b981;
  background: #0a0a1a;
  padding: 20px;
  gap: 2px;
  perspective: 400px;
}
.text-rotate-cascade span {
  display: inline-block;
  animation: cascade-rotate 2s ease-in-out infinite;
}
.text-rotate-cascade span:nth-child(1) { animation-delay: 0s; }
.text-rotate-cascade span:nth-child(2) { animation-delay: 0.15s; }
.text-rotate-cascade span:nth-child(3) { animation-delay: 0.3s; }
.text-rotate-cascade span:nth-child(4) { animation-delay: 0.45s; }
.text-rotate-cascade span:nth-child(5) { animation-delay: 0.6s; }
@keyframes cascade-rotate {
  0%, 100% { transform: rotateX(0deg); opacity: 1; }
  25% { transform: rotateX(90deg); opacity: 0.3; }
  50% { transform: rotateX(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="text-rotate-cascade"><span>C</span><span>A</span><span>S</span><span>C</span><span>A</span></div>`,
    isNew: true,
  },
  {
    id: 'text-zoom-pulse',
    name: 'Text Zoom Pulse',
    category: 'text',
    tags: ['text', 'zoom', 'pulse', 'scale', 'breathing'],
    difficulty: 'beginner',
    description: 'Text that zooms in and out with a pulsing scale animation',
    cssCode: `.text-zoom-pulse {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  background: #0a0a1a;
  padding: 20px;
  animation: zoom-pulse 2s ease-in-out infinite;
  text-shadow: 0 0 20px #10b98144;
}
@keyframes zoom-pulse {
  0%, 100% { transform: scale(1); text-shadow: 0 0 20px #10b98144; }
  50% { transform: scale(1.15); text-shadow: 0 0 40px #10b98166; }
}`,
    htmlCode: `<div class="text-zoom-pulse">PULSE</div>`,
    isNew: true,
  },
  {
    id: 'text-slide-trans',
    name: 'Text Slide Transition',
    category: 'text',
    tags: ['text', 'slide', 'transition', 'swap', 'animated'],
    difficulty: 'intermediate',
    description: 'Text that slides up to reveal new content, looping between two words',
    cssCode: `.text-slide-trans {
  font-size: 1.6rem;
  font-weight: 800;
  height: 2.2rem;
  overflow: hidden;
  background: #0a0a1a;
  padding: 12px 20px;
  color: #10b981;
}
.text-slide-trans-inner {
  animation: slide-word 3s ease-in-out infinite;
}
.text-slide-trans-inner span {
  display: block;
  height: 2.2rem;
  line-height: 2.2rem;
}
.text-slide-trans-inner span:nth-child(2) {
  color: #3b82f6;
}
@keyframes slide-word {
  0%, 40% { transform: translateY(0); }
  50%, 90% { transform: translateY(-2.2rem); }
  100% { transform: translateY(0); }
}`,
    htmlCode: `<div class="text-slide-trans"><div class="text-slide-trans-inner"><span>CREATE</span><span>DESIGN</span></div></div>`,
    isNew: true,
  },
  {
    id: 'text-fold-anim',
    name: 'Text Fold Animation',
    category: 'text',
    tags: ['text', 'fold', 'origami', '3d', 'perspective'],
    difficulty: 'advanced',
    description: 'Text that appears to fold in from a 3D perspective like origami',
    cssCode: `.text-fold-anim {
  font-size: 2rem;
  font-weight: 900;
  background: #0a0a1a;
  padding: 20px;
  perspective: 500px;
  color: #10b981;
}
.text-fold-anim span {
  display: inline-block;
  animation: fold-in 2.5s ease-in-out infinite;
  transform-origin: top center;
}
.text-fold-anim span:nth-child(2) { animation-delay: 0.15s; }
.text-fold-anim span:nth-child(3) { animation-delay: 0.3s; }
.text-fold-anim span:nth-child(4) { animation-delay: 0.45s; }
@keyframes fold-in {
  0%, 10% { transform: rotateX(-90deg); opacity: 0; }
  30%, 70% { transform: rotateX(0deg); opacity: 1; }
  90%, 100% { transform: rotateX(-90deg); opacity: 0; }
}`,
    htmlCode: `<div class="text-fold-anim"><span>F</span><span>O</span><span>L</span><span>D</span></div>`,
    isNew: true,
  },
  {
    id: 'text-peel-fx',
    name: 'Text Peel Effect',
    category: 'text',
    tags: ['text', 'peel', 'curl', '3d', 'transform'],
    difficulty: 'advanced',
    description: 'Text that peels away from the corner with a curling 3D transform',
    cssCode: `.text-peel-fx {
  font-size: 2rem;
  font-weight: 900;
  background: #0a0a1a;
  padding: 20px;
  color: #10b981;
  position: relative;
  display: inline-block;
}
.text-peel-fx::after {
  content: 'PEEL';
  position: absolute;
  inset: 0;
  padding: 20px;
  color: #3b82f6;
  background: linear-gradient(135deg, #0f0f1a 60%, transparent 100%);
  transform-origin: bottom right;
  animation: peel-curl 3s ease-in-out infinite;
}
@keyframes peel-curl {
  0%, 10% { transform: rotateZ(0deg) scale(1); clip-path: inset(0 0 0 0); }
  40%, 60% { transform: rotateZ(-3deg) scale(0.9); clip-path: inset(0 0 30% 30%); }
  90%, 100% { transform: rotateZ(0deg) scale(1); clip-path: inset(0 0 0 0); }
}`,
    htmlCode: `<div class="text-peel-fx">PEEL</div>`,
    isNew: true,
  },
  {
    id: 'text-glitch-variant',
    name: 'Text Glitch Variant',
    category: 'text',
    tags: ['text', 'glitch', 'distortion', 'rgb', 'split'],
    difficulty: 'intermediate',
    description: 'Text with an RGB split glitch effect using pseudo-elements and clip animations',
    cssCode: `.text-glitch-variant {
  font-size: 2rem;
  font-weight: 900;
  color: #e2e8f0;
  background: #0a0a1a;
  padding: 20px;
  position: relative;
}
.text-glitch-variant::before, .text-glitch-variant::after {
  content: 'GLITCH';
  position: absolute;
  left: 20px;
  top: 20px;
}
.text-glitch-variant::before {
  color: #10b981;
  animation: glitch-r 3s infinite;
}
.text-glitch-variant::after {
  color: #3b82f6;
  animation: glitch-b 3s infinite;
}
@keyframes glitch-r {
  0%, 90%, 100% { clip-path: inset(0); transform: translate(0); }
  92% { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 2px); }
  94% { clip-path: inset(50% 0 20% 0); transform: translate(3px, -1px); }
  96% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 1px); }
}
@keyframes glitch-b {
  0%, 90%, 100% { clip-path: inset(0); transform: translate(0); }
  91% { clip-path: inset(60% 0 10% 0); transform: translate(4px, -2px); }
  93% { clip-path: inset(30% 0 40% 0); transform: translate(-3px, 1px); }
  95% { clip-path: inset(70% 0 5% 0); transform: translate(2px, -1px); }
}`,
    htmlCode: `<div class="text-glitch-variant">GLITCH</div>`,
    isNew: true,
  },
  {
    id: 'text-emboss',
    name: 'Text Emboss',
    category: 'text',
    tags: ['text', 'emboss', 'raised', '3d', 'shadow'],
    difficulty: 'intermediate',
    description: 'Text with an embossed raised effect using light and dark shadow combinations',
    cssCode: `.text-emboss {
  font-size: 2.2rem;
  font-weight: 900;
  color: #1a1a2e;
  background: #1a1a2e;
  padding: 20px;
  text-shadow:
    -1px -1px 0 #0a0a1a,
    1px 1px 0 #2a2a3e,
    0 0 8px #10b98133;
  animation: emboss-glow 3s ease-in-out infinite;
}
@keyframes emboss-glow {
  0%, 100% { text-shadow: -1px -1px 0 #0a0a1a,1px 1px 0 #2a2a3e,0 0 8px #10b98133; }
  50% { text-shadow: -1px -1px 0 #0a0a1a,1px 1px 0 #2a2a3e,0 0 20px #10b98166; }
}`,
    htmlCode: `<div class="text-emboss">EMBOSS</div>`,
    isNew: true,
  },
  {
    id: 'text-deboss',
    name: 'Text Deboss',
    category: 'text',
    tags: ['text', 'deboss', 'pressed', 'inset', 'shadow'],
    difficulty: 'intermediate',
    description: 'Text with a debossed pressed-in effect using inset-like shadows',
    cssCode: `.text-deboss {
  font-size: 2.2rem;
  font-weight: 900;
  color: #151525;
  background: #1a1a2e;
  padding: 20px;
  text-shadow:
    1px 1px 0 #2a2a3e,
    -1px -1px 0 #0a0a1a;
  animation: deboss-press 3s ease-in-out infinite;
}
@keyframes deboss-press {
  0%, 100% { text-shadow: 1px 1px 0 #2a2a3e,-1px -1px 0 #0a0a1a; }
  50% { text-shadow: 1px 2px 2px #2a2a3e,-1px -1px 1px #0a0a1a,0 0 15px #10b98144; }
}`,
    htmlCode: `<div class="text-deboss">DEBOSS</div>`,
    isNew: true,
  },
  {
    id: 'text-letterpress',
    name: 'Text Letterpress',
    category: 'text',
    tags: ['text', 'letterpress', 'vintage', 'print', 'classic'],
    difficulty: 'beginner',
    description: 'Text with a classic letterpress printing effect using subtle inset shadows',
    cssCode: `.text-letterpress {
  font-size: 2.2rem;
  font-weight: 900;
  background: #0f0f1a;
  padding: 20px;
  color: #0a0a1a;
  text-shadow:
    0 1px 0 #1a1a2e,
    0 -1px 0 #050510,
    0 0 10px #10b98122;
  border-bottom: 2px solid #10b98133;
  animation: press-glow 2.5s ease-in-out infinite;
}
@keyframes press-glow {
  0%, 100% { border-bottom-color: #10b98133; }
  50% { border-bottom-color: #10b98188; }
}`,
    htmlCode: `<div class="text-letterpress">PRESS</div>`,
    isNew: true,
  },
  {
    id: 'text-neon-pulse',
    name: 'Text Neon Pulse',
    category: 'text',
    tags: ['text', 'neon', 'pulse', 'glow', 'light'],
    difficulty: 'intermediate',
    description: 'Text with a pulsing neon glow that breathes light in and out',
    cssCode: `.text-neon-pulse {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  background: #0a0a1a;
  padding: 20px;
  text-shadow:
    0 0 7px #10b981,
    0 0 10px #10b981,
    0 0 21px #10b981,
    0 0 42px #059669;
  animation: neon-breathe 1.5s ease-in-out infinite alternate;
}
@keyframes neon-breathe {
  from {
    text-shadow: 0 0 4px #10b981,0 0 8px #10b981,0 0 16px #10b981,0 0 24px #059669;
  }
  to {
    text-shadow: 0 0 7px #10b981,0 0 14px #10b981,0 0 28px #10b981,0 0 50px #059669;
  }
}`,
    htmlCode: `<div class="text-neon-pulse">NEON</div>`,
    isNew: true,
  },
  {
    id: 'text-typewriter-var',
    name: 'Text Typewriter Variant',
    category: 'text',
    tags: ['text', 'typewriter', 'typing', 'cursor', 'animated'],
    difficulty: 'intermediate',
    description: 'Text with a typewriter typing effect and blinking cursor using step animation',
    cssCode: `.text-typewriter-var {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: monospace;
  color: #10b981;
  background: #0a0a1a;
  padding: 16px 20px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #10b981;
  animation: type-write 4s steps(12) infinite, cursor-blink 0.7s step-end infinite;
  width: 10ch;
}
@keyframes type-write {
  0%, 10% { width: 0; }
  50%, 70% { width: 10ch; }
  90%, 100% { width: 0; }
}
@keyframes cursor-blink {
  0%, 100% { border-color: #10b981; }
  50% { border-color: transparent; }
}`,
    htmlCode: `<div class="text-typewriter-var">TYPING...</div>`,
    isNew: true,
  },
  {
    id: 'text-marquee-var',
    name: 'Text Marquee Variant',
    category: 'text',
    tags: ['text', 'marquee', 'scroll', 'horizontal', 'loop'],
    difficulty: 'beginner',
    description: 'Text that scrolls horizontally in a continuous marquee loop with gradient fade edges',
    cssCode: `.text-marquee-var {
  background: #0a0a1a;
  padding: 16px 0;
  overflow: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
}
.text-marquee-var span {
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 800;
  color: #10b981;
  white-space: nowrap;
  animation: marquee-scroll 6s linear infinite;
}
@keyframes marquee-scroll {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}`,
    htmlCode: `<div class="text-marquee-var"><span>MARQUEE SCROLL TEXT &nbsp;&nbsp;&bull;&nbsp;&nbsp; CONTINUOUS LOOP &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span></div>`,
    isNew: true,
  },

  // ==================== BUTTONS (20) ====================
  {
    id: 'btn-magnetic-pull',
    name: 'Button Magnetic Pull',
    category: 'buttons',
    tags: ['button', 'magnetic', 'pull', 'hover', 'interactive'],
    difficulty: 'intermediate',
    description: 'Button that subtly shifts toward the cursor with a magnetic pull effect on hover',
    cssCode: `.btn-magnetic-pull {
  padding: 12px 28px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
  box-shadow: 0 4px 12px #10b98144;
}
.btn-magnetic-pull:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 24px #10b98166;
}
.btn-magnetic-pull:active {
  transform: translateY(1px) scale(0.98);
  box-shadow: 0 2px 6px #10b98144;
}`,
    htmlCode: `<button class="btn-magnetic-pull">Magnetic</button>`,
    isNew: true,
  },
  {
    id: 'btn-liquid-fill',
    name: 'Button Liquid Fill',
    category: 'buttons',
    tags: ['button', 'liquid', 'fill', 'wave', 'hover'],
    difficulty: 'advanced',
    description: 'Button with a liquid wave fill that rises from bottom on hover',
    cssCode: `.btn-liquid-fill {
  padding: 12px 28px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.btn-liquid-fill::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #10b981;
  border-radius: 0 0 6px 6px;
  transition: height 0.4s ease;
  z-index: -1;
}
.btn-liquid-fill:hover { color: #fff; }
.btn-liquid-fill:hover::after { height: 100%; border-radius: 6px; }
.btn-liquid-fill:active { transform: scale(0.97); }`,
    htmlCode: `<button class="btn-liquid-fill">Liquid Fill</button>`,
    isNew: true,
  },
  {
    id: 'btn-border-trace',
    name: 'Button Border Trace',
    category: 'buttons',
    tags: ['button', 'border', 'trace', 'draw', 'animated'],
    difficulty: 'advanced',
    description: 'Button with an animated border that traces around the edges on hover using gradient rotation',
    cssCode: `.btn-border-trace {
  padding: 12px 28px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.btn-border-trace::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: conic-gradient(from 0deg, #10b981, transparent 25%, transparent 75%, #10b981);
  z-index: -2;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: border-spin 2s linear infinite;
}
.btn-border-trace::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #0f0f1a;
  border-radius: 8px;
  z-index: -1;
}
.btn-border-trace:hover::before { opacity: 1; }
@keyframes border-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<button class="btn-border-trace">Border Trace</button>`,
    isNew: true,
  },
  {
    id: 'btn-shine-sweep-var',
    name: 'Button Shine Sweep Variant',
    category: 'buttons',
    tags: ['button', 'shine', 'sweep', 'light', 'hover'],
    difficulty: 'intermediate',
    description: 'Button with a diagonal shine light that sweeps across on hover',
    cssCode: `.btn-shine-sweep-var {
  padding: 12px 28px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn-shine-sweep-var::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}
.btn-shine-sweep-var:hover::after { left: 125%; }
.btn-shine-sweep-var:active { transform: scale(0.97); }`,
    htmlCode: `<button class="btn-shine-sweep-var">Shine Sweep</button>`,
    isNew: true,
  },
  {
    id: 'btn-3d-push-var',
    name: 'Button 3D Push Variant',
    category: 'buttons',
    tags: ['button', '3d', 'push', 'depth', 'press'],
    difficulty: 'intermediate',
    description: 'Button with a 3D depth effect that pushes down on click like a physical button',
    cssCode: `.btn-3d-push-var {
  padding: 12px 28px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 0 #059669, 0 8px 16px rgba(0,0,0,0.3);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  transform: translateY(0);
}
.btn-3d-push-var:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #059669, 0 12px 20px rgba(0,0,0,0.3);
}
.btn-3d-push-var:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #059669, 0 3px 8px rgba(0,0,0,0.3);
}`,
    htmlCode: `<button class="btn-3d-push-var">3D Push</button>`,
    isNew: true,
  },
  {
    id: 'btn-slide-fill',
    name: 'Button Slide Fill',
    category: 'buttons',
    tags: ['button', 'slide', 'fill', 'sweep', 'hover'],
    difficulty: 'beginner',
    description: 'Button with a color fill that slides in from the left on hover',
    cssCode: `.btn-slide-fill {
  padding: 12px 28px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-slide-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #10b981;
  z-index: -1;
  transition: left 0.3s ease;
}
.btn-slide-fill:hover { color: #fff; }
.btn-slide-fill:hover::after { left: 0; }`,
    htmlCode: `<button class="btn-slide-fill">Slide Fill</button>`,
    isNew: true,
  },
  {
    id: 'btn-icon-swap',
    name: 'Button Icon Swap',
    category: 'buttons',
    tags: ['button', 'icon', 'swap', 'toggle', 'animated'],
    difficulty: 'intermediate',
    description: 'Button that swaps its icon with a smooth transition on hover',
    cssCode: `.btn-icon-swap {
  padding: 10px 24px;
  background: #1a1a2e;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
}
.btn-icon-swap .icon-a, .btn-icon-swap .icon-b {
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.btn-icon-swap .icon-b {
  position: absolute;
  opacity: 0;
  transform: translateY(20px);
}
.btn-icon-swap:hover .icon-a {
  opacity: 0;
  transform: translateY(-20px);
}
.btn-icon-swap:hover .icon-b {
  opacity: 1;
  transform: translateY(0);
  position: relative;
}
.btn-icon-swap:hover { border-color: #10b981; }`,
    htmlCode: `<button class="btn-icon-swap"><span class="icon-a">➜</span><span class="icon-b">✓</span>Submit</button>`,
    isNew: true,
  },
  {
    id: 'btn-arrow-morph',
    name: 'Button Arrow Morph',
    category: 'buttons',
    tags: ['button', 'arrow', 'morph', 'expand', 'hover'],
    difficulty: 'intermediate',
    description: 'Button that morphs its shape to reveal an arrow on hover, expanding the right side',
    cssCode: `.btn-arrow-morph {
  padding: 12px 28px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: padding-right 0.3s ease, border-radius 0.3s ease;
}
.btn-arrow-morph::after {
  content: '→';
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: right 0.3s ease, opacity 0.3s ease;
  font-size: 1.1rem;
}
.btn-arrow-morph:hover {
  padding-right: 48px;
  border-radius: 8px 16px 16px 8px;
}
.btn-arrow-morph:hover::after {
  right: 14px;
  opacity: 1;
}`,
    htmlCode: `<button class="btn-arrow-morph">Continue</button>`,
    isNew: true,
  },
  {
    id: 'btn-text-shift',
    name: 'Button Text Shift',
    category: 'buttons',
    tags: ['button', 'text', 'shift', 'move', 'hover'],
    difficulty: 'beginner',
    description: 'Button where text shifts right on hover with an arrow appearing',
    cssCode: `.btn-text-shift {
  padding: 12px 28px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.btn-text-shift span {
  display: inline-block;
  transition: transform 0.3s ease;
}
.btn-text-shift:hover { border-color: #10b981; }
.btn-text-shift:hover span { transform: translateX(4px); }
.btn-text-shift:active { transform: scale(0.97); }`,
    htmlCode: `<button class="btn-text-shift"><span>Shift →</span></button>`,
    isNew: true,
  },
  {
    id: 'btn-gradient-sweep',
    name: 'Button Gradient Sweep',
    category: 'buttons',
    tags: ['button', 'gradient', 'sweep', 'colorful', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with an animated gradient that sweeps around the border continuously',
    cssCode: `.btn-gradient-sweep {
  padding: 12px 28px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.btn-gradient-sweep::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: conic-gradient(#10b981, #3b82f6, #8b5cf6, #10b981);
  z-index: -2;
  animation: grad-sweep 2s linear infinite;
}
.btn-gradient-sweep::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #0f0f1a;
  border-radius: 8px;
  z-index: -1;
}
@keyframes grad-sweep { to { transform: rotate(360deg); } }
.btn-gradient-sweep:hover { color: #10b981; }`,
    htmlCode: `<button class="btn-gradient-sweep">Sweep</button>`,
    isNew: true,
  },
  {
    id: 'btn-press-depth',
    name: 'Button Press Depth',
    category: 'buttons',
    tags: ['button', 'press', 'depth', 'shadow', '3d'],
    difficulty: 'beginner',
    description: 'Button with a deep shadow that compresses on press creating a depth effect',
    cssCode: `.btn-press-depth {
  padding: 12px 28px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 24px #10b98122, 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.btn-press-depth:hover {
  box-shadow: 0 12px 32px #10b98133, 0 4px 12px rgba(0,0,0,0.3);
  transform: translateY(-2px);
}
.btn-press-depth:active {
  box-shadow: 0 2px 8px #10b98111, 0 1px 3px rgba(0,0,0,0.3);
  transform: translateY(3px);
}`,
    htmlCode: `<button class="btn-press-depth">Press</button>`,
    isNew: true,
  },
  {
    id: 'btn-bounce-return',
    name: 'Button Bounce Return',
    category: 'buttons',
    tags: ['button', 'bounce', 'spring', 'return', 'click'],
    difficulty: 'intermediate',
    description: 'Button that bounces back with a spring animation after being clicked',
    cssCode: `.btn-bounce-return {
  padding: 12px 28px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s ease;
}
.btn-bounce-return:active {
  transform: scale(0.9);
}
.btn-bounce-return:not(:active) {
  animation: bounce-back 0.5s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes bounce-back {
  0% { transform: scale(0.9); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}
.btn-bounce-return:hover { box-shadow: 0 4px 16px #10b98144; }`,
    htmlCode: `<button class="btn-bounce-return">Bounce</button>`,
    isNew: true,
  },
  {
    id: 'btn-elastic-snap',
    name: 'Button Elastic Snap',
    category: 'buttons',
    tags: ['button', 'elastic', 'snap', 'spring', 'stretch'],
    difficulty: 'intermediate',
    description: 'Button that stretches elastically and snaps back with an overshoot animation',
    cssCode: `.btn-elastic-snap {
  padding: 12px 28px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
}
.btn-elastic-snap:hover {
  animation: elastic-s 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
@keyframes elastic-s {
  0% { transform: scaleX(1) scaleY(1); }
  30% { transform: scaleX(1.2) scaleY(0.85); }
  50% { transform: scaleX(0.9) scaleY(1.1); }
  70% { transform: scaleX(1.05) scaleY(0.97); }
  100% { transform: scaleX(1) scaleY(1); }
}
.btn-elastic-snap:active { transform: scaleX(0.95) scaleY(1.05); }`,
    htmlCode: `<button class="btn-elastic-snap">Elastic</button>`,
    isNew: true,
  },
  {
    id: 'btn-jelly-wobble',
    name: 'Button Jelly Wobble',
    category: 'buttons',
    tags: ['button', 'jelly', 'wobble', 'soft', 'playful'],
    difficulty: 'intermediate',
    description: 'Button that wobbles like jelly with a soft bouncy animation on hover',
    cssCode: `.btn-jelly-wobble {
  padding: 12px 28px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
}
.btn-jelly-wobble:hover {
  animation: jelly-w 0.8s ease;
}
@keyframes jelly-w {
  0% { transform: scale(1,1); }
  20% { transform: scale(1.15,0.85); }
  40% { transform: scale(0.9,1.1); }
  60% { transform: scale(1.06,0.94); }
  80% { transform: scale(0.98,1.02); }
  100% { transform: scale(1,1); }
}`,
    htmlCode: `<button class="btn-jelly-wobble">Jelly</button>`,
    isNew: true,
  },
  {
    id: 'btn-rubber-band',
    name: 'Button Rubber Band',
    category: 'buttons',
    tags: ['button', 'rubber', 'stretch', 'snap', 'animated'],
    difficulty: 'beginner',
    description: 'Button that stretches like a rubber band and snaps back on hover',
    cssCode: `.btn-rubber-band {
  padding: 12px 28px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}
.btn-rubber-band:hover {
  animation: rubber-stretch 0.6s ease;
  background: #10b981;
  color: #fff;
}
@keyframes rubber-stretch {
  0% { transform: scaleX(1); }
  30% { transform: scaleX(1.25); }
  50% { transform: scaleX(0.85); }
  70% { transform: scaleX(1.08); }
  100% { transform: scaleX(1); }
}`,
    htmlCode: `<button class="btn-rubber-band">Rubber</button>`,
    isNew: true,
  },
  {
    id: 'btn-swing-pendulum',
    name: 'Button Swing Pendulum',
    category: 'buttons',
    tags: ['button', 'swing', 'pendulum', 'rotate', 'hover'],
    difficulty: 'intermediate',
    description: 'Button that swings like a pendulum from its top edge on hover',
    cssCode: `.btn-swing-pendulum {
  padding: 12px 28px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transform-origin: top center;
}
.btn-swing-pendulum:hover {
  animation: swing-p 0.8s ease;
}
@keyframes swing-p {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(12deg); }
  40% { transform: rotate(-8deg); }
  60% { transform: rotate(4deg); }
  80% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<button class="btn-swing-pendulum">Swing</button>`,
    isNew: true,
  },
  {
    id: 'btn-spin-reveal',
    name: 'Button Spin Reveal',
    category: 'buttons',
    tags: ['button', 'spin', 'reveal', '3d', 'flip'],
    difficulty: 'advanced',
    description: 'Button that spins 360 degrees to reveal a different color on the back',
    cssCode: `.btn-spin-reveal {
  padding: 12px 28px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn-spin-reveal::after {
  content: 'Revealed!';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  transform: rotateY(90deg);
  transition: transform 0.4s ease;
}
.btn-spin-reveal:hover::after {
  transform: rotateY(0deg);
}`,
    htmlCode: `<button class="btn-spin-reveal">Spin</button>`,
    isNew: true,
  },
  {
    id: 'btn-flip-open',
    name: 'Button Flip Open',
    category: 'buttons',
    tags: ['button', 'flip', 'open', '3d', 'reveal'],
    difficulty: 'advanced',
    description: 'Button that flips open from the top edge to reveal new content underneath',
    cssCode: `.btn-flip-open {
  perspective: 400px;
  width: 130px;
  height: 44px;
}
.btn-flip-open-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}
.btn-flip-open:hover .btn-flip-open-inner {
  transform: rotateX(-90deg);
}
.btn-flip-open-front, .btn-flip-open-back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  backface-visibility: hidden;
}
.btn-flip-open-front {
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
}
.btn-flip-open-back {
  background: #10b981;
  color: #fff;
  transform: rotateX(90deg);
  transform-origin: bottom;
}`,
    htmlCode: `<div class="btn-flip-open"><div class="btn-flip-open-inner"><div class="btn-flip-open-front">Hover me</div><div class="btn-flip-open-back">Flipped!</div></div></div>`,
    isNew: true,
  },
  {
    id: 'btn-unfold',
    name: 'Button Unfold',
    category: 'buttons',
    tags: ['button', 'unfold', 'expand', '3d', 'animated'],
    difficulty: 'advanced',
    description: 'Button that unfolds from the center outward with a 3D opening animation',
    cssCode: `.btn-unfold {
  padding: 12px 28px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.btn-unfold::before, .btn-unfold::after {
  content: '';
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: #10b981;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-unfold::before { left: 0; transform-origin: left; transform: scaleX(0); }
.btn-unfold::after { right: 0; transform-origin: right; transform: scaleX(0); }
.btn-unfold:hover { color: #fff; border-color: #10b981; }
.btn-unfold:hover::before { transform: scaleX(1); }
.btn-unfold:hover::after { transform: scaleX(1); }`,
    htmlCode: `<button class="btn-unfold">Unfold</button>`,
    isNew: true,
  },
  {
    id: 'btn-pop-expand',
    name: 'Button Pop Expand',
    category: 'buttons',
    tags: ['button', 'pop', 'expand', 'scale', 'click'],
    difficulty: 'beginner',
    description: 'Button that pops outward with a scale animation on click then returns',
    cssCode: `.btn-pop-expand {
  padding: 12px 28px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px #10b98133;
}
.btn-pop-expand:active {
  transform: scale(1.15);
  box-shadow: 0 8px 24px #10b98155;
}
.btn-pop-expand:hover {
  box-shadow: 0 6px 20px #10b98144;
  transform: scale(1.02);
}`,
    htmlCode: `<button class="btn-pop-expand">Pop!</button>`,
    isNew: true,
  },

  // ==================== LOADING EFFECTS (20) ====================
  {
    id: 'load-dna-helix',
    name: 'Loading DNA Helix',
    category: 'loading',
    tags: ['loading', 'dna', 'helix', 'science', 'animated'],
    difficulty: 'advanced',
    description: 'A DNA double helix spinner with two intertwining strands of dots',
    cssCode: `.load-dna-helix {
  width: 40px;
  height: 80px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;
}
.load-dna-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: dna-pulse 1.2s ease-in-out infinite;
}
.load-dna-dot:nth-child(odd) { background: #10b981; }
.load-dna-dot:nth-child(even) { background: #3b82f6; }
.load-dna-dot:nth-child(1) { animation-delay: 0s; }
.load-dna-dot:nth-child(2) { animation-delay: 0.15s; }
.load-dna-dot:nth-child(3) { animation-delay: 0.3s; }
.load-dna-dot:nth-child(4) { animation-delay: 0.45s; }
.load-dna-dot:nth-child(5) { animation-delay: 0.6s; }
.load-dna-dot:nth-child(6) { animation-delay: 0.75s; }
.load-dna-dot:nth-child(7) { animation-delay: 0.9s; }
.load-dna-dot:nth-child(8) { animation-delay: 1.05s; }
@keyframes dna-pulse {
  0%, 100% { transform: scale(0.5) translateX(-8px); opacity: 0.4; }
  50% { transform: scale(1) translateX(8px); opacity: 1; }
}`,
    htmlCode: `<div class="load-dna-helix"><div class="load-dna-dot"></div><div class="load-dna-dot"></div><div class="load-dna-dot"></div><div class="load-dna-dot"></div><div class="load-dna-dot"></div><div class="load-dna-dot"></div><div class="load-dna-dot"></div><div class="load-dna-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-atom-orbit',
    name: 'Loading Atom Orbit',
    category: 'loading',
    tags: ['loading', 'atom', 'orbit', 'science', 'spin'],
    difficulty: 'intermediate',
    description: 'An atom-like loader with electrons orbiting around a central nucleus',
    cssCode: `.load-atom-orbit {
  width: 60px;
  height: 60px;
  position: relative;
}
.load-atom-nucleus {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #10b981;
}
.load-atom-ring {
  position: absolute;
  inset: 0;
  border: 2px solid #10b98133;
  border-radius: 50%;
  animation: atom-spin 1.5s linear infinite;
}
.load-atom-ring::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 6px #10b981;
}
.load-atom-ring:nth-child(2) { animation-duration: 2s; transform: rotate(60deg); }
.load-atom-ring:nth-child(3) { animation-duration: 2.5s; transform: rotate(-60deg); }
@keyframes atom-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="load-atom-orbit"><div class="load-atom-nucleus"></div><div class="load-atom-ring"></div><div class="load-atom-ring"></div><div class="load-atom-ring"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-satellite-ring',
    name: 'Loading Satellite Ring',
    category: 'loading',
    tags: ['loading', 'satellite', 'ring', 'orbit', 'space'],
    difficulty: 'intermediate',
    description: 'A satellite orbiting around a central planet ring with trail effect',
    cssCode: `.load-satellite-ring {
  width: 60px;
  height: 60px;
  position: relative;
}
.load-satellite-planet {
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px #10b98166;
}
.load-satellite-orbit {
  position: absolute;
  inset: 0;
  border: 1.5px solid #10b98122;
  border-radius: 50%;
  animation: sat-orbit 1.8s linear infinite;
}
.load-satellite-orbit::after {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 6px #3b82f6, -4px 0 4px #3b82f666;
}
@keyframes sat-orbit { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="load-satellite-ring"><div class="load-satellite-planet"></div><div class="load-satellite-orbit"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-gear-rotation',
    name: 'Loading Gear Rotation',
    category: 'loading',
    tags: ['loading', 'gear', 'rotation', 'mechanical', 'spin'],
    difficulty: 'intermediate',
    description: 'Interlocking gear shapes rotating in opposite directions',
    cssCode: `.load-gear-rotation {
  display: flex;
  align-items: center;
  gap: 2px;
}
.load-gear {
  width: 36px;
  height: 36px;
  border: 4px solid #10b981;
  border-radius: 50%;
  position: relative;
  animation: gear-cw 2s linear infinite;
}
.load-gear::before, .load-gear::after {
  content: '';
  position: absolute;
  background: #10b981;
  border-radius: 2px;
}
.load-gear::before {
  width: 100%;
  height: 6px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.load-gear::after {
  width: 6px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.load-gear:nth-child(2) {
  width: 28px;
  height: 28px;
  border-width: 3px;
  animation: gear-ccw 1.5s linear infinite;
}
@keyframes gear-cw { to { transform: rotate(360deg); } }
@keyframes gear-ccw { to { transform: rotate(-360deg); } }`,
    htmlCode: `<div class="load-gear-rotation"><div class="load-gear"></div><div class="load-gear"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-wave-sine',
    name: 'Loading Wave Sine',
    category: 'loading',
    tags: ['loading', 'wave', 'sine', 'bar', 'animated'],
    difficulty: 'intermediate',
    description: 'Bars that animate in a sine wave pattern creating a smooth oscillating effect',
    cssCode: `.load-wave-sine {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 40px;
}
.load-sine-bar {
  width: 5px;
  height: 10px;
  background: #10b981;
  border-radius: 3px;
  animation: sine-wave 1.2s ease-in-out infinite;
}
.load-sine-bar:nth-child(1) { animation-delay: 0s; }
.load-sine-bar:nth-child(2) { animation-delay: 0.1s; }
.load-sine-bar:nth-child(3) { animation-delay: 0.2s; }
.load-sine-bar:nth-child(4) { animation-delay: 0.3s; }
.load-sine-bar:nth-child(5) { animation-delay: 0.4s; }
.load-sine-bar:nth-child(6) { animation-delay: 0.5s; }
.load-sine-bar:nth-child(7) { animation-delay: 0.6s; }
@keyframes sine-wave {
  0%, 100% { height: 10px; opacity: 0.5; }
  50% { height: 36px; opacity: 1; }
}`,
    htmlCode: `<div class="load-wave-sine"><div class="load-sine-bar"></div><div class="load-sine-bar"></div><div class="load-sine-bar"></div><div class="load-sine-bar"></div><div class="load-sine-bar"></div><div class="load-sine-bar"></div><div class="load-sine-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-pulse-radar',
    name: 'Loading Pulse Radar',
    category: 'loading',
    tags: ['loading', 'pulse', 'radar', 'sonar', 'scan'],
    difficulty: 'advanced',
    description: 'A radar-like pulsing loader with concentric expanding rings',
    cssCode: `.load-pulse-radar {
  width: 60px;
  height: 60px;
  position: relative;
}
.load-radar-center {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.load-radar-ring {
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: radar-expand 2s ease-out infinite;
  opacity: 0;
}
.load-radar-ring:nth-child(2) { animation-delay: 0.6s; }
.load-radar-ring:nth-child(3) { animation-delay: 1.2s; }
@keyframes radar-expand {
  0% { transform: scale(0.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}`,
    htmlCode: `<div class="load-pulse-radar"><div class="load-radar-center"></div><div class="load-radar-ring"></div><div class="load-radar-ring"></div><div class="load-radar-ring"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-scan-line',
    name: 'Loading Scan Line',
    category: 'loading',
    tags: ['loading', 'scan', 'line', 'sweep', 'detect'],
    difficulty: 'intermediate',
    description: 'A scanning line that sweeps across creating a detection-style loader',
    cssCode: `.load-scan-line {
  width: 80px;
  height: 40px;
  background: #0f0f1a;
  border: 1px solid #10b98133;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.load-scan-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #10b981, transparent);
  animation: scan-sweep 1.5s ease-in-out infinite;
  box-shadow: 0 0 12px #10b981;
}
.load-scan-line::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  animation: scan-blink 1.5s ease infinite;
}
@keyframes scan-sweep {
  0% { left: 0; }
  50% { left: calc(100% - 4px); }
  100% { left: 0; }
}
@keyframes scan-blink {
  0%, 40%, 60%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="load-scan-line"></div>`,
    isNew: true,
  },
  {
    id: 'load-circuit-path',
    name: 'Loading Circuit Path',
    category: 'loading',
    tags: ['loading', 'circuit', 'path', 'tech', 'electronic'],
    difficulty: 'advanced',
    description: 'A circuit board-style loader with a signal traveling along a path',
    cssCode: `.load-circuit-path {
  width: 60px;
  height: 60px;
  position: relative;
}
.load-circuit-line {
  position: absolute;
  background: #10b98133;
}
.load-circuit-line:nth-child(1) { top: 50%; left: 0; width: 100%; height: 2px; }
.load-circuit-line:nth-child(2) { top: 0; left: 50%; width: 2px; height: 100%; }
.load-circuit-line:nth-child(3) { top: 20%; left: 20%; width: 60%; height: 2px; transform: rotate(45deg); }
.load-circuit-signal {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  top: calc(50% - 4px);
  left: 0;
  box-shadow: 0 0 8px #10b981;
  animation: circuit-travel 1.5s ease-in-out infinite;
}
@keyframes circuit-travel {
  0% { left: 0; top: calc(50% - 4px); }
  25% { left: calc(50% - 4px); top: 0; }
  50% { left: calc(100% - 8px); top: calc(50% - 4px); }
  75% { left: calc(50% - 4px); top: calc(100% - 8px); }
  100% { left: 0; top: calc(50% - 4px); }
}`,
    htmlCode: `<div class="load-circuit-path"><div class="load-circuit-line"></div><div class="load-circuit-line"></div><div class="load-circuit-line"></div><div class="load-circuit-signal"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-data-stream',
    name: 'Loading Data Stream',
    category: 'loading',
    tags: ['loading', 'data', 'stream', 'binary', 'flow'],
    difficulty: 'intermediate',
    description: 'A data stream loader with lines of data flowing and scrolling',
    cssCode: `.load-data-stream {
  width: 60px;
  height: 50px;
  display: flex;
  gap: 3px;
  overflow: hidden;
}
.load-stream-col {
  display: flex;
  flex-direction: column;
  gap: 3px;
  animation: stream-flow 1s linear infinite;
}
.load-stream-col:nth-child(2) { animation-delay: 0.2s; animation-duration: 0.8s; }
.load-stream-col:nth-child(3) { animation-delay: 0.4s; animation-duration: 1.2s; }
.load-stream-bit {
  width: 6px;
  height: 6px;
  border-radius: 1px;
  animation: bit-flash 0.5s ease-in-out infinite alternate;
}
.load-stream-bit:nth-child(odd) { background: #10b981; }
.load-stream-bit:nth-child(even) { background: #10b98133; }
@keyframes stream-flow {
  from { transform: translateY(0); }
  to { transform: translateY(-18px); }
}
@keyframes bit-flash {
  from { opacity: 0.4; }
  to { opacity: 1; }
}`,
    htmlCode: `<div class="load-data-stream"><div class="load-stream-col"><div class="load-stream-bit"></div><div class="load-stream-bit"></div><div class="load-stream-bit"></div><div class="load-stream-bit"></div></div><div class="load-stream-col"><div class="load-stream-bit"></div><div class="load-stream-bit"></div><div class="load-stream-bit"></div><div class="load-stream-bit"></div></div><div class="load-stream-col"><div class="load-stream-bit"></div><div class="load-stream-bit"></div><div class="load-stream-bit"></div><div class="load-stream-bit"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'load-binary-counter',
    name: 'Loading Binary Counter',
    category: 'loading',
    tags: ['loading', 'binary', 'counter', 'digital', 'tech'],
    difficulty: 'intermediate',
    description: 'A binary counter-style loader with digits flipping through 0 and 1',
    cssCode: `.load-binary-counter {
  font-family: monospace;
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  gap: 4px;
  color: #10b981;
  background: #0a0a1a;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #10b98133;
}
.load-bin-digit {
  animation: bin-flip 0.8s steps(1) infinite;
}
.load-bin-digit:nth-child(2) { animation-delay: 0.1s; }
.load-bin-digit:nth-child(3) { animation-delay: 0.2s; }
.load-bin-digit:nth-child(4) { animation-delay: 0.3s; }
.load-bin-digit:nth-child(5) { animation-delay: 0.4s; }
.load-bin-digit:nth-child(6) { animation-delay: 0.5s; }
@keyframes bin-flip {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
}
.load-bin-digit:nth-child(odd) { animation-duration: 0.6s; }
.load-bin-digit:nth-child(even) { animation-duration: 1s; }`,
    htmlCode: `<div class="load-binary-counter"><span class="load-bin-digit">1</span><span class="load-bin-digit">0</span><span class="load-bin-digit">1</span><span class="load-bin-digit">1</span><span class="load-bin-digit">0</span><span class="load-bin-digit">1</span></div>`,
    isNew: true,
  },
  {
    id: 'load-dot-matrix',
    name: 'Loading Dot Matrix',
    category: 'loading',
    tags: ['loading', 'dot', 'matrix', 'grid', 'wave'],
    difficulty: 'intermediate',
    description: 'A grid of dots that animate in a wave pattern across the matrix',
    cssCode: `.load-dot-matrix {
  display: grid;
  grid-template-columns: repeat(4, 10px);
  gap: 4px;
}
.load-matrix-dot {
  width: 10px;
  height: 10px;
  background: #10b98133;
  border-radius: 50%;
  animation: matrix-wave 1.6s ease-in-out infinite;
}
.load-matrix-dot:nth-child(1) { animation-delay: 0s; }
.load-matrix-dot:nth-child(2) { animation-delay: 0.1s; }
.load-matrix-dot:nth-child(3) { animation-delay: 0.2s; }
.load-matrix-dot:nth-child(4) { animation-delay: 0.3s; }
.load-matrix-dot:nth-child(5) { animation-delay: 0.1s; }
.load-matrix-dot:nth-child(6) { animation-delay: 0.2s; }
.load-matrix-dot:nth-child(7) { animation-delay: 0.3s; }
.load-matrix-dot:nth-child(8) { animation-delay: 0.4s; }
.load-matrix-dot:nth-child(9) { animation-delay: 0.2s; }
.load-matrix-dot:nth-child(10) { animation-delay: 0.3s; }
.load-matrix-dot:nth-child(11) { animation-delay: 0.4s; }
.load-matrix-dot:nth-child(12) { animation-delay: 0.5s; }
@keyframes matrix-wave {
  0%, 100% { background: #10b98133; transform: scale(1); }
  50% { background: #10b981; transform: scale(1.3); }
}`,
    htmlCode: `<div class="load-dot-matrix"><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div><div class="load-matrix-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-brick-build',
    name: 'Loading Brick Build',
    category: 'loading',
    tags: ['loading', 'brick', 'build', 'stack', 'construction'],
    difficulty: 'beginner',
    description: 'Bricks that stack up one by one to build a wall, then reset and repeat',
    cssCode: `.load-brick-build {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
}
.load-brick-row {
  display: flex;
  gap: 2px;
}
.load-brick {
  width: 16px;
  height: 8px;
  background: #10b981;
  border-radius: 1px;
  animation: brick-appear 2.4s ease infinite;
  opacity: 0;
}
.load-brick:nth-child(1) { animation-delay: 0s; }
.load-brick:nth-child(2) { animation-delay: 0.15s; }
.load-brick:nth-child(3) { animation-delay: 0.3s; }
.load-brick-row:nth-child(2) .load-brick:nth-child(1) { animation-delay: 0.45s; }
.load-brick-row:nth-child(2) .load-brick:nth-child(2) { animation-delay: 0.6s; }
.load-brick-row:nth-child(2) .load-brick:nth-child(3) { animation-delay: 0.75s; }
.load-brick-row:nth-child(3) .load-brick:nth-child(1) { animation-delay: 0.9s; }
.load-brick-row:nth-child(3) .load-brick:nth-child(2) { animation-delay: 1.05s; }
.load-brick-row:nth-child(3) .load-brick:nth-child(3) { animation-delay: 1.2s; }
@keyframes brick-appear {
  0%, 5% { opacity: 0; transform: translateY(-8px); }
  15%, 85% { opacity: 1; transform: translateY(0); }
  95%, 100% { opacity: 0; transform: translateY(-8px); }
}`,
    htmlCode: `<div class="load-brick-build"><div class="load-brick-row"><div class="load-brick"></div><div class="load-brick"></div><div class="load-brick"></div></div><div class="load-brick-row"><div class="load-brick"></div><div class="load-brick"></div><div class="load-brick"></div></div><div class="load-brick-row"><div class="load-brick"></div><div class="load-brick"></div><div class="load-brick"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'load-puzzle-piece',
    name: 'Loading Puzzle Piece',
    category: 'loading',
    tags: ['loading', 'puzzle', 'piece', 'assemble', 'grid'],
    difficulty: 'advanced',
    description: 'Puzzle pieces that rotate and slide into position to form a complete shape',
    cssCode: `.load-puzzle-piece {
  display: grid;
  grid-template-columns: repeat(2, 24px);
  gap: 3px;
}
.load-puzzle-cell {
  width: 24px;
  height: 24px;
  background: #10b981;
  border-radius: 4px;
  animation: puzzle-in 2s ease-in-out infinite;
}
.load-puzzle-cell:nth-child(1) { animation-delay: 0s; }
.load-puzzle-cell:nth-child(2) { animation-delay: 0.2s; }
.load-puzzle-cell:nth-child(3) { animation-delay: 0.4s; }
.load-puzzle-cell:nth-child(4) { animation-delay: 0.6s; }
@keyframes puzzle-in {
  0%, 10% { transform: rotate(180deg) scale(0.5); opacity: 0; }
  30%, 70% { transform: rotate(0deg) scale(1); opacity: 1; }
  90%, 100% { transform: rotate(180deg) scale(0.5); opacity: 0; }
}`,
    htmlCode: `<div class="load-puzzle-piece"><div class="load-puzzle-cell"></div><div class="load-puzzle-cell"></div><div class="load-puzzle-cell"></div><div class="load-puzzle-cell"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-mosaic-fill',
    name: 'Loading Mosaic Fill',
    category: 'loading',
    tags: ['loading', 'mosaic', 'fill', 'grid', 'progressive'],
    difficulty: 'intermediate',
    description: 'A mosaic grid that progressively fills with color in a random-like pattern',
    cssCode: `.load-mosaic-fill {
  display: grid;
  grid-template-columns: repeat(4, 12px);
  gap: 2px;
}
.load-mosaic-cell {
  width: 12px;
  height: 12px;
  background: #1a1a2e;
  border-radius: 2px;
  animation: mosaic-fill 2.4s ease infinite;
}
.load-mosaic-cell:nth-child(1) { animation-delay: 0s; }
.load-mosaic-cell:nth-child(2) { animation-delay: 0.08s; }
.load-mosaic-cell:nth-child(3) { animation-delay: 0.16s; }
.load-mosaic-cell:nth-child(4) { animation-delay: 0.24s; }
.load-mosaic-cell:nth-child(5) { animation-delay: 0.32s; }
.load-mosaic-cell:nth-child(6) { animation-delay: 0.4s; }
.load-mosaic-cell:nth-child(7) { animation-delay: 0.48s; }
.load-mosaic-cell:nth-child(8) { animation-delay: 0.56s; }
.load-mosaic-cell:nth-child(9) { animation-delay: 0.64s; }
.load-mosaic-cell:nth-child(10) { animation-delay: 0.72s; }
.load-mosaic-cell:nth-child(11) { animation-delay: 0.8s; }
.load-mosaic-cell:nth-child(12) { animation-delay: 0.88s; }
@keyframes mosaic-fill {
  0%, 5% { background: #1a1a2e; }
  40%, 60% { background: #10b981; }
  95%, 100% { background: #1a1a2e; }
}`,
    htmlCode: `<div class="load-mosaic-fill"><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div><div class="load-mosaic-cell"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-pixel-reveal',
    name: 'Loading Pixel Reveal',
    category: 'loading',
    tags: ['loading', 'pixel', 'reveal', 'retro', '8bit'],
    difficulty: 'beginner',
    description: 'A retro pixel art loader that reveals pixels one by one in sequence',
    cssCode: `.load-pixel-reveal {
  display: grid;
  grid-template-columns: repeat(3, 14px);
  gap: 2px;
}
.load-pixel {
  width: 14px;
  height: 14px;
  background: #10b981;
  animation: pixel-blink 1.8s steps(1) infinite;
  opacity: 0;
}
.load-pixel:nth-child(1) { animation-delay: 0s; }
.load-pixel:nth-child(2) { animation-delay: 0.15s; }
.load-pixel:nth-child(3) { animation-delay: 0.3s; }
.load-pixel:nth-child(4) { animation-delay: 0.45s; }
.load-pixel:nth-child(5) { animation-delay: 0.6s; }
.load-pixel:nth-child(6) { animation-delay: 0.75s; }
.load-pixel:nth-child(7) { animation-delay: 0.9s; }
.load-pixel:nth-child(8) { animation-delay: 1.05s; }
.load-pixel:nth-child(9) { animation-delay: 1.2s; }
@keyframes pixel-blink {
  0%, 5% { opacity: 0; }
  10%, 80% { opacity: 1; }
  85%, 100% { opacity: 0; }
}`,
    htmlCode: `<div class="load-pixel-reveal"><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div><div class="load-pixel"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-block-cascade',
    name: 'Loading Block Cascade',
    category: 'loading',
    tags: ['loading', 'block', 'cascade', 'fall', 'stack'],
    difficulty: 'intermediate',
    description: 'Blocks that cascade down and stack, creating a waterfall-like loading effect',
    cssCode: `.load-block-cascade {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 50px;
}
.load-cascade-block {
  width: 10px;
  background: #10b981;
  border-radius: 2px;
  animation: cascade-fall 1.2s ease-in-out infinite;
}
.load-cascade-block:nth-child(1) { height: 20px; animation-delay: 0s; }
.load-cascade-block:nth-child(2) { height: 30px; animation-delay: 0.15s; }
.load-cascade-block:nth-child(3) { height: 40px; animation-delay: 0.3s; }
.load-cascade-block:nth-child(4) { height: 25px; animation-delay: 0.45s; }
.load-cascade-block:nth-child(5) { height: 35px; animation-delay: 0.6s; }
@keyframes cascade-fall {
  0%, 100% { transform: translateY(-20px); opacity: 0.3; }
  40%, 60% { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="load-block-cascade"><div class="load-cascade-block"></div><div class="load-cascade-block"></div><div class="load-cascade-block"></div><div class="load-cascade-block"></div><div class="load-cascade-block"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-ring-pulse',
    name: 'Loading Ring Pulse',
    category: 'loading',
    tags: ['loading', 'ring', 'pulse', 'circle', 'expand'],
    difficulty: 'beginner',
    description: 'A ring that pulses outward with a breathing expand and contract animation',
    cssCode: `.load-ring-pulse {
  width: 50px;
  height: 50px;
  border: 3px solid #10b981;
  border-radius: 50%;
  animation: ring-breathe 1.2s ease-in-out infinite;
}
@keyframes ring-breathe {
  0% { transform: scale(0.8); border-color: #10b98144; }
  50% { transform: scale(1.2); border-color: #10b981; box-shadow: 0 0 20px #10b98144; }
  100% { transform: scale(0.8); border-color: #10b98144; }
}`,
    htmlCode: `<div class="load-ring-pulse"></div>`,
    isNew: true,
  },
  {
    id: 'load-orb-float',
    name: 'Loading Orb Float',
    category: 'loading',
    tags: ['loading', 'orb', 'float', 'levitate', 'gentle'],
    difficulty: 'beginner',
    description: 'A glowing orb that floats up and down with a gentle levitation animation',
    cssCode: `.load-orb-float {
  width: 40px;
  height: 40px;
  background: radial-gradient(circle at 35% 35%, #34d399, #10b981, #059669);
  border-radius: 50%;
  animation: orb-levitate 2s ease-in-out infinite;
  box-shadow: 0 0 20px #10b98144, 0 8px 24px rgba(0,0,0,0.3);
}
.load-orb-float::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 6px;
  background: #10b98133;
  border-radius: 50%;
  animation: orb-shadow 2s ease-in-out infinite;
}
@keyframes orb-levitate {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes orb-shadow {
  0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.5; }
  50% { transform: translateX(-50%) scale(0.7); opacity: 0.2; }
}`,
    htmlCode: `<div class="load-orb-float"></div>`,
    isNew: true,
  },
  {
    id: 'load-energy-charge',
    name: 'Loading Energy Charge',
    category: 'loading',
    tags: ['loading', 'energy', 'charge', 'battery', 'fill'],
    difficulty: 'intermediate',
    description: 'An energy charging loader that fills up with glowing intensity',
    cssCode: `.load-energy-charge {
  width: 50px;
  height: 26px;
  border: 2px solid #10b981;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.load-energy-charge::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
  background: #10b981;
  border-radius: 0 3px 3px 0;
}
.load-energy-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(0deg, #10b981, #34d399);
  animation: energy-fill-anim 2s ease-in-out infinite;
}
.load-energy-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255,255,255,0.4);
  filter: blur(2px);
}
@keyframes energy-fill-anim {
  0% { height: 0%; }
  80% { height: 100%; }
  100% { height: 0%; }
}`,
    htmlCode: `<div class="load-energy-charge"><div class="load-energy-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'load-spiral-drain',
    name: 'Loading Spiral Drain',
    category: 'loading',
    tags: ['loading', 'spiral', 'drain', 'vortex', 'whirlpool'],
    difficulty: 'advanced',
    description: 'A spiral vortex drain effect with dots swirling inward toward center',
    cssCode: `.load-spiral-drain {
  width: 60px;
  height: 60px;
  position: relative;
}
.load-spiral-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: spiral-in 2s linear infinite;
}
.load-spiral-dot:nth-child(1) { animation-delay: 0s; }
.load-spiral-dot:nth-child(2) { animation-delay: 0.25s; }
.load-spiral-dot:nth-child(3) { animation-delay: 0.5s; }
.load-spiral-dot:nth-child(4) { animation-delay: 0.75s; }
@keyframes spiral-in {
  0% { transform: rotate(0deg) translateX(28px); opacity: 1; }
  80% { opacity: 0.8; }
  100% { transform: rotate(720deg) translateX(0px); opacity: 0; }
}`,
    htmlCode: `<div class="load-spiral-drain"><div class="load-spiral-dot"></div><div class="load-spiral-dot"></div><div class="load-spiral-dot"></div><div class="load-spiral-dot"></div></div>`,
    isNew: true,
  },

  // ==================== CARDS (20) ====================
  {
    id: 'card-peek',
    name: 'Card Peek',
    category: 'cards',
    tags: ['card', 'peek', 'reveal', 'hover', 'slide'],
    difficulty: 'intermediate',
    description: 'Card that slides up slightly on hover to peek at hidden content below',
    cssCode: `.card-peek {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.card-peek-content {
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}
.card-peek-hidden {
  padding: 0 16px;
  color: #10b981;
  font-size: 0.7rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-peek:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.card-peek:hover .card-peek-content { transform: translateY(-4px); }
.card-peek:hover .card-peek-hidden { opacity: 1; }`,
    htmlCode: `<div class="card-peek"><div class="card-peek-content">Hover to peek</div><div class="card-peek-hidden">Hidden content revealed!</div></div>`,
    isNew: true,
  },
  {
    id: 'card-slide-up',
    name: 'Card Slide Up',
    category: 'cards',
    tags: ['card', 'slide', 'up', 'entrance', 'animated'],
    difficulty: 'beginner',
    description: 'Card that slides up from below with a fade-in entrance animation',
    cssCode: `.card-slide-up {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  animation: slide-up-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
@keyframes slide-up-in {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="card-slide-up">Slide Up Card</div>`,
    isNew: true,
  },
  {
    id: 'card-expand-corner',
    name: 'Card Expand Corner',
    category: 'cards',
    tags: ['card', 'expand', 'corner', 'hover', 'reveal'],
    difficulty: 'advanced',
    description: 'Card that expands from a corner with a clip-path animation on hover',
    cssCode: `.card-expand-corner {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.card-expand-corner-content {
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}
.card-expand-corner-overlay {
  position: absolute;
  inset: 0;
  background: #10b98122;
  clip-path: circle(0% at 0% 100%);
  transition: clip-path 0.5s ease;
}
.card-expand-corner:hover .card-expand-corner-overlay {
  clip-path: circle(150% at 0% 100%);
}
.card-expand-corner:hover { border-color: #10b981; }`,
    htmlCode: `<div class="card-expand-corner"><div class="card-expand-corner-content">Expand Corner</div><div class="card-expand-corner-overlay"></div></div>`,
    isNew: true,
  },
  {
    id: 'card-rotate-in',
    name: 'Card Rotate In',
    category: 'cards',
    tags: ['card', 'rotate', 'entrance', '3d', 'animated'],
    difficulty: 'intermediate',
    description: 'Card that rotates in from a 3D perspective as an entrance animation',
    cssCode: `.card-rotate-in {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  animation: rotate-in-card 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: left center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
@keyframes rotate-in-card {
  from { transform: perspective(600px) rotateY(-60deg); opacity: 0; }
  to { transform: perspective(600px) rotateY(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="card-rotate-in">Rotate In</div>`,
    isNew: true,
  },
  {
    id: 'card-fade-up',
    name: 'Card Fade Up',
    category: 'cards',
    tags: ['card', 'fade', 'up', 'entrance', 'smooth'],
    difficulty: 'beginner',
    description: 'Card that fades in while moving upward with a gentle entrance animation',
    cssCode: `.card-fade-up {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  animation: fade-up-in 0.8s ease forwards;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
@keyframes fade-up-in {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="card-fade-up">Fade Up Card</div>`,
    isNew: true,
  },
  {
    id: 'card-blur-in',
    name: 'Card Blur In',
    category: 'cards',
    tags: ['card', 'blur', 'entrance', 'focus', 'animated'],
    difficulty: 'intermediate',
    description: 'Card that transitions from blurred to sharp as an entrance animation',
    cssCode: `.card-blur-in {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  animation: blur-in-card 1s ease forwards;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
@keyframes blur-in-card {
  from { filter: blur(10px); opacity: 0; transform: scale(1.05); }
  to { filter: blur(0); opacity: 1; transform: scale(1); }
}`,
    htmlCode: `<div class="card-blur-in">Blur In Card</div>`,
    isNew: true,
  },
  {
    id: 'card-scale-in',
    name: 'Card Scale In',
    category: 'cards',
    tags: ['card', 'scale', 'entrance', 'zoom', 'animated'],
    difficulty: 'beginner',
    description: 'Card that scales in from zero to full size as an entrance animation',
    cssCode: `.card-scale-in {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  animation: scale-in-card 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
@keyframes scale-in-card {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="card-scale-in">Scale In Card</div>`,
    isNew: true,
  },
  {
    id: 'card-flip-horizontal',
    name: 'Card Flip Horizontal',
    category: 'cards',
    tags: ['card', 'flip', 'horizontal', '3d', 'hover'],
    difficulty: 'advanced',
    description: 'Card that flips horizontally on hover to reveal content on the back',
    cssCode: `.card-flip-h {
  width: 180px;
  height: 120px;
  perspective: 800px;
  cursor: pointer;
}
.card-flip-h-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.card-flip-h:hover .card-flip-h-inner { transform: rotateY(180deg); }
.card-flip-h-front, .card-flip-h-back {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  backface-visibility: hidden;
  border: 1px solid #2a2a3e;
}
.card-flip-h-front { background: #1a1a2e; color: #e2e8f0; }
.card-flip-h-back { background: #10b981; color: #fff; transform: rotateY(180deg); }`,
    htmlCode: `<div class="card-flip-h"><div class="card-flip-h-inner"><div class="card-flip-h-front">Front</div><div class="card-flip-h-back">Back</div></div></div>`,
    isNew: true,
  },
  {
    id: 'card-flip-vertical',
    name: 'Card Flip Vertical',
    category: 'cards',
    tags: ['card', 'flip', 'vertical', '3d', 'hover'],
    difficulty: 'advanced',
    description: 'Card that flips vertically on hover to reveal content on the back',
    cssCode: `.card-flip-v {
  width: 180px;
  height: 120px;
  perspective: 800px;
  cursor: pointer;
}
.card-flip-v-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.card-flip-v:hover .card-flip-v-inner { transform: rotateX(180deg); }
.card-flip-v-front, .card-flip-v-back {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  backface-visibility: hidden;
  border: 1px solid #2a2a3e;
}
.card-flip-v-front { background: #1a1a2e; color: #e2e8f0; }
.card-flip-v-back { background: #3b82f6; color: #fff; transform: rotateX(180deg); }`,
    htmlCode: `<div class="card-flip-v"><div class="card-flip-v-inner"><div class="card-flip-v-front">Front</div><div class="card-flip-v-back">Back</div></div></div>`,
    isNew: true,
  },
  {
    id: 'card-tilt-3d',
    name: 'Card Tilt 3D',
    category: 'cards',
    tags: ['card', 'tilt', '3d', 'perspective', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with a 3D tilt effect that responds to hover with perspective rotation',
    cssCode: `.card-tilt-3d {
  width: 180px;
  height: 120px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
}
.card-tilt-3d:hover {
  transform: perspective(600px) rotateY(8deg) rotateX(-4deg);
  box-shadow: -8px 8px 24px rgba(0,0,0,0.4), 0 0 20px #10b98122;
}
.card-tilt-3d::after {
  content: '';
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}`,
    htmlCode: `<div class="card-tilt-3d">3D Tilt Card</div>`,
    isNew: true,
  },
  {
    id: 'card-glow-hover',
    name: 'Card Glow Hover',
    category: 'cards',
    tags: ['card', 'glow', 'hover', 'neon', 'light'],
    difficulty: 'beginner',
    description: 'Card that emits an emerald glow effect on hover',
    cssCode: `.card-glow-hover {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.card-glow-hover:hover {
  border-color: #10b981;
  box-shadow: 0 0 20px #10b98144, 0 0 40px #10b98122, 0 4px 16px rgba(0,0,0,0.2);
}`,
    htmlCode: `<div class="card-glow-hover">Glow Hover</div>`,
    isNew: true,
  },
  {
    id: 'card-border-animate',
    name: 'Card Border Animate',
    category: 'cards',
    tags: ['card', 'border', 'animate', 'gradient', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with an animated gradient border that rotates around the card on hover',
    cssCode: `.card-border-animate {
  width: 180px;
  height: 120px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 2px;
}
.card-border-animate::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: conic-gradient(#10b981, #3b82f6, #8b5cf6, #10b981);
  z-index: -2;
  opacity: 0;
  animation: border-rotate 3s linear infinite;
  transition: opacity 0.3s ease;
}
.card-border-animate:hover::before { opacity: 1; }
.card-border-animate-inner {
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 1;
  position: relative;
}
@keyframes border-rotate { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="card-border-animate"><div class="card-border-animate-inner">Border Animate</div></div>`,
    isNew: true,
  },
  {
    id: 'card-shimmer',
    name: 'Card Shimmer',
    category: 'cards',
    tags: ['card', 'shimmer', 'shine', 'skeleton', 'loading'],
    difficulty: 'beginner',
    description: 'Card with a shimmer light effect that sweeps across the surface',
    cssCode: `.card-shimmer {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}
.card-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #10b98111, transparent);
  animation: shimmer-sweep 2s ease-in-out infinite;
}
@keyframes shimmer-sweep {
  0% { left: -100%; }
  100% { left: 200%; }
}`,
    htmlCode: `<div class="card-shimmer">Shimmer Card</div>`,
    isNew: true,
  },
  {
    id: 'card-spotlight',
    name: 'Card Spotlight',
    category: 'cards',
    tags: ['card', 'spotlight', 'light', 'focus', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with a spotlight effect that illuminates the content on hover',
    cssCode: `.card-spotlight {
  width: 180px;
  height: 120px;
  background: #0f0f1a;
  border: 1px solid #1a1a2e;
  border-radius: 10px;
  padding: 16px;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.card-spotlight::after {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, #10b98122, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease;
}
.card-spotlight:hover { color: #e2e8f0; border-color: #10b98133; }
.card-spotlight:hover::after { transform: translate(-50%, -50%) scale(2); }`,
    htmlCode: `<div class="card-spotlight">Spotlight Card</div>`,
    isNew: true,
  },
  {
    id: 'card-spotlight-follow',
    name: 'Card Spotlight Follow',
    category: 'cards',
    tags: ['card', 'spotlight', 'follow', 'cursor', 'interactive'],
    difficulty: 'advanced',
    description: 'Card with a spotlight that follows the cursor position within the card',
    cssCode: `.card-spotlight-follow {
  width: 180px;
  height: 120px;
  background: #0f0f1a;
  border: 1px solid #1a1a2e;
  border-radius: 10px;
  padding: 16px;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  --mx: 50%;
  --my: 50%;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.card-spotlight-follow::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #10b98133, transparent 70%);
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: translate(calc(var(--mx) - 50px), calc(var(--my) - 50px));
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: 0;
}
.card-spotlight-follow:hover { color: #e2e8f0; border-color: #10b98133; }
.card-spotlight-follow:hover::after { opacity: 1; }`,
    htmlCode: `<div class="card-spotlight-follow" onmousemove="this.style.setProperty('--mx',event.offsetX+'px');this.style.setProperty('--my',event.offsetY+'px')">Follow Light</div>`,
    isNew: true,
  },
  {
    id: 'card-morph',
    name: 'Card Morph',
    category: 'cards',
    tags: ['card', 'morph', 'shape', 'transform', 'hover'],
    difficulty: 'advanced',
    description: 'Card that morphs its border-radius on hover, changing from square to rounded',
    cssCode: `.card-morph {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border: 2px solid #2a2a3e;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-radius 0.5s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, transform 0.3s ease;
}
.card-morph:hover {
  border-radius: 50%;
  border-color: #10b981;
  transform: scale(1.05);
  box-shadow: 0 0 20px #10b98133;
}`,
    htmlCode: `<div class="card-morph">Morph</div>`,
    isNew: true,
  },
  {
    id: 'card-stack-hover',
    name: 'Card Stack Hover',
    category: 'cards',
    tags: ['card', 'stack', 'hover', 'layers', 'depth'],
    difficulty: 'intermediate',
    description: 'Card that appears to be in a stack and lifts up on hover revealing depth',
    cssCode: `.card-stack-hover {
  width: 180px;
  height: 120px;
  position: relative;
  cursor: pointer;
}
.card-stack-hover::before, .card-stack-hover::after {
  content: '';
  position: absolute;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease;
}
.card-stack-hover::before {
  inset: 4px -4px -4px 4px;
  background: #151525;
  z-index: -1;
}
.card-stack-hover::after {
  inset: 8px -8px -8px 8px;
  background: #101020;
  z-index: -2;
}
.card-stack-hover-main {
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-stack-hover:hover .card-stack-hover-main {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.3);
  border-color: #10b981;
}`,
    htmlCode: `<div class="card-stack-hover"><div class="card-stack-hover-main">Stack Card</div></div>`,
    isNew: true,
  },
  {
    id: 'card-reveal-layer',
    name: 'Card Reveal Layer',
    category: 'cards',
    tags: ['card', 'reveal', 'layer', 'overlay', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with an overlay layer that slides away on hover to reveal content underneath',
    cssCode: `.card-reveal-layer {
  width: 180px;
  height: 120px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.card-reveal-layer-base {
  position: absolute;
  inset: 0;
  background: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 10px;
}
.card-reveal-layer-overlay {
  position: absolute;
  inset: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 10px;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.card-reveal-layer:hover .card-reveal-layer-overlay {
  transform: translateX(100%);
  opacity: 0;
}`,
    htmlCode: `<div class="card-reveal-layer"><div class="card-reveal-layer-base">Revealed!</div><div class="card-reveal-layer-overlay">Hover to reveal</div></div>`,
    isNew: true,
  },
  {
    id: 'card-depth-shadow',
    name: 'Card Depth Shadow',
    category: 'cards',
    tags: ['card', 'depth', 'shadow', 'elevation', 'hover'],
    difficulty: 'beginner',
    description: 'Card that elevates with a deep shadow on hover, creating a floating depth effect',
    cssCode: `.card-depth-shadow {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.card-depth-shadow:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 20px #10b98122;
  border-color: #10b98144;
}`,
    htmlCode: `<div class="card-depth-shadow">Depth Shadow</div>`,
    isNew: true,
  },
  {
    id: 'card-float-hover',
    name: 'Card Float Hover',
    category: 'cards',
    tags: ['card', 'float', 'hover', 'levitate', 'gentle'],
    difficulty: 'intermediate',
    description: 'Card that gently floats up and down with a continuous hover animation',
    cssCode: `.card-float-hover {
  width: 180px;
  height: 120px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
.card-float-hover:hover {
  animation: card-float 1.5s ease-in-out infinite;
  border-color: #10b98144;
  box-shadow: 0 12px 24px #10b98122;
}
@keyframes card-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`,
    htmlCode: `<div class="card-float-hover">Float Hover</div>`,
    isNew: true,
  },
];
