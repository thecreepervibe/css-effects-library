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

export const effectsCardsBgBatch: CSSEffect[] = [
  // ==================== CARD EFFECTS (50) ====================
  {
    id: 'tilt-card',
    name: 'Tilt Card',
    category: 'cards',
    tags: ['3d', 'tilt', 'hover', 'perspective'],
    difficulty: 'intermediate',
    description: 'Card that tilts in 3D perspective on hover with a dynamic shadow',
    cssCode: `.tilt-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #2a2a3e;
  transform-style: preserve-3d;
}
.tilt-card:hover {
  transform: perspective(600px) rotateX(8deg) rotateY(-8deg) scale(1.03);
  box-shadow: 12px 12px 24px rgba(16,185,129,0.15), -4px -4px 12px rgba(0,0,0,0.3);
}
.tilt-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="tilt-card"><h3>Tilt Card</h3><p>Hover to tilt</p></div>`,
    isNew: true,
  },
  {
    id: 'reveal-card',
    name: 'Reveal Card',
    category: 'cards',
    tags: ['reveal', 'hover', 'slide', 'overlay'],
    difficulty: 'intermediate',
    description: 'Card with a sliding overlay that reveals content on hover',
    cssCode: `.reveal-card {
  width: 200px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
}
.reveal-card-content {
  padding: 16px;
  color: #e2e8f0;
}
.reveal-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  color: #000;
  font-weight: 700;
}
.reveal-card:hover .reveal-card-overlay {
  transform: translateY(0);
}`,
    htmlCode: `<div class="reveal-card"><div class="reveal-card-content"><p>Original</p></div><div class="reveal-card-overlay">Revealed!</div></div>`,
    isNew: true,
  },
  {
    id: 'stack-card',
    name: 'Stack Card',
    category: 'cards',
    tags: ['stack', 'layered', 'hover', '3d'],
    difficulty: 'intermediate',
    description: 'Card with stacked layers behind it that separate on hover',
    cssCode: `.stack-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  border: 1px solid #2a2a3e;
  z-index: 3;
  transition: transform 0.3s ease;
}
.stack-card::before,
.stack-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.stack-card::before {
  background: #151525;
  z-index: -1;
  opacity: 0.7;
}
.stack-card::after {
  background: #101020;
  z-index: -2;
  opacity: 0.4;
}
.stack-card:hover { transform: translateY(-4px); }
.stack-card:hover::before { transform: translateY(8px) scale(0.98); }
.stack-card:hover::after { transform: translateY(16px) scale(0.96); }`,
    htmlCode: `<div class="stack-card"><h3>Stack Card</h3></div>`,
    isNew: true,
  },
  {
    id: 'slide-card',
    name: 'Slide Card',
    category: 'cards',
    tags: ['slide', 'hover', 'animated', 'horizontal'],
    difficulty: 'beginner',
    description: 'Card that slides horizontally on hover with a color shift',
    cssCode: `.slide-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.slide-card:hover {
  transform: translateX(12px);
  box-shadow: -4px 4px 16px rgba(16,185,129,0.2);
  border-color: #10b981;
}
.slide-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="slide-card"><h3>Slide Card</h3><p>Slides right</p></div>`,
    isNew: true,
  },
  {
    id: 'expand-card',
    name: 'Expand Card',
    category: 'cards',
    tags: ['expand', 'hover', 'scale', 'animated'],
    difficulty: 'beginner',
    description: 'Card that expands slightly on hover with elevated shadow',
    cssCode: `.expand-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.expand-card:hover {
  transform: scale(1.08);
  box-shadow: 0 16px 40px rgba(16,185,129,0.2), 0 4px 12px rgba(0,0,0,0.3);
}
.expand-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="expand-card"><h3>Expand Card</h3><p>Hover to grow</p></div>`,
    isNew: true,
  },
  {
    id: 'flip-card-v2',
    name: 'Flip Card',
    category: 'cards',
    tags: ['flip', '3d', 'hover', 'rotate'],
    difficulty: 'advanced',
    description: 'Card that flips in 3D to reveal its back face on hover',
    cssCode: `.flip-card-v2-wrap {
  width: 200px;
  height: 120px;
  perspective: 800px;
}
.flip-card-v2 {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}
.flip-card-v2-wrap:hover .flip-card-v2 {
  transform: rotateY(180deg);
}
.flip-card-v2-front,
.flip-card-v2-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.flip-card-v2-front {
  background: #1a1a2e;
  border: 1px solid #10b981;
  color: #10b981;
}
.flip-card-v2-back {
  background: #10b981;
  color: #000;
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="flip-card-v2-wrap"><div class="flip-card-v2"><div class="flip-card-v2-front">Front</div><div class="flip-card-v2-back">Back</div></div></div>`,
    isNew: true,
  },
  {
    id: 'zoom-card',
    name: 'Zoom Card',
    category: 'cards',
    tags: ['zoom', 'hover', 'scale', 'focus'],
    difficulty: 'beginner',
    description: 'Card with content that zooms in on hover with blur on the card edges',
    cssCode: `.zoom-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.zoom-card .zoom-inner {
  transition: transform 0.4s ease;
}
.zoom-card:hover .zoom-inner {
  transform: scale(1.15);
}
.zoom-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="zoom-card"><div class="zoom-inner"><h3>Zoom Card</h3><p>Content zooms</p></div></div>`,
    isNew: true,
  },
  {
    id: 'rotate-card',
    name: 'Rotate Card',
    category: 'cards',
    tags: ['rotate', 'hover', 'animated', 'spin'],
    difficulty: 'beginner',
    description: 'Card that rotates slightly on hover with a smooth transition',
    cssCode: `.rotate-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.rotate-card:hover {
  transform: rotate(5deg) scale(1.03);
  box-shadow: 8px 8px 20px rgba(16,185,129,0.15);
}
.rotate-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="rotate-card"><h3>Rotate Card</h3><p>Spins slightly</p></div>`,
    isNew: true,
  },
  {
    id: 'blur-reveal-card',
    name: 'Blur Reveal Card',
    category: 'cards',
    tags: ['blur', 'reveal', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Card content starts blurred and reveals clearly on hover',
    cssCode: `.blur-reveal-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
}
.blur-reveal-card .blur-content {
  filter: blur(6px);
  transition: filter 0.4s ease;
}
.blur-reveal-card:hover .blur-content {
  filter: blur(0);
}
.blur-reveal-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="blur-reveal-card"><div class="blur-content"><h3>Blur Reveal</h3><p>Hover to focus</p></div></div>`,
    isNew: true,
  },
  {
    id: 'spotlight-card',
    name: 'Spotlight Card',
    category: 'cards',
    tags: ['spotlight', 'hover', 'glow', 'radial'],
    difficulty: 'advanced',
    description: 'Card with a spotlight radial gradient that appears on hover',
    cssCode: `.spotlight-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.spotlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 100%;
  background: radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.spotlight-card:hover::before {
  opacity: 1;
}
.spotlight-card h3 { position: relative; margin: 0 0 8px; color: #10b981; }
.spotlight-card p { position: relative; }`,
    htmlCode: `<div class="spotlight-card"><h3>Spotlight</h3><p>Hover to illuminate</p></div>`,
    isNew: true,
  },
  {
    id: 'corner-fold-card',
    name: 'Corner Fold Card',
    category: 'cards',
    tags: ['corner', 'fold', 'paper', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with a decorative folded corner effect on hover',
    cssCode: `.corner-fold-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  transition: border-radius 0.3s ease;
}
.corner-fold-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  background: linear-gradient(225deg, #0f0f1a 50%, #10b981 50%);
  transition: width 0.3s ease, height 0.3s ease;
  border-radius: 0 12px 0 0;
}
.corner-fold-card:hover::before {
  width: 40px;
  height: 40px;
}
.corner-fold-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="corner-fold-card"><h3>Fold Card</h3><p>Corner peels</p></div>`,
    isNew: true,
  },
  {
    id: 'pop-up-card',
    name: 'Pop Up Card',
    category: 'cards',
    tags: ['pop', 'hover', 'animated', 'entrance'],
    difficulty: 'beginner',
    description: 'Card that pops up with a springy vertical animation on hover',
    cssCode: `.pop-up-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.pop-up-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(16,185,129,0.2), 0 8px 16px rgba(0,0,0,0.3);
}
.pop-up-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="pop-up-card"><h3>Pop Up</h3><p>Floats above</p></div>`,
    isNew: true,
  },
  {
    id: 'bounce-card',
    name: 'Bounce Card',
    category: 'cards',
    tags: ['bounce', 'animated', 'hover', 'spring'],
    difficulty: 'intermediate',
    description: 'Card that bounces playfully on hover',
    cssCode: `.bounce-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
}
.bounce-card:hover {
  animation: card-bounce 0.5s ease;
}
@keyframes card-bounce {
  0% { transform: translateY(0); }
  30% { transform: translateY(-16px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}
.bounce-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="bounce-card"><h3>Bounce Card</h3><p>Hover to bounce</p></div>`,
    isNew: true,
  },
  {
    id: 'elastic-card',
    name: 'Elastic Card',
    category: 'cards',
    tags: ['elastic', 'hover', 'animated', 'spring'],
    difficulty: 'intermediate',
    description: 'Card that stretches elastically on hover with overshoot',
    cssCode: `.elastic-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.elastic-card:hover {
  transform: scale(1.1);
}
.elastic-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="elastic-card"><h3>Elastic</h3><p>Stretches on hover</p></div>`,
    isNew: true,
  },
  {
    id: 'glow-card',
    name: 'Glow Card',
    category: 'cards',
    tags: ['glow', 'hover', 'animated', 'light'],
    difficulty: 'beginner',
    description: 'Card that emits a soft glow on hover',
    cssCode: `.glow-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.glow-card:hover {
  box-shadow: 0 0 20px rgba(16,185,129,0.3), 0 0 40px rgba(16,185,129,0.15), 0 0 60px rgba(16,185,129,0.05);
  border-color: #10b981;
}
.glow-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="glow-card"><h3>Glow Card</h3><p>Illuminated hover</p></div>`,
    isNew: true,
  },
  {
    id: 'neon-card',
    name: 'Neon Card',
    category: 'cards',
    tags: ['neon', 'glow', 'hover', 'dark'],
    difficulty: 'intermediate',
    description: 'Card with neon glow border and text on dark background',
    cssCode: `.neon-card {
  width: 200px;
  padding: 24px;
  background: #0a0a1a;
  border-radius: 12px;
  color: #10b981;
  text-align: center;
  border: 2px solid #10b981;
  transition: box-shadow 0.3s ease, text-shadow 0.3s ease;
  box-shadow: 0 0 5px #10b98133, inset 0 0 5px #10b98111;
}
.neon-card:hover {
  box-shadow: 0 0 10px #10b98166, 0 0 30px #10b98133, 0 0 50px #10b98111, inset 0 0 15px #10b98122;
  text-shadow: 0 0 8px #10b981;
}
.neon-card h3 { margin: 0 0 8px; }`,
    htmlCode: `<div class="neon-card"><h3>Neon Card</h3><p>Electric glow</p></div>`,
    isNew: true,
  },
  {
    id: 'holographic-card',
    name: 'Holographic Card',
    category: 'cards',
    tags: ['holographic', 'rainbow', 'animated', 'shimmer'],
    difficulty: 'advanced',
    description: 'Card with a holographic rainbow shimmer effect',
    cssCode: `.holographic-card {
  width: 200px;
  padding: 24px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.holographic-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ff008020, #ff8c0020, #40e0d020, #ff008020);
  background-size: 200% 200%;
  animation: holo-shift 3s ease infinite;
}
.holographic-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%);
  animation: holo-shine 4s ease infinite;
}
@keyframes holo-shift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes holo-shine { 0% { transform: translateX(-100%) rotate(45deg); } 100% { transform: translateX(100%) rotate(45deg); } }
.holographic-card h3, .holographic-card p { position: relative; z-index: 1; }
.holographic-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="holographic-card"><h3>Holographic</h3><p>Rainbow shimmer</p></div>`,
    isNew: true,
  },
  {
    id: 'metallic-card',
    name: 'Metallic Card',
    category: 'cards',
    tags: ['metallic', 'chrome', 'hover', 'sheen'],
    difficulty: 'intermediate',
    description: 'Card with a metallic chrome sheen effect on hover',
    cssCode: `.metallic-card {
  width: 200px;
  padding: 24px;
  background: linear-gradient(145deg, #2a2a3e, #1a1a2e, #2a2a3e);
  border-radius: 12px;
  color: #c0c0c0;
  text-align: center;
  border: 1px solid #3a3a4e;
  position: relative;
  overflow: hidden;
}
.metallic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}
.metallic-card:hover::before {
  left: 140%;
}
.metallic-card h3 { margin: 0 0 8px; color: #10b981; position: relative; }`,
    htmlCode: `<div class="metallic-card"><h3>Metallic</h3><p>Chrome sheen</p></div>`,
    isNew: true,
  },
  {
    id: 'paper-card',
    name: 'Paper Card',
    category: 'cards',
    tags: ['paper', 'texture', 'minimal', 'flat'],
    difficulty: 'beginner',
    description: 'Card styled like a paper sheet with subtle shadow and fold',
    cssCode: `.paper-card {
  width: 200px;
  padding: 24px;
  background: #f5f5f0;
  border-radius: 2px;
  color: #333;
  text-align: center;
  box-shadow: 2px 3px 8px rgba(0,0,0,0.15);
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.paper-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 20px 20px;
  border-color: transparent transparent #ddd transparent;
}
.paper-card:hover {
  box-shadow: 4px 6px 16px rgba(0,0,0,0.2);
  transform: translateY(-2px);
}
.paper-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="paper-card"><h3>Paper Card</h3><p>Flat & clean</p></div>`,
    isNew: true,
  },
  {
    id: 'frosted-card',
    name: 'Frosted Card',
    category: 'cards',
    tags: ['frosted', 'glass', 'blur', 'translucent'],
    difficulty: 'intermediate',
    description: 'Frosted glass card with backdrop blur and translucency',
    cssCode: `.frosted-card {
  width: 200px;
  padding: 24px;
  background: rgba(26,26,46,0.6);
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid rgba(16,185,129,0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.frosted-card:hover {
  border-color: rgba(16,185,129,0.5);
  box-shadow: 0 8px 32px rgba(16,185,129,0.1);
}
.frosted-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="frosted-card"><h3>Frosted</h3><p>Glass blur</p></div>`,
    isNew: true,
  },
  {
    id: 'mirror-card',
    name: 'Mirror Card',
    category: 'cards',
    tags: ['mirror', 'reflection', 'hover', 'shine'],
    difficulty: 'intermediate',
    description: 'Card with a mirror-like reflection effect on hover',
    cssCode: `.mirror-card {
  width: 200px;
  padding: 24px;
  background: linear-gradient(180deg, #2a2a3e 0%, #1a1a2e 60%, #2a2a3e 100%);
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #3a3a4e;
  position: relative;
  overflow: hidden;
}
.mirror-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), transparent);
  transition: opacity 0.3s ease;
}
.mirror-card:hover::before {
  opacity: 0.3;
}
.mirror-card h3 { margin: 0 0 8px; color: #10b981; position: relative; }`,
    htmlCode: `<div class="mirror-card"><h3>Mirror Card</h3><p>Reflective shine</p></div>`,
    isNew: true,
  },
  {
    id: 'shadow-card',
    name: 'Shadow Card',
    category: 'cards',
    tags: ['shadow', 'hover', 'depth', 'elevation'],
    difficulty: 'beginner',
    description: 'Card with dynamic shadow that lifts on hover',
    cssCode: `.shadow-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.shadow-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(16,185,129,0.15), 0 4px 8px rgba(0,0,0,0.3);
}
.shadow-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="shadow-card"><h3>Shadow Card</h3><p>Lifts on hover</p></div>`,
    isNew: true,
  },
  {
    id: 'depth-card',
    name: 'Depth Card',
    category: 'cards',
    tags: ['depth', '3d', 'layers', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with layered depth effect using multiple pseudo-elements',
    cssCode: `.depth-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  border: 1px solid #2a2a3e;
  z-index: 2;
  transition: transform 0.3s ease;
}
.depth-card::before {
  content: '';
  position: absolute;
  inset: 6px -6px -6px 6px;
  background: #151525;
  border-radius: 12px;
  border: 1px solid #252535;
  z-index: -1;
  transition: transform 0.3s ease;
}
.depth-card:hover {
  transform: translate(4px, -4px);
}
.depth-card:hover::before {
  transform: translate(-4px, 4px);
}
.depth-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="depth-card"><h3>Depth Card</h3><p>Layered 3D</p></div>`,
    isNew: true,
  },
  {
    id: '3d-perspective-card',
    name: '3D Perspective Card',
    category: 'cards',
    tags: ['3d', 'perspective', 'hover', 'transform'],
    difficulty: 'advanced',
    description: 'Card with 3D perspective transform on hover',
    cssCode: `.perspective-card-wrap {
  perspective: 800px;
  width: 200px;
}
.perspective-card {
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.4s ease;
  transform-style: preserve-3d;
}
.perspective-card:hover {
  transform: rotateX(12deg) rotateY(-6deg) translateZ(20px);
  box-shadow: -8px 12px 24px rgba(16,185,129,0.15);
}
.perspective-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="perspective-card-wrap"><div class="perspective-card"><h3>3D Perspective</h3><p>Depth on hover</p></div></div>`,
    isNew: true,
  },
  {
    id: 'cursor-follow-card',
    name: 'Cursor Follow Card',
    category: 'cards',
    tags: ['cursor', 'follow', 'interactive', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with a light spot that follows the cursor position on hover',
    cssCode: `.cursor-follow-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.cursor-follow-card::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.cursor-follow-card:hover::before {
  opacity: 1;
  animation: cursor-pulse 2s ease-in-out infinite;
}
@keyframes cursor-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.3); }
}
.cursor-follow-card h3 { margin: 0 0 8px; color: #10b981; position: relative; }`,
    htmlCode: `<div class="cursor-follow-card"><h3>Cursor Follow</h3><p>Light tracks</p></div>`,
    isNew: true,
  },
  {
    id: 'magnetic-card',
    name: 'Magnetic Card',
    category: 'cards',
    tags: ['magnetic', 'hover', 'interactive', 'attract'],
    difficulty: 'intermediate',
    description: 'Card that appears magnetically attracted to the cursor on hover',
    cssCode: `.magnetic-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.magnetic-card:hover {
  transform: scale(1.06) translateY(-4px);
  box-shadow: 0 12px 28px rgba(16,185,129,0.2), 0 0 0 1px #10b98144;
}
.magnetic-card:active {
  transform: scale(1.02) translateY(-1px);
}
.magnetic-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="magnetic-card"><h3>Magnetic</h3><p>Attracts cursor</p></div>`,
    isNew: true,
  },
  {
    id: 'wave-card',
    name: 'Wave Card',
    category: 'cards',
    tags: ['wave', 'animated', 'hover', 'motion'],
    difficulty: 'intermediate',
    description: 'Card with a wave animation at the bottom on hover',
    cssCode: `.wave-card {
  width: 200px;
  padding: 24px 24px 32px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.wave-card::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: -10%;
  width: 120%;
  height: 20px;
  background: #10b981;
  border-radius: 50% 50% 0 0;
  opacity: 0;
  transition: opacity 0.3s ease, height 0.3s ease;
}
.wave-card:hover::after {
  opacity: 0.3;
  height: 30px;
  animation: wave-motion 1.5s ease-in-out infinite;
}
@keyframes wave-motion {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.wave-card h3 { margin: 0 0 8px; color: #10b981; position: relative; }`,
    htmlCode: `<div class="wave-card"><h3>Wave Card</h3><p>Wavy bottom</p></div>`,
    isNew: true,
  },
  {
    id: 'ripple-card',
    name: 'Ripple Card',
    category: 'cards',
    tags: ['ripple', 'hover', 'animated', 'wave'],
    difficulty: 'intermediate',
    description: 'Card with a ripple effect emanating on hover',
    cssCode: `.ripple-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.ripple-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background: rgba(16,185,129,0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s ease, opacity 0.6s ease;
  opacity: 0;
}
.ripple-card:hover::after {
  transform: translate(-50%, -50%) scale(30);
  opacity: 1;
}
.ripple-card h3 { margin: 0 0 8px; color: #10b981; position: relative; z-index: 1; }`,
    htmlCode: `<div class="ripple-card"><h3>Ripple Card</h3><p>Wave effect</p></div>`,
    isNew: true,
  },
  {
    id: 'gradient-shift-card',
    name: 'Gradient Shift Card',
    category: 'cards',
    tags: ['gradient', 'animated', 'color', 'shift'],
    difficulty: 'intermediate',
    description: 'Card with a continuously shifting gradient background',
    cssCode: `.gradient-shift-card {
  width: 200px;
  padding: 24px;
  background: linear-gradient(135deg, #1a1a2e, #0f2027, #203a43, #1a1a2e);
  background-size: 300% 300%;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  animation: grad-shift 4s ease infinite;
}
@keyframes grad-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-shift-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="gradient-shift-card"><h3>Gradient Shift</h3><p>Color morphing</p></div>`,
    isNew: true,
  },
  {
    id: 'color-cycle-card',
    name: 'Color Cycle Card',
    category: 'cards',
    tags: ['color', 'cycle', 'animated', 'rainbow'],
    difficulty: 'intermediate',
    description: 'Card border that cycles through colors continuously',
    cssCode: `.color-cycle-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 2px solid #10b981;
  animation: color-cycle 6s linear infinite;
}
@keyframes color-cycle {
  0% { border-color: #10b981; }
  25% { border-color: #3b82f6; }
  50% { border-color: #8b5cf6; }
  75% { border-color: #f59e0b; }
  100% { border-color: #10b981; }
}
.color-cycle-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="color-cycle-card"><h3>Color Cycle</h3><p>Cycling border</p></div>`,
    isNew: true,
  },
  {
    id: 'minimal-card',
    name: 'Minimal Card',
    category: 'cards',
    tags: ['minimal', 'clean', 'simple', 'hover'],
    difficulty: 'beginner',
    description: 'Clean minimal card with subtle border highlight on hover',
    cssCode: `.minimal-card {
  width: 200px;
  padding: 24px;
  background: transparent;
  border-radius: 8px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #333;
  transition: border-color 0.3s ease, padding 0.3s ease;
}
.minimal-card:hover {
  border-color: #10b981;
  padding: 28px 24px;
}
.minimal-card h3 { margin: 0 0 8px; color: #10b981; font-weight: 400; }`,
    htmlCode: `<div class="minimal-card"><h3>Minimal</h3><p>Subtle hover</p></div>`,
    isNew: true,
  },
  {
    id: 'brutalist-card',
    name: 'Brutalist Card',
    category: 'cards',
    tags: ['brutalist', 'bold', 'offset', 'hover'],
    difficulty: 'beginner',
    description: 'Bold brutalist card with offset shadow and thick borders',
    cssCode: `.brutalist-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 0;
  color: #e2e8f0;
  text-align: center;
  border: 3px solid #10b981;
  box-shadow: 6px 6px 0 #10b981;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.brutalist-card:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 #10b981;
}
.brutalist-card:active {
  transform: translate(6px, 6px);
  box-shadow: 0 0 0 #10b981;
}
.brutalist-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="brutalist-card"><h3>Brutalist</h3><p>Bold & raw</p></div>`,
    isNew: true,
  },
  {
    id: 'retro-card',
    name: 'Retro Card',
    category: 'cards',
    tags: ['retro', 'vintage', 'nostalgia', 'hover'],
    difficulty: 'beginner',
    description: 'Retro-styled card with vintage colors and dotted border',
    cssCode: `.retro-card {
  width: 200px;
  padding: 24px;
  background: #2d1b4e;
  border-radius: 4px;
  color: #f0c040;
  text-align: center;
  border: 3px dashed #f0c040;
  transition: background 0.3s ease, border-color 0.3s ease;
}
.retro-card:hover {
  background: #3d2b5e;
  border-color: #10b981;
}
.retro-card h3 { margin: 0 0 8px; color: #10b981; font-family: monospace; }`,
    htmlCode: `<div class="retro-card"><h3>Retro Card</h3><p>Vintage vibes</p></div>`,
    isNew: true,
  },
  {
    id: 'neon-border-card',
    name: 'Neon Border Card',
    category: 'cards',
    tags: ['neon', 'border', 'animated', 'glow'],
    difficulty: 'intermediate',
    description: 'Card with an animated neon border that pulses',
    cssCode: `.neon-border-card {
  width: 200px;
  padding: 24px;
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 2px solid #10b981;
  animation: neon-pulse 2s ease-in-out infinite;
}
@keyframes neon-pulse {
  0%, 100% {
    box-shadow: 0 0 5px #10b98144, 0 0 10px #10b98122, inset 0 0 5px #10b98111;
    border-color: #10b981;
  }
  50% {
    box-shadow: 0 0 15px #10b98166, 0 0 30px #10b98133, 0 0 45px #10b98111, inset 0 0 10px #10b98122;
    border-color: #34d399;
  }
}
.neon-border-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="neon-border-card"><h3>Neon Border</h3><p>Pulsing glow</p></div>`,
    isNew: true,
  },
  {
    id: 'animated-border-card-v2',
    name: 'Animated Border Card',
    category: 'cards',
    tags: ['border', 'animated', 'gradient', 'hover'],
    difficulty: 'advanced',
    description: 'Card with an animated gradient border that rotates around the edges',
    cssCode: `.anim-border-card-wrap {
  width: 200px;
  padding: 2px;
  border-radius: 14px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  animation: border-rotate 3s linear infinite;
}
@keyframes border-rotate {
  to { filter: hue-rotate(360deg); }
}
.anim-border-card-inner {
  padding: 22px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
}
.anim-border-card-inner h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="anim-border-card-wrap"><div class="anim-border-card-inner"><h3>Animated Border</h3><p>Rotating gradient</p></div></div>`,
    isNew: true,
  },
  {
    id: 'corner-accent-card',
    name: 'Corner Accent Card',
    category: 'cards',
    tags: ['corner', 'accent', 'hover', 'minimal'],
    difficulty: 'beginner',
    description: 'Card with decorative corner accents that brighten on hover',
    cssCode: `.corner-accent-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  border: 1px solid #2a2a3e;
}
.corner-accent-card::before,
.corner-accent-card::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: #2a2a3e;
  border-style: solid;
  transition: border-color 0.3s ease, width 0.3s ease, height 0.3s ease;
}
.corner-accent-card::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
  border-radius: 12px 0 0 0;
}
.corner-accent-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 12px 0;
}
.corner-accent-card:hover::before,
.corner-accent-card:hover::after {
  border-color: #10b981;
  width: 24px;
  height: 24px;
}
.corner-accent-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="corner-accent-card"><h3>Corner Accent</h3><p>Decorative edges</p></div>`,
    isNew: true,
  },
  {
    id: 'glass-card-v2',
    name: 'Glass Card',
    category: 'cards',
    tags: ['glass', 'morphism', 'blur', 'translucent'],
    difficulty: 'intermediate',
    description: 'Glassmorphism card with blur, transparency, and gradient overlay',
    cssCode: `.glass-card-v2 {
  width: 200px;
  padding: 24px;
  background: rgba(16,185,129,0.08);
  border-radius: 16px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid rgba(16,185,129,0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  transition: background 0.3s ease, border-color 0.3s ease;
}
.glass-card-v2:hover {
  background: rgba(16,185,129,0.15);
  border-color: rgba(16,185,129,0.4);
}
.glass-card-v2 h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="glass-card-v2"><h3>Glass Card</h3><p>Morphism effect</p></div>`,
    isNew: true,
  },
  {
    id: 'hover-tilt-card',
    name: 'Hover Tilt Card',
    category: 'cards',
    tags: ['tilt', 'hover', '3d', 'interactive'],
    difficulty: 'intermediate',
    description: 'Card that tilts towards the viewer on hover with perspective',
    cssCode: `.hover-tilt-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform-style: preserve-3d;
  perspective: 600px;
}
.hover-tilt-card:hover {
  transform: perspective(600px) rotateX(-5deg) rotateY(10deg);
  box-shadow: -8px 8px 20px rgba(16,185,129,0.15);
}
.hover-tilt-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="hover-tilt-card"><h3>Hover Tilt</h3><p>3D lean</p></div>`,
    isNew: true,
  },
  {
    id: 'floating-card',
    name: 'Floating Card',
    category: 'cards',
    tags: ['floating', 'animated', 'hover', 'gentle'],
    difficulty: 'beginner',
    description: 'Card that gently floats up and down continuously',
    cssCode: `.floating-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  animation: float-gentle 3s ease-in-out infinite;
  box-shadow: 0 8px 24px rgba(16,185,129,0.1);
}
@keyframes float-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.floating-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="floating-card"><h3>Floating</h3><p>Gentle hover</p></div>`,
    isNew: true,
  },
  {
    id: 'peel-card',
    name: 'Peel Card',
    category: 'cards',
    tags: ['peel', 'hover', '3d', 'corner'],
    difficulty: 'advanced',
    description: 'Card with a corner that peels back on hover to reveal content underneath',
    cssCode: `.peel-card {
  width: 200px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.peel-card-top {
  position: absolute;
  inset: 0;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  z-index: 2;
  transition: clip-path 0.5s ease;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.peel-card-bottom {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 700;
}
.peel-card:hover .peel-card-top {
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0 60%);
}`,
    htmlCode: `<div class="peel-card"><div class="peel-card-bottom">Underneath</div><div class="peel-card-top">Peel Me</div></div>`,
    isNew: true,
  },
  {
    id: 'swing-card',
    name: 'Swing Card',
    category: 'cards',
    tags: ['swing', 'animated', 'hover', 'pendulum'],
    difficulty: 'intermediate',
    description: 'Card that swings like a pendulum on hover',
    cssCode: `.swing-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transform-origin: top center;
}
.swing-card:hover {
  animation: card-swing 0.8s ease;
}
@keyframes card-swing {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(12deg); }
  40% { transform: rotate(-8deg); }
  60% { transform: rotate(4deg); }
  80% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}
.swing-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="swing-card"><h3>Swing Card</h3><p>Pendulum motion</p></div>`,
    isNew: true,
  },
  {
    id: 'flip-h-card',
    name: 'Horizontal Flip Card',
    category: 'cards',
    tags: ['flip', 'horizontal', '3d', 'hover'],
    difficulty: 'advanced',
    description: 'Card that flips horizontally on hover with 3D transform',
    cssCode: `.flip-h-wrap {
  width: 200px;
  height: 120px;
  perspective: 800px;
}
.flip-h-card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}
.flip-h-wrap:hover .flip-h-card {
  transform: rotateY(180deg);
}
.flip-h-front, .flip-h-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.flip-h-front { background: #1a1a2e; border: 1px solid #10b981; color: #10b981; }
.flip-h-back { background: #10b981; color: #000; transform: rotateY(180deg); }`,
    htmlCode: `<div class="flip-h-wrap"><div class="flip-h-card"><div class="flip-h-front">Front</div><div class="flip-h-back">Back</div></div></div>`,
    isNew: true,
  },
  {
    id: 'flip-v-card',
    name: 'Vertical Flip Card',
    category: 'cards',
    tags: ['flip', 'vertical', '3d', 'hover'],
    difficulty: 'advanced',
    description: 'Card that flips vertically on hover with 3D transform',
    cssCode: `.flip-v-wrap {
  width: 200px;
  height: 120px;
  perspective: 800px;
}
.flip-v-card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}
.flip-v-wrap:hover .flip-v-card {
  transform: rotateX(180deg);
}
.flip-v-front, .flip-v-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.flip-v-front { background: #1a1a2e; border: 1px solid #3b82f6; color: #3b82f6; }
.flip-v-back { background: #3b82f6; color: #fff; transform: rotateX(180deg); }`,
    htmlCode: `<div class="flip-v-wrap"><div class="flip-v-card"><div class="flip-v-front">Front</div><div class="flip-v-back">Back</div></div></div>`,
    isNew: true,
  },
  {
    id: 'rotate-y-card',
    name: 'Rotate Y Card',
    category: 'cards',
    tags: ['rotate', '3d', 'hover', 'perspective'],
    difficulty: 'intermediate',
    description: 'Card that rotates around the Y axis on hover',
    cssCode: `.rotate-y-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  perspective: 600px;
}
.rotate-y-card:hover {
  transform: rotateY(25deg);
  box-shadow: -8px 4px 16px rgba(16,185,129,0.15);
}
.rotate-y-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="rotate-y-card"><h3>Rotate Y</h3><p>Y-axis turn</p></div>`,
    isNew: true,
  },
  {
    id: 'scale-up-card',
    name: 'Scale Up Card',
    category: 'cards',
    tags: ['scale', 'hover', 'zoom', 'enlarge'],
    difficulty: 'beginner',
    description: 'Card that scales up smoothly on hover with a shadow increase',
    cssCode: `.scale-up-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.scale-up-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 28px rgba(16,185,129,0.15);
  border-color: #10b981;
}
.scale-up-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="scale-up-card"><h3>Scale Up</h3><p>Grows on hover</p></div>`,
    isNew: true,
  },
  {
    id: 'dim-card',
    name: 'Dim Card',
    category: 'cards',
    tags: ['dim', 'brightness', 'hover', 'subtle'],
    difficulty: 'beginner',
    description: 'Card that dims/brightens on hover with filter transition',
    cssCode: `.dim-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 1px solid #2a2a3e;
  filter: brightness(0.7);
  transition: filter 0.4s ease, box-shadow 0.4s ease;
}
.dim-card:hover {
  filter: brightness(1.1);
  box-shadow: 0 0 20px rgba(16,185,129,0.15);
}
.dim-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="dim-card"><h3>Dim Card</h3><p>Brightens on hover</p></div>`,
    isNew: true,
  },
  {
    id: 'spotlight-hover-card',
    name: 'Spotlight Hover Card',
    category: 'cards',
    tags: ['spotlight', 'hover', 'glow', 'radial'],
    difficulty: 'intermediate',
    description: 'Card with a radial spotlight that fades in on hover center',
    cssCode: `.spotlight-hover-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  transition: border-color 0.3s ease;
}
.spotlight-hover-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 50%);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease;
}
.spotlight-hover-card:hover::before {
  transform: translate(-50%, -50%) scale(1);
}
.spotlight-hover-card:hover { border-color: #10b98144; }
.spotlight-hover-card h3, .spotlight-hover-card p { position: relative; z-index: 1; }
.spotlight-hover-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="spotlight-hover-card"><h3>Spotlight</h3><p>Center glow</p></div>`,
    isNew: true,
  },
  {
    id: 'border-glow-card',
    name: 'Border Glow Card',
    category: 'cards',
    tags: ['border', 'glow', 'hover', 'neon'],
    difficulty: 'intermediate',
    description: 'Card whose border glows intensely on hover',
    cssCode: `.border-glow-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 2px solid #2a2a3e;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.border-glow-card:hover {
  border-color: #10b981;
  box-shadow: 0 0 8px #10b98144, 0 0 20px #10b98122, inset 0 0 8px #10b98111;
}
.border-glow-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="border-glow-card"><h3>Border Glow</h3><p>Edge illumination</p></div>`,
    isNew: true,
  },
  {
    id: 'shimmer-card',
    name: 'Shimmer Card',
    category: 'cards',
    tags: ['shimmer', 'shine', 'animated', 'hover'],
    difficulty: 'intermediate',
    description: 'Card with a shimmer shine effect sweeping across on hover',
    cssCode: `.shimmer-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.shimmer-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent);
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}
.shimmer-card:hover::after {
  left: 125%;
}
.shimmer-card h3 { margin: 0 0 8px; color: #10b981; position: relative; }`,
    htmlCode: `<div class="shimmer-card"><h3>Shimmer</h3><p>Shine sweep</p></div>`,
    isNew: true,
  },
  {
    id: 'pulse-border-card',
    name: 'Pulse Border Card',
    category: 'cards',
    tags: ['pulse', 'border', 'animated', 'rhythm'],
    difficulty: 'intermediate',
    description: 'Card with a pulsing border that breathes in and out',
    cssCode: `.pulse-border-card {
  width: 200px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 12px;
  color: #e2e8f0;
  text-align: center;
  border: 2px solid #10b98144;
  animation: pulse-border 2s ease-in-out infinite;
}
@keyframes pulse-border {
  0%, 100% {
    border-color: #10b98144;
    box-shadow: 0 0 0 #10b98100;
  }
  50% {
    border-color: #10b981;
    box-shadow: 0 0 12px #10b98133;
  }
}
.pulse-border-card h3 { margin: 0 0 8px; color: #10b981; }`,
    htmlCode: `<div class="pulse-border-card"><h3>Pulse Border</h3><p>Breathing edge</p></div>`,
    isNew: true,
  },

  // ==================== BACKGROUND EFFECTS (50) ====================
  {
    id: 'mesh-gradient-2',
    name: 'Mesh Gradient',
    category: 'backgrounds',
    tags: ['gradient', 'mesh', 'animated', 'colorful'],
    difficulty: 'intermediate',
    description: 'Animated mesh gradient background with smoothly shifting colors',
    cssCode: `.mesh-gradient-2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  background-size: 400% 400%;
  animation: mesh-shift 8s ease infinite;
}
@keyframes mesh-shift {
  0% { background-position: 0% 50%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="mesh-gradient-2"></div>`,
    isNew: true,
  },
  {
    id: 'animated-gradient-2',
    name: 'Animated Gradient',
    category: 'backgrounds',
    tags: ['gradient', 'animated', 'colorful', 'smooth'],
    difficulty: 'beginner',
    description: 'Smoothly animated gradient background with color transitions',
    cssCode: `.animated-gradient-2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(-45deg, #0f0f1a, #1a1a2e, #10b98133, #0f0f1a);
  background-size: 400% 400%;
  animation: anim-grad 6s ease infinite;
}
@keyframes anim-grad {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="animated-gradient-2"></div>`,
    isNew: true,
  },
  {
    id: 'noise-bg',
    name: 'Noise Background',
    category: 'backgrounds',
    tags: ['noise', 'texture', 'grain', 'subtle'],
    difficulty: 'intermediate',
    description: 'Background with a subtle noise texture overlay',
    cssCode: `.noise-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #1a1a2e;
}
.noise-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  opacity: 0.4;
}`,
    htmlCode: `<div class="noise-bg"></div>`,
    isNew: true,
  },
  {
    id: 'wave-bg',
    name: 'Wave Background',
    category: 'backgrounds',
    tags: ['wave', 'animated', 'ocean', 'motion'],
    difficulty: 'intermediate',
    description: 'Animated wave background using CSS gradients',
    cssCode: `.wave-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0f2027;
  overflow: hidden;
}
.wave-bg::before,
.wave-bg::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 60%;
  bottom: -20%;
  border-radius: 40%;
  animation: wave-drift 8s ease-in-out infinite;
}
.wave-bg::before {
  background: rgba(16,185,129,0.15);
  left: -50%;
}
.wave-bg::after {
  background: rgba(16,185,129,0.08);
  left: -30%;
  animation-delay: -4s;
  animation-duration: 10s;
}
@keyframes wave-drift {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}`,
    htmlCode: `<div class="wave-bg"></div>`,
    isNew: true,
  },
  {
    id: 'aurora-v2',
    name: 'Aurora Background',
    category: 'backgrounds',
    tags: ['aurora', 'animated', 'colorful', 'nature'],
    difficulty: 'advanced',
    description: 'Aurora borealis inspired animated gradient background',
    cssCode: `.aurora-v2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.aurora-v2::before {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  top: -50%;
  left: -25%;
  background: conic-gradient(from 0deg, #10b98122, #3b82f622, #8b5cf622, #10b98122);
  filter: blur(60px);
  animation: aurora-rotate 12s linear infinite;
}
.aurora-v2::after {
  content: '';
  position: absolute;
  width: 120%;
  height: 80%;
  bottom: -20%;
  left: -10%;
  background: linear-gradient(180deg, transparent, #0a0a1a);
}
@keyframes aurora-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="aurora-v2"></div>`,
    isNew: true,
  },
  {
    id: 'starfield-bg',
    name: 'Starfield Background',
    category: 'backgrounds',
    tags: ['stars', 'space', 'animated', 'night'],
    difficulty: 'intermediate',
    description: 'Dark starfield background with twinkling stars using radial gradients',
    cssCode: `.starfield-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(ellipse at top, #1a1a2e, #0a0a1a);
}
.starfield-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 30%, #fff 100%, transparent),
    radial-gradient(1px 1px at 40% 70%, #fff 100%, transparent),
    radial-gradient(1px 1px at 60% 10%, #fff 100%, transparent),
    radial-gradient(1.5px 1.5px at 80% 50%, #10b981 100%, transparent),
    radial-gradient(1px 1px at 10% 80%, #fff 100%, transparent),
    radial-gradient(1px 1px at 90% 20%, #fff 100%, transparent),
    radial-gradient(1.5px 1.5px at 50% 50%, #3b82f6 100%, transparent);
  animation: twinkle 3s ease-in-out infinite alternate;
}
@keyframes twinkle {
  0% { opacity: 0.6; }
  100% { opacity: 1; }
}`,
    htmlCode: `<div class="starfield-bg"></div>`,
    isNew: true,
  },
  {
    id: 'particle-field',
    name: 'Particle Field',
    category: 'backgrounds',
    tags: ['particles', 'animated', 'dots', 'floating'],
    difficulty: 'intermediate',
    description: 'Floating particle dots background with subtle animation',
    cssCode: `.particle-field {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
}
.particle-field::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 15% 25%, #10b98155, transparent),
    radial-gradient(2px 2px at 35% 65%, #10b98144, transparent),
    radial-gradient(2px 2px at 55% 15%, #3b82f644, transparent),
    radial-gradient(2px 2px at 75% 85%, #10b98133, transparent),
    radial-gradient(2px 2px at 95% 45%, #8b5cf644, transparent),
    radial-gradient(1.5px 1.5px at 25% 95%, #10b98144, transparent),
    radial-gradient(1.5px 1.5px at 85% 35%, #3b82f633, transparent);
  animation: particle-float 6s ease-in-out infinite;
}
@keyframes particle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}`,
    htmlCode: `<div class="particle-field"></div>`,
    isNew: true,
  },
  {
    id: 'dot-matrix-bg',
    name: 'Dot Matrix',
    category: 'backgrounds',
    tags: ['dots', 'pattern', 'matrix', 'grid'],
    difficulty: 'beginner',
    description: 'Repeating dot matrix pattern background',
    cssCode: `.dot-matrix-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image: radial-gradient(#10b98122 1.5px, transparent 1.5px);
  background-size: 20px 20px;
}`,
    htmlCode: `<div class="dot-matrix-bg"></div>`,
    isNew: true,
  },
  {
    id: 'hex-pattern',
    name: 'Hex Pattern',
    category: 'backgrounds',
    tags: ['hexagon', 'pattern', 'geometric', 'repeating'],
    difficulty: 'intermediate',
    description: 'Hexagonal grid pattern background',
    cssCode: `.hex-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0f0f1a;
  background-image:
    linear-gradient(30deg, #10b98111 12%, transparent 12.5%, transparent 87%, #10b98111 87.5%),
    linear-gradient(150deg, #10b98111 12%, transparent 12.5%, transparent 87%, #10b98111 87.5%),
    linear-gradient(30deg, #10b98111 12%, transparent 12.5%, transparent 87%, #10b98111 87.5%),
    linear-gradient(150deg, #10b98111 12%, transparent 12.5%, transparent 87%, #10b98111 87.5%);
  background-size: 40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px;
}`,
    htmlCode: `<div class="hex-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'diamond-pattern',
    name: 'Diamond Pattern',
    category: 'backgrounds',
    tags: ['diamond', 'pattern', 'geometric', 'repeating'],
    difficulty: 'beginner',
    description: 'Repeating diamond pattern background',
    cssCode: `.diamond-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image:
    linear-gradient(45deg, #10b98115 25%, transparent 25%),
    linear-gradient(-45deg, #10b98115 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #10b98115 75%),
    linear-gradient(-45deg, transparent 75%, #10b98115 75%);
  background-size: 30px 30px;
  background-position: 0 0, 0 15px, 15px -15px, -15px 0;
}`,
    htmlCode: `<div class="diamond-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'chevron-pattern',
    name: 'Chevron Pattern',
    category: 'backgrounds',
    tags: ['chevron', 'pattern', 'geometric', 'zigzag'],
    difficulty: 'beginner',
    description: 'Chevron zigzag pattern background',
    cssCode: `.chevron-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0f0f1a;
  background-image:
    linear-gradient(135deg, #10b98118 25%, transparent 25%),
    linear-gradient(225deg, #10b98118 25%, transparent 25%),
    linear-gradient(315deg, #10b98118 25%, transparent 25%),
    linear-gradient(45deg, #10b98118 25%, transparent 25%);
  background-size: 40px 40px;
  background-position: 20px 0, 20px 0, 0 0, 0 0;
}`,
    htmlCode: `<div class="chevron-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'cross-pattern',
    name: 'Cross Pattern',
    category: 'backgrounds',
    tags: ['cross', 'pattern', 'plus', 'geometric'],
    difficulty: 'beginner',
    description: 'Cross/plus sign repeating pattern background',
    cssCode: `.cross-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image:
    radial-gradient(circle, #10b98122 2px, transparent 2px),
    radial-gradient(circle, #10b98122 2px, transparent 2px);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
}`,
    htmlCode: `<div class="cross-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'circle-pattern',
    name: 'Circle Pattern',
    category: 'backgrounds',
    tags: ['circle', 'pattern', 'geometric', 'rings'],
    difficulty: 'beginner',
    description: 'Concentric circles pattern background',
    cssCode: `.circle-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0f0f1a;
  background-image: radial-gradient(circle, transparent 8px, #10b98110 9px, transparent 10px);
  background-size: 30px 30px;
}`,
    htmlCode: `<div class="circle-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'triangle-pattern',
    name: 'Triangle Pattern',
    category: 'backgrounds',
    tags: ['triangle', 'pattern', 'geometric', 'repeating'],
    difficulty: 'intermediate',
    description: 'Triangle grid pattern background',
    cssCode: `.triangle-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image:
    linear-gradient(60deg, #10b98112 25%, transparent 25.5%),
    linear-gradient(-60deg, #10b98112 25%, transparent 25.5%),
    linear-gradient(60deg, transparent 75%, #10b98112 75.5%),
    linear-gradient(-60deg, transparent 75%, #10b98112 75.5%);
  background-size: 40px 70px;
}`,
    htmlCode: `<div class="triangle-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'line-pattern',
    name: 'Line Pattern',
    category: 'backgrounds',
    tags: ['line', 'pattern', 'stripes', 'diagonal'],
    difficulty: 'beginner',
    description: 'Diagonal line stripe pattern background',
    cssCode: `.line-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    #10b98112 8px,
    #10b98112 9px
  );
}`,
    htmlCode: `<div class="line-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'grid-pattern',
    name: 'Grid Pattern',
    category: 'backgrounds',
    tags: ['grid', 'pattern', 'graph', 'paper'],
    difficulty: 'beginner',
    description: 'Grid paper pattern background',
    cssCode: `.grid-pattern {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image:
    linear-gradient(#10b98110 1px, transparent 1px),
    linear-gradient(90deg, #10b98110 1px, transparent 1px);
  background-size: 24px 24px;
}`,
    htmlCode: `<div class="grid-pattern"></div>`,
    isNew: true,
  },
  {
    id: 'organic-blob',
    name: 'Organic Blob',
    category: 'backgrounds',
    tags: ['organic', 'blob', 'animated', 'morph'],
    difficulty: 'intermediate',
    description: 'Organic blob shape background with gentle animation',
    cssCode: `.organic-blob {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.organic-blob::before {
  content: '';
  position: absolute;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  background: radial-gradient(ellipse, #10b98122, #3b82f611);
  border-radius: 40% 60% 55% 45% / 55% 45% 60% 40%;
  animation: blob-morph 8s ease-in-out infinite;
}
@keyframes blob-morph {
  0%, 100% { border-radius: 40% 60% 55% 45% / 55% 45% 60% 40%; }
  25% { border-radius: 55% 45% 40% 60% / 45% 60% 55% 45%; }
  50% { border-radius: 60% 40% 55% 45% / 40% 55% 45% 60%; }
  75% { border-radius: 45% 55% 60% 40% / 60% 40% 55% 45%; }
}`,
    htmlCode: `<div class="organic-blob"></div>`,
    isNew: true,
  },
  {
    id: 'morph-blob',
    name: 'Morph Blob',
    category: 'backgrounds',
    tags: ['morph', 'blob', 'animated', 'shape'],
    difficulty: 'intermediate',
    description: 'Continuously morphing blob shapes in the background',
    cssCode: `.morph-blob {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0f0f1a;
  overflow: hidden;
}
.morph-blob::before,
.morph-blob::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: morph-move 10s ease-in-out infinite;
}
.morph-blob::before {
  width: 50%;
  height: 50%;
  top: 10%;
  left: 10%;
  background: #10b98122;
}
.morph-blob::after {
  width: 40%;
  height: 40%;
  bottom: 10%;
  right: 10%;
  background: #3b82f622;
  animation-delay: -5s;
  animation-direction: reverse;
}
@keyframes morph-move {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20%, -10%) scale(1.1); }
  50% { transform: translate(-10%, 20%) scale(0.9); }
  75% { transform: translate(-20%, -15%) scale(1.05); }
}`,
    htmlCode: `<div class="morph-blob"></div>`,
    isNew: true,
  },
  {
    id: 'plasma-bg',
    name: 'Plasma Background',
    category: 'backgrounds',
    tags: ['plasma', 'animated', 'colorful', 'psychedelic'],
    difficulty: 'advanced',
    description: 'Psychedelic plasma-like animated background',
    cssCode: `.plasma-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.plasma-bg::before {
  content: '';
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(circle at 30% 30%, #10b98133, transparent 40%),
    radial-gradient(circle at 70% 60%, #3b82f633, transparent 40%),
    radial-gradient(circle at 50% 80%, #8b5cf633, transparent 40%);
  animation: plasma-rotate 15s linear infinite;
}
@keyframes plasma-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="plasma-bg"></div>`,
    isNew: true,
  },
  {
    id: 'lava-bg',
    name: 'Lava Background',
    category: 'backgrounds',
    tags: ['lava', 'animated', 'organic', 'warm'],
    difficulty: 'intermediate',
    description: 'Lava lamp inspired animated background',
    cssCode: `.lava-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #1a0a0a;
  overflow: hidden;
}
.lava-bg::before {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  background: radial-gradient(ellipse, #ef444422, #f59e0b11, transparent);
  border-radius: 30% 70% 60% 40% / 50% 40% 70% 60%;
  animation: lava-move 6s ease-in-out infinite;
}
.lava-bg::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 60%;
  bottom: 5%;
  right: 5%;
  background: radial-gradient(ellipse, #f59e0b18, #ef444411, transparent);
  border-radius: 60% 40% 50% 50% / 40% 60% 40% 60%;
  animation: lava-move 8s ease-in-out infinite reverse;
}
@keyframes lava-move {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(5%, -10%) scale(1.1); }
  66% { transform: translate(-5%, 5%) scale(0.95); }
}`,
    htmlCode: `<div class="lava-bg"></div>`,
    isNew: true,
  },
  {
    id: 'ocean-waves-bg',
    name: 'Ocean Waves Background',
    category: 'backgrounds',
    tags: ['ocean', 'waves', 'animated', 'nature'],
    difficulty: 'intermediate',
    description: 'Calm ocean waves background animation',
    cssCode: `.ocean-waves-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #0a1628 0%, #0f2847 50%, #0a1628 100%);
  overflow: hidden;
}
.ocean-waves-bg::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  height: 40%;
  background: #10b98115;
  border-radius: 50% 50% 0 0;
  animation: ocean-rock 4s ease-in-out infinite;
}
.ocean-waves-bg::after {
  content: '';
  position: absolute;
  bottom: -5%;
  left: -5%;
  width: 110%;
  height: 30%;
  background: #10b98110;
  border-radius: 45% 55% 0 0;
  animation: ocean-rock 5s ease-in-out infinite reverse;
}
@keyframes ocean-rock {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(3%); }
}`,
    htmlCode: `<div class="ocean-waves-bg"></div>`,
    isNew: true,
  },
  {
    id: 'clouds-bg',
    name: 'Clouds Background',
    category: 'backgrounds',
    tags: ['clouds', 'animated', 'nature', 'sky'],
    difficulty: 'intermediate',
    description: 'Drifting clouds background with animated movement',
    cssCode: `.clouds-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #1a1a2e, #2d2d44);
  overflow: hidden;
}
.clouds-bg::before,
.clouds-bg::after {
  content: '';
  position: absolute;
  width: 60%;
  height: 30%;
  background: radial-gradient(ellipse, #ffffff08, transparent);
  border-radius: 50%;
  animation: cloud-drift 12s ease-in-out infinite;
}
.clouds-bg::before {
  top: 20%;
  left: -10%;
}
.clouds-bg::after {
  top: 50%;
  right: -10%;
  animation-delay: -6s;
  animation-duration: 16s;
}
@keyframes cloud-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }
}`,
    htmlCode: `<div class="clouds-bg"></div>`,
    isNew: true,
  },
  {
    id: 'fog-bg',
    name: 'Fog Background',
    category: 'backgrounds',
    tags: ['fog', 'mist', 'animated', 'atmospheric'],
    difficulty: 'intermediate',
    description: 'Atmospheric fog background with drifting mist layers',
    cssCode: `.fog-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #1a1a2e;
  overflow: hidden;
}
.fog-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, #ffffff08, transparent, #ffffff05, transparent);
  background-size: 200% 100%;
  animation: fog-move 10s linear infinite;
}
.fog-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, #ffffff06 50%, transparent 70%);
  background-size: 100% 200%;
  animation: fog-rise 8s linear infinite;
}
@keyframes fog-move { to { background-position: -200% 0; } }
@keyframes fog-rise { to { background-position: 0 -200%; } }`,
    htmlCode: `<div class="fog-bg"></div>`,
    isNew: true,
  },
  {
    id: 'rain-bg-2',
    name: 'Rain Background',
    category: 'backgrounds',
    tags: ['rain', 'animated', 'weather', 'lines'],
    difficulty: 'intermediate',
    description: 'Rain effect background with animated falling lines',
    cssCode: `.rain-bg-2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #0f1520, #1a2030);
  overflow: hidden;
}
.rain-bg-2::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(transparent 90%, #10b98115 90%),
    linear-gradient(transparent 92%, #3b82f610 92%);
  background-size: 3px 30px, 5px 40px;
  animation: rain-fall 0.5s linear infinite;
}
@keyframes rain-fall {
  to { background-position: 0 30px, 3px 40px; }
}`,
    htmlCode: `<div class="rain-bg-2"></div>`,
    isNew: true,
  },
  {
    id: 'snow-bg-2',
    name: 'Snow Background',
    category: 'backgrounds',
    tags: ['snow', 'animated', 'weather', 'winter'],
    difficulty: 'intermediate',
    description: 'Falling snowflakes pattern background with animation',
    cssCode: `.snow-bg-2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #1a1a2e, #0f1020);
  overflow: hidden;
}
.snow-bg-2::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 10% 20%, #ffffff30, transparent),
    radial-gradient(2px 2px at 30% 60%, #ffffff25, transparent),
    radial-gradient(1.5px 1.5px at 50% 30%, #ffffff20, transparent),
    radial-gradient(2px 2px at 70% 80%, #ffffff28, transparent),
    radial-gradient(1.5px 1.5px at 90% 50%, #ffffff22, transparent);
  background-size: 80px 100px;
  animation: snow-fall 4s linear infinite;
}
@keyframes snow-fall {
  to { background-position: 0 100px, 40px 100px; }
}`,
    htmlCode: `<div class="snow-bg-2"></div>`,
    isNew: true,
  },
  {
    id: 'sunset-bg',
    name: 'Sunset Background',
    category: 'backgrounds',
    tags: ['sunset', 'gradient', 'warm', 'nature'],
    difficulty: 'beginner',
    description: 'Warm sunset gradient background',
    cssCode: `.sunset-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #1a0533 0%, #4a1042 25%, #c2412e 50%, #f59e0b 75%, #10b98133 100%);
}`,
    htmlCode: `<div class="sunset-bg"></div>`,
    isNew: true,
  },
  {
    id: 'night-sky-bg',
    name: 'Night Sky Background',
    category: 'backgrounds',
    tags: ['night', 'sky', 'dark', 'stars'],
    difficulty: 'beginner',
    description: 'Deep night sky gradient with subtle star dots',
    cssCode: `.night-sky-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a1a 60%, #050510 100%);
}
.night-sky-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 15% 15%, #fff8, transparent),
    radial-gradient(1px 1px at 45% 35%, #fff6, transparent),
    radial-gradient(1px 1px at 75% 55%, #fff7, transparent),
    radial-gradient(1px 1px at 85% 25%, #fff5, transparent),
    radial-gradient(1.5px 1.5px at 25% 75%, #10b98144, transparent),
    radial-gradient(1px 1px at 65% 85%, #fff6, transparent);
}`,
    htmlCode: `<div class="night-sky-bg"></div>`,
    isNew: true,
  },
  {
    id: 'galaxy-bg',
    name: 'Galaxy Background',
    category: 'backgrounds',
    tags: ['galaxy', 'space', 'animated', 'colorful'],
    difficulty: 'advanced',
    description: 'Animated galaxy background with rotating nebula effect',
    cssCode: `.galaxy-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #050510;
  overflow: hidden;
}
.galaxy-bg::before {
  content: '';
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(ellipse at 30% 40%, #8b5cf622, transparent 50%),
    radial-gradient(ellipse at 60% 60%, #3b82f622, transparent 50%),
    radial-gradient(ellipse at 40% 70%, #10b98122, transparent 40%);
  animation: galaxy-spin 30s linear infinite;
}
.galaxy-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 30%, #fff6, transparent),
    radial-gradient(1px 1px at 50% 60%, #fff5, transparent),
    radial-gradient(1px 1px at 80% 20%, #fff7, transparent),
    radial-gradient(1px 1px at 35% 80%, #fff4, transparent);
}
@keyframes galaxy-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="galaxy-bg"></div>`,
    isNew: true,
  },
  {
    id: 'nebula-bg',
    name: 'Nebula Background',
    category: 'backgrounds',
    tags: ['nebula', 'space', 'animated', 'clouds'],
    difficulty: 'intermediate',
    description: 'Nebula cloud effect background with subtle animation',
    cssCode: `.nebula-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.nebula-bg::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background:
    radial-gradient(ellipse at 25% 30%, #8b5cf618, transparent 50%),
    radial-gradient(ellipse at 75% 70%, #3b82f618, transparent 50%),
    radial-gradient(ellipse at 50% 50%, #10b98111, transparent 60%);
  filter: blur(30px);
  animation: nebula-drift 15s ease-in-out infinite;
}
@keyframes nebula-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(5%, -3%) scale(1.05); }
}`,
    htmlCode: `<div class="nebula-bg"></div>`,
    isNew: true,
  },
  {
    id: 'meteor-bg',
    name: 'Meteor Background',
    category: 'backgrounds',
    tags: ['meteor', 'space', 'animated', 'streaks'],
    difficulty: 'intermediate',
    description: 'Night sky with meteor streak animation',
    cssCode: `.meteor-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.meteor-bg::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  top: 10%;
  left: 70%;
  box-shadow: 0 0 4px #fff, -20px 10px 0 #fff3, -40px 20px 0 #fff2, -60px 30px 0 #fff1;
  animation: meteor-fly 3s linear infinite;
}
.meteor-bg::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 2px;
  background: #10b981;
  top: 30%;
  left: 40%;
  box-shadow: 0 0 4px #10b981, -15px 8px 0 #10b98133, -30px 16px 0 #10b98122, -45px 24px 0 #10b98111;
  animation: meteor-fly 4s linear infinite 1.5s;
}
@keyframes meteor-fly {
  0% { transform: translate(0, 0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translate(-200px, 100px); opacity: 0; }
}`,
    htmlCode: `<div class="meteor-bg"></div>`,
    isNew: true,
  },
  {
    id: 'rainbow-bg',
    name: 'Rainbow Background',
    category: 'backgrounds',
    tags: ['rainbow', 'colorful', 'gradient', 'animated'],
    difficulty: 'beginner',
    description: 'Animated rainbow gradient background',
    cssCode: `.rainbow-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(90deg, #ef444433, #f59e0b33, #10b98133, #3b82f633, #8b5cf633);
  background-size: 300% 100%;
  animation: rainbow-slide 5s linear infinite;
}
@keyframes rainbow-slide {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<div class="rainbow-bg"></div>`,
    isNew: true,
  },
  {
    id: 'prism-bg',
    name: 'Prism Background',
    category: 'backgrounds',
    tags: ['prism', 'light', 'refraction', 'colorful'],
    difficulty: 'intermediate',
    description: 'Prism light refraction effect background',
    cssCode: `.prism-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.prism-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ffffff08);
}
.prism-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 40%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, #ef444418, #f59e0b18, #10b98118, #3b82f618, #8b5cf618);
  filter: blur(20px);
  animation: prism-pulse 4s ease-in-out infinite alternate;
}
@keyframes prism-pulse {
  0% { opacity: 0.6; }
  100% { opacity: 1; }
}`,
    htmlCode: `<div class="prism-bg"></div>`,
    isNew: true,
  },
  {
    id: 'crystal-bg',
    name: 'Crystal Background',
    category: 'backgrounds',
    tags: ['crystal', 'geometric', 'faceted', 'light'],
    difficulty: 'intermediate',
    description: 'Crystal faceted light pattern background',
    cssCode: `.crystal-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  background-image:
    linear-gradient(60deg, #10b98108 25%, transparent 25%),
    linear-gradient(-60deg, #10b98108 25%, transparent 25%),
    linear-gradient(60deg, transparent 75%, #10b98108 75%),
    linear-gradient(-60deg, transparent 75%, #10b98108 75%);
  background-size: 50px 87px;
}
.crystal-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, transparent 30%, #3b82f608 50%, transparent 70%),
    linear-gradient(240deg, transparent 30%, #8b5cf608 50%, transparent 70%);
  animation: crystal-shift 6s ease-in-out infinite alternate;
}
@keyframes crystal-shift {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}`,
    htmlCode: `<div class="crystal-bg"></div>`,
    isNew: true,
  },
  {
    id: 'marble-bg',
    name: 'Marble Background',
    category: 'backgrounds',
    tags: ['marble', 'texture', 'stone', 'veined'],
    difficulty: 'intermediate',
    description: 'Marble texture effect with veined patterns',
    cssCode: `.marble-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #1a1a2e;
  overflow: hidden;
}
.marble-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, transparent 30%, #10b98108 30.5%, transparent 31%),
    linear-gradient(225deg, transparent 45%, #3b82f608 45.5%, transparent 46%),
    linear-gradient(315deg, transparent 60%, #8b5cf608 60.5%, transparent 61%),
    linear-gradient(45deg, transparent 20%, #ffffff05 20.5%, transparent 21%),
    linear-gradient(135deg, transparent 75%, #ffffff05 75.5%, transparent 76%);
  animation: marble-shift 8s ease-in-out infinite alternate;
}
@keyframes marble-shift {
  0% { transform: scale(1); }
  100% { transform: scale(1.02); }
}`,
    htmlCode: `<div class="marble-bg"></div>`,
    isNew: true,
  },
  {
    id: 'water-ripple-bg',
    name: 'Water Ripple Background',
    category: 'backgrounds',
    tags: ['water', 'ripple', 'animated', 'concentric'],
    difficulty: 'intermediate',
    description: 'Concentric water ripple animation background',
    cssCode: `.water-ripple-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a1628;
  overflow: hidden;
}
.water-ripple-bg::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border: 2px solid #10b98122;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple-expand 3s ease-out infinite;
}
.water-ripple-bg::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border: 2px solid #3b82f618;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple-expand 3s ease-out infinite 1.5s;
}
@keyframes ripple-expand {
  0% { width: 10px; height: 10px; opacity: 1; }
  100% { width: 300px; height: 300px; opacity: 0; }
}`,
    htmlCode: `<div class="water-ripple-bg"></div>`,
    isNew: true,
  },
  {
    id: 'sand-dunes-bg',
    name: 'Sand Dunes Background',
    category: 'backgrounds',
    tags: ['sand', 'dunes', 'desert', 'warm'],
    difficulty: 'intermediate',
    description: 'Desert sand dunes pattern background with warm tones',
    cssCode: `.sand-dunes-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #1a1408, #2d2010);
  overflow: hidden;
}
.sand-dunes-bg::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  height: 50%;
  background: #f59e0b15;
  border-radius: 60% 40% 0 0;
  animation: dune-shift 6s ease-in-out infinite;
}
.sand-dunes-bg::after {
  content: '';
  position: absolute;
  bottom: -5%;
  left: 10%;
  width: 80%;
  height: 40%;
  background: #f59e0b10;
  border-radius: 40% 60% 0 0;
  animation: dune-shift 8s ease-in-out infinite reverse;
}
@keyframes dune-shift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}`,
    htmlCode: `<div class="sand-dunes-bg"></div>`,
    isNew: true,
  },
  {
    id: 'forest-bg',
    name: 'Forest Background',
    category: 'backgrounds',
    tags: ['forest', 'nature', 'green', 'trees'],
    difficulty: 'intermediate',
    description: 'Forest-themed background with layered tree silhouettes',
    cssCode: `.forest-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #0a1a0f 0%, #0f2818 60%, #0a1a0f 100%);
  overflow: hidden;
}
.forest-bg::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background:
    linear-gradient(120deg, transparent 20%, #10b98110 20.5%, transparent 21%),
    linear-gradient(240deg, transparent 20%, #10b98110 20.5%, transparent 21%),
    linear-gradient(60deg, transparent 30%, #10b98108 30.5%, transparent 31%),
    linear-gradient(300deg, transparent 30%, #10b98108 30.5%, transparent 31%);
}
.forest-bg::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background:
    linear-gradient(130deg, transparent 15%, #05966915 15.5%, transparent 16%),
    linear-gradient(230deg, transparent 25%, #05966915 25.5%, transparent 26%);
}`,
    htmlCode: `<div class="forest-bg"></div>`,
    isNew: true,
  },
  {
    id: 'gradient-wave-bg',
    name: 'Gradient Wave Background',
    category: 'backgrounds',
    tags: ['gradient', 'wave', 'animated', 'colorful'],
    difficulty: 'intermediate',
    description: 'Animated gradient waves background',
    cssCode: `.gradient-wave-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.gradient-wave-bg::before {
  content: '';
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 120%;
  height: 60%;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 40% 30% 0 0;
  opacity: 0.15;
  animation: gwave 6s ease-in-out infinite;
}
.gradient-wave-bg::after {
  content: '';
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 110%;
  height: 50%;
  background: linear-gradient(90deg, #8b5cf6, #10b981, #3b82f6);
  border-radius: 30% 40% 0 0;
  opacity: 0.1;
  animation: gwave 8s ease-in-out infinite reverse;
}
@keyframes gwave {
  0%, 100% { transform: translateX(0) scaleY(1); }
  50% { transform: translateX(10px) scaleY(1.1); }
}`,
    htmlCode: `<div class="gradient-wave-bg"></div>`,
    isNew: true,
  },
  {
    id: 'pulse-gradient',
    name: 'Pulse Gradient',
    category: 'backgrounds',
    tags: ['pulse', 'gradient', 'animated', 'rhythm'],
    difficulty: 'beginner',
    description: 'Pulsing gradient background that breathes in and out',
    cssCode: `.pulse-gradient {
  width: 100%;
  height: 100%;
  position: relative;
  background: radial-gradient(circle at center, #10b98122, #0a0a1a);
  animation: pulse-grad 3s ease-in-out infinite;
}
@keyframes pulse-grad {
  0%, 100% {
    background: radial-gradient(circle at center, #10b98115, #0a0a1a);
  }
  50% {
    background: radial-gradient(circle at center, #10b98130, #0a0a1a);
  }
}`,
    htmlCode: `<div class="pulse-gradient"></div>`,
    isNew: true,
  },
  {
    id: 'radial-burst',
    name: 'Radial Burst',
    category: 'backgrounds',
    tags: ['radial', 'burst', 'animated', 'explosion'],
    difficulty: 'intermediate',
    description: 'Radial burst pattern background with animated expansion',
    cssCode: `.radial-burst {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.radial-burst::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  background: repeating-conic-gradient(#10b98110 0deg, transparent 3deg, transparent 15deg);
  animation: burst-rotate 20s linear infinite;
}
@keyframes burst-rotate {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}`,
    htmlCode: `<div class="radial-burst"></div>`,
    isNew: true,
  },
  {
    id: 'conic-spin',
    name: 'Conic Spin',
    category: 'backgrounds',
    tags: ['conic', 'gradient', 'animated', 'spin'],
    difficulty: 'intermediate',
    description: 'Spinning conic gradient background',
    cssCode: `.conic-spin {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.conic-spin::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, #10b98118, #3b82f618, #8b5cf618, #f59e0b18, #10b98118);
  animation: conic-rotate 8s linear infinite;
}
.conic-spin::after {
  content: '';
  position: absolute;
  inset: 30%;
  background: #0a0a1a;
  border-radius: 50%;
}
@keyframes conic-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="conic-spin"></div>`,
    isNew: true,
  },
  {
    id: 'mesh-3d',
    name: '3D Mesh',
    category: 'backgrounds',
    tags: ['3d', 'mesh', 'grid', 'perspective'],
    difficulty: 'intermediate',
    description: '3D perspective grid mesh background',
    cssCode: `.mesh-3d {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
  perspective: 400px;
}
.mesh-3d::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  bottom: -100%;
  left: -50%;
  background-image:
    linear-gradient(#10b98115 1px, transparent 1px),
    linear-gradient(90deg, #10b98115 1px, transparent 1px);
  background-size: 40px 40px;
  transform: rotateX(60deg);
  animation: mesh-scroll 3s linear infinite;
}
@keyframes mesh-scroll {
  to { background-position: 0 40px; }
}`,
    htmlCode: `<div class="mesh-3d"></div>`,
    isNew: true,
  },
  {
    id: 'aurora-3',
    name: 'Aurora Variant',
    category: 'backgrounds',
    tags: ['aurora', 'animated', 'nature', 'lights'],
    difficulty: 'advanced',
    description: 'Aurora variant with vertical light bands',
    cssCode: `.aurora-3 {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.aurora-3::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 0%, #10b98118 30%, transparent 50%),
    linear-gradient(180deg, transparent 30%, #3b82f618 50%, transparent 70%),
    linear-gradient(180deg, transparent 50%, #8b5cf618 70%, transparent 90%);
  animation: aurora-wave 5s ease-in-out infinite alternate;
}
.aurora-3::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0a0a1a 0%, transparent 30%, transparent 70%, #0a0a1a 100%);
}
@keyframes aurora-wave {
  0% { transform: translateX(-5%) skewX(-5deg); }
  100% { transform: translateX(5%) skewX(5deg); }
}`,
    htmlCode: `<div class="aurora-3"></div>`,
    isNew: true,
  },
  {
    id: 'gradient-orbs',
    name: 'Gradient Orbs',
    category: 'backgrounds',
    tags: ['gradient', 'orbs', 'animated', 'floating'],
    difficulty: 'intermediate',
    description: 'Floating gradient orbs background',
    cssCode: `.gradient-orbs {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.gradient-orbs::before {
  content: '';
  position: absolute;
  width: 40%;
  height: 40%;
  top: 15%;
  left: 10%;
  background: radial-gradient(circle, #10b98125, transparent 70%);
  border-radius: 50%;
  animation: orb-float 7s ease-in-out infinite;
}
.gradient-orbs::after {
  content: '';
  position: absolute;
  width: 35%;
  height: 35%;
  bottom: 15%;
  right: 10%;
  background: radial-gradient(circle, #3b82f625, transparent 70%);
  border-radius: 50%;
  animation: orb-float 9s ease-in-out infinite reverse;
}
@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(10px, -15px) scale(1.05); }
  66% { transform: translate(-8px, 10px) scale(0.95); }
}`,
    htmlCode: `<div class="gradient-orbs"></div>`,
    isNew: true,
  },
  {
    id: 'floating-shapes',
    name: 'Floating Shapes',
    category: 'backgrounds',
    tags: ['shapes', 'floating', 'animated', 'geometric'],
    difficulty: 'intermediate',
    description: 'Floating geometric shapes background',
    cssCode: `.floating-shapes {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0f0f1a;
  overflow: hidden;
}
.floating-shapes::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  top: 15%;
  left: 20%;
  border: 2px solid #10b98122;
  border-radius: 50%;
  animation: shape-float 6s ease-in-out infinite;
}
.floating-shapes::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 25%;
  right: 25%;
  border: 2px solid #3b82f622;
  transform: rotate(45deg);
  animation: shape-float 8s ease-in-out infinite reverse;
}
@keyframes shape-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
}`,
    htmlCode: `<div class="floating-shapes"></div>`,
    isNew: true,
  },
  {
    id: 'topography-bg',
    name: 'Topography Background',
    category: 'backgrounds',
    tags: ['topography', 'contour', 'lines', 'map'],
    difficulty: 'intermediate',
    description: 'Topographic contour line pattern background',
    cssCode: `.topography-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0f0f1a;
  background-image:
    radial-gradient(ellipse at 30% 40%, #10b98112 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, #3b82f612 0%, transparent 50%);
}
.topography-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, transparent 30px, #10b98108 31px, transparent 32px),
    radial-gradient(circle, transparent 50px, #10b98108 51px, transparent 52px),
    radial-gradient(circle, transparent 70px, #10b98108 71px, transparent 72px);
  background-size: 120px 120px;
  background-position: 0 0;
}`,
    htmlCode: `<div class="topography-bg"></div>`,
    isNew: true,
  },
  {
    id: 'circuit-bg',
    name: 'Circuit Background',
    category: 'backgrounds',
    tags: ['circuit', 'tech', 'lines', 'pattern'],
    difficulty: 'intermediate',
    description: 'Circuit board pattern background',
    cssCode: `.circuit-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image:
    linear-gradient(#10b98110 1px, transparent 1px),
    linear-gradient(90deg, #10b98110 1px, transparent 1px),
    radial-gradient(circle, #10b98122 2px, transparent 2px);
  background-size: 40px 40px, 40px 40px, 40px 40px;
  background-position: 0 0, 0 0, 20px 20px;
}
.circuit-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(45deg, transparent 48%, #10b98110 49%, #10b98110 51%, transparent 52%);
  background-size: 56px 56px;
}`,
    htmlCode: `<div class="circuit-bg"></div>`,
    isNew: true,
  },
  {
    id: 'binary-rain-bg',
    name: 'Binary Rain Background',
    category: 'backgrounds',
    tags: ['binary', 'matrix', 'rain', 'code'],
    difficulty: 'intermediate',
    description: 'Matrix-style binary rain background with vertical scrolling',
    cssCode: `.binary-rain-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.binary-rain-bg::before {
  content: '01 10 01 11 00 10 01 11 10 00 01 10 11 00 10 01 00 11 10 01';
  position: absolute;
  top: -100%;
  left: 5%;
  font-family: monospace;
  font-size: 10px;
  color: #10b98133;
  line-height: 16px;
  white-space: pre-wrap;
  word-break: break-all;
  width: 15%;
  animation: bin-fall 6s linear infinite;
}
.binary-rain-bg::after {
  content: '10 01 11 00 01 10 11 00 10 01 00 11 01 10 11 00 10 01 00 11';
  position: absolute;
  top: -100%;
  right: 10%;
  font-family: monospace;
  font-size: 10px;
  color: #3b82f633;
  line-height: 16px;
  white-space: pre-wrap;
  word-break: break-all;
  width: 15%;
  animation: bin-fall 8s linear infinite 2s;
}
@keyframes bin-fall {
  0% { top: -100%; }
  100% { top: 100%; }
}`,
    htmlCode: `<div class="binary-rain-bg"></div>`,
    isNew: true,
  },
  {
    id: 'wave-gradient',
    name: 'Wave Gradient',
    category: 'backgrounds',
    tags: ['wave', 'gradient', 'animated', 'smooth'],
    difficulty: 'intermediate',
    description: 'Smooth animated wave gradient background',
    cssCode: `.wave-gradient {
  width: 100%;
  height: 100%;
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
}
.wave-gradient::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -50%;
  width: 200%;
  height: 50%;
  background: linear-gradient(90deg, #10b98122, #3b82f622, #8b5cf622);
  border-radius: 50% 50% 0 0;
  animation: wave-sway 4s ease-in-out infinite;
}
.wave-gradient::after {
  content: '';
  position: absolute;
  bottom: -5%;
  left: -30%;
  width: 160%;
  height: 35%;
  background: linear-gradient(90deg, #8b5cf618, #10b98118, #3b82f618);
  border-radius: 45% 55% 0 0;
  animation: wave-sway 5s ease-in-out infinite reverse;
}
@keyframes wave-sway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5%); }
}`,
    htmlCode: `<div class="wave-gradient"></div>`,
    isNew: true,
  },
  {
    id: 'dot-wave-bg',
    name: 'Dot Wave Background',
    category: 'backgrounds',
    tags: ['dots', 'wave', 'animated', 'pattern'],
    difficulty: 'intermediate',
    description: 'Dot pattern with wave animation background',
    cssCode: `.dot-wave-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #0a0a1a;
  background-image: radial-gradient(#10b98120 2px, transparent 2px);
  background-size: 24px 24px;
  animation: dot-wave 3s ease-in-out infinite;
}
@keyframes dot-wave {
  0%, 100% { background-position: 0 0; }
  25% { background-position: 4px 8px; }
  50% { background-position: 0 16px; }
  75% { background-position: -4px 8px; }
}`,
    htmlCode: `<div class="dot-wave-bg"></div>`,
    isNew: true,
  },
];
