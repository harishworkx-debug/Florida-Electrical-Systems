import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Clock, Zap, Award, Users, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import { SITE } from '@/data/site';

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${SITE.name}`,
    description: `Learn about ${SITE.name}, a licensed electrical contractor serving ${SITE.city} and ${SITE.county}.`,
  };

  return (
    <>
      <SEO
        title={`About Us | ${SITE.name} | Lakeland Electrician`}
        description="Florida Electrical Systems is a licensed electrical contractor serving Lakeland and Polk County. Learn about our company, our values, and our commitment to quality electrical service."
        canonical="/about"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[350px] lg:min-h-[450px] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Florida Electrical Systems team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <span className="text-gray-300">About</span>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              About <span className="text-amber-400">Florida Electrical Systems</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 leading-relaxed">
              A licensed electrical contractor serving Lakeland and all of Polk County with dependable, code-compliant electrical work.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            Florida Electrical Systems was founded with a simple mission: provide the residents and businesses of Lakeland and Polk County with honest, reliable, and professional electrical service. We saw too many homeowners frustrated by electricians who didn't show up on time, didn't explain their options, and didn't stand behind their work.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            We set out to be different. From the first phone call to the final inspection, we treat every project, large or small, with the same attention to detail. Our electricians are licensed, insured, and continuously trained on the latest code requirements and technologies, from EV chargers to smart home systems.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Today, we're proud to serve Lakeland and communities across Polk County, from Bartow to Winter Haven, Auburndale to Plant City. Whether it's a midnight emergency call or a planned panel upgrade, our customers know they can count on us.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            {[
              { icon: Award, value: SITE.rating + '.0', label: 'Google Rating' },
              { icon: Users, value: SITE.reviewCount + '+', label: 'Happy Customers' },
              { icon: Clock, value: '24/7', label: 'Emergency Service' },
              { icon: Zap, value: '10+', label: 'Electrical Services' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-7 h-7 text-amber-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Our Values</h2>
          <div className="space-y-6">
            {[
              { icon: ShieldCheck, title: 'Safety First', desc: 'Every project, every time. We never cut corners on safety. Our work meets or exceeds the National Electrical Code and local requirements.' },
              { icon: Zap, title: 'Honest Pricing', desc: 'You\'ll know the cost before we start. No hidden fees, no surprise charges, no pressure to buy more than you need.' },
              { icon: Clock, title: 'Respect for Your Time', desc: 'We show up when we say we will. If we\'re running late, we call. Your time matters to us.' },
              { icon: Award, title: 'Quality Workmanship', desc: 'We do it right the first time. Every installation, repair, and upgrade is backed by our workmanship guarantee.' },
            ].map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Testimonials />
    </>
  );
}
