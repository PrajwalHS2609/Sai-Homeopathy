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
  Shirt,
  Footprints,
  Home,
  Activity,
  Pill,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const RingwormPuthanathaniPage: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details (Puthanathani primary + Kuttippuram secondary)
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about a ringworm and skin consultation at Anjali Homoeo Clinic in Puthanathani.'
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
    navigateToBookingWithReason('Ringworm & Fungal Skin Consultation - Puthanathani', 'clinic');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 10 Key Takeaways
  const keyTakeaways = [
    {
      title: 'Contagious Fungal Infection',
      desc: 'Ringworm is a contagious fungal infection, not a worm infestation.',
    },
    {
      title: 'Multiple Body Sites',
      desc: 'It can affect the skin, scalp, feet, groin and nails.',
    },
    {
      title: 'Characteristic Symptoms',
      desc: 'Common symptoms include circular rashes, itching, redness, scaling and skin irritation.',
    },
    {
      title: 'Routes of Spread',
      desc: 'Ringworm can spread through direct contact, infected animals and contaminated personal items.',
    },
    {
      title: 'Established Antifungal Care',
      desc: 'Antifungal medicines are the established treatment for ringworm.',
    },
    {
      title: 'Prescription Treatment Cases',
      desc: 'Scalp, nail, widespread or persistent infections may require prescription treatment.',
    },
    {
      title: 'Scientific Evidence Limits',
      desc: 'Homoeopathy has not been reliably established as an effective treatment for ringworm.',
    },
    {
      title: 'Avoid Steroid Creams',
      desc: 'Avoid steroid-containing creams unless specifically prescribed for an appropriate diagnosis.',
    },
    {
      title: 'Clean & Dry Skin Hygiene',
      desc: 'Keeping affected areas clean and dry can help reduce the risk of spreading the infection.',
    },
    {
      title: 'Early Medical Assessment',
      desc: 'Early medical assessment can help identify the infection and guide suitable treatment.',
    },
  ];

  // 5 Common Types of Ringworm
  const ringwormTypes = [
    {
      number: '01',
      title: '1. Ringworm of the Body (Tinea Corporis)',
      badge: 'Body Skin',
      paragraphs: [
        'Tinea corporis commonly affects areas such as the arms, legs, chest, back and abdomen. It may appear as circular or oval patches with a scaly border and a clearer-looking centre.',
        'The rash can gradually increase in size or develop in multiple areas if the infection spreads.',
      ],
      bullets: [] as string[],
    },
    {
      number: '02',
      title: '2. Ringworm of the Scalp (Tinea Capitis)',
      badge: 'Scalp & Hair Follicles',
      paragraphs: [
        'Tinea capitis affects the scalp and hair follicles. It is particularly common among children but can also affect adults. Possible symptoms include:',
      ],
      bullets: [
        'Scaly patches on the scalp.',
        'Itching and irritation.',
        'Broken hairs or patchy hair loss.',
        'Tender areas or inflammation.',
        'Swollen lymph nodes in some cases.',
      ],
      note: 'Scalp ringworm requires medical assessment because it generally needs prescription oral antifungal medicine. Creams alone are not sufficient to treat the infection inside the hair follicles.',
    },
    {
      number: '03',
      title: '3. Ringworm of the Feet (Tinea Pedis)',
      badge: "Athlete's Foot",
      paragraphs: [
        "Commonly called athlete's foot, this infection affects the skin between the toes and sometimes the soles of the feet.",
        'Symptoms may include itching, peeling, cracking, burning sensations and scaling. Wearing damp footwear for long periods can create conditions that encourage fungal growth.',
      ],
      bullets: [] as string[],
    },
    {
      number: '04',
      title: '4. Ringworm of the Groin (Tinea Cruris)',
      badge: 'Jock Itch',
      paragraphs: [
        'Tinea cruris, also known as jock itch, affects the groin and nearby skin folds. It may cause an itchy, reddish or darker rash that spreads towards the inner thighs.',
        'Sweating, friction and moisture can contribute to the development and spread of this infection.',
      ],
      bullets: [] as string[],
    },
    {
      number: '05',
      title: '5. Ringworm of the Nails',
      badge: 'Fungal Nail Infection',
      paragraphs: [
        'Fungal nail infections may cause nails to become thick, discoloured, brittle or uneven. Nail infections can take longer to treat than ordinary skin infections and often require specific medical evaluation.',
      ],
      bullets: [] as string[],
    },
  ];

  // 6 Common Causes of Ringworm
  const commonCauses = [
    {
      title: 'Direct Contact With an Infected Person',
      desc: 'Ringworm can spread through skin-to-skin contact with someone who has an active fungal infection. Close contact may increase the possibility of transmission.',
    },
    {
      title: 'Contact With Infected Animals',
      desc: 'Cats, dogs and other animals can carry dermatophyte fungi. People may develop ringworm after touching an infected animal or contaminated surfaces. If a pet has patches of missing fur or suspicious skin lesions, seek advice from a veterinarian.',
    },
    {
      title: 'Sharing Personal Belongings',
      desc: 'Sharing towels, clothing, socks, footwear, combs and bedsheets can increase the risk of fungal transmission.',
    },
    {
      title: 'Warm and Moist Conditions',
      desc: 'Fungi grow well in warm, humid environments. Sweaty clothing, damp footwear and poorly dried skin folds can create favourable conditions for fungal growth.',
    },
    {
      title: 'Contaminated Surfaces',
      desc: 'Fungal spores may remain on contaminated surfaces and objects. Shared changing areas, sports equipment and damp floors can contribute to transmission.',
    },
    {
      title: 'Reduced Immune Defences',
      desc: 'People with weakened immune systems may be more vulnerable to fungal infections or may experience more complicated symptoms.',
    },
  ];

  // 8 Common Ringworm Symptoms
  const ringwormSymptoms = [
    'Circular or irregular skin patches.',
    'Persistent itching.',
    'Redness or darker discolouration.',
    'Raised or scaly rash borders.',
    'Dry, peeling or cracked skin.',
    'Multiple patches appearing in different areas.',
    'Scalp scaling and patchy hair loss.',
    'Thickened or discoloured nails.',
  ];

  // 7 Diagnosis Assessment Factors
  const assessmentFactors = [
    'The location and appearance of the rash.',
    'How long the symptoms have been present.',
    'Whether the infection is spreading.',
    'Previous episodes of fungal infection.',
    'Any medicines or creams already used.',
    'Possible contact with infected people or animals.',
    'Existing medical conditions and immune-system concerns.',
  ];

  // 7 Topics to Discuss During Consultation
  const consultationTopics = [
    'The location and duration of the skin rash.',
    'Whether itching or irritation is increasing.',
    'Previous fungal infection diagnoses.',
    'Medicines and creams currently being used.',
    'Any history of recurring skin problems.',
    'Whether laboratory testing has been performed.',
    'Whether a dermatologist has evaluated the condition.',
  ];

  // 5 Criteria for Choosing a Ring worm Doctor in Puthanathani
  const doctorSelectionCriteria = [
    {
      number: '01',
      title: 'Check Professional Qualifications',
      desc: "Verify the practitioner's recognised educational qualifications, professional registration and experience. A dermatologist is the appropriate specialist for diagnosing and managing complex or persistent skin infections.",
    },
    {
      number: '02',
      title: 'Look for Proper Diagnostic Guidance',
      desc: 'A suitable healthcare provider should assess the affected area and recommend testing when necessary rather than making assumptions based only on appearance.',
    },
    {
      number: '03',
      title: 'Understand the Recommended Treatment',
      desc: "Ask about the purpose, duration and possible side effects of any proposed treatment. Antifungal medicines should be used according to the healthcare professional's instructions or the product label.",
    },
    {
      number: '04',
      title: 'Avoid Unrealistic Claims',
      desc: 'Be cautious of anyone promising guaranteed or permanent results through a particular remedy. Persistent fungal infections may require reassessment and a change in medical treatment.',
    },
    {
      number: '05',
      title: 'Discuss Previous Treatments',
      desc: 'Inform the healthcare professional about all creams, medicines and home remedies you have already tried. This information may help identify inappropriate treatment or possible reasons for recurrence.',
    },
  ];

  // 4 Evidence-Based Ringworm Treatment Options
  const evidenceBasedOptions = [
    {
      title: 'Topical Antifungal Medicines',
      badge: 'Mild Skin Infections',
      paragraphs: [
        'Mild ringworm infections affecting the skin are often treated with antifungal creams, ointments, lotions or powders.',
        'Common antifungal ingredients include clotrimazole, miconazole, terbinafine and ketoconazole. The appropriate product and treatment duration should follow professional advice or the product instructions.',
        'Continue treatment for the recommended duration, even if the rash begins to improve earlier.',
      ],
      warning: false,
    },
    {
      title: 'Oral Antifungal Medicines',
      badge: 'Prescription Therapy',
      paragraphs: [
        'Prescription oral antifungal medicines may be needed for scalp infections, nail infections, extensive disease or infections that do not respond to topical treatment.',
        "The medicine and duration depend on the diagnosis and the patient's medical history. Do not take oral antifungal medicines without appropriate medical guidance.",
      ],
      warning: false,
    },
    {
      title: 'Scalp and Nail Infections',
      badge: 'Specialist Evaluation',
      paragraphs: [
        'Scalp ringworm usually requires prescription oral antifungal treatment. Nail fungal infections may also need prolonged, diagnosis-specific treatment.',
        'These conditions should be assessed by a qualified healthcare professional rather than managed with skin creams alone.',
      ],
      warning: false,
    },
    {
      title: 'Avoid Unsuitable Steroid Creams',
      badge: 'Critical Safety Precaution',
      paragraphs: [
        'Some combination creams contain corticosteroids. Using steroid-containing creams on suspected ringworm without appropriate medical advice can worsen the infection, change its appearance and make diagnosis more difficult.',
      ],
      warning: true,
    },
  ];

  // 7 Prevention Practices
  const preventionPractices = [
    {
      title: 'Keep the Skin Clean and Dry',
      desc: 'Wash affected areas gently and dry them carefully, especially between the toes and around skin folds.',
      icon: Droplets,
    },
    {
      title: 'Avoid Sharing Personal Items',
      desc: 'Do not share towels, clothing, socks, footwear, combs or other personal belongings that may carry fungal spores.',
      icon: Ban,
    },
    {
      title: 'Wash Clothing and Bedding Regularly',
      desc: 'Clean towels, bedsheets, socks and clothing regularly. Avoid leaving damp garments in closed spaces for long periods.',
      icon: Sparkles,
    },
    {
      title: 'Wear Breathable Clothing',
      desc: 'Choose comfortable clothing that allows air circulation. Change out of sweaty clothes as soon as practical.',
      icon: Shirt,
    },
    {
      title: 'Maintain Foot Hygiene',
      desc: 'Keep feet clean and dry. Wear suitable footwear in shared showers, changing rooms and swimming pool areas.',
      icon: Footprints,
    },
    {
      title: 'Avoid Scratching the Rash',
      desc: 'Scratching may spread the infection to nearby skin and increase irritation. Wash your hands after touching the affected area or applying medication.',
      icon: Hand,
    },
    {
      title: 'Address Possible Sources of Infection',
      desc: 'If a household member or pet has a suspected fungal infection, seek appropriate assessment and treatment to reduce the possibility of reinfection.',
      icon: Home,
    },
  ];

  // 10 Frequently Asked Questions
  const faqs = [
    {
      q: '1. What is ringworm?',
      a: 'Ringworm is a contagious fungal infection caused by dermatophytes. It commonly produces an itchy, scaly rash that may appear circular or ring-shaped.',
    },
    {
      q: '2. Is ringworm caused by a worm?',
      a: 'No. Despite its name, ringworm is caused by fungi and has no connection with parasitic worms.',
    },
    {
      q: '3. Can ringworm spread from one person to another?',
      a: 'Yes. It can spread through direct skin contact and by sharing contaminated towels, clothing, bedding and personal belongings.',
    },
    {
      q: '4. What is the standard treatment for ringworm?',
      a: 'Antifungal medicines are the established treatment. Mild skin infections may respond to topical antifungal products, while scalp, nail or extensive infections may require prescription treatment.',
    },
    {
      q: '5. Is homoeopathy effective for ringworm?',
      a: 'Homoeopathy has not been reliably established as an effective treatment for ringworm. It should not replace antifungal medicines or delay appropriate medical care.',
    },
    {
      q: '6. Can ringworm affect the scalp?',
      a: 'Yes. Scalp ringworm can cause scaling, itching, broken hairs and patchy hair loss. It usually requires prescription oral antifungal medication.',
    },
    {
      q: '7. Can ringworm return after treatment?',
      a: 'Yes. Reinfection can occur through contact with infected people, animals or contaminated belongings. Following the recommended treatment and maintaining good hygiene can help reduce the risk.',
    },
    {
      q: '8. Should I use steroid cream for ringworm?',
      a: 'Do not use steroid-containing creams for suspected ringworm unless a qualified healthcare professional specifically advises them for an appropriate reason. Steroids can worsen fungal infections.',
    },
    {
      q: '9. When should I consult a dermatologist?',
      a: 'Seek medical advice if the infection spreads, affects the scalp or nails, becomes painful, develops significant inflammation or does not improve with appropriate antifungal treatment. People with weakened immune systems should seek professional advice promptly.',
    },
    {
      q: '10. How can I find suitable Ring worm Treatment in Puthanathani?',
      a: 'Look for a qualified healthcare professional who can assess the rash, recommend appropriate testing and guide you towards evidence-based antifungal treatment.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Ringworm Treatment Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Puthanathani for Ring worm Treatment"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        badgeText="RINGWORM & FUNGAL SKIN CARE GUIDE • PUTHANATHANI"
        title="Homoeopathic Clinic in Puthanathani for Ring worm Treatment"
        subtitle="An educational patient guide explaining ringworm (tinea / dermatophytosis) types across body, scalp, feet, groin and nails, how fungal infections spread, why avoiding steroid creams matters, evidence-based antifungal care, hygiene prevention, and 10 FAQs in Puthanathani."
        metrics={[
          { label: 'Puthanathani Branch', value: 'Kurumbathur, Malappuram' },
          { label: 'Second Branch', value: 'Kuttippuram Clinic' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
        ]}
        doctorSubtitle="BHMS Homoeopathic Practitioner • Skin & Scalp Consultations"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides attentive skin consultations at Anjali Homoeo Clinic in Puthanathani (Chembayil Complex, opp. Thavakkal Gold) and Kuttippuram—reviewing recurring rashes, previous creams, and guiding timely dermatologist and antifungal care whenever needed."
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
              Skin infections can cause discomfort, itching, irritation and concerns about appearance. One common skin condition affecting people of different age groups is ringworm, also known as tinea or dermatophytosis. Despite its name, ringworm is not caused by a worm. It is a fungal infection that can affect the skin, scalp, feet, groin and nails.
            </p>
            <p>
              Ringworm often appears as a circular or ring-shaped rash with a raised, scaly border. It may cause persistent itching and can spread to other parts of the body or other people through direct contact and contaminated personal belongings. Although it is a common condition, timely diagnosis and appropriate treatment are important to prevent the infection from spreading.
            </p>
            <p>
              People searching for a <strong>Homoeopathic Clinic in Puthanathani for Ring worm Treatment</strong> may be looking for guidance about recurring skin infections, itching or fungal-related symptoms. Understanding the nature of the infection, its possible causes and scientifically supported treatment options is essential before choosing a healthcare approach.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                This guide explains ringworm symptoms, different types of fungal infections, prevention methods and treatment considerations. It also discusses what to know when exploring <strong>Ring worm Treatment in Puthanathani</strong> and choosing a healthcare professional.
              </div>
            </div>
          </div>
        </section>

        {/* 10 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Essential Patient Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Core facts on dermatophyte fungal infections, established antifungal therapy, avoiding steroid creams, and hygiene prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-sm mb-3">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Is Ringworm? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Info className="w-3.5 h-3.5" />
            <span>Condition Overview</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            What Is Ringworm?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Ringworm is a fungal skin infection caused by dermatophytes, a group of fungi that grow on keratin, a protein found in the skin, hair and nails. The infection is commonly identified by a circular or irregular rash that may have a scaly outer edge.
            </p>
            <p>
              The appearance can vary depending on the affected body area and individual skin tone. Some people experience mild itching, while others develop larger, spreading patches with noticeable irritation.
            </p>
            <p>
              Ringworm is contagious and can spread through contact with an infected person, animal or contaminated object. It is more likely to spread in warm, moist environments where fungi can thrive.
            </p>
            <p className="font-medium text-slate-900">
              If you notice a persistent circular rash or unexplained itching, consider seeking professional medical assessment rather than assuming that every skin rash is ringworm.
            </p>
          </div>
        </section>

        {/* Common Types of Ringworm */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Clinical Presentations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common Types of Ringworm
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ringworm can affect different parts of the body. The medical name often changes according to the infected area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ringwormTypes.map((type, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 bg-slate-50 border border-slate-200 space-y-3 ${
                  idx === 1 ? 'md:col-span-2' : ''
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
                {type.bullets.length > 0 && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                    {type.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {type.note && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed">
                    {type.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Common Causes of Ringworm */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Transmission &amp; Risk Factors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common Causes of Ringworm
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Understanding how ringworm develops can help people reduce their risk of infection and recurrence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonCauses.map((cause, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{cause.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Symptoms That May Indicate Ringworm */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Recognising Symptoms
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Symptoms That May Indicate Ringworm
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ringworm symptoms vary according to the infected body area, but common signs include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {ringwormSymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-sm text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm font-medium leading-relaxed">
            Not every circular rash is ringworm. Conditions such as eczema, psoriasis and other skin disorders may have similar appearances. A qualified healthcare professional can help determine the cause and recommend appropriate testing when needed.
          </div>
        </section>

        {/* Why Accurate Diagnosis Matters & Exploring Homoeopathic Ring worm Treatment */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Why Accurate Diagnosis Matters */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Accurate Diagnosis</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ring worm Problem Treatment in Puthanathani: Why Accurate Diagnosis Matters
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Choosing the correct treatment begins with identifying the infection. Some skin conditions resemble ringworm, and using an unsuitable cream may delay recovery or make symptoms worse.
            </p>
            <p className="text-sm font-semibold text-slate-900">
              A healthcare professional may assess:
            </p>
            <ul className="space-y-2.5">
              {assessmentFactors.map((pt, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              In certain cases, a skin scraping, nail sample or other laboratory test may be recommended to confirm a fungal infection.
            </p>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm font-medium leading-relaxed">
              If you are looking for <strong>Ring worm Treatment in Puthanathani</strong>, prioritise a proper diagnosis and treatment plan rather than relying only on the appearance of the rash.
            </div>
          </div>

          {/* Right Card: Exploring Homoeopathic Ring worm Treatment + What to Discuss */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Evidence &amp; Limitations</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Exploring Homoeopathic Ring worm Treatment in Puthanathani
              </h2>
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Some people experiencing recurring skin problems may explore alternative healthcare approaches, including homoeopathy. Searches for <strong>Homoeopathic Ring worm Treatment in Puthanathani</strong> may reflect an interest in discussing individual symptoms, previous treatment experiences and different healthcare options.
                </p>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2 text-sm">
                  <p className="font-semibold text-purple-900">
                    Important Evidence Disclosure
                  </p>
                  <p>
                    Homoeopathy is an alternative system of medicine based on principles such as individualised remedy selection. However, it has not been reliably established as an effective treatment for ringworm or as a replacement for antifungal medicines.
                  </p>
                </div>
                <p>
                  Ringworm is caused by dermatophyte fungi, and established treatment involves appropriate antifungal medication. Delaying effective treatment may allow the infection to spread to other body areas or people. Anyone considering a homoeopathic consultation should understand these limitations and should not discontinue prescribed antifungal treatment or delay medical assessment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Consultation Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                What to Discuss During a Consultation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you are considering visiting a <strong>Ring worm Homoeopathy Clinic in Puthanathani</strong>, useful topics to discuss include:
              </p>
              <ul className="space-y-2">
                {consultationTopics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                A responsible practitioner should explain the limitations of homoeopathy and recommend appropriate medical referral when necessary.
              </p>
            </div>
          </div>
        </section>

        {/* Choosing a Ring worm Doctor in Puthanathani */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Doctor Selection Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Choosing a Ring worm Doctor in Puthanathani
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Selecting a suitable healthcare professional is important when dealing with an infectious skin condition. If you are searching for a <strong>Ring worm Doctor in Puthanathani</strong> or a <strong>Ring worm Specialist in Puthanathani</strong>, consider the following factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorSelectionCriteria.map((crit, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
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
        </section>

        {/* Evidence-Based Ringworm Treatment Options */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-teal-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Antifungal Medical Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Evidence-Based Ringworm Treatment Options
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              The established treatment for ringworm involves antifungal medicines. The appropriate medicine depends on the infected body area, severity and individual health factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border space-y-3 ${
                  opt.warning
                    ? 'bg-rose-950/70 border-rose-400/40'
                    : 'bg-white/10 border-white/15'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-bold uppercase px-3 py-1 rounded-full border ${
                      opt.warning
                        ? 'bg-rose-500/20 text-rose-200 border-rose-400/40'
                        : 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30'
                    }`}
                  >
                    {opt.badge}
                  </span>
                  {opt.warning ? (
                    <AlertTriangle className="w-5 h-5 text-rose-300 shrink-0" />
                  ) : (
                    <Pill className="w-5 h-5 text-emerald-300 shrink-0" />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{opt.title}</h3>
                <div className="space-y-2 text-indigo-100 text-xs sm:text-sm leading-relaxed">
                  {opt.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ring worm Issues Treatment in Puthanathani: Preventing Infection and Recurrence */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Hygiene &amp; Prevention
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Ring worm Issues Treatment in Puthanathani: Preventing Infection and Recurrence
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Good hygiene practices can reduce the risk of spreading ringworm and developing another infection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionPractices.map((practice, idx) => {
              const Icon = practice.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between ${
                    idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {practice.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Homoeopathy Clinic for Ring worm Problems in Puthanathani: What Should You Expect? */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Shield className="w-3.5 h-3.5" />
            <span>Clinic Expectations</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Homoeopathy Clinic for Ring worm Problems in Puthanathani: What Should You Expect?
          </h2>
          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for a <strong>Homoeopathy Clinic for Ring worm Problems in Puthanathani</strong> may want to discuss recurring skin concerns and understand different approaches to healthcare.
            </p>
            <p>
              A responsible consultation should include a discussion of symptoms, previous diagnoses, medicines and medical history. If homoeopathic care is being considered, its limitations should be clearly explained.
            </p>
            <p>
              Since ringworm is a fungal infection, consultation with a qualified medical practitioner or dermatologist is important for confirming the diagnosis and accessing appropriate antifungal treatment.
            </p>
            <p>
              When comparing a <strong>Ring worm Health Clinic in Puthanathani</strong> or a <strong>Ring worm Care Clinic in Puthanathani</strong>, check the qualifications of the healthcare professionals and whether appropriate diagnosis, treatment and referral are available.
            </p>
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
              Clear answers about ringworm causes, transmission, standard antifungal treatment, steroid cream risks, scalp ringworm, and dermatologist referral in Puthanathani.
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

        {/* Conclusion & Booking Engine */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Informed Skin Health
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Conclusion: Choose Informed Care for Better Skin Health
            </h2>
            <div className="space-y-3 text-indigo-100 text-sm sm:text-base leading-relaxed text-left sm:text-center">
              <p>
                Ringworm is a common but contagious fungal infection that can affect several parts of the body. Although it may begin as a small itchy patch, it can spread if not managed appropriately. Recognising the symptoms, understanding possible sources of infection and following good hygiene practices are important steps towards preventing further spread.
              </p>
              <p>
                If you are searching for a <strong>Homoeopathic Clinic in Puthanathani for Ring worm Treatment</strong>, make sure you understand the practitioner&apos;s qualifications and the limitations of the proposed approach. Homoeopathy has not been reliably established as an effective treatment for fungal infections and should not replace proven antifungal care.
              </p>
              <p>
                For anyone exploring <strong>Ring worm Treatment in Puthanathani</strong>, accurate diagnosis and appropriate medical treatment should remain the priority. A qualified healthcare professional can help identify the infection, recommend suitable antifungal medicines and guide you on preventing recurrence.
              </p>
              <p className="font-semibold text-emerald-300">
                Healthy skin care begins with informed decisions, responsible treatment and timely medical attention.
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

        {/* Puthanathani Clinic Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Practitioner Profile</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) provides attentive skin consultations, recurring-rash reviews, and transparent guidance on dermatologist and antifungal care.
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
        <RegionalRelatedGuides currentGuideKey="ringworm-treatment-puthanathani" />
      </main>
    </div>
  );
};
