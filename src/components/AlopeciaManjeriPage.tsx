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
  Sun,
  Droplets,
  Scissors,
  Zap,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AlopeciaManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Alopecia & Hair Loss Care (Manjeri patient guide).'
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
    navigateToBookingWithReason('Alopecia Assessment - Manjeri', 'online');
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
      title: 'Medical Term for Hair Loss',
      desc: 'Alopecia is an umbrella medical term encompassing diverse clinical types—ranging from genetic pattern thinning to autoimmune patchy shedding.',
    },
    {
      title: 'Multifactorial Etiology',
      desc: 'Hair loss may arise from genetics, hormonal sensitivities (DHT), physical/emotional stress, thyroid dysfunction, iron deficiency, or medications.',
    },
    {
      title: 'Type Identification Is Critical',
      desc: 'Treating alopecia effectively requires establishing whether it is androgenetic, areata, telogen effluvium, traction-induced, or cicatricial (scarring).',
    },
    {
      title: 'Scientific Evidence Transparency',
      desc: 'Rigorous scientific trials have not established homeopathy as an effective treatment to reverse alopecia, restore destroyed follicles, or regrow lost hair.',
    },
    {
      title: 'Do Not Delay Medical Care',
      desc: 'Patients must not postpone evidence-based therapies or stop prescribed medications in favour of unproven or guaranteed hair regrowth claims.',
    },
    {
      title: 'Evidence-Based Modalities',
      desc: 'Clinically proven options include topical minoxidil, oral anti-androgens (finasteride for eligible patients), and targeted corticosteroids for areata.',
    },
    {
      title: 'Red Flags for Scarring Alopecia',
      desc: 'Sudden patchy loss, scalp burning, pain, redness, pustules, or smooth shiny skin without follicle openings require urgent specialist dermatology evaluation.',
    },
    {
      title: 'Nutrition & Blood Testing',
      desc: 'Investigating serum ferritin, hemoglobin, thyroid panel (TSH/FT4), and nutritional status is essential before starting any supplements.',
    },
    {
      title: 'Gentle Hair Practices Support Health',
      desc: 'Avoiding tight tension hairstyles, reducing extreme heat styling, and adopting balanced nutrition support hair fiber resilience.',
    },
    {
      title: 'Patience & Realistic Expectations',
      desc: 'Hair follicles follow slow biological cycles; noticeable stabilization or density improvements require 4 to 6 months of continuous care.',
    },
  ];

  const commonSigns = [
    'Increased hair shedding noticed in shower drains, pillows, or hairbrushes',
    'Diffuse thinning and progressive reduction in overall scalp hair density',
    'Widening of the central hair parting line (characteristic female pattern thinning)',
    'Receding hairline around temporal angles or a thinning crown/vertex (male pattern loss)',
    'Coin-shaped, smooth, round or oval bald patches appearing suddenly (Alopecia Areata)',
    'Loss of eyebrows, eyelashes, beard hairs, or body hair',
    'Excessive hair shaft fragility, snapping, or broken "exclamation mark" hairs',
    'Scalp itching, tenderness, redness, burning, or loss of visible follicular orifices',
  ];

  const alopeciaSubtypes = [
    {
      name: 'Androgenetic Alopecia (Pattern Hair Loss)',
      badge: 'Hormonal & Genetic',
      desc: 'The most frequent form of progressive hair loss in men and women. Susceptible follicles undergo miniaturisation under the influence of dihydrotestosterone (DHT), producing progressively finer and shorter hairs.',
      care: 'Evidence-based options include topical minoxidil (2% or 5%), oral 5-alpha reductase inhibitors (finasteride for suitable male patients), low-level laser therapy, and surgical hair restoration.',
    },
    {
      name: 'Alopecia Areata (Autoimmune Hair Loss)',
      badge: 'Autoimmune & Patchy',
      desc: 'Occurs when the immune system mistakenly attacks anagen hair follicles, causing sudden, well-demarcated circular bald patches on the scalp, beard, or eyebrows. Can progress to totalis or universalis.',
      care: 'Management by dermatologists includes intralesional corticosteroid injections, potent topical corticosteroids, topical immunotherapy, or systemic JAK inhibitors for severe recalcitrant disease.',
    },
    {
      name: 'Telogen Effluvium (Stress-Induced Shedding)',
      badge: 'Diffuse & Reactive',
      desc: 'A disruption of the hair growth cycle where a physical or emotional stressor (high fever, severe infection, childbirth, surgery, rapid weight loss, or grief) shifts excessive numbers of hairs into the resting (telogen) phase.',
      care: 'Usually self-limiting within 3 to 6 months once the underlying trigger is addressed. Evaluation involves identifying nutritional deficiencies (iron, vitamin D, zinc) or thyroid imbalances.',
    },
    {
      name: 'Traction Alopecia (Mechanical Strain)',
      badge: 'Physical Pulling',
      desc: 'Caused by chronic repetitive tension and mechanical strain on hair roots from tight braids, tight ponytails, hair extensions, or tightly secured traditional headdresses over years.',
      care: 'Early intervention by completely eliminating tension allows hair follicles to recover. Prolonged uncorrected traction leads to irreversible folliculitis and permanent scarring.',
    },
    {
      name: 'Scarring (Cicatricial) Alopecia',
      badge: 'Urgent Medical Attention',
      desc: 'A rare group of inflammatory disorders (e.g., lichen planopilaris, frontal fibrosing alopecia, discoid lupus) where inflammation destroys hair follicle stem cells, replacing them with scar tissue.',
      care: 'Early specialist dermatology referral and scalp biopsy are critical. Treatment focuses on urgent immunosuppression to halt permanent scarring, as destroyed follicles cannot regrow.',
    },
  ];

  const causesAndContributors = [
    {
      title: 'Genetic Predisposition & DHT',
      desc: 'Polygenic inheritance determines follicle sensitivity to circulating androgens, causing progressive follicular miniaturisation across generations.',
      action: 'Early clinical assessment before substantial follicle shrinkage occurs.',
    },
    {
      title: 'Nutritional Deficiencies (Iron & Protein)',
      desc: 'Low serum ferritin (iron stores), vitamin B12 deficiency, zinc depletion, and severe caloric or protein restriction deprive hair matrices of essential building blocks.',
      action: 'Targeted blood investigations rather than random multivitamins.',
    },
    {
      title: 'Physical & Emotional Stressors',
      desc: 'Severe psychological stress, major medical events, high fever, or childbirth shock anagen follicles into premature resting telogen phase.',
      action: 'Comprehensive stress management, sleep hygiene, and trigger identification.',
    },
    {
      title: 'Thyroid & Systemic Imbalances',
      desc: 'Both hypothyroidism and hyperthyroidism, along with autoimmune conditions (PCOS, lupus, diabetes), can trigger diffuse hair thinning.',
      action: 'Serum TSH, free T4, and metabolic evaluations to address underlying health.',
    },
    {
      title: 'Medication Side Effects',
      desc: 'Certain blood thinners, beta-blockers, retinoids, antidepressants, or hormonal medications can induce shedding as an adverse effect.',
      action: 'Consult prescribing physician—never stop prescription drugs independently.',
    },
    {
      title: 'Scalp Dermatoses & Infections',
      desc: 'Tinea capitis (fungal scalp ringworm), seborrhoeic dermatitis with heavy scaling, and severe scalp psoriasis interfere with follicle health.',
      action: 'Specific antifungal or anti-inflammatory clinical scalp therapies.',
    },
  ];

  const evidenceBasedOptions = [
    {
      step: '01',
      title: 'Comprehensive Medical & Scalp Assessment',
      subtitle: 'Trichoscopy & Laboratory Diagnostics',
      desc: 'Clinical evaluation using dermoscopy/trichoscopy to examine follicular openings, hair shaft diameter variability, yellow/black dots, and perifollicular erythema. Diagnostic blood tests (ferritin, CBC, TSH, ANA, vitamin D) guide tailored care.',
    },
    {
      step: '02',
      title: 'Pattern Hair Loss Pharmacotherapy',
      subtitle: 'Minoxidil & 5-Alpha Reductase Inhibitors',
      desc: 'Topical minoxidil stimulates microcirculation and prolongs anagen growth phase. Oral finasteride inhibits type II 5-alpha reductase to reduce follicle-damaging DHT in eligible male patients under medical guidance.',
    },
    {
      step: '03',
      title: 'Alopecia Areata Immunomodulation',
      subtitle: 'Targeted Dermatological Protocols',
      desc: 'For patchy autoimmune hair loss, intralesional steroid microinjections into affected patches help arrest immune attack. Extensive or rapidly spreading disease may require dermatologist-supervised systemic immunosuppressive or JAK inhibitor therapy.',
    },
    {
      step: '04',
      title: 'Correcting Verified Nutritional Deficiencies',
      subtitle: 'Evidence-Based Dietary & Supplement Support',
      desc: 'When blood tests confirm depleted iron stores (ferritin < 30–50 ng/mL) or vitamin deficiencies, prescribed therapeutic repletion helps restore optimal follicle metabolic turnover without toxic excess.',
    },
    {
      step: '05',
      title: 'Treating Primary Scalp Disorders',
      subtitle: 'Controlling Inflammation & Fungal Spores',
      desc: 'Eradicating active fungal scalp infections (tinea capitis) with oral antifungals and controlling seborrhoeic flaking or scalp psoriasis to eliminate mechanical scratching and secondary shed.',
    },
    {
      step: '06',
      title: 'Surgical Hair Restoration & Procedures',
      subtitle: 'Hair Transplantation & Platelet Therapies',
      desc: 'For stable androgenetic hair loss with adequate healthy donor supply, surgical follicular unit extraction (FUE) or platelet-rich plasma (PRP) procedures may be considered following specialist consultation.',
    },
  ];

  const lifestyleHabits = [
    {
      title: 'Eat a Nutrient-Dense, Protein-Rich Diet',
      desc: 'Keratin requires amino acids. Incorporate adequate pulses, eggs, lentils, fish, curd, nuts, spinach, and whole grains into your daily Kerala home meals.',
    },
    {
      title: 'Handle Hair with Extreme Gentleness',
      desc: 'Avoid vigorous towel rubbing when wet, use a wide-toothed comb on detangled damp hair, and avoid tight elastic bands that apply tension to the hairline.',
    },
    {
      title: 'Avoid Indiscriminate High-Dose Supplements',
      desc: 'Taking excessive biotin, vitamin A, or selenium without documented clinical deficiency can paradoxically worsen hair shedding or cause toxicity.',
    },
    {
      title: 'Manage Psychological Stress & Sleep 7–8 Hours',
      desc: 'Elevated chronic cortisol disrupts follicular dermal papilla signaling. Incorporate regular physical exercise, mindfulness, and regular sleep cycles.',
    },
    {
      title: 'Maintain a Clean, Irritation-Free Scalp',
      desc: 'Wash the scalp regularly with a gentle, sulfate-free cleanser suitable for Malappuram’s humid climate to remove sweat, sebum, and environmental dirt.',
    },
    {
      title: 'Exercise Patience & Track Progress Objectively',
      desc: 'Hair grows only 1 to 1.5 cm per month. Evaluate treatment responses at 3 to 6-month intervals using standardized photographs in identical lighting.',
    },
  ];

  const faqs = [
    {
      q: 'What is alopecia?',
      a: 'Alopecia is the general medical term for hair loss. It can affect the scalp, beard, eyebrows, or other parts of the body, occurring as diffuse thinning, receding hairlines, or distinct circular bald patches. Causes range from genetic and hormonal influences to autoimmune attacks, acute stress, nutritional deficiencies, and inflammatory scalp diseases.',
    },
    {
      q: 'Is Homeopathic Treatment for Alopecia in Manjeri effective?',
      a: 'There is no reliable scientific evidence demonstrating that homeopathy can effectively treat alopecia, reverse hair follicle miniaturisation, or reliably stimulate hair regrowth. While individuals may choose homeopathic consultations for holistic health discussions, patients should be fully aware of these clinical limitations and should never delay evidence-based medical assessment or proven conventional treatments.',
    },
    {
      q: 'What causes excessive hair fall?',
      a: 'Excessive hair shedding is commonly triggered by genetic pattern sensitivity (androgenetic alopecia), acute physiological or emotional stress (telogen effluvium), thyroid dysregulation, low iron stores (ferritin deficiency), rapid weight loss, hormonal shifts following childbirth, scalp fungal infections, or medication side effects.',
    },
    {
      q: 'When should I seek Alopecia Treatment in Manjeri?',
      a: 'You should seek professional medical evaluation if hair loss continues for several weeks or months, if sudden bald patches appear, if eyebrows or beard hairs fall out, or if hair shedding is accompanied by scalp burning, redness, pain, scaling, or scarring. Prompt care is essential to prevent permanent follicle destruction.',
    },
    {
      q: 'Can alopecia be reversed?',
      a: 'Reversibility depends heavily on the specific diagnosis and how early treatment begins. Temporary shedding conditions like telogen effluvium and early alopecia areata frequently exhibit significant or complete regrowth once triggers or inflammation are addressed. In contrast, scarring alopecias cause irreversible follicle destruction, where the goal of medical care is to stop further progression.',
    },
    {
      q: 'What is the difference between hair fall and alopecia?',
      a: 'Normal hair fall refers to the natural shedding of 50 to 100 telogen hairs each day as part of the natural hair cycle. Alopecia is an abnormal medical state where hair shedding significantly exceeds normal limits, where hair fails to regrow, or where follicles miniaturise or become permanently scarred.',
    },
    {
      q: 'Is Hair Loss Treatment in Manjeri different for men and women?',
      a: 'Yes. While both sexes experience pattern hair loss, the clinical presentation and pharmacological treatments differ. Men typically experience temporal recession and crown thinning, often treated with topical minoxidil or oral finasteride. Women generally experience diffuse central crown thinning without hairline loss, where anti-androgens must be carefully evaluated regarding childbearing potential and pregnancy safety.',
    },
    {
      q: 'Can stress cause hair loss?',
      a: 'Yes. Major physiological or emotional stress—such as severe illness, high fevers, major surgeries, bereavement, or sudden weight loss—can trigger acute telogen effluvium. Because hair cycles take several weeks to transition, excessive shedding typically becomes noticeable 2 to 3 months after the triggering event.',
    },
    {
      q: 'What should I expect during an Alopecia Consultation in Manjeri?',
      a: 'A clinical consultation includes a comprehensive review of hair loss duration, family history, diet, medications, and recent stressors. Dr. Anjali conducts a detailed scalp and follicular examination, evaluates hair pull test dynamics, and recommends appropriate blood investigations (iron profile, thyroid panel) or specialist dermatology referrals.',
    },
    {
      q: 'Can diet and supplements stop hair loss?',
      a: 'A well-balanced diet rich in protein, iron, and micronutrients supports healthy follicular metabolism. However, nutritional supplements only help if an underlying documented deficiency exists. Taking megadoses of biotin, vitamin A, or iron without confirmed clinical deficiency will not halt genetic or autoimmune alopecia and can cause systemic toxicity.',
    },
    {
      q: 'How long does it take for hair to grow back?',
      a: 'Hair growth is a slow biological process, averaging approximately 1 to 1.5 centimetres per month. For reversible conditions, visible reduction in shedding typically requires 2 to 3 months of compliant care, while measurable increases in hair density and coverage usually take 6 to 12 months.',
    },
    {
      q: 'How can I choose an Alopecia Clinic in Manjeri?',
      a: 'Look for a healthcare provider who emphasizes accurate clinical diagnosis, avoids unrealistic guarantees of 100% regrowth or permanent cures, clearly explains scientific evidence, and readily collaborates with or refers to specialist dermatologists for complex or scarring hair conditions.',
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
                Alopecia &amp; Hair Loss Consultation – Manjeri &amp; Malappuram Patient Guide
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
                <Phone className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Call Clinic</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white font-semibold transition-colors"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
              Alopecia Homeopathic Treatment in Manjeri
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
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Alopecia and Hair Loss in Manjeri and Malappuram"
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
                      BHMS | Chief Homeopathic Physician
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      10+ years of clinical experience conducting comprehensive hair loss assessments, nutritional screening, constitutional consultations, and evidence-guided patient care across Malappuram district.
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-left">
                      <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                        <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                          Main Clinic
                        </p>
                        <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                          Kuttippuram
                        </p>
                        <p className="text-[10px] text-[#64748B]">Near Railway Station</p>
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
                      <span>Mon – Sat: 9:30 AM – 6:30 PM | Sunday By Prior Appt</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO CONTENT ON THE RIGHT (Desktop col-span-7) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#86EFAC]">
                <Scissors className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Regional Clinical Trichology Guide • Manjeri Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Alopecia Homeopathic Treatment in Manjeri
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Clinical guidance for individuals in Manjeri and Malappuram experiencing excessive hair fall, thinning hair, receding hairlines, or patchy bald spots. Explore medical subtypes, contributing triggers, evidence-based trichological options, and essential scientific transparency disclosures.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Condition Type
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Alopecia (Hair Loss)
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Diagnostic Standard
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Trichoscopy &amp; Labs
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Evidence Disclosure
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Transparent Care
                  </p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Hair Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#86EFAC]" />
                  <span>Secondary Desk: {phoneSecondary}</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#CBD5E1] pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Online &amp; In-Person Outpatient Visits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Zero Unrealistic Regrowth Claims</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRITICAL EVIDENCE-BASED TRANSPARENCY NOTICE */}
      <section className="bg-[#EFF6FF] border-b border-[#BFDBFE] py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#1E3A8A] text-white rounded-xl shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-[#93C5FD]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E3A8A]">
                Medical Evidence Disclosure Regarding Alopecia &amp; Homeopathy
              </h4>
              <p className="text-xs text-[#1E40AF] mt-0.5 leading-relaxed">
                Scientific evidence has not established homeopathy as an effective treatment for alopecia or as a reliable way to regrow lost hair. A proper medical assessment can help identify the underlying cause and determine which evidence-based treatments are suitable. Never discontinue or delay clinically proven treatments in favour of unproven alternatives.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('scientific-evidence');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1"
          >
            <span>Read scientific transparency details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 10 IMPORTANT KEY TAKEAWAYS */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL SUMMARY &amp; ESSENTIAL KNOWLEDGE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              10 Important Key Takeaways: Alopecia Care
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Essential trichological facts every patient in Manjeri and Malappuram should understand before investing in hair fall remedies, clinic packages, or unproven regrowth products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#EEF2FB] text-[#303A88] font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Clinical Takeaway
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center text-[11px] text-[#0D9488] font-semibold gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Medical Fact</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT IS ALOPECIA? */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
                PATHOLOGY &amp; CLINICAL DEFINITION
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559]">
                What Is Alopecia?
              </h2>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Alopecia is the formal medical designation for partial or complete hair loss. It can manifest gradually over years or develop abruptly in a matter of days. Alopecia may affect a discrete localized patch of the scalp, involve extensive regions of the head, or extend to other hair-bearing surfaces including the eyebrows, eyelashes, beard, and body.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Under normal physiological conditions, each hair follicle undergoes an asynchronous biological cycle consisting of an active growth phase (<strong>Anagen</strong>, lasting 2 to 7 years), a short transition phase (<strong>Catagen</strong>, lasting 2 to 3 weeks), and a resting phase (<strong>Telogen</strong>, lasting 2 to 4 months) followed by hair shedding (<strong>Exogen</strong>). When this delicate cycle is disrupted—whether through genetic miniaturisation, immune attack, nutritional starvation, or hormonal shock—excessive numbers of hairs enter shedding, regrowth slows, or follicles become irreparably damaged.
              </p>

              <div className="p-5 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <AlertCircle className="w-4 h-4 text-[#E11D48]" />
                  <span>Identifying the Precise Type Precedes Treatment</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Because alopecia represents a group of vastly different medical disorders, no single universal shampoo, oil, or tablet can treat all forms of hair loss. Effective care in Manjeri begins with accurate diagnostic categorization rather than trial-and-error marketing claims.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-sm text-[#1E2559] uppercase tracking-wider mb-3">
                  Common Signs &amp; Presentations of Alopecia
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {commonSigns.map((sign, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#334155]"
                    >
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Card: Consultation Expectations */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CBD5E1] shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[#EEF2FB] text-[#303A88] rounded-2xl">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      Alopecia Consultation in Manjeri
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Structured Clinical Evaluation
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  A clinical consultation provides an opportunity to review the history of hair shedding, examine the scalp under magnification, and identify whether a temporary shedding disorder or progressive condition is active.
                </p>

                <div className="space-y-3 border-t border-[#E2E8F0] pt-4 text-xs text-[#334155]">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Symptom Chronology:</strong> Onset timing, rate of shedding, and anatomical distribution.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Medical &amp; Family History:</strong> Hereditary pattern loss, thyroid history, recent illnesses, or surgeries.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Scalp &amp; Follicle Examination:</strong> Checking for follicular openings, erythema, scaling, or scarring signs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Diagnostic Testing Recommendations:</strong> Ferritin, CBC, TSH, or specialist dermatology referral.</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={handleBookConsultation}
                    className="w-full py-3 px-4 rounded-xl bg-[#303A88] hover:bg-[#222a63] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Hair Assessment</span>
                  </button>
                </div>
              </div>

              {/* Red Flag Warning Box */}
              <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 text-xs text-[#991B1B] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#B91C1C]">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Warning: Symptoms That Require Prompt Medical Attention</span>
                </div>
                <p className="leading-relaxed">
                  Hair loss accompanied by scalp burning, severe pain, redness, pustules, thick crusting, or smooth shiny skin where follicle openings have vanished may indicate <strong>cicatricial (scarring) alopecia</strong>. Delayed medical treatment can result in permanent, irreversible baldness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENT TYPES OF ALOPECIA (5 SUBTYPES) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL SUBTYPES &amp; CHARACTERISTICS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Different Types of Alopecia
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Understanding the exact biological category of hair loss is the most important step in formulating a safe, realistic management plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alopeciaSubtypes.map((type, tIdx) => (
              <div
                key={tIdx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EEF2FB] text-[#303A88]">
                      {type.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">
                      Type #{tIdx + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#1E2559] mb-2.5">
                    {type.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {type.desc}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#E2E8F0]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] mb-1">
                    Standard Medical Approach
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {type.care}
                  </p>
                </div>
              </div>
            ))}

            {/* Special Highlight: Early Action in Traction Alopecia */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#2B3577] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-white mb-3">
                  <Zap className="w-3.5 h-3.5 text-[#FCD34D]" />
                  <span>Crucial Preventive Insight</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Traction Alopecia Is 100% Preventable
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Frequently observed in children and women using tightly pulled ponytails, braids, or tight pins. Relieving mechanical tension early allows complete follicular recovery; ignoring persistent tenderness can lead to permanent peripheral scarring.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/20">
                <button
                  onClick={handleBookConsultation}
                  className="w-full py-2.5 px-3 rounded-xl bg-white text-[#1E2559] text-xs font-bold hover:bg-[#EEF2FB] transition-colors text-center"
                >
                  Book Scalp Health Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CAUSES OF HAIR LOSS */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ETIOLOGY &amp; CONTRIBUTING FACTORS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Common Causes of Hair Loss
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Hair loss rarely stems from a single isolated event. Identifying systemic, metabolic, environmental, and behavioral drivers is key to meaningful care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndContributors.map((cause, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-2xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-sm mb-4">
                    0{cIdx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {cause.desc}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] p-3 rounded-2xl border border-[#E2E8F0]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] mb-0.5">
                    Recommended Action
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {cause.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENTIFIC EVIDENCE DISCLOSURE SECTION */}
      <section id="scientific-evidence" className="py-12 lg:py-16 bg-[#EEF2FB] border-y border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              CLINICAL ETHICS &amp; EVIDENCE TRANSPARENCY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Homeopathic Treatment for Alopecia in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Clear, transparent communication regarding the scientific standing and clinical limitations of homeopathy in hair loss.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#CBD5E1] shadow-md space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EEF2FB] text-[#303A88] rounded-2xl shrink-0 mt-1">
                <ShieldAlert className="w-7 h-7 text-[#303A88]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-[#1E2559]">
                  What Does Reliable Scientific Evidence Say About Homeopathy for Hair Regrowth?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Individuals searching online for <em>Homeopathic Treatment for Alopecia in Manjeri</em> frequently explore homeopathic clinics to discuss hair loss, past failed treatments, and personal preferences regarding natural therapies.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  However, it is clinically essential to understand the scientific reality: <strong>There is currently no reliable scientific evidence that homeopathy effectively treats alopecia, reverses follicular miniaturisation, halts autoimmune follicular destruction, or reliably stimulates hair regrowth</strong>.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Homeopathic care must not replace appropriate medical evaluation or evidence-based treatments, especially when hair loss is sudden, extensive, painful, or associated with scalp inflammation. Delaying proven therapy or substituting unproven remedies can lead to irreversible scarring and permanent follicle loss.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
              <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#10B981]" />
                  <span>The Role of an Ethical Consultation</span>
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A consultation provides an opportunity to evaluate complete lifestyle history, stress levels, dietary adequacy, and overall well-being. A responsible practitioner prioritizes patient safety, sets realistic expectations, and directs patients toward evidence-based options and dermatology referrals.
                </p>
              </div>

              <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#E11D48]" />
                  <span>Do Not Discontinue Prescribed Medications</span>
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Patients must never discontinue prescribed medical treatments (such as minoxidil or dermatological therapies) without consulting their prescribing physician. If homeopathy is pursued alongside conventional care, all healthcare providers should be fully informed about all remedies and supplements being used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE-BASED OPTIONS FOR HAIR FALL TREATMENT IN MANJERI */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ESTABLISHED THERAPEUTIC PATHWAYS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Hair Fall Treatment in Manjeri: What Are the Evidence-Based Options?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Established clinical modalities backed by peer-reviewed dermatological research to preserve existing follicles, reduce shedding, and stimulate regrowth where biologically possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceBasedOptions.map((opt, oIdx) => (
              <div
                key={oIdx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#0D9488] bg-[#EEF2FB] px-3 py-1 rounded-full">
                      Step {opt.step}
                    </span>
                    <span className="text-[10px] font-semibold text-[#94A3B8] uppercase">
                      Clinical Option
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-1">
                    {opt.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#303A88] mb-3">
                    {opt.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WARNING ON "GUARANTEED CURES" */}
          <div className="mt-8 bg-[#FFF1F2] rounded-3xl p-6 sm:p-8 border border-[#FECDD3] text-[#9F1239] space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#E11D48] text-white rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#9F1239]">
                Critical Warning: Beware of Guaranteed Regrowth Claims &amp; Miracle Products
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
              No genuine medical practitioner, clinic, or product can ethically promise guaranteed or 100% permanent hair regrowth. Human hair biology is complex and subject to genetics, age, and systemic factors. Unregulated hair oils, herbal pastes, and miraculous claims often exploit patient vulnerability while delaying essential clinical diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* HAIR THINNING: WHEN SHOULD YOU SEEK HELP? */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL VIGILANCE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Hair Thinning Treatment in Manjeri: When Should You Seek Help?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Hair thinning frequently progresses silently before becoming cosmetically apparent. Knowing when shedding crosses from normal variation to a medical concern is essential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-2">
              <div className="font-bold text-[#1E2559] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Prolonged Shedding</span>
              </div>
              <p className="text-[#64748B] leading-relaxed">
                Hair loss persisting continuously for more than 2 to 3 months without signs of spontaneous deceleration.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-2">
              <div className="font-bold text-[#1E2559] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Distinct Bald Patches</span>
              </div>
              <p className="text-[#64748B] leading-relaxed">
                The sudden emergence of smooth, round or oval patches on the scalp, beard, or eyebrows.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-2">
              <div className="font-bold text-[#1E2559] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Scalp Sensations</span>
              </div>
              <p className="text-[#64748B] leading-relaxed">
                Hair shedding accompanied by persistent scalp burning, tenderness, pruritus, pustules, or scaling.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-2">
              <div className="font-bold text-[#1E2559] text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Systemic Symptoms</span>
              </div>
              <p className="text-[#64748B] leading-relaxed">
                Hair loss coinciding with chronic fatigue, unexpected weight shifts, irregular menstrual cycles, or nail ridges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSING AN ALOPECIA CLINIC & WHAT TO EXPECT */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
                CONSUMER SAFETY &amp; PROFESSIONAL STANDARDS
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Choosing an Alopecia Homeopathy Clinic in Manjeri
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                When researching homeopathic or alternative clinics in Manjeri for hair loss, look for practitioners who adhere to strict clinical ethics and transparent communication:
              </p>

              <div className="space-y-3 text-xs text-[#334155]">
                <div className="p-3 bg-[#F8FAFD] rounded-xl border border-[#E2E8F0]">
                  <strong>1. Clear &amp; Honest Communication:</strong> The practitioner should explain what homeopathy can and cannot do without exaggerating outcomes.
                </div>
                <div className="p-3 bg-[#F8FAFD] rounded-xl border border-[#E2E8F0]">
                  <strong>2. Realistic Expectations:</strong> Strict avoidance of guaranteed regrowth claims or proprietary secret oil concoctions.
                </div>
                <div className="p-3 bg-[#F8FAFD] rounded-xl border border-[#E2E8F0]">
                  <strong>3. Prompt Specialist Referrals:</strong> Immediate referral to qualified dermatologists when scarring or severe alopecia areata is suspected.
                </div>
                <div className="p-3 bg-[#F8FAFD] rounded-xl border border-[#E2E8F0]">
                  <strong>4. Treatment Transparency:</strong> Full disclosure of all ingredients, potential interactions, and evidence basis.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
                CLINICAL PROCEDURE
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                What to Expect During an Alopecia Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                At Anjali Homoeo Clinic, Dr. Anjali Chandrasekhar conducts structured consultations focused on medical history, scalp health, and patient safety:
              </p>

              <div className="space-y-3 text-xs text-[#334155]">
                <div className="p-3 bg-[#EEF2FB] rounded-xl border border-[#D8E1F5]">
                  <strong>• Symptom History:</strong> Detailing shedding onset, progression velocity, triggers, and hair care routines.
                </div>
                <div className="p-3 bg-[#EEF2FB] rounded-xl border border-[#D8E1F5]">
                  <strong>• Scalp Examination:</strong> Magnified trichoscopic inspection of hair caliber, density, and follicle openings.
                </div>
                <div className="p-3 bg-[#EEF2FB] rounded-xl border border-[#D8E1F5]">
                  <strong>• Hair Pull Test:</strong> Assessing active telogen shedding dynamics across different scalp quadrants.
                </div>
                <div className="p-3 bg-[#EEF2FB] rounded-xl border border-[#D8E1F5]">
                  <strong>• Diagnostic Workup:</strong> Recommending serum ferritin, hemoglobin, TSH, or specialist referral as needed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE HABITS THAT SUPPORT HEALTHY HAIR */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              DAILY CARE &amp; SUPPORTIVE PROTOCOLS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Lifestyle Habits That Support Healthy Hair
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              While lifestyle measures cannot cure genetic pattern loss or autoimmune alopecia on their own, supportive daily habits optimize the biological environment for hair fiber strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleHabits.map((habit, hIdx) => (
              <div
                key={hIdx}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                    {hIdx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-2">
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

      {/* APPOINTMENT BOOKING SECTION */}
      <section id="booking-section" className="py-12 lg:py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL APPOINTMENT
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Schedule Your Hair Loss Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Consult Dr. Anjali Chandrasekhar via secure Online Video Consultation or visit our Outpatient Clinics in Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-[#CBD5E1] shadow-xl">
            <AppointmentBookingEngine initialType="online" />
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (12 ACCORDION ITEMS) */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              PATIENT QUESTIONS &amp; CLINICAL ANSWERS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Common enquiries regarding Alopecia Treatment, evidence disclosures, and hair loss consultations in Manjeri and Malappuram.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1E2559] hover:text-[#303A88] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] shrink-0 transform transition-transform duration-200 ${
                      activeFaq === fIdx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === fIdx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] bg-[#FAFCFF]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Regional Guides Cross-Linking & Footer Notes */}
      <RegionalRelatedGuides currentGuideKey="alopecia-treatment-manjeri" />
    </div>
  );
};
