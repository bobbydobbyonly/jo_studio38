/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { GalleryView } from './components/GalleryView';
import { CommissionsView } from './components/CommissionsView';
import { ShopView } from './components/ShopView';
import { AboutView } from './components/AboutView';
import { ArtworkModal } from './components/ArtworkModal';
import { CartDrawer } from './components/CartDrawer';
import { ContactModal } from './components/ContactModal';
import { Artwork, CartItem, ShopItem } from './types';
import { SHOP_ITEMS } from './data/artworks';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'gallery' | 'commissions' | 'shop' | 'about'>('gallery');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jo_studio38_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('jo_studio38_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product: ShopItem, selectedOption?: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedOption === selectedOption
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      } else {
        return [...prev, { product, quantity: 1, selectedOption }];
      }
    });
    showToast(`Added "${product.title}" to bag!`);
  };

  const handleAddArtworkPrintToCart = (artwork: Artwork) => {
    // Look for matching shop print or create one dynamically
    const matchingShopItem = SHOP_ITEMS.find((item) => item.image === artwork.image) || {
      id: `print-${artwork.id}`,
      title: `${artwork.title} — Archival Fine Art Print`,
      type: 'Print' as const,
      price: artwork.printPrice || 32,
      image: artwork.image,
      description: `Fine art print of "${artwork.title}" on 310gsm archival paper.`,
      tags: ['Fine Art Print', 'Archival'],
      inStock: true,
      options: ['12" × 18"', '18" × 24"'],
      details: ['Hand-signed certificate', '300DPI museum grade inks'],
    };

    handleAddToCart(matchingShopItem, '12" × 18"');
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <ProfilePhotoProvider>
      <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col lg:flex-row">
        {/* Fixed Left Sidebar */}
        <Sidebar
          currentTab={currentTab}
          onSelectTab={(tab) => {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          cartCount={cartCount}
          onOpenCart={() => setCartOpen(true)}
          onOpenContact={() => setContactOpen(true)}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
        />

        {/* Main Content Area (64px margin per design spec) */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 md:px-12 lg:px-16 pt-8 md:pt-12">
          {currentTab === 'gallery' && (
            <GalleryView onSelectArtwork={(art) => setSelectedArtwork(art)} />
          )}
          {currentTab === 'commissions' && <CommissionsView />}
          {currentTab === 'shop' && <ShopView onAddToCart={handleAddToCart} />}
          {currentTab === 'about' && <AboutView />}
        </main>

        {/* Artwork Deep Zoom Lightbox Modal */}
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onAddToCart={handleAddArtworkPrintToCart}
        />

        {/* Cart Drawer */}
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* Quick Contact Modal */}
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

        {/* Toast Notification Alert */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1a1c1c] text-white text-xs font-semibold px-4 py-3 rounded-xs shadow-xl flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#004ac6]" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </ProfilePhotoProvider>
  );
}
