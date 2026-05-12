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

export const effectsRemaining1a: CSSEffect[] = [
  // ===== AVATARS (10) =====
  {
    id: 'stack-avatars',
    name: 'Stack Avatars',
    category: 'avatars',
    tags: ['avatar', 'stack', 'overlap', 'group'],
    difficulty: 'beginner',
    description: 'Overlapping stacked avatar group with negative margins',
    cssCode: `.stack-avatars {
  display: flex;
  align-items: center;
}
.stack-avatars .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  background: #1a1a2e;
  margin-left: -12px;
  transition: transform 0.2s ease, z-index 0s;
  object-fit: cover;
}
.stack-avatars .avatar:first-child {
  margin-left: 0;
}
.stack-avatars .avatar:hover {
  transform: translateY(-4px) scale(1.15);
  z-index: 10;
}`,
    htmlCode: `<div class="stack-avatars">
  <img class="avatar" src="https://i.pravatar.cc/80?img=1" alt="">
  <img class="avatar" src="https://i.pravatar.cc/80?img=2" alt="">
  <img class="avatar" src="https://i.pravatar.cc/80?img=3" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'online-indicator',
    name: 'Online Indicator',
    category: 'avatars',
    tags: ['avatar', 'online', 'status', 'dot'],
    difficulty: 'beginner',
    description: 'Avatar with a pulsing online status indicator',
    cssCode: `.online-indicator {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #1a1a2e;
  overflow: visible;
}
.online-indicator img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.online-indicator::after {
  content: '';
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid #0a0a1a;
  border-radius: 50%;
  animation: online-pulse 2s ease-in-out infinite;
}
@keyframes online-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
  50% { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
}`,
    htmlCode: `<div class="online-indicator">
  <img src="https://i.pravatar.cc/96?img=4" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'status-ring',
    name: 'Status Ring',
    category: 'avatars',
    tags: ['avatar', 'ring', 'status', 'border'],
    difficulty: 'intermediate',
    description: 'Avatar surrounded by a rotating gradient status ring',
    cssCode: `.status-ring {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(#10b981, #3b82f6, #8b5cf6, #10b981);
  animation: ring-spin 3s linear infinite;
}
.status-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  object-fit: cover;
}
@keyframes ring-spin {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<div class="status-ring">
  <img src="https://i.pravatar.cc/96?img=5" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'avatar-flip',
    name: 'Avatar Flip',
    category: 'avatars',
    tags: ['avatar', 'flip', '3d', 'hover'],
    difficulty: 'intermediate',
    description: 'Avatar flips to reveal info on the back face on hover',
    cssCode: `.avatar-flip-wrap {
  perspective: 500px;
  width: 64px;
  height: 64px;
}
.avatar-flip {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.avatar-flip-wrap:hover .avatar-flip {
  transform: rotateY(180deg);
}
.avatar-flip .front, .avatar-flip .back {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}
.avatar-flip .front { background: #1a1a2e; color: #10b981; }
.avatar-flip .back {
  background: #10b981;
  color: #000;
  transform: rotateY(180deg);
}`,
    htmlCode: `<div class="avatar-flip-wrap">
  <div class="avatar-flip">
    <div class="front"><img src="https://i.pravatar.cc/96?img=6" style="width:100%;height:100%;border-radius:50%;object-fit:cover" alt=""></div>
    <div class="back">JD</div>
  </div>
</div>`,
    isNew: true,
  },
  {
    id: 'avatar-expand',
    name: 'Avatar Expand',
    category: 'avatars',
    tags: ['avatar', 'expand', 'hover', 'grow'],
    difficulty: 'beginner',
    description: 'Avatar smoothly expands with details on hover',
    cssCode: `.avatar-expand {
  display: flex;
  align-items: center;
  gap: 0;
  background: #0f0f1a;
  border-radius: 30px;
  padding: 4px;
  cursor: pointer;
  transition: gap 0.3s ease, padding 0.3s ease;
  overflow: hidden;
}
.avatar-expand img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.avatar-expand .info {
  max-width: 0;
  opacity: 0;
  white-space: nowrap;
  transition: max-width 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  color: #e2e8f0;
  font-size: 13px;
  font-weight: 600;
}
.avatar-expand:hover {
  gap: 10px;
  padding: 4px 16px 4px 4px;
}
.avatar-expand:hover .info {
  max-width: 120px;
  opacity: 1;
}`,
    htmlCode: `<div class="avatar-expand">
  <img src="https://i.pravatar.cc/80?img=7" alt="">
  <span class="info">Jane Doe</span>
</div>`,
    isNew: true,
  },
  {
    id: 'avatar-group',
    name: 'Avatar Group',
    category: 'avatars',
    tags: ['avatar', 'group', 'counter', 'overflow'],
    difficulty: 'intermediate',
    description: 'Avatar group with overflow counter badge',
    cssCode: `.avatar-group {
  display: flex;
  align-items: center;
}
.avatar-group .avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  margin-left: -8px;
  object-fit: cover;
  transition: transform 0.2s ease;
}
.avatar-group .avatar:first-child { margin-left: 0; }
.avatar-group .avatar:hover { transform: scale(1.15); z-index: 5; }
.avatar-group .counter {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1a1a2e;
  color: #10b981;
  border: 2px solid #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  margin-left: -8px;
}`,
    htmlCode: `<div class="avatar-group">
  <img class="avatar" src="https://i.pravatar.cc/72?img=8" alt="">
  <img class="avatar" src="https://i.pravatar.cc/72?img=9" alt="">
  <img class="avatar" src="https://i.pravatar.cc/72?img=10" alt="">
  <span class="counter">+5</span>
</div>`,
    isNew: true,
  },
  {
    id: 'avatar-glow',
    name: 'Avatar Glow',
    category: 'avatars',
    tags: ['avatar', 'glow', 'hover', 'light'],
    difficulty: 'beginner',
    description: 'Avatar emits a colored glow on hover',
    cssCode: `.avatar-glow {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  object-fit: cover;
  cursor: pointer;
}
.avatar-glow:hover {
  box-shadow: 0 0 15px #10b98155, 0 0 30px #10b98133, 0 0 45px #10b98122;
  transform: scale(1.05);
}`,
    htmlCode: `<img class="avatar-glow" src="https://i.pravatar.cc/112?img=11" alt="">`,
    isNew: true,
  },
  {
    id: 'avatar-pulse',
    name: 'Avatar Pulse',
    category: 'avatars',
    tags: ['avatar', 'pulse', 'animation', 'ring'],
    difficulty: 'beginner',
    description: 'Avatar with a continuously pulsing ring animation',
    cssCode: `.avatar-pulse-wrap {
  position: relative;
  display: inline-block;
}
.avatar-pulse-wrap img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.avatar-pulse-wrap::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #10b981;
  animation: av-pulse 2s ease-out infinite;
}
@keyframes av-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.35); opacity: 0; }
}`,
    htmlCode: `<div class="avatar-pulse-wrap">
  <img src="https://i.pravatar.cc/96?img=12" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'avatar-border-anim',
    name: 'Avatar Border Anim',
    category: 'avatars',
    tags: ['avatar', 'border', 'animated', 'gradient'],
    difficulty: 'intermediate',
    description: 'Avatar with an animated rotating gradient border',
    cssCode: `.avatar-border-anim {
  --angle: 0deg;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(from var(--angle), #10b981, #3b82f6, #ec4899, #10b981);
  animation: border-spin 2s linear infinite;
}
.avatar-border-anim img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #0a0a1a;
  object-fit: cover;
}
@keyframes border-spin {
  to { --angle: 360deg; }
}
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}`,
    htmlCode: `<div class="avatar-border-anim">
  <img src="https://i.pravatar.cc/112?img=13" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'avatar-morph',
    name: 'Avatar Morph',
    category: 'avatars',
    tags: ['avatar', 'morph', 'shape', 'animate'],
    difficulty: 'intermediate',
    description: 'Avatar continuously morphs between shapes',
    cssCode: `.avatar-morph {
  width: 56px;
  height: 56px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  object-fit: cover;
  animation: morph 4s ease-in-out infinite;
  transition: box-shadow 0.3s ease;
}
.avatar-morph:hover {
  box-shadow: 0 0 20px #10b98144;
}
@keyframes morph {
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 40% 60% 60% 40% / 70% 30% 50% 60%; }
  75% { border-radius: 50% 30% 40% 70% / 40% 70% 60% 30%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}`,
    htmlCode: `<img class="avatar-morph" src="https://i.pravatar.cc/112?img=14" alt="">`,
    isNew: true,
  },

  // ===== NAVIGATION (10) =====
  {
    id: 'hamburger-anim',
    name: 'Hamburger Anim',
    category: 'navigation',
    tags: ['navigation', 'hamburger', 'menu', 'animated'],
    difficulty: 'intermediate',
    description: 'Hamburger icon animates into an X on hover',
    cssCode: `.hamburger-anim {
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
}
.hamburger-anim span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #e2e8f0;
  border-radius: 2px;
  left: 0;
  transition: all 0.3s ease;
}
.hamburger-anim span:nth-child(1) { top: 0; }
.hamburger-anim span:nth-child(2) { top: 9px; }
.hamburger-anim span:nth-child(3) { top: 18px; }
.hamburger-anim:hover span:nth-child(1) { top: 9px; transform: rotate(45deg); }
.hamburger-anim:hover span:nth-child(2) { opacity: 0; }
.hamburger-anim:hover span:nth-child(3) { top: 9px; transform: rotate(-45deg); }`,
    htmlCode: `<button class="hamburger-anim">
  <span></span><span></span><span></span>
