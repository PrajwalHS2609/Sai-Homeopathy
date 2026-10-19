import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import { EYE_CONDITIONS } from '../data/conditions/eyeConditions';
import {
  Eye,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Award,
  UserCheck,
  FileText,
  HelpCircle,
  Stethoscope,
  Info,
  ChevronRight,
  Maximize2,
  X,
  Sliders,
  Check,
  ShieldAlert,
  Zap,
  Activity,
  Heart,
  Sparkles,
  RefreshCw,
  Droplets,
  Layers,
  Compass,
} from 'lucide-react';

export const OphthalmicEyeCarePage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Interactive Assessment Tool state
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [assessmentGenerated, setAssessmentGenerated] = useState(false);

  // Clinic direct contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';

  // WhatsApp query link
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Dr. Anjali, I would like to enquire about homeopathic consultation for Ophthalmic & Eye Conditions."
  )}`;

  // Scroll to top on mount, and track scroll for mobile dock
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookConsultation = (specificReason?: string) => {
    navigateToBookingWithReason(
      specificReason || "Ophthalmic & Eye Conditions",
      'online'
    );
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Subcategory list matching user requested 3 conditions
  const subCategoryList = [
    { id: 'conjunctivitis', name: 'Conjunctivitis', tag: 'Allergic, Viral & Bacterial Red Eye' },
    { id: 'elevated-eye-pressure', name: 'Elevated Eye Pressure', tag: 'Ocular Hypertension & Trabecular Dynamics' },
    { id: 'glaucoma', name: 'Glaucoma', tag: 'Optic Nerve Preservation & Co-Management' },
  ];

  const allConditions = EYE_CONDITIONS;

  // Filter conditions based on selected tab
  const filteredConditions = () => {
    if (activeTab === 'all') return allConditions;
    return allConditions.filter((c) => c.id === activeTab);
  };

  // Assessment tool symptom choices
  const symptomOptions = [
    { id: 'ocular_redness_gritty', label: 'Bilateral pinkness, foreign body grittiness, intense itching, and burning in eyes (Allergic Conjunctivitis)' },
    { id: 'sticky_morning_crusting', label: 'Eyelids glued shut upon waking with thick yellowish/greenish crusting or discharge (Bacterial Conjunctivitis)' },
    { id: 'watery_photophobia', label: 'Profuse watery burning tearing, sensitivity to light, and tender lymph nodes in front of ears (Viral Conjunctivitis)' },
    { id: 'elevated_iop_reading', label: 'Recorded Intraocular Pressure (IOP) consistently measuring above 21 mmHg on non-contact or applanation tonometry' },
    { id: 'colored_rainbow_halos', label: 'Seeing colored rainbow halos or glare rings around electric bulbs or street lamps at night' },
    { id: 'tunnel_vision_peripheral', label: 'Gradual loss of side/peripheral vision or difficulty noticing objects off to the side (Glaucoma suspect)' },
    { id: 'deep_orbital_ache', label: 'Dull, throbbing ache behind the eyeballs aggravated by prolonged computer work, reading, or mental stress' },
    { id: 'dryness_screen_fatigue', label: 'Dry, tired, gritty eyes with fluctuating blurry vision after long hours on digital screens or in AC rooms' },
  ];

  // Assessment tool trigger choices
  const triggerOptions = [
    { id: 'seasonal_pollen_dust', label: 'Seasonal pollen surges, indoor house dust mites, mold spores, or pet dander exposure' },
    { id: 'family_glaucoma_history', label: 'Family history of primary open-angle glaucoma in parents, grandparents, or siblings' },
    { id: 'prolonged_screen_time', label: 'Heavy daily computer, smartphone, or tablet screen exposure (> 6–8 hours/day)' },
    { id: 'systemic_steroid_use', label: 'History of oral, nasal, or topical steroid use, diabetes mellitus, or chronic hypertension' },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setAssessmentGenerated(false);
  };

  const toggleTrigger = (id: string) => {
    setSelectedTriggers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setAssessmentGenerated(false);
  };

  const faqs = [
    {
      question: 'Are homeopathic eye medicines instilled directly as eye drops?',
      answer:
        'No, absolutely never. Homeopathic treatment is administered internally in the form of oral medicated globules, dilutions, or bio-chemic tissue salts. Never introduce unverified, non-sterile liquids into the eyes, as doing so carries a high risk of bacterial or fungal keratitis and permanent corneal scarring. Internal constitutional remedies work systemically to modulate mucous membrane reactivity, improve tear film stability, reduce vascular engorgement, and balance aqueous humor micro-circulation.',
    },
    {
      question: 'How is allergic conjunctivitis differentiated from viral or bacterial pink eye?',
      answer:
        'Allergic conjunctivitis is typically bilateral, marked by intense, distressing pruritus (itching), stringy watery discharge, and swollen conjunctival chemosis, often accompanied by allergic rhinitis or sneezing. Viral conjunctivitis (often adenoviral) begins in one eye before spreading to the other, presenting with watery discharge, burning, and preauricular lymph node enlargement. Bacterial conjunctivitis features copious yellow-green purulent discharge that glues the eyelids together upon waking in the morning.',
    },
    {
      question: 'What is Ocular Hypertension, and how does it relate to Glaucoma?',
      answer:
        'Ocular hypertension refers to intraocular pressure (IOP) that consistently measures higher than normal (> 21 mmHg on tonometry), but without detectable damage to the optic nerve or loss of visual field. It represents the single most critical modifiable risk factor for developing glaucoma. While not every patient with ocular hypertension develops glaucoma, careful monitoring and constitutional co-care help optimize ocular microvascular perfusion and trabecular meshwork drainage.',
    },
    {
      question: 'Can homeopathy cure Glaucoma or replace prescribed pressure-lowering eye drops?',
      answer:
        'No. Glaucoma is a progressive optic neuropathy that can lead to irreversible blindness if intraocular pressure is left uncontrolled. Patients must NEVER discontinue their prescribed ophthalmic hypotensive eye drops (such as prostaglandin analogs or beta-blockers). Constitutional homeopathy acts as an integrative supportive modality: improving microvascular blood flow to the optic nerve head, reducing ocular asthenopia, and mitigating systemic stress. Routine slit-lamp tonometry and Humphrey visual field tests with an ophthalmologist remain mandatory.',
    },
    {
      question: 'What are the emergency warning signs that require immediate hospital eye casualty?',
      answer:
        'Acute Angle-Closure Glaucoma is a medical emergency. Symptoms include sudden, agonizing eye and head pain, severe nausea and vomiting, steamy or cloudy cornea, a fixed mid-dilated pupil, and dramatic vision loss with colored halos around lights. In addition, any corneal ulcer (white spot on the colored part of the eye) or sudden loss of vision requires emergency ophthalmology intervention within hours to prevent permanent blindness.',
    },
    {
      question: 'How does digital eye strain (Computer Vision Syndrome) aggravate ocular symptoms?',
      answer:
        'When staring at digital screens, the human blink rate drops from an average of 15–20 blinks per minute down to only 5–7 blinks per minute. This causes the tear film to evaporate rapidly, exposing the delicate corneal epithelium to dry air and triggering grittiness, redness, and reflex tearing. Remedies like Euphrasia and Ruta Graveolens, alongside the 20-20-20 visual hygiene rule, provide profound natural comfort.',
    },
    {
      question: 'What reports should I bring for an ophthalmic consultation at Anjali Homeo Clinic?',
      answer:
        'Please bring recent ophthalmology clinic records, including your baseline Intraocular Pressure (IOP) tonometry values, Pachymetry (corneal thickness), Optical Coherence Tomography (OCT) of the retinal nerve fiber layer (RNFL), and Humphrey Visual Field (HVF) perimetry reports.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] font-sans pb-24 lg:pb-0">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'MedicalWebPage',
                '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/#webpage',
                url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
                name: 'Eye Care Homeopathic Consultation in Malappuram',
                description:
                  'Explore eye health consultations at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about common eye concerns, symptoms and appropriate healthcare options.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://anjalihomoeoclinic.com/#website',
                  name: 'Anjali Homoeo Clinic',
                  url: 'https://anjalihomoeoclinic.com',
                },
                about: {
                  '@type': 'MedicalSpecialty',
                  name: 'Homeopathic Ophthalmology & Ocular Wellness',
                },
                audience: {
                  '@type': 'Patient',
                  audienceType:
                    'Patients suffering from recurrent conjunctivitis, allergic eye itching, elevated intraocular pressure, ocular hypertension, or diagnosed glaucoma seeking supportive care',
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://anjalihomoeoclinic.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Treatments',
                    item: 'https://anjalihomoeoclinic.com/#treatments',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Eye Care Homeopathic Consultation in Malappuram',
                    item: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-ophthalmic-eye-conditions/',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumbs" className="bg-[#EEF2FB] border-b border-[#D8E1F5] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#5F6F65]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#303A88] font-medium transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <button
              onClick={() => {
                setCurrentView('treatments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#303A88] font-medium transition-colors"
            >
              Treatments
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="text-[#303A88] font-bold">Ophthalmic / Eye Conditions</span>
          </div>

          <button
            onClick={() => {
              setCurrentView('treatments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-1 text-[#303A88] hover:text-[#45AC4B] font-semibold transition-colors"
          >
            <span>All Specialties</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#EEF2FB] via-white to-[#F8FAFD] border-b border-[#D8E1F5] pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284C7]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#303A88]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Heading, Clinical Summary, Badges & CTAs */}
            <div className="lg:col-span-7">
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] shadow-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-4">
                <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Specialized Clinical Discipline • Homeopathic Ophthalmology &amp; Ocular Wellness</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-[1.15] tracking-tight">
                Homoeopathic Treatment for Ophthalmic &amp; Eye Conditions
              </h1>

              {/* Lead Narrative */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Evidence-informed, constitutional homeopathic care for recurrent Conjunctivitis (Pink Eye), Elevated Eye Pressure (Ocular Hypertension), and supportive co-management for Glaucoma. Dr. Anjali Chandrasekhar delivers individualized constitutional protocols designed to calm ocular mucosal inflammation, support trabecular aqueous dynamics, and protect sensitive optic nerve fibers alongside standard ophthalmological monitoring.
              </p>

              {/* Key Clinical Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-[#1E2559]">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>Mucosal Soothing</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Activity className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>IOP Pressure Stability</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Optic Nerve Shield</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Droplets className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Tear Film Balance</span>
                </div>
              </div>

              {/* CTA Section - Exactly matching standard service page CTA */}
              <div className="mt-8 space-y-4">
                {/* Main CTA Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                  
                  {/* Primary CTA: Book Eye Consultation */}
                  <button
                    onClick={() => handleBookConsultation()}
                    className="sm:col-span-7 group relative inline-flex items-center justify-between gap-3 bg-gradient-to-r from-[#303A88] via-[#2A3478] to-[#1E2559] hover:from-[#252E6D] hover:to-[#171D47] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-[#38BDF8]" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                          Book Eye Consultation
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#D8E1F5] font-normal">
                          Online Video or In-Clinic Slot • Instant Confirm
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#38BDF8] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                  {/* WhatsApp CTA: Enquire via WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:col-span-5 group relative inline-flex items-center justify-between sm:justify-start gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BD5A] hover:to-[#0E776B] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.99] border border-white/25"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 border border-white/30 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                        Enquire via WhatsApp
                      </div>
                      <div className="text-[11px] sm:text-xs text-white/90 font-normal">
                        Quick Reply within 15 mins
                      </div>
                    </div>
                  </a>
                </div>

                {/* Secondary Row: Direct Phone Line 0989101707 + Kuttippuram Clinic Line */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D8E1F5] shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] flex items-center justify-center shrink-0 text-[#303A88] border border-[#D8E1F5]">
                      <Phone className="w-4 h-4 text-[#45AC4B]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                        <span>Direct Doctor Consultation Desk:</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={`tel:${phonePrimary}`}
                          className="font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#303A88] tracking-tight transition-colors"
                          title="Call 0989101707"
                        >
                          {phonePrimary}
                        </a>
                        <span className="text-[#94A3B8] text-xs">|</span>
                        <a
                          href={`tel:09895101707`}
                          className="text-xs font-semibold text-[#475569] hover:text-[#303A88] transition-colors"
                          title="Call Kuttippuram Clinic: 098951 01707"
                        >
                          Kuttippuram: <span className="text-[#1E2559] font-bold">{phoneSecondary}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:${phonePrimary}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#EEF2FB] hover:bg-[#303A88] text-[#303A88] hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now ({phonePrimary})</span>
                  </a>
                </div>

                {/* Trust Reassurance Strip */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] pt-1 px-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>Slit-Lamp &amp; Tonometry Informed Protocol</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Mon–Sat: 9 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Doctor Card Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/10 rounded-bl-full pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Treatment Protocol Artwork with Click-to-Zoom */}
                  <div className="relative mb-4 cursor-pointer" onClick={() => setIsPhotoModalOpen(true)}>
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-3 border-white shadow-lg ring-4 ring-[#EEF2FB] group-hover:ring-[#303A88]/20 transition-all bg-white">
                      <img
                        src="/images/treatment-ophthalmic-eye.svg"
                        alt="Ophthalmic & Eye Conditions Clinical Treatment Protocol"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <button
                      type="button"
                      aria-label="Enlarge portrait"
                      className="absolute bottom-1 right-1 p-1.5 bg-[#1E2559]/80 hover:bg-[#1E2559] text-white rounded-lg shadow backdrop-blur-xs transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Doctor Details */}
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EDF8EE] text-[#2F8335] text-[11px] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Certified Homeopathic Physician</span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E2559]">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#303A88]">
                      BHMS • Kerala State Medical Registration No. 16503
                    </p>
                    <p className="text-xs text-[#64748B] max-w-xs mt-1">
                      10+ Years Clinical Practice • 12,500+ Patients Treated • Special Focus on Ocular Mucosal Allergies &amp; Chronic Conditions
                    </p>
                  </div>

                  {/* Highlights Strip */}
                  <div className="w-full grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-[#EEF2FB] text-center">
                    <div className="p-2 rounded-xl bg-[#F8FAFD] border border-[#EEF2FB]">
                      <div className="text-base font-bold text-[#303A88]">10+ Yrs</div>
                      <div className="text-[10px] text-[#64748B]">Experience</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F8FAFD] border border-[#EEF2FB]">
                      <div className="text-base font-bold text-[#45AC4B]">12,500+</div>
                      <div className="text-[10px] text-[#64748B]">Consultations</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#F8FAFD] border border-[#EEF2FB]">
                      <div className="text-base font-bold text-[#0284C7]">Internal</div>
                      <div className="text-[10px] text-[#64748B]">Safe Remedies</div>
                    </div>
                  </div>

                  {/* Action on Doctor Card */}
                  <button
                    onClick={() => handleBookConsultation("Consultation with Dr. Anjali Chandrasekhar for Eye Care")}
                    className="w-full mt-5 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#303A88] hover:bg-[#252E6D] text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <UserCheck className="w-4 h-4 text-[#38BDF8]" />
                    <span>Book Direct Session with Dr. Anjali</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Sub-Category Tabs Navigation */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#D8E1F5] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-[#303A88] text-white shadow-xs'
                  : 'bg-[#F4F7FD] text-[#475569] hover:bg-[#EEF2FB] hover:text-[#303A88]'
              }`}
            >
              All 3 Sub-Categories
            </button>
            {subCategoryList.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-[#303A88] text-white shadow-xs'
                    : 'bg-[#F4F7FD] text-[#475569] hover:bg-[#EEF2FB] hover:text-[#303A88]'
                }`}
              >
                <span>{tab.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#D8E1F5] text-[#303A88]'
                  }`}
                >
                  Clinical
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Consultation Tool: Ophthalmic & Vision Health Assessment */}
      <section className="py-12 bg-gradient-to-r from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EEF2FB]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Interactive Clinical Assessment</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1E2559]">
                  Ophthalmic &amp; Ocular Pressure Symptom Self-Check
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Select your experienced ocular sensations, vision changes, and risk factors below to generate an instant clinical analysis and tailored homeopathic consultation outline.
                </p>
              </div>

              {(selectedSymptoms.length > 0 || selectedTriggers.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedSymptoms([]);
                    setSelectedTriggers([]);
                    setAssessmentGenerated(false);
                  }}
                  className="inline-flex items-center gap-1 text-xs text-[#E11D48] hover:underline self-start sm:self-auto font-medium"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Step 1: Symptoms Checklist */}
            <div className="mt-6">
              <h3 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#303A88] text-white flex items-center justify-center text-[11px]">1</span>
                <span>Select Your Key Ocular Symptoms:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {symptomOptions.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <button
                      key={sym.id}
                      type="button"
                      onClick={() => toggleSymptom(sym.id)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-[#EEF2FB] border-[#303A88] text-[#1E2559] font-medium shadow-2xs'
                          : 'bg-[#F8FAFD] border-[#D8E1F5] text-[#475569] hover:bg-white hover:border-[#303A88]/40'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#303A88] text-white' : 'border border-[#CBD5E1] bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{sym.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Risk Factors Checklist */}
            <div className="mt-6 pt-6 border-t border-[#EEF2FB]">
              <h3 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#303A88] text-white flex items-center justify-center text-[11px]">2</span>
                <span>Select Relevant Environmental or Medical Risk Factors:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {triggerOptions.map((trig) => {
                  const isChecked = selectedTriggers.includes(trig.id);
                  return (
                    <button
                      key={trig.id}
                      type="button"
                      onClick={() => toggleTrigger(trig.id)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-[#EDF8EE] border-[#45AC4B] text-[#1E2559] font-medium shadow-2xs'
                          : 'bg-[#F8FAFD] border-[#D8E1F5] text-[#475569] hover:bg-white hover:border-[#45AC4B]/40'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#45AC4B] text-white' : 'border border-[#CBD5E1] bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{trig.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate Button or Result Display */}
            <div className="mt-8 pt-6 border-t border-[#EEF2FB] flex flex-col items-center">
              {!assessmentGenerated ? (
                <button
                  disabled={selectedSymptoms.length === 0 && selectedTriggers.length === 0}
                  onClick={() => setAssessmentGenerated(true)}
                  className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                    selectedSymptoms.length > 0 || selectedTriggers.length > 0
                      ? 'bg-[#303A88] hover:bg-[#252E6D] text-white cursor-pointer active:scale-98'
                      : 'bg-[#CBD5E1] text-[#64748B] cursor-not-allowed'
                  }`}
                >
                  <Activity className="w-4 h-4 text-[#38BDF8]" />
                  <span>Generate Ophthalmic Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="w-full bg-[#F4F7FD] rounded-2xl p-5 sm:p-6 border border-[#D8E1F5] animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#303A88] mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#45AC4B]" />
                    <span>Clinical Ophthalmic Evaluation Summary</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    Based on your selected indicators (
                    <span className="font-semibold text-[#1E2559]">
                      {selectedSymptoms.length} symptom{selectedSymptoms.length === 1 ? '' : 's'},{' '}
                      {selectedTriggers.length} risk factor{selectedTriggers.length === 1 ? '' : 's'}
                    </span>
                    ), here is Dr. Anjali’s clinical perspective:
                  </p>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {selectedSymptoms.some((s) => s.includes('redness') || s.includes('crusting') || s.includes('photophobia')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>Active Conjunctival Inflammation</span>
                        </div>
                        <p className="text-[#64748B]">
                          Presentation suggests allergic or infectious conjunctivitis. Maintain strict towel separation and refrain from eye rubbing. Indicated internal remedies like <em>Euphrasia</em>, <em>Argentum Nitricum</em>, or <em>Pulsatilla</em> soothe mucous membranes.
                        </p>
                      </div>
                    )}

                    {selectedSymptoms.some((s) => s.includes('iop') || s.includes('halos')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>Elevated IOP / Glaucoma Risk Indicators</span>
                        </div>
                        <p className="text-[#64748B]">
                          Reported IOP &gt; 21 mmHg or rainbow halos warrant routine Goldmann applanation tonometry. Homeopathic supportive therapy focuses on ocular microcirculation while maintaining standard ophthalmic oversight.
                        </p>
                      </div>
                    )}

                    {selectedSymptoms.some((s) => s.includes('tunnel') || s.includes('deep_orbital')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-[#E11D48]" />
                          <span>Optic Nerve &amp; Visual Field Vigilance</span>
                        </div>
                        <p className="text-[#64748B]">
                          Peripheral visual changes necessitate urgent Humphrey perimetry and OCT RNFL imaging. Remedies like <em>Gelsemium</em> and <em>Physostigma</em> are considered strictly in supportive coordination with eye specialists.
                        </p>
                      </div>
                    )}

                    {selectedSymptoms.some((s) => s.includes('dryness') || s.includes('screen')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <Droplets className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>Digital Asthenopia &amp; Tear Film Evaporation</span>
                        </div>
                        <p className="text-[#64748B]">
                          Screen-induced blink reduction causing dry ocular surface. Implement 20-20-20 visual rest breaks, meibomian warm compresses, and remedies like <em>Ruta Graveolens</em> for ciliary muscle strain.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#D8E1F5] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-[#64748B]">
                      Discuss your complete ophthalmic history and tonometry records with Dr. Anjali:
                    </span>
                    <button
                      onClick={() => handleBookConsultation("Ophthalmic Case Review with Dr. Anjali")}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation With This Profile</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Detailed Clinical Treatment Cards for All 3 Subcategories */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88] font-sans">
            DEEP CLINICAL COMPENDIUM
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
            Detailed Diagnostic &amp; Homeopathic Treatment Profiles
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2">
            Comprehensive medical overview, clinical diagnostic criteria, non-invasive constitutional targets, and emergency red flags for each condition.
          </p>
        </div>

        {filteredConditions().map((condition) => (
          <article
            key={condition.id}
            id={condition.id}
            className="bg-white rounded-3xl border border-[#D8E1F5] shadow-md hover:shadow-lg transition-all overflow-hidden scroll-mt-28"
          >
            {/* Condition Header Bar */}
            <div className="bg-gradient-to-r from-[#EEF2FB] to-white p-6 sm:p-8 border-b border-[#D8E1F5] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#303A88] text-white text-xs font-bold uppercase tracking-wider">
                    {condition.categoryName}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B]">{condition.bodySystem}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E2559]">
                  {condition.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0284C7] mt-0.5">
                  {condition.commonName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleBookConsultation(`Consultation for ${condition.name}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book for {condition.name}</span>
                </button>
              </div>
            </div>

            {/* Condition Body Details */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Overview & Key Clinical Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#0284C7]" />
                  <span>Clinical Overview &amp; Ocular Physiology</span>
                </h4>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {condition.overview}
                </p>
                {condition.overviewPoints && condition.overviewPoints.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {condition.overviewPoints.map((pt, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#F8FAFD] border border-[#EEF2FB] text-xs text-[#475569] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Grid: Symptoms vs Causes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Symptoms */}
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#EEF2FB] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#E11D48]" />
                    <span>Characteristic Symptoms &amp; Signs</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                    {condition.commonSymptoms.map((sym, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-2 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                  {condition.symptomsNote && (
                    <div className="mt-3 p-3 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-2">
                      <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#D97706]" />
                      <span>{condition.symptomsNote}</span>
                    </div>
                  )}
                </div>

                {/* Causes & Biomechanical Risks */}
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#EEF2FB] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#0284C7]" />
                    <span>Pathogenic Triggers &amp; Risk Factors</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                    {condition.causesAndRisks.map((cause, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Grid: Diagnosis & Conventional Treatment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Diagnostic Protocol */}
                <div className="p-5 rounded-2xl bg-[#EEF2FB]/60 border border-[#D8E1F5] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-[#303A88]" />
                    <span>Clinical &amp; Ophthalmic Diagnostic Methods</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
                    {condition.diagnosisMethods.map((diag, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#303A88] mt-0.5 shrink-0" />
                        <span>{diag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conventional Approaches & Limitations */}
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-[#64748B]" />
                    <span>Conventional Standard-of-Care &amp; Limitations</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                    {condition.conventionalTreatment.map((conv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] mt-2 shrink-0" />
                        <span>{conv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Constitutional Homeopathic Care Strategy */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EDF8EE] to-[#F4FBF4] border border-[#C4EAC7] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#2F8335] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#45AC4B]" />
                    <span>Dr. Anjali’s Constitutional Homeopathic Approach</span>
                  </h4>
                  <span className="text-[11px] font-bold text-[#2F8335] bg-white px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                    Internal Administration • Safe &amp; Non-Irritating
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {condition.homeopathicApproach.map((app, idx) => (
                    <div key={idx} className="p-3 bg-white/90 rounded-xl border border-[#D3EED6] text-xs sm:text-sm text-[#1E2559] flex items-start gap-2 shadow-2xs">
                      <Check className="w-4 h-4 text-[#45AC4B] mt-0.5 shrink-0 stroke-[2.5]" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Signs & Red Flags */}
              {condition.warningSigns && condition.warningSigns.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#BE123C] flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#E11D48]" />
                    <span>Urgent Warning Signs &amp; Emergency Red Flags</span>
                  </h4>
                  <p className="text-xs text-[#9F1239]">
                    Seek immediate emergency ophthalmic hospital evaluation if any of the following occur:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#9F1239] pt-1">
                    {condition.warningSigns.map((warn, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 shrink-0" />
                        <span>{warn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lifestyle & Ocular Hygiene Tips */}
              {condition.lifestyleTips && condition.lifestyleTips.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-[#0284C7]" />
                    <span>Ocular Hygiene &amp; Visual Ergonomics Guidance</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {condition.lifestyleTips.map((tip, idx) => (
                      <div key={idx} className="p-2.5 bg-white rounded-xl border border-[#EEF2FB] text-xs text-[#475569] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#45AC4B] mt-1.5 shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Strip at Bottom of Each Condition Card */}
              <div className="pt-4 border-t border-[#EEF2FB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#64748B]">
                  Schedule an individualized case review for <strong className="text-[#1E2559]">{condition.name}</strong> with Dr. Anjali Chandrasekhar:
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello Dr. Anjali, I would like to consult regarding ${condition.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#EDF8EE] text-[#2F8335] hover:bg-[#D3EED6] text-xs font-semibold border border-[#C4EAC7] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => handleBookConsultation(`Book Consultation for ${condition.name}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#303A88] hover:bg-[#252E6D] text-white text-xs font-bold transition-colors shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </article>
        ))}

      </section>

      {/* 6. Why Choose Anjali Homeo Clinic for Ophthalmic Care */}
      <section className="py-14 bg-white border-t border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
              CLINICAL EXCELLENCE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Why Patients Choose Anjali Homeo Clinic for Ophthalmic Health
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center text-[#303A88]">
                <ShieldCheck className="w-6 h-6 text-[#0284C7]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                Safe, Non-Irritating Internal Prescribing
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We never administer unsterile drops into the eye. All constitutional medicines are taken orally, stimulating natural immune resilience, stabilizing the mucosal tear film, and avoiding corneal abrasions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EDF8EE] flex items-center justify-center text-[#2F8335]">
                <Activity className="w-6 h-6 text-[#45AC4B]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                Integrative Ophthalmic Co-Care
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                For elevated IOP and glaucoma, we advocate rigorous co-management with ophthalmologists, encouraging regular Goldmann tonometry and Humphrey field tests while offering supportive microvascular therapy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center text-[#303A88]">
                <Award className="w-6 h-6 text-[#303A88]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                Digital Asthenopia &amp; Allergy Expertise
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Specialized protocols for IT professionals, students, and patients experiencing chronic screen eye strain, dry eye syndrome, recurrent styes, and seasonal allergic rhinitis-conjunctivitis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comprehensive FAQ Accordion */}
      <section className="py-14 sm:py-20 bg-[#F4F7FD] border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Ophthalmic &amp; Eye Conditions FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Clinical answers to common questions regarding pink eye, ocular hypertension, glaucoma co-care, and eye hygiene.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#D8E1F5] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFD] transition-colors"
                  >
                    <span className="font-heading text-sm sm:text-base font-bold text-[#1E2559]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#303A88] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Booking Engine Section */}
      <section id="booking-section" className="py-16 bg-white border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#EDF8EE] text-[#2F8335] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Clinic &amp; Online Booking</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Schedule Your Ophthalmic Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl mx-auto">
              Book an in-person consultation at our Malappuram clinic or schedule an online video consultation from anywhere in India or abroad.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* 9. Sticky Mobile CTA Quick-Action Dock */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-2.5 sm:hidden transition-transform duration-300 shadow-2xl ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="grid grid-cols-3 gap-2 items-center">
          {/* Dial Direct Call */}
          <a
            href={`tel:${phonePrimary}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EEF2FB] text-[#303A88] font-bold text-[11px] border border-[#D8E1F5]"
            title={`Call Doctor Desk: ${phonePrimary}`}
          >
            <Phone className="w-4 h-4 text-[#45AC4B] mb-0.5" />
            <span>Call Desk</span>
            <span className="text-[9px] text-[#64748B]">{phonePrimary}</span>
          </a>

          {/* Enquire on WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EDF8EE] text-[#2F8335] font-bold text-[11px] border border-[#C4EAC7]"
          >
            <MessageCircle className="w-4 h-4 text-[#45AC4B] mb-0.5" />
            <span>WhatsApp</span>
            <span className="text-[9px] text-[#45AC4B]">Quick Reply</span>
          </a>

          {/* Book Consultation */}
          <button
            onClick={() => handleBookConsultation()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#303A88] to-[#1E2559] text-white font-bold text-[11px] shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#38BDF8] mb-0.5" />
            <span>Book Now</span>
            <span className="text-[9px] text-[#D8E1F5]">Slot Confirm</span>
          </button>
        </div>
      </div>

      {/* 10. Doctor Portrait Zoom Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-[#F8FAFD]">
              <img
                src="/images/treatment-ophthalmic-eye.svg"
                alt="Ophthalmic & Eye Conditions Clinical Treatment Protocol Artwork"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">Dr. Anjali Chandrasekhar</h3>
              <p className="text-xs text-[#303A88] font-semibold mt-0.5">BHMS • Reg. No. 16503</p>
              <p className="text-xs text-[#64748B] mt-1">
                Senior Physician specializing in Constitutional Homeopathy and Ophthalmic Mucosal Care at Anjali Homeo Clinic.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
