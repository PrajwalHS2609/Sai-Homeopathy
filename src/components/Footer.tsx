import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { NavView } from '../context/ClinicContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldAlert,
  Lock,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    settings,
    setCurrentView,
    navigateToBooking,
    setIsDisclaimerOpen,
  } = useClinic();

  const handleLinkClick = (view: NavView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Sai Homeopathy Clinic, I have an inquiry.'
  )}`;

  return (
    <footer className="bg-[#173A2A] text-[#EEF7EE] pt-16 pb-12 border-t border-[#0B5D3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B5D3B] flex items-center justify-center text-[#F8F5EA] border border-[#DCEBDD]/30">
                <svg
                  className="w-5 h-5 text-[#F8F5EA]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div>
                <span className="font-editorial text-lg font-bold tracking-tight text-white block">
                  {settings.clinicName}
                </span>
                <span className="text-[11px] text-[#A4C4A8] tracking-wider uppercase font-medium">
                  {settings.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#DCEBDD]/80 leading-relaxed max-w-sm">
              Providing personalized constitutional homeopathy consultations through
              convenient online video visits and modern in-person clinic appointments
              in Indiranagar, Bengaluru.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D8B45A] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={() => handleLinkClick('admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#EEF7EE] transition-colors"
              >
                <Lock className="w-3 h-3 text-[#A4C4A8]" />
                <span>Staff Portal</span>
              </button>
            </div>
          </div>

          {/* Column 2: Consultations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A]">
              CONSULTATIONS
            </h4>
            <ul className="space-y-2 text-xs text-[#DCEBDD]/80">
              <li>
                <button
                  onClick={() => navigateToBooking('online')}
                  className="hover:text-white transition-colors"
                >
                  Online Video Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToBooking('clinic')}
                  className="hover:text-white transition-colors"
                >
                  In-Clinic Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToBooking('online')}
                  className="hover:text-white transition-colors"
                >
                  Follow-up Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors"
                >
                  Dr. Ananya Sharma (BHMS)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A]">
              PRODUCTS & STORE
            </h4>
            <ul className="space-y-2 text-xs text-[#DCEBDD]/80">
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="hover:text-white transition-colors"
                >
                  Best-Selling Remedies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="hover:text-white transition-colors"
                >
                  Immunity Formulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="hover:text-white transition-colors"
                >
                  Stress & Sleep Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="hover:text-white transition-colors"
                >
                  Skin & Hair Elixirs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Timings & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8B45A]">
              CLINIC HOURS & VENUE
            </h4>
            <div className="space-y-2 text-xs text-[#DCEBDD]/80">
              <p className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D8B45A] shrink-0 mt-0.5" />
                <span>
                  {settings.weekdayHours}<br />
                  <span className="text-[#A4C4A8]">{settings.sundayHours}</span>
                </span>
              </p>

              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D8B45A] shrink-0 mt-0.5" />
                <span>
                  {settings.addressLine1}, {settings.city} - {settings.pincode}
                </span>
              </p>

              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#D8B45A] shrink-0" />
                <span className="tabular-nums">{settings.phone}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Medical Notice Bar */}
        <div className="rounded-2xl bg-black/20 p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A4C4A8]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#D8B45A] shrink-0" />
            <p>
              <strong>Medical Disclaimer:</strong> Information presented is for educational purposes and constitutional homeopathic care. It does not replace emergency medical intervention.
            </p>
          </div>
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="text-[#D8B45A] underline hover:text-white shrink-0 font-medium"
          >
            Read Full Disclaimer
          </button>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A4C4A8]">
          <p>
            © {new Date().getFullYear()} {settings.clinicName}. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              className="hover:text-white transition-colors"
            >
              Shipping Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
