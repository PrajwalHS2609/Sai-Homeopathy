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

export const HairMalappuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
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
    navigateToBookingWithReason('Hair & Scalp Consultation (Malappuram)', 'online');
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
      title: 'Beware Unverified Miracle Oils & Tonics',
      desc: 'Be skeptical of aggressive commercial advertisements promising overnight regrowth or permanent cures without clinical trials.',
    },
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
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Hair & Scalp Treatment – Malappuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin, Hair & Scalp Care"
        pageTitle="Hair and Scalp Homoeopathic Treatment in Malappuram"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Scissors className="w-3.5 h-3.5 text-[#2DD4BF]" />}
        badgeText="Trichology Care Guide • Malappuram Patient Resource"
        title="Hair and Scalp Homoeopathic Treatment in Malappuram"
        subtitle="Individualized clinical guidance for patients in Malappuram experiencing persistent hair fall, thinning hair, receding hairlines, dandruff, and scalp health concerns."
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

      {/* Section 1: Common Hair & Scalp Problems & Root Causes */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Common Causes and Triggers of Hair Fall
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Hair growth follows complex follicular biology. Pinpointing whether shedding stems from genetics, metabolic stress, or nutritional gaps dictates management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {causesAndContributors.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#0D9488]/30 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F766E] uppercase tracking-wider">
                    Topic {c.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] bg-[#F0FDFA] px-2.5 py-0.5 rounded-full border border-[#CCFBF1]">
                    {c.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {c.desc}
                </p>
                <div className="pt-2 border-t border-[#F1F5F9] text-xs font-medium text-[#303A88]">
                  Clinical Care: {c.care}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Homeopathy Hair Treatment: Facts & Scientific Transparency */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Hair and Scalp Homoeopathic Treatment in Malappuram: Facts and Transparency
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Homoeopathic Hair Treatment in Malappuram</strong> often look for holistic options to address hair fall or scalp irritation.
            </p>
            <p>
              Homeopathic consultations typically include an in-depth conversation about lifestyle, nutrition, stress, sleep, and constitutional history alongside hair concerns.
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
                    Reliable scientific clinical evidence has not established that homeopathy effectively treats hair loss, alopecia, or scalp disorders. Homeopathy should not replace evidence-based medical evaluation, diagnostic blood panels (such as ferritin or thyroid levels), or approved conventional dermatological treatments.
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
              Evidence-Based Management of Hair and Scalp Problems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {medicalApproaches.map((app, idx) => (
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

      {/* Section 4: Hair Care & Supportive Habits */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              SUPPORTIVE SELF-CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Gentle Hair Care and Everyday Supportive Habits
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Proactive hair handling habits protect the fragile keratin cortex, prevent mechanical traction loss, and foster optimal scalp renewal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hairCareTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2"
              >
                <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                  <span>{tip.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: When to Consult Immediately */}
      <section className="py-14 sm:py-16 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#DC2626]" />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
                SAFETY PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#991B1B]">
                When to Seek Immediate Professional Evaluation
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#FCA5A5] shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-[#7F1D1D] font-medium leading-relaxed">
              Certain hair and scalp presentations require prompt medical investigation to prevent permanent follicular scarring or address underlying systemic disorders:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#991B1B]">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Sudden or rapid onset of massive hair shedding (&gt; 200–300 hairs daily)</span>
              </li>

              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Distinct, round, coin-sized smooth bald patches (alopecia areata)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Persistent scalp burning, severe pain, or spreading redness (cicatricial risk)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Scalp pustules, honey-colored crusts, oozing sores, or foul-smelling scaling</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Concomitant loss of eyelashes, eyebrows, or body hair</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>High fever, lethargy, or rapid unexplained weight fluctuations with shedding</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT EDUCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Hair &amp; Scalp in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Objective clinical answers on hair loss causes, trichological investigations, and consultation formats in Malappuram.
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
              Book Your Hair &amp; Scalp Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              In-clinic evaluations at Kuttippuram and Puthanathani, or Online Video Consultations from the comfort of home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="hair-treatment-malappuram" />
    </div>
  );
};
