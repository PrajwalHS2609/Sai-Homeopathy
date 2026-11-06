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

export const ScalpKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for scalp treatment in Kuttippuram (dandruff, itchy scalp, seborrhoeic dermatitis, flaking, hair thinning).'
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
    navigateToBookingWithReason('Scalp & Hair Health Consultation - Kuttippuram', 'online');
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
      title: 'Diverse Scalp Conditions',
      desc: 'Scalp problems can develop due to dandruff, fungal infections, psoriasis, eczema, contact allergies and sebaceous gland imbalances.',
    },
    {
      title: 'Common Hallmarks',
      desc: 'Common symptoms include persistent itching, erythema, dryness, stubborn flakes, stinging irritation and excess sebum.',
    },
    {
      title: 'Accurate Cause Identification',
      desc: 'Identifying the exact cause is vital because dandruff, seborrhoeic dermatitis, tinea capitis and psoriasis require distinct treatments.',
    },
    {
      title: 'Red-Flag Medical Assessment',
      desc: 'Persistent severe itching, painful scalp patches, sores, pustules or sudden localized hair loss require formal medical evaluation.',
    },
    {
      title: 'Evidence-Based Shampoos',
      desc: 'Dandruff and seborrhoeic dermatitis can frequently be managed with clinically proven active medicated shampoos and topical agents.',
    },
    {
      title: 'Oral Therapy for Fungal Infections',
      desc: 'Scalp fungal infections (tinea capitis) often require prescription oral antifungal medications, as topical shampoos alone are insufficient.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has insufficient reliable scientific evidence to establish that it can cure scalp disorders or eliminate infections.',
    },
    {
      title: 'Gentle Scalp Hygiene Practices',
      desc: 'Gentle hair care, avoiding harsh chemical processing, and not scratching inflamed skin supports the cutaneous barrier.',
    },
    {
      title: 'Timely Clinical Evaluation',
      desc: 'Early professional assessment prevents secondary infections, permanent follicular scarring, and delays in appropriate therapy.',
    },
  ];

  // 5 Common Scalp Problems
  const commonScalpProblems = [
    {
      number: '01',
      title: '1. Dandruff (Pityriasis Capitis)',
      badge: 'Non-Inflammatory Desquamation',
      desc: 'Dandruff is characterized by visible fine flakes of dead epidermal skin on the hair shaft and shoulders, accompanied by mild itching. It becomes more prominent during dry winter conditions or when sebum balance is disturbed by Malassezia yeast proliferation.',
      signs: ['Dry or slightly greasy loose flakes', 'Mild intermittent itching', 'Responds to regular gentle washing'],
    },
    {
      number: '02',
      title: '2. Seborrhoeic Dermatitis',
      badge: 'Inflammatory Scalp Erythema',
      desc: 'A common inflammatory disorder targeting areas rich in sebaceous glands, including the scalp, eyebrows, and nasolabial folds. It produces yellowish, greasy crusts, erythema, burning irritation, and stubborn flaking that waxes and wanes over time.',
      signs: ['Yellowish, greasy adherent scales', 'Noticeable scalp redness & burning', 'Can affect ears & eyebrows'],
    },
    {
      number: '03',
      title: '3. Scalp Psoriasis',
      badge: 'Immune-Mediated Plaques',
      desc: 'A chronic immune-mediated condition that produces well-demarcated, thick, raised plaques covered with silvery-white scales. It frequently extends past the hairline onto the forehead, behind the ears, and nape of the neck, and is completely non-contagious.',
      signs: ['Thick plaques with silvery scales', 'Extends beyond anterior hairline', 'May cause temporary inflammatory shedding'],
    },
    {
      number: '04',
      title: '4. Scalp Eczema & Contact Dermatitis',
      badge: 'Allergic & Irritant Reactions',
      desc: 'Scalp eczema presents with severe itching, redness, weeping or dry cracking. Contact dermatitis commonly occurs as an allergic reaction to paraphenylenediamine (PPD) in hair dyes, artificial fragrances, harsh sulfates, or styling products.',
      signs: ['Intense burning & pruritus', 'Triggered by hair dyes or shampoos', 'Weeping, redness & micro-blistering'],
    },
    {
      number: '05',
      title: '5. Fungal Scalp Infection (Tinea Capitis)',
      badge: 'Contagious Dermatophyte Infection',
      desc: 'Caused by dermatophyte fungi invading hair shafts. It causes circular scaly patches, black dots where hairs break at the scalp surface, localized alopecia, and tender swollen kerion swellings. It requires prescription oral antifungal medication.',
      signs: ['Circular scaly patches with broken hairs', 'Patchy localized hair loss', 'Contagious via combs/pillows (Requires oral antifungals)'],
    },
  ];

  // Evidence-Based Treatment Options
  const evidenceBasedOptions = [
    {
      title: '1. Medicated Shampoos for Dandruff',
      badge: 'Targeted Keratolytic & Antifungal',
      desc: 'Clinically formulated active cleansers containing ketoconazole (antifungal), selenium sulphide (slows cell turnover), zinc pyrithione (antimicrobial), coal tar (reduces scaling), or salicylic acid (breaks down thick flakes). Choice depends on oiliness and scalp tolerance.',
    },
    {
      title: '2. Seborrhoeic Dermatitis Regimens',
      badge: 'Anti-Inflammatory & Yeast Control',
      desc: 'Combines medical-grade 2% ketoconazole or ciclopirox olamine shampoos with short-course mild topical corticosteroids or topical calcineurin inhibitors for acute flare reduction, followed by weekly maintenance.',
    },
    {
      title: '3. Prescription Scalp Psoriasis Solutions',
      badge: 'Plaque Clearance Therapies',
      desc: 'Formulated topical corticosteroid lotions, foams, or scalp applications, combined with calcipotriol (vitamin D analogue) and keratolytic oils. Severe or extensive cases may require phototherapy or systemic biologic agents under a dermatologist.',
    },
    {
      title: '4. Scalp Eczema Barrier Recovery',
      badge: 'Allergen Avoidance & Soothing',
      desc: 'Immediate discontinuation of irritating hair dyes and fragrances, application of fragrance-free emollients, and prescription topical anti-inflammatory solutions to restore the damaged cutaneous stratum corneum.',
    },
    {
      title: '5. Oral Antifungal Medicines for Tinea Capitis',
      badge: 'Systemic Dermatophyte Clearance',
      desc: 'Because dermatophyte fungi penetrate deeply into hair follicles and internal hair shafts, oral antifungal agents (such as terbinafine or griseofulvin) are mandatory for 4 to 8 weeks, supplemented by antifungal shampoos to reduce surface spore shedding.',
    },
  ];

  // 6 Provider Evaluation Guidelines
  const providerGuidelines = [
    {
      title: 'Verify Medical Qualifications',
      desc: 'Ensure the practitioner holds recognised, university medical qualifications (such as a degree in Homoeopathic Medicine and Surgery - BHMS) and is registered with the relevant statutory medical council.',
      icon: Stethoscope,
    },
    {
      title: 'Accurate Symptom & Scalp Analysis',
      desc: 'The clinician should thoroughly examine whether flakes are dry, oily, silvery, or associated with broken hairs, erythema, or pus-filled folliculitis.',
      icon: Eye,
    },
    {
      title: 'Transparent Discussion of Treatment Limitations',
      desc: 'A responsible practitioner explains what complementary medicine can and cannot achieve, openly acknowledging that homoeopathy does not have clinical evidence for curing fungal or psoriatic scalp disease.',
      icon: MessageCircle,
    },
    {
      title: 'Thorough Review of Current Medicines',
      desc: 'Disclose all current medicated shampoos, corticosteroid lotions, or oral medicines. Prescribed treatments should never be discontinued without medical consultation.',
      icon: Pill,
    },
    {
      title: 'Prompt Specialist Referral Readiness',
      desc: 'The practitioner must recognize when scalp symptoms indicate tinea capitis, progressive scarring alopecia, or severe psoriasis that mandates immediate dermatologist care.',
      icon: ShieldAlert,
    },
    {
      title: 'Zero Tolerance for Guaranteed Cure Claims',
      desc: 'Avoid clinics or practitioners who claim guaranteed permanent cures, rapid total flake eradication, or miracle regrowth without scientific validation.',
      icon: ShieldCheck,
    },
  ];

  // Red Flag Symptoms
  const redFlags = [
    'Severe, persistent or worsening scalp itching that interferes with sleep or work',
    'Thick, adherent silvery or yellowish crusts that crack, weep or bleed',
    'Painful, burning or tender scalp patches on palpation',
    'Pus-filled spots, follicular pustules or boggy inflamed swellings (kerion)',
    'Sudden, patchy or rapidly widening areas of hair loss',
    'Broken hair stumps showing a "black dot" appearance with scaly rings',
    'Visible cervical or occipital lymph node swelling accompanying scalp sores',
    'Scalp symptoms completely failing to respond to over-the-counter medicated shampoos after 4 weeks',
    'Suspected allergic swelling or severe redness following hair dye or chemical treatment',
  ];

  // Everyday Scalp Care Tips
  const everydayCareTips = [
    {
      title: 'Choose the Right Shampoo for Scalp Type',
      desc: 'Use a shampoo aligned with your scalp biology. Oily scalps require frequent cleansing to prevent sebum buildup, while dry or eczema-prone scalps need mild, sulfate-free cleansers.',
      icon: Droplets,
    },
    {
      title: 'Avoid Vigorous Scratching',
      desc: 'Scratching damages the scalp barrier, creates micro-tears, triggers reactive thickening, and allows secondary bacterial infections to invade hair follicles.',
      icon: ShieldCheck,
    },
    {
      title: 'Exercise Extreme Caution With Hair Dyes',
      desc: 'Perform a patch test 48 hours before applying hair color. If itching, burning or facial swelling occurs, immediately wash off the dye and seek medical care.',
      icon: AlertTriangle,
    },
    {
      title: 'Sanitize Hair Styling & Grooming Tools',
      desc: 'Wash combs, brushes, clippers, and hair clips in warm soapy water weekly. Never share combs or pillowcases if a contagious fungal infection is suspected.',
      icon: Scissors,
    },
    {
      title: 'Avoid Heavy, Pore-Clogging Styling Products',
      desc: 'Heavy hair oils, thick waxes, and alcohol-heavy sprays can irritate the scalp, trap sebum, and accelerate seborrhoeic flaking and folliculitis.',
      icon: Sparkles,
    },
    {
      title: 'Follow Prescribed Medicated Usage Instructions',
      desc: 'Allow medicated dandruff shampoos to sit on the scalp for 3 to 5 minutes before rinsing so the active ingredients can effectively penetrate the stratum corneum.',
      icon: Clock,
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'What are the common causes of scalp problems?',
      a: 'Common causes include dandruff, seborrhoeic dermatitis, psoriasis, eczema, fungal infections, allergic reactions and unsuitable hair-care products. The correct cause should be identified before choosing treatment.',
    },
    {
      q: 'Can homoeopathy cure dandruff?',
      a: 'There is insufficient reliable scientific evidence to establish homoeopathy as an effective cure for dandruff. Evidence-based management may include medicated shampoos and other treatments depending on the underlying condition.',
    },
    {
      q: 'Is scalp itching always caused by dandruff?',
      a: 'No. Scalp itching may be associated with dryness, eczema, psoriasis, contact dermatitis, fungal infections or other conditions. Persistent itching should be medically assessed.',
    },
    {
      q: 'Can scalp fungal infections cause hair loss?',
      a: 'Yes. Fungal infections such as tinea capitis can cause scaly patches, broken hairs and patchy hair loss. They generally require prescription oral antifungal treatment.',
    },
    {
      q: 'When should I consult a scalp specialist?',
      a: 'Seek medical advice if you experience persistent itching, painful patches, thick scaling, sores, pus, sudden hair loss or symptoms that do not improve with appropriate treatment.',
    },
    {
      q: 'Can dandruff cause permanent hair loss?',
      a: 'Ordinary dandruff does not usually cause permanent hair loss. However, repeated scratching and severe inflammation may contribute to temporary hair shedding or breakage.',
    },
    {
      q: 'What is the difference between dandruff and scalp psoriasis?',
      a: 'Dandruff generally causes loose flakes, while scalp psoriasis often produces thicker, well-defined plaques with silvery scales. A dermatologist can help distinguish between these conditions.',
    },
    {
      q: 'Can hair products cause scalp irritation?',
      a: 'Yes. Hair dyes, fragrances, shampoos and styling products may trigger irritation or allergic contact dermatitis in some individuals. Stop using a suspected product if it causes a reaction and seek medical advice.',
    },
    {
      q: 'Can scalp problems affect hair growth?',
      a: 'Some scalp conditions, particularly fungal infections and severe inflammation, can affect hair growth or cause temporary hair loss. The effect depends on the condition and its severity.',
    },
    {
      q: 'Should I stop my prescribed scalp medication when considering homoeopathy?',
      a: 'No. Do not stop or change prescribed medication without consulting the clinician who prescribed it. Discuss any complementary treatment you are considering with your healthcare professional.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Scalp Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Kuttippuram for Scalp Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-4 h-4 text-emerald-400" />}
        badgeText="TRICHOLOGY & SCALP HEALTH • KUTTIPPURAM"
        title="Homoeopathic Clinic in Kuttippuram for Scalp Treatment"
        subtitle="A comprehensive clinical guide explaining dandruff, seborrhoeic dermatitis, scalp psoriasis, tinea fungal infections, differential diagnosis, evidence-based shampoos, and responsible scalp care in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Scalp & Hair Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, detailed scalp symptom assessments, personalized hair-care guidance, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely dermatologist referrals for fungal, psoriatic, and inflammatory scalp disorders."
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
              Understanding Scalp Health, Dandruff & Clinical Care in Kuttippuram
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              A healthy scalp is essential for maintaining healthy hair. However, many people experience scalp-related concerns such as dandruff, itching, dryness, excessive oiliness, redness, flaking, irritation and hair thinning. These problems can affect people of different age groups and may develop due to skin conditions, fungal infections, allergies, hormonal changes, environmental factors or unsuitable hair-care practices.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Although some scalp concerns may appear minor initially, persistent symptoms can affect daily comfort, confidence and overall hair health. Identifying the actual cause is important before choosing a suitable treatment approach. If you are looking for a <strong className="text-[#1E2559]">Homoeopathic Clinic in Kuttippuram for Scalp Treatment</strong>, understanding common scalp conditions, their possible causes and available treatment options can help you make informed healthcare decisions.
            </p>
            <div className="p-4 rounded-xl bg-teal-50/90 border border-teal-200 flex items-start gap-3 mt-4">
              <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <div className="text-sm text-teal-950 leading-relaxed">
                <strong>Medical Assessment Principle:</strong> People searching for Scalp Treatment in Kuttippuram may be experiencing recurring dandruff, scalp itching, irritation, excessive flaking or other concerns. A proper consultation can help identify whether the symptoms are associated with dandruff, seborrhoeic dermatitis, psoriasis, contact dermatitis, a fungal infection or another scalp condition. <strong>Homoeopathy has insufficient reliable scientific evidence to establish that it can cure scalp disorders or eliminate infections; it should not replace appropriate medical assessment or evidence-based treatments.</strong>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Key Takeaways on Scalp Health</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential facts regarding scalp biology, condition differentiation, medical assessment thresholds, and scientific treatment evidence.
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

        {/* Understanding Common Scalp Problems (5 Conditions) */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Scissors className="w-3.5 h-3.5 text-emerald-600" />
              COMMON SCALP CONDITIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Common Scalp Problems
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              The scalp contains hair follicles, sebaceous glands and skin cells that work together to maintain the natural condition of the skin and hair. When this balance is disturbed, different scalp concerns develop. Some cause dryness and fine flaking, while others produce greasy yellow crusts, inflammation, severe itching, thick silvery scales, or broken hair stumps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonScalpProblems.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
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
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-1.5">
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

        {/* Why Identifying the Cause Matters */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <Eye className="w-3.5 h-3.5 text-purple-600" />
              DIFFERENTIAL DIAGNOSIS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Scalp Treatment in Kuttippuram: Why Identifying the Cause Matters
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              People searching for Scalp Treatment in Kuttippuram may notice very similar symptoms despite having completely different underlying pathologies. For example, dandruff and scalp psoriasis can both cause visible flakes, yet dandruff produces fine loose flakes while psoriasis forms thick, adherent silvery plaques requiring immunomodulating care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Comprehensive Scalp Assessment Factors
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>The anatomical location and appearance of affected areas (crown, hairline, occiput).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Whether the scalp is dry, excessively oily, inflamed, or weeping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>The presence of loose flakes, adherent greasy crusts, or thick silvery scales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Whether itching is mild and intermittent or severe, burning, and disruptive.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>History of recent chemical hair dyes, bleaching, heavy oils, or heat styling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>Whether there is associated hair breakage, root miniaturisation, or circular bald patches.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-purple-50/70 border border-purple-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="font-bold text-purple-950 text-base">Critical Safety Warning on Steroid Creams</h3>
                <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
                  Scalp conditions can closely resemble each other. In particular, <strong>steroid creams or lotions should never be used on suspected fungal infections (tinea capitis) without explicit medical advice</strong>. Corticosteroids suppress localized immunity, masking typical symptoms while allowing fungal hyphae to penetrate deeper into the hair bulb (<em>tinea incognito</em>), escalating hair loss and tissue damage.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-200 text-xs text-purple-900 font-semibold">
                An accurate clinical assessment prevents inappropriate self-treatment and ensures safe, targeted care.
              </div>
            </div>
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
                Homoeopathic Scalp Treatment in Kuttippuram: Understanding the Approach
              </h2>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                Individuals searching for <strong>Homoeopathic Scalp Treatment in Kuttippuram</strong> may wish to discuss recurring scalp discomfort, itching, dryness, flaking or hair-related concerns with a homoeopathic practitioner. Homoeopathy is a system of complementary medicine based on the principle of using highly diluted preparations. However, <strong>current scientific evidence does not establish homoeopathy as an effective treatment for dandruff, psoriasis, eczema, fungal scalp infections or other scalp disorders</strong>.
              </p>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                A responsible consultation should explain these limitations openly and help patients understand when evidence-based medical treatment is necessary. Homoeopathy should not replace appropriate medical assessment or scientifically proven treatments, particularly when an infection or severe inflammatory skin condition is suspected.
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-2">
                <p>
                  <strong>Patient Advisory:</strong> Prescribed medications—including medicated antifungal shampoos, corticosteroid scalp lotions, and oral antibiotics or antifungals—should never be discontinued or altered without consulting the medical clinician responsible for your care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence-Based Scalp Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <Pill className="w-3.5 h-3.5 text-blue-600" />
              EVIDENCE-BASED SCALP MODALITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Scalp Problem Treatment in Kuttippuram: Evidence-Based Treatment Options
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              The most suitable treatment depends entirely on the underlying condition. There is no single shampoo, cream or medicine that treats every scalp problem. Modern clinical trichology and dermatology employ evidence-grounded modalities matched to the specific pathology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceBasedOptions.map((opt, idx) => (
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

        {/* Scalp & Hair Connection */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-teal-600" />
              SCALP-FOLLICLE INTERACTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Scalp Health Clinic in Kuttippuram: Connecting Scalp and Hair Health
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              The scalp provides the biological micro-environment in which hair follicles grow. When the scalp is affected by severe inflammation, fungal infection or chronic itching, hair growth and retention can be adversely impacted:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base">How Scalp Disorders Affect Hair</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Severe Scratching:</strong> Mechanically damages hair cuticles and pulls fragile strands, causing traction breakage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Scalp Fungal Infections:</strong> Invades internal hair shafts, making hair brittle and causing broken "black dot" bald patches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Seborrhoeic Inflammation:</strong> Causes microvascular and oxidative stress around the hair bulb, prompting temporary telogen effluvium shedding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Scarring Folliculitis:</strong> Chronic untreated pustular scalp infections can destroy hair stem cells, resulting in permanent cicatricial alopecia.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base">When Hair Problems Need Separate Assessment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Not all hair loss originates from a scalp problem. It is essential to distinguish between scalp-driven shedding and systemic or genetic hair conditions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Androgenetic pattern alopecia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Autoimmune alopecia areata</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Hypothyroidism & thyroid disease</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Iron, ferritin & vitamin deficiencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Postpartum or hormonal shifts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>Physical or severe psychological stress</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                A professional clinic encourages systematic diagnostic evaluation (including blood panels) rather than presuming all thinning stems from dandruff.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Standards for Choosing a Provider */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              PATIENT GUIDANCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Scalp Homoeopathy Clinic in Kuttippuram: Choosing the Right Consultation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              People considering a consultation for scalp problems should carefully evaluate the practitioner's credentials, transparency regarding scientific limitations, and willingness to collaborate with medical dermatologists.
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
              Scalp Doctor in Kuttippuram: When Should You Seek Medical Advice?
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              While mild flaking can often be managed with appropriate over-the-counter anti-dandruff cleansers, specific clinical symptoms require prompt medical assessment by a qualified doctor or dermatologist:
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

        {/* Everyday Scalp Care Tips */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              HEALTHY HABITS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Scalp Issues Treatment in Kuttippuram: Everyday Scalp Care Tips
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Consistent, gentle scalp hygiene routines support the stratum corneum barrier, reduce inflammatory flares, and optimize the benefits of active treatments.
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
              Frequently Asked Questions About Scalp Treatment in Kuttippuram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Evidence-based answers addressing dandruff vs psoriasis, homoeopathy limitations, fungal infections, hair dye reactions, and specialist consultations.
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
            Book a Consultation for Scalp Problems in Kuttippuram
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Scalp problems can affect comfort, confidence and hair health. Whether you are experiencing recurring dandruff, itching, dryness, redness, scaling or other scalp concerns, understanding the underlying cause is an important first step.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            If you are searching for a <strong className="text-white">Homoeopathic Clinic in Kuttippuram for Scalp Treatment</strong>, consider arranging a consultation to discuss your symptoms, health history and treatment expectations. A responsible consultation should provide transparent information about homoeopathy, its limitations and the evidence-based options available for scalp conditions.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Do not ignore persistent scalp irritation, painful patches, suspected fungal infection or sudden hair loss. Timely medical assessment can help identify the condition and guide appropriate treatment. Take an informed step towards better scalp health.
          </p>
        </section>

        {/* In-page Appointment Booking Engine */}
        <section id="booking-section" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              ONLINE & IN-CLINIC SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Schedule Your Scalp Consultation
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
              Message our clinical desk directly for quick inquiries, scalp care questions, or booking confirmations.
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
          <RegionalRelatedGuides currentGuideKey="scalp-treatment-kuttippuram" />
        </section>
      </div>
    </div>
  );
};
