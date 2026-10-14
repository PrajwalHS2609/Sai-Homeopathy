import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { MessageCircle, Calendar } from 'lucide-react';

export const FloatingWhatsapp: React.FC = () => {
  const { settings, navigateToBooking } = useClinic();

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello ${settings.clinicName}, I would like to book a consultation.`
  )}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <aside aria-label="Quick WhatsApp Contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#45AC4B] hover:bg-[#39933E] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 group border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45AC4B] font-sans"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar */}
      <nav aria-label="Mobile Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-2.5 shadow-lg flex items-center gap-2 font-sans pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl bg-[#EEF2FB] hover:bg-[#E2E8F8] text-[#303A88] font-semibold text-xs border border-[#D3DBF4] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => navigateToBooking('online')}
          className="flex-[1.3] inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] text-white font-semibold text-xs shadow-md transition-colors"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Appointment</span>
        </button>
      </nav>
    </>
  );
};
