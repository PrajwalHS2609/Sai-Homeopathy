import React from 'react';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';

export const SOCIAL_PROFILES = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@anjalihomoeoclinic',
    label: 'Follow on Instagram',
    description: 'Health tips, homeopathic wellness guides & clinic updates',
    url: 'https://www.instagram.com/anjalihomoeoclinic/',
    brandColor: '#E1306C',
    bgColor: 'hover:bg-[#E1306C]/10',
    borderColor: 'hover:border-[#E1306C]/40',
    textColor: 'text-[#E1306C]',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Anjali Homoeo Clinic',
    label: 'Connect on Facebook',
    description: 'Patient education, announcements & clinic community',
    url: 'https://www.facebook.com/profile.php?id=61585723425201',
    brandColor: '#1877F2',
    bgColor: 'hover:bg-[#1877F2]/10',
    borderColor: 'hover:border-[#1877F2]/40',
    textColor: 'text-[#1877F2]',
  },
  {
    id: 'practo',
    name: 'Practo',
    handle: 'Dr. Anjali Chandrasekhar (BHMS)',
    label: 'Verified on Practo',
    description: 'Verified doctor profile, appointments & patient recommendations',
    url: 'https://www.practo.com/malappuram/doctor/anjali-chandrasekhar-homoeopath',
    brandColor: '#28328C',
    accentColor: '#14BEF0',
    bgColor: 'hover:bg-[#14BEF0]/10',
    borderColor: 'hover:border-[#14BEF0]/40',
    textColor: 'text-[#14BEF0]',
  },
  {
    id: 'justdial',
    name: 'Justdial',
    handle: 'Anjali Homoeo Clinic (Kuttippuram)',
    label: 'Verified on Justdial',
    description: 'Clinic ratings, verified listings, timings & location reviews',
    url: 'https://www.justdial.com/Malappuram/Anjali-Homoeo-Clinic-Kuttippuram/9999PX483-X483-240210031557-B5V4_BZDET',
    brandColor: '#FF6A00',
    bgColor: 'hover:bg-[#FF6A00]/10',
    borderColor: 'hover:border-[#FF6A00]/40',
    textColor: 'text-[#FF6A00]',
  },
];

export const PractoLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    aria-label="Practo"
  >
    <rect width="48" height="48" rx="10" fill="#28328C" />
    <circle cx="16" cy="24" r="5" fill="#14BEF0" />
    <circle cx="32" cy="24" r="5" fill="#14BEF0" />
    <path
      d="M24 14V34M14 24H34"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const JustdialLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    aria-label="Justdial"
  >
    <rect width="48" height="48" rx="10" fill="#FF6A00" />
    <text
      x="24"
      y="32"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      fontSize="22"
      textAnchor="middle"
      letterSpacing="-0.5"
    >
      JD
    </text>
  </svg>
);

export const SocialMediaBar: React.FC<{
  variant?: 'light' | 'dark' | 'card';
  showHandles?: boolean;
}> = ({ variant = 'light', showHandles = false }) => {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SOCIAL_PROFILES.map((item) => {
        if (variant === 'dark') {
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/10 hover:border-white/25 group shadow-xs"
              title={`${item.label} (${item.handle})`}
            >
              {item.id === 'instagram' && (
                <Instagram className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform" />
              )}
              {item.id === 'facebook' && (
                <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:scale-110 transition-transform" />
              )}
              {item.id === 'practo' && (
                <PractoLogoIcon className="w-3.5 h-3.5 rounded-xs shrink-0 group-hover:scale-110 transition-transform" />
              )}
              {item.id === 'justdial' && (
                <JustdialLogoIcon className="w-3.5 h-3.5 rounded-xs shrink-0 group-hover:scale-110 transition-transform" />
              )}
              <span className="font-sans font-medium text-xs">{item.name}</span>
              {showHandles && (
                <span className="text-[10.5px] text-[#CBD5E1] hidden sm:inline">
                  {item.handle}
                </span>
              )}
              <ExternalLink className="w-3 h-3 text-[#94A3B8] opacity-70 group-hover:opacity-100" />
            </a>
          );
        }

        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#F8FAFD] text-[#1E2559] text-xs font-semibold transition-all border border-[#D8E1F5] hover:border-[#303A88]/40 shadow-xs hover:shadow-sm group"
            title={`${item.label} (${item.handle})`}
          >
            {item.id === 'instagram' && (
              <Instagram className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform" />
            )}
            {item.id === 'facebook' && (
              <Facebook className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
            )}
            {item.id === 'practo' && (
              <PractoLogoIcon className="w-4 h-4 rounded-xs shrink-0 group-hover:scale-110 transition-transform" />
            )}
            {item.id === 'justdial' && (
              <JustdialLogoIcon className="w-4 h-4 rounded-xs shrink-0 group-hover:scale-110 transition-transform" />
            )}
            <span className="font-sans font-semibold text-xs">{item.name}</span>
            {showHandles && (
              <span className="text-[11px] text-[#64748B] hidden md:inline">
                {item.handle}
              </span>
            )}
            <ExternalLink className="w-3 h-3 text-[#94A3B8] opacity-70 group-hover:opacity-100" />
          </a>
        );
      })}
    </div>
  );
};
