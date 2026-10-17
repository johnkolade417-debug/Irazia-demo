import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { REVIEWS } from '../data/storeData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [helpfulClicks, setHelpfulClicks] = useState<Record<string, number>>({});

  const filteredReviews = filterRating === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.rating === filterRating);

  const handleHelpful = (id: string) => {
    setHelpfulClicks(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Overall Rating Breakdown */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Real Customer Experiences</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Loved by Over 150,000+ Women
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-neutral-900 tabular-nums">4.9</span>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>
            </div>
            <span className="text-neutral-400 hidden sm:inline">·</span>
            <span className="text-sm text-neutral-600 font-semibold">
              Based on 3,428 verified customer reviews
            </span>
          </div>
        </div>

        {/* Highlight Quote Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-neutral-200 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-4xl text-neutral-300 font-serif leading-none select-none">“</div>
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-neutral-800 italic leading-relaxed">
                I was skeptical about the sheer illusion, but it looks so real that my office mates thought I was bare-legged in a 28° NYC snow flurries. Inside feels like baby cashmere. I bought 3 more pairs.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-bold text-neutral-900">Chloe M.</span>
                <span>·</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Buyer
                </span>
                <span>·</span>
                <span>Vanilla (Light) · Cozy Fleece 220g</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredReviews.map((review: Review) => {
            const helpfulCount = helpfulClicks[review.id] || 0;
            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-xs border border-neutral-200/90 flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Rating & Date */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-400">{review.date}</span>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-bold text-sm text-neutral-900 leading-snug">
                    {review.title}
                  </h4>

                  {/* Review Body */}
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                      <span>{review.author}</span>
                      {review.verified && (
                        <span className="text-emerald-700 font-semibold text-[11px] flex items-center gap-0.5">
                          <CheckCircle className="w-3 h-3" /> Verified
                        </span>
                      )}
                    </div>
                    {review.shade && (
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {review.shade} · {review.warmth}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors p-1 rounded-md text-[11px] cursor-pointer"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({12 + helpfulCount})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
