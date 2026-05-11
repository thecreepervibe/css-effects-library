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
}

export const useEffectsStore = create<EffectsStore>((set) => ({
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

  viewMode: 'grid',
  setViewMode: (mode) => set({ viewMode: mode }),

  cardSize: 100,
  setCardSize: (size) => set({ cardSize: size }),

  selectedEffectId: null,
  setSelectedEffectId: (id) => set({ selectedEffectId: id }),

  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  selectedCollection: null,
  setSelectedCollection: (id) => set({ selectedCollection: id, selectedCategory: 'all' }),
}));
