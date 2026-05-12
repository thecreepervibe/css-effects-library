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

export const effectsTooltipsTransitions: CSSEffect[] = [
  // ==========================================
  // TOOLTIP EFFECTS (25)
  // ==========================================
  {
    id: 'fade-tooltip',
    name: 'Fade Tooltip',
    category: 'tooltips',
    tags: ['fade', 'tooltip', 'hover', 'opacity'],
    difficulty: 'beginner',
    description: 'Tooltip that smoothly fades in on hover',
    cssCode: `.fade-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.fade-tooltip {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.fade-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.fade-tooltip-wrap:hover::after {
  opacity: 1;
}`,
    htmlCode: `<div class="fade-tooltip-wrap" data-tip="Hello!"><div class="fade-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'slide-tooltip',
    name: 'Slide Tooltip',
    category: 'tooltips',
    tags: ['slide', 'tooltip', 'hover', 'translate'],
    difficulty: 'beginner',
    description: 'Tooltip that slides up into view on hover',
    cssCode: `.slide-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.slide-tooltip {
  padding: 8px 14px;
  background: #3b82f6;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.slide-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.slide-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="slide-tooltip-wrap" data-tip="Sliding up!"><div class="slide-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'scale-tooltip',
    name: 'Scale Tooltip',
    category: 'tooltips',
    tags: ['scale', 'tooltip', 'hover', 'grow'],
    difficulty: 'beginner',
    description: 'Tooltip that scales up from center on hover',
    cssCode: `.scale-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.scale-tooltip {
  padding: 8px 14px;
  background: #8b5cf6;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.scale-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) scale(0.6);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.scale-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`,
    htmlCode: `<div class="scale-tooltip-wrap" data-tip="Scaled!"><div class="scale-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'flip-tooltip',
    name: 'Flip Tooltip',
    category: 'tooltips',
    tags: ['flip', 'tooltip', 'hover', '3d', 'rotate'],
    difficulty: 'intermediate',
    description: 'Tooltip that flips in from top on hover',
    cssCode: `.flip-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.flip-tooltip {
  padding: 8px 14px;
  background: #ef4444;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.flip-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) perspective(200px) rotateX(60deg);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.4s ease;
  pointer-events: none;
}
.flip-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) perspective(200px) rotateX(0deg);
}`,
    htmlCode: `<div class="flip-tooltip-wrap" data-tip="Flipped!"><div class="flip-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'bounce-tooltip',
    name: 'Bounce Tooltip',
    category: 'tooltips',
    tags: ['bounce', 'tooltip', 'hover', 'spring'],
    difficulty: 'intermediate',
    description: 'Tooltip that bounces in with overshoot on hover',
    cssCode: `.bounce-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.bounce-tooltip {
  padding: 8px 14px;
  background: #f59e0b;
  color: #1a1a2e;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.bounce-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%) translateY(0);
  transition: opacity 0.2s ease;
  pointer-events: none;
}
.bounce-tooltip-wrap:hover::after {
  opacity: 1;
  animation: bounce-in-tip 0.5s ease forwards;
}
@keyframes bounce-in-tip {
  0% { transform: translateX(-50%) translateY(10px); }
  50% { transform: translateX(-50%) translateY(-8px); }
  70% { transform: translateX(-50%) translateY(3px); }
  100% { transform: translateX(-50%) translateY(0); }
}`,
    htmlCode: `<div class="bounce-tooltip-wrap" data-tip="Bouncing!"><div class="bounce-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'elastic-tooltip',
    name: 'Elastic Tooltip',
    category: 'tooltips',
    tags: ['elastic', 'tooltip', 'hover', 'spring', 'overshoot'],
    difficulty: 'intermediate',
    description: 'Tooltip with elastic overshoot animation on hover',
    cssCode: `.elastic-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.elastic-tooltip {
  padding: 8px 14px;
  background: #ec4899;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.elastic-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) scale(0);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.15s ease;
  pointer-events: none;
}
.elastic-tooltip-wrap:hover::after {
  opacity: 1;
  animation: elastic-pop 0.6s cubic-bezier(0.68,-0.55,0.265,1.55) forwards;
}
@keyframes elastic-pop {
  0% { transform: translateX(-50%) scale(0); }
  100% { transform: translateX(-50%) scale(1); }
}`,
    htmlCode: `<div class="elastic-tooltip-wrap" data-tip="Elastic!"><div class="elastic-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'blur-tooltip',
    name: 'Blur Tooltip',
    category: 'tooltips',
    tags: ['blur', 'tooltip', 'hover', 'focus'],
    difficulty: 'beginner',
    description: 'Tooltip that unblurs into focus on hover',
    cssCode: `.blur-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.blur-tooltip {
  padding: 8px 14px;
  background: #06b6d4;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.blur-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  filter: blur(6px);
  transition: opacity 0.3s ease, filter 0.3s ease;
  pointer-events: none;
}
.blur-tooltip-wrap:hover::after {
  opacity: 1;
  filter: blur(0);
}`,
    htmlCode: `<div class="blur-tooltip-wrap" data-tip="In focus!"><div class="blur-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'glow-tooltip',
    name: 'Glow Tooltip',
    category: 'tooltips',
    tags: ['glow', 'tooltip', 'hover', 'neon', 'shadow'],
    difficulty: 'intermediate',
    description: 'Tooltip with an emerald glow effect on hover',
    cssCode: `.glow-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.glow-tooltip {
  padding: 8px 14px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.glow-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 12px;
  background: #0f0f1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  pointer-events: none;
}
.glow-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  box-shadow: 0 0 8px #10b98166, 0 0 20px #10b98133;
}`,
    htmlCode: `<div class="glow-tooltip-wrap" data-tip="Glowing!"><div class="glow-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'neon-tooltip',
    name: 'Neon Tooltip',
    category: 'tooltips',
    tags: ['neon', 'tooltip', 'hover', 'glow', 'bright'],
    difficulty: 'intermediate',
    description: 'Neon-styled tooltip with flickering glow animation',
    cssCode: `.neon-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.neon-tooltip {
  padding: 8px 14px;
  background: #0a0a1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.neon-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: #0a0a1a;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.neon-tooltip-wrap:hover::after {
  opacity: 1;
  animation: neon-flicker 1.5s ease-in-out infinite alternate;
}
@keyframes neon-flicker {
  0%, 100% { box-shadow: 0 0 5px #10b981, 0 0 15px #10b98155; text-shadow: 0 0 3px #10b981; }
  50% { box-shadow: 0 0 10px #10b981, 0 0 30px #10b98144; text-shadow: 0 0 6px #10b981; }
}`,
    htmlCode: `<div class="neon-tooltip-wrap" data-tip="Neon!"><div class="neon-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'gradient-tooltip',
    name: 'Gradient Tooltip',
    category: 'tooltips',
    tags: ['gradient', 'tooltip', 'hover', 'colorful'],
    difficulty: 'intermediate',
    description: 'Tooltip with a colorful gradient background',
    cssCode: `.gradient-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.gradient-tooltip {
  padding: 8px 14px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.gradient-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 14px;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.gradient-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="gradient-tooltip-wrap" data-tip="Gradient!"><div class="gradient-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'arrow-tooltip',
    name: 'Arrow Tooltip',
    category: 'tooltips',
    tags: ['arrow', 'tooltip', 'hover', 'pointer'],
    difficulty: 'intermediate',
    description: 'Tooltip with a CSS arrow pointing to the trigger',
    cssCode: `.arrow-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.arrow-tooltip {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.arrow-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(120% + 6px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.arrow-tooltip-wrap::before {
  content: '';
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  border: 6px solid transparent;
  border-top-color: #1a1a2e;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.arrow-tooltip-wrap:hover::after,
.arrow-tooltip-wrap:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="arrow-tooltip-wrap" data-tip="Arrow tip!"><div class="arrow-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'balloon-tooltip',
    name: 'Balloon Tooltip',
    category: 'tooltips',
    tags: ['balloon', 'tooltip', 'hover', 'rounded', 'speech'],
    difficulty: 'intermediate',
    description: 'Rounded balloon-shaped tooltip with a tail',
    cssCode: `.balloon-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.balloon-tooltip {
  padding: 8px 14px;
  background: #7c3aed;
  color: #fff;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.balloon-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(130% + 6px);
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  padding: 8px 16px;
  background: #7c3aed;
  color: #fff;
  border-radius: 20px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  pointer-events: none;
}
.balloon-tooltip-wrap::before {
  content: '';
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  border: 6px solid transparent;
  border-top-color: #7c3aed;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  pointer-events: none;
}
.balloon-tooltip-wrap:hover::after,
.balloon-tooltip-wrap:hover::before {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}`,
    htmlCode: `<div class="balloon-tooltip-wrap" data-tip="Balloon!"><div class="balloon-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'speech-bubble',
    name: 'Speech Bubble',
    category: 'tooltips',
    tags: ['speech', 'bubble', 'tooltip', 'hover', 'chat'],
    difficulty: 'intermediate',
    description: 'Chat-style speech bubble tooltip',
    cssCode: `.speech-bubble-wrap {
  position: relative;
  display: inline-block;
}
.speech-bubble-trigger {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.speech-bubble-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(125% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 14px;
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 12px;
  border-bottom-left-radius: 2px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.speech-bubble-wrap:hover::after {
  opacity: 1;
}`,
    htmlCode: `<div class="speech-bubble-wrap" data-tip="Hello there!"><div class="speech-bubble-trigger">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'callout-tooltip',
    name: 'Callout Tooltip',
    category: 'tooltips',
    tags: ['callout', 'tooltip', 'hover', 'pin'],
    difficulty: 'intermediate',
    description: 'Callout-style tooltip with a connecting line',
    cssCode: `.callout-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.callout-tooltip {
  padding: 8px 14px;
  background: #f97316;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.callout-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(140% + 2px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 8px 14px;
  background: #1a1a2e;
  color: #f97316;
  border: 1px solid #f9731644;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.callout-tooltip-wrap::before {
  content: '';
  position: absolute;
  bottom: 140%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 0;
  background: #f97316;
  opacity: 0;
  transition: opacity 0.3s ease, height 0.3s ease;
  pointer-events: none;
}
.callout-tooltip-wrap:hover::after,
.callout-tooltip-wrap:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.callout-tooltip-wrap:hover::before {
  height: 8px;
}`,
    htmlCode: `<div class="callout-tooltip-wrap" data-tip="Callout!"><div class="callout-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'pinned-tooltip',
    name: 'Pinned Tooltip',
    category: 'tooltips',
    tags: ['pinned', 'tooltip', 'hover', 'pin', 'sticky'],
    difficulty: 'intermediate',
    description: 'Tooltip that appears pinned with a pushpin effect',
    cssCode: `.pinned-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.pinned-tooltip {
  padding: 8px 14px;
  background: #ef4444;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.pinned-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(120% + 10px);
  left: 50%;
  transform: translateX(-50%) rotate(-2deg) scale(0.9);
  padding: 8px 14px;
  background: #fef3c7;
  color: #92400e;
  border-radius: 2px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
  pointer-events: none;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
}
.pinned-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) rotate(1deg) scale(1);
}`,
    htmlCode: `<div class="pinned-tooltip-wrap" data-tip="📌 Pinned!"><div class="pinned-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'animated-tooltip',
    name: 'Animated Tooltip',
    category: 'tooltips',
    tags: ['animated', 'tooltip', 'hover', 'continuous'],
    difficulty: 'intermediate',
    description: 'Tooltip with a continuously animated background',
    cssCode: `.animated-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.animated-tooltip {
  padding: 8px 14px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.animated-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 12px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #10b981);
  background-size: 200% 100%;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.animated-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  animation: gradient-slide 2s linear infinite;
}
@keyframes gradient-slide {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`,
    htmlCode: `<div class="animated-tooltip-wrap" data-tip="Animated!"><div class="animated-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'shake-tooltip',
    name: 'Shake Tooltip',
    category: 'tooltips',
    tags: ['shake', 'tooltip', 'hover', 'vibrate'],
    difficulty: 'intermediate',
    description: 'Tooltip that shakes when it appears on hover',
    cssCode: `.shake-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.shake-tooltip {
  padding: 8px 14px;
  background: #e11d48;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.shake-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}
.shake-tooltip-wrap:hover::after {
  opacity: 1;
  animation: shake-tip 0.4s ease;
}
@keyframes shake-tip {
  0%, 100% { transform: translateX(-50%) translateX(0); }
  20% { transform: translateX(-50%) translateX(-4px); }
  40% { transform: translateX(-50%) translateX(4px); }
  60% { transform: translateX(-50%) translateX(-3px); }
  80% { transform: translateX(-50%) translateX(3px); }
}`,
    htmlCode: `<div class="shake-tooltip-wrap" data-tip="Shaking!"><div class="shake-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'pulse-tooltip',
    name: 'Pulse Tooltip',
    category: 'tooltips',
    tags: ['pulse', 'tooltip', 'hover', 'breathing'],
    difficulty: 'beginner',
    description: 'Tooltip with a pulsing box-shadow animation',
    cssCode: `.pulse-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.pulse-tooltip {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.pulse-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.pulse-tooltip-wrap:hover::after {
  opacity: 1;
  animation: pulse-tip 1.5s ease-in-out infinite;
}
@keyframes pulse-tip {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
  50% { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
}`,
    htmlCode: `<div class="pulse-tooltip-wrap" data-tip="Pulsing!"><div class="pulse-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'wave-tooltip',
    name: 'Wave Tooltip',
    category: 'tooltips',
    tags: ['wave', 'tooltip', 'hover', 'sine'],
    difficulty: 'intermediate',
    description: 'Tooltip that enters with a wave-like motion',
    cssCode: `.wave-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.wave-tooltip {
  padding: 8px 14px;
  background: #0ea5e9;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.wave-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%) translateY(10px);
}
.wave-tooltip-wrap:hover::after {
  opacity: 1;
  animation: wave-in-tip 0.5s ease forwards;
}
@keyframes wave-in-tip {
  0% { transform: translateX(-50%) translateY(10px); opacity: 0; }
  40% { transform: translateX(-50%) translateY(-6px); opacity: 1; }
  60% { transform: translateX(-50%) translateY(3px); }
  80% { transform: translateX(-50%) translateY(-1px); }
  100% { transform: translateX(-50%) translateY(0); }
}`,
    htmlCode: `<div class="wave-tooltip-wrap" data-tip="Waving!"><div class="wave-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'corner-tooltip',
    name: 'Corner Tooltip',
    category: 'tooltips',
    tags: ['corner', 'tooltip', 'hover', 'position'],
    difficulty: 'beginner',
    description: 'Small tooltip appearing from the top-right corner',
    cssCode: `.corner-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.corner-tooltip {
  padding: 8px 14px;
  background: #1a1a2e;
  color: #e2e8f0;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.corner-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  top: -4px;
  right: -8px;
  transform: translateX(100%) translateY(-100%);
  padding: 4px 10px;
  background: #10b981;
  color: #fff;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.corner-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(100%) translateY(-110%);
}`,
    htmlCode: `<div class="corner-tooltip-wrap" data-tip="Corner!"><div class="corner-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'side-tooltip',
    name: 'Side Tooltip',
    category: 'tooltips',
    tags: ['side', 'tooltip', 'hover', 'left'],
    difficulty: 'beginner',
    description: 'Tooltip that appears to the side of the element',
    cssCode: `.side-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.side-tooltip {
  padding: 8px 14px;
  background: #8b5cf6;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.side-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  top: 50%;
  left: 105%;
  transform: translateY(-50%) translateX(5px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.side-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
    htmlCode: `<div class="side-tooltip-wrap" data-tip="Side tip!"><div class="side-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'bottom-tooltip',
    name: 'Bottom Tooltip',
    category: 'tooltips',
    tags: ['bottom', 'tooltip', 'hover', 'below'],
    difficulty: 'beginner',
    description: 'Tooltip that appears below the element',
    cssCode: `.bottom-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.bottom-tooltip {
  padding: 8px 14px;
  background: #10b981;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.bottom-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #e2e8f0;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.bottom-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="bottom-tooltip-wrap" data-tip="Below!"><div class="bottom-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'top-tooltip',
    name: 'Top Tooltip',
    category: 'tooltips',
    tags: ['top', 'tooltip', 'hover', 'above'],
    difficulty: 'beginner',
    description: 'Tooltip that appears above the element with smooth slide',
    cssCode: `.top-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.top-tooltip {
  padding: 8px 14px;
  background: #f59e0b;
  color: #1a1a2e;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.top-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(5px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #f59e0b;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.top-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}`,
    htmlCode: `<div class="top-tooltip-wrap" data-tip="Above!"><div class="top-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'left-tooltip',
    name: 'Left Tooltip',
    category: 'tooltips',
    tags: ['left', 'tooltip', 'hover', 'side'],
    difficulty: 'beginner',
    description: 'Tooltip that slides in from the left side',
    cssCode: `.left-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.left-tooltip {
  padding: 8px 14px;
  background: #06b6d4;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.left-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  top: 50%;
  right: 105%;
  transform: translateY(-50%) translateX(5px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #06b6d4;
  border: 1px solid #06b6d444;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.left-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
    htmlCode: `<div class="left-tooltip-wrap" data-tip="Left!"><div class="left-tooltip">Hover me</div></div>`,
    isNew: true,
  },
  {
    id: 'right-tooltip',
    name: 'Right Tooltip',
    category: 'tooltips',
    tags: ['right', 'tooltip', 'hover', 'side'],
    difficulty: 'beginner',
    description: 'Tooltip that slides in from the right side',
    cssCode: `.right-tooltip-wrap {
  position: relative;
  display: inline-block;
}
.right-tooltip {
  padding: 8px 14px;
  background: #ec4899;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.right-tooltip-wrap::after {
  content: attr(data-tip);
  position: absolute;
  top: 50%;
  left: 105%;
  transform: translateY(-50%) translateX(-5px);
  padding: 6px 12px;
  background: #1a1a2e;
  color: #ec4899;
  border: 1px solid #ec489944;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}
.right-tooltip-wrap:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}`,
    htmlCode: `<div class="right-tooltip-wrap" data-tip="Right!"><div class="right-tooltip">Hover me</div></div>`,
    isNew: true,
  },

  // ==========================================
  // TRANSITION EFFECTS (30)
  // ==========================================
  {
    id: 'fade-in',
    name: 'Fade In',
    category: 'transitions',
    tags: ['fade', 'in', 'transition', 'opacity', 'entrance'],
    difficulty: 'beginner',
    description: 'Element fades in from transparent to visible',
    cssCode: `.fade-in {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: fade-in-anim 0.8s ease forwards;
}
@keyframes fade-in-anim {
  0% { opacity: 0; }
  100% { opacity: 1; }
}`,
    htmlCode: `<div class="fade-in">Fade In</div>`,
    isNew: true,
  },
  {
    id: 'fade-out',
    name: 'Fade Out',
    category: 'transitions',
    tags: ['fade', 'out', 'transition', 'opacity', 'exit'],
    difficulty: 'beginner',
    description: 'Element fades out from visible to transparent',
    cssCode: `.fade-out {
  padding: 20px 32px;
  background: #ef4444;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: fade-out-anim 2s ease forwards;
}
@keyframes fade-out-anim {
  0% { opacity: 1; }
  70% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="fade-out">Fade Out</div>`,
    isNew: true,
  },
  {
    id: 'slide-in',
    name: 'Slide In',
    category: 'transitions',
    tags: ['slide', 'in', 'transition', 'translate', 'entrance'],
    difficulty: 'beginner',
    description: 'Element slides in from the left',
    cssCode: `.slide-in {
  padding: 20px 32px;
  background: #3b82f6;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: slide-in-anim 0.6s ease forwards;
}
@keyframes slide-in-anim {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="slide-in">Slide In</div>`,
    isNew: true,
  },
  {
    id: 'slide-out',
    name: 'Slide Out',
    category: 'transitions',
    tags: ['slide', 'out', 'transition', 'translate', 'exit'],
    difficulty: 'beginner',
    description: 'Element slides out to the right',
    cssCode: `.slide-out {
  padding: 20px 32px;
  background: #8b5cf6;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: slide-out-anim 1.5s ease forwards;
}
@keyframes slide-out-anim {
  0% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}`,
    htmlCode: `<div class="slide-out">Slide Out</div>`,
    isNew: true,
  },
  {
    id: 'scale-in',
    name: 'Scale In',
    category: 'transitions',
    tags: ['scale', 'in', 'transition', 'grow', 'entrance'],
    difficulty: 'beginner',
    description: 'Element scales in from zero to full size',
    cssCode: `.scale-in {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: scale-in-anim 0.5s ease forwards;
}
@keyframes scale-in-anim {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="scale-in">Scale In</div>`,
    isNew: true,
  },
  {
    id: 'scale-out',
    name: 'Scale Out',
    category: 'transitions',
    tags: ['scale', 'out', 'transition', 'shrink', 'exit'],
    difficulty: 'beginner',
    description: 'Element shrinks from full size to zero',
    cssCode: `.scale-out {
  padding: 20px 32px;
  background: #f59e0b;
  color: #1a1a2e;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: scale-out-anim 1.5s ease forwards;
}
@keyframes scale-out-anim {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}`,
    htmlCode: `<div class="scale-out">Scale Out</div>`,
    isNew: true,
  },
  {
    id: 'rotate-in',
    name: 'Rotate In',
    category: 'transitions',
    tags: ['rotate', 'in', 'transition', 'spin', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element rotates in from -180 degrees',
    cssCode: `.rotate-in {
  padding: 20px 32px;
  background: #ec4899;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: rotate-in-anim 0.6s ease forwards;
}
@keyframes rotate-in-anim {
  0% { transform: rotate(-180deg) scale(0.5); opacity: 0; }
  100% { transform: rotate(0deg) scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="rotate-in">Rotate In</div>`,
    isNew: true,
  },
  {
    id: 'rotate-out',
    name: 'Rotate Out',
    category: 'transitions',
    tags: ['rotate', 'out', 'transition', 'spin', 'exit'],
    difficulty: 'intermediate',
    description: 'Element rotates out to 180 degrees and fades',
    cssCode: `.rotate-out {
  padding: 20px 32px;
  background: #06b6d4;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: rotate-out-anim 1.5s ease forwards;
}
@keyframes rotate-out-anim {
  0% { transform: rotate(0deg) scale(1); opacity: 1; }
  50% { transform: rotate(0deg) scale(1); opacity: 1; }
  100% { transform: rotate(180deg) scale(0.5); opacity: 0; }
}`,
    htmlCode: `<div class="rotate-out">Rotate Out</div>`,
    isNew: true,
  },
  {
    id: 'flip-in',
    name: 'Flip In',
    category: 'transitions',
    tags: ['flip', 'in', 'transition', '3d', 'perspective', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element flips in on the Y axis with perspective',
    cssCode: `.flip-in {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: flip-in-anim 0.6s ease forwards;
}
@keyframes flip-in-anim {
  0% { transform: perspective(400px) rotateY(90deg); opacity: 0; }
  40% { transform: perspective(400px) rotateY(-15deg); }
  70% { transform: perspective(400px) rotateY(8deg); }
  100% { transform: perspective(400px) rotateY(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="flip-in">Flip In</div>`,
    isNew: true,
  },
  {
    id: 'flip-out',
    name: 'Flip Out',
    category: 'transitions',
    tags: ['flip', 'out', 'transition', '3d', 'perspective', 'exit'],
    difficulty: 'intermediate',
    description: 'Element flips out on the Y axis',
    cssCode: `.flip-out {
  padding: 20px 32px;
  background: #7c3aed;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: flip-out-anim 1.5s ease forwards;
}
@keyframes flip-out-anim {
  0% { transform: perspective(400px) rotateY(0deg); opacity: 1; }
  50% { transform: perspective(400px) rotateY(0deg); opacity: 1; }
  100% { transform: perspective(400px) rotateY(90deg); opacity: 0; }
}`,
    htmlCode: `<div class="flip-out">Flip Out</div>`,
    isNew: true,
  },
  {
    id: 'blur-in',
    name: 'Blur In',
    category: 'transitions',
    tags: ['blur', 'in', 'transition', 'focus', 'entrance'],
    difficulty: 'beginner',
    description: 'Element transitions from blurred to sharp focus',
    cssCode: `.blur-in {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: blur-in-anim 0.6s ease forwards;
}
@keyframes blur-in-anim {
  0% { filter: blur(12px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}`,
    htmlCode: `<div class="blur-in">Blur In</div>`,
    isNew: true,
  },
  {
    id: 'blur-out',
    name: 'Blur Out',
    category: 'transitions',
    tags: ['blur', 'out', 'transition', 'defocus', 'exit'],
    difficulty: 'beginner',
    description: 'Element transitions from sharp to blurred and fades',
    cssCode: `.blur-out {
  padding: 20px 32px;
  background: #ef4444;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: blur-out-anim 2s ease forwards;
}
@keyframes blur-out-anim {
  0% { filter: blur(0); opacity: 1; }
  60% { filter: blur(0); opacity: 1; }
  100% { filter: blur(12px); opacity: 0; }
}`,
    htmlCode: `<div class="blur-out">Blur Out</div>`,
    isNew: true,
  },
  {
    id: 'skew-in',
    name: 'Skew In',
    category: 'transitions',
    tags: ['skew', 'in', 'transition', 'tilt', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element skews in from a distorted angle',
    cssCode: `.skew-in {
  padding: 20px 32px;
  background: #f97316;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: skew-in-anim 0.5s ease forwards;
}
@keyframes skew-in-anim {
  0% { transform: skewX(-20deg) scaleX(0.8); opacity: 0; }
  100% { transform: skewX(0deg) scaleX(1); opacity: 1; }
}`,
    htmlCode: `<div class="skew-in">Skew In</div>`,
    isNew: true,
  },
  {
    id: 'skew-out',
    name: 'Skew Out',
    category: 'transitions',
    tags: ['skew', 'out', 'transition', 'tilt', 'exit'],
    difficulty: 'intermediate',
    description: 'Element skews out to a distorted angle and fades',
    cssCode: `.skew-out {
  padding: 20px 32px;
  background: #14b8a6;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: skew-out-anim 1.5s ease forwards;
}
@keyframes skew-out-anim {
  0% { transform: skewX(0deg) scaleX(1); opacity: 1; }
  50% { transform: skewX(0deg) scaleX(1); opacity: 1; }
  100% { transform: skewX(20deg) scaleX(0.8); opacity: 0; }
}`,
    htmlCode: `<div class="skew-out">Skew Out</div>`,
    isNew: true,
  },
  {
    id: 'bounce-in',
    name: 'Bounce In',
    category: 'transitions',
    tags: ['bounce', 'in', 'transition', 'spring', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element bounces in with overshooting scale animation',
    cssCode: `.bounce-in {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: bounce-in-anim 0.7s cubic-bezier(0.68,-0.55,0.265,1.55) forwards;
}
@keyframes bounce-in-anim {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.15); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="bounce-in">Bounce In</div>`,
    isNew: true,
  },
  {
    id: 'bounce-out',
    name: 'Bounce Out',
    category: 'transitions',
    tags: ['bounce', 'out', 'transition', 'spring', 'exit'],
    difficulty: 'intermediate',
    description: 'Element bounces out with overshoot before disappearing',
    cssCode: `.bounce-out {
  padding: 20px 32px;
  background: #e11d48;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: bounce-out-anim 0.7s ease forwards;
  animation-delay: 0.5s;
}
@keyframes bounce-out-anim {
  0% { transform: scale(1); opacity: 1; }
  30% { transform: scale(1.1); }
  100% { transform: scale(0); opacity: 0; }
}`,
    htmlCode: `<div class="bounce-out">Bounce Out</div>`,
    isNew: true,
  },
  {
    id: 'elastic-in',
    name: 'Elastic In',
    category: 'transitions',
    tags: ['elastic', 'in', 'transition', 'spring', 'overshoot', 'entrance'],
    difficulty: 'advanced',
    description: 'Element enters with an elastic spring-like overshoot',
    cssCode: `.elastic-in {
  padding: 20px 32px;
  background: #8b5cf6;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: elastic-in-anim 0.8s ease forwards;
}
@keyframes elastic-in-anim {
  0% { transform: scale(0); opacity: 0; }
  40% { transform: scale(1.2); opacity: 1; }
  55% { transform: scale(0.85); }
  65% { transform: scale(1.08); }
  75% { transform: scale(0.96); }
  85% { transform: scale(1.02); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="elastic-in">Elastic In</div>`,
    isNew: true,
  },
  {
    id: 'elastic-out',
    name: 'Elastic Out',
    category: 'transitions',
    tags: ['elastic', 'out', 'transition', 'spring', 'exit'],
    difficulty: 'advanced',
    description: 'Element exits with an elastic spring-like overshoot',
    cssCode: `.elastic-out {
  padding: 20px 32px;
  background: #0ea5e9;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: elastic-out-anim 0.8s ease forwards;
  animation-delay: 0.5s;
}
@keyframes elastic-out-anim {
  0% { transform: scale(1); opacity: 1; }
  25% { transform: scale(1.1); }
  50% { transform: scale(0.7); opacity: 0.5; }
  75% { transform: scale(1.05); opacity: 0.2; }
  100% { transform: scale(0); opacity: 0; }
}`,
    htmlCode: `<div class="elastic-out">Elastic Out</div>`,
    isNew: true,
  },
  {
    id: 'spring-in',
    name: 'Spring In',
    category: 'transitions',
    tags: ['spring', 'in', 'transition', 'bounce', 'entrance'],
    difficulty: 'advanced',
    description: 'Element springs in with a natural bounce deceleration',
    cssCode: `.spring-in {
  padding: 20px 32px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: spring-in-anim 0.9s cubic-bezier(0.175,0.885,0.32,1.275) forwards;
}
@keyframes spring-in-anim {
  0% { transform: translateY(40px) scale(0.8); opacity: 0; }
  60% { transform: translateY(-8px) scale(1.05); opacity: 1; }
  80% { transform: translateY(3px) scale(0.98); }
  100% { transform: translateY(0) scale(1); }
}`,
    htmlCode: `<div class="spring-in">Spring In</div>`,
    isNew: true,
  },
  {
    id: 'spring-out',
    name: 'Spring Out',
    category: 'transitions',
    tags: ['spring', 'out', 'transition', 'bounce', 'exit'],
    difficulty: 'advanced',
    description: 'Element springs out with a natural bounce acceleration',
    cssCode: `.spring-out {
  padding: 20px 32px;
  background: #f59e0b;
  color: #1a1a2e;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: spring-out-anim 0.6s ease forwards;
  animation-delay: 0.5s;
}
@keyframes spring-out-anim {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  30% { transform: translateY(-10px) scale(1.05); }
  100% { transform: translateY(40px) scale(0.8); opacity: 0; }
}`,
    htmlCode: `<div class="spring-out">Spring Out</div>`,
    isNew: true,
  },
  {
    id: 'swing-in',
    name: 'Swing In',
    category: 'transitions',
    tags: ['swing', 'in', 'transition', 'pendulum', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element swings in like a pendulum from above',
    cssCode: `.swing-in {
  padding: 20px 32px;
  background: #3b82f6;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transform-origin: top center;
  animation: swing-in-anim 0.8s ease forwards;
}
@keyframes swing-in-anim {
  0% { transform: rotate(-30deg); opacity: 0; }
  30% { transform: rotate(15deg); opacity: 1; }
  50% { transform: rotate(-8deg); }
  70% { transform: rotate(4deg); }
  85% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<div class="swing-in">Swing In</div>`,
    isNew: true,
  },
  {
    id: 'swing-out',
    name: 'Swing Out',
    category: 'transitions',
    tags: ['swing', 'out', 'transition', 'pendulum', 'exit'],
    difficulty: 'intermediate',
    description: 'Element swings out like a pendulum',
    cssCode: `.swing-out {
  padding: 20px 32px;
  background: #a855f7;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transform-origin: top center;
  animation: swing-out-anim 0.8s ease forwards;
  animation-delay: 0.5s;
}
@keyframes swing-out-anim {
  0% { transform: rotate(0deg); opacity: 1; }
  30% { transform: rotate(20deg); }
  100% { transform: rotate(60deg); opacity: 0; }
}`,
    htmlCode: `<div class="swing-out">Swing Out</div>`,
    isNew: true,
  },
  {
    id: 'shake-in',
    name: 'Shake In',
    category: 'transitions',
    tags: ['shake', 'in', 'transition', 'vibrate', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element shakes while fading in',
    cssCode: `.shake-in {
  padding: 20px 32px;
  background: #e11d48;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: shake-in-anim 0.6s ease forwards;
}
@keyframes shake-in-anim {
  0% { transform: translateX(-20px); opacity: 0; }
  15% { transform: translateX(15px); opacity: 0.7; }
  30% { transform: translateX(-10px); opacity: 0.9; }
  45% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(0); opacity: 1; }
}`,
    htmlCode: `<div class="shake-in">Shake In</div>`,
    isNew: true,
  },
  {
    id: 'pulse-in',
    name: 'Pulse In',
    category: 'transitions',
    tags: ['pulse', 'in', 'transition', 'glow', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element pulses in with a glowing scale animation',
    cssCode: `.pulse-in {
  padding: 20px 32px;
  background: #0f0f1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: pulse-in-anim 0.8s ease forwards;
}
@keyframes pulse-in-anim {
  0% { transform: scale(0.5); opacity: 0; box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
  50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 0 15px rgba(16,185,129,0); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); box-shadow: 0 0 20px rgba(16,185,129,0.2); }
}`,
    htmlCode: `<div class="pulse-in">Pulse In</div>`,
    isNew: true,
  },
  {
    id: 'glow-in',
    name: 'Glow In',
    category: 'transitions',
    tags: ['glow', 'in', 'transition', 'neon', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element enters with a neon glow expanding animation',
    cssCode: `.glow-in {
  padding: 20px 32px;
  background: #0a0a1a;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: glow-in-anim 1s ease forwards;
}
@keyframes glow-in-anim {
  0% { opacity: 0; box-shadow: 0 0 0 #10b981; text-shadow: 0 0 0 #10b981; }
  50% { opacity: 1; box-shadow: 0 0 20px #10b98166, 0 0 40px #10b98133; text-shadow: 0 0 10px #10b981; }
  100% { box-shadow: 0 0 8px #10b98133; text-shadow: 0 0 4px #10b98155; }
}`,
    htmlCode: `<div class="glow-in">Glow In</div>`,
    isNew: true,
  },
  {
    id: 'expand-in',
    name: 'Expand In',
    category: 'transitions',
    tags: ['expand', 'in', 'transition', 'width', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element expands horizontally from center',
    cssCode: `.expand-in {
  padding: 20px 8px;
  background: #10b981;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  animation: expand-in-anim 0.5s ease forwards;
}
@keyframes expand-in-anim {
  0% { max-width: 0; padding: 20px 0; opacity: 0; }
  60% { max-width: 200px; opacity: 1; }
  100% { max-width: 200px; padding: 20px 32px; }
}`,
    htmlCode: `<div class="expand-in">Expand In</div>`,
    isNew: true,
  },
  {
    id: 'shrink-in',
    name: 'Shrink In',
    category: 'transitions',
    tags: ['shrink', 'in', 'transition', 'scale', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element shrinks from oversized to normal size',
    cssCode: `.shrink-in {
  padding: 20px 32px;
  background: #7c3aed;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: shrink-in-anim 0.6s ease forwards;
}
@keyframes shrink-in-anim {
  0% { transform: scale(1.8); opacity: 0; }
  60% { transform: scale(0.95); opacity: 1; }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="shrink-in">Shrink In</div>`,
    isNew: true,
  },
  {
    id: 'zoom-in',
    name: 'Zoom In',
    category: 'transitions',
    tags: ['zoom', 'in', 'transition', 'scale', 'entrance'],
    difficulty: 'beginner',
    description: 'Element zooms in from far away with depth',
    cssCode: `.zoom-in {
  padding: 20px 32px;
  background: #0f172a;
  color: #e2e8f0;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: zoom-in-anim 0.5s ease forwards;
}
@keyframes zoom-in-anim {
  0% { transform: scale(3); opacity: 0; filter: blur(4px); }
  100% { transform: scale(1); opacity: 1; filter: blur(0); }
}`,
    htmlCode: `<div class="zoom-in">Zoom In</div>`,
    isNew: true,
  },
  {
    id: 'fold-in',
    name: 'Fold In',
    category: 'transitions',
    tags: ['fold', 'in', 'transition', '3d', 'origami', 'entrance'],
    difficulty: 'advanced',
    description: 'Element unfolds into view like origami',
    cssCode: `.fold-in {
  padding: 20px 32px;
  background: #f97316;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transform-origin: top center;
  animation: fold-in-anim 0.6s ease forwards;
}
@keyframes fold-in-anim {
  0% { transform: perspective(400px) rotateX(-90deg); opacity: 0; }
  50% { transform: perspective(400px) rotateX(10deg); }
  70% { transform: perspective(400px) rotateX(-5deg); }
  100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="fold-in">Fold In</div>`,
    isNew: true,
  },
  {
    id: 'dissolve-in',
    name: 'Dissolve In',
    category: 'transitions',
    tags: ['dissolve', 'in', 'transition', 'blur', 'opacity', 'entrance'],
    difficulty: 'intermediate',
    description: 'Element dissolves in from blurred and scattered',
    cssCode: `.dissolve-in {
  padding: 20px 32px;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #10b981;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  animation: dissolve-in-anim 0.8s ease forwards;
}
@keyframes dissolve-in-anim {
  0% { opacity: 0; filter: blur(10px) brightness(2); transform: scale(1.05); }
  50% { opacity: 0.6; filter: blur(4px) brightness(1.3); }
  100% { opacity: 1; filter: blur(0) brightness(1); transform: scale(1); }
}`,
    htmlCode: `<div class="dissolve-in">Dissolve In</div>`,
    isNew: true,
  },
];
