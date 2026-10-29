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
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Lock,
  Sun,
  Activity,
  Droplets,
  Heart,
  Check,
  Flame,
  Sparkle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AcneManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Acne & Skin Problems (Manjeri patient guide).'
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
    navigateToBookingWithReason('Acne & Skin Problems Consultation - Manjeri', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const keyTakeaways = [
    {
      title: 'Common Inflammatory Condition',
      desc: 'Acne is a common inflammatory skin disorder of the pilosebaceous units affecting teenagers, young adults, and mature adults.',
    },
    {
      title: 'Diverse Clinical Lesions',
      desc: 'Comedones (blackheads and whiteheads), erythematous papules, pustules, and deep painful nodules are common acne manifestations.',
    },
    {
      title: 'Multifactorial Drivers',
      desc: 'Hormonal fluctuations, excess sebum production, follicular hyperkeratinisation, genetics, and comedogenic skincare trigger breakouts.',
    },
    {
      title: 'Early Scar Prevention',
      desc: 'Early, appropriate clinical care reduces dermal inflammation and significantly lowers the permanent risk of pitted acne scarring and hyperpigmentation.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'Reliable scientific clinical evidence does not establish homeopathy as an effective treatment or cure for chronic acne or hormonal breakouts.',
    },
    {
      title: 'Evidence-Based Modalities',
      desc: 'Proven acne therapies include topical benzoyl peroxide, retinoids, azelaic acid, and systemic medications selected based on clinical severity.',
    },
    {
      title: 'Zero Squeezing Discipline',
      desc: 'Avoid picking, squeezing, or popping pimples, which forces follicular rupture into deeper dermis, worsening inflammation and scarring.',
    },
    {
      title: 'Qualified Medical Assessment',
      desc: 'Persistent, painful, cystic, or scarring breakouts should always be assessed by a qualified medical professional or dermatologist.',
    },
  ];

  const commonCauses = [
    {
      title: '1. Hormonal Changes & Androgen Surges',
      desc: 'Hormonal shifts during puberty stimulate sebaceous gland hypertrophy and excess sebum production. In adults, cyclical hormonal fluctuations during menstrual cycles, pregnancy, perimenopause, or endocrine conditions like PCOS can drive persistent jawline and chin breakouts.',
      tip: 'When adult acne occurs alongside irregular periods, hirsutism, or rapid weight changes, comprehensive hormonal evaluation is advised.',
    },
    {
      title: '2. Excess Oil (Sebum) Production',
      desc: 'The sebaceous glands produce sebum to lubricate and protect the epidermal barrier. Under hormonal and environmental influence, excess sebum alters follicular microenvironments, creating an ideal breeding ground for Cutibacterium acnes.',
      tip: 'Do not attempt to strip oil with harsh alcohol astringents; over-drying prompts reactive rebound hyperseborrhoea.',
    },
    {
      title: '3. Follicular Hyperkeratinisation (Blocked Pores)',
      desc: 'Abnormal shedding of dead skin cells (corneocytes) inside the pilosebaceous duct leads to cellular clumping. Combined with thick sebum, it creates an obstructive plug that forms open comedones (blackheads) or closed comedones (whiteheads).',
      tip: 'Use non-comedogenic, oil-free moisturizers and gentle keratolytic cleansers to prevent pore occlusion.',
    },
    {
      title: '4. Genetic Predisposition & Family History',
      desc: 'Genetics strongly influence sebaceous gland sensitivity to androgens, sebum composition, and innate follicular inflammatory response thresholds. A family history of severe nodulocystic acne increases susceptibility.',
      tip: 'Early intervention in individuals with family histories of severe acne helps prevent permanent scarring.',
    },
    {
      title: '5. Stress & Modern Lifestyle Factors',
      desc: 'Psychological stress triggers the release of corticotropin-releasing hormone (CRH) and neuroendocrine mediators that stimulate sebaceous activity. Disrupted sleep patterns, high glycemic-index diets, and friction from tight collars or helmets further exacerbate breakouts.',
      tip: 'Prioritise restorative sleep, moderate low-glycemic nutrition, and avoid repetitive mechanical friction across acne-prone skin.',
    },
    {
      title: '6. Medicines & Exogenous Factors',
      desc: 'Certain prescription medications—including systemic corticosteroids, lithium, anticonvulsants, and high-dose vitamin B12—can induce drug-induced acneiform eruptions. Heavy cosmetic oils and pomades can also cause cosmetic acne.',
      tip: 'Sudden, widespread, monomorphic eruptions warrant a thorough medication audit by your healthcare provider.',
    },
  ];

  const whenToSeekHelp = [
    'Deep, painful, inflamed pimples, cysts, or subcutaneous nodules',
    'Acne breakouts that are rapidly spreading or becoming increasingly inflamed',
    'Visible depressions, pitted scars, or persistent dark marks (post-inflammatory hyperpigmentation)',
    'Acne that fails to improve after 6 to 8 weeks of appropriate over-the-counter care',
    'Sudden onset of severe, refractory acne in adulthood',
    'Severe skin redness, peeling, or burning caused by unguided skincare combinations',
    'Significant emotional distress, social withdrawal, or reduced self-confidence due to skin appearance',
  ];

  const everydaySkinTips = [
    {
      step: '01',
      title: 'Cleanse Gently Twice Daily',
      desc: 'Wash the face with a mild, pH-balanced cleanser twice daily and after heavy perspiration. Avoid vigorous scrubbing with loofahs or rough brushes that damage the skin barrier.',
    },
    {
      step: '02',
      title: 'Choose Non-Comedogenic Moisturisers',
      desc: 'Select hydrating, oil-free lotions labelled non-comedogenic. Hydrated skin maintains proper barrier function and better tolerates active acne treatments.',
    },
    {
      step: '03',
      title: 'Strictly Avoid Picking or Popping',
      desc: 'Squeezing spots forces bacteria deeper into dermal layers, dramatically increases local tissue damage, and significantly raises the likelihood of permanent scarring.',
    },
    {
      step: '04',
      title: 'Protect Skin with Broad-Spectrum Sunscreen',
      desc: 'Apply a lightweight, non-comedogenic sunscreen daily. UV exposure darkens post-inflammatory hyperpigmentation and interacts with photosensitising acne treatments.',
    },
    {
      step: '05',
      title: 'Introduce Active Products Carefully',
      desc: 'Evidence-based topical actives like benzoyl peroxide or retinoids should be introduced gradually to minimize peeling. Consult a doctor for pregnancy safety precautions.',
    },
    {
      step: '06',
      title: 'Exercise Patience & Consistency',
      desc: 'True cellular turnover takes time. Most evidence-based acne regimens require 8 to 12 weeks of consistent application before visible, sustained improvement emerges.',
    },
  ];

  const faqs = [
    {
      question: '1. What causes acne?',
      answer:
        'Acne develops when hair follicles (pores) become clogged with a mixture of excess sebum (oil) and dead skin cells. Hormonal fluctuations, genetics, cutaneous bacterial activity (Cutibacterium acnes), localized inflammation, and certain medications or comedogenic skincare products all contribute to breakouts.',
    },
    {
      question: '2. Where can I seek Acne Treatment in Manjeri?',
      answer:
        'You can consult a qualified healthcare professional in Manjeri for an in-depth clinical assessment and diagnostic guidance. A qualified dermatologist or physician is particularly recommended for persistent, severe, nodulocystic, or scarring acne to establish an evidence-based management plan.',
    },
    {
      question: '3. Is Homeopathic Acne Treatment in Manjeri scientifically proven?',
      answer:
        'No. Reliable scientific clinical evidence has not established homeopathy as an effective medical treatment or cure for acne. Patients are advised to explore evidence-based therapies—such as topical benzoyl peroxide, retinoids, azelaic acid, or systemic medications—under qualified medical supervision.',
    },
    {
      question: '4. Can pimples leave permanent scars?',
      answer:
        'Yes. Deep, highly inflamed pimples, nodules, and cysts can destroy dermal collagen, leaving behind permanent pitted, ice-pick, boxcar, or hypertrophic scars, as well as prolonged post-inflammatory hyperpigmentation. Early, appropriate medical treatment is vital to minimise scarring.',
    },
    {
      question: '5. How long does acne treatment take to work?',
      answer:
        'Most evidence-based acne treatments require between 6 to 12 weeks of daily, consistent application to demonstrate noticeable clinical improvement. Acne does not resolve overnight, and patience with a prescribed therapeutic regimen is essential.',
    },
    {
      question: '6. Should I squeeze pimples?',
      answer:
        'No. Squeezing or picking pimples forces infectious material and sebum deeper into surrounding dermal tissue. This amplifies localized inflammation, prolongs healing time, and dramatically increases the risk of permanent pitted scars and bacterial superinfection.',
    },
    {
      question: '7. Can adults develop acne?',
      answer:
        'Yes. Adult-onset acne is common, particularly in women. It is frequently influenced by hormonal fluctuations, chronic stress, skincare products, or underlying endocrine disorders such as Polycystic Ovary Syndrome (PCOS). Persistent adult breakouts deserve comprehensive medical evaluation.',
    },
    {
      question: '8. When should I consult an Acne Doctor in Manjeri?',
      answer:
        'You should seek medical advice if your acne is painful, persistent, widespread across the chest/back, leaving visible dark marks or scars, or causing significant emotional distress. Sudden, atypical breakouts in adulthood also warrant clinical assessment.',
    },
    {
      question: '9. Is acne caused by poor hygiene?',
      answer:
        'Not usually. Acne is an internal inflammatory process driven by follicular biology, sebum chemistry, and hormones—not surface dirt. Over-washing, scrubbing aggressively, or using harsh astringents actually strips the epidermal barrier, causing irritation and worsening breakouts.',
    },
    {
      question: '10. Can homeopathy guarantee permanent acne removal?',
      answer:
        'No. Homeopathy has not been established as an effective acne treatment in scientific trials, and no reputable medical professional can guarantee permanent eradication of acne. Responsible healthcare focuses on accurate diagnosis, addressing root triggers, and preventing permanent scarring.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Acne Treatment in Manjeri"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Acne Treatment in Manjeri"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />}
        badgeText="Regional Clinical Acne Guide • Manjeri Patients"
        title="Homeopathic Treatment for Acne Skin Problems in Manjeri"
        subtitle="Individualized clinical guidance for teenagers and adults in Manjeri and Malappuram experiencing persistent acne breakouts, pimples, cystic spots, hormonal flare-ups, and post-acne scarring concerns."
        metrics={[
          { label: 'Condition Category', value: 'Pilosebaceous Acne' },
          { label: 'Evaluation Protocol', value: 'Lesion Typing & Hormones' },
          { label: 'Clinical Transparency', value: 'Evidence Grounded' },
        ]}
        doctorSubtitle="BHMS | Dermatological & Acne Consultations"
        doctorBio="10+ years of dedicated clinical experience assessing comedonal, papulopustular and hormonal acne, follicular sebum dysregulation, scar prevention, and evidence-guided constitutional support across Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#E11D48]/10 flex items-center justify-center text-[#E11D48]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Important Key Takeaways for Patients in Manjeri
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#E11D48]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#BE123C] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
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

      {/* Section 1: Understanding Acne and Common Skin Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Acne and Common Skin Problems
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Acne develops when hair follicles become blocked by oil and dead skin cells. Inflammation can then lead to different types of spots, ranging from small whiteheads to deeper, painful lumps. Acne most commonly affects the face but can also occur on the neck, chest, shoulders, and back.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 not-prose my-4">
              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#303A88] block mb-1">
                  Closed Comedones
                </span>
                <h4 className="font-bold text-[#1E2559] text-sm">Whiteheads</h4>
                <p className="text-xs text-[#64748B] mt-1">
                  Form when a pore becomes completely blocked and remains sealed beneath the skin surface.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#303A88] block mb-1">
                  Open Comedones
                </span>
                <h4 className="font-bold text-[#1E2559] text-sm">Blackheads</h4>
                <p className="text-xs text-[#64748B] mt-1">
                  Develop when a pore plug remains open to ambient air, causing melanin and lipid oxidation to turn dark.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48] block mb-1">
                  Inflammatory
                </span>
                <h4 className="font-bold text-[#1E2559] text-sm">Papules &amp; Pustules</h4>
                <p className="text-xs text-[#64748B] mt-1">
                  Small, tender red bumps (papules) or inflamed spots filled with visible pus (pustules).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5]">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                  Severe Dermal
                </span>
                <h4 className="font-bold text-[#1E2559] text-sm">Nodules &amp; Cysts</h4>
                <p className="text-xs text-[#64748B] mt-1">
                  Large, painful, deep-seated inflammatory lesions that carry a very high risk of permanent scar tissue.
                </p>
              </div>
            </div>

            <p>
              Acne is not caused simply by poor hygiene. Washing the face too aggressively or repeatedly using harsh scrubs may irritate the skin and make symptoms more uncomfortable. A gentle skincare routine, appropriate treatment, and professional guidance are generally more useful than excessive cleansing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Common Causes of Acne */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              PATHOPHYSIOLOGY &amp; TRIGGERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Causes of Acne
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Understanding the possible causes of acne can help people make informed decisions about their skincare and treatment:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {commonCauses.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2 hover:border-[#E11D48]/40 transition-all shadow-2xs"
              >
                <h3 className="font-bold text-[#1E2559] text-base sm:text-lg flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#E11D48]" />
                  <span>{cause.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cause.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#D8E1F5] text-xs text-[#BE123C] font-medium flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>{cause.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Acne Treatment in Manjeri: Why Proper Assessment Matters */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Acne Treatment in Manjeri: Why Proper Assessment Matters
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Acne Treatment in Manjeri</strong> may have mild comedonal acne, inflammatory pimples, deeper painful lesions, or acne that leaves dark marks and scars. These problems do not always respond to the same treatment.
            </p>

            <p>
              A healthcare professional can assess the appearance and distribution of the lesions, how long the problem has been present, previous treatments, and any associated symptoms. Depending on the presentation, the professional may recommend an appropriate skincare routine, topical medicines, oral medicines, or referral to a dermatologist.
            </p>

            <p>
              Treatment choices depend on the person's age, acne severity, medical history, pregnancy considerations where relevant, and the risk of scarring. Improvement may take several weeks, so consistent use of the recommended treatment is often important.
            </p>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p>
                <strong>Critical Clinical Warning:</strong> Severe acne, painful nodules, and acne that is beginning to scar should not be left untreated while waiting for a home remedy or an unproven treatment to work. Prompt medical care helps protect healthy skin tissue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Homeopathic Acne Treatment in Manjeri: Understanding the Evidence */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              TREATMENT LANDSCAPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathic Acne Treatment in Manjeri: Understanding the Evidence
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Some people search for <strong>Homeopathic Acne Treatment in Manjeri</strong> because they prefer a personalised consultation or are interested in alternative approaches to managing skin problems.
            </p>

            <p>
              Homeopathy is a system of alternative medicine that uses highly diluted preparations. However, reliable scientific evidence has not established homeopathy as an effective treatment for acne. It should not be presented as a proven way to clear pimples, balance hormones, prevent acne scars, or permanently cure chronic acne.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Evidence Limitation Disclosure</span>
              </div>
              <p className="leading-relaxed">
                A person considering <strong>Acne Homeopathic Treatment in Manjeri</strong> should understand this evidence limitation before making a treatment decision. Consultation should not replace an appropriate medical assessment, particularly when acne is painful, widespread, persistent, or leaving scars.
              </p>
            </div>

            <p>
              People who choose to consult a homeopathic practitioner should also discuss any ongoing acne medicines with their qualified healthcare professional. They should not stop prescribed treatments or delay evidence-based care because of unsupported promises.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Homeopathic Doctor for Acne in Manjeri: What to Consider */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PRACTITIONER STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathic Doctor for Acne in Manjeri: What to Consider
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for a <strong>Homeopathic Doctor for Acne in Manjeri</strong> may want to discuss their skin concerns, previous treatment experiences, and questions about available options.
            </p>

            <p>
              When choosing a practitioner, consider their qualifications, professional registration where applicable, transparency about treatment limitations, and willingness to recommend medical assessment when needed.
            </p>

            <p>
              A responsible consultation should include a discussion of the symptoms, how long acne has been present, the severity of breakouts, previous medicines, allergies, and any other relevant health concerns. If the presentation suggests a condition other than acne, further assessment may be necessary.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#1E2559] font-medium leading-relaxed">
              Although some individuals search for <strong>Homeopathic Skin Treatment in Manjeri</strong>, it is important to distinguish a consultation service from a treatment whose effectiveness has been scientifically established. Patients deserve clear information about the evidence, potential risks, and available alternatives.
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Acne Clinic in Manjeri: When Should You Seek Help? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-rose-700 block">
              WHEN TO CONSULT A SPECIALIST
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Acne Clinic in Manjeri: When Should You Seek Help?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Searching for an <strong>Acne Clinic in Manjeri</strong> can be a starting point for finding professional guidance. Medical assessment is especially important if you experience:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {whenToSeekHelp.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] text-xs sm:text-sm text-[#0369A1] leading-relaxed flex items-start gap-3 mt-4">
            <Info className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
            <p>
              People searching for an <strong>Acne Specialist in Manjeri</strong> should look for a professional whose qualifications and scope of practice are appropriate to their needs. A dermatologist may be particularly helpful for severe acne, diagnostic uncertainty, or acne that is causing scarring. Persistent acne sometimes requires prescription treatment rather than skincare changes alone.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Pimples Treatment in Manjeri: Everyday Skin Care Tips */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#45AC4B] block">
              SUPPORTIVE PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Pimples Treatment in Manjeri: Everyday Skin Care Tips
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Alongside appropriate medical treatment, a gentle skincare routine can help reduce irritation and support the skin barrier:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {everydaySkinTips.map((tip) => (
              <div
                key={tip.step}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] font-bold text-xs flex items-center justify-center mb-3">
                    {tip.step}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Skin Problems Treatment in Manjeri: Is Every Pimple Acne? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DIFFERENTIAL DIAGNOSIS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Skin Problems Treatment in Manjeri: Is Every Pimple Acne?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Not every bump or rash is caused by acne. Folliculitis, rosacea, contact dermatitis, and other skin conditions can sometimes resemble acne but require different management.
            </p>

            <p>
              If the bumps are unusually itchy, appear suddenly, or occur alongside a rash or swelling, a professional assessment can help clarify the diagnosis. Self-treating every skin eruption as acne may delay appropriate care.
            </p>

            <p>
              People searching for <strong>Skin Problems Treatment in Manjeri</strong> should therefore consider the nature of the symptoms rather than relying only on the appearance of a few spots. Correct identification of the condition is an important part of choosing suitable treatment.
            </p>

            <div className="pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2559] mb-2">
                Skin Homeopathy Clinic in Manjeri: Making an Informed Choice
              </h3>
              <p>
                People looking for a <strong>Skin Homeopathy Clinic in Manjeri</strong> may want to discuss acne alongside other skin complaints. When considering any clinic, check the practitioner's qualifications and ensure that information about treatment benefits is transparent and evidence-based.
              </p>
              <p>
                Homeopathy has not been established as an effective acne treatment. A consultation should not include guarantees of permanent acne removal, claims that all acne originates from internal toxins, or advice to discontinue prescribed medicines without consulting the prescriber.
              </p>
              <p className="font-medium text-[#1E2559]">
                For patients with ongoing acne, the priority should be an accurate diagnosis, appropriate treatment, and a plan to reduce the risk of scarring. A qualified healthcare professional can explain the available options and help determine whether referral to a dermatologist is appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (10 FAQs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Acne Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Reliable, evidence-grounded answers to help patients make informed decisions about acne and skin health.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#D8E1F5] overflow-hidden bg-[#F8FAFD] transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#EEF2FB]/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1E2559]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#D8E1F5]/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Engine Section */}
      <section id="booking-section" className="py-16 bg-[#FFF1F2] border-b border-[#FFE4E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Acne &amp; Skin Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Confidential online video visits or in-clinic consultations at our Kuttippuram and Puthanathani branches.
            </p>
          </div>

          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Related Regional Clinic Guides & Other Pages */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
                SPECIALIZED HEALTHCARE GUIDES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Explore Other Regional Patient Guides in Manjeri
              </h3>
            </div>
            <p className="text-xs text-[#64748B]">
              Comprehensive guides on common health concerns across Malappuram
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            <button
              onClick={() => {
                setCurrentView('skin-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#F59E0B] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#F59E0B] transition-colors">
                  Skin Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Acne, eczema, psoriasis, fungal rashes, and dermatological care guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#F59E0B] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('hair-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#0D9488] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#0D9488] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#0D9488] transition-colors">
                  Hair Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Hair fall causes, thinning, scalp health, and evidence-based care guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0D9488] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('allergic-rhinitis-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#0284C7] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#0284C7] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#0284C7] transition-colors">
                  Allergic Rhinitis in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Sneezing, nasal triggers, congestion, and evidence-informed allergy guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0284C7] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('menstrual-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#E11D48] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#E11D48] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#E11D48] transition-colors">
                  Menstrual Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Period pain, irregular cycles, heavy flow, PMS, and women's health.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#E11D48] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Conclusion & Clinic Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] via-[#2A1D38] to-[#1E2559] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#FECDD3]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Conclusion &amp; Next Steps Towards Clearer Skin
          </h2>

          <div className="text-sm sm:text-base text-[#D3DBF4] max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Acne can affect people of different ages and may range from occasional pimples to persistent inflammatory lesions that leave scars. Understanding its causes, recognising the symptoms, and seeking appropriate professional guidance can help people make informed decisions about their skin health.
            </p>
            <p>
              If you are researching <strong>Homeopathic Treatment for Acne Skin Problems in Manjeri</strong>, take time to understand the available options and the scientific evidence behind them. Although terms such as <strong>Acne Homeopathic Treatment in Manjeri</strong>, <strong>Homeopathic Acne Treatment in Manjeri</strong>, and <strong>Pimples Treatment in Manjeri</strong> may be useful when searching for local services, they do not establish that a particular treatment is effective.
            </p>
            <p>
              Choose a qualified practitioner who communicates clearly about treatment limitations and supports appropriate medical assessment. For persistent, painful, or scarring acne, timely evidence-based care is especially important to help control breakouts and reduce the risk of lasting skin changes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E11D48]" />
              <span>Call Doctor Desk: {phonePrimary}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#45AC4B] text-white font-bold text-sm hover:bg-[#39933E] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {phoneWhatsApp}</span>
            </a>
          </div>

          {/* Regional Clinic Locations Info */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-xs text-[#CBD5E1]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                Kuttippuram Clinic
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571
              </p>
              <p className="mt-1 text-[#86EFAC] font-semibold">
                Ph: {phonePrimary} / {phoneSecondary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                Puthanathani Clinic
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Chembayil complex, opp. Thavakkal gold, Puthanathani, Kerala 676552
              </p>
              <p className="mt-1 text-[#86EFAC] font-semibold">
                Ph: 089211 80408
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Regional Guides Cross-Linking & Footer Notes */}
      <RegionalRelatedGuides currentGuideKey="acne-treatment-manjeri" />
    </div>
  );
};
