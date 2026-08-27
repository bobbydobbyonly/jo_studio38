import React, { useState } from 'react';
import { Artwork } from '../types';
import { ARTWORKS } from '../data/artworks';
import { ArtworkVisual } from './ArtworkVisual';
import { ArrowRight, Eye, Sparkles, Filter } from 'lucide-react';

interface GalleryViewProps {
  onSelectArtwork: (artwork: Artwork) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onSelectArtwork }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAllGrid, setShowAllGrid] = useState<boolean>(false);

  // Featured Hero Artwork (City Life Panorama)
  const featuredArtwork = ARTWORKS.find((a) => a.id === 'city-life-panorama') || ARTWORKS[0];

  // Specific selected works for the 2-column layout matching the screenshot:
  const leftColArtworks = [
    ARTWORKS.find((a) => a.id === 'sticker-trio-mascots')!,
    ARTWORKS.find((a) => a.id === 'grumpy-window-cat')!,
  ].filter(Boolean);

  const rightColArtworks = [
    ARTWORKS.find((a) => a.id === 'dynamic-motion-rush')!,
    ARTWORKS.find((a) => a.id === 'studio-desk-sanctuary')!,
  ].filter(Boolean);

  // Filtered artworks for the expanded catalog
  const filteredArtworks =
    activeCategory === 'All'
      ? ARTWORKS
      : ARTWORKS.filter((art) => art.category === activeCategory || art.tags.includes(activeCategory));

  const categories = ['All', 'Environment', 'Character', 'Storytelling', 'Stickers', 'Concept Art'];

  return (
    <div className="space-y-14 pb-20 max-w-6xl mx-auto">
      {/* 1. HERO FEATURED SHOWCASE (Matches screenshot exactly) */}
      <section className="space-y-6">
        {/* Large Panoramic Container with 4px soft radius */}
        <div
          id="featured-hero-artwork"
          onClick={() => onSelectArtwork(featuredArtwork)}
          className="group relative w-full overflow-hidden rounded-xs border border-[#e5e7eb] bg-[#faf7ef] cursor-pointer transition-all duration-200 hover:border-gray-400"
        >
          <ArtworkVisual
            imageKey={featuredArtwork.image}
            className="w-full transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Subtle Hover Action Pill */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>Click to explore high-res panorama</span>
          </div>
        </div>

        {/* Hero Title, Subtitle, and Tags (Pixel-perfect typography matching screenshot) */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-1">
          <div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1a1c1c] leading-tight">
              {featuredArtwork.title}
            </h1>
            <p className="text-sm sm:text-base text-[#5f5e5e] font-normal mt-1">
              {featuredArtwork.medium}, {featuredArtwork.year}
            </p>
          </div>

          {/* Chips/Tags: Light gray background #F3F4F6 with 4px rounded corners (per spec) */}
          <div className="flex items-center gap-2 flex-wrap">
            {featuredArtwork.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#f3f4f6] text-[#434655] text-xs font-semibold px-3 py-1 rounded-[4px] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORKS HEADER */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4">
          <div className="flex items-center gap-3">
            <h2 className="font-display font-bold text-2xl text-[#1a1c1c] tracking-tight">
              Selected Works
            </h2>
            {showAllGrid && (
              <span className="text-xs font-mono bg-blue-50 text-[#004ac6] px-2 py-0.5 rounded-full font-bold">
                {filteredArtworks.length} pieces
              </span>
            )}
          </div>

          <button
            id="view-all-works-btn"
            onClick={() => setShowAllGrid(!showAllGrid)}
            className="group text-sm font-semibold text-[#1a1c1c] hover:text-[#004ac6] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>{showAllGrid ? 'Show Featured Layout' : 'View All'}</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${showAllGrid ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Category Filters (Visible when View All is expanded) */}
        {showAllGrid && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1a1c1c] text-white'
                    : 'bg-[#f3f4f6] text-[#5f5e5e] hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* 3. MASONRY 2-COLUMN GRID (Matching screenshot composition exactly) */}
        {!showAllGrid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column: Sticker Trio & Grumpy Window Cat */}
            <div className="space-y-6">
              {leftColArtworks.map((art) => (
                <div
                  key={art.id}
                  id={`gallery-item-${art.id}`}
                  onClick={() => onSelectArtwork(art)}
                  className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#e5e7eb] bg-white transition-all duration-200 hover:border-gray-400 hover:shadow-xs"
                >
                  <ArtworkVisual imageKey={art.image} className="w-full" />
                  
                  {/* Hover Caption Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white backdrop-blur-[2px]">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-blue-300 font-bold">
                      {art.category}
                    </span>
                    <h3 className="font-display font-bold text-lg leading-tight mt-0.5">{art.title}</h3>
                    <p className="text-xs text-gray-200 line-clamp-1 mt-1 font-body">{art.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Motion Girl & Cozy Studio Workspace */}
            <div className="space-y-6">
              {rightColArtworks.map((art) => (
                <div
                  key={art.id}
                  id={`gallery-item-${art.id}`}
                  onClick={() => onSelectArtwork(art)}
                  className="group relative cursor-pointer overflow-hidden rounded-xs border border-[#e5e7eb] bg-white transition-all duration-200 hover:border-gray-400 hover:shadow-xs"
                >
                  <ArtworkVisual imageKey={art.image} className="w-full" />

                  {/* Hover Caption Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white backdrop-blur-[2px]">
                    <span className="text-[11px] uppercase tracking-wider font-mono text-blue-300 font-bold">
                      {art.category}
                    </span>
                    <h3 className="font-display font-bold text-lg leading-tight mt-0.5">{art.title}</h3>
                    <p className="text-xs text-gray-200 line-clamp-1 mt-1 font-body">{art.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Full Expanded Catalog Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                id={`gallery-catalog-item-${art.id}`}
                onClick={() => onSelectArtwork(art)}
                className="group flex flex-col rounded-xs border border-[#e5e7eb] bg-white overflow-hidden cursor-pointer hover:border-gray-400 transition-all duration-200"
              >
                <div className="relative overflow-hidden bg-gray-50 aspect-4/3 flex items-center justify-center">
                  <ArtworkVisual imageKey={art.image} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display font-bold text-base text-gray-900 leading-snug group-hover:text-[#004ac6] transition-colors">
                      {art.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-mono">{art.year}</span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1 font-body">{art.description}</p>
                  <div className="flex gap-1.5 pt-2">
                    {art.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-[3px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. STUDIO HIGHLIGHT BANNER */}
      <section className="bg-white border border-[#e5e7eb] rounded-xs p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#004ac6] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Custom Artwork & Licensing</span>
          </div>
          <h3 className="font-display font-bold text-xl md:text-2xl text-[#1a1c1c]">
            Looking for bespoke illustrations or book art?
          </h3>
          <p className="text-xs md:text-sm text-[#5f5e5e] max-w-xl font-body">
            I collaborate with authors, indie game studios, and brands on character design, storyboards, and editorial book illustrations.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#commissions"
            onClick={(e) => {
              e.preventDefault();
              const navCommissions = document.getElementById('nav-link-commissions');
              if (navCommissions) navCommissions.click();
            }}
            className="bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-xs transition-colors shadow-2xs"
          >
            Commission Calculator
          </a>
        </div>
      </section>
    </div>
  );
};
