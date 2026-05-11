import { create } from 'zustand';
import type { Difficulty } from './effects-data';

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

  // Recently viewed
  recentlyViewed: string[];
  addRecentlyViewed: (id: string) => void;

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
  setSelectedCategory: (category) => set({ selectedCategory: category, selectedCollection: null }),

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
  setSelectedCollection: (id) => set(id ? { selectedCollection: id, selectedCategory: 'all' } : { selectedCollection: null }),

  // Favorites
  favorites: loadFromLocalStorage('css-effects-favorites', []),
  toggleFavorite: (id) =>
    set((state) => {
      const newFavorites = state.favorites.includes(id)
        ? state.favorites.filter((f) => f !== id)
        : [...state.favorites, id];
      saveToLocalStorage('css-effects-favorites', newFavorites);
      return { favorites: newFavorites };
    }),
  isFavorite: (id) => get().favorites.includes(id),

  // Recently viewed
  recentlyViewed: loadFromLocalStorage('css-effects-recently-viewed', []),
  addRecentlyViewed: (id) =>
    set((state) => {
      const filtered = state.recentlyViewed.filter((r) => r !== id);
      const newRecent = [id, ...filtered].slice(0, 10);
      saveToLocalStorage('css-effects-recently-viewed', newRecent);
      return { recentlyViewed: newRecent };
    }),

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
}));
