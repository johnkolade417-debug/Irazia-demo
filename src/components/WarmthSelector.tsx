import React, { useState } from 'react';
import { Flame, Thermometer, Wind, Check, ShoppingBag, Info } from 'lucide-react';
import { WARMTH_LEVELS } from '../data/storeData';

interface WarmthSelectorProps {
  onSelectWarmthAndBuy: (warmthId: string) => void;
}

export const WarmthSelector: React.FC<WarmthSelectorProps> = ({ onSelectWarmthAndBuy }) => {
  const [selectedWarmthId, setSelectedWarmthId] = useState<string>('cozy');

  const currentWarmth = WARMTH_LEVELS.find(w => w.id === selectedWarmthId) || WARMTH_LEVELS[1];

  return (
    <section id="warmth-selector" className="py-16 sm:py-24 bg-neutral-50 text-neutral-900 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>Thermal Customization</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 [text-wrap:balance]">
            Interactive Fleece Warmth Selector
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Not all cold is the same. Choose between 3 engineered thermal weights tailored to your local temperature, from crisp autumn evenings down to sub-zero snowstorms.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {WARMTH_LEVELS.map((level) => {
            const isSelected = selectedWarmthId === level.id;
            return (
              <div
                key={level.id}
                onClick={() => setSelectedWarmthId(level.id)}
                className={`relative rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white shadow-xl ring-2 ring-neutral-900 translate-y-[-2px]'
                    : 'bg-white/70 hover:bg-white shadow-sm border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {/* Popular badge */}
                {level.id === 'cozy' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-neutral-950 text-[11px] font-black uppercase px-3 py-0.5 rounded-full shadow-sm tracking-wide">
                    ★ Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {level.weight}
                    </span>
                    <div className="flex items-center gap-1 font-extrabold text-sm text-neutral-900 tabular-nums">
                      <Thermometer className="w-4 h-4 text-amber-600" />
                      <span>{level.temp.split(' ')[0]}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {level.label}
                  </h3>

                  <p className="text-xs font-semibold text-neutral-500 mb-3">
                    {level.bestFor}
                  </p>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {level.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Thickness: {level.thickness}</span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-neutral-900 text-white' : 'border border-neutral-300 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Warmth Deep-Dive Module */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual preview */}
            <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-neutral-100">
              <img
                src={currentWarmth.image}
                alt={`${currentWarmth.label} thermal fabric`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Thermal Specification
                </span>
                <p className="text-base font-extrabold">{currentWarmth.label} ({currentWarmth.weight})</p>
              </div>
            </div>

            {/* Specifications & Action */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Recommended Weather Rating
                </span>
                <h4 className="text-xl font-extrabold text-neutral-900 mt-0.5">
                  Target: {currentWarmth.temp}
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Ideal for: {currentWarmth.bestFor}
                </p>
              </div>

              <div className="space-y-2 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dual-layer sheer illusion coating looks 100% natural on skin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Windproof micro-weave blocks biting winter drafts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-neutral-600 shrink-0" />
                  <span>Non-slip compression waistband sculpts without pinch marks</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Sale Price</div>
                  <div className="text-2xl font-black text-neutral-900 tabular-nums">
                    $34 <span className="text-sm font-normal text-neutral-400 line-through">$60</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectWarmthAndBuy(currentWarmth.id)}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Select & Quick Add — $34</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
