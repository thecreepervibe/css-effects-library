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

export const effectsTextBatch: CSSEffect[] = [
  {
    id: 'wave-text',
    name: 'Wave Text',
    category: 'text',
    tags: ['animated', 'wave', 'text'],
    difficulty: 'intermediate',
    description: 'Text with wave animation on each letter',
    cssCode: `.wave-text {
  display: flex;
  gap: 2px;
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
}
.wave-text span {
  animation: wave 1.5s ease-in-out infinite;
  display: inline-block;
}
.wave-text span:nth-child(1) { animation-delay: 0s; }
.wave-text span:nth-child(2) { animation-delay: 0.1s; }
.wave-text span:nth-child(3) { animation-delay: 0.2s; }
.wave-text span:nth-child(4) { animation-delay: 0.3s; }
.wave-text span:nth-child(5) { animation-delay: 0.4s; }
@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`,
    htmlCode: `<div class="wave-text"><span>W</span><span>A</span><span>V</span><span>E</span><span>S</span></div>`,
    isNew: true,
  },
  {
    id: 'bounce-text',
    name: 'Bounce Text',
    category: 'text',
    tags: ['animated', 'bounce', 'text'],
    difficulty: 'beginner',
    description: 'Text that bounces up and down continuously',
    cssCode: `.bounce-text {
  font-size: 2rem;
  font-weight: bold;
  color: #f59e0b;
  animation: bounce-txt 1s ease infinite;
}
@keyframes bounce-txt {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-20px); }
  50% { transform: translateY(-8px); }
  70% { transform: translateY(-14px); }
}`,
    htmlCode: `<div class="bounce-text">Bounce!</div>`,
    isNew: true,
  },
  {
    id: 'glitch-text-2',
    name: 'Glitch Text',
    category: 'text',
    tags: ['animated', 'glitch', 'text', 'distortion'],
    difficulty: 'advanced',
    description: 'Text with a glitch distortion effect using clip-path',
    cssCode: `.glitch-text-2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  position: relative;
}
.glitch-text-2::before,
.glitch-text-2::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.glitch-text-2::before {
  color: #ff00ff;
  animation: glitch-a 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}
.glitch-text-2::after {
  color: #00ffff;
  animation: glitch-b 2s infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}
@keyframes glitch-a {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 2px); }
  40% { transform: translate(3px, -2px); }
  60% { transform: translate(-2px, 1px); }
  80% { transform: translate(2px, -1px); }
  100% { transform: translate(0); }
}
@keyframes glitch-b {
  0% { transform: translate(0); }
  20% { transform: translate(3px, -2px); }
  40% { transform: translate(-3px, 2px); }
  60% { transform: translate(2px, -1px); }
  80% { transform: translate(-2px, 1px); }
  100% { transform: translate(0); }
}`,
    htmlCode: `<div class="glitch-text-2" data-text="GLITCH">GLITCH</div>`,
    isNew: true,
  },
  {
    id: 'blur-reveal-text',
    name: 'Blur Reveal Text',
    category: 'text',
    tags: ['animated', 'blur', 'reveal', 'text'],
    difficulty: 'intermediate',
    description: 'Text that reveals from a blurred state',
    cssCode: `.blur-reveal-text {
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  animation: blur-reveal 1.5s ease-out forwards;
}
@keyframes blur-reveal {
  0% {
    filter: blur(12px);
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    filter: blur(0);
    opacity: 1;
    transform: scale(1);
  }
}`,
    htmlCode: `<div class="blur-reveal-text">Revealed</div>`,
    isNew: true,
  },
  {
    id: 'scramble-text',
    name: 'Scramble Text',
    category: 'text',
    tags: ['animated', 'scramble', 'text', 'decode'],
    difficulty: 'advanced',
    description: 'Text that appears to scramble and decode',
    cssCode: `.scramble-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8b5cf6;
  font-family: monospace;
}
.scramble-text span {
  display: inline-block;
  animation: scramble-char 0.5s steps(1) forwards;
  opacity: 0;
}
.scramble-text span:nth-child(1) { animation-delay: 0s; }
.scramble-text span:nth-child(2) { animation-delay: 0.1s; }
.scramble-text span:nth-child(3) { animation-delay: 0.2s; }
.scramble-text span:nth-child(4) { animation-delay: 0.3s; }
.scramble-text span:nth-child(5) { animation-delay: 0.4s; }
.scramble-text span:nth-child(6) { animation-delay: 0.5s; }
.scramble-text span:nth-child(7) { animation-delay: 0.6s; }
@keyframes scramble-char {
  0% { opacity: 0; transform: translateY(-8px); }
  50% { opacity: 0.5; color: #f59e0b; }
  100% { opacity: 1; transform: translateY(0); color: #8b5cf6; }
}`,
    htmlCode: `<div class="scramble-text"><span>D</span><span>E</span><span>C</span><span>O</span><span>D</span><span>E</span><span>!</span></div>`,
    isNew: true,
  },
  {
    id: 'rotating-words',
    name: 'Rotating Words',
    category: 'text',
    tags: ['animated', 'rotate', 'words', 'text'],
    difficulty: 'intermediate',
    description: 'Words that rotate in and out vertically',
    cssCode: `.rotating-words {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
}
.rotating-words .rw-static {
  color: #94a3b8;
}
.rotating-words .rw-dynamic {
  position: relative;
  height: 2.2rem;
  overflow: hidden;
  display: inline-block;
}
.rotating-words .rw-item {
  color: #10b981;
  display: block;
  height: 2.2rem;
  line-height: 2.2rem;
  animation: rw-spin 3s infinite;
}
@keyframes rw-spin {
  0% { transform: translateY(0); }
  25% { transform: translateY(-100%); }
  50% { transform: translateY(-200%); }
  75% { transform: translateY(-300%); }
  100% { transform: translateY(0); }
}`,
    htmlCode: `<div class="rotating-words"><span class="rw-static">We</span><div class="rw-dynamic"><span class="rw-item">Build</span><span class="rw-item">Ship</span><span class="rw-item">Dream</span><span class="rw-item">Code</span></div></div>`,
    isNew: true,
  },
  {
    id: 'text-stroke-anim',
    name: 'Text Stroke Animation',
    category: 'text',
    tags: ['animated', 'stroke', 'outline', 'text'],
    difficulty: 'intermediate',
    description: 'Text outline that draws itself using stroke-dasharray',
    cssCode: `.text-stroke-anim {
  font-size: 2.5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #10b981;
  animation: stroke-fill 3s ease-in-out infinite alternate;
}
@keyframes stroke-fill {
  0% {
    -webkit-text-stroke: 2px #10b981;
    color: transparent;
  }
  50% {
    -webkit-text-stroke: 2px #10b981;
    color: rgba(16, 185, 129, 0.3);
  }
  100% {
    -webkit-text-stroke: 2px #10b981;
    color: #10b981;
  }
}`,
    htmlCode: `<div class="text-stroke-anim">STROKE</div>`,
    isNew: true,
  },
  {
    id: 'text-fill-anim',
    name: 'Text Fill Animation',
    category: 'text',
    tags: ['animated', 'fill', 'gradient', 'text'],
    difficulty: 'intermediate',
    description: 'Text that fills with a gradient from bottom to top',
    cssCode: `.text-fill-anim {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(to top, #10b981 50%, transparent 50%);
  background-size: 100% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fill-up 2s ease-in-out infinite alternate;
}
@keyframes fill-up {
  0% { background-position: 0% 100%; }
  100% { background-position: 0% 0%; }
}`,
    htmlCode: `<div class="text-fill-anim">FILL UP</div>`,
    isNew: true,
  },
  {
    id: 'liquid-text',
    name: 'Liquid Text',
    category: 'text',
    tags: ['animated', 'liquid', 'wobble', 'text'],
    difficulty: 'advanced',
    description: 'Text with a liquid wobble distortion effect',
    cssCode: `.liquid-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: #3b82f6;
  animation: liquid 3s ease-in-out infinite;
  text-shadow: 2px 2px 0 rgba(59, 130, 246, 0.3);
}
@keyframes liquid {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  25% { transform: scaleX(1.05) scaleY(0.95); }
  50% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.02) scaleY(0.98); }
}`,
    htmlCode: `<div class="liquid-text">LIQUID</div>`,
    isNew: true,
  },
  {
    id: 'neon-flicker',
    name: 'Neon Flicker',
    category: 'text',
    tags: ['animated', 'neon', 'flicker', 'glow', 'text'],
    difficulty: 'intermediate',
    description: 'Neon glowing text with a flicker effect',
    cssCode: `.neon-flicker {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #ff6b9d,
    0 0 82px #ff6b9d,
    0 0 92px #ff6b9d;
  animation: neon-pulse 1.5s ease-in-out infinite alternate;
}
@keyframes neon-pulse {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #ff6b9d,
      0 0 82px #ff6b9d;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`,
    htmlCode: `<div class="neon-flicker">NEON</div>`,
    isNew: true,
  },
  {
    id: 'text-shadow-anim',
    name: 'Text Shadow Animation',
    category: 'text',
    tags: ['animated', 'shadow', '3d', 'text'],
    difficulty: 'beginner',
    description: 'Text with animated shadow creating a 3D depth effect',
    cssCode: `.text-shadow-anim {
  font-size: 2.5rem;
  font-weight: 900;
  color: #f59e0b;
  animation: shadow-shift 2s ease-in-out infinite;
}
@keyframes shadow-shift {
  0% { text-shadow: 1px 1px 0 #b45309, 2px 2px 0 #92400e, 3px 3px 0 #78350f, 4px 4px 0 #451a03; }
  25% { text-shadow: -1px 1px 0 #b45309, -2px 2px 0 #92400e, -3px 3px 0 #78350f, -4px 4px 0 #451a03; }
  50% { text-shadow: -1px -1px 0 #b45309, -2px -2px 0 #92400e, -3px -3px 0 #78350f, -4px -4px 0 #451a03; }
  75% { text-shadow: 1px -1px 0 #b45309, 2px -2px 0 #92400e, 3px -3px 0 #78350f, 4px -4px 0 #451a03; }
  100% { text-shadow: 1px 1px 0 #b45309, 2px 2px 0 #92400e, 3px 3px 0 #78350f, 4px 4px 0 #451a03; }
}`,
    htmlCode: `<div class="text-shadow-anim">DEPTH</div>`,
    isNew: true,
  },
  {
    id: 'text-highlight-sweep',
    name: 'Text Highlight Sweep',
    category: 'text',
    tags: ['animated', 'highlight', 'sweep', 'text'],
    difficulty: 'beginner',
    description: 'A highlight that sweeps across the text',
    cssCode: `.text-highlight-sweep {
  font-size: 2rem;
  font-weight: bold;
  color: #94a3b8;
  position: relative;
  display: inline-block;
}
.text-highlight-sweep::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent);
  animation: highlight-sweep 2s ease-in-out infinite;
}
@keyframes highlight-sweep {
  0% { left: -100%; }
  100% { left: 100%; }
}`,
    htmlCode: `<div class="text-highlight-sweep">HIGHLIGHT</div>`,
    isNew: true,
  },
  {
    id: 'text-color-cycle',
    name: 'Text Color Cycle',
    category: 'text',
    tags: ['animated', 'color', 'cycle', 'rainbow', 'text'],
    difficulty: 'beginner',
    description: 'Text that cycles through rainbow colors',
    cssCode: `.text-color-cycle {
  font-size: 2rem;
  font-weight: bold;
  animation: color-cycle 4s linear infinite;
}
@keyframes color-cycle {
  0% { color: #ef4444; }
  16% { color: #f59e0b; }
  33% { color: #10b981; }
  50% { color: #3b82f6; }
  66% { color: #8b5cf6; }
  83% { color: #ec4899; }
  100% { color: #ef4444; }
}`,
    htmlCode: `<div class="text-color-cycle">RAINBOW</div>`,
    isNew: true,
  },
  {
    id: 'retro-text',
    name: 'Retro Text',
    category: 'text',
    tags: ['retro', 'vintage', 'styled', 'text'],
    difficulty: 'intermediate',
    description: 'Retro vintage style text with layered shadows',
    cssCode: `.retro-text {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fbbf24;
  text-shadow:
    3px 3px 0 #f97316,
    6px 6px 0 #ef4444,
    9px 9px 0 #8b5cf6,
    12px 12px 0 rgba(0, 0, 0, 0.3);
  letter-spacing: 4px;
  text-transform: uppercase;
}`,
    htmlCode: `<div class="retro-text">RETRO</div>`,
    isNew: true,
  },
  {
    id: 'pixel-text',
    name: 'Pixel Text',
    category: 'text',
    tags: ['pixel', 'retro', 'styled', 'text'],
    difficulty: 'intermediate',
    description: 'Pixel art style text with blocky rendering',
    cssCode: `.pixel-text {
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  font-family: monospace;
  letter-spacing: 6px;
  text-shadow:
    4px 0 0 #10b981,
    -4px 0 0 #10b981,
    0 4px 0 #10b981,
    0 -4px 0 #10b981;
  image-rendering: pixelated;
  animation: pixel-blink 1s steps(2) infinite;
}
@keyframes pixel-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; text-shadow: 4px 0 0 #059669, -4px 0 0 #059669, 0 4px 0 #059669, 0 -4px 0 #059669; }
}`,
    htmlCode: `<div class="pixel-text">PIXEL</div>`,
    isNew: true,
  },
  {
    id: 'text-reveal-mask',
    name: 'Text Reveal Mask',
    category: 'text',
    tags: ['animated', 'mask', 'reveal', 'text'],
    difficulty: 'advanced',
    description: 'Text revealed through an expanding circular mask',
    cssCode: `.text-reveal-mask {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  clip-path: circle(0% at 50% 50%);
  animation: mask-reveal 2s ease-out forwards;
}
@keyframes mask-reveal {
  0% { clip-path: circle(0% at 50% 50%); }
  100% { clip-path: circle(75% at 50% 50%); }
}`,
    htmlCode: `<div class="text-reveal-mask">REVEAL</div>`,
    isNew: true,
  },
  {
    id: 'text-vaporize',
    name: 'Text Vaporize',
    category: 'text',
    tags: ['animated', 'vaporize', 'dissolve', 'text'],
    difficulty: 'advanced',
    description: 'Text that vaporizes and fades away',
    cssCode: `.text-vaporize {
  font-size: 2rem;
  font-weight: bold;
  color: #8b5cf6;
  animation: vaporize 3s ease-in-out infinite;
  filter: blur(0);
}
@keyframes vaporize {
  0%, 60% { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
  80% { opacity: 0.5; filter: blur(2px); transform: translateY(-10px) scale(1.05); }
  100% { opacity: 0; filter: blur(8px); transform: translateY(-30px) scale(1.2); }
}`,
    htmlCode: `<div class="text-vaporize">VANISH</div>`,
    isNew: true,
  },
  {
    id: 'text-flip-in',
    name: 'Text Flip In',
    category: 'text',
    tags: ['animated', 'flip', 'entrance', 'text'],
    difficulty: 'beginner',
    description: 'Text that flips in from the back',
    cssCode: `.text-flip-in {
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  animation: flip-in 0.8s ease-out forwards;
  perspective: 400px;
}
@keyframes flip-in {
  0% { transform: rotateX(90deg); opacity: 0; }
  40% { transform: rotateX(-10deg); }
  70% { transform: rotateX(5deg); }
  100% { transform: rotateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-flip-in">FLIP IN</div>`,
    isNew: true,
  },
  {
    id: 'text-zoom',
    name: 'Text Zoom',
    category: 'text',
    tags: ['animated', 'zoom', 'scale', 'text'],
    difficulty: 'beginner',
    description: 'Text that zooms in from a distance',
    cssCode: `.text-zoom {
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  animation: zoom-in 1s ease-out forwards;
}
@keyframes zoom-in {
  0% { transform: scale(0.2); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="text-zoom">ZOOM</div>`,
    isNew: true,
  },
  {
    id: 'text-marquee',
    name: 'Text Marquee',
    category: 'text',
    tags: ['animated', 'marquee', 'scroll', 'text'],
    difficulty: 'beginner',
    description: 'Continuously scrolling text like a marquee',
    cssCode: `.text-marquee {
  overflow: hidden;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
}
.text-marquee span {
  display: inline-block;
  white-space: nowrap;
  animation: marquee-scroll 8s linear infinite;
}
@keyframes marquee-scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}`,
    htmlCode: `<div class="text-marquee"><span>Scrolling marquee text that loops forever &bull;</span></div>`,
    isNew: true,
  },
  {
    id: 'text-gradient-slide',
    name: 'Text Gradient Slide',
    category: 'text',
    tags: ['animated', 'gradient', 'slide', 'text'],
    difficulty: 'intermediate',
    description: 'Text with a sliding gradient background',
    cssCode: `.text-gradient-slide {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-slide 4s linear infinite;
}
@keyframes gradient-slide {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<div class="text-gradient-slide">GRADIENT</div>`,
    isNew: true,
  },
  {
    id: 'text-blur-in',
    name: 'Text Blur In',
    category: 'text',
    tags: ['animated', 'blur', 'entrance', 'text'],
    difficulty: 'beginner',
    description: 'Text that fades in from a blurred state',
    cssCode: `.text-blur-in {
  font-size: 2rem;
  font-weight: bold;
  color: #ec4899;
  animation: blur-in 1.2s ease-out forwards;
}
@keyframes blur-in {
  0% { filter: blur(15px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-blur-in">FOCUS</div>`,
    isNew: true,
  },
  {
    id: 'text-scale-loop',
    name: 'Text Scale Loop',
    category: 'text',
    tags: ['animated', 'scale', 'loop', 'pulse', 'text'],
    difficulty: 'beginner',
    description: 'Text that continuously scales up and down',
    cssCode: `.text-scale-loop {
  font-size: 2rem;
  font-weight: bold;
  color: #f59e0b;
  animation: scale-loop 2s ease-in-out infinite;
}
@keyframes scale-loop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}`,
    htmlCode: `<div class="text-scale-loop">PULSE</div>`,
    isNew: true,
  },
  {
    id: 'text-shake',
    name: 'Text Shake',
    category: 'text',
    tags: ['animated', 'shake', 'vibrate', 'text'],
    difficulty: 'beginner',
    description: 'Text that shakes and vibrates',
    cssCode: `.text-shake {
  font-size: 2rem;
  font-weight: bold;
  color: #ef4444;
  animation: shake 0.5s ease-in-out infinite;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-4px) rotate(-1deg); }
  20% { transform: translateX(4px) rotate(1deg); }
  30% { transform: translateX(-4px) rotate(0); }
  40% { transform: translateX(4px) rotate(1deg); }
  50% { transform: translateX(-2px) rotate(-1deg); }
  60% { transform: translateX(2px) rotate(0); }
  70% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  90% { transform: translateX(-1px); }
}`,
    htmlCode: `<div class="text-shake">SHAKE!</div>`,
    isNew: true,
  },
  {
    id: 'text-drop-in',
    name: 'Text Drop In',
    category: 'text',
    tags: ['animated', 'drop', 'fall', 'entrance', 'text'],
    difficulty: 'beginner',
    description: 'Text that drops in from above with a bounce',
    cssCode: `.text-drop-in {
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  animation: drop-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes drop-in {
  0% { transform: translateY(-80px); opacity: 0; }
  60% { transform: translateY(8px); opacity: 1; }
  80% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}`,
    htmlCode: `<div class="text-drop-in">DROP</div>`,
    isNew: true,
  },
  {
    id: 'text-swing',
    name: 'Text Swing',
    category: 'text',
    tags: ['animated', 'swing', 'pendulum', 'text'],
    difficulty: 'intermediate',
    description: 'Text that swings like a pendulum',
    cssCode: `.text-swing {
  font-size: 2rem;
  font-weight: bold;
  color: #f59e0b;
  transform-origin: top center;
  animation: swing 1.5s ease-in-out infinite;
}
@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-3deg); }
}`,
    htmlCode: `<div class="text-swing">SWING</div>`,
    isNew: true,
  },
  {
    id: 'text-rubber-band',
    name: 'Text Rubber Band',
    category: 'text',
    tags: ['animated', 'rubber', 'stretch', 'elastic', 'text'],
    difficulty: 'intermediate',
    description: 'Text that stretches like a rubber band',
    cssCode: `.text-rubber-band {
  font-size: 2rem;
  font-weight: bold;
  color: #8b5cf6;
  animation: rubber-band 1s ease-in-out;
  transform-origin: center;
}
@keyframes rubber-band {
  0% { transform: scaleX(1) scaleY(1); }
  30% { transform: scaleX(1.25) scaleY(0.75); }
  40% { transform: scaleX(0.75) scaleY(1.25); }
  50% { transform: scaleX(1.15) scaleY(0.85); }
  65% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.05) scaleY(0.95); }
  100% { transform: scaleX(1) scaleY(1); }
}`,
    htmlCode: `<div class="text-rubber-band">STRETCH</div>`,
    isNew: true,
  },
  {
    id: 'text-jello',
    name: 'Text Jello',
    category: 'text',
    tags: ['animated', 'jello', 'wobble', 'text'],
    difficulty: 'intermediate',
    description: 'Text that wobbles like jello',
    cssCode: `.text-jello {
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  animation: jello 1s ease-in-out infinite;
  transform-origin: center;
}
@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg); }
  15% { transform: skewX(-8deg) skewY(-8deg); }
  30% { transform: skewX(5deg) skewY(5deg); }
  45% { transform: skewX(-3deg) skewY(-3deg); }
  60% { transform: skewX(2deg) skewY(2deg); }
  75% { transform: skewX(-1deg) skewY(-1deg); }
}`,
    htmlCode: `<div class="text-jello">JELLO</div>`,
    isNew: true,
  },
  {
    id: 'text-fade-stagger',
    name: 'Text Fade Stagger',
    category: 'text',
    tags: ['animated', 'fade', 'stagger', 'entrance', 'text'],
    difficulty: 'intermediate',
    description: 'Letters that fade in with a staggered delay',
    cssCode: `.text-fade-stagger {
  display: flex;
  gap: 4px;
  font-size: 2rem;
  font-weight: bold;
  color: #f59e0b;
}
.text-fade-stagger span {
  opacity: 0;
  animation: fade-in-letter 0.6s ease forwards;
}
.text-fade-stagger span:nth-child(1) { animation-delay: 0s; }
.text-fade-stagger span:nth-child(2) { animation-delay: 0.1s; }
.text-fade-stagger span:nth-child(3) { animation-delay: 0.2s; }
.text-fade-stagger span:nth-child(4) { animation-delay: 0.3s; }
.text-fade-stagger span:nth-child(5) { animation-delay: 0.4s; }
@keyframes fade-in-letter {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="text-fade-stagger"><span>F</span><span>A</span><span>D</span><span>E</span><span>S</span></div>`,
    isNew: true,
  },
  {
    id: 'text-slide-left',
    name: 'Text Slide Left',
    category: 'text',
    tags: ['animated', 'slide', 'left', 'entrance', 'text'],
    difficulty: 'beginner',
    description: 'Text that slides in from the left',
    cssCode: `.text-slide-left {
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  animation: slide-left 0.8s ease-out forwards;
  overflow: hidden;
}
@keyframes slide-left {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-slide-left">SLIDE IN</div>`,
    isNew: true,
  },
  {
    id: 'text-slide-right',
    name: 'Text Slide Right',
    category: 'text',
    tags: ['animated', 'slide', 'right', 'entrance', 'text'],
    difficulty: 'beginner',
    description: 'Text that slides in from the right',
    cssCode: `.text-slide-right {
  font-size: 2rem;
  font-weight: bold;
  color: #3b82f6;
  animation: slide-right 0.8s ease-out forwards;
  overflow: hidden;
}
@keyframes slide-right {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-slide-right">SLIDE IN</div>`,
    isNew: true,
  },
  {
    id: 'text-rotate-in',
    name: 'Text Rotate In',
    category: 'text',
    tags: ['animated', 'rotate', 'entrance', 'text'],
    difficulty: 'beginner',
    description: 'Text that rotates in from a tilted angle',
    cssCode: `.text-rotate-in {
  font-size: 2rem;
  font-weight: bold;
  color: #ec4899;
  animation: rotate-in 0.8s ease-out forwards;
}
@keyframes rotate-in {
  0% { transform: rotate(-200deg); opacity: 0; }
  100% { transform: rotate(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-rotate-in">ROTATE</div>`,
    isNew: true,
  },
  {
    id: 'text-roll-in',
    name: 'Text Roll In',
    category: 'text',
    tags: ['animated', 'roll', 'entrance', 'text'],
    difficulty: 'intermediate',
    description: 'Text that rolls in from the side with rotation',
    cssCode: `.text-roll-in {
  font-size: 2rem;
  font-weight: bold;
  color: #f59e0b;
  animation: roll-in 1s ease-out forwards;
}
@keyframes roll-in {
  0% { transform: translateX(-100%) rotate(-720deg); opacity: 0; }
  100% { transform: translateX(0) rotate(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-roll-in">ROLL IN</div>`,
    isNew: true,
  },
  {
    id: 'text-wipe',
    name: 'Text Wipe',
    category: 'text',
    tags: ['animated', 'wipe', 'reveal', 'text'],
    difficulty: 'intermediate',
    description: 'Text revealed with a horizontal wipe effect',
    cssCode: `.text-wipe {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.text-wipe::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  animation: wipe-out 2s ease-in-out forwards;
  transform-origin: left;
}
@keyframes wipe-out {
  0% { transform: scaleX(1); }
  100% { transform: scaleX(0); }
}`,
    htmlCode: `<div class="text-wipe">WIPE REVEAL</div>`,
    isNew: true,
  },
  {
    id: 'text-expanding-outline',
    name: 'Text Expanding Outline',
    category: 'text',
    tags: ['animated', 'outline', 'expand', 'text'],
    difficulty: 'intermediate',
    description: 'Text outline that expands outward and fades',
    cssCode: `.text-expanding-outline {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  position: relative;
  display: inline-block;
}
.text-expanding-outline::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  -webkit-text-stroke: 1px #10b981;
  animation: expand-outline 2s ease-out infinite;
}
@keyframes expand-outline {
  0% { transform: scale(1); opacity: 0.8; -webkit-text-stroke: 1px #10b981; }
  100% { transform: scale(1.3); opacity: 0; -webkit-text-stroke: 2px #10b981; }
}`,
    htmlCode: `<div class="text-expanding-outline" data-text="PULSE">PULSE</div>`,
    isNew: true,
  },
  {
    id: 'text-fill-up',
    name: 'Text Fill Up',
    category: 'text',
    tags: ['animated', 'fill', 'water', 'text'],
    difficulty: 'intermediate',
    description: 'Text that fills with color from bottom to top like water',
    cssCode: `.text-fill-up {
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 1px #3b82f6;
}
.text-fill-up::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #3b82f6;
  clip-path: inset(100% 0 0 0);
  animation: fill-up-water 3s ease-in-out infinite;
}
@keyframes fill-up-water {
  0% { clip-path: inset(100% 0 0 0); }
  50% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(100% 0 0 0); }
}`,
    htmlCode: `<div class="text-fill-up" data-text="FILL">FILL</div>`,
    isNew: true,
  },
  {
    id: 'text-slice',
    name: 'Text Slice',
    category: 'text',
    tags: ['animated', 'slice', 'split', 'text'],
    difficulty: 'advanced',
    description: 'Text sliced horizontally with offset animation',
    cssCode: `.text-slice {
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  color: #ef4444;
  display: inline-block;
}
.text-slice::before,
.text-slice::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.text-slice::before {
  clip-path: inset(0 0 50% 0);
  animation: slice-top 2s ease-in-out infinite;
  color: #ef4444;
}
.text-slice::after {
  clip-path: inset(50% 0 0 0);
  animation: slice-bottom 2s ease-in-out infinite;
  color: #ef4444;
}
@keyframes slice-top {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-6px); }
}
@keyframes slice-bottom {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}`,
    htmlCode: `<div class="text-slice" data-text="SLICE">SLICE</div>`,
    isNew: true,
  },
  {
    id: 'text-cascade',
    name: 'Text Cascade',
    category: 'text',
    tags: ['animated', 'cascade', 'stagger', 'text'],
    difficulty: 'intermediate',
    description: 'Text letters that cascade down one by one',
    cssCode: `.text-cascade {
  display: flex;
  gap: 2px;
  font-size: 2rem;
  font-weight: bold;
}
.text-cascade span {
  display: inline-block;
  color: #8b5cf6;
  animation: cascade-drop 0.6s ease forwards;
  opacity: 0;
}
.text-cascade span:nth-child(1) { animation-delay: 0s; }
.text-cascade span:nth-child(2) { animation-delay: 0.08s; }
.text-cascade span:nth-child(3) { animation-delay: 0.16s; }
.text-cascade span:nth-child(4) { animation-delay: 0.24s; }
.text-cascade span:nth-child(5) { animation-delay: 0.32s; }
.text-cascade span:nth-child(6) { animation-delay: 0.40s; }
.text-cascade span:nth-child(7) { animation-delay: 0.48s; }
@keyframes cascade-drop {
  0% { opacity: 0; transform: translateY(-40px) rotate(10deg); }
  60% { transform: translateY(5px) rotate(-2deg); }
  100% { opacity: 1; transform: translateY(0) rotate(0); }
}`,
    htmlCode: `<div class="text-cascade"><span>C</span><span>A</span><span>S</span><span>C</span><span>A</span><span>D</span><span>E</span></div>`,
    isNew: true,
  },
  {
    id: 'text-spotlight',
    name: 'Text Spotlight',
    category: 'text',
    tags: ['animated', 'spotlight', 'light', 'text'],
    difficulty: 'intermediate',
    description: 'A spotlight that moves across the text',
    cssCode: `.text-spotlight {
  font-size: 2.5rem;
  font-weight: 900;
  color: #334155;
  position: relative;
  background: linear-gradient(90deg, #334155 0%, #334155 40%, #10b981 50%, #334155 60%, #334155 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: spotlight-move 3s ease-in-out infinite;
}
@keyframes spotlight-move {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`,
    htmlCode: `<div class="text-spotlight">SPOTLIGHT</div>`,
    isNew: true,
  },
  {
    id: 'text-smoke',
    name: 'Text Smoke',
    category: 'text',
    tags: ['animated', 'smoke', 'fade', 'text'],
    difficulty: 'advanced',
    description: 'Text that appears to emit smoke and dissolve upward',
    cssCode: `.text-smoke {
  font-size: 2rem;
  font-weight: bold;
  color: #94a3b8;
  position: relative;
  display: inline-block;
}
.text-smoke::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #94a3b8;
  animation: smoke-rise 3s ease-in-out infinite;
  filter: blur(0);
}
@keyframes smoke-rise {
  0%, 40% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  70% { opacity: 0.4; transform: translateY(-20px) scale(1.1); filter: blur(3px); }
  100% { opacity: 0; transform: translateY(-40px) scale(1.2); filter: blur(6px); }
}`,
    htmlCode: `<div class="text-smoke" data-text="SMOKE">SMOKE</div>`,
    isNew: true,
  },
  {
    id: 'text-fire',
    name: 'Text Fire',
    category: 'text',
    tags: ['styled', 'fire', 'flame', 'text'],
    difficulty: 'advanced',
    description: 'Text with a fiery gradient and flicker effect',
    cssCode: `.text-fire {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(to top, #f97316, #ef4444, #fbbf24);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  position: relative;
  animation: fire-flicker 0.15s ease-in-out infinite alternate;
  filter: brightness(1);
}
@keyframes fire-flicker {
  0% { filter: brightness(1); transform: translateY(0); }
  100% { filter: brightness(1.2); transform: translateY(-1px); }
}
.text-fire::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 10%;
  width: 80%;
  height: 10px;
  background: radial-gradient(ellipse, rgba(249, 115, 22, 0.4), transparent);
  filter: blur(4px);
  animation: fire-glow 0.8s ease-in-out infinite alternate;
}
@keyframes fire-glow {
  0% { opacity: 0.4; transform: scaleX(0.9); }
  100% { opacity: 0.8; transform: scaleX(1.1); }
}`,
    htmlCode: `<div class="text-fire">FIRE</div>`,
    isNew: true,
  },
  {
    id: 'text-ice',
    name: 'Text Ice',
    category: 'text',
    tags: ['styled', 'ice', 'frost', 'cold', 'text'],
    difficulty: 'intermediate',
    description: 'Text with a frosty icy appearance',
    cssCode: `.text-ice {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(180deg, #e0f2fe, #7dd3fc, #0ea5e9, #0369a1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  position: relative;
  animation: ice-shimmer 3s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.4));
}
@keyframes ice-shimmer {
  0%, 100% { filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.4)); }
  50% { filter: drop-shadow(0 0 16px rgba(125, 211, 252, 0.6)); }
}`,
    htmlCode: `<div class="text-ice">FROST</div>`,
    isNew: true,
  },
  {
    id: 'text-metal',
    name: 'Text Metal',
    category: 'text',
    tags: ['styled', 'metal', 'chrome', 'text'],
    difficulty: 'intermediate',
    description: 'Text with a metallic chrome appearance',
    cssCode: `.text-metal {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 25%, #e2e8f0 50%, #64748b 75%, #e2e8f0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5));
  letter-spacing: 3px;
}`,
    htmlCode: `<div class="text-metal">METAL</div>`,
    isNew: true,
  },
  {
    id: 'text-electric',
    name: 'Text Electric',
    category: 'text',
    tags: ['animated', 'electric', 'lightning', 'text'],
    difficulty: 'advanced',
    description: 'Text with an electric lightning effect',
    cssCode: `.text-electric {
  font-size: 2.5rem;
  font-weight: 900;
  color: #38bdf8;
  text-shadow:
    0 0 5px #38bdf8,
    0 0 10px #38bdf8,
    0 0 20px #0284c7,
    0 0 40px #0284c7;
  animation: electric-pulse 0.1s steps(2) infinite, electric-glow 1.5s ease-in-out infinite alternate;
}
@keyframes electric-pulse {
  0% { transform: translate(0); }
  50% { transform: translate(1px, -1px); }
}
@keyframes electric-glow {
  0% { text-shadow: 0 0 5px #38bdf8, 0 0 10px #38bdf8, 0 0 20px #0284c7; }
  100% { text-shadow: 0 0 10px #38bdf8, 0 0 20px #38bdf8, 0 0 40px #0284c7, 0 0 60px #0284c7; }
}`,
    htmlCode: `<div class="text-electric">ZAP!</div>`,
    isNew: true,
  },
  {
    id: 'text-glitch-3',
    name: 'Text Glitch V3',
    category: 'text',
    tags: ['animated', 'glitch', 'distortion', 'text'],
    difficulty: 'advanced',
    description: 'Text with a horizontal slice glitch effect',
    cssCode: `.text-glitch-3 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  position: relative;
  animation: glitch-shift 3s infinite;
}
.text-glitch-3::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 2px;
  color: #ff00ff;
  clip-path: inset(20% 0 60% 0);
  animation: glitch-slice-a 2s infinite linear alternate-reverse;
}
.text-glitch-3::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: -2px;
  color: #00ffff;
  clip-path: inset(60% 0 10% 0);
  animation: glitch-slice-b 2s infinite linear alternate-reverse;
}
@keyframes glitch-slice-a {
  0% { clip-path: inset(20% 0 60% 0); transform: translate(0); }
  25% { clip-path: inset(40% 0 30% 0); transform: translate(-4px, 2px); }
  50% { clip-path: inset(10% 0 70% 0); transform: translate(3px, -1px); }
  75% { clip-path: inset(50% 0 20% 0); transform: translate(-2px, 1px); }
  100% { clip-path: inset(20% 0 60% 0); transform: translate(0); }
}
@keyframes glitch-slice-b {
  0% { clip-path: inset(60% 0 10% 0); transform: translate(0); }
  25% { clip-path: inset(30% 0 40% 0); transform: translate(3px, -2px); }
  50% { clip-path: inset(70% 0 5% 0); transform: translate(-4px, 1px); }
  75% { clip-path: inset(20% 0 50% 0); transform: translate(2px, -1px); }
  100% { clip-path: inset(60% 0 10% 0); transform: translate(0); }
}`,
    htmlCode: `<div class="text-glitch-3" data-text="GLITCH">GLITCH</div>`,
    isNew: true,
  },
  {
    id: 'text-split-rows',
    name: 'Text Split Rows',
    category: 'text',
    tags: ['animated', 'split', 'rows', 'entrance', 'text'],
    difficulty: 'intermediate',
    description: 'Text split into rows that animate in from opposite sides',
    cssCode: `.text-split-rows {
  text-align: center;
  overflow: hidden;
}
.text-split-rows .row-top {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  animation: split-left 0.8s ease-out forwards;
}
.text-split-rows .row-bottom {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  color: #3b82f6;
  animation: split-right 0.8s ease-out forwards;
}
@keyframes split-left {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes split-right {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="text-split-rows"><span class="row-top">SPLIT</span><span class="row-bottom">APART</span></div>`,
    isNew: true,
  },
  {
    id: 'text-ripple',
    name: 'Text Ripple',
    category: 'text',
    tags: ['animated', 'ripple', 'wave', 'text'],
    difficulty: 'intermediate',
    description: 'Text with a ripple effect on each letter',
    cssCode: `.text-ripple {
  display: flex;
  gap: 2px;
  font-size: 2rem;
  font-weight: bold;
}
.text-ripple span {
  display: inline-block;
  color: #3b82f6;
  animation: ripple-letter 2s ease-in-out infinite;
}
.text-ripple span:nth-child(1) { animation-delay: 0s; }
.text-ripple span:nth-child(2) { animation-delay: 0.15s; }
.text-ripple span:nth-child(3) { animation-delay: 0.3s; }
.text-ripple span:nth-child(4) { animation-delay: 0.45s; }
.text-ripple span:nth-child(5) { animation-delay: 0.6s; }
.text-ripple span:nth-child(6) { animation-delay: 0.75s; }
@keyframes ripple-letter {
  0%, 100% { transform: translateY(0) scale(1); color: #3b82f6; }
  25% { transform: translateY(-6px) scale(1.1); color: #60a5fa; }
  50% { transform: translateY(0) scale(1); color: #3b82f6; }
}`,
    htmlCode: `<div class="text-ripple"><span>R</span><span>I</span><span>P</span><span>P</span><span>L</span><span>E</span></div>`,
    isNew: true,
  },
  {
    id: 'text-typewriter-2',
    name: 'Text Typewriter',
    category: 'text',
    tags: ['animated', 'typewriter', 'typing', 'text'],
    difficulty: 'intermediate',
    description: 'Text that types out letter by letter with a cursor',
    cssCode: `.text-typewriter-2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
  font-family: monospace;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #10b981;
  width: 0;
  animation: typing 3s steps(12) forwards, blink-cursor 0.7s step-end infinite;
}
@keyframes typing {
  0% { width: 0; }
  100% { width: 12ch; }
}
@keyframes blink-cursor {
  0%, 100% { border-color: #10b981; }
  50% { border-color: transparent; }
}`,
    htmlCode: `<div class="text-typewriter-2">hello world_</div>`,
    isNew: true,
  },
  {
    id: 'text-bounce-letters',
    name: 'Text Bounce Letters',
    category: 'text',
    tags: ['animated', 'bounce', 'letters', 'stagger', 'text'],
    difficulty: 'intermediate',
    description: 'Each letter bounces up independently with stagger',
    cssCode: `.text-bounce-letters {
  display: flex;
  gap: 4px;
  font-size: 2rem;
  font-weight: bold;
}
.text-bounce-letters span {
  display: inline-block;
  color: #f59e0b;
  animation: bounce-letter 1.5s ease infinite;
}
.text-bounce-letters span:nth-child(1) { animation-delay: 0s; }
.text-bounce-letters span:nth-child(2) { animation-delay: 0.1s; }
.text-bounce-letters span:nth-child(3) { animation-delay: 0.2s; }
.text-bounce-letters span:nth-child(4) { animation-delay: 0.3s; }
.text-bounce-letters span:nth-child(5) { animation-delay: 0.4s; }
.text-bounce-letters span:nth-child(6) { animation-delay: 0.5s; }
@keyframes bounce-letter {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-18px); }
}`,
    htmlCode: `<div class="text-bounce-letters"><span>B</span><span>O</span><span>U</span><span>N</span><span>C</span><span>E</span></div>`,
    isNew: true,
  },
  {
    id: 'text-3d-rotate',
    name: 'Text 3D Rotate',
    category: 'text',
    tags: ['animated', '3d', 'rotate', 'perspective', 'text'],
    difficulty: 'advanced',
    description: 'Text with a 3D rotating perspective effect',
    cssCode: `.text-3d-rotate {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  perspective: 500px;
}
.text-3d-rotate span {
  display: inline-block;
  animation: rotate-3d 3s ease-in-out infinite;
  transform-style: preserve-3d;
}
.text-3d-rotate span:nth-child(1) { animation-delay: 0s; }
.text-3d-rotate span:nth-child(2) { animation-delay: 0.1s; }
.text-3d-rotate span:nth-child(3) { animation-delay: 0.2s; }
.text-3d-rotate span:nth-child(4) { animation-delay: 0.3s; }
@keyframes rotate-3d {
  0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
  25% { transform: rotateY(20deg) rotateX(10deg); }
  50% { transform: rotateY(0deg) rotateX(-5deg); }
  75% { transform: rotateY(-20deg) rotateX(5deg); }
}`,
    htmlCode: `<div class="text-3d-rotate"><span>3</span><span>D</span><span>&nbsp;</span><span>!</span></div>`,
    isNew: true,
  },
];
