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

export const effectsNewBatch4: CSSEffect[] = [
  // ==================== SCROLL EFFECTS (10) ====================
  {
    id: 'scroll-fade-in',
    name: 'Scroll Fade In',
    category: 'scroll',
    tags: ['scroll', 'fade', 'reveal', 'entrance'],
    difficulty: 'beginner',
    description: 'Element fades in from transparent to visible on scroll entry',
    cssCode: `.scroll-fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}
.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.scroll-fade-in-title {
  color: #10b981;
  font-size: 1.1rem;
  font-weight: 700;
}
.scroll-fade-in-text {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 6px;
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.scroll-fade-in.animate {
  animation: fade-in-up 0.6s ease forwards;
}`,
    htmlCode: `<div class="scroll-fade-in visible"><div class="scroll-fade-in-title">Fade In</div><div class="scroll-fade-in-text">Content appears on scroll</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-slide-left',
    name: 'Scroll Slide Left',
    category: 'scroll',
    tags: ['scroll', 'slide', 'left', 'entrance'],
    difficulty: 'beginner',
    description: 'Element slides in from the right side on scroll',
    cssCode: `.scroll-slide-left {
  transform: translateX(60px);
  opacity: 0;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  background: #0f0f1a;
  border-left: 3px solid #10b981;
  border-radius: 0 12px 12px 0;
  padding: 20px 24px;
}
.scroll-slide-left.visible {
  transform: translateX(0);
  opacity: 1;
}
.scroll-slide-left-tag {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.scroll-slide-left-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 4px;
}
.scroll-slide-left-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 4px;
}`,
    htmlCode: `<div class="scroll-slide-left visible"><div class="scroll-slide-left-tag">Feature</div><div class="scroll-slide-left-title">Slide From Right</div><div class="scroll-slide-left-desc">Smooth entrance on scroll</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-scale-up',
    name: 'Scroll Scale Up',
    category: 'scroll',
    tags: ['scroll', 'scale', 'zoom', 'entrance'],
    difficulty: 'beginner',
    description: 'Element scales up from a smaller size when scrolled into view',
    cssCode: `.scroll-scale-up {
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}
.scroll-scale-up.visible {
  transform: scale(1);
  opacity: 1;
}
.scroll-scale-up-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #10b98120;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.3rem;
}
.scroll-scale-up-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.scroll-scale-up-sub {
  color: #64748b;
  font-size: 0.75rem;
  margin-top: 4px;
}`,
    htmlCode: `<div class="scroll-scale-up visible"><div class="scroll-scale-up-icon">✦</div><div class="scroll-scale-up-title">Scale Up</div><div class="scroll-scale-up-sub">Zoom into view</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-rotate-reveal',
    name: 'Scroll Rotate Reveal',
    category: 'scroll',
    tags: ['scroll', 'rotate', 'reveal', '3d'],
    difficulty: 'intermediate',
    description: 'Element rotates in from a tilted angle on scroll for a dramatic reveal',
    cssCode: `.scroll-rotate-reveal {
  transform: perspective(600px) rotateY(25deg);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
}
.scroll-rotate-reveal.visible {
  transform: perspective(600px) rotateY(0deg);
  opacity: 1;
}
.scroll-rotate-reveal::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #10b98112, transparent);
  transition: left 0.8s ease 0.3s;
}
.scroll-rotate-reveal.visible::after {
  left: 120%;
}
.scroll-rotate-reveal-title {
  color: #10b981;
  font-size: 1.1rem;
  font-weight: 700;
  position: relative;
}
.scroll-rotate-reveal-text {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 6px;
  position: relative;
}`,
    htmlCode: `<div class="scroll-rotate-reveal visible"><div class="scroll-rotate-reveal-title">Rotate Reveal</div><div class="scroll-rotate-reveal-text">3D perspective entrance effect</div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-parallax-layer',
    name: 'Scroll Parallax Layer',
    category: 'scroll',
    tags: ['scroll', 'parallax', 'layer', 'depth'],
    difficulty: 'intermediate',
    description: 'Layered elements with different scroll speeds creating a parallax depth effect',
    cssCode: `.scroll-parallax {
  position: relative;
  height: 160px;
  overflow: hidden;
  border-radius: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
}
.scroll-parallax-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #10b98110, #3b82f610);
  transform: translateY(10px);
}
.scroll-parallax-mid {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 60px;
  background: #10b98120;
  border: 1px solid #10b98144;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  transform: translateY(5px);
}
.scroll-parallax-fg {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.scroll-parallax-label {
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
}
.scroll-parallax-text {
  color: #94a3b8;
  font-size: 0.7rem;
}`,
    htmlCode: `<div class="scroll-parallax"><div class="scroll-parallax-bg"></div><div class="scroll-parallax-mid"><span class="scroll-parallax-text">Mid layer — slow parallax</span></div><div class="scroll-parallax-fg"><span class="scroll-parallax-label">Foreground</span></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-sticky-header',
    name: 'Scroll Sticky Header',
    category: 'scroll',
    tags: ['scroll', 'sticky', 'header', 'navigation'],
    difficulty: 'intermediate',
    description: 'Header that sticks to the top on scroll with a compact transition and backdrop blur',
    cssCode: `.scroll-sticky-header {
  background: #0f0f1acc;
  backdrop-filter: blur(12px);
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: padding 0.3s ease, box-shadow 0.3s ease;
}
.scroll-sticky-header.compact {
  padding: 8px 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
.scroll-sticky-logo {
  color: #10b981;
  font-size: 1rem;
  font-weight: 800;
}
.scroll-sticky-nav {
  display: flex;
  gap: 16px;
}
.scroll-sticky-link {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 500;
  transition: color 0.2s ease;
  cursor: pointer;
}
.scroll-sticky-link:hover,
.scroll-sticky-link.active {
  color: #10b981;
}`,
    htmlCode: `<div class="scroll-sticky-header"><div class="scroll-sticky-logo">Logo</div><div class="scroll-sticky-nav"><span class="scroll-sticky-link active">Home</span><span class="scroll-sticky-link">About</span><span class="scroll-sticky-link">Contact</span></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-indicator-dot',
    name: 'Scroll Indicator Dot',
    category: 'scroll',
    tags: ['scroll', 'indicator', 'dot', 'progress'],
    difficulty: 'beginner',
    description: 'Vertical dot indicators that highlight the current scroll section',
    cssCode: `.scroll-indicator-dots {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 10px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 20px;
  align-items: center;
}
.scroll-indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2a2a3e;
  transition: all 0.3s ease;
  cursor: pointer;
}
.scroll-indicator-dot.active {
  background: #10b981;
  box-shadow: 0 0 8px #10b98166;
  transform: scale(1.3);
}
.scroll-indicator-dot:hover:not(.active) {
  background: #4a4a5e;
}
.scroll-indicator-line {
  width: 2px;
  height: 16px;
  background: #2a2a3e;
  border-radius: 1px;
}
.scroll-indicator-line.active {
  background: #10b98144;
}`,
    htmlCode: `<div class="scroll-indicator-dots"><div class="scroll-indicator-dot active"></div><div class="scroll-indicator-line active"></div><div class="scroll-indicator-dot"></div><div class="scroll-indicator-line"></div><div class="scroll-indicator-dot"></div><div class="scroll-indicator-line"></div><div class="scroll-indicator-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-horizontal',
    name: 'Scroll Horizontal',
    category: 'scroll',
    tags: ['scroll', 'horizontal', 'cards', 'snap'],
    difficulty: 'intermediate',
    description: 'Horizontally scrolling card container with snap points and emerald accent borders',
    cssCode: `.scroll-horizontal {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  scrollbar-width: thin;
  scrollbar-color: #2a2a3e #0a0a1a;
}
.scroll-horizontal::-webkit-scrollbar { height: 4px; }
.scroll-horizontal::-webkit-scrollbar-thumb { background: #2a2a3e; border-radius: 2px; }
.scroll-h-card {
  min-width: 140px;
  scroll-snap-align: start;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 16px;
  flex-shrink: 0;
  transition: border-color 0.3s ease;
}
.scroll-h-card:hover {
  border-color: #10b981;
}
.scroll-h-card-num {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
}
.scroll-h-card-title {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 4px;
}
.scroll-h-card-desc {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 4px;
}`,
    htmlCode: `<div class="scroll-horizontal"><div class="scroll-h-card"><div class="scroll-h-card-num">01</div><div class="scroll-h-card-title">Design</div><div class="scroll-h-card-desc">Visual systems</div></div><div class="scroll-h-card"><div class="scroll-h-card-num">02</div><div class="scroll-h-card-title">Build</div><div class="scroll-h-card-desc">Development</div></div><div class="scroll-h-card"><div class="scroll-h-card-num">03</div><div class="scroll-h-card-title">Ship</div><div class="scroll-h-card-desc">Deployment</div></div><div class="scroll-h-card"><div class="scroll-h-card-num">04</div><div class="scroll-h-card-title">Iterate</div><div class="scroll-h-card-desc">Feedback loop</div></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-snap-card',
    name: 'Scroll Snap Card',
    category: 'scroll',
    tags: ['scroll', 'snap', 'card', 'full-view'],
    difficulty: 'beginner',
    description: 'Full-view cards with scroll snap that lock into place when scrolled',
    cssCode: `.scroll-snap-container {
  height: 200px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  background: #0a0a1a;
  scrollbar-width: thin;
  scrollbar-color: #10b98144 #0a0a1a;
}
.scroll-snap-container::-webkit-scrollbar { width: 4px; }
.scroll-snap-container::-webkit-scrollbar-thumb { background: #10b98144; border-radius: 2px; }
.scroll-snap-card {
  height: 200px;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid #2a2a3e;
}
.scroll-snap-card:last-child { border-bottom: none; }
.scroll-snap-num {
  font-size: 1.6rem;
  font-weight: 900;
  color: #10b98120;
}
.scroll-snap-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.scroll-snap-sub {
  color: #64748b;
  font-size: 0.75rem;
}`,
    htmlCode: `<div class="scroll-snap-container"><div class="scroll-snap-card"><div class="scroll-snap-num">01</div><div class="scroll-snap-title">First Section</div><div class="scroll-snap-sub">Snaps into place</div></div><div class="scroll-snap-card"><div class="scroll-snap-num">02</div><div class="scroll-snap-title">Second Section</div><div class="scroll-snap-sub">Locked view</div></div><div class="scroll-snap-card"><div class="scroll-snap-num">03</div><div class="scroll-snap-title">Third Section</div><div class="scroll-snap-sub">Full viewport snap</div></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-morph',
    name: 'Scroll Morph',
    category: 'scroll',
    tags: ['scroll', 'morph', 'shape', 'transform'],
    difficulty: 'advanced',
    description: 'Element morphs its border-radius and size as user scrolls, creating a fluid shape transition',
    cssCode: `.scroll-morph {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 12px;
  transition: border-radius 0.8s ease, transform 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  animation: morph-cycle 4s ease-in-out infinite;
}
@keyframes morph-cycle {
  0%, 100% { border-radius: 12px; transform: rotate(0deg) scale(1); }
  25% { border-radius: 50% 12px 50% 12px; transform: rotate(15deg) scale(1.05); }
  50% { border-radius: 50%; transform: rotate(0deg) scale(1.1); }
  75% { border-radius: 12px 50% 12px 50%; transform: rotate(-15deg) scale(1.05); }
}
.scroll-morph-inner {
  color: #0a0a1a;
  font-size: 0.75rem;
  font-weight: 800;
  text-align: center;
}
.scroll-morph-track {
  height: 4px;
  background: #2a2a3e;
  border-radius: 2px;
  margin-top: 16px;
  overflow: hidden;
}
.scroll-morph-track::after {
  content: '';
  display: block;
  height: 100%;
  width: 40%;
  background: #10b981;
  border-radius: 2px;
  animation: track-move 4s ease-in-out infinite;
}
@keyframes track-move {
  0%, 100% { width: 20%; }
  50% { width: 80%; }
}`,
    htmlCode: `<div style="background:#0f0f1a;border:1px solid #2a2a3e;border-radius:12px;padding:20px"><div class="scroll-morph"><div class="scroll-morph-inner">MORPH</div></div><div class="scroll-morph-track"></div></div>`,
    isNew: true,
  },

  // ==================== LAYOUT EFFECTS (10) ====================
  {
    id: 'grid-auto-fit',
    name: 'Grid Auto Fit',
    category: 'layout',
    tags: ['layout', 'grid', 'auto-fit', 'responsive'],
    difficulty: 'beginner',
    description: 'CSS Grid with auto-fit and minmax for a responsive card grid without media queries',
    cssCode: `.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  padding: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.grid-auto-item {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 14px;
  text-align: center;
  transition: border-color 0.3s ease, transform 0.2s ease;
}
.grid-auto-item:hover {
  border-color: #10b981;
  transform: translateY(-2px);
}
.grid-auto-icon {
  font-size: 1.2rem;
  margin-bottom: 6px;
}
.grid-auto-label {
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
}
.grid-auto-value {
  color: #10b981;
  font-size: 0.65rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="grid-auto-fit"><div class="grid-auto-item"><div class="grid-auto-icon">◆</div><div class="grid-auto-label">Alpha</div><div class="grid-auto-value">24</div></div><div class="grid-auto-item"><div class="grid-auto-icon">◇</div><div class="grid-auto-label">Beta</div><div class="grid-auto-value">18</div></div><div class="grid-auto-item"><div class="grid-auto-icon">△</div><div class="grid-auto-label">Gamma</div><div class="grid-auto-value">32</div></div><div class="grid-auto-item"><div class="grid-auto-icon">○</div><div class="grid-auto-label">Delta</div><div class="grid-auto-value">9</div></div></div>`,
    isNew: true,
  },
  {
    id: 'masonry-hint',
    name: 'Masonry Hint',
    category: 'layout',
    tags: ['layout', 'masonry', 'grid', 'columns'],
    difficulty: 'intermediate',
    description: 'Masonry-like layout using CSS columns with varied height cards',
    cssCode: `.masonry-hint {
  column-count: 2;
  column-gap: 10px;
  padding: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.masonry-hint-card {
  break-inside: avoid;
  margin-bottom: 10px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 14px;
  transition: border-color 0.3s ease;
}
.masonry-hint-card:hover {
  border-color: #10b981;
}
.masonry-hint-card:nth-child(2) { padding: 22px 14px; }
.masonry-hint-card:nth-child(3) { padding: 10px 14px; }
.masonry-hint-title {
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
}
.masonry-hint-desc {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 4px;
  line-height: 1.4;
}
.masonry-hint-tag {
  display: inline-block;
  background: #10b98120;
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  margin-top: 8px;
}`,
    htmlCode: `<div class="masonry-hint"><div class="masonry-hint-card"><div class="masonry-hint-title">Card One</div><div class="masonry-hint-desc">A taller card with more content inside</div><div class="masonry-hint-tag">design</div></div><div class="masonry-hint-card"><div class="masonry-hint-title">Card Two</div><div class="masonry-hint-desc">Short</div></div><div class="masonry-hint-card"><div class="masonry-hint-title">Card Three</div><div class="masonry-hint-desc">Medium length content here</div><div class="masonry-hint-tag">code</div></div><div class="masonry-hint-card"><div class="masonry-hint-title">Card Four</div><div class="masonry-hint-desc">Tiny</div></div></div>`,
    isNew: true,
  },
  {
    id: 'holy-grail-layout',
    name: 'Holy Grail Layout',
    category: 'layout',
    tags: ['layout', 'holy-grail', 'grid', 'classic'],
    difficulty: 'intermediate',
    description: 'Classic holy grail layout with header, footer, sidebar, and main content using CSS Grid',
    cssCode: `.holy-grail {
  display: grid;
  grid-template-areas: "hd hd hd" "sb mn as" "ft ft ft";
  grid-template-columns: 60px 1fr 60px;
  grid-template-rows: 36px 1fr 28px;
  height: 200px;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
  background: #0a0a1a;
}
.holy-grail-hd {
  grid-area: hd;
  background: #0f0f1a;
  border-bottom: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  padding: 0 12px;
}
.holy-grail-sb {
  grid-area: sb;
  background: #0f0f1a;
  border-right: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
}
.holy-grail-mn {
  grid-area: mn;
  display: flex;
  align-items: center;
  justify-content: center;
}
.holy-grail-as {
  grid-area: as;
  background: #0f0f1a;
  border-left: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
}
.holy-grail-ft {
  grid-area: ft;
  background: #0f0f1a;
  border-top: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.holy-grail-label {
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.holy-grail-label-dim {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="holy-grail"><div class="holy-grail-hd"><span class="holy-grail-label">Header</span></div><div class="holy-grail-sb"><span class="holy-grail-label-dim">Nav</span></div><div class="holy-grail-mn"><span class="holy-grail-label">Main</span></div><div class="holy-grail-as"><span class="holy-grail-label-dim">Aside</span></div><div class="holy-grail-ft"><span class="holy-grail-label-dim">Footer</span></div></div>`,
    isNew: true,
  },
  {
    id: 'sidebar-collapse',
    name: 'Sidebar Collapse',
    category: 'layout',
    tags: ['layout', 'sidebar', 'collapse', 'toggle'],
    difficulty: 'intermediate',
    description: 'Sidebar that collapses to icon-only mode with a smooth width transition',
    cssCode: `.sidebar-collapse {
  display: flex;
  height: 160px;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
  background: #0a0a1a;
}
.sidebar-collapse-nav {
  width: 160px;
  background: #0f0f1a;
  border-right: 1px solid #2a2a3e;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: width 0.3s ease, padding 0.3s ease;
  overflow: hidden;
}
.sidebar-collapse-nav.collapsed {
  width: 48px;
  padding: 12px 8px;
}
.sidebar-collapse-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 8px;
  white-space: nowrap;
  transition: background 0.2s ease;
  cursor: pointer;
}
.sidebar-collapse-item:hover { background: #2a2a3e; }
.sidebar-collapse-item.active { background: #10b98120; }
.sidebar-collapse-icon {
  width: 20px;
  text-align: center;
  font-size: 0.85rem;
  flex-shrink: 0;
  color: #10b981;
}
.sidebar-collapse-text {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
}
.sidebar-collapse-nav.collapsed .sidebar-collapse-text { opacity: 0; }
.sidebar-collapse-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.sidebar-collapse-content {
  color: #64748b;
  font-size: 0.8rem;
}`,
    htmlCode: `<div class="sidebar-collapse"><div class="sidebar-collapse-nav collapsed"><div class="sidebar-collapse-item active"><span class="sidebar-collapse-icon">◈</span><span class="sidebar-collapse-text">Dashboard</span></div><div class="sidebar-collapse-item"><span class="sidebar-collapse-icon">◇</span><span class="sidebar-collapse-text">Settings</span></div><div class="sidebar-collapse-item"><span class="sidebar-collapse-icon">△</span><span class="sidebar-collapse-text">Reports</span></div></div><div class="sidebar-collapse-main"><span class="sidebar-collapse-content">Main content area</span></div></div>`,
    isNew: true,
  },
  {
    id: 'centered-flex-card',
    name: 'Centered Flex Card',
    category: 'layout',
    tags: ['layout', 'flex', 'centered', 'card'],
    difficulty: 'beginner',
    description: 'Perfectly centered card using flexbox with a subtle glow border',
    cssCode: `.centered-flex-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.centered-flex-card {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 14px;
  padding: 24px 28px;
  text-align: center;
  box-shadow: 0 0 30px #10b98110;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.centered-flex-card:hover {
  box-shadow: 0 0 40px #10b98120;
  transform: translateY(-2px);
}
.centered-flex-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #10b98120;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.1rem;
}
.centered-flex-title {
  color: #e2e8f0;
  font-size: 0.95rem;
  font-weight: 700;
}
.centered-flex-desc {
  color: #64748b;
  font-size: 0.75rem;
  margin-top: 4px;
}`,
    htmlCode: `<div class="centered-flex-wrap"><div class="centered-flex-card"><div class="centered-flex-icon">✦</div><div class="centered-flex-title">Centered Card</div><div class="centered-flex-desc">Flexbox perfect centering</div></div></div>`,
    isNew: true,
  },
  {
    id: 'split-screen',
    name: 'Split Screen',
    category: 'layout',
    tags: ['layout', 'split', 'screen', 'two-column'],
    difficulty: 'beginner',
    description: 'Two-column split screen layout with contrasting content sides',
    cssCode: `.split-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 160px;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
}
.split-screen-left {
  background: #0f0f1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-right: 1px solid #2a2a3e;
}
.split-screen-right {
  background: #10b98110;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.split-screen-heading {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.split-screen-text {
  color: #94a3b8;
  font-size: 0.75rem;
  margin-top: 6px;
  text-align: center;
}
.split-screen-accent {
  color: #10b981;
  font-size: 1rem;
  font-weight: 800;
}
.split-screen-btn {
  margin-top: 10px;
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 6px;
}`,
    htmlCode: `<div class="split-screen"><div class="split-screen-left"><div class="split-screen-heading">Dark Side</div><div class="split-screen-text">Information and details</div></div><div class="split-screen-right"><div class="split-screen-accent">Action</div><div class="split-screen-text">Interactive content</div><div class="split-screen-btn">Get Started</div></div></div>`,
    isNew: true,
  },
  {
    id: 'overlap-cards',
    name: 'Overlap Cards',
    category: 'layout',
    tags: ['layout', 'overlap', 'cards', 'stacked'],
    difficulty: 'intermediate',
    description: 'Stacked cards that overlap each other with depth and shadow layers',
    cssCode: `.overlap-cards {
  position: relative;
  height: 160px;
  padding: 20px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.overlap-card {
  position: absolute;
  width: 180px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.overlap-card:nth-child(1) {
  top: 20px;
  left: 20px;
  z-index: 3;
}
.overlap-card:nth-child(2) {
  top: 36px;
  left: 56px;
  z-index: 2;
}
.overlap-card:nth-child(3) {
  top: 52px;
  left: 92px;
  z-index: 1;
}
.overlap-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 4;
}
.overlap-card-title {
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
}
.overlap-card-sub {
  color: #64748b;
  font-size: 0.65rem;
  margin-top: 3px;
}
.overlap-card-badge {
  display: inline-block;
  background: #10b98120;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 8px;
  margin-top: 8px;
}`,
    htmlCode: `<div class="overlap-cards"><div class="overlap-card"><div class="overlap-card-title">Card A</div><div class="overlap-card-sub">Primary layer</div><div class="overlap-card-badge">top</div></div><div class="overlap-card"><div class="overlap-card-title">Card B</div><div class="overlap-card-sub">Middle layer</div></div><div class="overlap-card"><div class="overlap-card-title">Card C</div><div class="overlap-card-sub">Base layer</div></div></div>`,
    isNew: true,
  },
  {
    id: 'responsive-stack',
    name: 'Responsive Stack',
    category: 'layout',
    tags: ['layout', 'responsive', 'stack', 'flex-wrap'],
    difficulty: 'beginner',
    description: 'Flex-wrap layout that stacks items vertically on smaller widths',
    cssCode: `.responsive-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.responsive-stack-item {
  flex: 1 1 80px;
  min-width: 80px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  transition: border-color 0.3s ease;
}
.responsive-stack-item:hover {
  border-color: #10b981;
}
.responsive-stack-icon {
  color: #10b981;
  font-size: 1rem;
  margin-bottom: 4px;
}
.responsive-stack-label {
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
}
.responsive-stack-value {
  color: #64748b;
  font-size: 0.6rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="responsive-stack"><div class="responsive-stack-item"><div class="responsive-stack-icon">◈</div><div class="responsive-stack-label">Views</div><div class="responsive-stack-value">2.4K</div></div><div class="responsive-stack-item"><div class="responsive-stack-icon">△</div><div class="responsive-stack-label">Clicks</div><div class="responsive-stack-value">184</div></div><div class="responsive-stack-item"><div class="responsive-stack-icon">◇</div><div class="responsive-stack-label">Shares</div><div class="responsive-stack-value">56</div></div><div class="responsive-stack-item"><div class="responsive-stack-icon">○</div><div class="responsive-stack-label">Leads</div><div class="responsive-stack-value">12</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-shift-animation',
    name: 'Layout Shift Animation',
    category: 'layout',
    tags: ['layout', 'shift', 'animation', 'transition'],
    difficulty: 'intermediate',
    description: 'Animated layout shift where items rearrange with smooth CSS transitions',
    cssCode: `.layout-shift {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.layout-shift-item {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.layout-shift-item.featured {
  grid-column: span 2;
  background: #10b98110;
  border-color: #10b98144;
}
.layout-shift-item:hover {
  transform: scale(1.03);
  border-color: #10b981;
}
.layout-shift-icon {
  font-size: 1rem;
  color: #10b981;
  margin-bottom: 4px;
}
.layout-shift-label {
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
}
.layout-shift-desc {
  color: #64748b;
  font-size: 0.6rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="layout-shift"><div class="layout-shift-item featured"><div class="layout-shift-icon">✦</div><div class="layout-shift-label">Featured</div><div class="layout-shift-desc">Spans two columns</div></div><div class="layout-shift-item"><div class="layout-shift-icon">◇</div><div class="layout-shift-label">Regular</div></div><div class="layout-shift-item"><div class="layout-shift-icon">△</div><div class="layout-shift-label">Regular</div></div><div class="layout-shift-item"><div class="layout-shift-icon">○</div><div class="layout-shift-label">Regular</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-aspect-ratio',
    name: 'Container Aspect Ratio',
    category: 'layout',
    tags: ['layout', 'aspect-ratio', 'container', 'responsive'],
    difficulty: 'beginner',
    description: 'Container with a fixed aspect ratio using the aspect-ratio property for consistent proportions',
    cssCode: `.aspect-ratio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.aspect-ratio-card {
  aspect-ratio: 4/3;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease, transform 0.2s ease;
  overflow: hidden;
}
.aspect-ratio-card:hover {
  border-color: #10b981;
  transform: scale(1.03);
}
.aspect-ratio-card.wide { aspect-ratio: 16/9; }
.aspect-ratio-card.square { aspect-ratio: 1/1; }
.aspect-ratio-label {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
}
.aspect-ratio-value {
  color: #64748b;
  font-size: 0.6rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="aspect-ratio-grid"><div class="aspect-ratio-card"><div class="aspect-ratio-label">4:3</div><div class="aspect-ratio-value">Standard</div></div><div class="aspect-ratio-card wide"><div class="aspect-ratio-label">16:9</div><div class="aspect-ratio-value">Widescreen</div></div><div class="aspect-ratio-card square"><div class="aspect-ratio-label">1:1</div><div class="aspect-ratio-value">Square</div></div></div>`,
    isNew: true,
  },

  // ==================== DECORATIVE EFFECTS (10) ====================
  {
    id: 'ribbon-corner',
    name: 'Ribbon Corner',
    category: 'decorative',
    tags: ['decorative', 'ribbon', 'corner', 'badge'],
    difficulty: 'intermediate',
    description: 'Decorative corner ribbon with emerald accent, positioned at an angle',
    cssCode: `.ribbon-corner {
  position: relative;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
}
.ribbon-corner-tag {
  position: absolute;
  top: 16px;
  right: -28px;
  background: #10b981;
  color: #0a0a1a;
  padding: 4px 32px;
  font-size: 0.65rem;
  font-weight: 800;
  transform: rotate(45deg);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(16,185,129,0.3);
}
.ribbon-corner-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.ribbon-corner-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 6px;
}
.ribbon-corner-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  display: inline-block;
  margin-right: 6px;
}`,
    htmlCode: `<div class="ribbon-corner"><div class="ribbon-corner-tag">New</div><div class="ribbon-corner-title"><span class="ribbon-corner-dot"></span>Ribbon Corner</div><div class="ribbon-corner-desc">Decorative badge ribbon</div></div>`,
    isNew: true,
  },
  {
    id: 'divider-wave',
    name: 'Divider Wave',
    category: 'decorative',
    tags: ['decorative', 'divider', 'wave', 'separator'],
    difficulty: 'beginner',
    description: 'Wavy section divider using SVG background with emerald accent color',
    cssCode: `.divider-wave-top {
  background: #0f0f1a;
  padding: 16px 20px;
}
.divider-wave-top-text {
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 600;
}
.divider-wave-svg {
  display: block;
  width: 100%;
  height: 24px;
}
.divider-wave-bottom {
  background: #0a0a1a;
  padding: 16px 20px;
  border: 1px solid #2a2a3e;
  border-top: none;
  border-radius: 0 0 12px 12px;
}
.divider-wave-top-wrap {
  border: 1px solid #2a2a3e;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}
.divider-wave-bottom-text {
  color: #64748b;
  font-size: 0.8rem;
}`,
    htmlCode: `<div class="divider-wave-top-wrap"><div class="divider-wave-top"><div class="divider-wave-top-text">Section Above</div></div></div><svg class="divider-wave-svg" viewBox="0 0 1200 24" preserveAspectRatio="none"><path d="M0,0 C300,24 900,0 1200,24 L1200,0 L0,0 Z" fill="#0f0f1a"/><path d="M0,24 C300,0 900,24 1200,0 L1200,24 L0,24 Z" fill="#0a0a1a"/><path d="M0,12 C300,24 900,0 1200,12" stroke="#10b98144" stroke-width="1.5" fill="none"/></svg><div class="divider-wave-bottom"><div class="divider-wave-bottom-text">Section Below</div></div>`,
    isNew: true,
  },
  {
    id: 'ornament-dot',
    name: 'Ornament Dot',
    category: 'decorative',
    tags: ['decorative', 'ornament', 'dot', 'pattern'],
    difficulty: 'beginner',
    description: 'Decorative dot ornament pattern used as a section divider or accent',
    cssCode: `.ornament-dot {
  text-align: center;
  padding: 16px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.ornament-dot-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 8px 0;
}
.ornament-dot-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #10b981;
}
.ornament-dot-dot.large {
  width: 8px;
  height: 8px;
  background: #10b981;
  box-shadow: 0 0 6px #10b98144;
}
.ornament-dot-line {
  width: 40px;
  height: 1px;
  background: #2a2a3e;
}
.ornament-dot-text {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 4px;
}
.ornament-dot-sub {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="ornament-dot"><div class="ornament-dot-row"><div class="ornament-dot-line"></div><div class="ornament-dot-dot"></div><div class="ornament-dot-dot large"></div><div class="ornament-dot-dot"></div><div class="ornament-dot-line"></div></div><div class="ornament-dot-text">Ornament Dots</div><div class="ornament-dot-sub">Decorative pattern</div></div>`,
    isNew: true,
  },
  {
    id: 'decorative-bracket',
    name: 'Decorative Bracket',
    category: 'decorative',
    tags: ['decorative', 'bracket', 'typography', 'accent'],
    difficulty: 'beginner',
    description: 'Large decorative brackets framing content with an emerald accent',
    cssCode: `.decorative-bracket {
  display: flex;
  align-items: center;
  gap: 0;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.decorative-bracket-left,
.decorative-bracket-right {
  font-size: 1.8rem;
  font-weight: 200;
  color: #10b98144;
  line-height: 1;
  font-family: Georgia, serif;
  flex-shrink: 0;
  transition: color 0.3s ease;
}
.decorative-bracket:hover .decorative-bracket-left,
.decorative-bracket:hover .decorative-bracket-right {
  color: #10b98188;
}
.decorative-bracket-content {
  padding: 0 16px;
}
.decorative-bracket-quote {
  color: #e2e8f0;
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.5;
}
.decorative-bracket-author {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 8px;
}`,
    htmlCode: `<div class="decorative-bracket"><div class="decorative-bracket-left">{</div><div class="decorative-bracket-content"><div class="decorative-bracket-quote">Design is not just what it looks like. Design is how it works.</div><div class="decorative-bracket-author">— Steve Jobs</div></div><div class="decorative-bracket-right">}</div></div>`,
    isNew: true,
  },
  {
    id: 'corner-flourish',
    name: 'Corner Flourish',
    category: 'decorative',
    tags: ['decorative', 'corner', 'flourish', 'ornament'],
    difficulty: 'intermediate',
    description: 'Decorative corner flourish borders using CSS pseudo-elements',
    cssCode: `.corner-flourish {
  position: relative;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 28px;
}
.corner-flourish::before,
.corner-flourish::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: #10b981;
  border-style: solid;
}
.corner-flourish::before {
  top: 8px;
  left: 8px;
  border-width: 2px 0 0 2px;
  border-radius: 4px 0 0 0;
}
.corner-flourish::after {
  bottom: 8px;
  right: 8px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 4px 0;
}
.corner-flourish-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}
.corner-flourish-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 6px;
}
.corner-flourish-line {
  width: 40px;
  height: 2px;
  background: #10b981;
  margin: 10px auto 0;
  border-radius: 1px;
}`,
    htmlCode: `<div class="corner-flourish"><div class="corner-flourish-title">Corner Flourish</div><div class="corner-flourish-desc">Decorative corner accents</div><div class="corner-flourish-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'section-separator',
    name: 'Section Separator',
    category: 'decorative',
    tags: ['decorative', 'separator', 'section', 'divider'],
    difficulty: 'beginner',
    description: 'Elegant section separator with centered diamond ornament and lines',
    cssCode: `.section-separator {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.section-separator-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, #2a2a3e, transparent);
}
.section-separator-diamond {
  width: 10px;
  height: 10px;
  background: #10b981;
  transform: rotate(45deg);
  flex-shrink: 0;
  box-shadow: 0 0 8px #10b98144;
}
.section-separator-diamond.hollow {
  background: transparent;
  border: 2px solid #10b981;
}
.section-separator-content {
  text-align: center;
  padding: 12px 20px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-top: none;
  border-radius: 0 0 12px 12px;
}
.section-separator-text {
  color: #64748b;
  font-size: 0.8rem;
}`,
    htmlCode: `<div style="background:#0f0f1a;border:1px solid #2a2a3e;border-radius:12px 12px 0 0;padding:12px 20px"><div style="color:#e2e8f0;font-size:0.85rem;font-weight:600">Section One</div></div><div class="section-separator"><div class="section-separator-line"></div><div class="section-separator-diamond"></div><div class="section-separator-line"></div></div><div class="section-separator-content"><div class="section-separator-text">Section Two begins here</div></div>`,
    isNew: true,
  },
  {
    id: 'dot-leader',
    name: 'Dot Leader',
    category: 'decorative',
    tags: ['decorative', 'dot', 'leader', 'menu'],
    difficulty: 'beginner',
    description: 'Dot leader pattern connecting menu items to prices, like a restaurant menu',
    cssCode: `.dot-leader {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 16px 20px;
}
.dot-leader-item {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 10px;
}
.dot-leader-item:last-child { margin-bottom: 0; }
.dot-leader-name {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}
.dot-leader-dots {
  flex: 1;
  border-bottom: 2px dotted #2a2a3e;
  min-width: 20px;
  margin: 0 4px;
  position: relative;
  top: -3px;
}
.dot-leader-price {
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
}
.dot-leader-heading {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}`,
    htmlCode: `<div class="dot-leader"><div class="dot-leader-heading">Specials</div><div class="dot-leader-item"><span class="dot-leader-name">Emerald Grid</span><span class="dot-leader-dots"></span><span class="dot-leader-price">$12</span></div><div class="dot-leader-item"><span class="dot-leader-name">Dark Mode Latte</span><span class="dot-leader-dots"></span><span class="dot-leader-price">$8</span></div><div class="dot-leader-item"><span class="dot-leader-name">Flexbox Croissant</span><span class="dot-leader-dots"></span><span class="dot-leader-price">$6</span></div></div>`,
    isNew: true,
  },
  {
    id: 'scroll-ornament',
    name: 'Scroll Ornament',
    category: 'decorative',
    tags: ['decorative', 'scroll', 'ornament', 'swirl'],
    difficulty: 'intermediate',
    description: 'Decorative scrollwork ornament used as a visual break between sections',
    cssCode: `.scroll-ornament {
  text-align: center;
  padding: 20px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.scroll-ornament-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.scroll-ornament-swirl {
  color: #10b98144;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}
.scroll-ornament:hover .scroll-ornament-swirl {
  color: #10b98188;
}
.scroll-ornament-center {
  width: 12px;
  height: 12px;
  border: 2px solid #10b981;
  transform: rotate(45deg);
  margin: 0 4px;
}
.scroll-ornament-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(to right, transparent, #10b98144);
}
.scroll-ornament-line.right {
  background: linear-gradient(to left, transparent, #10b98144);
}
.scroll-ornament-label {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}`,
    htmlCode: `<div class="scroll-ornament"><div class="scroll-ornament-row"><div class="scroll-ornament-line"></div><div class="scroll-ornament-swirl">❧</div><div class="scroll-ornament-center"></div><div class="scroll-ornament-swirl">❧</div><div class="scroll-ornament-line right"></div></div><div class="scroll-ornament-label">Ornament</div></div>`,
    isNew: true,
  },
  {
    id: 'vine-border',
    name: 'Vine Border',
    category: 'decorative',
    tags: ['decorative', 'vine', 'border', 'nature'],
    difficulty: 'intermediate',
    description: 'Decorative vine-like border using repeating gradients and leaf accents',
    cssCode: `.vine-border {
  position: relative;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
}
.vine-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: repeating-linear-gradient(90deg, #10b981 0px, #10b981 4px, transparent 4px, transparent 10px);
}
.vine-border::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: repeating-linear-gradient(90deg, transparent 0px, transparent 4px, #10b98144 4px, #10b98144 8px, transparent 8px, transparent 14px);
}
.vine-border-leaf {
  position: absolute;
  top: 6px;
  right: 16px;
  color: #10b981;
  font-size: 0.9rem;
  opacity: 0.6;
  animation: leaf-sway 3s ease-in-out infinite;
}
@keyframes leaf-sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
}
.vine-border-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.vine-border-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 6px;
}`,
    htmlCode: `<div class="vine-border"><div class="vine-border-leaf">☘</div><div class="vine-border-title">Vine Border</div><div class="vine-border-desc">Nature-inspired decorative frame</div></div>`,
    isNew: true,
  },
  {
    id: 'star-burst',
    name: 'Star Burst',
    category: 'decorative',
    tags: ['decorative', 'star', 'burst', 'badge'],
    difficulty: 'intermediate',
    description: 'Starburst decorative badge with radiating lines and animated rotation',
    cssCode: `.star-burst {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.star-burst-badge {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.star-burst-bg {
  position: absolute;
  inset: 0;
  background: #10b981;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: burst-spin 12s linear infinite;
}
@keyframes burst-spin {
  to { transform: rotate(360deg); }
}
.star-burst-text {
  position: relative;
  z-index: 1;
  color: #0a0a1a;
  font-size: 0.6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 1.2;
}
.star-burst-label {
  margin-left: 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.star-burst-sub {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="star-burst"><div class="star-burst-badge"><div class="star-burst-bg"></div><div class="star-burst-text">Best<br/>Pick</div></div><div><div class="star-burst-label">Star Burst</div><div class="star-burst-sub">Animated badge accent</div></div></div>`,
    isNew: true,
  },

  // ==================== PRINT EFFECTS (10) ====================
  {
    id: 'drop-cap',
    name: 'Drop Cap',
    category: 'print',
    tags: ['print', 'drop-cap', 'typography', 'editorial'],
    difficulty: 'beginner',
    description: 'Classic drop cap initial letter for editorial-style paragraph openings',
    cssCode: `.drop-cap {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.drop-cap-text {
  color: #94a3b8;
  font-size: 0.8rem;
  line-height: 1.6;
}
.drop-cap-text::first-letter {
  float: left;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 0.8;
  color: #10b981;
  margin: 4px 8px 0 0;
  font-family: Georgia, serif;
}
.drop-cap-heading {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.drop-cap-rule {
  width: 40px;
  height: 2px;
  background: #10b981;
  margin-bottom: 12px;
  border-radius: 1px;
}`,
    htmlCode: `<div class="drop-cap"><div class="drop-cap-heading">Chapter One</div><div class="drop-cap-rule"></div><div class="drop-cap-text">Design is the fundamental soul of a human-made creation. It expresses itself in many ways—architecture, music, and even software. The best designs are those that feel inevitable.</div></div>`,
    isNew: true,
  },
  {
    id: 'pull-quote',
    name: 'Pull Quote',
    category: 'print',
    tags: ['print', 'pull-quote', 'quote', 'editorial'],
    difficulty: 'beginner',
    description: 'Magazine-style pull quote with large decorative quotation marks',
    cssCode: `.pull-quote {
  position: relative;
  background: #0f0f1a;
  border-left: 4px solid #10b981;
  border-radius: 0 12px 12px 0;
  padding: 24px 24px 24px 20px;
}
.pull-quote-mark {
  position: absolute;
  top: 4px;
  left: 12px;
  font-size: 1.8rem;
  color: #10b98130;
  font-family: Georgia, serif;
  line-height: 1;
  font-weight: 700;
}
.pull-quote-text {
  color: #e2e8f0;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5;
  position: relative;
}
.pull-quote-attr {
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 12px;
  font-style: normal;
}
.pull-quote-rule {
  width: 24px;
  height: 2px;
  background: #10b98144;
  margin-top: 8px;
  border-radius: 1px;
}`,
    htmlCode: `<div class="pull-quote"><div class="pull-quote-mark">"</div><div class="pull-quote-text">The details are not the details. They make the design.</div><div class="pull-quote-rule"></div><div class="pull-quote-attr">Charles Eames</div></div>`,
    isNew: true,
  },
  {
    id: 'column-text',
    name: 'Column Text',
    category: 'print',
    tags: ['print', 'column', 'newspaper', 'multi-column'],
    difficulty: 'beginner',
    description: 'Multi-column text layout mimicking a newspaper or magazine format',
    cssCode: `.column-text {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.column-text-heading {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.column-text-sub {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.column-text-body {
  column-count: 2;
  column-gap: 16px;
  column-rule: 1px solid #2a2a3e;
}
.column-text-para {
  color: #94a3b8;
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 0;
}
.column-text-para + .column-text-para {
  margin-top: 8px;
}`,
    htmlCode: `<div class="column-text"><div class="column-text-heading">The Daily Chronicle</div><div class="column-text-sub">Front Page</div><div class="column-text-body"><p class="column-text-para">The art of typography has evolved dramatically. From the earliest printed books to modern digital interfaces, the way we present text shapes how readers engage with content.</p><p class="column-text-para">Column layouts draw from centuries of newspaper tradition, guiding the eye naturally from one block to the next with comfortable reading widths.</p></div></div>`,
    isNew: true,
  },
  {
    id: 'hanging-punctuation',
    name: 'Hanging Punctuation',
    category: 'print',
    tags: ['print', 'hanging', 'punctuation', 'typography'],
    difficulty: 'intermediate',
    description: 'Hanging punctuation technique where quote marks hang outside the text margin',
    cssCode: `.hanging-punct {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.hanging-punct-label {
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.hanging-punct-quote {
  text-indent: -0.6em;
  padding-left: 0.6em;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.6;
  font-family: Georgia, serif;
}
.hanging-punct-author {
  color: #64748b;
  font-size: 0.75rem;
  margin-top: 10px;
  padding-left: 0.6em;
}
.hanging-punct-author strong {
  color: #10b981;
  font-weight: 700;
}
.hanging-punct-line {
  width: 100%;
  height: 1px;
  background: #2a2a3e;
  margin: 12px 0;
}`,
    htmlCode: `<div class="hanging-punct"><div class="hanging-punct-label">Hanging Punctuation</div><div class="hanging-punct-quote">"Good typography is invisible. Bad typography is everywhere."</div><div class="hanging-punct-line"></div><div class="hanging-punct-quote">"The skill of writing is to create a context in which other people can think."</div><div class="hanging-punct-author">— <strong>Edwin Schlossberg</strong></div></div>`,
    isNew: true,
  },
  {
    id: 'page-break-line',
    name: 'Page Break Line',
    category: 'print',
    tags: ['print', 'page-break', 'separator', 'editorial'],
    difficulty: 'beginner',
    description: 'Editorial-style page break with three asterisks centered on a rule line',
    cssCode: `.page-break-line {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.page-break-line-text {
  color: #94a3b8;
  font-size: 0.8rem;
  line-height: 1.6;
}
.page-break-line-separator {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
}
.page-break-line-rule {
  flex: 1;
  height: 1px;
  background: #2a2a3e;
}
.page-break-line-asterisks {
  color: #10b981;
  font-size: 0.85rem;
  letter-spacing: 4px;
  font-weight: 700;
}
.page-break-line-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 16px 0;
}
.page-break-line-ornament-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #10b98144;
}
.page-break-line-ornament-dot.center {
  width: 6px;
  height: 6px;
  background: #10b981;
}`,
    htmlCode: `<div class="page-break-line"><div class="page-break-line-text">The chapter concludes with a final thought on the nature of design systems.</div><div class="page-break-line-separator"><div class="page-break-line-rule"></div><div class="page-break-line-asterisks">* * *</div><div class="page-break-line-rule"></div></div><div class="page-break-line-text">A new section begins here, separated by the traditional page break ornament.</div></div>`,
    isNew: true,
  },
  {
    id: 'footnote-marker',
    name: 'Footnote Marker',
    category: 'print',
    tags: ['print', 'footnote', 'marker', 'reference'],
    difficulty: 'beginner',
    description: 'Superscript footnote markers with matching footnote entries at the bottom',
    cssCode: `.footnote-marker {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.footnote-marker-text {
  color: #94a3b8;
  font-size: 0.8rem;
  line-height: 1.7;
}
.footnote-ref {
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  vertical-align: super;
  line-height: 0;
  cursor: pointer;
  transition: color 0.2s ease;
}
.footnote-ref:hover {
  color: #34d399;
}
.footnote-marker-divider {
  width: 100%;
  height: 1px;
  background: #2a2a3e;
  margin: 14px 0;
}
.footnote-marker-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.footnote-item {
  display: flex;
  gap: 8px;
  align-items: baseline;
}
.footnote-num {
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  flex-shrink: 0;
}
.footnote-text {
  color: #64748b;
  font-size: 0.7rem;
  line-height: 1.4;
}`,
    htmlCode: `<div class="footnote-marker"><div class="footnote-marker-text">CSS Grid revolutionized web layout<span class="footnote-ref">1</span>, making complex designs achievable without hacks. Combined with Flexbox<span class="footnote-ref">2</span>, developers have powerful tools for responsive design.</div><div class="footnote-marker-divider"></div><div class="footnote-marker-list"><div class="footnote-item"><span class="footnote-num">1</span><span class="footnote-text">CSS Grid Layout Module Level 1, W3C Recommendation 2020</span></div><div class="footnote-item"><span class="footnote-num">2</span><span class="footnote-text">Flexbox was originally proposed in 2009 as the Flexible Box Layout</span></div></div></div>`,
    isNew: true,
  },
  {
    id: 'book-spine',
    name: 'Book Spine',
    category: 'print',
    tags: ['print', 'book', 'spine', 'vertical'],
    difficulty: 'intermediate',
    description: 'Vertical book spine layout with rotated text simulating a bookshelf appearance',
    cssCode: `.book-spine-shelf {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  padding: 16px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  height: 180px;
}
.book-spine {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 12px 8px;
  border-radius: 3px;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: transform 0.2s ease;
  cursor: pointer;
  flex-shrink: 0;
}
.book-spine:hover {
  transform: translateY(-6px);
}
.book-spine:nth-child(1) {
  background: #10b981;
  color: #0a0a1a;
  height: 140px;
}
.book-spine:nth-child(2) {
  background: #10b98188;
  color: #0a0a1a;
  height: 120px;
}
.book-spine:nth-child(3) {
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b98144;
  height: 150px;
}
.book-spine:nth-child(4) {
  background: #10b98144;
  color: #0a0a1a;
  height: 110px;
}
.book-spine:nth-child(5) {
  background: #10b981;
  color: #0a0a1a;
  height: 130px;
}`,
    htmlCode: `<div class="book-spine-shelf"><div class="book-spine">Design</div><div class="book-spine">CSS Art</div><div class="book-spine">Layout</div><div class="book-spine">Type</div><div class="book-spine">Grid</div></div>`,
    isNew: true,
  },
  {
    id: 'typography-grid',
    name: 'Typography Grid',
    category: 'print',
    tags: ['print', 'typography', 'grid', 'baseline'],
    difficulty: 'intermediate',
    description: 'Typography specimen on a visible baseline grid for precision alignment',
    cssCode: `.typography-grid {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  background-image: repeating-linear-gradient(to bottom, transparent, transparent 23px, #2a2a3e22 23px, #2a2a3e22 24px);
}
.typography-grid-h1 {
  color: #e2e8f0;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: 4px;
}
.typography-grid-h2 {
  color: #10b981;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
}
.typography-grid-body {
  color: #94a3b8;
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 4px;
}
.typography-grid-caption {
  color: #64748b;
  font-size: 0.65rem;
  line-height: 1.5;
}
.typography-grid-label {
  color: #10b98144;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}`,
    htmlCode: `<div class="typography-grid"><div class="typography-grid-label">Baseline Grid Active</div><div class="typography-grid-h1">Heading Level 1</div><div class="typography-grid-h2">Heading Level 2</div><div class="typography-grid-body">Body text aligns to the baseline grid for consistent vertical rhythm across all typographic elements.</div><div class="typography-grid-caption">Caption text — 0.65rem / 10.4px</div></div>`,
    isNew: true,
  },
  {
    id: 'editorial-layout',
    name: 'Editorial Layout',
    category: 'print',
    tags: ['print', 'editorial', 'magazine', 'layout'],
    difficulty: 'advanced',
    description: 'Magazine-style editorial layout with headline, byline, pull quote, and body text',
    cssCode: `.editorial-layout {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.editorial-layout-kicker {
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 4px;
}
.editorial-layout-headline {
  color: #e2e8f0;
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 8px;
}
.editorial-layout-byline {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.editorial-layout-byline strong {
  color: #94a3b8;
}
.editorial-layout-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
}
.editorial-layout-text {
  color: #94a3b8;
  font-size: 0.75rem;
  line-height: 1.6;
}
.editorial-layout-aside {
  border-left: 2px solid #10b981;
  padding-left: 12px;
}
.editorial-layout-aside-text {
  color: #e2e8f0;
  font-size: 0.75rem;
  font-style: italic;
  line-height: 1.5;
}`,
    htmlCode: `<div class="editorial-layout"><div class="editorial-layout-kicker">Feature Story</div><div class="editorial-layout-headline">The Future of Web Design</div><div class="editorial-layout-byline">By <strong>Jane Doe</strong> · March 2026</div><div class="editorial-layout-body"><div class="editorial-layout-text">The evolution of web design continues to push boundaries. From responsive layouts to motion design, every year brings new paradigms that reshape how we think about digital experiences.</div><div class="editorial-layout-aside"><div class="editorial-layout-aside-text">"Design is intelligence made visible."</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'text-column-rule',
    name: 'Text Column Rule',
    category: 'print',
    tags: ['print', 'column', 'rule', 'divider'],
    difficulty: 'beginner',
    description: 'Multi-column text with styled column rules between columns for a polished print look',
    cssCode: `.text-column-rule {
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
}
.text-column-rule-heading {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.text-column-rule-sub {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 14px;
}
.text-column-rule-body {
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid #2a2a3e;
}
.text-column-rule-para {
  color: #94a3b8;
  font-size: 0.7rem;
  line-height: 1.5;
  margin: 0;
}
.text-column-rule-para + .text-column-rule-para {
  margin-top: 8px;
}
.text-column-rule-footer {
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px solid #2a2a3e;
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="text-column-rule"><div class="text-column-rule-heading">Three Column Layout</div><div class="text-column-rule-sub">With Column Rules</div><div class="text-column-rule-body"><p class="text-column-rule-para">Column rules provide visual separation between text columns, improving readability and creating a refined editorial appearance.</p><p class="text-column-rule-para">This technique has been used in print design for centuries and translates beautifully to the web with CSS multi-column layout.</p><p class="text-column-rule-para">The column-rule property allows styling the vertical divider between columns with color, style, and width control.</p></div><div class="text-column-rule-footer">Vol. 4 · Issue 12 · Page 42</div></div>`,
    isNew: true,
  },
];
