import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import { RENAL_THYROID_CONDITIONS } from '../data/conditions/renalThyroidConditions';
import {
  Activity,
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
  Layers,
  ShieldAlert,
  Droplets,
  Flame,
  Zap,
} from 'lucide-react';

export const RenalThyroidCarePage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Interactive Assessment Tool state
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [assessmentGenerated, setAssessmentGenerated] = useState(false);

  // Phone numbers as requested
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';

  // WhatsApp helper
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Dr. Anjali, I would like to enquire about homeopathic consultation for Renal, Urinary, Gallbladder & Thyroid Conditions."
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
      specificReason || "Renal, Urinary, Gallbladder & Thyroid Conditions",
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

  // Subcategory mapping as requested by user
  const subCategoryList = [
    { id: 'thyroid-imbalances-goiter', name: 'Thyroid Imbalances & Goiter', tag: 'Endocrine & Metabolic Regimen' },
    { id: 'kidney-urinary-stones', name: 'Kidney & Urinary Tract Stones', tag: 'Complete Urolithiasis Spectrum' },
    { id: 'gallbladder-stones', name: 'Gallbladder Stones', tag: 'Cholelithiasis & Biliary Colic' },
    { id: 'kidney-stones', name: 'Kidney Stones', tag: 'Renal Calculi & Nephrolithiasis' },
    { id: 'urinary-tract-stones', name: 'Urinary Tract Stones', tag: 'Ureteral & Bladder Calculi' },
  ];

  const allConditions = RENAL_THYROID_CONDITIONS;

  // Filter conditions based on selected tab
  const filteredConditions = () => {
    if (activeTab === 'all') return allConditions;
    if (activeTab === 'thyroid-imbalances-goiter') {
      return allConditions.filter(
        (c) => c.id === 'thyroid-imbalances' || c.id === 'goiter'
      );
    }
    if (activeTab === 'kidney-urinary-stones') {
      return allConditions.filter(
        (c) => c.id === 'kidney-stones' || c.id === 'urinary-tract-stones'
      );
    }
    return allConditions.filter((c) => c.id === activeTab);
  };

  // Assessment tool symptom options
  const symptomOptions = [
    { id: 'loin_colic', label: 'Severe, spasmodic loin-to-groin flank pain coming in sharp waves (renal colic)' },
    { id: 'hematuria', label: 'Blood or pink/tea-colored discoloration in urine with burning micturition' },
    { id: 'urinary_urgency', label: 'Constant urge to urinate, passing small drops, or interrupted flow' },
    { id: 'ruq_biliary_pain', label: 'Right upper abdominal ache radiating to right shoulder 30–60 mins after fatty food' },
    { id: 'biliary_dyspepsia', label: 'Chronic indigestion, severe right-sided bloating, flatulence & nausea' },
    { id: 'hypothyroid_fatigue', label: 'Chronic sluggishness, unexplained weight gain, severe chilliness & brain fog' },
    { id: 'neck_fullness', label: 'Visible swelling in the lower front neck or feeling of a lump when swallowing' },
    { id: 'hyperthyroid_tremors', label: 'Rapid heart palpitations, heat intolerance, hand tremors & unintended weight loss' },
  ];

  // Assessment tool trigger options
  const triggerOptions = [
    { id: 'chronic_dehydration', label: 'Low fluid intake, sweating in tropical heat, dark concentrated urine' },
    { id: 'high_oxalate_purine', label: 'Frequent high-oxalate foods (spinach, strong tea) or red meat / shellfish' },
    { id: 'rich_fatty_diet', label: 'Heavy, fried, or rich oily meals precipitating sudden gallbladder spasms' },
    { id: 'autoimmune_family', label: 'Personal or family history of Hashimoto’s, Graves’ or metabolic stone disease' },
    { id: 'prolonged_stress', label: 'Chronic elevated psychological stress disrupting cortisol and T4-to-T3 conversion' },
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
      question: 'Can kidney and urinary tract stones pass naturally with homeopathic medicine without surgery?',
      answer:
        'Calculi smaller than 5 mm to 6 mm located in the renal calyces or ureters have an excellent likelihood of spontaneous, non-invasive expulsion with proper hydration and homeopathic organ drainage therapeutics (such as Berberis Vulgaris, Lycopodium, Sarsaparilla, and Cantharis). These remedies relieve smooth muscle ureteral spasms, ease excruciating colic, and assist in expelling gravel and micro-stones. However, large obstructing stones (> 8 mm), staghorn calculi, or any stones causing significant hydronephrosis or infection require immediate urological intervention (such as ESWL or URS lithotripsy). Regular ultrasound or CT KUB imaging is essential to track stone size and location objectively.',
    },
    {
      question: 'What is the relationship between kidney stones and urinary tract stones?',
      answer:
        'Kidney stones (nephrolithiasis) and urinary tract stones (ureterolithiasis / cystolithiasis) represent a continuous anatomical continuum. Almost all urinary tract stones originate in the microscopic renal tubules and calyces. When they detach and travel down the ureter toward the urinary bladder, they often become lodged at physiological anatomical narrowings (the pelviureteric junction, the pelvic brim crossing the iliac vessels, and the ureterovesical junction entering the bladder). Homeopathy treats both the acute painful spasm and the underlying metabolic tendency toward urinary crystallization.',
    },
    {
      question: 'Can gallstones (cholelithiasis) be dissolved with homeopathic remedies?',
      answer:
        'Unlike kidney stones, which are in the open urinary tract and can be flushed via increased fluid intake, gallstones reside within the hepatobiliary sac. Dissolving dense calcified gallstones or large cholesterol concretions medically is difficult and rarely permanent. For silent or mild stable gallstones, constitutional homeopathic care (such as Chelidonium, Carduus Marianus, Hydrastis, and Fel Tauri) works to optimize bile composition, reduce biliary sludge, relieve biliary dyspepsia, and prevent recurrent inflammation. However, acute severe biliary colic lasting over 6 hours, jaundice, or acute cholecystitis necessitates urgent surgical consultation.',
    },
    {
      question: 'Can I stop my daily allopathic thyroid medication (levothyroxine) if I take homeopathy?',
      answer:
        'No. You must NEVER abruptly discontinue your prescribed levothyroxine or thyroid hormone replacement tablets. Levothyroxine provides an essential physiological hormone that your body cannot synthesize in sufficient quantities. Homeopathy acts as a safe, constitutional co-therapy that supports thyroid gland vascularization, dampens autoimmune anti-TPO reactivity, reduces peripheral lethargy, and enhances well-being. Any dosage adjustments must be determined strictly by your endocrinologist based on objective periodic blood tests (TSH, FT4, FT3).',
    },
    {
      question: 'What causes a goiter and how does constitutional homeopathy support thyroid swelling?',
      answer:
        'A goiter is an abnormal enlargement of the thyroid gland, which can be diffuse or multinodular. Common causes include autoimmune Hashimoto’s thyroiditis, Graves’ disease, iodine utilization defects, or thyroid nodules. Constitutional homeopathy (including Iodum, Spongia Tosta, Calcarea Carb, and Thyroidinum) addresses metabolic sluggishness, helps reduce glandular congestion, and supports systemic vitality. Any rapidly enlarging, painless, rock-hard thyroid nodule or hoarseness requires immediate ultrasound and FNAC biopsy to exclude malignancy.',
    },
    {
      question: 'Why do kidney stones recur so frequently and how does homeopathy break this cycle?',
      answer:
        'Nearly 50% of individuals who pass a kidney stone experience a recurrence within 5 to 10 years because passing a stone does not fix the underlying metabolic supersaturation (excess urinary calcium, oxalates, or uric acid, combined with a deficiency of protective crystallization inhibitors like urinary citrate). Constitutional homeopathy addresses these deep metabolic diatheses, helping rebalance urinary pH and mineral handling when paired with targeted dietary counseling (optimal hydration, moderate sodium, adequate dietary calcium, and lemon water).',
    },
    {
      question: 'What laboratory reports or ultrasound scans should I upload for my consultation?',
      answer:
        'For renal and urinary stone cases: bring or upload your recent Ultrasound KUB or Non-Contrast CT KUB (NCCT), Urine Routine and Microscopy, and Serum Creatinine / Blood Urea reports. For gallbladder cases: bring your Abdominal Ultrasound report and Liver Function Tests (Total Bilirubin, ALP, ALT, AST). For thyroid concerns: bring your recent Thyroid Profile (TSH, Free T4, Free T3), Anti-TPO / Anti-Tg antibody titers, and Thyroid Ultrasound (TIRADS report) if completed.',
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
                '@id': 'https://anjalihomoeoclinic.com/homeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/#webpage',
                url: 'https://anjalihomoeoclinic.com/homeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
                name: 'Renal, Urinary & Thyroid Homeopathic Treatment in Malappuram',
                description:
                  'Explore consultations for renal, urinary, gallbladder and thyroid concerns at Anjali Homoeo Clinic in Malappuram, Kerala. Get personalized healthcare guidance.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://anjalihomoeoclinic.com/#website',
                  name: 'Anjali Homoeo Clinic',
                  url: 'https://anjalihomoeoclinic.com',
                },
                about: {
                  '@type': 'MedicalSpecialty',
                  name: 'Homeopathic Endocrinology, Nephrology & Hepatobiliary Care',
                },
                audience: {
                  '@type': 'Patient',
                  audienceType:
                    'Patients with recurrent kidney stones, urinary calculi, gallbladder stones, biliary dyspepsia, hypothyroidism, hyperthyroidism, or goiter',
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
                    name: 'Renal, Urinary & Thyroid Homeopathic Treatment in Malappuram',
                    item: 'https://anjalihomoeoclinic.com/homeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/',
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
            <span className="text-[#303A88] font-bold">Renal, Urinary, Gallbladder &amp; Thyroid Conditions</span>
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
                <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Specialized Clinical Discipline • Nephrology, Hepatobiliary &amp; Endocrinology</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-[1.15] tracking-tight">
                Homeopathic Treatment for Renal, Urinary, Gallbladder &amp; Thyroid Conditions
              </h1>

              {/* Lead Narrative */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Evidence-informed, non-invasive constitutional homeopathy and organ drainage therapy for kidney stones (renal calculi), ureteral &amp; bladder calculi, gallbladder stones (cholelithiasis), hypothyroidism, Hashimoto’s thyroiditis, and goiter. Dr. Anjali Chandrasekhar provides individualized constitutional protocols aimed at metabolically inhibiting crystal supersaturation, relieving spasms, and harmonizing endocrine pathways safely.
              </p>

              {/* Key Clinical Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-[#1E2559]">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>Non-Invasive Expulsion</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Droplets className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Anti-Crystallization</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Flame className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Biliary Comfort</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Activity className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>TSH Surveillance</span>
                </div>
              </div>

              {/* CTA Section - Elegant Desktop & Mobile Versions */}
              <div className="mt-8 space-y-4">
                {/* Main CTA Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                  
                  {/* Primary CTA: Book Renal, Gallbladder & Thyroid Consultation */}
                  <button
                    onClick={() => handleBookConsultation()}
                    className="sm:col-span-7 group relative inline-flex items-center justify-between gap-3 bg-gradient-to-r from-[#303A88] via-[#2A3478] to-[#1E2559] hover:from-[#252E6D] hover:to-[#171D47] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-[#0284C7]" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                          Book Renal &amp; Thyroid Consultation
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#D8E1F5] font-normal">
                          Online Video or In-Clinic Slot • Instant Confirm
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0284C7] group-hover:translate-x-1 transition-transform shrink-0" />
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
                    <span>CT KUB, Ultrasound &amp; TSH Informed Protocol</span>
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
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#303A88]/20 via-[#0284C7]/15 to-[#EEF2FB] rounded-[36px] blur-xl opacity-80" />

                {/* Main Treatment Protocol Frame */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 border border-[#D8E1F5] shadow-2xl">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EEF2FB] to-[#D8E1F5] shadow-inner group">
                    <img
                      src="/images/treatment-renal-thyroid.svg"
                      alt="Renal, Urinary, Gallbladder & Thyroid Clinical Homeopathic Treatment Protocol"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                      loading="eager"
                    />

                    {/* Subtle top pill badge */}
                    <div className="absolute top-3 left-3 bg-[#1E2559]/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                      <span>Renal & Endocrine Protocol</span>
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
                      <div className="text-[10px] text-[#64748B]">Safe &amp; Natural</div>
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
                <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Specialized Sub-Categories Under Care</span>
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#1E2559]">
                Select a Condition for Diagnostic &amp; Treatment Breakdown
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
              All Conditions ({allConditions.length})
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
                      ? 'bg-[#0284C7] text-white shadow-xs font-bold'
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

      {/* 4. Interactive Renal, Biliary & Thyroid Assessment Tool */}
      <section className="py-12 bg-gradient-to-r from-[#EEF2FB] via-[#F4F7FD] to-[#E0F2FE]/40 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  Self-Check Clinical Tool
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1E2559]">
                  Renal, Urinary, Gallbladder &amp; Thyroid Symptom Assessment
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] mb-6">
              Select your active symptoms and dietary/metabolic factors to receive individualized constitutional analysis and recommended diagnostic tests.
            </p>

            {/* Step 1: Active Symptoms */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#1E2559] uppercase tracking-wide mb-2.5">
                Step 1: What physical symptoms or discomfort are you experiencing? (Select all that apply)
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

            {/* Step 2: Dietary & Metabolic Triggers */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#1E2559] uppercase tracking-wide mb-2.5">
                Step 2: What lifestyle, hydration, or metabolic factors apply to you?
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
                          ? 'border-[#0284C7] bg-[#F0F9FF] text-[#0369A1] font-semibold'
                          : 'border-[#D8E1F5] bg-white text-[#475569] hover:bg-[#F8FAFD]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#0284C7] text-white' : 'border border-[#CBD5E1]'
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
                  <Activity className="w-4 h-4 text-[#0284C7]" />
                  <span>Generate Organ Drainage &amp; Clinical Analysis</span>
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
                      Organ System Clinical Evaluation Summary
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#303A88] bg-white px-2.5 py-1 rounded-full border border-[#D8E1F5]">
                    Preliminary Assessment
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <p>
                    <strong className="text-[#1E2559]">Clinical System Profile:</strong>{' '}
                    {selectedSymptoms.some((s) => ['loin_colic', 'hematuria', 'urinary_urgency'].includes(s))
                      ? 'Features strongly point toward urolithiasis (renal or ureteral calculi) causing urinary tract irritation or smooth muscle spasm. Expulsive potential depends on stone diameter, location, and absence of hydronephrosis.'
                      : selectedSymptoms.some((s) => ['ruq_biliary_pain', 'biliary_dyspepsia'].includes(s))
                      ? 'Symptoms are characteristic of biliary tract involvement (cholelithiasis or biliary dyskinesia), where fat-induced gallbladder contractions cause spasmodic epigastric or right upper quadrant discomfort.'
                      : selectedSymptoms.some((s) => ['hypothyroid_fatigue', 'neck_fullness', 'hyperthyroid_tremors'].includes(s))
                      ? 'Features indicate an endocrine-metabolic imbalance (hypothyroidism, autoimmune thyroiditis, or goiter) affecting basal metabolic rate and cellular vitality.'
                      : 'Mixed visceral or metabolic symptoms involving urinary mineral clearance, biliary motility, or endocrine regulation.'}
                  </p>

                  <p>
                    <strong className="text-[#1E2559]">Metabolic Risk &amp; Hydration:</strong>{' '}
                    {selectedTriggers.includes('chronic_dehydration')
                      ? 'Low urine volume accelerates mineral crystal supersaturation (calcium oxalate/phosphate precipitation). Increasing structured daily water intake is paramount.'
                      : selectedTriggers.includes('rich_fatty_diet')
                      ? 'High-fat intake triggers vigorous cholecystokinin release and painful gallbladder contractions; dietary fat moderation is advised.'
                      : selectedTriggers.includes('autoimmune_family')
                      ? 'Autoimmune tendencies (e.g. Hashimoto’s) require constitutional immune modulation and antibody surveillance.'
                      : 'Nutritional balance and metabolic organ support are vital to prevent progressive stone formation or hormonal fluctuations.'}
                  </p>

                  <p>
                    <strong className="text-[#1E2559]">Recommended Medical Investigations:</strong>{' '}
                    Ultrasound of the Abdomen &amp; Pelvis (KUB + Hepatobiliary system) or Non-contrast CT KUB, Urine Routine &amp; Microscopic examination, Serum Creatinine, Liver Function Tests (LFTs), and Thyroid Panel (TSH, FT4, FT3, Anti-TPO).
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D8E1F5] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#64748B]">
                    Discuss these parameters with Dr. Anjali Chandrasekhar:
                  </span>
                  <button
                    onClick={() =>
                      handleBookConsultation(
                        `Renal & Thyroid Assessment: ${selectedSymptoms.join(', ')}`
                      )
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with These Findings</span>
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
            Clinical Breakdown for All Conditions Under Care
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            Detailed insights on diagnostic imaging, clinical red flags, mineral supersaturation, conventional perspectives, and constitutional homeopathic organ drainage.
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#F0F9FF] px-2.5 py-0.5 rounded-full border border-[#BAE6FD]">
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
                    <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
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
                      <span>Pathology &amp; Anatomy</span>
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
                      <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Etiology &amp; Risk Factors</span>
                    </div>
                    <ul className="space-y-1.5">
                      {condition.causesAndRisks.map((cause, i) => (
                        <li key={i} className="text-xs text-[#475569] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#D8E1F5]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                      <FileText className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Diagnostic Imaging &amp; Labs</span>
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

                {/* Column 3: Homeopathic Protocol & Safety (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Homeopathic Protocol */}
                  <div className="p-4 rounded-2xl bg-[#EDF8EE] border border-[#C4EAC7]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2F8335] mb-2">
                      <Zap className="w-3.5 h-3.5 text-[#45AC4B]" />
                      <span>Constitutional &amp; Drainage Care</span>
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
                      <span>Clinical Red Flags &amp; Urgency</span>
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

                  {/* Lifestyle & Dietary Hydration */}
                  <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0369A1] mb-1.5">
                      <Droplets className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Dietary Hydration &amp; Prevention</span>
                    </div>
                    <ul className="space-y-1">
                      {condition.lifestyleTips.map((tip, i) => (
                        <li key={i} className="text-xs text-[#075985] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
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

      {/* 6. Medical Red Flags & Emergency Boundaries */}
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
                  Urological, Biliary &amp; Endocrine Emergencies Requiring Immediate Hospital Attention
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
              Constitutional homeopathy provides outstanding supportive and restorative care for chronic, stable, and recurrent conditions. However, patients experiencing acute organ compromise or systemic toxic infection must proceed immediately to an emergency hospital casualty:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#881337]">
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Infected Obstructed Kidney (Infected Hydronephrosis):</strong> Severe loin pain accompanied by high fever, shaking rigors, and vomiting (high risk of urosepsis; emergency surgical decompression required).
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Anuria / Acute Urinary Retention:</strong> Complete inability to pass urine, extreme bladder fullness, or bilateral ureteral obstruction.
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Acute Cholecystitis &amp; Cholangitis:</strong> Continuous RUQ abdominal pain lasting &gt; 6 hours with high fever, chills, yellowing of eyes/skin (jaundice), or dark tea-colored urine.
                </div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[#FECDD3] flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <div>
                  <strong>Thyroid Storm &amp; Malignant Nodules:</strong> Extreme tachycardia, fever, agitation, confusion (thyroid storm); or rapidly expanding rock-hard neck mass causing difficulty swallowing or breathing.
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
                  src="/images/treatment-renal-thyroid.svg"
                  alt="Renal & Thyroid Treatment Protocol"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  Direct Clinical Care
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-editorial text-white">
                  Suffering from Kidney Stones, Gallstones, or Thyroid Fatigue?
                </h3>
                <p className="text-xs sm:text-sm text-[#D8E1F5] mt-1 max-w-2xl">
                  Consult with Dr. Anjali Chandrasekhar (BHMS) for a personalized constitutional case review and non-invasive organ drainage protocol.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => handleBookConsultation()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-bold transition-all shadow-md whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Renal &amp; Thyroid Consultation</span>
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
            Clinical Insights &amp; Guidance
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
            Frequently Asked Questions on Renal, Biliary &amp; Thyroid Care
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            Answers by Dr. Anjali Chandrasekhar on non-invasive stone expulsion, prevention of recurrence, levothyroxine co-management, and safety boundaries.
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
                    <HelpCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
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
              Schedule Your Renal, Gallbladder &amp; Thyroid Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select Online Video Consultation (with doorstep courier across India &amp; abroad) or In-Clinic Consultation at Kuttippuram / Valanchery.
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
            <Calendar className="w-4 h-4 text-[#0284C7] mb-0.5" />
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
                src="/images/treatment-renal-thyroid.svg"
                alt="Renal, Urinary, Gallbladder & Thyroid Clinical Protocol Artwork"
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
                    Senior Homeopathic Physician • Nephrology &amp; Endocrine Care
                  </p>
                </div>
                <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-1 rounded-full border border-[#D8E1F5]">
                  Board Reg. KA-HOM-15563
                </span>
              </div>
              <p className="mt-2 text-xs text-[#475569]">
                Clinical treatment protocol and anatomical reference diagram for individualized homeopathic management at Anjali Homeo Clinic, Malappuram.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
