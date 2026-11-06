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
  Shield,
  Stethoscope,
  MapPin,
  Pill,
  Sun,
  Layers,
  Scissors,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const EczemaPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for eczema, skin redness, itching, and dermatitis care (Ponnani patient guide).'
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
    navigateToBookingWithReason('Eczema & Dermatitis Consultation - Ponnani', 'online');
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
      title: 'Group of Inflammatory Conditions',
      desc: 'Eczema is a group of inflammatory skin conditions that can cause itching, dryness, redness, and irritation across all age groups.',
    },
    {
      title: 'Atopic Dermatitis Prevalence',
      desc: 'Atopic dermatitis is one of the most common forms of eczema, frequently presenting alongside asthma or allergic rhinitis.',
    },
    {
      title: 'Multifactorial Flare Triggers',
      desc: 'Allergens, irritants, weather changes, emotional stress, and skin barrier dysfunction may contribute to recurring flare-ups.',
    },
    {
      title: 'Non-Contagious Nature',
      desc: 'Eczema is not contagious and cannot spread through touch, shared clothing, or ordinary physical contact.',
    },
    {
      title: 'Skin Barrier Support',
      desc: 'Regular moisturising with fragrance-free emollients and avoiding personal triggers can significantly support skin comfort.',
    },
    {
      title: 'Scientific Evidence Transparency',
      desc: 'There is insufficient reliable scientific evidence that homoeopathy cures eczema or reliably controls inflammatory flare-ups.',
    },
    {
      title: 'Evidence-Based Medical Therapies',
      desc: 'Evidence-based treatments include emollients, topical corticosteroids, calcineurin inhibitors, and prescription therapies.',
    },
    {
      title: 'Medical Attention Signs',
      desc: 'Severe itching, painful deep cracks, spreading redness, pus, yellow crusting, or fever require prompt medical attention.',
    },
  ];

  // 5 Common Types of Eczema
  const eczemaTypes = [
    {
      number: '01',
      title: 'Atopic Dermatitis',
      badge: 'Most Common & Allergic Triad',
      desc: 'Atopic dermatitis is a common form of eczema that often begins during childhood but can also develop in adults. It causes dry, itchy and inflamed skin, frequently affecting the face, neck, hands, elbows and knees.',
      clinicalDetails: 'People with atopic dermatitis frequently have a personal or family history of the atopic triad: asthma, allergic rhinitis (hay fever), and food allergies.',
    },
    {
      number: '02',
      title: 'Contact Dermatitis',
      badge: 'Irritant & Allergic Triggers',
      desc: 'Contact dermatitis develops when the skin reacts to an irritating or allergenic substance, causing localized redness, burning, stinging, and itching upon exposure.',
      clinicalDetails: 'Common triggers include soaps, detergents, perfumes, cosmetics, hair dyes (PPD), cleaning chemicals, and certain workplace metals (like nickel). Identifying and eliminating triggers is paramount.',
    },
    {
      number: '03',
      title: 'Seborrhoeic Dermatitis',
      badge: 'Sebum-Rich Zones',
      desc: 'Seborrhoeic dermatitis commonly affects oily areas such as the scalp, eyebrows, sides of the nose and behind the ears. It may cause redness, itching and greasy or flaky scales.',
      clinicalDetails: 'Scalp symptoms are sometimes mistaken for ordinary dandruff, so persistent flaking and inflammation require professional differential evaluation.',
    },
    {
      number: '04',
      title: 'Dyshidrotic Eczema',
      badge: 'Palms, Fingers & Soles',
      desc: 'Dyshidrotic eczema causes small, deeply situated, intensely itchy fluid-filled blisters (pompholyx), usually on the palms, fingers and soles of the feet.',
      clinicalDetails: 'The affected skin may later peel, become dry, cracked, and intensely uncomfortable, especially when exposed to water or friction.',
    },
    {
      number: '05',
      title: 'Nummular Eczema',
      badge: 'Coin-Shaped Plaques',
      desc: 'Nummular (discoid) eczema causes distinct round or coin-shaped patches of irritated skin. These areas may become itchy, dry, scaly or occasionally develop oozing lesions.',
      clinicalDetails: 'A healthcare professional can help distinguish nummular eczema from fungal ringworm infections (tinea corporis) and psoriasis that look similar.',
    },
  ];

  // 5 Evidence-Based Medical Treatment Options
  const medicalTreatments = [
    {
      icon: <Droplets className="w-5 h-5 text-[#303A88]" />,
      title: 'Moisturisers & Emollients',
      desc: 'Regular moisturising is one of the most vital foundations of eczema management. Emollients reduce transepidermal water loss, repair the epidermal lipid barrier, and soothe roughness. Fragrance-free ointments or thick creams applied immediately after bathing provide optimal protection.',
    },
    {
      icon: <Pill className="w-5 h-5 text-[#0D9488]" />,
      title: 'Topical Corticosteroids',
      desc: 'Doctors prescribe topical corticosteroid creams or ointments to rapidly reduce inflammation and itching during acute flare-ups. The strength, vehicle, and duration of use are carefully tailored to the affected anatomical site (e.g., lower potency on face and folds) under medical guidance.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#8B5CF6]" />,
      title: 'Topical Calcineurin Inhibitors',
      desc: 'Prescription non-steroidal creams such as tacrolimus and pimecrolimus may be recommended for sensitive areas like the eyelids, face, neck, and skin folds where prolonged topical corticosteroid use could cause skin thinning.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#D97706]" />,
      title: 'Antihistamines for Symptom Support',
      desc: 'Specific antihistamines may be advised to alleviate nocturnal itching and improve sleep quality during severe flares. These medications support symptom comfort but do not treat the underlying cuticular inflammation directly.',
    },
    {
      icon: <Sun className="w-5 h-5 text-rose-600" />,
      title: 'Advanced Therapies for Severe Cases',
      desc: 'Moderate to severe eczema that fails to respond adequately to standard topical therapies may require dermatologist-supervised phototherapy (narrowband UVB) or prescription systemic immunomodulators and biologic therapies.',
    },
  ];

  // 7 Daily Skin Care Tips
  const dailyCareTips = [
    {
      title: '1. Use Gentle, Soap-Free Cleansers',
      desc: 'Choose mild, fragrance-free, lipid-replenishing syndet cleansers instead of harsh alkaline soaps that strip natural skin oils.',
    },
    {
      title: '2. Moisturise Regularly & Generously',
      desc: 'Apply a suitable thick emollient several times a day, especially within 3 minutes of bathing while the skin retains hydration.',
    },
    {
      title: '3. Avoid Scratching to Protect the Barrier',
      desc: 'Scratching damages the epidermal barrier and increases secondary bacterial infection risk. Keep fingernails trimmed short and consider cotton mittens at night.',
    },
    {
      title: '4. Wear Soft, Breathable Clothing',
      desc: 'Choose soft, 100% cotton or breathable fabrics. Avoid coarse wool, synthetic polyester, and tight garments that create friction and trap heat.',
    },
    {
      title: '5. Identify & Eliminate Personal Triggers',
      desc: 'Keep note of personal triggers—such as synthetic fragrances, chemical detergents, pet dander, or sudden temperature shifts—and systematically avoid them.',
    },
    {
      title: '6. Take Short, Lukewarm Baths',
      desc: 'Very hot water dissolves protective epidermal lipids and worsens dryness. Keep baths or showers brief (5–10 minutes) using lukewarm water.',
    },
    {
      title: '7. Protect Your Skin from Chemical Irritants',
      desc: 'Wear cotton-lined rubber or vinyl gloves when handling laundry detergents, household cleaning agents, or harsh workplace chemicals.',
    },
  ];

  // 5 Steps of Consultation
  const consultationSteps = [
    {
      step: '01',
      title: 'Initial Discussion & Symptom Review',
      desc: 'The consultation begins with a detailed explanation of your primary skin concerns, including itching intensity, dryness, redness, burning sensations, and recurring patch distribution.',
    },
    {
      step: '02',
      title: 'Comprehensive Health & Product History',
      desc: 'The practitioner reviews past dermatological diagnoses, personal or family history of atopic diseases (asthma, allergic rhinitis), lifestyle habits, and ongoing medications.',
    },
    {
      step: '03',
      title: 'Identifying Individual Triggers',
      desc: 'Daily environmental exposures such as soaps, detergents, cosmetics, fragrances, heat, perspiration, seasonal changes, and workplace chemical contacts are evaluated.',
    },
    {
      step: '04',
      title: 'Transparent Care Guidance & Triage',
      desc: 'The doctor explains appropriate next steps and recognizes when immediate dermatological evaluation is needed. If complementary constitutional homoeopathy is discussed, its clinical limitations are communicated clearly.',
    },
    {
      step: '05',
      title: 'Structured Follow-Up & Monitoring',
      desc: 'Because eczema is often recurring, scheduled reviews help track symptom changes, monitor skin barrier recovery, and determine if specialist diagnostic tests are required.',
    },
  ];

  // 7 Selection Criteria for Clinic
  const selectionCriteria = [
    {
      num: '01',
      title: 'Professional Qualifications',
      desc: 'Verify the doctor’s accredited education (BHMS, MD Hom.) and active state medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Detailed Clinical Consultation',
      desc: 'Choose a clinic that spends adequate time evaluating your rash history, flare patterns, and lifestyle triggers.',
    },
    {
      num: '03',
      title: 'Clear & Honest Communication',
      desc: 'Treatment benefits, limitations, and realistic expectations must be explained without misleading claims.',
    },
    {
      num: '04',
      title: 'Individualised Assessment',
      desc: 'Eczema care should be tailored to the specific subtype, clinical severity, and affected anatomical areas.',
    },
    {
      num: '05',
      title: 'Specialist Dermatological Referrals',
      desc: 'A responsible practitioner recognizes when conventional dermatology, patch testing, or biopsy is necessary.',
    },
    {
      num: '06',
      title: 'Patient Safety & Ethical Care',
      desc: 'Avoid clinics promising guaranteed cures, instant eradication, or advising you to discard prescribed medicines.',
    },
    {
      num: '07',
      title: 'Structured Follow-Up Support',
      desc: 'Recurring eczema requires consistent medical monitoring and ongoing guidance to prevent flares.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'What causes eczema?',
      a: 'Eczema is associated with skin barrier dysfunction, genetic factors (such as filaggrin gene mutations), and immune-system hyperactivity. Environmental irritants, synthetic fragrances, allergens, climate shifts, and emotional stress may trigger or aggravate flare-ups.',
    },
    {
      q: 'Is eczema contagious?',
      a: 'No. Eczema is completely non-contagious. It cannot spread through touching, hugging, sharing clothes, or ordinary physical contact.',
    },
    {
      q: 'Is Homoeopathic Eczema Treatment in Ponnani effective?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy effectively treats or cures eczema. It should not replace established medical diagnosis, emollients, and prescribed dermatological treatments.',
    },
    {
      q: 'Can eczema be permanently cured?',
      a: 'There is no single permanent cure for all types of eczema. However, with appropriate medical treatment, trigger avoidance, and consistent skin barrier repair, many individuals achieve long periods of remission and effective symptom control.',
    },
    {
      q: 'Can stress worsen eczema?',
      a: 'Yes. Psychological stress releases inflammatory neuropeptides and cortisol that can lower the itch threshold and trigger or exacerbate eczema flare-ups. Stress management and healthy sleep support general health, but do not replace medical therapies.',
    },
    {
      q: 'Can eczema affect the scalp?',
      a: 'Yes. Certain eczema-related conditions, notably seborrhoeic dermatitis and allergic contact dermatitis from hair dyes or shampoos, can affect the scalp and hairline, producing itching, redness, and flaky scales.',
    },
    {
      q: 'What is the best moisturiser for eczema?',
      a: 'Thick, fragrance-free creams or lipid-rich ointments (such as those containing ceramides, white soft paraffin, or liquid paraffin) are generally best for dry, eczema-prone skin. A doctor can recommend an emollient tailored to your skin type.',
    },
    {
      q: 'When should I consult an Eczema Doctor in Ponnani?',
      a: 'Seek professional medical advice if your symptoms are persistent, severe, spreading, disrupting sleep, or interfering with work. Any sign of secondary infection—such as pus, crusting, or fever—requires urgent medical assessment.',
    },
    {
      q: 'Can eczema leave dark marks?',
      a: 'Yes. Inflammation and repeated scratching can cause post-inflammatory hyperpigmentation (PIH), causing temporary or persistent darker marks, particularly in melanin-rich South Asian skin tones. Controlling inflammation and avoiding scratching helps prevent further marks.',
    },
    {
      q: 'How can I prevent eczema flare-ups?',
      a: 'Regular moisturising multiple times a day, avoiding known chemical irritants and harsh soaps, taking brief lukewarm baths, wearing breathable cotton fabrics, and adhering to prescribed medical guidance help minimize flare-ups.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Eczema Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Eczema Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Skin Health Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Eczema Treatment"
        subtitle="Clinical evaluation and evidence-grounded consultations for patients in Ponnani, Edappal, and Malappuram district dealing with persistent eczema, atopic dermatitis, skin itching, dryness, redness, and recurring inflammation."
        metrics={[
          { label: 'Clinical Focus', value: 'Eczema & Dermatitis' },
          { label: 'Assessment', value: 'History & Trigger Triage' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Skin Care Triage & Constitutional Consultations"
        doctorBio="10+ years of dedicated clinical experience conducting confidential dermatological assessments, chronic eczema reviews, lifestyle guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Healthy skin plays an important role in protecting the body and maintaining everyday comfort. However, skin conditions such as eczema can cause persistent itching, dryness, redness, irritation and inflammation. These symptoms may affect different parts of the body, including the face, hands, arms, legs, neck and scalp. For some individuals, eczema is a recurring problem that can interfere with sleep, work and daily activities.
          </p>
          <p>
            Eczema is a group of inflammatory skin conditions that can affect children and adults. Symptoms may vary from mild dryness to severe itching, cracked skin and inflamed patches. Although eczema is not contagious, recurring flare-ups can be uncomfortable and emotionally challenging.
          </p>
          <p>
            If you are searching for a <strong>Homoeopathic Clinic in Ponnani for Eczema Treatment</strong>, choosing a qualified healthcare professional who understands your symptoms and medical history is an important first step. A detailed consultation can help identify possible triggers and determine whether further medical evaluation is required.
          </p>
          <p>
            Our clinic welcomes individuals who wish to discuss recurring skin concerns through a personalised consultation. We believe in understanding individual symptoms, reviewing relevant health information and providing clear guidance about appropriate care options.
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
              Key Takeaways: Eczema Care in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking eczema and dermatitis treatment.
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

      {/* Understanding Eczema and Its Symptoms */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PATHOPHYSIOLOGY &amp; MANIFESTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Understanding Eczema and Its Symptoms
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Eczema is a condition involving inflammation and disruption of the skin barrier. When the protective epidermal lipid barrier is compromised, the skin loses moisture more easily, becomes excessively dry, and reacts intensely to environmental allergens or irritants.
            </p>
            <p>
              People looking for <strong>Eczema Treatment in Ponnani</strong> may experience different symptoms depending on the type and severity of eczema:
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              Common Symptoms Evaluated:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Persistent, intense itching that may worsen at night.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Dry, rough, and cracked skin barrier.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Red, brown, grey or darker inflamed erythematous patches.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Skin peeling, excoriation, and fine or coarse scaling.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Small papular bumps or fluid-filled vesicular blisters.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Cracked, fissured, or thickened skin (lichenification).</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Burning, stinging, or raw cutaneous sensations.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Skin irritation and immediate flare after contact with certain products.</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-2 text-xs sm:text-sm text-[#475569]">
              <p>
                Symptoms may come and go. Some individuals experience occasional flare-ups, while others have recurring inflammation that requires long-term management.
              </p>
              <p className="font-semibold text-[#1E2559]">
                Important Public Health Fact: Eczema is not caused by poor hygiene. It is also not contagious, so it cannot spread from one person to another through touching, sharing a room, or normal social contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Types of Eczema (5 Cards) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL SUBTYPES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Types of Eczema
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Understanding the specific type of eczema is essential because different forms require distinct management approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eczemaTypes.map((item, idx) => (
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

      {/* Homoeopathic Eczema Treatment in Ponnani (Evidence & Disclosure) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Eczema Treatment in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              People searching for <strong>Homoeopathic Eczema Treatment in Ponnani</strong> may be interested in discussing their recurring skin concerns through an individual consultation.
            </p>
            <p>
              Homoeopathy is a system of complementary medicine that uses highly diluted preparations selected according to an individual's reported symptoms and health history. A consultation may involve questions about itching, dryness, skin sensitivity, previous treatments, general health and lifestyle.
            </p>
          </div>

          {/* Critical Evidence Disclosure Notice */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure &amp; Patient Safety Notice
                </h4>
                <p>
                  However, it is important to understand the scientific limitations of homoeopathy. <strong>There is insufficient reliable clinical evidence that homoeopathic medicines can cure eczema, repair the skin barrier or reliably prevent recurring flare-ups</strong>.
                </p>
                <p className="font-semibold text-amber-950">
                  Homoeopathy should NOT replace established medical treatment, particularly when eczema is severe, infected or affecting a large area of the body. A responsible approach involves identifying the type of eczema, understanding possible triggers and discussing evidence-based treatment options with a qualified healthcare professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consult an Eczema Doctor in Ponnani? */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DIFFERENTIAL ASSESSMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Why Consult an Eczema Doctor in Ponnani?
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Eczema can sometimes resemble other skin conditions, including fungal infections (tinea), psoriasis, scabies, and acute allergic contact dermatitis. Using an unsuitable cream or steroid ointment on a fungal infection may cause "tinea incognito," worsening symptoms or delaying recovery.
            </p>
            <p>
              Consulting a qualified <strong>Eczema Doctor in Ponnani</strong> helps assess your skin concerns and determine whether further examination, patch testing, or specialist care is needed:
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#303A88]" />
              Factors Evaluated During a Clinical Eczema Assessment:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>When the skin symptoms first appeared and how rapidly they evolved.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Which body areas are affected (flexural folds, hands, face, or trunk).</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether itching becomes worse at night and interferes with sleep.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether symptoms are episodic flare-ups or continuous inflammation.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Products, soaps, cosmetics, or chemicals that trigger irritation.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Previous skin conditions, allergies, and response to earlier treatments.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Personal or family history of atopic eczema, asthma, or hay fever.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Medicines and skincare formulations currently being applied.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Whether the skin has developed deep fissures, cracks, oozing sores, or yellow crusts.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Depending on symptoms, a dermatologist may perform skin scrapings to exclude fungal infection, skin prick tests, or patch testing for contact allergies.
            </p>
          </div>
        </div>
      </section>

      {/* Eczema Homoeopathy Clinic in Ponnani: What to Expect (5 Steps) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CONSULTATION WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Eczema Homoeopathy Clinic in Ponnani: What to Expect
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            If you are considering an <strong>Eczema Homoeopathy Clinic in Ponnani</strong>, understanding the 5-step consultation workflow helps you prepare:
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
        </div>
      </section>

      {/* Eczema Problem Treatment in Ponnani: Available Medical Options */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              EVIDENCE-BASED OPTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Eczema Problem Treatment in Ponnani: Available Options
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              The right eczema treatment depends entirely on the type, severity, affected body regions, and individual medical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalTreatments.map((item, idx) => (
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

      {/* Eczema Issues Treatment in Ponnani: Daily Skin Care Tips (7 Practices) */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DAILY PROTOCOLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Eczema Issues Treatment in Ponnani: Daily Skin Care Tips
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A consistent skincare routine can significantly reduce irritation and support the epidermal barrier. Incorporate these evidence-backed practices:
          </p>

          <div className="space-y-3">
            {dailyCareTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#D8E1F5] shadow-sm"
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
        </div>
      </section>

      {/* Eczema Health Clinic in Ponnani: Long-Term Skin Health */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CHRONIC MANAGEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Eczema Health Clinic in Ponnani: Long-Term Skin Health
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              A suitable <strong>Eczema Health Clinic in Ponnani</strong> encourages patients to understand their condition and participate actively in long-term skin health. Eczema is often a chronic, relapsing disorder with symptoms fluctuating based on weather, seasonal changes, emotional stress, and allergen exposure.
            </p>
            <p>
              Managing eczema successfully involves much more than applying cream during an acute breakout:
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#303A88]" />
              Core Pillars of Long-Term Eczema Care:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Proactively repairing and maintaining the skin lipid barrier.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Identifying and systematically avoiding individual environmental triggers.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Following prescribed topical medical treatments correctly and safely.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Avoiding unnecessary or abrasive skincare and herbal concoctions.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Monitoring changes in affected skin patches over seasons.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Seeking timely medical advice when early symptoms worsen.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#E2E8F0] sm:col-span-2">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Early recognition of secondary bacterial or viral infection signs.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              With structured care and consistent barrier maintenance, many people effectively control their symptoms, minimize flare frequency, and improve daily quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Hair and Eczema Treatment in Ponnani (Scalp Involvement) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SCALP &amp; HAIRLINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Hair and Eczema Treatment in Ponnani
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Eczema may affect areas of the scalp and hairline, particularly in conditions such as seborrhoeic dermatitis and allergic contact dermatitis.
            </p>
            <p>
              People searching for <strong>Hair and Eczema Treatment in Ponnani</strong> frequently report scalp itching, redness, dryness, flaky scaling, or burning following hair care products:
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-[#303A88]" />
              Common Contributing Scalp Factors:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Allergic contact reactions to hair dyes (particularly paraphenylenediamine / PPD).</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Fragrances and harsh surfactants in shampoos and conditioners.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Seborrhoeic dermatitis with greasy yellow scales along the hairline.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Contact allergies to hair oils, leave-in gels, and styling pomades.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Not all scalp flaking is eczema. Scalp psoriasis and fungal infections (tinea capitis) can cause similar symptoms, so an accurate clinical diagnosis is essential. If scalp irritation is persistent or associated with patchy hair loss, consult a dermatologist for appropriate evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing the Right Eczema Care Clinic in Ponnani (7 Criteria) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Choosing the Right Eczema Care Clinic in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Selecting an appropriate eczema clinic involves verifying credentials, diagnosis methodology, and referral ethics.
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
            If you are looking for a Homoeopathy Clinic for Eczema Problems in Ponnani, make sure the healthcare provider encourages appropriate medical diagnosis and does not advise stopping prescribed treatment without consulting your treating doctor.
          </div>
        </div>
      </section>

      {/* When Should You Consult an Eczema Specialist in Ponnani? (Warning Signs) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              WARNING SIGNS &amp; RED FLAGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              When Should You Consult an Eczema Specialist in Ponnani?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            While mild temporary dryness can often be managed with daily emollients, certain clinical warning signs require prompt consultation with an <strong>Eczema Specialist in Ponnani</strong> or dermatologist:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Persistent, intense itching that disrupts sleep and daily focus.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Widespread, progressive, or rapidly worsening skin inflammation.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Deep cutaneous fissures, cracks, bleeding, or weeping fluid.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Repeated flare-ups despite standard over-the-counter moisturiser use.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Painful, hot, or severely swollen skin indicating acute cellulitis.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Eczema affecting the face, eyelids, or sensitive genital regions.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Symptoms that severely interfere with education, work, or emotional health.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Uncertainty about whether the condition is eczema or a fungal ringworm infection.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium space-y-2">
            <p>
              <strong>Secondary Infection Alert:</strong> Seek prompt medical care if the skin develops yellow crusting, pus-filled blisters, rapidly spreading redness, increasing pain, or fever.
            </p>
            <p>
              <strong>Urgent Eczema Herpeticum Warning:</strong> Painful clusters of small fluid-filled blisters or punched-out sores, especially accompanied by fever, require immediate emergency hospital care as eczema herpeticum (viral herpes simplex infection on eczema) is a potentially sight-threatening and systemic medical emergency.
            </p>
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
              Frequently Asked Questions: Eczema Treatment in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear, transparent clinical answers to common patient questions regarding eczema, dermatitis, treatments, and barrier care.
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

      {/* Book an Eczema Consultation in Ponnani (Closing CTA & Booking Engine) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Book an Eczema Consultation in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Recurring eczema can affect skin comfort, sleep, confidence and everyday activities. Whether you experience dryness, itching, redness, irritation or recurring inflamed patches, understanding the underlying condition is an important first step.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              If you are searching for <strong>Eczema Treatment in Ponnani</strong>, consider consulting a qualified healthcare professional who can listen to your concerns, review your health history and guide you towards appropriate care.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Whether you are looking for a <strong>Homoeopathic Doctor for Eczema Problems in Ponnani</strong>, exploring complementary healthcare or seeking guidance for recurring skin irritation, make informed decisions with the support of qualified healthcare professionals.
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
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated consultation slot for eczema assessment and barrier management guidance.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="eczema-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Eczema & Dermatitis"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
