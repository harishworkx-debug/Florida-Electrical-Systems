import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE, LOCATIONS, SERVICES, MAIN_LOCATION } from '../src/data/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.' + SITE.domain;

const urls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/services', changefreq: 'monthly', priority: '0.9' },
  { loc: '/service-areas', changefreq: 'monthly', priority: '0.9' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
];

// Add services in main location
SERVICES.forEach(service => {
  urls.push({
    loc: `/${service.slug}-${MAIN_LOCATION}`,
    changefreq: 'monthly',
    priority: '0.8'
  });
});

// Add locations (electrician-[city] and electrical-services-[city])
LOCATIONS.forEach(location => {
  if (!location.isMain) {
    urls.push({
      loc: `/electrician-${location.slug}`,
      changefreq: 'monthly',
      priority: '0.8'
    });
    urls.push({
      loc: `/electrical-services-${location.slug}`,
      changefreq: 'monthly',
      priority: '0.8'
    });
  }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${DOMAIN}${url.loc === '/' ? '/' : url.loc + '/'}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated!');
