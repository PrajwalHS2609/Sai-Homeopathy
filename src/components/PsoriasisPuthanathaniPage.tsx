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
  Hand,
  Ban,
  HeartPulse,
  Pill,
  Activity,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PsoriasisPuthanathaniPage: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details (Puthanathani primary + Kuttippuram secondary)
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about a psoriasis consultation at Anjali Homoeo Clinic in Puthanathani.'
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
    navigateToBookingWithReason('Psoriasis Health Consultation - Puthanathani', 'clinic');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 8 Key Takeaways
  const keyTakeaways = [
    {
      title: 'Chronic Inflammatory Condition',
      desc: 'Psoriasis is a chronic inflammatory condition that causes changes in the skin and sometimes affects the joints.',
    },
    {
      title: 'Not Contagious',
      desc: 'It is not contagious and cannot spread through ordinary physical contact.',
    },
    {
      title: 'Common Symptoms',
      desc: 'Common symptoms include scaly patches, redness, dryness, itching and cracked skin.',
    },
    {
      title: 'Variable Course',
      desc: 'Psoriasis can vary in severity and may involve periods of improvement and flare-ups.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'There is insufficient reliable scientific evidence that homoeopathy effectively treats psoriasis.',
    },
    {
      title: 'Dermatologist Care',
      desc: 'A qualified dermatologist can diagnose psoriasis and recommend evidence-based treatment options.',
    },
    {
      title: 'Continue Prescribed Medication',
      desc: 'Do not stop prescribed psoriasis medication in favour of unproven remedies.',
    },
    {
      title: 'Supportive Daily Skincare',
      desc: 'Regular moisturising, gentle skincare and awareness of personal triggers can support general skin health.',
    },
  ];

  // Common Symptoms List
  const psoriasisSymptoms = [
    'Raised patches of red or inflamed skin.',
    'White or silvery scales.',
    'Dryness and cracking.',
    'Itching, burning or soreness.',
    'Thickened skin in affected areas.',
    'Changes in the appearance of fingernails or toenails.',
  ];

  // 5 Common Types of Psoriasis
  const psoriasisTypes = [
    {
      number: '01',
      title: '1. Plaque Psoriasis',
      badge: 'Most Common Form',
      paragraphs: [
        'Plaque psoriasis is the most common form. It typically causes raised, inflamed patches covered with dry, silvery scales.',
        'These patches frequently appear on the elbows, knees, scalp and lower back. They may cause itching, discomfort or cracking.',
      ],
    },
    {
      number: '02',
      title: '2. Scalp Psoriasis',
      badge: 'Scalp & Hairline Involvement',
      paragraphs: [
        'Scalp psoriasis affects the skin on the head. It may cause scaling, itching and thick patches that can extend beyond the hairline.',
        'It can sometimes be confused with dandruff or other scalp conditions. A proper medical examination can help distinguish between them.',
      ],
    },
    {
      number: '03',
      title: '3. Guttate Psoriasis',
      badge: 'Drop-Shaped Lesions',
      paragraphs: [
        'Guttate psoriasis often appears as small, drop-shaped spots on the body. It may develop following certain infections, particularly in children and young adults.',
        'Medical assessment is important to confirm the diagnosis and discuss appropriate care.',
      ],
    },
    {
      number: '04',
      title: '4. Inverse Psoriasis',
      badge: 'Skin Fold Involvement',
      paragraphs: [
        'Inverse psoriasis usually affects skin folds, including the armpits, groin and areas beneath the breasts. It may appear as smooth, inflamed patches and can become uncomfortable because of friction and moisture.',
      ],
    },
    {
      number: '05',
      title: '5. Nail Psoriasis',
      badge: 'Fingernail & Toenail Changes',
      paragraphs: [
        'Psoriasis can affect fingernails and toenails. Symptoms may include small pits, discolouration, thickening or separation of the nail from the nail bed.',
        'Nail changes should be evaluated because fungal infections and other conditions can produce similar symptoms.',
      ],
    },
  ];

  // 4 Consultation Expectations
  const consultationSteps = [
    {
      number: '01',
      title: '1. Discussion of Skin Symptoms',
      paragraphs: [
        'You may be asked when the symptoms began, which parts of the body are affected and whether the patches are changing.',
        'Information about scaling, itching, dryness, redness, pain and previous flare-ups can help determine whether further medical assessment is needed.',
      ],
    },
    {
      number: '02',
      title: '2. Medical History',
      paragraphs: [
        'Your previous diagnoses, current medication, allergies and other health conditions may be relevant.',
        'Mention any treatment you have used for psoriasis, including prescription creams, tablets, injections and complementary remedies.',
        'Do not stop or modify prescribed medication without discussing it with your treating doctor.',
      ],
    },
    {
      number: '03',
      title: '3. Lifestyle and Possible Triggers',
      paragraphs: [
        'Certain factors may contribute to psoriasis flare-ups in some individuals. These can include infections, skin injuries, stress, smoking, alcohol consumption and some medications.',
        'Not everyone has the same triggers. Identifying personal patterns may help with long-term condition management.',
      ],
    },
    {
      number: '04',
      title: '4. Guidance on Specialist Assessment',
      paragraphs: [
        'Psoriasis may require examination by a dermatologist, especially when the diagnosis is uncertain or symptoms are widespread, severe or affecting daily activities.',
        'A responsible practitioner should explain when specialist referral is appropriate.',
      ],
    },
  ];

  // 6 Clinic Selection Factors
  const clinicCriteria = [
    {
      number: '01',
      title: 'Qualified practitioner',
      desc: "Verify the practitioner's recognised qualifications, professional registration and scope of practice.",
    },
    {
      number: '02',
      title: 'Patient-focused consultation',
      desc: 'Choose a healthcare provider who listens to your concerns and reviews relevant medical history.',
    },
    {
      number: '03',
      title: 'Clear treatment information',
      desc: 'The proposed approach, possible limitations, consultation fees and follow-up arrangements should be explained.',
    },
    {
      number: '04',
      title: 'Responsible referrals',
      desc: 'A clinic should recognise when psoriasis requires assessment by a dermatologist or another medical specialist.',
    },
    {
      number: '05',
      title: 'Patient privacy',
      desc: 'Personal health information should be handled confidentially.',
    },
    {
      number: '06',
      title: 'No guaranteed cure claims',
      desc: 'Be cautious of promises that psoriasis can be permanently cured through a particular remedy or treatment.',
    },
  ];

  // 6 Evidence-Based Dermatologist Treatment Options
  const dermatologistOptions = [
    'Topical corticosteroids.',
    'Vitamin D-based topical treatments.',
    'Other prescription topical medicines.',
    'Phototherapy under medical supervision.',
    'Systemic medicines for selected patients.',
    'Biologic medicines for certain moderate-to-severe cases.',
  ];

  // 6 Informed Decision Questions
  const informedQuestions = [
    'What qualifications and professional registration does the practitioner hold?',
    'Is there reliable scientific evidence supporting the proposed treatment?',
    'Could the remedy interact with my current medication?',
    'Should I consult a dermatologist before proceeding?',
    'Will the approach delay or replace any prescribed treatment?',
    'What symptoms require urgent medical attention?',
  ];

  // 7 Signs to Seek Medical Advice
  const seekMedicalAdviceSigns = [
    'Skin patches continue to spread.',
    'Itching or discomfort affects sleep and daily activities.',
    'The skin becomes painful, cracked or bleeds.',
    'Symptoms appear on the face, hands, feet or genital area.',
    'Nail changes develop.',
    'You experience joint pain, swelling or stiffness.',
    'Existing treatment is not controlling your symptoms.',
  ];

  // 7 Daily Skin-Care Tips
  const dailyCareTips = [
    {
      title: 'Moisturise Regularly',
      desc: 'Use a suitable moisturiser to help reduce dryness and support the skin barrier. Apply it as advised by your healthcare professional.',
      icon: Sparkles,
    },
    {
      title: 'Avoid Harsh Soaps',
      desc: 'Strong fragrances, harsh cleansers and excessive scrubbing may irritate sensitive skin. Choose gentle products that suit your skin.',
      icon: Droplets,
    },
    {
      title: 'Avoid Scratching',
      desc: 'Scratching affected areas can damage the skin and may worsen irritation. Seek medical advice if itching is difficult to manage.',
      icon: Hand,
    },
    {
      title: 'Protect Your Skin',
      desc: 'Avoid unnecessary skin injuries, burns and excessive friction. Skin trauma can trigger new psoriasis patches in some people.',
      icon: Shield,
    },
    {
      title: 'Follow Prescribed Treatment',
      desc: "Use prescribed creams, medicines or other treatments according to your doctor's instructions. Do not increase or reduce medication without medical advice.",
      icon: Pill,
    },
    {
      title: 'Manage Stress',
      desc: 'Stress may contribute to flare-ups in some individuals. Regular physical activity, adequate sleep and relaxation practices may support overall well-being.',
      icon: HeartPulse,
    },
    {
      title: 'Avoid Smoking',
      desc: 'Smoking is associated with psoriasis and may worsen the condition. If you smoke, consider seeking support to quit.',
      icon: Ban,
    },
  ];

  // 10 Frequently Asked Questions
  const faqs = [
    {
      q: '1. What is psoriasis?',
      a: 'Psoriasis is a chronic inflammatory condition that causes skin cells to build up more quickly than usual. It can produce raised, scaly patches, itching, dryness and inflammation.',
    },
    {
      q: '2. Is psoriasis contagious?',
      a: 'No. Psoriasis is not contagious. It cannot spread through touching, sharing food, using the same towels or ordinary physical contact.',
    },
    {
      q: '3. Is homoeopathy effective for psoriasis?',
      a: 'There is insufficient reliable scientific evidence to establish homoeopathy as an effective psoriasis treatment. It should not replace prescribed medication or evidence-based dermatological care.',
    },
    {
      q: '4. Which doctor should I consult for psoriasis?',
      a: 'A qualified dermatologist is the appropriate medical specialist for diagnosing and managing psoriasis. Consult one if symptoms are persistent, severe, spreading or affecting your joints.',
    },
    {
      q: '5. Can psoriasis be permanently cured?',
      a: 'There is currently no established permanent cure for psoriasis. However, evidence-based treatments can help control symptoms, reduce inflammation and manage flare-ups.',
    },
    {
      q: '6. What can trigger psoriasis flare-ups?',
      a: 'Possible triggers include infections, stress, skin injuries, smoking, alcohol consumption and certain medications. Triggers vary between individuals.',
    },
    {
      q: '7. Can psoriasis affect the joints?',
      a: 'Yes. Some people with psoriasis develop psoriatic arthritis, which can cause joint pain, swelling and stiffness. Early medical assessment is important.',
    },
    {
      q: '8. How can I care for psoriasis-affected skin?',
      a: 'Moisturise regularly, use gentle skincare products, avoid scratching, protect your skin from injury and follow your prescribed treatment plan.',
    },
    {
      q: '9. When should I seek medical advice for psoriasis?',
      a: 'Seek medical advice if symptoms worsen, spread, become painful or affect daily activities. Joint pain, swelling or stiffness should also be assessed.',
    },
    {
      q: '10. What should I check before choosing a psoriasis clinic in Puthanathani?',
      a: "Verify the practitioner's qualifications, registration, services and treatment approach. Ensure that the clinic provides transparent information and recommends specialist care when required.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Psoriasis Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Puthanathani for Psoriasis Treatment"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        badgeText="PSORIASIS CARE & CONSULTATION GUIDE • PUTHANATHANI"
        title="Homoeopathic Clinic in Puthanathani for Psoriasis Treatment"
        subtitle="A comprehensive patient guide explaining psoriasis symptoms, types (plaque, scalp, guttate, inverse, and nail psoriasis), triggers, scientific evidence, evidence-based dermatologist treatments, daily skincare habits, and informed healthcare decisions in Puthanathani."
        metrics={[
          { label: 'Puthanathani Branch', value: 'Kurumbathur, Malappuram' },
          { label: 'Second Branch', value: 'Kuttippuram Clinic' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
        ]}
        doctorSubtitle="BHMS Homoeopathic Practitioner • Chronic Skin & Lifestyle Consultations"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) offers respectful consultations at Anjali Homoeo Clinic in Puthanathani (Chembayil Complex, opp. Thavakkal Gold) and Kuttippuram—reviewing symptoms, triggers, and medical history while supporting timely dermatologist evaluation for psoriasis and joint symptoms."
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
              Psoriasis is a chronic inflammatory skin condition that can affect people of different ages. It commonly causes dry, thickened patches of skin covered with silvery or whitish scales. These patches may appear on the elbows, knees, scalp, hands, feet and other parts of the body. Some people also experience itching, discomfort, cracking or soreness.
            </p>
            <p>
              Living with psoriasis can be challenging, particularly when symptoms repeatedly appear or affect visible areas of the skin. Understanding the condition, identifying possible triggers and seeking appropriate medical guidance are important steps towards managing it.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                If you are searching for a <strong>Homoeopathic Clinic in Puthanathani for Psoriasis Treatment</strong>, it is important to understand the available healthcare options and the qualifications of the practitioner. People exploring <strong>Psoriasis Treatment in Puthanathani</strong> should know that psoriasis is a long-term condition for which evidence-based treatments are available. Homoeopathy has not been reliably demonstrated to treat psoriasis and should not replace prescribed medication or consultation with a qualified dermatologist.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This page explains psoriasis, its common symptoms, possible triggers, treatment considerations and practical skin-care habits to help you make informed decisions about your health.
            </p>
          </div>
        </section>

        {/* 8 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Essential Patient Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Key facts about psoriasis, non-contagious nature, evidence-based dermatological care, and daily skin support.
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

        {/* Understanding Psoriasis and Its Symptoms */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Condition Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Understanding Psoriasis and Its Symptoms
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Psoriasis is an immune-mediated inflammatory disease that affects the normal growth cycle of skin cells. In people with psoriasis, skin cells build up more quickly than usual, resulting in thickened patches and scaling. The condition may affect small areas or larger parts of the body. Its appearance and severity differ from person to person.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Common symptoms include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {psoriasisSymptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 text-sm space-y-2">
            <p>
              <strong>Joint Symptoms (Psoriatic Arthritis):</strong> Some people experience joint pain, stiffness or swelling. This may indicate psoriatic arthritis, which requires medical assessment.
            </p>
            <p>
              If you notice persistent skin changes, seek professional advice rather than assuming that every scaly rash is psoriasis.
            </p>
          </div>
        </section>

        {/* Common Types of Psoriasis */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Clinical Presentations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Common Types of Psoriasis
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Understanding the different types of psoriasis can help explain why symptoms and treatment requirements vary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {psoriasisTypes.map((type, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 bg-slate-50 border border-slate-200 space-y-3 ${
                  idx === psoriasisTypes.length - 1 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    {type.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{type.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                <div className="space-y-2.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {type.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Homoeopathic Treatment for Psoriasis in Puthanathani: What Should You Know? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Evidence &amp; Limitations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homoeopathic Treatment for Psoriasis in Puthanathani: What Should You Know?
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Homoeopathic Treatment for Psoriasis in Puthanathani</strong> may want to understand whether homoeopathy can help manage recurring skin symptoms.
            </p>
            <p>
              Homoeopathy is a complementary system of healthcare based on principles such as treating symptoms with substances believed to produce similar effects and using highly diluted preparations.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2">
              <h3 className="font-bold text-purple-900 text-base flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700 shrink-0" />
                <span>Important Disclosure on Scientific Evidence</span>
              </h3>
              <p className="text-sm leading-relaxed">
                However, reliable scientific evidence has not established homoeopathy as an effective treatment for psoriasis. It has not been shown to control the underlying inflammatory process or prevent psoriasis-related complications.
              </p>
              <p className="text-sm leading-relaxed font-medium">
                Anyone considering Homoeopathy for Psoriasis in Puthanathani should understand these limitations and discuss their options with an appropriately qualified healthcare professional. Homoeopathic remedies should not replace dermatologist-prescribed treatment, particularly for moderate or severe psoriasis, psoriasis affecting sensitive areas or symptoms involving the joints.
              </p>
            </div>
            <p>
              A responsible healthcare consultation should include clear information about treatment limitations and referral to a dermatologist whenever necessary.
            </p>
          </div>
        </section>

        {/* What to Expect at a Psoriasis Homoeopathy Clinic in Puthanathani */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Consultation Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What to Expect at a Psoriasis Homoeopathy Clinic in Puthanathani
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              If you are considering a consultation at a <strong>Psoriasis Homoeopathy Clinic in Puthanathani</strong>, it is useful to understand what information may be discussed. Depending on the practitioner&apos;s qualifications and scope of practice, a consultation may include the following areas:
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

        {/* Why Choose a Psoriasis Clinic in Puthanathani? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Quality &amp; Ethics Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Why Choose a Psoriasis Clinic in Puthanathani?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              When searching for a <strong>Psoriasis Clinic in Puthanathani</strong>, it is important to consider professional qualifications, transparent communication and the availability of appropriate medical guidance. Before choosing a clinic, consider these factors:
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
            The goal should be informed healthcare decisions rather than unrealistic expectations.
          </div>
        </section>

        {/* Finding a Psoriasis Doctor & Making an Informed Decision (2-Column Section) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Finding a Psoriasis Doctor */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Evidence-Based Dermatology</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Finding a Psoriasis Doctor in Puthanathani
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                People searching for a <strong>Psoriasis Doctor in Puthanathani</strong> may be experiencing recurring skin patches, persistent itching, scalp scaling or other symptoms.
              </p>
              <p>
                A dermatologist is a medical doctor specialising in conditions affecting the skin, hair and nails. Dermatologists are trained to diagnose psoriasis, distinguish it from similar skin conditions and recommend evidence-based treatment.
              </p>
              <p className="font-semibold text-slate-900">
                Depending on the type and severity of psoriasis, treatment options may include:
              </p>
              <ul className="space-y-2">
                {dermatologistOptions.map((opt, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-slate-600">
                The appropriate treatment depends on the patient&apos;s diagnosis, medical history, symptom severity and individual health needs. If you are searching for <strong>Psoriasis Treatment in Puthanathani</strong>, verify the qualifications of the healthcare professional and seek dermatological advice when necessary.
              </p>
            </div>
          </div>

          {/* Right Card: Making an Informed Decision */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Questions to Ask</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Psoriasis Homoeopathic Treatment in Puthanathani: Making an Informed Decision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              People exploring <strong>Psoriasis Homoeopathic Treatment in Puthanathani</strong> should understand the difference between complementary healthcare and evidence-based medical treatment. Psoriasis is a complex inflammatory condition. Its management may require ongoing medical supervision, particularly when symptoms are persistent or severe.
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Before beginning any complementary approach, consider asking:
            </p>
            <ul className="space-y-2.5">
              {informedQuestions.map((question, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm font-medium leading-relaxed">
              These questions can help you evaluate the proposed care. Do not discontinue prescribed medication because symptoms temporarily improve. Psoriasis can fluctuate naturally, and stopping treatment without medical guidance may lead to a flare-up.
            </div>
          </div>
        </section>

        {/* Psoriasis Consultation in Puthanathani: When Should You Seek Medical Advice? */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Warning Signs &amp; Urgent Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Psoriasis Consultation in Puthanathani: When Should You Seek Medical Advice?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              A <strong>Psoriasis Consultation in Puthanathani</strong> may be considered when you notice persistent scaly patches, recurring inflammation or unexplained changes in your skin. Seek assessment from a qualified medical professional if:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {seekMedicalAdviceSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3 text-sm text-white"
              >
                <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>{sign}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-rose-950/70 border border-rose-400/50 text-rose-50 space-y-2">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-200 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                <strong>Urgent Medical Care:</strong> Seek urgent medical care if you develop widespread redness, extensive skin peeling, severe pain, fever or signs of a serious infection. Sudden widespread pustules or rapidly worsening symptoms also require prompt medical assessment.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-rose-200 pl-8">
              Psoriasis affecting the joints may require early evaluation to reduce the risk of long-term joint damage.
            </p>
          </div>
        </section>

        {/* Daily Skin-Care Tips for People with Psoriasis */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Supportive Daily Routine
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Daily Skin-Care Tips for People with Psoriasis
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Alongside prescribed treatment, simple skincare habits may help reduce dryness and irritation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyCareTips.map((tip, idx) => {
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

        {/* Supporting Long-Term Skin Health & Booking Engine */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Long-Term Skin Health
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Psoriasis Treatment in Puthanathani: Supporting Long-Term Skin Health
            </h2>
            <div className="space-y-3 text-indigo-100 text-sm sm:text-base leading-relaxed text-left sm:text-center">
              <p>
                Psoriasis is a long-term condition, but appropriate management can help many people control symptoms and maintain their quality of life. The right approach depends on the type of psoriasis, the areas affected and the severity of symptoms. Regular follow-up may be necessary to review treatment response and identify possible complications.
              </p>
              <p>
                If you are exploring <strong>Psoriasis Treatment in Puthanathani</strong>, make sure you understand the available medical options and the qualifications of the healthcare professional you consult.
              </p>
              <p>
                A <strong>Psoriasis Homoeopathy Clinic in Puthanathani</strong> may offer complementary consultations, but homeopathy has not been established as an effective psoriasis treatment. It should never replace evidence-based dermatological care. Choose a healthcare provider who gives clear information, respects your concerns and supports timely referral when specialist care is needed.
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

        {/* 10 Frequently Asked Questions (Interactive Accordion) */}
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
              Clear answers regarding psoriasis symptoms, triggers, joint involvement, scientific evidence, skincare, and choosing a clinic in Puthanathani.
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
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Practitioner Profile</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) provides respectful consultations, trigger reviews, and honest guidance on timely specialist dermatological evaluation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Consultation Arrangements</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              In-person clinic visits and online video consultations are available. Contact the clinic directly to confirm current timings, fees, and appointment slots.
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
        <RegionalRelatedGuides currentGuideKey="psoriasis-treatment-puthanathani" />
      </main>
    </div>
  );
};
