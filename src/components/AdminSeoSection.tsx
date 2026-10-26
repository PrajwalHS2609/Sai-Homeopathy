import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { PageSeoMetadata, SeoCategory } from '../types/seo';
import { auditSeoPage } from '../services/seoService';
import { SeoPageEditModal } from './SeoPageEditModal';
import { SitemapModal } from './SitemapModal';
import {
  Globe,
  Search,
  Plus,
  Edit2,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Code,
  Download,
  Upload,
  RotateCcw,
  Trash2,
  Sparkles,
  Layers,
  ArrowRight,
  FileCode2,
} from 'lucide-react';

export const AdminSeoSection: React.FC = () => {
  const {
    seoPages,
    updatePageSeo,
    addPageSeo,
    deletePageSeo,
    resetPageSeoToDefault,
    resetAllSeoToDefault,
    setCurrentView,
    openBlogPost,
    blogPosts,
    showToast,
  } = useClinic();

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [auditFilter, setAuditFilter] = useState<'ALL' | 'ATTENTION' | 'OPTIMAL'>('ALL');

  const [editingPage, setEditingPage] = useState<PageSeoMetadata | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNewModal, setIsNewModal] = useState(false);
  const [isSitemapModalOpen, setIsSitemapModalOpen] = useState(false);

  // Compute metrics
  const totalPages = seoPages.length;
  const audits = seoPages.map((p) => ({ page: p, audit: auditSeoPage(p) }));
  const optimalPages = audits.filter(
    (a) =>
      a.audit.titleStatus === 'good' &&
      a.audit.descStatus === 'good' &&
      a.audit.schemaStatus === 'valid'
  ).length;
  const validSchemas = audits.filter((a) => a.audit.schemaStatus === 'valid').length;

  // Filtered pages
  const filteredPages = seoPages.filter((page) => {
    const audit = auditSeoPage(page);
    const matchesSearch =
      page.pageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.url.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === 'ALL' || page.category === categoryFilter;

    let matchesAudit = true;
    if (auditFilter === 'ATTENTION') {
      matchesAudit =
        audit.titleStatus !== 'good' ||
        audit.descStatus !== 'good' ||
        audit.schemaStatus !== 'valid';
    } else if (auditFilter === 'OPTIMAL') {
      matchesAudit =
        audit.titleStatus === 'good' &&
        audit.descStatus === 'good' &&
        audit.schemaStatus === 'valid';
    }

    return matchesSearch && matchesCategory && matchesAudit;
  });

  const handleEdit = (page: PageSeoMetadata) => {
    setEditingPage(page);
    setIsNewModal(false);
    setIsEditModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingPage(null);
    setIsNewModal(true);
    setIsEditModalOpen(true);
  };

  const handleSavePage = (savedPage: PageSeoMetadata) => {
    if (isNewModal) {
      addPageSeo(savedPage);
      showToast(`Added SEO metadata for "${savedPage.pageName}"`, 'success');
    } else {
      updatePageSeo(savedPage.id, savedPage);
      showToast(`Updated SEO metadata for "${savedPage.pageName}"`, 'success');
    }
  };

  const handleNavigateToPage = (page: PageSeoMetadata) => {
    if (page.id === 'home') {
      setCurrentView('home');
    } else if (page.id === 'womens-health-care') {
      setCurrentView('womens-health-care');
    } else if (page.id === 'respiratory-care') {
      setCurrentView('respiratory-care');
    } else if (page.id === 'skin-hair-care') {
      setCurrentView('skin-hair-care');
    } else if (page.id === 'renal-thyroid-care') {
      setCurrentView('renal-thyroid-care');
    } else if (page.id === 'neurological-care') {
      setCurrentView('neurological-care');
    } else if (page.id === 'anorectal-vascular-care') {
      setCurrentView('anorectal-vascular-care');
    } else if (page.id === 'joint-musculoskeletal-care') {
      setCurrentView('joint-musculoskeletal-care');
    } else if (page.id === 'ophthalmic-eye-care') {
      setCurrentView('ophthalmic-eye-care');
    } else if (page.id === 'treatments') {
      setCurrentView('treatments');
    } else if (page.id === 'consultations') {
      setCurrentView('consultations');
    } else if (page.id === 'book-appointment') {
      setCurrentView('book-appointment');
    } else if (page.id === 'about') {
      setCurrentView('about');
    } else if (page.id === 'reviews') {
      setCurrentView('reviews');
    } else if (page.id === 'faq') {
      setCurrentView('faq');
    } else if (page.id === 'contact') {
      setCurrentView('contact');
    } else if (page.id === 'products') {
      setCurrentView('products');
    } else if (page.id === 'blog') {
      setCurrentView('blog');
    } else if (page.id === 'blog-severe-period-pain') {
      const p = blogPosts.find((b) => b.id === 'post-severe-period-pain');
      if (p) openBlogPost(p);
      else setCurrentView('blog');
    } else if (page.id === 'blog-pcod') {
      const p = blogPosts.find((b) => b.id === 'post-pcod');
      if (p) openBlogPost(p);
      else setCurrentView('blog');
    } else if (page.id === 'blog-uterine-fibroids') {
      const p = blogPosts.find((b) => b.id === 'post-uterine-fibroids');
      if (p) openBlogPost(p);
      else setCurrentView('blog');
    } else {
      // Default to home or alert
      setCurrentView('home');
    }
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(seoPages, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'anjali-clinic-seo-metadata.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('SEO configuration exported successfully!', 'success');
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsed.forEach((p) => {
            if (p.id) updatePageSeo(p.id, p);
          });
          showToast(`Imported ${parsed.length} SEO page configurations!`, 'success');
        } else {
          showToast('Invalid SEO JSON file format', 'warning');
        }
      } catch (err) {
        showToast('Failed to parse JSON file', 'warning');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Overview */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D3DBF4]">
                SEARCH ENGINE OPTIMIZATION & METADATA
              </span>
              <span className="text-[11px] font-bold text-[#2F8335] bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#45AC4B]" />
                Live Injected
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
              Page SEO & Schema Metadata Manager
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6F65] max-w-2xl mt-1">
              Add and customize Title, Description, Canonical URL, OpenGraph tags, and Schema.org
              JSON-LD structured data for every page across the website.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleAddNew}
              className="px-4 py-2.5 text-xs font-bold text-white bg-[#303A88] hover:bg-[#252E6E] rounded-xl shadow-sm transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#86D68B]" />
              <span>Add SEO for New Page</span>
            </button>

            <button
              onClick={() => setIsSitemapModalOpen(true)}
              className="px-3.5 py-2.5 text-xs font-semibold text-[#2F8335] bg-[#EDF8EE] hover:bg-[#D5EED7] rounded-xl transition-colors flex items-center gap-1.5 border border-[#C4EAC7] shadow-2xs"
              title="View, copy & download Google XML Sitemap"
            >
              <FileCode2 className="w-4 h-4 text-[#45AC4B]" />
              <span>Sitemap (XML)</span>
            </button>

            <button
              onClick={handleExportJson}
              className="px-3.5 py-2.5 text-xs font-semibold text-[#1E2559] bg-[#EEF2FB] hover:bg-[#D8E1F5] rounded-xl transition-colors flex items-center gap-1.5"
              title="Export SEO config to JSON"
            >
              <Download className="w-4 h-4 text-[#303A88]" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>

            <label className="px-3.5 py-2.5 text-xs font-semibold text-[#1E2559] bg-[#EEF2FB] hover:bg-[#D8E1F5] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer">
              <Upload className="w-4 h-4 text-[#303A88]" />
              <span className="hidden sm:inline">Import JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportJson}
                className="hidden"
              />
            </label>

            <button
              onClick={() => {
                if (window.confirm('Reset all pages to their default verified SEO metadata?')) {
                  resetAllSeoToDefault();
                  showToast('All pages reset to default verified SEO metadata', 'info');
                }
              }}
              className="px-3.5 py-2.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors flex items-center gap-1.5"
              title="Reset all pages to system defaults"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#EEF2FB]">
          <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#D8E1F5]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
              Total Managed Pages
            </span>
            <span className="text-2xl font-bold text-[#1E2559] mt-0.5 block">
              {totalPages}
            </span>
            <span className="text-[11px] text-[#45AC4B] font-medium flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" /> All routes tracked
            </span>
          </div>

          <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#D8E1F5]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
              Optimal SERP Snippets
            </span>
            <span className="text-2xl font-bold text-[#303A88] mt-0.5 block">
              {optimalPages} / {totalPages}
            </span>
            <span className="text-[11px] text-[#5F6F65] font-medium mt-0.5 block">
              Optimal length & format
            </span>
          </div>

          <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#D8E1F5]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
              Valid Schema.org JSON-LD
            </span>
            <span className="text-2xl font-bold text-[#2F8335] mt-0.5 block">
              {validSchemas} / {totalPages}
            </span>
            <span className="text-[11px] text-[#2F8335] font-medium flex items-center gap-1 mt-0.5">
              <Code className="w-3 h-3" /> Rich Snippet Ready
            </span>
          </div>

          <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#D8E1F5]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
              Primary Canonical Base
            </span>
            <span className="text-xs font-mono font-bold text-[#1E2559] mt-1 block truncate">
              anjalihomoeoclinic.com
            </span>
            <span className="text-[11px] text-[#45AC4B] font-medium mt-0.5 block">
              SSL / HTTPS Secured
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-[#D8E1F5] flex flex-col sm:flex-row gap-3 items-center justify-between shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pages by name, title, or URL..."
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-[#D8E1F5] bg-[#F8FAFD] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#303A88]/20"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs px-3 py-2 rounded-xl border border-[#D8E1F5] bg-white text-[#1E2559] font-medium"
          >
            <option value="ALL">All Categories ({seoPages.length})</option>
            <option value="core">Core Clinic Pages</option>
            <option value="clinical">Clinical Condition Pages</option>
            <option value="blog">Blog Articles</option>
            <option value="custom">Custom Pages</option>
          </select>

          <select
            value={auditFilter}
            onChange={(e) => setAuditFilter(e.target.value as any)}
            className="text-xs px-3 py-2 rounded-xl border border-[#D8E1F5] bg-white text-[#1E2559] font-medium"
          >
            <option value="ALL">All Health Status</option>
            <option value="OPTIMAL">100% Fully Optimized</option>
            <option value="ATTENTION">Needs Attention / Warnings</option>
          </select>
        </div>
      </div>

      {/* Pages List */}
      <div className="space-y-3.5">
        {filteredPages.map((page) => {
          const audit = auditSeoPage(page);
          return (
            <div
              key={page.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 group"
            >
              {/* Left Column: Page Info, Title & Description */}
              <div className="space-y-2.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-[#1E2559]">
                    {page.pageName}
                  </span>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      page.category === 'clinical'
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : page.category === 'blog'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : page.category === 'custom'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    {page.category}
                  </span>

                  {page.isCustom && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Custom
                    </span>
                  )}

                  <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1 bg-[#F8FAFD] px-2 py-0.5 rounded-md border border-[#EEF2FB]">
                    <Globe className="w-3 h-3 text-[#303A88]" />
                    {page.path}
                  </span>
                </div>

                {/* Page Title & Status */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#303A88]">Title:</span>
                    <h3 className="text-sm font-medium text-[#1E2559] truncate max-w-xl">
                      {page.title}
                    </h3>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        audit.titleStatus === 'good'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {page.title.length} chars
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-[#64748B] shrink-0 mt-0.5">
                      Desc:
                    </span>
                    <p className="text-xs text-[#5F6F65] line-clamp-2 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </div>

                {/* Canonical & Schema Info Bar */}
                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-[#64748B]">
                  <div className="flex items-center gap-1 font-mono">
                    <span className="font-semibold text-[#1E2559]">Canonical:</span>
                    <span className="truncate max-w-xs">{page.canonicalUrl}</span>
                  </div>

                  <span>·</span>

                  <div className="flex items-center gap-1.5 font-mono">
                    <Code className="w-3 h-3 text-[#303A88]" />
                    <span className="font-semibold text-[#1E2559]">Schema:</span>
                    <span className="text-[#303A88]">{page.schemaType}</span>
                    {audit.schemaStatus === 'valid' ? (
                      <span className="text-emerald-600 font-bold">✓ Valid</span>
                    ) : (
                      <span className="text-red-600 font-bold">✕ Syntax Error</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#EEF2FB]">
                <button
                  onClick={() => handleEdit(page)}
                  className="px-3.5 py-2 text-xs font-bold text-[#303A88] bg-[#EEF2FB] hover:bg-[#D8E1F5] rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit SEO</span>
                </button>

                <button
                  onClick={() => handleNavigateToPage(page)}
                  className="px-3.5 py-2 text-xs font-semibold text-[#1E2559] bg-white border border-[#D8E1F5] hover:bg-[#F8FAFD] rounded-xl transition-colors flex items-center gap-1.5"
                  title="Navigate to this page in preview"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>View Page</span>
                </button>

                <button
                  onClick={() => {
                    if (window.confirm(`Reset SEO metadata for "${page.pageName}" to verified default?`)) {
                      resetPageSeoToDefault(page.id);
                      showToast(`Reset "${page.pageName}" to default SEO`, 'info');
                    }
                  }}
                  className="p-2 text-[#64748B] hover:text-[#303A88] hover:bg-[#EEF2FB] rounded-xl transition-colors"
                  title="Reset this page to default"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {page.isCustom && (
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete custom SEO metadata for "${page.pageName}"?`)) {
                        deletePageSeo(page.id);
                        showToast(`Deleted custom page "${page.pageName}"`, 'info');
                      }
                    }}
                    className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors"
                    title="Delete custom page"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {filteredPages.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#D8E1F5] space-y-3">
            <Globe className="w-10 h-10 text-[#64748B] mx-auto opacity-40" />
            <h3 className="text-base font-bold text-[#1E2559]">No SEO Pages Found</h3>
            <p className="text-xs text-[#5F6F65] max-w-md mx-auto">
              No pages matched your current search or category filter. Try clearing filters or
              add a new page SEO configuration.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('ALL');
                setAuditFilter('ALL');
              }}
              className="text-xs font-bold text-[#303A88] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* SEO Edit / Add Modal */}
      <SeoPageEditModal
        page={editingPage}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingPage(null);
        }}
        onSave={handleSavePage}
        isNew={isNewModal}
      />

      {/* Google XML Sitemap Modal */}
      <SitemapModal
        isOpen={isSitemapModalOpen}
        onClose={() => setIsSitemapModalOpen(false)}
        seoPages={seoPages}
        showToast={showToast}
      />
    </div>
  );
};
