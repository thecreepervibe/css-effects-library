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

export const effectsNewBatch19: CSSEffect[] = [
  // ==================== SOCIAL (20) ====================
  {
    id: 'social-share-button',
    name: 'Share Button',
    category: 'social',
    tags: ['social', 'share', 'button', 'spread', 'icon'],
    difficulty: 'beginner',
    description: 'A share button with expanding ripple and arrow icon animation on click',
    cssCode: `.social-share-button {
  display: inline-flex; align-items: center; gap: 6px;
  background: #10b981; color: #fff;
  padding: 8px 18px; border-radius: 8px;
  font-size: 0.75rem; font-weight: 700;
  cursor: pointer; position: relative; overflow: hidden;
  transition: transform 0.2s, box-shadow 0.3s;
}
.social-share-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px #10b98155;
}
.social-share-button::after {
  content: ''; position: absolute; inset: 0;
  background: #fff3; border-radius: 8px;
  transform: scale(0); opacity: 0;
  transition: transform 0.4s, opacity 0.4s;
}
.social-share-button:active::after {
  transform: scale(2.5); opacity: 0;
}`,
    htmlCode: `<div class="social-share-button">↗ Share</div>`,
    isNew: true,
  },
  {
    id: 'social-like-heart',
    name: 'Like Heart',
    category: 'social',
    tags: ['social', 'like', 'heart', 'favorite', 'animation'],
    difficulty: 'intermediate',
    description: 'A heart icon that fills with color and pulses when liked',
    cssCode: `.social-like-heart {
  display: inline-flex; align-items: center; gap: 6px;
  cursor: pointer; color: #64748b;
  font-size: 0.7rem; font-weight: 600;
  transition: color 0.3s;
}
.social-like-heart-icon {
  width: 24px; height: 24px;
  background: #1a1a2e; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; transition: all 0.3s;
}
.social-like-heart:hover { color: #ef4444; }
.social-like-heart:hover .social-like-heart-icon {
  background: #ef4444; color: #fff;
  animation: heart-pop 0.4s ease;
}
@keyframes heart-pop {
  0% { transform: scale(1); }
  40% { transform: scale(1.35); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="social-like-heart"><span class="social-like-heart-icon">♥</span>2.4k</div>`,
    isNew: true,
  },
  {
    id: 'social-retweet',
    name: 'Retweet',
    category: 'social',
    tags: ['social', 'retweet', 'repost', 'share', 'icon'],
    difficulty: 'intermediate',
    description: 'A retweet button with rotating arrows animation on hover',
    cssCode: `.social-retweet {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 14px; border-radius: 20px;
  background: #10b98118; color: #10b981;
  font-size: 0.7rem; font-weight: 700;
  cursor: pointer; transition: all 0.3s;
}
.social-retweet:hover {
  background: #10b98133;
}
.social-retweet-icon {
  display: inline-block; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
}
.social-retweet:hover .social-retweet-icon {
  transform: rotate(360deg);
}`,
    htmlCode: `<div class="social-retweet"><span class="social-retweet-icon">⟳</span>Repost</div>`,
    isNew: true,
  },
  {
    id: 'social-follow-button',
    name: 'Follow Button',
    category: 'social',
    tags: ['social', 'follow', 'subscribe', 'button', 'toggle'],
    difficulty: 'intermediate',
    description: 'A follow button that transforms to following state with checkmark on hover',
    cssCode: `.social-follow-button {
  padding: 8px 20px; border-radius: 20px;
  font-size: 0.75rem; font-weight: 700;
  cursor: pointer; transition: all 0.3s;
  background: #10b981; color: #fff;
}
.social-follow-button:hover {
  background: #059669;
  box-shadow: 0 4px 12px #10b98144;
}
.social-follow-button.following {
  background: #1a1a2e; color: #10b981;
  border: 1px solid #10b98144;
}
.social-follow-button.following:hover {
  background: #ef444422; color: #ef4444;
  border-color: #ef4444;
}`,
    htmlCode: `<div class="social-follow-button">Follow</div>`,
    isNew: true,
  },
  {
    id: 'social-icon-hover',
    name: 'Social Icon',
    category: 'social',
    tags: ['social', 'icon', 'hover', 'brand', 'circle'],
    difficulty: 'beginner',
    description: 'A social media icon with hover lift and glow effect',
    cssCode: `.social-icon-hover {
  width: 36px; height: 36px;
  border-radius: 50%; background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  color: #64748b; font-size: 0.7rem; font-weight: 700;
  cursor: pointer; transition: all 0.3s;
  border: 1px solid #ffffff11;
}
.social-icon-hover:hover {
  background: #10b981; color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px #10b98144;
}`,
    htmlCode: `<div class="social-icon-hover">𝕏</div>`,
    isNew: true,
  },
  {
    id: 'social-share-counter',
    name: 'Share Counter',
    category: 'social',
    tags: ['social', 'counter', 'share', 'number', 'animate'],
    difficulty: 'intermediate',
    description: 'A share counter that animates the number counting up on load',
    cssCode: `.social-share-counter {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 14px; background: #1a1a2e;
  border-radius: 8px; border: 1px solid #10b98133;
}
.social-share-counter-num {
  color: #10b981; font-size: 0.9rem; font-weight: 800;
  animation: count-bump 0.6s ease-out;
}
.social-share-counter-label {
  color: #64748b; font-size: 0.65rem; font-weight: 600;
}
.social-share-counter-icon {
  color: #10b981; font-size: 0.8rem;
}
@keyframes count-bump {
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="social-share-counter"><span class="social-share-counter-icon">↗</span><span class="social-share-counter-num">1.2k</span><span class="social-share-counter-label">shares</span></div>`,
    isNew: true,
  },
  {
    id: 'social-reaction-emoji',
    name: 'Reaction Emoji',
    category: 'social',
    tags: ['social', 'reaction', 'emoji', 'like', 'animated'],
    difficulty: 'advanced',
    description: 'Animated emoji reaction that bounces and scales on selection',
    cssCode: `.social-reaction-emoji {
  display: flex; gap: 4px;
}
.social-reaction-emoji-item {
  width: 32px; height: 32px;
  border-radius: 50%; background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; cursor: pointer;
  transition: transform 0.2s, background 0.3s;
  border: 2px solid transparent;
}
.social-reaction-emoji-item:hover {
  transform: scale(1.3) translateY(-4px);
  background: #10b98122; border-color: #10b981;
}
.social-reaction-emoji-item.active {
  animation: emoji-bounce 0.5s ease;
  background: #10b98133; border-color: #10b981;
}
@keyframes emoji-bounce {
  0% { transform: scale(1); }
  30% { transform: scale(1.5) translateY(-8px); }
  50% { transform: scale(0.9) translateY(-2px); }
  70% { transform: scale(1.1) translateY(-4px); }
  100% { transform: scale(1.15) translateY(-4px); }
}`,
    htmlCode: `<div class="social-reaction-emoji"><span class="social-reaction-emoji-item">👍</span><span class="social-reaction-emoji-item">❤️</span><span class="social-reaction-emoji-item">😂</span><span class="social-reaction-emoji-item">😮</span></div>`,
    isNew: true,
  },
  {
    id: 'social-comment-bubble',
    name: 'Comment Bubble',
    category: 'social',
    tags: ['social', 'comment', 'bubble', 'chat', 'speech'],
    difficulty: 'beginner',
    description: 'A comment bubble with tail pointer and hover highlight effect',
    cssCode: `.social-comment-bubble {
  background: #1a1a2e; padding: 10px 14px;
  border-radius: 10px; border: 1px solid #10b98122;
  color: #e2e8f0; font-size: 0.7rem;
  position: relative; max-width: 180px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.social-comment-bubble::after {
  content: ''; position: absolute;
  bottom: -6px; left: 16px;
  width: 12px; height: 12px;
  background: #1a1a2e;
  border-right: 1px solid #10b98122;
  border-bottom: 1px solid #10b98122;
  transform: rotate(45deg);
}
.social-comment-bubble:hover {
  border-color: #10b98155;
  box-shadow: 0 4px 12px #10b98122;
}`,
    htmlCode: `<div class="social-comment-bubble">Great article! Really enjoyed reading this.</div>`,
    isNew: true,
  },
  {
    id: 'social-share-dropdown',
    name: 'Share Dropdown',
    category: 'social',
    tags: ['social', 'dropdown', 'share', 'menu', 'overlay'],
    difficulty: 'advanced',
    description: 'A share button that reveals a dropdown of platform options on hover',
    cssCode: `.social-share-dropdown {
  position: relative; display: inline-block;
}
.social-share-dropdown-btn {
  background: #10b981; color: #fff;
  padding: 8px 16px; border-radius: 8px;
  font-size: 0.7rem; font-weight: 700;
  cursor: pointer; transition: background 0.3s;
}
.social-share-dropdown-btn:hover { background: #059669; }
.social-share-dropdown-menu {
  position: absolute; top: 110%; left: 0;
  background: #1a1a2e; border-radius: 8px;
  border: 1px solid #10b98133;
  padding: 6px; min-width: 120px;
  opacity: 0; visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.3s;
}
.social-share-dropdown:hover .social-share-dropdown-menu {
  opacity: 1; visibility: visible;
  transform: translateY(0);
}
.social-share-dropdown-item {
  padding: 6px 10px; color: #e2e8f0;
  font-size: 0.65rem; border-radius: 4px;
  transition: background 0.2s;
}
.social-share-dropdown-item:hover { background: #10b98122; }`,
    htmlCode: `<div class="social-share-dropdown"><div class="social-share-dropdown-btn">Share ▾</div><div class="social-share-dropdown-menu"><div class="social-share-dropdown-item">Twitter / X</div><div class="social-share-dropdown-item">Facebook</div><div class="social-share-dropdown-item">LinkedIn</div><div class="social-share-dropdown-item">Copy Link</div></div></div>`,
    isNew: true,
  },
  {
    id: 'social-proof-badge',
    name: 'Social Proof',
    category: 'social',
    tags: ['social', 'proof', 'badge', 'users', 'trust'],
    difficulty: 'intermediate',
    description: 'A social proof indicator showing stacked user avatars and count',
    cssCode: `.social-proof-badge {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 12px; background: #1a1a2e;
  border-radius: 20px;
}
.social-proof-badge-avatars {
  display: flex;
}
.social-proof-badge-avatar {
  width: 22px; height: 22px; border-radius: 50%;
  border: 2px solid #1a1a2e; margin-left: -6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.45rem; color: #fff; font-weight: 700;
}
.social-proof-badge-avatar:nth-child(1) { background: #10b981; margin-left: 0; }
.social-proof-badge-avatar:nth-child(2) { background: #3b82f6; }
.social-proof-badge-avatar:nth-child(3) { background: #8b5cf6; }
.social-proof-badge-text {
  color: #e2e8f0; font-size: 0.65rem; font-weight: 600;
}
.social-proof-badge-text span { color: #10b981; font-weight: 800; }`,
    htmlCode: `<div class="social-proof-badge"><div class="social-proof-badge-avatars"><div class="social-proof-badge-avatar">A</div><div class="social-proof-badge-avatar">B</div><div class="social-proof-badge-avatar">C</div></div><div class="social-proof-badge-text"><span>2.4k</span> users joined</div></div>`,
    isNew: true,
  },
  {
    id: 'social-testimonial-card',
    name: 'Testimonial Card',
    category: 'social',
    tags: ['social', 'testimonial', 'card', 'review', 'quote'],
    difficulty: 'intermediate',
    description: 'A testimonial card with quote mark accent and author info',
    cssCode: `.social-testimonial-card {
  background: #1a1a2e; border-radius: 12px;
  padding: 16px; max-width: 200px;
  border: 1px solid #10b98122;
  position: relative;
}
.social-testimonial-card::before {
  content: '"'; position: absolute;
  top: 6px; left: 12px; font-size: 2rem;
  color: #10b98144; font-weight: 900; line-height: 1;
}
.social-testimonial-card-text {
  color: #e2e8f0; font-size: 0.7rem; line-height: 1.5;
  margin-bottom: 10px; position: relative; z-index: 1;
}
.social-testimonial-card-author {
  display: flex; align-items: center; gap: 8px;
}
.social-testimonial-card-avatar {
  width: 24px; height: 24px; border-radius: 50%;
  background: #10b981; display: flex;
  align-items: center; justify-content: center;
  color: #fff; font-size: 0.5rem; font-weight: 800;
}
.social-testimonial-card-name {
  color: #10b981; font-size: 0.6rem; font-weight: 700;
}`,
    htmlCode: `<div class="social-testimonial-card"><div class="social-testimonial-card-text">This product changed our workflow completely.</div><div class="social-testimonial-card-author"><div class="social-testimonial-card-avatar">S</div><div class="social-testimonial-card-name">Sarah K.</div></div></div>`,
    isNew: true,
  },
  {
    id: 'social-review-star',
    name: 'Review Star',
    category: 'social',
    tags: ['social', 'review', 'star', 'rating', 'hover'],
    difficulty: 'beginner',
    description: 'Interactive star rating with hover fill and scale animation',
    cssCode: `.social-review-star {
  display: flex; gap: 2px;
}
.social-review-star-item {
  font-size: 1rem; color: #2a2a3e;
  cursor: pointer; transition: all 0.2s;
}
.social-review-star-item:hover,
.social-review-star-item.lit {
  color: #10b981;
  transform: scale(1.15);
  text-shadow: 0 0 8px #10b98166;
}
.social-review-star-item:hover ~ .social-review-star-item {
  color: #2a2a3e; transform: scale(1);
}`,
    htmlCode: `<div class="social-review-star"><span class="social-review-star-item lit">★</span><span class="social-review-star-item lit">★</span><span class="social-review-star-item lit">★</span><span class="social-review-star-item lit">★</span><span class="social-review-star-item">★</span></div>`,
    isNew: true,
  },
  {
    id: 'social-feedback-form',
    name: 'Feedback Form',
    category: 'social',
    tags: ['social', 'feedback', 'form', 'input', 'submit'],
    difficulty: 'intermediate',
    description: 'A compact feedback form with animated focus states and submit button',
    cssCode: `.social-feedback-form {
  background: #1a1a2e; border-radius: 10px;
  padding: 12px; border: 1px solid #10b98122;
  width: 180px;
}
.social-feedback-form-label {
  color: #e2e8f0; font-size: 0.65rem;
  font-weight: 700; margin-bottom: 6px; display: block;
}
.social-feedback-form-input {
  width: 100%; box-sizing: border-box;
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 6px; padding: 8px 10px;
  color: #e2e8f0; font-size: 0.65rem;
  outline: none; transition: border-color 0.3s;
  margin-bottom: 8px;
}
.social-feedback-form-input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98122;
}
.social-feedback-form-btn {
  background: #10b981; color: #fff;
  border: none; border-radius: 6px;
  padding: 6px 14px; font-size: 0.65rem;
  font-weight: 700; cursor: pointer;
  transition: background 0.3s;
}
.social-feedback-form-btn:hover { background: #059669; }`,
    htmlCode: `<div class="social-feedback-form"><label class="social-feedback-form-label">Your Feedback</label><input class="social-feedback-form-input" placeholder="Tell us what you think..."><button class="social-feedback-form-btn">Submit</button></div>`,
    isNew: true,
  },
  {
    id: 'social-rating-widget',
    name: 'Rating Widget',
    category: 'social',
    tags: ['social', 'rating', 'widget', 'score', 'display'],
    difficulty: 'intermediate',
    description: 'A rating display widget with score number and star visualization',
    cssCode: `.social-rating-widget {
  display: flex; align-items: center; gap: 10px;
  background: #1a1a2e; padding: 10px 14px;
  border-radius: 8px; border: 1px solid #10b98122;
}
.social-rating-widget-score {
  font-size: 1.4rem; font-weight: 900;
  color: #10b981;
}
.social-rating-widget-info {
  display: flex; flex-direction: column; gap: 2px;
}
.social-rating-widget-stars {
  color: #10b981; font-size: 0.65rem;
  letter-spacing: 1px;
}
.social-rating-widget-count {
  color: #64748b; font-size: 0.55rem; font-weight: 600;
}
.social-rating-widget-bar {
  width: 60px; height: 4px; background: #2a2a3e;
  border-radius: 2px; overflow: hidden;
}
.social-rating-widget-bar-fill {
  height: 100%; background: #10b981;
  border-radius: 2px; width: 88%;
  animation: bar-fill 1s ease-out;
}
@keyframes bar-fill {
  from { width: 0; }
}`,
    htmlCode: `<div class="social-rating-widget"><div class="social-rating-widget-score">4.8</div><div class="social-rating-widget-info"><div class="social-rating-widget-stars">★★★★★</div><div class="social-rating-widget-count">1,247 reviews</div><div class="social-rating-widget-bar"><div class="social-rating-widget-bar-fill"></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'social-link-hover',
    name: 'Social Link',
    category: 'social',
    tags: ['social', 'link', 'hover', 'underline', 'animation'],
    difficulty: 'beginner',
    description: 'A social link with animated underline sweep on hover',
    cssCode: `.social-link-hover {
  display: inline-flex; align-items: center; gap: 6px;
  color: #e2e8f0; font-size: 0.75rem; font-weight: 600;
  text-decoration: none; position: relative;
  cursor: pointer; padding-bottom: 2px;
}
.social-link-hover::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; width: 0; height: 2px;
  background: #10b981; border-radius: 1px;
  transition: width 0.3s ease;
}
.social-link-hover:hover::after { width: 100%; }
.social-link-hover:hover { color: #10b981; }
.social-link-hover-icon {
  font-size: 0.85rem; transition: transform 0.3s;
}
.social-link-hover:hover .social-link-hover-icon {
  transform: translateX(3px);
}`,
    htmlCode: `<div class="social-link-hover"><span class="social-link-hover-icon">→</span>Follow us on Twitter</div>`,
    isNew: true,
  },
  {
    id: 'social-bookmark-share',
    name: 'Bookmark Share',
    category: 'social',
    tags: ['social', 'bookmark', 'save', 'share', 'icon'],
    difficulty: 'beginner',
    description: 'A bookmark icon that fills and bounces when saved',
    cssCode: `.social-bookmark-share {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 14px; border-radius: 6px;
  background: #1a1a2e; color: #64748b;
  font-size: 0.7rem; font-weight: 600;
  cursor: pointer; transition: all 0.3s;
}
.social-bookmark-share:hover { color: #10b981; background: #10b98118; }
.social-bookmark-share-icon {
  font-size: 0.85rem; transition: transform 0.3s;
}
.social-bookmark-share.saved { color: #10b981; }
.social-bookmark-share.saved .social-bookmark-share-icon {
  animation: bookmark-bob 0.4s ease;
}
@keyframes bookmark-bob {
  0% { transform: scale(1); }
  40% { transform: scale(1.3) translateY(-3px); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="social-bookmark-share"><span class="social-bookmark-share-icon">🔖</span>Save</div>`,
    isNew: true,
  },
  {
    id: 'social-embed-code',
    name: 'Embed Code',
    category: 'social',
    tags: ['social', 'embed', 'code', 'copy', 'snippet'],
    difficulty: 'intermediate',
    description: 'An embed code display with copy button and code styling',
    cssCode: `.social-embed-code {
  background: #0f0f1a; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
  width: 200px;
}
.social-embed-code-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px; background: #1a1a2e;
  border-bottom: 1px solid #2a2a3e;
}
.social-embed-code-title {
  color: #64748b; font-size: 0.55rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.5px;
}
.social-embed-code-copy {
  color: #10b981; font-size: 0.55rem; font-weight: 700;
  cursor: pointer; transition: color 0.2s;
}
.social-embed-code-copy:hover { color: #34d399; }
.social-embed-code-body {
  padding: 8px 10px; color: #10b981;
  font-family: monospace; font-size: 0.55rem;
  line-height: 1.6; white-space: pre;
}`,
    htmlCode: `<div class="social-embed-code"><div class="social-embed-code-header"><span class="social-embed-code-title">Embed</span><span class="social-embed-code-copy">Copy</span></div><div class="social-embed-code-body">&lt;iframe src="..."&gt;&lt;/iframe&gt;</div></div>`,
    isNew: true,
  },
  {
    id: 'social-qr-code',
    name: 'QR Code',
    category: 'social',
    tags: ['social', 'qr', 'code', 'scan', 'share'],
    difficulty: 'advanced',
    description: 'A QR code placeholder with scanning line animation effect',
    cssCode: `.social-qr-code {
  width: 80px; height: 80px;
  background: #fff; border-radius: 8px;
  padding: 8px; position: relative;
  overflow: hidden;
}
.social-qr-code-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px; width: 100%; height: 100%;
}
.social-qr-code-cell {
  background: #0f0f1a; border-radius: 1px;
}
.social-qr-code-cell:nth-child(odd) { background: #0f0f1a; }
.social-qr-code-cell:nth-child(even) { background: transparent; }
.social-qr-code::after {
  content: ''; position: absolute;
  left: 0; right: 0; height: 3px;
  background: #10b981aa;
  animation: qr-scan 2s ease-in-out infinite;
}
@keyframes qr-scan {
  0% { top: 8px; }
  50% { top: calc(100% - 11px); }
  100% { top: 8px; }
}`,
    htmlCode: `<div class="social-qr-code"><div class="social-qr-code-grid"><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span><span class="social-qr-code-cell"></span></div></div>`,
    isNew: true,
  },
  {
    id: 'social-share-link',
    name: 'Share Link',
    category: 'social',
    tags: ['social', 'share', 'link', 'copy', 'url'],
    difficulty: 'beginner',
    description: 'A shareable link display with one-click copy interaction',
    cssCode: `.social-share-link {
  display: flex; align-items: center;
  background: #0f0f1a; border-radius: 8px;
  border: 1px solid #2a2a3e; overflow: hidden;
  max-width: 200px;
}
.social-share-link-url {
  flex: 1; padding: 8px 10px;
  color: #64748b; font-size: 0.6rem;
  font-family: monospace; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis;
}
.social-share-link-btn {
  background: #10b981; color: #fff;
  padding: 8px 12px; font-size: 0.6rem;
  font-weight: 700; cursor: pointer;
  transition: background 0.3s;
  white-space: nowrap;
}
.social-share-link-btn:hover { background: #059669; }`,
    htmlCode: `<div class="social-share-link"><div class="social-share-link-url">https://example.com/page</div><div class="social-share-link-btn">Copy</div></div>`,
    isNew: true,
  },
  {
    id: 'social-badge-verified',
    name: 'Social Badge',
    category: 'social',
    tags: ['social', 'badge', 'verified', 'status', 'icon'],
    difficulty: 'intermediate',
    description: 'A verified social badge with checkmark and shimmer animation',
    cssCode: `.social-badge-verified {
  display: inline-flex; align-items: center; gap: 6px;
  background: #10b98118; border: 1px solid #10b98144;
  border-radius: 20px; padding: 4px 12px 4px 4px;
  position: relative; overflow: hidden;
}
.social-badge-verified-icon {
  width: 20px; height: 20px; border-radius: 50%;
  background: #10b981; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.55rem; font-weight: 900;
}
.social-badge-verified-text {
  color: #10b981; font-size: 0.65rem; font-weight: 700;
}
.social-badge-verified::after {
  content: ''; position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, #ffffff22, transparent);
  animation: shimmer-badge 2.5s infinite;
}
@keyframes shimmer-badge {
  0% { left: -100%; }
  100% { left: 200%; }
}`,
    htmlCode: `<div class="social-badge-verified"><span class="social-badge-verified-icon">✓</span><span class="social-badge-verified-text">Verified</span></div>`,
    isNew: true,
  },

  // ==================== FORMS (20) ====================
  {
    id: 'form-group-styled',
    name: 'Form Group',
    category: 'forms',
    tags: ['forms', 'group', 'input', 'label', 'styled'],
    difficulty: 'beginner',
    description: 'A styled form group with label and input in a cohesive design',
    cssCode: `.form-group-styled {
  display: flex; flex-direction: column; gap: 4px;
}
.form-group-styled-label {
  color: #e2e8f0; font-size: 0.65rem;
  font-weight: 700; letter-spacing: 0.3px;
}
.form-group-styled-input {
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 6px; padding: 8px 12px;
  color: #e2e8f0; font-size: 0.7rem;
  outline: none; transition: all 0.3s;
  width: 160px; box-sizing: border-box;
}
.form-group-styled-input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px #10b98122;
}`,
    htmlCode: `<div class="form-group-styled"><label class="form-group-styled-label">Email</label><input class="form-group-styled-input" placeholder="you@example.com"></div>`,
    isNew: true,
  },
  {
    id: 'form-fieldset-styled',
    name: 'Fieldset Styled',
    category: 'forms',
    tags: ['forms', 'fieldset', 'border', 'group', 'section'],
    difficulty: 'intermediate',
    description: 'A styled fieldset with animated border and centered legend',
    cssCode: `.form-fieldset-styled {
  border: 1px solid #2a2a3e;
  border-radius: 10px; padding: 16px;
  background: #0f0f1a; position: relative;
  transition: border-color 0.3s;
}
.form-fieldset-styled:hover { border-color: #10b98155; }
.form-fieldset-styled-legend {
  color: #10b981; font-size: 0.7rem;
  font-weight: 700; padding: 0 8px;
  background: #0f0f1a; position: relative;
}
.form-fieldset-styled-legend::after {
  content: ''; position: absolute;
  bottom: -1px; left: 0; right: 0;
  height: 2px; background: #10b981;
  transform: scaleX(0); transition: transform 0.4s;
}
.form-fieldset-styled:hover .form-fieldset-styled-legend::after {
  transform: scaleX(1);
}`,
    htmlCode: `<fieldset class="form-fieldset-styled"><legend class="form-fieldset-styled-legend">Personal Info</legend><div style="color:#64748b;font-size:0.65rem">Name and email fields</div></fieldset>`,
    isNew: true,
  },
  {
    id: 'form-legend-animated',
    name: 'Legend Animated',
    category: 'forms',
    tags: ['forms', 'legend', 'animated', 'label', 'gradient'],
    difficulty: 'advanced',
    description: 'A fieldset legend with gradient text and sliding underline animation',
    cssCode: `.form-legend-animated {
  border: 1px solid #2a2a3e; border-radius: 10px;
  padding: 14px; background: #0f0f1a;
}
.form-legend-animated-legend {
  padding: 0 10px; background: #0f0f1a;
  font-size: 0.7rem; font-weight: 800;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: legend-shimmer 3s linear infinite;
  background-size: 200% auto;
}
@keyframes legend-shimmer {
  to { background-position: 200% center; }
}
.form-legend-animated-body {
  color: #64748b; font-size: 0.65rem; margin-top: 4px;
}`,
    htmlCode: `<fieldset class="form-legend-animated"><legend class="form-legend-animated-legend">Account Details</legend><div class="form-legend-animated-body">Fill in your credentials</div></fieldset>`,
    isNew: true,
  },
  {
    id: 'form-label-float',
    name: 'Label Float',
    category: 'forms',
    tags: ['forms', 'label', 'float', 'input', 'animated'],
    difficulty: 'advanced',
    description: 'A floating label that moves above the input when focused or filled',
    cssCode: `.form-label-float {
  position: relative; width: 180px;
}
.form-label-float-input {
  width: 100%; box-sizing: border-box;
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 8px; padding: 14px 12px 6px;
  color: #e2e8f0; font-size: 0.7rem;
  outline: none; transition: border-color 0.3s;
}
.form-label-float-input:focus { border-color: #10b981; }
.form-label-float-label {
  position: absolute; left: 12px; top: 50%;
  transform: translateY(-50%);
  color: #64748b; font-size: 0.7rem;
  pointer-events: none; transition: all 0.25s;
}
.form-label-float-input:focus + .form-label-float-label,
.form-label-float-input:not(:placeholder-shown) + .form-label-float-label {
  top: 8px; transform: translateY(0);
  font-size: 0.5rem; color: #10b981;
}`,
    htmlCode: `<div class="form-label-float"><input class="form-label-float-input" placeholder=" "><label class="form-label-float-label">Username</label></div>`,
    isNew: true,
  },
  {
    id: 'form-error-message',
    name: 'Error Message',
    category: 'forms',
    tags: ['forms', 'error', 'message', 'validation', 'alert'],
    difficulty: 'beginner',
    description: 'An error message that slides in with a red accent indicator',
    cssCode: `.form-error-message {
  display: flex; align-items: center; gap: 6px;
  background: #ef444418; border: 1px solid #ef444444;
  border-radius: 6px; padding: 8px 12px;
  animation: error-slide 0.3s ease-out;
}
.form-error-message-icon {
  color: #ef4444; font-size: 0.8rem; font-weight: 800;
}
.form-error-message-text {
  color: #ef4444; font-size: 0.65rem; font-weight: 600;
}
@keyframes error-slide {
  from { transform: translateY(-6px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
    htmlCode: `<div class="form-error-message"><span class="form-error-message-icon">✕</span><span class="form-error-message-text">Email address is required</span></div>`,
    isNew: true,
  },
  {
    id: 'form-success-message',
    name: 'Success Message',
    category: 'forms',
    tags: ['forms', 'success', 'message', 'confirmation', 'green'],
    difficulty: 'beginner',
    description: 'A success message with checkmark icon and green accent',
    cssCode: `.form-success-message {
  display: flex; align-items: center; gap: 6px;
  background: #10b98118; border: 1px solid #10b98144;
  border-radius: 6px; padding: 8px 12px;
  animation: success-pop 0.4s ease-out;
}
.form-success-message-icon {
  color: #10b981; font-size: 0.8rem; font-weight: 800;
}
.form-success-message-text {
  color: #10b981; font-size: 0.65rem; font-weight: 600;
}
@keyframes success-pop {
  0% { transform: scale(0.9); opacity: 0; }
  60% { transform: scale(1.02); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="form-success-message"><span class="form-success-message-icon">✓</span><span class="form-success-message-text">Changes saved successfully</span></div>`,
    isNew: true,
  },
  {
    id: 'form-warning-alert',
    name: 'Warning Alert',
    category: 'forms',
    tags: ['forms', 'warning', 'alert', 'caution', 'amber'],
    difficulty: 'beginner',
    description: 'A warning alert with amber color and subtle pulse animation',
    cssCode: `.form-warning-alert {
  display: flex; align-items: center; gap: 6px;
  background: #f59e0b18; border: 1px solid #f59e0b44;
  border-radius: 6px; padding: 8px 12px;
  animation: warn-pulse 2s ease-in-out infinite;
}
.form-warning-alert-icon {
  color: #f59e0b; font-size: 0.8rem; font-weight: 800;
}
.form-warning-alert-text {
  color: #f59e0b; font-size: 0.65rem; font-weight: 600;
}
@keyframes warn-pulse {
  0%, 100% { border-color: #f59e0b44; }
  50% { border-color: #f59e0b88; }
}`,
    htmlCode: `<div class="form-warning-alert"><span class="form-warning-alert-icon">⚠</span><span class="form-warning-alert-text">Unsaved changes will be lost</span></div>`,
    isNew: true,
  },
  {
    id: 'form-info-tooltip',
    name: 'Info Tooltip',
    category: 'forms',
    tags: ['forms', 'info', 'tooltip', 'hover', 'help'],
    difficulty: 'intermediate',
    description: 'An info icon that reveals a tooltip with helpful text on hover',
    cssCode: `.form-info-tooltip {
  position: relative; display: inline-flex;
  align-items: center; gap: 4px;
  color: #e2e8f0; font-size: 0.7rem;
}
.form-info-tooltip-icon {
  width: 16px; height: 16px; border-radius: 50%;
  background: #2a2a3e; color: #64748b;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.5rem; font-weight: 800;
  cursor: help;
}
.form-info-tooltip-tip {
  position: absolute; bottom: 130%; left: 50%;
  transform: translateX(-50%) scale(0.9);
  background: #1a1a2e; color: #e2e8f0;
  padding: 6px 10px; border-radius: 6px;
  font-size: 0.55rem; white-space: nowrap;
  border: 1px solid #10b98133;
  opacity: 0; visibility: hidden;
  transition: all 0.2s;
}
.form-info-tooltip-icon:hover + .form-info-tooltip-tip {
  opacity: 1; visibility: visible;
  transform: translateX(-50%) scale(1);
}`,
    htmlCode: `<div class="form-info-tooltip"><span>Password</span><span class="form-info-tooltip-icon">?</span><div class="form-info-tooltip-tip">Min 8 characters, 1 uppercase</div></div>`,
    isNew: true,
  },
  {
    id: 'form-required-indicator',
    name: 'Required Indicator',
    category: 'forms',
    tags: ['forms', 'required', 'indicator', 'asterisk', 'validation'],
    difficulty: 'beginner',
    description: 'A required field indicator with pulsing asterisk',
    cssCode: `.form-required-indicator {
  display: flex; align-items: center; gap: 4px;
}
.form-required-indicator-label {
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.form-required-indicator-mark {
  color: #ef4444; font-size: 0.8rem; font-weight: 900;
  animation: req-pulse 1.5s ease-in-out infinite;
}
@keyframes req-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}`,
    htmlCode: `<div class="form-required-indicator"><span class="form-required-indicator-label">Email</span><span class="form-required-indicator-mark">*</span></div>`,
    isNew: true,
  },
  {
    id: 'form-optional-tag',
    name: 'Optional Tag',
    category: 'forms',
    tags: ['forms', 'optional', 'tag', 'label', 'badge'],
    difficulty: 'beginner',
    description: 'A subtle optional tag badge next to non-required form fields',
    cssCode: `.form-optional-tag {
  display: flex; align-items: center; gap: 6px;
}
.form-optional-tag-label {
  color: #e2e8f0; font-size: 0.7rem; font-weight: 600;
}
.form-optional-tag-badge {
  background: #2a2a3e; color: #64748b;
  padding: 1px 6px; border-radius: 4px;
  font-size: 0.5rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.5px;
}`,
    htmlCode: `<div class="form-optional-tag"><span class="form-optional-tag-label">Phone</span><span class="form-optional-tag-badge">Optional</span></div>`,
    isNew: true,
  },
  {
    id: 'form-step-indicator',
    name: 'Form Step',
    category: 'forms',
    tags: ['forms', 'step', 'progress', 'wizard', 'indicator'],
    difficulty: 'intermediate',
    description: 'A multi-step form indicator showing current progress through steps',
    cssCode: `.form-step-indicator {
  display: flex; align-items: center; gap: 0;
}
.form-step-indicator-step {
  display: flex; align-items: center; gap: 4px;
}
.form-step-indicator-dot {
  width: 22px; height: 22px; border-radius: 50%;
  background: #2a2a3e; color: #64748b;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.5rem; font-weight: 800;
  transition: all 0.3s;
}
.form-step-indicator-dot.active {
  background: #10b981; color: #fff;
  box-shadow: 0 0 10px #10b98144;
}
.form-step-indicator-dot.done {
  background: #10b98144; color: #10b981;
}
.form-step-indicator-line {
  width: 24px; height: 2px; background: #2a2a3e;
  margin: 0 2px;
}
.form-step-indicator-line.active { background: #10b981; }`,
    htmlCode: `<div class="form-step-indicator"><div class="form-step-indicator-step"><span class="form-step-indicator-dot done">✓</span></div><div class="form-step-indicator-line active"></div><div class="form-step-indicator-step"><span class="form-step-indicator-dot active">2</span></div><div class="form-step-indicator-line"></div><div class="form-step-indicator-step"><span class="form-step-indicator-dot">3</span></div></div>`,
    isNew: true,
  },
  {
    id: 'form-grid-layout',
    name: 'Form Grid',
    category: 'forms',
    tags: ['forms', 'grid', 'layout', 'columns', 'responsive'],
    difficulty: 'intermediate',
    description: 'A form grid layout with two columns and consistent spacing',
    cssCode: `.form-grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px; width: 220px;
}
.form-grid-layout-field {
  display: flex; flex-direction: column; gap: 3px;
}
.form-grid-layout-field.full { grid-column: 1 / -1; }
.form-grid-layout-label {
  color: #e2e8f0; font-size: 0.55rem; font-weight: 700;
}
.form-grid-layout-input {
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 6px; padding: 6px 10px;
  color: #e2e8f0; font-size: 0.65rem;
  outline: none; transition: border-color 0.3s;
}
.form-grid-layout-input:focus { border-color: #10b981; }`,
    htmlCode: `<div class="form-grid-layout"><div class="form-grid-layout-field"><label class="form-grid-layout-label">First</label><input class="form-grid-layout-input" placeholder="John"></div><div class="form-grid-layout-field"><label class="form-grid-layout-label">Last</label><input class="form-grid-layout-input" placeholder="Doe"></div><div class="form-grid-layout-field full"><label class="form-grid-layout-label">Email</label><input class="form-grid-layout-input" placeholder="john@example.com"></div></div>`,
    isNew: true,
  },
  {
    id: 'form-inline-layout',
    name: 'Inline Form',
    category: 'forms',
    tags: ['forms', 'inline', 'horizontal', 'compact', 'layout'],
    difficulty: 'beginner',
    description: 'A compact inline form with input and button on the same row',
    cssCode: `.form-inline-layout {
  display: flex; align-items: center; gap: 0;
  border-radius: 8px; overflow: hidden;
  border: 1px solid #2a2a3e;
}
.form-inline-layout-input {
  background: #0f0f1a; border: none;
  padding: 8px 12px; color: #e2e8f0;
  font-size: 0.7rem; outline: none;
  flex: 1; min-width: 0;
}
.form-inline-layout-input::placeholder { color: #4a4a5e; }
.form-inline-layout-btn {
  background: #10b981; color: #fff;
  padding: 8px 14px; font-size: 0.65rem;
  font-weight: 700; cursor: pointer;
  transition: background 0.3s; white-space: nowrap;
}
.form-inline-layout-btn:hover { background: #059669; }`,
    htmlCode: `<div class="form-inline-layout"><input class="form-inline-layout-input" placeholder="Enter email..."><div class="form-inline-layout-btn">Subscribe</div></div>`,
    isNew: true,
  },
  {
    id: 'form-stacked-layout',
    name: 'Stacked Form',
    category: 'forms',
    tags: ['forms', 'stacked', 'vertical', 'layout', 'simple'],
    difficulty: 'beginner',
    description: 'A stacked vertical form layout with consistent spacing between fields',
    cssCode: `.form-stacked-layout {
  display: flex; flex-direction: column;
  gap: 10px; width: 180px;
}
.form-stacked-layout-field {
  display: flex; flex-direction: column; gap: 3px;
}
.form-stacked-layout-label {
  color: #e2e8f0; font-size: 0.6rem; font-weight: 700;
}
.form-stacked-layout-input {
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 6px; padding: 8px 10px;
  color: #e2e8f0; font-size: 0.65rem;
  outline: none; transition: border-color 0.3s;
}
.form-stacked-layout-input:focus { border-color: #10b981; }
.form-stacked-layout-btn {
  background: #10b981; color: #fff;
  border: none; border-radius: 6px;
  padding: 8px; font-size: 0.7rem;
  font-weight: 700; cursor: pointer;
  transition: background 0.3s;
}
.form-stacked-layout-btn:hover { background: #059669; }`,
    htmlCode: `<div class="form-stacked-layout"><div class="form-stacked-layout-field"><label class="form-stacked-layout-label">Name</label><input class="form-stacked-layout-input"></div><div class="form-stacked-layout-field"><label class="form-stacked-layout-label">Email</label><input class="form-stacked-layout-input"></div><button class="form-stacked-layout-btn">Sign Up</button></div>`,
    isNew: true,
  },
  {
    id: 'form-card-style',
    name: 'Card Form',
    category: 'forms',
    tags: ['forms', 'card', 'container', 'elevated', 'styled'],
    difficulty: 'intermediate',
    description: 'A form styled as an elevated card with header and body sections',
    cssCode: `.form-card-style {
  width: 200px; border-radius: 12px;
  overflow: hidden; background: #1a1a2e;
  border: 1px solid #2a2a3e;
  box-shadow: 0 4px 16px #00000044;
}
.form-card-style-header {
  background: #10b981; padding: 10px 14px;
  color: #fff; font-size: 0.75rem; font-weight: 800;
}
.form-card-style-body {
  padding: 14px; display: flex;
  flex-direction: column; gap: 8px;
}
.form-card-style-input {
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 6px; padding: 7px 10px;
  color: #e2e8f0; font-size: 0.65rem;
  outline: none; transition: border-color 0.3s;
}
.form-card-style-input:focus { border-color: #10b981; }
.form-card-style-btn {
  background: #10b981; color: #fff;
  border: none; border-radius: 6px;
  padding: 7px; font-size: 0.65rem;
  font-weight: 700; cursor: pointer;
}
.form-card-style-btn:hover { background: #059669; }`,
    htmlCode: `<div class="form-card-style"><div class="form-card-style-header">Login</div><div class="form-card-style-body"><input class="form-card-style-input" placeholder="Email"><input class="form-card-style-input" placeholder="Password"><button class="form-card-style-btn">Sign In</button></div></div>`,
    isNew: true,
  },
  {
    id: 'form-wizard-progress',
    name: 'Wizard Form',
    category: 'forms',
    tags: ['forms', 'wizard', 'multi-step', 'progress', 'navigation'],
    difficulty: 'advanced',
    description: 'A wizard form layout with step navigation and progress bar',
    cssCode: `.form-wizard-progress {
  width: 200px; background: #1a1a2e;
  border-radius: 10px; overflow: hidden;
  border: 1px solid #2a2a3e;
}
.form-wizard-progress-bar {
  height: 3px; background: #2a2a3e;
}
.form-wizard-progress-bar-fill {
  height: 100%; background: #10b981;
  width: 66%; border-radius: 2px;
  animation: wizard-fill 1s ease-out;
}
@keyframes wizard-fill { from { width: 0; } }
.form-wizard-progress-steps {
  display: flex; padding: 8px 10px; gap: 4px;
}
.form-wizard-progress-step {
  flex: 1; text-align: center;
  font-size: 0.5rem; font-weight: 700;
  color: #4a4a5e; padding: 4px;
  border-radius: 4px; transition: all 0.3s;
}
.form-wizard-progress-step.active {
  color: #10b981; background: #10b98118;
}
.form-wizard-progress-step.done { color: #10b981; }
.form-wizard-progress-body {
  padding: 10px 14px 14px;
  color: #64748b; font-size: 0.6rem;
}`,
    htmlCode: `<div class="form-wizard-progress"><div class="form-wizard-progress-bar"><div class="form-wizard-progress-bar-fill"></div></div><div class="form-wizard-progress-steps"><span class="form-wizard-progress-step done">1. Info</span><span class="form-wizard-progress-step active">2. Details</span><span class="form-wizard-progress-step">3. Confirm</span></div><div class="form-wizard-progress-body">Step 2 of 3</div></div>`,
    isNew: true,
  },
  {
    id: 'form-multi-column',
    name: 'Multi-Column',
    category: 'forms',
    tags: ['forms', 'multi-column', 'layout', 'grid', 'dense'],
    difficulty: 'intermediate',
    description: 'A multi-column form layout with varying field widths',
    cssCode: `.form-multi-column {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px; width: 220px;
}
.form-multi-column-field {
  display: flex; flex-direction: column; gap: 3px;
}
.form-multi-column-field.full { grid-column: 1 / -1; }
.form-multi-column-label {
  color: #e2e8f0; font-size: 0.55rem; font-weight: 700;
}
.form-multi-column-input {
  background: #0f0f1a; border: 1px solid #2a2a3e;
  border-radius: 6px; padding: 6px 10px;
  color: #e2e8f0; font-size: 0.65rem;
  outline: none; transition: border-color 0.3s;
}
.form-multi-column-input:focus { border-color: #10b981; }`,
    htmlCode: `<div class="form-multi-column"><div class="form-multi-column-field"><label class="form-multi-column-label">Address</label><input class="form-multi-column-input"></div><div class="form-multi-column-field"><label class="form-multi-column-label">Zip</label><input class="form-multi-column-input"></div><div class="form-multi-column-field full"><label class="form-multi-column-label">City</label><input class="form-multi-column-input"></div></div>`,
    isNew: true,
  },
  {
    id: 'form-section-divider',
    name: 'Form Section',
    category: 'forms',
    tags: ['forms', 'section', 'divider', 'group', 'separator'],
    difficulty: 'intermediate',
    description: 'A form section with a styled divider and section heading',
    cssCode: `.form-section-divider {
  width: 200px;
}
.form-section-divider-heading {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 8px;
}
.form-section-divider-title {
  color: #10b981; font-size: 0.7rem;
  font-weight: 800; white-space: nowrap;
}
.form-section-divider-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, #10b98144, transparent);
}
.form-section-divider-body {
  padding-left: 10px;
  border-left: 2px solid #10b98133;
  color: #64748b; font-size: 0.6rem;
}`,
    htmlCode: `<div class="form-section-divider"><div class="form-section-divider-heading"><span class="form-section-divider-title">Billing</span><div class="form-section-divider-line"></div></div><div class="form-section-divider-body">Payment details go here</div></div>`,
    isNew: true,
  },
  {
    id: 'form-actions-bar',
    name: 'Form Actions',
    category: 'forms',
    tags: ['forms', 'actions', 'buttons', 'submit', 'cancel'],
    difficulty: 'beginner',
    description: 'A form actions bar with primary and secondary buttons',
    cssCode: `.form-actions-bar {
  display: flex; align-items: center;
  justify-content: flex-end; gap: 8px;
  padding: 10px 0; border-top: 1px solid #2a2a3e;
  margin-top: 8px;
}
.form-actions-bar-secondary {
  padding: 7px 14px; border-radius: 6px;
  background: #1a1a2e; color: #64748b;
  font-size: 0.65rem; font-weight: 600;
  cursor: pointer; border: 1px solid #2a2a3e;
  transition: all 0.3s;
}
.form-actions-bar-secondary:hover { color: #e2e8f0; border-color: #4a4a5e; }
.form-actions-bar-primary {
  padding: 7px 14px; border-radius: 6px;
  background: #10b981; color: #fff;
  font-size: 0.65rem; font-weight: 700;
  cursor: pointer; transition: all 0.3s;
}
.form-actions-bar-primary:hover {
  background: #059669; box-shadow: 0 2px 8px #10b98144;
}`,
    htmlCode: `<div class="form-actions-bar"><span class="form-actions-bar-secondary">Cancel</span><span class="form-actions-bar-primary">Save Changes</span></div>`,
    isNew: true,
  },
  {
    id: 'form-progress-bar',
    name: 'Form Progress',
    category: 'forms',
    tags: ['forms', 'progress', 'bar', 'completion', 'indicator'],
    difficulty: 'intermediate',
    description: 'A form completion progress bar with percentage and animated fill',
    cssCode: `.form-progress-bar {
  width: 200px;
}
.form-progress-bar-header {
  display: flex; justify-content: space-between;
  margin-bottom: 4px;
}
.form-progress-bar-label {
  color: #e2e8f0; font-size: 0.6rem; font-weight: 700;
}
.form-progress-bar-pct {
  color: #10b981; font-size: 0.6rem; font-weight: 800;
}
.form-progress-bar-track {
  height: 6px; background: #2a2a3e;
  border-radius: 3px; overflow: hidden;
}
.form-progress-bar-fill {
  height: 100%; background: linear-gradient(90deg, #10b981, #34d399);
  border-radius: 3px; width: 75%;
  animation: form-prog 1.2s ease-out;
  position: relative;
}
.form-progress-bar-fill::after {
  content: ''; position: absolute;
  right: 0; top: 0; bottom: 0; width: 20px;
  background: linear-gradient(90deg, transparent, #ffffff33);
  animation: prog-shine 2s infinite;
}
@keyframes form-prog { from { width: 0; } }
@keyframes prog-shine { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }`,
    htmlCode: `<div class="form-progress-bar"><div class="form-progress-bar-header"><span class="form-progress-bar-label">Completion</span><span class="form-progress-bar-pct">75%</span></div><div class="form-progress-bar-track"><div class="form-progress-bar-fill"></div></div></div>`,
    isNew: true,
  },

  // ==================== DATA (20) ====================
  {
    id: 'data-bar-chart',
    name: 'Bar Chart',
    category: 'data',
    tags: ['data', 'bar', 'chart', 'visualization', 'animated'],
    difficulty: 'intermediate',
    description: 'An animated bar chart with growing bars and value labels',
    cssCode: `.data-bar-chart {
  display: flex; align-items: flex-end;
  gap: 6px; height: 80px; padding: 8px 0;
}
.data-bar-chart-bar {
  flex: 1; border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, #10b981, #059669);
  animation: bar-grow 0.8s ease-out;
  position: relative; min-width: 16px;
}
.data-bar-chart-bar:nth-child(1) { height: 45%; animation-delay: 0s; }
.data-bar-chart-bar:nth-child(2) { height: 72%; animation-delay: 0.1s; }
.data-bar-chart-bar:nth-child(3) { height: 58%; animation-delay: 0.2s; }
.data-bar-chart-bar:nth-child(4) { height: 90%; animation-delay: 0.3s; }
.data-bar-chart-bar:nth-child(5) { height: 35%; animation-delay: 0.4s; }
@keyframes bar-grow {
  from { height: 0; }
}
.data-bar-chart-bar::after {
  content: attr(data-v); position: absolute;
  top: -14px; left: 50%; transform: translateX(-50%);
  color: #10b981; font-size: 0.45rem; font-weight: 700;
}`,
    htmlCode: `<div class="data-bar-chart"><div class="data-bar-chart-bar" data-v="45"></div><div class="data-bar-chart-bar" data-v="72"></div><div class="data-bar-chart-bar" data-v="58"></div><div class="data-bar-chart-bar" data-v="90"></div><div class="data-bar-chart-bar" data-v="35"></div></div>`,
    isNew: true,
  },
  {
    id: 'data-line-chart',
    name: 'Line Chart',
    category: 'data',
    tags: ['data', 'line', 'chart', 'trend', 'svg'],
    difficulty: 'advanced',
    description: 'A line chart visualization with animated drawing effect',
    cssCode: `.data-line-chart {
  width: 180px; height: 80px;
  background: #1a1a2e; border-radius: 8px;
  padding: 10px; position: relative;
  overflow: hidden;
}
.data-line-chart-svg {
  width: 100%; height: 100%;
}
.data-line-chart-line {
  fill: none; stroke: #10b981;
  stroke-width: 2; stroke-linecap: round;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: line-draw 1.5s ease-out forwards;
}
.data-line-chart-area {
  fill: #10b98118;
  animation: area-fade 0.5s ease 1.2s both;
}
.data-line-chart-dot {
  fill: #10b981; r: 3;
  animation: dot-pop 0.3s ease 1.5s both;
}
@keyframes line-draw { to { stroke-dashoffset: 0; } }
@keyframes area-fade { from { opacity: 0; } }
@keyframes dot-pop { from { r: 0; } to { r: 3; } }`,
    htmlCode: `<div class="data-line-chart"><svg class="data-line-chart-svg" viewBox="0 0 160 60"><path class="data-line-chart-area" d="M0,45 L40,30 L80,35 L120,10 L160,20 L160,60 L0,60Z"/><path class="data-line-chart-line" d="M0,45 L40,30 L80,35 L120,10 L160,20"/><circle class="data-line-chart-dot" cx="120" cy="10"/></svg></div>`,
    isNew: true,
  },
  {
    id: 'data-pie-chart',
    name: 'Pie Chart',
    category: 'data',
    tags: ['data', 'pie', 'chart', 'proportion', 'conic'],
    difficulty: 'advanced',
    description: 'A pie chart using conic-gradient with animated segment reveal',
    cssCode: `.data-pie-chart {
  width: 80px; height: 80px;
  border-radius: 50%;
  background: conic-gradient(
    #10b981 0deg 130deg,
    #3b82f6 130deg 230deg,
    #8b5cf6 230deg 310deg,
    #f59e0b 310deg 360deg
  );
  position: relative;
  animation: pie-spin 1s ease-out;
}
.data-pie-chart::after {
  content: ''; position: absolute;
  inset: 20px; border-radius: 50%;
  background: #1a1a2e;
}
@keyframes pie-spin {
  from { transform: rotate(-90deg); opacity: 0; }
  to { transform: rotate(0deg); opacity: 1; }
}`,
    htmlCode: `<div class="data-pie-chart"></div>`,
    isNew: true,
  },
  {
    id: 'data-donut-chart',
    name: 'Donut Chart',
    category: 'data',
    tags: ['data', 'donut', 'chart', 'ring', 'percentage'],
    difficulty: 'intermediate',
    description: 'A donut chart with center label and animated fill',
    cssCode: `.data-donut-chart {
  width: 80px; height: 80px;
  border-radius: 50%; position: relative;
  background: conic-gradient(#10b981 0deg 270deg, #2a2a3e 270deg 360deg);
  display: flex; align-items: center; justify-content: center;
  animation: donut-reveal 1s ease-out;
}
.data-donut-chart::after {
  content: ''; position: absolute;
  width: 50px; height: 50px;
  border-radius: 50%; background: #1a1a2e;
}
.data-donut-chart-label {
  position: relative; z-index: 1;
  color: #10b981; font-size: 0.75rem; font-weight: 900;
}
@keyframes donut-reveal {
  from { clip-path: polygon(50% 50%, 50% 0%, 50% 0%); }
  to { clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%); }
}`,
    htmlCode: `<div class="data-donut-chart"><span class="data-donut-chart-label">75%</span></div>`,
    isNew: true,
  },
  {
    id: 'data-stat-card',
    name: 'Stat Card',
    category: 'data',
    tags: ['data', 'stat', 'card', 'metric', 'number'],
    difficulty: 'beginner',
    description: 'A stat card with large number, label, and trend indicator',
    cssCode: `.data-stat-card {
  background: #1a1a2e; border-radius: 10px;
  padding: 14px; border: 1px solid #2a2a3e;
  width: 140px;
}
.data-stat-card-value {
  font-size: 1.5rem; font-weight: 900;
  color: #e2e8f0; line-height: 1;
}
.data-stat-card-label {
  color: #64748b; font-size: 0.6rem;
  font-weight: 600; margin-top: 4px;
}
.data-stat-card-trend {
  display: inline-flex; align-items: center; gap: 3px;
  margin-top: 6px; color: #10b981;
  font-size: 0.6rem; font-weight: 700;
  background: #10b98118; padding: 2px 6px;
  border-radius: 4px;
}`,
    htmlCode: `<div class="data-stat-card"><div class="data-stat-card-value">24.8k</div><div class="data-stat-card-label">Total Users</div><div class="data-stat-card-trend">↑ 12.5%</div></div>`,
    isNew: true,
  },
  {
    id: 'data-metric-value',
    name: 'Metric Value',
    category: 'data',
    tags: ['data', 'metric', 'value', 'number', 'animated'],
    difficulty: 'intermediate',
    description: 'A large metric value with animated count-up and unit suffix',
    cssCode: `.data-metric-value {
  display: flex; align-items: baseline; gap: 4px;
}
.data-metric-value-num {
  font-size: 2rem; font-weight: 900;
  color: #10b981; line-height: 1;
  animation: metric-pop 0.6s ease-out;
}
.data-metric-value-unit {
  font-size: 0.7rem; font-weight: 700;
  color: #10b981aa;
}
.data-metric-value-sub {
  display: block; color: #64748b;
  font-size: 0.55rem; font-weight: 600; margin-top: 2px;
}
@keyframes metric-pop {
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.08); }
  100% { transform: scale(1); opacity: 1; }
}`,
    htmlCode: `<div class="data-metric-value"><span class="data-metric-value-num">98.7</span><span class="data-metric-value-unit">%</span></div><span class="data-metric-value-sub">Uptime</span>`,
    isNew: true,
  },
  {
    id: 'data-table-styled',
    name: 'Data Table',
    category: 'data',
    tags: ['data', 'table', 'styled', 'rows', 'columns'],
    difficulty: 'intermediate',
    description: 'A styled data table with hover rows and header accent',
    cssCode: `.data-table-styled {
  width: 200px; border-collapse: collapse;
  font-size: 0.6rem;
}
.data-table-styled th {
  background: #10b98122; color: #10b981;
  padding: 6px 8px; text-align: left;
  font-weight: 700; border-bottom: 2px solid #10b98144;
}
.data-table-styled td {
  padding: 5px 8px; color: #e2e8f0;
  border-bottom: 1px solid #2a2a3e;
}
.data-table-styled tr:hover td {
  background: #10b9810a;
}
.data-table-styled .up { color: #10b981; font-weight: 700; }
.data-table-styled .down { color: #ef4444; font-weight: 700; }`,
    htmlCode: `<table class="data-table-styled"><tr><th>Name</th><th>Value</th><th>Trend</th></tr><tr><td>Alpha</td><td>1,240</td><td class="up">↑</td></tr><tr><td>Beta</td><td>890</td><td class="down">↓</td></tr><tr><td>Gamma</td><td>2,100</td><td class="up">↑</td></tr></table>`,
    isNew: true,
  },
  {
    id: 'data-grid-cells',
    name: 'Data Grid',
    category: 'data',
    tags: ['data', 'grid', 'cells', 'matrix', 'heatmap'],
    difficulty: 'intermediate',
    description: 'A data grid with colored cells representing values in a matrix',
    cssCode: `.data-grid-cells {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px; width: 120px;
}
.data-grid-cells-cell {
  aspect-ratio: 1; border-radius: 2px;
  background: #1a1a2e; transition: background 0.3s;
  animation: cell-pop 0.3s ease-out both;
}
.data-grid-cells-cell:nth-child(1) { background: #10b98122; animation-delay: 0s; }
.data-grid-cells-cell:nth-child(3) { background: #10b98166; animation-delay: 0.1s; }
.data-grid-cells-cell:nth-child(7) { background: #10b98144; animation-delay: 0.15s; }
.data-grid-cells-cell:nth-child(8) { background: #10b981; animation-delay: 0.2s; }
.data-grid-cells-cell:nth-child(12) { background: #10b98188; animation-delay: 0.25s; }
.data-grid-cells-cell:nth-child(16) { background: #10b98155; animation-delay: 0.3s; }
@keyframes cell-pop {
  from { transform: scale(0); }
  to { transform: scale(1); }
}`,
    htmlCode: `<div class="data-grid-cells"><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div><div class="data-grid-cells-cell"></div></div>`,
    isNew: true,
  },
  {
    id: 'data-heat-map',
    name: 'Heat Map',
    category: 'data',
    tags: ['data', 'heat', 'map', 'intensity', 'color'],
    difficulty: 'advanced',
    description: 'A heat map visualization with intensity-based coloring and animation',
    cssCode: `.data-heat-map {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px; width: 140px;
}
.data-heat-map-cell {
  aspect-ratio: 1; border-radius: 2px;
  transition: transform 0.2s;
}
.data-heat-map-cell:hover { transform: scale(1.4); z-index: 1; }
.data-heat-map-cell:nth-child(n+1):nth-child(-n+7) { background: #10b98115; }
.data-heat-map-cell:nth-child(n+8):nth-child(-n+14) { background: #10b98130; }
.data-heat-map-cell:nth-child(n+15):nth-child(-n+21) { background: #10b98150; }
.data-heat-map-cell:nth-child(n+22):nth-child(-n+28) { background: #10b98170; }
.data-heat-map-cell:nth-child(3) { background: #10b981; }
.data-heat-map-cell:nth-child(10) { background: #10b98199; }
.data-heat-map-cell:nth-child(24) { background: #10b981bb; }`,
    htmlCode: `<div class="data-heat-map"><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div><div class="data-heat-map-cell"></div></div>`,
    isNew: true,
  },
  {
    id: 'data-sparkline',
    name: 'Sparkline',
    category: 'data',
    tags: ['data', 'sparkline', 'mini', 'trend', 'chart'],
    difficulty: 'intermediate',
    description: 'A mini sparkline chart showing trend in a compact inline format',
    cssCode: `.data-sparkline {
  display: inline-flex; align-items: center; gap: 8px;
  background: #1a1a2e; padding: 6px 10px;
  border-radius: 6px;
}
.data-sparkline-svg {
  width: 60px; height: 24px;
}
.data-sparkline-path {
  fill: none; stroke: #10b981;
  stroke-width: 1.5; stroke-linecap: round;
  stroke-dasharray: 80; stroke-dashoffset: 80;
  animation: spark-draw 1s ease-out forwards;
}
.data-sparkline-area {
  fill: #10b98122; animation: spark-fade 0.5s ease 0.8s both;
}
.data-sparkline-value {
  color: #10b981; font-size: 0.75rem; font-weight: 800;
}
@keyframes spark-draw { to { stroke-dashoffset: 0; } }
@keyframes spark-fade { from { opacity: 0; } }`,
    htmlCode: `<div class="data-sparkline"><svg class="data-sparkline-svg" viewBox="0 0 60 24"><path class="data-sparkline-area" d="M0,18 L10,14 L20,16 L30,8 L40,10 L50,4 L60,6 L60,24 L0,24Z"/><path class="data-sparkline-path" d="M0,18 L10,14 L20,16 L30,8 L40,10 L50,4 L60,6"/></svg><span class="data-sparkline-value">$842</span></div>`,
    isNew: true,
  },
  {
    id: 'data-gauge-meter',
    name: 'Gauge Meter',
    category: 'data',
    tags: ['data', 'gauge', 'meter', 'dial', 'arc'],
    difficulty: 'advanced',
    description: 'A gauge meter with arc fill and centered value display',
    cssCode: `.data-gauge-meter {
  width: 90px; height: 50px;
  position: relative; overflow: hidden;
}
.data-gauge-meter-arc {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: conic-gradient(#10b981 0deg 250deg, #2a2a3e 250deg 360deg);
  position: absolute; top: 0;
  animation: gauge-fill 1s ease-out;
}
.data-gauge-meter-arc::after {
  content: ''; position: absolute;
  inset: 14px; border-radius: 50%;
  background: #1a1a2e;
}
.data-gauge-meter-mask {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 45px; background: #1a1a2e;
}
.data-gauge-meter-value {
  position: absolute; bottom: 4px;
  left: 50%; transform: translateX(-50%);
  color: #10b981; font-size: 0.8rem; font-weight: 900;
}
@keyframes gauge-fill { from { clip-path: polygon(50% 50%, 50% 0%, 50% 0%); } }`,
    htmlCode: `<div class="data-gauge-meter"><div class="data-gauge-meter-arc"></div><div class="data-gauge-meter-mask"></div><div class="data-gauge-meter-value">70%</div></div>`,
    isNew: true,
  },
  {
    id: 'data-trend-indicator',
    name: 'Trend Indicator',
    category: 'data',
    tags: ['data', 'trend', 'indicator', 'arrow', 'direction'],
    difficulty: 'beginner',
    description: 'A trend indicator with directional arrow and color coding',
    cssCode: `.data-trend-indicator {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 4px 10px; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800;
}
.data-trend-indicator.up {
  background: #10b98118; color: #10b981;
}
.data-trend-indicator.down {
  background: #ef444418; color: #ef4444;
}
.data-trend-indicator-arrow {
  font-size: 0.6rem;
  animation: arrow-bob 1s ease-in-out infinite;
}
.data-trend-indicator.up .data-trend-indicator-arrow {
  animation-name: arrow-up;
}
@keyframes arrow-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}`,
    htmlCode: `<div class="data-trend-indicator up"><span class="data-trend-indicator-arrow">▲</span>+14.2%</div>`,
    isNew: true,
  },
  {
    id: 'data-comparison-bar',
    name: 'Comparison Bar',
    category: 'data',
    tags: ['data', 'comparison', 'bar', 'versus', 'dual'],
    difficulty: 'intermediate',
    description: 'A comparison bar showing two values side by side with labels',
    cssCode: `.data-comparison-bar {
  width: 160px;
}
.data-comparison-bar-row {
  display: flex; align-items: center; gap: 6px;
  margin-bottom: 6px;
}
.data-comparison-bar-label {
  color: #e2e8f0; font-size: 0.55rem;
  font-weight: 700; width: 28px;
}
.data-comparison-bar-track {
  flex: 1; height: 10px;
  background: #2a2a3e; border-radius: 5px;
  overflow: hidden;
}
.data-comparison-bar-fill {
  height: 100%; border-radius: 5px;
  animation: comp-grow 0.8s ease-out;
}
.data-comparison-bar-fill.a { background: #10b981; width: 78%; }
.data-comparison-bar-fill.b { background: #3b82f6; width: 62%; }
.data-comparison-bar-val {
  color: #64748b; font-size: 0.5rem;
  font-weight: 700; width: 24px;
}
@keyframes comp-grow { from { width: 0; } }`,
    htmlCode: `<div class="data-comparison-bar"><div class="data-comparison-bar-row"><span class="data-comparison-bar-label">A</span><div class="data-comparison-bar-track"><div class="data-comparison-bar-fill a"></div></div><span class="data-comparison-bar-val">78</span></div><div class="data-comparison-bar-row"><span class="data-comparison-bar-label">B</span><div class="data-comparison-bar-track"><div class="data-comparison-bar-fill b"></div></div><span class="data-comparison-bar-val">62</span></div></div>`,
    isNew: true,
  },
  {
    id: 'data-progress-ring',
    name: 'Progress Ring',
    category: 'data',
    tags: ['data', 'progress', 'ring', 'circular', 'svg'],
    difficulty: 'advanced',
    description: 'A circular progress ring with animated stroke and center value',
    cssCode: `.data-progress-ring {
  position: relative; width: 70px; height: 70px;
}
.data-progress-ring-svg {
  transform: rotate(-90deg);
  width: 70px; height: 70px;
}
.data-progress-ring-bg {
  fill: none; stroke: #2a2a3e; stroke-width: 6;
}
.data-progress-ring-fill {
  fill: none; stroke: #10b981; stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 163;
  stroke-dashoffset: 49;
  animation: ring-draw 1.2s ease-out;
}
.data-progress-ring-label {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
}
.data-progress-ring-value {
  color: #10b981; font-size: 0.85rem; font-weight: 900;
}
.data-progress-ring-sub {
  color: #64748b; font-size: 0.4rem; font-weight: 600;
}
@keyframes ring-draw {
  from { stroke-dashoffset: 163; }
}`,
    htmlCode: `<div class="data-progress-ring"><svg class="data-progress-ring-svg"><circle class="data-progress-ring-bg" cx="35" cy="35" r="26"/><circle class="data-progress-ring-fill" cx="35" cy="35" r="26"/></svg><div class="data-progress-ring-label"><span class="data-progress-ring-value">70%</span><span class="data-progress-ring-sub">complete</span></div></div>`,
    isNew: true,
  },
  {
    id: 'data-score-display',
    name: 'Score Display',
    category: 'data',
    tags: ['data', 'score', 'display', 'number', 'badge'],
    difficulty: 'beginner',
    description: 'A score display with large number and grade badge',
    cssCode: `.data-score-display {
  display: flex; align-items: center; gap: 10px;
  background: #1a1a2e; padding: 10px 14px;
  border-radius: 10px; border: 1px solid #2a2a3e;
}
.data-score-display-num {
  font-size: 1.6rem; font-weight: 900;
  color: #10b981; line-height: 1;
}
.data-score-display-grade {
  background: #10b981; color: #fff;
  width: 28px; height: 28px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 900;
  animation: grade-pop 0.5s ease 0.3s both;
}
.data-score-display-info {
  display: flex; flex-direction: column; gap: 1px;
}
.data-score-display-label {
  color: #e2e8f0; font-size: 0.6rem; font-weight: 700;
}
.data-score-display-sub {
  color: #64748b; font-size: 0.5rem;
}
@keyframes grade-pop {
  0% { transform: scale(0); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="data-score-display"><div class="data-score-display-info"><span class="data-score-display-num">92</span><span class="data-score-display-label">Performance</span><span class="data-score-display-sub">Out of 100</span></div><div class="data-score-display-grade">A</div></div>`,
    isNew: true,
  },
  {
    id: 'data-rating-bar',
    name: 'Rating Bar',
    category: 'data',
    tags: ['data', 'rating', 'bar', 'score', 'segmented'],
    difficulty: 'beginner',
    description: 'A segmented rating bar showing score out of maximum',
    cssCode: `.data-rating-bar {
  display: flex; gap: 2px; align-items: center;
}
.data-rating-bar-segment {
  width: 20px; height: 8px;
  border-radius: 2px; background: #2a2a3e;
  transition: background 0.3s;
}
.data-rating-bar-segment.filled {
  background: #10b981;
  animation: seg-fill 0.3s ease-out both;
}
.data-rating-bar-segment.filled:nth-child(1) { animation-delay: 0s; }
.data-rating-bar-segment.filled:nth-child(2) { animation-delay: 0.1s; }
.data-rating-bar-segment.filled:nth-child(3) { animation-delay: 0.2s; }
.data-rating-bar-segment.filled:nth-child(4) { animation-delay: 0.3s; }
.data-rating-bar-val {
  color: #10b981; font-size: 0.65rem;
  font-weight: 800; margin-left: 6px;
}
@keyframes seg-fill { from { transform: scaleX(0); } }`,
    htmlCode: `<div class="data-rating-bar"><div class="data-rating-bar-segment filled"></div><div class="data-rating-bar-segment filled"></div><div class="data-rating-bar-segment filled"></div><div class="data-rating-bar-segment filled"></div><div class="data-rating-bar-segment"></div><span class="data-rating-bar-val">4/5</span></div>`,
    isNew: true,
  },
  {
    id: 'data-percentile',
    name: 'Percentile',
    category: 'data',
    tags: ['data', 'percentile', 'rank', 'distribution', 'bell'],
    difficulty: 'intermediate',
    description: 'A percentile display with distribution curve and position marker',
    cssCode: `.data-percentile {
  width: 160px; background: #1a1a2e;
  border-radius: 8px; padding: 10px;
  border: 1px solid #2a2a3e;
}
.data-percentile-header {
  display: flex; justify-content: space-between;
  margin-bottom: 6px;
}
.data-percentile-value {
  color: #10b981; font-size: 0.9rem; font-weight: 900;
}
.data-percentile-label {
  color: #64748b; font-size: 0.5rem; font-weight: 600;
}
.data-percentile-track {
  height: 4px; background: #2a2a3e;
  border-radius: 2px; position: relative;
}
.data-percentile-marker {
  position: absolute; top: -4px;
  width: 12px; height: 12px; border-radius: 50%;
  background: #10b981; left: 82%;
  transform: translateX(-50%);
  box-shadow: 0 0 8px #10b98166;
  animation: marker-settle 0.8s ease-out;
}
@keyframes marker-settle {
  0% { left: 0; } 60% { left: 84%; } 100% { left: 82%; }
}`,
    htmlCode: `<div class="data-percentile"><div class="data-percentile-header"><span class="data-percentile-value">92nd</span><span class="data-percentile-label">percentile</span></div><div class="data-percentile-track"><div class="data-percentile-marker"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'data-highlight-value',
    name: 'Data Highlight',
    category: 'data',
    tags: ['data', 'highlight', 'value', 'emphasis', 'glow'],
    difficulty: 'beginner',
    description: 'A highlighted data value with glowing background emphasis',
    cssCode: `.data-highlight-value {
  display: inline-block; padding: 4px 12px;
  background: #10b98122; border-radius: 6px;
  border: 1px solid #10b98144;
  animation: highlight-glow 2s ease-in-out infinite;
}
.data-highlight-value-num {
  color: #10b981; font-size: 1rem; font-weight: 900;
}
.data-highlight-value-unit {
  color: #10b981aa; font-size: 0.6rem; font-weight: 600;
}
@keyframes highlight-glow {
  0%, 100% { box-shadow: 0 0 0 0 #10b98122; }
  50% { box-shadow: 0 0 12px 2px #10b98122; }
}`,
    htmlCode: `<div class="data-highlight-value"><span class="data-highlight-value-num">3,847</span> <span class="data-highlight-value-unit">requests/s</span></div>`,
    isNew: true,
  },
  {
    id: 'data-stat-box',
    name: 'Stat Box',
    category: 'data',
    tags: ['data', 'stat', 'box', 'compact', 'metric'],
    difficulty: 'beginner',
    description: 'A compact stat box with icon, value, and change indicator',
    cssCode: `.data-stat-box {
  background: #1a1a2e; border-radius: 8px;
  padding: 10px 12px; display: flex;
  align-items: center; gap: 8px;
  border: 1px solid #2a2a3e;
}
.data-stat-box-icon {
  width: 28px; height: 28px; border-radius: 6px;
  background: #10b98122; color: #10b981;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; flex-shrink: 0;
}
.data-stat-box-content {
  display: flex; flex-direction: column; gap: 1px;
}
.data-stat-box-value {
  color: #e2e8f0; font-size: 0.85rem; font-weight: 800;
}
.data-stat-box-label {
  color: #64748b; font-size: 0.5rem; font-weight: 600;
}`,
    htmlCode: `<div class="data-stat-box"><div class="data-stat-box-icon">📊</div><div class="data-stat-box-content"><span class="data-stat-box-value">1,247</span><span class="data-stat-box-label">Total Views</span></div></div>`,
    isNew: true,
  },
  {
    id: 'data-kpi-card',
    name: 'KPI Card',
    category: 'data',
    tags: ['data', 'kpi', 'card', 'dashboard', 'metric'],
    difficulty: 'intermediate',
    description: 'A KPI dashboard card with value, trend sparkline, and status indicator',
    cssCode: `.data-kpi-card {
  background: #1a1a2e; border-radius: 10px;
  padding: 14px; width: 160px;
  border: 1px solid #2a2a3e;
  position: relative; overflow: hidden;
}
.data-kpi-card::after {
  content: ''; position: absolute;
  top: 0; right: 0; width: 40px; height: 40px;
  background: radial-gradient(circle at top right, #10b98122, transparent 70%);
}
.data-kpi-card-label {
  color: #64748b; font-size: 0.55rem;
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px;
}
.data-kpi-card-value {
  color: #e2e8f0; font-size: 1.3rem;
  font-weight: 900; margin-top: 4px;
}
.data-kpi-card-trend {
  display: flex; align-items: center; gap: 4px;
  margin-top: 6px;
}
.data-kpi-card-change {
  color: #10b981; font-size: 0.6rem; font-weight: 800;
}
.data-kpi-card-period {
  color: #4a4a5e; font-size: 0.5rem;
}
.data-kpi-card-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #10b981; animation: kpi-pulse 1.5s infinite;
}
@keyframes kpi-pulse {
  0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
}`,
    htmlCode: `<div class="data-kpi-card"><div class="data-kpi-card-label">Revenue</div><div class="data-kpi-card-value">$48.2k</div><div class="data-kpi-card-trend"><span class="data-kpi-card-dot"></span><span class="data-kpi-card-change">+8.3%</span><span class="data-kpi-card-period">vs last month</span></div></div>`,
    isNew: true,
  },

  // ==================== SLIDERS (20) ====================
  {
    id: 'slider-range-track',
    name: 'Range Track',
    category: 'sliders',
    tags: ['sliders', 'range', 'track', 'custom', 'styled'],
    difficulty: 'beginner',
    description: 'A custom styled range slider with colored track and thumb',
    cssCode: `.slider-range-track {
  width: 160px; height: 30px;
  display: flex; align-items: center;
}
.slider-range-track input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-track input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 2px 6px #10b98144;
  transition: transform 0.2s;
}
.slider-range-track input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}`,
    htmlCode: `<div class="slider-range-track"><input type="range" value="60" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-thumb',
    name: 'Range Thumb',
    category: 'sliders',
    tags: ['sliders', 'range', 'thumb', 'custom', 'glow'],
    difficulty: 'intermediate',
    description: 'A range slider with glowing thumb that pulses on interaction',
    cssCode: `.slider-range-thumb {
  width: 160px; height: 34px;
  display: flex; align-items: center;
}
.slider-range-thumb input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 4px; border-radius: 2px;
  background: #2a2a3e; outline: none;
}
.slider-range-thumb input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 20px; height: 20px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; border: 3px solid #1a1a2e;
  box-shadow: 0 0 0 3px #10b98144;
  transition: box-shadow 0.3s;
}
.slider-range-thumb input[type=range]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 6px #10b98133, 0 0 12px #10b98144;
  animation: thumb-glow 1s ease-in-out infinite;
}
@keyframes thumb-glow {
  0%, 100% { box-shadow: 0 0 0 4px #10b98133; }
  50% { box-shadow: 0 0 0 8px #10b98122; }
}`,
    htmlCode: `<div class="slider-range-thumb"><input type="range" value="40" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-fill',
    name: 'Range Fill',
    category: 'sliders',
    tags: ['sliders', 'range', 'fill', 'progress', 'gradient'],
    difficulty: 'intermediate',
    description: 'A range slider with visible fill color showing selected range',
    cssCode: `.slider-range-fill {
  width: 160px; height: 30px;
  display: flex; align-items: center;
}
.slider-range-fill input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 8px; border-radius: 4px;
  background: linear-gradient(90deg, #10b981 0%, #10b981 60%, #2a2a3e 60%);
  outline: none;
}
.slider-range-fill input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #fff;
  cursor: pointer; box-shadow: 0 1px 4px #00000044;
  transition: transform 0.2s;
}
.slider-range-fill input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}`,
    htmlCode: `<div class="slider-range-fill"><input type="range" value="60" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-label',
    name: 'Range Label',
    category: 'sliders',
    tags: ['sliders', 'range', 'label', 'value', 'display'],
    difficulty: 'beginner',
    description: 'A range slider with value label displayed above the thumb',
    cssCode: `.slider-range-label {
  display: flex; flex-direction: column;
  align-items: center; gap: 4px; width: 160px;
}
.slider-range-label-value {
  background: #10b981; color: #fff;
  padding: 2px 8px; border-radius: 4px;
  font-size: 0.65rem; font-weight: 800;
}
.slider-range-label-track {
  width: 100%; height: 30px;
  display: flex; align-items: center;
}
.slider-range-label-track input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-label-track input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 2px 6px #10b98144;
}`,
    htmlCode: `<div class="slider-range-label"><div class="slider-range-label-value">60</div><div class="slider-range-label-track"><input type="range" value="60" min="0" max="100"></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-tooltip',
    name: 'Range Tooltip',
    category: 'sliders',
    tags: ['sliders', 'range', 'tooltip', 'value', 'floating'],
    difficulty: 'advanced',
    description: 'A range slider with floating tooltip showing current value',
    cssCode: `.slider-range-tooltip {
  position: relative; width: 160px;
  height: 34px; display: flex; align-items: center;
}
.slider-range-tooltip input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-tooltip input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; position: relative; z-index: 2;
}
.slider-range-tooltip-tip {
  position: absolute; top: -8px;
  left: 58%; transform: translateX(-50%);
  background: #1a1a2e; color: #10b981;
  padding: 2px 8px; border-radius: 4px;
  font-size: 0.55rem; font-weight: 800;
  border: 1px solid #10b98144;
  animation: tip-float 2s ease-in-out infinite;
}
.slider-range-tooltip-tip::after {
  content: ''; position: absolute;
  bottom: -4px; left: 50%; transform: translateX(-50%);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #10b98144;
}
@keyframes tip-float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-3px); }
}`,
    htmlCode: `<div class="slider-range-tooltip"><div class="slider-range-tooltip-tip">60</div><input type="range" value="60" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-step',
    name: 'Range Step',
    category: 'sliders',
    tags: ['sliders', 'range', 'step', 'discrete', 'snap'],
    difficulty: 'intermediate',
    description: 'A range slider with discrete step markers along the track',
    cssCode: `.slider-range-step {
  width: 160px; display: flex;
  flex-direction: column; gap: 4px;
}
.slider-range-step input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-step input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 2px 6px #10b98144;
}
.slider-range-step-marks {
  display: flex; justify-content: space-between;
  padding: 0 6px;
}
.slider-range-step-mark {
  width: 2px; height: 6px;
  background: #2a2a3e; border-radius: 1px;
}
.slider-range-step-mark.active { background: #10b981; }`,
    htmlCode: `<div class="slider-range-step"><input type="range" value="60" min="0" max="100" step="25"><div class="slider-range-step-marks"><div class="slider-range-step-mark active"></div><div class="slider-range-step-mark active"></div><div class="slider-range-step-mark active"></div><div class="slider-range-step-mark"></div><div class="slider-range-step-mark"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-tick',
    name: 'Range Tick',
    category: 'sliders',
    tags: ['sliders', 'range', 'tick', 'marks', 'scale'],
    difficulty: 'intermediate',
    description: 'A range slider with numbered tick marks and scale labels',
    cssCode: `.slider-range-tick {
  width: 170px;
}
.slider-range-tick input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-tick input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 14px; height: 14px;
  border-radius: 50%; background: #10b981;
  cursor: pointer;
}
.slider-range-tick-labels {
  display: flex; justify-content: space-between;
  margin-top: 2px;
}
.slider-range-tick-label {
  color: #4a4a5e; font-size: 0.45rem; font-weight: 600;
}
.slider-range-tick-label.active { color: #10b981; }`,
    htmlCode: `<div class="slider-range-tick"><input type="range" value="50" min="0" max="100"><div class="slider-range-tick-labels"><span class="slider-range-tick-label active">0</span><span class="slider-range-tick-label active">25</span><span class="slider-range-tick-label active">50</span><span class="slider-range-tick-label">75</span><span class="slider-range-tick-label">100</span></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-gradient',
    name: 'Range Gradient',
    category: 'sliders',
    tags: ['sliders', 'range', 'gradient', 'colorful', 'track'],
    difficulty: 'beginner',
    description: 'A range slider with gradient colored track from cool to warm',
    cssCode: `.slider-range-gradient {
  width: 160px; height: 30px;
  display: flex; align-items: center;
}
.slider-range-gradient input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 8px; border-radius: 4px;
  background: linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6);
  outline: none;
}
.slider-range-gradient input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 50%; background: #fff;
  cursor: pointer; box-shadow: 0 2px 8px #00000044;
  border: 2px solid #10b981;
  transition: transform 0.2s;
}
.slider-range-gradient input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}`,
    htmlCode: `<div class="slider-range-gradient"><input type="range" value="50" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-neon',
    name: 'Range Neon',
    category: 'sliders',
    tags: ['sliders', 'range', 'neon', 'glow', 'dark'],
    difficulty: 'advanced',
    description: 'A neon-styled range slider with glowing track and thumb effect',
    cssCode: `.slider-range-neon {
  width: 160px; height: 36px;
  display: flex; align-items: center;
}
.slider-range-neon input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 4px; border-radius: 2px;
  background: #2a2a3e; outline: none;
  box-shadow: 0 0 8px #10b98133;
}
.slider-range-neon input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 20px; height: 20px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 0 10px #10b981, 0 0 20px #10b98166, 0 0 30px #10b98133;
  animation: neon-pulse 1.5s ease-in-out infinite;
}
@keyframes neon-pulse {
  0%, 100% { box-shadow: 0 0 10px #10b981, 0 0 20px #10b98166; }
  50% { box-shadow: 0 0 14px #10b981, 0 0 28px #10b98188; }
}`,
    htmlCode: `<div class="slider-range-neon"><input type="range" value="50" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-glow',
    name: 'Range Glow',
    category: 'sliders',
    tags: ['sliders', 'range', 'glow', 'soft', 'light'],
    difficulty: 'intermediate',
    description: 'A range slider with soft glow effect emanating from the thumb',
    cssCode: `.slider-range-glow {
  width: 160px; height: 36px;
  display: flex; align-items: center;
}
.slider-range-glow input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-glow input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 50%; background: #10b981;
  cursor: pointer;
  box-shadow: 0 0 12px #10b98155, 0 0 24px #10b98122;
  transition: box-shadow 0.3s, transform 0.2s;
}
.slider-range-glow input[type=range]:active::-webkit-slider-thumb {
  box-shadow: 0 0 16px #10b98177, 0 0 32px #10b98144;
  transform: scale(1.1);
}`,
    htmlCode: `<div class="slider-range-glow"><input type="range" value="50" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-custom',
    name: 'Range Custom',
    category: 'sliders',
    tags: ['sliders', 'range', 'custom', 'shape', 'unique'],
    difficulty: 'advanced',
    description: 'A custom range slider with unique thumb shape and animated track',
    cssCode: `.slider-range-custom {
  width: 160px; height: 34px;
  display: flex; align-items: center;
}
.slider-range-custom input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 10px; border-radius: 5px;
  background: #2a2a3e; outline: none;
  position: relative;
}
.slider-range-custom input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 12px; height: 24px;
  border-radius: 6px; background: #10b981;
  cursor: pointer; box-shadow: 0 2px 8px #10b98144;
  border: 2px solid #1a1a2e;
  transition: transform 0.2s;
}
.slider-range-custom input[type=range]::-webkit-slider-thumb:hover {
  transform: scaleY(1.15);
}
.slider-range-custom input[type=range]:active::-webkit-slider-thumb {
  background: #34d399;
}`,
    htmlCode: `<div class="slider-range-custom"><input type="range" value="50" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-vertical',
    name: 'Range Vertical',
    category: 'sliders',
    tags: ['sliders', 'range', 'vertical', 'orientation', 'tall'],
    difficulty: 'intermediate',
    description: 'A vertically oriented range slider with custom styling',
    cssCode: `.slider-range-vertical {
  height: 120px; width: 34px;
  display: flex; align-items: center; justify-content: center;
}
.slider-range-vertical input[type=range] {
  -webkit-appearance: none; width: 100px;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
  transform: rotate(-90deg);
}
.slider-range-vertical input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 2px 6px #10b98144;
  transition: transform 0.2s;
}
.slider-range-vertical input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}`,
    htmlCode: `<div class="slider-range-vertical"><input type="range" value="50" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-dual',
    name: 'Range Dual',
    category: 'sliders',
    tags: ['sliders', 'range', 'dual', 'min-max', 'multi'],
    difficulty: 'advanced',
    description: 'A dual-range slider showing min and max selection with two thumbs',
    cssCode: `.slider-range-dual {
  width: 160px; height: 30px;
  display: flex; align-items: center;
  position: relative;
}
.slider-range-dual-track {
  position: absolute; width: 100%; height: 6px;
  background: #2a2a3e; border-radius: 3px;
}
.slider-range-dual-fill {
  position: absolute; height: 6px;
  background: #10b981; border-radius: 3px;
  left: 20%; right: 30%;
  animation: dual-fill 0.8s ease-out;
}
.slider-range-dual input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; background: transparent;
  outline: none; position: relative; z-index: 2;
  pointer-events: none;
}
.slider-range-dual input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; pointer-events: auto;
  box-shadow: 0 2px 6px #10b98144;
}
@keyframes dual-fill { from { left: 50%; right: 50%; } }`,
    htmlCode: `<div class="slider-range-dual"><div class="slider-range-dual-track"></div><div class="slider-range-dual-fill"></div><input type="range" value="20" min="0" max="100"><input type="range" value="70" min="0" max="100"></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-value',
    name: 'Range Value',
    category: 'sliders',
    tags: ['sliders', 'range', 'value', 'display', 'output'],
    difficulty: 'beginner',
    description: 'A range slider with a value output display next to it',
    cssCode: `.slider-range-value {
  display: flex; align-items: center; gap: 10px;
  width: 180px;
}
.slider-range-value input[type=range] {
  -webkit-appearance: none; flex: 1;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-value input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #10b981;
  cursor: pointer;
}
.slider-range-value-output {
  background: #1a1a2e; color: #10b981;
  padding: 4px 10px; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800;
  border: 1px solid #10b98133;
  min-width: 36px; text-align: center;
}`,
    htmlCode: `<div class="slider-range-value"><input type="range" value="50" min="0" max="100"><span class="slider-range-value-output">50</span></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-animate',
    name: 'Range Animate',
    category: 'sliders',
    tags: ['sliders', 'range', 'animate', 'auto', 'slide'],
    difficulty: 'advanced',
    description: 'A range slider with auto-animating thumb that slides back and forth',
    cssCode: `.slider-range-animate {
  width: 160px; height: 30px;
  display: flex; align-items: center;
  position: relative;
}
.slider-range-animate input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-animate input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 18px; height: 18px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 0 8px #10b98144;
}
.slider-range-animate-dot {
  position: absolute; left: 10%;
  width: 8px; height: 8px; border-radius: 50%;
  background: #10b981aa; top: 50%;
  transform: translateY(-50%);
  animation: auto-slide 3s ease-in-out infinite;
}
@keyframes auto-slide {
  0% { left: 10%; } 50% { left: 85%; } 100% { left: 10%; }
}`,
    htmlCode: `<div class="slider-range-animate"><input type="range" value="50" min="0" max="100"><div class="slider-range-animate-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-snap',
    name: 'Range Snap',
    category: 'sliders',
    tags: ['sliders', 'range', 'snap', 'click', 'positions'],
    difficulty: 'intermediate',
    description: 'A range slider with snap positions and visual click indicators',
    cssCode: `.slider-range-snap {
  width: 160px;
}
.slider-range-snap input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-snap input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 20px; height: 20px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; border: 3px solid #1a1a2e;
  box-shadow: 0 0 0 2px #10b98144;
  transition: transform 0.15s;
}
.slider-range-snap input[type=range]::-webkit-slider-thumb:active {
  transform: scale(0.9);
}
.slider-range-snap-dots {
  display: flex; justify-content: space-between;
  margin-top: 4px; padding: 0 6px;
}
.slider-range-snap-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #2a2a3e; transition: all 0.3s;
}
.slider-range-snap-dot.active {
  background: #10b981; box-shadow: 0 0 4px #10b98166;
}`,
    htmlCode: `<div class="slider-range-snap"><input type="range" value="50" min="0" max="100" step="25"><div class="slider-range-snap-dots"><div class="slider-range-snap-dot active"></div><div class="slider-range-snap-dot active"></div><div class="slider-range-snap-dot active"></div><div class="slider-range-snap-dot"></div><div class="slider-range-snap-dot"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-disabled',
    name: 'Range Disabled',
    category: 'sliders',
    tags: ['sliders', 'range', 'disabled', 'inactive', 'muted'],
    difficulty: 'beginner',
    description: 'A disabled range slider with muted styling and no-interaction state',
    cssCode: `.slider-range-disabled {
  width: 160px; height: 30px;
  display: flex; align-items: center;
  opacity: 0.5; pointer-events: none;
}
.slider-range-disabled input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #1a1a2e; outline: none;
}
.slider-range-disabled input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #4a4a5e;
  cursor: not-allowed;
}
.slider-range-disabled-label {
  color: #4a4a5e; font-size: 0.6rem;
  font-weight: 600; margin-top: 2px;
}`,
    htmlCode: `<div style="display:flex;flex-direction:column;gap:4px"><div class="slider-range-disabled"><input type="range" value="50" min="0" max="100" disabled></div><span class="slider-range-disabled-label">Disabled</span></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-min-max',
    name: 'Range Min Max',
    category: 'sliders',
    tags: ['sliders', 'range', 'min', 'max', 'labels'],
    difficulty: 'beginner',
    description: 'A range slider with min and max labels at each end',
    cssCode: `.slider-range-min-max {
  width: 170px;
}
.slider-range-min-max input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 6px; border-radius: 3px;
  background: #2a2a3e; outline: none;
}
.slider-range-min-max input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #10b981;
  cursor: pointer; box-shadow: 0 2px 6px #10b98144;
}
.slider-range-min-max-labels {
  display: flex; justify-content: space-between;
  margin-top: 4px;
}
.slider-range-min-max-label {
  color: #64748b; font-size: 0.5rem; font-weight: 700;
}`,
    htmlCode: `<div class="slider-range-min-max"><input type="range" value="500" min="0" max="1000"><div class="slider-range-min-max-labels"><span class="slider-range-min-max-label">$0</span><span class="slider-range-min-max-label">$1,000</span></div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-multi-thumb',
    name: 'Range Multi Thumb',
    category: 'sliders',
    tags: ['sliders', 'range', 'multi', 'thumb', 'points'],
    difficulty: 'advanced',
    description: 'A range slider visualization with multiple thumb points and connections',
    cssCode: `.slider-range-multi-thumb {
  width: 160px; height: 50px;
  position: relative; padding-top: 10px;
}
.slider-range-multi-thumb-track {
  height: 4px; background: #2a2a3e;
  border-radius: 2px; position: relative;
}
.slider-range-multi-thumb-fill {
  position: absolute; height: 100%;
  background: #10b981; border-radius: 2px;
  left: 15%; width: 60%;
  animation: multi-fill 0.8s ease-out;
}
.slider-range-multi-thumb-point {
  position: absolute; top: 50%;
  transform: translate(-50%, -50%);
  width: 14px; height: 14px; border-radius: 50%;
  background: #10b981; border: 2px solid #1a1a2e;
  cursor: pointer; z-index: 2;
  transition: transform 0.2s;
}
.slider-range-multi-thumb-point:hover { transform: translate(-50%, -50%) scale(1.3); }
.slider-range-multi-thumb-point:nth-child(2) { left: 15%; }
.slider-range-multi-thumb-point:nth-child(3) { left: 50%; }
.slider-range-multi-thumb-point:nth-child(4) { left: 75%; }
@keyframes multi-fill { from { width: 0; left: 15%; } }
.slider-range-multi-thumb-label {
  color: #64748b; font-size: 0.5rem;
  font-weight: 600; margin-top: 8px;
}`,
    htmlCode: `<div class="slider-range-multi-thumb"><div class="slider-range-multi-thumb-track"><div class="slider-range-multi-thumb-fill"></div><div class="slider-range-multi-thumb-point"></div><div class="slider-range-multi-thumb-point"></div><div class="slider-range-multi-thumb-point"></div></div><div class="slider-range-multi-thumb-label">3 points selected</div></div>`,
    isNew: true,
  },
  {
    id: 'slider-range-segment',
    name: 'Range Segment',
    category: 'sliders',
    tags: ['sliders', 'range', 'segment', 'colored', 'sections'],
    difficulty: 'advanced',
    description: 'A range slider with segmented track sections in different colors',
    cssCode: `.slider-range-segment {
  width: 170px; height: 34px;
  display: flex; align-items: center;
  position: relative;
}
.slider-range-segment-track {
  position: absolute; width: 100%; height: 8px;
  border-radius: 4px; overflow: hidden;
  display: flex;
}
.slider-range-segment-sec {
  height: 100%; flex: 1;
}
.slider-range-segment-sec:nth-child(1) { background: #10b981; }
.slider-range-segment-sec:nth-child(2) { background: #3b82f6; }
.slider-range-segment-sec:nth-child(3) { background: #8b5cf6; }
.slider-range-segment-sec:nth-child(4) { background: #f59e0b; }
.slider-range-segment input[type=range] {
  -webkit-appearance: none; width: 100%;
  height: 8px; background: transparent;
  outline: none; position: relative; z-index: 2;
}
.slider-range-segment input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px;
  border-radius: 50%; background: #fff;
  cursor: pointer; box-shadow: 0 2px 6px #00000066;
}`,
    htmlCode: `<div class="slider-range-segment"><div class="slider-range-segment-track"><div class="slider-range-segment-sec"></div><div class="slider-range-segment-sec"></div><div class="slider-range-segment-sec"></div><div class="slider-range-segment-sec"></div></div><input type="range" value="50" min="0" max="100"></div>`,
    isNew: true,
  },
];
