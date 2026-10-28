import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface RegionalStickyBarProps {
  pageTitle: string;
  phonePrimary?: string;
  whatsappUrl: string;
  onBookClick: () => void;
}

export const RegionalStickyBar: React.FC<RegionalStickyBarProps> = ({
  pageTitle,
  phonePrimary = '0989101707',
  whatsappUrl,
  onBookClick,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-[#1E2559] text-white shadow-md border-b border-white/10 py-2.5 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-semibold text-white truncate max-w-[240px] sm:max-w-md md:max-w-none">
            {pageTitle}
          </span>
          <span className="hidden md:inline text-white/70">
            | Dr. Anjali Chandrasekhar (BHMS, Board Reg. KA-HOM-15563)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${phonePrimary}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#86EFAC]" />
            <span>Call Clinic</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white font-semibold transition-colors"
          >
            <span>Book Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
