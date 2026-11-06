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
  Scissors,
  Shield,
  Stethoscope,
  Clock,
  MapPin,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const HairPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for hair fall, thinning, dandruff, and scalp health (Ponnani patient guide).'
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
    navigateToBookingWithReason('Hair & Scalp Consultation - Ponnani', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 7 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Multifactorial Causes of Hair Loss',
      desc: 'Hair fall can have several causes, including genetics, hormonal changes, nutritional deficiencies, stress, medications, and underlying medical conditions.',
    },
    {
      title: 'Identifying Underlying Reasons',
      desc: 'Identifying the underlying reason for hair loss is an important part of choosing appropriate care rather than applying random treatments.',
    },
    {
      title: 'Individualised Consultation Focus',
      desc: 'Homoeopathic consultation focuses on understanding the individual’s reported symptoms, health history, lifestyle, and overall constitution.',
    },
    {
      title: 'Medical Evaluation & Blood Tests',
      desc: 'Hair and scalp concerns may require medical evaluation, blood tests (thyroid, ferritin, vitamins), or referral to a dermatologist.',
    },
    {
      title: 'No Guaranteed Regrowth Promises',
      desc: 'No treatment should be considered a guaranteed cure for hair loss or a promise of new hair growth. Honest medicine sets realistic expectations.',
    },
    {
      title: 'Nutrition & Appropriate Hair Care',
      desc: 'Healthy nutrition, gentle hair care, stress management, and timely medical advice can support better hair shaft resilience and scalp health.',
    },
    {
      title: 'Assess Sudden or Patchy Shedding',
      desc: 'Persistent, sudden, excessive, or patchy hair loss should be promptly assessed by a qualified healthcare professional to rule out acute conditions.',
    },
  ];

  // 5 Common Hair Problems Addressed Through Consultation
  const commonProblems = [
    {
      number: '01',
      title: 'Excessive Hair Fall',
      tag: 'Telogen Shedding',
      desc: 'Hair shedding is a normal part of the physiological hair growth cycle (50–100 hairs daily). However, noticeable increases in shedding where hair comes out in bunches during combing or washing may indicate an underlying concern.',
      triggers: [
        'Physical or emotional stress triggering telogen effluvium',
        'Recent high fever, viral infections, or major physical illness',
        'Nutritional deficiencies involving iron (ferritin), protein, or zinc',
        'Thyroid disorders (hypothyroidism or hyperthyroidism)',
        'Hormonal changes following childbirth (postpartum shedding) or menopause',
        'Certain medications or starting/stopping hormonal pills',
        'Rapid weight loss or restrictive crash diets lacking essential amino acids',
      ],
      note: 'A detailed consultation helps differentiate between temporary reactive shedding and progressive patterned loss.',
    },
    {
      number: '02',
      title: 'Gradual Hair Thinning',
      tag: 'Patterned Miniaturisation',
      desc: 'Hair thinning occurs when individual hair strands become progressively finer (miniaturisation) or when the number of actively growing hairs gradually decreases over months and years.',
      triggers: [
        'Affects the crown, vertex, forehead, temples, or causes a widening central part line',
        'Androgenetic alopecia (genetic hair loss) is the most frequent cause in both men and women',
        'Hormonal factors such as dihydrotestosterone (DHT) sensitivity and PCOS in women',
        'Age-related reduction in follicular density and microcirculation',
      ],
      note: 'A hair specialist can evaluate whether dermatological therapy (such as minoxidil) or endocrine investigation is warranted.',
    },
    {
      number: '03',
      title: 'Dandruff and Scalp Flaking',
      tag: 'Scalp Barrier & Seborrhoea',
      desc: 'Dandruff is a common scalp concern causing visible flakes, itching, and discomfort. It is frequently associated with seborrhoeic dermatitis and Malassezia yeast proliferation.',
      triggers: [
        'Persistent flaking should not automatically be dismissed as simple dryness',
        'Excessive sebum production, greasy yellow flakes, or dry powdery scales',
        'Scalp irritation aggravated by humidity, infrequent washing, or harsh chemical shampoos',
        'Some conditions require targeted medicated shampoos or dermatological prescription treatments',
      ],
      note: 'Avoid excessive scratching, harsh chemical products, and unverified home remedies that irritate the scalp barrier.',
    },
    {
      number: '04',
      title: 'Dry and Brittle Hair',
      tag: 'Cuticle Damage & Breakage',
      desc: 'Dryness and hair shaft fragility cause hair to snap easily, making hair appear thinner, frizzy, and less voluminous even when the roots remain intact.',
      triggers: [
        'Frequent heat styling (blow-dryers, straighteners) and chemical treatments (dyes, perms, bleaching)',
        'Rough mechanical handling, vigorous towel drying, and tight hairstyles causing traction',
        'Environmental exposure to strong coastal sun, hard water, and chlorinated pool water',
        'Systemic nutritional deficiencies or underlying thyroid and metabolic disorders',
      ],
      note: 'A hair care consultation helps identify everyday damaging habits and recommends evidence-based nourishing routines.',
    },
    {
      number: '05',
      title: 'Patchy Hair Loss',
      tag: 'Autoimmune & Infectious',
      desc: 'Patchy hair loss involves distinct, well-defined circular or oval areas of bare skin, distinct from diffuse thinning across the scalp.',
      triggers: [
        'Alopecia areata, an autoimmune condition where the immune system targets hair follicles',
        'Tinea capitis (fungal scalp infections/ringworm), often seen with scaling, redness, and broken hairs',
        'Inflammatory cicatricial (scarring) alopecias that destroy follicles permanently if untreated',
        'Trichotillomania (repetitive hair pulling) or traction alopecia from tight braiding',
      ],
      note: 'Sudden bald patches, scalp redness, burning pain, scaling, or scarring require prompt medical evaluation by a dermatologist.',
    },
  ];

  // 5 Causes of Hair Loss detailed
  const hairLossCauses = [
    {
      title: 'Genetic Hair Loss (Androgenetic Alopecia)',
      badge: 'Hereditary',
      color: 'border-blue-200 bg-blue-50/50',
      desc: 'Androgenetic alopecia is the most common form of hereditary hair loss. It develops gradually, causing a receding hairline and crown thinning in men, and diffuse thinning over the vertex with a preserved hairline in women. Evidence-based options include topical minoxidil and prescription anti-androgens under medical supervision.',
    },
    {
      title: 'Nutritional Deficiencies',
      badge: 'Metabolic & Dietary',
      color: 'border-amber-200 bg-amber-50/50',
      desc: 'Inadequate dietary intake or impaired absorption of iron (serum ferritin), protein, zinc, vitamin D, and B-complex vitamins impairs follicular cellular turnover. A balanced diet with adequate protein, pulses, nuts, and greens supports general health. Supplements should be guided by laboratory-confirmed deficiencies rather than taken indiscriminately.',
    },
    {
      title: 'Hormonal Imbalances & Life Stages',
      badge: 'Endocrine',
      color: 'border-rose-200 bg-rose-50/50',
      desc: 'Thyroid dysfunction (both hypothyroidism and hyperthyroidism), polycystic ovary syndrome (PCOS), pregnancy, postpartum shifts, and menopause significantly influence hair growth cycles. If hair shedding coincides with irregular periods, unexplained fatigue, or weight changes, medical assessment is recommended.',
    },
    {
      title: 'Stress-Related Hair Shedding (Telogen Effluvium)',
      badge: 'Reactive',
      color: 'border-teal-200 bg-teal-50/50',
      desc: 'Significant physical trauma, severe psychological distress, surgery, or high fever can push an abnormally large percentage of growing hairs prematurely into the resting (telogen) phase. Shedding typically manifests 2 to 3 months following the triggering stressor, with recovery occurring over several months once the trigger resolves.',
    },
    {
      title: 'Inflammatory Scalp Disorders & Infections',
      badge: 'Dermatological',
      color: 'border-purple-200 bg-purple-50/50',
      desc: 'Active scalp conditions including seborrhoeic dermatitis, scalp psoriasis, contact allergies to hair cosmetics, and fungal infections cause micro-inflammation around follicular ostia. This leads to weakened hair anchorage, breakage, and premature shedding, demanding specific medical management.',
    },
  ];

  // 5 Steps of the Consultation Process
  const consultationSteps = [
    {
      step: '01',
      title: 'Initial Discussion & Primary Concern',
      desc: 'The consultation begins by understanding your primary concern—whether you are experiencing rapid hair fall, gradual crown thinning, stubborn dandruff flakes, or scalp discomfort.',
    },
    {
      step: '02',
      title: 'Detailed Medical & Hair History',
      desc: 'The doctor reviews your health history, previous treatments, family history of thinning or baldness, dietary patterns, sleep routine, stress levels, and the exact timeline of shedding.',
    },
    {
      step: '03',
      title: 'Clinical Assessment & Triage Guidance',
      desc: 'Based on the reported symptoms, the doctor evaluates possible contributing factors and determines whether lab investigations (e.g., serum ferritin, thyroid profile) or specialist dermatologist referral is needed.',
    },
    {
      step: '04',
      title: 'Transparent Discussion of Care Options',
      desc: 'Suitable care options are explained clearly. If complementary homoeopathic constitutional support is discussed, its limitations and the lack of scientific evidence for hair regrowth are openly communicated.',
    },
    {
      step: '05',
      title: 'Follow-Up & Ongoing Evaluation',
      desc: 'Persistent hair problems are monitored over structured intervals, ensuring timely referral to dermatologists if symptoms fail to stabilize or if underlying conditions require conventional therapies.',
    },
  ];

  // 7 Selection Criteria for Hair Clinic
  const selectionCriteria = [
    {
      num: '01',
      title: 'Qualified Practitioner',
      desc: 'Verify the doctor’s accredited qualifications (such as BHMS or MD Hom.) and official medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Detailed Consultation',
      desc: 'Choose a clinic that invests sufficient time to understand your medical timeline, scalp symptoms, and lifestyle factors.',
    },
    {
      num: '03',
      title: 'Honest Communication',
      desc: 'Both the potential benefits and the clear limitations of complementary therapies must be transparently explained.',
    },
    {
      num: '04',
      title: 'Individual Assessment',
      desc: 'Avoid one-size-fits-all packages. Hair loss causes differ vastly and require tailored clinical investigation.',
    },
    {
      num: '05',
      title: 'Appropriate Specialist Referral',
      desc: 'A responsible clinic collaborates with dermatologists and diagnostic laboratories when prescription treatments or trichoscopy are needed.',
    },
    {
      num: '06',
      title: 'Realistic Expectations',
      desc: 'Be cautious of clinics making exaggerated claims of guaranteed hair regrowth, instant stop to hair fall, or permanent cures.',
    },
    {
      num: '07',
      title: 'Patient-Focused Care',
      desc: 'Your comfort, privacy, long-term health, and emotional well-being should always remain at the centre of clinical decision-making.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'Where can I find a Homoeopathic Clinic in Ponnani for Hair Treatment?',
      a: 'You can look for qualified homoeopathic practitioners in Ponnani and nearby towns such as Kuttippuram and Puthanathani. Anjali Homoeo Clinic, led by Dr. Anjali Chandrasekhar (BHMS, MD Hom.), is located in Kuttippuram on the Tirur-Kuttippuram Road (approximately 15–20 minutes from Ponnani), and also provides online video consultations for Ponnani residents. Ensure any clinic you choose provides transparent consultations and clear referrals when dermatologist evaluation is indicated.',
    },
    {
      q: 'Is Homoeopathic Hair Treatment in Ponnani effective for hair fall?',
      a: 'There is insufficient reliable scientific evidence to establish homoeopathy as an effective or proven treatment for hair fall, genetic baldness, or alopecia. While some patients explore homoeopathy for constitutional or lifestyle support, it should not replace medical diagnosis or evidence-based treatments such as minoxidil or dermatological therapies.',
    },
    {
      q: 'What are the common causes of hair fall?',
      a: 'Common causes include androgenetic alopecia (genetic hair loss), physical or emotional stress (telogen effluvium), nutritional deficiencies (iron, ferritin, protein, zinc, vitamin D), thyroid disorders, hormonal changes (postpartum, menopause, PCOS), certain medications, and inflammatory scalp conditions such as seborrhoeic dermatitis.',
    },
    {
      q: 'Can hair loss be reversed?',
      a: 'Some types of hair loss, particularly temporary reactive shedding (telogen effluvium) caused by acute illness, nutritional deficiencies, or stress, often improve once the underlying trigger is addressed. However, genetic hair loss (androgenetic alopecia) and scarring alopecias require ongoing, evidence-based medical management to preserve density and slow progression.',
    },
    {
      q: 'When should I consult a Hair Doctor in Ponnani?',
      a: 'You should consult a healthcare professional if your hair fall is persistent (lasting more than 2–3 months), sudden and excessive, or accompanied by visible scalp thinning, patchy bald spots, scalp itching, burning pain, redness, or signs of infection.',
    },
    {
      q: 'Does dandruff cause hair loss?',
      a: 'Dandruff itself does not directly kill hair follicles or cause permanent baldness. However, severe scalp inflammation, persistent itching, and vigorous scratching can physically damage the hair cuticle and weaken anchorage, leading to increased breakage and shedding. Other conditions that resemble dandruff (like psoriasis or tinea capitis) can also impact hair density.',
    },
    {
      q: 'What should I expect during a hair consultation?',
      a: 'You can expect a thorough discussion regarding the onset and pattern of your hair loss, your medical and family history, diet, lifestyle, scalp symptoms, and current medications. The doctor may suggest diagnostic blood investigations (such as serum ferritin, complete blood count, and thyroid profile) or recommend a dermatologist evaluation.',
    },
    {
      q: 'Can nutritional deficiencies cause hair thinning?',
      a: 'Yes. Deficiencies involving iron (serum ferritin), dietary protein, zinc, and vitamins are clinically recognized contributors to diffuse hair shedding and fragile hair shafts. Routine blood testing helps identify whether a genuine deficiency exists so that targeted nutritional or dietary corrections can be made.',
    },
    {
      q: 'Is a Hair Specialist in Ponnani necessary for every hair problem?',
      a: 'Not every minor hair issue requires a specialist. Mild temporary shedding often resolves with general healthy habits. However, persistent, progressive, severe, patchy, or painful hair and scalp conditions should be assessed by a qualified medical professional, and complex cases benefit from dermatologist evaluation.',
    },
    {
      q: 'How can I maintain healthy hair?',
      a: 'Maintain a balanced diet rich in protein, iron, and micronutrients; follow a gentle hair care routine using a mild shampoo suitable for your scalp; avoid excessive heat styling, harsh chemical dyes, and tight hairstyles; manage emotional stress; ensure adequate sleep; and seek timely medical evaluation if hair loss persists.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Hair Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Hair Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Trichology Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Hair Treatment"
        subtitle="Clinical evaluation and evidence-grounded consultations for patients in Ponnani, Edappal, and Malappuram district dealing with persistent hair fall, gradual thinning, dandruff, and scalp irritation."
        metrics={[
          { label: 'Condition Focus', value: 'Hair & Scalp Health' },
          { label: 'Clinical Assessment', value: 'Health History & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Hair Triage & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential hair fall evaluations, scalp health reviews, nutritional guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Healthy hair is often associated with confidence, appearance and overall well-being. However, hair-related concerns such as excessive hair fall, thinning, dandruff, scalp irritation and changes in hair texture can affect people of different age groups. Factors such as genetics, hormonal changes, nutritional deficiencies, stress, certain medical conditions and lifestyle habits may contribute to hair problems.
          </p>
          <p>
            If you are looking for a <strong>Homoeopathic Clinic in Ponnani for Hair Treatment</strong>, it is important to choose a healthcare professional who takes time to understand your concerns, reviews your health history and helps identify possible contributing factors. A personalised consultation can help you understand your hair and scalp condition and explore suitable care options.
          </p>
          <p>
            At our clinic, we focus on understanding individual hair-related concerns through a detailed consultation and an assessment of relevant health factors. Whether you are experiencing persistent hair fall, gradual hair thinning or recurring scalp problems, professional guidance can help you make informed decisions about your hair health.
          </p>
        </div>
      </section>

      {/* Key Takeaways Section (7 Points) */}
      <section className="py-12 bg-[#F1F5F9]/70 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Key Takeaways: Hair & Scalp Health in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking hair fall and scalp care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Why Choose a Hair Treatment Clinic in Ponnani? */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Why Choose a Hair Treatment Clinic in Ponnani?
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Hair problems can develop gradually or appear suddenly. Some people notice more hair than usual while combing or washing, while others experience a widening hair part, thinning near the forehead or visible scalp areas.
            </p>
            <p>
              Finding suitable <strong>Hair Treatment in Ponnani</strong> begins with understanding what is causing the problem. Treating hair fall without identifying its possible cause may not provide the expected results.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              What a Professional Consultation Assesses:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>The duration and pattern of hair fall.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether hair loss is gradual, sudden or patchy.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Scalp conditions such as itching, flaking or irritation.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Recent illness, high fever or major physical stress.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Family history of hair thinning or baldness.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Changes in diet, sleep patterns and daily routine.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Possible hormonal or nutritional concerns.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Medicines or treatments that may influence hair growth.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              A detailed assessment helps determine whether the concern may be related to a temporary condition, an underlying health issue or a pattern of hair loss that requires specialist care.
            </p>
          </div>
        </div>
      </section>

      {/* Homoeopathic Hair Treatment in Ponnani (Evidence & Disclosure) */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Hair Treatment in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Homoeopathy is a system of complementary medicine that uses highly diluted preparations selected according to an individual’s reported symptoms and health history. People sometimes explore homoeopathic consultations when they are looking for an individualised approach to managing their health concerns.
            </p>
            <p>
              <strong>Homoeopathic Hair Treatment in Ponnani</strong> begins with a consultation to understand the nature of the hair problem and the individual’s overall health. The doctor may ask questions about the onset of hair fall, scalp symptoms, family history, lifestyle and other health concerns.
            </p>
          </div>

          {/* Critical Evidence Disclosure Notice */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure
                </h4>
                <p>
                  It is important to understand that <strong>scientific evidence supporting homoeopathy as an effective treatment for hair loss is limited</strong>. Homoeopathy has not been established as a proven method for reversing genetic hair loss, treating alopecia or stimulating new hair growth. Therefore, patients should not rely on homoeopathy as a replacement for evidence-based diagnosis and treatment.
                </p>
                <p className="font-medium text-amber-950">
                  A responsible approach to hair care includes identifying the underlying cause, discussing available treatment options and seeking referral to a dermatologist when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Hair Problems Addressed Through Consultation (5 Cards) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL SUBTYPES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Hair Problems Addressed Through Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              A Hair Homoeopathy Clinic in Ponnani receives enquiries from individuals experiencing different types of hair and scalp concerns. Understanding these conditions helps recognise when professional advice is warranted.
            </p>
          </div>

          <div className="space-y-6">
            {commonProblems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white font-bold text-xs flex items-center justify-center">
                      {item.number}
                    </span>
                    <h3 className="font-heading font-bold text-[#1E2559] text-lg sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white text-xs font-semibold text-[#303A88] rounded-full border border-[#D8E1F5] w-fit">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="bg-white rounded-lg p-4 border border-[#E2E8F0] mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] mb-2 font-sans">
                    Key Contributing Factors &amp; Triggers:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155]">
                    {item.triggers.map((trigger, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                        <span>{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs italic text-[#64748B] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#303A88] flex-shrink-0" />
                  <span>{item.note}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult a Hair Doctor in Ponnani for Personalised Guidance */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DOCTOR CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Consult a Hair Doctor in Ponnani for Personalised Guidance
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Choosing the right healthcare professional is an important step when dealing with persistent hair concerns. A <strong>Hair Doctor in Ponnani</strong> should take time to understand your symptoms, review your medical history and explain the possible reasons behind your hair problem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-[#D8E1F5] shadow-sm">
              <h4 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#303A88]" />
                Questions You May Be Asked:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>When the hair fall first started and its onset rate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Whether shedding has increased significantly in recent weeks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Whether hair loss affects specific patches or the entire scalp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Whether you experience itching, flaking, redness or scalp pain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Family history of hair thinning, receding hairlines or baldness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Your daily dietary habits, protein intake and sleep patterns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Recent physical illness, high fever, surgery or major stress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 flex-shrink-0" />
                  <span>Prescription medicines, supplements or hair products currently used.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#D8E1F5] shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#303A88]" />
                  Investigations &amp; Laboratory Tests:
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                  Depending on your symptoms, the doctor may recommend laboratory investigations or referral to a dermatologist:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                    <span><strong>Serum Ferritin &amp; Iron Studies:</strong> To detect cellular iron deficiency even when haemoglobin is normal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                    <span><strong>Thyroid Profile (TSH, FT3, FT4):</strong> To rule out hypothyroid or hyperthyroid-induced shedding.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                    <span><strong>Vitamin D &amp; B12 Levels:</strong> Common deficiencies affecting keratin synthesis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                    <span><strong>Dermatologist Evaluation:</strong> For trichoscopy, scalp biopsy or prescription therapies.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs font-medium text-[#303A88]">
                The purpose of an appropriate consultation is not simply to address visible hair fall but to understand the biological factors contributing to it.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Loss Treatment in Ponnani: Understanding Possible Causes */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DIAGNOSTIC INSIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair Loss Treatment in Ponnani: Understanding the Possible Causes
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair loss is not a single disease. It is a symptom that can occur for several different reasons. Identifying the type of hair loss is essential because treatment depends entirely on its underlying cause.
          </p>

          <div className="space-y-4">
            {hairLossCauses.map((cause, cIdx) => (
              <div
                key={cIdx}
                className={`p-5 rounded-xl border ${cause.color} transition-all`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg">
                    {cause.title}
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white border border-[#D8E1F5] text-[#303A88] w-fit">
                    {cause.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homoeopathic Doctor for Hair Problems in Ponnani (Realistic Expectations) */}
      <section className="py-12 bg-[#F1F5F9]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PRACTITIONER PERSPECTIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Doctor for Hair Problems in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People looking for a <strong>Homoeopathic Doctor for Hair Problems in Ponnani</strong> may want to discuss their hair concerns through an individual consultation.
            </p>
            <p>
              A homoeopathic consultation generally involves understanding the patient’s symptoms, medical background, lifestyle and overall health. The practitioner may consider these details when discussing complementary care.
            </p>
            <p>
              However, it is essential to <strong>maintain realistic expectations</strong>. There is currently insufficient reliable scientific evidence to establish that homoeopathic medicines can stop hair loss, reverse baldness or regrow hair.
            </p>
            <p className="bg-white p-4 rounded-xl border border-[#D8E1F5] font-medium text-[#1E2559]">
              For this reason, homoeopathic consultation should not delay proven medical care. Individuals with persistent hair loss, suspected alopecia, scalp infections or unexplained symptoms should receive an appropriate medical evaluation. A responsible healthcare approach recognises the importance of diagnosis, transparent communication and referral to the right specialist.
            </p>
          </div>
        </div>
      </section>

      {/* Hair and Scalp Treatment in Ponnani */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SCALP HEALTH
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair and Scalp Treatment in Ponnani
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair health depends on more than the hair strands visible on the scalp. The condition of the scalp, hair follicles, general health and daily hair care practices all play a role. When looking for <strong>Hair and Scalp Treatment in Ponnani</strong>, consider whether the consultation addresses both hair and scalp symptoms.
          </p>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-[#303A88]" />
              Common Scalp-Related Concerns Evaluated:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Persistent dandruff and flaking</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Itching, tingling and scalp irritation</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Excessive oiliness or greasy build-up</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Scalp dryness and tightness</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Redness, burning and inflammation</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Scaling, crusting and follicular pustules</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Hair breakage near the roots</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                <span>Localised or coin-shaped hair loss</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Different scalp conditions can produce similar symptoms. For example, dandruff, psoriasis and fungal infections may all cause flaking. Correct identification is important because their medical treatments are entirely different. Avoid applying multiple oils, chemical preparations or unverified home remedies to an irritated scalp without understanding the cause.
            </p>
          </div>
        </div>
      </section>

      {/* Hair Health Clinic in Ponnani: Holistic Approach */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              HOLISTIC WELL-BEING
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair Health Clinic in Ponnani: The Importance of a Holistic Approach
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A <strong>Hair Health Clinic in Ponnani</strong> should encourage patients to look at hair health as part of their overall well-being. Hair growth is influenced by genetics, hormones, nutrition, health conditions and lifestyle. While no single diet or routine can prevent every type of hair loss, healthy daily habits support general well-being.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-[#D8E1F5]">
              <h3 className="font-heading font-bold text-[#1E2559] text-base mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#E11D48]" />
                1. Maintain a Balanced Diet
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Include protein-rich foods such as pulses, beans, eggs, dairy products, nuts and seeds. Iron-rich foods and a colourful variety of fruits and vegetables contribute to keratin synthesis. If you suspect a deficiency, consult a doctor for testing before taking high-dose supplements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#D8E1F5]">
              <h3 className="font-heading font-bold text-[#1E2559] text-base mb-2 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#303A88]" />
                2. Follow a Suitable Hair Care Routine
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Use a shampoo appropriate for your scalp and hair type. Avoid excessive heat styling, harsh chemical dyes, bleaching, and tight hairstyles that repeatedly pull on the follicles (traction). Handle wet hair gently, as damp keratin is vulnerable to breakage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#D8E1F5]">
              <h3 className="font-heading font-bold text-[#1E2559] text-base mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#45AC4B]" />
                3. Manage Stress &amp; Sleep
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Regular physical activity, 7–8 hours of restful sleep, and relaxation practices support neuroendocrine balance. Stress reduction is particularly vital when hair shedding is associated with acute physical or emotional events.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#D8E1F5]">
              <h3 className="font-heading font-bold text-[#1E2559] text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D97706]" />
                4. Avoid Unverified "Magic" Products
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Be extremely cautious of advertisements promising instant hair growth, permanent baldness reversal, or guaranteed overnight results. Before applying medicated preparations or unverified oils, discuss their safety with a qualified doctor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Homoeopathy Clinic for Hair Problems in Ponnani: What to Expect (5 Steps) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              STRUCTURED CARE PATHWAY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathy Clinic for Hair Problems in Ponnani: What to Expect
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            If you are considering a consultation at a <strong>Homoeopathy Clinic for Hair Problems in Ponnani</strong>, understanding the 5-step consultation workflow can help you prepare:
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

      {/* Hair Care Clinic in Ponnani: Choosing the Right Place (7 Criteria) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair Care Clinic in Ponnani: Choosing the Right Place
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Selecting a suitable Hair Care Clinic in Ponnani involves more than choosing a clinic based on advertisements or treatment promises.
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

      {/* When Should You Seek Medical Attention for Hair Loss? (Warning Signs) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              SAFETY &amp; CLINICAL TRIAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention for Hair Loss?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Although some forms of hair shedding are temporary, certain symptoms should not be ignored. Consult a qualified healthcare professional if you notice:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Sudden, rapid or excessive hair shedding across the scalp.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Rapidly developing circular or oval bald patches (alopecia areata).</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Scalp pain, burning sensation, swelling or significant redness.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Pus, oozing, crusting or visible signs of fungal or bacterial infection.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Hair loss accompanied by skin scarring or permanently closed pores.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Persistent itching and thick scaling unresponsive to standard shampoos.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Hair loss accompanied by unexplained fatigue, joint pain or weight shifts.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Hair shedding associated with other systemic health symptoms.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
            Early evaluation helps identify conditions that require specific prescription treatment and prevents avoidable diagnostic delays.
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (All 10 FAQs in Interactive Accordion) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DOCTOR Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Hair Treatment Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear answers to common patient questions regarding hair fall, scalp conditions, and homeopathic consultations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#D8E1F5] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFD] transition-colors"
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book a Consultation for Hair Concerns in Ponnani (Closing CTA & Booking Engine) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Book a Consultation for Hair Concerns in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Hair fall, thinning and scalp problems can affect your confidence and everyday comfort. Understanding the possible reasons behind these concerns is an important first step towards making informed decisions about your health.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Whether you are exploring a <strong>Homoeopathic Hair Treatment in Ponnani</strong>, looking for a <strong>Hair Doctor in Ponnani</strong>, or seeking guidance from a <strong>Homoeopathy Clinic for Hair Problems in Ponnani</strong>, make your hair health a priority through informed consultation and appropriate medical care.
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
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated time slot for hair fall assessment.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="hair-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Hair Fall, Thinning & Scalp Health"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
