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

export const effectsNewBatch3: CSSEffect[] = [
  // ==================== SOCIAL EFFECTS (10) ====================
  {
    id: 'social-share-button',
    name: 'Social Share Button',
    category: 'social',
    tags: ['social', 'share', 'button', 'expand'],
    difficulty: 'intermediate',
    description: 'Share button that expands to reveal multiple social platform options on hover',
    cssCode: `.social-share {
  position: relative;
  display: inline-block;
}
.social-share-btn {
  background: #10b981;
  color: #0a0a1a;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.social-share-btn:hover { background: #059669; }
.social-share-opts {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  opacity: 0;
  pointer-events: none;
  display: flex;
  gap: 8px;
  padding: 10px 14px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  transition: all 0.3s ease;
  margin-top: 8px;
}
.social-share:hover .social-share-opts {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.social-share-opt {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  transition: transform 0.2s ease;
}
.social-share-opt:hover { transform: scale(1.2); }
.social-share-opt.tw { background: #1da1f2; color: #fff; }
.social-share-opt.fb { background: #1877f2; color: #fff; }
.social-share-opt.li { background: #0a66c2; color: #fff; }`,
    htmlCode: `<div class="social-share"><button class="social-share-btn">Share ↗</button><div class="social-share-opts"><div class="social-share-opt tw">𝕏</div><div class="social-share-opt fb">f</div><div class="social-share-opt li">in</div></div></div>`,
    isNew: true,
  },
  {
    id: 'like-heart-animation',
    name: 'Like Heart Animation',
    category: 'social',
    tags: ['social', 'like', 'heart', 'animation'],
    difficulty: 'intermediate',
    description: 'Heart button with a burst animation effect when liked',
    cssCode: `.like-heart {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.like-heart-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
}
.like-heart:hover .like-heart-icon {
  border-color: #ef4444;
  background: #ef444418;
}
.like-heart.liked .like-heart-icon {
  border-color: #ef4444;
  background: #ef4444;
  animation: heart-burst 0.5s ease;
}
@keyframes heart-burst {
  0% { transform: scale(1); }
  25% { transform: scale(1.35); }
  50% { transform: scale(0.9); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.like-heart.liked .like-heart-icon::after {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid #ef4444;
  animation: heart-ring 0.6s ease forwards;
  opacity: 0;
}
@keyframes heart-ring {
  0% { transform: scale(0.8); opacity: 0.8; }
  100% { transform: scale(1.4); opacity: 0; }
}
.like-heart-count {
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
}
.like-heart.liked .like-heart-count { color: #ef4444; }`,
    htmlCode: `<div class="like-heart liked"><div class="like-heart-icon">❤</div><span class="like-heart-count">128</span></div>`,
    isNew: true,
  },
  {
    id: 'twitter-bird',
    name: 'Twitter Bird',
    category: 'social',
    tags: ['social', 'twitter', 'bird', 'bounce'],
    difficulty: 'beginner',
    description: 'Twitter/X icon button with a playful bird bounce animation on hover',
    cssCode: `.twitter-bird-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0f0f1a;
  border: 1px solid #1da1f244;
  border-radius: 10px;
  padding: 10px 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.twitter-bird-btn:hover {
  border-color: #1da1f2;
  background: #1da1f210;
}
.twitter-bird-icon {
  font-size: 1.3rem;
  animation: bird-idle 2s ease-in-out infinite;
  transition: all 0.3s ease;
}
.twitter-bird-btn:hover .twitter-bird-icon {
  animation: bird-bounce 0.5s ease;
}
@keyframes bird-idle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
@keyframes bird-bounce {
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(-10deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(-4px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
}
.twitter-bird-label {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
}
.twitter-bird-btn:hover .twitter-bird-label { color: #1da1f2; }`,
    htmlCode: `<div class="twitter-bird-btn"><span class="twitter-bird-icon">𝕏</span><span class="twitter-bird-label">Follow on X</span></div>`,
    isNew: true,
  },
  {
    id: 'facebook-fade',
    name: 'Facebook Fade',
    category: 'social',
    tags: ['social', 'facebook', 'fade', 'gradient'],
    difficulty: 'beginner',
    description: 'Facebook button with a smooth fade-in color overlay effect on hover',
    cssCode: `.fb-fade-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: #0f0f1a;
  border: 1px solid #1877f244;
  transition: border-color 0.3s ease;
}
.fb-fade-btn:hover { border-color: #1877f2; }
.fb-fade-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #1877f2;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.fb-fade-btn:hover::before { opacity: 1; }
.fb-fade-icon {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1877f2;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}
.fb-fade-btn:hover .fb-fade-icon { color: #fff; }
.fb-fade-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e2e8f0;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}
.fb-fade-btn:hover .fb-fade-label { color: #fff; }`,
    htmlCode: `<div class="fb-fade-btn"><span class="fb-fade-icon">f</span><span class="fb-fade-label">Connect with Facebook</span></div>`,
    isNew: true,
  },
  {
    id: 'instagram-gradient',
    name: 'Instagram Gradient',
    category: 'social',
    tags: ['social', 'instagram', 'gradient', 'rainbow'],
    difficulty: 'intermediate',
    description: 'Instagram button with the signature gradient border that animates on hover',
    cssCode: `.ig-gradient-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 2px;
  border-radius: 10px;
  background: #2a2a3e;
  cursor: pointer;
  overflow: hidden;
}
.ig-gradient-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #8a3ab9, #4c68d7, #6b8de3);
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: ig-shift 3s ease infinite;
}
.ig-gradient-btn:hover::before { opacity: 1; }
@keyframes ig-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.ig-gradient-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #0f0f1a;
  border-radius: 8px;
  padding: 10px 18px;
  position: relative;
  z-index: 1;
}
.ig-gradient-icon {
  font-size: 1.2rem;
}
.ig-gradient-label {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
.ig-gradient-btn:hover .ig-gradient-label { color: #e6683c; }`,
    htmlCode: `<div class="ig-gradient-btn"><div class="ig-gradient-inner"><span class="ig-gradient-icon">📷</span><span class="ig-gradient-label">Follow on Instagram</span></div></div>`,
    isNew: true,
  },
  {
    id: 'linkedin-pulse',
    name: 'LinkedIn Pulse',
    category: 'social',
    tags: ['social', 'linkedin', 'pulse', 'professional'],
    difficulty: 'beginner',
    description: 'LinkedIn button with a pulsing ring animation to draw attention',
    cssCode: `.li-pulse-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0f0f1a;
  border: 1px solid #0a66c244;
  border-radius: 10px;
  padding: 10px 18px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}
.li-pulse-btn:hover {
  border-color: #0a66c2;
}
.li-pulse-btn::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 12px;
  border: 2px solid #0a66c2;
  opacity: 0;
  animation: li-pulse-ring 2s ease-in-out infinite;
}
@keyframes li-pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.08); opacity: 0; }
}
.li-pulse-icon {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #0a66c2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 900;
}
.li-pulse-label {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
.li-pulse-btn:hover .li-pulse-label { color: #0a66c2; }`,
    htmlCode: `<div class="li-pulse-btn"><div class="li-pulse-icon">in</div><span class="li-pulse-label">Connect on LinkedIn</span></div>`,
    isNew: true,
  },
  {
    id: 'share-expand',
    name: 'Share Expand',
    category: 'social',
    tags: ['social', 'share', 'expand', 'circle'],
    difficulty: 'intermediate',
    description: 'Share icon that expands into a radial menu of social icons on hover',
    cssCode: `.share-expand {
  position: relative;
  width: 44px;
  height: 44px;
}
.share-expand-trigger {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #10b981;
  color: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}
.share-expand-trigger:hover { background: #059669; }
.share-expand-item {
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  z-index: 1;
}
.share-expand:hover .share-expand-item {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.share-expand:hover .share-expand-item:nth-child(2) { transform: translate(-50%, calc(-50% - 42px)) scale(1); }
.share-expand:hover .share-expand-item:nth-child(3) { transform: translate(calc(-50% + 38px), calc(-50% - 20px)) scale(1); }
.share-expand:hover .share-expand-item:nth-child(4) { transform: translate(calc(-50% - 38px), calc(-50% - 20px)) scale(1); }
.share-expand-item.s1 { background: #1da1f2; color: #fff; transition-delay: 0s; }
.share-expand-item.s2 { background: #1877f2; color: #fff; transition-delay: 0.05s; }
.share-expand-item.s3 { background: #0a66c2; color: #fff; transition-delay: 0.1s; }`,
    htmlCode: `<div class="share-expand"><div class="share-expand-trigger">↗</div><div class="share-expand-item s1">𝕏</div><div class="share-expand-item s2">f</div><div class="share-expand-item s3">in</div></div>`,
    isNew: true,
  },
  {
    id: 'follow-button',
    name: 'Follow Button',
    category: 'social',
    tags: ['social', 'follow', 'button', 'state'],
    difficulty: 'beginner',
    description: 'Follow button that transforms to a following state with a checkmark animation',
    cssCode: `.follow-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 24px;
  border: 2px solid #10b981;
  background: transparent;
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.follow-btn:hover {
  background: #10b981;
  color: #0a0a1a;
}
.follow-btn.following {
  background: #10b981;
  color: #0a0a1a;
  border-color: #10b981;
}
.follow-btn.following:hover {
  background: #ef4444;
  border-color: #ef4444;
}
.follow-btn-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}
.follow-btn.following .follow-btn-icon {
  animation: check-pop 0.4s ease;
}
@keyframes check-pop {
  0% { transform: scale(0); }
  60% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
.follow-btn.following:hover .follow-btn-text { display: none; }
.follow-btn.following:hover .follow-btn-unfollow { display: inline; }
.follow-btn-unfollow { display: none; }`,
    htmlCode: `<div class="follow-btn following"><span class="follow-btn-icon">✓</span><span class="follow-btn-text">Following</span><span class="follow-btn-unfollow">Unfollow</span></div>`,
    isNew: true,
  },
  {
    id: 'social-counter',
    name: 'Social Counter',
    category: 'social',
    tags: ['social', 'counter', 'number', 'animate'],
    difficulty: 'intermediate',
    description: 'Social media follower counter with an animated number display',
    cssCode: `.social-counter {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 14px 18px;
}
.social-counter-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  flex-shrink: 0;
}
.social-counter-icon.tw { background: #1da1f220; color: #1da1f2; }
.social-counter-info { display: flex; flex-direction: column; }
.social-counter-num {
  color: #e2e8f0;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
  animation: counter-pop 0.6s ease;
}
@keyframes counter-pop {
  0% { transform: translateY(10px); opacity: 0; }
  60% { transform: translateY(-2px); }
  100% { transform: translateY(0); opacity: 1; }
}
.social-counter-label {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 2px;
}
.social-counter-badge {
  background: #10b98120;
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  margin-top: 4px;
  display: inline-block;
  animation: badge-glow 2s ease-in-out infinite;
}
@keyframes badge-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.3); }
  50% { box-shadow: 0 0 8px 2px rgba(16,185,129,0.15); }
}`,
    htmlCode: `<div class="social-counter"><div class="social-counter-icon tw">𝕏</div><div class="social-counter-info"><div class="social-counter-num">24.5K</div><div class="social-counter-label">Followers</div><div class="social-counter-badge">+1.2K this week</div></div></div>`,
    isNew: true,
  },
  {
    id: 'social-proof-popup',
    name: 'Social Proof Popup',
    category: 'social',
    tags: ['social', 'proof', 'popup', 'notification'],
    difficulty: 'intermediate',
    description: 'Slide-in social proof notification popup that appears and auto-dismisses',
    cssCode: `.social-proof-popup {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 12px 16px;
  animation: proof-slide 4s ease-in-out infinite;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}
@keyframes proof-slide {
  0% { transform: translateX(120%); opacity: 0; }
  10% { transform: translateX(0); opacity: 1; }
  80% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(120%); opacity: 0; }
}
.social-proof-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}
.social-proof-text {
  display: flex;
  flex-direction: column;
}
.social-proof-action {
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
}
.social-proof-time {
  color: #64748b;
  font-size: 0.65rem;
  margin-top: 2px;
}
.social-proof-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
  animation: dot-blink 1.5s ease-in-out infinite;
}
@keyframes dot-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,
    htmlCode: `<div class="social-proof-popup"><div class="social-proof-avatar">JD</div><div class="social-proof-text"><span class="social-proof-action">John just signed up</span><span class="social-proof-time">2 minutes ago</span></div><div class="social-proof-dot"></div></div>`,
    isNew: true,
  },

  // ==================== FORMS EFFECTS (10) ====================
  {
    id: 'form-shake-validation',
    name: 'Form Shake Validation',
    category: 'forms',
    tags: ['forms', 'validation', 'shake', 'error'],
    difficulty: 'intermediate',
    description: 'Input field that shakes when validation fails with an error message',
    cssCode: `.form-shake-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-shake-input {
  background: #0f0f1a;
  border: 2px solid #ef4444;
  border-radius: 8px;
  padding: 10px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  outline: none;
  animation: shake 0.5s ease;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 50%, 90% { transform: translateX(-4px); }
  30%, 70% { transform: translateX(4px); }
}
.form-shake-input::placeholder { color: #64748b; }
.form-shake-error {
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  animation: error-in 0.3s ease 0.4s both;
}
@keyframes error-in {
  0% { transform: translateY(-4px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.form-shake-icon {
  font-size: 0.85rem;
}`,
    htmlCode: `<div class="form-shake-wrap"><input class="form-shake-input" type="text" placeholder="Email address" /><div class="form-shake-error"><span class="form-shake-icon">⚠</span> Please enter a valid email</div></div>`,
    isNew: true,
  },
  {
    id: 'radio-custom-circle',
    name: 'Radio Custom Circle',
    category: 'forms',
    tags: ['forms', 'radio', 'custom', 'circle'],
    difficulty: 'beginner',
    description: 'Custom-styled radio button with animated fill and emerald accent',
    cssCode: `.radio-custom {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.radio-custom-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #2a2a3e;
  position: relative;
  transition: border-color 0.3s ease;
  flex-shrink: 0;
}
.radio-custom-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.radio-custom.selected .radio-custom-circle {
  border-color: #10b981;
}
.radio-custom.selected .radio-custom-circle::after {
  transform: translate(-50%, -50%) scale(1);
}
.radio-custom-label {
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.3s ease;
}
.radio-custom.selected .radio-custom-label {
  color: #e2e8f0;
  font-weight: 600;
}`,
    htmlCode: `<div style="display:flex;flex-direction:column;gap:12px"><div class="radio-custom selected"><div class="radio-custom-circle"></div><span class="radio-custom-label">Option A</span></div><div class="radio-custom"><div class="radio-custom-circle"></div><span class="radio-custom-label">Option B</span></div><div class="radio-custom"><div class="radio-custom-circle"></div><span class="radio-custom-label">Option C</span></div></div>`,
    isNew: true,
  },
  {
    id: 'checkbox-tick',
    name: 'Checkbox Tick',
    category: 'forms',
    tags: ['forms', 'checkbox', 'tick', 'animation'],
    difficulty: 'beginner',
    description: 'Custom checkbox with an animated checkmark that draws on check',
    cssCode: `.checkbox-tick {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.checkbox-tick-box {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 2px solid #2a2a3e;
  background: #0f0f1a;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox-tick.checked .checkbox-tick-box {
  background: #10b981;
  border-color: #10b981;
}
.checkbox-tick-check {
  width: 12px;
  height: 8px;
  border-left: 2.5px solid #0a0a1a;
  border-bottom: 2.5px solid #0a0a1a;
  transform: rotate(-45deg) scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin-top: -2px;
}
.checkbox-tick.checked .checkbox-tick-check {
  transform: rotate(-45deg) scale(1);
}
.checkbox-tick-label {
  color: #94a3b8;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}
.checkbox-tick.checked .checkbox-tick-label {
  color: #e2e8f0;
}`,
    htmlCode: `<div style="display:flex;flex-direction:column;gap:12px"><div class="checkbox-tick checked"><div class="checkbox-tick-box"><div class="checkbox-tick-check"></div></div><span class="checkbox-tick-label">Accept terms</span></div><div class="checkbox-tick"><div class="checkbox-tick-box"><div class="checkbox-tick-check"></div></div><span class="checkbox-tick-label">Subscribe to newsletter</span></div></div>`,
    isNew: true,
  },
  {
    id: 'file-upload-drag',
    name: 'File Upload Drag',
    category: 'forms',
    tags: ['forms', 'file', 'upload', 'drag'],
    difficulty: 'intermediate',
    description: 'Drag-and-drop file upload zone with dashed border and hover effect',
    cssCode: `.file-upload-zone {
  width: 240px;
  border: 2px dashed #2a2a3e;
  border-radius: 12px;
  padding: 28px 20px;
  text-align: center;
  background: #0a0a1a;
  transition: all 0.3s ease;
  cursor: pointer;
}
.file-upload-zone:hover {
  border-color: #10b981;
  background: #10b98108;
}
.file-upload-zone.dragover {
  border-color: #10b981;
  background: #10b98115;
  transform: scale(1.02);
}
.file-upload-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
  animation: upload-float 2s ease-in-out infinite;
}
@keyframes upload-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.file-upload-text {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
}
.file-upload-hint {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 4px;
}
.file-upload-browse {
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 8px;
  display: inline-block;
}`,
    htmlCode: `<div class="file-upload-zone"><div class="file-upload-icon">📁</div><div class="file-upload-text">Drop files here</div><div class="file-upload-hint">or click to browse</div><div class="file-upload-browse">Browse Files</div></div>`,
    isNew: true,
  },
  {
    id: 'select-dropdown-custom',
    name: 'Select Dropdown Custom',
    category: 'forms',
    tags: ['forms', 'select', 'dropdown', 'custom'],
    difficulty: 'intermediate',
    description: 'Custom styled select dropdown with arrow animation and focus state',
    cssCode: `.select-custom {
  position: relative;
  width: 220px;
}
.select-custom-trigger {
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px 36px 10px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
  position: relative;
}
.select-custom-trigger:hover,
.select-custom.open .select-custom-trigger {
  border-color: #10b981;
}
.select-custom-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 0.7rem;
  transition: transform 0.3s ease, color 0.3s ease;
}
.select-custom.open .select-custom-arrow {
  transform: translateY(-50%) rotate(180deg);
  color: #10b981;
}
.select-custom-options {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
}
.select-custom-option {
  padding: 9px 14px;
  color: #94a3b8;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.select-custom-option:hover {
  background: #10b98118;
  color: #10b981;
}
.select-custom-option.active {
  color: #10b981;
  font-weight: 600;
  background: #10b98110;
}`,
    htmlCode: `<div class="select-custom open"><div class="select-custom-trigger">Select option<span class="select-custom-arrow">▼</span></div><div class="select-custom-options"><div class="select-custom-option active">Emerald</div><div class="select-custom-option">Sapphire</div><div class="select-custom-option">Ruby</div></div></div>`,
    isNew: true,
  },
  {
    id: 'textarea-auto-grow',
    name: 'Textarea Auto Grow',
    category: 'forms',
    tags: ['forms', 'textarea', 'auto', 'grow'],
    difficulty: 'beginner',
    description: 'Textarea with a visual auto-grow indicator and character count',
    cssCode: `.textarea-grow-wrap {
  position: relative;
  width: 240px;
}
.textarea-grow {
  width: 100%;
  min-height: 60px;
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 10px;
  padding: 12px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  resize: none;
  outline: none;
  font-family: inherit;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}
.textarea-grow:focus {
  border-color: #10b981;
}
.textarea-grow::placeholder {
  color: #64748b;
}
.textarea-grow-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
}
.textarea-grow-hint {
  color: #64748b;
  font-size: 0.7rem;
}
.textarea-grow-count {
  color: #64748b;
  font-size: 0.7rem;
  font-weight: 600;
  transition: color 0.3s ease;
}
.textarea-grow-count.warn {
  color: #f59e0b;
}
.textarea-grow-count.danger {
  color: #ef4444;
}
.textarea-grow-line {
  height: 2px;
  background: #2a2a3e;
  border-radius: 1px;
  margin-top: 4px;
  overflow: hidden;
}
.textarea-grow-line::after {
  content: '';
  display: block;
  height: 100%;
  width: 35%;
  background: #10b981;
  border-radius: 1px;
  transition: width 0.3s ease, background 0.3s ease;
}`,
    htmlCode: `<div class="textarea-grow-wrap"><textarea class="textarea-grow" placeholder="Write something...">Hello world, this is a demo</textarea><div class="textarea-grow-line"></div><div class="textarea-grow-footer"><span class="textarea-grow-hint">Markdown supported</span><span class="textarea-grow-count">35/500</span></div></div>`,
    isNew: true,
  },
  {
    id: 'form-step-wizard',
    name: 'Form Step Wizard',
    category: 'forms',
    tags: ['forms', 'wizard', 'step', 'progress'],
    difficulty: 'intermediate',
    description: 'Multi-step form wizard with numbered steps and progress bar',
    cssCode: `.form-wizard {
  width: 260px;
}
.form-wizard-steps {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.form-wizard-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}
.form-wizard-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
  z-index: 1;
  transition: all 0.3s ease;
}
.form-wizard-step.done .form-wizard-dot {
  background: #10b981;
  border-color: #10b981;
  color: #0a0a1a;
}
.form-wizard-step.active .form-wizard-dot {
  border-color: #10b981;
  color: #10b981;
  box-shadow: 0 0 10px #10b98144;
}
.form-wizard-label {
  color: #64748b;
  font-size: 0.6rem;
  margin-top: 4px;
  font-weight: 600;
}
.form-wizard-step.active .form-wizard-label { color: #10b981; }
.form-wizard-step.done .form-wizard-label { color: #e2e8f0; }
.form-wizard-line {
  flex: 1;
  height: 2px;
  background: #2a2a3e;
  margin: 0 -4px;
  align-self: flex-start;
  margin-top: 14px;
}
.form-wizard-line.done { background: #10b981; }
.form-wizard-line.half {
  background: linear-gradient(to right, #10b981 50%, #2a2a3e 50%);
}`,
    htmlCode: `<div class="form-wizard"><div class="form-wizard-steps"><div class="form-wizard-step done"><div class="form-wizard-dot">✓</div><div class="form-wizard-label">Info</div></div><div class="form-wizard-line done"></div><div class="form-wizard-step active"><div class="form-wizard-dot">2</div><div class="form-wizard-label">Details</div></div><div class="form-wizard-line half"></div><div class="form-wizard-step"><div class="form-wizard-dot">3</div><div class="form-wizard-label">Review</div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'form-success-check',
    name: 'Form Success Check',
    category: 'forms',
    tags: ['forms', 'success', 'checkmark', 'animation'],
    difficulty: 'beginner',
    description: 'Animated success checkmark that appears after form submission',
    cssCode: `.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
}
.form-success-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #10b98120;
  border: 3px solid #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: success-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes success-pop {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.form-success-check {
  width: 20px;
  height: 14px;
  border-left: 3px solid #10b981;
  border-bottom: 3px solid #10b981;
  transform: rotate(-45deg);
  margin-top: -3px;
  animation: check-draw 0.4s ease 0.3s both;
}
@keyframes check-draw {
  0% { width: 0; height: 0; opacity: 0; }
  50% { width: 0; height: 14px; opacity: 1; }
  100% { width: 20px; height: 14px; opacity: 1; }
}
.form-success-text {
  color: #10b981;
  font-size: 0.95rem;
  font-weight: 700;
  animation: text-in 0.4s ease 0.6s both;
}
@keyframes text-in {
  0% { transform: translateY(8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.form-success-sub {
  color: #64748b;
  font-size: 0.75rem;
  animation: text-in 0.4s ease 0.8s both;
}`,
    htmlCode: `<div class="form-success"><div class="form-success-circle"><div class="form-success-check"></div></div><div class="form-success-text">Submitted!</div><div class="form-success-sub">We'll get back to you soon</div></div>`,
    isNew: true,
  },
  {
    id: 'form-error-shake',
    name: 'Form Error Shake',
    category: 'forms',
    tags: ['forms', 'error', 'shake', 'alert'],
    difficulty: 'beginner',
    description: 'Error alert banner that slides in with a shake animation',
    cssCode: `.form-error-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ef444418;
  border: 1px solid #ef444444;
  border-radius: 10px;
  padding: 12px 16px;
  animation: error-shake-in 0.6s ease;
}
@keyframes error-shake-in {
  0% { transform: translateX(-100%); opacity: 0; }
  40% { transform: translateX(4px); opacity: 1; }
  50% { transform: translateX(-4px); }
  60% { transform: translateX(2px); }
  70% { transform: translateX(-2px); }
  80% { transform: translateX(1px); }
  100% { transform: translateX(0); }
}
.form-error-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  flex-shrink: 0;
}
.form-error-content {
  display: flex;
  flex-direction: column;
}
.form-error-title {
  color: #ef4444;
  font-size: 0.85rem;
  font-weight: 700;
}
.form-error-desc {
  color: #94a3b8;
  font-size: 0.7rem;
  margin-top: 2px;
}`,
    htmlCode: `<div class="form-error-banner"><div class="form-error-icon">!</div><div class="form-error-content"><div class="form-error-title">Something went wrong</div><div class="form-error-desc">Please check the highlighted fields and try again</div></div></div>`,
    isNew: true,
  },
  {
    id: 'password-strength-meter',
    name: 'Password Strength Meter',
    category: 'forms',
    tags: ['forms', 'password', 'strength', 'meter'],
    difficulty: 'intermediate',
    description: 'Password input with a color-coded strength meter bar',
    cssCode: `.password-meter {
  width: 240px;
}
.password-meter-input {
  width: 100%;
  background: #0f0f1a;
  border: 2px solid #2a2a3e;
  border-radius: 8px;
  padding: 10px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}
.password-meter-input:focus { border-color: #10b981; }
.password-meter-input::placeholder { color: #64748b; }
.password-meter-bar {
  display: flex;
  gap: 4px;
  margin-top: 8px;
}
.password-meter-seg {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: #2a2a3e;
  transition: background 0.3s ease;
}
.password-meter-seg.filled.weak { background: #ef4444; }
.password-meter-seg.filled.medium { background: #f59e0b; }
.password-meter-seg.filled.strong { background: #10b981; }
.password-meter-label {
  margin-top: 6px;
  font-size: 0.7rem;
  font-weight: 600;
}
.password-meter-label.weak { color: #ef4444; }
.password-meter-label.medium { color: #f59e0b; }
.password-meter-label.strong { color: #10b981; }`,
    htmlCode: `<div class="password-meter"><input class="password-meter-input" type="password" placeholder="Enter password" /><div class="password-meter-bar"><div class="password-meter-seg filled medium"></div><div class="password-meter-seg filled medium"></div><div class="password-meter-seg filled medium"></div><div class="password-meter-seg"></div></div><div class="password-meter-label medium">Medium strength</div></div>`,
    isNew: true,
  },

  // ==================== DATA EFFECTS (10) ====================
  {
    id: 'mini-bar-chart',
    name: 'Mini Bar Chart',
    category: 'data',
    tags: ['data', 'bar', 'chart', 'mini'],
    difficulty: 'beginner',
    description: 'Compact bar chart with animated bars rising from zero',
    cssCode: `.mini-bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 100px;
  padding: 12px;
  background: #0f0f1a;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
}
.mini-bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(to top, #10b981, #10b98188);
  animation: bar-rise 0.8s ease forwards;
  transform-origin: bottom;
  transform: scaleY(0);
  position: relative;
}
@keyframes bar-rise {
  to { transform: scaleY(1); }
}
.mini-bar:nth-child(1) { height: 60%; animation-delay: 0s; }
.mini-bar:nth-child(2) { height: 85%; animation-delay: 0.1s; }
.mini-bar:nth-child(3) { height: 45%; animation-delay: 0.2s; }
.mini-bar:nth-child(4) { height: 95%; animation-delay: 0.3s; }
.mini-bar:nth-child(5) { height: 70%; animation-delay: 0.4s; }
.mini-bar:nth-child(6) { height: 50%; animation-delay: 0.5s; }
.mini-bar:nth-child(7) { height: 80%; animation-delay: 0.6s; }
.mini-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #10b981;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 6px #10b98166;
}`,
    htmlCode: `<div class="mini-bar-chart"><div class="mini-bar"></div><div class="mini-bar"></div><div class="mini-bar"></div><div class="mini-bar"></div><div class="mini-bar"></div><div class="mini-bar"></div><div class="mini-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'stat-counter-up',
    name: 'Stat Counter Up',
    category: 'data',
    tags: ['data', 'stat', 'counter', 'number'],
    difficulty: 'intermediate',
    description: 'Stat card with a large number that counts up with animation',
    cssCode: `.stat-counter-card {
  width: 180px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.stat-counter-value {
  font-size: 2.4rem;
  font-weight: 900;
  color: #10b981;
  line-height: 1;
  animation: count-glow 2s ease-in-out infinite;
}
@keyframes count-glow {
  0%, 100% { text-shadow: 0 0 0 transparent; }
  50% { text-shadow: 0 0 20px #10b98144; }
}
.stat-counter-label {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 6px;
}
.stat-counter-change {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #10b98118;
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
}
.stat-counter-bar {
  height: 3px;
  background: #2a2a3e;
  border-radius: 2px;
  margin-top: 12px;
  overflow: hidden;
}
.stat-counter-bar::after {
  content: '';
  display: block;
  height: 100%;
  width: 72%;
  background: linear-gradient(to right, #10b981, #34d399);
  border-radius: 2px;
  animation: bar-fill 1.2s ease forwards;
}
@keyframes bar-fill {
  from { width: 0; }
}`,
    htmlCode: `<div class="stat-counter-card"><div class="stat-counter-value">2,847</div><div class="stat-counter-label">Active Users</div><div class="stat-counter-change">↑ 12.5%</div><div class="stat-counter-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'comparison-bar',
    name: 'Comparison Bar',
    category: 'data',
    tags: ['data', 'comparison', 'bar', 'versus'],
    difficulty: 'intermediate',
    description: 'Side-by-side comparison bars showing two competing values',
    cssCode: `.comparison-bar {
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
}
.comparison-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.comparison-labels {
  display: flex;
  justify-content: space-between;
}
.comparison-label {
  font-size: 0.7rem;
  font-weight: 600;
}
.comparison-label.a { color: #10b981; }
.comparison-label.b { color: #3b82f6; }
.comparison-track {
  height: 8px;
  border-radius: 4px;
  background: #1a1a2e;
  display: flex;
  overflow: hidden;
}
.comparison-fill-a {
  background: linear-gradient(to right, #10b981, #34d399);
  border-radius: 4px 0 0 4px;
  animation: fill-a 1s ease forwards;
  width: 0;
}
@keyframes fill-a {
  to { width: 68%; }
}
.comparison-fill-b {
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  border-radius: 0 4px 4px 0;
  animation: fill-b 1s ease forwards;
  width: 0;
}
@keyframes fill-b {
  to { width: 32%; }
}
.comparison-vs {
  text-align: center;
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}`,
    htmlCode: `<div class="comparison-bar"><div class="comparison-row"><div class="comparison-labels"><span class="comparison-label a">Team A · 68%</span><span class="comparison-label b">Team B · 32%</span></div><div class="comparison-track"><div class="comparison-fill-a"></div><div class="comparison-fill-b"></div></div></div><div class="comparison-vs">VS</div></div>`,
    isNew: true,
  },
  {
    id: 'data-table-row-hover',
    name: 'Data Table Row Hover',
    category: 'data',
    tags: ['data', 'table', 'row', 'hover'],
    difficulty: 'beginner',
    description: 'Data table with sleek row hover highlight and indicator bar',
    cssCode: `.data-table {
  width: 280px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  overflow: hidden;
}
.data-table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  padding: 10px 14px;
  background: #1a1a2e;
  border-bottom: 1px solid #2a2a3e;
}
.data-table-th {
  color: #64748b;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.data-table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  padding: 10px 14px;
  border-bottom: 1px solid #2a2a3e11;
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;
}
.data-table-row:hover {
  background: #10b98108;
}
.data-table-row:hover::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #10b981;
  border-radius: 0 2px 2px 0;
}
.data-table-cell {
  color: #e2e8f0;
  font-size: 0.8rem;
}
.data-table-cell.muted { color: #64748b; }
.data-table-cell.accent { color: #10b981; font-weight: 600; }`,
    htmlCode: `<div class="data-table"><div class="data-table-header"><span class="data-table-th">Name</span><span class="data-table-th">Status</span><span class="data-table-th">Value</span></div><div class="data-table-row"><span class="data-table-cell">Alpha</span><span class="data-table-cell accent">Active</span><span class="data-table-cell muted">$1.2K</span></div><div class="data-table-row"><span class="data-table-cell">Beta</span><span class="data-table-cell accent">Active</span><span class="data-table-cell muted">$890</span></div><div class="data-table-row"><span class="data-table-cell">Gamma</span><span class="data-table-cell muted">Idle</span><span class="data-table-cell muted">$340</span></div></div>`,
    isNew: true,
  },
  {
    id: 'donut-chart-css',
    name: 'Donut Chart CSS',
    category: 'data',
    tags: ['data', 'donut', 'chart', 'circle'],
    difficulty: 'advanced',
    description: 'Pure CSS donut chart using conic-gradient with animated segments',
    cssCode: `.donut-chart {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #10b981 0deg 162deg,
    #3b82f6 162deg 252deg,
    #8b5cf6 252deg 320deg,
    #2a2a3e 320deg 360deg
  );
  position: relative;
  animation: donut-spin-in 1s ease;
}
@keyframes donut-spin-in {
  0% { transform: rotate(-90deg); opacity: 0; }
  100% { transform: rotate(0deg); opacity: 1; }
}
.donut-chart::after {
  content: '';
  position: absolute;
  inset: 28px;
  border-radius: 50%;
  background: #0f0f1a;
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
.donut-value {
  color: #e2e8f0;
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1;
}
.donut-label {
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 600;
  margin-top: 2px;
}
.donut-legend {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}
.donut-legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.65rem;
  color: #94a3b8;
}
.donut-legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
}`,
    htmlCode: `<div style="display:flex;flex-direction:column;align-items:center"><div class="donut-chart"><div class="donut-center"><div class="donut-value">45%</div><div class="donut-label">Complete</div></div></div><div class="donut-legend"><div class="donut-legend-item"><div class="donut-legend-dot" style="background:#10b981"></div>Dev</div><div class="donut-legend-item"><div class="donut-legend-dot" style="background:#3b82f6"></div>Design</div><div class="donut-legend-item"><div class="donut-legend-dot" style="background:#8b5cf6"></div>QA</div></div></div>`,
    isNew: true,
  },
  {
    id: 'progress-ring-data',
    name: 'Progress Ring Data',
    category: 'data',
    tags: ['data', 'progress', 'ring', 'circle'],
    difficulty: 'intermediate',
    description: 'Circular progress ring with animated stroke for data visualization',
    cssCode: `.progress-ring-data {
  position: relative;
  width: 100px;
  height: 100px;
}
.progress-ring-data svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.progress-ring-bg {
  fill: none;
  stroke: #2a2a3e;
  stroke-width: 6;
}
.progress-ring-fill {
  fill: none;
  stroke: #10b981;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 251;
  stroke-dashoffset: 251;
  animation: ring-draw 1.5s ease forwards;
  filter: drop-shadow(0 0 4px #10b98144);
}
@keyframes ring-draw {
  to { stroke-dashoffset: 75; }
}
.progress-ring-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.progress-ring-value {
  color: #e2e8f0;
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
}
.progress-ring-unit {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 600;
  margin-top: 2px;
}`,
    htmlCode: `<div class="progress-ring-data"><svg viewBox="0 0 100 100"><circle class="progress-ring-bg" cx="50" cy="50" r="40"/><circle class="progress-ring-fill" cx="50" cy="50" r="40"/></svg><div class="progress-ring-center"><div class="progress-ring-value">70%</div><div class="progress-ring-unit">Storage</div></div></div>`,
    isNew: true,
  },
  {
    id: 'heat-map-cell',
    name: 'Heat Map Cell',
    category: 'data',
    tags: ['data', 'heatmap', 'cell', 'grid'],
    difficulty: 'intermediate',
    description: 'Grid of heat map cells with color intensity based on value',
    cssCode: `.heatmap-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
  padding: 12px;
  background: #0f0f1a;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
}
.heatmap-cell {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}
.heatmap-cell:hover {
  transform: scale(1.3);
  z-index: 1;
  box-shadow: 0 0 8px rgba(16,185,129,0.3);
}
.heatmap-cell.l0 { background: #1a1a2e; }
.heatmap-cell.l1 { background: #10b98120; }
.heatmap-cell.l2 { background: #10b98144; }
.heatmap-cell.l3 { background: #10b98177; }
.heatmap-cell.l4 { background: #10b981aa; }
.heatmap-cell.l5 { background: #10b981; }
.heatmap-cell.l5 { animation: cell-pulse 2s ease-in-out infinite; }
@keyframes cell-pulse {
  0%, 100% { box-shadow: 0 0 0 0 transparent; }
  50% { box-shadow: 0 0 6px #10b98144; }
}
.heatmap-label {
  color: #64748b;
  font-size: 0.6rem;
  text-align: center;
  padding-top: 8px;
  grid-column: span 7;
}`,
    htmlCode: `<div class="heatmap-grid"><div class="heatmap-cell l1"></div><div class="heatmap-cell l3"></div><div class="heatmap-cell l5"></div><div class="heatmap-cell l2"></div><div class="heatmap-cell l4"></div><div class="heatmap-cell l0"></div><div class="heatmap-cell l1"></div><div class="heatmap-cell l2"></div><div class="heatmap-cell l4"></div><div class="heatmap-cell l5"></div><div class="heatmap-cell l3"></div><div class="heatmap-cell l1"></div><div class="heatmap-cell l0"></div><div class="heatmap-cell l2"></div><div class="heatmap-cell l0"></div><div class="heatmap-cell l1"></div><div class="heatmap-cell l3"></div><div class="heatmap-cell l4"></div><div class="heatmap-cell l2"></div><div class="heatmap-cell l5"></div><div class="heatmap-cell l3"></div><div class="heatmap-label">Activity this month</div></div>`,
    isNew: true,
  },
  {
    id: 'sparkline',
    name: 'Sparkline',
    category: 'data',
    tags: ['data', 'sparkline', 'line', 'mini'],
    difficulty: 'intermediate',
    description: 'Mini sparkline chart rendered with SVG and animated line drawing',
    cssCode: `.sparkline-card {
  width: 200px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 14px;
}
.sparkline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.sparkline-title {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 600;
}
.sparkline-value {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 800;
}
.sparkline-svg {
  width: 100%;
  height: 36px;
  overflow: visible;
}
.sparkline-path {
  fill: none;
  stroke: #10b981;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: spark-draw 1.5s ease forwards;
}
@keyframes spark-draw {
  to { stroke-dashoffset: 0; }
}
.sparkline-area {
  fill: url(#sparkGrad);
  opacity: 0;
  animation: spark-fade 0.5s ease 1.2s forwards;
}
@keyframes spark-fade {
  to { opacity: 1; }
}
.sparkline-change {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 6px;
}`,
    htmlCode: `<div class="sparkline-card"><div class="sparkline-header"><span class="sparkline-title">Revenue</span><span class="sparkline-value">$4.2K</span></div><svg class="sparkline-svg" viewBox="0 0 170 36"><defs><linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/><stop offset="100%" stop-color="#10b981" stop-opacity="0"/></linearGradient></defs><path class="sparkline-area" d="M0 28 L24 22 L48 26 L72 14 L96 18 L120 8 L144 12 L170 4 L170 36 L0 36Z"/><path class="sparkline-path" d="M0 28 L24 22 L48 26 L72 14 L96 18 L120 8 L144 12 L170 4"/></svg><div class="sparkline-change">↑ 8.3% vs last week</div></div>`,
    isNew: true,
  },
  {
    id: 'ranking-number',
    name: 'Ranking Number',
    category: 'data',
    tags: ['data', 'ranking', 'number', 'leaderboard'],
    difficulty: 'beginner',
    description: 'Leaderboard ranking list with numbered positions and medals for top 3',
    cssCode: `.ranking-list {
  width: 220px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  overflow: hidden;
}
.ranking-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid #2a2a3e22;
  transition: background 0.2s ease;
}
.ranking-item:hover { background: #10b98108; }
.ranking-item:last-child { border-bottom: none; }
.ranking-num {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  background: #1a1a2e;
  color: #64748b;
  flex-shrink: 0;
}
.ranking-item:nth-child(1) .ranking-num { background: #fbbf24; color: #0a0a1a; }
.ranking-item:nth-child(2) .ranking-num { background: #94a3b8; color: #0a0a1a; }
.ranking-item:nth-child(3) .ranking-num { background: #d97706; color: #0a0a1a; }
.ranking-name {
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 600;
  flex: 1;
}
.ranking-score {
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 700;
}`,
    htmlCode: `<div class="ranking-list"><div class="ranking-item"><div class="ranking-num">1</div><div class="ranking-name">Alice</div><div class="ranking-score">2,450</div></div><div class="ranking-item"><div class="ranking-num">2</div><div class="ranking-name">Bob</div><div class="ranking-score">2,180</div></div><div class="ranking-item"><div class="ranking-num">3</div><div class="ranking-name">Carol</div><div class="ranking-score">1,920</div></div><div class="ranking-item"><div class="ranking-num">4</div><div class="ranking-name">Dan</div><div class="ranking-score">1,650</div></div></div>`,
    isNew: true,
  },
  {
    id: 'metric-card',
    name: 'Metric Card',
    category: 'data',
    tags: ['data', 'metric', 'card', 'dashboard'],
    difficulty: 'beginner',
    description: 'Dashboard metric card with icon, value, and trend indicator',
    cssCode: `.metric-card {
  width: 200px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  padding: 18px;
  transition: border-color 0.3s ease;
}
.metric-card:hover { border-color: #10b98144; }
.metric-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.metric-card-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #10b98118;
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
.metric-card-trend {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}
.metric-card-trend.up {
  background: #10b98118;
  color: #10b981;
}
.metric-card-trend.down {
  background: #ef444418;
  color: #ef4444;
}
.metric-card-value {
  color: #e2e8f0;
  font-size: 1.6rem;
  font-weight: 800;
  margin-top: 10px;
  line-height: 1;
}
.metric-card-label {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 4px;
}
.metric-card-spark {
  height: 24px;
  margin-top: 10px;
  background: linear-gradient(to right, #10b98122, #10b98108);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.metric-card-spark::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, transparent, #10b98144);
  animation: spark-shimmer 2s ease-in-out infinite;
}
@keyframes spark-shimmer {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="metric-card"><div class="metric-card-top"><div class="metric-card-icon">📊</div><div class="metric-card-trend up">↑ 12%</div></div><div class="metric-card-value">8,942</div><div class="metric-card-label">Total Views</div><div class="metric-card-spark"></div></div>`,
    isNew: true,
  },

  // ==================== SLIDERS EFFECTS (10) ====================
  {
    id: 'range-custom-thumb',
    name: 'Range Custom Thumb',
    category: 'sliders',
    tags: ['slider', 'range', 'thumb', 'custom'],
    difficulty: 'intermediate',
    description: 'Custom styled range slider with emerald thumb and track',
    cssCode: `.range-custom {
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.range-custom input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, #10b981 45%, #2a2a3e 45%);
  outline: none;
}
.range-custom input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  border: 3px solid #0f0f1a;
  cursor: pointer;
  box-shadow: 0 0 8px #10b98166;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.range-custom input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 14px #10b98188;
}
.range-custom input[type=range]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  border: 3px solid #0f0f1a;
  cursor: pointer;
  box-shadow: 0 0 8px #10b98166;
}
.range-custom-label {
  display: flex;
  justify-content: space-between;
  color: #64748b;
  font-size: 0.7rem;
}
.range-custom-value {
  color: #10b981;
  font-weight: 700;
  font-size: 0.85rem;
}`,
    htmlCode: `<div class="range-custom"><div class="range-custom-value">45</div><input type="range" min="0" max="100" value="45" /><div class="range-custom-label"><span>0</span><span>100</span></div></div>`,
    isNew: true,
  },
  {
    id: 'toggle-ios-slider',
    name: 'Toggle iOS Slider',
    category: 'sliders',
    tags: ['slider', 'toggle', 'ios', 'switch'],
    difficulty: 'beginner',
    description: 'iOS-style toggle switch with smooth sliding animation',
    cssCode: `.toggle-ios {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.toggle-ios-track {
  width: 48px;
  height: 28px;
  border-radius: 14px;
  background: #2a2a3e;
  position: relative;
  transition: background 0.3s ease;
}
.toggle-ios.on .toggle-ios-track {
  background: #10b981;
}
.toggle-ios-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
}
.toggle-ios.on .toggle-ios-thumb {
  transform: translateX(20px);
}
.toggle-ios-label {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 500;
  transition: color 0.3s ease;
}
.toggle-ios.on .toggle-ios-label {
  color: #10b981;
  font-weight: 600;
}`,
    htmlCode: `<div style="display:flex;flex-direction:column;gap:14px"><div class="toggle-ios on"><div class="toggle-ios-track"><div class="toggle-ios-thumb"></div></div><span class="toggle-ios-label">Wi-Fi</span></div><div class="toggle-ios"><div class="toggle-ios-track"><div class="toggle-ios-thumb"></div></div><span class="toggle-ios-label">Bluetooth</span></div></div>`,
    isNew: true,
  },
  {
    id: 'volume-slider',
    name: 'Volume Slider',
    category: 'sliders',
    tags: ['slider', 'volume', 'audio', 'control'],
    difficulty: 'intermediate',
    description: 'Volume control slider with speaker icon and level indicator',
    cssCode: `.volume-slider {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 10px 16px;
  width: 240px;
}
.volume-icon {
  color: #10b981;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.volume-track {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: #2a2a3e;
  position: relative;
  overflow: hidden;
}
.volume-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 65%;
  background: linear-gradient(to right, #10b981, #34d399);
  border-radius: 3px;
  animation: vol-pulse 2s ease-in-out infinite;
}
@keyframes vol-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}
.volume-thumb {
  position: absolute;
  top: 50%;
  left: 65%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10b981;
  border: 2px solid #0f0f1a;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 6px #10b98144;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.volume-thumb:hover { transform: translate(-50%, -50%) scale(1.2); }
.volume-value {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 28px;
  text-align: right;
}`,
    htmlCode: `<div class="volume-slider"><span class="volume-icon">🔊</span><div class="volume-track"><div class="volume-fill"></div><div class="volume-thumb"></div></div><span class="volume-value">65%</span></div>`,
    isNew: true,
  },
  {
    id: 'brightness-slider',
    name: 'Brightness Slider',
    category: 'sliders',
    tags: ['slider', 'brightness', 'sun', 'control'],
    difficulty: 'intermediate',
    description: 'Brightness control slider with sun icon and glow effect',
    cssCode: `.brightness-slider {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 10px 16px;
  width: 240px;
}
.brightness-icon {
  font-size: 1.2rem;
  transition: all 0.3s ease;
  animation: sun-glow 2s ease-in-out infinite;
}
@keyframes sun-glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}
.brightness-track {
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: #2a2a3e;
  position: relative;
  overflow: hidden;
}
.brightness-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 75%;
  background: linear-gradient(to right, #1a1a2e, #fbbf24);
  border-radius: 4px;
  transition: width 0.3s ease;
}
.brightness-thumb {
  position: absolute;
  top: 50%;
  left: 75%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fbbf24;
  border: 2px solid #0f0f1a;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 0 10px #fbbf2444;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.brightness-thumb:hover {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: 0 0 16px #fbbf2466;
}
.brightness-value {
  color: #fbbf24;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 32px;
  text-align: right;
}`,
    htmlCode: `<div class="brightness-slider"><span class="brightness-icon">☀️</span><div class="brightness-track"><div class="brightness-fill"></div><div class="brightness-thumb"></div></div><span class="brightness-value">75%</span></div>`,
    isNew: true,
  },
  {
    id: 'color-hue-slider',
    name: 'Color Hue Slider',
    category: 'sliders',
    tags: ['slider', 'color', 'hue', 'rainbow'],
    difficulty: 'intermediate',
    description: 'Color hue slider with a rainbow gradient track and color preview',
    cssCode: `.hue-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 240px;
}
.hue-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: hsl(160, 80%, 50%);
  border: 3px solid #1a1a2e;
  box-shadow: 0 0 16px hsla(160, 80%, 50%, 0.4);
  animation: preview-glow 2s ease-in-out infinite;
}
@keyframes preview-glow {
  0%, 100% { box-shadow: 0 0 16px hsla(160, 80%, 50%, 0.4); }
  50% { box-shadow: 0 0 24px hsla(160, 80%, 50%, 0.6); }
}
.hue-track {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(to right,
    hsl(0,80%,50%), hsl(60,80%,50%), hsl(120,80%,50%),
    hsl(180,80%,50%), hsl(240,80%,50%), hsl(300,80%,50%), hsl(360,80%,50%));
  position: relative;
}
.hue-thumb {
  position: absolute;
  top: 50%;
  left: 44%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #0a0a1a;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  transition: transform 0.2s ease;
}
.hue-thumb:hover { transform: translate(-50%, -50%) scale(1.2); }
.hue-value {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="hue-slider"><div class="hue-preview"></div><div class="hue-track"><div class="hue-thumb"></div></div><div class="hue-value">Hue: 160°</div></div>`,
    isNew: true,
  },
  {
    id: 'speed-slider',
    name: 'Speed Slider',
    category: 'sliders',
    tags: ['slider', 'speed', 'gauge', 'control'],
    difficulty: 'intermediate',
    description: 'Speed control slider with velocity indicator and motion lines',
    cssCode: `.speed-slider {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 240px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 14px;
}
.speed-slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.speed-slider-label {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 600;
}
.speed-slider-value {
  color: #10b981;
  font-size: 1rem;
  font-weight: 800;
}
.speed-slider-track {
  height: 8px;
  border-radius: 4px;
  background: #2a2a3e;
  position: relative;
  overflow: hidden;
}
.speed-slider-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 60%;
  background: linear-gradient(to right, #10b981, #f59e0b);
  border-radius: 4px;
  transition: width 0.3s ease;
}
.speed-slider-thumb {
  position: absolute;
  top: 50%;
  left: 60%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f59e0b;
  border: 2px solid #0f0f1a;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 0 8px #f59e0b44;
}
.speed-marks {
  display: flex;
  justify-content: space-between;
}
.speed-mark {
  color: #64748b;
  font-size: 0.6rem;
}
.speed-lines {
  display: flex;
  gap: 3px;
  justify-content: flex-end;
  margin-top: 4px;
}
.speed-line {
  height: 12px;
  width: 2px;
  background: #10b98144;
  border-radius: 1px;
  animation: speed-streak 0.6s ease-in-out infinite;
}
.speed-line:nth-child(2) { animation-delay: 0.15s; height: 8px; }
.speed-line:nth-child(3) { animation-delay: 0.3s; height: 6px; }
@keyframes speed-streak {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="speed-slider"><div class="speed-slider-header"><span class="speed-slider-label">Playback Speed</span><span class="speed-slider-value">1.5x</span></div><div class="speed-slider-track"><div class="speed-slider-fill"></div><div class="speed-slider-thumb"></div></div><div class="speed-marks"><span class="speed-mark">0.5x</span><span class="speed-mark">1x</span><span class="speed-mark">2x</span><span class="speed-mark">3x</span></div><div class="speed-lines"><div class="speed-line"></div><div class="speed-line"></div><div class="speed-line"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'temperature-slider',
    name: 'Temperature Slider',
    category: 'sliders',
    tags: ['slider', 'temperature', 'thermometer', 'gradient'],
    difficulty: 'intermediate',
    description: 'Temperature slider with a cold-to-hot gradient track and thermometer icon',
    cssCode: `.temp-slider {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 12px 16px;
  width: 240px;
}
.temp-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}
.temp-track {
  flex: 1;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(to right, #3b82f6, #10b981, #f59e0b, #ef4444);
  position: relative;
}
.temp-thumb {
  position: absolute;
  top: 50%;
  left: 55%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #0a0a1a;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 1px 6px rgba(0,0,0,0.4);
  transition: transform 0.2s ease;
}
.temp-thumb:hover { transform: translate(-50%, -50%) scale(1.2); }
.temp-value {
  font-size: 0.85rem;
  font-weight: 800;
  color: #f59e0b;
  min-width: 36px;
  text-align: right;
}
.temp-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.temp-mark {
  color: #64748b;
  font-size: 0.55rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="temp-slider"><span class="temp-icon">🌡️</span><div style="flex:1;display:flex;flex-direction:column"><div class="temp-track"><div class="temp-thumb"></div></div><div class="temp-marks"><span class="temp-mark">0°C</span><span class="temp-mark">50°C</span><span class="temp-mark">100°C</span></div></div><span class="temp-value">55°</span></div>`,
    isNew: true,
  },
  {
    id: 'double-range-slider',
    name: 'Double Range Slider',
    category: 'sliders',
    tags: ['slider', 'range', 'double', 'min-max'],
    difficulty: 'advanced',
    description: 'Dual-thumb range slider for selecting a min and max value range',
    cssCode: `.double-range {
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #0f0f1a;
  border: 1px solid #2a2a3e;
  border-radius: 10px;
  padding: 14px;
}
.double-range-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.double-range-label {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 600;
}
.double-range-values {
  display: flex;
  gap: 6px;
}
.double-range-val {
  background: #1a1a2e;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid #2a2a3e;
}
.double-range-track {
  height: 6px;
  border-radius: 3px;
  background: #2a2a3e;
  position: relative;
}
.double-range-fill {
  position: absolute;
  top: 0;
  height: 100%;
  background: #10b981;
  border-radius: 3px;
  left: 25%;
  width: 45%;
}
.double-range-thumb {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10b981;
  border: 2px solid #0f0f1a;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 0 6px #10b98144;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.double-range-thumb:hover {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: 0 0 12px #10b98166;
}
.double-range-ticks {
  display: flex;
  justify-content: space-between;
}
.double-range-tick {
  color: #64748b;
  font-size: 0.55rem;
}`,
    htmlCode: `<div class="double-range"><div class="double-range-header"><span class="double-range-label">Price Range</span><div class="double-range-values"><span class="double-range-val">$25</span><span class="double-range-val">$70</span></div></div><div class="double-range-track"><div class="double-range-fill"></div><div class="double-range-thumb" style="left:25%"></div><div class="double-range-thumb" style="left:70%"></div></div><div class="double-range-ticks"><span class="double-range-tick">$0</span><span class="double-range-tick">$50</span><span class="double-range-tick">$100</span></div></div>`,
    isNew: true,
  },
  {
    id: 'vertical-slider',
    name: 'Vertical Slider',
    category: 'sliders',
    tags: ['slider', 'vertical', 'range', 'orientation'],
    difficulty: 'intermediate',
    description: 'Vertical-oriented slider with a fill track and thumb control',
    cssCode: `.vertical-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 160px;
}
.vertical-slider-label {
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 600;
}
.vertical-slider-track {
  flex: 1;
  width: 8px;
  border-radius: 4px;
  background: #2a2a3e;
  position: relative;
}
.vertical-slider-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, #10b981, #34d399);
  border-radius: 4px;
  animation: vert-fill 1s ease forwards;
}
@keyframes vert-fill {
  from { height: 0; }
}
.vertical-slider-thumb {
  position: absolute;
  left: 50%;
  bottom: 60%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #10b981;
  border: 3px solid #0f0f1a;
  transform: translate(-50%, 50%);
  cursor: pointer;
  box-shadow: 0 0 8px #10b98144;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.vertical-slider-thumb:hover {
  transform: translate(-50%, 50%) scale(1.2);
  box-shadow: 0 0 14px #10b98166;
}
.vertical-slider-value {
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 800;
}`,
    htmlCode: `<div class="vertical-slider"><span class="vertical-slider-label">Level</span><div class="vertical-slider-track"><div class="vertical-slider-fill"></div><div class="vertical-slider-thumb"></div></div><span class="vertical-slider-value">60</span></div>`,
    isNew: true,
  },
  {
    id: 'slider-tooltip-value',
    name: 'Slider Tooltip Value',
    category: 'sliders',
    tags: ['slider', 'tooltip', 'value', 'popover'],
    difficulty: 'intermediate',
    description: 'Range slider with a floating tooltip that shows the current value',
    cssCode: `.slider-tooltip {
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  padding-top: 24px;
}
.slider-tooltip-pop {
  position: absolute;
  top: 0;
  left: 55%;
  transform: translateX(-50%);
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
  animation: tooltip-bob 1.5s ease-in-out infinite;
}
@keyframes tooltip-bob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-3px); }
}
.slider-tooltip-pop::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #10b981;
}
.slider-tooltip-track {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #2a2a3e;
  position: relative;
}
.slider-tooltip-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 55%;
  background: linear-gradient(to right, #10b981, #34d399);
  border-radius: 4px;
}
.slider-tooltip-thumb {
  position: absolute;
  top: 50%;
  left: 55%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  border: 3px solid #0f0f1a;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 0 8px #10b98144;
  transition: transform 0.2s ease;
}
.slider-tooltip-thumb:hover { transform: translate(-50%, -50%) scale(1.2); }
.slider-tooltip-marks {
  display: flex;
  justify-content: space-between;
}
.slider-tooltip-mark {
  color: #64748b;
  font-size: 0.6rem;
}`,
    htmlCode: `<div class="slider-tooltip"><div class="slider-tooltip-pop">55</div><div class="slider-tooltip-track"><div class="slider-tooltip-fill"></div><div class="slider-tooltip-thumb"></div></div><div class="slider-tooltip-marks"><span class="slider-tooltip-mark">0</span><span class="slider-tooltip-mark">25</span><span class="slider-tooltip-mark">50</span><span class="slider-tooltip-mark">75</span><span class="slider-tooltip-mark">100</span></div></div>`,
    isNew: true,
  },
];
