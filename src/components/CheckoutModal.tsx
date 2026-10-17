import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, ArrowRight, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountAmount: number;
  discountCode: string;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountAmount,
  discountCode,
  onOrderComplete
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(555) 392-8192',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zip: '97477',
    cardNumber: '•••• •••• •••• 4242',
    exp: '09/28',
    cvv: '891'
  });
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black tracking-widest uppercase">IRAZIA</span>
            <span className="text-xs text-neutral-400">· Express Secure Checkout</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
            {/* Express Pay Badges */}
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-center space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                Fast 1-Click Checkout
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setStep('success')}
                  className="py-2.5 px-3 bg-[#5A31F4] text-white font-bold text-xs rounded-lg hover:opacity-90 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Shop Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep('success')}
                  className="py-2.5 px-3 bg-black text-white font-bold text-xs rounded-lg hover:opacity-90 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Apple Pay</span>
                </button>
              </div>
            </div>

            <div className="relative flex py-1 items-center">
              <div className="grow border-t border-neutral-200"></div>
              <span className="shrink mx-3 text-xs text-neutral-400 font-medium">Or pay with card</span>
              <div className="grow border-t border-neutral-200"></div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                1. Contact & Shipping Information
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="col-span-2">
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Phone (for tracking)</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-hidden focus:border-neutral-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3 pt-2 border-t border-neutral-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center justify-between">
                <span>2. Payment Details</span>
                <span className="text-[10px] text-neutral-400 font-normal">256-bit SSL Encrypted</span>
              </h4>
              <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                    <CreditCard className="w-4 h-4 text-neutral-600" />
                    <span>Credit or Debit Card</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">Visa · MC · Amex</span>
                </div>
                <input
                  type="text"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg bg-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={formData.exp}
                    onChange={(e) => setFormData({ ...formData, exp: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg bg-white"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    required
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg bg-white"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>

            {/* Total breakdown */}
            <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                <span className="tabular-nums font-semibold text-neutral-900">${subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Promo discount ({discountCode})</span>
                  <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-600">
                <span>US Standard Shipping (3-5 Days)</span>
                <span className="font-semibold text-neutral-900">
                  {shipping === 0 ? 'FREE' : `$${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-neutral-900 pt-2 border-t border-neutral-200">
                <span>Total Due</span>
                <span className="tabular-nums">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>Authorize & Place Order — ${grandTotal.toFixed(2)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Order Confirmation View */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Order Confirmed
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-1">
                Thank You, {formData.name.split(' ')[0]}!
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Order <span className="font-bold text-neutral-900">#{orderNumber}</span> has been received and is being prepared for shipment.
              </p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-neutral-700 font-semibold">
                <Truck className="w-4 h-4 text-neutral-900" />
                <span>Estimated Delivery: 3–5 Business Days</span>
              </div>
              <p className="text-neutral-500">
                We sent tracking confirmation to <span className="font-semibold text-neutral-800">{formData.email}</span>.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Continue Browsing IRAZIA
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
