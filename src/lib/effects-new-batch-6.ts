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

export const effectsNewBatch6: CSSEffect[] = [
  // ==================== COLOR EFFECTS (10) ====================
  {
    id: 'color-wheel-spin',
    name: 'Color Wheel Spin',
    category: 'color',
    tags: ['color', 'wheel', 'spin', 'spectrum', 'rotate'],
    difficulty: 'intermediate',
    description: 'A conic gradient color wheel that spins continuously, cycling through the full spectrum',
    cssCode: `.color-wheel-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-wheel {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #22c55e, #10b981, #3b82f6, #6366f1, #8b5cf6, #ef4444);
  animation: wheel-spin 4s linear infinite;
  position: relative;
  box-shadow: 0 0 30px #10b98122;
}
.color-wheel::after {
  content: '';
  position: absolute;
  inset: 25%;
  border-radius: 50%;
  background: #0a0a1a;
}
@keyframes wheel-spin {
  to { transform: rotate(360deg); }
}
.color-wheel-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 600;
  margin-top: 12px;
  text-align: center;
}`,
    htmlCode: `<div class="color-wheel-wrap"><div><div class="color-wheel"></div><div class="color-wheel-label">Spectrum Spin</div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-gradient-mixer',
    name: 'Gradient Mixer',
    category: 'color',
    tags: ['color', 'gradient', 'mixer', 'blend', 'animate'],
    difficulty: 'intermediate',
    description: 'Two overlapping gradient circles that shift and blend colors together dynamically',
    cssCode: `.gradient-mixer-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.gradient-orb {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  filter: blur(20px);
  mix-blend-mode: screen;
}
.gradient-orb.orb-1 {
  background: #10b981;
  animation: orb-drift-1 3s ease-in-out infinite alternate;
}
.gradient-orb.orb-2 {
  background: #6366f1;
  animation: orb-drift-2 3s ease-in-out infinite alternate;
}
@keyframes orb-drift-1 {
  0% { transform: translate(-25px, -10px); }
  100% { transform: translate(25px, 10px); }
}
@keyframes orb-drift-2 {
  0% { transform: translate(25px, 10px); }
  100% { transform: translate(-25px, -10px); }
}
.mixer-label {
  position: absolute;
  bottom: 12px;
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="gradient-mixer-wrap"><div class="gradient-orb orb-1"></div><div class="gradient-orb orb-2"></div><div class="mixer-label">Gradient Mix</div></div>`,
    isNew: true,
  },
  {
    id: 'color-hue-rotate-cycle',
    name: 'Hue Rotate Cycle',
    category: 'color',
    tags: ['color', 'hue', 'rotate', 'cycle', 'filter'],
    difficulty: 'beginner',
    description: 'An element that cycles through all hues using the CSS hue-rotate filter animation',
    cssCode: `.hue-rotate-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.hue-box {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  background: #10b981;
  animation: hue-cycle 3s linear infinite;
  box-shadow: 0 4px 20px #10b98133;
}
.hue-box:nth-child(2) {
  animation-delay: -1s;
  border-radius: 50%;
}
.hue-box:nth-child(3) {
  animation-delay: -2s;
  border-radius: 12px 0 12px 0;
}
@keyframes hue-cycle {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
.hue-label {
  color: #64748b;
  font-size: 0.65rem;
  text-align: center;
  margin-top: 8px;
}`,
    htmlCode: `<div class="hue-rotate-wrap"><div><div class="hue-box"></div></div><div><div class="hue-box"></div></div><div><div class="hue-box"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-invert-flash',
    name: 'Color Invert Flash',
    category: 'color',
    tags: ['color', 'invert', 'flash', 'negative', 'filter'],
    difficulty: 'beginner',
    description: 'A pulsing invert filter that flashes between normal and inverted colors',
    cssCode: `.invert-flash-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.invert-flash-box {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #10b981;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  animation: invert-pulse 2s ease-in-out infinite;
}
.invert-flash-box:nth-child(2) {
  animation-delay: 0.3s;
  background: linear-gradient(135deg, #f97316, #ef4444);
  border-color: #f97316;
}
.invert-flash-box:nth-child(3) {
  animation-delay: 0.6s;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border-color: #8b5cf6;
}
@keyframes invert-pulse {
  0%, 100% { filter: invert(0); }
  50% { filter: invert(1); }
}`,
    htmlCode: `<div class="invert-flash-wrap"><div class="invert-flash-box"></div><div class="invert-flash-box"></div><div class="invert-flash-box"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-duotone-filter',
    name: 'Duotone Filter',
    category: 'color',
    tags: ['color', 'duotone', 'filter', 'contrast', 'tint'],
    difficulty: 'intermediate',
    description: 'A duotone color effect using CSS filters to create a two-tone stylized appearance',
    cssCode: `.duotone-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.duotone-card {
  width: 80px;
  height: 100px;
  border-radius: 10px;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
}
.duotone-card.emerald {
  filter: contrast(1.5) brightness(0.8) sepia(1) hue-rotate(120deg) saturate(2);
}
.duotone-card.amber {
  filter: contrast(1.5) brightness(0.9) sepia(1) hue-rotate(10deg) saturate(2);
}
.duotone-card.rose {
  filter: contrast(1.5) brightness(0.85) sepia(1) hue-rotate(310deg) saturate(2);
}
.duotone-label {
  color: #94a3b8;
  font-size: 0.6rem;
  font-weight: 700;
  text-align: center;
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
}`,
    htmlCode: `<div class="duotone-wrap"><div><div class="duotone-card emerald">🎨</div><div class="duotone-label">Emerald</div></div><div><div class="duotone-card amber">🎨</div><div class="duotone-label">Amber</div></div><div><div class="duotone-card rose">🎨</div><div class="duotone-label">Rose</div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-blind-sim',
    name: 'Color Blind Sim',
    category: 'color',
    tags: ['color', 'accessibility', 'colorblind', 'simulation', 'filter'],
    difficulty: 'advanced',
    description: 'Simulates color blindness types by applying CSS filter approximations for protanopia and deuteranopia',
    cssCode: `.colorblind-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.colorblind-card {
  width: 60px;
  text-align: center;
}
.colorblind-swatch {
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.8rem;
  color: #0a0a1a;
  background: linear-gradient(135deg, #ef4444 25%, #22c55e 25%, #22c55e 50%, #3b82f6 50%, #3b82f6 75%, #eab308 75%);
}
.colorblind-swatch.protanopia {
  filter: sepia(0.5) hue-rotate(-30deg) saturate(0.7);
}
.colorblind-swatch.deuteranopia {
  filter: sepia(0.4) hue-rotate(20deg) saturate(0.6);
}
.colorblind-swatch.tritanopia {
  filter: sepia(0.3) hue-rotate(-60deg) saturate(0.8);
}
.colorblind-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  margin-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}`,
    htmlCode: `<div class="colorblind-wrap"><div class="colorblind-card"><div class="colorblind-swatch">RGB</div><div class="colorblind-label">Normal</div></div><div class="colorblind-card"><div class="colorblind-swatch protanopia">RGB</div><div class="colorblind-label">Protan</div></div><div class="colorblind-card"><div class="colorblind-swatch deuteranopia">RGB</div><div class="colorblind-label">Deutan</div></div><div class="colorblind-card"><div class="colorblind-swatch tritanopia">RGB</div><div class="colorblind-label">Tritan</div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-palette-generator-dots',
    name: 'Palette Generator Dots',
    category: 'color',
    tags: ['color', 'palette', 'dots', 'swatches', 'generator'],
    difficulty: 'intermediate',
    description: 'A row of color dots that shift through generated palette hues with a smooth animation',
    cssCode: `.palette-dots-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.palette-dots-row {
  display: flex;
  gap: 10px;
  align-items: center;
}
.palette-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  animation: palette-shift 4s ease-in-out infinite alternate;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}
.palette-dot:nth-child(1) { background: #ef4444; animation-delay: 0s; }
.palette-dot:nth-child(2) { background: #f97316; animation-delay: 0.3s; }
.palette-dot:nth-child(3) { background: #eab308; animation-delay: 0.6s; }
.palette-dot:nth-child(4) { background: #10b981; animation-delay: 0.9s; }
.palette-dot:nth-child(5) { background: #3b82f6; animation-delay: 1.2s; }
@keyframes palette-shift {
  0% { filter: hue-rotate(0deg); transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { filter: hue-rotate(90deg); transform: scale(1); }
}
.palette-label {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}`,
    htmlCode: `<div class="palette-dots-wrap"><div class="palette-dots-row"><div class="palette-dot"></div><div class="palette-dot"></div><div class="palette-dot"></div><div class="palette-dot"></div><div class="palette-dot"></div></div><div class="palette-label">Auto Palette</div></div>`,
    isNew: true,
  },
  {
    id: 'color-complementary-glow',
    name: 'Complementary Glow',
    category: 'color',
    tags: ['color', 'complementary', 'glow', 'accent', 'contrast'],
    difficulty: 'intermediate',
    description: 'Two complementary colored elements with opposing glow effects that pulse alternately',
    cssCode: `.complement-glow-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.complement-orb {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 800;
  color: #0a0a1a;
}
.complement-orb.emerald {
  background: #10b981;
  animation: glow-emerald 2s ease-in-out infinite;
}
.complement-orb.rose {
  background: #f43f5e;
  animation: glow-rose 2s ease-in-out infinite;
}
@keyframes glow-emerald {
  0%, 100% { box-shadow: 0 0 10px #10b98144, 0 0 30px #10b98122; transform: scale(1); }
  50% { box-shadow: 0 0 20px #10b98188, 0 0 50px #10b98144; transform: scale(1.05); }
}
@keyframes glow-rose {
  0%, 100% { box-shadow: 0 0 20px #f43f5e88, 0 0 50px #f43f5e44; transform: scale(1.05); }
  50% { box-shadow: 0 0 10px #f43f5e44, 0 0 30px #f43f5e22; transform: scale(1); }
}
.complement-line {
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #f43f5e);
  border-radius: 1px;
}`,
    htmlCode: `<div class="complement-glow-wrap"><div class="complement-orb emerald">Emerald</div><div class="complement-line"></div><div class="complement-orb rose">Rose</div></div>`,
    isNew: true,
  },
  {
    id: 'color-saturation-pulse',
    name: 'Saturation Pulse',
    category: 'color',
    tags: ['color', 'saturation', 'pulse', 'vivid', 'filter'],
    difficulty: 'beginner',
    description: 'An element that pulses between desaturated and fully saturated states',
    cssCode: `.saturation-pulse-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.sat-pulse-box {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  animation: sat-pulse 2.5s ease-in-out infinite;
}
.sat-pulse-box:nth-child(1) {
  background: linear-gradient(135deg, #10b981, #059669);
  animation-delay: 0s;
}
.sat-pulse-box:nth-child(2) {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  animation-delay: 0.4s;
}
.sat-pulse-box:nth-child(3) {
  background: linear-gradient(135deg, #f97316, #ea580c);
  animation-delay: 0.8s;
}
@keyframes sat-pulse {
  0%, 100% { filter: saturate(1); transform: scale(1); }
  50% { filter: saturate(2.5); transform: scale(1.06); }
}
.sat-label {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 700;
  text-align: center;
  margin-top: 4px;
}`,
    htmlCode: `<div class="saturation-pulse-wrap"><div><div class="sat-pulse-box">🌿</div></div><div><div class="sat-pulse-box">💎</div></div><div><div class="sat-pulse-box">🔥</div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-tint-overlay',
    name: 'Tint Overlay',
    category: 'color',
    tags: ['color', 'tint', 'overlay', 'blend', 'wash'],
    difficulty: 'beginner',
    description: 'A dark card with animated color tint overlays that cycle through different washes',
    cssCode: `.tint-overlay-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 14px;
  justify-content: center;
}
.tint-card {
  width: 80px;
  height: 100px;
  border-radius: 10px;
  background: linear-gradient(180deg, #1a1a2e, #2a2a3e);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
.tint-card::after {
  content: '';
  position: absolute;
  inset: 0;
  animation: tint-cycle 6s ease-in-out infinite;
  mix-blend-mode: overlay;
}
.tint-card:nth-child(1)::after {
  background: #10b981;
  animation-delay: 0s;
}
.tint-card:nth-child(2)::after {
  background: #6366f1;
  animation-delay: -2s;
}
.tint-card:nth-child(3)::after {
  background: #f59e0b;
  animation-delay: -4s;
}
@keyframes tint-cycle {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.6; }
}
.tint-label {
  color: #94a3b8;
  font-size: 0.6rem;
  font-weight: 700;
  margin-top: 6px;
  text-align: center;
}`,
    htmlCode: `<div class="tint-overlay-wrap"><div><div class="tint-card">🌙</div><div class="tint-label">Emerald</div></div><div><div class="tint-card">⭐</div><div class="tint-label">Indigo</div></div><div><div class="tint-card">☀️</div><div class="tint-label">Amber</div></div></div>`,
    isNew: true,
  },

  // ==================== MOTION EFFECTS (10) ====================
  {
    id: 'motion-elastic-bounce',
    name: 'Elastic Bounce',
    category: 'motion',
    tags: ['motion', 'elastic', 'bounce', 'spring', 'physics'],
    difficulty: 'intermediate',
    description: 'An element that bounces with elastic overshoot and settle behavior',
    cssCode: `.elastic-bounce-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
.elastic-ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #34d399);
  animation: elastic-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  box-shadow: 0 4px 15px #10b98144;
}
.elastic-shadow {
  width: 50px;
  height: 8px;
  border-radius: 50%;
  background: #10b98133;
  animation: elastic-shadow 1.2s ease-in-out infinite;
  margin-top: 10px;
}
@keyframes elastic-bounce {
  0% { transform: translateY(0); }
  30% { transform: translateY(-80px); }
  50% { transform: translateY(0); }
  65% { transform: translateY(-30px); }
  80% { transform: translateY(0); }
  90% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
@keyframes elastic-shadow {
  0%, 100% { transform: scaleX(1); opacity: 0.5; }
  30% { transform: scaleX(0.6); opacity: 0.3; }
  50% { transform: scaleX(1); opacity: 0.5; }
}`,
    htmlCode: `<div class="elastic-bounce-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="elastic-ball"></div><div class="elastic-shadow"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-spring-wobble',
    name: 'Spring Wobble',
    category: 'motion',
    tags: ['motion', 'spring', 'wobble', 'oscillate', 'physics'],
    difficulty: 'intermediate',
    description: 'An element that wobbles with a spring-like decaying oscillation',
    cssCode: `.spring-wobble-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.spring-box {
  width: 70px;
  height: 70px;
  border-radius: 14px;
  background: linear-gradient(135deg, #10b981, #059669);
  animation: spring-wobble 1.5s ease-in-out infinite;
  box-shadow: 0 4px 20px #10b98133;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}
@keyframes spring-wobble {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(12deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(7deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(3deg); }
  90% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
}
.spring-base {
  width: 80px;
  height: 6px;
  border-radius: 3px;
  background: #2a2a3e;
  margin-top: 12px;
}`,
    htmlCode: `<div class="spring-wobble-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="spring-box">🌀</div><div class="spring-base"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-pendulum-swing',
    name: 'Pendulum Swing',
    category: 'motion',
    tags: ['motion', 'pendulum', 'swing', 'gravity', 'physics'],
    difficulty: 'intermediate',
    description: 'A pendulum that swings back and forth from a fixed pivot point with decaying amplitude',
    cssCode: `.pendulum-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 0;
  height: 160px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.pendulum-pivot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #64748b;
  position: absolute;
  top: 12px;
  z-index: 2;
}
.pendulum-arm {
  position: absolute;
  top: 16px;
  transform-origin: top center;
  animation: pendulum-swing 2s ease-in-out infinite;
}
.pendulum-rod {
  width: 2px;
  height: 80px;
  background: linear-gradient(180deg, #64748b, #94a3b8);
  margin: 0 auto;
}
.pendulum-bob {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #34d399);
  box-shadow: 0 4px 15px #10b98144;
  margin: -2px auto 0;
}
@keyframes pendulum-swing {
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(-30deg); }
}
.pendulum-trail {
  position: absolute;
  bottom: 20px;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #10b98122, #10b98144, #10b98122, transparent);
  border-radius: 2px;
}`,
    htmlCode: `<div class="pendulum-wrap"><div class="pendulum-pivot"></div><div class="pendulum-arm"><div class="pendulum-rod"></div><div class="pendulum-bob"></div></div><div class="pendulum-trail"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-centrifugal-spin',
    name: 'Centrifugal Spin',
    category: 'motion',
    tags: ['motion', 'centrifugal', 'spin', 'orbit', 'circular'],
    difficulty: 'advanced',
    description: 'Multiple elements orbiting a center point with varying radii and speeds',
    cssCode: `.centrifugal-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
.centrifugal-system {
  width: 120px;
  height: 120px;
  position: relative;
}
.centrifugal-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10b981;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px #10b98166;
  z-index: 2;
}
.centrifugal-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: orbit-spin linear infinite;
}
.centrifugal-orbit:nth-child(2) {
  background: #34d399;
  animation-duration: 2s;
  box-shadow: 0 0 8px #34d39944;
}
.centrifugal-orbit:nth-child(3) {
  background: #6ee7b7;
  animation-duration: 3s;
  box-shadow: 0 0 8px #6ee7b744;
}
.centrifugal-orbit:nth-child(4) {
  background: #a7f3d0;
  animation-duration: 4.5s;
  box-shadow: 0 0 8px #a7f3d044;
}
@keyframes orbit-spin {
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg); }
}
.centrifugal-orbit:nth-child(3) {
  animation-name: orbit-spin-lg;
}
@keyframes orbit-spin-lg {
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(55px) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(55px) rotate(-360deg); }
}`,
    htmlCode: `<div class="centrifugal-wrap"><div class="centrifugal-system"><div class="centrifugal-core"></div><div class="centrifugal-orbit"></div><div class="centrifugal-orbit"></div><div class="centrifugal-orbit"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-gravity-drop',
    name: 'Gravity Drop',
    category: 'motion',
    tags: ['motion', 'gravity', 'drop', 'fall', 'physics'],
    difficulty: 'intermediate',
    description: 'An element that drops under simulated gravity with a realistic acceleration curve',
    cssCode: `.gravity-drop-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.gravity-ball {
  position: absolute;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  transform: translateX(-50%);
  animation: gravity-fall 1.4s cubic-bezier(0.55, 0, 1, 0.45) infinite;
  box-shadow: 0 2px 10px #10b98144;
}
@keyframes gravity-fall {
  0% { top: 5px; animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
  50% { top: calc(100% - 50px); animation-timing-function: cubic-bezier(0, 0, 0.45, 1); }
  75% { top: calc(100% - 80px); animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
  100% { top: calc(100% - 50px); }
}
.gravity-floor {
  position: absolute;
  bottom: 16px;
  left: 20%;
  right: 20%;
  height: 3px;
  background: #2a2a3e;
  border-radius: 2px;
}
.gravity-squish {
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 40px;
  height: 4px;
  border-radius: 50%;
  background: #10b98133;
  transform: translateX(-50%);
  animation: squish-scale 1.4s ease-in-out infinite;
}
@keyframes squish-scale {
  0%, 30% { transform: translateX(-50%) scaleX(1); }
  50% { transform: translateX(-50%) scaleX(1.6) scaleY(0.5); }
  70% { transform: translateX(-50%) scaleX(1); }
}`,
    htmlCode: `<div class="gravity-drop-wrap"><div class="gravity-ball"></div><div class="gravity-floor"></div><div class="gravity-squish"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-inertia-slide',
    name: 'Inertia Slide',
    category: 'motion',
    tags: ['motion', 'inertia', 'slide', 'momentum', 'physics'],
    difficulty: 'intermediate',
    description: 'An element that slides with momentum, gradually decelerating as if friction is applied',
    cssCode: `.inertia-slide-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  height: 80px;
  position: relative;
  overflow: hidden;
}
.inertia-block {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #10b981, #059669);
  animation: inertia-move 2s cubic-bezier(0, 0.8, 0.2, 1) infinite;
  box-shadow: 0 2px 10px #10b98133;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  color: #0a0a1a;
}
@keyframes inertia-move {
  0% { left: -50px; }
  100% { left: calc(100% - 10px); }
}
.inertia-track {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  height: 2px;
  background: #1a1a2e;
  border-radius: 1px;
}
.inertia-trail {
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, #10b98144, #10b981);
  border-radius: 1px;
  animation: trail-grow 2s cubic-bezier(0, 0.8, 0.2, 1) infinite;
}
@keyframes trail-grow {
  0% { width: 0; }
  100% { width: calc(100% - 20px); }
}`,
    htmlCode: `<div class="inertia-slide-wrap"><div class="inertia-block">→</div><div class="inertia-track"></div><div class="inertia-trail"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-damping-oscillate',
    name: 'Damping Oscillate',
    category: 'motion',
    tags: ['motion', 'damping', 'oscillate', 'decay', 'physics'],
    difficulty: 'advanced',
    description: 'An oscillating element whose amplitude gradually decays over time simulating damping',
    cssCode: `.damping-osc-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.damping-bar {
  width: 8px;
  height: 80px;
  border-radius: 4px;
  background: linear-gradient(180deg, #10b981, #059669);
  transform-origin: bottom center;
  animation: damping-osc 2s ease-out infinite;
  box-shadow: 0 0 10px #10b98133;
}
@keyframes damping-osc {
  0% { transform: rotate(0deg); }
  8% { transform: rotate(25deg); }
  16% { transform: rotate(-20deg); }
  24% { transform: rotate(16deg); }
  32% { transform: rotate(-12deg); }
  40% { transform: rotate(9deg); }
  48% { transform: rotate(-7deg); }
  56% { transform: rotate(5deg); }
  64% { transform: rotate(-3deg); }
  72% { transform: rotate(2deg); }
  80% { transform: rotate(-1deg); }
  90% { transform: rotate(0.5deg); }
  100% { transform: rotate(0deg); }
}
.damping-base {
  width: 40px;
  height: 6px;
  border-radius: 3px;
  background: #2a2a3e;
  margin-top: 2px;
}
.damping-label {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 600;
  margin-top: 10px;
}`,
    htmlCode: `<div class="damping-osc-wrap"><div class="damping-bar"></div><div class="damping-base"></div><div class="damping-label">Decaying Oscillation</div></div>`,
    isNew: true,
  },
  {
    id: 'motion-velocity-blur',
    name: 'Velocity Blur',
    category: 'motion',
    tags: ['motion', 'velocity', 'blur', 'speed', 'fast'],
    difficulty: 'intermediate',
    description: 'An element that moves with increasing speed, applying a motion blur filter as it accelerates',
    cssCode: `.velocity-blur-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 120px;
  position: relative;
  overflow: hidden;
}
.velocity-dot {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #10b981;
  animation: velocity-fly 1.6s ease-in infinite;
  box-shadow: 0 0 10px #10b98144;
}
@keyframes velocity-fly {
  0% { left: -30px; filter: blur(0px); }
  50% { left: 40%; filter: blur(1px); }
  80% { left: 70%; filter: blur(3px); }
  100% { left: calc(100% + 30px); filter: blur(0px); }
}
.velocity-streak {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b98144, #10b98122, transparent);
  animation: streak-fly 1.6s ease-in infinite;
  border-radius: 1px;
}
@keyframes streak-fly {
  0% { left: -60px; width: 0; opacity: 0; }
  30% { opacity: 1; }
  80% { width: 80px; opacity: 0.6; }
  100% { left: calc(100% + 30px); width: 0; opacity: 0; }
}
.velocity-track {
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  height: 1px;
  background: #1a1a2e;
  transform: translateY(-50%);
}`,
    htmlCode: `<div class="velocity-blur-wrap"><div class="velocity-track"></div><div class="velocity-dot"></div><div class="velocity-streak"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-parallax-shift',
    name: 'Parallax Shift',
    category: 'motion',
    tags: ['motion', 'parallax', 'shift', 'depth', 'layer'],
    difficulty: 'intermediate',
    description: 'Multiple layers that shift at different speeds creating a parallax depth illusion',
    cssCode: `.parallax-shift-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
}
.parallax-layer {
  position: absolute;
  border-radius: 50%;
}
.parallax-layer:nth-child(1) {
  width: 120px;
  height: 120px;
  top: 20px;
  background: #10b98110;
  border: 1px solid #10b98122;
  animation: p-shift-slow 6s ease-in-out infinite alternate;
}
.parallax-layer:nth-child(2) {
  width: 80px;
  height: 80px;
  top: 40px;
  background: #10b98118;
  border: 1px solid #10b98133;
  animation: p-shift-med 4s ease-in-out infinite alternate;
}
.parallax-layer:nth-child(3) {
  width: 40px;
  height: 40px;
  top: 60px;
  background: #10b98130;
  border: 1px solid #10b98155;
  animation: p-shift-fast 2.5s ease-in-out infinite alternate;
}
@keyframes p-shift-slow {
  0% { transform: translateX(10px); }
  100% { transform: translateX(60px); }
}
@keyframes p-shift-med {
  0% { transform: translateX(30px); }
  100% { transform: translateX(80px); }
}
@keyframes p-shift-fast {
  0% { transform: translateX(50px); }
  100% { transform: translateX(100px); }
}`,
    htmlCode: `<div class="parallax-shift-wrap"><div class="parallax-layer"></div><div class="parallax-layer"></div><div class="parallax-layer"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-kinetic-energy',
    name: 'Kinetic Energy',
    category: 'motion',
    tags: ['motion', 'kinetic', 'energy', 'transfer', 'chain'],
    difficulty: 'advanced',
    description: 'A chain of elements where kinetic energy transfers from one to the next in sequence',
    cssCode: `.kinetic-energy-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
}
.kinetic-balls {
  display: flex;
  align-items: center;
  gap: 4px;
}
.kinetic-ball {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  animation: kinetic-hit 2s ease-in-out infinite;
}
.kinetic-ball:nth-child(1) { animation-delay: 0s; }
.kinetic-ball:nth-child(2) { animation-delay: 0.05s; }
.kinetic-ball:nth-child(3) { animation-delay: 0.1s; }
.kinetic-ball:nth-child(4) { animation-delay: 0.15s; }
.kinetic-ball:nth-child(5) { animation-delay: 0.2s; }
@keyframes kinetic-hit {
  0%, 100% { transform: translateX(0); background: #1a1a2e; border-color: #2a2a3e; }
  10% { transform: translateX(0); }
  15% { transform: translateX(-8px); background: #10b981; border-color: #10b981; box-shadow: 0 0 12px #10b98144; }
  30% { transform: translateX(0); background: #1a1a2e; border-color: #2a2a3e; box-shadow: none; }
}
.kinetic-string {
  width: 2px;
  height: 30px;
  background: #2a2a3e;
  position: absolute;
  top: 0;
}
.kinetic-frame {
  width: 160px;
  height: 4px;
  background: #2a2a3e;
  border-radius: 2px;
  margin-bottom: 6px;
}`,
    htmlCode: `<div class="kinetic-energy-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="kinetic-frame"></div><div class="kinetic-balls"><div class="kinetic-ball"></div><div class="kinetic-ball"></div><div class="kinetic-ball"></div><div class="kinetic-ball"></div><div class="kinetic-ball"></div></div></div></div>`,
    isNew: true,
  },

  // ==================== CONTAINER EFFECTS (10) ====================
  {
    id: 'container-stretch',
    name: 'Container Stretch',
    category: 'container',
    tags: ['container', 'stretch', 'flex', 'grow', 'resize'],
    difficulty: 'beginner',
    description: 'A container that stretches its width and height with a smooth animated expansion',
    cssCode: `.container-stretch-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
.stretch-box {
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 10px;
  animation: stretch-anim 3s ease-in-out infinite alternate;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a1a;
  font-size: 0.7rem;
  font-weight: 800;
  box-shadow: 0 4px 15px #10b98133;
}
@keyframes stretch-anim {
  0% { width: 60px; height: 60px; }
  33% { width: 140px; height: 60px; }
  66% { width: 60px; height: 120px; }
  100% { width: 140px; height: 100px; }
}
.stretch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;
}
.stretch-grid-cell {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: #0a0a1a44;
}`,
    htmlCode: `<div class="container-stretch-wrap"><div class="stretch-box"><div class="stretch-grid"><div class="stretch-grid-cell"></div><div class="stretch-grid-cell"></div><div class="stretch-grid-cell"></div><div class="stretch-grid-cell"></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-responsive-morph',
    name: 'Responsive Morph',
    category: 'container',
    tags: ['container', 'responsive', 'morph', 'shape', 'adapt'],
    difficulty: 'intermediate',
    description: 'A container that morphs between different border-radius values creating organic shape changes',
    cssCode: `.responsive-morph-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
.morph-shape {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #10b981, #059669);
  animation: morph-change 4s ease-in-out infinite;
  box-shadow: 0 4px 20px #10b98133;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.7rem;
}
@keyframes morph-change {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 70% 40% 60%; }
  75% { border-radius: 40% 30% 60% 50% / 60% 40% 60% 30%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}
.morph-label {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 600;
  margin-top: 12px;
  text-align: center;
}`,
    htmlCode: `<div class="responsive-morph-wrap"><div style="display:flex;flex-direction:column;align-items:center"><div class="morph-shape">MORPH</div><div class="morph-label">Organic Shape</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-auto-fit-grid',
    name: 'Auto Fit Grid',
    category: 'container',
    tags: ['container', 'grid', 'auto-fit', 'responsive', 'layout'],
    difficulty: 'intermediate',
    description: 'A CSS grid using auto-fit that dynamically rearranges items based on available space',
    cssCode: `.autofit-grid-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
}
.autofit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 8px;
}
.autofit-item {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px 8px;
  text-align: center;
  color: #94a3b8;
  font-size: 0.65rem;
  font-weight: 700;
  transition: all 0.3s ease;
  animation: grid-item-in 0.5s ease-out backwards;
}
.autofit-item:nth-child(1) { animation-delay: 0s; }
.autofit-item:nth-child(2) { animation-delay: 0.05s; }
.autofit-item:nth-child(3) { animation-delay: 0.1s; }
.autofit-item:nth-child(4) { animation-delay: 0.15s; }
.autofit-item:nth-child(5) { animation-delay: 0.2s; }
.autofit-item:nth-child(6) { animation-delay: 0.25s; }
@keyframes grid-item-in {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
.autofit-item:hover {
  border-color: #10b981;
  background: #10b98110;
  color: #10b981;
}
.autofit-label {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}`,
    htmlCode: `<div class="autofit-grid-wrap"><div class="autofit-label">Auto-Fit Grid</div><div class="autofit-grid"><div class="autofit-item">A</div><div class="autofit-item">B</div><div class="autofit-item">C</div><div class="autofit-item">D</div><div class="autofit-item">E</div><div class="autofit-item">F</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-intrinsic-size',
    name: 'Intrinsic Size',
    category: 'container',
    tags: ['container', 'intrinsic', 'size', 'min-content', 'max-content'],
    difficulty: 'intermediate',
    description: 'Containers using intrinsic sizing keywords to fit content naturally',
    cssCode: `.intrinsic-size-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.intrinsic-card {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 12px;
  animation: intrinsic-pulse 2s ease-in-out infinite alternate;
}
.intrinsic-card.min-content {
  width: min-content;
  animation-delay: 0s;
}
.intrinsic-card.max-content {
  width: max-content;
  animation-delay: 0.5s;
}
.intrinsic-card.fit-content {
  width: fit-content;
  max-width: 150px;
  animation-delay: 1s;
}
@keyframes intrinsic-pulse {
  0% { border-color: #2a2a3e; }
  100% { border-color: #10b98144; }
}
.intrinsic-title {
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
}
.intrinsic-desc {
  color: #64748b;
  font-size: 0.6rem;
  margin-top: 4px;
}
.intrinsic-tag {
  display: inline-block;
  margin-top: 6px;
  padding: 2px 8px;
  background: #10b98122;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
  border-radius: 4px;
}`,
    htmlCode: `<div class="intrinsic-size-wrap"><div class="intrinsic-card min-content"><div class="intrinsic-title">Min</div><div class="intrinsic-desc">Fits tight</div><div class="intrinsic-tag">min-content</div></div><div class="intrinsic-card max-content"><div class="intrinsic-title">Max Content Width</div><div class="intrinsic-desc">Expands fully</div><div class="intrinsic-tag">max-content</div></div><div class="intrinsic-card fit-content"><div class="intrinsic-title">Fit Content</div><div class="intrinsic-desc">Balanced sizing with max-width</div><div class="intrinsic-tag">fit-content</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-containment-resize',
    name: 'Containment Resize',
    category: 'container',
    tags: ['container', 'containment', 'resize', 'contain', 'isolate'],
    difficulty: 'advanced',
    description: 'A container using CSS containment that efficiently resizes without affecting the outer layout',
    cssCode: `.containment-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
.containment-box {
  width: 100px;
  height: 100px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  contain: layout style paint;
  overflow: hidden;
  animation: contain-resize 3s ease-in-out infinite alternate;
  display: flex;
  align-items: center;
  justify-content: center;
}
.containment-box:nth-child(2) {
  animation-delay: 0.5s;
  animation-direction: alternate-reverse;
}
@keyframes contain-resize {
  0% { width: 80px; height: 80px; border-color: #2a2a3e; }
  50% { width: 110px; height: 90px; border-color: #10b98144; }
  100% { width: 90px; height: 120px; border-color: #10b98166; }
}
.containment-inner {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  animation: contain-inner-pulse 2s ease-in-out infinite;
}
@keyframes contain-inner-pulse {
  0%, 100% { transform: scale(0.8); opacity: 0.6; }
  50% { transform: scale(1); opacity: 1; }
}
.containment-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-align: center;
  margin-top: 8px;
  text-transform: uppercase;
}`,
    htmlCode: `<div class="containment-wrap"><div><div class="containment-box"><div class="containment-inner"></div></div><div class="containment-label">Contain: Layout</div></div><div><div class="containment-box"><div class="containment-inner"></div></div><div class="containment-label">Contain: Paint</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-aspect-box',
    name: 'Aspect Box',
    category: 'container',
    tags: ['container', 'aspect-ratio', 'box', 'proportion', 'ratio'],
    difficulty: 'beginner',
    description: 'Containers maintaining perfect aspect ratios that respond gracefully to width changes',
    cssCode: `.aspect-box-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: flex-start;
}
.aspect-card {
  width: 80px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
  animation: aspect-breathe 3s ease-in-out infinite alternate;
}
.aspect-card:nth-child(1) {
  aspect-ratio: 1 / 1;
  animation-delay: 0s;
}
.aspect-card:nth-child(2) {
  aspect-ratio: 16 / 9;
  animation-delay: 0.4s;
}
.aspect-card:nth-child(3) {
  aspect-ratio: 4 / 3;
  animation-delay: 0.8s;
}
@keyframes aspect-breathe {
  0% { width: 70px; border-color: #2a2a3e; }
  100% { width: 90px; border-color: #10b98144; }
}
.aspect-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #10b98118, #10b98108);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 800;
}`,
    htmlCode: `<div class="aspect-box-wrap"><div class="aspect-card"><div class="aspect-inner">1:1</div></div><div class="aspect-card"><div class="aspect-inner">16:9</div></div><div class="aspect-card"><div class="aspect-inner">4:3</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-clamp-font',
    name: 'Clamp Font',
    category: 'container',
    tags: ['container', 'clamp', 'font', 'responsive', 'typography'],
    difficulty: 'intermediate',
    description: 'Typography using clamp() for fluid font sizes that scale smoothly between min and max bounds',
    cssCode: `.clamp-font-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.clamp-title {
  color: #10b981;
  font-size: clamp(1rem, 3vw, 2rem);
  font-weight: 900;
  animation: clamp-pulse 3s ease-in-out infinite;
}
@keyframes clamp-pulse {
  0%, 100% { letter-spacing: 0px; opacity: 0.9; }
  50% { letter-spacing: 2px; opacity: 1; }
}
.clamp-subtitle {
  color: #94a3b8;
  font-size: clamp(0.65rem, 1.5vw, 0.9rem);
  font-weight: 600;
  margin-top: 4px;
}
.clamp-body {
  color: #64748b;
  font-size: clamp(0.55rem, 1vw, 0.75rem);
  margin-top: 8px;
  line-height: 1.5;
}
.clamp-demo {
  display: flex;
  gap: 8px;
  margin-top: 14px;
  justify-content: center;
}
.clamp-size {
  padding: 4px 12px;
  border-radius: 6px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  color: #94a3b8;
  font-size: clamp(0.5rem, 0.8vw, 0.65rem);
  font-weight: 700;
  animation: clamp-tag 2s ease-in-out infinite alternate;
}
@keyframes clamp-tag {
  0% { border-color: #2a2a3e; }
  100% { border-color: #10b98144; }
}`,
    htmlCode: `<div class="clamp-font-wrap"><div class="clamp-title">Fluid Typography</div><div class="clamp-subtitle">clamp() scales between bounds</div><div class="clamp-body">Font sizes adapt fluidly without breakpoints</div><div class="clamp-demo"><span class="clamp-size">min: 1rem</span><span class="clamp-size">pref: 3vw</span><span class="clamp-size">max: 2rem</span></div></div>`,
    isNew: true,
  },
  {
    id: 'container-query-card',
    name: 'Container Query Card',
    category: 'container',
    tags: ['container', 'query', 'card', 'responsive', 'adapt'],
    difficulty: 'advanced',
    description: 'A card component that adapts its layout using container queries based on its own size',
    cssCode: `.cq-card-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
.cq-container {
  container-type: inline-size;
  container-name: card;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 12px;
  animation: cq-resize 4s ease-in-out infinite alternate;
  transition: all 0.3s ease;
}
.cq-container.narrow {
  animation-name: cq-resize-narrow;
}
@keyframes cq-resize {
  0% { width: 80px; }
  100% { width: 180px; }
}
@keyframes cq-resize-narrow {
  0% { width: 60px; }
  100% { width: 120px; }
}
@container card (min-width: 150px) {
  .cq-content { flex-direction: row !important; }
}
.cq-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.cq-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #10b981, #059669);
  flex-shrink: 0;
}
.cq-text { text-align: center; }
.cq-name { color: #e2e8f0; font-size: 0.7rem; font-weight: 700; }
.cq-desc { color: #64748b; font-size: 0.55rem; margin-top: 2px; }`,
    htmlCode: `<div class="cq-card-wrap"><div class="cq-container"><div class="cq-content"><div class="cq-icon"></div><div class="cq-text"><div class="cq-name">Card</div><div class="cq-desc">Adapts to size</div></div></div></div><div class="cq-container narrow"><div class="cq-content"><div class="cq-icon"></div><div class="cq-text"><div class="cq-name">Mini</div><div class="cq-desc">Compact</div></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-fluid-type',
    name: 'Fluid Type',
    category: 'container',
    tags: ['container', 'fluid', 'typography', 'viewport', 'scale'],
    difficulty: 'intermediate',
    description: 'Fluid typography scale where each line scales proportionally using viewport-relative units',
    cssCode: `.fluid-type-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.fluid-line {
  color: #e2e8f0;
  font-weight: 800;
  animation: fluid-sway 3s ease-in-out infinite alternate;
  text-align: center;
}
.fluid-line:nth-child(1) {
  font-size: clamp(0.6rem, 1.2vw, 0.75rem);
  color: #64748b;
  animation-delay: 0s;
}
.fluid-line:nth-child(2) {
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  color: #94a3b8;
  animation-delay: 0.1s;
}
.fluid-line:nth-child(3) {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: #e2e8f0;
  animation-delay: 0.2s;
}
.fluid-line:nth-child(4) {
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  color: #10b981;
  animation-delay: 0.3s;
  text-shadow: 0 0 15px #10b98133;
}
.fluid-line:nth-child(5) {
  font-size: clamp(1.5rem, 4.5vw, 2.4rem);
  background: linear-gradient(90deg, #10b981, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation-delay: 0.4s;
}
@keyframes fluid-sway {
  0% { transform: translateX(-3px); opacity: 0.85; }
  100% { transform: translateX(3px); opacity: 1; }
}`,
    htmlCode: `<div class="fluid-type-wrap"><div class="fluid-line">XS · 0.75rem</div><div class="fluid-line">SM · 1rem</div><div class="fluid-line">MD · 1.4rem</div><div class="fluid-line">LG · 1.8rem</div><div class="fluid-line">XL · 2.4rem</div></div>`,
    isNew: true,
  },
  {
    id: 'container-min-max-box',
    name: 'Min Max Box',
    category: 'container',
    tags: ['container', 'minmax', 'min-width', 'max-width', 'bounds'],
    difficulty: 'intermediate',
    description: 'Boxes constrained by min and max dimensions that animate within their allowed bounds',
    cssCode: `.minmax-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.minmax-box {
  min-width: 60px;
  max-width: 200px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  color: #0a0a1a;
  animation: minmax-expand 3s ease-in-out infinite alternate;
}
.minmax-box:nth-child(1) {
  background: linear-gradient(90deg, #10b981, #34d399);
  animation-delay: 0s;
}
.minmax-box:nth-child(2) {
  background: linear-gradient(90deg, #6366f1, #818cf8);
  animation-delay: 0.3s;
}
.minmax-box:nth-child(3) {
  background: linear-gradient(90deg, #f97316, #fb923c);
  animation-delay: 0.6s;
}
@keyframes minmax-expand {
  0% { width: 60px; }
  50% { width: 200px; }
  100% { width: 120px; }
}
.minmax-track {
  width: 200px;
  height: 2px;
  background: #1a1a2e;
  border-radius: 1px;
  position: relative;
}
.minmax-marker {
  position: absolute;
  top: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: marker-slide 3s ease-in-out infinite alternate;
}
@keyframes marker-slide {
  0% { left: 0; }
  100% { left: calc(100% - 8px); }
}`,
    htmlCode: `<div class="minmax-wrap"><div class="minmax-box">60–200px</div><div class="minmax-box">Min/Max</div><div class="minmax-box">Constrained</div><div class="minmax-track"><div class="minmax-marker"></div></div></div>`,
    isNew: true,
  },

  // ==================== SVG EFFECTS (10) ====================
  {
    id: 'svg-dash-draw',
    name: 'SVG Dash Draw',
    category: 'svg',
    tags: ['svg', 'dash', 'draw', 'stroke', 'animate'],
    difficulty: 'intermediate',
    description: 'An SVG shape that draws itself using stroke-dasharray and stroke-dashoffset animation',
    cssCode: `.svg-dash-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-dash-wrap svg {
  width: 120px;
  height: 120px;
}
.svg-dash-path {
  fill: none;
  stroke: #10b981;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: dash-draw 2.5s ease-in-out infinite alternate;
  filter: drop-shadow(0 0 4px #10b98144);
}
@keyframes dash-draw {
  0% { stroke-dashoffset: 400; }
  100% { stroke-dashoffset: 0; }
}
.svg-dash-glow {
  fill: none;
  stroke: #10b98133;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: dash-draw 2.5s ease-in-out infinite alternate;
}`,
    htmlCode: `<div class="svg-dash-wrap"><svg viewBox="0 0 120 120"><path class="svg-dash-glow" d="M20 60 L40 30 L60 60 L80 30 L100 60"/><path class="svg-dash-path" d="M20 60 L40 30 L60 60 L80 30 L100 60"/><circle class="svg-dash-path" cx="60" cy="80" r="20"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-morph-shape',
    name: 'SVG Morph Shape',
    category: 'svg',
    tags: ['svg', 'morph', 'shape', 'animate', 'transform'],
    difficulty: 'advanced',
    description: 'An SVG that morphs between different shapes using CSS animations on path data',
    cssCode: `.svg-morph-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-morph-wrap svg {
  width: 100px;
  height: 100px;
}
.svg-morph-circle {
  fill: #10b98122;
  stroke: #10b981;
  stroke-width: 2;
  animation: morph-rotate 6s linear infinite;
  filter: drop-shadow(0 0 6px #10b98133);
  transform-origin: center;
}
@keyframes morph-rotate {
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(0.9); }
  100% { transform: rotate(360deg) scale(1); }
}
.svg-morph-inner {
  fill: #10b98144;
  animation: morph-pulse 2s ease-in-out infinite;
}
@keyframes morph-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}
.svg-morph-dots {
  fill: #10b981;
  animation: dot-blink 1.5s ease-in-out infinite;
}
.svg-morph-dots:nth-child(3) { animation-delay: 0.5s; }
.svg-morph-dots:nth-child(4) { animation-delay: 1s; }
@keyframes dot-blink {
  0%, 100% { r: 3; }
  50% { r: 5; }
}`,
    htmlCode: `<div class="svg-morph-wrap"><svg viewBox="0 0 100 100"><polygon class="svg-morph-circle" points="50,5 95,30 95,70 50,95 5,70 5,30"/><circle class="svg-morph-inner" cx="50" cy="50" r="20"/><circle class="svg-morph-dots" cx="50" cy="5" r="4"/><circle class="svg-morph-dots" cx="95" cy="70" r="4"/><circle class="svg-morph-dots" cx="5" cy="30" r="4"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-filter-blur',
    name: 'SVG Filter Blur',
    category: 'svg',
    tags: ['svg', 'filter', 'blur', 'gaussian', 'effect'],
    difficulty: 'intermediate',
    description: 'An SVG with animated Gaussian blur filter that transitions between sharp and blurred states',
    cssCode: `.svg-blur-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-blur-wrap svg {
  width: 140px;
  height: 100px;
}
.svg-blur-rect {
  fill: #10b981;
  animation: blur-shift 2.5s ease-in-out infinite alternate;
  filter: url(#animBlur);
}
.svg-blur-rect.secondary {
  fill: #6366f1;
  animation-delay: 0.5s;
}
@keyframes blur-shift {
  0% { transform: translateX(-15px); }
  100% { transform: translateX(15px); }
}
.svg-blur-circle {
  fill: #f97316;
  animation: blur-float 3s ease-in-out infinite alternate;
  filter: url(#animBlur);
}
@keyframes blur-float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}`,
    htmlCode: `<div class="svg-blur-wrap"><svg viewBox="0 0 140 100"><defs><filter id="animBlur"><feGaussianBlur in="SourceGraphic" stdDeviation="3"/></filter></defs><rect class="svg-blur-rect" x="15" y="25" width="50" height="50" rx="10"/><rect class="svg-blur-rect secondary" x="75" y="30" width="40" height="40" rx="20"/><circle class="svg-blur-circle" cx="110" cy="30" r="15"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-pattern-fill',
    name: 'SVG Pattern Fill',
    category: 'svg',
    tags: ['svg', 'pattern', 'fill', 'repeat', 'texture'],
    difficulty: 'intermediate',
    description: 'An SVG shape filled with an animated pattern that shifts and creates visual texture',
    cssCode: `.svg-pattern-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-pattern-wrap svg {
  width: 120px;
  height: 120px;
}
.svg-pattern-shape {
  fill: url(#dotPattern);
  stroke: #10b981;
  stroke-width: 1.5;
  animation: pattern-pulse 3s ease-in-out infinite;
}
@keyframes pattern-pulse {
  0%, 100% { stroke-width: 1.5; filter: drop-shadow(0 0 2px #10b98122); }
  50% { stroke-width: 2.5; filter: drop-shadow(0 0 8px #10b98144); }
}
.svg-pattern-bg {
  fill: #10b98108;
  stroke: #2a2a3e;
  stroke-width: 1;
}`,
    htmlCode: `<div class="svg-pattern-wrap"><svg viewBox="0 0 120 120"><defs><pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r="2" fill="#10b981"/></pattern></defs><rect class="svg-pattern-bg" x="10" y="10" width="100" height="100" rx="16"/><rect class="svg-pattern-shape" x="10" y="10" width="100" height="100" rx="16"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-clip-reveal',
    name: 'SVG Clip Reveal',
    category: 'svg',
    tags: ['svg', 'clip', 'reveal', 'mask', 'clipPath'],
    difficulty: 'advanced',
    description: 'An SVG clip-path that reveals content with an expanding circle animation',
    cssCode: `.svg-clip-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-clip-wrap svg {
  width: 120px;
  height: 120px;
}
.svg-clip-bg {
  fill: #1a1a2e;
}
.svg-clip-content {
  fill: url(#clipGradient);
  clip-path: url(#revealClip);
  animation: clip-scale 2.5s ease-in-out infinite alternate;
  transform-origin: center;
}
@keyframes clip-scale {
  0% { transform: scale(0.3); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
.svg-clip-border {
  fill: none;
  stroke: #10b981;
  stroke-width: 2;
  stroke-dasharray: 4 2;
  animation: clip-dash 8s linear infinite;
}
@keyframes clip-dash {
  to { stroke-dashoffset: -60; }
}`,
    htmlCode: `<div class="svg-clip-wrap"><svg viewBox="0 0 120 120"><defs><clipPath id="revealClip"><circle cx="60" cy="60" r="50"/></clipPath><linearGradient id="clipGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/></linearGradient></defs><rect class="svg-clip-bg" x="10" y="10" width="100" height="100" rx="16"/><rect class="svg-clip-content" x="10" y="10" width="100" height="100" rx="16"/><rect class="svg-clip-border" x="10" y="10" width="100" height="100" rx="16"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-stroke-animate',
    name: 'SVG Stroke Animate',
    category: 'svg',
    tags: ['svg', 'stroke', 'animate', 'color', 'width'],
    difficulty: 'intermediate',
    description: 'SVG shapes with animated stroke colors and widths creating a dynamic outline effect',
    cssCode: `.svg-stroke-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-stroke-wrap svg {
  width: 140px;
  height: 100px;
}
.svg-stroke-line {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  animation: stroke-color 3s ease-in-out infinite alternate;
}
@keyframes stroke-color {
  0% { stroke: #10b981; stroke-width: 2; }
  33% { stroke: #34d399; stroke-width: 3; }
  66% { stroke: #6ee7b7; stroke-width: 2.5; }
  100% { stroke: #10b981; stroke-width: 4; }
}
.svg-stroke-line:nth-child(2) { animation-delay: 0.3s; }
.svg-stroke-line:nth-child(3) { animation-delay: 0.6s; }
.svg-stroke-line:nth-child(4) { animation-delay: 0.9s; }
.svg-stroke-dot {
  fill: #10b981;
  animation: stroke-dot-pulse 1.5s ease-in-out infinite;
}
.svg-stroke-dot:nth-child(5) { animation-delay: 0.3s; }
.svg-stroke-dot:nth-child(6) { animation-delay: 0.6s; }
@keyframes stroke-dot-pulse {
  0%, 100% { r: 3; opacity: 0.6; }
  50% { r: 5; opacity: 1; }
}`,
    htmlCode: `<div class="svg-stroke-wrap"><svg viewBox="0 0 140 100"><line class="svg-stroke-line" x1="10" y1="20" x2="130" y2="20"/><line class="svg-stroke-line" x1="10" y1="40" x2="130" y2="40"/><line class="svg-stroke-line" x1="10" y1="60" x2="130" y2="60"/><line class="svg-stroke-line" x1="10" y1="80" x2="130" y2="80"/><circle class="svg-stroke-dot" cx="70" cy="20" r="3"/><circle class="svg-stroke-dot" cx="50" cy="40" r="3"/><circle class="svg-stroke-dot" cx="90" cy="60" r="3"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-glow-filter',
    name: 'SVG Glow Filter',
    category: 'svg',
    tags: ['svg', 'glow', 'filter', 'feGaussianBlur', 'light'],
    difficulty: 'intermediate',
    description: 'An SVG element with an animated glow filter using feGaussianBlur and feComposite',
    cssCode: `.svg-glow-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-glow-wrap svg {
  width: 120px;
  height: 120px;
}
.svg-glow-shape {
  fill: #10b981;
  filter: url(#glowFilter);
  animation: glow-breathe 2s ease-in-out infinite;
}
@keyframes glow-breathe {
  0%, 100% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  transform-origin: center;
}
.svg-glow-ring {
  fill: none;
  stroke: #10b98144;
  stroke-width: 1;
  animation: glow-ring-expand 2s ease-in-out infinite;
}
@keyframes glow-ring-expand {
  0% { r: 30; opacity: 0.8; }
  100% { r: 55; opacity: 0; }
}
.svg-glow-ring:nth-child(3) { animation-delay: 1s; }`,
    htmlCode: `<div class="svg-glow-wrap"><svg viewBox="0 0 120 120"><defs><filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs><circle class="svg-glow-ring" cx="60" cy="60" r="30"/><circle class="svg-glow-ring" cx="60" cy="60" r="30"/><polygon class="svg-glow-shape" points="60,25 80,50 75,80 45,80 40,50"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-noise-texture',
    name: 'SVG Noise Texture',
    category: 'svg',
    tags: ['svg', 'noise', 'texture', 'feTurbulence', 'grain'],
    difficulty: 'advanced',
    description: 'An SVG feTurbulence filter that creates an animated noise texture overlay effect',
    cssCode: `.svg-noise-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-noise-wrap svg {
  width: 140px;
  height: 100px;
}
.svg-noise-rect {
  fill: #1a1a2e;
  stroke: #2a2a3e;
  stroke-width: 1;
}
.svg-noise-overlay {
  filter: url(#noiseFilter);
  opacity: 0.4;
  animation: noise-shift 0.5s steps(5) infinite;
}
@keyframes noise-shift {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(1px, -1px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); }
  100% { transform: translate(0, 0); }
}
.svg-noise-accent {
  fill: #10b981;
  opacity: 0.6;
  animation: noise-accent-pulse 2s ease-in-out infinite;
}
@keyframes noise-accent-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}`,
    htmlCode: `<div class="svg-noise-wrap"><svg viewBox="0 0 140 100"><defs><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter></defs><rect class="svg-noise-rect" x="10" y="10" width="120" height="80" rx="12"/><rect class="svg-noise-overlay" x="10" y="10" width="120" height="80" rx="12" fill="white"/><rect class="svg-noise-accent" x="50" y="40" width="40" height="20" rx="4"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-blend-mode',
    name: 'SVG Blend Mode',
    category: 'svg',
    tags: ['svg', 'blend', 'mode', 'mix', 'composite'],
    difficulty: 'advanced',
    description: 'SVG shapes using blend modes to create dynamic color mixing and visual layering effects',
    cssCode: `.svg-blend-wrap {
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-blend-wrap svg {
  width: 120px;
  height: 120px;
}
.svg-blend-bg {
  fill: #1a1a2e;
  rx: 16;
}
.svg-blend-circle {
  mix-blend-mode: screen;
  animation: blend-drift 3s ease-in-out infinite alternate;
}
.svg-blend-circle:nth-child(2) {
  fill: #10b981;
  animation-delay: 0s;
}
.svg-blend-circle:nth-child(3) {
  fill: #6366f1;
  animation-delay: 0.5s;
}
.svg-blend-circle:nth-child(4) {
  fill: #f43f5e;
  animation-delay: 1s;
}
@keyframes blend-drift {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(8px, -5px) scale(1.05); }
  66% { transform: translate(-5px, 8px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
}
.svg-blend-label {
  fill: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  text-anchor: middle;
}`,
    htmlCode: `<div class="svg-blend-wrap"><svg viewBox="0 0 120 120"><rect class="svg-blend-bg" x="10" y="10" width="100" height="100"/><circle class="svg-blend-circle" cx="50" cy="50" r="30"/><circle class="svg-blend-circle" cx="70" cy="50" r="30"/><circle class="svg-blend-circle" cx="60" cy="70" r="30"/><text class="svg-blend-label" x="60" y="105">Screen Blend</text></svg></div>`,
    isNew: true,
  },
  {
    id: 'svg-turbulence',
    name: 'SVG Turbulence',
    category: 'svg',
    tags: ['svg', 'turbulence', 'feTurbulence', 'displacement', 'distort'],
    difficulty: 'advanced',
    description: 'SVG feTurbulence and feDisplacementMap creating an animated distortion warp effect',
    cssCode: `.svg-turbulence-wrap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}
.svg-turbulence-wrap svg {
  width: 140px;
  height: 100px;
}
.svg-turb-bg {
  fill: #1a1a2e;
  stroke: #2a2a3e;
  stroke-width: 1;
}
.svg-turb-shape {
  fill: #10b981;
  filter: url(#turbFilter);
  animation: turb-pulse 2s ease-in-out infinite;
}
@keyframes turb-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
.svg-turb-line {
  fill: none;
  stroke: #10b98166;
  stroke-width: 1;
  filter: url(#turbFilter);
  animation: turb-wave 3s ease-in-out infinite;
}
@keyframes turb-wave {
  0%, 100% { stroke-width: 1; }
  50% { stroke-width: 2; }
}
.svg-turb-text {
  fill: #94a3b8;
  font-size: 8px;
  font-weight: 700;
  text-anchor: middle;
}`,
    htmlCode: `<div class="svg-turbulence-wrap"><svg viewBox="0 0 140 100"><defs><filter id="turbFilter"><feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2" result="turbulence"><animate attributeName="baseFrequency" from="0.02" to="0.06" dur="3s" repeatCount="indefinite"/></feTurbulence><feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" xChannelSelector="R" yChannelSelector="G"/></filter></defs><rect class="svg-turb-bg" x="10" y="10" width="120" height="80" rx="12"/><rect class="svg-turb-shape" x="40" y="30" width="60" height="40" rx="8"/><line class="svg-turb-line" x1="20" y1="50" x2="120" y2="50"/><text class="svg-turb-text" x="70" y="95">Displacement Map</text></svg></div>`,
    isNew: true,
  },
];