</button>`,
    isNew: true,
  },
  {
    id: 'menu-slide',
    name: 'Menu Slide',
    category: 'navigation',
    tags: ['navigation', 'menu', 'slide', 'sidebar'],
    difficulty: 'intermediate',
    description: 'Slide-in side menu with smooth transition',
    cssCode: `.menu-slide-wrap {
  position: relative;
  width: 200px;
  height: 160px;
  overflow: hidden;
  background: #0a0a1a;
  border-radius: 8px;
}
.menu-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
  background: #111127;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  padding: 16px;
  box-sizing: border-box;
}
.menu-slide a {
  display: block;
  color: #e2e8f0;
  text-decoration: none;
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #1a1a2e;
  transition: color 0.2s, padding-left 0.2s;
}
.menu-slide a:hover {
  color: #10b981;
  padding-left: 8px;
}
.menu-slide-wrap:hover .menu-slide {
  transform: translateX(0);
}`,
    htmlCode: `<div class="menu-slide-wrap">
  <nav class="menu-slide">
    <a href="#">Home</a><a href="#">About</a><a href="#">Contact</a>
  </nav>
</div>`,
    isNew: true,
  },
  {
    id: 'dropdown-anim',
    name: 'Dropdown Anim',
    category: 'navigation',
    tags: ['navigation', 'dropdown', 'menu', 'animated'],
    difficulty: 'intermediate',
    description: 'Dropdown menu with staggered fade-in animation',
    cssCode: `.dropdown-anim {
  position: relative;
  display: inline-block;
}
.dropdown-anim .label {
  color: #e2e8f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  background: #111127;
  border-radius: 6px;
}
.dropdown-anim .menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: #111127;
  border-radius: 8px;
  padding: 6px 0;
  min-width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.25s ease;
}
.dropdown-anim:hover .menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-anim .menu a {
  display: block;
  padding: 8px 16px;
  color: #e2e8f0;
  text-decoration: none;
  font-size: 13px;
  transition: background 0.2s, color 0.2s;
}
.dropdown-anim .menu a:hover {
  background: #1a1a2e;
  color: #10b981;
}`,
    htmlCode: `<div class="dropdown-anim">
  <span class="label">Menu</span>
  <div class="menu">
    <a href="#">Profile</a><a href="#">Settings</a><a href="#">Logout</a>
  </div>
