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
  FileText,
  AlertCircle,
  Scissors,
  Shield,
  Stethoscope,
  MapPin,
  Pill,
  Sun,
  Layers,
  Sparkle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const AlopeciaPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for alopecia, hair loss, bald patches, and scalp evaluation (Ponnani patient guide).'
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
    navigateToBookingWithReason('Alopecia & Hair Loss Consultation - Ponnani', 'online');
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
      title: 'Diverse Hair Loss Spectrum',
      desc: 'Alopecia is an umbrella medical term for hair loss and includes several distinct conditions ranging from autoimmune to genetic and shedding disorders.',
    },
    {
      title: 'Multifactorial Etiologies',
      desc: 'Hair loss may result from genetics, autoimmune disorders, thyroid or hormonal shifts, nutritional deficiencies, systemic illnesses, medications, or stress.',
    },
    {
      title: 'Accurate Diagnosis First',
      desc: 'Identifying the underlying biological cause is essential before selecting any treatment, as therapies suitable for shedding fail for pattern loss or autoimmune patches.',
    },
    {
      title: 'Alopecia Areata Mechanism',
      desc: 'Alopecia areata causes sudden, smooth, round or oval bald patches and is driven by an autoimmune lymphocytic attack against hair follicles.',
    },
    {
      title: 'Condition-Specific Care',
      desc: 'Treatment options depend entirely on the specific type, duration, and severity of hair loss, requiring tailored evidence-grounded therapies.',
    },
    {
      title: 'Scientific Evidence Transparency',
      desc: 'Homoeopathy has not been established through reliable scientific clinical evidence as an effective treatment or cure for alopecia.',
    },
    {
      title: 'Early Clinical Assessment',
      desc: 'Early assessment by a qualified doctor or dermatologist can identify treatable causes and prevent irreversible follicle scarring.',
    },
    {
      title: 'Reject Unverified Panaceas',
      desc: 'Avoid unverified commercial hair-growth oils, tonics, and miracle treatments promising guaranteed, rapid, or permanent results.',
    },
  ];

  // 5 Common Types of Alopecia
  const alopeciaTypes = [
    {
      number: '01',
      title: 'Alopecia Areata',
      badge: 'Autoimmune & Patchy',
      desc: 'Alopecia areata is an autoimmune condition in which the immune system mistakenly attacks hair follicles. It commonly causes sudden, smooth, round or oval bald patches on the scalp.',
      clinicalDetails: 'In severe variants, hair loss can extend to the entire scalp (alopecia totalis) or entire body (alopecia universalis), affecting eyebrows, eyelashes, and beard hair. Early dermatological evaluation helps guide anti-inflammatory and immunomodulatory interventions.',
    },
    {
      number: '02',
      title: 'Androgenetic Alopecia',
      badge: 'Genetic & Pattern Loss',
      desc: 'Androgenetic alopecia is commonly known as male or female pattern hair loss. It is driven by genetic susceptibility and androgen hormonal sensitivity (dihydrotestosterone / DHT).',
      clinicalDetails: 'In men, it presents as bitemporal receding hairline and vertex thinning. In women, it presents as progressive diffuse thinning across the crown with preservation of the frontal hairline and widening of the central part.',
    },
    {
      number: '03',
      title: 'Telogen Effluvium',
      badge: 'Temporary Stress Shedding',
      desc: 'Telogen effluvium is a diffuse, non-scarring form of temporary hair shedding that occurs 2 to 4 months after severe physiological or psychological stress.',
      clinicalDetails: 'Common triggers include high fever, viral infections, major surgery, childbirth (telogen gravidarum), rapid weight loss, severe iron deficiency, or thyroid disorders. Correcting the underlying trigger usually allows full follicular recovery.',
    },
    {
      number: '04',
      title: 'Traction Alopecia',
      badge: 'Mechanical Tension',
      desc: 'Traction alopecia develops when continuous pulling, weight, or mechanical tension repeatedly traumatizes hair follicles along the hairline and temples.',
      clinicalDetails: 'Commonly caused by tightly tied ponytails, tight buns, heavy hair extensions, dreadlocks, or tightly pinned head coverings. Relieving tension early prevents permanent follicular atrophy and scarring.',
    },
    {
      number: '05',
      title: 'Scarring (Cicatricial) Alopecia',
      badge: 'Inflammatory & Irreversible',
      desc: 'Scarring alopecia refers to rare, severe inflammatory disorders (such as lichen planopilaris or frontal fibrosing alopecia) that permanently destroy hair follicles and replace them with fibrous scar tissue.',
      clinicalDetails: 'Affected scalp areas look smooth, shiny, and devoid of visible follicular pore openings. Immediate medical intervention is critical to arrest active inflammation and preserve remaining hair.',
    },
  ];

  // 8 Common Causes of Alopecia
  const causesList = [
    {
      title: 'Genetic Factors',
      desc: 'Inherited polygenic sensitivity of hair follicles to androgens influences the age of onset and progression of pattern hair loss.',
    },
    {
      title: 'Autoimmune Conditions',
      desc: 'Alopecia areata occurs when autoreactive CD8+ T-lymphocytes breach hair follicle immune privilege, inducing premature telogen phase.',
    },
    {
      title: 'Hormonal Changes',
      desc: 'Thyroid dysfunction (hypo- or hyperthyroidism), polycystic ovary syndrome (PCOS), and postpartum hormone drops can trigger excessive shedding.',
    },
    {
      title: 'Nutritional Deficiencies',
      desc: 'Low serum ferritin (iron stores), vitamin D3 insufficiency, zinc deficiency, and inadequate dietary protein intake impair follicular matrix cell division.',
    },
    {
      title: 'Physical or Emotional Stress',
      desc: 'Severe illness, surgical trauma, bereavement, or acute psychological shock prematurely shifts large cohorts of growing follicles into resting phase.',
    },
    {
      title: 'Medications & Treatments',
      desc: 'Certain prescription medicines—including antihypertensives, blood thinners, retinoids, chemotherapy, and mood stabilizers—can cause hair shedding as a side effect.',
    },
    {
      title: 'Scalp Conditions & Infections',
      desc: 'Untreated fungal ringworm (tinea capitis), severe seborrhoeic dermatitis, and bacterial folliculitis weaken hair anchorage and trigger hair breakage.',
    },
    {
      title: 'Harsh Styling Practices',
      desc: 'Chronic tension, chemical relaxers, high-heat blow drying, and bleaching weaken the keratin shaft and damage follicular roots.',
    },
  ];

  // 5 Evidence-Based Medical Treatment Modalities
  const evidenceTreatments = [
    {
      icon: <Droplets className="w-5 h-5 text-[#303A88]" />,
      title: 'Topical Minoxidil',
      desc: 'Topical minoxidil (2% or 5%) is an evidence-backed vasodilator approved for male and female pattern hair loss. It prolongs the anagen (growth) phase and increases follicle diameter. Consistent, continued use is mandatory to sustain benefits.',
    },
    {
      icon: <Pill className="w-5 h-5 text-[#0D9488]" />,
      title: 'Medicines for Alopecia Areata',
      desc: 'Depending on patch extent, dermatologists prescribe potent topical corticosteroids, intralesional steroid injections into the bald spots, or oral immunotherapy. In severe widespread cases, advanced oral JAK inhibitors (e.g., baricitinib) may be considered under specialist supervision.',
    },
    {
      icon: <Activity className="w-5 h-5 text-[#8B5CF6]" />,
      title: 'Correction of Underlying Medical Issues',
      desc: 'When shedding is linked to subclinical hypothyroidism, severe iron deficiency (low ferritin), or protein malnutrition, treating the root medical pathology and medically replenishing deficient micronutrients restores normal follicular cycling.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#D97706]" />,
      title: 'Management of Active Scalp Disorders',
      desc: 'Inflammatory conditions such as seborrhoea or fungal tinea capitis are treated with prescription oral antifungals and therapeutic medicated washes, eliminating root irritation that impedes healthy hair growth.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      title: 'Early Anti-Inflammatory Therapy for Scarring',
      desc: 'Suspected cicatricial alopecias require prompt, aggressive dermatological anti-inflammatory regimens (topical or systemic) to arrest destructive inflammatory cascades before permanent follicle obliteration occurs.',
    },
  ];

  // 7 Everyday Hair-Care Habits
  const dailyCareTips = [
    {
      title: '1. Consume a Wholesome, Nutrient-Dense Diet',
      desc: 'Ensure adequate intake of lean proteins, legumes, green leafy vegetables, seeds, nuts, and healthy fats to provide essential amino acids and micronutrients for hair keratin synthesis.',
    },
    {
      title: '2. Avoid High-Tension & Tight Hairstyles',
      desc: 'Do not pull hair into tight braids, tight buns, or slicked-back ponytails that strain the hairline. Allow hair to rest loosely to prevent mechanical traction alopecia.',
    },
    {
      title: '3. Use Mild, Scalp-Compatible Cleansers',
      desc: 'Choose gentle, sulphate-free shampoos formulated for your scalp condition. Avoid aggressive scrubbing or vigorous towel rubbing of wet, fragile strands.',
    },
    {
      title: '4. Strictly Limit High-Heat & Chemical Processing',
      desc: 'Minimize frequent use of flat irons, curling wands, chemical relaxers, and bleach that degrade hair shaft structural integrity and cause breakage.',
    },
    {
      title: '5. Never Take Random Supplements Without Blood Tests',
      desc: 'Avoid self-prescribing high-dose biotin, iron, or vitamin cocktails without diagnostic blood tests, as excessive levels of certain vitamins can paradoxically trigger shedding.',
    },
    {
      title: '6. Practice Stress Management & Restful Sleep',
      desc: 'Incorporate regular walking, adequate sleep, and relaxation routines to lower systemic cortisol levels and support endocrine equilibrium.',
    },
    {
      title: '7. Faithfully Adhere to Medical Advice',
      desc: 'Follow your doctor’s prescribed treatment schedule consistently, as hair cycles require 3 to 6 months of steady therapy before visible regrowth can be evaluated.',
    },
  ];

  // 6 Clinic Selection Criteria
  const selectionCriteria = [
    {
      num: '01',
      title: 'Accredited Qualifications',
      desc: 'Verify the doctor’s medical credentials (BHMS, MD Hom.) and active state medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Detailed Clinical Examination',
      desc: 'Choose a clinic that performs structured scalp inspection, hair-pull evaluation, and comprehensive health history.',
    },
    {
      num: '03',
      title: 'Honest Evidence Communication',
      desc: 'Treatment limitations must be stated clearly without claiming guaranteed cures or miraculous overnight regrowth.',
    },
    {
      num: '04',
      title: 'Specialist Dermatologist Referral',
      desc: 'A responsible clinic collaborates actively with dermatologists for trichoscopy, scalp biopsies, and prescription therapies.',
    },
    {
      num: '05',
      title: 'Realistic Follow-Up Monitoring',
      desc: 'Hair cycle evaluation requires realistic 3- to 6-month timelines rather than quick-fix commercial promises.',
    },
    {
      num: '06',
      title: 'Transparent Treatment Information',
      desc: 'Clear communication regarding recommended supportive approaches, expected costs, and ethical patient safety.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'What is alopecia?',
      a: 'Alopecia is the medical term for hair loss. It includes several conditions, such as alopecia areata, androgenetic alopecia (pattern hair loss), telogen effluvium (stress-induced shedding), and scarring alopecia. Causes, progression, and treatment approaches vary depending on the specific type.',
    },
    {
      q: 'Can alopecia be treated in Ponnani?',
      a: 'Yes. People experiencing hair loss in Ponnani can consult qualified healthcare professionals for assessment and appropriate treatment. Treatment depends on the underlying cause and may involve dermatologist consultation, blood investigations, and condition-specific medicines.',
    },
    {
      q: 'Is Homoeopathic Alopecia Treatment in Ponnani effective?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy effectively treats or cures alopecia. Anyone considering homoeopathy should understand these limitations and should not delay evidence-based medical treatment, particularly when inflammatory or progressive loss is present.',
    },
    {
      q: 'Which doctor should I consult for alopecia?',
      a: 'A dermatologist is generally the most appropriate medical specialist for diagnosing and treating hair and scalp disorders through trichoscopic examination. A general physician may also help assess underlying systemic conditions (such as thyroid disorders or anaemia) that contribute to hair loss.',
    },
    {
      q: 'Does alopecia cause permanent hair loss?',
      a: 'It depends on the type. Conditions such as telogen effluvium and mild alopecia areata often cause temporary loss where hair can regrow. However, scarring (cicatricial) alopecia permanently destroys hair follicles. Early medical diagnosis is critical for identifying conditions that risk irreversible loss.',
    },
    {
      q: 'Can stress cause alopecia?',
      a: 'Significant physical or emotional stress can trigger telogen effluvium, causing noticeable diffuse hair shedding 2 to 4 months after the stressful event. However, not all hair loss is stress-related; autoimmune, genetic, and hormonal causes must be ruled out through clinical assessment.',
    },
    {
      q: 'Are nutritional deficiencies responsible for hair loss?',
      a: 'Yes. Deficiencies in iron (low ferritin stores), inadequate dietary protein, and insufficient vitamin D or zinc can contribute to telogen shedding. Blood tests help identify true deficiencies, and supplements should only be taken when medically indicated.',
    },
    {
      q: 'How long does alopecia treatment take?',
      a: 'Treatment duration varies according to the type of hair loss, its severity, and individual biological response. Because the human hair growth cycle is slow, noticeable improvement typically takes several months, and some conditions require long-term maintenance. Hair regrowth cannot be universally guaranteed.',
    },
    {
      q: 'Can hair grow back after alopecia areata?',
      a: 'Hair regrowth is possible in alopecia areata, particularly in limited, mild cases. However, the condition can be unpredictable and may recur. A dermatologist can explain evidence-based treatment options—such as corticosteroid therapy or JAK inhibitors—and discuss realistic expectations.',
    },
    {
      q: 'What should I check before choosing an Alopecia Homoeopathy Clinic in Ponnani?',
      a: 'Check the practitioner’s accredited qualifications, medical council registration, consultation thoroughness, and willingness to explain treatment limitations. Avoid any provider who guarantees permanent hair regrowth or advises stopping prescribed medical therapies.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Alopecia Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Alopecia Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Alopecia Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Alopecia Treatment"
        subtitle="Clinical assessment and evidence-grounded consultations for patients in Ponnani, Edappal, and Malappuram district dealing with hair loss, thinning hair, bald patches, receding hairline, and scalp health concerns."
        metrics={[
          { label: 'Clinical Focus', value: 'Alopecia & Hair Loss' },
          { label: 'Evaluation', value: 'History & Scalp Triage' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Hair Loss Triage & Constitutional Consultations"
        doctorBio="10+ years of dedicated clinical experience conducting confidential hair and scalp evaluations, chronic dermatological reviews, lifestyle guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Hair loss is a common concern that can affect people of different ages and genders. While losing a few strands of hair every day is normal, excessive hair shedding, thinning hair, bald patches or a receding hairline may indicate an underlying hair or scalp condition. One of the medical terms used to describe hair loss is alopecia. It can occur in different forms and may develop due to genetic factors, autoimmune conditions, hormonal changes, nutritional deficiencies, illnesses, stress or certain medications.
          </p>
          <p>
            For people experiencing persistent hair loss, understanding the cause is an important first step towards choosing appropriate care. If you are looking for an <strong>Alopecia Treatment in Ponnani</strong>, learning about the available treatment options and getting a proper medical assessment can help you make informed decisions.
          </p>
          <p>
            A <strong>Homoeopathic Clinic in Ponnani for Alopecia Treatment</strong> may provide consultations and discuss individual health concerns. However, it is important to understand that scientific evidence supporting homoeopathy as an effective treatment or cure for alopecia is insufficient. Patients should not delay proven medical treatments or discontinue prescribed medicines in favour of homoeopathy.
          </p>
          <p>
            This clinical guide explains the common types of alopecia, possible causes, symptoms, diagnosis, treatment approaches and important considerations when choosing an alopecia care provider in Ponnani.
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
              Key Takeaways: Alopecia Care in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking alopecia and hair loss treatment.
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

      {/* Understanding Alopecia and Its Different Types (5 Subtypes) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL CLASSIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Understanding Alopecia and Its Different Types
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Alopecia refers to hair loss from the scalp or body. Understanding the specific type is critical because different forms have vastly different causes and require distinct management approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alopeciaTypes.map((item, idx) => (
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
                </div>

                <p className="text-xs italic text-[#64748B] flex items-start gap-1.5 pt-3 border-t border-[#EEF2FB]">
                  <Info className="w-3.5 h-3.5 text-[#303A88] flex-shrink-0 mt-0.5" />
                  <span>{item.clinicalDetails}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Causes of Alopecia (8 Causes) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              ETIOLOGY &amp; CONTRIBUTING FACTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Causes of Alopecia
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair loss does not have one single cause. An individual may experience alopecia due to one primary factor or a combination of interacting biological mechanisms:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {causesList.map((cause, cIdx) => (
              <div
                key={cIdx}
                className="bg-white p-4 sm:p-5 rounded-xl border border-[#D8E1F5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#303A88]" />
                    {cause.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#EEF2FB] p-4 rounded-xl border border-[#D8E1F5] text-xs sm:text-sm text-[#1E2559] leading-relaxed font-medium">
            A proper clinical evaluation helps distinguish between these underlying causes and prevents using treatments that fail to address the actual etiology.
          </div>
        </div>
      </section>

      {/* Symptoms That May Indicate Alopecia (10 Symptoms) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL PRESENTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Symptoms That May Indicate Alopecia
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair loss can present differently depending on its type and underlying cause. Some people notice gradual thinning over months, while others develop sudden coin-sized bald spots overnight:
          </p>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              Common Symptoms Evaluated During Consultation:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Excessive hair shedding during bathing, combing or brushing.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Gradual thinning across the scalp, crown or vertex.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Receding hairline along the forehead or bitemporal angles.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Smooth, round or oval bald patches (alopecia areata).</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Reduced overall hair density and volume when gathering hair.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Widening of the central hair parting in women.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Loss of eyebrows, eyelashes or facial beard hair.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Changes in scalp skin texture, shiny patches or loss of visible pores.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Itching, redness, scaling, burning or follicular scalp discomfort.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Hair shaft breakage near roots, shorter broken hairs, or split ends.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              If you notice sudden hair loss, rapidly expanding bald patches, scalp pain, redness, scaling or signs of scarring, seek medical assessment promptly. Early diagnosis is particularly critical in inflammatory and scarring conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Alopecia Treatment in Ponnani: Why Proper Diagnosis Matters */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DIAGNOSTIC TRIAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Alopecia Treatment in Ponnani: Why Proper Diagnosis Matters
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Choosing an appropriate approach to hair loss begins with accurately identifying the underlying condition. Two patients experiencing seemingly similar hair thinning may have entirely different medical causes requiring opposing management strategies.
            </p>
            <p>
              For example, genetic pattern hair loss requires anti-androgenic or minoxidil therapy, whereas temporary telogen shedding responds to nutritional correction, and alopecia areata requires targeted anti-inflammatory immunomodulation.
            </p>
            <p>
              If you are searching for <strong>Alopecia Treatment in Ponnani</strong>, consulting a qualified doctor or dermatologist ensures a thorough assessment:
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#303A88]" />
              Core Diagnostic Elements in Clinical Evaluation:
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <div className="p-3 bg-[#F8FAFD] rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">1. Comprehensive Medical &amp; Family History:</strong>
                <span>Reviewing onset timing, progression velocity, family history of pattern baldness, recent illnesses, childbirth, surgery, emotional stressors, and current prescription medications.</span>
              </div>
              <div className="p-3 bg-[#F8FAFD] rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">2. Physical Scalp &amp; Follicular Examination:</strong>
                <span>Evaluating thinning patterns, bald patches, follicular density, scalp redness, pustules, micaceous scales, or loss of follicular ostia (suggesting cicatricial scarring).</span>
              </div>
              <div className="p-3 bg-[#F8FAFD] rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">3. Clinical Hair-Pull Assessment:</strong>
                <span>Gently testing active shedding across different scalp zones to determine whether telogen shedding is currently active or stable.</span>
              </div>
              <div className="p-3 bg-[#F8FAFD] rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">4. Diagnostic Blood Investigations:</strong>
                <span>Checking serum ferritin (iron stores), complete blood counts, thyroid-stimulating hormone (TSH), vitamin D3, and hormonal profiles where clinically indicated.</span>
              </div>
              <div className="p-3 bg-[#F8FAFD] rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">5. Dermatoscopy (Trichoscopy) or Scalp Biopsy:</strong>
                <span>In selected or ambiguous cases, dermatologists use polarized trichoscopy to identify yellow dots, exclamation-mark hairs, or peripilar casts, or perform a punch biopsy to differentiate scarring from non-scarring alopecia.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Not every patient requires every test. The doctor recommends targeted investigations based on individual clinical presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Homoeopathic Alopecia Treatment in Ponnani: Important Considerations */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE &amp; SAFETY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Alopecia Treatment in Ponnani: Important Considerations
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People experiencing hair loss sometimes explore different healthcare approaches, including homoeopathy. A <strong>Homoeopathic Alopecia Treatment in Ponnani</strong> consultation may involve discussing personal health history, lifestyle factors, and emotional concerns related to hair loss.
            </p>
            <p>
              However, patients should understand the current scientific evidence. <strong>There is insufficient reliable scientific evidence that homoeopathy can effectively treat or cure alopecia, reverse autoimmune hair loss, or guarantee hair regrowth</strong>.
            </p>
          </div>

          {/* Critical Evidence & Referral Notice */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure &amp; Patient Safety Guidance
                </h4>
                <p>
                  A homoeopathic consultation should NOT replace an appropriate medical diagnosis or evidence-based treatment. This is especially vital for conditions such as scarring (cicatricial) alopecia, where delays in controlling inflammation result in irreversible, permanent follicle destruction.
                </p>
                <p className="font-semibold text-amber-950">
                  If you are considering consulting a Homoeopathic Doctor for Alopecia Problems in Ponnani, discuss your diagnosis and existing treatment transparently with your medical providers. Never discontinue prescribed medicines or postpone specialist dermatology care in the unverified hope that complementary remedies will restore hair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Treatment Options for Alopecia (5 Modalities) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              EVIDENCE-BASED THERAPIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Evidence-Based Treatment Options for Alopecia
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Treatment depends strictly on the type of alopecia, its severity, patient age, medical history, and underlying health status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceTreatments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FB] border border-[#D8E1F5] flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-2">
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

      {/* Choosing an Alopecia Homoeopathy Clinic in Ponnani (6 Criteria) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Choosing an Alopecia Homoeopathy Clinic in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              When searching for an Alopecia Homoeopathy Clinic in Ponnani, evaluate the clinical responsibility, transparency, and referral ethics of the care being offered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectionCriteria.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-xl p-5 border border-[#D8E1F5] shadow-sm flex flex-col justify-between"
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

          <div className="mt-8 bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed font-medium text-center">
            An Alopecia Doctor in Ponnani should help you understand your symptoms and recognize the need for appropriate investigations or specialist dermatologist referrals. Prioritise verified clinical qualifications and experience over promotional guarantees.
          </div>
        </div>
      </section>

      {/* Alopecia Problem Treatment in Ponnani: The Importance of Individual Care */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PATIENT-CENTERED CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Alopecia Problem Treatment in Ponnani: Individualised Care
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Hair loss can significantly affect personal confidence, emotional well-being, and everyday social interactions. Many individuals become acutely anxious when discovering visible bald patches, while others feel distressed by progressive hair thinning over years.
            </p>
            <p>
              An individualised approach to <strong>Alopecia Problem Treatment in Ponnani</strong> must take into account the patient's medical history, hair-loss pattern, possible emotional triggers, and personal treatment preferences.
            </p>
            <p>
              For patients exploring an <strong>Alopecia Health Clinic in Ponnani</strong>, verify that the provider systematically investigates diverse causes and recommends appropriate medical evaluation. A responsible <strong>Homoeopathy Clinic for Alopecia Problems in Ponnani</strong> should communicate clearly regarding the scientific limitations of homoeopathic treatment and actively encourage collaboration with dermatologists.
            </p>
          </div>
        </div>
      </section>

      {/* Hair and Alopecia Treatment in Ponnani: Everyday Hair-Care Tips (7 Habits) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SUPPORTIVE DAILY CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair and Alopecia Treatment in Ponnani: Daily Care Tips
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Although daily hair-care habits cannot cure genetic or autoimmune alopecia, they reduce preventable follicle stress and support general hair shaft resilience:
          </p>

          <div className="space-y-3">
            {dailyCareTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] p-5 rounded-xl border border-[#D8E1F5] shadow-sm"
              >
                <h3 className="font-heading font-bold text-[#1E2559] text-sm sm:text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#303A88]" />
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#475569] italic pt-2">
            Remember: healthy hair-care routines provide supportive protection, but they are not a substitute for accurate clinical diagnosis and targeted medical treatment.
          </p>
        </div>
      </section>

      {/* When Should You Consult a Doctor for Hair Loss? (Warning Signs) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              CLINICAL RED FLAGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              When Should You Consult a Doctor for Hair Loss?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Do not ignore hair loss that is sudden, persistent, or accompanied by scalp symptoms. Consult a qualified medical practitioner or dermatologist promptly if you experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Sudden development of distinct round or oval bald patches.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Rapidly progressing, widespread, or uncontrolled hair shedding.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Hair loss involving eyebrows, eyelashes, beard or body hair.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Scalp pain, severe burning, tenderness, or persistent itching.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Redness, follicular swelling, pustules, yellow crusts, or pus.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Smooth, shiny, porcelain-like areas suggesting cicatricial scarring.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100 sm:col-span-2">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Hair loss accompanied by severe fatigue, cold intolerance, unexplained weight fluctuations, or menstrual irregularities.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
            <strong>Urgent Evaluation Note:</strong> Early assessment can identify conditions that require immediate medical intervention. In particular, suspected scarring alopecia must be evaluated without delay to arrest inflammatory follicle destruction.
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
              Frequently Asked Questions: Alopecia Treatment in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear, transparent clinical answers to common patient questions regarding alopecia areata, pattern baldness, shedding, and scalp care.
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

      {/* Take the First Step Towards Understanding Your Hair Loss (Closing CTA & Booking) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Take the First Step Towards Understanding Your Hair Loss
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Hair loss can have several underlying causes, and choosing the right care begins with understanding the condition. Whether you are experiencing patchy baldness, gradual thinning, excessive shedding or changes in scalp health, a proper medical assessment can help identify the reason and guide appropriate treatment.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              If you are searching for <strong>Alopecia Treatment in Ponnani</strong>, consider consulting a qualified healthcare professional who can evaluate your symptoms, explain available options and refer you to a dermatologist when necessary.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A <strong>Homoeopathic Clinic in Ponnani for Alopecia Treatment</strong> may be one of the healthcare services you explore, but it is important to make informed decisions based on reliable medical evidence. Homoeopathy should not be presented as a proven cure for alopecia or used as a replacement for established treatment.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold text-[#1E2559]">
              Prioritise accurate diagnosis, realistic expectations and responsible healthcare guidance to protect your scalp health and overall well-being.
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
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated consultation slot for alopecia evaluation and hair-care triage.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="alopecia-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Alopecia & Hair Loss"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
