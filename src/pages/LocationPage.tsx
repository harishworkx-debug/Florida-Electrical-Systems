import { Link, useLocation, Navigate } from 'react-router-dom';
import { Phone, MapPin, Star, ShieldCheck, Clock, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import LocationGrid from '@/components/LocationGrid';
import { SITE, SERVICES, LOCATIONS } from '@/data/site';

export default function LocationPage() {
  const { pathname } = useLocation();
  const pathSlug = pathname.split('/')[1]?.replace('electrician-', '') || '';
  const location = LOCATIONS.find((l) => l.slug === pathSlug);

  if (!location) return <Navigate to="/" replace />;

  const mainLoc = SITE.city.toLowerCase().replace(' ', '-');
  const isMain = location.isMain;

  const locFaqs = [
    { q: `Do you serve ${location.name}, ${location.county}?`, a: `Yes! Florida Electrical Systems proudly serves ${location.name} and all of ${location.county}. Our licensed electricians are available for residential, commercial, and emergency electrical services throughout the area. Call ${SITE.phone} to schedule.` },
    { q: `How fast can you get to ${location.name}?`, a: `For emergency calls in ${location.name}, we respond as quickly as possible. For standard service calls, we often offer same-day or next-day appointments. Call ${SITE.phone} for current availability.` },
    { q: `What electrical services do you offer in ${location.name}?`, a: `We offer the full range of electrical services in ${location.name}, including residential wiring, commercial electrical work, panel upgrades, EV charger installation, lighting, repairs, inspections, and 24/7 emergency service.` },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: `${SITE.name} - ${location.name}`,
    description: `Electrician in ${location.name}, ${location.county} providing residential, commercial, and emergency electrical services.`,
    telephone: SITE.phone,
    url: `https://${SITE.domain}/electrician-${location.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: SITE.state,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: locFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}` },
      { '@type': 'ListItem', position: 2, name: `Electrician ${location.name}`, item: `https://${SITE.domain}/electrician-${location.slug}` },
    ],
  };

  const heroImg = isMain
    ? 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    : 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <>
      <SEO
        title={`Electrician ${location.name} FL | ${SITE.name} | ${SITE.phone}`}
        description={`Licensed electrician in ${location.name}, ${location.county}. Residential, commercial, emergency electrical services, panel upgrades, EV chargers, lighting & more. Call ${SITE.phoneRaw}.`}
        canonical={`/electrician-${location.slug}`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt={`Electrician in ${location.name}, FL`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="hover:text-amber-400">Service Areas</Link>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Electrician in <span className="text-amber-400">{location.name}, FL</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              Licensed electrical contractor serving {location.name} and {location.county}. Residential, commercial, and emergency electrical services with upfront pricing and fast response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" fill="currentColor" />
                Call {SITE.phone}
              </a>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                  {SITE.rating}.0
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Licensed
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-amber-400" /> 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            Trusted Electrician Serving {location.name}, {location.county}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            Florida Electrical Systems is your local, licensed electrical contractor serving {location.name} and the surrounding {location.county} area. Whether you need a panel upgrade, a wiring repair, an EV charger installed, or emergency electrical service, our experienced electricians are ready to help.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            {location.name} residents and businesses trust us for honest pricing, quality workmanship, and dependable service. We handle everything from small outlet repairs to full commercial electrical installations, all backed by our workmanship guarantee.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully credentialed electricians' },
              { icon: Clock, title: '24/7 Emergency', desc: 'Available day and night' },
              { icon: Zap, title: 'Free Estimates', desc: 'Upfront pricing, no surprises' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{f.title}</div>
                  <div className="text-gray-500 text-xs">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Electrical Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={isMain ? `/${s.slug}-${mainLoc}` : `/electrician-${location.slug}`}
                className="flex items-center justify-between bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-slate-900 text-sm">{s.title}</span>
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </Link>
            ))}
          </div>
          {!isMain && (
            <p className="text-center text-gray-500 text-sm mt-6">
              Service pages for {location.name} are coming soon. For full service details, see our{' '}
              <Link to={`/electrician-${mainLoc}`} className="text-amber-600 font-semibold">Lakeland service pages</Link>.
            </p>
          )}
        </div>
      </section>

      <CTASection
        title={`Need an Electrician in ${location.name}?`}
        subtitle={`Call now for fast, reliable electrical service in ${location.name}, ${location.county}.`}
      />

      {/* Other Locations */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Also Serving Nearby Areas
            </h2>
            <p className="text-gray-600 mt-3">We serve communities across {location.county} and beyond</p>
          </div>
          <LocationGrid excludeSlug={location.slug} />
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Electrician {location.name} FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {locFaqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
