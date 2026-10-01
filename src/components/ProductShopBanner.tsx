import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArrowRight, MessageCircle, Sparkles, Leaf, ShieldCheck, Heart } from 'lucide-react';

export const ProductShopBanner: React.FC = () => {
  const { setCurrentView, settings } = useClinic();

  const handleWhatsappInquiry = () => {
    const url = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      'Hello, I would like more information about a homeopathy product.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#173A2A] via-[#145C3A] to-[#0B5D3B] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          
          {/* Subtle Botanical SVG Background Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <path d="M0,0 C300,100 500,50 800,200 L800,400 L0,400 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-[#D8B45A] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GENUINE CLASSICAL REMEDIES</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                YOUR HEALTHCARE ESSENTIALS,{' '}
                <span className="text-[#D8B45A] italic font-serif">ALL IN ONE PLACE</span>
              </h2>

              <p className="text-base sm:text-lg text-[#EEF7EE]/90 leading-relaxed max-w-xl">
                Discover our curated range of authentic homeopathy remedies and
                order your physician-recommended care conveniently with express delivery.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#173A2A] bg-white hover:bg-[#F8F5EA] rounded-full transition-all duration-200 shadow-md hover:shadow-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>SHOP ALL PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 text-[#0B5D3B] transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleWhatsappInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8B45A]" />
                  <span>ASK ABOUT A PRODUCT</span>
                </button>
              </div>

              {/* Trust checklist */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#DCEBDD]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D8B45A]" />
                  <span>Physician-Verified Formulations</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-[#D8B45A]" />
                  <span>100% Genuine Potencies</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#D8B45A]" />
                  <span>Express Courier Across India</span>
                </div>
              </div>
            </div>

            {/* Right Visual & Circular Badge */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Product Arrangement Presentation Card */}
              <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center space-y-4 shadow-2xl relative">
                
                {/* Circular Badge: "Natural Wellness for a Better You" */}
                <div className="absolute -top-6 -right-4 w-24 h-24 rounded-full bg-[#D8B45A] text-[#173A2A] p-2 flex flex-col items-center justify-center text-center shadow-lg border-2 border-white transform rotate-6">
                  <Leaf className="w-4 h-4 mb-0.5 text-[#0B5D3B]" />
                  <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
                    Natural Wellness
                  </span>
                  <span className="text-[9px] font-medium leading-none text-[#173A2A]/80">
                    for a Better You
                  </span>
                </div>

                {/* Botanical Apothecary Visual representation */}
                <div className="py-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/15 border border-white/30 text-white mb-2 shadow-inner">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#F8F5EA]">
                    Apothecary Collection
                  </h4>
                  <p className="text-xs text-[#DCEBDD] mt-1">
                    Carefully prepared in compliance with Homeopathic Pharmacopoeia standards.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-white/20">
                  <div className="bg-black/20 rounded-xl p-2.5">
                    <span className="text-[10px] uppercase text-[#D8B45A] font-semibold block">
                      Potency Quality
                    </span>
                    <span className="text-xs text-white font-medium">Standardized</span>
                  </div>
                  <div className="bg-black/20 rounded-xl p-2.5">
                    <span className="text-[10px] uppercase text-[#D8B45A] font-semibold block">
                      Consultation Link
                    </span>
                    <span className="text-xs text-white font-medium">With Guidance</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
