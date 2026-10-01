import React from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Video,
  Building2,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';

export const PractitionerProfile: React.FC = () => {
  const { practitioners, settings, navigateToBooking } = useClinic();
  const practitioner = practitioners[0]; // Dr. Ananya Sharma

  return (
    <section id="about" className="py-20 bg-[#F8F5EA] border-y border-[#DCEBDD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Doctor Portrait Visual & Credentials Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Portrait Frame with Warm Cream Border */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-[#DCEBDD] shadow-lg">
                
                {/* Doctor Avatar / Visual representation */}
                <div className="relative aspect-square rounded-2xl bg-gradient-to-tr from-[#EEF7EE] to-[#DCEBDD] flex flex-col items-center justify-center overflow-hidden border border-[#A4C4A8]/40 mb-6">
                  
                  {/* Subtle botanical backdrop */}
                  <div className="absolute top-0 right-0 p-4 opacity-20 text-[#0B5D3B]">
                    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
                    </svg>
                  </div>

                  {/* Doctor Monogram & Stethoscope Emblem */}
                  <div className="w-24 h-24 rounded-full bg-[#0B5D3B] text-white flex items-center justify-center font-editorial font-bold text-3xl shadow-md border-4 border-white mb-3">
                    {practitioner.avatarInitial || 'AS'}
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#173A2A]">
                    {practitioner.name}
                  </h3>
                  <p className="text-xs text-[#5F6F65] font-medium text-center px-4 mt-1">
                    {practitioner.qualifications}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-[#0B5D3B] border border-[#DCEBDD]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0B5D3B]" />
                    <span>Registered Homeopathic Physician</span>
                  </div>
                </div>

                {/* 4 Interactive Credentials Cards */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-[#FCFBF6] rounded-xl p-3 border border-[#DCEBDD]/70">
                    <span className="font-editorial text-lg font-bold text-[#0B5D3B] block tabular-nums">
                      {practitioner.experienceYears}+ Years
                    </span>
                    <span className="text-[11px] text-[#5F6F65] font-medium">
                      Clinical Experience
                    </span>
                  </div>

                  <div className="bg-[#FCFBF6] rounded-xl p-3 border border-[#DCEBDD]/70">
                    <span className="font-editorial text-lg font-bold text-[#0B5D3B] block">
                      BHMS
                    </span>
                    <span className="text-[11px] text-[#5F6F65] font-medium">
                      Homeopathy Degree
                    </span>
                  </div>

                  <div className="bg-[#FCFBF6] rounded-xl p-3 border border-[#DCEBDD]/70">
                    <span className="text-xs font-mono font-bold text-[#173A2A] block truncate">
                      {practitioner.registrationNumber || settings.registrationNumber}
                    </span>
                    <span className="text-[11px] text-[#5F6F65] font-medium">
                      Board Reg. ID
                    </span>
                  </div>

                  <div className="bg-[#FCFBF6] rounded-xl p-3 border border-[#DCEBDD]/70">
                    <span className="text-xs font-bold text-[#0B5D3B] block">
                      Online & Clinic
                    </span>
                    <span className="text-[11px] text-[#5F6F65] font-medium">
                      Dual Practice
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side: Philosophy, Bio & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
                MEET YOUR PRACTITIONER
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
                {practitioner.name}
              </h2>
              <p className="text-base font-semibold text-[#0B5D3B]">
                {practitioner.qualifications} · {practitioner.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#173A2A] leading-relaxed">
              With a patient-focused approach to homeopathic consultation,{' '}
              <strong>{practitioner.name}</strong> provides consultations through both
              online and in-clinic appointments in Bengaluru.
            </p>

            <p className="text-sm sm:text-base text-[#5F6F65] leading-relaxed">
              The consultation focuses on understanding the patient's comprehensive
              history, concerns, lifestyle rhythms, and individual constitutional
              temperament before recommending appropriate, gentle homeopathic steps.
            </p>

            {/* Clinical Specialties */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-[#173A2A] uppercase tracking-wider block">
                Areas of Clinical Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#173A2A]">
                {practitioner.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0B5D3B] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-md hover:shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
              >
                <span>BOOK WITH {practitioner.name.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateToBooking('clinic')}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-[#173A2A] bg-white hover:bg-[#EEF7EE] border border-[#DCEBDD] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
              >
                <Building2 className="w-4 h-4 text-[#0B5D3B]" />
                <span>Book In-Clinic Visit</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
