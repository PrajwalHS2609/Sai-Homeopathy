import React, { useState, useEffect } from 'react';
import { PageSeoMetadata, SeoCategory, SeoSchemaType } from '../types/seo';
import { auditSeoPage, generateDefaultSchema } from '../services/seoService';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Code,
  Globe,
  Share2,
  Sparkles,
  Smartphone,
  Monitor,
  RotateCcw,
  Save,
} from 'lucide-react';

interface SeoPageEditModalProps {
  page: PageSeoMetadata | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (savedPage: PageSeoMetadata) => void;
  isNew?: boolean;
}

export const SeoPageEditModal: React.FC<SeoPageEditModalProps> = ({
  page,
  isOpen,
  onClose,
  onSave,
  isNew = false,
}) => {
  const [formData, setFormData] = useState<PageSeoMetadata>({
    id: '',
    pageName: '',
    category: 'custom' as SeoCategory,
    path: '',
    title: '',
    description: '',
    url: '',
    canonicalUrl: '',
    ogType: 'website',
    ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
    twitterCard: 'summary_large_image',
    keywords: '',
    schemaType: 'MedicalWebPage' as SeoSchemaType,
    schemaJson: '{}',
    isCustom: true,
  });

  const [activeTab, setActiveTab] = useState<'meta' | 'schema' | 'preview'>('meta');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [schemaError, setSchemaError] = useState<string | null>(null);

  useEffect(() => {
    if (page) {
      setFormData({ ...page });
      setSchemaError(null);
    } else if (isNew) {
      const newId = `custom-page-${Date.now()}`;
      setFormData({
        id: newId,
        pageName: 'New Healthcare Page',
        category: 'custom',
        path: '/new-page/',
        title: 'New Page Title | Anjali Homoeo Clinic',
        description:
          'Personalized homoeopathic care and consultation services at Anjali Homoeo Clinic in Malappuram, Kerala.',
        url: 'https://anjalihomoeoclinic.com/new-page/',
        canonicalUrl: 'https://anjalihomoeoclinic.com/new-page/',
        ogType: 'website',
        ogImage: 'https://anjalihomoeoclinic.com/anjali-logo.svg',
        twitterCard: 'summary_large_image',
        keywords: 'Homeopathy Malappuram, constitutional care, Dr Anjali Chandrasekhar',
        schemaType: 'MedicalWebPage',
        schemaJson: generateDefaultSchema(
          'MedicalWebPage',
          'New Healthcare Page',
          'New Page Title | Anjali Homoeo Clinic',
          'Personalized homoeopathic care and consultation services at Anjali Homoeo Clinic.',
          'https://anjalihomoeoclinic.com/new-page/'
        ),
        isCustom: true,
      });
      setSchemaError(null);
    }
  }, [page, isNew, isOpen]);

  if (!isOpen) return null;

  const audit = auditSeoPage(formData);

  const handleSchemaFormat = () => {
    try {
      const parsed = JSON.parse(formData.schemaJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormData((prev) => ({ ...prev, schemaJson: formatted }));
      setSchemaError(null);
    } catch (e) {
      setSchemaError((e as Error).message);
    }
  };

  const handleGenerateSchema = () => {
    const generated = generateDefaultSchema(
      formData.schemaType,
      formData.pageName || 'Healthcare Page',
      formData.title || 'Page Title',
      formData.description || 'Description',
      formData.canonicalUrl || formData.url || 'https://anjalihomoeoclinic.com/'
    );
    setFormData((prev) => ({ ...prev, schemaJson: generated }));
    setSchemaError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate schema JSON
    if (formData.schemaJson && formData.schemaJson.trim()) {
      try {
        JSON.parse(formData.schemaJson);
      } catch (err) {
        setSchemaError(`Invalid JSON-LD syntax: ${(err as Error).message}`);
        setActiveTab('schema');
        return;
      }
    }
    onSave({
      ...formData,
      lastUpdated: new Date().toISOString().split('T')[0],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-[#D8E1F5] flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-[#EEF2FB] border-b border-[#D8E1F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#303A88] text-white flex items-center justify-center shadow-sm">
              <Globe className="w-5 h-5 text-[#86D68B]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                {isNew ? 'Add SEO Metadata for New Page' : `Edit SEO: ${formData.pageName}`}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D3DBF4] text-[#1E2559]">
                  {formData.id}
                </span>
              </h2>
              <p className="text-xs text-[#5F6F65]">
                Configure Title, Description, Canonical URL, OpenGraph & Schema.org JSON-LD
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#1E2559] hover:bg-[#D8E1F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#D8E1F5] px-6 bg-white gap-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('meta')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'meta'
                ? 'border-[#303A88] text-[#303A88]'
                : 'border-transparent text-[#64748B] hover:text-[#1E2559]'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Title, Description & URLs</span>
            {audit.titleStatus !== 'good' || audit.descStatus !== 'good' ? (
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'schema'
                ? 'border-[#303A88] text-[#303A88]'
                : 'border-transparent text-[#64748B] hover:text-[#1E2559]'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Schema.org JSON-LD</span>
            {audit.schemaStatus === 'valid' ? (
              <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">
                Valid
              </span>
            ) : (
              <span className="text-[10px] font-mono bg-red-100 text-red-800 px-1.5 py-0.2 rounded">
                Error
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'preview'
                ? 'border-[#303A88] text-[#303A88]'
                : 'border-transparent text-[#64748B] hover:text-[#1E2559]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#45AC4B]" />
            <span>Google SERP & Social Preview</span>
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: Meta Tags & URLs */}
          {activeTab === 'meta' && (
            <div className="space-y-5">
              {/* Basic Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1">
                    Page Display Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pageName}
                    onChange={(e) => setFormData({ ...formData, pageName: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                    placeholder="e.g. Women's Health & Gynecological Care"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1">
                    Page Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as SeoCategory })
                    }
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                  >
                    <option value="core">Core Page (Home, About, etc.)</option>
                    <option value="clinical">Clinical Condition Page</option>
                    <option value="blog">Blog / Article</option>
                    <option value="custom">Custom URL / Page</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1">
                    Route / Path *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.path}
                    onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white font-mono focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                    placeholder="e.g. /severe-period-pain-when-to-worry/"
                  />
                </div>
              </div>

              {/* URL & Canonical */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1">
                    Page Target URL (og:url) *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white font-mono focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                    placeholder="https://anjalihomoeoclinic.com/..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1 flex items-center justify-between">
                    <span>Canonical URL *</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, canonicalUrl: formData.url })}
                      className="text-[10px] text-[#45AC4B] hover:underline font-normal"
                    >
                      Copy from Target URL
                    </button>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.canonicalUrl}
                    onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white font-mono focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                    placeholder="https://anjalihomoeoclinic.com/..."
                  />
                </div>
              </div>

              {/* SEO Title */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#1E2559] uppercase">
                    Page Title (&lt;title&gt; and og:title) *
                  </label>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      audit.titleStatus === 'good'
                        ? 'bg-emerald-100 text-emerald-800'
                        : audit.titleStatus === 'warning'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {formData.title.length} chars (30–60 optimal)
                  </span>
                </div>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-[#D8E1F5] bg-white font-medium focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                  placeholder="e.g. Anjali Homoeo Clinic in Malappura, Keralam at Book an Online Appointment"
                />
                <p className="text-[11px] text-[#5F6F65]">{audit.titleMessage}</p>
              </div>

              {/* Meta Description */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#1E2559] uppercase">
                    Meta Description (&lt;meta name=&quot;description&quot;&gt;) *
                  </label>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      audit.descStatus === 'good'
                        ? 'bg-emerald-100 text-emerald-800'
                        : audit.descStatus === 'warning'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {formData.description.length} chars (120–160 optimal)
                  </span>
                </div>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full text-xs px-4 py-2.5 rounded-xl border border-[#D8E1F5] bg-white leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20 focus:border-[#303A88]"
                  placeholder="Compelling, accurate summary of the page for search results..."
                />
                <p className="text-[11px] text-[#5F6F65]">{audit.descMessage}</p>
              </div>

              {/* Keywords & OpenGraph Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EEF2FB]">
                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1">
                    Focus Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.keywords || ''}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#D8E1F5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20"
                    placeholder="homeopathy, malappuram, consultation"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E2559] uppercase mb-1">
                    Social Share Image URL (og:image)
                  </label>
                  <input
                    type="text"
                    value={formData.ogImage || ''}
                    onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })}
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#D8E1F5] bg-white font-mono focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20"
                    placeholder="https://anjalihomoeoclinic.com/image.png"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Schema.org JSON-LD Editor */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="bg-[#EEF2FB] p-4 rounded-2xl border border-[#D8E1F5] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <label className="text-xs font-bold text-[#1E2559] uppercase">
                    Schema Type:
                  </label>
                  <select
                    value={formData.schemaType}
                    onChange={(e) =>
                      setFormData({ ...formData, schemaType: e.target.value as SeoSchemaType })
                    }
                    className="text-xs px-3 py-1.5 rounded-xl border border-[#D8E1F5] bg-white font-semibold text-[#303A88]"
                  >
                    <option value="MedicalClinic">MedicalClinic (Local Clinic)</option>
                    <option value="MedicalWebPage">MedicalWebPage (Clinical Conditions)</option>
                    <option value="BlogPosting">BlogPosting (Article / Education)</option>
                    <option value="Article">Article</option>
                    <option value="FAQPage">FAQPage (Questions & Answers)</option>
                    <option value="AboutPage">AboutPage</option>
                    <option value="ContactPage">ContactPage</option>
                    <option value="CollectionPage">CollectionPage (Products/Hub)</option>
                    <option value="LocalBusiness">LocalBusiness</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleGenerateSchema}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#303A88] text-white hover:bg-[#252E6E] transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#86D68B]" />
                    <span>Generate Template</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSchemaFormat}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-[#D8E1F5] text-[#1E2559] hover:bg-[#EEF2FB] transition-colors"
                  >
                    Format JSON
                  </button>
                </div>
              </div>

              {schemaError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{schemaError}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1E2559] uppercase flex items-center justify-between">
                  <span>Structured Data JSON-LD Script Content</span>
                  <span className="text-[11px] text-[#64748B] font-mono">
                    &lt;script type=&quot;application/ld+json&quot;&gt;
                  </span>
                </label>
                <textarea
                  rows={14}
                  value={formData.schemaJson}
                  onChange={(e) => {
                    setFormData({ ...formData, schemaJson: e.target.value });
                    setSchemaError(null);
                  }}
                  className="w-full font-mono text-xs p-4 rounded-2xl border border-[#D8E1F5] bg-[#0F172A] text-[#E2E8F0] leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-[#45AC4B]"
                  placeholder='{"@context": "https://schema.org", ...}'
                />
              </div>
            </div>
          )}

          {/* TAB 3: Google SERP & Social Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* Device Selector */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider">
                  Live Search Engine Result Preview (SERP)
                </span>
                <div className="flex items-center bg-[#EEF2FB] rounded-xl p-1 border border-[#D8E1F5]">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      previewDevice === 'desktop'
                        ? 'bg-white text-[#303A88] shadow-xs'
                        : 'text-[#64748B]'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      previewDevice === 'mobile'
                        ? 'bg-white text-[#303A88] shadow-xs'
                        : 'text-[#64748B]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Google Result Card */}
              <div
                className={`bg-white p-5 rounded-2xl border border-[#D8E1F5] shadow-sm transition-all ${
                  previewDevice === 'mobile' ? 'max-w-md mx-auto' : 'w-full'
                }`}
              >
                {/* Google Snippet Header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#303A88] flex items-center justify-center text-[10px] text-white font-bold">
                    A
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs text-[#202124] font-medium block">
                      Anjali Homoeo Clinic
                    </span>
                    <span className="text-[11px] text-[#5f6368] font-mono break-all">
                      {formData.canonicalUrl || formData.url || 'https://anjalihomoeoclinic.com'}
                    </span>
                  </div>
                </div>

                {/* Snippet Title */}
                <h3 className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                  {formData.title || 'Page Title Not Set'}
                </h3>

                {/* Snippet Description */}
                <p className="text-xs sm:text-sm text-[#4d5156] mt-1 leading-relaxed line-clamp-2">
                  {formData.description || 'Meta description not set for this page.'}
                </p>

                {/* Sitelinks simulation */}
                <div className="mt-3 pt-3 border-t border-[#EEF2FB] flex flex-wrap gap-3 text-xs text-[#1a0dab]">
                  <span className="hover:underline cursor-pointer">Online Consultation</span>
                  <span>·</span>
                  <span className="hover:underline cursor-pointer">Kuttippuram Clinic</span>
                  <span>·</span>
                  <span className="hover:underline cursor-pointer">Book Appointment</span>
                </div>
              </div>

              {/* Social Share Card Preview */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5 text-[#303A88]" />
                  <span>Social Share Preview (WhatsApp / Facebook / X Card)</span>
                </span>

                <div className="max-w-md mx-auto bg-white rounded-2xl border border-[#D8E1F5] overflow-hidden shadow-sm">
                  <div className="w-full h-44 bg-[#EEF2FB] flex items-center justify-center border-b border-[#D8E1F5] overflow-hidden relative">
                    {formData.ogImage ? (
                      <img
                        src={formData.ogImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Globe className="w-10 h-10 text-[#303A88]/40 mx-auto mb-1" />
                        <span className="text-xs text-[#64748B]">Anjali Homoeo Clinic</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] text-[#64748B] uppercase tracking-widest font-mono block">
                      anjalihomoeoclinic.com
                    </span>
                    <h4 className="text-sm font-bold text-[#1E2559] line-clamp-1">
                      {formData.title}
                    </h4>
                    <p className="text-xs text-[#5F6F65] line-clamp-2 leading-relaxed">
                      {formData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-[#D8E1F5]">
            <div className="flex items-center gap-2 text-xs">
              {audit.titleStatus === 'good' &&
              audit.descStatus === 'good' &&
              audit.schemaStatus === 'valid' ? (
                <span className="text-emerald-700 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  SEO metadata passes validation checks
                </span>
              ) : (
                <span className="text-amber-700 flex items-center gap-1 font-medium">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Review suggested optimizations
                </span>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#1E2559] hover:bg-[#EEF2FB] rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-white bg-[#303A88] hover:bg-[#252E6E] rounded-xl shadow-sm transition-all flex items-center gap-1.5"
              >
                <Save className="w-4 h-4 text-[#86D68B]" />
                <span>Save SEO Metadata</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
