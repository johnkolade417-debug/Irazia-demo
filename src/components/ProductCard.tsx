import React, { useState } from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, color?: string, size?: string, warmth?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onQuickAdd
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0].name : undefined
  );

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleColorClick = (colorName: string, imageIndex?: number) => {
    setSelectedColor(colorName);
    if (imageIndex !== undefined && imageIndex < product.images.length) {
      setActiveImageIndex(imageIndex);
    }
  };

  const currentImage = product.images[activeImageIndex] || product.images[0];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Image Container with Badges */}
      <div className="relative aspect-3/4 sm:aspect-4/5 overflow-hidden bg-neutral-100">
        <img
          src={currentImage}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Elegant fallback styled container
            (e.target as HTMLElement).style.opacity = '0.9';
          }}
        />

        {/* Sale Tag */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          <span className="bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            Sale -{discountPercent}%
          </span>
          {product.tag && (
            <span className="bg-amber-400 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded shadow-sm">
              {product.tag}
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-neutral-800 rounded-full shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="Quick view product"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Quick Add Overlay on desktop hover */}
        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 hidden sm:block">
          <button
            onClick={() => onQuickAdd(product, selectedColor)}
            className="w-full py-2.5 bg-neutral-900/95 hover:bg-neutral-900 text-white font-bold text-xs rounded-xl shadow-lg backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add — ${product.price}</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-600 mb-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
            </div>
            <span className="font-bold text-neutral-900 tabular-nums">{product.rating}</span>
            <span className="text-neutral-400">({product.reviewCount.toLocaleString()})</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-bold text-sm sm:text-base text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-base sm:text-lg font-black text-neutral-900 tabular-nums">
              ${product.price}
            </span>
            <span className="text-xs sm:text-sm text-neutral-400 line-through tabular-nums">
              ${product.originalPrice}
            </span>
          </div>
        </div>

        {/* Color Swatches if available */}
        {product.colors && product.colors.length > 0 && (
          <div className="pt-2 border-t border-neutral-100">
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => {
                const isSelected = selectedColor === c.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => handleColorClick(c.name, c.imageIndex)}
                    title={c.name}
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border transition-all cursor-pointer ${
                      isSelected ? 'ring-2 ring-neutral-900 ring-offset-1 scale-110' : 'border-neutral-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Select color ${c.name}`}
                  />
                );
              })}
              <span className="text-[11px] text-neutral-500 font-medium ml-1 truncate">
                {selectedColor || product.colors[0].name}
              </span>
            </div>
          </div>
        )}

        {/* Mobile Quick Add Button */}
        <button
          onClick={() => onQuickAdd(product, selectedColor)}
          className="w-full sm:hidden py-2.5 bg-neutral-900 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Bag — ${product.price}</span>
        </button>
      </div>
    </div>
  );
};
