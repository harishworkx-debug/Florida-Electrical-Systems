import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, SITE } from '@/data/site';

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
            ))}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Trusted by {SITE.reviewCount}+ Customers in Polk County
          </h2>
          <p className="text-gray-400 mt-2">Real reviews from real homeowners and businesses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <Quote className="w-8 h-8 text-amber-400 mb-3" />
              <p className="text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-gray-500"> · {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
