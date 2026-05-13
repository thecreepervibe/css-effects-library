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

export const effectsNewBatch17: CSSEffect[] = [
  // ==================== PROGRESS (20) ====================
  {
    id: 'progress-striped-animated',
    name: 'Striped Animated Progress',
    category: 'progress',
    tags: ['progress', 'striped', 'animated', 'bar', 'moving'],
    difficulty: 'beginner',
    description: 'A progress bar with animated diagonal stripes that move continuously',
    cssCode: `.progress-striped-animated {
  width: 200px; height: 18px;
  background: #1a1a2e; border-radius: 9px; overflow: hidden;
}
.progress-striped-animated-fill {
  width: 65%; height: 100%;
  background: repeating-linear-gradient(45deg, #10b981, #10b981 8px, #0d9668 8px, #0d9668 16px);
  background-size: 22.6px 100%;
  animation: stripe-move 0.8s linear infinite;
  border-radius: 9px;
}
@keyframes stripe-move { to { background-position: 22.6px 0; } }`,
    htmlCode: `<div class="progress-striped-animated"><div class="progress-striped-animated-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-gradient-fill',
    name: 'Gradient Fill Progress',
    category: 'progress',
    tags: ['progress', 'gradient', 'fill', 'colorful', 'smooth'],
    difficulty: 'beginner',
    description: 'A progress bar with a smooth gradient fill transitioning across colors',
    cssCode: `.progress-gradient-fill {
  width: 200px; height: 18px;
  background: #1a1a2e; border-radius: 9px; overflow: hidden;
}
.progress-gradient-fill-bar {
  width: 70%; height: 100%;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 9px;
  animation: grad-fill-pulse 2s ease-in-out infinite;
}
@keyframes grad-fill-pulse {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}`,
    htmlCode: `<div class="progress-gradient-fill"><div class="progress-gradient-fill-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-circular',
    name: 'Circular Progress',
    category: 'progress',
    tags: ['progress', 'circular', 'ring', 'spinner', 'arc'],
    difficulty: 'intermediate',
    description: 'A circular progress indicator with animated arc fill using conic gradient',
    cssCode: `.progress-circular {
  width: 80px; height: 80px; border-radius: 50%;
  background: conic-gradient(#10b981 0deg, #10b981 250deg, #1a1a2e 250deg);
  display: flex; align-items: center; justify-content: center;
  animation: circ-spin 3s linear infinite;
}
.progress-circular-inner {
  width: 58px; height: 58px; border-radius: 50%;
  background: #0a0a1a;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.7rem; font-weight: 700;
}
@keyframes circ-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="progress-circular"><div class="progress-circular-inner">70%</div></div>`,
    isNew: true,
  },
  {
    id: 'progress-semi-circle',
    name: 'Semi Circle Progress',
    category: 'progress',
    tags: ['progress', 'semi-circle', 'gauge', 'arc', 'meter'],
    difficulty: 'intermediate',
    description: 'A semi-circular gauge-style progress indicator',
    cssCode: `.progress-semi-circle {
  width: 100px; height: 50px; overflow: hidden; position: relative;
}
.progress-semi-circle-track {
  width: 100px; height: 100px; border-radius: 50%;
  background: conic-gradient(from 180deg, #10b981 0deg, #10b981 216deg, #1a1a2e 216deg);
  animation: semi-fill 2s ease-out forwards;
}
.progress-semi-circle-inner {
  position: absolute; top: 10px; left: 10px;
  width: 80px; height: 80px; border-radius: 50%;
  background: #0a0a1a;
}
@keyframes semi-fill { from { clip-path: inset(0 0 50% 0); } to { clip-path: inset(0 0 50% 0); } }`,
    htmlCode: `<div class="progress-semi-circle"><div class="progress-semi-circle-track"></div><div class="progress-semi-circle-inner"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-step',
    name: 'Step Progress',
    category: 'progress',
    tags: ['progress', 'steps', 'wizard', 'milestone', 'tracker'],
    difficulty: 'intermediate',
    description: 'A step-by-step progress tracker with connected nodes and active highlighting',
    cssCode: `.progress-step {
  display: flex; align-items: center; gap: 0;
}
.progress-step-node {
  width: 24px; height: 24px; border-radius: 50%;
  background: #1a1a2e; border: 2px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; color: #64748b; font-weight: 700;
  transition: all 0.3s;
}
.progress-step-node.active {
  background: #10b981; border-color: #10b981; color: #fff;
  box-shadow: 0 0 10px #10b98155;
}
.progress-step-line {
  width: 30px; height: 2px; background: #2a2a3e;
}
.progress-step-line.active { background: #10b981; }`,
    htmlCode: `<div class="progress-step"><div class="progress-step-node active">1</div><div class="progress-step-line active"></div><div class="progress-step-node active">2</div><div class="progress-step-line"></div><div class="progress-step-node">3</div></div>`,
    isNew: true,
  },
  {
    id: 'progress-wave',
    name: 'Wave Progress',
    category: 'progress',
    tags: ['progress', 'wave', 'liquid', 'fluid', 'animated'],
    difficulty: 'advanced',
    description: 'A wave-fill progress bar with a liquid wave animation effect',
    cssCode: `.progress-wave {
  width: 200px; height: 30px;
  background: #1a1a2e; border-radius: 6px; overflow: hidden; position: relative;
}
.progress-wave-fill {
  width: 100%; height: 100%;
  position: absolute; bottom: 0;
  background: linear-gradient(180deg, #10b98155, #10b981);
  animation: wave-level 2s ease-in-out infinite;
}
.progress-wave-fill::before {
  content: ''; position: absolute; top: -4px; left: -50%;
  width: 200%; height: 8px;
  background: radial-gradient(ellipse at 25% 50%, #10b981 30%, transparent 31%) 0 0 / 40px 8px repeat-x;
  animation: wave-scroll 1s linear infinite;
}
@keyframes wave-scroll { to { transform: translateX(40px); } }
@keyframes wave-level { 0%, 100% { height: 65%; } 50% { height: 70%; } }`,
    htmlCode: `<div class="progress-wave"><div class="progress-wave-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-pulse',
    name: 'Pulse Progress',
    category: 'progress',
    tags: ['progress', 'pulse', 'breathing', 'glow', 'animated'],
    difficulty: 'beginner',
    description: 'A progress bar with a pulsing glow effect on the fill area',
    cssCode: `.progress-pulse {
  width: 200px; height: 16px;
  background: #1a1a2e; border-radius: 8px; overflow: hidden;
}
.progress-pulse-fill {
  width: 60%; height: 100%;
  background: #10b981; border-radius: 8px;
  animation: pulse-glow-bar 1.5s ease-in-out infinite;
}
@keyframes pulse-glow-bar {
  0%, 100% { box-shadow: 0 0 4px #10b98144; }
  50% { box-shadow: 0 0 14px #10b98188, 0 0 28px #10b98133; }
}`,
    htmlCode: `<div class="progress-pulse"><div class="progress-pulse-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-glow',
    name: 'Glow Progress',
    category: 'progress',
    tags: ['progress', 'glow', 'neon', 'bright', 'light'],
    difficulty: 'intermediate',
    description: 'A progress bar with a bright neon glow effect trailing the fill edge',
    cssCode: `.progress-glow {
  width: 200px; height: 14px;
  background: #1a1a2e; border-radius: 7px; overflow: visible; position: relative;
}
.progress-glow-fill {
  width: 75%; height: 100%;
  background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 7px; position: relative;
}
.progress-glow-fill::after {
  content: ''; position: absolute;
  right: -4px; top: -6px;
  width: 10px; height: 26px;
  background: radial-gradient(ellipse, #10b981cc, transparent);
  border-radius: 50%;
  animation: glow-flicker 0.8s ease-in-out infinite alternate;
}
@keyframes glow-flicker { 0% { opacity: 0.6; } 100% { opacity: 1; } }`,
    htmlCode: `<div class="progress-glow"><div class="progress-glow-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-neon',
    name: 'Neon Progress',
    category: 'progress',
    tags: ['progress', 'neon', 'glow', 'dark', 'vibrant'],
    difficulty: 'intermediate',
    description: 'A neon-styled progress bar with bright glowing edges on dark background',
    cssCode: `.progress-neon {
  width: 200px; height: 6px;
  background: #0a0a1a; border-radius: 3px;
  box-shadow: 0 0 4px #10b98133, inset 0 0 4px #000;
}
.progress-neon-fill {
  width: 55%; height: 100%;
  background: #10b981; border-radius: 3px;
  box-shadow: 0 0 8px #10b981, 0 0 16px #10b98166, 0 0 32px #10b98133;
  animation: neon-bar-pulse 1.2s ease-in-out infinite alternate;
}
@keyframes neon-bar-pulse {
  0% { box-shadow: 0 0 6px #10b981, 0 0 12px #10b98155; }
  100% { box-shadow: 0 0 12px #10b981, 0 0 24px #10b98177, 0 0 40px #10b98122; }
}`,
    htmlCode: `<div class="progress-neon"><div class="progress-neon-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-loading',
    name: 'Loading Progress',
    category: 'progress',
    tags: ['progress', 'loading', 'indeterminate', 'bar', 'animated'],
    difficulty: 'beginner',
    description: 'An indeterminate loading progress bar with a sliding fill animation',
    cssCode: `.progress-loading {
  width: 200px; height: 4px;
  background: #1a1a2e; border-radius: 2px; overflow: hidden;
}
.progress-loading-bar {
  width: 40%; height: 100%;
  background: #10b981; border-radius: 2px;
  animation: load-slide 1.5s ease-in-out infinite;
}
@keyframes load-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}`,
    htmlCode: `<div class="progress-loading"><div class="progress-loading-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-determinate',
    name: 'Determinate Progress',
    category: 'progress',
    tags: ['progress', 'determinate', 'bar', 'fill', 'percentage'],
    difficulty: 'beginner',
    description: 'A simple determinate progress bar that fills to a specific percentage',
    cssCode: `.progress-determinate {
  width: 200px; height: 12px;
  background: #1a1a2e; border-radius: 6px; overflow: hidden;
  position: relative;
}
.progress-determinate-fill {
  height: 100%;
  background: #10b981; border-radius: 6px;
  animation: det-fill 2s ease-out forwards;
}
@keyframes det-fill { from { width: 0; } to { width: 80%; } }`,
    htmlCode: `<div class="progress-determinate"><div class="progress-determinate-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-indeterminate',
    name: 'Indeterminate Progress',
    category: 'progress',
    tags: ['progress', 'indeterminate', 'loading', 'animated', 'unknown'],
    difficulty: 'intermediate',
    description: 'An indeterminate progress bar with two sliding bars moving in opposite directions',
    cssCode: `.progress-indeterminate {
  width: 200px; height: 6px;
  background: #1a1a2e; border-radius: 3px; overflow: hidden;
  position: relative;
}
.progress-indeterminate-bar {
  position: absolute; height: 100%;
  background: #10b981; border-radius: 3px;
}
.progress-indeterminate-bar:nth-child(1) {
  width: 30%; animation: indet-slide 1.8s ease-in-out infinite;
}
.progress-indeterminate-bar:nth-child(2) {
  width: 20%; animation: indet-slide 1.8s ease-in-out infinite 0.6s;
}
@keyframes indet-slide {
  0% { left: -30%; } 50% { left: 50%; } 100% { left: 100%; }
}`,
    htmlCode: `<div class="progress-indeterminate"><div class="progress-indeterminate-bar"></div><div class="progress-indeterminate-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-multi-color',
    name: 'Multi Color Progress',
    category: 'progress',
    tags: ['progress', 'multi-color', 'segments', 'colorful', 'bar'],
    difficulty: 'intermediate',
    description: 'A progress bar with multiple color segments representing different sections',
    cssCode: `.progress-multi-color {
  width: 200px; height: 16px;
  background: #1a1a2e; border-radius: 8px; overflow: hidden;
  display: flex;
}
.progress-multi-color-seg {
  height: 100%; transition: width 0.3s;
}
.progress-multi-color-seg:nth-child(1) { width: 30%; background: #10b981; }
.progress-multi-color-seg:nth-child(2) { width: 25%; background: #3b82f6; }
.progress-multi-color-seg:nth-child(3) { width: 20%; background: #8b5cf6; }
.progress-multi-color-seg:nth-child(4) { width: 15%; background: #f59e0b; }`,
    htmlCode: `<div class="progress-multi-color"><div class="progress-multi-color-seg"></div><div class="progress-multi-color-seg"></div><div class="progress-multi-color-seg"></div><div class="progress-multi-color-seg"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-rainbow',
    name: 'Rainbow Progress',
    category: 'progress',
    tags: ['progress', 'rainbow', 'colorful', 'gradient', 'animated'],
    difficulty: 'intermediate',
    description: 'A rainbow gradient progress bar with animated color shifting',
    cssCode: `.progress-rainbow {
  width: 200px; height: 14px;
  background: #1a1a2e; border-radius: 7px; overflow: hidden;
}
.progress-rainbow-fill {
  width: 70%; height: 100%; border-radius: 7px;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 100%;
  animation: rainbow-shift 2s linear infinite;
}
@keyframes rainbow-shift { to { background-position: 200% 0; } }`,
    htmlCode: `<div class="progress-rainbow"><div class="progress-rainbow-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-thin-line',
    name: 'Thin Line Progress',
    category: 'progress',
    tags: ['progress', 'thin', 'minimal', 'slim', 'line'],
    difficulty: 'beginner',
    description: 'An ultra-thin minimal progress line with a subtle glow',
    cssCode: `.progress-thin-line {
  width: 200px; height: 2px;
  background: #1a1a2e; position: relative;
}
.progress-thin-line-fill {
  height: 100%;
  background: #10b981;
  box-shadow: 0 0 6px #10b98166;
  animation: thin-grow 2s ease-out forwards;
}
@keyframes thin-grow { from { width: 0; } to { width: 65%; } }`,
    htmlCode: `<div class="progress-thin-line"><div class="progress-thin-line-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-thick-bar',
    name: 'Thick Bar Progress',
    category: 'progress',
    tags: ['progress', 'thick', 'bold', 'chunky', 'bar'],
    difficulty: 'beginner',
    description: 'A thick bold progress bar with rounded ends and percentage label',
    cssCode: `.progress-thick-bar {
  width: 200px; height: 32px;
  background: #1a1a2e; border-radius: 16px; overflow: hidden;
  position: relative;
}
.progress-thick-bar-fill {
  width: 55%; height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: flex-end;
  padding-right: 10px;
  font-size: 0.65rem; font-weight: 700; color: #fff;
}`,
    htmlCode: `<div class="progress-thick-bar"><div class="progress-thick-bar-fill">55%</div></div>`,
    isNew: true,
  },
  {
    id: 'progress-rounded',
    name: 'Rounded Progress',
    category: 'progress',
    tags: ['progress', 'rounded', 'pill', 'smooth', 'bar'],
    difficulty: 'beginner',
    description: 'A pill-shaped rounded progress bar with smooth fill animation',
    cssCode: `.progress-rounded {
  width: 200px; height: 20px;
  background: #1a1a2e; border-radius: 10px; overflow: hidden;
}
.progress-rounded-fill {
  height: 100%; border-radius: 10px;
  background: #10b981;
  animation: round-fill 1.5s ease-out forwards;
}
@keyframes round-fill { from { width: 0; } to { width: 72%; } }`,
    htmlCode: `<div class="progress-rounded"><div class="progress-rounded-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-square',
    name: 'Square Progress',
    category: 'progress',
    tags: ['progress', 'square', 'angular', 'sharp', 'geometric'],
    difficulty: 'beginner',
    description: 'A square-edged progress bar with no border radius for an angular look',
    cssCode: `.progress-square {
  width: 200px; height: 16px;
  background: #1a1a2e; border: 1px solid #2a2a3e;
}
.progress-square-fill {
  height: 100%;
  background: #10b981;
  animation: sq-fill 1.8s ease-out forwards;
}
@keyframes sq-fill { from { width: 0; } to { width: 60%; } }`,
    htmlCode: `<div class="progress-square"><div class="progress-square-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-diamond-shape',
    name: 'Diamond Shape Progress',
    category: 'progress',
    tags: ['progress', 'diamond', 'shape', 'geometric', 'creative'],
    difficulty: 'advanced',
    description: 'A progress indicator using diamond shapes that fill progressively',
    cssCode: `.progress-diamond-shape {
  display: flex; align-items: center; gap: 4px;
}
.progress-diamond {
  width: 16px; height: 16px;
  background: #1a1a2e;
  transform: rotate(45deg);
  border: 2px solid #2a2a3e;
  transition: all 0.3s;
}
.progress-diamond.filled {
  background: #10b981;
  border-color: #10b981;
  box-shadow: 0 0 8px #10b98144;
}
.progress-diamond.filled:nth-child(1) { animation: diam-pop 0.4s 0.1s both; }
.progress-diamond.filled:nth-child(2) { animation: diam-pop 0.4s 0.2s both; }
.progress-diamond.filled:nth-child(3) { animation: diam-pop 0.4s 0.3s both; }
.progress-diamond.filled:nth-child(4) { animation: diam-pop 0.4s 0.4s both; }
@keyframes diam-pop { 0% { transform: rotate(45deg) scale(0); } 70% { transform: rotate(45deg) scale(1.2); } 100% { transform: rotate(45deg) scale(1); } }`,
    htmlCode: `<div class="progress-diamond-shape"><div class="progress-diamond filled"></div><div class="progress-diamond filled"></div><div class="progress-diamond filled"></div><div class="progress-diamond filled"></div><div class="progress-diamond"></div><div class="progress-diamond"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-star-shape',
    name: 'Star Shape Progress',
    category: 'progress',
    tags: ['progress', 'star', 'shape', 'rating', 'creative'],
    difficulty: 'advanced',
    description: 'A progress indicator using star shapes that light up progressively',
    cssCode: `.progress-star-shape {
  display: flex; gap: 6px;
}
.progress-star {
  width: 22px; height: 22px;
  background: #1a1a2e;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  transition: all 0.3s;
}
.progress-star.lit {
  background: #10b981;
  filter: drop-shadow(0 0 4px #10b98166);
}
.progress-star.lit:nth-child(1) { animation: star-in 0.3s 0.1s both; }
.progress-star.lit:nth-child(2) { animation: star-in 0.3s 0.2s both; }
.progress-star.lit:nth-child(3) { animation: star-in 0.3s 0.3s both; }
.progress-star.lit:nth-child(4) { animation: star-in 0.3s 0.4s both; }
@keyframes star-in { 0% { transform: scale(0) rotate(-90deg); } 60% { transform: scale(1.3) rotate(10deg); } 100% { transform: scale(1) rotate(0); } }`,
    htmlCode: `<div class="progress-star-shape"><div class="progress-star lit"></div><div class="progress-star lit"></div><div class="progress-star lit"></div><div class="progress-star lit"></div><div class="progress-star"></div></div>`,
    isNew: true,
  },

  // ==================== NOTIFICATIONS (20) ====================
  {
    id: 'notif-slide-in',
    name: 'Slide In Notification',
    category: 'notifications',
    tags: ['notification', 'slide', 'entrance', 'animated', 'right'],
    difficulty: 'beginner',
    description: 'A notification that slides in from the right side',
    cssCode: `.notif-slide-in {
  padding: 12px 18px;
  background: #1a1a2e;
  border-left: 3px solid #10b981;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  animation: slide-in-right 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  box-shadow: 0 4px 12px #00000044;
}
@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-slide-in">Slide-in notification message</div>`,
    isNew: true,
  },
  {
    id: 'notif-fade-in',
    name: 'Fade In Notification',
    category: 'notifications',
    tags: ['notification', 'fade', 'entrance', 'simple', 'smooth'],
    difficulty: 'beginner',
    description: 'A notification that fades in with a gentle opacity transition',
    cssCode: `.notif-fade-in {
  padding: 12px 18px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  animation: fade-in-notif 0.6s ease both;
}
@keyframes fade-in-notif {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="notif-fade-in">Fade-in notification</div>`,
    isNew: true,
  },
  {
    id: 'notif-bounce-in',
    name: 'Bounce In Notification',
    category: 'notifications',
    tags: ['notification', 'bounce', 'entrance', 'playful', 'spring'],
    difficulty: 'intermediate',
    description: 'A notification that bounces into view with a spring-like overshoot',
    cssCode: `.notif-bounce-in {
  padding: 12px 18px;
  background: #1a1a2e;
  border-left: 3px solid #10b981;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  animation: bounce-in-notif 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes bounce-in-notif {
  0% { transform: scale(0.3) translateY(-20px); opacity: 0; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-bounce-in">Bounce notification!</div>`,
    isNew: true,
  },
  {
    id: 'notif-flip-in',
    name: 'Flip In Notification',
    category: 'notifications',
    tags: ['notification', 'flip', '3d', 'entrance', 'rotate'],
    difficulty: 'intermediate',
    description: 'A notification that flips in from a 3D rotation',
    cssCode: `.notif-flip-in {
  padding: 12px 18px;
  background: #1a1a2e;
  border: 1px solid #10b98144;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  animation: flip-in-notif 0.6s ease both;
  perspective: 500px;
}
@keyframes flip-in-notif {
  from { transform: rotateX(-90deg); opacity: 0; }
  60% { transform: rotateX(10deg); }
  to { transform: rotateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-flip-in">Flip notification</div>`,
    isNew: true,
  },
  {
    id: 'notif-scale-in',
    name: 'Scale In Notification',
    category: 'notifications',
    tags: ['notification', 'scale', 'zoom', 'entrance', 'grow'],
    difficulty: 'beginner',
    description: 'A notification that scales up from zero to full size',
    cssCode: `.notif-scale-in {
  padding: 12px 18px;
  background: #1a1a2e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  animation: scale-in-notif 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
  box-shadow: 0 0 12px #10b98122;
}
@keyframes scale-in-notif {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="notif-scale-in">Scale notification</div>`,
    isNew: true,
  },
  {
    id: 'notif-toast',
    name: 'Toast Notification',
    category: 'notifications',
    tags: ['notification', 'toast', 'bottom', 'slide', 'auto'],
    difficulty: 'intermediate',
    description: 'A toast-style notification that slides up from the bottom',
    cssCode: `.notif-toast {
  padding: 10px 16px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  animation: toast-rise 0.4s ease both;
  box-shadow: 0 4px 16px #10b98144;
}
@keyframes toast-rise {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-toast">Action completed</div>`,
    isNew: true,
  },
  {
    id: 'notif-alert',
    name: 'Alert Notification',
    category: 'notifications',
    tags: ['notification', 'alert', 'important', 'urgent', 'attention'],
    difficulty: 'intermediate',
    description: 'An alert notification with a pulsing border to draw attention',
    cssCode: `.notif-alert {
  padding: 12px 18px;
  background: #1a1a2e;
  border: 2px solid #f59e0b;
  border-radius: 8px;
  color: #f59e0b;
  font-size: 0.75rem;
  font-weight: 600;
  animation: alert-pulse-border 1.5s ease-in-out infinite;
}
@keyframes alert-pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 #f59e0b44; }
  50% { box-shadow: 0 0 0 6px #f59e0b00; }
}`,
    htmlCode: `<div class="notif-alert">Alert: Check this now!</div>`,
    isNew: true,
  },
  {
    id: 'notif-success',
    name: 'Success Notification',
    category: 'notifications',
    tags: ['notification', 'success', 'green', 'confirm', 'check'],
    difficulty: 'beginner',
    description: 'A success notification with a green accent and check icon',
    cssCode: `.notif-success {
  padding: 10px 16px;
  background: #0a2a1a;
  border: 1px solid #10b98144;
  border-radius: 6px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex; align-items: center; gap: 8px;
  animation: success-slide 0.4s ease both;
}
.notif-success::before {
  content: '✓';
  width: 18px; height: 18px;
  background: #10b981; color: #0a0a1a;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem; font-weight: 800;
  flex-shrink: 0;
}
@keyframes success-slide {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-success">Saved successfully</div>`,
    isNew: true,
  },
  {
    id: 'notif-error',
    name: 'Error Notification',
    category: 'notifications',
    tags: ['notification', 'error', 'danger', 'red', 'alert'],
    difficulty: 'intermediate',
    description: 'An error notification with red accent and shake animation',
    cssCode: `.notif-error {
  padding: 10px 16px;
  background: #1a0a0a;
  border: 1px solid #ef444444;
  border-radius: 6px;
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 600;
  animation: error-shake-in 0.5s ease both;
}
@keyframes error-shake-in {
  0% { transform: translateX(-30px); opacity: 0; }
  30% { transform: translateX(8px); }
  50% { transform: translateX(-4px); }
  70% { transform: translateX(2px); }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-error">Something went wrong</div>`,
    isNew: true,
  },
  {
    id: 'notif-warning',
    name: 'Warning Notification',
    category: 'notifications',
    tags: ['notification', 'warning', 'amber', 'caution', 'attention'],
    difficulty: 'beginner',
    description: 'A warning notification with amber accent and subtle glow',
    cssCode: `.notif-warning {
  padding: 10px 16px;
  background: #1a1a0a;
  border-left: 3px solid #f59e0b;
  border-radius: 6px;
  color: #f59e0b;
  font-size: 0.75rem;
  font-weight: 600;
  animation: warn-glow 2s ease-in-out infinite;
}
@keyframes warn-glow {
  0%, 100% { box-shadow: none; }
  50% { box-shadow: 0 0 10px #f59e0b22; }
}`,
    htmlCode: `<div class="notif-warning">Proceed with caution</div>`,
    isNew: true,
  },
  {
    id: 'notif-info',
    name: 'Info Notification',
    category: 'notifications',
    tags: ['notification', 'info', 'blue', 'notice', 'message'],
    difficulty: 'beginner',
    description: 'An info notification with blue accent and smooth entrance',
    cssCode: `.notif-info {
  padding: 10px 16px;
  background: #0a0a2a;
  border-left: 3px solid #3b82f6;
  border-radius: 6px;
  color: #93c5fd;
  font-size: 0.75rem;
  animation: info-appear 0.4s ease both;
}
@keyframes info-appear {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="notif-info">For your information</div>`,
    isNew: true,
  },
  {
    id: 'notif-badge-pulse',
    name: 'Badge Pulse Notification',
    category: 'notifications',
    tags: ['notification', 'badge', 'pulse', 'count', 'indicator'],
    difficulty: 'intermediate',
    description: 'A notification badge with a pulsing animation to draw attention',
    cssCode: `.notif-badge-pulse {
  position: relative; display: inline-flex;
  padding: 8px 14px;
  background: #1a1a2e; border-radius: 6px;
  color: #e2e8f0; font-size: 0.75rem;
}
.notif-badge-pulse::after {
  content: '3';
  position: absolute; top: -6px; right: -6px;
  width: 18px; height: 18px;
  background: #10b981; color: #fff;
  border-radius: 50%;
  font-size: 0.55rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  animation: badge-pulse-anim 1.5s ease-in-out infinite;
}
@keyframes badge-pulse-anim {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 #10b98155; }
  50% { transform: scale(1.15); box-shadow: 0 0 0 8px #10b98100; }
}`,
    htmlCode: `<div class="notif-badge-pulse">Messages</div>`,
    isNew: true,
  },
  {
    id: 'notif-badge-bounce',
    name: 'Badge Bounce Notification',
    category: 'notifications',
    tags: ['notification', 'badge', 'bounce', 'count', 'playful'],
    difficulty: 'intermediate',
    description: 'A notification badge with a bouncy entrance animation',
    cssCode: `.notif-badge-bounce {
  position: relative; display: inline-flex;
  padding: 8px 14px;
  background: #1a1a2e; border-radius: 6px;
  color: #e2e8f0; font-size: 0.75rem;
}
.notif-badge-bounce::after {
  content: '5';
  position: absolute; top: -8px; right: -8px;
  width: 20px; height: 20px;
  background: #ef4444; color: #fff;
  border-radius: 50%;
  font-size: 0.55rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  animation: badge-bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes badge-bounce-in {
  0% { transform: scale(0); }
  60% { transform: scale(1.4); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="notif-badge-bounce">Updates</div>`,
    isNew: true,
  },
  {
    id: 'notif-badge-glow',
    name: 'Badge Glow Notification',
    category: 'notifications',
    tags: ['notification', 'badge', 'glow', 'neon', 'bright'],
    difficulty: 'intermediate',
    description: 'A notification badge with a glowing neon effect',
    cssCode: `.notif-badge-glow {
  position: relative; display: inline-flex;
  padding: 8px 14px;
  background: #1a1a2e; border-radius: 6px;
  color: #e2e8f0; font-size: 0.75rem;
}
.notif-badge-glow::after {
  content: '2';
  position: absolute; top: -6px; right: -6px;
  width: 18px; height: 18px;
  background: #10b981; color: #fff;
  border-radius: 50%;
  font-size: 0.55rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 6px #10b981, 0 0 12px #10b98166;
  animation: badge-glow-pulse 1.2s ease-in-out infinite alternate;
}
@keyframes badge-glow-pulse {
  0% { box-shadow: 0 0 4px #10b981, 0 0 8px #10b98144; }
  100% { box-shadow: 0 0 8px #10b981, 0 0 20px #10b98188, 0 0 30px #10b98133; }
}`,
    htmlCode: `<div class="notif-badge-glow">Alerts</div>`,
    isNew: true,
  },
  {
    id: 'notif-badge-shake',
    name: 'Badge Shake Notification',
    category: 'notifications',
    tags: ['notification', 'badge', 'shake', 'attention', 'urgent'],
    difficulty: 'intermediate',
    description: 'A notification badge that shakes to draw immediate attention',
    cssCode: `.notif-badge-shake {
  position: relative; display: inline-flex;
  padding: 8px 14px;
  background: #1a1a2e; border-radius: 6px;
  color: #e2e8f0; font-size: 0.75rem;
}
.notif-badge-shake::after {
  content: '!';
  position: absolute; top: -6px; right: -6px;
  width: 18px; height: 18px;
  background: #ef4444; color: #fff;
  border-radius: 50%;
  font-size: 0.6rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  animation: badge-shake-anim 0.4s ease-in-out 0.5s 3;
}
@keyframes badge-shake-anim {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px) rotate(-5deg); }
  75% { transform: translateX(3px) rotate(5deg); }
}`,
    htmlCode: `<div class="notif-badge-shake">Urgent</div>`,
    isNew: true,
  },
  {
    id: 'notif-badge-pop',
    name: 'Badge Pop Notification',
    category: 'notifications',
    tags: ['notification', 'badge', 'pop', 'appear', 'count'],
    difficulty: 'beginner',
    description: 'A notification badge that pops into existence with a scale overshoot',
    cssCode: `.notif-badge-pop {
  position: relative; display: inline-flex;
  padding: 8px 14px;
  background: #1a1a2e; border-radius: 6px;
  color: #e2e8f0; font-size: 0.75rem;
}
.notif-badge-pop::after {
  content: '8';
  position: absolute; top: -7px; right: -7px;
  width: 20px; height: 20px;
  background: #10b981; color: #fff;
  border-radius: 50%;
  font-size: 0.55rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  animation: badge-pop-anim 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes badge-pop-anim {
  0% { transform: scale(0); }
  70% { transform: scale(1.3); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="notif-badge-pop">Inbox</div>`,
    isNew: true,
  },
  {
    id: 'notif-stack',
    name: 'Stack Notification',
    category: 'notifications',
    tags: ['notification', 'stack', 'multiple', 'layered', 'overlap'],
    difficulty: 'advanced',
    description: 'Stacked notifications with a layered depth effect',
    cssCode: `.notif-stack {
  position: relative;
}
.notif-stack-item {
  padding: 10px 16px;
  background: #1a1a2e;
  border-left: 3px solid #10b981;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.7rem;
  animation: stack-in 0.4s ease both;
}
.notif-stack-item:nth-child(1) { z-index: 3; position: relative; }
.notif-stack-item:nth-child(2) {
  z-index: 2; margin-top: -4px;
  transform: scale(0.96) translateX(4px);
  opacity: 0.7; animation-delay: 0.1s;
}
.notif-stack-item:nth-child(3) {
  z-index: 1; margin-top: -4px;
  transform: scale(0.92) translateX(8px);
  opacity: 0.4; animation-delay: 0.2s;
}
@keyframes stack-in { from { transform: translateX(100%); opacity: 0; } }`,
    htmlCode: `<div class="notif-stack"><div class="notif-stack-item">New message</div><div class="notif-stack-item">File uploaded</div><div class="notif-stack-item">Task done</div></div>`,
    isNew: true,
  },
  {
    id: 'notif-dismiss',
    name: 'Dismiss Notification',
    category: 'notifications',
    tags: ['notification', 'dismiss', 'close', 'exit', 'fade'],
    difficulty: 'intermediate',
    description: 'A notification with a dismiss animation that shrinks and fades out',
    cssCode: `.notif-dismiss {
  padding: 10px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  display: flex; align-items: center; gap: 8px;
  animation: dismiss-out 2s 1s ease both;
}
.notif-dismiss-close {
  width: 16px; height: 16px;
  background: #2a2a3e; border-radius: 50%;
  color: #64748b; font-size: 0.55rem;
  display: flex; align-items: center; justify-content: center;
  margin-left: auto; cursor: pointer;
}
@keyframes dismiss-out {
  0%, 80% { transform: scale(1); opacity: 1; max-height: 50px; }
  100% { transform: scale(0.8); opacity: 0; max-height: 0; padding: 0; margin: 0; }
}`,
    htmlCode: `<div class="notif-dismiss">Auto-dismiss message<span class="notif-dismiss-close">✕</span></div>`,
    isNew: true,
  },
  {
    id: 'notif-expand',
    name: 'Expand Notification',
    category: 'notifications',
    tags: ['notification', 'expand', 'details', 'reveal', 'interactive'],
    difficulty: 'advanced',
    description: 'A notification that expands on hover to reveal additional details',
    cssCode: `.notif-expand {
  padding: 10px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.75rem;
  cursor: pointer;
  max-height: 20px;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s, border-color 0.3s;
}
.notif-expand:hover {
  max-height: 80px;
  padding: 14px 16px;
  border-color: #10b98144;
}
.notif-expand-detail {
  margin-top: 8px;
  font-size: 0.65rem;
  color: #64748b;
}`,
    htmlCode: `<div class="notif-expand">New update available<div class="notif-expand-detail">Version 2.1 includes performance improvements and bug fixes</div></div>`,
    isNew: true,
  },
  {
    id: 'notif-timer-countdown',
    name: 'Timer Countdown Notification',
    category: 'notifications',
    tags: ['notification', 'timer', 'countdown', 'auto-dismiss', 'progress'],
    difficulty: 'advanced',
    description: 'A notification with a countdown timer bar that auto-dismisses',
    cssCode: `.notif-timer-countdown {
  position: relative;
  padding: 10px 16px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.75rem;
  overflow: hidden;
  animation: notif-in 0.3s ease both;
}
.notif-timer-countdown::after {
  content: '';
  position: absolute; bottom: 0; left: 0;
  height: 3px;
  background: #10b981;
  animation: timer-bar 4s linear forwards;
}
@keyframes notif-in { from { transform: translateY(-10px); opacity: 0; } }
@keyframes timer-bar { from { width: 100%; } to { width: 0; } }`,
    htmlCode: `<div class="notif-timer-countdown">This will auto-dismiss</div>`,
    isNew: true,
  },

  // ==================== AVATARS (20) ====================
  {
    id: 'avatar-glow-ring-2',
    name: 'Glow Ring Avatar',
    category: 'avatars',
    tags: ['avatar', 'glow', 'ring', 'emerald', 'bright'],
    difficulty: 'beginner',
    description: 'An avatar with a glowing emerald ring border',
    cssCode: `.avatar-glow-ring-2 {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  border: 3px solid #10b981;
  box-shadow: 0 0 10px #10b98166, 0 0 20px #10b98133;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 1.1rem;
  animation: glow-ring-pulse 2s ease-in-out infinite alternate;
}
@keyframes glow-ring-pulse {
  0% { box-shadow: 0 0 6px #10b98144, 0 0 12px #10b98122; }
  100% { box-shadow: 0 0 12px #10b98188, 0 0 24px #10b98144; }
}`,
    htmlCode: `<div class="avatar-glow-ring-2">ZA</div>`,
    isNew: true,
  },
  {
    id: 'avatar-stack-overlap',
    name: 'Stack Overlap Avatar',
    category: 'avatars',
    tags: ['avatar', 'stack', 'overlap', 'group', 'team'],
    difficulty: 'intermediate',
    description: 'Overlapping stacked avatars showing a group of users',
    cssCode: `.avatar-stack-overlap {
  display: flex;
}
.avatar-stack-item {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; font-weight: 700;
  margin-left: -10px;
  transition: transform 0.2s, z-index 0s;
}
.avatar-stack-item:first-child { margin-left: 0; }
.avatar-stack-item:nth-child(1) { background: #10b981; color: #fff; z-index: 4; }
.avatar-stack-item:nth-child(2) { background: #3b82f6; color: #fff; z-index: 3; }
.avatar-stack-item:nth-child(3) { background: #8b5cf6; color: #fff; z-index: 2; }
.avatar-stack-item:nth-child(4) { background: #1a1a2e; color: #64748b; z-index: 1; }
.avatar-stack-item:hover { transform: translateY(-4px); z-index: 5; }`,
    htmlCode: `<div class="avatar-stack-overlap"><div class="avatar-stack-item">A</div><div class="avatar-stack-item">B</div><div class="avatar-stack-item">C</div><div class="avatar-stack-item">+3</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-pulse-status',
    name: 'Pulse Status Avatar',
    category: 'avatars',
    tags: ['avatar', 'pulse', 'status', 'online', 'indicator'],
    difficulty: 'intermediate',
    description: 'An avatar with a pulsing online status indicator dot',
    cssCode: `.avatar-pulse-status {
  position: relative;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-weight: 700; font-size: 1rem;
}
.avatar-pulse-status::after {
  content: '';
  position: absolute; bottom: 2px; right: 2px;
  width: 14px; height: 14px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  animation: status-pulse 1.5s ease-in-out infinite;
}
@keyframes status-pulse {
  0%, 100% { box-shadow: 0 0 0 0 #10b98166; }
  50% { box-shadow: 0 0 0 5px #10b98100; }
}`,
    htmlCode: `<div class="avatar-pulse-status">ON</div>`,
    isNew: true,
  },
  {
    id: 'avatar-border-animation',
    name: 'Border Animation Avatar',
    category: 'avatars',
    tags: ['avatar', 'border', 'animated', 'rotation', 'gradient'],
    difficulty: 'advanced',
    description: 'An avatar with an animated rotating gradient border',
    cssCode: `.avatar-border-animation {
  width: 64px; height: 64px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(#10b981, #3b82f6, #8b5cf6, #10b981);
  animation: border-spin-avatar 3s linear infinite;
}
.avatar-border-animation-inner {
  width: 100%; height: 100%;
  border-radius: 50%;
  background: #0a0a1a;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 1rem;
}
@keyframes border-spin-avatar { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="avatar-border-animation"><div class="avatar-border-animation-inner">AB</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-status-dot',
    name: 'Status Dot Avatar',
    category: 'avatars',
    tags: ['avatar', 'status', 'dot', 'online', 'indicator'],
    difficulty: 'beginner',
    description: 'An avatar with a colored status dot indicator',
    cssCode: `.avatar-status-dot {
  position: relative;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2a2a3e, #1a1a2e);
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-weight: 700; font-size: 0.9rem;
}
.avatar-status-dot::after {
  content: '';
  position: absolute; bottom: 0; right: 0;
  width: 12px; height: 12px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
}`,
    htmlCode: `<div class="avatar-status-dot">SD</div>`,
    isNew: true,
  },
  {
    id: 'avatar-flip-reveal',
    name: 'Flip Reveal Avatar',
    category: 'avatars',
    tags: ['avatar', 'flip', '3d', 'reveal', 'hover'],
    difficulty: 'advanced',
    description: 'An avatar that flips on hover to reveal the back side with info',
    cssCode: `.avatar-flip-reveal {
  perspective: 400px;
  width: 60px; height: 60px;
}
.avatar-flip-inner {
  width: 100%; height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.avatar-flip-reveal:hover .avatar-flip-inner { transform: rotateY(180deg); }
.avatar-flip-front, .avatar-flip-back {
  position: absolute; inset: 0;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  backface-visibility: hidden;
  font-weight: 700; font-size: 0.9rem;
}
.avatar-flip-front { background: #1a1a2e; color: #10b981; }
.avatar-flip-back { background: #10b981; color: #fff; transform: rotateY(180deg); font-size: 0.6rem; }`,
    htmlCode: `<div class="avatar-flip-reveal"><div class="avatar-flip-inner"><div class="avatar-flip-front">FR</div><div class="avatar-flip-back">info</div></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-morph-shape',
    name: 'Morph Shape Avatar',
    category: 'avatars',
    tags: ['avatar', 'morph', 'shape', 'organic', 'animated'],
    difficulty: 'intermediate',
    description: 'An avatar that continuously morphs its border shape',
    cssCode: `.avatar-morph-shape {
  width: 60px; height: 60px;
  background: linear-gradient(135deg, #10b981, #059669);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 1rem;
  animation: morph-shape 4s ease-in-out infinite;
}
@keyframes morph-shape {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 58% 42% 56% 44% / 58% 56% 44% 42%; }
  50% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
  75% { border-radius: 42% 58% 64% 36% / 48% 32% 68% 52%; }
}`,
    htmlCode: `<div class="avatar-morph-shape">MS</div>`,
    isNew: true,
  },
  {
    id: 'avatar-rotate-spin',
    name: 'Rotate Spin Avatar',
    category: 'avatars',
    tags: ['avatar', 'rotate', 'spin', 'animated', 'orbit'],
    difficulty: 'intermediate',
    description: 'An avatar with a rotating orbital ring around it',
    cssCode: `.avatar-rotate-spin {
  position: relative;
  width: 60px; height: 60px;
}
.avatar-rotate-spin-core {
  width: 50px; height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  position: absolute; top: 5px; left: 5px;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.9rem;
  z-index: 2;
}
.avatar-rotate-spin::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: 50%;
  border: 2px dashed #10b98144;
  animation: orbit-spin 4s linear infinite;
}
@keyframes orbit-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="avatar-rotate-spin"><div class="avatar-rotate-spin-core">RS</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-bounce-hover',
    name: 'Bounce Hover Avatar',
    category: 'avatars',
    tags: ['avatar', 'bounce', 'hover', 'interactive', 'spring'],
    difficulty: 'beginner',
    description: 'An avatar that bounces up on hover with a spring effect',
    cssCode: `.avatar-bounce-hover {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  border: 2px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s;
}
.avatar-bounce-hover:hover {
  transform: translateY(-8px);
  border-color: #10b981;
}`,
    htmlCode: `<div class="avatar-bounce-hover">BH</div>`,
    isNew: true,
  },
  {
    id: 'avatar-gradient-border',
    name: 'Gradient Border Avatar',
    category: 'avatars',
    tags: ['avatar', 'gradient', 'border', 'colorful', 'styled'],
    difficulty: 'intermediate',
    description: 'An avatar with a smooth gradient border using background-clip trick',
    cssCode: `.avatar-gradient-border {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  padding: 3px;
  display: flex; align-items: center; justify-content: center;
}
.avatar-gradient-border-inner {
  width: 100%; height: 100%;
  border-radius: 50%;
  background: #0a0a1a;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.9rem;
}`,
    htmlCode: `<div class="avatar-gradient-border"><div class="avatar-gradient-border-inner">GB</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-neon-ring',
    name: 'Neon Ring Avatar',
    category: 'avatars',
    tags: ['avatar', 'neon', 'ring', 'glow', 'dark'],
    difficulty: 'intermediate',
    description: 'An avatar with a vibrant neon ring effect on a dark background',
    cssCode: `.avatar-neon-ring {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: #0a0a1a;
  border: 2px solid #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.9rem;
  box-shadow: 0 0 8px #10b98166, 0 0 16px #10b98133, inset 0 0 8px #10b98122;
  animation: neon-ring-breathe 2s ease-in-out infinite alternate;
}
@keyframes neon-ring-breathe {
  0% { box-shadow: 0 0 6px #10b98144, 0 0 12px #10b98122, inset 0 0 6px #10b98111; }
  100% { box-shadow: 0 0 10px #10b98188, 0 0 20px #10b98144, inset 0 0 10px #10b98133; }
}`,
    htmlCode: `<div class="avatar-neon-ring">NR</div>`,
    isNew: true,
  },
  {
    id: 'avatar-double-ring',
    name: 'Double Ring Avatar',
    category: 'avatars',
    tags: ['avatar', 'double', 'ring', 'orbit', 'animated'],
    difficulty: 'advanced',
    description: 'An avatar with two animated orbital rings spinning in opposite directions',
    cssCode: `.avatar-double-ring {
  position: relative;
  width: 70px; height: 70px;
}
.avatar-double-ring-core {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  position: absolute; top: 13px; left: 13px;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.8rem;
  z-index: 2;
}
.avatar-double-ring::before, .avatar-double-ring::after {
  content: ''; position: absolute; inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
}
.avatar-double-ring::before {
  border-top-color: #10b981;
  animation: ring-cw 2s linear infinite;
}
.avatar-double-ring::after {
  border-bottom-color: #3b82f6;
  animation: ring-ccw 3s linear infinite;
}
@keyframes ring-cw { to { transform: rotate(360deg); } }
@keyframes ring-ccw { to { transform: rotate(-360deg); } }`,
    htmlCode: `<div class="avatar-double-ring"><div class="avatar-double-ring-core">DR</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-shimmer',
    name: 'Shimmer Avatar',
    category: 'avatars',
    tags: ['avatar', 'shimmer', 'loading', 'skeleton', 'shine'],
    difficulty: 'intermediate',
    description: 'A shimmer loading avatar placeholder effect',
    cssCode: `.avatar-shimmer {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #1a1a2e;
  position: relative; overflow: hidden;
}
.avatar-shimmer::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, #10b98122, transparent);
  animation: shimmer-sweep 1.5s ease-in-out infinite;
}
@keyframes shimmer-sweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`,
    htmlCode: `<div class="avatar-shimmer"></div>`,
    isNew: true,
  },
  {
    id: 'avatar-scale-hover',
    name: 'Scale Hover Avatar',
    category: 'avatars',
    tags: ['avatar', 'scale', 'hover', 'zoom', 'interactive'],
    difficulty: 'beginner',
    description: 'An avatar that scales up smoothly on hover with a glow effect',
    cssCode: `.avatar-scale-hover {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  border: 2px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-weight: 700; font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s, border-color 0.3s;
}
.avatar-scale-hover:hover {
  transform: scale(1.15);
  border-color: #10b981;
  box-shadow: 0 0 12px #10b98144;
}`,
    htmlCode: `<div class="avatar-scale-hover">SH</div>`,
    isNew: true,
  },
  {
    id: 'avatar-tilt-3d',
    name: 'Tilt 3D Avatar',
    category: 'avatars',
    tags: ['avatar', '3d', 'tilt', 'perspective', 'hover'],
    difficulty: 'advanced',
    description: 'An avatar that tilts in 3D perspective on hover',
    cssCode: `.avatar-tilt-3d {
  perspective: 400px;
  width: 56px; height: 56px;
}
.avatar-tilt-3d-inner {
  width: 100%; height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  border: 2px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.85rem;
  transition: transform 0.4s ease;
}
.avatar-tilt-3d:hover .avatar-tilt-3d-inner {
  transform: rotateY(15deg) rotateX(-10deg);
  border-color: #10b98144;
  box-shadow: -4px 4px 12px #10b98122;
}`,
    htmlCode: `<div class="avatar-tilt-3d"><div class="avatar-tilt-3d-inner">3D</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-float-hover',
    name: 'Float Hover Avatar',
    category: 'avatars',
    tags: ['avatar', 'float', 'hover', 'levitate', 'shadow'],
    difficulty: 'intermediate',
    description: 'An avatar that floats up on hover with a lifting shadow effect',
    cssCode: `.avatar-float-hover {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s;
  box-shadow: 0 4px 6px #00000044;
}
.avatar-float-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px #10b98122;
}`,
    htmlCode: `<div class="avatar-float-hover">FL</div>`,
    isNew: true,
  },
  {
    id: 'avatar-swap-transition',
    name: 'Swap Transition Avatar',
    category: 'avatars',
    tags: ['avatar', 'swap', 'transition', 'switch', 'fade'],
    difficulty: 'intermediate',
    description: 'An avatar that swaps between two states with a smooth crossfade',
    cssCode: `.avatar-swap-transition {
  width: 56px; height: 56px;
  border-radius: 50%; position: relative; overflow: hidden;
  cursor: pointer;
}
.avatar-swap-a, .avatar-swap-b {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.85rem;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.avatar-swap-a { background: #1a1a2e; color: #10b981; }
.avatar-swap-b { background: #10b981; color: #fff; opacity: 0; transform: scale(0.8); }
.avatar-swap-transition:hover .avatar-swap-a { opacity: 0; transform: scale(0.8); }
.avatar-swap-transition:hover .avatar-swap-b { opacity: 1; transform: scale(1); }`,
    htmlCode: `<div class="avatar-swap-transition"><div class="avatar-swap-a">SW</div><div class="avatar-swap-b">→</div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-dashed-border',
    name: 'Dashed Border Avatar',
    category: 'avatars',
    tags: ['avatar', 'dashed', 'border', 'animated', 'offset'],
    difficulty: 'intermediate',
    description: 'An avatar with an animated dashed border that rotates its dash offset',
    cssCode: `.avatar-dashed-border {
  width: 58px; height: 58px;
  border-radius: 50%;
  border: 3px dashed #10b98166;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-weight: 700; font-size: 0.85rem;
  background: #1a1a2e;
  animation: dash-rotate-avatar 8s linear infinite;
}
@keyframes dash-rotate-avatar {
  to { border-color: #10b981; transform: rotate(360deg); }
}`,
    htmlCode: `<div class="avatar-dashed-border">DB</div>`,
    isNew: true,
  },
  {
    id: 'avatar-shadow-lift',
    name: 'Shadow Lift Avatar',
    category: 'avatars',
    tags: ['avatar', 'shadow', 'lift', 'hover', 'elevation'],
    difficulty: 'beginner',
    description: 'An avatar that lifts with an elevated shadow on hover',
    cssCode: `.avatar-shadow-lift {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 8px #00000033;
}
.avatar-shadow-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px #10b98133, 0 2px 8px #00000044;
}`,
    htmlCode: `<div class="avatar-shadow-lift">SL</div>`,
    isNew: true,
  },
  {
    id: 'avatar-glass-frosted',
    name: 'Glass Frosted Avatar',
    category: 'avatars',
    tags: ['avatar', 'glass', 'frosted', 'blur', 'translucent'],
    difficulty: 'intermediate',
    description: 'A frosted glass-style avatar with blur backdrop and translucency',
    cssCode: `.avatar-glass-frosted {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #10b98122;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #10b98133;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 700; font-size: 0.85rem;
  box-shadow: 0 4px 12px #00000033, inset 0 1px 0 #ffffff11;
}`,
    htmlCode: `<div class="avatar-glass-frosted">GF</div>`,
    isNew: true,
  },

  // ==================== NAVIGATION (20) ====================
  {
    id: 'nav-slide-down-2',
    name: 'Slide Down Navigation',
    category: 'navigation',
    tags: ['navigation', 'slide', 'down', 'dropdown', 'animated'],
    difficulty: 'intermediate',
    description: 'A navigation dropdown that slides down smoothly on hover',
    cssCode: `.nav-slide-down-2 {
  position: relative;
  padding: 10px 18px;
  background: #1a1a2e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.8rem;
  cursor: pointer;
}
.nav-slide-down-2-menu {
  position: absolute; top: 100%; left: 0;
  min-width: 140px; padding: 4px 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 0 0 6px 6px;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.25s ease;
}
.nav-slide-down-2:hover .nav-slide-down-2-menu { transform: scaleY(1); }
.nav-slide-down-2-item {
  padding: 8px 14px;
  color: #94a3b8; font-size: 0.7rem;
  transition: background 0.2s, color 0.2s;
}
.nav-slide-down-2-item:hover { background: #10b98122; color: #10b981; }`,
    htmlCode: `<div class="nav-slide-down-2">Menu ▾<div class="nav-slide-down-2-menu"><div class="nav-slide-down-2-item">Item 1</div><div class="nav-slide-down-2-item">Item 2</div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-underline-active',
    name: 'Underline Active Navigation',
    category: 'navigation',
    tags: ['navigation', 'underline', 'active', 'indicator', 'hover'],
    difficulty: 'intermediate',
    description: 'Navigation links with an animated underline that slides to the active item',
    cssCode: `.nav-underline-active {
  display: flex; gap: 20px;
}
.nav-underline-link {
  color: #64748b; font-size: 0.8rem;
  font-weight: 600; cursor: pointer;
  position: relative; padding-bottom: 4px;
  transition: color 0.3s;
}
.nav-underline-link::after {
  content: ''; position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
}
.nav-underline-link:hover { color: #10b981; }
.nav-underline-link:hover::after, .nav-underline-link.active::after { width: 100%; }
.nav-underline-link.active { color: #10b981; }`,
    htmlCode: `<div class="nav-underline-active"><span class="nav-underline-link active">Home</span><span class="nav-underline-link">About</span><span class="nav-underline-link">Contact</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-hamburger-morph',
    name: 'Hamburger Morph Navigation',
    category: 'navigation',
    tags: ['navigation', 'hamburger', 'morph', 'menu', 'toggle'],
    difficulty: 'advanced',
    description: 'A hamburger menu icon that morphs into an X on click',
    cssCode: `.nav-hamburger-morph {
  width: 28px; height: 20px;
  position: relative; cursor: pointer;
}
.nav-hamburger-line {
  width: 100%; height: 2px;
  background: #10b981;
  position: absolute; left: 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}
.nav-hamburger-line:nth-child(1) { top: 0; }
.nav-hamburger-line:nth-child(2) { top: 9px; }
.nav-hamburger-line:nth-child(3) { top: 18px; }
.nav-hamburger-morph.open .nav-hamburger-line:nth-child(1) { top: 9px; transform: rotate(45deg); }
.nav-hamburger-morph.open .nav-hamburger-line:nth-child(2) { opacity: 0; }
.nav-hamburger-morph.open .nav-hamburger-line:nth-child(3) { top: 9px; transform: rotate(-45deg); }`,
    htmlCode: `<div class="nav-hamburger-morph open"><div class="nav-hamburger-line"></div><div class="nav-hamburger-line"></div><div class="nav-hamburger-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-breadcrumb-arrow',
    name: 'Breadcrumb Arrow Navigation',
    category: 'navigation',
    tags: ['navigation', 'breadcrumb', 'arrow', 'path', 'hierarchy'],
    difficulty: 'intermediate',
    description: 'Breadcrumb navigation with styled arrow separators',
    cssCode: `.nav-breadcrumb-arrow {
  display: flex; align-items: center; gap: 0;
}
.nav-breadcrumb-item {
  padding: 4px 10px;
  color: #64748b; font-size: 0.7rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.2s;
}
.nav-breadcrumb-item:hover { color: #10b981; }
.nav-breadcrumb-item.active { color: #10b981; }
.nav-breadcrumb-sep {
  color: #2a2a3e; font-size: 0.6rem;
  margin: 0 2px;
}`,
    htmlCode: `<div class="nav-breadcrumb-arrow"><span class="nav-breadcrumb-item">Home</span><span class="nav-breadcrumb-sep">›</span><span class="nav-breadcrumb-item">Products</span><span class="nav-breadcrumb-sep">›</span><span class="nav-breadcrumb-item active">Detail</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-dropdown-fade',
    name: 'Dropdown Fade Navigation',
    category: 'navigation',
    tags: ['navigation', 'dropdown', 'fade', 'menu', 'smooth'],
    difficulty: 'beginner',
    description: 'A navigation dropdown that fades in smoothly on hover',
    cssCode: `.nav-dropdown-fade {
  position: relative;
  padding: 10px 18px;
  background: #1a1a2e;
  border-radius: 6px;
  color: #e2e8f0; font-size: 0.8rem;
  cursor: pointer;
}
.nav-dropdown-fade-menu {
  position: absolute; top: 100%; left: 0;
  min-width: 120px; padding: 6px 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 6px; margin-top: 4px;
  opacity: 0; visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}
.nav-dropdown-fade:hover .nav-dropdown-fade-menu { opacity: 1; visibility: visible; }
.nav-dropdown-fade-item {
  padding: 6px 12px;
  color: #94a3b8; font-size: 0.7rem;
  transition: color 0.2s, background 0.2s;
}
.nav-dropdown-fade-item:hover { color: #10b981; background: #10b98111; }`,
    htmlCode: `<div class="nav-dropdown-fade">Options ▾<div class="nav-dropdown-fade-menu"><div class="nav-dropdown-fade-item">Settings</div><div class="nav-dropdown-fade-item">Profile</div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-pill-active',
    name: 'Pill Active Navigation',
    category: 'navigation',
    tags: ['navigation', 'pill', 'active', 'tab', 'rounded'],
    difficulty: 'beginner',
    description: 'Navigation tabs with a pill-shaped active indicator',
    cssCode: `.nav-pill-active {
  display: flex; gap: 4px;
  background: #0f0f1a;
  padding: 4px; border-radius: 10px;
}
.nav-pill-item {
  padding: 6px 16px;
  border-radius: 8px;
  color: #64748b; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  transition: all 0.3s;
}
.nav-pill-item:hover { color: #e2e8f0; }
.nav-pill-item.active {
  background: #10b981;
  color: #fff;
  box-shadow: 0 2px 8px #10b98144;
}`,
    htmlCode: `<div class="nav-pill-active"><span class="nav-pill-item active">Tab 1</span><span class="nav-pill-item">Tab 2</span><span class="nav-pill-item">Tab 3</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-indicator-slide',
    name: 'Indicator Slide Navigation',
    category: 'navigation',
    tags: ['navigation', 'indicator', 'slide', 'tab', 'animated'],
    difficulty: 'advanced',
    description: 'Navigation with a sliding indicator that moves between items',
    cssCode: `.nav-indicator-slide {
  display: flex; position: relative;
  border-bottom: 1px solid #2a2a3e;
}
.nav-indicator-item {
  padding: 10px 18px;
  color: #64748b; font-size: 0.8rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.3s;
}
.nav-indicator-item:hover, .nav-indicator-item.active { color: #10b981; }
.nav-indicator-slider {
  position: absolute; bottom: -1px;
  height: 2px; background: #10b981;
  transition: left 0.3s ease, width 0.3s ease;
  border-radius: 1px;
  left: 0; width: 54px;
}`,
    htmlCode: `<div class="nav-indicator-slide"><span class="nav-indicator-item active">Home</span><span class="nav-indicator-item">Blog</span><span class="nav-indicator-item">About</span><div class="nav-indicator-slider"></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-glass',
    name: 'Glass Navigation',
    category: 'navigation',
    tags: ['navigation', 'glass', 'frosted', 'blur', 'translucent'],
    difficulty: 'intermediate',
    description: 'A frosted glass navigation bar with blur backdrop',
    cssCode: `.nav-glass {
  display: flex; gap: 16px;
  padding: 10px 20px;
  background: #10b98111;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid #10b98122;
  border-radius: 12px;
}
.nav-glass-link {
  color: #94a3b8; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.2s;
  padding: 4px 8px;
  border-radius: 4px;
}
.nav-glass-link:hover { color: #10b981; background: #10b98111; }
.nav-glass-link.active { color: #10b981; }`,
    htmlCode: `<div class="nav-glass"><span class="nav-glass-link active">Home</span><span class="nav-glass-link">Explore</span><span class="nav-glass-link">Settings</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-reveal-scroll',
    name: 'Reveal Scroll Navigation',
    category: 'navigation',
    tags: ['navigation', 'scroll', 'reveal', 'animated', 'entrance'],
    difficulty: 'intermediate',
    description: 'Navigation items that reveal with a staggered slide-in animation',
    cssCode: `.nav-reveal-scroll {
  display: flex; gap: 14px;
}
.nav-reveal-item {
  padding: 8px 14px;
  color: #64748b; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  animation: reveal-slide-up 0.5s ease both;
}
.nav-reveal-item:nth-child(1) { animation-delay: 0s; }
.nav-reveal-item:nth-child(2) { animation-delay: 0.1s; }
.nav-reveal-item:nth-child(3) { animation-delay: 0.2s; }
.nav-reveal-item:nth-child(4) { animation-delay: 0.3s; }
.nav-reveal-item:hover { color: #10b981; transform: translateY(-2px); }
@keyframes reveal-slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="nav-reveal-scroll"><span class="nav-reveal-item">Home</span><span class="nav-reveal-item">About</span><span class="nav-reveal-item">Services</span><span class="nav-reveal-item">Contact</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-sidebar-slide',
    name: 'Sidebar Slide Navigation',
    category: 'navigation',
    tags: ['navigation', 'sidebar', 'slide', 'menu', 'vertical'],
    difficulty: 'intermediate',
    description: 'A vertical sidebar navigation with slide-in menu items',
    cssCode: `.nav-sidebar-slide {
  width: 140px; padding: 8px;
  background: #0f0f1a;
  border-radius: 8px;
  border: 1px solid #1e1e2e;
}
.nav-sidebar-item {
  padding: 8px 12px;
  color: #64748b; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  animation: sidebar-slide-in 0.4s ease both;
}
.nav-sidebar-item:nth-child(2) { animation-delay: 0.05s; }
.nav-sidebar-item:nth-child(3) { animation-delay: 0.1s; }
.nav-sidebar-item:hover { background: #10b98115; color: #10b981; transform: translateX(4px); }
.nav-sidebar-item.active { background: #10b98122; color: #10b981; border-left: 2px solid #10b981; }
@keyframes sidebar-slide-in { from { transform: translateX(-20px); opacity: 0; } }`,
    htmlCode: `<div class="nav-sidebar-slide"><div class="nav-sidebar-item active">Dashboard</div><div class="nav-sidebar-item">Analytics</div><div class="nav-sidebar-item">Settings</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-tabs-glow',
    name: 'Tabs Glow Navigation',
    category: 'navigation',
    tags: ['navigation', 'tabs', 'glow', 'active', 'neon'],
    difficulty: 'intermediate',
    description: 'Navigation tabs with a glowing active indicator',
    cssCode: `.nav-tabs-glow {
  display: flex; gap: 0;
  border-bottom: 1px solid #1e1e2e;
}
.nav-tabs-glow-item {
  padding: 10px 20px;
  color: #64748b; font-size: 0.8rem;
  font-weight: 600; cursor: pointer;
  position: relative;
  transition: color 0.3s;
}
.nav-tabs-glow-item:hover { color: #94a3b8; }
.nav-tabs-glow-item.active { color: #10b981; }
.nav-tabs-glow-item.active::after {
  content: '';
  position: absolute; bottom: -1px; left: 0; right: 0;
  height: 2px; background: #10b981;
  box-shadow: 0 0 8px #10b98166;
  border-radius: 1px;
}`,
    htmlCode: `<div class="nav-tabs-glow"><span class="nav-tabs-glow-item active">Overview</span><span class="nav-tabs-glow-item">Stats</span><span class="nav-tabs-glow-item">Logs</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-step-progress',
    name: 'Step Progress Navigation',
    category: 'navigation',
    tags: ['navigation', 'step', 'progress', 'wizard', 'tracker'],
    difficulty: 'advanced',
    description: 'A step-by-step navigation showing progress through a wizard flow',
    cssCode: `.nav-step-progress {
  display: flex; align-items: center;
}
.nav-step-node {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem; color: #4a4a5e; font-weight: 700;
  position: relative; z-index: 2;
  transition: all 0.3s;
}
.nav-step-node.done {
  background: #10b981; border-color: #10b981;
  color: #fff; box-shadow: 0 0 8px #10b98144;
}
.nav-step-node.current {
  border-color: #10b981; color: #10b981;
  animation: step-pulse 1.5s ease-in-out infinite;
}
.nav-step-connector {
  width: 30px; height: 2px;
  background: #2a2a3e;
}
.nav-step-connector.done { background: #10b981; }
@keyframes step-pulse {
  0%, 100% { box-shadow: 0 0 0 0 #10b98144; }
  50% { box-shadow: 0 0 0 6px #10b98100; }
}`,
    htmlCode: `<div class="nav-step-progress"><div class="nav-step-node done">✓</div><div class="nav-step-connector done"></div><div class="nav-step-node done">✓</div><div class="nav-step-connector done"></div><div class="nav-step-node current">3</div><div class="nav-step-connector"></div><div class="nav-step-node">4</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-accordion',
    name: 'Accordion Navigation',
    category: 'navigation',
    tags: ['navigation', 'accordion', 'expand', 'collapse', 'menu'],
    difficulty: 'intermediate',
    description: 'An accordion-style navigation that expands sub-items on click',
    cssCode: `.nav-accordion {
  width: 160px;
  background: #0f0f1a;
  border-radius: 8px;
  border: 1px solid #1e1e2e;
  overflow: hidden;
}
.nav-accordion-header {
  padding: 10px 14px;
  color: #e2e8f0; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  background: #1a1a2e;
  border-bottom: 1px solid #1e1e2e;
  transition: background 0.2s;
}
.nav-accordion-header:hover { background: #1e1e3e; }
.nav-accordion-content {
  max-height: 0; overflow: hidden;
  transition: max-height 0.3s ease;
}
.nav-accordion-content.open { max-height: 80px; }
.nav-accordion-sub {
  padding: 6px 14px 6px 24px;
  color: #64748b; font-size: 0.7rem;
  cursor: pointer; transition: color 0.2s, background 0.2s;
}
.nav-accordion-sub:hover { color: #10b981; background: #10b98111; }`,
    htmlCode: `<div class="nav-accordion"><div class="nav-accordion-header">Products ▾</div><div class="nav-accordion-content open"><div class="nav-accordion-sub">Feature A</div><div class="nav-accordion-sub">Feature B</div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-mega-menu',
    name: 'Mega Menu Navigation',
    category: 'navigation',
    tags: ['navigation', 'mega-menu', 'grid', 'dropdown', 'large'],
    difficulty: 'advanced',
    description: 'A mega menu navigation that reveals a grid of links on hover',
    cssCode: `.nav-mega-menu {
  position: relative; padding: 10px 18px;
  background: #1a1a2e; border-radius: 6px;
  color: #e2e8f0; font-size: 0.8rem; cursor: pointer;
}
.nav-mega-grid {
  position: absolute; top: 100%; left: 0;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4px; min-width: 200px;
  padding: 10px; background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 0 0 8px 8px;
  opacity: 0; visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}
.nav-mega-menu:hover .nav-mega-grid { opacity: 1; visibility: visible; }
.nav-mega-cell {
  padding: 6px 10px; color: #94a3b8;
  font-size: 0.7rem; border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.nav-mega-cell:hover { background: #10b98122; color: #10b981; }`,
    htmlCode: `<div class="nav-mega-menu">Explore ▾<div class="nav-mega-grid"><div class="nav-mega-cell">Design</div><div class="nav-mega-cell">Code</div><div class="nav-mega-cell">Art</div><div class="nav-mega-cell">Music</div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-breadcrumb-chevron',
    name: 'Breadcrumb Chevron Navigation',
    category: 'navigation',
    tags: ['navigation', 'breadcrumb', 'chevron', 'path', 'styled'],
    difficulty: 'beginner',
    description: 'Breadcrumb navigation with styled chevron arrow separators',
    cssCode: `.nav-breadcrumb-chevron {
  display: flex; align-items: center;
}
.nav-chevron-item {
  padding: 4px 10px;
  color: #64748b; font-size: 0.7rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.2s;
}
.nav-chevron-item:hover { color: #10b981; }
.nav-chevron-item.active { color: #10b981; }
.nav-chevron-sep {
  width: 14px; height: 14px;
  background: #1a1a2e;
  clip-path: polygon(40% 0, 100% 50%, 40% 100%, 30% 100%, 90% 50%, 30% 0);
  margin: 0 2px;
}`,
    htmlCode: `<div class="nav-breadcrumb-chevron"><span class="nav-chevron-item">Home</span><span class="nav-chevron-sep"></span><span class="nav-chevron-item">Blog</span><span class="nav-chevron-sep"></span><span class="nav-chevron-item active">Post</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-dot-indicator',
    name: 'Dot Indicator Navigation',
    category: 'navigation',
    tags: ['navigation', 'dot', 'indicator', 'pagination', 'minimal'],
    difficulty: 'beginner',
    description: 'A minimal dot indicator navigation for pagination or slides',
    cssCode: `.nav-dot-indicator {
  display: flex; gap: 8px;
  align-items: center;
}
.nav-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #2a2a3e;
  cursor: pointer;
  transition: all 0.3s;
}
.nav-dot:hover { background: #10b98166; }
.nav-dot.active {
  background: #10b981;
  width: 24px; border-radius: 5px;
  box-shadow: 0 0 8px #10b98144;
}`,
    htmlCode: `<div class="nav-dot-indicator"><div class="nav-dot active"></div><div class="nav-dot"></div><div class="nav-dot"></div><div class="nav-dot"></div><div class="nav-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-vertical-tabs',
    name: 'Vertical Tabs Navigation',
    category: 'navigation',
    tags: ['navigation', 'vertical', 'tabs', 'sidebar', 'active'],
    difficulty: 'intermediate',
    description: 'A vertical tab navigation with an animated active indicator',
    cssCode: `.nav-vertical-tabs {
  display: flex; flex-direction: column;
  gap: 2px; padding: 6px;
  background: #0f0f1a;
  border-radius: 8px;
  border: 1px solid #1e1e2e;
}
.nav-vtab-item {
  padding: 8px 14px;
  color: #64748b; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s;
  border-left: 2px solid transparent;
}
.nav-vtab-item:hover { color: #94a3b8; background: #1a1a2e; }
.nav-vtab-item.active {
  color: #10b981; background: #10b98111;
  border-left-color: #10b981;
}`,
    htmlCode: `<div class="nav-vertical-tabs"><div class="nav-vtab-item active">Profile</div><div class="nav-vtab-item">Security</div><div class="nav-vtab-item">Preferences</div><div class="nav-vtab-item">Billing</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-animated-border',
    name: 'Animated Border Navigation',
    category: 'navigation',
    tags: ['navigation', 'animated', 'border', 'active', 'glow'],
    difficulty: 'advanced',
    description: 'Navigation items with animated border drawing on active/hover state',
    cssCode: `.nav-animated-border {
  display: flex; gap: 6px;
}
.nav-anim-item {
  padding: 8px 16px;
  color: #64748b; font-size: 0.75rem;
  font-weight: 600; cursor: pointer;
  position: relative; border-radius: 6px;
  transition: color 0.3s;
}
.nav-anim-item::before {
  content: ''; position: absolute;
  inset: 0; border-radius: 6px;
  border: 1px solid transparent;
  transition: border-color 0.3s;
}
.nav-anim-item:hover { color: #10b981; }
.nav-anim-item:hover::before {
  border-color: #10b98144;
  animation: border-draw-nav 0.4s ease both;
}
.nav-anim-item.active { color: #10b981; }
.nav-anim-item.active::before { border-color: #10b981; }
@keyframes border-draw-nav {
  from { clip-path: inset(0 100% 100% 0); }
  to { clip-path: inset(0 0 0 0); }
}`,
    htmlCode: `<div class="nav-animated-border"><span class="nav-anim-item active">Home</span><span class="nav-anim-item">Shop</span><span class="nav-anim-item">Blog</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-icon-menu',
    name: 'Icon Menu Navigation',
    category: 'navigation',
    tags: ['navigation', 'icon', 'menu', 'minimal', 'compact'],
    difficulty: 'beginner',
    description: 'A compact icon-based navigation menu with hover labels',
    cssCode: `.nav-icon-menu {
  display: flex; gap: 4px;
  background: #1a1a2e;
  padding: 6px; border-radius: 10px;
}
.nav-icon-btn {
  width: 36px; height: 36px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #64748b; font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.nav-icon-btn:hover { color: #10b981; background: #10b98115; }
.nav-icon-btn.active {
  color: #10b981; background: #10b98122;
  box-shadow: 0 0 8px #10b98122;
}`,
    htmlCode: `<div class="nav-icon-menu"><span class="nav-icon-btn active">⌂</span><span class="nav-icon-btn">◉</span><span class="nav-icon-btn">⚙</span><span class="nav-icon-btn">✉</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-responsive-collapse',
    name: 'Responsive Collapse Navigation',
    category: 'navigation',
    tags: ['navigation', 'responsive', 'collapse', 'mobile', 'hamburger'],
    difficulty: 'advanced',
    description: 'A navigation that collapses into a hamburger menu on smaller widths',
    cssCode: `.nav-responsive-collapse {
  display: flex; align-items: center;
  background: #1a1a2e;
  padding: 8px 14px;
  border-radius: 8px;
  gap: 12px;
}
.nav-responsive-brand {
  color: #10b981; font-size: 0.8rem;
  font-weight: 800; margin-right: auto;
}
.nav-responsive-links {
  display: flex; gap: 10px;
}
.nav-responsive-link {
  color: #64748b; font-size: 0.7rem;
  font-weight: 600; cursor: pointer;
  transition: color 0.2s;
}
.nav-responsive-link:hover { color: #10b981; }
.nav-responsive-toggle {
  display: none;
  width: 22px; height: 16px;
  flex-direction: column; justify-content: space-between;
  cursor: pointer;
}
.nav-responsive-toggle span {
  height: 2px; background: #10b981;
  border-radius: 1px;
  transition: all 0.3s;
}`,
    htmlCode: `<div class="nav-responsive-collapse"><span class="nav-responsive-brand">Logo</span><div class="nav-responsive-links"><span class="nav-responsive-link">Home</span><span class="nav-responsive-link">About</span><span class="nav-responsive-link">Help</span></div><div class="nav-responsive-toggle"><span></span><span></span><span></span></div></div>`,
    isNew: true,
  },
];
