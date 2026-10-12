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
    <section className="py-16 bg-[#F8FAFD] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1E2559] via-[#303A88] to-[#1E2559] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl border-2 border-[#45AC4B]/40">
          
          {/* Subtle Botanical SVG Background Texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <path d="M0,0 C300,100 500,50 800,200 L800,400 L0,400 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-[#86EFAC] uppercase tracking-wider font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>GENUINE CLASSICAL REMEDIES</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                YOUR HEALTHCARE ESSENTIALS,{' '}
                <span className="text-[#86EFAC] font-lato font-semibold tracking-wider">ALL IN ONE PLACE</span>
              </h2>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl font-sans">
                Discover our curated range of authentic homeopathy remedies and
                order your physician-recommended care conveniently with express delivery.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4 font-sans">
                <button
                  onClick={() => {
                    setCurrentView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold tracking-wide text-white bg-gradient-to-r from-[#45AC4B] via-[#3AA240] to-[#2F8535] hover:from-[#3AA240] hover:to-[#28732E] rounded-full transition-all duration-200 shadow-lg shadow-[#45AC4B]/30 hover:shadow-xl hover:shadow-[#45AC4B]/40 hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>BUY PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleWhatsappInquiry}
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
                  <span>ASK ABOUT A PRODUCT</span>
                </button>
              </div>

              {/* Trust checklist */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#CBD5E1] font-sans">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B]" />
                  <span>Physician-Verified Formulations</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-[#45AC4B]" />
                  <span>100% Genuine Potencies</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#45AC4B]" />
                  <span>Express Courier Across India</span>
                </div>
              </div>
            </div>

            {/* Right Visual & Circular Badge */}
            <div className="lg:col-span-5 relative flex items-center justify-center font-sans">
              
              {/* Product Arrangement Presentation Card */}
              <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center space-y-4 shadow-2xl relative">
                
                {/* Circular Badge */}
                <div className="absolute -top-6 -right-4 w-24 h-24 rounded-full bg-[#45AC4B] text-white p-2 flex flex-col items-center justify-center text-center shadow-lg border-2 border-white transform rotate-6">
                  <Leaf className="w-4 h-4 mb-0.5 text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-tight leading-tight">
                    Natural Wellness
                  </span>
                  <span className="text-[9px] font-medium leading-none text-white/90">
                    for a Better You
                  </span>
                </div>

                {/* Authentic Bottle of Homeopathic Medicine Visual */}
                <div className="py-2 flex flex-col items-center">
                  <div className="relative w-28 h-44 my-2 flex items-center justify-center filter drop-shadow-2xl">
                    <svg viewBox="0 0 120 190" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        {/* Amber Glass Gradient */}
                        <linearGradient id="amberGlass" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#78350F" />
                          <stop offset="20%" stopColor="#B45309" />
                          <stop offset="50%" stopColor="#D97706" />
                          <stop offset="80%" stopColor="#92400E" />
                          <stop offset="100%" stopColor="#451A03" />
                        </linearGradient>
                        
                        {/* Dropper Bulb Gradient */}
                        <linearGradient id="dropperBulb" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="50%" stopColor="#334155" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                      </defs>

                      {/* Soft Shadow at base */}
                      <ellipse cx="60" cy="182" rx="42" ry="7" fill="#000000" fillOpacity="0.35" />

                      {/* Dropper Top / Rubber Bulb */}
                      <path d="M50 4 C50 1.8 54 0 60 0 C66 0 70 1.8 70 4 L71 22 C71 24 67 25 60 25 C53 25 49 24 49 22 Z" fill="url(#dropperBulb)" />
                      <ellipse cx="60" cy="5" rx="9" ry="3.5" fill="#475569" />

                      {/* Collar / Screw Cap Ribbed Ring */}
                      <rect x="44" y="24" width="32" height="12" rx="2.5" fill="#1E2559" stroke="#45AC4B" strokeWidth="1" />
                      <line x1="48" y1="26" x2="48" y2="34" stroke="#45AC4B" strokeWidth="1" strokeOpacity="0.7" />
                      <line x1="54" y1="26" x2="54" y2="34" stroke="#45AC4B" strokeWidth="1" strokeOpacity="0.7" />
                      <line x1="60" y1="26" x2="60" y2="34" stroke="#45AC4B" strokeWidth="1" strokeOpacity="0.7" />
                      <line x1="66" y1="26" x2="66" y2="34" stroke="#45AC4B" strokeWidth="1" strokeOpacity="0.7" />
                      <line x1="72" y1="26" x2="72" y2="34" stroke="#45AC4B" strokeWidth="1" strokeOpacity="0.7" />

                      {/* Bottle Neck */}
                      <rect x="47" y="36" width="26" height="10" fill="url(#amberGlass)" />

                      {/* Bottle Shoulders and Body */}
                      <path d="M47 46 C32 50 20 62 20 78 L20 168 C20 176 26 181 35 181 L85 181 C94 181 100 176 100 168 L100 78 C100 62 88 50 73 46 Z" fill="url(#amberGlass)" />
                      
                      {/* Inner Liquid Level */}
                      <path d="M22 84 L98 84 L98 168 C98 174 93 179 85 179 L35 179 C27 179 22 174 22 168 Z" fill="#78350F" fillOpacity="0.6" />

                      {/* Specular Highlight Streak Left */}
                      <path d="M26 78 L26 168 C26 172 28 174 32 175 L30 175 C25 174 23 171 23 166 L23 79 C23 68 30 58 40 52 L42 54 C33 60 26 68 26 78 Z" fill="#FFFFFF" fillOpacity="0.3" />

                      {/* Specular Highlight Streak Right */}
                      <path d="M96 82 L96 166 C96 170 94 173 90 174 L92 175 C97 173 98 169 98 164 L98 80 Z" fill="#FFFFFF" fillOpacity="0.2" />

                      {/* Classical Homeopathic Paper Label */}
                      <rect x="25" y="86" width="70" height="74" rx="4" fill="#FCFDFE" stroke="#E2E8F0" strokeWidth="1" />
                      
                      {/* Label Top Green Brand Ribbon */}
                      <rect x="25" y="86" width="70" height="9" rx="2" fill="#45AC4B" />
                      <text x="60" y="93" fill="#FFFFFF" fontSize="5.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.8">HOMEOPATHY</text>

                      {/* Potency Seal / Emblem */}
                      <circle cx="60" cy="112" r="10" fill="#F0FDF4" stroke="#45AC4B" strokeWidth="1.2" />
                      <text x="60" y="111" fill="#1E2559" fontSize="6.5" fontWeight="bold" textAnchor="middle">30C</text>
                      <text x="60" y="117" fill="#45AC4B" fontSize="4.5" fontWeight="600" textAnchor="middle">POTENCY</text>

                      {/* Label Details */}
                      <text x="60" y="132" fill="#1E2559" fontSize="6.5" fontWeight="bold" textAnchor="middle">DR. ANJALI</text>
                      <text x="60" y="138" fill="#64748B" fontSize="4.2" textAnchor="middle" letterSpacing="0.4">CLASSICAL DILUTION</text>

                      {/* Quality & Volume Footer on Label */}
                      <line x1="32" y1="144" x2="88" y2="144" stroke="#E2E8F0" strokeWidth="0.8" />
                      <text x="60" y="152" fill="#45AC4B" fontSize="5" fontWeight="bold" textAnchor="middle">30 ML • SEALED GLASS</text>

                      {/* Graduated Pipette Droplet */}
                      <circle cx="106" cy="118" r="4" fill="#86EFAC" fillOpacity="0.8" stroke="#FFFFFF" strokeWidth="1" />
                      <circle cx="108" cy="106" r="2.5" fill="#86EFAC" fillOpacity="0.6" stroke="#FFFFFF" strokeWidth="0.8" />
                    </svg>
                  </div>

                  <h4 className="font-heading text-xl font-bold text-white tracking-tight">
                    Bottle of Homeopathic Medicine
                  </h4>
                  <p className="text-xs text-[#CBD5E1] mt-1 font-sans max-w-xs leading-relaxed">
                    Physician-dispensed classical homeopathic remedy sealed in pharmaceutical amber glass with sterile dropper.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-white/20 font-sans">
                  <div className="bg-black/20 rounded-xl p-2.5">
                    <span className="text-[10px] uppercase text-[#86EFAC] font-semibold block">
                      Potency Quality
                    </span>
                    <span className="text-xs text-white font-medium">Standardized</span>
                  </div>
                  <div className="bg-black/20 rounded-xl p-2.5">
                    <span className="text-[10px] uppercase text-[#86EFAC] font-semibold block">
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
