import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { NavView } from '../context/ClinicContext';
import { AnjaliLogo } from './AnjaliLogo';
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

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    `Hello ${settings.clinicName}, I have an inquiry.`
  )}`;

  return (
    <footer className="bg-[#1E2559] text-white pt-16 pb-28 sm:pb-12 border-t-2 border-[#303A88]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <AnjaliLogo inverted={true} />
            </div>

            <p className="text-xs text-[#CBD5E1] leading-relaxed max-w-sm font-sans">
              Providing personalized constitutional homeopathy consultations through
              convenient online video visits and in-person clinic appointments
              at Kuttippuram and Puthanathani, Kerala.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#45AC4B] hover:bg-[#39933E] text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 89211 80408</span>
              </a>

              <a
                href="mailto:anjalihomoeoclinic@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#86EFAC] font-semibold transition-colors"
                title="Send email to anjalihomoeoclinic@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>anjalihomoeoclinic@gmail.com</span>
              </a>

              <button
                onClick={() => handleLinkClick('admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D3DBF4] transition-colors"
              >
                <Lock className="w-3 h-3 text-[#8FA3E8]" />
                <span>Staff Portal</span>
              </button>
            </div>
          </div>

          {/* Column 2: Consultations */}
          <div className="space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#45AC4B]">
              CONSULTATIONS
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li>
                <button
                  onClick={() => navigateToBooking('online')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  Online Video Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToBooking('clinic')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  In-Clinic Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToBooking('online')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  Follow-up Review
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  Dr. Anjali Chandrasekhar (BHMS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('blog')}
                  className="hover:text-[#45AC4B] transition-colors text-[#86EFAC] text-left"
                >
                  Health Knowledge Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#45AC4B]">
              TREATMENTS & Q&A
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li>
                <button
                  onClick={() => handleLinkClick('womens-health-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                  <span>Women’s Health &amp; Gynecological Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('respiratory-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>Respiratory, ENT &amp; Allergy Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('skin-hair-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span>Skin, Hair &amp; Scalp Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('renal-thyroid-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Renal, Gallbladder &amp; Thyroid Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('neurological-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>Neurological &amp; Headache Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('anorectal-vascular-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>Anorectal &amp; Vascular Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('joint-musculoskeletal-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Joint, Spine &amp; Musculoskeletal Care</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('ophthalmic-eye-care')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-white font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Ophthalmic / Eye Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('treatments')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  Specialized Treatments (8 Disciplines)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('faq')}
                  className="hover:text-[#45AC4B] transition-colors text-left text-[#86EFAC]"
                >
                  Doctor Q&A & FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('consultations')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  Consultation Pricing & Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#45AC4B] transition-colors text-left"
                >
                  Clinic Location & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Timings & Location */}
          <div className="space-y-4 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#45AC4B]">
              CLINIC LOCATIONS & HOURS
            </h4>
            
            {/* Kuttippuram Branch */}
            <div className="space-y-1 text-xs text-[#CBD5E1] border-b border-white/10 pb-2.5">
              <p className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                <span>Kuttippuram Clinic</span>
              </p>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Keralam 679571
              </p>
              <p className="pt-0.5 flex flex-wrap items-center gap-2">
                <a href="tel:0989101707" className="text-[#86EFAC] hover:underline font-semibold tabular-nums" title="Call Doctor Desk 0989101707">
                  Ph: 0989101707
                </a>
                <span className="text-[#94A3B8]">/</span>
                <a href="tel:09895101707" className="text-[#86EFAC] hover:underline font-semibold tabular-nums" title="Call 098951 01707">
                  098951 01707
                </a>
              </p>
            </div>

            {/* Puthanathani Branch */}
            <div className="space-y-1 text-xs text-[#CBD5E1] border-b border-white/10 pb-2.5">
              <p className="font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                <span>Puthanathani Clinic</span>
              </p>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                Chembayil complex, opp. Thavakkal gold, Puthanathani, Kurumbathur, Keralam 676552
              </p>
              <p className="pt-0.5 flex flex-wrap items-center gap-2">
                <a href="tel:08921180408" className="text-[#86EFAC] hover:underline font-semibold tabular-nums">
                  Ph: 089211 80408
                </a>
              </p>
            </div>

            {/* Timings */}
            <div className="space-y-1 text-xs text-[#CBD5E1]">
              <p className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#45AC4B] shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  {settings.weekdayHours}<br />
                  <span className="text-[#86EFAC]">{settings.sundayHours}</span>
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Medical Notice Bar */}
        <div className="rounded-2xl bg-[#141A42] p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#45AC4B] shrink-0" />
            <p>
              <strong>Medical Disclaimer:</strong> Information presented is for educational purposes and constitutional homeopathic care. It does not replace emergency medical intervention.
            </p>
          </div>
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="text-[#86EFAC] underline hover:text-white shrink-0 font-medium"
          >
            Read Full Disclaimer
          </button>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
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
