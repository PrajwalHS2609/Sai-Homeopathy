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
  Bug,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const RingwormPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for ringworm, fungal skin rash, itching, and dermatophyte care (Ponnani patient guide).'
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
    navigateToBookingWithReason('Ringworm & Fungal Skin Consultation - Ponnani', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 9 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Contagious Fungal Infection',
      desc: 'Ringworm is a contagious fungal infection caused by dermatophytes, not an internal or parasitic worm infestation.',
    },
    {
      title: 'Diverse Body Sites',
      desc: 'It can affect the body (tinea corporis), feet (athlete’s foot), groin (jock itch), scalp, hands, and nails.',
    },
    {
      title: 'Characteristic Rash',
      desc: 'Common symptoms include circular erythematous rashes, intense itching, raised active scaly borders, and local irritation.',
    },
    {
      title: 'Multiple Transmission Routes',
      desc: 'Ringworm spreads through direct skin contact, infected domestic animals, contaminated surfaces, and shared personal items.',
    },
    {
      title: 'Established Antifungal Therapy',
      desc: 'Evidence-based topical and oral antifungal medicines are the scientifically established treatment for dermatophytosis.',
    },
    {
      title: 'Oral Antifungals for Scalp & Nails',
      desc: 'Scalp (tinea capitis) and nail infections require prescription oral antifungal tablets; creams and shampoos alone cannot cure them.',
    },
    {
      title: 'Scientific Evidence Transparency',
      desc: 'There is insufficient reliable scientific evidence that homoeopathy cures ringworm or eliminates dermatophyte fungi.',
    },
    {
      title: 'Strict Steroid Warning',
      desc: 'Never use steroid creams without medical advice, as steroids mask symptoms while allowing the fungus to spread (tinea incognito).',
    },
    {
      title: 'Early Diagnosis Halts Spread',
      desc: 'Early professional diagnosis and complete antifungal therapy prevent spreading to family members and prevent chronic recurrence.',
    },
  ];

  // 5 Different Types of Ringworm
  const ringwormTypes = [
    {
      number: '01',
      title: 'Tinea Corporis – Body Ringworm',
      badge: 'Arms, Legs & Trunk',
      desc: 'Tinea corporis affects areas such as the arms, legs, chest, back, and trunk. It commonly appears as round or oval patches with a distinctive scaly, raised, active border and a clearer centre.',
      clinicalDetails: 'The affected area intensely itches and gradually expands centrifugally. Multiple new patches can develop when fungal spores are transferred by scratching or contaminated clothing.',
    },
    {
      number: '02',
      title: 'Tinea Cruris – Jock Itch',
      badge: 'Groin & Inner Thighs',
      desc: 'Tinea cruris commonly affects the groin, inner thighs, perineum, and surrounding skin folds. It causes sharp erythematous margins, intense chafing, burning, and severe itching.',
      clinicalDetails: 'Excessive perspiration, tight non-breathable clothing, and coastal humidity accelerate fungal growth. Keeping skin folds rigorously dry and wearing loose cotton underwear is essential.',
    },
    {
      number: '03',
      title: 'Tinea Pedis – Athlete’s Foot',
      badge: 'Interdigital & Soles',
      desc: 'Athlete’s foot affects the skin of the feet, particularly the web spaces between the toes and the plantar soles. Symptoms include macerated white skin, severe itching, peeling, and painful fissures.',
      clinicalDetails: 'Easily transmitted in public showers, mosque washing areas, gyms, and through shared footwear. Thorough interdigital drying after ablution or bathing prevents chronic recurrence.',
    },
    {
      number: '04',
      title: 'Tinea Capitis – Scalp Ringworm',
      badge: 'Scalp & Follicular Shafts',
      desc: 'Tinea capitis invades hair follicles and shafts on the scalp, causing scaly circular patches, broken "black dot" hairs, and localized hair loss, particularly in school-age children.',
      clinicalDetails: 'Mandates prescription oral antifungal medicine (such as griseofulvin or terbinafine) because topical washes cannot penetrate the hair cortex. Swollen, boggy, pus-oozing lesions (kerion) represent a severe hypersensitivity reaction requiring urgent care to prevent scarring alopecia.',
    },
    {
      number: '05',
      title: 'Tinea Unguium – Fungal Nail Infection',
      badge: 'Nails (Onychomycosis)',
      desc: 'Fungal nail infection affects toenails and fingernails, causing them to become thickened, yellow-brown, opaque, brittle, subungually hyperkeratotic, and distorted.',
      clinicalDetails: 'Nail keratin is dense and slow-growing; successful eradication usually requires several months of dermatologist-supervised oral antifungal therapy and mycological testing.',
    },
  ];

  // 8 Causes & Risk Factors
  const causesList = [
    {
      title: 'Direct Skin-to-Skin Contact',
      desc: 'Touching an infected person’s skin rash transfers dermatophyte fungal spores directly.',
    },
    {
      title: 'Infected Animals & Pets',
      desc: 'Cats, dogs, cattle, and other domestic animals frequently carry zoophilic fungi (e.g., Microsporum canis) that transmit to humans.',
    },
    {
      title: 'Contaminated Personal Items',
      desc: 'Sharing bath towels, bed linens, unwashed clothing, combs, prayer mats, or footwear easily spreads the infection.',
    },
    {
      title: 'Damp & Humid Environments',
      desc: 'Dermatophytes thrive in tropical coastal heat, monsoon humidity, and moist skin creases.',
    },
    {
      title: 'Excessive Sweating (Hyperhidrosis)',
      desc: 'Prolonged sweat accumulation breaks down the cuticular acid mantle and provides ideal conditions for fungal proliferation.',
    },
    {
      title: 'Shared Public Facilities',
      desc: 'Walking barefoot on damp surfaces in gym locker rooms, communal bathrooms, and swimming pool decks.',
    },
    {
      title: 'Poorly Ventilated Footwear',
      desc: 'Enclosed, damp, synthetic shoes worn for extended hours without changing socks foster athlete’s foot.',
    },
    {
      title: 'Reduced Immune Defence',
      desc: 'Underlying health conditions like diabetes mellitus or immunosuppressive medications make fungal infections more persistent.',
    },
  ];

  // 4 Evidence-Based Treatment Options
  const evidenceTreatments = [
    {
      icon: <Droplets className="w-5 h-5 text-[#303A88]" />,
      title: 'Topical Antifungal Creams & Sprays',
      desc: 'For uncomplicated, limited fungal infections of the body, groin, or feet, topical antifungal agents—including terbinafine, clotrimazole, miconazole, and ketoconazole—are applied twice daily. Crucially, application must continue for 1 to 2 weeks after visible lesions clear to eradicate residual spores.',
    },
    {
      icon: <Pill className="w-5 h-5 text-[#0D9488]" />,
      title: 'Prescription Oral Antifungal Medicines',
      desc: 'Extensive body infections, scalp ringworm (tinea capitis), fungal nail infections (onychomycosis), and cases failing topical creams require prescription systemic oral antifungals (terbinafine, itraconazole, or griseofulvin) under medical monitoring.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#8B5CF6]" />,
      title: 'Medicated Antifungal Shampoos',
      desc: 'Shampoos containing ketoconazole or selenium sulphide are used as supportive adjuncts in scalp infections to reduce spore shedding to household members, though oral antifungal therapy remains mandatory for curative follicular clearance.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      title: 'Strict Avoidance of Unsuitable Steroid Creams',
      desc: 'Never apply topical steroid creams (or combination triple-action creams) to fungal infections. Steroids blunt erythema and itching temporarily while suppressing local immune defence, allowing fungi to deeply invade. This creates "tinea incognito," leading to widespread, persistent, and difficult-to-treat infections.',
    },
  ];

  // 10 Prevention Precautions
  const preventionTips = [
    'Keep the affected skin thoroughly clean, cool, and dry throughout the day.',
    'Change damp, sweaty clothes and innerwear promptly after physical exertion.',
    'Wash bath towels, garments, and bed linen in hot water and dry them completely in sunlight.',
    'Never share combs, hairbrushes, towels, clothes, caps, prayer mats, or footwear with anyone.',
    'Wear loose, breathable 100% cotton clothing to prevent friction and sweat buildup in skin folds.',
    'Thoroughly dry the spaces between your toes after ablution, showers, or swimming.',
    'Never walk barefoot in communal showers, locker rooms, public bathrooms, or damp prayer halls.',
    'Sanitize personal grooming tools, nail clippers, and hair accessories regularly.',
    'Seek prompt veterinary treatment if a pet dog or cat shows circular patches of hair loss or scaling.',
    'Complete the entire recommended course of prescribed antifungal medication even after itching stops.',
  ];

  // 6 Clinic Selection Standards
  const selectionCriteria = [
    {
      num: '01',
      title: 'Accredited Medical Qualifications',
      desc: 'Verify the doctor’s accredited education (BHMS, MD Hom.) and active state medical council registration in Kerala.',
    },
    {
      num: '02',
      title: 'Clinical Diagnostic Triage',
      desc: 'Ensure the practitioner understands the vital importance of confirming fungal etiology and checking for skin scrapings.',
    },
    {
      num: '03',
      title: 'Scientific Evidence Transparency',
      desc: 'A responsible clinic candidly states that homoeopathy has no reliable clinical evidence for eradicating dermatophytes.',
    },
    {
      num: '04',
      title: 'Prompt Dermatological Referral',
      desc: 'Scalp ringworm, painful kerion swellings, extensive body rashes, and nail fungus must be referred to dermatologists.',
    },
    {
      num: '05',
      title: 'Patient Safety & Ethical Standards',
      desc: 'Avoid clinics promising miraculous overnight cures or advising patients to discontinue prescribed antifungal medications.',
    },
    {
      num: '06',
      title: 'Review of Previous Topical Creams',
      desc: 'A careful practitioner checks whether prior steroid creams have altered the lesion into steroid-modified tinea incognito.',
    },
  ];

  // 10 FAQs from user document
  const faqs = [
    {
      q: 'What is ringworm, and how does it spread?',
      a: 'Ringworm is a contagious fungal infection caused by dermatophyte fungi that feed on keratin in the outer skin, hair, and nails. It spreads through direct skin contact with infected individuals or animals, and via contaminated personal items like towels, clothes, bedding, combs, and unwashed footwear.',
    },
    {
      q: 'Is ringworm a serious skin disease?',
      a: 'Most cases of uncomplicated ringworm are not dangerous and heal completely with proper antifungal medication. However, scalp infections (tinea capitis), extensive rashes, and infections in individuals with diabetes or compromised immunity require intensive medical care to prevent permanent scarring or secondary bacterial cellulitis.',
    },
    {
      q: 'Is Homoeopathic Ring worm Treatment in Ponnani effective?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy can cure ringworm or eradicate the dermatophyte fungi responsible for the infection. Evidence-based medical antifungal treatment remains the established and necessary clinical standard.',
    },
    {
      q: 'Can ringworm spread from one person to another?',
      a: 'Yes. Ringworm is highly contagious. It transmits readily through direct skin-to-skin touch, sharing unwashed towels, clothes, bed linen, or walking barefoot on contaminated floors. Proper hygiene precautions and completing antifungal courses help stop transmission.',
    },
    {
      q: 'How long does ringworm take to heal?',
      a: 'Uncomplicated body or groin ringworm typically responds to topical antifungal creams within 2 to 4 weeks. Scalp ringworm and toenail fungal infections require several months of supervised oral antifungal therapy because hair follicles and nail plates grow slowly.',
    },
    {
      q: 'Can ringworm cause hair loss?',
      a: 'Yes. Ringworm of the scalp (tinea capitis) infects hair shafts, causing them to become brittle and snap off near the skin surface. Severe inflammatory fungal reactions called kerions cause boggy pus-filled swellings that can result in permanent scarring and bald patches if not treated urgently with oral antifungals.',
    },
    {
      q: 'Can I use steroid cream for ringworm?',
      a: 'No. Never use steroid creams (or mixed steroid-antibacterial-antifungal creams) on suspected fungal infections without a doctor’s prescription. Steroids temporarily mask redness and itching while crippling local immune responses, allowing the fungus to flourish and creating a severe condition called tinea incognito.',
    },
    {
      q: 'Can ringworm return after treatment?',
      a: 'Yes. Fungal reinfection frequently occurs if antifungal treatment is stopped prematurely as soon as itching ceases, if damp hygiene habits persist, or if infected household contacts, shared towels, or pets are left untreated.',
    },
    {
      q: 'Which doctor should I consult for ringworm?',
      a: 'A qualified general physician or dermatologist should be consulted. A dermatologist is particularly essential for persistent, widespread, recurrent, scalp, or nail fungal infections, or when a previous steroid cream has altered the rash.',
    },
    {
      q: 'What should I do if ringworm does not improve?',
      a: 'Consult a qualified medical doctor or dermatologist for reassessment. The diagnosis may need confirmation via potassium hydroxide (KOH) skin scraping or fungal culture, or an oral prescription antifungal may be required. Do not keep applying random over-the-counter creams.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Ringworm Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Ponnani for Ring worm Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Shield className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Fungal Skin Guide • Ponnani Patients"
        title="Homoeopathic Clinic in Ponnani for Ring worm Treatment"
        subtitle="Clinical evaluation and evidence-grounded consultations for patients in Ponnani, Edappal, and Malappuram district dealing with ringworm, tinea fungal infections, circular rashes, itching, and scaling."
        metrics={[
          { label: 'Condition Focus', value: 'Ringworm & Fungal Tinea' },
          { label: 'Clinical Triage', value: 'KOH & Infection Differential' },
          { label: 'Evidence Policy', value: 'Transparent Medicine' },
        ]}
        doctorSubtitle="BHMS, MD Hom. | Fungal Skin Triage & Constitutional Consultations"
        doctorBio="10+ years of dedicated clinical experience conducting confidential dermatological assessments, chronic rash reviews, hygiene guidance, and evidence-informed constitutional consultations in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Skin infections can cause discomfort, itching, redness and changes in the appearance of the skin. One common fungal skin infection is ringworm, also known as tinea. Despite its name, ringworm is not caused by a worm. It develops when fungi called dermatophytes infect the skin, scalp or nails. The infection often appears as a circular or ring-shaped rash with a raised, scaly edge and may spread to other parts of the body if not treated appropriately.
          </p>
          <p>
            People experiencing persistent itching, circular skin patches or recurring fungal infections may look for a suitable healthcare provider. If you are searching for <strong>Ring worm Treatment in Ponnani</strong>, understanding the causes, symptoms and available medical treatments can help you take the right steps towards managing the infection.
          </p>
          <p>
            A <strong>Homoeopathic Clinic in Ponnani for Ring worm Treatment</strong> may be one of the healthcare options people explore. However, ringworm is a fungal infection, and there is insufficient reliable scientific evidence that homoeopathy can eliminate the fungus or cure ringworm. Evidence-based antifungal treatment is the established approach. Patients should not delay appropriate medical care or replace prescribed antifungal medicines with homoeopathic remedies.
          </p>
          <p>
            This clinical guide explains ringworm, its different types, common symptoms, causes, diagnosis, treatment options and important considerations when choosing a healthcare provider in Ponnani.
          </p>
        </div>
      </section>

      {/* Key Takeaways Section (9 Points) */}
      <section className="py-12 bg-[#F1F5F9]/70 border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              AT A GLANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Key Takeaways: Ringworm Care in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Essential medical facts to understand before seeking fungal skin treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* What Is Ringworm? */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PATHOLOGY &amp; BIOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              What Is Ringworm?
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Ringworm is a fungal infection that affects the outer keratinized layers of the skin, hair, or nails. It is medically designated as <strong>dermatophytosis</strong> or <strong>tinea</strong>. Dermatophyte fungi thrive on keratin, an insoluble structural protein found in the epidermis, hair strands, and nail plates.
            </p>
            <p>
              The infection typically produces an annular (circular) erythematous rash with a clearer central area and a prominent, active, raised, scaly outer border. However, not every case looks like a classic textbook ring. Some infections present as widespread erythema, irregular scaling patches, intense excoriation, or marked inflammation.
            </p>
            <p>
              Ringworm can affect people of all ages. It spreads rapidly in warm, humid coastal environments such as Malappuram district, particularly when skin remains damp, sweaty, or occluded by synthetic clothing.
            </p>
            <p className="bg-[#EEF2FB] p-4 rounded-xl border border-[#D8E1F5] font-medium text-[#1E2559]">
              People looking for <strong>Ring worm problem Treatment in Ponnani</strong> must remember that fungal infections can closely mimic other non-fungal dermatoses, including eczema, psoriasis, nummular dermatitis, and allergic contact reactions. An accurate medical diagnosis is vital before initiating treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Different Types of Ringworm (5 Subtypes) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              CLINICAL CLASSIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Different Types of Ringworm
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              The medical designation of tinea changes based on the anatomical location of the fungal infection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ringwormTypes.map((item, idx) => (
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

      {/* Common Causes of Ringworm (8 Causes) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSMISSION VECTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Common Causes of Ringworm
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Ringworm develops when dermatophyte fungi infect keratinized skin, hair, or nails. These infectious spores transmit through several everyday avenues:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {causesList.map((cause, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#F8FAFD] p-4 sm:p-5 rounded-xl border border-[#D8E1F5] shadow-sm flex flex-col justify-between"
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

          <div className="bg-[#F8FAFD] p-4 rounded-xl border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            Understanding transmission modes is essential for preventing family cross-infection and avoiding continuous reinfection cycles.
          </div>
        </div>
      </section>

      {/* Symptoms of Ringworm You Should Not Ignore (10 Symptoms) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SYMPTOM EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Symptoms of Ringworm You Should Not Ignore
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            The presentation of ringworm varies based on the anatomical site, duration, and whether topical creams have previously been applied:
          </p>

          <div className="bg-white rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#303A88]" />
              Key Clinical Symptoms Evaluated:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Circular, annular, or oval ring-shaped skin patches.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Redness, erythema, or darker hyperpigmentation in brown skin.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Intense, persistent itching and burning irritation.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Raised, elevated, active scaly borders spreading outward.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Dry, flaky, powdery, or peeling cuticular skin.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Macerated skin and painful cracks between the toes.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Tiny peripheral fluid-filled blisters (vesicles) on borders.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Broken "black-dot" hairs and patchy bald spots on the scalp.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Thickened, brittle, crumbly, or yellow-discoloured nails.</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFD] p-3 rounded-lg border border-[#E2E8F0]">
                <Check className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span>Rapid spreading of the rash to contiguous skin folds or limbs.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Not every circular rash is ringworm. If a rash continues to expand, develops pus, causes severe pain, or fails to resolve, consult a qualified healthcare professional.
            </p>
          </div>
        </div>
      </section>

      {/* Ring worm Treatment in Ponnani: Why Proper Diagnosis Matters */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              DIAGNOSTIC WORKUP
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Ring worm Treatment in Ponnani: Why Proper Diagnosis Matters
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Selecting the appropriate treatment begins with confirming that the skin disorder is genuinely a dermatophyte fungal infection. Rashes resembling ringworm may turn out to be nummular eczema, plaque psoriasis, pityriasis rosea, or contact dermatitis.
            </p>
            <p>
              Applying the wrong medication—such as an over-the-counter steroid cream—delays healing and allows the fungal infection to deeply penetrate into hair follicles.
            </p>
            <p>
              If you are searching for <strong>Ring worm Treatment in Ponnani</strong>, consider consulting a qualified doctor or dermatologist for a clinical evaluation:
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-xl p-6 border border-[#D8E1F5]">
            <h3 className="font-heading font-bold text-[#1E2559] text-base sm:text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#303A88]" />
              Diagnostic Steps in Clinical Evaluation:
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">1. Visual Morphological Examination:</strong>
                <span>Assessing lesion shape, active margins, clearing centres, maceration in skin folds, and involvement of hair or nails.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">2. Detailed Medical &amp; Treatment History:</strong>
                <span>Reviewing onset date, spreading velocity, contact with infected family members or animals, and all over-the-counter creams already applied.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">3. Potassium Hydroxide (KOH) Skin Scraping:</strong>
                <span>A clinician gently scrapes scale from the active border to examine under a microscope for branching fungal hyphae and arthrospores.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">4. Fungal Culture Testing:</strong>
                <span>When infections are atypical, recurrent, or suspected to be resistant, samples are cultured on Sabouraud dextrose agar to identify the fungal species.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                <strong className="text-[#1E2559] block mb-1">5. Hair &amp; Nail Diagnostic Sampling:</strong>
                <span>Plucked hair roots or nail clippings are tested to guide oral systemic antifungal dosing for tinea capitis or tinea unguium.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] mt-4 pt-3 border-t border-[#E2E8F0]">
              Accurate diagnosis allows the doctor to prescribe the right antifungal medicine and define the exact duration needed to prevent recurrence.
            </p>
          </div>
        </div>
      </section>

      {/* Homoeopathic Ring worm Treatment in Ponnani: What You Should Know */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TRANSPARENT MEDICINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Homoeopathic Ring worm Treatment in Ponnani: What You Should Know
            </h2>
          </div>

          <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
            <p>
              Some patients explore homoeopathy when looking for complementary solutions to recurring skin rashes. A <strong>Homoeopathic Ring worm Treatment in Ponnani</strong> consultation may involve discussing skin symptoms, general health history, and previous treatment experiences.
            </p>
            <p>
              However, it is vital to understand the current scientific medical consensus. <strong>Homoeopathy has not been established through reliable clinical evidence as an effective treatment for ringworm. It has not been shown to reliably eliminate dermatophyte fungi or prevent fungal spread</strong>.
            </p>
          </div>

          {/* Critical Evidence & Patient Safety Alert */}
          <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <h4 className="font-heading font-bold text-base text-amber-900">
                  Scientific Evidence Disclosure &amp; Patient Safety Notice
                </h4>
                <p>
                  Ringworm requires appropriate antifungal treatment. Delaying effective antifungal care allows the fungus to spread across larger body areas, invade deeper hair follicles, and infect other household members.
                </p>
                <p className="font-semibold text-amber-950">
                  If you are considering consulting a Homoeopathic Doctor for Ring worm Problems in Ponnani, discuss your condition with a qualified medical professional or dermatologist as well. Never discontinue prescribed antifungal medicines or substitute unproven remedies for established medical therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Treatment Options for Ringworm (4 Modalities) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              ESTABLISHED THERAPIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Evidence-Based Treatment Options for Ringworm
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Antifungal medicines are the scientifically established treatment for dermatophytosis, tailored to the infection site and severity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Choosing a Ring worm Homoeopathy Clinic in Ponnani (6 Criteria) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Choosing a Ring worm Homoeopathy Clinic in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Evaluate the clinical responsibility, transparency, and referral ethics of the care being offered before selecting a clinic.
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
            A responsible Ring worm Doctor in Ponnani helps identify the possible cause of the rash and guides you towards appropriate medical care. If you require specialist evaluation, a qualified dermatologist is the appropriate professional for complex fungal skin disorders.
          </div>
        </div>
      </section>

      {/* Ring worm Issues Treatment in Ponnani: Preventing Recurrence (10 Precautions) */}
      <section className="py-12 bg-[#EEF2FB]/60 border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-[#303A88] pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              PREVENTION PROTOCOLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Ring worm Issues Treatment in Ponnani: Preventing Recurrence
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Ringworm frequently returns when treatment is stopped prematurely or when re-exposure occurs from contaminated items or infected contacts. Adhere to these 10 practical measures:
          </p>

          <div className="space-y-2.5">
            {preventionTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-[#D8E1F5] shadow-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ring worm Health Clinic in Ponnani: When to Seek Medical Advice */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs uppercase tracking-widest font-bold text-rose-600 font-sans">
              WHEN TO CONSULT A DOCTOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1E2559] mt-1">
              Ring worm Health Clinic in Ponnani: When to Seek Medical Advice
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            While localized ringworm can be treated promptly, certain warning signs require immediate medical or dermatological attention:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">The rash continues to spread despite topical antifungal cream use.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Symptoms fail to improve after 2 weeks of appropriate treatment.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">The scalp develops scaly bald patches or broken hair shafts.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">The affected skin becomes severely painful, hot, swollen or develops pus.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">Multiple or extensive body areas (arms, trunk, groin) are affected.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">The infection involves the face, beard area, scalp or thick nail plates.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">You have diabetes mellitus, neuropathy, or an immunocompromised state.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3.5 bg-rose-50/50 rounded-lg border border-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="text-[#1E2559] font-medium">The fungal infection repeatedly returns shortly after stopping creams.</span>
            </div>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
            <strong>Urgent Scalp Alert (Kerion):</strong> A boggy, tender, pus-oozing scalp swelling with fever represents a severe inflammatory reaction called kerion. Seek immediate hospital or dermatologist care to prevent irreversible scarring alopecia.
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
              Frequently Asked Questions: Ringworm Treatment in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Clear, transparent clinical answers to common patient questions regarding fungal tinea, transmission, steroid risks, and antifungal care.
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

      {/* Take the Right Steps Towards Healthy Skin (Closing CTA & Booking Engine) */}
      <section id="booking-section" className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              TAKE THE FIRST STEP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#1E2559]">
              Take the Right Steps Towards Healthy Skin
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Ringworm is a common fungal infection, but it should not be ignored. Persistent itching, circular rashes, scalp scaling and nail changes require proper medical evaluation. Identifying the infection early and following appropriate antifungal treatment helps control symptoms and prevents transmission to family members.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              If you are searching for <strong>Ring worm Treatment in Ponnani</strong>, choose a healthcare provider who prioritises accurate diagnosis, patient safety and evidence-based care.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              A <strong>Homoeopathic Clinic in Ponnani for Ring worm Treatment</strong> may be one of the services you explore, but homoeopathy should not be considered a scientifically proven cure for fungal infections or a replacement for antifungal medicines.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold text-[#1E2559]">
              Take care of your skin, maintain good personal hygiene and consult a qualified healthcare professional when symptoms appear or persist. Timely and appropriate treatment is the most reliable way to manage ringworm and protect your overall skin health.
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
              Patients in Ponnani, Edappal, and surrounding areas can reserve a dedicated consultation slot for skin evaluation and fungal rash triage.
            </p>
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides Component */}
      <RegionalRelatedGuides
        currentGuideKey="ringworm-treatment-ponnani"
        currentCity="Ponnani"
        currentCondition="Ringworm & Fungal Skin Care"
        categoryView="skin-hair-care"
      />
    </div>
  );
};
