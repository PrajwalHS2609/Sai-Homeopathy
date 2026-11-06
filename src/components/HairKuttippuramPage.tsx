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
  Utensils,
  Compass,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const HairKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for hair treatment in Kuttippuram (hair fall, thinning, dandruff, scalp health).'
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
    navigateToBookingWithReason('Hair & Scalp Consultation - Kuttippuram', 'online');
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
      desc: 'Hair fall can occur due to genetics, hormonal changes, nutritional deficiencies, thyroid disorders, stress and scalp conditions.',
    },
    {
      title: 'Temporary Shedding vs. Progressive Thinning',
      desc: 'Temporary hair shedding (telogen effluvium) is clinically distinct from progressive miniaturization (pattern loss) or scarring alopecia.',
    },
    {
      title: 'Condition-Specific Management',
      desc: 'Conditions such as alopecia areata, androgenetic alopecia and scalp fungal infections require fundamentally different treatment approaches.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has not been established by reliable scientific evidence as an effective treatment for hair loss or hair regrowth.',
    },
    {
      title: 'Prompt Medical Assessment',
      desc: 'Persistent, excessive or sudden hair loss should be evaluated by a qualified medical professional or dermatologist to confirm the diagnosis.',
    },
    {
      title: 'Nutritional & Scalp Hygiene Support',
      desc: 'Balanced nutrition, gentle hair care practices and appropriate scalp hygiene support general hair health and reduce preventable breakage.',
    },
    {
      title: 'Avoid Unverified Regrowth Products',
      desc: 'Avoid unverified hair growth oils or miracle promises, and do not discontinue prescribed medical treatments without clinical advice.',
    },
  ];

  // 6 Common Hair Problems
  const commonProblems = [
    {
      number: '01',
      title: '1. Excessive Hair Fall (Telogen Effluvium)',
      badge: 'Diffuse Shedding',
      desc: 'Hair fall is one of the most frequent complaints among men and women. In acute telogen effluvium, an increased proportion of hair follicles abruptly shift from the active growing phase (anagen) into the shedding phase (telogen), causing widespread thinning 2 to 3 months after a triggering event.',
      causes: [
        'High physiological or emotional stress',
        'Recent severe illness, high fever, or major surgery',
        'Nutritional deficiencies (low serum ferritin/iron, zinc, protein)',
        'Postpartum hormonal shifts after childbirth',
        'Thyroid dysfunction (hypothyroidism or hyperthyroidism)',
        'Certain prescription medications',
      ],
      insight:
        'Temporary shedding often resolves once the underlying trigger is corrected, but persistent shedding requires comprehensive blood testing.',
    },
    {
      number: '02',
      title: '2. Male & Female Pattern Hair Loss (Androgenetic Alopecia)',
      badge: 'Progressive Follicular Miniaturization',
      desc: 'Pattern hair loss is a progressive, genetically determined condition driven by the sensitivity of hair follicles to dihydrotestosterone (DHT), leading to gradual follicle shrinkage (miniaturization) and shorter hair cycles.',
      causes: [
        'Men: Frontotemporal hairline recession (bitemporal M-shape) and thinning over the vertex / crown',
        'Women: Diffuse thinning over the mid-frontal scalp with preservation of the frontal hairline and widening of the central part line',
        'Strong genetic inheritance from maternal or paternal family lines',
      ],
      insight:
        'Early dermatological assessment is crucial because established evidence-based medical treatments (such as topical minoxidil) work best to preserve existing follicles before they fibrose permanently.',
    },
    {
      number: '03',
      title: '3. Alopecia Areata',
      badge: 'Autoimmune Patchy Loss',
      desc: 'Alopecia areata is an autoimmune disorder where cytotoxic T-lymphocytes mistakenly attack hair bulb cells during the anagen phase, causing rapid loss in smooth, round or oval patches on the scalp, beard, or eyebrows.',
      causes: [
        'Dysregulated autoimmune attack against immune-privileged hair follicles',
        'Can range from solitary patches to complete scalp baldness (alopecia totalis)',
        'Often presents with exclamation point hairs at the active margin of bald patches',
      ],
      insight:
        'Medical assessment by a dermatologist is essential to confirm the diagnosis, monitor activity, and discuss evidence-based medical therapies.',
    },
    {
      number: '04',
      title: '4. Dandruff & Scalp Itching (Seborrhoeic Dermatitis)',
      badge: 'Scalp Flaking & Inflammation',
      desc: 'Dandruff is a common scalp condition marked by dead skin cell flaking. When accompanied by erythema, greasy yellow scales, and intense pruritus, it indicates seborrhoeic dermatitis, influenced by Malassezia yeast proliferation.',
      causes: [
        'Proliferation of Malassezia lipophilic yeast feeding on scalp sebum',
        'Associated scalp conditions like scalp psoriasis, contact allergy, or fungal ringworm (tinea capitis)',
        'Chronic scratching damaging the hair shaft and triggering secondary breakage',
      ],
      insight:
        'Identifying the precise scalp diagnosis helps determine whether antifungal shampoos, keratolytics, or anti-inflammatory topical care is indicated.',
    },
    {
      number: '05',
      title: '5. Dry and Damaged Hair',
      badge: 'Shaft Damage & Weathering',
      desc: 'Roughness, lack of shine, split ends, and hair breakage occur when the outer protective cuticle layer is stripped away, leaving the inner cortical keratin fibres vulnerable to snapping.',
      causes: [
        'Excessive high-heat blow-drying, curling irons, and flat irons',
        'Chemical bleaching, straightening, perming, and permanent hair dyes',
        'Harsh sulfated shampoos and mechanical friction from aggressive brushing',
        'Sunlight UV exposure and hard water mineral buildup',
      ],
      insight:
        'Hair shaft breakage is entirely different from root-level hair loss (follicular shedding). Gentle conditioning, reduced heat styling, and protective routines restore cuticle integrity.',
    },
    {
      number: '06',
      title: '6. Premature Greying (Canities)',
      badge: 'Melanocyte Pigment Depletion',
      desc: 'Hair colour is produced by specialized melanocytes within the hair bulb. Premature greying occurs when melanocyte stem cells undergo senescence or oxidative damage earlier than typical physiological ageing (before age 20 in Caucasians or 25 in Asians).',
      causes: [
        'Primary genetic predisposition (strongest predictor)',
        'Nutritional deficiencies (Vitamin B12, copper, severe iron deficiency)',
        'Chronic oxidative stress, smoking, and systemic autoimmune thyroid disorders',
      ],
      insight:
        'A healthcare professional can check for underlying nutritional or endocrine abnormalities if greying develops abruptly in young individuals.',
    },
  ];

  // What Causes Hair Loss?
  const causesOfHairLoss = [
    {
      title: 'Genetic Factors (Androgenetic Alopecia)',
      desc: 'Inherited sensitivity of hair follicles to androgens (dihydrotestosterone) drives progressive follicular miniaturization in both men and women.',
      icon: Activity,
    },
    {
      title: 'Hormonal Changes',
      desc: 'Pregnancy, postpartum drops in oestrogen, menopause, Polycystic Ovary Syndrome (PCOS), and thyroid conditions directly influence follicular cycling.',
      icon: Heart,
    },
    {
      title: 'Nutritional Deficiencies',
      desc: 'Insufficient dietary protein, low serum ferritin (iron stores), zinc, Vitamin D, and Vitamin B12 deprive rapid-dividing hair matrix cells of essential substrates.',
      icon: Utensils,
    },
    {
      title: 'Stress & Systemic Illness',
      desc: 'High physiological or emotional stress elevates systemic cortisol, prematurely triggering telogen effluvium weeks or months after the triggering event.',
      icon: Compass,
    },
    {
      title: 'Scalp Infections & Inflammation',
      desc: 'Tinea capitis (fungal ringworm), folliculitis, and scarring cicatricial alopecias can permanently destroy hair stem cells if not medically treated promptly.',
      icon: ShieldAlert,
    },
  ];

  // 6 Clinic Selection Standards
  const selectionCriteria = [
    {
      number: '01',
      title: 'Recognized Medical Qualifications',
      desc: 'Check that the healthcare practitioner possesses accredited medical qualifications (such as BHMS) and is formally registered with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Detailed Clinical Assessment',
      desc: 'A proper consultation should include detailed questions about the timeline of hair loss, shedding patterns, systemic health, diet, and family history.',
    },
    {
      number: '03',
      title: 'Accurate Differential Diagnosis',
      desc: 'Different types of hair loss require fundamentally different care; telogen effluvium, pattern loss, and alopecia areata must be accurately distinguished.',
    },
    {
      number: '04',
      title: 'Appropriate Diagnostic Testing',
      desc: 'The doctor should recommend targeted blood investigations (ferritin, thyroid profile, CBC) or scalp dermoscopy to pinpoint underlying clinical causes.',
    },
    {
      number: '05',
      title: 'Transparent Treatment Advice',
      desc: 'Look for honest practitioners who clearly disclose the scientific evidence base, realistic timelines, and limitations rather than guaranteeing magical regrowth.',
    },
    {
      number: '06',
      title: 'Timely Dermatologist Referral',
      desc: 'A responsible clinic maintains active referral relationships with consultant dermatologists for biopsy, trichoscopy, or prescription pharmaceuticals.',
    },
  ];

  // Evidence-Based Treatment Options
  const evidenceBasedOptions = [
    {
      title: 'Topical Minoxidil',
      badge: 'Vasodilator & Anagen Extender',
      desc: 'An established, scientifically proven topical solution or foam (2% or 5%) applied to the scalp to prolong the active anagen growth phase and enlarge miniaturized hair follicles in pattern hair loss.',
    },
    {
      title: 'Prescription Medical Therapies',
      badge: 'Androgen Inhibitors',
      desc: 'Oral medications (such as finasteride for adult men) that block the 5-alpha reductase enzyme to decrease scalp DHT levels, prescribed strictly after thorough medical assessment and risk discussion.',
    },
    {
      title: 'Nutritional Correction',
      badge: 'Targeted Supplementation',
      desc: 'Prescription iron/ferritin supplements, vitamin D, zinc, or dietary protein optimization for patients with laboratory-confirmed deficiencies to halt nutritional telogen effluvium.',
    },
    {
      title: 'Thyroid Disorder Management',
      badge: 'Endocrine Regulation',
      desc: 'Medical stabilization of hypothyroidism or hyperthyroidism under physician care, which directly allows hair follicles to resume normal cycling.',
    },
    {
      title: 'Prescription Antifungals',
      badge: 'Fungal Infection Eradication',
      desc: 'Tinea capitis (scalp fungal infection) requires oral prescription antifungal medication (such as terbinafine or griseofulvin) to eradicate deep fungal hyphae in hair follicles.',
    },
    {
      title: 'Dermatological Immunotherapy',
      badge: 'Specialist Protocols',
      desc: 'Intralesional corticosteroid injections, topical immunotherapy, or JAK inhibitors prescribed by dermatologists for active, progressive alopecia areata.',
    },
  ];

  // Healthy Skincare & Hair Habits
  const healthyHabits = [
    {
      title: 'Maintain a Balanced, Nutrient-Dense Diet',
      desc: 'Consume adequate dietary protein (eggs, lentils, fish, paneer, nuts), fresh leafy greens, fruits, whole grains, and rich sources of iron to nourish hair matrix cells.',
      icon: Utensils,
    },
    {
      title: 'Follow Gentle Hair Care Practices',
      desc: 'Wash with a mild, pH-balanced shampoo. Apply conditioner to mid-lengths and ends to reduce friction. Use a wide-tooth comb and never aggressively brush wet hair.',
      icon: Droplets,
    },
    {
      title: 'Limit Heat Styling & Chemical Treatments',
      desc: 'Avoid frequent high-temperature flat irons, curling wands, chemical relaxing, bleaching, and harsh hair dyes that strip moisture and break the hair cortex.',
      icon: Scissors,
    },
    {
      title: 'Avoid Tight Hairstyles (Traction Prevention)',
      desc: 'Avoid repeatedly pulling hair into tight ponytails, high buns, cornrows, or tight braids that exert continuous mechanical tension on the frontal hairline.',
      icon: AlertCircle,
    },
    {
      title: 'Active Stress Management',
      desc: 'Engage in regular physical activity, prioritize 7–8 hours of restful sleep, and practice relaxation techniques to prevent stress-induced telogen effluvium.',
      icon: Heart,
    },
    {
      title: 'Maintain Scalp Hygiene',
      desc: 'Wash your scalp regularly to remove excess sebum, sweat, and environmental pollutants. Never share combs, towels, or hats to prevent contagious fungal transmission.',
      icon: ShieldCheck,
    },
  ];

  // Red Flags / When to Seek Expert Advice
  const redFlags = [
    {
      title: 'Sudden, Rapid, or Clump-Like Shedding',
      desc: 'Losing handfuls of hair suddenly during washing or brushing over a few days, pointing to acute telogen effluvium or drug reaction.',
    },
    {
      title: 'Distinct Round or Oval Bald Patches',
      desc: 'Completely smooth, circumscribed bald patches on the scalp or beard, indicating active alopecia areata.',
    },
    {
      title: 'Severe Scalp Redness, Scaling, or Pus Pustules',
      desc: 'Inflammatory scalp signs suggesting severe seborrhoeic dermatitis, bacterial folliculitis, or kerion fungal infection.',
    },
    {
      title: 'Scalp Pain, Burning, or Tenderness (Trichodynia)',
      desc: 'Persistent burning, tingling, or aching around hair roots, often signaling active follicular inflammation.',
    },
    {
      title: 'Hair Loss Accompanied by Eyebrow / Eyelash Loss',
      desc: 'Loss of body hair or facial hair indicating systemic autoimmune disease (alopecia universalis or frontal fibrosing alopecia).',
    },
    {
      title: 'Scalp Changes That Appear Smooth & Scarred',
      desc: 'Disappearance of follicular openings with smooth shiny skin, pointing to cicatricial (scarring) alopecia requiring emergency dermatological biopsy.',
    },
  ];

  // 10 Detailed FAQs from user prompt
  const faqs = [
    {
      q: '1. What are the common causes of hair fall?',
      a: 'Common causes include genetic pattern hair loss (androgenetic alopecia), hormonal shifts (PCOS, thyroid disease, postpartum), high physical or emotional stress (telogen effluvium), nutritional deficiencies (iron, ferritin, protein, zinc, vitamin D), certain prescription medications, and scalp conditions such as dandruff, seborrhoeic dermatitis, or fungal ringworm.',
    },
    {
      q: '2. Is daily hair fall normal?',
      a: 'Yes. Losing between 50 to 100 strands of hair per day is completely normal as part of the natural hair growth cycle (where old telogen hairs shed to make room for new anagen hairs). However, shedding hair in noticeable clumps, finding excessive hair on pillows and shower drains, or noticing visible thinning warrants professional medical evaluation.',
    },
    {
      q: '3. Can homoeopathy cure hair loss?',
      a: 'Reliable scientific clinical evidence has not established homoeopathy as an effective or curative treatment for hair loss, androgenetic alopecia, or hair regrowth. While some patients explore homoeopathy alongside lifestyle improvements, it should not replace evidence-based medical diagnostics, conventional treatments (such as topical minoxidil), or dermatologist care.',
    },
    {
      q: '4. Can nutritional deficiencies cause hair fall?',
      a: 'Yes. Rapidly dividing hair follicle matrix cells require adequate iron (measured by serum ferritin), protein, zinc, and vitamins. Iron deficiency with or without anaemia is a frequent cause of chronic telogen effluvium, especially in women. Blood tests can confirm deficiencies so that appropriate nutritional correction can be prescribed.',
    },
    {
      q: '5. Does dandruff cause hair loss?',
      a: 'Dandruff itself does not directly destroy hair follicles. However, the intense itching associated with dandruff or seborrhoeic dermatitis leads to repeated mechanical scratching, which injures the hair shaft and cuticle, causing breakage and secondary hair shedding. Controlling scalp inflammation with medicated shampoos helps protect hair.',
    },
    {
      q: '6. Can stress cause temporary hair loss?',
      a: 'Yes. Severe emotional distress, high fever, surgery, or major physical illness can shock a high percentage of growing hair follicles into the resting phase prematurely. This condition, called telogen effluvium, typically causes noticeable diffuse shedding 2 to 3 months after the stressful event. It usually resolves over 6 to 9 months once the stressor is removed.',
    },
    {
      q: '7. Is pattern hair loss reversible?',
      a: 'Pattern hair loss (androgenetic alopecia) is a progressive genetic condition. While it cannot be completely "cured" or reversed to childhood density, established medical treatments—such as topical minoxidil and oral 5-alpha reductase inhibitors—can effectively slow further progression, maintain existing hair, and encourage partial thickening of miniaturized follicles when started early.',
    },
    {
      q: '8. When should I consult a dermatologist for hair fall?',
      a: 'You should consult a dermatologist or medical doctor if you notice sudden dramatic shedding, rapid thinning over a few months, discrete round bald patches, scalp burning or pain, visible scaling with pustules, eyebrow/body hair loss, or signs of scarring where pore openings vanish. Early assessment prevents permanent follicle loss.',
    },
    {
      q: '9. How can I improve my hair health naturally?',
      a: 'You can support hair health by eating a balanced diet rich in protein, iron, and fresh vegetables; washing with a gentle, sulfate-free cleanser; using conditioner to minimize friction; limiting high-heat styling tools and harsh chemical bleaching; avoiding tight traction hairstyles; managing stress; and getting 7–8 hours of quality sleep.',
    },
    {
      q: '10. What should I expect during a hair consultation?',
      a: 'During a consultation, the healthcare professional will take a comprehensive history regarding your hair loss timeline, shedding pattern, dietary intake, family history of hair loss, and current medications. The doctor will examine your scalp, evaluate shedding under magnification (dermoscopy/trichoscopy), and may recommend targeted blood tests or dermatologist referral.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Hair Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Kuttippuram for Hair Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-4 h-4 text-emerald-400" />}
        badgeText="CLINICAL TRICHOLOGY & HAIR GUIDE • KUTTIPPURAM"
        title="Homoeopathic Clinic in Kuttippuram for Hair Treatment"
        subtitle="A comprehensive clinical guide explaining excessive hair fall, pattern thinning, alopecia areata, dandruff, underlying causes, diagnostic investigations, and responsible hair care in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Trichology & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, hair loss history reviews, scalp health assessments, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely dermatologist referrals whenever needed."
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
              Healthy hair is often associated with personal appearance, confidence and overall well-being. However, hair-related concerns such as excessive hair fall, thinning hair, dandruff, scalp itching, dryness and premature greying can affect people of different ages. While losing some hair every day is a normal part of the hair growth cycle, noticeable thinning, sudden hair loss or persistent scalp problems may require professional attention.
            </p>
            <p>
              People searching for a <strong>Homoeopathic Clinic in Kuttippuram for Hair Treatment</strong> may be looking for guidance about recurring hair and scalp concerns. Before choosing a treatment, it is important to understand that hair loss can have several causes, including genetics, hormonal changes, nutritional deficiencies, thyroid disorders, stress, infections and certain medications.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Etiology-Guided Care:</strong> Identifying the underlying cause is essential because different types of hair loss require different management approaches. A treatment suitable for one condition may not be effective for another. If you are experiencing persistent hair fall or scalp problems, consult a qualified healthcare professional for an appropriate assessment. A responsible approach focuses on accurate diagnosis, realistic expectations and evidence-based treatment options.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This guide provides clear clinical insights into hair loss types, root triggers, diagnostic tests, evidence-based options, and everyday hair care in Kuttippuram, Valanchery, Tirur, and Malappuram district.
            </p>
          </div>
        </section>

        {/* 7 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Essential Clinical Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Fundamental principles on hair shedding, diagnostic investigations, and evidence-based management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
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

        {/* Understanding Common Hair Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Clinical Conditions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Understanding Common Hair Problems
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Hair grows through a natural biological cycle involving anagen (growth), catagen (transition), and telogen (resting/shedding) phases. Some shedding is expected as part of this process. However, changes in the growth cycle, damage to hair follicles, or scalp disease can lead to excessive shedding and visible thinning. People looking for <strong>Hair Treatment in Kuttippuram</strong> frequently encounter one or more of these common concerns:
            </p>
          </div>

          <div className="space-y-8">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      {prob.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{prob.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    {prob.desc}
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key Clinical Drivers & Characteristics:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {prob.causes.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-teal-50/80 border border-teal-200 text-xs sm:text-sm text-teal-950 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Clinical Assessment Insight:</strong> {prob.insight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Causes Hair Loss? */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Etiology & Biology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What Causes Hair Loss?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Hair loss can have multiple underlying causes, and identifying them accurately is an essential part of determining appropriate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesOfHairLoss.map((cause, idx) => {
              const Icon = cause.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {cause.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {cause.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Homoeopathic Hair Treatment in Kuttippuram: Understanding Your Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Scientific Evidence Disclosure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homoeopathic Hair Treatment in Kuttippuram: Understanding Your Options
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              People exploring <strong>Homoeopathic Hair Treatment in Kuttippuram</strong> may be interested in alternative approaches to recurring hair fall and scalp concerns. Homoeopathy is an alternative system of healthcare based on principles such as individualised remedy selection.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
              <h4 className="font-bold text-purple-900 text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700" />
                Transparency on Scientific Evidence & Limitations
              </h4>
              <p className="text-sm leading-relaxed">
                However, reliable scientific evidence has not established homoeopathy as an effective treatment for hair loss, alopecia areata, pattern baldness, scalp fungal infections or hair regrowth.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-medium">
                It should not be presented as a proven way to reactivate damaged follicles, reverse genetic hair loss, correct hormonal imbalances or guarantee permanent hair regrowth.
              </p>
            </div>
            <p>
              If you are considering a homoeopathic consultation, discuss the limitations of this approach openly with the practitioner. Do not delay medical assessment, discontinue prescribed treatment or replace evidence-based care with unproven remedies. A responsible healthcare approach should prioritise identifying the cause of hair loss and discussing treatment options supported by appropriate medical evidence.
            </p>
          </div>
        </section>

        {/* Choosing a Hair Doctor in Kuttippuram */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Provider Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Choosing a Hair Doctor in Kuttippuram
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Selecting the right healthcare professional is important when dealing with persistent hair fall, scalp irritation or visible thinning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-xs mb-3">
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

          <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 text-center">
            A qualified dermatologist is the appropriate specialist for diagnosing and managing complex hair and scalp conditions.
          </div>
        </section>

        {/* Evidence-Based Options (Hair Loss Treatment in Kuttippuram) */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-teal-300 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Evidence-Based Modalities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Hair Loss Treatment in Kuttippuram: Evidence-Based Options
            </h2>
            <p className="text-indigo-200 mt-3 text-sm sm:text-base leading-relaxed">
              There is no single treatment suitable for every type of hair loss. The most appropriate option depends on the cause, severity, age and medical history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-teal-300 uppercase bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 inline-block mb-3">
                    {opt.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hair and Scalp Treatment in Kuttippuram: Diagnostic Distinction */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-cyan-700 uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Integrated Scalp Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Hair Care Clinic in Kuttippuram: Understanding Hair and Scalp Treatment
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Hair and scalp concerns often occur together. Itching, flaking, inflammation and infection may affect the condition of the scalp and contribute to hair-related symptoms. People looking for <strong>Hair and Scalp Treatment in Kuttippuram</strong> should understand that scalp conditions require different management depending on their cause:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Dandruff:</strong> Requires suitable medicated shampoos (zinc pyrithione, ketoconazole, selenium sulfide).
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Seborrhoeic Dermatitis:</strong> Needs targeted anti-inflammatory or antifungal scalp treatments to soothe redness and greasy scales.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Scalp Psoriasis:</strong> Requires prescription topical keratolytics (salicylic acid), vitamin D analogues, or specialist phototherapy.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Fungal Scalp Infections (Tinea Capitis):</strong> Strictly require prescription oral antifungal medicines; topical shampoos alone cannot penetrate the hair shaft.
              </div>
            </div>
            <p className="pt-2">
              Avoid applying random herbal oils, irritating home remedies, or steroid-containing combination creams to the scalp without appropriate medical advice.
            </p>
          </div>
        </section>

        {/* Healthy Habits for Better Hair Care */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Everyday Maintenance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Hair Health Clinic in Kuttippuram: Healthy Habits for Better Hair Care
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Daily habits support hair and scalp resilience. Although they cannot cure progressive genetic hair loss, they reduce avoidable shaft damage.
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
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
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

        {/* When Should You Seek Professional Advice? Red Flags */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Clinical Alert
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              When Should You Seek Professional Advice?
            </h2>
            <p className="text-rose-100 mt-2 text-sm sm:text-base leading-relaxed">
              Early assessment can help identify treatable causes and reduce the risk of permanent follicle scarring or extensive loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {redFlags.map((flag, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/10 text-white flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">
                    {flag.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                    {flag.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 FAQs Section (Interactive Accordion) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear medical answers to common inquiries regarding hair fall, alopecia, dandruff, and care options in Kuttippuram.
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
                        isOpen ? 'rotate-180 text-teal-600' : ''
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

        {/* Final CTA & Booking Engine */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Ethical Healthcare Decisions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Schedule Your Hair & Scalp Consultation
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              If you are searching for a Homoeopathic Clinic in Kuttippuram for Hair Treatment, take time to verify the practitioner's qualifications and understand the limitations of the treatment offered. Healthy hair care begins with accurate information, realistic expectations, and evidence-based guidance at Anjali Homoeo Clinic in Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-slate-900 shadow-md">
            <AppointmentBookingEngine />
          </div>

          {/* Quick contact strip */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-indigo-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Tirur - Kuttippuram Rd, near Mini Civil Station, Kuttippuram</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400" />
              <a href={`tel:${phonePrimary}`} className="hover:text-white transition-colors">
                {phonePrimary}
              </a>
              <span>/</span>
              <a href={`tel:${phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {phoneSecondary}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
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

        {/* Related Regional Guides for Kuttippuram & Surrounding Areas */}
        <RegionalRelatedGuides currentCity="Kuttippuram" />
      </main>
    </div>
  );
};
