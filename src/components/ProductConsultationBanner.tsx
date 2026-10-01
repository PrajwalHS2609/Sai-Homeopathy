import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArrowRight, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';

export const ProductConsultationBanner: React.FC = () => {
  const { navigateToBooking, setCurrentView } = useClinic();

  return (
    <section className="py-12 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#EEF7EE] border border-[#DCEBDD] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0B5D3B] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#0B5D3B]" />
                <span>PERSONALIZED PRODUCT GUIDANCE</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173A2A] tracking-tight">
                Looking for the Right Product?
              </h3>

              <p className="text-base text-[#5F6F65]">
                Not sure which product or potency is appropriate for your individual needs?
              </p>

              <p className="text-base sm:text-lg font-semibold text-[#0B5D3B]">
                Speak with our practitioner before making a decision.
              </p>

              <p className="text-xs text-[#5F6F65]/80 flex items-center gap-1.5 pt-1">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-[#D8B45A]" />
                <span>
                  Homeopathic formulations should be taken in accordance with constitutional assessment.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B] whitespace-nowrap"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#173A2A] bg-white hover:bg-[#FCFBF6] border border-[#DCEBDD] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B] whitespace-nowrap"
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
