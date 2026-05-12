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

export const effectsShadowsInputsToggles: CSSEffect[] = [
  // ==========================================
  // SHADOW EFFECTS (30)
  // ==========================================
  {
    id: 'neon-shadow-2',
    name: 'Neon Shadow',
    category: 'shadows',
    tags: ['neon', 'glow', 'shadow', 'dark'],
    difficulty: 'beginner',
    description: 'Element with a vibrant neon shadow glow effect',
    cssCode: `.neon-shadow {
  padding: 20px 32px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 0 5px #10b981, 0 0 15px #10b98166, 0 0 30px #10b98133, 0 0 50px #10b9811a;
}`,
    htmlCode: `<div class="neon-shadow">Neon Shadow</div>`,
    isNew: true,
  },
  {
    id: 'glow-shadow',
    name: 'Glow Shadow',
    category: 'shadows',
    tags: ['glow', 'shadow', 'soft', 'light'],
    difficulty: 'beginner',
    description: 'Soft ambient glow shadow around an element',
    cssCode: `.glow-shadow {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 0 20px rgba(16,185,129,0.3), 0 0 60px rgba(16,185,129,0.1);
}`,
    htmlCode: `<div class="glow-shadow">Glow Shadow</div>`,
    isNew: true,
  },
  {
    id: 'inner-glow-2',
    name: 'Inner Glow',
    category: 'shadows',
    tags: ['inner', 'glow', 'shadow', 'inset'],
    difficulty: 'intermediate',
    description: 'Element with an inset glow shadow effect from within',
    cssCode: `.inner-glow {
  padding: 20px 32px;
  background: #0a0a1a;
  color: #e2e8f0;
  border: 1px solid #1a1a2e;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: inset 0 0 20px rgba(16,185,129,0.3), inset 0 0 40px rgba(16,185,129,0.1);
}`,
    htmlCode: `<div class="inner-glow">Inner Glow</div>`,
    isNew: true,
  },
  {
    id: 'long-shadow',
    name: 'Long Shadow',
    category: 'shadows',
    tags: ['long', 'shadow', 'flat', 'directional'],
    difficulty: 'intermediate',
    description: 'Element with an extended directional long shadow',
    cssCode: `.long-shadow {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-shadow: 1px 1px 0 #059669, 2px 2px 0 #059669, 3px 3px 0 #059669, 4px 4px 0 #059669, 5px 5px 0 #059669, 6px 6px 0 #047857, 7px 7px 0 #047857, 8px 8px 6px rgba(0,0,0,0.3);
  box-shadow: 1px 1px 0 #059669, 2px 2px 0 #059669, 3px 3px 0 #059669, 4px 4px 0 #059669, 5px 5px 0 #059669, 6px 6px 0 #047857, 7px 7px 0 #047857, 8px 8px 6px rgba(0,0,0,0.3);
}`,
    htmlCode: `<div class="long-shadow">Long Shadow</div>`,
    isNew: true,
  },
  {
    id: 'multi-shadow',
    name: 'Multi Shadow',
    category: 'shadows',
    tags: ['multi', 'shadow', 'layered', 'colorful'],
    difficulty: 'intermediate',
    description: 'Element with multiple layered colored shadows',
    cssCode: `.multi-shadow {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 5px 5px 0 #10b981, 10px 10px 0 #3b82f6, 15px 15px 0 #8b5cf6;
}`,
    htmlCode: `<div class="multi-shadow">Multi Shadow</div>`,
    isNew: true,
  },
  {
    id: 'colored-shadow',
    name: 'Colored Shadow',
    category: 'shadows',
    tags: ['colored', 'shadow', 'vibrant', 'accent'],
    difficulty: 'beginner',
    description: 'Element with a vibrant colored drop shadow',
    cssCode: `.colored-shadow {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(16,185,129,0.5);
}`,
    htmlCode: `<div class="colored-shadow">Colored Shadow</div>`,
    isNew: true,
  },
  {
    id: 'animated-shadow',
    name: 'Animated Shadow',
    category: 'shadows',
    tags: ['animated', 'shadow', 'moving', 'dynamic'],
    difficulty: 'intermediate',
    description: 'Element with a shadow that continuously shifts position',
    cssCode: `.animated-shadow {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  animation: shadow-move 2s ease-in-out infinite alternate;
}
@keyframes shadow-move {
  0% { box-shadow: -5px -5px 15px rgba(16,185,129,0.3); }
  100% { box-shadow: 5px 5px 15px rgba(16,185,129,0.3); }
}`,
    htmlCode: `<div class="animated-shadow">Animated Shadow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-pulse',
    name: 'Shadow Pulse',
    category: 'shadows',
    tags: ['pulse', 'shadow', 'animated', 'breathing'],
    difficulty: 'beginner',
    description: 'Element with a pulsating shadow that breathes',
    cssCode: `.shadow-pulse {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: shadow-pulse-anim 2s ease-in-out infinite;
}
@keyframes shadow-pulse-anim {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
  50% { box-shadow: 0 0 0 20px rgba(16,185,129,0); }
}`,
    htmlCode: `<div class="shadow-pulse">Shadow Pulse</div>`,
    isNew: true,
  },
  {
    id: 'shadow-spread',
    name: 'Shadow Spread',
    category: 'shadows',
    tags: ['spread', 'shadow', 'animated', 'expanding'],
    difficulty: 'intermediate',
    description: 'Element with a shadow that spreads outward on hover',
    cssCode: `.shadow-spread {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  transition: box-shadow 0.4s ease;
}
.shadow-spread:hover {
  box-shadow: 0 0 10px rgba(16,185,129,0.2), 0 0 30px rgba(16,185,129,0.15), 0 0 60px rgba(16,185,129,0.1), 0 0 100px rgba(16,185,129,0.05);
}`,
    htmlCode: `<div class="shadow-spread">Shadow Spread</div>`,
    isNew: true,
  },
  {
    id: 'shadow-rotate',
    name: 'Shadow Rotate',
    category: 'shadows',
    tags: ['rotate', 'shadow', 'animated', 'orbit'],
    difficulty: 'advanced',
    description: 'Element with a shadow that rotates around it continuously',
    cssCode: `.shadow-rotate-wrap {
  position: relative;
  display: inline-block;
}
.shadow-rotate {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.shadow-rotate-wrap::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(16,185,129,0.4);
  border-radius: 50%;
  filter: blur(10px);
  top: 50%;
  left: 50%;
  animation: rotate-shadow 3s linear infinite;
  z-index: 0;
}
@keyframes rotate-shadow {
  0% { transform: rotate(0deg) translateX(60px); }
  100% { transform: rotate(360deg) translateX(60px); }
}`,
    htmlCode: `<div class="shadow-rotate-wrap"><div class="shadow-rotate">Shadow Rotate</div></div>`,
    isNew: true,
  },
  {
    id: 'shadow-wave',
    name: 'Shadow Wave',
    category: 'shadows',
    tags: ['wave', 'shadow', 'animated', 'ripple'],
    difficulty: 'intermediate',
    description: 'Element with a wave-like shadow animation',
    cssCode: `.shadow-wave {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: wave-shadow 1.5s ease-in-out infinite;
}
@keyframes wave-shadow {
  0% { box-shadow: 5px 5px 10px rgba(0,0,0,0.2), -2px -2px 10px rgba(16,185,129,0.3); }
  25% { box-shadow: -5px 3px 10px rgba(0,0,0,0.2), 2px -2px 10px rgba(16,185,129,0.3); }
  50% { box-shadow: -5px -5px 10px rgba(0,0,0,0.2), 2px 2px 10px rgba(16,185,129,0.3); }
  75% { box-shadow: 5px -3px 10px rgba(0,0,0,0.2), -2px 2px 10px rgba(16,185,129,0.3); }
  100% { box-shadow: 5px 5px 10px rgba(0,0,0,0.2), -2px -2px 10px rgba(16,185,129,0.3); }
}`,
    htmlCode: `<div class="shadow-wave">Shadow Wave</div>`,
    isNew: true,
  },
  {
    id: 'shadow-bounce',
    name: 'Shadow Bounce',
    category: 'shadows',
    tags: ['bounce', 'shadow', 'animated', 'spring'],
    difficulty: 'intermediate',
    description: 'Element that bounces with its shadow stretching accordingly',
    cssCode: `.shadow-bounce {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: bounce-up 1s ease-in-out infinite;
}
@keyframes bounce-up {
  0%, 100% { transform: translateY(0); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
  50% { transform: translateY(-15px); box-shadow: 0 25px 20px rgba(0,0,0,0.15); }
}`,
    htmlCode: `<div class="shadow-bounce">Shadow Bounce</div>`,
    isNew: true,
  },
  {
    id: 'shadow-lift-2',
    name: 'Shadow Lift',
    category: 'shadows',
    tags: ['lift', 'shadow', 'hover', 'elevation'],
    difficulty: 'beginner',
    description: 'Element that lifts off the surface with deepening shadow on hover',
    cssCode: `.shadow-lift {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.shadow-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(16,185,129,0.2), 0 8px 16px rgba(0,0,0,0.2);
}`,
    htmlCode: `<div class="shadow-lift">Shadow Lift</div>`,
    isNew: true,
  },
  {
    id: 'shadow-press',
    name: 'Shadow Press',
    category: 'shadows',
    tags: ['press', 'shadow', 'hover', 'depth'],
    difficulty: 'beginner',
    description: 'Element that presses down with shadow shrinking on hover',
    cssCode: `.shadow-press {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 0 #059669, 0 8px 12px rgba(0,0,0,0.3);
}
.shadow-press:hover {
  transform: translateY(3px);
  box-shadow: 0 3px 0 #059669, 0 4px 6px rgba(0,0,0,0.3);
}`,
    htmlCode: `<div class="shadow-press">Shadow Press</div>`,
    isNew: true,
  },
  {
    id: 'shadow-float',
    name: 'Shadow Float',
    category: 'shadows',
    tags: ['float', 'shadow', 'animated', 'levitation'],
    difficulty: 'intermediate',
    description: 'Element with a gentle floating shadow animation',
    cssCode: `.shadow-float {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  animation: float-shadow 3s ease-in-out infinite;
}
@keyframes float-shadow {
  0%, 100% { transform: translateY(0); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
  50% { transform: translateY(-8px); box-shadow: 0 20px 30px rgba(16,185,129,0.15), 0 10px 20px rgba(0,0,0,0.2); }
}`,
    htmlCode: `<div class="shadow-float">Shadow Float</div>`,
    isNew: true,
  },
  {
    id: 'shadow-depth',
    name: 'Shadow Depth',
    category: 'shadows',
    tags: ['depth', 'shadow', 'layered', '3d'],
    difficulty: 'intermediate',
    description: 'Element with multiple layered shadows creating depth illusion',
    cssCode: `.shadow-depth {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.1);
}`,
    htmlCode: `<div class="shadow-depth">Shadow Depth</div>`,
    isNew: true,
  },
  {
    id: 'shadow-3d',
    name: 'Shadow 3D',
    category: 'shadows',
    tags: ['3d', 'shadow', 'perspective', 'solid'],
    difficulty: 'intermediate',
    description: 'Element with a solid 3D block shadow effect',
    cssCode: `.shadow-3d {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  box-shadow: 4px 4px 0 #059669, 8px 8px 0 #047857;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.shadow-3d:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #059669, 4px 4px 0 #047857;
}`,
    htmlCode: `<div class="shadow-3d">Shadow 3D</div>`,
    isNew: true,
  },
  {
    id: 'shadow-pop',
    name: 'Shadow Pop',
    category: 'shadows',
    tags: ['pop', 'shadow', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Element with a shadow that pops outward on hover',
    cssCode: `.shadow-pop {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.68,-0.55,0.265,1.55), box-shadow 0.3s ease;
}
.shadow-pop:hover {
  transform: scale(1.05);
  box-shadow: 0 0 0 8px rgba(16,185,129,0.15), 0 10px 30px rgba(16,185,129,0.2);
}`,
    htmlCode: `<div class="shadow-pop">Shadow Pop</div>`,
    isNew: true,
  },
  {
    id: 'shadow-swing',
    name: 'Shadow Swing',
    category: 'shadows',
    tags: ['swing', 'shadow', 'animated', 'pendulum'],
    difficulty: 'advanced',
    description: 'Element with a shadow that swings like a pendulum',
    cssCode: `.shadow-swing {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transform-origin: top center;
  animation: swing-shadow 2s ease-in-out infinite alternate;
}
@keyframes swing-shadow {
  0% { transform: rotate(-3deg); box-shadow: 8px 5px 15px rgba(0,0,0,0.3); }
  100% { transform: rotate(3deg); box-shadow: -8px 5px 15px rgba(0,0,0,0.3); }
}`,
    htmlCode: `<div class="shadow-swing">Shadow Swing</div>`,
    isNew: true,
  },
  {
    id: 'shadow-shake',
    name: 'Shadow Shake',
    category: 'shadows',
    tags: ['shake', 'shadow', 'animated', 'vibrate'],
    difficulty: 'intermediate',
    description: 'Element with a shaking shadow animation',
    cssCode: `.shadow-shake {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  animation: shake-shadow 0.5s ease-in-out infinite;
}
@keyframes shake-shadow {
  0%, 100% { transform: translateX(0); box-shadow: 2px 2px 8px rgba(16,185,129,0.2); }
  25% { transform: translateX(-2px); box-shadow: -2px 2px 8px rgba(16,185,129,0.2); }
  50% { transform: translateX(2px); box-shadow: 4px 2px 8px rgba(16,185,129,0.2); }
  75% { transform: translateX(-1px); box-shadow: 0px 2px 8px rgba(16,185,129,0.2); }
}`,
    htmlCode: `<div class="shadow-shake">Shadow Shake</div>`,
    isNew: true,
  },
  {
    id: 'shadow-blur',
    name: 'Shadow Blur',
    category: 'shadows',
    tags: ['blur', 'shadow', 'soft', 'diffused'],
    difficulty: 'beginner',
    description: 'Element with a large soft diffused blur shadow',
    cssCode: `.shadow-blur {
  padding: 20px 32px;
  background: #fff;
  color: #1a1a2e;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 20px 60px -10px rgba(16,185,129,0.4), 0 10px 30px -5px rgba(0,0,0,0.1);
}`,
    htmlCode: `<div class="shadow-blur">Shadow Blur</div>`,
    isNew: true,
  },
  {
    id: 'shadow-gradient',
    name: 'Shadow Gradient',
    category: 'shadows',
    tags: ['gradient', 'shadow', 'colorful', 'smooth'],
    difficulty: 'advanced',
    description: 'Element with a gradient-colored shadow effect using pseudo-element',
    cssCode: `.shadow-gradient {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.shadow-gradient::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 10px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  filter: blur(15px);
  opacity: 0.6;
  z-index: -1;
}`,
    htmlCode: `<div class="shadow-gradient">Shadow Gradient</div>`,
    isNew: true,
  },
  {
    id: 'shadow-rainbow',
    name: 'Shadow Rainbow',
    category: 'shadows',
    tags: ['rainbow', 'shadow', 'colorful', 'animated'],
    difficulty: 'advanced',
    description: 'Element with an animated rainbow cycling shadow',
    cssCode: `.shadow-rainbow {
  padding: 20px 32px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 2px solid #2a2a3e;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.shadow-rainbow::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 8px;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ef4444);
  background-size: 300% 100%;
  filter: blur(12px);
  opacity: 0.5;
  z-index: -1;
  animation: rainbow-shift 3s linear infinite;
}
@keyframes rainbow-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<div class="shadow-rainbow">Shadow Rainbow</div>`,
    isNew: true,
  },
  {
    id: 'shadow-fire',
    name: 'Shadow Fire',
    category: 'shadows',
    tags: ['fire', 'shadow', 'animated', 'warm'],
    difficulty: 'advanced',
    description: 'Element with a flickering fire-like shadow effect',
    cssCode: `.shadow-fire {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #f59e0b;
  border: 2px solid #f59e0b;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  animation: fire-shadow 0.15s ease-in-out infinite alternate;
}
@keyframes fire-shadow {
  0% { box-shadow: 0 0 10px #f59e0b44, 0 0 20px #ef444444, 0 -3px 15px #f59e0b33; }
  33% { box-shadow: 0 0 15px #f59e0b55, 0 0 30px #ef444433, 0 -5px 20px #f59e0b44; }
  66% { box-shadow: 0 0 12px #f59e0b44, 0 0 25px #ef444444, 0 -4px 18px #f59e0b33; }
  100% { box-shadow: 0 0 18px #f59e0b55, 0 0 35px #ef444433, 0 -6px 22px #f59e0b44; }
}`,
    htmlCode: `<div class="shadow-fire">Shadow Fire</div>`,
    isNew: true,
  },
  {
    id: 'shadow-ice',
    name: 'Shadow Ice',
    category: 'shadows',
    tags: ['ice', 'shadow', 'cold', 'frost'],
    difficulty: 'intermediate',
    description: 'Element with a cool icy blue shadow effect',
    cssCode: `.shadow-ice {
  padding: 20px 32px;
  background: #0f172a;
  color: #93c5fd;
  border: 1px solid #93c5fd55;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 0 10px rgba(147,197,253,0.2), 0 0 25px rgba(147,197,253,0.1), 0 0 50px rgba(147,197,253,0.05), inset 0 0 15px rgba(147,197,253,0.05);
  text-shadow: 0 0 8px rgba(147,197,253,0.3);
}`,
    htmlCode: `<div class="shadow-ice">Shadow Ice</div>`,
    isNew: true,
  },
  {
    id: 'shadow-electric',
    name: 'Shadow Electric',
    category: 'shadows',
    tags: ['electric', 'shadow', 'animated', 'energy'],
    difficulty: 'advanced',
    description: 'Element with an electric sparking shadow effect',
    cssCode: `.shadow-electric {
  padding: 20px 32px;
  background: #0f0f1a;
  color: #a78bfa;
  border: 2px solid #a78bfa;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: electric-shadow 0.8s ease-in-out infinite alternate;
}
@keyframes electric-shadow {
  0% { box-shadow: 0 0 5px #a78bfa, 0 0 10px #a78bfa55, 2px 0 15px #a78bfa33; text-shadow: 0 0 5px #a78bfa; }
  50% { box-shadow: 0 0 15px #a78bfa, 0 0 30px #a78bfa55, -2px 0 20px #a78bfa33; text-shadow: 0 0 10px #a78bfa; }
  100% { box-shadow: 0 0 8px #a78bfa, 0 0 20px #a78bfa55, 1px 0 18px #a78bfa33; text-shadow: 0 0 8px #a78bfa; }
}`,
    htmlCode: `<div class="shadow-electric">Shadow Electric</div>`,
    isNew: true,
  },
  {
    id: 'shadow-cosmic',
    name: 'Shadow Cosmic',
    category: 'shadows',
    tags: ['cosmic', 'shadow', 'space', 'galaxy'],
    difficulty: 'intermediate',
    description: 'Element with a deep cosmic space shadow effect',
    cssCode: `.shadow-cosmic {
  padding: 20px 32px;
  background: linear-gradient(135deg, #0f0f1a, #1a0a2e);
  color: #c4b5fd;
  border: 1px solid #6d28d944;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 0 20px rgba(109,40,217,0.3), 0 0 40px rgba(139,92,246,0.15), 0 0 80px rgba(167,139,250,0.05);
  text-shadow: 0 0 10px rgba(167,139,250,0.3);
}`,
    htmlCode: `<div class="shadow-cosmic">Shadow Cosmic</div>`,
    isNew: true,
  },
  {
    id: 'shadow-nature',
    name: 'Shadow Nature',
    category: 'shadows',
    tags: ['nature', 'shadow', 'organic', 'green'],
    difficulty: 'intermediate',
    description: 'Element with a soft organic nature-inspired shadow',
    cssCode: `.shadow-nature {
  padding: 20px 32px;
  background: #052e16;
  color: #86efac;
  border: 1px solid #22c55e44;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(34,197,94,0.2), 0 2px 8px rgba(34,197,94,0.1);
}`,
    htmlCode: `<div class="shadow-nature">Shadow Nature</div>`,
    isNew: true,
  },
  {
    id: 'shadow-material',
    name: 'Shadow Material',
    category: 'shadows',
    tags: ['material', 'shadow', 'elevation', 'design'],
    difficulty: 'beginner',
    description: 'Material Design inspired elevation shadow',
    cssCode: `.shadow-material {
  padding: 20px 32px;
  background: #1e293b;
  color: #e2e8f0;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
  transition: box-shadow 0.3s ease;
}
.shadow-material:hover {
  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
}`,
    htmlCode: `<div class="shadow-material">Shadow Material</div>`,
    isNew: true,
  },
  {
    id: 'shadow-neon-pulse',
    name: 'Shadow Neon Pulse',
    category: 'shadows',
    tags: ['neon', 'pulse', 'shadow', 'animated', 'glow'],
    difficulty: 'intermediate',
    description: 'Element with a pulsating neon shadow that glows rhythmically',
    cssCode: `.shadow-neon-pulse {
  padding: 20px 32px;
  background: #0a0a1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: neon-pulse-shadow 2s ease-in-out infinite;
}
@keyframes neon-pulse-shadow {
  0%, 100% { box-shadow: 0 0 5px #10b98133, 0 0 10px #10b9811a; text-shadow: 0 0 5px #10b98133; }
  50% { box-shadow: 0 0 10px #10b98166, 0 0 25px #10b98133, 0 0 50px #10b9811a; text-shadow: 0 0 10px #10b98166; }
}`,
    htmlCode: `<div class="shadow-neon-pulse">Shadow Neon Pulse</div>`,
    isNew: true,
  },

  // ==========================================
  // INPUT EFFECTS (30)
  // ==========================================
  {
    id: 'floating-label-input',
    name: 'Floating Label Input',
    category: 'inputs',
    tags: ['floating', 'label', 'input', 'animated'],
    difficulty: 'intermediate',
    description: 'Input with a label that floats up when focused or filled',
    cssCode: `.float-label-group {
  position: relative;
  margin: 20px 0;
}
.float-label-input {
  padding: 16px 12px 6px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.float-label-input:focus {
  border-color: #10b981;
}
.float-label {
  position: absolute;
  left: 12px;
  top: 12px;
  color: #64748b;
  font-size: 14px;
  pointer-events: none;
  transition: all 0.3s ease;
}
.float-label-input:focus + .float-label,
.float-label-input:not(:placeholder-shown) + .float-label {
  top: 2px;
  font-size: 10px;
  color: #10b981;
}`,
    htmlCode: `<div class="float-label-group"><input class="float-label-input" placeholder=" " /><label class="float-label">Username</label></div>`,
    isNew: true,
  },
  {
    id: 'underline-input',
    name: 'Underline Input',
    category: 'inputs',
    tags: ['underline', 'input', 'minimal', 'animated'],
    difficulty: 'beginner',
    description: 'Minimal input with an animated underline on focus',
    cssCode: `.underline-input {
  padding: 8px 4px;
  width: 240px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2a2a3e;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.underline-input:focus {
  border-bottom-color: #10b981;
}`,
    htmlCode: `<input class="underline-input" placeholder="Type here..." />`,
    isNew: true,
  },
  {
    id: 'border-draw-input',
    name: 'Border Draw Input',
    category: 'inputs',
    tags: ['border', 'draw', 'input', 'animated'],
    difficulty: 'advanced',
    description: 'Input whose border draws itself clockwise on focus',
    cssCode: `.border-draw-input {
  padding: 10px 14px;
  width: 240px;
  background: #0f0f1a;
  border: none;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  position: relative;
}
.border-draw-wrap {
  position: relative;
  display: inline-block;
}
.border-draw-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 2px solid #10b981;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  transition: clip-path 0.5s ease;
}
.border-draw-wrap:focus-within::before {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}`,
    htmlCode: `<div class="border-draw-wrap"><input class="border-draw-input" placeholder="Focus me..." /></div>`,
    isNew: true,
  },
  {
    id: 'shake-validation',
    name: 'Shake Validation',
    category: 'inputs',
    tags: ['shake', 'validation', 'error', 'input'],
    difficulty: 'intermediate',
    description: 'Input that shakes when validation fails',
    cssCode: `.shake-input {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.shake-input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  animation: shake-input-anim 0.4s ease;
}
@keyframes shake-input-anim {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`,
    htmlCode: `<input class="shake-input" type="email" placeholder="Enter email..." required />`,
    isNew: true,
  },
  {
    id: 'success-animation-input',
    name: 'Success Animation Input',
    category: 'inputs',
    tags: ['success', 'input', 'validation', 'animated'],
    difficulty: 'intermediate',
    description: 'Input that shows a success animation when valid',
    cssCode: `.success-input-wrap {
  position: relative;
  display: inline-block;
}
.success-input {
  padding: 10px 36px 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.success-input:valid:not(:placeholder-shown) {
  border-color: #10b981;
}
.success-input:valid:not(:placeholder-shown) + .success-check {
  opacity: 1;
  transform: scale(1);
}
.success-check {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  opacity: 0;
  color: #10b981;
  font-size: 18px;
  transition: all 0.3s ease;
}`,
    htmlCode: `<div class="success-input-wrap"><input class="success-input" type="email" placeholder="Enter email..." required /><span class="success-check">✓</span></div>`,
    isNew: true,
  },
  {
    id: 'error-animation-input',
    name: 'Error Animation Input',
    category: 'inputs',
    tags: ['error', 'input', 'validation', 'animated'],
    difficulty: 'intermediate',
    description: 'Input that shows an error animation when invalid',
    cssCode: `.error-input-wrap {
  position: relative;
  display: inline-block;
}
.error-input {
  padding: 10px 36px 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.error-input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  background: #1a0a0a;
}
.error-input:invalid:not(:placeholder-shown) + .error-icon {
  opacity: 1;
  transform: scale(1);
}
.error-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  opacity: 0;
  color: #ef4444;
  font-size: 18px;
  transition: all 0.3s ease;
}`,
    htmlCode: `<div class="error-input-wrap"><input class="error-input" type="email" placeholder="Enter email..." required /><span class="error-icon">✕</span></div>`,
    isNew: true,
  },
  {
    id: 'input-glow',
    name: 'Input Glow',
    category: 'inputs',
    tags: ['glow', 'input', 'focus', 'neon'],
    difficulty: 'beginner',
    description: 'Input that glows when focused',
    cssCode: `.input-glow {
  padding: 10px 14px;
  width: 240px;
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
.input-glow:focus {
  border-color: #10b981;
  box-shadow: 0 0 10px rgba(16,185,129,0.3), 0 0 20px rgba(16,185,129,0.1);
}`,
    htmlCode: `<input class="input-glow" placeholder="Focus me..." />`,
    isNew: true,
  },
  {
    id: 'input-pulse',
    name: 'Input Pulse',
    category: 'inputs',
    tags: ['pulse', 'input', 'focus', 'animated'],
    difficulty: 'intermediate',
    description: 'Input with a pulsing border on focus',
    cssCode: `.input-pulse {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
}
.input-pulse:focus {
  border-color: #10b981;
  animation: pulse-input 1.5s ease-in-out infinite;
}
@keyframes pulse-input {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.3); }
  50% { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
}`,
    htmlCode: `<input class="input-pulse" placeholder="Focus me..." />`,
    isNew: true,
  },
  {
    id: 'input-slide',
    name: 'Input Slide',
    category: 'inputs',
    tags: ['slide', 'input', 'focus', 'animated'],
    difficulty: 'intermediate',
    description: 'Input with an underline that slides in from left on focus',
    cssCode: `.input-slide-wrap {
  position: relative;
  display: inline-block;
}
.input-slide {
  padding: 10px 4px;
  width: 240px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2a2a3e;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
}
.input-slide-wrap::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.4s ease;
}
.input-slide-wrap:focus-within::after {
  width: 100%;
}`,
    htmlCode: `<div class="input-slide-wrap"><input class="input-slide" placeholder="Focus me..." /></div>`,
    isNew: true,
  },
  {
    id: 'input-expand',
    name: 'Input Expand',
    category: 'inputs',
    tags: ['expand', 'input', 'focus', 'width'],
    difficulty: 'beginner',
    description: 'Input that expands in width when focused',
    cssCode: `.input-expand {
  padding: 10px 14px;
  width: 180px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: width 0.4s ease, border-color 0.3s ease;
}
.input-expand:focus {
  width: 280px;
  border-color: #10b981;
}`,
    htmlCode: `<input class="input-expand" placeholder="Focus me..." />`,
    isNew: true,
  },
  {
    id: 'input-morph',
    name: 'Input Morph',
    category: 'inputs',
    tags: ['morph', 'input', 'focus', 'shape'],
    difficulty: 'intermediate',
    description: 'Input that morphs its border-radius on focus',
    cssCode: `.input-morph {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 30px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-radius 0.4s ease, border-color 0.3s ease;
}
.input-morph:focus {
  border-radius: 6px;
  border-color: #10b981;
}`,
    htmlCode: `<input class="input-morph" placeholder="Focus me..." />`,
    isNew: true,
  },
  {
    id: 'input-reveal',
    name: 'Input Reveal',
    category: 'inputs',
    tags: ['reveal', 'input', 'focus', 'clip'],
    difficulty: 'intermediate',
    description: 'Input that reveals a colored background on focus',
    cssCode: `.input-reveal-wrap {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
}
.input-reveal {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  position: relative;
  z-index: 1;
  transition: border-color 0.3s ease;
}
.input-reveal-wrap::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: rgba(16,185,129,0.1);
  transition: height 0.4s ease;
  z-index: 0;
}
.input-reveal-wrap:focus-within::before {
  height: 100%;
}
.input-reveal:focus {
  border-color: #10b981;
}`,
    htmlCode: `<div class="input-reveal-wrap"><input class="input-reveal" placeholder="Focus me..." /></div>`,
    isNew: true,
  },
  {
    id: 'input-gradient',
    name: 'Input Gradient',
    category: 'inputs',
    tags: ['gradient', 'input', 'focus', 'colorful'],
    difficulty: 'intermediate',
    description: 'Input with a gradient border that appears on focus',
    cssCode: `.input-gradient-wrap {
  position: relative;
  display: inline-block;
  padding: 2px;
  border-radius: 10px;
  background: #2a2a3e;
  transition: background 0.3s ease;
}
.input-gradient-wrap:focus-within {
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
}
.input-gradient {
  padding: 10px 14px;
  width: 236px;
  background: #1a1a2e;
  border: none;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
}`,
    htmlCode: `<div class="input-gradient-wrap"><input class="input-gradient" placeholder="Focus me..." /></div>`,
    isNew: true,
  },
  {
    id: 'input-neon',
    name: 'Input Neon',
    category: 'inputs',
    tags: ['neon', 'input', 'focus', 'glow'],
    difficulty: 'intermediate',
    description: 'Input with a neon glow effect on focus',
    cssCode: `.input-neon {
  padding: 10px 14px;
  width: 240px;
  background: #0a0a1a;
  border: 2px solid #10b98133;
  border-radius: 4px;
  color: #10b981;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
}
.input-neon:focus {
  border-color: #10b981;
  box-shadow: 0 0 8px #10b98155, 0 0 20px #10b98133, inset 0 0 8px #10b98122;
  text-shadow: 0 0 4px #10b98155;
}
.input-neon::placeholder {
  color: #10b98155;
}`,
    htmlCode: `<input class="input-neon" placeholder="Neon input..." />`,
    isNew: true,
  },
  {
    id: 'input-glass',
    name: 'Input Glass',
    category: 'inputs',
    tags: ['glass', 'input', 'frosted', 'blur'],
    difficulty: 'intermediate',
    description: 'Frosted glass input with backdrop blur',
    cssCode: `.input-glass {
  padding: 10px 14px;
  width: 240px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}
.input-glass:focus {
  background: rgba(255,255,255,0.12);
  border-color: rgba(16,185,129,0.4);
  box-shadow: 0 4px 20px rgba(16,185,129,0.1);
}
.input-glass::placeholder {
  color: rgba(255,255,255,0.3);
}`,
    htmlCode: `<input class="input-glass" placeholder="Glass input..." />`,
    isNew: true,
  },
  {
    id: 'input-3d',
    name: 'Input 3D',
    category: 'inputs',
    tags: ['3d', 'input', 'depth', 'solid'],
    difficulty: 'beginner',
    description: 'Input with a 3D solid shadow effect',
    cssCode: `.input-3d {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: none;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  box-shadow: 3px 3px 0 #0f0f1a, 6px 6px 0 #050510;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
}
.input-3d:focus {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 #0f0f1a, 2px 2px 0 #050510;
  border-color: #10b981;
}`,
    htmlCode: `<input class="input-3d" placeholder="3D input..." />`,
    isNew: true,
  },
  {
    id: 'input-depth',
    name: 'Input Depth',
    category: 'inputs',
    tags: ['depth', 'input', 'focus', 'inset'],
    difficulty: 'beginner',
    description: 'Input that appears to deepen on focus with inset shadow',
    cssCode: `.input-depth {
  padding: 10px 14px;
  width: 240px;
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
}
.input-depth:focus {
  border-color: #10b981;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.3);
  background: #0a0a15;
}`,
    htmlCode: `<input class="input-depth" placeholder="Depth input..." />`,
    isNew: true,
  },
  {
    id: 'input-shadow-2',
    name: 'Input Shadow',
    category: 'inputs',
    tags: ['shadow', 'input', 'focus', 'elevation'],
    difficulty: 'beginner',
    description: 'Input that gains a colored shadow on focus',
    cssCode: `.input-shadow-2 {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
}
.input-shadow-2:focus {
  border-color: #10b981;
  box-shadow: 0 4px 16px rgba(16,185,129,0.25);
}`,
    htmlCode: `<input class="input-shadow-2" placeholder="Shadow input..." />`,
    isNew: true,
  },
  {
    id: 'underline-anim-input',
    name: 'Underline Animated Input',
    category: 'inputs',
    tags: ['underline', 'input', 'animated', 'center'],
    difficulty: 'intermediate',
    description: 'Input with underline that grows from center on focus',
    cssCode: `.underline-anim-wrap {
  position: relative;
  display: inline-block;
}
.underline-anim-input {
  padding: 10px 4px;
  width: 240px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #2a2a3e;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
}
.underline-anim-wrap::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.4s ease, left 0.4s ease;
}
.underline-anim-wrap:focus-within::after {
  width: 100%;
  left: 0;
}`,
    htmlCode: `<div class="underline-anim-wrap"><input class="underline-anim-input" placeholder="Focus me..." /></div>`,
    isNew: true,
  },
  {
    id: 'label-slide-input',
    name: 'Label Slide Input',
    category: 'inputs',
    tags: ['label', 'slide', 'input', 'animated'],
    difficulty: 'intermediate',
    description: 'Input with a label that slides up on focus',
    cssCode: `.label-slide-wrap {
  position: relative;
  margin: 10px 0;
}
.label-slide-input {
  padding: 14px 12px 6px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.label-slide-input:focus {
  border-color: #10b981;
}
.label-slide {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 14px;
  pointer-events: none;
  transition: all 0.3s ease;
}
.label-slide-input:focus + .label-slide,
.label-slide-input:not(:placeholder-shown) + .label-slide {
  top: 6px;
  transform: translateY(0);
  font-size: 10px;
  color: #10b981;
}`,
    htmlCode: `<div class="label-slide-wrap"><input class="label-slide-input" placeholder=" " /><label class="label-slide">Email</label></div>`,
    isNew: true,
  },
  {
    id: 'placeholder-anim',
    name: 'Animated Placeholder Input',
    category: 'inputs',
    tags: ['placeholder', 'animated', 'input', 'typing'],
    difficulty: 'advanced',
    description: 'Input with an animated typing placeholder effect',
    cssCode: `.placeholder-anim {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.placeholder-anim:focus {
  border-color: #10b981;
}
.placeholder-anim::placeholder {
  animation: placeholder-fade 2s ease-in-out infinite;
}
@keyframes placeholder-fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,
    htmlCode: `<input class="placeholder-anim" placeholder="Type something..." />`,
    isNew: true,
  },
  {
    id: 'focus-ring-input',
    name: 'Focus Ring Input',
    category: 'inputs',
    tags: ['focus', 'ring', 'input', 'accessibility'],
    difficulty: 'beginner',
    description: 'Input with a focus ring outline on focus',
    cssCode: `.focus-ring-input {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
}
.focus-ring-input:focus {
  border-color: #10b981;
  outline: 3px solid rgba(16,185,129,0.3);
  outline-offset: 2px;
}`,
    htmlCode: `<input class="focus-ring-input" placeholder="Focus me..." />`,
    isNew: true,
  },
  {
    id: 'validation-check-input',
    name: 'Validation Check Input',
    category: 'inputs',
    tags: ['validation', 'check', 'input', 'success'],
    difficulty: 'intermediate',
    description: 'Input with a checkmark that appears on valid input',
    cssCode: `.validation-check-wrap {
  position: relative;
  display: inline-block;
}
.validation-check-input {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.validation-check-input:valid:not(:placeholder-shown) {
  border-color: #10b981;
}
.validation-check-wrap::after {
  content: '✓';
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  color: #10b981;
  font-size: 16px;
  font-weight: 700;
  transition: transform 0.3s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.validation-check-input:valid:not(:placeholder-shown) ~ ::after,
.validation-check-wrap:focus-within .validation-check-input:valid:not(:placeholder-shown) + ::after {
  transform: translateY(-50%) scale(1);
}`,
    htmlCode: `<div class="validation-check-wrap"><input class="validation-check-input" type="email" placeholder="Enter email..." required /></div>`,
    isNew: true,
  },
  {
    id: 'error-shake-input',
    name: 'Error Shake Input',
    category: 'inputs',
    tags: ['error', 'shake', 'input', 'validation'],
    difficulty: 'intermediate',
    description: 'Input with a shake animation and red border on error',
    cssCode: `.error-shake-input {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.error-shake-input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  background: rgba(239,68,68,0.05);
  animation: err-shake 0.5s ease;
}
@keyframes err-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  50% { transform: translateX(6px); }
  75% { transform: translateX(-3px); }
}`,
    htmlCode: `<input class="error-shake-input" type="email" placeholder="Enter email..." required />`,
    isNew: true,
  },
  {
    id: 'success-check-input',
    name: 'Success Check Input',
    category: 'inputs',
    tags: ['success', 'check', 'input', 'confirmation'],
    difficulty: 'beginner',
    description: 'Input with a green border and subtle glow on valid input',
    cssCode: `.success-check-input {
  padding: 10px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
}
.success-check-input:valid:not(:placeholder-shown) {
  border-color: #10b981;
  box-shadow: 0 0 8px rgba(16,185,129,0.2);
}`,
    htmlCode: `<input class="success-check-input" type="email" placeholder="Enter email..." required />`,
    isNew: true,
  },
  {
    id: 'search-expand-input',
    name: 'Search Expand Input',
    category: 'inputs',
    tags: ['search', 'expand', 'input', 'animated'],
    difficulty: 'intermediate',
    description: 'Search input that expands with an icon on focus',
    cssCode: `.search-expand-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.search-expand-icon {
  position: absolute;
  left: 10px;
  color: #64748b;
  font-size: 14px;
  pointer-events: none;
  transition: color 0.3s ease;
}
.search-expand-input {
  padding: 10px 14px 10px 30px;
  width: 180px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 20px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: width 0.4s ease, border-color 0.3s ease;
}
.search-expand-input:focus {
  width: 260px;
  border-color: #10b981;
}
.search-expand-wrap:focus-within .search-expand-icon {
  color: #10b981;
}`,
    htmlCode: `<div class="search-expand-wrap"><span class="search-expand-icon">🔍</span><input class="search-expand-input" placeholder="Search..." /></div>`,
    isNew: true,
  },
  {
    id: 'textarea-grow',
    name: 'Textarea Auto Grow',
    category: 'inputs',
    tags: ['textarea', 'grow', 'input', 'auto'],
    difficulty: 'beginner',
    description: 'Textarea with smooth appearance and focus styling',
    cssCode: `.textarea-grow {
  padding: 10px 14px;
  width: 240px;
  min-height: 60px;
  max-height: 200px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.textarea-grow:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
}`,
    htmlCode: `<textarea class="textarea-grow" placeholder="Type here..."></textarea>`,
    isNew: true,
  },
  {
    id: 'input-icon-slide',
    name: 'Input Icon Slide',
    category: 'inputs',
    tags: ['icon', 'slide', 'input', 'focus'],
    difficulty: 'intermediate',
    description: 'Input with an icon that slides into view on focus',
    cssCode: `.input-icon-slide-wrap {
  position: relative;
  display: inline-block;
}
.input-icon-slide {
  padding: 10px 14px 10px 36px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.input-icon-slide:focus {
  border-color: #10b981;
}
.input-icon-slide-icon {
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  transition: left 0.3s ease, color 0.3s ease;
  pointer-events: none;
}
.input-icon-slide-wrap:focus-within .input-icon-slide-icon {
  left: 10px;
  color: #10b981;
}`,
    htmlCode: `<div class="input-icon-slide-wrap"><span class="input-icon-slide-icon">✉</span><input class="input-icon-slide" placeholder="Email..." /></div>`,
    isNew: true,
  },
  {
    id: 'input-border-gradient',
    name: 'Input Border Gradient',
    category: 'inputs',
    tags: ['gradient', 'border', 'input', 'colorful'],
    difficulty: 'advanced',
    description: 'Input with an animated gradient border on focus',
    cssCode: `.input-grad-wrap {
  position: relative;
  display: inline-block;
  padding: 2px;
  border-radius: 10px;
  background: #2a2a3e;
}
.input-grad-wrap:focus-within {
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 100%;
  animation: input-grad-move 3s linear infinite;
}
.input-border-gradient {
  padding: 10px 14px;
  width: 236px;
  background: #1a1a2e;
  border: none;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
}
@keyframes input-grad-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<div class="input-grad-wrap"><input class="input-border-gradient" placeholder="Focus me..." /></div>`,
    isNew: true,
  },
  {
    id: 'input-float-label-2',
    name: 'Float Label Input V2',
    category: 'inputs',
    tags: ['floating', 'label', 'input', 'border'],
    difficulty: 'intermediate',
    description: 'Input with a floating label that sits on the border when active',
    cssCode: `.float-label-2-wrap {
  position: relative;
  margin: 10px 0;
}
.input-float-2 {
  padding: 12px 14px;
  width: 240px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}
.input-float-2:focus {
  border-color: #10b981;
}
.float-label-2 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 14px;
  padding: 0 4px;
  background: #1a1a2e;
  pointer-events: none;
  transition: all 0.3s ease;
}
.input-float-2:focus + .float-label-2,
.input-float-2:not(:placeholder-shown) + .float-label-2 {
  top: 0;
  font-size: 11px;
  color: #10b981;
}`,
    htmlCode: `<div class="float-label-2-wrap"><input class="input-float-2" placeholder=" " /><label class="float-label-2">Password</label></div>`,
    isNew: true,
  },

  // ==========================================
  // TOGGLE EFFECTS (25)
  // ==========================================
  {
    id: 'ios-toggle',
    name: 'iOS Toggle',
    category: 'toggles',
    tags: ['ios', 'toggle', 'switch', 'smooth'],
    difficulty: 'beginner',
    description: 'iOS-style toggle switch with smooth sliding animation',
    cssCode: `.ios-toggle {
  position: relative;
  width: 48px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ios-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.ios-toggle:checked {
  background: #10b981;
}
.ios-toggle:checked::before {
  transform: translateX(22px);
}`,
    htmlCode: `<input type="checkbox" class="ios-toggle" />`,
    isNew: true,
  },
  {
    id: 'android-toggle',
    name: 'Android Toggle',
    category: 'toggles',
    tags: ['android', 'toggle', 'switch', 'material'],
    difficulty: 'beginner',
    description: 'Android Material Design style toggle switch',
    cssCode: `.android-toggle {
  position: relative;
  width: 44px;
  height: 22px;
  appearance: none;
  background: #4a4a5e;
  border-radius: 11px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.android-toggle::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 20px;
  height: 20px;
  background: #9ca3af;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease, width 0.15s ease;
}
.android-toggle:checked {
  background: #10b98144;
}
.android-toggle:checked::before {
  transform: translateX(22px);
  background: #10b981;
  width: 24px;
}`,
    htmlCode: `<input type="checkbox" class="android-toggle" />`,
    isNew: true,
  },
  {
    id: 'flat-toggle',
    name: 'Flat Toggle',
    category: 'toggles',
    tags: ['flat', 'toggle', 'switch', 'minimal'],
    difficulty: 'beginner',
    description: 'Minimal flat toggle switch design',
    cssCode: `.flat-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  appearance: none;
  background: #2a2a3e;
  border: 2px solid #3a3a4e;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.flat-toggle::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  background: #64748b;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.flat-toggle:checked {
  background: #10b98122;
  border-color: #10b981;
}
.flat-toggle:checked::before {
  transform: translateX(20px);
  background: #10b981;
}`,
    htmlCode: `<input type="checkbox" class="flat-toggle" />`,
    isNew: true,
  },
  {
    id: '3d-toggle',
    name: '3D Toggle',
    category: 'toggles',
    tags: ['3d', 'toggle', 'switch', 'depth'],
    difficulty: 'intermediate',
    description: 'Toggle switch with a 3D depth effect',
    cssCode: `.toggle-3d {
  position: relative;
  width: 52px;
  height: 28px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
  transition: background 0.3s ease;
}
.toggle-3d::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #fff, #e2e8f0);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}
.toggle-3d:checked {
  background: #10b981;
}
.toggle-3d:checked::before {
  transform: translateX(24px);
}`,
    htmlCode: `<input type="checkbox" class="toggle-3d" />`,
    isNew: true,
  },
  {
    id: 'neon-toggle',
    name: 'Neon Toggle',
    category: 'toggles',
    tags: ['neon', 'toggle', 'switch', 'glow'],
    difficulty: 'intermediate',
    description: 'Toggle switch with neon glow effect when active',
    cssCode: `.neon-toggle {
  position: relative;
  width: 52px;
  height: 28px;
  appearance: none;
  background: #0a0a1a;
  border: 2px solid #2a2a3e;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.neon-toggle::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  background: #3a3a4e;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.neon-toggle:checked {
  border-color: #10b981;
  box-shadow: 0 0 10px #10b98155, inset 0 0 6px #10b98122;
}
.neon-toggle:checked::before {
  transform: translateX(24px);
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}`,
    htmlCode: `<input type="checkbox" class="neon-toggle" />`,
    isNew: true,
  },
  {
    id: 'glow-toggle',
    name: 'Glow Toggle',
    category: 'toggles',
    tags: ['glow', 'toggle', 'switch', 'soft'],
    difficulty: 'intermediate',
    description: 'Toggle with a soft ambient glow when active',
    cssCode: `.glow-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #1a1a2e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.glow-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #64748b;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.glow-toggle:checked {
  background: #10b98133;
  box-shadow: 0 0 20px rgba(16,185,129,0.2);
}
.glow-toggle:checked::before {
  transform: translateX(24px);
  background: #10b981;
  box-shadow: 0 0 12px rgba(16,185,129,0.5);
}`,
    htmlCode: `<input type="checkbox" class="glow-toggle" />`,
    isNew: true,
  },
  {
    id: 'morph-toggle',
    name: 'Morph Toggle',
    category: 'toggles',
    tags: ['morph', 'toggle', 'switch', 'shape'],
    difficulty: 'advanced',
    description: 'Toggle that morphs the knob shape from square to circle',
    cssCode: `.morph-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #2a2a3e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.morph-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #9ca3af;
  border-radius: 4px;
  transition: all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.morph-toggle:checked {
  background: #10b98144;
}
.morph-toggle:checked::before {
  transform: translateX(24px);
  border-radius: 50%;
  background: #10b981;
}`,
    htmlCode: `<input type="checkbox" class="morph-toggle" />`,
    isNew: true,
  },
  {
    id: 'elastic-toggle',
    name: 'Elastic Toggle',
    category: 'toggles',
    tags: ['elastic', 'toggle', 'switch', 'spring'],
    difficulty: 'advanced',
    description: 'Toggle with an elastic spring overshoot animation',
    cssCode: `.elastic-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.elastic-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.5s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.elastic-toggle:checked {
  background: #10b981;
}
.elastic-toggle:checked::before {
  transform: translateX(24px);
}`,
    htmlCode: `<input type="checkbox" class="elastic-toggle" />`,
    isNew: true,
  },
  {
    id: 'bounce-toggle',
    name: 'Bounce Toggle',
    category: 'toggles',
    tags: ['bounce', 'toggle', 'switch', 'playful'],
    difficulty: 'intermediate',
    description: 'Toggle with a bouncing knob animation on switch',
    cssCode: `.bounce-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.bounce-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.bounce-toggle:checked {
  background: #10b981;
}
.bounce-toggle:checked::before {
  transform: translateX(24px);
}`,
    htmlCode: `<input type="checkbox" class="bounce-toggle" />`,
    isNew: true,
  },
  {
    id: 'slide-toggle',
    name: 'Slide Toggle',
    category: 'toggles',
    tags: ['slide', 'toggle', 'switch', 'smooth'],
    difficulty: 'beginner',
    description: 'Simple smooth sliding toggle switch',
    cssCode: `.slide-toggle {
  position: relative;
  width: 48px;
  height: 24px;
  appearance: none;
  background: #2a2a3e;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  transition: background 0.4s ease;
}
.slide-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #e2e8f0;
  border-radius: 50%;
  transition: transform 0.4s ease;
}
.slide-toggle:checked {
  background: #10b981;
}
.slide-toggle:checked::before {
  transform: translateX(24px);
}`,
    htmlCode: `<input type="checkbox" class="slide-toggle" />`,
    isNew: true,
  },
  {
    id: 'flip-toggle',
    name: 'Flip Toggle',
    category: 'toggles',
    tags: ['flip', 'toggle', 'switch', '3d'],
    difficulty: 'advanced',
    description: 'Toggle that flips the knob in 3D when switching',
    cssCode: `.flip-toggle-wrap {
  perspective: 200px;
  display: inline-block;
}
.flip-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.flip-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}
.flip-toggle:checked {
  background: #10b981;
}
.flip-toggle:checked::before {
  transform: translateX(24px) rotateY(180deg);
}`,
    htmlCode: `<div class="flip-toggle-wrap"><input type="checkbox" class="flip-toggle" /></div>`,
    isNew: true,
  },
  {
    id: 'rotate-toggle',
    name: 'Rotate Toggle',
    category: 'toggles',
    tags: ['rotate', 'toggle', 'switch', 'spin'],
    difficulty: 'intermediate',
    description: 'Toggle whose knob rotates when switching',
    cssCode: `.rotate-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.rotate-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.4s ease;
}
.rotate-toggle:checked {
  background: #10b981;
}
.rotate-toggle:checked::before {
  transform: translateX(24px) rotate(360deg);
}`,
    htmlCode: `<input type="checkbox" class="rotate-toggle" />`,
    isNew: true,
  },
  {
    id: 'scale-toggle',
    name: 'Scale Toggle',
    category: 'toggles',
    tags: ['scale', 'toggle', 'switch', 'grow'],
    difficulty: 'intermediate',
    description: 'Toggle whose knob scales up briefly when switching',
    cssCode: `.scale-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.scale-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scale-toggle:checked {
  background: #10b981;
}
.scale-toggle:checked::before {
  transform: translateX(24px) scale(1.15);
}`,
    htmlCode: `<input type="checkbox" class="scale-toggle" />`,
    isNew: true,
  },
  {
    id: 'fade-toggle',
    name: 'Fade Toggle',
    category: 'toggles',
    tags: ['fade', 'toggle', 'switch', 'opacity'],
    difficulty: 'intermediate',
    description: 'Toggle whose knob fades out and reappears at the new position',
    cssCode: `.fade-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.fade-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease, opacity 0.15s ease;
}
.fade-toggle:checked {
  background: #10b981;
}
.fade-toggle:checked::before {
  transform: translateX(24px);
  animation: fade-knob 0.3s ease;
}
@keyframes fade-knob {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}`,
    htmlCode: `<input type="checkbox" class="fade-toggle" />`,
    isNew: true,
  },
  {
    id: 'blur-toggle',
    name: 'Blur Toggle',
    category: 'toggles',
    tags: ['blur', 'toggle', 'switch', 'focus'],
    difficulty: 'intermediate',
    description: 'Toggle whose knob blurs during transition',
    cssCode: `.blur-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.blur-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.blur-toggle:checked {
  background: #10b981;
}
.blur-toggle:checked::before {
  transform: translateX(24px);
  animation: blur-knob 0.3s ease;
}
@keyframes blur-knob {
  0% { filter: blur(0); }
  50% { filter: blur(4px); }
  100% { filter: blur(0); }
}`,
    htmlCode: `<input type="checkbox" class="blur-toggle" />`,
    isNew: true,
  },
  {
    id: 'gradient-toggle',
    name: 'Gradient Toggle',
    category: 'toggles',
    tags: ['gradient', 'toggle', 'switch', 'colorful'],
    difficulty: 'intermediate',
    description: 'Toggle with a gradient background when active',
    cssCode: `.gradient-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.gradient-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #e2e8f0;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.gradient-toggle:checked {
  background: linear-gradient(135deg, #10b981, #3b82f6);
}`,
    htmlCode: `<input type="checkbox" class="gradient-toggle" />`,
    isNew: true,
  },
  {
    id: 'dark-mode-toggle',
    name: 'Dark Mode Toggle',
    category: 'toggles',
    tags: ['dark', 'mode', 'toggle', 'theme'],
    difficulty: 'advanced',
    description: 'Toggle that visually represents dark/light mode switch with sun/moon',
    cssCode: `.dark-mode-toggle {
  position: relative;
  width: 56px;
  height: 28px;
  appearance: none;
  background: #87ceeb;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  transition: background 0.4s ease;
}
.dark-mode-toggle::before {
  content: '☀️';
  position: absolute;
  top: 2px;
  left: 3px;
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  transition: transform 0.4s ease;
}
.dark-mode-toggle:checked {
  background: #1a1a2e;
}
.dark-mode-toggle:checked::before {
  content: '🌙';
  transform: translateX(26px);
}`,
    htmlCode: `<input type="checkbox" class="dark-mode-toggle" />`,
    isNew: true,
  },
  {
    id: 'light-switch-toggle',
    name: 'Light Switch Toggle',
    category: 'toggles',
    tags: ['light', 'switch', 'toggle', 'realistic'],
    difficulty: 'intermediate',
    description: 'Realistic light switch toggle with on/off states',
    cssCode: `.light-switch {
  position: relative;
  width: 36px;
  height: 60px;
  appearance: none;
  background: #e2e8f0;
  border: 2px solid #94a3b8;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.light-switch::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 3px;
  width: 26px;
  height: 24px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}
.light-switch:checked {
  background: #10b98144;
  border-color: #10b981;
}
.light-switch:checked::before {
  transform: translateY(26px);
  background: #10b981;
}`,
    htmlCode: `<input type="checkbox" class="light-switch" />`,
    isNew: true,
  },
  {
    id: 'power-toggle',
    name: 'Power Toggle',
    category: 'toggles',
    tags: ['power', 'toggle', 'switch', 'button'],
    difficulty: 'intermediate',
    description: 'Power button style toggle with glow on active',
    cssCode: `.power-toggle {
  position: relative;
  width: 44px;
  height: 44px;
  appearance: none;
  background: #1a1a2e;
  border: 3px solid #3a3a4e;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.power-toggle::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  width: 3px;
  height: 12px;
  background: #64748b;
  transform: translateX(-50%);
  border-radius: 2px;
  transition: background 0.3s ease;
}
.power-toggle:checked {
  border-color: #10b981;
  box-shadow: 0 0 15px rgba(16,185,129,0.4), inset 0 0 8px rgba(16,185,129,0.1);
}
.power-toggle:checked::before {
  background: #10b981;
}`,
    htmlCode: `<input type="checkbox" class="power-toggle" />`,
    isNew: true,
  },
  {
    id: 'check-toggle',
    name: 'Check Toggle',
    category: 'toggles',
    tags: ['check', 'toggle', 'switch', 'confirmation'],
    difficulty: 'intermediate',
    description: 'Toggle that shows a checkmark when active',
    cssCode: `.check-toggle {
  position: relative;
  width: 48px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.check-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.check-toggle::after {
  content: '✓';
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%) scale(0);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  transition: transform 0.3s ease;
}
.check-toggle:checked {
  background: #10b981;
}
.check-toggle:checked::before {
  transform: translateX(22px);
}
.check-toggle:checked::after {
  transform: translateY(-50%) scale(1);
  left: 6px;
}`,
    htmlCode: `<input type="checkbox" class="check-toggle" />`,
    isNew: true,
  },
  {
    id: 'smiley-toggle',
    name: 'Smiley Toggle',
    category: 'toggles',
    tags: ['smiley', 'toggle', 'switch', 'fun'],
    difficulty: 'advanced',
    description: 'Toggle with emoji faces showing sad/happy states',
    cssCode: `.smiley-toggle {
  position: relative;
  width: 56px;
  height: 28px;
  appearance: none;
  background: #ef444444;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.smiley-toggle::before {
  content: '😞';
  position: absolute;
  top: 2px;
  left: 3px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  transition: transform 0.3s ease;
}
.smiley-toggle:checked {
  background: #10b98144;
}
.smiley-toggle:checked::before {
  content: '😊';
  transform: translateX(26px);
}`,
    htmlCode: `<input type="checkbox" class="smiley-toggle" />`,
    isNew: true,
  },
  {
    id: 'day-night-toggle',
    name: 'Day Night Toggle',
    category: 'toggles',
    tags: ['day', 'night', 'toggle', 'theme'],
    difficulty: 'advanced',
    description: 'Toggle with day sky and night sky background transition',
    cssCode: `.day-night-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  appearance: none;
  background: linear-gradient(180deg, #87ceeb, #e0f0ff);
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  transition: background 0.5s ease;
  overflow: hidden;
}
.day-night-toggle::before {
  content: '☀️';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  transition: transform 0.4s ease;
}
.day-night-toggle:checked {
  background: linear-gradient(180deg, #0f172a, #1e293b);
}
.day-night-toggle:checked::before {
  content: '🌙';
  transform: translateX(30px);
}`,
    htmlCode: `<input type="checkbox" class="day-night-toggle" />`,
    isNew: true,
  },
  {
    id: 'sun-moon-toggle',
    name: 'Sun Moon Toggle',
    category: 'toggles',
    tags: ['sun', 'moon', 'toggle', 'celestial'],
    difficulty: 'intermediate',
    description: 'Toggle with CSS sun and moon shapes instead of emoji',
    cssCode: `.sun-moon-toggle {
  position: relative;
  width: 56px;
  height: 28px;
  appearance: none;
  background: #87ceeb;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  transition: background 0.4s ease;
}
.sun-moon-toggle::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  background: #fbbf24;
  border-radius: 50%;
  box-shadow: 0 0 8px #fbbf2488;
  transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
}
.sun-moon-toggle:checked {
  background: #0f172a;
}
.sun-moon-toggle:checked::before {
  transform: translateX(28px);
  background: #e2e8f0;
  box-shadow: inset -4px -2px 0 0 #94a3b8, 0 0 8px #e2e8f044;
}`,
    htmlCode: `<input type="checkbox" class="sun-moon-toggle" />`,
    isNew: true,
  },
  {
    id: 'on-off-toggle',
    name: 'On Off Toggle',
    category: 'toggles',
    tags: ['on', 'off', 'toggle', 'text'],
    difficulty: 'intermediate',
    description: 'Toggle with ON/OFF text labels that switch with the knob',
    cssCode: `.on-off-toggle {
  position: relative;
  width: 64px;
  height: 28px;
  appearance: none;
  background: #ef444466;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.on-off-toggle::before {
  content: 'OFF';
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 28px;
  background: #ef4444;
  border-radius: 14px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease, content 0s;
}
.on-off-toggle:checked {
  background: #10b98133;
}
.on-off-toggle:checked::before {
  content: 'ON';
  transform: translateX(30px);
  background: #10b981;
}`,
    htmlCode: `<input type="checkbox" class="on-off-toggle" />`,
    isNew: true,
  },
  {
    id: 'x-toggle',
    name: 'X Toggle',
    category: 'toggles',
    tags: ['x', 'toggle', 'switch', 'check'],
    difficulty: 'intermediate',
    description: 'Toggle that shows X when off and checkmark when on',
    cssCode: `.x-toggle {
  position: relative;
  width: 48px;
  height: 26px;
  appearance: none;
  background: #3a3a4e;
  border-radius: 13px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
}
.x-toggle::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.x-toggle::after {
  content: '✕';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ef4444;
  font-size: 12px;
  font-weight: 700;
  transition: opacity 0.3s ease;
}
.x-toggle:checked {
  background: #10b981;
}
.x-toggle:checked::before {
  transform: translateX(22px);
}
.x-toggle:checked::after {
  content: '✓';
  color: #fff;
  right: auto;
  left: 8px;
}`,
    htmlCode: `<input type="checkbox" class="x-toggle" />`,
    isNew: true,
  },
];
