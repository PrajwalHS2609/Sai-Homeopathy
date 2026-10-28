import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useClinic, NavView } from '../context/ClinicContext';

interface RegionalBreadcrumbProps {
  categoryView: NavView;
  categoryLabel: string;
  pageTitle: string;
}

export const RegionalBreadcrumb: React.FC<RegionalBreadcrumbProps> = ({
  categoryView,
  categoryLabel,
  pageTitle,
}) => {
  const { setCurrentView } = useClinic();

  return (
    <div className="bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center flex-wrap gap-2 text-xs text-[#64748B]">
          <button
            onClick={() => setCurrentView('home')}
            className="hover:text-[#303A88] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            onClick={() => setCurrentView('treatments')}
            className="hover:text-[#303A88] transition-colors"
          >
            Treatments
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            onClick={() => setCurrentView(categoryView)}
            className="hover:text-[#303A88] transition-colors"
          >
            {categoryLabel}
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1E2559] font-semibold truncate max-w-[280px] sm:max-w-md">
            {pageTitle}
          </span>
        </div>
      </div>
    </div>
  );
};
