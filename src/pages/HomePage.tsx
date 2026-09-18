import { Link } from 'react-router-dom';
import {
  Phone, MapPin, Star, ShieldCheck, Clock, Zap, Home, Building2,
  BatteryCharging, Wrench, ArrowRight, CheckCircle2, Siren,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ServiceGrid from '@/components/ServiceGrid';
import Testimonials from '@/components/Testimonials';
import MapSection from '@/components/MapSection';
import FAQAccordion from '@/components/FAQAccordion';
import LocationGrid from '@/components/LocationGrid';
import { SITE, SERVICES, LOCATIONS, HOME_FAQS } from '@/data/site';

export default function HomePage() {
  const mainLoc = SITE.city.toLowerCase().replace(' ', '-');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: SITE.name,
    description: `Licensed electrician in ${SITE.city}, ${SITE.state} providing residential, commercial, and emergency electrical services throughout ${SITE.county}.`,
    telephone: SITE.phone,
    email: SITE.email,
    url: `https://${SITE.domain}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.99,
      longitude: -82.0,
    },
    areaServed: LOCATIONS.map((l) => l.name),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.metaDesc,
        },
        position: i + 1,
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title="Electrician Lakeland FL | Florida Electrical Systems | 863-308-1585"
        description="Licensed electrician in Lakeland, FL. Residential, commercial, emergency electrical services, panel upgrades, EV chargers, lighting & more. Serving all of Polk County. Call 863-308-1585."
        canonical="/"
        schema={[schema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Professional electrician working on an electrical panel in Lakeland, FL"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 animate-fade-in">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">{SITE.rating}.0 Rating · {SITE.reviewCount} Reviews</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-delay-1">
              Electrician in <span className="text-amber-400">Lakeland, FL</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mt-4 leading-relaxed animate-fade-in-delay-2">
              Licensed electrical contractor serving Lakeland and all of Polk County. Residential, commercial, and emergency electrical services with upfront pricing and 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-delay-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" fill="currentColor" />
                Call {SITE.phone}
              </a>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all border border-white/20"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" /> 24/7 Emergency
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> Free Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Cards */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Home, label: 'Residential', slug: `residential-electrician-${mainLoc}` },
              { icon: Building2, label: 'Commercial', slug: `commercial-electrician-${mainLoc}` },
              { icon: Siren, label: 'Emergency', slug: `emergency-electrician-${mainLoc}` },
              { icon: BatteryCharging, label: 'EV Chargers', slug: `ev-charger-installation-${mainLoc}` },
            ].map((item) => (
              <Link
                key={item.label}
                to={`/${item.slug}`}
                className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <item.icon className="w-8 h-8 text-amber-500" />
                <span className="font-semibold text-slate-900 text-sm text-center">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Your Trusted Electrician in Lakeland, Florida
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Florida Electrical Systems has been serving homeowners and businesses throughout Lakeland and Polk County with dependable, code-compliant electrical work. From routine repairs to complex installations, our licensed electricians bring expertise and integrity to every job.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that electrical problems are stressful. That's why we show up on time, explain your options clearly, and stand behind our work. Whether you need a panel upgrade, an EV charger, emergency repairs, or a whole-home rewiring, we're the team Lakeland trusts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully credentialed' },
                  { icon: Clock, title: '24/7 Emergency', desc: 'Always available' },
                  { icon: Zap, title: 'Upfront Pricing', desc: 'No hidden fees' },
                  { icon: Wrench, title: 'All Services', desc: 'Residential & commercial' },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
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
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Professional electrician installing wiring in a new building in Lakeland, FL"
                loading="lazy"
                className="rounded-2xl shadow-xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-400 rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-slate-900">{SITE.rating}.0</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-slate-900" fill="currentColor" />
                  ))}
                </div>
                <div className="text-slate-800 text-sm mt-1">{SITE.reviewCount} Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Electrical Services</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Complete electrical solutions for homes and businesses in Lakeland and throughout Polk County
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Areas We Serve</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Proudly serving Lakeland and communities across Polk County and Central Florida
            </p>
          </div>
          <LocationGrid />
        </div>
      </section>

      <CTASection />
      <Testimonials />
      <MapSection />

      {/* FAQ */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-3">Answers to common questions about our electrical services</p>
          </div>
          <FAQAccordion faqs={HOME_FAQS} />
          <div className="text-center mt-8">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" fill="currentColor" />
              Have Questions? Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
