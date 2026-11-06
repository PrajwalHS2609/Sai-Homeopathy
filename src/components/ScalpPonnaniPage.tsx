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
  FileText,
  AlertCircle,
  Scissors,
  Shield,
  Stethoscope,
  MapPin,
  Pill,
  Sun,
  Layers,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const ScalpPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for dandruff, scalp itching, flaking, and scalp health (Ponnani patient guide).'
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
    navigateToBookingWithReason('Scalp Health Consultation - Ponnani', 'online');
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
      title: 'Diverse Scalp Conditions',
      desc: 'Scalp problems include dandruff, itching, dryness, excessive oiliness, redness, tenderness, and inflammatory flaking across all age groups.',
    },
    {
      title: 'Multifactorial Causes',
      desc: 'Common causes include seborrhoeic dermatitis, psoriasis, fungal ringworm infections (tinea capitis), eczema, and contact allergic reactions.',
    },
    {
      title: 'Evaluate Persistent Itching',
      desc: 'Persistent itching, recurring scaling, or hair shedding should be evaluated by a qualified healthcare professional to prevent follicle damage.',
    },
    {
      title: 'Condition-Specific Care',
      desc: 'Different scalp conditions require distinct medical treatments; accurately identifying the underlying cause is essential for effective relief.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'There is insufficient reliable scientific evidence that homoeopathy can cure scalp disorders, eliminate infections, or reliably treat hair loss.',
    },
    {
      title: 'Avoid Scratching & Harsh Products',
      desc: 'Scratching damages the skin barrier, worsens inflammation, and increases bacterial infection risk. Avoid harsh, unverified home concoctions.',
    },
    {
      title: 'Appropriate Hair Care & Triage',
      desc: 'Appropriate gentle hair care, medical diagnosis, targeted medicated washes, and timely treatment help restore and maintain long-term scalp health.',
    },
    {
      title: 'Emergency Medical Warning Signs',
      desc: 'Sudden hair loss, painful swollen bumps, pus, crusting, or signs of acute infection require prompt, prescription medical attention.',
    },
  ];

  // 6 Common Types of Scalp Conditions
  const scalpConditions = [
    {
      number: '01',
      title: 'Dandruff (Pityriasis Capitis)',
      badge: 'Sebum & Yeast Imbalance',
      desc: 'Dandruff is a common scalp condition causing white or yellowish loose flakes. It is frequently accompanied by mild to moderate itching and becomes more noticeable when the scalp is oily or irritated.',
      clinicalDetails: 'Dandruff is closely linked to the proliferation of naturally occurring Malassezia yeast feeding on sebum lipids. Over-the-counter or prescribed medicated shampoos with ketoconazole, zinc pyrithione, or selenium sulphide help control microbial load.',
    },
    {
      number: '02',
      title: 'Seborrhoeic Dermatitis',
      badge: 'Chronic Inflammatory',
      desc: 'Seborrhoeic dermatitis is an inflammatory skin condition affecting sebum-dense zones, particularly the scalp, retroauricular folds, and eyebrows. It produces greasy, yellowish scales over an erythematous, inflamed base.',
      clinicalDetails: 'Symptoms tend to flare during stress, cold dry weather, or fatigue. Management involves therapeutic antifungal washes, mild topical anti-inflammatories, and barrier repair under medical supervision.',
    },
    {
      number: '03',
      title: 'Scalp Psoriasis',
      badge: 'Autoimmune & Indurated',
      desc: 'Scalp psoriasis causes thick, raised, well-demarcated plaques covered with silvery or whitish micaceous scales that frequently extend past the frontal hairline and onto the nape of the neck.',
      clinicalDetails: 'Unlike dandruff, scalp psoriasis plaques are indurated and thicker. Forceful scale removal can trigger pinpoint bleeding (Auspitz sign). Dermatological evaluation helps distinguish it from seborrhoea.',
    },
    {
      number: '04',
      title: 'Dry Scalp',
      badge: 'Moisture Barrier Depletion',
      desc: 'A dry scalp occurs when the skin lacks sufficient hydration and epidermal lipids, producing tight, uncomfortable sensations, mild itching, and fine, dry, powdery flakes.',
      clinicalDetails: 'Aggravated by frequent hot showers, harsh sulphate shampoos, dry air conditioning, and coastal hard water. Using mild, hydrating, sulphate-free cleansers and avoiding alcohol-heavy hair tonics helps restore comfort.',
    },
    {
      number: '05',
      title: 'Fungal Scalp Infection (Tinea Capitis)',
      badge: 'Infectious & Prescription Only',
      desc: 'Tinea capitis is a dermatophyte fungal infection that invades the hair shafts, causing circular patches of dry scaling, intense itching, broken "black-dot" hairs, and localized hair loss.',
      clinicalDetails: 'Severe inflammatory variants (kerion) develop into boggy, painful, pus-oozing swellings. Fungal scalp infections require oral prescription antifungals; they cannot be cured with shampoos, oils, or homoeopathy alone.',
    },
    {
      number: '06',
      title: 'Contact Dermatitis',
      badge: 'Allergic & Irritant Reaction',
      desc: 'Contact dermatitis develops when the scalp reacts to chemical hair dyes (e.g., paraphenylenediamine / PPD), synthetic fragrances, bleaching agents, or harsh surfactants in styling cosmetics.',
      clinicalDetails: 'Symptoms manifest as sudden scalp redness, intense burning, edema, oozing papules, or severe itching shortly after product application. Prompt cessation of the offending product and medical evaluation are vital.',
    },
  ];

  // Evidence-Based Treatment Options
  const evidenceTreatments = [
    {
      icon: <Droplets className="w-5 h-5 text-[#303A88]" />,
      title: 'Medicated Shampoos',
      desc: 'Shampoos formulated with active therapeutic agents—including ketoconazole (2%), selenium sulphide (2.5%), zinc pyrithione, salicylic acid, and coal tar—effectively reduce yeast overgrowth, soften stubborn crusts, and control flaking.',
    },
    {
      icon: <Pill className="w-5 h-5 text-[#0D9488]" />,
      title: 'Topical Corticosteroid Solutions',
      desc: 'For acute, severe inflammatory flares associated with scalp eczema, seborrhoeic dermatitis, or psoriasis, doctors prescribe non-greasy topical corticosteroid lotions, foams, or scalp solutions to rapidly relieve redness and swelling.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      title: 'Prescription Oral Antifungals',
      desc: 'Fungal infections of the scalp (tinea capitis) penetrate deep into hair follicles. Medicated shampoos alone cannot penetrate the hair cortex; oral prescription antifungal medications are mandatory to eradicate the fungal pathogen.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#8B5CF6]" />,
      title: 'Dermatological Psoriasis Therapies',
      desc: 'Scalp psoriasis may require combinations of topical vitamin D3 analogues (calcipotriol), keratolytic salicylic acid oils to dissolve thick crusts, phototherapy, or systemic biologic therapies in extensive cases.',
    },
    {
      icon: <Sun className="w-5 h-5 text-[#D97706]" />,
      title: 'Elimination of Contact Allergens',
      desc: 'Identifying and discontinuing contact allergens—especially PPD-containing hair dyes, harsh bleaching agents, and synthetic fragrance formulations—allows the scalp barrier to heal and prevents recurring eczema.',
    },
  ];

  // 7 Daily Scalp Care Tips
  const dailyCareTips = [
    {
      title: '1. Use a Suitable, Condition-Specific Shampoo',
      desc: 'Select a cleanser formulated for your specific scalp type. If you have dandruff or seborrhoeic flaking, follow your healthcare professional’s instructions on lathering and leaving medicated washes on the scalp for 3 to 5 minutes before rinsing.',
    },
    {
      title: '2. Avoid Excessive Scratching & Scalp Trauma',
      desc: 'Scratching with fingernails tears the delicate scalp epithelium, introduces secondary staphylococcal bacteria, worsens inflammation, and can physically snap hair shafts near the follicular roots.',
    },
    {
      title: '3. Exercise Caution with Styling & Chemical Products',
      desc: 'Hair dyes, bleach, chemical relaxers, synthetic fragrances, and heavy hair waxes can irritate sensitive follicles. Discontinue any product that causes tingling, burning, redness, or post-wash itching.',
    },
    {
      title: '4. Maintain Consistent Scalp Hygiene',
      desc: 'Wash your scalp regularly according to your oil production and daily physical activity level. Avoid letting heavy natural oils, sweat, and environmental pollutants accumulate on the scalp barrier.',
    },
    {
      title: '5. Never Share Personal Hair Accessories',
      desc: 'Do not share combs, hairbrushes, pillowcases, towels, or hats, particularly when an infectious condition (like fungal tinea capitis or bacterial folliculitis) is suspected.',
    },
    {
      title: '6. Maintain a Nutrient-Dense, Balanced Diet',
      desc: 'A wholesome diet providing adequate lean protein, zinc, iron, omega-3 essential fatty acids, and B-complex vitamins supports follicle cellular turnover and healthy sebum quality.',
    },
    {
      title: '7. Seek Medical Evaluation for Persistent Symptoms',
      desc: 'If scalp itching, persistent flaking, redness, or tenderness fails to improve with basic gentle care over 2 to 3 weeks, consult a qualified healthcare professional for formal diagnosis.',
    },
  ];

  // 5 Steps of Consultation
  const consultationSteps = [
    {
      step: '01',
      title: 'Initial Consultation & Symptom Review',
      desc: 'The practitioner listens carefully to your concerns regarding scalp discomfort, onset timing, itching intensity, flaking patterns, and recent changes in hair density.',
    },
    {
      step: '02',
      title: 'Comprehensive Health & Product History',
      desc: 'Your medical background, skin allergies, family history of psoriasis or eczema, dietary habits, and all hair products, dyes, and shampoos currently used are documented.',
    },
    {
      step: '03',
      title: 'Symptom Assessment & Specialist Triage',
      desc: 'The doctor evaluates the duration, severity, and appearance of scalp lesions. If symptoms indicate fungal infection, severe psoriasis, or scarring alopecia, immediate dermatologist referral is arranged.',
    },
    {
      step: '04',
      title: 'Transparent Care Guidance',
      desc: 'Suitable care options are explained clearly. If complementary homoeopathic constitutional support is discussed, its limitations and the absence of strong evidence for treating scalp disorders are openly communicated.',
    },
    {
      step: '05',
      title: 'Follow-Up & Ongoing Evaluation',
      desc: 'Persistent scalp symptoms are reviewed periodically to verify whether inflammation is subsiding or whether further diagnostic tests (such as skin scrapings or trichoscopy) are warranted.',
    },
  ];

  // 7 Selection Criteria for Clinic
  const selectionCriteria = [
    {
      num: '01',
      title: 'Professional Qualifications',
      desc: 'Verify the doctor’s accredited qualifications (such as BHMS or MD Hom.) and verified medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Detailed Consultation',
      desc: 'Choose a clinic that spends adequate time examining your scalp history, flaking characteristics, and lifestyle triggers.',
    },
    {
      num: '03',
      title: 'Clear & Honest Communication',
      desc: 'Both the potential supportive role and the clinical limitations of complementary therapies must be transparently explained.',
    },
    {
      num: '04',
      title: 'Individualised Assessment',
      desc: 'Avoid clinics offering universal "hair and scalp tonics." Scalp disorders differ vastly in etiology and require targeted care.',
    },
    {
      num: '05',
      title: 'Appropriate Specialist Referrals',
      desc: 'A responsible clinic collaborates actively with certified dermatologists for fungal cultures, skin biopsy, and prescription therapies.',
    },
    {
      num: '06',
      title: 'Patient Safety & Ethical Care',
      desc: 'Avoid clinics promising guaranteed cures, instant dandruff eradication, or advising you to discard prescription antifungals.',
    },
    {
      num: '07',
      title: 'Structured Follow-Up Guidance',
      desc: 'Long-term scalp and follicle health requires scheduled monitoring and responsive adjustment of the management plan.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'What are the common causes of scalp problems?',
      a: 'Common causes include ordinary dandruff (pityriasis capitis), seborrhoeic dermatitis, scalp psoriasis, fungal ringworm infections (tinea capitis), atopic eczema, contact dermatitis from hair dyes or shampoos, and environmental dryness.',
    },
    {
      q: 'Is Homoeopathic Scalp Treatment in Ponnani effective?',
      a: 'There is insufficient reliable scientific evidence establishing homoeopathy as an effective or curative treatment for scalp disorders such as seborrhoeic dermatitis, psoriasis, or fungal infections. While some patients explore homoeopathy for constitutional support, it should not replace established medical diagnosis and evidence-based treatments.',
    },
    {
      q: 'Can dandruff cause hair loss?',
      a: 'Ordinary dandruff does not directly destroy hair follicles or cause permanent baldness. However, severe scalp inflammation, persistent itching, and vigorous fingernail scratching can physically snap hair shafts near the roots and weaken hair anchorage, contributing to increased temporary shedding.',
    },
    {
      q: 'How can I identify scalp psoriasis?',
      a: 'Scalp psoriasis typically produces thick, well-defined, raised erythematous plaques covered with dense, silvery-white scales that often extend beyond the hairline onto the forehead or behind the ears. A dermatologist can differentiate scalp psoriasis from severe dandruff or eczema through clinical examination.',
    },
    {
      q: 'Can fungal infections affect the scalp?',
      a: 'Yes. Fungal infections (tinea capitis) can invade hair shafts, causing scaly itchy patches, broken hairs ("black dots"), localized swelling (kerion), and patchy hair loss. Because the fungus resides within the hair follicle, prescription oral antifungal medicines are generally required.',
    },
    {
      q: 'How often should I wash my hair?',
      a: 'The ideal washing frequency depends on your scalp oiliness, hair texture, climate, and underlying conditions. Individuals with oily scalps or seborrhoeic dermatitis typically benefit from washing every 1 to 2 days, whereas those with dry scalps may wash 2 to 3 times weekly. Follow your doctor’s guidance when using medicated shampoos.',
    },
    {
      q: 'Can stress cause scalp itching?',
      a: 'Yes. Psychological stress stimulates the neuroendocrine system and releases inflammatory cytokines that can lower the itch threshold and exacerbate conditions like seborrhoeic dermatitis and psoriasis. However, persistent itching should always be assessed by a doctor to identify the exact cause.',
    },
    {
      q: 'When should I consult a Scalp Doctor in Ponnani?',
      a: 'You should seek professional medical advice if you experience persistent itching lasting more than two weeks, thick or recurring scales, scalp tenderness, painful bumps, pus, crusting, sores, or sudden unexplained hair loss.',
    },
    {
      q: 'What is the difference between dandruff and dry scalp?',
      a: 'Dandruff is typically associated with excess oil production, Malassezia yeast overgrowth, and larger, greasy yellow or white flakes on an irritated base. Dry scalp is caused by a lack of moisture and lipids, presenting as fine, small, dry white flakes with a feeling of scalp tightness.',
    },
    {
      q: 'Can scalp problems be prevented?',
      a: 'While genetic or autoimmune conditions like scalp psoriasis cannot be completely prevented, flare-ups can be significantly reduced through gentle hair hygiene, avoiding irritating chemical dyes, using appropriate non-stripping shampoos, and seeking timely medical care when early symptoms appear.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Scalp Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Scalp Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Scalp Health Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Scalp Treatment"
        subtitle="Clinical evaluation and evidence-grounded consultations for patients in Ponnani, Edappal, and Malappuram district dealing with persistent dandruff, scalp itching, flaking, dryness, oiliness, and recurring irritation."
        metrics={[
          { label: 'Condition Focus', value: 'Scalp & Follicle Health' },
          { label: 'Clinical Assessment', value: 'History & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Scalp Health Triage & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential scalp assessments, chronic dermatological reviews, lifestyle guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            A healthy scalp is essential for maintaining healthy hair and overall skin comfort. However, scalp-related problems such as dandruff, itching, dryness, excessive oiliness, redness, irritation and flaking can affect people of different age groups. These conditions may develop due to several factors, including skin disorders, fungal infections, allergies, environmental conditions and lifestyle habits.
          </p>
          <p>
            Persistent scalp problems can cause discomfort and may sometimes affect hair growth or contribute to hair breakage. Although some scalp conditions are mild, others require proper medical diagnosis and treatment.
          </p>
          <p>
            If you are searching for a <strong>Homoeopathic Clinic in Ponnani for Scalp Treatment</strong>, choosing a qualified healthcare professional who understands your symptoms and medical history is an important first step. A detailed consultation can help identify possible causes and determine whether further examination or specialist care is necessary.
          </p>
          <p>
            Our clinic provides an opportunity for individuals to discuss their scalp and hair-related concerns through a personalised consultation. We focus on understanding individual symptoms, health history and lifestyle factors while encouraging appropriate medical evaluation and realistic expectations about treatment.
          </p>
        </div>
      </section>

      {/* Key Takeaways Section (8 Points) */}
      <section className="py-12 bg-[#F1F5F9]/70 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Key Takeaways: Scalp Health in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking scalp and dandruff care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#D8E1F5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-heading font-bold text-[#1E2559] text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Common Scalp Problems */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              ANATOMY &amp; PATHOPHYSIOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Understanding Common Scalp Problems
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              The scalp contains approximately 100,000 hair follicles alongside an exceptionally rich network of sebaceous glands and blood vessels. Its physiological health is constantly influenced by internal systemic factors (hormones, immune activity, stress) and external exposures (water quality, humidity, chemical cosmetics, fungi). When the scalp barrier becomes irritated or inflamed, uncomfortable symptoms quickly emerge.
            </p>
            <p>
              People searching for <strong>Scalp Treatment in Ponnani</strong> may experience one or more of the following clinical concerns:
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              Common Scalp Symptoms Evaluated:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Persistent dandruff and visible white or yellow flakes.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Dryness, tight sensations and lack of scalp moisture.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Excessive oiliness, greasy build-up and clogged pores.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Itching, tingling, burning and chronic irritation.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Redness, follicular erythema and local inflammation.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Thickened, indurated, or adherent scaly patches.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Small tender bumps, folliculitis pustules or crusting sores.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Scalp sensitivity, soreness and pain upon brushing.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Hair breakage near the roots or increased shedding during washes.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              These symptoms can occur due to vastly different medical conditions. For example, ordinary dandruff and scalp psoriasis both cause flaking, but require completely different therapeutic management. Identifying the actual underlying cause is therefore vital before starting any treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Common Types of Scalp Conditions (6 Cards) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL SUBTYPES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Types of Scalp Conditions
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Recognizing the differences between scalp conditions ensures appropriate, evidence-based care and avoids worsening irritation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scalpConditions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white font-bold text-xs flex items-center justify-center">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-[#1E2559] text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>

                <p className="text-xs italic text-[#64748B] flex items-start gap-1.5 pt-3 border-t border-[#EEF2FB]">
                  <Info className="w-3.5 h-3.5 text-[#303A88] flex-shrink-0 mt-0.5" />
                  <span>{item.clinicalDetails}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homoeopathic Scalp Treatment in Ponnani (Evidence & Disclosure) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Scalp Treatment in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People searching for <strong>Homoeopathic Scalp Treatment in Ponnani</strong> may be interested in discussing recurring scalp concerns through an individual consultation.
            </p>
            <p>
              Homoeopathy is a system of complementary medicine that uses highly diluted preparations selected according to an individual's reported symptoms and health history. A consultation may involve questions about scalp irritation, dandruff, dryness, itching, general health and previous treatments.
            </p>
          </div>

          {/* Critical Evidence Disclosure Notice */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure &amp; Patient Safety Notice
                </h4>
                <p>
                  However, it is important to understand the scientific limitations of homoeopathy. <strong>There is insufficient reliable clinical evidence that homoeopathic medicines can effectively cure dandruff, psoriasis, fungal infections, seborrhoeic dermatitis or other scalp disorders</strong>.
                </p>
                <p className="font-semibold text-amber-950">
                  Homoeopathy should NOT replace established medical treatment, particularly when an active fungal infection, severe inflammatory skin condition or significant hair loss is suspected. A responsible approach to scalp health involves identifying the underlying condition, discussing evidence-based treatment options and seeking specialist evaluation when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consult a Scalp Doctor in Ponnani? */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DIFFERENTIAL ASSESSMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Why Consult a Scalp Doctor in Ponnani?
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Scalp symptoms can appear deceptively similar even when their biological origins are completely different. For example, common dandruff, flexural scalp psoriasis, and tinea capitis fungal infections all produce itching and visible scaling.
            </p>
            <p>
              Consulting a qualified <strong>Scalp Doctor in Ponnani</strong> helps determine whether your symptoms require physical examination, laboratory testing, or referral to a dermatologist:
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#303A88]" />
              Factors Evaluated During a Clinical Scalp Assessment:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>When the scalp problem first appeared and how rapidly it progressed.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether itching is mild, intermittent, or severe enough to disrupt sleep.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>The amount, texture, and colour of scalp flakes (powdery vs greasy).</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether the scalp feels predominantly oily or excessively dry and tight.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Any redness, follicular swelling, heat, or localized tender spots.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Hair shedding, breakage near roots, or circular patchy bald spots.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Previous scalp treatments tried, medicated washes, and response.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Recent changes in hair dye, shampoo, bleach, or cosmetic products.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Depending on symptoms, a dermatologist may perform a dermoscopic evaluation (trichoscopy), potassium hydroxide (KOH) skin scraping for fungal elements, or bacterial culture.
            </p>
          </div>
        </div>
      </section>

      {/* Scalp Homoeopathy Clinic in Ponnani: What to Expect (5 Steps) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CONSULTATION WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Scalp Homoeopathy Clinic in Ponnani: What to Expect
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            If you are considering a <strong>Scalp Homoeopathy Clinic in Ponnani</strong>, understanding the 5-step clinical workflow helps you prepare:
          </p>

          <div className="space-y-4">
            {consultationSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]"
              >
                <div className="w-10 h-10 rounded-full bg-[#303A88] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Evidence-Based Treatment Options */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              EVIDENCE-BASED OPTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Scalp Problem Treatment in Ponnani: Available Options
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              The right scalp treatment depends entirely on the underlying diagnosis. A treatment suitable for simple dandruff may be ineffective or harmful for scalp psoriasis or fungal ringworm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceTreatments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FB] border border-[#D8E1F5] flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-2">
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

      {/* Hair and Scalp Treatment in Ponnani (Biological Connection) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              FOLLICULAR ENVIRONMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair and Scalp Treatment in Ponnani
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair and scalp health are biologically inseparable. A healthy, well-hydrated, uninflamed scalp provides the micro-environment in which hair follicles thrive, whereas chronic inflammatory scalp disorders can weaken hair anchorage and trigger hair breakage or shedding.
          </p>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-[#303A88]" />
              Common Hair &amp; Scalp Overlaps Evaluated:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Dandruff accompanied by persistent itching and scratching-induced breakage.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Hair thinning aggravated by chronic seborrhoeic inflammation.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Scalp psoriasis with thick scaling matting hair strands together.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Fungal infections associated with localized patches of broken hairs.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Excessive sebum oxidation leading to unpleasant scalp odour and itching.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Folliculitis with tender pustules around hair follicle openings.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Not every scalp condition causes permanent hair loss. However, fungal infections and scarring inflammatory disorders can permanently destroy hair follicles if medical treatment is delayed. If you notice sudden, patchy, or unexplained hair loss, seek medical assessment rather than relying on cosmetic oils.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Care Tips for Scalp Issues (7 Practices) */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DAILY PROTOCOLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Scalp Issues Treatment in Ponnani: Daily Care Tips
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A consistent scalp care routine supports comfort and reduces flare-up frequency. Incorporate these evidence-grounded habits:
          </p>

          <div className="space-y-3">
            {dailyCareTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#D8E1F5] shadow-sm"
              >
                <h3 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#303A88]" />
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homoeopathic Doctor for Scalp Problems in Ponnani */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PRACTITIONER GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Doctor for Scalp Problems in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People searching for a <strong>Homoeopathic Doctor for Scalp Problems in Ponnani</strong> may want to discuss their symptoms and explore complementary healthcare options in a supportive environment.
            </p>
            <p>
              A patient-focused consultation involves understanding individual concerns, reviewing relevant medical and product history, and explaining suitable next steps.
            </p>
            <p className="bg-[#F8FAFD] p-4 rounded-xl border border-[#D8E1F5] font-medium text-[#1E2559]">
              It is vital to recognise when scalp symptoms need conventional dermatological treatment. Conditions such as fungal infections, severe scalp psoriasis, bacterial folliculitis, and scarring alopecias require specific medical therapies. Patients should never discontinue prescribed medicines or delay specialist care in the hope that homoeopathy will resolve the condition alone.
            </p>
            <p>
              Clear communication, realistic expectations, and prompt specialist referrals are fundamental principles of responsible clinical healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* When Should You Visit a Scalp Specialist in Ponnani? (Warning Signs) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              EMERGENCY &amp; SPECIALIST TRIAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              When Should You Visit a Scalp Specialist in Ponnani?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            While mild temporary flaking can often be managed with OTC care, certain red-flag symptoms require immediate medical attention from a qualified dermatologist:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Severe, persistent scalp itching that disrupts sleep or daily focus.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Thick, recurring scales or indurated plaques covering large scalp areas.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Painful bumps, tender swelling, or localized heat on the scalp.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Pus, yellow crusting, oozing sores, or signs of secondary bacterial infection.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Sudden or rapidly spreading coin-shaped patchy hair loss (alopecia or tinea).</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Scalp redness or swelling that spreads rapidly across the forehead or neck.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Symptoms that fail to improve after 2 to 3 weeks of medicated shampoo use.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Hair loss associated with skin scarring or permanently closed follicular pores.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
            <strong>Urgent Medical Alert:</strong> Seek emergency hospital or dermatologist care immediately if you develop high fever, severe scalp pain, rapidly spreading facial swelling, or a boggy, pus-filled scalp lesion (kerion).
          </div>
        </div>
      </section>

      {/* Choosing the Right Scalp Health Clinic in Ponnani (7 Criteria) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Choosing the Right Scalp Health Clinic in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Selecting an appropriate scalp care clinic involves verifying qualifications, diagnosis methodology, and referral ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectionCriteria.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#D8E1F5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2 py-0.5 rounded">
                      {item.num}
                    </span>
                    <h3 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (All 10 FAQs in Interactive Accordion) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DOCTOR Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Scalp Treatment Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear, transparent clinical answers to common patient questions regarding dandruff, itching, fungal infections, and scalp care.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] rounded-xl border border-[#D8E1F5] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-[#1E2559]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#D8E1F5] bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book a Scalp Consultation in Ponnani (Closing CTA & Booking Engine) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Book a Scalp Consultation in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Persistent scalp problems can affect everyday comfort and may sometimes influence hair health and confidence. Whether you experience dandruff, dryness, itching, irritation or recurring scalp inflammation, understanding the underlying cause is an important first step.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Whether you are looking for a <strong>Homoeopathic Doctor for Scalp Problems in Ponnani</strong>, exploring complementary healthcare or seeking guidance for recurring scalp concerns, make informed decisions with the support of qualified healthcare professionals.
            </p>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#F8FAFD] p-4 rounded-xl border border-[#D8E1F5] text-center">
              <MapPin className="w-5 h-5 text-[#303A88] mx-auto mb-2" />
              <h4 className="font-bold text-xs uppercase text-[#1E2559] mb-1 font-sans">Clinic Location</h4>
              <p className="text-xs text-[#475569]">
                Kuttippuram &amp; Puthanathani<br />
                <span className="text-[#303A88] font-medium">(15–20 min from Ponnani)</span>
              </p>
            </div>
            <div className="bg-[#F8FAFD] p-4 rounded-xl border border-[#D8E1F5] text-center">
              <Phone className="w-5 h-5 text-[#303A88] mx-auto mb-2" />
              <h4 className="font-bold text-xs uppercase text-[#1E2559] mb-1 font-sans">Phone Enquiries</h4>
              <p className="text-xs text-[#475569]">
                <a href={`tel:${phonePrimary}`} className="text-[#303A88] hover:underline font-medium">
                  {phonePrimary}
                </a>{' '}
                /{' '}
                <a href={`tel:${phoneSecondary.replace(/\s+/g, '')}`} className="text-[#303A88] hover:underline font-medium">
                  {phoneSecondary}
                </a>
              </p>
            </div>
            <div className="bg-[#F8FAFD] p-4 rounded-xl border border-[#D8E1F5] text-center">
              <MessageCircle className="w-5 h-5 text-[#45AC4B] mx-auto mb-2" />
              <h4 className="font-bold text-xs uppercase text-[#1E2559] mb-1 font-sans">WhatsApp Booking</h4>
              <p className="text-xs text-[#475569]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#45AC4B] hover:underline font-semibold"
                >
                  Chat with Clinic (+91 89211 80408)
                </a>
              </p>
            </div>
          </div>

          {/* Integrated Appointment Booking Engine */}
          <div className="bg-[#F8FAFD] p-6 sm:p-8 rounded-2xl border border-[#D8E1F5] shadow-sm">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1E2559] mb-2 text-center">
              Schedule Your In-Person or Video Consultation
            </h3>
            <p className="text-xs sm:text-sm text-center text-[#475569] mb-6">
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated time slot for scalp triage and evaluation.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="scalp-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Scalp Care & Dandruff"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
