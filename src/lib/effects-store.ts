import { create } from 'zustand';
import type { Difficulty } from './effects-data';

// Featured effect IDs - hand-picked visually impressive effects
export const featuredEffectIds: string[] = [
  'aurora-bg',
  'gradient-mesh',
  'neon-glow-text',
  'floating-particles',
  'glassmorphism-card',
  '3d-text',
  'confetti',
  'matrix-rain',
  'rain-effect',
  'lightning',
  'gradient-border-card',
  'flip-card',
];

interface EffectsStore {
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Category filter
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;

  // Difficulty filter
  selectedDifficulty: Difficulty | 'all';
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;

  // Tag filter
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  clearAllFilters: () => void;

  // View mode
  viewMode: 'grid' | 'compact';
  setViewMode: (mode: 'grid' | 'compact') => void;

  // Card size
  cardSize: number;
  setCardSize: (size: number) => void;

  // Selected effect for detail modal
  selectedEffectId: string | null;
  setSelectedEffectId: (id: string | null) => void;

  // Sidebar open (mobile)
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;

  // Collection filter
  selectedCollection: string | null;
  setSelectedCollection: (id: string | null) => void;

  // Favorites
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  hydrateFavorites: () => void;

  // Recently viewed
  recentlyViewed: string[];
  addRecentlyViewed: (id: string) => void;
  hydrateRecentlyViewed: () => void;

  // Compare mode
  compareIds: string[];
  toggleCompare: (id: string) => void;
  isInCompare: (id: string) => boolean;
  clearCompare: () => void;
  compareModalOpen: boolean;
  setCompareModalOpen: (open: boolean) => void;

  // Filtered count for badge
  filteredCount: number;
  setFilteredCount: (count: number) => void;

  // Keyboard navigation - focused effect index in the filtered list
  focusedEffectIndex: number | null;
  setFocusedEffectIndex: (index: number | null) => void;

  // Theme
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
  hydrateTheme: () => void;

  // Search history
  searchHistory: string[];
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
  hydrateSearchHistory: () => void;

  // Pagination / visible count
  visibleCount: number;
  setVisibleCount: (count: number) => void;
  loadMore: () => void;
  showAll: () => void;

  // Featured collection
  selectedFeatured: boolean;
  setSelectedFeatured: (val: boolean) => void;
  toggleSelectedFeatured: () => void;

  // Playground CSS (for the code editor in detail modal)
  playgroundCss: string;
  setPlaygroundCss: (css: string) => void;
  resetPlaygroundCss: () => void;

  // Keyboard shortcuts dialog
  keyboardShortcutsOpen: boolean;
  setKeyboardShortcutsOpen: (open: boolean) => void;

  // Ratings
  ratings: Record<string, 'up' | 'down' | null>;
  rateEffect: (id: string, rating: 'up' | 'down') => void;
  hydrateRatings: () => void;

  // Onboarding
  onboarded: boolean;
  setOnboarded: (val: boolean) => void;
  hydrateOnboarded: () => void;
}

// Category color palette - deterministic color based on category ID
const CATEGORY_COLORS = [
  '#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444',
  '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16',
];

export function getCategoryColor(categoryId: string): string {
  let hash = 0;
  for (let i = 0; i < categoryId.length; i++) {
    hash = ((hash << 5) - hash) + categoryId.charCodeAt(i);
    hash |= 0;
  }
  return CATEGORY_COLORS[Math.abs(hash) % CATEGORY_COLORS.length];
}

// Simulated views counter based on effect ID hash
export function getEffectViews(effectId: string): number {
  let hash = 0;
  for (let i = 0; i < effectId.length; i++) {
    hash = ((hash << 5) - hash) + effectId.charCodeAt(i);
    hash |= 0;
  }
  return 50 + (Math.abs(hash) % 4951);
}

// Simulated positive rating percentage (deterministic hash, 60-95%)
export function getSimulatedRating(effectId: string): number {
  let hash = 0;
  for (let i = 0; i < effectId.length; i++) {
    hash = ((hash << 5) - hash) + effectId.charCodeAt(i);
    hash |= 0;
  }
  return 60 + (Math.abs(hash) % 36); // 60-95%
}

function loadFromLocalStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveToLocalStorage(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

export const useEffectsStore = create<EffectsStore>((set, get) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedCategory: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category, selectedCollection: null, selectedFeatured: false }),

  selectedDifficulty: 'all',
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),

  selectedTags: [],
  toggleTag: (tag) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tag)
        ? state.selectedTags.filter((t) => t !== tag)
        : [...state.selectedTags, tag],
    })),

  clearAllFilters: () => set({
    selectedCategory: 'all',
    selectedDifficulty: 'all',
    selectedTags: [],
    selectedCollection: null,
    searchQuery: '',
    selectedFeatured: false,
  }),

  viewMode: 'grid',
  setViewMode: (mode) => set({ viewMode: mode }),

  cardSize: 100,
  setCardSize: (size) => set({ cardSize: size }),

  selectedEffectId: null,
  setSelectedEffectId: (id) => {
    set({ selectedEffectId: id });
    if (id) {
      get().addRecentlyViewed(id);
    }
  },

  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  selectedCollection: null,
  setSelectedCollection: (id) => set(id ? { selectedCollection: id, selectedCategory: 'all', selectedFeatured: false } : { selectedCollection: null }),

  // Favorites - initialize empty to avoid hydration mismatch, hydrate from localStorage in useEffect
  favorites: [],
  toggleFavorite: (id) =>
    set((state) => {
      const newFavorites = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      saveToLocalStorage('css-effects-favorites', newFavorites);
      return { favorites: newFavorites };
    }),
  isFavorite: (id) => get().favorites.includes(id),
  hydrateFavorites: () => {
    const stored = loadFromLocalStorage<string[]>('css-effects-favorites', []);
    if (stored.length > 0) set({ favorites: stored });
  },

  // Recently viewed - initialize empty to avoid hydration mismatch
  recentlyViewed: [],
  addRecentlyViewed: (id) =>
    set((state) => {
      const filtered = state.recentlyViewed.filter((r) => r !== id);
      const newRecent = [id, ...filtered].slice(0, 10);
      saveToLocalStorage('css-effects-recently-viewed', newRecent);
      return { recentlyViewed: newRecent };
    }),
  hydrateRecentlyViewed: () => {
    const stored = loadFromLocalStorage<string[]>('css-effects-recently-viewed', []);
    if (stored.length > 0) set({ recentlyViewed: stored });
  },

  // Compare mode
  compareIds: [],
  toggleCompare: (id) =>
    set((state) => {
      if (state.compareIds.includes(id)) {
        return { compareIds: state.compareIds.filter((c) => c !== id) };
      }
      if (state.compareIds.length >= 4) {
        return { compareIds: [...state.compareIds.slice(1), id] };
      }
      return { compareIds: [...state.compareIds, id] };
    }),
  isInCompare: (id) => get().compareIds.includes(id),
  clearCompare: () => set({ compareIds: [] }),
  compareModalOpen: false,
  setCompareModalOpen: (open) => set({ compareModalOpen: open }),

  // Filtered count
  filteredCount: 198,
  setFilteredCount: (count) => set({ filteredCount: count }),

  // Keyboard navigation
  focusedEffectIndex: null,
  setFocusedEffectIndex: (index) => set({ focusedEffectIndex: index }),

  // Theme
  theme: 'dark',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      saveToLocalStorage('css-effects-theme', newTheme);
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
      return { theme: newTheme };
    }),
  setTheme: (theme) => {
    saveToLocalStorage('css-effects-theme', theme);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    set({ theme });
  },
  hydrateTheme: () => {
    const stored = loadFromLocalStorage<'dark' | 'light'>('css-effects-theme', 'dark');
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
    set({ theme: stored });
  },

  // Search history
  searchHistory: [],
  addSearchHistory: (query) =>
    set((state) => {
      if (!query.trim()) return state;
      const filtered = state.searchHistory.filter((h) => h !== query.trim());
      const newHistory = [query.trim(), ...filtered].slice(0, 10);
      saveToLocalStorage('css-effects-search-history', newHistory);
      return { searchHistory: newHistory };
    }),
  clearSearchHistory: () => {
    saveToLocalStorage('css-effects-search-history', []);
    set({ searchHistory: [] });
  },
  hydrateSearchHistory: () => {
    const stored = loadFromLocalStorage<string[]>('css-effects-search-history', []);
    if (stored.length > 0) set({ searchHistory: stored });
  },

  // Pagination
  visibleCount: 24,
  setVisibleCount: (count) => set({ visibleCount: count }),
  loadMore: () => set((state) => ({ visibleCount: state.visibleCount + 24 })),
  showAll: () => set({ visibleCount: 9999 }),

  // Featured collection
  selectedFeatured: false,
  setSelectedFeatured: (val) => set(val ? {
    selectedFeatured: val,
    selectedCollection: 'featured',
    selectedCategory: 'all',
  } : {
    selectedFeatured: false,
    // Don't reset selectedCollection or selectedCategory when unsetting featured
    // - the caller may have already set them (e.g., handleCategoryClick sets category then calls this)
  }),
  toggleSelectedFeatured: () => {
    const current = get().selectedFeatured;
    if (!current) {
      set({
        selectedFeatured: true,
        selectedCollection: 'featured',
        selectedCategory: 'all',
      });
    } else {
      set({
        selectedFeatured: false,
        // Don't reset selectedCollection or selectedCategory when toggling off
      });
    }
  },

  // Playground CSS
  playgroundCss: '',
  setPlaygroundCss: (css) => set({ playgroundCss: css }),
  resetPlaygroundCss: () => set({ playgroundCss: '' }),

  // Keyboard shortcuts dialog
  keyboardShortcutsOpen: false,
  setKeyboardShortcutsOpen: (open) => set({ keyboardShortcutsOpen: open }),

  // Ratings
  ratings: {},
  rateEffect: (id, rating) =>
    set((state) => {
      const current = state.ratings[id];
      const newRating = current === rating ? null : rating;
      const newRatings = { ...state.ratings, [id]: newRating };
      saveToLocalStorage('css-effects-ratings', newRatings);
      return { ratings: newRatings };
    }),
  hydrateRatings: () => {
    const stored = loadFromLocalStorage<Record<string, 'up' | 'down' | null>>('css-effects-ratings', {});
    if (Object.keys(stored).length > 0) set({ ratings: stored });
  },

  // Onboarding
  onboarded: false,
  setOnboarded: (val) => {
    saveToLocalStorage('css-effects-onboarded', val);
    set({ onboarded: val });
  },
  hydrateOnboarded: () => {
    const stored = loadFromLocalStorage<boolean>('css-effects-onboarded', false);
    if (stored) set({ onboarded: true });
  },
}));
