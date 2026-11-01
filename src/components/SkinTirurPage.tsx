import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  Info,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  Sparkles,
  BookOpen,
  FileText,
  AlertCircle,
  Eye,
  Sun,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
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

  // 6 Causes of skin problems
  const commonCauses = [
    {
      title: 'Allergies and Irritants',
      desc: 'Contact with soaps, cosmetics, detergents, metals (such as nickel), or industrial chemicals can irritate the epidermal barrier or trigger a delayed hypersensitivity response. Identifying and avoiding the offending agent is fundamental to recovery.',
    },
    {
      title: 'Hormonal Changes',
      desc: 'Androgenic surges during puberty, menstruation, pregnancy, or PCOS directly stimulate sebaceous gland hypertrophy and excess sebum production, leading to acne. Thyroid disorders can cause severe skin xerosis (dryness).',
    },
    {
      title: 'Genetics & Immune System Activity',
      desc: 'Atopic dermatitis and psoriasis have strong hereditary components and dysregulated immune pathways. Psoriasis involves accelerated T-cell mediated keratinocyte turnover, requiring long-term structured management.',
    },
    {
      title: 'Infections (Fungal, Bacterial & Viral)',
      desc: 'Pathogens such as dermatophytes (ringworm), Staphylococcus/Streptococcus (impetigo, boils), and herpesviruses cause distinct eruptions. Because treatment strategies differ radically, correct microscopic or clinical identification is mandatory.',
    },
    {
      title: 'Environmental Factors & Climate',
      desc: 'Intense sun exposure, high humidity, excessive perspiration, and environmental pollution in coastal Kerala provoke fungal colonization, prickly heat, and post-inflammatory melasma. Protective habits significantly lower symptom severity.',
    },
    {
      title: 'Stress & Neuro-Immunological Axes',
      desc: 'Chronic psychological stress activates the hypothalamic-pituitary-adrenal (HPA) axis, elevating cortisol and triggering neurogenic skin inflammation that intensifies eczema flares and inflammatory acne outbreaks.',
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

  // Consultation preparation points
  const preparationPoints = [
    {
      icon: Calendar,
      title: 'Timeline of Skin Appearance',
      detail: 'Note exactly when the rash, pimples, or scaling first appeared and whether onset was sudden or gradual.',
    },
    {
      icon: Activity,
      title: 'Exact Anatomical Areas',
      detail: 'Identify all affected body locations (face, scalp, flexures, hands, trunk) and whether lesions have spread.',
    },
    {
      icon: AlertTriangle,
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

  // 12 FAQs
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
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Skin Care Near Tirur"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homeopathic Treatment Near Tirur for Skin Problems"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Sun className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Clinical Dermatology Guide • Tirur Patients"
        title="Homeopathic Treatment Near Tirur for Skin Problems"
        subtitle="Individualized clinical guidance for patients in Tirur and Malappuram experiencing acne, eczema, psoriasis, fungal ringworm, allergic rashes, and pigmentation disorders."
        metrics={[
          { label: 'Condition Focus', value: 'Dermatological Care' },
          { label: 'Diagnostic Standard', value: 'Skin Triage & Tests' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Dermatology & Chronic Skin Consultations"
        doctorBio="10+ years of dedicated clinical experience assessing chronic skin conditions, barrier repair strategies, fungal differentiation, and evidence-grounded constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#059669]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Important Key Takeaways for Patients in Tirur
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#059669]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#065F46] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Point {idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Common Skin Problems (6 Conditions) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Common Skin Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              The skin acts as a protective barrier against environmental irritants, microorganisms, and physical damage. Changes in the skin&apos;s appearance or texture can indicate temporary irritation or a persistent condition requiring medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {commonSkinProblems.map((cond, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#059669]/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                    {cond.number} • {cond.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {cond.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cond.desc}
                </p>
                <div className="pt-2 border-t border-[#EEF2FB] space-y-1.5 text-xs text-[#475569]">
                  <p><strong>Contributing Factors:</strong> {cond.factors}</p>
                  <p className="text-[#065F46] font-medium"><strong>Medical Approach:</strong> {cond.treatmentFocus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Homeopathic Treatment Near Tirur: What Should You Know? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathic Treatment Near Tirur for Skin Problems: What Should You Know?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Homeopathic Skin Treatment in Tirur</strong> often want to understand how homeopathy is used during clinical consultations for chronic or recurring skin complaints.
            </p>
            <p>
              Homeopathy is a complementary healthcare system using highly diluted substances. Practitioners assess individual complaints, general physical symptoms, emotional state, and personal lifestyle factors.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Distinguishing Consultation from Scientific Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    It is important to distinguish between the way a treatment is described and the scientific evidence supporting its effectiveness. <strong>Reliable scientific evidence has not established homeopathy as an effective treatment for acne, eczema, psoriasis, fungal infections, or other common skin diseases.</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Homeopathy has also not been demonstrated to reliably treat the underlying causes of these conditions or prevent complications such as scarring and infection. Homeopathic remedies should not replace a medical diagnosis, prescribed medication, or recommended investigations.
                  </p>
                </div>
              </div>
            </div>

            <p>
              If you choose to consult a homeopathic practitioner, disclose all medicines, creams, supplements, and remedies you use. Do not stop prescribed treatment or delay a medical assessment without discussing the decision with the clinician responsible for your care.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Common Causes of Skin Problems (6 Causes) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
              ETIOLOGY &amp; TRIGGERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Causes of Skin Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Skin symptoms can develop for diverse reasons, and the same symptom—such as itching or redness—may arise from completely different underlying etiologies.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {commonCauses.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#059669]/30 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {cause.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Finding a Skin Doctor in Tirur (6 Provider Factors) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DOCTOR SELECTION CRITERIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Finding a Skin Doctor in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Choosing an appropriate healthcare professional is vital when dealing with persistent skin symptoms. People looking for a Skin Doctor in Tirur should prioritize relevant qualifications, diagnostic precision, and transparent explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {providerFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88]/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#303A88] text-white flex items-center justify-center font-bold text-xs">
                    {factor.number}
                  </span>
                  <h3 className="font-bold text-base text-[#1E2559]">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Homeopathy Clinic for Skin Problems in Tirur (7 Evaluation Questions) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
              PATIENT CHECKLIST
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathy Clinic for Skin Problems in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              When researching a Homeopathy Clinic for Skin Problems in Tirur, asking practical questions about medical registration, evidence, and referral policies ensures you receive responsible, safe care.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {evaluationQuestions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-2 hover:border-[#059669]/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#A7F3D0]">
                    Q{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#1E2559]">
                      {item.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                      <span className="font-semibold text-[#059669]">Why this matters: </span>
                      {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Evidence-Based Treatment Options for Skin Problems (5 Modalities) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              THERAPEUTIC SCIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Treatment Options for Skin Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              The appropriate treatment depends on the precise clinical diagnosis, anatomical location, severity, age, and individual medical history.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8E1F5] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1E2559] text-white flex items-center justify-center font-bold text-xs">
                      {opt.step}
                    </span>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      {opt.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] w-fit">
                    {opt.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {opt.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {opt.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-white border border-[#D8E1F5] text-xs text-[#334155] flex items-start gap-2"
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

      {/* Section 7: Everyday Habits That Support Skin Health (6 Habits) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
              SKIN BARRIER WELLNESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Everyday Habits That Support Skin Health
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Good skincare habits support the stratum corneum barrier and reduce irritation, although they cannot substitute for medical therapy for an active disease.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {supportiveHabits.map((habit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#059669]/40 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center text-xs font-bold shrink-0">
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

      {/* Section 8: Preparing for a Skin Problems Consultation in Tirur */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT PREPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Preparing for a Skin Problems Consultation in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              A dermatological consultation is significantly more productive when you organize details about your symptoms and past treatments prior to your visit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              {preparationPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-[#D8E1F5]">
                    <Icon className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E2559] block">{item.title}:</strong>
                      <span className="text-[#64748B] text-xs">{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: When Should You Seek Medical Attention? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
              CLINICAL TRIAGE &amp; SAFETY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Understand the difference between non-urgent outpatient evaluations and symptoms requiring prompt or emergency care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                Prompt Medical Care Advised
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-900/90">
                <li>• A rapidly spreading rash accompanied by low or high-grade fever.</li>
                <li>• Increasing localized redness, warmth, swelling, tenderness, or purulent pus.</li>
                <li>• A painful, blistering, or vesicular rash located near the eyes.</li>
                <li>• A new, irregular, or changing skin mole/lesion that bleeds or fails to heal.</li>
                <li>• A widespread eruption developing shortly after starting a new oral prescription.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-rose-900">
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                Emergency Medical Red Flags
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-900/90">
                <li>• Skin rash accompanied by difficulty breathing, wheezing, or throat tightness.</li>
                <li>• Sudden swelling of the face, eyelids, lips, tongue, or pharynx (angioedema).</li>
                <li>• Dizziness, severe lightheadedness, confusion, or collapse/fainting (anaphylaxis).</li>
                <li>• Severe widespread skin detachment, epidermal sloughing, or mucosal erosion (Stevens-Johnson syndrome / TEN).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions (12 Interactive FAQs) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
              PATIENT INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Skin Treatment Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Common questions from patients in Tirur and Malappuram regarding skin consultations, diagnostic testing, and medical evidence.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-[#F8FAFD] overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#059669] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#059669] shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#059669]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-4 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
              DIRECT APPOINTMENT SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book Your Skin Consultation Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select in-clinic appointment at our Kuttippuram center or schedule a secure online video consultation with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-sm">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="skin-treatment-tirur" />
    </div>
  );
};
