import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Gift } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: (appliedDiscount: number, discountCode: string) => void;
}

const FREE_SHIPPING_THRESHOLD = 50;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; percent: number } | null>(null);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedPromo ? (subtotal * appliedPromo.percent) / 100 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'VIRAL20' || code === 'MYSTERY20') {
      setAppliedPromo({ code, percent: 20 });
      setPromoInput('');
    } else if (code === 'FALL62' || code === 'MYSTERY15') {
      setAppliedPromo({ code, percent: 15 });
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon code. Try VIRAL20 or MYSTERY20');
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-neutral-900" />
            <h2 className="text-base font-bold text-neutral-900">
              Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Tracker */}
        <div className="p-4 bg-neutral-50 border-b border-neutral-100">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            {amountToFreeShipping > 0 ? (
              <span className="text-neutral-700">
                Add <span className="font-extrabold text-neutral-950">${amountToFreeShipping}</span> more for <span className="text-amber-700 font-bold">FREE US Shipping</span>
              </span>
            ) : (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Gift className="w-3.5 h-3.5 text-emerald-600" />
                Unlocked: FREE US Expedited Shipping!
              </span>
            )}
            <span className="text-neutral-500 tabular-nums">{Math.round(freeShippingProgress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                amountToFreeShipping === 0 ? 'bg-emerald-500' : 'bg-neutral-900'
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-neutral-100 mx-auto flex items-center justify-center text-neutral-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-neutral-900">Your bag is empty</h3>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore our viral sheer fleece tights and snatch your winter look with up to 62% off today!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3 rounded-xl border border-neutral-100 bg-white shadow-xs"
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-18 h-22 object-cover rounded-lg bg-neutral-100 shrink-0"
                  referrerPolicy="no-referrer"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-neutral-900 leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-neutral-400 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Metadata specs */}
                    <div className="text-[11px] text-neutral-500 mt-1 space-y-0.5">
                      {item.selectedColor && (
                        <div>Tone: <span className="text-neutral-800 font-semibold">{item.selectedColor}</span></div>
                      )}
                      {item.selectedSize && (
                        <div>Size: <span className="text-neutral-800 font-semibold">{item.selectedSize}</span></div>
                      )}
                      {item.selectedWarmth && (
                        <div>Warmth: <span className="text-neutral-800 font-semibold">{item.selectedWarmth.split(' ')[0]}</span></div>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-neutral-200 rounded-lg">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-neutral-900 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-black text-neutral-900 tabular-nums">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Promo & Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-100 bg-neutral-50/70 space-y-3">
            {/* Promo code */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Promo code (e.g. VIRAL20)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs border border-neutral-200 rounded-lg uppercase tracking-wider focus:outline-hidden focus:border-neutral-900 bg-white"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Apply
              </button>
            </form>

            {appliedPromo && (
              <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100 font-semibold">
                <span>Code {appliedPromo.code} applied (-{appliedPromo.percent}%)</span>
                <button
                  onClick={() => setAppliedPromo(null)}
                  className="text-neutral-400 hover:text-neutral-700 text-xs font-bold"
                >
                  Remove
                </button>
              </div>
            )}

            {promoError && (
              <p className="text-[11px] text-rose-600 font-semibold">{promoError}</p>
            )}

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-neutral-900 tabular-nums">${subtotal}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount ({appliedPromo.percent}%)</span>
                  <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-neutral-900">
                  {amountToFreeShipping === 0 ? 'FREE' : '$4.99'}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-neutral-900 pt-2 border-t border-neutral-200">
                <span>Total</span>
                <span className="tabular-nums">
                  ${(finalTotal + (amountToFreeShipping === 0 ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => onProceedToCheckout(discountAmount, appliedPromo?.code || '')}
              className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe 256-bit Encrypted Checkout · 30-Day Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