</div>`,
    isNew: true,
  },
  {
    id: 'tab-indicator',
    name: 'Tab Indicator',
    category: 'navigation',
    tags: ['navigation', 'tab', 'indicator', 'underline'],
    difficulty: 'intermediate',
    description: 'Tabs with a sliding underline indicator on hover',
    cssCode: `.tab-indicator {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #1a1a2e;
  position: relative;
}
.tab-indicator a {
  color: #64748b;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s ease;
  position: relative;
}
.tab-indicator a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #10b981;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.tab-indicator a:hover {
  color: #e2e8f0;
}
.tab-indicator a:hover::after {
  transform: scaleX(1);
}`,
    htmlCode: `<nav class="tab-indicator">
  <a href="#">Home</a><a href="#">Posts</a><a href="#">About</a>
</nav>`,
    isNew: true,
  },
  {
    id: 'breadcrumb-anim',
    name: 'Breadcrumb Anim',
    category: 'navigation',
    tags: ['navigation', 'breadcrumb', 'animated', 'trail'],
    difficulty: 'beginner',
    description: 'Animated breadcrumbs with hover highlight trail',
    cssCode: `.breadcrumb-anim {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
}
.breadcrumb-anim a {
  color: #64748b;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}
.breadcrumb-anim a:hover {
  color: #10b981;
  background: #10b98115;
}
.breadcrumb-anim .sep {
  color: #334155;
  transition: color 0.2s;
}
.breadcrumb-anim a:hover + .sep {
  color: #10b98155;
}
.breadcrumb-anim .current {
  color: #e2e8f0;
  font-weight: 600;
}`,
    htmlCode: `<nav class="breadcrumb-anim">
  <a href="#">Home</a><span class="sep">/</span>
  <a href="#">Products</a><span class="sep">/</span>
  <span class="current">Details</span>
</nav>`,
    isNew: true,
  },
  {
    id: 'navbar-shrink',
    name: 'Navbar Shrink',
    category: 'navigation',
    tags: ['navigation', 'navbar', 'shrink', 'scroll'],
    difficulty: 'intermediate',
    description: 'Navbar shrinks its padding and logo size on scroll',
    cssCode: `.navbar-shrink {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: #0f0f1a;
  border-radius: 8px;
  transition: padding 0.3s ease;
}
.navbar-shrink.shrunk {
  padding: 10px 24px;
}
.navbar-shrink .logo {
  font-size: 22px;
  font-weight: 800;
  color: #10b981;
  transition: font-size 0.3s ease;
}
.navbar-shrink.shrunk .logo {
  font-size: 16px;
}
.navbar-shrink .links {
  display: flex;
  gap: 16px;
}
.navbar-shrink .links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}
.navbar-shrink .links a:hover {
  color: #10b981;
}`,
    htmlCode: `<nav class="navbar-shrink shrunk">
  <span class="logo">Brand</span>
  <div class="links"><a href="#">Home</a><a href="#">About</a></div>
