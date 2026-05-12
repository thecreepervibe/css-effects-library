'use client';

import { categories, collections, getRecentlyAdded, effects } from '@/lib/effects-data';
import { useEffectsStore, featuredEffectIds, getCategoryColor } from '@/lib/effects-store';
import type { UserCollection, BookmarkFolder } from '@/lib/effects-store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Flame, Heart, Clock, GitCompare, Star, Sparkles, ArrowRight, Bookmark, FolderPlus, Trash2, Plus } from 'lucide-react';
import { useState, useRef, useCallback, useEffect } from 'react';

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
    userCollections,
    removeUserCollection,
    selectedUserCollection,
    setSelectedUserCollection,
    bookmarks,
    bookmarkFolders,
    removeBookmarkFolder,
    addBookmarkFolder,
  } = useEffectsStore();

  const [showCollections, setShowCollections] = useState(true);
  const [showRecent, setShowRecent] = useState(true);
  const [showFavorites, setShowFavorites] = useState(true);
  const [showRecentlyViewed, setShowRecentlyViewed] = useState(true);
  const [showFeatured, setShowFeatured] = useState(true);
  const [showUserCollections, setShowUserCollections] = useState(true);
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [newFolderName, setNewFolderName] = useState('');
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);

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

  // Get bookmarked effects
  const bookmarkedEffects = effects.filter((e) => bookmarks.includes(e.id));

  // Spotlight effect state
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const categoryRefs = useRef<Record<string, HTMLButtonElement>>({});

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedCollection(null);
    setSelectedFeatured(false);
    setSelectedUserCollection(null);
    setSidebarOpen(false);
  };

  // Scroll-into-view animation for selected category
  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'all' && categoryRefs.current[selectedCategory]) {
      categoryRefs.current[selectedCategory].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
      categoryRefs.current[selectedCategory].classList.add('sidebar-scroll-highlight');
      setTimeout(() => {
        categoryRefs.current[selectedCategory]?.classList.remove('sidebar-scroll-highlight');
      }, 800);
    }
  }, [selectedCategory]);

  // Track scroll progress for mini progress indicator
  useEffect(() => {
    const scrollContainer = sidebarRef.current?.querySelector('.sidebar-scroll-snap');
    if (!scrollContainer) return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      if (scrollHeight > clientHeight) {
        setScrollProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
      }
    };
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCollectionClick = (collectionId: string) => {
    if (selectedCollection === collectionId) {
      setSelectedCollection(null);
    } else {
      setSelectedCollection(collectionId);
    }
    setSelectedFeatured(false);
    setSelectedUserCollection(null);
    setSidebarOpen(false);
  };

  const handleFavoritesClick = () => {
    setSelectedCollection('favorites');
    setSelectedCategory('all');
    setSelectedFeatured(false);
    setSelectedUserCollection(null);
    setSidebarOpen(false);
  };

  const handleFeaturedClick = () => {
    setSelectedFeatured(!selectedFeatured);
    setSelectedUserCollection(null);
    setSidebarOpen(false);
  };

  const handleUserCollectionClick = (collectionId: string) => {
    setSelectedUserCollection(collectionId);
    setSidebarOpen(false);
  };

  const handleAddFolder = () => {
    if (newFolderName.trim()) {
      addBookmarkFolder(newFolderName.trim());
      setNewFolderName('');
      setShowNewFolderInput(false);
    }
  };

  // Categories that should show NEW badge
  const newCategoryIds = ['scroll', 'layout', 'decorative', 'accordions', 'social', 'forms', 'data', 'sliders', 'print', 'container', 'svg', 'typography-art', 'houdini', 'ecommerce', 'game-ui'];

  // Get category emoji for recently added items
  const getCategoryEmoji = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.emoji || '✨';
  };

  const sidebarContent = (
    <div
      ref={sidebarRef}
      className="flex flex-col h-full relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setSpotlightVisible(true)}
      onMouseLeave={() => setSpotlightVisible(false)}
    >
      {/* Spotlight effect overlay */}
      {spotlightVisible && (
        <div
          className="absolute pointer-events-none z-0 w-[200px] h-[200px] rounded-full"
          style={{
            left: spotlightPos.x - 100,
            top: spotlightPos.y - 100,
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Mobile close button */}
      <div className="flex items-center justify-between p-4 md:hidden relative z-10">
        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Menu</span>
        <button onClick={() => setSidebarOpen(false)} className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} aria-label="Close menu">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Categories - with scroll snap and progress indicator */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-2 sidebar-scroll-snap relative z-10">
        {/* Mini progress indicator on right edge */}
        <div className="sidebar-progress">
          <div className="sidebar-progress-fill" style={{ height: `${scrollProgress}%` }} />
        </div>

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

        {/* All Effects button - more prominent */}
        <button
          onClick={() => handleCategoryClick('all')}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 mb-1 relative ${
            selectedCategory === 'all' && !selectedCollection && !selectedFeatured && !selectedUserCollection
              ? 'sidebar-active-slide sidebar-active-border active bg-emerald-500/20 text-emerald-400 border border-emerald-500/25'
              : isDark
                ? 'text-gray-300 hover:bg-white/5 hover:text-gray-100 border border-transparent'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-transparent'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-400/80" />
          All Effects
          <span className={`ml-auto text-xs font-semibold ${selectedCategory === 'all' && !selectedCollection && !selectedFeatured && !selectedUserCollection ? 'text-emerald-400/70 sidebar-count-active' : isDark ? 'text-gray-600' : 'text-gray-400'}`}>{effects.length}</span>
          {selectedCategory === 'all' && !selectedCollection && !selectedFeatured && !selectedUserCollection && (
            <ArrowRight className="w-3 h-3 text-emerald-400/60 ml-1" />
          )}
        </button>

        <div className="space-y-0">
          {categories.filter(c => c.id !== 'all').map((cat, index) => {
            const isActive = selectedCategory === cat.id && !selectedCollection && !selectedFeatured && !selectedUserCollection;
            const hasNew = newCategoryIds.includes(cat.id);
            const catColor = getCategoryColor(cat.id);
            const isOdd = index % 2 === 1;
            return (
              <button
                key={cat.id}
                ref={(el) => { if (el) categoryRefs.current[cat.id] = el; }}
                onClick={() => handleCategoryClick(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 relative group sidebar-category-item sidebar-item-hover-glow ${isOdd ? 'sidebar-row-odd' : 'sidebar-row-even'} ${
                  isActive
                    ? 'sidebar-active-slide sidebar-indicator-slide active bg-emerald-500/20 text-emerald-400 border border-emerald-500/25 sidebar-pulse-active'
                    : isDark
                      ? 'text-gray-400 hover:bg-white/5 hover:text-gray-200 hover:pl-4 border border-transparent'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:pl-4 border border-transparent'
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  {/* Colored dot indicator */}
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: catColor, opacity: isActive ? 1 : 0.6 }}
                  />
                  <span>{cat.emoji}</span>
                  <span className="truncate">{cat.name}</span>
                  {hasNew && (
                    <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded flex items-center gap-0.5 new-badge-pulse">
                      <Flame className="w-2.5 h-2.5" /> NEW
                    </span>
                  )}
                </span>
                <span className={`flex items-center gap-1 text-xs ml-2 shrink-0 category-count-badge ${hasNew ? 'has-new' : ''} ${isActive ? 'text-emerald-400/70 sidebar-count-active' : isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  {cat.count}
                  {isActive && <ArrowRight className="w-3 h-3 text-emerald-400/60" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* User Collections Section */}
        <div className="mt-4">
          <button
            onClick={() => setShowUserCollections(!showUserCollections)}
            className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showUserCollections ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <FolderPlus className="w-3 h-3 text-teal-400/60" />
            My Collections ({userCollections.length})
          </button>
          <AnimatePresence>
            {showUserCollections && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {userCollections.length === 0 ? (
                  <p className={`text-[10px] px-6 py-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>No collections yet. Save effects from the detail modal.</p>
                ) : (
                  <div className="space-y-0.5">
                    {userCollections.map((col: UserCollection) => (
                      <div key={col.id} className="flex items-center group">
                        <button
                          onClick={() => handleUserCollectionClick(col.id)}
                          className={`flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                            selectedUserCollection === col.id
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                              : isDark ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                          }`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: col.color }}
                          />
                          <span className="truncate">{col.name}</span>
                          <span className={`ml-auto text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>({col.effectIds.length})</span>
                        </button>
                        <button
                          onClick={() => removeUserCollection(col.id)}
                          className={`p-1 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-gray-600 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}
                          aria-label={`Remove collection ${col.name}`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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

        {/* Bookmarks Section */}
        <div className="mt-4">
          <button
            onClick={() => setShowBookmarks(!showBookmarks)}
            className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors w-full ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showBookmarks ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <Bookmark className="w-3 h-3 text-amber-400/60" />
            Bookmarks ({bookmarks.length})
          </button>
          <AnimatePresence>
            {showBookmarks && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {bookmarkedEffects.length > 0 && (
                  <div className="space-y-0.5 mb-2">
                    {bookmarkedEffects.slice(0, 8).map((effect) => (
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
                        <Bookmark className="w-3 h-3 text-amber-400/60 shrink-0 fill-current" />
                        <span className="truncate">{effect.name}</span>
                      </button>
                    ))}
                    {bookmarkedEffects.length > 8 && (
                      <span className={`text-[10px] px-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                        +{bookmarkedEffects.length - 8} more
                      </span>
                    )}
                  </div>
                )}

                {/* Bookmark Folders */}
                <div className="mt-2">
                  <div className="flex items-center justify-between px-3 mb-1">
                    <span className={`text-[10px] font-medium uppercase tracking-wider ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Folders</span>
                    <button
                      onClick={() => setShowNewFolderInput(!showNewFolderInput)}
                      className={`text-[10px] flex items-center gap-0.5 transition-colors ${
                        isDark ? 'text-emerald-400/60 hover:text-emerald-400' : 'text-emerald-600/60 hover:text-emerald-600'
                      }`}
                      aria-label="Create new folder"
                    >
                      <Plus className="w-2.5 h-2.5" /> New
                    </button>
                  </div>

                  {showNewFolderInput && (
                    <div className="flex items-center gap-1 px-3 mb-1">
                      <input
                        type="text"
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddFolder()}
                        placeholder="Folder name..."
                        className={`flex-1 px-2 py-1 text-xs border rounded ${
                          isDark
                            ? 'bg-[#0a0a0a] border-gray-800 text-gray-200 placeholder:text-gray-600'
                            : 'bg-white border-gray-200 text-gray-800 placeholder:text-gray-400'
                        }`}
                        autoFocus
                      />
                      <button
                        onClick={handleAddFolder}
                        className="px-2 py-1 text-[10px] bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  )}

                  {bookmarkFolders.length === 0 ? (
                    <p className={`text-[10px] px-6 py-1 ${isDark ? 'text-gray-700' : 'text-gray-300'}`}>No folders yet</p>
                  ) : (
                    <div className="space-y-0.5">
                      {bookmarkFolders.map((folder: BookmarkFolder) => (
                        <div key={folder.id} className="flex items-center group">
                          <button
                            onClick={() => {
                              // Filter to show effects in this folder
                              useEffectsStore.getState().setSelectedCategory('all');
                              setSidebarOpen(false);
                            }}
                            className={`flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all truncate ${
                              isDark ? 'text-gray-500 hover:bg-white/5 hover:text-gray-300' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }`}
                          >
                            <FolderPlus className="w-3 h-3 text-amber-400/40 shrink-0" />
                            <span className="truncate">{folder.name}</span>
                            <span className={`ml-auto text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>({folder.bookmarkIds.length})</span>
                          </button>
                          <button
                            onClick={() => removeBookmarkFolder(folder.id)}
                            className={`p-1 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-gray-600 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}
                            aria-label={`Remove folder ${folder.name}`}
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
