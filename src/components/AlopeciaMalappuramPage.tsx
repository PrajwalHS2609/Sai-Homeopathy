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

export const AlopeciaMalappuramPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Alopecia & Hair Loss Care (Malappuram patient guide).'
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
    navigateToBookingWithReason('Alopecia Assessment - Malappuram', 'online');
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
      desc: 'Alopecia is a medical term for hair loss that may occur in patches or across larger areas of the scalp and body.',
    },
    {
      title: 'Multifactorial Causes',
      desc: 'Hair loss can result from genetics, autoimmune conditions, hormonal changes, nutritional deficiencies, medications, infections, or physical and emotional stress.',
    },
    {
      title: 'Assessment Is the First Step',
      desc: 'Alopecia Treatment in Malappuram should begin with an individual assessment to identify the underlying cause before choosing a care strategy.',
    },
    {
      title: 'Scientific Evidence Transparency',
      desc: 'Homoeopathy is an alternative treatment approach, but reliable scientific evidence does not establish its effectiveness for treating alopecia or stimulating hair regrowth.',
    },
    {
      title: 'Evidence-Based Options Available',
      desc: 'Evidence-based options may include topical or prescription medicines, treatment of underlying medical conditions, and specialist dermatological care.',
    },
    {
      title: 'When to Seek Urgent Evaluation',
      desc: 'Persistent hair loss, sudden bald patches, scalp inflammation, burning pain, or rapidly progressing symptoms warrant prompt medical evaluation.',
    },
    {
      title: 'No Ethical Guarantees',
      desc: 'No ethical healthcare provider should guarantee complete hair regrowth without considering the formal diagnosis, follicle status, and individual health history.',
    },
    {
      title: 'Follicular Biological Cycles',
      desc: 'Hair follicles follow distinct growth (anagen), regression (catagen), and resting (telogen) phases; noticeable stabilization requires at least 3 to 6 months.',
    },
    {
      title: 'Traction Alopecia Prevention',
      desc: 'Mechanical tension from tight hairstyles or headdresses can cause permanent scarring if unaddressed; early relief of tension is 100% preventive.',
    },
    {
      title: 'Comprehensive Diagnostic Workup',
      desc: 'Targeted blood tests (serum ferritin, hemoglobin, TSH, vitamin D) are far more effective than taking unprescribed random mega-dose supplements.',
    },
  ];

  const commonSigns = [
    'Noticeable bald patches on the scalp, beard, or eyebrows appearing abruptly',
    'Excessive daily hair shedding found on pillows, shower drains, and clothing',
    'Gradual thinning across the crown or a visibly widening hair parting line',
    'Receding frontal hairline around the temples in men and diffuse top thinning in women',
    'Scalp burning, tenderness, persistent redness, pustules, or itching',
    'Loss of eyelashes, eyebrows, or other body hair',
    'Fragile, snapping hair shafts or broken "exclamation mark" hairs',
    'Smooth, shiny areas of scalp skin where follicle openings are no longer visible',
  ];

  const alopeciaSubtypes = [
    {
      name: 'Alopecia Areata',
      badge: 'Autoimmune & Patchy',
      desc: 'An autoimmune condition in which the immune system attacks hair follicles during their anagen growth phase. It commonly causes smooth, round patches of hair loss on the scalp, beard, or eyebrows. The condition can progress unpredictably—some experience spontaneous regrowth, while others develop extensive loss.',
      care: 'Dermatological management includes intralesional corticosteroid injections, potent topical corticosteroids, topical immunotherapy, and systemic JAK inhibitors for severe cases.',
    },
    {
      name: 'Androgenetic Alopecia',
      badge: 'Pattern Hair Loss',
      desc: 'Commonly called pattern hair loss, this form is associated with genetic predisposition and androgen hormones (DHT). Men typically notice a receding hairline or thinning at the crown, while women experience gradual diffuse thinning across the top with a widening part.',
      care: 'Evidence-supported treatments include topical minoxidil (2% or 5%), oral 5-alpha reductase inhibitors (finasteride for eligible male patients), low-level light therapy, and surgical transplantation.',
    },
    {
      name: 'Telogen Effluvium',
      badge: 'Reactive Shedding',
      desc: 'Increased diffuse shedding that occurs when a significant systemic trigger—such as severe illness, surgery, childbirth, rapid weight loss, high fever, iron deficiency, or major psychological stress—pushes large numbers of growing hairs prematurely into the resting phase.',
      care: 'Usually temporary and self-limiting once the underlying trigger is resolved. Management focuses on correcting ferritin, thyroid, or nutritional deficiencies.',
    },
    {
      name: 'Traction Alopecia',
      badge: 'Mechanical Pulling',
      desc: 'Develops when repeated pulling places excessive, prolonged tension on hair follicles. Tight hairstyles, extensions, tight buns, and tightly fastened traditional headdresses contribute to this condition.',
      care: 'Relieving mechanical tension early allows complete follicular recovery. If prolonged pulling continues for years, it can lead to permanent follicular scarring and irreversible loss.',
    },
    {
      name: 'Scarring (Cicatricial) Alopecia',
      badge: 'Urgent Medical Attention',
      desc: 'Involves inflammatory disorders (such as lichen planopilaris or frontal fibrosing alopecia) that permanently destroy hair follicle stem cells and replace them with scar tissue.',
      care: 'Requires urgent specialist dermatologist referral and scalp biopsy. Treatment focuses on aggressive anti-inflammatory therapy to halt irreversible scarring, as destroyed follicles cannot regrow.',
    },
  ];

  const causesAndContributors = [
    {
      title: 'Genetic Factors',
      desc: 'Family history strongly influences pattern hair loss, dictating how scalp hair follicles react to normal levels of circulating androgens over time.',
      action: 'Early clinical evaluation before significant follicle miniaturization occurs.',
    },
    {
      title: 'Autoimmune Conditions',
      desc: 'Alopecia areata occurs when aberrant T-cell immune activity targets follicular auto-antigens, causing sudden patchy loss.',
      action: 'Immunological assessment and specialist dermatology evaluation.',
    },
    {
      title: 'Hormonal Changes',
      desc: 'Thyroid imbalances (hypothyroidism or hyperthyroidism), polycystic ovary syndrome (PCOS), and postpartum shifts can trigger significant shedding.',
      action: 'Complete endocrine panel including TSH, free T4, and metabolic screening.',
    },
    {
      title: 'Nutritional Deficiencies',
      desc: 'Depleted iron stores (low serum ferritin), protein deficiency, and insufficient zinc or B-vitamins deprive active follicular matrices of building blocks.',
      action: 'Targeted laboratory blood investigations rather than random multivitamins.',
    },
    {
      title: 'Physical or Emotional Stress',
      desc: 'Major illness, high fever, surgical procedures, or acute psychological trauma can disrupt the hair cycle and precipitate telogen effluvium.',
      action: 'Restorative sleep hygiene, stress reduction, and overall recovery care.',
    },
    {
      title: 'Scalp Disorders & Infections',
      desc: 'Fungal scalp infections (tinea capitis), severe seborrhoeic dermatitis, and scalp psoriasis create localized inflammation that harms follicle integrity.',
      action: 'Targeted clinical scalp therapies and antifungal eradication.',
    },
    {
      title: 'Medications & Treatments',
      desc: 'Certain blood thinners, beta-blockers, retinoids, antidepressants, or hormonal medications can produce hair loss as an adverse effect.',
      action: 'Review with your prescribing clinician—never stop prescription drugs on your own.',
    },
    {
      title: 'Hair-Care Practices',
      desc: 'Repeated mechanical traction, tight braiding, harsh chemical relaxers, and excessive heat styling weaken shafts and damage roots.',
      action: 'Gentle hair handling, tension elimination, and protective styling.',
    },
  ];

  const consultationTopics = [
    {
      title: 'Chronology & Progression',
      desc: 'Exactly when the hair loss began, whether shedding is accelerating, and whether it occurs in patches or diffusely across the scalp.',
    },
    {
      title: 'Associated Scalp Symptoms',
      desc: 'Any presence of itching, burning, redness, pain, flaking, tenderness, or loss of visible follicular pores.',
    },
    {
      title: 'Recent Systemic Triggers',
      desc: 'Recent major illnesses, high fevers, childbirth, surgeries, sudden weight loss, or severe psychological stressors within the past 3 to 6 months.',
    },
    {
      title: 'Medical History & Medications',
      desc: 'All current prescription medications, health conditions, dietary habits, and any family history of hair loss.',
    },
    {
      title: 'Diagnostic Referral Need',
      desc: 'Whether blood tests (ferritin, thyroid panel) or an in-person dermatology referral for scalp trichoscopy/biopsy is medically indicated.',
    },
    {
      title: 'Evidence-Based Options',
      desc: 'Which treatments have rigorous peer-reviewed scientific evidence for your particular diagnosis and what realistic outcomes look like.',
    },
  ];

  const clinicSelectionCriteria = [
    {
      q: 'Are the practitioner\'s qualifications clear?',
      desc: 'Check formal medical qualifications, accredited degrees (such as BHMS), and official board registration. Ensure you understand the practitioner\'s scope of practice.',
    },
    {
      q: 'Will the clinic encourage an appropriate diagnosis?',
      desc: 'Hair loss may require scalp examination, dermoscopy/trichoscopy, or blood tests. A responsible clinic will never discourage necessary medical or dermatological diagnostics.',
    },
    {
      q: 'Are treatment claims realistic?',
      desc: 'Be cautious of claims promising guaranteed hair regrowth, 100% success rates, or a universal cure for every type of alopecia.',
    },
    {
      q: 'Are costs and follow-up arrangements transparent?',
      desc: 'Enquire about consultation fees, follow-up timelines, recommended therapies, and any additional expenses before committing to care.',
    },
  ];

  const evidenceBasedOptions = [
    {
      step: '01',
      title: 'Topical Treatments (Minoxidil)',
      subtitle: 'Vasodilatory Follicle Stimulation',
      desc: 'Topical minoxidil is clinically established for certain forms of pattern hair loss in both men and women. It helps prolong the anagen growth phase and enhance microcirculation around hair roots. Continuous application is needed to maintain clinical benefits.',
    },
    {
      step: '02',
      title: 'Prescription Medicines',
      subtitle: 'Corticosteroids & Anti-Androgens',
      desc: 'Selected cases of alopecia areata may respond to dermatologist-administered intralesional corticosteroid injections or topical steroids. For androgenetic loss in eligible men, oral 5-alpha reductase inhibitors (finasteride) help lower follicle-damaging DHT.',
    },
    {
      step: '03',
      title: 'Treating Nutritional & Hormonal Problems',
      subtitle: 'Targeted Biochemical Correction',
      desc: 'When blood tests confirm depleted iron stores (ferritin deficiency) or thyroid dysfunction, medically guided repletion or endocrine stabilization directly addresses the systemic driver of hair shedding.',
    },
    {
      step: '04',
      title: 'Scalp and Hair-Care Changes',
      subtitle: 'Tension Relief & Gentle Cleansing',
      desc: 'Eliminating tight hairstyles, reducing chemical processing, avoiding rough towel drying, using mild sulfate-free shampoos, and ensuring adequate dietary protein support hair shaft resilience and prevent traction damage.',
    },
    {
      step: '05',
      title: 'Specialist Dermatological Treatments',
      subtitle: 'Procedures & Hair Transplantation',
      desc: 'For advanced or complex conditions, dermatologists may discuss oral immunomodulators, platelet-rich therapies, or surgical hair restoration (FUE transplantation) for suitable candidates with stable donor hair.',
    },
  ];

  const faqs = [
    {
      q: 'What causes alopecia?',
      a: 'Alopecia can result from autoimmune conditions, genetics, hormonal changes, nutritional deficiencies, medications, scalp disorders, or physical and emotional stress. The cause varies from person to person, so a proper diagnostic assessment is essential before starting any treatment.',
    },
    {
      q: 'Is homoeopathy effective for alopecia?',
      a: 'Reliable scientific evidence has not established that homoeopathy effectively treats alopecia or reliably promotes hair regrowth. While some individuals choose homoeopathic consultations for general supportive care, people experiencing persistent hair loss should consider formal medical assessment and discuss evidence-based treatment options with a qualified healthcare professional.',
    },
    {
      q: 'How can I find an Alopecia Clinic in Malappuram?',
      a: 'When searching for an Alopecia Clinic in Malappuram, look for clear professional qualifications, appropriate diagnostic practices, transparent costs, and realistic treatment information without unproven regrowth guarantees. A dermatologist is the most appropriate specialist for evaluating complex or scarring hair and scalp disorders.',
    },
    {
      q: 'Can hair grow back after alopecia?',
      a: 'Hair regrowth depends entirely on the type of alopecia and whether the hair follicles remain viable. Reversible conditions such as telogen effluvium or mild alopecia areata often show regrowth once triggers resolve. However, scarring (cicatricial) alopecia causes permanent destruction of hair follicles, which is why early medical intervention is critical.',
    },
    {
      q: 'Should I take supplements for hair loss?',
      a: 'Supplements may be helpful when a specific nutritional deficiency (such as low iron/ferritin, zinc, or vitamin D) has been confirmed through blood tests. However, they are not a universal cure for hair loss, and excessive intake of certain vitamins (like vitamin A or selenium) can actually trigger or worsen hair loss. Seek professional medical guidance before taking high doses.',
    },
    {
      q: 'When should I consult a doctor about hair loss?',
      a: 'Seek medical advice for sudden or persistent hair loss, rapidly developing bald patches, scalp pain, burning, redness, or inflammation, or hair loss involving the eyebrows and eyelashes. Early assessment helps identify treatable conditions and prevents irreversible follicle damage.',
    },
    {
      q: 'How long does it take for hair to grow back?',
      a: 'Human scalp hair grows slowly, averaging approximately 1 to 1.5 centimetres per month. For conditions that can improve, noticeable reduction in daily shedding usually requires 2 to 3 months of consistent care, while visible improvements in hair density and coverage typically take 6 to 12 months.',
    },
    {
      q: 'What is the difference between ordinary hair fall and alopecia?',
      a: 'Losing 50 to 100 hairs per day is part of the normal physiological shedding cycle. Hair fall refers to this daily shedding. Alopecia, by contrast, is a formal medical diagnosis indicating abnormal hair loss that leads to noticeable thinning, a receding hairline, or discrete bald patches.',
    },
    {
      q: 'Can stress cause alopecia?',
      a: 'Yes. Severe physical illness or acute emotional distress can shock large numbers of growing hairs into the resting phase, leading to diffuse shedding (telogen effluvium) a few months later. Stress can also act as an aggravating trigger in autoimmune alopecia areata.',
    },
    {
      q: 'Is traction alopecia reversible?',
      a: 'Traction alopecia is completely reversible if tension is removed early, allowing strained follicles to rest and recover. However, if tight hairstyles, braids, or extensions continue to pull on follicles for years, chronic inflammation can cause permanent scarring and irreversible hair loss.',
    },
    {
      q: 'Can women develop androgenetic alopecia (pattern hair loss)?',
      a: 'Yes. Female pattern hair loss is common and typically presents as diffuse thinning over the top and crown of the scalp with characteristic widening of the central part line, while the frontal hairline is usually preserved.',
    },
    {
      q: 'What should I bring to an alopecia consultation in Malappuram?',
      a: 'Bring a timeline of when hair loss started, any recent blood test reports (CBC, serum ferritin, thyroid profile), a complete list of current prescription medications and supplements, and details of any major recent illnesses, surgeries, or family history of hair loss.',
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
                Alopecia &amp; Hair Loss Consultation – Malappuram Patient Guide
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
              Alopecia Homoeopathic Treatment in Malappuram
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
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Alopecia and Hair Loss in Malappuram"
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
                <span>Regional Clinical Trichology Guide • Malappuram Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Alopecia Homoeopathic Treatment in Malappuram
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Hair loss can be a stressful experience that affects confidence, appearance, and emotional well-being. While losing some hair every day is normal, noticeable bald patches, excessive hair shedding, or gradual thinning may indicate an underlying condition that needs medical attention. Understanding the cause of hair loss is an important first step towards choosing an appropriate treatment approach.
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
                Medical Evidence Disclosure Regarding Alopecia &amp; Homoeopathy
              </h4>
              <p className="text-xs text-[#1E40AF] mt-0.5 leading-relaxed">
                Homoeopathy is an alternative system of medicine that some people consider when seeking support for hair-related concerns. However, current scientific evidence does not establish that homoeopathic remedies effectively treat alopecia or reliably stimulate hair regrowth. A qualified healthcare professional can help identify the cause of hair loss and explain treatments supported by medical evidence.
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
              Key Takeaways: Alopecia Treatment in Malappuram
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Essential trichological facts every patient in Malappuram should understand before investing in hair fall remedies, clinic packages, or unproven regrowth products.
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

      {/* SECTION: UNDERSTANDING ALOPECIA AND HAIR LOSS */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
                PATHOLOGY &amp; CLINICAL DEFINITION
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559]">
                Understanding Alopecia and Hair Loss
              </h2>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Alopecia describes hair loss that can develop suddenly or gradually. It may affect a small area of the scalp or involve more extensive hair loss. Some forms are temporary, while others can cause permanent hair loss if the hair follicles become damaged.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Hair naturally passes through growth (anagen), transition (catagen), and resting (telogen) phases. When this cycle is disrupted, hair may shed excessively, grow more slowly, or stop growing in particular areas.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                People searching for <strong>Hair Loss Treatment in Malappuram</strong> may notice different symptoms, including thinning around the crown, a widening hair part, a receding hairline, or round bald patches. These symptoms do not always indicate the same condition, which is why a proper diagnosis matters.
              </p>

              <div className="p-5 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <AlertCircle className="w-4 h-4 text-[#E11D48]" />
                  <span>Diagnostic Categorization Precedes Effective Care</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Because hair loss represents multiple different biological disorders, no single universal shampoo, oil, or tablet can treat all forms of alopecia. Effective care in Malappuram begins with identifying whether shedding is genetic, autoimmune, reactive, or mechanical.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-sm text-[#1E2559] uppercase tracking-wider mb-3">
                  Common Signs &amp; Symptoms of Alopecia
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
                      Alopecia Consultation in Malappuram
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Structured Clinical Evaluation
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  An Alopecia Consultation in Malappuram provides an opportunity to evaluate your symptom timeline, examine the scalp under magnification, and identify whether a temporary shedding disorder or progressive condition is present.
                </p>

                <div className="space-y-3 border-t border-[#E2E8F0] pt-4 text-xs text-[#334155]">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Symptom Chronology:</strong> When hair loss began and whether it is rapidly accelerating.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Distribution Pattern:</strong> Whether hair loss occurs in discrete round patches or diffusely across the scalp.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Scalp Health Examination:</strong> Checking for itching, redness, pain, scaling, or follicular scarring signs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Diagnostic Workup:</strong> Recommending serum ferritin, hemoglobin, TSH, or dermatologist referral when needed.</span>
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
                  Hair loss accompanied by scalp burning, severe pain, persistent redness, scaling, or smooth areas where the skin appears scarred may indicate <strong>scarring (cicatricial) alopecia</strong>. Because follicular damage can be permanent, early assessment by a dermatologist is particularly important.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON TYPES OF ALOPECIA (5 SUBTYPES) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL SUBTYPES &amp; CHARACTERISTICS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Common Types of Alopecia
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Understanding the different types of alopecia, their distinct biological drivers, and how each presents is essential for selecting appropriate medical care.
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
                  Traction alopecia develops when repeated pulling places excessive tension on hair follicles (tight braids, ponytails, extensions, or tightly secured headdresses). Reducing tension early may prevent further damage; long-standing traction can sometimes lead to permanent hair loss.
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

      {/* CAUSES OF HAIR LOSS */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ETIOLOGY &amp; CONTRIBUTING FACTORS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Causes of Hair Loss
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Choosing an appropriate treatment begins with understanding why the hair is falling out. Hair loss can have several contributing factors, and more than one may be present simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {causesAndContributors.map((cause, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                    0{cIdx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-1.5">
                    {cause.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">
                    {cause.desc}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] mb-0.5">
                    Recommended Action
                  </p>
                  <p className="text-[11px] text-[#334155] leading-relaxed">
                    {cause.action}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
            <strong>Patient Guidance for Malappuram:</strong> If you are looking for Hair Fall Treatment in Malappuram, avoid selecting a treatment based only on advertisements or testimonials. The same symptom can have different causes, and treatment that is appropriate for one condition may not help another.
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
              Homoeopathic Treatment for Alopecia in Malappuram
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Clear, transparent communication regarding the scientific standing and clinical limitations of homoeopathy in hair loss care.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#CBD5E1] shadow-md space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EEF2FB] text-[#303A88] rounded-2xl shrink-0 mt-1">
                <ShieldAlert className="w-7 h-7 text-[#303A88]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-[#1E2559]">
                  What Does Reliable Scientific Evidence Say About Homoeopathy for Alopecia?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  People exploring <em>Homoeopathic Treatment for Alopecia in Malappuram</em> may be interested in an individualized consultation and a discussion of their hair loss concerns. Homoeopathy traditionally uses an individualized approach, with practitioners considering a person's reported symptoms and general health history.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  However, it is clinically essential to understand the scientific reality: <strong>There is currently no high-quality scientific evidence establishing that homoeopathic remedies can reverse autoimmune hair loss, treat genetic pattern baldness, repair scarred follicles, or reliably stimulate new hair growth</strong>.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  For this reason, homoeopathy should not replace appropriate medical assessment or treatments supported by scientific evidence. Delaying effective treatment can be particularly harmful in conditions where early intervention may prevent permanent follicular damage.
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
                  If you are considering a homoeopathic consultation, discuss the limitations of the treatment and ask how the practitioner will approach your concerns responsibly. An appropriate consultation should not promise guaranteed hair regrowth or advise stopping prescribed medication without discussion with your treating clinician.
                </p>
              </div>

              <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#E11D48]" />
                  <span>Do Not Discontinue Prescribed Medical Care</span>
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Patients must never discontinue prescribed medical treatments (such as minoxidil or dermatological therapies) without consulting their prescribing physician. If homoeopathy is pursued alongside conventional care, all healthcare professionals should be fully informed about all remedies and supplements being used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DISCUSS DURING A CONSULTATION */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              PREPARING FOR YOUR APPOINTMENT
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              What to Discuss During an Alopecia Consultation
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Essential topics to cover with your practitioner to ensure a safe, thorough, and responsible evaluation of your hair loss concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultationTopics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINDING AN ALOPECIA CLINIC & CHOOSING A DOCTOR IN MALAPPURAM */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
                CONSUMER SAFETY &amp; PROFESSIONAL STANDARDS
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Finding an Alopecia Homoeopathy Clinic in Malappuram
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                When searching for an Alopecia Homoeopathy Clinic in Malappuram, consider the quality of the consultation, transparency about treatment limitations, and willingness to recommend appropriate medical evaluation.
              </p>

              <div className="space-y-3 text-xs text-[#334155]">
                {clinicSelectionCriteria.map((crit, cIdx) => (
                  <div key={cIdx} className="p-3.5 bg-white rounded-2xl border border-[#E2E8F0]">
                    <strong className="text-[#1E2559] block mb-1">{crit.q}</strong>
                    <span className="text-[#64748B] leading-relaxed">{crit.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
                CLINICAL PRACTICE
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Choosing a Homoeopathic Doctor for Alopecia in Malappuram
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                If you are considering a Homoeopathic Doctor for Alopecia in Malappuram, make an informed decision based on professional qualifications, communication, and appropriate referral practices rather than promotional claims alone.
              </p>

              <div className="space-y-3 text-xs text-[#334155]">
                <div className="p-3.5 bg-[#EEF2FB] rounded-2xl border border-[#D8E1F5]">
                  <strong className="text-[#1E2559] block mb-1">Explain Symptoms Accurately:</strong>
                  <span className="text-[#475569] leading-relaxed">
                    Detail when hair shedding began, whether it is worsening, and whether you have experienced similar episodes before.
                  </span>
                </div>
                <div className="p-3.5 bg-[#EEF2FB] rounded-2xl border border-[#D8E1F5]">
                  <strong className="text-[#1E2559] block mb-1">Bring Complete Health Information:</strong>
                  <span className="text-[#475569] leading-relaxed">
                    Bring a list of current medications, supplements, previous diagnoses, and relevant blood test results (ferritin, thyroid panel).
                  </span>
                </div>
                <div className="p-3.5 bg-[#EEF2FB] rounded-2xl border border-[#D8E1F5]">
                  <strong className="text-[#1E2559] block mb-1">Ask About Limitations:</strong>
                  <span className="text-[#475569] leading-relaxed">
                    Ask the practitioner to explain the proposed approach, its limitations, and whether evidence-based treatment options should be considered.
                  </span>
                </div>
                <div className="p-3.5 bg-[#EEF2FB] rounded-2xl border border-[#D8E1F5]">
                  <strong className="text-[#1E2559] block mb-1">Specialist Dermatologist Role:</strong>
                  <span className="text-[#475569] leading-relaxed">
                    An Alopecia Doctor in Malappuram should help you understand the likely cause of your symptoms and the options available. For diagnosing and treating hair and scalp disorders, a dermatologist is often the most appropriate specialist.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE-BASED OPTIONS FOR ALOPECIA TREATMENT IN MALAPPURAM */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ESTABLISHED THERAPEUTIC PATHWAYS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Evidence-Based Options for Alopecia Treatment in Malappuram
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              The right treatment depends on the type of alopecia, the extent of hair loss, the person's medical history, and whether the hair follicles remain capable of producing hair.
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
              No ethical healthcare provider should guarantee complete hair regrowth without considering the diagnosis and individual circumstances. Human hair biology is complex and governed by genetic, endocrine, and immune factors. Unregulated hair oils and miracle cures often delay essential clinical diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* HAIR LOSS HOMOEOPATHIC TREATMENT: WHAT TO EXPECT */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
                CLINICAL TIMELINES &amp; REALISTIC OUTLOOK
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Hair Loss Homoeopathic Treatment in Malappuram: What to Expect
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                People searching for Hair Loss Homoeopathic Treatment in Malappuram may want to know how long treatment takes and whether they can expect visible improvement.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Hair growth is gradual, and the outlook varies significantly by diagnosis. Temporary shedding may improve after a trigger is addressed, while genetic hair loss often requires ongoing management. Autoimmune and scarring forms of alopecia have different patterns and treatment needs.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                There is no scientifically established timeline for hair regrowth from homoeopathic treatment because its effectiveness for alopecia has not been demonstrated. If you choose to consult a homoeopathic practitioner, ask for clear information about the proposed approach and do not delay appropriate medical care while waiting for results.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
                CLINICAL VIGILANCE
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Alopecia Consultation in Malappuram: When to Seek Help
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                An Alopecia Consultation in Malappuram may be appropriate when you notice persistent or unexplained hair loss. Early assessment can help identify treatable causes and conditions that may require prompt care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#334155]">
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Sudden round bald patches</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Rapidly increasing hair shedding</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Thinning continuing for months</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Loss of eyebrows or eyelashes</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Scalp burning, redness, or pain</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Smooth areas with scarred skin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAIR THINNING TREATMENT IN MALAPPURAM: ADDRESSING GRADUAL CHANGES */}
      <section className="py-12 lg:py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              DIFFUSE LOSS VS. PATTERN THINNING
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Hair Thinning Treatment in Malappuram: Addressing Gradual Changes
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed">
              Gradual thinning can be difficult to recognize at first. You may notice more hair on your pillow, increased shedding while washing, a widening part, or reduced volume when styling your hair. Hair Thinning Treatment in Malappuram should be guided by the pattern and duration of the thinning, along with your medical and family history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-[#475569]">
            <div className="p-5 bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] space-y-2">
              <h4 className="font-bold text-sm text-[#1E2559]">Pattern Loss Identification</h4>
              <p className="leading-relaxed">
                Gradual thinning in a typical pattern may suggest androgenetic alopecia, requiring early anti-androgen or vasodilatory management before follicular miniaturization becomes irreversible.
              </p>
            </div>
            <div className="p-5 bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] space-y-2">
              <h4 className="font-bold text-sm text-[#1E2559]">Diffuse Post-Trigger Shedding</h4>
              <p className="leading-relaxed">
                Diffuse shedding after a major medical illness or childbirth often points towards telogen effluvium, requiring trigger resolution and ferritin optimization rather than aggressive intervention.
              </p>
            </div>
            <div className="p-5 bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] space-y-2">
              <h4 className="font-bold text-sm text-[#1E2559]">Avoiding Superficial Fixes</h4>
              <p className="leading-relaxed">
                Avoid relying on shampoos, oils, supplements, or home remedies as substitutes for diagnosis. Cosmetic hair products can improve hair shaft appearance, but they do not treat follicular causes of hair loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING SECTION */}
      <section id="booking-section" className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL APPOINTMENT
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Schedule Your Hair Loss Consultation in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Consult Dr. Anjali Chandrasekhar via secure Online Video Consultation or visit our Outpatient Clinics in Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#CBD5E1] shadow-xl">
            <AppointmentBookingEngine initialType="online" />
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (12 ACCORDION ITEMS) */}
      <section className="py-12 lg:py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              PATIENT QUESTIONS &amp; CLINICAL ANSWERS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Frequently Asked Questions About Alopecia in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Common enquiries regarding alopecia causes, homoeopathy evidence disclosures, and hair loss consultations in Malappuram.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm"
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAKE AN INFORMED DECISION ABOUT ALOPECIA CARE IN MALAPPURAM */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
            CLINICAL SUMMARY &amp; CONCLUSION
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Make an Informed Decision About Alopecia Care in Malappuram
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl mx-auto">
            Hair loss can have several causes, and the most appropriate management depends on an accurate diagnosis. If you are exploring Alopecia Homoeopathic Treatment in Malappuram, take time to understand the limitations of homoeopathy and the medical options available for your particular condition.
          </p>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl mx-auto">
            Choose a healthcare provider who listens to your concerns, explains the diagnostic process, and communicates honestly about expected outcomes. Avoid treatments that promise guaranteed regrowth or advise you to delay necessary medical care. Whether you are concerned about patchy hair loss, gradual thinning, or excessive shedding, a qualified medical professional can help identify possible causes and discuss suitable next steps.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleBookConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#303A88] hover:bg-[#232b66] text-white text-xs font-bold transition-all shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </button>
            <a
              href={`tel:${phonePrimary}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#CBD5E1] text-[#1E2559] text-xs font-bold hover:bg-[#EEF2FB] transition-all"
            >
              <Phone className="w-4 h-4 text-[#0D9488]" />
              <span>Call: {phonePrimary}</span>
            </a>
          </div>

          <p className="text-[11px] text-[#94A3B8] max-w-2xl mx-auto pt-4 border-t border-[#E2E8F0]">
            <strong>Medical Disclaimer:</strong> This clinical guide provides educational information regarding hair loss and does not substitute for individualized medical or dermatological examination, diagnosis, or treatment. Consult a licensed healthcare professional for personalized care.
          </p>
        </div>
      </section>

      {/* Cross-Linking Footer Guides */}
      <RegionalRelatedGuides currentGuideKey="alopecia-treatment-malappuram" />
    </div>
  );
};
