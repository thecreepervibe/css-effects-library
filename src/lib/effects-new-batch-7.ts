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

export const effectsNewBatch7: CSSEffect[] = [
  // ==================== TYPOGRAPHY-ART (10) ====================
  {
    id: 'typography-ascii-border',
    name: 'ASCII Art Border',
    category: 'typography-art',
    tags: ['typography', 'ascii', 'border', 'decorative', 'retro'],
    difficulty: 'intermediate',
    description: 'A decorative border composed of ASCII characters creating a retro terminal aesthetic around text',
    cssCode: `.ascii-border-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ascii-border-frame {
  position: relative;
  padding: 20px 28px;
  text-align: center;
}
.ascii-border-frame::before,
.ascii-border-frame::after {
  color: #10b981;
  font-family: monospace;
  font-size: 0.6rem;
  line-height: 1.1;
  position: absolute;
  letter-spacing: 2px;
  white-space: pre;
  opacity: 0.8;
  animation: ascii-flicker 3s ease-in-out infinite;
}
.ascii-border-frame::before {
  content: '╔══════════════╗\\A║  ╔════╗  ║\\A║  ║ >> ║  ║\\A║  ╚════╝  ║\\A╚══════════════╝';
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
@keyframes ascii-flicker {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.5; }
}
.ascii-border-text {
  color: #10b981;
  font-family: monospace;
  font-weight: 700;
  font-size: 0.85rem;
  text-shadow: 0 0 8px #10b98144;
}
.ascii-border-corner {
  color: #10b981;
  font-family: monospace;
  font-size: 0.55rem;
  position: absolute;
  opacity: 0.6;
}
.ascii-border-corner.tl { top: -8px; left: -8px; content: '┌'; }
.ascii-border-corner.tr { top: -8px; right: -8px; }
.ascii-border-corner.bl { bottom: -8px; left: -8px; }
.ascii-border-corner.br { bottom: -8px; right: -8px; }`,
    htmlCode: `<div class="ascii-border-wrap"><div class="ascii-border-frame"><span class="ascii-border-corner tl">┌</span><span class="ascii-border-corner tr">┐</span><span class="ascii-border-corner bl">└</span><span class="ascii-border-corner br">┘</span><div class="ascii-border-text">HELLO WORLD</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-portrait',
    name: 'Text Portrait',
    category: 'typography-art',
    tags: ['typography', 'portrait', 'clip', 'image', 'creative'],
    difficulty: 'advanced',
    description: 'Text characters fill a silhouette shape creating a typographic portrait effect',
    cssCode: `.text-portrait-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-portrait-box {
  width: 120px;
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: #10b981;
}
.text-portrait-letters {
  position: absolute;
  inset: 0;
  background: #0a0a1a;
  color: #10b981;
  font-family: monospace;
  font-size: 0.5rem;
  line-height: 0.55rem;
  font-weight: 700;
  word-break: break-all;
  overflow: hidden;
  padding: 4px;
  mix-blend-mode: multiply;
}
.text-portrait-silhouette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 40px 50px at 50% 35%, #0a0a1a 30%, transparent 31%),
    radial-gradient(ellipse 30px 20px at 35% 80%, #0a0a1a 20%, transparent 21%),
    radial-gradient(ellipse 30px 20px at 65% 80%, #0a0a1a 20%, transparent 21%),
    #0a0a1a;
  mix-blend-mode: screen;
}
.text-portrait-label {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}`,
    htmlCode: `<div class="text-portrait-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="text-portrait-box"><div class="text-portrait-letters">ABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDE</div><div class="text-portrait-silhouette"></div></div><div class="text-portrait-label">Text Portrait</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-mosaic',
    name: 'Letter Mosaic',
    category: 'typography-art',
    tags: ['typography', 'mosaic', 'grid', 'letters', 'pattern'],
    difficulty: 'intermediate',
    description: 'A grid of letters forming a colorful mosaic pattern with staggered animations',
    cssCode: `.letter-mosaic-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.letter-mosaic-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}
.letter-mosaic-cell {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 800;
  border-radius: 4px;
  animation: mosaic-shift 3s ease-in-out infinite;
}
.letter-mosaic-cell:nth-child(odd) {
  background: #10b98118;
  color: #10b981;
  animation-delay: calc(var(--i, 0) * 0.1s);
}
.letter-mosaic-cell:nth-child(even) {
  background: #6366f118;
  color: #6366f1;
  animation-delay: calc(var(--i, 0) * 0.1s + 0.5s);
}
@keyframes mosaic-shift {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
}
.letter-mosaic-cell:nth-child(3n) {
  background: #f59e0b18;
  color: #f59e0b;
}
.letter-mosaic-cell:nth-child(5n) {
  background: #ef444418;
  color: #ef4444;
}`,
    htmlCode: `<div class="letter-mosaic-wrap"><div class="letter-mosaic-grid"><div class="letter-mosaic-cell">A</div><div class="letter-mosaic-cell">B</div><div class="letter-mosaic-cell">C</div><div class="letter-mosaic-cell">D</div><div class="letter-mosaic-cell">E</div><div class="letter-mosaic-cell">F</div><div class="letter-mosaic-cell">G</div><div class="letter-mosaic-cell">H</div><div class="letter-mosaic-cell">I</div><div class="letter-mosaic-cell">J</div><div class="letter-mosaic-cell">K</div><div class="letter-mosaic-cell">L</div><div class="letter-mosaic-cell">M</div><div class="letter-mosaic-cell">N</div><div class="letter-mosaic-cell">O</div><div class="letter-mosaic-cell">P</div><div class="letter-mosaic-cell">Q</div><div class="letter-mosaic-cell">R</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-type-as-image',
    name: 'Type as Image',
    category: 'typography-art',
    tags: ['typography', 'image', 'visual', 'creative', 'large'],
    difficulty: 'intermediate',
    description: 'Large scale typography used as a visual element with gradient fills and shadow depth',
    cssCode: `.type-as-image-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.type-as-image-text {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #10b981, #34d399, #6ee7b7, #10b981);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: type-gradient-flow 4s ease-in-out infinite;
  text-shadow: none;
  position: relative;
}
.type-as-image-text::after {
  content: 'ART';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #10b98144, #6366f144);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: blur(8px);
  z-index: -1;
}
@keyframes type-gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.type-as-image-sub {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-top: 4px;
  text-align: center;
}`,
    htmlCode: `<div class="type-as-image-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="type-as-image-text">ART</div><div class="type-as-image-sub">Typography as Visual</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-pixel-font',
    name: 'Pixel Font',
    category: 'typography-art',
    tags: ['typography', 'pixel', 'retro', '8-bit', 'grid'],
    difficulty: 'intermediate',
    description: 'A retro pixelated font effect using CSS grid cells to form blocky letter shapes',
    cssCode: `.pixel-font-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.pixel-font-letter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2px;
}
.pixel-font-cell {
  width: 8px;
  height: 8px;
  border-radius: 1px;
  background: #1a1a2e;
}
.pixel-font-cell.on {
  background: #10b981;
  box-shadow: 0 0 4px #10b98144;
  animation: pixel-blink 2s ease-in-out infinite;
}
.pixel-font-letter:nth-child(1) .pixel-font-cell.on { animation-delay: 0s; }
.pixel-font-letter:nth-child(2) .pixel-font-cell.on { animation-delay: 0.3s; }
.pixel-font-letter:nth-child(3) .pixel-font-cell.on { animation-delay: 0.6s; }
@keyframes pixel-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.pixel-font-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 12px;
  text-align: center;
}`,
    htmlCode: `<div class="pixel-font-wrap"><div><div style="display:flex;gap:10px;justify-content:center"><div class="pixel-font-letter"><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div></div><div class="pixel-font-letter"><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div></div><div class="pixel-font-letter"><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div><div class="pixel-font-cell on"></div></div></div><div class="pixel-font-label">Pixel Font</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-mono-art',
    name: 'Mono Art',
    category: 'typography-art',
    tags: ['typography', 'monospace', 'art', 'ascii', 'pattern'],
    difficulty: 'beginner',
    description: 'Monospace characters arranged in an artistic pattern with color variations creating visual depth',
    cssCode: `.mono-art-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mono-art-canvas {
  font-family: monospace;
  font-size: 0.6rem;
  line-height: 0.7rem;
  letter-spacing: 1px;
  text-align: center;
  animation: mono-wave 4s ease-in-out infinite;
}
.mono-art-line {
  display: block;
  white-space: pre;
}
.mono-art-line:nth-child(1) { color: #10b981; opacity: 0.4; }
.mono-art-line:nth-child(2) { color: #10b981; opacity: 0.6; }
.mono-art-line:nth-child(3) { color: #10b981; opacity: 0.8; }
.mono-art-line:nth-child(4) { color: #10b981; opacity: 1; }
.mono-art-line:nth-child(5) { color: #34d399; opacity: 0.8; }
.mono-art-line:nth-child(6) { color: #6ee7b7; opacity: 0.6; }
@keyframes mono-wave {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}
.mono-art-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 10px;
  text-align: center;
}`,
    htmlCode: `<div class="mono-art-wrap"><div><div class="mono-art-canvas"><span class="mono-art-line">  ···:::;;;:::···  </span><span class="mono-art-line"> ·:::;;;|||;;;:::· </span><span class="mono-art-line"> ::::;;||||||;;:::: </span><span class="mono-art-line"> ::;;||||||||||;;:: </span><span class="mono-art-line"> ·:::;;;|||;;;:::· </span><span class="mono-art-line">  ···:::;;;:::···  </span></div><div class="mono-art-label">Mono Art</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-letter-spacing-art',
    name: 'Letter Spacing Art',
    category: 'typography-art',
    tags: ['typography', 'spacing', 'tracking', 'kinetic', 'expand'],
    difficulty: 'beginner',
    description: 'Text that animates its letter-spacing creating a breathing expansion and contraction effect',
    cssCode: `.letter-spacing-art-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.spacing-art-line {
  font-family: monospace;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #10b981;
  animation: spacing-breathe 3s ease-in-out infinite;
  text-shadow: 0 0 10px #10b98133;
}
.spacing-art-line:nth-child(2) {
  animation-delay: 0.5s;
  color: #34d399;
}
.spacing-art-line:nth-child(3) {
  animation-delay: 1s;
  color: #6ee7b7;
}
@keyframes spacing-breathe {
  0%, 100% { letter-spacing: 2px; opacity: 0.6; }
  50% { letter-spacing: 16px; opacity: 1; }
}
.spacing-art-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}`,
    htmlCode: `<div class="letter-spacing-art-wrap"><div class="spacing-art-line">Expand</div><div class="spacing-art-line">Contract</div><div class="spacing-art-line">Breathe</div><div class="spacing-art-label">Letter Spacing Art</div></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-rotation-pattern',
    name: 'Text Rotation Pattern',
    category: 'typography-art',
    tags: ['typography', 'rotation', 'pattern', 'spiral', 'circular'],
    difficulty: 'intermediate',
    description: 'Characters rotated at incremental angles forming a radial circular text pattern',
    cssCode: `.text-rotation-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-rotation-circle {
  width: 130px;
  height: 130px;
  position: relative;
  animation: rotation-spin 12s linear infinite;
}
.text-rotation-char {
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: #10b981;
  transform-origin: 0 0;
  animation: char-pulse 3s ease-in-out infinite;
}
@keyframes rotation-spin {
  to { transform: rotate(360deg); }
}
@keyframes char-pulse {
  0%, 100% { opacity: 0.6; text-shadow: none; }
  50% { opacity: 1; text-shadow: 0 0 6px #10b98166; }
}
.text-rotation-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px #10b98144;
}`,
    htmlCode: `<div class="text-rotation-wrap"><div class="text-rotation-circle"><div class="text-rotation-center"></div><div class="text-rotation-char" style="transform:rotate(0deg) translateY(-55px)">C</div><div class="text-rotation-char" style="transform:rotate(30deg) translateY(-55px)">S</div><div class="text-rotation-char" style="transform:rotate(60deg) translateY(-55px)">S</div><div class="text-rotation-char" style="transform:rotate(90deg) translateY(-55px)">R</div><div class="text-rotation-char" style="transform:rotate(120deg) translateY(-55px)">O</div><div class="text-rotation-char" style="transform:rotate(150deg) translateY(-55px)">T</div><div class="text-rotation-char" style="transform:rotate(180deg) translateY(-55px)">A</div><div class="text-rotation-char" style="transform:rotate(210deg) translateY(-55px)">T</div><div class="text-rotation-char" style="transform:rotate(240deg) translateY(-55px)">E</div><div class="text-rotation-char" style="transform:rotate(270deg) translateY(-55px)">P</div><div class="text-rotation-char" style="transform:rotate(300deg) translateY(-55px)">A</div><div class="text-rotation-char" style="transform:rotate(330deg) translateY(-55px)">T</div></div></div>`,
    isNew: true,
  },
  {
    id: 'typography-font-weight-animation',
    name: 'Font Weight Animation',
    category: 'typography-art',
    tags: ['typography', 'weight', 'variable', 'font', 'animate'],
    difficulty: 'intermediate',
    description: 'Variable font weight animating smoothly from thin to black creating a morphing text effect',
    cssCode: `.font-weight-anim-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.font-weight-text {
  font-size: 2.2rem;
  color: #10b981;
  animation: weight-morph 3s ease-in-out infinite alternate;
  font-family: system-ui, sans-serif;
  text-shadow: 0 0 10px #10b98122;
}
@keyframes weight-morph {
  0% { font-weight: 100; letter-spacing: 8px; opacity: 0.5; }
  50% { font-weight: 500; letter-spacing: 4px; opacity: 0.8; }
  100% { font-weight: 900; letter-spacing: 0px; opacity: 1; }
}
.font-weight-sub {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  animation: weight-sub-morph 3s ease-in-out infinite alternate;
}
@keyframes weight-sub-morph {
  0% { font-weight: 300; letter-spacing: 6px; }
  100% { font-weight: 700; letter-spacing: 1px; }
}
.font-weight-label {
  color: #475569;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 6px;
}`,
    htmlCode: `<div class="font-weight-anim-wrap"><div class="font-weight-text">WEIGHT</div><div class="font-weight-sub">Variable Font Morph</div><div class="font-weight-label">100 → 900</div></div>`,
    isNew: true,
  },
  {
    id: 'typography-text-clipping-mask',
    name: 'Text Clipping Mask',
    category: 'typography-art',
    tags: ['typography', 'clipping', 'mask', 'reveal', 'gradient'],
    difficulty: 'advanced',
    description: 'Text used as a clipping mask to reveal an animated gradient pattern underneath',
    cssCode: `.text-clip-mask-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-clip-container {
  position: relative;
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-clip-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #10b981);
  background-size: 300% 100%;
  animation: clip-gradient-slide 3s linear infinite;
  border-radius: 8px;
}
@keyframes clip-gradient-slide {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
.text-clip-text {
  position: relative;
  z-index: 1;
  font-size: 1.6rem;
  font-weight: 900;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #10b981);
  background-size: 300% 100%;
  animation: clip-gradient-slide 3s linear infinite;
}
.text-clip-mask {
  position: absolute;
  inset: 0;
  background: #0a0a1a;
  z-index: 0;
  -webkit-background-clip: text;
  background-clip: text;
}`,
    htmlCode: `<div class="text-clip-mask-wrap"><div class="text-clip-container"><div class="text-clip-bg"></div><div class="text-clip-text">CLIP</div></div></div>`,
    isNew: true,
  },

  // ==================== HOUDINI (10) ====================
  {
    id: 'houdini-paint-circle',
    name: 'Paint API Circle',
    category: 'houdini',
    tags: ['houdini', 'paint', 'api', 'circle', 'custom'],
    difficulty: 'advanced',
    description: 'CSS Houdini Paint API-inspired concentric circles drawn as a decorative background pattern',
    cssCode: `.houdini-paint-circle-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-paint-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, transparent 15%, #10b98133 16%, transparent 17%),
    radial-gradient(circle at center, transparent 30%, #10b98144 31%, transparent 32%),
    radial-gradient(circle at center, transparent 45%, #10b98155 46%, transparent 47%),
    radial-gradient(circle at center, transparent 60%, #10b98166 61%, transparent 62%),
    radial-gradient(circle at center, transparent 75%, #10b98177 76%, transparent 77%);
  animation: paint-circle-rotate 6s linear infinite;
  position: relative;
}
.houdini-paint-circle::after {
  content: '';
  position: absolute;
  inset: 35%;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 20px #10b98144;
}
@keyframes paint-circle-rotate {
  to { transform: rotate(360deg); }
}
.houdini-paint-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 12px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-paint-circle-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="houdini-paint-circle"></div><div class="houdini-paint-label">Paint API Circles</div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-paint-gradient',
    name: 'Paint API Gradient',
    category: 'houdini',
    tags: ['houdini', 'paint', 'gradient', 'api', 'smooth'],
    difficulty: 'intermediate',
    description: 'A Houdini Paint API-inspired multi-stop gradient that smoothly transitions through colors',
    cssCode: `.houdini-paint-gradient-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-paint-gradient {
  width: 180px;
  height: 80px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    #10b981 0%,
    #34d399 15%,
    #6ee7b7 30%,
    #3b82f6 50%,
    #8b5cf6 65%,
    #ec4899 80%,
    #10b981 100%
  );
  background-size: 200% 100%;
  animation: houdini-gradient-flow 4s linear infinite;
  box-shadow: 0 4px 20px #10b98133;
  position: relative;
  overflow: hidden;
}
.houdini-paint-gradient::after {
  content: 'HOUDINI';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
  color: #0a0a1a;
  letter-spacing: 4px;
}
@keyframes houdini-gradient-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`,
    htmlCode: `<div class="houdini-paint-gradient-wrap"><div class="houdini-paint-gradient"></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-custom-property-animate',
    name: 'Custom Property Animate',
    category: 'houdini',
    tags: ['houdini', 'custom', 'property', 'animate', 'registered'],
    difficulty: 'advanced',
    description: 'Houdini CSS custom property animation using @property for smooth gradient angle transitions',
    cssCode: `@property --houdini-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
.houdini-custom-prop-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-custom-prop-box {
  width: 110px;
  height: 110px;
  border-radius: 16px;
  background: conic-gradient(from var(--houdini-angle), #10b981, #3b82f6, #8b5cf6, #10b981);
  animation: houdini-angle-spin 3s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.houdini-custom-prop-inner {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 1px;
}
@keyframes houdini-angle-spin {
  to { --houdini-angle: 360deg; }
}
.houdini-cp-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 12px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-custom-prop-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="houdini-custom-prop-box"><div class="houdini-custom-prop-inner">@PROP</div></div><div class="houdini-cp-label">Custom Property</div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-registered-property',
    name: 'Registered Property',
    category: 'houdini',
    tags: ['houdini', 'registered', 'property', 'type', 'css'],
    difficulty: 'advanced',
    description: 'A Houdini @property registered custom property that enables smooth color transitions between states',
    cssCode: `@property --houdini-color1 {
  syntax: '<color>';
  initial-value: #10b981;
  inherits: false;
}
@property --houdini-color2 {
  syntax: '<color>';
  initial-value: #3b82f6;
  inherits: false;
}
.houdini-registered-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-registered-box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--houdini-color1), var(--houdini-color2));
  animation: houdini-color-shift 4s ease-in-out infinite alternate;
  box-shadow: 0 0 30px #10b98122;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes houdini-color-shift {
  0% {
    --houdini-color1: #10b981;
    --houdini-color2: #3b82f6;
  }
  50% {
    --houdini-color1: #8b5cf6;
    --houdini-color2: #ec4899;
  }
  100% {
    --houdini-color1: #f59e0b;
    --houdini-color2: #ef4444;
  }
}
.houdini-reg-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-registered-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="houdini-registered-box"></div><div class="houdini-reg-label">Registered Property</div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-paint-worklet-dots',
    name: 'Paint Worklet Dots',
    category: 'houdini',
    tags: ['houdini', 'paint', 'worklet', 'dots', 'pattern'],
    difficulty: 'intermediate',
    description: 'A Houdini Paint Worklet-inspired dot matrix pattern with animated pulse effects',
    cssCode: `.houdini-dots-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-dots-canvas {
  width: 140px;
  height: 100px;
  background:
    radial-gradient(circle 3px, #10b981 100%, transparent 100%) 0 0 / 20px 20px,
    radial-gradient(circle 2px, #10b98166 100%, transparent 100%) 10px 10px / 20px 20px;
  background-color: #0f0f1a;
  animation: dots-pulse 3s ease-in-out infinite;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.houdini-dots-canvas::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 20%, #0f0f1a 70%);
  animation: dots-reveal 4s ease-in-out infinite;
}
@keyframes dots-pulse {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.5); }
}
@keyframes dots-reveal {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
.houdini-dots-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-dots-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="houdini-dots-canvas"></div><div class="houdini-dots-label">Paint Worklet Dots</div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-ripple',
    name: 'Houdini Ripple',
    category: 'houdini',
    tags: ['houdini', 'ripple', 'wave', 'concentric', 'animate'],
    difficulty: 'intermediate',
    description: 'A Houdini-inspired concentric ripple effect that emanates outward from a center point',
    cssCode: `.houdini-ripple-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
.houdini-ripple-container {
  position: relative;
  width: 120px;
  height: 120px;
}
.houdini-ripple-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: ripple-expand 2s ease-out infinite;
  opacity: 0;
}
.houdini-ripple-ring:nth-child(2) { animation-delay: 0.5s; }
.houdini-ripple-ring:nth-child(3) { animation-delay: 1s; }
.houdini-ripple-ring:nth-child(4) { animation-delay: 1.5s; }
@keyframes ripple-expand {
  0% { transform: scale(0.2); opacity: 0.8; border-color: #10b981; }
  100% { transform: scale(1); opacity: 0; border-color: #10b98100; }
}
.houdini-ripple-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px #10b98144;
  animation: ripple-center-pulse 2s ease-in-out infinite;
}
@keyframes ripple-center-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.3); }
}`,
    htmlCode: `<div class="houdini-ripple-wrap"><div class="houdini-ripple-container"><div class="houdini-ripple-ring"></div><div class="houdini-ripple-ring"></div><div class="houdini-ripple-ring"></div><div class="houdini-ripple-ring"></div><div class="houdini-ripple-center"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-sparkle',
    name: 'Houdini Sparkle',
    category: 'houdini',
    tags: ['houdini', 'sparkle', 'twinkle', 'glitter', 'paint'],
    difficulty: 'intermediate',
    description: 'A Houdini-inspired sparkle effect with glittering points that fade in and out across a surface',
    cssCode: `.houdini-sparkle-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-sparkle-field {
  width: 160px;
  height: 100px;
  position: relative;
  border-radius: 8px;
  background: #0f0f1a;
  overflow: hidden;
}
.houdini-sparkle-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #10b981;
  animation: sparkle-twinkle 1.5s ease-in-out infinite;
  box-shadow: 0 0 6px #10b981;
}
.houdini-sparkle-dot:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
.houdini-sparkle-dot:nth-child(2) { top: 30%; left: 45%; animation-delay: 0.2s; }
.houdini-sparkle-dot:nth-child(3) { top: 60%; left: 25%; animation-delay: 0.4s; }
.houdini-sparkle-dot:nth-child(4) { top: 75%; left: 70%; animation-delay: 0.6s; }
.houdini-sparkle-dot:nth-child(5) { top: 20%; left: 80%; animation-delay: 0.8s; }
.houdini-sparkle-dot:nth-child(6) { top: 50%; left: 55%; animation-delay: 1s; }
.houdini-sparkle-dot:nth-child(7) { top: 85%; left: 15%; animation-delay: 1.2s; }
.houdini-sparkle-dot:nth-child(8) { top: 40%; left: 90%; animation-delay: 0.3s; }
@keyframes sparkle-twinkle {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.5); }
}
.houdini-sparkle-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-sparkle-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="houdini-sparkle-field"><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div><div class="houdini-sparkle-dot"></div></div><div class="houdini-sparkle-label">Houdini Sparkle</div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-noise',
    name: 'Houdini Noise',
    category: 'houdini',
    tags: ['houdini', 'noise', 'grain', 'texture', 'static'],
    difficulty: 'advanced',
    description: 'A Houdini Paint API-inspired noise texture using overlapping gradients to simulate visual static',
    cssCode: `.houdini-noise-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-noise-box {
  width: 150px;
  height: 100px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #10b98122, #3b82f622);
}
.houdini-noise-box::before {
  content: '';
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(circle 2px at 20% 30%, #10b98133 0%, transparent 100%),
    radial-gradient(circle 1px at 60% 20%, #10b98144 0%, transparent 100%),
    radial-gradient(circle 3px at 80% 70%, #10b98122 0%, transparent 100%),
    radial-gradient(circle 1px at 40% 80%, #10b98155 0%, transparent 100%),
    radial-gradient(circle 2px at 10% 60%, #10b98133 0%, transparent 100%);
  animation: noise-shift 0.5s steps(4) infinite;
}
.houdini-noise-box::after {
  content: 'NOISE';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-weight: 900;
  font-size: 1.1rem;
  color: #10b98188;
  letter-spacing: 4px;
}
@keyframes noise-shift {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-5px, 3px); }
  50% { transform: translate(3px, -5px); }
  75% { transform: translate(-3px, -3px); }
  100% { transform: translate(5px, 5px); }
}`,
    htmlCode: `<div class="houdini-noise-wrap"><div class="houdini-noise-box"></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-checkerboard',
    name: 'Houdini Checkerboard',
    category: 'houdini',
    tags: ['houdini', 'checkerboard', 'pattern', 'paint', 'grid'],
    difficulty: 'intermediate',
    description: 'A Houdini Paint API-inspired animated checkerboard pattern with rotating tiles',
    cssCode: `.houdini-checker-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-checker-board {
  width: 120px;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2px;
  border-radius: 8px;
  overflow: hidden;
}
.houdini-checker-cell {
  border-radius: 2px;
  transition: all 0.3s;
}
.houdini-checker-cell.dark {
  background: #10b98133;
  animation: checker-flip 2s ease-in-out infinite;
}
.houdini-checker-cell.light {
  background: #10b98111;
  animation: checker-flip 2s ease-in-out infinite reverse;
}
.houdini-checker-cell:nth-child(odd).dark { animation-delay: 0s; }
.houdini-checker-cell:nth-child(even).dark { animation-delay: 0.5s; }
.houdini-checker-cell:nth-child(odd).light { animation-delay: 0.25s; }
.houdini-checker-cell:nth-child(even).light { animation-delay: 0.75s; }
@keyframes checker-flip {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(0.92); }
}
.houdini-checker-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 10px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-checker-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="houdini-checker-board"><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell dark"></div><div class="houdini-checker-cell light"></div><div class="houdini-checker-cell dark"></div></div><div class="houdini-checker-label">Checkerboard Paint</div></div></div>`,
    isNew: true,
  },
  {
    id: 'houdini-conic',
    name: 'Houdini Conic',
    category: 'houdini',
    tags: ['houdini', 'conic', 'gradient', 'spin', 'radial'],
    difficulty: 'intermediate',
    description: 'A Houdini-inspired animated conic gradient that creates a sweeping radar-like visual',
    cssCode: `.houdini-conic-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.houdini-conic-ring {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(
    from 0deg,
    #10b981 0deg,
    transparent 60deg,
    transparent 360deg
  );
  animation: conic-sweep 2s linear infinite;
}
.houdini-conic-ring::after {
  content: '';
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  background: #0a0a1a;
}
.houdini-conic-ring::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  border: 1px solid #10b98122;
  z-index: 1;
}
@keyframes conic-sweep {
  to { transform: rotate(360deg); }
}
.houdini-conic-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: conic-blink 2s ease-in-out infinite;
  z-index: 2;
}
.houdini-conic-dot:nth-child(1) { top: 25%; left: 60%; animation-delay: 0.3s; }
.houdini-conic-dot:nth-child(2) { top: 55%; left: 30%; animation-delay: 0.8s; }
.houdini-conic-dot:nth-child(3) { top: 35%; left: 75%; animation-delay: 1.4s; }
@keyframes conic-blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.houdini-conic-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 12px;
  text-align: center;
}`,
    htmlCode: `<div class="houdini-conic-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div style="position:relative"><div class="houdini-conic-ring"><div class="houdini-conic-dot"></div><div class="houdini-conic-dot"></div><div class="houdini-conic-dot"></div></div></div><div class="houdini-conic-label">Houdini Conic</div></div></div>`,
    isNew: true,
  },

  // ==================== TEXT (10 more) ====================
  {
    id: 'text-scramble-decode',
    name: 'Text Scramble Decode',
    category: 'text',
    tags: ['text', 'scramble', 'decode', 'matrix', 'reveal'],
    difficulty: 'advanced',
    description: 'Text that appears scrambled and gradually decodes character by character revealing the message',
    cssCode: `.text-scramble-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.scramble-text {
  font-family: monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #10b981;
  position: relative;
  letter-spacing: 2px;
}
.scramble-text::before {
  content: 'DECODED';
  position: absolute;
  inset: 0;
  color: #34d399;
  clip-path: inset(0 100% 0 0);
  animation: scramble-reveal 2.5s steps(7) infinite;
}
@keyframes scramble-reveal {
  0% { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 0% 0 0); }
}
.scramble-noise {
  font-family: monospace;
  font-size: 0.65rem;
  color: #10b98144;
  letter-spacing: 4px;
  animation: noise-text 0.3s steps(2) infinite;
}
@keyframes noise-text {
  0% { opacity: 0.4; }
  50% { opacity: 0.8; }
  100% { opacity: 0.4; }
}
.scramble-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2rem;
  background: #10b981;
  animation: cursor-blink-scramble 0.6s step-end infinite;
  vertical-align: middle;
  margin-left: 2px;
}
@keyframes cursor-blink-scramble {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`,
    htmlCode: `<div class="text-scramble-wrap"><div class="scramble-text">▓▓▓▓▓▓▓<span class="scramble-cursor"></span></div><div class="scramble-noise">01001 11010 00110</div></div>`,
    isNew: true,
  },
  {
    id: 'text-wave-2',
    name: 'Text Wave 2',
    category: 'text',
    tags: ['text', 'wave', 'undulate', 'animation', 'letters'],
    difficulty: 'intermediate',
    description: 'Individual letters that wave up and down in a smooth sinusoidal pattern with staggered timing',
    cssCode: `.text-wave2-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-wave2-word {
  display: flex;
  gap: 3px;
}
.text-wave2-char {
  font-size: 1.8rem;
  font-weight: 800;
  color: #10b981;
  display: inline-block;
  animation: wave2-bob 1.5s ease-in-out infinite;
}
.text-wave2-char:nth-child(1) { animation-delay: 0s; }
.text-wave2-char:nth-child(2) { animation-delay: 0.1s; }
.text-wave2-char:nth-child(3) { animation-delay: 0.2s; }
.text-wave2-char:nth-child(4) { animation-delay: 0.3s; }
.text-wave2-char:nth-child(5) { animation-delay: 0.4s; }
.text-wave2-char:nth-child(6) { animation-delay: 0.5s; }
.text-wave2-char:nth-child(7) { animation-delay: 0.6s; }
@keyframes wave2-bob {
  0%, 100% { transform: translateY(0); color: #10b981; }
  25% { transform: translateY(-12px); color: #34d399; }
  75% { transform: translateY(4px); color: #059669; }
}
.text-wave2-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 14px;
  text-align: center;
}`,
    htmlCode: `<div class="text-wave2-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="text-wave2-word"><span class="text-wave2-char">R</span><span class="text-wave2-char">I</span><span class="text-wave2-char">P</span><span class="text-wave2-char">P</span><span class="text-wave2-char">L</span><span class="text-wave2-char">E</span><span class="text-wave2-char">S</span></div><div class="text-wave2-label">Text Wave</div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-glitch-horizontal',
    name: 'Text Glitch Horizontal',
    category: 'text',
    tags: ['text', 'glitch', 'horizontal', 'slice', 'error'],
    difficulty: 'advanced',
    description: 'Text with horizontal glitch slicing effect where segments shift and distort randomly',
    cssCode: `.text-glitch-h-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-glitch-h {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  position: relative;
  letter-spacing: 3px;
}
.text-glitch-h::before,
.text-glitch-h::after {
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-glitch-h::before {
  color: #ef4444;
  animation: glitch-h-top 2s infinite;
  clip-path: inset(0 0 65% 0);
}
.text-glitch-h::after {
  color: #3b82f6;
  animation: glitch-h-bottom 2s infinite;
  clip-path: inset(65% 0 0 0);
}
@keyframes glitch-h-top {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-4px, -2px); }
  40% { transform: translate(3px, 1px); }
  60% { transform: translate(-2px, 0); }
  80% { transform: translate(5px, -1px); }
}
@keyframes glitch-h-bottom {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(3px, 2px); }
  40% { transform: translate(-5px, -1px); }
  60% { transform: translate(2px, 1px); }
  80% { transform: translate(-3px, 2px); }
}`,
    htmlCode: `<div class="text-glitch-h-wrap"><div class="text-glitch-h">GLITCH</div></div>`,
    isNew: true,
  },
  {
    id: 'text-neon-sign',
    name: 'Text Neon Sign',
    category: 'text',
    tags: ['text', 'neon', 'sign', 'glow', 'light'],
    difficulty: 'intermediate',
    description: 'Text styled as a neon sign with flickering glow effect simulating a real neon tube',
    cssCode: `.text-neon-sign-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-neon-sign {
  font-size: 2.2rem;
  font-weight: 900;
  color: #10b981;
  text-shadow:
    0 0 7px #10b981,
    0 0 10px #10b981,
    0 0 21px #10b981,
    0 0 42px #059669,
    0 0 82px #059669;
  animation: neon-flicker 3s ease-in-out infinite;
  letter-spacing: 4px;
}
@keyframes neon-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      0 0 7px #10b981,
      0 0 10px #10b981,
      0 0 21px #10b981,
      0 0 42px #059669,
      0 0 82px #059669;
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.7;
  }
}
.neon-sign-underline {
  width: 80px;
  height: 2px;
  background: #10b981;
  margin-top: 8px;
  box-shadow: 0 0 8px #10b981, 0 0 20px #10b98144;
  animation: neon-line-flicker 3s ease-in-out infinite;
}
@keyframes neon-line-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.4; }
}`,
    htmlCode: `<div class="text-neon-sign-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="text-neon-sign">OPEN</div><div class="neon-sign-underline"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-water-reflection',
    name: 'Text Water Reflection',
    category: 'text',
    tags: ['text', 'water', 'reflection', 'mirror', 'ripple'],
    difficulty: 'advanced',
    description: 'Text with a rippling water reflection below it, distorted with wave-like animations',
    cssCode: `.text-water-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-water-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-water-main {
  font-size: 1.8rem;
  font-weight: 900;
  color: #10b981;
  letter-spacing: 3px;
  text-shadow: 0 0 10px #10b98133;
}
.text-water-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b98144, transparent);
  margin: 2px 0;
}
.text-water-reflect {
  font-size: 1.8rem;
  font-weight: 900;
  color: #10b981;
  letter-spacing: 3px;
  transform: scaleY(-1);
  opacity: 0.3;
  filter: blur(1px);
  animation: water-ripple 2s ease-in-out infinite;
  -webkit-background-clip: text;
  background-clip: text;
  background: linear-gradient(
    180deg,
    #10b98133 0%,
    #10b98100 40%,
    #10b98122 60%,
    #10b98144 100%
  );
  -webkit-text-fill-color: transparent;
}
@keyframes water-ripple {
  0%, 100% { filter: blur(1px); transform: scaleY(-1) scaleX(1); }
  25% { filter: blur(1.5px); transform: scaleY(-1) scaleX(1.02); }
  50% { filter: blur(2px); transform: scaleY(-1) scaleX(0.98); }
  75% { filter: blur(1.5px); transform: scaleY(-1) scaleX(1.01); }
}`,
    htmlCode: `<div class="text-water-wrap"><div class="text-water-container"><div class="text-water-main">WATER</div><div class="text-water-divider"></div><div class="text-water-reflect">WATER</div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-emboss',
    name: 'Text Emboss',
    category: 'text',
    tags: ['text', 'emboss', '3d', 'raised', 'depth'],
    difficulty: 'intermediate',
    description: 'Text with an embossed raised appearance using layered text-shadows for a 3D depth illusion',
    cssCode: `.text-emboss-wrap {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-emboss {
  font-size: 2.4rem;
  font-weight: 900;
  color: #1a1a2e;
  text-shadow:
    -1px -1px 0 #0a0a1a,
    1px -1px 0 #2a2a4e,
    -1px 1px 0 #0a0a1a,
    1px 1px 0 #2a2a4e,
    0 -2px 3px #10b98122,
    0 2px 3px #00000044;
  letter-spacing: 4px;
  position: relative;
}
.text-emboss::after {
  content: 'EMBOSS';
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  text-shadow: 0 0 4px #10b98133;
  animation: emboss-glow 3s ease-in-out infinite;
}
@keyframes emboss-glow {
  0%, 100% { text-shadow: 0 0 4px #10b98122; }
  50% { text-shadow: 0 0 12px #10b98144; }
}
.text-emboss-label {
  color: #475569;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 10px;
}`,
    htmlCode: `<div class="text-emboss-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="text-emboss">EMBOSS</div><div class="text-emboss-label">Raised Text</div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-letterpress',
    name: 'Text Letterpress',
    category: 'text',
    tags: ['text', 'letterpress', 'indented', 'debossed', 'print'],
    difficulty: 'intermediate',
    description: 'Text that appears pressed into the surface like a letterpress print with inset shadow depth',
    cssCode: `.text-letterpress-wrap {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-letterpress {
  font-size: 2.2rem;
  font-weight: 900;
  color: #141428;
  text-shadow:
    1px 1px 1px #2a2a4e,
    -1px -1px 1px #0a0a18;
  letter-spacing: 4px;
  position: relative;
  animation: letterpress-settle 3s ease-in-out infinite;
}
@keyframes letterpress-settle {
  0%, 100% {
    text-shadow: 1px 1px 1px #2a2a4e, -1px -1px 1px #0a0a18;
  }
  50% {
    text-shadow: 1px 2px 2px #2a2a4e, -1px -1px 2px #0a0a18, 0 0 8px #10b98111;
  }
}
.text-letterpress-plate {
  background: linear-gradient(135deg, #1e1e36, #22223e);
  padding: 16px 28px;
  border-radius: 6px;
  border: 1px solid #2a2a3e;
  box-shadow: inset 0 2px 4px #0a0a1a88, 0 1px 0 #2a2a4e44;
}
.text-letterpress-label {
  color: #475569;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 10px;
}`,
    htmlCode: `<div class="text-letterpress-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="text-letterpress-plate"><div class="text-letterpress">PRESS</div></div><div class="text-letterpress-label">Letterpress</div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-carbon',
    name: 'Text Carbon',
    category: 'text',
    tags: ['text', 'carbon', 'fiber', 'weave', 'pattern'],
    difficulty: 'intermediate',
    description: 'Text with a carbon fiber texture overlay creating an industrial woven appearance',
    cssCode: `.text-carbon-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-carbon-box {
  position: relative;
  padding: 12px 24px;
  border-radius: 8px;
  overflow: hidden;
  background:
    linear-gradient(45deg, #1a1a2e 25%, transparent 25%),
    linear-gradient(-45deg, #1a1a2e 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #1a1a2e 75%),
    linear-gradient(-45deg, transparent 75%, #1a1a2e 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0;
  background-color: #151528;
}
.text-carbon {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(180deg, #94a3b8, #475569, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 4px;
  position: relative;
  text-shadow: none;
  filter: drop-shadow(0 1px 2px #00000088);
}
.text-carbon::after {
  content: 'CARBON';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, #10b98122, transparent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: carbon-sheen 3s ease-in-out infinite;
}
@keyframes carbon-sheen {
  0% { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 -100% 0 0); }
}`,
    htmlCode: `<div class="text-carbon-wrap"><div class="text-carbon-box"><div class="text-carbon">CARBON</div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-holographic',
    name: 'Text Holographic',
    category: 'text',
    tags: ['text', 'holographic', 'rainbow', 'prismatic', 'iridescent'],
    difficulty: 'advanced',
    description: 'Text with a shifting holographic rainbow effect that creates a prismatic iridescent appearance',
    cssCode: `.text-holographic-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-holographic {
  font-size: 2.4rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    #10b981, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: holo-shift 3s linear infinite;
  letter-spacing: 4px;
  position: relative;
  filter: drop-shadow(0 0 8px #10b98133);
}
.text-holographic::after {
  content: 'HOLO';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #ffffff66 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: holo-glare 2s ease-in-out infinite;
}
@keyframes holo-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
@keyframes holo-glare {
  0% { background-position: -200% 50%; }
  100% { background-position: 200% 50%; }
}`,
    htmlCode: `<div class="text-holographic-wrap"><div class="text-holographic">HOLO</div></div>`,
    isNew: true,
  },
  {
    id: 'text-chrome',
    name: 'Text Chrome',
    category: 'text',
    tags: ['text', 'chrome', 'metallic', 'reflective', 'shiny'],
    difficulty: 'advanced',
    description: 'Text with a polished chrome metallic finish using gradient highlights and reflective shadows',
    cssCode: `.text-chrome-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-chrome {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 5px;
  background: linear-gradient(
    180deg,
    #e2e8f0 0%,
    #94a3b8 20%,
    #475569 40%,
    #1e293b 50%,
    #475569 60%,
    #94a3b8 80%,
    #e2e8f0 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  filter: drop-shadow(0 2px 4px #00000088);
}
.text-chrome::after {
  content: 'CHROME';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    #ffffff44 25%,
    transparent 30%,
    transparent 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: chrome-reflect 3s ease-in-out infinite;
}
@keyframes chrome-reflect {
  0%, 100% { background-position: 0 0; }
  50% { background-position: 0 -10px; }
}
.text-chrome-sub {
  color: #475569;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-top: 6px;
  text-shadow: 0 1px 2px #00000044;
}`,
    htmlCode: `<div class="text-chrome-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="text-chrome">CHROME</div><div class="text-chrome-sub">Polished Metal</div></div></div>`,
    isNew: true,
  },

  // ==================== BUTTONS (10 more) ====================
  {
    id: 'button-swipe-fill',
    name: 'Button Swipe Fill',
    category: 'buttons',
    tags: ['button', 'swipe', 'fill', 'hover', 'slide'],
    difficulty: 'beginner',
    description: 'A button where a color fill swipes across from left to right on hover with smooth transition',
    cssCode: `.btn-swipe-fill-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.btn-swipe-fill {
  position: relative;
  padding: 10px 28px;
  border: 2px solid #10b981;
  border-radius: 8px;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}
.btn-swipe-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #10b981;
  z-index: -1;
  transition: width 0.4s ease;
}
.btn-swipe-fill:hover::before {
  width: 100%;
}
.btn-swipe-fill:hover {
  color: #0a0a1a;
}
.btn-swipe-fill-sm {
  padding: 8px 20px;
  font-size: 0.75rem;
  border-color: #6366f1;
  color: #6366f1;
}
.btn-swipe-fill-sm::before {
  background: #6366f1;
}
.btn-swipe-fill-sm:hover {
  color: #0a0a1a;
}`,
    htmlCode: `<div class="btn-swipe-fill-wrap"><button class="btn-swipe-fill">Swipe Fill</button><button class="btn-swipe-fill btn-swipe-fill-sm">Small</button></div>`,
    isNew: true,
  },
  {
    id: 'button-border-trace',
    name: 'Button Border Trace',
    category: 'buttons',
    tags: ['button', 'border', 'trace', 'outline', 'animate'],
    difficulty: 'intermediate',
    description: 'A button whose border draws itself around the edges on hover using animated gradient masking',
    cssCode: `.btn-border-trace-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-border-trace {
  position: relative;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  z-index: 1;
}
.btn-border-trace::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: conic-gradient(from 0deg, #10b981, #10b98100, #10b98100, #10b981);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: border-idle 4s linear infinite;
}
.btn-border-trace:hover::before {
  background: conic-gradient(from 0deg, #10b981, #34d399, #10b98100, #10b98100, #10b981);
  animation: border-trace-anim 1.5s linear infinite;
}
@keyframes border-idle {
  to { --border-angle: 360deg; }
}
@keyframes border-trace-anim {
  0% { filter: brightness(1); }
  50% { filter: brightness(1.5); }
  100% { filter: brightness(1); }
}
.btn-border-trace:hover {
  text-shadow: 0 0 8px #10b98144;
}`,
    htmlCode: `<div class="btn-border-trace-wrap"><button class="btn-border-trace">Border Trace</button></div>`,
    isNew: true,
  },
  {
    id: 'button-magnetic-2',
    name: 'Button Magnetic 2',
    category: 'buttons',
    tags: ['button', 'magnetic', 'attract', 'hover', 'pull'],
    difficulty: 'intermediate',
    description: 'A button with a magnetic hover effect where inner content shifts toward the cursor position',
    cssCode: `.btn-magnetic2-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-magnetic2 {
  padding: 14px 36px;
  border: 2px solid #10b981;
  border-radius: 12px;
  background: #10b98110;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}
.btn-magnetic2:hover {
  border-color: #34d399;
  background: #10b98122;
  box-shadow: 0 0 20px #10b98122, 0 0 40px #10b98111;
  transform: scale(1.05);
}
.btn-magnetic2::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #10b98122;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease;
}
.btn-magnetic2:hover::before {
  transform: translate(-50%, -50%) scale(3);
}
.btn-magnetic2-text {
  position: relative;
  z-index: 1;
}
.btn-magnetic2:hover .btn-magnetic2-text {
  text-shadow: 0 0 8px #10b98144;
}`,
    htmlCode: `<div class="btn-magnetic2-wrap"><button class="btn-magnetic2"><span class="btn-magnetic2-text">Magnetic</span></button></div>`,
    isNew: true,
  },
  {
    id: 'button-liquid-2',
    name: 'Button Liquid 2',
    category: 'buttons',
    tags: ['button', 'liquid', 'morph', 'organic', 'blob'],
    difficulty: 'advanced',
    description: 'A button with a liquid organic fill that morphs and blobs as it fills the button on hover',
    cssCode: `.btn-liquid2-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-liquid2 {
  position: relative;
  padding: 12px 32px;
  border: 2px solid #10b981;
  border-radius: 30px;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.5s ease 0.1s, border-radius 0.5s ease;
  z-index: 1;
}
.btn-liquid2::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #10b981;
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-liquid2:hover::before {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  bottom: -80px;
  left: -30px;
}
.btn-liquid2:hover {
  color: #0a0a1a;
  border-radius: 16px;
}
.btn-liquid2:active::before {
  transition-duration: 0.15s;
  transform: scale(0.95);
}
.btn-liquid2-label {
  position: relative;
  z-index: 1;
}`,
    htmlCode: `<div class="btn-liquid2-wrap"><button class="btn-liquid2"><span class="btn-liquid2-label">Liquid Fill</span></button></div>`,
    isNew: true,
  },
  {
    id: 'button-press-depth',
    name: 'Button Press Depth',
    category: 'buttons',
    tags: ['button', 'press', 'depth', '3d', 'click'],
    difficulty: 'intermediate',
    description: 'A 3D button that visually presses down into the surface when clicked, simulating physical depth',
    cssCode: `.btn-press-depth-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.btn-press-depth {
  padding: 10px 28px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #10b981, #059669);
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow:
    0 6px 0 #047857,
    0 8px 12px #00000044;
  transition: all 0.1s ease;
  transform: translateY(0);
}
.btn-press-depth:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 #047857,
    0 3px 6px #00000044;
}
.btn-press-depth:hover {
  filter: brightness(1.1);
}
.btn-press-depth-alt {
  background: linear-gradient(180deg, #6366f1, #4f46e5);
  box-shadow:
    0 6px 0 #3730a3,
    0 8px 12px #00000044;
  color: #fff;
}
.btn-press-depth-alt:active {
  box-shadow:
    0 2px 0 #3730a3,
    0 3px 6px #00000044;
}`,
    htmlCode: `<div class="btn-press-depth-wrap"><button class="btn-press-depth">Press Me</button><button class="btn-press-depth btn-press-depth-alt">Click</button></div>`,
    isNew: true,
  },
  {
    id: 'button-confirm-check',
    name: 'Button Confirm Check',
    category: 'buttons',
    tags: ['button', 'confirm', 'check', 'success', 'toggle'],
    difficulty: 'intermediate',
    description: 'A button that morphs into a checkmark confirmation state with a smooth transition animation',
    cssCode: `.btn-confirm-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-confirm-check {
  position: relative;
  width: 120px;
  height: 44px;
  border: 2px solid #10b981;
  border-radius: 10px;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-confirm-check:hover {
  background: #10b981;
  color: #0a0a1a;
  transform: scale(1.05);
  box-shadow: 0 0 20px #10b98133;
}
.btn-confirm-check:active {
  transform: scale(0.95);
}
.btn-confirm-text {
  display: inline-block;
  transition: all 0.3s ease;
}
.btn-confirm-check:hover .btn-confirm-text {
  transform: scale(1.1);
}
.btn-confirm-check::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2rem;
  color: #0a0a1a;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.3s ease;
}
.btn-confirm-check:hover::after {
  opacity: 0;
}
.btn-confirm-check:active::after {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.btn-confirm-check:active .btn-confirm-text {
  opacity: 0;
}`,
    htmlCode: `<div class="btn-confirm-wrap"><button class="btn-confirm-check"><span class="btn-confirm-text">Confirm</span></button></div>`,
    isNew: true,
  },
  {
    id: 'button-arrow-slide',
    name: 'Button Arrow Slide',
    category: 'buttons',
    tags: ['button', 'arrow', 'slide', 'hover', 'direction'],
    difficulty: 'beginner',
    description: 'A button with an arrow icon that slides out on hover indicating direction and action',
    cssCode: `.btn-arrow-slide-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.btn-arrow-slide {
  position: relative;
  padding: 10px 28px;
  border: 2px solid #10b981;
  border-radius: 8px;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}
.btn-arrow-icon {
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 1rem;
}
.btn-arrow-slide:hover .btn-arrow-icon {
  transform: translateX(6px);
}
.btn-arrow-slide:hover {
  background: #10b981;
  color: #0a0a1a;
  box-shadow: 0 0 15px #10b98122;
}
.btn-arrow-slide-sm {
  padding: 8px 20px;
  font-size: 0.75rem;
  border-color: #6366f1;
  color: #6366f1;
}
.btn-arrow-slide-sm:hover {
  background: #6366f1;
  color: #fff;
}`,
    htmlCode: `<div class="btn-arrow-slide-wrap"><button class="btn-arrow-slide">Continue <span class="btn-arrow-icon">→</span></button><button class="btn-arrow-slide btn-arrow-slide-sm">Next <span class="btn-arrow-icon">→</span></button></div>`,
    isNew: true,
  },
  {
    id: 'button-bounce-submit',
    name: 'Button Bounce Submit',
    category: 'buttons',
    tags: ['button', 'bounce', 'submit', 'spring', 'feedback'],
    difficulty: 'intermediate',
    description: 'A submit button that bounces with a spring animation on click providing tactile feedback',
    cssCode: `.btn-bounce-submit-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-bounce-submit {
  padding: 12px 32px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 4px 15px #10b98133;
  transition: box-shadow 0.3s ease;
  animation: btn-bounce-idle 2s ease-in-out infinite;
}
.btn-bounce-submit:hover {
  box-shadow: 0 6px 25px #10b98144;
  animation: none;
  transform: scale(1.05);
}
.btn-bounce-submit:active {
  animation: btn-bounce-click 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes btn-bounce-idle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes btn-bounce-click {
  0% { transform: scale(1.05); }
  30% { transform: scale(0.9); }
  50% { transform: scale(1.1); }
  70% { transform: scale(0.97); }
  100% { transform: scale(1); }
}
.btn-bounce-label {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
}`,
    htmlCode: `<div class="btn-bounce-submit-wrap"><div style="display:flex;flex-direction:column;align-items:center"><button class="btn-bounce-submit">Submit</button><div class="btn-bounce-label">Click to Bounce</div></div></div>`,
    isNew: true,
  },
  {
    id: 'button-gradient-shift',
    name: 'Button Gradient Shift',
    category: 'buttons',
    tags: ['button', 'gradient', 'shift', 'animate', 'color'],
    difficulty: 'beginner',
    description: 'A button with a continuously shifting gradient background that creates a vibrant color animation',
    cssCode: `.btn-gradient-shift-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.btn-gradient-shift {
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 100%;
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.85rem;
  cursor: pointer;
  animation: grad-shift-flow 3s linear infinite;
  box-shadow: 0 4px 15px #10b98122;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-gradient-shift:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 25px #10b98133;
}
.btn-gradient-shift:active {
  transform: scale(0.97);
}
@keyframes grad-shift-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}
.btn-gradient-shift-sm {
  padding: 8px 22px;
  font-size: 0.75rem;
  background: linear-gradient(90deg, #f59e0b, #ef4444, #ec4899, #f59e0b);
  background-size: 300% 100%;
  animation: grad-shift-flow 4s linear infinite;
}
.btn-gradient-shift-sm:hover {
  box-shadow: 0 6px 25px #f59e0b33;
}`,
    htmlCode: `<div class="btn-gradient-shift-wrap"><button class="btn-gradient-shift">Gradient Shift</button><button class="btn-gradient-shift btn-gradient-shift-sm">Warm</button></div>`,
    isNew: true,
  },
  {
    id: 'button-pulse-ring-2',
    name: 'Button Pulse Ring 2',
    category: 'buttons',
    tags: ['button', 'pulse', 'ring', 'ripple', 'attention'],
    difficulty: 'intermediate',
    description: 'A button with expanding pulse rings emanating outward to draw attention with a glowing effect',
    cssCode: `.btn-pulse-ring2-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-pulse-ring2 {
  position: relative;
  padding: 12px 32px;
  border: 2px solid #10b981;
  border-radius: 10px;
  background: #10b98115;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}
.btn-pulse-ring2::before,
.btn-pulse-ring2::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 12px;
  border: 2px solid #10b981;
  animation: pulse-ring-expand 2s ease-out infinite;
  opacity: 0;
}
.btn-pulse-ring2::after {
  animation-delay: 1s;
}
@keyframes pulse-ring-expand {
  0% { inset: -4px; opacity: 0.6; border-color: #10b981; }
  100% { inset: -20px; opacity: 0; border-color: #10b98100; }
}
.btn-pulse-ring2:hover {
  background: #10b981;
  color: #0a0a1a;
  box-shadow: 0 0 20px #10b98133;
}
.btn-pulse-ring2:active {
  transform: scale(0.95);
}
.btn-pulse-ring2:hover::before,
.btn-pulse-ring2:hover::after {
  animation-play-state: paused;
  opacity: 0;
}`,
    htmlCode: `<div class="btn-pulse-ring2-wrap"><button class="btn-pulse-ring2">Pulse Ring</button></div>`,
    isNew: true,
  },
];
