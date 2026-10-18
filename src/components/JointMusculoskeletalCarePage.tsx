import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import { JOINT_CONDITIONS } from '../data/conditions/jointConditions';
import {
  Layers,
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
  Compass,
} from 'lucide-react';

export const JointMusculoskeletalCarePage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Interactive Assessment Tool state
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [assessmentGenerated, setAssessmentGenerated] = useState(false);

  // Phone numbers as requested across clinical pages
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';

  // WhatsApp helper
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Dr. Anjali, I would like to enquire about homeopathic consultation for Joint, Musculoskeletal & Spondylitis Conditions."
  )}`;

  // Set page meta, scroll to top on mount, and track scroll for mobile sticky bar
  useEffect(() => {
    document.title = "Homoeopathic Treatment for Joint, Musculoskeletal & Chronic Conditions | Anjali Homeo Clinic";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Advanced, non-invasive constitutional homeopathic management for Osteoarthritis, Rheumatic Diseases, Cervical Spondylitis, and Lumbar Spondylitis in Malappuram & Online by Dr. Anjali Chandrasekhar.'
      );
    }

    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookConsultation = (specificReason?: string) => {
    navigateToBookingWithReason(
      specificReason || "Joint, Musculoskeletal & Chronic Conditions",
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

  // Subcategory list matching user requested 4 conditions
  const subCategoryList = [
    { id: 'osteoarthritis', name: 'Osteoarthritis', tag: 'Cartilage Wear & Mechanical Crepitus' },
    { id: 'rheumatic-diseases', name: 'Rheumatic Diseases', tag: 'Autoimmune Synovitis & Morning Stiffness' },
    { id: 'cervical-spondylosis', name: 'Cervical Spondylitis', tag: 'Neck Stiffness, Disc Wear & Radiculopathy' },
    { id: 'lumbar-spondylosis', name: 'Lumbar Spondylitis', tag: 'Low Back Degeneration, Sciatica & Canal Stenosis' },
  ];

  const allConditions = JOINT_CONDITIONS;

  // Filter conditions based on selected tab
  const filteredConditions = () => {
    if (activeTab === 'all') return allConditions;
    return allConditions.filter((c) => c.id === activeTab);
  };

  // Assessment tool symptom choices
  const symptomOptions = [
    { id: 'weight_bearing_knee_pain', label: 'Aching knee or hip pain that worsens with walking, squatting, or climbing stairs (Osteoarthritis)' },
    { id: 'joint_crepitus_grating', label: 'Audible or palpable crunching, grating, or crackling (crepitus) inside the knee joint' },
    { id: 'prolonged_morning_stiffness', label: 'Morning joint stiffness lasting more than 45–60 minutes affecting both wrists, fingers, or ankles (Rheumatic)' },
    { id: 'radiating_arm_numbness', label: 'Neck pain radiating down shoulder, arm, or fingers with numbness, pins-and-needles, or dizziness (Cervical Spondylitis)' },
    { id: 'sciatica_shooting_leg_pain', label: 'Electric shock-like shooting pain traveling from lower back through buttock down to calf/foot (Lumbar Spondylitis / Sciatica)' },
    { id: 'gelling_stiffness', label: 'Intense joint stiffness upon standing up after sitting for 30–60 minutes ("gelling phenomenon")' },
    { id: 'weather_aggravation', label: 'Joints and spine ache severely before rain, in damp weather, or in cold air-conditioned rooms' },
    { id: 'restricted_spinal_mobility', label: 'Difficulty turning neck while driving or inability to bend forward to tie shoelaces without severe spasm' },
  ];

  // Assessment tool trigger choices
  const triggerOptions = [
    { id: 'prolonged_sedentary_desk', label: 'Prolonged computer desk posture, forward-head "tech-neck", or lack of ergonomic lumbar support' },
    { id: 'cold_damp_exposure', label: 'Exposure to cold damp breezes, monsoon seasons, or sleeping under direct cold air conditioning' },
    { id: 'overweight_joint_overload', label: 'Excess body weight placing increased biomechanical stress on weight-bearing joints' },
    { id: 'prior_sports_trauma', label: 'History of previous knee injury (ACL, meniscus tear) or heavy manual physical lifting' },
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
      question: 'Can homeopathy prevent or postpone knee replacement surgery in osteoarthritis?',
      answer:
        'In Grade 1, Grade 2, and moderately symptomatic Grade 3 osteoarthritis (Kellgren-Lawrence grading), constitutional homeopathy plays a valuable role. By calming low-grade synovial inflammation, strengthening peri-articular musculature, and optimizing biomechanics, treatments significantly reduce pain and stiffness without causing gastric erosion common with long-term NSAIDs. While advanced bone-on-bone Grade 4 disease with severe joint deformity may eventually require orthopedic joint replacement, many patients successfully preserve mobility, reduce pain, and postpone surgery by years.',
    },
    {
      question: 'How is morning stiffness in Osteoarthritis different from Rheumatic Diseases?',
      answer:
        'Duration and pathology are key differentiators. In Osteoarthritis (a mechanical degenerative wear condition), morning stiffness is typically brief, lasting under 20 to 30 minutes, and eases rapidly as the joint "warms up" with light movement. In contrast, in Rheumatic Diseases (such as Rheumatoid Arthritis or Ankylosing Spondylitis, which are autoimmune systemic inflammatory conditions), morning stiffness is profound and prolonged, typically lasting longer than 45 to 60 minutes and accompanied by bilateral, symmetrical joint swelling and elevated inflammatory blood markers (ESR, CRP, anti-CCP, RF).',
    },
    {
      question: 'What is Cervical Spondylosis, and why does it cause dizziness or arm numbness?',
      answer:
        'Cervical spondylosis involves age- and posture-related wear and tear of the cervical intervertebral discs and vertebrae (C4–C7). As discs dehydrate and bulge, marginal osteophytes (bone spurs) develop. When these spurs or disc herniations compress exiting cervical nerve roots (cervical radiculopathy), patients experience sharp radiating pain, numbness, tingling, and motor weakness down the shoulder, arm, and hand. When bone spurs irritate the sympathetic nerve plexus or compromise vertebral artery flow during neck rotation, it triggers cervicogenic vertigo (dizziness) and occipital headaches.',
    },
    {
      question: 'Can Lumbar Spondylitis and Sciatica be managed without spinal surgery?',
      answer:
        'Yes, over 85% to 90% of lumbar disc protrusions, spondylotic changes, and associated sciatica resolve successfully with conservative, non-surgical management. Constitutional homeopathic remedies (including Rhus Toxicodendron, Hypericum Perforatum, Colocynthis, and Calcarea Fluorica) calm nerve root inflammation, relieve paraspinal muscular spasms, and promote ligamentous stability. This is combined with posture correction, core stabilization exercises, and avoiding prolonged sitting. Emergency surgery is only indicated for "Cauda Equina Syndrome" (loss of bowel/bladder control, progressive foot drop, or saddle anesthesia).',
    },
    {
      question: 'Do homeopathic remedies cause gastric ulcers, acidity, or kidney damage like painkiller tablets?',
      answer:
        'No. Conventional non-steroidal anti-inflammatory drugs (NSAIDs) inhibit protective prostaglandins, frequently inducing gastritis, gastric ulcers, and renal strain when taken chronically for joint conditions. Micro-diluted constitutional homeopathic remedies operate via biological regulatory mechanisms rather than chemical cox-enzyme inhibition, carrying zero risk of gastric ulceration, rebound acidity, or hepatic/renal toxicity, making them ideal for long-term chronic pain management in elderly patients.',
    },
    {
      question: 'What clinical imaging and reports should I bring for my consultation?',
      answer:
        'Please bring all available investigations: weight-bearing knee/hip X-rays, MRI scans of the Cervical or Lumbar spine with radiologist reports, and rheumatological blood panels (CBC, ESR, hs-CRP, Serum Uric Acid, Rheumatoid Factor RF, Anti-CCP, and HLA-B27 if tested). If you have previous orthopedic or physical therapy prescriptions, please share those as well.',
    },
    {
      question: 'How do weather changes (monsoon dampness, cold air conditioning) affect joints?',
      answer:
        'A drop in atmospheric barometric pressure preceding rainy weather causes intra-articular synovial tissues and fluids to expand against sensitive joint capsules and periosteal nerve endings. In homeopathy, "weather modalities" (such as pain worse in cold damp weather and better from dry warmth, classic to Rhus Tox) form a cornerstone of constitutional remedy selection.',
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
                '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/#webpage',
                url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
                name: 'Homoeopathic Treatment for Joint, Musculoskeletal & Chronic Conditions',
                description:
                  'Specialized constitutional homeopathic care for Osteoarthritis, Rheumatic Diseases, Cervical Spondylitis, and Lumbar Spondylitis in Malappuram & online with Dr. Anjali Chandrasekhar.',
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://anjalihomoeoclinic.com/#website',
                  name: 'Anjali Homeo Clinic',
                  url: 'https://anjalihomoeoclinic.com',
                },
                about: {
                  '@type': 'MedicalSpecialty',
                  name: 'Homeopathic Rheumatology & Orthopedic Care',
                },
                audience: {
                  '@type': 'Patient',
                  audienceType:
                    'Patients suffering from knee osteoarthritis, rheumatoid arthritis, cervical neck radiculopathy, lumbar back pain, or sciatica',
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
                    name: 'Joint, Musculoskeletal & Chronic Conditions',
                    item: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/',
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
            <span className="text-[#303A88] font-bold">Joint, Musculoskeletal &amp; Chronic Conditions</span>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#303A88]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Heading, Clinical Summary, Badges & CTAs */}
            <div className="lg:col-span-7">
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] shadow-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Specialized Clinical Discipline • Rheumatology &amp; Spine Health</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-[1.15] tracking-tight">
                Homoeopathic Treatment for Joint, Musculoskeletal &amp; Chronic Conditions
              </h1>

              {/* Lead Narrative */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Evidence-informed, non-invasive constitutional homeopathy for knee Osteoarthritis, autoimmune Rheumatic Diseases, Cervical Spondylitis, and Lumbar Spondylitis with Sciatica. Dr. Anjali Chandrasekhar provides individualized constitutional protocols focused on easing synovial inflammation, slowing cartilage degradation, relieving compressed nerve roots, and restoring physical mobility safely without gastric or renal NSAID toxicity.
              </p>

              {/* Key Clinical Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-[#1E2559]">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>Zero Gastric Ulcers</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Activity className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Cartilage Preservation</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Zap className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Sciatic Nerve Relief</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Heart className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <span>Spine Decompression</span>
                </div>
              </div>

              {/* CTA Section - Elegant Desktop & Mobile Versions */}
              <div className="mt-8 space-y-4">
                {/* Main CTA Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                  
                  {/* Primary CTA: Book Joint & Spine Consultation */}
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
                          Book Joint Consultation
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#D8E1F5] font-normal">
                          Online Video or In-Clinic Slot • Instant Confirm
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#38BDF8] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                  {/* Secondary CTA: Enquire via WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:col-span-5 inline-flex items-center justify-center gap-2.5 bg-[#EDF8EE] hover:bg-[#D3EED6] text-[#2F8335] border border-[#C4EAC7] p-4 rounded-2xl font-bold text-sm transition-all duration-200 shadow-xs hover:shadow text-center"
                  >
                    <MessageCircle className="w-5 h-5 text-[#45AC4B] shrink-0" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

                {/* Direct Dial Telephones Strip */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-[#475569]">
                  <span className="text-[#64748B]">Direct Clinic Lines:</span>
                  <a
                    href={`tel:${phonePrimary}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D8E1F5] hover:border-[#303A88] text-[#1E2559] hover:text-[#303A88] transition-colors shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>{phonePrimary}</span>
                  </a>
                  <a
                    href={`tel:${phoneSecondary.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D8E1F5] hover:border-[#303A88] text-[#1E2559] hover:text-[#303A88] transition-colors shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>{phoneSecondary}</span>
                  </a>
                  <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#45AC4B]" />
                    <span>Mon–Sat 9:30 AM – 7:00 PM</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Doctor Card Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] shadow-xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 rounded-bl-full pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Doctor Image with Click-to-Zoom */}
                  <div className="relative mb-4 cursor-pointer" onClick={() => setIsPhotoModalOpen(true)}>
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-3 border-white shadow-lg ring-4 ring-[#EEF2FB] group-hover:ring-[#303A88]/20 transition-all">
                      <img
                        src="/dr_anjali_portrait.png"
                        alt="Dr. Anjali Chandrasekhar - Senior Homeopathic Orthopedic & Rheumatology Consultant"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1594824813583-66258b444747?auto=format&fit=crop&q=80&w=600";
                        }}
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
                      10+ Years Experience • 12,500+ Patients Treated • Special Focus on Chronic Joint Preservation &amp; Spinal Ergonomics
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
                      <div className="text-base font-bold text-[#2563EB]">Zero</div>
                      <div className="text-[10px] text-[#64748B]">NSAID Toxicity</div>
                    </div>
                  </div>

                  {/* Action on Doctor Card */}
                  <button
                    onClick={() => handleBookConsultation("Consultation with Dr. Anjali Chandrasekhar")}
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
              All 4 Sub-Categories
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

      {/* 4. Interactive Consultation Tool: Joint & Spinal Symptom Assessment */}
      <section className="py-12 bg-gradient-to-r from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EEF2FB]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Interactive Clinical Assessment</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1E2559]">
                  Joint, Spine &amp; Mobility Self-Check
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Select your experienced symptoms and triggers below to receive an instant constitutional analysis and custom consultation recommendation.
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
                <span>Select Your Key Symptoms:</span>
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

            {/* Step 2: Aggravating Triggers Checklist */}
            <div className="mt-6 pt-6 border-t border-[#EEF2FB]">
              <h3 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#303A88] text-white flex items-center justify-center text-[11px]">2</span>
                <span>Select Aggravating Factors / Lifestyle Triggers:</span>
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
                  <span>Generate Clinical Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="w-full bg-[#F4F7FD] rounded-2xl p-5 sm:p-6 border border-[#D8E1F5] animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#303A88] mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#45AC4B]" />
                    <span>Clinical Assessment Summary</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    Based on your selected indicators (
                    <span className="font-semibold text-[#1E2559]">
                      {selectedSymptoms.length} symptom{selectedSymptoms.length === 1 ? '' : 's'},{' '}
                      {selectedTriggers.length} trigger{selectedTriggers.length === 1 ? '' : 's'}
                    </span>
                    ), your profile suggests:
                  </p>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {selectedSymptoms.some((s) => s.includes('knee') || s.includes('crepitus')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>Osteoarthritis / Synovial Wear Profile</span>
                        </div>
                        <p className="text-[#64748B]">
                          Mechanical joint cartilage wear and crepitus. Focus on quadriceps strengthening, weight reduction, and remedies like <em>Bryonia</em>, <em>Rhus Tox</em>, or <em>Causticum</em>.
                        </p>
                      </div>
                    )}

                    {selectedSymptoms.some((s) => s.includes('morning_stiffness')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-[#E11D48]" />
                          <span>Inflammatory Rheumatic Presentation</span>
                        </div>
                        <p className="text-[#64748B]">
                          Prolonged morning stiffness suggests autoimmune synovitis. Verify ESR, hs-CRP, and RF/anti-CCP. Supportive constitutional medicines calm autoimmune hyperactivity safely.
                        </p>
                      </div>
                    )}

                    {selectedSymptoms.some((s) => s.includes('arm_numbness')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>Cervical Spondylitis &amp; Radiculopathy</span>
                        </div>
                        <p className="text-[#64748B]">
                          Cervical nerve root irritation causing radiating pain or dizziness. Indicated remedies like <em>Gelsemium</em>, <em>Hypericum</em>, or <em>Kalmia</em> alongside postural ergonomics.
                        </p>
                      </div>
                    )}

                    {selectedSymptoms.some((s) => s.includes('sciatica') || s.includes('gelling')) && (
                      <div className="p-3 bg-white rounded-xl border border-[#D8E1F5] space-y-1">
                        <div className="font-bold text-[#1E2559] flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#059669]" />
                          <span>Lumbar Spondylitis &amp; Sciatica Pattern</span>
                        </div>
                        <p className="text-[#64748B]">
                          Sciatic nerve tract inflammation or disc degeneration. Remedies like <em>Colocynthis</em>, <em>Magnesium Phos</em>, and <em>Gnaphalium</em> provide non-invasive relief.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#D8E1F5] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-[#64748B]">
                      Discuss this exact symptom matrix directly with Dr. Anjali Chandrasekhar:
                    </span>
                    <button
                      onClick={() => handleBookConsultation("Joint & Spine Case Assessment Review")}
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

      {/* 5. Detailed Clinical Treatment Cards for All 4 Subcategories */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88] font-sans">
            DEEP CLINICAL COMPENDIUM
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
            Detailed Diagnostic &amp; Homeopathic Treatment Profiles
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-2">
            Explore pathology, clinical diagnostic criteria, non-surgical homeopathic therapeutic targets, and warning signs for each major condition.
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
                <p className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-0.5">
                  {condition.commonName}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleBookConsultation(`Consultation for ${condition.name}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book for {condition.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>

            {/* Condition Body Details */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Overview & Key Clinical Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <span>Clinical Overview &amp; Pathophysiology</span>
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
                    <Layers className="w-4 h-4 text-[#2563EB]" />
                    <span>Etiology, Risk Factors &amp; Triggers</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                    {condition.causesAndRisks.map((cause, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
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
                    <span>Clinical &amp; Radiographic Diagnosis</span>
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
                    <span>Conventional Therapies &amp; NSAID Constraints</span>
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
                    Gentle • Cartilage &amp; Nerve Preservation
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
                    <span>Urgent Warning Signs &amp; Surgical Red Flags</span>
                  </h4>
                  <p className="text-xs text-[#9F1239]">
                    Seek immediate emergency orthopedic or neurological hospital evaluation if any of the following occur:
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

              {/* Lifestyle & Ergonomic Tips */}
              {condition.lifestyleTips && condition.lifestyleTips.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-[#2563EB]" />
                    <span>Physical Therapy &amp; Ergonomic Preservation Guidance</span>
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

      {/* 6. Why Choose Anjali Homeo Clinic for Joint & Spine Health */}
      <section className="py-14 bg-white border-t border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
              CLINICAL EXCELLENCE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Why Patients Choose Anjali Homeo Clinic for Joint &amp; Spinal Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center text-[#303A88]">
                <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                Zero NSAID Gastric &amp; Renal Toxicity
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Chronic joint patients often suffer from acidity, gastric ulcers, or kidney strain due to years of painkiller consumption. Homeopathic medicines provide gentle anti-inflammatory support without gastrointestinal ulceration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EDF8EE] flex items-center justify-center text-[#2F8335]">
                <Activity className="w-6 h-6 text-[#45AC4B]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                Deep Constitutional Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Rather than offering temporary superficial painkillers, Dr. Anjali evaluates the patient's biomechanics, radiographic grade, weather sensitivity (cold damp aggravations), and emotional vitality for sustained joint relief.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FB] flex items-center justify-center text-[#303A88]">
                <Award className="w-6 h-6 text-[#303A88]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                Integrative Co-Care &amp; Postural Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We work collaboratively alongside existing physical therapy, orthopedic diagnostics, and rheumatology reports to help patients remain active, preserve articular cartilage, and retain spinal flexibility.
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
              Joint, Musculoskeletal &amp; Spondylitis FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Clear clinical answers to common questions about homeopathy, cartilage wear, spine compression, and non-surgical relief.
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
              Schedule Your Joint &amp; Spine Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl mx-auto">
              Book an in-person appointment at our Malappuram clinic or reserve an online video consultation from anywhere in India or internationally.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* 9. Floating Mobile Sticky Consultation Dock */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-3 shadow-2xl flex items-center justify-between gap-2 animate-in slide-in-from-bottom duration-200">
          <a
            href={`tel:${phonePrimary}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EEF2FB] text-[#303A88] text-xs font-bold border border-[#D8E1F5]"
          >
            <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
            <span>Call Clinic</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EDF8EE] text-[#2F8335] text-xs font-bold border border-[#C4EAC7]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => handleBookConsultation()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#303A88] hover:bg-[#252E6D] text-white text-xs font-bold shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Book Now</span>
          </button>
        </div>
      )}

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
                src="/dr_anjali_portrait.png"
                alt="Dr. Anjali Chandrasekhar - Senior Homeopathic Consultant"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1594824813583-66258b444747?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">Dr. Anjali Chandrasekhar</h3>
              <p className="text-xs text-[#303A88] font-semibold mt-0.5">BHMS • Reg. No. 16503</p>
              <p className="text-xs text-[#64748B] mt-1">
                Senior Physician specializing in Constitutional Homeopathy, Joint &amp; Spinal Rehabilitation at Anjali Homeo Clinic.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
