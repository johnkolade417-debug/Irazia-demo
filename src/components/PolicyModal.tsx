import React from 'react';
import { X, ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  title,
  content
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 p-6 space-y-4 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-neutral-800" />
            <h3 className="text-base font-bold text-neutral-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-black rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-3">
          <p>{content}</p>
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1.5 text-xs text-neutral-700">
            <div className="font-semibold text-neutral-900">Need immediate help?</div>
            <div>Reach our 24/7 dedicated support team at <span className="font-semibold text-neutral-900">support@irazia.com</span> or via live chat during business hours.</div>
          </div>
        </div>

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-xs cursor-pointer transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
