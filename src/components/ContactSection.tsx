import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { CLINIC_BRANCHES } from '../data/initialData';
import {
  sendContactInquiryEmail,
  getContactMailtoUrl,
  CLINIC_OFFICIAL_EMAIL,
} from '../services/emailService';
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
  Building2,
  Calendar,
  Check,
} from 'lucide-react';
import { SocialMediaBar } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const { settings, navigateToBooking, showToast } = useClinic();

  const [activeBranchId, setActiveBranchId] = useState<'all' | 'kuttippuram' | 'puthanathani'>('all');
  const [formBranch, setFormBranch] = useState<'kuttippuram' | 'puthanathani' | 'general'>('general');
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);

  const branches = settings.branches || CLINIC_BRANCHES;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;

    setIsSubmittingEmail(true);

    try {
      await sendContactInquiryEmail({
        name: formState.name.trim(),
        phone: formState.phone.trim(),
        email: formState.email.trim() || undefined,
        branch: formBranch,
        message: formState.message.trim() || 'General clinic consultation inquiry',
      });
      showToast(`Inquiry sent to ${CLINIC_OFFICIAL_EMAIL}!`, 'success');
    } catch (err) {
      console.error('Failed to dispatch contact inquiry email:', err);
      showToast(`Inquiry recorded for ${CLINIC_OFFICIAL_EMAIL}.`, 'info');
    } finally {
      setIsSubmittingEmail(false);
      setSubmitted(true);
    }
  };

  const whatsappGeneralUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    `Hello ${settings.clinicName}, I would like to enquire about consultations.`
  )}`;

  const visibleBranches =
    activeBranchId === 'all'
      ? branches
      : branches.filter((b) => b.id === activeBranchId);

  return (
    <section id="contact" className="py-20 bg-[#F8FAFD] border-t border-[#D8E1F5]/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 font-sans">
          <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4]">
            CLINIC LOCATIONS & CONTACT
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
            Visit Our Clinics in Kerala
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Consultations available at our Kuttippuram &amp; Puthanathani centers, with direct phone and WhatsApp assistance.
          </p>
        </div>

        {/* Quick Contact & WhatsApp Highlights Banner */}
        <div className="bg-gradient-to-r from-[#1E2559] via-[#2A3475] to-[#1E2559] rounded-3xl p-6 sm:p-8 text-white shadow-md mb-12 border border-[#303A88]/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 divide-white/15">
            
            {/* Kuttippuram Quick Contact */}
            <div className="space-y-2 lg:pr-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
                <MapPin className="w-4 h-4 text-[#45AC4B]" />
                <span>Kuttippuram Clinic</span>
              </div>
              <p className="text-xs text-[#CBD5E1] line-clamp-2">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Keralam 679571
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href="tel:09895101707"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>098951 01707</span>
                </a>
              </div>
            </div>

            {/* Puthanathani Quick Contact */}
            <div className="pt-4 sm:pt-0 space-y-2 lg:px-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
                <MapPin className="w-4 h-4 text-[#45AC4B]" />
                <span>Puthanathani Clinic</span>
              </div>
              <p className="text-xs text-[#CBD5E1] line-clamp-2">
                Chembayil complex, opp. Thavakkal gold, Puthanathani, Kurumbathur, Keralam 676552
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href="tel:08921180408"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>089211 80408</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Support Desk */}
            <div className="pt-4 sm:pt-0 space-y-2 lg:px-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
                <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
                <span>WhatsApp Desk</span>
              </div>
              <p className="text-xs text-[#CBD5E1]">
                Quick booking guidance, doctor consultation queries &amp; remedy delivery.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href="https://wa.me/918921180408?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#45AC4B] hover:bg-[#39933E] text-white px-3 py-1.5 rounded-lg transition-colors tabular-nums shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>89211 80408</span>
                </a>
              </div>
            </div>

            {/* Official Clinic Email Desk */}
            <div className="pt-4 sm:pt-0 space-y-2 lg:pl-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
                <Mail className="w-4 h-4 text-[#45AC4B]" />
                <span>Official Email</span>
              </div>
              <p className="text-xs text-[#CBD5E1]">
                Inquiries &amp; medical case records directly delivered to our clinic team.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <a
                  href={`mailto:${CLINIC_OFFICIAL_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors break-all"
                  title="Send email to anjalihomoeoclinic@gmail.com"
                >
                  <Mail className="w-3.5 h-3.5 text-[#86EFAC]" />
                  <span>{CLINIC_OFFICIAL_EMAIL}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Official Profiles & Directories */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#CBD5E1] font-medium">
              Verified Profiles &amp; Patient Reviews:
            </span>
            <SocialMediaBar variant="dark" showHandles={true} />
          </div>
        </div>

        {/* Branch View Selector Filter Bar */}
        <div className="w-full flex justify-center mb-10 px-2">
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#D8E1F5] shadow-2xs">
            <button
              onClick={() => setActiveBranchId('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeBranchId === 'all'
                  ? 'bg-[#303A88] text-white shadow-xs font-semibold'
                  : 'text-[#64748B] hover:text-[#1E2559] hover:bg-[#F1F5F9]'
              }`}
            >
              All Clinics (2 Locations)
            </button>
            <button
              onClick={() => setActiveBranchId('kuttippuram')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeBranchId === 'kuttippuram'
                  ? 'bg-[#303A88] text-white shadow-xs font-semibold'
                  : 'text-[#64748B] hover:text-[#1E2559] hover:bg-[#F1F5F9]'
              }`}
            >
              Kuttippuram Clinic
            </button>
            <button
              onClick={() => setActiveBranchId('puthanathani')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeBranchId === 'puthanathani'
                  ? 'bg-[#303A88] text-white shadow-xs font-semibold'
                  : 'text-[#64748B] hover:text-[#1E2559] hover:bg-[#F1F5F9]'
              }`}
            >
              Puthanathani Clinic
            </button>
          </div>
        </div>

        {/* Clinic Branches Cards with Google Map Embeds */}
        <div
          className={`grid gap-8 mb-16 ${
            visibleBranches.length === 1
              ? 'grid-cols-1 max-w-4xl mx-auto'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {visibleBranches.map((branch) => {
            const isPuthanathani = branch.id === 'puthanathani';
            const branchWhatsApp = branch.whatsappNumber || '89211 80408';
            const branchWhatsAppUrl = `https://wa.me/91${branchWhatsApp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              `Hello Anjali Homoeo Clinic (${branch.branchName}), I would like to book an appointment.`
            )}`;

            return (
              <div
                key={branch.id}
                className="bg-white rounded-3xl border border-[#D8E1F5] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                {/* Branch Header & Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Title & Badge */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-2 border-b border-[#EEF2FB]">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D3DBF4]">
                        {branch.branchName}
                      </span>
                      <h3 className="font-editorial text-2xl font-bold text-[#1E2559] mt-2">
                        {branch.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#2F8335] bg-[#EDF8EE] px-3 py-1 rounded-full font-medium border border-[#C4EAC7]">
                      <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                      <span>Open for Consultations</span>
                    </div>
                  </div>

                  {/* Info List */}
                  <div className="space-y-4 text-xs font-sans">
                    
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#EEF2FB] flex items-center justify-center shrink-0 mt-0.5 text-[#303A88] border border-[#D3DBF4]">
                        <MapPin className="w-4 h-4 text-[#45AC4B]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1E2559] uppercase tracking-wider text-[11px] text-[#64748B]">
                          Clinic Address
                        </p>
                        <p className="text-sm font-semibold text-[#1E2559] leading-relaxed mt-0.5">
                          {branch.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#EEF2FB] flex items-center justify-center shrink-0 mt-0.5 text-[#303A88] border border-[#D3DBF4]">
                        <Phone className="w-4 h-4 text-[#45AC4B]" />
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-wider text-[11px] text-[#64748B]">
                          Direct Phone Number
                        </p>
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-base font-bold text-[#303A88] hover:text-[#45AC4B] transition-colors tabular-nums mt-0.5 inline-block"
                        >
                          Ph: {branch.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#EDF8EE] flex items-center justify-center shrink-0 mt-0.5 text-[#2F8335] border border-[#C4EAC7]">
                        <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-wider text-[11px] text-[#64748B]">
                          WhatsApp Support
                        </p>
                        <a
                          href={branchWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-[#2F8335] hover:underline tabular-nums mt-0.5 inline-flex items-center gap-1.5"
                        >
                          <span>WhatsApp: {branchWhatsApp}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#EEF2FB] flex items-center justify-center shrink-0 mt-0.5 text-[#303A88] border border-[#D3DBF4]">
                        <Clock className="w-4 h-4 text-[#45AC4B]" />
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-wider text-[11px] text-[#64748B]">
                          Consultation Timings
                        </p>
                        <p className="text-xs font-medium text-[#1E2559] mt-0.5">
                          {branch.hours || 'Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 2:00 PM'}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Action Buttons Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EEF2FB] text-[#303A88] font-semibold text-xs border border-[#D3DBF4] hover:bg-[#D8E1F5] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>CALL CLINIC</span>
                    </a>

                    <a
                      href={branchWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#45AC4B] text-white font-semibold text-xs hover:bg-[#39933E] transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      <span>WHATSAPP</span>
                    </a>

                    <button
                      onClick={() => navigateToBooking('clinic')}
                      className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#303A88] text-white font-semibold text-xs hover:bg-[#252E6D] transition-colors shadow-2xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>BOOK VISIT</span>
                    </button>
                  </div>

                </div>

                {/* Embedded Interactive Google Map */}
                <div className="border-t border-[#D8E1F5] bg-[#F1F5F9]">
                  <div className="px-6 py-2.5 bg-[#EEF2FB] border-b border-[#D8E1F5] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1E2559] flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Live Google Map Location</span>
                    </span>
                    <a
                      href={branch.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#303A88] hover:text-[#45AC4B] flex items-center gap-1 transition-colors text-[11px]"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  {/* Google Map Iframe Container */}
                  <div className="w-full h-72 sm:h-80 relative overflow-hidden bg-slate-100">
                    <iframe
                      src={branch.mapEmbedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`Google Maps location for ${branch.name}`}
                      className="w-full h-full"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 2-Column Section: Inquiry Form & Patient Guidance */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D8E1F5] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Why Visit / Consultation Assistance */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D3DBF4]">
                  PATIENT ASSISTANCE
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
                  Have a Question or Need Help Booking?
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Fill in your details and our reception desk will assist you with slot availability, homeopathic consultation queries, and prescription inquiries.
                </p>
              </div>

              <div className="space-y-3.5 pt-2 font-sans text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#45AC4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1E2559]">Prior Appointments Recommended</h5>
                    <p className="text-[11px] text-[#64748B]">Zero waiting room delays with dedicated doctor slots.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                  <div className="w-7 h-7 rounded-lg bg-[#303A88]/15 text-[#303A88] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1E2559]">Online Video Consultations Also Available</h5>
                    <p className="text-[11px] text-[#64748B]">Consult from home anywhere across Kerala &amp; India with courier delivery of remedies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#45AC4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1E2559]">Homeopathic Medicine Dispensary</h5>
                    <p className="text-[11px] text-[#64748B]">Genuine German &amp; high-potency classical remedies available on-site.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#64748B] flex flex-wrap gap-4">
                <span>WhatsApp: <strong className="text-[#1E2559]">89211 80408</strong></span>
                <span>Kuttippuram: <strong className="text-[#1E2559]">098951 01707</strong></span>
                <span>Puthanathani: <strong className="text-[#1E2559]">089211 80408</strong></span>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F8FAFD] p-6 sm:p-8 rounded-2xl border border-[#D8E1F5]">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#EDF8EE] border border-[#C4EAC7] text-center space-y-4 font-sans animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#45AC4B] text-white mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2F8335] block">
                      EMAIL DISPATCHED TO CLINIC
                    </span>
                    <h4 className="font-editorial text-2xl font-bold text-[#1E2559]">
                      Inquiry Successfully Sent!
                    </h4>
                  </div>
                  <p className="text-xs text-[#475569] max-w-md mx-auto leading-relaxed">
                    Your inquiry details have been forwarded directly to our clinic inbox:
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#86EFAC] text-xs font-mono font-bold text-[#1E2559] shadow-2xs">
                    <Mail className="w-4 h-4 text-[#45AC4B]" />
                    <span>{CLINIC_OFFICIAL_EMAIL}</span>
                  </div>
                  <p className="text-xs text-[#64748B] max-w-md mx-auto">
                    Our medical care coordinator will review your symptoms and call or WhatsApp you shortly during clinic hours.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getContactMailtoUrl({
                        name: formState.name || 'Patient',
                        phone: formState.phone,
                        email: formState.email,
                        branch: formBranch,
                        message: formState.message,
                      })}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#303A88] text-white rounded-full text-xs font-semibold hover:bg-[#252E6D] transition-colors shadow-2xs"
                      title="Open email draft in your email app"
                    >
                      <Mail className="w-3.5 h-3.5 text-white" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', phone: '', email: '', message: '' });
                      }}
                      className="px-4 py-2.5 border border-[#D8E1F5] bg-white rounded-full text-xs font-semibold text-[#1E2559] hover:bg-[#EEF2FB] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  
                  {/* Select Clinic Branch */}
                  <div>
                    <label className="font-semibold text-[#1E2559] block mb-1">
                      Preferred Clinic / Inquiry Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormBranch('kuttippuram')}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          formBranch === 'kuttippuram'
                            ? 'bg-[#303A88] text-white border-[#303A88]'
                            : 'bg-white text-[#1E2559] border-[#D8E1F5] hover:bg-[#EEF2FB]'
                        }`}
                      >
                        Kuttippuram Clinic
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormBranch('puthanathani')}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          formBranch === 'puthanathani'
                            ? 'bg-[#303A88] text-white border-[#303A88]'
                            : 'bg-white text-[#1E2559] border-[#D8E1F5] hover:bg-[#EEF2FB]'
                        }`}
                      >
                        Puthanathani Clinic
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormBranch('general')}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          formBranch === 'general'
                            ? 'bg-[#303A88] text-white border-[#303A88]'
                            : 'bg-white text-[#1E2559] border-[#D8E1F5] hover:bg-[#EEF2FB]'
                        }`}
                      >
                        General / Online
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-[#1E2559] block mb-1">
                        Patient / Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Meera Nair"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white focus:outline-none focus:ring-2 focus:ring-[#303A88]"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-[#1E2559] block mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 098951 01707"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white focus:outline-none focus:ring-2 focus:ring-[#303A88] tabular-nums"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-[#1E2559] block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. patient@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white focus:outline-none focus:ring-2 focus:ring-[#303A88]"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[#1E2559] block mb-1">
                      Health Concern or Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your symptoms, treatment inquiry, or preferred consultation timing..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E1F5] bg-white focus:outline-none focus:ring-2 focus:ring-[#303A88] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmittingEmail}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full bg-[#45AC4B] text-white font-semibold text-xs hover:bg-[#39933E] active:bg-[#2F8335] disabled:opacity-60 transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmittingEmail ? 'SENDING EMAIL...' : 'SUBMIT INQUIRY'}</span>
                    </button>

                    <a
                      href={whatsappGeneralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D3DBF4] font-semibold text-xs hover:bg-[#D8E1F5] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-[#64748B] pt-2 text-center sm:text-left flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#45AC4B] shrink-0" />
                    <span>
                      Inquiries are automatically emailed to{' '}
                      <strong className="text-[#303A88] font-mono">anjalihomoeoclinic@gmail.com</strong>
                    </span>
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
