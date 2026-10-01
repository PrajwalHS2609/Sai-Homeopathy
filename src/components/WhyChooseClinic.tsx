import React from 'react';
import {
  Video,
  CalendarCheck,
  UserCheck2,
  PackageCheck,
  RefreshCw,
} from 'lucide-react';

export const WhyChooseClinic: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'ONLINE & OFFLINE OPTIONS',
      desc: 'Choose the consultation format that fits your schedule, lifestyle, and location seamlessly.',
      icon: Video,
    },
    {
      num: '02',
      title: 'EASY APPOINTMENT BOOKING',
      desc: 'Request or schedule an appointment in minutes without unnecessary paperwork or delays.',
      icon: CalendarCheck,
    },
    {
      num: '03',
      title: 'PERSONALIZED CONSULTATION',
      desc: 'Your consultation is tailored entirely around your unique health history, constitution, and goals.',
      icon: UserCheck2,
    },
    {
      num: '04',
      title: 'CONVENIENT PRODUCT ACCESS',
      desc: 'Browse and order genuine physician-selected homeopathy products directly to your doorstep.',
      icon: PackageCheck,
    },
    {
      num: '05',
      title: 'FOLLOW-UP SUPPORT',
      desc: 'Make it easy to arrange your follow-up review and clarify recovery progress whenever advised.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-20 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
            WHY CHOOSE OUR CLINIC
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
            A Convenient Way to Consult
          </h2>
          <p className="text-base sm:text-lg text-[#5F6F65]">
            Bridging compassionate classical homeopathy with modern digital convenience
          </p>
        </div>

        {/* 5 Feature Cards Grid (Asymmetric Bento/Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-3xl p-8 border border-[#DCEBDD] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF7EE] group-hover:bg-[#0B5D3B] text-[#0B5D3B] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-editorial text-xl font-bold text-[#A4C4A8] group-hover:text-[#0B5D3B] transition-colors tabular-nums">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-[#173A2A] mb-2 group-hover:text-[#0B5D3B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5F6F65] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining 2 Cards in Bottom Row (Spanning 2 columns each on large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reasons.slice(3, 5).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white rounded-3xl p-8 border border-[#DCEBDD] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF7EE] group-hover:bg-[#0B5D3B] text-[#0B5D3B] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-editorial text-xl font-bold text-[#A4C4A8] group-hover:text-[#0B5D3B] transition-colors tabular-nums">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-[#173A2A] mb-2 group-hover:text-[#0B5D3B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5F6F65] leading-relaxed">
                    {item.desc}
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
