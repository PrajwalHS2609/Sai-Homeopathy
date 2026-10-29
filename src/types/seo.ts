export type SeoCategory = 'core' | 'clinical' | 'blog' | 'custom';

export type SeoSchemaType =
  | 'MedicalClinic'
  | 'MedicalWebPage'
  | 'Physician'
  | 'Article'
  | 'BlogPosting'
  | 'AboutPage'
  | 'ContactPage'
  | 'FAQPage'
  | 'CollectionPage'
  | 'LocalBusiness';

export interface PageSeoMetadata {
  id: string; // e.g. 'home', 'womens-health-care', 'blog-severe-period-pain'
  pageName: string; // Human-friendly label
  category: SeoCategory;
  path: string; // Relative URL e.g. '/', '/homeopathic-treatment-for-womens-health-gynecological-care/'
  title: string; // Document title and og:title (30-60 chars recommended)
  description: string; // Meta description and og:description (120-160 chars recommended)
  url: string; // Full canonical URL
  canonicalUrl: string; // Canonical URL tag
  ogType: 'website' | 'article' | 'profile';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  schemaType: SeoSchemaType;
  schemaJson: string; // Formatted valid JSON-LD string
  isCustom?: boolean;
  lastUpdated?: string;
}

export interface SeoAuditReport {
  id: string;
  titleStatus: 'good' | 'warning' | 'error';
  titleLength: number;
  titleMessage: string;
  descStatus: 'good' | 'warning' | 'error';
  descLength: number;
  descMessage: string;
  canonicalStatus: 'good' | 'warning';
  canonicalMessage: string;
  schemaStatus: 'valid' | 'invalid';
  schemaMessage: string;
}
