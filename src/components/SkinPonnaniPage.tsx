import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  Sparkles,
  FileText,
  AlertCircle,
  Clock,
  Compass,
  ArrowRight,
  Sun,
  Shield,
  Eye,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const SkinPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for skin treatment near Ponnani (acne, eczema, psoriasis, rashes).'
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
    navigateToBookingWithReason('Skin Health Consultation - Ponnani', 'online');
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
      title: 'Multifactorial Causes',
      desc: 'Skin problems such as acne, eczema, psoriasis, pigmentation and fungal infections can have different underlying causes.',
    },
    {
      title: 'Accurate Diagnosis First',
      desc: 'Accurate diagnosis is important before starting any skin treatment, rather than relying on self-medication.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'People searching for Skin Homeopathic Treatment in Ponnani should understand that homeopathy has not demonstrated reliable effectiveness in treating skin diseases.',
    },
    {
      title: 'Evidence-Based Dermatology',
      desc: 'A qualified dermatologist can recommend evidence-based treatments for persistent, severe or complicated skin conditions.',
    },
    {
      title: 'Avoid Self-Medication',
      desc: 'Avoid self-medication, especially with steroid-containing creams which can worsen fungal infections or cause skin thinning.',
    },
    {
      title: 'Gentle Supportive Skincare',
      desc: 'Gentle skincare, moisturising and sun protection can support general skin barrier health and recovery.',
    },
    {
      title: 'Emergency Warning Signs',
      desc: 'Seek prompt medical attention for spreading rashes, severe inflammation, fever, painful swelling or signs of serious allergic reactions.',
    },
    {
      title: 'Do Not Delay Proven Care',
      desc: 'Do not stop prescribed treatment or delay medical care in favour of unproven remedies.',
    },
  ];

  // Common Skin Conditions That Need Medical Attention (6 conditions)
  const commonConditions = [
    {
      number: '01',
      title: 'Acne and Pimples',
      desc: 'Acne is a common skin condition that develops when hair follicles become blocked by oil and dead skin cells. It can cause blackheads, whiteheads, pimples, deeper nodules and cysts.',
      details: [
        'Influenced by hormonal changes during adolescence, genetics, and medications',
        'Can affect the face, neck, chest, shoulders and upper back',
        'Picking or squeezing pimples increases inflammation and permanent scarring risk',
        'Dermatologists recommend topical retinoids, benzoyl peroxide, or systemic therapies',
        'Homeopathy has not demonstrated reliable effectiveness against acne',
      ],
    },
    {
      number: '02',
      title: 'Eczema and Dermatitis',
      desc: 'Eczema is a group of conditions that cause inflammation, dryness, itching and irritation. Atopic dermatitis is one of the most common forms.',
      details: [
        'Dry, rough, sensitive skin with persistent intense itching',
        'Red or darker erythematous patches that may crack or weep fluid',
        'Triggered by harsh soaps, detergents, synthetic fragrances, weather, and allergens',
        'Management involves regular barrier emollients and prescribed topical anti-inflammatories',
        'Homoeopathic consultation should never replace established eczema care',
      ],
    },
    {
      number: '03',
      title: 'Psoriasis',
      desc: 'Psoriasis is a chronic inflammatory skin condition associated with immune-system dysregulation, causing accelerated skin cell turnover.',
      details: [
        'Raised, red patches covered with silvery-white scales',
        'Commonly appears on elbows, knees, scalp, lower back, and nails',
        'Not contagious; can be accompanied by joint stiffness (psoriatic arthritis)',
        'Requires long-term medical management using topical therapies, phototherapy, or biologics',
        'Accurate clinical diagnosis is essential as it can resemble eczema or fungal infections',
      ],
    },
    {
      number: '04',
      title: 'Skin Allergies and Rashes',
      desc: 'Skin allergies can develop after contact with specific environmental substances or allergens, leading to contact dermatitis.',
      details: [
        'Triggered by cosmetics, fragrances, nickel jewelry, cleaning products, and plants',
        'Symptoms include sudden redness, itching, swelling, papules, or blisters',
        'Reactions can appear immediately or develop over 24 to 72 hours',
        'Identifying and avoiding the allergen trigger is the cornerstone of management',
        'Patch testing or dermatological allergy assessment may be recommended',
      ],
    },
    {
      number: '05',
      title: 'Pigmentation and Dark Patches',
      desc: 'Pigmentation refers to changes in skin colour caused by uneven melanin production, inflammation, hormonal shifts, or sun exposure.',
      details: [
        'Common forms include melasma, post-inflammatory hyperpigmentation, and sunspots',
        'Hormonal fluctuations during pregnancy or oral contraceptive use often trigger melasma',
        'Sun protection with broad-spectrum SPF 30+ is vital for preventing worsening',
        'Persistent or changing dark patches must be evaluated by a dermatologist',
        'Avoid unverified bleaching creams that contain harmful unregulated steroids or mercury',
      ],
    },
    {
      number: '06',
      title: 'Fungal Skin Infections',
      desc: 'Fungal dermatophyte infections affect warm, moist body regions such as the feet, groin, scalp, and skin folds.',
      details: [
        'Presents with circular spreading rings, raised scaly borders, redness, and itching',
        'Commonly known as ringworm (tinea corporis), athlete’s foot, or jock itch',
        'Requires targeted topical or oral antifungal medications',
        'Using steroid creams without medical advice can worsen infection (tinea incognito)',
        'Proper microbiological or clinical diagnosis is critical before initiating care',
      ],
    },
  ];

  // 5 What to Expect During a Homeopathic Skin Consultation
  const consultationSteps = [
    {
      number: '01',
      title: 'Understanding the Main Complaint',
      desc: 'The practitioner asks about the skin problem, when it first appeared, which body areas are affected, triggers, and whether symptoms are spreading.',
    },
    {
      number: '02',
      title: 'Reviewing Previous Treatment',
      desc: 'Information about past prescription medicines, over-the-counter creams, steroid pastes, and home remedies helps clarify the clinical timeline.',
    },
    {
      number: '03',
      title: 'Discussing General Health & Lifestyle',
      desc: 'Questions cover sleep, appetite, daily stress, work environment, and hygiene habits as part of a whole-person consultation.',
    },
    {
      number: '04',
      title: 'Identifying the Need for Specialist Care',
      desc: 'A responsible practitioner recognizes the limits of complementary practice and recommends prompt referral to a dermatologist for laboratory tests or biopsy.',
    },
    {
      number: '05',
      title: 'Discussing Evidence & Limitations',
      desc: 'Patients receive transparent information about the proposed approach, its scientific limitations, potential risks, and evidence-based alternatives.',
    },
  ];

  // 6 Skin Health Maintenance Tips
  const maintenanceTips = [
    {
      number: '1',
      title: 'Follow a Gentle Skincare Routine',
      desc: 'Use mild, soap-free cleansers and avoid abrasive scrubs that cause burning or dryness. Washing too frequently can strip natural skin lipids.',
    },
    {
      number: '2',
      title: 'Use Broad-Spectrum Sun Protection',
      desc: 'Daily sun exposure exacerbates pigmentation and degrades skin collagen. Apply broad-spectrum SPF 30+ sunscreen, wear wide-brimmed hats, and seek shade.',
    },
    {
      number: '3',
      title: 'Keep the Skin Thoroughly Moisturised',
      desc: 'Regular moisturising with ceramide- or petrolatum-based creams supports the skin barrier. Fragrance-free formulas are ideal for sensitive skin.',
    },
    {
      number: '4',
      title: 'Avoid Unsupervised Self-Medication',
      desc: 'Never apply prescription topical steroids or triple-combination creams without a doctor’s guidance. Steroid misuse can thin skin and aggravate infections.',
    },
    {
      number: '5',
      title: 'Maintain Strict Personal Hygiene',
      desc: 'Keep skin clean and dry, especially in groin and underarm folds. Never share towels, combs, razors, or clothing when an infection is suspected.',
    },
    {
      number: '6',
      title: 'Follow a Balanced, Healthy Lifestyle',
      desc: 'Adequate hydration, 7–8 hours of restful sleep, and balanced nutrition support cellular repair and general immune resilience.',
    },
  ];

  // 5 Selection Factors for Clinic
  const selectionFactors = [
    {
      number: '01',
      title: 'Qualified Practitioners',
      desc: 'Check the practitioner’s accredited qualifications (such as BHMS) and verified registration with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Clear Consultation Process',
      desc: 'Choose a provider who listens attentively to your skin concerns, takes a detailed history, and explains findings clearly.',
    },
    {
      number: '03',
      title: 'Honest Treatment Information',
      desc: 'A responsible healthcare professional explains what complementary care can and cannot achieve, avoiding unrealistic promises.',
    },
    {
      number: '04',
      title: 'Appropriate Specialist Referral',
      desc: 'The clinic should maintain active referral links with certified dermatologists for skin scrapings, biopsy, and prescription therapies.',
    },
    {
      number: '05',
      title: 'Structured Follow-Up Guidance',
      desc: 'Clear protocols ensure your skin is monitored over time and reassessed if adequate clinical improvement is not achieved.',
    },
  ];

  // 8 FAQs from user prompt
  const faqs = [
    {
      q: 'Where Can I Find a Homeopathic Clinic Near Ponnani for Skin Treatment?',
      a: 'You can look for qualified homoeopathic practitioners in or around Ponnani and surrounding towns like Kuttippuram and Puthanathani, verifying their professional registration and credentials. Dr. Anjali Chandrasekhar (BHMS) provides confidential skin evaluations at Anjali Homoeo Clinic in Kuttippuram (20 km from Ponnani) and online. If you have a persistent, spreading, or complicated skin condition, consulting a dermatologist for definitive diagnosis and evidence-based treatment is advised.',
    },
    {
      q: 'What Skin Problems Require Medical Consultation?',
      a: 'Acne, eczema, psoriasis, skin allergies, pigmentation, fungal infections, recurrent boils, and persistent itching require medical assessment. A qualified healthcare professional can examine the rash, identify the underlying cause, and recommend suitable treatment rather than guessing based on online photos.',
    },
    {
      q: 'Is Homeopathic Skin Treatment Effective?',
      a: 'Homeopathy has not demonstrated reliable effectiveness for treating skin diseases in high-quality scientific clinical trials. While some patients explore homeopathy alongside lifestyle habits, it should not replace evidence-based dermatological treatment, especially for active infections, severe eczema, or psoriasis.',
    },
    {
      q: 'Can Homeopathy Treat Acne and Pimples?',
      a: 'There is no reliable scientific evidence that homeopathy effectively treats acne. Dermatologists recommend proven topical retinoids, benzoyl peroxide, or oral medications based on acne type and severity, which effectively control inflammation and minimize the risk of permanent scarring.',
    },
    {
      q: 'When Should I Visit a Skin Doctor in Ponnani?',
      a: 'Consult a qualified skin doctor or dermatologist if you have persistent itching that disrupts sleep, recurring rashes, painful skin lesions, severe cystic acne, unusual pigmentation patches, or symptoms that fail to improve. Seek emergency medical care for rapid facial swelling, difficulty breathing, or blistering with fever.',
    },
    {
      q: 'How Can I Prevent Common Skin Problems?',
      a: 'Use gentle, fragrance-free skincare products, moisturise regularly, protect your skin from intense sun exposure with SPF 30+ sunscreen, maintain good personal hygiene, and avoid sharing towels or personal items. Consult a doctor promptly when symptoms persist or worsen.',
    },
    {
      q: 'Can Skin Allergies Be Treated Without Identifying the Cause?',
      a: 'Identifying and avoiding the specific allergen trigger is the most critical part of managing allergic contact dermatitis. A healthcare professional may recommend patch testing, topical anti-inflammatories, or oral antihistamines depending on symptom severity.',
    },
    {
      q: 'How Do I Choose a Homoeopathic Doctor for Skin Problems in Ponnani?',
      a: 'Check the practitioner’s accredited qualifications (BHMS), state registration, and clinical experience. Discuss your symptoms and current medications openly. Inquire honestly about the evidence and limitations of any proposed treatment, and prioritize clinics that refer to dermatologists when needed.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Skin Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homeopathic Clinic Near Ponnani for Skin Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Dermatology Guide • Ponnani Patients"
        title="Homeopathic Clinic Near Ponnani for Skin Treatment"
        subtitle="Clinical guidance and evidence-informed consultations for patients in Ponnani, Edappal, and Malappuram experiencing acne, eczema, psoriasis, skin allergies, pigmentation, and recurring skin rashes."
        metrics={[
          { label: 'Condition Focus', value: 'Skin & Dermatology' },
          { label: 'Clinical Assessment', value: 'History & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Dermatology Triage & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential skin assessments, allergy evaluations, lifestyle guidance, and evidence-grounded constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Healthy skin plays an important role in our overall appearance, comfort and confidence. However, skin problems such as acne, itching, eczema, pigmentation, rashes, dryness and recurring infections can affect people of different age groups. These concerns may develop due to several factors, including genetics, hormonal changes, allergies, environmental exposure, infections and underlying health conditions. Finding the right medical guidance is important for understanding the cause of a skin problem and choosing an appropriate treatment.
          </p>
          <p>
            If you are searching for a <strong>Homeopathic Clinic near Ponnani for Skin Treatment</strong>, it is helpful to understand the available consultation options and the importance of proper skin evaluation. People looking for <strong>Skin Homeopathic Treatment in Ponnani</strong> may be interested in discussing their symptoms, medical history and general health concerns with a qualified homoeopathic practitioner.
          </p>
          <p>
            Skin conditions can vary considerably from one person to another. Some problems are temporary, while others may require long-term medical management. A proper consultation helps identify whether a condition needs dermatological assessment, conventional treatment or additional medical investigation.
          </p>
        </div>
      </section>

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#059669]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#059669] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Key Takeaways for Patients in Ponnani
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-white border border-[#D8E1F5] hover:border-[#059669]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
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

      {/* Section 1: Understanding Common Skin Problems */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DERMATOLOGICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Common Skin Problems
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The skin is the body's largest organ and acts as a protective barrier against environmental factors. It also helps regulate body temperature and provides sensory information. Because the skin is exposed to sunlight, pollution, allergens and microorganisms, it can develop various conditions.
            </p>
            <p>
              Some common skin concerns include:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                'Acne and pimples',
                'Eczema and dermatitis',
                'Psoriasis',
                'Skin allergies and rashes',
                'Itching and irritation',
                'Dry and sensitive skin',
                'Pigmentation and dark patches',
                'Fungal skin infections',
                'Recurrent boils and inflammation',
                'Excessive dryness and scaling',
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-center gap-2 text-xs font-medium text-[#1E2559]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="pt-2">
              The symptoms of these conditions may overlap. For example, redness and itching can occur with eczema, allergic reactions, fungal infections and other inflammatory skin disorders. Therefore, identifying the actual cause is essential before beginning treatment.
            </p>
            <p>
              People searching for <strong>Skin Problems Treatment in Ponnani</strong> should avoid relying only on photographs, online advice or self-medication. A healthcare professional can examine the affected area, understand the history of symptoms and recommend suitable next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose a Skin Consultation Near Ponnani? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              LOCAL CLINICAL ACCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Choose a Skin Consultation Near Ponnani?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Living with recurring skin problems can be uncomfortable. Persistent itching, visible patches, acne or inflammation may affect sleep, daily activities and self-confidence. Some people experience symptoms that improve temporarily but return after a few weeks or months.
            </p>
            <p>
              Seeking a consultation near your location can make it easier to discuss these concerns and attend follow-up appointments when necessary. A consultation at a <strong>Skin Homeopathy Clinic in Ponnani</strong> may involve discussing the history of the condition, previous treatments, lifestyle habits and other health concerns. A homoeopathic practitioner may ask questions about the duration and pattern of symptoms before discussing possible care options.
            </p>

            {/* Scientific Transparency Alert Box */}
            <div className="p-6 rounded-2xl bg-[#EEF2FB] border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Important Scientific Evidence & Safety Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    It is important to understand that homeopathy has not been shown through reliable scientific evidence to effectively treat skin diseases. It should not replace proven dermatological treatment or delay medical assessment. If you are looking for a <strong>Skin Doctor in Ponnani</strong>, choose a qualified healthcare professional who can identify when specialist dermatology care is required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Common Skin Conditions That Need Medical Attention */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DIAGNOSTIC PROFILES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Skin Conditions That Need Medical Attention
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Different skin conditions require different approaches. Understanding some common concerns can help people recognise when professional evaluation is necessary.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {commonConditions.map((cond, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#059669]/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                    Condition {cond.number}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg sm:text-xl">
                  {cond.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cond.desc}
                </p>

                <div className="pt-3 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cond.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What to Expect During a Homeopathic Skin Consultation? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Expect During a Homeopathic Skin Consultation?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              People interested in Skin Homeopathic Treatment in Ponnani may want to understand what happens during a consultation.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {consultationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#059669]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#059669] text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            <strong>Important Clinical Reminder:</strong> Homeopathic remedies have not demonstrated reliable effectiveness for treating skin diseases in high-quality clinical research. Patients should not stop prescribed medicines or postpone effective treatment in favour of homeopathy.
          </div>
        </div>
      </section>

      {/* Section 5: Homeopathy and Skin Health: What Should Patients Know? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              EVIDENCE & PATIENT SAFETY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathy and Skin Health: What Should Patients Know?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Homeopathy is an alternative system of medicine based on principles such as individualised remedy selection and highly diluted preparations. Some people choose to consult homoeopathic practitioners because they prefer a detailed discussion of their health concerns.
            </p>
            <p>
              However, there is no reliable scientific evidence that homeopathy can cure eczema, psoriasis, acne, fungal infections, pigmentation disorders or other skin diseases. Skin conditions may involve infection, inflammation, immune-system activity, hormonal changes or other medical causes. Using an ineffective treatment instead of appropriate care can allow symptoms to worsen.
            </p>
            <p>
              If you are considering a <strong>Homeopathy Clinic for Skin Problems in Ponnani</strong>, ask questions about the evidence for the proposed treatment and whether it could interact with existing medicines. Continue any prescribed treatment unless your treating doctor advises otherwise. A responsible approach to skin health prioritises accurate diagnosis, safe treatment and timely referral to a dermatologist.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: How to Maintain Healthy Skin */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PREVENTIVE HABITS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              How to Maintain Healthy Skin
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Along with appropriate medical care, healthy daily habits can support the skin's protective function and reduce irritation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {maintenanceTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#059669]/40 transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#059669]/15 text-[#059669] font-bold text-sm flex items-center justify-center">
                    {tip.number}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: When Should You Consult a Skin Specialist? */}
      <section className="py-14 sm:py-16 bg-[#FFF1F2] border-b border-[#FECDD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48] text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
                SAFETY WARNINGS & RED FLAGS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9F1239]">
                When Should You Consult a Skin Specialist?
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
            Not every skin concern is serious, but certain symptoms should not be ignored. Seek medical advice if you experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'A rash that spreads quickly or does not improve over several days',
              'Persistent itching that disrupts sleep or daily concentration',
              'Painful, swollen, or intensely inflamed skin patches',
              'Repeated skin infections or non-healing ulcers',
              'Pus, yellow crusting, foul discharge or other signs of bacterial infection',
              'Unexplained sudden changes in skin colour, thickness, or texture',
              'Acne that causes deep painful nodules, cysts, or permanent scarring',
              'A mole or pigmented spot that changes in size, shape, borders, or colour',
              'Skin symptoms accompanied by fever, chills, or generalized malaise',
            ].map((warn, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#FECDD3] flex items-start gap-2.5 text-xs sm:text-sm text-[#4C0519]">
                <AlertCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <span>{warn}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FECDD3] text-xs sm:text-sm text-[#881337] leading-relaxed">
            <strong>Emergency Alert:</strong> Seek urgent medical care if a rash is accompanied by difficulty breathing, swelling of the lips or tongue, faintness or other signs of a severe allergic reaction (anaphylaxis). Rapidly spreading redness, severe pain, fever or blistering also requires prompt emergency room assessment.
          </div>
        </div>
      </section>

      {/* Section 8: Choosing the Right Skin Health Clinic Near Ponnani */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINIC SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Choosing the Right Skin Health Clinic Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Selecting a healthcare provider is an important decision, particularly when dealing with recurring skin problems. Prioritise patient safety, professional qualifications and transparent communication rather than promises of guaranteed cures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {selectionFactors.map((fact, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#059669]/40 transition-all space-y-2"
              >
                <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                  {fact.number}
                </span>
                <h3 className="font-bold text-[#1E2559] text-base">
                  {fact.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Why Seek Guidance for Skin Problems Early? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              EARLY DIAGNOSIS BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Seek Guidance for Skin Problems Early?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Many skin conditions are easier to manage when they are identified early. Delaying medical assessment may allow inflammation, infection or scarring to become more severe.
            </p>
            <p>
              For example, untreated acne can lead to permanent scars, while some fungal infections may spread to nearby areas. Persistent eczema can cause skin cracking and secondary bacterial infections due to repeated scratching.
            </p>
            <p>
              Early assessment also helps distinguish between conditions with similar symptoms. This is particularly important when a rash keeps returning or does not respond to ordinary skincare measures. Whether you are exploring <strong>Skin Treatment in Ponnani</strong> or considering a consultation with a homoeopathic practitioner, make sure the care you choose is based on an appropriate diagnosis and does not delay proven medical treatment.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <MapPin className="w-4 h-4 text-[#059669]" />
                  <span>Kuttippuram Clinic (Near Ponnani)</span>
                </div>
                <p className="text-xs text-[#64748B]">
                  Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Keralam 679571
                </p>
                <p className="text-xs text-[#303A88] font-semibold">
                  Distance from Ponnani: ~20 km (25–30 mins drive)
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <Clock className="w-4 h-4 text-[#059669]" />
                  <span>Clinic Timings & Booking</span>
                </div>
                <p className="text-xs text-[#64748B]">
                  Monday to Saturday: 9:30 AM – 6:30 PM<br />
                  Sunday: 9:30 AM – 1:30 PM (By prior appointment)
                </p>
                <p className="text-xs text-[#10B981] font-semibold">
                  Confidential online video visits available across Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions (8 FAQs) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              DERMATOLOGY &amp; SKIN Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Skin Treatment
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Common questions answered by Dr. Anjali Chandrasekhar (BHMS) regarding skin conditions, diagnosis, and healthcare options.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-[#F8FAFD] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-[#1E2559] hover:bg-white transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] shrink-0 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 11: Related Regional Guides */}
      <RegionalRelatedGuides
        currentCity="Ponnani"
        currentCondition="Skin & Dermatology"
        categoryView="skin-hair-care"
      />

      {/* Section 12: Integrated Appointment Booking Engine */}
      <section id="booking-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#059669]">
              CONFIDENTIAL DOCTOR CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Book Your Skin Consultation with Dr. Anjali
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto">
              Choose a private online video consultation from home in Ponnani, or schedule an in-person clinic visit at Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>
    </div>
  );
};
