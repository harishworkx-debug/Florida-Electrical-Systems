import { MapPin, Phone, Clock } from 'lucide-react';
import { SITE } from '@/data/site';

export default function MapSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Visit Our Lakeland Location
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Address</div>
                  <div className="text-gray-600">{SITE.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <a href={`tel:${SITE.phoneRaw}`} className="text-gray-600 hover:text-amber-600">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Hours</div>
                  <div className="text-gray-600">{SITE.hours}</div>
                </div>
              </div>
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[350px] lg:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps?q=5254+Parkland+Ct+Lakeland+FL+33811&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Florida Electrical Systems Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
