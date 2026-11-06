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
  Info,
  Stethoscope,
  Utensils,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const SkinKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for skin treatment near Kuttippuram (acne, eczema, psoriasis, rashes).'
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
    navigateToBookingWithReason('Skin Health Consultation - Kuttippuram', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 7 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Multifactorial Etiology',
      desc: 'Skin problems can develop due to infections, allergies, chronic inflammation, hormonal changes and underlying medical conditions.',
    },
    {
      title: 'Diverse Treatment Approaches',
      desc: 'Acne, eczema, psoriasis, fungal infections and contact dermatitis require fundamentally distinct, condition-specific treatment plans.',
    },
    {
      title: 'Mandatory Clinical Evaluation',
      desc: 'Persistent itching, spreading rashes, painful skin lesions and recurring infections must always be medically assessed rather than self-treated.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homeopathy has not been established by reliable scientific evidence as an effective curative treatment for skin diseases or infections.',
    },
    {
      title: 'No Delay in Conventional Care',
      desc: 'Evidence-based dermatological treatment should never be delayed or replaced with unproven remedies, especially for active infections.',
    },
    {
      title: 'Steroid & Combination Cream Warning',
      desc: 'Avoid using steroid creams, triple-combination creams or medicated OTC products without medical advice to prevent skin thinning and aggravated infections.',
    },
    {
      title: 'Skin Barrier Protection',
      desc: 'Healthy skincare habits, regular moisturising, sun protection (SPF 30+) and strict hygiene support general skin recovery and barrier integrity.',
    },
  ];

  // 6 Common Skin Problems
  const commonProblems = [
    {
      number: '01',
      title: '1. Acne and Pimples',
      badge: 'Sebaceous Follicular Disease',
      desc: 'Acne develops when hair follicles become plugged with excess sebum and dead keratinocytes, allowing Cutibacterium acnes bacteria to proliferate and trigger inflammation. Lesions range from comedones (blackheads and whiteheads) to inflammatory papules, pustules, cysts, and permanent scarring.',
      causes: [
        'Hormonal fluctuations during adolescence, menstrual cycles, or PCOS',
        'Excess sebaceous gland sebum production',
        'Abnormal follicular hyperkeratinization (blocked pores)',
        'Certain medications (corticosteroids, lithium, androgens)',
        'Genetic predisposition and systemic inflammation',
      ],
      treatments:
        'Evidence-based dermatological options include topical retinoids (adapalene, tretinoin), benzoyl peroxide, azelaic acid, topical/oral antibiotics, and oral isotretinoin for severe nodulocystic acne under specialist supervision.',
    },
    {
      number: '02',
      title: '2. Eczema (Atopic & Contact Dermatitis)',
      badge: 'Inflammatory Skin Barrier Disorder',
      desc: 'Eczema refers to a spectrum of non-contagious inflammatory skin conditions characterized by an impaired epidermal permeability barrier, intense pruritus (itching), erythema, flaking, cracking, and lichenification (skin thickening from chronic scratching).',
      causes: [
        'Genetic filaggrin mutations compromising the epidermal moisture barrier',
        'Immune hyperreactivity to environmental allergens and irritants',
        'Dry, sensitive skin prone to transepidermal water loss',
        'Triggers such as harsh detergents, synthetic clothing, and climate extremes',
      ],
      treatments:
        'Management focuses on frequent ceramide-based moisturisation, gentle non-soap cleansers, trigger avoidance, and short-course prescribed topical anti-inflammatory agents (corticosteroids or calcineurin inhibitors).',
    },
    {
      number: '03',
      title: '3. Psoriasis',
      badge: 'Immune-Mediated Inflammatory Disorder',
      desc: 'Psoriasis is a chronic autoimmune condition where dysregulated T-lymphocytes accelerate epidermal skin cell turnover from 28 days down to 3–5 days. This causes thick, erythematous plaques covered with silvery-white scales to accumulate on the elbows, knees, scalp, lumbosacral region, and nails.',
      causes: [
        'Genetic susceptibility and systemic immune dysregulation',
        'Triggers including physical skin trauma (Koebner phenomenon), stress, and streptococcal infections',
        'Not contagious and cannot spread between individuals',
        'Associated risk of psoriatic arthritis affecting peripheral and spinal joints',
      ],
      treatments:
        'Dermatological therapies include topical vitamin D analogues, topical corticosteroids, keratolytics (salicylic acid), narrow-band UVB phototherapy, and systemic or biologic therapies for moderate-to-severe disease.',
    },
    {
      number: '04',
      title: '4. Fungal Skin Infections (Tinea / Ringworm)',
      badge: 'Dermatophyte Fungal Infection',
      desc: 'Fungal infections develop when microscopic dermatophyte fungi (Trichophyton, Microsporum, Epidermophyton) infect keratinized tissues of the body (tinea corporis), groin (tinea cruris / jock itch), feet (tinea pedis / athlete’s foot), scalp (tinea capitis), or nails (tinea unguium).',
      causes: [
        'Direct physical contact with infected individuals or animals',
        'Sharing contaminated towels, bedsheets, combs, clothes, or footwear',
        'Warm, humid coastal climates with heavy perspiration and occlusive footwear',
        'Ringworm is entirely fungal and NOT caused by any worm or parasite',
      ],
      treatments:
        'Requires topical antifungal creams (terbinafine, clotrimazole) applied 1–2 weeks past rash resolution. Scalp ringworm (tinea capitis) and fungal nail infections strictly require prescription systemic oral antifungals.',
    },
    {
      number: '05',
      title: '5. Skin Allergies & Contact Dermatitis',
      badge: 'Irritant & Allergic Hypersensitivity',
      desc: 'Contact dermatitis occurs when the skin comes into contact with an external irritant (toxic damage to the skin barrier) or an allergen (Type IV delayed hypersensitivity reaction). It produces acute redness, swelling, intense itching, and weeping microvesicles.',
      causes: [
        'Irritants: Harsh soaps, solvents, bleaches, detergents, and industrial chemicals',
        'Allergens: Nickel in jewellery, fragrances, preservatives, hair dyes (PPD), and adhesives',
        'Topical cosmetic ingredients or plants',
      ],
      treatments:
        'Immediate identification and strict avoidance of the offending substance, cool compresses, barrier ointments, and short-term prescribed topical anti-inflammatory creams for acute flare-ups.',
    },
    {
      number: '06',
      title: '6. Pigmentation & Dark Spots',
      badge: 'Melanin Dysregulation',
      desc: 'Hyperpigmentation occurs when melanocytes overproduce melanin in localized areas. Common presentations include melasma (symmetrical brown patches on cheeks and forehead), post-inflammatory hyperpigmentation (PIH following acne or eczema), and sun-induced lentigines.',
      causes: [
        'Ultraviolet (UV) radiation and visible light stimulating melanogenesis',
        'Hormonal fluctuations during pregnancy (chloasma) or oral contraceptive use',
        'Residual inflammation from healed acne lesions or skin trauma',
      ],
      treatments:
        'Daily broad-spectrum high-SPF sun protection, topical tyrosinase inhibitors (azelaic acid, kojic acid, tranexamic acid), topical retinoids, and dermatologist-guided chemical peels or laser procedures.',
    },
  ];

  // What Causes Skin Problems?
  const causesAndEtiology = [
    {
      title: 'Hormonal Changes',
      desc: 'Hormonal shifts during puberty, menstrual cycles, pregnancy, and conditions such as PCOS alter sebum excretion and skin sensitivity, driving acne breakouts and pigmentation.',
      icon: Activity,
    },
    {
      title: 'Allergens & Environmental Irritants',
      desc: 'Dust, pollen, harsh cleaning detergents, synthetic perfumes, cosmetics, and industrial chemicals trigger inflammatory cascades and barrier breakdown.',
      icon: AlertCircle,
    },
    {
      title: 'Bacterial, Viral & Fungal Pathogens',
      desc: 'Pathogenic bacteria (Staphylococcus, Streptococcus), viruses (Herpes, HPV), and dermatophyte fungi require precise pathogen-targeted medical treatments.',
      icon: ShieldAlert,
    },
    {
      title: 'Genetic & Immune Factors',
      desc: 'Genetic polymorphisms in filaggrin and T-cell mediated autoimmune pathways underlie chronic diseases such as atopic dermatitis and plaque psoriasis.',
      icon: Heart,
    },
    {
      title: 'Lifestyle & Environmental Triggers',
      desc: 'Intense ultraviolet radiation, coastal humidity, environmental air pollutants, psychological stress, and smoking disrupt skin barrier repair mechanisms.',
      icon: Compass,
    },
  ];

  // 6 Selection Criteria for a Skin Doctor
  const selectionCriteria = [
    {
      number: '01',
      title: 'Recognized Medical Qualifications',
      desc: 'Verify that the healthcare practitioner possesses accredited medical degrees (such as BHMS) and is formally registered with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Accurate Differential Diagnosis',
      desc: 'Choose a provider who thoroughly examines skin lesions under proper lighting and distinguishes between fungal infections, eczema, and psoriasis before recommending treatment.',
    },
    {
      number: '03',
      title: 'Appropriate Diagnostic Testing',
      desc: 'Ensure the practitioner recommends diagnostic investigations such as KOH fungal scrapings, skin biopsies, or blood tests when clinical signs are atypical.',
    },
    {
      number: '04',
      title: 'Transparent Scientific Communication',
      desc: 'Look for honest practitioners who openly disclose the evidence base and limitations of supportive remedies rather than promising unrealistic miraculous cures.',
    },
    {
      number: '05',
      title: 'Established Dermatologist Referral',
      desc: 'A responsible clinic maintains prompt referral relationships with consultant dermatologists for biopsy, phototherapy, or prescription pharmaceuticals.',
    },
    {
      number: '06',
      title: 'Structured Follow-Up & Monitoring',
      desc: 'Regular review visits are vital to track lesion resolution, monitor adverse reactions, and modify skincare strategies as the skin barrier heals.',
    },
  ];

  // Important Considerations Checklist
  const importantConsiderations = [
    'Obtain an accurate clinical diagnosis rather than assuming that every red, itchy patch is a simple allergy.',
    'Ask transparently about the reliable scientific evidence supporting any suggested complementary therapy.',
    'Avoid unverified remedies advertised online as guaranteed cures for chronic eczema or psoriasis.',
    'Never discontinue prescribed dermatological medicines, antifungal tablets, or ointments without medical advice.',
    'Avoid applying unverified botanical pastes, garlic, caustic herbs, or harsh chemicals to inflamed or broken skin.',
    'Seek prompt medical assessment if a rash begins spreading rapidly, becomes painful, or fails to improve within expected timelines.',
  ];

  // Specific Medical Plans (Why Diagnosis Matters)
  const diagnosisMattersList = [
    {
      condition: 'Acne & Pimples',
      approach: 'Benzoyl peroxide, topical retinoids (adapalene), azelaic acid, or systemic antibiotics to prevent permanent pitted scarring.',
    },
    {
      condition: 'Eczema & Dermatitis',
      approach: 'Ceramide-rich barrier emollients, gentle non-foaming cleansers, and short courses of prescribed topical anti-inflammatory creams.',
    },
    {
      condition: 'Plaque Psoriasis',
      approach: 'Topical vitamin D analogues, keratolytics, narrow-band UVB phototherapy, or systemic biologic therapies prescribed by a dermatologist.',
    },
    {
      condition: 'Fungal Infections (Tinea)',
      approach: 'Topical or systemic oral antifungal medications (terbinafine, clotrimazole) to completely eradicate fungal hyphae from skin or nails.',
    },
    {
      condition: 'Contact Dermatitis',
      approach: 'Immediate identification and avoidance of offending allergens/irritants combined with protective barrier repair.',
    },
    {
      condition: 'Pigmentation & Melasma',
      approach: 'Daily broad-spectrum high-SPF sunscreen, topical tyrosinase inhibitors, and dermatologist-supervised procedures.',
    },
  ];

  // Healthy Skincare Habits
  const healthyHabits = [
    {
      title: 'Follow a Gentle Skincare Routine',
      desc: 'Use mild, fragrance-free, soap-free cleansers suited to your skin type. Avoid aggressive scrubbing with loofahs or rough sponges that damage the epidermal barrier.',
      icon: Droplets,
    },
    {
      title: 'Moisturise Regularly',
      desc: 'Apply a rich, ceramide- or petrolatum-based moisturiser immediately after bathing while the skin is still damp to lock in moisture and reinforce barrier function.',
      icon: Sparkles,
    },
    {
      title: 'Protect Your Skin from the Sun',
      desc: 'Apply a broad-spectrum sunscreen with SPF 30 or higher daily. Reapply every 2 hours when outdoors and wear protective hats, sunglasses, and lightweight clothing.',
      icon: Sun,
    },
    {
      title: 'Avoid Sharing Personal Items',
      desc: 'Never share towels, razors, combs, clothing, or footwear, especially in warm humid environments where contagious fungal and bacterial infections easily spread.',
      icon: Shield,
    },
    {
      title: 'Maintain a Balanced Diet',
      desc: 'Eat a nutrient-dense diet rich in colourful vegetables, fruits, whole grains, nuts, and healthy fats. Stay well-hydrated to support overall systemic cellular health.',
      icon: Utensils,
    },
    {
      title: 'Avoid Self-Medication & Steroid Creams',
      desc: 'Never apply leftover prescription creams or over-the-counter steroid combination ointments without a doctor’s guidance, as they can cause severe skin damage.',
      icon: AlertTriangle,
    },
  ];

  // Emergency Red Flags
  const redFlags = [
    {
      title: 'Rapidly Spreading Rash With High Fever',
      desc: 'A rash that expands quickly accompanied by chills, fever, or confusion suggests systemic bacterial infection (cellulitis, sepsis, or erysipelas).',
    },
    {
      title: 'Breathing Difficulty or Swelling of Lips / Tongue',
      desc: 'Immediate life-threatening anaphylaxis or angioedema requiring emergency epinephrine injection and hospital intensive care.',
    },
    {
      title: 'Severe, Excruciating, or Worsening Skin Pain',
      desc: 'Pain out of proportion to skin appearance may signal serious necrotizing soft-tissue infection requiring emergency surgical evaluation.',
    },
    {
      title: 'Widespread Blistering or Skin Peeling (Sloughing)',
      desc: 'Extensive skin detachment or mucosal blistering indicates medical emergencies like Stevens-Johnson Syndrome (SJS) or Toxic Epidermal Necrolysis (TEN).',
    },
    {
      title: 'Painful, Swollen, Spreading Lesions With Pus',
      desc: 'Warm, tender perilesional erythema with foul discharge pointing to abscess formation requiring surgical incision and drainage.',
    },
  ];

  // 10 Detailed FAQs from user prompt
  const faqs = [
    {
      q: '1. What are the common skin problems affecting people?',
      a: 'Common skin conditions include acne and pimples, eczema (atopic dermatitis), psoriasis, fungal infections (ringworm, athlete’s foot, jock itch), contact dermatitis, hyperpigmentation (melasma, post-inflammatory dark marks), extreme dryness, and allergic urticaria. Each condition has completely different biological causes and requires specific, targeted clinical treatments.',
    },
    {
      q: '2. Can homeopathy cure skin diseases?',
      a: 'Reliable scientific evidence has not established homoeopathy as an effective or curative treatment for skin diseases, chronic inflammatory dermatoses, or fungal infections. Homeopathic remedies cannot reliably eliminate dermatophyte fungi, reverse atopic dermatitis, prevent acne scars, or control autoimmune plaque psoriasis. Established evidence-based dermatological care should not be postponed in favour of alternative treatments.',
    },
    {
      q: '3. When should I consult a skin doctor?',
      a: 'You should consult a healthcare professional or dermatologist if you experience persistent or worsening itching, rashes that fail to heal or repeatedly return, painful or spreading lesions, recurring fungal infections, cystic acne that threatens permanent scarring, thick widespread psoriasis plaques, or unexplained changes in skin texture or colour.',
    },
    {
      q: '4. Are fungal skin infections contagious?',
      a: 'Yes, many fungal skin infections (including ringworm, jock itch, and athlete’s foot) are contagious. They spread readily through direct skin-to-skin contact with infected persons or animals, or through contaminated personal items like towels, clothes, bedding, combs, and footwear. Early treatment with topical or oral antifungals and strict hygiene are vital to prevent transmission.',
    },
    {
      q: '5. Is psoriasis contagious?',
      a: 'No. Psoriasis is a chronic immune-mediated inflammatory skin disorder driven by genetic and T-cell abnormalities. It is completely non-contagious and cannot be transmitted by touching, sharing clothes, sitting nearby, or sharing meals with someone who has psoriasis.',
    },
    {
      q: '6. What is the difference between eczema and a fungal infection?',
      a: 'Eczema is a non-infectious inflammatory condition caused by an impaired skin barrier and immune dysregulation, treated with barrier repair moisturisers and anti-inflammatory creams. Fungal infections are caused by dermatophyte fungi multiplying in the skin, which must be treated with antifungal agents. Applying steroid creams to a fungal infection can mask symptoms and cause severe spreading (tinea incognito), making accurate medical diagnosis critical.',
    },
    {
      q: '7. Can acne leave permanent scars?',
      a: 'Yes. Deep inflammatory papules, pustules, and cystic acne lesions can destroy collagen in the dermis, resulting in permanent atrophic (ice-pick, boxcar, rolling) or hypertrophic scars. Starting appropriate medical treatments—such as topical retinoids, benzoyl peroxide, or oral isotretinoin—early under clinical supervision dramatically reduces the risk of scarring.',
    },
    {
      q: '8. Can skincare products cause skin allergies?',
      a: 'Yes. Preservatives (parabens, methylisothiazolinone), synthetic fragrances, sulfates, essential oils, and certain emulsifiers in skincare products, cosmetics, or hair dyes can cause irritant or allergic contact dermatitis. If you suspect a product is triggering redness, burning, or itching, stop using it immediately and seek clinical evaluation.',
    },
    {
      q: '9. How can I maintain healthy skin?',
      a: 'Maintain healthy skin by following a gentle skincare routine: use a mild fragrance-free cleanser, apply a ceramide-rich moisturiser daily, apply broad-spectrum sunscreen (SPF 30+) before sun exposure, avoid sharing personal grooming items, eat a nutrient-rich balanced diet, drink adequate water, and strictly avoid self-medicating with unprescribed steroid combination creams.',
    },
    {
      q: '10. Should I consult a dermatologist for recurring skin problems?',
      a: 'Yes. Recurring, chronic, severe, or atypical skin conditions should be assessed by a qualified dermatologist or medical doctor. A specialist can perform accurate diagnostic workups (such as KOH scraping, dermoscopy, allergy patch tests, or skin biopsy) and prescribe proven, evidence-based medications tailored to your exact condition.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Skin Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homeopathic Clinic Near Kuttippuram for Skin Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-4 h-4 text-emerald-400" />}
        badgeText="CLINICAL DERMATOLOGY & SKIN GUIDE • KUTTIPPURAM"
        title="Homeopathic Clinic Near Kuttippuram for Skin Treatment"
        subtitle="A comprehensive clinical guide explaining common skin diseases (acne, eczema, psoriasis, fungal infections, allergies), root causes, diagnostic evaluation, evidence-based care, and responsible healthcare in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Dermatological & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, chronic rash assessments, barrier repair guidance, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely dermatologist referrals whenever needed."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
        {/* Intro Context Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Healthy skin plays an important role in overall health, comfort and confidence. However, skin problems such as acne, eczema, psoriasis, fungal infections, itching, rashes, pigmentation and excessive dryness can affect people of different age groups. Some skin conditions are temporary, while others may continue for months or return repeatedly. Understanding the underlying cause is essential for choosing appropriate treatment and maintaining long-term skin health.
            </p>
            <p>
              People searching for a <strong>Homeopathic Clinic near Kuttippuram for Skin Treatment</strong> may be looking for guidance on recurring skin concerns and different healthcare approaches. Before choosing any treatment, it is important to understand that skin conditions can have several causes, including infections, allergies, inflammation, hormonal changes and genetic factors.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Accurate Diagnosis First:</strong> A proper medical assessment helps distinguish between conditions that may look similar but require completely different treatments. For example, eczema and fungal infections can both cause itching and redness, but their treatment approaches are different. If you are experiencing persistent skin symptoms, consult a qualified healthcare professional for an accurate diagnosis.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This guide explains the symptoms, causes, investigations, and responsible dermatological pathways for patients in Kuttippuram, Valanchery, Tirur, and Malappuram district.
            </p>
          </div>
        </section>

        {/* 7 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Essential Clinical Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Key facts on skin disease differentiation, evidence-based care, and patient safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Common Skin Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Clinical Conditions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Understanding Common Skin Problems
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Skin is the body's largest organ and acts as a protective barrier against external irritants, microorganisms and environmental factors. Changes in the skin may indicate irritation, infection, inflammation or an underlying health condition. People looking for <strong>Skin Treatment in Kuttippuram</strong> frequently encounter one or more of these common concerns:
            </p>
          </div>

          <div className="space-y-8">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                      {prob.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{prob.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    {prob.desc}
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Common Contributing Causes & Manifestations:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {prob.causes.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Evidence-Based Medical Approach:</strong> {prob.treatments}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Causes Skin Problems? */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Etiology & Triggers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What Causes Skin Problems?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Skin conditions develop due to several internal and external factors. Identifying the primary cause is essential before selecting treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndEtiology.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {factor.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skin Homeopathic Treatment in Kuttippuram: Understanding Your Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Scientific Evidence Disclosure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Skin Homeopathic Treatment in Kuttippuram: Understanding Your Options
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              People exploring <strong>Skin Homeopathic Treatment in Kuttippuram</strong> may be interested in alternative healthcare approaches for recurring skin concerns. Homeopathy is a system of alternative medicine based on principles such as individualised remedy selection.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
              <h4 className="font-bold text-purple-900 text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700" />
                Transparency on Scientific Evidence & Limitations
              </h4>
              <p className="text-sm leading-relaxed">
                However, it is important to understand the available scientific evidence. Reliable evidence has not established homeopathy as an effective treatment for acne, eczema, psoriasis, fungal infections, pigmentation disorders or other skin diseases.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-medium">
                Homeopathic remedies should not be promoted as proven cures for skin conditions or as substitutes for appropriate medical treatment. They have not been shown reliably to eliminate fungal infections, control psoriasis, reverse eczema or prevent acne scarring.
              </p>
            </div>
            <p>
              If you are considering a homoeopathic consultation, discuss the limitations of this approach openly with the practitioner. Do not discontinue prescribed medication, delay a dermatology consultation or rely on treatment guarantees. A responsible healthcare approach should prioritise accurate diagnosis and evidence-based care.
            </p>
          </div>
        </section>

        {/* Choosing a Skin Doctor in Kuttippuram */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Practitioner Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Choosing a Skin Doctor in Kuttippuram
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Finding an appropriate healthcare professional is an important step when dealing with persistent or recurring skin problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-xs mb-3">
                    {crit.number}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {crit.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 text-center">
            A qualified dermatologist is the appropriate specialist for diagnosing and managing complex, severe or persistent skin diseases.
          </div>
        </section>

        {/* Homeopathic Skin Treatment in Kuttippuram: Important Considerations */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Patient Safety & Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homeopathic Skin Treatment in Kuttippuram: Important Considerations
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Individuals searching for <strong>Homeopathic Skin Treatment in Kuttippuram</strong> should understand that alternative treatments are not scientifically established substitutes for standard dermatological care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importantConsiderations.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Skin Problems Treatment in Kuttippuram: Why Diagnosis Matters */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Differential Diagnosis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Skin Problems Treatment in Kuttippuram: Why Diagnosis Matters
            </h2>
            <p className="text-indigo-200 mt-3 text-sm sm:text-base leading-relaxed">
              Different skin conditions require different treatment plans. Using the wrong cream or medicine may worsen symptoms or delay recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diagnosisMattersList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/10 text-white"
              >
                <h4 className="font-bold text-white text-sm sm:text-base mb-1">
                  {item.condition}
                </h4>
                <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                  {item.approach}
                </p>
              </div>
            ))}
          </div>

          {/* Combination Creams Alert */}
          <div className="mt-8 p-5 rounded-xl bg-rose-500/20 border border-rose-400/30 text-rose-100 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong>Critical Steroid Combination Warning:</strong> Men and women experiencing recurring skin concerns should avoid repeatedly using over-the-counter combination creams (containing steroids, antifungals, and antibacterials). Topical steroids suppress local immunity, allowing fungal infections to spread uncontrollably (tinea incognito) and causing skin atrophy, stretch marks, and topical steroid withdrawal.
            </div>
          </div>
        </section>

        {/* Healthy Skincare Habits */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Skin Barrier Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Skin Disease Treatment in Kuttippuram: Healthy Habits for Better Skin Care
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Daily skincare habits help protect the skin barrier and reduce irritation. They are not a substitute for medical treatment when disease is present, but they support general recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthyHabits.map((habit, idx) => {
              const Icon = habit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {habit.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {habit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* When Should You Seek Expert / Emergency Advice? */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Emergency Medical Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              When Should You Seek Expert Advice?
            </h2>
            <p className="text-rose-100 mt-2 text-sm sm:text-base leading-relaxed">
              Not every skin concern requires emergency treatment, but persistent or severe symptoms should not be ignored. A rapidly spreading reaction with breathing difficulty or swelling of the lips or tongue is a medical emergency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {redFlags.map((flag, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/10 text-white flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">
                    {flag.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                    {flag.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 FAQs Section (Interactive Accordion) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear medical answers to common inquiries regarding skin conditions, diagnosis, evidence, and care options near Kuttippuram.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left font-semibold text-slate-900 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA & Booking Engine */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Responsible Dermatological Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Schedule Your Skin Health Consultation
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              If you are searching for a Homeopathic Clinic near Kuttippuram for Skin Treatment, take time to understand practitioner qualifications and the limitations of alternative treatments. Prioritise accurate diagnosis, avoid unverified treatment claims, and book a consultation at Anjali Homoeo Clinic in Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-slate-900 shadow-md">
            <AppointmentBookingEngine />
          </div>

          {/* Quick contact strip */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-indigo-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Tirur - Kuttippuram Rd, near Mini Civil Station, Kuttippuram</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400" />
              <a href={`tel:${phonePrimary}`} className="hover:text-white transition-colors">
                {phonePrimary}
              </a>
              <span>/</span>
              <a href={`tel:${phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {phoneSecondary}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 font-medium transition-colors"
              >
                WhatsApp: {phoneWhatsApp}
              </a>
            </div>
          </div>
        </section>

        {/* Related Regional Guides for Kuttippuram & Surrounding Areas */}
        <RegionalRelatedGuides currentCity="Kuttippuram" />
      </main>
    </div>
  );
};
