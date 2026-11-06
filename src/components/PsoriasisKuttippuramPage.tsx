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
  Layers,
  ThermometerSnowflake,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PsoriasisKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for psoriasis treatment in Kuttippuram (scaly skin patches, itching, scalp psoriasis, chronic skin care).'
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
    navigateToBookingWithReason('Psoriasis & Chronic Skin Consultation - Kuttippuram', 'online');
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
      title: 'Chronic Immune-Mediated Condition',
      desc: 'Psoriasis is a chronic immune-mediated inflammatory skin condition, not a simple cosmetic dryness or superficial infection.',
    },
    {
      title: 'Characteristic Symptoms',
      desc: 'It commonly causes raised, scaly patches, persistent itching, dryness, cracking and everyday skin discomfort.',
    },
    {
      title: 'Completely Non-Contagious',
      desc: 'Psoriasis is not contagious and cannot spread through physical touch, sharing food, utensils or ordinary household contact.',
    },
    {
      title: 'Individual Flare Triggers',
      desc: 'Triggers include emotional or physical stress, skin injuries (Koebner effect), infections, certain medications and cold, dry weather.',
    },
    {
      title: 'Evidence-Based Medical Modalities',
      desc: 'Established treatments include prescription topical therapies, phototherapy (narrowband UVB), and systemic or biologic medications.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has not been established by reliable scientific evidence as an effective treatment or cure for psoriasis.',
    },
    {
      title: 'Joint Health & Psoriatic Arthritis',
      desc: 'Persistent joint pain, morning stiffness or swollen fingers/toes requires urgent medical assessment due to the risk of psoriatic arthritis.',
    },
    {
      title: 'Early Diagnosis & Regular Follow-Up',
      desc: 'Timely differential diagnosis and consistent follow-up help manage symptoms, prevent skin trauma and reduce long-term complications.',
    },
  ];

  // 6 Types of Psoriasis
  const psoriasisTypes = [
    {
      number: '01',
      title: '1. Plaque Psoriasis',
      badge: 'Most Prevalent Form',
      desc: 'Plaque psoriasis is the most common presentation, accounting for 80% to 90% of cases. It produces raised, well-defined red or dark plaques covered with silvery-white scales. These patches frequently appear on the elbows, knees, scalp and lower back, causing itching, dryness, painful cracking and bleeding.',
      signs: ['Thickened silvery scales', 'Predilection for extensor joints', 'Skin fissures & soreness'],
    },
    {
      number: '02',
      title: '2. Scalp Psoriasis',
      badge: 'Hairline & Neck Area',
      desc: 'Scalp psoriasis can affect isolated patches or the entire scalp surface. Symptoms include thick silvery scales, intense itching, redness, soreness and visible powder-like flaking. It frequently extends beyond the hairline onto the forehead, behind the ears and around the back of the neck.',
      signs: ['Extends past forehead hairline', 'Severe flaking resembling thick dandruff', 'Scalp itching & soreness'],
    },
    {
      number: '03',
      title: '3. Guttate Psoriasis',
      badge: 'Post-Streptococcal Onset',
      desc: 'Guttate psoriasis typically presents as sudden, small, scattered, drop-shaped scaly spots across the torso, arms and legs. It often develops two to three weeks after an infection, particularly streptococcal throat infections, and is most frequently observed in children, teenagers and young adults.',
      signs: ['Teardrop-shaped papules', 'Preceded by sore throat infection', 'Widespread trunk & limb distribution'],
    },
    {
      number: '04',
      title: '4. Inverse Psoriasis',
      badge: 'Intertriginous Skin Folds',
      desc: 'Inverse (flexural) psoriasis affects skin fold areas where skin rubs against skin, such as the armpits, groin, under the breasts and around the buttocks. Unlike plaque psoriasis, it appears as smooth, shiny, intensely inflamed red patches without thick scales, worsened by friction and perspiration.',
      signs: ['Smooth, non-scaly red patches', 'Located in groin, armpits & under breasts', 'Aggravated by sweat & rubbing'],
    },
    {
      number: '05',
      title: '5. Nail Psoriasis',
      badge: 'Nail Bed & Matrix Changes',
      desc: 'Psoriasis frequently affects fingernails and toenails. Hallmarks include ice-pick nail pitting (tiny dents), yellowish-salmon discolouration ("oil drop" spots), subungual thickening, crumbling edges and separation of the nail plate from the bed (onycholysis). Nail changes require evaluation as fungal infections look similar.',
      signs: ['Tiny pinprick pits in nail plates', 'Subungual hyperkeratosis (thickening)', 'Separation from nail bed (onycholysis)'],
    },
    {
      number: '06',
      title: '6. Pustular & Erythrodermic Psoriasis',
      badge: 'Medical Urgency Alert',
      desc: 'Pustular psoriasis produces white, non-infectious pus-filled blisters surrounded by intensely red skin. Erythrodermic psoriasis is an uncommon but life-threatening form covering over 80–90% of the body with fiery redness, severe skin shedding, fever and fluid imbalance requiring emergency hospitalization.',
      signs: ['Non-infectious pustules', 'Sudden widespread fiery redness', 'Chills, fever, rapid pulse (Urgent care)'],
    },
  ];

  // 6 standards for choosing a provider
  const clinicStandards = [
    {
      title: 'Recognised Qualifications & Credentialing',
      desc: 'Verify that the healthcare professional holds recognised, registered medical qualifications and adheres to ethical clinical standards.',
      icon: Stethoscope,
    },
    {
      title: 'Accurate Differential Diagnosis',
      desc: 'Ensure the practitioner meticulously differentiates psoriasis from eczema, tinea infections, contact dermatitis and seborrhoeic dermatitis.',
      icon: Eye,
    },
    {
      title: 'Evidence-Based Treatment Knowledge',
      desc: 'The practitioner should have an in-depth understanding of standard dermatological options, potential drug interactions and modern clinical guidelines.',
      icon: BookOpen,
    },
    {
      title: 'Transparent & Honest Communication',
      desc: 'Treatment benefits, limitations, disease recurrence and possible side effects must be explained transparently without unrealistic cure promises.',
      icon: MessageCircle,
    },
    {
      title: 'Appropriate Specialist Referral Protocols',
      desc: 'Moderate, severe, widespread or complicated psoriasis and joint symptoms must be referred promptly to a qualified dermatologist or rheumatologist.',
      icon: ShieldAlert,
    },
    {
      title: 'Regular Longitudinal Follow-Up',
      desc: 'Ongoing clinical assessment helps track disease activity, monitor flare frequency and adjust supportive care as seasons and health statuses change.',
      icon: Clock,
    },
  ];

  // 6 considerations before choosing homoeopathic clinic
  const clinicConsiderations = [
    {
      title: '1. Confirm an Accurate Medical Diagnosis',
      desc: 'Verify that the skin condition has been evaluated and confirmed by a certified physician or dermatologist before beginning any alternative therapy.',
    },
    {
      title: '2. Enquire About Scientific Evidence',
      desc: 'Ask about the scientific evidence supporting any suggested remedy. Understand that clinical trials do not validate homoeopathy as a cure for psoriasis.',
    },
    {
      title: '3. Avoid Promises of Permanent Cures',
      desc: 'Psoriasis is a chronic immune-mediated condition with no known permanent cure. Any clinic claiming a 100% cure is acting contrary to medical evidence.',
    },
    {
      title: '4. Never Discontinue Prescribed Treatments',
      desc: 'Do not stop prescription creams, phototherapy or systemic medicines prescribed by your doctor without direct medical consultation, as abrupt cessation can cause severe rebound flares.',
    },
    {
      title: '5. Seek Dermatological Care If Symptoms Escalate',
      desc: 'If scaly plaques spread, crack painfully, bleed, become infected or fail to improve, schedule an immediate specialist dermatologist assessment.',
    },
    {
      title: '6. Report Joint Symptoms Promptly',
      desc: 'Report morning joint stiffness, swollen finger joints or heel pain immediately to rule out psoriatic arthritis and protect joint cartilage.',
    },
  ];

  // Evidence-based treatments
  const conventionalOptions = [
    {
      title: '1. Topical Treatments',
      badge: 'First-Line Therapy',
      desc: 'Applied directly to skin lesions. Includes prescription corticosteroid creams/ointments, topical vitamin D3 analogues (calcipotriol), calcineurin inhibitors (tacrolimus/pimecrolimus for sensitive facial or inverse areas), keratolytic salicylic acid to thin scales, and emollient barrier creams.',
    },
    {
      title: '2. Phototherapy (Light Therapy)',
      badge: 'Controlled UV Exposure',
      desc: 'Conducted under medical supervision in dermatological centers. Narrowband UVB (NB-UVB) slows rapid epidermal cell proliferation and reduces localized skin inflammation when topicals alone are insufficient for extensive body coverage.',
    },
    {
      title: '3. Oral Systemic Medications',
      badge: 'Moderate-to-Severe Psoriasis',
      desc: 'Medicines that work throughout the entire body to calm systemic immune hyperreactivity. Options include methotrexate, ciclosporin, acitretin (oral retinoid) or apremilast, requiring routine blood tests and medical supervision.',
    },
    {
      title: '4. Targeted Biologic Therapies',
      badge: 'Advanced Targeted Immunology',
      desc: 'Engineered proteins that target specific cytokines driving the psoriatic cascade (such as TNF-alpha, IL-17, IL-23 inhibitors). Indicated for severe or recalcitrant disease under a consultant dermatologist’s supervision.',
    },
  ];

  // Daily Habits for Psoriasis Care
  const dailyHabits = [
    {
      title: 'Keep Skin Consistently Moisturized',
      desc: 'Apply fragrance-free, thick emollient ointments or creams within 3 minutes after bathing to lock in moisture and soften scaly plaques.',
      icon: Droplets,
    },
    {
      title: 'Avoid Scratching & Skin Trauma',
      desc: 'Scratching damages the epidermal barrier and triggers new plaques through the Koebner phenomenon. Keep nails trimmed and use cool compresses for itch.',
      icon: ShieldCheck,
    },
    {
      title: 'Proactively Manage Stress',
      desc: 'Stress is one of the most prominent psoriasis triggers. Incorporate daily meditation, gentle yoga, deep breathing exercises and regular restful sleep.',
      icon: Heart,
    },
    {
      title: 'Protect Skin From Weather & Sunburn',
      desc: 'Avoid severe sunburn. During winter or dry periods, use indoor humidifiers and protect exposed hands and neck from harsh cold winds.',
      icon: Sun,
    },
    {
      title: 'Avoid Tobacco & Limit Alcohol',
      desc: 'Smoking significantly increases the severity of psoriasis and reduces treatment response. Alcohol consumption can provoke flares and interact with medications.',
      icon: AlertTriangle,
    },
    {
      title: 'Maintain a Balanced Lifestyle',
      desc: 'Follow an anti-inflammatory, balanced diet rich in leafy greens, omega-3 fatty acids, maintain healthy body weight, and exercise regularly.',
      icon: Utensils,
    },
  ];

  // 10 Interactive FAQs
  const faqs = [
    {
      q: 'What is psoriasis?',
      a: 'Psoriasis is a chronic immune-mediated inflammatory skin condition that causes accelerated skin-cell growth. It commonly produces thick, scaly and inflamed skin patches.',
    },
    {
      q: 'Is psoriasis contagious?',
      a: 'No. Psoriasis is not contagious. It cannot spread through touching, sharing food, using common household items or being physically close to someone.',
    },
    {
      q: 'Can homoeopathy cure psoriasis?',
      a: 'Reliable scientific evidence has not established homoeopathy as an effective treatment for psoriasis. It should not replace evidence-based dermatological care.',
    },
    {
      q: 'What are the common symptoms of psoriasis?',
      a: 'Common symptoms include raised skin patches, scaling, itching, dryness, cracking and sometimes nail changes.',
    },
    {
      q: 'Can stress trigger psoriasis?',
      a: 'Stress can contribute to psoriasis flare-ups in some individuals. Managing stress may support general well-being, but it does not replace medical treatment.',
    },
    {
      q: 'Is psoriasis a lifelong condition?',
      a: 'Psoriasis is generally a chronic condition that can involve periods of improvement and flare-ups. Although there is no permanent cure, treatment can help control symptoms.',
    },
    {
      q: 'Can psoriasis affect the nails?',
      a: 'Yes. Nail psoriasis can cause pitting, discolouration, thickening and separation of the nail from the nail bed.',
    },
    {
      q: 'Can psoriasis affect the joints?',
      a: 'Yes. Some people develop psoriatic arthritis, which can cause joint pain, swelling and stiffness. Persistent joint symptoms require medical assessment.',
    },
    {
      q: 'What treatments are available for psoriasis?',
      a: 'Treatment options may include topical medicines, phototherapy, systemic medications and biologic therapies. The choice depends on disease severity and individual health requirements.',
    },
    {
      q: 'When should I consult a dermatologist?',
      a: 'Consult a dermatologist if you experience persistent scaly patches, worsening inflammation, widespread symptoms, nail changes or possible joint involvement.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Psoriasis Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Kuttippuram for Psoriasis Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Layers className="w-4 h-4 text-emerald-400" />}
        badgeText="CHRONIC DERMATOLOGY & IMMUNE CARE • KUTTIPPURAM"
        title="Homoeopathic Clinic in Kuttippuram for Psoriasis Treatment"
        subtitle="A comprehensive clinical guide explaining chronic inflammatory skin plaques, scalp psoriasis, immune triggers, differential diagnosis from eczema & fungal conditions, evidence-based dermatological therapies, and responsible healthcare in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Chronic Skin & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, detailed dermatological history reviews, lifestyle counselling, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely dermatologist and rheumatologist referrals whenever needed."
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
              Understanding Psoriasis and Chronic Skin Inflammation in Kuttippuram
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Psoriasis is a chronic inflammatory skin condition that can affect people of different ages. It commonly causes dry, thickened, red or discoloured patches covered with silvery-white scales. These patches may appear on the scalp, elbows, knees, hands, feet and other parts of the body. For some individuals, psoriasis causes mild skin irritation, while others experience persistent itching, discomfort, cracked skin and changes that affect their confidence and daily activities.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              People searching for a <strong className="text-[#1E2559]">Homoeopathic Clinic in Kuttippuram for Psoriasis Treatment</strong> may be looking for guidance about recurring skin symptoms and available healthcare approaches. Understanding psoriasis is an important first step because it is a chronic immune-mediated condition that requires appropriate medical assessment and management.
            </p>
            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 flex items-start gap-3 mt-4">
              <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <div className="text-sm text-teal-900 leading-relaxed">
                <strong>Completely Non-Contagious:</strong> Psoriasis is not contagious. It does not spread through physical contact, sharing food or using common household items. Although there is currently no permanent cure, several evidence-based treatments can help control symptoms, reduce inflammation and improve quality of life. If you experience persistent scaly patches, itching or unexplained skin changes, consult a qualified healthcare professional or dermatologist.
              </div>
            </div>
          </div>
        </div>

        {/* 8 Key Takeaways */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              CLINICAL SUMMARY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Key Takeaways on Psoriasis</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential facts regarding disease pathophysiology, contagion misconceptions, triggers, and medical care standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Understanding Psoriasis and Its Symptoms */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              PATHOPHYSIOLOGY & CLINICAL PRESENTATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Psoriasis and Its Symptoms
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Psoriasis develops when immune-system activity causes skin cells to grow and accumulate faster than usual. While healthy skin cells turn over in approximately 28 to 30 days, in psoriatic skin this cycle accelerates to just 3 to 4 days, resulting in the rapid buildup of immature keratinocytes that form thickened, dry, scaly and irritated plaques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Common Psoriasis Symptoms
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Raised or thickened skin patches:</strong> Well-demarcated plaques that feel rough or elevated.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Discoloured skin areas:</strong> Red, pink, salmon, purple, brown or darker hyperpigmented tones depending on natural complexion.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Silvery or whitish scales:</strong> Flakes of dead skin cells that peel or shed easily.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Persistent itching & burning:</strong> Uncomfortable stinging, tenderness or intense pruritus.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Dry, cracked skin:</strong> Deep fissures that may bleed, especially around joints or palms/soles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Nail changes:</strong> Tiny dents (pits), yellow-brown discoloration or crumbly nail plates.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-700" />
                  Importance of Medical Differentiation in Kuttippuram
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  People looking for <strong>Psoriasis Treatment in Kuttippuram</strong> should understand that psoriasis can closely resemble eczema, fungal tinea infections, contact dermatitis, and seborrhoeic dermatitis.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  While eczema frequently appears on flexor folds (inside of elbows and behind knees) with less defined borders, plaque psoriasis typically targets extensor surfaces (elbow tips, knee caps, lower back) with thick silvery scales. A clinical medical examination is vital before initiating any treatment regimen.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-blue-200 text-xs text-blue-900 font-medium">
                Note: Some individuals experience occasional seasonal flare-ups, while others have persistent symptoms requiring continuous dermatological management.
              </div>
            </div>
          </div>
        </section>

        {/* 6 Different Types of Psoriasis */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              CLINICAL SUBTYPES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Different Types of Psoriasis</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Psoriasis manifests in several distinct anatomical patterns. Identifying the exact type allows healthcare professionals to recommend appropriate evidence-based interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {psoriasisTypes.map((item, idx) => (
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

        {/* What Causes Psoriasis & Triggers */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <Info className="w-3.5 h-3.5 text-purple-600" />
              ETIOLOGY & ENVIRONMENTAL TRIGGERS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">What Causes Psoriasis?</h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              The exact root cause of psoriasis is not completely understood. However, modern scientific medicine confirms that immune-system dysregulation and genetic susceptibility play fundamental roles. Psoriasis is neither caused by poor personal hygiene nor is it an infectious illness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-600" />
                Genetic Factors & Immune Hyperactivity
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Genetic Susceptibility:</strong> Psoriasis often runs in families. Having a parent or sibling with psoriasis increases the likelihood of developing it, mediated by specific human leukocyte antigen (HLA) genes. However, having a genetic predisposition does not guarantee you will develop the condition.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Immune System Cascade:</strong> Psoriasis is driven by an abnormal T-lymphocyte and dendritic cell response. Immune cells release pro-inflammatory cytokines (such as TNF-alpha, Interleukin-17, and Interleukin-23) that overstimulate keratinocytes, accelerating cell reproduction and causing chronic microvascular dilation and scaling.
              </p>
            </div>

            <div className="space-y-4 p-5 rounded-xl bg-purple-50/60 border border-purple-200">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <ThermometerSnowflake className="w-5 h-5 text-purple-700" />
                Common Psoriasis Flare Triggers
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Certain environmental and physiological factors can trigger the first appearance of psoriasis or provoke severe flare-ups:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Physical or emotional stress</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Skin cuts, scratches, sunburn (Koebner)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Streptococcal throat infections</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Cold, dry weather & low humidity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Cigarette smoking & tobacco</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Heavy alcohol consumption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Certain drugs (beta-blockers, lithium)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>Abrupt steroid cessation rebound</span>
                </div>
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
                SCIENTIFIC TRANSPARENCY & MEDICAL EVIDENCE
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
                Homoeopathic Treatment for Psoriasis in Kuttippuram: Understanding the Evidence
              </h2>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                People exploring <strong>Homoeopathic Treatment for Psoriasis in Kuttippuram</strong> may be interested in alternative approaches to managing recurring skin problems. Homoeopathy is an alternative system of healthcare based on principles such as individualised remedy selection. However, <strong>reliable scientific evidence has not established homoeopathy as an effective treatment or cure for psoriasis</strong>.
              </p>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                There is no dependable clinical evidence that homoeopathic remedies can alter the underlying immune-system processes responsible for psoriasis, permanently eliminate psoriatic plaques, or prevent future disease flare-ups.
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-2">
                <p>
                  <strong>Critical Medical Advisory:</strong> Psoriasis is a chronic inflammatory disorder that requires ongoing medical oversight. Delaying evidence-based dermatological care can allow plaques to spread, crack, bleed and heighten the risk of systemic complications, including irreversible joint erosion from psoriatic arthritis.
                </p>
                <p>
                  If you are considering a homoeopathic consultation, discuss the limitations of this approach openly with the practitioner. <strong>Do not stop prescribed medications, discontinue topical treatments, or postpone dermatological care in favour of unproven remedies.</strong> A responsible healthcare approach must prioritise accurate diagnosis, realistic expectations and appropriate medical treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Standards for Choosing a Psoriasis Doctor in Kuttippuram */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              PATIENT GUIDANCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Choosing a Psoriasis Doctor in Kuttippuram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Selecting the right healthcare professional is important when dealing with persistent skin inflammation and recurring psoriasis symptoms. Consider the practitioner’s qualifications and ability to identify conditions that require specialist dermatological intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicStandards.map((item, idx) => {
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

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 text-center font-medium">
            A certified dermatologist is the appropriate medical specialist for diagnosing and managing psoriasis, particularly when symptoms are widespread, severe, or difficult to control with basic topical moisturisation.
          </div>
        </section>

        {/* Psoriasis Homoeopathy Clinic Considerations */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
              CLINICAL CHECKPOINTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Psoriasis Homoeopathy Clinic in Kuttippuram: Important Considerations
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              People searching for a <strong>Psoriasis Homoeopathy Clinic in Kuttippuram</strong> should understand the difference between receiving a consultation and receiving a treatment supported by reliable scientific evidence. A practitioner offering homoeopathic services should be transparent about the limitations of homoeopathy for psoriasis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clinicConsiderations.map((c, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-[#1E2559] text-base">{c.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
            A responsible <strong>Homoeopathic Doctor for Psoriasis in Kuttippuram</strong> should never discourage patients from seeking evidence-based dermatological treatment, nor make unsupported claims about reversing or permanently curing the underlying immunological condition.
          </div>
        </section>

        {/* Why Medical Diagnosis Matters & Differential Diagnosis */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <Eye className="w-3.5 h-3.5 text-rose-600" />
              DIFFERENTIAL EVALUATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Psoriasis Homoeopathic Treatment in Kuttippuram: Why Medical Diagnosis Matters
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Several distinct dermatological conditions can closely resemble psoriasis. Eczema, seborrhoeic dermatitis, fungal infections (such as tinea corporis or tinea capitis), and allergic contact dermatitis all produce itching, redness, flaking, and scaling. Treating the wrong condition can delay appropriate recovery, worsen skin inflammation, or cause fungal infections to spread aggressively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-rose-600" />
                Key Components of Clinical Diagnosis
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Appearance & lesion morphology:</strong> Distinct, sharply defined plaques with silvery scales vs. indistinct vesicular weeping eczema.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Anatomical location:</strong> Extensor surfaces (knees, elbows) for plaque psoriasis vs. flexural creases for eczema.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Nail examination:</strong> Pits, subungual hyperkeratosis, or onycholysis indicating psoriatic nail involvement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Family history:</strong> Reviewing first-degree relatives with psoriasis or psoriatic arthritis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong>Diagnostic skin biopsy:</strong> Recommended by dermatologists when clinical presentation is atypical or overlapping.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <h3 className="font-bold text-rose-950 text-base">Overlooked Diagnostic Risks</h3>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                  Misdiagnosing a fungal ringworm infection as psoriasis and treating it with steroid ointments can cause <em>tinea incognito</em>, worsening the fungal proliferation. Conversely, mistaking psoriasis for a fungal ringworm infection leads to ineffective antifungal use while psoriatic inflammation escalates.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-rose-200 text-xs text-rose-900 font-semibold">
                People considering Psoriasis Homoeopathic Treatment in Kuttippuram should ensure that proper medical evaluation is not overlooked.
              </div>
            </div>
          </div>
        </section>

        {/* Evidence-Based Psoriasis Treatment Options */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <Pill className="w-3.5 h-3.5 text-blue-600" />
              CONVENTIONAL MEDICINE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Evidence-Based Psoriasis Treatment Options
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Although psoriasis does not currently have a permanent cure, established medical treatments can effectively control inflammation, clear scaly plaques, and significantly enhance quality of life. Treatment depends on the type of psoriasis, affected body area, disease severity and overall health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conventionalOptions.map((opt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1E2559] text-lg">{opt.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#1E2559] font-medium border border-blue-100">
                    {opt.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Protocol & Psoriatic Arthritis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Psoriasis Consultation in Kuttippuram: What to Expect */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
              CONSULTATION PROTOCOL
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
              Psoriasis Consultation in Kuttippuram: What to Expect
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              A comprehensive <strong>Psoriasis Consultation in Kuttippuram</strong> involves a systematic clinical review of symptoms, medical history, lifestyle factors and previous dermatological responses:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>When did skin symptoms first appear, and how have they evolved?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>Which body sites are currently involved (scalp, trunk, limbs, inverse folds)?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>Do scaly patches itch intensely, crack, bleed, or cause sleep disturbances?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>Are symptoms continuous or do they follow cyclical seasonal flare patterns?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>Is there a documented family history of psoriasis or autoimmune disorders?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>What previous treatments (topical steroids, moisturisers) have been used?</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span>Are there coexisting nail changes or morning joint stiffness?</span>
              </li>
            </ul>
          </section>

          {/* Psoriasis & Joint Health: Psoriatic Arthritis */}
          <section className="bg-rose-50/70 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200 text-rose-900 text-xs font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
              JOINT HEALTH WARNING
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-rose-950">
              Psoriasis and Joint Health: Understanding Psoriatic Arthritis
            </h2>
            <p className="text-rose-900 text-xs sm:text-sm leading-relaxed">
              Psoriasis does not affect only the skin. Up to 30% of individuals with cutaneous psoriasis develop <strong>psoriatic arthritis</strong>, an inflammatory musculoskeletal condition affecting peripheral joints, the spine, and entheses (where tendons attach to bones).
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-rose-950">
              <p className="font-bold">Recognising Early Warning Signs:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                  <span>Morning joint stiffness &gt; 30 mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                  <span>Sausage-like swollen fingers (dactylitis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                  <span>Heel or Achilles tendon pain (enthesitis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                  <span>Accompanying pitted fingernails</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-rose-900 font-medium pt-2 border-t border-rose-200">
              People with psoriasis should never ignore joint symptoms. Early medical assessment and rheumatology referral can prevent permanent joint deformity and irreversible cartilage damage.
            </p>
          </section>
        </div>

        {/* Daily Habits That Support Psoriasis Management */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              LIFESTYLE & SUPPORTIVE CARE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Daily Habits That Support Psoriasis Management
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Healthy daily habits can support general skin comfort and reduce flare frequency. However, lifestyle changes are complementary measures and are never a substitute for medical treatment.
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

        {/* Interactive FAQ Section */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              PATIENT QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Clear, evidence-grounded answers to the most common queries regarding psoriasis, homoeopathy evidence, triggers, and dermatological care.
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
            Responsible Psoriasis Care & Medical Guidance in Kuttippuram
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Psoriasis is a chronic inflammatory skin condition that can affect physical comfort, emotional well-being and everyday activities. Although it cannot currently be permanently cured, appropriate medical treatment can help control symptoms and improve quality of life.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            If you are searching for a <strong className="text-white">Homoeopathic Clinic in Kuttippuram for Psoriasis Treatment</strong>, take time to understand the practitioner's qualifications and the limitations of the treatment offered. Homoeopathy has not been established as an effective treatment for psoriasis and should not replace evidence-based dermatological care.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Accurate diagnosis, appropriate medication, regular follow-up and healthy daily habits are important parts of responsible psoriasis management. If you experience recurring skin patches, severe itching or joint discomfort, consult a qualified healthcare professional to discuss suitable treatment options.
          </p>
        </section>

        {/* In-page Appointment Booking Engine */}
        <section id="booking-section" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              ONLINE & IN-CLINIC SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Schedule Your Consultation
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
          <RegionalRelatedGuides currentGuideKey="psoriasis-treatment-kuttippuram" />
        </section>
      </div>
    </div>
  );
};
