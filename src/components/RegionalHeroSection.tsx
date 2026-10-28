import React from 'react';
import { Calendar, MessageCircle, ShieldCheck } from 'lucide-react';
import { RegionalDoctorCard } from './RegionalDoctorCard';

interface MetricItem {
  label: string;
  value: string;
}

interface RegionalHeroSectionProps {
  badgeIcon: React.ReactNode;
  badgeText: string;
  title: string;
  subtitle: string;
  metrics: MetricItem[];
  doctorSubtitle?: string;
  doctorBio?: string;
  phonePrimary?: string;
  phoneWhatsApp?: string;
  whatsappUrl: string;
  onBookClick: () => void;
}

export const RegionalHeroSection: React.FC<RegionalHeroSectionProps> = ({
  badgeIcon,
  badgeText,
  title,
  subtitle,
  metrics,
  doctorSubtitle,
  doctorBio,
  phonePrimary = '0989101707',
  phoneWhatsApp = '89211 80408',
  whatsappUrl,
  onBookClick,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-[#1E2559] via-[#242C66] to-[#161B40] text-white py-12 lg:py-16 overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* DOCTOR PROFILE CARD ON THE LEFT (Desktop col-span-5) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <RegionalDoctorCard
              doctorSubtitle={doctorSubtitle}
              doctorBio={doctorBio}
              phonePrimary={phonePrimary}
              whatsappUrl={whatsappUrl}
            />
          </div>

          {/* HERO CONTENT ON THE RIGHT (Desktop col-span-7) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#86EFAC]">
              {badgeIcon}
              <span>{badgeText}</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 ${
                    idx === 2 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    {m.label}
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white font-bold text-sm shadow-lg shadow-[#E11D48]/30 transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Consultation</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
                <span>WhatsApp: {phoneWhatsApp}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/75">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                100% Confidential Care
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                In-Person &amp; Video Consultations
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                Transparent Medical Disclosures
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
