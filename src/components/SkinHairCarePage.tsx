import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import { SKIN_HAIR_CONDITIONS } from '../data/conditions/skinHairConditions';
import {
  Sparkles,
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
  Droplets,
  Scissors,
} from 'lucide-react';

export const SkinHairCarePage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Interactive Skin & Scalp Assessment Tool state
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [assessmentGenerated, setAssessmentGenerated] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';

  // WhatsApp helper
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Dr. Anjali, I would like to enquire about homeopathic consultation for Skin, Hair & Scalp Conditions."
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
      specificReason || "Skin, Hair & Scalp Conditions",
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

  // Define the sub-category list matching the user requested 17 conditions
  const subCategoryList = [
    { id: 'eczema', name: 'Eczema', tag: 'Atopic Dermatitis & Itch' },
    { id: 'psoriasis', name: 'Psoriasis', tag: 'Silvery Scaly Plaques' },
    { id: 'melasma-pigmentation', name: 'Melasma / Skin Pigmentation', tag: 'Chloasma & Sun Spots' },
    { id: 'severe-hair-fall-alopecia', name: 'Severe Hair Fall / Alopecia', tag: 'Telogen Effluvium & Thinning' },
    { id: 'ringworm', name: 'Ringworm', tag: 'Tinea Corporis & Cruris' },
    { id: 'urticaria-hives', name: 'Urticaria / Hives', tag: 'Dermatographia & Welts' },
    { id: 'acne', name: 'Acne', tag: 'Cystic, Hormonal & Scars' },
    { id: 'warts', name: 'Warts', tag: 'Verruca Vulgaris & Flat Warts' },
    { id: 'skin-tags', name: 'Skin Tags', tag: 'Acrochordons & Friction' },
    { id: 'plantar-warts-corns', name: 'Plantar Warts / Corns', tag: 'Foot Pain & Hyperkeratosis' },
    { id: 'chickenpox', name: 'Chickenpox', tag: 'Varicella Eruptions' },
    { id: 'measles', name: 'Measles', tag: 'Morbillivirus Rash Care' },
    { id: 'herpes-zoster-shingles', name: 'Herpes Zoster / Shingles', tag: 'Nerve Pain & Blisters' },
    { id: 'cracked-heels', name: 'Cracked Heels', tag: 'Deep Calcaneal Fissures' },
    { id: 'premature-graying', name: 'Premature Graying', tag: 'Canities & Melanin Support' },
    { id: 'severe-dandruff', name: 'Severe Dandruff', tag: 'Seborrheic Dermatitis' },
    { id: 'alopecia-areata', name: 'Alopecia Areata', tag: 'Coin-Shaped Bald Patches' },
  ];

  const allConditions = SKIN_HAIR_CONDITIONS;

  // Filter conditions based on selected tab
  const filteredConditions = () => {
    if (activeTab === 'all') return allConditions;
    if (activeTab === 'severe-hair-fall-alopecia') {
      return allConditions.filter(
        (c) => c.id === 'severe-hair-fall' || c.id === 'alopecia'
      );
    }
    if (activeTab === 'plantar-warts-corns') {
      return allConditions.filter(
        (c) => c.id === 'plantar-warts' || c.id === 'corns'
      );
    }
    return allConditions.filter((c) => c.id === activeTab);
  };

  // Assessment tool symptom choices
  const symptomOptions = [
    { id: 'intense_itching', label: 'Intense, agonizing pruritus worse at night or after warm baths' },
    { id: 'silvery_scales', label: 'Well-demarcated red plaques with silvery-white peeling scales' },
    { id: 'patchy_hair_loss', label: 'Smooth, circular coin-shaped bald patches on scalp, beard, or brows' },
    { id: 'melasma_spots', label: 'Symmetrical gray-brown hyperpigmentation over cheeks, nose, or forehead' },
    { id: 'ring_lesions', label: 'Itchy circular ring-shaped lesions with raised borders and clear centers' },
    { id: 'transient_hives', label: 'Sudden raised reddish itchy wheals that move around or swell with scratching' },
    { id: 'cystic_pimples', label: 'Deep painful cystic acne, pustules, blackheads and lingering red scars' },
    { id: 'rough_warts', label: 'Rough cauliflower-textured nodules on fingers, hands, face, or neck' },
    { id: 'foot_callus_pain', label: 'Deep painful corns on toe joints or pinpoint plantar warts on foot soles' },
    { id: 'unilateral_burning', label: 'Severe burning, stabbing nerve pain with a band of fluid-filled blisters' },
    { id: 'flaking_scalp', label: 'Greasy or dry stubborn scalp flaking with burning itch and follicle shedding' },
    { id: 'deep_heel_cracks', label: 'Painful bleeding fissures and hardened keratin on heel rims' },
  ];

  // Assessment tool trigger choices
  const triggerOptions = [
    { id: 'monsoon_humidity', label: 'Tropical Kerala monsoon dampness, sweat accumulation and friction' },
    { id: 'hard_water_soaps', label: 'Chlorinated or hard borewell water, harsh synthetic SLS detergents' },
    { id: 'steroid_rebound', label: 'History of topical steroid cream use with rapid rebound upon stopping' },
    { id: 'mental_stress', label: 'High mental anxiety, emotional tension, sleep deprivation and exam stress' },
    { id: 'hormonal_swings', label: 'Post-pregnancy, thyroid imbalance, PCOS or menstrual irregularities' },
    { id: 'nutritional_gaps', label: 'Low serum ferritin, vitamin D3, vitamin B12 or restrictive dieting' },
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
      question: 'How does constitutional homeopathy heal chronic skin diseases without topical steroid creams?',
      answer:
        'In classical dermatology and homeopathy, the skin is an outward reflection of internal metabolic, immune, and psychosomatic balance. Conventional topical corticosteroids suppress surface epidermal inflammation temporarily, but do not correct the underlying immune dysregulation (such as Th2 hyperreactivity in eczema or Th17/IL-23 overdrive in psoriasis). When creams are stopped, patients often experience distressing rebound flares (Topical Steroid Withdrawal). Constitutional homeopathy evaluates your thermal temperament, eruption modalities, stress triggers, and family history. Remedies like Graphites, Sulphur, Arsenicum Album, Berberis Aquifolium, and Natrum Mur work from within to normalize immune cellular turnover, enhance skin barrier resilience, and calm mast cell sensitivity naturally.',
    },
    {
      question: 'Can homeopathic medicine help reverse severe hair fall and alopecia areata bald patches?',
      answer:
        'Yes. Alopecia areata is an autoimmune condition where T-lymphocytes mistakenly attack active anagen hair follicles, causing sudden focal patchy hair loss. Constitutional homeopathy (including remedies such as Acidum Fluor, Phosphorus, Lycopodium, and Silicea) aims to regulate autoimmune hyperactivity, restore follicular blood supply, and reactivate dormant telogen follicles. For diffuse telogen effluvium, we also identify and address systemic drivers such as low ferritin, thyroid dysfunction, post-viral convalescence, and scalp seborrhea.',
    },
    {
      question: 'Can melasma and deep skin pigmentation be treated without harsh chemical peels or hydroquinone?',
      answer:
        'Hydroquinone and aggressive chemical peels can irritate sensitive melanin-rich Indian skin types (Fitzpatrick types IV–V), often causing post-inflammatory hyperpigmentation (PIH) or permanent ochronosis. Melasma is heavily influenced by systemic factors including estrogen-progesterone hormonal shifts, hepatic metabolism, and UV oxidative stress. Homeopathic constitutional medicines (such as Sepia, Thuja, Berberis Aquifolium, and Plumbum Iodatum) address internal hormonal-dermal pathways gently while supporting healthy epidermal cell turnover, without causing photo-sensitivity or chemical burns.',
    },
    {
      question: 'Is ringworm (tinea fungal infection) curable with homeopathy, especially when recurring?',
      answer:
        'Recurrent tinea infections in Kerala’s hot and humid climate frequently become resistant to conventional antifungal creams due to overuse. Homeopathy acts on the host soil (your innate skin immunity and fungal resistance). Specific constitutional remedies (such as Tellurium, Sepia, Chrysarobinum, and Bacillinum) alter the skin micro-environment so dermatophyte fungi cannot colonize. We pair this with strict hygiene guidance: boiling cotton undergarments, avoiding shared towels, and keeping flexural areas thoroughly dry.',
    },
    {
      question: 'Can warts, skin tags, and plantar corns disappear without surgical excision, burning, or laser?',
      answer:
        'Yes, homeopathy has a documented clinical record in treating viral verrucae (human papillomavirus) and hyperkeratotic lesions. Excision or freezing often leaves painful scars and high recurrence rates because the underlying virus remains in neighboring basal epithelial cells. Constitutional prescribing (such as Thuja Occidentalis, Causticum, Antimonium Crudum, and Nitric Acid) activates the body’s cell-mediated immunity to naturally reject the wart tissue from the root without scarring or surgical trauma.',
    },
    {
      question: 'How does homeopathy relieve severe nerve pain in Herpes Zoster (Shingles) and post-herpetic neuralgia?',
      answer:
        'Herpes Zoster is caused by reactivation of the dormant Varicella-Zoster virus along sensory nerve dermatomes, causing severe burning, lancinating nerve pain followed by vesicular eruptions. Constitutional homeopathic remedies (including Ranunculus Bulbosus, Rhus Tox, Mezereum, and Hypericum) dramatically reduce neuro-inflammation, shorten the acute eruption phase, and prevent the dreaded complication of Post-Herpetic Neuralgia (PHN). In cases involving the eye or facial nerve (Ramsay Hunt syndrome), concurrent prompt allopathic antiviral therapy is coordinated.',
    },
    {
      question: 'Why do skin and scalp conditions flare up so severely during the Kerala monsoons?',
      answer:
        'Kerala’s high monsoon humidity and sustained tropical heat create a microclimate that promotes epidermal maceration, fungal spore proliferation (Tinea, Malassezia yeast causing dandruff), and secondary bacterial colonization. Additionally, sweat retention blocks pores and triggers urticaria, prickly heat, and acute eczema flares. In constitutional homeopathy, we evaluate weather modalities (aggravation in damp, humid, or rainy weather) to select remedies that boost your resistance to atmospheric shifts.',
    },
    {
      question: 'What reports or photographs should I share during my online or in-clinic consultation?',
      answer:
        'For dermatological consultations, clear high-resolution photographs taken under natural daylight (showing both close-up lesion texture and wider body distribution) are essential. Please bring or upload: previous prescription history (especially any steroid or immunosuppressant creams used); recent Complete Blood Count (CBC) with Absolute Eosinophil Count; Serum Ferritin, Thyroid Profile (TSH/FT4/FT3), and Fasting Blood Sugar; and fungal KOH scraping or skin biopsy reports if performed.',
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
                '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/#webpage',
                url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
                name: 'Skin, Hair & Scalp Homeopathic Treatment in Malappuram',
                description:
                  'Explore consultations for skin, hair and scalp concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized guidance for your healthcare needs.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://anjalihomoeoclinic.com/#website',
                  name: 'Anjali Homoeo Clinic',
                  url: 'https://anjalihomoeoclinic.com',
                },
                about: {
                  '@type': 'MedicalSpecialty',
                  name: 'Homeopathic Dermatology & Trichology Care',
                },
                audience: {
                  '@type': 'Patient',
                  audienceType:
                    'Patients with chronic eczema, plaque psoriasis, melasma, severe hair fall, alopecia areata, fungal ringworm, acne, warts, or shingles',
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
                    name: 'Skin, Hair & Scalp Homeopathic Treatment in Malappuram',
                    item: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-skin-hair-scalp-conditions/',
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
            <span className="text-[#303A88] font-bold">Skin, Hair &amp; Scalp Conditions</span>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#303A88]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Heading, Clinical Summary, Badges & CTAs */}
            <div className="lg:col-span-7">
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] shadow-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Specialized Clinical Discipline • Dermatology, Trichology &amp; Scalp Care</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-[1.15] tracking-tight">
                Homoeopathic Treatment for Skin, Hair &amp; Scalp Conditions
              </h1>

              {/* Lead Narrative */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Evidence-informed, non-steroidal constitutional homeopathy for stubborn eczema, plaque psoriasis, facial melasma, patchy alopecia areata, chronic urticaria, cystic acne, recalcitrant warts, shingles nerve pain, and severe dandruff. Dr. Anjali Chandrasekhar provides individualized constitutional therapy designed to correct internal immune-dermal pathways without steroid dependence or rebound flares.
              </p>

              {/* Key Clinical Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-[#1E2559]">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>100% Non-Steroidal</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Droplets className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Skin Barrier Rebuild</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Scissors className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Follicular Vitality</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Zero Scarring Recurrence</span>
                </div>
              </div>

              {/* CTA Section - Elegant Desktop & Mobile Versions */}
              <div className="mt-8 space-y-4">
                {/* Main CTA Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                  
                  {/* Primary CTA: Book Skin & Hair Consultation */}
                  <button
                    onClick={() => handleBookConsultation()}
                    className="sm:col-span-7 group relative inline-flex items-center justify-between gap-3 bg-gradient-to-r from-[#303A88] via-[#2A3478] to-[#1E2559] hover:from-[#252E6D] hover:to-[#171D47] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-[#F59E0B]" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                          Book Skin &amp; Hair Consultation
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#D8E1F5] font-normal">
                          Online Video or In-Clinic Slot • Instant Confirm
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#F59E0B] group-hover:translate-x-1 transition-transform shrink-0" />
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
                    <span>Trichoscopy &amp; Dermatological Protocol</span>
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
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#303A88]/20 via-[#F59E0B]/15 to-[#EEF2FB] rounded-[36px] blur-xl opacity-80" />

                {/* Main Treatment Protocol Frame */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 border border-[#D8E1F5] shadow-2xl">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EEF2FB] to-[#D8E1F5] shadow-inner group">
                    <img
                      src="/images/treatment-skin-hair.svg"
                      alt="Dermatology, Hair & Scalp Clinical Homeopathic Treatment Protocol"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                      loading="eager"
                    />

                    {/* Subtle top pill badge */}
                    <div className="absolute top-3 left-3 bg-[#1E2559]/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span>Dermatology & Scalp Protocol</span>
                    </div>

                    {/* Click-to-Zoom Trigger Button */}
                    <button
                      onClick={() => setIsPhotoModalOpen(true)}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#1E2559] p-2 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none"
                      title="Inspect HD Doctor Portrait"
                      aria-label="Inspect Full HD Doctor Portrait"
                    >
                      <Maximize2 className="w-4 h-4 text-[#303A88]" />
                    </button>

                    {/* Bottom Floating Identity Chip */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#D8E1F5] shadow-lg">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-[#1E2559] flex items-center gap-1">
                            <span>Dr. Anjali Chandrasekhar</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B]" />
                          </div>
                          <div className="text-[10px] text-[#64748B]">
                            BHMS • Chief Homeopathic Physician
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#303A88] bg-[#EEF2FB] px-2 py-0.5 rounded-md border border-[#D8E1F5]">
                          Board Reg. KA-HOM-15563
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Practitioner Details Under Card */}
                  <div className="mt-3.5 pt-3 border-t border-[#EEF2FB] grid grid-cols-3 gap-2 text-center">
                    <div className="p-1.5 rounded-xl bg-[#F8FAFD]">
                      <div className="text-xs sm:text-sm font-bold text-[#1E2559]">10+ Yrs</div>
                      <div className="text-[10px] text-[#64748B]">Clinical Practice</div>
                    </div>
                    <div className="p-1.5 rounded-xl bg-[#F8FAFD]">
                      <div className="text-xs sm:text-sm font-bold text-[#45AC4B]">12,500+</div>
                      <div className="text-[10px] text-[#64748B]">Patients Treated</div>
                    </div>
                    <div className="p-1.5 rounded-xl bg-[#F8FAFD]">
                      <div className="text-xs sm:text-sm font-bold text-[#303A88]">100%</div>
                      <div className="text-[10px] text-[#64748B]">Steroid-Free</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Sub-Category Navigation & Condition Filter Matrix */}
      <section className="py-10 bg-white border-b border-[#D8E1F5] sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#303A88] flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>17 Specialized Sub-Categories Under Care</span>
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#1E2559]">
                Select a Condition for Clinical Diagnostic &amp; Treatment Breakdown
              </h2>
            </div>
            {activeTab !== 'all' && (
              <button
                onClick={() => setActiveTab('all')}
                className="text-xs font-semibold text-[#303A88] hover:text-[#45AC4B] underline transition-colors whitespace-nowrap"
              >
                Show All Conditions
              </button>
            )}
          </div>

          {/* Filter Pills with Horizontal Scrolling */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#303A88] text-white shadow-xs'
                  : 'bg-[#EEF2FB] text-[#475569] hover:bg-[#D8E1F5] hover:text-[#1E2559]'
              }`}
            >
              All 17 Conditions ({allConditions.length})
            </button>

            {subCategoryList.map((subcat) => {
              const isSelected = activeTab === subcat.id;
              return (
                <button
                  key={subcat.id}
                  onClick={() => {
                    setActiveTab(subcat.id);
                    const el = document.getElementById(`condition-${subcat.id}`);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#F59E0B] text-white shadow-xs font-bold'
                      : 'bg-[#F8FAFD] text-[#475569] border border-[#D8E1F5] hover:border-[#303A88] hover:text-[#303A88]'
                  }`}
                >
                  <span>{subcat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Skin & Scalp Symptom Assessment Tool */}
      <section className="py-12 bg-gradient-to-r from-[#EEF2FB] via-[#F4F7FD] to-[#FEF3C7]/40 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  Self-Check Clinical Tool
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1E2559]">
                  Dermatological &amp; Scalp Symptom Assessment
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mb-6">
              Select your primary skin or scalp manifestations and known triggers to receive personalized constitutional insights and recommended investigative tests.
            </p>

            {/* Step 1: Active Symptoms */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#1E2559] uppercase tracking-wide mb-2.5">
                Step 1: What skin or scalp symptoms are you experiencing? (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {symptomOptions.map((item) => {
                  const isChecked = selectedSymptoms.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleSymptom(item.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'border-[#303A88] bg-[#EEF2FB] text-[#1E2559] font-semibold'
                          : 'border-[#D8E1F5] bg-white text-[#475569] hover:bg-[#F8FAFD]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#303A88] text-white' : 'border border-[#CBD5E1]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Trigger Exposures */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#1E2559] uppercase tracking-wide mb-2.5">
                Step 2: What climatic, topical or physiological triggers worsen your flares?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {triggerOptions.map((item) => {
                  const isChecked = selectedTriggers.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleTrigger(item.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'border-[#F59E0B] bg-[#FFFBEB] text-[#92400E] font-semibold'
                          : 'border-[#D8E1F5] bg-white text-[#475569] hover:bg-[#F8FAFD]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#F59E0B] text-white' : 'border border-[#CBD5E1]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EEF2FB]">
              <div className="text-xs text-[#64748B]">
                {selectedSymptoms.length + selectedTriggers.length} parameters selected
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {(selectedSymptoms.length > 0 || selectedTriggers.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedSymptoms([]);
                      setSelectedTriggers([]);
                      setAssessmentGenerated(false);
                    }}
                    className="text-xs text-[#64748B] hover:text-[#E11D48] underline px-2 py-1"
                  >
                    Reset
                  </button>
                )}

                <button
                  onClick={() => setAssessmentGenerated(true)}
                  disabled={selectedSymptoms.length === 0}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#303A88] hover:bg-[#252E6D] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Activity className="w-4 h-4 text-[#F59E0B]" />
                  <span>Generate Dermatological Clinical Insight</span>
                </button>
              </div>
            </div>

            {/* Assessment Result Card */}
            {assessmentGenerated && (
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#EEF2FB] border border-[#303A88]/20 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#45AC4B]" />
                    <h4 className="text-sm font-bold text-[#1E2559]">
                      Dermatological Clinical Analysis Summary
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#303A88] bg-white px-2.5 py-1 rounded-full border border-[#D8E1F5]">
                    Preliminary Assessment
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <p>
                    <strong className="text-[#1E2559]">Pathological Classification:</strong>{' '}
                    {selectedSymptoms.some((s) => ['silvery_scales', 'patchy_hair_loss', 'intense_itching'].includes(s))
                      ? 'Features suggest an autoimmune/inflammatory epidermal barrier dysregulation (e.g. Plaque Psoriasis, Alopecia Areata, or Atopic Eczema) requiring constitutional immune re-modulation.'
                      : selectedSymptoms.some((s) => ['ring_lesions', 'flaking_scalp'].includes(s))
                      ? 'Features are characteristic of cutaneous fungal/dermatophyte activity (Tinea or Seborrheic Dermatitis), where host skin immunity and sebum micro-flora must be addressed.'
                      : selectedSymptoms.some((s) => ['rough_warts', 'foot_callus_pain'].includes(s))
                      ? 'Features point toward benign viral verrucae (HPV) or mechanical hyperkeratotic pressure corns requiring targeted non-invasive cellular medicines.'
                      : 'Mixed dermatological manifestations involving skin barrier lipid depletion and chronic cutaneous reactivity.'}
                  </p>

                  <p>
                    <strong className="text-[#1E2559]">Climatic &amp; Physiological Factor:</strong>{' '}
                    {selectedTriggers.includes('monsoon_humidity')
                      ? 'High tropical ambient humidity promotes fungal spore germination and secondary bacterial maceration.'
                      : selectedTriggers.includes('steroid_rebound')
                      ? 'Prior topical corticosteroid exposure indicates a high risk of rebound flares; gentle constitutional detoxification is recommended.'
                      : selectedTriggers.includes('hormonal_swings')
                      ? 'Endocrine fluctuations (estrogen/progesterone/thyroid) are actively triggering melanocyte or follicular sensitivity.'
                      : 'Environmental irritants and internal immune thresholds are contributing to recurring skin and scalp reactivity.'}
                  </p>

                  <p>
                    <strong className="text-[#1E2559]">Recommended Medical Tests:</strong>{' '}
                    Complete Blood Count with Absolute Eosinophil Count, Serum Ferritin, Thyroid Profile (TSH/FT4), Fasting Blood Glucose, and Trichoscopy or Fungal KOH scraping if not yet evaluated.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D8E1F5] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#64748B]">
                    Discuss these findings directly with Dr. Anjali Chandrasekhar:
                  </span>
                  <button
                    onClick={() =>
                      handleBookConsultation(
                        `Skin & Scalp Assessment: ${selectedSymptoms.join(', ')}`
                      )
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with These Parameters</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Detailed Clinical Sub-Category Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
            Evidence-Informed Clinical Protocols
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-1">
            Comprehensive Care for All 17 Skin, Hair &amp; Scalp Conditions
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            Each condition is evaluated through clinical dermatology, diagnostic criteria, differential diagnosis, non-steroidal constitutional homeopathy, and lifestyle barrier repair.
          </p>
        </div>

        {/* Condition Cards Stack */}
        <div className="space-y-12">
          {filteredConditions().map((condition) => (
            <article
              key={condition.id}
              id={`condition-${condition.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D8E1F5] shadow-md hover:shadow-lg transition-all"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#EEF2FB]">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F59E0B] bg-[#FFFBEB] px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
                      {condition.categoryName}
                    </span>
                    {condition.commonName && (
                      <span className="text-[11px] font-semibold text-[#64748B] bg-[#F8FAFD] px-2.5 py-0.5 rounded-full border border-[#D8E1F5]">
                        Commonly: {condition.commonName}
                      </span>
                    )}
                    <span className="text-[11px] font-medium text-[#475569] bg-[#EEF2FB] px-2 py-0.5 rounded-full">
                      {condition.bodySystem}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E2559]">
                    {condition.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-3xl">
                    {condition.shortDescription}
                  </p>
                </div>

                {/* Instant Action CTA on Card */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello Dr. Anjali, I am inquiring about homeopathic consultation for ${condition.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#EDF8EE] hover:bg-[#D3EED6] text-[#2F8335] border border-[#C4EAC7] transition-colors"
                    title={`Enquire on WhatsApp for ${condition.name}`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
                  </a>

                  <button
                    onClick={() => handleBookConsultation(condition.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#303A88] hover:bg-[#252E6D] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Consult for {condition.name}</span>
                  </button>
                </div>
              </div>

              {/* Card Body: 3-Column Clinical Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                
                {/* Column 1: Pathology & Symptoms (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#EEF2FB]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                      <Info className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Pathology &amp; Overview</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {condition.overview}
                    </p>
                    {condition.overviewPoints && condition.overviewPoints.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {condition.overviewPoints.map((pt, i) => (
                          <li key={i} className="text-xs text-[#475569] flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Common Symptoms */}
                  <div className="p-4 rounded-2xl bg-[#EEF2FB]/60 border border-[#D8E1F5]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#303A88] mb-2">
                      <Activity className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Clinical Manifestations</span>
                    </div>
                    <ul className="space-y-1.5">
                      {condition.commonSymptoms.map((symp, i) => (
                        <li key={i} className="text-xs text-[#475569] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0 mt-0.5" />
                          <span>{symp}</span>
                        </li>
                      ))}
                    </ul>
                    {condition.symptomsNote && (
                      <div className="mt-3 text-[11px] text-[#64748B] italic border-t border-[#D8E1F5] pt-2">
                        Note: {condition.symptomsNote}
                      </div>
                    )}
                  </div>
                </div>

                {/* Column 2: Etiology, Triggers & Diagnosis (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#D8E1F5]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                      <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Etiology &amp; Known Triggers</span>
                    </div>
                    <ul className="space-y-1.5">
                      {condition.causesAndRisks.map((cause, i) => (
                        <li key={i} className="text-xs text-[#475569] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#D8E1F5]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                      <FileText className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Diagnostic Evaluation</span>
                    </div>
                    <ul className="space-y-1.5">
                      {condition.diagnosisMethods.map((diag, i) => (
                        <li key={i} className="text-xs text-[#475569] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                          <span>{diag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 3: Homeopathic Strategy & Clinical Cautions (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Homeopathic Protocol */}
                  <div className="p-4 rounded-2xl bg-[#EDF8EE] border border-[#C4EAC7]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F8335] mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#45AC4B]" />
                      <span>Non-Steroidal Homeopathic Approach</span>
                    </div>
                    <ul className="space-y-1.5">
                      {condition.homeopathicApproach.map((app, i) => (
                        <li key={i} className="text-xs text-[#2A6E2E] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#45AC4B] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning Signs & Red Flags */}
                  <div className="p-4 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#BE123C] mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>Warning Signs &amp; Immediate Red Flags</span>
                    </div>
                    <ul className="space-y-1">
                      {condition.warningSigns.map((warn, i) => (
                        <li key={i} className="text-xs text-[#9F1239] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                          <span>{warn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lifestyle & Barrier Care */}
                  <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#92400E] mb-1.5">
                      <Droplets className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Barrier Care &amp; Daily Guidance</span>
                    </div>
                    <ul className="space-y-1">
                      {condition.lifestyleTips.map((tip, i) => (
                        <li key={i} className="text-xs text-[#78350F] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Medical Red Flags & Dermatological Emergency Section */}
      <section className="py-12 bg-white border-t border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#FFF1F2] via-[#FFF7ED] to-[#FEF2F2] p-6 sm:p-8 border border-[#FECDD3] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#BE123C]">
                  Patient Clinical Safety Notice
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#881337]">
                  Dermatological Red Flags Requiring Immediate Emergency Hospital Attention
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
              While constitutional homeopathy is exceptionally effective for chronic, relapsing dermatological conditions, certain acute symptoms indicate life-threatening dermatological emergencies or systemic toxic syndromes that require immediate emergency casualty evaluation:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#881337]">
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Eczema Herpeticum:</strong> Rapidly erupting, intensely painful punched-out blisters with high fever in an eczema patient (HSV infection).
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Stevens-Johnson Syndrome (SJS / TEN):</strong> Target-like painful peeling rash involving mucous membranes (mouth, eyes, genitals) post-drug exposure.
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Severe Erythroderma:</strong> Redness and scaling involving &gt; 90% body surface area, accompanied by severe shivering and hypothermia risk.
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Ophthalmic Herpes Zoster:</strong> Shingles blisters involving the tip of the nose (Hutchinson’s sign) or eye redness with visual loss risk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Mid-Page Consultation Banner */}
      <section className="py-12 bg-gradient-to-r from-[#1E2559] via-[#2A3478] to-[#303A88] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/30 shrink-0 hidden sm:block shadow-md bg-white">
                <img
                  src="/images/treatment-skin-hair.svg"
                  alt="Dermatology Treatment Protocol"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Direct Clinical Care
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-editorial text-white">
                  Suffering from Chronic Skin Flares or Sudden Hair Loss?
                </h3>
                <p className="text-xs sm:text-sm text-[#D8E1F5] mt-1 max-w-2xl">
                  Connect with Dr. Anjali Chandrasekhar (BHMS) for a thorough constitutional case analysis and personalized non-steroidal management plan.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => handleBookConsultation()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Skin &amp; Hair Consultation</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-white text-[#1E2559] hover:bg-[#EEF2FB] text-xs sm:text-sm font-bold transition-all shadow-sm whitespace-nowrap"
                title="Call 0989101707"
              >
                <Phone className="w-4 h-4 text-[#45AC4B]" />
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
            Dermatological &amp; Scalp Insights
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
            Frequently Asked Questions on Homeopathic Skin &amp; Hair Care
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            Answers by Dr. Anjali Chandrasekhar on non-steroidal treatments, steroid withdrawal, timeline to recovery, and hair regrowth.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#1E2559] hover:text-[#303A88] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#94A3B8] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#303A88]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Booking Section Anchor */}
      <section id="booking-section" className="py-12 bg-white border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#45AC4B]">
              Seamless Appointment Booking
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Skin, Hair &amp; Scalp Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select Online Video Consultation (with medicine courier anywhere in India/Abroad) or In-Clinic Consultation at Kuttippuram / Valanchery.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* 10. Sticky Mobile CTA Quick-Action Dock */}
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
            <Calendar className="w-4 h-4 text-[#F59E0B] mb-0.5" />
            <span>Book Now</span>
            <span className="text-[9px] text-[#D8E1F5]">Slot Confirm</span>
          </button>
        </div>
      </div>

      {/* 11. Full HD Doctor Photo Inspection Modal */}
      {isPhotoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Doctor Profile Photo Inspection"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[3/4] bg-slate-100">
              <img
                src="/images/treatment-skin-hair.svg"
                alt="Skin, Hair & Scalp Clinical Treatment Protocol Artwork"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-5 bg-white border-t border-[#EEF2FB]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#1E2559]">
                    Dr. Anjali Chandrasekhar (BHMS)
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Senior Homeopathic Physician • Dermatology &amp; Trichology Discipline
                  </p>
                </div>
                <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-1 rounded-full border border-[#D8E1F5]">
                  Board Reg. KA-HOM-15563
                </span>
              </div>
              <p className="mt-2 text-xs text-[#475569]">
                Clinical dermatological protocol and skin/hair anatomical diagram for individualized homeopathic management at Anjali Homeo Clinic, Malappuram.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
