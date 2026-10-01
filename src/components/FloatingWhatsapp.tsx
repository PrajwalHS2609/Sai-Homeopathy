import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { MessageCircle, Calendar, Phone } from 'lucide-react';

export const FloatingWhatsapp: React.FC = () => {
  const { settings, navigateToBooking } = useClinic();

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Sai Homeopathy Clinic, I would like to book a consultation.'
  )}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <aside aria-label="Quick WhatsApp Contact" className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#0B5D3B] hover:bg-[#145C3A] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 group border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-[#D8B45A]" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar (< 15% viewport height cap) */}
      <nav aria-label="Mobile Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FCFBF6]/95 backdrop-blur-md border-t border-[#DCEBDD] p-2.5 shadow-lg flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EEF7EE] text-[#0B5D3B] font-semibold text-xs border border-[#DCEBDD]"
        >
          <MessageCircle className="w-4 h-4 text-[#0B5D3B]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => navigateToBooking('online')}
          className="flex-2 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#0B5D3B] text-white font-semibold text-xs shadow-md"
        >
          <Calendar className="w-4 h-4 text-[#D8B45A]" />
          <span>Book Appointment</span>
        </button>
      </nav>
    </>
  );
};
