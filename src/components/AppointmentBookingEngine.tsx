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
    practitioners[0]?.id || 'dr-ananya'
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
  const [reasonForVisit, setReasonForVisit] = useState<string>('');
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
      `Sai Homeopathy Consultation (${apt.consultationType === 'online' ? 'Online' : 'In-Clinic'})`
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
    const whatsappMsg = `Hello Sai Homeopathy Clinic, I have booked appointment ref ${confirmedBooking.bookingReference} for ${confirmedBooking.preferredDate} at ${confirmedBooking.preferredTime}.`;
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      whatsappMsg
    )}`;

    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCEBDD] shadow-xl max-w-2xl mx-auto animate-in fade-in duration-300">
        
        {/* Success Header */}
        <div className="text-center space-y-3 pb-8 border-b border-[#DCEBDD]">
          <div className="w-16 h-16 rounded-full bg-[#EEF7EE] text-[#0B5D3B] mx-auto flex items-center justify-center shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5D3B]">
            CONFIRMATION COMPLETED
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#173A2A]">
            Appointment Request Confirmed
          </h3>
          <p className="text-sm text-[#5F6F65]">
            Thank you, {confirmedBooking.patientName}. Your appointment has been
            scheduled. A confirmation message has been queued.
          </p>
        </div>

        {/* Appointment Summary Box */}
        <div className="my-8 rounded-2xl bg-[#FCFBF6] p-6 border border-[#DCEBDD] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#DCEBDD]">
            <div>
              <span className="text-xs text-[#5F6F65] uppercase tracking-wider block">
                Booking Reference ID
              </span>
              <span className="font-mono text-base font-bold text-[#0B5D3B]">
                {confirmedBooking.bookingReference}
              </span>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF7EE] text-[#0B5D3B] border border-[#DCEBDD]">
              {isOnline ? 'Online Consultation' : 'In-Clinic Consultation'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs text-[#5F6F65] block">Date & Time</span>
              <span className="font-semibold text-[#173A2A]">
                {confirmedBooking.preferredDate} at {confirmedBooking.preferredTime}
              </span>
            </div>

            <div>
              <span className="text-xs text-[#5F6F65] block">Physician</span>
              <span className="font-semibold text-[#173A2A]">
                {confirmedBooking.practitionerName}
              </span>
            </div>

            <div>
              <span className="text-xs text-[#5F6F65] block">Patient Name</span>
              <span className="font-semibold text-[#173A2A]">
                {confirmedBooking.patientName}
              </span>
            </div>

            <div>
              <span className="text-xs text-[#5F6F65] block">Contact Phone</span>
              <span className="font-semibold text-[#173A2A] tabular-nums">
                {confirmedBooking.mobileNumber}
              </span>
            </div>
          </div>

          {/* Online vs Clinic Specific Action Card */}
          {isOnline ? (
            <div className="mt-4 pt-4 border-t border-[#DCEBDD] bg-[#EEF7EE] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-[#0B5D3B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#0B5D3B] uppercase tracking-wider block">
                    Your Video Meeting Link
                  </span>
                  <a
                    href={confirmedBooking.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#0B5D3B] hover:underline flex items-center gap-1.5 break-all"
                  >
                    <span>{confirmedBooking.meetingLink}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                  <p className="text-[11px] text-[#5F6F65]">
                    Please join 5 minutes before your scheduled slot. Link is also emailed.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 pt-4 border-t border-[#DCEBDD] bg-[#EEF7EE] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0B5D3B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#0B5D3B] uppercase tracking-wider block">
                    Clinic Address & Arrival Details
                  </span>
                  <p className="text-xs text-[#173A2A] font-medium leading-relaxed">
                    {settings.clinicName}, {settings.addressLine1}, {settings.addressLine2}, {settings.city} - {settings.pincode}
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B5D3B] hover:underline pt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: WhatsApp / Call / Calendar / Return */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B5D3B] text-white font-semibold text-xs hover:bg-[#145C3A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D8B45A]" />
              <span>WHATSAPP CLINIC</span>
            </a>

            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#DCEBDD] text-[#173A2A] font-semibold text-xs hover:bg-[#FCFBF6] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0B5D3B]" />
              <span>CALL CLINIC</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2">
            <a
              href={getGoogleCalendarUrl(confirmedBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#0B5D3B] hover:underline flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={handleReset}
              className="text-xs font-semibold text-[#5F6F65] hover:text-[#173A2A] underline"
            >
              Book Another Appointment
            </button>
          </div>

          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full mt-4 py-3 text-xs font-semibold text-[#5F6F65] hover:text-[#0B5D3B] border-t border-[#DCEBDD] text-center"
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
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCEBDD] shadow-xl max-w-3xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
          APPOINTMENT ENGINE
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173A2A]">
          Book Your Consultation
        </h3>
        <p className="text-sm text-[#5F6F65]">
          Select Online or In-Clinic, choose your date and time, and confirm your slot in 2 minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        
        {/* STEP 1: Appointment Type Toggle */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-[#173A2A] block mb-2.5">
            1. Select Consultation Mode *
          </label>
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#FCFBF6] rounded-2xl border border-[#DCEBDD]">
            <button
              type="button"
              onClick={() => setConsultationType('online')}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                consultationType === 'online'
                  ? 'bg-[#0B5D3B] text-white shadow-sm'
                  : 'text-[#173A2A] hover:bg-[#EEF7EE]'
              }`}
            >
              <Video className="w-4 h-4 text-[#D8B45A]" />
              <span>ONLINE CONSULTATION</span>
            </button>

            <button
              type="button"
              onClick={() => setConsultationType('clinic')}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                consultationType === 'clinic'
                  ? 'bg-[#0B5D3B] text-white shadow-sm'
                  : 'text-[#173A2A] hover:bg-[#EEF7EE]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#D8B45A]" />
              <span>CLINIC CONSULTATION</span>
            </button>
          </div>
        </div>

        {/* STEP 2: Doctor Selection */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-[#173A2A] block mb-2.5">
            2. Choose Physician *
          </label>
          <div className="p-3.5 rounded-2xl border border-[#DCEBDD] bg-[#FCFBF6] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B5D3B] text-white flex items-center justify-center font-editorial font-bold text-sm">
                AS
              </div>
              <div>
                <span className="text-sm font-bold text-[#173A2A] block">
                  {practitioners[0]?.name}
                </span>
                <span className="text-xs text-[#5F6F65]">
                  {practitioners[0]?.qualifications} · {practitioners[0]?.experienceYears}+ Years Exp.
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3 py-1 rounded-full">
              {consultationType === 'online' ? `₹${settings.onlineFee}` : `₹${settings.clinicFee}`}
            </span>
          </div>
        </div>

        {/* STEP 3 & 4: Date & Dynamic Available Time Slots */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Preferred Date */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#173A2A] block mb-1.5">
                3. Preferred Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={getTodayDate()}
                  max={getMaxDate()}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#DCEBDD] text-sm text-[#173A2A] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
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
            <div className="bg-[#FCFBF6] rounded-xl p-3 border border-[#DCEBDD] text-xs text-[#5F6F65] flex flex-col justify-center">
              <span className="font-bold text-[#173A2A] block mb-1">
                Consultation Timings:
              </span>
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
              <span>Sunday: 10:00 AM – 2:00 PM</span>
            </div>

          </div>

          {/* Time Slots Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#173A2A]">
                4. Select Available Slot *
              </label>
              <span className="text-[11px] text-[#0B5D3B] font-semibold tabular-nums">
                {availableSlots.length} slots available on this date
              </span>
            </div>

            {availableSlots.length === 0 ? (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 text-center">
                All slots for this date are currently booked. Please select another date.
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1.5 border border-[#DCEBDD] rounded-2xl bg-[#FCFBF6]">
                {availableSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors tabular-nums focus:outline-none ${
                        isSelected
                          ? 'bg-[#0B5D3B] text-white shadow-xs'
                          : 'bg-white hover:bg-[#EEF7EE] text-[#173A2A] border border-[#DCEBDD]/80'
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
        <div className="space-y-4 pt-2 border-t border-[#DCEBDD]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#173A2A] block">
            5. Patient Details
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-[#173A2A] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBDD] text-sm text-[#173A2A] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-medium text-[#173A2A] block mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 98450 12345"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBDD] text-sm text-[#173A2A] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] tabular-nums"
              />
              {errors.mobileNumber && (
                <p className="text-xs text-rose-600 mt-1">{errors.mobileNumber}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-[#173A2A] block mb-1">
              Email Address (For video link & appointment summary)
            </label>
            <input
              type="email"
              placeholder="e.g. yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBDD] text-sm text-[#173A2A] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-[#173A2A] block mb-1">
              Primary Health Concern / Reason for Consultation
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe your symptoms, duration, or any previous treatments..."
              value={reasonForVisit}
              onChange={(e) => setReasonForVisit(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#DCEBDD] text-sm text-[#173A2A] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] resize-none"
            />
          </div>

          {/* Optional Document Upload Simulator */}
          <div className="bg-[#FCFBF6] rounded-xl p-4 border border-[#DCEBDD]/80">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-[#173A2A] flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-[#0B5D3B]" />
                <span>Upload Previous Reports / Lab Results (Optional)</span>
              </label>
              {uploadedFileName && (
                <span className="text-[11px] text-emerald-700 font-semibold truncate max-w-xs">
                  ✓ {uploadedFileName}
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#5F6F65] mb-2.5">
              PDF or JPG files. Encrypted and accessible only by your treating homeopathic physician.
            </p>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              className="text-xs text-[#5F6F65] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#EEF7EE] file:text-[#0B5D3B] hover:file:bg-[#DCEBDD] cursor-pointer"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedConsent}
                onChange={(e) => setAgreedConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-[#0B5D3B] focus:ring-[#0B5D3B] accent-[#0B5D3B]"
              />
              <span className="text-xs text-[#5F6F65] leading-relaxed">
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
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
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
