import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-neutral-800">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Free US Expedited Shipping</h4>
              <p className="text-xs text-neutral-400 mt-0.5">On orders over $50. Dispatches within 24-48 hours with live tracking.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">30-Day Perfect Fit Guarantee</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Need a different shade or size? Easy, zero-stress exchanges.</p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Snag & Tear Resistant</h4>
              <p className="text-xs text-neutral-400 mt-0.5">High-tensile nylon weave engineered against acrylic nails and rough boot zippers.</p>
            </div>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-2xl font-black tracking-widest uppercase block">
              IRAZIA
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              The viral sheer illusion fleece tights and cold-weather fashion essentials. Designed to keep you warm, sleek, and snatched down to 20°F without sacrificing your outfit.
            </p>
            <div className="text-xs text-neutral-500 pt-1">
              <span>support@irazia.com · Available Mon–Fri 9am–5pm EST</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Shop Collections
            </h5>
            <ul className="text-xs space-y-2 text-neutral-400">
              <li><a href="#featured-tights" className="hover:text-white transition-colors">Sheer Illusion Tights</a></li>
              <li><a href="#warmth-selector" className="hover:text-white transition-colors">Warmth Level Guide</a></li>
              <li><a href="#featured-tights" className="hover:text-white transition-colors">Faux Leather Shorts</a></li>
              <li><a href="#featured-tights" className="hover:text-white transition-colors">Mini Corduroy Skirts</a></li>
              <li><a href="#featured-tights" className="hover:text-white transition-colors">Thermal Jumpsuits</a></li>
              <li><a href="#featured-tights" className="hover:text-white transition-colors">Wool & Fleece Socks</a></li>
            </ul>
          </div>

          {/* Customer Care / Policy Links */}
          <div className="md:col-span-2 space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Customer Policies
            </h5>
            <ul className="text-xs space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onOpenPolicy('Shipping Policy', 'Standard shipping takes 3-5 business days. Express shipping is free on orders over $50. All orders include end-to-end tracking updates via email and SMS.')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Refund & Exchange Policy', 'We offer a 30-Day Snug & Snatched Exchange Guarantee. If the shade or sizing isn\'t an exact match, contact support@irazia.com for an immediate exchange.')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Terms of Service', 'By accessing IRAZIA, you agree to our standard commerce terms and secure payment compliance standards.')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Privacy Policy', 'Your personal and payment data is secured with industry-leading 256-bit encryption. We never sell your personal information.')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Track Your Order', 'Enter your 6-digit order number and email to view real-time courier updates.')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Track Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Become An Affiliate', 'Join the IRAZIA Creator Circle! Earn generous 15% commissions and receive free seasonal drops.')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Become An Affiliate
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Join the VIP Club
            </h5>
            <p className="text-xs text-neutral-400">
              Subscribe for exclusive restock alerts, secret VIP sales, and an extra $10 off your first order.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-lg text-xs font-semibold">
                <Check className="w-4 h-4 shrink-0" />
                <span>You're in! Check your email for code WELCOME10.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-neutral-950 font-bold text-xs rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <div className="pt-2 text-[10px] text-neutral-500">
              Accepted: Visa · Mastercard · Amex · Discover · Shop Pay · Apple Pay
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} IRAZIA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Secure Checkout</span>
            <span>·</span>
            <span>Made for Cold Weather</span>
            <span>·</span>
            <span>Designed in New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
