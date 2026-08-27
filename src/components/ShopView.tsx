import React, { useState } from 'react';
import { SHOP_ITEMS } from '../data/artworks';
import { ShopItem } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { ShoppingBag, Check, Sparkles, Filter, PackageCheck, Layers } from 'lucide-react';

interface ShopViewProps {
  onAddToCart: (item: ShopItem, option?: string) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<ShopItem | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filters = ['All', 'Print', 'Stickers', 'Digital Brushes'];

  const filteredItems =
    activeFilter === 'All'
      ? SHOP_ITEMS
      : SHOP_ITEMS.filter((item) => item.type === activeFilter);

  const handleQuickAdd = (item: ShopItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultOpt = item.options ? item.options[0] : undefined;
    onAddToCart(item, defaultOpt);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleOpenProduct = (item: ShopItem) => {
    setSelectedProduct(item);
    setSelectedOption(item.options ? item.options[0] : '');
  };

  return (
    <div className="space-y-12 pb-20 max-w-6xl mx-auto">
      {/* 1. Shop Header */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#1a1c1c] tracking-tight">
              Studio Print Shop
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-body">
              Archival giclée prints, limited risograph editions, die-cut vinyl stickers, and digital brush kits.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <PackageCheck className="w-4 h-4 text-blue-600" />
            <span>Worldwide flat-rate shipping • Free over $50</span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 shrink-0" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#1a1c1c] text-white'
                  : 'bg-[#f3f4f6] text-[#5f5e5e] hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {f === 'Print' ? 'Art Prints' : f}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((product) => {
          const isAdded = addedId === product.id;
          return (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              onClick={() => handleOpenProduct(product)}
              className="group flex flex-col justify-between rounded-xs border border-gray-200 bg-white overflow-hidden cursor-pointer hover:border-gray-400 transition-all duration-200 shadow-2xs"
            >
              {/* Image Container with Badges */}
              <div className="relative overflow-hidden bg-[#faf7f2] aspect-4/3 flex items-center justify-center p-3">
                <ArtworkVisual
                  imageKey={product.image}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isBestSeller && (
                    <span className="bg-[#1a1c1c] text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
                      Best Seller
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-[#004ac6] text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
                      New Release
                    </span>
                  )}
                </div>

                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-gray-800 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-[3px] border border-gray-200/60 shadow-2xs">
                  {product.type}
                </span>
              </div>

              {/* Product Info & CTA */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-display font-bold text-base text-gray-900 leading-snug group-hover:text-[#004ac6] transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 line-clamp-2 font-body leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-extrabold text-lg text-gray-900">
                      ${product.price}.00
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through font-mono">
                        ${product.originalPrice}.00
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(product, e)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#1a1c1c] text-white hover:bg-black'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Product Quick Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-xs max-w-2xl w-full overflow-hidden shadow-2xl p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#004ac6] font-bold">
                  {selectedProduct.type}
                </span>
                <h3 className="font-display font-bold text-2xl text-gray-900 mt-0.5">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                ✕
              </button>
            </div>

            <div className="h-64 bg-[#faf7f2] rounded-xs overflow-hidden border border-gray-200 flex items-center justify-center">
              <ArtworkVisual imageKey={selectedProduct.image} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs text-gray-600 leading-relaxed font-body">
              {selectedProduct.description}
            </p>

            {/* Options / Size selector */}
            {selectedProduct.options && selectedProduct.options.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-800 font-mono uppercase tracking-wider">
                  Select Size / Finish:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProduct.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedOption(opt)}
                      className={`p-2.5 text-xs text-center rounded-xs border transition-colors ${
                        selectedOption === opt
                          ? 'border-[#004ac6] bg-blue-50 text-[#004ac6] font-semibold'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quality Specs */}
            <ul className="space-y-1.5 text-xs text-gray-600 bg-gray-50 p-4 rounded-xs border border-gray-100">
              {selectedProduct.details.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="font-display font-extrabold text-2xl text-gray-900">
                ${selectedProduct.price}.00
              </span>

              <button
                onClick={() => {
                  onAddToCart(selectedProduct, selectedOption);
                  setSelectedProduct(null);
                }}
                className="bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold py-3 px-6 rounded-xs transition-colors flex items-center gap-2 shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Item to Bag</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
