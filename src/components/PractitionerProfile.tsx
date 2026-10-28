import React from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Calendar,
  CheckCircle,
  Building2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const PractitionerProfile: React.FC = () => {
  const { practitioners, settings, navigateToBooking } = useClinic();
  const practitioner = practitioners[0]; // Dr. Anjali Chandrasekhar

  return (
    <section id="about" className="py-20 bg-[#F8FAFD] border-y border-[#D8E1F5]/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Doctor Portrait Visual & Credentials Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Portrait Frame with Crisp Border */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
                
                {/* Doctor Portrait Artwork */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D3DBF4] mb-6 shadow-sm group bg-slate-100">
                  <img
                    src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                    alt={`${practitioner.name} - Senior Homeopathic Physician`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2559]/90 via-[#1E2559]/20 to-transparent pointer-events-none" />

                  {/* Registered Doctor Pill */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#2A7B2F] border border-[#C4EAC7] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>Registered Homeopath</span>
                  </div>

                  {/* Bottom Doctor Details */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-editorial text-xl font-bold text-white">
                      {practitioner.name}
                    </h3>
                    <p className="text-xs text-[#CBD5E1] font-medium font-sans">
                      {practitioner.qualifications} • Reg. {practitioner.registrationNumber || settings.registrationNumber}
                    </p>
                  </div>
                </div>

                {/* 4 Interactive Credentials Cards */}
                <div className="grid grid-cols-2 gap-3 text-center font-sans">
                  <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#D8E1F5]">
                    <span className="font-editorial text-lg font-bold text-[#303A88] block tabular-nums">
                      {practitioner.experienceYears}+ Years
                    </span>
                    <span className="text-[11px] text-[#64748B] font-medium">
                      Clinical Practice
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#D8E1F5]">
                    <span className="font-editorial text-lg font-bold text-[#303A88] block">
                      BHMS
                    </span>
                    <span className="text-[11px] text-[#64748B] font-medium">
                      Medical Degree
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#D8E1F5]">
                    <span className="text-xs font-mono font-bold text-[#1E2559] block truncate">
                      {practitioner.registrationNumber || settings.registrationNumber}
                    </span>
                    <span className="text-[11px] text-[#64748B] font-medium">
                      Board Reg. ID
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#D8E1F5]">
                    <span className="text-xs font-bold text-[#45AC4B] block">
                      Online & Clinic
                    </span>
                    <span className="text-[11px] text-[#64748B] font-medium">
                      Dual Practice
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side: Philosophy, Bio & CTA */}
          <div className="lg:col-span-7 space-y-6 font-sans">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4]">
                MEET YOUR PRACTITIONER
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
                {practitioner.name}
              </h2>
              <p className="text-base font-semibold text-[#303A88]">
                {practitioner.qualifications} · {practitioner.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
              With a patient-focused approach to homeopathic consultation,{' '}
              <strong className="text-[#1E2559]">{practitioner.name}</strong> provides consultations through both
              online video visits and in-clinic appointments in Malappuram.
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              The consultation focuses on understanding the patient's comprehensive
              history, concerns, lifestyle rhythms, and individual constitutional
              temperament before recommending appropriate, gentle homeopathic steps.
            </p>

            {/* Clinical Specialties */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider block">
                Areas of Clinical Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#334155]">
                {practitioner.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-full transition-all duration-200 shadow-md hover:shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45AC4B]"
              >
                <span>BOOK WITH {practitioner.name.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateToBooking('clinic')}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-[#303A88] bg-white hover:bg-[#EEF2FB] border border-[#D3DBF4] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
              >
                <Building2 className="w-4 h-4 text-[#303A88]" />
                <span>Book In-Clinic Visit</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
