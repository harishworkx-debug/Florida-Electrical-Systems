import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES, SITE } from '@/data/site';

export default function ServiceGrid() {
  const mainLoc = SITE.city.toLowerCase().replace(' ', '-');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service) => {
        return (
          <Link
            key={service.slug}
            to={`/${service.slug}-${mainLoc}`}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={service.heroImage}
                alt={service.heroAlt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {service.intro[0].slice(0, 120)}...
              </p>
              <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
