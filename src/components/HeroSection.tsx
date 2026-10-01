import React from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  ArrowRight,
  Sparkles,
  Video,
  Building2,
  CheckCircle2,
  Star,
  Shield,
  HeartHandshake,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigateToBooking, setCurrentView, settings } = useClinic();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F5EA] to-[#FCFBF6] pt-8 pb-16 lg:py-20 border-b border-[#DCEBDD]/60">
      {/* Decorative Botanical Watermark (SVG subtle background) */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 pointer-events-none opacity-30 select-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#DCEBDD]">
          <path
            d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Typography, Copy & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF7EE] border border-[#DCEBDD] text-xs font-semibold text-[#0B5D3B] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B5D3B]" />
              <span>NATURAL. PERSONALIZED. HOLISTIC.</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#173A2A] leading-[1.12] text-balance">
              Personalized Homeopathy Consultation,{' '}
              <span className="text-[#0B5D3B] italic font-serif">Online</span> &{' '}
              <span className="text-[#145C3A]">In Clinic</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#173A2A] font-medium leading-relaxed max-w-2xl">
              Expert guidance, convenient consultations and carefully selected
              homeopathic products — all in one place.
            </p>

            {/* Additional Supporting Text */}
            <p className="text-sm sm:text-base text-[#5F6F65] leading-relaxed max-w-2xl">
              Whether you prefer to consult from home or visit our clinic in
              Bengaluru, choose the consultation option that works best for your
              schedule and health journey.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-md hover:shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5D3B]"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-[#173A2A] bg-white hover:bg-[#EEF7EE] border border-[#DCEBDD] rounded-full transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
              >
                <span>SHOP BEST SELLERS</span>
              </button>
            </div>

            {/* Direct Service Jump Links Underneath */}
            <div className="pt-4 border-t border-[#DCEBDD]/80 flex flex-wrap items-center gap-6 text-sm text-[#5F6F65]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#173A2A]/70">
                Quick Options:
              </span>
              
              <button
                onClick={() => navigateToBooking('online')}
                className="flex items-center gap-2 text-[#0B5D3B] hover:text-[#145C3A] font-medium transition-colors group"
              >
                <span className="p-1 rounded-full bg-[#EEF7EE] group-hover:bg-[#DCEBDD] transition-colors">
                  <Video className="w-3.5 h-3.5 text-[#0B5D3B]" />
                </span>
                <span className="underline decoration-[#DCEBDD] underline-offset-4 group-hover:decoration-[#0B5D3B]">
                  Online Consultation
                </span>
              </button>

              <button
                onClick={() => navigateToBooking('clinic')}
                className="flex items-center gap-2 text-[#0B5D3B] hover:text-[#145C3A] font-medium transition-colors group"
              >
                <span className="p-1 rounded-full bg-[#EEF7EE] group-hover:bg-[#DCEBDD] transition-colors">
                  <Building2 className="w-3.5 h-3.5 text-[#0B5D3B]" />
                </span>
                <span className="underline decoration-[#DCEBDD] underline-offset-4 group-hover:decoration-[#0B5D3B]">
                  Clinic Consultation
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Premium Artwork & Holistic Visual Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card Container */}
              <div className="relative rounded-3xl bg-[#EEF7EE] p-5 sm:p-7 border border-[#DCEBDD] shadow-xl overflow-hidden">
                
                {/* Visual Header with Clinic Environment */}
                <div className="relative rounded-2xl bg-white p-6 shadow-sm border border-[#DCEBDD]/60 space-y-5">
                  
                  {/* Doctor Consultation Session Representation */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#DCEBDD]/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0B5D3B] text-white flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
                        AS
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-[#173A2A]">
                            {settings.practitionerName}
                          </h4>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" title="Online & Available" />
                        </div>
                        <p className="text-xs text-[#5F6F65]">
                          Senior Homeopathic Physician · BHMS
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-[#0B5D3B] bg-[#EEF7EE] px-2.5 py-1 rounded-full">
                      <Video className="w-3 h-3 text-[#0B5D3B]" />
                      <span>Live Video</span>
                    </div>
                  </div>

                  {/* Virtual Consultation Screen Representation */}
                  <div className="relative rounded-xl bg-gradient-to-br from-[#173A2A] to-[#0B5D3B] text-white p-5 overflow-hidden shadow-inner">
                    {/* Background botanical subtle pattern */}
                    <div className="absolute -right-6 -bottom-6 opacity-10 text-white w-32 h-32 pointer-events-none">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"/>
                      </svg>
                    </div>

                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono tracking-wider text-[#D8B45A] uppercase">
                          CONSULTATION SESSION
                        </span>
                        <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded text-white/90">
                          HD Secure Video
                        </span>
                      </div>

                      <p className="font-editorial text-lg text-[#F8F5EA] leading-snug">
                        "Holistic assessment tailored to your personal constitutional health history."
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#DCEBDD]">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B45A]" />
                          <span>Detailed Case Study</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B45A]" />
                          <span>Home Delivery Care</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Remedies & Apothecary Bottles Display */}
                  <div className="bg-[#F8F5EA] rounded-xl p-4 border border-[#DCEBDD]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#173A2A] uppercase tracking-wider">
                        Genuine Formulations
                      </span>
                      <span className="text-[11px] text-[#0B5D3B] font-medium">
                        Standardized & Pure
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white rounded-lg p-2 shadow-2xs border border-[#DCEBDD]/60">
                        <div className="text-lg">🌿</div>
                        <span className="text-[11px] font-semibold text-[#173A2A] block mt-1">Immunity</span>
                        <span className="text-[10px] text-[#5F6F65] tabular-nums">Drops 30ml</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-2xs border border-[#DCEBDD]/60">
                        <div className="text-lg">💧</div>
                        <span className="text-[11px] font-semibold text-[#173A2A] block mt-1">Calm & Stress</span>
                        <span className="text-[10px] text-[#5F6F65] tabular-nums">Oral Drops</span>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-2xs border border-[#DCEBDD]/60">
                        <div className="text-lg">✨</div>
                        <span className="text-[11px] font-semibold text-[#173A2A] block mt-1">Skin Health</span>
                        <span className="text-[10px] text-[#5F6F65] tabular-nums">Elixir</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Floating Card: "Healthy People Happier Lives" */}
                <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#DCEBDD] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#DCEBDD] flex items-center justify-center text-[#0B5D3B]">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#173A2A]">
                        Healthy People, Happier Lives
                      </h4>
                      <p className="text-xs text-[#5F6F65]">
                        Gentle, individualized constitutional guidance
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center text-[#D8B45A] justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#5F6F65] font-semibold tabular-nums">
                      4.9 / 5.0 Rating
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
