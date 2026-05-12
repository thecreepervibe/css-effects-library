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

export const effectsHoverBordersBatch: CSSEffect[] = [
  // ===== HOVER EFFECTS (50) =====
  {
    id: 'tilt-hover',
    name: 'Tilt Hover',
    category: 'hover',
    tags: ['hover', 'tilt', '3d', 'transform'],
    difficulty: 'intermediate',
    description: 'Element tilts in 3D perspective on hover',
    cssCode: `.tilt-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  perspective: 800px;
}
.tilt-hover:hover {
  transform: rotateX(8deg) rotateY(-8deg) scale(1.04);
  box-shadow: -8px 8px 20px rgba(16,185,129,0.2);
}`,
    htmlCode: `<div class="tilt-hover">Hover Me</div>`,
    isNew: true,
  },
  {
    id: 'spotlight-hover',
    name: 'Spotlight Hover',
    category: 'hover',
    tags: ['hover', 'spotlight', 'light', 'radial'],
    difficulty: 'advanced',
    description: 'A spotlight follows the cursor position on hover',
    cssCode: `.spotlight-hover {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 2px solid #2a2a3e;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.spotlight-hover::before {
  content: '';
  position: absolute;
  top: var(--mouse-y, 50%);
  left: var(--mouse-x, 50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.spotlight-hover:hover::before {
  opacity: 1;
}`,
    htmlCode: `<div class="spotlight-hover">Spotlight</div>`,
    isNew: true,
  },
  {
    id: 'magnetic-hover',
    name: 'Magnetic Hover',
    category: 'hover',
    tags: ['hover', 'magnetic', 'attract', 'interactive'],
    difficulty: 'intermediate',
    description: 'Element magnetically pulls toward the cursor on hover',
    cssCode: `.magnetic-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease;
}
.magnetic-hover:hover {
  transform: translateY(-6px) scale(1.06);
  box-shadow: 0 12px 30px rgba(16,185,129,0.35);
}
.magnetic-hover:active {
  transform: translateY(0) scale(0.98);
}`,
    htmlCode: `<div class="magnetic-hover">Magnetic</div>`,
    isNew: true,
  },
  {
    id: 'bounce-hover',
    name: 'Bounce Hover',
    category: 'hover',
    tags: ['hover', 'bounce', 'spring', 'animated'],
    difficulty: 'beginner',
    description: 'Element bounces up and down on hover',
    cssCode: `.bounce-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.bounce-hover:hover {
  animation: bounce-h 0.6s ease;
}
@keyframes bounce-h {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-14px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-7px); }
}`,
    htmlCode: `<div class="bounce-hover">Bounce</div>`,
    isNew: true,
  },
  {
    id: 'shake-hover',
    name: 'Shake Hover',
    category: 'hover',
    tags: ['hover', 'shake', 'vibrate', 'animated'],
    difficulty: 'beginner',
    description: 'Element shakes side to side on hover',
    cssCode: `.shake-hover {
  padding: 24px 40px;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.shake-hover:hover {
  animation: shake-h 0.4s ease;
}
@keyframes shake-h {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
}`,
    htmlCode: `<div class="shake-hover">Shake</div>`,
    isNew: true,
  },
  {
    id: 'pulse-hover',
    name: 'Pulse Hover',
    category: 'hover',
    tags: ['hover', 'pulse', 'scale', 'animated'],
    difficulty: 'beginner',
    description: 'Element pulses with a scale animation on hover',
    cssCode: `.pulse-hover {
  padding: 24px 40px;
  background: #8b5cf6;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.pulse-hover:hover {
  animation: pulse-h 1s ease-in-out infinite;
}
@keyframes pulse-h {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}`,
    htmlCode: `<div class="pulse-hover">Pulse</div>`,
    isNew: true,
  },
  {
    id: 'glow-hover',
    name: 'Glow Hover',
    category: 'hover',
    tags: ['hover', 'glow', 'light', 'shadow'],
    difficulty: 'beginner',
    description: 'Element emits a soft glow on hover',
    cssCode: `.glow-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, text-shadow 0.3s ease;
}
.glow-hover:hover {
  box-shadow: 0 0 15px #10b98155, 0 0 30px #10b98133, 0 0 50px #10b98122;
  text-shadow: 0 0 8px #10b98188;
}`,
    htmlCode: `<div class="glow-hover">Glow</div>`,
    isNew: true,
  },
  {
    id: 'blur-hover',
    name: 'Blur Hover',
    category: 'hover',
    tags: ['hover', 'blur', 'filter', 'focus'],
    difficulty: 'beginner',
    description: 'Element blurs when not hovered and sharpens on hover',
    cssCode: `.blur-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  filter: blur(3px);
  transition: filter 0.4s ease, transform 0.3s ease;
}
.blur-hover:hover {
  filter: blur(0);
  transform: scale(1.05);
}`,
    htmlCode: `<div class="blur-hover">Focus Me</div>`,
    isNew: true,
  },
  {
    id: 'grayscale-hover',
    name: 'Grayscale Hover',
    category: 'hover',
    tags: ['hover', 'grayscale', 'filter', 'color'],
    difficulty: 'beginner',
    description: 'Element is grayscale by default and reveals color on hover',
    cssCode: `.grayscale-hover {
  padding: 24px 40px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  filter: grayscale(100%);
  transition: filter 0.4s ease, transform 0.3s ease;
}
.grayscale-hover:hover {
  filter: grayscale(0);
  transform: scale(1.04);
}`,
    htmlCode: `<div class="grayscale-hover">Color Me</div>`,
    isNew: true,
  },
  {
    id: 'sepia-hover',
    name: 'Sepia Hover',
    category: 'hover',
    tags: ['hover', 'sepia', 'filter', 'vintage'],
    difficulty: 'beginner',
    description: 'Element applies a sepia vintage tone on hover',
    cssCode: `.sepia-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.4s ease;
}
.sepia-hover:hover {
  filter: sepia(100%);
}`,
    htmlCode: `<div class="sepia-hover">Sepia</div>`,
    isNew: true,
  },
  {
    id: 'invert-hover',
    name: 'Invert Hover',
    category: 'hover',
    tags: ['hover', 'invert', 'filter', 'color'],
    difficulty: 'beginner',
    description: 'Element inverts its colors on hover',
    cssCode: `.invert-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.3s ease;
}
.invert-hover:hover {
  filter: invert(100%);
}`,
    htmlCode: `<div class="invert-hover">Invert</div>`,
    isNew: true,
  },
  {
    id: 'brightness-hover',
    name: 'Brightness Hover',
    category: 'hover',
    tags: ['hover', 'brightness', 'filter', 'light'],
    difficulty: 'beginner',
    description: 'Element increases brightness on hover',
    cssCode: `.brightness-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  filter: brightness(0.6);
  transition: filter 0.3s ease;
}
.brightness-hover:hover {
  filter: brightness(1.3);
}`,
    htmlCode: `<div class="brightness-hover">Bright</div>`,
    isNew: true,
  },
  {
    id: 'saturate-hover',
    name: 'Saturate Hover',
    category: 'hover',
    tags: ['hover', 'saturate', 'filter', 'vivid'],
    difficulty: 'beginner',
    description: 'Element becomes vividly saturated on hover',
    cssCode: `.saturate-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  filter: saturate(0.3);
  transition: filter 0.4s ease;
}
.saturate-hover:hover {
  filter: saturate(2.5);
}`,
    htmlCode: `<div class="saturate-hover">Vivid</div>`,
    isNew: true,
  },
  {
    id: 'hue-rotate-hover',
    name: 'Hue Rotate Hover',
    category: 'hover',
    tags: ['hover', 'hue-rotate', 'filter', 'rainbow'],
    difficulty: 'intermediate',
    description: 'Element cycles through color hues on hover',
    cssCode: `.hue-rotate-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.5s ease;
}
.hue-rotate-hover:hover {
  animation: hue-h 1.5s linear infinite;
}
@keyframes hue-h {
  to { filter: hue-rotate(360deg); }
}`,
    htmlCode: `<div class="hue-rotate-hover">Hue</div>`,
    isNew: true,
  },
  {
    id: 'opacity-hover',
    name: 'Opacity Hover',
    category: 'hover',
    tags: ['hover', 'opacity', 'fade', 'transparent'],
    difficulty: 'beginner',
    description: 'Element fades to transparent when not hovered',
    cssCode: `.opacity-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.opacity-hover:hover {
  opacity: 1;
  transform: scale(1.04);
}`,
    htmlCode: `<div class="opacity-hover">Reveal</div>`,
    isNew: true,
  },
  {
    id: 'scale-hover-2',
    name: 'Scale Hover',
    category: 'hover',
    tags: ['hover', 'scale', 'zoom', 'grow'],
    difficulty: 'beginner',
    description: 'Element smoothly scales up on hover',
    cssCode: `.scale-hover-2 {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.scale-hover-2:hover {
  transform: scale(1.15);
  box-shadow: 0 8px 25px rgba(16,185,129,0.3);
}`,
    htmlCode: `<div class="scale-hover-2">Scale</div>`,
    isNew: true,
  },
  {
    id: 'rotate-hover',
    name: 'Rotate Hover',
    category: 'hover',
    tags: ['hover', 'rotate', 'spin', 'transform'],
    difficulty: 'beginner',
    description: 'Element rotates slightly on hover',
    cssCode: `.rotate-hover {
  padding: 24px 40px;
  background: #f59e0b;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.4s ease;
}
.rotate-hover:hover {
  transform: rotate(8deg) scale(1.05);
}`,
    htmlCode: `<div class="rotate-hover">Rotate</div>`,
    isNew: true,
  },
  {
    id: 'skew-hover',
    name: 'Skew Hover',
    category: 'hover',
    tags: ['hover', 'skew', 'transform', 'perspective'],
    difficulty: 'intermediate',
    description: 'Element skews on hover creating a dynamic angle',
    cssCode: `.skew-hover {
  padding: 24px 40px;
  background: #ec4899;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.skew-hover:hover {
  transform: skewX(-8deg) skewY(2deg);
}`,
    htmlCode: `<div class="skew-hover">Skew</div>`,
    isNew: true,
  },
  {
    id: 'translate-hover',
    name: 'Translate Hover',
    category: 'hover',
    tags: ['hover', 'translate', 'move', 'slide'],
    difficulty: 'beginner',
    description: 'Element slides diagonally on hover',
    cssCode: `.translate-hover {
  padding: 24px 40px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.translate-hover:hover {
  transform: translate(10px, -10px);
}`,
    htmlCode: `<div class="translate-hover">Slide</div>`,
    isNew: true,
  },
  {
    id: 'flip-hover',
    name: 'Flip Hover',
    category: 'hover',
    tags: ['hover', 'flip', '3d', 'rotate'],
    difficulty: 'intermediate',
    description: 'Element flips horizontally to reveal the back face on hover',
    cssCode: `.flip-hover-wrap {
  perspective: 600px;
  display: inline-block;
}
.flip-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  position: relative;
}
.flip-hover::after {
  content: 'Flipped!';
  position: absolute;
  inset: 0;
  background: #3b82f6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}
.flip-hover-wrap:hover .flip-hover {
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="flip-hover-wrap"><div class="flip-hover">Hover Me</div></div>`,
    isNew: true,
  },
  {
    id: 'fold-hover',
    name: 'Fold Hover',
    category: 'hover',
    tags: ['hover', 'fold', '3d', 'paper'],
    difficulty: 'advanced',
    description: 'Element appears to fold like paper on hover',
    cssCode: `.fold-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 4px 4px 0 0;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  transform-origin: bottom center;
  transition: transform 0.4s ease;
  perspective: 400px;
}
.fold-hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #059669;
  border-radius: 0 0 4px 4px;
  transform-origin: bottom;
  transform: rotateX(0deg);
  transition: transform 0.4s ease;
  z-index: -1;
}
.fold-hover:hover {
  transform: rotateX(30deg);
}
.fold-hover:hover::after {
  transform: rotateX(-30deg);
}`,
    htmlCode: `<div class="fold-hover">Fold</div>`,
    isNew: true,
  },
  {
    id: 'reveal-hover',
    name: 'Reveal Hover',
    category: 'hover',
    tags: ['hover', 'reveal', 'mask', 'hidden'],
    difficulty: 'intermediate',
    description: 'Hidden content is revealed with a sliding mask on hover',
    cssCode: `.reveal-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #2a2a3e;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.reveal-hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b981;
  transform: translateX(-101%);
  transition: transform 0.4s ease;
  z-index: 0;
}
.reveal-hover:hover::before {
  transform: translateX(0);
}
.reveal-hover span {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}
.reveal-hover:hover span {
  color: #000;
}`,
    htmlCode: `<div class="reveal-hover"><span>Reveal</span></div>`,
    isNew: true,
  },
  {
    id: 'expand-hover',
    name: 'Expand Hover',
    category: 'hover',
    tags: ['hover', 'expand', 'grow', 'width'],
    difficulty: 'beginner',
    description: 'Element expands its padding and letter-spacing on hover',
    cssCode: `.expand-hover {
  padding: 24px 32px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: padding 0.3s ease, letter-spacing 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;
}
.expand-hover:hover {
  padding: 24px 48px;
  letter-spacing: 3px;
  box-shadow: 0 4px 20px rgba(16,185,129,0.3);
}`,
    htmlCode: `<div class="expand-hover">Expand</div>`,
    isNew: true,
  },
  {
    id: 'shrink-hover',
    name: 'Shrink Hover',
    category: 'hover',
    tags: ['hover', 'shrink', 'compact', 'scale'],
    difficulty: 'beginner',
    description: 'Element shrinks down on hover',
    cssCode: `.shrink-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.shrink-hover:hover {
  transform: scale(0.85);
}`,
    htmlCode: `<div class="shrink-hover">Shrink</div>`,
    isNew: true,
  },
  {
    id: 'zoom-hover',
    name: 'Zoom Hover',
    category: 'hover',
    tags: ['hover', 'zoom', 'scale', 'magnify'],
    difficulty: 'beginner',
    description: 'Element zooms in with a slight overshoot on hover',
    cssCode: `.zoom-hover {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.zoom-hover:hover {
  transform: scale(1.2);
}`,
    htmlCode: `<div class="zoom-hover">Zoom</div>`,
    isNew: true,
  },
  {
    id: 'underline-hover-2',
    name: 'Underline Hover',
    category: 'hover',
    tags: ['hover', 'underline', 'text', 'animated'],
    difficulty: 'beginner',
    description: 'Underline grows from center on hover',
    cssCode: `.underline-hover-2 {
  padding: 24px 40px;
  background: transparent;
  color: #10b981;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.underline-hover-2::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 3px;
  background: #10b981;
  transition: width 0.3s ease, left 0.3s ease;
  border-radius: 2px;
}
.underline-hover-2:hover::after {
  width: 80%;
  left: 10%;
}`,
    htmlCode: `<div class="underline-hover-2">Underline</div>`,
    isNew: true,
  },
  {
    id: 'overline-hover',
    name: 'Overline Hover',
    category: 'hover',
    tags: ['hover', 'overline', 'text', 'top'],
    difficulty: 'beginner',
    description: 'Overline appears from the left on hover',
    cssCode: `.overline-hover {
  padding: 24px 40px;
  background: transparent;
  color: #10b981;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.overline-hover::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 0;
  width: 0;
  height: 3px;
  background: #3b82f6;
  transition: width 0.3s ease;
  border-radius: 2px;
}
.overline-hover:hover::before {
  width: 100%;
}`,
    htmlCode: `<div class="overline-hover">Overline</div>`,
    isNew: true,
  },
  {
    id: 'strikethrough-hover',
    name: 'Strikethrough Hover',
    category: 'hover',
    tags: ['hover', 'strikethrough', 'text', 'line'],
    difficulty: 'beginner',
    description: 'A strikethrough line grows across text on hover',
    cssCode: `.strikethrough-hover {
  padding: 24px 40px;
  background: transparent;
  color: #ef4444;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.strikethrough-hover::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  height: 3px;
  background: #ef4444;
  transition: width 0.3s ease;
}
.strikethrough-hover:hover::after {
  width: 100%;
}`,
    htmlCode: `<div class="strikethrough-hover">Strike</div>`,
    isNew: true,
  },
  {
    id: 'border-draw-hover',
    name: 'Border Draw Hover',
    category: 'hover',
    tags: ['hover', 'border', 'draw', 'animated'],
    difficulty: 'intermediate',
    description: 'Border draws itself around the element on hover',
    cssCode: `.border-draw-hover {
  padding: 24px 40px;
  background: transparent;
  color: #10b981;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.border-draw-hover::before,
.border-draw-hover::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 12px;
}
.border-draw-hover::before {
  border-top-color: #10b981;
  border-right-color: #10b981;
  transition: border-color 0s ease 0.3s;
}
.border-draw-hover::after {
  border-bottom-color: #3b82f6;
  border-left-color: #3b82f6;
  transition: border-color 0s ease 0.3s;
}
.border-draw-hover:hover::before {
  border-top-color: #10b981;
  border-right-color: #10b981;
  transition: border-color 0.3s ease 0s, border-bottom-color 0.3s ease 0.3s, border-left-color 0.3s ease 0.3s;
  border-bottom-color: #10b981;
  border-left-color: #10b981;
}
.border-draw-hover:hover::after {
  border-bottom-color: #3b82f6;
  border-left-color: #3b82f6;
  transition: border-color 0.3s ease 0s, border-top-color 0.3s ease 0.3s, border-right-color 0.3s ease 0.3s;
  border-top-color: #3b82f6;
  border-right-color: #3b82f6;
}`,
    htmlCode: `<div class="border-draw-hover">Draw</div>`,
    isNew: true,
  },
  {
    id: 'fill-hover',
    name: 'Fill Hover',
    category: 'hover',
    tags: ['hover', 'fill', 'background', 'animated'],
    difficulty: 'beginner',
    description: 'Element fills with color from bottom on hover',
    cssCode: `.fill-hover {
  padding: 24px 40px;
  background: transparent;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.fill-hover::before {
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
.fill-hover:hover::before {
  height: 100%;
}
.fill-hover:hover {
  color: #000;
}`,
    htmlCode: `<div class="fill-hover">Fill</div>`,
    isNew: true,
  },
  {
    id: 'color-shift-hover',
    name: 'Color Shift Hover',
    category: 'hover',
    tags: ['hover', 'color', 'shift', 'transition'],
    difficulty: 'beginner',
    description: 'Element smoothly shifts its color on hover',
    cssCode: `.color-shift-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.5s ease, color 0.5s ease;
}
.color-shift-hover:hover {
  background: #8b5cf6;
  color: #fff;
}`,
    htmlCode: `<div class="color-shift-hover">Shift</div>`,
    isNew: true,
  },
  {
    id: 'gradient-hover',
    name: 'Gradient Hover',
    category: 'hover',
    tags: ['hover', 'gradient', 'background', 'colorful'],
    difficulty: 'intermediate',
    description: 'Background gradient shifts position on hover',
    cssCode: `.gradient-hover {
  padding: 24px 40px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  background-position: 0% 50%;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-position 0.5s ease, transform 0.3s ease;
}
.gradient-hover:hover {
  background-position: 100% 50%;
  transform: scale(1.04);
}`,
    htmlCode: `<div class="gradient-hover">Gradient</div>`,
    isNew: true,
  },
  {
    id: 'shadow-hover-2',
    name: 'Shadow Hover',
    category: 'hover',
    tags: ['hover', 'shadow', 'depth', 'elevation'],
    difficulty: 'beginner',
    description: 'Element gains a dramatic shadow on hover',
    cssCode: `.shadow-hover-2 {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.shadow-hover-2:hover {
  box-shadow: 0 20px 60px rgba(16,185,129,0.3), 0 10px 20px rgba(0,0,0,0.2);
  transform: translateY(-6px);
}`,
    htmlCode: `<div class="shadow-hover-2">Shadow</div>`,
    isNew: true,
  },
  {
    id: 'lift-hover-2',
    name: 'Lift Hover',
    category: 'hover',
    tags: ['hover', 'lift', 'float', 'elevate'],
    difficulty: 'beginner',
    description: 'Element lifts up with a subtle shadow on hover',
    cssCode: `.lift-hover-2 {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.lift-hover-2:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 32px rgba(16,185,129,0.25), 0 8px 16px rgba(0,0,0,0.15);
}`,
    htmlCode: `<div class="lift-hover-2">Lift</div>`,
    isNew: true,
  },
  {
    id: 'press-hover',
    name: 'Press Hover',
    category: 'hover',
    tags: ['hover', 'press', '3d', 'depth'],
    difficulty: 'beginner',
    description: 'Element appears to press down into the surface on hover',
    cssCode: `.press-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 6px 0 #059669, 0 8px 14px rgba(0,0,0,0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.press-hover:hover {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #059669, 0 4px 8px rgba(0,0,0,0.3);
}`,
    htmlCode: `<div class="press-hover">Press</div>`,
    isNew: true,
  },
  {
    id: 'sink-hover',
    name: 'Sink Hover',
    category: 'hover',
    tags: ['hover', 'sink', 'depth', 'depress'],
    difficulty: 'intermediate',
    description: 'Element sinks into the background with inset shadow on hover',
    cssCode: `.sink-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
}
.sink-hover:hover {
  box-shadow: inset 0 4px 12px rgba(0,0,0,0.5);
  transform: translateY(3px);
  background: #0f0f1a;
}`,
    htmlCode: `<div class="sink-hover">Sink</div>`,
    isNew: true,
  },
  {
    id: 'float-hover',
    name: 'Float Hover',
    category: 'hover',
    tags: ['hover', 'float', 'levitate', 'air'],
    difficulty: 'intermediate',
    description: 'Element gently floats up and down on hover',
    cssCode: `.float-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}
.float-hover:hover {
  animation: float-h 1.5s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(16,185,129,0.25);
}
@keyframes float-h {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`,
    htmlCode: `<div class="float-hover">Float</div>`,
    isNew: true,
  },
  {
    id: 'swing-hover',
    name: 'Swing Hover',
    category: 'hover',
    tags: ['hover', 'swing', 'pendulum', 'animated'],
    difficulty: 'intermediate',
    description: 'Element swings like a pendulum on hover',
    cssCode: `.swing-hover {
  padding: 24px 40px;
  background: #f59e0b;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transform-origin: top center;
}
.swing-hover:hover {
  animation: swing-h 0.8s ease;
}
@keyframes swing-h {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<div class="swing-hover">Swing</div>`,
    isNew: true,
  },
  {
    id: 'spin-hover',
    name: 'Spin Hover',
    category: 'hover',
    tags: ['hover', 'spin', 'rotate', 'animated'],
    difficulty: 'intermediate',
    description: 'Element spins 360 degrees on hover',
    cssCode: `.spin-hover {
  padding: 24px 40px;
  background: #8b5cf6;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.spin-hover:hover {
  transform: rotate(360deg);
}`,
    htmlCode: `<div class="spin-hover">Spin</div>`,
    isNew: true,
  },
  {
    id: 'elastic-hover',
    name: 'Elastic Hover',
    category: 'hover',
    tags: ['hover', 'elastic', 'spring', 'bounce'],
    difficulty: 'intermediate',
    description: 'Element scales up with an elastic spring overshoot on hover',
    cssCode: `.elastic-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.elastic-hover:hover {
  transform: scale(1.2);
}
.elastic-hover:active {
  transform: scale(0.9);
}`,
    htmlCode: `<div class="elastic-hover">Elastic</div>`,
    isNew: true,
  },
  {
    id: 'rubber-hover',
    name: 'Rubber Hover',
    category: 'hover',
    tags: ['hover', 'rubber', 'stretch', 'squish'],
    difficulty: 'intermediate',
    description: 'Element stretches like rubber on hover',
    cssCode: `.rubber-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.rubber-hover:hover {
  animation: rubber-h 0.6s ease;
}
@keyframes rubber-h {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
}`,
    htmlCode: `<div class="rubber-hover">Rubber</div>`,
    isNew: true,
  },
  {
    id: 'jelly-hover',
    name: 'Jelly Hover',
    category: 'hover',
    tags: ['hover', 'jelly', 'wobble', 'squish'],
    difficulty: 'intermediate',
    description: 'Element wobbles like jelly on hover',
    cssCode: `.jelly-hover {
  padding: 24px 40px;
  background: #ec4899;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.jelly-hover:hover {
  animation: jelly-h 0.5s ease;
}
@keyframes jelly-h {
  0% { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
  100% { transform: scale(1, 1); }
}`,
    htmlCode: `<div class="jelly-hover">Jelly</div>`,
    isNew: true,
  },
  {
    id: 'wave-hover',
    name: 'Wave Hover',
    category: 'hover',
    tags: ['hover', 'wave', 'animated', 'organic'],
    difficulty: 'advanced',
    description: 'Element has a wave distortion on hover',
    cssCode: `.wave-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.wave-hover::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
  transform: rotate(0deg);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.wave-hover:hover::after {
  opacity: 1;
  animation: wave-h-spin 1s linear infinite;
}
@keyframes wave-h-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="wave-hover">Wave</div>`,
    isNew: true,
  },
  {
    id: 'ripple-hover-2',
    name: 'Ripple Hover',
    category: 'hover',
    tags: ['hover', 'ripple', 'wave', 'expanding'],
    difficulty: 'intermediate',
    description: 'Ripple effect expands outward from center on hover',
    cssCode: `.ripple-hover-2 {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.ripple-hover-2::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
}
.ripple-hover-2:hover::after {
  transform: translate(-50%, -50%) scale(50);
  opacity: 1;
}`,
    htmlCode: `<div class="ripple-hover-2">Ripple</div>`,
    isNew: true,
  },
  {
    id: 'cursor-hover',
    name: 'Cursor Hover',
    category: 'hover',
    tags: ['hover', 'cursor', 'pointer', 'custom'],
    difficulty: 'intermediate',
    description: 'Custom cursor effect with trailing circle on hover',
    cssCode: `.cursor-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: none;
  position: relative;
  transition: border-color 0.3s ease;
}
.cursor-hover::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid #10b981;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}
.cursor-hover:hover::before {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.cursor-hover:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}`,
    htmlCode: `<div class="cursor-hover">Custom</div>`,
    isNew: true,
  },
  {
    id: 'magnet-hover',
    name: 'Magnet Hover',
    category: 'hover',
    tags: ['hover', 'magnet', 'attract', 'pull'],
    difficulty: 'intermediate',
    description: 'Element appears magnetically attracted with a stretch effect on hover',
    cssCode: `.magnet-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
}
.magnet-hover:hover {
  transform: scaleX(1.1) scaleY(0.95);
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(16,185,129,0.4), 0 0 40px rgba(16,185,129,0.15);
}`,
    htmlCode: `<div class="magnet-hover">Magnet</div>`,
    isNew: true,
  },
  {
    id: 'snap-hover',
    name: 'Snap Hover',
    category: 'hover',
    tags: ['hover', 'snap', 'quick', 'instant'],
    difficulty: 'beginner',
    description: 'Element snaps to a new state instantly on hover',
    cssCode: `.snap-hover {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: none;
}
.snap-hover:hover {
  background: #10b981;
  color: #000;
  border-color: #059669;
  transform: scale(1.05);
}`,
    htmlCode: `<div class="snap-hover">Snap</div>`,
    isNew: true,
  },
  {
    id: 'flash-hover',
    name: 'Flash Hover',
    category: 'hover',
    tags: ['hover', 'flash', 'light', 'bright'],
    difficulty: 'intermediate',
    description: 'Element flashes brightly on hover then settles',
    cssCode: `.flash-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.flash-hover::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.8);
  opacity: 0;
  transition: opacity 0.1s ease;
}
.flash-hover:hover::after {
  animation: flash-h 0.4s ease;
}
@keyframes flash-h {
  0% { opacity: 0; }
  30% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="flash-hover">Flash</div>`,
    isNew: true,
  },
  {
    id: 'pop-hover',
    name: 'Pop Hover',
    category: 'hover',
    tags: ['hover', 'pop', 'scale', 'overshoot'],
    difficulty: 'beginner',
    description: 'Element pops up with an overshoot on hover',
    cssCode: `.pop-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.pop-hover:hover {
  transform: scale(1.2);
  box-shadow: 0 0 0 8px rgba(16,185,129,0.2);
}`,
    htmlCode: `<div class="pop-hover">Pop</div>`,
    isNew: true,
  },
  {
    id: 'wobble-hover',
    name: 'Wobble Hover',
    category: 'hover',
    tags: ['hover', 'wobble', 'shake', 'animated'],
    difficulty: 'intermediate',
    description: 'Element wobbles back and forth on hover',
    cssCode: `.wobble-hover {
  padding: 24px 40px;
  background: #10b981;
  color: #000;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.wobble-hover:hover {
  animation: wobble-h 0.6s ease;
}
@keyframes wobble-h {
  0% { transform: translateX(0); }
  15% { transform: translateX(-8px) rotate(-2deg); }
  30% { transform: translateX(6px) rotate(1.5deg); }
  45% { transform: translateX(-4px) rotate(-1deg); }
  60% { transform: translateX(3px) rotate(0.5deg); }
  75% { transform: translateX(-1px) rotate(-0.3deg); }
  100% { transform: translateX(0) rotate(0); }
}`,
    htmlCode: `<div class="wobble-hover">Wobble</div>`,
    isNew: true,
  },

  // ===== BORDER EFFECTS (50) =====
  {
    id: 'animated-border-2',
    name: 'Animated Border',
    category: 'borders',
    tags: ['border', 'animated', 'gradient', 'spin'],
    difficulty: 'advanced',
    description: 'Spinning conic gradient border animation',
    cssCode: `.animated-border-2 {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  z-index: 1;
}
.animated-border-2::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  z-index: -2;
  animation: ab2-spin 2s linear infinite;
}
.animated-border-2::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes ab2-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="animated-border-2">Animated</div>`,
    isNew: true,
  },
  {
    id: 'animated-border-3',
    name: 'Animated Border Pulse',
    category: 'borders',
    tags: ['border', 'animated', 'pulse', 'glow'],
    difficulty: 'intermediate',
    description: 'Border that pulses with a glowing animation',
    cssCode: `.animated-border-3 {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: ab3-pulse 2s ease-in-out infinite;
}
@keyframes ab3-pulse {
  0%, 100% {
    border-color: #10b981;
    box-shadow: 0 0 5px #10b98133;
  }
  50% {
    border-color: #3b82f6;
    box-shadow: 0 0 20px #3b82f655, 0 0 40px #3b82f622;
  }
}`,
    htmlCode: `<div class="animated-border-3">Pulse</div>`,
    isNew: true,
  },
  {
    id: 'animated-border-4',
    name: 'Animated Border March',
    category: 'borders',
    tags: ['border', 'animated', 'marching', 'ants'],
    difficulty: 'intermediate',
    description: 'Marching ants style animated border',
    cssCode: `.animated-border-4 {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 2px dashed #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: ab4-march 0.6s linear infinite;
}
@keyframes ab4-march {
  to { border-dash-offset: 16px; }
}`,
    htmlCode: `<div class="animated-border-4">Marching</div>`,
    isNew: true,
  },
  {
    id: 'gradient-border-2',
    name: 'Gradient Border',
    category: 'borders',
    tags: ['border', 'gradient', 'colorful', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated gradient border using background-clip technique',
    cssCode: `.gradient-border-2 {
  padding: 2px;
  border-radius: 14px;
  background: linear-gradient(270deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #10b981);
  background-size: 300% 300%;
  animation: gb2-move 4s ease infinite;
  display: inline-block;
}
.gradient-border-2-inner {
  padding: 22px 38px;
  background: #0f0f1a;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 16px;
  display: block;
}
@keyframes gb2-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="gradient-border-2"><div class="gradient-border-2-inner">Gradient</div></div>`,
    isNew: true,
  },
  {
    id: 'dashed-border-anim',
    name: 'Dashed Border Animation',
    category: 'borders',
    tags: ['border', 'dashed', 'animated', 'offset'],
    difficulty: 'intermediate',
    description: 'Dashed border with animated dash offset',
    cssCode: `.dashed-border-anim {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px dashed #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
}
.dashed-border-anim::before {
  content: '';
  position: absolute;
  inset: -3px;
  border: 3px dashed #3b82f6;
  border-radius: 14px;
  animation: dba-rotate 8s linear infinite;
}
@keyframes dba-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="dashed-border-anim">Dashed</div>`,
    isNew: true,
  },
  {
    id: 'border-spin-2',
    name: 'Border Spin',
    category: 'borders',
    tags: ['border', 'spin', 'conic', 'gradient'],
    difficulty: 'advanced',
    description: 'Fast spinning gradient border using conic gradient',
    cssCode: `.border-spin-2 {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  z-index: 1;
}
.border-spin-2::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 15px;
  background: conic-gradient(from 0deg, transparent 60%, #10b981, transparent 100%);
  z-index: -2;
  animation: bs2-spin 1.5s linear infinite;
}
.border-spin-2::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes bs2-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="border-spin-2">Spin</div>`,
    isNew: true,
  },
  {
    id: 'border-draw-2',
    name: 'Border Draw',
    category: 'borders',
    tags: ['border', 'draw', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Border draws itself progressively on hover',
    cssCode: `.border-draw-2 {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
}
.border-draw-2::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 12px;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  transition: clip-path 0.6s ease;
}
.border-draw-2:hover::before {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}`,
    htmlCode: `<div class="border-draw-2">Draw</div>`,
    isNew: true,
  },
  {
    id: 'border-fill',
    name: 'Border Fill',
    category: 'borders',
    tags: ['border', 'fill', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Border fills with color on hover starting from bottom-left',
    cssCode: `.border-fill {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 2px solid #2a2a3e;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.border-fill::before {
  content: '';
  position: absolute;
  inset: -2px;
  border: 2px solid #10b981;
  border-radius: 14px;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.5s ease;
}
.border-fill:hover::before {
  clip-path: inset(0 0 0 0);
}`,
    htmlCode: `<div class="border-fill">Fill</div>`,
    isNew: true,
  },
  {
    id: 'border-wipe',
    name: 'Border Wipe',
    category: 'borders',
    tags: ['border', 'wipe', 'hover', 'clean'],
    difficulty: 'intermediate',
    description: 'Border wipes in from left to right on hover',
    cssCode: `.border-wipe {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.border-wipe::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 12px;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.4s ease;
}
.border-wipe:hover::before {
  clip-path: inset(0 0 0 0);
}`,
    htmlCode: `<div class="border-wipe">Wipe</div>`,
    isNew: true,
  },
  {
    id: 'border-pulse',
    name: 'Border Pulse',
    category: 'borders',
    tags: ['border', 'pulse', 'animated', 'glow'],
    difficulty: 'intermediate',
    description: 'Border pulses with alternating thickness and glow',
    cssCode: `.border-pulse {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bp-anim 2s ease-in-out infinite;
}
@keyframes bp-anim {
  0%, 100% {
    border-width: 2px;
    box-shadow: 0 0 5px #10b98133;
  }
  50% {
    border-width: 4px;
    box-shadow: 0 0 20px #10b98166, 0 0 40px #10b98133;
  }
}`,
    htmlCode: `<div class="border-pulse">Pulse</div>`,
    isNew: true,
  },
  {
    id: 'border-glow-2',
    name: 'Border Glow',
    category: 'borders',
    tags: ['border', 'glow', 'neon', 'light'],
    difficulty: 'intermediate',
    description: 'Border with a soft neon glow effect',
    cssCode: `.border-glow-2 {
  padding: 24px 40px;
  background: #0a0a1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 0 8px #10b98144, inset 0 0 8px #10b98122;
  transition: box-shadow 0.3s ease, text-shadow 0.3s ease;
}
.border-glow-2:hover {
  box-shadow: 0 0 15px #10b98188, 0 0 30px #10b98144, 0 0 60px #10b98122, inset 0 0 15px #10b98144;
  text-shadow: 0 0 8px #10b981;
}`,
    htmlCode: `<div class="border-glow-2">Glow</div>`,
    isNew: true,
  },
  {
    id: 'border-dash-offset',
    name: 'Border Dash Offset',
    category: 'borders',
    tags: ['border', 'dash', 'offset', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated SVG-style dash offset on border using outline',
    cssCode: `.border-dash-offset {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px dashed #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bdo-move 1s linear infinite;
  outline: 2px dashed #3b82f6;
  outline-offset: 4px;
}
@keyframes bdo-move {
  to { outline-offset: 8px; }
}`,
    htmlCode: `<div class="border-dash-offset">Dash</div>`,
    isNew: true,
  },
  {
    id: 'border-color-cycle',
    name: 'Border Color Cycle',
    category: 'borders',
    tags: ['border', 'color', 'cycle', 'rainbow'],
    difficulty: 'beginner',
    description: 'Border cycles through rainbow colors continuously',
    cssCode: `.border-color-cycle {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bcc-cycle 3s linear infinite;
}
@keyframes bcc-cycle {
  0% { border-color: #10b981; }
  16% { border-color: #3b82f6; }
  33% { border-color: #8b5cf6; }
  50% { border-color: #ec4899; }
  66% { border-color: #f59e0b; }
  83% { border-color: #ef4444; }
  100% { border-color: #10b981; }
}`,
    htmlCode: `<div class="border-color-cycle">Cycle</div>`,
    isNew: true,
  },
  {
    id: 'corner-border',
    name: 'Corner Border',
    category: 'borders',
    tags: ['border', 'corner', 'decorative', 'minimal'],
    difficulty: 'intermediate',
    description: 'Decorative corner brackets as borders',
    cssCode: `.corner-border {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 0;
  font-weight: 700;
  font-size: 16px;
  position: relative;
}
.corner-border::before,
.corner-border::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: #10b981;
  border-style: solid;
}
.corner-border::before {
  top: 0;
  left: 0;
  border-width: 3px 0 0 3px;
}
.corner-border::after {
  bottom: 0;
  right: 0;
  border-width: 0 3px 3px 0;
}
.corner-border-inner::before,
.corner-border-inner::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: #3b82f6;
  border-style: solid;
}
.corner-border-inner::before {
  top: 0;
  right: 0;
  border-width: 3px 3px 0 0;
}
.corner-border-inner::after {
  bottom: 0;
  left: 0;
  border-width: 0 0 3px 3px;
}`,
    htmlCode: `<div class="corner-border"><div class="corner-border-inner">Corner</div></div>`,
    isNew: true,
  },
  {
    id: 'double-border',
    name: 'Double Border',
    category: 'borders',
    tags: ['border', 'double', 'outline', 'layered'],
    difficulty: 'beginner',
    description: 'Double layered border with offset outline',
    cssCode: `.double-border {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  outline: 2px solid #3b82f6;
  outline-offset: 5px;
}`,
    htmlCode: `<div class="double-border">Double</div>`,
    isNew: true,
  },
  {
    id: 'neon-border-2',
    name: 'Neon Border',
    category: 'borders',
    tags: ['border', 'neon', 'glow', 'dark'],
    difficulty: 'intermediate',
    description: 'Neon glowing border on dark background',
    cssCode: `.neon-border-2 {
  padding: 24px 40px;
  background: #050510;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 0 10px #10b98155, 0 0 20px #10b98133, 0 0 40px #10b98122, inset 0 0 10px #10b98122;
  text-shadow: 0 0 5px #10b98188;
}`,
    htmlCode: `<div class="neon-border-2">Neon</div>`,
    isNew: true,
  },
  {
    id: 'rainbow-border',
    name: 'Rainbow Border',
    category: 'borders',
    tags: ['border', 'rainbow', 'colorful', 'gradient'],
    difficulty: 'intermediate',
    description: 'Full rainbow gradient border',
    cssCode: `.rainbow-border {
  padding: 3px;
  border-radius: 14px;
  background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6, #ec4899);
  display: inline-block;
}
.rainbow-border-inner {
  padding: 22px 38px;
  background: #0f0f1a;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 16px;
  display: block;
}`,
    htmlCode: `<div class="rainbow-border"><div class="rainbow-border-inner">Rainbow</div></div>`,
    isNew: true,
  },
  {
    id: 'border-with-glow',
    name: 'Border with Glow',
    category: 'borders',
    tags: ['border', 'glow', 'shadow', 'hover'],
    difficulty: 'intermediate',
    description: 'Border that adds an expanding glow on hover',
    cssCode: `.border-with-glow {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b98144;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.border-with-glow:hover {
  border-color: #10b981;
  box-shadow: 0 0 10px #10b98144, 0 0 30px #10b98122, 0 0 60px #10b98111;
}`,
    htmlCode: `<div class="border-with-glow">Glow</div>`,
    isNew: true,
  },
  {
    id: 'border-rotation',
    name: 'Border Rotation',
    category: 'borders',
    tags: ['border', 'rotation', 'animated', 'spin'],
    difficulty: 'advanced',
    description: 'Border appears to rotate around the element',
    cssCode: `.border-rotation {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  z-index: 1;
}
.border-rotation::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 15px;
  background: conic-gradient(from 0deg, #10b981 0deg, #10b981 90deg, transparent 90deg, transparent 360deg);
  z-index: -2;
  animation: br-spin 2s linear infinite;
}
.border-rotation::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes br-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="border-rotation">Rotation</div>`,
    isNew: true,
  },
  {
    id: 'border-scale',
    name: 'Border Scale',
    category: 'borders',
    tags: ['border', 'scale', 'hover', 'animated'],
    difficulty: 'intermediate',
    description: 'Border scales up from center on hover',
    cssCode: `.border-scale {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.border-scale::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #10b981;
  border-radius: 12px;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.border-scale:hover::before {
  transform: scale(1);
  opacity: 1;
}`,
    htmlCode: `<div class="border-scale">Scale</div>`,
    isNew: true,
  },
  {
    id: 'border-wave',
    name: 'Border Wave',
    category: 'borders',
    tags: ['border', 'wave', 'animated', 'organic'],
    difficulty: 'advanced',
    description: 'Border with a wave-like undulating animation',
    cssCode: `.border-wave {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  z-index: 1;
}
.border-wave::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 16px;
  background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 300% 300%;
  z-index: -2;
  animation: bw-wave 3s ease infinite;
}
.border-wave::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes bw-wave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    htmlCode: `<div class="border-wave">Wave</div>`,
    isNew: true,
  },
  {
    id: 'border-ripple',
    name: 'Border Ripple',
    category: 'borders',
    tags: ['border', 'ripple', 'animated', 'expanding'],
    difficulty: 'advanced',
    description: 'Ripple effect expanding from border on hover',
    cssCode: `.border-ripple {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.border-ripple::after {
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px solid #10b98144;
  border-radius: 16px;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.border-ripple:hover::after {
  opacity: 1;
  transform: scale(1.05);
  animation: brp-ripple 1s ease-out infinite;
}
@keyframes brp-ripple {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.15); opacity: 0; }
}`,
    htmlCode: `<div class="border-ripple">Ripple</div>`,
    isNew: true,
  },
  {
    id: 'border-bounce',
    name: 'Border Bounce',
    category: 'borders',
    tags: ['border', 'bounce', 'animated', 'spring'],
    difficulty: 'intermediate',
    description: 'Border bounces on hover with spring animation',
    cssCode: `.border-bounce {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.border-bounce:hover {
  animation: bb-spring 0.5s ease;
}
@keyframes bb-spring {
  0% { transform: scale(1); }
  30% { transform: scale(1.06); }
  50% { transform: scale(0.97); }
  70% { transform: scale(1.02); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="border-bounce">Bounce</div>`,
    isNew: true,
  },
  {
    id: 'border-shake',
    name: 'Border Shake',
    category: 'borders',
    tags: ['border', 'shake', 'animated', 'vibrate'],
    difficulty: 'intermediate',
    description: 'Border shakes with the element on hover',
    cssCode: `.border-shake {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #ef4444;
  border: 2px solid #ef4444;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
}
.border-shake:hover {
  animation: bshk-shake 0.4s ease;
}
@keyframes bshk-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`,
    htmlCode: `<div class="border-shake">Shake</div>`,
    isNew: true,
  },
  {
    id: 'border-flip',
    name: 'Border Flip',
    category: 'borders',
    tags: ['border', 'flip', '3d', 'hover'],
    difficulty: 'advanced',
    description: 'Element with border flips in 3D on hover',
    cssCode: `.border-flip-wrap {
  perspective: 600px;
  display: inline-block;
}
.border-flip {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  cursor: pointer;
}
.border-flip-wrap:hover .border-flip {
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="border-flip-wrap"><div class="border-flip">Flip</div></div>`,
    isNew: true,
  },
  {
    id: 'border-fold',
    name: 'Border Fold',
    category: 'borders',
    tags: ['border', 'fold', '3d', 'paper'],
    difficulty: 'advanced',
    description: 'Element appears to fold along its border on hover',
    cssCode: `.border-fold {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 4px 4px 0 0;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transform-origin: bottom center;
  transition: transform 0.4s ease;
}
.border-fold:hover {
  transform: perspective(400px) rotateX(25deg);
  border-bottom-color: #059669;
}`,
    htmlCode: `<div class="border-fold">Fold</div>`,
    isNew: true,
  },
  {
    id: 'border-reveal',
    name: 'Border Reveal',
    category: 'borders',
    tags: ['border', 'reveal', 'hover', 'mask'],
    difficulty: 'intermediate',
    description: 'Border is revealed with a clip-path animation on hover',
    cssCode: `.border-reveal {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
.border-reveal::before {
  content: '';
  position: absolute;
  inset: -2px;
  border: 2px solid #3b82f6;
  border-radius: 14px;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.5s ease;
}
.border-reveal:hover::before {
  clip-path: circle(150% at 50% 50%);
}`,
    htmlCode: `<div class="border-reveal">Reveal</div>`,
    isNew: true,
  },
  {
    id: 'border-expand',
    name: 'Border Expand',
    category: 'borders',
    tags: ['border', 'expand', 'hover', 'grow'],
    difficulty: 'intermediate',
    description: 'Border expands outward from the element on hover',
    cssCode: `.border-expand {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: padding 0.3s ease, border-color 0.3s ease;
}
.border-expand:hover {
  padding: 30px 46px;
  border-color: #3b82f6;
}`,
    htmlCode: `<div class="border-expand">Expand</div>`,
    isNew: true,
  },
  {
    id: 'border-zoom',
    name: 'Border Zoom',
    category: 'borders',
    tags: ['border', 'zoom', 'scale', 'hover'],
    difficulty: 'intermediate',
    description: 'Border zooms in with the element on hover',
    cssCode: `.border-zoom {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.border-zoom:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(16,185,129,0.3);
}`,
    htmlCode: `<div class="border-zoom">Zoom</div>`,
    isNew: true,
  },
  {
    id: 'border-blur',
    name: 'Border Blur',
    category: 'borders',
    tags: ['border', 'blur', 'filter', 'focus'],
    difficulty: 'intermediate',
    description: 'Border blurs when not hovered and sharpens on hover',
    cssCode: `.border-blur {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  filter: blur(2px);
  transition: filter 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}
.border-blur:hover {
  filter: blur(0);
  transform: scale(1.04);
}`,
    htmlCode: `<div class="border-blur">Focus</div>`,
    isNew: true,
  },
  {
    id: 'border-grayscale',
    name: 'Border Grayscale',
    category: 'borders',
    tags: ['border', 'grayscale', 'filter', 'color'],
    difficulty: 'beginner',
    description: 'Grayscale border that reveals color on hover',
    cssCode: `.border-grayscale {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
  cursor: pointer;
}
.border-grayscale:hover {
  filter: grayscale(0);
}`,
    htmlCode: `<div class="border-grayscale">Grayscale</div>`,
    isNew: true,
  },
  {
    id: 'border-sepia',
    name: 'Border Sepia',
    category: 'borders',
    tags: ['border', 'sepia', 'filter', 'vintage'],
    difficulty: 'beginner',
    description: 'Border applies sepia tone on hover',
    cssCode: `.border-sepia {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  transition: filter 0.4s ease;
  cursor: pointer;
}
.border-sepia:hover {
  filter: sepia(100%);
}`,
    htmlCode: `<div class="border-sepia">Sepia</div>`,
    isNew: true,
  },
  {
    id: 'border-invert',
    name: 'Border Invert',
    category: 'borders',
    tags: ['border', 'invert', 'filter', 'color'],
    difficulty: 'beginner',
    description: 'Border inverts colors on hover',
    cssCode: `.border-invert {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  transition: filter 0.3s ease;
  cursor: pointer;
}
.border-invert:hover {
  filter: invert(100%);
}`,
    htmlCode: `<div class="border-invert">Invert</div>`,
    isNew: true,
  },
  {
    id: 'border-brightness',
    name: 'Border Brightness',
    category: 'borders',
    tags: ['border', 'brightness', 'filter', 'light'],
    difficulty: 'beginner',
    description: 'Border dims when idle and brightens on hover',
    cssCode: `.border-brightness {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  filter: brightness(0.5);
  transition: filter 0.3s ease;
  cursor: pointer;
}
.border-brightness:hover {
  filter: brightness(1.3);
}`,
    htmlCode: `<div class="border-brightness">Bright</div>`,
    isNew: true,
  },
  {
    id: 'border-contrast',
    name: 'Border Contrast',
    category: 'borders',
    tags: ['border', 'contrast', 'filter', 'sharp'],
    difficulty: 'beginner',
    description: 'Border increases contrast on hover for a sharper look',
    cssCode: `.border-contrast {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  filter: contrast(0.6);
  transition: filter 0.3s ease;
  cursor: pointer;
}
.border-contrast:hover {
  filter: contrast(1.5);
}`,
    htmlCode: `<div class="border-contrast">Contrast</div>`,
    isNew: true,
  },
  {
    id: 'border-saturate',
    name: 'Border Saturate',
    category: 'borders',
    tags: ['border', 'saturate', 'filter', 'vivid'],
    difficulty: 'beginner',
    description: 'Border becomes vividly saturated on hover',
    cssCode: `.border-saturate {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  filter: saturate(0.3);
  transition: filter 0.4s ease;
  cursor: pointer;
}
.border-saturate:hover {
  filter: saturate(2);
}`,
    htmlCode: `<div class="border-saturate">Saturate</div>`,
    isNew: true,
  },
  {
    id: 'border-hue-rotate',
    name: 'Border Hue Rotate',
    category: 'borders',
    tags: ['border', 'hue-rotate', 'filter', 'rainbow'],
    difficulty: 'intermediate',
    description: 'Border continuously cycles through hue rotations',
    cssCode: `.border-hue-rotate {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bhr-rotate 3s linear infinite;
}
@keyframes bhr-rotate {
  to { filter: hue-rotate(360deg); }
}`,
    htmlCode: `<div class="border-hue-rotate">Hue</div>`,
    isNew: true,
  },
  {
    id: 'border-opacity',
    name: 'Border Opacity',
    category: 'borders',
    tags: ['border', 'opacity', 'fade', 'transparency'],
    difficulty: 'beginner',
    description: 'Border fades in from transparent on hover',
    cssCode: `.border-opacity {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  opacity: 0.4;
  transition: opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}
.border-opacity:hover {
  opacity: 1;
  transform: scale(1.04);
}`,
    htmlCode: `<div class="border-opacity">Opacity</div>`,
    isNew: true,
  },
  {
    id: 'border-mix',
    name: 'Border Mix',
    category: 'borders',
    tags: ['border', 'mix', 'blend', 'colorful'],
    difficulty: 'intermediate',
    description: 'Border with mixed color blend using multiple outlines',
    cssCode: `.border-mix {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  outline: 2px solid #3b82f6;
  outline-offset: 4px;
  box-shadow: 0 0 0 2px #8b5cf6;
  transition: outline-offset 0.3s ease, box-shadow 0.3s ease;
}
.border-mix:hover {
  outline-offset: 8px;
  box-shadow: 0 0 0 4px #8b5cf6, 0 0 20px rgba(139,92,246,0.3);
}`,
    htmlCode: `<div class="border-mix">Mix</div>`,
    isNew: true,
  },
  {
    id: 'border-dashed-anim',
    name: 'Border Dashed Animation',
    category: 'borders',
    tags: ['border', 'dashed', 'animated', 'offset'],
    difficulty: 'intermediate',
    description: 'Dashed border with animated offset creating movement illusion',
    cssCode: `.border-dashed-anim {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px dashed #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bda-dash 12s linear infinite;
  cursor: pointer;
}
@keyframes bda-dash {
  to { stroke-dashoffset: -200; }
}
.border-dashed-anim:hover {
  border-color: #3b82f6;
  border-style: dashed;
}`,
    htmlCode: `<div class="border-dashed-anim">Dashed</div>`,
    isNew: true,
  },
  {
    id: 'border-dotted-anim',
    name: 'Border Dotted Animation',
    category: 'borders',
    tags: ['border', 'dotted', 'animated', 'playful'],
    difficulty: 'intermediate',
    description: 'Dotted border with animated size changes',
    cssCode: `.border-dotted-anim {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 3px dotted #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bdota-pulse 2s ease-in-out infinite;
  cursor: pointer;
}
@keyframes bdota-pulse {
  0%, 100% { border-width: 3px; }
  50% { border-width: 6px; border-color: #3b82f6; }
}`,
    htmlCode: `<div class="border-dotted-anim">Dotted</div>`,
    isNew: true,
  },
  {
    id: 'border-gradient-3',
    name: 'Border Gradient Diagonal',
    category: 'borders',
    tags: ['border', 'gradient', 'diagonal', 'colorful'],
    difficulty: 'intermediate',
    description: 'Diagonal gradient border effect',
    cssCode: `.border-gradient-3 {
  padding: 3px;
  border-radius: 14px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  display: inline-block;
}
.border-gradient-3-inner {
  padding: 22px 38px;
  background: #0f0f1a;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 16px;
  display: block;
  transition: background 0.3s ease;
}
.border-gradient-3:hover .border-gradient-3-inner {
  background: #0a0a14;
}`,
    htmlCode: `<div class="border-gradient-3"><div class="border-gradient-3-inner">Diagonal</div></div>`,
    isNew: true,
  },
  {
    id: 'border-conic',
    name: 'Border Conic',
    category: 'borders',
    tags: ['border', 'conic', 'gradient', 'spinning'],
    difficulty: 'advanced',
    description: 'Conic gradient border that animates around the element',
    cssCode: `.border-conic {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #e2e8f0;
  border: none;
  border-radius: 50%;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  z-index: 1;
}
.border-conic::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #10b981);
  z-index: -2;
  animation: bc-rotate 3s linear infinite;
}
.border-conic::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0f0f1a;
  z-index: -1;
}
@keyframes bc-rotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="border-conic">Conic</div>`,
    isNew: true,
  },
  {
    id: 'border-diagonal',
    name: 'Border Diagonal',
    category: 'borders',
    tags: ['border', 'diagonal', 'clip-path', 'sharp'],
    difficulty: 'intermediate',
    description: 'Diagonal cut borders using clip-path',
    cssCode: `.border-diagonal {
  padding: 24px 44px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 0;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}
.border-diagonal::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b981;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%);
  z-index: -1;
  padding: 2px;
}`,
    htmlCode: `<div class="border-diagonal">Diagonal</div>`,
    isNew: true,
  },
  {
    id: 'border-zigzag',
    name: 'Border Zigzag',
    category: 'borders',
    tags: ['border', 'zigzag', 'decorative', 'pattern'],
    difficulty: 'advanced',
    description: 'Zigzag pattern border effect',
    cssCode: `.border-zigzag {
  padding: 28px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: none;
  border-radius: 0;
  font-weight: 700;
  font-size: 16px;
  position: relative;
}
.border-zigzag::before,
.border-zigzag::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(135deg, #10b981 25%, transparent 25%) -8px 0,
    linear-gradient(225deg, #10b981 25%, transparent 25%) -8px 0,
    linear-gradient(315deg, #10b981 25%, transparent 25%),
    linear-gradient(45deg, #10b981 25%, transparent 25%);
  background-size: 16px 8px;
  background-color: #0f0f1a;
}
.border-zigzag::before { top: -8px; }
.border-zigzag::after { bottom: -8px; transform: rotate(180deg); }`,
    htmlCode: `<div class="border-zigzag">Zigzag</div>`,
    isNew: true,
  },
  {
    id: 'border-wavy',
    name: 'Border Wavy',
    category: 'borders',
    tags: ['border', 'wavy', 'organic', 'animated'],
    difficulty: 'advanced',
    description: 'Wavy animated border using border-radius animation',
    cssCode: `.border-wavy {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  font-weight: 700;
  font-size: 16px;
  animation: bwav-morph 3s ease-in-out infinite;
}
@keyframes bwav-morph {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
  75% { border-radius: 60% 40% 60% 30% / 70% 40% 60% 30%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}`,
    htmlCode: `<div class="border-wavy">Wavy</div>`,
    isNew: true,
  },
  {
    id: 'border-double-line',
    name: 'Border Double Line',
    category: 'borders',
    tags: ['border', 'double', 'line', 'elegant'],
    difficulty: 'beginner',
    description: 'Elegant double line border using outline and border',
    cssCode: `.border-double-line {
  padding: 24px 40px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 0;
  font-weight: 700;
  font-size: 16px;
  outline: 1px solid #10b981;
  outline-offset: 4px;
  transition: outline-offset 0.3s ease;
}
.border-double-line:hover {
  outline-offset: 8px;
}`,
    htmlCode: `<div class="border-double-line">Double</div>`,
    isNew: true,
  },
  {
    id: 'border-candy',
    name: 'Border Candy',
    category: 'borders',
    tags: ['border', 'candy', 'sweet', 'colorful'],
    difficulty: 'intermediate',
    description: 'Sweet candy-colored striped border animation',
    cssCode: `.border-candy {
  padding: 3px;
  border-radius: 14px;
  background: repeating-linear-gradient(45deg, #ec4899, #ec4899 10px, #f59e0b 10px, #f59e0b 20px, #10b981 20px, #10b981 30px, #3b82f6 30px, #3b82f6 40px);
  background-size: 200% 200%;
  animation: bcan-move 3s linear infinite;
  display: inline-block;
}
.border-candy-inner {
  padding: 22px 38px;
  background: #0f0f1a;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 700;
  font-size: 16px;
  display: block;
}
@keyframes bcan-move {
  to { background-position: 200% 0; }
}`,
    htmlCode: `<div class="border-candy"><div class="border-candy-inner">Candy</div></div>`,
    isNew: true,
  },
  {
    id: 'border-retro',
    name: 'Border Retro',
    category: 'borders',
    tags: ['border', 'retro', 'vintage', 'pixel'],
    difficulty: 'intermediate',
    description: 'Retro pixelated style border with inset shadow',
    cssCode: `.border-retro {
  padding: 24px 40px;
  background: #1a1a2e;
  color: #10b981;
  border: 4px solid #10b981;
  border-radius: 0;
  font-weight: 700;
  font-size: 16px;
  box-shadow: inset -4px -4px 0 #059669, inset 4px 4px 0 #34d399;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.border-retro:hover {
  box-shadow: inset 4px 4px 0 #059669, inset -4px -4px 0 #34d399;
  transform: translate(2px, 2px);
}`,
    htmlCode: `<div class="border-retro">Retro</div>`,
    isNew: true,
  },
  {
    id: 'border-glow-pulse',
    name: 'Border Glow Pulse',
    category: 'borders',
    tags: ['border', 'glow', 'pulse', 'animated'],
    difficulty: 'intermediate',
    description: 'Border with a continuously pulsing glow animation',
    cssCode: `.border-glow-pulse {
  padding: 24px 40px;
  background: #050510;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  animation: bgp-glow 2s ease-in-out infinite;
}
@keyframes bgp-glow {
  0%, 100% {
    box-shadow: 0 0 5px #10b98133, inset 0 0 5px #10b98122;
  }
  50% {
    box-shadow: 0 0 20px #10b98188, 0 0 40px #10b98144, 0 0 60px #10b98122, inset 0 0 15px #10b98144;
    border-color: #34d399;
  }
}`,
    htmlCode: `<div class="border-glow-pulse">Pulse</div>`,
    isNew: true,
  },
];
