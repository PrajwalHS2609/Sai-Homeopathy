import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArrowRight, HelpCircle, ShieldAlert } from 'lucide-react';

export const ProductConsultationBanner: React.FC = () => {
  const { navigateToBooking, setCurrentView } = useClinic();

  return (
    <section className="py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] border border-[#D8E1F5] p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl font-sans">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#303A88] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#45AC4B]" />
                <span>PERSONALIZED PRODUCT GUIDANCE</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] tracking-tight">
                Looking for the Right Product?
              </h3>

              <p className="text-base text-[#64748B]">
                Not sure which product or potency is appropriate for your individual needs?
              </p>

              <p className="text-base sm:text-lg font-semibold text-[#45AC4B]">
                Speak with Dr. Anjali Chandrasekhar before making a decision.
              </p>

              <p className="text-xs text-[#64748B] flex items-center gap-1.5 pt-1">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-[#45AC4B]" />
                <span>
                  Homeopathic formulations should be taken in accordance with constitutional assessment.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto font-sans">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45AC4B] whitespace-nowrap"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#303A88] bg-white hover:bg-[#EEF2FB] border border-[#D3DBF4] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] whitespace-nowrap"
              >
                <span>BROWSE ALL PRODUCTS</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
