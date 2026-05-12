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

export const effectsNewBatch8: CSSEffect[] = [
  // ==================== CARDS (10) ====================
  {
    id: 'card-slide-reveal',
    name: 'Card Slide Reveal',
    category: 'cards',
    tags: ['card', 'slide', 'reveal', 'hover', 'content'],
    difficulty: 'intermediate',
    description: 'A card that slides its overlay away on hover to reveal hidden content underneath',
    cssCode: `.card-slide-reveal {
  width: 220px;
  height: 140px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  cursor: pointer;
}
.card-slide-reveal-content {
  padding: 16px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.card-slide-reveal-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 1px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-slide-reveal:hover .card-slide-reveal-overlay {
  transform: translateX(-100%);
}
.card-slide-reveal-title {
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.card-slide-reveal-desc {
  color: #94a3b8;
  font-weight: 400;
  font-size: 0.65rem;
}`,
    htmlCode: `<div class="card-slide-reveal"><div class="card-slide-reveal-content"><div class="card-slide-reveal-title">Hidden Content</div><div class="card-slide-reveal-desc">Revealed when the overlay slides away on hover interaction</div></div><div class="card-slide-reveal-overlay">HOVER ME</div></div>`,
    isNew: true,
  },
  {
    id: 'card-stack-hover',
    name: 'Card Stack Hover',
    category: 'cards',
    tags: ['card', 'stack', 'hover', 'depth', 'layered'],
    difficulty: 'intermediate',
    description: 'Stacked cards that fan out on hover revealing multiple depth layers',
    cssCode: `.card-stack-wrap {
  position: relative;
  width: 200px;
  height: 130px;
  cursor: pointer;
}
.card-stack-layer {
  position: absolute;
  width: 200px;
  height: 120px;
  border-radius: 12px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 700;
  font-size: 0.7rem;
}
.card-stack-layer:nth-child(1) { z-index: 3; top: 0; }
.card-stack-layer:nth-child(2) { z-index: 2; top: 4px; left: 4px; opacity: 0.7; }
.card-stack-layer:nth-child(3) { z-index: 1; top: 8px; left: 8px; opacity: 0.4; }
.card-stack-wrap:hover .card-stack-layer:nth-child(1) { transform: translateX(-20px) rotate(-3deg); }
.card-stack-wrap:hover .card-stack-layer:nth-child(2) { transform: translateY(-5px); opacity: 0.85; }
.card-stack-wrap:hover .card-stack-layer:nth-child(3) { transform: translateX(20px) rotate(3deg); opacity: 0.6; }`,
    htmlCode: `<div class="card-stack-wrap"><div class="card-stack-layer">Front Card</div><div class="card-stack-layer">Middle Card</div><div class="card-stack-layer">Back Card</div></div>`,
    isNew: true,
  },
  {
    id: 'card-spotlight-cursor',
    name: 'Card Spotlight Cursor',
    category: 'cards',
    tags: ['card', 'spotlight', 'cursor', 'mouse', 'radial'],
    difficulty: 'advanced',
    description: 'A card with a spotlight effect that follows the cursor position using CSS radial gradient',
    cssCode: `.card-spotlight {
  width: 220px;
  height: 140px;
  border-radius: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  --mx: 50%;
  --my: 50%;
}
.card-spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 80px at var(--mx) var(--my), #10b98122, transparent);
  transition: opacity 0.3s;
  opacity: 0;
}
.card-spotlight:hover::before { opacity: 1; }
.card-spotlight::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 40px at var(--mx) var(--my), #10b98144, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.card-spotlight:hover::after { opacity: 1; }
.card-spotlight-text {
  position: relative;
  z-index: 1;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
}
.card-spotlight:hover { border-color: #10b98144; }`,
    htmlCode: `<div class="card-spotlight" onmousemove="this.style.setProperty('--mx',event.offsetX+'px');this.style.setProperty('--my',event.offsetY+'px')"><div class="card-spotlight-text">Spotlight follows your cursor</div></div>`,
    isNew: true,
  },
  {
    id: 'card-peel-corner',
    name: 'Card Peel Corner',
    category: 'cards',
    tags: ['card', 'peel', 'corner', 'fold', 'hover'],
    difficulty: 'advanced',
    description: 'A card with a peeling corner effect on hover that reveals a hidden layer underneath',
    cssCode: `.card-peel {
  width: 220px;
  height: 140px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}
.card-peel-base {
  position: absolute;
  inset: 0;
  background: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.8rem;
}
.card-peel-top {
  position: absolute;
  inset: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.card-peel:hover .card-peel-top {
  clip-path: polygon(0 0, 100% 0, 0 60%);
}
.card-peel-shadow {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 50%;
  background: linear-gradient(135deg, transparent 40%, #00000033 100%);
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
.card-peel:hover .card-peel-shadow { opacity: 1; }`,
    htmlCode: `<div class="card-peel"><div class="card-peel-base">Revealed!</div><div class="card-peel-top">Hover to peel corner</div><div class="card-peel-shadow"></div></div>`,
    isNew: true,
  },
  {
    id: 'card-holographic-2',
    name: 'Card Holographic 2',
    category: 'cards',
    tags: ['card', 'holographic', 'rainbow', 'prismatic', 'shine'],
    difficulty: 'advanced',
    description: 'A holographic card with animated rainbow refraction and shimmering light effect',
    cssCode: `.card-holo-2 {
  width: 220px;
  height: 140px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border: 1px solid #2a2a3e;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.card-holo-2::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981);
  animation: holo2-spin 4s linear infinite;
  opacity: 0.15;
}
.card-holo-2::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: linear-gradient(45deg, transparent 30%, #ffffff11 50%, transparent 70%);
  animation: holo2-shine 3s ease-in-out infinite;
}
@keyframes holo2-spin { to { transform: rotate(360deg); } }
@keyframes holo2-shine {
  0%, 100% { transform: translateX(-30%) translateY(-30%); }
  50% { transform: translateX(30%) translateY(30%); }
}
.card-holo-2-text {
  position: relative;
  z-index: 1;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
  padding: 16px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,
    htmlCode: `<div class="card-holo-2"><div class="card-holo-2-text">Holographic</div></div>`,
    isNew: true,
  },
  {
    id: 'card-glass-morphism-2',
    name: 'Card Glass Morphism 2',
    category: 'cards',
    tags: ['card', 'glass', 'morphism', 'blur', 'frosted'],
    difficulty: 'intermediate',
    description: 'A frosted glass card with animated gradient background and blur transparency effect',
    cssCode: `.card-glass-2-bg {
  width: 240px;
  height: 160px;
  border-radius: 16px;
  background: linear-gradient(135deg, #10b98133, #3b82f633, #8b5cf633);
  background-size: 200% 200%;
  animation: glass2-bg-shift 6s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
@keyframes glass2-bg-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.card-glass-2 {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.card-glass-2-title {
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.85rem;
}
.card-glass-2-sub {
  color: #94a3b8;
  font-size: 0.6rem;
  font-weight: 500;
}`,
    htmlCode: `<div class="card-glass-2-bg"><div class="card-glass-2"><div class="card-glass-2-title">Glass Morphism</div><div class="card-glass-2-sub">Frosted transparency effect</div></div></div>`,
    isNew: true,
  },
  {
    id: 'card-border-draw',
    name: 'Card Border Draw',
    category: 'cards',
    tags: ['card', 'border', 'draw', 'animate', 'stroke'],
    difficulty: 'intermediate',
    description: 'A card with an animated border that draws itself around the edges on hover',
    cssCode: `.card-border-draw {
  width: 220px;
  height: 140px;
  border-radius: 12px;
  background: #0f0f1a;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.card-border-draw::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px;
  background: conic-gradient(from 0deg, #10b981, #10b981 var(--border-angle, 0deg), transparent var(--border-angle, 0deg));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: border-draw 2s ease-in-out infinite;
}
@keyframes border-draw {
  0% { --border-angle: 0deg; opacity: 0.3; }
  50% { --border-angle: 360deg; opacity: 1; }
  100% { --border-angle: 360deg; opacity: 0.3; }
}
.card-border-draw-content {
  position: relative;
  z-index: 1;
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
}
.card-border-draw:hover::before {
  animation-duration: 0.8s;
}`,
    htmlCode: `<div class="card-border-draw"><div class="card-border-draw-content">Animated border draws around this card</div></div>`,
    isNew: true,
  },
  {
    id: 'card-expand-content',
    name: 'Card Expand Content',
    category: 'cards',
    tags: ['card', 'expand', 'content', 'hover', 'grow'],
    difficulty: 'intermediate',
    description: 'A card that expands to reveal additional content when hovered, with smooth size transition',
    cssCode: `.card-expand {
  width: 220px;
  min-height: 80px;
  border-radius: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  padding: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.card-expand-title {
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
}
.card-expand-extra {
  max-height: 0;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: #94a3b8;
  font-size: 0.65rem;
  margin-top: 0;
}
.card-expand:hover {
  border-color: #10b98144;
  box-shadow: 0 8px 30px #10b98111;
}
.card-expand:hover .card-expand-extra {
  max-height: 80px;
  opacity: 1;
  margin-top: 10px;
}`,
    htmlCode: `<div class="card-expand"><div class="card-expand-title">Hover to Expand</div><div class="card-expand-extra">This additional content smoothly expands into view when you hover over the card element.</div></div>`,
    isNew: true,
  },
  {
    id: 'card-rotate-in',
    name: 'Card Rotate In',
    category: 'cards',
    tags: ['card', 'rotate', 'entrance', 'animation', 'flip'],
    difficulty: 'beginner',
    description: 'A card that rotates in from the side with a smooth entrance animation',
    cssCode: `.card-rotate-in {
  width: 220px;
  height: 140px;
  border-radius: 12px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  animation: card-rotate-entrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes card-rotate-entrance {
  0% {
    transform: perspective(600px) rotateY(-90deg) scale(0.8);
    opacity: 0;
  }
  60% {
    transform: perspective(600px) rotateY(10deg) scale(1.02);
    opacity: 1;
  }
  100% {
    transform: perspective(600px) rotateY(0deg) scale(1);
    opacity: 1;
  }
}
.card-rotate-in-title {
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
}
.card-rotate-in-sub {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 500;
}`,
    htmlCode: `<div class="card-rotate-in"><div class="card-rotate-in-title">Rotate In</div><div class="card-rotate-in-sub">Smooth entrance animation</div></div>`,
    isNew: true,
  },
  {
    id: 'card-fade-up',
    name: 'Card Fade Up',
    category: 'cards',
    tags: ['card', 'fade', 'up', 'entrance', 'animate'],
    difficulty: 'beginner',
    description: 'A card that fades in while sliding upward with a staggered content reveal',
    cssCode: `.card-fade-up {
  width: 220px;
  height: 140px;
  border-radius: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  animation: fade-up-card 0.6s ease-out both;
}
@keyframes fade-up-card {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.card-fade-up-title {
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  animation: fade-up-card 0.6s ease-out 0.1s both;
}
.card-fade-up-desc {
  color: #94a3b8;
  font-size: 0.65rem;
  animation: fade-up-card 0.6s ease-out 0.2s both;
}
.card-fade-up-badge {
  display: inline-block;
  background: #10b98122;
  color: #10b981;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.55rem;
  font-weight: 700;
  width: fit-content;
  animation: fade-up-card 0.6s ease-out 0.3s both;
}`,
    htmlCode: `<div class="card-fade-up"><div class="card-fade-up-badge">NEW</div><div class="card-fade-up-title">Fade Up Card</div><div class="card-fade-up-desc">Smooth entrance with staggered content reveal</div></div>`,
    isNew: true,
  },

  // ==================== HOVER (10) ====================
  {
    id: 'hover-double-border',
    name: 'Hover Double Border',
    category: 'hover',
    tags: ['hover', 'border', 'double', 'outline', 'animate'],
    difficulty: 'beginner',
    description: 'An element that reveals double animated borders on hover with staggered timing',
    cssCode: `.hover-double-border {
  padding: 16px 32px;
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
}
.hover-double-border::before,
.hover-double-border::after {
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px solid transparent;
  border-radius: 12px;
  transition: border-color 0.3s;
}
.hover-double-border::after { inset: -12px; border-radius: 16px; }
.hover-double-border:hover {
  border-color: #10b981;
  color: #10b981;
}
.hover-double-border:hover::before {
  border-color: #10b98166;
  transition-delay: 0.1s;
}
.hover-double-border:hover::after {
  border-color: #10b98133;
  transition-delay: 0.2s;
}`,
    htmlCode: `<div class="hover-double-border">Hover Me</div>`,
    isNew: true,
  },
  {
    id: 'hover-slide-bg',
    name: 'Hover Slide Background',
    category: 'hover',
    tags: ['hover', 'slide', 'background', 'fill', 'sweep'],
    difficulty: 'beginner',
    description: 'An element whose background slides in from the left on hover with a smooth sweep effect',
    cssCode: `.hover-slide-bg {
  padding: 14px 32px;
  background: #0f0f1a;
  border: 2px solid #10b981;
  border-radius: 8px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 1;
}
.hover-slide-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #10b981;
  z-index: -1;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-slide-bg:hover::before { width: 100%; }
.hover-slide-bg:hover { color: #0a0a1a; }`,
    htmlCode: `<div class="hover-slide-bg">Slide Fill</div>`,
    isNew: true,
  },
  {
    id: 'hover-text-replace',
    name: 'Hover Text Replace',
    category: 'hover',
    tags: ['hover', 'text', 'replace', 'swap', 'transition'],
    difficulty: 'intermediate',
    description: 'Text that smoothly replaces itself with different content on hover using CSS transitions',
    cssCode: `.hover-text-replace {
  padding: 14px 32px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hover-text-default,
.hover-text-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  white-space: nowrap;
}
.hover-text-hover {
  color: #10b981;
  transform: translateY(100%);
  opacity: 0;
}
.hover-text-replace:hover .hover-text-default {
  transform: translateY(-100%);
  opacity: 0;
}
.hover-text-replace:hover .hover-text-hover {
  transform: translateY(0);
  opacity: 1;
}`,
    htmlCode: `<div class="hover-text-replace"><span class="hover-text-default">Hello</span><span class="hover-text-hover">World!</span></div>`,
    isNew: true,
  },
  {
    id: 'hover-shrink',
    name: 'Hover Shrink',
    category: 'hover',
    tags: ['hover', 'shrink', 'scale', 'compact', 'press'],
    difficulty: 'beginner',
    description: 'An element that shrinks on hover creating a press-like interaction effect',
    cssCode: `.hover-shrink {
  padding: 16px 36px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 10px;
  color: #0a0a1a;
  font-weight: 800;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px #10b98133;
}
.hover-shrink:hover {
  transform: scale(0.9);
  box-shadow: 0 2px 8px #10b98122;
}
.hover-shrink:active {
  transform: scale(0.85);
  box-shadow: 0 1px 4px #10b98111;
}`,
    htmlCode: `<div class="hover-shrink">Press Me</div>`,
    isNew: true,
  },
  {
    id: 'hover-rotate-3d',
    name: 'Hover Rotate 3D',
    category: 'hover',
    tags: ['hover', 'rotate', '3d', 'perspective', 'tilt'],
    difficulty: 'intermediate',
    description: 'An element that tilts in 3D space on hover using perspective transforms',
    cssCode: `.hover-rotate-3d {
  padding: 20px 36px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s, box-shadow 0.4s;
  transform-style: preserve-3d;
  perspective: 600px;
}
.hover-rotate-3d:hover {
  transform: perspective(600px) rotateY(15deg) rotateX(-5deg);
  border-color: #10b98144;
  box-shadow: -8px 8px 20px #10b98111;
}
.hover-rotate-3d-text {
  transition: transform 0.4s;
  transform: translateZ(20px);
}
.hover-rotate-3d:hover .hover-rotate-3d-text {
  color: #10b981;
}`,
    htmlCode: `<div class="hover-rotate-3d"><div class="hover-rotate-3d-text">Tilt 3D</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-skew-edge',
    name: 'Hover Skew Edge',
    category: 'hover',
    tags: ['hover', 'skew', 'edge', 'slant', 'transform'],
    difficulty: 'intermediate',
    description: 'An element that skews on hover creating a dynamic slanted edge effect',
    cssCode: `.hover-skew-edge {
  padding: 14px 36px;
  background: #0f0f1a;
  border: 2px solid #10b981;
  border-radius: 4px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, color 0.3s;
  z-index: 1;
}
.hover-skew-edge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #10b981;
  transform: skewX(-20deg);
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
.hover-skew-edge:hover::before { left: 0; }
.hover-skew-edge:hover {
  color: #0a0a1a;
  transform: skewX(-5deg);
}`,
    htmlCode: `<div class="hover-skew-edge">Skew Me</div>`,
    isNew: true,
  },
  {
    id: 'hover-curtain-reveal',
    name: 'Hover Curtain Reveal',
    category: 'hover',
    tags: ['hover', 'curtain', 'reveal', 'split', 'open'],
    difficulty: 'intermediate',
    description: 'Two halves of an element split apart on hover like opening curtains to reveal content',
    cssCode: `.hover-curtain {
  width: 200px;
  height: 60px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}
.hover-curtain-reveal {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: 800;
  font-size: 0.85rem;
}
.hover-curtain-left,
.hover-curtain-right {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
}
.hover-curtain-left {
  left: 0;
  border-radius: 8px 0 0 8px;
  justify-content: flex-end;
  padding-right: 8px;
}
.hover-curtain-right {
  right: 0;
  border-radius: 0 8px 8px 0;
  padding-left: 8px;
}
.hover-curtain:hover .hover-curtain-left { transform: translateX(-100%); }
.hover-curtain:hover .hover-curtain-right { transform: translateX(100%); }`,
    htmlCode: `<div class="hover-curtain"><div class="hover-curtain-reveal">REVEALED</div><div class="hover-curtain-left">Open</div><div class="hover-curtain-right">Me</div></div>`,
    isNew: true,
  },
  {
    id: 'hover-fill-diagonal',
    name: 'Hover Fill Diagonal',
    category: 'hover',
    tags: ['hover', 'fill', 'diagonal', 'sweep', 'clip-path'],
    difficulty: 'intermediate',
    description: 'A diagonal fill that sweeps across the element on hover using clip-path animation',
    cssCode: `.hover-fill-diag {
  padding: 14px 36px;
  background: #0f0f1a;
  border: 2px solid #10b981;
  border-radius: 8px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s;
  z-index: 1;
}
.hover-fill-diag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  background: #10b981;
  transform: translateX(-120%) skewX(-20deg);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
.hover-fill-diag:hover::before {
  transform: translateX(-10%) skewX(-20deg);
}
.hover-fill-diag:hover { color: #0a0a1a; }`,
    htmlCode: `<div class="hover-fill-diag">Diagonal Fill</div>`,
    isNew: true,
  },
  {
    id: 'hover-blur-focus',
    name: 'Hover Blur Focus',
    category: 'hover',
    tags: ['hover', 'blur', 'focus', 'clarity', 'sharpen'],
    difficulty: 'beginner',
    description: 'An element that starts blurred and comes into sharp focus on hover with smooth transition',
    cssCode: `.hover-blur-focus {
  padding: 20px 36px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  filter: blur(4px);
  transition: filter 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.4s, box-shadow 0.4s;
  opacity: 0.5;
}
.hover-blur-focus:hover {
  filter: blur(0);
  border-color: #10b98144;
  box-shadow: 0 0 20px #10b98122;
  opacity: 1;
  color: #10b981;
}`,
    htmlCode: `<div class="hover-blur-focus">Focus Me</div>`,
    isNew: true,
  },
  {
    id: 'hover-glow-pulse',
    name: 'Hover Glow Pulse',
    category: 'hover',
    tags: ['hover', 'glow', 'pulse', 'neon', 'breathe'],
    difficulty: 'beginner',
    description: 'An element with a pulsing glow effect on hover that creates a neon breathing animation',
    cssCode: `.hover-glow-pulse {
  padding: 16px 36px;
  background: #0f0f1a;
  border: 2px solid #10b981;
  border-radius: 8px;
  color: #10b981;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.hover-glow-pulse:hover {
  animation: glow-pulse 1.5s ease-in-out infinite;
}
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 5px #10b98144, 0 0 15px #10b98122;
  }
  50% {
    box-shadow: 0 0 15px #10b98166, 0 0 40px #10b98133, 0 0 60px #10b98111;
  }
}
.hover-glow-pulse:hover {
  color: #34d399;
  border-color: #34d399;
}`,
    htmlCode: `<div class="hover-glow-pulse">Glow Pulse</div>`,
    isNew: true,
  },

  // ==================== LOADING (10) ====================
  {
    id: 'loader-bouncing-ball',
    name: 'Loader Bouncing Ball',
    category: 'loading',
    tags: ['loader', 'bounce', 'ball', 'physics', 'animation'],
    difficulty: 'beginner',
    description: 'A bouncing ball loader with realistic physics-inspired squash and stretch animation',
    cssCode: `.loader-bounce-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.loader-bounce-ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  animation: bounce-ball 0.6s cubic-bezier(0.36, 0, 0.66, -0.56) infinite alternate;
  box-shadow: 0 0 10px #10b98144;
}
@keyframes bounce-ball {
  0% {
    transform: translateY(30px) scaleX(1.2) scaleY(0.8);
    background: #10b981;
  }
  100% {
    transform: translateY(-10px) scaleX(0.9) scaleY(1.1);
    background: #34d399;
  }
}
.loader-bounce-shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background: #10b98144;
  animation: bounce-shadow 0.6s cubic-bezier(0.36, 0, 0.66, -0.56) infinite alternate;
}
@keyframes bounce-shadow {
  0% { transform: scaleX(1.5); opacity: 0.3; }
  100% { transform: scaleX(0.6); opacity: 0.1; }
}`,
    htmlCode: `<div class="loader-bounce-wrap"><div class="loader-bounce-ball"></div><div class="loader-bounce-shadow"></div></div>`,
    isNew: true,
  },
  {
    id: 'loader-spinning-cube',
    name: 'Loader Spinning Cube',
    category: 'loading',
    tags: ['loader', 'cube', '3d', 'spin', 'rotate'],
    difficulty: 'intermediate',
    description: 'A 3D spinning cube loader with perspective rotation and smooth turning animation',
    cssCode: `.loader-cube-wrap {
  perspective: 200px;
  width: 40px;
  height: 40px;
}
.loader-cube {
  width: 40px;
  height: 40px;
  position: relative;
  transform-style: preserve-3d;
  animation: cube-spin 2s linear infinite;
}
@keyframes cube-spin {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
.loader-cube-face {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #10b981;
  background: #10b98111;
  border-radius: 4px;
}
.loader-cube-face:nth-child(1) { transform: translateZ(20px); }
.loader-cube-face:nth-child(2) { transform: rotateY(180deg) translateZ(20px); }
.loader-cube-face:nth-child(3) { transform: rotateY(90deg) translateZ(20px); }
.loader-cube-face:nth-child(4) { transform: rotateY(-90deg) translateZ(20px); }
.loader-cube-face:nth-child(5) { transform: rotateX(90deg) translateZ(20px); }
.loader-cube-face:nth-child(6) { transform: rotateX(-90deg) translateZ(20px); }`,
    htmlCode: `<div class="loader-cube-wrap"><div class="loader-cube"><div class="loader-cube-face"></div><div class="loader-cube-face"></div><div class="loader-cube-face"></div><div class="loader-cube-face"></div><div class="loader-cube-face"></div><div class="loader-cube-face"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'loader-wave-bars-2',
    name: 'Loader Wave Bars 2',
    category: 'loading',
    tags: ['loader', 'wave', 'bars', 'stagger', 'rhythm'],
    difficulty: 'beginner',
    description: 'Staggered wave bars loader with alternating heights creating a rhythmic wave pattern',
    cssCode: `.loader-wave2-wrap {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
}
.loader-wave2-bar {
  width: 6px;
  height: 10px;
  border-radius: 3px;
  background: #10b981;
  animation: wave2-pulse 1s ease-in-out infinite;
}
.loader-wave2-bar:nth-child(1) { animation-delay: 0s; }
.loader-wave2-bar:nth-child(2) { animation-delay: 0.1s; }
.loader-wave2-bar:nth-child(3) { animation-delay: 0.2s; }
.loader-wave2-bar:nth-child(4) { animation-delay: 0.3s; }
.loader-wave2-bar:nth-child(5) { animation-delay: 0.4s; }
.loader-wave2-bar:nth-child(6) { animation-delay: 0.5s; }
.loader-wave2-bar:nth-child(7) { animation-delay: 0.6s; }
@keyframes wave2-pulse {
  0%, 100% { height: 10px; opacity: 0.4; background: #10b981; }
  50% { height: 36px; opacity: 1; background: #34d399; }
}`,
    htmlCode: `<div class="loader-wave2-wrap"><div class="loader-wave2-bar"></div><div class="loader-wave2-bar"></div><div class="loader-wave2-bar"></div><div class="loader-wave2-bar"></div><div class="loader-wave2-bar"></div><div class="loader-wave2-bar"></div><div class="loader-wave2-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'loader-pulse-dots',
    name: 'Loader Pulse Dots',
    category: 'loading',
    tags: ['loader', 'pulse', 'dots', 'scale', 'stagger'],
    difficulty: 'beginner',
    description: 'Three dots that pulse in sequence creating a rhythmic loading indicator',
    cssCode: `.loader-pulse-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}
.loader-pulse-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse-dot 1.2s ease-in-out infinite;
}
.loader-pulse-dot:nth-child(1) { animation-delay: 0s; }
.loader-pulse-dot:nth-child(2) { animation-delay: 0.2s; }
.loader-pulse-dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes pulse-dot {
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.3;
    background: #10b981;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
    background: #34d399;
    box-shadow: 0 0 12px #10b98144;
  }
}`,
    htmlCode: `<div class="loader-pulse-dots"><div class="loader-pulse-dot"></div><div class="loader-pulse-dot"></div><div class="loader-pulse-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'loader-orbit-ring',
    name: 'Loader Orbit Ring',
    category: 'loading',
    tags: ['loader', 'orbit', 'ring', 'circular', 'satellite'],
    difficulty: 'intermediate',
    description: 'A dot orbiting around a center point creating a satellite ring loading animation',
    cssCode: `.loader-orbit {
  width: 50px;
  height: 50px;
  position: relative;
}
.loader-orbit-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b98144;
  transform: translate(-50%, -50%);
}
.loader-orbit-path {
  position: absolute;
  inset: 0;
  border: 1px solid #10b98122;
  border-radius: 50%;
  animation: orbit-spin 1.5s linear infinite;
}
.loader-orbit-dot {
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #10b98144;
}
@keyframes orbit-spin { to { transform: rotate(360deg); } }
.loader-orbit-path:nth-child(3) {
  inset: -8px;
  animation-duration: 2.5s;
  animation-direction: reverse;
}
.loader-orbit-path:nth-child(3) .loader-orbit-dot {
  width: 5px;
  height: 5px;
  background: #34d39988;
  top: -2.5px;
}`,
    htmlCode: `<div class="loader-orbit"><div class="loader-orbit-center"></div><div class="loader-orbit-path"><div class="loader-orbit-dot"></div></div><div class="loader-orbit-path"><div class="loader-orbit-dot"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'loader-morph-square',
    name: 'Loader Morph Square',
    category: 'loading',
    tags: ['loader', 'morph', 'shape', 'circle', 'square'],
    difficulty: 'intermediate',
    description: 'A shape that morphs between a square and circle with color and rotation transitions',
    cssCode: `.loader-morph {
  width: 36px;
  height: 36px;
  background: #10b981;
  animation: morph-shape 2s ease-in-out infinite;
}
@keyframes morph-shape {
  0% {
    border-radius: 4px;
    transform: rotate(0deg) scale(1);
    background: #10b981;
  }
  25% {
    border-radius: 50%;
    transform: rotate(90deg) scale(0.8);
    background: #34d399;
  }
  50% {
    border-radius: 4px;
    transform: rotate(180deg) scale(1);
    background: #6ee7b7;
  }
  75% {
    border-radius: 50%;
    transform: rotate(270deg) scale(0.8);
    background: #34d399;
  }
  100% {
    border-radius: 4px;
    transform: rotate(360deg) scale(1);
    background: #10b981;
  }
}`,
    htmlCode: `<div class="loader-morph"></div>`,
    isNew: true,
  },
  {
    id: 'loader-dash-spin',
    name: 'Loader Dash Spin',
    category: 'loading',
    tags: ['loader', 'dash', 'spin', 'stroke', 'rotate'],
    difficulty: 'intermediate',
    description: 'A spinning dashed circle loader with animated stroke-dashoffset creating a chase effect',
    cssCode: `.loader-dash-spin {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px dashed #10b98133;
  position: relative;
  animation: dash-rotate 3s linear infinite;
}
.loader-dash-spin::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #10b981;
  border-right-color: #10b98166;
  animation: dash-rotate 1s linear infinite reverse;
}
.loader-dash-spin::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-bottom-color: #34d399;
  animation: dash-rotate 1.5s linear infinite;
}
@keyframes dash-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="loader-dash-spin"></div>`,
    isNew: true,
  },
  {
    id: 'loader-bar-fill',
    name: 'Loader Bar Fill',
    category: 'loading',
    tags: ['loader', 'bar', 'fill', 'progress', 'animate'],
    difficulty: 'beginner',
    description: 'A horizontal bar that fills from left to right with a smooth looping progress animation',
    cssCode: `.loader-bar-fill-wrap {
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
.loader-bar-fill-track {
  width: 100%;
  height: 6px;
  background: #1a1a2e;
  border-radius: 3px;
  overflow: hidden;
}
.loader-bar-fill-progress {
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 3px;
  animation: bar-fill-move 1.5s ease-in-out infinite;
}
@keyframes bar-fill-move {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(530%); }
}
.loader-bar-fill-label {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}`,
    htmlCode: `<div class="loader-bar-fill-wrap"><div class="loader-bar-fill-track"><div class="loader-bar-fill-progress"></div></div><div class="loader-bar-fill-label">Loading</div></div>`,
    isNew: true,
  },
  {
    id: 'loader-fade-dots',
    name: 'Loader Fade Dots',
    category: 'loading',
    tags: ['loader', 'fade', 'dots', 'opacity', 'stagger'],
    difficulty: 'beginner',
    description: 'A row of dots that fade in and out sequentially creating a smooth wave loading indicator',
    cssCode: `.loader-fade-dots {
  display: flex;
  align-items: center;
  gap: 6px;
}
.loader-fade-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  animation: fade-dot 1.4s ease-in-out infinite;
}
.loader-fade-dot:nth-child(1) { animation-delay: 0s; }
.loader-fade-dot:nth-child(2) { animation-delay: 0.2s; }
.loader-fade-dot:nth-child(3) { animation-delay: 0.4s; }
.loader-fade-dot:nth-child(4) { animation-delay: 0.6s; }
.loader-fade-dot:nth-child(5) { animation-delay: 0.8s; }
@keyframes fade-dot {
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); background: #34d399; }
}`,
    htmlCode: `<div class="loader-fade-dots"><div class="loader-fade-dot"></div><div class="loader-fade-dot"></div><div class="loader-fade-dot"></div><div class="loader-fade-dot"></div><div class="loader-fade-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'loader-rotate-slice',
    name: 'Loader Rotate Slice',
    category: 'loading',
    tags: ['loader', 'rotate', 'slice', 'pie', 'segment'],
    difficulty: 'intermediate',
    description: 'A rotating pie-slice loader with a missing segment that spins continuously',
    cssCode: `.loader-rotate-slice {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: conic-gradient(#10b981 0deg, #10b981 270deg, transparent 270deg);
  animation: slice-spin 1s linear infinite;
  position: relative;
}
.loader-rotate-slice::after {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: #0a0a1a;
}
@keyframes slice-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="loader-rotate-slice"></div>`,
    isNew: true,
  },

  // ==================== BACKGROUNDS (10) ====================
  {
    id: 'background-aurora-2',
    name: 'Background Aurora 2',
    category: 'backgrounds',
    tags: ['background', 'aurora', 'lights', 'gradient', 'nature'],
    difficulty: 'advanced',
    description: 'An animated aurora borealis background with shifting gradient curtains of emerald light',
    cssCode: `.bg-aurora-2 {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
}
.bg-aurora-2::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 120%;
  top: -20%;
  left: -50%;
  background:
    radial-gradient(ellipse 50% 40% at 30% 50%, #10b98133 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 70% 40%, #05966922 0%, transparent 70%),
    radial-gradient(ellipse 60% 30% at 50% 60%, #34d39911 0%, transparent 70%);
  animation: aurora2-drift 8s ease-in-out infinite alternate;
}
.bg-aurora-2::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 120%;
  top: -30%;
  left: -30%;
  background:
    radial-gradient(ellipse 45% 35% at 60% 30%, #10b98122 0%, transparent 60%),
    radial-gradient(ellipse 35% 45% at 20% 60%, #6ee7b711 0%, transparent 60%);
  animation: aurora2-drift 10s ease-in-out infinite alternate-reverse;
}
@keyframes aurora2-drift {
  0% { transform: translateX(-10%) skewX(-5deg); }
  100% { transform: translateX(10%) skewX(5deg); }
}`,
    htmlCode: `<div class="bg-aurora-2"></div>`,
    isNew: true,
  },
  {
    id: 'background-mesh-flow',
    name: 'Background Mesh Flow',
    category: 'backgrounds',
    tags: ['background', 'mesh', 'flow', 'organic', 'gradient'],
    difficulty: 'advanced',
    description: 'A flowing organic mesh background with overlapping gradient blobs creating fluid motion',
    cssCode: `.bg-mesh-flow {
  width: 100%;
  height: 100%;
  background: #0f0f1a;
  position: relative;
  overflow: hidden;
}
.bg-mesh-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: mesh-float 8s ease-in-out infinite alternate;
}
.bg-mesh-blob:nth-child(1) {
  width: 300px;
  height: 300px;
  background: #10b981;
  top: -10%;
  left: -10%;
  animation-duration: 8s;
}
.bg-mesh-blob:nth-child(2) {
  width: 250px;
  height: 250px;
  background: #059669;
  bottom: -10%;
  right: -10%;
  animation-delay: 2s;
  animation-duration: 10s;
}
.bg-mesh-blob:nth-child(3) {
  width: 200px;
  height: 200px;
  background: #34d399;
  top: 40%;
  left: 40%;
  animation-delay: 4s;
  animation-duration: 12s;
}
@keyframes mesh-float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.1); }
  66% { transform: translate(-20px, 30px) scale(0.9); }
  100% { transform: translate(10px, 10px) scale(1.05); }
}`,
    htmlCode: `<div class="bg-mesh-flow"><div class="bg-mesh-blob"></div><div class="bg-mesh-blob"></div><div class="bg-mesh-blob"></div></div>`,
    isNew: true,
  },
  {
    id: 'background-gradient-rotate',
    name: 'Background Gradient Rotate',
    category: 'backgrounds',
    tags: ['background', 'gradient', 'rotate', 'conic', 'spin'],
    difficulty: 'intermediate',
    description: 'A continuously rotating conic gradient background that creates a dynamic spinning color wheel',
    cssCode: `.bg-grad-rotate {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
}
.bg-grad-rotate::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    #10b98111,
    #10b98133,
    #05966922,
    #34d39911,
    #10b98144,
    #10b98111
  );
  animation: grad-rotate-spin 6s linear infinite;
}
.bg-grad-rotate::after {
  content: '';
  position: absolute;
  inset: 20%;
  border-radius: 50%;
  background: #0a0a1a;
  filter: blur(0px);
}
@keyframes grad-rotate-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="bg-grad-rotate"></div>`,
    isNew: true,
  },
  {
    id: 'background-noise-grain',
    name: 'Background Noise Grain',
    category: 'backgrounds',
    tags: ['background', 'noise', 'grain', 'texture', 'static'],
    difficulty: 'intermediate',
    description: 'A subtle animated noise grain texture overlay creating a film-like static background',
    cssCode: `.bg-noise-grain {
  width: 100%;
  height: 100%;
  background: #0f0f1a;
  position: relative;
  overflow: hidden;
}
.bg-noise-grain::before {
  content: '';
  position: absolute;
  inset: -200%;
  background-image:
    radial-gradient(circle 1px, #10b98115 1px, transparent 1px),
    radial-gradient(circle 1px, #10b98110 1px, transparent 1px);
  background-size: 3px 3px, 5px 5px;
  background-position: 0 0, 2px 2px;
  animation: noise-shift 0.3s steps(3) infinite;
  opacity: 0.6;
}
.bg-noise-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 30%, #0f0f1a 80%);
}
@keyframes noise-shift {
  0% { transform: translate(0, 0); }
  33% { transform: translate(-5px, 3px); }
  66% { transform: translate(3px, -5px); }
  100% { transform: translate(-3px, 2px); }
}`,
    htmlCode: `<div class="bg-noise-grain"></div>`,
    isNew: true,
  },
  {
    id: 'background-ripple',
    name: 'Background Ripple',
    category: 'backgrounds',
    tags: ['background', 'ripple', 'wave', 'concentric', 'water'],
    difficulty: 'intermediate',
    description: 'An animated concentric ripple effect like water drops creating expanding circles from center',
    cssCode: `.bg-ripple {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-ripple-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid #10b98144;
  animation: ripple-expand 3s ease-out infinite;
}
.bg-ripple-ring:nth-child(1) { animation-delay: 0s; }
.bg-ripple-ring:nth-child(2) { animation-delay: 0.75s; }
.bg-ripple-ring:nth-child(3) { animation-delay: 1.5s; }
.bg-ripple-ring:nth-child(4) { animation-delay: 2.25s; }
@keyframes ripple-expand {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
    border-color: #10b981;
  }
  100% {
    width: 400px;
    height: 400px;
    opacity: 0;
    border-color: #10b98100;
  }
}
.bg-ripple-center {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b98144;
  z-index: 1;
}`,
    htmlCode: `<div class="bg-ripple"><div class="bg-ripple-ring"></div><div class="bg-ripple-ring"></div><div class="bg-ripple-ring"></div><div class="bg-ripple-ring"></div><div class="bg-ripple-center"></div></div>`,
    isNew: true,
  },
  {
    id: 'background-plasma',
    name: 'Background Plasma',
    category: 'backgrounds',
    tags: ['background', 'plasma', 'organic', 'blob', 'fluid'],
    difficulty: 'advanced',
    description: 'An animated plasma background with morphing organic blobs and color blending',
    cssCode: `.bg-plasma {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
}
.bg-plasma-blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  filter: blur(40px);
  opacity: 0.35;
}
.bg-plasma-blob:nth-child(1) {
  width: 60%;
  height: 60%;
  background: #10b981;
  top: -10%;
  left: -10%;
  animation: plasma-morph-1 8s ease-in-out infinite alternate;
}
.bg-plasma-blob:nth-child(2) {
  width: 50%;
  height: 50%;
  background: #059669;
  bottom: -10%;
  right: -10%;
  animation: plasma-morph-2 10s ease-in-out infinite alternate;
}
@keyframes plasma-morph-1 {
  0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0, 0); }
  100% { border-radius: 70% 30% 40% 60% / 60% 40% 50% 50%; transform: translate(20%, 15%); }
}
@keyframes plasma-morph-2 {
  0% { border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; transform: translate(0, 0); }
  100% { border-radius: 30% 70% 60% 40% / 50% 40% 60% 50%; transform: translate(-20%, -15%); }
}`,
    htmlCode: `<div class="bg-plasma"><div class="bg-plasma-blob"></div><div class="bg-plasma-blob"></div></div>`,
    isNew: true,
  },
  {
    id: 'background-nebula',
    name: 'Background Nebula',
    category: 'backgrounds',
    tags: ['background', 'nebula', 'space', 'stars', 'cosmic'],
    difficulty: 'advanced',
    description: 'A cosmic nebula background with swirling gas clouds and twinkling star-like points',
    cssCode: `.bg-nebula {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
}
.bg-nebula::before {
  content: '';
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(ellipse 40% 50% at 30% 40%, #10b98118 0%, transparent 70%),
    radial-gradient(ellipse 50% 40% at 70% 60%, #05966915 0%, transparent 70%),
    radial-gradient(ellipse 30% 30% at 50% 30%, #34d39910 0%, transparent 60%);
  animation: nebula-swirl 12s ease-in-out infinite alternate;
}
.bg-nebula::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1px 1px at 20% 30%, #10b98188, transparent),
    radial-gradient(1px 1px at 50% 70%, #34d39988, transparent),
    radial-gradient(1px 1px at 80% 20%, #10b98166, transparent),
    radial-gradient(1px 1px at 40% 80%, #6ee7b766, transparent),
    radial-gradient(1px 1px at 70% 50%, #10b98155, transparent);
  animation: nebula-twinkle 3s ease-in-out infinite alternate;
}
@keyframes nebula-swirl {
  0% { transform: rotate(0deg) scale(1); }
  100% { transform: rotate(10deg) scale(1.1); }
}
@keyframes nebula-twinkle {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}`,
    htmlCode: `<div class="bg-nebula"></div>`,
    isNew: true,
  },
  {
    id: 'background-smoke',
    name: 'Background Smoke',
    category: 'backgrounds',
    tags: ['background', 'smoke', 'wispy', 'fade', 'organic'],
    difficulty: 'advanced',
    description: 'A wispy smoke background effect with rising and fading organic cloud shapes',
    cssCode: `.bg-smoke {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
}
.bg-smoke-layer {
  position: absolute;
  inset: 0;
  opacity: 0.3;
}
.bg-smoke-layer:nth-child(1) {
  background:
    radial-gradient(ellipse 60% 30% at 30% 80%, #10b98133 0%, transparent 70%),
    radial-gradient(ellipse 50% 25% at 70% 70%, #10b98122 0%, transparent 60%);
  animation: smoke-rise 6s ease-in-out infinite alternate;
}
.bg-smoke-layer:nth-child(2) {
  background:
    radial-gradient(ellipse 40% 20% at 50% 90%, #34d39922 0%, transparent 60%),
    radial-gradient(ellipse 55% 25% at 20% 75%, #10b98118 0%, transparent 50%);
  animation: smoke-rise 8s ease-in-out 1s infinite alternate;
}
.bg-smoke-layer:nth-child(3) {
  background:
    radial-gradient(ellipse 35% 15% at 60% 85%, #6ee7b715 0%, transparent 50%);
  animation: smoke-rise 10s ease-in-out 2s infinite alternate;
}
@keyframes smoke-rise {
  0% { transform: translateY(20%) scaleX(1); opacity: 0.1; }
  50% { opacity: 0.35; }
  100% { transform: translateY(-30%) scaleX(1.3); opacity: 0.05; }
}`,
    htmlCode: `<div class="bg-smoke"><div class="bg-smoke-layer"></div><div class="bg-smoke-layer"></div><div class="bg-smoke-layer"></div></div>`,
    isNew: true,
  },
  {
    id: 'background-crystal',
    name: 'Background Crystal',
    category: 'backgrounds',
    tags: ['background', 'crystal', 'geometric', 'facets', 'prism'],
    difficulty: 'intermediate',
    description: 'A crystalline geometric background with rotating triangular facets and light refractions',
    cssCode: `.bg-crystal {
  width: 100%;
  height: 100%;
  background: #0f0f1a;
  position: relative;
  overflow: hidden;
}
.bg-crystal::before {
  content: '';
  position: absolute;
  inset: -50%;
  background:
    linear-gradient(60deg, #10b98108 25%, transparent 25%),
    linear-gradient(-60deg, #10b98106 25%, transparent 25%),
    linear-gradient(60deg, transparent 75%, #10b9810a 75%),
    linear-gradient(-60deg, transparent 75%, #10b98108 75%);
  background-size: 80px 140px;
  animation: crystal-rotate 20s linear infinite;
}
.bg-crystal::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, #10b98115 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, #34d39910 0%, transparent 50%);
  animation: crystal-shimmer 4s ease-in-out infinite alternate;
}
@keyframes crystal-rotate { to { transform: rotate(360deg); } }
@keyframes crystal-shimmer {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}`,
    htmlCode: `<div class="bg-crystal"></div>`,
    isNew: true,
  },
  {
    id: 'background-lava-lamp',
    name: 'Background Lava Lamp',
    category: 'backgrounds',
    tags: ['background', 'lava', 'lamp', 'blob', 'retro'],
    difficulty: 'advanced',
    description: 'A retro lava lamp background with rising and falling organic blobs that morph and blend',
    cssCode: `.bg-lava-lamp {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  position: relative;
  overflow: hidden;
}
.bg-lava-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
}
.bg-lava-blob:nth-child(1) {
  width: 120px;
  height: 120px;
  background: #10b981;
  left: 20%;
  animation: lava-float-1 6s ease-in-out infinite;
}
.bg-lava-blob:nth-child(2) {
  width: 90px;
  height: 90px;
  background: #059669;
  left: 50%;
  animation: lava-float-2 7s ease-in-out 1s infinite;
}
.bg-lava-blob:nth-child(3) {
  width: 70px;
  height: 70px;
  background: #34d399;
  left: 70%;
  animation: lava-float-3 8s ease-in-out 2s infinite;
}
@keyframes lava-float-1 {
  0%, 100% { bottom: -20%; border-radius: 50% 50% 40% 60%; }
  50% { bottom: 60%; border-radius: 60% 40% 50% 50%; transform: translateX(20px); }
}
@keyframes lava-float-2 {
  0%, 100% { bottom: 10%; border-radius: 40% 60% 50% 50%; }
  50% { bottom: 70%; border-radius: 50% 50% 60% 40%; transform: translateX(-15px); }
}
@keyframes lava-float-3 {
  0%, 100% { bottom: -10%; border-radius: 60% 40% 50% 50%; }
  50% { bottom: 50%; border-radius: 50% 60% 40% 50%; transform: translateX(10px); }
}`,
    htmlCode: `<div class="bg-lava-lamp"><div class="bg-lava-blob"></div><div class="bg-lava-blob"></div><div class="bg-lava-blob"></div></div>`,
    isNew: true,
  },
];
