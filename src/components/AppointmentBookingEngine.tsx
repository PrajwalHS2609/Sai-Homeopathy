import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { ConsultationType, Appointment } from '../types';
import {
  Video,
  Building2,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Share2,
} from 'lucide-react';

interface BookingEngineProps {
  initialType?: ConsultationType;
  onSuccess?: (appointment: Appointment) => void;
}

export const AppointmentBookingEngine: React.FC<BookingEngineProps> = ({
  initialType,
  onSuccess,
}) => {
  const {
    bookingTypePreset,
    bookingReasonPreset,
    practitioners,
    settings,
    bookAppointment,
    getAvailableSlots,
    setCurrentView,
  } = useClinic();

  // Consultation Type
  const [consultationType, setConsultationType] = useState<ConsultationType>(
    initialType || bookingTypePreset || 'online'
  );

  // Selected Practitioner
  const [practitionerId, setPractitionerId] = useState<string>(
    practitioners[0]?.id || 'dr-anjali'
  );

  // Helper: Format today as YYYY-MM-DD
  const getTodayDate = () => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 30); // 30 days ahead
    return d.toISOString().split('T')[0];
  };

  // Form State
  const [selectedDate, setSelectedDate] = useState<string>(getTodayDate());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [reasonForVisit, setReasonForVisit] = useState<string>(bookingReasonPreset || '');
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [agreedConsent, setAgreedConsent] = useState<boolean>(true);

  // Form Validation & Errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Appointment | null>(null);

  // Sync with preset if changed externally
  useEffect(() => {
    if (bookingTypePreset) {
      setConsultationType(bookingTypePreset);
    }
  }, [bookingTypePreset]);

  useEffect(() => {
    if (bookingReasonPreset) {
      setReasonForVisit(bookingReasonPreset);
    }
  }, [bookingReasonPreset]);

  // Compute available slots dynamically for selected date
  const availableSlots = getAvailableSlots(selectedDate, consultationType);

  // If currently selected time is not in available slots, reset selected time
  useEffect(() => {
    if (selectedTime && !availableSlots.includes(selectedTime)) {
      setSelectedTime(availableSlots[0] || '');
    } else if (!selectedTime && availableSlots.length > 0) {
      setSelectedTime(availableSlots[0]);
    }
  }, [selectedDate, consultationType, availableSlots]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid mobile number.';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!selectedDate) errs.selectedDate = 'Please select a date.';
    if (!selectedTime) errs.selectedTime = 'Please choose an available time slot.';
    if (!agreedConsent) errs.consent = 'You must agree to be contacted regarding your appointment.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const practitioner = practitioners.find((p) => p.id === practitionerId) || practitioners[0];

      const appointment = bookAppointment({
        patientName: fullName.trim(),
        mobileNumber: mobileNumber.trim(),
        email: email.trim(),
        consultationType,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
        practitionerId: practitioner.id,
        practitionerName: practitioner.name,
        reasonForVisit: reasonForVisit.trim() || 'General constitutional health consultation',
        uploadedDocumentName: uploadedFileName || undefined,
      });

      setConfirmedBooking(appointment);
      setIsSubmitting(false);
      if (onSuccess) onSuccess(appointment);
    }, 400);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFullName('');
    setMobileNumber('');
    setEmail('');
    setReasonForVisit('');
    setUploadedFileName('');
    setErrors({});
  };

  // Google Calendar Link generator
  const getGoogleCalendarUrl = (apt: Appointment) => {
    const dateFormatted = apt.preferredDate.replace(/-/g, '');
    const title = encodeURIComponent(
      `${settings.clinicName} Consultation (${apt.consultationType === 'online' ? 'Online' : 'In-Clinic'})`
    );
    const details = encodeURIComponent(
      `Booking Reference: ${apt.bookingReference}\nPractitioner: ${apt.practitionerName}\nPatient: ${apt.patientName}\n${
        apt.meetingLink ? `Meeting Link: ${apt.meetingLink}` : `Address: ${settings.addressLine1}, ${settings.city}`
      }`
    );
    const location = encodeURIComponent(
      apt.consultationType === 'online' ? (apt.meetingLink || 'Google Meet') : `${settings.addressLine1}, ${settings.city}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  // ----------------------------------------------------
  // CONFIRMATION SCREEN
  // ----------------------------------------------------
  if (confirmedBooking) {
    const isOnline = confirmedBooking.consultationType === 'online';
    const whatsappMsg = `Hello ${settings.clinicName}, I have booked appointment ref ${confirmedBooking.bookingReference} for ${confirmedBooking.preferredDate} at ${confirmedBooking.preferredTime}.`;
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      whatsappMsg
    )}`;

    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8E1F5] shadow-xl max-w-2xl mx-auto animate-in fade-in duration-300 font-sans">
        
        {/* Success Header */}
        <div className="text-center space-y-3 pb-8 border-b border-[#EEF2FB]">
          <div className="w-16 h-16 rounded-full bg-[#EDF8EE] text-[#45AC4B] mx-auto flex items-center justify-center shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#2F8335]">
            CONFIRMATION COMPLETED
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Appointment Request Confirmed
          </h3>
          <p className="text-sm text-[#64748B]">
            Thank you, {confirmedBooking.patientName}. Your appointment has been
            scheduled. A confirmation message has been queued.
          </p>
        </div>

        {/* Appointment Summary Box */}
        <div className="my-8 rounded-2xl bg-[#F8FAFD] p-6 border border-[#D8E1F5] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#EEF2FB]">
            <div>
              <span className="text-xs text-[#64748B] uppercase tracking-wider block">
                Booking Reference ID
              </span>
              <span className="font-mono text-base font-bold text-[#303A88]">
                {confirmedBooking.bookingReference}
              </span>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D3DBF4]">
              {isOnline ? 'Online Consultation' : 'In-Clinic Consultation'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs text-[#64748B] block">Date & Time</span>
              <span className="font-semibold text-[#1E2559]">
                {confirmedBooking.preferredDate} at {confirmedBooking.preferredTime}
              </span>
            </div>

            <div>
              <span className="text-xs text-[#64748B] block">Physician</span>
              <span className="font-semibold text-[#1E2559]">
                {confirmedBooking.practitionerName}
              </span>
            </div>

            <div>
              <span className="text-xs text-[#64748B] block">Patient Name</span>
              <span className="font-semibold text-[#1E2559]">
                {confirmedBooking.patientName}
              </span>
            </div>

            <div>
              <span className="text-xs text-[#64748B] block">Contact Phone</span>
              <span className="font-semibold text-[#1E2559] tabular-nums">
                {confirmedBooking.mobileNumber}
              </span>
            </div>
          </div>

          {/* Online vs Clinic Specific Action Card */}
          {isOnline ? (
            <div className="mt-4 pt-4 border-t border-[#D8E1F5] bg-[#EEF2FB] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#303A88] uppercase tracking-wider block">
                    Your Video Meeting Link
                  </span>
                  <a
                    href={confirmedBooking.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#303A88] hover:underline flex items-center gap-1.5 break-all"
                  >
                    <span>{confirmedBooking.meetingLink}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                  <p className="text-[11px] text-[#64748B]">
                    Please join 5 minutes before your scheduled slot. Link is also emailed.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 pt-4 border-t border-[#D8E1F5] bg-[#EDF8EE] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#45AC4B] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#2A7B2F] uppercase tracking-wider block">
                    Clinic Locations in Kerala
                  </span>
                  <div className="text-xs text-[#1E2559] space-y-1.5">
                    <div>
                      <strong className="block text-[#1E2559]">1. Kuttippuram Clinic:</strong>
                      <span className="text-[#475569]">Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Keralam 679571 (Ph: 098951 01707)</span>
                    </div>
                    <div>
                      <strong className="block text-[#1E2559]">2. Puthanathani Clinic:</strong>
                      <span className="text-[#475569]">Chembayil complex, opp. Thavakkal gold, Puthanathani, Kurumbathur, Keralam 676552 (Ph: 089211 80408)</span>
                    </div>
                  </div>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <span className="text-[11px] text-[#2A7B2F] font-semibold">
                      WhatsApp: 89211 80408
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: WhatsApp / Call / Calendar / Return */}
        <div className="space-y-3 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#45AC4B] text-white font-semibold text-xs hover:bg-[#39933E] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WHATSAPP CLINIC</span>
            </a>

            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#D8E1F5] text-[#1E2559] font-semibold text-xs hover:bg-[#F8FAFD] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#303A88]" />
              <span>CALL CLINIC</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2">
            <a
              href={getGoogleCalendarUrl(confirmedBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#303A88] hover:text-[#45AC4B] hover:underline flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={handleReset}
              className="text-xs font-semibold text-[#64748B] hover:text-[#1E2559] underline"
            >
              Book Another Appointment
            </button>
          </div>

          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full mt-4 py-3 text-xs font-semibold text-[#64748B] hover:text-[#303A88] border-t border-[#EEF2FB] text-center"
          >
            ← Return to Homepage
          </button>
        </div>

      </div>
    );
  }

  // ----------------------------------------------------
  // BOOKING FORM
  // ----------------------------------------------------
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8E1F5] shadow-xl max-w-3xl mx-auto font-sans">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-8 font-sans">
        <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4]">
          APPOINTMENT ENGINE
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559]">
          Book Your Consultation
        </h3>
        <p className="text-sm text-[#64748B]">
          Select Online or In-Clinic, choose your date and time, and confirm your slot in 2 minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7 font-sans">
        
        {/* STEP 1: Appointment Type Toggle */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-[#1E2559] block mb-2.5">
            1. Select Consultation Mode *
          </label>
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#F8FAFD] rounded-2xl border border-[#D8E1F5]">
            <button
              type="button"
              onClick={() => setConsultationType('online')}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                consultationType === 'online'
                  ? 'bg-[#303A88] text-white shadow-sm'
                  : 'text-[#1E2559] hover:bg-[#EEF2FB]'
              }`}
            >
              <Video className="w-4 h-4 text-[#45AC4B]" />
              <span>ONLINE CONSULTATION</span>
            </button>

            <button
              type="button"
              onClick={() => setConsultationType('clinic')}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                consultationType === 'clinic'
                  ? 'bg-[#303A88] text-white shadow-sm'
                  : 'text-[#1E2559] hover:bg-[#EEF2FB]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#45AC4B]" />
              <span>CLINIC CONSULTATION</span>
            </button>
          </div>
        </div>

        {/* STEP 2: Doctor Selection */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-[#1E2559] block mb-2.5">
            2. Choose Physician *
          </label>
          <div className="p-3.5 rounded-2xl border border-[#D8E1F5] bg-[#F8FAFD] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#303A88] text-white flex items-center justify-center font-editorial font-bold text-sm">
                AC
              </div>
              <div>
                <span className="text-sm font-bold text-[#1E2559] block">
                  {practitioners[0]?.name}
                </span>
                <span className="text-xs text-[#64748B]">
                  {practitioners[0]?.qualifications} · {practitioners[0]?.experienceYears}+ Years Exp.
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D3DBF4]">
              {consultationType === 'online' ? `₹${settings.onlineFee}` : `₹${settings.clinicFee}`}
            </span>
          </div>
        </div>

        {/* STEP 3 & 4: Date & Dynamic Available Time Slots */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Preferred Date */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#1E2559] block mb-1.5">
                3. Preferred Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={getTodayDate()}
                  max={getMaxDate()}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8E1F5] text-sm text-[#1E2559] bg-white focus:outline-none focus:ring-2 focus:ring-[#303A88]"
                />
              </div>
              {errors.selectedDate && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.selectedDate}</span>
                </p>
              )}
            </div>

            {/* Timings Context */}
            <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#D8E1F5] text-xs text-[#64748B] flex flex-col justify-center">
              <span className="font-bold text-[#1E2559] block mb-1">
                Consultation Timings:
              </span>
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
              <span className="text-[#2F8335] font-medium">Sunday: 10:00 AM – 2:00 PM</span>
            </div>

          </div>

          {/* Time Slots Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#1E2559]">
                4. Select Available Slot *
              </label>
              <span className="text-[11px] text-[#2F8335] font-semibold tabular-nums">
                {availableSlots.length} slots available on this date
              </span>
            </div>

            {availableSlots.length === 0 ? (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 text-center">
                All slots for this date are currently booked. Please select another date.
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1.5 border border-[#D8E1F5] rounded-2xl bg-[#F8FAFD]">
                {availableSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors tabular-nums focus:outline-none ${
                        isSelected
                          ? 'bg-[#45AC4B] text-white shadow-xs'
                          : 'bg-white hover:bg-[#EEF2FB] text-[#1E2559] border border-[#D8E1F5]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            )}
            {errors.selectedTime && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.selectedTime}</span>
              </p>
            )}
          </div>
        </div>

        {/* STEP 5: Patient Details Form */}
        <div className="space-y-4 pt-2 border-t border-[#EEF2FB]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E2559] block">
            5. Patient Details
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-[#1E2559] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8E1F5] text-sm text-[#1E2559] focus:outline-none focus:ring-2 focus:ring-[#303A88]"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-medium text-[#1E2559] block mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98450 12345"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8E1F5] text-sm text-[#1E2559] focus:outline-none focus:ring-2 focus:ring-[#303A88] tabular-nums"
              />
              {errors.mobileNumber && (
                <p className="text-xs text-rose-600 mt-1">{errors.mobileNumber}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-[#1E2559] block mb-1">
              Email Address (For video link & appointment summary)
            </label>
            <input
              type="email"
              placeholder="e.g. yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8E1F5] text-sm text-[#1E2559] focus:outline-none focus:ring-2 focus:ring-[#303A88]"
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-[#1E2559] block mb-1">
              Primary Health Concern / Reason for Consultation
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe your symptoms, duration, or any previous treatments..."
              value={reasonForVisit}
              onChange={(e) => setReasonForVisit(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8E1F5] text-sm text-[#1E2559] focus:outline-none focus:ring-2 focus:ring-[#303A88] resize-none"
            />
          </div>

          {/* Optional Document Upload Simulator */}
          <div className="bg-[#F8FAFD] rounded-xl p-4 border border-[#D8E1F5]">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-[#1E2559] flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-[#303A88]" />
                <span>Upload Previous Reports / Lab Results (Optional)</span>
              </label>
              {uploadedFileName && (
                <span className="text-[11px] text-[#2F8335] font-semibold truncate max-w-xs">
                  ✓ {uploadedFileName}
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#64748B] mb-2.5">
              PDF or JPG files. Encrypted and accessible only by your treating homeopathic physician.
            </p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              className="text-xs text-[#64748B] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#EDF8EE] file:text-[#2F8335] hover:file:bg-[#C4EAC7] cursor-pointer"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedConsent}
                onChange={(e) => setAgreedConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-[#45AC4B] focus:ring-[#45AC4B] accent-[#45AC4B]"
              />
              <span className="text-xs text-[#64748B] leading-relaxed">
                I agree to be contacted via WhatsApp, phone, or email regarding my appointment confirmation, meeting link, and follow-up guidance.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-rose-600 mt-1">{errors.consent}</p>
            )}
          </div>
        </div>

        {/* Submit Primary CTA */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || availableSlots.length === 0}
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45AC4B]"
          >
            {isSubmitting ? (
              <span>Confirming Appointment Slot...</span>
            ) : (
              <>
                <span>
                  CONFIRM {consultationType === 'online' ? 'ONLINE' : 'IN-CLINIC'} APPOINTMENT
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>

      </form>

    </div>
  );
};
