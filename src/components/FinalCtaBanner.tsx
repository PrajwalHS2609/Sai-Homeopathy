import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArrowRight, MessageCircle, Calendar, Sparkles } from 'lucide-react';

export const FinalCtaBanner: React.FC = () => {
  const { navigateToBooking, settings } = useClinic();

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Sai Homeopathy Clinic, I am ready to book a consultation.'
  )}`;

  return (
    <section className="bg-[#0B5D3B] text-white py-16 lg:py-24 relative overflow-hidden border-t border-[#145C3A]">
      {/* Decorative Botanical Watermark */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-white">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M100 20 C100 80 50 100 20 100 C80 100 100 150 100 180 C100 120 150 100 180 100 C120 100 100 50 100 20 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-[#D8B45A] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR HOLISTIC HEALING PATH</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to Book Your Consultation?
        </h2>

        <p className="text-base sm:text-xl text-[#EEF7EE]/90 max-w-2xl mx-auto leading-relaxed">
          Choose the convenience of an online consultation from home, or visit us in person at our clinic in Bengaluru.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigateToBooking('online')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-[#173A2A] bg-white hover:bg-[#F8F5EA] rounded-full transition-all duration-200 shadow-lg hover:shadow-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Calendar className="w-4 h-4 text-[#0B5D3B]" />
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight className="w-4 h-4 text-[#0B5D3B] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-4 h-4 text-[#D8B45A]" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#DCEBDD]">
          <span>✓ Flexible Timings</span>
          <span className="opacity-40">·</span>
          <span>✓ Dedicated Physician Time</span>
          <span className="opacity-40">·</span>
          <span>✓ Authentic Homeopathic Care</span>
        </div>

      </div>
    </section>
  );
};
