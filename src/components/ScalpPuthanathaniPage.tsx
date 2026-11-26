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
  Utensils,
  AlertCircle,
  Activity,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const ScalpPuthanathaniPage: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details (Puthanathani primary + Kuttippuram secondary)
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about a scalp consultation at Anjali Homoeo Clinic in Puthanathani.'
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
    navigateToBookingWithReason('Scalp Health Consultation - Puthanathani', 'clinic');
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
      title: 'Range of Scalp Symptoms',
      desc: 'Scalp problems may include dandruff, itching, dryness, redness, scaling and excessive oiliness.',
    },
    {
      title: 'Accurate Diagnosis Matters',
      desc: 'Different scalp conditions can produce similar symptoms, making proper diagnosis important.',
    },
    {
      title: 'Dermatologist Assessment',
      desc: 'Persistent itching, inflammation, pain, unusual scaling or hair loss should be assessed by a qualified dermatologist.',
    },
    {
      title: 'Scientific Evidence Limitations',
      desc: 'People exploring Homoeopathic Scalp Treatment in Puthanathani should understand the current limitations of scientific evidence.',
    },
    {
      title: 'Continue Prescribed Care',
      desc: 'Homoeopathy should not replace prescribed medicines or evidence-based treatment.',
    },
    {
      title: 'Gentle Scalp Hygiene',
      desc: 'Gentle scalp hygiene and suitable hair-care products can help support scalp comfort.',
    },
    {
      title: 'Prevent Complications Early',
      desc: 'Early medical assessment can help prevent certain scalp conditions from becoming more complicated.',
    },
  ];

  // 9 Common Scalp Symptoms
  const scalpSymptoms = [
    'Persistent itching or irritation',
    'White or yellowish flakes',
    'Dryness and rough scalp skin',
    'Excessive oiliness',
    'Redness and inflammation',
    'Scalp tenderness or discomfort',
    'Thick patches or scaling',
    'Small bumps or pimples on the scalp',
    'Unusual hair shedding or hair loss',
  ];

  // 6 Common Causes of Scalp Problems
  const commonScalpCauses = [
    {
      number: '01',
      title: '1. Dandruff',
      badge: 'Flaking & Itching',
      paragraphs: [
        'Dandruff is a common scalp concern characterised by visible flakes and itching. It may be associated with seborrhoeic dermatitis, skin oiliness and sensitivity to certain products. Symptoms can vary from mild flaking to more noticeable scaling and irritation.',
        'Appropriate anti-dandruff shampoos and other evidence-based treatments may help manage dandruff, depending on its cause and severity.',
      ],
    },
    {
      number: '02',
      title: '2. Dry Scalp',
      badge: 'Reduced Scalp Moisture',
      paragraphs: [
        'A dry scalp may feel tight, uncomfortable or itchy. It can sometimes produce small flakes that resemble dandruff. Cold weather, frequent washing, harsh shampoos and unsuitable hair-care products may contribute to dryness.',
        'Using gentle cleansing products and avoiding excessive washing may help reduce irritation. Persistent dryness should be medically assessed.',
      ],
    },
    {
      number: '03',
      title: '3. Seborrhoeic Dermatitis',
      badge: 'Inflammatory Scalp Condition',
      paragraphs: [
        'Seborrhoeic dermatitis is a common inflammatory skin condition that can affect the scalp. It may cause redness, itching and greasy or flaky scales. Symptoms can come and go, and some people experience recurring episodes.',
        'A dermatologist can recommend appropriate treatment based on the severity and location of the condition.',
      ],
    },
    {
      number: '04',
      title: '4. Scalp Psoriasis',
      badge: 'Thickened Scaly Patches',
      paragraphs: [
        'Scalp psoriasis is an inflammatory condition that may cause thick, raised patches covered with scales. It can lead to itching, discomfort and temporary hair shedding when inflammation or scratching is significant.',
        'Scalp psoriasis requires proper medical evaluation and an appropriate management plan.',
      ],
    },
    {
      number: '05',
      title: '5. Scalp Folliculitis',
      badge: 'Hair Follicle Inflammation',
      paragraphs: [
        'Folliculitis occurs when hair follicles become inflamed. It may cause small bumps, redness, tenderness or pus-filled spots. In some cases, bacteria or other microorganisms may be involved.',
        'Avoid squeezing or scratching affected areas. Medical assessment is important, particularly when the condition is painful, spreading or associated with discharge.',
      ],
    },
    {
      number: '06',
      title: '6. Allergic Reactions and Product Sensitivity',
      badge: 'Contact Dermatitis',
      paragraphs: [
        'Certain shampoos, conditioners, hair dyes, oils and styling products may cause irritation or allergic contact dermatitis. Symptoms can include itching, redness, swelling and scaling.',
        'Stopping a suspected irritating product may help, but persistent or severe symptoms should be assessed by a healthcare professional.',
      ],
    },
  ];

  // 6 Professional Assessment Points
  const assessmentPoints = [
    'Understanding when the symptoms started.',
    'Identifying the location and appearance of affected areas.',
    'Reviewing previous scalp treatments and hair-care products.',
    'Checking for redness, scaling, inflammation or signs of infection.',
    'Assessing whether hair loss is occurring alongside scalp symptoms.',
    'Recommending further tests or specialist evaluation when necessary.',
  ];

  // 5 Criteria for Choosing a Scalp Homoeopathy Clinic
  const clinicSelectionCriteria = [
    {
      number: '01',
      title: 'Qualified Practitioner',
      desc: "Check the practitioner's recognised qualifications, registration and professional experience. Make sure you understand the scope of their practice.",
    },
    {
      number: '02',
      title: 'Clear Communication',
      desc: 'A consultation should allow you to explain your symptoms, concerns and previous treatment experiences. You should receive clear information about the available options and their limitations.',
    },
    {
      number: '03',
      title: 'Responsible Treatment Information',
      desc: 'Be cautious of claims promising guaranteed results, permanent cures or immediate relief from every scalp condition. No responsible healthcare provider should guarantee an outcome without considering the diagnosis and individual circumstances.',
    },
    {
      number: '04',
      title: 'Medical Referral When Necessary',
      desc: 'A practitioner should recognise when symptoms require assessment by a dermatologist or another medical specialist. Scalp infections, severe inflammation and unexplained hair loss may need specific medical investigation.',
    },
    {
      number: '05',
      title: 'Transparent Consultation Process',
      desc: 'Before starting any treatment, understand the consultation process, expected follow-up and any costs involved. Ask questions if information is unclear.',
    },
  ];

  // 8 Warning Signs to Consult a Scalp Doctor
  const doctorConsultSigns = [
    'Persistent itching that does not improve.',
    'Severe redness, swelling or irritation.',
    'Painful bumps, pus or discharge.',
    'Thick or spreading patches of scaling.',
    'Sudden or unexplained hair loss.',
    'Broken hairs or patchy areas of hair loss.',
    'Scalp sores, bleeding or crusting.',
    'Symptoms that continue despite using suitable products.',
  ];

  // 5 Hair & Scalp Distinction Points
  const hairScalpDistinctions = [
    'Hair shedding associated with temporary illness or stress.',
    'Hair loss related to hereditary factors.',
    'Hair changes associated with nutritional deficiencies.',
    'Hair shedding caused by scalp inflammation.',
    'Hair loss related to infections or other skin conditions.',
  ];

  // 7 Simple Daily Scalp Care Tips
  const dailyScalpTips = [
    {
      title: '1. Choose Suitable Hair-Care Products',
      desc: 'Select shampoos and conditioners appropriate for your hair and scalp type. If a product causes burning, itching or redness, stop using it and seek advice if symptoms continue.',
      icon: Droplets,
    },
    {
      title: '2. Avoid Excessive Scratching',
      desc: 'Scratching can damage the skin and increase irritation. It may also introduce infection when the skin becomes broken.',
      icon: Hand,
    },
    {
      title: '3. Maintain Regular Scalp Hygiene',
      desc: "Wash your hair according to your scalp's needs. Avoid allowing excessive oil, sweat and product residue to accumulate.",
      icon: Sparkles,
    },
    {
      title: '4. Be Careful with Hair Dyes',
      desc: 'Hair dyes and chemical treatments may cause irritation or allergic reactions. Follow product instructions and seek professional advice if you have experienced previous reactions.',
      icon: AlertCircle,
    },
    {
      title: '5. Avoid Sharing Personal Hair-Care Items',
      desc: 'Do not share combs, brushes, towels or other personal grooming items, particularly when a contagious scalp infection is suspected.',
      icon: Shield,
    },
    {
      title: '6. Maintain a Balanced Diet',
      desc: 'A balanced diet supports general health and normal hair growth. Include a variety of nutritious foods and seek medical advice if you suspect a nutritional deficiency.',
      icon: Utensils,
    },
    {
      title: '7. Avoid Unnecessary Treatments',
      desc: 'Using multiple shampoos, oils and scalp products at the same time can make it difficult to identify the cause of irritation. Introduce products carefully and avoid unverified remedies.',
      icon: Ban,
    },
  ];

  // 8 Things to Discuss During Consultation
  const consultationTopics = [
    'How long you have experienced the scalp problem.',
    'Whether itching, flaking or redness is present.',
    'Whether the symptoms are occasional or continuous.',
    'Any hair shedding or changes in hair growth.',
    'Products or treatments you have already tried.',
    'Known allergies or skin sensitivities.',
    'Any previous diagnosis from a dermatologist.',
    'Medicines you are currently using.',
  ];

  // 6 Good Consultation Expectations
  const goodConsultationOutcomes = [
    'The possible causes of your symptoms.',
    'Whether your condition requires specialist diagnosis.',
    'Which treatment options are supported by medical evidence.',
    'How to maintain scalp hygiene.',
    'When to return for follow-up.',
    'Which warning signs require further medical attention.',
  ];

  // 8 Frequently Asked Questions
  const faqs = [
    {
      q: '1. What are the common symptoms of scalp problems?',
      a: 'Common symptoms include itching, dandruff, dryness, redness, scaling, excessive oiliness, irritation, painful bumps and unusual hair shedding. The symptoms may vary depending on the underlying condition.',
    },
    {
      q: '2. Where can I find Scalp Treatment in Puthanathani?',
      a: 'You can research local healthcare providers and dermatology services in Puthanathani. Check practitioner qualifications, available services and patient-care information before choosing a provider.',
    },
    {
      q: '3. Is Homoeopathic Scalp Treatment in Puthanathani effective?',
      a: 'There is currently no reliable scientific evidence establishing homoeopathy as an effective treatment for scalp disorders. It should not replace evidence-based medical treatment or delay consultation with a dermatologist.',
    },
    {
      q: '4. When should I consult a Scalp Doctor in Puthanathani?',
      a: 'Consult a qualified doctor if you experience persistent itching, severe scaling, redness, painful bumps, sores, discharge or unexplained hair loss. Sudden or worsening symptoms should be assessed promptly.',
    },
    {
      q: '5. Can dandruff cause hair loss?',
      a: 'Ordinary dandruff does not usually cause permanent hair loss. However, significant itching and repeated scratching may contribute to temporary hair shedding or breakage. Persistent hair loss requires medical assessment.',
    },
    {
      q: '6. What is the difference between dry scalp and dandruff?',
      a: 'A dry scalp is generally associated with reduced skin moisture, while dandruff is often associated with flaking and changes in scalp skin activity. Both can cause itching, so persistent symptoms may need professional evaluation.',
    },
    {
      q: '7. How can I maintain a healthy scalp?',
      a: 'Use suitable hair-care products, maintain regular scalp hygiene, avoid excessive scratching, limit irritating chemical treatments and seek medical advice for persistent symptoms.',
    },
    {
      q: '8. Should I consult a dermatologist for recurring scalp problems?',
      a: 'Yes. Recurring scalp problems should be evaluated by a dermatologist to identify the cause and determine appropriate treatment. Some conditions require prescription medication or specific medical care.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Scalp Treatment Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Puthanathani for Scalp Treatment"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        badgeText="SCALP HEALTH & CONSULTATION GUIDE • PUTHANATHANI"
        title="Homoeopathic Clinic in Puthanathani for Scalp Treatment"
        subtitle="An educational patient guide explaining common scalp concerns (dandruff, dry scalp, seborrhoeic dermatitis, scalp psoriasis, folliculitis, and product sensitivity), why accurate diagnosis matters, daily scalp hygiene habits, warning signs, and evidence-aware healthcare decisions in Puthanathani."
        metrics={[
          { label: 'Puthanathani Branch', value: 'Kurumbathur, Malappuram' },
          { label: 'Second Branch', value: 'Kuttippuram Clinic' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
        ]}
        doctorSubtitle="BHMS Homoeopathic Practitioner • Scalp & Hair Consultations"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides attentive consultations at Anjali Homoeo Clinic in Puthanathani (Chembayil Complex, opp. Thavakkal Gold) and Kuttippuram—discussing scalp symptoms, hair-care routines, and guiding timely dermatologist referrals whenever specialist care is needed."
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
              A healthy scalp is essential for maintaining healthy hair and overall scalp comfort. However, many people experience scalp-related concerns such as dandruff, itching, dryness, excessive oiliness, flaking, redness, irritation and recurring scalp discomfort. These problems can affect daily routines, confidence and hair-care habits. Finding the right professional guidance is an important step towards understanding the cause of these concerns and choosing suitable care.
            </p>
            <p>
              If you are looking for a <strong>Homoeopathic Clinic in Puthanathani for Scalp Treatment</strong>, it is important to understand your scalp condition and explore appropriate treatment options with a qualified healthcare professional. Scalp problems can develop for several reasons, including skin conditions, infections, allergies, environmental factors and unsuitable hair-care products. Identifying the underlying cause helps determine the most appropriate approach.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                People searching for <strong>Scalp Treatment in Puthanathani</strong> may be interested in understanding different approaches to scalp care, including homoeopathy. A consultation can provide an opportunity to discuss symptoms, medical history and previous treatments. However, it is important to remember that scientific evidence has not established homoeopathy as an effective treatment for scalp disorders. It should not replace proven medical care or delay an assessment by a dermatologist.
              </div>
            </div>
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
              Core facts on scalp symptoms, proper diagnosis, scientific evidence limitations, and gentle scalp hygiene.
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

        {/* Understanding Common Scalp Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Symptoms Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Understanding Common Scalp Problems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The scalp is the skin covering the upper part of the head. Like other areas of the skin, it can develop several conditions that cause discomfort and visible changes. Some scalp problems are temporary, while others may require ongoing medical management.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Common symptoms include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {scalpSymptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            If you experience these symptoms regularly, seeking <strong>Scalp problem Treatment in Puthanathani</strong> can be a useful starting point for finding professional guidance. A healthcare professional can help assess whether the symptoms are related to a common skin condition, an infection, an allergic reaction or another underlying concern.
          </p>
        </section>

        {/* Common Causes of Scalp Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Underlying Causes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Common Causes of Scalp Problems
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Scalp conditions can have different causes. Understanding these factors is important before selecting any treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonScalpCauses.map((cause, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    {cause.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cause.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{cause.title}</h3>
                <div className="space-y-2.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {cause.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Professional Assessment Matters & Exploring Homoeopathic Scalp Treatment */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Why Professional Assessment Matters */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinical Evaluation</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Why Professional Assessment Matters for Scalp Health
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Many scalp conditions look similar but require different treatments. For example, dandruff, psoriasis, fungal infections and allergic reactions may all cause itching and scaling. Using an unsuitable product can sometimes make symptoms worse.
            </p>
            <p className="text-sm font-semibold text-slate-900">
              A professional assessment may involve:
            </p>
            <ul className="space-y-2.5">
              {assessmentPoints.map((pt, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm font-medium leading-relaxed">
              People searching for a <strong>Scalp Specialist in Puthanathani</strong> should consider the practitioner&apos;s qualifications and experience. A dermatologist is a medical specialist trained to diagnose and manage skin, hair and nail conditions.
            </div>
          </div>

          {/* Right Card: Exploring Homoeopathic Scalp Treatment */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Evidence &amp; Limitations</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Exploring Homoeopathic Scalp Treatment in Puthanathani
              </h2>
              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Some individuals explore homoeopathy when looking for additional approaches to personal healthcare. If you are considering <strong>Homoeopathic Scalp Treatment in Puthanathani</strong>, it is important to understand what a consultation may involve and what the available evidence says.
                </p>
                <p>
                  Homoeopathic consultations commonly involve discussing an individual&apos;s symptoms, general health history and previous treatment experiences. People may also ask about recurring scalp discomfort, dryness, itching and flaking.
                </p>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2 text-sm">
                  <p className="font-semibold text-purple-900">
                    Important Evidence Disclosure
                  </p>
                  <p>
                    There is no reliable scientific evidence that homoeopathy effectively treats common scalp disorders such as psoriasis, seborrhoeic dermatitis, fungal infections or folliculitis. Its effectiveness for these conditions has not been established through high-quality clinical evidence.
                  </p>
                </div>
                <p>
                  Homoeopathy should therefore not be presented as a proven scalp treatment. People who choose to consult a homoeopathic practitioner should continue appropriate medical care and discuss any complementary products with their qualified healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Consider When Choosing a Scalp Homoeopathy Clinic in Puthanathani */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Clinic Selection Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What to Consider When Choosing a Scalp Homoeopathy Clinic in Puthanathani
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Choosing a healthcare provider requires careful consideration, particularly when dealing with recurring scalp problems. If you are researching a <strong>Scalp Homoeopathy Clinic in Puthanathani</strong>, consider the following points:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicSelectionCriteria.map((crit, idx) => (
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

        {/* When Should You Consult a Scalp Doctor in Puthanathani? */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Warning Signs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              When Should You Consult a Scalp Doctor in Puthanathani?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Scalp symptoms should not always be treated as ordinary dandruff or dryness. Some conditions need medical attention to prevent complications. Consider consulting a qualified <strong>Scalp Doctor in Puthanathani</strong> or dermatologist if you experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {doctorConsultSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3 text-sm text-white"
              >
                <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>{sign}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-rose-100 leading-relaxed">
            A dermatologist can examine the scalp and recommend appropriate treatment. Depending on the suspected condition, additional tests may be required to identify infections or other causes.
          </p>
        </section>

        {/* Understanding the Importance of Hair and Scalp Treatment in Puthanathani */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-teal-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Hair &amp; Scalp Connection
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Understanding the Importance of Hair and Scalp Treatment in Puthanathani
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              Hair and scalp health are closely connected, but they are not exactly the same. Hair concerns may develop because of genetic factors, nutritional deficiencies, hormonal changes, medication effects or underlying medical conditions. Scalp disorders can also contribute to discomfort and, in certain cases, hair shedding.
            </p>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              People looking for <strong className="text-white">Hair and Scalp Treatment in Puthanathani</strong> should consider both scalp symptoms and changes in hair growth. A comprehensive assessment may help distinguish between:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {hairScalpDistinctions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-2.5 text-sm text-indigo-50"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-indigo-100 leading-relaxed">
            Treating the underlying cause is generally more useful than relying only on cosmetic hair products. Avoid starting supplements or medicated products without understanding whether they are suitable for your condition.
          </p>
        </section>

        {/* Simple Daily Tips for Maintaining Scalp Health */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Everyday Scalp Hygiene
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Simple Daily Tips for Maintaining Scalp Health
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Healthy scalp habits can help reduce unnecessary irritation and support general scalp hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyScalpTips.map((tip, idx) => {
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

        {/* Consultation Preparation & Individual Care (2-Column Section) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: What to Discuss During a Consultation */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Consultation Preparation</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Homoeopathic Doctor for Scalp Problems in Puthanathani: What to Discuss During a Consultation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              If you are considering speaking with a <strong>Homoeopathic Doctor for Scalp Problems in Puthanathani</strong>, prepare some basic information about your symptoms. You may wish to discuss:
            </p>
            <ul className="space-y-2.5">
              {consultationTopics.map((topic, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed">
              Being open about previous diagnoses and prescribed treatments helps avoid misunderstandings. Do not stop prescribed medication or delay a recommended medical examination because of a complementary consultation.
            </div>
          </div>

          {/* Right Card: Individual Care & Finding a Scalp Health Clinic */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Scalp Issues Treatment in Puthanathani: The Importance of Individual Care
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Not every scalp condition requires the same treatment. A person experiencing mild dandruff may need a different approach from someone with scalp psoriasis or a fungal infection. Effective care begins with identifying the likely cause. Depending on the diagnosis, treatment may involve medicated shampoos, topical medicines, antifungal medication, anti-inflammatory treatment or other specialist-recommended options.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                People searching for <strong>Scalp Issues Treatment in Puthanathani</strong> should avoid choosing treatments based only on advertisements or online recommendations. A treatment that helps one person may not be suitable for another. A qualified medical professional can help identify the condition and explain the benefits, limitations and possible side effects of recommended treatment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Finding a Scalp Health Clinic in Puthanathani
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When searching for a <strong>Scalp Health Clinic in Puthanathani</strong>, look for a healthcare provider who prioritises proper assessment, patient education and responsible treatment guidance. A good consultation experience should help you understand:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {goodConsultationOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                If you are specifically searching for a <strong>Homoeopathy Clinic for Scalp Problems in Puthanathani</strong>, make sure you understand that homoeopathy has not been proven effective for treating scalp disorders. It should only be considered, if at all, as a complementary personal choice and never as a substitute for necessary medical care.
              </p>
            </div>
          </div>
        </section>

        {/* Scalp Care Clinic in Puthanathani: Making an Informed Decision */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Shield className="w-3.5 h-3.5" />
            <span>Informed Decision Making</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Scalp Care Clinic in Puthanathani: Making an Informed Decision
          </h2>
          <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Choosing the right place for scalp-related consultation is an important decision. Before visiting a <strong>Scalp Care Clinic in Puthanathani</strong>, check the practitioner&apos;s qualifications, the services offered and whether medical referrals are recommended when needed.
            </p>
            <p>
              A trustworthy clinic should provide realistic information rather than promise guaranteed results. It should also encourage patients to seek specialist care for persistent, severe or unexplained symptoms.
            </p>
            <p>
              Whether you are experiencing dandruff, dryness, itching, scaling or unusual hair shedding, the most important step is understanding the underlying problem and choosing an appropriate care plan.
            </p>
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
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear answers regarding scalp symptoms, dandruff vs. dry scalp, scientific evidence, dermatologist care, and healthy scalp routines in Puthanathani.
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
              Responsible Scalp Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Conclusion: Choose Responsible Scalp Care in Puthanathani
            </h2>
            <div className="space-y-3 text-indigo-100 text-sm sm:text-base leading-relaxed text-left sm:text-center">
              <p>
                Scalp health plays an important role in everyday comfort and overall hair care. Conditions such as dandruff, dryness, psoriasis, dermatitis and scalp infections can cause persistent discomfort if they are not properly identified.
              </p>
              <p>
                If you are searching for a <strong>Homoeopathic Clinic in Puthanathani for Scalp Treatment</strong>, take time to understand the available healthcare options and verify the practitioner&apos;s qualifications. You may explore different approaches to personal healthcare, but it is essential to recognise that homoeopathy has not been scientifically established as an effective treatment for scalp disorders.
              </p>
              <p>
                For reliable <strong>Scalp problem Treatment in Puthanathani</strong>, prioritise accurate diagnosis, evidence-based treatment and professional guidance. A qualified dermatologist can help identify the underlying cause of your symptoms and recommend suitable care. Taking informed decisions, following appropriate scalp-care habits and seeking medical attention when necessary can help you maintain better scalp health and avoid unnecessary treatment delays.
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
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Practitioner Profile</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) provides attentive scalp and hair consultations, product-sensitivity reviews, and transparent guidance on dermatologist referrals.
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
        <RegionalRelatedGuides currentGuideKey="scalp-treatment-puthanathani" />
      </main>
    </div>
  );
};
