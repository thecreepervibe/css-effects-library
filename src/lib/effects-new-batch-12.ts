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

export const effectsNewBatch12: CSSEffect[] = [
  // ==================== ECOMMERCE (20) ====================
  {
    id: 'ecommerce-product-card-shine',
    name: 'Product Card Shine',
    category: 'ecommerce',
    tags: ['ecommerce', 'card', 'shine', 'hover', 'product'],
    difficulty: 'intermediate',
    description: 'A product card with a sweeping shine effect that glides across on hover',
    cssCode: `.product-card-shine {
  width: 160px;
  height: 200px;
  background: #1a1a2e;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.product-card-shine::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(115deg, transparent 40%, #10b98122 45%, #10b98144 50%, #10b98122 55%, transparent 60%);
  animation: card-shine 3s ease-in-out infinite;
}
.product-card-shine-label {
  position: absolute;
  bottom: 12px;
  left: 12px;
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
}
@keyframes card-shine {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}`,
    htmlCode: `<div class="product-card-shine"><span class="product-card-shine-label">$49.99</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-add-to-cart-bounce',
    name: 'Add to Cart Bounce',
    category: 'ecommerce',
    tags: ['ecommerce', 'button', 'cart', 'bounce', 'add'],
    difficulty: 'beginner',
    description: 'An add-to-cart button that bounces satisfyingly when clicked',
    cssCode: `.add-cart-bounce {
  padding: 10px 24px;
  background: #10b981;
  color: #0a0a1a;
  border: none;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
  cursor: pointer;
  animation: cart-bounce 2s ease-in-out infinite;
}
@keyframes cart-bounce {
  0%, 70%, 100% { transform: scale(1); }
  75% { transform: scale(0.92); }
  80% { transform: scale(1.08); }
  85% { transform: scale(0.98); }
  90% { transform: scale(1.02); }
}`,
    htmlCode: `<button class="add-cart-bounce">Add to Cart</button>`,
    isNew: true,
  },
  {
    id: 'ecommerce-price-tag-ribbon',
    name: 'Price Tag Ribbon',
    category: 'ecommerce',
    tags: ['ecommerce', 'price', 'tag', 'ribbon', 'sale'],
    difficulty: 'intermediate',
    description: 'A price tag with a diagonal ribbon corner showing discount percentage',
    cssCode: `.price-tag-ribbon {
  width: 140px;
  height: 100px;
  background: #1a1a2e;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
}
.price-tag-ribbon::before {
  content: '-30%';
  position: absolute;
  top: 14px;
  right: -28px;
  background: #10b981;
  color: #0a0a1a;
  font-size: 0.6rem;
  font-weight: 800;
  padding: 4px 30px;
  transform: rotate(45deg);
  animation: ribbon-pulse 2s ease-in-out infinite;
}
@keyframes ribbon-pulse {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; filter: brightness(1.2); }
}`,
    htmlCode: `<div class="price-tag-ribbon">$34.99</div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-discount-badge-glow',
    name: 'Discount Badge Glow',
    category: 'ecommerce',
    tags: ['ecommerce', 'discount', 'badge', 'glow', 'sale'],
    difficulty: 'beginner',
    description: 'A discount badge with an animated glow to attract attention',
    cssCode: `.discount-badge-glow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #10b981;
  color: #0a0a1a;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 900;
  animation: badge-glow 2s ease-in-out infinite;
}
@keyframes badge-glow {
  0%, 100% { box-shadow: 0 0 8px #10b98144; }
  50% { box-shadow: 0 0 20px #10b98188, 0 0 40px #10b98144; }
}`,
    htmlCode: `<div class="discount-badge-glow">-50%</div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-cart-slide',
    name: 'Cart Slide Animation',
    category: 'ecommerce',
    tags: ['ecommerce', 'cart', 'slide', 'animation', 'shopping'],
    difficulty: 'intermediate',
    description: 'A shopping cart icon that slides and bounces when an item is added',
    cssCode: `.cart-slide {
  width: 60px;
  height: 50px;
  background: #1a1a2e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border: 1px solid #2a2a3e;
  animation: cart-slide-in 1.5s ease-in-out infinite;
  position: relative;
}
.cart-slide::after {
  content: '2';
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  background: #10b981;
  color: #0a0a1a;
  border-radius: 50%;
  font-size: 0.55rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: badge-pop 1.5s ease-in-out infinite;
}
@keyframes cart-slide-in {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(8px); }
  50% { transform: translateX(-4px); }
}
@keyframes badge-pop {
  0%, 40% { transform: scale(0); }
  50% { transform: scale(1.3); }
  60% { transform: scale(1); }
}`,
    htmlCode: `<div class="cart-slide">&#128722;</div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-checkout-progress',
    name: 'Checkout Progress Bar',
    category: 'ecommerce',
    tags: ['ecommerce', 'checkout', 'progress', 'steps', 'bar'],
    difficulty: 'intermediate',
    description: 'An animated checkout progress bar showing steps from cart to confirmation',
    cssCode: `.checkout-progress {
  width: 200px;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}
.checkout-progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 3px;
  animation: progress-fill 3s ease-in-out infinite;
}
.checkout-progress-steps {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}
.checkout-progress-step {
  font-size: 0.5rem;
  color: #64748b;
  animation: step-highlight 3s ease-in-out infinite;
}
.checkout-progress-step:nth-child(2) { animation-delay: 0.5s; }
.checkout-progress-step:nth-child(3) { animation-delay: 1s; }
@keyframes progress-fill {
  0% { width: 0%; }
  33% { width: 33%; }
  66% { width: 66%; }
  100% { width: 100%; }
}
@keyframes step-highlight {
  0%, 100% { color: #64748b; }
  50% { color: #10b981; }
}`,
    htmlCode: `<div class="checkout-progress"><div class="checkout-progress-fill"></div></div><div class="checkout-progress-steps"><span class="checkout-progress-step">Cart</span><span class="checkout-progress-step">Pay</span><span class="checkout-progress-step">Done</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-product-zoom',
    name: 'Product Zoom Lens',
    category: 'ecommerce',
    tags: ['ecommerce', 'product', 'zoom', 'lens', 'magnify'],
    difficulty: 'advanced',
    description: 'A zoom lens effect that magnifies part of a product image on hover',
    cssCode: `.product-zoom {
  width: 160px;
  height: 120px;
  background: linear-gradient(135deg, #1a1a2e, #2a2a3e, #1a1a2e);
  background-size: 200% 200%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  animation: zoom-bg 5s ease-in-out infinite;
}
.product-zoom::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #10b981;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: lens-move 3s ease-in-out infinite;
  box-shadow: 0 0 10px #10b98144, inset 0 0 10px #10b98122;
}
@keyframes zoom-bg {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}
@keyframes lens-move {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  25% { transform: translate(-30%, -70%) scale(1.2); }
  75% { transform: translate(-70%, -30%) scale(1.2); }
}`,
    htmlCode: `<div class="product-zoom"></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-wishlist-heart',
    name: 'Wishlist Heart Beat',
    category: 'ecommerce',
    tags: ['ecommerce', 'wishlist', 'heart', 'beat', 'favorite'],
    difficulty: 'beginner',
    description: 'A wishlist heart icon with a realistic heartbeat animation',
    cssCode: `.wishlist-heart {
  width: 50px;
  height: 50px;
  background: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: heart-beat 1.2s ease-in-out infinite;
}
.wishlist-heart::after {
  content: '\\2665';
  color: #10b981;
  font-size: 1.4rem;
}
@keyframes heart-beat {
  0%, 40%, 100% { transform: scale(1); }
  10% { transform: scale(1.15); }
  20% { transform: scale(1); }
  30% { transform: scale(1.1); }
}`,
    htmlCode: `<div class="wishlist-heart"></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-rating-stars',
    name: 'Rating Stars Fill',
    category: 'ecommerce',
    tags: ['ecommerce', 'rating', 'stars', 'fill', 'review'],
    difficulty: 'intermediate',
    description: 'Star rating that fills up progressively with a golden shine',
    cssCode: `.rating-stars-fill {
  display: flex;
  gap: 4px;
}
.rating-star {
  font-size: 1.2rem;
  color: #2a2a3e;
  position: relative;
  animation: star-fill 2.5s ease-in-out infinite;
}
.rating-star:nth-child(1) { animation-delay: 0s; }
.rating-star:nth-child(2) { animation-delay: 0.3s; }
.rating-star:nth-child(3) { animation-delay: 0.6s; }
.rating-star:nth-child(4) { animation-delay: 0.9s; }
.rating-star:nth-child(5) { animation-delay: 1.2s; }
@keyframes star-fill {
  0%, 10% { color: #2a2a3e; transform: scale(1); }
  20% { color: #10b981; transform: scale(1.2); }
  30%, 100% { color: #10b981; transform: scale(1); }
}`,
    htmlCode: `<div class="rating-stars-fill"><span class="rating-star">&#9733;</span><span class="rating-star">&#9733;</span><span class="rating-star">&#9733;</span><span class="rating-star">&#9733;</span><span class="rating-star">&#9733;</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-coupon-clip',
    name: 'Coupon Clip Cut',
    category: 'ecommerce',
    tags: ['ecommerce', 'coupon', 'clip', 'cut', 'discount'],
    difficulty: 'intermediate',
    description: 'A coupon with dashed cut line and a scissors cutting animation',
    cssCode: `.coupon-clip {
  width: 180px;
  height: 70px;
  background: #1a1a2e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px dashed #10b98166;
}
.coupon-clip-left {
  flex: 1;
  padding: 8px 12px;
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 900;
}
.coupon-clip-right {
  padding: 8px 14px;
  background: #10b98122;
  color: #10b981;
  font-size: 0.6rem;
  font-weight: 700;
  border-left: 1px dashed #10b98144;
}
.coupon-clip::before {
  content: '\\2702';
  position: absolute;
  top: 50%;
  left: -20px;
  font-size: 0.9rem;
  animation: scissors-cut 3s ease-in-out infinite;
}
@keyframes scissors-cut {
  0%, 100% { left: -20px; opacity: 0; }
  10% { opacity: 1; }
  80% { left: 170px; opacity: 1; }
  90% { opacity: 0; }
}`,
    htmlCode: `<div class="coupon-clip"><div class="coupon-clip-left">SAVE20</div><div class="coupon-clip-right">20% OFF</div></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-sale-countdown',
    name: 'Sale Countdown Timer',
    category: 'ecommerce',
    tags: ['ecommerce', 'sale', 'countdown', 'timer', 'urgency'],
    difficulty: 'advanced',
    description: 'A sale countdown timer with digits that flip and pulse with urgency',
    cssCode: `.sale-countdown {
  display: flex;
  gap: 6px;
  align-items: center;
}
.countdown-block {
  width: 36px;
  height: 44px;
  background: #1a1a2e;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 1rem;
  font-weight: 900;
  border: 1px solid #2a2a3e;
  position: relative;
  animation: digit-flip 4s ease-in-out infinite;
}
.countdown-sep {
  color: #10b981;
  font-weight: 900;
  animation: colon-blink 1s step-end infinite;
}
.countdown-block:nth-child(3) { animation-delay: 0.5s; }
@keyframes digit-flip {
  0%, 90%, 100% { transform: perspective(200px) rotateX(0); }
  95% { transform: perspective(200px) rotateX(-15deg); background: #10b98122; }
}
@keyframes colon-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,
    htmlCode: `<div class="sale-countdown"><span class="countdown-block">02</span><span class="countdown-sep">:</span><span class="countdown-block">14</span><span class="countdown-sep">:</span><span class="countdown-block">36</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-stock-indicator',
    name: 'Stock Level Indicator',
    category: 'ecommerce',
    tags: ['ecommerce', 'stock', 'indicator', 'scarcity', 'level'],
    difficulty: 'intermediate',
    description: 'A stock level indicator bar that pulses with urgency when inventory is low',
    cssCode: `.stock-indicator {
  width: 160px;
  padding: 8px;
  background: #1a1a2e;
  border-radius: 8px;
  text-align: center;
}
.stock-indicator-label {
  color: #f59e0b;
  font-size: 0.55rem;
  font-weight: 700;
  margin-bottom: 6px;
  animation: stock-warn 1.5s ease-in-out infinite;
}
.stock-indicator-bar {
  width: 100%;
  height: 6px;
  background: #2a2a3e;
  border-radius: 3px;
  overflow: hidden;
}
.stock-indicator-fill {
  width: 18%;
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  border-radius: 3px;
  animation: stock-pulse 1.5s ease-in-out infinite;
}
@keyframes stock-warn {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
@keyframes stock-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}`,
    htmlCode: `<div class="stock-indicator"><div class="stock-indicator-label">Only 3 left!</div><div class="stock-indicator-bar"><div class="stock-indicator-fill"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-delivery-tracker',
    name: 'Delivery Tracker',
    category: 'ecommerce',
    tags: ['ecommerce', 'delivery', 'tracker', 'shipping', 'progress'],
    difficulty: 'intermediate',
    description: 'A delivery tracking animation with a moving dot along the route path',
    cssCode: `.delivery-tracker {
  width: 180px;
  height: 40px;
  position: relative;
}
.delivery-tracker-line {
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  height: 3px;
  background: #2a2a3e;
  border-radius: 2px;
  transform: translateY(-50%);
}
.delivery-tracker-dot {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  transform: translateY(-50%);
  animation: deliver-move 3s ease-in-out infinite;
  box-shadow: 0 0 8px #10b98166;
}
.delivery-tracker-end {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
}
@keyframes deliver-move {
  0% { left: 6px; }
  100% { left: calc(100% - 16px); }
}`,
    htmlCode: `<div class="delivery-tracker"><div class="delivery-tracker-line"></div><div class="delivery-tracker-dot"></div><span class="delivery-tracker-end">&#127968;</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-size-selector',
    name: 'Size Selector Ring',
    category: 'ecommerce',
    tags: ['ecommerce', 'size', 'selector', 'ring', 'clothing'],
    difficulty: 'beginner',
    description: 'A size selector with a sliding ring indicator that moves between options',
    cssCode: `.size-selector {
  display: flex;
  gap: 6px;
}
.size-option {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.6rem;
  font-weight: 700;
  animation: size-cycle 4s ease-in-out infinite;
}
.size-option:nth-child(2) { animation-delay: 1s; }
.size-option:nth-child(3) { animation-delay: 2s; }
.size-option:nth-child(4) { animation-delay: 3s; }
@keyframes size-cycle {
  0%, 20% { border-color: #2a2a3e; color: #64748b; }
  25%, 45% { border-color: #10b981; color: #10b981; box-shadow: 0 0 8px #10b98144; }
  50%, 100% { border-color: #2a2a3e; color: #64748b; box-shadow: none; }
}`,
    htmlCode: `<div class="size-selector"><span class="size-option">S</span><span class="size-option">M</span><span class="size-option">L</span><span class="size-option">XL</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-color-swatch',
    name: 'Color Swatch Picker',
    category: 'ecommerce',
    tags: ['ecommerce', 'color', 'swatch', 'picker', 'variant'],
    difficulty: 'beginner',
    description: 'Color swatch circles with a pulsing ring on the selected color',
    cssCode: `.color-swatch {
  display: flex;
  gap: 8px;
}
.swatch-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  animation: swatch-pick 3s ease-in-out infinite;
}
.swatch-dot:nth-child(1) { background: #10b981; }
.swatch-dot:nth-child(2) { background: #3b82f6; animation-delay: 1s; }
.swatch-dot:nth-child(3) { background: #8b5cf6; animation-delay: 2s; }
.swatch-dot:nth-child(4) { background: #ef4444; }
@keyframes swatch-pick {
  0%, 30% { box-shadow: 0 0 0 0px #10b98144; }
  35%, 65% { box-shadow: 0 0 0 4px #10b98144; }
  70%, 100% { box-shadow: 0 0 0 0px #10b98144; }
}`,
    htmlCode: `<div class="color-swatch"><span class="swatch-dot"></span><span class="swatch-dot"></span><span class="swatch-dot"></span><span class="swatch-dot"></span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-quantity-control',
    name: 'Quantity Stepper',
    category: 'ecommerce',
    tags: ['ecommerce', 'quantity', 'stepper', 'control', 'counter'],
    difficulty: 'intermediate',
    description: 'A quantity control with animated number changes and +/- buttons',
    cssCode: `.quantity-stepper {
  display: flex;
  align-items: center;
  gap: 0;
  background: #1a1a2e;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2a2a3e;
}
.qty-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  animation: qty-tap 2s ease-in-out infinite;
}
.qty-btn:last-child { animation-delay: 0.3s; }
.qty-value {
  width: 36px;
  text-align: center;
  color: #e2e8f0;
  font-size: 0.8rem;
  font-weight: 700;
  animation: qty-change 2s ease-in-out infinite;
}
@keyframes qty-tap {
  0%, 40%, 60%, 100% { background: transparent; }
  50% { background: #10b98122; }
}
@keyframes qty-change {
  0%, 40% { transform: scale(1); }
  45% { transform: scale(1.3); color: #10b981; }
  55% { transform: scale(1); }
}`,
    htmlCode: `<div class="quantity-stepper"><span class="qty-btn">-</span><span class="qty-value">3</span><span class="qty-btn">+</span></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-review-highlight',
    name: 'Review Highlight Card',
    category: 'ecommerce',
    tags: ['ecommerce', 'review', 'highlight', 'card', 'testimonial'],
    difficulty: 'intermediate',
    description: 'A review highlight card that slides in with a star rating reveal',
    cssCode: `.review-highlight {
  width: 180px;
  padding: 12px;
  background: #1a1a2e;
  border-radius: 10px;
  border: 1px solid #2a2a3e;
  animation: review-slide 3s ease-in-out infinite;
}
.review-highlight-stars {
  color: #10b981;
  font-size: 0.7rem;
  margin-bottom: 6px;
  animation: star-reveal 3s ease-in-out infinite;
}
.review-highlight-text {
  color: #94a3b8;
  font-size: 0.6rem;
  line-height: 1.4;
}
@keyframes review-slide {
  0%, 100% { transform: translateY(4px); opacity: 0.7; }
  30%, 70% { transform: translateY(0); opacity: 1; }
}
@keyframes star-reveal {
  0%, 20% { letter-spacing: 4px; opacity: 0; }
  40%, 80% { letter-spacing: 1px; opacity: 1; }
}`,
    htmlCode: `<div class="review-highlight"><div class="review-highlight-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="review-highlight-text">"Absolutely love this product! Best purchase ever."</div></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-trust-badge',
    name: 'Trust Badge Seal',
    category: 'ecommerce',
    tags: ['ecommerce', 'trust', 'badge', 'seal', 'security'],
    difficulty: 'intermediate',
    description: 'A trust badge with a shield shape and secure checkmark animation',
    cssCode: `.trust-badge-seal {
  width: 60px;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.trust-badge-seal::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #10b981;
  clip-path: polygon(50% 0%, 100% 15%, 100% 65%, 50% 100%, 0% 65%, 0% 15%);
  animation: seal-glow 2s ease-in-out infinite;
}
.trust-badge-seal::after {
  content: '\\2713';
  position: relative;
  z-index: 1;
  color: #0a0a1a;
  font-size: 1.4rem;
  font-weight: 900;
  animation: check-pop 2s ease-in-out infinite;
}
@keyframes seal-glow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); box-shadow: 0 0 15px #10b98144; }
}
@keyframes check-pop {
  0%, 80%, 100% { transform: scale(1); }
  85% { transform: scale(1.2); }
  90% { transform: scale(0.95); }
}`,
    htmlCode: `<div class="trust-badge-seal"></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-payment-icon-stack',
    name: 'Payment Icon Stack',
    category: 'ecommerce',
    tags: ['ecommerce', 'payment', 'icons', 'stack', 'cards'],
    difficulty: 'beginner',
    description: 'Stacked payment card icons with a subtle fan-out animation',
    cssCode: `.payment-stack {
  display: flex;
  gap: 0;
  position: relative;
  width: 120px;
  height: 40px;
}
.payment-card {
  width: 40px;
  height: 28px;
  border-radius: 4px;
  position: absolute;
  top: 6px;
  border: 1px solid #2a2a3e;
  animation: card-fan 3s ease-in-out infinite;
}
.payment-card:nth-child(1) { background: #10b98133; left: 0; z-index: 3; }
.payment-card:nth-child(2) { background: #3b82f633; left: 20px; z-index: 2; animation-delay: 0.2s; }
.payment-card:nth-child(3) { background: #8b5cf633; left: 40px; z-index: 1; animation-delay: 0.4s; }
@keyframes card-fan {
  0%, 60%, 100% { transform: rotate(0deg) translateY(0); }
  30% { transform: rotate(-5deg) translateY(-4px); }
}`,
    htmlCode: `<div class="payment-stack"><div class="payment-card"></div><div class="payment-card"></div><div class="payment-card"></div></div>`,
    isNew: true,
  },
  {
    id: 'ecommerce-order-confirmation',
    name: 'Order Confirmation Check',
    category: 'ecommerce',
    tags: ['ecommerce', 'order', 'confirmation', 'check', 'success'],
    difficulty: 'advanced',
    description: 'An order confirmation with an animated checkmark that draws itself in',
    cssCode: `.order-confirm {
  width: 80px;
  height: 80px;
  background: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: confirm-pop 2s ease-in-out infinite;
}
.order-confirm::before {
  content: '';
  width: 30px;
  height: 16px;
  border-left: 3px solid #10b981;
  border-bottom: 3px solid #10b981;
  transform: rotate(-45deg) scale(0);
  animation: check-draw 2s ease-in-out infinite;
}
@keyframes confirm-pop {
  0%, 100% { box-shadow: 0 0 0 0 #10b98144; }
  30% { box-shadow: 0 0 0 12px #10b98100; }
}
@keyframes check-draw {
  0%, 20% { transform: rotate(-45deg) scale(0); opacity: 0; }
  40%, 80% { transform: rotate(-45deg) scale(1); opacity: 1; }
  90%, 100% { transform: rotate(-45deg) scale(1); opacity: 0.5; }
}`,
    htmlCode: `<div class="order-confirm"></div>`,
    isNew: true,
  },

  // ==================== WEATHER (20) ====================
  {
    id: 'weather-rain-drops',
    name: 'Rain Drops',
    category: 'weather',
    tags: ['weather', 'rain', 'drops', 'fall', 'water'],
    difficulty: 'intermediate',
    description: 'Animated rain drops falling with varying speeds and opacity',
    cssCode: `.rain-container {
  width: 160px;
  height: 120px;
  background: #0a0a1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.rain-drop {
  position: absolute;
  width: 2px;
  height: 12px;
  background: linear-gradient(to bottom, transparent, #10b98188);
  border-radius: 1px;
  animation: rain-fall 0.8s linear infinite;
}
.rain-drop:nth-child(1) { left: 20%; animation-duration: 0.7s; }
.rain-drop:nth-child(2) { left: 40%; animation-duration: 0.5s; animation-delay: 0.2s; }
.rain-drop:nth-child(3) { left: 60%; animation-duration: 0.9s; animation-delay: 0.1s; }
.rain-drop:nth-child(4) { left: 80%; animation-duration: 0.6s; animation-delay: 0.3s; }
@keyframes rain-fall {
  0% { top: -15px; opacity: 0; }
  20% { opacity: 1; }
  100% { top: 110%; opacity: 0.3; }
}`,
    htmlCode: `<div class="rain-container"><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-drop"></div><div class="rain-drop"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-snow-fall',
    name: 'Snow Fall',
    category: 'weather',
    tags: ['weather', 'snow', 'fall', 'winter', 'flake'],
    difficulty: 'intermediate',
    description: 'Gently falling snowflakes that sway side to side as they descend',
    cssCode: `.snow-container {
  width: 160px;
  height: 120px;
  background: #0f0f1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.snowflake {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #e2e8f0;
  border-radius: 50%;
  opacity: 0.8;
  animation: snow-drift 3s linear infinite;
}
.snowflake:nth-child(1) { left: 15%; animation-duration: 2.5s; }
.snowflake:nth-child(2) { left: 35%; animation-duration: 3.5s; animation-delay: 0.5s; width: 4px; height: 4px; }
.snowflake:nth-child(3) { left: 55%; animation-duration: 2.8s; animation-delay: 1s; }
.snowflake:nth-child(4) { left: 75%; animation-duration: 3.2s; animation-delay: 0.3s; width: 5px; height: 5px; }
@keyframes snow-drift {
  0% { top: -10px; transform: translateX(0); }
  25% { transform: translateX(10px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(8px); }
  100% { top: 110%; transform: translateX(0); }
}`,
    htmlCode: `<div class="snow-container"><div class="snowflake"></div><div class="snowflake"></div><div class="snowflake"></div><div class="snowflake"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-sun-rays',
    name: 'Sun Rays Rotate',
    category: 'weather',
    tags: ['weather', 'sun', 'rays', 'rotate', 'warm'],
    difficulty: 'beginner',
    description: 'A glowing sun with rotating rays radiating outward',
    cssCode: `.sun-rays {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sun-core {
  width: 30px;
  height: 30px;
  background: #f59e0b;
  border-radius: 50%;
  box-shadow: 0 0 20px #f59e0b66, 0 0 40px #f59e0b33;
  z-index: 1;
}
.sun-rays::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, transparent, #f59e0b33 10%, transparent 20%);
  border-radius: 50%;
  animation: sun-spin 8s linear infinite;
}
@keyframes sun-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="sun-rays"><div class="sun-core"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-cloud-float',
    name: 'Cloud Float',
    category: 'weather',
    tags: ['weather', 'cloud', 'float', 'sky', 'drift'],
    difficulty: 'beginner',
    description: 'A fluffy cloud that floats gently across the sky',
    cssCode: `.cloud-float {
  width: 80px;
  height: 40px;
  background: #e2e8f0;
  border-radius: 40px;
  position: relative;
  animation: cloud-drift 6s ease-in-out infinite;
}
.cloud-float::before {
  content: '';
  position: absolute;
  width: 36px;
  height: 36px;
  background: #e2e8f0;
  border-radius: 50%;
  top: -18px;
  left: 14px;
}
.cloud-float::after {
  content: '';
  position: absolute;
  width: 26px;
  height: 26px;
  background: #e2e8f0;
  border-radius: 50%;
  top: -10px;
  right: 16px;
}
@keyframes cloud-drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }
}`,
    htmlCode: `<div class="cloud-float"></div>`,
    isNew: true,
  },
  {
    id: 'weather-lightning-flash',
    name: 'Lightning Flash',
    category: 'weather',
    tags: ['weather', 'lightning', 'flash', 'storm', 'electric'],
    difficulty: 'advanced',
    description: 'A dramatic lightning bolt flash with rapid bright pulses on dark background',
    cssCode: `.lightning-flash {
  width: 160px;
  height: 120px;
  background: #0a0a1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  animation: storm-flash 4s ease-in-out infinite;
}
.lightning-bolt {
  position: absolute;
  top: 10px;
  left: 50%;
  width: 3px;
  height: 60px;
  background: #f59e0b;
  clip-path: polygon(50% 0%, 70% 35%, 55% 35%, 80% 70%, 45% 70%, 65% 100%, 0% 55%, 35% 55%, 15% 25%, 40% 25%);
  transform: translateX(-50%);
  animation: bolt-strike 4s ease-in-out infinite;
}
@keyframes storm-flash {
  0%, 20%, 25%, 28%, 100% { background: #0a0a1a; }
  22% { background: #1a1a3e; }
  26% { background: #2a2a4e; }
}
@keyframes bolt-strike {
  0%, 20%, 28%, 100% { opacity: 0; }
  22%, 26% { opacity: 1; filter: brightness(2); }
}`,
    htmlCode: `<div class="lightning-flash"><div class="lightning-bolt"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-fog-layers',
    name: 'Fog Layers',
    category: 'weather',
    tags: ['weather', 'fog', 'layers', 'mist', 'atmosphere'],
    difficulty: 'intermediate',
    description: 'Layered fog that drifts at different speeds creating depth',
    cssCode: `.fog-layers {
  width: 160px;
  height: 100px;
  background: #0f0f1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.fog-layer {
  position: absolute;
  width: 200%;
  height: 40px;
  background: linear-gradient(90deg, transparent, #e2e8f011, #e2e8f022, #e2e8f011, transparent);
  animation: fog-drift 8s linear infinite;
}
.fog-layer:nth-child(1) { top: 20%; animation-duration: 6s; }
.fog-layer:nth-child(2) { top: 40%; animation-duration: 9s; animation-delay: -3s; opacity: 0.7; }
.fog-layer:nth-child(3) { top: 60%; animation-duration: 12s; animation-delay: -6s; opacity: 0.5; }
@keyframes fog-drift {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}`,
    htmlCode: `<div class="fog-layers"><div class="fog-layer"></div><div class="fog-layer"></div><div class="fog-layer"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-wind-lines',
    name: 'Wind Lines',
    category: 'weather',
    tags: ['weather', 'wind', 'lines', 'breeze', 'flow'],
    difficulty: 'beginner',
    description: 'Animated wind lines that flow across with varying lengths and speeds',
    cssCode: `.wind-lines {
  width: 160px;
  height: 80px;
  position: relative;
}
.wind-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b98166, #10b981, #10b98166, transparent);
  border-radius: 1px;
  animation: wind-blow 2s ease-in-out infinite;
}
.wind-line:nth-child(1) { width: 80px; top: 20%; animation-duration: 1.5s; }
.wind-line:nth-child(2) { width: 60px; top: 45%; animation-duration: 2s; animation-delay: 0.3s; }
.wind-line:nth-child(3) { width: 100px; top: 70%; animation-duration: 1.8s; animation-delay: 0.6s; }
@keyframes wind-blow {
  0% { left: -100px; opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { left: 160px; opacity: 0; }
}`,
    htmlCode: `<div class="wind-lines"><div class="wind-line"></div><div class="wind-line"></div><div class="wind-line"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-leaf-falling',
    name: 'Leaf Falling',
    category: 'weather',
    tags: ['weather', 'leaf', 'falling', 'autumn', 'nature'],
    difficulty: 'intermediate',
    description: 'A leaf that sways side to side while gently falling downward',
    cssCode: `.leaf-falling {
  width: 120px;
  height: 140px;
  position: relative;
}
.leaf {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #10b981;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  animation: leaf-sway 3s ease-in-out infinite;
}
.leaf::after {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background: #059669;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes leaf-sway {
  0% { top: -10px; left: 50px; transform: rotate(45deg); opacity: 0; }
  10% { opacity: 1; }
  25% { left: 80px; transform: rotate(65deg); }
  50% { left: 40px; transform: rotate(25deg); }
  75% { left: 70px; transform: rotate(55deg); }
  100% { top: 120px; left: 55px; transform: rotate(45deg); opacity: 0.3; }
}`,
    htmlCode: `<div class="leaf-falling"><div class="leaf"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-wave-ocean',
    name: 'Ocean Wave',
    category: 'weather',
    tags: ['weather', 'ocean', 'wave', 'water', 'sea'],
    difficulty: 'intermediate',
    description: 'Layered ocean waves with a smooth rolling motion',
    cssCode: `.ocean-wave {
  width: 180px;
  height: 80px;
  background: #0a0a1a;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.wave-layer {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 40px;
  border-radius: 50% 50% 0 0;
  animation: wave-roll 3s ease-in-out infinite;
}
.wave-layer:nth-child(1) { background: #10b98122; bottom: 0; }
.wave-layer:nth-child(2) { background: #10b98144; bottom: 5px; animation-delay: -1s; animation-duration: 4s; }
.wave-layer:nth-child(3) { background: #10b98166; bottom: 10px; animation-delay: -2s; animation-duration: 5s; }
@keyframes wave-roll {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-25%); }
}`,
    htmlCode: `<div class="ocean-wave"><div class="wave-layer"></div><div class="wave-layer"></div><div class="wave-layer"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-fire-flame',
    name: 'Fire Flame',
    category: 'weather',
    tags: ['weather', 'fire', 'flame', 'burn', 'heat'],
    difficulty: 'advanced',
    description: 'A flickering flame effect with multiple layered fire tongues',
    cssCode: `.fire-flame {
  width: 60px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.flame {
  position: absolute;
  bottom: 0;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: flicker 0.5s ease-in-out infinite alternate;
}
.flame:nth-child(1) {
  width: 24px;
  height: 50px;
  background: linear-gradient(to top, #f59e0b, #ef4444);
  animation-duration: 0.4s;
}
.flame:nth-child(2) {
  width: 18px;
  height: 40px;
  background: linear-gradient(to top, #f59e0b, #f97316);
  left: 6px;
  animation-duration: 0.35s;
  animation-delay: 0.1s;
}
.flame:nth-child(3) {
  width: 14px;
  height: 30px;
  background: linear-gradient(to top, #fef3c7, #f59e0b);
  animation-duration: 0.3s;
  animation-delay: 0.15s;
}
@keyframes flicker {
  0% { transform: scaleX(1) scaleY(1) translateY(0); }
  100% { transform: scaleX(0.9) scaleY(1.05) translateY(-2px); }
}`,
    htmlCode: `<div class="fire-flame"><div class="flame"></div><div class="flame"></div><div class="flame"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-aurora-sky',
    name: 'Aurora Borealis',
    category: 'weather',
    tags: ['weather', 'aurora', 'borealis', 'sky', 'northern'],
    difficulty: 'advanced',
    description: 'A shimmering aurora borealis effect with flowing colored curtains of light',
    cssCode: `.aurora-sky {
  width: 180px;
  height: 100px;
  background: #0a0a1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.aurora-curtain {
  position: absolute;
  width: 120%;
  height: 80%;
  bottom: 0;
  left: -10%;
  opacity: 0.6;
  animation: aurora-flow 6s ease-in-out infinite;
}
.aurora-curtain:nth-child(1) {
  background: linear-gradient(180deg, transparent, #10b98144, #10b98122, transparent);
  clip-path: polygon(10% 0%, 30% 100%, 50% 0%, 70% 100%, 90% 0%);
}
.aurora-curtain:nth-child(2) {
  background: linear-gradient(180deg, transparent, #3b82f644, #8b5cf622, transparent);
  clip-path: polygon(20% 0%, 40% 100%, 60% 0%, 80% 100%);
  animation-delay: -2s;
  animation-duration: 8s;
}
@keyframes aurora-flow {
  0%, 100% { transform: translateX(-5%) scaleY(1); }
  50% { transform: translateX(5%) scaleY(1.1); }
}`,
    htmlCode: `<div class="aurora-sky"><div class="aurora-curtain"></div><div class="aurora-curtain"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-star-twinkle',
    name: 'Star Twinkle',
    category: 'weather',
    tags: ['weather', 'star', 'twinkle', 'night', 'sky'],
    difficulty: 'beginner',
    description: 'Stars twinkling in the night sky with staggered animation timing',
    cssCode: `.star-twinkle {
  width: 160px;
  height: 100px;
  background: #0a0a1a;
  border-radius: 10px;
  position: relative;
}
.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #e2e8f0;
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite;
}
.star:nth-child(1) { top: 20%; left: 15%; animation-delay: 0s; }
.star:nth-child(2) { top: 35%; left: 45%; animation-delay: 0.5s; width: 2px; height: 2px; }
.star:nth-child(3) { top: 55%; left: 70%; animation-delay: 1s; }
.star:nth-child(4) { top: 15%; left: 80%; animation-delay: 1.5s; width: 4px; height: 4px; }
.star:nth-child(5) { top: 70%; left: 30%; animation-delay: 0.8s; }
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}`,
    htmlCode: `<div class="star-twinkle"><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div><div class="star"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-moon-phases',
    name: 'Moon Phases',
    category: 'weather',
    tags: ['weather', 'moon', 'phases', 'cycle', 'night'],
    difficulty: 'intermediate',
    description: 'An animated moon cycling through its phases from full to new',
    cssCode: `.moon-phases {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e2e8f0;
  position: relative;
  overflow: hidden;
  animation: moon-glow 4s ease-in-out infinite;
}
.moon-phases::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0a0a1a;
  animation: moon-shift 6s ease-in-out infinite;
}
@keyframes moon-shift {
  0% { transform: translateX(-100%); }
  25% { transform: translateX(-50%); }
  50% { transform: translateX(0%); }
  75% { transform: translateX(50%); }
  100% { transform: translateX(100%); }
}
@keyframes moon-glow {
  0%, 100% { box-shadow: 0 0 15px #e2e8f033; }
  50% { box-shadow: 0 0 25px #e2e8f055; }
}`,
    htmlCode: `<div class="moon-phases"></div>`,
    isNew: true,
  },
  {
    id: 'weather-rainbow-arc',
    name: 'Rainbow Arc',
    category: 'weather',
    tags: ['weather', 'rainbow', 'arc', 'colors', 'spectrum'],
    difficulty: 'intermediate',
    description: 'A rainbow arc that appears with a fade-in reveal animation',
    cssCode: `.rainbow-arc {
  width: 140px;
  height: 80px;
  position: relative;
  overflow: hidden;
}
.rainbow-arc::before {
  content: '';
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 10px solid transparent;
  border-top-color: #ef4444;
  border-right-color: #f59e0b;
  border-bottom-color: #10b981;
  border-left-color: #3b82f6;
  top: 10px;
  animation: rainbow-reveal 3s ease-in-out infinite;
}
@keyframes rainbow-reveal {
  0%, 100% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); opacity: 0.5; }
  50% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; }
}`,
    htmlCode: `<div class="rainbow-arc"></div>`,
    isNew: true,
  },
  {
    id: 'weather-sunset-gradient',
    name: 'Sunset Gradient',
    category: 'weather',
    tags: ['weather', 'sunset', 'gradient', 'sky', 'warm'],
    difficulty: 'beginner',
    description: 'A shifting sunset gradient that transitions between warm sky colors',
    cssCode: `.sunset-gradient {
  width: 160px;
  height: 100px;
  border-radius: 10px;
  background: linear-gradient(180deg, #1a1a2e, #ef4444, #f59e0b, #f97316);
  background-size: 100% 300%;
  animation: sunset-shift 5s ease-in-out infinite;
}
@keyframes sunset-shift {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 0% 100%; }
}`,
    htmlCode: `<div class="sunset-gradient"></div>`,
    isNew: true,
  },
  {
    id: 'weather-dew-drops',
    name: 'Dew Drops',
    category: 'weather',
    tags: ['weather', 'dew', 'drops', 'morning', 'fresh'],
    difficulty: 'intermediate',
    description: 'Glistening dew drops with a light reflection shimmer',
    cssCode: `.dew-drops {
  width: 120px;
  height: 60px;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
  border-radius: 10px;
  position: relative;
}
.dew {
  position: absolute;
  width: 14px;
  height: 14px;
  background: radial-gradient(circle at 35% 35%, #e2e8f0, #10b98144, #10b98122);
  border-radius: 50%;
  animation: dew-shine 3s ease-in-out infinite;
}
.dew:nth-child(1) { top: 15px; left: 20px; }
.dew:nth-child(2) { top: 30px; left: 55px; animation-delay: 0.5s; width: 10px; height: 10px; }
.dew:nth-child(3) { top: 20px; left: 85px; animation-delay: 1s; width: 12px; height: 12px; }
@keyframes dew-shine {
  0%, 100% { box-shadow: 0 0 4px #10b98122; }
  50% { box-shadow: 0 0 12px #10b98166, inset 0 0 4px #e2e8f044; }
}`,
    htmlCode: `<div class="dew-drops"><div class="dew"></div><div class="dew"></div><div class="dew"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-frost-crystal',
    name: 'Frost Crystal',
    category: 'weather',
    tags: ['weather', 'frost', 'crystal', 'ice', 'winter'],
    difficulty: 'advanced',
    description: 'A growing frost crystal pattern with branching ice structures',
    cssCode: `.frost-crystal {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.frost-branch {
  position: absolute;
  width: 2px;
  height: 30px;
  background: linear-gradient(to top, #10b98144, #e2e8f0aa);
  animation: frost-grow 3s ease-out infinite;
  transform-origin: bottom center;
}
.frost-branch:nth-child(1) { transform: rotate(0deg); }
.frost-branch:nth-child(2) { transform: rotate(60deg); }
.frost-branch:nth-child(3) { transform: rotate(120deg); }
.frost-branch:nth-child(4) { transform: rotate(180deg); }
.frost-branch:nth-child(5) { transform: rotate(240deg); }
.frost-branch:nth-child(6) { transform: rotate(300deg); }
.frost-center {
  width: 6px;
  height: 6px;
  background: #e2e8f0;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 8px #10b98144;
}
@keyframes frost-grow {
  0%, 100% { clip-path: inset(100% 0 0 0); }
  50%, 80% { clip-path: inset(0 0 0 0); }
}`,
    htmlCode: `<div class="frost-crystal"><div class="frost-branch"></div><div class="frost-branch"></div><div class="frost-branch"></div><div class="frost-branch"></div><div class="frost-branch"></div><div class="frost-branch"></div><div class="frost-center"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-tornado-spin',
    name: 'Tornado Spin',
    category: 'weather',
    tags: ['weather', 'tornado', 'spin', 'vortex', 'storm'],
    difficulty: 'advanced',
    description: 'A spinning tornado vortex with layered rotating rings',
    cssCode: `.tornado-spin {
  width: 100px;
  height: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
}
.tornado-ring {
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: tornado-rotate 2s linear infinite;
  opacity: 0.8;
}
.tornado-ring:nth-child(1) { width: 60px; height: 16px; animation-duration: 1.5s; }
.tornado-ring:nth-child(2) { width: 50px; height: 14px; animation-duration: 1.3s; animation-direction: reverse; }
.tornado-ring:nth-child(3) { width: 40px; height: 12px; animation-duration: 1.1s; }
.tornado-ring:nth-child(4) { width: 28px; height: 10px; animation-duration: 0.9s; animation-direction: reverse; }
.tornado-ring:nth-child(5) { width: 16px; height: 8px; animation-duration: 0.7s; }
@keyframes tornado-rotate {
  0% { transform: rotateY(0deg) scaleX(1); opacity: 0.8; }
  25% { transform: rotateY(90deg) scaleX(0.5); opacity: 0.4; }
  50% { transform: rotateY(180deg) scaleX(1); opacity: 0.8; }
  75% { transform: rotateY(270deg) scaleX(0.5); opacity: 0.4; }
  100% { transform: rotateY(360deg) scaleX(1); opacity: 0.8; }
}`,
    htmlCode: `<div class="tornado-spin"><div class="tornado-ring"></div><div class="tornado-ring"></div><div class="tornado-ring"></div><div class="tornado-ring"></div><div class="tornado-ring"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-breeze-sway',
    name: 'Breeze Sway',
    category: 'weather',
    tags: ['weather', 'breeze', 'sway', 'gentle', 'wind'],
    difficulty: 'beginner',
    description: 'Gentle swaying grass or plant elements in a light breeze',
    cssCode: `.breeze-sway {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 60px;
}
.breeze-blade {
  width: 4px;
  height: 40px;
  background: linear-gradient(to top, #059669, #10b981);
  border-radius: 2px 2px 0 0;
  transform-origin: bottom center;
  animation: sway 2s ease-in-out infinite;
}
.breeze-blade:nth-child(2) { height: 35px; animation-delay: 0.2s; animation-duration: 2.2s; }
.breeze-blade:nth-child(3) { height: 45px; animation-delay: 0.4s; }
.breeze-blade:nth-child(4) { height: 30px; animation-delay: 0.1s; animation-duration: 1.8s; }
.breeze-blade:nth-child(5) { height: 38px; animation-delay: 0.3s; }
@keyframes sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}`,
    htmlCode: `<div class="breeze-sway"><div class="breeze-blade"></div><div class="breeze-blade"></div><div class="breeze-blade"></div><div class="breeze-blade"></div><div class="breeze-blade"></div></div>`,
    isNew: true,
  },
  {
    id: 'weather-thunder-rumble',
    name: 'Thunder Rumble',
    category: 'weather',
    tags: ['weather', 'thunder', 'rumble', 'storm', 'shake'],
    difficulty: 'intermediate',
    description: 'A thunder rumble effect with screen shake and deep bass pulse',
    cssCode: `.thunder-rumble {
  width: 160px;
  height: 80px;
  background: #0a0a1a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  animation: rumble-shake 3s ease-in-out infinite;
}
.thunder-rumble::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, #10b98122, transparent 60%);
  animation: thunder-pulse 3s ease-in-out infinite;
}
.thunder-rumble::after {
  content: '\\26A1';
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  animation: bolt-appear 3s ease-in-out infinite;
}
@keyframes rumble-shake {
  0%, 30%, 40%, 100% { transform: translate(0, 0); }
  33% { transform: translate(-2px, 1px); }
  36% { transform: translate(1px, -1px); }
  38% { transform: translate(-1px, 0); }
}
@keyframes thunder-pulse {
  0%, 30%, 45%, 100% { opacity: 0; }
  35% { opacity: 1; }
  40% { opacity: 0.5; }
}
@keyframes bolt-appear {
  0%, 30%, 42%, 100% { opacity: 0; transform: translateX(-50%) scale(0.8); }
  35% { opacity: 1; transform: translateX(-50%) scale(1.2); }
  38% { opacity: 0.7; transform: translateX(-50%) scale(1); }
}`,
    htmlCode: `<div class="thunder-rumble"></div>`,
    isNew: true,
  },

  // ==================== GAME-UI (20) ====================
  {
    id: 'game-ui-health-bar',
    name: 'Health Bar',
    category: 'game-ui',
    tags: ['game-ui', 'health', 'bar', 'hp', 'damage'],
    difficulty: 'beginner',
    description: 'A game health bar that depletes with a smooth damage animation',
    cssCode: `.health-bar {
  width: 160px;
  height: 20px;
  background: #1a1a2e;
  border-radius: 4px;
  border: 2px solid #2a2a3e;
  position: relative;
  overflow: hidden;
}
.health-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #10b981);
  border-radius: 2px;
  animation: hp-drain 3s ease-in-out infinite;
  position: relative;
}
.health-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, #ffffff33, transparent);
  border-radius: 2px 2px 0 0;
}
@keyframes hp-drain {
  0%, 100% { width: 100%; }
  50% { width: 30%; }
}`,
    htmlCode: `<div class="health-bar"><div class="health-bar-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-mana-bar',
    name: 'Mana Bar',
    category: 'game-ui',
    tags: ['game-ui', 'mana', 'bar', 'mp', 'magic'],
    difficulty: 'beginner',
    description: 'A mana bar with a shimmering magic effect that refills over time',
    cssCode: `.mana-bar {
  width: 160px;
  height: 18px;
  background: #1a1a2e;
  border-radius: 4px;
  border: 2px solid #2a2a3e;
  position: relative;
  overflow: hidden;
}
.mana-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
  animation: mana-refill 3s ease-in-out infinite;
  position: relative;
}
.mana-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ffffff44, transparent);
  animation: mana-shimmer 2s ease-in-out infinite;
}
@keyframes mana-refill {
  0%, 100% { width: 100%; }
  40% { width: 15%; }
  80% { width: 90%; }
}
@keyframes mana-shimmer {
  0% { left: -50%; }
  100% { left: 150%; }
}`,
    htmlCode: `<div class="mana-bar"><div class="mana-bar-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-xp-progress',
    name: 'XP Progress Bar',
    category: 'game-ui',
    tags: ['game-ui', 'xp', 'progress', 'experience', 'level'],
    difficulty: 'intermediate',
    description: 'An experience bar that fills with a glowing edge as XP accumulates',
    cssCode: `.xp-progress {
  width: 180px;
  height: 12px;
  background: #1a1a2e;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  border: 1px solid #2a2a3e;
}
.xp-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 6px;
  animation: xp-gain 4s ease-in-out infinite;
  position: relative;
}
.xp-progress-fill::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background: #10b981;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b98166;
  border-radius: 0 6px 6px 0;
  animation: xp-edge 1s ease-in-out infinite;
}
@keyframes xp-gain {
  0% { width: 10%; }
  80% { width: 95%; }
  100% { width: 100%; }
}
@keyframes xp-edge {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`,
    htmlCode: `<div class="xp-progress"><div class="xp-progress-fill"></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-level-up',
    name: 'Level Up Burst',
    category: 'game-ui',
    tags: ['game-ui', 'level-up', 'burst', 'celebration', 'glow'],
    difficulty: 'advanced',
    description: 'A level up celebration with radiating burst lines and glow',
    cssCode: `.level-up-burst {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.level-up-burst::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, #10b98122 0%, transparent 8%, #10b98122 16%, transparent 24%, #10b98122 32%, transparent 40%, #10b98122 48%, transparent 56%, #10b98122 64%, transparent 72%, #10b98122 80%, transparent 88%, #10b98122 96%);
  border-radius: 50%;
  animation: burst-spin 2s linear infinite;
}
.level-up-text {
  position: relative;
  z-index: 1;
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  animation: level-pop 2s ease-in-out infinite;
}
@keyframes burst-spin {
  to { transform: rotate(360deg); }
}
@keyframes level-pop {
  0%, 100% { transform: scale(1); text-shadow: 0 0 5px #10b98144; }
  50% { transform: scale(1.15); text-shadow: 0 0 15px #10b98188; }
}`,
    htmlCode: `<div class="level-up-burst"><span class="level-up-text">LVL UP</span></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-achievement-badge',
    name: 'Achievement Badge',
    category: 'game-ui',
    tags: ['game-ui', 'achievement', 'badge', 'trophy', 'reward'],
    difficulty: 'intermediate',
    description: 'An achievement badge that shines and reveals with a golden glow',
    cssCode: `.achievement-badge {
  width: 60px;
  height: 60px;
  background: #1a1a2e;
  border-radius: 50%;
  border: 3px solid #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: badge-reveal 3s ease-in-out infinite;
}
.achievement-badge::before {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px dashed #10b98144;
  animation: badge-ring 4s linear infinite;
}
.achievement-badge::after {
  content: '\\2605';
  color: #10b981;
  font-size: 1.4rem;
}
@keyframes badge-reveal {
  0%, 20% { transform: scale(0.6) rotate(-10deg); opacity: 0.3; }
  40%, 80% { transform: scale(1) rotate(0deg); opacity: 1; }
  90%, 100% { transform: scale(0.6) rotate(-10deg); opacity: 0.3; }
}
@keyframes badge-ring {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="achievement-badge"></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-loot-box',
    name: 'Loot Box Reveal',
    category: 'game-ui',
    tags: ['game-ui', 'loot', 'box', 'reveal', 'reward'],
    difficulty: 'advanced',
    description: 'A loot box that shakes and opens with a glowing reveal effect',
    cssCode: `.loot-box {
  width: 70px;
  height: 70px;
  background: #1a1a2e;
  border: 2px solid #10b981;
  border-radius: 10px;
  position: relative;
  animation: box-shake 3s ease-in-out infinite;
}
.loot-box::before {
  content: '';
  position: absolute;
  inset: 6px;
  background: radial-gradient(circle, #10b98166, transparent);
  border-radius: 6px;
  animation: loot-glow 3s ease-in-out infinite;
}
.loot-box::after {
  content: '?';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 1.5rem;
  font-weight: 900;
}
@keyframes box-shake {
  0%, 50%, 100% { transform: rotate(0deg); }
  55% { transform: rotate(-3deg); }
  60% { transform: rotate(3deg); }
  65% { transform: rotate(-2deg); }
  70% { transform: rotate(2deg); }
}
@keyframes loot-glow {
  0%, 50% { opacity: 0; transform: scale(0.5); }
  75% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(1.5); }
}`,
    htmlCode: `<div class="loot-box"></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-damage-number',
    name: 'Damage Number',
    category: 'game-ui',
    tags: ['game-ui', 'damage', 'number', 'float', 'combat'],
    difficulty: 'intermediate',
    description: 'A floating damage number that rises and fades like in RPG combat',
    cssCode: `.damage-number {
  color: #ef4444;
  font-size: 1.6rem;
  font-weight: 900;
  text-shadow: 0 0 8px #ef444466, 2px 2px 0 #0a0a1a;
  animation: dmg-float 1.5s ease-out infinite;
  position: relative;
}
.damage-number::before {
  content: '-';
  position: absolute;
  left: -8px;
  font-size: 1rem;
}
@keyframes dmg-float {
  0% { transform: translateY(0) scale(1.5); opacity: 1; }
  20% { transform: translateY(-15px) scale(1); }
  100% { transform: translateY(-50px) scale(0.8); opacity: 0; }
}`,
    htmlCode: `<div class="damage-number">247</div>`,
    isNew: true,
  },
  {
    id: 'game-ui-combo-counter',
    name: 'Combo Counter',
    category: 'game-ui',
    tags: ['game-ui', 'combo', 'counter', 'hit', 'chain'],
    difficulty: 'intermediate',
    description: 'A combo counter that scales up with each hit in the chain',
    cssCode: `.combo-counter {
  text-align: center;
}
.combo-number {
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  text-shadow: 0 0 10px #10b98166;
  animation: combo-pulse 0.8s ease-in-out infinite;
}
.combo-label {
  font-size: 0.55rem;
  font-weight: 700;
  color: #10b981aa;
  text-transform: uppercase;
  letter-spacing: 3px;
}
@keyframes combo-pulse {
  0%, 100% { transform: scale(1); text-shadow: 0 0 10px #10b98166; }
  50% { transform: scale(1.1); text-shadow: 0 0 20px #10b98188, 0 0 40px #10b98144; }
}`,
    htmlCode: `<div class="combo-counter"><div class="combo-number">12</div><div class="combo-label">Combo</div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-skill-cooldown',
    name: 'Skill Cooldown',
    category: 'game-ui',
    tags: ['game-ui', 'skill', 'cooldown', 'timer', 'ability'],
    difficulty: 'advanced',
    description: 'A skill icon with a radial cooldown sweep overlay',
    cssCode: `.skill-cooldown {
  width: 50px;
  height: 50px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 2px solid #2a2a3e;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-icon {
  color: #10b981;
  font-size: 1.2rem;
  z-index: 1;
}
.skill-cooldown::before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, #0a0a1acc 0%, #0a0a1acc var(--cd, 360deg), transparent var(--cd, 360deg));
  animation: cooldown-sweep 4s linear infinite;
  z-index: 2;
}
.skill-cooldown::after {
  content: attr(data-cd);
  position: absolute;
  color: #e2e8f0;
  font-size: 0.7rem;
  font-weight: 700;
  z-index: 3;
  animation: cd-count 4s linear infinite;
}
@keyframes cooldown-sweep {
  0% { --cd: 360deg; }
  100% { --cd: 0deg; }
}
@keyframes cd-count {
  0% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<div class="skill-cooldown" data-cd="3"><span class="skill-icon">&#9889;</span></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-minimap-border',
    name: 'Mini-map Border',
    category: 'game-ui',
    tags: ['game-ui', 'minimap', 'border', 'map', 'radar'],
    difficulty: 'intermediate',
    description: 'A mini-map with a scanning radar sweep border',
    cssCode: `.minimap-border {
  width: 80px;
  height: 80px;
  background: #0a0a1a;
  border: 2px solid #10b98144;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.minimap-border::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, #10b981, transparent);
  transform-origin: left center;
  animation: radar-sweep 3s linear infinite;
}
.minimap-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #10b981;
  border-radius: 50%;
}
.minimap-dot:nth-child(1) { top: 25%; left: 35%; animation: dot-blink 1s step-end infinite; }
.minimap-dot:nth-child(2) { top: 60%; left: 65%; animation: dot-blink 1s step-end infinite 0.5s; }
@keyframes radar-sweep {
  to { transform: rotate(360deg); }
}
@keyframes dot-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,
    htmlCode: `<div class="minimap-border"><div class="minimap-dot"></div><div class="minimap-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-quest-tracker',
    name: 'Quest Tracker',
    category: 'game-ui',
    tags: ['game-ui', 'quest', 'tracker', 'objective', 'task'],
    difficulty: 'intermediate',
    description: 'A quest tracker with an animated objective checkmark',
    cssCode: `.quest-tracker {
  width: 160px;
  padding: 10px;
  background: #1a1a2e;
  border-radius: 8px;
  border-left: 3px solid #10b981;
}
.quest-title {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.quest-objective {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #94a3b8;
  font-size: 0.55rem;
}
.quest-check {
  width: 14px;
  height: 14px;
  border: 1.5px solid #10b981;
  border-radius: 3px;
  animation: quest-complete 3s ease-in-out infinite;
}
@keyframes quest-complete {
  0%, 60% { background: transparent; }
  70%, 90% { background: #10b981; box-shadow: 0 0 8px #10b98144; }
  100% { background: transparent; }
}`,
    htmlCode: `<div class="quest-tracker"><div class="quest-title">Collect 5 Herbs</div><div class="quest-objective"><div class="quest-check"></div><span>3/5 gathered</span></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-inventory-slot',
    name: 'Inventory Slot',
    category: 'game-ui',
    tags: ['game-ui', 'inventory', 'slot', 'item', 'grid'],
    difficulty: 'beginner',
    description: 'An inventory slot with a subtle highlight and rarity border glow',
    cssCode: `.inventory-slot {
  width: 44px;
  height: 44px;
  background: #1a1a2e;
  border: 2px solid #2a2a3e;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: slot-glow 3s ease-in-out infinite;
}
.inventory-slot::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  height: 40%;
  background: linear-gradient(to bottom, #ffffff0a, transparent);
  border-radius: 4px 4px 0 0;
}
.inventory-item {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 4px #10b98166);
}
@keyframes slot-glow {
  0%, 100% { border-color: #2a2a3e; box-shadow: none; }
  50% { border-color: #10b98166; box-shadow: 0 0 8px #10b98122; }
}`,
    htmlCode: `<div class="inventory-slot"><span class="inventory-item">&#9876;</span></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-tooltip-stats',
    name: 'Tooltip Stats',
    category: 'game-ui',
    tags: ['game-ui', 'tooltip', 'stats', 'info', 'popup'],
    difficulty: 'intermediate',
    description: 'A game tooltip with stat bars that animate on appear',
    cssCode: `.tooltip-stats {
  width: 140px;
  padding: 10px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #2a2a3e;
  animation: tooltip-in 2s ease-in-out infinite;
}
.tooltip-name {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.tooltip-stat {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.tooltip-stat-label {
  font-size: 0.5rem;
  color: #94a3b8;
  width: 20px;
}
.tooltip-stat-bar {
  flex: 1;
  height: 4px;
  background: #2a2a3e;
  border-radius: 2px;
  overflow: hidden;
}
.tooltip-stat-fill {
  height: 100%;
  background: #10b981;
  border-radius: 2px;
  animation: stat-fill 2s ease-out infinite;
}
@keyframes tooltip-in {
  0%, 100% { opacity: 0.7; transform: translateY(4px); }
  20%, 80% { opacity: 1; transform: translateY(0); }
}
@keyframes stat-fill {
  0% { width: 0%; }
  40% { width: 75%; }
  100% { width: 75%; }
}`,
    htmlCode: `<div class="tooltip-stats"><div class="tooltip-name">Flame Sword</div><div class="tooltip-stat"><span class="tooltip-stat-label">ATK</span><div class="tooltip-stat-bar"><div class="tooltip-stat-fill"></div></div></div><div class="tooltip-stat"><span class="tooltip-stat-label">DEF</span><div class="tooltip-stat-bar"><div class="tooltip-stat-fill" style="animation-delay:0.2s;width:45%"></div></div></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-dialog-box',
    name: 'Dialog Box',
    category: 'game-ui',
    tags: ['game-ui', 'dialog', 'box', 'text', 'npc'],
    difficulty: 'beginner',
    description: 'A classic RPG dialog box with a typing cursor animation',
    cssCode: `.dialog-box {
  width: 180px;
  padding: 12px;
  background: #1a1a2e;
  border-radius: 8px;
  border: 2px solid #10b98144;
  position: relative;
}
.dialog-speaker {
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 4px;
  letter-spacing: 1px;
}
.dialog-text {
  color: #e2e8f0;
  font-size: 0.6rem;
  line-height: 1.5;
}
.dialog-cursor {
  display: inline-block;
  width: 6px;
  height: 10px;
  background: #10b981;
  margin-left: 2px;
  animation: cursor-blink 0.6s step-end infinite;
}
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`,
    htmlCode: `<div class="dialog-box"><div class="dialog-speaker">Elder Sage</div><div class="dialog-text">The path ahead is dangerous...<span class="dialog-cursor"></span></div></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-button-mash',
    name: 'Button Mash Effect',
    category: 'game-ui',
    tags: ['game-ui', 'button', 'mash', 'press', 'prompt'],
    difficulty: 'intermediate',
    description: 'A quick-time event button prompt that pulses urgently for input',
    cssCode: `.button-mash {
  width: 50px;
  height: 50px;
  background: #1a1a2e;
  border: 3px solid #10b981;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 1.2rem;
  font-weight: 900;
  animation: mash-urgent 0.8s ease-in-out infinite;
  position: relative;
}
.button-mash::before {
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px solid #10b98144;
  border-radius: 14px;
  animation: mash-ring 0.8s ease-out infinite;
}
@keyframes mash-urgent {
  0%, 100% { transform: scale(1); border-color: #10b981; }
  50% { transform: scale(0.92); border-color: #10b981aa; }
}
@keyframes mash-ring {
  0% { inset: -6px; opacity: 1; }
  100% { inset: -16px; opacity: 0; }
}`,
    htmlCode: `<div class="button-mash">X</div>`,
    isNew: true,
  },
  {
    id: 'game-ui-score-popup',
    name: 'Score Popup',
    category: 'game-ui',
    tags: ['game-ui', 'score', 'popup', 'points', 'float'],
    difficulty: 'beginner',
    description: 'A score popup that floats up and fades like arcade games',
    cssCode: `.score-popup {
  color: #10b981;
  font-size: 1.4rem;
  font-weight: 900;
  text-shadow: 0 0 8px #10b98166, 1px 1px 0 #0a0a1a;
  animation: score-float 1.5s ease-out infinite;
}
.score-popup::before {
  content: '+';
  font-size: 0.9rem;
}
@keyframes score-float {
  0% { transform: translateY(0) scale(1.3); opacity: 1; }
  30% { transform: translateY(-20px) scale(1); }
  100% { transform: translateY(-50px) scale(0.8); opacity: 0; }
}`,
    htmlCode: `<div class="score-popup">500</div>`,
    isNew: true,
  },
  {
    id: 'game-ui-critical-hit',
    name: 'Critical Hit Flash',
    category: 'game-ui',
    tags: ['game-ui', 'critical', 'hit', 'flash', 'damage'],
    difficulty: 'advanced',
    description: 'A critical hit flash with a dramatic screen-shake and red burst',
    cssCode: `.critical-hit {
  padding: 8px 20px;
  background: #1a1a2e;
  border: 2px solid #ef4444;
  border-radius: 6px;
  color: #ef4444;
  font-size: 0.9rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: crit-shake 0.4s ease-in-out infinite, crit-flash 1s ease-in-out infinite;
  text-shadow: 0 0 10px #ef444488;
}
@keyframes crit-shake {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-2px, 1px) rotate(-1deg); }
  50% { transform: translate(2px, -1px) rotate(1deg); }
  75% { transform: translate(-1px, 2px) rotate(-0.5deg); }
}
@keyframes crit-flash {
  0%, 40%, 60%, 100% { background: #1a1a2e; box-shadow: 0 0 0 transparent; }
  50% { background: #ef444422; box-shadow: 0 0 20px #ef444444; }
}`,
    htmlCode: `<div class="critical-hit">CRIT!</div>`,
    isNew: true,
  },
  {
    id: 'game-ui-shield-indicator',
    name: 'Shield Indicator',
    category: 'game-ui',
    tags: ['game-ui', 'shield', 'indicator', 'defense', 'protection'],
    difficulty: 'intermediate',
    description: 'A shield indicator with a rotating hexagonal protection ring',
    cssCode: `.shield-indicator {
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shield-indicator::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 3px solid #10b98144;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: shield-rotate 6s linear infinite;
}
.shield-indicator::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: #10b98122;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: shield-pulse 2s ease-in-out infinite;
}
@keyframes shield-rotate {
  to { transform: rotate(360deg); }
}
@keyframes shield-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}`,
    htmlCode: `<div class="shield-indicator"></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-buff-icon',
    name: 'Buff Icon',
    category: 'game-ui',
    tags: ['game-ui', 'buff', 'icon', 'status', 'enhancement'],
    difficulty: 'beginner',
    description: 'A buff status icon with an animated timer ring and glow',
    cssCode: `.buff-icon {
  width: 36px;
  height: 36px;
  background: #1a1a2e;
  border-radius: 6px;
  border: 2px solid #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: buff-glow 2s ease-in-out infinite;
}
.buff-icon::after {
  content: '\\2191';
  color: #10b981;
  font-size: 1.1rem;
  font-weight: 900;
}
@keyframes buff-glow {
  0%, 100% { box-shadow: 0 0 4px #10b98122; border-color: #10b981; }
  50% { box-shadow: 0 0 12px #10b98144; border-color: #10b981aa; }
}`,
    htmlCode: `<div class="buff-icon"></div>`,
    isNew: true,
  },
  {
    id: 'game-ui-respawn-timer',
    name: 'Respawn Timer',
    category: 'game-ui',
    tags: ['game-ui', 'respawn', 'timer', 'countdown', 'death'],
    difficulty: 'intermediate',
    description: 'A respawn timer with a circular countdown and pulsing number',
    cssCode: `.respawn-timer {
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.respawn-timer::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid #2a2a3e;
}
.respawn-timer::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #10b981;
  animation: respawn-spin 3s linear infinite;
}
.respawn-number {
  color: #10b981;
  font-size: 1rem;
  font-weight: 900;
  animation: respawn-pulse 1s ease-in-out infinite;
  position: relative;
  z-index: 1;
}
@keyframes respawn-spin {
  to { transform: rotate(360deg); }
}
@keyframes respawn-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}`,
    htmlCode: `<div class="respawn-timer"><span class="respawn-number">5</span></div>`,
    isNew: true,
  },

  // ==================== CONTAINER (20) ====================
  {
    id: 'container-responsive-card',
    name: 'Responsive Card',
    category: 'container',
    tags: ['container', 'responsive', 'card', 'adaptive', 'flex'],
    difficulty: 'beginner',
    description: 'A card that adapts its layout based on container width using container queries',
    cssCode: `.responsive-card-wrap {
  container-type: inline-size;
  container-name: rcard;
  width: 200px;
  height: 120px;
}
.responsive-card {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #2a2a3e;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: card-adapt 4s ease-in-out infinite;
}
.responsive-card-title {
  color: #10b981;
  font-size: 0.7rem;
  font-weight: 700;
}
.responsive-card-body {
  color: #94a3b8;
  font-size: 0.55rem;
}
@container rcard (min-width: 200px) {
  .responsive-card { flex-direction: row; align-items: center; }
}
@keyframes card-adapt {
  0%, 100% { max-width: 180px; }
  50% { max-width: 100px; }
}`,
    htmlCode: `<div class="responsive-card-wrap"><div class="responsive-card"><div class="responsive-card-title">Adaptive</div><div class="responsive-card-body">Resizes to fit</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-adaptive-layout',
    name: 'Adaptive Layout',
    category: 'container',
    tags: ['container', 'adaptive', 'layout', 'fluid', 'grid'],
    difficulty: 'intermediate',
    description: 'A layout that reflows its grid columns based on container size',
    cssCode: `.adaptive-layout {
  container-type: inline-size;
  width: 200px;
  height: 120px;
  padding: 8px;
}
.adaptive-grid {
  display: grid;
  gap: 6px;
  animation: grid-reflow 4s ease-in-out infinite;
}
.adaptive-cell {
  background: #1a1a2e;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid #2a2a3e;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  text-align: center;
}
@keyframes grid-reflow {
  0%, 100% { grid-template-columns: 1fr 1fr; }
  33% { grid-template-columns: 1fr 1fr 1fr; }
  66% { grid-template-columns: 1fr; }
}`,
    htmlCode: `<div class="adaptive-layout"><div class="adaptive-grid"><div class="adaptive-cell">A</div><div class="adaptive-cell">B</div><div class="adaptive-cell">C</div><div class="adaptive-cell">D</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-based-sizing',
    name: 'Container-Based Sizing',
    category: 'container',
    tags: ['container', 'sizing', 'cqw', 'fluid', 'relative'],
    difficulty: 'intermediate',
    description: 'Elements sized relative to their container using container query units',
    cssCode: `.container-sizing {
  container-type: inline-size;
  width: 200px;
  height: 100px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 12px;
  animation: cqw-demo 4s ease-in-out infinite;
}
.container-sizing-box {
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 6px;
  width: 50cqw;
  height: 40cqw;
  max-height: 80px;
  animation: size-breathe 3s ease-in-out infinite;
}
@keyframes cqw-demo {
  0%, 100% { width: 200px; }
  50% { width: 140px; }
}
@keyframes size-breathe {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; border-color: #10b981; }
}`,
    htmlCode: `<div class="container-sizing"><div class="container-sizing-box"></div></div>`,
    isNew: true,
  },
  {
    id: 'container-fluid-typography',
    name: 'Fluid Typography',
    category: 'container',
    tags: ['container', 'fluid', 'typography', 'text', 'responsive'],
    difficulty: 'beginner',
    description: 'Text that scales fluidly based on container width',
    cssCode: `.fluid-type {
  container-type: inline-size;
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 16px;
  animation: fluid-width 4s ease-in-out infinite;
}
.fluid-type-text {
  color: #10b981;
  font-weight: 800;
  font-size: clamp(0.6rem, 4cqw, 1.4rem);
  line-height: 1.3;
}
@keyframes fluid-width {
  0%, 100% { width: 200px; }
  50% { width: 120px; }
}`,
    htmlCode: `<div class="fluid-type"><div class="fluid-type-text">Fluid Text Sizing</div></div>`,
    isNew: true,
  },
  {
    id: 'container-responsive-grid',
    name: 'Responsive Grid',
    category: 'container',
    tags: ['container', 'grid', 'responsive', 'auto-fit', 'columns'],
    difficulty: 'intermediate',
    description: 'A grid that auto-fits columns based on available container space',
    cssCode: `.responsive-grid {
  width: 200px;
  height: 120px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 6px;
  animation: grid-shrink 4s ease-in-out infinite;
}
.grid-item {
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 4px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
}
@keyframes grid-shrink {
  0%, 100% { padding: 10px; }
  50% { padding: 10px 40px; }
}`,
    htmlCode: `<div class="responsive-grid"><div class="grid-item">1</div><div class="grid-item">2</div><div class="grid-item">3</div><div class="grid-item">4</div><div class="grid-item">5</div><div class="grid-item">6</div></div>`,
    isNew: true,
  },
  {
    id: 'container-flexible-panel',
    name: 'Flexible Panel',
    category: 'container',
    tags: ['container', 'flexible', 'panel', 'resize', 'adapt'],
    difficulty: 'beginner',
    description: 'A panel that smoothly transitions its flex proportions as space changes',
    cssCode: `.flexible-panel {
  width: 200px;
  height: 80px;
  display: flex;
  gap: 6px;
  animation: flex-shift 4s ease-in-out infinite;
}
.panel-side {
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid #2a2a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  animation: panel-breathe 4s ease-in-out infinite;
}
.panel-side:first-child { flex: 1; }
.panel-side:last-child { flex: 2; }
@keyframes flex-shift {
  0%, 100% { width: 200px; }
  50% { width: 140px; }
}
@keyframes panel-breathe {
  0%, 100% { border-color: #2a2a3e; }
  50% { border-color: #10b98144; }
}`,
    htmlCode: `<div class="flexible-panel"><div class="panel-side">Nav</div><div class="panel-side">Content</div></div>`,
    isNew: true,
  },
  {
    id: 'container-autofit-demo',
    name: 'Auto-Fit Demo',
    category: 'container',
    tags: ['container', 'auto-fit', 'grid', 'demo', 'layout'],
    difficulty: 'intermediate',
    description: 'A demonstration of auto-fit grid that collapses and expands items',
    cssCode: `.autofit-demo {
  container-type: inline-size;
  width: 200px;
  padding: 10px;
  background: #1a1a2e;
  border-radius: 10px;
  animation: autofit-size 5s ease-in-out infinite;
}
.autofit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 6px;
}
.autofit-cell {
  background: #10b98122;
  border-radius: 4px;
  padding: 8px 4px;
  text-align: center;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  border: 1px solid #10b98133;
}
@keyframes autofit-size {
  0%, 100% { width: 200px; }
  50% { width: 120px; }
}`,
    htmlCode: `<div class="autofit-demo"><div class="autofit-grid"><div class="autofit-cell">1</div><div class="autofit-cell">2</div><div class="autofit-cell">3</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-breakpoints',
    name: 'Container Breakpoints',
    category: 'container',
    tags: ['container', 'breakpoints', 'query', 'responsive', 'threshold'],
    difficulty: 'advanced',
    description: 'A container that changes layout at specific width breakpoints with smooth transitions',
    cssCode: `.container-bp {
  container-type: inline-size;
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 12px;
  animation: bp-width 6s ease-in-out infinite;
}
.bp-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.3s ease;
}
.bp-item {
  background: #10b98122;
  border: 1px solid #10b98133;
  border-radius: 4px;
  padding: 6px;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  text-align: center;
}
@container (min-width: 160px) {
  .bp-content { flex-direction: row; }
}
@keyframes bp-width {
  0%, 100% { width: 200px; }
  33% { width: 120px; }
  66% { width: 80px; }
}`,
    htmlCode: `<div class="container-bp"><div class="bp-content"><div class="bp-item">A</div><div class="bp-item">B</div><div class="bp-item">C</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-intrinsic-sizing',
    name: 'Intrinsic Sizing',
    category: 'container',
    tags: ['container', 'intrinsic', 'sizing', 'min-content', 'max-content'],
    difficulty: 'intermediate',
    description: 'Elements using intrinsic sizing keywords that adapt to their content',
    cssCode: `.intrinsic-sizing {
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.intrinsic-row {
  display: flex;
  gap: 6px;
}
.intrinsic-col {
  background: #10b98122;
  border: 1px solid #10b98133;
  border-radius: 4px;
  padding: 4px 8px;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  animation: intrinsic-pulse 3s ease-in-out infinite;
}
.intrinsic-col:nth-child(1) { flex: 0 1 min-content; }
.intrinsic-col:nth-child(2) { flex: 1; }
@keyframes intrinsic-pulse {
  0%, 100% { border-color: #10b98133; }
  50% { border-color: #10b981; }
}`,
    htmlCode: `<div class="intrinsic-sizing"><div class="intrinsic-row"><div class="intrinsic-col">Label</div><div class="intrinsic-col">Stretch content area</div></div><div class="intrinsic-row"><div class="intrinsic-col">Tag</div><div class="intrinsic-col">Auto fill</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-subgrid-layout',
    name: 'Subgrid Layout',
    category: 'container',
    tags: ['container', 'subgrid', 'layout', 'grid', 'alignment'],
    difficulty: 'advanced',
    description: 'A subgrid demonstration where child items align to parent grid tracks',
    cssCode: `.subgrid-parent {
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6px;
}
.subgrid-child {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  gap: 6px;
}
.subgrid-cell {
  background: #10b98122;
  border: 1px solid #10b98133;
  border-radius: 4px;
  padding: 6px;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  animation: sub-align 3s ease-in-out infinite;
}
@keyframes sub-align {
  0%, 100% { border-color: #10b98133; }
  50% { border-color: #10b98188; }
}`,
    htmlCode: `<div class="subgrid-parent"><div class="subgrid-child"><div class="subgrid-cell">Col 1</div><div class="subgrid-cell">Column 2 aligns</div></div><div class="subgrid-child"><div class="subgrid-cell">A</div><div class="subgrid-cell">Aligned row</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-wrapping-box',
    name: 'Wrapping Container',
    category: 'container',
    tags: ['container', 'wrapping', 'flex-wrap', 'reflow', 'items'],
    difficulty: 'beginner',
    description: 'Items that wrap to new lines as the container width decreases',
    cssCode: `.wrapping-box {
  width: 200px;
  padding: 10px;
  background: #1a1a2e;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  animation: wrap-shrink 4s ease-in-out infinite;
}
.wrap-chip {
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 12px;
  padding: 4px 10px;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
  white-space: nowrap;
}
@keyframes wrap-shrink {
  0%, 100% { width: 200px; }
  50% { width: 120px; }
}`,
    htmlCode: `<div class="wrapping-box"><span class="wrap-chip">Alpha</span><span class="wrap-chip">Beta</span><span class="wrap-chip">Gamma</span><span class="wrap-chip">Delta</span><span class="wrap-chip">Epsilon</span></div>`,
    isNew: true,
  },
  {
    id: 'container-responsive-sidebar',
    name: 'Responsive Sidebar',
    category: 'container',
    tags: ['container', 'sidebar', 'responsive', 'nav', 'collapse'],
    difficulty: 'intermediate',
    description: 'A sidebar that collapses to icon-only mode when container narrows',
    cssCode: `.responsive-sidebar {
  container-type: inline-size;
  width: 200px;
  height: 100px;
  background: #1a1a2e;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  animation: sidebar-collapse 4s ease-in-out infinite;
}
.sidebar-nav {
  width: 60px;
  background: #0f0f1a;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  border-radius: 10px 0 0 10px;
}
.sidebar-icon {
  color: #10b981;
  font-size: 0.9rem;
  text-align: center;
  animation: icon-shift 4s ease-in-out infinite;
}
.sidebar-main {
  flex: 1;
  padding: 8px;
  color: #94a3b8;
  font-size: 0.5rem;
}
@keyframes sidebar-collapse {
  0%, 100% { width: 200px; }
  50% { width: 100px; }
}
@keyframes icon-shift {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}`,
    htmlCode: `<div class="responsive-sidebar"><div class="sidebar-nav"><div class="sidebar-icon">&#9776;</div><div class="sidebar-icon">&#9783;</div><div class="sidebar-icon">&#9881;</div></div><div class="sidebar-main">Content area</div></div>`,
    isNew: true,
  },
  {
    id: 'container-adaptive-margin',
    name: 'Adaptive Margins',
    category: 'container',
    tags: ['container', 'margin', 'adaptive', 'spacing', 'responsive'],
    difficulty: 'beginner',
    description: 'Margins that adapt proportionally as the container resizes',
    cssCode: `.adaptive-margin {
  container-type: inline-size;
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  animation: margin-container 4s ease-in-out infinite;
}
.adaptive-margin-inner {
  margin: 2cqw;
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 6px;
  padding: 8px;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
}
@keyframes margin-container {
  0%, 100% { width: 200px; }
  50% { width: 120px; }
}`,
    htmlCode: `<div class="adaptive-margin"><div class="adaptive-margin-inner">Content adapts margin</div></div>`,
    isNew: true,
  },
  {
    id: 'container-aware-spacing',
    name: 'Container-Aware Spacing',
    category: 'container',
    tags: ['container', 'spacing', 'aware', 'gap', 'proportional'],
    difficulty: 'intermediate',
    description: 'Spacing between elements that scales with the container width',
    cssCode: `.aware-spacing {
  container-type: inline-size;
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 10px;
  animation: spacing-size 4s ease-in-out infinite;
}
.aware-stack {
  display: flex;
  flex-direction: column;
  gap: 2cqw;
}
.aware-block {
  background: #10b98122;
  border: 1px solid #10b98133;
  border-radius: 4px;
  padding: 6px;
  color: #10b981;
  font-size: 0.5rem;
  font-weight: 700;
}
@keyframes spacing-size {
  0%, 100% { width: 200px; }
  50% { width: 120px; }
}`,
    htmlCode: `<div class="aware-spacing"><div class="aware-stack"><div class="aware-block">Block A</div><div class="aware-block">Block B</div><div class="aware-block">Block C</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-font-scaling',
    name: 'Responsive Font Scaling',
    category: 'container',
    tags: ['container', 'font', 'scaling', 'responsive', 'typography'],
    difficulty: 'intermediate',
    description: 'Font sizes that scale smoothly with container width using clamp and cqw',
    cssCode: `.font-scaling {
  container-type: inline-size;
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 14px;
  animation: font-container 4s ease-in-out infinite;
}
.font-scaling h3 {
  color: #10b981;
  font-size: clamp(0.7rem, 3cqw, 1.2rem);
  font-weight: 800;
  margin-bottom: 4px;
}
.font-scaling p {
  color: #94a3b8;
  font-size: clamp(0.45rem, 1.8cqw, 0.7rem);
}
@keyframes font-container {
  0%, 100% { width: 200px; }
  50% { width: 100px; }
}`,
    htmlCode: `<div class="font-scaling"><h3>Scalable Title</h3><p>Body text that scales with the container width proportionally.</p></div>`,
    isNew: true,
  },
  {
    id: 'container-auto-resize',
    name: 'Auto-Resize Element',
    category: 'container',
    tags: ['container', 'auto', 'resize', 'fit', 'content'],
    difficulty: 'beginner',
    description: 'An element that auto-resizes to fit its content using width: fit-content',
    cssCode: `.auto-resize {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
}
.auto-resize-item {
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 6px;
  padding: 6px 12px;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
  width: fit-content;
  animation: fit-pulse 2s ease-in-out infinite;
}
.auto-resize-item:nth-child(2) { animation-delay: 0.3s; }
.auto-resize-item:nth-child(3) { animation-delay: 0.6s; }
@keyframes fit-pulse {
  0%, 100% { border-color: #10b98144; }
  50% { border-color: #10b981; }
}`,
    htmlCode: `<div class="auto-resize"><div class="auto-resize-item">Short</div><div class="auto-resize-item">Medium length text</div><div class="auto-resize-item">A longer content line here</div></div>`,
    isNew: true,
  },
  {
    id: 'container-flexible-box',
    name: 'Flexible Box Demo',
    category: 'container',
    tags: ['container', 'flexbox', 'flexible', 'grow', 'shrink'],
    difficulty: 'beginner',
    description: 'A flexbox demo showing items growing and shrinking proportionally',
    cssCode: `.flexible-box {
  width: 200px;
  height: 80px;
  display: flex;
  gap: 4px;
  animation: flex-container 4s ease-in-out infinite;
}
.flex-item {
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0a1a;
  font-size: 0.55rem;
  font-weight: 800;
  animation: flex-grow-anim 4s ease-in-out infinite;
}
.flex-item:nth-child(1) { flex: 1; background: #10b981; }
.flex-item:nth-child(2) { flex: 2; background: #059669; }
.flex-item:nth-child(3) { flex: 1; background: #047857; }
@keyframes flex-container {
  0%, 100% { width: 200px; }
  50% { width: 120px; }
}
@keyframes flex-grow-anim {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}`,
    htmlCode: `<div class="flexible-box"><div class="flex-item">1x</div><div class="flex-item">2x</div><div class="flex-item">1x</div></div>`,
    isNew: true,
  },
  {
    id: 'container-media-queries',
    name: 'Container Media Queries',
    category: 'container',
    tags: ['container', 'media', 'queries', '@container', 'responsive'],
    difficulty: 'advanced',
    description: 'A demo of @container queries applying different styles at different widths',
    cssCode: `.cmq-wrap {
  container-type: inline-size;
  container-name: cmq;
  width: 200px;
  animation: cmq-resize 6s ease-in-out infinite;
}
.cmq-card {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #2a2a3e;
  transition: all 0.3s ease;
}
.cmq-title {
  color: #10b981;
  font-size: 0.65rem;
  font-weight: 700;
}
.cmq-body {
  color: #94a3b8;
  font-size: 0.5rem;
}
@container cmq (min-width: 160px) {
  .cmq-card { flex-direction: row; background: #1a1a2e; border-color: #10b98144; }
}
@keyframes cmq-resize {
  0%, 100% { width: 200px; }
  40% { width: 120px; }
  70% { width: 80px; }
}`,
    htmlCode: `<div class="cmq-wrap"><div class="cmq-card"><div class="cmq-title">Title</div><div class="cmq-body">Body adapts to container</div></div></div>`,
    isNew: true,
  },
  {
    id: 'container-responsive-padding',
    name: 'Responsive Padding',
    category: 'container',
    tags: ['container', 'padding', 'responsive', 'spacing', 'adaptive'],
    difficulty: 'beginner',
    description: 'Padding that scales proportionally as the container changes size',
    cssCode: `.responsive-pad {
  container-type: inline-size;
  width: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  animation: pad-resize 4s ease-in-out infinite;
}
.responsive-pad-inner {
  padding: 3cqw;
  background: #10b98122;
  border: 1px solid #10b98144;
  border-radius: 6px;
  margin: 2cqw;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
}
@keyframes pad-resize {
  0%, 100% { width: 200px; }
  50% { width: 100px; }
}`,
    htmlCode: `<div class="responsive-pad"><div class="responsive-pad-inner">Responsive padding</div></div>`,
    isNew: true,
  },
  {
    id: 'container-dynamic-grid',
    name: 'Dynamic Grid Areas',
    category: 'container',
    tags: ['container', 'grid', 'areas', 'dynamic', 'template'],
    difficulty: 'advanced',
    description: 'Grid template areas that reorganize based on container size with animated transitions',
    cssCode: `.dynamic-grid {
  width: 200px;
  height: 120px;
  background: #1a1a2e;
  border-radius: 10px;
  padding: 8px;
  display: grid;
  gap: 6px;
  animation: grid-template-shift 6s ease-in-out infinite;
}
.grid-area-a {
  background: #10b98133;
  border: 1px solid #10b98144;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 0.55rem;
  font-weight: 700;
}
.grid-area-b {
  background: #3b82f622;
  border: 1px solid #3b82f644;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: 0.55rem;
  font-weight: 700;
}
@keyframes grid-template-shift {
  0%, 100% { grid-template-columns: 1fr 2fr; grid-template-rows: 1fr 1fr; }
  33% { grid-template-columns: 1fr 1fr; grid-template-rows: 2fr 1fr; }
  66% { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
}`,
    htmlCode: `<div class="dynamic-grid"><div class="grid-area-a">A</div><div class="grid-area-b">B</div><div class="grid-area-b">C</div><div class="grid-area-a">D</div></div>`,
    isNew: true,
  },
];
