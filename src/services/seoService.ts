import { PageSeoMetadata, SeoAuditReport, SeoSchemaType } from '../types/seo';
import { DEFAULT_SEO_PAGES } from '../data/defaultSeoData';

const STORAGE_KEY = 'anjali_clinic_seo_metadata_v3';

export const loadStoredSeoPages = (): PageSeoMetadata[] => {
  if (typeof window === 'undefined') return DEFAULT_SEO_PAGES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SEO_PAGES;
    const parsed: PageSeoMetadata[] = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_SEO_PAGES;

    // Merge default pages with any user overrides/custom pages
    const pageMap = new Map<string, PageSeoMetadata>();
    DEFAULT_SEO_PAGES.forEach((p) => pageMap.set(p.id, p));
    parsed.forEach((p) => pageMap.set(p.id, { ...(pageMap.get(p.id) || {}), ...p }));

    return Array.from(pageMap.values());
  } catch (err) {
    console.error('Failed to load SEO pages from storage:', err);
    return DEFAULT_SEO_PAGES;
  }
};

export const saveStoredSeoPages = (pages: PageSeoMetadata[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  } catch (err) {
    console.error('Failed to save SEO pages to storage:', err);
  }
};

export const auditSeoPage = (page: PageSeoMetadata): SeoAuditReport => {
  const titleLength = page.title.trim().length;
  let titleStatus: 'good' | 'warning' | 'error' = 'good';
  let titleMessage = 'Title length is well-optimized for search engines (30–60 chars).';
  if (titleLength === 0) {
    titleStatus = 'error';
    titleMessage = 'Title is empty. Search engines need a descriptive title.';
  } else if (titleLength < 30) {
    titleStatus = 'warning';
    titleMessage = `Title is short (${titleLength} chars). Consider expanding to 30–60 characters.`;
  } else if (titleLength > 85) {
    titleStatus = 'warning';
    titleMessage = `Title is long (${titleLength} chars) and may be truncated in search snippets (>85 chars).`;
  }

  const descLength = page.description.trim().length;
  let descStatus: 'good' | 'warning' | 'error' = 'good';
  let descMessage = 'Meta description length is well-optimized (120–175 chars).';
  if (descLength === 0) {
    descStatus = 'error';
    descMessage = 'Meta description is empty. Add a compelling 120–160 char summary.';
  } else if (descLength < 90) {
    descStatus = 'warning';
    descMessage = `Description is short (${descLength} chars). Optimal length is 120–175 characters.`;
  } else if (descLength > 185) {
    descStatus = 'warning';
    descMessage = `Description is long (${descLength} chars) and may be clipped by Google SERP (>185 chars).`;
  }

  let canonicalStatus: 'good' | 'warning' = 'good';
  let canonicalMessage = 'Canonical URL is set properly.';
  if (!page.canonicalUrl || !page.canonicalUrl.startsWith('http')) {
    canonicalStatus = 'warning';
    canonicalMessage = 'Canonical URL should be an absolute URL starting with https://';
  }

  let schemaStatus: 'valid' | 'invalid' = 'valid';
  let schemaMessage = 'Schema.org JSON-LD is valid JSON format.';
  if (!page.schemaJson || !page.schemaJson.trim()) {
    schemaStatus = 'invalid';
    schemaMessage = 'Schema JSON-LD is empty.';
  } else {
    try {
      JSON.parse(page.schemaJson);
    } catch (e) {
      schemaStatus = 'invalid';
      schemaMessage = `Invalid JSON syntax: ${(e as Error).message}`;
    }
  }

  return {
    id: page.id,
    titleStatus,
    titleLength,
    titleMessage,
    descStatus,
    descLength,
    descMessage,
    canonicalStatus,
    canonicalMessage,
    schemaStatus,
    schemaMessage,
  };
};

export const generateDefaultSchema = (
  type: SeoSchemaType,
  pageName: string,
  title: string,
  description: string,
  url: string
): string => {
  const baseClinic = {
    '@type': 'MedicalClinic',
    name: 'Anjali Homoeo Clinic',
    url: 'https://anjalihomoeoclinic.com/',
    telephone: '098951 01707',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tirur - Kuttippuram Rd, Kavumopuram',
      addressLocality: 'Kuttippuram',
      addressRegion: 'Keralam',
      postalCode: '679571',
      addressCountry: 'IN',
    },
  };

  switch (type) {
    case 'MedicalClinic':
    case 'LocalBusiness':
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': ['MedicalClinic', 'LocalBusiness'],
          name: 'Anjali Homoeo Clinic',
          description,
          url,
          telephone: '098951 01707',
          priceRange: '₹₹',
          medicalSpecialty: 'Homeopathy',
          address: baseClinic.address,
        },
        null,
        2
      );

    case 'MedicalWebPage':
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: pageName,
          headline: title,
          description,
          url,
          mainEntity: baseClinic,
        },
        null,
        2
      );

    case 'BlogPosting':
    case 'Article':
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': type,
          headline: title,
          description,
          url,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
          author: {
            '@type': 'Person',
            name: 'Dr. Anjali Chandrasekhar',
            jobTitle: 'Lead Homeopathic Physician',
          },
          publisher: baseClinic,
          datePublished: new Date().toISOString().split('T')[0],
        },
        null,
        2
      );

    case 'FAQPage':
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do I book an online appointment?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Select your preferred time slot online and consult via secure video call.',
              },
            },
          ],
        },
        null,
        2
      );

    case 'AboutPage':
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: pageName,
          description,
          url,
          mainEntity: {
            '@type': 'Physician',
            name: 'Dr. Anjali Chandrasekhar',
            medicalSpecialty: 'Homeopathy',
            worksFor: baseClinic,
          },
        },
        null,
        2
      );

    case 'ContactPage':
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: pageName,
          description,
          url,
          mainEntity: baseClinic,
        },
        null,
        2
      );

    case 'CollectionPage':
    default:
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: pageName,
          headline: title,
          description,
          url,
        },
        null,
        2
      );
  }
};
