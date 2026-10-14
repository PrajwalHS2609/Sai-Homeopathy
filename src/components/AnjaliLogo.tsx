import React from 'react';

interface AnjaliLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  inverted?: boolean; // For dark backgrounds like footer
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AnjaliLogo: React.FC<AnjaliLogoProps> = ({
  className = '',
  variant = 'full',
  inverted = false,
  size = 'md',
}) => {
  const primaryNavy = inverted ? '#FFFFFF' : '#303A88';
  const leafGreen = '#45AC4B';
  const dropletBlue = inverted ? '#8FA3E8' : '#303A88';
  const subtitleColor = inverted ? '#D3DBF4' : '#303A88';

  // Sizing mappings
  const markSizeClasses = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-11 sm:h-11',
    lg: 'w-11 h-11 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  }[size];

  const titleSizeClasses = {
    sm: 'text-xs sm:text-sm tracking-[0.10em] sm:tracking-[0.12em]',
    md: 'text-[14px] sm:text-xl tracking-[0.09em] sm:tracking-[0.16em]',
    lg: 'text-lg sm:text-2xl tracking-[0.14em] sm:tracking-[0.18em]',
    xl: 'text-2xl sm:text-3xl tracking-[0.18em] sm:tracking-[0.2em]',
  }[size];

  const subtitleSizeClasses = {
    sm: 'text-[7.5px] sm:text-[8px] tracking-[0.16em] sm:tracking-[0.2em]',
    md: 'text-[8px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.24em]',
    lg: 'text-[10px] sm:text-[13px] tracking-[0.18em] sm:tracking-[0.26em]',
    xl: 'text-xs sm:text-base tracking-[0.22em] sm:tracking-[0.28em]',
  }[size];

  const renderMarkSvg = (svgClass: string = '') => (
    <svg
      viewBox="0 0 140 140"
      className={`shrink-0 select-none ${svgClass}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anjali Homeo Clinic Emblem"
    >
      {/* Outer Navy Ring */}
      <circle
        cx="70"
        cy="70"
        r="64"
        stroke={primaryNavy}
        strokeWidth="5"
        fill={inverted ? 'rgba(255,255,255,0.06)' : '#FFFFFF'}
      />

      {/* Top Teardrop / Medicine Droplet at apex */}
      <path
        d="M70 25 C68.5 29 60 41 60 48.5 C60 54.2 64.5 58.5 70 58.5 C75.5 58.5 80 54.2 80 48.5 C80 41 71.5 29 70 25 Z"
        fill={dropletBlue}
      />

      {/* Right Leg of 'A' with distinctive classical flared serif foot */}
      <path
        d="M68 62 L78 62 L106 114 L117 114 L117 121 L91 121 L91 114 L98 114 L87 92 L64 92 Z"
        fill={primaryNavy}
      />

      {/* Horizontal Crossbar of 'A' */}
      <path
        d="M51 92 L87 92 L84 86 L55 86 Z"
        fill={primaryNavy}
      />

      {/* Left Leg of 'A' sculpted as an organic botanical leaf */}
      <path
        d="M38 121 C33 99 47 74 67.5 61 C67.5 76 63 96 48 115 C44.5 119.5 40.5 121 38 121 Z"
        fill={leafGreen}
      />

      {/* Leaf Central Vein (Graceful white curve) */}
      <path
        d="M41 117 Q53 93 66 65"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Delicate Leaf Side Veins */}
      <path
        d="M48 103 Q55 99 58 101"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M54 89 Q60 85 64 87"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );

  if (variant === 'mark') {
    return renderMarkSvg(`${markSizeClasses} ${className}`);
  }

  // Full / Horizontal Brand Identity: Emblem + Wordmark
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3.5 ${className}`}>
      {/* Emblem Mark */}
      {renderMarkSvg(markSizeClasses)}

      {/* Typography Wordmark (Matching uploaded logo geometry and letter-spacing) */}
      <div className="flex flex-col justify-center leading-none select-none">
        <span
          className={`font-sans font-black ${titleSizeClasses}`}
          style={{ color: primaryNavy, fontWeight: 900 }}
        >
          ANJALI
        </span>
        <span
          className={`font-sans font-semibold uppercase mt-0.5 sm:mt-1 ${subtitleSizeClasses}`}
          style={{ color: subtitleColor, fontWeight: 700 }}
        >
          HOMEO CLINIC
        </span>
      </div>
    </div>
  );
};
