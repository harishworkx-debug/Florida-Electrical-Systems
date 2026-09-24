import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ServiceGrid from '@/components/ServiceGrid';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE, SERVICES, HOME_FAQS } from '@/data/site';

export default function ServicesPage() {
  const mainLoc = SITE.city.toLowerCase().replace(' ', '-');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Electrical Services',
    provider: {
      '@type': 'Electrician',
      name: SITE.name,
      telephone: SITE.phone,
    },
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.metaDesc },
      position: i + 1,
    })),
  };

  return (
    <>
      <SEO
        title="Electrical Services Lakeland FL | Florida Electrical Systems"
        description="Complete electrical services in Lakeland, FL. Residential, commercial, emergency, panel upgrades, EV chargers, lighting, repairs, inspections & more. Call (863) 281-0077."
        canonical="/services"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[350px] lg:min-h-[450px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Electrical services in Lakeland, FL"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Services</span>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Electrical Services in <span className="text-amber-400">Lakeland, FL</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              From panel upgrades to emergency repairs, Florida Electrical Systems offers a complete range of electrical services for homes and businesses throughout Polk County.
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

      {/* Services Grid */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">All Electrical Services</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Click any service below to learn more about what we offer in Lakeland and Polk County
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <CTASection />

      {/* FAQ */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={HOME_FAQS} />
        </div>
      </section>
    </>
  );
}
