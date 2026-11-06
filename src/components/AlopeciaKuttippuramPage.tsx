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
  Scissors,
  Layers,
  ThermometerSnowflake,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AlopeciaKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for alopecia treatment in Kuttippuram (patchy hair loss, alopecia areata, thinning, scalp health).'
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
    navigateToBookingWithReason('Alopecia & Hair Loss Consultation - Kuttippuram', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 10 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'General Term for Hair Loss',
      desc: 'Alopecia is an overarching medical term describing different patterns and causes of hair loss affecting the scalp and body.',
    },
    {
      title: 'Autoimmune Alopecia Areata',
      desc: 'Alopecia areata is an autoimmune condition in which the immune system mistakenly targets anagen hair follicles, causing sudden patchy loss.',
    },
    {
      title: 'Distinct Clinical Subtypes',
      desc: 'Other major forms include androgenetic alopecia (pattern thinning), telogen effluvium (diffuse shedding), traction alopecia, and scarring alopecia.',
    },
    {
      title: 'Multifactorial Drivers',
      desc: 'Hair loss can be associated with genetics, hormonal changes, nutritional deficiencies (iron, vitamin D), thyroid illness, stress and infections.',
    },
    {
      title: 'Medical Assessment Threshold',
      desc: 'Sudden, patchy, rapidly widening, or progressive hair loss accompanied by scalp redness or pain should be formally evaluated by a doctor.',
    },
    {
      title: 'Underlying Cause-Specific Therapy',
      desc: 'Therapeutic outcomes depend strictly on the type and cause of alopecia; there is no universal single treatment for all hair loss.',
    },
    {
      title: 'Evidence-Based Medical Options',
      desc: 'Established treatments include topical minoxidil, intralesional corticosteroids, systemic medicines, JAK inhibitors and nutritional correction.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has insufficient reliable scientific evidence to establish that it can cure alopecia or guarantee predictable hair regrowth.',
    },
    {
      title: 'Early Diagnosis Halts Complications',
      desc: 'Early clinical evaluation helps identify reversible causes and prevents irreversible follicle destruction in scarring alopecia.',
    },
    {
      title: 'Never Stop Prescribed Treatment',
      desc: 'Avoid discontinuing prescribed conventional medicines or delaying specialist dermatological care in favour of unproven alternative therapies.',
    },
  ];

  // 5 Major Types of Alopecia
  const alopeciaTypes = [
    {
      number: '01',
      title: '1. Alopecia Areata',
      badge: 'Autoimmune Patchy Loss',
      desc: 'An autoimmune condition wherein T-lymphocytes cluster around hair bulbs and disrupt the anagen growth cycle. It typically causes sudden, well-defined, smooth, round or oval bald patches on the scalp, beard (alopecia barbae), eyebrows, or eyelashes.',
      signs: ['Smooth round/oval bald patches', 'Exclamation-mark hairs at margins', 'Non-scarring; potential for regrowth'],
    },
    {
      number: '02',
      title: '2. Androgenetic Alopecia',
      badge: 'Genetic Pattern Thinning',
      desc: 'Commonly known as male or female pattern hair loss. Driven by genetic sensitivity of hair follicles to dihydrotestosterone (DHT), leading to gradual follicle miniaturisation, receding bitemporal hairlines in men, and diffuse crown parting widening in women.',
      signs: ['Gradual progressive thinning', 'Receding hairline or crown thinning', 'Follicular miniaturisation'],
    },
    {
      number: '03',
      title: '3. Telogen Effluvium',
      badge: 'Stress & Systemic Shedding',
      desc: 'A widespread, diffuse shedding disorder occurring 2 to 3 months following significant physiological or psychological stress, high fever, surgery, severe illness, rapid weight loss, childbirth, or severe iron/ferritin deficiency.',
      signs: ['Diffuse shedding across entire scalp', 'Excessive hair in shower drain & brushes', 'Usually reversible once trigger is corrected'],
    },
    {
      number: '04',
      title: '4. Traction Alopecia',
      badge: 'Mechanical Tension Injury',
      desc: 'Develops when persistent pulling or mechanical tension damages hair follicles along the frontal hairline and temples. Tight ponytails, braids, cornrows, heavy extensions, and tight turbans contribute. Reversible early, but long-standing tension causes permanent scarring.',
      signs: ['Frontal and temporal hairline recession', 'Follicular papules along tension lines', 'Permanent loss if tension continues long-term'],
    },
    {
      number: '05',
      title: '5. Scarring (Cicatricial) Alopecia',
      badge: 'Irreversible Follicle Damage',
      desc: 'A group of inflammatory disorders (such as lichen planopilaris or frontal fibrosing alopecia) where severe inflammation permanently destroys hair follicle stem cells and replaces them with fibrous scar tissue. Requires urgent specialist dermatologist intervention.',
      signs: ['Smooth, shiny skin with absent pores', 'Scalp redness, burning & pain', 'Irreversible loss requiring early anti-inflammatory care'],
    },
  ];

  // Available Medical Options
  const medicalOptions = [
    {
      title: '1. Topical Corticosteroids',
      badge: 'Anti-Inflammatory',
      desc: 'Potent prescription topical corticosteroid lotions, solutions, or foams applied directly to localized alopecia areata or inflammatory scalp patches to calm localized lymphocytic infiltration around follicles.',
    },
    {
      title: '2. Intralesional Corticosteroid Injections',
      badge: 'Targeted Dermal Delivery',
      desc: 'Administered by dermatologists directly into the dermis of limited alopecia areata patches. This delivers high localized anti-inflammatory concentration to stimulate dormant follicles while minimizing systemic steroid absorption.',
    },
    {
      title: '3. Topical Minoxidil',
      badge: 'Vasodilation & Growth Phase',
      desc: 'An established, FDA-approved topical solution or foam that shortens telogen phase, prolongs anagen duration, and stimulates blood flow to miniaturised hair follicles in androgenetic alopecia and adjunctively in alopecia areata.',
    },
    {
      title: '4. Advanced Oral Medications & JAK Inhibitors',
      badge: 'Systemic Immunology',
      desc: 'For extensive or severe alopecia areata (totalis/universalis), dermatologists may evaluate targeted oral Janus kinase (JAK) inhibitors (e.g., baricitinib, ritlecitinib) under rigorous blood monitoring and clinical supervision.',
    },
    {
      title: '5. Correction of Nutritional Deficiencies',
      badge: 'Metabolic & Iron Optimization',
      desc: 'Diagnostic blood investigations targeting serum ferritin, total iron-binding capacity, vitamin D3, vitamin B12, zinc, and thyroid hormones (TSH/free T4), correcting deficits that impair keratin synthesis.',
    },
    {
      title: '6. Oral Antifungals for Scalp Infections',
      badge: 'Infectious Clearance',
      desc: 'For fungal infections causing patchy hair loss (tinea capitis), prescription oral antifungal medications (terbinafine/griseofulvin) are mandatory to eradicate dermatophytes within the hair cortex.',
    },
  ];

  // 6 Provider Evaluation Guidelines
  const providerGuidelines = [
    {
      title: 'Verify Professional Medical Credentials',
      desc: 'Check that the healthcare practitioner possesses recognised, university medical qualifications (such as a registered BHMS degree) and adheres to statutory healthcare council regulations.',
      icon: Stethoscope,
    },
    {
      title: 'Detailed Hair Loss History & Scalp Dermoscopy',
      desc: 'A comprehensive consultation should review when shedding began, whether patches are solitary or multiplying, presence of exclamation mark hairs, and scalp skin integrity.',
      icon: Eye,
    },
    {
      title: 'Transparent Scientific Disclosure',
      desc: 'A responsible clinician openly explains the limitations of complementary therapies, stating clearly that homoeopathy has no reliable clinical trials confirming hair regrowth in alopecia areata or pattern baldness.',
      icon: MessageCircle,
    },
    {
      title: 'Honest Review of Current Medicines',
      desc: 'Disclose all active prescriptions, minoxidil treatments, steroid creams, or dietary supplements. An ethical practitioner will never advise discontinuing prescribed conventional treatments without doctor consultation.',
      icon: Pill,
    },
    {
      title: 'Prompt Specialist Dermatologist Referral',
      desc: 'The clinician must promptly recognize signs of cicatricial (scarring) alopecia, severe widespread alopecia areata, or fungal tinea capitis and refer immediately to a medical dermatologist.',
      icon: ShieldAlert,
    },
    {
      title: 'Zero Tolerance for Guaranteed Regrowth Claims',
      desc: 'Hair follicle biology is complex and unpredictable. Steer clear of any clinic or practitioner offering 100% guaranteed regrowth, permanent cures, or miracle overnight restorations.',
      icon: ShieldCheck,
    },
  ];

  // Red Flag Alert Criteria
  const redFlags = [
    'Sudden appearance of round, oval or irregularly shaped bald patches',
    'Rapid, aggressive thinning across the crown, temples, or entire scalp',
    'Simultaneous loss of eyebrows, eyelashes, beard, or body hair',
    'Hair loss accompanied by severe scalp erythema, flaking, or scaling',
    'Burning, stinging, throbbing pain or severe itching in areas of shedding',
    'Presence of broken hair stumps resembling "black dots" or exclamation marks',
    'Completely smooth, shiny patches where follicular pore openings are absent (Scarring)',
    'Sudden onset of diffuse hair shedding following a new prescription medication',
    'Persistent excessive hair shedding accompanied by profound fatigue, cold intolerance, or weight shifts',
  ];

  // Everyday Hair and Scalp Care
  const everydayCareTips = [
    {
      title: 'Avoid Tight, High-Tension Hairstyles',
      desc: 'Do not wear tight ponytails, high buns, cornrows, or tightly secured extensions that pull on the frontal hairline and cause irreversible traction follicle damage.',
      icon: Scissors,
    },
    {
      title: 'Use Gentle, Sulfate-Free Cleansers',
      desc: 'Cleanse with mild, pH-balanced shampoos formulated for sensitive scalps. Avoid harsh clarifying formulas that strip protective sebum and provoke irritation.',
      icon: Droplets,
    },
    {
      title: 'Limit High-Temperature Heat Styling',
      desc: 'Minimize the use of blow-dryers on high heat, ceramic straightening irons, and curling wands that boil water inside hair shafts, resulting in brittle bubble hair breakage.',
      icon: Sun,
    },
    {
      title: 'Maintain a Nutrient-Dense, Balanced Diet',
      desc: 'Ensure adequate daily intake of dietary proteins, iron-rich foods, leafy greens, omega-3 fatty acids, and zinc to supply essential amino acids for keratin synthesis.',
      icon: Utensils,
    },
    {
      title: 'Avoid Indiscriminate High-Dose Supplements',
      desc: 'Do not ingest random high-dose hair gummies or vitamins without confirmed blood deficiencies. Excess intake of vitamin A, selenium, or vitamin E can paradoxically worsen hair shedding.',
      icon: AlertTriangle,
    },
    {
      title: 'Prioritize Restful Sleep & Stress Reduction',
      desc: 'Chronic psychological stress elevates cortisol and pro-inflammatory signaling, precipitating acute telogen effluvium. Practice regular sleep schedules and relaxation techniques.',
      icon: Heart,
    },
  ];

  // 10 FAQs provided by user
  const faqs = [
    {
      q: 'What is alopecia?',
      a: 'Alopecia is a general term for hair loss. It includes different conditions such as alopecia areata, androgenetic alopecia, traction alopecia and scarring alopecia.',
    },
    {
      q: 'What causes alopecia?',
      a: 'Possible causes include autoimmune conditions, genetics, hormonal changes, nutritional deficiencies, stress, certain medicines, scalp infections and inflammatory skin conditions.',
    },
    {
      q: 'Can homoeopathy cure alopecia?',
      a: 'There is insufficient reliable scientific evidence to establish homoeopathy as an effective treatment or cure for alopecia. Patients should not delay proven medical care.',
    },
    {
      q: 'Is alopecia areata an autoimmune condition?',
      a: 'Yes. Alopecia areata is an autoimmune condition in which the immune system mistakenly attacks hair follicles, resulting in patchy hair loss.',
    },
    {
      q: 'Can hair grow back after alopecia areata?',
      a: 'Hair may regrow in some people, sometimes without treatment. However, recurrence is possible, and the course varies between individuals.',
    },
    {
      q: 'When should I consult an alopecia specialist?',
      a: 'Seek medical advice for sudden or patchy hair loss, rapidly progressing thinning, eyebrow or eyelash loss, scalp inflammation or signs of scarring.',
    },
    {
      q: 'Can nutritional deficiencies cause hair loss?',
      a: 'Yes. Deficiencies such as iron deficiency may contribute to hair shedding. Appropriate investigations can help identify whether a deficiency is present.',
    },
    {
      q: 'Does stress cause alopecia?',
      a: 'Significant stress can contribute to telogen effluvium, a form of excessive hair shedding. Alopecia areata has a different autoimmune mechanism, although stress may be associated with episodes in some individuals.',
    },
    {
      q: 'Can alopecia cause permanent hair loss?',
      a: 'Some forms, particularly scarring alopecia, can cause permanent hair loss because the follicles are destroyed. Other types may allow partial or complete regrowth.',
    },
    {
      q: 'Should I stop prescribed hair-loss medication when considering homoeopathy?',
      a: 'No. Do not stop or change prescribed medicines without consulting the clinician responsible for your treatment. Discuss complementary approaches with your healthcare professional.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Alopecia Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Kuttippuram for Alopecia Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-4 h-4 text-emerald-400" />}
        badgeText="CLINICAL TRICHOLOGY & ALOPECIA CARE • KUTTIPPURAM"
        title="Homoeopathic Clinic in Kuttippuram for Alopecia Treatment"
        subtitle="A comprehensive clinical guide explaining patchy hair loss, alopecia areata, androgenetic thinning, telogen effluvium, scarring alopecia, evidence-based dermatological therapies, and responsible hair care in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Alopecia & Hair Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, detailed hair loss history reviews, scalp health assessments, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely dermatologist referrals for autoimmune, scarring, and progressive alopecia."
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
              Understanding Alopecia & Professional Hair Loss Evaluation in Kuttippuram
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Hair loss can be a worrying experience, particularly when it occurs suddenly, develops in patches or continues over an extended period. While losing some hair every day is a normal part of the hair growth cycle, excessive shedding, visible bald patches and gradual hair thinning may indicate an underlying condition. One such condition is alopecia, a general term used to describe different forms of hair loss.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Alopecia can affect the scalp, beard, eyebrows, eyelashes and other areas of the body. It may develop due to autoimmune conditions, genetics, hormonal changes, nutritional deficiencies, infections, medications or certain medical conditions. If you are searching for a <strong className="text-[#1E2559]">Homoeopathic Clinic in Kuttippuram for Alopecia Treatment</strong>, understanding the different types of alopecia and their possible causes is an important first step.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 mt-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-950 leading-relaxed">
                <strong>Medical Assessment Principle:</strong> People looking for Alopecia Treatment in Kuttippuram may be concerned about patchy hair loss, thinning hair, excessive shedding or changes in scalp health. Although some individuals explore homoeopathy as a complementary healthcare approach, <strong>there is insufficient reliable scientific evidence to establish homoeopathy as an effective treatment for alopecia or a proven method of restoring hair growth. It should not replace appropriate medical diagnosis and evidence-based treatment.</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Key Takeaways */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              CLINICAL SUMMARY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Key Takeaways on Alopecia</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential facts regarding hair follicle immunology, alopecia subtypes, evidence-based options, and diagnostic urgency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E2559] font-bold text-xs flex items-center justify-center mb-3">
                    {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Alopecia and Its Common Symptoms */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-indigo-600" />
              CLINICAL SYMPTOMS & PATHOLOGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Alopecia and Its Common Symptoms
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Alopecia refers to hair loss that may occur gradually or abruptly. Some forms affect only small localized areas, while others cause extensive scalp thinning or complete loss of cranial and body hair. The condition may develop with or without visible scalp inflammation. In certain cases, hair follicles remain viable and capable of producing new hair; in scarring forms, inflammation permanently obliterates the follicular unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                <Scissors className="w-5 h-5 text-indigo-600" />
                Common Symptoms of Alopecia
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Small, round or oval bald patches:</strong> Sharply defined, smooth patches characteristic of alopecia areata.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Gradual thinning on the scalp:</strong> Progressive widening of the central parting line or thinning over the crown.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Increased hair shedding:</strong> Excessive loose hairs caught on pillows, in shower drains, or when gently combing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Receding hairline:</strong> Backward migration of the frontal and bitemporal hairline in pattern hair loss.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Loss of facial or body hair:</strong> Focal loss affecting eyebrows, eyelashes, or patchy beard thinning.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Broken hair stumps & scalp redness:</strong> Short exclamation-mark hairs, pustules, or shiny scar tissue.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50/70 border border-indigo-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-700" />
                  Why Identifying the Underlying Cause Matters in Kuttippuram
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  People searching for <strong>Alopecia Treatment in Kuttippuram</strong> frequently observe different patterns of loss. Some experience sudden bald circles over days, while others notice progressive thinning over years.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Because hair loss stems from completely different etiologies—ranging from autoimmune lymphocyte attack and genetic DHT sensitivity to severe iron deficiency or fungal dermatophytes—proper differential evaluation is essential before selecting any management regimen.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-200 text-xs text-indigo-900 font-semibold">
                Diagnostic tools such as scalp dermoscopy (trichoscopy), targeted blood panels, or a punch biopsy help distinguish reversible conditions from irreversible scarring alopecia.
              </div>
            </div>
          </div>
        </section>

        {/* 5 Different Types of Alopecia */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              CLINICAL SUBTYPES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Different Types of Alopecia</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Identifying the exact type of alopecia is vital because each presentation involves distinct biological mechanisms, prognoses, and treatment protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alopeciaTypes.map((item, idx) => (
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
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Key Features:</span>
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
                SCIENTIFIC TRANSPARENCY & CLINICAL ETHICS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
                Homoeopathic Alopecia Treatment in Kuttippuram: Understanding the Approach
              </h2>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                Individuals searching for <strong>Homoeopathic Alopecia Treatment in Kuttippuram</strong> may wish to discuss hair loss, general health concerns and complementary healthcare approaches with a homoeopathic practitioner. Homoeopathy is a system of complementary medicine based on the principle of using highly diluted preparations. However, <strong>current scientific evidence does not establish homoeopathy as an effective treatment for alopecia areata, pattern hair loss, telogen effluvium or other forms of alopecia</strong>.
              </p>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                It is important to distinguish between an open consultation and a scientifically validated medical treatment. Patients should receive clear, unvarnished information about the limitations of homoeopathy and the proven medical therapies available for hair loss.
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-2">
                <p>
                  <strong>Why Patients Must Avoid Delaying Medical Care:</strong> Some forms of hair loss are treatable, while others require early specialist intervention to prevent permanent follicular destruction. For example, scarring alopecia causes irreversible stem cell death if inflammation is not controlled swiftly with evidence-based medications. Homoeopathy should never replace or delay appropriate dermatological diagnosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Evidence-Based Medical Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <Pill className="w-3.5 h-3.5 text-blue-600" />
              EVIDENCE-BASED OPTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Alopecia Specialist in Kuttippuram: Available Medical Treatment Options
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Appropriate management depends entirely on the specific type of alopecia, the anatomical distribution, chronicity, and the patient's underlying health status. Modern dermatologists utilize evidence-grounded options:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalOptions.map((opt, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1E2559] text-base">{opt.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-[#1E2559] font-medium border border-blue-200">
                    {opt.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Breakage vs Shedding vs Alopecia Distinction */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <Eye className="w-3.5 h-3.5 text-purple-600" />
              CLINICAL DIFFERENTIATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Hair and Alopecia Treatment in Kuttippuram: Understanding the Differences
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Hair thinning, hair shaft breakage, and alopecia are interrelated concerns, but they stem from fundamentally different mechanisms and require distinct therapeutic strategies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
                Shaft Damage
              </span>
              <h3 className="text-base font-bold text-[#1E2559]">1. Hair Breakage</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Occurs along the external hair shaft due to thermal tools, chemical straighteners, bleaching, or harsh mechanical brushing. The follicle in the scalp remains completely healthy and undamaged.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 uppercase">
                Cycle Shift
              </span>
              <h3 className="text-base font-bold text-[#1E2559]">2. Excessive Shedding</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Known as telogen effluvium. Excessive shedding from the root caused by metabolic stressors, illness, high fevers, childbirth, or severe nutritional deficits without follicle miniaturization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 uppercase">
                Follicular Pathology
              </span>
              <h3 className="text-base font-bold text-[#1E2559]">3. True Alopecia</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Involves autoimmune destruction, hormonal miniaturization, prolonged mechanical tension, or inflammatory cicatricial scarring targeting the follicular unit itself.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Standards for Choosing a Provider */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              PATIENT PROTECTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Homoeopathy Clinic for Alopecia Problems in Kuttippuram: Choosing Responsible Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              People considering a consultation for alopecia should select a practitioner who provides realistic information, avoids unverified promises, and respects evidence-based medical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerGuidelines.map((item, idx) => {
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

        {/* Red Flag Symptoms - When to Seek Medical Advice */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              CLINICAL ALERT CRITERIA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Alopecia Doctor in Kuttippuram: When Should You Seek Medical Advice?
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              While gradual shedding can occasionally stabilize with lifestyle and nutritional improvements, certain symptoms require immediate evaluation by a qualified doctor or dermatologist:
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

        {/* Everyday Hair and Scalp Care */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              PREVENTATIVE HAIR CARE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Alopecia Problem Treatment in Kuttippuram: Everyday Hair and Scalp Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Although daily habits cannot cure genetic or autoimmune alopecia, they significantly reduce mechanical stress, hair breakage, and preventable follicular injury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {everydayCareTips.map((habit, idx) => {
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

        {/* Interactive FAQ Section with 10 FAQs */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              PATIENT FAQS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Alopecia Treatment in Kuttippuram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Clear, evidence-grounded answers addressing causes, regrowth possibilities, homoeopathy limitations, stress links, and medication continuity.
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
            Book a Consultation for Alopecia Problems in Kuttippuram
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Hair loss can be a challenging experience, particularly when it develops suddenly or continues despite changes in hair-care routines. Understanding the type of alopecia, identifying possible causes and choosing appropriate care are important steps towards managing the condition.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            If you are looking for a <strong className="text-white">Homoeopathic Clinic in Kuttippuram for Alopecia Treatment</strong>, consider arranging a consultation to discuss your symptoms, medical history and treatment expectations. A responsible consultation should provide transparent information about homoeopathy, its limitations and established medical options for hair loss.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Do not ignore sudden bald patches, progressive hair thinning, scalp inflammation or unexplained hair loss. Timely medical assessment can help identify the cause and determine an appropriate treatment plan. Take an informed step towards better hair and scalp health.
          </p>
        </section>

        {/* In-page Appointment Booking Engine */}
        <section id="booking-section" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              ONLINE & IN-CLINIC SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Schedule Your Alopecia Consultation
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
              Call our reception for appointment slots, consulting hours, or directions to the Kuttippuram clinic.
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
              Message our clinical desk directly for quick inquiries, hair loss questions, or booking confirmations.
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
          <RegionalRelatedGuides currentGuideKey="alopecia-treatment-kuttippuram" />
        </section>
      </div>
    </div>
  );
};
