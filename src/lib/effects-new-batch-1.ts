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

export const effectsNewBatch1: CSSEffect[] = [
  // ==================== AVATAR EFFECTS (20) ====================
  {
    id: 'avatar-glow-ring',
    name: 'Avatar Glow Ring',
    category: 'avatars',
    tags: ['avatar', 'glow', 'ring', 'animated'],
    difficulty: 'beginner',
    description: 'Avatar with a pulsing emerald glow ring around it',
    cssCode: `.avatar-glow-ring {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #10b981;
  box-shadow: 0 0 8px #10b981, 0 0 16px #10b98166;
  animation: glow-ring-pulse 2s ease-in-out infinite;
  overflow: hidden;
}
.avatar-glow-ring img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@keyframes glow-ring-pulse {
  0%, 100% { box-shadow: 0 0 8px #10b981, 0 0 16px #10b98166; }
  50% { box-shadow: 0 0 12px #10b981, 0 0 28px #10b98188, 0 0 40px #10b98144; }
}`,
    htmlCode: `<div class="avatar-glow-ring"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=glow" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-stack',
    name: 'Avatar Stack',
    category: 'avatars',
    tags: ['avatar', 'stack', 'overlap', 'group'],
    difficulty: 'intermediate',
    description: 'Overlapping avatar stack with hover spread effect',
    cssCode: `.avatar-stack {
  display: flex;
  align-items: center;
}
.avatar-stack-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #0f0f1a;
  margin-left: -12px;
  transition: transform 0.3s ease, z-index 0s;
  position: relative;
  overflow: hidden;
}
.avatar-stack-item:first-child { margin-left: 0; }
.avatar-stack-item:hover {
  transform: translateY(-6px) scale(1.15);
  z-index: 10;
  border-color: #10b981;
  box-shadow: 0 4px 12px rgba(16,185,129,0.3);
}
.avatar-stack-item img { width: 100%; height: 100%; object-fit: cover; }`,
    htmlCode: `<div class="avatar-stack"><div class="avatar-stack-item"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a1" alt="" /></div><div class="avatar-stack-item"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a2" alt="" /></div><div class="avatar-stack-item"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a3" alt="" /></div><div class="avatar-stack-item"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=a4" alt="" /></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-pulse',
    name: 'Avatar Pulse',
    category: 'avatars',
    tags: ['avatar', 'pulse', 'animated', 'online'],
    difficulty: 'beginner',
    description: 'Avatar with a pulsing ring indicating online status',
    cssCode: `.avatar-pulse {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-pulse img { width: 100%; height: 100%; object-fit: cover; }
.avatar-pulse::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: avatar-ping 1.5s ease-out infinite;
}
@keyframes avatar-ping {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.35); opacity: 0; }
}`,
    htmlCode: `<div class="avatar-pulse"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=pulse" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-border-animation',
    name: 'Avatar Border Animation',
    category: 'avatars',
    tags: ['avatar', 'border', 'animated', 'gradient'],
    difficulty: 'intermediate',
    description: 'Avatar with an animated gradient border rotating around it',
    cssCode: `.avatar-border-anim {
  width: 68px;
  height: 68px;
  padding: 3px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  animation: avatar-border-spin 3s linear infinite;
}
.avatar-border-anim-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #0f0f1a;
}
.avatar-border-anim-inner img { width: 100%; height: 100%; object-fit: cover; }
@keyframes avatar-border-spin {
  to { filter: hue-rotate(360deg); }
}`,
    htmlCode: `<div class="avatar-border-anim"><div class="avatar-border-anim-inner"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=border" alt="Avatar" /></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-status-dot',
    name: 'Avatar Status Dot',
    category: 'avatars',
    tags: ['avatar', 'status', 'dot', 'indicator'],
    difficulty: 'beginner',
    description: 'Avatar with a status indicator dot in the corner',
    cssCode: `.avatar-status {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2a2a3e;
}
.avatar-status img { width: 100%; height: 100%; object-fit: cover; }
.avatar-status-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #10b981;
  border: 2px solid #0f0f1a;
  animation: dot-breathe 2s ease-in-out infinite;
}
@keyframes dot-breathe {
  0%, 100% { box-shadow: 0 0 0 0 #10b98166; }
  50% { box-shadow: 0 0 0 4px #10b98133; }
}`,
    htmlCode: `<div class="avatar-status"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=status" alt="Avatar" /><div class="avatar-status-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-flip',
    name: 'Avatar Flip',
    category: 'avatars',
    tags: ['avatar', 'flip', '3d', 'hover'],
    difficulty: 'intermediate',
    description: 'Avatar that flips to reveal info on the back when hovered',
    cssCode: `.avatar-flip-wrap {
  width: 64px;
  height: 64px;
  perspective: 400px;
}
.avatar-flip-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  position: relative;
}
.avatar-flip-wrap:hover .avatar-flip-inner { transform: rotateY(180deg); }
.avatar-flip-front, .avatar-flip-back {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  backface-visibility: hidden;
  overflow: hidden;
}
.avatar-flip-front img { width: 100%; height: 100%; object-fit: cover; }
.avatar-flip-back {
  background: #10b981;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a0a;
  font-weight: 700;
  font-size: 1.1rem;
}`,
    htmlCode: `<div class="avatar-flip-wrap"><div class="avatar-flip-inner"><div class="avatar-flip-front"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=flip" alt="Avatar" /></div><div class="avatar-flip-back">JD</div></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-morph',
    name: 'Avatar Morph',
    category: 'avatars',
    tags: ['avatar', 'morph', 'shape', 'animated'],
    difficulty: 'intermediate',
    description: 'Avatar that morphs between circle and square shapes continuously',
    cssCode: `.avatar-morph {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  animation: morph-shape 4s ease-in-out infinite;
  border: 2px solid #10b981;
}
.avatar-morph img { width: 100%; height: 100%; object-fit: cover; }
@keyframes morph-shape {
  0%, 100% { border-radius: 50%; }
  25% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  50% { border-radius: 12px; }
  75% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
}`,
    htmlCode: `<div class="avatar-morph"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=morph" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-rotate',
    name: 'Avatar Rotate',
    category: 'avatars',
    tags: ['avatar', 'rotate', 'spin', 'hover'],
    difficulty: 'beginner',
    description: 'Avatar that rotates smoothly on hover',
    cssCode: `.avatar-rotate {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2a2a3e;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease;
  cursor: pointer;
}
.avatar-rotate:hover {
  transform: rotate(360deg);
  border-color: #10b981;
}
.avatar-rotate img { width: 100%; height: 100%; object-fit: cover; }`,
    htmlCode: `<div class="avatar-rotate"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=rotate" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-bounce',
    name: 'Avatar Bounce',
    category: 'avatars',
    tags: ['avatar', 'bounce', 'animated', 'spring'],
    difficulty: 'beginner',
    description: 'Avatar that bounces continuously with a springy animation',
    cssCode: `.avatar-bounce {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #10b981;
  animation: avatar-bounce-anim 2s ease-in-out infinite;
}
.avatar-bounce img { width: 100%; height: 100%; object-fit: cover; }
@keyframes avatar-bounce-anim {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-12px); }
  40% { transform: translateY(0); }
  55% { transform: translateY(-6px); }
  70% { transform: translateY(0); }
  80% { transform: translateY(-2px); }
  90% { transform: translateY(0); }
}`,
    htmlCode: `<div class="avatar-bounce"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=bounce" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-gradient-border',
    name: 'Avatar Gradient Border',
    category: 'avatars',
    tags: ['avatar', 'gradient', 'border', 'colorful'],
    difficulty: 'intermediate',
    description: 'Avatar with a vibrant animated gradient border',
    cssCode: `.avatar-grad-border {
  width: 70px;
  height: 70px;
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #10b981);
  background-size: 300% 300%;
  animation: grad-border-shift 4s ease infinite;
}
.avatar-grad-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #0a0a1a;
}
.avatar-grad-inner img { width: 100%; height: 100%; object-fit: cover; }
@keyframes grad-border-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="avatar-grad-border"><div class="avatar-grad-inner"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=grad" alt="Avatar" /></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-neon-ring',
    name: 'Avatar Neon Ring',
    category: 'avatars',
    tags: ['avatar', 'neon', 'glow', 'dark'],
    difficulty: 'intermediate',
    description: 'Avatar with a neon ring that flickers like a sign',
    cssCode: `.avatar-neon-ring {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #10b981;
  overflow: hidden;
  animation: neon-flicker 2s infinite alternate;
  box-shadow: 0 0 5px #10b981, 0 0 10px #10b98188, inset 0 0 5px #10b98122;
}
.avatar-neon-ring img { width: 100%; height: 100%; object-fit: cover; }
@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { box-shadow: 0 0 5px #10b981, 0 0 10px #10b98188; border-color: #10b981; }
  20%, 24%, 55% { box-shadow: none; border-color: #05966944; }
}`,
    htmlCode: `<div class="avatar-neon-ring"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=neon" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-double-ring',
    name: 'Avatar Double Ring',
    category: 'avatars',
    tags: ['avatar', 'ring', 'double', 'animated'],
    difficulty: 'intermediate',
    description: 'Avatar with two rotating concentric rings around it',
    cssCode: `.avatar-double-ring {
  position: relative;
  width: 72px;
  height: 72px;
}
.avatar-double-ring::before, .avatar-double-ring::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
}
.avatar-double-ring::before {
  inset: -4px;
  border-top-color: #10b981;
  border-right-color: #10b981;
  animation: ring-spin-cw 2s linear infinite;
}
.avatar-double-ring::after {
  inset: -10px;
  border-bottom-color: #3b82f6;
  border-left-color: #3b82f6;
  animation: ring-spin-ccw 3s linear infinite;
}
.avatar-double-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-double-inner img { width: 100%; height: 100%; object-fit: cover; }
@keyframes ring-spin-cw { to { transform: rotate(360deg); } }
@keyframes ring-spin-ccw { to { transform: rotate(-360deg); } }`,
    htmlCode: `<div class="avatar-double-ring"><div class="avatar-double-inner"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=double" alt="Avatar" /></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-shimmer',
    name: 'Avatar Shimmer',
    category: 'avatars',
    tags: ['avatar', 'shimmer', 'shine', 'animated'],
    difficulty: 'intermediate',
    description: 'Avatar with a shine sweep effect continuously passing over it',
    cssCode: `.avatar-shimmer {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 2px solid #2a2a3e;
}
.avatar-shimmer img { width: 100%; height: 100%; object-fit: cover; }
.avatar-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent);
  animation: shimmer-pass 2.5s ease infinite;
}
@keyframes shimmer-pass {
  0% { left: -100%; }
  100% { left: 200%; }
}`,
    htmlCode: `<div class="avatar-shimmer"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=shimmer" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-scale-hover',
    name: 'Avatar Scale Hover',
    category: 'avatars',
    tags: ['avatar', 'scale', 'hover', 'interactive'],
    difficulty: 'beginner',
    description: 'Avatar that scales up with a glow effect on hover',
    cssCode: `.avatar-scale-hover {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
.avatar-scale-hover:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 20px rgba(16,185,129,0.3);
  border-color: #10b981;
}
.avatar-scale-hover img { width: 100%; height: 100%; object-fit: cover; }`,
    htmlCode: `<div class="avatar-scale-hover"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=scale" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-tilt-3d',
    name: 'Avatar Tilt 3D',
    category: 'avatars',
    tags: ['avatar', '3d', 'tilt', 'hover'],
    difficulty: 'advanced',
    description: 'Avatar that tilts in 3D perspective on hover',
    cssCode: `.avatar-tilt-3d {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2a2a3e;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  perspective: 300px;
}
.avatar-tilt-3d:hover {
  transform: perspective(300px) rotateY(12deg) rotateX(-6deg) scale(1.08);
  box-shadow: -4px 6px 16px rgba(16,185,129,0.2);
  border-color: #10b981;
}
.avatar-tilt-3d img { width: 100%; height: 100%; object-fit: cover; }`,
    htmlCode: `<div class="avatar-tilt-3d"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=tilt3d" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-float',
    name: 'Avatar Float',
    category: 'avatars',
    tags: ['avatar', 'float', 'hover', 'gentle'],
    difficulty: 'beginner',
    description: 'Avatar that gently floats up and down continuously',
    cssCode: `.avatar-float {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #10b981;
  animation: avatar-float-anim 3s ease-in-out infinite;
  box-shadow: 0 8px 20px rgba(16,185,129,0.15);
}
.avatar-float img { width: 100%; height: 100%; object-fit: cover; }
@keyframes avatar-float-anim {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}`,
    htmlCode: `<div class="avatar-float"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=float" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-swap',
    name: 'Avatar Swap',
    category: 'avatars',
    tags: ['avatar', 'swap', 'hover', 'reveal'],
    difficulty: 'intermediate',
    description: 'Avatar that swaps to a different image on hover with a flip',
    cssCode: `.avatar-swap {
  width: 64px;
  height: 64px;
  perspective: 400px;
  cursor: pointer;
}
.avatar-swap-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}
.avatar-swap:hover .avatar-swap-inner { transform: rotateY(180deg); }
.avatar-swap-face {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  backface-visibility: hidden;
  overflow: hidden;
  border: 2px solid #2a2a3e;
}
.avatar-swap-face img { width: 100%; height: 100%; object-fit: cover; }
.avatar-swap-back {
  transform: rotateY(180deg);
  background: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a0a;
  font-weight: 700;
}`,
    htmlCode: `<div class="avatar-swap"><div class="avatar-swap-inner"><div class="avatar-swap-face"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=swap1" alt="" /></div><div class="avatar-swap-face avatar-swap-back">+</div></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-dashed-border',
    name: 'Avatar Dashed Border',
    category: 'avatars',
    tags: ['avatar', 'dashed', 'border', 'animated'],
    difficulty: 'beginner',
    description: 'Avatar with an animated dashed border that rotates',
    cssCode: `.avatar-dashed {
  width: 70px;
  height: 70px;
  padding: 3px;
  border-radius: 50%;
  background: #0f0f1a;
  position: relative;
}
.avatar-dashed::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px dashed #10b981;
  animation: dash-rotate 8s linear infinite;
}
@keyframes dash-rotate {
  to { transform: rotate(360deg); }
}
.avatar-dashed-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-dashed-inner img { width: 100%; height: 100%; object-fit: cover; }`,
    htmlCode: `<div class="avatar-dashed"><div class="avatar-dashed-inner"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=dash" alt="Avatar" /></div></div>`,
    isNew: true,
  },
  {
    id: 'avatar-shadow-lift',
    name: 'Avatar Shadow Lift',
    category: 'avatars',
    tags: ['avatar', 'shadow', 'lift', 'hover'],
    difficulty: 'beginner',
    description: 'Avatar that lifts with an enhanced shadow on hover',
    cssCode: `.avatar-shadow-lift {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  cursor: pointer;
}
.avatar-shadow-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(16,185,129,0.25), 0 4px 8px rgba(0,0,0,0.2);
  border-color: #10b981;
}
.avatar-shadow-lift img { width: 100%; height: 100%; object-fit: cover; }`,
    htmlCode: `<div class="avatar-shadow-lift"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lift" alt="Avatar" /></div>`,
    isNew: true,
  },
  {
    id: 'avatar-glass',
    name: 'Avatar Glass',
    category: 'avatars',
    tags: ['avatar', 'glass', 'frosted', 'blur'],
    difficulty: 'intermediate',
    description: 'Frosted glass avatar with backdrop blur and translucent border',
    cssCode: `.avatar-glass {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(16,185,129,0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(16,185,129,0.08);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.avatar-glass:hover {
  border-color: rgba(16,185,129,0.6);
  box-shadow: 0 8px 24px rgba(16,185,129,0.15);
}
.avatar-glass img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; }`,
    htmlCode: `<div class="avatar-glass"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=glass" alt="Avatar" /></div>`,
    isNew: true,
  },

  // ==================== NAVIGATION EFFECTS (20) ====================
  {
    id: 'nav-slide-down',
    name: 'Nav Slide Down',
    category: 'navigation',
    tags: ['nav', 'slide', 'dropdown', 'animated'],
    difficulty: 'beginner',
    description: 'Navigation menu that slides down smoothly on hover',
    cssCode: `.nav-slide-down {
  background: #0f0f1a;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  gap: 4px;
}
.nav-slide-item {
  position: relative;
  padding: 8px 16px;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 6px;
}
.nav-slide-item:hover { color: #10b981; }
.nav-slide-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 8px;
  min-width: 140px;
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: all 0.3s ease;
}
.nav-slide-item:hover .nav-slide-dropdown {
  opacity: 1;
  transform: translateY(4px);
  pointer-events: auto;
}
.nav-slide-dropdown div { padding: 6px 10px; color: #e2e8f0; font-size: 0.8rem; border-radius: 4px; }
.nav-slide-dropdown div:hover { background: #10b98122; color: #10b981; }`,
    htmlCode: `<div class="nav-slide-down"><div class="nav-slide-item">Home</div><div class="nav-slide-item">Products<div class="nav-slide-dropdown"><div>Widget</div><div>Gadget</div><div>Tool</div></div></div><div class="nav-slide-item">About</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-underline-active',
    name: 'Nav Underline Active',
    category: 'navigation',
    tags: ['nav', 'underline', 'active', 'indicator'],
    difficulty: 'beginner',
    description: 'Navigation with an animated underline that slides to the active item',
    cssCode: `.nav-underline {
  display: flex;
  gap: 24px;
  background: #0f0f1a;
  padding: 12px 20px;
  border-radius: 8px;
}
.nav-underline-item {
  position: relative;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding-bottom: 6px;
  transition: color 0.3s ease;
}
.nav-underline-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
  border-radius: 1px;
}
.nav-underline-item:hover { color: #10b981; }
.nav-underline-item:hover::after { width: 100%; }
.nav-underline-item.active { color: #10b981; }
.nav-underline-item.active::after { width: 100%; }`,
    htmlCode: `<div class="nav-underline"><div class="nav-underline-item active">Home</div><div class="nav-underline-item">About</div><div class="nav-underline-item">Contact</div></div>`,
    isNew: true,
  },
  {
    id: 'hamburger-morph',
    name: 'Hamburger Morph',
    category: 'navigation',
    tags: ['nav', 'hamburger', 'morph', 'menu'],
    difficulty: 'intermediate',
    description: 'Hamburger icon that morphs into an X on hover',
    cssCode: `.hamburger-morph {
  width: 32px;
  height: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hamburger-morph span {
  display: block;
  height: 3px;
  width: 100%;
  background: #10b981;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}
.hamburger-morph:hover span:nth-child(1) {
  transform: translateY(10.5px) rotate(45deg);
}
.hamburger-morph:hover span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger-morph:hover span:nth-child(3) {
  transform: translateY(-10.5px) rotate(-45deg);
}`,
    htmlCode: `<div class="hamburger-morph"><span></span><span></span><span></span></div>`,
    isNew: true,
  },
  {
    id: 'breadcrumb-arrow',
    name: 'Breadcrumb Arrow',
    category: 'navigation',
    tags: ['nav', 'breadcrumb', 'arrow', 'separator'],
    difficulty: 'beginner',
    description: 'Breadcrumb navigation with animated arrow separators',
    cssCode: `.breadcrumb-arrow {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0f0f1a;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
}
.breadcrumb-arrow span {
  color: #64748b;
  cursor: pointer;
  transition: color 0.3s ease;
}
.breadcrumb-arrow span:hover { color: #10b981; }
.breadcrumb-arrow span:last-child { color: #e2e8f0; cursor: default; }
.breadcrumb-arrow .bc-sep {
  color: #10b981;
  font-size: 0.7rem;
  cursor: default;
  animation: bc-arrow-pulse 2s ease-in-out infinite;
}
.breadcrumb-arrow .bc-sep:hover { color: #10b981; }
@keyframes bc-arrow-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="breadcrumb-arrow"><span>Home</span><span class="bc-sep">▶</span><span>Products</span><span class="bc-sep">▶</span><span>Widget</span></div>`,
    isNew: true,
  },
  {
    id: 'dropdown-fade',
    name: 'Dropdown Fade',
    category: 'navigation',
    tags: ['nav', 'dropdown', 'fade', 'menu'],
    difficulty: 'beginner',
    description: 'Navigation dropdown that fades in smoothly on hover',
    cssCode: `.dropdown-fade-nav {
  display: flex;
  gap: 4px;
  background: #0f0f1a;
  padding: 8px 12px;
  border-radius: 8px;
}
.dropdown-fade-item {
  position: relative;
  padding: 8px 14px;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.3s ease;
}
.dropdown-fade-item:hover { color: #10b981; }
.dropdown-fade-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 6px;
  min-width: 130px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.dropdown-fade-item:hover .dropdown-fade-menu {
  opacity: 1;
  pointer-events: auto;
}
.dropdown-fade-menu div {
  padding: 6px 10px;
  color: #e2e8f0;
  font-size: 0.8rem;
  border-radius: 4px;
  transition: background 0.2s;
}
.dropdown-fade-menu div:hover { background: #10b98122; color: #10b981; }`,
    htmlCode: `<div class="dropdown-fade-nav"><div class="dropdown-fade-item">Dashboard</div><div class="dropdown-fade-item">Settings<div class="dropdown-fade-menu"><div>Profile</div><div>Theme</div><div>Logout</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-pill-active',
    name: 'Nav Pill Active',
    category: 'navigation',
    tags: ['nav', 'pill', 'active', 'indicator'],
    difficulty: 'beginner',
    description: 'Navigation with pill-shaped indicator for the active item',
    cssCode: `.nav-pill {
  display: flex;
  gap: 4px;
  background: #0f0f1a;
  padding: 6px;
  border-radius: 10px;
}
.nav-pill-item {
  padding: 8px 18px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.nav-pill-item:hover { color: #e2e8f0; }
.nav-pill-item.active {
  background: #10b981;
  color: #0a0a0a;
  box-shadow: 0 2px 8px rgba(16,185,129,0.3);
}`,
    htmlCode: `<div class="nav-pill"><div class="nav-pill-item active">Home</div><div class="nav-pill-item">Explore</div><div class="nav-pill-item">Profile</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-indicator-slide',
    name: 'Nav Indicator Slide',
    category: 'navigation',
    tags: ['nav', 'indicator', 'slide', 'animated'],
    difficulty: 'intermediate',
    description: 'Navigation with a sliding background indicator that follows the active item',
    cssCode: `.nav-indicator {
  display: flex;
  position: relative;
  background: #0f0f1a;
  padding: 6px;
  border-radius: 10px;
  gap: 2px;
}
.nav-indicator-item {
  padding: 8px 16px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}
.nav-indicator-item.active { color: #0a0a0a; }
.nav-indicator-slider {
  position: absolute;
  height: calc(100% - 12px);
  top: 6px;
  left: 6px;
  width: 60px;
  background: #10b981;
  border-radius: 8px;
  transition: transform 0.3s ease, width 0.3s ease;
  box-shadow: 0 2px 8px rgba(16,185,129,0.3);
}
.nav-indicator-item:nth-child(2):hover ~ .nav-indicator-slider,
.nav-indicator-item:nth-child(2).active ~ .nav-indicator-slider { transform: translateX(calc(60px + 2px)); }`,
    htmlCode: `<div class="nav-indicator"><div class="nav-indicator-item active">Home</div><div class="nav-indicator-item">Blog</div><div class="nav-indicator-item">Docs</div><div class="nav-indicator-slider"></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-glass',
    name: 'Nav Glass',
    category: 'navigation',
    tags: ['nav', 'glass', 'frosted', 'blur'],
    difficulty: 'intermediate',
    description: 'Frosted glass navigation bar with blur backdrop',
    cssCode: `.nav-glass {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 24px;
  background: rgba(16,185,129,0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 12px;
  border: 1px solid rgba(16,185,129,0.15);
}
.nav-glass-logo {
  color: #10b981;
  font-weight: 800;
  font-size: 1rem;
}
.nav-glass-link {
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}
.nav-glass-link:hover { color: #10b981; }
.nav-glass-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
  border-radius: 1px;
}
.nav-glass-link:hover::after { width: 100%; }`,
    htmlCode: `<div class="nav-glass"><div class="nav-glass-logo">Logo</div><div class="nav-glass-link">Home</div><div class="nav-glass-link">Features</div><div class="nav-glass-link">Pricing</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-reveal-scroll',
    name: 'Nav Reveal Scroll',
    category: 'navigation',
    tags: ['nav', 'scroll', 'reveal', 'animated'],
    difficulty: 'advanced',
    description: 'Navigation that reveals itself with an animated entrance from the top',
    cssCode: `.nav-reveal {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 24px;
  background: #0f0f1a;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  animation: nav-slide-reveal 0.8s ease forwards;
  transform: translateY(-100%);
  opacity: 0;
}
@keyframes nav-slide-reveal {
  0% { transform: translateY(-100%); opacity: 0; }
  60% { transform: translateY(4px); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}
.nav-reveal-logo {
  color: #10b981;
  font-weight: 800;
  font-size: 1rem;
  margin-right: auto;
}
.nav-reveal-link {
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.nav-reveal-link:hover { color: #10b981; }`,
    htmlCode: `<div class="nav-reveal"><div class="nav-reveal-logo">MyApp</div><div class="nav-reveal-link">Home</div><div class="nav-reveal-link">Blog</div><div class="nav-reveal-link">Login</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-sidebar-slide',
    name: 'Nav Sidebar Slide',
    category: 'navigation',
    tags: ['nav', 'sidebar', 'slide', 'menu'],
    difficulty: 'intermediate',
    description: 'Sidebar navigation that slides in from the left with staggered items',
    cssCode: `.nav-sidebar {
  width: 180px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #2a2a3e;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-sidebar-title {
  color: #64748b;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  padding: 0 12px;
}
.nav-sidebar-item {
  padding: 10px 12px;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: sidebar-slide-in 0.4s ease backwards;
}
.nav-sidebar-item:nth-child(2) { animation-delay: 0.05s; }
.nav-sidebar-item:nth-child(3) { animation-delay: 0.1s; }
.nav-sidebar-item:nth-child(4) { animation-delay: 0.15s; }
.nav-sidebar-item:hover {
  background: #10b98118;
  color: #10b981;
  transform: translateX(4px);
}
.nav-sidebar-item.active {
  background: #10b98122;
  color: #10b981;
  border-left: 3px solid #10b981;
}
@keyframes sidebar-slide-in {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="nav-sidebar"><div class="nav-sidebar-title">Menu</div><div class="nav-sidebar-item active">Dashboard</div><div class="nav-sidebar-item">Analytics</div><div class="nav-sidebar-item">Settings</div><div class="nav-sidebar-item">Help</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-tabs-glow',
    name: 'Nav Tabs Glow',
    category: 'navigation',
    tags: ['nav', 'tabs', 'glow', 'active'],
    difficulty: 'intermediate',
    description: 'Tab navigation with a glowing indicator under the active tab',
    cssCode: `.nav-tabs-glow {
  display: flex;
  gap: 0;
  background: #0f0f1a;
  border-radius: 10px;
  padding: 4px;
}
.nav-tabs-glow-item {
  padding: 10px 20px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}
.nav-tabs-glow-item:hover { color: #e2e8f0; }
.nav-tabs-glow-item.active {
  color: #10b981;
  background: #10b98111;
}
.nav-tabs-glow-item.active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 20%;
  width: 60%;
  height: 2px;
  background: #10b981;
  border-radius: 1px;
  box-shadow: 0 0 8px #10b98188;
}`,
    htmlCode: `<div class="nav-tabs-glow"><div class="nav-tabs-glow-item active">Overview</div><div class="nav-tabs-glow-item">Stats</div><div class="nav-tabs-glow-item">Logs</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-step-progress',
    name: 'Nav Step Progress',
    category: 'navigation',
    tags: ['nav', 'step', 'progress', 'wizard'],
    difficulty: 'intermediate',
    description: 'Step-by-step navigation with connected progress indicators',
    cssCode: `.nav-steps {
  display: flex;
  align-items: center;
  gap: 0;
}
.nav-step {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-step-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
  transition: all 0.3s ease;
}
.nav-step-dot.active {
  border-color: #10b981;
  background: #10b98122;
  color: #10b981;
  box-shadow: 0 0 8px #10b98144;
}
.nav-step-dot.done {
  border-color: #10b981;
  background: #10b981;
  color: #0a0a0a;
}
.nav-step-line {
  width: 32px;
  height: 2px;
  background: #2a2a3e;
  margin: 0 4px;
  transition: background 0.3s ease;
}
.nav-step-line.done { background: #10b981; }`,
    htmlCode: `<div class="nav-steps"><div class="nav-step"><div class="nav-step-dot done">1</div></div><div class="nav-step-line done"></div><div class="nav-step"><div class="nav-step-dot active">2</div></div><div class="nav-step-line"></div><div class="nav-step"><div class="nav-step-dot">3</div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-accordion',
    name: 'Nav Accordion',
    category: 'navigation',
    tags: ['nav', 'accordion', 'expand', 'menu'],
    difficulty: 'intermediate',
    description: 'Accordion-style navigation that expands sections on hover',
    cssCode: `.nav-accordion {
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.nav-accordion-section {
  background: #0f0f1a;
  border-radius: 8px;
  overflow: hidden;
}
.nav-accordion-header {
  padding: 10px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-accordion-header:hover { background: #10b98111; }
.nav-accordion-arrow {
  font-size: 0.65rem;
  color: #64748b;
  transition: transform 0.3s ease;
}
.nav-accordion-section:hover .nav-accordion-arrow { transform: rotate(90deg); color: #10b981; }
.nav-accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.nav-accordion-section:hover .nav-accordion-body { max-height: 120px; }
.nav-accordion-body div {
  padding: 6px 14px 6px 24px;
  color: #94a3b8;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.2s;
}
.nav-accordion-body div:hover { color: #10b981; }`,
    htmlCode: `<div class="nav-accordion"><div class="nav-accordion-section"><div class="nav-accordion-header">Design <span class="nav-accordion-arrow">▶</span></div><div class="nav-accordion-body"><div>Colors</div><div>Typography</div><div>Layout</div></div></div><div class="nav-accordion-section"><div class="nav-accordion-header">Code <span class="nav-accordion-arrow">▶</span></div><div class="nav-accordion-body"><div>Components</div><div>Hooks</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'nav-mega-menu',
    name: 'Nav Mega Menu',
    category: 'navigation',
    tags: ['nav', 'mega', 'dropdown', 'grid'],
    difficulty: 'advanced',
    description: 'Full-width mega menu dropdown with grid layout on hover',
    cssCode: `.nav-mega {
  display: flex;
  gap: 4px;
  background: #0f0f1a;
  padding: 8px 12px;
  border-radius: 8px;
  position: relative;
}
.nav-mega-item {
  padding: 8px 16px;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.3s ease;
}
.nav-mega-item:hover { color: #10b981; }
.nav-mega-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
.nav-mega-item:hover + .nav-mega-panel { opacity: 1; pointer-events: auto; transform: translateY(0); }
.nav-mega-panel:hover { opacity: 1; pointer-events: auto; transform: translateY(0); }
.nav-mega-link { padding: 8px; color: #e2e8f0; font-size: 0.8rem; border-radius: 6px; transition: background 0.2s; }
.nav-mega-link:hover { background: #10b98118; color: #10b981; }`,
    htmlCode: `<div class="nav-mega"><div class="nav-mega-item">Products</div><div class="nav-mega-panel"><div class="nav-mega-link">Widget Pro</div><div class="nav-mega-link">Gadget X</div><div class="nav-mega-link">Tool Kit</div><div class="nav-mega-link">Starter</div></div><div class="nav-mega-item">Docs</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-breadcrumb-chevron',
    name: 'Nav Breadcrumb Chevron',
    category: 'navigation',
    tags: ['nav', 'breadcrumb', 'chevron', 'separator'],
    difficulty: 'beginner',
    description: 'Breadcrumb navigation with CSS chevron separators',
    cssCode: `.nav-bc-chevron {
  display: flex;
  align-items: center;
  background: #0f0f1a;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
}
.nav-bc-item {
  color: #64748b;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 4px 0;
}
.nav-bc-item:hover { color: #10b981; }
.nav-bc-item:last-child { color: #e2e8f0; cursor: default; }
.nav-bc-sep {
  margin: 0 8px;
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 2px solid #10b981;
  border-top: 2px solid #10b981;
  transform: rotate(45deg);
  opacity: 0.6;
}`,
    htmlCode: `<div class="nav-bc-chevron"><span class="nav-bc-item">Home</span><span class="nav-bc-sep"></span><span class="nav-bc-item">Category</span><span class="nav-bc-sep"></span><span class="nav-bc-item">Item</span></div>`,
    isNew: true,
  },
  {
    id: 'nav-dot-indicator',
    name: 'Nav Dot Indicator',
    category: 'navigation',
    tags: ['nav', 'dot', 'indicator', 'minimal'],
    difficulty: 'beginner',
    description: 'Minimal navigation with dot indicators for the active item',
    cssCode: `.nav-dot {
  display: flex;
  gap: 20px;
  background: #0f0f1a;
  padding: 12px 20px;
  border-radius: 8px;
}
.nav-dot-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.nav-dot-item:hover { color: #94a3b8; }
.nav-dot-item::after {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: transparent;
  transition: all 0.3s ease;
}
.nav-dot-item.active { color: #10b981; }
.nav-dot-item.active::after {
  background: #10b981;
  box-shadow: 0 0 6px #10b98188;
}`,
    htmlCode: `<div class="nav-dot"><div class="nav-dot-item active">Home</div><div class="nav-dot-item">Explore</div><div class="nav-dot-item">Profile</div><div class="nav-dot-item">Settings</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-vertical-tabs',
    name: 'Nav Vertical Tabs',
    category: 'navigation',
    tags: ['nav', 'vertical', 'tabs', 'sidebar'],
    difficulty: 'intermediate',
    description: 'Vertical tab navigation with an active indicator bar',
    cssCode: `.nav-vtabs {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 160px;
  background: #0f0f1a;
  padding: 8px;
  border-radius: 10px;
}
.nav-vtabs-item {
  padding: 10px 14px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}
.nav-vtabs-item:hover { color: #e2e8f0; background: #ffffff06; }
.nav-vtabs-item.active {
  color: #10b981;
  background: #10b98111;
}
.nav-vtabs-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 3px;
  background: #10b981;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 6px #10b98166;
}`,
    htmlCode: `<div class="nav-vtabs"><div class="nav-vtabs-item active">General</div><div class="nav-vtabs-item">Security</div><div class="nav-vtabs-item">Notifications</div><div class="nav-vtabs-item">Billing</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-animated-border',
    name: 'Nav Animated Border',
    category: 'navigation',
    tags: ['nav', 'border', 'animated', 'gradient'],
    difficulty: 'intermediate',
    description: 'Navigation bar with an animated gradient border at the bottom',
    cssCode: `.nav-anim-border {
  display: flex;
  gap: 20px;
  padding: 12px 20px 16px;
  background: #0f0f1a;
  border-radius: 8px 8px 0 0;
  position: relative;
}
.nav-anim-border::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 100%;
  animation: nav-border-flow 3s ease infinite;
  border-radius: 0 0 2px 2px;
}
@keyframes nav-border-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.nav-anim-border-item {
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.nav-anim-border-item:hover { color: #10b981; }
.nav-anim-border-item.active { color: #10b981; }`,
    htmlCode: `<div class="nav-anim-border"><div class="nav-anim-border-item active">Home</div><div class="nav-anim-border-item">About</div><div class="nav-anim-border-item">Services</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-icon-menu',
    name: 'Nav Icon Menu',
    category: 'navigation',
    tags: ['nav', 'icon', 'menu', 'minimal'],
    difficulty: 'beginner',
    description: 'Icon-based navigation with tooltip labels on hover',
    cssCode: `.nav-icon-menu {
  display: flex;
  gap: 4px;
  background: #0f0f1a;
  padding: 8px;
  border-radius: 12px;
}
.nav-icon-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #64748b;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}
.nav-icon-item:hover { color: #10b981; background: #10b98111; }
.nav-icon-item.active { color: #10b981; background: #10b98122; }
.nav-icon-item::after {
  content: attr(data-label);
  position: absolute;
  bottom: -24px;
  font-size: 0.65rem;
  color: #64748b;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-weight: 600;
}
.nav-icon-item:hover::after { opacity: 1; color: #10b981; }`,
    htmlCode: `<div class="nav-icon-menu"><div class="nav-icon-item active" data-label="Home">🏠</div><div class="nav-icon-item" data-label="Search">🔍</div><div class="nav-icon-item" data-label="Alerts">🔔</div><div class="nav-icon-item" data-label="Profile">👤</div></div>`,
    isNew: true,
  },
  {
    id: 'nav-responsive-collapse',
    name: 'Nav Responsive Collapse',
    category: 'navigation',
    tags: ['nav', 'responsive', 'collapse', 'hamburger'],
    difficulty: 'advanced',
    description: 'Navigation with a hamburger toggle that expands a collapsed menu',
    cssCode: `.nav-collapse {
  background: #0f0f1a;
  border-radius: 8px;
  padding: 8px 12px;
}
.nav-collapse-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-collapse-logo {
  color: #10b981;
  font-weight: 800;
  font-size: 0.95rem;
}
.nav-collapse-toggle {
  width: 28px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.nav-collapse-toggle span {
  display: block;
  height: 2px;
  background: #94a3b8;
  border-radius: 1px;
  transition: all 0.3s ease;
}
.nav-collapse-toggle:hover span { background: #10b981; }
.nav-collapse-links {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}
.nav-collapse:hover .nav-collapse-links {
  max-height: 200px;
  padding-top: 8px;
}
.nav-collapse-link {
  display: block;
  padding: 8px 0;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
.nav-collapse-link:hover { color: #10b981; }`,
    htmlCode: `<div class="nav-collapse"><div class="nav-collapse-bar"><div class="nav-collapse-logo">Brand</div><div class="nav-collapse-toggle"><span></span><span></span><span></span></div></div><div class="nav-collapse-links"><div class="nav-collapse-link">Home</div><div class="nav-collapse-link">About</div><div class="nav-collapse-link">Contact</div></div></div>`,
    isNew: true,
  },
];
