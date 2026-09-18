import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import { SITE } from '@/data/site';

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE.name}`,
    description: `Contact Florida Electrical Systems for electrical service in ${SITE.city} and ${SITE.county}.`,
  };

  return (
    <>
      <SEO
        title={`Contact Us | ${SITE.name} | Lakeland Electrician`}
        description={`Contact Florida Electrical Systems for electrical service in Lakeland, FL. Call ${SITE.phoneRaw}, visit our Lakeland location, or request service online. 24/7 emergency service available.`}
        canonical="/contact"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[300px] lg:min-h-[400px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Contact Florida Electrical Systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Contact</span>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Contact <span className="text-amber-400">Us</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              Need an electrician in Lakeland or Polk County? Call us now or visit our location. We're available 24/7 for emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href={`tel:${SITE.phoneRaw}`} className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-200">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">{SITE.phone}</p>
            </a>
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">{SITE.address}</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">{SITE.email}</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Hours</h3>
              <p className="text-gray-600 text-sm">{SITE.hours}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-slate-900" fill="currentColor" />
              ))}
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Ready to Schedule Service?
            </h2>
            <p className="text-slate-800 text-lg mb-6 max-w-2xl mx-auto">
              Call us now for fast, reliable electrical service in Lakeland and Polk County. Free estimates, licensed electricians, 24/7 emergency support.
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" fill="currentColor" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <MapSection />
      <CTASection />
    </>
  );
}
