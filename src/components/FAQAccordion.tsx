import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