</nav>`,
    isNew: true,
  },
  {
    id: 'sidebar-toggle',
    name: 'Sidebar Toggle',
    category: 'navigation',
    tags: ['navigation', 'sidebar', 'toggle', 'collapse'],
    difficulty: 'intermediate',
    description: 'Collapsible sidebar that toggles between expanded and icon-only',
    cssCode: `.sidebar-toggle {
  display: flex;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
}
.sidebar-toggle .sidebar {
  width: 52px;
  background: #111127;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  transition: width 0.3s ease;
  overflow: hidden;
}
.sidebar-toggle:hover .sidebar {
  width: 160px;
}
.sidebar-toggle .sidebar .item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #94a3b8;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}
.sidebar-toggle .sidebar .item:hover {
  background: #1a1a2e;
  color: #10b981;
}
.sidebar-toggle .sidebar .icon {
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}
.sidebar-toggle .main {
  flex: 1;
  background: #0a0a1a;
  padding: 12px;
  color: #64748b;
  font-size: 12px;
}`,
    htmlCode: `<div class="sidebar-toggle">
  <div class="sidebar">
    <div class="item"><span class="icon">&#9776;</span>Dashboard</div>
    <div class="item"><span class="icon">&#9881;</span>Settings</div>
    <div class="item"><span class="icon">&#9993;</span>Messages</div>
  </div>
  <div class="main">Content area</div>
</div>`,
    isNew: true,
  },
  {
    id: 'mega-menu',
    name: 'Mega Menu',
    category: 'navigation',
    tags: ['navigation', 'mega', 'menu', 'dropdown'],
    difficulty: 'advanced',
    description: 'Full-width mega menu dropdown with grid layout',
    cssCode: `.mega-menu {
  position: relative;
  display: inline-block;
}
.mega-menu .trigger {
  color: #e2e8f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 16px;
  background: #111127;
  border-radius: 6px;
}
.mega-menu .panel {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: #111127;
  border-radius: 8px;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 140px);
  gap: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.25s ease;
}
.mega-menu:hover .panel {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.mega-menu .panel a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.mega-menu .panel a:hover {
  background: #1a1a2e;
  color: #10b981;
}`,
    htmlCode: `<div class="mega-menu">
  <span class="trigger">Products</span>
  <div class="panel">
    <a href="#">Phones</a><a href="#">Laptops</a><a href="#">Tablets</a>
    <a href="#">Watches</a><a href="#">Audio</a><a href="#">Accessories</a>
  </div>
</div>`,
    isNew: true,
  },
  {
    id: 'sticky-nav',
    name: 'Sticky Nav',
    category: 'navigation',
    tags: ['navigation', 'sticky', 'fixed', 'scroll'],
    difficulty: 'beginner',
    description: 'Navigation bar that stays fixed with backdrop blur',
    cssCode: `.sticky-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: rgba(15,15,26,0.85);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid #1a1a2e;
  position: sticky;
  top: 0;
  z-index: 50;
}
.sticky-nav .brand {
  font-size: 16px;
  font-weight: 800;
  color: #10b981;
}
.sticky-nav .links {
  display: flex;
  gap: 20px;
}
.sticky-nav .links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
}
.sticky-nav .links a:hover {
  color: #10b981;
}`,
    htmlCode: `<nav class="sticky-nav">
  <span class="brand">Logo</span>
  <div class="links"><a href="#">Home</a><a href="#">About</a><a href="#">Blog</a></div>
