import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  Award,
  Sparkles,
  BookOpen,
  Layers,
  FileText,
  AlertCircle,
  CheckCircle,
  Sun,
  Shield,
  Eye,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const SkinTirurPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for skin problems near Tirur (acne, eczema, psoriasis, rashes).'
  )}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookConsultation = () => {
    navigateToBookingWithReason('Skin Health Consultation - Tirur', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 8 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Multifactorial Skin Etiology',
      desc: 'Skin problems can result from allergies, infections, hormonal changes, genetics, environmental exposure, or underlying medical conditions.',
    },
    {
      title: 'Common Dermatological Concerns',
      desc: 'Frequent concerns include acne, eczema, psoriasis, fungal infections, itching, rashes, and pigmentation changes.',
    },
    {
      title: 'Critical Value of Accurate Diagnosis',
      desc: 'An accurate clinical diagnosis helps determine the most appropriate treatment for a skin condition, avoiding symptom masking.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homeopathy has not been shown by reliable scientific evidence to effectively treat common skin diseases or resolve underlying pathology.',
    },
    {
      title: 'Evidence-Based Modalities',
      desc: 'Evidence-based treatment depends on the specific type, anatomical location, severity, and cause of the skin problem.',
    },
    {
      title: 'Avoid Self-Prescribed Steroids',
      desc: 'Avoid self-prescribing steroid creams, OTC combination creams, or antibiotics, which can thin skin or worsen fungal infections.',
    },
    {
      title: 'When to Seek Clinical Care',
      desc: 'Persistent, spreading, painful, or infected skin problems should always be assessed by a qualified healthcare professional.',
    },
    {
      title: 'Emergency Medical Red Flags',
      desc: 'Sudden facial swelling, difficulty breathing, fainting, or severe blistering rash require immediate emergency hospital care.',
    },
  ];

  // 6 Common Skin Problems from user document
  const commonSkinProblems = [
    {
      number: '01',
      title: 'Acne and Pimples (Acne Vulgaris)',
      badge: 'Pilosebaceous Units',
      desc: 'Acne develops when hair follicles become plugged with sebum and desquamated dead skin cells, allowing Cutibacterium acnes proliferation. It manifests as blackheads, whiteheads, inflammatory papules, pustules, and deeper painful nodular or cystic lesions.',
      factors: 'Hormonal fluctuations (androgens, PCOS), genetic predisposition, comedogenic cosmetics, and friction. Severe or untreated acne may lead to permanent hypertrophic or atrophic scarring and post-inflammatory erythema.',
      treatmentFocus: 'Topical retinoids, benzoyl peroxide, appropriate cleansers, and medical therapy prescribed by a doctor.',
    },
    {
      number: '02',
      title: 'Eczema and Dry Skin (Atopic & Contact Dermatitis)',
      badge: 'Skin Barrier Impairment',
      desc: 'Eczema causes dry, pruritic, erythematous, and cracked skin that flares intermittently. It frequently affects flexural areas such as the creases of elbows and knees, wrists, hands, and facial folds.',
      factors: 'Eczema involves filaggrin gene mutations and a compromised stratum corneum barrier that allows rapid transepidermal water loss and allergen penetration. Irritants, dry weather, soaps, and stress trigger flares.',
      treatmentFocus: 'Liberal barrier-repair emollients, gentle fragrance-free cleansers, trigger avoidance, and short courses of topical anti-inflammatories.',
    },
    {
      number: '03',
      title: 'Psoriasis (Chronic Plaque & Scalp Psoriasis)',
      badge: 'Autoimmune & Hyperkeratosis',
      desc: 'Psoriasis is a chronic systemic immune-mediated dermatosis characterized by sharply demarcated erythematous plaques topped with silvery, micaceous scales. Common sites include extensor surfaces of elbows, knees, lumbosacral region, and scalp.',
      factors: 'Accelerated epidermal turnover driven by cytokine signalling (IL-17, IL-23, TNF-alpha). It is not contagious and is not caused by poor hygiene. Systemic associations include psoriatic arthritis.',
      treatmentFocus: 'Topical vitamin D analogues, keratolytics, targeted phototherapy, or systemic biologic agents under dermatological supervision.',
    },
    {
      number: '04',
      title: 'Fungal Skin Infections (Tinea & Ringworm)',
      badge: 'Dermatophyte Infections',
      desc: 'Superficial fungal infections caused by dermatophytes (Trichophyton, Microsporum) produce annular, ring-shaped, pruritic lesions with active scaly borders and central clearing. Common forms include Tinea corporis, Tinea cruris (groin), and Tinea pedis (athlete’s foot).',
      factors: 'Warm, humid coastal climates like Malappuram district, synthetic tight clothing, moisture, and communal facilities. Steroid creams mistakenly applied disguise borders and worsen tinea incognito.',
      treatmentFocus: 'Specific topical or oral antifungal medications taken for the full prescribed duration without stopping prematurely.',
    },
    {
      number: '05',
      title: 'Skin Allergies and Rashes (Contact Dermatitis)',
      badge: 'Hypersensitivity & Irritants',
      desc: 'Contact dermatitis occurs when the skin reacts to an irritating chemical (irritant contact dermatitis) or mounts a delayed Type IV allergic response (allergic contact dermatitis). Lesions include erythema, edema, vesicular weeping, and intense pruritus.',
      factors: 'Common culprits include fragrances, topical preservatives, nickel jewelry, harsh detergents, cosmetics, cement, rubber latex, and workplace chemicals.',
      treatmentFocus: 'Accurate patch testing or elimination, trigger avoidance, cool compresses, and soothing protective barriers.',
    },
    {
      number: '06',
      title: 'Pigmentation Problems (Melasma & Post-Inflammatory)',
      badge: 'Melanocyte Dysregulation',
      desc: 'Pigmentation concerns arise from uneven distribution or hyperproduction of melanin. Melasma presents as symmetric brownish macules on cheeks, forehead, and upper lip, while post-inflammatory hyperpigmentation (PIH) follows acne or eczema lesions.',
      factors: 'Ultraviolet solar radiation, hormonal surges (pregnancy, oral contraceptives), thyroid imbalances, and aggressive friction or skin-lightening products.',
      treatmentFocus: 'Broad-spectrum SPF 50+ sun protection, gentle tyrosinase inhibitors, and specialist dermatological procedures.',
    },
  ];

  // 5 Evidence-based treatment options
  const evidenceBasedOptions = [
    {
      step: '01',
      title: 'Topical Medicines',
      badge: 'Targeted Cutaneous Action',
      desc: 'Topical creams, ointments, gels, and lotions are formulated for specific dermatological conditions and are not interchangeable.',
      points: [
        'Topical retinoids and benzoyl peroxide for comedonal and inflammatory acne vulgaris',
        'Topical corticosteroids or calcineurin inhibitors for acute atopic dermatitis and eczema flare-ups',
        'Topical antifungals (clotrimazole, terbinafine, luliconazole) for confirmed fungal dermatophytosis',
      ],
    },
    {
      step: '02',
      title: 'Oral Medicines',
      badge: 'Systemic Medical Therapy',
      desc: 'When skin conditions are widespread, deep-seated, or systemic, qualified physicians prescribe targeted oral medications.',
      points: [
        'Oral antibiotics for moderate-to-severe inflammatory acne or secondary bacterial impetigo',
        'Oral antifungals (itraconazole, fluconazole, terbinafine) for extensive tinea or onychomycosis',
        'Systemic antihistamines to alleviate nocturnal pruritus and break the itch-scratch cycle',
      ],
    },
    {
      step: '03',
      title: 'Moisturisers & Skin Barrier Care',
      badge: 'Ceramides & Emollients',
      desc: 'Emollients and barrier creams reduce transepidermal water loss and reinforce stratum corneum integrity.',
      points: [
        'Ointment and cream-based emollients containing ceramides, glycerin, or petrolatum for dry skin and eczema',
        'Application within 3 minutes of bathing ("soak and seal" technique) to lock in vital hydration',
        'Strict avoidance of fragrance-laden, alcohol-containing, or harsh foaming skincare formulations',
      ],
    },
    {
      step: '04',
      title: 'Broad-Spectrum Sun Protection',
      badge: 'UV Barrier & Melanin Control',
      desc: 'Shielding skin from solar UVA and UVB rays prevents pigment aggravation, premature elastosis, and actinic damage.',
      points: [
        'Broad-spectrum water-resistant sunscreen with SPF 30 to SPF 50+ applied daily 20 minutes before outdoors',
        'Physical measures: UV-protective umbrellas, wide-brimmed hats, sunglasses, and seeking midday shade',
        'Avoiding harsh unverified bleaching agents or steroid creams that trigger steroid-induced rosacea',
      ],
    },
    {
      step: '05',
      title: 'Specialist Dermatological Treatments',
      badge: 'Advanced Clinical Procedures',
      desc: 'Severe, recalcitrant, or scarring dermatological conditions necessitate advanced specialist modalities.',
      points: [
        'Narrowband UVB phototherapy for extensive plaque psoriasis and severe widespread eczema',
        'Oral retinoids (isotretinoin) for severe nodulocystic acne under regular biochemical monitoring',
        'Specialized chemical peels, fractional lasers, or biopsy examinations conducted by qualified dermatologists',
      ],
    },
  ];

  // 6 Provider evaluation factors from user document
  const providerFactors = [
    {
      number: '01',
      title: 'Professional Qualifications & Registration',
      desc: 'Verify that your doctor has recognised clinical qualifications and active state medical council registration (such as State Homeopathic Council or Travancore-Cochin Medical Council).',
    },
    {
      number: '02',
      title: 'Comprehensive Diagnostic Assessment',
      desc: 'A trustworthy clinician conducts a thorough evaluation of skin lesions, medical history, systemic symptoms, current prescriptions, and environmental triggers rather than rushing.',
    },
    {
      number: '03',
      title: 'Appropriate Diagnostic Testing & Referrals',
      desc: 'When lesions are atypical or persistent, your provider should advise appropriate testing—such as fungal scrapings (KOH mount), dermoscopy, allergy tests, or dermatological referrals.',
    },
    {
      number: '04',
      title: 'Clear & Transparent Explanations',
      desc: 'The doctor must clearly communicate likely diagnostic differential, realistic treatment timelines, potential side effects, and expected follow-up intervals in understandable terms.',
    },
    {
      number: '05',
      title: 'Structured Ongoing Care for Chronic Conditions',
      desc: 'Chronic dermatoses such as psoriasis and eczema require monitored maintenance strategies, seasonal barrier adaptations, and adjustments to treatment protocols over time.',
    },
    {
      number: '06',
      title: 'No Exaggerated "Guaranteed Cure" Claims',
      desc: 'Be cautious of providers advertising "100% permanent cures" or claiming to eradicate chronic autoimmune or genetic skin diseases overnight without scientific substantiation.',
    },
  ];

  // 7 Evaluation Questions for a Homeopathy Clinic for Skin in Tirur
  const evaluationQuestions = [
    {
      q: 'What are the practitioner’s qualifications and professional council registration details?',
      why: 'Ensures your clinician is a bona fide graduate holding an approved degree (BHMS, MD Hom.) registered with recognized medical boards.',
    },
    {
      q: 'Will the consultation include an in-depth review of my medical history and current treatments?',
      why: 'Prevents misinterpreting systemic symptoms (e.g., thyroid dermopathy, lupus butterfly rash, diabetes-related pruritus).',
    },
    {
      q: 'Will I be advised to seek a dermatologist’s assessment when necessary?',
      why: 'A responsible clinician immediately refers suspicious lesions, non-healing ulcers, or severe dermatitis to dermatologists.',
    },
    {
      q: 'What scientific evidence supports the proposed treatment approach?',
      why: 'Enables you to make informed decisions understanding evidence-based options versus complementary modalities.',
    },
    {
      q: 'Could the recommended remedy or cream interact with medicines I currently use?',
      why: 'Protects against adverse drug interactions or unwanted exacerbation of prescribed pharmaceutical therapies.',
    },
    {
      q: 'What specific steps should I take if my skin condition worsens or fails to improve?',
      why: 'Provides a clear safety net and escalation pathway if an infection spreads or an allergic flare intensifies.',
    },
    {
      q: 'Will the practitioner support appropriate medical investigations and follow-up?',
      why: 'Ensures lab investigations (KOH skin scraping, patch tests, CBC, blood sugar) are welcomed rather than discouraged.',
    },
  ];

  // Consultation preparation points
  const preparationPoints = [
    {
      icon: Calendar,
      title: 'Timeline of Skin Appearance',
      detail: 'Note exactly when the rash, pimples, or scaling first appeared and whether onset was sudden or gradual.',
    },
    {
      icon: MapPin,
      title: 'Exact Anatomical Areas',
      detail: 'Identify all affected body locations (face, scalp, flexures, hands, trunk) and whether lesions have spread.',
    },
    {
      icon: Activity,
      title: 'Associated Sensation Characteristics',
      detail: 'Describe whether the area itches intensely, burns, stings, throbs with pain, or produces fluid discharge/oozing.',
    },
    {
      icon: Droplets,
      title: 'Past Products & Creams Tried',
      detail: 'Make a full list of all OTC creams, steroid tubes (e.g., Betnovate, Panderm), soaps, and homemade pastes used.',
    },
    {
      icon: AlertCircle,
      title: 'Known Allergies & Medical History',
      detail: 'Disclose personal or family history of asthma, allergic rhinitis, thyroid problems, diabetes, or autoimmune disorders.',
    },
    {
      icon: Sun,
      title: 'Possible Environmental Triggers',
      detail: 'Note triggers such as recent new soaps, detergents, cosmetics, sun exposure, sweating, dust, or work chemicals.',
    },
    {
      icon: Heart,
      title: 'Household Contacts with Similar Rashes',
      detail: 'Mention if family members or coworkers have similar itching or skin eruptions (essential for scabies/fungal tinea).',
    },
    {
      icon: Eye,
      title: 'Photographic Progression Record',
      detail: 'Bring clear photographs taken in natural daylight over previous weeks to illustrate fluctuating flare-up patterns.',
    },
  ];

  // 6 Everyday supportive habits
  const supportiveHabits = [
    {
      title: 'Cleanse Gently Without Scrubbing',
      desc: 'Use lukewarm water and mild, soap-free syndet cleansers. Avoid harsh scrub brushes, loofahs, and aggressive drying towels that compromise skin barrier lipids.',
    },
    {
      title: 'Moisturise Regularly on Damp Skin',
      desc: 'Apply fragrance-free emollient creams within three minutes of washing. Regular moisturisation prevents barrier cracking and lessens allergen penetration.',
    },
    {
      title: 'Protect Your Skin From Sun Exposure',
      desc: 'Wear loose breathable cotton garments, seek midday shade, and apply broad-spectrum sunscreen on face, neck, and arms to avoid worsening post-inflammatory pigmentation.',
    },
    {
      title: 'Avoid Unnecessary Skincare Product Changes',
      desc: 'Do not introduce multiple serums, masks, or toners at once. When testing new skincare, patch test behind the ear or inner forearm for 48 hours first.',
    },
    {
      title: 'Avoid Picking, Squeezing, or Scratching',
      desc: 'Picking acne lesions drives inflammation deeper and creates permanent scars. For severe itching, apply cool compresses or emollients instead of nails.',
    },
    {
      title: 'Exercise Extreme Caution With Medicated Creams',
      desc: 'Never purchase prescription steroid or combination creams over the counter without a doctor’s guidance. Misuse causes skin thinning, telangiectasia, and tinea incognito.',
    },
  ];

  // 12 FAQs (7 from document + 5 high-yield clinical questions tailored to Tirur & Malappuram region)
  const faqs = [
    {
      q: 'What is homeopathic treatment near Tirur for skin problems?',
      a: 'The phrase generally refers to homeopathy consultations sought by people experiencing skin concerns such as acne, eczema, psoriasis, fungal infections, itching, or pigmentation. However, reliable scientific evidence has not established homeopathy as an effective treatment for common skin diseases. Persistent, spreading, or severe symptoms should always be evaluated by a qualified medical professional to ensure an accurate diagnosis and appropriate evidence-based therapy.',
    },
    {
      q: 'Is homeopathy effective for acne or eczema?',
      a: 'Homeopathy has not been shown by reliable scientific evidence to effectively treat acne or eczema or resolve their underlying pathophysiological triggers. Evidence-based treatments include gentle barrier-repair skincare, topical retinoids or benzoyl peroxide for acne, and targeted emollients or anti-inflammatory therapies for eczema under medical direction.',
    },
    {
      q: 'Which doctor should I consult for skin problems in Tirur?',
      a: 'A qualified dermatologist specializes in skin, hair, and nail diseases and is best equipped to diagnose chronic, severe, or atypical dermatological complaints. Dr. Anjali Chandrasekhar (BHMS, Board Reg. KA-HOM-15563) provides confidential clinical evaluations, lifestyle and barrier guidance, and triage at Anjali Homoeo Clinic in Kuttippuram (just 15–20 minutes from Tirur town) and online, coordinating referrals to dermatologists when advanced diagnostic tests or prescription pharmaceuticals are required.',
    },
    {
      q: 'Can skin problems be treated permanently?',
      a: 'The outcome depends on the specific condition. Acute infections like fungal tinea or bacterial impetigo can be completely cleared with proper antimicrobial medications. However, chronic conditions like atopic eczema and plaque psoriasis are genetic and immune-mediated; they are managed through ongoing skin barrier care, trigger control, and medical treatments rather than a single permanent cure.',
    },
    {
      q: 'What should I bring to a skin consultation in Tirur?',
      a: 'Bring a comprehensive list of all current skin creams, ointments (especially any steroid or combination creams), facial washes, and oral medications. Note your allergy history, previous laboratory or biopsy reports, and bring photographs documenting how the rash looked during acute flare-ups.',
    },
    {
      q: 'When should I see a skin specialist or dermatologist?',
      a: 'Consult a medical doctor or dermatologist if your skin symptoms persist for more than two weeks, spread rapidly, cause severe pain or weeping discharge, interrupt sleep due to itching, or fail to respond to standard barrier care. Seek emergency medical care immediately if a rash occurs with facial swelling, lip swelling, or difficulty breathing.',
    },
    {
      q: 'How can I choose a skin health clinic near Tirur?',
      a: 'Select an appropriately qualified and registered healthcare provider who performs a thorough clinical examination, explains the likely causes transparently, supports evidence-based testing, and provides follow-up. Exercise caution with clinics that promise miraculous, instant, or guaranteed cures for chronic skin diseases.',
    },
    {
      q: 'How far is Anjali Homoeo Clinic from Tirur for skin consultations?',
      a: 'Anjali Homoeo Clinic’s main center is conveniently located in Kuttippuram on the Tirur-Kuttippuram Road, approximately 15 to 20 minutes from Tirur Railway Station and Central Bus Stand. We also operate a branch clinic in Puthanathani. Patients from Tirur, Tanur, Tirunnavaya, and surrounding areas can visit in person or book a confidential online video consultation.',
    },
    {
      q: 'Why are over-the-counter steroid creams dangerous for fungal rashes in Kerala?',
      a: 'In warm, humid climates like Malappuram, fungal skin infections (Tinea) are very common. Over-the-counter creams that contain strong corticosteroids (often sold in combination with antibiotics and antifungals) temporarily soothe itching but suppress the skin’s local immunity. This creates "Tinea incognito"—a widespread, deep-seated, treatment-resistant fungal infection that is significantly harder to cure.',
    },
    {
      q: 'How do doctors distinguish between eczema and fungal ringworm?',
      a: 'While both cause redness and itching, fungal infections typically display an active, raised, scaly circular border with central clearing, whereas eczema produces poorly defined, dry, intensely itchy patches without a ringed border. When uncertainty exists, a quick, painless potassium hydroxide (KOH) skin scraping under a microscope confirms or rules out fungal hyphae.',
    },
    {
      q: 'What causes melasma and dark facial pigmentation in Malappuram?',
      a: 'Melasma is driven by intense solar ultraviolet exposure combined with hormonal shifts (such as pregnancy, oral contraceptives, or thyroid dysfunction) and genetic susceptibility. The most critical treatment pillar is daily rigorous application of broad-spectrum SPF 50 sunscreen, avoiding friction and harsh fairness creams, and using dermatologist-approved melanin inhibitors.',
    },
    {
      q: 'Can I book an online video consultation for skin triage from Tirur?',
      a: 'Yes. Dr. Anjali Chandrasekhar offers convenient online video consultations. During the call, she evaluates high-resolution photographs of your skin condition, reviews your medical and treatment history, offers dietary and skincare barrier advice, and guides you on whether an in-person clinic visit or a specialist dermatologist referral is needed.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-[#1E2559] font-sans">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#1E2559] text-white shadow-md border-b border-white/10 py-2.5 px-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
              <span className="font-semibold text-white">
                Skin Health &amp; Dermatology Care Guide – Tirur Regional Guide
              </span>
              <span className="hidden md:inline text-white/70">
                | Dr. Anjali Chandrasekhar (BHMS, Board Reg. KA-HOM-15563)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${phonePrimary}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {phonePrimary}</span>
              </a>
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-semibold transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center flex-wrap gap-2 text-xs text-[#64748B]">
            <button
              onClick={() => setCurrentView('home')}
              className="hover:text-[#303A88] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => setCurrentView('treatments')}
              className="hover:text-[#303A88] transition-colors"
            >
              Treatments
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => setCurrentView('skin-hair-care')}
              className="hover:text-[#303A88] transition-colors"
            >
              Skin &amp; Hair Care
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1E2559] font-semibold">
              Homeopathic Treatment Near Tirur for Skin Problems
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION WITH DOCTOR PROFILE ON THE LEFT */}
      <section className="relative bg-gradient-to-br from-[#1E2559] via-[#242C66] to-[#161B40] text-white py-12 lg:py-16 overflow-hidden">
        {/* Subtle background ornamentation */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* DOCTOR PROFILE CARD ON THE LEFT (Desktop col-span-5) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white text-[#1E2559] rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Decorative Accent Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#059669] via-[#10B981] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Skin Problems near Tirur"
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.src = '/images/dr-anjali-malayali-doctor.jpg';
                        }}
                      />
                    </div>
                    <span className="absolute bottom-1 right-2 bg-[#059669] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-white">
                      Verified BHMS
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold mb-2">
                      <Award className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Board Reg. KA-HOM-15563</span>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-[#1E2559]">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs font-semibold text-[#059669] mt-0.5">
                      BHMS • MD (Hom.) • Classical Homeopathy &amp; Clinical Care
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      Consulting doctor for skin concerns, acne, eczema, psoriasis, and rash assessments for patients in Tirur and Malappuram district.
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#EEF2FB] space-y-2.5 text-xs text-[#475569]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>
                      <strong>Main Clinic:</strong> Kuttippuram (15 mins from Tirur) • <strong>Branch:</strong> Puthanathani
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>
                      <strong>Consulting Hours:</strong> Mon – Sat: 9:30 AM – 6:30 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>
                      Private, respectful evaluations &amp; prompt specialist referrals
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${phonePrimary}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EEF2FB] hover:bg-[#DCE6F8] text-[#1E2559] font-bold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Call Clinic</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={handleBookConsultation}
                  className="w-full mt-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#047857] hover:to-[#065f46] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Skin Consultation</span>
                </button>
              </div>
            </div>

            {/* HERO TEXT ON THE RIGHT (Desktop col-span-7) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#34D399] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Regional Clinical Care Guide • Tirur &amp; Malappuram</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-white">
                Homeopathic Treatment Near Tirur for Skin Problems
              </h1>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Healthy skin plays a vital role in physical comfort, emotional well-being, and daily confidence. However, conditions such as acne, eczema, psoriasis, fungal infections, allergic rashes, and pigmentation changes affect individuals across Tirur and nearby Malappuram communities.
              </p>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                This comprehensive clinical guide explains common skin disorders, diagnostic causes, everyday barrier habits, evidence-based dermatological modalities, and what patients near Tirur should know about homeopathic consultations and medical safety.
              </p>

              {/* Trust Badges */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                  <div className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                    <span>Accurate Triage</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5">
                    Root cause investigation
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                  <div className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                    <span>Evidence-Based</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5">
                    Transparent guidance
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <div className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                    <span>15 Mins to Tirur</span>
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5">
                    Kuttippuram clinic hub
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="px-6 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2 group"
                >
                  <span>Book In-Clinic / Online Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#common-conditions"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#34D399]" />
                  <span>Explore Skin Conditions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS SECTION (8 Points from user document) */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#059669] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Clinical Essentials
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Key Takeaways: Skin Health &amp; Medical Assessment Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Essential principles to keep in mind when experiencing persistent itching, rashes, acne, or skin changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#059669]/40 hover:shadow-md transition-all space-y-2.5 relative group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-sm text-[#1E2559] group-hover:text-[#059669] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: UNDERSTANDING COMMON SKIN PROBLEMS (6 Conditions) */}
      <section id="common-conditions" className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1.5 rounded-full border border-[#D8E1F5]">
              Dermatological Overview
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Understanding Common Skin Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
              The skin acts as a protective barrier against environmental irritants, microorganisms, and physical damage. Changes in the skin&apos;s appearance or texture can indicate temporary irritation or a persistent condition requiring medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonSkinProblems.map((cond, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#059669]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#059669]/30 font-editorial">
                      {cond.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                      {cond.badge}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#1E2559] leading-tight">
                    {cond.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {cond.desc}
                  </p>

                  <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                    <div className="text-xs text-[#475569]">
                      <span className="font-bold text-[#1E2559]">Contributing Factors: </span>
                      <span>{cond.factors}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1F5F9]">
                  <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#E2E8F0] text-[11px] text-[#065f46]">
                    <span className="font-bold">Medical Approach: </span>
                    <span>{cond.treatmentFocus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: HOMEOPATHIC TREATMENT NEAR TIRUR: WHAT SHOULD YOU KNOW? */}
      <section className="py-14 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#F8FAFD] to-[#EEF2FB] rounded-3xl p-8 sm:p-10 border border-[#D8E1F5] relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#303A88] text-white text-xs font-bold">
                <Info className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Transparent Scientific Disclosure</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Homeopathic Treatment Near Tirur for Skin Problems: What Should You Know?
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#334155] leading-relaxed space-y-4">
                <p>
                  People searching for <strong>Homeopathic Skin Treatment in Tirur</strong> often want to understand how homeopathy is used during clinical consultations for chronic or recurring skin complaints.
                </p>
                <p>
                  Homeopathy is a complementary healthcare system using highly diluted substances. Practitioners assess individual complaints, general physical symptoms, emotional state, and personal lifestyle factors.
                </p>
                <p className="bg-[#FEF2F2] border-l-4 border-[#EF4444] p-4 rounded-r-xl text-[#991B1B] font-medium">
                  <strong>Important Scientific Reality:</strong> Reliable, high-quality scientific evidence has not established homeopathy as an effective treatment for common skin diseases—including acne vulgaris, eczema (atopic dermatitis), plaque psoriasis, fungal infections (tinea), or severe contact dermatitis. Homeopathic remedies have not been demonstrated to reliably cure underlying pathophysiological causes or prevent scarring and secondary bacterial cellulitis.
                </p>
                <p>
                  Individuals considering skin homeopathy consultations near Tirur should understand these clinical boundaries. Homeopathic remedies should never substitute for an accurate dermatological diagnosis, prescribed prescription medication, or recommended laboratory investigations (such as skin scrapings or biopsy).
                </p>
                <p>
                  If you consult a homeopathic practitioner, always disclose all conventional medications, prescription steroid creams, over-the-counter ointments, and supplements you are using. Never abruptly discontinue prescribed treatments without discussing the decision with your primary doctor or dermatologist.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={handleBookConsultation}
                  className="px-6 py-3 rounded-xl bg-[#1E2559] hover:bg-[#2A3478] text-white font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#34D399]" />
                  <span>Schedule Consultation with Dr. Anjali</span>
                </button>
                <a
                  href={`tel:${phonePrimary}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#303A88] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Tirur Patient Helpline: {phonePrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: COMMON CAUSES OF SKIN PROBLEMS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#059669] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
              Pathophysiology &amp; Triggers
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Common Causes of Skin Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Skin symptoms can develop for diverse reasons, and the same symptom—such as itching or redness—may arise from completely different underlying etiologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5 text-[#303A88]" />
              </div>
              <h3 className="font-bold text-base text-[#1E2559]">
                Allergies and Irritants
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Contact with soaps, cosmetics, detergents, metals (such as nickel), or industrial chemicals can irritate the epidermal barrier or trigger a delayed hypersensitivity response. Identifying and avoiding the offending agent is fundamental to recovery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <Activity className="w-5 h-5 text-[#059669]" />
              </div>
              <h3 className="font-bold text-base text-[#1E2559]">
                Hormonal Changes
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Androgenic surges during puberty, menstruation, pregnancy, or PCOS directly stimulate sebaceous gland hypertrophy and excess sebum production, leading to acne. Thyroid disorders can cause severe skin xerosis (dryness).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#303A88]" />
              </div>
              <h3 className="font-bold text-base text-[#1E2559]">
                Genetics &amp; Immune System Activity
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Atopic dermatitis and psoriasis have strong hereditary components and dysregulated immune pathways. Psoriasis involves accelerated T-cell mediated keratinocyte turnover, requiring long-term structured management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5 text-[#DC2626]" />
              </div>
              <h3 className="font-bold text-base text-[#1E2559]">
                Infections (Fungal, Bacterial &amp; Viral)
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Pathogens such as dermatophytes (ringworm), Staphylococcus/Streptococcus (impetigo, boils), and herpesviruses cause distinct eruptions. Because treatment strategies differ radically, correct microscopic or clinical identification is mandatory.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center font-bold">
                <Sun className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-bold text-base text-[#1E2559]">
                Environmental Factors &amp; Climate
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Intense sun exposure, high humidity, excessive perspiration, and environmental pollution in coastal Kerala provoke fungal colonization, prickly heat, and post-inflammatory melasma. Protective habits significantly lower symptom severity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 text-[#16A34A]" />
              </div>
              <h3 className="font-bold text-base text-[#1E2559]">
                Stress &amp; Neuro-Immunological Axes
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Chronic psychological stress activates the hypothalamic-pituitary-adrenal (HPA) axis, elevating cortisol and triggering neurogenic skin inflammation that intensifies eczema flares and inflammatory acne outbreaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FINDING A SKIN DOCTOR IN TIRUR (6 FACTORS) */}
      <section className="py-14 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1.5 rounded-full border border-[#D8E1F5]">
              Doctor Selection Criteria
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Finding a Skin Doctor in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
              Choosing an appropriate healthcare professional is vital when dealing with persistent skin symptoms. People looking for a Skin Doctor in Tirur should prioritize relevant qualifications, diagnostic precision, and transparent explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerFactors.map((factor, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#303A88]/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#303A88] text-white flex items-center justify-center text-xs font-bold">
                    {factor.number}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#1E2559]">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: HOMEOPATHY CLINIC FOR SKIN PROBLEMS IN TIRUR (7 EVALUATION QUESTIONS) */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#059669] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
              Patient Checklist
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Homeopathy Clinic for Skin Problems in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
              When researching a Homeopathy Clinic for Skin Problems in Tirur, asking practical questions about medical registration, evidence, and referral policies ensures you receive responsible, safe care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {evaluationQuestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-sm space-y-2 hover:border-[#059669]/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#A7F3D0]">
                    Q{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[#1E2559]">
                      {item.q}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                      <span className="font-semibold text-[#059669]">Why this matters: </span>
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-[#EEF2FB] rounded-2xl p-4 text-xs text-[#303A88] max-w-2xl border border-[#D8E1F5]">
              <strong>Responsible Medical Guidance:</strong> Dr. Anjali Chandrasekhar maintains full professional registration (KA-HOM-15563) and transparently upholds medical referral pathways when dermatological conditions require advanced diagnostic testing or pharmaceutical care.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EVIDENCE-BASED TREATMENT OPTIONS FOR SKIN PROBLEMS (5 Modalities) */}
      <section className="py-14 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1.5 rounded-full border border-[#D8E1F5]">
              Therapeutic Science
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Evidence-Based Treatment Options for Skin Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              The appropriate treatment depends on the precise clinical diagnosis, anatomical location, severity, age, and individual medical history.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:border-[#303A88]/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1E2559] text-white flex items-center justify-center font-bold text-xs">
                      {opt.step}
                    </span>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1E2559]">
                      {opt.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] w-fit">
                    {opt.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {opt.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {opt.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white rounded-xl p-3 border border-[#E2E8F0] text-xs text-[#334155] flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PREPARING FOR A SKIN PROBLEMS CONSULTATION IN TIRUR */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#059669] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
              Patient Preparation Checklist
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Preparing for a Skin Problems Consultation in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              A dermatological consultation is significantly more productive when you organize details about your symptoms and past treatments prior to your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {preparationPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-[#1E2559]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: EVERYDAY HABITS THAT SUPPORT SKIN HEALTH (6 Habits) */}
      <section className="py-14 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1.5 rounded-full border border-[#D8E1F5]">
              Skin Barrier Wellness
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Everyday Habits That Support Skin Health
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Good skincare habits support the stratum corneum barrier and reduce irritation, although they cannot substitute for medical therapy for an active disease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportiveHabits.map((habit, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#059669]/40 transition-colors space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#059669] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#1E2559]">
                    {habit.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {habit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHEN TO SEEK MEDICAL ATTENTION & EMERGENCY RED FLAGS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] bg-[#FEF2F2] px-3.5 py-1.5 rounded-full border border-[#FECACA]">
                Clinical Safety &amp; Triage
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
                When Should You Seek Medical Attention?
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                Understand the difference between non-urgent outpatient evaluations and symptoms requiring prompt or emergency care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Urgent Doctor Evaluation */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#F59E0B]/30 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 text-[#D97706]">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-base text-[#1E2559]">
                    Prompt Medical Care Advised
                  </h3>
                </div>
                <p className="text-xs text-[#475569]">
                  Schedule a clinical appointment promptly if you experience:
                </p>
                <ul className="space-y-2.5 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                    <span>A rapidly spreading rash accompanied by low or high-grade fever.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                    <span>Increasing localized redness, warmth, swelling, tenderness, or purulent pus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                    <span>A painful, blistering, or vesicular rash located near the eyes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                    <span>A new, irregular, or changing skin mole/lesion that bleeds or fails to heal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                    <span>A widespread eruption developing shortly after starting a new oral prescription.</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Hospital Attention */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#EF4444]/40 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 text-[#DC2626]">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-base text-[#1E2559]">
                    Emergency Medical Red Flags
                  </h3>
                </div>
                <p className="text-xs text-[#475569]">
                  Go to the nearest emergency department or call emergency medical assistance immediately for:
                </p>
                <ul className="space-y-2.5 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                    <span>Skin rash accompanied by difficulty breathing, wheezing, or throat tightness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                    <span>Sudden swelling of the face, eyelids, lips, tongue, or pharynx (angioedema).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                    <span>Dizziness, severe lightheadedness, confusion, or collapse/fainting (anaphylaxis).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                    <span>Severe widespread skin detachment, epidermal sloughing, or mucosal erosion (Stevens-Johnson syndrome / TEN).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FREQUENTLY ASKED QUESTIONS (12 Interactive FAQs) */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#059669] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
              Patient Inquiries
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Frequently Asked Questions: Skin Treatment Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Common questions from patients in Tirur and Malappuram regarding skin consultations, diagnostic testing, and medical evidence.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#1E2559] hover:text-[#059669] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#059669]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: CONCLUSION & REGIONAL CLINIC ACCESSIBILITY */}
      <section className="py-12 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm text-center space-y-4">
            <h2 className="font-editorial text-2xl font-bold text-[#1E2559]">
              Accessible Clinical Care for Patients in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl mx-auto">
              Taking persistent skin symptoms seriously and choosing care based on reliable medical evidence can help you manage your condition and protect your long-term skin health. Whether you are researching a <strong>Skin Doctor in Tirur</strong>, exploring <strong>Skin Treatment in Tirur</strong>, or comparing services at a <strong>Homeopathy Clinic for Skin Problems in Tirur</strong>, prioritize accurate diagnosis, transparent medical advice, and appropriate follow-up.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#303A88]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#059669]" />
                Kuttippuram (15–20 mins via Tirur-Kuttippuram Rd)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#059669]" />
                Puthanathani Branch Clinic
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#059669]" />
                Direct Helpline: {phonePrimary}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING ENGINE SECTION */}
      <section id="booking-section" className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-[#059669] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
              Direct Appointment Scheduling
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Book Your Skin Consultation Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Select in-clinic appointment at our Kuttippuram center or schedule a secure online video consultation with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-sm">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* REGIONAL RELATED GUIDES MODULE */}
      <RegionalRelatedGuides currentGuideKey="skin-treatment-tirur" />
    </div>
  );
};
