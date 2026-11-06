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
  Shield,
  Stethoscope,
  Clock,
  MapPin,
  Utensils,
  Sun,
  Pill,
  Sparkle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AcneKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for acne treatment in Kuttippuram (facial pimples, blackheads, hormonal acne, marks & skin care).'
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
    navigateToBookingWithReason('Acne & Facial Skin Consultation - Kuttippuram', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 9 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Common Inflammatory Skin Condition',
      desc: 'Acne is a common inflammatory skin disorder that affects teenagers and adults, involving hair follicles and sebaceous glands.',
    },
    {
      title: 'Multiple Contributing Factors',
      desc: 'Hormonal changes, excess sebum production, blocked pores, Cutibacterium acnes bacteria and inflammation drive breakouts.',
    },
    {
      title: 'Diverse Lesion Morphology',
      desc: 'Acne appears as non-inflammatory comedones (blackheads, whiteheads) or inflammatory lesions (papules, pustules, nodules, cysts).',
    },
    {
      title: 'Risk of Scarring & Emotional Distress',
      desc: 'Persistent, deep or untreated inflammatory acne can cause permanent atrophic scarring, dark marks and significant emotional distress.',
    },
    {
      title: 'Early Clinical Assessment',
      desc: 'Early professional evaluation helps identify acne subtype and severity, distinguishing it from rosacea, folliculitis or dermatitis.',
    },
    {
      title: 'Evidence-Based Medical Options',
      desc: 'Proven therapies include topical benzoyl peroxide, retinoids, azelaic acid and medical prescription therapies when clinically indicated.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has insufficient reliable scientific evidence to establish that it can cure or effectively treat acne or prevent scarring.',
    },
    {
      title: 'Guided Treatment Planning',
      desc: 'A qualified healthcare professional helps formulate a safe, personalised plan without risky promises of rapid or guaranteed cures.',
    },
    {
      title: 'Consistent Non-Comedogenic Routine',
      desc: 'Consistent gentle cleansing, using non-comedogenic skincare and strictly avoiding squeezing pimples protects the skin barrier.',
    },
  ];

  // 6 Types of Acne
  const acneTypes = [
    {
      number: '01',
      title: '1. Whiteheads (Closed Comedones)',
      badge: 'Non-Inflammatory',
      desc: 'Whiteheads develop when pores become blocked with sebum and dead keratinocytes but remain closed at the skin surface. They present as small, flesh-coloured or pale micro-bumps without active redness.',
      signs: ['Closed pore surface', 'Non-tender flesh bumps', 'Common on forehead & cheeks'],
    },
    {
      number: '02',
      title: '2. Blackheads (Open Comedones)',
      badge: 'Oxidised Sebum',
      desc: 'Blackheads form when blocked hair follicles remain open to air. The dark colour is caused by the chemical oxidation of melanin and lipids when exposed to oxygen, not by trapped dirt or poor personal hygiene.',
      signs: ['Open pore surface', 'Dark oxidized plug', 'Responds to keratolytic cleansers'],
    },
    {
      number: '03',
      title: '3. Papules',
      badge: 'Mild Inflammatory',
      desc: 'Papules are small, raised, red or pink inflammatory bumps that feel slightly tender to the touch. They occur when pore walls break under pressure, prompting localized immune inflammation without visible pus.',
      signs: ['Erythematous raised bump', 'Tender on palpation', 'Absence of visible pus head'],
    },
    {
      number: '04',
      title: '4. Pustules',
      badge: 'Active Pus Formation',
      desc: 'Pustules are classic inflammatory acne lesions featuring a distinct yellow or white centre filled with neutrophils and cellular debris, encircled by a red inflammatory halo. Squeezing them risks deep tissue scarring.',
      signs: ['White or yellow pus centre', 'Surrounding red halo', 'High risk of post-inflammatory marks if squeezed'],
    },
    {
      number: '05',
      title: '5. Nodules',
      badge: 'Deeper Dermal Lesions',
      desc: 'Nodular acne involves large, hard, painful lumps situated deep within the dermis. Because the infection and inflammation are deep, over-the-counter products are ineffective, requiring prescription dermatological management.',
      signs: ['Firm painful dermal lumps', 'No visible surface head', 'Requires medical dermatological care'],
    },
    {
      number: '06',
      title: '6. Cystic Acne',
      badge: 'Severe & Scar-Prone',
      desc: 'The most severe form of acne, presenting as deep, soft, fluid-filled, highly painful lesions resulting from extensive follicular rupture. Persistent cystic acne carries a severe risk of permanent depressed scarring.',
      signs: ['Large fluctuating lesions', 'Severe pain and swelling', 'Requires urgent specialist dermatologist review'],
    },
  ];

  // 6 Common Causes
  const acneCauses = [
    {
      title: '1. Hormonal Changes & Fluctuations',
      desc: 'Androgen hormone surges during puberty stimulate sebaceous glands to enlarge and produce excess sebum. In adults, cyclical hormonal shifts during menstrual cycles, pregnancy, or endocrine conditions like Polycystic Ovary Syndrome (PCOS) frequently trigger persistent jawline acne.',
    },
    {
      title: '2. Excess Oil (Sebum) Production',
      desc: 'While sebum is necessary to lubricate the stratum corneum and maintain skin hydration, overactive sebaceous glands flood hair follicles with lipids, providing an ideal growth medium for acne-triggering bacteria.',
    },
    {
      title: '3. Blocked Skin Pores (Hyperkeratinization)',
      desc: 'Abnormal shedding of dead skin cells (follicular hyperkeratosis) causes sticky corneocytes to clump together rather than desquamate naturally, creating a plug (microcomedone) that traps sebum inside.',
    },
    {
      title: '4. Bacterial Colonization & Inflammation',
      desc: 'Trapped sebum allows Cutibacterium acnes (formerly Propionibacterium acnes) to proliferate. The immune system releases pro-inflammatory cytokines, causing localized erythema, tenderness, and pus formation.',
    },
    {
      title: '5. Genetic Predisposition',
      desc: 'A family history of moderate or severe acne significantly increases risk. Genetics influence sebaceous gland sensitivity to androgens, sebum composition, and the vigour of the cutaneous inflammatory response.',
    },
    {
      title: '6. Skincare Habits & Lifestyle Factors',
      desc: 'Pore-clogging comedogenic cosmetics, heavy hair oils, friction from helmets or face masks (acne mechanica), high-glycaemic dietary patterns, and elevated cortisol from psychological stress can provoke or aggravate flares.',
    },
  ];

  // Evidence-based treatments
  const conventionalOptions = [
    {
      title: '1. Benzoyl Peroxide',
      badge: 'Antimicrobial & Keratolytic',
      desc: 'Widely used topical agent that penetrates follicles to release free-radical oxygen, destroying Cutibacterium acnes bacteria without causing bacterial resistance. It also reduces follicular inflammation and clears comedones.',
    },
    {
      title: '2. Topical Retinoids',
      badge: 'Cell Turnover Normalizer',
      desc: 'Vitamin A derivatives (such as adapalene, tretinoin, and tazarotene) that accelerate epithelial desquamation, preventing microcomedones from forming. Retinoids are first-line for comedonal acne and help prevent new lesions.',
    },
    {
      title: '3. Azelaic Acid',
      badge: 'Anti-Inflammatory & Brightening',
      desc: 'Naturally derived dicarboxylic acid with antibacterial and anti-inflammatory properties. It is exceptionally gentle, safe during pregnancy, and particularly effective for clearing post-inflammatory hyperpigmentation (dark marks).',
    },
    {
      title: '4. Prescription Oral Medicines',
      badge: 'Moderate-to-Severe Acne',
      desc: 'Prescribed by dermatologists when topical regimens are insufficient. Includes targeted oral antibiotics for brief courses, hormonal oral contraceptives or spironolactone for women, and oral isotretinoin for severe nodulocystic disease under strict medical monitoring.',
    },
    {
      title: '5. Professional Skin Assessment',
      badge: 'Dermatologist Evaluation',
      desc: 'Essential for persistent, deep nodules, cystic breakouts, or progressive scarring. Early dermatological intervention halts irreversible dermis damage and atrophic scarring.',
    },
  ];

  // 5 standards for choosing a provider
  const doctorStandards = [
    {
      title: 'Check Professional Qualifications',
      desc: 'Verify that the healthcare practitioner possesses recognised, registered medical credentials (such as a university BHMS degree) and complies with statutory medical council guidelines.',
      icon: Stethoscope,
    },
    {
      title: 'Look for Transparent Communication',
      desc: 'A responsible clinician communicates realistic expectations, explains scientific limitations, and outlines available evidence-based alternatives without making sensational promises.',
      icon: MessageCircle,
    },
    {
      title: 'Discuss Existing Medications Honestly',
      desc: 'Disclose all current topical and oral medications. An ethical practitioner will never advise discontinuing prescription creams or oral antibiotics without consulting your prescribing doctor.',
      icon: Pill,
    },
    {
      title: 'Prompt Dermatological Referral Protocols',
      desc: 'The practitioner should readily identify deep nodules, cystic acne, severe scarring, or suspected underlying hormonal disorders (PCOS) requiring specialist dermatologist or endocrinologist care.',
      icon: ShieldAlert,
    },
    {
      title: 'Avoid Guaranteed Cure Claims',
      desc: 'Acne pathophysiology is multifactorial and variable. No medical professional can guarantee 100% permanent clearance or total scar elimination in a fixed number of days.',
      icon: ShieldCheck,
    },
  ];

  // When to seek medical advice
  const redFlags = [
    'Acne lesions are deeply inflamed, throbbing or painful to touch',
    'Large, hard nodules or fluctuating cysts are forming beneath the skin',
    'Breakouts are spreading extensively across the face, chest, shoulders or back',
    'Acne is actively creating depressed (ice-pick, boxcar) or raised permanent scars',
    'Dark post-inflammatory marks are accumulating and causing distress',
    'Standard over-the-counter acne washes and creams show zero improvement after 8–12 weeks',
    'Acne is significantly undermining self-confidence, social engagement or emotional health',
    'Adult acne appears abruptly and is accompanied by irregular periods or hirsutism (facial hair)',
  ];

  // Daily Skincare Habits
  const dailyHabits = [
    {
      title: 'Cleanse Gently Twice Daily',
      desc: 'Wash with a mild, pH-balanced foaming or gel cleanser twice daily and after perspiration. Avoid aggressive scrubbing, rough washcloths, or hot water that strips the skin barrier.',
      icon: Droplets,
    },
    {
      title: 'Choose Non-Comedogenic Formulations',
      desc: 'Ensure all facial moisturizers, sunscreens, and makeup products are specifically labelled non-comedogenic or oil-free, indicating they are tested not to clog pores.',
      icon: ShieldCheck,
    },
    {
      title: 'Strictly Avoid Squeezing or Picking',
      desc: 'Never pick, squeeze, or pop acne lesions. Squeezing forces bacterial debris deeper into surrounding dermis, escalating inflammation and causing permanent scarring and dark marks.',
      icon: AlertTriangle,
    },
    {
      title: 'Daily Broad-Spectrum Sun Protection',
      desc: 'Apply a broad-spectrum, lightweight SPF 30+ or SPF 50+ sunscreen daily. UV radiation darkens post-acne inflammatory marks and can exacerbate redness.',
      icon: Sun,
    },
    {
      title: 'Avoid Excessive Exfoliation',
      desc: 'Do not layer multiple physical walnut scrubs, strong alpha-hydroxy acids, and alcohol toners. Over-exfoliation weakens the stratum corneum, driving more oil production.',
      icon: Sparkle,
    },
    {
      title: 'Mind Hair Products & Pillowcases',
      desc: 'Keep heavy pomades and coconut hair oils off facial skin (pomade acne). Change cotton pillowcases frequently and disinfect smartphone screens regularly.',
      icon: Heart,
    },
  ];

  // 12 FAQs provided by user
  const faqs = [
    {
      q: 'What causes acne on the face?',
      a: 'Facial acne commonly develops when hair follicles become blocked by excess oil and dead skin cells. Hormonal changes, inflammation, genetics and certain skincare products may also contribute.',
    },
    {
      q: 'Can adults develop acne?',
      a: 'Yes. Acne can affect adults even if they did not experience it during their teenage years. Hormonal changes, genetics and other factors may contribute to adult acne.',
    },
    {
      q: 'Is acne caused by poor hygiene?',
      a: 'No. Acne is not simply caused by an unclean face. Excessive washing and harsh scrubbing can irritate the skin and make symptoms worse.',
    },
    {
      q: 'What is the best treatment for facial acne?',
      a: 'Treatment depends on the type and severity of acne. Common evidence-based options include benzoyl peroxide, topical retinoids and azelaic acid. Moderate or severe cases may require prescription medicines.',
    },
    {
      q: 'Can homoeopathy cure acne?',
      a: 'There is insufficient reliable scientific evidence to establish homoeopathy as an effective cure or treatment for acne. Patients should not replace proven medical treatment with homoeopathy.',
    },
    {
      q: 'When should I consult a dermatologist for acne?',
      a: 'Consult a dermatologist if acne is painful, severe, persistent, causing scars or not responding to appropriate over-the-counter treatment.',
    },
    {
      q: 'Can acne leave permanent scars?',
      a: 'Yes. Deep inflammatory acne, particularly nodules and cysts, can damage deeper skin tissue and cause permanent scars. Early and appropriate treatment can reduce this risk.',
    },
    {
      q: 'Is it safe to squeeze pimples?',
      a: 'No. Squeezing or picking pimples can increase inflammation and the risk of infection, pigmentation and scarring.',
    },
    {
      q: 'Can skincare products make acne worse?',
      a: 'Yes. Some heavy or pore-blocking products may contribute to breakouts. Choosing non-comedogenic skincare products can help reduce this risk.',
    },
    {
      q: 'Does diet affect acne?',
      a: 'Dietary effects vary between individuals. Some research suggests that high-glycaemic diets and certain dairy products may be associated with acne in some people, but diet is not the sole cause.',
    },
    {
      q: 'Can teenagers receive acne treatment?',
      a: 'Yes. Teenagers can receive acne treatment based on their age, skin condition and medical history. Persistent or severe acne should be assessed by a qualified healthcare professional.',
    },
    {
      q: 'Can acne marks be treated?',
      a: 'Post-acne dark marks and scars may improve with appropriate dermatological treatments. The best option depends on whether the concern is pigmentation, redness or a change in skin texture.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Acne Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Kuttippuram for Acne Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Sparkles className="w-4 h-4 text-emerald-400" />}
        badgeText="DERMATOLOGICAL & ACNE CARE • KUTTIPPURAM"
        title="Homoeopathic Clinic in Kuttippuram for Acne Treatment"
        subtitle="A comprehensive clinical guide explaining acne causes, comedones, inflammatory breakouts, teen vs adult hormonal acne, scarring risks, evidence-based dermatological therapies, and responsible skincare in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Acne & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, thorough acne history reviews, skincare guidance, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely dermatologist referrals for moderate to severe nodulocystic acne."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14 space-y-12">
        {/* Intro Context Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Acne Treatment & Professional Consultations in Kuttippuram
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Acne is one of the most common skin concerns affecting teenagers and adults. It can appear on the face, forehead, cheeks, chin, chest and back. Although acne is often associated with adolescence, people can experience breakouts at different stages of life due to hormonal changes, excess oil production, blocked pores, inflammation, genetics and other factors. For some individuals, acne may be occasional and mild, while others experience persistent breakouts, painful spots, dark marks or scarring.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Finding an appropriate approach to acne care begins with understanding the underlying cause and identifying the most suitable treatment. If you are looking for a <strong className="text-[#1E2559]">Homoeopathic Clinic in Kuttippuram for Acne Treatment</strong>, it is important to seek a proper consultation, understand the available treatment options and follow a consistent skincare routine.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 mt-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900 leading-relaxed">
                <strong>Medical Assessment First:</strong> People searching for Homoeopathic Treatment for Acne in Kuttippuram may wish to explore homoeopathic consultation as part of their wider approach to personal health and skin concerns. However, acne treatment should be guided by reliable medical assessment. <strong>Homoeopathy has not been established by strong scientific evidence as an effective treatment for acne, so it should not replace proven dermatological care.</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Key Takeaways */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              CLINICAL SUMMARY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Key Takeaways on Acne</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential clinical insights into acne development, evidence-based medical modalities, and responsible skin health practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E2559] font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Acne and Its Common Causes */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-indigo-600" />
              PATHOPHYSIOLOGY & ETIOLOGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Acne and Its Common Causes
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Acne develops when hair follicles become blocked with oil and dead skin cells. The skin naturally produces an oily substance called sebum, which helps protect and moisturise the skin. However, excess sebum combined with dead skin cells can block pores and create an environment in which inflammation develops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acneCauses.map((cause, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-[#1E2559] text-base">{cause.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{cause.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
            Understanding these multifaceted biological and lifestyle factors is an essential component of an Acne Consultation in Kuttippuram or any other professional dermatological assessment.
          </div>
        </section>

        {/* 6 Different Types of Acne */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              MORPHOLOGICAL CLASSIFICATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Different Types of Acne</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Recognising the specific acne lesion type enables clinicians to determine the most targeted, safe, and effective management approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acneTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">{item.number}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#1E2559] font-medium border border-blue-100">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E2559]">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Hallmarks:</span>
                  {item.signs.map((sign, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scientific Evidence Disclosure on Homoeopathy */}
        <section className="bg-amber-50/90 rounded-2xl p-6 sm:p-8 border border-amber-300 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl text-amber-700 shrink-0">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold uppercase">
                SCIENTIFIC DISCLOSURE & CLINICAL ETHICS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
                Homoeopathic Treatment for Acne in Kuttippuram: Understanding the Approach
              </h2>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                People exploring <strong>Homoeopathic Treatment for Acne in Kuttippuram</strong> may be interested in an individual consultation to discuss their skin concerns, general health and treatment preferences. Homoeopathy is a system of complementary medicine based on the principle of treating symptoms with highly diluted preparations. However, <strong>current scientific evidence does not establish homoeopathy as an effective treatment for acne</strong>.
              </p>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                Homoeopathy should not be presented as a proven method for clearing pimples, controlling acne-related inflammation or preventing permanent scars. While a consultation provides a supportive environment to review health history, patients must receive transparent information about its limitations and established medical therapies.
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-2">
                <p>
                  <strong>Clinical Notice:</strong> It is particularly important not to delay appropriate medical treatment when acne is painful, widespread, persistent or causing scars. Delaying evidence-based dermatological therapy can allow microcomedones to progress into destructive cystic lesions, causing lifelong dermal scarring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Proper Assessment Matters & Differential Diagnosis */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <Eye className="w-3.5 h-3.5 text-purple-600" />
              DIFFERENTIAL DIAGNOSIS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Why Proper Assessment Matters
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Acne can closely resemble several other dermatological conditions, including <strong>rosacea</strong> (vascular redness, flushing, and papules without comedones), <strong>pityrosporum/fungal folliculitis</strong> (monomorphic, highly itchy bumps caused by Malassezia yeast), and <strong>perioral dermatitis</strong> (fine papules clustered around mouth and nose triggered by steroid creams). Treating the wrong condition delays improvement and may aggravate the eruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Comprehensive Diagnostic Intake Factors
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>The anatomical location and clinical morphology of lesions (face, chest, back).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Whether spots are primarily painful, throbbing, itchy, or cystic.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Chronicity and temporal pattern (pubertal, adult-onset, postpartum).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Correlation with menstrual cycles or suspected hormonal disorders (PCOS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Prior skincare cosmetics, home remedies, steroid ointments, or oral treatments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Presence of post-inflammatory hyperpigmentation or early atrophic scars.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50/60 border border-purple-200 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <h3 className="font-bold text-purple-950 text-base">Avoiding Misguided Assumptions</h3>
                <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
                  Assuming that every facial bump is standard acne can lead to serious errors. For example, applying harsh acne exfoliating acids or benzoyl peroxide to rosacea or perioral dermatitis damages the sensitized barrier and severely escalates facial burning and inflammation.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-200 text-xs text-purple-900 font-semibold">
                A thorough clinical assessment guides tailored, safe care rather than relying on guesswork or trial-and-error cosmetic purchases.
              </div>
            </div>
          </div>
        </section>

        {/* Evidence-Based Acne Options */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <Pill className="w-3.5 h-3.5 text-blue-600" />
              EVIDENCE-BASED OPTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Face Acne Treatment in Kuttippuram: Available Medical Options
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              People searching for <strong>Face Acne Treatment in Kuttippuram</strong> want to understand how to clear pimples, blackheads, whiteheads and prevent recurring breakouts. The right medical strategy depends on acne severity, skin phototype, sensitivity, age, medical history, and whether scarring is present.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conventionalOptions.map((opt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1E2559] text-base">{opt.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#1E2559] font-medium border border-blue-100">
                    {opt.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teenage vs Adult Acne */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              AGE-SPECIFIC PRESENTATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Acne Treatment in Kuttippuram for Teenagers and Adults
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Acne affects people across different stages of life, but its clinical presentation, hormonal drivers, and treatment tolerance differ between adolescents and adults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 uppercase">
                Pubertal / Adolescent Acne
              </span>
              <h3 className="text-lg font-bold text-[#1E2559]">Acne During Teenage Years</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                During puberty, rapid surges in adrenal and gonadal androgens accelerate sebum production. Breakouts typically concentrate on the T-zone (forehead, nose, and chin), characterized by numerous open and closed comedones alongside inflammatory papulopustules.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Teenagers should adopt gentle, non-irritating routines and resist the temptation to pick or squeeze blemishes. Early medical intervention prevents severe inflammatory scarring during formative developmental years.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 uppercase">
                Adult-Onset / Persistent Acne
              </span>
              <h3 className="text-lg font-bold text-[#1E2559]">Adult Acne & Hormonal Triggers</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Adult acne may continue from adolescence or emerge for the first time in individuals in their twenties, thirties, or forties. In adult women, it characteristically targets the U-zone (lower cheeks, jawline, and chin) with deeper, tender inflammatory lesions.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Adult breakouts frequently flare pre-menstrually and can be linked to hormonal imbalances, stress-induced cortisol release, comedogenic cosmetics, or underlying conditions like PCOS that require medical evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Early Acne Management Matters & Scars */}
        <section className="bg-rose-50/70 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200 text-rose-900 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
            SCARRING & COMPLICATION PREVENTION
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-rose-950">
            Why Early Acne Management Is Crucial
          </h2>
          <p className="text-rose-900 text-sm sm:text-base leading-relaxed">
            Acne is not merely a superficial cosmetic nuisance; chronic follicular inflammation can permanently alter dermal collagen architecture and severely impact emotional well-being.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-1">
              <h4 className="font-bold text-rose-950 text-sm">Post-Inflammatory Hyperpigmentation</h4>
              <p className="text-xs text-slate-600">Dark brown or purple marks resulting from melanin overproduction during inflammation.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-1">
              <h4 className="font-bold text-rose-950 text-sm">Post-Inflammatory Erythema</h4>
              <p className="text-xs text-slate-600">Persistent capillary dilation causing stubborn red spots long after the blemish resolves.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-1">
              <h4 className="font-bold text-rose-950 text-sm">Atrophic Depressed Scars</h4>
              <p className="text-xs text-slate-600">Permanent ice-pick, boxcar, or rolling depressions caused by dermal collagen loss.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-1">
              <h4 className="font-bold text-rose-950 text-sm">Emotional & Social Distress</h4>
              <p className="text-xs text-slate-600">Anxiety, reduced self-confidence, and social withdrawal due to persistent facial lesions.</p>
            </div>
          </div>
          <p className="text-xs text-rose-900 font-semibold pt-2">
            Active inflammatory lesions and established acne scars require distinct therapeutic modalities. Intervening early effectively halts scar formation before it becomes irreversible.
          </p>
        </section>

        {/* 5 Standards for Choosing a Provider */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              PATIENT PROTECTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Homoeopathic Doctor for Acne in Kuttippuram: Choosing the Right Professional
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Choosing the right healthcare professional is essential when managing recurring acne. Consider the practitioner’s qualifications, transparent communication, and readiness to refer complex cases to specialist dermatologists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorStandards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#1E2559] flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* When Should You Seek Medical Advice (Red Flags) */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              CLINICAL ALERT CRITERIA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Acne Doctor in Kuttippuram: When Should You Seek Medical Advice?
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Although mild comedonal acne can sometimes improve with appropriate gentle over-the-counter skincare, specific clinical presentations require formal medical assessment by a qualified doctor or dermatologist:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {redFlags.map((flag, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">{flag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Skincare Tips */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              BARRIER CARE & ROUTINE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Daily Skincare Tips for Managing Acne
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A consistent, gentle skincare routine maintains the cutaneous moisture barrier, calms inflammation, and optimizes the efficacy of active medical therapies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyHabits.map((habit, idx) => {
              const IconComp = habit.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">{habit.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{habit.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive FAQ Section with 12 FAQs */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              PATIENT FAQS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Acne Treatment in Kuttippuram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Detailed answers addressing causes, hygiene myths, evidence on homoeopathy, dietary influences, pimple popping risks, and marks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-[#1E2559] hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base flex items-center gap-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Q{idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Conclusion Summary */}
        <section className="bg-gradient-to-br from-[#1E2559] to-[#2B3577] text-white rounded-2xl p-8 sm:p-10 shadow-lg space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial">
            Book an Acne Consultation in Kuttippuram
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Acne can affect people in different ways, from occasional pimples to persistent and painful breakouts. Understanding the condition, identifying possible contributing factors and choosing appropriate care are important steps towards better skin health.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            If you are looking for a <strong className="text-white">Homoeopathic Clinic in Kuttippuram for Acne Treatment</strong>, consider arranging a consultation to discuss your concerns, medical history and treatment expectations. A responsible consultation should provide transparent information about homoeopathy, its limitations and established acne treatment options.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Whether you are researching Acne Treatment in Kuttippuram, looking for Face Acne Treatment in Kuttippuram or considering an Acne Homoeopathy Clinic in Kuttippuram, make informed healthcare decisions based on appropriate professional guidance. Do not ignore persistent, painful or scarring acne. Early medical assessment can help you understand your condition and explore suitable treatment options.
          </p>
        </section>

        {/* In-page Appointment Booking Engine */}
        <section id="booking-section" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              ONLINE & IN-CLINIC SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Schedule Your Acne Consultation
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select in-clinic appointment at Kuttippuram (Tirur-Kuttippuram Road) or Puthanathani, or book an online video consultation.
            </p>
          </div>
          <AppointmentBookingEngine />
        </section>

        {/* Contact & Location Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E2559] flex items-center justify-center">
              <Phone className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Direct Phone Inquiries</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Call our desk for appointment slots, consulting hours, or directions to the Kuttippuram clinic.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${phonePrimary}`}
                className="text-base font-bold text-blue-700 hover:text-blue-900 block"
              >
                {phonePrimary}
              </a>
              <a
                href={`tel:${phoneSecondary.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-slate-600 hover:text-slate-800 block mt-0.5"
              >
                {phoneSecondary}
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">WhatsApp Support</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Message our clinical desk directly for quick inquiries, skin care questions, or booking confirmations.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Clinic Locations</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              <strong>Kuttippuram Clinic:</strong> Near Railway Station, Tirur-Kuttippuram Road, Malappuram.<br />
              <strong>Puthanathani Clinic:</strong> Main Road, Puthanathani, Malappuram District.
            </p>
            <div className="pt-1 text-xs text-slate-500 font-medium">
              Daily OPD Hours: 9:00 AM – 7:30 PM
            </div>
          </div>
        </section>

        {/* Cross-linking Related Regional Guides */}
        <section className="pt-8">
          <RegionalRelatedGuides currentGuideKey="acne-treatment-kuttippuram" />
        </section>
      </div>
    </div>
  );
};
