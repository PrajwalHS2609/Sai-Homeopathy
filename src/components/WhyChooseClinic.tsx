import React from 'react';
import {
  UserCheck2,
  Award,
  ClipboardList,
  Pill,
  HeartHandshake,
  Stethoscope,
  Users,
  RefreshCw,
} from 'lucide-react';

export const WhyChooseClinic: React.FC = () => {
  const reasons = [
    {
      title: 'PERSONALIZED CONSULTATION',
      desc: 'Care tailored to individual health concerns and needs.',
      icon: UserCheck2,
    },
    {
      title: 'EXPERIENCED PRACTITIONERS',
      desc: 'Consult qualified healthcare professionals.',
      icon: Award,
    },
    {
      title: 'INDIVIDUALIZED TREATMENT PLANS',
      desc: 'Recommendations based on personal consultation and assessment.',
      icon: ClipboardList,
    },
    {
      title: 'HOMEOPATHIC MEDICINES AVAILABLE',
      desc: 'Access to homeopathic medicines and guidance on their use.',
      icon: Pill,
    },
    {
      title: 'PATIENT-CENTRED CARE',
      desc: 'A welcoming environment focused on listening to patients.',
      icon: HeartHandshake,
    },
    {
      title: 'DETAILED HEALTH CONSULTATION',
      desc: 'Discuss your symptoms, medical history, and health concerns.',
      icon: Stethoscope,
    },
    {
      title: 'FAMILY HEALTHCARE CONSULTATIONS',
      desc: 'Consultation services for patients across different age groups.',
      icon: Users,
    },
    {
      title: 'FOLLOW-UP SUPPORT',
      desc: 'Ongoing consultations to review concerns and discuss next steps.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#D8E1F5]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 font-sans">
          <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4]">
            WHY CHOOSE OUR CLINIC
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
            A Convenient Way to Consult
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Bridging compassionate classical homeopathy with modern digital convenience
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-7 border border-[#D8E1F5] hover:border-[#45AC4B]/50 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] group-hover:bg-[#45AC4B] text-[#303A88] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:rotate-3">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold tracking-tight text-[#1E2559] mb-2.5 group-hover:text-[#303A88] transition-colors font-sans uppercase leading-snug min-h-[2.5rem] flex items-center">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    "{item.desc}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
