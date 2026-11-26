import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  ShieldAlert,
  Droplets,
  Sparkles,
  Clock,
  Shield,
  Info,
  Stethoscope,
  ClipboardList,
  UserCheck,
  Utensils,
  Moon,
  Scissors,
  Wind,
  Activity,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const HairPuthanathaniPage: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details (Puthanathani primary + Kuttippuram secondary)
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about a hair and scalp consultation at Anjali Homoeo Clinic in Puthanathani.'
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
    navigateToBookingWithReason('Hair & Scalp Health Consultation - Puthanathani', 'clinic');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 7 Key Takeaways
  const keyTakeaways = [
    {
      title: 'Multiple Contributing Causes',
      desc: 'Hair fall can have several causes, including genetics, hormonal changes, nutritional deficiencies, stress and scalp conditions.',
    },
    {
      title: 'Identify the Cause First',
      desc: 'Identifying the underlying cause is important before choosing a treatment.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'People considering Homoeopathic Hair Treatment in Puthanathani should understand that reliable scientific evidence supporting homeopathy for hair loss is lacking.',
    },
    {
      title: 'Dermatologist Assessment',
      desc: 'A dermatologist can assess persistent hair loss, scalp problems and unusual changes in hair growth.',
    },
    {
      title: 'Avoid Unverified Products',
      desc: 'Avoid self-medication and unverified hair-growth products.',
    },
    {
      title: 'Healthy Daily Habits',
      desc: 'Maintain a balanced diet, gentle hair-care routine and healthy scalp hygiene.',
    },
    {
      title: 'Prompt Medical Review',
      desc: 'Sudden, patchy or severe hair loss should be assessed by a qualified medical professional.',
    },
  ];

  // 5 Common Hair and Scalp Problems
  const commonHairProblems = [
    {
      number: '01',
      title: '1. Hair Fall',
      badge: 'Excessive Shedding',
      paragraphs: [
        'Hair shedding is a normal part of the hair growth cycle. However, excessive shedding may become noticeable during washing, brushing or styling.',
        'Possible contributing factors include physical or emotional stress, illness, hormonal changes, nutritional deficiencies, certain medications and changes in health.',
        'People searching for Hair Fall Treatment in Puthanathani should consider getting an assessment if hair shedding continues, becomes excessive or is accompanied by other symptoms.',
        'The appropriate approach depends on identifying the possible cause rather than relying only on cosmetic products or home remedies.',
      ],
      note: 'Identify the underlying cause of persistent shedding rather than relying only on cosmetic products or home remedies.',
    },
    {
      number: '02',
      title: '2. Hair Thinning',
      badge: 'Progressive Density Loss',
      paragraphs: [
        'Hair thinning refers to a gradual reduction in hair density. It may become noticeable around the crown, temples, hairline or other areas of the scalp.',
        'Genetic hair loss is a common cause, but hormonal conditions, nutritional problems and certain medical conditions may also contribute.',
        'If you notice progressive thinning, consult a qualified dermatologist. Early assessment may help identify the condition and discuss suitable evidence-based treatment options.',
      ],
      note: 'Consult a qualified dermatologist early when noticing progressive thinning around the crown, temples, or hairline.',
    },
    {
      number: '03',
      title: '3. Dandruff and Flaky Scalp',
      badge: 'Scalp Flaking & Dermatitis',
      paragraphs: [
        'Dandruff is a common scalp concern that may cause visible flakes and itching. It can be associated with scalp conditions such as seborrhoeic dermatitis.',
        'Symptoms may become more noticeable during certain weather conditions or when the scalp is irritated by unsuitable hair-care products.',
        'Persistent dandruff, redness or severe itching may require medical assessment to identify the underlying cause.',
      ],
      note: 'Persistent dandruff with redness or severe itching should be assessed medically to confirm the underlying scalp condition.',
    },
    {
      number: '04',
      title: '4. Itchy and Irritated Scalp',
      badge: 'Inflammatory & Allergic Scalp',
      paragraphs: [
        'Scalp itching can occur because of dryness, allergies, irritation, infections or inflammatory skin conditions.',
        'Using harsh shampoos, hair dyes or unsuitable products may worsen irritation in some people.',
        'Avoid repeatedly applying different products without understanding the cause. If itching continues or is accompanied by redness, pain, sores or hair loss, seek medical advice.',
      ],
      note: 'Seek medical advice if scalp itching continues or occurs alongside redness, pain, sores, or hair loss.',
    },
    {
      number: '05',
      title: '5. Patchy Hair Loss',
      badge: 'Focal Bald Patches',
      paragraphs: [
        'Patchy hair loss may occur due to conditions such as alopecia areata, fungal infections or other medical problems.',
        'Some causes require specific treatment. Sudden or clearly defined bald patches should be assessed by a dermatologist rather than treated through trial and error.',
      ],
      note: 'Sudden or clearly defined bald patches should be evaluated by a dermatologist rather than managed through trial and error.',
    },
  ];

  // 4 Consultation Expectations
  const consultationSteps = [
    {
      number: '01',
      title: '1. Discussion About Hair Fall and Scalp Symptoms',
      paragraphs: [
        'You may be asked when the hair problem started, whether it is continuous or occasional and which areas are affected.',
        'Information about hair thinning, excessive shedding, itching, dandruff and scalp irritation may help identify whether further medical assessment is needed.',
      ],
    },
    {
      number: '02',
      title: '2. Previous Medical History',
      paragraphs: [
        'Your medical history can provide useful information about possible contributing factors.',
        'Mention any existing medical conditions, recent illnesses, hormonal changes, previous scalp problems and medications you are taking.',
        'Do not stop prescribed medicines or change an existing treatment plan without consulting your treating doctor.',
      ],
    },
    {
      number: '03',
      title: '3. Lifestyle and Hair-Care Routine',
      paragraphs: [
        'Diet, sleep, stress, hair styling practices and the use of chemical treatments may be discussed.',
        'Frequent heat styling, tight hairstyles and harsh hair products can contribute to hair damage or breakage.',
        'Understanding these habits may help identify avoidable factors affecting hair condition.',
      ],
    },
    {
      number: '04',
      title: '4. Guidance on Further Assessment',
      paragraphs: [
        'Some hair problems require examination of the scalp, blood tests or other investigations.',
        'A responsible practitioner should explain when referral to a dermatologist or another qualified medical professional is necessary.',
      ],
    },
  ];

  // 6 Selection Factors for a Hair Health Clinic
  const clinicCriteria = [
    {
      number: '01',
      title: 'Qualified practitioner',
      desc: "Check the practitioner's recognised qualifications, registration and scope of practice.",
    },
    {
      number: '02',
      title: 'Patient-focused consultation',
      desc: 'Choose a healthcare provider who listens to your concerns and discusses your medical history.',
    },
    {
      number: '03',
      title: 'Clear information',
      desc: 'Treatment options, limitations, consultation fees and follow-up arrangements should be explained transparently.',
    },
    {
      number: '04',
      title: 'Responsible healthcare guidance',
      desc: 'The practitioner should recognise when hair loss requires specialist assessment.',
    },
    {
      number: '05',
      title: 'Patient privacy',
      desc: 'Your personal and medical information should be handled confidentially.',
    },
    {
      number: '06',
      title: 'No unrealistic promises',
      desc: 'Be cautious of claims guaranteeing complete hair regrowth or permanent solutions for every type of hair loss.',
    },
  ];

  // 7 Important Questions to Ask
  const importantQuestions = [
    'What qualifications and registration does the practitioner hold?',
    'What is the proposed approach to my hair concern?',
    'Is there reliable scientific evidence supporting the suggested treatment?',
    'Could the remedy interact with my existing medication?',
    'Should I consult a dermatologist before proceeding?',
    'Are any medical investigations recommended?',
    'What symptoms would require specialist attention?',
  ];

  // 7 Common Causes of Hair Loss
  const hairLossCauses = [
    {
      title: 'Genetic hair loss',
      desc: 'Often develops gradually and may affect the hairline or crown.',
    },
    {
      title: 'Telogen effluvium',
      desc: 'A form of increased hair shedding that may occur after illness, stress, childbirth or other physical changes.',
    },
    {
      title: 'Alopecia areata',
      desc: 'An autoimmune condition that can cause patchy hair loss.',
    },
    {
      title: 'Nutritional deficiencies',
      desc: 'Inadequate levels of certain nutrients may contribute to hair shedding.',
    },
    {
      title: 'Thyroid problems',
      desc: 'Some thyroid conditions can affect hair growth.',
    },
    {
      title: 'Scalp infections',
      desc: 'Certain fungal infections can cause scaling, inflammation and hair loss.',
    },
    {
      title: 'Hair damage',
      desc: 'Excessive heat, chemical treatments and tight hairstyles may contribute to breakage or traction-related hair loss.',
    },
  ];

  // 6 Simple Hair & Scalp Care Tips
  const hairCareTips = [
    {
      title: 'Use a Suitable Shampoo',
      desc: 'Choose a shampoo appropriate for your scalp and hair type. Avoid products that consistently cause dryness, itching or irritation.',
      icon: Droplets,
    },
    {
      title: 'Avoid Excessive Heat Styling',
      desc: 'Frequent use of hair dryers, straighteners and curling tools at high temperatures can damage hair strands. Use heat styling carefully and reduce unnecessary exposure.',
      icon: Wind,
    },
    {
      title: 'Avoid Tight Hairstyles',
      desc: 'Repeatedly wearing tight ponytails, braids or hairstyles that pull on the roots may contribute to traction-related hair loss. Choose comfortable hairstyles that do not place excessive tension on the scalp.',
      icon: Scissors,
    },
    {
      title: 'Maintain a Balanced Diet',
      desc: 'Hair health depends on overall nutrition. Include a variety of foods that provide protein, vitamins and minerals. Do not begin high-dose supplements without medical advice. Taking unnecessary supplements may cause harm, and supplements are useful mainly when a deficiency or specific need has been identified.',
      icon: Utensils,
    },
    {
      title: 'Manage Stress and Maintain Healthy Sleep Habits',
      desc: 'Stress and significant physical changes may affect the hair growth cycle in some people. Maintaining regular sleep, physical activity and healthy daily routines can support general well-being.',
      icon: Moon,
    },
    {
      title: 'Seek Medical Advice for Persistent Scalp Problems',
      desc: 'Persistent dandruff, itching, redness, pain or sores should not be ignored. Appropriate treatment depends on the underlying scalp condition.',
      icon: Activity,
    },
  ];

  // 8 Warning Signs to Seek Medical Advice
  const medicalAdviceSigns = [
    'Sudden or severe hair loss.',
    'Clearly defined bald patches.',
    'Rapidly increasing hair thinning.',
    'Scalp pain, swelling or persistent redness.',
    'Severe itching or scaling.',
    'Pus-filled sores or signs of infection.',
    'Hair loss along with unexplained changes in general health.',
    'Hair loss that continues or becomes progressively worse.',
  ];

  // 8 Frequently Asked Questions
  const faqs = [
    {
      q: '1. Where can I find a homoeopathic clinic in Puthanathani for hair treatment?',
      a: "You can search for local homoeopathic clinics in and around Puthanathani and verify their practitioner's qualifications, registration and available services. For persistent or unusual hair loss, consider consulting a qualified dermatologist.",
    },
    {
      q: '2. Is homoeopathy effective for hair fall?',
      a: 'There is insufficient reliable scientific evidence to establish homeopathy as an effective treatment for hair fall. It should not replace evidence-based medical assessment or proven hair-loss treatments.',
    },
    {
      q: '3. What causes excessive hair fall?',
      a: 'Excessive hair fall may be associated with genetics, hormonal changes, stress, illness, nutritional deficiencies, medications or scalp conditions. A medical assessment can help identify the possible cause.',
    },
    {
      q: '4. Which doctor should I consult for hair loss?',
      a: 'A dermatologist is an appropriate medical specialist for evaluating hair loss and scalp conditions. They can examine your symptoms and recommend investigations or evidence-based treatment options.',
    },
    {
      q: '5. Can dandruff cause hair loss?',
      a: 'Dandruff itself does not usually cause permanent hair loss. However, severe scalp inflammation, scratching or an associated scalp condition may contribute to temporary hair shedding or breakage.',
    },
    {
      q: '6. What should I do about sudden hair loss?',
      a: 'Sudden hair loss should be assessed by a qualified medical professional. The cause may involve an underlying medical condition, infection or another factor that requires appropriate investigation.',
    },
    {
      q: '7. Are hair-growth supplements necessary?',
      a: 'Not everyone needs hair-growth supplements. Supplements may be useful when a specific deficiency has been identified, but unnecessary or excessive supplementation can be harmful. Seek medical advice before taking them.',
    },
    {
      q: '8. How can I maintain a healthy scalp?',
      a: 'Use suitable hair-care products, avoid excessive heat and tight hairstyles, maintain a balanced diet and seek medical advice for persistent itching, scaling or irritation.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Hair Treatment Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Puthanathani for Hair Treatment"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Sparkles className="w-4 h-4 text-emerald-400" />}
        badgeText="HAIR & SCALP CONSULTATION GUIDE • PUTHANATHANI"
        title="Homoeopathic Clinic in Puthanathani for Hair Treatment"
        subtitle="A practical patient guide covering common hair and scalp problems (hair fall, thinning, dandruff, scalp irritation, and patchy hair loss), what to expect during a consultation, everyday care habits, warning signs, and evidence-aware healthcare choices in Puthanathani."
        metrics={[
          { label: 'Puthanathani Branch', value: 'Kurumbathur, Malappuram' },
          { label: 'Second Branch', value: 'Kuttippuram Clinic' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
        ]}
        doctorSubtitle="BHMS Homoeopathic Practitioner • Hair & Scalp Consultations"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) conducts attentive hair and scalp consultations at Anjali Homoeo Clinic in Puthanathani (Chembayil Complex, opp. Thavakkal Gold) and Kuttippuram—reviewing shedding patterns, medical history, and guiding timely dermatologist evaluation when needed."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
        {/* Intro Context Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Healthy hair is often associated with personal appearance and confidence. However, hair fall, thinning, dandruff, scalp irritation and other hair-related concerns can affect people of different ages. Factors such as genetics, hormonal changes, nutritional deficiencies, stress, scalp conditions and certain medical problems may contribute to changes in hair growth and health.
            </p>
            <p>
              If you are searching for a <strong>Homoeopathic Clinic in Puthanathani for Hair Treatment</strong>, understanding the possible causes of your hair concern is an important first step. Choosing a healthcare provider who listens to your symptoms, reviews your medical history and provides clear guidance can help you make informed decisions about your hair health.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                People exploring <strong>Hair Treatment in Puthanathani</strong> may consider different healthcare approaches, including consultations with dermatologists and complementary healthcare practitioners. However, it is important to understand that homeopathy has not been reliably demonstrated to treat hair loss or other hair conditions. It should not replace evidence-based medical assessment or delay appropriate treatment.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This page explains common hair and scalp problems, what to consider when looking for a hair consultation, everyday hair-care practices and how to make responsible healthcare decisions.
            </p>
          </div>
        </section>

        {/* 7 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Essential Patient Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Core facts on hair fall causes, scientific evidence, specialist assessment, and healthy scalp care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Common Hair and Scalp Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Hair &amp; Scalp Concerns
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Understanding Common Hair and Scalp Problems
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Hair growth is a natural biological process influenced by genetics, hormones, nutrition, health conditions and environmental factors. Some hair shedding is normal, but excessive or unusual hair loss may indicate an underlying concern.
            </p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Understanding the type of hair problem can help determine whether further medical assessment is necessary.
            </p>
          </div>

          <div className="space-y-6">
            {commonHairProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {prob.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{prob.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {prob.title}
                </h3>
                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  {prob.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
                <div className="p-3.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clinical Note:</strong> {prob.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Homoeopathic Hair Treatment in Puthanathani: What Should You Know? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Evidence &amp; Limitations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homoeopathic Hair Treatment in Puthanathani: What Should You Know?
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              People looking for <strong>Homoeopathic Hair Treatment in Puthanathani</strong> may have questions about homeopathic consultations and whether this approach can help with hair fall, thinning or scalp concerns.
            </p>
            <p>
              Homeopathy is a complementary system of healthcare based on principles such as treating conditions with substances believed to produce similar symptoms and using highly diluted preparations.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2">
              <h3 className="font-bold text-purple-900 text-base flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700 shrink-0" />
                <span>Important Disclosure on Scientific Evidence</span>
              </h3>
              <p className="text-sm leading-relaxed">
                However, reliable scientific evidence has not established homeopathy as an effective treatment for hair loss, hair thinning or scalp diseases.
              </p>
              <p className="text-sm leading-relaxed font-medium">
                Anyone considering homeopathy should understand these limitations and discuss their options with an appropriately qualified healthcare professional. Homeopathic remedies should not replace prescribed medication, proven hair-loss treatments or dermatological care.
              </p>
            </div>
            <p>
              A responsible consultation should also recognise when symptoms require examination by a dermatologist or another medical specialist.
            </p>
          </div>
        </section>

        {/* What to Expect at a Hair Homoeopathy Clinic in Puthanathani */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Consultation Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What to Expect at a Hair Homoeopathy Clinic in Puthanathani
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              If you are considering visiting a <strong>Hair Homoeopathy Clinic in Puthanathani</strong>, it is important to understand what information may be discussed during a consultation. The practitioner may ask about your symptoms, medical history and general health, depending on their qualifications and scope of practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultationSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center text-sm shrink-0">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                </div>
                <div className="space-y-2.5 text-slate-600 text-sm leading-relaxed">
                  {step.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose a Hair Health Clinic in Puthanathani? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Quality &amp; Ethics Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Why Choose a Hair Health Clinic in Puthanathani?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              When searching for a <strong>Hair Health Clinic in Puthanathani</strong>, it is important to consider professional qualifications, communication and the quality of healthcare guidance. Before choosing a clinic, consider the following factors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs mb-3">
                    {crit.number}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {crit.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium text-center">
            Choosing a healthcare provider should involve understanding the type of care being offered and whether it is appropriate for your particular concern.
          </div>
        </section>

        {/* Finding a Hair Doctor & Important Questions to Ask (2-Column Section) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Finding a Hair Doctor */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Scope of Practice</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Finding a Hair Doctor in Puthanathani for Hair Problems
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                People searching for a <strong>Hair Doctor in Puthanathani</strong> may be experiencing persistent hair fall, scalp irritation, thinning or changes in hair growth.
              </p>
              <p>
                The right professional depends on the nature of the problem. A dermatologist is a medical doctor who specialises in conditions affecting the skin, hair and nails.
              </p>
              <p>
                A dermatologist can assess different forms of hair loss, examine scalp conditions and recommend appropriate investigations or evidence-based treatment.
              </p>
              <p>
                If you are looking for a <strong>Hair Specialist in Puthanathani</strong>, verify the professional&apos;s qualifications and experience in managing hair and scalp conditions.
              </p>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-sm font-medium">
                A homeopathic practitioner and a dermatologist have different training and scopes of practice. A homeopathic consultation should not be considered a substitute for specialist dermatological assessment.
              </div>
            </div>
          </div>

          {/* Right Card: Important Questions to Ask */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Questions to Ask</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Homoeopathic Doctor for Hair Problems in Puthanathani: Important Questions to Ask
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you are searching for a <strong>Homoeopathic Doctor for Hair Problems in Puthanathani</strong>, it is useful to ask questions before beginning any complementary treatment. Consider asking:
            </p>
            <ul className="space-y-2.5">
              {importantQuestions.map((question, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              These questions can help you understand the proposed care and make an informed decision. Remember that the availability of a homeopathic remedy does not establish that it can treat hair loss or improve hair growth.
            </p>
          </div>
        </section>

        {/* Hair Loss Treatment in Puthanathani: Why Identifying the Cause Matters */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-teal-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Underlying Etiology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Hair Loss Treatment in Puthanathani: Why Identifying the Cause Matters
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              Hair loss can occur for several reasons, and different conditions may require different treatments. Common causes include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hairLossCauses.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/10 border border-white/15 space-y-1.5"
              >
                <h3 className="font-bold text-white text-base">{cause.title}</h3>
                <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-white/10 border border-white/20 text-indigo-100 space-y-2.5 text-sm leading-relaxed">
            <p>
              People looking for <strong className="text-white">Hair Loss Treatment in Puthanathani</strong> should consider a medical assessment if hair loss is persistent, sudden, patchy or associated with scalp symptoms.
            </p>
            <p>
              A dermatologist may recommend investigations depending on the suspected cause. Treatment options may include appropriate medication, management of an underlying condition or changes to hair-care practices. The suitability of any treatment depends on the individual&apos;s diagnosis, medical history and health needs.
            </p>
          </div>
        </section>

        {/* Hair and Scalp Treatment in Puthanathani: Simple Care Tips */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Everyday Hair &amp; Scalp Habits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Hair and Scalp Treatment in Puthanathani: Simple Care Tips
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Everyday hair-care habits can help maintain hair condition and reduce avoidable damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairCareTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* When Should You Seek Medical Advice? */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Warning Signs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Hair Treatment in Puthanathani: When Should You Seek Medical Advice?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Not all hair fall requires urgent treatment. However, certain symptoms should be assessed by a qualified medical professional. Seek medical advice if you experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {medicalAdviceSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3 text-sm text-white"
              >
                <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>{sign}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-rose-100 font-medium">
            Early assessment can help identify the cause and prevent delays in appropriate care.
          </p>
        </section>

        {/* Choosing a Homoeopathy Clinic for Hair Problems in Puthanathani */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Shield className="w-3.5 h-3.5" />
            <span>Evaluating Local Clinics</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Choosing a Homoeopathy Clinic for Hair Problems in Puthanathani
          </h2>
          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              When evaluating a <strong>Homoeopathy Clinic for Hair Problems in Puthanathani</strong>, focus on the practitioner&apos;s qualifications, transparent communication and responsible approach to healthcare.
            </p>
            <p>
              You should understand what the clinic offers, what its limitations are and whether your symptoms require a dermatologist&apos;s assessment.
            </p>
            <p>
              Do not rely on guaranteed hair regrowth claims, unverified testimonials or products promising instant results.
            </p>
            <p>
              If you are looking for a <strong>Hair Care Clinic in Puthanathani</strong>, confirm the available services, practitioner credentials, consultation timings and appointment arrangements directly with the clinic.
            </p>
          </div>
        </section>

        {/* Take a Responsible Step Towards Better Hair Health & Booking Engine */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Responsible Hair Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Take a Responsible Step Towards Better Hair Health
            </h2>
            <div className="space-y-3 text-indigo-100 text-sm sm:text-base leading-relaxed text-left sm:text-center">
              <p>
                Hair fall and scalp problems can affect everyday comfort and confidence. However, choosing the right approach begins with understanding the possible cause.
              </p>
              <p>
                If you are exploring a <strong>Homoeopathic Clinic in Puthanathani for Hair Treatment</strong>, make sure you understand the limitations of homeopathy and do not delay proven medical care.
              </p>
              <p>
                For people searching for <strong>Hair Treatment in Puthanathani</strong>, a qualified healthcare professional can help assess persistent hair concerns and explain appropriate options.
              </p>
              <p>
                Healthy hair care involves more than choosing a shampoo or applying a product. It requires attention to scalp health, nutrition, medical conditions and everyday habits. Make informed decisions, seek appropriate medical advice and choose healthcare services that prioritise your well-being.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-slate-900 shadow-md">
            <AppointmentBookingEngine />
          </div>

          {/* Quick Contact Strip */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-indigo-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chembayil Complex, opp. Thavakkal Gold, Puthanathani, Kurumbathur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-300 shrink-0" />
              <a
                href={`tel:${phonePrimary.replace(/\s+/g, '')}`}
                className="hover:text-white transition-colors"
              >
                {phonePrimary}
              </a>
              <span>/</span>
              <a
                href={`tel:${phoneSecondary.replace(/\s+/g, '')}`}
                className="hover:text-white transition-colors"
              >
                {phoneSecondary}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 font-medium transition-colors"
              >
                WhatsApp: {phoneWhatsApp}
              </a>
            </div>
          </div>
        </section>

        {/* 8 Frequently Asked Questions (Interactive Accordion) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear answers regarding hair fall, dandruff, supplements, dermatologist evaluation, and hair consultations in Puthanathani.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left font-semibold text-slate-900 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Puthanathani Clinic Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Practitioner Profile</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) provides respectful hair and scalp consultations, lifestyle reviews, and honest guidance on when specialist dermatological care is needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Consultation Arrangements</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              In-person clinic visits and online video consultations are available. Please contact the clinic directly to confirm current timings, fees, and appointment slots.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Clinic Locations</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>Puthanathani:</strong> Chembayil Complex, opp. Thavakkal Gold, Puthanathani, Kurumbathur, Kerala 676552.
              <br />
              <strong>Kuttippuram:</strong> Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571.
            </p>
          </div>
        </section>

        {/* Related Regional Guides */}
        <RegionalRelatedGuides currentGuideKey="hair-treatment-puthanathani" />
      </main>
    </div>
  );
};
