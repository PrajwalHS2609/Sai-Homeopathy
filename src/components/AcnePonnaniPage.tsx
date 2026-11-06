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

export const AcnePonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for acne, pimples, and facial breakouts (Ponnani patient guide).'
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
    navigateToBookingWithReason('Acne & Pimples Consultation - Ponnani', 'online');
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
      title: 'Follicular Occlusion & Bacteria',
      desc: 'Acne develops when hair follicles become blocked with excess oil and dead skin cells, often involving inflammation and Cutibacterium acnes bacteria.',
    },
    {
      title: 'Multifactorial Triggers',
      desc: 'Hormonal changes, genetics, certain medications, and pore-clogging skin care products can significantly contribute to persistent breakouts.',
    },
    {
      title: 'Diverse Lesion Types',
      desc: 'Acne may appear as non-inflammatory blackheads and whiteheads, or inflammatory papules, pustules, deep nodules, and painful cysts.',
    },
    {
      title: 'Never Squeeze or Pick Pimples',
      desc: 'Picking, squeezing, or popping pimples drives inflammation deeper into the dermis and dramatically increases the risk of permanent scarring.',
    },
    {
      title: 'Evidence-Based Medical Therapies',
      desc: 'Proven acne treatments include topical retinoids, benzoyl peroxide, azelaic acid, oral antibiotics, and isotretinoin prescribed according to severity.',
    },
    {
      title: 'Transparent Scientific Disclosure',
      desc: 'There is insufficient reliable scientific evidence that homoeopathy can cure acne or reliably prevent recurring inflammatory breakouts.',
    },
    {
      title: 'Dermatologist Evaluation for Severe Acne',
      desc: 'Persistent, painful, cystic, or scarring acne should be formally evaluated by a qualified dermatologist to safeguard skin integrity.',
    },
    {
      title: 'Consistent Daily Skincare Routine',
      desc: 'Consistent gentle non-comedogenic skin care and appropriate medical guidance provide the most effective path to managing acne.',
    },
  ];

  // 6 Common Causes and Contributing Factors
  const commonCauses = [
    {
      title: '1. Hormonal Changes',
      desc: 'Fluctuations in androgen levels during puberty, menstrual cycles, pregnancy, or medical conditions such as polycystic ovary syndrome (PCOS) stimulate sebaceous glands to produce excess oil, leading to clogged pores and inflammatory breakouts.',
    },
    {
      title: '2. Excess Sebum Production',
      desc: 'While natural sebum protects the skin barrier, overactive sebaceous glands produce excess oil that mixes with desquamated keratinocytes inside follicular infundibula, forming microcomedones.',
    },
    {
      title: '3. Genetic Predisposition',
      desc: 'A family history of moderate to severe acne strongly increases susceptibility. Genetic factors regulate pore size, innate immune inflammatory responses to skin bacteria, and androgen receptor sensitivity.',
    },
    {
      title: '4. Pore-Clogging Skincare & Cosmetics',
      desc: 'Heavy occlusive creams, oil-based foundations, and hair pomades can physically plug follicular openings. Choosing non-comedogenic and oil-free formulations helps minimize cosmetic acne (acne cosmetica).',
    },
    {
      title: '5. Emotional & Physical Stress',
      desc: 'Stress stimulates the hypothalamic-pituitary-adrenal axis, releasing cortisol and neuro-inflammatory mediators that aggravate sebaceous hyperactivity and worsen inflammatory acne flare-ups.',
    },
    {
      title: '6. Certain Medications',
      desc: 'Prescription systemic corticosteroids, lithium, anticonvulsants, androgenic hormones, and certain vitamin B12 supplements can trigger acute acneiform eruptions. Never stop prescribed medicines without doctor consultation.',
    },
  ];

  // 6 Common Types of Acne
  const acneTypes = [
    {
      number: '01',
      title: 'Whiteheads (Closed Comedones)',
      badge: 'Non-Inflammatory',
      desc: 'Whiteheads develop when hair follicles become blocked by trapped sebum and dead skin cells. The microscopic pore opening remains closed beneath the surface, creating small, flesh-coloured or whitish non-inflamed bumps.',
      note: 'Best managed with gentle chemical exfoliants like salicylic acid or topical retinoids rather than manual popping.',
    },
    {
      number: '02',
      title: 'Blackheads (Open Comedones)',
      badge: 'Non-Inflammatory',
      desc: 'Blackheads occur when blocked pore contents remain open to the air. The dark colour is caused by melanin oxidation when lipids and keratin react with oxygen—not by dirt or poor hygiene.',
      note: 'Harsh scrubbing does not scrub away blackheads and can trigger surrounding inflammation.',
    },
    {
      number: '03',
      title: 'Papules',
      badge: 'Mild-to-Moderate Inflammatory',
      desc: 'Papules are small, solid, raised pink, red, or darker bumps caused by follicular wall rupture. They feel sensitive or tender to touch and lack visible central pus.',
      note: 'Early medical topical intervention prevents papules from progressing to deeper pustules.',
    },
    {
      number: '04',
      title: 'Pustules',
      badge: 'Classic "Pimples"',
      desc: 'Pustules are inflamed, tender acne lesions containing visible creamy white or yellowish pus at their center, surrounded by an erythematous ring of inflamed skin.',
      note: 'Squeezing pustules forces bacteria deeper into surrounding dermis, triggering secondary lesions and post-inflammatory dark spots.',
    },
    {
      number: '05',
      title: 'Nodules (Nodular Acne)',
      badge: 'Severe Inflammatory',
      desc: 'Nodules are large, hard, deep-seated inflammatory lesions situated deep within dermal tissue. They feel firm, severely painful, and often persist for weeks or months.',
      note: 'Nodular acne carries a very high risk of permanent ice-pick or rolling scars and requires prompt prescription dermatological care.',
    },
    {
      number: '06',
      title: 'Cystic Acne',
      badge: 'Most Severe Form',
      desc: 'Cystic acne consists of deep, soft, fluid-filled, fluctuant inflammatory lesions caused by widespread follicular rupture and severe inflammation beneath the skin surface.',
      note: 'Cystic acne represents a severe medical skin condition requiring oral prescription medications such as oral isotretinoin under strict specialist monitoring.',
    },
  ];

  // 6 Evidence-Based Acne Treatment Options
  const evidenceTreatments = [
    {
      icon: <Droplets className="w-5 h-5 text-[#303A88]" />,
      title: '1. Benzoyl Peroxide',
      badge: 'Antimicrobial',
      desc: 'Benzoyl peroxide directly targets and reduces Cutibacterium acnes bacterial populations without inducing bacterial resistance. It also exerts mild keratolytic action to unblock pores. Available in washes and gels (2.5% to 5%). It can cause initial dryness, peeling, and bleach coloured clothing or towels.',
    },
    {
      icon: <Sun className="w-5 h-5 text-[#0D9488]" />,
      title: '2. Topical Retinoids',
      badge: 'Pore Clearance & Cell Turnover',
      desc: 'Topical retinoids (such as adapalene, tretinoin, and tazarotene) normalize epidermal desquamation inside pores, preventing new microcomedones from forming. They are first-line foundational therapy for both comedonal and inflammatory acne. Retinoids require strict daily SPF 30+ sun protection and are contraindicated during pregnancy.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D97706]" />,
      title: '3. Azelaic Acid',
      badge: 'Antibacterial & Pigmentation Care',
      desc: 'Azelaic acid (10% to 20%) offers mild antimicrobial, anti-inflammatory, and selective tyrosinase-inhibiting properties. It is particularly valuable for patients dealing with both inflammatory pimples and post-inflammatory hyperpigmentation (dark marks), and is well tolerated in sensitive or rosacea-prone skin.',
    },
    {
      icon: <Pill className="w-5 h-5 text-[#8B5CF6]" />,
      title: '4. Prescription Oral Medicines',
      badge: 'Systemic Medical Supervision',
      desc: 'For moderate to widespread acne affecting the face, chest, or back, dermatologists may prescribe short courses of oral antibiotics (doxycycline or minocycline) combined with topical retinoids, or hormonal therapies (combined oral contraceptives, spironolactone) for adult female hormonal acne under medical supervision.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      title: '5. Oral Isotretinoin',
      badge: 'Severe & Scarring Acne',
      desc: 'Oral isotretinoin is a potent systemic retinoid reserved for severe nodulocystic, recalcitrant, or scarring acne that fails conventional treatments. It targets all four major pathogenic factors of acne. Because of severe teratogenic risks and systemic side effects, it requires mandatory baseline laboratory monitoring and strict pregnancy prevention protocols.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#38BDF8]" />,
      title: '6. Acne Scar Treatments',
      badge: 'Procedural Dermatology',
      desc: 'For established atrophic scars (boxcar, rolling, or ice-pick), dermatologists perform procedural interventions including fractional microneedling radiofrequency (MNRF), chemical peels (TCA cross), subcision, and fractional laser resurfacing to stimulate dermal collagen remodelling.',
    },
  ];

  // 6 Daily Skincare Tips
  const dailySkincareTips = [
    {
      title: 'Cleanse Gently Twice Daily',
      desc: 'Wash the face morning and night with a mild, soap-free, pH-balanced cleanser. Avoid aggressive scrubbing or harsh abrasive cleansing brushes, which strip natural lipids and trigger reactive oil rebound.',
    },
    {
      title: 'Choose Non-Comedogenic Products',
      desc: 'Ensure all facial moisturisers, sunscreens, and cosmetics are explicitly labelled "non-comedogenic" or "oil-free," meaning they are clinically tested not to clog pores.',
    },
    {
      title: 'Strict Hands-Off Policy: Never Pick',
      desc: 'Never squeeze, pop, or scratch acne bumps. Popping ruptures the follicle walls beneath the surface, driving bacteria deeper, prolonging redness, and creating permanent indented scars.',
    },
    {
      title: 'Apply Daily Broad-Spectrum Sunscreen',
      desc: 'UV exposure oxidizes sebum and darkens post-acne marks into stubborn brown patches. Apply lightweight, matte, non-greasy broad-spectrum SPF 30+ sunscreen daily.',
    },
    {
      title: 'Remove All Makeup Before Sleep',
      desc: 'Never sleep with cosmetic makeup or sunscreen on. Double cleansing with micellar water followed by a gentle foaming wash ensures pores stay clean throughout the night.',
    },
    {
      title: 'Maintain Healthy Systemic Habits',
      desc: 'Nutrient-rich whole foods, minimal high-glycaemic sugary snacks, 7–8 hours of restful sleep, and clean pillowcases support skin barrier recovery and hormonal equilibrium.',
    },
  ];

  // 5 Steps of Acne Consultation
  const consultationSteps = [
    {
      step: '01',
      title: 'Initial Discussion of Breakouts',
      desc: 'The consultation begins with a detailed review of your skin concerns—the type of lesions, frequency of breakouts, anatomical locations (forehead, cheeks, jawline, back), and how long symptoms have persisted.',
    },
    {
      step: '02',
      title: 'Comprehensive Health & Medical History',
      desc: 'The practitioner reviews your general health, previous acne medications, menstrual cycle regularity, family history, and current prescription drugs or supplements.',
    },
    {
      step: '03',
      title: 'Identifying Underlying Contributing Factors',
      desc: 'Hormonal influences, cosmetic product ingredients, stress levels, dietary patterns, and previous skin care habits are evaluated to pinpoint possible aggravating triggers.',
    },
    {
      step: '04',
      title: 'Transparent Care Guidance & Triage',
      desc: 'The doctor explains suitable next steps and whether prescription dermatological evaluation is required. The limitations of complementary homoeopathic care are communicated with complete honesty.',
    },
    {
      step: '05',
      title: 'Structured Follow-Up & Monitoring',
      desc: 'Acne recovery requires time and consistency. Periodic follow-up visits evaluate skin tolerance, assess changes in inflammatory lesion count, and adjust care recommendations.',
    },
  ];

  // 7 Selection Criteria for Clinic
  const selectionCriteria = [
    {
      num: '01',
      title: 'Qualified Practitioner',
      desc: 'Verify the doctor’s accredited qualifications (such as BHMS or MD Hom.) and official medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Detailed Consultation',
      desc: 'Choose a clinic that spends adequate time taking a detailed skin and medical history rather than dispensing generic remedies.',
    },
    {
      num: '03',
      title: 'Transparent Guidance',
      desc: 'A responsible clinic clearly explains what complementary therapies can and cannot achieve, openly acknowledging scientific limitations.',
    },
    {
      num: '04',
      title: 'Individualised Assessment',
      desc: 'Acne care must be tailored to your specific lesion type, skin barrier condition, and potential hormonal triggers.',
    },
    {
      num: '05',
      title: 'Appropriate Dermatologist Referral',
      desc: 'The clinic must actively recognise when severe cystic acne, scarring, or hormonal disorders require prescription dermatological therapy.',
    },
    {
      num: '06',
      title: 'Realistic Expectations',
      desc: 'Be cautious of clinics promising guaranteed overnight cures, scar-free guarantees, or permanent acne eradication.',
    },
    {
      num: '07',
      title: 'Patient Comfort & Confidentiality',
      desc: 'Choose a supportive clinical environment where you can discuss your skin concerns, confidence, and self-esteem without embarrassment.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'What causes acne?',
      a: 'Acne develops when hair follicles become blocked with excess sebum (oil) and shed dead skin cells. Cutibacterium acnes bacteria proliferate within blocked pores, triggering inflammation. Hormonal changes, genetics, certain medications, and pore-clogging skincare products are recognized contributing factors.',
    },
    {
      q: 'Is acne only a teenage problem?',
      a: 'No. While acne is very common during adolescence due to pubertal hormonal surges, adult acne is widespread and can affect individuals in their 20s, 30s, 40s, and beyond. Adult female acne is particularly common along the jawline and chin due to hormonal fluctuations.',
    },
    {
      q: 'Is Homoeopathic Treatment for Acne in Ponnani effective?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy effectively cures acne or reliably prevents new inflammatory breakouts. While some patients explore homoeopathy for constitutional or lifestyle support, it should not replace evidence-based dermatological treatments such as topical retinoids or benzoyl peroxide.',
    },
    {
      q: 'Can acne leave permanent scars?',
      a: 'Yes. Severe inflammatory acne—especially deep papules, pustules, nodules, and cysts—can damage surrounding collagen and dermal architecture, resulting in permanent atrophic (indented) or hypertrophic scars. Squeezing or picking pimples significantly increases this risk.',
    },
    {
      q: 'How can I reduce facial acne?',
      a: 'Wash your face twice daily with a gentle cleanser, use non-comedogenic moisturiser and sunscreen, avoid picking or popping pimples, change pillowcases regularly, and consult a qualified healthcare professional regarding evidence-based treatments tailored to your skin type.',
    },
    {
      q: 'Does oily skin always cause acne?',
      a: 'No. While oily skin increases the likelihood of pore blockage, acne is a multifactorial disease that requires follicular hyperkeratinization (sticky dead cells), bacterial proliferation, and an inflammatory host immune response. Many people with oily skin do not develop inflammatory acne.',
    },
    {
      q: 'Can stress make acne worse?',
      a: 'Yes. Psychological and physical stress triggers the release of stress hormones (such as cortisol and CRH) that stimulate sebaceous oil production and promote skin inflammation, frequently triggering or aggravating acne flares.',
    },
    {
      q: 'When should I consult an Acne Doctor in Ponnani?',
      a: 'You should seek professional medical advice if your acne is persistent, causes painful deep nodules or cysts, leaves dark marks or scars, fails to respond to over-the-counter washes, or causes emotional distress, social withdrawal, or low self-esteem.',
    },
    {
      q: 'Can acne marks and scars be removed?',
      a: 'Post-inflammatory dark marks (hyperpigmentation) generally fade gradually over several months with strict daily sun protection and topical agents like azelaic acid or retinoids. Established deep atrophic scars cannot be removed with creams alone but can be significantly improved with dermatologist-performed procedures such as microneedling, chemical peels, and laser resurfacing.',
    },
    {
      q: 'How long does acne treatment take to show results?',
      a: 'Medical acne treatments typically require 6 to 12 weeks of consistent daily use to demonstrate visible, meaningful improvement. Because acne treatments primarily prevent new lesions from forming, patience and adherence are essential. Avoid stopping treatments prematurely.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Acne Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Acne Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Dermatology Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Acne Treatment"
        subtitle="Clinical evaluation and evidence-informed consultations for patients in Ponnani, Edappal, and Malappuram district dealing with persistent pimples, blackheads, whiteheads, hormonal jawline acne, and acne scarring."
        metrics={[
          { label: 'Condition Focus', value: 'Acne & Facial Breakouts' },
          { label: 'Clinical Assessment', value: 'History & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Acne Triage & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential skin assessments, allergy reviews, lifestyle guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Acne is one of the most common skin concerns affecting teenagers and adults. It can appear on the face, forehead, cheeks, chin, chest, shoulders and back. Although acne is often associated with adolescence, many adults also experience recurring pimples, blackheads, whiteheads and painful breakouts. For some people, acne is a temporary concern, while others experience persistent skin problems that may leave dark marks or permanent scars.
          </p>
          <p>
            Acne can affect more than physical appearance. Recurring breakouts may influence confidence, social interactions and emotional well-being. Understanding the causes of acne and choosing suitable skin care are important steps towards managing this condition.
          </p>
          <p>
            If you are searching for a <strong>Homoeopathic Clinic in Ponnani for Acne Treatment</strong>, it is important to consult a qualified healthcare professional who takes time to understand your skin concerns, medical history and individual needs.
          </p>
          <p>
            Our clinic provides an opportunity for individuals to discuss acne and other skin-related concerns through a personalised consultation. We believe in understanding the factors that may contribute to breakouts, explaining appropriate care options and encouraging realistic expectations about treatment.
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
              Key Takeaways: Acne &amp; Skin Health in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking acne and pimple care.
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

      {/* Understanding Acne and Its Causes */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PATHOPHYSIOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Understanding Acne and Its Causes
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Acne is a common skin condition that develops when hair follicles become blocked by excess sebum (natural skin oil) and dead skin cells. Inflammation and the activity of a bacterium called <em>Cutibacterium acnes</em> can contribute to the development of acne lesions.
            </p>
            <p>
              People looking for <strong>Acne Treatment in Ponnani</strong> may experience different forms of breakouts depending on their skin type, age, hormonal activity and other contributing factors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commonCauses.map((cause, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#F8FAFD] p-5 rounded-xl border border-[#D8E1F5]"
              >
                <h3 className="font-heading font-bold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#303A88]" />
                  {cause.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Types of Acne (6 Subtypes) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL CLASSIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Types of Acne Breakouts
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Understanding your specific type of acne is essential for selecting appropriate, effective treatment and preventing avoidable scars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acneTypes.map((item, idx) => (
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
                  <span>{item.note}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Face Acne Treatment in Ponnani */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              FACIAL CONCERNS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Face Acne Treatment in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              The face is one of the most common areas affected by acne. Breakouts may appear on the forehead, cheeks, nose, chin and jawline. Different facial areas may be affected by different contributing factors, including hormonal changes, skin care products and natural oil production.
            </p>
            <p>
              If you are searching for <strong>Face Acne Treatment in Ponnani</strong>, a proper clinical assessment helps identify the type and severity of acne and determine whether specialist care is needed.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              Common Facial Acne Concerns Addressed:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Repeated pimples and comedones across the forehead.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Stubborn blackheads and enlarged pores around the nose.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whiteheads and inflamed papules on the cheeks.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Painful hormonal breakouts around the chin and jawline.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Oily skin, excess shine and persistently blocked pores.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Post-inflammatory erythema (red marks) left after pimples heal.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Atrophic acne scars, boxcar indentations, and uneven skin texture.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              <strong>Clinical Caution:</strong> Avoid squeezing, scratching or repeatedly touching acne lesions. These habits force bacteria deeper into the dermis and dramatically contribute to permanent scarring. A dermatologist can recommend appropriate medical treatments based on the severity and skin type.
            </p>
          </div>
        </div>
      </section>

      {/* Homoeopathic Treatment for Acne in Ponnani (Evidence & Disclosure) */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Treatment for Acne in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People exploring <strong>Homoeopathic Treatment for Acne in Ponnani</strong> may be interested in discussing their skin concerns through an individual consultation.
            </p>
            <p>
              Homoeopathy is a system of complementary medicine that uses highly diluted preparations selected according to an individual's reported symptoms and health history. A homoeopathic consultation may involve questions about the pattern of breakouts, skin sensitivity, general health, lifestyle and previous treatments.
            </p>
          </div>

          {/* Critical Evidence Disclosure Notice */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure &amp; Patient Safety Policy
                </h4>
                <p>
                  However, it is important to understand that <strong>there is insufficient reliable scientific evidence establishing homoeopathy as an effective treatment for acne</strong>. It has not been proven to clear acne, prevent new breakouts or reliably remove acne scars in rigorous scientific trials.
                </p>
                <p className="font-semibold text-amber-950">
                  Homoeopathy should NOT replace evidence-based dermatological care, particularly for painful, severe or scarring acne. A responsible approach to acne management includes understanding the condition, discussing proven treatment options and seeking specialist dermatological evaluation when necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consult an Acne Doctor in Ponnani? */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              INDIVIDUALISED CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Why Consult an Acne Doctor in Ponnani?
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Acne can range from mild comedonal whiteheads to severe inflammatory cysts. A treatment that works effectively for one individual may be completely ineffective or irritate another person's skin barrier.
            </p>
            <p>
              Consulting an <strong>Acne Doctor in Ponnani</strong> helps you understand the nature of your skin condition, distinguish acne from mimics (like rosacea, folliculitis, or perioral dermatitis), and explore appropriate care options.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#303A88]" />
              Questions Evaluated During a Clinical Assessment:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>When the acne first appeared and its rate of progression.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>The specific anatomical areas affected (face, chest, neck, back).</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether pimples are painful, tender, itchy or inflamed.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether breakouts cyclical worsen before or during menstruation.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Family history of severe cystic acne or acne scarring.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>All skincare products, cleansers, and cosmetics currently used.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Previous acne treatments tried and their effectiveness or side effects.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>The presence of persistent post-inflammatory dark marks or scars.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              A dermatologist can usually diagnose acne through clinical skin examination. Additional investigations (such as hormone profiles or bacterial cultures) may be considered if an underlying endocrine disorder is suspected.
            </p>
          </div>
        </div>
      </section>

      {/* Acne Homoeopathy Clinic in Ponnani: What to Expect (5 Steps) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CONSULTATION WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Acne Homoeopathy Clinic in Ponnani: What to Expect
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            If you are considering an <strong>Acne Homoeopathy Clinic in Ponnani</strong>, understanding the 5-step consultation framework helps you prepare:
          </p>

          <div className="space-y-4">
            {consultationSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#D8E1F5] shadow-sm"
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
        </div>
      </section>

      {/* What Patients Should Know (Caution against false promises) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              PATIENT PROTECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Acne Homoeopathic Treatment in Ponnani: Important Information
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People searching for <strong>Acne Homoeopathic Treatment in Ponnani</strong> should have realistic expectations about what homoeopathy can and cannot do. There is currently insufficient high-quality clinical evidence to establish that homoeopathic medicines treat the underlying biological causes of acne or produce reliable improvements.
            </p>
            <p className="font-semibold text-[#1E2559]">
              Be extremely cautious of commercial claims promising:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Permanent acne eradication without recurrence.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Guaranteed clear skin within a few days or overnight.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Complete permanent removal of deep indented acne scars.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">A permanent cure for hormonal or PCOS-related acne.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Guaranteed results without any possible side effects.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/60 rounded-lg border border-rose-200">
              <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-rose-950">Replacement of all prescribed dermatological medicines.</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
            Acne is a recognised medical skin disorder, and highly effective treatments are available. Discussing treatment options openly with a qualified healthcare professional prevents unnecessary therapeutic delays and scarring.
          </p>
        </div>
      </section>

      {/* Evidence-Based Acne Treatment Options */}
      <section className="py-12 bg-[#F1F5F9]/60 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DERMATOLOGICAL GUIDELINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Evidence-Based Acne Treatment Options
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Dermatological treatment depends on the type and severity of acne, the affected body areas, age, medical history, and scarring risk:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evidenceTreatments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EEF2FB] border border-[#D8E1F5] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F8FAFD] text-[#303A88] border border-[#D8E1F5]">
                      {item.badge}
                    </span>
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

      {/* Daily Skin Care Tips for Acne-Prone Skin */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DAILY PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Daily Skin Care Tips for Acne-Prone Skin
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A simple, gentle, and consistent skin care routine supports medical acne management and prevents skin barrier compromise:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dailySkincareTips.map((tip, tIdx) => (
              <div
                key={tIdx}
                className="bg-[#F8FAFD] rounded-xl p-5 border border-[#D8E1F5]"
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

          <p className="text-xs sm:text-sm text-[#64748B] italic pt-2">
            Avoid frequently switching products or layering multiple strong acne treatments simultaneously, as this damages the protective acid mantle and triggers severe reactive breakouts.
          </p>
        </div>
      </section>

      {/* Homoeopathy for Acne in Ponnani: A Patient-Centred Approach */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              EMPATHETIC CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathy for Acne in Ponnani: A Patient-Centred Approach
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Individuals looking for <strong>Homoeopathy for Acne in Ponnani</strong> should receive clear information about complementary care alongside established medical treatments. A responsible consultation involves:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Listening attentively to the patient's skin concerns and emotional distress.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Understanding the precise history, onset, and cyclical pattern of breakouts.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Reviewing current medications, cosmetics, and previous treatments tried.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Openly discussing the limitations of homoeopathic scientific evidence.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Avoiding unrealistic promises of guaranteed clear skin or scar removal.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Encouraging appropriate dermatological evaluation for persistent lesions.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
              <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
              <span>Referring patients with severe nodulocystic or scarring acne promptly to dermatologists.</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-2">
            Acne significantly affects emotional well-being, body image, and self-confidence. Patients should feel completely comfortable discussing their skin concerns in a supportive, non-judgemental clinical environment.
          </p>
        </div>
      </section>

      {/* When Should You Visit an Acne Clinic in Ponnani? */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              TRIAGE &amp; WARNING SIGNS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              When Should You Visit an Acne Clinic in Ponnani?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Consider consulting a qualified healthcare professional promptly if you experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Persistent acne that does not improve after 6–8 weeks of OTC care.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Deep, painful pimples, firm nodules or fluctuant cysts under the skin.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Acne lesions that leave permanent indented marks or raised scars.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Severe breakouts extending across the chest, shoulders and back.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Sudden explosive acneiform eruptions shortly after starting new medications.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Acne accompanied by irregular menstrual periods or facial hirsutism (suspected PCOS).</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100 sm:col-span-2">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Severe emotional distress, anxiety, social withdrawal, or depression due to skin appearance.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
            Early clinical assessment identifies appropriate medical therapy early enough to avoid irreversible pitted scars and prolonged emotional suffering.
          </div>
        </div>
      </section>

      {/* Choosing the Right Acne Clinic in Ponnani (7 Criteria) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Choosing the Right Acne Clinic in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Selecting an appropriate Acne Clinic in Ponnani involves more than looking for advertisements or promises of quick results.
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
              Frequently Asked Questions: Acne Treatment Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear, transparent clinical answers to common patient questions regarding acne causes, adult breakouts, scarring, and homeopathic consultations.
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

      {/* Book an Acne Consultation in Ponnani (Closing CTA & Booking Engine) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Book an Acne Consultation in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Acne can affect your skin, confidence and quality of life, but you do not have to ignore persistent breakouts or struggle with recurring skin concerns without guidance.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Whether you are exploring <strong>Homoeopathic Treatment for Acne in Ponnani</strong>, looking for an <strong>Acne Doctor in Ponnani</strong>, or seeking guidance for recurring facial breakouts, make informed decisions with the support of qualified healthcare professionals.
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
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated time slot for acne triage and skin evaluation.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="acne-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Acne & Facial Pimples"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
