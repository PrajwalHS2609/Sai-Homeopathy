import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Video, Building2, Check, ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const ConsultationOptions: React.FC = () => {
  const { navigateToBooking, settings } = useClinic();

  return (
    <section id="consultations" className="py-20 bg-[#F8FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4] font-sans">
            CONSULTATION OPTIONS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
            Choose How You Want to Consult
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed text-balance font-sans">
            Whether you're at home or prefer a face-to-face appointment, we make
            your consultation comfortable, thorough, and convenient.
          </p>
        </div>

        {/* Two Large Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch font-sans">
          
          {/* CARD 1: Online Consultation (Blue Accent) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D8E1F5] hover:border-[#303A88]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              
              {/* Card Badge & Visual Indicator */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF2FB] group-hover:bg-[#303A88] text-[#303A88] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                  <Video className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                    Consultation Fee
                  </span>
                  <span className="text-2xl font-bold text-[#303A88] tabular-nums">
                    ₹{settings.onlineFee}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mb-2 group-hover:text-[#303A88] transition-colors">
                  Online Video Consultation
                </h3>
                <p className="text-base text-[#64748B] leading-relaxed font-sans">
                  Consult from wherever you are with convenient online homeopathy
                  consultations via secure high-definition video.
                </p>
              </div>

              {/* Suitability Checklist */}
              <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#D8E1F5] space-y-3">
                <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider block">
                  Best Suited For:
                </span>
                <ul className="space-y-2.5 text-sm text-[#334155]">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Patients living outside Malappuram, pan-India & overseas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Busy working professionals seeking flexible timings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Patients who prefer consulting from the comfort of home</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Existing patients requiring ongoing follow-up consultations</span>
                  </li>
                </ul>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pt-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#303A88]" />
                  <span>30–45 Mins In-Depth Session</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B]" />
                  <span>Google Meet / WhatsApp Video</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => navigateToBooking('online')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#303A88] hover:bg-[#252E6D] active:bg-[#1C2356] rounded-full transition-all duration-200 shadow-sm hover:shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
              >
                <span>BOOK ONLINE CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* CARD 2: Clinic Consultation (Green Accent) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D8E1F5] hover:border-[#45AC4B]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              
              {/* Card Badge & Visual Indicator */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#EDF8EE] group-hover:bg-[#45AC4B] text-[#45AC4B] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">
                    Consultation Fee
                  </span>
                  <span className="text-2xl font-bold text-[#2A7B2F] tabular-nums">
                    ₹{settings.clinicFee}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mb-2 group-hover:text-[#45AC4B] transition-colors">
                  In-Clinic Consultation
                </h3>
                <p className="text-base text-[#64748B] leading-relaxed font-sans">
                  Visit our clinic for an in-person consultation and discuss your
                  health concerns in a comfortable, pristine medical setting.
                </p>
              </div>

              {/* Suitability Checklist */}
              <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#D8E1F5] space-y-3">
                <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider block">
                  Best Suited For:
                </span>
                <ul className="space-y-2.5 text-sm text-[#334155]">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>New patients seeking comprehensive in-person case study</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Patients who prefer face-to-face physician interaction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Local Malappuram & Kerala patients & families</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>In-person constitutional follow-ups & remedy dispensing</span>
                  </li>
                </ul>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#45AC4B]" />
                  <span>{settings.addressLine1}, {settings.city}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#303A88]" />
                  <span>Mon–Sat 9AM–8PM | Sun 10AM–2PM</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => navigateToBooking('clinic')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-full transition-all duration-200 shadow-sm hover:shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45AC4B]"
              >
                <span>BOOK CLINIC APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
