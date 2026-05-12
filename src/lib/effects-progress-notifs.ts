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

export const effectsProgressNotifs: CSSEffect[] = [
  // ==================== PROGRESS EFFECTS (30) ====================
  {
    id: 'striped-progress-2',
    name: 'Striped Progress',
    category: 'progress',
    tags: ['striped', 'animated', 'bar'],
    difficulty: 'beginner',
    description: 'A horizontal progress bar with animated diagonal stripes.',
    cssCode: `.striped-progress-2 {
  width: 100%;
  height: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.striped-progress-2-bar {
  width: 70%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg, #10b981, #10b981 10px, #0d9668 10px, #0d9668 20px
  );
  background-size: 28.28px 28.28px;
  animation: stripeMove2 1s linear infinite;
  border-radius: 12px;
}
@keyframes stripeMove2 {
  0% { background-position: 0 0; }
  100% { background-position: 28.28px 0; }
}`,
    htmlCode: `<div class="striped-progress-2"><div class="striped-progress-2-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'gradient-progress',
    name: 'Gradient Progress',
    category: 'progress',
    tags: ['gradient', 'bar', 'colorful'],
    difficulty: 'beginner',
    description: 'A progress bar with a smooth gradient fill from teal to emerald.',
    cssCode: `.gradient-progress {
  width: 100%;
  height: 20px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
}
.gradient-progress-bar {
  width: 75%;
  height: 100%;
  background: linear-gradient(90deg, #06b6d4, #10b981, #34d399);
  border-radius: 10px;
  animation: gradPulse 2s ease-in-out infinite;
}
@keyframes gradPulse {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}`,
    htmlCode: `<div class="gradient-progress"><div class="gradient-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'animated-progress-2',
    name: 'Animated Progress',
    category: 'progress',
    tags: ['animated', 'fill', 'bar'],
    difficulty: 'beginner',
    description: 'A progress bar that animates from 0 to a target width.',
    cssCode: `.animated-progress-2 {
  width: 100%;
  height: 22px;
  background: #1a1a2e;
  border-radius: 11px;
  overflow: hidden;
}
.animated-progress-2-bar {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 11px;
  animation: animFill2 2s ease-out forwards;
}
@keyframes animFill2 {
  0% { width: 0%; }
  100% { width: 65%; }
}`,
    htmlCode: `<div class="animated-progress-2"><div class="animated-progress-2-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'circular-progress-2',
    name: 'Circular Progress',
    category: 'progress',
    tags: ['circular', 'spinner', 'ring'],
    difficulty: 'intermediate',
    description: 'A circular progress indicator using conic-gradient.',
    cssCode: `.circular-progress-2 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(#10b981 0deg, #10b981 230deg, #1a1a2e 230deg);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: circFill2 3s ease-in-out infinite alternate;
}
.circular-progress-2::after {
  content: '64%';
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #0f0f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: bold;
  font-size: 16px;
}
@keyframes circFill2 {
  0% { background: conic-gradient(#10b981 0deg, #10b981 90deg, #1a1a2e 90deg); }
  100% { background: conic-gradient(#10b981 0deg, #10b981 310deg, #1a1a2e 310deg); }
}`,
    htmlCode: `<div class="circular-progress-2"></div>`,
    isNew: true,
  },
  {
    id: 'semi-circle-progress',
    name: 'Semi Circle Progress',
    category: 'progress',
    tags: ['semi-circle', 'arc', 'gauge'],
    difficulty: 'intermediate',
    description: 'A semi-circular gauge-style progress indicator.',
    cssCode: `.semi-circle-progress {
  width: 100px;
  height: 55px;
  overflow: hidden;
  position: relative;
}
.semi-circle-progress::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #1a1a2e;
  border-bottom-color: transparent;
  border-right-color: transparent;
  transform: rotate(-135deg);
  box-sizing: border-box;
}
.semi-circle-progress::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #10b981;
  border-bottom-color: transparent;
  border-right-color: transparent;
  transform: rotate(-135deg);
  animation: semiFill 2s ease-out forwards;
  box-sizing: border-box;
}
@keyframes semiFill {
  0% { clip-path: polygon(0 0, 0 0, 50% 0); }
  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}`,
    htmlCode: `<div class="semi-circle-progress"></div>`,
    isNew: true,
  },
  {
    id: 'step-progress-2',
    name: 'Step Progress',
    category: 'progress',
    tags: ['steps', 'wizard', 'milestone'],
    difficulty: 'intermediate',
    description: 'A multi-step progress indicator with filled and empty steps.',
    cssCode: `.step-progress-2 {
  display: flex;
  align-items: center;
  gap: 6px;
}
.step-progress-2-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a4e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #555;
  transition: all 0.3s;
}
.step-progress-2-dot.active {
  background: #10b981;
  border-color: #10b981;
  color: #fff;
  animation: stepPop 0.3s ease;
}
.step-progress-2-dot.done {
  background: #059669;
  border-color: #059669;
  color: #fff;
}
.step-progress-2-line {
  width: 20px;
  height: 2px;
  background: #2a2a4e;
}
.step-progress-2-line.done {
  background: #10b981;
}
@keyframes stepPop {
  0% { transform: scale(0.7); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="step-progress-2"><div class="step-progress-2-dot done">1</div><div class="step-progress-2-line done"></div><div class="step-progress-2-dot done">2</div><div class="step-progress-2-line done"></div><div class="step-progress-2-dot active">3</div><div class="step-progress-2-line"></div><div class="step-progress-2-dot">4</div></div>`,
    isNew: true,
  },
  {
    id: 'wave-progress',
    name: 'Wave Progress',
    category: 'progress',
    tags: ['wave', 'liquid', 'animated'],
    difficulty: 'advanced',
    description: 'A progress bar with a wave animation inside the fill.',
    cssCode: `.wave-progress {
  width: 100%;
  height: 28px;
  background: #1a1a2e;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
}
.wave-progress-fill {
  width: 70%;
  height: 100%;
  background: #10b981;
  position: relative;
  overflow: hidden;
  border-radius: 14px;
}
.wave-progress-fill::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -10px;
  width: 200%;
  height: 20px;
  background: rgba(255,255,255,0.15);
  border-radius: 40%;
  animation: waveAnim2 2s linear infinite;
}
@keyframes waveAnim2 {
  0% { transform: translateX(0) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(0deg); }
}`,
    htmlCode: `<div class="wave-progress"><div class="wave-progress-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'pulse-progress',
    name: 'Pulse Progress',
    category: 'progress',
    tags: ['pulse', 'bar', 'breathing'],
    difficulty: 'beginner',
    description: 'A progress bar with a pulsing glow effect.',
    cssCode: `.pulse-progress {
  width: 100%;
  height: 18px;
  background: #1a1a2e;
  border-radius: 9px;
  overflow: hidden;
}
.pulse-progress-bar {
  width: 55%;
  height: 100%;
  background: #10b981;
  border-radius: 9px;
  animation: pulseProg 1.5s ease-in-out infinite;
}
@keyframes pulseProg {
  0%, 100% { box-shadow: 0 0 5px rgba(16,185,129,0.3); opacity: 1; }
  50% { box-shadow: 0 0 20px rgba(16,185,129,0.7); opacity: 0.85; }
}`,
    htmlCode: `<div class="pulse-progress"><div class="pulse-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'glow-progress',
    name: 'Glow Progress',
    category: 'progress',
    tags: ['glow', 'neon', 'bar'],
    difficulty: 'intermediate',
    description: 'A progress bar with a trailing glow effect.',
    cssCode: `.glow-progress {
  width: 100%;
  height: 14px;
  background: #0f0f1a;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
}
.glow-progress-bar {
  width: 60%;
  height: 100%;
  background: #10b981;
  border-radius: 7px;
  position: relative;
  box-shadow: 0 0 15px rgba(16,185,129,0.6), 0 0 30px rgba(16,185,129,0.3);
}
.glow-progress-bar::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  width: 8px;
  height: 22px;
  background: #34d399;
  border-radius: 4px;
  box-shadow: 0 0 20px #10b981, 0 0 40px #10b981;
}`,
    htmlCode: `<div class="glow-progress"><div class="glow-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'neon-progress',
    name: 'Neon Progress',
    category: 'progress',
    tags: ['neon', 'glow', 'bright'],
    difficulty: 'intermediate',
    description: 'A neon-styled progress bar with glowing edges.',
    cssCode: `.neon-progress {
  width: 100%;
  height: 8px;
  background: #0a0a1a;
  border-radius: 4px;
  overflow: visible;
  position: relative;
  border: 1px solid rgba(16,185,129,0.3);
}
.neon-progress-bar {
  width: 72%;
  height: 100%;
  background: #10b981;
  border-radius: 4px;
  box-shadow: 0 0 8px #10b981, 0 0 20px rgba(16,185,129,0.5), inset 0 0 4px rgba(255,255,255,0.3);
  animation: neonPulse 2s ease-in-out infinite;
}
@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 8px #10b981, 0 0 20px rgba(16,185,129,0.5); }
  50% { box-shadow: 0 0 12px #10b981, 0 0 35px rgba(16,185,129,0.7); }
}`,
    htmlCode: `<div class="neon-progress"><div class="neon-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'loading-progress-2',
    name: 'Loading Progress',
    category: 'progress',
    tags: ['loading', 'indeterminate', 'animated'],
    difficulty: 'beginner',
    description: 'An indeterminate loading progress bar that slides back and forth.',
    cssCode: `.loading-progress-2 {
  width: 100%;
  height: 4px;
  background: #1a1a2e;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}
.loading-progress-2-bar {
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  border-radius: 2px;
  animation: loadSlide2 1.5s ease-in-out infinite;
  position: absolute;
}
@keyframes loadSlide2 {
  0% { left: -40%; }
  100% { left: 100%; }
}`,
    htmlCode: `<div class="loading-progress-2"><div class="loading-progress-2-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'determinate-progress',
    name: 'Determinate Progress',
    category: 'progress',
    tags: ['determinate', 'percentage', 'bar'],
    difficulty: 'beginner',
    description: 'A determinate progress bar showing a fixed percentage fill.',
    cssCode: `.determinate-progress {
  width: 100%;
  height: 20px;
  background: #1a1a2e;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.determinate-progress-bar {
  width: 82%;
  height: 100%;
  background: #10b981;
  border-radius: 10px;
  transition: width 0.5s ease;
}
.determinate-progress::after {
  content: '82%';
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 11px;
  font-weight: bold;
}`,
    htmlCode: `<div class="determinate-progress"><div class="determinate-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'indeterminate-progress',
    name: 'Indeterminate Progress',
    category: 'progress',
    tags: ['indeterminate', 'loading', 'unknown'],
    difficulty: 'intermediate',
    description: 'An indeterminate progress bar with a moving highlight.',
    cssCode: `.indeterminate-progress {
  width: 100%;
  height: 6px;
  background: #1a1a2e;
  border-radius: 3px;
  overflow: hidden;
}
.indeterminate-progress::before {
  content: '';
  display: block;
  width: 30%;
  height: 100%;
  background: #10b981;
  border-radius: 3px;
  animation: indetSlide 1.8s ease-in-out infinite;
}
@keyframes indetSlide {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(300%); }
  100% { transform: translateX(-100%); }
}`,
    htmlCode: `<div class="indeterminate-progress"></div>`,
    isNew: true,
  },
  {
    id: 'multi-color-progress',
    name: 'Multi Color Progress',
    category: 'progress',
    tags: ['multi-color', 'segments', 'colorful'],
    difficulty: 'intermediate',
    description: 'A progress bar divided into colored segments.',
    cssCode: `.multi-color-progress {
  width: 100%;
  height: 18px;
  background: #1a1a2e;
  border-radius: 9px;
  overflow: hidden;
  display: flex;
}
.multi-color-progress span {
  height: 100%;
  animation: segFade 0.5s ease forwards;
  opacity: 0;
}
.multi-color-progress span:nth-child(1) { width: 20%; background: #ef4444; border-radius: 9px 0 0 9px; animation-delay: 0.1s; }
.multi-color-progress span:nth-child(2) { width: 20%; background: #f59e0b; }
.multi-color-progress span:nth-child(3) { width: 20%; background: #10b981; }
.multi-color-progress span:nth-child(4) { width: 15%; background: #3b82f6; border-radius: 0 9px 9px 0; }
@keyframes segFade {
  to { opacity: 1; }
}`,
    htmlCode: `<div class="multi-color-progress"><span></span><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'rainbow-progress',
    name: 'Rainbow Progress',
    category: 'progress',
    tags: ['rainbow', 'gradient', 'colorful'],
    difficulty: 'intermediate',
    description: 'A progress bar with a rainbow gradient fill.',
    cssCode: `.rainbow-progress {
  width: 100%;
  height: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
}
.rainbow-progress-bar {
  width: 75%;
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6);
  border-radius: 8px;
  background-size: 200% 100%;
  animation: rainbowShift 3s linear infinite;
}
@keyframes rainbowShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`,
    htmlCode: `<div class="rainbow-progress"><div class="rainbow-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'gradient-fill-2',
    name: 'Gradient Fill Progress',
    category: 'progress',
    tags: ['gradient', 'fill', 'animated'],
    difficulty: 'intermediate',
    description: 'A progress bar with animated gradient fill direction.',
    cssCode: `.gradient-fill-2 {
  width: 100%;
  height: 20px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
}
.gradient-fill-2-bar {
  width: 60%;
  height: 100%;
  background: linear-gradient(135deg, #06b6d4, #10b981, #06b6d4);
  background-size: 200% 200%;
  border-radius: 10px;
  animation: gradFillAnim 2s ease infinite;
}
@keyframes gradFillAnim {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="gradient-fill-2"><div class="gradient-fill-2-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-label',
    name: 'Labeled Progress',
    category: 'progress',
    tags: ['label', 'percentage', 'text'],
    difficulty: 'beginner',
    description: 'A progress bar with a floating percentage label.',
    cssCode: `.progress-label {
  width: 100%;
  position: relative;
}
.progress-label-track {
  width: 100%;
  height: 16px;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
}
.progress-label-bar {
  width: 68%;
  height: 100%;
  background: #10b981;
  border-radius: 8px;
  transition: width 0.5s;
}
.progress-label-text {
  position: absolute;
  top: -22px;
  left: 68%;
  transform: translateX(-50%);
  color: #10b981;
  font-size: 13px;
  font-weight: bold;
  animation: labelFade 0.5s ease;
}
@keyframes labelFade {
  from { opacity: 0; transform: translateX(-50%) translateY(5px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}`,
    htmlCode: `<div class="progress-label"><span class="progress-label-text">68%</span><div class="progress-label-track"><div class="progress-label-bar"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-glow',
    name: 'Progress Glow',
    category: 'progress',
    tags: ['glow', 'shadow', 'bright'],
    difficulty: 'beginner',
    description: 'A progress bar with a soft outer glow.',
    cssCode: `.progress-glow {
  width: 100%;
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: visible;
}
.progress-glow-bar {
  width: 58%;
  height: 100%;
  background: #10b981;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(16,185,129,0.5), 0 0 25px rgba(16,185,129,0.25);
}`,
    htmlCode: `<div class="progress-glow"><div class="progress-glow-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-shadow',
    name: 'Progress Shadow',
    category: 'progress',
    tags: ['shadow', 'depth', 'elevated'],
    difficulty: 'beginner',
    description: 'A progress bar with a depth shadow below.',
    cssCode: `.progress-shadow {
  width: 100%;
  height: 14px;
  background: #1a1a2e;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}
.progress-shadow-bar {
  width: 72%;
  height: 100%;
  background: linear-gradient(180deg, #34d399, #10b981);
  border-radius: 7px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
}`,
    htmlCode: `<div class="progress-shadow"><div class="progress-shadow-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'thin-progress',
    name: 'Thin Progress',
    category: 'progress',
    tags: ['thin', 'minimal', 'slim'],
    difficulty: 'beginner',
    description: 'An ultra-thin progress bar.',
    cssCode: `.thin-progress {
  width: 100%;
  height: 3px;
  background: #1a1a2e;
  border-radius: 2px;
  overflow: hidden;
}
.thin-progress-bar {
  width: 80%;
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(16,185,129,0.5);
}`,
    htmlCode: `<div class="thin-progress"><div class="thin-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'thick-progress',
    name: 'Thick Progress',
    category: 'progress',
    tags: ['thick', 'bold', 'chunky'],
    difficulty: 'beginner',
    description: 'A thick, bold progress bar.',
    cssCode: `.thick-progress {
  width: 100%;
  height: 36px;
  background: #1a1a2e;
  border-radius: 18px;
  overflow: hidden;
}
.thick-progress-bar {
  width: 55%;
  height: 100%;
  background: linear-gradient(180deg, #34d399, #059669);
  border-radius: 18px;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.15);
}`,
    htmlCode: `<div class="thick-progress"><div class="thick-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'rounded-progress-2',
    name: 'Rounded Progress',
    category: 'progress',
    tags: ['rounded', 'pill', 'smooth'],
    difficulty: 'beginner',
    description: 'A progress bar with fully rounded pill shape.',
    cssCode: `.rounded-progress-2 {
  width: 100%;
  height: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
}
.rounded-progress-2-bar {
  width: 65%;
  height: 100%;
  background: #10b981;
  border-radius: 12px;
  box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15);
}`,
    htmlCode: `<div class="rounded-progress-2"><div class="rounded-progress-2-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'square-progress',
    name: 'Square Progress',
    category: 'progress',
    tags: ['square', 'angular', 'sharp'],
    difficulty: 'beginner',
    description: 'A progress bar with sharp square corners.',
    cssCode: `.square-progress {
  width: 100%;
  height: 22px;
  background: #1a1a2e;
  border-radius: 0;
  overflow: hidden;
}
.square-progress-bar {
  width: 70%;
  height: 100%;
  background: #10b981;
  border-radius: 0;
  border-right: 2px solid #34d399;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
}`,
    htmlCode: `<div class="square-progress"><div class="square-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'diamond-progress',
    name: 'Diamond Progress',
    category: 'progress',
    tags: ['diamond', 'shapes', 'geometric'],
    difficulty: 'advanced',
    description: 'A progress indicator made of diamond shapes.',
    cssCode: `.diamond-progress {
  display: flex;
  gap: 4px;
  align-items: center;
}
.diamond-progress i {
  width: 14px;
  height: 14px;
  background: #1a1a2e;
  transform: rotate(45deg);
  border: 2px solid #2a2a4e;
  transition: all 0.3s;
}
.diamond-progress i.filled {
  background: #10b981;
  border-color: #10b981;
  box-shadow: 0 0 8px rgba(16,185,129,0.5);
  animation: diamondPop 0.3s ease;
}
@keyframes diamondPop {
  0% { transform: rotate(45deg) scale(0.5); }
  60% { transform: rotate(45deg) scale(1.2); }
  100% { transform: rotate(45deg) scale(1); }
}`,
    htmlCode: `<div class="diamond-progress"><i class="filled"></i><i class="filled"></i><i class="filled"></i><i class="filled"></i><i></i><i></i><i></i></div>`,
    isNew: true,
  },
  {
    id: 'star-progress',
    name: 'Star Progress',
    category: 'progress',
    tags: ['star', 'rating', 'shapes'],
    difficulty: 'intermediate',
    description: 'A progress indicator using star shapes.',
    cssCode: `.star-progress {
  display: flex;
  gap: 6px;
}
.star-progress i {
  font-style: normal;
  font-size: 20px;
  color: #2a2a4e;
  transition: all 0.3s;
}
.star-progress i.filled {
  color: #10b981;
  text-shadow: 0 0 8px rgba(16,185,129,0.5);
  animation: starPop 0.4s ease;
}
@keyframes starPop {
  0% { transform: scale(0.5); }
  60% { transform: scale(1.3); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="star-progress"><i class="filled">★</i><i class="filled">★</i><i class="filled">★</i><i>★</i><i>★</i></div>`,
    isNew: true,
  },
  {
    id: 'heart-progress',
    name: 'Heart Progress',
    category: 'progress',
    tags: ['heart', 'love', 'shapes'],
    difficulty: 'intermediate',
    description: 'A progress indicator using heart shapes.',
    cssCode: `.heart-progress {
  display: flex;
  gap: 6px;
}
.heart-progress i {
  font-style: normal;
  font-size: 20px;
  color: #2a2a4e;
  transition: all 0.3s;
}
.heart-progress i.filled {
  color: #ef4444;
  text-shadow: 0 0 8px rgba(239,68,68,0.5);
  animation: heartBeat2 0.5s ease;
}
@keyframes heartBeat2 {
  0% { transform: scale(0.5); }
  40% { transform: scale(1.3); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="heart-progress"><i class="filled">♥</i><i class="filled">♥</i><i class="filled">♥</i><i>♥</i><i>♥</i></div>`,
    isNew: true,
  },
  {
    id: 'flame-progress',
    name: 'Flame Progress',
    category: 'progress',
    tags: ['flame', 'fire', 'warm'],
    difficulty: 'advanced',
    description: 'A progress bar with a flame-like animated edge.',
    cssCode: `.flame-progress {
  width: 100%;
  height: 22px;
  background: #1a1a2e;
  border-radius: 11px;
  overflow: hidden;
  position: relative;
}
.flame-progress-bar {
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  border-radius: 11px;
  position: relative;
}
.flame-progress-bar::after {
  content: '';
  position: absolute;
  right: -3px;
  top: -6px;
  width: 12px;
  height: 34px;
  background: radial-gradient(ellipse, #fbbf24 0%, #f59e0b 30%, transparent 70%);
  animation: flicker 0.4s ease-in-out infinite alternate;
  border-radius: 50%;
}
@keyframes flicker {
  0% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
  100% { transform: scaleY(1.2) scaleX(0.8); opacity: 1; }
}`,
    htmlCode: `<div class="flame-progress"><div class="flame-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'water-progress',
    name: 'Water Progress',
    category: 'progress',
    tags: ['water', 'liquid', 'fluid'],
    difficulty: 'advanced',
    description: 'A progress bar with a water-like wave fill.',
    cssCode: `.water-progress {
  width: 100%;
  height: 28px;
  background: #1a1a2e;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
}
.water-progress-fill {
  width: 65%;
  height: 100%;
  background: linear-gradient(180deg, #06b6d4, #0891b2);
  position: relative;
  border-radius: 14px;
  overflow: hidden;
}
.water-progress-fill::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 15px;
  top: -2px;
  left: 0;
  background: rgba(255,255,255,0.15);
  border-radius: 50%;
  animation: waterWave 3s ease-in-out infinite;
}
@keyframes waterWave {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-25%); }
}`,
    htmlCode: `<div class="water-progress"><div class="water-progress-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'lightning-progress',
    name: 'Lightning Progress',
    category: 'progress',
    tags: ['lightning', 'electric', 'fast'],
    difficulty: 'advanced',
    description: 'A progress bar with a lightning-bolt animated edge.',
    cssCode: `.lightning-progress {
  width: 100%;
  height: 20px;
  background: #1a1a2e;
  border-radius: 10px;
  overflow: hidden;
}
.lightning-progress-bar {
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 10px;
  position: relative;
  animation: lightningFlicker 0.15s ease-in-out infinite alternate;
}
@keyframes lightningFlicker {
  0% { box-shadow: 0 0 8px rgba(139,92,246,0.6), 0 0 20px rgba(59,130,246,0.3); }
  100% { box-shadow: 0 0 15px rgba(139,92,246,0.9), 0 0 35px rgba(59,130,246,0.5); }
}`,
    htmlCode: `<div class="lightning-progress"><div class="lightning-progress-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'candy-progress',
    name: 'Candy Progress',
    category: 'progress',
    tags: ['candy', 'sweet', 'playful'],
    difficulty: 'intermediate',
    description: 'A playful candy-striped progress bar.',
    cssCode: `.candy-progress {
  width: 100%;
  height: 22px;
  background: #1a1a2e;
  border-radius: 11px;
  overflow: hidden;
}
.candy-progress-bar {
  width: 70%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg, #ec4899 0px, #ec4899 10px, #8b5cf6 10px, #8b5cf6 20px, #10b981 20px, #10b981 30px
  );
  border-radius: 11px;
  animation: candyScroll 2s linear infinite;
}
@keyframes candyScroll {
  0% { background-position: 0 0; }
  100% { background-position: 30px 0; }
}`,
    htmlCode: `<div class="candy-progress"><div class="candy-progress-bar"></div></div>`,
    isNew: true,
  },

  // ==================== NOTIFICATION EFFECTS (30) ====================
  {
    id: 'slide-in-notif',
    name: 'Slide In Notification',
    category: 'notifications',
    tags: ['slide', 'entrance', 'animated'],
    difficulty: 'beginner',
    description: 'A notification that slides in from the right side.',
    cssCode: `.slide-in-notif {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #10b981;
  font-size: 14px;
  animation: slideInRight 0.5s ease-out;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
@keyframes slideInRight {
  from { transform: translateX(120%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="slide-in-notif">Task completed successfully!</div>`,
    isNew: true,
  },
  {
    id: 'fade-notif',
    name: 'Fade Notification',
    category: 'notifications',
    tags: ['fade', 'simple', 'entrance'],
    difficulty: 'beginner',
    description: 'A notification that fades in smoothly.',
    cssCode: `.fade-notif {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #3b82f6;
  font-size: 14px;
  animation: fadeNotifIn 0.6s ease-out;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
@keyframes fadeNotifIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="fade-notif">New update available</div>`,
    isNew: true,
  },
  {
    id: 'bounce-notif',
    name: 'Bounce Notification',
    category: 'notifications',
    tags: ['bounce', 'playful', 'entrance'],
    difficulty: 'intermediate',
    description: 'A notification that bounces in from above.',
    cssCode: `.bounce-notif {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #f59e0b;
  font-size: 14px;
  animation: bounceInNotif 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
@keyframes bounceInNotif {
  0% { transform: translateY(-80px); opacity: 0; }
  60% { transform: translateY(10px); opacity: 1; }
  80% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}`,
    htmlCode: `<div class="bounce-notif">Warning: Storage almost full</div>`,
    isNew: true,
  },
  {
    id: 'flip-notif',
    name: 'Flip Notification',
    category: 'notifications',
    tags: ['flip', '3d', 'entrance'],
    difficulty: 'intermediate',
    description: 'A notification that flips in with a 3D rotation.',
    cssCode: `.flip-notif {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #8b5cf6;
  font-size: 14px;
  animation: flipInNotif 0.6s ease-out;
  perspective: 600px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
@keyframes flipInNotif {
  0% { transform: perspective(600px) rotateX(90deg); opacity: 0; }
  60% { transform: perspective(600px) rotateX(-10deg); }
  100% { transform: perspective(600px) rotateX(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="flip-notif">New message received</div>`,
    isNew: true,
  },
  {
    id: 'scale-notif',
    name: 'Scale Notification',
    category: 'notifications',
    tags: ['scale', 'zoom', 'entrance'],
    difficulty: 'beginner',
    description: 'A notification that scales up from the center.',
    cssCode: `.scale-notif {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #10b981;
  font-size: 14px;
  animation: scaleNotifIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}
@keyframes scaleNotifIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="scale-notif">Settings saved!</div>`,
    isNew: true,
  },
  {
    id: 'toast-notif',
    name: 'Toast Notification',
    category: 'notifications',
    tags: ['toast', 'bottom', 'popup'],
    difficulty: 'beginner',
    description: 'A classic toast notification with rounded corners and shadow.',
    cssCode: `.toast-notif {
  background: #10b981;
  color: #fff;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 8px 24px rgba(16,185,129,0.3);
  animation: toastSlideUp 0.4s ease-out;
  display: inline-block;
}
@keyframes toastSlideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="toast-notif">✓ Changes saved</div>`,
    isNew: true,
  },
  {
    id: 'alert-notif',
    name: 'Alert Notification',
    category: 'notifications',
    tags: ['alert', 'important', 'urgent'],
    difficulty: 'intermediate',
    description: 'An alert notification with a pulsing border.',
    cssCode: `.alert-notif {
  background: #1e293b;
  color: #fbbf24;
  padding: 14px 20px;
  border-radius: 10px;
  border: 2px solid #f59e0b;
  font-size: 14px;
  font-weight: 600;
  animation: alertPulse 1.5s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(245,158,11,0.2);
}
@keyframes alertPulse {
  0%, 100% { border-color: #f59e0b; box-shadow: 0 4px 15px rgba(245,158,11,0.2); }
  50% { border-color: #fbbf24; box-shadow: 0 4px 25px rgba(245,158,11,0.4); }
}`,
    htmlCode: `<div class="alert-notif">⚠ Attention required!</div>`,
    isNew: true,
  },
  {
    id: 'success-notif',
    name: 'Success Notification',
    category: 'notifications',
    tags: ['success', 'green', 'confirmation'],
    difficulty: 'beginner',
    description: 'A success notification with a check icon and green theme.',
    cssCode: `.success-notif {
  background: linear-gradient(135deg, #065f46, #047857);
  color: #d1fae5;
  padding: 14px 20px 14px 44px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 4px 15px rgba(16,185,129,0.3);
  animation: successIn 0.4s ease-out;
}
.success-notif::before {
  content: '✓';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 16px;
}
@keyframes successIn {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="success-notif">Payment processed successfully</div>`,
    isNew: true,
  },
  {
    id: 'error-notif',
    name: 'Error Notification',
    category: 'notifications',
    tags: ['error', 'red', 'danger'],
    difficulty: 'beginner',
    description: 'An error notification with a red theme and shake.',
    cssCode: `.error-notif {
  background: linear-gradient(135deg, #7f1d1d, #991b1b);
  color: #fecaca;
  padding: 14px 20px 14px 44px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 4px 15px rgba(239,68,68,0.3);
  animation: errorShake 0.5s ease;
}
.error-notif::before {
  content: '✕';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 16px;
}
@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`,
    htmlCode: `<div class="error-notif">Failed to save changes</div>`,
    isNew: true,
  },
  {
    id: 'warning-notif',
    name: 'Warning Notification',
    category: 'notifications',
    tags: ['warning', 'amber', 'caution'],
    difficulty: 'beginner',
    description: 'A warning notification with an amber theme.',
    cssCode: `.warning-notif {
  background: linear-gradient(135deg, #78350f, #92400e);
  color: #fef3c7;
  padding: 14px 20px 14px 44px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 4px 15px rgba(245,158,11,0.3);
  animation: warnIn 0.4s ease-out;
}
.warning-notif::before {
  content: '!';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 18px;
}
@keyframes warnIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}`,
    htmlCode: `<div class="warning-notif">Low battery: 15% remaining</div>`,
    isNew: true,
  },
  {
    id: 'info-notif',
    name: 'Info Notification',
    category: 'notifications',
    tags: ['info', 'blue', 'notice'],
    difficulty: 'beginner',
    description: 'An info notification with a blue theme.',
    cssCode: `.info-notif {
  background: linear-gradient(135deg, #1e3a5f, #1e40af);
  color: #dbeafe;
  padding: 14px 20px 14px 44px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 4px 15px rgba(59,130,246,0.3);
  animation: infoSlide 0.4s ease-out;
}
.info-notif::before {
  content: 'i';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  font-size: 18px;
  font-style: italic;
}
@keyframes infoSlide {
  from { transform: translateY(-15px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="info-notif">A new version is available</div>`,
    isNew: true,
  },
  {
    id: 'badge-pulse-2',
    name: 'Pulse Badge',
    category: 'notifications',
    tags: ['badge', 'pulse', 'count'],
    difficulty: 'beginner',
    description: 'A notification badge with a pulsing animation.',
    cssCode: `.badge-pulse-2 {
  position: relative;
  display: inline-block;
}
.badge-pulse-2-icon {
  width: 40px;
  height: 40px;
  background: #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 18px;
}
.badge-pulse-2-count {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: #ef4444;
  border-radius: 50%;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  animation: badgePulse2 1.5s ease-in-out infinite;
}
@keyframes badgePulse2 {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  50% { box-shadow: 0 0 0 8px rgba(239,68,68,0); }
}`,
    htmlCode: `<div class="badge-pulse-2"><div class="badge-pulse-2-icon">🔔</div><div class="badge-pulse-2-count">3</div></div>`,
    isNew: true,
  },
  {
    id: 'badge-bounce',
    name: 'Bounce Badge',
    category: 'notifications',
    tags: ['badge', 'bounce', 'count'],
    difficulty: 'intermediate',
    description: 'A notification badge that bounces to attract attention.',
    cssCode: `.badge-bounce {
  position: relative;
  display: inline-block;
}
.badge-bounce-icon {
  width: 40px;
  height: 40px;
  background: #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 18px;
}
.badge-bounce-count {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 20px;
  height: 20px;
  background: #ef4444;
  border-radius: 10px;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 5px;
  animation: badgeBounce 1s ease infinite;
}
@keyframes badgeBounce {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-6px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-3px); }
}`,
    htmlCode: `<div class="badge-bounce"><div class="badge-bounce-icon">✉</div><div class="badge-bounce-count">5</div></div>`,
    isNew: true,
  },
  {
    id: 'badge-glow',
    name: 'Glow Badge',
    category: 'notifications',
    tags: ['badge', 'glow', 'neon'],
    difficulty: 'intermediate',
    description: 'A notification badge with a glowing effect.',
    cssCode: `.badge-glow {
  position: relative;
  display: inline-block;
}
.badge-glow-icon {
  width: 40px;
  height: 40px;
  background: #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 18px;
}
.badge-glow-count {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  animation: badgeGlow 1.5s ease-in-out infinite;
}
@keyframes badgeGlow {
  0%, 100% { box-shadow: 0 0 5px rgba(16,185,129,0.5); }
  50% { box-shadow: 0 0 15px rgba(16,185,129,0.9), 0 0 30px rgba(16,185,129,0.4); }
}`,
    htmlCode: `<div class="badge-glow"><div class="badge-glow-icon">💬</div><div class="badge-glow-count">2</div></div>`,
    isNew: true,
  },
  {
    id: 'badge-shake',
    name: 'Shake Badge',
    category: 'notifications',
    tags: ['badge', 'shake', 'attention'],
    difficulty: 'intermediate',
    description: 'A notification badge that shakes to draw attention.',
    cssCode: `.badge-shake {
  position: relative;
  display: inline-block;
}
.badge-shake-icon {
  width: 40px;
  height: 40px;
  background: #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 18px;
}
.badge-shake-count {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: #ef4444;
  border-radius: 50%;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  animation: badgeShake 0.8s ease-in-out infinite;
}
@keyframes badgeShake {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(12deg); }
  30% { transform: rotate(-12deg); }
  45% { transform: rotate(8deg); }
  60% { transform: rotate(-8deg); }
  75% { transform: rotate(0deg); }
}`,
    htmlCode: `<div class="badge-shake"><div class="badge-shake-icon">🔔</div><div class="badge-shake-count">9</div></div>`,
    isNew: true,
  },
  {
    id: 'badge-pop',
    name: 'Pop Badge',
    category: 'notifications',
    tags: ['badge', 'pop', 'appear'],
    difficulty: 'beginner',
    description: 'A notification badge that pops in with a spring effect.',
    cssCode: `.badge-pop {
  position: relative;
  display: inline-block;
}
.badge-pop-icon {
  width: 40px;
  height: 40px;
  background: #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 18px;
}
.badge-pop-count {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: #ef4444;
  border-radius: 50%;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  animation: badgePopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes badgePopIn {
  0% { transform: scale(0); }
  70% { transform: scale(1.3); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="badge-pop"><div class="badge-pop-icon">🛒</div><div class="badge-pop-count">1</div></div>`,
    isNew: true,
  },
  {
    id: 'badge-slide',
    name: 'Slide Badge',
    category: 'notifications',
    tags: ['badge', 'slide', 'entrance'],
    difficulty: 'beginner',
    description: 'A notification badge that slides in from above.',
    cssCode: `.badge-slide {
  position: relative;
  display: inline-block;
}
.badge-slide-icon {
  width: 40px;
  height: 40px;
  background: #1e293b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 18px;
}
.badge-slide-count {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 20px;
  height: 20px;
  background: #3b82f6;
  border-radius: 10px;
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 5px;
  animation: badgeSlideIn 0.4s ease-out;
}
@keyframes badgeSlideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="badge-slide"><div class="badge-slide-icon">📨</div><div class="badge-slide-count">12</div></div>`,
    isNew: true,
  },
  {
    id: 'notif-stack',
    name: 'Stacked Notifications',
    category: 'notifications',
    tags: ['stack', 'multiple', 'layered'],
    difficulty: 'intermediate',
    description: 'Stacked notifications with depth and offset.',
    cssCode: `.notif-stack {
  position: relative;
}
.notif-stack-item {
  background: #1e293b;
  color: #e2e8f0;
  padding: 12px 18px;
  border-radius: 8px;
  border-left: 4px solid #10b981;
  font-size: 13px;
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  animation: stackIn 0.3s ease-out backwards;
}
.notif-stack-item:nth-child(1) { animation-delay: 0.1s; }
.notif-stack-item:nth-child(2) { animation-delay: 0.25s; border-left-color: #3b82f6; }
.notif-stack-item:nth-child(3) { animation-delay: 0.4s; border-left-color: #f59e0b; }
@keyframes stackIn {
  from { transform: translateX(40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-stack"><div class="notif-stack-item">✓ File uploaded</div><div class="notif-stack-item">ℹ Sync complete</div><div class="notif-stack-item">⚠ Disk space low</div></div>`,
    isNew: true,
  },
  {
    id: 'notif-dismiss',
    name: 'Dismissible Notification',
    category: 'notifications',
    tags: ['dismiss', 'close', 'interactive'],
    difficulty: 'intermediate',
    description: 'A notification with a close button that shrinks away.',
    cssCode: `.notif-dismiss {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 40px 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #10b981;
  font-size: 14px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: notifAppear 0.3s ease-out;
}
.notif-dismiss::after {
  content: '✕';
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;
}
.notif-dismiss:hover::after {
  color: #ef4444;
}
@keyframes notifAppear {
  from { transform: scaleY(0); transform-origin: top; opacity: 0; }
  to { transform: scaleY(1); opacity: 1; }
}`,
    htmlCode: `<div class="notif-dismiss">Item added to cart</div>`,
    isNew: true,
  },
  {
    id: 'notif-expand',
    name: 'Expandable Notification',
    category: 'notifications',
    tags: ['expand', 'details', 'interactive'],
    difficulty: 'intermediate',
    description: 'A notification that expands to show more details on hover.',
    cssCode: `.notif-expand {
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 10px;
  border-left: 4px solid #8b5cf6;
  font-size: 14px;
  overflow: hidden;
  max-height: 48px;
  transition: max-height 0.3s ease, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  padding: 12px 18px;
}
.notif-expand:hover {
  max-height: 120px;
  box-shadow: 0 8px 25px rgba(139,92,246,0.3);
}
.notif-expand p {
  margin: 0;
}
.notif-expand .details {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 8px;
  opacity: 0;
  transition: opacity 0.3s 0.1s;
}
.notif-expand:hover .details {
  opacity: 1;
}`,
    htmlCode: `<div class="notif-expand"><p>New comment on your post</p><p class="details">John said: "Great work on the design!" — 2 min ago</p></div>`,
    isNew: true,
  },
  {
    id: 'notif-progress-2',
    name: 'Progress Notification',
    category: 'notifications',
    tags: ['progress', 'bar', 'upload'],
    difficulty: 'intermediate',
    description: 'A notification with an embedded progress bar.',
    cssCode: `.notif-progress-2 {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: np2In 0.3s ease-out;
}
.np2-bar-track {
  width: 100%;
  height: 6px;
  background: #0f172a;
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;
}
.np2-bar-fill {
  width: 73%;
  height: 100%;
  background: #10b981;
  border-radius: 3px;
  animation: np2Fill 2s ease-out;
}
@keyframes np2In { from { opacity: 0; } to { opacity: 1; } }
@keyframes np2Fill { from { width: 0%; } to { width: 73%; } }`,
    htmlCode: `<div class="notif-progress-2">Uploading file...<div class="np2-bar-track"><div class="np2-bar-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'notif-timer',
    name: 'Timer Notification',
    category: 'notifications',
    tags: ['timer', 'auto-dismiss', 'countdown'],
    difficulty: 'advanced',
    description: 'A notification with an auto-dismiss timer bar.',
    cssCode: `.notif-timer {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: ntIn 0.3s ease-out;
}
.notif-timer::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #10b981;
  animation: timerShrink 5s linear forwards;
}
@keyframes ntIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes timerShrink { from { width: 100%; } to { width: 0%; } }`,
    htmlCode: `<div class="notif-timer">This message will auto-dismiss</div>`,
    isNew: true,
  },
  {
    id: 'notif-countdown',
    name: 'Countdown Notification',
    category: 'notifications',
    tags: ['countdown', 'number', 'urgent'],
    difficulty: 'intermediate',
    description: 'A notification with a large countdown number.',
    cssCode: `.notif-countdown {
  background: #1e293b;
  color: #e2e8f0;
  padding: 16px 20px;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: ncIn 0.4s ease-out;
}
.nc-number {
  font-size: 32px;
  font-weight: bold;
  color: #10b981;
  animation: ncPulse 1s ease-in-out infinite;
}
@keyframes ncIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes ncPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`,
    htmlCode: `<div class="notif-countdown"><div class="nc-number">5</div><div>Session expires in 5 minutes</div></div>`,
    isNew: true,
  },
  {
    id: 'notif-icon-anim',
    name: 'Animated Icon Notification',
    category: 'notifications',
    tags: ['icon', 'animated', 'bell'],
    difficulty: 'intermediate',
    description: 'A notification with an animated bell icon.',
    cssCode: `.notif-icon-anim {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px 14px 50px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: niaIn 0.3s ease-out;
}
.notif-icon-anim::before {
  content: '🔔';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  animation: bellRing 0.6s ease-in-out infinite;
  transform-origin: top center;
}
@keyframes niaIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes bellRing {
  0%, 100% { transform: translateY(-50%) rotate(0deg); }
  15% { transform: translateY(-50%) rotate(15deg); }
  30% { transform: translateY(-50%) rotate(-15deg); }
  45% { transform: translateY(-50%) rotate(8deg); }
  60% { transform: translateY(-50%) rotate(-8deg); }
  75% { transform: translateY(-50%) rotate(0deg); }
}`,
    htmlCode: `<div class="notif-icon-anim">You have new notifications</div>`,
    isNew: true,
  },
  {
    id: 'notif-ripple',
    name: 'Ripple Notification',
    category: 'notifications',
    tags: ['ripple', 'wave', 'click'],
    difficulty: 'advanced',
    description: 'A notification with a ripple click effect.',
    cssCode: `.notif-ripple {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border-left: 4px solid #10b981;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  cursor: pointer;
}
.notif-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background: rgba(16,185,129,0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: rippleOut 2s ease-out infinite;
}
@keyframes rippleOut {
  0% { width: 10px; height: 10px; opacity: 0.5; }
  100% { width: 300px; height: 300px; opacity: 0; }
}`,
    htmlCode: `<div class="notif-ripple">Click to view details</div>`,
    isNew: true,
  },
  {
    id: 'notif-glow',
    name: 'Glow Notification',
    category: 'notifications',
    tags: ['glow', 'neon', 'bright'],
    difficulty: 'intermediate',
    description: 'A notification with a glowing border effect.',
    cssCode: `.notif-glow {
  background: #0f172a;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  border: 1px solid #10b981;
  font-size: 14px;
  box-shadow: 0 0 15px rgba(16,185,129,0.3), inset 0 0 15px rgba(16,185,129,0.05);
  animation: notifGlowPulse 2s ease-in-out infinite;
}
@keyframes notifGlowPulse {
  0%, 100% { box-shadow: 0 0 15px rgba(16,185,129,0.3), inset 0 0 15px rgba(16,185,129,0.05); }
  50% { box-shadow: 0 0 25px rgba(16,185,129,0.5), inset 0 0 20px rgba(16,185,129,0.1); }
}`,
    htmlCode: `<div class="notif-glow">✓ Connection secured</div>`,
    isNew: true,
  },
  {
    id: 'notif-neon',
    name: 'Neon Notification',
    category: 'notifications',
    tags: ['neon', 'glow', 'retro'],
    difficulty: 'advanced',
    description: 'A retro-styled neon notification with bright glow.',
    cssCode: `.notif-neon {
  background: #0a0a0a;
  color: #10b981;
  padding: 14px 20px;
  border-radius: 4px;
  border: 2px solid #10b981;
  font-size: 14px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 10px #10b981, 0 0 30px rgba(16,185,129,0.3), inset 0 0 10px rgba(16,185,129,0.1);
  animation: neonFlicker2 3s ease-in-out infinite;
}
@keyframes neonFlicker2 {
  0%, 100% { opacity: 1; }
  5% { opacity: 0.85; }
  10% { opacity: 1; }
  50% { opacity: 1; }
  52% { opacity: 0.9; }
  54% { opacity: 1; }
}`,
    htmlCode: `<div class="notif-neon">System Online</div>`,
    isNew: true,
  },
  {
    id: 'notif-gradient',
    name: 'Gradient Notification',
    category: 'notifications',
    tags: ['gradient', 'colorful', 'modern'],
    difficulty: 'intermediate',
    description: 'A notification with an animated gradient border.',
    cssCode: `.notif-gradient {
  background: #1e293b;
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 14px;
  position: relative;
  z-index: 0;
}
.notif-gradient::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 12px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 100%;
  z-index: -1;
  animation: gradientBorderMove 3s linear infinite;
}
@keyframes gradientBorderMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<div class="notif-gradient">New feature unlocked!</div>`,
    isNew: true,
  },
  {
    id: 'notif-glass',
    name: 'Glass Notification',
    category: 'notifications',
    tags: ['glass', 'frosted', 'blur'],
    difficulty: 'intermediate',
    description: 'A glassmorphism-styled notification with blur.',
    cssCode: `.notif-glass {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #e2e8f0;
  padding: 14px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  font-size: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  animation: glassIn 0.4s ease-out;
}
@keyframes glassIn {
  from { transform: translateY(-10px); opacity: 0; backdrop-filter: blur(0px); }
  to { transform: translateY(0); opacity: 1; backdrop-filter: blur(12px); }
}`,
    htmlCode: `<div class="notif-glass">📷 Photo saved to gallery</div>`,
    isNew: true,
  },
  {
    id: 'notif-minimal',
    name: 'Minimal Notification',
    category: 'notifications',
    tags: ['minimal', 'clean', 'simple'],
    difficulty: 'beginner',
    description: 'A clean, minimal notification with subtle styling.',
    cssCode: `.notif-minimal {
  color: #94a3b8;
  padding: 10px 0;
  font-size: 13px;
  border-bottom: 1px solid #1e293b;
  animation: minFade 0.5s ease-out;
  display: flex;
  align-items: center;
  gap: 8px;
}
.notif-minimal::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  flex-shrink: 0;
}
@keyframes minFade {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}`,
    htmlCode: `<div class="notif-minimal">Project deployed successfully</div>`,
    isNew: true,
  },
];
