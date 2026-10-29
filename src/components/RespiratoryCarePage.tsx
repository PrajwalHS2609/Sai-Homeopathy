import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import { RESPIRATORY_CONDITIONS } from '../data/conditions/respiratoryConditions';
import {
  Wind,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award,
  UserCheck,
  FileText,
  Activity,
  HelpCircle,
  Stethoscope,
  Info,
  ChevronRight,
  Maximize2,
  X,
  Sliders,
  Check,
  Layers,
  Thermometer,
  ShieldAlert,
  Zap,
} from 'lucide-react';

export const RespiratoryCarePage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Interactive Airway Assessment Tool state
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [assessmentGenerated, setAssessmentGenerated] = useState(false);

  // Phone numbers as requested
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';

  // WhatsApp helper
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Dr. Anjali, I would like to enquire about homeopathic consultation for Respiratory, ENT & Allergy Conditions."
  )}`;

  // Scroll to top on mount, and track scroll for mobile sticky bar
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
      specificReason || "Respiratory, ENT & Allergy Conditions",
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

  // Define the sub-category mapping for the requested 14 conditions
  const subCategoryList = [
    { id: 'chronic-sinusitis', name: 'Chronic Sinusitis', tag: 'Sinus & Facial Pressure' },
    { id: 'asthma', name: 'Asthma', tag: 'Bronchial Wheezing' },
    { id: 'allergic-rhinitis', name: 'Allergic Rhinitis', tag: 'Hay Fever & Sneezing' },
    { id: 'persistent-cough', name: 'Persistent Cough', tag: 'Cough > 8 Weeks' },
    { id: 'chronic-cold-symptoms', name: 'Chronic Cold', tag: 'Recurrent Catarrh' },
    { id: 'phlegm-buildup', name: 'Phlegm Buildup', tag: 'Post-Nasal Mucus' },
    { id: 'frequent-sneezing', name: 'Frequent Sneezing', tag: 'Paroxysmal Fits' },
    { id: 'chronic-nasal-congestion', name: 'Chronic Nasal Congestion', tag: 'Blocked Nose' },
    { id: 'nasal-polyps-adenoids', name: 'Nasal Polyps & Enlarged Adenoids', tag: 'Airway Obstruction' },
    { id: 'tonsillitis', name: 'Tonsillitis', tag: 'Throat Infection' },
    { id: 'shortness-of-breath', name: 'Shortness of Breath', tag: 'Exertional Dyspnea' },
    { id: 'chronic-respiratory-allergies', name: 'Chronic Respiratory Allergies', tag: 'Atopic Airway' },
    { id: 'hoarseness-of-voice', name: 'Hoarseness of Voice', tag: 'Dysphonia' },
    { id: 'vocal-cord-nodules', name: 'Vocal Cord Nodules', tag: "Singer's & Teacher's Nodes" },
  ];

  // Map each condition for display
  const allConditions = RESPIRATORY_CONDITIONS;

  // Filter conditions based on selected tab
  const filteredConditions = () => {
    if (activeTab === 'all') return allConditions;
    if (activeTab === 'nasal-polyps-adenoids') {
      return allConditions.filter(
        (c) => c.id === 'nasal-polyps' || c.id === 'enlarged-adenoids'
      );
    }
    return allConditions.filter((c) => c.id === activeTab);
  };

  // Assessment tool options
  const symptomOptions = [
    { id: 'sneezing', label: 'Morning paroxysmal sneezing (10–20 sneezes)' },
    { id: 'congestion', label: 'Chronic nasal blockage & mouth breathing' },
    { id: 'wheezing', label: 'Audible chest wheezing or night-time breathlessness' },
    { id: 'sinus_pressure', label: 'Frontal headache & heaviness over cheeks/eyes' },
    { id: 'cough_chronic', label: 'Dry or hacking cough lasting over 4 weeks' },
    { id: 'phlegm_throat', label: 'Thick mucus stuck in throat (post-nasal drip)' },
    { id: 'voice_strain', label: 'Rough, husky voice or loss of vocal range' },
    { id: 'child_snoring', label: 'Childhood snoring, open-mouth posture & ear issues' },
  ];

  const triggerOptions = [
    { id: 'dust_mites', label: 'House dust, broom sweeping & mattress dust' },
    { id: 'monsoon_mold', label: 'Kerala monsoon humidity & indoor dampness' },
    { id: 'ac_cold', label: 'Sudden cold air conditioning or cold water' },
    { id: 'pollen_smoke', label: 'Pollen, vehicle exhaust & incense smoke' },
    { id: 'voice_overuse', label: 'Prolonged teaching, singing or lecturing' },
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
      question: 'How does constitutional homeopathy help chronic respiratory allergies without antihistamine drowsiness?',
      answer:
        'Conventional antihistamines work by chemically blocking H1 histamine receptors temporarily, often leaving patients fatigued, drowsy, or dry-mouthed while failing to stop future allergen hypersensitivity. Constitutional homeopathy evaluates the totality of your immune reactivity, temperature modalities, hereditary atopy, and emotional stressors. Individualized remedies (such as Allium Cepa, Arsenicum Album, Natrum Muriaticum, and Sabadilla) desensitize hyperreactive nasal and bronchial mast cells naturally, stabilizing mucosal defenses without causing drowsiness, dependency, or brain fog.',
    },
    {
      question: 'Should I continue using my prescribed asthma rescue inhaler while taking homeopathic medicine?',
      answer:
        'Yes, absolutely. Prescribed rescue bronchodilator inhalers (such as salbutamol / levosalbutamol) are essential life-saving emergency medications. You must NEVER discontinue or reduce your prescribed asthma medications without direct authorization from your pulmonologist. Homeopathy acts as a safe, non-interfering constitutional co-therapy that aims to reduce the frequency and severity of future flare-ups over time, allowing your physician to safely adjust allopathic doses based on objective spirometry testing.',
    },
    {
      question: 'Can homeopathy help with nasal polyps without surgery?',
      answer:
        'For mild to moderate bilateral nasal polyps, constitutional homeopathic treatment provides valuable conservative care. Because polyps arise from chronic type-2 eosinophilic mucosal inflammation, homeopathic prescribing aims to dampen this underlying inflammatory cascade and reduce mucosal edema. While advanced obstructing polyps with bony remodeling may require endoscopic sinus surgery (FESS), constitutional homeopathy is crucial even after surgery to inhibit the notorious recurrence rate of polyposis.',
    },
    {
      question: 'Can children avoid adenoid and tonsil surgery through homeopathic treatment?',
      answer:
        'In many pediatric cases of mild-to-moderate recurrent tonsillitis or adenoid hypertrophy, gentle constitutional homeopathy (including remedies like Calcarea Carb, Baryta Carb, and Agraphis Nutans) helps strengthen lymphatic immune resilience and reduce tissue swelling. Because adenoids naturally reach peak size between ages 3 and 6 and regress after age 7, conservative homeopathic management often supports the child comfortably until natural involution occurs. However, in cases of severe obstructive pediatric sleep apnea with prolonged breathing pauses, surgical evaluation remains the standard.',
    },
    {
      question: 'What is the "United Airway" concept and why does treating my nose help my chest?',
      answer:
        'The "United Airway Disease" principle in modern otolaryngology and pulmonology proves that the respiratory tract from the tip of the nose to the terminal bronchioles is a single continuous anatomical and immunological organ. When allergic rhinitis or chronic sinusitis is left untreated, the post-nasal drip, mouth breathing, and systemic inflammatory mediators cascade into the lower airways, triggering or worsening bronchial asthma. By treating the upper airway with constitutional homeopathy, lower airway reactivity often stabilizes as well.',
    },
    {
      question: 'How does homeopathy support school teachers and singers with hoarseness or vocal cord nodules?',
      answer:
        'Vocal cord nodules are bilateral fibrous calluses resulting from mechanical phonotrauma (voice overuse). Constitutional homeopathy (such as Argentum Metallicum, Causticum, and Arnica) aids in relieving laryngeal strain, soothing mucosal inflammation, and accelerating tissue healing. We combine constitutional prescribing with strict vocal hygiene education (hydration, diaphragmatic breath support, microphone use) and recommend speech therapy co-care. Objective video stroboscopy tracks vocal cord resolution.',
    },
    {
      question: 'Why are allergies, sinus issues, and phlegm so severe during Kerala monsoons?',
      answer:
        'The tropical warmth combined with heavy rainfall in Kerala creates continuous high indoor humidity. This provides optimal breeding conditions for house dust mites (Dermatophagoides) and environmental mold spores on damp walls, wood, and air-conditioning units. Furthermore, temperature swings trigger vasomotor nasal hyperreactivity. Constitutional homeopathy specifically considers climatic modalities (worse in damp, rainy weather) to tailor remedies to your individual weather vulnerability.',
    },
    {
      question: 'What medical reports or scans should I bring or upload for my consultation?',
      answer:
        'To ensure comprehensive medical evaluation, please bring or upload: recent Paranasal Sinus CT scans (if chronic sinusitis or polyps are present); Pulmonary Function Tests (PFT / Spirometry with reversibility) for asthma or breathlessness; ENT Video Laryngoscopy / Stroboscopy reports for voice changes; Lateral soft-tissue neck X-rays for children with adenoids; and any Complete Blood Count (Absolute Eosinophil Count) or Allergy IgE reports.',
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
                '@id': 'https://anjalihomoeoclinic.com/homeopathic-treatment-for-respiratory-ent-allergy-conditions/#webpage',
                url: 'https://anjalihomoeoclinic.com/homeopathic-treatment-for-respiratory-ent-allergy-conditions/',
                name: 'Respiratory, ENT & Allergy Conditions Homeopathic Treatment in Malappuram',
                description:
                  'Explore homeopathic consultations for respiratory, ENT and allergy concerns at Anjali Homoeo Clinic in Malappuram, Kerala, with personalized healthcare guidance.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://anjalihomoeoclinic.com/#website',
                  name: 'Anjali Homoeo Clinic',
                  url: 'https://anjalihomoeoclinic.com',
                },
                about: {
                  '@type': 'MedicalSpecialty',
                  name: 'Homeopathic Otolaryngology, Pulmonology & Allergy Care',
                },
                audience: {
                  '@type': 'Patient',
                  audienceType:
                    'Patients with chronic sinusitis, asthma, dust allergies, nasal blockage, recurring tonsillitis, or vocal strain',
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
                    name: 'Respiratory, ENT & Allergy Conditions Homeopathic Treatment in Malappuram',
                    item: 'https://anjalihomoeoclinic.com/homeopathic-treatment-for-respiratory-ent-allergy-conditions/',
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
            <span className="text-[#303A88] font-bold">Respiratory, ENT &amp; Allergy Conditions</span>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#45AC4B]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#303A88]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Heading, Clinical Summary, Badges & CTAs */}
            <div className="lg:col-span-7">
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] shadow-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-4">
                <Wind className="w-3.5 h-3.5 text-[#303A88]" />
                <span>Specialized Clinical Discipline • Pulmonology, ENT &amp; Allergy Care</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-[1.15] tracking-tight">
                Homeopathic Treatment for Respiratory, ENT &amp; Allergy Conditions
              </h1>

              {/* Lead Narrative */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Evidence-informed, non-drowsy, and non-steroidal constitutional homeopathy for recurring sinus infections, asthma wheezing, dust &amp; weather allergies, chronic cough, pediatric adenoids, tonsillitis, and occupational vocal cord strain. Dr. Anjali Chandrasekhar provides individualized constitutional care aimed at rebuilding mucosal immunity without steroid dependency or rebound congestion.
              </p>

              {/* Key Clinical Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-[#1E2559]">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>100% Non-Drowsy</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <UserCheck className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Pediatric &amp; Adult Care</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Activity className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>Airway Desensitization</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Zero Steroid Rebound</span>
                </div>
              </div>

              {/* CTA Section - Elegant Desktop & Mobile Versions */}
              <div className="mt-8 space-y-4">
                {/* Main CTA Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                  
                  {/* Primary CTA: Book Respiratory Consultation */}
                  <button
                    onClick={() => handleBookConsultation()}
                    className="sm:col-span-7 group relative inline-flex items-center justify-between gap-3 bg-gradient-to-r from-[#303A88] via-[#2A3478] to-[#1E2559] hover:from-[#252E6D] hover:to-[#171D47] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-[#45AC4B]" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                          Book Respiratory Consultation
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#D8E1F5] font-normal">
                          Online Video or In-Clinic Slot • Instant Confirm
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#45AC4B] group-hover:translate-x-1 transition-transform shrink-0" />
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
                    <span>Spirometry &amp; CT Scan Informed Protocol</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Mon–Sat: 9 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Doctor In Uniform HD Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                
                {/* Decorative Soft Ambient Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#303A88]/20 via-[#45AC4B]/15 to-[#EEF2FB] rounded-[36px] blur-xl opacity-80" />

                {/* Main Treatment Artwork Frame */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 border border-[#D8E1F5] shadow-2xl">
                  
                  {/* Photo Container: Dedicated Treatment Clinical Artwork */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EEF2FB] to-[#D8E1F5] shadow-inner group">
                    <img
                      src="/images/treatment-respiratory.svg"
                      alt="Respiratory, ENT &amp; Allergy Clinical Homeopathic Treatment"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Corner Vignette */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                    {/* Top Left: Treatment Focus Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#1E2559] border border-[#D8E1F5] shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                      <span>Airway &amp; ENT Immunology</span>
                    </div>

                    {/* Top Right: Protocol Badge + Zoom Button */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#303A88]/95 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                        <Award className="w-3.5 h-3.5 text-[#45AC4B]" />
                        <span>Targeted Therapy</span>
                      </div>
                      <button
                        onClick={() => setIsPhotoModalOpen(true)}
                        className="p-1.5 rounded-full bg-white/90 hover:bg-white text-[#1E2559] shadow-md transition-colors cursor-pointer"
                        title="View Full Treatment Diagram"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom floating quick-tag on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="bg-[#1E2559]/85 backdrop-blur-md text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                        Non-Steroidal Bronchial Relief
                      </span>
                      <button
                        onClick={() => setIsPhotoModalOpen(true)}
                        className="pointer-events-auto bg-white/95 hover:bg-white text-[#303A88] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-1"
                      >
                        <span>View Protocol</span>
                        <Maximize2 className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* Clean Credentials Card Below Photo */}
                  <div className="mt-3.5 p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="bg-[#45AC4B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Lead Physician
                          </span>
                          <span className="text-[11px] text-[#303A88] font-bold">Board Reg. KA-HOM-15563</span>
                        </div>
                        <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1E2559] mt-1 leading-tight">
                          Dr. Anjali Chandrasekhar (BHMS)
                        </h3>
                        <p className="text-xs text-[#475569] font-medium mt-0.5">
                          Lead Homeopathic Physician &amp; Airway Immunology Consultant
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#D8E1F5] flex items-center justify-between text-xs text-[#64748B]">
                      <span className="font-semibold text-[#303A88]">12+ Years Experience</span>
                      <span>Kuttippuram &amp; Puthanathani</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Interactive Airway & ENT Symptom Assessment Tool */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#EEF2FB] via-white to-[#EDF8EE] rounded-3xl p-6 sm:p-10 border border-[#D8E1F5] shadow-xs">
            
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 bg-[#303A88] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Sliders className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>INTERACTIVE CLINICAL TOOL</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Airway &amp; ENT Symptom Assessment Checker
              </h2>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Select your key symptoms and triggers below to receive an instant, evidence-informed preliminary overview of likely anatomical targets and recommended medical diagnostics prior to your consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Selector Columns (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Step 1: Symptoms Selection */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] mb-3 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#303A88] text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Select Your Primary Respiratory / ENT Symptoms:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {symptomOptions.map((symp) => {
                      const isSelected = selectedSymptoms.includes(symp.id);
                      return (
                        <button
                          key={symp.id}
                          type="button"
                          onClick={() => toggleSymptom(symp.id)}
                          className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${
                            isSelected
                              ? 'bg-[#303A88] text-white border-[#303A88] shadow-xs'
                              : 'bg-white text-[#475569] border-[#D8E1F5] hover:border-[#303A88]/50'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md mt-0.5 shrink-0 flex items-center justify-center border ${
                              isSelected ? 'bg-[#45AC4B] border-[#45AC4B] text-white' : 'border-[#CBD5E1]'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="font-medium leading-snug">{symp.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Trigger Factors */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] mb-3 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#303A88] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Common Triggers That Aggravate Your Symptoms:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {triggerOptions.map((trig) => {
                      const isSelected = selectedTriggers.includes(trig.id);
                      return (
                        <button
                          key={trig.id}
                          type="button"
                          onClick={() => toggleTrigger(trig.id)}
                          className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-[#45AC4B] text-white border-[#45AC4B] shadow-xs'
                              : 'bg-white text-[#475569] border-[#D8E1F5] hover:border-[#45AC4B]/50'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          <span>{trig.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action button */}
                <div>
                  <button
                    type="button"
                    onClick={() => setAssessmentGenerated(true)}
                    disabled={selectedSymptoms.length === 0}
                    className="inline-flex items-center gap-2 bg-[#303A88] disabled:bg-[#94A3B8] hover:bg-[#252E6D] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-[#45AC4B]" />
                    <span>Generate Clinical Summary &amp; Recommendations</span>
                  </button>
                </div>

              </div>

              {/* Assessment Output Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#D8E1F5] shadow-md h-full flex flex-col justify-between">
                  {assessmentGenerated && selectedSymptoms.length > 0 ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#EEF2FB]">
                        <span className="text-xs font-bold text-[#45AC4B] uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Assessment Profile Ready</span>
                        </span>
                        <span className="text-[11px] text-[#64748B]">Personalized Review</span>
                      </div>

                      <div>
                        <h4 className="font-editorial text-lg font-bold text-[#1E2559]">
                          Identified Airway Profile
                        </h4>
                        <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                          Based on {selectedSymptoms.length} selected symptoms and {selectedTriggers.length} triggers, your clinical pattern suggests multi-focal respiratory mucosal hypersensitivity (
                          {selectedSymptoms.includes('wheezing')
                            ? 'United Airway / Lower Bronchial Involvement'
                            : selectedSymptoms.includes('sinus_pressure')
                            ? 'Sinonasal Inflammatory Obstruction'
                            : selectedSymptoms.includes('voice_strain')
                            ? 'Laryngeal Strain / Phonotrauma'
                            : 'Allergic Nasopharyngeal Reactivity'}
                          ).
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                        <span className="text-[11px] font-bold text-[#303A88] uppercase tracking-wider block">
                          Recommended Medical Diagnostics to Bring:
                        </span>
                        <ul className="text-xs text-[#475569] space-y-1">
                          {selectedSymptoms.includes('wheezing') && (
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                              <span>Spirometry with Bronchodilator Reversibility (PFT)</span>
                            </li>
                          )}
                          {selectedSymptoms.includes('sinus_pressure') && (
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                              <span>Non-Contrast CT Paranasal Sinuses (PNS)</span>
                            </li>
                          )}
                          {selectedSymptoms.includes('voice_strain') && (
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                              <span>Video Stroboscopy / Flexible Laryngoscopy</span>
                            </li>
                          )}
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#45AC4B]" />
                            <span>Absolute Eosinophil Count (AEC) &amp; Serum Total IgE</span>
                          </li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleBookConsultation(
                            `Respiratory Assessment (${selectedSymptoms.length} symptoms)`
                          )
                        }
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#45AC4B] hover:bg-[#3B9640] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-xs cursor-pointer transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Consultation with this Assessment</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8 space-y-3 my-auto">
                      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center mx-auto">
                        <Sliders className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-[#1E2559] text-sm">
                        Select Symptoms on the Left
                      </h4>
                      <p className="text-xs text-[#64748B] max-w-xs mx-auto">
                        Pick your persistent symptoms and climatic triggers, then click &ldquo;Generate Clinical Summary&rdquo; to review tailored guidance.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Quick Jump / Condition Filter Navigation (14 Sub-categories) */}
      <section className="py-5 bg-[#EEF2FB] border-b border-[#D8E1F5] sticky top-[60px] sm:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
            <span className="text-[#303A88] shrink-0 uppercase tracking-wider text-[11px] mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Sub-Categories:</span>
            </span>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#303A88] text-white shadow-xs'
                  : 'bg-white text-[#475569] hover:bg-white/80 border border-[#D8E1F5]'
              }`}
            >
              All 14 Sub-Categories
            </button>
            {subCategoryList.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === item.id
                    ? 'bg-[#303A88] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-white/80 border border-[#D8E1F5]'
                }`}
              >
                <span>{item.name}</span>
                <span className="text-[10px] opacity-75 hidden sm:inline">({item.tag})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Detailed Condition Cards & Clinical Protocols */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
            EVIDENCE-INFORMED CLINICAL PROTOCOLS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
            Detailed Respiratory, ENT &amp; Allergy Treatments
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Explore specific medical overviews, clinical symptom patterns, established diagnostics, and our gentle constitutional homeopathic approach for each condition.
          </p>
        </div>

        <div className="space-y-10">
          {filteredConditions().map((condition) => (
            <article
              key={condition.id}
              id={`condition-${condition.id}`}
              className="bg-white rounded-3xl border border-[#D8E1F5] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#EEF2FB]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#EEF2FB] text-[#303A88] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {condition.bodySystem}
                      </span>
                      <span className="text-xs text-[#64748B] font-medium">Individualized Protocol</span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                      {condition.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#45AC4B] mt-0.5">
                      {condition.commonName} • Evidence-Informed Constitutional Care
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleBookConsultation(`Respiratory: ${condition.name}`)
                    }
                    className="inline-flex items-center justify-center gap-1.5 bg-[#EEF2FB] hover:bg-[#303A88] text-[#303A88] hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire for {condition.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                  {/* Left Column: Overview, Key Points & Symptoms */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] mb-1.5">
                        Medical Overview &amp; Pathophysiology
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {condition.overview}
                      </p>
                    </div>

                    {condition.overviewPoints && condition.overviewPoints.length > 0 && (
                      <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#D8E1F5] space-y-1">
                        <span className="text-[11px] font-bold text-[#1E2559] uppercase tracking-wider block">
                          Key Clinical Principles:
                        </span>
                        {condition.overviewPoints.map((point, pIdx) => (
                          <div key={pIdx} className="text-xs text-[#475569] flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                        Common Clinical Manifestations
                      </h4>
                      <ul className="space-y-1.5">
                        {condition.commonSymptoms.map((symp, sIdx) => (
                          <li key={sIdx} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                            <span>{symp}</span>
                          </li>
                        ))}
                      </ul>
                      {condition.symptomsNote && (
                        <p className="text-xs text-[#64748B] italic mt-2">
                          Note: {condition.symptomsNote}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Causes, Homeopathic Protocol & Diagnostics */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="bg-[#EDF8EE] p-5 rounded-2xl border border-[#C6E7C9]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F8335] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#45AC4B]" />
                        <span>Constitutional Homeopathic Protocol</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E2559]">
                        {condition.homeopathicApproach.map((appr, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#45AC4B] mt-1.5 shrink-0" />
                            <span>{appr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#303A88]" />
                        <span>Recommended Medical Diagnostics</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.diagnosisMethods.map((diag, dIdx) => (
                          <span
                            key={dIdx}
                            className="bg-white border border-[#D8E1F5] text-[#1E2559] text-xs font-medium px-2.5 py-1 rounded-lg"
                          >
                            {diag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                        Key Causes &amp; Environmental Risk Factors
                      </h4>
                      <ul className="space-y-1 text-xs text-[#475569]">
                        {condition.causesAndRisks.slice(0, 4).map((cause, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#64748B] mt-1.5 shrink-0" />
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {condition.warningSigns && condition.warningSigns.length > 0 && (
                      <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5]/60 text-xs text-[#991B1B]">
                        <span className="font-bold block mb-1 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-[#E11D48]" />
                          <span>Emergency Warning Signs:</span>
                        </span>
                        <ul className="list-disc list-inside space-y-0.5">
                          {condition.warningSigns.map((warn, wIdx) => (
                            <li key={wIdx}>{warn}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Clinical Comparison Table */}
      <section className="py-14 bg-white border-y border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
              CLINICAL COMPARISON
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Constitutional Homeopathy vs. Temporary Symptom Suppression
            </h2>
            <p className="text-sm text-[#64748B] mt-1.5">
              Understanding why root-cause immune desensitization provides sustainable relief compared to repeated antihistamine or decongestant spray suppression.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-[#F8FAFD] rounded-2xl overflow-hidden border border-[#D8E1F5] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#303A88] text-white">
                  <th className="p-3.5 sm:p-4 font-bold">Clinical Parameter</th>
                  <th className="p-3.5 sm:p-4 font-bold bg-[#252E6D] text-[#45AC4B]">
                    Anjali Homeo Clinic Constitutional Care
                  </th>
                  <th className="p-3.5 sm:p-4 font-bold text-[#CBD5E1]">
                    Conventional Symptom Suppression (Sprays / Antihistamines)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8E1F5] text-[#475569]">
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Mechanism of Action</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Modulates mucosal mast cell reactivity &amp; hereditary atopic susceptibility
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Chemically blocks histamine receptors or vasoconstricts nasal vessels temporarily
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Sedation &amp; Drowsiness</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    100% Non-sedating; zero cognitive impairment or daytime fatigue
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Frequently causes drowsiness, sluggishness, and dry mucosal membranes
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Rebound Risk</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Zero risk of rhinitis medicamentosa or steroid skin/mucosal thinning
                  </td>
                  <td className="p-3.5 sm:p-4">
                    High rebound risk with OTC nasal sprays (severe dependence within 5 days)
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Weather &amp; Monsoons</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Specific remedies matched to cold drafts, humidity, and rainy season shifts
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Does not alter climatic vulnerability; requires ongoing tablet consumption
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Emergency Inhaler Safety</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Strict medical co-care: rescue inhalers must be retained for acute episodes
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Standard protocol for immediate acute bronchospasm relief
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Responsible Medical Safety & Red Flag Warnings */}
      <section className="py-12 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-[#E11D48] text-white rounded-2xl shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#991B1B]">
                Medical Safety Protocol: When to Seek Immediate Emergency Hospital Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-[#7F1D1D] mt-1 leading-relaxed">
                Constitutional homeopathy is designed for chronic, recurrent, and non-emergency airway management. You must proceed immediately to a hospital emergency or casualty department if you or your child encounter any of the following acute symptoms:
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-semibold text-[#991B1B]">
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Severe breathlessness, inability to speak full sentences</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Cyanosis (bluish lips/tongue) or SpO2 &lt; 92%</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Coughing up blood or blood-streaked sputum</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Inability to swallow saliva (drooling) or stridor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Respiratory Consultation Banner */}
      <section className="py-12 bg-gradient-to-r from-[#1E2559] via-[#2A3478] to-[#303A88] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-5">
              <div
                onClick={() => setIsPhotoModalOpen(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg shrink-0 cursor-pointer relative group bg-white"
                title="Click to view treatment artwork"
              >
                <img
                  src="/images/treatment-respiratory.svg"
                  alt="Respiratory Treatment Protocol Artwork"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold text-[#86EFAC] mb-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                  <span>Personalized Airway Consultation</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Speak Directly with Dr. Anjali Chandrasekhar
                </h3>
                <p className="text-xs sm:text-sm text-[#D8E1F5] max-w-xl mt-1">
                  12+ Years experience guiding patients with chronic sinusitis, bronchial asthma, allergic rhinitis &amp; pediatric ENT conditions. Private consultation online or in-clinic.
                </p>
              </div>
            </div>

            {/* Banner Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => handleBookConsultation()}
                className="inline-flex items-center justify-center gap-2 bg-[#45AC4B] hover:bg-[#3B9640] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Respiratory Consultation</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#86EFAC]" />
                <span>{phonePrimary}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Comprehensive FAQs Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
            Questions on Respiratory, ENT &amp; Allergies
          </h2>
          <p className="text-sm text-[#64748B] mt-1.5">
            Transparent answers regarding inhaler safety, steroid weaning, climatic triggers, and pediatric ENT care.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#D8E1F5] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1E2559] hover:text-[#303A88] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#303A88]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] bg-[#F8FAFD]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Direct Embedded Booking Engine */}
      <section id="booking-section" className="py-16 bg-[#EEF2FB] border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] px-3.5 py-1 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#45AC4B]" />
              <span>CONFIDENTIAL CONSULTATION BOOKING</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Schedule Your Respiratory &amp; ENT Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto mt-1.5">
              Choose an online video consultation from home or visit our clinic in Kuttippuram or Puthanathani. Personalized, root-cause care with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-[#D8E1F5]">
            <AppointmentBookingEngine initialType="online" />
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Floating Quick-Action Dock */}
      <aside
        aria-label="Mobile quick actions"
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] px-3 py-2 shadow-2xl transition-transform duration-300 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
          
          {/* Quick Call Button: 0989101707 */}
          <a
            href={`tel:${phonePrimary}`}
            className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EEF2FB] hover:bg-[#D8E1F5] text-[#303A88] font-bold text-[11px] transition-colors border border-[#D8E1F5] active:scale-95"
            title="Call 0989101707"
          >
            <Phone className="w-4 h-4 text-[#45AC4B] mb-0.5" />
            <span className="truncate w-full text-center">0989101707</span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-4 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-[11px] transition-colors shadow-xs active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
            <span className="truncate w-full text-center">WhatsApp</span>
          </a>

          {/* Primary Book Consultation Button */}
          <button
            onClick={() => handleBookConsultation()}
            className="col-span-5 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#303A88] hover:bg-[#252E6D] text-white font-bold text-xs transition-colors shadow-sm active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#45AC4B] shrink-0" />
            <span className="truncate">Book Consultation</span>
          </button>

        </div>
      </aside>

      {/* Full HD Doctor Photo Preview Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-[#303A88] text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                <span className="font-bold text-sm">Dr. Anjali Chandrasekhar (BHMS)</span>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
                title="Close Photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Treatment Artwork Container */}
            <div className="relative max-h-[65vh] overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src="/images/treatment-respiratory.svg"
                alt="Respiratory, ENT & Allergy Clinical Homeopathic Treatment Protocol Artwork"
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Body & Credentials */}
            <div className="p-4 sm:p-5 bg-white space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#1E2559]">
                    Dr. Anjali Chandrasekhar
                  </h4>
                  <p className="text-xs font-semibold text-[#303A88]">
                    BHMS • Board Reg. KA-HOM-15563
                  </p>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Lead Physician • Indian Malayali Doctor in Official Uniform &amp; Stethoscope
                  </p>
                </div>
                <span className="bg-[#EEF2FB] text-[#303A88] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#D8E1F5]">
                  12+ Yrs Exp
                </span>
              </div>

              {/* Modal CTAs */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#D8E1F5]">
                <button
                  onClick={() => {
                    setIsPhotoModalOpen(false);
                    handleBookConsultation();
                  }}
                  className="flex items-center justify-center gap-1.5 bg-[#303A88] hover:bg-[#252E6D] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>Book Consultation</span>
                </button>
                <a
                  href={`tel:${phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 bg-[#EEF2FB] hover:bg-[#D8E1F5] text-[#303A88] py-2.5 px-3 rounded-xl font-bold text-xs border border-[#D8E1F5]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>Call {phonePrimary}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
