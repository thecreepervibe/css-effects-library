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

export const effectsRemaining1b: CSSEffect[] = [
  // ===== PRICING (10) =====
  {
    id: 'price-flip',
    name: 'Price Flip',
    category: 'pricing',
    tags: ['pricing', 'flip', '3d', 'card'],
    difficulty: 'intermediate',
    description: 'Pricing card flips to reveal details on hover',
    cssCode: `.price-flip-wrap {
  perspective: 800px;
  width: 220px;
  height: 260px;
}
.price-flip {
  width: 100%;
  height: 100%;
  background: #0a0a1a;
  border: 2px solid #10b981;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.price-flip .front, .price-flip .back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}
.price-flip .back {
  transform: rotateY(180deg);
  background: #10b981;
  color: #000;
}
.price-flip-wrap:hover .price-flip {
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="price-flip-wrap"><div class="price-flip"><div class="front"><b>$9/mo</b><span>Basic</span></div><div class="back"><b>Unlimited</b><span>All features</span></div></div></div>`,
    isNew: true,
  },
  {
    id: 'price-highlight',
    name: 'Price Highlight',
    category: 'pricing',
    tags: ['pricing', 'highlight', 'glow', 'featured'],
    difficulty: 'beginner',
    description: 'Featured pricing card with a glowing highlight border',
    cssCode: `.price-highlight {
  background: #0a0a1a;
  border: 2px solid #10b981;
  border-radius: 16px;
  padding: 28px 24px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.price-highlight::before {
  content: 'Popular';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #10b981;
  color: #000;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 14px;
  border-radius: 8px;
}
.price-highlight:hover {
  box-shadow: 0 0 20px #10b98155, 0 0 40px #10b98133;
  transform: translateY(-4px);
}`,
    htmlCode: `<div class="price-highlight"><b style="font-size:28px;color:#10b981">$29</b>/mo<p>Pro Plan</p></div>`,
    isNew: true,
  },
  {
    id: 'price-toggle',
    name: 'Price Toggle',
    category: 'pricing',
    tags: ['pricing', 'toggle', 'switch', 'monthly'],
    difficulty: 'intermediate',
    description: 'Pricing card with a monthly/yearly toggle switch',
    cssCode: `.price-toggle-card {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  color: #e2e8f0;
  text-align: center;
}
.price-toggle-track {
  width: 52px;
  height: 26px;
  background: #1e293b;
  border-radius: 13px;
  margin: 12px auto;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}
.price-toggle-track.yearly {
  background: #10b981;
}
.price-toggle-track::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.price-toggle-track.yearly::after {
  transform: translateX(26px);
}
.price-amount {
  font-size: 32px;
  font-weight: 800;
  color: #10b981;
  transition: opacity 0.2s ease;
}`,
    htmlCode: `<div class="price-toggle-card"><div class="price-amount">$9/mo</div><div class="price-toggle-track"></div><span style="font-size:12px;color:#94a3b8">Yearly save 20%</span></div>`,
    isNew: true,
  },
  {
    id: 'price-ribbon',
    name: 'Price Ribbon',
    category: 'pricing',
    tags: ['pricing', 'ribbon', 'badge', 'sale'],
    difficulty: 'intermediate',
    description: 'Pricing card with a corner ribbon badge',
    cssCode: `.price-ribbon {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 16px;
  padding: 28px 24px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.price-ribbon::before {
  content: 'Best Value';
  position: absolute;
  top: 16px;
  right: -28px;
  background: #f59e0b;
  color: #000;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 32px;
  transform: rotate(45deg);
  box-shadow: 0 2px 8px rgba(245,158,11,0.3);
}
.price-ribbon:hover {
  border-color: #f59e0b;
  box-shadow: 0 0 20px #f59e0b33;
  transition: all 0.3s ease;
}`,
    htmlCode: `<div class="price-ribbon"><b style="font-size:28px;color:#f59e0b">$49</b>/mo<p>Business</p></div>`,
    isNew: true,
  },
  {
    id: 'price-popular',
    name: 'Price Popular',
    category: 'pricing',
    tags: ['pricing', 'popular', 'recommended', 'scale'],
    difficulty: 'beginner',
    description: 'Popular plan card scales up and stands out',
    cssCode: `.price-popular {
  background: #0a0a1a;
  border: 2px solid #8b5cf6;
  border-radius: 16px;
  padding: 32px 24px;
  color: #e2e8f0;
  text-align: center;
  transform: scale(1.06);
  box-shadow: 0 0 30px #8b5cf633;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.price-popular:hover {
  transform: scale(1.1);
  box-shadow: 0 0 40px #8b5cf644, 0 8px 32px rgba(0,0,0,0.4);
}
.price-popular .badge {
  display: inline-block;
  background: #8b5cf6;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}`,
    htmlCode: `<div class="price-popular"><span class="badge">Most Popular</span><b style="font-size:28px;color:#8b5cf6">$19</b>/mo<p>Team</p></div>`,
    isNew: true,
  },
  {
    id: 'price-hover',
    name: 'Price Hover',
    category: 'pricing',
    tags: ['pricing', 'hover', 'lift', 'elevate'],
    difficulty: 'beginner',
    description: 'Pricing card lifts and reveals CTA on hover',
    cssCode: `.price-hover {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 16px;
  padding: 28px 24px;
  color: #e2e8f0;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.price-hover .cta {
  display: inline-block;
  margin-top: 12px;
  background: #10b981;
  color: #000;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.price-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(16,185,129,0.15);
  border-color: #10b981;
}
.price-hover:hover .cta {
  opacity: 1;
  transform: translateY(0);
}`,
    htmlCode: `<div class="price-hover"><b style="font-size:28px;color:#10b981">$9</b>/mo<p>Starter</p><span class="cta">Choose</span></div>`,
    isNew: true,
  },
  {
    id: 'price-compare',
    name: 'Price Compare',
    category: 'pricing',
    tags: ['pricing', 'compare', 'check', 'features'],
    difficulty: 'beginner',
    description: 'Pricing card with feature checklist and checkmarks',
    cssCode: `.price-compare {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  color: #e2e8f0;
  width: 220px;
}
.price-compare h3 {
  margin: 0 0 4px;
  color: #10b981;
}
.price-compare ul {
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
}
.price-compare li {
  padding: 4px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.price-compare li::before {
  content: '✓';
  color: #10b981;
  font-weight: 700;
}
.price-compare li.disabled {
  opacity: 0.35;
}
.price-compare li.disabled::before {
  content: '✕';
  color: #ef4444;
}`,
    htmlCode: `<div class="price-compare"><h3>$19/mo</h3><p>Pro</p><ul><li>5 Projects</li><li>Priority Support</li><li class="disabled">Custom Domain</li></ul></div>`,
    isNew: true,
  },
  {
    id: 'price-countdown',
    name: 'Price Countdown',
    category: 'pricing',
    tags: ['pricing', 'countdown', 'timer', 'urgency'],
    difficulty: 'advanced',
    description: 'Pricing card with animated countdown timer for limited offer',
    cssCode: `.price-countdown {
  background: #0a0a1a;
  border: 2px solid #ef4444;
  border-radius: 16px;
  padding: 24px;
  color: #e2e8f0;
  text-align: center;
  animation: pulse-border 2s ease-in-out infinite;
}
@keyframes pulse-border {
  0%, 100% { border-color: #ef4444; box-shadow: 0 0 0 #ef444400; }
  50% { border-color: #f87171; box-shadow: 0 0 20px #ef444433; }
}
.price-countdown .timer {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}
.price-countdown .timer span {
  background: #1e293b;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 18px;
  color: #f87171;
}
.price-countdown .old-price {
  text-decoration: line-through;
  color: #64748b;
  font-size: 14px;
}
.price-countdown .sale-price {
  font-size: 28px;
  font-weight: 800;
  color: #ef4444;
}`,
    htmlCode: `<div class="price-countdown"><span class="old-price">$49</span><span class="sale-price">$19</span>/mo<div class="timer"><span>02</span>:<span>14</span>:<span>37</span></div><p style="font-size:12px;color:#94a3b8">Offer ends soon</p></div>`,
    isNew: true,
  },
  {
    id: 'price-discount',
    name: 'Price Discount',
    category: 'pricing',
    tags: ['pricing', 'discount', 'strikethrough', 'sale'],
    difficulty: 'beginner',
    description: 'Pricing card with strikethrough old price and discount badge',
    cssCode: `.price-discount {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  color: #e2e8f0;
  text-align: center;
  position: relative;
  transition: border-color 0.3s ease;
}
.price-discount:hover {
  border-color: #10b981;
}
.price-discount .discount-badge {
  position: absolute;
  top: -10px;
  right: 16px;
  background: #ef4444;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 8px;
}
.price-discount .old {
  text-decoration: line-through;
  color: #64748b;
  font-size: 16px;
}
.price-discount .new {
  font-size: 32px;
  font-weight: 800;
  color: #10b981;
}`,
    htmlCode: `<div class="price-discount"><span class="discount-badge">-40%</span><span class="old">$49</span><br><span class="new">$29</span>/mo<p>Pro Plan</p></div>`,
    isNew: true,
  },
  {
    id: 'price-features',
    name: 'Price Features',
    category: 'pricing',
    tags: ['pricing', 'features', 'list', 'expand'],
    difficulty: 'intermediate',
    description: 'Pricing card that expands to show full feature list on hover',
    cssCode: `.price-features {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  color: #e2e8f0;
  max-height: 140px;
  overflow: hidden;
  transition: max-height 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  width: 220px;
}
.price-features:hover {
  max-height: 320px;
  border-color: #3b82f6;
  box-shadow: 0 8px 24px #3b82f622;
}
.price-features h3 {
  margin: 0 0 8px;
  color: #3b82f6;
  font-size: 22px;
}
.price-features ul {
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  font-size: 13px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}
.price-features:hover ul {
  opacity: 1;
}
.price-features li {
  padding: 3px 0;
  border-bottom: 1px solid #1e293b;
}`,
    htmlCode: `<div class="price-features"><h3>$39/mo</h3><p>Enterprise</p><ul><li>Unlimited projects</li><li>24/7 support</li><li>Custom integrations</li><li>Dedicated manager</li></ul></div>`,
    isNew: true,
  },
  // ===== TIMELINES (10) =====
  {
    id: 'timeline-anim',
    name: 'Timeline Anim',
    category: 'timelines',
    tags: ['timeline', 'animation', 'slide', 'stagger'],
    difficulty: 'intermediate',
    description: 'Timeline with staggered slide-in animation for each step',
    cssCode: `.timeline-anim {
  position: relative;
  padding-left: 28px;
  color: #e2e8f0;
}
.timeline-anim::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1e293b;
}
.timeline-anim .step {
  position: relative;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  animation: slide-in-tl 0.5s ease both;
}
.timeline-anim .step:nth-child(1) { animation-delay: 0s; }
.timeline-anim .step:nth-child(2) { animation-delay: 0.15s; }
.timeline-anim .step:nth-child(3) { animation-delay: 0.3s; }
.timeline-anim .step::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 16px;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
}
@keyframes slide-in-tl {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}`,
    htmlCode: `<div class="timeline-anim"><div class="step">Step 1: Research</div><div class="step">Step 2: Design</div><div class="step">Step 3: Launch</div></div>`,
    isNew: true,
  },
  {
    id: 'step-indicator-2',
    name: 'Step Indicator 2',
    category: 'timelines',
    tags: ['timeline', 'steps', 'indicator', 'progress'],
    difficulty: 'intermediate',
    description: 'Horizontal step indicator with active state highlight',
    cssCode: `.step-indicator-2 {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 16px;
  background: #0a0a1a;
  border-radius: 12px;
}
.step-indicator-2 .step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}
.step-indicator-2 .step .dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1e293b;
  border: 2px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #64748b;
  transition: all 0.3s ease;
}
.step-indicator-2 .step.active .dot {
  background: #10b981;
  border-color: #10b981;
  color: #000;
  box-shadow: 0 0 12px #10b98155;
}
.step-indicator-2 .step .line {
  position: absolute;
  top: 14px;
  left: calc(50% + 18px);
  width: calc(100% - 36px);
  height: 2px;
  background: #1e293b;
}
.step-indicator-2 .step.done .line {
  background: #10b981;
}
.step-indicator-2 .step:last-child .line { display: none; }
.step-indicator-2 .step span {
  font-size: 11px;
  color: #64748b;
  margin-top: 6px;
}
.step-indicator-2 .step.active span { color: #10b981; }`,
    htmlCode: `<div class="step-indicator-2"><div class="step done"><div class="dot">1</div><div class="line"></div><span>Cart</span></div><div class="step active"><div class="dot">2</div><div class="line"></div><span>Pay</span></div><div class="step"><div class="dot">3</div><span>Done</span></div></div>`,
    isNew: true,
  },
  {
    id: 'vertical-timeline',
    name: 'Vertical Timeline',
    category: 'timelines',
    tags: ['timeline', 'vertical', 'line', 'dots'],
    difficulty: 'beginner',
    description: 'Classic vertical timeline with alternating left-right layout',
    cssCode: `.vertical-timeline {
  position: relative;
  padding: 8px 0;
  color: #e2e8f0;
  max-width: 360px;
}
.vertical-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #10b981;
  transform: translateX(-50%);
}
.vertical-timeline .item {
  padding: 10px 16px;
  margin: 8px 0;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  width: 45%;
  position: relative;
  font-size: 13px;
}
.vertical-timeline .item:nth-child(odd) {
  margin-left: auto;
}
.vertical-timeline .item::before {
  content: '';
  position: absolute;
  top: 14px;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
}
.vertical-timeline .item:nth-child(odd)::before {
  left: -20px;
}
.vertical-timeline .item:nth-child(even)::before {
  right: -20px;
}`,
    htmlCode: `<div class="vertical-timeline"><div class="item"><b>2024</b> Q1 launch</div><div class="item"><b>2024</b> Q2 growth</div><div class="item"><b>2024</b> Q3 scale</div></div>`,
    isNew: true,
  },
  {
    id: 'horizontal-timeline',
    name: 'Horizontal Timeline',
    category: 'timelines',
    tags: ['timeline', 'horizontal', 'scroll', 'steps'],
    difficulty: 'intermediate',
    description: 'Horizontal scrolling timeline with connected dots',
    cssCode: `.horizontal-timeline {
  display: flex;
  align-items: flex-start;
  gap: 0;
  padding: 20px 12px;
  background: #0a0a1a;
  border-radius: 12px;
  overflow-x: auto;
  color: #e2e8f0;
}
.horizontal-timeline .node {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  position: relative;
}
.horizontal-timeline .node .dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10b981;
  border: 3px solid #0a0a1a;
  z-index: 1;
  box-shadow: 0 0 8px #10b98144;
}
.horizontal-timeline .node .dot.inactive {
  background: #1e293b;
  box-shadow: none;
}
.horizontal-timeline .node .connector {
  position: absolute;
  top: 7px;
  left: calc(50% + 8px);
  width: calc(100% - 16px);
  height: 2px;
  background: #1e293b;
}
.horizontal-timeline .node .connector.done {
  background: #10b981;
}
.horizontal-timeline .node:last-child .connector { display: none; }
.horizontal-timeline .node span {
  font-size: 11px;
  margin-top: 8px;
  color: #94a3b8;
}`,
    htmlCode: `<div class="horizontal-timeline"><div class="node"><div class="dot"></div><div class="connector done"></div><span>Start</span></div><div class="node"><div class="dot"></div><div class="connector"></div><span>Mid</span></div><div class="node"><div class="dot inactive"></div><span>End</span></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-icons',
    name: 'Timeline Icons',
    category: 'timelines',
    tags: ['timeline', 'icons', 'emoji', 'visual'],
    difficulty: 'beginner',
    description: 'Timeline with icon markers instead of plain dots',
    cssCode: `.timeline-icons {
  position: relative;
  padding-left: 40px;
  color: #e2e8f0;
}
.timeline-icons::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #10b981, #3b82f6, #8b5cf6);
  border-radius: 1px;
}
.timeline-icons .item {
  position: relative;
  margin-bottom: 16px;
  padding: 10px 14px;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  font-size: 13px;
  transition: border-color 0.3s ease;
}
.timeline-icons .item:hover {
  border-color: #10b981;
}
.timeline-icons .item .icon {
  position: absolute;
  left: -32px;
  top: 8px;
  width: 24px;
  height: 24px;
  background: #0a0a1a;
  border: 2px solid #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}`,
    htmlCode: `<div class="timeline-icons"><div class="item"><span class="icon">🚀</span>Launch phase</div><div class="item"><span class="icon">📈</span>Growth phase</div><div class="item"><span class="icon">🏆</span>Success</div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-lines',
    name: 'Timeline Lines',
    category: 'timelines',
    tags: ['timeline', 'lines', 'connector', 'animated'],
    difficulty: 'intermediate',
    description: 'Timeline with animated connecting lines that draw on scroll',
    cssCode: `.timeline-lines {
  position: relative;
  padding-left: 28px;
  color: #e2e8f0;
}
.timeline-lines .line-track {
  position: absolute;
  left: 8px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #1e293b;
  border-radius: 1px;
}
.timeline-lines .line-fill {
  width: 100%;
  height: 60%;
  background: linear-gradient(to bottom, #10b981, #3b82f6);
  border-radius: 1px;
  transition: height 0.6s ease;
}
.timeline-lines .item {
  position: relative;
  margin-bottom: 18px;
  padding: 10px 14px;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  font-size: 13px;
}
.timeline-lines .item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 14px;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
}
.timeline-lines:hover .line-fill {
  height: 100%;
}`,
    htmlCode: `<div class="timeline-lines"><div class="line-track"><div class="line-fill"></div></div><div class="item">Phase 1</div><div class="item">Phase 2</div><div class="item">Phase 3</div></div>`,
    isNew: true,
  },
  {
    id: 'step-progress-2',
    name: 'Step Progress 2',
    category: 'timelines',
    tags: ['timeline', 'progress', 'bar', 'steps'],
    difficulty: 'beginner',
    description: 'Progress bar style step indicator with numbered segments',
    cssCode: `.step-progress-2 {
  background: #0a0a1a;
  border-radius: 12px;
  padding: 16px;
  color: #e2e8f0;
}
.step-progress-2 .bar-track {
  height: 6px;
  background: #1e293b;
  border-radius: 3px;
  margin-bottom: 12px;
  overflow: hidden;
}
.step-progress-2 .bar-fill {
  height: 100%;
  width: 66%;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  border-radius: 3px;
  transition: width 0.5s ease;
}
.step-progress-2 .labels {
  display: flex;
  justify-content: space-between;
}
.step-progress-2 .labels span {
  font-size: 12px;
  color: #64748b;
  text-align: center;
  flex: 1;
}
.step-progress-2 .labels span.active {
  color: #10b981;
  font-weight: 700;
}
.step-progress-2:hover .bar-fill {
  width: 100%;
}`,
    htmlCode: `<div class="step-progress-2"><div class="bar-track"><div class="bar-fill"></div></div><div class="labels"><span class="active">Step 1</span><span class="active">Step 2</span><span>Step 3</span></div></div>`,
    isNew: true,
  },
  {
    id: 'milestone-anim',
    name: 'Milestone Anim',
    category: 'timelines',
    tags: ['timeline', 'milestone', 'celebrate', 'animation'],
    difficulty: 'advanced',
    description: 'Milestone marker with celebration pulse animation',
    cssCode: `.milestone-anim {
  position: relative;
  padding-left: 36px;
  color: #e2e8f0;
}
.milestone-anim::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1e293b;
}
.milestone-anim .milestone {
  position: relative;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
}
.milestone-anim .milestone::before {
  content: '';
  position: absolute;
  left: -30px;
  top: 12px;
  width: 16px;
  height: 16px;
  background: #f59e0b;
  border-radius: 50%;
  border: 3px solid #0a0a1a;
  z-index: 1;
}
.milestone-anim .milestone::after {
  content: '';
  position: absolute;
  left: -34px;
  top: 8px;
  width: 24px;
  height: 24px;
  border: 2px solid #f59e0b;
  border-radius: 50%;
  animation: milestone-pulse 1.5s ease-out infinite;
}
@keyframes milestone-pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2); opacity: 0; }
}`,
    htmlCode: `<div class="milestone-anim"><div class="milestone"><b style="color:#f59e0b">1K Users!</b><p style="font-size:12px;color:#94a3b8">Major milestone</p></div><div class="milestone"><b style="color:#f59e0b">10K Users!</b></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-reveal',
    name: 'Timeline Reveal',
    category: 'timelines',
    tags: ['timeline', 'reveal', 'fade', 'hover'],
    difficulty: 'intermediate',
    description: 'Timeline items reveal content on hover with fade-in',
    cssCode: `.timeline-reveal {
  position: relative;
  padding-left: 28px;
  color: #e2e8f0;
}
.timeline-reveal::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1e293b;
}
.timeline-reveal .item {
  position: relative;
  margin-bottom: 12px;
  padding: 10px 14px;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  cursor: pointer;
}
.timeline-reveal .item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 14px;
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
}
.timeline-reveal .item .detail {
  font-size: 12px;
  color: #94a3b8;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease, margin 0.3s ease;
}
.timeline-reveal .item:hover .detail {
  max-height: 60px;
  opacity: 1;
  margin-top: 6px;
}
.timeline-reveal .item:hover {
  border-color: #3b82f6;
}`,
    htmlCode: `<div class="timeline-reveal"><div class="item">Step 1<div class="detail">Gather requirements and plan</div></div><div class="item">Step 2<div class="detail">Design and prototype</div></div><div class="item">Step 3<div class="detail">Build and deploy</div></div></div>`,
    isNew: true,
  },
  {
    id: 'timeline-expand',
    name: 'Timeline Expand',
    category: 'timelines',
    tags: ['timeline', 'expand', 'collapsible', 'details'],
    difficulty: 'intermediate',
    description: 'Timeline with expandable detail sections on each node',
    cssCode: `.timeline-expand {
  position: relative;
  padding-left: 28px;
  color: #e2e8f0;
}
.timeline-expand::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
}
.timeline-expand .item {
  position: relative;
  margin-bottom: 12px;
}
.timeline-expand .item .header {
  padding: 10px 14px;
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.timeline-expand .item .header::after {
  content: '+';
  color: #8b5cf6;
  font-weight: 700;
  transition: transform 0.3s ease;
}
.timeline-expand .item:hover .header {
  border-color: #8b5cf6;
}
.timeline-expand .item:hover .header::after {
  transform: rotate(45deg);
}
.timeline-expand .item::before {
  content: '';
  position: absolute;
  left: -24px;
  top: 14px;
  width: 8px;
  height: 8px;
  background: #8b5cf6;
  border-radius: 50%;
}`,
    htmlCode: `<div class="timeline-expand"><div class="item"><div class="header">Phase 1: Plan</div></div><div class="item"><div class="header">Phase 2: Build</div></div><div class="item"><div class="header">Phase 3: Launch</div></div></div>`,
    isNew: true,
  },
  // ===== ACCORDIONS (10) =====
  {
    id: 'accordion-slide',
    name: 'Accordion Slide',
    category: 'accordions',
    tags: ['accordion', 'slide', 'expand', 'collapse'],
    difficulty: 'beginner',
    description: 'Accordion with smooth slide-down content reveal',
    cssCode: `.accordion-slide {
  background: #0a0a1a;
  border-radius: 12px;
  overflow: hidden;
  color: #e2e8f0;
  width: 280px;
}
.accordion-slide .item {
  border-bottom: 1px solid #1e293b;
}
.accordion-slide .item:last-child {
  border-bottom: none;
}
.accordion-slide .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s ease;
}
.accordion-slide .item .title:hover {
  background: #0f0f2a;
}
.accordion-slide .item .title::after {
  content: '▾';
  color: #10b981;
  transition: transform 0.3s ease;
}
.accordion-slide .item .title.open::after {
  transform: rotate(180deg);
}
.accordion-slide .item .content {
  padding: 0 16px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
}
.accordion-slide .item .content.open {
  max-height: 100px;
  padding: 0 16px 14px;
}`,
    htmlCode: `<div class="accordion-slide"><div class="item"><div class="title open">Section 1</div><div class="content open">Details for section 1</div></div><div class="item"><div class="title">Section 2</div><div class="content">Details for section 2</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-rotate',
    name: 'Accordion Rotate',
    category: 'accordions',
    tags: ['accordion', 'rotate', 'arrow', 'icon'],
    difficulty: 'beginner',
    description: 'Accordion with rotating arrow indicator on toggle',
    cssCode: `.accordion-rotate {
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-rotate .item {
  border-bottom: 1px solid #1e293b;
}
.accordion-rotate .item:last-child {
  border-bottom: none;
}
.accordion-rotate .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.3s ease;
}
.accordion-rotate .item .title:hover {
  color: #3b82f6;
}
.accordion-rotate .item .title .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  color: #3b82f6;
}
.accordion-rotate .item .title.open .arrow {
  transform: rotate(90deg);
}
.accordion-rotate .item .body {
  max-height: 0;
  overflow: hidden;
  padding: 0 16px;
  transition: max-height 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
}
.accordion-rotate .item .body.open {
  max-height: 80px;
  padding: 0 16px 14px;
}`,
    htmlCode: `<div class="accordion-rotate"><div class="item"><div class="title open"><span class="arrow">▶</span>Details</div><div class="body open">Content goes here</div></div><div class="item"><div class="title"><span class="arrow">▶</span>More Info</div><div class="body">Additional info</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-fade',
    name: 'Accordion Fade',
    category: 'accordions',
    tags: ['accordion', 'fade', 'opacity', 'smooth'],
    difficulty: 'beginner',
    description: 'Accordion with fading content transition on expand',
    cssCode: `.accordion-fade {
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-fade .item {
  border-bottom: 1px solid #1e293b;
}
.accordion-fade .item:last-child {
  border-bottom: none;
}
.accordion-fade .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s ease;
}
.accordion-fade .item .title:hover {
  color: #10b981;
}
.accordion-fade .item .content {
  padding: 0 16px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
}
.accordion-fade .item .content.open {
  max-height: 80px;
  opacity: 1;
  padding: 0 16px 14px;
}`,
    htmlCode: `<div class="accordion-fade"><div class="item"><div class="title">FAQ 1</div><div class="content open">Answer appears with a fade</div></div><div class="item"><div class="title">FAQ 2</div><div class="content">Another answer</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-bounce',
    name: 'Accordion Bounce',
    category: 'accordions',
    tags: ['accordion', 'bounce', 'spring', 'animated'],
    difficulty: 'intermediate',
    description: 'Accordion with a bouncy spring animation on expand',
    cssCode: `.accordion-bounce {
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-bounce .item {
  border-bottom: 1px solid #1e293b;
}
.accordion-bounce .item:last-child {
  border-bottom: none;
}
.accordion-bounce .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;
}
.accordion-bounce .item .title:hover {
  background: #0f0f2a;
}
.accordion-bounce .item .content {
  max-height: 0;
  overflow: hidden;
  padding: 0 16px;
  transition: max-height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), padding 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 13px;
  color: #94a3b8;
}
.accordion-bounce .item .content.open {
  max-height: 100px;
  padding: 4px 16px 14px;
}
.accordion-bounce .item .badge {
  display: inline-block;
  background: #f59e0b22;
  color: #f59e0b;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 8px;
}`,
    htmlCode: `<div class="accordion-bounce"><div class="item"><div class="title">Question<span class="badge">New</span></div><div class="content open">Bouncy reveal!</div></div><div class="item"><div class="title">Another</div><div class="content">More content</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-stretch',
    name: 'Accordion Stretch',
    category: 'accordions',
    tags: ['accordion', 'stretch', 'width', 'grow'],
    difficulty: 'intermediate',
    description: 'Accordion item stretches wider when opened',
    cssCode: `.accordion-stretch {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-stretch .item {
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  padding: 14px 16px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.accordion-stretch .item:hover {
  border-color: #8b5cf6;
}
.accordion-stretch .item.open {
  transform: scaleX(1.04);
  border-color: #8b5cf6;
  box-shadow: 0 4px 20px #8b5cf622;
}
.accordion-stretch .item .content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
}
.accordion-stretch .item.open .content {
  max-height: 60px;
  margin-top: 8px;
}`,
    htmlCode: `<div class="accordion-stretch"><div class="item open"><b>Expanded</b><div class="content">This section stretches out</div></div><div class="item"><b>Collapsed</b><div class="content">Hidden content</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-icon',
    name: 'Accordion Icon',
    category: 'accordions',
    tags: ['accordion', 'icon', 'plus', 'minus'],
    difficulty: 'beginner',
    description: 'Accordion with plus/minus icon that toggles on click',
    cssCode: `.accordion-icon {
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-icon .item {
  border-bottom: 1px solid #1e293b;
}
.accordion-icon .item:last-child {
  border-bottom: none;
}
.accordion-icon .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.2s ease;
}
.accordion-icon .item .title:hover {
  color: #10b981;
}
.accordion-icon .item .title .icon {
  width: 20px;
  height: 20px;
  background: #1e293b;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #10b981;
  transition: background 0.2s ease;
}
.accordion-icon .item.open .title .icon {
  background: #10b981;
  color: #000;
}
.accordion-icon .item .body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
  padding: 0 16px;
}
.accordion-icon .item.open .body {
  max-height: 80px;
  padding: 0 16px 14px;
}`,
    htmlCode: `<div class="accordion-icon"><div class="item open"><div class="title">Topic A<span class="icon">−</span></div><div class="body">Expanded content here</div></div><div class="item"><div class="title">Topic B<span class="icon">+</span></div><div class="body">Hidden content</div></div></div>`,
    isNew: true,
  },
  {
    id: 'nested-accordion',
    name: 'Nested Accordion',
    category: 'accordions',
    tags: ['accordion', 'nested', 'hierarchy', 'tree'],
    difficulty: 'advanced',
    description: 'Accordion with nested sub-items that expand independently',
    cssCode: `.nested-accordion {
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  width: 280px;
}
.nested-accordion .item {
  border-bottom: 1px solid #1e293b;
}
.nested-accordion .item:last-child {
  border-bottom: none;
}
.nested-accordion .title {
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: color 0.2s ease;
}
.nested-accordion .title:hover {
  color: #3b82f6;
}
.nested-accordion .sub {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 16px;
}
.nested-accordion .item.open > .sub {
  max-height: 200px;
}
.nested-accordion .sub .title {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #94a3b8;
}
.nested-accordion .sub .title:hover {
  color: #10b981;
}
.nested-accordion .sub .detail {
  max-height: 0;
  overflow: hidden;
  font-size: 12px;
  color: #64748b;
  padding: 0 16px;
  transition: max-height 0.3s ease;
}
.nested-accordion .sub .item.open .detail {
  max-height: 60px;
  padding: 4px 16px 8px;
}`,
    htmlCode: `<div class="nested-accordion"><div class="item open"><div class="title">Category</div><div class="sub"><div class="item open"><div class="title">Sub-item</div><div class="detail">Nested detail content</div></div><div class="item"><div class="title">Another sub</div><div class="detail">More details</div></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-preview',
    name: 'Accordion Preview',
    category: 'accordions',
    tags: ['accordion', 'preview', 'peek', 'truncate'],
    difficulty: 'intermediate',
    description: 'Accordion shows a truncated preview and reveals full content on expand',
    cssCode: `.accordion-preview {
  background: #0a0a1a;
  border-radius: 12px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-preview .item {
  border-bottom: 1px solid #1e293b;
  padding: 14px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.accordion-preview .item:last-child {
  border-bottom: none;
}
.accordion-preview .item:hover {
  background: #0f0f2a;
}
.accordion-preview .item .preview {
  font-size: 12px;
  color: #64748b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
}
.accordion-preview .item.open .preview {
  white-space: normal;
  color: #94a3b8;
}
.accordion-preview .item .label {
  font-weight: 600;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordion-preview .item .label::after {
  content: '▸';
  color: #10b981;
  transition: transform 0.3s ease;
}
.accordion-preview .item.open .label::after {
  transform: rotate(90deg);
}`,
    htmlCode: `<div class="accordion-preview"><div class="item open"><div class="label">Article Title</div><div class="preview">Full article content that was truncated before but now is fully visible on expand.</div></div><div class="item"><div class="label">Another Title</div><div class="preview">Preview text that is truncated with ellipsis when collapsed...</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-color',
    name: 'Accordion Color',
    category: 'accordions',
    tags: ['accordion', 'color', 'gradient', 'vibrant'],
    difficulty: 'intermediate',
    description: 'Accordion items change color with gradient backgrounds on open',
    cssCode: `.accordion-color {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-color .item {
  background: #0a0a1a;
  border: 1px solid #1e293b;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}
.accordion-color .item:nth-child(1).open { border-color: #10b981; }
.accordion-color .item:nth-child(2).open { border-color: #3b82f6; }
.accordion-color .item:nth-child(3).open { border-color: #8b5cf6; }
.accordion-color .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}
.accordion-color .item:nth-child(1).open .title { background: #10b98118; color: #10b981; }
.accordion-color .item:nth-child(2).open .title { background: #3b82f618; color: #3b82f6; }
.accordion-color .item:nth-child(3).open .title { background: #8b5cf618; color: #8b5cf6; }
.accordion-color .item .body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
  padding: 0 16px;
}
.accordion-color .item.open .body {
  max-height: 80px;
  padding: 0 16px 14px;
}`,
    htmlCode: `<div class="accordion-color"><div class="item open"><div class="title">Green Item</div><div class="body">Content with green accent</div></div><div class="item"><div class="title">Blue Item</div><div class="body">Content with blue accent</div></div><div class="item"><div class="title">Purple Item</div><div class="body">Content with purple accent</div></div></div>`,
    isNew: true,
  },
  {
    id: 'accordion-border',
    name: 'Accordion Border',
    category: 'accordions',
    tags: ['accordion', 'border', 'outline', 'animated'],
    difficulty: 'beginner',
    description: 'Accordion with animated border that highlights on open',
    cssCode: `.accordion-border {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #e2e8f0;
  width: 280px;
}
.accordion-border .item {
  background: #0a0a1a;
  border: 2px solid #1e293b;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.accordion-border .item.open {
  border-color: #10b981;
  box-shadow: 0 0 0 1px #10b98133, 0 4px 12px #10b98111;
}
.accordion-border .item .title {
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  transition: color 0.3s ease;
}
.accordion-border .item.open .title {
  color: #10b981;
}
.accordion-border .item .title::after {
  content: '⊕';
  font-size: 16px;
  color: #64748b;
  transition: color 0.3s ease, transform 0.3s ease;
}
.accordion-border .item.open .title::after {
  content: '⊖';
  color: #10b981;
}
.accordion-border .item .content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  font-size: 13px;
  color: #94a3b8;
  padding: 0 16px;
}
.accordion-border .item.open .content {
  max-height: 80px;
  padding: 0 16px 14px;
}`,
    htmlCode: `<div class="accordion-border"><div class="item open"><div class="title">Open Item</div><div class="content">Visible content with highlighted border</div></div><div class="item"><div class="title">Closed Item</div><div class="content">Hidden content</div></div></div>`,
    isNew: true,
  },
];
