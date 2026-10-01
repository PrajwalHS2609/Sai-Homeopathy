import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Video, Building2, Check, ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const ConsultationOptions: React.FC = () => {
  const { navigateToBooking, settings } = useClinic();

  return (
    <section id="consultations" className="py-20 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
            CONSULTATION OPTIONS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
            Choose How You Want to Consult
          </h2>
          <p className="text-base sm:text-lg text-[#5F6F65] leading-relaxed text-balance">
            Whether you're at home or prefer a face-to-face appointment, we make
            your consultation comfortable, thorough, and convenient.
          </p>
        </div>

        {/* Two Large Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* CARD 1: Online Consultation */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCEBDD] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              
              {/* Card Badge & Visual Indicator */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF7EE] group-hover:bg-[#0B5D3B] text-[#0B5D3B] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm">
                  <Video className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#5F6F65] uppercase tracking-wider block">
                    Consultation Fee
                  </span>
                  <span className="text-xl font-bold text-[#0B5D3B] tabular-nums">
                    ₹{settings.onlineFee}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#173A2A] mb-2 group-hover:text-[#0B5D3B] transition-colors">
                  Online Consultation
                </h3>
                <p className="text-base text-[#5F6F65] leading-relaxed">
                  Consult from wherever you are with convenient online homeopathy
                  consultations via secure high-definition video.
                </p>
              </div>

              {/* Suitability Checklist */}
              <div className="bg-[#FCFBF6] rounded-2xl p-5 border border-[#DCEBDD]/70 space-y-3">
                <span className="text-xs font-bold text-[#173A2A] uppercase tracking-wider block">
                  Best Suited For:
                </span>
                <ul className="space-y-2.5 text-sm text-[#173A2A]">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Patients living outside the local Bengaluru area</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Busy working professionals seeking flexible timings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Patients who prefer consulting from the comfort of home</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Existing patients requiring ongoing follow-up consultations</span>
                  </li>
                </ul>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5F6F65] pt-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0B5D3B]" />
                  <span>30–45 Mins In-Depth Session</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0B5D3B]" />
                  <span>Google Meet / Zoom</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => navigateToBooking('online')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-sm hover:shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
              >
                <span>BOOK ONLINE CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* CARD 2: Clinic Consultation */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCEBDD] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              
              {/* Card Badge & Visual Indicator */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF7EE] group-hover:bg-[#0B5D3B] text-[#0B5D3B] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#5F6F65] uppercase tracking-wider block">
                    Consultation Fee
                  </span>
                  <span className="text-xl font-bold text-[#0B5D3B] tabular-nums">
                    ₹{settings.clinicFee}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#173A2A] mb-2 group-hover:text-[#0B5D3B] transition-colors">
                  Clinic Consultation
                </h3>
                <p className="text-base text-[#5F6F65] leading-relaxed">
                  Visit our clinic for an in-person consultation and discuss your
                  health concerns in a comfortable, clean medical environment.
                </p>
              </div>

              {/* Suitability Checklist */}
              <div className="bg-[#FCFBF6] rounded-2xl p-5 border border-[#DCEBDD]/70 space-y-3">
                <span className="text-xs font-bold text-[#173A2A] uppercase tracking-wider block">
                  Best Suited For:
                </span>
                <ul className="space-y-2.5 text-sm text-[#173A2A]">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>New patients seeking comprehensive in-person case study</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Patients who prefer face-to-face physician interaction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Local Bengaluru patients & families</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EEF7EE] text-[#0B5D3B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>In-person constitutional follow-ups & remedy pickup</span>
                  </li>
                </ul>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5F6F65] pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0B5D3B]" />
                  <span>Indiranagar, Bengaluru</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0B5D3B]" />
                  <span>Mon–Sat 9AM–8PM | Sun 10AM–2PM</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => navigateToBooking('clinic')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-sm hover:shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
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
