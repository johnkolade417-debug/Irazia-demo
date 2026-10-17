import React, { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';
import { HERO_DATA } from '../data/storeData';

interface AnnouncementBarProps {
  onCtaClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-neutral-900 text-white text-xs sm:text-sm font-medium py-2 px-4 transition-all z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left spacer for balance on desktop */}
        <div className="hidden md:flex items-center gap-2 text-neutral-400 text-xs">
          <span>🎃 Limited Stock Alert</span>
        </div>

        {/* Center message */}
        <div 
          onClick={onCtaClick}
          className="flex-1 flex items-center justify-center gap-2 cursor-pointer hover:underline text-center"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span className="truncate">{HERO_DATA.announcement}</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70 hidden sm:inline" />
        </div>

        {/* Dismiss button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-white p-1 rounded-sm transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
