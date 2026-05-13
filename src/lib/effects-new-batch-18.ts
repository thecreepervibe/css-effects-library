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

export const effectsNewBatch18: CSSEffect[] = [
  // ==================== IMAGE (20) ====================
  {
    id: 'img-grayscale-hover-v2',
    name: 'Grayscale Hover',
    category: 'image',
    tags: ['image', 'grayscale', 'hover', 'filter', 'transition'],
    difficulty: 'beginner',
    description: 'Image starts in grayscale and transitions to full color on hover',
    cssCode: `.img-grayscale-hover-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-radius: 8px; overflow: hidden;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}
.img-grayscale-hover-v2:hover {
  filter: grayscale(0%);
}
.img-grayscale-hover-v2-inner {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.8rem;
}`,
    htmlCode: `<div class="img-grayscale-hover-v2"><div class="img-grayscale-hover-v2-inner">Hover Me</div></div>`,
    isNew: true,
  },
  {
    id: 'img-zoom-pan-v2',
    name: 'Zoom Pan',
    category: 'image',
    tags: ['image', 'zoom', 'pan', 'hover', 'scale'],
    difficulty: 'beginner',
    description: 'Image zooms in and pans slightly on hover, revealing detail',
    cssCode: `.img-zoom-pan-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
  border-radius: 8px; overflow: hidden;
  position: relative;
}
.img-zoom-pan-v2-inner {
  width: 100%; height: 100%;
  background: linear-gradient(45deg, #10b981, #059669, #047857);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.img-zoom-pan-v2:hover .img-zoom-pan-v2-inner {
  transform: scale(1.3) translate(8px, -5px);
}`,
    htmlCode: `<div class="img-zoom-pan-v2"><div class="img-zoom-pan-v2-inner">Zoom Pan</div></div>`,
    isNew: true,
  },
  {
    id: 'img-overlay-slide-v2',
    name: 'Overlay Slide',
    category: 'image',
    tags: ['image', 'overlay', 'slide', 'hover', 'reveal'],
    difficulty: 'advanced',
    description: 'A colored overlay slides in from the side on hover to cover the image',
    cssCode: `.img-overlay-slide-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #065f46);
  border-radius: 8px; overflow: hidden;
  position: relative; cursor: pointer;
}
.img-overlay-slide-v2-label {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.8rem; z-index: 1;
}
.img-overlay-slide-v2-overlay {
  position: absolute; inset: 0;
  background: #0f0f1aee;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-weight: 600; font-size: 0.75rem;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.img-overlay-slide-v2:hover .img-overlay-slide-v2-overlay {
  transform: translateX(0);
}`,
    htmlCode: `<div class="img-overlay-slide-v2"><div class="img-overlay-slide-v2-label">Image</div><div class="img-overlay-slide-v2-overlay">Overlay</div></div>`,
    isNew: true,
  },
  {
    id: 'img-blur-reveal-v2',
    name: 'Blur Reveal',
    category: 'image',
    tags: ['image', 'blur', 'reveal', 'hover', 'focus'],
    difficulty: 'beginner',
    description: 'Image is blurred by default and sharpens on hover with a smooth transition',
    cssCode: `.img-blur-reveal-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 8px; overflow: hidden;
  filter: blur(6px);
  transition: filter 0.5s ease;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.8rem;
}
.img-blur-reveal-v2:hover {
  filter: blur(0);
}`,
    htmlCode: `<div class="img-blur-reveal-v2">Blur Reveal</div>`,
    isNew: true,
  },
  {
    id: 'img-corner-fold-v2',
    name: 'Corner Fold',
    category: 'image',
    tags: ['image', 'corner', 'fold', 'paper', 'hover'],
    difficulty: 'intermediate',
    description: 'A page corner folds over on hover, revealing a peek underneath',
    cssCode: `.img-corner-fold-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  border-radius: 8px; position: relative;
  overflow: hidden; cursor: pointer;
}
.img-corner-fold-v2::before {
  content: ''; position: absolute;
  top: 0; right: 0;
  width: 0; height: 0;
  border-style: solid;
  border-width: 0 30px 30px 0;
  border-color: transparent #0a0a1a transparent transparent;
  transition: border-width 0.4s ease;
  z-index: 2;
}
.img-corner-fold-v2::after {
  content: ''; position: absolute;
  top: 0; right: 0;
  width: 0; height: 0;
  border-style: solid;
  border-width: 30px 0 0 30px;
  border-color: #10b981 transparent transparent transparent;
  transition: border-width 0.4s ease;
  filter: brightness(0.7);
  z-index: 3;
}
.img-corner-fold-v2:hover::before,
.img-corner-fold-v2:hover::after {
  border-width: 0 50px 50px 0;
}
.img-corner-fold-v2:hover::after {
  border-width: 50px 0 0 50px;
}`,
    htmlCode: `<div class="img-corner-fold-v2"></div>`,
    isNew: true,
  },
  {
    id: 'img-compare-slider-v2',
    name: 'Compare Slider',
    category: 'image',
    tags: ['image', 'compare', 'slider', 'before-after', 'interactive'],
    difficulty: 'advanced',
    description: 'A before/after image comparison with a draggable slider divider',
    cssCode: `.img-compare-slider-v2 {
  width: 160px; height: 100px;
  position: relative; border-radius: 8px;
  overflow: hidden; cursor: ew-resize;
}
.img-compare-slider-v2-before {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
  display: flex; align-items: center; justify-content: center;
  color: #64748b; font-size: 0.7rem; font-weight: 600;
}
.img-compare-slider-v2-after {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.7rem; font-weight: 600;
  clip-path: inset(0 50% 0 0);
  transition: clip-path 0.1s ease;
}
.img-compare-slider-v2-line {
  position: absolute; top: 0; bottom: 0; left: 50%;
  width: 2px; background: #fff;
  z-index: 2;
}
.img-compare-slider-v2-line::after {
  content: '⟷'; position: absolute; top: 50%;
  left: 50%; transform: translate(-50%, -50%);
  background: #fff; color: #0f0f1a; font-size: 0.6rem;
  width: 20px; height: 20px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}`,
    htmlCode: `<div class="img-compare-slider-v2"><div class="img-compare-slider-v2-before">Before</div><div class="img-compare-slider-v2-after">After</div><div class="img-compare-slider-v2-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'img-stack-v2',
    name: 'Image Stack',
    category: 'image',
    tags: ['image', 'stack', 'cards', 'hover', 'spread'],
    difficulty: 'intermediate',
    description: 'A stack of images that fans out on hover, revealing each layer',
    cssCode: `.img-stack-v2 {
  position: relative; width: 140px; height: 90px;
  cursor: pointer;
}
.img-stack-v2-card {
  position: absolute; width: 100px; height: 70px;
  border-radius: 6px; display: flex;
  align-items: center; justify-content: center;
  color: #fff; font-size: 0.65rem; font-weight: 700;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;
}
.img-stack-v2-card:nth-child(1) {
  background: #10b981; top: 10px; left: 10px; z-index: 3;
}
.img-stack-v2-card:nth-child(2) {
  background: #059669; top: 5px; left: 20px; z-index: 2;
}
.img-stack-v2-card:nth-child(3) {
  background: #047857; top: 0; left: 30px; z-index: 1;
}
.img-stack-v2:hover .img-stack-v2-card:nth-child(1) { transform: translateX(-20px) rotate(-5deg); }
.img-stack-v2:hover .img-stack-v2-card:nth-child(2) { transform: translateY(0); }
.img-stack-v2:hover .img-stack-v2-card:nth-child(3) { transform: translateX(20px) rotate(5deg); }`,
    htmlCode: `<div class="img-stack-v2"><div class="img-stack-v2-card">1</div><div class="img-stack-v2-card">2</div><div class="img-stack-v2-card">3</div></div>`,
    isNew: true,
  },
  {
    id: 'img-mosaic-v2',
    name: 'Mosaic',
    category: 'image',
    tags: ['image', 'mosaic', 'grid', 'hover', 'tiles'],
    difficulty: 'intermediate',
    description: 'A mosaic of image tiles that shift and rearrange on hover',
    cssCode: `.img-mosaic-v2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3px; width: 160px; height: 100px;
  border-radius: 8px; overflow: hidden;
}
.img-mosaic-v2-tile {
  background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.6rem; font-weight: 700;
  border-radius: 3px;
  transition: transform 0.3s ease, background 0.3s ease;
}
.img-mosaic-v2-tile:nth-child(1) { background: #10b98133; }
.img-mosaic-v2-tile:nth-child(5) { background: #10b98133; }
.img-mosaic-v2:hover .img-mosaic-v2-tile:nth-child(1) { transform: scale(1.1); background: #10b98188; }
.img-mosaic-v2:hover .img-mosaic-v2-tile:nth-child(5) { transform: scale(0.9); }
.img-mosaic-v2:hover .img-mosaic-v2-tile:nth-child(3) { transform: rotate(5deg); background: #10b98144; }
.img-mosaic-v2:hover .img-mosaic-v2-tile:nth-child(6) { background: #10b98144; }`,
    htmlCode: `<div class="img-mosaic-v2"><div class="img-mosaic-v2-tile">1</div><div class="img-mosaic-v2-tile">2</div><div class="img-mosaic-v2-tile">3</div><div class="img-mosaic-v2-tile">4</div><div class="img-mosaic-v2-tile">5</div><div class="img-mosaic-v2-tile">6</div></div>`,
    isNew: true,
  },
  {
    id: 'img-spotlight-v2',
    name: 'Spotlight',
    category: 'image',
    tags: ['image', 'spotlight', 'dark', 'hover', 'reveal'],
    difficulty: 'intermediate',
    description: 'A dark overlay with a spotlight circle that follows hover, revealing the image',
    cssCode: `.img-spotlight-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-radius: 8px; position: relative;
  overflow: hidden; cursor: pointer;
}
.img-spotlight-v2::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(circle 30px at var(--mx, 50%) var(--my, 50%), transparent 0%, #0a0a1acc 100%);
  transition: opacity 0.3s;
}
.img-spotlight-v2-label {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 100%;
  color: #fff; font-weight: 700; font-size: 0.8rem;
}`,
    htmlCode: `<div class="img-spotlight-v2" onmousemove="this.style.setProperty('--mx',event.offsetX+'px');this.style.setProperty('--my',event.offsetY+'px')"><div class="img-spotlight-v2-label">Spotlight</div></div>`,
    isNew: true,
  },
  {
    id: 'img-tilt-shift-v2',
    name: 'Tilt Shift',
    category: 'image',
    tags: ['image', 'tilt-shift', 'blur', 'focus', 'depth'],
    difficulty: 'advanced',
    description: 'A tilt-shift effect that keeps the center sharp while blurring top and bottom',
    cssCode: `.img-tilt-shift-v2 {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #059669, #047857);
  border-radius: 8px; overflow: hidden;
  position: relative; cursor: pointer;
}
.img-tilt-shift-v2::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(180deg, #0a0a1acc 0%, transparent 30%, transparent 70%, #0a0a1acc 100%);
  animation: tilt-focus 3s ease-in-out infinite;
}
.img-tilt-shift-v2-label {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 100%;
  color: #fff; font-weight: 700; font-size: 0.75rem;
}
@keyframes tilt-focus {
  0%, 100% { background: linear-gradient(180deg, #0a0a1acc 0%, transparent 30%, transparent 70%, #0a0a1acc 100%); }
  50% { background: linear-gradient(180deg, transparent 0%, #0a0a1acc 30%, #0a0a1acc 70%, transparent 100%); }
}`,
    htmlCode: `<div class="img-tilt-shift-v2"><div class="img-tilt-shift-v2-label">Tilt Shift</div></div>`,
    isNew: true,
  },
  {
    id: 'img-parallax-image',
    name: 'Parallax Image',
    category: 'image',
    tags: ['image', 'parallax', 'scroll', 'depth', 'layered'],
    difficulty: 'intermediate',
    description: 'A parallax image effect with layered depth that moves at different speeds',
    cssCode: `.img-parallax-image {
  width: 160px; height: 100px;
  background: #0a0a1a;
  border-radius: 8px; overflow: hidden;
  position: relative;
}
.img-parallax-image-back {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #0f1a2e, #1a2a3e);
  animation: parallax-slow 6s ease-in-out infinite;
}
.img-parallax-image-front {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 60% 40%, #10b98166, transparent 50%);
  animation: parallax-fast 4s ease-in-out infinite;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
}
@keyframes parallax-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes parallax-fast {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}`,
    htmlCode: `<div class="img-parallax-image"><div class="img-parallax-image-back"></div><div class="img-parallax-image-front">Parallax</div></div>`,
    isNew: true,
  },
  {
    id: 'img-reveal-mask',
    name: 'Reveal Mask',
    category: 'image',
    tags: ['image', 'mask', 'reveal', 'clip', 'circle'],
    difficulty: 'advanced',
    description: 'Image is revealed through an expanding circular mask on hover',
    cssCode: `.img-reveal-mask {
  width: 160px; height: 100px;
  border-radius: 8px; overflow: hidden;
  position: relative; cursor: pointer;
}
.img-reveal-mask-bg {
  position: absolute; inset: 0;
  background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  color: #64748b; font-size: 0.7rem; font-weight: 600;
}
.img-reveal-mask-front {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.7rem; font-weight: 700;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.img-reveal-mask:hover .img-reveal-mask-front {
  clip-path: circle(75% at 50% 50%);
}`,
    htmlCode: `<div class="img-reveal-mask"><div class="img-reveal-mask-bg">Hidden</div><div class="img-reveal-mask-front">Revealed</div></div>`,
    isNew: true,
  },
  {
    id: 'img-clip-path',
    name: 'Clip Path',
    category: 'image',
    tags: ['image', 'clip-path', 'shape', 'morph', 'hover'],
    difficulty: 'intermediate',
    description: 'Image morphs between different clip-path shapes on hover',
    cssCode: `.img-clip-path {
  width: 120px; height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-radius: 8px; cursor: pointer;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
}
.img-clip-path:hover {
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%, 0% 0%);
}`,
    htmlCode: `<div class="img-clip-path">Clip Path</div>`,
    isNew: true,
  },
  {
    id: 'img-zoom-out',
    name: 'Zoom Out',
    category: 'image',
    tags: ['image', 'zoom', 'out', 'scale', 'hover'],
    difficulty: 'beginner',
    description: 'Image starts zoomed in and zooms out to full view on hover',
    cssCode: `.img-zoom-out {
  width: 160px; height: 100px;
  background: #0a0a1a;
  border-radius: 8px; overflow: hidden;
}
.img-zoom-out-inner {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
  transform: scale(1.4);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.img-zoom-out:hover .img-zoom-out-inner {
  transform: scale(1);
}`,
    htmlCode: `<div class="img-zoom-out"><div class="img-zoom-out-inner">Zoom Out</div></div>`,
    isNew: true,
  },
  {
    id: 'img-rotate-in',
    name: 'Rotate In',
    category: 'image',
    tags: ['image', 'rotate', 'entrance', '3d', 'hover'],
    difficulty: 'intermediate',
    description: 'Image rotates in from a tilted angle on hover with 3D perspective',
    cssCode: `.img-rotate-in {
  width: 160px; height: 100px;
  perspective: 600px;
  border-radius: 8px; cursor: pointer;
}
.img-rotate-in-inner {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
  transform: rotateY(60deg) rotateX(10deg);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.5;
}
.img-rotate-in:hover .img-rotate-in-inner {
  transform: rotateY(0deg) rotateX(0deg);
  opacity: 1;
}`,
    htmlCode: `<div class="img-rotate-in"><div class="img-rotate-in-inner">Rotate In</div></div>`,
    isNew: true,
  },
  {
    id: 'img-slide-corners',
    name: 'Slide Corners',
    category: 'image',
    tags: ['image', 'slide', 'corners', 'hover', 'split'],
    difficulty: 'advanced',
    description: 'Four corner sections slide apart on hover revealing the image beneath',
    cssCode: `.img-slide-corners {
  width: 160px; height: 100px;
  position: relative; overflow: hidden;
  border-radius: 8px; cursor: pointer;
}
.img-slide-corners-center {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.7rem;
}
.img-slide-corners-tl, .img-slide-corners-tr,
.img-slide-corners-bl, .img-slide-corners-br {
  position: absolute; width: 50%; height: 50%;
  background: #1a1a2e; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.img-slide-corners-tl { top: 0; left: 0; }
.img-slide-corners-tr { top: 0; right: 0; }
.img-slide-corners-bl { bottom: 0; left: 0; }
.img-slide-corners-br { bottom: 0; right: 0; }
.img-slide-corners:hover .img-slide-corners-tl { transform: translate(-100%, -100%); }
.img-slide-corners:hover .img-slide-corners-tr { transform: translate(100%, -100%); }
.img-slide-corners:hover .img-slide-corners-bl { transform: translate(-100%, 100%); }
.img-slide-corners:hover .img-slide-corners-br { transform: translate(100%, 100%); }`,
    htmlCode: `<div class="img-slide-corners"><div class="img-slide-corners-center">Revealed</div><div class="img-slide-corners-tl"></div><div class="img-slide-corners-tr"></div><div class="img-slide-corners-bl"></div><div class="img-slide-corners-br"></div></div>`,
    isNew: true,
  },
  {
    id: 'img-expand-view',
    name: 'Expand View',
    category: 'image',
    tags: ['image', 'expand', 'scale', 'hover', 'fullscreen'],
    difficulty: 'beginner',
    description: 'Thumbnail image expands outward on hover for a closer view',
    cssCode: `.img-expand-view {
  width: 100px; height: 70px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 8px; cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.7rem;
  z-index: 1; position: relative;
}
.img-expand-view:hover {
  transform: scale(1.5);
  box-shadow: 0 10px 30px #10b98144;
  z-index: 10;
}`,
    htmlCode: `<div class="img-expand-view">Expand</div>`,
    isNew: true,
  },
  {
    id: 'img-shrink-preview',
    name: 'Shrink Preview',
    category: 'image',
    tags: ['image', 'shrink', 'preview', 'scale', 'hover'],
    difficulty: 'beginner',
    description: 'Full image shrinks down to a small preview thumbnail on hover',
    cssCode: `.img-shrink-preview {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  border-radius: 8px; cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.4s;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
}
.img-shrink-preview:hover {
  transform: scale(0.4) translateY(-30px);
  border-radius: 4px;
  box-shadow: 0 4px 15px #10b98144;
}`,
    htmlCode: `<div class="img-shrink-preview">Shrink</div>`,
    isNew: true,
  },
  {
    id: 'img-dissolve',
    name: 'Dissolve',
    category: 'image',
    tags: ['image', 'dissolve', 'fade', 'opacity', 'hover'],
    difficulty: 'beginner',
    description: 'Image dissolves into transparency on hover, fading away gracefully',
    cssCode: `.img-dissolve {
  width: 160px; height: 100px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 8px; cursor: pointer;
  transition: opacity 0.6s ease, filter 0.6s ease;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
}
.img-dissolve:hover {
  opacity: 0.1;
  filter: blur(4px);
}`,
    htmlCode: `<div class="img-dissolve">Dissolve</div>`,
    isNew: true,
  },
  {
    id: 'img-swipe-reveal',
    name: 'Swipe Reveal',
    category: 'image',
    tags: ['image', 'swipe', 'reveal', 'slide', 'cover'],
    difficulty: 'intermediate',
    description: 'A cover slides away with a swipe motion to reveal the image underneath',
    cssCode: `.img-swipe-reveal {
  width: 160px; height: 100px;
  border-radius: 8px; overflow: hidden;
  position: relative; cursor: pointer;
}
.img-swipe-reveal-img {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 0.75rem;
}
.img-swipe-reveal-cover {
  position: absolute; inset: 0;
  background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  color: #64748b; font-size: 0.7rem; font-weight: 600;
  transform-origin: left center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s;
}
.img-swipe-reveal:hover .img-swipe-reveal-cover {
  transform: scaleX(0);
  opacity: 0;
}`,
    htmlCode: `<div class="img-swipe-reveal"><div class="img-swipe-reveal-img">Revealed</div><div class="img-swipe-reveal-cover">Swipe</div></div>`,
    isNew: true,
  },

  // ==================== PRICING (20) ====================
  {
    id: 'price-ribbon-tag',
    name: 'Ribbon Tag',
    category: 'pricing',
    tags: ['pricing', 'ribbon', 'tag', 'badge', 'label'],
    difficulty: 'intermediate',
    description: 'A decorative ribbon tag positioned at the corner of a pricing card',
    cssCode: `.price-ribbon-tag {
  width: 160px; height: 100px;
  background: #1a1a2e; border-radius: 8px;
  position: relative; overflow: hidden;
}
.price-ribbon-tag-ribbon {
  position: absolute; top: 12px; right: -30px;
  background: #10b981; color: #fff;
  padding: 4px 36px; font-size: 0.6rem;
  font-weight: 700; text-transform: uppercase;
  transform: rotate(45deg);
  box-shadow: 0 2px 8px #10b98144;
}
.price-ribbon-tag-content {
  padding: 16px; color: #e2e8f0;
  text-align: center;
}
.price-ribbon-tag-price {
  font-size: 1.2rem; font-weight: 800; color: #10b981;
}
.price-ribbon-tag-label {
  font-size: 0.6rem; color: #64748b; margin-top: 4px;
}`,
    htmlCode: `<div class="price-ribbon-tag"><div class="price-ribbon-tag-ribbon">Sale</div><div class="price-ribbon-tag-content"><div class="price-ribbon-tag-price">$29</div><div class="price-ribbon-tag-label">per month</div></div></div>`,
    isNew: true,
  },
  {
    id: 'price-discount-pulse',
    name: 'Discount Pulse',
    category: 'pricing',
    tags: ['pricing', 'discount', 'pulse', 'animated', 'badge'],
    difficulty: 'beginner',
    description: 'A discount badge that pulses to draw attention to savings',
    cssCode: `.price-discount-pulse {
  display: inline-flex; align-items: center; justify-content: center;
  background: #10b981; color: #fff;
  padding: 8px 16px; border-radius: 20px;
  font-size: 0.8rem; font-weight: 800;
  animation: discount-beat 1.5s ease-in-out infinite;
}
@keyframes discount-beat {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 #10b98166; }
  50% { transform: scale(1.08); box-shadow: 0 0 0 10px #10b98100; }
}`,
    htmlCode: `<div class="price-discount-pulse">-30%</div>`,
    isNew: true,
  },
  {
    id: 'price-popular-plan',
    name: 'Popular Plan',
    category: 'pricing',
    tags: ['pricing', 'popular', 'highlight', 'plan', 'card'],
    difficulty: 'intermediate',
    description: 'A popular plan card with glowing border and "Most Popular" badge',
    cssCode: `.price-popular-plan {
  width: 140px; padding: 16px;
  background: #1a1a2e; border-radius: 12px;
  border: 2px solid #10b981;
  position: relative; text-align: center;
  box-shadow: 0 0 20px #10b98133;
  animation: popular-glow 2s ease-in-out infinite;
}
.price-popular-plan-badge {
  position: absolute; top: -10px; left: 50%;
  transform: translateX(-50%);
  background: #10b981; color: #fff;
  padding: 2px 12px; border-radius: 10px;
  font-size: 0.55rem; font-weight: 700;
  text-transform: uppercase; white-space: nowrap;
}
.price-popular-plan-name {
  color: #e2e8f0; font-size: 0.75rem; font-weight: 700; margin-top: 8px;
}
.price-popular-plan-amount {
  color: #10b981; font-size: 1.3rem; font-weight: 800; margin-top: 4px;
}
@keyframes popular-glow {
  0%, 100% { box-shadow: 0 0 15px #10b98122; }
  50% { box-shadow: 0 0 30px #10b98144; }
}`,
    htmlCode: `<div class="price-popular-plan"><div class="price-popular-plan-badge">Most Popular</div><div class="price-popular-plan-name">Pro</div><div class="price-popular-plan-amount">$49/mo</div></div>`,
    isNew: true,
  },
  {
    id: 'price-slash-anim',
    name: 'Slash Animation',
    category: 'pricing',
    tags: ['pricing', 'slash', 'strikethrough', 'animation', 'old-price'],
    difficulty: 'intermediate',
    description: 'An animated diagonal slash line crosses out the old price',
    cssCode: `.price-slash-anim {
  position: relative; display: inline-block;
  padding: 8px 16px; color: #64748b;
  font-size: 0.9rem; font-weight: 700;
}
.price-slash-anim::after {
  content: ''; position: absolute;
  top: 0; left: 0;
  width: 0; height: 2px;
  background: #ef4444;
  transform: rotate(-12deg);
  transform-origin: left center;
  animation: slash-draw 1s ease forwards 0.5s;
}
@keyframes slash-draw {
  to { width: 100%; }
}
.price-slash-anim-new {
  color: #10b981; font-size: 1.1rem; font-weight: 800;
  margin-left: 8px;
}`,
    htmlCode: `<span class="price-slash-anim">$99</span><span class="price-slash-anim-new">$49</span>`,
    isNew: true,
  },
  {
    id: 'price-coupon-clip',
    name: 'Coupon Clip',
    category: 'pricing',
    tags: ['pricing', 'coupon', 'clip', 'dashed', 'ticket'],
    difficulty: 'advanced',
    description: 'A coupon-style tag with dashed border and perforated edge effect',
    cssCode: `.price-coupon-clip {
  display: flex; align-items: stretch;
  border-radius: 8px; overflow: hidden;
}
.price-coupon-clip-left {
  background: #10b981; color: #fff;
  padding: 12px 14px;
  font-size: 1rem; font-weight: 800;
  display: flex; align-items: center;
  position: relative;
}
.price-coupon-clip-left::after {
  content: ''; position: absolute;
  right: -4px; top: 0; bottom: 0; width: 8px;
  background: radial-gradient(circle at 0 50%, transparent 4px, #1a1a2e 4px) 0 0 / 8px 12px;
}
.price-coupon-clip-right {
  background: #1a1a2e; color: #e2e8f0;
  padding: 12px 14px;
  font-size: 0.65rem; font-weight: 600;
  display: flex; align-items: center;
  border: 1px dashed #10b98144;
  border-left: none;
}`,
    htmlCode: `<div class="price-coupon-clip"><div class="price-coupon-clip-left">25%</div><div class="price-coupon-clip-right">OFF<br>Code: SAVE25</div></div>`,
    isNew: true,
  },
  {
    id: 'price-countdown-timer',
    name: 'Countdown Timer',
    category: 'pricing',
    tags: ['pricing', 'countdown', 'timer', 'urgent', 'animated'],
    difficulty: 'advanced',
    description: 'An animated countdown timer showing time remaining for a deal',
    cssCode: `.price-countdown-timer {
  display: flex; gap: 6px; align-items: center;
}
.price-countdown-timer-unit {
  background: #1a1a2e; border: 1px solid #10b98144;
  border-radius: 6px; padding: 6px 8px;
  text-align: center; min-width: 32px;
}
.price-countdown-timer-num {
  color: #10b981; font-size: 0.9rem; font-weight: 800;
  display: block;
  animation: count-tick 1s ease-in-out infinite;
}
.price-countdown-timer-label {
  color: #64748b; font-size: 0.4rem; font-weight: 600;
  text-transform: uppercase;
}
.price-countdown-timer-sep {
  color: #10b981; font-weight: 800; font-size: 0.8rem;
  animation: blink-colon 1s step-end infinite;
}
@keyframes count-tick {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
@keyframes blink-colon {
  0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
}`,
    htmlCode: `<div class="price-countdown-timer"><div class="price-countdown-timer-unit"><span class="price-countdown-timer-num">02</span><span class="price-countdown-timer-label">Days</span></div><span class="price-countdown-timer-sep">:</span><div class="price-countdown-timer-unit"><span class="price-countdown-timer-num">14</span><span class="price-countdown-timer-label">Hrs</span></div><span class="price-countdown-timer-sep">:</span><div class="price-countdown-timer-unit"><span class="price-countdown-timer-num">36</span><span class="price-countdown-timer-label">Min</span></div></div>`,
    isNew: true,
  },
  {
    id: 'price-comparison-highlight',
    name: 'Comparison Highlight',
    category: 'pricing',
    tags: ['pricing', 'comparison', 'highlight', 'check', 'feature'],
    difficulty: 'beginner',
    description: 'A comparison highlight showing included features with check marks',
    cssCode: `.price-comparison-highlight {
  background: #1a1a2e; border-radius: 8px;
  padding: 10px 14px; display: flex;
  flex-direction: column; gap: 6px;
}
.price-comparison-highlight-row {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.65rem; color: #e2e8f0;
}
.price-comparison-highlight-check {
  width: 14px; height: 14px;
  background: #10b98122; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.5rem; font-weight: 800;
  flex-shrink: 0;
}
.price-comparison-highlight-row:nth-child(2) .price-comparison-highlight-check {
  background: #10b981;
  color: #fff;
  animation: check-pop 0.4s ease 0.3s both;
}
@keyframes check-pop {
  0% { transform: scale(0); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="price-comparison-highlight"><div class="price-comparison-highlight-row"><span class="price-comparison-highlight-check">✓</span>5 Projects</div><div class="price-comparison-highlight-row"><span class="price-comparison-highlight-check">✓</span>Unlimited Users</div><div class="price-comparison-highlight-row"><span class="price-comparison-highlight-check">✓</span>Priority Support</div></div>`,
    isNew: true,
  },
  {
    id: 'price-sale-stamp',
    name: 'Sale Stamp',
    category: 'pricing',
    tags: ['pricing', 'stamp', 'sale', 'rotated', 'badge'],
    difficulty: 'beginner',
    description: 'A rotated sale stamp overlay like a physical rubber stamp mark',
    cssCode: `.price-sale-stamp {
  position: relative; display: inline-flex;
  align-items: center; justify-content: center;
  padding: 10px 20px;
}
.price-sale-stamp-mark {
  border: 3px solid #ef4444;
  border-radius: 6px; color: #ef4444;
  padding: 6px 14px; font-weight: 900;
  font-size: 0.8rem; text-transform: uppercase;
  transform: rotate(-12deg);
  letter-spacing: 2px;
  opacity: 0.8;
  animation: stamp-press 0.3s ease-out;
}
@keyframes stamp-press {
  0% { transform: rotate(-12deg) scale(2); opacity: 0; }
  60% { transform: rotate(-12deg) scale(0.9); opacity: 1; }
  100% { transform: rotate(-12deg) scale(1); }
}`,
    htmlCode: `<div class="price-sale-stamp"><div class="price-sale-stamp-mark">SALE</div></div>`,
    isNew: true,
  },
  {
    id: 'price-gradient-value',
    name: 'Gradient Price',
    category: 'pricing',
    tags: ['pricing', 'gradient', 'text', 'colorful', 'premium'],
    difficulty: 'beginner',
    description: 'A price displayed with an animated gradient text effect',
    cssCode: `.price-gradient-value {
  font-size: 1.8rem; font-weight: 900;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-price-flow 3s linear infinite;
}
@keyframes gradient-price-flow {
  to { background-position: 200% center; }
}`,
    htmlCode: `<div class="price-gradient-value">$99</div>`,
    isNew: true,
  },
  {
    id: 'price-bundle-badge',
    name: 'Bundle Badge',
    category: 'pricing',
    tags: ['pricing', 'bundle', 'badge', 'package', 'deal'],
    difficulty: 'intermediate',
    description: 'A bundle badge showing combined product pricing with a connecting element',
    cssCode: `.price-bundle-badge {
  display: flex; align-items: center; gap: 0;
  background: #1a1a2e; border-radius: 8px;
  overflow: hidden;
}
.price-bundle-badge-item {
  padding: 8px 12px; text-align: center;
  color: #64748b; font-size: 0.6rem; font-weight: 600;
  border-right: 1px dashed #2a2a3e;
}
.price-bundle-badge-item:last-child { border-right: none; }
.price-bundle-badge-item.highlight {
  background: #10b98122; color: #10b981;
}
.price-bundle-badge-plus {
  color: #10b981; font-weight: 800; font-size: 0.7rem;
  padding: 0 4px;
}
.price-bundle-badge-price {
  background: #10b981; color: #fff;
  padding: 8px 14px; font-weight: 800;
  font-size: 0.8rem; border-radius: 0 8px 8px 0;
}`,
    htmlCode: `<div class="price-bundle-badge"><div class="price-bundle-badge-item">Basic</div><span class="price-bundle-badge-plus">+</span><div class="price-bundle-badge-item highlight">Pro</div><div class="price-bundle-badge-price">$79</div></div>`,
    isNew: true,
  },
  {
    id: 'price-tag-ribbon-v2',
    name: 'Tag Ribbon',
    category: 'pricing',
    tags: ['pricing', 'tag', 'ribbon', 'fold', 'label'],
    difficulty: 'intermediate',
    description: 'A tag with ribbon fold at the edge, creating a 3D folded label effect',
    cssCode: `.price-tag-ribbon-v2 {
  position: relative; display: inline-block;
  background: #10b981; color: #fff;
  padding: 6px 20px 6px 12px;
  font-size: 0.7rem; font-weight: 700;
  clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
}
.price-tag-ribbon-v2::after {
  content: ''; position: absolute;
  left: -8px; top: 0; bottom: 0; width: 8px;
  background: #059669;
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
}`,
    htmlCode: `<div class="price-tag-ribbon-v2">Best Value</div>`,
    isNew: true,
  },
  {
    id: 'price-tag-shape',
    name: 'Price Tag',
    category: 'pricing',
    tags: ['pricing', 'tag', 'shape', 'label', 'retail'],
    difficulty: 'beginner',
    description: 'A classic retail price tag shape with a hole and string effect',
    cssCode: `.price-tag-shape {
  position: relative; display: inline-block;
  background: #1a1a2e; color: #10b981;
  padding: 10px 18px 10px 22px;
  font-size: 0.9rem; font-weight: 800;
  border-radius: 4px;
  border: 1px solid #10b98144;
}
.price-tag-shape::before {
  content: ''; position: absolute;
  left: 8px; top: 50%; transform: translateY(-50%);
  width: 6px; height: 6px; border-radius: 50%;
  background: #0a0a1a; border: 1px solid #10b98144;
}`,
    htmlCode: `<div class="price-tag-shape">$49</div>`,
    isNew: true,
  },
  {
    id: 'price-offer-badge',
    name: 'Offer Badge',
    category: 'pricing',
    tags: ['pricing', 'offer', 'badge', 'circle', 'special'],
    difficulty: 'beginner',
    description: 'A circular offer badge with percentage discount display',
    cssCode: `.price-offer-badge {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #059669);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  color: #fff; box-shadow: 0 4px 15px #10b98144;
  animation: offer-breathe 2s ease-in-out infinite;
}
.price-offer-badge-percent {
  font-size: 0.9rem; font-weight: 900; line-height: 1;
}
.price-offer-badge-label {
  font-size: 0.4rem; font-weight: 600; text-transform: uppercase;
  opacity: 0.9;
}
@keyframes offer-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`,
    htmlCode: `<div class="price-offer-badge"><span class="price-offer-badge-percent">50%</span><span class="price-offer-badge-label">Off</span></div>`,
    isNew: true,
  },
  {
    id: 'price-deal-flash',
    name: 'Deal Flash',
    category: 'pricing',
    tags: ['pricing', 'flash', 'deal', 'blink', 'attention'],
    difficulty: 'beginner',
    description: 'A flashing deal indicator that blinks to catch attention',
    cssCode: `.price-deal-flash {
  display: inline-flex; align-items: center; gap: 6px;
  background: #ef4444; color: #fff;
  padding: 6px 14px; border-radius: 4px;
  font-size: 0.7rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 1px;
  animation: flash-deal 0.8s ease-in-out infinite;
}
.price-deal-flash-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #fff;
  animation: dot-blink 0.8s ease-in-out infinite;
}
@keyframes flash-deal {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
@keyframes dot-blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.6); }
}`,
    htmlCode: `<div class="price-deal-flash"><span class="price-deal-flash-dot"></span>Flash Deal</div>`,
    isNew: true,
  },
  {
    id: 'price-savings-badge',
    name: 'Savings Badge',
    category: 'pricing',
    tags: ['pricing', 'savings', 'badge', 'money', 'discount'],
    difficulty: 'intermediate',
    description: 'A badge showing the amount saved with a growing animation',
    cssCode: `.price-savings-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: #10b98118; border: 1px solid #10b98144;
  border-radius: 20px; padding: 6px 14px;
}
.price-savings-badge-icon {
  width: 20px; height: 20px; border-radius: 50%;
  background: #10b981; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.6rem; font-weight: 800;
}
.price-savings-badge-text {
  color: #10b981; font-size: 0.7rem; font-weight: 700;
}
.price-savings-badge-amount {
  font-weight: 900; font-size: 0.85rem;
  animation: savings-grow 1s ease-out;
}
@keyframes savings-grow {
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="price-savings-badge"><div class="price-savings-badge-icon">$</div><div class="price-savings-badge-text">Save <span class="price-savings-badge-amount">$50</span></div></div>`,
    isNew: true,
  },
  {
    id: 'price-drop-indicator',
    name: 'Price Drop',
    category: 'pricing',
    tags: ['pricing', 'drop', 'arrow', 'decrease', 'animated'],
    difficulty: 'intermediate',
    description: 'An animated price drop indicator with a falling arrow and new price',
    cssCode: `.price-drop-indicator {
  display: flex; flex-direction: column;
  align-items: center; gap: 4px;
}
.price-drop-indicator-old {
  color: #64748b; font-size: 0.7rem; font-weight: 600;
  text-decoration: line-through;
}
.price-drop-indicator-arrow {
  color: #10b981; font-size: 1rem;
  animation: drop-bounce 1s ease infinite;
}
.price-drop-indicator-new {
  color: #10b981; font-size: 1.1rem; font-weight: 900;
}
@keyframes drop-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}`,
    htmlCode: `<div class="price-drop-indicator"><span class="price-drop-indicator-old">$149</span><span class="price-drop-indicator-arrow">↓</span><span class="price-drop-indicator-new">$79</span></div>`,
    isNew: true,
  },
  {
    id: 'price-value-highlight',
    name: 'Value Highlight',
    category: 'pricing',
    tags: ['pricing', 'value', 'highlight', 'feature', 'emphasis'],
    difficulty: 'intermediate',
    description: 'A highlighted value section with glowing emphasis on the best deal',
    cssCode: `.price-value-highlight {
  padding: 10px 16px; border-radius: 8px;
  background: #0a0a1a; border: 1px solid #2a2a3e;
  position: relative; overflow: hidden;
}
.price-value-highlight::before {
  content: ''; position: absolute;
  top: 0; left: 0; width: 3px; height: 100%;
  background: linear-gradient(180deg, #10b981, #059669);
  animation: value-shimmer 2s ease-in-out infinite;
}
.price-value-highlight-title {
  color: #64748b; font-size: 0.55rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 1px;
}
.price-value-highlight-amount {
  color: #10b981; font-size: 1.2rem; font-weight: 900;
  margin-top: 2px;
}
@keyframes value-shimmer {
  0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
}`,
    htmlCode: `<div class="price-value-highlight"><div class="price-value-highlight-title">Best Value</div><div class="price-value-highlight-amount">$29/mo</div></div>`,
    isNew: true,
  },
  {
    id: 'price-premium-badge',
    name: 'Premium Badge',
    category: 'pricing',
    tags: ['pricing', 'premium', 'badge', 'gold', 'vip'],
    difficulty: 'advanced',
    description: 'A premium badge with golden shimmer effect for VIP plans',
    cssCode: `.price-premium-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 16px; border-radius: 20px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #fff; font-size: 0.65rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 1px;
  position: relative; overflow: hidden;
}
.price-premium-badge::after {
  content: ''; position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: linear-gradient(45deg, transparent 40%, #ffffff44 50%, transparent 60%);
  animation: premium-shine 2.5s ease-in-out infinite;
}
@keyframes premium-shine {
  0% { transform: translateX(-100%) rotate(25deg); }
  100% { transform: translateX(100%) rotate(25deg); }
}
.price-premium-badge-star {
  font-size: 0.8rem; position: relative; z-index: 1;
}
.price-premium-badge-text {
  position: relative; z-index: 1;
}`,
    htmlCode: `<div class="price-premium-badge"><span class="price-premium-badge-star">★</span><span class="price-premium-badge-text">Premium</span></div>`,
    isNew: true,
  },
  {
    id: 'price-budget-tag',
    name: 'Budget Tag',
    category: 'pricing',
    tags: ['pricing', 'budget', 'tag', 'affordable', 'minimal'],
    difficulty: 'beginner',
    description: 'A minimal budget-friendly tag with a subtle green accent',
    cssCode: `.price-budget-tag {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 4px 12px; border-radius: 4px;
  background: #10b98111; border: 1px solid #10b98133;
  color: #10b981; font-size: 0.65rem; font-weight: 700;
}
.price-budget-tag::before {
  content: '💰'; font-size: 0.7rem;
}`,
    htmlCode: `<div class="price-budget-tag">Budget Friendly</div>`,
    isNew: true,
  },
  {
    id: 'price-sale-ribbon-v2',
    name: 'Sale Ribbon',
    category: 'pricing',
    tags: ['pricing', 'sale', 'ribbon', 'banner', 'horizontal'],
    difficulty: 'intermediate',
    description: 'A horizontal sale ribbon banner across the top of a card',
    cssCode: `.price-sale-ribbon-v2 {
  width: 160px; height: 100px;
  background: #1a1a2e; border-radius: 8px;
  position: relative; overflow: hidden;
}
.price-sale-ribbon-v2-banner {
  position: absolute; top: 12px; left: -30px;
  background: #ef4444; color: #fff;
  padding: 3px 50px; font-size: 0.55rem;
  font-weight: 800; text-transform: uppercase;
  letter-spacing: 2px;
  transform: rotate(-35deg);
  box-shadow: 0 2px 8px #ef444444;
}
.price-sale-ribbon-v2-content {
  padding: 30px 16px 16px; text-align: center;
}
.price-sale-ribbon-v2-price {
  color: #10b981; font-size: 1.3rem; font-weight: 900;
}
.price-sale-ribbon-v2-label {
  color: #64748b; font-size: 0.55rem; margin-top: 2px;
}`,
    htmlCode: `<div class="price-sale-ribbon-v2"><div class="price-sale-ribbon-v2-banner">Sale</div><div class="price-sale-ribbon-v2-content"><div class="price-sale-ribbon-v2-price">$19</div><div class="price-sale-ribbon-v2-label">Limited Time</div></div></div>`,
    isNew: true,
  },

  // ==================== TIMELINES (20) ====================
  {
    id: 'timeline-line-grow-v2',
    name: 'Line Grow',
    category: 'timelines',
    tags: ['timeline', 'line', 'grow', 'animated', 'progress'],
    difficulty: 'beginner',
    description: 'A timeline line that grows vertically from top to bottom',
    cssCode: `.timeline-line-grow-v2 {
  display: flex; flex-direction: column;
  align-items: center; gap: 0;
  position: relative;
}
.timeline-line-grow-v2-line {
  width: 2px; height: 60px;
  background: linear-gradient(180deg, #10b981, #10b98133);
  animation: line-extend 2s ease-out forwards;
  transform-origin: top;
}
@keyframes line-extend {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}
.timeline-line-grow-v2-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #10b981; flex-shrink: 0;
  box-shadow: 0 0 8px #10b98166;
}`,
    htmlCode: `<div class="timeline-line-grow-v2"><div class="timeline-line-grow-v2-dot"></div><div class="timeline-line-grow-v2-line"></div><div class="timeline-line-grow-v2-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-dot-pulse-v2',
    name: 'Dot Pulse',
    category: 'timelines',
    tags: ['timeline', 'dot', 'pulse', 'animated', 'milestone'],
    difficulty: 'beginner',
    description: 'Timeline dots that pulse with a ripple effect to mark milestones',
    cssCode: `.timeline-dot-pulse-v2 {
  display: flex; align-items: center; gap: 20px;
}
.timeline-dot-pulse-v2-item {
  display: flex; flex-direction: column;
  align-items: center; gap: 4px;
}
.timeline-dot-pulse-v2-dot {
  width: 12px; height: 12px; border-radius: 50%;
  background: #10b981; position: relative;
}
.timeline-dot-pulse-v2-dot::after {
  content: ''; position: absolute; inset: -4px;
  border-radius: 50%; border: 2px solid #10b981;
  animation: dot-ripple 1.5s ease-out infinite;
}
.timeline-dot-pulse-v2-label {
  color: #64748b; font-size: 0.5rem; font-weight: 600;
}
@keyframes dot-ripple {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}`,
    htmlCode: `<div class="timeline-dot-pulse-v2"><div class="timeline-dot-pulse-v2-item"><div class="timeline-dot-pulse-v2-dot"></div><span class="timeline-dot-pulse-v2-label">Step 1</span></div><div class="timeline-dot-pulse-v2-item"><div class="timeline-dot-pulse-v2-dot"></div><span class="timeline-dot-pulse-v2-label">Step 2</span></div><div class="timeline-dot-pulse-v2-item"><div class="timeline-dot-pulse-v2-dot"></div><span class="timeline-dot-pulse-v2-label">Step 3</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-connector-line',
    name: 'Connector Line',
    category: 'timelines',
    tags: ['timeline', 'connector', 'line', 'dashed', 'animated'],
    difficulty: 'intermediate',
    description: 'An animated dashed connector line between timeline steps',
    cssCode: `.timeline-connector-line {
  display: flex; align-items: center; gap: 0;
}
.timeline-connector-line-step {
  display: flex; flex-direction: column;
  align-items: center; gap: 4px; z-index: 1;
}
.timeline-connector-line-dot {
  width: 14px; height: 14px; border-radius: 50%;
  background: #10b981; border: 2px solid #0f0f1a;
}
.timeline-connector-line-conn {
  width: 30px; height: 2px;
  background: repeating-linear-gradient(90deg, #10b981 0px, #10b981 4px, transparent 4px, transparent 8px);
  background-size: 8px 2px;
  animation: dash-flow 0.6s linear infinite;
}
.timeline-connector-line-label {
  color: #64748b; font-size: 0.45rem; font-weight: 600;
}
@keyframes dash-flow {
  to { background-position: 8px 0; }
}`,
    htmlCode: `<div class="timeline-connector-line"><div class="timeline-connector-line-step"><div class="timeline-connector-line-dot"></div><span class="timeline-connector-line-label">Start</span></div><div class="timeline-connector-line-conn"></div><div class="timeline-connector-line-step"><div class="timeline-connector-line-dot"></div><span class="timeline-connector-line-label">Mid</span></div><div class="timeline-connector-line-conn"></div><div class="timeline-connector-line-step"><div class="timeline-connector-line-dot"></div><span class="timeline-connector-line-label">End</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-zigzag-path',
    name: 'Zigzag Path',
    category: 'timelines',
    tags: ['timeline', 'zigzag', 'path', 'animated', 'steps'],
    difficulty: 'advanced',
    description: 'A zigzag timeline path with steps alternating left and right',
    cssCode: `.timeline-zigzag-path {
  display: flex; flex-wrap: wrap;
  width: 160px; gap: 8px;
  justify-content: center;
}
.timeline-zigzag-path-step {
  width: 40px; padding: 6px;
  background: #1a1a2e; border-radius: 6px;
  text-align: center; border: 1px solid #10b98133;
  font-size: 0.5rem; color: #10b981; font-weight: 700;
  animation: zigzag-appear 0.5s ease-out both;
}
.timeline-zigzag-path-step:nth-child(1) { margin-left: 0; animation-delay: 0s; }
.timeline-zigzag-path-step:nth-child(2) { margin-top: 20px; animation-delay: 0.2s; }
.timeline-zigzag-path-step:nth-child(3) { margin-left: 0; animation-delay: 0.4s; }
.timeline-zigzag-path-step:nth-child(4) { margin-top: -20px; animation-delay: 0.6s; }
@keyframes zigzag-appear {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}`,
    htmlCode: `<div class="timeline-zigzag-path"><div class="timeline-zigzag-path-step">1</div><div class="timeline-zigzag-path-step">2</div><div class="timeline-zigzag-path-step">3</div><div class="timeline-zigzag-path-step">4</div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-milestone-v2',
    name: 'Milestone Marker',
    category: 'timelines',
    tags: ['timeline', 'milestone', 'marker', 'flag', 'achievement'],
    difficulty: 'intermediate',
    description: 'A milestone marker with flag icon and animated highlight',
    cssCode: `.timeline-milestone-v2 {
  display: flex; flex-direction: column;
  align-items: center; gap: 2px;
}
.timeline-milestone-v2-flag {
  width: 24px; height: 16px;
  background: #10b981; position: relative;
  clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%);
  animation: flag-wave 1s ease-in-out infinite;
}
.timeline-milestone-v2-pole {
  width: 2px; height: 30px;
  background: #10b981;
}
.timeline-milestone-v2-base {
  width: 16px; height: 4px;
  background: #10b981; border-radius: 2px;
}
.timeline-milestone-v2-label {
  color: #10b981; font-size: 0.5rem; font-weight: 700;
  margin-top: 4px;
}
@keyframes flag-wave {
  0%, 100% { transform: skewY(0deg); }
  50% { transform: skewY(-3deg); }
}`,
    htmlCode: `<div class="timeline-milestone-v2"><div class="timeline-milestone-v2-flag"></div><div class="timeline-milestone-v2-pole"></div><div class="timeline-milestone-v2-base"></div><div class="timeline-milestone-v2-label">Milestone</div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-card-reveal-v2',
    name: 'Card Reveal',
    category: 'timelines',
    tags: ['timeline', 'card', 'reveal', 'slide', 'content'],
    difficulty: 'intermediate',
    description: 'Timeline cards that reveal content with a slide-in animation',
    cssCode: `.timeline-card-reveal-v2 {
  display: flex; flex-direction: column;
  gap: 6px; padding-left: 12px;
  border-left: 2px solid #10b98133;
}
.timeline-card-reveal-v2-card {
  background: #1a1a2e; border-radius: 6px;
  padding: 8px 12px; position: relative;
  animation: card-slide-in 0.6s ease-out both;
  border: 1px solid #10b98122;
}
.timeline-card-reveal-v2-card:nth-child(2) { animation-delay: 0.3s; }
.timeline-card-reveal-v2-card::before {
  content: ''; position: absolute;
  left: -17px; top: 50%; transform: translateY(-50%);
  width: 8px; height: 8px; border-radius: 50%;
  background: #10b981; border: 2px solid #0f0f1a;
}
.timeline-card-reveal-v2-title {
  color: #10b981; font-size: 0.55rem; font-weight: 700;
}
.timeline-card-reveal-v2-desc {
  color: #64748b; font-size: 0.45rem;
}
@keyframes card-slide-in {
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="timeline-card-reveal-v2"><div class="timeline-card-reveal-v2-card"><div class="timeline-card-reveal-v2-title">Step 1</div><div class="timeline-card-reveal-v2-desc">Setup project</div></div><div class="timeline-card-reveal-v2-card"><div class="timeline-card-reveal-v2-title">Step 2</div><div class="timeline-card-reveal-v2-desc">Deploy code</div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-checkmark-step',
    name: 'Checkmark Step',
    category: 'timelines',
    tags: ['timeline', 'checkmark', 'step', 'complete', 'progress'],
    difficulty: 'intermediate',
    description: 'A step indicator that shows a checkmark animation on completion',
    cssCode: `.timeline-checkmark-step {
  display: flex; align-items: center; gap: 12px;
}
.timeline-checkmark-step-item {
  display: flex; flex-direction: column;
  align-items: center; gap: 4px;
}
.timeline-checkmark-step-circle {
  width: 22px; height: 22px; border-radius: 50%;
  border: 2px solid #10b98144;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.55rem; font-weight: 800;
  background: #0f0f1a;
}
.timeline-checkmark-step-item.done .timeline-checkmark-step-circle {
  background: #10b981; color: #fff;
  border-color: #10b981;
  animation: check-pop-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.timeline-checkmark-step-label {
  color: #64748b; font-size: 0.45rem; font-weight: 600;
}
.timeline-checkmark-step-item.done .timeline-checkmark-step-label { color: #10b981; }
@keyframes check-pop-in {
  0% { transform: scale(0); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="timeline-checkmark-step"><div class="timeline-checkmark-step-item done"><div class="timeline-checkmark-step-circle">✓</div><span class="timeline-checkmark-step-label">Done</span></div><div class="timeline-checkmark-step-item"><div class="timeline-checkmark-step-circle">2</div><span class="timeline-checkmark-step-label">Next</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-gradient-line-v2',
    name: 'Gradient Line',
    category: 'timelines',
    tags: ['timeline', 'gradient', 'line', 'colorful', 'animated'],
    difficulty: 'intermediate',
    description: 'A timeline with an animated gradient line that flows along the path',
    cssCode: `.timeline-gradient-line-v2 {
  display: flex; flex-direction: column;
  align-items: center; position: relative;
}
.timeline-gradient-line-v2-track {
  width: 3px; height: 70px;
  background: #2a2a3e; border-radius: 2px;
  position: relative; overflow: hidden;
}
.timeline-gradient-line-v2-track::after {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0;
  height: 30px;
  background: linear-gradient(180deg, #10b981, #3b82f6);
  border-radius: 2px;
  animation: gradient-flow 2s ease-in-out infinite;
}
.timeline-gradient-line-v2-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #10b981; flex-shrink: 0;
}
@keyframes gradient-flow {
  0% { top: -30px; }
  100% { top: 100%; }
}`,
    htmlCode: `<div class="timeline-gradient-line-v2"><div class="timeline-gradient-line-v2-dot"></div><div class="timeline-gradient-line-v2-track"></div><div class="timeline-gradient-line-v2-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-vertical-v2',
    name: 'Vertical Timeline',
    category: 'timelines',
    tags: ['timeline', 'vertical', 'cards', 'layout', 'alternating'],
    difficulty: 'advanced',
    description: 'A vertical timeline with alternating left/right content cards',
    cssCode: `.timeline-vertical-v2 {
  display: flex; flex-direction: column;
  align-items: center; position: relative;
  padding: 4px 0;
}
.timeline-vertical-v2::before {
  content: ''; position: absolute;
  top: 0; bottom: 0; left: 50%;
  width: 2px; background: #10b98133;
  transform: translateX(-50%);
}
.timeline-vertical-v2-item {
  display: flex; align-items: center;
  gap: 8px; width: 100%; padding: 4px 0;
  position: relative;
}
.timeline-vertical-v2-item:nth-child(even) { flex-direction: row-reverse; }
.timeline-vertical-v2-card {
  flex: 1; background: #1a1a2e;
  border-radius: 6px; padding: 6px 10px;
  border: 1px solid #10b98122;
}
.timeline-vertical-v2-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #10b981; flex-shrink: 0;
  border: 2px solid #0f0f1a; z-index: 1;
}
.timeline-vertical-v2-text {
  color: #e2e8f0; font-size: 0.5rem; font-weight: 600;
}`,
    htmlCode: `<div class="timeline-vertical-v2"><div class="timeline-vertical-v2-item"><div class="timeline-vertical-v2-card"><div class="timeline-vertical-v2-text">Event A</div></div><div class="timeline-vertical-v2-dot"></div><div style="flex:1"></div></div><div class="timeline-vertical-v2-item"><div style="flex:1"></div><div class="timeline-vertical-v2-dot"></div><div class="timeline-vertical-v2-card"><div class="timeline-vertical-v2-text">Event B</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-horizontal-v2',
    name: 'Horizontal Stepper',
    category: 'timelines',
    tags: ['timeline', 'horizontal', 'stepper', 'steps', 'progress'],
    difficulty: 'beginner',
    description: 'A horizontal step indicator showing progress through a process',
    cssCode: `.timeline-horizontal-v2 {
  display: flex; align-items: center; gap: 0;
}
.timeline-horizontal-v2-step {
  display: flex; align-items: center; gap: 0;
}
.timeline-horizontal-v2-circle {
  width: 18px; height: 18px; border-radius: 50%;
  border: 2px solid #10b98144;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.45rem; font-weight: 800; color: #64748b;
  flex-shrink: 0;
}
.timeline-horizontal-v2-step.active .timeline-horizontal-v2-circle {
  background: #10b981; border-color: #10b981;
  color: #fff;
}
.timeline-horizontal-v2-line {
  width: 24px; height: 2px;
  background: #2a2a3e;
}
.timeline-horizontal-v2-step.active + .timeline-horizontal-v2-line {
  background: #10b981;
}`,
    htmlCode: `<div class="timeline-horizontal-v2"><div class="timeline-horizontal-v2-step active"><div class="timeline-horizontal-v2-circle">1</div></div><div class="timeline-horizontal-v2-line"></div><div class="timeline-horizontal-v2-step active"><div class="timeline-horizontal-v2-circle">2</div></div><div class="timeline-horizontal-v2-line"></div><div class="timeline-horizontal-v2-step"><div class="timeline-horizontal-v2-circle">3</div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-progress-dots',
    name: 'Progress Dots',
    category: 'timelines',
    tags: ['timeline', 'dots', 'progress', 'loading', 'animated'],
    difficulty: 'beginner',
    description: 'Animated progress dots that fill sequentially along a timeline',
    cssCode: `.timeline-progress-dots {
  display: flex; align-items: center; gap: 6px;
}
.timeline-progress-dots-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #2a2a3e;
  animation: dot-fill 2s ease-in-out infinite;
}
.timeline-progress-dots-dot:nth-child(1) { animation-delay: 0s; }
.timeline-progress-dots-dot:nth-child(2) { animation-delay: 0.2s; }
.timeline-progress-dots-dot:nth-child(3) { animation-delay: 0.4s; }
.timeline-progress-dots-dot:nth-child(4) { animation-delay: 0.6s; }
.timeline-progress-dots-dot:nth-child(5) { animation-delay: 0.8s; }
@keyframes dot-fill {
  0%, 100% { background: #2a2a3e; transform: scale(1); }
  50% { background: #10b981; transform: scale(1.3); }
}`,
    htmlCode: `<div class="timeline-progress-dots"><div class="timeline-progress-dots-dot"></div><div class="timeline-progress-dots-dot"></div><div class="timeline-progress-dots-dot"></div><div class="timeline-progress-dots-dot"></div><div class="timeline-progress-dots-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-step-slide',
    name: 'Step Slide',
    category: 'timelines',
    tags: ['timeline', 'step', 'slide', 'animated', 'entrance'],
    difficulty: 'intermediate',
    description: 'Steps that slide in from the side with staggered animation delays',
    cssCode: `.timeline-step-slide {
  display: flex; flex-direction: column;
  gap: 6px;
}
.timeline-step-slide-item {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 12px; background: #1a1a2e;
  border-radius: 6px; border-left: 3px solid #10b981;
  animation: step-slide-in 0.5s ease-out both;
}
.timeline-step-slide-item:nth-child(1) { animation-delay: 0s; }
.timeline-step-slide-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-step-slide-item:nth-child(3) { animation-delay: 0.4s; }
.timeline-step-slide-num {
  color: #10b981; font-size: 0.6rem; font-weight: 800;
  min-width: 16px;
}
.timeline-step-slide-text {
  color: #e2e8f0; font-size: 0.55rem; font-weight: 600;
}
@keyframes step-slide-in {
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="timeline-step-slide"><div class="timeline-step-slide-item"><span class="timeline-step-slide-num">01</span><span class="timeline-step-slide-text">Create Account</span></div><div class="timeline-step-slide-item"><span class="timeline-step-slide-num">02</span><span class="timeline-step-slide-text">Setup Profile</span></div><div class="timeline-step-slide-item"><span class="timeline-step-slide-num">03</span><span class="timeline-step-slide-text">Get Started</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-fade-entries',
    name: 'Timeline Fade',
    category: 'timelines',
    tags: ['timeline', 'fade', 'opacity', 'stagger', 'entrance'],
    difficulty: 'beginner',
    description: 'Timeline entries that fade in one after another with staggered timing',
    cssCode: `.timeline-fade-entries {
  display: flex; flex-direction: column;
  gap: 4px; padding-left: 10px;
  border-left: 2px solid #10b98133;
}
.timeline-fade-entries-item {
  padding: 6px 10px; background: #1a1a2e;
  border-radius: 4px; position: relative;
  animation: fade-entry 0.6s ease-out both;
}
.timeline-fade-entries-item:nth-child(1) { animation-delay: 0.2s; }
.timeline-fade-entries-item:nth-child(2) { animation-delay: 0.5s; }
.timeline-fade-entries-item:nth-child(3) { animation-delay: 0.8s; }
.timeline-fade-entries-item::before {
  content: ''; position: absolute;
  left: -15px; top: 50%; transform: translateY(-50%);
  width: 6px; height: 6px; border-radius: 50%;
  background: #10b981;
}
.timeline-fade-entries-text {
  color: #e2e8f0; font-size: 0.5rem; font-weight: 600;
}
@keyframes fade-entry {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}`,
    htmlCode: `<div class="timeline-fade-entries"><div class="timeline-fade-entries-item"><span class="timeline-fade-entries-text">Phase 1</span></div><div class="timeline-fade-entries-item"><span class="timeline-fade-entries-text">Phase 2</span></div><div class="timeline-fade-entries-item"><span class="timeline-fade-entries-text">Phase 3</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-animated-path',
    name: 'Animated Path',
    category: 'timelines',
    tags: ['timeline', 'path', 'animated', 'svg', 'draw'],
    difficulty: 'advanced',
    description: 'An animated path that draws itself along a curved timeline route',
    cssCode: `.timeline-animated-path {
  width: 160px; height: 80px;
  position: relative;
}
.timeline-animated-path-svg {
  width: 100%; height: 100%;
}
.timeline-animated-path-line {
  stroke: #10b981;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-path 2s ease forwards;
}
.timeline-animated-path-dot {
  fill: #10b981;
  r: 4;
}
@keyframes draw-path {
  to { stroke-dashoffset: 0; }
}`,
    htmlCode: `<div class="timeline-animated-path"><svg class="timeline-animated-path-svg" viewBox="0 0 160 80"><path class="timeline-animated-path-line" d="M20,60 C40,60 40,20 80,20 C120,20 120,60 140,60"/><circle class="timeline-animated-path-dot" cx="20" cy="60"/><circle class="timeline-animated-path-dot" cx="80" cy="20"/><circle class="timeline-animated-path-dot" cx="140" cy="60"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'timeline-step-bounce',
    name: 'Step Bounce',
    category: 'timelines',
    tags: ['timeline', 'step', 'bounce', 'spring', 'animated'],
    difficulty: 'intermediate',
    description: 'Steps that bounce in with a spring-like overshoot animation',
    cssCode: `.timeline-step-bounce {
  display: flex; align-items: center; gap: 8px;
}
.timeline-step-bounce-item {
  display: flex; flex-direction: column;
  align-items: center; gap: 3px;
  animation: bounce-step 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.timeline-step-bounce-item:nth-child(1) { animation-delay: 0s; }
.timeline-step-bounce-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-step-bounce-item:nth-child(3) { animation-delay: 0.4s; }
.timeline-step-bounce-item:nth-child(4) { animation-delay: 0.6s; }
.timeline-step-bounce-num {
  width: 22px; height: 22px; border-radius: 50%;
  background: #10b981; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.5rem; font-weight: 800;
}
.timeline-step-bounce-label {
  color: #64748b; font-size: 0.4rem; font-weight: 600;
}
@keyframes bounce-step {
  0% { transform: translateY(30px) scale(0); opacity: 0; }
  60% { transform: translateY(-5px) scale(1.1); }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="timeline-step-bounce"><div class="timeline-step-bounce-item"><div class="timeline-step-bounce-num">1</div><span class="timeline-step-bounce-label">Plan</span></div><div class="timeline-step-bounce-item"><div class="timeline-step-bounce-num">2</div><span class="timeline-step-bounce-label">Build</span></div><div class="timeline-step-bounce-item"><div class="timeline-step-bounce-num">3</div><span class="timeline-step-bounce-label">Test</span></div><div class="timeline-step-bounce-item"><div class="timeline-step-bounce-num">4</div><span class="timeline-step-bounce-label">Ship</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-scale-grow',
    name: 'Timeline Scale',
    category: 'timelines',
    tags: ['timeline', 'scale', 'grow', 'size', 'emphasis'],
    difficulty: 'intermediate',
    description: 'Timeline nodes that scale up in size to show progression and emphasis',
    cssCode: `.timeline-scale-grow {
  display: flex; align-items: flex-end;
  gap: 8px; padding: 10px 0;
}
.timeline-scale-grow-node {
  border-radius: 50%; background: #10b981;
  animation: node-grow 0.5s ease-out both;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.4rem; font-weight: 800;
}
.timeline-scale-grow-node:nth-child(1) { width: 14px; height: 14px; animation-delay: 0s; }
.timeline-scale-grow-node:nth-child(2) { width: 20px; height: 20px; animation-delay: 0.15s; }
.timeline-scale-grow-node:nth-child(3) { width: 28px; height: 28px; animation-delay: 0.3s; }
.timeline-scale-grow-node:nth-child(4) { width: 36px; height: 36px; animation-delay: 0.45s; }
@keyframes node-grow {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="timeline-scale-grow"><div class="timeline-scale-grow-node">1</div><div class="timeline-scale-grow-node">2</div><div class="timeline-scale-grow-node">3</div><div class="timeline-scale-grow-node">4</div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-step-rotate',
    name: 'Step Rotate',
    category: 'timelines',
    tags: ['timeline', 'step', 'rotate', 'spin', 'entrance'],
    difficulty: 'intermediate',
    description: 'Steps that rotate in from different angles for a dynamic entrance',
    cssCode: `.timeline-step-rotate {
  display: flex; align-items: center; gap: 10px;
}
.timeline-step-rotate-item {
  width: 24px; height: 24px; border-radius: 6px;
  background: #1a1a2e; border: 1px solid #10b98144;
  display: flex; align-items: center; justify-content: center;
  color: #10b981; font-size: 0.5rem; font-weight: 800;
  animation: rotate-in-step 0.5s ease-out both;
}
.timeline-step-rotate-item:nth-child(1) { animation-delay: 0s; }
.timeline-step-rotate-item:nth-child(2) { animation-delay: 0.15s; }
.timeline-step-rotate-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-step-rotate-item:nth-child(4) { animation-delay: 0.45s; }
.timeline-step-rotate-item:nth-child(5) { animation-delay: 0.6s; }
@keyframes rotate-in-step {
  0% { transform: rotate(-180deg) scale(0); opacity: 0; }
  100% { transform: rotate(0deg) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="timeline-step-rotate"><div class="timeline-step-rotate-item">1</div><div class="timeline-step-rotate-item">2</div><div class="timeline-step-rotate-item">3</div><div class="timeline-step-rotate-item">4</div><div class="timeline-step-rotate-item">5</div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-glow-path',
    name: 'Timeline Glow',
    category: 'timelines',
    tags: ['timeline', 'glow', 'neon', 'line', 'bright'],
    difficulty: 'advanced',
    description: 'A glowing timeline path with neon light effect and pulsing dots',
    cssCode: `.timeline-glow-path {
  display: flex; flex-direction: column;
  align-items: center;
}
.timeline-glow-path-line {
  width: 2px; height: 50px;
  background: #10b981;
  box-shadow: 0 0 6px #10b981, 0 0 12px #10b98166;
  animation: glow-pulse 1.5s ease-in-out infinite;
}
.timeline-glow-path-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981, 0 0 16px #10b98166;
  animation: glow-pulse 1.5s ease-in-out infinite;
}
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 6px #10b981, 0 0 12px #10b98144; }
  50% { box-shadow: 0 0 12px #10b981, 0 0 24px #10b98188; }
}`,
    htmlCode: `<div class="timeline-glow-path"><div class="timeline-glow-path-dot"></div><div class="timeline-glow-path-line"></div><div class="timeline-glow-path-dot"></div><div class="timeline-glow-path-line"></div><div class="timeline-glow-path-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-step-expand',
    name: 'Step Expand',
    category: 'timelines',
    tags: ['timeline', 'step', 'expand', 'width', 'progress'],
    difficulty: 'intermediate',
    description: 'Steps that expand horizontally to show progress completion',
    cssCode: `.timeline-step-expand {
  display: flex; flex-direction: column;
  gap: 4px;
}
.timeline-step-expand-bar {
  height: 8px; border-radius: 4px;
  background: #2a2a3e; overflow: hidden;
  position: relative;
}
.timeline-step-expand-fill {
  height: 100%; border-radius: 4px;
  background: linear-gradient(90deg, #10b981, #059669);
  animation: expand-fill 1.5s ease-out both;
}
.timeline-step-expand-bar:nth-child(1) .timeline-step-expand-fill { width: 90%; animation-delay: 0.2s; }
.timeline-step-expand-bar:nth-child(2) .timeline-step-expand-fill { width: 60%; animation-delay: 0.5s; }
.timeline-step-expand-bar:nth-child(3) .timeline-step-expand-fill { width: 30%; animation-delay: 0.8s; }
.timeline-step-expand-label {
  display: flex; justify-content: space-between;
  color: #64748b; font-size: 0.4rem; font-weight: 600;
  margin-bottom: 2px;
}
@keyframes expand-fill {
  0% { width: 0; }
}`,
    htmlCode: `<div class="timeline-step-expand"><div class="timeline-step-expand-label"><span>Design</span><span>90%</span></div><div class="timeline-step-expand-bar"><div class="timeline-step-expand-fill"></div></div><div class="timeline-step-expand-label"><span>Build</span><span>60%</span></div><div class="timeline-step-expand-bar"><div class="timeline-step-expand-fill"></div></div><div class="timeline-step-expand-label"><span>Test</span><span>30%</span></div><div class="timeline-step-expand-bar"><div class="timeline-step-expand-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-flip-card',
    name: 'Timeline Flip',
    category: 'timelines',
    tags: ['timeline', 'flip', 'card', '3d', 'reveal'],
    difficulty: 'advanced',
    description: 'Timeline cards that flip to reveal content on the back side',
    cssCode: `.timeline-flip-card {
  display: flex; align-items: center; gap: 8px;
}
.timeline-flip-card-item {
  perspective: 400px;
}
.timeline-flip-card-inner {
  width: 50px; height: 36px;
  position: relative;
  transform-style: preserve-3d;
  animation: card-flip-in 0.8s ease-out both;
}
.timeline-flip-card-item:nth-child(2) .timeline-flip-card-inner { animation-delay: 0.3s; }
.timeline-flip-card-front, .timeline-flip-card-back {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.5rem; font-weight: 700;
}
.timeline-flip-card-front {
  background: #10b981; color: #fff;
}
.timeline-flip-card-back {
  background: #1a1a2e; color: #10b981;
  border: 1px solid #10b98144;
  transform: rotateY(180deg);
}
@keyframes card-flip-in {
  0% { transform: rotateY(180deg); }
  100% { transform: rotateY(0deg); }
}`,
    htmlCode: `<div class="timeline-flip-card"><div class="timeline-flip-card-item"><div class="timeline-flip-card-inner"><div class="timeline-flip-card-front">Q1</div><div class="timeline-flip-card-back">Done</div></div></div><div class="timeline-flip-card-item"><div class="timeline-flip-card-inner"><div class="timeline-flip-card-front">Q2</div><div class="timeline-flip-card-back">Active</div></div></div></div>`,
    isNew: true,
  },

  // ==================== ACCORDIONS (20) ====================
  {
    id: 'accordion-arrow-rotate-v2',
    name: 'Arrow Rotate',
    category: 'accordions',
    tags: ['accordion', 'arrow', 'rotate', 'toggle', 'indicator'],
    difficulty: 'beginner',
    description: 'An accordion with an arrow that rotates when the panel opens',
    cssCode: `.accordion-arrow-rotate-v2 {
  background: #1a1a2e; border-radius: 8px;
  overflow: hidden; border: 1px solid #2a2a3e;
}
.accordion-arrow-rotate-v2-header {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-arrow-rotate-v2-arrow {
  transition: transform 0.3s ease;
  color: #10b981; font-size: 0.8rem;
}
.accordion-arrow-rotate-v2.open .accordion-arrow-rotate-v2-arrow {
  transform: rotate(180deg);
}
.accordion-arrow-rotate-v2-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}`,
    htmlCode: `<div class="accordion-arrow-rotate-v2 open"><div class="accordion-arrow-rotate-v2-header"><span>Section Title</span><span class="accordion-arrow-rotate-v2-arrow">▼</span></div><div class="accordion-arrow-rotate-v2-body">Expanded content goes here with details.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-plus-minus-v2',
    name: 'Plus-Minus',
    category: 'accordions',
    tags: ['accordion', 'plus', 'minus', 'toggle', 'icon'],
    difficulty: 'beginner',
    description: 'An accordion with a plus icon that changes to minus when expanded',
    cssCode: `.accordion-plus-minus-v2 {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-plus-minus-v2-header {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-plus-minus-v2-icon {
  width: 16px; height: 16px;
  position: relative;
}
.accordion-plus-minus-v2-icon::before,
.accordion-plus-minus-v2-icon::after {
  content: ''; position: absolute;
  background: #10b981; border-radius: 1px;
  transition: transform 0.3s ease;
}
.accordion-plus-minus-v2-icon::before {
  width: 16px; height: 2px; top: 7px; left: 0;
}
.accordion-plus-minus-v2-icon::after {
  width: 2px; height: 16px; top: 0; left: 7px;
}
.accordion-plus-minus-v2.open .accordion-plus-minus-v2-icon::after {
  transform: rotate(90deg);
}
.accordion-plus-minus-v2-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}`,
    htmlCode: `<div class="accordion-plus-minus-v2 open"><div class="accordion-plus-minus-v2-header"><span>Details</span><div class="accordion-plus-minus-v2-icon"></div></div><div class="accordion-plus-minus-v2-body">Content revealed on toggle.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-slide-open',
    name: 'Slide Open',
    category: 'accordions',
    tags: ['accordion', 'slide', 'open', 'height', 'transition'],
    difficulty: 'intermediate',
    description: 'An accordion that slides open smoothly with max-height transition',
    cssCode: `.accordion-slide-open {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-slide-open-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  display: flex; justify-content: space-between;
}
.accordion-slide-open-toggle {
  color: #10b981; font-size: 0.65rem;
}
.accordion-slide-open-body {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: 0 14px;
  color: #64748b; font-size: 0.6rem;
}
.accordion-slide-open.open .accordion-slide-open-body {
  max-height: 80px;
  padding: 0 14px 10px;
}`,
    htmlCode: `<div class="accordion-slide-open open"><div class="accordion-slide-open-header"><span>FAQ Item</span><span class="accordion-slide-open-toggle">∨</span></div><div class="accordion-slide-open-body">This content slides open smoothly.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-fade-in-v2',
    name: 'Fade In',
    category: 'accordions',
    tags: ['accordion', 'fade', 'opacity', 'transition', 'smooth'],
    difficulty: 'beginner',
    description: 'An accordion where content fades in when the panel opens',
    cssCode: `.accordion-fade-in-v2 {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e;
}
.accordion-fade-in-v2-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-fade-in-v2-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
  opacity: 0; transition: opacity 0.4s ease;
}
.accordion-fade-in-v2.open .accordion-fade-in-v2-body {
  opacity: 1;
}`,
    htmlCode: `<div class="accordion-fade-in-v2 open"><div class="accordion-fade-in-v2-header">Click to Toggle</div><div class="accordion-fade-in-v2-body">Content fades in and out smoothly.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-border-glow',
    name: 'Border Highlight',
    category: 'accordions',
    tags: ['accordion', 'border', 'highlight', 'glow', 'active'],
    difficulty: 'intermediate',
    description: 'An accordion with a glowing border that highlights when active',
    cssCode: `.accordion-border-glow {
  border-radius: 8px; overflow: hidden;
  border: 1px solid #2a2a3e;
  background: #1a1a2e;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.accordion-border-glow.open {
  border-color: #10b981;
  box-shadow: 0 0 12px #10b98133;
}
.accordion-border-glow-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  display: flex; justify-content: space-between;
}
.accordion-border-glow-indicator {
  width: 8px; height: 8px; border-radius: 50%;
  background: #2a2a3e; transition: background 0.3s;
}
.accordion-border-glow.open .accordion-border-glow-indicator {
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
}
.accordion-border-glow-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}`,
    htmlCode: `<div class="accordion-border-glow open"><div class="accordion-border-glow-header"><span>Active Section</span><div class="accordion-border-glow-indicator"></div></div><div class="accordion-border-glow-body">Highlighted when active with glow.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-nested-panel',
    name: 'Nested Panel',
    category: 'accordions',
    tags: ['accordion', 'nested', 'panel', 'hierarchy', 'levels'],
    difficulty: 'intermediate',
    description: 'An accordion with nested sub-panels that open independently',
    cssCode: `.accordion-nested-panel {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-nested-panel-header {
  padding: 8px 12px; cursor: pointer;
  color: #e2e8f0; font-size: 0.65rem; font-weight: 600;
  background: #1a1a2e;
}
.accordion-nested-panel-body {
  padding: 4px 12px 8px;
}
.accordion-nested-panel-sub {
  background: #0f0f1a; border-radius: 4px;
  margin-top: 4px; border: 1px solid #1a1a2e;
}
.accordion-nested-panel-sub-header {
  padding: 6px 10px; cursor: pointer;
  color: #94a3b8; font-size: 0.55rem; font-weight: 600;
}
.accordion-nested-panel-sub-body {
  padding: 0 10px 6px;
  color: #64748b; font-size: 0.5rem;
}
.accordion-nested-panel-dot {
  display: inline-block; width: 6px; height: 6px;
  border-radius: 50%; background: #10b981; margin-right: 6px;
}
.accordion-nested-panel-sub .accordion-nested-panel-dot {
  background: #10b98166;
}`,
    htmlCode: `<div class="accordion-nested-panel"><div class="accordion-nested-panel-header"><span class="accordion-nested-panel-dot"></span>Parent Item</div><div class="accordion-nested-panel-body"><div class="accordion-nested-panel-sub"><div class="accordion-nested-panel-sub-header"><span class="accordion-nested-panel-dot"></span>Child Item</div><div class="accordion-nested-panel-sub-body">Nested content here.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-icon-bounce-v2',
    name: 'Icon Bounce',
    category: 'accordions',
    tags: ['accordion', 'icon', 'bounce', 'animated', 'playful'],
    difficulty: 'intermediate',
    description: 'An accordion with an icon that bounces when the panel opens',
    cssCode: `.accordion-icon-bounce-v2 {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-icon-bounce-v2-header {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-icon-bounce-v2-icon {
  font-size: 0.9rem; transition: transform 0.3s;
}
.accordion-icon-bounce-v2.open .accordion-icon-bounce-v2-icon {
  animation: icon-boing 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #10b981;
}
.accordion-icon-bounce-v2-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}
@keyframes icon-boing {
  0% { transform: scale(1); }
  40% { transform: scale(1.5); }
  70% { transform: scale(0.8); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="accordion-icon-bounce-v2 open"><div class="accordion-icon-bounce-v2-header"><span>Settings</span><span class="accordion-icon-bounce-v2-icon">⚙</span></div><div class="accordion-icon-bounce-v2-body">Icon bounces on toggle.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-stretch-expand',
    name: 'Stretch Expand',
    category: 'accordions',
    tags: ['accordion', 'stretch', 'expand', 'width', 'animated'],
    difficulty: 'advanced',
    description: 'An accordion panel that stretches wider as it expands to fill space',
    cssCode: `.accordion-stretch-expand {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e;
  width: 120px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.accordion-stretch-expand.open {
  width: 160px;
}
.accordion-stretch-expand-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  white-space: nowrap;
}
.accordion-stretch-expand-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
  white-space: nowrap;
  opacity: 0; transition: opacity 0.3s ease 0.2s;
}
.accordion-stretch-expand.open .accordion-stretch-expand-body {
  opacity: 1;
}`,
    htmlCode: `<div class="accordion-stretch-expand open"><div class="accordion-stretch-expand-header">Expandable</div><div class="accordion-stretch-expand-body">Stretches wider on open.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-color-shift-v2',
    name: 'Color Shift',
    category: 'accordions',
    tags: ['accordion', 'color', 'shift', 'gradient', 'transition'],
    difficulty: 'advanced',
    description: 'An accordion that shifts its background color when toggled open',
    cssCode: `.accordion-color-shift-v2 {
  border-radius: 8px; overflow: hidden;
  background: #1a1a2e;
  transition: background 0.4s ease;
  border: 1px solid #2a2a3e;
}
.accordion-color-shift-v2.open {
  background: linear-gradient(135deg, #1a1a2e, #0f1a2e);
  border-color: #10b98144;
}
.accordion-color-shift-v2-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  display: flex; justify-content: space-between;
  align-items: center;
}
.accordion-color-shift-v2.open .accordion-color-shift-v2-header {
  color: #10b981;
}
.accordion-color-shift-v2-bar {
  height: 2px; width: 0;
  background: #10b981;
  transition: width 0.4s ease;
}
.accordion-color-shift-v2.open .accordion-color-shift-v2-bar {
  width: 100%;
}
.accordion-color-shift-v2-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}`,
    htmlCode: `<div class="accordion-color-shift-v2 open"><div class="accordion-color-shift-v2-header"><span>Theme Color</span></div><div class="accordion-color-shift-v2-bar"></div><div class="accordion-color-shift-v2-body">Colors shift on open.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-glass-panel',
    name: 'Glass Panel',
    category: 'accordions',
    tags: ['accordion', 'glass', 'frosted', 'blur', 'modern'],
    difficulty: 'advanced',
    description: 'A frosted glass accordion panel with backdrop blur and transparency',
    cssCode: `.accordion-glass-panel {
  background: #10b98111;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid #10b98133;
  overflow: hidden;
}
.accordion-glass-panel-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  display: flex; justify-content: space-between;
  align-items: center;
}
.accordion-glass-panel-chevron {
  color: #10b981; transition: transform 0.3s;
}
.accordion-glass-panel.open .accordion-glass-panel-chevron {
  transform: rotate(180deg);
}
.accordion-glass-panel-body {
  padding: 0 14px 10px;
  color: #94a3b8; font-size: 0.6rem;
  border-top: 1px solid #10b98122;
  margin-top: 2px; padding-top: 8px;
}`,
    htmlCode: `<div class="accordion-glass-panel open"><div class="accordion-glass-panel-header"><span>Glass Panel</span><span class="accordion-glass-panel-chevron">▾</span></div><div class="accordion-glass-panel-body">Frosted glass effect with blur.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-flip-reveal',
    name: 'Flip Reveal',
    category: 'accordions',
    tags: ['accordion', 'flip', '3d', 'reveal', 'rotate'],
    difficulty: 'advanced',
    description: 'An accordion that flips to reveal content on the back side of the panel',
    cssCode: `.accordion-flip-reveal {
  perspective: 600px;
  height: 60px;
}
.accordion-flip-reveal-inner {
  position: relative; width: 100%; height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.accordion-flip-reveal.open .accordion-flip-reveal-inner {
  transform: rotateX(180deg);
}
.accordion-flip-reveal-front,
.accordion-flip-reveal-back {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex; align-items: center;
  justify-content: center;
}
.accordion-flip-reveal-front {
  background: #1a1a2e; border: 1px solid #2a2a3e;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  cursor: pointer;
}
.accordion-flip-reveal-back {
  background: #10b981; color: #fff;
  font-size: 0.6rem; font-weight: 600;
  transform: rotateX(180deg);
  padding: 10px;
}`,
    htmlCode: `<div class="accordion-flip-reveal open"><div class="accordion-flip-reveal-inner"><div class="accordion-flip-reveal-front">Click to Flip</div><div class="accordion-flip-reveal-back">Flipped content revealed!</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-rotate-handle',
    name: 'Rotate Handle',
    category: 'accordions',
    tags: ['accordion', 'rotate', 'handle', 'knob', 'interactive'],
    difficulty: 'intermediate',
    description: 'An accordion with a rotating handle knob that turns to open/close',
    cssCode: `.accordion-rotate-handle {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
  display: flex; align-items: stretch;
}
.accordion-rotate-handle-knob {
  width: 36px; display: flex;
  align-items: center; justify-content: center;
  background: #10b98111; border-right: 1px solid #2a2a3e;
}
.accordion-rotate-handle-dial {
  width: 18px; height: 18px; border-radius: 50%;
  border: 2px solid #10b981;
  position: relative; transition: transform 0.4s ease;
}
.accordion-rotate-handle-dial::after {
  content: ''; position: absolute;
  top: 2px; left: 50%; width: 2px; height: 5px;
  background: #10b981; transform: translateX(-50%);
  border-radius: 1px;
}
.accordion-rotate-handle.open .accordion-rotate-handle-dial {
  transform: rotate(90deg);
}
.accordion-rotate-handle-content {
  flex: 1; padding: 10px 12px;
}
.accordion-rotate-handle-title {
  color: #e2e8f0; font-size: 0.65rem; font-weight: 600;
}
.accordion-rotate-handle-body {
  color: #64748b; font-size: 0.55rem; margin-top: 4px;
}`,
    htmlCode: `<div class="accordion-rotate-handle open"><div class="accordion-rotate-handle-knob"><div class="accordion-rotate-handle-dial"></div></div><div class="accordion-rotate-handle-content"><div class="accordion-rotate-handle-title">Settings</div><div class="accordion-rotate-handle-body">Rotate knob to toggle.</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-elastic-open',
    name: 'Elastic Open',
    category: 'accordions',
    tags: ['accordion', 'elastic', 'spring', 'bouncy', 'animated'],
    difficulty: 'advanced',
    description: 'An accordion that opens with an elastic spring overshoot effect',
    cssCode: `.accordion-elastic-open {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-elastic-open-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-elastic-open-body {
  max-height: 0; overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
    padding 0.3s ease;
  padding: 0 14px;
}
.accordion-elastic-open.open .accordion-elastic-open-body {
  max-height: 60px;
  padding: 0 14px 10px;
}
.accordion-elastic-open-content {
  color: #64748b; font-size: 0.6rem;
}
.accordion-elastic-open-divider {
  height: 1px; background: #2a2a3e;
  transition: background 0.3s;
}
.accordion-elastic-open.open .accordion-elastic-open-divider {
  background: #10b98144;
}`,
    htmlCode: `<div class="accordion-elastic-open open"><div class="accordion-elastic-open-header">Elastic Section</div><div class="accordion-elastic-open-divider"></div><div class="accordion-elastic-open-body"><div class="accordion-elastic-open-content">Springs open with elastic bounce.</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-bounce-close',
    name: 'Bounce Close',
    category: 'accordions',
    tags: ['accordion', 'bounce', 'close', 'collapse', 'animated'],
    difficulty: 'intermediate',
    description: 'An accordion with a bouncy close animation that overshoots before settling',
    cssCode: `.accordion-bounce-close {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-bounce-close-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  display: flex; justify-content: space-between;
}
.accordion-bounce-close-badge {
  background: #10b98122; color: #10b981;
  padding: 1px 8px; border-radius: 10px;
  font-size: 0.5rem; font-weight: 700;
}
.accordion-bounce-close-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
  animation: body-settle 0.4s ease-out;
}
@keyframes body-settle {
  0% { transform: translateY(-8px); opacity: 0; }
  60% { transform: translateY(2px); }
  100% { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="accordion-bounce-close"><div class="accordion-bounce-close-header"><span>Bounce Close</span><span class="accordion-bounce-close-badge">New</span></div><div class="accordion-bounce-close-body">Content bounces into place.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-wave-expand',
    name: 'Wave Expand',
    category: 'accordions',
    tags: ['accordion', 'wave', 'expand', 'stagger', 'animated'],
    difficulty: 'intermediate',
    description: 'Accordion content expands with a wave-like staggered animation',
    cssCode: `.accordion-wave-expand {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-wave-expand-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-wave-expand-body {
  padding: 0 14px 10px; display: flex;
  flex-direction: column; gap: 4px;
}
.accordion-wave-expand-line {
  height: 6px; border-radius: 3px;
  background: #10b98122;
  animation: wave-line 0.4s ease-out both;
}
.accordion-wave-expand-line:nth-child(1) { animation-delay: 0.1s; width: 100%; }
.accordion-wave-expand-line:nth-child(2) { animation-delay: 0.2s; width: 80%; }
.accordion-wave-expand-line:nth-child(3) { animation-delay: 0.3s; width: 60%; }
@keyframes wave-line {
  0% { transform: scaleX(0); opacity: 0; }
  100% { transform: scaleX(1); opacity: 1; }
}`,
    htmlCode: `<div class="accordion-wave-expand"><div class="accordion-wave-expand-header">Wave Content</div><div class="accordion-wave-expand-body"><div class="accordion-wave-expand-line"></div><div class="accordion-wave-expand-line"></div><div class="accordion-wave-expand-line"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-ripple-open',
    name: 'Ripple Open',
    category: 'accordions',
    tags: ['accordion', 'ripple', 'wave', 'click', 'material'],
    difficulty: 'advanced',
    description: 'An accordion that opens with a ripple effect emanating from the click point',
    cssCode: `.accordion-ripple-open {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
  position: relative;
}
.accordion-ripple-open::after {
  content: ''; position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: #10b98122; border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple-expand 0.6s ease-out;
}
.accordion-ripple-open-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  position: relative; z-index: 1;
}
.accordion-ripple-open-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
  position: relative; z-index: 1;
}
@keyframes ripple-expand {
  0% { width: 0; height: 0; opacity: 1; }
  100% { width: 300px; height: 300px; opacity: 0; }
}`,
    htmlCode: `<div class="accordion-ripple-open"><div class="accordion-ripple-open-header">Ripple Toggle</div><div class="accordion-ripple-open-body">Ripple effect on interaction.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-glow-active',
    name: 'Glow Active',
    category: 'accordions',
    tags: ['accordion', 'glow', 'active', 'neon', 'highlight'],
    difficulty: 'intermediate',
    description: 'An accordion that gets a neon glow effect when in the active/open state',
    cssCode: `.accordion-glow-active {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.accordion-glow-active.open {
  border-color: #10b98188;
  box-shadow: 0 0 10px #10b98133, inset 0 0 10px #10b98111;
}
.accordion-glow-active-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  transition: color 0.3s;
}
.accordion-glow-active.open .accordion-glow-active-header {
  color: #10b981;
}
.accordion-glow-active-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}
.accordion-glow-active-bar {
  height: 2px; margin: 0 14px;
  background: transparent;
  transition: background 0.3s;
}
.accordion-glow-active.open .accordion-glow-active-bar {
  background: linear-gradient(90deg, transparent, #10b981, transparent);
}`,
    htmlCode: `<div class="accordion-glow-active open"><div class="accordion-glow-active-header">Glow Section</div><div class="accordion-glow-active-bar"></div><div class="accordion-glow-active-body">Neon glow when active.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-shadow-grow',
    name: 'Shadow Grow',
    category: 'accordions',
    tags: ['accordion', 'shadow', 'grow', 'elevate', 'depth'],
    difficulty: 'intermediate',
    description: 'An accordion that gains elevation and shadow depth when expanded',
    cssCode: `.accordion-shadow-grow {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}
.accordion-shadow-grow.open {
  box-shadow: 0 8px 25px #00000044, 0 0 0 1px #10b98133;
  transform: translateY(-2px);
}
.accordion-shadow-grow-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.accordion-shadow-grow-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
}
.accordion-shadow-grow-icon {
  display: inline-flex; align-items: center;
  justify-content: center; width: 14px; height: 14px;
  background: #10b98122; border-radius: 3px;
  color: #10b981; font-size: 0.5rem; margin-right: 6px;
}`,
    htmlCode: `<div class="accordion-shadow-grow open"><div class="accordion-shadow-grow-header"><span class="accordion-shadow-grow-icon">▾</span>Elevated Panel</div><div class="accordion-shadow-grow-body">Gains shadow depth when open.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-blur-content',
    name: 'Blur Content',
    category: 'accordions',
    tags: ['accordion', 'blur', 'content', 'focus', 'transition'],
    difficulty: 'intermediate',
    description: 'Closed accordion content is blurred, and sharpens when opened',
    cssCode: `.accordion-blur-content {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
}
.accordion-blur-content-header {
  padding: 10px 14px; cursor: pointer;
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
  display: flex; justify-content: space-between;
}
.accordion-blur-content-state {
  font-size: 0.5rem; color: #64748b; font-weight: 600;
}
.accordion-blur-content-body {
  padding: 0 14px 10px;
  color: #64748b; font-size: 0.6rem;
  filter: blur(5px);
  transition: filter 0.4s ease;
  user-select: none;
}
.accordion-blur-content.open .accordion-blur-content-body {
  filter: blur(0);
  user-select: auto;
}
.accordion-blur-content.open .accordion-blur-content-state {
  color: #10b981;
}`,
    htmlCode: `<div class="accordion-blur-content open"><div class="accordion-blur-content-header"><span>Blur Content</span><span class="accordion-blur-content-state">Visible</span></div><div class="accordion-blur-content-body">Content sharpens when opened.</div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-slide-overlap',
    name: 'Slide Overlap',
    category: 'accordions',
    tags: ['accordion', 'slide', 'overlap', 'z-index', 'stacked'],
    difficulty: 'advanced',
    description: 'Stacked accordion panels that slide and overlap when expanding',
    cssCode: `.accordion-slide-overlap {
  position: relative; display: flex;
  flex-direction: column; gap: 4px;
}
.accordion-slide-overlap-item {
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #2a2a3e; padding: 8px 14px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    z-index 0s;
  cursor: pointer; position: relative;
}
.accordion-slide-overlap-item:nth-child(1) { z-index: 3; }
.accordion-slide-overlap-item:nth-child(2) { z-index: 2; transform: translateY(-4px); }
.accordion-slide-overlap-item:nth-child(3) { z-index: 1; transform: translateY(-8px); }
.accordion-slide-overlap-item.active {
  z-index: 10;
  transform: translateY(0) scale(1.02);
  border-color: #10b98144;
  box-shadow: 0 4px 15px #10b98122;
}
.accordion-slide-overlap-title {
  color: #e2e8f0; font-size: 0.6rem; font-weight: 600;
}
.accordion-slide-overlap-body {
  color: #64748b; font-size: 0.5rem; margin-top: 4px;
}`,
    htmlCode: `<div class="accordion-slide-overlap"><div class="accordion-slide-overlap-item active"><div class="accordion-slide-overlap-title">Panel A</div><div class="accordion-slide-overlap-body">Active panel content.</div></div><div class="accordion-slide-overlap-item"><div class="accordion-slide-overlap-title">Panel B</div></div><div class="accordion-slide-overlap-item"><div class="accordion-slide-overlap-title">Panel C</div></div></div>`,
    isNew: true,
  },
];