</nav>`,
    isNew: true,
  },
  {
    id: 'mobile-menu',
    name: 'Mobile Menu',
    category: 'navigation',
    tags: ['navigation', 'mobile', 'menu', 'responsive'],
    difficulty: 'intermediate',
    description: 'Full-screen overlay mobile menu with slide-in items',
    cssCode: `.mobile-menu-wrap {
  position: relative;
  width: 48px;
  height: 48px;
  background: #111127;
  border-radius: 8px;
  overflow: hidden;
}
.mobile-menu-btn {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.mobile-menu-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: #e2e8f0;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.mobile-menu-wrap:hover .mobile-menu-btn span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.mobile-menu-wrap:hover .mobile-menu-btn span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-wrap:hover .mobile-menu-btn span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}`,
    htmlCode: `<div class="mobile-menu-wrap">
  <button class="mobile-menu-btn">
    <span></span><span></span><span></span>
  </button>
</div>`,
    isNew: true,
  },

  // ===== IMAGE (10) =====
  {
    id: 'image-zoom',
    name: 'Image Zoom',
    category: 'image',
    tags: ['image', 'zoom', 'hover', 'scale'],
    difficulty: 'beginner',
    description: 'Image zooms in smoothly on hover within its container',
    cssCode: `.image-zoom {
  width: 240px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  background: #0a0a1a;
}
.image-zoom img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.image-zoom:hover img {
  transform: scale(1.2);
}`,
    htmlCode: `<div class="image-zoom">
  <img src="https://picsum.photos/480/320?random=1" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'image-overlay',
    name: 'Image Overlay',
    category: 'image',
    tags: ['image', 'overlay', 'hover', 'text'],
    difficulty: 'beginner',
    description: 'Dark overlay with text appears over image on hover',
    cssCode: `.image-overlay {
  position: relative;
  width: 240px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
}
.image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-overlay .overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,10,26,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.image-overlay .overlay span {
  color: #e2e8f0;
  font-weight: 700;
  font-size: 16px;
}
.image-overlay:hover .overlay {
  opacity: 1;
}`,
    htmlCode: `<div class="image-overlay">
  <img src="https://picsum.photos/480/320?random=2" alt="">
  <div class="overlay"><span>View</span></div>
</div>`,
    isNew: true,
  },
  {
    id: 'image-blur-reveal',
    name: 'Image Blur Reveal',
    category: 'image',
    tags: ['image', 'blur', 'reveal', 'filter'],
    difficulty: 'beginner',
    description: 'Blurred image sharpens on hover to reveal content',
    cssCode: `.image-blur-reveal {
  width: 240px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
}
.image-blur-reveal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px) brightness(0.6);
  transition: filter 0.5s ease, transform 0.4s ease;
}
.image-blur-reveal:hover img {
  filter: blur(0) brightness(1);
  transform: scale(1.05);
}`,
    htmlCode: `<div class="image-blur-reveal">
  <img src="https://picsum.photos/480/320?random=3" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'image-grayscale',
    name: 'Image Grayscale',
    category: 'image',
    tags: ['image', 'grayscale', 'filter', 'color'],
    difficulty: 'beginner',
    description: 'Grayscale image reveals full color on hover',
    cssCode: `.image-grayscale {
  width: 240px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
}
.image-grayscale img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.4s ease, transform 0.3s ease;
}
.image-grayscale:hover img {
  filter: grayscale(0);
  transform: scale(1.03);
}`,
    htmlCode: `<div class="image-grayscale">
  <img src="https://picsum.photos/480/320?random=4" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'image-slide',
    name: 'Image Slide',
    category: 'image',
    tags: ['image', 'slide', 'hover', 'reveal'],
    difficulty: 'intermediate',
    description: 'Image slides to reveal another image underneath',
    cssCode: `.image-slide {
  width: 240px;
  height: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.image-slide .back, .image-slide .front {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-slide .front {
  transition: transform 0.4s ease;
  z-index: 1;
}
.image-slide:hover .front {
  transform: translateX(100%);
}`,
    htmlCode: `<div class="image-slide">
  <img class="back" src="https://picsum.photos/480/320?random=5" alt="">
  <img class="front" src="https://picsum.photos/480/320?random=6" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'image-flip',
    name: 'Image Flip',
    category: 'image',
    tags: ['image', 'flip', '3d', 'hover'],
    difficulty: 'intermediate',
    description: 'Image flips vertically to reveal a caption on the back',
    cssCode: `.image-flip-wrap {
  perspective: 600px;
  width: 240px;
  height: 160px;
}
.image-flip {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}
.image-flip-wrap:hover .image-flip {
  transform: rotateY(180deg);
}
.image-flip .front, .image-flip .back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 8px;
}
.image-flip .front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.image-flip .back {
  background: #111127;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-weight: 700;
}`,
    htmlCode: `<div class="image-flip-wrap">
  <div class="image-flip">
    <div class="front"><img src="https://picsum.photos/480/320?random=7" alt=""></div>
    <div class="back">Caption</div>
  </div>
</div>`,
    isNew: true,
  },
  {
    id: 'image-tilt',
    name: 'Image Tilt',
    category: 'image',
    tags: ['image', 'tilt', '3d', 'perspective'],
    difficulty: 'intermediate',
    description: 'Image tilts in 3D perspective on hover with shadow',
    cssCode: `.image-tilt {
  width: 240px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform-style: preserve-3d;
  perspective: 600px;
}
.image-tilt img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-tilt:hover {
  transform: rotateY(-6deg) rotateX(4deg) scale(1.04);
  box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
}`,
    htmlCode: `<div class="image-tilt">
  <img src="https://picsum.photos/480/320?random=8" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'image-gallery',
    name: 'Image Gallery',
    category: 'image',
    tags: ['image', 'gallery', 'grid', 'hover'],
    difficulty: 'intermediate',
    description: 'Image grid gallery with hover zoom and overlay effect',
    cssCode: `.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 6px;
}
.image-gallery .item {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.image-gallery .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.image-gallery .item:hover img {
  transform: scale(1.15);
}
.image-gallery .item::after {
  content: '+';
  position: absolute;
  inset: 0;
  background: rgba(10,10,26,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 22px;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.2s;
}
.image-gallery .item:hover::after {
  opacity: 1;
}`,
    htmlCode: `<div class="image-gallery">
  <div class="item"><img src="https://picsum.photos/160/160?random=10" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/160?random=11" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/160?random=12" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/160?random=13" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/160?random=14" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/160?random=15" alt=""></div>
</div>`,
    isNew: true,
  },
  {
    id: 'image-lightbox',
    name: 'Image Lightbox',
    category: 'image',
    tags: ['image', 'lightbox', 'modal', 'overlay'],
    difficulty: 'intermediate',
    description: 'Image expands into a lightbox overlay on hover',
    cssCode: `.image-lightbox {
  width: 160px;
  height: 110px;
  border-radius: 8px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;
}
.image-lightbox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, border-radius 0.4s ease;
}
.image-lightbox::before {
  content: '\u{1F50D}';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10,10,26,0.5);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 24px;
  z-index: 1;
}
.image-lightbox:hover::before {
  opacity: 1;
}
.image-lightbox:hover img {
  transform: scale(1.08);
}`,
    htmlCode: `<div class="image-lightbox">
  <img src="https://picsum.photos/320/220?random=16" alt="">
</div>`,
    isNew: true,
  },
  {
    id: 'image-compare',
    name: 'Image Compare',
    category: 'image',
    tags: ['image', 'compare', 'slider', 'before-after'],
    difficulty: 'advanced',
    description: 'Before/after image comparison with a draggable divider',
    cssCode: `.image-compare {
  position: relative;
  width: 240px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  cursor: ew-resize;
}
.image-compare img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-compare .after {
  clip-path: inset(0 50% 0 0);
  transition: clip-path 0.3s ease;
}
.image-compare:hover .after {
  clip-path: inset(0 0 0 0);
}
.image-compare::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #10b981;
  transition: left 0.3s ease;
  z-index: 2;
}
.image-compare:hover::after {
  left: 0%;
}`,
    htmlCode: `<div class="image-compare">
  <img src="https://picsum.photos/480/320?random=17" alt="">
  <img class="after" src="https://picsum.photos/480/320?random=18" alt="">
</div>`,
    isNew: true,
  },
];
