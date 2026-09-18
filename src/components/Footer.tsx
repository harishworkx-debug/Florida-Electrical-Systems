import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Zap, Facebook, Star } from 'lucide-react';
import { SITE, LOCATIONS, SERVICES } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" fill="currentColor" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-base">Florida Electrical</div>
                <div className="text-amber-400 text-sm font-medium">Systems</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Licensed electrical contractor serving Lakeland and all of Polk County. Residential, commercial, and industrial electrical services you can trust.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
              ))}
              <span className="text-sm text-gray-400 ml-2">{SITE.rating}.0 · {SITE.reviewCount} reviews</span>
            </div>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm">
              <Facebook className="w-5 h-5" /> Facebook
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}-${SITE.address.split(', ')[1].toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATIONS.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/electrician-${loc.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    Electrician {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {SITE.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {SITE.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">{SITE.license}</p>
        </div>
      </div>
    </footer>
  );
}
