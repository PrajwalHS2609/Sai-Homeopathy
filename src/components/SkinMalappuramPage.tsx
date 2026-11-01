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
  Sun,
  Shield,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const SkinMalappuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Skin Care & Dermatology Guidance (Malappuram patient guide).'
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
    navigateToBookingWithReason('Skin Health Consultation (Malappuram)', 'online');
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
      title: 'Multifactorial Etiology',
      desc: 'Skin problems may result from allergies, infections, hormonal changes, genetics, environmental factors, or underlying systemic medical conditions.',
    },
    {
      title: 'Accurate Diagnosis First',
      desc: 'An accurate clinical diagnosis helps determine the most appropriate treatment, preventing incorrect treatments such as applying steroids to fungal infections.',
    },
    {
      title: 'Red Flags for Immediate Care',
      desc: 'Persistent itching, unexplained rashes, painful lesions, spreading redness, fever, and rapidly changing skin marks require prompt professional assessment.',
    },
    {
      title: 'Qualified Skin Doctors in Malappuram',
      desc: 'A qualified Skin Doctor in Malappuram can help assess symptoms and determine whether laboratory scrapings, blood tests, or specialist dermatologist referral are needed.',
    },
    {
      title: 'Scientific Disclosures on Homeopathy',
      desc: 'Homeopathy has not been proven effective for treating skin diseases and should not replace evidence-based medical care.',
    },
    {
      title: 'Skin Barrier Protection',
      desc: 'Gentle cleansing, appropriate moisturization, broad-spectrum sun protection, and avoiding known chemical irritants actively support skin barrier recovery.',
    },
    {
      title: 'Individualized Treatment Outcomes',
      desc: 'Treatment outcomes vary depending on the diagnosis, chronicity, severity, medical history, and the medical modality selected.',
    },
  ];

  const causesAndContributors = [
    {
      number: '01',
      title: 'Acne and Hormonal Changes',
      badge: 'Sebaceous & Endocrine',
      desc: 'Acne develops when hair follicles become blocked by sebum and dead skin cells. Cutibacterium acnes proliferation leads to inflammation, producing blackheads, whiteheads, papules, and deeper cystic lesions. Hormonal changes, genetics, certain medications, and occlusive cosmetics influence acne. Picking or squeezing pimples increases inflammation and dramatically raises the risk of permanent scarring.',
      care: 'Management depends on acne severity and includes topical retinoids, benzoyl peroxide, prescription topicals, oral therapies, and gentle non-comedogenic skincare.',
    },
    {
      number: '02',
      title: 'Eczema and Skin Sensitivity',
      badge: 'Barrier Disruption',
      desc: 'Eczema refers to a spectrum of inflammatory skin conditions. Atopic dermatitis commonly causes dry, itchy, irritated patches that flare up periodically. Triggers include harsh surfactants, artificial fragrances, seasonal temperature swings, sweat, and environmental allergens. Triggers vary widely between individuals.',
      care: 'Gentle soap-free cleansing, regular application of lipid-replenishing ceramide moisturizers, and identifying personal triggers form the foundation of supportive management.',
    },
    {
      number: '03',
      title: 'Psoriasis',
      badge: 'Autoimmune & Chronic',
      desc: 'Psoriasis is a chronic systemic inflammatory condition driven by accelerated skin cell turnover. It produces raised, well-demarcated plaques covered with thick, silvery scales. Commonly affects elbows, knees, scalp, and lower back. Psoriasis is not simply dry skin and is completely non-contagious.',
      care: 'Evidence-based options include topical vitamin D analogues, keratolytics, supervised narrowband phototherapy, and systemic immunosuppressants or biologics for moderate-to-severe disease.',
    },
    {
      number: '04',
      title: 'Allergies and Contact Dermatitis',
      badge: 'Hypersensitivity Reaction',
      desc: 'Contact dermatitis occurs when the skin reacts to an external irritant (irritant contact dermatitis) or a specific allergen (allergic contact dermatitis). Symptoms include burning redness, intense itching, swelling, papules, or weeping vesicles. Common triggers include laundry detergents, industrial chemicals, hair dyes (PPD), cosmetics, and costume jewellery.',
      care: 'Precise trigger identification via medical history or patch testing, immediate allergen avoidance, and barrier restoration protocols.',
    },
    {
      number: '05',
      title: 'Fungal Skin Infections',
      badge: 'Microbial Caution',
      desc: 'Fungal dermatophytes infect the stratum corneum of the trunk, groin, feet, and scalp, presenting as itchy, scaling, ring-shaped lesions with raised active borders. These infections are frequently misdiagnosed as eczema. Applying over-the-counter steroid creams to undiagnosed fungal lesions suppresses local immunity, worsens infection, and induces tinea incognito.',
      care: 'Diagnostic skin scrapings with potassium hydroxide (KOH) mounts, followed by targeted topical or oral prescription antifungal agents.',
    },
    {
      number: '06',
      title: 'Pigmentation and Dark Spots',
      badge: 'Melanocyte Activity',
      desc: 'Melanocyte hyperactivity may develop after acne breakouts, chronic dermatitis scratching, intense ultraviolet sun exposure, pregnancy (chloasma/melasma), or endocrine imbalances. Sun protection and gentle active skincare support lightening, while rapidly changing, asymmetrical, or bleeding pigment lesions need immediate medical evaluation.',
      care: 'Daily broad-spectrum SPF 50 sun protection, topical tyrosinase inhibitors, and specialist dermatological screening for atypical lesions.',
    },
  ];

  const medicalApproaches = [
    {
      step: '01',
      title: 'Topical Medical Formulations',
      subtitle: 'Creams, Gels & Ointments',
      desc: 'Depending on the formal diagnosis, targeted topical therapy may include keratolytics (salicylic acid), topical retinoids, specific antifungal creams, or anti-inflammatory agents applied under clinical guidance to minimize side effects.',
    },
    {
      step: '02',
      title: 'Prescription Oral Medications',
      subtitle: 'Systemic Antimicrobial & Anti-Inflammatory',
      desc: 'When skin disease is extensive or deep-seated, medical doctors may prescribe oral antibiotics, oral antifungals, antihistamines, or immunomodulators. Medicines are non-interchangeable; antibiotics will never treat fungal infections.',
    },
    {
      step: '03',
      title: 'Moisturizers & Skin Barrier Therapy',
      subtitle: 'Lipid Replenishment & Emollients',
      desc: 'Fragrance-free moisturizers rich in ceramides, hyaluronic acid, and fatty acids reinforce the epidermal stratum corneum, substantially reducing transepidermal water loss and preventing flare-ups in eczema and xerosis.',
    },
    {
      step: '04',
      title: 'Supervised Phototherapy & Specialist Care',
      subtitle: 'Narrowband UVB & Advanced Modalities',
      desc: 'For stubborn inflammatory conditions like plaque psoriasis or vitiligo, medically supervised phototherapy utilizes calibrated wavelengths of light to modulate cutaneous immune activity under dermatologist supervision.',
    },
    {
      step: '05',
      title: 'Addressing Underlying Medical Conditions',
      subtitle: 'Endocrine & Systemic Investigation',
      desc: 'Skin symptoms frequently mirror internal medical issues including thyroid disorders, PCOS, diabetes, or medication reactions. Identifying and managing systemic triggers resolves cutaneous complaints effectively.',
    },
  ];

  const dailySkincareTips = [
    {
      title: 'Cleanse Gently',
      desc: 'Use mild, soap-free cleansers matched to your skin type. Avoid hot water, loofahs, and harsh scrubbing that strip natural skin lipids.',
    },
    {
      title: 'Moisturize Regularly',
      desc: 'Apply fragrance-free moisturizer within 3 minutes of bathing while the skin is still slightly damp to lock in essential hydration.',
    },
    {
      title: 'Use Daily Sun Protection',
      desc: 'Apply broad-spectrum sunscreen with SPF 30 or higher every morning. Reapply when outdoors to prevent UV-induced pigmentation and damage.',
    },
    {
      title: 'Avoid Picking or Scratching',
      desc: 'Squeezing pimples or scratching itchy patches damages the epidermal barrier, increases inflammation, and introduces secondary staph infections.',
    },
    {
      title: 'Introduce New Products Slowly',
      desc: 'Test single products on a small patch of forearm skin for 48 hours before applying full-face to easily isolate irritants.',
    },
    {
      title: 'Avoid Unverified Miracle Creams',
      desc: 'Be very cautious of quick fairness creams or unverified local ointments; many contain unlisted potent corticosteroids that cause severe skin thinning and rebound rashes.',
    },
  ];

  const faqs = [
    {
      q: 'What causes common skin problems?',
      a: 'Skin problems may result from inflammation, allergies, infections (bacterial, fungal, viral), hormonal fluctuations (such as in acne), genetics, environmental irritants, or underlying medical conditions. An appropriate clinical assessment by a qualified doctor is essential to identify the accurate cause before starting any treatment.',
    },
    {
      q: 'Is homeopathy effective for skin diseases?',
      a: 'Current scientific evidence does not establish homeopathy as an effective treatment for skin diseases like eczema, psoriasis, acne, or fungal infections. While some patients seek homeopathic consultations for supportive complementary care, it should never replace evidence-based medical assessment or prescribed conventional treatments.',
    },
    {
      q: 'How can I find a qualified Skin Doctor in Malappuram?',
      a: 'Look for a qualified healthcare professional with verified credentials and council registration. For persistent, severe, blistering, or unexplained skin symptoms, consulting a board-certified dermatologist is the most appropriate step.',
    },
    {
      q: 'Can skin problems be managed with daily skincare alone?',
      a: 'Gentle cleansing, regular moisturizing, sun protection, and avoiding known chemical irritants actively support skin health and barrier repair. However, active skin infections and chronic inflammatory diseases like psoriasis require specific medical therapies and cannot be resolved with cosmetic skincare alone.',
    },
    {
      q: 'When should I seek medical attention for a rash?',
      a: 'Seek prompt medical advice if a rash is persistent, rapidly spreading, intensely painful, or accompanied by fever, swelling, pus, or blistering. Any skin reaction accompanied by facial swelling, lip swelling, or difficulty breathing is a medical emergency requiring immediate hospital care.',
    },
    {
      q: 'Is every skin condition contagious?',
      a: 'No. Major inflammatory skin conditions such as eczema, psoriasis, contact dermatitis, and acne are completely non-contagious and cannot spread to others. Certain fungal, bacterial, or viral skin infections can spread through direct contact or shared towels, which is why an accurate diagnosis is essential.',
    },
    {
      q: 'Can pigmentation and dark spots be treated?',
      a: 'Treatment depends on the specific cause of pigmentation. Post-inflammatory dark spots and melasma benefit from strict daily broad-spectrum sun protection and suitable topical agents. Any new, bleeding, or irregularly shaped pigment spot must be examined by a dermatologist to exclude skin malignancies.',
    },
    {
      q: 'What should I look for in a Skin Homeopathy Clinic in Malappuram?',
      a: 'Check the practitioner’s formal qualifications and council registration, ask transparently about scientific evidence and realistic expectations, and confirm that conventional diagnostic investigations or dermatologist referrals will not be delayed.',
    },
    {
      q: 'Why is it dangerous to apply over-the-counter steroid creams to skin rashes?',
      a: 'Over-the-counter steroid creams temporarily suppress local inflammation but can dramatically worsen undetected fungal infections (producing tinea incognito), cause skin thinning (atrophy), dilated blood vessels (telangiectasia), and trigger severe rebound steroid rosacea.',
    },
    {
      q: 'What happens during a skin consultation in Malappuram?',
      a: 'A clinical skin consultation begins with a review of your symptoms, timeline, family history, skincare products, and medications. The clinician inspects the affected areas under good lighting and recommends laboratory investigations or specialist referrals when appropriate.',
    },
    {
      q: 'Can diet changes cure eczema or psoriasis?',
      a: 'While maintaining a balanced anti-inflammatory diet supports overall health, diet alone cannot cure chronic autoimmune conditions like eczema or psoriasis. If you suspect specific food triggers in atopic eczema, discuss them with a clinician rather than severely restricting your diet without medical guidance.',
    },
    {
      q: 'Does Dr. Anjali Chandrasekhar provide both in-clinic and online skin consultations?',
      a: 'Yes. Dr. Anjali Chandrasekhar conducts in-clinic consultations at Kuttippuram and Puthanathani and provides online video consultations. For chronic constitutional symptom review and initial assessment, either format is suitable. When lesions require close tactile examination, dermoscopy, or biopsy, in-person assessment or dermatologist referral is recommended.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Skin Care & Dermatology Guidance – Malappuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin, Hair & Scalp Care"
        pageTitle="Skin Homeopathic Treatment in Malappuram"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Sun className="w-3.5 h-3.5 text-[#FBBF24]" />}
        badgeText="Dermatology Care Guide • Malappuram Patient Resource"
        title="Skin Homeopathic Treatment in Malappuram"
        subtitle="Individualized clinical guidance for patients in Malappuram experiencing acne, chronic eczema, psoriasis plaques, skin allergies, fungal rash, and pigmentary changes."
        metrics={[
          { label: 'Condition Focus', value: 'Chronic Skin & Barrier' },
          { label: 'Diagnostic Standard', value: 'Dermatoscopy & Labs' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Dermatology & Constitutional Skin Care"
        doctorBio="10+ years of dedicated clinical experience assessing chronic dermatological complaints, eczema flare triggers, skin barrier restoration, and evidence-grounded constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#D97706]/10 flex items-center justify-center text-[#D97706]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#D97706] block">
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
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#D97706]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
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

      {/* Section 1: Common Skin Conditions & Biological Triggers */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Causes and Everyday Triggers of Skin Conditions
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Skin disorders manifest with overlapping visual presentations. Correctly identifying the biological origin prevents inappropriate or harmful treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {causesAndContributors.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#D97706]/30 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                    Topic {c.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] bg-[#FFFBEB] px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
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

      {/* Section 2: Homeopathy Skin Treatment: Facts & Scientific Transparency */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Skin Homeopathic Treatment in Malappuram: Facts and Transparency
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Skin Homeopathic Treatment in Malappuram</strong> often look for non-invasive options to manage chronic, recurring skin problems.
            </p>
            <p>
              Homeopathic consultations typically include an in-depth conversation about lifestyle, stress, diet, and constitutional history alongside skin concerns.
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
                    Reliable scientific clinical evidence has not established that homeopathy cures skin diseases or reverses chronic dermatological conditions like eczema, psoriasis, or active bacterial/fungal infections. Homeopathy should never replace evidence-based medical diagnosis, laboratory scrapings, or prescribed medical therapies.
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
              Evidence-Based Management of Skin Problems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {medicalApproaches.map((app, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#D97706]/40 transition-all space-y-2.5"
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

      {/* Section 4: Daily Skin Barrier Care Tips */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              SELF-CARE FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Daily Skincare and Supportive Habits for Healthier Skin
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Supportive daily habits reinforce the epidermal stratum corneum, minimize flare-ups, and accelerate skin barrier recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dailySkincareTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2"
              >
                <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
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

      {/* Section 5: When to Seek Immediate Medical Attention */}
      <section className="py-14 sm:py-16 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#DC2626]" />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
                SAFETY PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#991B1B]">
                When to Seek Immediate Medical Attention
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#FCA5A5] shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-[#7F1D1D] font-medium leading-relaxed">
              Certain skin presentations indicate acute bacterial spreading, severe allergy, or malignancy that require immediate medical or emergency hospital evaluation:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#991B1B]">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Rash accompanied by facial/lip swelling, throat tightness, or breathlessness</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Hot, intensely painful, swollen red skin spreading rapidly (cellulitis)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Widespread blistering, skin peeling, or raw mucosal ulcerations</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Rash accompanied by high fever, confusion, or stiff neck</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Purpuric dark-purple non-blanching spots (petechiae)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>New, irregular, asymmetrical, bleeding, or rapidly changing moles</span>
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
              Frequently Asked Questions: Skin Health in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Transparent answers regarding skin treatments, diagnostic tests, and clinical consultations in Malappuram.
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
                    <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-[#D97706]' : ''
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
              Book Your Skin Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              In-clinic evaluations at Kuttippuram and Puthanathani, or Online Video Consultations from home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="skin-treatment-malappuram" />
    </div>
  );
};
