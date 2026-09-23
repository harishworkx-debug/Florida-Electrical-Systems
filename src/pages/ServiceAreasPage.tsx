import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import LocationGrid from '@/components/LocationGrid';
import { SITE, LOCATIONS } from '@/data/site';

export default function ServiceAreasPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: SITE.name,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
    },
    areaServed: LOCATIONS.map((l) => ({ '@type': 'City', name: l.name })),
  };

  return (
    <>
      <SEO
        title="Service Areas | Florida Electrical Systems | Lakeland & Polk County"
        description="Florida Electrical Systems serves Lakeland, Bartow, Winter Haven, Auburndale, Mulberry, Plant City, Haines City, Davenport, Lake Wales & more across Polk County, FL. Call (863) 695-9819."
        canonical="/service-areas"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[350px] lg:min-h-[450px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Service areas across Polk County, Florida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Service Areas</span>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Our <span className="text-amber-400">Service Areas</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              Proudly serving Lakeland and communities across Polk County and Central Florida. Click your city below to find an electrician near you.
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg mt-6"
            >
              <Phone className="w-5 h-5" fill="currentColor" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Cities We Serve</h2>
            <p className="text-gray-600 mt-3">Click your city for local electrician information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  <h3 className="text-lg font-bold text-slate-900">{loc.name}</h3>
                  {loc.isMain && (
                    <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-1 rounded-full">Main</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">{loc.county}</p>
                <div className="flex flex-col gap-2">
                  <Link
                    to={`/electrician-${loc.slug}`}
                    className="flex items-center justify-between text-sm font-semibold text-amber-600 hover:gap-3 transition-all"
                  >
                    Electrician {loc.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/electrical-services-${loc.slug}`}
                    className="flex items-center justify-between text-sm font-semibold text-amber-600 hover:gap-3 transition-all"
                  >
                    Electrical Services {loc.name} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
