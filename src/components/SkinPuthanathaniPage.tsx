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
  Sun,
  Shield,
  Info,
  Stethoscope,
  ClipboardList,
  UserCheck,
  Hand,
  Ban,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const SkinPuthanathaniPage: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details (Puthanathani primary + Kuttippuram secondary)
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about a skin consultation at Anjali Homoeo Clinic near Puthanathani.'
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
    navigateToBookingWithReason('Skin Health Consultation - Puthanathani', 'clinic');
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
      title: 'Different Underlying Causes',
      desc: 'Skin problems can have different causes, including allergies, infections, inflammation, hormonal changes and other medical conditions.',
    },
    {
      title: 'Assessment Before Treatment',
      desc: 'A proper assessment is important before deciding on any treatment.',
    },
    {
      title: 'Understanding Scientific Evidence',
      desc: 'People searching for Skin Homeopathic Treatment in Puthanathani should understand that strong scientific evidence supporting homeopathy for skin diseases is lacking.',
    },
    {
      title: 'No Substitute for Medical Care',
      desc: 'Homeopathy should not replace prescribed medication, dermatological care or urgent medical treatment.',
    },
    {
      title: 'Avoid Self-Medication',
      desc: 'Avoid self-medication and unverified creams, especially products containing unknown ingredients.',
    },
    {
      title: 'Recognise Urgent Warning Signs',
      desc: 'Seek prompt medical attention if a rash spreads rapidly, becomes painful, develops blisters or occurs with fever.',
    },
    {
      title: 'Daily Skin Health Support',
      desc: 'Consistent skin hygiene, sun protection and appropriate skincare can support general skin health.',
    },
  ];

  // 5 Common Skin Problems
  const commonSkinProblems = [
    {
      number: '01',
      title: '1. Acne and Pimples',
      badge: 'Follicular & Hormonal Concern',
      paragraphs: [
        'Acne is a common skin condition that develops when hair follicles become blocked with oil and dead skin cells. It may appear as blackheads, whiteheads, pimples or deeper inflammatory lesions.',
        'Acne can affect teenagers and adults. Hormonal changes, genetics, certain medications and skincare products may contribute to its development.',
        'People looking for a Skin Specialist in Puthanathani may benefit from an assessment to understand the type and severity of acne. Appropriate treatment depends on individual circumstances, and persistent or severe acne should be evaluated by a qualified dermatologist to reduce the risk of scarring.',
      ],
      note: 'Persistent or severe acne should be evaluated by a qualified dermatologist to reduce the risk of scarring.',
    },
    {
      number: '02',
      title: '2. Eczema and Dry Skin',
      badge: 'Inflammatory Barrier Concern',
      paragraphs: [
        'Dry skin may cause roughness, scaling, tightness and itching. Eczema is a group of inflammatory skin conditions that can cause dryness, redness and irritation.',
        'Symptoms may vary from person to person. Certain soaps, detergents, environmental factors and allergens may worsen some forms of eczema.',
        'If dryness or itching continues despite basic skincare, seek medical advice to identify the possible cause. Persistent symptoms should not be assumed to be simple dryness.',
      ],
      note: 'Persistent dryness or itching should be medically assessed rather than assumed to be simple dryness.',
    },
    {
      number: '03',
      title: '3. Pigmentation and Dark Spots',
      badge: 'Tone & Pigment Changes',
      paragraphs: [
        'Changes in skin colour may occur because of sun exposure, inflammation, acne marks, hormonal changes or other medical conditions.',
        'Dark spots and uneven skin tone can affect different parts of the body. The correct approach depends on the cause.',
        'Before using skin-lightening products or strong creams, it is advisable to seek professional guidance. Certain products may contain ingredients that can irritate or damage the skin when used incorrectly.',
      ],
      note: 'Avoid using strong creams or skin-lightening products without professional guidance.',
    },
    {
      number: '04',
      title: '4. Itching and Skin Rashes',
      badge: 'Allergic & Irritant Reactions',
      paragraphs: [
        'Itching may occur due to dryness, allergic reactions, insect bites, infections, eczema or other health conditions.',
        'A rash may appear as red patches, small bumps, blisters or areas of irritated skin. Its appearance alone may not be enough to identify the cause.',
        'People seeking Skin Problems Treatment in Puthanathani should consider a proper assessment rather than relying only on home remedies or advice from non-medical sources.',
      ],
      note: 'A rash’s appearance alone may not identify the cause—seek a proper clinical assessment.',
    },
    {
      number: '05',
      title: '5. Fungal and Other Skin Infections',
      badge: 'Infectious Skin Concerns',
      paragraphs: [
        'Fungal infections can affect areas such as the feet, groin, body folds and scalp. Some may cause itching, scaling, redness or circular patches.',
        'Bacterial and viral infections can also produce skin symptoms. Because different infections require different treatment approaches, an accurate diagnosis is important.',
        'Avoid using steroid-containing combination creams without medical advice. Such products may mask symptoms or worsen certain infections.',
      ],
      note: 'Avoid steroid-containing combination creams without medical advice, as they may mask or worsen infections.',
    },
  ];

  // 4 Consultation Expectations
  const consultationSteps = [
    {
      number: '01',
      title: '1. Discussion of Skin Symptoms',
      paragraphs: [
        'The practitioner may ask about the nature of the skin concern, when it started, which areas are affected and whether the symptoms have changed over time.',
        'Information about itching, pain, swelling, dryness, redness or recurring rashes can help guide further assessment.',
      ],
    },
    {
      number: '02',
      title: '2. Previous Medical History',
      paragraphs: [
        'Previous skin conditions, allergies, diagnosed medical problems and medications may be relevant.',
        'It is important to disclose any creams, tablets, supplements or other remedies currently being used. Do not stop prescribed medication without speaking to the healthcare professional responsible for your care.',
      ],
    },
    {
      number: '03',
      title: '3. Lifestyle and Skincare Habits',
      paragraphs: [
        'Daily skincare routines, occupational exposure, personal hygiene practices and contact with possible irritants may be discussed.',
        'These details can help identify factors that may be contributing to irritation or aggravating an existing skin condition.',
      ],
    },
    {
      number: '04',
      title: '4. Guidance on Further Medical Assessment',
      paragraphs: [
        'Not every skin concern can be assessed through a general consultation. Some conditions require examination, laboratory testing or specialist evaluation.',
        'A responsible practitioner should explain when a referral to a dermatologist or another qualified medical professional is appropriate.',
      ],
    },
  ];

  // 6 Selection Criteria for a Skin Health Clinic
  const clinicCriteria = [
    {
      number: '01',
      title: 'Qualified practitioner',
      desc: "Check the practitioner's recognised qualifications, registration and scope of practice.",
    },
    {
      number: '02',
      title: 'Clear communication',
      desc: 'Choose a healthcare provider who explains the nature and limitations of the proposed approach.',
    },
    {
      number: '03',
      title: 'Patient history',
      desc: 'A proper consultation should consider relevant symptoms, medical history and existing medication.',
    },
    {
      number: '04',
      title: 'Responsible referrals',
      desc: 'The clinic should recognise when a skin condition needs dermatological assessment or urgent medical attention.',
    },
    {
      number: '05',
      title: 'Transparent information',
      desc: 'Treatment options, consultation charges and follow-up arrangements should be explained clearly.',
    },
    {
      number: '06',
      title: 'Patient privacy',
      desc: 'Personal health information should be handled respectfully and confidentially.',
    },
  ];

  // 7 Questions Before Starting Complementary Care
  const informedChoiceQuestions = [
    'What qualifications and registration does the practitioner hold?',
    'What is the proposed approach to my skin concern?',
    'Is there reliable scientific evidence supporting the suggested treatment?',
    'Could the remedy interact with my existing medication?',
    'Should I consult a dermatologist before proceeding?',
    'What symptoms would require urgent medical attention?',
    'How will the clinic handle my medical information?',
  ];

  // 8 Prompt Medical Attention Red Flags
  const promptMedicalAttentionSigns = [
    'A rash that spreads rapidly.',
    'Fever along with a widespread rash.',
    'Severe skin pain.',
    'Extensive blistering or open sores.',
    'Swelling around the eyes, lips or face.',
    'Skin symptoms involving the eyes, mouth or genital area.',
    'A rapidly changing mole or unusual skin growth.',
    'A wound that does not heal.',
  ];

  // 6 Simple Habits to Support Healthy Skin
  const healthyHabits = [
    {
      title: 'Use Gentle Cleansing Products',
      desc: 'Choose mild cleansing products that suit your skin. Avoid excessive washing and harsh scrubbing, which may irritate sensitive skin.',
      icon: Droplets,
    },
    {
      title: 'Moisturise When Needed',
      desc: 'A suitable moisturiser can help reduce dryness and support the skin barrier. People with persistent irritation should seek advice about selecting appropriate products.',
      icon: Sparkles,
    },
    {
      title: 'Protect Your Skin from Sun Exposure',
      desc: 'Use suitable sun protection, wear protective clothing and seek shade when sunlight is strong. Sun protection is particularly important for reducing sun damage and preventing certain pigmentation concerns from worsening.',
      icon: Sun,
    },
    {
      title: 'Avoid Unverified Skin Products',
      desc: 'Do not use unknown creams, strong skin-lightening products or steroid-containing combinations without professional guidance. Products that promise instant results may contain ingredients that are unsuitable for your skin or health condition.',
      icon: Ban,
    },
    {
      title: 'Maintain Personal Hygiene',
      desc: 'Keep skin folds clean and dry, use clean towels and avoid sharing personal items such as razors. These habits may help reduce certain preventable skin problems.',
      icon: Shield,
    },
    {
      title: 'Avoid Scratching Irritated Areas',
      desc: 'Scratching may damage the skin and increase the risk of secondary infection. Seek medical advice if itching is persistent or severe.',
      icon: Hand,
    },
  ];

  // 8 Frequently Asked Questions
  const faqs = [
    {
      q: '1. Where can I find a homeopathic clinic near Puthanathani for skin treatment?',
      a: "You can search for local homeopathic clinics near Puthanathani and verify their practitioner's qualifications, registration, services and consultation arrangements. For persistent or serious skin conditions, consult a qualified dermatologist.",
    },
    {
      q: '2. Is homeopathy effective for skin diseases?',
      a: 'There is currently insufficient reliable scientific evidence to establish homeopathy as an effective treatment for skin diseases. It should not replace evidence-based medical care or prescribed treatment.',
    },
    {
      q: '3. Which doctor should I consult for recurring skin problems?',
      a: 'A qualified dermatologist is the appropriate specialist for diagnosing and managing many skin conditions. A medical assessment is particularly important if symptoms persist, worsen or recur.',
    },
    {
      q: '4. Can acne be treated through homeopathy?',
      a: 'Homeopathy has not been reliably demonstrated to treat acne. A dermatologist can assess acne severity and recommend evidence-based options to manage breakouts and reduce the risk of scarring.',
    },
    {
      q: '5. When should I seek medical attention for a skin rash?',
      a: 'Seek prompt medical attention if a rash spreads quickly, becomes painful, develops blisters, involves the eyes or mouth, or occurs with fever. Breathing difficulty or swelling of the tongue or throat requires emergency care.',
    },
    {
      q: '6. What should I discuss during a skin consultation?',
      a: 'Explain when the symptoms started, which areas are affected, what makes them better or worse, and which medicines or creams you have used. Mention allergies, existing health conditions and any previous diagnosis.',
    },
    {
      q: '7. Is it safe to stop my prescribed skin medication and try homeopathy?',
      a: 'No. Do not stop prescribed medication or delay recommended medical treatment without discussing it with your treating doctor. Some products labelled homeopathic may also contain active ingredients and cause side effects or interactions.',
    },
    {
      q: '8. How can I maintain healthy skin?',
      a: 'Use gentle skincare products, moisturise when needed, protect your skin from excessive sun exposure, avoid unverified creams and seek medical advice for persistent symptoms.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Skin Treatment Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homeopathic Clinic near Puthanathani for Skin Treatment"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-4 h-4 text-emerald-400" />}
        badgeText="SKIN HEALTH & CONSULTATION GUIDE • PUTHANATHANI"
        title="Homeopathic Clinic near Puthanathani for Skin Treatment"
        subtitle="An informative guide explaining common skin concerns (acne, eczema, pigmentation, rashes, and fungal infections), what to expect during a skin consultation, sensible skincare habits, and how to make responsible, evidence-aware healthcare decisions near Puthanathani."
        metrics={[
          { label: 'Puthanathani Branch', value: 'Kurumbathur, Malappuram' },
          { label: 'Second Branch', value: 'Kuttippuram Clinic' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
        ]}
        doctorSubtitle="BHMS Homoeopathic Practitioner • Skin & Lifestyle Consultations"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) offers respectful, thorough skin consultations at Anjali Homoeo Clinic in Puthanathani (Chembayil Complex, opp. Thavakkal Gold) and Kuttippuram—reviewing symptoms, skincare history, and guiding appropriate dermatologist referrals whenever needed."
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
              Healthy skin is an important part of overall well-being. However, skin concerns such as acne, itching, dryness, rashes, pigmentation and recurring irritation can affect people of different ages. These problems may cause physical discomfort and sometimes affect confidence and everyday activities. Finding the right healthcare professional for an appropriate assessment is an important first step towards managing a skin concern.
            </p>
            <p>
              If you are searching for a <strong>Homeopathic Clinic near Puthanathani for Skin Treatment</strong>, it is important to choose a healthcare provider who listens to your concerns, understands your health history and explains suitable care options. People looking for skin-related consultations may consider homeopathic healthcare as a complementary approach, while also understanding its limitations and the importance of evidence-based medical care.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                A consultation at a <strong>Skin Homeopathy Clinic in Puthanathani</strong> may provide an opportunity to discuss your symptoms, previous treatments, lifestyle and general health. However, homeopathy has not been reliably demonstrated to treat skin diseases, and it should not replace proven medical treatment or a consultation with a qualified dermatologist when required.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This page explains common skin concerns, what to expect from a skin consultation, important skin-care practices and how to make informed healthcare decisions when looking for <strong>Skin Treatment in Puthanathani</strong>.
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
              Core facts on skin assessments, scientific evidence, safety precautions, and healthy skin habits.
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

        {/* Understanding Common Skin Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Common Skin Concerns
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Understanding Common Skin Problems
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              The skin acts as a protective barrier for the body. It helps regulate temperature, provides sensation and protects underlying tissues. Because it is exposed to environmental conditions and different substances, it can develop a variety of problems.
            </p>
            <p className="text-slate-600 mt-2 leading-relaxed">
              The type of skin concern, its duration, severity and associated symptoms can help a healthcare professional determine what further assessment may be necessary. Some commonly reported skin concerns include:
            </p>
          </div>

          <div className="space-y-6">
            {commonSkinProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
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

        {/* Skin Homeopathic Treatment in Puthanathani: What Should You Know? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Evidence &amp; Limitations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Skin Homeopathic Treatment in Puthanathani: What Should You Know?
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              People exploring <strong>Skin Homeopathic Treatment in Puthanathani</strong> may have questions about consultations, remedies and the type of care involved.
            </p>
            <p>
              Homeopathy is a system of complementary medicine based on principles such as &ldquo;like cures like&rdquo; and the use of highly diluted preparations. However, these principles have not been established as effective treatments through reliable scientific evidence.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2">
              <h3 className="font-bold text-purple-900 text-base flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700 shrink-0" />
                <span>Important Disclosure on Scientific Evidence</span>
              </h3>
              <p className="text-sm leading-relaxed">
                Major health information organisations report that there is little or no reliable evidence that homeopathy effectively treats specific health conditions, including skin diseases.
              </p>
              <p className="text-sm leading-relaxed font-medium">
                Therefore, anyone considering homeopathy should make an informed decision and discuss their options with an appropriately qualified healthcare professional. It should not be used as a substitute for treatments recommended by a dermatologist or another medical practitioner.
              </p>
            </div>
            <p>
              A responsible healthcare consultation should focus on understanding the symptoms, identifying possible warning signs and explaining when referral to a specialist is necessary.
            </p>
          </div>
        </section>

        {/* What to Expect at a Homeopathy Clinic for Skin Problems in Puthanathani */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Consultation Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What to Expect at a Homeopathy Clinic for Skin Problems in Puthanathani
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              When visiting a <strong>Homeopathy Clinic for Skin Problems in Puthanathani</strong>, patients should expect a respectful and informative consultation. The consultation process may involve discussing the following areas, depending on the clinic&apos;s actual services and the practitioner&apos;s qualifications:
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

        {/* Why Choose a Skin Health Clinic in Puthanathani? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Quality &amp; Ethics Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Why Choose a Skin Health Clinic in Puthanathani?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              When looking for a <strong>Skin Health Clinic in Puthanathani</strong>, patients should prioritise professional qualifications, clear communication and responsible healthcare guidance. Consider these factors before choosing a clinic:
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
            A clinic should never promise guaranteed results or ask patients to delay necessary medical care.
          </div>
        </section>

        {/* Finding a Skin Doctor & Making an Informed Choice (2-Column Editorial Section) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Finding a Skin Doctor */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Scope of Practice</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Finding a Skin Doctor in Puthanathani for the Right Assessment
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Searching for a <strong>Skin Doctor in Puthanathani</strong> is often the first step when a skin problem becomes persistent or uncomfortable.
              </p>
              <p>
                The type of professional you need depends on your symptoms. A dermatologist is a medical doctor who specialises in diagnosing and managing conditions affecting the skin, hair and nails.
              </p>
              <p>
                If you have persistent acne, recurring rashes, unexplained pigmentation, suspected infections or a changing skin lesion, a qualified dermatologist can assess the condition and recommend appropriate care.
              </p>
              <p>
                People searching for a <strong>Skin Specialist in Puthanathani</strong> should check the practitioner&apos;s qualifications and experience in managing the particular concern.
              </p>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-sm font-medium">
                A homeopathic practitioner and a dermatologist have different training and scopes of practice. It is important not to confuse a homeopathic consultation with specialist dermatological care.
              </div>
            </div>
          </div>

          {/* Right Card: Making an Informed Choice */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Questions to Ask</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Homoeopathic Doctor for Skin Problems in Puthanathani: Making an Informed Choice
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you are searching online for a <strong>Homoeopathic Doctor for Skin Problems in Puthanathani</strong>, consider what you want from the consultation and whether the proposed care is appropriate for your condition. Before beginning any complementary treatment, consider asking:
            </p>
            <ul className="space-y-2.5">
              {informedChoiceQuestions.map((question, idx) => (
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
              These questions can help you make a more informed decision. Remember that the availability of a homeopathic remedy does not establish that it is effective or suitable for a particular skin condition. Do not delay proven medical treatment in favour of an unproven approach.
            </p>
          </div>
        </section>

        {/* Skin Disease Treatment in Puthanathani: Importance of Correct Diagnosis & Urgent Signs */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Accurate Diagnosis &amp; Warning Signs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Skin Disease Treatment in Puthanathani: The Importance of Correct Diagnosis
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              Different skin diseases can produce similar symptoms. For example, itching may be associated with eczema, fungal infections, allergies, insect bites or other conditions. Treating a skin problem without identifying its cause may delay appropriate care.
            </p>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              When seeking <strong>Skin Disease Treatment in Puthanathani</strong>, consider a medical assessment if symptoms are persistent, recurring or getting worse. A dermatologist or other appropriately qualified medical professional may recommend an examination or investigations depending on the suspected condition.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Prompt medical attention is particularly important if you experience:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {promptMedicalAttentionSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3 text-sm text-white"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-rose-600/30 border border-rose-400/50 text-rose-50 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-200 shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              <strong>Emergency Medical Care:</strong> If you experience breathing difficulty or swelling of the tongue or throat, seek emergency medical care immediately.
            </p>
          </div>
        </section>

        {/* Simple Habits to Support Healthy Skin */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Everyday Skin Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Simple Habits to Support Healthy Skin
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Alongside appropriate medical care, everyday habits can help protect the skin and reduce avoidable irritation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthyHabits.map((habit, idx) => {
              const Icon = habit.icon;
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
                      {habit.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {habit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Next Step Towards Responsible Skin Care & Booking Section */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Responsible Skin Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Skin Treatment in Puthanathani: Take the Next Step Towards Responsible Skin Care
            </h2>
            <div className="space-y-3 text-indigo-100 text-sm sm:text-base leading-relaxed text-left sm:text-center">
              <p>
                Skin concerns deserve proper attention, whether they are mild, recurring or affecting everyday life. The first step is to understand the possible cause and identify the most appropriate healthcare professional.
              </p>
              <p>
                If you are exploring a <strong>Skin Homeopathy Clinic in Puthanathani</strong>, make sure you understand the evidence and limitations of homeopathic treatment. A consultation should never replace necessary dermatological assessment or delay treatment for a serious skin condition.
              </p>
              <p>
                For people looking for <strong>Skin Treatment in Puthanathani</strong>, choosing qualified healthcare professionals, following appropriate medical advice and maintaining sensible skincare habits can support better-informed decisions about skin health.
              </p>
              <p>
                If you are considering a consultation at a local clinic, contact the clinic directly to confirm its practitioner qualifications, available services, consultation timings and appointment arrangements. Your skin deserves informed care, accurate assessment and responsible healthcare decisions.
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
              Clear answers regarding skin consultations, scientific evidence, dermatologist care, warning signs, and skin health near Puthanathani.
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
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Practitioner Profile</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) offers skin health discussions, symptom reviews, and transparent guidance on when specialist dermatological care is appropriate.
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
        <RegionalRelatedGuides currentGuideKey="skin-treatment-puthanathani" />
      </main>
    </div>
  );
};
