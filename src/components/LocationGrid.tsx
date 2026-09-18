import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { LOCATIONS } from '@/data/site';

interface LocationGridProps {
  excludeSlug?: string;
}

export default function LocationGrid({ excludeSlug }: LocationGridProps) {
  const locations = excludeSlug
    ? LOCATIONS.filter((l) => l.slug !== excludeSlug)
    : LOCATIONS;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {locations.map((loc) => (
        <Link
          key={loc.slug}
          to={`/electrician-${loc.slug}`}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:border-amber-400 hover:text-amber-600 hover:shadow-md transition-all"
        >
          <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
          {loc.name}
        </Link>
      ))}
    </div>
  );
}
