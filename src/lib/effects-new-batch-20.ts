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

export const effectsNewBatch20: CSSEffect[] = [
  // ==================== LAYOUT (20) ====================
  {
    id: 'layout-grid-auto-fit',
    name: 'Grid Auto-Fit',
    category: 'layout',
    tags: ['layout', 'grid', 'auto-fit', 'responsive', 'columns'],
    difficulty: 'beginner',
    description: 'A responsive grid that automatically fits columns based on available space',
    cssCode: `.layout-grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 6px; width: 200px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
}
.layout-grid-auto-fit-item {
  background: #10b98122; border: 1px solid #10b98144;
  border-radius: 4px; padding: 10px 4px;
  text-align: center; color: #10b981;
  font-size: 0.55rem; font-weight: 700;
  transition: background 0.3s;
}
.layout-grid-auto-fit-item:hover { background: #10b98144; }`,
    htmlCode: `<div class="layout-grid-auto-fit"><div class="layout-grid-auto-fit-item">A</div><div class="layout-grid-auto-fit-item">B</div><div class="layout-grid-auto-fit-item">C</div><div class="layout-grid-auto-fit-item">D</div><div class="layout-grid-auto-fit-item">E</div><div class="layout-grid-auto-fit-item">F</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-masonry',
    name: 'Masonry',
    category: 'layout',
    tags: ['layout', 'masonry', 'columns', 'grid', 'staggered'],
    difficulty: 'intermediate',
    description: 'A masonry-style layout with items of varying heights flowing into columns',
    cssCode: `.layout-masonry {
  columns: 2; column-gap: 6px;
  width: 160px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
}
.layout-masonry-item {
  break-inside: avoid; margin-bottom: 6px;
  background: #10b98122; border: 1px solid #10b98144;
  border-radius: 4px; padding: 8px;
  color: #10b981; font-size: 0.55rem; font-weight: 600;
  transition: transform 0.3s;
}
.layout-masonry-item:nth-child(2) { padding: 20px 8px; }
.layout-masonry-item:nth-child(3) { padding: 14px 8px; }
.layout-masonry-item:hover { transform: scale(1.03); }`,
    htmlCode: `<div class="layout-masonry"><div class="layout-masonry-item">Block A</div><div class="layout-masonry-item">Block B tall</div><div class="layout-masonry-item">Block C mid</div><div class="layout-masonry-item">Block D</div><div class="layout-masonry-item">Block E tall</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-holy-grail',
    name: 'Holy Grail',
    category: 'layout',
    tags: ['layout', 'holy-grail', 'classic', 'header', 'footer'],
    difficulty: 'intermediate',
    description: 'The classic holy grail layout with header, footer, sidebar, and main content',
    cssCode: `.layout-holy-grail {
  display: grid; width: 180px; height: 120px;
  grid-template: "hd hd" 20px "sb mn" 1fr "ft ft" 18px / 40px 1fr;
  gap: 3px; background: #0f0f1a; border-radius: 8px;
  padding: 4px; font-size: 0.5rem; font-weight: 700;
}
.layout-holy-grail-hd { grid-area: hd; background: #10b98144; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #10b981; }
.layout-holy-grail-sb { grid-area: sb; background: #10b98122; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #10b98199; }
.layout-holy-grail-mn { grid-area: mn; background: #1a1a2e; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #e2e8f0; }
.layout-holy-grail-ft { grid-area: ft; background: #10b98122; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #10b98199; }`,
    htmlCode: `<div class="layout-holy-grail"><div class="layout-holy-grail-hd">Header</div><div class="layout-holy-grail-sb">Nav</div><div class="layout-holy-grail-mn">Content</div><div class="layout-holy-grail-ft">Footer</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-sidebar-sticky',
    name: 'Sidebar Sticky',
    category: 'layout',
    tags: ['layout', 'sidebar', 'sticky', 'scroll', 'navigation'],
    difficulty: 'intermediate',
    description: 'A layout with a sticky sidebar that stays in place while content scrolls',
    cssCode: `.layout-sidebar-sticky {
  display: flex; width: 180px; height: 120px;
  background: #0f0f1a; border-radius: 8px;
  overflow: hidden;
}
.layout-sidebar-sticky-nav {
  width: 50px; flex-shrink: 0;
  background: #10b98122; padding: 6px;
  display: flex; flex-direction: column; gap: 4px;
  position: sticky; top: 0; align-self: flex-start;
}
.layout-sidebar-sticky-nav-item {
  height: 8px; background: #10b98144; border-radius: 2px;
  transition: background 0.2s;
}
.layout-sidebar-sticky-nav-item:hover { background: #10b981; }
.layout-sidebar-sticky-content {
  flex: 1; padding: 8px; overflow-y: auto;
  color: #64748b; font-size: 0.45rem; line-height: 1.6;
}`,
    htmlCode: `<div class="layout-sidebar-sticky"><div class="layout-sidebar-sticky-nav"><div class="layout-sidebar-sticky-nav-item"></div><div class="layout-sidebar-sticky-nav-item"></div><div class="layout-sidebar-sticky-nav-item"></div></div><div class="layout-sidebar-sticky-content">Main content area that can scroll independently while the sidebar stays sticky at the top.</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-footer-sticky',
    name: 'Footer Sticky',
    category: 'layout',
    tags: ['layout', 'footer', 'sticky', 'bottom', 'viewport'],
    difficulty: 'beginner',
    description: 'A layout where the footer sticks to the bottom of the viewport regardless of content',
    cssCode: `.layout-footer-sticky {
  display: flex; flex-direction: column;
  min-height: 120px; width: 160px;
  background: #0f0f1a; border-radius: 8px;
}
.layout-footer-sticky-main {
  flex: 1; padding: 8px;
  color: #e2e8f0; font-size: 0.5rem;
}
.layout-footer-sticky-bar {
  background: #10b981; color: #fff;
  padding: 6px 8px; border-radius: 0 0 8px 8px;
  font-size: 0.5rem; font-weight: 700;
  text-align: center;
}`,
    htmlCode: `<div class="layout-footer-sticky"><div class="layout-footer-sticky-main">Content area pushes footer down</div><div class="layout-footer-sticky-bar">Sticky Footer</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-header-fixed',
    name: 'Header Fixed',
    category: 'layout',
    tags: ['layout', 'header', 'fixed', 'top', 'navigation'],
    difficulty: 'beginner',
    description: 'A fixed header that stays at the top of the viewport while content flows beneath',
    cssCode: `.layout-header-fixed {
  width: 180px; height: 120px;
  background: #0f0f1a; border-radius: 8px;
  overflow: hidden; position: relative;
}
.layout-header-fixed-bar {
  position: sticky; top: 0;
  background: #10b981; color: #fff;
  padding: 6px 10px; font-size: 0.55rem;
  font-weight: 700; z-index: 2;
  display: flex; justify-content: space-between;
}
.layout-header-fixed-body {
  padding: 8px; color: #64748b;
  font-size: 0.45rem; line-height: 1.5;
}`,
    htmlCode: `<div class="layout-header-fixed"><div class="layout-header-fixed-bar"><span>Logo</span><span>Menu</span></div><div class="layout-header-fixed-body">Content scrolls beneath the fixed header bar that always stays visible at the top.</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-sidebar-collapse',
    name: 'Sidebar Collapse',
    category: 'layout',
    tags: ['layout', 'sidebar', 'collapse', 'toggle', 'responsive'],
    difficulty: 'advanced',
    description: 'A sidebar that collapses to icons on hover, expanding to full width when needed',
    cssCode: `.layout-sidebar-collapse {
  display: flex; width: 180px; height: 120px;
  background: #0f0f1a; border-radius: 8px; overflow: hidden;
}
.layout-sidebar-collapse-nav {
  width: 28px; padding: 6px 4px;
  background: #10b98122; transition: width 0.3s ease;
  display: flex; flex-direction: column; gap: 6px;
  overflow: hidden;
}
.layout-sidebar-collapse:hover .layout-sidebar-collapse-nav { width: 60px; }
.layout-sidebar-collapse-item {
  height: 10px; background: #10b98144; border-radius: 3px;
  white-space: nowrap; overflow: hidden; font-size: 0.4rem;
  display: flex; align-items: center; padding: 0 4px;
  color: #10b981; font-weight: 600;
  transition: background 0.2s;
}
.layout-sidebar-collapse-item:hover { background: #10b98188; color: #fff; }
.layout-sidebar-collapse-content { flex: 1; padding: 8px; color: #64748b; font-size: 0.45rem; }`,
    htmlCode: `<div class="layout-sidebar-collapse"><div class="layout-sidebar-collapse-nav"><div class="layout-sidebar-collapse-item">Home</div><div class="layout-sidebar-collapse-item">About</div><div class="layout-sidebar-collapse-item">Blog</div></div><div class="layout-sidebar-collapse-content">Hover to expand sidebar</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-content-center',
    name: 'Content Center',
    category: 'layout',
    tags: ['layout', 'center', 'flexbox', 'vertical', 'horizontal'],
    difficulty: 'beginner',
    description: 'Perfectly centered content both vertically and horizontally using flexbox',
    cssCode: `.layout-content-center {
  width: 160px; height: 120px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.layout-content-center-box {
  background: #10b98122; border: 1px solid #10b98144;
  border-radius: 6px; padding: 12px 18px;
  text-align: center;
}
.layout-content-center-title {
  color: #10b981; font-size: 0.65rem; font-weight: 700;
}
.layout-content-center-sub {
  color: #64748b; font-size: 0.45rem; margin-top: 2px;
}`,
    htmlCode: `<div class="layout-content-center"><div class="layout-content-center-box"><div class="layout-content-center-title">Centered</div><div class="layout-content-center-sub">Perfect alignment</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-split',
    name: 'Split Layout',
    category: 'layout',
    tags: ['layout', 'split', 'two-column', 'divider', 'panels'],
    difficulty: 'beginner',
    description: 'A 50/50 split layout with two equal panels side by side',
    cssCode: `.layout-split {
  display: flex; width: 180px; height: 120px;
  background: #0f0f1a; border-radius: 8px; overflow: hidden;
}
.layout-split-left {
  flex: 1; background: #10b98122;
  display: flex; align-items: center; justify-content: center;
  border-right: 2px solid #10b98144;
  flex-direction: column; gap: 4px; padding: 8px;
}
.layout-split-right {
  flex: 1; background: #1a1a2e;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 4px; padding: 8px;
}
.layout-split-label { font-size: 0.55rem; font-weight: 700; color: #10b981; }
.layout-split-desc { font-size: 0.4rem; color: #64748b; text-align: center; }`,
    htmlCode: `<div class="layout-split"><div class="layout-split-left"><div class="layout-split-label">Panel A</div><div class="layout-split-desc">Left side</div></div><div class="layout-split-right"><div class="layout-split-label">Panel B</div><div class="layout-split-desc">Right side</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-card-grid',
    name: 'Card Grid',
    category: 'layout',
    tags: ['layout', 'card', 'grid', 'responsive', 'items'],
    difficulty: 'intermediate',
    description: 'A responsive card grid layout with hover lift effects on each card',
    cssCode: `.layout-card-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 6px; width: 170px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
}
.layout-card-grid-card {
  background: #1a1a2e; border: 1px solid #10b98122;
  border-radius: 6px; padding: 10px 6px;
  text-align: center; transition: transform 0.3s, box-shadow 0.3s;
}
.layout-card-grid-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px #10b98122;
  border-color: #10b98144;
}
.layout-card-grid-title { color: #10b981; font-size: 0.55rem; font-weight: 700; }
.layout-card-grid-desc { color: #64748b; font-size: 0.4rem; margin-top: 2px; }`,
    htmlCode: `<div class="layout-card-grid"><div class="layout-card-grid-card"><div class="layout-card-grid-title">Card 1</div><div class="layout-card-grid-desc">Alpha</div></div><div class="layout-card-grid-card"><div class="layout-card-grid-title">Card 2</div><div class="layout-card-grid-desc">Beta</div></div><div class="layout-card-grid-card"><div class="layout-card-grid-title">Card 3</div><div class="layout-card-grid-desc">Gamma</div></div><div class="layout-card-grid-card"><div class="layout-card-grid-title">Card 4</div><div class="layout-card-grid-desc">Delta</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-dashboard-grid',
    name: 'Dashboard Grid',
    category: 'layout',
    tags: ['layout', 'dashboard', 'grid', 'widgets', 'analytics'],
    difficulty: 'advanced',
    description: 'A dashboard layout with varied widget sizes spanning different grid areas',
    cssCode: `.layout-dashboard-grid {
  display: grid; width: 180px; height: 120px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 24px 1fr 24px;
  gap: 3px; background: #0f0f1a;
  border-radius: 8px; padding: 4px;
}
.layout-dashboard-grid-w1 { grid-column: 1/3; background: #10b98122; border-radius: 3px; display: flex; align-items: center; padding: 0 6px; color: #10b981; font-size: 0.45rem; font-weight: 700; }
.layout-dashboard-grid-w2 { background: #1a1a2e; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 0.4rem; }
.layout-dashboard-grid-w3 { grid-column: 1/4; background: #1a1a2e; border-radius: 3px; display: flex; align-items: center; padding: 0 6px; color: #e2e8f0; font-size: 0.4rem; }
.layout-dashboard-grid-w4 { background: #10b98122; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #10b981; font-size: 0.4rem; }
.layout-dashboard-grid-w5 { background: #1a1a2e; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 0.4rem; }`,
    htmlCode: `<div class="layout-dashboard-grid"><div class="layout-dashboard-grid-w1">Chart Area</div><div class="layout-dashboard-grid-w2">KPI</div><div class="layout-dashboard-grid-w3">Main Widget</div><div class="layout-dashboard-grid-w4">Stats</div><div class="layout-dashboard-grid-w5">Log</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-admin',
    name: 'Admin Layout',
    category: 'layout',
    tags: ['layout', 'admin', 'panel', 'sidebar', 'toolbar'],
    difficulty: 'advanced',
    description: 'An admin panel layout with sidebar navigation, toolbar, and content area',
    cssCode: `.layout-admin {
  display: grid; width: 180px; height: 120px;
  grid-template: "sb hd" 20px "sb mn" 1fr / 40px 1fr;
  gap: 3px; background: #0f0f1a; border-radius: 8px; padding: 4px;
}
.layout-admin-sb {
  grid-area: sb; background: #1a1a2e; border-radius: 3px;
  display: flex; flex-direction: column; gap: 3px; padding: 4px; align-items: center;
}
.layout-admin-sb-item { width: 14px; height: 14px; background: #10b98122; border-radius: 2px; transition: background 0.2s; }
.layout-admin-sb-item:hover { background: #10b981; }
.layout-admin-hd { grid-area: hd; background: #10b98122; border-radius: 3px; display: flex; align-items: center; padding: 0 6px; color: #10b981; font-size: 0.4rem; font-weight: 700; }
.layout-admin-mn { grid-area: mn; background: #0f0f1a; border-radius: 3px; padding: 6px; color: #64748b; font-size: 0.4rem; }`,
    htmlCode: `<div class="layout-admin"><div class="layout-admin-sb"><div class="layout-admin-sb-item"></div><div class="layout-admin-sb-item"></div><div class="layout-admin-sb-item"></div><div class="layout-admin-sb-item"></div></div><div class="layout-admin-hd">Admin Toolbar</div><div class="layout-admin-mn">Content panel</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-blog',
    name: 'Blog Layout',
    category: 'layout',
    tags: ['layout', 'blog', 'article', 'sidebar', 'reading'],
    difficulty: 'intermediate',
    description: 'A blog layout with main article area and a sidebar for meta or widgets',
    cssCode: `.layout-blog {
  display: flex; width: 180px; height: 120px;
  background: #0f0f1a; border-radius: 8px; overflow: hidden;
}
.layout-blog-main {
  flex: 1; padding: 8px; border-right: 1px solid #10b98122;
}
.layout-blog-title { color: #10b981; font-size: 0.6rem; font-weight: 700; margin-bottom: 4px; }
.layout-blog-body { color: #64748b; font-size: 0.4rem; line-height: 1.5; }
.layout-blog-sidebar {
  width: 45px; padding: 6px; flex-shrink: 0;
  display: flex; flex-direction: column; gap: 4px;
}
.layout-blog-widget {
  background: #10b98111; border-radius: 3px;
  padding: 4px; height: 24px;
  display: flex; align-items: center; justify-content: center;
  color: #10b98199; font-size: 0.35rem;
}`,
    htmlCode: `<div class="layout-blog"><div class="layout-blog-main"><div class="layout-blog-title">Blog Post Title</div><div class="layout-blog-body">Article preview text goes here in this blog layout example...</div></div><div class="layout-blog-sidebar"><div class="layout-blog-widget">Tags</div><div class="layout-blog-widget">Arch</div><div class="layout-blog-widget">Bio</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-magazine',
    name: 'Magazine Layout',
    category: 'layout',
    tags: ['layout', 'magazine', 'editorial', 'featured', 'grid'],
    difficulty: 'advanced',
    description: 'A magazine-style layout with a featured hero area and smaller article slots',
    cssCode: `.layout-magazine {
  display: grid; width: 180px; height: 120px;
  grid-template: "hero hero side" 1fr "sub1 sub2 side" 50px / 1fr 1fr 50px;
  gap: 3px; background: #0f0f1a; border-radius: 8px; padding: 4px;
}
.layout-magazine-hero {
  grid-area: hero; background: linear-gradient(135deg, #10b98133, #0f0f1a);
  border-radius: 4px; padding: 6px;
  display: flex; align-items: flex-end;
  color: #10b981; font-size: 0.55rem; font-weight: 700;
}
.layout-magazine-sub1 { grid-area: sub1; background: #1a1a2e; border-radius: 3px; padding: 4px; color: #e2e8f0; font-size: 0.4rem; }
.layout-magazine-sub2 { grid-area: sub2; background: #1a1a2e; border-radius: 3px; padding: 4px; color: #e2e8f0; font-size: 0.4rem; }
.layout-magazine-side { grid-area: side; background: #10b98122; border-radius: 3px; padding: 4px; color: #10b981; font-size: 0.35rem; display: flex; align-items: center; writing-mode: vertical-rl; }`,
    htmlCode: `<div class="layout-magazine"><div class="layout-magazine-hero">Featured Story</div><div class="layout-magazine-sub1">Article 2</div><div class="layout-magazine-sub2">Article 3</div><div class="layout-magazine-side">Trending</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-gallery',
    name: 'Gallery Layout',
    category: 'layout',
    tags: ['layout', 'gallery', 'images', 'grid', 'masonry'],
    difficulty: 'intermediate',
    description: 'A gallery layout with varied image sizes creating visual interest',
    cssCode: `.layout-gallery {
  display: grid; width: 170px; height: 110px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3px; background: #0f0f1a; border-radius: 8px; padding: 4px;
}
.layout-gallery-item {
  background: #1a1a2e; border-radius: 3px;
  display: flex; align-items: center; justify-content: center;
  color: #10b98166; font-size: 0.45rem; font-weight: 700;
  transition: background 0.3s, transform 0.3s;
  overflow: hidden;
}
.layout-gallery-item:nth-child(1) { grid-column: span 2; background: #10b98122; color: #10b981; }
.layout-gallery-item:nth-child(4) { grid-row: span 2; background: #10b98115; color: #10b98188; }
.layout-gallery-item:hover { background: #10b98144; transform: scale(1.02); }`,
    htmlCode: `<div class="layout-gallery"><div class="layout-gallery-item">Hero</div><div class="layout-gallery-item">2</div><div class="layout-gallery-item">3</div><div class="layout-gallery-item">4</div><div class="layout-gallery-item">5</div><div class="layout-gallery-item">6</div><div class="layout-gallery-item">7</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-feature-grid',
    name: 'Feature Grid',
    category: 'layout',
    tags: ['layout', 'feature', 'grid', 'icons', 'showcase'],
    difficulty: 'beginner',
    description: 'A feature grid layout showcasing items with icon-like indicators',
    cssCode: `.layout-feature-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 5px; width: 170px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
}
.layout-feature-grid-item {
  background: #1a1a2e; border-radius: 6px;
  padding: 8px 4px; text-align: center;
  transition: border-color 0.3s;
  border: 1px solid transparent;
}
.layout-feature-grid-item:hover { border-color: #10b98144; }
.layout-feature-grid-icon {
  width: 16px; height: 16px; margin: 0 auto 4px;
  background: #10b98133; border-radius: 4px;
}
.layout-feature-grid-name { color: #e2e8f0; font-size: 0.45rem; font-weight: 600; }`,
    htmlCode: `<div class="layout-feature-grid"><div class="layout-feature-grid-item"><div class="layout-feature-grid-icon"></div><div class="layout-feature-grid-name">Fast</div></div><div class="layout-feature-grid-item"><div class="layout-feature-grid-icon"></div><div class="layout-feature-grid-name">Secure</div></div><div class="layout-feature-grid-item"><div class="layout-feature-grid-icon"></div><div class="layout-feature-grid-name">Scalable</div></div><div class="layout-feature-grid-item"><div class="layout-feature-grid-icon"></div><div class="layout-feature-grid-name">Easy</div></div><div class="layout-feature-grid-item"><div class="layout-feature-grid-icon"></div><div class="layout-feature-grid-name">Smart</div></div><div class="layout-feature-grid-item"><div class="layout-feature-grid-icon"></div><div class="layout-feature-grid-name">Open</div></div></div>`,
    isNew: true,
  },
  {
    id: 'layout-hero-section',
    name: 'Hero Section',
    category: 'layout',
    tags: ['layout', 'hero', 'landing', 'cta', 'banner'],
    difficulty: 'intermediate',
    description: 'A hero section layout with background gradient, heading, and call-to-action',
    cssCode: `.layout-hero-section {
  width: 180px; height: 110px;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e, #10b98115);
  border-radius: 8px; padding: 16px;
  display: flex; flex-direction: column; justify-content: center;
  position: relative; overflow: hidden;
}
.layout-hero-section::before {
  content: ''; position: absolute; top: -20px; right: -20px;
  width: 80px; height: 80px; border-radius: 50%;
  background: #10b98115;
}
.layout-hero-section-title { color: #e2e8f0; font-size: 0.75rem; font-weight: 800; position: relative; }
.layout-hero-section-sub { color: #64748b; font-size: 0.45rem; margin-top: 4px; position: relative; }
.layout-hero-section-cta {
  margin-top: 8px; display: inline-block;
  background: #10b981; color: #fff;
  padding: 4px 12px; border-radius: 4px;
  font-size: 0.5rem; font-weight: 700;
  position: relative; width: fit-content;
}`,
    htmlCode: `<div class="layout-hero-section"><div class="layout-hero-section-title">Build Something Amazing</div><div class="layout-hero-section-sub">Create stunning interfaces with CSS effects</div><div class="layout-hero-section-cta">Get Started</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-cta-section',
    name: 'CTA Section',
    category: 'layout',
    tags: ['layout', 'cta', 'call-to-action', 'banner', 'conversion'],
    difficulty: 'beginner',
    description: 'A call-to-action section with gradient background and action button',
    cssCode: `.layout-cta-section {
  width: 180px; padding: 14px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 8px; text-align: center;
}
.layout-cta-section-title { color: #fff; font-size: 0.65rem; font-weight: 800; }
.layout-cta-section-desc { color: #ffffffaa; font-size: 0.4rem; margin-top: 3px; }
.layout-cta-section-btn {
  margin-top: 8px; display: inline-block;
  background: #fff; color: #059669;
  padding: 4px 14px; border-radius: 4px;
  font-size: 0.5rem; font-weight: 800;
  transition: transform 0.2s;
}
.layout-cta-section-btn:hover { transform: scale(1.05); }`,
    htmlCode: `<div class="layout-cta-section"><div class="layout-cta-section-title">Ready to Start?</div><div class="layout-cta-section-desc">Join thousands of creators today</div><div class="layout-cta-section-btn">Sign Up Free</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-footer-columns',
    name: 'Footer Columns',
    category: 'layout',
    tags: ['layout', 'footer', 'columns', 'links', 'sitemap'],
    difficulty: 'beginner',
    description: 'A multi-column footer layout with link groups and social icons',
    cssCode: `.layout-footer-columns {
  width: 180px; padding: 10px;
  background: #1a1a2e; border-radius: 8px;
}
.layout-footer-columns-row {
  display: flex; gap: 8px; margin-bottom: 8px;
}
.layout-footer-columns-col { flex: 1; }
.layout-footer-columns-heading { color: #10b981; font-size: 0.5rem; font-weight: 700; margin-bottom: 3px; }
.layout-footer-columns-link { display: block; color: #64748b; font-size: 0.38rem; margin-bottom: 2px; transition: color 0.2s; }
.layout-footer-columns-link:hover { color: #10b981; }
.layout-footer-columns-bottom { border-top: 1px solid #10b98122; padding-top: 6px; color: #64748b; font-size: 0.35rem; text-align: center; }`,
    htmlCode: `<div class="layout-footer-columns"><div class="layout-footer-columns-row"><div class="layout-footer-columns-col"><div class="layout-footer-columns-heading">Product</div><div class="layout-footer-columns-link">Features</div><div class="layout-footer-columns-link">Pricing</div></div><div class="layout-footer-columns-col"><div class="layout-footer-columns-heading">Company</div><div class="layout-footer-columns-link">About</div><div class="layout-footer-columns-link">Careers</div></div><div class="layout-footer-columns-col"><div class="layout-footer-columns-heading">Support</div><div class="layout-footer-columns-link">Help</div><div class="layout-footer-columns-link">Contact</div></div></div><div class="layout-footer-columns-bottom">&copy; 2025 CSS Effects</div></div>`,
    isNew: true,
  },
  {
    id: 'layout-nav',
    name: 'Nav Layout',
    category: 'layout',
    tags: ['layout', 'navigation', 'navbar', 'menu', 'responsive'],
    difficulty: 'intermediate',
    description: 'A navigation layout with logo, links, and action button in a horizontal bar',
    cssCode: `.layout-nav {
  display: flex; align-items: center;
  width: 180px; padding: 6px 10px;
  background: #1a1a2e; border-radius: 8px;
  gap: 6px;
}
.layout-nav-logo {
  color: #10b981; font-size: 0.6rem;
  font-weight: 900; margin-right: auto;
}
.layout-nav-link {
  color: #64748b; font-size: 0.45rem;
  font-weight: 600; transition: color 0.2s;
  text-decoration: none;
}
.layout-nav-link:hover { color: #10b981; }
.layout-nav-cta {
  background: #10b981; color: #fff;
  padding: 3px 8px; border-radius: 4px;
  font-size: 0.4rem; font-weight: 700;
}`,
    htmlCode: `<div class="layout-nav"><div class="layout-nav-logo">Logo</div><div class="layout-nav-link">Home</div><div class="layout-nav-link">About</div><div class="layout-nav-link">Blog</div><div class="layout-nav-cta">Sign Up</div></div>`,
    isNew: true,
  },

  // ==================== PRINT & TYPOGRAPHY (20) ====================
  {
    id: 'print-drop-cap',
    name: 'Drop Cap',
    category: 'print',
    tags: ['print', 'drop-cap', 'typography', 'initial', 'editorial'],
    difficulty: 'beginner',
    description: 'A decorative drop cap initial letter that sinks into the paragraph text',
    cssCode: `.print-drop-cap {
  width: 160px; background: #0f0f1a;
  border-radius: 8px; padding: 10px;
}
.print-drop-cap-text {
  color: #64748b; font-size: 0.45rem; line-height: 1.5;
}
.print-drop-cap-text::first-letter {
  float: left; font-size: 2rem;
  line-height: 0.8; padding-right: 4px;
  color: #10b981; font-weight: 900;
}`,
    htmlCode: `<div class="print-drop-cap"><div class="print-drop-cap-text">Once upon a time in the land of CSS, there lived a drop cap that made paragraphs look editorial and refined.</div></div>`,
    isNew: true,
  },
  {
    id: 'print-pull-quote',
    name: 'Pull Quote',
    category: 'print',
    tags: ['print', 'pull-quote', 'typography', 'quote', 'editorial'],
    difficulty: 'intermediate',
    description: 'An editorial pull quote with large decorative quotation marks and accent border',
    cssCode: `.print-pull-quote {
  width: 160px; padding: 12px 14px;
  background: #0f0f1a; border-radius: 8px;
  border-left: 3px solid #10b981;
  position: relative;
}
.print-pull-quote::before {
  content: '"'; position: absolute; top: -4px; left: 8px;
  font-size: 2rem; color: #10b98144; font-weight: 900; line-height: 1;
}
.print-pull-quote-text {
  color: #e2e8f0; font-size: 0.55rem;
  font-style: italic; font-weight: 600;
  line-height: 1.5; position: relative; z-index: 1;
}
.print-pull-quote-author {
  color: #10b981; font-size: 0.4rem;
  font-weight: 700; margin-top: 6px;
  font-style: normal;
}`,
    htmlCode: `<div class="print-pull-quote"><div class="print-pull-quote-text">Design is not just what it looks like, it is how it works.</div><div class="print-pull-quote-author">- Steve Jobs</div></div>`,
    isNew: true,
  },
  {
    id: 'print-text-columns',
    name: 'Text Columns',
    category: 'print',
    tags: ['print', 'columns', 'multi-column', 'text', 'newspaper'],
    difficulty: 'beginner',
    description: 'Multi-column text layout resembling newspaper or magazine formatting',
    cssCode: `.print-text-columns {
  width: 170px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-text-columns-text {
  column-count: 2; column-gap: 8px;
  column-rule: 1px solid #10b98122;
  color: #94a3b8; font-size: 0.4rem;
  line-height: 1.5; text-align: justify;
}`,
    htmlCode: `<div class="print-text-columns"><div class="print-text-columns-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div></div>`,
    isNew: true,
  },
  {
    id: 'print-hanging-punctuation',
    name: 'Hanging Punctuation',
    category: 'print',
    tags: ['print', 'hanging', 'punctuation', 'typography', 'optical'],
    difficulty: 'advanced',
    description: 'Hanging punctuation that pulls quote marks and bullets outside the text margin',
    cssCode: `.print-hanging-punctuation {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-hanging-punctuation-quote {
  text-indent: -0.6em; padding-left: 0.6em;
  color: #e2e8f0; font-size: 0.5rem;
  line-height: 1.6; font-style: italic;
}
.print-hanging-punctuation-quote::before {
  content: '"'; color: #10b981; font-weight: 900;
}
.print-hanging-punctuation-bullet {
  text-indent: -0.8em; padding-left: 0.8em;
  color: #94a3b8; font-size: 0.45rem;
  line-height: 1.6; margin-top: 4px;
}
.print-hanging-punctuation-bullet::before {
  content: '\\2022  '; color: #10b981; font-weight: 900;
}`,
    htmlCode: `<div class="print-hanging-punctuation"><div class="print-hanging-punctuation-quote">To be or not to be, that is the question.</div><div class="print-hanging-punctuation-bullet">First aligned item</div><div class="print-hanging-punctuation-bullet">Second aligned item</div></div>`,
    isNew: true,
  },
  {
    id: 'print-ligature',
    name: 'Ligature',
    category: 'print',
    tags: ['print', 'ligature', 'typography', 'opentype', 'glyphs'],
    difficulty: 'intermediate',
    description: 'OpenType ligatures that combine character pairs into single connected glyphs',
    cssCode: `.print-ligature {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-ligature-on {
  font-variant-ligatures: common-ligatures;
  color: #10b981; font-size: 0.7rem;
  font-weight: 700; letter-spacing: 1px;
}
.print-ligature-off {
  font-variant-ligatures: no-common-ligatures;
  color: #64748b; font-size: 0.7rem;
  font-weight: 700; letter-spacing: 1px;
}
.print-ligature-label { color: #64748b; font-size: 0.35rem; margin-top: 2px; }`,
    htmlCode: `<div class="print-ligature"><div class="print-ligature-on">fi fl ffi ffl</div><div class="print-ligature-label">Ligatures ON</div><div class="print-ligature-off">fi fl ffi ffl</div><div class="print-ligature-label">Ligatures OFF</div></div>`,
    isNew: true,
  },
  {
    id: 'print-small-caps',
    name: 'Small Caps',
    category: 'print',
    tags: ['print', 'small-caps', 'typography', 'opentype', 'uppercase'],
    difficulty: 'beginner',
    description: 'True small capitals styling using OpenType font-variant feature',
    cssCode: `.print-small-caps {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-small-caps-text {
  font-variant: small-caps;
  color: #10b981; font-size: 0.65rem;
  font-weight: 700; letter-spacing: 0.5px;
}
.print-small-caps-normal {
  color: #64748b; font-size: 0.65rem;
  font-weight: 700; letter-spacing: 0.5px;
  margin-top: 4px;
}
.print-small-caps-label { color: #475569; font-size: 0.35rem; margin-top: 2px; }`,
    htmlCode: `<div class="print-small-caps"><div class="print-small-caps-text">Small Caps Example</div><div class="print-small-caps-label">With small-caps</div><div class="print-small-caps-normal">Small Caps Example</div><div class="print-small-caps-label">Without</div></div>`,
    isNew: true,
  },
  {
    id: 'print-font-variant',
    name: 'Font Variant',
    category: 'print',
    tags: ['print', 'font-variant', 'opentype', 'stylistic', 'alternates'],
    difficulty: 'intermediate',
    description: 'Showcasing various font-variant features like old-style numerals and alternates',
    cssCode: `.print-font-variant {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-font-variant-row {
  display: flex; justify-content: space-between;
  margin-bottom: 6px; align-items: baseline;
}
.print-font-variant-default { color: #64748b; font-size: 0.6rem; font-weight: 700; }
.print-font-variant-oldstyle {
  font-variant-numeric: oldstyle-nums;
  color: #10b981; font-size: 0.6rem; font-weight: 700;
}
.print-font-variant-tabular {
  font-variant-numeric: tabular-nums;
  color: #10b981; font-size: 0.6rem; font-weight: 700;
}
.print-font-variant-label { color: #475569; font-size: 0.3rem; }`,
    htmlCode: `<div class="print-font-variant"><div class="print-font-variant-row"><span class="print-font-variant-default">0123456789</span><span class="print-font-variant-label">Default</span></div><div class="print-font-variant-row"><span class="print-font-variant-oldstyle">0123456789</span><span class="print-font-variant-label">Old-style</span></div><div class="print-font-variant-row"><span class="print-font-variant-tabular">$1,234.56</span><span class="print-font-variant-label">Tabular</span></div></div>`,
    isNew: true,
  },
  {
    id: 'print-text-decoration',
    name: 'Text Decoration',
    category: 'print',
    tags: ['print', 'decoration', 'underline', 'overline', 'line-through'],
    difficulty: 'beginner',
    description: 'Various text decoration styles including colored and styled underlines',
    cssCode: `.print-text-decoration {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; flex-direction: column; gap: 6px;
}
.print-text-decoration-1 { color: #e2e8f0; font-size: 0.55rem; text-decoration: underline #10b981; text-underline-offset: 3px; }
.print-text-decoration-2 { color: #e2e8f0; font-size: 0.55rem; text-decoration: underline wavy #10b981; text-underline-offset: 3px; }
.print-text-decoration-3 { color: #e2e8f0; font-size: 0.55rem; text-decoration: underline dashed #10b98188; text-underline-offset: 3px; }
.print-text-decoration-4 { color: #e2e8f0; font-size: 0.55rem; text-decoration: underline dotted #10b98166; text-underline-offset: 3px; }`,
    htmlCode: `<div class="print-text-decoration"><div class="print-text-decoration-1">Solid Underline</div><div class="print-text-decoration-2">Wavy Underline</div><div class="print-text-decoration-3">Dashed Underline</div><div class="print-text-decoration-4">Dotted Underline</div></div>`,
    isNew: true,
  },
  {
    id: 'print-underline-style',
    name: 'Underline Style',
    category: 'print',
    tags: ['print', 'underline', 'gradient', 'animated', 'accent'],
    difficulty: 'intermediate',
    description: 'A gradient animated underline that draws attention to linked text',
    cssCode: `.print-underline-style {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-underline-style-text {
  color: #e2e8f0; font-size: 0.6rem; font-weight: 600;
  display: inline; position: relative; cursor: pointer;
}
.print-underline-style-text::after {
  content: ''; position: absolute;
  left: 0; bottom: -2px; width: 100%; height: 2px;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.print-underline-style-text:hover::after { transform: scaleX(1); }`,
    htmlCode: `<div class="print-underline-style"><span class="print-underline-style-text">Hover for underline</span></div>`,
    isNew: true,
  },
  {
    id: 'print-overline-style',
    name: 'Overline Style',
    category: 'print',
    tags: ['print', 'overline', 'top-line', 'decorative', 'accent'],
    difficulty: 'intermediate',
    description: 'A decorative overline with animated accent color above the text',
    cssCode: `.print-overline-style {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-overline-style-text {
  color: #e2e8f0; font-size: 0.6rem; font-weight: 700;
  position: relative; display: inline-block; padding-top: 6px;
}
.print-overline-style-text::before {
  content: ''; position: absolute;
  top: 0; left: 0; width: 30px; height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
}
.print-overline-style-text:hover::before { width: 100%; }`,
    htmlCode: `<div class="print-overline-style"><span class="print-overline-style-text">Overline Text</span></div>`,
    isNew: true,
  },
  {
    id: 'print-strikethrough-style',
    name: 'Strikethrough Style',
    category: 'print',
    tags: ['print', 'strikethrough', 'line-through', 'sale', 'crossed'],
    difficulty: 'beginner',
    description: 'An animated strikethrough line that crosses out text with an accent color',
    cssCode: `.print-strikethrough-style {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-strikethrough-style-old {
  color: #64748b; font-size: 0.65rem; font-weight: 700;
  position: relative; display: inline-block;
}
.print-strikethrough-style-old::after {
  content: ''; position: absolute;
  left: 0; top: 50%; width: 0; height: 2px;
  background: #ef4444;
  animation: strike-through 1s ease forwards 0.5s;
}
.print-strikethrough-style-new {
  color: #10b981; font-size: 0.75rem; font-weight: 800;
  margin-left: 6px;
}
@keyframes strike-through { to { width: 100%; } }`,
    htmlCode: `<span class="print-strikethrough-style-old">$99</span><span class="print-strikethrough-style-new">$49</span>`,
    isNew: true,
  },
  {
    id: 'print-text-emphasis',
    name: 'Text Emphasis',
    category: 'print',
    tags: ['print', 'emphasis', 'ruby', 'dots', 'japanese'],
    difficulty: 'advanced',
    description: 'CSS text-emphasis that adds decorative dots or marks above characters',
    cssCode: `.print-text-emphasis {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-text-emphasis-dot {
  text-emphasis: filled dot #10b981;
  -webkit-text-emphasis: filled dot #10b981;
  color: #e2e8f0; font-size: 0.55rem;
  font-weight: 700; line-height: 1.8;
}
.print-text-emphasis-circle {
  text-emphasis: open circle #10b981;
  -webkit-text-emphasis: open circle #10b981;
  color: #e2e8f0; font-size: 0.55rem;
  font-weight: 700; line-height: 1.8; margin-top: 6px;
}`,
    htmlCode: `<div class="print-text-emphasis"><div class="print-text-emphasis-dot">Emphasized Text</div><div class="print-text-emphasis-circle">Circle Marks</div></div>`,
    isNew: true,
  },
  {
    id: 'print-ruby-text',
    name: 'Ruby Text',
    category: 'print',
    tags: ['print', 'ruby', 'annotation', 'pronunciation', 'cjk'],
    difficulty: 'intermediate',
    description: 'Ruby text annotations above base characters for pronunciation guides',
    cssCode: `.print-ruby-text {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-ruby-text-body {
  color: #e2e8f0; font-size: 0.8rem;
  font-weight: 700; line-height: 2.2;
  text-align: center;
}
.print-ruby-text-body rt {
  color: #10b981; font-size: 0.4rem;
  font-weight: 600;
}`,
    htmlCode: `<div class="print-ruby-text"><div class="print-ruby-text-body"><ruby>CSS<rt>Cascading Style Sheets</rt></ruby> <ruby>HTML<rt>HyperText Markup</rt></ruby></div></div>`,
    isNew: true,
  },
  {
    id: 'print-superscript',
    name: 'Superscript',
    category: 'print',
    tags: ['print', 'superscript', 'exponent', 'footnote', 'reference'],
    difficulty: 'beginner',
    description: 'Properly styled superscript text for footnotes and mathematical exponents',
    cssCode: `.print-superscript {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-superscript-text {
  color: #e2e8f0; font-size: 0.6rem;
  line-height: 1.6;
}
.print-superscript-text sup {
  color: #10b981; font-size: 0.55em;
  font-weight: 700; vertical-align: super;
  line-height: 0;
}
.print-superscript-text sup::before { content: '['; }
.print-superscript-text sup::after { content: ']'; }`,
    htmlCode: `<div class="print-superscript"><div class="print-superscript-text">E=mc<sup>2</sup> is a famous equation<sup>1</sup> in physics<sup>2</sup>.</div></div>`,
    isNew: true,
  },
  {
    id: 'print-subscript',
    name: 'Subscript',
    category: 'print',
    tags: ['print', 'subscript', 'chemistry', 'formula', 'math'],
    difficulty: 'beginner',
    description: 'Properly styled subscript text for chemical formulas and mathematical notation',
    cssCode: `.print-subscript {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-subscript-text {
  color: #e2e8f0; font-size: 0.6rem;
  line-height: 1.6;
}
.print-subscript-text sub {
  color: #10b981; font-size: 0.6em;
  font-weight: 700; vertical-align: sub;
  line-height: 0;
}`,
    htmlCode: `<div class="print-subscript"><div class="print-subscript-text">H<sub>2</sub>O is water, CO<sub>2</sub> is carbon dioxide, and CH<sub>4</sub> is methane.</div></div>`,
    isNew: true,
  },
  {
    id: 'print-abbreviation',
    name: 'Abbreviation',
    category: 'print',
    tags: ['print', 'abbreviation', 'tooltip', 'dotted', 'underline'],
    difficulty: 'beginner',
    description: 'Styled abbreviation with a dotted underline that hints at expansion on hover',
    cssCode: `.print-abbreviation {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-abbreviation-text {
  color: #e2e8f0; font-size: 0.55rem; line-height: 1.6;
}
.print-abbreviation-text abbr {
  text-decoration: underline dotted #10b981;
  text-underline-offset: 3px;
  color: #10b981; font-weight: 700;
  cursor: help;
  transition: color 0.2s;
}
.print-abbreviation-text abbr:hover { color: #34d399; }`,
    htmlCode: `<div class="print-abbreviation"><div class="print-abbreviation-text">Use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr> documents.</div></div>`,
    isNew: true,
  },
  {
    id: 'print-citation',
    name: 'Citation',
    category: 'print',
    tags: ['print', 'citation', 'reference', 'italic', 'academic'],
    difficulty: 'intermediate',
    description: 'An elegantly styled citation with decorative quotation marks and source formatting',
    cssCode: `.print-citation {
  width: 160px; padding: 10px;
  background: #0f0f1a; border-radius: 8px;
}
.print-citation-block {
  border-left: 2px solid #10b98144;
  padding-left: 10px; position: relative;
}
.print-citation-block::before {
  content: '"'; color: #10b981; font-size: 1.2rem;
  position: absolute; left: -4px; top: -8px;
  font-weight: 900;
}
.print-citation-text {
  color: #e2e8f0; font-size: 0.5rem;
  font-style: italic; line-height: 1.5;
}
.print-citation-source {
  color: #10b981; font-size: 0.4rem;
  font-style: normal; font-weight: 700;
  margin-top: 4px;
}`,
    htmlCode: `<div class="print-citation"><div class="print-citation-block"><div class="print-citation-text">The only way to do great work is to love what you do.</div><div class="print-citation-source">- Steve Jobs, Stanford 2005</div></div></div>`,
    isNew: true,
  },
  {
    id: 'print-code-block',
    name: 'Code Block',
    category: 'print',
    tags: ['print', 'code', 'monospace', 'syntax', 'developer'],
    difficulty: 'intermediate',
    description: 'A styled code block with dark background, line highlighting, and monospace font',
    cssCode: `.print-code-block {
  width: 170px; background: #0a0a1a;
  border-radius: 8px; overflow: hidden;
  border: 1px solid #10b98122;
}
.print-code-block-header {
  padding: 4px 10px; background: #10b98111;
  display: flex; gap: 4px; align-items: center;
}
.print-code-block-dot { width: 5px; height: 5px; border-radius: 50%; background: #10b98144; }
.print-code-block-dot:nth-child(1) { background: #ef4444; }
.print-code-block-dot:nth-child(2) { background: #eab308; }
.print-code-block-dot:nth-child(3) { background: #10b981; }
.print-code-block-body {
  padding: 8px 10px; font-family: monospace;
  color: #10b981; font-size: 0.45rem; line-height: 1.6;
}
.print-code-block-kw { color: #8b5cf6; }
.print-code-block-str { color: #f59e0b; }`,
    htmlCode: `<div class="print-code-block"><div class="print-code-block-header"><div class="print-code-block-dot"></div><div class="print-code-block-dot"></div><div class="print-code-block-dot"></div></div><div class="print-code-block-body"><span class="print-code-block-kw">const</span> x = <span class="print-code-block-str">"hello"</span>;</div></div>`,
    isNew: true,
  },
  {
    id: 'print-preformatted',
    name: 'Preformatted',
    category: 'print',
    tags: ['print', 'preformatted', 'pre', 'whitespace', 'monospace'],
    difficulty: 'beginner',
    description: 'A preformatted text block that preserves whitespace and line breaks',
    cssCode: `.print-preformatted {
  width: 170px; padding: 10px;
  background: #0a0a1a; border-radius: 8px;
  border: 1px solid #10b98122;
  overflow-x: auto;
}
.print-preformatted-pre {
  font-family: monospace; font-size: 0.45rem;
  color: #94a3b8; line-height: 1.5;
  margin: 0; white-space: pre;
}
.print-preformatted-pre strong { color: #10b981; font-weight: 700; }`,
    htmlCode: `<div class="print-preformatted"><pre class="print-preformatted-pre">  /\_/\
 ( o.o )
  > ^ <  <strong>CSS</strong>
 /|   |\
(_|   |_)</pre></div>`,
    isNew: true,
  },
  {
    id: 'print-line-numbers',
    name: 'Line Numbers',
    category: 'print',
    tags: ['print', 'line-numbers', 'code', 'editor', 'monospace'],
    difficulty: 'advanced',
    description: 'A code display with CSS-generated line numbers for each row',
    cssCode: `.print-line-numbers {
  width: 170px; background: #0a0a1a;
  border-radius: 8px; overflow: hidden;
  border: 1px solid #10b98122;
}
.print-line-numbers-row {
  display: flex; font-family: monospace; font-size: 0.42rem; line-height: 1.7;
}
.print-line-numbers-num {
  width: 22px; text-align: right; padding-right: 8px;
  color: #475569; user-select: none; flex-shrink: 0;
  border-right: 1px solid #10b98122;
}
.print-line-numbers-code {
  padding-left: 8px; color: #94a3b8; white-space: pre;
}
.print-line-numbers-code .kw { color: #8b5cf6; }
.print-line-numbers-code .fn { color: #10b981; }
.print-line-numbers-row:nth-child(2) { background: #10b98108; }`,
    htmlCode: `<div class="print-line-numbers"><div class="print-line-numbers-row"><span class="print-line-numbers-num">1</span><span class="print-line-numbers-code"><span class="kw">function</span> <span class="fn">greet</span>() {</span></div><div class="print-line-numbers-row"><span class="print-line-numbers-num">2</span><span class="print-line-numbers-code">  <span class="kw">return</span> <span class="fn">"hi"</span>;</span></div><div class="print-line-numbers-row"><span class="print-line-numbers-num">3</span><span class="print-line-numbers-code">}</span></div></div>`,
    isNew: true,
  },

  // ==================== COLOR & GRADIENTS (20) ====================
  {
    id: 'color-color-wheel',
    name: 'Color Wheel',
    category: 'color',
    tags: ['color', 'wheel', 'hue', 'spectrum', 'conic'],
    difficulty: 'intermediate',
    description: 'A conic gradient color wheel showing the full HSL spectrum',
    cssCode: `.color-color-wheel {
  width: 100px; height: 100px;
  border-radius: 50%;
  background: conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  position: relative;
  animation: color-wheel-spin 10s linear infinite;
}
.color-color-wheel::after {
  content: ''; position: absolute;
  inset: 25px; border-radius: 50%;
  background: #0f0f1a;
}
@keyframes color-wheel-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="color-color-wheel"></div>`,
    isNew: true,
  },
  {
    id: 'color-gradient-mesh',
    name: 'Gradient Mesh',
    category: 'color',
    tags: ['color', 'mesh', 'gradient', 'radial', 'blended'],
    difficulty: 'advanced',
    description: 'A mesh-like gradient effect using overlapping radial gradients',
    cssCode: `.color-gradient-mesh {
  width: 160px; height: 100px;
  border-radius: 8px; position: relative;
  overflow: hidden;
  background: #0f0f1a;
}
.color-gradient-mesh::before {
  content: ''; position: absolute; inset: -20px;
  background:
    radial-gradient(circle at 30% 30%, #10b98166, transparent 50%),
    radial-gradient(circle at 70% 60%, #3b82f666, transparent 50%),
    radial-gradient(circle at 50% 80%, #8b5cf666, transparent 50%);
  animation: mesh-drift 6s ease-in-out infinite;
}
.color-gradient-mesh-label { position: relative; z-index: 1; color: #e2e8f0; font-size: 0.55rem; font-weight: 700; padding: 10px; }
@keyframes mesh-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(5px, -5px) scale(1.05); }
  66% { transform: translate(-5px, 5px) scale(0.95); }
}`,
    htmlCode: `<div class="color-gradient-mesh"><div class="color-gradient-mesh-label">Mesh</div></div>`,
    isNew: true,
  },
  {
    id: 'color-duotone',
    name: 'Duotone',
    category: 'color',
    tags: ['color', 'duotone', 'two-tone', 'filter', 'contrast'],
    difficulty: 'intermediate',
    description: 'A duotone effect using CSS filters to map colors to a two-tone palette',
    cssCode: `.color-duotone {
  width: 160px; height: 80px;
  background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
  border-radius: 8px; display: flex;
  align-items: center; justify-content: center;
  position: relative;
}
.color-duotone-overlay {
  position: absolute; inset: 0;
  background: #0f0f1a; mix-blend-mode: color;
  border-radius: 8px;
}
.color-duotone-tint {
  position: absolute; inset: 0;
  background: #10b981; mix-blend-mode: lighten;
  border-radius: 8px; opacity: 0.6;
}
.color-duotone-text { position: relative; z-index: 1; color: #fff; font-size: 0.65rem; font-weight: 800; }`,
    htmlCode: `<div class="color-duotone"><div class="color-duotone-overlay"></div><div class="color-duotone-tint"></div><span class="color-duotone-text">Duotone</span></div>`,
    isNew: true,
  },
  {
    id: 'color-monochrome',
    name: 'Monochrome',
    category: 'color',
    tags: ['color', 'monochrome', 'single-hue', 'shades', 'tints'],
    difficulty: 'beginner',
    description: 'A monochrome color palette display showing shades and tints of a single hue',
    cssCode: `.color-monochrome {
  display: flex; gap: 3px; width: 170px;
  padding: 8px; background: #0f0f1a; border-radius: 8px;
}
.color-monochrome-swatch {
  flex: 1; height: 50px; border-radius: 4px;
  display: flex; align-items: flex-end;
  justify-content: center; padding-bottom: 4px;
  font-size: 0.3rem; color: #fff; font-weight: 700;
  transition: transform 0.2s;
}
.color-monochrome-swatch:hover { transform: scaleY(1.1); }
.color-monochrome-swatch:nth-child(1) { background: #022c22; }
.color-monochrome-swatch:nth-child(2) { background: #064e3b; }
.color-monochrome-swatch:nth-child(3) { background: #059669; }
.color-monochrome-swatch:nth-child(4) { background: #10b981; }
.color-monochrome-swatch:nth-child(5) { background: #6ee7b7; }`,
    htmlCode: `<div class="color-monochrome"><div class="color-monochrome-swatch">50</div><div class="color-monochrome-swatch">200</div><div class="color-monochrome-swatch">400</div><div class="color-monochrome-swatch">600</div><div class="color-monochrome-swatch">900</div></div>`,
    isNew: true,
  },
  {
    id: 'color-complementary',
    name: 'Complementary',
    category: 'color',
    tags: ['color', 'complementary', 'opposite', 'contrast', 'harmony'],
    difficulty: 'beginner',
    description: 'A complementary color scheme showing two colors opposite on the color wheel',
    cssCode: `.color-complementary {
  display: flex; width: 160px;
  border-radius: 8px; overflow: hidden;
}
.color-complementary-a {
  flex: 1; height: 60px;
  background: #10b981;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.5rem; font-weight: 700;
}
.color-complementary-b {
  flex: 1; height: 60px;
  background: #b910e7;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.5rem; font-weight: 700;
}`,
    htmlCode: `<div class="color-complementary"><div class="color-complementary-a">#10b981</div><div class="color-complementary-b">#b910e7</div></div>`,
    isNew: true,
  },
  {
    id: 'color-analogous',
    name: 'Analogous',
    category: 'color',
    tags: ['color', 'analogous', 'adjacent', 'harmony', 'neighboring'],
    difficulty: 'beginner',
    description: 'An analogous color scheme with three neighboring hues on the color wheel',
    cssCode: `.color-analogous {
  display: flex; width: 160px;
  border-radius: 8px; overflow: hidden;
}
.color-analogous-swatch {
  flex: 1; height: 60px;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 0.45rem; font-weight: 700;
  transition: flex 0.3s;
}
.color-analogous-swatch:hover { flex: 1.5; }
.color-analogous-swatch:nth-child(1) { background: #10b981; }
.color-analogous-swatch:nth-child(2) { background: #0ea5e9; }
.color-analogous-swatch:nth-child(3) { background: #6366f1; }`,
    htmlCode: `<div class="color-analogous"><div class="color-analogous-swatch">Emerald</div><div class="color-analogous-swatch">Sky</div><div class="color-analogous-swatch">Indigo</div></div>`,
    isNew: true,
  },
  {
    id: 'color-triadic',
    name: 'Triadic',
    category: 'color',
    tags: ['color', 'triadic', 'triangle', 'three-color', 'harmony'],
    difficulty: 'intermediate',
    description: 'A triadic color scheme with three equally spaced hues forming a triangle',
    cssCode: `.color-triadic {
  display: flex; flex-direction: column;
  width: 160px; border-radius: 8px; overflow: hidden;
}
.color-triadic-row { display: flex; height: 40px; }
.color-triadic-a { flex: 1; background: #10b981; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.45rem; font-weight: 700; }
.color-triadic-b { flex: 1; background: #e71073; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.45rem; font-weight: 700; }
.color-triadic-c { flex: 1; background: #e7b910; display: flex; align-items: center; justify-content: center; color: #1a1a2e; font-size: 0.45rem; font-weight: 700; }
.color-triadic-blend { display: flex; height: 20px; }
.color-triadic-blend span { flex: 1; background: linear-gradient(90deg, #10b98133, #e7107333, #e7b91033); }`,
    htmlCode: `<div class="color-triadic"><div class="color-triadic-row"><div class="color-triadic-a">Emerald</div><div class="color-triadic-b">Rose</div><div class="color-triadic-c">Amber</div></div><div class="color-triadic-blend"><span></span></div></div>`,
    isNew: true,
  },
  {
    id: 'color-split-complementary',
    name: 'Split Complementary',
    category: 'color',
    tags: ['color', 'split', 'complementary', 'three-color', 'harmony'],
    difficulty: 'intermediate',
    description: 'A split-complementary scheme with a base color and two colors adjacent to its complement',
    cssCode: `.color-split-complementary {
  display: flex; width: 160px; border-radius: 8px; overflow: hidden;
}
.color-split-complementary-swatch {
  flex: 1; height: 60px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.4rem; font-weight: 700;
  transition: transform 0.2s;
}
.color-split-complementary-swatch:hover { transform: scaleY(1.08); }
.color-split-complementary-swatch:nth-child(1) { background: #10b981; color: #fff; }
.color-split-complementary-swatch:nth-child(2) { background: #e71010; color: #fff; }
.color-split-complementary-swatch:nth-child(3) { background: #106be7; color: #fff; }`,
    htmlCode: `<div class="color-split-complementary"><div class="color-split-complementary-swatch">Base</div><div class="color-split-complementary-swatch">Split 1</div><div class="color-split-complementary-swatch">Split 2</div></div>`,
    isNew: true,
  },
  {
    id: 'color-tetradic',
    name: 'Tetradic',
    category: 'color',
    tags: ['color', 'tetradic', 'rectangle', 'four-color', 'harmony'],
    difficulty: 'advanced',
    description: 'A tetradic color scheme with four colors forming a rectangle on the color wheel',
    cssCode: `.color-tetradic {
  display: grid; grid-template-columns: 1fr 1fr;
  width: 140px; border-radius: 8px; overflow: hidden;
}
.color-tetradic-swatch {
  height: 45px; display: flex;
  align-items: center; justify-content: center;
  color: #fff; font-size: 0.4rem; font-weight: 700;
  transition: transform 0.2s;
}
.color-tetradic-swatch:hover { transform: scale(1.05); z-index: 1; }
.color-tetradic-swatch:nth-child(1) { background: #10b981; }
.color-tetradic-swatch:nth-child(2) { background: #e710b9; }
.color-tetradic-swatch:nth-child(3) { background: #b9e710; color: #1a1a2e; }
.color-tetradic-swatch:nth-child(4) { background: #10b9e7; }`,
    htmlCode: `<div class="color-tetradic"><div class="color-tetradic-swatch">Emerald</div><div class="color-tetradic-swatch">Pink</div><div class="color-tetradic-swatch">Lime</div><div class="color-tetradic-swatch">Cyan</div></div>`,
    isNew: true,
  },
  {
    id: 'color-warm-palette',
    name: 'Warm Palette',
    category: 'color',
    tags: ['color', 'warm', 'red', 'orange', 'yellow'],
    difficulty: 'beginner',
    description: 'A warm color palette with reds, oranges, and yellows that evoke warmth',
    cssCode: `.color-warm-palette {
  display: flex; flex-direction: column;
  gap: 3px; width: 160px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
}
.color-warm-palette-row { display: flex; gap: 3px; }
.color-warm-palette-swatch {
  flex: 1; height: 24px; border-radius: 3px;
  transition: transform 0.2s;
}
.color-warm-palette-swatch:hover { transform: scale(1.1); }
.color-warm-palette-row:nth-child(1) .color-warm-palette-swatch:nth-child(1) { background: #ef4444; }
.color-warm-palette-row:nth-child(1) .color-warm-palette-swatch:nth-child(2) { background: #f97316; }
.color-warm-palette-row:nth-child(1) .color-warm-palette-swatch:nth-child(3) { background: #eab308; }
.color-warm-palette-row:nth-child(2) .color-warm-palette-swatch:nth-child(1) { background: #dc2626; }
.color-warm-palette-row:nth-child(2) .color-warm-palette-swatch:nth-child(2) { background: #ea580c; }
.color-warm-palette-row:nth-child(2) .color-warm-palette-swatch:nth-child(3) { background: #ca8a04; }`,
    htmlCode: `<div class="color-warm-palette"><div class="color-warm-palette-row"><div class="color-warm-palette-swatch"></div><div class="color-warm-palette-swatch"></div><div class="color-warm-palette-swatch"></div></div><div class="color-warm-palette-row"><div class="color-warm-palette-swatch"></div><div class="color-warm-palette-swatch"></div><div class="color-warm-palette-swatch"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-cool-palette',
    name: 'Cool Palette',
    category: 'color',
    tags: ['color', 'cool', 'blue', 'green', 'purple'],
    difficulty: 'beginner',
    description: 'A cool color palette with blues, greens, and purples that evoke calm',
    cssCode: `.color-cool-palette {
  display: flex; flex-direction: column;
  gap: 3px; width: 160px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
}
.color-cool-palette-row { display: flex; gap: 3px; }
.color-cool-palette-swatch {
  flex: 1; height: 24px; border-radius: 3px;
  transition: transform 0.2s;
}
.color-cool-palette-swatch:hover { transform: scale(1.1); }
.color-cool-palette-row:nth-child(1) .color-cool-palette-swatch:nth-child(1) { background: #3b82f6; }
.color-cool-palette-row:nth-child(1) .color-cool-palette-swatch:nth-child(2) { background: #10b981; }
.color-cool-palette-row:nth-child(1) .color-cool-palette-swatch:nth-child(3) { background: #8b5cf6; }
.color-cool-palette-row:nth-child(2) .color-cool-palette-swatch:nth-child(1) { background: #2563eb; }
.color-cool-palette-row:nth-child(2) .color-cool-palette-swatch:nth-child(2) { background: #059669; }
.color-cool-palette-row:nth-child(2) .color-cool-palette-swatch:nth-child(3) { background: #7c3aed; }`,
    htmlCode: `<div class="color-cool-palette"><div class="color-cool-palette-row"><div class="color-cool-palette-swatch"></div><div class="color-cool-palette-swatch"></div><div class="color-cool-palette-swatch"></div></div><div class="color-cool-palette-row"><div class="color-cool-palette-swatch"></div><div class="color-cool-palette-swatch"></div><div class="color-cool-palette-swatch"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-neutral-palette',
    name: 'Neutral Palette',
    category: 'color',
    tags: ['color', 'neutral', 'gray', 'muted', 'subtle'],
    difficulty: 'beginner',
    description: 'A neutral color palette with grays and muted tones for subtle designs',
    cssCode: `.color-neutral-palette {
  display: flex; gap: 2px; width: 170px;
  padding: 8px; background: #0f0f1a; border-radius: 8px;
}
.color-neutral-palette-swatch {
  flex: 1; height: 50px; border-radius: 3px;
  display: flex; align-items: flex-end;
  justify-content: center; padding-bottom: 3px;
  font-size: 0.3rem; color: #0f0f1a; font-weight: 700;
  transition: transform 0.2s;
}
.color-neutral-palette-swatch:hover { transform: scaleY(1.08); }
.color-neutral-palette-swatch:nth-child(1) { background: #f8fafc; }
.color-neutral-palette-swatch:nth-child(2) { background: #e2e8f0; }
.color-neutral-palette-swatch:nth-child(3) { background: #94a3b8; }
.color-neutral-palette-swatch:nth-child(4) { background: #475569; color: #fff; }
.color-neutral-palette-swatch:nth-child(5) { background: #1e293b; color: #94a3b8; }
.color-neutral-palette-swatch:nth-child(6) { background: #0f172a; color: #64748b; }`,
    htmlCode: `<div class="color-neutral-palette"><div class="color-neutral-palette-swatch">50</div><div class="color-neutral-palette-swatch">200</div><div class="color-neutral-palette-swatch">400</div><div class="color-neutral-palette-swatch">600</div><div class="color-neutral-palette-swatch">800</div><div class="color-neutral-palette-swatch">950</div></div>`,
    isNew: true,
  },
  {
    id: 'color-pastel-palette',
    name: 'Pastel Palette',
    category: 'color',
    tags: ['color', 'pastel', 'soft', 'light', 'gentle'],
    difficulty: 'beginner',
    description: 'A pastel color palette with soft, light tones for gentle designs',
    cssCode: `.color-pastel-palette {
  display: flex; gap: 3px; width: 170px;
  padding: 8px; background: #0f0f1a; border-radius: 8px;
}
.color-pastel-palette-swatch {
  flex: 1; height: 50px; border-radius: 6px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.color-pastel-palette-swatch:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px #00000044;
}
.color-pastel-palette-swatch:nth-child(1) { background: #a7f3d0; }
.color-pastel-palette-swatch:nth-child(2) { background: #bae6fd; }
.color-pastel-palette-swatch:nth-child(3) { background: #c4b5fd; }
.color-pastel-palette-swatch:nth-child(4) { background: #fde68a; }
.color-pastel-palette-swatch:nth-child(5) { background: #fca5a5; }`,
    htmlCode: `<div class="color-pastel-palette"><div class="color-pastel-palette-swatch"></div><div class="color-pastel-palette-swatch"></div><div class="color-pastel-palette-swatch"></div><div class="color-pastel-palette-swatch"></div><div class="color-pastel-palette-swatch"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-vibrant-palette',
    name: 'Vibrant Palette',
    category: 'color',
    tags: ['color', 'vibrant', 'saturated', 'bold', 'energetic'],
    difficulty: 'intermediate',
    description: 'A vibrant color palette with highly saturated, bold, energetic hues',
    cssCode: `.color-vibrant-palette {
  display: flex; gap: 3px; width: 170px;
  padding: 8px; background: #0f0f1a; border-radius: 8px;
}
.color-vibrant-palette-swatch {
  flex: 1; height: 50px; border-radius: 6px;
  transition: transform 0.2s;
  position: relative;
}
.color-vibrant-palette-swatch:hover { transform: scaleY(1.12); }
.color-vibrant-palette-swatch:nth-child(1) { background: #10b981; animation: vibe-pulse 2s ease infinite; }
.color-vibrant-palette-swatch:nth-child(2) { background: #3b82f6; animation: vibe-pulse 2s ease infinite 0.3s; }
.color-vibrant-palette-swatch:nth-child(3) { background: #8b5cf6; animation: vibe-pulse 2s ease infinite 0.6s; }
.color-vibrant-palette-swatch:nth-child(4) { background: #ef4444; animation: vibe-pulse 2s ease infinite 0.9s; }
.color-vibrant-palette-swatch:nth-child(5) { background: #f59e0b; animation: vibe-pulse 2s ease infinite 1.2s; }
@keyframes vibe-pulse { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.3); } }`,
    htmlCode: `<div class="color-vibrant-palette"><div class="color-vibrant-palette-swatch"></div><div class="color-vibrant-palette-swatch"></div><div class="color-vibrant-palette-swatch"></div><div class="color-vibrant-palette-swatch"></div><div class="color-vibrant-palette-swatch"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-earth-tones',
    name: 'Earth Tones',
    category: 'color',
    tags: ['color', 'earth', 'natural', 'brown', 'organic'],
    difficulty: 'beginner',
    description: 'An earth tones palette with natural browns, greens, and warm organic hues',
    cssCode: `.color-earth-tones {
  display: flex; gap: 3px; width: 170px;
  padding: 8px; background: #0f0f1a; border-radius: 8px;
}
.color-earth-tones-swatch {
  flex: 1; height: 50px; border-radius: 4px;
  transition: transform 0.2s;
}
.color-earth-tones-swatch:hover { transform: scaleY(1.08); }
.color-earth-tones-swatch:nth-child(1) { background: #92400e; }
.color-earth-tones-swatch:nth-child(2) { background: #78350f; }
.color-earth-tones-swatch:nth-child(3) { background: #365314; }
.color-earth-tones-swatch:nth-child(4) { background: #3f6212; }
.color-earth-tones-swatch:nth-child(5) { background: #a16207; }`,
    htmlCode: `<div class="color-earth-tones"><div class="color-earth-tones-swatch"></div><div class="color-earth-tones-swatch"></div><div class="color-earth-tones-swatch"></div><div class="color-earth-tones-swatch"></div><div class="color-earth-tones-swatch"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-ocean-palette',
    name: 'Ocean Palette',
    category: 'color',
    tags: ['color', 'ocean', 'sea', 'blue', 'teal'],
    difficulty: 'intermediate',
    description: 'An ocean-inspired palette with deep blues, teals, and seafoam greens',
    cssCode: `.color-ocean-palette {
  width: 170px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; flex-direction: column; gap: 3px;
}
.color-ocean-palette-row { display: flex; gap: 3px; }
.color-ocean-palette-swatch {
  flex: 1; height: 30px; border-radius: 4px;
  position: relative; overflow: hidden;
  transition: transform 0.2s;
}
.color-ocean-palette-swatch:hover { transform: scale(1.05); }
.color-ocean-palette-swatch::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(180deg, #ffffff22, transparent);
}
.color-ocean-palette-swatch:nth-child(1) { background: #0c4a6e; }
.color-ocean-palette-swatch:nth-child(2) { background: #0e7490; }
.color-ocean-palette-swatch:nth-child(3) { background: #14b8a6; }
.color-ocean-palette-swatch:nth-child(4) { background: #99f6e4; }`,
    htmlCode: `<div class="color-ocean-palette"><div class="color-ocean-palette-row"><div class="color-ocean-palette-swatch"></div><div class="color-ocean-palette-swatch"></div><div class="color-ocean-palette-swatch"></div><div class="color-ocean-palette-swatch"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-sunset-palette',
    name: 'Sunset Palette',
    category: 'color',
    tags: ['color', 'sunset', 'gradient', 'warm', 'orange'],
    difficulty: 'intermediate',
    description: 'A sunset-inspired palette with a gradient from warm gold to deep purple',
    cssCode: `.color-sunset-palette {
  width: 170px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; flex-direction: column; gap: 3px;
}
.color-sunset-palette-bar {
  height: 50px; border-radius: 6px;
  background: linear-gradient(90deg, #fbbf24, #f97316, #ef4444, #db2777, #7c3aed);
  animation: sunset-shimmer 4s ease-in-out infinite;
}
.color-sunset-palette-dots {
  display: flex; gap: 6px;
  justify-content: center;
}
.color-sunset-palette-dot {
  width: 18px; height: 18px; border-radius: 50%;
  transition: transform 0.2s;
}
.color-sunset-palette-dot:hover { transform: scale(1.3); }
.color-sunset-palette-dot:nth-child(1) { background: #fbbf24; }
.color-sunset-palette-dot:nth-child(2) { background: #f97316; }
.color-sunset-palette-dot:nth-child(3) { background: #ef4444; }
.color-sunset-palette-dot:nth-child(4) { background: #db2777; }
.color-sunset-palette-dot:nth-child(5) { background: #7c3aed; }
@keyframes sunset-shimmer { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.15); } }`,
    htmlCode: `<div class="color-sunset-palette"><div class="color-sunset-palette-bar"></div><div class="color-sunset-palette-dots"><div class="color-sunset-palette-dot"></div><div class="color-sunset-palette-dot"></div><div class="color-sunset-palette-dot"></div><div class="color-sunset-palette-dot"></div><div class="color-sunset-palette-dot"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-forest-palette',
    name: 'Forest Palette',
    category: 'color',
    tags: ['color', 'forest', 'green', 'nature', 'deep'],
    difficulty: 'intermediate',
    description: 'A forest-inspired palette with deep greens, browns, and mossy tones',
    cssCode: `.color-forest-palette {
  width: 170px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; flex-direction: column; gap: 3px;
}
.color-forest-palette-row { display: flex; gap: 3px; }
.color-forest-palette-swatch {
  flex: 1; height: 36px; border-radius: 4px;
  transition: transform 0.2s;
}
.color-forest-palette-swatch:hover { transform: scaleY(1.1); }
.color-forest-palette-row:nth-child(1) .color-forest-palette-swatch:nth-child(1) { background: #1a2e05; }
.color-forest-palette-row:nth-child(1) .color-forest-palette-swatch:nth-child(2) { background: #365314; }
.color-forest-palette-row:nth-child(1) .color-forest-palette-swatch:nth-child(3) { background: #4d7c0f; }
.color-forest-palette-row:nth-child(2) .color-forest-palette-swatch:nth-child(1) { background: #3f6212; }
.color-forest-palette-row:nth-child(2) .color-forest-palette-swatch:nth-child(2) { background: #15803d; }
.color-forest-palette-row:nth-child(2) .color-forest-palette-swatch:nth-child(3) { background: #86efac; }`,
    htmlCode: `<div class="color-forest-palette"><div class="color-forest-palette-row"><div class="color-forest-palette-swatch"></div><div class="color-forest-palette-swatch"></div><div class="color-forest-palette-swatch"></div></div><div class="color-forest-palette-row"><div class="color-forest-palette-swatch"></div><div class="color-forest-palette-swatch"></div><div class="color-forest-palette-swatch"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'color-neon-palette',
    name: 'Neon Palette',
    category: 'color',
    tags: ['color', 'neon', 'glow', 'bright', 'electric'],
    difficulty: 'advanced',
    description: 'A neon palette with electric glowing colors that radiate on dark backgrounds',
    cssCode: `.color-neon-palette {
  width: 170px; padding: 8px;
  background: #0a0a1a; border-radius: 8px;
  display: flex; gap: 4px;
}
.color-neon-palette-swatch {
  flex: 1; height: 50px; border-radius: 4px;
  transition: transform 0.2s;
}
.color-neon-palette-swatch:hover { transform: scale(1.08); }
.color-neon-palette-swatch:nth-child(1) {
  background: #10b981;
  box-shadow: 0 0 10px #10b98188, inset 0 0 10px #10b98144;
  animation: neon-flicker 2s ease infinite;
}
.color-neon-palette-swatch:nth-child(2) {
  background: #06b6d4;
  box-shadow: 0 0 10px #06b6d488, inset 0 0 10px #06b6d444;
  animation: neon-flicker 2s ease infinite 0.5s;
}
.color-neon-palette-swatch:nth-child(3) {
  background: #d946ef;
  box-shadow: 0 0 10px #d946ef88, inset 0 0 10px #d946ef44;
  animation: neon-flicker 2s ease infinite 1s;
}
@keyframes neon-flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; } }`,
    htmlCode: `<div class="color-neon-palette"><div class="color-neon-palette-swatch"></div><div class="color-neon-palette-swatch"></div><div class="color-neon-palette-swatch"></div></div>`,
    isNew: true,
  },
  {
    id: 'color-vintage-palette',
    name: 'Vintage Palette',
    category: 'color',
    tags: ['color', 'vintage', 'retro', 'muted', 'faded'],
    difficulty: 'intermediate',
    description: 'A vintage-inspired palette with faded, muted tones that evoke retro nostalgia',
    cssCode: `.color-vintage-palette {
  width: 170px; padding: 8px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; flex-direction: column; gap: 3px;
}
.color-vintage-palette-row { display: flex; gap: 3px; }
.color-vintage-palette-swatch {
  flex: 1; height: 36px; border-radius: 4px;
  transition: transform 0.2s; position: relative;
}
.color-vintage-palette-swatch::after {
  content: ''; position: absolute; inset: 0;
  border-radius: 4px;
  background: linear-gradient(180deg, #ffffff15, transparent);
}
.color-vintage-palette-swatch:hover { transform: scale(1.05); }
.color-vintage-palette-row:nth-child(1) .color-vintage-palette-swatch:nth-child(1) { background: #b45309; }
.color-vintage-palette-row:nth-child(1) .color-vintage-palette-swatch:nth-child(2) { background: #a16207; }
.color-vintage-palette-row:nth-child(1) .color-vintage-palette-swatch:nth-child(3) { background: #4d7c0f; }
.color-vintage-palette-row:nth-child(2) .color-vintage-palette-swatch:nth-child(1) { background: #9f1239; }
.color-vintage-palette-row:nth-child(2) .color-vintage-palette-swatch:nth-child(2) { background: #7e22ce; }
.color-vintage-palette-row:nth-child(2) .color-vintage-palette-swatch:nth-child(3) { background: #1e40af; }`,
    htmlCode: `<div class="color-vintage-palette"><div class="color-vintage-palette-row"><div class="color-vintage-palette-swatch"></div><div class="color-vintage-palette-swatch"></div><div class="color-vintage-palette-swatch"></div></div><div class="color-vintage-palette-row"><div class="color-vintage-palette-swatch"></div><div class="color-vintage-palette-swatch"></div><div class="color-vintage-palette-swatch"></div></div></div>`,
    isNew: true,
  },

  // ==================== MOTION & PHYSICS (20) ====================
  {
    id: 'motion-ease-in',
    name: 'Ease-In',
    category: 'motion',
    tags: ['motion', 'ease-in', 'acceleration', 'timing', 'start-slow'],
    difficulty: 'beginner',
    description: 'A ball that accelerates from a standstill using ease-in timing',
    cssCode: `.motion-ease-in {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
}
.motion-ease-in-ball {
  width: 16px; height: 16px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%;
  transform: translateY(-50%);
  animation: ease-in-roll 2s ease-in infinite;
}
.motion-ease-in-track {
  position: absolute; bottom: 22px;
  left: 8px; right: 8px; height: 1px;
  background: #10b98122;
}
@keyframes ease-in-roll {
  0% { left: 8px; }
  100% { left: calc(100% - 24px); }
}`,
    htmlCode: `<div class="motion-ease-in"><div class="motion-ease-in-track"></div><div class="motion-ease-in-ball"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-ease-out',
    name: 'Ease-Out',
    category: 'motion',
    tags: ['motion', 'ease-out', 'deceleration', 'timing', 'end-slow'],
    difficulty: 'beginner',
    description: 'A ball that decelerates to a stop using ease-out timing',
    cssCode: `.motion-ease-out {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
}
.motion-ease-out-ball {
  width: 16px; height: 16px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%;
  transform: translateY(-50%);
  animation: ease-out-roll 2s ease-out infinite;
}
.motion-ease-out-track {
  position: absolute; bottom: 22px;
  left: 8px; right: 8px; height: 1px;
  background: #10b98122;
}
@keyframes ease-out-roll {
  0% { left: 8px; }
  100% { left: calc(100% - 24px); }
}`,
    htmlCode: `<div class="motion-ease-out"><div class="motion-ease-out-track"></div><div class="motion-ease-out-ball"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-ease-in-out',
    name: 'Ease-In-Out',
    category: 'motion',
    tags: ['motion', 'ease-in-out', 'smooth', 'timing', 'symmetric'],
    difficulty: 'beginner',
    description: 'A ball that accelerates and decelerates smoothly using ease-in-out timing',
    cssCode: `.motion-ease-in-out {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
}
.motion-ease-in-out-ball {
  width: 16px; height: 16px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%;
  transform: translateY(-50%);
  animation: eio-roll 2s ease-in-out infinite alternate;
}
.motion-ease-in-out-track {
  position: absolute; bottom: 22px;
  left: 8px; right: 8px; height: 1px;
  background: #10b98122;
}
@keyframes eio-roll {
  0% { left: 8px; }
  100% { left: calc(100% - 24px); }
}`,
    htmlCode: `<div class="motion-ease-in-out"><div class="motion-ease-in-out-track"></div><div class="motion-ease-in-out-ball"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-cubic-bezier',
    name: 'Cubic Bezier',
    category: 'motion',
    tags: ['motion', 'cubic-bezier', 'custom', 'curve', 'timing'],
    difficulty: 'intermediate',
    description: 'A custom cubic-bezier timing curve that creates a unique motion profile',
    cssCode: `.motion-cubic-bezier {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
}
.motion-cubic-bezier-ball {
  width: 16px; height: 16px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%;
  transform: translateY(-50%);
  animation: bez-roll 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate;
}
.motion-cubic-bezier-track {
  position: absolute; bottom: 22px;
  left: 8px; right: 8px; height: 1px;
  background: #10b98122;
}
@keyframes bez-roll {
  0% { left: 8px; }
  100% { left: calc(100% - 24px); }
}`,
    htmlCode: `<div class="motion-cubic-bezier"><div class="motion-cubic-bezier-track"></div><div class="motion-cubic-bezier-ball"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-spring',
    name: 'Spring Animation',
    category: 'motion',
    tags: ['motion', 'spring', 'physics', 'elastic', 'natural'],
    difficulty: 'intermediate',
    description: 'A spring-like animation with overshoot and settle using keyframe physics',
    cssCode: `.motion-spring {
  width: 80px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.motion-spring-box {
  width: 30px; height: 30px;
  background: #10b981; border-radius: 6px;
  animation: spring-settle 1.5s ease-out infinite;
}
@keyframes spring-settle {
  0% { transform: scale(0); }
  30% { transform: scale(1.3); }
  50% { transform: scale(0.9); }
  70% { transform: scale(1.1); }
  85% { transform: scale(0.97); }
  100% { transform: scale(1); }
}`,
    htmlCode: `<div class="motion-spring"><div class="motion-spring-box"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-bounce',
    name: 'Bounce Effect',
    category: 'motion',
    tags: ['motion', 'bounce', 'gravity', 'physics', 'impact'],
    difficulty: 'intermediate',
    description: 'A ball bouncing with realistic gravity and diminishing rebounds',
    cssCode: `.motion-bounce {
  width: 80px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
}
.motion-bounce-ball {
  width: 14px; height: 14px;
  background: #10b981; border-radius: 50%;
  position: absolute; left: 50%;
  transform: translateX(-50%);
  animation: bounce-gravity 1s ease-in infinite;
}
.motion-bounce-ground {
  position: absolute; bottom: 10px;
  left: 10px; right: 10px; height: 1px;
  background: #10b98144;
}
@keyframes bounce-gravity {
  0% { top: 6px; animation-timing-function: ease-in; }
  45% { top: 56px; animation-timing-function: ease-out; }
  55% { top: 56px; }
  80% { top: 20px; animation-timing-function: ease-in; }
  95% { top: 56px; animation-timing-function: ease-out; }
  100% { top: 50px; }
}`,
    htmlCode: `<div class="motion-bounce"><div class="motion-bounce-ground"></div><div class="motion-bounce-ball"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-elastic',
    name: 'Elastic Effect',
    category: 'motion',
    tags: ['motion', 'elastic', 'rubber', 'stretch', 'snap'],
    difficulty: 'advanced',
    description: 'An elastic stretching and snapping effect like a rubber band',
    cssCode: `.motion-elastic {
  width: 100px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.motion-elastic-shape {
  width: 40px; height: 40px;
  background: #10b981; border-radius: 8px;
  animation: elastic-stretch 2s ease-in-out infinite;
}
@keyframes elastic-stretch {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  15% { transform: scaleX(1.5) scaleY(0.7); }
  30% { transform: scaleX(0.8) scaleY(1.2); }
  45% { transform: scaleX(1.15) scaleY(0.9); }
  60% { transform: scaleX(0.95) scaleY(1.05); }
  75% { transform: scaleX(1.03) scaleY(0.98); }
}`,
    htmlCode: `<div class="motion-elastic"><div class="motion-elastic-shape"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-overshoot',
    name: 'Overshoot',
    category: 'motion',
    tags: ['motion', 'overshoot', 'exceed', 'target', 'settle'],
    difficulty: 'intermediate',
    description: 'An animation that overshoots its target before settling back',
    cssCode: `.motion-overshoot {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center;
  padding: 0 10px;
}
.motion-overshoot-bar {
  height: 12px; background: #10b981;
  border-radius: 6px;
  animation: overshoot-fill 2s ease-in-out infinite;
}
@keyframes overshoot-fill {
  0% { width: 0%; }
  50% { width: 105%; }
  70% { width: 95%; }
  85% { width: 101%; }
  100% { width: 100%; }
}`,
    htmlCode: `<div class="motion-overshoot"><div class="motion-overshoot-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-undershoot',
    name: 'Undershoot',
    category: 'motion',
    tags: ['motion', 'undershoot', 'fall-short', 'approach', 'asymptote'],
    difficulty: 'intermediate',
    description: 'An animation that falls short of its target then gradually approaches it',
    cssCode: `.motion-undershoot {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center;
  padding: 0 10px;
}
.motion-undershoot-bar {
  height: 12px; background: #10b981;
  border-radius: 6px;
  animation: undershoot-approach 2s ease-in-out infinite;
}
@keyframes undershoot-approach {
  0% { width: 0%; }
  40% { width: 80%; }
  60% { width: 92%; }
  75% { width: 96%; }
  87% { width: 98%; }
  100% { width: 100%; }
}`,
    htmlCode: `<div class="motion-undershoot"><div class="motion-undershoot-bar"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-damping',
    name: 'Damping',
    category: 'motion',
    tags: ['motion', 'damping', 'friction', 'decay', 'reduce'],
    difficulty: 'advanced',
    description: 'A damped oscillation that gradually reduces amplitude over time',
    cssCode: `.motion-damping {
  width: 160px; height: 60px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
}
.motion-damping-dot {
  width: 10px; height: 10px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%;
  left: 50%; transform: translate(-50%, -50%);
  animation: damp-oscillate 3s ease-out infinite;
}
@keyframes damp-oscillate {
  0% { transform: translate(-50%, -50%) translateX(60px); }
  10% { transform: translate(-50%, -50%) translateX(-50px); }
  20% { transform: translate(-50%, -50%) translateX(40px); }
  30% { transform: translate(-50%, -50%) translateX(-30px); }
  40% { transform: translate(-50%, -50%) translateX(22px); }
  50% { transform: translate(-50%, -50%) translateX(-16px); }
  60% { transform: translate(-50%, -50%) translateX(10px); }
  70% { transform: translate(-50%, -50%) translateX(-6px); }
  80% { transform: translate(-50%, -50%) translateX(3px); }
  90% { transform: translate(-50%, -50%) translateX(-1px); }
  100% { transform: translate(-50%, -50%) translateX(0); }
}`,
    htmlCode: `<div class="motion-damping"><div class="motion-damping-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-resonance',
    name: 'Resonance',
    category: 'motion',
    tags: ['motion', 'resonance', 'amplify', 'frequency', 'vibration'],
    difficulty: 'advanced',
    description: 'A resonance effect where oscillations build up and amplify over time',
    cssCode: `.motion-resonance {
  width: 160px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.motion-resonance-ring {
  width: 20px; height: 20px;
  border: 2px solid #10b981; border-radius: 50%;
  animation: resonate-grow 2s ease-in-out infinite;
}
@keyframes resonate-grow {
  0% { transform: scale(0.5); opacity: 0.3; border-width: 3px; }
  50% { transform: scale(2); opacity: 0.8; border-width: 2px; }
  70% { transform: scale(3); opacity: 1; border-width: 1px; }
  85% { transform: scale(3.5); opacity: 0.6; border-width: 0.5px; }
  100% { transform: scale(4); opacity: 0; border-width: 0.5px; }
}`,
    htmlCode: `<div class="motion-resonance"><div class="motion-resonance-ring"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-harmonic',
    name: 'Harmonic',
    category: 'motion',
    tags: ['motion', 'harmonic', 'sine', 'wave', 'oscillation'],
    difficulty: 'intermediate',
    description: 'A simple harmonic motion like a pendulum following a sine wave pattern',
    cssCode: `.motion-harmonic {
  width: 100px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
}
.motion-harmonic-string {
  position: absolute; top: 0; left: 50%;
  width: 1px; height: 30px;
  background: #10b98144;
  transform-origin: top center;
  animation: harmonic-swing 2s ease-in-out infinite;
}
.motion-harmonic-bob {
  width: 14px; height: 14px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 28px;
  left: 50%; transform: translateX(-50%);
  animation: harmonic-swing 2s ease-in-out infinite;
  transform-origin: 50% -28px;
}
@keyframes harmonic-swing {
  0%, 100% { transform: rotate(25deg); }
  50% { transform: rotate(-25deg); }
}`,
    htmlCode: `<div class="motion-harmonic"><div class="motion-harmonic-string"></div><div class="motion-harmonic-bob"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-pendulum',
    name: 'Pendulum',
    category: 'motion',
    tags: ['motion', 'pendulum', 'swing', 'gravity', 'periodic'],
    difficulty: 'intermediate',
    description: 'A pendulum swinging back and forth with a pivot point and string',
    cssCode: `.motion-pendulum {
  width: 100px; height: 90px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
}
.motion-pendulum-pivot {
  width: 6px; height: 6px; background: #10b981;
  border-radius: 50%; position: absolute;
  top: 8px; left: 50%; transform: translateX(-50%);
  z-index: 2;
}
.motion-pendulum-arm {
  position: absolute; top: 8px; left: 50%;
  width: 2px; height: 55px;
  background: #10b98144;
  transform-origin: top center;
  animation: pendulum-swing 1.8s ease-in-out infinite;
}
.motion-pendulum-weight {
  width: 18px; height: 18px;
  background: #10b981; border-radius: 50%;
  position: absolute; bottom: -9px;
  left: 50%; transform: translateX(-50%);
  box-shadow: 0 0 8px #10b98144;
}
@keyframes pendulum-swing {
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(-30deg); }
}`,
    htmlCode: `<div class="motion-pendulum"><div class="motion-pendulum-pivot"></div><div class="motion-pendulum-arm"><div class="motion-pendulum-weight"></div></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-orbit',
    name: 'Orbit',
    category: 'motion',
    tags: ['motion', 'orbit', 'circular', 'planet', 'rotation'],
    difficulty: 'intermediate',
    description: 'A small object orbiting around a central point like a planet around a star',
    cssCode: `.motion-orbit {
  width: 90px; height: 90px;
  background: #0f0f1a; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  position: relative;
}
.motion-orbit-center {
  width: 14px; height: 14px;
  background: #10b981; border-radius: 50%;
  box-shadow: 0 0 12px #10b98166;
  z-index: 2;
}
.motion-orbit-path {
  position: absolute; inset: 8px;
  border: 1px dashed #10b98122;
  border-radius: 50%;
}
.motion-orbit-satellite {
  position: absolute; width: 8px; height: 8px;
  background: #34d399; border-radius: 50%;
  animation: orbit-spin 3s linear infinite;
  transform-origin: 37px 37px;
  top: 0; left: 33px;
}
@keyframes orbit-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="motion-orbit"><div class="motion-orbit-path"></div><div class="motion-orbit-center"></div><div class="motion-orbit-satellite"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-spiral',
    name: 'Spiral',
    category: 'motion',
    tags: ['motion', 'spiral', 'expanding', 'rotation', 'path'],
    difficulty: 'advanced',
    description: 'An expanding spiral motion where the radius grows with each rotation',
    cssCode: `.motion-spiral {
  width: 90px; height: 90px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.motion-spiral-dot {
  width: 8px; height: 8px;
  background: #10b981; border-radius: 50%;
  animation: spiral-expand 3s linear infinite;
  box-shadow: 0 0 6px #10b98166;
}
.motion-spiral-trail {
  position: absolute; width: 6px; height: 6px;
  background: #10b98144; border-radius: 50%;
  animation: spiral-expand 3s linear infinite;
  animation-delay: -0.3s;
}
@keyframes spiral-expand {
  0% { transform: translate(0, 0) scale(0.6); opacity: 1; }
  25% { transform: translate(15px, -10px) scale(0.8); }
  50% { transform: translate(0px, 20px) scale(1); }
  75% { transform: translate(-20px, 0px) scale(1.2); }
  100% { transform: translate(0, 0) scale(0.6); opacity: 0.3; }
}`,
    htmlCode: `<div class="motion-spiral"><div class="motion-spiral-trail"></div><div class="motion-spiral-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-figure-eight',
    name: 'Figure-8',
    category: 'motion',
    tags: ['motion', 'figure-8', 'infinity', 'path', 'loop'],
    difficulty: 'advanced',
    description: 'A dot tracing a figure-8 or infinity symbol path using CSS keyframes',
    cssCode: `.motion-figure-eight {
  width: 100px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
}
.motion-figure-eight-dot {
  width: 8px; height: 8px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%; left: 50%;
  animation: fig8-path 3s linear infinite;
  box-shadow: 0 0 8px #10b98166;
}
.motion-figure-eight-center {
  position: absolute; top: 50%; left: 50%;
  width: 2px; height: 2px; background: #10b98144;
  border-radius: 50%; transform: translate(-50%, -50%);
}
@keyframes fig8-path {
  0% { transform: translate(calc(-50% + 35px), calc(-50% + 0px)); }
  12.5% { transform: translate(calc(-50% + 17px), calc(-50% - 20px)); }
  25% { transform: translate(calc(-50% + 0px), calc(-50% + 0px)); }
  37.5% { transform: translate(calc(-50% - 17px), calc(-50% + 20px)); }
  50% { transform: translate(calc(-50% - 35px), calc(-50% + 0px)); }
  62.5% { transform: translate(calc(-50% - 17px), calc(-50% - 20px)); }
  75% { transform: translate(calc(-50% + 0px), calc(-50% + 0px)); }
  87.5% { transform: translate(calc(-50% + 17px), calc(-50% + 20px)); }
  100% { transform: translate(calc(-50% + 35px), calc(-50% + 0px)); }
}`,
    htmlCode: `<div class="motion-figure-eight"><div class="motion-figure-eight-center"></div><div class="motion-figure-eight-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-lissajous',
    name: 'Lissajous',
    category: 'motion',
    tags: ['motion', 'lissajous', 'harmonic', 'parametric', 'curve'],
    difficulty: 'advanced',
    description: 'A Lissajous curve traced by a dot moving with different frequency ratios',
    cssCode: `.motion-lissajous {
  width: 100px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
}
.motion-lissajous-dot {
  width: 8px; height: 8px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%; left: 50%;
  animation: lissajous-trace 4s linear infinite;
  box-shadow: 0 0 6px #10b98166;
}
.motion-lissajous-ghost {
  width: 6px; height: 6px;
  background: #10b98133; border-radius: 50%;
  position: absolute; top: 50%; left: 50%;
  animation: lissajous-trace 4s linear infinite;
  animation-delay: -0.15s;
}
@keyframes lissajous-trace {
  0% { transform: translate(calc(-50% + 35px), calc(-50% + 0px)); }
  12.5% { transform: translate(calc(-50% + 0px), calc(-50% + 28px)); }
  25% { transform: translate(calc(-50% - 35px), calc(-50% + 0px)); }
  37.5% { transform: translate(calc(-50% + 0px), calc(-50% - 28px)); }
  50% { transform: translate(calc(-50% + 35px), calc(-50% + 0px)); }
  62.5% { transform: translate(calc(-50% + 0px), calc(-50% - 28px)); }
  75% { transform: translate(calc(-50% - 35px), calc(-50% + 0px)); }
  87.5% { transform: translate(calc(-50% + 0px), calc(-50% + 28px)); }
  100% { transform: translate(calc(-50% + 35px), calc(-50% + 0px)); }
}`,
    htmlCode: `<div class="motion-lissajous"><div class="motion-lissajous-ghost"></div><div class="motion-lissajous-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-chaos',
    name: 'Chaos',
    category: 'motion',
    tags: ['motion', 'chaos', 'random', 'unpredictable', 'erratic'],
    difficulty: 'advanced',
    description: 'A chaotic motion with unpredictable, erratic movement patterns',
    cssCode: `.motion-chaos {
  width: 100px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
}
.motion-chaos-dot {
  width: 8px; height: 8px;
  background: #10b981; border-radius: 50%;
  position: absolute; top: 50%; left: 50%;
  animation: chaos-move 2.5s steps(10) infinite;
  box-shadow: 0 0 6px #10b98166;
}
.motion-chaos-dot2 {
  width: 6px; height: 6px;
  background: #10b98166; border-radius: 50%;
  position: absolute; top: 50%; left: 50%;
  animation: chaos-move2 2s steps(8) infinite;
}
@keyframes chaos-move {
  0% { transform: translate(30px, -20px); }
  10% { transform: translate(-25px, 15px); }
  20% { transform: translate(10px, 30px); }
  30% { transform: translate(-35px, -10px); }
  40% { transform: translate(20px, -30px); }
  50% { transform: translate(-10px, 25px); }
  60% { transform: translate(35px, 5px); }
  70% { transform: translate(-20px, -25px); }
  80% { transform: translate(15px, 20px); }
  90% { transform: translate(-30px, -15px); }
  100% { transform: translate(30px, -20px); }
}
@keyframes chaos-move2 {
  0% { transform: translate(-20px, 25px); }
  25% { transform: translate(30px, -15px); }
  50% { transform: translate(-10px, -30px); }
  75% { transform: translate(25px, 20px); }
  100% { transform: translate(-20px, 25px); }
}`,
    htmlCode: `<div class="motion-chaos"><div class="motion-chaos-dot2"></div><div class="motion-chaos-dot"></div></div>`,
    isNew: true,
  },
  {
    id: 'motion-turbulence',
    name: 'Turbulence',
    category: 'motion',
    tags: ['motion', 'turbulence', 'distortion', 'noise', 'organic'],
    difficulty: 'advanced',
    description: 'A turbulent motion effect using SVG filter distortion and animation',
    cssCode: `.motion-turbulence {
  width: 120px; height: 80px;
  background: #0f0f1a; border-radius: 8px;
  position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.motion-turbulence-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, #10b98133, #3b82f633, #8b5cf633);
  animation: turb-shift 3s ease-in-out infinite;
  filter: url(#turbulence-filter);
}
.motion-turbulence-text {
  position: relative; z-index: 1;
  color: #10b981; font-size: 0.65rem;
  font-weight: 800;
}
@keyframes turb-shift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(5px, -3px) scale(1.05); }
  50% { transform: translate(-3px, 5px) scale(0.95); }
  75% { transform: translate(-5px, -2px) scale(1.02); }
}`,
    htmlCode: `<div class="motion-turbulence"><div class="motion-turbulence-bg"></div><div class="motion-turbulence-text">Turbulence</div></div>`,
    isNew: true,
  },
  {
    id: 'motion-vortex',
    name: 'Vortex',
    category: 'motion',
    tags: ['motion', 'vortex', 'whirlpool', 'spinning', 'pull'],
    difficulty: 'advanced',
    description: 'A vortex effect with multiple elements spiraling inward toward the center',
    cssCode: `.motion-vortex {
  width: 100px; height: 100px;
  background: #0f0f1a; border-radius: 8px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.motion-vortex-center {
  width: 10px; height: 10px;
  background: #10b981; border-radius: 50%;
  box-shadow: 0 0 12px #10b98188;
  z-index: 3;
}
.motion-vortex-ring {
  position: absolute; border: 1.5px solid #10b981;
  border-radius: 50%; animation: vortex-spin linear infinite;
}
.motion-vortex-ring:nth-child(2) { width: 20px; height: 20px; animation-duration: 1s; opacity: 0.9; }
.motion-vortex-ring:nth-child(3) { width: 36px; height: 36px; animation-duration: 1.8s; opacity: 0.7; }
.motion-vortex-ring:nth-child(4) { width: 54px; height: 54px; animation-duration: 2.8s; opacity: 0.5; }
.motion-vortex-ring:nth-child(5) { width: 74px; height: 74px; animation-duration: 4s; opacity: 0.3; }
@keyframes vortex-spin { to { transform: rotate(360deg); } }`,
    htmlCode: `<div class="motion-vortex"><div class="motion-vortex-center"></div><div class="motion-vortex-ring"></div><div class="motion-vortex-ring"></div><div class="motion-vortex-ring"></div><div class="motion-vortex-ring"></div></div>`,
    isNew: true,
  },
];
