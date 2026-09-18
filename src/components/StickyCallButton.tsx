import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className="lg:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-amber-400 text-slate-900 font-bold px-6 py-4 rounded-full shadow-2xl animate-pulse-slow"
      aria-label="Call now"
    >
      <Phone className="w-5 h-5" fill="currentColor" />
      <span className="text-sm">Call Now</span>
    </a>
  );
}
