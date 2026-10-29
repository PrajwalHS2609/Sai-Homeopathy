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
  Sparkles,
  Award,
  UserCheck,
  Lock,
  Layers,
  AlertCircle,
  Droplets,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PsoriasisManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Psoriasis & Chronic Skin Care (Manjeri patient guide).'
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
    navigateToBookingWithReason('Psoriasis Assessment - Manjeri', 'online');
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
      title: 'Immune-Mediated Condition',
      desc: 'Psoriasis is a chronic systemic inflammatory condition involving accelerated skin-cell turnover driven by immune dysregulation.',
    },
    {
      title: 'Characteristic Skin Signs',
      desc: 'Common symptoms include well-defined red or dark thickened patches, dry silvery-white scales, itching, and cracking skin.',
    },
    {
      title: 'Not Contagious or Hygiene-Related',
      desc: 'Psoriasis cannot spread from person to person and is not caused by poor hygiene, lack of washing, or superficial skin dirt.',
    },
    {
      title: 'Accurate Diagnosis Is Vital',
      desc: 'Eczema, seborrhoeic dermatitis, and fungal infections can mimic psoriasis; clinical confirmation prevents incorrect treatment.',
    },
    {
      title: 'Evidence-Based Modalities',
      desc: 'Medical options include rich barrier emollients, prescription topicals, phototherapy, oral systemic therapies, and targeted biologics.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'High-quality scientific trials have not established homeopathy as an effective treatment, cure, or recurrence preventative for psoriasis.',
    },
    {
      title: 'Do Not Stop Prescriptions',
      desc: 'Never stop conventional prescribed medicines, topical corticosteroids, or biologic therapies in favour of unproven treatments.',
    },
    {
      title: 'Daily Barrier Care Helps',
      desc: 'Frequent application of fragrance-free emollients and gentle lukewarm bathing soften scaling and support the epidermal barrier.',
    },
    {
      title: 'Joint Symptom Vigilance',
      desc: 'Persistent joint stiffness, swelling, or pain in psoriasis patients requires medical evaluation for psoriatic arthritis.',
    },
    {
      title: 'Emergency Medical Signs',
      desc: 'Rapid widespread erythema, skin peeling with fever, or generalised pustules require emergency medical assessment.',
    },
  ];

  const commonSymptoms = [
    'Raised, well-demarcated patches of thickened skin with palpable borders',
    'Dry, flaky, or silvery-white micaceous scaling over active plaques',
    'Persistent itching, burning, soreness, or tight drawing sensations',
    'Painful fissures and cracked skin that may bleed when stretched',
    'Nail changes including pitting, yellowish oil-drop discolouration, subungual thickening, and onycholysis',
    'Scalp scaling, crusting, and plaques extending past the anterior hairline onto the forehead or neck',
    'Discomfort, fissuring, and bleeding over flexural creases or joint extension surfaces (elbows, knees)',
    'Fluctuating disease courses featuring cyclical periods of remission followed by spontaneous flare-ups',
  ];

  const psoriasisTypes = [
    {
      id: 'plaque-psoriasis',
      name: '1. Plaque Psoriasis (Psoriasis Vulgaris)',
      location: 'Elbows, knees, scalp, lumbosacral lower back',
      desc: 'The most prevalent form (80–90% of cases). It presents with raised, inflamed, reddish or purplish plaques covered with dense silvery-white scales. Lesions can become painful or fissure, particularly during dry seasons.',
      tip: 'Regular use of thick ointments or ceramides helps soften plaques and reduce painful surface cracking.',
    },
    {
      id: 'scalp-psoriasis',
      name: '2. Scalp Psoriasis',
      location: 'Scalp, hairline, behind ears, upper nape of neck',
      desc: 'Produces thick, adherent scaling and intense pruritus. Unlike common dandruff, scalp psoriasis plaques are thicker, demarcated, and frequently extend past the hairline. Forced scratching can cause trauma and temporary hair loss.',
      tip: 'Avoid aggressive comb scratching or picking scales, which induces trauma and worsens inflammation (Koebner response).',
    },
    {
      id: 'guttate-psoriasis',
      name: '3. Guttate Psoriasis',
      location: 'Trunk, chest, abdomen, upper arms, thighs',
      desc: 'Characterised by a sudden eruption of numerous small, raindrop-shaped, scaly papules. It frequently manifests 1 to 3 weeks after an acute streptococcal throat infection or upper respiratory illness, especially in children and young adults.',
      tip: 'A medical throat evaluation and antistreptolysin-O (ASO) titre may be advised to evaluate underlying post-streptococcal triggers.',
    },
    {
      id: 'inverse-psoriasis',
      name: '4. Inverse (Flexural) Psoriasis',
      location: 'Armpits, groin, under breasts, natal cleft skin folds',
      desc: 'Occurs in body creases where warmth and sweat prevent dry scaling. Lesions appear smooth, bright red, shiny, and inflamed. Because of friction, the skin can easily crack, sting, and become vulnerable to secondary fungal or bacterial infections.',
      tip: 'Keep skin folds aerated and use gentle barrier creams; avoid strong unprescribed topical steroid ointments in thin fold areas.',
    },
    {
      id: 'nail-psoriasis',
      name: '5. Nail Psoriasis',
      location: 'Fingernails and toenails',
      desc: 'Affects up to 50% of psoriasis patients. Clinical signs include cupuliform thimble pitting, distal onycholysis (separation from the nail bed), yellowish-orange salmon patches, and severe subungual hyperkeratosis.',
      tip: 'Keep nails trimmed short and protect hands with cotton-lined gloves during manual work to avoid mechanical nail separation.',
    },
  ];

  const contributingTriggers = [
    {
      title: 'Genetic Susceptibility',
      desc: 'Specific human leukocyte antigen alleles (e.g., HLA-Cw6) increase susceptibility, meaning psoriasis often runs in families.',
    },
    {
      title: 'Immune Dysregulation',
      desc: 'Overactivation of the IL-23/IL-17 inflammatory axis drives rapid epidermal proliferation, reducing cell transit time from 28 to just 3–4 days.',
    },
    {
      title: 'Infections & Pathogens',
      desc: 'Streptococcal tonsillitis or viral illnesses frequently trigger acute guttate breakouts or worsen established plaque disease.',
    },
    {
      title: 'Skin Injury (Koebner Phenomenon)',
      desc: 'Cuts, abrasions, friction, surgical scars, sunburns, or insect bites can trigger fresh psoriasis plaques at the exact injury site.',
    },
    {
      title: 'Psychological & Physical Stress',
      desc: 'High emotional stress releases neuroendocrine mediators that activate cutaneous mast cells and amplify systemic inflammation.',
    },
    {
      title: 'Tobacco Smoking & Alcohol',
      desc: 'Smoking is closely correlated with increased disease severity (especially palmoplantar pustulosis), while excess alcohol impairs treatment efficacy.',
    },
    {
      title: 'Certain Medications',
      desc: 'Beta-blockers, lithium, antimalarials, and rapid withdrawal of systemic corticosteroids can provoke severe rebound psoriasis flares.',
    },
    {
      title: 'Climate & Low Humidity',
      desc: 'Cold weather, dry indoor air, and lack of gentle sunlight can deplete skin barrier lipids, increasing flaking and itching.',
    },
  ];

  const evaluationRedFlags = [
    'The scaly rash is rapidly spreading or covers more than 10% of the total body surface area.',
    'Psoriasis plaques are severely cracked, bleeding, weeping yellow fluid, or showing signs of bacterial infection.',
    'Intense itching and soreness disrupt sleep, work concentration, and daily personal comfort.',
    'The scalp or nails are heavily involved, causing distress, social embarrassment, or functional impairment.',
    'You experience persistent joint pain, morning stiffness lasting over 30 minutes, or swollen "sausage" digits (dactylitis).',
    'Current topical moisturisers or past treatments have failed to provide adequate symptomatic relief.',
  ];

  const emergencySigns = [
    'Widespread, sheet-like skin redness covering almost the entire body accompanied by chills or fever (Erythrodermic Psoriasis).',
    'Sudden eruption of multiple white/yellow non-infectious pustules across inflamed skin (Generalised Pustular Psoriasis).',
    'Severe shivering, rapid heart rate, dehydration, or feeling systemically unwell with extensive skin shedding.',
  ];

  const consultationQuestions = [
    'What specific type of psoriasis do I have, and how extensive is my skin involvement?',
    'Could another inflammatory condition (like eczema or fungal dermatitis) be co-existing?',
    'Which evidence-based medical treatments (topicals, phototherapy, or systemics) are best suited for me?',
    'How can I safely soften and manage scalp plaques without pulling out hair?',
    'What everyday emollient regimen should I maintain between flare-ups to support my skin barrier?',
    'Could my joint stiffness or finger pain be an early manifestation of psoriatic arthritis?',
    'What potential side effects should I monitor if prescription topical steroids or vitamin D analogues are used?',
    'When should I return for follow-up review, and under what signs should I see a dermatologist urgently?',
  ];

  const dailySkincareTips = [
    'Moisturise immediately after bathing: Apply a thick, fragrance-free emollient within 3 minutes of bathing to seal in epidermal moisture.',
    'Bathe in lukewarm water: Avoid very hot showers or baths that strip natural sebum and trigger rebound dryness and itching.',
    'Choose syndet or soap-free cleansers: Avoid harsh antibacterial soaps, sulfates, and alcohol-based astringents.',
    'Never pick or scratch scales: Pulling off dry scales tears underlying capillaries, causes bleeding, and stimulates Koebner flare-ups.',
    'Protect skin against micro-trauma: Wear soft, loose cotton garments and avoid harsh friction against elbows and knees.',
    'Practice mindful stress reduction: Engage in daily relaxation, gentle yoga, and ensure 7–8 hours of restorative sleep.',
    'Avoid smoking and limit alcohol: Eliminating tobacco reduces inflammatory cytokine production and promotes skin healing.',
    'Adhere to prescribed regimens: Use prescription medicines exactly as directed by your physician without sudden cessation.',
  ];

  const faqs = [
    {
      question: '1. Where can I find Psoriasis Treatment in Manjeri?',
      answer:
        'You can consult qualified healthcare professionals, dermatology clinics, and physician centres in and around Manjeri. A medical practitioner will assess the extent of plaque involvement, rule out fungal or eczematous mimics, provide comprehensive evidence-based treatment guidance (emollients, prescription topicals, phototherapy, or systemic therapies), and arrange dermatologist referral when necessary.',
    },
    {
      question: '2. Is Homeopathic Treatment for Psoriasis in Manjeri effective?',
      answer:
        'Reliable, high-quality scientific clinical trials have not established homeopathy as an effective medical treatment or cure for psoriasis, nor has it been shown to prevent long-term disease recurrence. Because psoriasis is an immune-mediated chronic disease with systemic inflammation, delaying proven medical treatments can lead to worsening plaques and joint damage. Patients are strongly advised never to stop prescribed conventional medications.',
    },
    {
      question: '3. What are the common symptoms of psoriasis?',
      answer:
        'Common clinical symptoms include thickened pink, red, or violaceous patches with distinct margins, dry silvery-white scales, itching, burning sensations, painful skin cracking, nail pitting, subungual thickening, and scaly scalp crusts. Some individuals also experience joint stiffness and tenderness.',
    },
    {
      question: '4. Can psoriasis be cured permanently?',
      answer:
        'No, there is currently no permanent cure for psoriasis because it is an underlying genetic and immune-mediated disorder. However, with appropriate modern medical management—including topical therapies, phototherapy, oral systemics, and targeted biologics—many patients achieve long-term clear or almost-clear skin and enjoy a high quality of life.',
    },
    {
      question: '5. What treatments are available for psoriasis?',
      answer:
        'Evidence-based treatment depends on disease severity: mild cases are managed with daily barrier emollients and prescription topicals (corticosteroids, vitamin D analogues, calcineurin inhibitors); moderate cases frequently benefit from supervised narrow-band UVB phototherapy; and severe or recalcitrant cases are managed with systemic oral agents (methotrexate, cyclosporine) or targeted biologic injections.',
    },
    {
      question: '6. What is Chronic Psoriasis Treatment in Manjeri?',
      answer:
        'Chronic psoriasis management is a long-term therapeutic strategy focused on suppressing flare-ups, minimising plaque surface area, keeping the skin barrier continuously hydrated, monitoring for comorbidities (such as metabolic syndrome and psoriatic arthritis), and tailoring therapy to patient lifestyle and tolerability over months and years.',
    },
    {
      question: '7. Can psoriasis affect the scalp and nails?',
      answer:
        'Yes, frequently. Scalp psoriasis causes adherent thick plaques, itching, and scaling that can extend beyond the hairline. Nail psoriasis affects finger- and toenails, leading to pitting, crumbly subungual hyperkeratosis, discolouration ("oil drops"), and nail-bed separation. Professional assessment distinguishes nail psoriasis from fungal onychomycosis.',
    },
    {
      question: '8. Is psoriasis contagious?',
      answer:
        'No. Psoriasis is entirely non-contagious. It cannot be transmitted through physical touch, skin-to-skin contact, sharing clothing or towels, swimming pools, or personal intimacy. It is an internal immune-mediated disease, not an infectious illness.',
    },
    {
      question: '9. When should I consult a Psoriasis Specialist in Manjeri?',
      answer:
        'You should seek prompt specialist consultation if your skin rash is widespread or worsening rapidly, causes severe physical pain, bleeds frequently, fails to respond to initial creams, or is accompanied by joint stiffness, pain, or swollen fingers/toes. Any sign of widespread redness accompanied by fever requires urgent emergency medical care.',
    },
    {
      question: '10. Can daily skincare help manage psoriasis?',
      answer:
        'Yes. While daily skincare does not cure psoriasis, applying thick fragrance-free emollients twice daily, taking short lukewarm baths, avoiding picking or peeling scales, and using mild syndet cleansers significantly reduces scaling, relieves surface tension, and enhances the absorption of prescribed medicated creams.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Psoriasis Treatment in Manjeri"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Psoriasis Treatment in Manjeri"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />}
        badgeText="Regional Clinical Psoriasis Guide • Manjeri Patients"
        title="Psoriasis Homeopathic Treatment in Manjeri"
        subtitle="Individualized clinical guidance for adults and families in Manjeri and Malappuram experiencing chronic plaque psoriasis, scalp scaling, guttate eruptions, flare-up triggers, and skin barrier compromise."
        metrics={[
          { label: 'Condition Category', value: 'Chronic Plaque & Scalp' },
          { label: 'Evaluation Protocol', value: 'Phenotype & Joint Check' },
          { label: 'Clinical Transparency', value: 'Evidence Grounded' },
        ]}
        doctorSubtitle="BHMS | Psoriasis & Chronic Skin Consultations"
        doctorBio="10+ years of dedicated clinical experience assessing chronic plaque psoriasis, scalp psoriasis, koebnerization triggers, barrier hydration regimens, and supportive homeopathic care across Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* 10 Important Key Takeaways Grid */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] font-sans">
              QUICK CLINICAL SUMMARY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Important Key Takeaways
            </h2>
            <p className="text-sm text-[#64748B] mt-2 font-sans">
              Core medical insights regarding psoriasis pathology, evidence-based care, triggers, joint health, and consultation principles in Manjeri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#FECDD3] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                    0{idx + 1}
                  </div>
                  <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] text-[#E11D48] font-semibold font-sans">
                  <Check className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Clinical Insight</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Psoriasis? */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              UNDERSTANDING THE CONDITION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What Is Psoriasis?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Psoriasis is a long-term inflammatory skin disease associated with an overactive immune response. In affected areas, skin cells may accumulate more quickly than usual, resulting in thickened patches and scaling.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              The appearance of psoriasis can differ depending on the type of condition, the affected body area, and the individual's skin tone. On lighter skin, patches may look pink or red with pale silvery scales. On darker skin tones, they may appear brown, violaceous, grey, or darker than surrounding tissue.
            </p>
          </div>

          {/* Characteristics Checklist */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#1E2559] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#E11D48]" />
              <span>Common Symptoms &amp; Clinical Presentations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {commonSymptoms.map((sym, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                  <span>{sym}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Joint Involvement Box */}
          <div className="rounded-2xl bg-[#FFF1F2] p-5 sm:p-6 border border-[#FECDD3] space-y-2">
            <h4 className="font-editorial text-base font-bold text-[#9F1239] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#E11D48]" />
              <span>Psoriatic Arthritis: More Than Skin Deep</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
              Psoriasis can affect the skin, scalp, and nails. Approximately 30% of people with psoriasis also develop psoriatic arthritis, which can cause joint pain, swelling, and morning stiffness. If you experience persistent scaling, thickened skin, or recurring rashes, a <strong className="text-[#9F1239]">Psoriasis Consultation in Manjeri</strong> can help determine whether psoriasis is the likely cause. Other skin conditions can resemble psoriasis, so an accurate diagnosis is important before beginning treatment.
            </p>
          </div>

        </div>
      </section>

      {/* Common Types of Psoriasis */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL SUBTYPES
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Common Types of Psoriasis
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Recognising the specific pattern helps explain why symptoms and targeted treatments vary from person to person.
            </p>
          </div>

          <div className="space-y-4">
            {psoriasisTypes.map((type) => (
              <div
                key={type.id}
                className="rounded-2xl p-5 sm:p-6 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#FECDD3] transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                    {type.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FFE4E6] text-[#9F1239] w-fit">
                    <MapPin className="w-3 h-3 text-[#9F1239]" />
                    {type.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {type.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#9F1239] font-medium flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <span>{type.tip}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] text-center pt-2">
            Different forms of psoriasis may require different treatment approaches. A qualified healthcare professional can assess the affected areas and determine whether further examination or referral is appropriate.
          </p>

        </div>
      </section>

      {/* What Causes Psoriasis? */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              PATHOPHYSIOLOGY &amp; TRIGGERS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What Causes Psoriasis?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              The exact cause of psoriasis is not fully understood, but it involves immune-system activity, genetic susceptibility, and environmental influences. It is not caused by poor personal hygiene, and it is not contagious.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contributingTriggers.map((trig, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white border border-[#E2E8F0] shadow-xs space-y-2"
              >
                <div className="w-7 h-7 rounded-full bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="font-editorial text-base font-bold text-[#1E2559]">
                  {trig.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {trig.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FECDD3] text-xs sm:text-sm text-[#9F1239]">
            <strong className="text-[#1E2559]">Prescription Caution:</strong> Certain medicines can trigger or aggravate psoriasis (e.g., beta-blockers, lithium, oral steroids). Do not stop prescribed medication on your own; discuss suspected side effects with the prescribing clinician.
          </div>

        </div>
      </section>

      {/* Psoriasis Treatment in Manjeri: Why Accurate Diagnosis Matters */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              DIAGNOSTIC PRECISION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Psoriasis Treatment in Manjeri: Why Accurate Diagnosis Matters
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Persistent scaling and inflammation can occur in several skin conditions, including eczema, fungal infections, seborrhoeic dermatitis, and other inflammatory disorders. Because these conditions may require different treatments, it is important not to assume that every scaly rash is psoriasis.
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              A healthcare professional may examine the affected skin, scalp, and nails and ask about the duration of symptoms, previous treatments, family history, and any joint pain or stiffness. In some cases, additional tests or a skin biopsy may be needed to clarify the diagnosis.
            </p>
          </div>

          {/* Clinical Indications Box */}
          <div className="rounded-2xl bg-[#FFF1F2] p-6 sm:p-8 border border-[#FFE4E6] space-y-4">
            <div className="flex items-center gap-2 text-[#BE123C]">
              <AlertCircle className="w-5 h-5 text-[#E11D48]" />
              <h3 className="font-editorial text-lg font-bold">
                An Assessment Is Particularly Important When:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {evaluationRedFlags.map((sign, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#881337]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
            <p className="text-xs sm:text-sm text-[#303A88] leading-relaxed">
              When searching for a <strong className="text-[#1E2559]">Psoriasis Doctor in Manjeri</strong> or a <strong className="text-[#1E2559]">Psoriasis Specialist in Manjeri</strong>, look for a qualified professional who can explain the diagnosis, discuss treatment choices, and arrange specialist care when needed. Early assessment can help identify the condition and support an appropriate treatment plan.
            </p>
          </div>

        </div>
      </section>

      {/* Exploring Homeopathic Treatment for Psoriasis in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL EVIDENCE &amp; SCIENTIFIC TRANSPARENCY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Exploring Homeopathic Treatment for Psoriasis in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Some people search for <strong className="text-[#1E2559]">Homeopathy for Psoriasis in Manjeri</strong> because they are interested in homeopathy or want to discuss different approaches to managing recurring skin symptoms.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A consultation with a qualified homeopathic practitioner may provide an opportunity to discuss the history of the skin condition, previous treatments, the pattern of flare-ups, and concerns about long-term management.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-7 border border-[#FECDD3] space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#9F1239] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#E11D48]" />
              <span>Scientific Evidence &amp; Systemic Risk Disclosure</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              However, it is important to understand the scientific evidence. There is insufficient reliable scientific evidence to establish homeopathy as an effective treatment for psoriasis. It has not been shown reliably to cure psoriasis or prevent its recurrence.
            </p>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              Psoriasis is an immune-mediated condition that may require ongoing management. Delaying effective treatment can allow symptoms to worsen and may increase the risk of complications in some people. Anyone considering Homeopathic Treatment for Psoriasis in Manjeri should discuss the evidence and limitations with a qualified healthcare professional. Do not stop prescribed medicines, postpone recommended treatment, or discontinue specialist follow-up in favour of an unproven approach.
            </p>
            <p className="text-xs text-[#64748B] italic pt-1">
              The goal should be to manage symptoms safely, protect skin health, and ensure that any treatment decisions are based on informed discussion.
            </p>
          </div>

        </div>
      </section>

      {/* Evidence-Based Treatment Options for Psoriasis */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              ESTABLISHED THERAPIES
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Evidence-Based Treatment Options for Psoriasis
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Psoriasis treatment depends on the type of psoriasis, the severity of symptoms, the affected body areas, and the person's overall health. A dermatologist or other appropriately qualified healthcare professional can recommend a suitable plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* 1 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">Modalities 01</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Moisturisers &amp; Emollients
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Regular moisturising helps reduce dryness, soften scales, and support the skin barrier. Fragrance-free creams and ointments improve comfort and complement active medical treatments.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">Modalities 02</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Topical Prescription Medicines
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                For mild or localised disease, clinicians prescribe topical corticosteroids, vitamin D analogues, or calcineurin inhibitors that calm cutaneous inflammation and normalise keratinocyte proliferation.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">Modalities 03</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Specialised Scalp Treatments
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Scalp psoriasis may require medicated lotions, coal tar or salicylic acid solutions, and topical steroid shampoos tailored to the degree of scaling without damaging hair follicles.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">Modalities 04</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Supervised Phototherapy
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Uses controlled doses of narrowband UVB light under medical supervision to slow hyperactive skin cell growth. It differs entirely from unregulated sun exposure or tanning beds.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">Modalities 05</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Systemic &amp; Biologic Medicines
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Moderate to severe psoriasis may warrant oral disease-modifying agents (methotrexate, apremilast) or targeted injectable biologics (TNF, IL-17, IL-23 blockers) requiring close lab monitoring.
              </p>
            </div>

            {/* 6 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">Modalities 06</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Psoriatic Arthritis Management
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Joint pain, swelling, or morning stiffness requires rheumatology assessment. Early disease-modifying therapy protects joint integrity and prevents irreversible articular destruction.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FECDD3] text-xs text-[#9F1239] text-center">
            These established options form the basis of evidence-based <strong className="text-[#1E2559]">Skin Psoriasis Treatment in Manjeri</strong>. The most suitable approach should be determined through an individual assessment.
          </div>

        </div>
      </section>

      {/* Chronic Psoriasis Treatment & Everyday Skincare */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CHRONIC CARE STRATEGY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Psoriasis Skin Care in Manjeri: Everyday Tips &amp; Long-Term Control
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              People seeking <strong className="text-[#1E2559]">Chronic Psoriasis Treatment in Manjeri</strong> benefit most from a structured plan that includes regular skincare, prescribed medical treatment, trigger avoidance, and routine follow-up appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dailySkincareTips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* When Should You Seek Medical Attention? */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              URGENT WARNING SIGNS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Seek medical advice if psoriasis symptoms persist, become more severe, or interfere with sleep and daily activities. Prompt assessment is important if you develop painful skin cracks, signs of infection, or a rapidly worsening rash.
            </p>
          </div>

          <div className="rounded-2xl bg-[#FFF1F2] p-6 border border-[#FECDD3] space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#9F1239] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#E11D48]" />
              <span>Emergency Dermatology Warning Signs</span>
            </h3>
            <div className="space-y-2">
              {emergencySigns.map((em, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#881337]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                  <span>{em}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9F1239] pt-1">
              Joint pain, swelling, or prolonged morning stiffness should also be evaluated because early treatment prevents irreversible articular damage from psoriatic arthritis.
            </p>
          </div>

        </div>
      </section>

      {/* What to Expect During a Psoriasis Consultation in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL VISIT PREPARATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What to Expect During a Psoriasis Consultation in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A consultation provides an opportunity to discuss symptoms, confirm the likely diagnosis, and understand treatment choices. Before your appointment, consider noting when symptoms started, which areas are affected, whether flare-ups follow particular triggers, and which treatments you have tried.
            </p>
          </div>

          {/* Useful Questions */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#1E2559] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#E11D48]" />
              <span>Questions to Discuss During Your Visit</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {consultationQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-5 h-5 rounded-full bg-[#FFE4E6] text-[#E11D48] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FECDD3] text-xs text-[#475569]">
            People searching for a <strong className="text-[#1E2559]">Psoriasis Clinic in Manjeri</strong> or a <strong className="text-[#1E2559]">Psoriasis Homeopathy Clinic in Manjeri</strong> should check practitioner qualifications and confirm which services are actually available. If you are considering homeopathy, ask about the quality of evidence, possible risks, and how the proposed approach fits alongside established medical care. Do not allow an unproven treatment to delay appropriate assessment or effective therapy.
          </div>

        </div>
      </section>

      {/* Conclusion Banner */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 font-sans">
          <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
            CONCLUSION &amp; NEXT STEPS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Safe, Evidence-Informed Psoriasis Management in Manjeri
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Psoriasis is a chronic inflammatory skin condition that can cause scaling, itching, thickened patches, and recurring flare-ups. It may affect the skin, scalp, nails, and, in some people, the joints. Although psoriasis can be persistent, appropriate medical treatment and regular skincare can help many people manage symptoms and improve quality of life.
          </p>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            If you are searching for Psoriasis Treatment in Manjeri, start with an accurate assessment and a discussion of the available evidence-based options. People interested in Homeopathic Treatment for Psoriasis in Manjeri should understand that reliable scientific evidence does not establish homeopathy as an effective treatment for psoriasis. Avoid stopping prescribed medicines or delaying dermatology care in favour of an unproven approach.
          </p>
          <div className="pt-2">
            <button
              onClick={handleBookConsultation}
              className="px-6 py-3 rounded-xl bg-[#E11D48] text-white font-bold text-sm shadow-md hover:bg-[#BE123C] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Clinical Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Detailed clinical answers regarding psoriasis pathology, medical management, triggers, and healthcare options in Manjeri.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-editorial text-base sm:text-lg font-bold text-[#1E2559] hover:text-[#E11D48] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E11D48] shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-sans">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL APPOINTMENTS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book a Psoriasis &amp; Skin Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select online video assessment or in-person clinic visit with Dr. Anjali Chandrasekhar.
            </p>
          </div>
          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Related Regional Patient Guides in Manjeri */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-sans">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              EXPLORE OTHER GUIDES
            </span>
            <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#1E2559] mt-1">
              Related Regional Patient Guides in Manjeri
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              Evidence-based medical guides for patients across Malappuram district.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
            
            <button
              onClick={() => {
                setCurrentView('eczema-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#10B981] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#10B981] transition-colors">
                Eczema Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Atopic dermatitis, skin barrier repair, allergy triggers, and medical management.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('warts-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0D9488] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D9488] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#0D9488] transition-colors">
                Skin Warts in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                HPV-related growths, plantar warts vs corns, safe clinical removal, and prevention.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('corns-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#D97706] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#D97706] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#D97706] transition-colors">
                Skin Corns in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Mechanical pressure, hard/soft corns, safe podiatric care, and footwear ergonomics.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('skin-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#F59E0B] transition-colors">
                General Skin Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Chronic dermatitis, fungal infections, rashes, and constitutional assessment.
              </p>
            </button>

          </div>
        </div>
      </section>

      {/* Clinic Branches & Direct Contact Details */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kuttippuram Clinic */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88]">
                <MapPin className="w-3.5 h-3.5" />
                KUTTIPPURAM MAIN CLINIC
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Anjali Homoeo Clinic - Kavumopuram
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${phonePrimary}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#303A88] text-white text-xs font-bold"
                >
                  Call: {phonePrimary}
                </a>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#D8E1F5] text-[#303A88] text-xs font-bold"
                >
                  {phoneSecondary}
                </a>
              </div>
            </div>

            {/* Puthanathani Clinic */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#45AC4B]/10 text-[#45AC4B]">
                <MapPin className="w-3.5 h-3.5" />
                PUTHANATHANI BRANCH
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Anjali Homoeo Clinic - Chembayil Complex
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Opp. Thavakkal Gold, Puthanathani, Kurumbathur, Kerala 676552
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:08921180408`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#45AC4B] text-white text-xs font-bold"
                >
                  Call: 089211 80408
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#FECDD3] text-[#9F1239] text-xs font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Common Regional Guides Cross-Linking & Footer Notes */}
      <RegionalRelatedGuides currentGuideKey="psoriasis-treatment-manjeri" />
    </div>
  );
};
