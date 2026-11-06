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
  ChevronDown,
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Sparkles,
  Layers,
  AlertCircle,
  Droplets,
  Shield,
  FileText,
  Sun,
  Pill,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PsoriasisPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Psoriasis & Chronic Skin Care (Ponnani patient guide).'
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
    navigateToBookingWithReason('Psoriasis Consultation - Ponnani', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 8 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Not Contagious',
      desc: 'Psoriasis is a chronic inflammatory skin condition and is not contagious. It cannot spread through touch, shared clothing, or physical contact.',
    },
    {
      title: 'Typical Clinical Symptoms',
      desc: 'Common symptoms include red or discoloured patches, silvery-white scaling, dryness, persistent itching, cracked skin, and potential bleeding.',
    },
    {
      title: 'Immune & Genetic Triggers',
      desc: 'Psoriasis is influenced by genetics, accelerated immune-system activity, and environmental triggers rather than poor personal hygiene.',
    },
    {
      title: 'Multiple Body Sites',
      desc: 'The condition can affect the scalp, nails, elbows, knees, skin folds, hands, feet, and other body regions with varying severity.',
    },
    {
      title: 'Transparent Scientific Disclosure',
      desc: 'There is currently insufficient reliable scientific evidence that homoeopathy can cure psoriasis or reliably control its underlying systemic inflammation.',
    },
    {
      title: 'Evidence-Based Options',
      desc: 'Established medical treatments include barrier moisturisers, topical medicines, supervised phototherapy, and systemic/biologic therapies.',
    },
    {
      title: 'Early Medical Assessment',
      desc: 'Early evaluation is vital, particularly when psoriasis is widespread, painful, or associated with joint pain and morning stiffness (psoriatic arthritis).',
    },
    {
      title: 'Long-Term Management Plan',
      desc: 'A personalised treatment plan, trigger management, and regular medical follow-up can help manage this long-term condition effectively.',
    },
  ];

  // 6 Common Types of Psoriasis
  const psoriasisTypes = [
    {
      number: '01',
      title: 'Plaque Psoriasis (Psoriasis Vulgaris)',
      badge: 'Most Common (80–90%)',
      desc: 'Plaque psoriasis is the most frequent form. It produces raised, inflamed, erythematous or hyperpigmented patches covered with characteristic silvery-white or dry micaceous scales.',
      locations: 'Commonly appears symmetrically on elbows, knees, scalp, lumbosacral back, and umbilicus.',
      clinicalNote: 'Lesions may itch, burn, or sting, and forceful scraping of scales can produce pinpoint bleeding (Auspitz sign).',
    },
    {
      number: '02',
      title: 'Scalp Psoriasis',
      badge: 'Scalp & Hairline',
      desc: 'Scalp psoriasis causes thick scaling, intense itching, and indurated plaques that often extend past the hairline onto the forehead, nape of the neck, and behind the ears.',
      locations: 'Scalp, retroauricular folds, and upper neck.',
      clinicalNote: 'Frequently mistaken for severe dandruff or seborrhoeic dermatitis. Scratching can irritate the skin barrier and cause secondary hair breakage.',
    },
    {
      number: '03',
      title: 'Guttate Psoriasis',
      badge: 'Drop-Shaped Lesions',
      desc: 'Guttate psoriasis manifests as an eruption of numerous small (2–10 mm), drop-shaped, scaly pink papules over the trunk, arms, and thighs.',
      locations: 'Trunk, upper limbs, and thighs; often in children and young adults.',
      clinicalNote: 'Classically triggered 1 to 3 weeks following an acute streptococcal throat infection (pharyngitis or tonsillitis).',
    },
    {
      number: '04',
      title: 'Inverse (Flexural) Psoriasis',
      badge: 'Skin Folds',
      desc: 'Inverse psoriasis affects intertriginous skin folds where skin rubs against skin. Unlike plaque psoriasis, it appears as smooth, shiny, bright red or deep erythematous patches with minimal or no scaling.',
      locations: 'Armpits (axillae), groin, intergluteal cleft, and submammary folds under the breasts.',
      clinicalNote: 'Prone to friction, moisture, and sweating, and can easily be complicated by secondary fungal (Candida) or bacterial colonization.',
    },
    {
      number: '05',
      title: 'Nail Psoriasis',
      badge: 'Ungual Matrix & Bed',
      desc: 'Nail psoriasis affects up to 50% of individuals with cutaneous psoriasis and up to 80% of patients with psoriatic arthritis.',
      locations: 'Fingernails and toenails.',
      clinicalNote: 'Features include ice-pick nail pitting, subungual "oil drop" hyperkeratosis, crumbling nail plates, and nail separation from the bed (onycholysis).',
    },
    {
      number: '06',
      title: 'Pustular & Erythrodermic Psoriasis',
      badge: 'Urgent Medical Attention',
      desc: 'Pustular psoriasis involves sterile pus-filled blisters (pustules) that can be localized to palms and soles or generalized. Erythrodermic psoriasis causes widespread inflammatory redness and peeling over more than 90% of the body surface area.',
      locations: 'Palms, soles, or generalized full-body skin.',
      clinicalNote: 'These forms are medical emergencies associated with impaired thermoregulation, electrolyte imbalances, and severe pain requiring immediate hospital or dermatologist admission.',
    },
  ];

  // 5 Steps of Psoriasis Consultation
  const consultationSteps = [
    {
      step: '01',
      title: 'Discussion of Skin Symptoms',
      desc: 'The practitioner asks about the appearance, anatomical distribution, duration, severity, and frequency of your plaques, scaling, and itching.',
    },
    {
      step: '02',
      title: 'Comprehensive Medical History',
      desc: 'Your health background, previous dermatological treatments, steroid exposure, family history of psoriasis, and current prescription medicines are thoroughly reviewed.',
    },
    {
      step: '03',
      title: 'Review of Lifestyle Factors & Triggers',
      desc: 'Sleep hygiene, stress levels, dietary habits, alcohol intake, tobacco use, and environmental weather triggers are assessed to identify flare triggers.',
    },
    {
      step: '04',
      title: 'Guidance on Appropriate Care & Triage',
      desc: 'The doctor explains available care options and recognises when immediate dermatologist assessment, blood tests, or biopsy referral is necessary.',
    },
    {
      step: '05',
      title: 'Structured Follow-Up & Joint Monitoring',
      desc: 'Psoriasis is a long-term condition. Regular monitoring tracks skin response, detects early joint stiffness (psoriatic arthritis), and adjusts the management plan.',
    },
  ];

  // Evidence-Based Treatment Options
  const evidenceTreatments = [
    {
      icon: <Pill className="w-5 h-5 text-[#303A88]" />,
      title: 'Topical Medical Therapies',
      desc: 'For mild to moderate localized plaques, dermatologists prescribe topical corticosteroids, synthetic vitamin D3 analogues (calcipotriol), salicylic acid keratolytics, coal tar preparations, and calcineurin inhibitors for sensitive intertriginous skin.',
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#0D9488]" />,
      title: 'Barrier Moisturisers & Emollients',
      desc: 'Frequent, liberal application of fragrance-free, ceramide-rich creams and petrolatum ointments locks in moisture, softens thick scales, relieves tightness, and prevents painful fissures. Never peel or scrub scales aggressively.',
    },
    {
      icon: <Sun className="w-5 h-5 text-[#D97706]" />,
      title: 'Supervised Phototherapy (NB-UVB)',
      desc: 'Narrowband ultraviolet B (NB-UVB) or PUVA phototherapy administered under strict clinical supervision helps suppress hyperactive cutaneous T-cell proliferation in moderate to widespread plaque psoriasis.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#8B5CF6]" />,
      title: 'Systemic & Biologic Medicines',
      desc: 'Moderate to severe, recalcitrant, or arthritic psoriasis may require conventional oral disease-modifying agents (methotrexate, cyclosporine, acitretin) or targeted biologic therapies (anti-TNF, anti-IL-17, anti-IL-23) with continuous medical monitoring.',
    },
  ];

  // Common Triggers
  const commonTriggers = [
    {
      title: 'Emotional & Physical Stress',
      desc: 'Stress triggers neuroendocrine surges that release pro-inflammatory cytokines, frequently triggering new plaques or worsening pre-existing flares.',
    },
    {
      title: 'Systemic & Throat Infections',
      desc: 'Bacterial infections—particularly group A beta-haemolytic streptococcal throat infections—frequently precede acute guttate psoriasis flares.',
    },
    {
      title: 'Skin Injuries (Koebner Phenomenon)',
      desc: 'Cuts, scratches, insect bites, friction, sunburns, or tattoos can induce new psoriasis plaques along the injured site within 10 to 14 days.',
    },
    {
      title: 'Certain Medications',
      desc: 'Beta-blockers, lithium, antimalarial drugs, and rapid withdrawal of oral systemic corticosteroids can trigger severe psoriasis flares or pustular conversions.',
    },
    {
      title: 'Smoking & Alcohol Consumption',
      desc: 'Tobacco smoking and heavy alcohol consumption increase systemic oxidative stress, decrease treatment efficacy, and aggravate plaque severity.',
    },
    {
      title: 'Cold, Dry Winter Weather',
      desc: 'Low humidity, artificial indoor heating, and lack of natural sunlight deplete skin hydration, making scales brittle, itchy, and prone to cracking.',
    },
  ];

  // 6 Selection Criteria for Clinic
  const selectionCriteria = [
    {
      num: '01',
      title: 'Professional Qualifications',
      desc: 'Verify the practitioner’s accredited medical degrees (BHMS / MD Hom.) and official medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Clear Patient Communication',
      desc: 'The doctor must listen attentively, explain the chronic immune-mediated nature of psoriasis, and outline care options transparently.',
    },
    {
      num: '03',
      title: 'Responsible Treatment Advice',
      desc: 'Avoid clinics promising guaranteed cures, permanent eradication of plaques, or sudden discontinuation of prescribed medicines.',
    },
    {
      num: '04',
      title: 'Individualised Assessment',
      desc: 'Every patient’s symptom severity, plaque distribution, and lifestyle triggers are thoroughly assessed on an individual basis.',
    },
    {
      num: '05',
      title: 'Appropriate Specialist Referrals',
      desc: 'Access to dermatologists and rheumatologists is essential when systemic therapy, biopsy, or joint evaluation is required.',
    },
    {
      num: '06',
      title: 'Ongoing Follow-Up Support',
      desc: 'Long-term chronic skin conditions demand structured periodic reviews to adapt care and safeguard skin barrier health.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'Is psoriasis a contagious skin disease?',
      a: 'No. Psoriasis is completely non-contagious. It cannot be spread from person to person through touching, hugging, sharing clothes, swimming together, eating meals, or normal everyday physical contact.',
    },
    {
      q: 'Can psoriasis be permanently cured?',
      a: 'There is currently no established permanent cure for psoriasis in modern medicine or complementary healthcare. However, evidence-based dermatological treatments can help control symptoms, clear plaques, and achieve prolonged periods of remission.',
    },
    {
      q: 'Is Homoeopathic Treatment for Psoriasis in Ponnani effective?',
      a: 'There is insufficient reliable scientific evidence demonstrating that homoeopathy effectively treats psoriasis, clears plaques, or prevents disease recurrence. While some patients explore homoeopathic consultations for supportive lifestyle guidance, it should not replace dermatologist-recommended evidence-based care.',
    },
    {
      q: 'What are the early signs of psoriasis?',
      a: 'Early signs may include small red, pink, or brownish inflamed patches on the skin, dry thickened areas covered with fine silvery scales, persistent itching, skin that cracks easily, and minor changes in the fingernails or scalp.',
    },
    {
      q: 'Can psoriasis affect the scalp?',
      a: 'Yes. Scalp psoriasis is very common and can cause thick scaling, intense itching, and indurated plaques that extend past the hairline. A dermatologist can differentiate scalp psoriasis from severe dandruff or seborrhoeic dermatitis.',
    },
    {
      q: 'Can stress worsen psoriasis?',
      a: 'Yes. Emotional and physical stress triggers the release of stress hormones and inflammatory neuropeptides that can precipitate new flares or aggravate existing skin plaques. Stress management supports general well-being but does not replace medical treatment.',
    },
    {
      q: 'Does psoriasis affect the joints?',
      a: 'Yes. Up to 30% of people with psoriasis develop psoriatic arthritis, an inflammatory joint disease causing joint pain, swelling, sausage-like swelling of fingers or toes (dactylitis), and morning stiffness. Early diagnosis is crucial to prevent irreversible joint damage.',
    },
    {
      q: 'What foods should people with psoriasis avoid?',
      a: 'There is no universal psoriasis diet. A healthy, balanced, anti-inflammatory Mediterranean-style diet rich in vegetables, fruits, whole grains, and omega-3 fatty acids is generally recommended. If a specific food consistently triggers a flare, discuss it with a healthcare professional rather than adopting extreme, unverified diets.',
    },
    {
      q: 'How often should psoriasis patients consult a doctor?',
      a: 'The frequency of follow-up depends on symptom severity, plaque extent, and the specific medications being used. Patients on topical or systemic therapies should attend reviews as scheduled and seek prompt medical attention if symptoms suddenly escalate or joint pain develops.',
    },
    {
      q: 'Can psoriasis return after treatment?',
      a: 'Yes. Because psoriasis is a chronic, immune-mediated condition with a genetic predisposition, symptoms can fluctuate with periods of clearance (remission) and flare-ups triggered by stress, infections, or weather changes. Long-term management helps keep flare-ups controlled.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Psoriasis Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Psoriasis Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Dermatology Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Psoriasis Treatment"
        subtitle="Clinical evaluation and evidence-grounded consultations for patients in Ponnani, Edappal, and Malappuram district dealing with plaque psoriasis, scalp scaling, flexural flares, and chronic skin inflammation."
        metrics={[
          { label: 'Condition Focus', value: 'Chronic Psoriasis' },
          { label: 'Clinical Assessment', value: 'Triage & History' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Dermatology Triage & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential skin assessments, chronic condition reviews, lifestyle guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Psoriasis is a chronic inflammatory skin condition that can affect people of different ages. It commonly causes dry, thickened patches of skin covered with silvery-white scales. These patches may appear on the elbows, knees, scalp, lower back, hands, feet and other parts of the body. For some individuals, psoriasis causes itching, irritation, discomfort and changes in skin appearance that can affect everyday activities and self-confidence.
          </p>
          <p>
            Living with a recurring skin condition can be challenging, particularly when symptoms improve and then return. Understanding psoriasis, identifying possible triggers and receiving appropriate medical guidance are important steps towards managing the condition.
          </p>
          <p>
            If you are searching for a <strong>Homoeopathic Clinic in Ponnani for Psoriasis Treatment</strong>, it is important to choose a qualified healthcare professional who listens to your concerns, understands your medical history and provides clear information about available care options.
          </p>
          <p>
            At our clinic, individuals can discuss their skin-related concerns through a personalised consultation. We believe in understanding each patient's symptoms, health background and expectations while encouraging appropriate medical evaluation and evidence-based psoriasis care.
          </p>
        </div>
      </section>

      {/* Key Takeaways Section (8 Points) */}
      <section className="py-12 bg-[#F1F5F9]/70 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Key Takeaways: Psoriasis Care in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking psoriasis evaluation and treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <h3 className="font-heading font-bold text-[#1E2559] text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Psoriasis and Its Symptoms */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PATHOPHYSIOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Understanding Psoriasis and Its Symptoms
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Psoriasis is an immune-mediated inflammatory condition that causes skin cells to build up much more rapidly than usual. In normal skin, skin cells mature and shed over approximately 28 to 30 days. In psoriasis, this turnover cycle accelerates to just 3 to 5 days, resulting in immature keratinocytes piling up on the skin surface into thickened, inflamed patches with visible scaling.
            </p>
            <p>
              The condition is not caused by poor hygiene and cannot spread from one person to another through physical contact. Although psoriasis can occur at any age, it commonly begins in early adulthood (between 15 and 35 years) or later in life.
            </p>
            <p>
              People looking for <strong>Psoriasis Treatment in Ponnani</strong> may experience different symptoms depending on the type of psoriasis and the areas affected:
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              Common Symptoms of Psoriasis:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Red, pink, brown or darker patches of inflamed skin.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Silvery-white, dry or micaceous adherent scales.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Persistent itching, stinging and skin irritation.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Dry skin that may crack, fissure or bleed.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Thickened, indurated plaques in affected body areas.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Pitting, discolouration, or crumbling in fingernails or toenails.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Discomfort, burning tenderness or joint stiffness around affected patches.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Symptoms vary from mild to severe. Some people have only a few small localized plaques, while others experience extensive body involvement requiring systemic management.
            </p>
          </div>
        </div>
      </section>

      {/* Common Types of Psoriasis (6 Subtypes) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL SUBTYPES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Types of Psoriasis
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Understanding the different types of psoriasis helps individuals recognise why symptoms, flare patterns, and medical treatment requirements vary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {psoriasisTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white font-bold text-xs flex items-center justify-center">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-[#1E2559] text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <div className="bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0] space-y-1.5 mb-3 text-xs text-[#334155]">
                    <p><strong>Primary Areas:</strong> {item.locations}</p>
                  </div>
                </div>

                <p className="text-xs italic text-[#64748B] flex items-start gap-1.5 pt-2 border-t border-[#EEF2FB]">
                  <Info className="w-3.5 h-3.5 text-[#303A88] flex-shrink-0 mt-0.5" />
                  <span>{item.clinicalNote}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homoeopathic Treatment for Psoriasis in Ponnani (Evidence & Disclosure) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Treatment for Psoriasis in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People searching for <strong>Homoeopathic Treatment for Psoriasis in Ponnani</strong> may be interested in discussing complementary healthcare options for their skin concerns.
            </p>
            <p>
              Homoeopathy is a system of complementary medicine based on individualised symptom assessment and the use of highly diluted preparations. During a homoeopathic consultation, a practitioner may ask about the patient's skin symptoms, general health, medical history, lifestyle and other concerns.
            </p>
          </div>

          {/* Critical Evidence Disclosure Notice */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure &amp; Safety Policy
                </h4>
                <p>
                  However, it is important to understand the scientific limitations. <strong>There is insufficient reliable clinical evidence that homoeopathy is effective in treating psoriasis, preventing flare-ups or producing long-term remission</strong>. It should not replace established dermatological treatment.
                </p>
                <p>
                  Psoriasis is a chronic inflammatory disease involving the immune system. Appropriate treatment may help reduce inflammation, control scaling, relieve itching and improve quality of life.
                </p>
                <p className="font-semibold text-amber-950 pt-1">
                  Anyone considering complementary care should discuss it with their treating dermatologist and should NEVER stop prescribed psoriasis medicines (especially oral steroids or biologics) without medical supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consult a Psoriasis Doctor in Ponnani? */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DIFFERENTIAL DIAGNOSIS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Why Consult a Psoriasis Doctor in Ponnani?
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Psoriasis can closely resemble several other chronic skin conditions, including atopic eczema, fungal ringworm infections (tinea corporis), seborrhoeic dermatitis, pityriasis rosea, and cutaneous lupus. Treating the wrong condition—such as applying strong steroid creams to a fungal infection—may delay appropriate care and exacerbate symptoms.
            </p>
            <p>
              A consultation with a qualified <strong>Psoriasis Doctor in Ponnani</strong> helps assess the symptoms and determine whether further dermatological examination or specialist evaluation is necessary.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#303A88]" />
              Factors Considered During a Clinical Assessment:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>The appearance, thickness and anatomical distribution of skin patches.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>How long symptoms have been present and whether they fluctuate seasonally.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether the condition is recurring or refractory to previous therapies.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>The presence of burning pain, deep fissures or cracking with bleeding.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Nail pitting, onycholysis, or extension onto the scalp and flexures.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Family history of psoriasis, eczema, or autoimmune disorders.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Previous skin treatments, topical steroid potency, and treatment response.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Joint pain, swelling, tenderness or prolonged morning stiffness (psoriatic arthritis).</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Psoriasis is often diagnosed clinically through physical examination. In uncertain or atypical cases, a dermatologist may recommend a 4 mm punch biopsy or dermoscopy to confirm the diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Psoriasis Homoeopathy Clinic in Ponnani: Understanding the Consultation (5 Steps) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CONSULTATION PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Psoriasis Homoeopathy Clinic in Ponnani: Understanding the Consultation
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            If you are looking for a <strong>Psoriasis Homoeopathy Clinic in Ponnani</strong>, understanding what a structured clinical consultation involves helps you prepare:
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

          <p className="text-xs sm:text-sm text-[#475569] italic pt-2">
            A responsible consultation explains what complementary supportive care can offer while remaining transparent about the fact that homoeopathy has not been proven to cure psoriasis.
          </p>
        </div>
      </section>

      {/* What Patients Should Know (Caution against false promises) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              PATIENT PROTECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Psoriasis Homoeopathic Treatment in Ponnani: What Patients Should Know
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People exploring <strong>Psoriasis Homoeopathic Treatment in Ponnani</strong> should understand that individualised homoeopathic consultations do not establish that the remedies prescribed can control the underlying inflammatory cascades. There are currently no high-quality clinical findings demonstrating that homoeopathic medicines reliably reverse psoriasis or prevent its recurrence.
            </p>
            <p className="font-semibold text-[#1E2559]">
              Patients should exercise extreme caution about fraudulent claims such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Guaranteed permanent cure for psoriasis.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Complete removal of psoriasis without any future recurrence.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Guaranteed skin clearance within a fixed number of days.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Complete permanent elimination of all scaly skin patches.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200 sm:col-span-2">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Advising patients to stop or replace prescribed dermatological medicines with unproven alternatives.</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
            The most responsible approach is to discuss treatment options openly with qualified healthcare professionals and prioritise therapies supported by reliable medical evidence.
          </p>
        </div>
      </section>

      {/* Evidence-Based Psoriasis Treatment Options */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DERMATOLOGICAL CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Evidence-Based Psoriasis Treatment Options
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Appropriate therapy depends on the psoriasis subtype, affected body percentage (PASI score), symptom severity, and overall patient health. A dermatologist may recommend one or more of the following:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evidenceTreatments.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#D8E1F5] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg">
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

      {/* Common Psoriasis Triggers and How to Manage Them */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRIGGER AVOIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Psoriasis Triggers and How to Manage Them
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Psoriasis symptoms can worsen due to various internal and external triggers. These vary from person to person, and not everyone experiences the same flare-up pattern. Identifying your personal triggers is crucial for long-term control:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commonTriggers.map((trig, tIdx) => (
              <div
                key={tIdx}
                className="bg-white rounded-xl p-5 border border-[#D8E1F5] shadow-sm"
              >
                <h3 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#303A88]" />
                  {trig.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {trig.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homoeopathy for Psoriasis in Ponnani: A Responsible Approach */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL RESPONSIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathy for Psoriasis in Ponnani: A Responsible Approach
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Individuals looking for <strong>Homoeopathy for Psoriasis in Ponnani</strong> should receive clear, balanced information before deciding on complementary care. A patient-centred approach should include:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Listening carefully to the patient's symptoms, emotional burden, and concerns.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Understanding the precise duration and seasonal pattern of flare-ups.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Reviewing existing dermatological medical diagnoses and ongoing treatments.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Explaining the limitations of homoeopathic scientific evidence transparently.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Strictly avoiding promises of guaranteed recovery or permanent cure.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Encouraging appropriate dermatological care and skin barrier protection.</span>
            </div>
            <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Referring patients promptly when symptoms indicate psoriatic arthritis or erythrodermic flares.</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
            Psoriasis is not simply a surface-level cosmetic concern. It is a systemic immune-mediated inflammatory condition associated with cardiometabolic risks and psoriatic arthritis. For this reason, managing psoriasis requires comprehensive attention to overall systemic health, not just visible skin plaques.
          </p>
        </div>
      </section>

      {/* When Should You Seek Medical Attention? (Warning Signs & Red Flags) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              SAFETY &amp; EMERGENCY TRIAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention for Psoriasis?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Do not delay medical evaluation if psoriasis symptoms become severe, widespread, or painful. Seek prompt medical advice if you experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Rapidly spreading skin redness affecting large body areas (suspected erythroderma).</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Severe skin pain, localized swelling, or severe burning heat in the skin.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Widespread pustules (pus-filled bumps) covering inflamed red skin.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">High fever, chills, rapid pulse or general malaise alongside a skin flare.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Deep painful skin cracks, bleeding fissures, or signs of secondary bacterial infection.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Significant nail dystrophy, crumbling, or painful separation of the nail plate.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Persistent joint pain, swollen fingers or toes, or morning stiffness (psoriatic arthritis).</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Symptoms that cause intense distress, depression, or severe sleep disruption.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
            <strong>Psoriatic Arthritis Warning:</strong> Untreated psoriatic arthritis can cause permanent, irreversible joint erosion and physical disability. Anyone with psoriasis who experiences joint pain or swollen fingers should seek medical assessment promptly.
          </div>
        </div>
      </section>

      {/* Choosing the Right Psoriasis Clinic in Ponnani (6 Criteria) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Choosing the Right Psoriasis Clinic in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Finding a suitable Psoriasis Clinic in Ponnani involves verifying the doctor's credentials, diagnosis approach, and willingness to coordinate with dermatologists.
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

      {/* Frequently Asked Questions (All 10 FAQs in Interactive Accordion) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DOCTOR Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Psoriasis Treatment Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear, honest clinical answers to common patient questions regarding psoriasis causes, contagiousness, treatment options, and joint health.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] rounded-xl border border-[#D8E1F5] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#D8E1F5] bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book a Psoriasis Consultation in Ponnani (Closing CTA & Booking Engine) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Book a Psoriasis Consultation in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Living with psoriasis can affect physical comfort, confidence and everyday life. Although the condition is chronic, appropriate medical care can help many people manage symptoms and improve their quality of life.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Whether you are looking for a <strong>Homoeopathic Doctor for Psoriasis in Ponnani</strong>, exploring complementary healthcare or seeking guidance for recurring skin concerns, make informed decisions with the support of qualified healthcare professionals.
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
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated time slot for psoriasis triage and skin evaluation.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="psoriasis-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Psoriasis & Chronic Skin Care"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
