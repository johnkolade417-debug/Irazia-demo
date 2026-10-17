import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../data/storeData';
import { Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, color?: string, size?: string, warmth?: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onQuickView,
  onQuickAdd
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="featured-tights" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Category Filter Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Fall & Winter Wardrobe Essentials</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Featured Cold-Weather Collection
            </h2>
            <p className="text-neutral-500 text-sm mt-1 max-w-xl">
              Engineered with temperature-regulating microfleece and high-compression shaping to keep your legs warm and snatched in any outfit.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl overflow-x-auto shrink-0 max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('tights')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'tights'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Viral Tights
            </button>
            <button
              onClick={() => setActiveCategory('bottoms')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'bottoms'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Shorts & Skirts
            </button>
            <button
              onClick={() => setActiveCategory('accessories')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'accessories'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Thermal Socks
            </button>
          </div>
        </div>

        {/* 3-Column / 2-Column Responsive DTC Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
