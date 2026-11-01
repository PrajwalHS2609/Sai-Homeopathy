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
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const HairTirurPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for hair fall, thinning, dandruff, and scalp health (Tirur patient guide).'
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
    navigateToBookingWithReason('Hair & Scalp Consultation - Tirur', 'online');
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
      title: 'Multifactorial Causes of Hair Fall',
      desc: 'Hair fall can stem from genetics, physical or emotional stress, hormonal shifts, nutritional deficiencies, medications, or inflammatory scalp conditions.',
    },
    {
      title: 'Scalp Health & Density Link',
      desc: 'Dandruff, itching, excessive dryness, and patchy hair loss have distinct underlying causes and necessitate differentiated therapeutic interventions.',
    },
    {
      title: 'Identify Root Cause First',
      desc: 'Accurately identifying whether shedding is temporary telogen effluvium or progressive pattern thinning is essential before choosing a treatment plan.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Reliable scientific evidence has not established that homoeopathy effectively treats hair loss, regrows hair follicles, or cures scalp diseases.',
    },
    {
      title: 'Evidence-Based Medical Care',
      desc: 'A qualified dermatologist or registered healthcare professional can assess persistent hair problems and recommend evidence-based therapies.',
    },
    {
      title: 'Avoid Unverified Self-Treatment',
      desc: 'Avoid self-prescribing medications, consuming unverified high-dose supplements, or applying harsh irritant oils to an inflamed scalp.',
    },
    {
      title: 'Emergency & Urgent Signs',
      desc: 'Sudden rapid hair loss, painful scalp inflammation, follicular pus, or expanding bald patches require prompt clinical medical assessment.',
    },
  ];

  // 5 Common Hair and Scalp Problems from user document
  const commonProblems = [
    {
      number: '01',
      title: 'Excessive Hair Fall (Acute & Chronic Telogen Effluvium)',
      badge: 'Diffuse Shedding',
      desc: 'Increased shedding occurs when an abnormally high percentage of growing hairs prematurely enter the resting (telogen) phase. Triggers include high fever, severe viral illness (dengue, COVID-19), surgical trauma, childbirth, severe emotional stress, rapid weight loss, or iron deficiency.',
      clinicalDetail:
        'Patients typically notice diffuse shedding across the entire scalp, with clumps coming out during washing or brushing. Blood investigations (ferritin, hemoglobin, TSH, vitamin D3) help uncover reversible metabolic triggers.',
      managementFocus: 'Resolving the underlying physical trigger, replenishing depleted micronutrients, and gentle hair handling.',
    },
    {
      number: '02',
      title: 'Gradual Hair Thinning (Androgenetic Alopecia)',
      badge: 'Pattern Miniaturisation',
      desc: 'Gradual reduction in hair shaft caliber and density driven by genetic sensitivity of hair follicles to dihydrotestosterone (DHT). In men, it creates receding temples and crown thinning (Norwood scale); in women, it leads to widening of the central part line with preserved frontal hairline (Ludwig scale).',
      clinicalDetail:
        'Unlike acute shedding, androgenetic alopecia progresses slowly over months and years through follicular miniaturisation. Early clinical intervention is crucial to preserve existing follicle diameter.',
      managementFocus: 'Clinically proven topical minoxidil, oral anti-androgens under prescription, and trichoscopic monitoring.',
    },
    {
      number: '03',
      title: 'Dandruff and Scalp Flaking (Seborrhoeic Dermatitis)',
      badge: 'Desquamation & Microbes',
      desc: 'Dandruff results from accelerated shedding of epidermal cells on the scalp, frequently aggravated by overproliferation of Malassezia yeast feeding on sebum. When accompanied by redness, greasy yellowish scales, and itch, it represents seborrhoeic dermatitis.',
      clinicalDetail:
        'Persistent thick scales should not be assumed to be simple dandruff; scalp psoriasis, tinea capitis, and contact allergies produce similar flaking and require precise differential diagnosis.',
      managementFocus: 'Medicated antifungal shampoos (ketoconazole, zinc pyrithione, ciclopirox olamine) and gentle sebum management.',
    },
    {
      number: '04',
      title: 'Dry and Itchy Scalp (Scalp Pruritus & Sensitivity)',
      badge: 'Barrier Irritation',
      desc: 'A dry, itchy scalp develops when harsh surfactants, chemical hair dyes, synthetic fragrances, frequent hot water washing, or low humidity deplete scalp natural lipids. Contact dermatitis from topical hair oils or serums is also common in coastal Kerala.',
      clinicalDetail:
        'Vigorous scratching damages the scalp barrier, introducing opportunistic bacteria (folliculitis) and causing mechanical hair shaft breakage. Discontinuing recently introduced products is an essential first diagnostic step.',
      managementFocus: 'Sulfate-free gentle cleansers, scalp barrier hydration, cool water rinses, and avoiding harsh homemade pastes.',
    },
    {
      number: '05',
      title: 'Patchy Hair Loss (Alopecia Areata & Fungal Tinea)',
      badge: 'Localized Bald Patches',
      desc: 'Patchy loss creates sharply demarcated, coin-shaped smooth bald spots. Alopecia areata is an autoimmune condition where T-lymphocytes mistakenly attack anagen hair bulbs. Fungal ringworm (tinea capitis) causes scaly patches with broken "black dot" hairs.',
      clinicalDetail:
        'Distinguishing autoimmune patches from fungal infections is critical: fungal infections require systemic antifungal medications, while steroid or anti-inflammatory modalities are used for alopecia areata.',
      managementFocus: 'Dermatological trichoscopy, fungal scraping, intralesional corticosteroids, or topical immunotherapy.',
    },
  ];

  // 7 Contributing factors
  const contributingFactors = [
    {
      title: 'Genetic Susceptibility',
      desc: 'Hereditary traits inherited from either maternal or paternal lineage determine follicular DHT receptor sensitivity and the rate of patterned thinning.',
    },
    {
      title: 'Nutritional Deficiencies',
      desc: 'Low serum ferritin (iron stores), vitamin D3 deficiency, inadequate dietary protein, or zinc shortages compromise optimal hair shaft keratinisation.',
    },
    {
      title: 'Hormonal Fluctuations',
      desc: 'Thyroid dysfunction (hypothyroidism/hyperthyroidism), polycystic ovary syndrome (PCOS), pregnancy, and postpartum estrogen drops disrupt normal cycles.',
    },
    {
      title: 'Severe Stress & Systemic Illness',
      desc: 'Major emotional shock, systemic infections, high-grade fevers, and surgical operations shock anagen follicles into synchronous premature telogen shedding.',
    },
    {
      title: 'Inflammatory Scalp Conditions',
      desc: 'Seborrhoeic dermatitis, scalp psoriasis, folliculitis decalvans, and fungal kerions create perifollicular inflammation that weakens hair anchoring.',
    },
    {
      title: 'Prescription Medications',
      desc: 'Certain blood pressure drugs, anticoagulants, antidepressants, retinoids, or chemotherapy agents list telogen shedding as an established side effect.',
    },
    {
      title: 'Damaging Hair-Care Practices',
      desc: 'Traction from tight buns, braids, or hijabs pinned too tightly (traction alopecia), repeated chemical straightening, and frequent high-heat blow drying.',
    },
  ];

  // 5 Evidence-based treatment options
  const evidenceBasedOptions = [
    {
      step: '01',
      title: 'Evidence-Based Care for Pattern Hair Loss',
      badge: 'Androgenetic Regimens',
      desc: 'Validated pharmacological therapies slow miniaturisation, prolong the anagen growth cycle, and increase hair shaft diameter.',
      points: [
        'Topical Minoxidil (2% for women, 5% for men) applied consistently to stimulate microcirculation and anagen duration',
        'Prescription oral 5-alpha reductase inhibitors for suitable male patients under qualified medical supervision',
        'Platelet-Rich Plasma (PRP) or low-level laser therapy (LLLT) as adjunctive modalities in specialized dermatology clinics',
      ],
    },
    {
      step: '02',
      title: 'Targeted Therapy for Dandruff & Scalp Dermatitis',
      badge: 'Antimicrobial & Keratolytic',
      desc: 'Specific medical formulations control fungal Malassezia yeast colonization and regulate epidermal hyper-proliferation.',
      points: [
        'Ketoconazole 2% and Zinc Pyrithione shampoos used twice weekly with a 5-minute scalp contact time',
        'Salicylic acid or coal tar shampoos for thick hyperkeratotic plaques associated with scalp psoriasis',
        'Short-course mild topical corticosteroid lotions prescribed for severe inflammatory flares and burning itch',
      ],
    },
    {
      step: '03',
      title: 'Correction of Nutritional & Metabolic Deficiencies',
      badge: 'Biochemical Restoration',
      desc: 'Restoring physiological nutrient levels provides hair matrix keratinocytes with the necessary building blocks for healthy synthesis.',
      points: [
        'Oral iron supplementation (ferrous bisglycinate or ascorbate) targeted to achieve serum ferritin levels above 50 ng/mL',
        'Correction of vitamin D3 deficiency through physician-directed weekly oral cholecalciferol regimens',
        'Dietary guidance to ensure adequate intake of bioavailable dietary protein (eggs, legumes, fish, dairy) and zinc',
      ],
    },
    {
      step: '04',
      title: 'Systemic Antifungal Treatment for Scalp Ringworm',
      badge: 'Tinea Capitis Protocol',
      desc: 'Topical shampoos cannot penetrate deep into the hair shaft cortex when dermatophytes infect hair follicles.',
      points: [
        'Oral antifungal therapy (griseofulvin or terbinafine) taken for 4 to 8 weeks as prescribed by a medical doctor',
        'Screening household members, school contacts, and shared combs/brushes to prevent re-infection',
        'Strict avoidance of applying unverified topical steroid creams that exacerbate fungal dermatophytosis',
      ],
    },
    {
      step: '05',
      title: 'Immunomodulatory Care for Alopecia Areata',
      badge: 'Autoimmune Protocols',
      desc: 'Medical approaches calm the autoimmune lymphocytic swarm around follicular bulbs to allow spontaneous hair regrowth.',
      points: [
        'Intralesional corticosteroid injections (triamcinolone acetonide) administered by dermatologists directly into bald patches',
        'High-potency topical corticosteroids or topical calcineurin inhibitors for early localized lesions',
        'Systemic JAK inhibitors for severe, extensive alopecia areata or alopecia universalis under specialist care',
      ],
    },
  ];

  // 4 Selection criteria for choosing a hair specialist
  const selectionCriteria = [
    {
      number: '01',
      title: 'Check Qualifications & Medical Council Registration',
      desc: 'Verify that your provider holds recognized degrees (such as MBBS/MD Dermatology or BHMS) and active state medical council registration. Understand the precise scope and limitations of the care offered.',
    },
    {
      number: '02',
      title: 'Comprehensive Diagnostic Evaluation',
      desc: 'A worthwhile consultation includes a careful history of shedding onset, scalp dermoscopy/trichoscopy, hair pull tests, review of systemic health, and blood tests rather than quick superficial glance.',
    },
    {
      number: '03',
      title: 'Transparent Treatment Plan & Realistic Expectations',
      desc: 'Your clinician should clearly outline the therapeutic goals, expected timelines (hair cycles require at least 3–6 months to assess progress), potential side effects, and maintenance requirements.',
    },
    {
      number: '04',
      title: 'Strict Caution Against "Guaranteed Cure" Claims',
      desc: 'Hair biology is complex. Exercise extreme caution toward centers advertising 100% guaranteed regrowth, permanent cures for genetic baldness, or magical results within 7 to 14 days.',
    },
  ];

  // 8 Consultation preparation points
  const preparationPoints = [
    {
      icon: Calendar,
      title: 'Onset Timeline',
      detail: 'Note exactly when excessive hair fall or scalp itching started (e.g., after an illness, medication, or delivery).',
    },
    {
      icon: Activity,
      title: 'Pattern of Hair Loss',
      detail: 'Identify whether hair is thinning diffusely, receding at the temples, widening at the crown, or falling in round patches.',
    },
    {
      icon: Heart,
      title: 'Recent Physical Illness or Stress',
      detail: 'Record any high fevers, dengue, surgical procedures, dramatic weight loss, or major emotional stressors in the last 6 months.',
    },
    {
      icon: FileText,
      title: 'Current Medications & Supplements',
      detail: 'Bring a complete list of all allopathic prescriptions, birth control pills, thyroid medicine, vitamins, and hair gummies.',
    },
    {
      icon: Droplets,
      title: 'Hair Products & Herbal Oils Used',
      detail: 'List all shampoos, hair oils (ayurvedic/coconut/castor), serums, conditioners, and chemical treatments applied recently.',
    },
    {
      icon: AlertCircle,
      title: 'Family History of Hair Thinning',
      detail: 'Note whether your parents, grandparents, or siblings have experienced premature baldness or female pattern thinning.',
    },
    {
      icon: AlertTriangle,
      title: 'Associated Scalp Sensations',
      detail: 'Describe if you feel burning, itching, tenderness, scalp pain (trichodynia), flaking, or small pimples/pustules.',
    },
    {
      icon: Eye,
      title: 'Photographic Progression Record',
      detail: 'Bring clear, well-lit photos of your hair part line, crown, and hairline taken over previous months to demonstrate changes.',
    },
  ];

  // 8 Daily hair-care habits
  const dailyHabits = [
    {
      title: 'Choose a Gentle, Scalp-Appropriate Shampoo',
      desc: 'Wash your scalp as often as needed to remove excess oil and environmental grime without stripping natural moisture. If your scalp is oily, daily or alternate-day gentle washing prevents seborrhoeic buildup.',
    },
    {
      title: 'Handle Wet Hair With Care',
      desc: 'Wet hair shafts have higher elasticity and break easily when stretched. Use a wide-toothed seamless comb, avoid vigorous towel rubbing, and pat dry gently with a soft cotton towel or microfibre wrap.',
    },
    {
      title: 'Limit High-Temperature Heat Styling',
      desc: 'Frequent use of blow-dryers on high heat, flat irons, and curling wands causes moisture vaporisation within the hair cortex, creating "bubble hair" and severe shaft brittleness.',
    },
    {
      title: 'Avoid Tight, High-Tension Hairstyles',
      desc: 'Constant traction from tight ponytails, high buns, cornrows, or tightly pinned religious coverings pulls on frontal and temporal follicles, causing irreversible traction alopecia over time.',
    },
    {
      title: 'Nourish Your Follicles With a Balanced Diet',
      desc: 'Hair is predominantly composed of keratin protein. Ensure your daily meals supply adequate protein, iron (green leafy vegetables, lentils, eggs, lean meats), zinc, and healthy essential fatty acids.',
    },
    {
      title: 'Protect Your Scalp From Direct UV Radiation',
      desc: 'When hair thinning exposes the crown or part line, solar ultraviolet exposure can burn delicate scalp skin. Wear a light, breathable cotton hat or umbrella during sunny midday hours in Kerala.',
    },
    {
      title: 'Prioritise Restful Sleep & Stress Reduction',
      desc: '7 to 8 hours of restorative sleep regulates circulating cortisol levels. Uncontrolled physiological stress releases neuro-peptides that prematurely push follicles into telogen resting phases.',
    },
    {
      title: 'Exercise Caution With Irritant Home Remedies',
      desc: 'Applying raw onion juice, strong undiluted essential oils, crushed garlic, or caustic herbal pastes can cause severe contact allergic dermatitis, chemical burns, and paradoxical hair loss.',
    },
  ];

  // 12 FAQs (7 from user document + 5 complementary clinical questions for Tirur & Malappuram)
  const faqs = [
    {
      q: 'What causes excessive hair fall?',
      a: 'Common causes include genetic pattern hair loss (androgenetic alopecia), telogen effluvium triggered by acute fever, illness, childbirth, or emotional stress, nutritional deficiencies (especially iron/ferritin and vitamin D3), thyroid imbalances, certain medications, and inflammatory scalp conditions such as seborrhoeic dermatitis. An accurate clinical assessment is the essential first step towards finding the true cause.',
    },
    {
      q: 'Is homoeopathy effective for hair loss?',
      a: 'Reliable scientific evidence has not established that homoeopathy effectively treats hair loss, stimulates new follicle regrowth, or cures inflammatory scalp diseases. While many individuals seek homoeopathic consultations for holistic health discussions, people experiencing persistent, progressive, or patchy hair shedding should obtain an evidence-based medical assessment to avoid irreversible follicular damage.',
    },
    {
      q: 'How can I find a Hair Specialist in Tirur?',
      a: 'Look for a qualified healthcare professional with verified medical council registration who performs a comprehensive scalp examination (including trichoscopy), takes a thorough clinical history, discusses realistic treatment timelines, and arranges laboratory tests or dermatological referrals when necessary. Dermatologists are specially trained in hair and scalp diseases.',
    },
    {
      q: 'Can dandruff cause hair loss?',
      a: 'Ordinary dandruff does not directly destroy hair follicles or cause permanent baldness. However, the intense itching associated with dandruff or seborrhoeic dermatitis can lead to vigorous scratching, which mechanically breaks hair shafts and damages the scalp barrier. Furthermore, severe inflammatory scalp conditions that resemble dandruff can impair healthy hair growth if left untreated.',
    },
    {
      q: 'Which treatment is suitable for hair thinning?',
      a: 'Treatment depends entirely on the diagnosed etiology. For genetic pattern baldness, established medical treatments such as topical minoxidil and prescription anti-androgens help preserve and thicken miniaturised follicles. When thinning is caused by nutritional shortages or thyroid disease, correcting the underlying deficiency or hormonal imbalance restores normal growth cycles.',
    },
    {
      q: 'When should I visit a Hair Care Clinic in Tirur?',
      a: 'You should seek professional medical advice if hair fall continues for more than 2 to 3 months, if you notice distinct bald patches, if your part line is noticeably widening, or if your scalp feels painful, swollen, burning, or shows pustules and crusting. Sudden or rapidly spreading hair loss warrants prompt evaluation.',
    },
    {
      q: 'Can diet improve hair health?',
      a: 'Yes, a balanced diet providing sufficient calories, dietary protein, iron, zinc, and vitamins supports optimal keratin synthesis and cellular turnover in the hair matrix. Correcting a verified deficiency (such as low serum ferritin) often improves telogen shedding; however, taking excessive high-dose supplements without proven deficiency does not boost hair growth and can sometimes cause adverse effects.',
    },
    {
      q: 'How far is Anjali Homoeo Clinic from Tirur for hair consultations?',
      a: 'Anjali Homoeo Clinic is conveniently located in Kuttippuram on the Tirur-Kuttippuram Road, approximately 15 to 20 minutes from Tirur Railway Station and Tirur Bus Stand. We also operate a branch clinic in Puthanathani. Patients from Tirur, Tanur, Tirunnavaya, and surrounding towns can easily visit in person or arrange a confidential online video consultation.',
    },
    {
      q: 'Does hard water or coastal well water in Tirur worsen hair fall?',
      a: 'Hard water containing high concentrations of calcium and magnesium minerals does not kill hair roots or cause genetic baldness. However, mineral deposits can leave a residue on the hair shaft, making it feel dry, stiff, frizzy, and prone to mechanical breakage during brushing. Using a mild chelating or moisturizing shampoo and filtering bath water helps alleviate surface dryness.',
    },
    {
      q: 'How do doctors distinguish between Telogen Effluvium and Pattern Baldness?',
      a: 'Telogen effluvium causes sudden, generalized shedding across the entire scalp (often shedding 200–400 hairs daily) with uniform hair shaft thickness. In contrast, androgenetic alopecia develops gradually over months or years, primarily targeting the crown, temples, and part line, characterized by hair miniaturisation (varying hair shaft thicknesses seen under a trichoscope).',
    },
    {
      q: 'Are traditional hair oils (coconut or herbal oils) enough to treat genetic baldness?',
      a: 'While pure coconut oil is an excellent pre-wash conditioner that penetrates the hair shaft to prevent protein loss and cuticle breakage, it cannot block dihydrotestosterone (DHT) or reverse genetic follicle miniaturisation. Relying solely on oils for progressive pattern hair loss delays effective medical therapies that protect follicular density.',
    },
    {
      q: 'Can I book an online video consultation for hair triage from Tirur?',
      a: 'Yes. Dr. Anjali Chandrasekhar provides online video consultations for patients in Tirur. During the consultation, she reviews your shedding timeline, evaluates clear photos of your scalp and part line, explores dietary and lifestyle contributors, and provides clear triage guidance on whether in-person clinic visits or dermatologist referrals are needed.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Hair Treatment in Tirur"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Hair Treatment in Tirur"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Clinical Trichology Guide • Tirur Patients"
        title="Homoeopathic Treatment in Tirur for Hair and Scalp"
        subtitle="Individualized clinical guidance for patients in Tirur and Malappuram experiencing excessive hair fall, thinning hair, receding hairlines, dandruff, and scalp health concerns."
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

      {/* Important Key Takeaways (Executive Summary) */}
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
                Important Key Takeaways for Patients in Tirur
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

      {/* Section 1: Understanding Hair and Scalp Health */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              BIOLOGICAL FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Hair and Scalp Biology
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Hair growth follows an asynchronous biological cycle consisting of three coordinated phases: the <strong>anagen</strong> (active growth phase lasting 2 to 7 years), <strong>catagen</strong> (transitional regression lasting 2 to 3 weeks), and <strong>telogen</strong> (resting phase lasting approximately 3 months), terminating in exogen shedding.
            </p>
            <p>
              It is completely physiological to shed 50 to 100 hairs each day as old resting telogen shafts make way for emerging anagen fibers. However, when shedding exceeds this threshold, or when emerging hairs become progressively finer, shorter, and hypopigmented (miniaturisation), medical assessment is indicated.
            </p>
            <p>
              The scalp skin provides the living micro-environment for over 100,000 hair follicles. It possesses a high density of sebaceous glands producing sebum, an acidic lipid mantel that protects against microbial pathogens. When the scalp microflora (such as <em>Malassezia</em> species) becomes unbalanced, or when inflammation, eczema, or fungal dermatophytes invade, follicular integrity and anchor stability are compromised.
            </p>
            <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#D8E1F5] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
                Hair loss is not a single disease. Treating temporary shedding after an illness with hair oils is ineffective, just as treating an inflammatory fungal infection with regular dandruff shampoo fails to prevent permanent follicular scarring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Common Hair and Scalp Problems */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Hair and Scalp Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              People searching for Hair Treatment in Tirur experience diverse symptoms. Recognizing these distinctions prevents wasted time on inappropriate remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {commonProblems.map((cond, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#0D9488]/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                    {cond.number} • {cond.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {cond.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cond.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#D8E1F5] text-xs text-[#0F766E] font-medium">
                  <strong>Clinical Note:</strong> {cond.clinicalDetail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Homoeopathic Hair Treatment in Tirur: Important Information */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homoeopathic Hair Treatment in Tirur: Important Information
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Homoeopathic Hair Treatment in Tirur</strong> often seek a consultation that considers their overall physical health, sleep patterns, dietary routines, emotional stress, and personal medical history.
            </p>
            <p>
              A registered homoeopathic practitioner conducts an individualized consultation exploring how long hair fall has occurred, seasonal variations, family history, and general vitality.
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
                    A detailed, empathetic consultation does not prove that a treatment is clinically effective. <strong>Reliable, reproducible scientific evidence has not established that homoeopathy effectively treats hair loss, stimulates new follicle regrowth, or cures scalp conditions such as severe seborrhoeic dermatitis, alopecia areata, or tinea capitis.</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Hair shedding can sometimes be an early clinical indicator of an underlying systemic medical illness—such as severe iron-deficiency anaemia, Hashimoto’s thyroiditis, or autoimmune disease. Relying exclusively on homoeopathic remedies without standard medical testing may delay necessary diagnosis and timely treatment.
                  </p>
                </div>
              </div>
            </div>

            <p>
              If you consult a homoeopathic doctor in Tirur, ask about their recognized qualifications, council registration, the realistic intent of any recommended treatment, and whether an evaluation by a dermatologist is warranted. Avoid providers promising &ldquo;100% guaranteed regrowth&rdquo; or claiming permanent cures within a fixed number of days.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: What Causes Hair and Scalp Problems? (7 Contributing Factors) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              ETIOLOGY &amp; MECHANISMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What Causes Hair and Scalp Problems?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Hair problems rarely have a single isolated reason. Identifying the interplay of systemic, genetic, and scalp factors guides appropriate intervention.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {contributingFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#0D9488]/30 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Choosing a Hair Specialist in Tirur (4 Selection Criteria) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PROVIDER SELECTION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Choosing a Hair Specialist in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Selecting the right healthcare professional ensures you receive an accurate diagnosis rather than unsubstantiated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {selectionCriteria.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88]/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#303A88] text-white flex items-center justify-center font-bold text-xs">
                    {item.number}
                  </span>
                  <h3 className="font-bold text-base text-[#1E2559]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Evidence-Based Treatments for Hair and Scalp Problems */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              THERAPEUTIC SCIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Treatments for Hair and Scalp Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              There is no one-size-fits-all product for hair complaints. The most appropriate therapy is tailored strictly to the confirmed medical diagnosis.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8E1F5] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1E2559] text-white flex items-center justify-center font-bold text-xs">
                      {opt.step}
                    </span>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      {opt.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] w-fit">
                    {opt.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {opt.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {opt.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-white border border-[#D8E1F5] text-xs text-[#334155] flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Daily Hair-Care Habits for a Healthy Scalp */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PREVENTIVE MAINTENANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Daily Hair-Care Habits for a Healthy Scalp
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Gentle, consistent hair hygiene practices minimize shaft breakage and maintain barrier lipids, although they cannot alter genetic traits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {dailyHabits.map((habit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#0D9488]/40 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#1E2559]">
                    {habit.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {habit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Preparing for a Hair and Scalp Consultation */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              PATIENT PREPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Preparing for a Hair and Scalp Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Organizing details about your symptoms and previous treatments ensures a far more thorough and accurate clinical evaluation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              {preparationPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-[#D8E1F5]">
                    <Icon className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E2559] block">{item.title}:</strong>
                      <span className="text-[#64748B] text-xs">{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: When Should You Seek Medical Attention? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
              CLINICAL TRIAGE &amp; SAFETY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Certain hair and scalp symptoms signify active inflammatory or infectious processes requiring urgent clinical evaluation to prevent permanent follicle destruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                Prompt Clinical Review Advised
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-900/90">
                <li>• Sudden, rapid, or extensive shedding without a clear explanation.</li>
                <li>• New coin-shaped smooth bald patches or rapidly widening part lines.</li>
                <li>• Severe scalp itching, thick greasy scaling, or persistent burning pain.</li>
                <li>• Hair loss occurring alongside severe fatigue, cold intolerance, or weight shifts.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-rose-900">
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                High-Risk &amp; Scarring Warning Signs
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-900/90">
                <li>• Scalp swelling, boggy tender masses, or active pus discharge (Kerion).</li>
                <li>• Crusting pustules clustered tightly around hair follicle exits.</li>
                <li>• Smooth, shiny scalp skin where follicular openings have disappeared.</li>
                <li>• High fever accompanied by a painful, rapidly spreading scalp rash.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions (12 Interactive FAQs) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              PATIENT INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Hair &amp; Scalp Treatment in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Common questions from patients in Tirur and Malappuram regarding hair fall, homoeopathy, dandruff, and diagnostic procedures.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-[#F8FAFD] overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#0D9488] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0D9488] shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0D9488]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-4 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] block">
              DIRECT APPOINTMENT SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book Your Hair &amp; Scalp Consultation Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select an in-clinic appointment at our Kuttippuram center or schedule a secure online video consultation with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-sm">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="hair-treatment-tirur" />
    </div>
  );
};
