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
  Flame,
  Moon,
  Scissors,
  Activity,
  FileSearch,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AlopeciaPuthanathaniPage: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details (Puthanathani primary + Kuttippuram secondary)
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about an alopecia consultation at Anjali Homoeo Clinic in Puthanathani.'
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
    navigateToBookingWithReason('Alopecia & Hair Loss Consultation - Puthanathani', 'clinic');
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
      title: 'Umbrella Hair Loss Term',
      desc: 'Alopecia is a general term for hair loss and includes several different conditions.',
    },
    {
      title: 'Gradual or Patchy Onset',
      desc: 'Hair loss may occur gradually or develop suddenly in clearly defined patches.',
    },
    {
      title: 'Multiple Potential Causes',
      desc: 'Causes can include genetics, autoimmune conditions, hormonal changes, infections and nutritional deficiencies.',
    },
    {
      title: 'Early Medical Assessment',
      desc: 'Early medical assessment can help identify the type and possible cause of hair loss.',
    },
    {
      title: 'Dermatologist Guidance',
      desc: 'A qualified dermatologist can recommend evidence-based treatment based on the diagnosis.',
    },
    {
      title: 'Scientific Evidence Limits',
      desc: 'Homoeopathy has not been reliably demonstrated to treat alopecia or stimulate hair regrowth.',
    },
    {
      title: 'Do Not Delay Proven Care',
      desc: 'Do not discontinue prescribed medicines or delay effective treatment in favour of unproven remedies.',
    },
    {
      title: 'Supportive Daily Habits',
      desc: 'Gentle hair care, balanced nutrition and appropriate scalp hygiene can support general hair health.',
    },
  ];

  // 5 Types of Alopecia
  const alopeciaTypes = [
    {
      number: '01',
      title: '1. Alopecia Areata',
      badge: 'Autoimmune Patchy Loss',
      paragraphs: [
        'Alopecia areata is an autoimmune condition in which the immune system mistakenly attacks hair follicles. It commonly causes small, round or oval patches of hair loss on the scalp. In some cases, it may affect eyebrows, eyelashes, facial hair or other body areas.',
        'The extent of hair loss can vary. Some people experience limited patches, while others develop more extensive hair loss.',
      ],
    },
    {
      number: '02',
      title: '2. Androgenetic Alopecia',
      badge: 'Hereditary / Pattern Hair Loss',
      paragraphs: [
        'Androgenetic alopecia is commonly known as hereditary or pattern hair loss. It can affect both men and women.',
        'In men, hair loss often begins around the temples or crown. In women, it may appear as gradual thinning across the top of the scalp, with the frontal hairline often remaining relatively unchanged.',
        'Genetic factors and sensitivity to certain hormones contribute to this condition.',
      ],
    },
    {
      number: '03',
      title: '3. Telogen Effluvium',
      badge: 'Stress & Trigger-Related Shedding',
      paragraphs: [
        'Telogen effluvium is a form of excessive hair shedding that can occur after physical or emotional stress. Common triggers include significant illness, surgery, childbirth, rapid weight loss, nutritional deficiencies and certain medications.',
        'Hair shedding may become noticeable several weeks or months after the triggering event. Many cases improve when the underlying cause is addressed.',
      ],
    },
    {
      number: '04',
      title: '4. Traction Alopecia',
      badge: 'Mechanical Follicle Tension',
      paragraphs: [
        'Traction alopecia develops when repeated pulling or tension damages hair follicles. Tight hairstyles, frequent use of tightly secured extensions and repeated tension on the hairline may contribute to this condition.',
        'Reducing the pulling force early can help prevent further damage.',
      ],
    },
    {
      number: '05',
      title: '5. Scarring Alopecia',
      badge: 'Inflammatory Follicle Damage',
      paragraphs: [
        'Scarring alopecia refers to conditions in which inflammation damages hair follicles and replaces them with scar tissue. Hair loss may become permanent in affected areas.',
        'Early specialist assessment is particularly important when scarring alopecia is suspected.',
      ],
    },
  ];

  // 7 Common Causes of Alopecia
  const commonCauses = [
    {
      title: 'Genetic Factors',
      desc: 'Family history can influence the likelihood of developing pattern hair loss. Hereditary hair loss may progress gradually over time and affect different areas of the scalp.',
    },
    {
      title: 'Autoimmune Conditions',
      desc: 'In conditions such as alopecia areata, the immune system attacks hair follicles. The exact reason this happens is not fully understood, and the condition may develop unpredictably.',
    },
    {
      title: 'Hormonal Changes',
      desc: 'Hormonal fluctuations associated with pregnancy, childbirth, menopause and certain medical conditions may affect hair growth and shedding patterns.',
    },
    {
      title: 'Nutritional Deficiencies',
      desc: 'Insufficient iron, protein and certain other nutrients can contribute to hair shedding. Restrictive diets and rapid weight loss may also affect hair health. Nutritional supplements should only be taken when appropriate, preferably after identifying a deficiency through medical assessment.',
    },
    {
      title: 'Physical and Emotional Stress',
      desc: 'Major illness, surgery, emotional stress and significant physical changes can trigger temporary hair shedding in some individuals.',
    },
    {
      title: 'Scalp Infections and Inflammation',
      desc: 'Certain fungal infections and inflammatory scalp conditions can cause hair loss. Symptoms may include itching, redness, scaling, tenderness or broken hairs.',
    },
    {
      title: 'Medication-Related Hair Loss',
      desc: 'Some prescription medicines may cause hair shedding as a side effect. Never stop a prescribed medicine without discussing the concern with the treating healthcare professional.',
    },
  ];

  // 8 Common Symptoms of Alopecia
  const alopeciaSymptoms = [
    'Gradual thinning of hair on the scalp.',
    'Round or irregular patches of baldness.',
    'Increased hair shedding while washing or brushing.',
    'A widening parting or reduced hair density.',
    'Receding hairline or thinning around the crown.',
    'Loss of eyebrows, eyelashes or facial hair.',
    'Broken hairs or uneven hair growth.',
    'Itching, redness, scaling or discomfort on the scalp.',
  ];

  // 8 Professional Assessment Review Points
  const assessmentPoints = [
    'When the hair loss started.',
    'Whether it developed suddenly or gradually.',
    'The pattern and extent of hair shedding.',
    'Family history of hair loss.',
    'Recent illness, surgery or major stress.',
    'Dietary habits and weight changes.',
    'Current medicines and medical conditions.',
    'Scalp symptoms such as itching, redness or scaling.',
  ];

  // 7 Topics to Discuss During a Homoeopathic Consultation
  const consultationTopics = [
    'The duration and pattern of your hair loss.',
    'Any previous medical diagnosis.',
    'Existing scalp symptoms.',
    'Family history of alopecia.',
    'Medicines and treatments you currently use.',
    'Previous investigations and test results.',
    'Whether a dermatologist has evaluated your condition.',
  ];

  // 5 Criteria for Choosing a Homoeopathic Doctor for Alopecia Problems
  const doctorSelectionCriteria = [
    {
      number: '01',
      title: 'Verify Professional Qualifications',
      desc: "Check the practitioner's recognised educational qualifications, registration and professional experience. Do not assume that a homoeopathic qualification is equivalent to specialist dermatology training.",
    },
    {
      number: '02',
      title: 'Look for Responsible Healthcare Guidance',
      desc: 'A reliable practitioner should listen to your concerns, explain the scope and limitations of their approach and recommend medical evaluation when symptoms require it.',
    },
    {
      number: '03',
      title: 'Avoid Guaranteed Hair Regrowth Claims',
      desc: 'Hair regrowth depends on the type of alopecia, the extent of follicle damage and the response to appropriate treatment. Be cautious of claims promising complete or permanent results.',
    },
    {
      number: '04',
      title: 'Discuss Existing Treatment',
      desc: 'Inform every healthcare provider about medicines, topical treatments and procedures you are currently using. Do not stop prescribed treatment without medical advice.',
    },
    {
      number: '05',
      title: 'Understand Consultation and Follow-Up',
      desc: 'Ask about consultation procedures, follow-up arrangements and any costs before beginning care. Clear communication helps you make informed decisions.',
    },
  ];

  // 5 Evidence-Based Care Options
  const evidenceBasedOptions = [
    {
      title: 'Treatments for Alopecia Areata',
      desc: 'Depending on the extent of hair loss, dermatologists may recommend corticosteroid treatments or other appropriate therapies. Selected patients with more extensive disease may be considered for specialised prescription medicines.',
    },
    {
      title: 'Treatments for Pattern Hair Loss',
      desc: 'Evidence-based options may include topical minoxidil and, for selected patients, prescription medicines. Suitability depends on age, sex, medical history and other individual factors.',
    },
    {
      title: 'Management of Telogen Effluvium',
      desc: 'Management generally focuses on identifying and addressing the trigger. This may involve reviewing nutrition, medicines, recent illness or other contributing health factors.',
    },
    {
      title: 'Treatment of Scalp Infections',
      desc: 'Fungal infections and other scalp conditions require diagnosis-specific treatment. Using unsuitable oils or unverified remedies may delay appropriate care.',
    },
    {
      title: 'Management of Scarring Alopecia',
      desc: 'Scarring alopecia requires timely specialist assessment because permanent follicle damage can occur. Treatment aims to control the underlying inflammation and prevent further hair loss.',
    },
  ];

  // 6 Supportive Scalp and Hair Care Practices
  const hairCarePractices = [
    {
      title: 'Follow a Balanced Diet',
      desc: 'Include adequate protein, vegetables, fruits, whole grains and other nutrient-rich foods. If you suspect a nutritional deficiency, consult a healthcare professional rather than taking supplements without assessment.',
      icon: Utensils,
    },
    {
      title: 'Avoid Tight Hairstyles',
      desc: 'Frequent tight ponytails, braids and hairstyles that pull on the hairline can contribute to traction-related hair loss.',
      icon: Scissors,
    },
    {
      title: 'Use Gentle Hair Care Products',
      desc: 'Choose suitable shampoo and conditioner based on your scalp and hair type. Avoid excessive chemical treatments and harsh styling practices.',
      icon: Droplets,
    },
    {
      title: 'Limit Excessive Heat Styling',
      desc: 'Frequent use of high-temperature hair dryers, straighteners and curling tools may damage hair shafts. Use lower heat settings and reduce unnecessary styling.',
      icon: Flame,
    },
    {
      title: 'Maintain Scalp Hygiene',
      desc: 'Wash your scalp according to your hair type and activity level. If you have persistent dandruff, itching or inflammation, seek professional advice rather than relying on repeated home remedies.',
      icon: Sparkles,
    },
    {
      title: 'Manage Stress and Sleep Well',
      desc: 'Regular physical activity, adequate sleep and healthy stress-management habits support general well-being. They may also help address some lifestyle factors associated with temporary hair shedding.',
      icon: Moon,
    },
  ];

  // 8 Warning Signs to Seek Medical Help
  const medicalHelpSigns = [
    'Sudden or extensive hair loss.',
    'Clearly defined bald patches.',
    'Rapidly increasing hair shedding.',
    'Redness, swelling, pain or scaling on the scalp.',
    'Broken hairs or suspected scalp infection.',
    'Loss of eyebrows or eyelashes.',
    'Shiny or scarred areas where hair no longer grows.',
    'Hair loss accompanied by other unexplained symptoms.',
  ];

  // 6 Checklist Points for Finding an Alopecia Health Clinic
  const clinicChecklist = [
    'Explains possible causes of hair loss.',
    'Recommends appropriate medical assessment.',
    'Clearly communicates treatment limitations.',
    'Avoids unrealistic promises.',
    'Provides transparent consultation information.',
    'Encourages dermatologist referral when necessary.',
  ];

  // 10 Frequently Asked Questions
  const faqs = [
    {
      q: '1. What is alopecia?',
      a: 'Alopecia is a general medical term for hair loss. It includes different conditions, such as alopecia areata, androgenetic alopecia, telogen effluvium and scarring alopecia.',
    },
    {
      q: '2. What are the common causes of alopecia?',
      a: 'Common causes include genetic factors, autoimmune conditions, hormonal changes, nutritional deficiencies, physical stress, certain medicines and scalp infections.',
    },
    {
      q: '3. Can alopecia be treated?',
      a: 'Many forms of alopecia can be managed, but the appropriate treatment depends on the specific condition. Some forms may improve, while others require long-term management.',
    },
    {
      q: '4. Is homoeopathy effective for alopecia?',
      a: 'Homoeopathy has not been reliably demonstrated to treat alopecia or produce hair regrowth. It should not replace evidence-based medical care or dermatologist assessment.',
    },
    {
      q: '5. When should I consult a dermatologist for hair loss?',
      a: 'Consult a dermatologist if you experience sudden hair loss, bald patches, persistent thinning, scalp inflammation, pain or signs of scarring.',
    },
    {
      q: '6. Can nutritional deficiencies cause hair loss?',
      a: 'Yes. Deficiencies involving nutrients such as iron or insufficient protein intake may contribute to hair shedding. Medical assessment can help determine whether a deficiency is present.',
    },
    {
      q: '7. Is alopecia the same as ordinary hair fall?',
      a: 'No. Everyday hair shedding is normal, while alopecia refers to hair loss that may occur in specific patterns or because of an underlying condition.',
    },
    {
      q: '8. Can stress cause alopecia?',
      a: 'Significant physical or emotional stress can trigger temporary hair shedding, including telogen effluvium. However, not every form of alopecia is caused by stress.',
    },
    {
      q: '9. How can I choose an alopecia specialist in Puthanathani?',
      a: 'Look for a qualified dermatologist with experience in hair and scalp conditions. Check professional credentials, consultation procedures and whether the recommended care is appropriate for your diagnosis.',
    },
    {
      q: '10. What should I do before starting alopecia treatment?',
      a: 'Understand the likely cause of your hair loss, review your medical history and seek an appropriate diagnosis. Discuss the benefits, risks and limitations of any proposed treatment with a qualified healthcare professional.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Alopecia Treatment Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Puthanathani for Alopecia Treatment"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        badgeText="ALOPECIA & HAIR LOSS CONSULTATION GUIDE • PUTHANATHANI"
        title="Homoeopathic Clinic in Puthanathani for Alopecia Treatment"
        subtitle="A comprehensive patient guide explaining alopecia types (alopecia areata, androgenetic alopecia, telogen effluvium, traction and scarring alopecia), causes, warning signs, evidence-based dermatology options, supportive scalp care, and informed healthcare decisions in Puthanathani."
        metrics={[
          { label: 'Puthanathani Branch', value: 'Kurumbathur, Malappuram' },
          { label: 'Second Branch', value: 'Kuttippuram Clinic' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
        ]}
        doctorSubtitle="BHMS Homoeopathic Practitioner • Hair Loss & Scalp Consultations"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) offers thorough consultations at Anjali Homoeo Clinic in Puthanathani (Chembayil Complex, opp. Thavakkal Gold) and Kuttippuram—reviewing hair-loss timelines, medical history, and guiding prompt dermatologist evaluation whenever specialist care is required."
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
              Hair loss can be a stressful experience that affects not only physical appearance but also confidence and emotional well-being. While losing a few strands of hair every day is normal, excessive hair fall, thinning patches, or sudden bald spots may indicate an underlying condition. One such condition is alopecia, a term used to describe different forms of hair loss that can affect the scalp and other parts of the body.
            </p>
            <p>
              People experiencing unexplained hair loss often look for professional guidance to understand the cause and explore suitable care options. If you are searching for a <strong>Homoeopathic Clinic in Puthanathani for Alopecia Treatment</strong>, it is important to choose a healthcare provider who takes time to understand your symptoms, medical history and individual concerns.
            </p>
            <p>
              Alopecia can develop for several reasons, including autoimmune conditions, hereditary factors, hormonal changes, nutritional deficiencies, infections and certain medications. Identifying the type and possible cause of hair loss is an important first step towards appropriate management.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                This guide explains common types of alopecia, possible causes, symptoms, scalp care practices and the importance of professional assessment. It also discusses what to consider when looking for <strong>Alopecia Treatment in Puthanathani</strong> and how to make informed decisions about available healthcare options.
              </div>
            </div>
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
              Core facts on alopecia types, timely dermatology diagnosis, scientific evidence limitations, and supportive hair care.
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

        {/* Understanding Alopecia and Its Different Types */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2.5">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Clinical Subtypes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Understanding Alopecia and Its Different Types
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Alopecia refers to hair loss that occurs when hair falls out from the scalp or other areas of the body. The condition can affect people of different ages and may have different patterns depending on its underlying cause.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Some forms of alopecia cause temporary hair shedding, while others may lead to long-term or permanent hair loss. Understanding the type of alopecia is essential because treatment and management depend on the specific diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alopeciaTypes.map((type, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 bg-slate-50 border border-slate-200 space-y-3 ${
                  idx === 4 ? 'md:col-span-2' : ''
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

        {/* Common Causes of Alopecia */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Underlying Factors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common Causes of Alopecia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hair loss does not have a single cause. Several health, lifestyle and environmental factors can contribute to alopecia. Understanding possible triggers can help people seek appropriate medical evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonCauses.map((cause, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 bg-slate-50 border border-slate-200 space-y-2.5 ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
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

        {/* Symptoms That May Indicate Alopecia */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Recognising Changes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Symptoms That May Indicate Alopecia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Alopecia can present differently depending on its type and severity. Recognising changes in hair growth can help people seek timely assessment. Common signs include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {alopeciaSymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-sm text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 text-xs sm:text-sm leading-relaxed">
              Some people may also notice nail changes, particularly with alopecia areata.
            </div>
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>
                Sudden hair loss, painful scalp areas, pus, severe itching or signs of scarring should be evaluated promptly by a qualified healthcare professional.
              </span>
            </div>
          </div>
        </section>

        {/* Why Professional Assessment Is Important & Exploring Homoeopathic Alopecia Treatment */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Why Professional Assessment Is Important */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinical Evaluation</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Why Professional Assessment Is Important for Alopecia
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Hair loss can look similar across different conditions, even when the underlying causes are very different. For this reason, choosing treatment based only on visible symptoms may not address the actual problem.
            </p>
            <p className="text-sm font-semibold text-slate-900">
              A professional assessment may involve reviewing:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              A dermatologist may examine the scalp using specialised equipment and recommend blood tests or other investigations when necessary.
            </p>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm font-medium leading-relaxed">
              If you are looking for an <strong>Alopecia Doctor in Puthanathani</strong>, consider whether the healthcare professional has the appropriate qualifications and experience to assess hair loss conditions. A dermatologist is the appropriate specialist for diagnosing and managing alopecia.
            </div>
          </div>

          {/* Right Card: Exploring Homoeopathic Alopecia Treatment + What to Discuss */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Evidence &amp; Limitations</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Exploring Homoeopathic Alopecia Treatment in Puthanathani
              </h2>
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  People experiencing hair loss may explore different healthcare approaches while looking for answers. Some may search for <strong>Homoeopathic Alopecia Treatment in Puthanathani</strong> because they are interested in discussing homoeopathy and its principles.
                </p>
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 space-y-2 text-sm">
                  <p className="font-semibold text-purple-900">
                    Important Evidence Disclosure
                  </p>
                  <p>
                    Homoeopathy is a system of alternative medicine based on concepts such as individualised remedy selection and the principle of treating like with like. However, current scientific evidence has not established that homoeopathic remedies effectively treat alopecia, reverse autoimmune hair loss or stimulate hair regrowth.
                  </p>
                </div>
                <p>
                  Anyone considering a homoeopathic consultation should understand these limitations before making a healthcare decision. A consultation must not replace a proper diagnosis, dermatologist evaluation or evidence-based treatment. People should not discontinue prescribed medicines or delay treatment for inflammatory or scarring scalp conditions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Consultation Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                What to Discuss During a Homoeopathic Consultation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you are considering visiting an <strong>Alopecia Homoeopathy Clinic in Puthanathani</strong>, you can use the consultation to discuss your concerns and clarify your expectations. Important topics may include:
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
                A responsible practitioner should explain the limitations of homoeopathy, avoid promising guaranteed results and encourage appropriate medical referral when needed.
              </p>
            </div>
          </div>
        </section>

        {/* Choosing a Homoeopathic Doctor for Alopecia Problems in Puthanathani */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Practitioner Selection Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Choosing a Homoeopathic Doctor for Alopecia Problems in Puthanathani
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Selecting a healthcare provider requires careful consideration, particularly when dealing with a condition that may have several underlying causes. If you are searching for a <strong>Homoeopathic Doctor for Alopecia Problems in Puthanathani</strong>, consider the following points before scheduling a consultation.
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

        {/* Alopecia Problem Treatment in Puthanathani: Evidence-Based Care Options */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-teal-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Medical Dermatology Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Alopecia Problem Treatment in Puthanathani: Evidence-Based Care Options
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              The appropriate management of alopecia depends on its type, cause and severity. A dermatologist may recommend different approaches according to the diagnosis. Some commonly used medical options include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-white/10 border border-white/15 space-y-2 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                  <FileSearch className="w-4 h-4 shrink-0" />
                  <h3 className="text-white font-bold text-base">{opt.title}</h3>
                </div>
                <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-emerald-200 font-medium leading-relaxed">
            These treatments should only be used under appropriate medical supervision.
          </p>
        </section>

        {/* Scalp and Hair Care Practices That Support Hair Health */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Supportive Hair Routine
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Scalp and Hair Care Practices That Support Hair Health
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Good hair care habits can help reduce avoidable damage and maintain a healthy scalp. Although these practices cannot cure alopecia, they may support general hair health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairCarePractices.map((practice, idx) => {
              const Icon = practice.icon;
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

        {/* Alopecia Issues Treatment in Puthanathani: When Should You Seek Medical Help? */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Warning Signs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Alopecia Issues Treatment in Puthanathani: When Should You Seek Medical Help?
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              It is important not to ignore unusual or persistent hair loss. Early assessment can help identify conditions that may require specific treatment. Consider consulting a dermatologist if you experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {medicalHelpSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3 text-sm text-white"
              >
                <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>{sign}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-rose-100 font-medium leading-relaxed">
            Children experiencing hair loss should also receive appropriate medical assessment.
          </p>
        </section>

        {/* What to Expect & Finding an Alopecia Health Clinic (2-Column Section) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: What to Expect */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              <Shield className="w-3.5 h-3.5" />
              <span>Consultation Expectations</span>
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Homoeopathy Clinic for Scalp Problems in Puthanathani: What to Expect
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                People searching for a <strong>Homoeopathy Clinic for Alopecia Problems in Puthanathani</strong> may want an opportunity to discuss their hair loss concerns and understand available healthcare choices.
              </p>
              <p>
                A consultation should begin with a clear discussion of symptoms, medical history and previous treatment. If the practitioner offers homoeopathic care, the limitations of the approach should be explained honestly.
              </p>
              <p>
                A responsible healthcare setting should encourage appropriate investigations and referral to a dermatologist when required.
              </p>
              <p>
                When comparing a <strong>Scalp Specialist in Puthanathani</strong> or other local healthcare providers, prioritise relevant qualifications, transparent communication and evidence-based medical guidance over promotional promises.
              </p>
            </div>
          </div>

          {/* Right Card: Finding an Alopecia Health Clinic in Puthanathani */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Provider Evaluation</span>
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Finding an Alopecia Health Clinic in Puthanathani
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Choosing the right healthcare provider is an important part of managing hair loss. If you are searching for an <strong>Alopecia Health Clinic in Puthanathani</strong> or an <strong>Alopecia Care Clinic in Puthanathani</strong>, look beyond the name of the clinic and understand the services and qualifications available. Consider whether the provider:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
              {clinicChecklist.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              People looking for <strong>Hair and Alopecia Treatment in Puthanathani</strong> should remember that hair loss is not one single condition. The best approach begins with identifying the underlying cause and selecting appropriate care.
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
              Clear answers about alopecia types, causes, scientific evidence, dermatologist care, nutrition, stress, and preparing for treatment in Puthanathani.
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
              Informed Hair &amp; Scalp Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Conclusion: Make Informed Choices for Better Hair and Scalp Health
            </h2>
            <div className="space-y-3 text-indigo-100 text-sm sm:text-base leading-relaxed text-left sm:text-center">
              <p>
                Alopecia can affect people in different ways, and understanding its cause is essential for choosing appropriate care. Whether you are experiencing gradual thinning, sudden bald patches or excessive hair shedding, professional assessment can help identify the condition and determine suitable management options.
              </p>
              <p>
                If you are searching for a <strong>Homoeopathic Clinic in Puthanathani for Alopecia Treatment</strong>, take time to understand the practitioner&apos;s qualifications and the scientific evidence behind the proposed approach. Homoeopathy has not been reliably proven to treat alopecia, so it should not replace diagnosis or evidence-based treatment from a qualified dermatologist.
              </p>
              <p>
                For anyone exploring <strong>Alopecia Treatment in Puthanathani</strong>, the priority should be an accurate diagnosis, realistic expectations and responsible healthcare decisions. With appropriate medical guidance and healthy hair-care practices, you can take informed steps towards managing hair loss and maintaining overall scalp health.
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
              Dr. Anjali Chandrasekhar (BHMS) provides attentive hair-loss and scalp consultations, history reviews, and transparent guidance on dermatologist referrals.
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
        <RegionalRelatedGuides currentGuideKey="alopecia-treatment-puthanathani" />
      </main>
    </div>
  );
};
