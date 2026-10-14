import React from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  ArrowRight,
  Sparkles,
  Video,
  Building2,
  CheckCircle2,
  Star,
  HeartHandshake,
  Calendar,
  Stethoscope,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigateToBooking, setCurrentView, settings } = useClinic();

  const handleScrollToTreatments = () => {
    const el = document.getElementById('treatment-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('treatments');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF2FB] via-[#F8FAFD] to-[#FFFFFF] pt-10 pb-16 lg:py-20 border-b border-[#D8E1F5]/80">
      {/* Decorative Subtle Background Glow / Botanical Accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 pointer-events-none opacity-20 select-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#303A88]">
          <path
            d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ========================================================================= */}
          {/* SIDE 1 (LEFT): Doctor's Name, Credentials, and Professional Biography    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow / Location & Practice Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF8EE] border border-[#C4EAC7] text-xs font-bold text-[#2A7B2F] tracking-wider uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#45AC4B]" />
              <span>MALAPPURAM CLINIC & ONLINE CONSULTATIONS</span>
            </div>

            {/* Main Title (Requested: Homeopathy Clinic in Malappuram | Gentle Care, Personalized Treatment) */}
            <div className="space-y-3">
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2559] leading-[1.18] text-balance">
                Homeopathy Clinic in Malappuram{' '}
                <span className="text-[#45AC4B] font-lato font-normal block text-2xl sm:text-3xl lg:text-4xl mt-2 tracking-normal">
                  | Gentle Care, Personalized Treatment
                </span>
              </h1>
            </div>

            {/* Main Description (Requested: Experience personalized homeopathic care in Malappuram...) */}
            <p className="text-base sm:text-lg text-[#334155] font-normal leading-relaxed max-w-2xl font-sans">
              Experience personalized homeopathic care in Malappuram with a focus on understanding your health concerns and supporting your overall well-being. Book a consultation and take a step toward better health with compassionate, patient-focused care.
            </p>

            {/* Key Clinical Expertise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-xl text-xs font-sans">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#D8E1F5] shadow-2xs hover:border-[#45AC4B]/50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span className="font-medium text-[#1E2559]">Women’s Health & PCOD/PCOS</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#D8E1F5] shadow-2xs hover:border-[#45AC4B]/50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span className="font-medium text-[#1E2559]">Respiratory Allergies & Asthma</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#D8E1F5] shadow-2xs hover:border-[#45AC4B]/50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span className="font-medium text-[#1E2559]">Skin, Scalp & Dermatological Care</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#D8E1F5] shadow-2xs hover:border-[#45AC4B]/50 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span className="font-medium text-[#1E2559]">Neurological & Stress Balance</span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => navigateToBooking('online')}
                className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-9 py-3.5 sm:py-4.5 text-sm sm:text-base lg:text-lg font-bold tracking-wide text-white bg-gradient-to-r from-[#45AC4B] via-[#3AA240] to-[#2F8535] hover:from-[#3AA240] hover:to-[#27702C] active:scale-[0.98] rounded-full transition-all duration-300 shadow-xl shadow-[#45AC4B]/35 hover:shadow-2xl hover:shadow-[#45AC4B]/50 hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#45AC4B]/40 ring-1 ring-white/30 text-center"
              >
                {/* Light shimmer highlight effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white/95 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span>BOOK APPOINTMENT WITH DR. ANJALI</span>
                <ArrowRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1.5 shrink-0" />
              </button>

              <button
                onClick={handleScrollToTreatments}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-9 py-3.5 sm:py-4.5 text-sm sm:text-base lg:text-lg font-bold tracking-wide text-[#303A88] hover:text-[#1E2559] bg-white hover:bg-[#EEF2FB] active:scale-[0.98] border-2 border-[#303A88]/40 hover:border-[#303A88] rounded-full transition-all duration-300 shadow-md shadow-[#303A88]/10 hover:shadow-xl hover:shadow-[#303A88]/20 hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#303A88]/30 text-center"
              >
                <Stethoscope className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#303A88] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span>VIEW TREATMENT CATEGORIES</span>
              </button>
            </div>

            {/* Quick Consultation Modalities Options Underneath */}
            <div className="pt-4 border-t border-[#D8E1F5] flex flex-wrap items-center gap-6 text-sm text-[#64748B] font-sans">
              <span className="text-xs uppercase tracking-wider font-bold text-[#1E2559]/80">
                Consultation Modes:
              </span>
              
              <button
                onClick={() => navigateToBooking('online')}
                className="flex items-center gap-2 text-[#303A88] hover:text-[#45AC4B] font-medium transition-colors group"
              >
                <span className="p-1.5 rounded-full bg-[#EEF2FB] group-hover:bg-[#EDF8EE] transition-colors">
                  <Video className="w-3.5 h-3.5 text-[#303A88] group-hover:text-[#45AC4B]" />
                </span>
                <span className="underline decoration-[#D3DBF4] underline-offset-4 group-hover:decoration-[#45AC4B]">
                  Online Video (Pan-India & Global)
                </span>
              </button>

              <button
                onClick={() => navigateToBooking('clinic')}
                className="flex items-center gap-2 text-[#303A88] hover:text-[#45AC4B] font-medium transition-colors group"
              >
                <span className="p-1.5 rounded-full bg-[#EEF2FB] group-hover:bg-[#EDF8EE] transition-colors">
                  <Building2 className="w-3.5 h-3.5 text-[#303A88] group-hover:text-[#45AC4B]" />
                </span>
                <span className="underline decoration-[#D3DBF4] underline-offset-4 group-hover:decoration-[#45AC4B]">
                  In-Clinic (Malappuram Clinic)
                </span>
              </button>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* SIDE 2 (RIGHT): Doctor's Image & Clinical Presentation Showcase           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Doctor Frame Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] p-5 sm:p-7 border border-[#D8E1F5] shadow-xl overflow-hidden">
                
                {/* Doctor Portrait Card with Crisp Luxury Aesthetic */}
                <div className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-[#D8E1F5]/80 space-y-4">
                  
                  {/* Doctor Image Container with Badges */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#EEF2FB] via-[#E6EDFA] to-[#EDF8EE] border border-[#D3DBF4] p-4 sm:p-6 flex flex-col items-center justify-center text-center">
                    
                    {/* Live Availability Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#2A7B2F] border border-[#C4EAC7] shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                      <span>Accepting Patients</span>
                    </div>

                    {/* Patient Rating Badge */}
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#303A88] border border-[#D3DBF4] shadow-2xs tabular-nums">
                      <Star className="w-3 h-3 text-[#45AC4B] fill-current" />
                      <span>4.9 / 5.0</span>
                    </div>

                    {/* Doctor Portrait Graphic */}
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 my-3">
                      {/* Botanical halo ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#303A88]/20 via-[#D3DBF4] to-[#45AC4B]/30 blur-xs" />
                      
                      {/* High-Fidelity Doctor Portrait Vector Artwork */}
                      <svg
                        viewBox="0 0 160 160"
                        className="w-full h-full relative z-10 drop-shadow-lg rounded-full border-4 border-white bg-white"
                      >
                        <defs>
                          <linearGradient id="drBgGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EEF2FB" />
                            <stop offset="100%" stopColor="#DDE6F8" />
                          </linearGradient>
                          <linearGradient id="drCoatGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F1F4FA" />
                          </linearGradient>
                          <linearGradient id="drSkinGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#E2A77A" />
                            <stop offset="100%" stopColor="#D49463" />
                          </linearGradient>
                        </defs>

                        {/* Soft ambient background */}
                        <circle cx="80" cy="80" r="76" fill="url(#drBgGrad)" />

                        {/* Botanical indoor plant silhouettes in backdrop */}
                        <path d="M18 70 Q32 38 48 62 Q34 88 18 70 Z" fill="#45AC4B" opacity="0.35" />
                        <path d="M142 65 Q126 35 112 58 Q126 82 142 65 Z" fill="#45AC4B" opacity="0.35" />

                        {/* Doctor Body: Clean White Medical Consultation Coat */}
                        <path
                          d="M32 155 Q42 108 80 108 Q118 108 128 155 Z"
                          fill="url(#drCoatGrad)"
                          stroke="#C8D4EE"
                          strokeWidth="1.5"
                        />
                        {/* Inner royal navy / green top */}
                        <path d="M68 110 L80 128 L92 110 Z" fill="#303A88" />
                        {/* Stethoscope neck loop in royal navy */}
                        <path
                          d="M62 112 Q62 140 76 142 Q84 142 98 112"
                          fill="none"
                          stroke="#303A88"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                        />
                        {/* Stethoscope green-accented chest piece */}
                        <circle cx="76" cy="144" r="4.5" fill="#45AC4B" stroke="#1E2559" strokeWidth="1.5" />

                        {/* White Coat Lapels */}
                        <path d="M52 115 L74 155 L62 155 Z" fill="#FFFFFF" />
                        <path d="M108 115 L86 155 L98 155 Z" fill="#FFFFFF" />

                        {/* Neck */}
                        <rect x="73" y="88" width="14" height="24" rx="4" fill="url(#drSkinGrad)" />

                        {/* Hair (Behind head) */}
                        <path
                          d="M48 68 C44 40 116 40 112 68 C116 100 112 114 106 122 C96 116 64 116 54 122 C48 114 44 100 48 68 Z"
                          fill="#1A1F2C"
                        />

                        {/* Head / Face */}
                        <ellipse cx="80" cy="74" rx="22" ry="26" fill="url(#drSkinGrad)" />

                        {/* Hair Front Styling */}
                        <path
                          d="M58 64 C62 50 78 44 80 44 C82 44 98 50 102 64 C96 55 86 52 80 54 C74 52 64 55 58 64 Z"
                          fill="#1A1F2C"
                        />
                        <path d="M58 64 C56 76 56 86 54 94 C59 86 62 76 60 66 Z" fill="#1A1F2C" />
                        <path d="M102 64 C104 76 104 86 106 94 C101 86 98 76 100 66 Z" fill="#1A1F2C" />

                        {/* Eyes & Eyebrows */}
                        <path d="M68 66 Q72 64 76 66" stroke="#1A1F2C" strokeWidth="1.75" fill="none" strokeLinecap="round" />
                        <path d="M84 66 Q88 64 92 66" stroke="#1A1F2C" strokeWidth="1.75" fill="none" strokeLinecap="round" />
                        
                        <ellipse cx="72" cy="73" rx="2.5" ry="2" fill="#1A1F2C" />
                        <ellipse cx="88" cy="73" rx="2.5" ry="2" fill="#1A1F2C" />
                        <circle cx="73" cy="72" r="0.75" fill="#FFFFFF" />
                        <circle cx="89" cy="72" r="0.75" fill="#FFFFFF" />

                        {/* Nose */}
                        <path d="M79 73 Q80 80 77 82 L82 82" stroke="#B8764B" strokeWidth="1.25" fill="none" strokeLinecap="round" />

                        {/* Warm Friendly Smile */}
                        <path d="M73 88 Q80 94 87 88" stroke="#A84C4C" strokeWidth="2" fill="none" strokeLinecap="round" />

                        {/* Subtle ear rings in silver / pearl */}
                        <circle cx="58" cy="77" r="1.5" fill="#45AC4B" />
                        <circle cx="102" cy="77" r="1.5" fill="#45AC4B" />
                      </svg>
                    </div>

                    {/* Doctor Name & Designation below image */}
                    <div className="space-y-1 mt-1">
                      <div className="flex items-center justify-center gap-1.5">
                        <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1E2559]">
                          {settings.practitionerName}
                        </h3>
                        <span className="p-0.5 rounded-full bg-[#45AC4B] text-white" title="Verified Physician">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#303A88]">
                        {settings.practitionerQualification}
                      </p>
                      <p className="text-[11px] text-[#64748B]">
                        Board Reg. {settings.registrationNumber} · Malappuram, Kerala
                      </p>
                    </div>

                  </div>

                  {/* Consultation Session Highlights Card */}
                  <div className="rounded-xl bg-[#F8FAFD] p-4 border border-[#D8E1F5] space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-bold text-[#1E2559] uppercase tracking-wider text-[10px]">
                        Consultation Standard
                      </span>
                      <span className="text-[#303A88] font-semibold text-[11px] bg-[#EEF2FB] px-2 py-0.5 rounded-md border border-[#D3DBF4]">
                        45-Min Intake
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-[#475569] font-sans">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                        <span>Constitutional History</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                        <span>Pure German Dilutions</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                        <span>Express Delivery</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                        <span>Dedicated Follow-ups</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Button */}
                  <button
                    onClick={() => navigateToBooking('online')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#303A88] hover:bg-[#252E6D] active:bg-[#1C2356] text-white text-xs font-semibold shadow-sm transition-all duration-200 group"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>SCHEDULE YOUR CONSULTATION</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                </div>

                {/* Floating Trust Strip Underneath Card */}
                <div className="mt-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-[#D8E1F5] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#EDF8EE] flex items-center justify-center text-[#45AC4B] shrink-0">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1E2559]">
                        Individualized Constitutional Healing
                      </h4>
                      <p className="text-[11px] text-[#64748B]">
                        Gentle, thorough clinical evaluation for chronic relief
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentView('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[11px] font-bold text-[#303A88] hover:text-[#45AC4B] underline shrink-0 transition-colors"
                  >
                    Read Bio →
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
