import React from 'react';
import { X, Sparkles, ChevronRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenShadeFinder: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenShadeFinder
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-300">
        {/* Drawer Header */}
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
          <span className="text-xl font-black tracking-widest uppercase">IRAZIA</span>
          <button 
            onClick={onClose} 
            className="p-2 text-neutral-500 hover:text-black rounded-lg"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Promo snippet */}
        <div className="p-4 bg-neutral-900 text-white text-xs">
          <p className="font-semibold text-amber-300">Fall Special · Up to 62% OFF</p>
          <p className="text-neutral-300 text-[11px] mt-0.5">Free 3-5 day US express delivery on $50+</p>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <a
            href="#featured-tights"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            <span>Viral Sheer Tights</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </a>
          <a
            href="#warmth-selector"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            <span>Fleece Warmth Guide</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenShadeFinder();
            }}
            className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-50 text-left"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Find My Shade Match
            </span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </button>
          <a
            href="#sheer-illusion-demo"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            <span>Sheer Illusion Demo</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </a>
          <a
            href="#reviews"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            <span>Customer Reviews</span>
            <span className="text-xs text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">4.9 ★</span>
          </a>
          <a
            href="#faqs"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            <span>Frequently Asked Questions</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>

        {/* Guarantees */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50 space-y-2 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-neutral-800 shrink-0" />
            <span>Fast 3–5 Day US Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-neutral-800 shrink-0" />
            <span>30-Day Snug & Snatched Exchange</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neutral-800 shrink-0" />
            <span>100% Tear-Proof Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};
