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

export const effectsRemaining1c: CSSEffect[] = [
  // ===== SOCIAL =====
  {
    id: 'share-expand',
    name: 'Share Expand',
    category: 'social',
    tags: ['social', 'share', 'expand', 'animated'],
    difficulty: 'intermediate',
    description: 'Share button that expands to reveal multiple social platform options',
    cssCode: `.share-expand {
  display: flex;
  align-items: center;
  gap: 0;
  background: #1a1a2e;
  border-radius: 28px;
  padding: 4px;
  overflow: hidden;
}
.share-expand .share-btn {
  padding: 10px 18px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.share-expand .platforms {
  display: flex;
  gap: 4px;
  max-width: 0;
  overflow: hidden;
  transition: max-width 0.4s ease, padding 0.4s ease;
  padding: 0;
}
.share-expand:hover .platforms {
  max-width: 200px;
  padding: 0 8px;
}
.platforms span {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #2a2a3e;
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s;
}
.platforms span:hover { background: #10b98133; }`,
    htmlCode: `<div class="share-expand"><button class="share-btn">Share</button><div class="platforms"><span>T</span><span>F</span><span>L</span></div></div>`,
    isNew: true,
  },
  {
    id: 'like-anim',
    name: 'Like Animation',
    category: 'social',
    tags: ['social', 'like', 'heart', 'animated'],
    difficulty: 'intermediate',
    description: 'Heart like button with burst animation on click',
    cssCode: `.like-anim {
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.like-anim .heart {
  font-size: 1.6rem;
  color: #64748b;
  transition: transform 0.2s, color 0.2s;
  z-index: 1;
}
.like-anim:active .heart {
  transform: scale(1.4);
  color: #ef4444;
}
.like-anim .burst {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ef444433;
  transform: scale(0);
  opacity: 0;
}
.like-anim:active .burst {
  animation: burst-out 0.5s ease-out;
}
@keyframes burst-out {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}`,
    htmlCode: `<div class="like-anim"><div class="burst"></div><span class="heart">♥</span></div>`,
    isNew: true,
  },
  {
    id: 'social-hover',
    name: 'Social Hover',
    category: 'social',
    tags: ['social', 'hover', 'icon', 'animated'],
    difficulty: 'beginner',
    description: 'Social icons with smooth color-shift hover effects',
    cssCode: `.social-hover {
  display: flex;
  gap: 12px;
}
.social-hover a {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}
.social-hover a:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(16,185,129,0.25);
}
.social-hover a:nth-child(1):hover { color: #1da1f2; border-color: #1da1f2; }
.social-hover a:nth-child(2):hover { color: #4267b2; border-color: #4267b2; }
.social-hover a:nth-child(3):hover { color: #e1306c; border-color: #e1306c; }
.social-hover a:nth-child(4):hover { color: #10b981; border-color: #10b981; }`,
    htmlCode: `<div class="social-hover"><a href="#">X</a><a href="#">f</a><a href="#">Ig</a><a href="#">Li</a></div>`,
    isNew: true,
  },
  {
    id: 'share-popup',
    name: 'Share Popup',
    category: 'social',
    tags: ['social', 'share', 'popup', 'tooltip'],
    difficulty: 'intermediate',
    description: 'Click to reveal a share link popup with copy action',
    cssCode: `.share-popup { position: relative; display: inline-block; }
.share-popup-btn {
  padding: 10px 20px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  color: #10b981;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
.share-popup-btn:hover { border-color: #10b981; }
.share-popup-panel {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 12px 16px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  white-space: nowrap;
  color: #e2e8f0;
  font-size: 0.85rem;
}
.share-popup:hover .share-popup-panel {
  opacity: 1;
  transform: translateX(-50%) scale(1);
  pointer-events: auto;
}
.share-popup-panel::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  border: 6px solid transparent;
  border-top-color: #2a2a3e;
  transform: translateX(-50%);
}`,
    htmlCode: `<div class="share-popup"><button class="share-popup-btn">Share ↗</button><div class="share-popup-panel">copied.link/share 🔗</div></div>`,
    isNew: true,
  },
  {
    id: 'social-counter',
    name: 'Social Counter',
    category: 'social',
    tags: ['social', 'counter', 'animated', 'number'],
    difficulty: 'intermediate',
    description: 'Social stats counter that animates numbers upward on load',
    cssCode: `.social-counter {
  display: flex;
  gap: 24px;
}
.social-counter .stat {
  text-align: center;
  padding: 12px 18px;
  background: #1a1a2e;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  min-width: 80px;
}
.social-counter .num {
  font-size: 1.5rem;
  font-weight: 800;
  color: #10b981;
  display: block;
  animation: count-pop 0.6s ease-out;
}
.social-counter .label {
  font-size: 0.7rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
}
@keyframes count-pop {
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="social-counter"><div class="stat"><span class="num">2.4k</span><span class="label">Followers</span></div><div class="stat"><span class="num">189</span><span class="label">Posts</span></div><div class="stat"><span class="num">12k</span><span class="label">Likes</span></div></div>`,
    isNew: true,
  },
  {
    id: 'social-proof',
    name: 'Social Proof',
    category: 'social',
    tags: ['social', 'proof', 'badge', 'notification'],
    difficulty: 'beginner',
    description: 'Floating social proof notification badge with avatar stack',
    cssCode: `.social-proof {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: #1a1a2e;
  border-radius: 12px;
  border: 1px solid #2a2a3e;
  animation: proof-slide 0.5s ease-out;
}
.social-proof .avatars {
  display: flex;
}
.social-proof .avatars span {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
}
.social-proof .avatars span:nth-child(1) { background: #10b981; color: #fff; margin-left: 0; }
.social-proof .avatars span:nth-child(2) { background: #3b82f6; color: #fff; }
.social-proof .avatars span:nth-child(3) { background: #8b5cf6; color: #fff; }
.social-proof .text { font-size: 0.8rem; color: #94a3b8; }
.social-proof .text strong { color: #e2e8f0; }
@keyframes proof-slide {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="social-proof"><div class="avatars"><span>A</span><span>B</span><span>C</span></div><div class="text"><strong>3 people</strong> joined today</div></div>`,
    isNew: true,
  },
  {
    id: 'social-icons',
    name: 'Social Icons',
    category: 'social',
    tags: ['social', 'icons', 'rotate', 'hover'],
    difficulty: 'beginner',
    description: 'Social icon buttons with spin-reveal on hover',
    cssCode: `.social-icons {
  display: flex;
  gap: 10px;
}
.social-icons a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition: all 0.4s ease;
  transform-style: preserve-3d;
}
.social-icons a:hover {
  transform: rotateY(360deg);
  border-color: #10b981;
  color: #10b981;
  background: #10b98115;
  box-shadow: 0 0 12px #10b98133;
}`,
    htmlCode: `<div class="social-icons"><a href="#">X</a><a href="#">f</a><a href="#">in</a><a href="#">G</a></div>`,
    isNew: true,
  },
  {
    id: 'share-float',
    name: 'Share Float',
    category: 'social',
    tags: ['social', 'share', 'floating', 'animated'],
    difficulty: 'beginner',
    description: 'Floating share button with gentle bob animation',
    cssCode: `.share-float {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #10b981;
  color: #fff;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px #10b98155;
  animation: float-bob 2.5s ease-in-out infinite;
  transition: transform 0.2s;
}
.share-float:hover {
  animation: none;
  transform: scale(1.15);
}
.share-float::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #10b98144;
  animation: float-ring 2.5s ease-in-out infinite;
}
@keyframes float-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes float-ring {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 1; }
}`,
    htmlCode: `<button class="share-float">↗</button>`,
    isNew: true,
  },
  {
    id: 'social-sidebar',
    name: 'Social Sidebar',
    category: 'social',
    tags: ['social', 'sidebar', 'fixed', 'animated'],
    difficulty: 'intermediate',
    description: 'Vertical social sidebar with slide-in icons on hover',
    cssCode: `.social-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 44px;
  overflow: hidden;
}
.social-sidebar a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #1a1a2e;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  transition: all 0.3s ease;
  white-space: nowrap;
  border-left: 3px solid transparent;
}
.social-sidebar a .icon { min-width: 18px; text-align: center; }
.social-sidebar a .label { max-width: 0; overflow: hidden; transition: max-width 0.3s ease; }
.social-sidebar a:hover {
  background: #10b98115;
  color: #10b981;
  border-left-color: #10b981;
}
.social-sidebar a:hover .label { max-width: 100px; }`,
    htmlCode: `<div class="social-sidebar"><a href="#"><span class="icon">X</span><span class="label">Twitter</span></a><a href="#"><span class="icon">f</span><span class="label">Facebook</span></a><a href="#"><span class="icon">in</span><span class="label">LinkedIn</span></a></div>`,
    isNew: true,
  },
  {
    id: 'social-connect',
    name: 'Social Connect',
    category: 'social',
    tags: ['social', 'connect', 'button', 'animated'],
    difficulty: 'intermediate',
    description: 'Connect button with progress animation on hover',
    cssCode: `.social-connect {
  position: relative;
  padding: 12px 28px;
  background: transparent;
  border: 2px solid #2a2a3e;
  color: #94a3b8;
  border-radius: 28px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}
.social-connect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #10b981;
  border-radius: 28px;
  transition: width 0.4s ease;
  z-index: -1;
}
.social-connect:hover {
  color: #0a0a1a;
  border-color: #10b981;
}
.social-connect:hover::before { width: 100%; }
.social-connect:active { transform: scale(0.96); }`,
    htmlCode: `<button class="social-connect">Connect +</button>`,
    isNew: true,
  },

  // ===== FORMS =====
  {
    id: 'multistep-form',
    name: 'Multi-step Form',
    category: 'forms',
    tags: ['form', 'multistep', 'progress', 'steps'],
    difficulty: 'advanced',
    description: 'Multi-step form with animated step progress indicator',
    cssCode: `.multistep-form { width: 280px; }
.step-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 20px;
}
.step-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #2a2a3e;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.3s;
}
.step-dot.active { background: #10b981; color: #fff; box-shadow: 0 0 12px #10b98155; }
.step-dot.done { background: #10b98133; color: #10b981; }
.step-line {
  width: 40px;
  height: 2px;
  background: #2a2a3e;
  transition: background 0.3s;
}
.step-line.done { background: #10b981; }
.form-step {
  padding: 16px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  color: #e2e8f0;
  font-size: 0.85rem;
  text-align: center;
}`,
    htmlCode: `<div class="multistep-form"><div class="step-progress"><span class="step-dot done">1</span><span class="step-line done"></span><span class="step-dot active">2</span><span class="step-line"></span><span class="step-dot">3</span></div><div class="form-step">Step 2 of 3 — Your Details</div></div>`,
    isNew: true,
  },
  {
    id: 'form-validation',
    name: 'Form Validation',
    category: 'forms',
    tags: ['form', 'validation', 'input', 'error'],
    difficulty: 'intermediate',
    description: 'Form fields with CSS-only validation states and indicators',
    cssCode: `.form-validation { display: flex; flex-direction: column; gap: 14px; width: 240px; }
.form-validation label { font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 4px; }
.form-validation input {
  width: 100%;
  padding: 10px 14px;
  background: #0a0a1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}
.form-validation input:focus { border-color: #10b981; box-shadow: 0 0 0 3px #10b98122; }
.form-validation input:invalid:not(:placeholder-shown) { border-color: #ef4444; box-shadow: 0 0 0 3px #ef444422; }
.form-validation input:valid:not(:placeholder-shown) { border-color: #10b981; }
.form-validation .msg { font-size: 0.7rem; margin-top: 2px; }
.form-validation input:invalid:not(:placeholder-shown) + .msg { color: #ef4444; }
.form-validation input:valid:not(:placeholder-shown) + .msg { color: #10b981; }`,
    htmlCode: `<div class="form-validation"><div><label>Email</label><input type="email" placeholder="you@email.com" required /><div class="msg">Enter valid email</div></div><div><label>Password</label><input type="password" placeholder="Min 6 chars" minlength="6" required /><div class="msg">Looks good!</div></div></div>`,
    isNew: true,
  },
  {
    id: 'form-field-group',
    name: 'Form Field Group',
    category: 'forms',
    tags: ['form', 'group', 'fieldset', 'animated'],
    difficulty: 'intermediate',
    description: 'Grouped form fields with focus-highlight border animation',
    cssCode: `.field-group {
  padding: 16px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 12px;
  width: 240px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.field-group:focus-within {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98122;
}
.field-group .group-title {
  font-size: 0.75rem;
  color: #10b981;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-weight: 700;
}
.field-group input {
  width: 100%;
  padding: 8px 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 0.85rem;
  outline: none;
  margin-bottom: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}
.field-group input:last-child { margin-bottom: 0; }
.field-group input:focus { border-color: #10b981; }`,
    htmlCode: `<div class="field-group"><div class="group-title">Address</div><input placeholder="Street" /><input placeholder="City" /><input placeholder="Zip" /></div>`,
    isNew: true,
  },
  {
    id: 'form-slide',
    name: 'Form Slide',
    category: 'forms',
    tags: ['form', 'slide', 'transition', 'animated'],
    difficulty: 'advanced',
    description: 'Form section with sliding panel transition between steps',
    cssCode: `.form-slide {
  width: 260px;
  overflow: hidden;
  border-radius: 12px;
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
}
.form-slide-panels {
  display: flex;
  transition: transform 0.5s ease;
}
.form-slide .panel {
  min-width: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: #e2e8f0;
}
.form-slide .panel-title {
  font-weight: 700;
  margin-bottom: 12px;
  color: #10b981;
}
.form-slide input {
  width: 100%;
  padding: 8px 12px;
  background: #0a0a1a;
  border: 1px solid #2a2a3e;
  border-radius: 6px;
  color: #e2e8f0;
  outline: none;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.form-slide input:focus { border-color: #10b981; }
.form-slide .nav { display: flex; gap: 8px; margin-top: 10px; }
.form-slide .nav button {
  padding: 6px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
}
.form-slide .nav .next { background: #10b981; color: #fff; }
.form-slide .nav .back { background: #2a2a3e; color: #94a3b8; }`,
    htmlCode: `<div class="form-slide"><div class="form-slide-panels"><div class="panel"><div class="panel-title">Step 1</div><input placeholder="Name" /><div class="nav"><button class="next">Next →</button></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'form-wizard',
    name: 'Form Wizard',
    category: 'forms',
    tags: ['form', 'wizard', 'steps', 'progress'],
    difficulty: 'advanced',
    description: 'Wizard-style form with animated vertical step tracker',
    cssCode: `.form-wizard { display: flex; gap: 16px; width: 300px; }
.wizard-steps { display: flex; flex-direction: column; gap: 0; }
.wizard-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  position: relative;
  font-size: 0.8rem;
  color: #64748b;
}
.wizard-step .dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  z-index: 1;
  transition: all 0.3s;
}
.wizard-step.active .dot { background: #10b981; color: #fff; box-shadow: 0 0 10px #10b98144; }
.wizard-step.done .dot { background: #10b98133; color: #10b981; }
.wizard-step.active { color: #e2e8f0; }
.wizard-content {
  flex: 1;
  padding: 16px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  color: #94a3b8;
  font-size: 0.85rem;
}`,
    htmlCode: `<div class="form-wizard"><div class="wizard-steps"><div class="wizard-step done"><span class="dot">✓</span> Info</div><div class="wizard-step active"><span class="dot">2</span> Details</div><div class="wizard-step"><span class="dot">3</span> Review</div></div><div class="wizard-content">Fill in your details...</div></div>`,
    isNew: true,
  },
  {
    id: 'form-progress-2',
    name: 'Form Progress Bar',
    category: 'forms',
    tags: ['form', 'progress', 'bar', 'animated'],
    difficulty: 'beginner',
    description: 'Horizontal progress bar showing form completion status',
    cssCode: `.form-progress-2 { width: 260px; }
.form-progress-2 .bar-bg {
  width: 100%;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  overflow: hidden;
}
.form-progress-2 .bar-fill {
  height: 100%;
  width: 66%;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  border-radius: 3px;
  transition: width 0.5s ease;
  position: relative;
}
.form-progress-2 .bar-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  animation: shimmer-bar 1.5s infinite;
}
.form-progress-2 .info {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 0.7rem;
  color: #64748b;
}
.form-progress-2 .info .pct { color: #10b981; font-weight: 700; }
@keyframes shimmer-bar {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`,
    htmlCode: `<div class="form-progress-2"><div class="bar-bg"><div class="bar-fill"></div></div><div class="info"><span>Step 2 of 3</span><span class="pct">66%</span></div></div>`,
    isNew: true,
  },
  {
    id: 'form-shake',
    name: 'Form Shake',
    category: 'forms',
    tags: ['form', 'shake', 'error', 'animated'],
    difficulty: 'intermediate',
    description: 'Form field that shakes on invalid input submission',
    cssCode: `.form-shake { width: 240px; }
.form-shake .shake-field {
  padding: 12px 16px;
  background: #1a1a2e;
  border: 2px solid #ef4444;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  animation: shake 0.4s ease-in-out;
}
.form-shake .shake-field:focus { border-color: #10b981; animation: none; }
.form-shake .error-msg {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.form-shake .error-msg::before { content: '⚠'; font-size: 0.8rem; }
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
}`,
    htmlCode: `<div class="form-shake"><input class="shake-field" value="invalid-email" /><div class="error-msg">Please enter a valid email</div></div>`,
    isNew: true,
  },
  {
    id: 'form-success',
    name: 'Form Success',
    category: 'forms',
    tags: ['form', 'success', 'checkmark', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated success checkmark after form submission',
    cssCode: `.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background: #1a1a2e;
  border-radius: 14px;
  border: 1px solid #10b98133;
  animation: success-pop 0.5s ease-out;
}
.form-success .check-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #10b98122;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: circle-grow 0.4s ease-out;
}
.form-success .check {
  font-size: 1.6rem;
  color: #10b981;
  animation: check-pop 0.3s ease-out 0.2s both;
}
.form-success .msg { color: #e2e8f0; font-weight: 700; font-size: 1rem; }
.form-success .sub { color: #64748b; font-size: 0.8rem; }
@keyframes success-pop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes circle-grow { from { transform: scale(0); } to { transform: scale(1); } }
@keyframes check-pop { from { transform: scale(0); } to { transform: scale(1); } }`,
    htmlCode: `<div class="form-success"><div class="check-circle"><span class="check">✓</span></div><div class="msg">Submitted!</div><div class="sub">We'll be in touch soon</div></div>`,
    isNew: true,
  },
  {
    id: 'form-floating',
    name: 'Form Floating Labels',
    category: 'forms',
    tags: ['form', 'floating', 'label', 'animated'],
    difficulty: 'intermediate',
    description: 'Stacked form fields with floating label animation on focus',
    cssCode: `.form-floating { display: flex; flex-direction: column; gap: 18px; width: 240px; }
.form-floating .field {
  position: relative;
}
.form-floating input, .form-floating textarea {
  width: 100%;
  padding: 14px 14px 6px;
  background: #0a0a1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s;
}
.form-floating input:focus, .form-floating textarea:focus { border-color: #10b981; }
.form-floating label {
  position: absolute;
  left: 14px;
  top: 10px;
  font-size: 0.85rem;
  color: #64748b;
  pointer-events: none;
  transition: all 0.25s ease;
  background: #0a0a1a;
  padding: 0 4px;
}
.form-floating input:focus + label,
.form-floating input:not(:placeholder-shown) + label {
  top: -8px;
  left: 10px;
  font-size: 0.7rem;
  color: #10b981;
}`,
    htmlCode: `<div class="form-floating"><div class="field"><input placeholder=" " /><label>Name</label></div><div class="field"><input placeholder=" " /><label>Email</label></div><div class="field"><input placeholder=" " /><label>Phone</label></div></div>`,
    isNew: true,
  },
  {
    id: 'form-focus',
    name: 'Form Focus Ring',
    category: 'forms',
    tags: ['form', 'focus', 'ring', 'animated'],
    difficulty: 'beginner',
    description: 'Form inputs with animated focus ring that pulses subtly',
    cssCode: `.form-focus { display: flex; flex-direction: column; gap: 12px; width: 240px; }
.form-focus input {
  width: 100%;
  padding: 12px 16px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
}
.form-focus input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 4px #10b98122;
  animation: ring-pulse 2s ease-in-out infinite;
}
.form-focus input::placeholder { color: #4a5568; }
@keyframes ring-pulse {
  0%, 100% { box-shadow: 0 0 0 4px #10b98122; }
  50% { box-shadow: 0 0 0 6px #10b98111; }
}`,
    htmlCode: `<div class="form-focus"><input placeholder="First name" /><input placeholder="Last name" /><input placeholder="Email address" /></div>`,
    isNew: true,
  },

  // ===== DATA =====
  {
    id: 'bar-chart-anim',
    name: 'Bar Chart Animation',
    category: 'data',
    tags: ['data', 'chart', 'bar', 'animated'],
    difficulty: 'intermediate',
    description: 'Animated bar chart that grows on load with staggered timing',
    cssCode: `.bar-chart { display: flex; align-items: flex-end; gap: 8px; height: 120px; padding: 12px; background: #1a1a2e; border-radius: 10px; border: 1px solid #2a2a3e; }
.bar-chart .bar {
  width: 24px;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(to top, #10b981, #3b82f6);
  animation: bar-grow 0.8s ease-out both;
  position: relative;
}
.bar-chart .bar:nth-child(1) { height: 40%; animation-delay: 0s; }
.bar-chart .bar:nth-child(2) { height: 70%; animation-delay: 0.1s; }
.bar-chart .bar:nth-child(3) { height: 55%; animation-delay: 0.2s; }
.bar-chart .bar:nth-child(4) { height: 85%; animation-delay: 0.3s; }
.bar-chart .bar:nth-child(5) { height: 60%; animation-delay: 0.4s; }
.bar-chart .bar:nth-child(6) { height: 95%; animation-delay: 0.5s; }
@keyframes bar-grow {
  from { height: 0; opacity: 0; }
  to { opacity: 1; }
}`,
    htmlCode: `<div class="bar-chart"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'pie-chart-css',
    name: 'Pie Chart CSS',
    category: 'data',
    tags: ['data', 'chart', 'pie', 'conic'],
    difficulty: 'intermediate',
    description: 'Pure CSS pie chart using conic-gradient',
    cssCode: `.pie-chart {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #10b981 0deg 130deg,
    #3b82f6 130deg 220deg,
    #8b5cf6 220deg 300deg,
    #f59e0b 300deg 360deg
  );
  position: relative;
  animation: pie-spin 0.8s ease-out;
}
.pie-chart::after {
  content: '';
  position: absolute;
  inset: 25%;
  border-radius: 50%;
  background: #1a1a2e;
}
.pie-legend {
  display: flex;
  gap: 12px;
  margin-top: 10px;
  flex-wrap: wrap;
}
.pie-legend span {
  font-size: 0.7rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
}
.pie-legend span::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 2px;
}
@keyframes pie-spin { from { transform: rotate(-90deg); opacity: 0; } to { transform: rotate(0); opacity: 1; } }`,
    htmlCode: `<div style="text-align:center"><div class="pie-chart"></div><div class="pie-legend"><span style="--c:#10b981">Sales</span><span style="--c:#3b82f6">Ops</span><span style="--c:#8b5cf6">Dev</span><span style="--c:#f59e0b">Other</span></div></div>`,
    isNew: true,
  },
  {
    id: 'line-chart-css',
    name: 'Line Chart CSS',
    category: 'data',
    tags: ['data', 'chart', 'line', 'svg', 'animated'],
    difficulty: 'advanced',
    description: 'Minimal line chart with animated draw effect',
    cssCode: `.line-chart {
  width: 200px;
  height: 100px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  padding: 12px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.line-chart svg { width: 100%; height: 100%; }
.line-chart polyline {
  fill: none;
  stroke: #10b981;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw-line 1.5s ease forwards;
}
.line-chart .area {
  fill: #10b98115;
  stroke: none;
}
.line-chart .dot {
  fill: #10b981;
  r: 3;
  animation: dot-pop 0.3s ease-out 1.5s both;
}
@keyframes draw-line { to { stroke-dashoffset: 0; } }
@keyframes dot-pop { from { r: 0; } to { r: 3; } }`,
    htmlCode: `<div class="line-chart"><svg viewBox="0 0 176 76"><polyline points="0,60 30,45 60,55 90,20 120,35 150,10 176,25"/><circle class="dot" cx="150" cy="10"/><circle class="dot" cx="176" cy="25"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'data-table-hover',
    name: 'Data Table Hover',
    category: 'data',
    tags: ['data', 'table', 'hover', 'animated'],
    difficulty: 'beginner',
    description: 'Data table with animated row highlight on hover',
    cssCode: `.data-table { border-collapse: collapse; width: 280px; font-size: 0.8rem; }
.data-table th {
  text-align: left;
  padding: 8px 12px;
  color: #64748b;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #2a2a3e;
}
.data-table td {
  padding: 10px 12px;
  color: #e2e8f0;
  border-bottom: 1px solid #1a1a2e;
  transition: all 0.2s ease;
}
.data-table tr:hover td {
  background: #10b98111;
  color: #10b981;
}
.data-table tr:hover td:first-child {
  border-left: 3px solid #10b981;
  padding-left: 9px;
}
.data-table .num { font-variant-numeric: tabular-nums; font-weight: 600; }
.data-table .up { color: #10b981; }
.data-table .down { color: #ef4444; }`,
    htmlCode: `<table class="data-table"><tr><th>Name</th><th>Value</th><th>Change</th></tr><tr><td>Revenue</td><td class="num">$12.4k</td><td class="up">+8%</td></tr><tr><td>Users</td><td class="num">1,240</td><td class="up">+12%</td></tr><tr><td>Churn</td><td class="num">3.2%</td><td class="down">-1%</td></tr></table>`,
    isNew: true,
  },
  {
    id: 'sparkline',
    name: 'Sparkline',
    category: 'data',
    tags: ['data', 'sparkline', 'mini', 'chart'],
    difficulty: 'intermediate',
    description: 'Inline mini sparkline chart for data-rich dashboards',
    cssCode: `.sparkline {
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  height: 32px;
  padding: 4px 8px;
  background: #1a1a2e;
  border-radius: 6px;
}
.sparkline .bar {
  width: 4px;
  border-radius: 2px;
  background: #10b981;
  transition: height 0.3s ease;
  animation: spark-grow 0.6s ease-out both;
}
.sparkline .bar:nth-child(1) { height: 40%; animation-delay: 0s; }
.sparkline .bar:nth-child(2) { height: 65%; animation-delay: 0.05s; }
.sparkline .bar:nth-child(3) { height: 45%; animation-delay: 0.1s; }
.sparkline .bar:nth-child(4) { height: 80%; animation-delay: 0.15s; }
.sparkline .bar:nth-child(5) { height: 55%; animation-delay: 0.2s; }
.sparkline .bar:nth-child(6) { height: 95%; animation-delay: 0.25s; }
.sparkline .bar:nth-child(7) { height: 70%; animation-delay: 0.3s; }
.sparkline .bar:nth-child(8) { height: 85%; animation-delay: 0.35s; }
@keyframes spark-grow { from { height: 0; } to { opacity: 1; } }`,
    htmlCode: `<div class="sparkline"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'counter-anim',
    name: 'Counter Animation',
    category: 'data',
    tags: ['data', 'counter', 'number', 'animated'],
    difficulty: 'beginner',
    description: 'Large animated counter number with pulse emphasis',
    cssCode: `.counter-anim {
  text-align: center;
  padding: 20px 28px;
  background: #1a1a2e;
  border-radius: 14px;
  border: 1px solid #2a2a3e;
}
.counter-anim .number {
  font-size: 1.6rem;
  font-weight: 900;
  color: #10b981;
  line-height: 1;
  animation: counter-pop 0.6s ease-out;
}
.counter-anim .number::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: #10b98144;
  border-radius: 2px;
  margin: 8px auto 0;
}
.counter-anim .label {
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 8px;
}
@keyframes counter-pop {
  0% { transform: scale(0.3); opacity: 0; }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="counter-anim"><div class="number">4,892</div><div class="label">Active Users</div></div>`,
    isNew: true,
  },
  {
    id: 'stats-card',
    name: 'Stats Card',
    category: 'data',
    tags: ['data', 'stats', 'card', 'dashboard'],
    difficulty: 'beginner',
    description: 'Dashboard stats card with trend indicator',
    cssCode: `.stats-card {
  width: 180px;
  padding: 18px;
  background: #1a1a2e;
  border-radius: 14px;
  border: 1px solid #2a2a3e;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.stats-card:hover { border-color: #10b98144; box-shadow: 0 8px 24px #10b98111; }
.stats-card .title { font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
.stats-card .value { font-size: 1.8rem; font-weight: 800; color: #e2e8f0; margin: 6px 0; }
.stats-card .trend { font-size: 0.8rem; font-weight: 600; }
.stats-card .trend.up { color: #10b981; }
.stats-card .trend.down { color: #ef4444; }
.stats-card .trend span { color: #64748b; font-weight: 400; font-size: 0.7rem; margin-left: 4px; }`,
    htmlCode: `<div class="stats-card"><div class="title">Revenue</div><div class="value">$24.5k</div><div class="trend up">↑ 12.5%<span>vs last month</span></div></div>`,
    isNew: true,
  },
  {
    id: 'gauge-meter',
    name: 'Gauge Meter',
    category: 'data',
    tags: ['data', 'gauge', 'meter', 'conic'],
    difficulty: 'intermediate',
    description: 'Semicircular gauge meter with conic gradient',
    cssCode: `.gauge-meter { position: relative; width: 120px; height: 70px; overflow: hidden; }
.gauge-meter .arc {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg,
    #10b981 0deg 108deg,
    #f59e0b 108deg 180deg,
    #2a2a3e 180deg 360deg
  );
  mask: radial-gradient(circle, transparent 44px, #000 45px);
  -webkit-mask: radial-gradient(circle, transparent 44px, #000 45px);
  animation: gauge-fill 1s ease-out;
}
.gauge-meter .needle {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 3px;
  height: 42px;
  background: #e2e8f0;
  border-radius: 2px;
  transform-origin: bottom center;
  transform: translateX(-50%) rotate(-36deg);
  animation: needle-swing 1s ease-out;
}
.gauge-meter .center-dot {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: #e2e8f0;
  border-radius: 50%;
}
.gauge-meter .reading {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  font-weight: 800;
  color: #10b981;
}
@keyframes gauge-fill { from { opacity: 0; } to { opacity: 1; } }
@keyframes needle-swing { from { transform: translateX(-50%) rotate(-90deg); } to { transform: translateX(-50%) rotate(-36deg); } }`,
    htmlCode: `<div class="gauge-meter"><div class="arc"></div><div class="needle"></div><div class="center-dot"></div><div class="reading">72</div></div>`,
    isNew: true,
  },
  {
    id: 'donut-chart',
    name: 'Donut Chart',
    category: 'data',
    tags: ['data', 'chart', 'donut', 'conic'],
    difficulty: 'intermediate',
    description: 'Clean donut chart with center label using conic-gradient',
    cssCode: `.donut-chart {
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: conic-gradient(
    #10b981 0deg 158deg,
    #3b82f6 158deg 252deg,
    #8b5cf6 252deg 320deg,
    #2a2a3e 320deg 360deg
  );
  animation: donut-spin 0.8s ease-out;
}
.donut-chart::after {
  content: '';
  position: absolute;
  inset: 28%;
  border-radius: 50%;
  background: #1a1a2e;
}
.donut-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.donut-center .val { font-size: 1.3rem; font-weight: 800; color: #e2e8f0; }
.donut-center .lbl { font-size: 0.6rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
@keyframes donut-spin { from { transform: rotate(-90deg); opacity: 0; } to { transform: rotate(0); opacity: 1; } }`,
    htmlCode: `<div class="donut-chart"><div class="donut-center"><span class="val">78%</span><span class="lbl">Usage</span></div></div>`,
    isNew: true,
  },
  {
    id: 'data-highlight',
    name: 'Data Highlight',
    category: 'data',
    tags: ['data', 'highlight', 'glow', 'emphasis'],
    difficulty: 'beginner',
    description: 'Data value with pulsing highlight glow emphasis',
    cssCode: `.data-highlight {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 6px 14px;
  background: #10b98115;
  border: 1px solid #10b98133;
  border-radius: 8px;
  animation: highlight-pulse 2.5s ease-in-out infinite;
}
.data-highlight .value {
  font-size: 1.4rem;
  font-weight: 800;
  color: #10b981;
  font-variant-numeric: tabular-nums;
}
.data-highlight .unit {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
}
.data-highlight .delta {
  font-size: 0.7rem;
  color: #10b981;
  font-weight: 700;
  background: #10b98122;
  padding: 2px 6px;
  border-radius: 4px;
}
@keyframes highlight-pulse {
  0%, 100% { box-shadow: 0 0 0 0 #10b98122; }
  50% { box-shadow: 0 0 12px 2px #10b98122; }
}`,
    htmlCode: `<div class="data-highlight"><span class="value">$8.2k</span><span class="unit">MRR</span><span class="delta">+14%</span></div>`,
    isNew: true,
  },

  // ===== SLIDERS =====
  {
    id: 'range-custom',
    name: 'Custom Range',
    category: 'sliders',
    tags: ['slider', 'range', 'custom', 'styled'],
    difficulty: 'intermediate',
    description: 'Custom styled range slider with themed track and thumb',
    cssCode: `.range-custom input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 220px;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  outline: none;
}
.range-custom input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  box-shadow: 0 0 8px #10b98155;
  transition: transform 0.2s, box-shadow 0.2s;
}
.range-custom input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 14px #10b98177;
}
.range-custom input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 8px #10b98155;
}
.range-custom .label {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #64748b;
  margin-top: 6px;
}`,
    htmlCode: `<div class="range-custom"><input type="range" min="0" max="100" value="65" /><div class="label"><span>0</span><span>100</span></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-tooltip',
    name: 'Slider Tooltip',
    category: 'sliders',
    tags: ['slider', 'range', 'tooltip', 'value'],
    difficulty: 'intermediate',
    description: 'Range slider with CSS tooltip showing current value',
    cssCode: `.slider-tooltip { position: relative; width: 220px; }
.slider-tooltip input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  outline: none;
}
.slider-tooltip input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.slider-tooltip input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  border: none;
  cursor: pointer;
}
.slider-tooltip .tip {
  position: absolute;
  top: -32px;
  left: 65%;
  transform: translateX(-50%);
  background: #10b981;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
}
.slider-tooltip .tip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  border: 5px solid transparent;
  border-top-color: #10b981;
  transform: translateX(-50%);
}`,
    htmlCode: `<div class="slider-tooltip"><div class="tip">65</div><input type="range" min="0" max="100" value="65" /></div>`,
    isNew: true,
  },
  {
    id: 'slider-gradient',
    name: 'Slider Gradient',
    category: 'sliders',
    tags: ['slider', 'range', 'gradient', 'track'],
    difficulty: 'intermediate',
    description: 'Range slider with gradient-filled track',
    cssCode: `.slider-gradient input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 220px;
  height: 8px;
  border-radius: 4px;
  outline: none;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
}
.slider-gradient input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  border: 3px solid #10b981;
  transition: border-color 0.2s;
}
.slider-gradient input[type="range"]::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  border: 3px solid #10b981;
}
.slider-gradient input[type="range"]:active::-webkit-slider-thumb { border-color: #3b82f6; }
.slider-gradient .labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #64748b;
  margin-top: 6px;
}
.slider-gradient .labels .end { color: #8b5cf6; }`,
    htmlCode: `<div class="slider-gradient"><input type="range" min="0" max="100" value="50" /><div class="labels"><span>Low</span><span class="end">High</span></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-glow',
    name: 'Slider Glow',
    category: 'sliders',
    tags: ['slider', 'range', 'glow', 'neon'],
    difficulty: 'intermediate',
    description: 'Range slider with neon glow track and thumb effect',
    cssCode: `.slider-glow input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 220px;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  outline: none;
  box-shadow: 0 0 8px #10b98122;
}
.slider-glow input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b98166, 0 0 30px #10b98133;
  transition: box-shadow 0.3s;
}
.slider-glow input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 14px #10b981, 0 0 28px #10b98188, 0 0 42px #10b98144;
}
.slider-glow input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b98166;
}`,
    htmlCode: `<div class="slider-glow"><input type="range" min="0" max="100" value="45" /></div>`,
    isNew: true,
  },
  {
    id: 'slider-value',
    name: 'Slider Value Display',
    category: 'sliders',
    tags: ['slider', 'range', 'value', 'display'],
    difficulty: 'beginner',
    description: 'Range slider with inline value display badge',
    cssCode: `.slider-value { display: flex; align-items: center; gap: 12px; }
.slider-value input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 180px;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  outline: none;
}
.slider-value input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  transition: transform 0.2s;
}
.slider-value input[type="range"]:active::-webkit-slider-thumb { transform: scale(1.3); }
.slider-value input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  border: none;
  cursor: pointer;
}
.slider-value .badge {
  min-width: 42px;
  text-align: center;
  padding: 4px 10px;
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 6px;
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}`,
    htmlCode: `<div class="slider-value"><input type="range" min="0" max="100" value="72" /><span class="badge">72</span></div>`,
    isNew: true,
  },
  {
    id: 'dual-range',
    name: 'Dual Range Slider',
    category: 'sliders',
    tags: ['slider', 'range', 'dual', 'min-max'],
    difficulty: 'advanced',
    description: 'Dual-thumb range slider for min/max selection',
    cssCode: `.dual-range { position: relative; width: 220px; height: 40px; }
