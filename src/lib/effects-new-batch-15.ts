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

export const effectsNewBatch15: CSSEffect[] = [
  // ==================== BACKGROUNDS (20) ====================
  {
    id: 'bg-mesh-gradient-anim',
    name: 'Mesh Gradient Animated',
    category: 'backgrounds',
    tags: ['background', 'gradient', 'mesh', 'animated', 'colorful'],
    difficulty: 'intermediate',
    description: 'An animated mesh gradient background with smoothly shifting color blobs',
    cssCode: `.bg-mesh-gradient-anim {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-mesh-gradient-anim::before {
  content: ''; position: absolute; inset: -50%;
  background:
    radial-gradient(circle at 30% 40%, #10b98155, transparent 50%),
    radial-gradient(circle at 70% 60%, #3b82f655, transparent 50%),
    radial-gradient(circle at 50% 80%, #8b5cf655, transparent 50%);
  animation: mesh-drift 8s ease-in-out infinite;
}
@keyframes mesh-drift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(5%, -5%) rotate(120deg); }
  66% { transform: translate(-5%, 5%) rotate(240deg); }
}`,
    htmlCode: `<div class="bg-mesh-gradient-anim"></div>`,
    isNew: true,
  },
  {
    id: 'bg-plasma-field',
    name: 'Plasma Field',
    category: 'backgrounds',
    tags: ['background', 'plasma', 'energy', 'animated', 'glow'],
    difficulty: 'advanced',
    description: 'A dynamic plasma field background with swirling energy patterns',
    cssCode: `.bg-plasma-field {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-plasma-field::before, .bg-plasma-field::after {
  content: ''; position: absolute; inset: 0;
}
.bg-plasma-field::before {
  background: conic-gradient(from 0deg at 50% 50%, #10b98133, #3b82f633, #8b5cf633, #10b98133);
  animation: plasma-spin 4s linear infinite;
  filter: blur(30px);
}
.bg-plasma-field::after {
  background: conic-gradient(from 180deg at 50% 50%, #ef444433, #f59e0b33, #10b98133, #ef444433);
  animation: plasma-spin 6s linear infinite reverse;
  filter: blur(40px);
}
@keyframes plasma-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="bg-plasma-field"></div>`,
    isNew: true,
  },
  {
    id: 'bg-lava-lamp',
    name: 'Lava Lamp',
    category: 'backgrounds',
    tags: ['background', 'lava', 'blob', 'retro', 'animated'],
    difficulty: 'intermediate',
    description: 'A retro lava lamp background with floating, morphing blobs of color',
    cssCode: `.bg-lava-lamp {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-lava-lamp-blob {
  position: absolute; border-radius: 50%;
  filter: blur(20px);
}
.bg-lava-lamp-blob:nth-child(1) {
  width: 120px; height: 120px; background: #10b98188;
  top: 20%; left: 30%;
  animation: lava-float 6s ease-in-out infinite;
}
.bg-lava-lamp-blob:nth-child(2) {
  width: 90px; height: 90px; background: #3b82f688;
  top: 50%; left: 60%;
  animation: lava-float 8s ease-in-out infinite reverse;
}
@keyframes lava-float {
  0%, 100% { transform: translate(0, 0) scale(1); border-radius: 50%; }
  25% { transform: translate(20px, -30px) scale(1.2); border-radius: 40% 60% 50% 50%; }
  50% { transform: translate(-15px, 20px) scale(0.9); border-radius: 60% 40% 50% 50%; }
  75% { transform: translate(10px, 15px) scale(1.1); border-radius: 45% 55% 40% 60%; }
}`,
    htmlCode: `<div class="bg-lava-lamp"><div class="bg-lava-lamp-blob"></div><div class="bg-lava-lamp-blob"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-bubble-float',
    name: 'Bubble Float',
    category: 'backgrounds',
    tags: ['background', 'bubble', 'float', 'underwater', 'animated'],
    difficulty: 'beginner',
    description: 'Floating bubbles rising upward in an underwater-like background',
    cssCode: `.bg-bubble-float {
  width: 100%; height: 100%;
  background: linear-gradient(180deg, #0a0a1a, #0f1a2e);
  position: relative; overflow: hidden;
}
.bg-bubble {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #10b98144, #10b98111);
  border: 1px solid #10b98133;
  animation: bubble-rise linear infinite;
}
.bg-bubble:nth-child(1) { width: 20px; height: 20px; left: 20%; animation-duration: 5s; }
.bg-bubble:nth-child(2) { width: 14px; height: 14px; left: 50%; animation-duration: 7s; animation-delay: 1s; }
.bg-bubble:nth-child(3) { width: 24px; height: 24px; left: 75%; animation-duration: 6s; animation-delay: 2s; }
@keyframes bubble-rise {
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 0.8; }
  100% { transform: translateY(-120%) scale(1); opacity: 0; }
}`,
    htmlCode: `<div class="bg-bubble-float"><div class="bg-bubble"></div><div class="bg-bubble"></div><div class="bg-bubble"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-starfield-parallax',
    name: 'Starfield Parallax',
    category: 'backgrounds',
    tags: ['background', 'star', 'space', 'parallax', 'animated'],
    difficulty: 'intermediate',
    description: 'A parallax starfield with multiple layers of twinkling stars at different speeds',
    cssCode: `.bg-starfield-parallax {
  width: 100%; height: 100%;
  background: #050510;
  position: relative; overflow: hidden;
}
.bg-star-layer {
  position: absolute; inset: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, #fff, transparent),
    radial-gradient(1px 1px at 80px 70px, #10b981, transparent),
    radial-gradient(1px 1px at 50px 120px, #fff, transparent),
    radial-gradient(1px 1px at 130px 20px, #10b98188, transparent),
    radial-gradient(1px 1px at 160px 90px, #fff, transparent);
  background-size: 200px 150px;
  animation: star-scroll linear infinite;
}
.bg-star-layer:nth-child(1) { animation-duration: 20s; opacity: 0.6; }
.bg-star-layer:nth-child(2) { animation-duration: 12s; opacity: 0.9; background-position: 50px 50px; }
@keyframes star-scroll { to { background-position: 200px 150px; } }`,
    htmlCode: `<div class="bg-starfield-parallax"><div class="bg-star-layer"></div><div class="bg-star-layer"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-matrix-rain',
    name: 'Matrix Rain',
    category: 'backgrounds',
    tags: ['background', 'matrix', 'rain', 'code', 'animated'],
    difficulty: 'advanced',
    description: 'A Matrix-style digital rain background with cascading green characters',
    cssCode: `.bg-matrix-rain {
  width: 100%; height: 100%;
  background: #0a0a0a;
  position: relative; overflow: hidden;
}
.bg-matrix-rain::before {
  content: '01011010110100101011 11010010110101001010';
  position: absolute; inset: 0;
  font-family: monospace; font-size: 10px; line-height: 14px;
  color: #10b98144;
  word-break: break-all;
  animation: matrix-scroll 4s linear infinite;
}
.bg-matrix-rain::after {
  content: '10110100101101010001 01101001011010100110';
  position: absolute; inset: 0;
  font-family: monospace; font-size: 10px; line-height: 14px;
  color: #10b98188;
  word-break: break-all;
  animation: matrix-scroll 3s linear infinite;
  transform: translateX(15px);
}
@keyframes matrix-scroll {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}`,
    htmlCode: `<div class="bg-matrix-rain"></div>`,
    isNew: true,
  },
  {
    id: 'bg-circuit-board',
    name: 'Circuit Board',
    category: 'backgrounds',
    tags: ['background', 'circuit', 'tech', 'pattern', 'grid'],
    difficulty: 'intermediate',
    description: 'A circuit board pattern background with glowing trace lines and nodes',
    cssCode: `.bg-circuit-board {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-circuit-board::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(#10b98122 1px, transparent 1px),
    linear-gradient(90deg, #10b98122 1px, transparent 1px);
  background-size: 30px 30px;
}
.bg-circuit-board::after {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(circle 2px at 15px 15px, #10b98166, transparent),
    radial-gradient(circle 2px at 45px 45px, #10b98144, transparent);
  background-size: 60px 60px;
  animation: circuit-pulse 3s ease-in-out infinite;
}
@keyframes circuit-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="bg-circuit-board"></div>`,
    isNew: true,
  },
  {
    id: 'bg-topographic-lines',
    name: 'Topographic Lines',
    category: 'backgrounds',
    tags: ['background', 'topo', 'lines', 'contour', 'map'],
    difficulty: 'intermediate',
    description: 'A topographic map-like background with concentric contour lines',
    cssCode: `.bg-topographic-lines {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-topographic-lines::before {
  content: '';
  position: absolute; inset: -20%;
  background:
    radial-gradient(ellipse 80px 60px at 30% 40%, transparent 48px, #10b98122 49px, transparent 50px),
    radial-gradient(ellipse 100px 80px at 30% 40%, transparent 58px, #10b98122 59px, transparent 60px),
    radial-gradient(ellipse 120px 100px at 30% 40%, transparent 68px, #10b98122 69px, transparent 70px),
    radial-gradient(ellipse 70px 90px at 70% 60%, transparent 38px, #10b98133 39px, transparent 40px),
    radial-gradient(ellipse 90px 110px at 70% 60%, transparent 48px, #10b98133 49px, transparent 50px);
  animation: topo-drift 12s ease-in-out infinite;
}
@keyframes topo-drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -10px); }
}`,
    htmlCode: `<div class="bg-topographic-lines"></div>`,
    isNew: true,
  },
  {
    id: 'bg-dna-helix',
    name: 'DNA Helix BG',
    category: 'backgrounds',
    tags: ['background', 'dna', 'helix', 'science', 'animated'],
    difficulty: 'advanced',
    description: 'A DNA double helix pattern animated across the background',
    cssCode: `.bg-dna-helix {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-dna-strand {
  position: absolute; left: 50%; top: 0;
  width: 6px; height: 100%;
  transform: translateX(-20px);
}
.bg-dna-strand:nth-child(2) { transform: translateX(20px); }
.bg-dna-strand::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(180deg, #10b981 0px, #10b981 4px, transparent 4px, transparent 20px);
  animation: dna-scroll 2s linear infinite;
}
.bg-dna-strand:nth-child(2)::before { animation-delay: -1s; }
.bg-dna-rung {
  position: absolute; left: 50%;
  transform: translateX(-50%);
  width: 46px; height: 2px;
  background: linear-gradient(90deg, #10b98188, #3b82f688);
  animation: dna-rung-scroll 2s linear infinite;
}
.bg-dna-rung:nth-child(3) { top: 10%; animation-delay: 0s; }
.bg-dna-rung:nth-child(4) { top: 30%; animation-delay: 0.4s; }
.bg-dna-rung:nth-child(5) { top: 50%; animation-delay: 0.8s; }
.bg-dna-rung:nth-child(6) { top: 70%; animation-delay: 1.2s; }
.bg-dna-rung:nth-child(7) { top: 90%; animation-delay: 1.6s; }
@keyframes dna-scroll { to { background-position: 0 20px; } }
@keyframes dna-rung-scroll {
  0%, 100% { opacity: 0.3; } 50% { opacity: 1; }
}`,
    htmlCode: `<div class="bg-dna-helix"><div class="bg-dna-strand"></div><div class="bg-dna-strand"></div><div class="bg-dna-rung"></div><div class="bg-dna-rung"></div><div class="bg-dna-rung"></div><div class="bg-dna-rung"></div><div class="bg-dna-rung"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-sound-wave',
    name: 'Sound Wave BG',
    category: 'backgrounds',
    tags: ['background', 'sound', 'wave', 'audio', 'animated'],
    difficulty: 'intermediate',
    description: 'An animated sound wave background with oscillating bars',
    cssCode: `.bg-sound-wave {
  width: 100%; height: 100%;
  background: #0a0a1a;
  display: flex; align-items: center; justify-content: center;
  gap: 3px; overflow: hidden;
}
.bg-sound-bar {
  width: 4px; border-radius: 2px;
  background: #10b981;
  animation: sound-pulse 1.2s ease-in-out infinite;
}
.bg-sound-bar:nth-child(1) { animation-delay: 0s; }
.bg-sound-bar:nth-child(2) { animation-delay: 0.1s; }
.bg-sound-bar:nth-child(3) { animation-delay: 0.2s; }
.bg-sound-bar:nth-child(4) { animation-delay: 0.3s; }
.bg-sound-bar:nth-child(5) { animation-delay: 0.4s; }
.bg-sound-bar:nth-child(6) { animation-delay: 0.5s; }
.bg-sound-bar:nth-child(7) { animation-delay: 0.6s; }
.bg-sound-bar:nth-child(8) { animation-delay: 0.7s; }
@keyframes sound-pulse {
  0%, 100% { height: 12px; opacity: 0.4; }
  50% { height: 50px; opacity: 1; }
}`,
    htmlCode: `<div class="bg-sound-wave"><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div><div class="bg-sound-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-heartbeat-pulse',
    name: 'Heartbeat Pulse BG',
    category: 'backgrounds',
    tags: ['background', 'heartbeat', 'pulse', 'medical', 'animated'],
    difficulty: 'intermediate',
    description: 'A heartbeat monitor-style pulse line animated across the background',
    cssCode: `.bg-heartbeat-pulse {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-heartbeat-line {
  position: absolute; top: 50%; left: 0;
  width: 200%; height: 2px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  transform: translateY(-50%);
  animation: heartbeat-scroll 3s linear infinite;
}
.bg-heartbeat-line::before {
  content: '';
  position: absolute; left: 30%; top: -20px;
  width: 60px; height: 42px;
  background: transparent;
  border-top: 2px solid #10b981;
  border-bottom: 2px solid #10b981;
  border-radius: 0;
  clip-path: polygon(0 50%, 15% 50%, 25% 0%, 40% 100%, 55% 20%, 65% 50%, 100% 50%);
  border: none;
  background: #10b981;
}
@keyframes heartbeat-scroll {
  0% { transform: translateY(-50%) translateX(0); }
  100% { transform: translateY(-50%) translateX(-50%); }
}`,
    htmlCode: `<div class="bg-heartbeat-pulse"><div class="bg-heartbeat-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-city-skyline',
    name: 'City Skyline BG',
    category: 'backgrounds',
    tags: ['background', 'city', 'skyline', 'urban', 'night'],
    difficulty: 'intermediate',
    description: 'A night city skyline background with twinkling window lights',
    cssCode: `.bg-city-skyline {
  width: 100%; height: 100%;
  background: linear-gradient(180deg, #0a0a1a 0%, #1a1a2e 60%, #0f0f1a 60%);
  position: relative; overflow: hidden;
}
.bg-city-skyline::before {
  content: '';
  position: absolute; bottom: 40%; left: 0; right: 0;
  height: 60%;
  background:
    linear-gradient(0deg, #1a1a2e, #1a1a2e) 0% 0% / 15px 40% no-repeat,
    linear-gradient(0deg, #1a1a2e, #1a1a2e) 20px 0% / 20px 55% no-repeat,
    linear-gradient(0deg, #1a1a2e, #1a1a2e) 50px 0% / 12px 35% no-repeat,
    linear-gradient(0deg, #1a1a2e, #1a1a2e) 70px 0% / 25px 65% no-repeat,
    linear-gradient(0deg, #1a1a2e, #1a1a2e) 105px 0% / 18px 45% no-repeat;
}
.bg-city-skyline::after {
  content: '';
  position: absolute; bottom: 40%; left: 0; right: 0;
  height: 60%;
  background:
    radial-gradient(1px 1px at 25px 30%, #fbbf2488, transparent),
    radial-gradient(1px 1px at 30px 50%, #fbbf2488, transparent),
    radial-gradient(1px 1px at 80px 25%, #fbbf2488, transparent),
    radial-gradient(1px 1px at 85px 55%, #fbbf2488, transparent),
    radial-gradient(1px 1px at 112px 35%, #fbbf2488, transparent);
  animation: city-twinkle 2s ease-in-out infinite alternate;
}
@keyframes city-twinkle { 0% { opacity: 0.4; } 100% { opacity: 1; } }`,
    htmlCode: `<div class="bg-city-skyline"></div>`,
    isNew: true,
  },
  {
    id: 'bg-mountain-landscape',
    name: 'Mountain Landscape',
    category: 'backgrounds',
    tags: ['background', 'mountain', 'landscape', 'nature', 'scenic'],
    difficulty: 'beginner',
    description: 'A layered mountain landscape background with depth and gradient sky',
    cssCode: `.bg-mountain-landscape {
  width: 100%; height: 100%;
  background: linear-gradient(180deg, #0f0f2e, #1a1a3e, #0a1a2e);
  position: relative; overflow: hidden;
}
.bg-mountain {
  position: absolute; bottom: 0; left: 0; right: 0;
  clip-path: polygon(0% 100%, 0% 70%, 15% 40%, 30% 60%, 45% 30%, 60% 55%, 75% 25%, 90% 50%, 100% 35%, 100% 100%);
  background: linear-gradient(180deg, #1a2a3e, #0a1a2e);
}
.bg-mountain:nth-child(1) { height: 70%; opacity: 0.5; }
.bg-mountain:nth-child(2) {
  height: 55%;
  clip-path: polygon(0% 100%, 0% 60%, 20% 45%, 40% 65%, 55% 40%, 70% 55%, 85% 35%, 100% 50%, 100% 100%);
  background: linear-gradient(180deg, #10b98122, #0a1a2e);
  opacity: 0.7;
}`,
    htmlCode: `<div class="bg-mountain-landscape"><div class="bg-mountain"></div><div class="bg-mountain"></div></div>`,
    isNew: true,
  },
  {
    id: 'bg-underwater-caustics',
    name: 'Underwater Caustics',
    category: 'backgrounds',
    tags: ['background', 'underwater', 'caustics', 'water', 'light'],
    difficulty: 'advanced',
    description: 'An underwater caustic light pattern with rippling refractions',
    cssCode: `.bg-underwater-caustics {
  width: 100%; height: 100%;
  background: linear-gradient(180deg, #041a2e, #0a2a3e);
  position: relative; overflow: hidden;
}
.bg-underwater-caustics::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 40px 30px at 20% 30%, #10b98133, transparent),
    radial-gradient(ellipse 50px 40px at 60% 20%, #3b82f633, transparent),
    radial-gradient(ellipse 35px 45px at 80% 60%, #10b98122, transparent),
    radial-gradient(ellipse 45px 35px at 40% 70%, #3b82f622, transparent);
  animation: caustic-shift 4s ease-in-out infinite;
}
.bg-underwater-caustics::after {
  content: ''; position: absolute; inset: 0;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 8px, #10b98108 8px, #10b98108 9px
  );
  animation: caustic-wave 3s ease-in-out infinite;
}
@keyframes caustic-shift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(10px, -8px) scale(1.1); }
}
@keyframes caustic-wave {
  0%, 100% { transform: skewX(0deg); }
  50% { transform: skewX(2deg); }
}`,
    htmlCode: `<div class="bg-underwater-caustics"></div>`,
    isNew: true,
  },
  {
    id: 'bg-northern-lights',
    name: 'Northern Lights',
    category: 'backgrounds',
    tags: ['background', 'aurora', 'northern', 'lights', 'nature'],
    difficulty: 'advanced',
    description: 'An aurora borealis-inspired background with flowing colored light curtains',
    cssCode: `.bg-northern-lights {
  width: 100%; height: 100%;
  background: linear-gradient(180deg, #050510, #0a0a1a, #0f1a1a);
  position: relative; overflow: hidden;
}
.bg-northern-lights::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(170deg, transparent 30%, #10b98122 40%, transparent 50%),
    linear-gradient(190deg, transparent 35%, #3b82f622 45%, transparent 55%),
    linear-gradient(175deg, transparent 25%, #8b5cf622 38%, transparent 48%);
  animation: aurora-wave 6s ease-in-out infinite;
  filter: blur(15px);
}
.bg-northern-lights::after {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(185deg, transparent 40%, #10b98118 50%, transparent 60%);
  animation: aurora-wave 8s ease-in-out infinite reverse;
  filter: blur(20px);
}
@keyframes aurora-wave {
  0%, 100% { transform: translateX(0) skewX(0deg); opacity: 0.6; }
  50% { transform: translateX(15px) skewX(5deg); opacity: 1; }
}`,
    htmlCode: `<div class="bg-northern-lights"></div>`,
    isNew: true,
  },
  {
    id: 'bg-solar-flare',
    name: 'Solar Flare',
    category: 'backgrounds',
    tags: ['background', 'solar', 'flare', 'sun', 'energy'],
    difficulty: 'intermediate',
    description: 'A solar flare background with radiant burst patterns from a central source',
    cssCode: `.bg-solar-flare {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-solar-flare::before {
  content: ''; position: absolute;
  top: 50%; left: 50%;
  width: 80px; height: 80px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #fbbf24, #f59e0b, #ef4444, transparent);
  border-radius: 50%;
  animation: solar-pulse 3s ease-in-out infinite;
}
.bg-solar-flare::after {
  content: ''; position: absolute;
  top: 50%; left: 50%;
  width: 200%; height: 200%;
  transform: translate(-50%, -50%);
  background: conic-gradient(from 0deg, transparent, #fbbf2422, transparent, #ef444422, transparent, #f59e0b22, transparent);
  animation: solar-rotate 8s linear infinite;
  filter: blur(10px);
}
@keyframes solar-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
}
@keyframes solar-rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }`,
    htmlCode: `<div class="bg-solar-flare"></div>`,
    isNew: true,
  },
  {
    id: 'bg-nebula-cloud',
    name: 'Nebula Cloud',
    category: 'backgrounds',
    tags: ['background', 'nebula', 'cloud', 'space', 'cosmic'],
    difficulty: 'intermediate',
    description: 'A cosmic nebula cloud background with swirling interstellar gases',
    cssCode: `.bg-nebula-cloud {
  width: 100%; height: 100%;
  background: #050510;
  position: relative; overflow: hidden;
}
.bg-nebula-cloud::before {
  content: ''; position: absolute; inset: -30%;
  background:
    radial-gradient(ellipse 120px 80px at 30% 40%, #8b5cf644, transparent),
    radial-gradient(ellipse 100px 120px at 60% 30%, #3b82f633, transparent),
    radial-gradient(ellipse 80px 100px at 45% 70%, #10b98133, transparent);
  animation: nebula-swirl 10s ease-in-out infinite;
  filter: blur(20px);
}
.bg-nebula-cloud::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle 1px at 20% 20%, #fff8, transparent),
    radial-gradient(circle 1px at 80% 15%, #fff6, transparent),
    radial-gradient(circle 1px at 50% 70%, #fff7, transparent),
    radial-gradient(circle 1px at 15% 80%, #fff5, transparent);
}
@keyframes nebula-swirl {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(10deg) scale(1.05); }
}`,
    htmlCode: `<div class="bg-nebula-cloud"></div>`,
    isNew: true,
  },
  {
    id: 'bg-diamond-pattern',
    name: 'Diamond Pattern BG',
    category: 'backgrounds',
    tags: ['background', 'diamond', 'pattern', 'geometric', 'repeat'],
    difficulty: 'beginner',
    description: 'A repeating diamond pattern background with subtle emerald accents',
    cssCode: `.bg-diamond-pattern {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative;
  background-image:
    linear-gradient(45deg, #10b98111 25%, transparent 25%),
    linear-gradient(-45deg, #10b98111 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #10b98111 75%),
    linear-gradient(-45deg, transparent 75%, #10b98111 75%);
  background-size: 30px 30px;
  background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
}`,
    htmlCode: `<div class="bg-diamond-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'bg-hex-grid',
    name: 'Hex Grid BG',
    category: 'backgrounds',
    tags: ['background', 'hex', 'grid', 'geometric', 'pattern'],
    difficulty: 'intermediate',
    description: 'A hexagonal grid pattern background with glowing hex outlines',
    cssCode: `.bg-hex-grid {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative; overflow: hidden;
}
.bg-hex-grid::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(30deg, #10b98115 12%, transparent 12.5%, transparent 87%, #10b98115 87.5%),
    linear-gradient(150deg, #10b98115 12%, transparent 12.5%, transparent 87%, #10b98115 87.5%),
    linear-gradient(30deg, #10b98115 12%, transparent 12.5%, transparent 87%, #10b98115 87.5%),
    linear-gradient(150deg, #10b98115 12%, transparent 12.5%, transparent 87%, #10b98115 87.5%);
  background-size: 40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px;
}
.bg-hex-grid::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 30%, #0a0a1a 70%);
}`,
    htmlCode: `<div class="bg-hex-grid"></div>`,
    isNew: true,
  },
  {
    id: 'bg-isometric-grid',
    name: 'Isometric Grid BG',
    category: 'backgrounds',
    tags: ['background', 'isometric', 'grid', '3d', 'pattern'],
    difficulty: 'beginner',
    description: 'An isometric 3D grid pattern background with perspective lines',
    cssCode: `.bg-isometric-grid {
  width: 100%; height: 100%;
  background: #0a0a1a;
  position: relative;
  background-image:
    linear-gradient(30deg, #10b98115 1px, transparent 1px),
    linear-gradient(150deg, #10b98115 1px, transparent 1px),
    linear-gradient(90deg, #10b98108 1px, transparent 1px);
  background-size: 40px 70px, 40px 70px, 40px 70px;
}`,
    htmlCode: `<div class="bg-isometric-grid"></div>`,
    isNew: true,
  },

  // ==================== HOVER EFFECTS (20) ====================
  {
    id: 'hover-spotlight-follow',
    name: 'Hover Spotlight Follow',
    category: 'hover',
    tags: ['hover', 'spotlight', 'follow', 'cursor', 'light'],
    difficulty: 'intermediate',
    description: 'A spotlight effect that follows the cursor position on hover using CSS variables',
    cssCode: `.hover-spotlight-follow {
  position: relative;
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s;
}
.hover-spotlight-follow::before {
  content: '';
  position: absolute;
  top: var(--y, 50%);
  left: var(--x, 50%);
  width: 80px; height: 80px;
  background: radial-gradient(circle, #10b98144, transparent 70%);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
}
.hover-spotlight-follow:hover::before { opacity: 1; }
.hover-spotlight-follow:hover { color: #10b981; }`,
    htmlCode: `<div class="hover-spotlight-follow" onmousemove="this.style.setProperty('--x',event.offsetX+'px');this.style.setProperty('--y',event.offsetY+'px')">Spotlight Follow</div>`,
    isNew: true,
  },
  {
    id: 'hover-curtain-reveal',
    name: 'Hover Curtain Reveal',
    category: 'hover',
    tags: ['hover', 'curtain', 'reveal', 'sweep', 'transition'],
    difficulty: 'intermediate',
    description: 'A curtain that sweeps away on hover to reveal content underneath',
    cssCode: `.hover-curtain-reveal {
  position: relative;
  width: 160px; height: 80px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}
.hover-curtain-reveal-content {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 100%;
  background: #0a0a1a;
  color: #10b981;
  font-size: 0.8rem; font-weight: 700;
}
.hover-curtain-reveal-curtain {
  position: absolute; inset: 0;
  background: #1a1a2e;
  color: #e2e8f0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 600;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-curtain-reveal:hover .hover-curtain-reveal-curtain {
  transform: translateY(-100%);
}`,
    htmlCode: `<div class="hover-curtain-reveal"><div class="hover-curtain-reveal-content">Revealed!</div><div class="hover-curtain-reveal-curtain">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-slice-diagonal',
    name: 'Hover Slice Diagonal',
    category: 'hover',
    tags: ['hover', 'slice', 'diagonal', 'split', 'clip'],
    difficulty: 'intermediate',
    description: 'A diagonal slice that splits the element and shifts halves apart on hover',
    cssCode: `.hover-slice-diagonal {
  position: relative;
  padding: 18px 30px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: clip-path 0.4s ease;
}
.hover-slice-diagonal::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #10b98122 50%, transparent 50%);
  transition: transform 0.4s ease;
}
.hover-slice-diagonal:hover::before {
  transform: translateX(20px);
}
.hover-slice-diagonal:hover {
  color: #10b981;
  background: #0f0f1a;
}`,
    htmlCode: `<div class="hover-slice-diagonal">Slice Diagonal</div>`,
    isNew: true,
  },
  {
    id: 'hover-door-open',
    name: 'Hover Door Open',
    category: 'hover',
    tags: ['hover', 'door', 'open', '3d', 'perspective'],
    difficulty: 'advanced',
    description: 'A 3D door-opening effect that swings open on hover to reveal content behind',
    cssCode: `.hover-door-open {
  perspective: 500px;
  width: 160px; height: 80px;
  position: relative; cursor: pointer;
}
.hover-door-open-back {
  position: absolute; inset: 0;
  background: #0a0a1a;
  border: 1px solid #10b98144;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.75rem; font-weight: 700;
}
.hover-door-open-front {
  position: absolute; inset: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-size: 0.8rem; font-weight: 600;
  transform-origin: left center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
}
.hover-door-open:hover .hover-door-open-front {
  transform: rotateY(-110deg);
}`,
    htmlCode: `<div class="hover-door-open"><div class="hover-door-open-back">Behind Door</div><div class="hover-door-open-front">Open Door</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-blinds-effect',
    name: 'Hover Blinds Effect',
    category: 'hover',
    tags: ['hover', 'blinds', 'stripes', 'reveal', 'animated'],
    difficulty: 'intermediate',
    description: 'Venetian blind-style stripes that open to reveal content on hover',
    cssCode: `.hover-blinds-effect {
  width: 160px; height: 80px;
  position: relative; cursor: pointer;
  overflow: hidden; border-radius: 8px;
}
.hover-blinds-effect-bg {
  position: absolute; inset: 0;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.8rem; font-weight: 700;
}
.hover-blinds-effect-stripe {
  position: absolute; left: 0; right: 0;
  height: 20px;
  background: #1a1a2e;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.hover-blinds-effect-stripe:nth-child(2) { top: 0; }
.hover-blinds-effect-stripe:nth-child(3) { top: 20px; }
.hover-blinds-effect-stripe:nth-child(4) { top: 40px; }
.hover-blinds-effect-stripe:nth-child(5) { top: 60px; }
.hover-blinds-effect:hover .hover-blinds-effect-stripe {
  transform: scaleY(0);
  opacity: 0;
}
.hover-blinds-effect:hover .hover-blinds-effect-stripe:nth-child(3) { transition-delay: 0.05s; }
.hover-blinds-effect:hover .hover-blinds-effect-stripe:nth-child(4) { transition-delay: 0.1s; }
.hover-blinds-effect:hover .hover-blinds-effect-stripe:nth-child(5) { transition-delay: 0.15s; }`,
    htmlCode: `<div class="hover-blinds-effect"><div class="hover-blinds-effect-bg">Revealed</div><div class="hover-blinds-effect-stripe"></div><div class="hover-blinds-effect-stripe"></div><div class="hover-blinds-effect-stripe"></div><div class="hover-blinds-effect-stripe"></div></div>`,
    isNew: true,
  },
  {
    id: 'hover-shutter-effect',
    name: 'Hover Shutter Effect',
    category: 'hover',
    tags: ['hover', 'shutter', 'camera', 'reveal', 'split'],
    difficulty: 'intermediate',
    description: 'A camera shutter-style reveal that opens from center on hover',
    cssCode: `.hover-shutter-effect {
  width: 160px; height: 80px;
  position: relative; cursor: pointer;
  overflow: hidden; border-radius: 8px;
}
.hover-shutter-effect-bg {
  position: absolute; inset: 0;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.8rem; font-weight: 700;
}
.hover-shutter-effect-left {
  position: absolute; top: 0; left: 0;
  width: 50%; height: 100%;
  background: #1a1a2e;
  display: flex; align-items: center; justify-content: flex-end;
  padding-right: 4px;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left center;
}
.hover-shutter-effect-right {
  position: absolute; top: 0; right: 0;
  width: 50%; height: 100%;
  background: #1a1a2e;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: right center;
}
.hover-shutter-effect:hover .hover-shutter-effect-left { transform: scaleX(0); }
.hover-shutter-effect:hover .hover-shutter-effect-right { transform: scaleX(0); }`,
    htmlCode: `<div class="hover-shutter-effect"><div class="hover-shutter-effect-bg">Captured!</div><div class="hover-shutter-effect-left">Hov</div><div class="hover-shutter-effect-right"></div></div>`,
    isNew: true,
  },
  {
    id: 'hover-pixel-dissolve',
    name: 'Hover Pixel Dissolve',
    category: 'hover',
    tags: ['hover', 'pixel', 'dissolve', 'grid', 'fade'],
    difficulty: 'intermediate',
    description: 'A pixel dissolve effect where a grid of tiles fades out randomly on hover',
    cssCode: `.hover-pixel-dissolve {
  width: 160px; height: 80px;
  position: relative; cursor: pointer;
  overflow: hidden; border-radius: 8px;
}
.hover-pixel-dissolve-bg {
  position: absolute; inset: 0;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.75rem; font-weight: 700;
}
.hover-pixel-dissolve-grid {
  position: absolute; inset: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1px;
}
.hover-pixel-dissolve-cell {
  background: #1a1a2e;
  transition: opacity 0.4s ease;
}
.hover-pixel-dissolve-cell:nth-child(odd) { transition-delay: 0.1s; }
.hover-pixel-dissolve-cell:nth-child(3n) { transition-delay: 0.2s; }
.hover-pixel-dissolve-cell:nth-child(5n) { transition-delay: 0.3s; }
.hover-pixel-dissolve:hover .hover-pixel-dissolve-cell { opacity: 0; }`,
    htmlCode: `<div class="hover-pixel-dissolve"><div class="hover-pixel-dissolve-bg">Dissolved!</div><div class="hover-pixel-dissolve-grid"><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div><div class="hover-pixel-dissolve-cell"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'hover-scatter-parts',
    name: 'Hover Scatter Parts',
    category: 'hover',
    tags: ['hover', 'scatter', 'explode', 'parts', 'animated'],
    difficulty: 'advanced',
    description: 'Text characters scatter in different directions on hover and reassemble on leave',
    cssCode: `.hover-scatter-parts {
  display: flex; gap: 2px;
  cursor: pointer;
}
.hover-scatter-char {
  display: inline-block;
  padding: 12px 8px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 6px;
  font-size: 0.8rem; font-weight: 700;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;
}
.hover-scatter-char:nth-child(1) { transition-delay: 0s; }
.hover-scatter-char:nth-child(2) { transition-delay: 0.03s; }
.hover-scatter-char:nth-child(3) { transition-delay: 0.06s; }
.hover-scatter-char:nth-child(4) { transition-delay: 0.09s; }
.hover-scatter-char:nth-child(5) { transition-delay: 0.12s; }
.hover-scatter-parts:hover .hover-scatter-char:nth-child(1) { transform: translate(-15px, -20px) rotate(-15deg); opacity: 0.4; }
.hover-scatter-parts:hover .hover-scatter-char:nth-child(2) { transform: translate(0px, -25px) rotate(10deg); opacity: 0.4; }
.hover-scatter-parts:hover .hover-scatter-char:nth-child(3) { transform: translate(0px, -18px) rotate(-5deg); opacity: 0.4; color: #10b981; }
.hover-scatter-parts:hover .hover-scatter-char:nth-child(4) { transform: translate(10px, -22px) rotate(12deg); opacity: 0.4; }
.hover-scatter-parts:hover .hover-scatter-char:nth-child(5) { transform: translate(18px, -15px) rotate(-8deg); opacity: 0.4; }`,
    htmlCode: `<div class="hover-scatter-parts"><span class="hover-scatter-char">H</span><span class="hover-scatter-char">E</span><span class="hover-scatter-char">L</span><span class="hover-scatter-char">L</span><span class="hover-scatter-char">O</span></div>`,
    isNew: true,
  },
  {
    id: 'hover-magnet-attract',
    name: 'Hover Magnet Attract',
    category: 'hover',
    tags: ['hover', 'magnet', 'attract', 'pull', 'physics'],
    difficulty: 'beginner',
    description: 'An element that magnetically attracts toward the cursor on hover',
    cssCode: `.hover-magnet-attract {
  padding: 18px 30px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
  display: inline-block;
}
.hover-magnet-attract:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px #10b98133, 0 0 40px #10b98111;
  border-color: #10b981;
  color: #10b981;
}`,
    htmlCode: `<div class="hover-magnet-attract">Magnet Pull</div>`,
    isNew: true,
  },
  {
    id: 'hover-snap-bounce',
    name: 'Hover Snap Bounce',
    category: 'hover',
    tags: ['hover', 'snap', 'bounce', 'spring', 'interactive'],
    difficulty: 'beginner',
    description: 'A snappy bounce effect that springs on hover with overshoot',
    cssCode: `.hover-snap-bounce {
  padding: 18px 30px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s;
}
.hover-snap-bounce:hover {
  transform: scale(1.15);
  background: #10b981;
  color: #fff;
}`,
    htmlCode: `<div class="hover-snap-bounce">Snap Bounce</div>`,
    isNew: true,
  },
  {
    id: 'hover-warp-distortion',
    name: 'Hover Warp Distortion',
    category: 'hover',
    tags: ['hover', 'warp', 'distortion', 'bend', 'morph'],
    difficulty: 'advanced',
    description: 'A warping distortion effect that bends and stretches the element on hover',
    cssCode: `.hover-warp-distortion {
  padding: 18px 30px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: transform 0.4s ease, border-radius 0.4s ease;
}
.hover-warp-distortion:hover {
  transform: perspective(300px) rotateY(8deg) rotateX(-5deg) scaleX(1.1) scaleY(0.95);
  border-radius: 20px 4px 20px 4px;
  color: #10b981;
  box-shadow: -8px 8px 20px #10b98122;
}`,
    htmlCode: `<div class="hover-warp-distortion">Warp Distort</div>`,
    isNew: true,
  },
  {
    id: 'hover-zoom-focus',
    name: 'Hover Zoom Focus',
    category: 'hover',
    tags: ['hover', 'zoom', 'focus', 'scale', 'blur'],
    difficulty: 'beginner',
    description: 'A zoom focus effect that scales up and sharpens on hover while siblings blur',
    cssCode: `.hover-zoom-focus {
  padding: 18px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: transform 0.4s ease, filter 0.4s ease, border-color 0.3s;
  display: inline-block;
}
.hover-zoom-focus:hover {
  transform: scale(1.2);
  filter: blur(0);
  border-color: #10b981;
  color: #10b981;
  z-index: 10;
}
.hover-zoom-focus:not(:hover) {
  filter: blur(0.5px);
}`,
    htmlCode: `<div class="hover-zoom-focus">Zoom Focus</div>`,
    isNew: true,
  },
  {
    id: 'hover-tilt-perspective',
    name: 'Hover Tilt Perspective',
    category: 'hover',
    tags: ['hover', 'tilt', 'perspective', '3d', 'depth'],
    difficulty: 'intermediate',
    description: 'A 3D perspective tilt effect that gives depth on hover',
    cssCode: `.hover-tilt-perspective {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s;
  transform-style: preserve-3d;
  perspective: 500px;
}
.hover-tilt-perspective:hover {
  transform: rotateX(5deg) rotateY(-8deg) translateZ(10px);
  box-shadow: 8px 10px 30px #10b98122, -2px -2px 10px #10b98111;
  border-color: #10b98144;
  color: #10b981;
}`,
    htmlCode: `<div class="hover-tilt-perspective">Tilt 3D</div>`,
    isNew: true,
  },
  {
    id: 'hover-rotate-cube',
    name: 'Hover Rotate Cube',
    category: 'hover',
    tags: ['hover', 'rotate', 'cube', '3d', 'flip'],
    difficulty: 'advanced',
    description: 'A 3D cube rotation effect that spins the element on hover',
    cssCode: `.hover-rotate-cube {
  perspective: 400px;
  width: 140px; height: 60px;
  cursor: pointer;
}
.hover-rotate-cube-inner {
  width: 100%; height: 100%;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-size: 0.8rem; font-weight: 600;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s;
  transform-style: preserve-3d;
}
.hover-rotate-cube:hover .hover-rotate-cube-inner {
  transform: rotateY(180deg);
  background: #10b981;
  color: #fff;
}`,
    htmlCode: `<div class="hover-rotate-cube"><div class="hover-rotate-cube-inner">Rotate Cube</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-fold-corner',
    name: 'Hover Fold Corner',
    category: 'hover',
    tags: ['hover', 'fold', 'corner', 'paper', 'origami'],
    difficulty: 'intermediate',
    description: 'A paper fold corner effect that reveals a hidden layer on hover',
    cssCode: `.hover-fold-corner {
  position: relative;
  width: 160px; height: 80px;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}
.hover-fold-corner-text {
  padding: 20px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
}
.hover-fold-corner-flap {
  position: absolute;
  bottom: 0; right: 0;
  width: 0; height: 0;
  background: linear-gradient(225deg, #0a0a1a 50%, #10b98133 50%);
  transition: width 0.4s ease, height 0.4s ease;
}
.hover-fold-corner:hover .hover-fold-corner-flap {
  width: 50px; height: 50px;
}`,
    htmlCode: `<div class="hover-fold-corner"><div class="hover-fold-corner-text">Fold Corner</div><div class="hover-fold-corner-flap"></div></div>`,
    isNew: true,
  },
  {
    id: 'hover-peel-back',
    name: 'Hover Peel Back',
    category: 'hover',
    tags: ['hover', 'peel', 'back', 'reveal', 'curl'],
    difficulty: 'advanced',
    description: 'A page peel-back effect that curls and reveals content underneath on hover',
    cssCode: `.hover-peel-back {
  position: relative;
  width: 160px; height: 80px;
  cursor: pointer;
  perspective: 400px;
}
.hover-peel-back-bottom {
  position: absolute; inset: 0;
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.75rem; font-weight: 700;
}
.hover-peel-back-top {
  position: absolute; inset: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-size: 0.8rem; font-weight: 600;
  transform-origin: top center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-peel-back:hover .hover-peel-back-top {
  transform: rotateX(-80deg);
}`,
    htmlCode: `<div class="hover-peel-back"><div class="hover-peel-back-bottom">Underneath</div><div class="hover-peel-back-top">Peel Me</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-curtain-lift',
    name: 'Hover Curtain Lift',
    category: 'hover',
    tags: ['hover', 'curtain', 'lift', 'rise', 'reveal'],
    difficulty: 'beginner',
    description: 'A curtain that lifts upward on hover to reveal content below',
    cssCode: `.hover-curtain-lift {
  position: relative;
  width: 160px; height: 80px;
  overflow: hidden; border-radius: 8px;
  cursor: pointer;
}
.hover-curtain-lift-bg {
  position: absolute; inset: 0;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.8rem; font-weight: 700;
}
.hover-curtain-lift-top {
  position: absolute; inset: 0;
  background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-size: 0.8rem; font-weight: 600;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-curtain-lift:hover .hover-curtain-lift-top {
  transform: translateY(-100%);
}`,
    htmlCode: `<div class="hover-curtain-lift"><div class="hover-curtain-lift-bg">Revealed</div><div class="hover-curtain-lift-top">Lift Curtain</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-window-shade',
    name: 'Hover Window Shade',
    category: 'hover',
    tags: ['hover', 'window', 'shade', 'roll', 'reveal'],
    difficulty: 'beginner',
    description: 'A window shade that rolls up from the bottom on hover to reveal content',
    cssCode: `.hover-window-shade {
  position: relative;
  width: 160px; height: 80px;
  overflow: hidden; border-radius: 8px;
  cursor: pointer;
}
.hover-window-shade-bg {
  position: absolute; inset: 0;
  background: #10b98122;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.75rem; font-weight: 700;
}
.hover-window-shade-cover {
  position: absolute; inset: 0;
  background: #1a1a2e;
  border-bottom: 3px solid #2a2a3e;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-size: 0.8rem; font-weight: 600;
  transition: transform 0.5s ease;
  transform-origin: top;
}
.hover-window-shade:hover .hover-window-shade-cover {
  transform: scaleY(0);
}`,
    htmlCode: `<div class="hover-window-shade"><div class="hover-window-shade-bg">Window Open</div><div class="hover-window-shade-cover">Pull Shade</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-venetian-blind',
    name: 'Hover Venetian Blind',
    category: 'hover',
    tags: ['hover', 'venetian', 'blind', 'slats', 'rotate'],
    difficulty: 'advanced',
    description: 'Venetian blind slats that rotate open on hover to reveal content',
    cssCode: `.hover-venetian-blind {
  width: 160px; height: 80px;
  position: relative; cursor: pointer;
  overflow: hidden; border-radius: 8px;
  perspective: 200px;
}
.hover-venetian-blind-bg {
  position: absolute; inset: 0;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.75rem; font-weight: 700;
}
.hover-venetian-blind-slat {
  position: absolute; left: 0; right: 0;
  height: 20px;
  background: #1a1a2e;
  border-bottom: 1px solid #2a2a3e;
  transform-origin: left center;
  transition: transform 0.5s ease;
}
.hover-venetian-blind-slat:nth-child(2) { top: 0; }
.hover-venetian-blind-slat:nth-child(3) { top: 20px; transition-delay: 0.05s; }
.hover-venetian-blind-slat:nth-child(4) { top: 40px; transition-delay: 0.1s; }
.hover-venetian-blind-slat:nth-child(5) { top: 60px; transition-delay: 0.15s; }
.hover-venetian-blind:hover .hover-venetian-blind-slat {
  transform: rotateY(90deg);
}`,
    htmlCode: `<div class="hover-venetian-blind"><div class="hover-venetian-blind-bg">Open View</div><div class="hover-venetian-blind-slat"></div><div class="hover-venetian-blind-slat"></div><div class="hover-venetian-blind-slat"></div><div class="hover-venetian-blind-slat"></div></div>`,
    isNew: true,
  },
  {
    id: 'hover-reveal-under',
    name: 'Hover Reveal Under',
    category: 'hover',
    tags: ['hover', 'reveal', 'under', 'slide', 'content'],
    difficulty: 'beginner',
    description: 'Content slides away on hover to reveal different content underneath',
    cssCode: `.hover-reveal-under {
  position: relative;
  width: 160px; height: 60px;
  overflow: hidden; border-radius: 8px;
  cursor: pointer;
}
.hover-reveal-under-back {
  position: absolute; inset: 0;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.8rem; font-weight: 700;
}
.hover-reveal-under-front {
  position: absolute; inset: 0;
  background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  color: #e2e8f0; font-size: 0.8rem; font-weight: 600;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-reveal-under:hover .hover-reveal-under-front {
  transform: translateX(100%);
}`,
    htmlCode: `<div class="hover-reveal-under"><div class="hover-reveal-under-back">Hidden Info</div><div class="hover-reveal-under-front">Slide Away</div></div>`,
    isNew: true,
  },

  // ==================== BORDERS (20) ====================
  {
    id: 'border-dash-anim',
    name: 'Border Dash Animation',
    category: 'borders',
    tags: ['border', 'dash', 'animated', 'marching', 'ants'],
    difficulty: 'beginner',
    description: 'A marching ants-style animated dashed border',
    cssCode: `.border-dash-anim {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 2px dashed #10b981;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: dash-march 0.8s linear infinite;
}
@keyframes dash-march {
  to { stroke-dashoffset: -16; }
}
.border-dash-anim {
  background-image: repeating-linear-gradient(
    90deg, #10b981 0px, #10b981 6px, transparent 6px, transparent 12px
  );
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  border: none;
  animation: dash-scroll 1s linear infinite;
}
@keyframes dash-scroll {
  to { background-position: 12px 0, -12px 100%, 0 12px, 0 -12px; }
}`,
    htmlCode: `<div class="border-dash-anim">Dash March</div>`,
    isNew: true,
  },
  {
    id: 'border-gradient-rotate',
    name: 'Border Gradient Rotate',
    category: 'borders',
    tags: ['border', 'gradient', 'rotate', 'animated', 'conic'],
    difficulty: 'intermediate',
    description: 'A rotating gradient border that spins around the element continuously',
    cssCode: `.border-gradient-rotate {
  position: relative;
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  z-index: 0;
}
.border-gradient-rotate::before {
  content: '';
  position: absolute; inset: -2px;
  border-radius: 10px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  animation: border-spin 3s linear infinite;
  z-index: -1;
}
.border-gradient-rotate::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: 8px;
  background: #1a1a2e;
  z-index: -1;
}
@keyframes border-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="border-gradient-rotate">Gradient Spin</div>`,
    isNew: true,
  },
  {
    id: 'border-corner-accent',
    name: 'Border Corner Accent',
    category: 'borders',
    tags: ['border', 'corner', 'accent', 'decorative', 'minimal'],
    difficulty: 'beginner',
    description: 'Decorative corner accent borders that highlight just the corners',
    cssCode: `.border-corner-accent {
  position: relative;
  padding: 24px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
}
.border-corner-accent::before, .border-corner-accent::after {
  content: ''; position: absolute;
  width: 20px; height: 20px;
  border-color: #10b981; border-style: solid;
}
.border-corner-accent::before {
  top: 0; left: 0;
  border-width: 2px 0 0 2px;
}
.border-corner-accent::after {
  bottom: 0; right: 0;
  border-width: 0 2px 2px 0;
}`,
    htmlCode: `<div class="border-corner-accent">Corner Accent</div>`,
    isNew: true,
  },
  {
    id: 'border-partial-draw',
    name: 'Border Partial Draw',
    category: 'borders',
    tags: ['border', 'partial', 'draw', 'animate', 'sketch'],
    difficulty: 'intermediate',
    description: 'A border that partially draws itself in with an animated sketch effect',
    cssCode: `.border-partial-draw {
  position: relative;
  padding: 24px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  overflow: hidden;
}
.border-partial-draw::before {
  content: '';
  position: absolute; inset: 0;
  border: 2px solid transparent;
  border-image: linear-gradient(90deg, #10b981, #10b98144, transparent) 1;
  animation: border-draw 3s ease-in-out infinite;
}
@keyframes border-draw {
  0% { clip-path: inset(0 100% 100% 0); }
  25% { clip-path: inset(0 0 100% 0); }
  50% { clip-path: inset(0 0 0 0); }
  75% { clip-path: inset(0 0 0 100%); }
  100% { clip-path: inset(0 100% 100% 0); }
}`,
    htmlCode: `<div class="border-partial-draw">Partial Draw</div>`,
    isNew: true,
  },
  {
    id: 'border-glow-pulse-2',
    name: 'Border Glow Pulse',
    category: 'borders',
    tags: ['border', 'glow', 'pulse', 'neon', 'animated'],
    difficulty: 'beginner',
    description: 'A border that pulses with an emerald glow effect',
    cssCode: `.border-glow-pulse-2 {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: glow-border-pulse 2s ease-in-out infinite;
}
@keyframes glow-border-pulse {
  0%, 100% { box-shadow: 0 0 5px #10b98133, inset 0 0 5px #10b98111; border-color: #10b981; }
  50% { box-shadow: 0 0 20px #10b98166, 0 0 40px #10b98122, inset 0 0 10px #10b98122; border-color: #34d399; }
}`,
    htmlCode: `<div class="border-glow-pulse-2">Glow Pulse</div>`,
    isNew: true,
  },
  {
    id: 'border-neon-trace',
    name: 'Border Neon Trace',
    category: 'borders',
    tags: ['border', 'neon', 'trace', 'animated', 'light'],
    difficulty: 'advanced',
    description: 'A neon light that traces around the border of the element',
    cssCode: `.border-neon-trace {
  position: relative;
  padding: 20px 28px;
  background: #0a0a1a;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border: 1px solid #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
}
.border-neon-trace::before {
  content: '';
  position: absolute; inset: -2px;
  background: conic-gradient(from var(--angle, 0deg), transparent 0%, transparent 75%, #10b981 100%);
  border-radius: 10px;
  animation: neon-trace-rotate 2s linear infinite;
  z-index: -1;
}
.border-neon-trace::after {
  content: '';
  position: absolute; inset: 0;
  background: #0a0a1a;
  border-radius: 8px;
  z-index: -1;
}
@keyframes neon-trace-rotate {
  to { --angle: 360deg; }
}
@keyframes neon-trace-rotate {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}`,
    htmlCode: `<div class="border-neon-trace">Neon Trace</div>`,
    isNew: true,
  },
  {
    id: 'border-rainbow-cycle',
    name: 'Border Rainbow Cycle',
    category: 'borders',
    tags: ['border', 'rainbow', 'cycle', 'colorful', 'animated'],
    difficulty: 'intermediate',
    description: 'A border that cycles through rainbow colors continuously',
    cssCode: `.border-rainbow-cycle {
  position: relative;
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  z-index: 0;
}
.border-rainbow-cycle::before {
  content: '';
  position: absolute; inset: -2px;
  border-radius: 10px;
  background: linear-gradient(var(--rainbow-angle, 0deg), #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);
  animation: rainbow-rotate 3s linear infinite;
  z-index: -1;
}
.border-rainbow-cycle::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: 8px;
  background: #1a1a2e;
  z-index: -1;
}
@keyframes rainbow-rotate { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="border-rainbow-cycle">Rainbow Cycle</div>`,
    isNew: true,
  },
  {
    id: 'border-split-reveal',
    name: 'Border Split Reveal',
    category: 'borders',
    tags: ['border', 'split', 'reveal', 'separate', 'animate'],
    difficulty: 'intermediate',
    description: 'A border that splits and separates to reveal a glow from within',
    cssCode: `.border-split-reveal {
  position: relative;
  padding: 20px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border: 2px solid #10b98144;
  border-radius: 8px;
  animation: border-split 3s ease-in-out infinite;
}
@keyframes border-split {
  0%, 100% {
    border-top-color: #10b981; border-bottom-color: #10b981;
    border-left-color: #10b98144; border-right-color: #10b98144;
    box-shadow: 0 0 0 transparent;
  }
  50% {
    border-top-color: #3b82f6; border-bottom-color: #3b82f6;
    border-left-color: #10b981; border-right-color: #10b981;
    box-shadow: 0 0 15px #10b98133, inset 0 0 10px #10b98111;
  }
}`,
    htmlCode: `<div class="border-split-reveal">Split Reveal</div>`,
    isNew: true,
  },
  {
    id: 'border-double-line',
    name: 'Border Double Line',
    category: 'borders',
    tags: ['border', 'double', 'line', 'outline', 'layered'],
    difficulty: 'beginner',
    description: 'A double-line border with offset outline effect',
    cssCode: `.border-double-line {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  outline: 2px solid #10b98144;
  outline-offset: 4px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border-radius: 4px;
  transition: outline-offset 0.3s, outline-color 0.3s;
}
.border-double-line:hover {
  outline-offset: 8px;
  outline-color: #10b981;
}`,
    htmlCode: `<div class="border-double-line">Double Line</div>`,
    isNew: true,
  },
  {
    id: 'border-dotted-dance',
    name: 'Border Dotted Dance',
    category: 'borders',
    tags: ['border', 'dotted', 'dance', 'animated', 'playful'],
    difficulty: 'beginner',
    description: 'Dotted border dots that dance and shift position in a playful animation',
    cssCode: `.border-dotted-dance {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 3px dotted #10b981;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: dot-dance 1s ease-in-out infinite alternate;
}
@keyframes dot-dance {
  0% { border-spacing: 0; border-width: 3px; border-color: #10b981; }
  100% { border-width: 4px; border-color: #34d399; }
}`,
    htmlCode: `<div class="border-dotted-dance">Dotted Dance</div>`,
    isNew: true,
  },
  {
    id: 'border-weave-pattern',
    name: 'Border Weave Pattern',
    category: 'borders',
    tags: ['border', 'weave', 'pattern', 'texture', 'decorative'],
    difficulty: 'intermediate',
    description: 'A woven pattern border with interlocking stripe texture',
    cssCode: `.border-weave-pattern {
  padding: 20px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border: 8px solid transparent;
  border-image: repeating-linear-gradient(
    45deg,
    #10b981 0px, #10b981 4px,
    #059669 4px, #059669 8px,
    #1a1a2e 8px, #1a1a2e 12px
  ) 8;
}`,
    htmlCode: `<div class="border-weave-pattern">Weave Pattern</div>`,
    isNew: true,
  },
  {
    id: 'border-snake-trace',
    name: 'Border Snake Trace',
    category: 'borders',
    tags: ['border', 'snake', 'trace', 'animated', 'moving'],
    difficulty: 'advanced',
    description: 'A glowing segment that snakes around the border continuously',
    cssCode: `.border-snake-trace {
  position: relative;
  padding: 20px 28px;
  background: #0a0a1a;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border: 2px solid #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
}
.border-snake-trace::before {
  content: '';
  position: absolute; inset: -2px;
  background: conic-gradient(from 0deg, transparent 0%, transparent 80%, #10b981 90%, #34d399 95%, #10b981 100%);
  border-radius: 10px;
  animation: snake-trace 2s linear infinite;
  z-index: -1;
}
.border-snake-trace::after {
  content: '';
  position: absolute; inset: 0;
  background: #0a0a1a;
  border-radius: 8px;
  z-index: -1;
}
@keyframes snake-trace { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="border-snake-trace">Snake Trace</div>`,
    isNew: true,
  },
  {
    id: 'border-lightning',
    name: 'Border Lightning',
    category: 'borders',
    tags: ['border', 'lightning', 'electric', 'flash', 'animated'],
    difficulty: 'intermediate',
    description: 'A border that randomly flashes with lightning-like electrical bursts',
    cssCode: `.border-lightning {
  position: relative;
  padding: 20px 28px;
  background: #0a0a1a;
  border: 1px solid #10b98144;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: lightning-flash 3s ease-in-out infinite;
}
@keyframes lightning-flash {
  0%, 92%, 100% {
    box-shadow: 0 0 5px #10b98122;
    border-color: #10b98144;
  }
  93%, 95% {
    box-shadow: 0 0 20px #10b981, 0 0 40px #10b98166;
    border-color: #10b981;
  }
  96%, 97% {
    box-shadow: 0 0 3px #10b98111;
    border-color: #10b98122;
  }
  98%, 99% {
    box-shadow: 0 0 25px #10b981, 0 0 50px #10b98188;
    border-color: #34d399;
  }
}`,
    htmlCode: `<div class="border-lightning">Lightning</div>`,
    isNew: true,
  },
  {
    id: 'border-frost-crystal',
    name: 'Border Frost Crystal',
    category: 'borders',
    tags: ['border', 'frost', 'crystal', 'ice', 'winter'],
    difficulty: 'intermediate',
    description: 'A frosted crystal border with icy gradient and shimmer effect',
    cssCode: `.border-frost-crystal {
  position: relative;
  padding: 20px 28px;
  background: #0f0f1a88;
  backdrop-filter: blur(4px);
  border: 2px solid #93c5fd44;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow: 0 0 15px #93c5fd11, inset 0 0 15px #93c5fd08;
  animation: frost-shimmer 4s ease-in-out infinite;
}
@keyframes frost-shimmer {
  0%, 100% { border-color: #93c5fd44; box-shadow: 0 0 15px #93c5fd11; }
  50% { border-color: #10b981aa; box-shadow: 0 0 25px #10b98122, inset 0 0 20px #10b98108; }
}`,
    htmlCode: `<div class="border-frost-crystal">Frost Crystal</div>`,
    isNew: true,
  },
  {
    id: 'border-fire-flame',
    name: 'Border Fire Flame',
    category: 'borders',
    tags: ['border', 'fire', 'flame', 'heat', 'animated'],
    difficulty: 'advanced',
    description: 'A fiery flame border effect with animated warm colors',
    cssCode: `.border-fire-flame {
  position: relative;
  padding: 20px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  z-index: 0;
  border-radius: 8px;
}
.border-fire-flame::before {
  content: '';
  position: absolute; inset: -3px;
  border-radius: 10px;
  background: linear-gradient(var(--fire-angle, 0deg), #ef4444, #f59e0b, #ef4444, #f97316, #ef4444);
  background-size: 300% 300%;
  animation: fire-rotate 3s linear infinite, fire-shift 1.5s ease-in-out infinite;
  z-index: -1;
}
.border-fire-flame::after {
  content: '';
  position: absolute; inset: 0;
  border-radius: 8px;
  background: #1a1a2e;
  z-index: -1;
}
@keyframes fire-rotate { to { transform: rotate(360deg); } }
@keyframes fire-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    htmlCode: `<div class="border-fire-flame">Fire Flame</div>`,
    isNew: true,
  },
  {
    id: 'border-water-ripple',
    name: 'Border Water Ripple',
    category: 'borders',
    tags: ['border', 'water', 'ripple', 'wave', 'animated'],
    difficulty: 'intermediate',
    description: 'A water ripple border effect with undulating wave animations',
    cssCode: `.border-water-ripple {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 2px solid #10b98144;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: water-ripple 2s ease-in-out infinite;
}
@keyframes water-ripple {
  0%, 100% {
    border-color: #10b98144;
    box-shadow: 0 0 5px #10b98111;
    border-radius: 12px;
  }
  25% {
    border-color: #3b82f666;
    box-shadow: 0 0 12px #3b82f622;
    border-radius: 16px 8px 16px 8px;
  }
  50% {
    border-color: #10b98188;
    box-shadow: 0 0 18px #10b98133;
    border-radius: 8px 16px 8px 16px;
  }
  75% {
    border-color: #3b82f644;
    box-shadow: 0 0 10px #3b82f622;
    border-radius: 14px 10px 14px 10px;
  }
}`,
    htmlCode: `<div class="border-water-ripple">Water Ripple</div>`,
    isNew: true,
  },
  {
    id: 'border-wind-sweep',
    name: 'Border Wind Sweep',
    category: 'borders',
    tags: ['border', 'wind', 'sweep', 'flow', 'animated'],
    difficulty: 'intermediate',
    description: 'A border effect with a wind-like sweep that flows around the element',
    cssCode: `.border-wind-sweep {
  position: relative;
  padding: 20px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border: 1px solid #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
}
.border-wind-sweep::before {
  content: '';
  position: absolute; inset: -2px;
  background: conic-gradient(from 0deg, transparent 0%, transparent 85%, #10b981 92%, #34d399 96%, #10b981 100%);
  border-radius: 10px;
  animation: wind-sweep 1.5s linear infinite;
  z-index: -1;
}
.border-wind-sweep::after {
  content: '';
  position: absolute; inset: 0;
  background: #1a1a2e;
  border-radius: 8px;
  z-index: -1;
}
@keyframes wind-sweep { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="border-wind-sweep">Wind Sweep</div>`,
    isNew: true,
  },
  {
    id: 'border-earth-crack',
    name: 'Border Earth Crack',
    category: 'borders',
    tags: ['border', 'earth', 'crack', 'rough', 'organic'],
    difficulty: 'intermediate',
    description: 'A cracked earth border with rough, organic edges',
    cssCode: `.border-earth-crack {
  padding: 20px 28px;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  border: 2px solid #92400e88;
  clip-path: polygon(
    2% 0%, 15% 2%, 30% 1%, 50% 3%, 70% 0%, 85% 2%, 98% 1%,
    100% 15%, 98% 30%, 99% 50%, 97% 70%, 100% 85%, 98% 98%,
    85% 97%, 70% 99%, 50% 97%, 30% 100%, 15% 98%, 2% 99%,
    1% 85%, 3% 70%, 0% 50%, 2% 30%, 1% 15%
  );
  transition: clip-path 0.5s;
}
.border-earth-crack:hover {
  clip-path: polygon(
    0% 0%, 100% 0%, 100% 100%, 0% 100%
  );
  border-color: #10b981;
}`,
    htmlCode: `<div class="border-earth-crack">Earth Crack</div>`,
    isNew: true,
  },
  {
    id: 'border-metal-shine',
    name: 'Border Metal Shine',
    category: 'borders',
    tags: ['border', 'metal', 'shine', 'chrome', 'reflect'],
    difficulty: 'intermediate',
    description: 'A metallic shine border with a reflective highlight that moves across',
    cssCode: `.border-metal-shine {
  position: relative;
  padding: 20px 28px;
  background: #1a1a2e;
  border: 2px solid #475569;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  overflow: hidden;
}
.border-metal-shine::before {
  content: '';
  position: absolute;
  top: -2px; left: -100%;
  width: 60%; height: calc(100% + 4px);
  background: linear-gradient(90deg, transparent, #10b98133, #ffffff22, transparent);
  animation: metal-slide 3s ease-in-out infinite;
}
@keyframes metal-slide {
  0% { left: -100%; }
  50% { left: 150%; }
  100% { left: -100%; }
}`,
    htmlCode: `<div class="border-metal-shine">Metal Shine</div>`,
    isNew: true,
  },
  {
    id: 'border-glass-reflect',
    name: 'Border Glass Reflect',
    category: 'borders',
    tags: ['border', 'glass', 'reflect', 'transparent', 'frosted'],
    difficulty: 'beginner',
    description: 'A glass-like border with subtle reflection and transparency',
    cssCode: `.border-glass-reflect {
  padding: 20px 28px;
  background: #1a1a2e66;
  backdrop-filter: blur(8px);
  border: 1px solid #10b98133;
  border-top-color: #10b98166;
  border-left-color: #10b98155;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow: 0 4px 20px #00000033, inset 0 1px 0 #ffffff11;
}`,
    htmlCode: `<div class="border-glass-reflect">Glass Reflect</div>`,
    isNew: true,
  },

  // ==================== SHADOWS (20) ====================
  {
    id: 'shadow-neon-pulse-2',
    name: 'Shadow Neon Pulse',
    category: 'shadows',
    tags: ['shadow', 'neon', 'pulse', 'glow', 'animated'],
    difficulty: 'beginner',
    description: 'A neon pulsing shadow that breathes with emerald light',
    cssCode: `.shadow-neon-pulse-2 {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: neon-pulse-shadow 2s ease-in-out infinite;
}
@keyframes neon-pulse-shadow {
  0%, 100% { box-shadow: 0 0 5px #10b98144, 0 0 10px #10b98122; }
  50% { box-shadow: 0 0 15px #10b981, 0 0 30px #10b98166, 0 0 50px #10b98122; }
}`,
    htmlCode: `<div class="shadow-neon-pulse-2">Neon Pulse</div>`,
    isNew: true,
  },
  {
    id: 'shadow-color-shift',
    name: 'Shadow Color Shift',
    category: 'shadows',
    tags: ['shadow', 'color', 'shift', 'animated', 'rainbow'],
    difficulty: 'intermediate',
    description: 'A shadow that smoothly shifts through different colors',
    cssCode: `.shadow-color-shift {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: color-shift-shadow 4s ease-in-out infinite;
}
@keyframes color-shift-shadow {
  0%, 100% { box-shadow: 0 8px 25px #10b98144; }
  25% { box-shadow: 0 8px 25px #3b82f644; }
  50% { box-shadow: 0 8px 25px #8b5cf644; }
  75% { box-shadow: 0 8px 25px #f59e0b44; }
}`,
    htmlCode: `<div class="shadow-color-shift">Color Shift</div>`,
    isNew: true,
  },
  {
    id: 'shadow-depth-layer',
    name: 'Shadow Depth Layer',
    category: 'shadows',
    tags: ['shadow', 'depth', 'layer', 'stacked', '3d'],
    difficulty: 'intermediate',
    description: 'Multiple layered shadows creating a deep 3D stacked effect',
    cssCode: `.shadow-depth-layer {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow:
    0 1px 2px #00000066,
    0 2px 4px #00000055,
    0 4px 8px #00000044,
    0 8px 16px #00000033,
    0 16px 32px #00000022;
  transition: transform 0.3s, box-shadow 0.3s;
}
.shadow-depth-layer:hover {
  transform: translateY(-4px);
  box-shadow:
    0 2px 4px #00000066,
    0 4px 8px #00000055,
    0 8px 16px #00000044,
    0 16px 32px #00000033,
    0 24px 48px #00000022,
    0 0 20px #10b98133;
}`,
    htmlCode: `<div class="shadow-depth-layer">Depth Layer</div>`,
    isNew: true,
  },
  {
    id: 'shadow-long-cast',
    name: 'Shadow Long Cast',
    category: 'shadows',
    tags: ['shadow', 'long', 'cast', 'perspective', 'directional'],
    difficulty: 'beginner',
    description: 'A long directional shadow cast to one side like sunlight',
    cssCode: `.shadow-long-cast {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow: 12px 12px 0 #10b98122, 24px 24px 0 #10b98111, 36px 36px 0 #10b98108;
  transition: box-shadow 0.3s;
}
.shadow-long-cast:hover {
  box-shadow: 6px 6px 0 #10b98133, 12px 12px 0 #10b98122, 18px 18px 0 #10b98111, 0 0 15px #10b98122;
}`,
    htmlCode: `<div class="shadow-long-cast">Long Cast</div>`,
    isNew: true,
  },
  {
    id: 'shadow-animated-wave',
    name: 'Shadow Animated Wave',
    category: 'shadows',
    tags: ['shadow', 'animated', 'wave', 'motion', 'flow'],
    difficulty: 'intermediate',
    description: 'An animated wave-like shadow that ripples beneath the element',
    cssCode: `.shadow-animated-wave {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: shadow-wave 2s ease-in-out infinite;
}
@keyframes shadow-wave {
  0%, 100% {
    box-shadow:
      0 5px 10px #10b98122,
      5px 10px 15px #10b98111,
      -5px 10px 15px #10b98111;
  }
  25% {
    box-shadow:
      -3px 8px 12px #10b98133,
      8px 12px 18px #10b98122,
      -2px 8px 12px #10b98122;
  }
  50% {
    box-shadow:
      0 12px 15px #10b98144,
      5px 15px 20px #10b98133,
      -5px 15px 20px #10b98133;
  }
  75% {
    box-shadow:
      3px 8px 12px #10b98133,
      -8px 12px 18px #10b98122,
      2px 8px 12px #10b98122;
  }
}`,
    htmlCode: `<div class="shadow-animated-wave">Wave Shadow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-glow-breathe',
    name: 'Shadow Glow Breathe',
    category: 'shadows',
    tags: ['shadow', 'glow', 'breathe', 'pulse', 'soft'],
    difficulty: 'beginner',
    description: 'A soft breathing glow shadow that gently expands and contracts',
    cssCode: `.shadow-glow-breathe {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: glow-breathe 3s ease-in-out infinite;
}
@keyframes glow-breathe {
  0%, 100% { box-shadow: 0 0 10px #10b98122, 0 0 20px #10b98111; }
  50% { box-shadow: 0 0 25px #10b98155, 0 0 50px #10b98122, 0 0 80px #10b98111; }
}`,
    htmlCode: `<div class="shadow-glow-breathe">Glow Breathe</div>`,
    isNew: true,
  },
  {
    id: 'shadow-inner-pulse',
    name: 'Shadow Inner Pulse',
    category: 'shadows',
    tags: ['shadow', 'inner', 'pulse', 'inset', 'animated'],
    difficulty: 'intermediate',
    description: 'An inner shadow that pulses with light from within',
    cssCode: `.shadow-inner-pulse {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: inner-pulse-shadow 2s ease-in-out infinite;
}
@keyframes inner-pulse-shadow {
  0%, 100% { box-shadow: inset 0 0 15px #10b98122; }
  50% { box-shadow: inset 0 0 30px #10b98144, inset 0 0 60px #10b98111; }
}`,
    htmlCode: `<div class="shadow-inner-pulse">Inner Pulse</div>`,
    isNew: true,
  },
  {
    id: 'shadow-multi-color',
    name: 'Shadow Multi Color',
    category: 'shadows',
    tags: ['shadow', 'multi', 'color', 'vibrant', 'layered'],
    difficulty: 'beginner',
    description: 'Multiple colored shadows creating a vibrant chromatic effect',
    cssCode: `.shadow-multi-color {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow:
    5px 5px 0 #10b98133,
    10px 10px 0 #3b82f633,
    15px 15px 0 #8b5cf633;
  transition: transform 0.3s, box-shadow 0.3s;
}
.shadow-multi-color:hover {
  transform: translate(-3px, -3px);
  box-shadow:
    8px 8px 0 #10b98144,
    16px 16px 0 #3b82f644,
    24px 24px 0 #8b5cf644;
}`,
    htmlCode: `<div class="shadow-multi-color">Multi Color</div>`,
    isNew: true,
  },
  {
    id: 'shadow-rainbow-2',
    name: 'Shadow Rainbow',
    category: 'shadows',
    tags: ['shadow', 'rainbow', 'colorful', 'animated', 'cycle'],
    difficulty: 'intermediate',
    description: 'A rainbow-colored shadow that cycles through the spectrum',
    cssCode: `.shadow-rainbow-2 {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: rainbow-shadow 4s linear infinite;
}
@keyframes rainbow-shadow {
  0% { box-shadow: 0 8px 25px #ef444466; }
  16% { box-shadow: 0 8px 25px #f59e0b66; }
  33% { box-shadow: 0 8px 25px #10b98166; }
  50% { box-shadow: 0 8px 25px #3b82f666; }
  66% { box-shadow: 0 8px 25px #8b5cf666; }
  83% { box-shadow: 0 8px 25px #ec489966; }
  100% { box-shadow: 0 8px 25px #ef444466; }
}`,
    htmlCode: `<div class="shadow-rainbow-2">Rainbow Shadow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-fire-flicker',
    name: 'Shadow Fire Flicker',
    category: 'shadows',
    tags: ['shadow', 'fire', 'flicker', 'warm', 'animated'],
    difficulty: 'advanced',
    description: 'A fire-flickering shadow with warm colors that dance like flames',
    cssCode: `.shadow-fire-flicker {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: fire-flicker 0.8s ease-in-out infinite alternate;
}
@keyframes fire-flicker {
  0% {
    box-shadow: 0 4px 15px #ef444444, 0 8px 25px #f59e0b33;
  }
  25% {
    box-shadow: 3px 6px 20px #f9731644, -2px 10px 30px #fbbf2433;
  }
  50% {
    box-shadow: -3px 8px 18px #ef444433, 5px 12px 28px #f59e0b44;
  }
  75% {
    box-shadow: 2px 5px 22px #dc262644, -1px 9px 26px #fb923333;
  }
  100% {
    box-shadow: -2px 7px 16px #ef444444, 3px 11px 24px #f59e0b33;
  }
}`,
    htmlCode: `<div class="shadow-fire-flicker">Fire Flicker</div>`,
    isNew: true,
  },
  {
    id: 'shadow-ice-crystal',
    name: 'Shadow Ice Crystal',
    category: 'shadows',
    tags: ['shadow', 'ice', 'crystal', 'cold', 'frost'],
    difficulty: 'intermediate',
    description: 'An icy crystal shadow with cold blue and white tones',
    cssCode: `.shadow-ice-crystal {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 1px solid #93c5fd33;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: ice-crystal-shadow 3s ease-in-out infinite;
}
@keyframes ice-crystal-shadow {
  0%, 100% {
    box-shadow: 0 0 15px #93c5fd22, 0 0 30px #bfdbfe11, inset 0 0 10px #93c5fd08;
  }
  50% {
    box-shadow: 0 0 25px #93c5fd44, 0 0 50px #bfdbfe22, 0 0 80px #dbeafe11, inset 0 0 20px #93c5fd11;
  }
}`,
    htmlCode: `<div class="shadow-ice-crystal">Ice Crystal</div>`,
    isNew: true,
  },
  {
    id: 'shadow-electric-arc',
    name: 'Shadow Electric Arc',
    category: 'shadows',
    tags: ['shadow', 'electric', 'arc', 'lightning', 'energy'],
    difficulty: 'advanced',
    description: 'An electric arc shadow that flashes with crackling energy',
    cssCode: `.shadow-electric-arc {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 1px solid #10b98133;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: electric-arc 2s ease-in-out infinite;
}
@keyframes electric-arc {
  0%, 80%, 100% {
    box-shadow: 0 0 5px #10b98122, 0 0 10px #10b98111;
    border-color: #10b98133;
  }
  82% {
    box-shadow: 0 0 20px #10b981, 0 0 40px #10b98188, 0 0 60px #3b82f644;
    border-color: #10b981;
  }
  84% {
    box-shadow: 0 0 3px #10b98111;
    border-color: #10b98122;
  }
  86% {
    box-shadow: 0 0 25px #3b82f6, 0 0 50px #10b98166, 0 0 75px #8b5cf633;
    border-color: #3b82f6;
  }
  88% {
    box-shadow: 0 0 5px #10b98122, 0 0 10px #10b98111;
    border-color: #10b98133;
  }
}`,
    htmlCode: `<div class="shadow-electric-arc">Electric Arc</div>`,
    isNew: true,
  },
  {
    id: 'shadow-cosmic-dust',
    name: 'Shadow Cosmic Dust',
    category: 'shadows',
    tags: ['shadow', 'cosmic', 'dust', 'space', 'glow'],
    difficulty: 'intermediate',
    description: 'A cosmic dust shadow with swirling space-like glow effects',
    cssCode: `.shadow-cosmic-dust {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: cosmic-dust 4s ease-in-out infinite;
}
@keyframes cosmic-dust {
  0%, 100% {
    box-shadow:
      0 0 20px #8b5cf633,
      5px 5px 15px #3b82f622,
      -5px -5px 15px #10b98122;
  }
  33% {
    box-shadow:
      0 0 30px #8b5cf644,
      -8px 3px 20px #3b82f633,
      8px -3px 20px #10b98133;
  }
  66% {
    box-shadow:
      0 0 25px #8b5cf633,
      3px -8px 18px #3b82f633,
      -3px 8px 18px #10b98133;
  }
}`,
    htmlCode: `<div class="shadow-cosmic-dust">Cosmic Dust</div>`,
    isNew: true,
  },
  {
    id: 'shadow-nature-organic',
    name: 'Shadow Nature Organic',
    category: 'shadows',
    tags: ['shadow', 'nature', 'organic', 'green', 'soft'],
    difficulty: 'beginner',
    description: 'A soft organic shadow with natural green tones like dappled sunlight',
    cssCode: `.shadow-nature-organic {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow:
    0 4px 12px #10b98133,
    0 8px 24px #10b98122,
    3px 3px 8px #05966922;
  transition: box-shadow 0.4s, transform 0.3s;
}
.shadow-nature-organic:hover {
  box-shadow:
    0 6px 18px #10b98144,
    0 12px 36px #10b98133,
    0 0 40px #10b98111;
  transform: translateY(-2px);
}`,
    htmlCode: `<div class="shadow-nature-organic">Nature Organic</div>`,
    isNew: true,
  },
  {
    id: 'shadow-material-elevation',
    name: 'Shadow Material Elevation',
    category: 'shadows',
    tags: ['shadow', 'material', 'elevation', 'lift', 'design'],
    difficulty: 'beginner',
    description: 'A Material Design-inspired elevation shadow with smooth lift on hover',
    cssCode: `.shadow-material-elevation {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  box-shadow: 0 2px 4px #00000033, 0 4px 8px #00000022;
  transition: box-shadow 0.3s, transform 0.3s;
}
.shadow-material-elevation:hover {
  box-shadow: 0 8px 16px #00000044, 0 16px 32px #00000033, 0 0 15px #10b98122;
  transform: translateY(-4px);
}`,
    htmlCode: `<div class="shadow-material-elevation">Elevation</div>`,
    isNew: true,
  },
  {
    id: 'shadow-retro-offset',
    name: 'Shadow Retro Offset',
    category: 'shadows',
    tags: ['shadow', 'retro', 'offset', 'vintage', 'solid'],
    difficulty: 'beginner',
    description: 'A retro-style solid offset shadow with a vintage color palette',
    cssCode: `.shadow-retro-offset {
  padding: 20px 28px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  border-radius: 4px;
  color: #10b981;
  font-size: 0.8rem; font-weight: 700;
  box-shadow: 4px 4px 0 #10b981;
  transition: transform 0.2s, box-shadow 0.2s;
}
.shadow-retro-offset:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #10b981;
}
.shadow-retro-offset:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 #10b981;
}`,
    htmlCode: `<div class="shadow-retro-offset">Retro Offset</div>`,
    isNew: true,
  },
  {
    id: 'shadow-double-vision',
    name: 'Shadow Double Vision',
    category: 'shadows',
    tags: ['shadow', 'double', 'vision', 'split', 'chromatic'],
    difficulty: 'intermediate',
    description: 'A chromatic aberration-style double vision shadow with offset colors',
    cssCode: `.shadow-double-vision {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: double-vision-shift 3s ease-in-out infinite;
}
@keyframes double-vision-shift {
  0%, 100% {
    box-shadow: -3px 0 8px #ef444433, 3px 0 8px #3b82f633;
    text-shadow: -1px 0 2px #ef444433, 1px 0 2px #3b82f633;
  }
  50% {
    box-shadow: -5px 2px 12px #ef444444, 5px -2px 12px #3b82f644;
    text-shadow: -2px 1px 3px #ef444444, 2px -1px 3px #3b82f644;
  }
}`,
    htmlCode: `<div class="shadow-double-vision">Double Vision</div>`,
    isNew: true,
  },
  {
    id: 'shadow-mirror-reflect',
    name: 'Shadow Mirror Reflect',
    category: 'shadows',
    tags: ['shadow', 'mirror', 'reflect', 'reflection', 'symmetric'],
    difficulty: 'intermediate',
    description: 'A mirror reflection shadow below the element with fade-out effect',
    cssCode: `.shadow-mirror-reflect {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px 8px 0 0;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  position: relative;
  margin-bottom: 30px;
}
.shadow-mirror-reflect::after {
  content: 'Mirror Reflect';
  position: absolute;
  top: 100%; left: 0; right: 0;
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 0 0 8px 8px;
  color: #10b98144;
  font-size: 0.8rem; font-weight: 600;
  transform: scaleY(-1);
  mask-image: linear-gradient(to bottom, #00000044, transparent);
  -webkit-mask-image: linear-gradient(to bottom, #00000044, transparent);
  pointer-events: none;
}`,
    htmlCode: `<div class="shadow-mirror-reflect">Mirror Reflect</div>`,
    isNew: true,
  },
  {
    id: 'shadow-perspective-tilt',
    name: 'Shadow Perspective Tilt',
    category: 'shadows',
    tags: ['shadow', 'perspective', 'tilt', '3d', 'angle'],
    difficulty: 'intermediate',
    description: 'A perspective-tilted shadow that changes angle based on hover position',
    cssCode: `.shadow-perspective-tilt {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  transform-style: preserve-3d;
}
.shadow-perspective-tilt:hover {
  transform: perspective(500px) rotateX(5deg) rotateY(-3deg);
  box-shadow:
    8px 12px 20px #00000044,
    4px 6px 10px #10b98122;
}`,
    htmlCode: `<div class="shadow-perspective-tilt">Perspective Tilt</div>`,
    isNew: true,
  },
  {
    id: 'shadow-drop-animate',
    name: 'Shadow Drop Animate',
    category: 'shadows',
    tags: ['shadow', 'drop', 'animate', 'fall', 'bounce'],
    difficulty: 'advanced',
    description: 'An animated drop shadow that falls and bounces before settling',
    cssCode: `.shadow-drop-animate {
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.8rem; font-weight: 600;
  animation: shadow-drop-bounce 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}
@keyframes shadow-drop-bounce {
  0% {
    transform: translateY(-30px);
    box-shadow: 0 30px 40px #10b98144;
  }
  40% {
    transform: translateY(0);
    box-shadow: 0 4px 8px #10b98122;
  }
  55% {
    transform: translateY(-8px);
    box-shadow: 0 15px 20px #10b98133;
  }
  70% {
    transform: translateY(0);
    box-shadow: 0 4px 8px #10b98122;
  }
  80% {
    transform: translateY(-3px);
    box-shadow: 0 8px 12px #10b98128;
  }
  90% {
    transform: translateY(0);
    box-shadow: 0 4px 8px #10b98122;
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 4px 8px #10b98122;
  }
}`,
    htmlCode: `<div class="shadow-drop-animate">Drop Shadow</div>`,
    isNew: true,
  },
];
