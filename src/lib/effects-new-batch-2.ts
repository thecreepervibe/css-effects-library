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

export const effectsNewBatch2: CSSEffect[] = [
  // ==================== IMAGE EFFECTS (10) ====================
  {
    id: 'image-grayscale-hover',
    name: 'Image Grayscale Hover',
    category: 'image',
    tags: ['image', 'grayscale', 'hover', 'filter'],
    difficulty: 'beginner',
    description: 'Image starts in grayscale and transitions to full color on hover',
    cssCode: `.img-grayscale {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
}
.img-grayscale img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}
.img-grayscale:hover img {
  filter: grayscale(0%);
}`,
    htmlCode: `<div class="img-grayscale"><img src="https://picsum.photos/seed/gray1/480/320" alt="Grayscale" /></div>`,
    isNew: true,
  },
  {
    id: 'image-zoom-pan',
    name: 'Image Zoom Pan',
    category: 'image',
    tags: ['image', 'zoom', 'pan', 'hover'],
    difficulty: 'intermediate',
    description: 'Image that zooms in and pans slightly on hover for a cinematic effect',
    cssCode: `.img-zoom-pan {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
  cursor: pointer;
}
.img-zoom-pan img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.img-zoom-pan:hover img {
  transform: scale(1.25) translateX(8px);
}`,
    htmlCode: `<div class="img-zoom-pan"><img src="https://picsum.photos/seed/zoom1/480/320" alt="Zoom Pan" /></div>`,
    isNew: true,
  },
  {
    id: 'image-overlay-slide',
    name: 'Image Overlay Slide',
    category: 'image',
    tags: ['image', 'overlay', 'slide', 'hover'],
    difficulty: 'intermediate',
    description: 'Image with a colored overlay that slides in from the side on hover',
    cssCode: `.img-overlay-slide {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #1a1a2e;
}
.img-overlay-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-overlay-slide::after {
  content: 'View';
  position: absolute;
  inset: 0;
  background: rgba(16,185,129,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a1a;
  font-weight: 700;
  font-size: 1rem;
  transform: translateX(-100%);
  transition: transform 0.4s ease;
}
.img-overlay-slide:hover::after {
  transform: translateX(0);
}`,
    htmlCode: `<div class="img-overlay-slide"><img src="https://picsum.photos/seed/overlay1/480/320" alt="Overlay" /></div>`,
    isNew: true,
  },
  {
    id: 'image-blur-reveal',
    name: 'Image Blur Reveal',
    category: 'image',
    tags: ['image', 'blur', 'reveal', 'hover'],
    difficulty: 'intermediate',
    description: 'Image starts heavily blurred and sharpens on hover with a smooth transition',
    cssCode: `.img-blur-reveal {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
  position: relative;
}
.img-blur-reveal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(12px);
  transition: filter 0.6s ease;
}
.img-blur-reveal:hover img {
  filter: blur(0px);
}
.img-blur-reveal::before {
  content: 'Hover to reveal';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 2;
  transition: opacity 0.4s ease;
}
.img-blur-reveal:hover::before {
  opacity: 0;
}`,
    htmlCode: `<div class="img-blur-reveal"><img src="https://picsum.photos/seed/blur1/480/320" alt="Blur Reveal" /></div>`,
    isNew: true,
  },
  {
    id: 'image-corner-fold',
    name: 'Image Corner Fold',
    category: 'image',
    tags: ['image', 'corner', 'fold', 'paper'],
    difficulty: 'intermediate',
    description: 'Image with a folded corner effect that reveals an accent color underneath',
    cssCode: `.img-corner-fold {
  width: 240px;
  height: 160px;
  position: relative;
  background: #10b981;
  border-radius: 12px 0 12px 12px;
  overflow: visible;
}
.img-corner-fold img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 0 12px 12px;
  display: block;
}
.img-corner-fold::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 36px 36px 0;
  border-color: transparent #0a0a1a transparent transparent;
  transition: border-width 0.3s ease;
}
.img-corner-fold:hover::after {
  border-width: 0 52px 52px 0;
}`,
    htmlCode: `<div class="img-corner-fold"><img src="https://picsum.photos/seed/fold1/480/320" alt="Corner Fold" /></div>`,
    isNew: true,
  },
  {
    id: 'image-compare-slider',
    name: 'Image Compare Slider',
    category: 'image',
    tags: ['image', 'compare', 'slider', 'before-after'],
    difficulty: 'advanced',
    description: 'Before/after image comparison with a draggable-style divider line',
    cssCode: `.img-compare {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #1a1a2e;
}
.img-compare img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.img-compare .img-after {
  clip-path: inset(0 0 0 50%);
}
.img-compare::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 3px;
  height: 100%;
  background: #10b981;
  z-index: 2;
  box-shadow: 0 0 8px #10b98166;
}
.img-compare::before {
  content: '◀ ▶';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.6rem;
  padding: 4px 6px;
  border-radius: 12px;
  z-index: 3;
  white-space: nowrap;
}`,
    htmlCode: `<div class="img-compare"><img src="https://picsum.photos/seed/before1/480/320" alt="Before" /><img class="img-after" src="https://picsum.photos/seed/after1/480/320" alt="After" /></div>`,
    isNew: true,
  },
  {
    id: 'image-stack',
    name: 'Image Stack',
    category: 'image',
    tags: ['image', 'stack', 'layer', 'hover'],
    difficulty: 'intermediate',
    description: 'Stacked images that fan out and separate on hover',
    cssCode: `.img-stack {
  width: 240px;
  height: 160px;
  position: relative;
  cursor: pointer;
}
.img-stack-item {
  position: absolute;
  width: 200px;
  height: 130px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #0f0f1a;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.img-stack-item:nth-child(1) { top: 0; left: 0; z-index: 3; }
.img-stack-item:nth-child(2) { top: 8px; left: 12px; z-index: 2; }
.img-stack-item:nth-child(3) { top: 16px; left: 24px; z-index: 1; }
.img-stack-item img { width: 100%; height: 100%; object-fit: cover; }
.img-stack:hover .img-stack-item:nth-child(1) { transform: translateX(-16px) rotate(-3deg); }
.img-stack:hover .img-stack-item:nth-child(2) { transform: translateY(-4px); }
.img-stack:hover .img-stack-item:nth-child(3) { transform: translateX(16px) rotate(3deg); }`,
    htmlCode: `<div class="img-stack"><div class="img-stack-item"><img src="https://picsum.photos/seed/s1/400/260" alt="" /></div><div class="img-stack-item"><img src="https://picsum.photos/seed/s2/400/260" alt="" /></div><div class="img-stack-item"><img src="https://picsum.photos/seed/s3/400/260" alt="" /></div></div>`,
    isNew: true,
  },
  {
    id: 'image-mosaic',
    name: 'Image Mosaic',
    category: 'image',
    tags: ['image', 'mosaic', 'grid', 'layout'],
    difficulty: 'advanced',
    description: 'Mosaic grid layout of images with hover zoom on individual tiles',
    cssCode: `.img-mosaic {
  width: 260px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 6px;
  border-radius: 12px;
  overflow: hidden;
}
.img-mosaic-item {
  overflow: hidden;
  position: relative;
  border-radius: 6px;
}
.img-mosaic-item:first-child {
  grid-row: span 2;
}
.img-mosaic-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-mosaic-item:hover img {
  transform: scale(1.15);
}
.img-mosaic-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16,185,129,0);
  transition: background 0.3s ease;
}
.img-mosaic-item:hover::after {
  background: rgba(16,185,129,0.15);
}`,
    htmlCode: `<div class="img-mosaic"><div class="img-mosaic-item"><img src="https://picsum.photos/seed/m1/260/420" alt="" /></div><div class="img-mosaic-item"><img src="https://picsum.photos/seed/m2/260/200" alt="" /></div><div class="img-mosaic-item"><img src="https://picsum.photos/seed/m3/260/200" alt="" /></div></div>`,
    isNew: true,
  },
  {
    id: 'image-spotlight',
    name: 'Image Spotlight',
    category: 'image',
    tags: ['image', 'spotlight', 'radial', 'hover'],
    difficulty: 'intermediate',
    description: 'Dark image that reveals a spotlight circle following hover position',
    cssCode: `.img-spotlight {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #1a1a2e;
  cursor: pointer;
}
.img-spotlight img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  transition: opacity 0.3s ease;
  filter: brightness(0.3);
}
.img-spotlight::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: spotlight-move 3s ease-in-out infinite;
  pointer-events: none;
}
@keyframes spotlight-move {
  0%, 100% { top: 40%; left: 35%; }
  50% { top: 60%; left: 65%; }
}
.img-spotlight:hover img {
  opacity: 1;
  filter: brightness(1);
}`,
    htmlCode: `<div class="img-spotlight"><img src="https://picsum.photos/seed/spot1/480/320" alt="Spotlight" /></div>`,
    isNew: true,
  },
  {
    id: 'image-tilt-shift',
    name: 'Image Tilt Shift',
    category: 'image',
    tags: ['image', 'tilt-shift', 'blur', 'depth'],
    difficulty: 'intermediate',
    description: 'Image with a tilt-shift miniature effect, blurring edges and keeping center sharp',
    cssCode: `.img-tilt-shift {
  width: 240px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #1a1a2e;
}
.img-tilt-shift img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-tilt-shift::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10,10,26,0.6) 0%,
    transparent 30%,
    transparent 70%,
    rgba(10,10,26,0.6) 100%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  pointer-events: none;
  transition: backdrop-filter 0.4s ease;
}
.img-tilt-shift:hover::after {
  backdrop-filter: blur(0px);
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 100%
  );
}`,
    htmlCode: `<div class="img-tilt-shift"><img src="https://picsum.photos/seed/tilt1/480/320" alt="Tilt Shift" /></div>`,
    isNew: true,
  },

  // ==================== PRICING EFFECTS (10) ====================
  {
    id: 'price-tag-ribbon',
    name: 'Price Tag Ribbon',
    category: 'pricing',
    tags: ['pricing', 'ribbon', 'tag', 'badge'],
    difficulty: 'intermediate',
    description: 'Pricing card with a decorative ribbon tag in the corner',
    cssCode: `.price-ribbon-card {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 24px 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  text-align: center;
}
.price-ribbon-card::before {
  content: 'SALE';
  position: absolute;
  top: 16px;
  right: -28px;
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 32px;
  transform: rotate(45deg);
  letter-spacing: 0.1em;
}
.price-ribbon-title {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.price-ribbon-amount {
  color: #10b981;
  font-size: 2rem;
  font-weight: 800;
}
.price-ribbon-period {
  color: #64748b;
  font-size: 0.75rem;
}`,
    htmlCode: `<div class="price-ribbon-card"><div class="price-ribbon-title">Pro Plan</div><div class="price-ribbon-amount">$19</div><div class="price-ribbon-period">/month</div></div>`,
    isNew: true,
  },
  {
    id: 'discount-badge-pulse',
    name: 'Discount Badge Pulse',
    category: 'pricing',
    tags: ['pricing', 'discount', 'badge', 'pulse'],
    difficulty: 'beginner',
    description: 'Pulsing discount badge that draws attention to savings',
    cssCode: `.discount-badge-wrap {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 24px 20px;
  border: 1px solid #2a2a3e;
  text-align: center;
  position: relative;
}
.discount-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 6px 12px;
  border-radius: 20px;
  animation: badge-pulse 1.5s ease-in-out infinite;
}
@keyframes badge-pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  50% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(239,68,68,0); }
}
.discount-price {
  color: #e2e8f0;
  font-size: 2rem;
  font-weight: 800;
}
.discount-price span {
  color: #64748b;
  font-size: 1rem;
  text-decoration: line-through;
  margin-left: 6px;
}
.discount-label {
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 4px;
}`,
    htmlCode: `<div class="discount-badge-wrap"><div class="discount-badge">-30%</div><div class="discount-price">$14<span>$20</span></div><div class="discount-label">Save $6/mo</div></div>`,
    isNew: true,
  },
  {
    id: 'plan-card-popular',
    name: 'Plan Card Popular',
    category: 'pricing',
    tags: ['pricing', 'plan', 'popular', 'highlight'],
    difficulty: 'intermediate',
    description: 'Pricing card highlighted as the most popular plan with a glowing border',
    cssCode: `.plan-popular {
  width: 220px;
  background: #0f0f1a;
  border-radius: 14px;
  padding: 24px 20px;
  text-align: center;
  position: relative;
  border: 2px solid #10b981;
  box-shadow: 0 0 20px rgba(16,185,129,0.15), 0 0 40px rgba(16,185,129,0.05);
  animation: popular-glow 3s ease-in-out infinite;
}
@keyframes popular-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.15), 0 0 40px rgba(16,185,129,0.05); }
  50% { box-shadow: 0 0 24px rgba(16,185,129,0.25), 0 0 48px rgba(16,185,129,0.1); }
}
.plan-popular-badge {
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.plan-popular-name {
  color: #e2e8f0;
  font-size: 1.1rem;
  font-weight: 700;
}
.plan-popular-price {
  color: #10b981;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 8px 0;
}
.plan-popular-period {
  color: #64748b;
  font-size: 0.75rem;
}`,
    htmlCode: `<div class="plan-popular"><div class="plan-popular-badge">Most Popular</div><div class="plan-popular-name">Business</div><div class="plan-popular-price">$49</div><div class="plan-popular-period">per month</div></div>`,
    isNew: true,
  },
  {
    id: 'price-slash-animation',
    name: 'Price Slash Animation',
    category: 'pricing',
    tags: ['pricing', 'slash', 'animation', 'sale'],
    difficulty: 'intermediate',
    description: 'Old price gets animated slash-through line with the new price appearing',
    cssCode: `.price-slash-wrap {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  border: 1px solid #2a2a3e;
}
.price-slash-old {
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
}
.price-slash-old::after {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  top: 50%;
  height: 2px;
  background: #ef4444;
  animation: slash-in 0.8s ease forwards;
  transform-origin: left;
}
@keyframes slash-in {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
.price-slash-new {
  color: #10b981;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 8px;
  animation: price-pop 0.5s ease 0.6s both;
}
@keyframes price-pop {
  0% { transform: scale(0.8); opacity: 0; }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="price-slash-wrap"><div class="price-slash-old">$29.99</div><div class="price-slash-new">$9.99</div></div>`,
    isNew: true,
  },
  {
    id: 'coupon-clip',
    name: 'Coupon Clip',
    category: 'pricing',
    tags: ['pricing', 'coupon', 'clip', 'dashed'],
    difficulty: 'intermediate',
    description: 'Coupon-style card with dashed border and scalloped edges',
    cssCode: `.coupon-clip {
  width: 240px;
  background: #0f0f1a;
  border: 2px dashed #10b981;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  text-align: center;
  overflow: hidden;
}
.coupon-clip::before, .coupon-clip::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #0a0a1a;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.coupon-clip::before { left: -12px; }
.coupon-clip::after { right: -12px; }
.coupon-code {
  color: #10b981;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  background: #10b98118;
  padding: 6px 16px;
  border-radius: 6px;
  display: inline-block;
}
.coupon-desc {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-top: 10px;
}
.coupon-value {
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 6px;
}`,
    htmlCode: `<div class="coupon-clip"><div class="coupon-value">50% OFF</div><div class="coupon-code">SAVE50</div><div class="coupon-desc">Valid until March 31</div></div>`,
    isNew: true,
  },
  {
    id: 'price-countdown',
    name: 'Price Countdown',
    category: 'pricing',
    tags: ['pricing', 'countdown', 'timer', 'urgency'],
    difficulty: 'intermediate',
    description: 'Price card with an animated countdown timer creating urgency',
    cssCode: `.price-countdown-card {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  border: 1px solid #2a2a3e;
}
.price-countdown-timer {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 14px;
}
.price-countdown-unit {
  background: #1a1a2e;
  border-radius: 6px;
  padding: 6px 8px;
  min-width: 36px;
}
.price-countdown-num {
  color: #10b981;
  font-size: 1.1rem;
  font-weight: 800;
  animation: tick-pulse 1s ease-in-out infinite;
}
@keyframes tick-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.price-countdown-label {
  color: #64748b;
  font-size: 0.55rem;
  text-transform: uppercase;
}
.price-countdown-amount {
  color: #e2e8f0;
  font-size: 1.8rem;
  font-weight: 800;
}
.price-countdown-urgency {
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 4px;
}`,
    htmlCode: `<div class="price-countdown-card"><div class="price-countdown-timer"><div class="price-countdown-unit"><div class="price-countdown-num">02</div><div class="price-countdown-label">Days</div></div><div class="price-countdown-unit"><div class="price-countdown-num">14</div><div class="price-countdown-label">Hrs</div></div><div class="price-countdown-unit"><div class="price-countdown-num">36</div><div class="price-countdown-label">Min</div></div></div><div class="price-countdown-amount">$29</div><div class="price-countdown-urgency">Offer ends soon!</div></div>`,
    isNew: true,
  },
  {
    id: 'plan-comparison-highlight',
    name: 'Plan Comparison Highlight',
    category: 'pricing',
    tags: ['pricing', 'comparison', 'highlight', 'feature'],
    difficulty: 'intermediate',
    description: 'Plan card with highlighted features row for easy comparison',
    cssCode: `.plan-compare {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #2a2a3e;
}
.plan-compare-name {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.plan-compare-price {
  color: #10b981;
  font-size: 1.6rem;
  font-weight: 800;
  margin: 4px 0 12px;
}
.plan-compare-feat {
  padding: 8px 10px;
  border-radius: 6px;
  color: #94a3b8;
  font-size: 0.8rem;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s ease, color 0.2s ease;
}
.plan-compare-feat:hover {
  background: #10b98118;
  color: #10b981;
}
.plan-compare-feat .check {
  color: #10b981;
  font-weight: 700;
}
.plan-compare-feat.hl {
  background: #10b98122;
  color: #10b981;
  font-weight: 600;
  border: 1px solid #10b98144;
}`,
    htmlCode: `<div class="plan-compare"><div class="plan-compare-name">Starter</div><div class="plan-compare-price">$9/mo</div><div class="plan-compare-feat"><span class="check">✓</span> 5 Projects</div><div class="plan-compare-feat hl"><span class="check">✓</span> 10GB Storage</div><div class="plan-compare-feat"><span class="check">✓</span> Email Support</div></div>`,
    isNew: true,
  },
  {
    id: 'sale-stamp',
    name: 'Sale Stamp',
    category: 'pricing',
    tags: ['pricing', 'stamp', 'sale', 'rotated'],
    difficulty: 'beginner',
    description: 'Rotated sale stamp overlay that looks like a traditional rubber stamp',
    cssCode: `.sale-stamp-card {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  border: 1px solid #2a2a3e;
  position: relative;
  overflow: hidden;
}
.sale-stamp {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%) rotate(-18deg);
  border: 3px solid #ef4444;
  border-radius: 8px;
  padding: 4px 16px;
  color: #ef4444;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  opacity: 0.9;
  animation: stamp-press 0.4s ease;
}
@keyframes stamp-press {
  0% { transform: translateX(-50%) rotate(-18deg) scale(2); opacity: 0; }
  60% { transform: translateX(-50%) rotate(-18deg) scale(0.95); opacity: 1; }
  100% { transform: translateX(-50%) rotate(-18deg) scale(1); opacity: 0.9; }
}
.sale-stamp-price {
  color: #e2e8f0;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 28px;
}
.sale-stamp-label {
  color: #94a3b8;
  font-size: 0.8rem;
}`,
    htmlCode: `<div class="sale-stamp-card"><div class="sale-stamp">50% OFF</div><div class="sale-stamp-price">$14.99</div><div class="sale-stamp-label">Limited time only</div></div>`,
    isNew: true,
  },
  {
    id: 'price-gradient',
    name: 'Price Gradient',
    category: 'pricing',
    tags: ['pricing', 'gradient', 'text', 'colorful'],
    difficulty: 'beginner',
    description: 'Pricing card with a vibrant gradient price text',
    cssCode: `.price-gradient-card {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  border: 1px solid #2a2a3e;
}
.price-gradient-name {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.price-gradient-amount {
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 8px 0;
  animation: grad-shift 4s ease infinite;
  background-size: 200% 200%;
}
@keyframes grad-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.price-gradient-period {
  color: #64748b;
  font-size: 0.8rem;
}
.price-gradient-cta {
  margin-top: 14px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: #0a0a0a;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 10px 20px;
  border-radius: 8px;
  display: inline-block;
}`,
    htmlCode: `<div class="price-gradient-card"><div class="price-gradient-name">Premium</div><div class="price-gradient-amount">$39</div><div class="price-gradient-period">per month</div><div class="price-gradient-cta">Get Started</div></div>`,
    isNew: true,
  },
  {
    id: 'bundle-badge',
    name: 'Bundle Badge',
    category: 'pricing',
    tags: ['pricing', 'bundle', 'badge', 'package'],
    difficulty: 'intermediate',
    description: 'Pricing card with a bundle badge showing multiple items included',
    cssCode: `.bundle-badge-card {
  width: 220px;
  background: #0f0f1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #2a2a3e;
  position: relative;
}
.bundle-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #0a0a1a;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
  animation: bundle-shine 2s ease-in-out infinite;
}
@keyframes bundle-shine {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
  50% { box-shadow: 0 0 12px 2px rgba(16,185,129,0.3); }
}
.bundle-badge-icon {
  font-size: 0.8rem;
}
.bundle-name {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
}
.bundle-items {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.bundle-item {
  color: #94a3b8;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bundle-item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
}
.bundle-price {
  color: #10b981;
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 12px;
}`,
    htmlCode: `<div class="bundle-badge-card"><div class="bundle-badge"><span class="bundle-badge-icon">📦</span> BUNDLE</div><div class="bundle-name">All-Access Pass</div><div class="bundle-items"><div class="bundle-item"><span class="bundle-item-dot"></span>Pro Plan</div><div class="bundle-item"><span class="bundle-item-dot"></span>Add-ons</div><div class="bundle-item"><span class="bundle-item-dot"></span>Priority Support</div></div><div class="bundle-price">$79</div></div>`,
    isNew: true,
  },

  // ==================== TIMELINE EFFECTS (10) ====================
  {
    id: 'timeline-line-grow',
    name: 'Timeline Line Grow',
    category: 'timelines',
    tags: ['timeline', 'line', 'grow', 'animated'],
    difficulty: 'beginner',
    description: 'Vertical timeline with an animated line that grows downward',
    cssCode: `.timeline-grow {
  position: relative;
  padding-left: 28px;
}
.timeline-grow::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #10b981, #10b98144);
  animation: line-grow 1.5s ease forwards;
  transform-origin: top;
}
@keyframes line-grow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}
.timeline-grow-item {
  position: relative;
  padding-bottom: 24px;
}
.timeline-grow-item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  border: 2px solid #0a0a1a;
  box-shadow: 0 0 6px #10b98166;
}
.timeline-grow-text {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
}
.timeline-grow-date {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="timeline-grow"><div class="timeline-grow-item"><div class="timeline-grow-text">Project Kickoff</div><div class="timeline-grow-date">Jan 2024</div></div><div class="timeline-grow-item"><div class="timeline-grow-text">Design Phase</div><div class="timeline-grow-date">Feb 2024</div></div><div class="timeline-grow-item"><div class="timeline-grow-text">Development</div><div class="timeline-grow-date">Mar 2024</div></div></div>`,
    isNew: true,
  },
  {
    id: 'step-dot-pulse',
    name: 'Step Dot Pulse',
    category: 'timelines',
    tags: ['timeline', 'step', 'dot', 'pulse'],
    difficulty: 'beginner',
    description: 'Timeline steps with pulsing dots indicating the current step',
    cssCode: `.step-pulse {
  display: flex;
  align-items: center;
  gap: 0;
}
.step-pulse-item {
  display: flex;
  align-items: center;
  gap: 0;
}
.step-pulse-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  position: relative;
  flex-shrink: 0;
}
.step-pulse-dot.active {
  background: #10b98122;
  border-color: #10b981;
  animation: step-ping 2s ease-in-out infinite;
}
.step-pulse-dot.done {
  background: #10b981;
  border-color: #10b981;
}
@keyframes step-ping {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
}
.step-pulse-line {
  width: 40px;
  height: 2px;
  background: #2a2a3e;
  flex-shrink: 0;
}
.step-pulse-line.done {
  background: #10b981;
}
.step-pulse-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  margin-top: 6px;
}`,
    htmlCode: `<div class="step-pulse"><div class="step-pulse-item"><div style="text-align:center"><div class="step-pulse-dot done"></div><div class="step-pulse-label">Start</div></div></div><div class="step-pulse-line done"></div><div class="step-pulse-item"><div style="text-align:center"><div class="step-pulse-dot active"></div><div class="step-pulse-label">Active</div></div></div><div class="step-pulse-line"></div><div class="step-pulse-item"><div style="text-align:center"><div class="step-pulse-dot"></div><div class="step-pulse-label">End</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-connector',
    name: 'Progress Connector',
    category: 'timelines',
    tags: ['timeline', 'progress', 'connector', 'fill'],
    difficulty: 'intermediate',
    description: 'Timeline with progress connectors that fill with color as steps complete',
    cssCode: `.progress-connector {
  display: flex;
  align-items: center;
}
.progress-conn-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.progress-conn-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 800;
  color: #64748b;
  z-index: 1;
  transition: all 0.3s ease;
}
.progress-conn-dot.filled {
  background: #10b981;
  border-color: #10b981;
  color: #0a0a1a;
  box-shadow: 0 0 10px #10b98144;
}
.progress-conn-bar {
  width: 48px;
  height: 3px;
  background: #2a2a3e;
  position: relative;
  overflow: hidden;
}
.progress-conn-bar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  background: #10b981;
  animation: bar-fill 1.5s ease forwards;
}
.progress-conn-bar.filled::after {
  width: 100%;
}
@keyframes bar-fill {
  to { width: 100%; }
}
.progress-conn-label {
  color: #94a3b8;
  font-size: 0.65rem;
  margin-top: 6px;
  font-weight: 600;
}`,
    htmlCode: `<div class="progress-connector"><div class="progress-conn-step"><div class="progress-conn-dot filled">1</div><div class="progress-conn-label">Order</div></div><div class="progress-conn-bar filled"></div><div class="progress-conn-step"><div class="progress-conn-dot filled">2</div><div class="progress-conn-label">Ship</div></div><div class="progress-conn-bar"></div><div class="progress-conn-step"><div class="progress-conn-dot">3</div><div class="progress-conn-label">Deliver</div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-zigzag',
    name: 'Timeline Zigzag',
    category: 'timelines',
    tags: ['timeline', 'zigzag', 'alternate', 'layout'],
    difficulty: 'advanced',
    description: 'Timeline that alternates left and right in a zigzag pattern',
    cssCode: `.timeline-zigzag {
  position: relative;
  width: 260px;
  padding: 10px 0;
}
.timeline-zigzag::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background: #2a2a3e;
  transform: translateX(-50%);
}
.timeline-zigzag-item {
  position: relative;
  width: 45%;
  padding: 10px 12px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #2a2a3e;
  margin-bottom: 12px;
  transition: border-color 0.3s ease;
}
.timeline-zigzag-item:hover {
  border-color: #10b98144;
}
.timeline-zigzag-item:nth-child(odd) {
  margin-left: 0;
  margin-right: auto;
}
.timeline-zigzag-item:nth-child(even) {
  margin-left: auto;
  margin-right: 0;
}
.timeline-zigzag-item::after {
  content: '';
  position: absolute;
  top: 14px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
}
.timeline-zigzag-item:nth-child(odd)::after { right: -20px; }
.timeline-zigzag-item:nth-child(even)::after { left: -20px; }
.timeline-zz-title {
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
}
.timeline-zz-date {
  color: #10b981;
  font-size: 0.65rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="timeline-zigzag"><div class="timeline-zigzag-item"><div class="timeline-zz-title">Research</div><div class="timeline-zz-date">Week 1</div></div><div class="timeline-zigzag-item"><div class="timeline-zz-title">Design</div><div class="timeline-zz-date">Week 2</div></div><div class="timeline-zigzag-item"><div class="timeline-zz-title">Build</div><div class="timeline-zz-date">Week 3</div></div><div class="timeline-zigzag-item"><div class="timeline-zz-title">Launch</div><div class="timeline-zz-date">Week 4</div></div></div>`,
    isNew: true,
  },
  {
    id: 'milestone-marker',
    name: 'Milestone Marker',
    category: 'timelines',
    tags: ['timeline', 'milestone', 'marker', 'flag'],
    difficulty: 'intermediate',
    description: 'Timeline with prominent milestone markers and flag icons',
    cssCode: `.milestone-marker {
  position: relative;
  padding-left: 32px;
}
.milestone-marker::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #2a2a3e;
}
.milestone-marker-item {
  position: relative;
  padding-bottom: 20px;
}
.milestone-marker-item::before {
  content: '';
  position: absolute;
  left: -28px;
  top: 2px;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  transition: all 0.3s ease;
}
.milestone-marker-item.milestone::before {
  background: #10b981;
  border-color: #10b981;
  box-shadow: 0 0 8px #10b98166;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  top: 1px;
  left: -29px;
}
.milestone-marker-title {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.milestone-marker-item.milestone .milestone-marker-title {
  color: #10b981;
}
.milestone-marker-desc {
  color: #64748b;
  font-size: 0.75rem;
  margin-top: 2px;
}
.milestone-flag {
  color: #10b981;
  font-size: 0.6rem;
  margin-left: 6px;
  font-weight: 700;
}`,
    htmlCode: `<div class="milestone-marker"><div class="milestone-marker-item milestone"><div class="milestone-marker-title">v1.0 Launch<span class="milestone-flag">🚩</span></div><div class="milestone-marker-desc">Product released</div></div><div class="milestone-marker-item"><div class="milestone-marker-title">Bug Fixes</div><div class="milestone-marker-desc">Stability improvements</div></div><div class="milestone-marker-item milestone"><div class="milestone-marker-title">v2.0 Launch<span class="milestone-flag">🚩</span></div><div class="milestone-marker-desc">Major update</div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-card-reveal',
    name: 'Timeline Card Reveal',
    category: 'timelines',
    tags: ['timeline', 'card', 'reveal', 'hover'],
    difficulty: 'intermediate',
    description: 'Timeline where hovering on a node reveals a detail card with animation',
    cssCode: `.timeline-reveal {
  position: relative;
  padding-left: 28px;
}
.timeline-reveal::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #2a2a3e;
}
.timeline-reveal-node {
  position: relative;
  padding-bottom: 16px;
  cursor: pointer;
}
.timeline-reveal-node::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2a2a3e;
  border: 2px solid #0a0a1a;
  transition: all 0.3s ease;
}
.timeline-reveal-node:hover::before {
  background: #10b981;
  box-shadow: 0 0 8px #10b98166;
}
.timeline-reveal-title {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
}
.timeline-reveal-card {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
  opacity: 0;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #2a2a3e;
  margin-top: 0;
}
.timeline-reveal-node:hover .timeline-reveal-card {
  max-height: 80px;
  opacity: 1;
  margin-top: 8px;
}
.timeline-reveal-card-text {
  padding: 10px 12px;
  color: #94a3b8;
  font-size: 0.75rem;
}`,
    htmlCode: `<div class="timeline-reveal"><div class="timeline-reveal-node"><div class="timeline-reveal-title">Phase 1</div><div class="timeline-reveal-card"><div class="timeline-reveal-card-text">Research and discovery phase with stakeholder interviews</div></div></div><div class="timeline-reveal-node"><div class="timeline-reveal-title">Phase 2</div><div class="timeline-reveal-card"><div class="timeline-reveal-card-text">Design sprints and prototype testing</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'step-checkmark',
    name: 'Step Checkmark',
    category: 'timelines',
    tags: ['timeline', 'step', 'checkmark', 'complete'],
    difficulty: 'beginner',
    description: 'Timeline steps that show a checkmark animation when completed',
    cssCode: `.step-checkmark {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 32px;
}
.step-checkmark::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 12px;
  width: 2px;
  height: calc(100% - 24px);
  background: #2a2a3e;
}
.step-checkmark-item {
  position: relative;
  padding-bottom: 18px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.step-checkmark-icon {
  position: absolute;
  left: -32px;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  color: #64748b;
  flex-shrink: 0;
  transition: all 0.3s ease;
}
.step-checkmark-item.done .step-checkmark-icon {
  background: #10b981;
  border-color: #10b981;
  color: #0a0a0a;
  animation: check-pop 0.3s ease;
}
@keyframes check-pop {
  0% { transform: scale(0.5); }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
.step-checkmark-text {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 600;
}
.step-checkmark-item.done .step-checkmark-text {
  color: #e2e8f0;
}`,
    htmlCode: `<div class="step-checkmark"><div class="step-checkmark-item done"><div class="step-checkmark-icon">✓</div><div class="step-checkmark-text">Account Created</div></div><div class="step-checkmark-item done"><div class="step-checkmark-icon">✓</div><div class="step-checkmark-text">Email Verified</div></div><div class="step-checkmark-item"><div class="step-checkmark-icon">3</div><div class="step-checkmark-text">Setup Profile</div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-gradient',
    name: 'Timeline Gradient',
    category: 'timelines',
    tags: ['timeline', 'gradient', 'colorful', 'line'],
    difficulty: 'intermediate',
    description: 'Timeline with a gradient-colored line that shifts through multiple colors',
    cssCode: `.timeline-gradient {
  position: relative;
  padding-left: 28px;
}
.timeline-gradient::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #10b981, #3b82f6, #8b5cf6);
  border-radius: 2px;
  animation: grad-flow 4s ease infinite;
  background-size: 100% 200%;
}
@keyframes grad-flow {
  0% { background-position: 0% 0%; }
  50% { background-position: 0% 100%; }
  100% { background-position: 0% 0%; }
}
.timeline-gradient-item {
  position: relative;
  padding-bottom: 20px;
}
.timeline-gradient-item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #0f0f1a;
  border: 2px solid #10b981;
  box-shadow: 0 0 6px #10b98144;
}
.timeline-gradient-title {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
}
.timeline-gradient-desc {
  color: #64748b;
  font-size: 0.75rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="timeline-gradient"><div class="timeline-gradient-item"><div class="timeline-gradient-title">Inception</div><div class="timeline-gradient-desc">Idea brainstorming</div></div><div class="timeline-gradient-item"><div class="timeline-gradient-title">Prototype</div><div class="timeline-gradient-desc">MVP development</div></div><div class="timeline-gradient-item"><div class="timeline-gradient-title">Scale</div><div class="timeline-gradient-desc">Market expansion</div></div></div>`,
    isNew: true,
  },
  {
    id: 'vertical-timeline',
    name: 'Vertical Timeline',
    category: 'timelines',
    tags: ['timeline', 'vertical', 'cards', 'dark'],
    difficulty: 'beginner',
    description: 'Clean vertical timeline with cards on alternating sides and a central line',
    cssCode: `.vertical-timeline {
  position: relative;
  width: 280px;
  padding: 10px 0;
}
.vertical-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #2a2a3e;
}
.vt-item {
  position: relative;
  padding-left: 44px;
  padding-bottom: 16px;
}
.vt-item::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #10b981;
  border: 3px solid #0a0a1a;
  z-index: 1;
}
.vt-card {
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.vt-card:hover {
  border-color: #10b98144;
  box-shadow: 0 0 12px rgba(16,185,129,0.1);
}
.vt-title {
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
}
.vt-desc {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 2px;
}
.vt-time {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 600;
  margin-top: 4px;
}`,
    htmlCode: `<div class="vertical-timeline"><div class="vt-item"><div class="vt-card"><div class="vt-title">Planning</div><div class="vt-desc">Scope definition</div><div class="vt-time">Q1 2024</div></div></div><div class="vt-item"><div class="vt-card"><div class="vt-title">Execution</div><div class="vt-desc">Sprint delivery</div><div class="vt-time">Q2 2024</div></div></div><div class="vt-item"><div class="vt-card"><div class="vt-title">Delivery</div><div class="vt-desc">Product launch</div><div class="vt-time">Q3 2024</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'horizontal-stepper',
    name: 'Horizontal Stepper',
    category: 'timelines',
    tags: ['timeline', 'horizontal', 'stepper', 'wizard'],
    difficulty: 'intermediate',
    description: 'Horizontal step-by-step stepper with animated progress between steps',
    cssCode: `.h-stepper {
  display: flex;
  align-items: flex-start;
  width: 320px;
}
.h-stepper-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}
.h-stepper-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  color: #64748b;
  z-index: 1;
  transition: all 0.3s ease;
}
.h-stepper-dot.active {
  border-color: #10b981;
  background: #10b98122;
  color: #10b981;
  box-shadow: 0 0 10px #10b98144;
}
.h-stepper-dot.done {
  background: #10b981;
  border-color: #10b981;
  color: #0a0a1a;
}
.h-stepper-label {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
}
.h-stepper-step.active .h-stepper-label {
  color: #10b981;
}
.h-stepper-connector {
  position: absolute;
  top: 13px;
  left: calc(50% + 14px);
  width: calc(100% - 28px);
  height: 2px;
  background: #2a2a3e;
}
.h-stepper-connector.done {
  background: #10b981;
}
.h-stepper-connector::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #10b981;
  animation: connector-fill 1s ease forwards;
}
.h-stepper-connector.done::after {
  width: 100%;
}
@keyframes connector-fill {
  to { width: 100%; }
}`,
    htmlCode: `<div class="h-stepper"><div class="h-stepper-step"><div class="h-stepper-dot done">1</div><div class="h-stepper-label">Cart</div><div class="h-stepper-connector done"></div></div><div class="h-stepper-step active"><div class="h-stepper-dot active">2</div><div class="h-stepper-label">Payment</div><div class="h-stepper-connector"></div></div><div class="h-stepper-step"><div class="h-stepper-dot">3</div><div class="h-stepper-label">Confirm</div></div></div>`,
    isNew: true,
  },

  // ==================== ACCORDION EFFECTS (10) ====================
  {
    id: 'accordion-arrow-rotate',
    name: 'Accordion Arrow Rotate',
    category: 'accordions',
    tags: ['accordion', 'arrow', 'rotate', 'expand'],
    difficulty: 'beginner',
    description: 'Accordion with a chevron arrow that rotates on expand',
    cssCode: `.acc-arrow {
  width: 280px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.acc-arrow-item {
  border-bottom: 1px solid #2a2a3e;
}
.acc-arrow-item:last-child {
  border-bottom: none;
}
.acc-arrow-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s ease;
}
.acc-arrow-header:hover {
  color: #10b981;
}
.acc-arrow-icon {
  font-size: 0.6rem;
  color: #64748b;
  transition: transform 0.3s ease, color 0.3s ease;
}
.acc-arrow-item:hover .acc-arrow-icon {
  transform: rotate(90deg);
  color: #10b981;
}
.acc-arrow-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-arrow-item:hover .acc-arrow-body {
  max-height: 60px;
}
.acc-arrow-text {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
}`,
    htmlCode: `<div class="acc-arrow"><div class="acc-arrow-item"><div class="acc-arrow-header">What is this? <span class="acc-arrow-icon">▶</span></div><div class="acc-arrow-body"><div class="acc-arrow-text">A collection of beautiful CSS effects for your projects.</div></div></div><div class="acc-arrow-item"><div class="acc-arrow-header">How to use? <span class="acc-arrow-icon">▶</span></div><div class="acc-arrow-body"><div class="acc-arrow-text">Copy the CSS and HTML code, then integrate into your app.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-plus-minus',
    name: 'Accordion Plus Minus',
    category: 'accordions',
    tags: ['accordion', 'plus', 'minus', 'toggle'],
    difficulty: 'beginner',
    description: 'Accordion with a plus icon that transforms into minus on expand',
    cssCode: `.acc-plus-minus {
  width: 280px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.acc-pm-item {
  border-bottom: 1px solid #1a1a2e;
}
.acc-pm-item:last-child { border-bottom: none; }
.acc-pm-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.acc-pm-icon {
  width: 18px;
  height: 18px;
  position: relative;
  flex-shrink: 0;
}
.acc-pm-icon::before, .acc-pm-icon::after {
  content: '';
  position: absolute;
  background: #64748b;
  transition: transform 0.3s ease, background 0.3s ease;
}
.acc-pm-icon::before {
  top: 50%;
  left: 2px;
  right: 2px;
  height: 2px;
  transform: translateY(-50%);
}
.acc-pm-icon::after {
  left: 50%;
  top: 2px;
  bottom: 2px;
  width: 2px;
  transform: translateX(-50%);
}
.acc-pm-item:hover .acc-pm-icon::after {
  transform: translateX(-50%) rotate(90deg);
  background: #10b981;
}
.acc-pm-item:hover .acc-pm-icon::before {
  background: #10b981;
}
.acc-pm-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-pm-item:hover .acc-pm-body { max-height: 60px; }
.acc-pm-text {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
}`,
    htmlCode: `<div class="acc-plus-minus"><div class="acc-pm-item"><div class="acc-pm-header">Features <div class="acc-pm-icon"></div></div><div class="acc-pm-body"><div class="acc-pm-text">Includes 40+ unique effects across multiple categories.</div></div></div><div class="acc-pm-item"><div class="acc-pm-header">Pricing <div class="acc-pm-icon"></div></div><div class="acc-pm-body"><div class="acc-pm-text">Free and open source for all developers.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-slide',
    name: 'Accordion Slide',
    category: 'accordions',
    tags: ['accordion', 'slide', 'expand', 'smooth'],
    difficulty: 'intermediate',
    description: 'Accordion with a smooth slide-down reveal animation for content',
    cssCode: `.acc-slide {
  width: 280px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.acc-slide-item {
  border-bottom: 1px solid #1a1a2e;
}
.acc-slide-item:last-child { border-bottom: none; }
.acc-slide-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
.acc-slide-header:hover {
  background: #10b98108;
}
.acc-slide-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.acc-slide-item:hover .acc-slide-body {
  max-height: 80px;
}
.acc-slide-content {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
  transform: translateY(-8px);
  opacity: 0;
  transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;
}
.acc-slide-item:hover .acc-slide-content {
  transform: translateY(0);
  opacity: 1;
}`,
    htmlCode: `<div class="acc-slide"><div class="acc-slide-item"><div class="acc-slide-header">Getting Started</div><div class="acc-slide-body"><div class="acc-slide-content">Install the package and import the effects you need into your project.</div></div></div><div class="acc-slide-item"><div class="acc-slide-header">Configuration</div><div class="acc-slide-body"><div class="acc-slide-content">Customize colors, timing, and other properties to match your design.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-fade',
    name: 'Accordion Fade',
    category: 'accordions',
    tags: ['accordion', 'fade', 'opacity', 'smooth'],
    difficulty: 'beginner',
    description: 'Accordion where the content fades in when expanded',
    cssCode: `.acc-fade {
  width: 280px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.acc-fade-item {
  border-bottom: 1px solid #1a1a2e;
}
.acc-fade-item:last-child { border-bottom: none; }
.acc-fade-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.acc-fade-header:hover { color: #10b981; }
.acc-fade-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-fade-item:hover .acc-fade-body { max-height: 60px; }
.acc-fade-text {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
  opacity: 0;
  transition: opacity 0.4s ease 0.15s;
}
.acc-fade-item:hover .acc-fade-text { opacity: 1; }`,
    htmlCode: `<div class="acc-fade"><div class="acc-fade-item"><div class="acc-fade-header">About Us</div><div class="acc-fade-body"><div class="acc-fade-text">We build tools that help developers create beautiful interfaces faster.</div></div></div><div class="acc-fade-item"><div class="acc-fade-header">Contact</div><div class="acc-fade-body"><div class="acc-fade-text">Reach out via email or our community Discord server.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-border-highlight',
    name: 'Accordion Border Highlight',
    category: 'accordions',
    tags: ['accordion', 'border', 'highlight', 'active'],
    difficulty: 'intermediate',
    description: 'Accordion with a left border that highlights when an item is expanded',
    cssCode: `.acc-border-hl {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.acc-border-item {
  background: #0f0f1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  border-left: 3px solid transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.acc-border-item:hover {
  border-left-color: #10b981;
  box-shadow: 0 0 12px rgba(16,185,129,0.08);
}
.acc-border-header {
  padding: 12px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.acc-border-item:hover .acc-border-header {
  color: #10b981;
}
.acc-border-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-border-item:hover .acc-border-body { max-height: 60px; }
.acc-border-text {
  padding: 0 14px 12px;
  color: #94a3b8;
  font-size: 0.78rem;
}`,
    htmlCode: `<div class="acc-border-hl"><div class="acc-border-item"><div class="acc-border-header">Security</div><div class="acc-border-body"><div class="acc-border-text">All data is encrypted end-to-end with industry standards.</div></div></div><div class="acc-border-item"><div class="acc-border-header">Privacy</div><div class="acc-border-body"><div class="acc-border-text">We never sell your data. Full GDPR compliance guaranteed.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-nested',
    name: 'Accordion Nested',
    category: 'accordions',
    tags: ['accordion', 'nested', 'sub-menu', 'hierarchy'],
    difficulty: 'advanced',
    description: 'Accordion with nested sub-items that expand within parent items',
    cssCode: `.acc-nested {
  width: 280px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.acc-nested-item {
  border-bottom: 1px solid #1a1a2e;
}
.acc-nested-item:last-child { border-bottom: none; }
.acc-nested-header {
  padding: 12px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.acc-nested-header:hover { color: #10b981; }
.acc-nested-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-nested-item:hover > .acc-nested-body { max-height: 120px; }
.acc-nested-sub {
  padding: 4px 16px 4px 28px;
  color: #94a3b8;
  font-size: 0.78rem;
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}
.acc-nested-sub:hover { color: #10b981; }
.acc-nested-sub::before {
  content: '—';
  color: #2a2a3e;
  font-size: 0.7rem;
}
.acc-nested-sub:last-child {
  padding-bottom: 12px;
}`,
    htmlCode: `<div class="acc-nested"><div class="acc-nested-item"><div class="acc-nested-header">Frontend</div><div class="acc-nested-body"><div class="acc-nested-sub">React</div><div class="acc-nested-sub">Vue</div><div class="acc-nested-sub">Svelte</div></div></div><div class="acc-nested-item"><div class="acc-nested-header">Backend</div><div class="acc-nested-body"><div class="acc-nested-sub">Node.js</div><div class="acc-nested-sub">Python</div><div class="acc-nested-sub">Go</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-icon-bounce',
    name: 'Accordion Icon Bounce',
    category: 'accordions',
    tags: ['accordion', 'icon', 'bounce', 'animated'],
    difficulty: 'intermediate',
    description: 'Accordion with an icon that bounces when the item expands',
    cssCode: `.acc-icon-bounce {
  width: 280px;
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.acc-ib-item {
  border-bottom: 1px solid #1a1a2e;
}
.acc-ib-item:last-child { border-bottom: none; }
.acc-ib-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.acc-ib-icon {
  color: #64748b;
  font-size: 0.7rem;
  transition: color 0.3s ease;
}
.acc-ib-item:hover .acc-ib-icon {
  color: #10b981;
  animation: icon-bounce 0.5s ease;
}
@keyframes icon-bounce {
  0% { transform: translateY(0); }
  30% { transform: translateY(-6px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
}
.acc-ib-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-ib-item:hover .acc-ib-body { max-height: 60px; }
.acc-ib-text {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
}`,
    htmlCode: `<div class="acc-icon-bounce"><div class="acc-ib-item"><div class="acc-ib-header">Updates <span class="acc-ib-icon">▼</span></div><div class="acc-ib-body"><div class="acc-ib-text">Version 2.0 includes 20 new effects and improved performance.</div></div></div><div class="acc-ib-item"><div class="acc-ib-header">Changelog <span class="acc-ib-icon">▼</span></div><div class="acc-ib-body"><div class="acc-ib-text">Check the GitHub releases page for detailed changelogs.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-stretch',
    name: 'Accordion Stretch',
    category: 'accordions',
    tags: ['accordion', 'stretch', 'width', 'expand'],
    difficulty: 'intermediate',
    description: 'Accordion item that stretches slightly wider when expanded',
    cssCode: `.acc-stretch {
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.acc-stretch-item {
  background: #0f0f1a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.acc-stretch-item:hover {
  transform: scaleX(1.04);
  box-shadow: 0 4px 16px rgba(16,185,129,0.1);
  border-color: #10b98144;
}
.acc-stretch-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.acc-stretch-item:hover .acc-stretch-header { color: #10b981; }
.acc-stretch-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-stretch-item:hover .acc-stretch-body { max-height: 60px; }
.acc-stretch-text {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
}`,
    htmlCode: `<div class="acc-stretch"><div class="acc-stretch-item"><div class="acc-stretch-header">Dashboard</div><div class="acc-stretch-body"><div class="acc-stretch-text">View analytics, metrics, and real-time data at a glance.</div></div></div><div class="acc-stretch-item"><div class="acc-stretch-header">Integrations</div><div class="acc-stretch-body"><div class="acc-stretch-text">Connect with 50+ third-party services and tools.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-color-shift',
    name: 'Accordion Color Shift',
    category: 'accordions',
    tags: ['accordion', 'color', 'shift', 'gradient'],
    difficulty: 'intermediate',
    description: 'Accordion that shifts background color when an item is expanded',
    cssCode: `.acc-color-shift {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.acc-cs-item {
  background: #0f0f1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
  transition: background 0.4s ease, border-color 0.3s ease;
}
.acc-cs-item:hover {
  background: #10b98108;
  border-color: #10b98144;
}
.acc-cs-header {
  padding: 13px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
}
.acc-cs-item:hover .acc-cs-header { color: #10b981; }
.acc-cs-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-cs-item:hover .acc-cs-body { max-height: 60px; }
.acc-cs-text {
  padding: 0 16px 13px;
  color: #94a3b8;
  font-size: 0.78rem;
}
.acc-cs-item:hover .acc-cs-text { color: #cbd5e1; }`,
    htmlCode: `<div class="acc-color-shift"><div class="acc-cs-item"><div class="acc-cs-header">Performance</div><div class="acc-cs-body"><div class="acc-cs-text">Optimized for speed with lazy loading and code splitting.</div></div></div><div class="acc-cs-item"><div class="acc-cs-header">Accessibility</div><div class="acc-cs-body"><div class="acc-cs-text">WCAG 2.1 compliant with full keyboard navigation support.</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-glass',
    name: 'Accordion Glass',
    category: 'accordions',
    tags: ['accordion', 'glass', 'frosted', 'blur'],
    difficulty: 'advanced',
    description: 'Accordion with frosted glass effect using backdrop blur',
    cssCode: `.acc-glass {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.acc-glass-item {
  background: rgba(16,185,129,0.06);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(16,185,129,0.15);
  transition: border-color 0.3s ease, background 0.3s ease;
}
.acc-glass-item:hover {
  border-color: rgba(16,185,129,0.4);
  background: rgba(16,185,129,0.1);
}
.acc-glass-header {
  padding: 14px 16px;
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s ease;
}
.acc-glass-item:hover .acc-glass-header { color: #10b981; }
.acc-glass-icon {
  color: #64748b;
  font-size: 0.65rem;
  transition: transform 0.3s ease, color 0.3s ease;
}
.acc-glass-item:hover .acc-glass-icon {
  transform: rotate(180deg);
  color: #10b981;
}
.acc-glass-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.acc-glass-item:hover .acc-glass-body { max-height: 60px; }
.acc-glass-text {
  padding: 0 16px 14px;
  color: #94a3b8;
  font-size: 0.78rem;
}`,
    htmlCode: `<div class="acc-glass"><div class="acc-glass-item"><div class="acc-glass-header">Design System <span class="acc-glass-icon">▼</span></div><div class="acc-glass-body"><div class="acc-glass-text">A unified set of components following consistent design principles.</div></div></div><div class="acc-glass-item"><div class="acc-glass-header">Theming <span class="acc-glass-icon">▼</span></div><div class="acc-glass-body"><div class="acc-glass-text">Easily customize the look with CSS variables and tokens.</div></div></div></div>`,
    isNew: true,
  },
];
