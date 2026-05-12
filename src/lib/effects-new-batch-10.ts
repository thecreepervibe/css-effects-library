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

export const effectsNewBatch10: CSSEffect[] = [
  // ==================== TOOLTIPS (10) ====================
  {
    id: 'tooltip-fade-scale',
    name: 'Tooltip Fade Scale',
    category: 'tooltips',
    tags: ['tooltip', 'fade', 'scale', 'hover', 'smooth'],
    difficulty: 'beginner',
    description: 'A tooltip that fades in while scaling up from center on hover',
    cssCode: `.tooltip-fade-scale-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-fade-scale {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-fade-scale-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) scale(0.5);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-fade-scale-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`,
    htmlCode: `<div class="tooltip-fade-scale-wrap" data-tip="Fade & Scale!"><div class="tooltip-fade-scale">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-slide-direction',
    name: 'Tooltip Slide Direction',
    category: 'tooltips',
    tags: ['tooltip', 'slide', 'direction', 'hover', 'top'],
    difficulty: 'beginner',
    description: 'A tooltip that slides in from a specific direction on hover',
    cssCode: `.tooltip-slide-dir-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-slide-dir {
  padding: 8px 14px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-slide-dir-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
  padding: 6px 12px;
  background: #0a0a1a;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-slide-dir-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="tooltip-slide-dir-wrap" data-tip="Slide direction!"><div class="tooltip-slide-dir">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-flip-reveal',
    name: 'Tooltip Flip Reveal',
    category: 'tooltips',
    tags: ['tooltip', 'flip', 'reveal', '3d', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip that flips in with a 3D rotation reveal on hover',
    cssCode: `.tooltip-flip-reveal-wrap {
  position: relative;
  display: inline-block;
  perspective: 400px;
}
.tooltip-flip-reveal {
  padding: 8px 14px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-flip-reveal-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) rotateX(70deg);
  padding: 6px 12px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transform-origin: bottom center;
  transition: opacity 0.3s ease, transform 0.4s ease;
  pointer-events: none;
}
.tooltip-flip-reveal-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) rotateX(0deg);
}`,
    htmlCode: `<div class="tooltip-flip-reveal-wrap" data-tip="Flipped reveal!"><div class="tooltip-flip-reveal">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-bounce-appear',
    name: 'Tooltip Bounce Appear',
    category: 'tooltips',
    tags: ['tooltip', 'bounce', 'appear', 'spring', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip that bounces into view with an overshoot spring animation on hover',
    cssCode: `.tooltip-bounce-appear-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-bounce-appear {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-bounce-appear-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  padding: 6px 12px;
  background: #0a0a1a;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
.tooltip-bounce-appear-wrap:hover::after {
  opacity: 1;
  animation: tooltip-bounce-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
@keyframes tooltip-bounce-in {
  0% { transform: translateX(-50%) translateY(15px) scale(0.8); }
  60% { transform: translateX(-50%) translateY(-6px) scale(1.05); }
  100% { transform: translateX(-50%) translateY(0) scale(1); }
}`,
    htmlCode: `<div class="tooltip-bounce-appear-wrap" data-tip="Bounce appear!"><div class="tooltip-bounce-appear">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-elastic',
    name: 'Tooltip Elastic',
    category: 'tooltips',
    tags: ['tooltip', 'elastic', 'spring', 'stretch', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip that stretches elastically into view with an overshoot effect on hover',
    cssCode: `.tooltip-elastic-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-elastic {
  padding: 8px 14px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-elastic-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) scaleX(0.3) scaleY(1.4);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
.tooltip-elastic-wrap:hover::after {
  opacity: 1;
  animation: tooltip-elastic-in 0.6s cubic-bezier(0.68,-0.55,0.265,1.55) forwards;
}
@keyframes tooltip-elastic-in {
  0% { transform: translateX(-50%) scaleX(0.3) scaleY(1.4); }
  50% { transform: translateX(-50%) scaleX(1.1) scaleY(0.9); }
  100% { transform: translateX(-50%) scaleX(1) scaleY(1); }
}`,
    htmlCode: `<div class="tooltip-elastic-wrap" data-tip="Elastic!"><div class="tooltip-elastic">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-glow',
    name: 'Tooltip Glow',
    category: 'tooltips',
    tags: ['tooltip', 'glow', 'neon', 'light', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip with a pulsing emerald glow effect that appears on hover',
    cssCode: `.tooltip-glow-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-glow {
  padding: 8px 14px;
  background: #0a0a1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-glow-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 12px;
  background: #0a0a1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-glow-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  animation: tooltip-glow-pulse 1.5s ease-in-out infinite;
}
@keyframes tooltip-glow-pulse {
  0%, 100% { box-shadow: 0 0 5px #10b98144, 0 0 15px #10b98122; }
  50% { box-shadow: 0 0 10px #10b98166, 0 0 30px #10b98133; }
}`,
    htmlCode: `<div class="tooltip-glow-wrap" data-tip="Glowing!"><div class="tooltip-glow">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-gradient-bg',
    name: 'Tooltip Gradient BG',
    category: 'tooltips',
    tags: ['tooltip', 'gradient', 'background', 'colorful', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip with an animated gradient background that shifts colors on hover',
    cssCode: `.tooltip-gradient-bg-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-gradient-bg {
  padding: 8px 14px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-gradient-bg-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  padding: 6px 14px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: #fff;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-gradient-bg-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  animation: tooltip-grad-shift 2s linear infinite;
}
@keyframes tooltip-grad-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="tooltip-gradient-bg-wrap" data-tip="Gradient tip!"><div class="tooltip-gradient-bg">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-arrow-animated',
    name: 'Tooltip Arrow Animated',
    category: 'tooltips',
    tags: ['tooltip', 'arrow', 'animated', 'pointer', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip with an animated arrow that grows and points to the trigger element on hover',
    cssCode: `.tooltip-arrow-anim-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-arrow-anim {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-arrow-anim-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(120% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 12px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-arrow-anim-wrap::before {
  content: '';
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) scaleY(0);
  border: 6px solid transparent;
  border-top-color: #0f0f1a;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-arrow-anim-wrap:hover::after,
.tooltip-arrow-anim-wrap:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scaleY(1);
}`,
    htmlCode: `<div class="tooltip-arrow-anim-wrap" data-tip="Animated arrow!"><div class="tooltip-arrow-anim">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-multiline',
    name: 'Tooltip Multiline',
    category: 'tooltips',
    tags: ['tooltip', 'multiline', 'text', 'wrap', 'hover'],
    difficulty: 'intermediate',
    description: 'A tooltip that supports multiline text with a wider container and text wrapping',
    cssCode: `.tooltip-multiline-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-multiline {
  padding: 8px 14px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.tooltip-multiline-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 8px 12px;
  background: #0a0a1a;
  color: #e2e8f0;
  border: 1px solid #10b98144;
  border-radius: 6px;
  font-size: 0.7rem;
  width: 180px;
  white-space: normal;
  text-align: center;
  line-height: 1.4;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.tooltip-multiline-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="tooltip-multiline-wrap" data-tip="This is a multiline tooltip with lots of helpful information"><div class="tooltip-multiline">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'tooltip-follow-cursor',
    name: 'Tooltip Follow Cursor',
    category: 'tooltips',
    tags: ['tooltip', 'cursor', 'follow', 'track', 'hover'],
    difficulty: 'advanced',
    description: 'A tooltip that follows the cursor position within the trigger element area',
    cssCode: `.tooltip-follow-cursor-wrap {
  position: relative;
  display: inline-block;
}
.tooltip-follow-cursor {
  padding: 16px 28px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b98144;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: crosshair;
}
.tooltip-follow-cursor-wrap::after {
  content: attr(data-tip);
  position: absolute;
  top: -8px;
  left: 0;
  padding: 5px 10px;
  background: #1a1a2e;
  color: #10b981;
  border: 1px solid #10b98166;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  transform: translateX(var(--mx, 0)) translateY(calc(-100% + var(--my, 0)));
}
.tooltip-follow-cursor-wrap:hover::after {
  opacity: 1;
}
.tooltip-follow-cursor-wrap:hover {
  animation: tooltip-track 0.1s linear infinite;
}
@keyframes tooltip-track {
  0%, 100% { /* JS sets --mx/--my */ }
}`,
    htmlCode: `<div class="tooltip-follow-cursor-wrap" data-tip="Following you!" onmousemove="this.style.setProperty('--mx',((event.offsetX/this.offsetWidth)*100)+'%');this.style.setProperty('--my',((event.offsetY/this.offsetHeight)*100)+'%')"><div class="tooltip-follow-cursor">Move cursor here</div></div>`,
    isNew: true,
  },

  // ==================== TRANSITIONS (10) ====================
  {
    id: 'transition-page-slide',
    name: 'Transition Page Slide',
    category: 'transitions',
    tags: ['transition', 'page', 'slide', 'navigate', 'panel'],
    difficulty: 'intermediate',
    description: 'A page-like sliding transition that moves content in from the side',
    cssCode: `.transition-page-slide {
  width: 200px;
  height: 120px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.transition-page-slide-inner {
  padding: 16px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: page-slide-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes page-slide-in {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
.transition-page-slide-bar {
  height: 3px;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  animation: page-bar 1s ease forwards;
}
@keyframes page-bar {
  0% { width: 0; }
  100% { width: 100%; }
}`,
    htmlCode: `<div class="transition-page-slide"><div class="transition-page-slide-bar"></div><div class="transition-page-slide-inner">Page Slide</div></div>`,
    isNew: true,
  },
  {
    id: 'transition-morph-shape',
    name: 'Transition Morph Shape',
    category: 'transitions',
    tags: ['transition', 'morph', 'shape', 'transform', 'animate'],
    difficulty: 'intermediate',
    description: 'A transition that morphs the element shape from one form to another',
    cssCode: `.transition-morph-shape {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981, #059669);
  animation: morph-shape 3s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
}
@keyframes morph-shape {
  0%, 100% { border-radius: 50%; transform: rotate(0deg); }
  25% { border-radius: 10px; transform: rotate(90deg); }
  50% { border-radius: 50% 10px; transform: rotate(180deg); }
  75% { border-radius: 10px 50%; transform: rotate(270deg); }
}`,
    htmlCode: `<div class="transition-morph-shape">Morph</div>`,
    isNew: true,
  },
  {
    id: 'transition-cross-fade',
    name: 'Transition Cross Fade',
    category: 'transitions',
    tags: ['transition', 'cross', 'fade', 'blend', 'swap'],
    difficulty: 'intermediate',
    description: 'A cross-fade transition that blends two states with overlapping opacity',
    cssCode: `.transition-cross-fade {
  width: 200px;
  height: 100px;
  position: relative;
  background: #0a0a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.transition-cross-fade-a {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: cross-a 3s ease-in-out infinite;
}
.transition-cross-fade-b {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #10b98122;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  animation: cross-b 3s ease-in-out infinite;
}
@keyframes cross-a {
  0%, 40% { opacity: 1; }
  50%, 90% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes cross-b {
  0%, 40% { opacity: 0; }
  50%, 90% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="transition-cross-fade"><div class="transition-cross-fade-a">State A</div><div class="transition-cross-fade-b">State B</div></div>`,
    isNew: true,
  },
  {
    id: 'transition-zoom-blur',
    name: 'Transition Zoom Blur',
    category: 'transitions',
    tags: ['transition', 'zoom', 'blur', 'focus', 'scale'],
    difficulty: 'intermediate',
    description: 'A transition that zooms in with a blur effect and sharpens at the end',
    cssCode: `.transition-zoom-blur {
  width: 200px;
  height: 100px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: zoom-blur-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  overflow: hidden;
}
@keyframes zoom-blur-in {
  0% { transform: scale(2.5); filter: blur(12px); opacity: 0; }
  60% { transform: scale(1.05); filter: blur(2px); opacity: 0.9; }
  100% { transform: scale(1); filter: blur(0); opacity: 1; }
}`,
    htmlCode: `<div class="transition-zoom-blur">Zoom Blur</div>`,
    isNew: true,
  },
  {
    id: 'transition-rotate-flip',
    name: 'Transition Rotate Flip',
    category: 'transitions',
    tags: ['transition', 'rotate', 'flip', '3d', 'perspective'],
    difficulty: 'advanced',
    description: 'A 3D rotate flip transition that spins the element around its Y-axis',
    cssCode: `.transition-rotate-flip {
  width: 160px;
  height: 100px;
  perspective: 600px;
}
.transition-rotate-flip-inner {
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  animation: rotate-flip-3d 2s ease-in-out infinite;
  backface-visibility: hidden;
}
@keyframes rotate-flip-3d {
  0% { transform: rotateY(0deg); }
  40% { transform: rotateY(180deg); }
  60% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`,
    htmlCode: `<div class="transition-rotate-flip"><div class="transition-rotate-flip-inner">Rotate Flip</div></div>`,
    isNew: true,
  },
  {
    id: 'transition-curtain',
    name: 'Transition Curtain',
    category: 'transitions',
    tags: ['transition', 'curtain', 'reveal', 'sweep', 'mask'],
    difficulty: 'advanced',
    description: 'A curtain-style transition that sweeps down to reveal content underneath',
    cssCode: `.transition-curtain {
  width: 200px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #2a2a3e;
}
.transition-curtain-content {
  padding: 16px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  background: #0a0a1a;
  height: 100%;
  box-sizing: border-box;
}
.transition-curtain-overlay {
  position: absolute;
  inset: 0;
  background: #1a1a2e;
  transform-origin: top;
  animation: curtain-reveal 2.5s ease-in-out infinite;
}
@keyframes curtain-reveal {
  0%, 10% { transform: scaleY(1); }
  40%, 60% { transform: scaleY(0); }
  90%, 100% { transform: scaleY(1); }
}`,
    htmlCode: `<div class="transition-curtain"><div class="transition-curtain-content">Curtain Reveal</div><div class="transition-curtain-overlay"></div></div>`,
    isNew: true,
  },
  {
    id: 'transition-wipe-diagonal',
    name: 'Transition Wipe Diagonal',
    category: 'transitions',
    tags: ['transition', 'wipe', 'diagonal', 'clip', 'reveal'],
    difficulty: 'advanced',
    description: 'A diagonal wipe transition using clip-path to reveal content from corner to corner',
    cssCode: `.transition-wipe-diagonal {
  width: 200px;
  height: 120px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.transition-wipe-before {
  position: absolute;
  inset: 0;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
}
.transition-wipe-after {
  position: absolute;
  inset: 0;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  animation: wipe-diag 3s ease-in-out infinite;
}
@keyframes wipe-diag {
  0%, 10% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
  40%, 60% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  90%, 100% { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
}`,
    htmlCode: `<div class="transition-wipe-diagonal"><div class="transition-wipe-before">Before</div><div class="transition-wipe-after">After</div></div>`,
    isNew: true,
  },
  {
    id: 'transition-circle-expand',
    name: 'Transition Circle Expand',
    category: 'transitions',
    tags: ['transition', 'circle', 'expand', 'radial', 'reveal'],
    difficulty: 'advanced',
    description: 'A circular expanding transition that reveals content from the center outward',
    cssCode: `.transition-circle-expand {
  width: 200px;
  height: 120px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.transition-circle-bg {
  position: absolute;
  inset: 0;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
}
.transition-circle-reveal {
  position: absolute;
  inset: 0;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  animation: circle-reveal 3s ease-in-out infinite;
}
@keyframes circle-reveal {
  0%, 10% { clip-path: circle(0% at 50% 50%); }
  40%, 60% { clip-path: circle(75% at 50% 50%); }
  90%, 100% { clip-path: circle(0% at 50% 50%); }
}`,
    htmlCode: `<div class="transition-circle-expand"><div class="transition-circle-bg">Hidden</div><div class="transition-circle-reveal">Revealed</div></div>`,
    isNew: true,
  },
  {
    id: 'transition-split-screen',
    name: 'Transition Split Screen',
    category: 'transitions',
    tags: ['transition', 'split', 'screen', 'divide', 'reveal'],
    difficulty: 'advanced',
    description: 'A split-screen transition that divides and slides apart to reveal content',
    cssCode: `.transition-split-screen {
  width: 200px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #2a2a3e;
}
.transition-split-content {
  position: absolute;
  inset: 0;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
}
.transition-split-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #1a1a2e;
  animation: split-l 3s ease-in-out infinite;
}
.transition-split-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: #1a1a2e;
  animation: split-r 3s ease-in-out infinite;
}
@keyframes split-l {
  0%, 10% { transform: translateX(0); }
  40%, 60% { transform: translateX(-100%); }
  90%, 100% { transform: translateX(0); }
}
@keyframes split-r {
  0%, 10% { transform: translateX(0); }
  40%, 60% { transform: translateX(100%); }
  90%, 100% { transform: translateX(0); }
}`,
    htmlCode: `<div class="transition-split-screen"><div class="transition-split-content">Split Reveal</div><div class="transition-split-left"></div><div class="transition-split-right"></div></div>`,
    isNew: true,
  },
  {
    id: 'transition-pixel-dissolve',
    name: 'Transition Pixel Dissolve',
    category: 'transitions',
    tags: ['transition', 'pixel', 'dissolve', 'grid', 'reveal'],
    difficulty: 'advanced',
    description: 'A pixel dissolve transition that reveals content through a grid of fading tiles',
    cssCode: `.transition-pixel-dissolve {
  width: 200px;
  height: 120px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.transition-pixel-dissolve-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
}
.transition-pixel-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  padding: 2px;
}
.transition-pixel-cell {
  background: #1a1a2e;
  border-radius: 2px;
  animation: pixel-fade 3s ease-in-out infinite;
}
.transition-pixel-cell:nth-child(odd) { animation-delay: 0.2s; }
.transition-pixel-cell:nth-child(3n) { animation-delay: 0.5s; }
@keyframes pixel-fade {
  0%, 10% { opacity: 1; }
  40%, 60% { opacity: 0; }
  90%, 100% { opacity: 1; }
}`,
    htmlCode: `<div class="transition-pixel-dissolve"><div class="transition-pixel-dissolve-label">Dissolve</div><div class="transition-pixel-grid"><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div><div class="transition-pixel-cell"></div></div></div>`,
    isNew: true,
  },

  // ==================== PROGRESS (10) ====================
  {
    id: 'progress-circle-spin',
    name: 'Progress Circle Spin',
    category: 'progress',
    tags: ['progress', 'circle', 'spin', 'ring', 'loader'],
    difficulty: 'intermediate',
    description: 'A circular progress indicator with a spinning arc and emerald gradient stroke',
    cssCode: `.progress-circle-spin {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid #1a1a2e;
  border-top-color: #10b981;
  border-right-color: #10b98166;
  animation: circle-spin 1s linear infinite;
  position: relative;
}
.progress-circle-spin::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: #10b98144;
  animation: circle-spin 1.5s linear infinite reverse;
}
@keyframes circle-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="progress-circle-spin"></div>`,
    isNew: true,
  },
  {
    id: 'progress-step-fill',
    name: 'Progress Step Fill',
    category: 'progress',
    tags: ['progress', 'step', 'fill', 'sequential', 'stages'],
    difficulty: 'intermediate',
    description: 'A multi-step progress bar that fills each segment sequentially with animation',
    cssCode: `.progress-step-fill {
  display: flex;
  gap: 4px;
  width: 200px;
}
.progress-step-fill-seg {
  flex: 1;
  height: 8px;
  background: #1a1a2e;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.progress-step-fill-seg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b981;
  border-radius: 4px;
  transform-origin: left;
  animation: step-fill 3s ease-in-out infinite;
}
.progress-step-fill-seg:nth-child(2)::after { animation-delay: 0.5s; }
.progress-step-fill-seg:nth-child(3)::after { animation-delay: 1s; }
.progress-step-fill-seg:nth-child(4)::after { animation-delay: 1.5s; }
@keyframes step-fill {
  0%, 10% { transform: scaleX(0); }
  30%, 70% { transform: scaleX(1); }
  90%, 100% { transform: scaleX(0); }
}`,
    htmlCode: `<div class="progress-step-fill"><div class="progress-step-fill-seg"></div><div class="progress-step-fill-seg"></div><div class="progress-step-fill-seg"></div><div class="progress-step-fill-seg"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-gradient-bar',
    name: 'Progress Gradient Bar',
    category: 'progress',
    tags: ['progress', 'gradient', 'bar', 'colorful', 'fill'],
    difficulty: 'beginner',
    description: 'A progress bar with an animated gradient fill that shifts colors as it progresses',
    cssCode: `.progress-gradient-bar {
  width: 200px;
  height: 10px;
  background: #1a1a2e;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.progress-gradient-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 200% 100%;
  border-radius: 5px;
  animation: grad-bar-fill 2s ease-in-out infinite, grad-bar-shift 1.5s linear infinite;
}
@keyframes grad-bar-fill {
  0% { width: 0%; }
  50% { width: 75%; }
  100% { width: 0%; }
}
@keyframes grad-bar-shift {
  to { background-position: 200% 0; }
}`,
    htmlCode: `<div class="progress-gradient-bar"><div class="progress-gradient-bar-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-striped-move',
    name: 'Progress Striped Move',
    category: 'progress',
    tags: ['progress', 'striped', 'move', 'barber', 'animated'],
    difficulty: 'beginner',
    description: 'A progress bar with animated diagonal stripes that continuously move across the fill',
    cssCode: `.progress-striped-move {
  width: 200px;
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.progress-striped-move-fill {
  height: 100%;
  width: 70%;
  background: repeating-linear-gradient(
    -45deg,
    #10b981,
    #10b981 8px,
    #059669 8px,
    #059669 16px
  );
  background-size: 22.63px 100%;
  border-radius: 6px;
  animation: stripe-move 0.8s linear infinite;
}
@keyframes stripe-move {
  to { background-position: 22.63px 0; }
}`,
    htmlCode: `<div class="progress-striped-move"><div class="progress-striped-move-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-glow-track',
    name: 'Progress Glow Track',
    category: 'progress',
    tags: ['progress', 'glow', 'track', 'neon', 'light'],
    difficulty: 'intermediate',
    description: 'A progress bar with a glowing track that emits emerald light along the filled portion',
    cssCode: `.progress-glow-track {
  width: 200px;
  height: 8px;
  background: #0a0a1a;
  border-radius: 4px;
  overflow: visible;
  position: relative;
  border: 1px solid #1a1a2e;
}
.progress-glow-track-fill {
  height: 100%;
  width: 65%;
  background: #10b981;
  border-radius: 4px;
  position: relative;
  animation: glow-track-pulse 2s ease-in-out infinite;
}
.progress-glow-track-fill::after {
  content: '';
  position: absolute;
  right: -4px;
  top: -6px;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  filter: blur(6px);
  animation: glow-tip 2s ease-in-out infinite;
}
@keyframes glow-track-pulse {
  0%, 100% { box-shadow: 0 0 6px #10b98144; }
  50% { box-shadow: 0 0 14px #10b98166; }
}
@keyframes glow-tip {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}`,
    htmlCode: `<div class="progress-glow-track"><div class="progress-glow-track-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-label-inside',
    name: 'Progress Label Inside',
    category: 'progress',
    tags: ['progress', 'label', 'inside', 'text', 'bar'],
    difficulty: 'intermediate',
    description: 'A progress bar with a percentage label displayed inside the filled area',
    cssCode: `.progress-label-inside {
  width: 200px;
  height: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid #2a2a3e;
}
.progress-label-inside-fill {
  height: 100%;
  width: 68%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  animation: label-fill-anim 3s ease-in-out infinite;
}
@keyframes label-fill-anim {
  0% { width: 0%; }
  50% { width: 85%; }
  100% { width: 0%; }
}`,
    htmlCode: `<div class="progress-label-inside"><div class="progress-label-inside-fill">68%</div></div>`,
    isNew: true,
  },
  {
    id: 'progress-stacked-multi',
    name: 'Progress Stacked Multi',
    category: 'progress',
    tags: ['progress', 'stacked', 'multi', 'segments', 'layers'],
    difficulty: 'intermediate',
    description: 'A stacked progress bar with multiple colored segments layered on top of each other',
    cssCode: `.progress-stacked-multi {
  width: 200px;
  height: 14px;
  background: #0a0a1a;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  border: 1px solid #1a1a2e;
  display: flex;
}
.progress-stacked-a {
  width: 40%;
  background: #10b981;
  border-radius: 7px 0 0 7px;
  transition: width 0.5s ease;
}
.progress-stacked-b {
  width: 25%;
  background: #3b82f6;
  transition: width 0.5s ease;
}
.progress-stacked-c {
  width: 15%;
  background: #8b5cf6;
  border-radius: 0 7px 7px 0;
  transition: width 0.5s ease;
}
.progress-stacked-multi:hover .progress-stacked-a { width: 50%; }
.progress-stacked-multi:hover .progress-stacked-b { width: 30%; }
.progress-stacked-multi:hover .progress-stacked-c { width: 10%; }`,
    htmlCode: `<div class="progress-stacked-multi"><div class="progress-stacked-a"></div><div class="progress-stacked-b"></div><div class="progress-stacked-c"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-skeleton',
    name: 'Progress Skeleton',
    category: 'progress',
    tags: ['progress', 'skeleton', 'shimmer', 'loading', 'placeholder'],
    difficulty: 'beginner',
    description: 'A skeleton loading progress indicator with a shimmer animation across placeholder blocks',
    cssCode: `.progress-skeleton {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.progress-skeleton-line {
  height: 10px;
  background: #1a1a2e;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.progress-skeleton-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, #10b98122, transparent);
  animation: shimmer-slide 1.5s ease-in-out infinite;
}
.progress-skeleton-line:nth-child(1) { width: 100%; }
.progress-skeleton-line:nth-child(2) { width: 75%; }
.progress-skeleton-line:nth-child(3) { width: 50%; }
@keyframes shimmer-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`,
    htmlCode: `<div class="progress-skeleton"><div class="progress-skeleton-line"></div><div class="progress-skeleton-line"></div><div class="progress-skeleton-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-bounce',
    name: 'Progress Bounce',
    category: 'progress',
    tags: ['progress', 'bounce', 'dot', 'loader', 'animate'],
    difficulty: 'beginner',
    description: 'A progress indicator with dots that bounce in sequence creating a wave loading effect',
    cssCode: `.progress-bounce {
  display: flex;
  gap: 6px;
  align-items: center;
}
.progress-bounce-dot {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: bounce-dot 1.4s ease-in-out infinite;
}
.progress-bounce-dot:nth-child(2) { animation-delay: 0.15s; }
.progress-bounce-dot:nth-child(3) { animation-delay: 0.3s; }
.progress-bounce-dot:nth-child(4) { animation-delay: 0.45s; }
.progress-bounce-dot:nth-child(5) { animation-delay: 0.6s; }
@keyframes bounce-dot {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-14px); opacity: 1; }
}`,
    htmlCode: `<div class="progress-bounce"><div class="progress-bounce-dot"></div><div class="progress-bounce-dot"></div><div class="progress-bounce-dot"></div><div class="progress-bounce-dot"></div><div class="progress-bounce-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-pulse-track',
    name: 'Progress Pulse Track',
    category: 'progress',
    tags: ['progress', 'pulse', 'track', 'breathing', 'glow'],
    difficulty: 'intermediate',
    description: 'A progress bar with a pulsing glow that travels along the track, indicating activity',
    cssCode: `.progress-pulse-track {
  width: 200px;
  height: 8px;
  background: #0f0f1a;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  border: 1px solid #1a1a2e;
}
.progress-pulse-track-fill {
  height: 100%;
  width: 60%;
  background: #10b98133;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.progress-pulse-track-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  animation: pulse-travel 1.5s ease-in-out infinite;
}
@keyframes pulse-travel {
  0% { left: -40%; }
  100% { left: 140%; }
}`,
    htmlCode: `<div class="progress-pulse-track"><div class="progress-pulse-track-fill"></div></div>`,
    isNew: true,
  },

  // ==================== NOTIFICATIONS (10) ====================
  {
    id: 'notif-slide-right',
    name: 'Notif Slide Right',
    category: 'notifications',
    tags: ['notification', 'slide', 'right', 'toast', 'enter'],
    difficulty: 'beginner',
    description: 'A notification that slides in from the right side with a smooth entrance animation',
    cssCode: `.notif-slide-right {
  width: 280px;
  padding: 14px 18px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-left: 3px solid #10b981;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: slide-right-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  box-shadow: 0 4px 20px #10b98111;
}
@keyframes slide-right-in {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-slide-right">Notification slid in from the right</div>`,
    isNew: true,
  },
  {
    id: 'notif-bounce-in',
    name: 'Notif Bounce In',
    category: 'notifications',
    tags: ['notification', 'bounce', 'in', 'spring', 'toast'],
    difficulty: 'intermediate',
    description: 'A notification that bounces into view with a spring-like overshoot animation',
    cssCode: `.notif-bounce-in {
  width: 280px;
  padding: 14px 18px;
  background: #1a1a2e;
  border: 1px solid #10b98144;
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: notif-bounce-entrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  box-shadow: 0 8px 30px #10b98115;
}
@keyframes notif-bounce-entrance {
  0% { transform: scale(0.3) translateY(20px); opacity: 0; }
  50% { transform: scale(1.05) translateY(-4px); }
  70% { transform: scale(0.98) translateY(1px); }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-bounce-in">Bounced into view!</div>`,
    isNew: true,
  },
  {
    id: 'notif-flip-reveal',
    name: 'Notif Flip Reveal',
    category: 'notifications',
    tags: ['notification', 'flip', 'reveal', '3d', 'toast'],
    difficulty: 'intermediate',
    description: 'A notification that flips in from an edge with a 3D rotation reveal animation',
    cssCode: `.notif-flip-reveal {
  width: 280px;
  padding: 14px 18px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-top: 3px solid #10b981;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: notif-flip-in 0.6s ease forwards;
  transform-origin: top center;
  perspective: 600px;
}
@keyframes notif-flip-in {
  0% { transform: rotateX(-90deg); opacity: 0; }
  60% { transform: rotateX(10deg); }
  100% { transform: rotateX(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="notif-flip-reveal">Flipped into view!</div>`,
    isNew: true,
  },
  {
    id: 'notif-glow-border',
    name: 'Notif Glow Border',
    category: 'notifications',
    tags: ['notification', 'glow', 'border', 'neon', 'toast'],
    difficulty: 'intermediate',
    description: 'A notification with an animated glowing border that pulses with emerald light',
    cssCode: `.notif-glow-border {
  width: 280px;
  padding: 14px 18px;
  background: #0a0a1a;
  border: 1px solid #10b981;
  border-radius: 10px;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 600;
  animation: notif-border-glow 2s ease-in-out infinite;
}
@keyframes notif-border-glow {
  0%, 100% {
    box-shadow: 0 0 5px #10b98133, 0 0 15px #10b98111;
    border-color: #10b98166;
  }
  50% {
    box-shadow: 0 0 10px #10b98155, 0 0 30px #10b98122, 0 0 50px #10b98111;
    border-color: #10b981;
  }
}`,
    htmlCode: `<div class="notif-glow-border">Glowing notification!</div>`,
    isNew: true,
  },
  {
    id: 'notif-progress-bar',
    name: 'Notif Progress Bar',
    category: 'notifications',
    tags: ['notification', 'progress', 'bar', 'auto', 'dismiss'],
    difficulty: 'intermediate',
    description: 'A notification with an auto-dismiss progress bar that counts down at the bottom',
    cssCode: `.notif-progress-bar {
  width: 280px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
}
.notif-progress-bar-content {
  padding: 12px 16px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
}
.notif-progress-bar-track {
  height: 3px;
  background: #0f0f1a;
}
.notif-progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  animation: notif-autoclose 4s linear forwards;
}
@keyframes notif-autoclose {
  0% { width: 100%; }
  100% { width: 0%; }
}`,
    htmlCode: `<div class="notif-progress-bar"><div class="notif-progress-bar-content">Auto-dismiss in 4s</div><div class="notif-progress-bar-track"><div class="notif-progress-bar-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'notif-stack-list',
    name: 'Notif Stack List',
    category: 'notifications',
    tags: ['notification', 'stack', 'list', 'multiple', 'queue'],
    difficulty: 'intermediate',
    description: 'A stacked list of notifications that animate in with staggered entrance timing',
    cssCode: `.notif-stack-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 280px;
}
.notif-stack-item {
  padding: 10px 14px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-left: 3px solid #10b981;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 600;
  animation: stack-slide-in 0.4s ease forwards;
  opacity: 0;
}
.notif-stack-item:nth-child(1) { animation-delay: 0s; }
.notif-stack-item:nth-child(2) { animation-delay: 0.15s; }
.notif-stack-item:nth-child(3) { animation-delay: 0.3s; }
@keyframes stack-slide-in {
  0% { transform: translateX(40px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="notif-stack-list"><div class="notif-stack-item">First notification</div><div class="notif-stack-item">Second notification</div><div class="notif-stack-item">Third notification</div></div>`,
    isNew: true,
  },
  {
    id: 'notif-icon-pulse',
    name: 'Notif Icon Pulse',
    category: 'notifications',
    tags: ['notification', 'icon', 'pulse', 'alert', 'badge'],
    difficulty: 'beginner',
    description: 'A notification with a pulsing icon indicator that draws attention with a breathing glow',
    cssCode: `.notif-icon-pulse {
  width: 280px;
  padding: 14px 18px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
}
.notif-icon-pulse-badge {
  width: 32px;
  height: 32px;
  background: #10b98122;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.9rem;
  animation: icon-pulse-ring 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes icon-pulse-ring {
  0%, 100% { box-shadow: 0 0 0 0 #10b98144; }
  50% { box-shadow: 0 0 0 8px #10b98100; }
}`,
    htmlCode: `<div class="notif-icon-pulse"><div class="notif-icon-pulse-badge">!</div><span>Alert with pulsing icon</span></div>`,
    isNew: true,
  },
  {
    id: 'notif-dismiss-fade',
    name: 'Notif Dismiss Fade',
    category: 'notifications',
    tags: ['notification', 'dismiss', 'fade', 'exit', 'close'],
    difficulty: 'beginner',
    description: 'A notification that fades out and shrinks when dismissed with a smooth exit animation',
    cssCode: `.notif-dismiss-fade {
  width: 280px;
  padding: 14px 18px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: notif-enter 0.4s ease forwards;
}
.notif-dismiss-fade:hover {
  animation: notif-exit 0.5s ease forwards;
}
.notif-dismiss-x {
  color: #64748b;
  cursor: pointer;
  font-size: 0.85rem;
  transition: color 0.2s;
}
.notif-dismiss-x:hover { color: #ef4444; }
@keyframes notif-enter {
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes notif-exit {
  0% { transform: translateY(0); opacity: 1; max-height: 60px; margin-bottom: 0; }
  100% { transform: translateY(-10px); opacity: 0; max-height: 0; margin-bottom: -10px; padding: 0 18px; }
}`,
    htmlCode: `<div class="notif-dismiss-fade"><span>Hover to dismiss</span><span class="notif-dismiss-x">&times;</span></div>`,
    isNew: true,
  },
  {
    id: 'notif-success-check',
    name: 'Notif Success Check',
    category: 'notifications',
    tags: ['notification', 'success', 'check', 'confirm', 'green'],
    difficulty: 'intermediate',
    description: 'A success notification with an animated checkmark that draws in with a stroke animation',
    cssCode: `.notif-success-check {
  width: 280px;
  padding: 14px 18px;
  background: #0a0a1a;
  border: 1px solid #10b98144;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: notif-success-in 0.4s ease forwards;
}
.notif-success-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #10b98122;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 800;
  flex-shrink: 0;
  animation: check-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s both;
}
@keyframes notif-success-in {
  0% { transform: translateY(-15px) scale(0.95); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes check-pop {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="notif-success-check"><div class="notif-success-icon">&#10003;</div><span>Success! Operation completed</span></div>`,
    isNew: true,
  },
  {
    id: 'notif-error-shake',
    name: 'Notif Error Shake',
    category: 'notifications',
    tags: ['notification', 'error', 'shake', 'alert', 'danger'],
    difficulty: 'intermediate',
    description: 'An error notification that shakes on appearance and has a red accent to indicate failure',
    cssCode: `.notif-error-shake {
  width: 280px;
  padding: 14px 18px;
  background: #0a0a1a;
  border: 1px solid #ef444444;
  border-left: 3px solid #ef4444;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 600;
  animation: error-shake-in 0.6s ease forwards;
}
.notif-error-icon {
  color: #ef4444;
  font-size: 0.9rem;
  flex-shrink: 0;
}
@keyframes error-shake-in {
  0% { transform: translateX(40px); opacity: 0; }
  20% { transform: translateX(-8px); opacity: 1; }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0); }
}`,
    htmlCode: `<div class="notif-error-shake"><span class="notif-error-icon">&#10007;</span><span>Error! Something went wrong</span></div>`,
    isNew: true,
  },
];
