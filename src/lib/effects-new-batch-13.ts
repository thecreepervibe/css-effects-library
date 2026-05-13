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

export const effectsNewBatch13: CSSEffect[] = [
  // ==================== TYPOGRAPHY ART (20) ====================
  {
    id: 'typography-kinetic-text',
    name: 'Kinetic Typography',
    category: 'typography-art',
    tags: ['typography', 'kinetic', 'motion', 'animated'],
    difficulty: 'intermediate',
    description: 'Text that shifts and morphs with kinetic motion patterns',
    cssCode: `.kinetic-text {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  letter-spacing: 0.05em;
  animation: kinetic-shift 3s ease-in-out infinite;
}
@keyframes kinetic-shift {
  0% { transform: skewX(0deg) scaleX(1); letter-spacing: 0.05em; }
  25% { transform: skewX(-8deg) scaleX(1.05); letter-spacing: 0.15em; }
  50% { transform: skewX(0deg) scaleX(1); letter-spacing: 0.05em; }
  75% { transform: skewX(8deg) scaleX(0.95); letter-spacing: -0.02em; }
  100% { transform: skewX(0deg) scaleX(1); letter-spacing: 0.05em; }
}`,
    htmlCode: `<div class="kinetic-text">KINETIC</div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-stretch',
    name: 'Letter Stretch',
    category: 'typography-art',
    tags: ['typography', 'stretch', 'letters', 'animated'],
    difficulty: 'beginner',
    description: 'Individual letters stretch and compress in a wave pattern',
    cssCode: `.letter-stretch {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
}
.letter-stretch span {
  display: inline-block;
  animation: stretch-wave 2s ease-in-out infinite;
}
.letter-stretch span:nth-child(1) { animation-delay: 0s; }
.letter-stretch span:nth-child(2) { animation-delay: 0.15s; }
.letter-stretch span:nth-child(3) { animation-delay: 0.3s; }
.letter-stretch span:nth-child(4) { animation-delay: 0.45s; }
.letter-stretch span:nth-child(5) { animation-delay: 0.6s; }
@keyframes stretch-wave {
  0%, 100% { transform: scaleY(1) scaleX(1); }
  50% { transform: scaleY(1.6) scaleX(0.7); }
}`,
    htmlCode: `<div class="letter-stretch"><span>S</span><span>T</span><span>R</span><span>E</span><span>T</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-word-morph',
    name: 'Word Morphing',
    category: 'typography-art',
    tags: ['typography', 'morph', 'transform', 'animated'],
    difficulty: 'advanced',
    description: 'Text that morphs between different font weights and styles',
    cssCode: `.word-morph {
  font-size: 2.2rem;
  color: #10b981;
  animation: morph-style 4s ease-in-out infinite;
  text-transform: uppercase;
}
@keyframes morph-style {
  0% { font-weight: 100; letter-spacing: 0.3em; font-style: normal; opacity: 0.7; }
  25% { font-weight: 400; letter-spacing: 0.1em; font-style: italic; opacity: 0.9; }
  50% { font-weight: 900; letter-spacing: -0.02em; font-style: normal; opacity: 1; }
  75% { font-weight: 600; letter-spacing: 0.15em; font-style: italic; opacity: 0.85; }
  100% { font-weight: 100; letter-spacing: 0.3em; font-style: normal; opacity: 0.7; }
}`,
    htmlCode: `<div class="word-morph">MORPH</div>`,
    isNew: true,
  },
  {
    id: 'typography-text-explosion',
    name: 'Text Explosion',
    category: 'typography-art',
    tags: ['typography', 'explosion', 'scatter', 'animated'],
    difficulty: 'advanced',
    description: 'Letters explode outward from center then reassemble',
    cssCode: `.text-explosion {
  display: flex;
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  position: relative;
}
.text-explosion span {
  display: inline-block;
  animation: explode-out 3s ease-in-out infinite;
}
.text-explosion span:nth-child(1) { animation-delay: 0s; }
.text-explosion span:nth-child(2) { animation-delay: 0.1s; }
.text-explosion span:nth-child(3) { animation-delay: 0.2s; }
.text-explosion span:nth-child(4) { animation-delay: 0.3s; }
@keyframes explode-out {
  0%, 40%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  15% { transform: translate(var(--tx, 30px), var(--ty, -20px)) rotate(var(--r, 45deg)); opacity: 0.3; }
}`,
    htmlCode: `<div class="text-explosion"><span style="--tx:-40px;--ty:-30px;--r:-30deg">B</span><span style="--tx:10px;--ty:-45px;--r:20deg">O</span><span style="--tx:35px;--ty:-15px;--r:-40deg">O</span><span style="--tx:-20px;--ty:25px;--r:60deg">M</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-spacing-anim',
    name: 'Letter Spacing Animation',
    category: 'typography-art',
    tags: ['typography', 'spacing', 'tracking', 'animated'],
    difficulty: 'beginner',
    description: 'Text with dynamically animating letter spacing',
    cssCode: `.spacing-anim {
  font-size: 1.8rem;
  font-weight: 700;
  color: #10b981;
  text-transform: uppercase;
  animation: spacing-breathe 3s ease-in-out infinite;
}
@keyframes spacing-breathe {
  0%, 100% { letter-spacing: 0.05em; opacity: 1; }
  50% { letter-spacing: 0.5em; opacity: 0.7; }
}`,
    htmlCode: `<div class="spacing-anim">BREATHE</div>`,
    isNew: true,
  },
  {
    id: 'typography-word-reveal',
    name: 'Word Reveal',
    category: 'typography-art',
    tags: ['typography', 'reveal', 'clip', 'animated'],
    difficulty: 'intermediate',
    description: 'Text revealed by an animated clip-path sliding across',
    cssCode: `.word-reveal {
  font-size: 2.2rem;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(90deg, #10b981, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  clip-path: inset(0 100% 0 0);
  animation: reveal-slide 3s ease-in-out infinite;
}
@keyframes reveal-slide {
  0% { clip-path: inset(0 100% 0 0); }
  40% { clip-path: inset(0 0 0 0); }
  60% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 100% 0 0); }
}`,
    htmlCode: `<div class="word-reveal">REVEAL</div>`,
    isNew: true,
  },
  {
    id: 'typography-character-rotate',
    name: 'Character Rotation',
    category: 'typography-art',
    tags: ['typography', 'rotate', '3d', 'animated'],
    difficulty: 'intermediate',
    description: 'Individual characters rotate on their axis in sequence',
    cssCode: `.char-rotate {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  perspective: 400px;
}
.char-rotate span {
  display: inline-block;
  animation: char-flip 2.5s ease-in-out infinite;
}
.char-rotate span:nth-child(1) { animation-delay: 0s; }
.char-rotate span:nth-child(2) { animation-delay: 0.2s; }
.char-rotate span:nth-child(3) { animation-delay: 0.4s; }
.char-rotate span:nth-child(4) { animation-delay: 0.6s; }
@keyframes char-flip {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(360deg); }
}`,
    htmlCode: `<div class="char-rotate"><span>S</span><span>P</span><span>I</span><span>N</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-path',
    name: 'Text Path Following',
    category: 'typography-art',
    tags: ['typography', 'path', 'circle', 'animated'],
    difficulty: 'advanced',
    description: 'Text following a circular path that rotates continuously',
    cssCode: `.text-path-wrap {
  width: 160px;
  height: 160px;
  animation: path-spin 8s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-path-wrap svg {
  width: 100%;
  height: 100%;
}
.text-path-text {
  fill: #10b981;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.text-path-center {
  fill: #10b98144;
  font-size: 28px;
  font-weight: 900;
}
@keyframes path-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="text-path-wrap"><svg viewBox="0 0 200 200"><defs><path id="cp" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"/></defs><text class="text-path-text"><textPath href="#cp">CREATIVE DESIGNS FOREVER ✦ </textPath></text><text x="100" y="110" text-anchor="middle" class="text-path-center">ART</text></svg></div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-rain',
    name: 'Letter Rain',
    category: 'typography-art',
    tags: ['typography', 'rain', 'fall', 'animated'],
    difficulty: 'intermediate',
    description: 'Letters falling like rain with staggered timing',
    cssCode: `.letter-rain {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  overflow: hidden;
  height: 60px;
  align-items: flex-start;
}
.letter-rain span {
  display: inline-block;
  animation: rain-drop 2s ease-in infinite;
}
.letter-rain span:nth-child(1) { animation-delay: 0s; }
.letter-rain span:nth-child(2) { animation-delay: 0.25s; }
.letter-rain span:nth-child(3) { animation-delay: 0.5s; }
.letter-rain span:nth-child(4) { animation-delay: 0.75s; }
.letter-rain span:nth-child(5) { animation-delay: 1s; }
@keyframes rain-drop {
  0% { transform: translateY(-60px); opacity: 0; }
  30% { transform: translateY(0); opacity: 1; }
  60% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(60px); opacity: 0; }
}`,
    htmlCode: `<div class="letter-rain"><span>R</span><span>A</span><span>I</span><span>N</span><span>S</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-word-puzzle',
    name: 'Word Puzzle',
    category: 'typography-art',
    tags: ['typography', 'puzzle', 'rearrange', 'animated'],
    difficulty: 'advanced',
    description: 'Letters rearrange themselves from scrambled to correct order',
    cssCode: `.word-puzzle {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  gap: 4px;
}
.word-puzzle span {
  display: inline-block;
  animation: puzzle-solve 4s ease-in-out infinite;
}
.word-puzzle span:nth-child(1) { animation-delay: 0s; }
.word-puzzle span:nth-child(2) { animation-delay: 0.3s; }
.word-puzzle span:nth-child(3) { animation-delay: 0.6s; }
.word-puzzle span:nth-child(4) { animation-delay: 0.9s; }
@keyframes puzzle-solve {
  0%, 20% { transform: translate(var(--sx, 0), var(--sy, 0)) rotate(var(--sr, 0deg)); opacity: 0.4; }
  50%, 80% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate(var(--sx, 0), var(--sy, 0)) rotate(var(--sr, 0deg)); opacity: 0.4; }
}`,
    htmlCode: `<div class="word-puzzle"><span style="--sx:40px;--sy:-20px;--sr:25deg">S</span><span style="--sx:-30px;--sy:15px;--sr:-15deg">O</span><span style="--sx:25px;--sy:30px;--sr:40deg">L</span><span style="--sx:-35px;--sy:-25px;--sr:-30deg">V</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-distortion',
    name: 'Text Distortion',
    category: 'typography-art',
    tags: ['typography', 'distortion', 'glitch', 'animated'],
    difficulty: 'intermediate',
    description: 'Text with a continuous distortion wave effect',
    cssCode: `.text-distort {
  font-size: 2.2rem;
  font-weight: 900;
  color: #10b981;
  position: relative;
  text-transform: uppercase;
}
.text-distort::before, .text-distort::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-distort::before {
  color: #3b82f6;
  animation: distort-1 2s infinite;
  clip-path: inset(0 0 60% 0);
}
.text-distort::after {
  color: #8b5cf6;
  animation: distort-2 2s infinite;
  clip-path: inset(60% 0 0 0);
}
@keyframes distort-1 {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(-3px, 2px); }
  75% { transform: translate(3px, -2px); }
}
@keyframes distort-2 {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(3px, -1px); }
  75% { transform: translate(-3px, 1px); }
}`,
    htmlCode: `<div class="text-distort" data-text="WARP">WARP</div>`,
    isNew: true,
  },
  {
    id: 'typography-character-bounce',
    name: 'Character Bounce',
    category: 'typography-art',
    tags: ['typography', 'bounce', 'playful', 'animated'],
    difficulty: 'beginner',
    description: 'Letters bouncing up and down in a staggered wave',
    cssCode: `.char-bounce {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
}
.char-bounce span {
  display: inline-block;
  animation: char-bounce-up 1.5s ease-in-out infinite;
}
.char-bounce span:nth-child(1) { animation-delay: 0s; }
.char-bounce span:nth-child(2) { animation-delay: 0.1s; }
.char-bounce span:nth-child(3) { animation-delay: 0.2s; }
.char-bounce span:nth-child(4) { animation-delay: 0.3s; }
.char-bounce span:nth-child(5) { animation-delay: 0.4s; }
@keyframes char-bounce-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}`,
    htmlCode: `<div class="char-bounce"><span>B</span><span>O</span><span>U</span><span>N</span><span>C</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-word-wave',
    name: 'Word Wave',
    category: 'typography-art',
    tags: ['typography', 'wave', 'sine', 'animated'],
    difficulty: 'intermediate',
    description: 'Letters flowing in a smooth sine wave pattern',
    cssCode: `.word-wave {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
}
.word-wave span {
  display: inline-block;
  animation: sine-wave 2s ease-in-out infinite;
}
.word-wave span:nth-child(1) { animation-delay: 0s; }
.word-wave span:nth-child(2) { animation-delay: 0.15s; }
.word-wave span:nth-child(3) { animation-delay: 0.3s; }
.word-wave span:nth-child(4) { animation-delay: 0.45s; }
.word-wave span:nth-child(5) { animation-delay: 0.6s; }
@keyframes sine-wave {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-12px); }
  75% { transform: translateY(12px); }
}`,
    htmlCode: `<div class="word-wave"><span>W</span><span>A</span><span>V</span><span>E</span><span>S</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-cascade',
    name: 'Letter Cascade',
    category: 'typography-art',
    tags: ['typography', 'cascade', 'fall', 'animated'],
    difficulty: 'intermediate',
    description: 'Letters cascading down with increasing delay',
    cssCode: `.letter-cascade {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  overflow: hidden;
  height: 60px;
  align-items: flex-end;
}
.letter-cascade span {
  display: inline-block;
  animation: cascade-fall 3s ease-in-out infinite;
}
.letter-cascade span:nth-child(1) { animation-delay: 0s; }
.letter-cascade span:nth-child(2) { animation-delay: 0.4s; }
.letter-cascade span:nth-child(3) { animation-delay: 0.8s; }
.letter-cascade span:nth-child(4) { animation-delay: 1.2s; }
@keyframes cascade-fall {
  0% { transform: translateY(-80px); opacity: 0; }
  20% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(80px); opacity: 0; }
}`,
    htmlCode: `<div class="letter-cascade"><span>F</span><span>A</span><span>L</span><span>L</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-mosaic',
    name: 'Text Mosaic',
    category: 'typography-art',
    tags: ['typography', 'mosaic', 'color', 'animated'],
    difficulty: 'intermediate',
    description: 'Text with shifting mosaic color pattern across letters',
    cssCode: `.text-mosaic {
  display: flex;
  font-size: 2rem;
  font-weight: 900;
}
.text-mosaic span {
  display: inline-block;
  animation: mosaic-color 3s ease-in-out infinite;
  color: #10b981;
}
.text-mosaic span:nth-child(1) { animation-delay: 0s; }
.text-mosaic span:nth-child(2) { animation-delay: 0.2s; }
.text-mosaic span:nth-child(3) { animation-delay: 0.4s; }
.text-mosaic span:nth-child(4) { animation-delay: 0.6s; }
.text-mosaic span:nth-child(5) { animation-delay: 0.8s; }
@keyframes mosaic-color {
  0%, 100% { color: #10b981; text-shadow: 0 0 8px #10b98144; }
  33% { color: #3b82f6; text-shadow: 0 0 8px #3b82f644; }
  66% { color: #8b5cf6; text-shadow: 0 0 8px #8b5cf644; }
}`,
    htmlCode: `<div class="text-mosaic"><span>M</span><span>O</span><span>S</span><span>A</span><span>C</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-character-flip',
    name: 'Character Flip',
    category: 'typography-art',
    tags: ['typography', 'flip', '3d', 'animated'],
    difficulty: 'intermediate',
    description: 'Letters flipping on the X axis one by one',
    cssCode: `.char-flip {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  perspective: 500px;
}
.char-flip span {
  display: inline-block;
  animation: flip-x 2.5s ease-in-out infinite;
  transform-origin: center bottom;
}
.char-flip span:nth-child(1) { animation-delay: 0s; }
.char-flip span:nth-child(2) { animation-delay: 0.2s; }
.char-flip span:nth-child(3) { animation-delay: 0.4s; }
.char-flip span:nth-child(4) { animation-delay: 0.6s; }
@keyframes flip-x {
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(360deg); }
}`,
    htmlCode: `<div class="char-flip"><span>F</span><span>L</span><span>I</span><span>P</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-word-spiral',
    name: 'Word Spiral',
    category: 'typography-art',
    tags: ['typography', 'spiral', 'rotation', 'animated'],
    difficulty: 'advanced',
    description: 'Text rotating and scaling in a spiral pattern',
    cssCode: `.word-spiral {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  animation: spiral-motion 4s ease-in-out infinite;
  text-transform: uppercase;
}
@keyframes spiral-motion {
  0% { transform: rotate(0deg) scale(1); opacity: 1; }
  25% { transform: rotate(90deg) scale(0.8); opacity: 0.8; }
  50% { transform: rotate(180deg) scale(0.5); opacity: 0.5; }
  75% { transform: rotate(270deg) scale(0.8); opacity: 0.8; }
  100% { transform: rotate(360deg) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="word-spiral">SPIRAL</div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-scatter',
    name: 'Letter Scatter',
    category: 'typography-art',
    tags: ['typography', 'scatter', 'disperse', 'hover'],
    difficulty: 'advanced',
    description: 'Letters scatter away on hover then reassemble',
    cssCode: `.letter-scatter {
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  cursor: pointer;
}
.letter-scatter span {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s;
}
.letter-scatter:hover span:nth-child(1) { transform: translate(-25px, -20px) rotate(-15deg); opacity: 0.4; }
.letter-scatter:hover span:nth-child(2) { transform: translate(15px, -30px) rotate(20deg); opacity: 0.4; }
.letter-scatter:hover span:nth-child(3) { transform: translate(-10px, 25px) rotate(-25deg); opacity: 0.4; }
.letter-scatter:hover span:nth-child(4) { transform: translate(30px, 15px) rotate(30deg); opacity: 0.4; }
.letter-scatter:hover span:nth-child(5) { transform: translate(-20px, -15px) rotate(-10deg); opacity: 0.4; }`,
    htmlCode: `<div class="letter-scatter"><span>S</span><span>C</span><span>A</span><span>T</span></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-breathing',
    name: 'Text Breathing',
    category: 'typography-art',
    tags: ['typography', 'breathe', 'pulse', 'subtle'],
    difficulty: 'beginner',
    description: 'Text that gently scales up and down like breathing',
    cssCode: `.text-breathe {
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  animation: breathe-scale 4s ease-in-out infinite;
  text-shadow: 0 0 20px #10b98133;
}
@keyframes breathe-scale {
  0%, 100% { transform: scale(1); opacity: 0.85; text-shadow: 0 0 20px #10b98122; }
  50% { transform: scale(1.08); opacity: 1; text-shadow: 0 0 40px #10b98144; }
}`,
    htmlCode: `<div class="text-breathe">BREATHE</div>`,
    isNew: true,
  },
  {
    id: 'typography-character-orbit',
    name: 'Character Orbit',
    category: 'typography-art',
    tags: ['typography', 'orbit', 'circular', 'animated'],
    difficulty: 'advanced',
    description: 'Letters orbiting around a center point in a circle',
    cssCode: `.char-orbit-wrap {
  width: 120px;
  height: 120px;
  position: relative;
  animation: orbit-container 6s linear infinite;
}
.char-orbit-wrap span {
  position: absolute;
  font-size: 1.2rem;
  font-weight: 800;
  color: #10b981;
}
.char-orbit-wrap span:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.char-orbit-wrap span:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
.char-orbit-wrap span:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
.char-orbit-wrap span:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }
.char-orbit-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 12px #10b981;
  animation: orbit-container 6s linear infinite reverse;
}
@keyframes orbit-container {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="char-orbit-wrap"><span>O</span><span>R</span><span>B</span><span>I</span><div class="char-orbit-center"></div></div>`,
    isNew: true,
  },

  // ==================== DECORATIVE ELEMENTS (20) ====================
  {
    id: 'decorative-border-ornament',
    name: 'Decorative Border',
    category: 'decorative',
    tags: ['decorative', 'border', 'ornament', 'animated'],
    difficulty: 'intermediate',
    description: 'Elegant animated decorative border with corner accents',
    cssCode: `.deco-border {
  padding: 24px;
  position: relative;
  color: #e2e8f0;
  font-size: 0.9rem;
  text-align: center;
}
.deco-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 4px;
  animation: border-glow-pulse 3s ease-in-out infinite;
}
.deco-border::after {
  content: '◆';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  color: #10b981;
  background: #0a0a1a;
  padding: 0 8px;
  font-size: 0.7rem;
}
@keyframes border-glow-pulse {
  0%, 100% { box-shadow: 0 0 4px #10b98144; }
  50% { box-shadow: 0 0 12px #10b98166; }
}`,
    htmlCode: `<div class="deco-border">Ornamental</div>`,
    isNew: true,
  },
  {
    id: 'decorative-corner-ornament',
    name: 'Ornamental Corners',
    category: 'decorative',
    tags: ['decorative', 'corner', 'ornament', 'frame'],
    difficulty: 'intermediate',
    description: 'Decorative corner ornaments framing content',
    cssCode: `.deco-corners {
  padding: 28px;
  position: relative;
  color: #e2e8f0;
  font-size: 0.9rem;
}
.deco-corners::before, .deco-corners::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: #10b981;
  border-style: solid;
}
.deco-corners::before {
  top: 0; left: 0;
  border-width: 2px 0 0 2px;
}
.deco-corners::after {
  bottom: 0; right: 0;
  border-width: 0 2px 2px 0;
}
.deco-corners-extra::before, .deco-corners-extra::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: #10b981;
  border-style: solid;
}
.deco-corners-extra::before {
  top: 0; right: 0;
  border-width: 2px 2px 0 0;
}
.deco-corners-extra::after {
  bottom: 0; left: 0;
  border-width: 0 0 2px 2px;
}`,
    htmlCode: `<div class="deco-corners"><div class="deco-corners-extra" style="position:absolute;inset:0;pointer-events:none"></div>Framed</div>`,
    isNew: true,
  },
  {
    id: 'decorative-filigree',
    name: 'Filigree Pattern',
    category: 'decorative',
    tags: ['decorative', 'filigree', 'pattern', 'elegant'],
    difficulty: 'advanced',
    description: 'Intricate filigree pattern with animated drawing effect',
    cssCode: `.filigree {
  width: 160px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filigree-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  position: relative;
}
.filigree-line::before, .filigree-line::after {
  content: '❧';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #10b981;
  font-size: 1.2rem;
  animation: filigree-breathe 3s ease-in-out infinite;
}
.filigree-line::before { left: -8px; }
.filigree-line::after { right: -8px; transform: translateY(-50%) scaleX(-1); }
@keyframes filigree-breathe {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="filigree"><div class="filigree-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-art-nouveau',
    name: 'Art Nouveau Frame',
    category: 'decorative',
    tags: ['decorative', 'art-nouveau', 'frame', 'organic'],
    difficulty: 'advanced',
    description: 'Art nouveau inspired organic frame with flowing curves',
    cssCode: `.art-nouveau {
  padding: 28px 32px;
  position: relative;
  color: #e2e8f0;
  font-size: 0.9rem;
  border-radius: 50% 50% 50% 50% / 12% 12% 12% 12%;
  border: 2px solid #10b981;
  overflow: hidden;
}
.art-nouveau::before {
  content: '~-~-~';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  color: #10b981;
  font-size: 1rem;
  letter-spacing: 0.5em;
  animation: nouveau-shimmer 4s ease-in-out infinite;
}
@keyframes nouveau-shimmer {
  0%, 100% { opacity: 0.5; filter: hue-rotate(0deg); }
  50% { opacity: 1; filter: hue-rotate(20deg); }
}`,
    htmlCode: `<div class="art-nouveau">Art Nouveau</div>`,
    isNew: true,
  },
  {
    id: 'decorative-geometric-ornament',
    name: 'Geometric Ornament',
    category: 'decorative',
    tags: ['decorative', 'geometric', 'ornament', 'pattern'],
    difficulty: 'intermediate',
    description: 'Rotating geometric ornament pattern',
    cssCode: `.geo-ornament {
  width: 80px;
  height: 80px;
  position: relative;
  animation: geo-rotate 12s linear infinite;
}
.geo-ornament::before, .geo-ornament::after {
  content: '';
  position: absolute;
  inset: 10px;
  border: 2px solid #10b981;
}
.geo-ornament::before {
  transform: rotate(45deg);
  border-radius: 0;
  animation: geo-pulse 3s ease-in-out infinite;
}
.geo-ornament::after {
  border-radius: 50%;
  inset: 20px;
  animation: geo-pulse 3s ease-in-out infinite 1.5s;
}
@keyframes geo-rotate { to { transform: rotate(360deg); } }
@keyframes geo-pulse {
  0%, 100% { border-color: #10b981; }
  50% { border-color: #34d399; }
}`,
    htmlCode: `<div class="geo-ornament"></div>`,
    isNew: true,
  },
  {
    id: 'decorative-mandala',
    name: 'Mandala Pattern',
    category: 'decorative',
    tags: ['decorative', 'mandala', 'symmetry', 'animated'],
    difficulty: 'advanced',
    description: 'Animated mandala pattern with rotating layers',
    cssCode: `.mandala {
  width: 100px;
  height: 100px;
  position: relative;
}
.mandala-layer {
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: mandala-spin 8s linear infinite;
}
.mandala-layer:nth-child(1) { inset: 0; border-style: dashed; }
.mandala-layer:nth-child(2) { inset: 10px; animation-direction: reverse; animation-duration: 6s; }
.mandala-layer:nth-child(3) { inset: 20px; border-style: dotted; animation-duration: 10s; }
.mandala-layer:nth-child(4) { inset: 30px; animation-direction: reverse; animation-duration: 4s; }
.mandala-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 10px; height: 10px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
}
@keyframes mandala-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="mandala"><div class="mandala-layer"></div><div class="mandala-layer"></div><div class="mandala-layer"></div><div class="mandala-layer"></div><div class="mandala-center"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-celtic-knot',
    name: 'Celtic Knot',
    category: 'decorative',
    tags: ['decorative', 'celtic', 'knot', 'woven'],
    difficulty: 'advanced',
    description: 'Interlocking Celtic knot pattern with animated drawing',
    cssCode: `.celtic-knot {
  width: 80px;
  height: 80px;
  position: relative;
}
.celtic-ring {
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top-color: #10b981;
  border-radius: 50%;
  animation: celtic-rotate 4s linear infinite;
}
.celtic-ring:nth-child(2) {
  border-top-color: #34d399;
  animation-duration: 6s;
  animation-direction: reverse;
  inset: 8px;
}
.celtic-ring:nth-child(3) {
  border-top-color: #6ee7b7;
  animation-duration: 3s;
  inset: 16px;
}
.celtic-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 16px; height: 16px;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: celtic-rotate 5s linear infinite reverse;
}
@keyframes celtic-rotate { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="celtic-knot"><div class="celtic-ring"></div><div class="celtic-ring"></div><div class="celtic-ring"></div><div class="celtic-center"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-art-deco-line',
    name: 'Art Deco Lines',
    category: 'decorative',
    tags: ['decorative', 'art-deco', 'lines', 'retro'],
    difficulty: 'intermediate',
    description: 'Art deco inspired symmetrical line decoration',
    cssCode: `.art-deco {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.art-deco-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #10b981);
  position: relative;
}
.art-deco-line:last-child {
  background: linear-gradient(90deg, #10b981, transparent);
}
.art-deco-diamond {
  width: 8px;
  height: 8px;
  background: #10b981;
  transform: rotate(45deg);
  animation: deco-glow 2s ease-in-out infinite;
}
@keyframes deco-glow {
  0%, 100% { box-shadow: 0 0 4px #10b98144; }
  50% { box-shadow: 0 0 12px #10b98188; }
}`,
    htmlCode: `<div class="art-deco"><div class="art-deco-line"></div><div class="art-deco-diamond"></div>DECO<div class="art-deco-diamond"></div><div class="art-deco-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-flourish-divider',
    name: 'Flourish Divider',
    category: 'decorative',
    tags: ['decorative', 'flourish', 'divider', 'elegant'],
    difficulty: 'beginner',
    description: 'Elegant flourish divider with animated center ornament',
    cssCode: `.flourish {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.flourish-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #10b98144);
}
.flourish-line:last-child {
  background: linear-gradient(90deg, #10b98144, transparent);
}
.flourish-center {
  color: #10b981;
  font-size: 1.4rem;
  animation: flourish-spin 6s linear infinite;
}
@keyframes flourish-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="flourish"><div class="flourish-line"></div><div class="flourish-center">✦</div><div class="flourish-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-scroll-ornament',
    name: 'Scroll Ornament',
    category: 'decorative',
    tags: ['decorative', 'scroll', 'ornament', 'classic'],
    difficulty: 'intermediate',
    description: 'Classic scroll ornament with curved decorative ends',
    cssCode: `.scroll-ornament {
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
}
.scroll-left, .scroll-right {
  font-size: 1.5rem;
  color: #10b981;
  animation: scroll-breathe 3s ease-in-out infinite;
}
.scroll-right { transform: scaleX(-1); }
.scroll-bar {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #10b98144, #10b981, #10b98144);
  position: relative;
}
.scroll-bar::after {
  content: '❖';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #10b981;
  font-size: 0.8rem;
  background: #0a0a1a;
  padding: 0 6px;
}
@keyframes scroll-breathe {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="scroll-ornament"><div class="scroll-left">⁂</div><div class="scroll-bar"></div><div class="scroll-right">⁂</div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-bullets',
    name: 'Decorative Bullets',
    category: 'decorative',
    tags: ['decorative', 'bullets', 'list', 'animated'],
    difficulty: 'beginner',
    description: 'Animated decorative bullet points with glow',
    cssCode: `.deco-bullets {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.deco-bullets li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #e2e8f0;
  font-size: 0.85rem;
}
.deco-bullets li::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 6px #10b981;
  animation: bullet-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
.deco-bullets li:nth-child(2)::before { animation-delay: 0.3s; }
.deco-bullets li:nth-child(3)::before { animation-delay: 0.6s; }
@keyframes bullet-pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 6px #10b981; }
  50% { transform: scale(1.3); box-shadow: 0 0 12px #10b98188; }
}`,
    htmlCode: `<ul class="deco-bullets"><li>First item</li><li>Second item</li><li>Third item</li></ul>`,
    isNew: true,
  },
  {
    id: 'decorative-cameo-frame',
    name: 'Cameo Frame',
    category: 'decorative',
    tags: ['decorative', 'cameo', 'frame', 'oval'],
    difficulty: 'intermediate',
    description: 'Elegant oval cameo frame with ornamental border',
    cssCode: `.cameo {
  width: 90px;
  height: 110px;
  border-radius: 50%;
  border: 3px solid #10b981;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f1a;
  box-shadow: 0 0 0 4px #0a0a1a, 0 0 0 6px #10b98144;
}
.cameo::before {
  content: '◇';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  color: #10b981;
  font-size: 1rem;
  background: #0a0a1a;
  padding: 0 4px;
}
.cameo-inner {
  color: #10b981;
  font-size: 2rem;
  animation: cameo-fade 3s ease-in-out infinite;
}
@keyframes cameo-fade {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="cameo"><div class="cameo-inner">♡</div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-rosette',
    name: 'Rosette Pattern',
    category: 'decorative',
    tags: ['decorative', 'rosette', 'symmetry', 'flower'],
    difficulty: 'advanced',
    description: 'Rotating rosette pattern with overlapping circles',
    cssCode: `.rosette {
  width: 80px;
  height: 80px;
  position: relative;
}
.rosette-petal {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid #10b981;
  border-radius: 50% 0 50% 0;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
}
.rosette-petal:nth-child(1) { transform: rotate(0deg) translate(-15px, -15px); }
.rosette-petal:nth-child(2) { transform: rotate(60deg) translate(-15px, -15px); }
.rosette-petal:nth-child(3) { transform: rotate(120deg) translate(-15px, -15px); }
.rosette-petal:nth-child(4) { transform: rotate(180deg) translate(-15px, -15px); }
.rosette-petal:nth-child(5) { transform: rotate(240deg) translate(-15px, -15px); }
.rosette-petal:nth-child(6) { transform: rotate(300deg) translate(-15px, -15px); }
.rosette {
  animation: rosette-spin 10s linear infinite;
}
@keyframes rosette-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="rosette"><div class="rosette-petal"></div><div class="rosette-petal"></div><div class="rosette-petal"></div><div class="rosette-petal"></div><div class="rosette-petal"></div><div class="rosette-petal"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-lattice',
    name: 'Lattice Design',
    category: 'decorative',
    tags: ['decorative', 'lattice', 'grid', 'pattern'],
    difficulty: 'intermediate',
    description: 'Interlocking lattice pattern with animated highlights',
    cssCode: `.lattice {
  width: 100px;
  height: 100px;
  background:
    linear-gradient(45deg, #10b98122 25%, transparent 25%),
    linear-gradient(-45deg, #10b98122 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #10b98122 75%),
    linear-gradient(-45deg, transparent 75%, #10b98122 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0;
  animation: lattice-shift 4s linear infinite;
  border: 1px solid #10b98144;
  border-radius: 4px;
}
@keyframes lattice-shift {
  to { background-position: 20px 0, 20px 10px, 30px -10px, 10px 0; }
}`,
    htmlCode: `<div class="lattice"></div>`,
    isNew: true,
  },
  {
    id: 'decorative-trellis',
    name: 'Trellis Pattern',
    category: 'decorative',
    tags: ['decorative', 'trellis', 'diagonal', 'garden'],
    difficulty: 'beginner',
    description: 'Garden trellis inspired diagonal pattern',
    cssCode: `.trellis {
  width: 100px;
  height: 100px;
  background:
    repeating-linear-gradient(45deg, transparent, transparent 8px, #10b98122 8px, #10b98122 9px),
    repeating-linear-gradient(-45deg, transparent, transparent 8px, #10b98122 8px, #10b98122 9px);
  border: 1px solid #10b98144;
  border-radius: 4px;
  animation: trellis-glow 3s ease-in-out infinite;
}
@keyframes trellis-glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}`,
    htmlCode: `<div class="trellis"></div>`,
    isNew: true,
  },
  {
    id: 'decorative-arabesque',
    name: 'Arabesque Border',
    category: 'decorative',
    tags: ['decorative', 'arabesque', 'islamic', 'scroll'],
    difficulty: 'advanced',
    description: 'Flowing arabesque border with animated scrollwork',
    cssCode: `.arabesque {
  padding: 20px 28px;
  position: relative;
  color: #e2e8f0;
  font-size: 0.85rem;
  text-align: center;
}
.arabesque::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-image: repeating-linear-gradient(90deg, #10b981 0 8px, transparent 8px 16px) 2;
  animation: arabesque-march 2s linear infinite;
}
.arabesque::after {
  content: '✿';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  color: #10b981;
  font-size: 1rem;
  background: #0a0a1a;
  padding: 0 8px;
  animation: arabesque-spin 8s linear infinite;
}
@keyframes arabesque-march {
  to { border-image-source: repeating-linear-gradient(90deg, #10b981 0 8px, transparent 8px 16px); }
}
@keyframes arabesque-spin { to { transform: translateX(-50%) rotate(360deg); } }`,
    htmlCode: `<div class="arabesque">Arabesque</div>`,
    isNew: true,
  },
  {
    id: 'decorative-vine',
    name: 'Vine Pattern',
    category: 'decorative',
    tags: ['decorative', 'vine', 'organic', 'nature'],
    difficulty: 'intermediate',
    description: 'Organic vine pattern with animated growth',
    cssCode: `.vine-pattern {
  width: 120px;
  height: 80px;
  position: relative;
  overflow: hidden;
}
.vine-stem {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: linear-gradient(to top, #10b981, #10b98144);
  animation: vine-grow 3s ease-out forwards;
  transform-origin: bottom;
}
.vine-leaf {
  position: absolute;
  color: #10b981;
  font-size: 1.2rem;
  animation: leaf-appear 2s ease-out forwards;
  opacity: 0;
}
.vine-leaf:nth-child(2) { bottom: 30%; left: 55%; animation-delay: 1s; transform: rotate(20deg); }
.vine-leaf:nth-child(3) { bottom: 55%; left: 35%; animation-delay: 1.5s; transform: rotate(-30deg); }
@keyframes vine-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes leaf-appear { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }`,
    htmlCode: `<div class="vine-pattern"><div class="vine-stem"></div><div class="vine-leaf">🍃</div><div class="vine-leaf">🌿</div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-star',
    name: 'Decorative Star',
    category: 'decorative',
    tags: ['decorative', 'star', 'geometric', 'animated'],
    difficulty: 'intermediate',
    description: 'Rotating decorative star with glow effect',
    cssCode: `.deco-star {
  width: 70px;
  height: 70px;
  position: relative;
  animation: star-rotate 8s linear infinite;
}
.deco-star::before, .deco-star::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b98122;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.deco-star::after {
  inset: 8px;
  background: #10b98144;
  animation: star-rotate 4s linear infinite reverse;
}
.deco-star-glow {
  position: absolute;
  inset: 20px;
  background: #10b981;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: star-glow-pulse 2s ease-in-out infinite;
}
@keyframes star-rotate { to { transform: rotate(360deg); } }
@keyframes star-glow-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; filter: drop-shadow(0 0 8px #10b981); }
}`,
    htmlCode: `<div class="deco-star"><div class="deco-star-glow"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-snowflake',
    name: 'Snowflake Ornament',
    category: 'decorative',
    tags: ['decorative', 'snowflake', 'winter', 'crystal'],
    difficulty: 'intermediate',
    description: 'Delicate snowflake ornament with rotating branches',
    cssCode: `.snowflake {
  width: 80px;
  height: 80px;
  position: relative;
  animation: snowflake-drift 6s ease-in-out infinite;
}
.snowflake-arm {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 50%;
  background: linear-gradient(to top, transparent, #10b981);
  transform-origin: bottom center;
}
.snowflake-arm:nth-child(1) { transform: translateX(-50%) rotate(0deg); }
.snowflake-arm:nth-child(2) { transform: translateX(-50%) rotate(60deg); }
.snowflake-arm:nth-child(3) { transform: translateX(-50%) rotate(120deg); }
.snowflake-arm:nth-child(4) { transform: translateX(-50%) rotate(180deg); }
.snowflake-arm:nth-child(5) { transform: translateX(-50%) rotate(240deg); }
.snowflake-arm:nth-child(6) { transform: translateX(-50%) rotate(300deg); }
.snowflake-center {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 8px; height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
}
@keyframes snowflake-drift {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
}`,
    htmlCode: `<div class="snowflake"><div class="snowflake-arm"></div><div class="snowflake-arm"></div><div class="snowflake-arm"></div><div class="snowflake-arm"></div><div class="snowflake-arm"></div><div class="snowflake-arm"></div><div class="snowflake-center"></div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-paisley',
    name: 'Paisley Border',
    category: 'decorative',
    tags: ['decorative', 'paisley', 'teardrop', 'pattern'],
    difficulty: 'advanced',
    description: 'Flowing paisley border with teardrop motifs',
    cssCode: `.paisley-border {
  padding: 20px;
  position: relative;
  color: #e2e8f0;
  font-size: 0.85rem;
  text-align: center;
}
.paisley-border::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: repeating-radial-gradient(circle at 10px 50%, #10b981 0 4px, transparent 4px 10px);
  background-size: 20px 3px;
  animation: paisley-slide 3s linear infinite;
}
.paisley-border::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: repeating-radial-gradient(circle at 10px 50%, #34d399 0 4px, transparent 4px 10px);
  background-size: 20px 3px;
  animation: paisley-slide 3s linear infinite reverse;
}
@keyframes paisley-slide {
  to { background-position: 20px 0; }
}`,
    htmlCode: `<div class="paisley-border">Paisley</div>`,
    isNew: true,
  },

  // ==================== EASTER EGGS & FUN (20) ====================
  {
    id: 'easter-confetti-burst',
    name: 'Confetti Burst',
    category: 'easter',
    tags: ['easter', 'confetti', 'celebration', 'animated'],
    difficulty: 'intermediate',
    description: 'Colorful confetti particles bursting outward',
    cssCode: `.confetti-wrap {
  width: 80px;
  height: 80px;
  position: relative;
}
.confetti-piece {
  position: absolute;
  width: 6px;
  height: 6px;
  top: 50%;
  left: 50%;
  border-radius: 1px;
  animation: confetti-fly 2s ease-out infinite;
}
.confetti-piece:nth-child(1) { background: #10b981; --cx: -30px; --cy: -25px; --cr: 30deg; animation-delay: 0s; }
.confetti-piece:nth-child(2) { background: #3b82f6; --cx: 25px; --cy: -30px; --cr: -45deg; animation-delay: 0.1s; }
.confetti-piece:nth-child(3) { background: #8b5cf6; --cx: -20px; --cy: 25px; --cr: 60deg; animation-delay: 0.2s; }
.confetti-piece:nth-child(4) { background: #f59e0b; --cx: 30px; --cy: 20px; --cr: -20deg; animation-delay: 0.3s; }
.confetti-piece:nth-child(5) { background: #ec4899; --cx: 0; --cy: -35px; --cr: 45deg; animation-delay: 0.15s; }
@keyframes confetti-fly {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  50% { transform: translate(var(--cx), var(--cy)) rotate(var(--cr)) scale(1); opacity: 1; }
  100% { transform: translate(var(--cx), var(--cy)) rotate(var(--cr)) scale(0.5); opacity: 0; }
}`,
    htmlCode: `<div class="confetti-wrap"><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div><div class="confetti-piece"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-party-popper',
    name: 'Party Popper',
    category: 'easter',
    tags: ['easter', 'party', 'popper', 'celebration'],
    difficulty: 'intermediate',
    description: 'Party popper with explosive streamer burst effect',
    cssCode: `.party-popper {
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  animation: popper-shake 0.5s ease-in-out infinite;
}
.party-popper::after {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle, #10b98144, transparent);
  animation: popper-burst 1.5s ease-out infinite;
}
@keyframes popper-shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}
@keyframes popper-burst {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}`,
    htmlCode: `<div class="party-popper">🎉</div>`,
    isNew: true,
  },
  {
    id: 'easter-magic-wand',
    name: 'Magic Wand Sparkles',
    category: 'easter',
    tags: ['easter', 'magic', 'sparkle', 'wand'],
    difficulty: 'intermediate',
    description: 'Magic wand emitting twinkling sparkle particles',
    cssCode: `.magic-wand {
  position: relative;
  width: 60px;
  height: 80px;
  transform: rotate(-30deg);
}
.wand-stick {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 4px;
  height: 60px;
  background: linear-gradient(to top, #64748b, #e2e8f0);
  transform: translateX(-50%);
  border-radius: 2px;
}
.wand-tip {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b98166;
  animation: sparkle-pulse 1s ease-in-out infinite;
}
.wand-tip::before, .wand-tip::after {
  content: '✦';
  position: absolute;
  color: #10b981;
  font-size: 0.7rem;
  animation: sparkle-float 1.5s ease-out infinite;
}
.wand-tip::before { top: -15px; left: -10px; animation-delay: 0.3s; }
.wand-tip::after { top: -12px; right: -10px; animation-delay: 0.7s; }
@keyframes sparkle-pulse { 0%, 100% { transform: translateX(-50%) scale(1); } 50% { transform: translateX(-50%) scale(1.3); } }
@keyframes sparkle-float { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-20px); } }`,
    htmlCode: `<div class="magic-wand"><div class="wand-stick"></div><div class="wand-tip"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-slot-machine',
    name: 'Slot Machine Spin',
    category: 'easter',
    tags: ['easter', 'slot', 'machine', 'spin'],
    difficulty: 'advanced',
    description: 'Slot machine reels spinning with emerald symbols',
    cssCode: `.slot-machine {
  width: 80px;
  height: 50px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  gap: 4px;
  padding: 4px;
}
.slot-reel {
  flex: 1;
  overflow: hidden;
  position: relative;
  background: #0f0f1a;
  border-radius: 4px;
}
.slot-reel-inner {
  position: absolute;
  width: 100%;
  text-align: center;
  animation: reel-spin 2s ease-in-out infinite;
  color: #10b981;
  font-size: 1.5rem;
  line-height: 42px;
}
.slot-reel:nth-child(2) .slot-reel-inner { animation-delay: 0.2s; }
.slot-reel:nth-child(3) .slot-reel-inner { animation-delay: 0.4s; }
@keyframes reel-spin {
  0% { transform: translateY(-100%); }
  40% { transform: translateY(0%); }
  50% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
}`,
    htmlCode: `<div class="slot-machine"><div class="slot-reel"><div class="slot-reel-inner">♠<br>♦<br>♣</div></div><div class="slot-reel"><div class="slot-reel-inner">♦<br>♣<br>♠</div></div><div class="slot-reel"><div class="slot-reel-inner">♣<br>♠<br>♦</div></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-roulette-wheel',
    name: 'Roulette Wheel',
    category: 'easter',
    tags: ['easter', 'roulette', 'wheel', 'spin'],
    difficulty: 'advanced',
    description: 'Spinning roulette wheel with alternating segments',
    cssCode: `.roulette {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid #10b981;
  position: relative;
  animation: roulette-spin 4s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  background: conic-gradient(#10b981 0deg 30deg, #1a1a2e 30deg 60deg, #10b981 60deg 90deg, #1a1a2e 90deg 120deg, #10b981 120deg 150deg, #1a1a2e 150deg 180deg, #10b981 180deg 210deg, #1a1a2e 210deg 240deg, #10b981 240deg 270deg, #1a1a2e 270deg 300deg, #10b981 300deg 330deg, #1a1a2e 330deg 360deg);
}
.roulette::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #0a0a1a;
  border-radius: 50%;
  border: 2px solid #10b981;
}
.roulette-pointer {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid #10b981;
  z-index: 1;
}
@keyframes roulette-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(1440deg); }
}`,
    htmlCode: `<div class="roulette" style="position:relative"><div class="roulette-pointer"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-dice-roll',
    name: 'Dice Roll',
    category: 'easter',
    tags: ['easter', 'dice', 'roll', 'game'],
    difficulty: 'intermediate',
    description: 'Animated dice with tumbling roll effect',
    cssCode: `.dice {
  width: 50px;
  height: 50px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 6px;
  gap: 2px;
  animation: dice-tumble 2s ease-in-out infinite;
}
.dice-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  box-shadow: 0 0 4px #10b981;
}
.dice-dot.hidden { visibility: hidden; }
@keyframes dice-tumble {
  0% { transform: rotate(0deg) scale(1); }
  15% { transform: rotate(90deg) scale(0.8); }
  30% { transform: rotate(180deg) scale(1.1); }
  45% { transform: rotate(270deg) scale(0.9); }
  60%, 100% { transform: rotate(360deg) scale(1); }
}`,
    htmlCode: `<div class="dice"><span class="dice-dot hidden"></span><span class="dice-dot"></span><span class="dice-dot hidden"></span><span class="dice-dot"></span><span class="dice-dot hidden"></span><span class="dice-dot"></span><span class="dice-dot hidden"></span><span class="dice-dot"></span><span class="dice-dot hidden"></span></div>`,
    isNew: true,
  },
  {
    id: 'easter-card-flip',
    name: 'Card Flip Reveal',
    category: 'easter',
    tags: ['easter', 'card', 'flip', 'reveal'],
    difficulty: 'intermediate',
    description: 'Playing card that flips to reveal its face',
    cssCode: `.card-flip {
  width: 60px;
  height: 84px;
  perspective: 400px;
  cursor: pointer;
}
.card-flip-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  animation: card-auto-flip 3s ease-in-out infinite;
}
.card-front, .card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 2px solid #10b981;
}
.card-front {
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
  color: #10b981;
}
.card-back {
  background: repeating-linear-gradient(45deg, #10b98122, #10b98122 4px, #0f0f1a 4px, #0f0f1a 8px);
  transform: rotateY(180deg);
  color: #10b981;
}
@keyframes card-auto-flip {
  0%, 40% { transform: rotateY(0deg); }
  50%, 90% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`,
    htmlCode: `<div class="card-flip"><div class="card-flip-inner"><div class="card-front">♠A</div><div class="card-back">✦</div></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-fortune-cookie',
    name: 'Fortune Cookie Reveal',
    category: 'easter',
    tags: ['easter', 'fortune', 'cookie', 'reveal'],
    difficulty: 'beginner',
    description: 'Fortune cookie that opens to reveal a message',
    cssCode: `.fortune-cookie {
  text-align: center;
  position: relative;
}
.fortune-cookie-icon {
  font-size: 2.5rem;
  animation: cookie-wobble 2s ease-in-out infinite;
  display: block;
}
.fortune-msg {
  color: #10b981;
  font-size: 0.75rem;
  font-style: italic;
  margin-top: 4px;
  animation: fortune-fade 2s ease-in-out infinite;
  max-width: 120px;
}
@keyframes cookie-wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}
@keyframes fortune-fade {
  0%, 30% { opacity: 0; transform: translateY(5px); }
  50%, 80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-5px); }
}`,
    htmlCode: `<div class="fortune-cookie"><span class="fortune-cookie-icon">🥠</span><div class="fortune-msg">Good fortune awaits</div></div>`,
    isNew: true,
  },
  {
    id: 'easter-scratch-off',
    name: 'Scratch-off Reveal',
    category: 'easter',
    tags: ['easter', 'scratch', 'reveal', 'hidden'],
    difficulty: 'advanced',
    description: 'Scratch-off effect that reveals hidden content beneath',
    cssCode: `.scratch-off {
  width: 100px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 800;
  font-size: 1.1rem;
}
.scratch-off::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #2a2a3e, #4a4a5e);
  border-radius: 6px;
  animation: scratch-peel 4s ease-in-out infinite;
  transform-origin: left;
}
@keyframes scratch-peel {
  0%, 10% { clip-path: inset(0 0 0 0); }
  40%, 60% { clip-path: inset(0 0 0 60%); }
  90%, 100% { clip-path: inset(0 0 0 0); }
}`,
    htmlCode: `<div class="scratch-off">WINNER</div>`,
    isNew: true,
  },
  {
    id: 'easter-magic-8ball',
    name: 'Magic 8-Ball',
    category: 'easter',
    tags: ['easter', 'magic', '8ball', 'fortune'],
    difficulty: 'intermediate',
    description: 'Magic 8-ball with swirling answer reveal',
    cssCode: `.magic-8ball {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #3a3a4e, #0a0a1a);
  border: 2px solid #2a2a3e;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ball-sway 3s ease-in-out infinite;
}
.magic-8ball-window {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #10b98115;
  border: 1px solid #10b98144;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.magic-8ball-answer {
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 800;
  text-transform: uppercase;
  animation: answer-float 3s ease-in-out infinite;
}
@keyframes ball-sway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
@keyframes answer-float {
  0%, 100% { opacity: 0.4; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.1); }
}`,
    htmlCode: `<div class="magic-8ball"><div class="magic-8ball-window"><span class="magic-8ball-answer">YES</span></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-claw-machine',
    name: 'Claw Machine',
    category: 'easter',
    tags: ['easter', 'claw', 'machine', 'game'],
    difficulty: 'intermediate',
    description: 'Claw machine arm descending animation',
    cssCode: `.claw-machine {
  width: 80px;
  height: 100px;
  position: relative;
  background: #0f0f1a;
  border: 2px solid #10b98144;
  border-radius: 6px;
  overflow: hidden;
}
.claw-arm {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: claw-descend 3s ease-in-out infinite;
}
.claw-cable {
  width: 2px;
  height: 30px;
  background: #10b981;
  margin: 0 auto;
}
.claw-grip {
  display: flex;
  justify-content: center;
  gap: 8px;
  color: #10b981;
  font-size: 0.9rem;
}
@keyframes claw-descend {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(40px); }
}`,
    htmlCode: `<div class="claw-machine"><div class="claw-arm"><div class="claw-cable"></div><div class="claw-grip"><span>∨</span><span>∨</span></div></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-pinata-burst',
    name: 'Piñata Burst',
    category: 'easter',
    tags: ['easter', 'pinata', 'burst', 'party'],
    difficulty: 'beginner',
    description: 'Piñata with candy burst animation',
    cssCode: `.pinata {
  position: relative;
  display: inline-block;
}
.pinata-icon {
  font-size: 2.5rem;
  animation: pinata-swing 1s ease-in-out infinite;
  display: block;
}
.pinata-candy {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: candy-fall 1.5s ease-out infinite;
}
.pinata-candy:nth-child(2) { background: #10b981; --cx: -15px; animation-delay: 0.2s; }
.pinata-candy:nth-child(3) { background: #3b82f6; --cx: 12px; animation-delay: 0.4s; }
.pinata-candy:nth-child(4) { background: #f59e0b; --cx: -8px; animation-delay: 0.6s; }
@keyframes pinata-swing {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}
@keyframes candy-fall {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
  100% { transform: translate(var(--cx), 40px) scale(1); opacity: 0; }
}`,
    htmlCode: `<div class="pinata"><span class="pinata-icon">🪅</span><div class="pinata-candy"></div><div class="pinata-candy"></div><div class="pinata-candy"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-balloon-pop',
    name: 'Balloon Pop',
    category: 'easter',
    tags: ['easter', 'balloon', 'pop', 'party'],
    difficulty: 'beginner',
    description: 'Balloon with a pulsing pop animation',
    cssCode: `.balloon-pop {
  position: relative;
  display: inline-block;
}
.balloon-icon {
  font-size: 2.5rem;
  animation: balloon-float 2s ease-in-out infinite;
  display: block;
}
.balloon-pop::after {
  content: '💥';
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  font-size: 1.5rem;
  animation: pop-flash 2s ease-out infinite;
}
@keyframes balloon-float {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}
@keyframes pop-flash {
  0%, 70% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  80% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}`,
    htmlCode: `<div class="balloon-pop"><span class="balloon-icon">🎈</span></div>`,
    isNew: true,
  },
  {
    id: 'easter-fireworks-show',
    name: 'Fireworks Show',
    category: 'easter',
    tags: ['easter', 'fireworks', 'celebration', 'explosion'],
    difficulty: 'advanced',
    description: 'Multiple fireworks launching and bursting in sequence',
    cssCode: `.fireworks {
  width: 100px;
  height: 100px;
  position: relative;
}
.firework {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: fw-burst 2s ease-out infinite;
}
.firework:nth-child(1) { background: #10b981; top: 20%; left: 30%; animation-delay: 0s; }
.firework:nth-child(2) { background: #3b82f6; top: 30%; left: 70%; animation-delay: 0.7s; }
.firework:nth-child(3) { background: #8b5cf6; top: 50%; left: 50%; animation-delay: 1.4s; }
.firework::before, .firework::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: inherit;
  animation: fw-spark 2s ease-out infinite;
}
.firework::before { transform: translate(-10px, -8px); }
.firework::after { transform: translate(10px, -8px); }
@keyframes fw-burst {
  0% { transform: scale(0); opacity: 0; box-shadow: 0 0 0 0 currentColor; }
  20% { transform: scale(1); opacity: 1; box-shadow: 0 0 15px 8px currentColor; }
  100% { transform: scale(0.5); opacity: 0; box-shadow: 0 0 5px 2px currentColor; }
}
@keyframes fw-spark {
  0%, 20% { opacity: 0; }
  40% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="fireworks"><div class="firework"></div><div class="firework"></div><div class="firework"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-party-horn',
    name: 'Party Horn',
    category: 'easter',
    tags: ['easter', 'party', 'horn', 'celebration'],
    difficulty: 'beginner',
    description: 'Animated party horn with sound wave effect',
    cssCode: `.party-horn {
  position: relative;
  display: inline-block;
}
.horn-icon {
  font-size: 2.5rem;
  animation: horn-toot 1.5s ease-in-out infinite;
  display: block;
}
.horn-wave {
  position: absolute;
  top: 30%;
  right: -10px;
  display: flex;
  gap: 3px;
}
.horn-wave span {
  display: block;
  width: 2px;
  height: 10px;
  background: #10b981;
  border-radius: 1px;
  animation: wave-bar 1s ease-in-out infinite;
}
.horn-wave span:nth-child(1) { animation-delay: 0s; }
.horn-wave span:nth-child(2) { animation-delay: 0.15s; }
.horn-wave span:nth-child(3) { animation-delay: 0.3s; }
@keyframes horn-toot {
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(-8deg); }
  60% { transform: rotate(3deg); }
}
@keyframes wave-bar {
  0%, 100% { transform: scaleY(0.5); opacity: 0.4; }
  50% { transform: scaleY(1.5); opacity: 1; }
}`,
    htmlCode: `<div class="party-horn"><span class="horn-icon">📯</span><div class="horn-wave"><span></span><span></span><span></span></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-streamer-fall',
    name: 'Streamer Fall',
    category: 'easter',
    tags: ['easter', 'streamer', 'fall', 'party'],
    difficulty: 'intermediate',
    description: 'Colorful streamers falling and swaying',
    cssCode: `.streamer-fall {
  width: 80px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.streamer {
  position: absolute;
  width: 4px;
  height: 30px;
  border-radius: 2px;
  top: -30px;
  animation: streamer-drop 3s ease-in infinite;
}
.streamer:nth-child(1) { background: #10b981; left: 15%; animation-delay: 0s; }
.streamer:nth-child(2) { background: #3b82f6; left: 40%; animation-delay: 0.5s; }
.streamer:nth-child(3) { background: #8b5cf6; left: 65%; animation-delay: 1s; }
.streamer:nth-child(4) { background: #f59e0b; left: 85%; animation-delay: 1.5s; }
@keyframes streamer-drop {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(130px) rotate(180deg); opacity: 0.3; }
}`,
    htmlCode: `<div class="streamer-fall"><div class="streamer"></div><div class="streamer"></div><div class="streamer"></div><div class="streamer"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-ribbon-twirl',
    name: 'Ribbon Twirl',
    category: 'easter',
    tags: ['easter', 'ribbon', 'twirl', 'dance'],
    difficulty: 'intermediate',
    description: 'Ribbon twirling and dancing in the air',
    cssCode: `.ribbon-twirl {
  width: 80px;
  height: 100px;
  position: relative;
}
.ribbon-strand {
  position: absolute;
  width: 6px;
  height: 60px;
  top: 10px;
  border-radius: 3px;
  animation: ribbon-wave 2s ease-in-out infinite;
}
.ribbon-strand:nth-child(1) {
  background: linear-gradient(to bottom, #10b981, #10b98144);
  left: 25%;
  animation-delay: 0s;
}
.ribbon-strand:nth-child(2) {
  background: linear-gradient(to bottom, #34d399, #34d39944);
  left: 45%;
  animation-delay: 0.3s;
}
.ribbon-strand:nth-child(3) {
  background: linear-gradient(to bottom, #6ee7b7, #6ee7b744);
  left: 65%;
  animation-delay: 0.6s;
}
@keyframes ribbon-wave {
  0%, 100% { transform: skewX(0deg) translateY(0); }
  25% { transform: skewX(15deg) translateY(-8px); }
  75% { transform: skewX(-15deg) translateY(8px); }
}`,
    htmlCode: `<div class="ribbon-twirl"><div class="ribbon-strand"></div><div class="ribbon-strand"></div><div class="ribbon-strand"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-sparkle-trail',
    name: 'Sparkle Trail',
    category: 'easter',
    tags: ['easter', 'sparkle', 'trail', 'glitter'],
    difficulty: 'beginner',
    description: 'Moving sparkle trail leaving glowing dots behind',
    cssCode: `.sparkle-trail {
  width: 100px;
  height: 40px;
  position: relative;
}
.sparkle-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  top: 50%;
  animation: sparkle-move 2s ease-in-out infinite;
  box-shadow: 0 0 6px #10b981;
}
.sparkle-dot:nth-child(1) { animation-delay: 0s; }
.sparkle-dot:nth-child(2) { animation-delay: 0.3s; }
.sparkle-dot:nth-child(3) { animation-delay: 0.6s; }
.sparkle-dot:nth-child(4) { animation-delay: 0.9s; }
.sparkle-dot:nth-child(5) { animation-delay: 1.2s; }
@keyframes sparkle-move {
  0% { left: 0; transform: translateY(-50%) scale(1); opacity: 1; }
  100% { left: 90%; transform: translateY(-50%) scale(0); opacity: 0; }
}`,
    htmlCode: `<div class="sparkle-trail"><div class="sparkle-dot"></div><div class="sparkle-dot"></div><div class="sparkle-dot"></div><div class="sparkle-dot"></div><div class="sparkle-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-glitter-fall',
    name: 'Glitter Fall',
    category: 'easter',
    tags: ['easter', 'glitter', 'fall', 'sparkle'],
    difficulty: 'beginner',
    description: 'Tiny glitter particles falling with shimmer',
    cssCode: `.glitter-fall {
  width: 80px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.glitter {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #10b981;
  border-radius: 50%;
  top: -4px;
  animation: glitter-drop 2.5s ease-in infinite;
}
.glitter:nth-child(1) { left: 10%; animation-delay: 0s; }
.glitter:nth-child(2) { left: 30%; animation-delay: 0.4s; width: 3px; height: 3px; }
.glitter:nth-child(3) { left: 50%; animation-delay: 0.8s; background: #34d399; }
.glitter:nth-child(4) { left: 70%; animation-delay: 1.2s; width: 3px; height: 3px; }
.glitter:nth-child(5) { left: 90%; animation-delay: 1.6s; background: #6ee7b7; }
@keyframes glitter-drop {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(50px) scale(1.2); opacity: 0.8; }
  100% { transform: translateY(100px) scale(0.5); opacity: 0; }
}`,
    htmlCode: `<div class="glitter-fall"><div class="glitter"></div><div class="glitter"></div><div class="glitter"></div><div class="glitter"></div><div class="glitter"></div></div>`,
    isNew: true,
  },
  {
    id: 'easter-celebration-burst',
    name: 'Celebration Burst',
    category: 'easter',
    tags: ['easter', 'celebration', 'burst', 'radial'],
    difficulty: 'intermediate',
    description: 'Radial celebration burst with expanding rings',
    cssCode: `.celebration-burst {
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.burst-ring {
  position: absolute;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: burst-expand 2s ease-out infinite;
}
.burst-ring:nth-child(1) { width: 10px; height: 10px; animation-delay: 0s; }
.burst-ring:nth-child(2) { width: 10px; height: 10px; animation-delay: 0.5s; border-color: #3b82f6; }
.burst-ring:nth-child(3) { width: 10px; height: 10px; animation-delay: 1s; border-color: #8b5cf6; }
.burst-center {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
  animation: center-pulse 2s ease-in-out infinite;
  z-index: 1;
}
@keyframes burst-expand {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(5); opacity: 0; }
}
@keyframes center-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}`,
    htmlCode: `<div class="celebration-burst"><div class="burst-ring"></div><div class="burst-ring"></div><div class="burst-ring"></div><div class="burst-center"></div></div>`,
    isNew: true,
  },

  // ==================== SCROLL ANIMATIONS (20) ====================
  {
    id: 'scroll-parallax-layers',
    name: 'Parallax Layers',
    category: 'scroll',
    tags: ['scroll', 'parallax', 'layers', 'depth'],
    difficulty: 'intermediate',
    description: 'Simulated parallax depth with layered elements',
    cssCode: `.parallax-layers {
  width: 120px;
  height: 80px;
  position: relative;
  overflow: hidden;
  background: #0a0a1a;
  border-radius: 6px;
}
.p-layer {
  position: absolute;
  border-radius: 50%;
  animation: p-scroll 4s linear infinite;
}
.p-layer-1 {
  width: 40px; height: 40px;
  background: #10b98122;
  bottom: 5px; left: 10px;
  animation-duration: 6s;
}
.p-layer-2 {
  width: 25px; height: 25px;
  background: #10b98144;
  bottom: 15px; left: 50px;
  animation-duration: 4s;
}
.p-layer-3 {
  width: 15px; height: 15px;
  background: #10b98188;
  bottom: 25px; left: 80px;
  animation-duration: 2.5s;
}
@keyframes p-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120px); }
}`,
    htmlCode: `<div class="parallax-layers"><div class="p-layer p-layer-1"></div><div class="p-layer p-layer-2"></div><div class="p-layer p-layer-3"></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-reveal-up',
    name: 'Scroll Reveal Up',
    category: 'scroll',
    tags: ['scroll', 'reveal', 'fade', 'entrance'],
    difficulty: 'beginner',
    description: 'Content reveals by sliding up with fade on scroll',
    cssCode: `.scroll-reveal-up {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  animation: reveal-up 2s ease-out infinite;
}
@keyframes reveal-up {
  0% { transform: translateY(30px); opacity: 0; }
  30% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-10px); opacity: 0; }
}`,
    htmlCode: `<div class="scroll-reveal-up">Revealed on Scroll</div>`,
    isNew: true,
  },
  {
    id: 'scroll-fade-in',
    name: 'Fade In on Scroll',
    category: 'scroll',
    tags: ['scroll', 'fade', 'opacity', 'entrance'],
    difficulty: 'beginner',
    description: 'Content fades in smoothly when scrolled into view',
    cssCode: `.scroll-fade {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border-left: 3px solid #10b981;
  color: #e2e8f0;
  font-size: 0.8rem;
  animation: fade-in-scroll 2.5s ease-in-out infinite;
}
@keyframes fade-in-scroll {
  0% { opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="scroll-fade">Fading In</div>`,
    isNew: true,
  },
  {
    id: 'scroll-slide-in-left',
    name: 'Slide In on Scroll',
    category: 'scroll',
    tags: ['scroll', 'slide', 'left', 'entrance'],
    difficulty: 'beginner',
    description: 'Content slides in from the left when scrolling',
    cssCode: `.scroll-slide {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border-left: 3px solid #10b981;
  color: #e2e8f0;
  font-size: 0.8rem;
  animation: slide-from-left 2.5s ease-in-out infinite;
}
@keyframes slide-from-left {
  0% { transform: translateX(-100%); opacity: 0; }
  30% { transform: translateX(0); opacity: 1; }
  70% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
}`,
    htmlCode: `<div class="scroll-slide">Sliding In</div>`,
    isNew: true,
  },
  {
    id: 'scroll-scale-on-scroll',
    name: 'Scale on Scroll',
    category: 'scroll',
    tags: ['scroll', 'scale', 'grow', 'entrance'],
    difficulty: 'beginner',
    description: 'Content scales up from small when scrolled into view',
    cssCode: `.scroll-scale {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  text-align: center;
  animation: scale-up-scroll 2.5s ease-in-out infinite;
}
@keyframes scale-up-scroll {
  0% { transform: scale(0.5); opacity: 0; }
  30% { transform: scale(1); opacity: 1; }
  70% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.5); opacity: 0; }
}`,
    htmlCode: `<div class="scroll-scale">Scaling Up</div>`,
    isNew: true,
  },
  {
    id: 'scroll-rotate-on-scroll',
    name: 'Rotate on Scroll',
    category: 'scroll',
    tags: ['scroll', 'rotate', 'spin', 'entrance'],
    difficulty: 'intermediate',
    description: 'Content rotates into view on scroll',
    cssCode: `.scroll-rotate {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  text-align: center;
  animation: rotate-in-scroll 2.5s ease-in-out infinite;
}
@keyframes rotate-in-scroll {
  0% { transform: rotate(-15deg) translateY(20px); opacity: 0; }
  30% { transform: rotate(0deg) translateY(0); opacity: 1; }
  70% { transform: rotate(0deg) translateY(0); opacity: 1; }
  100% { transform: rotate(15deg) translateY(-20px); opacity: 0; }
}`,
    htmlCode: `<div class="scroll-rotate">Rotating In</div>`,
    isNew: true,
  },
  {
    id: 'scroll-blur-on-scroll',
    name: 'Blur on Scroll',
    category: 'scroll',
    tags: ['scroll', 'blur', 'focus', 'entrance'],
    difficulty: 'intermediate',
    description: 'Content goes from blurred to sharp when scrolling',
    cssCode: `.scroll-blur {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  animation: blur-to-sharp 2.5s ease-in-out infinite;
}
@keyframes blur-to-sharp {
  0% { filter: blur(8px); opacity: 0.3; }
  30% { filter: blur(0); opacity: 1; }
  70% { filter: blur(0); opacity: 1; }
  100% { filter: blur(8px); opacity: 0.3; }
}`,
    htmlCode: `<div class="scroll-blur">Coming Into Focus</div>`,
    isNew: true,
  },
  {
    id: 'scroll-sticky-element',
    name: 'Sticky Element',
    category: 'scroll',
    tags: ['scroll', 'sticky', 'pin', 'fixed'],
    difficulty: 'intermediate',
    description: 'Element that stays pinned while content scrolls past',
    cssCode: `.sticky-demo {
  width: 120px;
  height: 80px;
  background: #0a0a1a;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.sticky-pin {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 6px 12px;
  background: #10b981;
  color: #0a0a0a;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 4px;
  z-index: 2;
  box-shadow: 0 2px 8px #10b98144;
}
.sticky-scroll-content {
  position: absolute;
  top: 0;
  left: 50px;
  width: 60px;
  animation: sticky-scroll 4s linear infinite;
}
.sticky-scroll-content div {
  padding: 6px;
  color: #64748b;
  font-size: 0.65rem;
  border-bottom: 1px solid #1a1a2e;
}
@keyframes sticky-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120px); }
}`,
    htmlCode: `<div class="sticky-demo"><div class="sticky-pin">PINNED</div><div class="sticky-scroll-content"><div>Item 1</div><div>Item 2</div><div>Item 3</div><div>Item 4</div><div>Item 5</div><div>Item 6</div></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-indicator',
    name: 'Scroll Indicator',
    category: 'scroll',
    tags: ['scroll', 'indicator', 'arrow', 'hint'],
    difficulty: 'beginner',
    description: 'Animated scroll down indicator with bouncing arrow',
    cssCode: `.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #10b981;
}
.scroll-indicator-text {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.7;
}
.scroll-indicator-arrow {
  font-size: 1.2rem;
  animation: scroll-bounce 1.5s ease-in-out infinite;
}
@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(8px); opacity: 1; }
}`,
    htmlCode: `<div class="scroll-indicator"><span class="scroll-indicator-text">Scroll</span><span class="scroll-indicator-arrow">↓</span></div>`,
    isNew: true,
  },
  {
    id: 'scroll-progress-bar',
    name: 'Scroll Progress Bar',
    category: 'scroll',
    tags: ['scroll', 'progress', 'bar', 'indicator'],
    difficulty: 'beginner',
    description: 'Horizontal progress bar showing scroll position',
    cssCode: `.scroll-progress {
  width: 120px;
  height: 6px;
  background: #1a1a2e;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}
.scroll-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 3px;
  animation: progress-fill 3s ease-in-out infinite;
}
@keyframes progress-fill {
  0% { width: 0%; }
  50% { width: 100%; }
  100% { width: 0%; }
}`,
    htmlCode: `<div class="scroll-progress"><div class="scroll-progress-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-snap-section',
    name: 'Scroll Snap',
    category: 'scroll',
    tags: ['scroll', 'snap', 'section', 'pagination'],
    difficulty: 'intermediate',
    description: 'Scroll snap sections that lock into place',
    cssCode: `.scroll-snap-wrap {
  width: 120px;
  height: 80px;
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  background: #0a0a1a;
}
.scroll-snap-track {
  display: flex;
  animation: snap-scroll 6s ease-in-out infinite;
  height: 100%;
}
.scroll-snap-section {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 700;
  font-size: 0.9rem;
}
.scroll-snap-section:nth-child(1) { background: #0f0f1a; }
.scroll-snap-section:nth-child(2) { background: #1a1a2e; }
.scroll-snap-section:nth-child(3) { background: #0f0f1a; }
@keyframes snap-scroll {
  0%, 25% { transform: translateX(0); }
  33%, 58% { transform: translateX(-100%); }
  66%, 91% { transform: translateX(-200%); }
  100% { transform: translateX(0); }
}`,
    htmlCode: `<div class="scroll-snap-wrap"><div class="scroll-snap-track"><div class="scroll-snap-section">Section 1</div><div class="scroll-snap-section">Section 2</div><div class="scroll-snap-section">Section 3</div></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-horizontal',
    name: 'Horizontal Scroll',
    category: 'scroll',
    tags: ['scroll', 'horizontal', 'slide', 'pan'],
    difficulty: 'intermediate',
    description: 'Content that scrolls horizontally with smooth animation',
    cssCode: `.h-scroll {
  width: 120px;
  height: 40px;
  overflow: hidden;
  background: #0a0a1a;
  border-radius: 6px;
  position: relative;
}
.h-scroll-track {
  display: flex;
  gap: 8px;
  padding: 8px;
  animation: h-scroll-move 8s linear infinite;
  width: max-content;
}
.h-scroll-item {
  padding: 6px 12px;
  background: #1a1a2e;
  border: 1px solid #10b98144;
  border-radius: 4px;
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
}
@keyframes h-scroll-move {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`,
    htmlCode: `<div class="h-scroll"><div class="h-scroll-track"><div class="h-scroll-item">Card 1</div><div class="h-scroll-item">Card 2</div><div class="h-scroll-item">Card 3</div><div class="h-scroll-item">Card 4</div><div class="h-scroll-item">Card 1</div><div class="h-scroll-item">Card 2</div><div class="h-scroll-item">Card 3</div><div class="h-scroll-item">Card 4</div></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-shadow',
    name: 'Scroll Shadow',
    category: 'scroll',
    tags: ['scroll', 'shadow', 'edge', 'depth'],
    difficulty: 'intermediate',
    description: 'Shadows appear at edges indicating more scrollable content',
    cssCode: `.scroll-shadow-wrap {
  width: 120px;
  height: 60px;
  position: relative;
  background: #0a0a1a;
  border-radius: 6px;
  overflow: hidden;
}
.scroll-shadow-content {
  padding: 10px;
  animation: scroll-shadow-move 4s ease-in-out infinite;
  color: #64748b;
  font-size: 0.7rem;
  line-height: 1.5;
}
.scroll-shadow-wrap::before, .scroll-shadow-wrap::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  z-index: 1;
  pointer-events: none;
}
.scroll-shadow-wrap::before {
  top: 0;
  background: linear-gradient(to bottom, #0a0a1a, transparent);
}
.scroll-shadow-wrap::after {
  bottom: 0;
  background: linear-gradient(to top, #0a0a1a, transparent);
}
@keyframes scroll-shadow-move {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}`,
    htmlCode: `<div class="scroll-shadow-wrap"><div class="scroll-shadow-content">Line one of content<br>Line two more text<br>Line three scrolling<br>Line four below<br>Line five at end</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-linked-animation',
    name: 'Scroll-Linked Animation',
    category: 'scroll',
    tags: ['scroll', 'linked', 'animation', 'transform'],
    difficulty: 'advanced',
    description: 'Animation that progresses based on simulated scroll position',
    cssCode: `.scroll-linked {
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-linked-dot {
  width: 16px;
  height: 16px;
  background: #10b981;
  border-radius: 50%;
  animation: scroll-path 4s ease-in-out infinite;
  box-shadow: 0 0 10px #10b981;
}
.scroll-linked-path {
  position: absolute;
  width: 80px;
  height: 2px;
  background: #1a1a2e;
  border-radius: 1px;
}
.scroll-linked-path::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  background: #10b98144;
  border-radius: 1px;
  animation: path-fill 4s ease-in-out infinite;
}
@keyframes scroll-path {
  0% { transform: translateX(-30px); }
  50% { transform: translateX(30px); }
  100% { transform: translateX(-30px); }
}
@keyframes path-fill {
  0%, 100% { width: 0%; }
  50% { width: 100%; }
}`,
    htmlCode: `<div class="scroll-linked"><div class="scroll-linked-path"></div><div class="scroll-linked-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-appear',
    name: 'Appear on Scroll',
    category: 'scroll',
    tags: ['scroll', 'appear', 'entrance', 'fade'],
    difficulty: 'beginner',
    description: 'Content materializes when scrolled into view',
    cssCode: `.scroll-appear {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  animation: appear-in 2.5s ease-in-out infinite;
}
@keyframes appear-in {
  0% { transform: translateY(20px) scale(0.95); opacity: 0; }
  25% { transform: translateY(0) scale(1); opacity: 1; }
  75% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(20px) scale(0.95); opacity: 0; }
}`,
    htmlCode: `<div class="scroll-appear">Appearing</div>`,
    isNew: true,
  },
  {
    id: 'scroll-shrink',
    name: 'Shrink on Scroll',
    category: 'scroll',
    tags: ['scroll', 'shrink', 'reduce', 'transform'],
    difficulty: 'intermediate',
    description: 'Content shrinks as you scroll past it',
    cssCode: `.scroll-shrink {
  padding: 20px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  animation: shrink-away 3s ease-in-out infinite;
}
@keyframes shrink-away {
  0% { transform: scale(1); opacity: 1; }
  30% { transform: scale(0.7); opacity: 0.7; }
  60% { transform: scale(0.7); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="scroll-shrink">Shrinking</div>`,
    isNew: true,
  },
  {
    id: 'scroll-expand',
    name: 'Expand on Scroll',
    category: 'scroll',
    tags: ['scroll', 'expand', 'grow', 'transform'],
    difficulty: 'intermediate',
    description: 'Content expands from collapsed when scrolled into view',
    cssCode: `.scroll-expand {
  padding: 8px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  overflow: hidden;
  animation: expand-reveal 3s ease-in-out infinite;
}
@keyframes expand-reveal {
  0% { max-height: 20px; opacity: 0.5; padding: 8px; }
  30% { max-height: 80px; opacity: 1; padding: 16px; }
  70% { max-height: 80px; opacity: 1; padding: 16px; }
  100% { max-height: 20px; opacity: 0.5; padding: 8px; }
}`,
    htmlCode: `<div class="scroll-expand">Expanding content that grows larger as you scroll down the page revealing more details</div>`,
    isNew: true,
  },
  {
    id: 'scroll-color-change',
    name: 'Color Change on Scroll',
    category: 'scroll',
    tags: ['scroll', 'color', 'change', 'gradient'],
    difficulty: 'intermediate',
    description: 'Background color shifts as scroll position changes',
    cssCode: `.scroll-color {
  padding: 16px;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  animation: color-scroll-shift 4s ease-in-out infinite;
  border: 1px solid transparent;
}
@keyframes color-scroll-shift {
  0% { background: #10b98122; border-color: #10b98144; }
  25% { background: #3b82f622; border-color: #3b82f644; }
  50% { background: #8b5cf622; border-color: #8b5cf644; }
  75% { background: #f59e0b22; border-color: #f59e0b44; }
  100% { background: #10b98122; border-color: #10b98144; }
}`,
    htmlCode: `<div class="scroll-color">Color Shifting</div>`,
    isNew: true,
  },
  {
    id: 'scroll-transform',
    name: 'Transform on Scroll',
    category: 'scroll',
    tags: ['scroll', 'transform', 'skew', 'perspective'],
    difficulty: 'advanced',
    description: 'Content transforms with 3D perspective based on scroll',
    cssCode: `.scroll-transform {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #10b98144;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  animation: transform-perspective 3s ease-in-out infinite;
}
@keyframes transform-perspective {
  0% { transform: perspective(400px) rotateY(0deg) scale(1); }
  25% { transform: perspective(400px) rotateY(10deg) scale(0.95); }
  50% { transform: perspective(400px) rotateY(0deg) scale(1); }
  75% { transform: perspective(400px) rotateY(-10deg) scale(0.95); }
  100% { transform: perspective(400px) rotateY(0deg) scale(1); }
}`,
    htmlCode: `<div class="scroll-transform">3D Transform</div>`,
    isNew: true,
  },
  {
    id: 'scroll-opacity',
    name: 'Opacity on Scroll',
    category: 'scroll',
    tags: ['scroll', 'opacity', 'fade', 'transition'],
    difficulty: 'beginner',
    description: 'Content opacity transitions based on scroll position',
    cssCode: `.scroll-opacity {
  display: flex;
  gap: 6px;
}
.scroll-opacity-item {
  padding: 10px 14px;
  background: #1a1a2e;
  border: 1px solid #10b98144;
  border-radius: 6px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  animation: opacity-stagger 3s ease-in-out infinite;
}
.scroll-opacity-item:nth-child(1) { animation-delay: 0s; }
.scroll-opacity-item:nth-child(2) { animation-delay: 0.3s; }
.scroll-opacity-item:nth-child(3) { animation-delay: 0.6s; }
@keyframes opacity-stagger {
  0%, 100% { opacity: 0.2; transform: translateY(8px); }
  50% { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="scroll-opacity"><div class="scroll-opacity-item">First</div><div class="scroll-opacity-item">Second</div><div class="scroll-opacity-item">Third</div></div>`,
    isNew: true,
  },
];
