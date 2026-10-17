import React from 'react';
import { ShoppingBag, Menu, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  onOpenShadeFinder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenMobileMenu,
  onOpenShadeFinder
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 text-neutral-800 hover:text-black rounded-md -ml-2"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <a
            href="/"
            className="text-2xl font-black tracking-widest text-neutral-900 uppercase font-sans whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            IRAZIA
          </a>
        </div>

        {/* Zone 2: 4-5 Clean Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-neutral-700">
          <a
            href="#featured-tights"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Sheer Tights
          </a>
          <a
            href="#warmth-selector"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Warmth Guide
          </a>
          <button
            onClick={onOpenShadeFinder}
            className="hover:text-black transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Find My Shade</span>
          </button>
          <a
            href="#reviews"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            Reviews (3,400+)
          </a>
          <a
            href="#faqs"
            className="hover:text-black transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Bag Button) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-sm group cursor-pointer"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="sr-only">Shopping Bag</span>
            {cartCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-950 text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-in zoom-in-50">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>
    </header>
  );
};
