'use client';

import { categories, collections, getRecentlyAdded, effects } from '@/lib/effects-data';
import { useEffectsStore, featuredEffectIds } from '@/lib/effects-store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Flame, Heart, Clock, GitCompare, Star } from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedCollection,
    setSelectedCollection,
    sidebarOpen,
    setSidebarOpen,
    favorites,
    recentlyViewed,
    compareIds,
    setCompareModalOpen,
    theme,
    selectedFeatured,
    setSelectedFeatured,
  } = useEffectsStore();

  const [showCollections, setShowCollections] = useState(true);
  const [showRecent, setShowRecent] = useState(true);
  const [showFavorites, setShowFavorites] = useState(true);
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(true);
  const [showFeatured, setShowFeatured] = useState(true);

  const recentlyAdded = getRecentlyAdded(15);
  const isDark = theme === 'dark';

  // Get favorite effects
  const favoriteEffects = effects.filter((e) => favorites.includes(e.id));

  // Get featured effects
  const featuredEffects = effects.filter((e) => featuredEffectIds.includes(e.id));

  // Get recently viewed effects
  const recentlyViewedEffects = recentlyViewed
    .map((id) => effects.find((e) => e.id === id))
    .filter(Boolean) as typeof effects;

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedCollection(null);
    setSelectedFeatured(false);
    setSidebarOpen(false);
  };

  const handleCollectionClick = (collectionId: string) => {
    if (selectedCollection === collectionId) {
      setSelectedCollection(null);
    } else {
      setSelectedCollection(collectionId);
    }
    setSelectedFeatured(false);
    setSidebarOpen(false);
  };

  const handleFavoritesClick = () => {
    setSelectedCollection('favorites');
    setSelectedCategory('all');
    setSelectedFeatured(false);
    setSidebarOpen(false);
  };

  const handleFeaturedClick = () => {
    setSelectedFeatured(!selectedFeatured);
    setSidebarOpen(false);
  };

  // Categories that should show NEW badge
  const newCategoryIds = ['scroll', 'layout', 'decorative', 'accordions', 'social', 'forms', 'data', 'sliders', 'print', 'container', 'svg', 'typography-art', 'houdini', 'ecommerce', 'game-ui'];

  // Get category emoji for recently added items
  const getCategoryEmoji = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.emoji || '✨';
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Mobile close button */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Menu</span>
        <button onClick={() => setSidebarOpen(false)} className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} aria-label="Close menu">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Categories - with scroll snap */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-2 sidebar-scroll-snap">

        {/* ⭐ Featured Section - ABOVE categories */}
        <div className="mb-4">
          <button
            onClick={() => {
              setShowFeatured(!showFeatured);
              handleFeaturedClick();
            }}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${
              selectedFeatured
                ? 'text-emerald-400'
                : isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {showFeatured ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <Star className="w-3 h-3 text-yellow-400/80 fill-current" />
            Featured ({featuredEffectIds.length})
          </button>
          <AnimatePresence>
            {showFeatured && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-0.5">
                  {featuredEffects.map((effect) => (
                    <button
                      key={effect.id}
                      onClick={() => {
                        setSelectedFeatured(true);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all truncate sidebar-category-item ${
                        selectedFeatured
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          : isDark ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      }`}
                    >
                      <Star className="w-3 h-3 text-yellow-400/60 shrink-0 fill-current" />
                      <span className="truncate">{effect.name}</span>
                      <span className="ml-auto text-[8px] bg-yellow-500/10 text-yellow-400/60 px-1 py-0.5 rounded shrink-0">★</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Separator */}
        <div className={`h-px mx-2 mb-3 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`} />

        <div className="space-y-0.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id && !selectedCollection && !selectedFeatured;
            const hasNew = newCategoryIds.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 relative group sidebar-category-item ${
                  isActive
                    ? 'active bg-emerald-500/20 text-emerald-400 border border-emerald-500/25'
                    : isDark
                      ? 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 border border-transparent'
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <span>{cat.emoji}</span>
                  <span className="truncate">{cat.name}</span>
                  {hasNew && (
                    <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <Flame className="w-2.5 h-2.5" /> NEW
                    </span>
                  )}
                </span>
                <span className={`text-xs ml-2 shrink-0 category-count-badge ${hasNew ? 'has-new' : ''} ${isActive ? 'text-emerald-400/70' : isDark ? 'text-gray-600' : 'text-gray-400'}`}>{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Favorites Section */}
        <div className="mt-4">
          <button
            onClick={() => {
              setShowFavorites(!showFavorites);
              if (favorites.length > 0) handleFavoritesClick();
            }}
            className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showFavorites ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <Heart className="w-3 h-3 text-red-400/60" />
            Favorites ({favorites.length})
          </button>
          <AnimatePresence>
            {showFavorites && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {favorites.length === 0 ? (
                  <p className={`text-[10px] px-6 py-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>No favorites yet. Click the heart icon on any effect.</p>
                ) : (
                  <div className="space-y-0.5">
                    {favoriteEffects.map((effect) => (
                      <button
                        key={effect.id}
                        onClick={() => {
                          useEffectsStore.getState().setSelectedEffectId(effect.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                          isDark ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                        }`}
                      >
                        <Heart className="w-3 h-3 text-red-400/60 shrink-0 fill-current" />
                        <span className="truncate">{effect.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-4">
          <button
            onClick={() => setShowRecentlyViewed(!showRecentlyViewed)}
            className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showRecentlyViewed ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <Clock className="w-3 h-3 text-gray-400/60" />
            Recently Viewed ({recentlyViewedEffects.length})
          </button>
          <AnimatePresence>
            {showRecentlyViewed && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {recentlyViewedEffects.length === 0 ? (
                  <p className={`text-[10px] px-6 py-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>No recently viewed effects yet.</p>
                ) : (
                  <div className="space-y-0.5">
                    {recentlyViewedEffects.map((effect) => (
                      <button
                        key={effect.id}
                        onClick={() => {
                          useEffectsStore.getState().setSelectedEffectId(effect.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                          isDark ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                        }`}
                      >
                        <Clock className="w-3 h-3 text-gray-400/40 shrink-0" />
                        <span className="truncate">{effect.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Collections Section */}
        <div className="mt-4">
          <button
            onClick={() => setShowCollections(!showCollections)}
            className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showCollections ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            Collections
          </button>
          <AnimatePresence>
            {showCollections && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-1 px-2">
                  {collections.map((col) => {
                    const isSelected = selectedCollection === col.id;
                    return (
                      <button
                        key={col.id}
                        onClick={() => handleCollectionClick(col.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 relative overflow-hidden ${
                          isSelected
                            ? 'bg-emerald-500/15 border border-emerald-500/20'
                            : isDark
                              ? 'hover:bg-white/5 border border-transparent hover:border-gray-800/50'
                              : 'hover:bg-gray-50 border border-transparent hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex items-center gap-2 truncate">
                            <span>{col.emoji}</span>
                            <span className={`truncate font-medium ${isSelected ? 'text-emerald-400' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {col.name}
                            </span>
                          </span>
                          <span className={`text-xs shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{col.effectIds.length}</span>
                        </div>
                        <p className={`text-[10px] mt-0.5 ml-6 truncate ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{col.description}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Recently Added */}
        <div className="mt-4">
          <button
            onClick={() => setShowRecent(!showRecent)}
            className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showRecent ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            Recently Added ({recentlyAdded.length})
          </button>
          <AnimatePresence>
            {showRecent && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="space-y-0.5">
                  {recentlyAdded.map((effect) => (
                    <button
                      key={effect.id}
                      onClick={() => {
                        useEffectsStore.getState().setSelectedEffectId(effect.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                        isDark ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      }`}
                    >
                      <span>{getCategoryEmoji(effect.category)}</span>
                      <span className="truncate">{effect.name}</span>
                      <span className="ml-auto text-[8px] bg-emerald-500/10 text-emerald-400/60 px-1 py-0.5 rounded shrink-0">NEW</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Compare section */}
        {compareIds.length >= 2 && (
          <div className="mt-4 px-3">
            <button
              onClick={() => {
                setCompareModalOpen(true);
                setSidebarOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all"
            >
              <GitCompare className="w-3.5 h-3.5" />
              Compare ({compareIds.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        role="navigation"
        aria-label="Effect categories"
        className={`hidden md:block w-64 shrink-0 border-r h-full overflow-hidden sidebar-accent-line ${
          isDark ? 'border-gray-800/50 bg-[#0a0a0a]' : 'border-gray-200/60 bg-gray-50/80'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile overlay with glass morphism */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              role="navigation"
              aria-label="Effect categories"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed left-0 top-0 bottom-0 w-72 border-r z-50 md:hidden glass-sidebar sidebar-accent-line ${
                isDark ? 'border-gray-800/50' : 'border-gray-200/60'
              }`}
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
