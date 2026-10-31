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
  AlertCircle,
  Zap,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const HairMalappuramPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Hair and Scalp Treatment (Malappuram patient guide).'
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
    navigateToBookingWithReason('Hair & Scalp Consultation (Malappuram)', 'clinic');
  };

  const handleBookOnline = () => {
    navigateToBookingWithReason('Hair & Scalp Online Consultation (Malappuram)', 'online');
  };

  const keyTakeaways = [
    {
      title: 'Multifactorial Causes',
      desc: 'Hair fall can occur due to genetics, stress, hormonal changes, nutritional deficiencies, medications, and underlying medical conditions.',
    },
    {
      title: 'Diagnosis Precedes Treatment',
      desc: 'Identifying the specific biological cause of hair loss is essential before choosing a treatment approach.',
    },
    {
      title: 'When to Seek Evaluation',
      desc: 'Persistent hair shedding, distinct bald patches, scalp inflammation, and sudden hair loss require timely professional evaluation.',
    },
    {
      title: 'Qualified Assessment in Malappuram',
      desc: 'A Hair Doctor in Malappuram can help assess hair and scalp concerns and determine whether further diagnostic investigations are needed.',
    },
    {
      title: 'Evidence-Based Transparency',
      desc: 'Homeopathy has not been proven to treat hair loss or scalp disorders effectively. Do not use it as a substitute for evidence-based medical care.',
    },
    {
      title: 'Holistic Hair Support',
      desc: 'Gentle hair care, adequate nutrition, stress management, and appropriate treatment of underlying conditions can support hair health.',
    },
    {
      title: 'Individualized Recommendations',
      desc: 'Treatment recommendations depend on the formal diagnosis, severity of symptoms, personal medical history, and individual health needs.',
    },
  ];

  const commonConcerns = [
    {
      title: 'Excessive Daily Shedding',
      desc: 'Noticing abnormally large amounts of hair while washing, combing, or on pillowcases upon waking.',
    },
    {
      title: 'Crown & Hairline Thinning',
      desc: 'Gradual loss of hair density around the crown (vertex) or progressive recession along the temples.',
    },
    {
      title: 'Circular Bald Patches',
      desc: 'Discrete, coin-shaped bare areas on the scalp, beard, or eyebrows appearing rapidly.',
    },
    {
      title: 'Dandruff & Visible Flaking',
      desc: 'Persistent white or greasy yellowish flakes accompanied by recurring scalp itching or tightness.',
    },
    {
      title: 'Scalp Pruritus & Irritation',
      desc: 'Persistent itching, tingling, crawling sensations, or tenderness across follicular zones.',
    },
    {
      title: 'Dry, Brittle & Snapping Shafts',
      desc: 'Hair shafts that break easily mid-length rather than shedding from the root bulb.',
    },
    {
      title: 'Erythema & Scalp Inflammation',
      desc: 'Redness, swelling, burning sensations, scaling, or pustules across the scalp skin.',
    },
    {
      title: 'Post-Event Reactive Shedding',
      desc: 'Diffuse hair shedding emerging 2 to 4 months following severe fever, childbirth, surgery, or major life stress.',
    },
  ];

  const causesAndContributors = [
    {
      number: '01',
      title: 'Genetic Hair Loss (Androgenetic Alopecia)',
      badge: 'Hereditary & Hormonal',
      desc: 'A very common hereditary cause of gradual hair thinning in both men and women. It involves follicular sensitivity to dihydrotestosterone (DHT), leading to progressive miniaturization of hair follicles. Men typically experience temple recession and crown thinning, while women experience diffuse top thinning with widening of the central part.',
      care: 'Medical assessment helps establish whether the pattern is consistent with hereditary hair loss and discusses evidence-supported options such as topical minoxidil or specialist dermatological therapies.',
    },
    {
      number: '02',
      title: 'Stress and Temporary Hair Shedding (Telogen Effluvium)',
      badge: 'Reactive & Reversible',
      desc: 'Physical illness, high fever, surgical procedures, childbirth, rapid weight reduction, or severe psychological stress can shock growing anagen follicles into premature resting telogen phases. Shedding becomes pronounced 8 to 16 weeks after the trigger.',
      care: 'In many cases, the condition improves when the triggering factor resolves. Discussing recent health history, nutritional markers, and stress timelines guides optimal recovery.',
    },
    {
      number: '03',
      title: 'Nutritional Deficiencies',
      badge: 'Cellular Fuel',
      desc: 'Active follicular matrices have high turnover rates and depend heavily on micro- and macro-nutrients. Suboptimal ferritin (iron stores), low protein intake, zinc deficiency, and low vitamin D levels can trigger or worsen shedding.',
      care: 'Supplementation should only follow confirmed laboratory blood investigations. Excessive unprescribed intake of certain vitamins (such as vitamin A or selenium) can itself induce hair loss.',
    },
    {
      number: '04',
      title: 'Hormonal Changes',
      badge: 'Endocrine Regulation',
      desc: 'Thyroid dysfunction (hypothyroidism and hyperthyroidism), polycystic ovary syndrome (PCOS), postpartum hormonal shifts, and peri-menopause can profoundly disrupt hair cycling.',
      care: 'When hair shedding coexists with lethargy, unexpected weight changes, irregular menstruation, or cold intolerance, thorough endocrine blood panels are clinically indicated.',
    },
    {
      number: '05',
      title: 'Scalp Conditions',
      badge: 'Follicular Environment',
      desc: 'Seborrhoeic dermatitis, scalp psoriasis, tinea capitis (fungal infections), and inflammatory follicular conditions create micro-inflammation that damages the hair root barrier.',
      care: 'Inflammatory and fungal scalp conditions require precise diagnostic differentiation and targeted medical or antifungal therapies rather than random cosmetic products.',
    },
    {
      number: '06',
      title: 'Hair Styling & Mechanical Damage',
      badge: 'Preventable Trauma',
      desc: 'Frequent thermal styling, bleaching, harsh chemical relaxers, rough brushing, and tight hairstyles (braids, buns, extensions, tightly tied headdresses) cause shaft breakage and traction alopecia.',
      care: 'Early elimination of mechanical pulling completely prevents irreversible traction damage. Gentle handling protects fragile shafts.',
    },
  ];

  const medicalApproaches = [
    {
      step: '01',
      title: 'Hereditary Hair Loss Options',
      subtitle: 'Topical & Prescription Care',
      desc: 'Topical minoxidil (2% or 5%) is an evidence-supported option that may stimulate blood flow and prolong the anagen growth phase. Specific prescription oral medications may be considered for eligible patients by a dermatologist following careful risk assessment.',
    },
    {
      step: '02',
      title: 'Correcting Verified Deficiencies',
      subtitle: 'Targeted Nutritional Replenishment',
      desc: 'When diagnostic blood tests confirm depleted iron stores (serum ferritin < 30–50 ng/mL), zinc deficiency, or vitamin D insufficiency, tailored dietary adjustments and clinical-grade supplementation help normalize follicular biology.',
    },
    {
      step: '03',
      title: 'Managing Specific Scalp Disorders',
      subtitle: 'Therapeutic Shampoos & Topicals',
      desc: 'Dandruff, seborrhoeic dermatitis, and scalp psoriasis respond to active ingredients such as ketoconazole, zinc pyrithione, salicylic acid, or topical anti-inflammatories prescribed based on specific clinical signs.',
    },
    {
      step: '04',
      title: 'Treating Underlying Medical Conditions',
      subtitle: 'Endocrine & Systemic Care',
      desc: 'Hair loss associated with thyroid disorders, diabetes, or autoimmune illness improves when the underlying systemic condition is stabilized in collaboration with medical specialists.',
    },
    {
      step: '05',
      title: 'Preventing Shaft Breakage',
      subtitle: 'Hair Shaft Resilience Strategies',
      desc: 'Gentle sulfate-free cleansing, eliminating high heat, avoiding tight buns or braids, and conditioning weakened hair fibers protect hair length and reduce noticeable shedding.',
    },
  ];

  const earlySigns = [
    'A visibly widening hair part line when styling',
    'Reduced ponytail thickness or hair density around the vertex/crown',
    'A receding hairline across the forehead or temporal angles',
    'Increased scalp visibility under bathroom downlights or sunshine',
    'A noticeable increase in daily hair accumulation in combs or shower drains',
    'Hair shafts that feel progressively finer, thinner, or fuzzier over time',
    'Repeated smooth, bare patches appearing without prior itching',
  ];

  const hairCareTips = [
    {
      title: 'Choose Gentle Hair Products',
      desc: 'Use mild, pH-balanced shampoos tailored to your scalp type. Discontinue products that produce burning, tingling, or itching.',
    },
    {
      title: 'Minimize Heat & Chemical Processing',
      desc: 'Limit blow-drying, curling wands, straightening irons, bleach, and chemical smoothing, which weaken the keratin cortex.',
    },
    {
      title: 'Prioritize a Protein-Rich Diet',
      desc: 'Ensure balanced daily intake of proteins, legumes, greens, nuts, and healthy fats that supply amino acids for keratin synthesis.',
    },
    {
      title: 'Handle Fragile Wet Hair Carefully',
      desc: 'Wet hair stretches and breaks easily. Use a wide-toothed comb, pat gently with a microfiber towel, and never rub aggressively.',
    },
    {
      title: 'Manage Stress & Ensure Restful Sleep',
      desc: 'Consistent 7–8 hours of restorative sleep and stress reduction practices mitigate elevated cortisol that triggers telogen shedding.',
    },
    {
      title: 'Beware Unverified "Miracle" Oils & Tonics',
      desc: 'Be skeptical of aggressive commercial advertisements promising overnight regrowth or permanent cures without clinical trials.',
    },
  ];

  const redFlags = [
    {
      sign: 'Sudden or Massive Hair Shedding',
      urgency: 'Medical Assessment Advised',
      reason: 'Could indicate acute telogen effluvium, drug reaction, or systemic illness.',
    },
    {
      sign: 'Smooth, Circular Bald Patches',
      urgency: 'Evaluation Recommended',
      reason: 'Classic presentation of autoimmune alopecia areata requiring timely care.',
    },
    {
      sign: 'Scalp Pain, Burning or Marked Redness',
      urgency: 'Urgent Dermatologist Check',
      reason: 'May signify cicatricial (scarring) alopecia where delayed care risks permanent follicle loss.',
    },
    {
      sign: 'Pus, Crusting or Follicular Pustules',
      urgency: 'Prompt Medical Care',
      reason: 'Signs of bacterial or fungal scalp infection requiring antimicrobial intervention.',
    },
    {
      sign: 'Loss of Eyebrows or Eyelashes',
      urgency: 'Comprehensive Evaluation',
      reason: 'Points toward autoimmune or endocrine conditions that need thorough blood work.',
    },
    {
      sign: 'Fever with Rapidly Spreading Redness',
      urgency: 'Immediate Medical Attention',
      reason: 'Possible severe scalp cellulitis or invasive infection requiring emergency medical care.',
    },
  ];

  const clinicSelectionCriteria = [
    {
      title: 'Verified Qualifications & Board Registration',
      desc: 'Verify that the doctor holds recognised medical degrees (such as BHMS or MBBS/MD Dermatology) and is registered with state medical councils (e.g. KA-HOM-15563 or Travancore-Cochin Medical Councils).',
    },
    {
      title: 'Thorough Diagnostic Assessment',
      desc: 'A trustworthy clinic examines your scalp, reviews family history, checks medication timelines, and orders laboratory blood tests before suggesting treatment.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Expect honest explanations of suspected diagnoses, expected timelines, genuine limitations, and realistic chances of regrowth.',
    },
    {
      title: 'Zero Guaranteed-Cure Claims',
      desc: 'Reputable practitioners never claim 100% guaranteed regrowth, overnight results, or miraculous cures for every kind of alopecia.',
    },
    {
      title: 'Specialist Referrals When Warranted',
      desc: 'A responsible clinic refers patients to dermatologists or endocrinologists whenever symptoms indicate scarring or complex systemic disorders.',
    },
    {
      title: 'Transparent Consultation & Investigation Fees',
      desc: 'All consultation charges, routine tests, and follow-up schedules should be clearly communicated upfront without hidden subscriptions.',
    },
  ];

  const questionsToAsk = [
    'What is the most likely cause of my hair shedding or scalp symptoms?',
    'Do I need a trichoscopy scalp examination or specific blood tests (ferritin, thyroid, CBC)?',
    'Is there scientific evidence supporting the proposed treatment for my specific diagnosis?',
    'What are the potential side effects, contraindications, or lifestyle precautions?',
    'Could any recommended remedies interact with my current prescription medications?',
    'Should I consult a board-certified dermatologist before beginning this treatment?',
    'How will my treatment progress be measured objectively over the coming months?',
    'What should I do if my symptoms fail to improve or if shedding worsens?',
  ];

  const faqs = [
    {
      q: 'What causes excessive hair fall?',
      a: 'Excessive hair fall may be associated with genetics (pattern hair loss), physical or emotional stress, recent illness, hormonal changes (thyroid, pregnancy, PCOS), nutritional deficiencies (iron, protein, zinc), medications, scalp conditions, or damaging hair styling practices. Identifying the underlying cause through professional evaluation is critical for selecting an appropriate treatment approach.',
    },
    {
      q: 'Is homeopathy effective for hair loss?',
      a: 'Current scientific evidence does not establish homeopathy as an effective treatment for hair loss or scalp disorders. While some people choose homeopathic consultations for complementary, constitutional supportive care, anyone experiencing persistent hair fall should obtain an accurate medical assessment and must not delay evidence-based treatment.',
    },
    {
      q: 'How can I find a qualified Hair Doctor in Malappuram?',
      a: 'Look for a qualified healthcare professional with recognized qualifications, verifiable council registration, and experience in diagnosing scalp and follicular disorders. A dermatologist is the most appropriate specialist for sudden, unexplained, patchy, or inflammatory hair loss.',
    },
    {
      q: 'Can nutritional deficiencies cause hair thinning?',
      a: 'Yes. Deficiencies in iron (low serum ferritin), zinc, protein, and vitamin D can contribute directly to hair shedding. However, not all hair loss is nutritional. A blood test should always confirm a deficiency before you start supplements, as unguided high-dose supplements can sometimes worsen hair loss.',
    },
    {
      q: 'When should I seek treatment for scalp itching?',
      a: 'You should consult a healthcare professional if scalp itching is persistent, severe, or accompanied by visible redness, thick greasy scales, sores, pustules, hair loss, or signs of infection. Conditions like seborrhoeic dermatitis, psoriasis, or fungal infections need targeted medical therapies.',
    },
    {
      q: 'Can hair loss be reversed?',
      a: 'Certain forms of hair loss are reversible or manageable, especially when the underlying trigger (such as iron deficiency, stress, or mild telogen effluvium) is identified and resolved. However, scarring alopecias can cause permanent follicle loss if untreated, which is why early medical diagnosis is essential.',
    },
    {
      q: 'What should I look for in a Hair Homoeopathy Clinic in Malappuram?',
      a: 'Confirm the practitioner’s qualifications and council registration, ask transparently about scientific evidence and realistic expectations, and ensure that conventional medical investigations (like blood panels or dermatologist referrals) will not be discouraged or delayed.',
    },
    {
      q: 'Is hair fall always a sign of illness?',
      a: 'No. Losing between 50 and 100 hairs per day is part of normal follicular renewal. Temporary increases in shedding also frequently happen after childbirth, fever, or seasonal shifts. However, persistent shedding, discrete patches, or noticeable thinning warrant clinical evaluation.',
    },
    {
      q: 'What happens during a hair and scalp consultation in Malappuram?',
      a: 'The clinician reviews your health timeline, recent illnesses, dietary habits, family history, and medication list. The scalp is examined under good lighting to assess hair density and check for inflammation or scarring. Laboratory blood investigations may be recommended before finalizing advice.',
    },
    {
      q: 'How long does it take to see results from hair treatment?',
      a: 'Scalp hair grows at an average rate of only 1 to 1.5 centimetres per month. Consequently, evidence-based treatments usually require at least 3 to 6 months of continuous care before a visible reduction in shedding or improvement in hair coverage can be accurately measured.',
    },
    {
      q: 'Can tight hairstyles cause permanent hair loss?',
      a: 'Yes. Repeated or continuous pulling on hair follicles from tight ponytails, braids, extensions, or tightly tied religious headdresses can lead to traction alopecia. While early tension relief allows full recovery, chronic untreated pulling can cause irreversible follicular scarring.',
    },
    {
      q: 'Should I consult Dr. Anjali for an in-person or online hair consultation?',
      a: 'Dr. Anjali Chandrasekhar offers both in-clinic consultations at Kuttippuram and Puthanathani and online video consultations. For initial evaluation, symptom review, and constitutional case taking, either format is suitable. When scalp examination reveals marked inflammation or scarring, in-person clinical assessment or specialist dermatologist referral is advised.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-[#1E2559] font-sans">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#1E2559] text-white shadow-md border-b border-white/10 py-2.5 px-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-semibold text-white">
                Hair &amp; Scalp Treatment – Malappuram Patient Guide
              </span>
              <span className="hidden md:inline text-white/70">
                | Dr. Anjali Chandrasekhar (BHMS, Board Reg. KA-HOM-15563)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${phonePrimary}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {phonePrimary}</span>
              </a>
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center flex-wrap gap-2 text-xs text-[#64748B]">
            <button
              onClick={() => setCurrentView('home')}
              className="hover:text-[#303A88] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => setCurrentView('treatments')}
              className="hover:text-[#303A88] transition-colors"
            >
              Treatments
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => setCurrentView('skin-hair-care')}
              className="hover:text-[#303A88] transition-colors"
            >
              Skin &amp; Hair Care
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1E2559] font-semibold">
              Hair and Scalp Homoeopathic Treatment in Malappuram
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION WITH DOCTOR PROFILE ON THE LEFT */}
      <section className="relative bg-gradient-to-br from-[#1E2559] via-[#242C66] to-[#161B40] text-white py-12 lg:py-16 overflow-hidden">
        {/* Subtle background ornamentation */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* DOCTOR PROFILE CARD ON THE LEFT (Desktop col-span-5) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white text-[#1E2559] rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Decorative Accent Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0D9488] via-[#10B981] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Hair and Scalp Treatment in Malappuram"
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.src = '/images/dr-anjali-malayali-doctor.jpg';
                        }}
                      />
                    </div>
                    <span className="absolute bottom-1 right-2 bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-white">
                      Verified BHMS
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold mb-2">
                      <Award className="w-3.5 h-3.5 text-[#303A88]" />
                      <span>Board Reg. KA-HOM-15563</span>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-[#1E2559]">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs font-semibold text-[#0D9488] mt-0.5">
                      BHMS | Lead Homeopathic Physician
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      10+ years of dedicated practice conducting detailed hair fall evaluations, scalp assessments, nutritional reviews, and constitutional patient care across Malappuram district.
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-left">
                      <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                        <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                          Main Clinic
                        </p>
                        <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                          Kuttippuram
                        </p>
                        <p className="text-[10px] text-[#64748B]">Tirur-Kuttippuram Rd</p>
                      </div>
                      <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                        <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                          Branch Clinic
                        </p>
                        <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                          Puthanathani
                        </p>
                        <p className="text-[10px] text-[#64748B]">Opp. Police Station</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                      <a
                        href={`tel:${phonePrimary}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#303A88] hover:bg-[#232b66] text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {phonePrimary}</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>

                    <p className="text-[11px] text-[#94A3B8] text-center mt-3 flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3 text-[#10B981]" />
                      <span>Mon – Sat: 9:30 AM – 6:30 PM | Sunday By Appt</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO CONTENT ON THE RIGHT (Desktop col-span-7) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#86EFAC]">
                <Scissors className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Regional Clinical Trichology Guide • Malappuram Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Hair and Scalp Homoeopathic Treatment in Malappuram
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Healthy hair and a comfortable scalp are important aspects of personal care and confidence. However, hair fall, thinning hair, dandruff, scalp itching, dryness, and other hair-related concerns can affect people of different ages. Factors such as genetics, hormonal changes, nutritional deficiencies, stress, certain medications, and underlying medical conditions may contribute to hair and scalp problems. Identifying the cause is an important first step towards choosing an appropriate treatment.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Clinical Focus
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Root Cause Diagnosis
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Investigation
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Blood &amp; Scalp Workup
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Care Format
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Clinic &amp; Online Video
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Clinic Consultation</span>
                </button>
                <button
                  onClick={handleBookOnline}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm transition-all border border-white/20"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Online Video Consult</span>
                </button>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#303A88] hover:bg-[#283177] text-white font-semibold text-sm transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Doctor Desk: {phoneSecondary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY TAKEAWAYS */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Essential Clinical Facts
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Key Takeaways on Hair &amp; Scalp Care in Malappuram
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Core clinical principles you should know before starting any hair regrowth treatment, cosmetic therapy, or complementary protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#0D9488]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-teal-100/80 text-[#0D9488] flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* Summary Highlight Box */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#303A88] text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/20 text-[#86EFAC] flex items-center justify-center font-bold text-xs mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-white mb-1.5">
                  Professional Guidance First
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Never replace accurate medical diagnostic assessment with unverified cosmetic tonics or guaranteed regrowth promises. Early assessment protects follicles from permanent damage.
                </p>
              </div>
              <button
                onClick={handleBookConsultation}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#86EFAC] hover:text-white transition-colors"
              >
                <span>Schedule Malappuram Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: UNDERSTANDING HAIR AND SCALP PROBLEMS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Biological Fundamentals
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Understanding Hair and Scalp Problems
            </h2>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              Hair grows through a natural cycle involving growth (anagen), transition (catagen), and resting (telogen) phases. It is normal to shed some hair every day. However, when shedding becomes excessive, hair density decreases, or bald patches develop, the change may indicate an underlying problem.
            </p>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              A range of conditions can affect the hair follicles and scalp. Some cause temporary hair shedding, while others may lead to progressive thinning or permanent hair loss if not treated promptly.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-bold text-lg text-[#1E2559] mb-4 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-[#0D9488]" />
              <span>Common Concerns Prompting People to Seek a Hair Specialist in Malappuram</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {commonConcerns.map((concern, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] rounded-2xl p-4 border border-[#E2E8F0] hover:border-[#0D9488]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#0D9488] font-bold text-xs flex items-center justify-center mb-2.5">
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-sm text-[#1E2559] mb-1">
                    {concern.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {concern.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start gap-3.5">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <p className="font-bold text-amber-950 text-sm mb-0.5">
                  Crucial Distinction: Hair Breakage vs. Follicular Hair Loss
                </p>
                <p>
                  These symptoms can have different causes and require different treatments. For example, dandruff is not the same condition as alopecia, and hair breakage is not necessarily caused by hair follicle damage. A proper assessment helps distinguish between these problems before you invest time or money in treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMON CAUSES OF HAIR FALL & SCALP PROBLEMS */}
      <section className="py-14 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Diagnostic Etiology
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Common Causes of Hair Fall and Scalp Problems
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Understanding possible causes can help people seek appropriate care rather than relying on unverified home remedies or cosmetic tonics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndContributors.map((cause, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-1 rounded-full">
                      Cause {cause.number}
                    </span>
                    <span className="text-[11px] font-semibold text-[#0D9488] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      {cause.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#1E2559] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {cause.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <p className="text-[11px] font-bold text-[#1E2559] uppercase tracking-wider mb-1">
                    Clinical Action &amp; Care
                  </p>
                  <p className="text-xs text-[#0D9488] font-medium leading-relaxed">
                    {cause.care}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY PROFESSIONAL ASSESSMENT MATTERS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Clinical Examination
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Why Professional Hair and Scalp Assessment Matters
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Choosing a treatment without understanding the cause of hair loss can delay appropriate care. A professional assessment considers the pattern of hair loss, the condition of the scalp, personal and family medical history, medication use, and other relevant symptoms.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                If you are searching for a Hair Doctor in Malappuram, consider choosing a qualified practitioner who explains the likely diagnosis, available treatment options, expected limitations, and when specialist referral may be necessary.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                <h4 className="font-bold text-sm text-[#1E2559] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>What an Assessment in Malappuram Involves:</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#475569]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Reviewing when the hair loss began and how it has changed over time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Examining the scalp skin, follicle openings, and hair distribution under magnification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Asking about family history of pattern loss, recent illnesses, and high fevers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Reviewing daily dietary intake, medications, and recent major life stresses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Checking for signs of inflammation, fungal scaling, pustules, or scarring.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Recommending targeted blood tests (serum ferritin, TSH, CBC) when clinically appropriate.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-md space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#E11D48] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1E2559]">
                  When Specialist Dermatologist Referral is Crucial
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A dermatologist may be particularly helpful when hair loss is sudden, unexplained, associated with marked scalp inflammation, or causing smooth, shiny bald patches where follicle pores are absent.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <p className="text-xs font-bold text-[#1E2559]">
                      Suspected Cicatricial (Scarring) Alopecia
                    </p>
                    <p className="text-[11px] text-[#64748B] mt-0.5">
                      Destruction of hair follicles requires scalp biopsy and aggressive medical anti-inflammatory care to prevent permanent bare spots.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <p className="text-xs font-bold text-[#1E2559]">
                      Severe Scalp Psoriasis or Fungal Ringworm
                    </p>
                    <p className="text-[11px] text-[#64748B] mt-0.5">
                      Keratolytic and systemic prescription antifungal agents are required to eliminate infectious organisms.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={handleBookConsultation}
                    className="flex-1 py-2.5 rounded-xl bg-[#303A88] hover:bg-[#252f75] text-white font-bold text-xs text-center transition-colors"
                  >
                    Book Diagnostic Consultation
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs text-center transition-colors border border-emerald-200"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOMOEOPATHIC HAIR TREATMENT IN MALAPPURAM: WHAT SHOULD YOU KNOW? */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Evidence &amp; Realistic Expectations
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Homoeopathic Hair Treatment in Malappuram: What Should You Know?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              An honest, evidence-informed perspective for patients considering complementary constitutional support for hair fall and scalp concerns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-3xl bg-[#F8FAFD] border border-[#E2E8F0] shadow-sm">
              <p className="text-sm text-[#475569] leading-relaxed">
                Some people explore complementary healthcare options when looking for solutions to hair fall, scalp irritation, and thinning hair. This includes those searching online for a <strong>Hair Homoeopathy Clinic in Malappuram</strong> or a <strong>Homoeopathic Doctor for Hair Problems in Malappuram</strong>.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <p className="font-bold mb-1 flex items-center gap-1.5 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>Important Scientific Disclosure</span>
                </p>
                <p>
                  Homeopathy is based on principles that have not been established as effective explanations for treating disease. Current scientific evidence does not demonstrate that homeopathic remedies effectively treat hair loss, stimulate hair regrowth, or cure scalp disorders. For this reason, anyone considering homeopathy should understand its limitations before making a treatment decision.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Discuss Symptoms &amp; History
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A consultation should include a thorough review of your symptoms, medical history, current medication, and previous treatments. Do not discontinue prescribed medicines or delay evaluation by a dermatologist because of a complementary treatment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Avoid Guaranteed Claims
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Hair loss has multiple possible causes, and treatment outcomes vary. Claims that a particular remedy can guarantee hair regrowth, permanently stop hair fall, or cure every scalp condition should be treated cautiously by patients.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Do Not Delay Medical Care
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Some forms of hair loss are treatable, while others may become permanent if the hair follicles are damaged or destroyed. Scarring alopecia requires timely medical intervention. Homeopathy should never replace evidence-based care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: AVAILABLE MEDICAL APPROACHES */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Evidence-Based Options
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Hair Loss Treatment in Malappuram: Available Medical Approaches
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              The most appropriate treatment depends on the underlying cause of hair loss. There is no single universal treatment that works for every person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalApproaches.map((modality, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white bg-[#0D9488] px-2.5 py-1 rounded-full">
                      Approach {modality.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B]">
                      {modality.subtitle}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#1E2559] mb-2">
                    {modality.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {modality.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Assessment CTA Card */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#242C66] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#86EFAC] bg-white/10 px-2.5 py-1 rounded-full">
                  Personalized Roadmap
                </span>
                <h3 className="font-bold text-lg text-white mt-3 mb-2">
                  Need Clarification on Your Options?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Book a consultation with Dr. Anjali Chandrasekhar for a dedicated review of your symptoms, previous treatments, and laboratory investigations.
                </p>
              </div>
              <button
                onClick={handleBookConsultation}
                className="mt-5 w-full py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book In-Clinic Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: RECOGNIZING EARLY SIGNS OF THINNING */}
      <section className="py-14 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
                Early Detection
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Hair Thinning Treatment in Malappuram: Recognizing Early Signs
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Hair thinning can develop gradually, making early changes easy to overlook. Recognizing these changes early may help you seek an assessment sooner, when follicles are most receptive to interventions.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                People looking for Hair Thinning Treatment in Malappuram should avoid assuming that all thinning is caused simply by stress or poor hair care. Genetic hair loss, hormonal conditions, nutritional deficiencies, and inflammatory disorders may require very different approaches.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0]">
                <h3 className="font-bold text-base text-[#1E2559] mb-3">
                  Watch for These Key Early Changes:
                </h3>
                <div className="space-y-2.5">
                  {earlySigns.map((sign, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3 text-xs text-[#334155]"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-100 text-[#0D9488] font-bold text-[11px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: EVERYDAY HAIR CARE TIPS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Daily Regimen
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Hair and Scalp Treatment in Malappuram: Everyday Hair Care Tips
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Daily hair care cannot cure every cause of hair loss, but healthy habits can reduce preventable shaft damage and support general scalp well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hairCareTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm hover:border-[#10B981]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  {tip.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: RED FLAGS & WHEN TO CONSULT */}
      <section className="py-14 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Clinical Red Flags
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              When Should You Consult a Hair Specialist in Malappuram?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Hair fall is not always a medical emergency, but certain symptoms require prompt medical assessment to exclude infectious or scarring disorders.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#F8FAFD] rounded-3xl border border-[#E2E8F0] shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1E2559] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Observable Sign / Symptom</th>
                  <th className="py-3.5 px-4 font-bold">Recommended Urgency</th>
                  <th className="py-3.5 px-4 font-bold">Clinical Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {redFlags.map((flag, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#1E2559]">
                      {flag.sign}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                        {flag.urgency}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#475569] leading-relaxed">
                      {flag.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center">
            <p className="text-xs text-rose-950 font-medium">
              <strong>Emergency Note:</strong> Seek urgent emergency medical attention if scalp symptoms occur with high fever, rapidly spreading facial redness, or severe pain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: HOW TO CHOOSE A CLINIC & QUESTIONS TO ASK */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Consumer Guide
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
                  How to Choose a Hair Health Clinic in Malappuram
                </h2>
                <p className="text-sm text-[#475569] mt-2">
                  Finding a suitable healthcare provider involves more than comparing promotional advertisements or marketing promises. Look for a provider who takes time to understand your symptoms and explains the basis for any recommendation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinicSelectionCriteria.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm"
                  >
                    <h4 className="font-bold text-xs text-[#1E2559] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-md space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
                  Patient Checklist
                </span>
                <h3 className="font-bold text-base text-[#1E2559]">
                  Questions to Ask at a Homoeopathy Clinic for Hair Problems
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A healthcare provider should answer these questions transparently. If the cause of hair loss is uncertain, a diagnosis should not be assumed simply because a particular treatment is offered.
                </p>

                <div className="space-y-2 pt-1">
                  {questionsToAsk.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-start gap-2 text-xs text-[#334155]"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: WHAT TO EXPECT DURING CONSULTATION */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Consultation Protocol
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              What to Expect During a Hair Loss Consultation
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              An Alopecia Consultation in Malappuram or a general hair and scalp appointment typically begins with a detailed diagnostic discussion.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0]">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 1</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Detailed History</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                When loss began, sudden vs gradual onset, family history, recent high fevers, surgeries, and stress triggers.
              </p>
            </div>
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0]">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 2</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Scalp Examination</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Examining patterns of thinning, follicular ostia, hair caliber variability, flaking, or erythema.
              </p>
            </div>
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0]">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 3</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Targeted Tests</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Recommending serum ferritin, TSH, vitamin D, or fungal examination when clinically necessary.
              </p>
            </div>
            <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0]">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 4</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Care &amp; Follow-up</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Formulating an individualized care plan with objective benchmarks and periodic re-evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: INTERACTIVE FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Doctor Answers
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Frequently Asked Questions on Hair &amp; Scalp Health
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Common questions answered to help you make informed decisions about your hair and scalp care in Malappuram.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1E2559] hover:bg-[#F8FAFD] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-50 text-[#0D9488] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0D9488]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 14: APPOINTMENT BOOKING ENGINE */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Direct Scheduling
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Book Your Hair &amp; Scalp Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Select your preferred appointment mode: In-Clinic consultation at Kuttippuram or Puthanathani, or an Online Video Consultation from home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* SECTION 15: REGIONAL RELATED GUIDES */}
      <RegionalRelatedGuides currentGuideKey="hair-treatment-malappuram" />
    </div>
  );
};
