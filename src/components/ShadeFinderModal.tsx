import React, { useState } from 'react';
import { X, Check, Sparkles, ArrowRight } from 'lucide-react';

interface ShadeFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectShade: (shadeName: string, sizeName: string) => void;
}

const SHADES = [
  {
    name: 'Vanilla (Light)',
    hex: '#E8D3C0',
    toneDesc: 'Fair to Light skin',
    wristVeins: 'Burns easily in sun; looks best with ivory, porcelain, and fair foundations.',
    img: 'https://irazia.com/cdn/shop/files/Irazia_45_Prod_Imgs_30.jpg'
  },
  {
    name: 'Latte (Tan)',
    hex: '#C9A88D',
    toneDesc: 'Medium to Golden Tan',
    wristVeins: 'Tans with mild burn; looks best with warm beige, sand, and natural golden shades.',
    img: 'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_4_7e99c646-7906-4d03-8787-5635689ee750.jpg'
  },
  {
    name: 'Caramel (Bronze)',
    hex: '#A67C52',
    toneDesc: 'Caramel to Olive & Bronze',
    wristVeins: 'Rarely burns; pairs naturally with honey, warm bronze, and olive undertones.',
    img: 'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_29.jpg'
  },
  {
    name: 'Espresso (Deep)',
    hex: '#5C3E29',
    toneDesc: 'Deep Rich & Melanated',
    wristVeins: 'Never burns; formulated specifically to eliminate ashy gray cast on deep skin tones.',
    img: 'https://irazia.com/cdn/shop/files/Irazia45ProdImgs_47.jpg'
  }
];

const SIZES = [
  { id: 'XXS/XS (00-1)', weight: '80 - 110 lbs', height: "4'10\" - 5'4\"" },
  { id: 'XS/S (2-6)', weight: '105 - 140 lbs', height: "5'1\" - 5'7\"" },
  { id: 'M/L (7-11)', weight: '135 - 175 lbs', height: "5'2\" - 5'10\"" },
  { id: 'L/XL (12-16)', weight: '170 - 215 lbs', height: "5'3\" - 6'0\"" },
  { id: '2XL/3XL (18-24)', weight: '210 - 265 lbs', height: "5'2\" - 6'0\"" },
  { id: '4XL/5XL (26-32)', weight: '260 - 320 lbs', height: "5'2\" - 6'0\"" }
];

export const ShadeFinderModal: React.FC<ShadeFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectShade
}) => {
  const [selectedShade, setSelectedShade] = useState(SHADES[1].name);
  const [selectedSize, setSelectedSize] = useState(SIZES[1].id);

  if (!isOpen) return null;

  const currentShadeObj = SHADES.find(s => s.name === selectedShade) || SHADES[0];

  const handleApply = () => {
    onSelectShade(selectedShade, selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="text-base font-bold text-neutral-900">
              Interactive Shade & Size Matcher
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Step 1: Select Shade */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Step 1: Pick Your Skin Tone Tone
              </label>
              <span className="text-xs font-semibold text-neutral-900">
                Selected: {selectedShade}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SHADES.map(s => {
                const active = selectedShade === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => setSelectedShade(s.name)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center text-center ${
                      active
                        ? 'border-neutral-900 bg-neutral-50 ring-2 ring-neutral-900/10'
                        : 'border-neutral-200 hover:border-neutral-400 bg-white'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm mb-2"
                      style={{ backgroundColor: s.hex }}
                    />
                    <div className="text-xs font-bold text-neutral-900 leading-tight">
                      {s.name.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">
                      {s.toneDesc.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Shade Guidance */}
            <div className="mt-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
              <img
                src={currentShadeObj.img}
                alt={currentShadeObj.name}
                className="w-14 h-14 rounded-lg object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-xs">
                <span className="font-bold text-neutral-900 block">{currentShadeObj.name} Guidance:</span>
                <p className="text-neutral-600 mt-0.5 leading-relaxed">{currentShadeObj.wristVeins}</p>
              </div>
            </div>
          </div>

          {/* Step 2: Select Size */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Step 2: Choose Your Fit
              </label>
              <span className="text-xs font-semibold text-neutral-900">
                Selected: {selectedSize}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SIZES.map(sz => {
                const active = selectedSize === sz.id;
                return (
                  <button
                    key={sz.id}
                    onClick={() => setSelectedSize(sz.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      active
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{sz.id}</span>
                      {active && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {sz.weight} · {sz.height}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50/70 flex items-center justify-between gap-4">
          <div className="text-xs text-neutral-500 hidden sm:block">
            <span>Free 30-day shade exchange if not 100% satisfied</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-xs font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Apply to Tights</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
