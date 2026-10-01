import React from 'react';
import { Calendar, FileText, UserCheck, HeartPulse } from 'lucide-react';

export const AppointmentProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'BOOK YOUR APPOINTMENT',
      desc: 'Choose Online or Clinic Consultation and select your preferred date and convenient time slot.',
      icon: Calendar,
    },
    {
      step: '02',
      title: 'SHARE YOUR DETAILS',
      desc: 'Provide basic information and optional previous medical reports required to prepare your consultation.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'CONSULTATION',
      desc: 'Discuss your health history, lifestyle factors, and specific concerns in-depth with the practitioner.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'FOLLOW-UP & CARE',
      desc: 'Receive personalized homeopathic therapeutic guidance, remedy details, and follow-up support.',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5EA] border-y border-[#DCEBDD]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
            HOW IT WORKS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
            Your Consultation in 4 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-[#5F6F65]">
            Simple, structured, and convenient healthcare from booking to follow-up
          </p>
        </div>

        {/* 4 Horizontal Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-7 border border-[#DCEBDD] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header with Circular Numbered Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#EEF7EE] group-hover:bg-[#0B5D3B] text-[#0B5D3B] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-editorial text-2xl font-bold text-[#A4C4A8] group-hover:text-[#0B5D3B] transition-colors tabular-nums">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold tracking-tight text-[#173A2A] mb-2 group-hover:text-[#0B5D3B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5F6F65] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Progress bar line connection indicator */}
                <div className="pt-6 mt-6 border-t border-[#DCEBDD]/50 flex items-center justify-between text-[11px] text-[#A4C4A8]">
                  <span className="font-medium">Step {index + 1} of 4</span>
                  <span className="w-8 h-1 rounded-full bg-[#DCEBDD] group-hover:bg-[#0B5D3B] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
