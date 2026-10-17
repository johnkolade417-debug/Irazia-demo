import React, { useState } from 'react';
import { Gift, X, Sparkles, Check, ArrowRight } from 'lucide-react';

interface MysteryCreditWidgetProps {
  onApplyCode: (code: string) => void;
}

export const MysteryCreditWidget: React.FC<MysteryCreditWidgetProps> = ({ onApplyCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const promoCode = 'VIRAL20';

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleApply = () => {
    onApplyCode(promoCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  return (
    <>
      {/* Collapsed Pill - Bottom Right, floating neatly above mobile bars */}
      {!isOpen && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 flex items-center gap-1">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-900 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-neutral-700/60 cursor-pointer group"
            aria-label="Unlock mystery credit"
          >
            <div className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shrink-0">
              <Gift className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-xs font-bold tracking-tight">
              Unlock Mystery Credit
            </span>
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-neutral-400 hover:text-neutral-600 bg-white/80 backdrop-blur-xs rounded-full shadow-sm border border-neutral-200"
            aria-label="Dismiss mystery credit widget"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Expanded Modal / Card */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 flex items-center sm:items-end justify-center p-4 sm:p-0">
          {/* Mobile backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-neutral-950 text-white rounded-2xl shadow-2xl p-6 border border-neutral-800 animate-in zoom-in-95 sm:slide-in-from-bottom-5 duration-200 z-10">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/20">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                  Exclusive Secret Perk
                </span>
                <h3 className="text-lg font-black tracking-tight text-white mt-0.5">
                  Your Mystery Credit
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  We've unlocked a private discount voucher reserved for new fall shoppers.
                </p>
              </div>

              {!isRevealed ? (
                <div className="pt-2">
                  <button
                    onClick={handleReveal}
                    className="w-full py-3 bg-linear-to-r from-amber-400 to-amber-500 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Tap to Scratch & Reveal</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-neutral-900 rounded-xl border border-dashed border-amber-500/50">
                    <div className="text-xs text-neutral-400 font-medium">Extra Discount Unlocked:</div>
                    <div className="text-2xl font-black text-amber-400 tracking-wider font-mono">
                      20% OFF
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
                      CODE: {promoCode}
                    </div>
                  </div>

                  <button
                    onClick={handleApply}
                    className="w-full py-3 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Code Applied to Bag!</span>
                      </>
                    ) : (
                      <>
                        <span>Apply & Shop Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

              <p className="text-[10px] text-neutral-500 pt-1">
                Valid on all Sheer Illusion tights & autumn essentials today only.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
