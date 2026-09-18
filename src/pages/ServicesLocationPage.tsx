import { Link, useParams, Navigate } from 'react-router-dom';
import { Phone, MapPin, Star, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import LocationGrid from '@/components/LocationGrid';
import { SITE, SERVICES, LOCATIONS } from '@/data/site';

export default function ServicesLocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) return <Navigate to="/" replace />;

  const mainLoc = SITE.city.toLowerCase().replace(' ', '-');
  const isMain = location.isMain;

  const locFaqs = [
    { q: `What electrical services are available in ${location.name}?`, a: `Florida Electrical Systems offers the full range of electrical services in ${location.name}, including residential wiring, commercial electrical work, panel upgrades, EV charger installation, lighting installation, outlet and switch repair, ceiling fan installation, electrical inspections, and 24/7 emergency service. Call ${SITE.phone} to schedule.` },
    { q: `Are you licensed to work in ${location.name}, ${location.county}?`, a: `Yes. We are a fully licensed and insured electrical contractor serving ${location.name} and all of ${location.county}. Every electrician on our team is trained and credentialed.` },
    { q: `Do you offer emergency electrical service in ${location.name}?`, a: `Yes, we provide 24/7 emergency electrical service throughout ${location.name} and ${location.county}. Call ${SITE.phone} anytime for emergency assistance.` },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: `${SITE.name} - Electrical Services ${location.name}`,
    description: `Electrical services in ${location.name}, ${location.county}. Residential, commercial, and emergency electrical work.`,
    telephone: SITE.phone,
    url: `https://${SITE.domain}/electrical-services-${location.slug}`,
    areaServed: { '@type': 'City', name: location.name },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00', closes: '23:59',
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
      { '@type': 'ListItem', position: 2, name: `Electrical Services ${location.name}`, item: `https://${SITE.domain}/electrical-services-${location.slug}` },
    ],
  };

  return (
    <>
      <SEO
        title={`Electrical Services ${location.name} FL | ${SITE.name} | ${SITE.phone}`}
        description={`Electrical services in ${location.name}, ${location.county}. Residential, commercial, emergency, panel upgrades, EV chargers, lighting, repairs & inspections. Call ${SITE.phoneRaw}.`}
        canonical={`/electrical-services-${location.slug}`}
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt={`Electrical services in ${location.name}, FL`}
            className="w-full h-full object-cover"
          />
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
              Electrical Services in <span className="text-amber-400">{location.name}, FL</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              Complete electrical services for homes and businesses in {location.name} and {location.county}. From panel upgrades to emergency repairs, our licensed electricians deliver quality work you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" fill="currentColor" />
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            Complete Electrical Services in {location.name}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            Florida Electrical Systems provides a full range of electrical services to homeowners and businesses in {location.name}, {location.county}. Our licensed electricians handle everything from minor repairs to major installations, all with the same commitment to safety, quality, and customer satisfaction.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Whether you're in {location.name} for its small-town charm or its growing business community, you deserve an electrician who shows up on time, does the job right, and stands behind their work. That's exactly what we deliver on every call.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully credentialed electricians' },
              { icon: Clock, title: '24/7 Emergency', desc: 'Available day and night' },
              { icon: CheckCircle2, title: 'Workmanship Guarantee', desc: 'We stand behind our work' },
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

      {/* Services List */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Services Available in {location.name}
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
        </div>
      </section>

      <CTASection
        title={`Need Electrical Service in ${location.name}?`}
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
              Electrical Services {location.name} FAQs
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
