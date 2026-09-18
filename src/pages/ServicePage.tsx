import { Link, useLocation, Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import Testimonials from '@/components/Testimonials';
import LocationGrid from '@/components/LocationGrid';
import { SITE, SERVICES, LOCATIONS } from '@/data/site';

export default function ServicePage() {
  const { pathname } = useLocation();
  const pathSlug = pathname.replace('/', '');
  const service = SERVICES.find((s) => pathSlug.startsWith(s.slug));

  if (!service) return <Navigate to="/" replace />;

  const mainLoc = SITE.city.toLowerCase().replace(' ', '-');
  const locationName = SITE.city;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
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
    },
    areaServed: {
      '@type': 'City',
      name: locationName,
    },
    description: service.metaDesc,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: service.title, item: `https://${SITE.domain}/${service.slug}-${mainLoc}` },
    ],
  };

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
        canonical={`/${service.slug}-${mainLoc}`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-amber-400">Services</Link>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              {service.h1}
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              {service.intro[0].slice(0, 160)}...
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
          {service.intro.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">{p}</p>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Choose Our {service.title} Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for Professional ${service.title} in ${locationName}?`}
        subtitle="Call now for a free estimate. Our licensed electricians are standing by."
      />

      {/* Other Services */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Other Electrical Services in {locationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${mainLoc}`}
                className="flex items-center justify-between bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-slate-900 text-sm">{s.title}</span>
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              {service.title} Across Polk County
            </h2>
            <p className="text-gray-600 mt-3">We provide {service.title.toLowerCase()} throughout Central Florida</p>
          </div>
          <LocationGrid excludeSlug={mainLoc} />
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              {service.title} FAQs
            </h2>
            <p className="text-gray-600 mt-3">Common questions about our {service.title.toLowerCase()} service</p>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>
    </>
  );
}
