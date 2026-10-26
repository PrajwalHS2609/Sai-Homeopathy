import React, { useState } from 'react';
import { PageSeoMetadata } from '../types/seo';
import { generateSitemapXml, downloadSitemapFile, buildSitemapEntries } from '../services/sitemapGenerator';
import {
  X,
  FileCode2,
  Download,
  Copy,
  Check,
  ExternalLink,
  Search,
  CheckCircle2,
  Sparkles,
  Info,
  Layers,
  FileText,
} from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  seoPages: PageSeoMetadata[];
  showToast?: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  seoPages,
  showToast,
}) => {
  const [copiedXml, setCopiedXml] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'urls' | 'gsc-guide'>('preview');

  if (!isOpen) return null;

  const xmlContent = generateSitemapXml(seoPages);
  const entries = buildSitemapEntries(seoPages);
  const sitemapUrl = 'https://anjalihomoeoclinic.com/sitemap.xml';

  const handleCopyXml = async () => {
    try {
      await navigator.clipboard.writeText(xmlContent);
      setCopiedXml(true);
      showToast?.('Sitemap XML copied to clipboard!', 'success');
      setTimeout(() => setCopiedXml(false), 2500);
    } catch {
      showToast?.('Failed to copy to clipboard', 'warning');
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(sitemapUrl);
      setCopiedUrl(true);
      showToast?.('Sitemap URL copied: https://anjalihomoeoclinic.com/sitemap.xml', 'success');
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      showToast?.('Failed to copy URL', 'warning');
    }
  };

  const handleDownload = () => {
    downloadSitemapFile(seoPages, 'sitemap.xml');
    showToast?.('Downloaded sitemap.xml to your machine!', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E1330]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-[#D8E1F5] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EEF2FB] flex items-center justify-between bg-gradient-to-r from-white via-[#F8FAFD] to-[#EDF8EE]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EEF2FB] border border-[#D3DBF4] flex items-center justify-center text-[#303A88] shrink-0">
              <FileCode2 className="w-5 h-5 text-[#303A88]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#1E2559]">XML Sitemap Generator</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F8335] bg-[#EDF8EE] px-2 py-0.5 rounded-full border border-[#C4EAC7]">
                  Google Ready
                </span>
              </div>
              <p className="text-xs text-[#64748B] mt-0.5 font-sans">
                Standard sitemap protocol with Google Image tags, canonical URLs, and index priorities.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl hover:bg-[#EEF2FB] text-[#64748B] hover:text-[#1E2559] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Metrics Bar */}
        <div className="px-6 py-3 bg-[#F8FAFD] border-b border-[#EEF2FB] flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-[#1E2559]">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B]" />
              <span className="font-semibold">{entries.length} URLs Indexed</span>
            </div>
            <div className="text-[#64748B] hidden sm:inline">·</div>
            <div className="text-[#64748B]">
              Primary Domain: <code className="font-mono font-bold text-[#303A88] bg-white px-1.5 py-0.5 rounded border border-[#D8E1F5]">anjalihomoeoclinic.com</code>
            </div>
            <div className="text-[#64748B] hidden sm:inline">·</div>
            <div className="text-[#45AC4B] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Includes Image Sitemap Namespace</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyUrl}
              className="px-3 py-1.5 text-xs font-semibold text-[#303A88] bg-white hover:bg-[#EEF2FB] rounded-lg border border-[#D8E1F5] transition-all flex items-center gap-1.5 shadow-2xs"
              title="Copy sitemap URL for Google Search Console"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5 text-[#45AC4B]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedUrl ? 'URL Copied!' : 'Copy Sitemap URL'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#303A88] hover:bg-[#252E6E] rounded-lg transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-[#86D68B]" />
              <span>Download sitemap.xml</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 pt-3 border-b border-[#EEF2FB] flex gap-2 font-sans bg-white">
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'preview'
                ? 'border-[#303A88] text-[#303A88]'
                : 'border-transparent text-[#64748B] hover:text-[#1E2559]'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            <span>XML Source Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('urls')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'urls'
                ? 'border-[#303A88] text-[#303A88]'
                : 'border-transparent text-[#64748B] hover:text-[#1E2559]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Indexed URLs List ({entries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gsc-guide')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'gsc-guide'
                ? 'border-[#303A88] text-[#303A88]'
                : 'border-transparent text-[#64748B] hover:text-[#1E2559]'
            }`}
          >
            <Search className="w-4 h-4 text-[#45AC4B]" />
            <span>Google Search Console Instructions</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#F8FAFD]">
          
          {/* TAB 1: XML Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#64748B] font-sans">
                  Google-compliant sitemap 0.9 protocol with Google Image extension
                </span>
                <button
                  onClick={handleCopyXml}
                  className="px-3 py-1.5 text-xs font-semibold text-[#1E2559] bg-white hover:bg-[#EEF2FB] rounded-lg border border-[#D8E1F5] transition-all flex items-center gap-1.5 shadow-2xs font-sans"
                >
                  {copiedXml ? <Check className="w-3.5 h-3.5 text-[#45AC4B]" /> : <Copy className="w-3.5 h-3.5 text-[#303A88]" />}
                  <span>{copiedXml ? 'XML Code Copied!' : 'Copy Raw XML'}</span>
                </button>
              </div>

              <div className="relative rounded-2xl bg-[#0F172A] border border-[#334155] p-4 text-xs font-mono text-[#E2E8F0] overflow-x-auto shadow-inner max-h-[460px] leading-relaxed">
                <pre>{xmlContent}</pre>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#64748B] bg-white p-3 rounded-xl border border-[#D8E1F5]">
                <Info className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>
                  The live file is also saved at <code className="text-[#303A88] font-bold">/public/sitemap.xml</code> and can be reached directly at{' '}
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#45AC4B] underline font-semibold"
                  >
                    /sitemap.xml
                  </a>.
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: URLs Breakdown Table */}
          {activeTab === 'urls' && (
            <div className="space-y-4 font-sans">
              <div className="bg-white rounded-2xl border border-[#D8E1F5] overflow-hidden shadow-xs">
                <div className="max-h-[460px] overflow-y-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-[#EEF2FB] text-[#1E2559] font-bold sticky top-0 z-10 border-b border-[#D8E1F5]">
                      <tr>
                        <th className="py-2.5 px-4 w-12 text-center">#</th>
                        <th className="py-2.5 px-4">Canonical URL (loc)</th>
                        <th className="py-2.5 px-3 text-center">Priority</th>
                        <th className="py-2.5 px-3 text-center">Changefreq</th>
                        <th className="py-2.5 px-3 text-center">Lastmod</th>
                        <th className="py-2.5 px-3 text-center">Image</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EEF2FB]">
                      {entries.map((entry, idx) => (
                        <tr key={idx} className="hover:bg-[#F8FAFD] transition-colors">
                          <td className="py-2.5 px-4 text-center text-[#94A3B8] font-mono">{idx + 1}</td>
                          <td className="py-2.5 px-4 font-mono text-[#1E2559] break-all">
                            <a
                              href={entry.loc}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#45AC4B] hover:underline flex items-center gap-1"
                            >
                              <span>{entry.loc}</span>
                              <ExternalLink className="w-3 h-3 text-[#94A3B8] shrink-0" />
                            </a>
                          </td>
                          <td className="py-2.5 px-3 text-center">
                            <span className="bg-[#EEF2FB] text-[#303A88] font-bold px-2 py-0.5 rounded-full border border-[#D3DBF4]">
                              {entry.priority}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-center text-[#64748B] uppercase text-[10px] font-semibold">
                            {entry.changefreq}
                          </td>
                          <td className="py-2.5 px-3 text-center text-[#64748B] font-mono">
                            {entry.lastmod}
                          </td>
                          <td className="py-2.5 px-3 text-center">
                            {entry.image ? (
                              <span className="text-[#2F8335] bg-[#EDF8EE] px-2 py-0.5 rounded text-[10px] font-bold border border-[#C4EAC7]">
                                Yes
                              </span>
                            ) : (
                              <span className="text-[#94A3B8] text-[10px]">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Google Search Console Submission Guide */}
          {activeTab === 'gsc-guide' && (
            <div className="space-y-5 font-sans">
              <div className="bg-white rounded-2xl p-6 border border-[#D8E1F5] shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#EDF8EE] flex items-center justify-center text-[#45AC4B]">
                    <Search className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-base text-[#1E2559]">
                    How to Submit This Sitemap to Google Search Console
                  </h4>
                </div>

                <ol className="space-y-4 text-xs sm:text-sm text-[#334155] list-decimal list-inside pl-2">
                  <li className="leading-relaxed">
                    <strong className="text-[#1E2559]">Open Google Search Console</strong>
                    <p className="text-xs text-[#64748B] ml-5 mt-0.5">
                      Navigate to{' '}
                      <a
                        href="https://search.google.com/search-console"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#303A88] font-semibold underline inline-flex items-center gap-1"
                      >
                        search.google.com/search-console
                        <ExternalLink className="w-3 h-3" />
                      </a>{' '}
                      and log in with your clinic Google account.
                    </p>
                  </li>

                  <li className="leading-relaxed">
                    <strong className="text-[#1E2559]">Select Your Clinic Property</strong>
                    <p className="text-xs text-[#64748B] ml-5 mt-0.5">
                      From the top-left dropdown, select your domain property: <code className="font-mono text-[#303A88] bg-[#EEF2FB] px-1.5 py-0.5 rounded">https://anjalihomoeoclinic.com/</code>.
                    </p>
                  </li>

                  <li className="leading-relaxed">
                    <strong className="text-[#1E2559]">Navigate to Sitemaps</strong>
                    <p className="text-xs text-[#64748B] ml-5 mt-0.5">
                      In the left navigation sidebar under the <strong>"Indexing"</strong> section, click on <strong>Sitemaps</strong>.
                    </p>
                  </li>

                  <li className="leading-relaxed">
                    <strong className="text-[#1E2559]">Enter Sitemap Filename and Submit</strong>
                    <div className="ml-5 mt-1.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-center justify-between">
                      <div className="font-mono text-xs">
                        <span className="text-[#64748B]">https://anjalihomoeoclinic.com/</span>
                        <strong className="text-[#303A88] bg-white px-2 py-1 rounded border border-[#D3DBF4] ml-1">sitemap.xml</strong>
                      </div>
                      <button
                        onClick={handleCopyUrl}
                        className="px-2.5 py-1 text-xs font-semibold text-[#303A88] bg-white hover:bg-[#EEF2FB] rounded border border-[#D8E1F5] flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy Path</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#64748B] ml-5 mt-1">
                      Type <code className="font-mono font-bold text-[#1E2559]">sitemap.xml</code> into the input field and click the blue <strong>"SUBMIT"</strong> button.
                    </p>
                  </li>

                  <li className="leading-relaxed">
                    <strong className="text-[#1E2559]">Verify Status: "Success"</strong>
                    <p className="text-xs text-[#64748B] ml-5 mt-0.5">
                      Google Search Console will instantly fetch the sitemap and display <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Success</span> with <strong>{entries.length} discovered pages</strong>.
                    </p>
                  </li>
                </ol>
              </div>

              {/* Robots.txt verification card */}
              <div className="bg-[#EDF8EE] rounded-2xl p-5 border border-[#C4EAC7] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#2F8335] shrink-0 mt-0.5" />
                <div className="text-xs text-[#1E2559] space-y-1">
                  <span className="font-bold block text-sm text-[#2F8335]">
                    Robots.txt Autodiscovery Enabled
                  </span>
                  <p className="leading-relaxed text-[#334155]">
                    Your site's <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#C4EAC7]">/robots.txt</code> file already includes the reference{' '}
                    <code className="font-mono text-[#303A88]">Sitemap: https://anjalihomoeoclinic.com/sitemap.xml</code>. Googlebot, Bingbot, and other crawlers will automatically discover all 30 pages even before manual submission!
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#EEF2FB] bg-white flex items-center justify-between font-sans">
          <div className="text-xs text-[#64748B]">
            Includes all <strong className="text-[#1E2559]">{entries.length} canonical clinic routes</strong> and medical blog articles.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#1E2559] bg-[#F8FAFD] hover:bg-[#EEF2FB] rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-bold text-white bg-[#303A88] hover:bg-[#252E6E] rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-[#86D68B]" />
              <span>Download File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
