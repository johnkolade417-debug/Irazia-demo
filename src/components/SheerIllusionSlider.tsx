import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Flame, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

interface SheerIllusionSliderProps {
  onShopClick: () => void;
}

export const SheerIllusionSlider: React.FC<SheerIllusionSliderProps> = ({ onShopClick }) => {
  const [sliderPos, setSliderPos] = useState(52); // percentage 0 - 100
  const [activePreset, setActivePreset] = useState<'interactive' | 'sheer' | 'fleece'>('interactive');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
    setActivePreset('interactive');
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="sheer-illusion-demo" className="py-16 sm:py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Dual-Weave Technology</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight [text-wrap:balance]">
            The Sheer Illusion: How It Actually Works
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Drag the slider below to reveal the secret behind the viral illusion. On the exterior, our ultra-dense mesh creates a flawless 15-denier bare skin look. On the interior, high-density velvet fleece traps natural body heat.
          </p>

          {/* Preset Buttons */}
          <div className="inline-flex items-center p-1 bg-neutral-800 rounded-full border border-neutral-700 text-xs font-medium mt-2">
            <button
              onClick={() => {
                setActivePreset('sheer');
                setSliderPos(90);
              }}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                activePreset === 'sheer' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Exterior Sheer View
            </button>
            <button
              onClick={() => {
                setActivePreset('interactive');
                setSliderPos(50);
              }}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                activePreset === 'interactive' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Split Comparison
            </button>
            <button
              onClick={() => {
                setActivePreset('fleece');
                setSliderPos(15);
              }}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                activePreset === 'fleece' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Interior Fleece Lining
            </button>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 cursor-ew-resize select-none bg-neutral-950"
          >
            {/* Layer 1: Right Side (Interior Fleece Lining) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://irazia.com/cdn/shop/files/Irazia45ProdImgs_4_7e99c646-7906-4d03-8787-5635689ee750.jpg"
                alt="Plush microfleece lining interior cross-section"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              {/* Thermal Overlay indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 right-4 bg-amber-500/90 text-neutral-950 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-neutral-950" />
                <span>Velvet Fleece Interior (Feels like 72°F)</span>
              </div>

              <div className="absolute bottom-6 right-6 max-w-xs text-right hidden sm:block">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Interior Layer</div>
                <div className="text-sm font-semibold text-white">220g Brushed Thermal Fleece</div>
                <div className="text-xs text-neutral-300 mt-1">Locks body warmth in, stops sub-zero winter chills</div>
              </div>
            </div>

            {/* Layer 2: Left Side (Exterior Bare Skin Sheer Illusion) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[700px] lg:min-w-[896px]">
                <img
                  src="https://irazia.com/cdn/shop/files/Irazia_45_Prod_Imgs_30.jpg"
                  alt="Exterior sheer illusion finish"
                  className="w-full h-full object-cover object-center filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-neutral-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-neutral-700 shadow-md flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Exterior View (100% Sheer Skin Illusion)</span>
                </div>

                <div className="absolute bottom-6 left-6 max-w-xs hidden sm:block">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Exterior Layer</div>
                  <div className="text-sm font-semibold text-white">Semi-Translucent High-Twist Mesh</div>
                  <div className="text-xs text-neutral-300 mt-1">Looks like delicate 15D pantyhose with flawless tone</div>
                </div>
              </div>
            </div>

            {/* Interactive Drag Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white text-neutral-900 shadow-2xl border-2 border-neutral-300 flex items-center justify-center text-xs font-black tracking-tighter">
                ◀ ▶
              </div>
            </div>

            {/* Mobile drag helper instruction */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] text-neutral-300 sm:hidden pointer-events-none">
              Drag finger left & right to inspect
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
            <div className="p-4 rounded-xl bg-neutral-800/60 border border-neutral-800">
              <div className="text-amber-400 font-extrabold text-lg tabular-nums">0% Sheerness Exposure</div>
              <p className="text-neutral-400 text-xs mt-1">Full modesty & squat-proof opacity guaranteed</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-800/60 border border-neutral-800">
              <div className="text-amber-400 font-extrabold text-lg tabular-nums">38.9% Nylon + Spandex</div>
              <p className="text-neutral-400 text-xs mt-1">Resists snagging from acrylic nails & sharp boots</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-800/60 border border-neutral-800">
              <div className="text-amber-400 font-extrabold text-lg tabular-nums">3 Warmth Weights</div>
              <p className="text-neutral-400 text-xs mt-1">85g Light, 220g Cozy, and 320g Arctic Thermal</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 text-center">
            <button
              onClick={onShopClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-100 transition-colors shadow-lg cursor-pointer"
            >
              <span>Shop The Sheer Illusion Tights — $34</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
