import { PageSeoMetadata } from '../types/seo';
import { DEFAULT_SEO_PAGES } from '../data/defaultSeoData';

export interface SitemapUrlEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  image?: {
    loc: string;
    title: string;
  };
}

/**
 * Determine optimal crawl frequency based on page type
 */
function getChangeFrequency(page: PageSeoMetadata): SitemapUrlEntry['changefreq'] {
  if (page.id === 'home' || page.id === 'book-appointment' || page.id === 'blog') {
    return 'daily';
  }
  if (page.category === 'clinical' || page.category === 'blog') {
    return 'weekly';
  }
  if (page.id === 'products' || page.id === 'reviews' || page.id === 'treatments' || page.id === 'consultations') {
    return 'weekly';
  }
  return 'monthly';
}

/**
 * Determine index priority for Google Search Console (1.0 highest, 0.1 lowest)
 */
function getPriority(page: PageSeoMetadata): string {
  if (page.id === 'home') {
    return '1.0';
  }
  if (page.category === 'clinical' || page.id === 'book-appointment' || page.id === 'blog') {
    return '0.9';
  }
  if (page.category === 'blog') {
    return '0.8';
  }
  if (page.id === 'treatments' || page.id === 'consultations' || page.id === 'products' || page.id === 'contact' || page.id === 'reviews') {
    return '0.8';
  }
  return '0.7';
}

/**
 * Normalizes canonical URL ensuring standard trailing slash (except domain root)
 */
export function normalizeCanonicalUrl(url: string): string {
  const clean = url.trim();
  if (clean.endsWith('/')) return clean;
  // If no extension like .png / .svg, ensure trailing slash
  if (!clean.includes('.') || clean.endsWith('.com') || clean.endsWith('.org')) {
    return `${clean}/`;
  }
  return clean;
}

/**
 * Resolves full absolute image URL for sitemap-image namespace
 */
function resolveImageUrl(imagePath?: string): string | undefined {
  if (!imagePath) return undefined;
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `https://anjalihomoeoclinic.com${cleanPath}`;
}

/**
 * Builds array of structured sitemap entries from PageSeoMetadata list
 */
export function buildSitemapEntries(pages: PageSeoMetadata[] = DEFAULT_SEO_PAGES): SitemapUrlEntry[] {
  const today = new Date().toISOString().split('T')[0];

  return pages.map((page) => {
    const loc = normalizeCanonicalUrl(page.canonicalUrl || page.url || `https://anjalihomoeoclinic.com${page.path}`);
    const lastmod = page.lastUpdated || today;
    const changefreq = getChangeFrequency(page);
    const priority = getPriority(page);

    const imageUrl = resolveImageUrl(page.ogImage);
    const image = imageUrl
      ? {
          loc: imageUrl,
          title: page.title.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`),
        }
      : undefined;

    return {
      loc,
      lastmod,
      changefreq,
      priority,
      image,
    };
  });
}

/**
 * Generates valid Google-compliant XML sitemap string
 */
export function generateSitemapXml(pages: PageSeoMetadata[] = DEFAULT_SEO_PAGES): string {
  const entries = buildSitemapEntries(pages);

  const xmlLines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
    '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
    '        http://www.google.com/schemas/sitemap-image/1.1',
    '        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">',
  ];

  for (const entry of entries) {
    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${entry.loc}</loc>`);
    xmlLines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    xmlLines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${entry.priority}</priority>`);

    if (entry.image) {
      xmlLines.push('    <image:image>');
      xmlLines.push(`      <image:loc>${entry.image.loc}</image:loc>`);
      xmlLines.push(`      <image:title>${entry.image.title}</image:title>`);
      xmlLines.push('    </image:image>');
    }

    xmlLines.push('  </url>');
  }

  xmlLines.push('</urlset>');
  return xmlLines.join('\n');
}

/**
 * Triggers a browser download of sitemap.xml
 */
export function downloadSitemapFile(pages: PageSeoMetadata[] = DEFAULT_SEO_PAGES, filename = 'sitemap.xml'): void {
  const xmlContent = generateSitemapXml(pages);
  const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
