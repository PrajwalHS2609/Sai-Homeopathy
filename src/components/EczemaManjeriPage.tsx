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
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Lock,
  Sun,
  Activity,
  Droplets,
  Heart,
  Check,
  Flame,
  Baby,
  Users,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const EczemaManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Eczema & Skin Problems (Manjeri patient guide).'
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
    navigateToBookingWithReason('Eczema & Skin Problems Consultation - Manjeri', 'online');
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
      title: 'Inflammatory Skin Condition',
      desc: 'Eczema is an inflammatory skin condition that commonly causes persistent itching, dryness, redness, and recurring flare-ups across age groups.',
    },
    {
      title: 'Accurate Diagnosis Essential',
      desc: 'Several conditions (fungal tinea, contact dermatitis, psoriasis, scabies) resemble eczema, making careful clinical differentiation vital.',
    },
    {
      title: 'Skin Barrier Protection',
      desc: 'Consistent, regular emollient moisturizing and gentle cleansing form the foundation for restoring an impaired epidermal moisture barrier.',
    },
    {
      title: 'Evidence-Based Anti-Inflammatories',
      desc: 'Medically indicated treatments, including appropriate prescribed topical anti-inflammatories, are necessary to control acute active inflammation.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Reliable scientific clinical evidence has not shown homoeopathy to reliably treat or cure eczema beyond non-specific placebo effects.',
    },
    {
      title: 'Preserve Prescribed Medications',
      desc: 'Do not discontinue prescribed medical therapies or delay proven dermatological care in favor of unproven complementary treatments.',
    },
    {
      title: 'Prompt Infection Assessment',
      desc: 'Persistent, severe, cracked, weeping, or infected-looking rashes (pus, honey-crusts, spreading heat) require urgent professional medical evaluation.',
    },
    {
      title: 'Individualised Long-Term Plan',
      desc: 'A qualified healthcare professional can help formulate a personalized maintenance regimen suited to individual triggers and disease severity.',
    },
  ];

  const commonSymptoms = [
    'Persistent, intense itching (pruritus) that characteristically worsens at night',
    'Dry, rough, hyper-sensitive skin with an impaired moisture-retention barrier',
    'Erythematous, red, inflamed, or hyperpigmented/discoloured cutaneous patches',
    'Flaking, scaling, or peeling of the epidermis on exposed or flexural areas',
    'Small excoriated papules or bumps that become intensely irritated after scratching',
    'Painful fissures and cracked skin, particularly across hands, fingertips, and soles',
    'Lichenification: thickened, leathery skin resulting from chronic rub and scratch cycles',
    'Serous oozing, weeping, or golden crusting during severe acute inflammatory flares',
  ];

  const contributingCauses = [
    {
      title: '1. Compromised Skin Moisture Barrier',
      desc: 'Defects in epidermal barrier proteins (such as filaggrin) allow excessive transepidermal water loss (TEWL), leaving the skin rough, xerotic, and hyper-permeable to environmental irritants and microbes.',
      tip: 'Apply thick, bland ointments or lipid-rich barrier creams immediately following bathing while the stratum corneum is hydrated.',
    },
    {
      title: '2. Harsh Skincare & Detergent Contact',
      desc: 'Surfactants, synthetic fragrances, antibacterial soaps, laundry detergents, and solvent chemicals strip natural intercellular lipids, directly triggering irritant contact dermatitis and eczema flare-ups.',
      tip: 'Switch entirely to unperfumed syndet cleansers, double-rinse laundry linens, and wear protective nitrile gloves when handling detergents.',
    },
    {
      title: '3. Weather & Environmental Fluctuations',
      desc: 'Dry winter air and artificial indoor heating accelerate skin dehydration, whereas intense tropical heat and profuse sweating can cause stinging, sweat-duct irritation, and flexural eczema flares.',
      tip: 'Use indoor room humidifiers in dry climates and wear loose, breathable, 100% pure cotton garments in humid conditions.',
    },
    {
      title: '4. Allergens & Contact Sensitizers',
      desc: 'Specific aeroallergens (house dust mites, animal dander, pollen) and contact sensitizers (nickel, rubber accelerators, topical preservatives) provoke cell-mediated cutaneous immune reactions in atopic individuals.',
      tip: 'A patch test or allergy evaluation can identify specific chemical contact allergens causing refractory localized dermatitis.',
    },
    {
      title: '5. Neurogenic Stress & Sleep Disruption',
      desc: 'Psychological stress upregulates systemic corticotropin-releasing hormone and pro-inflammatory neuropeptides, dramatically lowering the itch threshold and perpetuating the destructive itch-scratch-damage cycle.',
      tip: 'Incorporate active relaxation routines, cool bedroom temperatures, and gentle bedtime skin care to protect restorative sleep.',
    },
    {
      title: '6. Mechanical Scratch Damage',
      desc: 'Vigorous scratching mechanically destroys the stratum corneum, induces keratinocyte release of inflammatory cytokines, and inoculates skin flora (Staphylococcus aureus) leading to secondary impetiginization.',
      tip: 'Keep fingernails short and filed smooth, use cool saline compresses to calm acute pruritus, and avoid bare skin scratching.',
    },
  ];

  const consultationQuestions = [
    'What specific type of eczema or dermatitis is most likely causing your symptoms?',
    'Could an underlying fungal infection, scabies, psoriasis, or contact allergy be the true cause?',
    'Which evidence-based medical treatments are safest and most effective for your severity level?',
    'What is the precise step-by-step routine for moisturizing and reinforcing your skin barrier?',
    'Which specific skincare ingredients, clothing fabrics, or occupational exposures should be avoided?',
    'What clinical signs indicate that your rash has developed a bacterial or viral secondary infection?',
    'When is formal referral to a qualified dermatologist recommended for advanced diagnostic testing?',
  ];

  const evidenceBasedOptions = [
    {
      title: '1. Regular Emollient Moisturising',
      desc: 'Moisturisers are the clinical cornerstone of eczema therapy. Fragrance-free ointments and lipid-rich creams rebuild the lipid matrix, retard water loss, and soothe inflammation when applied liberally 2 to 3 times daily.',
    },
    {
      title: '2. Gentle, Non-Soap Cleansing',
      desc: 'Cleanse with lukewarm water and mild, soap-free syndet bars or cleansing lotions. Avoid rough sponges or abrasive scrubbing, and pat dry gently with a soft cotton towel without vigorous rubbing.',
    },
    {
      title: '3. Appropriate Prescribed Anti-Inflammatory Therapies',
      desc: 'To quell acute inflammation, physicians prescribe targeted topical corticosteroids or non-steroidal topical calcineurin inhibitors. Using the correct potency for the appropriate anatomical area ensures efficacy while avoiding side effects.',
    },
    {
      title: '4. Trigger Mapping & Sensible Avoidance',
      desc: 'Keeping a simple flare-up diary helps identify individual culprits like particular cosmetics, wool fabrics, or sweating. Restrictive elimination diets should never be undertaken without verified clinical testing, especially in growing children.',
    },
    {
      title: '5. Scratch Mitigation & Skin Protection',
      desc: 'Trimming fingernails, applying cold compresses to numb acute itch signals, wearing soft non-abrasive cotton, and using night mittens for infants prevents epidermal trauma and microbial superinfection.',
    },
  ];

  const everydaySkincareTips = [
    {
      step: '01',
      title: 'Choose Fragrance-Free Products',
      desc: 'Select plain, bland, unperfumed emollient creams and cleansers. Avoid products containing artificial fragrances, essential oils, drying alcohols, or herbal extracts that can provoke allergic contact dermatitis.',
    },
    {
      step: '02',
      title: 'Avoid Hot Showers',
      desc: 'Hot water strips essential skin oils and triggers mast cell histamine release. Bathe in lukewarm water for no more than 5 to 10 minutes.',
    },
    {
      step: '03',
      title: 'Wear Soft, Breathable Clothing',
      desc: 'Wear 100% loose-weave cotton or bamboo fabrics. Strictly avoid coarse wool, stiff synthetics, and rough seams that cause friction and mechanical itching.',
    },
    {
      step: '04',
      title: 'Manage Heat & Sweat',
      desc: 'Rinse off sweat promptly with plain cool water after physical exercise or hot outdoor exposure, and change out of damp garments immediately.',
    },
    {
      step: '05',
      title: 'Moisturise While Damp (Soak & Seal)',
      desc: 'Apply your emollient within 3 minutes of stepping out of the shower to trap surface moisture before it evaporates into the room air.',
    },
    {
      step: '06',
      title: 'Resist the Urge to Scratch',
      desc: 'Apply a clean, refrigerated cool gel compress or press gently with clean fingertips instead of raking with sharp fingernails.',
    },
    {
      step: '07',
      title: 'Follow Medical Instructions Carefully',
      desc: 'Never apply strong prescription steroid creams intended for the body onto delicate facial skin or eyelids unless explicitly instructed by a doctor.',
    },
  ];

  const faqs = [
    {
      question: '1. Where can I find Eczema Treatment in Manjeri?',
      answer:
        'You can consult qualified healthcare professionals offering clinical dermatology and general medicine assessments in Manjeri. Verify the clinician\'s recognized qualifications (such as MBBS/MD Dermatology or BHMS for complementary consultations), transparent communication regarding evidence, and willingness to collaborate with specialists.',
    },
    {
      question: '2. Is Homoeopathic Eczema Treatment in Manjeri effective?',
      answer:
        'Current reliable scientific clinical evidence has not established homoeopathy as an effective treatment or cure for eczema. Patients exploring complementary consultations should understand that evidence-based medical treatments (emollients, topical anti-inflammatories) remain the standard of care, and prescribed medications must not be discontinued.',
    },
    {
      question: '3. What are the common symptoms of eczema?',
      answer:
        'Common symptoms include persistent itching (often worse at night), dry xerotic skin, redness or discolouration, flaking, cracking, skin thickening (lichenification), and occasional weeping or crusting during acute flares. Symptoms can affect the hands, face, neck, and flexural creases of elbows and knees.',
    },
    {
      question: '4. Can eczema be managed long-term?',
      answer:
        'Yes. While eczema is a chronic, recurring condition, long-term control is achievable through daily barrier repair (soak-and-seal moisturizing), avoiding verified triggers, using mild syndet cleansers, and applying doctor-prescribed anti-inflammatory therapies proactively at the earliest sign of a flare.',
    },
    {
      question: '5. When should I seek an Eczema Consultation in Manjeri?',
      answer:
        'You should arrange a medical consultation if itching interferes with sleep or daily work, if the rash repeatedly recurs despite over-the-counter moisturizers, if the rash is spreading rapidly, or if you notice signs of bacterial infection such as pus, golden crusts, increasing pain, or fever.',
    },
    {
      question: '6. What should I expect from a Chronic Eczema Consultation in Manjeri?',
      answer:
        'A comprehensive consultation involves taking a detailed history of your symptoms, review of past treatments, assessment of daily skincare habits, physical examination of the lesions, mapping of environmental triggers, and formulating an individualized evidence-grounded management and referral plan.',
    },
    {
      question: '7. Can eczema be confused with other skin problems?',
      answer:
        'Yes. Conditions such as superficial fungal tinea infections (ringworm), allergic contact dermatitis, plaque or guttate psoriasis, scabies mite infestations, and seborrhoeic dermatitis can closely resemble eczema. An accurate professional assessment is essential because treatments for these conditions differ completely.',
    },
    {
      question: '8. What daily habits may help eczema-prone skin?',
      answer:
        'Helpful daily practices include applying fragrance-free bland moisturizers generously within 3 minutes of lukewarm bathing, using soap-free cleansers, wearing soft 100% cotton clothing, avoiding scratch damage by keeping nails short, managing sweat promptly, and following a prescribed medical treatment plan.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Eczema Treatment in Manjeri"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Eczema Treatment in Manjeri"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />}
        badgeText="Regional Clinical Eczema Guide • Manjeri Patients"
        title="Homoeopathic Treatment for Eczema Skin Problems in Manjeri"
        subtitle="Individualized clinical guidance for children, teenagers, and adults in Manjeri and Malappuram experiencing persistent itching, dryness, skin barrier disruption, and recurring atopic flare-ups."
        metrics={[
          { label: 'Condition Category', value: 'Atopic & Contact Eczema' },
          { label: 'Evaluation Protocol', value: 'Barrier & Trigger Analysis' },
          { label: 'Clinical Transparency', value: 'Evidence Grounded' },
        ]}
        doctorSubtitle="BHMS | Eczema & Skin Consultations"
        doctorBio="10+ years of dedicated clinical experience assessing atopic dermatitis, allergic contact eczema, dyshidrotic hand eczema, barrier dysfunction, and evidence-informed supportive homeopathic care across Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways */}
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
                Important Key Takeaways for Patients in Manjeri
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

      {/* Section 1: Understanding Eczema and Its Symptoms */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Eczema and Its Symptoms
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Eczema is a term commonly used for a group of inflammatory skin conditions. Atopic dermatitis is one of the most recognised types, but eczema-like symptoms can also occur with contact dermatitis and other skin disorders.
            </p>

            <p>
              The skin normally acts as a protective barrier that helps retain moisture and prevents irritating substances from entering the body. In people with eczema, this barrier may not function as effectively, making the skin more susceptible to dryness, irritation, and inflammation.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] not-prose my-4">
              <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#D97706]" />
                Common Eczema Symptoms Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
                {commonSymptoms.map((symptom, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Symptoms can vary according to a person's age, skin type, environment, and the type of eczema involved. Some people experience mild dryness, while others develop recurring inflammation that requires ongoing medical care.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
              If these symptoms continue or repeatedly return, seeking an <strong>Eczema Consultation in Manjeri</strong> can help identify whether the problem is eczema or another skin condition that requires different treatment.
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Does Eczema Develop? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706] block">
              AETIOLOGY &amp; CONTRIBUTING FACTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Does Eczema Develop?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Eczema does not have one single cause. It often develops through a combination of genetic susceptibility, skin-barrier dysfunction, immune-system activity, and environmental influences:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {contributingCauses.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2 hover:border-[#D97706]/40 transition-all shadow-2xs"
              >
                <h3 className="font-bold text-[#1E2559] text-base sm:text-lg flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#D97706]" />
                  <span>{cause.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cause.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#D8E1F5] text-xs text-[#92400E] font-medium flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                  <span>{cause.tip}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            Identifying personal triggers can be useful, but avoiding every suspected trigger without proper assessment may lead to unnecessary restrictions. A healthcare professional can help determine which factors are most relevant to an individual's symptoms.
          </div>
        </div>
      </section>

      {/* Section 3: Eczema Treatment in Manjeri: Why Proper Assessment Matters */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DIAGNOSTIC RIGOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Eczema Treatment in Manjeri: Why Proper Assessment Matters
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Choosing an appropriate approach to eczema begins with understanding the pattern and severity of the symptoms. Similar-looking rashes may be caused by eczema, fungal infections (tinea), psoriasis, scabies, or allergic contact dermatitis. Treating these conditions as though they were identical can delay effective care.
            </p>

            <p>
              A clinical assessment may consider the location of the rash, its appearance, how long it has been present, whether it comes and goes, and whether specific exposures appear to trigger flare-ups.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] not-prose my-3">
              <h3 className="font-bold text-[#1E2559] text-base mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#303A88]" />
                Key Assessment Factors During an Eczema Consultation:
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#334155]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Previous skin conditions, treatments used, and patient response</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Personal or family history of atopic conditions (asthma, allergic rhinitis)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>New soaps, cosmetics, topical medicines, or household detergents</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Occupational chemicals, wet-work environments, and household friction</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Severity of pruritus, pain, sleep disturbance, or skin fissuring</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Signs of secondary microbial infection: purulent exudate, warmth, or spreading cellulitis</span>
                </div>
              </div>
            </div>

            <p>
              When searching for an <strong>Eczema Doctor in Manjeri</strong> or an <strong>Eczema Specialist in Manjeri</strong>, look for a qualified professional who can assess the condition, explain the available treatment options, and recommend referral when specialist dermatology care is needed.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Exploring Homoeopathic Eczema Treatment in Manjeri */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706] block">
              TREATMENT LANDSCAPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Exploring Homoeopathic Eczema Treatment in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Some individuals search for <strong>Homoeopathic Eczema Treatment in Manjeri</strong> because they are interested in homoeopathy or prefer to discuss different approaches to managing recurring skin complaints.
            </p>

            <p>
              A consultation with a qualified homoeopathic practitioner may provide an opportunity to discuss the history of the skin problem, the frequency of flare-ups, previous treatments, and concerns about day-to-day skin care. Patients should receive clear information about the limitations of the proposed approach and when other medical care is necessary.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Scientific Evidence Clarification</span>
              </div>
              <p className="leading-relaxed">
                Homoeopathy has not been shown reliably to treat or cure eczema, and there is insufficient high-quality scientific evidence to establish it as an effective treatment for this condition. Patients should not stop prescribed medicines or postpone proven care in favour of homoeopathy.
              </p>
            </div>

            <p>
              People considering <strong>Eczema Homoeopathic Treatment in Manjeri</strong> should discuss their options openly with their healthcare providers, especially when symptoms are persistent, severe, or affecting sleep and everyday activities. An appropriate care plan should prioritise symptom control, skin-barrier protection, prevention of complications, and timely access to evidence-based treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What to Expect During an Eczema Consultation in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Expect During an Eczema Consultation in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              A useful consultation begins with listening to the patient's concerns and understanding how the skin condition affects everyday life:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D97706]" />
                How to Prepare for Your Consultation:
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Prepare by noting when your symptoms began, which specific areas are affected, how often flare-ups occur, and whether particular products or physical activities trigger symptoms. Bringing an accurate list of current medicines, skincare products, and clear photographs taken during acute flares is extremely helpful.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#303A88]" />
                Questions to Discuss with Your Doctor:
              </h3>
              <div className="space-y-1.5 text-xs text-[#334155]">
                {consultationQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Evidence-Based Options for Managing Eczema */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706] block">
              ESTABLISHED THERAPEUTICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Options for Managing Eczema
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Eczema management depends on its type, severity, location, and the person's medical history. There is no single treatment suitable for everyone, but several established measures help reduce symptoms:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5 shadow-2xs"
              >
                <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                  {opt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Managing Chronic Eczema and Recurring Flare-Ups */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              LONG-TERM CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Managing Chronic Eczema and Recurring Flare-Ups
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Chronic eczema can be frustrating because symptoms may improve for a period and then return. Recurrence does not necessarily mean that a treatment has failed; eczema often requires ongoing skin care and a plan for managing flare-ups.
            </p>

            <p>
              People seeking a <strong>Chronic Eczema Consultation in Manjeri</strong> should discuss the frequency of their symptoms, the treatments they have already tried, and the effect of eczema on work, sleep, and personal comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
              <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D97706] uppercase tracking-wider">
                  <Baby className="w-4 h-4 text-[#D97706]" />
                  <span>Eczema in Children</span>
                </div>
                <h4 className="font-bold text-[#1E2559] text-base">Paediatric Care Considerations</h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Infants and young children develop itchy lesions on cheeks, outer arms, and legs. Parents should use mild, fragrance-free emollient cleansers and seek clinical advice before applying medicated creams. Unsupervised dietary exclusions should never be attempted in children.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#303A88] uppercase tracking-wider">
                  <Users className="w-4 h-4 text-[#303A88]" />
                  <span>Eczema in Adults</span>
                </div>
                <h4 className="font-bold text-[#1E2559] text-base">Adult &amp; Occupational Dermatitis</h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Adults frequently suffer from chronic hand eczema, eyelid dermatitis, and flexural irritation. Frequent handwashing, occupational chemicals, stress, and domestic cleaning agents are major drivers requiring targeted barrier protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Everyday Skincare Tips for Eczema-Prone Skin */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#45AC4B] block">
              SUPPORTIVE DAILY PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Everyday Skincare Tips for Eczema-Prone Skin
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Daily habits can help protect sensitive skin and support a treatment plan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {everydaySkincareTips.map((tip) => (
              <div
                key={tip.step}
                className="p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] font-bold text-xs flex items-center justify-center mb-3">
                    {tip.step}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: When Should You Seek Medical Attention? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-rose-700 block">
              WARNING SIGNS &amp; INFECTION RISKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Arrange a medical assessment if the rash is persistent, frequently returns, interferes with sleep, or does not improve with appropriate skincare.
            </p>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Urgent Warning Signs of Secondary Infection:</p>
                <p className="mt-1">
                  Seek prompt medical attention if the skin becomes increasingly painful, hot, swollen, or rapidly more inflamed. Pus, honey-coloured crusting, spreading redness, or systemic fever may indicate a bacterial infection (Staphylococcus aureus).
                </p>
                <p className="mt-1">
                  <strong>Eczema Herpeticum Warning:</strong> A rapidly spreading painful rash, clusters of small fluid-filled blisters, or sores that look punched out require emergency assessment, as this indicates a serious viral infection. Eye-area symptoms or extensive skin involvement also deserve prompt professional attention.
                </p>
              </div>
            </div>

            <p>
              Do not assume that every itchy, circular, flaky, or discoloured rash is eczema. Fungal infections and other skin conditions may look similar but require different treatment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (8 FAQs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Questions Patients Ask About Eczema Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Reliable, evidence-grounded answers to help patients make informed decisions about eczema and skin care.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#D8E1F5] overflow-hidden bg-[#F8FAFD] transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#EEF2FB]/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1E2559]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#D8E1F5]/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Engine Section */}
      <section id="booking-section" className="py-16 bg-[#FFFBEB] border-b border-[#FDE68A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Eczema &amp; Skin Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Confidential online video visits or in-clinic consultations at our Kuttippuram and Puthanathani branches.
            </p>
          </div>

          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Related Regional Clinic Guides & Other Pages */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#D97706] block">
                SPECIALIZED HEALTHCARE GUIDES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Explore Other Regional Patient Guides in Manjeri
              </h3>
            </div>
            <p className="text-xs text-[#64748B]">
              Comprehensive guides on common health concerns across Malappuram
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            <button
              onClick={() => {
                setCurrentView('acne-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#E11D48] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#E11D48] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#E11D48] transition-colors">
                  Acne Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Pimples, blackheads, hormonal breakouts, and scar prevention guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#E11D48] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('skin-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#F59E0B] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#F59E0B] transition-colors">
                  Skin Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Acne, eczema, psoriasis, fungal rashes, and dermatological care guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#F59E0B] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('hair-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#0D9488] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#0D9488] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#0D9488] transition-colors">
                  Hair Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Hair fall causes, thinning, scalp health, and evidence-based care guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0D9488] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('allergic-rhinitis-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#0284C7] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#0284C7] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#0284C7] transition-colors">
                  Allergic Rhinitis in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Sneezing, nasal triggers, congestion, and evidence-informed allergy guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0284C7] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Conclusion & Clinic Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] via-[#2D241E] to-[#1E2559] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#FDE68A]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Conclusion &amp; Next Steps Towards Calmer Skin
          </h2>

          <div className="text-sm sm:text-base text-[#D3DBF4] max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Eczema can cause persistent itching, dryness, inflammation, and recurring discomfort, but appropriate care can help many people manage their symptoms and protect their skin. Understanding the condition, recognising possible triggers, moisturising regularly, and using suitable medical treatments are important parts of eczema management.
            </p>
            <p>
              If you are searching for <strong>Eczema Treatment in Manjeri</strong>, choose a qualified healthcare professional who can assess your symptoms and explain the available options. People interested in <strong>Homoeopathic Eczema Treatment in Manjeri</strong> should understand the limitations of the scientific evidence and avoid delaying established medical care.
            </p>
            <p>
              Whether you need advice about a new rash or support with longstanding symptoms, a careful assessment is the first step towards a safer, more informed approach to skin health.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>Call Doctor Desk: {phonePrimary}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#45AC4B] text-white font-bold text-sm hover:bg-[#39933E] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {phoneWhatsApp}</span>
            </a>
          </div>

          {/* Regional Clinic Locations Info */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-xs text-[#CBD5E1]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                Kuttippuram Clinic
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571
              </p>
              <p className="mt-1 text-[#86EFAC] font-semibold">
                Ph: {phonePrimary} / {phoneSecondary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                Puthanathani Clinic
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Chembayil complex, opp. Thavakkal gold, Puthanathani, Kerala 676552
              </p>
              <p className="mt-1 text-[#86EFAC] font-semibold">
                Ph: 089211 80408
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Regional Guides Cross-Linking & Footer Notes */}
      <RegionalRelatedGuides currentGuideKey="eczema-treatment-manjeri" />
    </div>
  );
};
