import React, { useState, useEffect } from 'react';
import { X, Star, Check, ShoppingBag, ShieldCheck, Flame, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, color?: string, size?: string, warmth?: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedWarmth, setSelectedWarmth] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0].name : undefined);
      setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[1] || product.sizes[0] : undefined);
      setSelectedWarmth(product.warmthLevels && product.warmthLevels.length > 0 ? product.warmthLevels[1]?.label || product.warmthLevels[0]?.label : undefined);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const currentImage = product.images[activeImageIndex] || product.images[0];
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleColorSelect = (colorName: string, imageIndex?: number) => {
    setSelectedColor(colorName);
    if (imageIndex !== undefined && imageIndex < product.images.length) {
      setActiveImageIndex(imageIndex);
    }
  };

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, selectedWarmth);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh] animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 bg-white/80 hover:bg-white text-neutral-800 rounded-full shadow-sm backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 bg-neutral-100 flex flex-col justify-between p-4 sm:p-6 overflow-hidden">
          <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-neutral-200 shadow-inner">
            <img
              src={currentImage}
              alt={product.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
              Save {discountPercent}%
            </div>
          </div>

          {/* Thumbnails if multiple */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-neutral-900 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            {/* Rating */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-extrabold text-neutral-900 tabular-nums">{product.rating}</span>
              <span className="text-neutral-400">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>

            {/* Title & Price */}
            <div>
              <h2 className="text-xl font-bold text-neutral-900 leading-tight">
                {product.title}
              </h2>
              <div className="flex items-baseline gap-2.5 mt-2">
                <span className="text-2xl font-black text-neutral-900 tabular-nums">
                  ${product.price}
                </span>
                <span className="text-base text-neutral-400 line-through tabular-nums">
                  ${product.originalPrice}
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  Fall Sale Deal
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            {/* Warmth Level Selector (if tights) */}
            {product.warmthLevels && product.warmthLevels.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    Warmth Level
                  </span>
                  <span className="text-xs font-semibold text-neutral-900 truncate">
                    {selectedWarmth?.split(' ')[0]}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {product.warmthLevels.map((w) => {
                    const isSelected = selectedWarmth === w.label;
                    return (
                      <button
                        key={w.id}
                        onClick={() => setSelectedWarmth(w.label)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-800 bg-white'
                        }`}
                      >
                        <div className="font-semibold">{w.label}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {w.temp}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Color Swatch Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                    Tone / Color
                  </span>
                  <span className="text-xs font-bold text-neutral-900">
                    {selectedColor}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => handleColorSelect(c.name, c.imageIndex)}
                        title={c.name}
                        className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                          isSelected ? 'border-neutral-900 ring-2 ring-neutral-900/20 scale-110' : 'border-neutral-200 hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white drop-shadow-sm" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                    Size
                  </span>
                  <span className="text-xs font-bold text-neutral-900">
                    {selectedSize}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {product.sizes.map((s) => {
                    const isSelected = selectedSize === s;
                    return (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 px-2 text-center rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-900 text-white'
                            : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                        }`}
                      >
                        {s.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Action Module */}
          <div className="pt-4 border-t border-neutral-100 space-y-2.5">
            <button
              onClick={handleAdd}
              className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag — ${product.price}</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-neutral-700" />
                Free US Shipping
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                30-Day Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
