import React from 'react';
import { ShoppingBag, Star, Zap } from 'lucide-react';

interface MobileBottomBarProps {
  onQuickBuy: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onQuickBuy }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-xl px-4 py-2.5 flex items-center justify-between gap-3">
      {/* Product Summary Left */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-black text-neutral-900 truncate">
            Sheer Illusion Tights
          </span>
          <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0">
            -43%
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
          <span className="font-extrabold text-neutral-900 tabular-nums">$34</span>
          <span className="line-through text-neutral-400 tabular-nums">$60</span>
          <span>·</span>
          <span className="flex items-center text-amber-500 font-bold">
            <Star className="w-3 h-3 fill-amber-500" /> 4.9
          </span>
        </div>
      </div>

      {/* Buy CTA Right */}
      <button
        onClick={onQuickBuy}
        className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all shrink-0 cursor-pointer"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Quick Buy</span>
      </button>
    </div>
  );
};
