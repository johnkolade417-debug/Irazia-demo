import React from 'react';
import { Star, ShieldCheck, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/storeData';

interface HeroProps {
  onShopClick: () => void;
  onExploreWarmth: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onExploreWarmth }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
      {/* Background Media with Scraped Real Image */}
      <picture className="absolute inset-0 w-full h-full">
        <source 
          media="(max-width: 767px)" 
          srcSet={HERO_DATA.heroImageMobile} 
        />
        <img
          src={HERO_DATA.heroImageDesktop}
          alt="IRAZIA Viral Sheer Illusion Fleece-Lined Tights on model"
          className="w-full h-full object-cover object-top sm:object-center filter brightness-[0.88] transition-transform duration-1000 ease-out hover:scale-[1.02]"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // High-fidelity fallback gradient if offline
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </picture>

      {/* Measured Scrim Gradient for 100% Contrast & AA Legibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-transparent pointer-events-none" 
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          {/* Social Proof & Rating Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-neutral-100">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold">{HERO_DATA.trustRating}</span>
          </div>

          {/* Scraped Headline with Text-Wrap Balance */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
            {HERO_DATA.title}
          </h1>

          {/* Scraped Subheadline */}
          <p className="text-base sm:text-xl text-neutral-200 font-normal leading-relaxed max-w-lg">
            {HERO_DATA.subtitle}
          </p>

          {/* Pricing Highlight Pill */}
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              $34
            </span>
            <span className="text-base sm:text-lg text-neutral-400 line-through tabular-nums">
              $60
            </span>
            <span className="bg-amber-400 text-neutral-950 text-xs font-black uppercase px-2.5 py-0.5 rounded tracking-wide">
              Save 43%
            </span>
            <span className="text-xs text-neutral-300 font-medium hidden sm:inline">
              · In Stock & Ready to Ship
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onShopClick}
              className="px-8 py-4 bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{HERO_DATA.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWarmth}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-full backdrop-blur-md border border-white/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Explore Warmth Levels</span>
            </button>
          </div>

          {/* Key Value Propositions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 text-xs text-neutral-200">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Rip & Snag Proof</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Zero-Shine Skin Tone</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Cozy Fleece Lined</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>No Roll-Down Waist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
