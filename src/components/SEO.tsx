import { useEffect } from 'react';
import { SITE } from '@/data/site';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:type', 'website');
    setProp('og:url', `https://${SITE.domain}${canonical || ''}`);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `https://${SITE.domain}${canonical || ''}`);

    let existingSchema = document.getElementById('page-schema');
    if (existingSchema) existingSchema.remove();

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('page-schema');
      if (s) s.remove();
    };
  }, [title, description, canonical, schema]);

  return null;
}
