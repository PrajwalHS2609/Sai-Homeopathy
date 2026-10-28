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
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  BookOpen,
  Sparkles,
  Award,
  UserCheck,
  Lock,
  Scissors,
  Sparkle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const HairManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Hair & Scalp Health (Manjeri patient guide).'
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
    navigateToBookingWithReason('Hair Health Consultation - Manjeri', 'online');
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
      title: 'Multifactorial Hair Loss',
      desc: 'Hair fall may be associated with genetics, hormonal changes, nutritional deficiencies, systemic illness, stress, medication, or scalp conditions.',
    },
    {
      title: 'Root Cause Assessment',
      desc: 'Hair Treatment in Manjeri should always begin with an accurate clinical assessment of the underlying cause whenever hair loss is persistent or concerning.',
    },
    {
      title: 'Warning Signs Need Evaluation',
      desc: 'Sudden rapid hair loss, round patchy baldness (alopecia areata), and scalp inflammation warrant prompt medical evaluation.',
    },
    {
      title: 'Qualified Diagnostic Care',
      desc: 'A qualified Hair Doctor or dermatologist in Manjeri can help determine whether trichoscopy, blood panels, or specialist treatment is needed.',
    },
    {
      title: 'Lifestyle Supports But Does Not Cure',
      desc: 'Balanced nutrition, adequate dietary protein, and gentle hair handling support general hair health, but do not treat every biological cause of hair loss.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'Reliable scientific clinical evidence has not established homoeopathy as an effective medical treatment for hair loss, alopecia, or scalp disorders.',
    },
    {
      title: 'Beware Guaranteed Regrowth Claims',
      desc: 'Avoid products and clinics making guaranteed hair-regrowth claims or promising fixed-day turnaround without clinical substantiation.',
    },
    {
      title: 'Maintain Prescribed Treatments',
      desc: 'Do not stop or alter medically prescribed hair or thyroid treatments without consulting your prescribing healthcare professional.',
    },
  ];

  const commonHairConcerns = [
    'Excessive hair fall or daily shedding (> 100 strands per day)',
    'Gradual thinning across the crown, vertex, or central parting',
    'Receding hairline and bitemporal recession in men and women',
    'Patchy hair loss presenting as smooth, round bald spots (alopecia areata)',
    'Persistent dandruff, scalp flaking, and seborrhoeic buildup',
    'Itching, burning, or tingling discomfort across the scalp',
    'Hair shaft breakage, split ends, and heat/chemical damage',
    'Post-illness shedding (telogen effluvium) or postpartum hair fall',
    'Hair changes associated with thyroid disorders or hormonal shifts (PCOS, perimenopause)',
    'Recurring scalp folliculitis, tenderness, and painful pustules',
  ];

  const consultationPoints = [
    'The precise duration and pattern of hair shedding or thinning',
    'Whether hair loss occurred suddenly, progressively, or in discrete patches',
    'Family history of premature hair thinning, receding hairlines, or androgenetic alopecia',
    'Recent acute illness, high fever, surgery, crash dieting, or major psychological stress',
    'Dietary habits, daily protein intake, and suspected nutritional deficiencies (iron/ferritin)',
    'Presence of hormonal, menstrual, or thyroid-related symptoms (fatigue, cold intolerance, weight changes)',
    'Scalp symptoms such as persistent itching, redness, flaking, burning, or localized pain',
    'Current prescription medicines, dietary supplements, and topical treatments used',
    'Previous hair therapies, medicated shampoos, or clinical procedures and their outcomes',
  ];

  const commonCauses = [
    {
      id: 'stress-illness',
      title: '1. Stress and Physical Illness (Telogen Effluvium)',
      desc: 'Significant physiological stress, high-grade fevers (such as viral infections), surgical procedures, or major life trauma can push large numbers of hair follicles prematurely into the resting (telogen) phase. This type of shedding typically becomes noticeable 2 to 3 months following the triggering event.',
      tip: 'Hair growth usually recovers over several months once the underlying trigger resolves, though clinical assessment confirms the diagnosis.',
    },
    {
      id: 'nutritional-deficiencies',
      title: '2. Nutritional Deficiencies',
      desc: 'Hair follicle matrix cells are among the most metabolically active in the body. Inadequate dietary iron, low serum ferritin, zinc deficiency, vitamin D depletion, restrictive caloric diets, and insufficient protein intake can directly impair hair synthesis.',
      tip: 'Avoid indiscriminate high-dose supplements. Targeted blood panels identify true deficiencies so they can be corrected safely.',
    },
    {
      id: 'hormonal-thyroid',
      title: '3. Hormonal and Thyroid Conditions',
      desc: 'Hormonal fluctuations—including hypothyroidism, hyperthyroidism, elevated androgens in polycystic ovary syndrome (PCOS), and postpartum hormonal drops—significantly disrupt normal hair cycle dynamics, leading to diffuse thinning.',
      tip: 'When hair thinning accompanies fatigue, irregular periods, or unexplained weight changes, comprehensive endocrine assessment is vital.',
    },
    {
      id: 'genetic-hair-loss',
      title: '4. Genetic Hair Loss (Androgenetic Alopecia)',
      desc: 'Pattern hair loss is influenced by genetic predisposition and follicle sensitivity to dihydrotestosterone (DHT). In men, it causes temporal recession and crown thinning; in women, it presents as diffuse central parting widening with preserved frontal hairline.',
      tip: 'Early medical recognition allows individuals to discuss established, clinically proven pharmacological therapies with a doctor.',
    },
    {
      id: 'scalp-conditions',
      title: '5. Scalp Inflammation and Infections',
      desc: 'Chronic seborrhoeic dermatitis, fungal infections (tinea capitis), scalp psoriasis, and folliculitis compromise follicle anchoring. Persistent scratching and micro-inflammation damage hair roots and exacerbate shedding.',
      tip: 'Accurate scalp examination is critical because fungal, bacterial, and inflammatory conditions require completely different treatments.',
    },
  ];

  const scalpProblems = [
    {
      title: 'Dandruff and Scalp Flaking',
      desc: 'Dandruff causes visible white/yellow flakes and pruritus, often driven by Malassezia yeast overgrowth. Mild cases improve with zinc pyrithione or ketoconazole shampoos, whereas persistent scaling warrants evaluation for seborrhoeic dermatitis or scalp psoriasis.',
    },
    {
      title: 'Itchy or Inflamed Scalp',
      desc: 'Scalp itchiness can stem from contact dermatitis to hair dyes, harsh surfactants, fungal infections, or sensitive scalp syndrome. Avoiding suspected irritants is essential, but ongoing itching requires clinical assessment.',
    },
    {
      title: 'Patchy Hair Loss (Alopecia Areata)',
      desc: 'Sudden appearance of smooth, circular bald patches is often autoimmune. Prompt assessment is crucial, especially if patches enlarge rapidly or are accompanied by broken "exclamation mark" hairs, requiring medical dermatological evaluation.',
    },
    {
      title: 'Hair Breakage vs. True Root Loss',
      desc: 'Hair breakage occurs along the shaft due to mechanical trauma, heat styling, bleaching, or tight traction hairstyles, whereas hair loss originates at the follicle. Gentle handling and moisture restore shaft resilience.',
    },
  ];

  const doctorCriteria = [
    'Thoroughly reviews your symptoms, lifestyle factors, and complete medical history',
    'Carefully examines your scalp and hair density under magnification (trichoscopy)',
    'Clearly explains the likely diagnosis and underlying mechanisms of your hair loss',
    'Recommends targeted laboratory investigations (CBC, ferritin, TSH, vitamin D) when indicated',
    'Discusses scientific evidence, potential benefits, limitations, and realistic timelines of treatments',
    'Explains possible side effects and cautions against unproven miraculous claims',
    'Maintains professional collaboration and refers to a qualified dermatologist when specialist care is needed',
  ];

  const everydayHabits = [
    {
      number: '01',
      title: 'Maintain a Balanced, Nutrient-Dense Diet',
      desc: 'Eat a varied diet containing adequate lean protein (eggs, pulses, legumes), fresh leafy vegetables, fruits, nuts, and bioavailable iron sources to nourish active follicle matrix cells.',
    },
    {
      number: '02',
      title: 'Handle Hair with Extreme Gentleness',
      desc: 'Avoid aggressive towel-drying, vigorous wet combing, and tight hairstyles (braids, ponytails) that place prolonged mechanical traction on hair follicles.',
    },
    {
      number: '03',
      title: 'Care for Your Scalp Environment',
      desc: 'Wash regularly with mild, sulfate-appropriate shampoos suited to your scalp sebum level. Discontinue any product that triggers scalp redness, burning, or flaking.',
    },
    {
      number: '04',
      title: 'Manage Stress & Prioritise Restful Sleep',
      desc: 'Chronic elevation of cortisol disrupts the hair growth cycle. Adopt regular sleep schedules, moderate aerobic exercise, and active stress-reduction techniques.',
    },
    {
      number: '05',
      title: 'Avoid Unverified Hair-Growth Concoctions',
      desc: 'Be skeptical of unregulated miracle oils, magic serums, and aggressive remedies that promise rapid regrowth without clinical diagnosis or evidence.',
    },
  ];

  const whenToConsultDoctor = [
    'Persistent or progressively increasing hair shedding lasting beyond 6 to 8 weeks',
    'Sudden, dramatic loss of hair following washing, brushing, or waking up',
    'Distinct round or irregular bald patches appearing on the scalp or beard',
    'Noticeable bitemporal hairline recession or rapid widening of your center parting',
    'Scalp redness, localized swelling, persistent burning, tenderness, or intense itching',
    'Severe scaling, crusting, pustules, or broken hairs resembling black dots on the scalp',
    'Hair loss accompanied by extreme fatigue, cold intolerance, or unexplained weight shifts',
    'Hair loss that continues unchecked despite changes to your haircare routine',
  ];

  const faqs = [
    {
      question: '1. Where can I find Hair Homoeopathic Treatment in Manjeri?',
      answer:
        'You can research local healthcare clinics in Manjeri and check the practitioner’s accredited qualifications (such as BHMS) and state medical council registration. It is important to understand that homoeopathy has not been established as an effective medical treatment for hair loss in scientific trials. Persistent, rapid, or patchy hair loss should always be evaluated by a qualified doctor or dermatologist.',
    },
    {
      question: '2. What causes excessive hair fall?',
      answer:
        'Excessive hair shedding can stem from multiple biological factors, including androgenetic alopecia (genetic hair loss), recent high fever or severe illness (telogen effluvium), acute stress, nutritional deficiencies (especially iron, ferritin, and protein), thyroid imbalance, hormonal shifts (PCOS, postpartum), certain prescription drugs, or inflammatory scalp conditions.',
    },
    {
      question: '3. Is Homoeopathic Hair Treatment in Manjeri effective for hair loss?',
      answer:
        'Reliable scientific clinical evidence has not established homoeopathy as an effective treatment for hair loss, alopecia areata, or scalp disorders beyond a placebo response. Evidence-based care relies on identifying the underlying cause and applying proven therapies—such as correcting iron deficiency, treating scalp infections with antifungals, or using medically approved topical and systemic treatments.',
    },
    {
      question: '4. When should I consult a Hair Doctor in Manjeri?',
      answer:
        'You should seek medical advice if your hair shedding is sudden, persistent, progressive, or patchy, or if it coincides with scalp pain, redness, scaling, or burning. Early medical assessment is vital to distinguish between temporary shedding and progressive conditions that require timely intervention.',
    },
    {
      question: '5. Can nutritional deficiencies cause hair fall?',
      answer:
        'Yes. Deficiencies in iron (low ferritin stores), zinc, vitamin D, and inadequate dietary protein are well-documented contributors to telogen shedding and hair thinning. However, because hair fall has many possible causes, targeted blood testing and professional guidance are recommended before taking supplements.',
    },
    {
      question: '6. What should I look for in a Hair Specialist in Manjeri?',
      answer:
        'Look for verified medical qualifications, registration with medical councils, clinical experience, trichoscopic scalp examination capabilities, and transparent communication regarding treatment options. A qualified dermatologist is appropriate for complex, unexplained, or rapidly progressing hair loss.',
    },
    {
      question: '7. How can I maintain healthy hair?',
      answer:
        'Support your hair by consuming a balanced diet rich in protein and micronutrients, handling wet hair gently, avoiding excessive heat and harsh chemical treatments, washing with suitable mild cleansers, and seeking timely clinical evaluation if excessive shedding persists.',
    },
    {
      question: '8. Can dandruff cause hair loss?',
      answer:
        'Dandruff itself does not usually cause direct permanent hair follicle loss. However, intense itching and repetitive scratching can physically injure hair shafts and follicles, causing breakage. Furthermore, severe untreated seborrhoeic dermatitis with heavy scaling can exacerbate hair shedding.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Hair Treatment in Manjeri"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Hair Treatment in Manjeri"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Clinical Trichology Guide • Manjeri Patients"
        title="Hair Homoeopathic Treatment in Manjeri"
        subtitle="Individualized clinical guidance for patients in Manjeri and Malappuram experiencing excessive hair fall, thinning hair, receding hairlines, dandruff, and scalp health concerns."
        metrics={[
          { label: 'Condition Focus', value: 'Hair & Scalp Health' },
          { label: 'Diagnostic Standard', value: 'Trichology & Labs' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Trichology & Constitutional Hair Care"
        doctorBio="10+ years of dedicated clinical experience assessing hair loss etiology, scalp disorders, nutritional deficiency screening, and evidence-grounded constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
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
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#0D9488]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
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

      {/* Section 1: Understanding Common Hair and Scalp Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Common Hair and Scalp Problems
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Hair growth follows a natural biological cycle involving anagen (growth), catagen (transition), and telogen (resting) phases. It is normal to shed between 50 and 100 hairs daily as part of this process. However, noticeable changes in hair density, excessive shedding, or bald patches may indicate a condition that requires assessment.
            </p>

            {/* Common Concerns List */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
              <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-[#0D9488]" />
                Common Hair &amp; Scalp Concerns Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#334155]">
                {commonHairConcerns.map((concern, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              These symptoms can have very different biological drivers. For example, temporary shedding may occur after a significant febrile illness or psychological stress (telogen effluvium), while gradual thinning may be associated with genetic androgenetic alopecia. Patchy hair loss (alopecia areata) represents an autoimmune process requiring a completely different diagnostic evaluation.
            </p>

            <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#D8E1F5] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
                A consultation with a qualified healthcare professional in Manjeri can help differentiate between temporary shedding, scalp infections, and progressive pattern hair loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Hair Homoeopathic Treatment in Manjeri: Understanding Your Options */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT LANDSCAPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Hair Homoeopathic Treatment in Manjeri: Understanding Your Options
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People exploring <strong>Homoeopathic Hair Treatment in Manjeri</strong> may wish to discuss hair fall, scalp concerns, or their general health with a healthcare provider.
            </p>

            <p>
              A consultation should begin with a careful review of symptoms and medical history. The healthcare professional may ask when the hair loss started, whether it is gradual or sudden, whether the scalp is itchy or inflamed, and whether the patient has experienced recent illness, weight changes, nutritional concerns, or changes in medication.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Distinguishing Consultation from Scientific Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    It is important to distinguish between receiving a consultation and having evidence that a particular treatment works. <strong>Reliable scientific evidence has not established homoeopathy as an effective treatment for hair loss, alopecia, or other scalp disorders.</strong> Patients should receive accurate information about established treatment options before making decisions.
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Evidence-based management depends on the cause of the problem:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-[#475569] space-y-1">
                    <li><strong>Nutritional deficiencies:</strong> Require targeted blood testing and clinical dietary correction.</li>
                    <li><strong>Genetic hair loss:</strong> May respond to medically recognized therapies when started early.</li>
                    <li><strong>Scalp fungal infections:</strong> Require specific antifungal medication to prevent scarring.</li>
                    <li><strong>Inflammatory scalp conditions:</strong> Need medically prescribed topical treatments.</li>
                    <li><strong>Post-illness shedding:</strong> Typically improves spontaneously once physiological equilibrium is restored.</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              People considering complementary healthcare should discuss their choices with a qualified medical professional and should not stop prescribed treatments without appropriate advice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Seek Hair Treatment in Manjeri? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL CONSULTATION SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Seek Hair Treatment in Manjeri?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair loss can affect confidence, emotional well-being, and everyday life. Some people notice increased hair shedding while washing or combing their hair, while others gradually observe a wider parting, reduced density, or changes around the hairline. Seeking <strong>Hair Treatment in Manjeri</strong> helps patients understand these changes and identify appropriate next steps.
          </p>

          {/* Consultation Checklist */}
          <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
            <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#303A88]" />
              A Comprehensive Hair-Health Consultation Covers:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              {consultationPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B]">
            This information helps a healthcare professional determine whether the problem is likely to be temporary, genetic, inflammatory, infectious, or associated with another systemic health condition.
          </p>
        </div>
      </section>

      {/* Section 4: Hair Fall Treatment in Manjeri: Common Causes of Hair Shedding (5 In-Depth Cards) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              ETIOLOGY &amp; MECHANISMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Hair Fall Treatment in Manjeri: Common Causes of Hair Shedding
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Understanding the five primary triggers responsible for acute and chronic hair shedding.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {commonCauses.map((cause) => (
              <div
                key={cause.id}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#0D9488]/30 transition-all space-y-3"
              >
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {cause.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cause.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#D8E1F5] flex items-center gap-2.5 text-xs text-[#0F766E] font-medium">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{cause.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Hair Loss Treatment in Manjeri: Accurate Assessment */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DIAGNOSTIC PRECISION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Hair Loss Treatment in Manjeri: The Importance of Accurate Assessment
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People looking for <strong>Hair Loss Treatment in Manjeri</strong> should understand that hair loss is a clinical symptom rather than a single disease. Identifying the cause is often more important than choosing a treatment based solely on the appearance of the hair.
            </p>

            <p>
              A healthcare professional may examine the scalp and hair pattern, review medical history, and recommend tests when indicated. Depending on the suspected cause, investigations may include a complete blood count (CBC), iron studies (serum ferritin), thyroid testing (TSH), or other targeted hormonal assessments.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                Exercise Caution Regarding Guaranteed Regrowth Claims
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-amber-900/90">
                Patients should be cautious about products or clinics that promise guaranteed hair regrowth, permanent cures, or dramatic results within a fixed number of days. Hair growth biological cycles take months, and outcomes depend fundamentally on the specific diagnosis and adherence to treatment. Homoeopathy has not been proven to treat hair loss effectively and should not replace medical assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Hair and Scalp Treatment in Manjeri (4 Scalp Condition Cards) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              SCALP HEALTH INTERACTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Hair and Scalp Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Hair and scalp health are closely connected. A scalp affected by inflammation, fungal colonization, or irritation requires specific dermatological care:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {scalpProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2 shadow-2xs"
              >
                <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Choosing a Hair Doctor in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL SELECTION CRITERIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Choosing a Hair Doctor in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              A <strong>Hair Doctor in Manjeri</strong> can evaluate persistent hair loss and determine whether a medical condition may be contributing to the problem. A suitable healthcare professional should:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {doctorCriteria.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#D8E1F5] flex items-start gap-3 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            People searching for a <strong>Hair Specialist in Manjeri</strong> should verify the practitioner's qualifications and scope of practice. A qualified dermatologist may be particularly helpful when hair loss is severe, unexplained, patchy, or associated with scalp inflammation.
          </div>
        </div>
      </section>

      {/* Section 8: The Role of a Homoeopathic Doctor for Hair Problems in Manjeri */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PROFESSIONAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              The Role of a Homoeopathic Doctor for Hair Problems in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              A <strong>Homoeopathic Doctor for Hair Problems in Manjeri</strong> may offer consultations for individuals who want to discuss hair and scalp concerns. However, patients should understand that homoeopathy has not been established as an effective treatment for hair loss or scalp disorders.
            </p>

            <p>
              Hair loss can sometimes be an early clinical sign of iron deficiency anemia, a thyroid disorder, inflammatory scalp disease (lichen planopilaris), or another condition that needs specific treatment. Delaying diagnosis in favor of an unproven remedy may postpone appropriate medical care.
            </p>

            <p>
              People who choose complementary healthcare should inform all their healthcare providers about all remedies and supplements they use. Prescribed medicines should never be stopped or changed without advice from the prescribing professional. The main priority should always be an accurate diagnosis, realistic expectations, and access to evidence-based treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Everyday Habits That Support Hair Health */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#45AC4B] block">
              SUPPORTIVE PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Everyday Habits That Support Hair Health
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Healthy daily habits can support general well-being and help reduce some avoidable forms of hair damage. However, lifestyle changes alone cannot treat every cause of hair loss:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {everydayHabits.map((habit) => (
              <div
                key={habit.number}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] font-bold text-xs flex items-center justify-center mb-3">
                    {habit.number}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                    {habit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {habit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: When Should You Consult a Hair Specialist in Manjeri? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-rose-700 block">
              WHEN TO SEEK MEDICAL EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Consult a Hair Specialist in Manjeri?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Consider arranging a medical assessment if you notice:
            </p>
          </div>

          {/* Indications checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {whenToConsultDoctor.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex items-start gap-3 mt-4">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p>
              <strong>Prompt Evaluation Required:</strong> Seek prompt medical advice if the scalp becomes painful, hot, or swollen, or if hair loss occurs alongside signs of acute bacterial infection or scarring alopecia.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: What to Expect at a Hair Care Clinic in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL APPOINTMENT PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Expect at a Hair Care Clinic in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              When visiting a <strong>Hair Care Clinic in Manjeri</strong>, it can be helpful to prepare a brief history of your symptoms. Note when the hair loss began, whether it is getting worse, and whether you have experienced recent illness, major stress, weight changes, or changes in medication.
            </p>

            <p>
              The healthcare professional may examine the hair and scalp and discuss your medical history. Depending on the findings, they may recommend laboratory testing or referral to a dermatologist. Treatment recommendations should reflect the diagnosis and individual circumstances, explaining expected benefits, potential risks, limitations, and the time needed to assess progress.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#1E2559] font-medium leading-relaxed">
              A Homoeopathy Clinic for Hair Problems in Manjeri should communicate honestly about the evidence supporting its services. Homoeopathy has not been established as an effective treatment for hair loss, and patients should not be advised to postpone necessary medical evaluation.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (8 FAQs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Questions Patients Ask About Hair Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Reliable, evidence-grounded answers to help patients make informed decisions about hair and scalp care.
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
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#EEF2FB]/50 transition-colors"
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
      <section id="booking-section" className="py-16 bg-[#F0FDFA] border-b border-[#CCFBF1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Hair Health Consultation
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
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
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

            <button
              onClick={() => {
                setCurrentView('piles-homoeopathic-clinic-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#45AC4B] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#45AC4B] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#45AC4B] transition-colors">
                  Piles Clinic in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Haemorrhoids consultation, fissure symptoms, and anorectal care.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#45AC4B] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
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
          </div>
        </div>
      </section>

      {/* Conclusion & Clinic Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] via-[#1B3A4B] to-[#1E2559] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#99F6E4]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Conclusion &amp; Next Steps Towards Better Hair Health
          </h2>

          <div className="text-sm sm:text-base text-[#D3DBF4] max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Hair and scalp concerns can have several causes, and understanding the underlying problem is essential for choosing appropriate care. Whether you are experiencing excessive hair fall, thinning hair, dandruff, scalp irritation, or patchy hair loss, timely assessment can help you understand your options.
            </p>
            <p>
              People searching for <strong>Hair Homoeopathic Treatment in Manjeri</strong>, <strong>Hair Fall Treatment in Manjeri</strong>, or a <strong>Homoeopathy Clinic for Hair Problems in Manjeri</strong> should look for providers who communicate transparently, respect patient privacy, and recognise when medical evaluation is necessary.
            </p>
            <p>
              Homoeopathy has not been established as an effective treatment for hair loss or scalp disorders. It should not replace evidence-based medical care or delay diagnosis of an underlying condition.
            </p>
            <p className="font-medium text-white">
              By maintaining healthy hair-care habits, seeking qualified medical advice, and making informed decisions about treatment, individuals can take practical steps towards protecting their hair and scalp health.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0D9488]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
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
      <RegionalRelatedGuides currentGuideKey="hair-treatment-manjeri" />
    </div>
  );
};
