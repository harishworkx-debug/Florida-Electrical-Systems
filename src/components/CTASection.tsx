import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { SITE } from '@/data/site';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-amber-400 to-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              {title || 'Need an Electrician in Lakeland Today?'}
            </h2>
            <p className="text-slate-800 mt-2 text-base lg:text-lg">
              {subtitle || 'Call now for fast, reliable electrical service. Free estimates, licensed electricians, and 24/7 emergency support.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
            >
              <Phone className="w-5 h-5" fill="currentColor" />
              {SITE.phone}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 mt-8 text-slate-800 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> 24/7 Emergency Service
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> Free Estimates
          </div>
        </div>
      </div>
    </section>
  );
}
