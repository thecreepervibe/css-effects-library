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

export const effectsNewBatch9: CSSEffect[] = [
  // ==================== SHADOWS (10) ====================
  {
    id: 'shadow-long-2',
    name: 'Shadow Long 2',
    category: 'shadows',
    tags: ['shadow', 'long', 'cast', 'directional', 'depth'],
    difficulty: 'beginner',
    description: 'An element with an elongated directional shadow that creates a dramatic casting effect',
    cssCode: `.shadow-long-2 {
  padding: 20px 32px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  transition: all 0.3s ease;
}
.shadow-long-2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 5%;
  width: 90%;
  height: 12px;
  background: #10b981;
  filter: blur(14px);
  opacity: 0.35;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.shadow-long-2:hover {
  transform: translateY(-4px);
  border-color: #10b98144;
}
.shadow-long-2:hover::after {
  bottom: -20px;
  opacity: 0.5;
  filter: blur(20px);
}`,
    htmlCode: `<div class="shadow-long-2">Long Shadow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-multi-color',
    name: 'Shadow Multi Color',
    category: 'shadows',
    tags: ['shadow', 'multi', 'color', 'rainbow', 'vibrant'],
    difficulty: 'intermediate',
    description: 'An element with multiple colored shadows creating a vibrant prismatic effect',
    cssCode: `.shadow-multi-color {
  padding: 20px 32px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  position: relative;
}
.shadow-multi-color:hover {
  box-shadow:
    -8px -4px 20px #10b98133,
    8px -4px 20px #3b82f633,
    -8px 4px 20px #f59e0b33,
    8px 4px 20px #ec489933;
  border-color: #10b98144;
  transform: translateY(-2px);
}`,
    htmlCode: `<div class="shadow-multi-color">Multi Color Shadow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-neon-pulse',
    name: 'Shadow Neon Pulse',
    category: 'shadows',
    tags: ['shadow', 'neon', 'pulse', 'glow', 'animate'],
    difficulty: 'intermediate',
    description: 'An element with a pulsing neon shadow that breathes with an emerald glow animation',
    cssCode: `.shadow-neon-pulse {
  padding: 20px 32px;
  background: #0a0a1a;
  border: 2px solid #10b981;
  border-radius: 10px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  animation: neon-pulse-shadow 2s ease-in-out infinite;
}
@keyframes neon-pulse-shadow {
  0%, 100% {
    box-shadow: 0 0 5px #10b98144, 0 0 20px #10b98122;
  }
  50% {
    box-shadow: 0 0 10px #10b98166, 0 0 40px #10b98144, 0 0 80px #10b98122;
  }
}`,
    htmlCode: `<div class="shadow-neon-pulse">Neon Pulse</div>`,
    isNew: true,
  },
  {
    id: 'shadow-depth-layer',
    name: 'Shadow Depth Layer',
    category: 'shadows',
    tags: ['shadow', 'depth', 'layer', 'stacked', 'elevation'],
    difficulty: 'intermediate',
    description: 'An element with layered shadows that simulate progressive depth and elevation',
    cssCode: `.shadow-depth-layer {
  padding: 20px 32px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 1px 2px #10b98108,
    0 2px 4px #10b98106,
    0 4px 8px #10b98104;
}
.shadow-depth-layer:hover {
  transform: translateY(-6px);
  box-shadow:
    0 4px 8px #10b98115,
    0 8px 16px #10b98112,
    0 16px 32px #10b98110,
    0 24px 48px #10b98108;
  border-color: #10b98144;
}`,
    htmlCode: `<div class="shadow-depth-layer">Depth Layer</div>`,
    isNew: true,
  },
  {
    id: 'shadow-hover-lift',
    name: 'Shadow Hover Lift',
    category: 'shadows',
    tags: ['shadow', 'hover', 'lift', 'float', 'elevate'],
    difficulty: 'beginner',
    description: 'An element that lifts off the surface on hover with an expanding shadow beneath it',
    cssCode: `.shadow-hover-lift {
  padding: 20px 32px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px #10b98115;
  cursor: pointer;
}
.shadow-hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px #10b98125, 0 8px 16px #10b98115;
  border-color: #10b98155;
  color: #10b981;
}
.shadow-hover-lift:active {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px #10b98115;
}`,
    htmlCode: `<div class="shadow-hover-lift">Hover Lift</div>`,
    isNew: true,
  },
  {
    id: 'shadow-glow-breathe',
    name: 'Shadow Glow Breathe',
    category: 'shadows',
    tags: ['shadow', 'glow', 'breathe', 'animate', 'soft'],
    difficulty: 'intermediate',
    description: 'An element with a breathing glow shadow that smoothly expands and contracts like inhaling',
    cssCode: `.shadow-glow-breathe {
  padding: 20px 32px;
  background: #0a0a1a;
  border: 1px solid #10b98144;
  border-radius: 12px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  animation: glow-breathe 3s ease-in-out infinite;
}
@keyframes glow-breathe {
  0%, 100% {
    box-shadow: 0 0 8px #10b98122, 0 0 20px #10b98111;
    border-color: #10b98133;
  }
  50% {
    box-shadow: 0 0 20px #10b98144, 0 0 50px #10b98122, 0 0 80px #10b98111;
    border-color: #10b98166;
  }
}`,
    htmlCode: `<div class="shadow-glow-breathe">Glow Breathe</div>`,
    isNew: true,
  },
  {
    id: 'shadow-double',
    name: 'Shadow Double',
    category: 'shadows',
    tags: ['shadow', 'double', 'dual', 'offset', 'layered'],
    difficulty: 'beginner',
    description: 'An element with two offset shadows creating a layered double-shadow effect',
    cssCode: `.shadow-double {
  padding: 20px 32px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  box-shadow:
    8px 8px 0 #10b98122,
    16px 16px 0 #10b98111;
}
.shadow-double:hover {
  transform: translate(-4px, -4px);
  box-shadow:
    12px 12px 0 #10b98133,
    24px 24px 0 #10b98118;
  border-color: #10b98144;
}`,
    htmlCode: `<div class="shadow-double">Double Shadow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-soft-spread',
    name: 'Shadow Soft Spread',
    category: 'shadows',
    tags: ['shadow', 'soft', 'spread', 'diffuse', 'ambient'],
    difficulty: 'beginner',
    description: 'An element with a wide soft spread shadow creating an ambient diffused glow underneath',
    cssCode: `.shadow-soft-spread {
  padding: 20px 32px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px -8px #10b98130;
}
.shadow-soft-spread:hover {
  box-shadow: 0 20px 60px -10px #10b98145;
  transform: translateY(-3px);
  border-color: #10b98144;
  color: #10b981;
}`,
    htmlCode: `<div class="shadow-soft-spread">Soft Spread</div>`,
    isNew: true,
  },
  {
    id: 'shadow-hard-edge',
    name: 'Shadow Hard Edge',
    category: 'shadows',
    tags: ['shadow', 'hard', 'edge', 'sharp', 'solid'],
    difficulty: 'beginner',
    description: 'An element with a hard-edged solid shadow creating a bold retro offset effect',
    cssCode: `.shadow-hard-edge {
  padding: 20px 32px;
  background: #10b981;
  border: 2px solid #0a0a1a;
  border-radius: 4px;
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.8rem;
  transition: all 0.15s ease;
  box-shadow: 5px 5px 0 #059669;
  cursor: pointer;
}
.shadow-hard-edge:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 #059669;
}
.shadow-hard-edge:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #059669;
}`,
    htmlCode: `<div class="shadow-hard-edge">Hard Edge</div>`,
    isNew: true,
  },
  {
    id: 'shadow-perspective',
    name: 'Shadow Perspective',
    category: 'shadows',
    tags: ['shadow', 'perspective', '3d', 'ground', 'tilt'],
    difficulty: 'advanced',
    description: 'An element with a perspective shadow that simulates a ground-plane cast shadow with 3D depth',
    cssCode: `.shadow-perspective-wrap {
  perspective: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.shadow-perspective {
  padding: 18px 32px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.4s ease;
  transform: rotateX(5deg);
  transform-origin: bottom center;
}
.shadow-perspective::after {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 10%;
  width: 80%;
  height: 18px;
  background: #10b981;
  filter: blur(12px);
  opacity: 0.25;
  border-radius: 50%;
  transition: all 0.4s ease;
}
.shadow-perspective:hover {
  transform: rotateX(0deg) translateY(-8px);
  border-color: #10b98155;
}
.shadow-perspective:hover::after {
  bottom: -28px;
  left: 5%;
  width: 90%;
  opacity: 0.4;
  filter: blur(18px);
}`,
    htmlCode: `<div class="shadow-perspective-wrap"><div class="shadow-perspective">Perspective Shadow</div></div>`,
    isNew: true,
  },

  // ==================== BORDERS (10) ====================
  {
    id: 'border-corner-accent',
    name: 'Border Corner Accent',
    category: 'borders',
    tags: ['border', 'corner', 'accent', 'decoration', 'mark'],
    difficulty: 'intermediate',
    description: 'A card with animated corner accent marks that highlight the edges on hover',
    cssCode: `.border-corner-accent {
  width: 200px;
  height: 120px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  position: relative;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  overflow: hidden;
}
.border-corner-accent::before,
.border-corner-accent::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
.border-corner-accent::before {
  top: 8px; left: 8px;
  border-top-color: #10b981; border-left-color: #10b981;
}
.border-corner-accent::after {
  bottom: 8px; right: 8px;
  border-bottom-color: #10b981; border-right-color: #10b981;
}
.border-corner-accent:hover::before,
.border-corner-accent:hover::after {
  width: 40px; height: 40px;
}
.border-corner-accent:hover { border-color: #10b98133; }`,
    htmlCode: `<div class="border-corner-accent">Corner Accent</div>`,
    isNew: true,
  },
  {
    id: 'border-dash-animate',
    name: 'Border Dash Animate',
    category: 'borders',
    tags: ['border', 'dash', 'animate', 'march', 'stroke'],
    difficulty: 'intermediate',
    description: 'An element with an animated dashed border that appears to march around the edges',
    cssCode: `.border-dash-animate {
  padding: 20px 32px;
  background: #0a0a1a;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
}
.border-dash-animate::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  padding: 2px;
  background: repeating-linear-gradient(90deg, #10b981 0, #10b981 8px, transparent 8px, transparent 16px);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: dash-march 1s linear infinite;
}
@keyframes dash-march {
  to { background-position: 16px 0; }
}
.border-dash-animate:hover { color: #10b981; }`,
    htmlCode: `<div class="border-dash-animate">Dash Animate</div>`,
    isNew: true,
  },
  {
    id: 'border-glow-pulse',
    name: 'Border Glow Pulse',
    category: 'borders',
    tags: ['border', 'glow', 'pulse', 'neon', 'animate'],
    difficulty: 'intermediate',
    description: 'A border that pulses with a glowing neon effect creating a breathing light outline',
    cssCode: `.border-glow-pulse {
  padding: 20px 32px;
  background: #0a0a1a;
  border: 2px solid #10b981;
  border-radius: 10px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  animation: border-glow 2s ease-in-out infinite;
}
@keyframes border-glow {
  0%, 100% {
    border-color: #10b98144;
    box-shadow: 0 0 5px #10b98122, inset 0 0 5px #10b98111;
  }
  50% {
    border-color: #10b981;
    box-shadow: 0 0 15px #10b98144, 0 0 30px #10b98122, inset 0 0 10px #10b98111;
  }
}`,
    htmlCode: `<div class="border-glow-pulse">Glow Pulse</div>`,
    isNew: true,
  },
  {
    id: 'border-gradient-spin',
    name: 'Border Gradient Spin',
    category: 'borders',
    tags: ['border', 'gradient', 'spin', 'rotate', 'conic'],
    difficulty: 'advanced',
    description: 'A border with a spinning gradient that rotates around the element using conic gradient',
    cssCode: `.border-gradient-spin {
  padding: 20px 32px;
  background: #0f0f1a;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  z-index: 0;
}
.border-gradient-spin::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 12px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  z-index: -2;
  animation: gradient-spin 3s linear infinite;
}
.border-gradient-spin::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes gradient-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="border-gradient-spin">Gradient Spin</div>`,
    isNew: true,
  },
  {
    id: 'border-clip-path',
    name: 'Border Clip Path',
    category: 'borders',
    tags: ['border', 'clip-path', 'shape', 'geometric', 'cut'],
    difficulty: 'advanced',
    description: 'A border effect using clip-path to create geometric cut corners and shaped outlines',
    cssCode: `.border-clip-path-outer {
  background: #10b981;
  clip-path: polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px);
  padding: 2px;
  display: inline-block;
  transition: all 0.3s ease;
}
.border-clip-path-inner {
  background: #0a0a1a;
  clip-path: polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px);
  padding: 18px 32px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
}
.border-clip-path-outer:hover {
  background: linear-gradient(135deg, #10b981, #3b82f6);
}
.border-clip-path-outer:hover .border-clip-path-inner {
  color: #10b981;
}`,
    htmlCode: `<div class="border-clip-path-outer"><div class="border-clip-path-inner">Clip Path</div></div>`,
    isNew: true,
  },
  {
    id: 'border-wave-animate',
    name: 'Border Wave Animate',
    category: 'borders',
    tags: ['border', 'wave', 'animate', 'organic', 'flow'],
    difficulty: 'advanced',
    description: 'An animated border with a wave-like distortion that flows around the element edges',
    cssCode: `.border-wave-animate {
  padding: 20px 32px;
  background: #0f0f1a;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  z-index: 0;
}
.border-wave-animate::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: #10b981;
  z-index: -2;
  animation: wave-border 4s ease-in-out infinite;
  border-radius: 10px;
}
.border-wave-animate::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #0f0f1a;
  z-index: -1;
  border-radius: 8px;
}
@keyframes wave-border {
  0% { border-radius: 10px 30px 10px 30px; }
  25% { border-radius: 30px 10px 30px 10px; }
  50% { border-radius: 10px 30px 10px 30px; }
  75% { border-radius: 30px 10px 30px 10px; }
  100% { border-radius: 10px 30px 10px 30px; }
}`,
    htmlCode: `<div class="border-wave-animate">Wave Border</div>`,
    isNew: true,
  },
  {
    id: 'border-neon-trace',
    name: 'Border Neon Trace',
    category: 'borders',
    tags: ['border', 'neon', 'trace', 'draw', 'animate'],
    difficulty: 'advanced',
    description: 'A neon light that traces around the border of an element creating a drawing animation effect',
    cssCode: `.border-neon-trace {
  padding: 20px 32px;
  background: #0a0a1a;
  border-radius: 8px;
  color: #64748b;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  overflow: hidden;
}
.border-neon-trace::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: conic-gradient(from var(--trace-angle, 0deg), #10b981, #10b981 10deg, transparent 10deg, transparent 360deg);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: neon-trace 3s linear infinite;
}
@keyframes neon-trace {
  to { --trace-angle: 360deg; }
}
.border-neon-trace::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  border: 1px solid #10b98133;
  animation: neon-flicker 2s ease-in-out infinite;
}
@keyframes neon-flicker {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}
.border-neon-trace:hover { color: #10b981; }`,
    htmlCode: `<div class="border-neon-trace">Neon Trace</div>`,
    isNew: true,
  },
  {
    id: 'border-double-line',
    name: 'Border Double Line',
    category: 'borders',
    tags: ['border', 'double', 'line', 'parallel', 'outline'],
    difficulty: 'beginner',
    description: 'An element with a stylish double-line border creating parallel outlines with gap spacing',
    cssCode: `.border-double-line {
  padding: 20px 32px;
  background: #0f0f1a;
  border: 3px double #10b981;
  border-radius: 4px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  outline: 1px solid #10b98122;
  outline-offset: 4px;
}
.border-double-line:hover {
  border-color: #34d399;
  outline-color: #10b98144;
  outline-offset: 8px;
  box-shadow: 0 0 15px #10b98115;
}`,
    htmlCode: `<div class="border-double-line">Double Line</div>`,
    isNew: true,
  },
  {
    id: 'border-offset',
    name: 'Border Offset',
    category: 'borders',
    tags: ['border', 'offset', 'shift', 'misaligned', 'creative'],
    difficulty: 'intermediate',
    description: 'A border that is offset from the element creating an intentionally misaligned creative effect',
    cssCode: `.border-offset {
  padding: 20px 32px;
  background: #0f0f1a;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  border: 1px solid #2a2a3e;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.border-offset::before {
  content: '';
  position: absolute;
  inset: 4px -4px -4px 4px;
  border: 2px solid #10b98155;
  border-radius: 4px;
  transition: all 0.3s ease;
  pointer-events: none;
}
.border-offset:hover {
  border-color: #10b98133;
}
.border-offset:hover::before {
  inset: -4px 4px 4px -4px;
  border-color: #10b981;
}`,
    htmlCode: `<div class="border-offset">Border Offset</div>`,
    isNew: true,
  },
  {
    id: 'border-shadow-combo',
    name: 'Border Shadow Combo',
    category: 'borders',
    tags: ['border', 'shadow', 'combo', 'combined', 'elevate'],
    difficulty: 'intermediate',
    description: 'An element combining a glowing border with a matching shadow that lifts on hover',
    cssCode: `.border-shadow-combo {
  padding: 20px 32px;
  background: #0a0a1a;
  border: 1px solid #10b98144;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px #10b98111;
}
.border-shadow-combo:hover {
  border-color: #10b981;
  box-shadow:
    0 0 10px #10b98133,
    0 8px 30px #10b98122,
    inset 0 0 10px #10b98108;
  transform: translateY(-3px);
  color: #10b981;
}`,
    htmlCode: `<div class="border-shadow-combo">Border + Shadow</div>`,
    isNew: true,
  },

  // ==================== INPUTS (10) ====================
  {
    id: 'input-material',
    name: 'Input Material',
    category: 'inputs',
    tags: ['input', 'material', 'design', 'label', 'float'],
    difficulty: 'intermediate',
    description: 'A Material Design inspired input with a floating label that animates above on focus',
    cssCode: `.input-material {
  position: relative;
  width: 220px;
}
.input-material-field {
  width: 100%;
  padding: 14px 12px 6px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
}
.input-material-label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 0.75rem;
  pointer-events: none;
  transition: all 0.2s ease;
}
.input-material-field:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 2px #10b98122;
}
.input-material-field:focus + .input-material-label,
.input-material-field:not(:placeholder-shown) + .input-material-label {
  top: 6px;
  transform: translateY(0);
  font-size: 0.55rem;
  color: #10b981;
}`,
    htmlCode: `<div class="input-material"><input class="input-material-field" placeholder=" " /><label class="input-material-label">Username</label></div>`,
    isNew: true,
  },
  {
    id: 'input-floating-icon',
    name: 'Input Floating Icon',
    category: 'inputs',
    tags: ['input', 'icon', 'floating', 'prefix', 'label'],
    difficulty: 'intermediate',
    description: 'An input with an icon prefix and a floating label that moves up when the input is focused',
    cssCode: `.input-float-icon {
  position: relative;
  width: 220px;
}
.input-float-icon-field {
  width: 100%;
  padding: 14px 12px 6px 36px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
}
.input-float-icon-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 0.85rem;
  transition: color 0.3s;
}
.input-float-icon-label {
  position: absolute;
  left: 36px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 0.7rem;
  pointer-events: none;
  transition: all 0.2s ease;
}
.input-float-icon-field:focus { border-color: #10b981; }
.input-float-icon-field:focus ~ .input-float-icon-icon { color: #10b981; }
.input-float-icon-field:focus + .input-float-icon-label,
.input-float-icon-field:not(:placeholder-shown) + .input-float-icon-label {
  top: 4px; transform: translateY(0); font-size: 0.5rem; color: #10b981;
}`,
    htmlCode: `<div class="input-float-icon"><input class="input-float-icon-field" placeholder=" " /><label class="input-float-icon-label">Email</label><span class="input-float-icon-icon">✉</span></div>`,
    isNew: true,
  },
  {
    id: 'input-expand-focus',
    name: 'Input Expand Focus',
    category: 'inputs',
    tags: ['input', 'expand', 'focus', 'grow', 'width'],
    difficulty: 'intermediate',
    description: 'An input that expands its width smoothly when focused, creating an unfolding effect',
    cssCode: `.input-expand-focus {
  width: 140px;
  padding: 12px 14px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
}
.input-expand-focus::placeholder {
  color: #475569;
  transition: all 0.3s;
}
.input-expand-focus:focus {
  width: 260px;
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98118, 0 4px 20px #10b98111;
}
.input-expand-focus:focus::placeholder {
  color: #10b98166;
}`,
    htmlCode: `<input class="input-expand-focus" placeholder="Click to expand..." />`,
    isNew: true,
  },
  {
    id: 'input-success-shake',
    name: 'Input Success Shake',
    category: 'inputs',
    tags: ['input', 'success', 'shake', 'validation', 'feedback'],
    difficulty: 'intermediate',
    description: 'An input that shakes on invalid input and shows a green success state on valid input',
    cssCode: `.input-success-shake {
  width: 220px;
  padding: 12px 14px;
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}
.input-success-shake:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98118;
}
.input-success-shake:valid {
  border-color: #10b981;
  box-shadow: 0 0 0 2px #10b98122;
}
.input-success-shake:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  animation: input-shake 0.4s ease;
  box-shadow: 0 0 0 2px #ef444422;
}
@keyframes input-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`,
    htmlCode: `<input class="input-success-shake" type="email" placeholder="Enter valid email" required />`,
    isNew: true,
  },
  {
    id: 'input-password-toggle',
    name: 'Input Password Toggle',
    category: 'inputs',
    tags: ['input', 'password', 'toggle', 'visibility', 'eye'],
    difficulty: 'intermediate',
    description: 'A password input with a styled visibility toggle button to show or hide the password',
    cssCode: `.input-pw-toggle-wrap {
  position: relative;
  width: 220px;
  display: flex;
  align-items: center;
}
.input-pw-toggle {
  width: 100%;
  padding: 12px 40px 12px 14px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.3s;
  box-sizing: border-box;
}
.input-pw-toggle:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 2px #10b98122;
}
.input-pw-toggle-btn {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 4px;
  transition: color 0.2s;
  line-height: 1;
}
.input-pw-toggle-btn:hover { color: #10b981; }
.input-pw-toggle::-ms-reveal { display: none; }`,
    htmlCode: `<div class="input-pw-toggle-wrap"><input class="input-pw-toggle" type="password" placeholder="Password" /><button class="input-pw-toggle-btn" onclick="const i=this.previousElementSibling;i.type=i.type==='password'?'text':'password';this.textContent=i.type==='password'?'👁':'🔒'">👁</button></div>`,
    isNew: true,
  },
  {
    id: 'input-range-styled',
    name: 'Input Range Styled',
    category: 'inputs',
    tags: ['input', 'range', 'slider', 'styled', 'custom'],
    difficulty: 'intermediate',
    description: 'A fully custom styled range slider with emerald track and thumb that glows on interaction',
    cssCode: `.input-range-styled {
  -webkit-appearance: none;
  width: 200px;
  height: 6px;
  background: #1a1a2e;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}
.input-range-styled::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  box-shadow: 0 0 8px #10b98144;
  transition: all 0.2s;
  border: 2px solid #0a0a1a;
}
.input-range-styled::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px #10b98166;
}
.input-range-styled::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: 2px solid #0a0a1a;
  box-shadow: 0 0 8px #10b98144;
}
.input-range-styled::-moz-range-track {
  height: 6px;
  background: #1a1a2e;
  border-radius: 3px;
}`,
    htmlCode: `<input class="input-range-styled" type="range" min="0" max="100" value="60" />`,
    isNew: true,
  },
  {
    id: 'input-color-pick',
    name: 'Input Color Pick',
    category: 'inputs',
    tags: ['input', 'color', 'picker', 'swatch', 'custom'],
    difficulty: 'intermediate',
    description: 'A styled color picker input with a custom swatch wrapper and label integration',
    cssCode: `.input-color-pick-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 8px 14px;
  transition: border-color 0.3s;
}
.input-color-pick-wrap:hover { border-color: #10b98144; }
.input-color-pick-swatch {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid #2a2a3e;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.input-color-pick-swatch:hover {
  border-color: #10b981;
  box-shadow: 0 0 10px #10b98133;
}
.input-color-pick {
  -webkit-appearance: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: transparent;
  padding: 0;
}
.input-color-pick::-webkit-color-swatch-wrapper { padding: 0; }
.input-color-pick::-webkit-color-swatch { border: none; border-radius: 4px; }
.input-color-pick-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="input-color-pick-wrap"><div class="input-color-pick-swatch"><input class="input-color-pick" type="color" value="#10b981" /></div><span class="input-color-pick-label">Pick Color</span></div>`,
    isNew: true,
  },
  {
    id: 'input-file-custom',
    name: 'Input File Custom',
    category: 'inputs',
    tags: ['input', 'file', 'upload', 'custom', 'drag'],
    difficulty: 'intermediate',
    description: 'A custom styled file upload input replacing the default browser file picker with a styled drop zone',
    cssCode: `.input-file-custom {
  position: relative;
  display: inline-block;
}
.input-file-custom-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
}
.input-file-custom-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 200px;
  height: 100px;
  background: #0f0f1a;
  border: 2px dashed #2a2a3e;
  border-radius: 10px;
  color: #64748b;
  font-size: 0.7rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
.input-file-custom-zone-icon {
  font-size: 1.2rem;
  transition: all 0.3s;
}
.input-file-custom:hover .input-file-custom-zone {
  border-color: #10b981;
  color: #10b981;
  background: #10b98108;
}
.input-file-custom:hover .input-file-custom-zone-icon {
  transform: translateY(-3px);
}`,
    htmlCode: `<div class="input-file-custom"><input class="input-file-custom-input" type="file" /><div class="input-file-custom-zone"><span class="input-file-custom-zone-icon">📁</span><span>Drop file or click</span></div></div>`,
    isNew: true,
  },
  {
    id: 'input-tag-add',
    name: 'Input Tag Add',
    category: 'inputs',
    tags: ['input', 'tag', 'add', 'chip', 'multi'],
    difficulty: 'advanced',
    description: 'A tag input field where entered values appear as removable tag chips above the input',
    cssCode: `.input-tag-add {
  width: 260px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 8px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}
.input-tag-add:focus-within { border-color: #10b981; }
.input-tag-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 6px;
}
.input-tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #10b98122;
  color: #10b981;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.6rem;
  font-weight: 600;
}
.input-tag-chip-x {
  cursor: pointer;
  color: #10b981aa;
  font-size: 0.65rem;
  line-height: 1;
}
.input-tag-chip-x:hover { color: #ef4444; }
.input-tag-field {
  width: 100%;
  background: transparent;
  border: none;
  color: #e2e8f0;
  font-size: 0.75rem;
  outline: none;
  padding: 4px;
}`,
    htmlCode: `<div class="input-tag-add"><div class="input-tag-tags"><span class="input-tag-chip">CSS<span class="input-tag-chip-x">&times;</span></span><span class="input-tag-chip">React<span class="input-tag-chip-x">&times;</span></span></div><input class="input-tag-field" placeholder="Add tag..." /></div>`,
    isNew: true,
  },
  {
    id: 'input-autocomplete',
    name: 'Input Autocomplete',
    category: 'inputs',
    tags: ['input', 'autocomplete', 'dropdown', 'suggest', 'search'],
    difficulty: 'advanced',
    description: 'A styled autocomplete input with a dropdown suggestion list that appears with matching options',
    cssCode: `.input-autocomplete-wrap {
  position: relative;
  width: 240px;
}
.input-autocomplete {
  width: 100%;
  padding: 12px 14px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.3s;
  box-sizing: border-box;
}
.input-autocomplete:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 2px #10b98122;
}
.input-autocomplete-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 0 0 8px 8px;
  border-top: none;
  overflow: hidden;
  z-index: 10;
}
.input-autocomplete-item {
  padding: 10px 14px;
  color: #94a3b8;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.15s;
}
.input-autocomplete-item:hover {
  background: #10b98115;
  color: #10b981;
}
.input-autocomplete-item:first-child { color: #10b981; background: #10b98110; }`,
    htmlCode: `<div class="input-autocomplete-wrap"><input class="input-autocomplete" placeholder="Search..." /><div class="input-autocomplete-dropdown"><div class="input-autocomplete-item">CSS Effects</div><div class="input-autocomplete-item">CSS Animations</div><div class="input-autocomplete-item">CSS Transitions</div></div></div>`,
    isNew: true,
  },

  // ==================== TOGGLES (10) ====================
  {
    id: 'toggle-dark-mode',
    name: 'Toggle Dark Mode',
    category: 'toggles',
    tags: ['toggle', 'dark', 'mode', 'switch', 'theme'],
    difficulty: 'intermediate',
    description: 'A dark mode toggle switch with moon and sun iconography that slides between light and dark states',
    cssCode: `.toggle-dark-wrap {
  width: 56px;
  height: 28px;
  background: #1a1a2e;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
  border: 1px solid #2a2a3e;
}
.toggle-dark-wrap::before {
  content: '🌙';
  position: absolute;
  width: 22px;
  height: 22px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #0f0f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-dark-input { display: none; }
.toggle-dark-input:checked + .toggle-dark-wrap {
  background: #10b98122;
  border-color: #10b98144;
}
.toggle-dark-input:checked + .toggle-dark-wrap::before {
  transform: translateX(28px);
  content: '☀️';
  background: #10b98133;
}`,
    htmlCode: `<input class="toggle-dark-input" type="checkbox" id="dark-toggle" /><label class="toggle-dark-wrap" for="dark-toggle"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-neon-switch',
    name: 'Toggle Neon Switch',
    category: 'toggles',
    tags: ['toggle', 'neon', 'switch', 'glow', 'light'],
    difficulty: 'intermediate',
    description: 'A toggle switch with a neon glow effect that illuminates when activated with emerald light',
    cssCode: `.toggle-neon-input { display: none; }
.toggle-neon-wrap {
  width: 52px;
  height: 26px;
  background: #0a0a1a;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  border: 2px solid #2a2a3e;
  transition: all 0.3s;
}
.toggle-neon-wrap::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-neon-input:checked + .toggle-neon-wrap {
  border-color: #10b981;
  box-shadow: 0 0 10px #10b98144, 0 0 20px #10b98122, inset 0 0 8px #10b98111;
}
.toggle-neon-input:checked + .toggle-neon-wrap::before {
  transform: translateX(26px);
  background: #10b981;
  box-shadow: 0 0 8px #10b98166;
}`,
    htmlCode: `<input class="toggle-neon-input" type="checkbox" id="neon-toggle" /><label class="toggle-neon-wrap" for="neon-toggle"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-day-night',
    name: 'Toggle Day Night',
    category: 'toggles',
    tags: ['toggle', 'day', 'night', 'sun', 'moon'],
    difficulty: 'advanced',
    description: 'A toggle that transitions between a day sky and night sky with sun and moon elements',
    cssCode: `.toggle-day-night-input { display: none; }
.toggle-day-night {
  width: 64px;
  height: 30px;
  background: linear-gradient(135deg, #87ceeb, #5ba3d9);
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.5s;
}
.toggle-day-night::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 8px #f59e0b66;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-day-night-input:checked + .toggle-day-night {
  background: linear-gradient(135deg, #0a0a1a, #1a1a2e);
}
.toggle-day-night-input:checked + .toggle-day-night::after {
  transform: translateX(34px);
  background: #e2e8f0;
  box-shadow: 0 0 10px #e2e8f033, inset -4px -2px 0 #94a3b844;
}`,
    htmlCode: `<input class="toggle-day-night-input" type="checkbox" id="day-night" /><label class="toggle-day-night" for="day-night"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-stretch',
    name: 'Toggle Stretch',
    category: 'toggles',
    tags: ['toggle', 'stretch', 'elastic', 'morph', 'shape'],
    difficulty: 'intermediate',
    description: 'A toggle whose knob stretches and morphs as it slides across, creating an elastic rubber effect',
    cssCode: `.toggle-stretch-input { display: none; }
.toggle-stretch-wrap {
  width: 52px;
  height: 26px;
  background: #1a1a2e;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  border: 1px solid #2a2a3e;
  transition: background 0.3s;
}
.toggle-stretch-wrap::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-stretch-input:checked + .toggle-stretch-wrap {
  background: #10b98122;
  border-color: #10b98144;
}
.toggle-stretch-input:checked + .toggle-stretch-wrap::before {
  transform: translateX(26px);
  background: #10b981;
  border-radius: 10px 50% 50% 10px;
  width: 24px;
}
.toggle-stretch-wrap:active::before {
  width: 26px;
  border-radius: 10px;
}`,
    htmlCode: `<input class="toggle-stretch-input" type="checkbox" id="stretch-tog" /><label class="toggle-stretch-wrap" for="stretch-tog"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-jelly-bounce',
    name: 'Toggle Jelly Bounce',
    category: 'toggles',
    tags: ['toggle', 'jelly', 'bounce', 'squash', 'elastic'],
    difficulty: 'advanced',
    description: 'A toggle with a jelly-like knob that bounces and squashes when toggled, with springy physics',
    cssCode: `.toggle-jelly-input { display: none; }
.toggle-jelly-wrap {
  width: 54px;
  height: 28px;
  background: #1a1a2e;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  border: 1px solid #2a2a3e;
  transition: all 0.3s;
}
.toggle-jelly-wrap::before {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.toggle-jelly-input:checked + .toggle-jelly-wrap {
  background: #10b98122;
  border-color: #10b98155;
}
.toggle-jelly-input:checked + .toggle-jelly-wrap::before {
  transform: translateX(26px);
  background: #10b981;
  animation: jelly-squash 0.5s ease;
}
@keyframes jelly-squash {
  0% { border-radius: 50%; }
  30% { border-radius: 40% 60% 60% 40%; transform: translateX(26px) scaleX(1.2) scaleY(0.8); }
  60% { border-radius: 60% 40% 40% 60%; transform: translateX(26px) scaleX(0.9) scaleY(1.1); }
  100% { border-radius: 50%; transform: translateX(26px) scaleX(1) scaleY(1); }
}`,
    htmlCode: `<input class="toggle-jelly-input" type="checkbox" id="jelly-tog" /><label class="toggle-jelly-wrap" for="jelly-tog"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-slide-color',
    name: 'Toggle Slide Color',
    category: 'toggles',
    tags: ['toggle', 'slide', 'color', 'gradient', 'transition'],
    difficulty: 'intermediate',
    description: 'A toggle that slides a color gradient across the track when activated, transitioning between hues',
    cssCode: `.toggle-slide-color-input { display: none; }
.toggle-slide-color {
  width: 52px;
  height: 26px;
  background: #1a1a2e;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  transition: border-color 0.3s;
}
.toggle-slide-color::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #10b981, #34d399);
  border-radius: 13px 0 0 13px;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-slide-color::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.toggle-slide-color-input:checked + .toggle-slide-color::before {
  transform: translateX(0);
}
.toggle-slide-color-input:checked + .toggle-slide-color::after {
  transform: translateX(26px);
  background: #fff;
}
.toggle-slide-color-input:checked + .toggle-slide-color { border-color: #10b98155; }`,
    htmlCode: `<input class="toggle-slide-color-input" type="checkbox" id="slide-col" /><label class="toggle-slide-color" for="slide-col"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-rotate-flip',
    name: 'Toggle Rotate Flip',
    category: 'toggles',
    tags: ['toggle', 'rotate', 'flip', '3d', 'turn'],
    difficulty: 'advanced',
    description: 'A toggle whose knob rotates and flips in 3D when switched, creating a coin-flip effect',
    cssCode: `.toggle-rotate-input { display: none; }
.toggle-rotate-wrap {
  width: 52px;
  height: 26px;
  background: #1a1a2e;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  border: 1px solid #2a2a3e;
  perspective: 100px;
  transition: all 0.3s;
}
.toggle-rotate-wrap::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.toggle-rotate-input:checked + .toggle-rotate-wrap {
  background: #10b98122;
  border-color: #10b98144;
}
.toggle-rotate-input:checked + .toggle-rotate-wrap::before {
  transform: translateX(26px) rotateY(180deg);
  background: #10b981;
  box-shadow: 0 0 10px #10b98144;
}`,
    htmlCode: `<input class="toggle-rotate-input" type="checkbox" id="rot-flip" /><label class="toggle-rotate-wrap" for="rot-flip"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-elastic',
    name: 'Toggle Elastic',
    category: 'toggles',
    tags: ['toggle', 'elastic', 'spring', 'overshoot', 'bounce'],
    difficulty: 'intermediate',
    description: 'A toggle with an elastic spring animation that overshoots and settles when toggled',
    cssCode: `.toggle-elastic-input { display: none; }
.toggle-elastic-wrap {
  width: 52px;
  height: 26px;
  background: #1a1a2e;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  border: 1px solid #2a2a3e;
  transition: all 0.3s;
}
.toggle-elastic-wrap::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toggle-elastic-input:checked + .toggle-elastic-wrap {
  background: #10b98122;
  border-color: #10b98144;
}
.toggle-elastic-input:checked + .toggle-elastic-wrap::before {
  transform: translateX(26px);
  background: #10b981;
  box-shadow: 0 0 8px #10b98144;
}`,
    htmlCode: `<input class="toggle-elastic-input" type="checkbox" id="elastic-tog" /><label class="toggle-elastic-wrap" for="elastic-tog"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-glow-ring',
    name: 'Toggle Glow Ring',
    category: 'toggles',
    tags: ['toggle', 'glow', 'ring', 'halo', 'light'],
    difficulty: 'intermediate',
    description: 'A toggle with a glowing ring halo effect that pulses around the knob when activated',
    cssCode: `.toggle-glow-ring-input { display: none; }
.toggle-glow-ring {
  width: 54px;
  height: 28px;
  background: #0a0a1a;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  border: 1px solid #2a2a3e;
  transition: all 0.3s;
}
.toggle-glow-ring::before {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  background: #475569;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-glow-ring-input:checked + .toggle-glow-ring {
  border-color: #10b98155;
}
.toggle-glow-ring-input:checked + .toggle-glow-ring::before {
  transform: translateX(26px);
  background: #10b981;
  box-shadow:
    0 0 8px #10b981,
    0 0 16px #10b98166,
    0 0 24px #10b98133;
  animation: glow-ring-pulse 1.5s ease-in-out infinite;
}
@keyframes glow-ring-pulse {
  0%, 100% { box-shadow: 0 0 8px #10b981, 0 0 16px #10b98144; }
  50% { box-shadow: 0 0 12px #10b981, 0 0 24px #10b98166, 0 0 36px #10b98122; }
}`,
    htmlCode: `<input class="toggle-glow-ring-input" type="checkbox" id="glow-ring" /><label class="toggle-glow-ring" for="glow-ring"></label>`,
    isNew: true,
  },
  {
    id: 'toggle-minimal-line',
    name: 'Toggle Minimal Line',
    category: 'toggles',
    tags: ['toggle', 'minimal', 'line', 'thin', 'clean'],
    difficulty: 'beginner',
    description: 'A minimalist toggle using thin lines and a simple sliding dot for a clean modern look',
    cssCode: `.toggle-min-line-input { display: none; }
.toggle-min-line {
  width: 48px;
  height: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.toggle-min-line::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #2a2a3e;
  border-radius: 1px;
  transition: background 0.3s;
}
.toggle-min-line::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  left: 0;
  border-radius: 50%;
  background: #64748b;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-min-line-input:checked + .toggle-min-line::before {
  background: #10b98155;
}
.toggle-min-line-input:checked + .toggle-min-line::after {
  transform: translateX(32px);
  background: #10b981;
  box-shadow: 0 0 6px #10b98144;
}`,
    htmlCode: `<input class="toggle-min-line-input" type="checkbox" id="min-line" /><label class="toggle-min-line" for="min-line"></label>`,
    isNew: true,
  },
];
