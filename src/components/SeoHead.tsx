import React, { useEffect } from 'react';
import { PageSeoMetadata } from '../types/seo';

interface SeoHeadProps {
  seo: PageSeoMetadata;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ seo }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Page Title
    if (seo.title) {
      document.title = seo.title;
    }

    // Helper to get or create meta tag
    const setMeta = (nameAttr: string, nameValue: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, nameValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Meta Description
    if (seo.description) {
      setMeta('name', 'description', seo.description);
    }

    // 3. Keywords & Robots
    if (seo.keywords) {
      setMeta('name', 'keywords', seo.keywords);
    }
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Canonical Tag
    const rawCanonical = seo.canonicalUrl || seo.url;
    const canonicalUrl = rawCanonical.startsWith('http')
      ? rawCanonical
      : `https://anjalihomoeoclinic.com${rawCanonical.startsWith('/') ? rawCanonical : `/${rawCanonical}`}`;
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // 5. OpenGraph Tags
    const shareImage = seo.ogImage || 'https://anjalihomoeoclinic.com/anjali-logo.svg';
    if (seo.title) setMeta('property', 'og:title', seo.title);
    if (seo.description) setMeta('property', 'og:description', seo.description);
    if (seo.url) setMeta('property', 'og:url', seo.url);
    setMeta('property', 'og:type', seo.ogType || 'website');
    setMeta('property', 'og:site_name', 'Anjali Homoeo Clinic');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:image', shareImage);

    // 6. Twitter Card Tags
    setMeta('name', 'twitter:card', seo.twitterCard || 'summary_large_image');
    if (seo.title) setMeta('name', 'twitter:title', seo.title);
    if (seo.description) setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', shareImage);

    // 7. Dynamic Schema.org JSON-LD injection
    const scriptId = 'dynamic-seo-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (seo.schemaJson && seo.schemaJson.trim()) {
      try {
        // Validate JSON
        JSON.parse(seo.schemaJson);
        if (!scriptTag) {
          scriptTag = document.createElement('script');
          scriptTag.id = scriptId;
          scriptTag.type = 'application/ld+json';
          document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = seo.schemaJson;
      } catch (e) {
        console.warn('Invalid JSON-LD schema on page:', seo.id, e);
      }
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [seo]);

  return null;
};
