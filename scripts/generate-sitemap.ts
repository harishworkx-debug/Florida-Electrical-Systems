import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { SITE, LOCATIONS, SERVICES, MAIN_LOCATION } from '../src/data/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = SITE.domain.startsWith('www.')
  ? `https://${SITE.domain}`
  : `https://www.${SITE.domain}`;

// Helper to determine the authentic last significant update date from git history
function getLastModDate(relativeFilePath: string, fallbackDate: string): string {
  try {
    const fullPath = path.join(rootDir, relativeFilePath);
    const gitDate = execSync(`git log -1 --format=%cs -- "${fullPath}"`, {
      encoding: 'utf-8',
      cwd: rootDir,
    }).trim();
    return gitDate || fallbackDate;
  } catch {
    return fallbackDate;
  }
}

// Actual last modified dates based on git commit history of page content
const homeDate = getLastModDate('src/pages/HomePage.tsx', '2026-09-24');
const servicesDate = getLastModDate('src/pages/ServicesPage.tsx', '2026-09-24');
const serviceAreasDate = getLastModDate('src/pages/ServiceAreasPage.tsx', '2026-09-24');
const aboutDate = getLastModDate('src/pages/AboutPage.tsx', '2026-09-18');
const contactDate = getLastModDate('src/pages/ContactPage.tsx', '2026-09-18');
const serviceDetailDate = getLastModDate('src/pages/ServicePage.tsx', '2026-10-01');
const locationDetailDate = getLastModDate('src/pages/LocationPage.tsx', '2026-10-01');

const urls: { loc: string; lastmod: string }[] = [
  { loc: '/', lastmod: homeDate },
  { loc: '/services', lastmod: servicesDate },
  { loc: '/service-areas', lastmod: serviceAreasDate },
  { loc: '/about', lastmod: aboutDate },
  { loc: '/contact', lastmod: contactDate },
];

// Add service detail landing pages (Lakeland)
SERVICES.forEach(service => {
  urls.push({
    loc: `/${service.slug}-${MAIN_LOCATION}`,
    lastmod: serviceDetailDate,
  });
});

// Add all location landing pages (electrician-[city])
LOCATIONS.forEach(location => {
  urls.push({
    loc: `/electrician-${location.slug}`,
    lastmod: locationDetailDate,
  });
});

// Build standard-compliant sitemap containing only canonical, indexable URLs with authentic lastmod
// Google ignores priority and changefreq, so we keep the sitemap streamlined and focused.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${DOMAIN}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap.trim() + '\n');
console.log(`Sitemap generated successfully with ${urls.length} canonical URLs and authentic lastmod dates!`);
