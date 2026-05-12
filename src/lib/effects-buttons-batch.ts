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

export const effectsButtonsBatch: CSSEffect[] = [
  {
    id: 'magnetic-button',
    name: 'Magnetic Button',
    category: 'buttons',
    tags: ['hover', 'magnetic', 'interactive'],
    difficulty: 'intermediate',
    description: 'Button that appears to magnetically attract the cursor with a scale and glow effect',
    cssCode: `.magnetic-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}
.magnetic-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(16,185,129,0.4);
}
.magnetic-btn:active {
  transform: scale(0.96);
}`,
    htmlCode: `<button class="magnetic-btn">Magnetic</button>`,
    isNew: true,
  },
  {
    id: 'liquid-button',
    name: 'Liquid Button',
    category: 'buttons',
    tags: ['liquid', 'hover', 'organic', 'animated'],
    difficulty: 'advanced',
    description: 'Button with a liquid blob hover effect that morphs and flows',
    cssCode: `.liquid-btn {
  padding: 14px 36px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease;
}
.liquid-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
}
.liquid-btn:hover::before {
  width: 300px;
  height: 300px;
}
.liquid-btn:hover {
  color: #000;
  z-index: 1;
}
.liquid-btn span {
  position: relative;
  z-index: 2;
}`,
    htmlCode: `<button class="liquid-btn"><span>Liquid</span></button>`,
    isNew: true,
  },
  {
    id: 'gradient-sweep-btn',
    name: 'Gradient Sweep Button',
    category: 'buttons',
    tags: ['gradient', 'sweep', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with a gradient that sweeps across on hover',
    cssCode: `.gradient-sweep-btn {
  padding: 12px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.gradient-sweep-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  transition: left 0.4s ease;
  z-index: -1;
}
.gradient-sweep-btn:hover::before {
  left: 0;
}
.gradient-sweep-btn:hover {
  color: #fff;
}`,
    htmlCode: `<button class="gradient-sweep-btn">Sweep</button>`,
    isNew: true,
  },
  {
    id: 'border-draw-btn',
    name: 'Border Draw Button',
    category: 'buttons',
    tags: ['border', 'draw', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button whose border draws itself on hover using SVG dash trick',
    cssCode: `.border-draw-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}
.border-draw-btn::before,
.border-draw-btn::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  border: 2px solid #10b981;
}
.border-draw-btn::before {
  clip-path: inset(0 50% 50% 0);
  transition: clip-path 0.4s ease;
}
.border-draw-btn::after {
  clip-path: inset(50% 0 0 50%);
  transition: clip-path 0.4s ease 0.1s;
}
.border-draw-btn:hover::before {
  clip-path: inset(0 0 50% 0);
}
.border-draw-btn:hover::after {
  clip-path: inset(50% 0 0 0);
}`,
    htmlCode: `<button class="border-draw-btn">Draw</button>`,
    isNew: true,
  },
  {
    id: 'fill-up-btn',
    name: 'Fill Up Button',
    category: 'buttons',
    tags: ['fill', 'hover', 'animated', 'vertical'],
    difficulty: 'beginner',
    description: 'Button that fills with color from bottom to top on hover',
    cssCode: `.fill-up-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.fill-up-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #10b981;
  transition: height 0.4s ease;
  z-index: -1;
}
.fill-up-btn:hover::before {
  height: 100%;
}
.fill-up-btn:hover {
  color: #000;
}`,
    htmlCode: `<button class="fill-up-btn">Fill Up</button>`,
    isNew: true,
  },
  {
    id: 'shine-btn-2',
    name: 'Shine Button',
    category: 'buttons',
    tags: ['shine', 'hover', 'animated', 'reflection'],
    difficulty: 'beginner',
    description: 'Button with a diagonal shine reflection on hover',
    cssCode: `.shine-btn-2 {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.shine-btn-2::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
}
.shine-btn-2:hover::after {
  left: 125%;
}`,
    htmlCode: `<button class="shine-btn-2">Shine</button>`,
    isNew: true,
  },
  {
    id: 'flip-3d-btn',
    name: '3D Flip Button',
    category: 'buttons',
    tags: ['3d', 'flip', 'hover', 'transform'],
    difficulty: 'advanced',
    description: 'Button that flips in 3D on hover to reveal a different face',
    cssCode: `.flip-3d-wrap {
  perspective: 600px;
  display: inline-block;
}
.flip-3d-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  position: relative;
}
.flip-3d-btn::before {
  content: 'Flipped!';
  position: absolute;
  inset: 0;
  background: #3b82f6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  backface-visibility: hidden;
  transform: rotateX(180deg);
}
.flip-3d-wrap:hover .flip-3d-btn {
  transform: rotateX(180deg);
}`,
    htmlCode: `<div class="flip-3d-wrap"><button class="flip-3d-btn">Hover Me</button></div>`,
    isNew: true,
  },
  {
    id: 'slide-bg-btn',
    name: 'Slide Background Button',
    category: 'buttons',
    tags: ['slide', 'background', 'hover', 'animated'],
    difficulty: 'beginner',
    description: 'Button with a sliding background on hover from left to right',
    cssCode: `.slide-bg-btn {
  padding: 12px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.slide-bg-btn::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  background: #10b981;
  transition: width 0.4s ease;
  z-index: -1;
}
.slide-bg-btn:hover::before {
  width: 100%;
  left: 0;
  right: auto;
}
.slide-bg-btn:hover {
  color: #000;
}`,
    htmlCode: `<button class="slide-bg-btn">Slide</button>`,
    isNew: true,
  },
  {
    id: 'pulse-glow-btn',
    name: 'Pulse Glow Button',
    category: 'buttons',
    tags: ['pulse', 'glow', 'animated', 'attention'],
    difficulty: 'beginner',
    description: 'Button with a continuously pulsing glow animation',
    cssCode: `.pulse-glow-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  animation: pulse-glow-anim 2s ease-in-out infinite;
}
@keyframes pulse-glow-anim {
  0%, 100% {
    box-shadow: 0 0 5px rgba(16,185,129,0.4), 0 0 10px rgba(16,185,129,0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(16,185,129,0.6), 0 0 30px rgba(16,185,129,0.3), 0 0 45px rgba(16,185,129,0.1);
  }
}`,
    htmlCode: `<button class="pulse-glow-btn">Pulse</button>`,
    isNew: true,
  },
  {
    id: 'icon-slide-btn',
    name: 'Icon Slide Button',
    category: 'buttons',
    tags: ['icon', 'slide', 'hover', 'arrow'],
    difficulty: 'intermediate',
    description: 'Button with an arrow icon that slides in on hover',
    cssCode: `.icon-slide-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0;
  overflow: hidden;
  transition: gap 0.3s ease;
}
.icon-slide-btn .arrow {
  display: inline-block;
  transform: translateX(-20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.icon-slide-btn:hover .arrow {
  transform: translateX(0);
  opacity: 1;
}
.icon-slide-btn:hover {
  gap: 8px;
}`,
    htmlCode: `<button class="icon-slide-btn">Go <span class="arrow">→</span></button>`,
    isNew: true,
  },
  {
    id: 'underline-grow-btn',
    name: 'Underline Grow Button',
    category: 'buttons',
    tags: ['underline', 'grow', 'hover', 'animated'],
    difficulty: 'beginner',
    description: 'Button with an underline that grows from center on hover',
    cssCode: `.underline-grow-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
}
.underline-grow-btn::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.3s ease, left 0.3s ease;
}
.underline-grow-btn:hover::after {
  width: 80%;
  left: 10%;
}`,
    htmlCode: `<button class="underline-grow-btn">Underline</button>`,
    isNew: true,
  },
  {
    id: 'shadow-lift-btn',
    name: 'Shadow Lift Button',
    category: 'buttons',
    tags: ['shadow', 'lift', 'hover', 'elevation'],
    difficulty: 'beginner',
    description: 'Button that lifts up with a deepening shadow on hover',
    cssCode: `.shadow-lift-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}
.shadow-lift-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(16,185,129,0.3), 0 6px 10px rgba(0,0,0,0.2);
}
.shadow-lift-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}`,
    htmlCode: `<button class="shadow-lift-btn">Lift</button>`,
    isNew: true,
  },
  {
    id: 'ripple-btn-2',
    name: 'Ripple Effect Button',
    category: 'buttons',
    tags: ['ripple', 'hover', 'animated', 'wave'],
    difficulty: 'intermediate',
    description: 'Button with a radial ripple emanating on hover',
    cssCode: `.ripple-btn-2 {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.ripple-btn-2::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(0,0,0,0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}
.ripple-btn-2:hover::after {
  transform: translate(-50%, -50%) scale(40);
  opacity: 1;
}`,
    htmlCode: `<button class="ripple-btn-2">Ripple</button>`,
    isNew: true,
  },
  {
    id: 'press-down-btn',
    name: 'Press Down Button',
    category: 'buttons',
    tags: ['press', '3d', 'hover', 'active'],
    difficulty: 'beginner',
    description: 'Button that appears to press down physically when clicked',
    cssCode: `.press-down-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 6px 0 #059669, 0 8px 12px rgba(0,0,0,0.3);
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transform: translateY(0);
}
.press-down-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #059669, 0 10px 16px rgba(0,0,0,0.3);
}
.press-down-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #059669, 0 2px 4px rgba(0,0,0,0.3);
}`,
    htmlCode: `<button class="press-down-btn">Press</button>`,
    isNew: true,
  },
  {
    id: 'bounce-btn',
    name: 'Bounce Button',
    category: 'buttons',
    tags: ['bounce', 'animated', 'hover', 'playful'],
    difficulty: 'beginner',
    description: 'Button that bounces when hovered with a springy animation',
    cssCode: `.bounce-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.bounce-btn:hover {
  animation: bounce-anim 0.6s ease;
}
@keyframes bounce-anim {
  0% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}`,
    htmlCode: `<button class="bounce-btn">Bounce</button>`,
    isNew: true,
  },
  {
    id: 'rotate-icon-btn',
    name: 'Rotate Icon Button',
    category: 'buttons',
    tags: ['rotate', 'icon', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with an icon that rotates on hover',
    cssCode: `.rotate-icon-btn {
  padding: 12px 32px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease, color 0.3s ease;
}
.rotate-icon-btn .icon {
  display: inline-block;
  transition: transform 0.4s ease;
}
.rotate-icon-btn:hover .icon {
  transform: rotate(180deg);
}
.rotate-icon-btn:hover {
  background: #10b981;
  color: #000;
}`,
    htmlCode: `<button class="rotate-icon-btn"><span class="icon">⚙</span> Settings</button>`,
    isNew: true,
  },
  {
    id: 'border-spin-btn',
    name: 'Border Spin Button',
    category: 'buttons',
    tags: ['border', 'spin', 'animated', 'gradient'],
    difficulty: 'advanced',
    description: 'Button with a spinning gradient border animation',
    cssCode: `.border-spin-btn {
  padding: 12px 32px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.border-spin-btn::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  z-index: -2;
  animation: border-spin-anim 3s linear infinite;
}
.border-spin-btn::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: 7px;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes border-spin-anim {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<button class="border-spin-btn">Spin</button>`,
    isNew: true,
  },
  {
    id: 'swipe-btn',
    name: 'Swipe Button',
    category: 'buttons',
    tags: ['swipe', 'hover', 'animated', 'horizontal'],
    difficulty: 'intermediate',
    description: 'Button that swipes its content with a color overlay on hover',
    cssCode: `.swipe-btn {
  padding: 12px 32px;
  background: transparent;
  color: #e2e8f0;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.swipe-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #10b981;
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}
.swipe-btn:hover::before {
  width: 100%;
}
.swipe-btn:hover {
  color: #000;
}`,
    htmlCode: `<button class="swipe-btn">Swipe</button>`,
    isNew: true,
  },
  {
    id: 'fill-center-btn',
    name: 'Fill Center Button',
    category: 'buttons',
    tags: ['fill', 'center', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button that fills with color expanding from the center on hover',
    cssCode: `.fill-center-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.fill-center-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #10b981;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
  z-index: -1;
}
.fill-center-btn:hover::before {
  width: 400px;
  height: 400px;
}
.fill-center-btn:hover {
  color: #000;
}`,
    htmlCode: `<button class="fill-center-btn">Center</button>`,
    isNew: true,
  },
  {
    id: 'outline-collapse-btn',
    name: 'Outline Collapse Button',
    category: 'buttons',
    tags: ['outline', 'collapse', 'hover', 'border'],
    difficulty: 'intermediate',
    description: 'Outlined button whose border collapses inward on hover',
    cssCode: `.outline-collapse-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: padding 0.3s ease, border-width 0.3s ease, background 0.3s ease, color 0.3s ease;
}
.outline-collapse-btn:hover {
  padding: 8px 24px;
  border-width: 8px;
  background: #10b981;
  color: #000;
}`,
    htmlCode: `<button class="outline-collapse-btn">Collapse</button>`,
    isNew: true,
  },
  {
    id: 'double-border-btn',
    name: 'Double Border Button',
    category: 'buttons',
    tags: ['border', 'double', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with a double border that animates on hover',
    cssCode: `.double-border-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}
.double-border-btn::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.double-border-btn:hover::before {
  opacity: 1;
  transform: scale(1);
}
.double-border-btn:hover {
  color: #3b82f6;
}`,
    htmlCode: `<button class="double-border-btn">Double</button>`,
    isNew: true,
  },
  {
    id: 'corner-draw-btn',
    name: 'Corner Draw Button',
    category: 'buttons',
    tags: ['corner', 'draw', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with corner lines that draw in on hover',
    cssCode: `.corner-draw-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: none;
  border-radius: 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
}
.corner-draw-btn::before,
.corner-draw-btn::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: #10b981;
  border-style: solid;
  border-width: 0;
  transition: border-width 0.3s ease;
}
.corner-draw-btn::before {
  top: 0;
  left: 0;
  border-top-width: 2px;
  border-left-width: 2px;
}
.corner-draw-btn::after {
  bottom: 0;
  right: 0;
  border-bottom-width: 2px;
  border-right-width: 2px;
}
.corner-draw-btn:hover::before,
.corner-draw-btn:hover::after {
  width: 100%;
  height: 100%;
}`,
    htmlCode: `<button class="corner-draw-btn">Corner</button>`,
    isNew: true,
  },
  {
    id: 'neon-btn-2',
    name: 'Neon Button',
    category: 'buttons',
    tags: ['neon', 'glow', 'hover', 'dark'],
    difficulty: 'intermediate',
    description: 'Button with a neon glow effect that intensifies on hover',
    cssCode: `.neon-btn-2 {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 7px #10b98166;
  box-shadow: 0 0 5px #10b98133, inset 0 0 5px #10b98122;
}
.neon-btn-2:hover {
  color: #fff;
  text-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #10b981;
  box-shadow: 0 0 10px #10b98155, 0 0 30px #10b98133, 0 0 60px #10b98122, inset 0 0 10px #10b98133;
}`,
    htmlCode: `<button class="neon-btn-2">Neon</button>`,
    isNew: true,
  },
  {
    id: 'glass-btn',
    name: 'Glass Button',
    category: 'buttons',
    tags: ['glass', 'frosted', 'blur', 'modern'],
    difficulty: 'intermediate',
    description: 'Frosted glass button with backdrop blur and translucency',
    cssCode: `.glass-btn {
  padding: 12px 32px;
  background: rgba(16,185,129,0.15);
  color: #10b981;
  border: 1px solid rgba(16,185,129,0.3);
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.glass-btn:hover {
  background: rgba(16,185,129,0.25);
  border-color: rgba(16,185,129,0.5);
  box-shadow: 0 8px 32px rgba(16,185,129,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="glass-btn">Glass</button>`,
    isNew: true,
  },
  {
    id: 'gradient-border-btn',
    name: 'Gradient Border Button',
    category: 'buttons',
    tags: ['gradient', 'border', 'animated', 'colorful'],
    difficulty: 'intermediate',
    description: 'Button with an animated gradient border',
    cssCode: `.gradient-border-btn {
  padding: 2px;
  border-radius: 10px;
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 300%;
  animation: grad-border-move 4s ease infinite;
  cursor: pointer;
  border: none;
  display: inline-block;
}
.gradient-border-btn-inner {
  padding: 10px 30px;
  background: #0f0f1a;
  border-radius: 8px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 14px;
  display: block;
}
@keyframes grad-border-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<span class="gradient-border-btn"><span class="gradient-border-btn-inner">Gradient</span></span>`,
    isNew: true,
  },
  {
    id: 'text-slide-btn',
    name: 'Text Slide Button',
    category: 'buttons',
    tags: ['text', 'slide', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button text slides up and is replaced by new text on hover',
    cssCode: `.text-slide-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 42px;
  display: inline-flex;
  align-items: center;
}
.text-slide-btn .text-default,
.text-slide-btn .text-hover {
  display: block;
  transition: transform 0.3s ease;
}
.text-slide-btn .text-hover {
  position: absolute;
  transform: translateY(100%);
}
.text-slide-btn:hover .text-default {
  transform: translateY(-100%);
}
.text-slide-btn:hover .text-hover {
  transform: translateY(0);
}`,
    htmlCode: `<button class="text-slide-btn"><span class="text-default">Submit</span><span class="text-hover">Send →</span></button>`,
    isNew: true,
  },
  {
    id: 'split-color-btn',
    name: 'Split Color Button',
    category: 'buttons',
    tags: ['split', 'color', 'hover', 'two-tone'],
    difficulty: 'intermediate',
    description: 'Button split into two colors with a shifting divide on hover',
    cssCode: `.split-color-btn {
  padding: 12px 32px;
  background: linear-gradient(to right, #10b981 50%, #3b82f6 50%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-position 0.4s ease;
}
.split-color-btn:hover {
  background-position: 100% 0%;
}`,
    htmlCode: `<button class="split-color-btn">Split</button>`,
    isNew: true,
  },
  {
    id: 'liquid-fill-btn',
    name: 'Liquid Fill Button',
    category: 'buttons',
    tags: ['liquid', 'fill', 'hover', 'wave'],
    difficulty: 'advanced',
    description: 'Button with a wavy liquid fill effect on hover',
    cssCode: `.liquid-fill-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.liquid-fill-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  height: 0;
  background: #10b981;
  border-radius: 40% 30% 0 0;
  transition: height 0.5s ease;
  z-index: -1;
}
.liquid-fill-btn:hover::before {
  height: 120%;
}
.liquid-fill-btn:hover {
  color: #000;
}`,
    htmlCode: `<button class="liquid-fill-btn">Liquid Fill</button>`,
    isNew: true,
  },
  {
    id: 'morph-btn',
    name: 'Morph Button',
    category: 'buttons',
    tags: ['morph', 'shape', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button that morphs its shape from rounded to square on hover',
    cssCode: `.morph-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: border-radius 0.4s ease, transform 0.3s ease;
}
.morph-btn:hover {
  border-radius: 4px;
  transform: scale(1.05);
}
.morph-btn:active {
  transform: scale(0.95);
}`,
    htmlCode: `<button class="morph-btn">Morph</button>`,
    isNew: true,
  },
  {
    id: 'expand-btn',
    name: 'Expand Button',
    category: 'buttons',
    tags: ['expand', 'hover', 'animated', 'width'],
    difficulty: 'beginner',
    description: 'Button that expands horizontally on hover',
    cssCode: `.expand-btn {
  padding: 12px 24px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: padding 0.3s ease, letter-spacing 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}
.expand-btn:hover {
  padding: 12px 40px;
  letter-spacing: 2px;
}`,
    htmlCode: `<button class="expand-btn">Expand</button>`,
    isNew: true,
  },
  {
    id: 'shrink-btn',
    name: 'Shrink Button',
    category: 'buttons',
    tags: ['shrink', 'hover', 'animated', 'compact'],
    difficulty: 'beginner',
    description: 'Button that shrinks slightly on hover for a press effect',
    cssCode: `.shrink-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.shrink-btn:hover {
  transform: scale(0.9);
}
.shrink-btn:active {
  transform: scale(0.85);
}`,
    htmlCode: `<button class="shrink-btn">Shrink</button>`,
    isNew: true,
  },
  {
    id: 'swing-btn',
    name: 'Swing Button',
    category: 'buttons',
    tags: ['swing', 'animated', 'hover', 'pendulum'],
    difficulty: 'intermediate',
    description: 'Button that swings like a pendulum on hover',
    cssCode: `.swing-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transform-origin: top center;
}
.swing-btn:hover {
  animation: swing-anim 0.8s ease;
}
@keyframes swing-anim {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<button class="swing-btn">Swing</button>`,
    isNew: true,
  },
  {
    id: 'jelly-btn',
    name: 'Jelly Button',
    category: 'buttons',
    tags: ['jelly', 'squish', 'animated', 'hover'],
    difficulty: 'intermediate',
    description: 'Button with a jelly-like squish animation on hover',
    cssCode: `.jelly-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}
.jelly-btn:hover {
  animation: jelly-anim 0.5s ease;
}
@keyframes jelly-anim {
  0% { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
  100% { transform: scale(1, 1); }
}`,
    htmlCode: `<button class="jelly-btn">Jelly</button>`,
    isNew: true,
  },
  {
    id: 'elastic-btn',
    name: 'Elastic Button',
    category: 'buttons',
    tags: ['elastic', 'spring', 'animated', 'hover'],
    difficulty: 'intermediate',
    description: 'Button with an elastic spring overshoot animation on hover',
    cssCode: `.elastic-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.elastic-btn:hover {
  transform: scale(1.15);
}
.elastic-btn:active {
  transform: scale(0.9);
}`,
    htmlCode: `<button class="elastic-btn">Elastic</button>`,
    isNew: true,
  },
  {
    id: 'flip-btn',
    name: 'Flip Button',
    category: 'buttons',
    tags: ['flip', 'animated', 'hover', 'rotate'],
    difficulty: 'intermediate',
    description: 'Button that flips horizontally on hover',
    cssCode: `.flip-btn-wrap {
  perspective: 400px;
  display: inline-block;
}
.flip-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}
.flip-btn-wrap:hover .flip-btn {
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="flip-btn-wrap"><button class="flip-btn">Flip</button></div>`,
    isNew: true,
  },
  {
    id: 'fold-btn',
    name: 'Fold Button',
    category: 'buttons',
    tags: ['fold', '3d', 'hover', 'origami'],
    difficulty: 'advanced',
    description: 'Button that appears to fold like paper on hover',
    cssCode: `.fold-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  perspective: 400px;
  transition: transform 0.4s ease;
}
.fold-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: #059669;
  transform-origin: bottom;
  transform: rotateX(0deg);
  transition: transform 0.4s ease;
  z-index: -1;
  border-radius: 0 0 4px 4px;
}
.fold-btn:hover {
  transform: rotateX(20deg);
}
.fold-btn:hover::before {
  transform: rotateX(60deg);
}`,
    htmlCode: `<button class="fold-btn">Fold</button>`,
    isNew: true,
  },
  {
    id: 'dissolve-btn',
    name: 'Dissolve Button',
    category: 'buttons',
    tags: ['dissolve', 'hover', 'animated', 'fade'],
    difficulty: 'intermediate',
    description: 'Button that dissolves into a blur on hover',
    cssCode: `.dissolve-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: filter 0.4s ease, opacity 0.4s ease;
}
.dissolve-btn:hover {
  filter: blur(4px);
  opacity: 0.6;
}`,
    htmlCode: `<button class="dissolve-btn">Dissolve</button>`,
    isNew: true,
  },
  {
    id: 'scatter-btn',
    name: 'Scatter Button',
    category: 'buttons',
    tags: ['scatter', 'hover', 'animated', 'particles'],
    difficulty: 'advanced',
    description: 'Button text that scatters on hover and reassembles',
    cssCode: `.scatter-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.scatter-btn span {
  display: inline-block;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.scatter-btn:hover span:nth-child(1) { transform: translate(-8px, -10px) rotate(-10deg); }
.scatter-btn:hover span:nth-child(2) { transform: translate(4px, -12px) rotate(5deg); }
.scatter-btn:hover span:nth-child(3) { transform: translate(-3px, 8px) rotate(-5deg); }
.scatter-btn:hover span:nth-child(4) { transform: translate(10px, -4px) rotate(8deg); }
.scatter-btn:hover span:nth-child(5) { transform: translate(-6px, 6px) rotate(-8deg); }
.scatter-btn:hover span:nth-child(6) { transform: translate(8px, 10px) rotate(3deg); }`,
    htmlCode: `<button class="scatter-btn"><span>S</span><span>c</span><span>a</span><span>t</span><span>t</span><span>r</span></button>`,
    isNew: true,
  },
  {
    id: 'orbit-btn',
    name: 'Orbit Button',
    category: 'buttons',
    tags: ['orbit', 'animated', 'space', 'continuous'],
    difficulty: 'advanced',
    description: 'Button with a small dot orbiting around it continuously',
    cssCode: `.orbit-btn-wrap {
  position: relative;
  display: inline-block;
}
.orbit-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.orbit-btn-wrap::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: orbit-around 2s linear infinite;
  z-index: 0;
  box-shadow: 0 0 6px #3b82f6;
}
@keyframes orbit-around {
  0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
}`,
    htmlCode: `<div class="orbit-btn-wrap"><button class="orbit-btn">Orbit</button></div>`,
    isNew: true,
  },
  {
    id: 'arrow-slide-btn',
    name: 'Arrow Slide Button',
    category: 'buttons',
    tags: ['arrow', 'slide', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Button with an arrow that slides from left to right on hover',
    cssCode: `.arrow-slide-btn {
  padding: 12px 32px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease, background 0.3s ease;
}
.arrow-slide-btn .arrow-left {
  position: absolute;
  left: -20px;
  transition: left 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}
.arrow-slide-btn .arrow-right {
  position: absolute;
  right: 16px;
  transition: right 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}
.arrow-slide-btn:hover .arrow-left {
  left: 12px;
  opacity: 1;
}
.arrow-slide-btn:hover .arrow-right {
  right: 8px;
  opacity: 1;
}
.arrow-slide-btn:hover {
  background: #10b981;
  color: #000;
  padding-left: 36px;
}`,
    htmlCode: `<button class="arrow-slide-btn"><span class="arrow-left">→</span>Go<span class="arrow-right">→</span></button>`,
    isNew: true,
  },
  {
    id: 'checkmark-btn',
    name: 'Checkmark Button',
    category: 'buttons',
    tags: ['checkmark', 'icon', 'hover', 'confirmation'],
    difficulty: 'intermediate',
    description: 'Button that shows a checkmark animation on hover',
    cssCode: `.checkmark-btn {
  padding: 12px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}
.checkmark-btn .check {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid #4a4a5e;
  border-radius: 4px;
  position: relative;
  transition: border-color 0.3s ease;
}
.checkmark-btn .check::after {
  content: '✓';
  position: absolute;
  top: -2px;
  left: 2px;
  font-size: 14px;
  color: #10b981;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.checkmark-btn:hover {
  border-color: #10b981;
  color: #10b981;
}
.checkmark-btn:hover .check {
  border-color: #10b981;
}
.checkmark-btn:hover .check::after {
  opacity: 1;
  transform: scale(1);
}`,
    htmlCode: `<button class="checkmark-btn"><span class="check"></span>Confirm</button>`,
    isNew: true,
  },
  {
    id: 'send-btn',
    name: 'Send Button',
    category: 'buttons',
    tags: ['send', 'icon', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Send button with an animated paper plane icon on hover',
    cssCode: `.send-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}
.send-btn .plane {
  display: inline-block;
  transition: transform 0.3s ease;
}
.send-btn:hover .plane {
  transform: translateX(6px) translateY(-4px);
}
.send-btn:active .plane {
  transform: translateX(12px) translateY(-8px);
  opacity: 0.5;
}`,
    htmlCode: `<button class="send-btn"><span class="plane">✈</span>Send</button>`,
    isNew: true,
  },
  {
    id: 'download-btn',
    name: 'Download Button',
    category: 'buttons',
    tags: ['download', 'icon', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Download button with an animated arrow icon on hover',
    cssCode: `.download-btn {
  padding: 12px 32px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease;
}
.download-btn .dl-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}
.download-btn:hover .dl-icon {
  animation: dl-bounce 0.6s ease;
}
@keyframes dl-bounce {
  0% { transform: translateY(0); }
  30% { transform: translateY(4px); }
  50% { transform: translateY(-2px); }
  70% { transform: translateY(1px); }
  100% { transform: translateY(0); }
}
.download-btn:hover {
  background: #2563eb;
}`,
    htmlCode: `<button class="download-btn"><span class="dl-icon">⬇</span>Download</button>`,
    isNew: true,
  },
  {
    id: 'play-btn',
    name: 'Play Button',
    category: 'buttons',
    tags: ['play', 'icon', 'hover', 'media'],
    difficulty: 'intermediate',
    description: 'Play button that transforms shape on hover',
    cssCode: `.play-btn {
  width: 48px;
  height: 48px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-radius 0.3s ease, transform 0.3s ease;
}
.play-btn::before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 0 8px 14px;
  border-color: transparent transparent transparent #000;
  margin-left: 3px;
  transition: border-width 0.3s ease;
}
.play-btn:hover {
  border-radius: 8px;
  transform: scale(1.1);
}`,
    htmlCode: `<button class="play-btn"></button>`,
    isNew: true,
  },
  {
    id: 'refresh-btn',
    name: 'Refresh Button',
    category: 'buttons',
    tags: ['refresh', 'icon', 'hover', 'spin'],
    difficulty: 'beginner',
    description: 'Refresh button with a spinning icon on hover',
    cssCode: `.refresh-btn {
  padding: 12px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: border-color 0.3s ease, color 0.3s ease;
}
.refresh-btn .refresh-icon {
  display: inline-block;
  transition: transform 0.6s ease;
}
.refresh-btn:hover .refresh-icon {
  transform: rotate(360deg);
}
.refresh-btn:hover {
  border-color: #10b981;
  color: #10b981;
}`,
    htmlCode: `<button class="refresh-btn"><span class="refresh-icon">↻</span>Refresh</button>`,
    isNew: true,
  },
  {
    id: 'search-btn',
    name: 'Search Button',
    category: 'buttons',
    tags: ['search', 'icon', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Search button with magnifying glass animation on hover',
    cssCode: `.search-btn {
  padding: 12px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease;
}
.search-btn .mag {
  display: inline-block;
  transition: transform 0.3s ease;
}
.search-btn:hover .mag {
  transform: scale(1.2) rotate(-10deg);
}
.search-btn:hover {
  background: #059669;
}`,
    htmlCode: `<button class="search-btn"><span class="mag">🔍</span>Search</button>`,
    isNew: true,
  },
  {
    id: 'menu-btn',
    name: 'Menu Button',
    category: 'buttons',
    tags: ['menu', 'hamburger', 'icon', 'hover'],
    difficulty: 'intermediate',
    description: 'Hamburger menu button that transforms on hover',
    cssCode: `.menu-btn {
  width: 40px;
  height: 40px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px;
}
.menu-btn span {
  display: block;
  width: 100%;
  height: 2px;
  background: #10b981;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.menu-btn:hover span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.menu-btn:hover span:nth-child(2) {
  opacity: 0;
}
.menu-btn:hover span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}`,
    htmlCode: `<button class="menu-btn"><span></span><span></span><span></span></button>`,
    isNew: true,
  },
  {
    id: 'close-btn',
    name: 'Close Button',
    category: 'buttons',
    tags: ['close', 'icon', 'hover', 'animated'],
    difficulty: 'beginner',
    description: 'Close button with a rotating X animation on hover',
    cssCode: `.close-btn {
  width: 40px;
  height: 40px;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;
}
.close-btn:hover {
  transform: rotate(90deg);
  background: #dc2626;
}
.close-btn:active {
  transform: rotate(90deg) scale(0.9);
}`,
    htmlCode: `<button class="close-btn">✕</button>`,
    isNew: true,
  },
  {
    id: 'heart-btn',
    name: 'Heart Button',
    category: 'buttons',
    tags: ['heart', 'icon', 'hover', 'animated', 'like'],
    difficulty: 'intermediate',
    description: 'Heart button that beats with a pulse animation on hover',
    cssCode: `.heart-btn {
  padding: 10px 24px;
  background: transparent;
  color: #64748b;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}
.heart-btn:hover {
  color: #ef4444;
  border-color: #ef4444;
}
.heart-btn:hover .heart {
  animation: heartbeat 0.6s ease infinite;
}
.heart-btn:hover {
  background: rgba(239,68,68,0.1);
}
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.3); }
  50% { transform: scale(1); }
  75% { transform: scale(1.15); }
}`,
    htmlCode: `<button class="heart-btn"><span class="heart">♥</span>Like</button>`,
    isNew: true,
  },
  {
    id: 'star-btn',
    name: 'Star Button',
    category: 'buttons',
    tags: ['star', 'icon', 'hover', 'animated', 'favorite'],
    difficulty: 'intermediate',
    description: 'Star button that rotates and glows on hover',
    cssCode: `.star-btn {
  padding: 10px 24px;
  background: transparent;
  color: #64748b;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}
.star-btn:hover {
  color: #f59e0b;
  border-color: #f59e0b;
  background: rgba(245,158,11,0.1);
}
.star-btn:hover .star {
  animation: star-spin 0.5s ease;
}
@keyframes star-spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.3); }
  100% { transform: rotate(360deg) scale(1); }
}`,
    htmlCode: `<button class="star-btn"><span class="star">★</span>Favorite</button>`,
    isNew: true,
  },
];
