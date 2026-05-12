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

export const effectsLoadingBatch: CSSEffect[] = [
  {
    id: 'wave-dots-loader',
    name: 'Wave Dots',
    category: 'loading',
    tags: ['loading', 'dots', 'wave'],
    difficulty: 'beginner',
    description: 'Dots moving in a wave pattern',
    cssCode: `.wave-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}
.wave-dots span {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: waveDot 1.2s ease-in-out infinite;
}
.wave-dots span:nth-child(2) { animation-delay: 0.1s; }
.wave-dots span:nth-child(3) { animation-delay: 0.2s; }
.wave-dots span:nth-child(4) { animation-delay: 0.3s; }
.wave-dots span:nth-child(5) { animation-delay: 0.4s; }
@keyframes waveDot {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(-16px); opacity: 1; }
}`,
    htmlCode: `<div class="wave-dots"><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'bouncing-bars',
    name: 'Bouncing Bars',
    category: 'loading',
    tags: ['loading', 'bars', 'bounce'],
    difficulty: 'beginner',
    description: 'Vertical bars bouncing at different heights',
    cssCode: `.bouncing-bars {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 40px;
}
.bouncing-bars span {
  width: 6px;
  height: 10px;
  background: #10b981;
  border-radius: 2px;
  animation: bounceBar 1s ease-in-out infinite;
}
.bouncing-bars span:nth-child(1) { animation-delay: 0s; }
.bouncing-bars span:nth-child(2) { animation-delay: 0.1s; }
.bouncing-bars span:nth-child(3) { animation-delay: 0.2s; }
.bouncing-bars span:nth-child(4) { animation-delay: 0.3s; }
.bouncing-bars span:nth-child(5) { animation-delay: 0.4s; }
@keyframes bounceBar {
  0%, 100% { height: 10px; opacity: 0.5; }
  50% { height: 36px; opacity: 1; }
}`,
    htmlCode: `<div class="bouncing-bars"><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'spinning-ring',
    name: 'Spinning Ring',
    category: 'loading',
    tags: ['loading', 'ring', 'spin'],
    difficulty: 'beginner',
    description: 'A ring with a gap that spins continuously',
    cssCode: `.spinning-ring {
  width: 40px;
  height: 40px;
  border: 4px solid #1a1a2e;
  border-top-color: #10b981;
  border-radius: 50%;
  animation: spinRing 0.8s linear infinite;
}
@keyframes spinRing {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="spinning-ring"></div>`,
    isNew: true,
  },
  {
    id: 'morphing-shapes',
    name: 'Morphing Shapes',
    category: 'loading',
    tags: ['loading', 'morph', 'shapes'],
    difficulty: 'intermediate',
    description: 'A shape that morphs between circle, square, and diamond',
    cssCode: `.morphing-shapes {
  width: 40px;
  height: 40px;
  background: #10b981;
  animation: morphShape 2s ease-in-out infinite;
}
@keyframes morphShape {
  0% { border-radius: 50%; transform: rotate(0deg); }
  33% { border-radius: 0; transform: rotate(45deg) scale(0.8); }
  66% { border-radius: 50%; transform: rotate(90deg) scale(1.1); }
  100% { border-radius: 50%; transform: rotate(360deg); }
}`,
    htmlCode: `<div class="morphing-shapes"></div>`,
    isNew: true,
  },
  {
    id: 'pulse-circle',
    name: 'Pulse Circle',
    category: 'loading',
    tags: ['loading', 'pulse', 'circle'],
    difficulty: 'beginner',
    description: 'A circle that pulses in and out with opacity changes',
    cssCode: `.pulse-circle {
  width: 40px;
  height: 40px;
  background: #10b981;
  border-radius: 50%;
  animation: pulseCircle 1.2s ease-in-out infinite;
}
@keyframes pulseCircle {
  0%, 100% { transform: scale(0.6); opacity: 0.4; }
  50% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="pulse-circle"></div>`,
    isNew: true,
  },
  {
    id: 'dna-helix',
    name: 'DNA Helix',
    category: 'loading',
    tags: ['loading', 'dna', 'helix', 'science'],
    difficulty: 'intermediate',
    description: 'Two strands of dots twisting like a DNA helix',
    cssCode: `.dna-helix {
  display: flex;
  gap: 6px;
  align-items: center;
  height: 40px;
}
.dna-helix .strand {
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: dnaTwist 1.5s ease-in-out infinite;
}
.dna-helix .strand span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.dna-helix .strand.left span { background: #10b981; }
.dna-helix .strand.right span { background: #3b82f6; }
.dna-helix .strand.right { animation-delay: 0.75s; }
@keyframes dnaTwist {
  0%, 100% { transform: translateY(0) scaleX(1); }
  50% { transform: translateY(-6px) scaleX(0.4); }
}`,
    htmlCode: `<div class="dna-helix"><div class="strand left"><span></span><span></span><span></span></div><div class="strand right"><span></span><span></span><span></span></div><div class="strand left"><span></span><span></span><span></span></div><div class="strand right"><span></span><span></span><span></span></div></div>`,
    isNew: true,
  },
  {
    id: 'bouncing-squares',
    name: 'Bouncing Squares',
    category: 'loading',
    tags: ['loading', 'squares', 'bounce'],
    difficulty: 'beginner',
    description: 'Small squares bouncing in sequence',
    cssCode: `.bouncing-squares {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 40px;
}
.bouncing-squares span {
  width: 10px;
  height: 10px;
  background: #10b981;
  animation: bounceSquare 0.8s ease-in-out infinite;
}
.bouncing-squares span:nth-child(2) { animation-delay: 0.15s; }
.bouncing-squares span:nth-child(3) { animation-delay: 0.3s; }
.bouncing-squares span:nth-child(4) { animation-delay: 0.45s; }
@keyframes bounceSquare {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-24px); }
}`,
    htmlCode: `<div class="bouncing-squares"><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'rotating-squares',
    name: 'Rotating Squares',
    category: 'loading',
    tags: ['loading', 'squares', 'rotate'],
    difficulty: 'intermediate',
    description: 'Two squares rotating in opposite directions',
    cssCode: `.rotating-squares {
  width: 44px;
  height: 44px;
  position: relative;
}
.rotating-squares span {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid #10b981;
  top: 50%;
  left: 50%;
}
.rotating-squares span:nth-child(1) {
  animation: rotateCW 1.5s linear infinite;
}
.rotating-squares span:nth-child(2) {
  animation: rotateCCW 1.5s linear infinite;
}
@keyframes rotateCW {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes rotateCCW {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(-360deg); }
}`,
    htmlCode: `<div class="rotating-squares"><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'wave-line',
    name: 'Wave Line',
    category: 'loading',
    tags: ['loading', 'wave', 'line'],
    difficulty: 'intermediate',
    description: 'A sinusoidal wave line animation',
    cssCode: `.wave-line {
  display: flex;
  gap: 3px;
  align-items: center;
  height: 30px;
}
.wave-line span {
  width: 3px;
  height: 8px;
  background: #10b981;
  border-radius: 2px;
  animation: waveLine 1s ease-in-out infinite;
}
.wave-line span:nth-child(2) { animation-delay: 0.05s; }
.wave-line span:nth-child(3) { animation-delay: 0.1s; }
.wave-line span:nth-child(4) { animation-delay: 0.15s; }
.wave-line span:nth-child(5) { animation-delay: 0.2s; }
.wave-line span:nth-child(6) { animation-delay: 0.25s; }
.wave-line span:nth-child(7) { animation-delay: 0.3s; }
.wave-line span:nth-child(8) { animation-delay: 0.35s; }
@keyframes waveLine {
  0%, 100% { height: 8px; opacity: 0.5; }
  50% { height: 26px; opacity: 1; }
}`,
    htmlCode: `<div class="wave-line"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'ripple-loader',
    name: 'Ripple Loader',
    category: 'loading',
    tags: ['loading', 'ripple', 'circle'],
    difficulty: 'intermediate',
    description: 'Concentric ripple circles expanding outward',
    cssCode: `.ripple-loader {
  width: 40px;
  height: 40px;
  position: relative;
}
.ripple-loader span {
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: rippleExpand 1.5s ease-out infinite;
}
.ripple-loader span:nth-child(2) { animation-delay: 0.5s; }
.ripple-loader span:nth-child(3) { animation-delay: 1s; }
@keyframes rippleExpand {
  0% { transform: scale(0.3); opacity: 1; }
  100% { transform: scale(1.2); opacity: 0; }
}`,
    htmlCode: `<div class="ripple-loader"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'snake-loader',
    name: 'Snake Loader',
    category: 'loading',
    tags: ['loading', 'snake', 'dots'],
    difficulty: 'intermediate',
    description: 'Dots following a snake-like path',
    cssCode: `.snake-loader {
  width: 50px;
  height: 30px;
  position: relative;
}
.snake-loader span {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: snakePath 1.4s ease-in-out infinite;
}
.snake-loader span:nth-child(2) { animation-delay: 0.2s; }
.snake-loader span:nth-child(3) { animation-delay: 0.4s; }
.snake-loader span:nth-child(4) { animation-delay: 0.6s; }
@keyframes snakePath {
  0% { left: 0; top: 50%; transform: translateY(-50%); }
  25% { left: 35%; top: 0; }
  50% { left: 70%; top: 50%; transform: translateY(-50%); }
  75% { left: 35%; top: 100%; transform: translateY(-100%); }
  100% { left: 0; top: 50%; transform: translateY(-50%); }
}`,
    htmlCode: `<div class="snake-loader"><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'bar-chart-loader',
    name: 'Bar Chart Loader',
    category: 'loading',
    tags: ['loading', 'bars', 'chart'],
    difficulty: 'beginner',
    description: 'Bars animating like a sound equalizer chart',
    cssCode: `.bar-chart-loader {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 36px;
}
.bar-chart-loader span {
  width: 5px;
  background: #10b981;
  border-radius: 2px;
  animation: barChart 1s ease-in-out infinite;
}
.bar-chart-loader span:nth-child(1) { animation-delay: 0s; }
.bar-chart-loader span:nth-child(2) { animation-delay: 0.12s; }
.bar-chart-loader span:nth-child(3) { animation-delay: 0.24s; }
.bar-chart-loader span:nth-child(4) { animation-delay: 0.36s; }
.bar-chart-loader span:nth-child(5) { animation-delay: 0.48s; }
.bar-chart-loader span:nth-child(6) { animation-delay: 0.6s; }
@keyframes barChart {
  0%, 100% { height: 6px; opacity: 0.4; }
  50% { height: 32px; opacity: 1; }
}`,
    htmlCode: `<div class="bar-chart-loader"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'battery-loader',
    name: 'Battery Loader',
    category: 'loading',
    tags: ['loading', 'battery', 'charge'],
    difficulty: 'intermediate',
    description: 'A battery filling up with charge animation',
    cssCode: `.battery-loader {
  width: 44px;
  height: 22px;
  border: 2px solid #10b981;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.battery-loader::after {
  content: '';
  position: absolute;
  right: -6px;
  top: 4px;
  width: 4px;
  height: 10px;
  background: #10b981;
  border-radius: 0 2px 2px 0;
}
.battery-loader span {
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  background: #10b981;
  border-radius: 2px;
  animation: batteryFill 2s ease-in-out infinite;
}
@keyframes batteryFill {
  0% { width: 0; opacity: 0.4; }
  70% { width: calc(100% - 4px); opacity: 1; }
  100% { width: calc(100% - 4px); opacity: 0.4; }
}`,
    htmlCode: `<div class="battery-loader"><span></span></div>`,
    isNew: true,
  },
  {
    id: 'clock-loader',
    name: 'Clock Loader',
    category: 'loading',
    tags: ['loading', 'clock', 'time'],
    difficulty: 'intermediate',
    description: 'A clock face with a sweeping hand animation',
    cssCode: `.clock-loader {
  width: 40px;
  height: 40px;
  border: 3px solid #1a1a2e;
  border-top-color: #10b981;
  border-right-color: #10b981;
  border-radius: 50%;
  position: relative;
  animation: clockSpin 3s linear infinite;
}
.clock-loader::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 2px;
  background: #10b981;
  transform-origin: left center;
  animation: clockHand 1s linear infinite;
}
@keyframes clockSpin { to { transform: rotate(360deg); } }
@keyframes clockHand { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="clock-loader"></div>`,
    isNew: true,
  },
  {
    id: 'equalizer-loader',
    name: 'Equalizer Loader',
    category: 'loading',
    tags: ['loading', 'equalizer', 'music'],
    difficulty: 'beginner',
    description: 'Music equalizer bars bouncing rhythmically',
    cssCode: `.equalizer-loader {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 36px;
}
.equalizer-loader span {
  width: 6px;
  background: #10b981;
  border-radius: 3px;
  animation: equalize 0.8s ease-in-out infinite alternate;
}
.equalizer-loader span:nth-child(1) { animation-duration: 0.6s; }
.equalizer-loader span:nth-child(2) { animation-duration: 0.9s; }
.equalizer-loader span:nth-child(3) { animation-duration: 0.7s; }
.equalizer-loader span:nth-child(4) { animation-duration: 1s; }
.equalizer-loader span:nth-child(5) { animation-duration: 0.5s; }
@keyframes equalize {
  0% { height: 6px; }
  100% { height: 32px; }
}`,
    htmlCode: `<div class="equalizer-loader"><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'flame-loader',
    name: 'Flame Loader',
    category: 'loading',
    tags: ['loading', 'flame', 'fire'],
    difficulty: 'intermediate',
    description: 'A flickering flame animation for loading',
    cssCode: `.flame-loader {
  width: 20px;
  height: 30px;
  position: relative;
}
.flame-loader span {
  position: absolute;
  bottom: 0;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: flicker 0.4s ease-in-out infinite alternate;
}
.flame-loader span:nth-child(1) {
  width: 20px; height: 28px;
  background: rgba(16,185,129,0.3);
}
.flame-loader span:nth-child(2) {
  width: 14px; height: 22px; left: 3px;
  background: rgba(16,185,129,0.5);
  animation-delay: 0.1s;
}
.flame-loader span:nth-child(3) {
  width: 8px; height: 16px; left: 6px;
  background: #10b981;
  animation-delay: 0.2s;
}
@keyframes flicker {
  0% { transform: scaleX(1) translateY(0); }
  100% { transform: scaleX(0.8) translateY(-3px); }
}`,
    htmlCode: `<div class="flame-loader"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'hourglass-loader',
    name: 'Hourglass Loader',
    category: 'loading',
    tags: ['loading', 'hourglass', 'time'],
    difficulty: 'intermediate',
    description: 'An hourglass with sand flowing animation',
    cssCode: `.hourglass-loader {
  width: 30px;
  height: 44px;
  position: relative;
  animation: hourglassFlip 2s ease-in-out infinite;
}
.hourglass-loader::before, .hourglass-loader::after {
  content: '';
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
}
.hourglass-loader::before {
  top: 0;
  border-top: 20px solid #10b981;
}
.hourglass-loader::after {
  bottom: 0;
  border-bottom: 20px solid #10b981;
}
@keyframes hourglassFlip {
  0%, 40% { transform: rotate(0deg); }
  50%, 90% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="hourglass-loader"></div>`,
    isNew: true,
  },
  {
    id: 'pendulum-loader',
    name: 'Pendulum Loader',
    category: 'loading',
    tags: ['loading', 'pendulum', 'swing'],
    difficulty: 'intermediate',
    description: 'A pendulum swinging back and forth',
    cssCode: `.pendulum-loader {
  width: 50px;
  height: 40px;
  position: relative;
}
.pendulum-loader::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 28px;
  background: #10b981;
  transform-origin: top center;
  animation: pendulumSwing 1s ease-in-out infinite;
}
.pendulum-loader::after {
  content: '';
  position: absolute;
  top: 26px;
  left: 50%;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  transform: translateX(-50%);
  animation: pendulumBob 1s ease-in-out infinite;
}
@keyframes pendulumSwing {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(30deg); }
}
@keyframes pendulumBob {
  0%, 100% { left: 25%; }
  50% { left: 75%; }
}`,
    htmlCode: `<div class="pendulum-loader"></div>`,
    isNew: true,
  },
  {
    id: 'radar-loader',
    name: 'Radar Loader',
    category: 'loading',
    tags: ['loading', 'radar', 'sweep'],
    difficulty: 'intermediate',
    description: 'A radar screen with a sweeping line',
    cssCode: `.radar-loader {
  width: 44px;
  height: 44px;
  border: 2px solid #1a1a2e;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.radar-loader::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, #10b981, transparent);
  transform-origin: left center;
  animation: radarSweep 1.5s linear infinite;
}
.radar-loader::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
@keyframes radarSweep {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="radar-loader"></div>`,
    isNew: true,
  },
  {
    id: 'signal-loader',
    name: 'Signal Loader',
    category: 'loading',
    tags: ['loading', 'signal', 'wifi'],
    difficulty: 'beginner',
    description: 'Signal bars animating like wifi strength',
    cssCode: `.signal-loader {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 30px;
}
.signal-loader span {
  width: 6px;
  background: #1a1a2e;
  border-radius: 1px;
  animation: signalBar 1.5s ease-in-out infinite;
}
.signal-loader span:nth-child(1) { height: 6px; animation-delay: 0s; }
.signal-loader span:nth-child(2) { height: 12px; animation-delay: 0.2s; }
.signal-loader span:nth-child(3) { height: 18px; animation-delay: 0.4s; }
.signal-loader span:nth-child(4) { height: 24px; animation-delay: 0.6s; }
@keyframes signalBar {
  0%, 20% { background: #1a1a2e; }
  40%, 100% { background: #10b981; }
}`,
    htmlCode: `<div class="signal-loader"><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'sonar-loader',
    name: 'Sonar Loader',
    category: 'loading',
    tags: ['loading', 'sonar', 'ping'],
    difficulty: 'intermediate',
    description: 'A sonar ping with expanding and fading rings',
    cssCode: `.sonar-loader {
  width: 44px;
  height: 44px;
  position: relative;
}
.sonar-loader span {
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: sonarPing 2s ease-out infinite;
}
.sonar-loader span:nth-child(2) { animation-delay: 0.5s; }
.sonar-loader span:nth-child(3) { animation-delay: 1s; }
.sonar-loader span:nth-child(4) { animation-delay: 1.5s; }
@keyframes sonarPing {
  0% { transform: scale(0.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}`,
    htmlCode: `<div class="sonar-loader"><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'spiral-loader',
    name: 'Spiral Loader',
    category: 'loading',
    tags: ['loading', 'spiral', 'dots'],
    difficulty: 'advanced',
    description: 'Dots arranged in a spiral formation animation',
    cssCode: `.spiral-loader {
  width: 44px;
  height: 44px;
  position: relative;
  animation: spiralSpin 2s linear infinite;
}
.spiral-loader span {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
}
.spiral-loader span:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.spiral-loader span:nth-child(2) { top: 12%; right: 12%; }
.spiral-loader span:nth-child(3) { top: 50%; right: 0; transform: translateY(-50%); }
.spiral-loader span:nth-child(4) { bottom: 12%; right: 12%; }
.spiral-loader span:nth-child(5) { bottom: 0; left: 50%; transform: translateX(-50%); opacity: 0.6; }
.spiral-loader span:nth-child(6) { bottom: 12%; left: 12%; opacity: 0.4; }
@keyframes spiralSpin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="spiral-loader"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'atom-loader',
    name: 'Atom Loader',
    category: 'loading',
    tags: ['loading', 'atom', 'orbit', 'science'],
    difficulty: 'advanced',
    description: 'An atom with orbiting electron paths',
    cssCode: `.atom-loader {
  width: 44px;
  height: 44px;
  position: relative;
}
.atom-loader .nucleus {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.atom-loader .orbit {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-top-color: #10b981;
  border-radius: 50%;
}
.atom-loader .orbit:nth-child(2) { animation: atomSpin 1s linear infinite; }
.atom-loader .orbit:nth-child(3) { animation: atomSpin 1.3s linear infinite; transform: rotate(60deg); }
.atom-loader .orbit:nth-child(4) { animation: atomSpin 1.6s linear infinite; transform: rotate(-60deg); }
@keyframes atomSpin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="atom-loader"><div class="nucleus"></div><div class="orbit"></div><div class="orbit"></div><div class="orbit"></div></div>`,
    isNew: true,
  },
  {
    id: 'cube-loader',
    name: 'Cube Loader',
    category: 'loading',
    tags: ['loading', 'cube', '3d'],
    difficulty: 'advanced',
    description: 'A 3D rotating cube using CSS transforms',
    cssCode: `.cube-loader {
  width: 36px;
  height: 36px;
  perspective: 80px;
}
.cube-loader .cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: cubeRotate 2s linear infinite;
}
.cube-loader .cube span {
  position: absolute;
  width: 36px;
  height: 36px;
  border: 2px solid #10b981;
  background: rgba(16,185,129,0.1);
}
.cube-loader .cube .front { transform: translateZ(18px); }
.cube-loader .cube .back { transform: translateZ(-18px) rotateY(180deg); }
.cube-loader .cube .left { transform: translateX(-18px) rotateY(-90deg); }
.cube-loader .cube .right { transform: translateX(18px) rotateY(90deg); }
@keyframes cubeRotate {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`,
    htmlCode: `<div class="cube-loader"><div class="cube"><span class="front"></span><span class="back"></span><span class="left"></span><span class="right"></span></div></div>`,
    isNew: true,
  },
  {
    id: 'pyramid-loader',
    name: 'Pyramid Loader',
    category: 'loading',
    tags: ['loading', 'pyramid', '3d'],
    difficulty: 'advanced',
    description: 'A rotating pyramid shape',
    cssCode: `.pyramid-loader {
  width: 40px;
  height: 40px;
  perspective: 100px;
}
.pyramid-loader .pyramid {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: pyrRotate 3s linear infinite;
}
.pyramid-loader span {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 34px solid rgba(16,185,129,0.3);
}
.pyramid-loader span:nth-child(1) { transform: rotateY(0deg) translateZ(12px); top: 3px; left: 0; }
.pyramid-loader span:nth-child(2) { transform: rotateY(90deg) translateZ(12px); top: 3px; left: 0; border-bottom-color: rgba(16,185,129,0.5); }
@keyframes pyrRotate {
  to { transform: rotateY(360deg); }
}`,
    htmlCode: `<div class="pyramid-loader"><div class="pyramid"><span></span><span></span></div></div>`,
    isNew: true,
  },
  {
    id: 'spring-loader',
    name: 'Spring Loader',
    category: 'loading',
    tags: ['loading', 'spring', 'bounce'],
    difficulty: 'intermediate',
    description: 'A spring compressing and expanding',
    cssCode: `.spring-loader {
  width: 30px;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  animation: springBounce 1s ease-in-out infinite;
}
.spring-loader span {
  width: 20px;
  height: 3px;
  background: #10b981;
  border-radius: 2px;
}
.spring-loader span:nth-child(2) { width: 26px; }
.spring-loader span:nth-child(3) { width: 30px; }
.spring-loader span:nth-child(4) { width: 26px; }
@keyframes springBounce {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.5); }
}`,
    htmlCode: `<div class="spring-loader"><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'rain-loader',
    name: 'Rain Loader',
    category: 'loading',
    tags: ['loading', 'rain', 'drops'],
    difficulty: 'intermediate',
    description: 'Falling rain drops animation',
    cssCode: `.rain-loader {
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
}
.rain-loader span {
  position: absolute;
  width: 2px;
  height: 10px;
  background: #10b981;
  border-radius: 2px;
  animation: rainDrop 0.8s linear infinite;
}
.rain-loader span:nth-child(1) { left: 8px; animation-delay: 0s; }
.rain-loader span:nth-child(2) { left: 18px; animation-delay: 0.2s; }
.rain-loader span:nth-child(3) { left: 28px; animation-delay: 0.4s; }
.rain-loader span:nth-child(4) { left: 13px; animation-delay: 0.6s; }
.rain-loader span:nth-child(5) { left: 33px; animation-delay: 0.3s; }
@keyframes rainDrop {
  0% { top: -12px; opacity: 0; }
  20% { opacity: 1; }
  100% { top: 42px; opacity: 0; }
}`,
    htmlCode: `<div class="rain-loader"><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'snow-loader',
    name: 'Snow Loader',
    category: 'loading',
    tags: ['loading', 'snow', 'winter'],
    difficulty: 'intermediate',
    description: 'Snowflakes gently falling down',
    cssCode: `.snow-loader {
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
}
.snow-loader span {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #10b981;
  border-radius: 50%;
  animation: snowFall 2s linear infinite;
}
.snow-loader span:nth-child(1) { left: 5px; animation-delay: 0s; }
.snow-loader span:nth-child(2) { left: 18px; animation-delay: 0.4s; }
.snow-loader span:nth-child(3) { left: 32px; animation-delay: 0.8s; }
.snow-loader span:nth-child(4) { left: 10px; animation-delay: 1.2s; }
.snow-loader span:nth-child(5) { left: 25px; animation-delay: 1.6s; }
@keyframes snowFall {
  0% { top: -6px; opacity: 0; transform: translateX(0); }
  20% { opacity: 1; }
  100% { top: 42px; opacity: 0; transform: translateX(8px); }
}`,
    htmlCode: `<div class="snow-loader"><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'fire-loader',
    name: 'Fire Loader',
    category: 'loading',
    tags: ['loading', 'fire', 'flame'],
    difficulty: 'intermediate',
    description: 'Animated fire flames rising upward',
    cssCode: `.fire-loader {
  width: 30px;
  height: 40px;
  position: relative;
}
.fire-loader span {
  position: absolute;
  bottom: 0;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: fireRise 0.6s ease-out infinite;
}
.fire-loader span:nth-child(1) {
  width: 12px; height: 20px; left: 0;
  background: rgba(16,185,129,0.4);
}
.fire-loader span:nth-child(2) {
  width: 16px; height: 28px; left: 7px;
  background: rgba(16,185,129,0.6);
  animation-delay: 0.15s;
}
.fire-loader span:nth-child(3) {
  width: 12px; height: 18px; left: 18px;
  background: rgba(16,185,129,0.4);
  animation-delay: 0.3s;
}
@keyframes fireRise {
  0% { opacity: 1; transform: translateY(0) scaleX(1); }
  100% { opacity: 0; transform: translateY(-20px) scaleX(0.4); }
}`,
    htmlCode: `<div class="fire-loader"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'water-loader',
    name: 'Water Loader',
    category: 'loading',
    tags: ['loading', 'water', 'wave'],
    difficulty: 'intermediate',
    description: 'Water wave ripple animation',
    cssCode: `.water-loader {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #1a1a2e;
  position: relative;
  overflow: hidden;
}
.water-loader::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  height: 50%;
  background: rgba(16,185,129,0.3);
  border-radius: 40%;
  animation: waterWave 2s ease-in-out infinite;
}
.water-loader::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  height: 45%;
  background: rgba(16,185,129,0.5);
  border-radius: 40%;
  animation: waterWave 2.5s ease-in-out infinite reverse;
}
@keyframes waterWave {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}`,
    htmlCode: `<div class="water-loader"></div>`,
    isNew: true,
  },
  {
    id: 'wind-loader',
    name: 'Wind Loader',
    category: 'loading',
    tags: ['loading', 'wind', 'lines'],
    difficulty: 'beginner',
    description: 'Wind lines blowing across animation',
    cssCode: `.wind-loader {
  width: 44px;
  height: 30px;
  position: relative;
}
.wind-loader span {
  position: absolute;
  height: 2px;
  background: #10b981;
  border-radius: 1px;
  animation: windBlow 1s ease-in-out infinite;
}
.wind-loader span:nth-child(1) { width: 24px; top: 6px; animation-delay: 0s; }
.wind-loader span:nth-child(2) { width: 32px; top: 14px; animation-delay: 0.2s; }
.wind-loader span:nth-child(3) { width: 20px; top: 22px; animation-delay: 0.4s; }
@keyframes windBlow {
  0% { left: -100%; opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}`,
    htmlCode: `<div class="wind-loader"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'moon-loader',
    name: 'Moon Loader',
    category: 'loading',
    tags: ['loading', 'moon', 'crescent'],
    difficulty: 'intermediate',
    description: 'A crescent moon rotating loading animation',
    cssCode: `.moon-loader {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: inset -8px 0 0 0 #10b981;
  animation: moonSpin 1.2s linear infinite;
}
@keyframes moonSpin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="moon-loader"></div>`,
    isNew: true,
  },
  {
    id: 'sun-loader',
    name: 'Sun Loader',
    category: 'loading',
    tags: ['loading', 'sun', 'rays'],
    difficulty: 'intermediate',
    description: 'A sun with rotating rays',
    cssCode: `.sun-loader {
  width: 40px;
  height: 40px;
  position: relative;
}
.sun-loader::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.sun-loader::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px dashed #10b981;
  border-radius: 50%;
  animation: sunRays 3s linear infinite;
}
@keyframes sunRays {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="sun-loader"></div>`,
    isNew: true,
  },
  {
    id: 'star-loader',
    name: 'Star Loader',
    category: 'loading',
    tags: ['loading', 'star', 'twinkle'],
    difficulty: 'intermediate',
    description: 'A star that rotates and pulses',
    cssCode: `.star-loader {
  width: 40px;
  height: 40px;
  position: relative;
  animation: starPulse 1.5s ease-in-out infinite;
}
.star-loader::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #10b981;
  transform: translate(-50%, -50%) rotate(45deg);
}
.star-loader::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #10b981;
  transform: translate(-50%, -50%) rotate(-45deg);
}
@keyframes starPulse {
  0%, 100% { transform: scale(0.7) rotate(0deg); opacity: 0.6; }
  50% { transform: scale(1) rotate(20deg); opacity: 1; }
}`,
    htmlCode: `<div class="star-loader"></div>`,
    isNew: true,
  },
  {
    id: 'heart-loader',
    name: 'Heart Loader',
    category: 'loading',
    tags: ['loading', 'heart', 'pulse'],
    difficulty: 'beginner',
    description: 'A heart shape with a beating pulse animation',
    cssCode: `.heart-loader {
  width: 36px;
  height: 32px;
  position: relative;
  animation: heartBeat 0.8s ease-in-out infinite;
}
.heart-loader::before, .heart-loader::after {
  content: '';
  position: absolute;
  top: 0;
  width: 18px;
  height: 28px;
  background: #10b981;
  border-radius: 18px 18px 0 0;
}
.heart-loader::before {
  left: 0;
  transform: rotate(-45deg);
  transform-origin: bottom right;
}
.heart-loader::after {
  right: 0;
  transform: rotate(45deg);
  transform-origin: bottom left;
}
@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.15); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
}`,
    htmlCode: `<div class="heart-loader"></div>`,
    isNew: true,
  },
  {
    id: 'diamond-loader',
    name: 'Diamond Loader',
    category: 'loading',
    tags: ['loading', 'diamond', 'rotate'],
    difficulty: 'beginner',
    description: 'A diamond shape rotating and scaling',
    cssCode: `.diamond-loader {
  width: 30px;
  height: 30px;
  background: #10b981;
  transform: rotate(45deg);
  animation: diamondSpin 1.5s ease-in-out infinite;
}
@keyframes diamondSpin {
  0% { transform: rotate(45deg) scale(0.6); opacity: 0.4; }
  50% { transform: rotate(225deg) scale(1); opacity: 1; }
  100% { transform: rotate(405deg) scale(0.6); opacity: 0.4; }
}`,
    htmlCode: `<div class="diamond-loader"></div>`,
    isNew: true,
  },
  {
    id: 'flower-loader',
    name: 'Flower Loader',
    category: 'loading',
    tags: ['loading', 'flower', 'petals'],
    difficulty: 'intermediate',
    description: 'A flower with rotating petals',
    cssCode: `.flower-loader {
  width: 40px;
  height: 40px;
  position: relative;
  animation: flowerSpin 3s linear infinite;
}
.flower-loader span {
  position: absolute;
  width: 10px;
  height: 16px;
  background: #10b981;
  border-radius: 50%;
  top: 2px;
  left: 50%;
  transform-origin: bottom center;
  transform: translateX(-50%);
  opacity: 0.7;
}
.flower-loader span:nth-child(2) { transform: translateX(-50%) rotate(60deg); opacity: 0.55; }
.flower-loader span:nth-child(3) { transform: translateX(-50%) rotate(120deg); opacity: 0.7; }
.flower-loader span:nth-child(4) { transform: translateX(-50%) rotate(180deg); opacity: 0.55; }
.flower-loader span:nth-child(5) { transform: translateX(-50%) rotate(240deg); opacity: 0.7; }
.flower-loader span:nth-child(6) { transform: translateX(-50%) rotate(300deg); opacity: 0.55; }
.flower-loader::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
@keyframes flowerSpin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="flower-loader"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'cloud-loader',
    name: 'Cloud Loader',
    category: 'loading',
    tags: ['loading', 'cloud', 'weather'],
    difficulty: 'intermediate',
    description: 'A cloud shape with a floating animation',
    cssCode: `.cloud-loader {
  width: 44px;
  height: 28px;
  background: #10b981;
  border-radius: 14px;
  position: relative;
  animation: cloudFloat 2s ease-in-out infinite;
}
.cloud-loader::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  top: -10px;
  left: 8px;
}
.cloud-loader::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  background: #10b981;
  border-radius: 50%;
  top: -5px;
  right: 8px;
}
@keyframes cloudFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}`,
    htmlCode: `<div class="cloud-loader"></div>`,
    isNew: true,
  },
  {
    id: 'bubble-loader',
    name: 'Bubble Loader',
    category: 'loading',
    tags: ['loading', 'bubble', 'float'],
    difficulty: 'intermediate',
    description: 'Bubbles floating upward with varying sizes',
    cssCode: `.bubble-loader {
  width: 40px;
  height: 44px;
  position: relative;
  overflow: hidden;
}
.bubble-loader span {
  position: absolute;
  border: 2px solid #10b981;
  border-radius: 50%;
  animation: bubbleUp 1.5s ease-in infinite;
}
.bubble-loader span:nth-child(1) { width: 10px; height: 10px; left: 6px; animation-delay: 0s; }
.bubble-loader span:nth-child(2) { width: 14px; height: 14px; left: 18px; animation-delay: 0.3s; }
.bubble-loader span:nth-child(3) { width: 8px; height: 8px; left: 30px; animation-delay: 0.6s; }
.bubble-loader span:nth-child(4) { width: 12px; height: 12px; left: 12px; animation-delay: 0.9s; }
@keyframes bubbleUp {
  0% { bottom: -16px; opacity: 0; }
  30% { opacity: 1; }
  100% { bottom: 48px; opacity: 0; }
}`,
    htmlCode: `<div class="bubble-loader"><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'crystal-loader',
    name: 'Crystal Loader',
    category: 'loading',
    tags: ['loading', 'crystal', 'gem'],
    difficulty: 'intermediate',
    description: 'A crystal shape with a shimmering rotation',
    cssCode: `.crystal-loader {
  width: 28px;
  height: 36px;
  position: relative;
  animation: crystalSpin 2s ease-in-out infinite;
}
.crystal-loader::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 18px solid rgba(16,185,129,0.6);
}
.crystal-loader::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 18px solid #10b981;
}
@keyframes crystalSpin {
  0%, 100% { transform: rotate(0deg) scale(0.8); opacity: 0.6; }
  50% { transform: rotate(180deg) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="crystal-loader"></div>`,
    isNew: true,
  },
  {
    id: 'ring-loader-2',
    name: 'Ring Loader 2',
    category: 'loading',
    tags: ['loading', 'ring', 'border'],
    difficulty: 'beginner',
    description: 'Dual-color spinning ring with gradient border',
    cssCode: `.ring-loader-2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #10b981;
  border-bottom-color: #10b981;
  animation: ring2Spin 0.8s linear infinite;
}
@keyframes ring2Spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="ring-loader-2"></div>`,
    isNew: true,
  },
  {
    id: 'multi-ring',
    name: 'Multi Ring',
    category: 'loading',
    tags: ['loading', 'rings', 'concentric'],
    difficulty: 'intermediate',
    description: 'Multiple concentric rings spinning at different speeds',
    cssCode: `.multi-ring {
  width: 44px;
  height: 44px;
  position: relative;
}
.multi-ring span {
  position: absolute;
  border: 2px solid transparent;
  border-top-color: #10b981;
  border-radius: 50%;
  animation: multiSpin linear infinite;
}
.multi-ring span:nth-child(1) {
  inset: 0;
  animation-duration: 1s;
}
.multi-ring span:nth-child(2) {
  inset: 6px;
  animation-duration: 0.8s;
  border-top-color: #3b82f6;
}
.multi-ring span:nth-child(3) {
  inset: 12px;
  animation-duration: 0.6s;
}
@keyframes multiSpin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="multi-ring"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'double-helix',
    name: 'Double Helix',
    category: 'loading',
    tags: ['loading', 'helix', 'dna'],
    difficulty: 'advanced',
    description: 'Two intertwined helical strands animating',
    cssCode: `.double-helix {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 40px;
}
.double-helix .pair {
  width: 8px;
  height: 40px;
  position: relative;
}
.double-helix .pair span {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  left: 1px;
  animation: helixMove 1.2s ease-in-out infinite;
}
.double-helix .pair span:nth-child(1) { background: #10b981; }
.double-helix .pair span:nth-child(2) { background: #3b82f6; }
.double-helix .pair:nth-child(2) span { animation-delay: 0.15s; }
.double-helix .pair:nth-child(3) span { animation-delay: 0.3s; }
.double-helix .pair:nth-child(4) span { animation-delay: 0.45s; }
.double-helix .pair:nth-child(5) span { animation-delay: 0.6s; }
@keyframes helixMove {
  0%, 100% { top: 0; }
  50% { top: 34px; }
}
.double-helix .pair span:nth-child(2) {
  animation-direction: reverse;
}`,
    htmlCode: `<div class="double-helix"><div class="pair"><span></span><span></span></div><div class="pair"><span></span><span></span></div><div class="pair"><span></span><span></span></div><div class="pair"><span></span><span></span></div><div class="pair"><span></span><span></span></div></div>`,
    isNew: true,
  },
  {
    id: 'triple-dot-loader',
    name: 'Triple Dot Loader',
    category: 'loading',
    tags: ['loading', 'dots', 'scale'],
    difficulty: 'beginner',
    description: 'Three dots scaling up in sequence',
    cssCode: `.triple-dot-loader {
  display: flex;
  gap: 8px;
  align-items: center;
}
.triple-dot-loader span {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: tripleScale 1.2s ease-in-out infinite;
}
.triple-dot-loader span:nth-child(2) { animation-delay: 0.2s; }
.triple-dot-loader span:nth-child(3) { animation-delay: 0.4s; }
@keyframes tripleScale {
  0%, 80%, 100% { transform: scale(0.4); opacity: 0.3; }
  40% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="triple-dot-loader"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'hexagon-spin',
    name: 'Hexagon Spin',
    category: 'loading',
    tags: ['loading', 'hexagon', 'spin'],
    difficulty: 'intermediate',
    description: 'A hexagon shape with a spinning border effect',
    cssCode: `.hexagon-spin {
  width: 40px;
  height: 34px;
  position: relative;
  animation: hexRotate 2s linear infinite;
}
.hexagon-spin::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b981;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  opacity: 0.3;
}
.hexagon-spin::after {
  content: '';
  position: absolute;
  inset: 3px;
  background: #0a0a1a;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
@keyframes hexRotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="hexagon-spin"></div>`,
    isNew: true,
  },
  {
    id: 'infinite-loop',
    name: 'Infinite Loop',
    category: 'loading',
    tags: ['loading', 'infinite', 'loop'],
    difficulty: 'advanced',
    description: 'A figure-eight infinite loop path animation',
    cssCode: `.infinite-loop {
  width: 44px;
  height: 30px;
  position: relative;
}
.infinite-loop span {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: infLoop 1.6s ease-in-out infinite;
}
.infinite-loop span:nth-child(2) { animation-delay: 0.4s; }
.infinite-loop span:nth-child(3) { animation-delay: 0.8s; }
@keyframes infLoop {
  0% { top: 50%; left: 50%; transform: translate(-50%,-50%); }
  25% { top: 0; left: 20%; }
  50% { top: 50%; left: 50%; transform: translate(-50%,-50%); }
  75% { top: 100%; left: 80%; transform: translateY(-100%); }
  100% { top: 50%; left: 50%; transform: translate(-50%,-50%); }
}`,
    htmlCode: `<div class="infinite-loop"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'loading-text',
    name: 'Loading Text',
    category: 'loading',
    tags: ['loading', 'text', 'typography'],
    difficulty: 'beginner',
    description: 'Animated text with dot progression',
    cssCode: `.loading-text {
  font-family: monospace;
  font-size: 14px;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 2px;
}
.loading-text span {
  animation: textPulse 1.5s ease-in-out infinite;
}
.loading-text span:nth-child(2) { animation-delay: 0.3s; }
.loading-text span:nth-child(3) { animation-delay: 0.6s; }
.loading-text span:nth-child(4) { animation-delay: 0.9s; }
@keyframes textPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="loading-text"><span>L</span><span>o</span><span>a</span><span>d</span></div>`,
    isNew: true,
  },
  {
    id: 'sand-loader',
    name: 'Sand Loader',
    category: 'loading',
    tags: ['loading', 'sand', 'hourglass'],
    difficulty: 'intermediate',
    description: 'Sand particles flowing downward',
    cssCode: `.sand-loader {
  width: 30px;
  height: 44px;
  position: relative;
}
.sand-loader::before {
  content: '';
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 18px solid rgba(16,185,129,0.4);
  animation: sandTop 3s ease-in-out infinite;
}
.sand-loader::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 0px solid rgba(16,185,129,0.6);
  animation: sandBottom 3s ease-in-out infinite;
}
@keyframes sandTop {
  0% { border-top-width: 18px; }
  100% { border-top-width: 2px; }
}
@keyframes sandBottom {
  0% { border-bottom-width: 0px; }
  100% { border-bottom-width: 18px; }
}`,
    htmlCode: `<div class="sand-loader"></div>`,
    isNew: true,
  },
  {
    id: 'orbit-loader-2',
    name: 'Orbit Loader 2',
    category: 'loading',
    tags: ['loading', 'orbit', 'planets'],
    difficulty: 'intermediate',
    description: 'Dots orbiting a central point on elliptical paths',
    cssCode: `.orbit-loader-2 {
  width: 44px;
  height: 44px;
  position: relative;
}
.orbit-loader-2 .center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.orbit-loader-2 .ring {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(16,185,129,0.2);
  border-radius: 50%;
}
.orbit-loader-2 .ring::after {
  content: '';
  position: absolute;
  top: -3px;
  left: 50%;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  transform: translateX(-50%);
}
.orbit-loader-2 .ring:nth-child(2) { animation: orbitSpin 1.5s linear infinite; }
.orbit-loader-2 .ring:nth-child(3) { inset: 6px; animation: orbitSpin 2.5s linear infinite reverse; }
@keyframes orbitSpin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="orbit-loader-2"><div class="center"></div><div class="ring"></div><div class="ring"></div></div>`,
    isNew: true,
  },
  {
    id: 'spinner-3d',
    name: 'Spinner 3D',
    category: 'loading',
    tags: ['loading', 'spinner', '3d'],
    difficulty: 'advanced',
    description: 'A 3D perspective spinner with depth effect',
    cssCode: `.spinner-3d {
  width: 40px;
  height: 40px;
  perspective: 80px;
}
.spinner-3d .inner {
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-left-color: #10b981;
  border-right-color: #3b82f6;
  border-radius: 50%;
  animation: spin3d 1s linear infinite;
}
.spinner-3d .inner-2 {
  width: 100%;
  height: 100%;
  position: relative;
  top: -100%;
  border: 4px solid transparent;
  border-top-color: #10b981;
  border-bottom-color: #3b82f6;
  border-radius: 50%;
  animation: spin3d 1.5s linear infinite reverse;
}
@keyframes spin3d {
  0% { transform: rotateX(35deg) rotateY(0deg); }
  100% { transform: rotateX(35deg) rotateY(360deg); }
}`,
    htmlCode: `<div class="spinner-3d"><div class="inner"></div><div class="inner-2"></div></div>`,
    isNew: true,
  },
];
