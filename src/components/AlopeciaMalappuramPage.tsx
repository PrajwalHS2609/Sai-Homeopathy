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
  Calendar,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  Sparkles,
  BookOpen,
  FileText,
  AlertCircle,
  Scissors,
  Sparkle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AlopeciaMalappuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
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
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Alopecia & Hair Loss Care – Malappuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin, Hair & Scalp Care"
        pageTitle="Alopecia Treatment in Malappuram"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-3.5 h-3.5 text-[#2DD4BF]" />}
        badgeText="Alopecia Subtypes & Scalp Assessment • Malappuram Guide"
        title="Alopecia Treatment in Malappuram"
        subtitle="Individualized clinical guidance for patients in Malappuram experiencing patchy hair loss, male or female pattern thinning, telogen effluvium, and traction alopecia."
        metrics={[
          { label: 'Condition Focus', value: 'Alopecia Subtypes' },
          { label: 'Diagnostic Standard', value: 'Trichoscopy & Labs' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Trichology & Constitutional Hair Care"
        doctorBio="10+ years of dedicated clinical experience assessing alopecia areata, androgenetic thinning, telogen effluvium triggers, and evidence-grounded constitutional care in Malappuram district."
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
                Important Key Takeaways for Patients in Malappuram
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

      {/* Section 1: Major Subtypes of Alopecia */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL SUBTYPES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding the Major Subtypes of Alopecia
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              "Alopecia" is an umbrella medical term. The biological mechanism, prognosis, and treatment options differ radically between distinct subtypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {alopeciaSubtypes.map((sub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#0D9488]/30 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1E2559] text-lg">
                    {sub.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#0F766E] bg-[#F0FDFA] px-2.5 py-0.5 rounded-full border border-[#CCFBF1]">
                    {sub.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {sub.desc}
                </p>
                <div className="pt-2 border-t border-[#F1F5F9] text-xs font-medium text-[#303A88]">
                  Clinical Care: {sub.care}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Homeopathy for Alopecia: Facts & Scientific Transparency */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Alopecia Treatment in Malappuram: Facts and Transparency
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Individuals looking for <strong>Alopecia Treatment in Malappuram</strong> often explore various healthcare approaches, including conventional medical care and complementary homoeopathic consultations.
            </p>
            <p>
              Homoeopathic practitioners focus on individual lifestyle factors, nutrition, and personal health history to offer supportive care alongside general wellness guidance.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Important Scientific Evidence Disclosure
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Reliable scientific clinical evidence has not established that homoeopathy effectively treats alopecia or reliably stimulates hair regrowth. It should not replace evidence-based medical treatments, dermatologist evaluations, or proven interventions for active hair loss disorders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Evidence-Based Management */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              THERAPEUTIC STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Options for Alopecia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {evidenceBasedOptions.map((app, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#0D9488]/40 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-0.5 rounded-full border border-[#D8E1F5]">
                    Step {app.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B]">
                    {app.subtitle}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-base">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: When to Seek Urgent Evaluation */}
      <section className="py-14 sm:py-16 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#DC2626]" />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
                SAFETY PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#991B1B]">
                When to Seek Urgent Medical Evaluation
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#FCA5A5] shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-[#7F1D1D] font-medium leading-relaxed">
              Certain presentations indicate active follicular scarring, autoimmune expansion, or severe infection that requires urgent medical or dermatological care:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#991B1B]">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Rapidly multiplying bald patches appearing over days or weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Scalp burning, intense tenderness, or smooth shiny areas with no visible pores (cicatricial risk)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Pustules, honey-colored crusts, oozing, or follicular swelling (folliculitis decalvans)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Concomitant loss of eyebrows, eyelashes, or entire body hair</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Hair loss in children or adolescents accompanied by scalp scaling (tinea capitis)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Shedding accompanied by joint pains, butterfly facial rash, or fever (lupus risk)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT EDUCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Alopecia in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Objective clinical answers on alopecia subtypes, regrowth timelines, and medical consultations in Malappuram.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#1E2559] hover:bg-[#F8FAFD] transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-[#0D9488]' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Scheduling Booking Engine */}
      <section id="booking-section" className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CONFIDENTIAL APPOINTMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book Your Alopecia Assessment
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              In-clinic evaluations at Kuttippuram and Puthanathani, or Online Video Consultations from home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="alopecia-treatment-malappuram" />
    </div>
  );
};
