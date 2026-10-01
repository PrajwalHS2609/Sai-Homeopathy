import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Video, Building2, CalendarDays, ShieldCheck } from 'lucide-react';

export const FeatureBar: React.FC = () => {
  const { navigateToBooking, setCurrentView } = useClinic();

  const features = [
    {
      num: '01',
      title: 'ONLINE CONSULTATION',
      desc: 'Consult from the comfort of your home',
      icon: Video,
      action: () => navigateToBooking('online'),
    },
    {
      num: '02',
      title: 'CLINIC CONSULTATION',
      desc: 'Visit our clinic for an in-person appointment',
      icon: Building2,
      action: () => navigateToBooking('clinic'),
    },
    {
      num: '03',
      title: 'EASY APPOINTMENT BOOKING',
      desc: 'Choose your preferred date and time',
      icon: CalendarDays,
      action: () => navigateToBooking('online'),
    },
    {
      num: '04',
      title: 'GENUINE PRODUCTS',
      desc: 'Browse our selected homeopathy products',
      icon: ShieldCheck,
      action: () => {
        setCurrentView('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ];

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.num}
              onClick={item.action}
              className="text-left bg-white hover:bg-[#EEF7EE]/60 rounded-2xl p-6 shadow-md hover:shadow-lg border border-[#DCEBDD] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF7EE] group-hover:bg-[#DCEBDD] flex items-center justify-center text-[#0B5D3B] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-editorial text-xl font-bold text-[#A4C4A8] group-hover:text-[#0B5D3B] transition-colors tabular-nums">
                  {item.num}
                </span>
              </div>

              <h2 className="text-sm font-bold tracking-tight text-[#173A2A] mb-1.5 group-hover:text-[#0B5D3B] transition-colors">
                {item.title}
              </h2>

              <p className="text-xs text-[#5F6F65] leading-relaxed">
                {item.desc}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
