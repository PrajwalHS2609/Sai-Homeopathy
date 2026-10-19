import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Globe, Sparkles, CheckCircle2, ChevronUp, ChevronDown, Edit2 } from 'lucide-react';
import { auditSeoPage } from '../services/seoService';

export const FloatingSeoBadge: React.FC = () => {
  const { currentPageSeo, openQuickSeoModal } = useClinic();
  const [isExpanded, setIsExpanded] = useState(false);

  const audit = auditSeoPage(currentPageSeo);

  return (
    <aside
      aria-label="Current Page SEO Status"
      className="fixed bottom-6 left-6 z-40 font-sans hidden sm:block"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#D8E1F5] p-2 transition-all duration-200 hover:shadow-2xl max-w-xs">
        <div className="flex items-center justify-between gap-2 px-1 py-0.5">
          <button
            onClick={openQuickSeoModal}
            className="flex items-center gap-2 text-left group"
            title="Click to view & edit SEO Meta Data for this page"
          >
            <div className="w-7 h-7 rounded-xl bg-[#303A88] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#252E6E] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#86D68B]" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-[#1E2559]">Page SEO</span>
                {audit.titleStatus === 'good' && audit.descStatus === 'good' && audit.schemaStatus === 'valid' ? (
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                    100% OK
                  </span>
                ) : (
                  <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                    Optimizing
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[#5F6F65] truncate block max-w-[140px]">
                {currentPageSeo.pageName}
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={openQuickSeoModal}
              className="p-1.5 rounded-lg text-[#303A88] hover:bg-[#EEF2FB] transition-colors"
              title="Edit Title, Description & Schema"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-lg text-[#64748B] hover:text-[#1E2559] hover:bg-[#EEF2FB] transition-colors"
              title={isExpanded ? 'Collapse info' : 'Expand details'}
            >
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronUp className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-2 pt-2 border-t border-[#EEF2FB] px-1 space-y-1.5 text-[10px] text-[#5F6F65]">
            <div className="truncate">
              <span className="font-bold text-[#1E2559]">Title: </span>
              {currentPageSeo.title}
            </div>
            <div className="line-clamp-2">
              <span className="font-bold text-[#1E2559]">Desc: </span>
              {currentPageSeo.description}
            </div>
            <div className="truncate font-mono text-[9px] text-[#303A88]">
              {currentPageSeo.canonicalUrl}
            </div>
            <div className="flex items-center justify-between pt-1 text-[9px] font-semibold">
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Schema: {currentPageSeo.schemaType}
              </span>
              <button
                onClick={openQuickSeoModal}
                className="text-[#303A88] hover:underline font-bold"
              >
                Edit Meta →
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
