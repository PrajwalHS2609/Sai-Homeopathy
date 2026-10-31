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
  Droplets,
  BookOpen,
  Sparkles,
  Award,
  UserCheck,
  Lock,
  Layers,
  Sparkle,
  AlertCircle,
  Sun,
  Shield,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const SkinMalappuramPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
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
    navigateToBookingWithReason('Skin Health Consultation (Malappuram)', 'clinic');
  };

  const handleBookOnline = () => {
    navigateToBookingWithReason('Skin Health Online Consultation (Malappuram)', 'online');
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

  const commonSkinConcerns = [
    {
      title: 'Acne, Blackheads & Pimples',
      desc: 'Follicular occlusion with sebum and keratin debris leading to inflammatory pustules and potential scarring.',
    },
    {
      title: 'Eczema & Atopic Dermatitis',
      desc: 'Recurring dry, intensely itchy, erythematous patches associated with skin barrier disruption and environmental triggers.',
    },
    {
      title: 'Psoriasis & Scaly Plaques',
      desc: 'Chronic autoimmune hyperproliferation causing well-demarcated raised red plaques covered with silvery scales.',
    },
    {
      title: 'Allergic Contact Dermatitis',
      desc: 'Pruritic, inflamed skin reactions triggered by contact with nickel, fragrances, cosmetics, detergents, or rubber.',
    },
    {
      title: 'Fungal Skin Infections',
      desc: 'Ringworm (tinea corporis/cruris/pedis) and tinea versicolor causing annular scaly patches, easily confused with eczema.',
    },
    {
      title: 'Pigmentation & Melasma',
      desc: 'Post-inflammatory hyperpigmentation, hormonal melasma, and dark spots aggravated by UV sun exposure.',
    },
    {
      title: 'Excessive Dryness (Xerosis)',
      desc: 'Compromised epidermal moisture barrier causing rough, flaky, stinging skin, especially in winter or air conditioning.',
    },
    {
      title: 'Hives & Acute Urticaria',
      desc: 'Sudden, itchy erythematous wheals emerging secondary to histamine release from food, medication, or viral illness.',
    },
    {
      title: 'Persistent Itching & Rashes',
      desc: 'Generalized or localized pruritus without obvious rash that may indicate internal systemic, hepatic, or renal conditions.',
    },
    {
      title: 'Changing Moles & Lesions',
      desc: 'New, irregular, asymmetrical, or bleeding pigment spots requiring immediate dermatological evaluation.',
    },
  ];

  const causesAndContributors = [
    {
      number: '01',
      title: 'Acne and Hormonal Changes',
      badge: 'Sebaceous & Endocrine',
      desc: 'Acne develops when hair follicles become blocked by oil and dead skin cells. Cutibacterium acnes proliferation leads to inflammation, producing blackheads, whiteheads, papules, and deeper cystic lesions. Hormonal changes, genetics, certain medications, and occlusive cosmetics influence acne. Picking or squeezing pimples increases inflammation and dramatically raises the risk of permanent scarring.',
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

  const redFlags = [
    {
      sign: 'A Rash That Persists or Recurs',
      urgency: 'Evaluation Advised',
      reason: 'May represent chronic dermatitis, psoriasis, or systemic autoimmune conditions.',
    },
    {
      sign: 'Severe or Widespread Intolerable Itching',
      urgency: 'Medical Assessment',
      reason: 'Requires assessment to differentiate scabies, allergic dermatitis, or underlying hepatic/renal causes.',
    },
    {
      sign: 'Painful, Hot, Swollen or Red Skin',
      urgency: 'Urgent Medical Attention',
      reason: 'Could indicate bacterial cellulitis or erysipelas requiring urgent antibiotic treatment.',
    },
    {
      sign: 'Pus, Honey-Colored Crusting or Weeping',
      urgency: 'Prompt Clinical Care',
      reason: 'Classic presentation of impetigo or secondary bacterial infection needing medical therapy.',
    },
    {
      sign: 'Severe Acne Causing Deep Scars or Cysts',
      urgency: 'Dermatologist Check',
      reason: 'Requires early medical therapy to halt irreversible dermal fibrosis and ice-pick scarring.',
    },
    {
      sign: 'New, Bleeding, or Changing Moles',
      urgency: 'Specialist Dermatologist Referral',
      reason: 'Asymmetry, border irregularity, color variegation, or rapid growth warrants urgent dermoscopy.',
    },
    {
      sign: 'Rash with Lip/Tongue Swelling or Breathlessness',
      urgency: 'EMERGENCY: Immediate Hospital Care',
      reason: 'Severe anaphylactic allergic reaction requiring immediate emergency intramuscular adrenaline.',
    },
  ];

  const clinicSelectionCriteria = [
    {
      title: 'Verifiable Medical Credentials',
      desc: 'Confirm the doctor holds recognized degrees (such as BHMS or MBBS/MD Dermatology) and valid medical council registration (e.g., KA-HOM-15563 or Travancore-Cochin Councils).',
    },
    {
      title: 'Detailed Assessment Process',
      desc: 'A trustworthy clinic examines the skin thoroughly under good illumination, reviews medication timelines, and takes a full allergy history before prescribing.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Expect honest discussions of likely diagnoses, potential side effects, realistic recovery timeframes, and true treatment limitations.',
    },
    {
      title: 'Zero Guaranteed "Permanent Cure" Claims',
      desc: 'Ethical practitioners never promise 100% permanent cures or overnight eradication for chronic conditions like psoriasis or eczema.',
    },
    {
      title: 'Dermatologist Referrals When Warranted',
      desc: 'A responsible clinic immediately refers patients to dermatologists or tertiary centers whenever symptoms suggest severe infection or suspicious lesions.',
    },
    {
      title: 'Clear, Transparent Fee Structure',
      desc: 'Consultation charges, laboratory tests, and medicines should be clearly outlined upfront with no hidden recurring subscription packages.',
    },
  ];

  const questionsToAsk = [
    'What is the most likely biological diagnosis for my skin symptoms?',
    'Do I need a skin scraping, patch test, or laboratory blood examination?',
    'Is there reliable scientific evidence that the proposed treatment works for my diagnosed condition?',
    'Could any recommended remedy interact with my current prescription medications?',
    'What are the potential risks, side effects, or skin flare-ups I might experience?',
    'Should I consult a board-certified dermatologist before proceeding?',
    'How will improvement or worsening be objectively monitored over the coming weeks?',
    'What is the exact clinical protocol if my skin condition worsens or fails to respond?',
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
    <div className="bg-[#F8FAFD] min-h-screen text-[#1E2559] font-sans">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#1E2559] text-white shadow-md border-b border-white/10 py-2.5 px-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-semibold text-white">
                Skin Treatment &amp; Dermatology Care – Malappuram Patient Guide
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
                <Phone className="w-3.5 h-3.5" />
                <span>Call {phonePrimary}</span>
              </a>
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
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
              Skin Homeopathic Treatment in Malappuram
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
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F59E0B] via-[#10B981] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Skin Diseases and Dermatology in Malappuram"
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
                    <p className="text-xs font-semibold text-[#F59E0B] mt-0.5">
                      BHMS | Lead Homeopathic Physician
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      10+ years of dedicated clinical practice providing comprehensive skin evaluations, barrier recovery guidance, constitutional homeopathic care, and patient triage across Malappuram district.
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
                <Layers className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Regional Clinical Dermatology Guide • Malappuram Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Skin Homeopathic Treatment in Malappuram
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Healthy skin is an important part of overall well-being. However, skin problems such as acne, eczema, psoriasis, itching, rashes, pigmentation, and excessive dryness can affect people of different ages. These conditions may cause discomfort, affect self-confidence, and interfere with daily activities. Understanding the cause of a skin concern is an essential step towards choosing appropriate care.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Clinical Priority
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Accurate Diagnosis
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Approach
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Barrier Recovery
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Care Mode
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Clinic &amp; Online Video
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book In-Clinic Consultation</span>
                </button>
                <button
                  onClick={handleBookOnline}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm transition-all border border-white/20"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Online Video Consult</span>
                </button>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#303A88] hover:bg-[#283177] text-white font-semibold text-sm transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Doctor Desk: {phoneSecondary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY TAKEAWAYS */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F59E0B] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Clinical Summary
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Key Takeaways on Skin Care in Malappuram
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Essential facts every patient should know before starting skin treatments, home remedies, or complementary therapies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#F59E0B]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Summary Highlight Box */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#303A88] text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-white/20 text-[#86EFAC] flex items-center justify-center font-bold text-xs mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-white mb-1.5">
                  Professional Assessment Priority
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Never risk irreversible skin damage by applying unprescribed steroid creams or following unverified "instant glow" claims. A proper diagnosis protects your health and skin barrier.
                </p>
              </div>
              <button
                onClick={handleBookConsultation}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#86EFAC] hover:text-white transition-colors"
              >
                <span>Schedule Malappuram Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: UNDERSTANDING COMMON SKIN PROBLEMS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Pathophysiology &amp; Presentation
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Understanding Common Skin Problems
            </h2>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              The skin acts as a protective barrier against environmental irritants, microorganisms, and moisture loss. When this barrier becomes damaged or inflamed, symptoms such as redness, itching, swelling, dryness, and scaling may develop.
            </p>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              Some skin conditions are temporary, while others require long-term management. Certain problems may also worsen when exposed to particular skincare products, allergens, or environmental conditions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-bold text-lg text-[#1E2559] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#D97706]" />
              <span>Common Concerns Prompting People to Seek Skin Treatment in Malappuram</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {commonSkinConcerns.map((concern, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] rounded-2xl p-4 border border-[#E2E8F0] hover:border-[#D97706]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#D97706] font-bold text-xs flex items-center justify-center mb-2.5">
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-sm text-[#1E2559] mb-1">
                    {concern.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {concern.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start gap-3.5">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <p className="font-bold text-amber-950 text-sm mb-0.5">
                  Critical Warning on Self-Diagnosis
                </p>
                <p>
                  These symptoms do not always indicate the same condition. For example, a fungal infection can closely resemble eczema, while an allergic reaction may look similar to other inflammatory skin disorders. Self-diagnosis can therefore lead to unsuitable treatment or dangerous delays in receiving appropriate care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMON CAUSES OF SKIN CONDITIONS */}
      <section className="py-14 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Etiological Breakdown
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Common Causes of Skin Conditions
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Understanding the root causes of skin problems helps identify when professional assessment and targeted medical therapy are necessary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndContributors.map((cause, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-1 rounded-full">
                      Cause {cause.number}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {cause.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#1E2559] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {cause.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <p className="text-[11px] font-bold text-[#1E2559] uppercase tracking-wider mb-1">
                    Clinical Action &amp; Care
                  </p>
                  <p className="text-xs text-[#D97706] font-medium leading-relaxed">
                    {cause.care}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY PROFESSIONAL SKIN ASSESSMENT MATTERS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Diagnostic Protocol
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Why Professional Skin Assessment Matters
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Choosing a treatment based only on the appearance of a skin problem can be unreliable. Different conditions may share similar symptoms but require completely different approaches.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                If you are searching for a Skin Doctor in Malappuram, consider consulting an appropriately qualified medical professional who can explain the suspected diagnosis, available treatment options, potential risks, and whether specialist referral is necessary.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                <h4 className="font-bold text-sm text-[#1E2559] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>A Comprehensive Skin Assessment Includes:</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#475569]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Reviewing when symptoms began, flare frequencies, and progression over time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Examining affected skin under magnification, assessing morphology, erythema, and scaling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Asking about allergic history, systemic medications, and previous topical steroid use.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Identifying possible occupational, product-related, or seasonal environmental triggers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Reviewing personal and family medical history of atopy, psoriasis, or autoimmune disease.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                    <span>Recommending investigations (skin scrapings, fungal KOH mounts, allergy patch testing, or biopsy).</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-md space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-[#E11D48] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1E2559]">
                  When Dermatologist Referral is Essential
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A dermatologist is particularly important when symptoms are severe, persistent, unexplained, or associated with signs of infection or potentially serious skin diseases.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <p className="text-xs font-bold text-[#1E2559]">
                      Suspected Fungal Infection vs. Eczema
                    </p>
                    <p className="text-[11px] text-[#64748B] mt-0.5">
                      Skin scrapings for fungal KOH mounts differentiate dermatophytes from dermatitis, preventing steroid-induced tinea incognito.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <p className="text-xs font-bold text-[#1E2559]">
                      Atypical Pigmented Lesions
                    </p>
                    <p className="text-[11px] text-[#64748B] mt-0.5">
                      Dermoscopic evaluation and punch biopsy are mandatory for asymmetrical, bleeding, or rapidly changing moles.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={handleBookConsultation}
                    className="flex-1 py-2.5 rounded-xl bg-[#303A88] hover:bg-[#252f75] text-white font-bold text-xs text-center transition-colors"
                  >
                    Book Diagnostic Consultation
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs text-center transition-colors border border-emerald-200"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOMEOPATHIC SKIN TREATMENT: WHAT SHOULD YOU KNOW? */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Evidence Disclosures &amp; Ethics
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Homeopathic Skin Treatment in Malappuram: What Should You Know?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              An evidence-informed, transparent perspective for individuals seeking complementary care for recurring dermatological concerns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-3xl bg-[#F8FAFD] border border-[#E2E8F0] shadow-sm">
              <p className="text-sm text-[#475569] leading-relaxed">
                Some people explore complementary healthcare when looking for help with recurring skin problems. This includes individuals searching online for a <strong>Skin Homeopathy Clinic in Malappuram</strong> or a <strong>Homeopathic Doctor for Skin Problems in Malappuram</strong>.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <p className="font-bold mb-1 flex items-center gap-1.5 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>Important Scientific Disclosure</span>
                </p>
                <p>
                  Homeopathy is based on principles that have not been established as effective methods for treating disease. Current scientific evidence does not demonstrate that homeopathic remedies effectively treat skin conditions such as eczema, psoriasis, acne, or fungal infections. Anyone considering homeopathy should understand these limitations before making a treatment decision.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Discuss Symptoms &amp; History
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A consultation must include a thorough discussion of symptoms, previous treatments, allergies, and current medications. Ensure necessary conventional medical assessments are not delayed.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Avoid Permanent Cure Claims
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Skin conditions differ in their causes, severity, and response to treatment. Claims that a remedy can permanently cure every skin problem or guarantee 100% eradication should be treated cautiously.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Do Not Delay Medical Care
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Bacterial skin infections can spread rapidly, inflammatory dermatoses can become debilitating, and suspicious lesions require biopsy. Never stop prescribed medicines without medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: EVIDENCE-BASED OPTIONS */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Evidence-Based Approaches
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Skin Disease Treatment in Malappuram: Evidence-Based Options
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              The appropriate treatment depends on the diagnosis, severity of symptoms, affected surface area, and medical history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalApproaches.map((modality, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white bg-[#0D9488] px-2.5 py-1 rounded-full">
                      Approach {modality.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B]">
                      {modality.subtitle}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#1E2559] mb-2">
                    {modality.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {modality.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Consultation CTA Card */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#242C66] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#86EFAC] bg-white/10 px-2.5 py-1 rounded-full">
                  Personalized Guidance
                </span>
                <h3 className="font-bold text-lg text-white mt-3 mb-2">
                  Need an Informed Clinical Evaluation?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Consult with Dr. Anjali Chandrasekhar for an in-depth review of your skin symptoms, previous creams, and diagnostic investigations.
                </p>
              </div>
              <button
                onClick={handleBookConsultation}
                className="mt-5 w-full py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book In-Clinic Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: DAILY SKINCARE TIPS */}
      <section className="py-14 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Daily Skin Barrier Care
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Daily Skincare Tips for Healthier Skin
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              A consistent skincare routine maintains the epidermal barrier and reduces exposure to common irritants, although it cannot replace medical care for active infections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dailySkincareTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] shadow-sm hover:border-[#10B981]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  {tip.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: RED FLAGS & WHEN TO CONSULT */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Urgent Clinical Triage
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              When Should You Consult a Skin Specialist in Malappuram?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Recognize dermatological red flags that require prompt medical evaluation rather than over-the-counter creams.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-[#E2E8F0] shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1E2559] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Observable Skin Sign</th>
                  <th className="py-3.5 px-4 font-bold">Recommended Urgency</th>
                  <th className="py-3.5 px-4 font-bold">Clinical Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {redFlags.map((flag, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFD] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#1E2559]">
                      {flag.sign}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                        {flag.urgency}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#475569] leading-relaxed">
                      {flag.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center">
            <p className="text-xs text-rose-950 font-medium">
              <strong>Emergency Warning:</strong> Seek urgent emergency medical care immediately if a rash occurs with lip or tongue swelling, difficulty breathing, dizziness, or wheezing (anaphylaxis).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: CHOOSING A CLINIC & QUESTIONS TO ASK */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Patient Guide
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
                  How to Choose a Skin Health Clinic in Malappuram
                </h2>
                <p className="text-sm text-[#475569] mt-2">
                  Selecting a healthcare provider involves more than comparing commercial advertisements or dramatic claims. Look for a clinic that prioritizes appropriate assessment, clear communication, and patient safety.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinicSelectionCriteria.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] shadow-sm"
                  >
                    <h4 className="font-bold text-xs text-[#1E2559] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
                  Patient Checklist
                </span>
                <h3 className="font-bold text-base text-[#1E2559]">
                  Questions to Ask at a Skin Homeopathy Clinic
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A healthcare provider should answer these questions transparently. If the diagnosis is uncertain, it is important not to assume that a particular treatment will be effective.
                </p>

                <div className="space-y-2 pt-1">
                  {questionsToAsk.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2 text-xs text-[#334155]"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: WHAT TO EXPECT DURING CONSULTATION */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Consultation Protocol
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              What to Expect During a Skin Consultation
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              A clinical skin consultation in Malappuram begins with a systematic evaluation of your symptoms, triggers, and medical background.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 1</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Detailed History</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                When symptoms started, flare frequency, previous topical creams, family history, and cosmetic usage.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 2</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Skin Inspection</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Examining lesion morphology, distribution, scaling, redness, and checking for secondary infection.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 3</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Diagnostic Tests</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Recommending fungal KOH scrapings, allergy patch testing, or blood work when clinically necessary.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
              <span className="text-xs font-bold text-[#0D9488] block mb-2">Step 4</span>
              <h4 className="font-bold text-sm text-[#1E2559] mb-1">Clear Care Plan</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Explaining realistic timelines, skincare habits, follow-up milestones, and specialist referrals if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: INTERACTIVE FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Doctor Answers
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Frequently Asked Questions on Skin Care in Malappuram
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Clear medical answers to help you navigate skin problems, diagnosis, and evidence-informed care.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1E2559] hover:bg-white transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-[#D97706] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#D97706]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: APPOINTMENT BOOKING ENGINE */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Direct Scheduling
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Book Your Skin Care Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Select your preferred appointment mode: In-Clinic visit at Kuttippuram or Puthanathani, or an Online Video Consultation from home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* SECTION 14: REGIONAL RELATED GUIDES */}
      <RegionalRelatedGuides currentGuideKey="skin-treatment-malappuram" />
    </div>
  );
};
