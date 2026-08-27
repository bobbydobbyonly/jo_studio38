import React, { useState } from 'react';
import { Artwork } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, ZoomIn, ZoomOut, Maximize2, ShoppingBag, Share2, Sparkles, Layers, Palette } from 'lucide-react';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onAddToCart?: (artwork: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose, onAddToCart }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!artwork) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/#${artwork.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="artwork-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-md max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#f9f9f9]">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg text-gray-900">{artwork.title}</span>
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-xs font-mono">
              {artwork.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-sm hover:bg-gray-200/60 transition-colors"
              title="Copy link to artwork"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-sm hover:bg-gray-200/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8">
          {/* Main Visual Display with Pan/Zoom Controls */}
          <div className="relative group bg-[#faf7f0] rounded-sm overflow-hidden border border-gray-200/80 flex items-center justify-center">
            <div
              className="w-full transition-transform duration-200 ease-out origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <ArtworkVisual imageKey={artwork.image} className="w-full" />
            </div>

            {/* Zoom Controls Overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-gray-200 shadow-xs">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(0.8, prev - 0.25))}
                className="p-1 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono font-medium text-gray-700 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.25))}
                className="p-1 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100 ml-1 border-l border-gray-200"
                title="Reset Zoom"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Details & Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left 2 Cols: Story, Context, Color Palette */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">{artwork.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{artwork.description}</p>
              </div>

              {artwork.story && (
                <div className="p-4 bg-gray-50 rounded-sm border border-gray-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Creative Process & Backstory</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-body">{artwork.story}</p>
                </div>
              )}

              {/* Color Palette Extraction */}
              {artwork.colorPalette && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                    <Palette className="w-3.5 h-3.5 text-blue-600" />
                    <span>Studio Color Palette</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {artwork.colorPalette.map((color, idx) => (
                      <div key={idx} className="group relative flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-sm border border-black/10 shadow-2xs transition-transform group-hover:scale-110 cursor-pointer"
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            navigator.clipboard.writeText(color);
                            alert(`Copied ${color} to clipboard!`);
                          }}
                          title={`Click to copy ${color}`}
                        />
                        <span className="text-[9px] font-mono text-gray-400 mt-1">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Specifications & Print Shop CTA */}
            <div className="bg-[#fcfbf9] p-5 rounded-sm border border-gray-200/70 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-700 uppercase tracking-wider font-mono border-b border-gray-200 pb-2">
                  Specifications
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Medium:</span>
                    <span className="font-medium text-gray-800">{artwork.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Creation Year:</span>
                    <span className="font-medium text-gray-800">{artwork.year}</span>
                  </div>
                  {artwork.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Native Resolution:</span>
                      <span className="font-mono text-gray-800">{artwork.dimensions}</span>
                    </div>
                  )}
                  {artwork.client && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Client / Project:</span>
                      <span className="font-medium text-gray-800">{artwork.client}</span>
                    </div>
                  )}
                </div>

                {/* Tools Used */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-gray-600 block mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-blue-600" />
                    Tools & Software
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {artwork.tools.map((tool, i) => (
                      <span key={i} className="text-[10px] bg-gray-200/70 text-gray-700 px-2 py-0.5 rounded-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purchase Print Button */}
              {artwork.printAvailable && (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-gray-500">Archival Print:</span>
                    <span className="font-display font-bold text-lg text-gray-900">
                      ${artwork.printPrice || 32}.00
                    </span>
                  </div>
                  <button
                    id="add-print-to-cart-btn"
                    onClick={() => {
                      if (onAddToCart) onAddToCart(artwork);
                      onClose();
                    }}
                    className="w-full bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold py-2.5 px-4 rounded-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Fine Art Print</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