.dual-range .track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
}
.dual-range .fill {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 6px;
  background: #10b981;
  border-radius: 3px;
  left: 25%;
  width: 50%;
}
.dual-range input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  background: transparent;
  pointer-events: none;
  outline: none;
  z-index: 2;
}
.dual-range input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 0 6px #10b98155;
  border: 2px solid #fff;
}
.dual-range input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  border: 2px solid #fff;
  cursor: pointer;
  pointer-events: auto;
}
.dual-range .labels {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 0.7rem;
  color: #64748b;
}`,
    htmlCode: `<div class="dual-range"><div class="track"></div><div class="fill"></div><input type="range" min="0" max="100" value="25" /><input type="range" min="0" max="100" value="75" /><div class="labels"><span>$0</span><span>$500</span></div></div>`,
    isNew: true,
  },
  {
    id: 'vertical-slider',
    name: 'Vertical Slider',
    category: 'sliders',
    tags: ['slider', 'range', 'vertical', 'rotated'],
    difficulty: 'intermediate',
    description: 'Vertical range slider for volume or intensity controls',
    cssCode: `.vertical-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 160px;
}
.vertical-slider input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 140px;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  outline: none;
  transform: rotate(-90deg);
  transform-origin: center center;
}
.vertical-slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  box-shadow: 0 0 8px #10b98144;
  transition: transform 0.2s;
}
.vertical-slider input[type="range"]:active::-webkit-slider-thumb { transform: scale(1.3); }
.vertical-slider input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  border: none;
  cursor: pointer;
}
.vertical-slider .label { font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
.vertical-slider .val { font-size: 0.85rem; color: #10b981; font-weight: 700; }`,
    htmlCode: `<div class="vertical-slider"><span class="val">65</span><input type="range" min="0" max="100" value="65" /><span class="label">Volume</span></div>`,
    isNew: true,
  },
  {
    id: 'slider-marks',
    name: 'Slider Marks',
    category: 'sliders',
    tags: ['slider', 'range', 'marks', 'ticks'],
    difficulty: 'intermediate',
    description: 'Range slider with tick marks along the track',
    cssCode: `.slider-marks { position: relative; width: 220px; }
.slider-marks input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  outline: none;
  position: relative;
  z-index: 2;
}
.slider-marks input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  box-shadow: 0 0 6px #10b98144;
}
.slider-marks input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  border: none;
  cursor: pointer;
}
.slider-marks .ticks {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: 4px;
}
.slider-marks .ticks span {
  font-size: 0.6rem;
  color: #4a5568;
  position: relative;
}
.slider-marks .ticks span::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  width: 1px;
  height: 6px;
  background: #4a5568;
  transform: translateX(-50%);
}`,
    htmlCode: `<div class="slider-marks"><input type="range" min="0" max="5" value="3" step="1" /><div class="ticks"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-neon',
    name: 'Slider Neon',
    category: 'sliders',
    tags: ['slider', 'range', 'neon', 'glow'],
    difficulty: 'intermediate',
    description: 'Neon-styled range slider with bright glow and dark track',
    cssCode: `.slider-neon input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 220px;
  height: 4px;
  background: #1a1a2e;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 0 4px #10b98133;
}
.slider-neon input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0a0a1a;
  border: 3px solid #10b981;
  cursor: pointer;
  box-shadow: 0 0 8px #10b981, 0 0 16px #10b98166, 0 0 24px #10b98133;
  transition: all 0.3s;
}
.slider-neon input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 12px #10b981, 0 0 24px #10b98188, 0 0 36px #10b98144;
  border-color: #34d399;
}
.slider-neon input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0a0a1a;
  border: 3px solid #10b981;
  cursor: pointer;
  box-shadow: 0 0 8px #10b981, 0 0 16px #10b98166;
}
.slider-neon .val {
  font-size: 0.85rem;
  color: #10b981;
  font-weight: 700;
  margin-top: 8px;
  text-shadow: 0 0 8px #10b98166;
}`,
    htmlCode: `<div class="slider-neon"><input type="range" min="0" max="100" value="55" /><div class="val">55</div></div>`,
    isNew: true,
  },
  {
    id: 'slider-glass',
    name: 'Slider Glass',
    category: 'sliders',
    tags: ['slider', 'range', 'glass', 'frosted'],
    difficulty: 'intermediate',
    description: 'Glassmorphism-styled range slider with frosted effect',
    cssCode: `.slider-glass {
  padding: 16px 20px;
  background: rgba(16,185,129,0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 14px;
  border: 1px solid rgba(16,185,129,0.15);
  width: 200px;
}
.slider-glass .title {
  font-size: 0.7rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.slider-glass input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: #2a2a3e55;
  border-radius: 3px;
  outline: none;
}
.slider-glass input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(16,185,129,0.3);
  backdrop-filter: blur(4px);
  border: 2px solid #10b981;
  cursor: pointer;
  box-shadow: 0 0 10px #10b98133;
  transition: all 0.2s;
}
.slider-glass input[type="range"]:active::-webkit-slider-thumb { transform: scale(1.2); }
.slider-glass input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(16,185,129,0.3);
  border: 2px solid #10b981;
  cursor: pointer;
}
.slider-glass .val-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.7rem;
  color: #64748b;
}
.slider-glass .val-row .cur { color: #10b981; font-weight: 700; }`,
    htmlCode: `<div class="slider-glass"><div class="title">Brightness</div><input type="range" min="0" max="100" value="70" /><div class="val-row"><span>0%</span><span class="cur">70%</span><span>100%</span></div></div>`,
    isNew: true,
  },
];
