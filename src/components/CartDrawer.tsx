import React, { useState } from 'react';
import { CartItem } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = promoApplied ? rawSubtotal * 0.1 : 0;
  const freeShippingThreshold = 50;
  const isFreeShipping = rawSubtotal >= freeShippingThreshold;
  const shippingCost = items.length === 0 || isFreeShipping ? 0 : 6;
  const total = Math.max(0, rawSubtotal - discountAmount + shippingCost);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'STUDIO10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "STUDIO10" for 10% off!');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  const handleFinish = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#f9f9f9]">
          <div className="flex items-center gap-2">
            <h2 className="font-display font-bold text-xl text-gray-900">Your Studio Bag</h2>
            <span className="text-xs bg-gray-200 text-gray-700 font-mono px-2 py-0.5 rounded-full font-bold">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-gray-900 rounded-sm hover:bg-gray-200/60 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Checkout Modal Confirmation State */}
        {checkoutComplete ? (
          <div className="p-8 space-y-6 text-center my-auto">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-2xl text-gray-900">Order Confirmed!</h3>
              <p className="text-xs text-gray-500 font-mono">Order #JO-{(Math.random() * 90000 + 10000).toFixed(0)}</p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-body">
              Thank you for supporting independent art! A confirmation receipt and print packaging tracking details have been sent to your email.
            </p>
            <button
              onClick={handleFinish}
              className="w-full bg-[#1a1c1c] text-white text-xs font-semibold py-3 px-4 rounded-xs hover:bg-black transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            {/* Free Shipping Meter */}
            <div className="bg-blue-50 px-6 py-3 border-b border-blue-100 text-xs">
              {isFreeShipping ? (
                <div className="flex items-center gap-2 text-[#004ac6] font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>You have unlocked Free Worldwide Shipping!</span>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-gray-600">
                    <span>Add ${(freeShippingThreshold - rawSubtotal).toFixed(2)} more for Free Shipping</span>
                    <span className="font-mono">{Math.round((rawSubtotal / freeShippingThreshold) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-blue-200/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#004ac6] transition-all duration-300"
                      style={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="text-gray-400 font-display text-lg">Your bag is empty</div>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Explore the shop for limited edition prints, sticker sheets, and artbooks.
                  </p>
                  <button
                    onClick={onClose}
                    className="inline-block bg-[#1a1c1c] text-white text-xs font-semibold px-4 py-2 rounded-xs mt-2"
                  >
                    Browse Prints
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-gray-50/70 rounded-xs border border-gray-200/60"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xs overflow-hidden bg-white border border-gray-200 shrink-0 flex items-center justify-center">
                      <ArtworkVisual imageKey={item.product.image} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-display font-bold text-xs text-gray-900 truncate">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-0.5"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {item.selectedOption && (
                          <span className="text-[10px] text-gray-500 font-mono">{item.selectedOption}</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-300 rounded-xs bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-display font-bold text-xs text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-[#fbfbfb] space-y-4">
                {/* Promo Code Input */}
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder='Promo code ("STUDIO10")'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-white border border-gray-300 px-3 py-1.5 text-xs rounded-xs uppercase font-mono focus:outline-none focus:border-[#004ac6]"
                  />
                  <button
                    type="submit"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-xs transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {promoError && <p className="text-[11px] text-red-600 font-medium">{promoError}</p>}
                {promoApplied && (
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> 10% Studio Collector discount applied!
                  </p>
                )}

                {/* Subtotal Calculation */}
                <div className="space-y-1.5 text-xs text-gray-600 border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-mono text-gray-900">${rawSubtotal.toFixed(2)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Discount (10%):</span>
                      <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Tracked Shipping:</span>
                    <span className="font-mono text-gray-900">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-900 border-t border-gray-200 pt-2">
                    <span>Total USD:</span>
                    <span className="font-display font-extrabold text-base">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  id="checkout-btn"
                  disabled={isCheckingOut}
                  onClick={handleCheckout}
                  className="w-full bg-[#1a1c1c] hover:bg-black text-white text-xs font-semibold py-3 px-4 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  {isCheckingOut ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing Studio Order...
                    </span>
                  ) : (
                    <>
                      <span>Proceed to Instant Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-mono pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Secure 256-bit encrypted checkout</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
