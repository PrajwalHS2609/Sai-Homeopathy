import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ExternalLink,
  Navigation,
  Send,
  CheckCircle2,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { settings, navigateToBooking, showToast } = useClinic();

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
    showToast('Your message has been sent to our clinic desk.');
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Sai Homeopathy Clinic, I have an inquiry.'
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${settings.clinicName} ${settings.addressLine1} ${settings.city}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#FCFBF6] border-t border-[#DCEBDD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
            REACH OUT TO US
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
            Contact Sai Homeopathy Clinic
          </h2>
          <p className="text-base sm:text-lg text-[#5F6F65]">
            We are here to assist with consultation inquiries, follow-up queries, and clinic visits.
          </p>
        </div>

        {/* 2-Column Layout: Details & Maps vs Inquiries Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Contact Details & Map Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#DCEBDD] shadow-sm flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Clinic Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5D3B]">
                    <MapPin className="w-4 h-4" />
                    <span>Clinic Address</span>
                  </div>
                  <p className="text-sm font-semibold text-[#173A2A] leading-relaxed">
                    {settings.clinicName}<br />
                    {settings.addressLine1}<br />
                    {settings.addressLine2}<br />
                    {settings.city}, {settings.state} - {settings.pincode}
                  </p>
                </div>

                {/* Opening Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5D3B]">
                    <Clock className="w-4 h-4" />
                    <span>Consultation Hours</span>
                  </div>
                  <div className="text-xs text-[#173A2A] space-y-1">
                    <p className="font-semibold">{settings.weekdayHours}</p>
                    <p className="font-semibold text-emerald-800">{settings.sundayHours}</p>
                    <p className="text-[#5F6F65] text-[11px] pt-1">
                      * Prior appointment booking recommended for zero waiting time.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EEF7EE] text-[#0B5D3B] font-semibold text-xs border border-[#DCEBDD] hover:bg-[#DCEBDD] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0B5D3B] text-white font-semibold text-xs hover:bg-[#145C3A] transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#D8B45A]" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white text-[#173A2A] font-semibold text-xs border border-[#DCEBDD] hover:bg-[#FCFBF6] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#0B5D3B]" />
                  <span>DIRECTIONS</span>
                </a>

                <button
                  onClick={() => navigateToBooking('clinic')}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#145C3A] text-white font-semibold text-xs hover:bg-[#0B5D3B] transition-colors shadow-2xs"
                >
                  <span>BOOK VISIT</span>
                </button>
              </div>

              {/* Simulated Interactive Location Map */}
              <div className="relative rounded-2xl bg-[#EEF7EE] border border-[#DCEBDD] p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                    <span className="text-xs font-bold text-[#173A2A]">
                      Indiranagar Clinic Map Locator
                    </span>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0B5D3B] hover:underline flex items-center gap-1"
                  >
                    <span>Expand Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="h-44 rounded-xl bg-gradient-to-br from-[#E4EDE5] to-[#D5E5D7] flex flex-col items-center justify-center text-center p-4 border border-[#A4C4A8]/40 relative">
                  {/* Stylized Road Network SVG Vector */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 180">
                    <path d="M0,40 L400,40 M0,120 L400,120 M120,0 L120,180 M280,0 L280,180" stroke="#0B5D3B" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>

                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#0B5D3B] text-white mx-auto flex items-center justify-center shadow-lg">
                      <MapPin className="w-5 h-5 text-[#D8B45A]" />
                    </div>
                    <h4 className="text-xs font-bold text-[#173A2A]">
                      Sai Homeopathy Clinic · 14th Main Indiranagar
                    </h4>
                    <p className="text-[11px] text-[#5F6F65]">
                      Near Defence Colony & 100ft Road junction · Metro Accessible
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-xs text-[#5F6F65] pt-2 border-t border-[#DCEBDD]/60 flex flex-wrap items-center justify-between gap-2">
              <span>Email: <strong className="text-[#173A2A]">{settings.email}</strong></span>
              <span>Phone: <strong className="text-[#173A2A] tabular-nums">{settings.phone}</strong></span>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#DCEBDD] shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D3B]">
                  SEND AN INQUIRY
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#173A2A] mt-1">
                  Have a Question?
                </h3>
                <p className="text-xs text-[#5F6F65] mt-1">
                  Write to our desk. We respond during clinic hours within 2 to 4 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#EEF7EE] border border-[#DCEBDD] text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#0B5D3B] mx-auto" />
                  <h4 className="font-editorial text-lg font-bold text-[#173A2A]">
                    Message Received
                  </h4>
                  <p className="text-xs text-[#5F6F65]">
                    Our patient coordinator will contact you shortly via WhatsApp or phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Nair"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEBDD] bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98450 12345"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEBDD] bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. meera@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEBDD] bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      Your Inquiry or Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ask about consultations, specific treatments, or product availability..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCEBDD] bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#0B5D3B] text-white font-semibold text-xs hover:bg-[#145C3A] transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>

            <p className="text-[11px] text-[#5F6F65] pt-4 text-center">
              Confidentiality Guaranteed · We do not share your contact details.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
