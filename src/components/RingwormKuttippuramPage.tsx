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
  BookOpen,
  FileText,
  AlertCircle,
  Eye,
  Shield,
  Stethoscope,
  Clock,
  MapPin,
  Utensils,
  Sun,
  Pill,
  Scissors,
  Layers,
  Bug,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const RingwormKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for ringworm / fungal skin treatment in Kuttippuram (circular itchy rash, tinea infection, skin health).'
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
    navigateToBookingWithReason('Ringworm & Fungal Skin Consultation - Kuttippuram', 'online');
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
      desc: 'Ringworm is a contagious superficial fungal infection caused by dermatophytes, not an infection caused by a parasitic worm.',
    },
    {
      title: 'Multiple Body Sites',
      desc: 'It can affect the glabrous skin (body), scalp, feet (athlete’s foot), groin (jock itch) and toenails/fingernails.',
    },
    {
      title: 'Characteristic Symptoms',
      desc: 'Common symptoms include circular erythematous rashes with raised scaly borders, active itching, and patchy scalp hair breakage.',
    },
    {
      title: 'Modes of Transmission',
      desc: 'Fungi spread through direct skin contact, shared towels or combs, infected domestic animals (pets), and contaminated damp surfaces.',
    },
    {
      title: 'Appropriate Antifungal Care',
      desc: 'Evidence-based topical or oral antifungal therapy is essential to eradicate dermatophytes, clear the rash and prevent complications.',
    },
    {
      title: 'Oral Medicines for Scalp Ringworm',
      desc: 'Scalp ringworm (tinea capitis) invades the hair shaft and mandates prescription oral antifungal medication; shampoos alone are insufficient.',
    },
    {
      title: 'Strict Warning on Steroid Creams',
      desc: 'Avoid using over-the-counter steroid creams without medical advice, as steroids mask symptoms, suppress local immunity, and cause tinea incognito.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has insufficient reliable scientific evidence to establish that it can eliminate dermatophyte fungi or cure ringworm.',
    },
    {
      title: 'Hygiene & Full Treatment Course',
      desc: 'Maintaining personal hygiene, keeping skin dry, and completing the full recommended antifungal course prevents recurring infections.',
    },
  ];

  // 5 Major Types of Ringworm
  const ringwormTypes = [
    {
      number: '01',
      title: '1. Tinea Corporis – Body Ringworm',
      badge: 'Glabrous Skin Lesions',
      desc: 'Affects non-hairy skin areas such as the trunk, arms, neck, and legs. It characteristically forms distinct circular or oval rings with raised, active, scaly borders and relatively clear centers. Spreads readily via skin contact or contaminated towels.',
      signs: ['Annular patches with active scaly border', 'Central clearing as rash expands', 'Contagious via direct contact & fabrics'],
    },
    {
      number: '02',
      title: '2. Tinea Capitis – Scalp Ringworm',
      badge: 'Oral Medication Required',
      desc: 'Invades scalp hair follicles and hair shafts, predominantly affecting children. Symptoms include scaly patches, intense pruritus, broken hair shafts ("black dots"), and localized hair shedding. Severe inflammation can form a boggy, pus-filled kerion.',
      signs: ['Circular scaly patches on scalp', 'Hairs broken flush at follicle opening', 'Requires prescription oral antifungals'],
    },
    {
      number: '03',
      title: '3. Tinea Cruris – Groin Ringworm (Jock Itch)',
      badge: 'Intertriginous Skin Folds',
      desc: 'Commonly known as jock itch, targeting the groin creases, upper inner thighs, and perineum. Fungi thrive in warm, humid, sweat-accumulating skin folds, presenting as an itchy, well-demarcated reddish or hyperpigmented rash.',
      signs: ['Bilateral groin rash sparing scrotum', 'Aggravated by sweat, friction & tight clothing', 'Intense burning and chafing sensation'],
    },
    {
      number: '04',
      title: '4. Tinea Pedis – Athlete’s Foot',
      badge: 'Interdigital & Moccasin',
      desc: 'Affects the feet, especially webbed spaces between the toes and the plantar soles. Causes severe burning, macerated whitish peeling skin, itching, and painful fissures. Contracted frequently from walking barefoot in communal shower rooms.',
      signs: ['White peeling skin between toe webs', 'Burning, itching & skin cracking', 'Associated with damp shoes & public pools'],
    },
    {
      number: '05',
      title: '5. Tinea Unguium (Onychomycosis)',
      badge: 'Fungal Nail Infection',
      desc: 'Dermatophyte invasion of fingernails or toenails. Nails become progressively thickened, yellowish-brown or chalky white, brittle, crumbly at the edges, and distorted. Requires laboratory nail clipping confirmation and extended oral or topical nail therapies.',
      signs: ['Nail thickening & subungual hyperkeratosis', 'Yellow/white discoloration & crumbling', 'Requires prolonged medical treatment'],
    },
  ];

  // Evidence-Based Antifungal Modalities
  const antifungalOptions = [
    {
      title: '1. Topical Antifungal Medications',
      badge: 'First-Line Skin Therapy',
      desc: 'Prescription or OTC antifungal creams, lotions, and gels applied twice daily to affected skin extending 2 cm beyond the active margin. Standard active agents include terbinafine (allylamine), clotrimazole, and miconazole (azoles), used for 2 to 4 weeks.',
    },
    {
      title: '2. Oral Antifungal Medications',
      badge: 'Extensive & Scalp Infections',
      desc: 'Prescribed by clinicians for extensive body ringworm, chronic recurrent infections, or immunocompromised individuals. Oral agents like terbinafine, itraconazole, or fluconazole provide systemic dermatophyte clearance with proper medical monitoring.',
    },
    {
      title: '3. Scalp Ringworm (Tinea Capitis) Management',
      badge: 'Oral Medication Mandatory',
      desc: 'Because topical creams cannot penetrate deeply into hair follicles, oral antifungal treatment (terbinafine or griseofulvin) for 4 to 8 weeks is mandatory. Medicated antifungal shampoos (ketoconazole 2%) are used adjunctively to curb viable spore transmission.',
    },
    {
      title: '4. Dangers of Unsupervised Steroid Creams',
      badge: 'Tinea Incognito Warning',
      desc: 'Never apply over-the-counter corticosteroid creams (betamethasone, clobetasol, or combination triple creams) to suspected fungal rashes. Steroids suppress localized immune defense, causing tinea incognito—masking the ring border, fueling fungal spread, and complicating diagnosis.',
    },
  ];

  // 6 Provider Evaluation Guidelines
  const providerGuidelines = [
    {
      title: 'Verify Recognized Medical Credentials',
      desc: 'Confirm that the healthcare provider holds legitimate university medical qualifications (such as a registered BHMS degree) and adheres to statutory healthcare council protocols.',
      icon: Stethoscope,
    },
    {
      title: 'Thorough Diagnostic Inspection',
      desc: 'The practitioner must examine the lesion margins, evaluate whether the rash is solitary or spreading, and recognize when laboratory confirmation (KOH prep, fungal culture) is indicated.',
      icon: Eye,
    },
    {
      title: 'Transparent Scientific Evidence Disclosure',
      desc: 'An ethical clinician openly acknowledges that homoeopathy has not been proven to kill dermatophytes or cure ringworm, directing patients toward proven antifungal protocols.',
      icon: MessageCircle,
    },
    {
      title: 'Comprehensive Review of Current Creams',
      desc: 'Disclose all current ointments, home remedies, or steroid combinations used. A responsible provider will identify steroid-induced fungal flare-ups and advise accordingly.',
      icon: Pill,
    },
    {
      title: 'Prompt Specialist Dermatologist Referral',
      desc: 'The practitioner must promptly recognize complicated infections, tinea capitis with hair breakage, or severe facial/nail involvement that warrants specialist dermatological care.',
      icon: ShieldAlert,
    },
    {
      title: 'Zero Tolerance for Guaranteed Cure Claims',
      desc: 'Fungal reinfection depends on environmental hygiene and exposure. Avoid providers who offer unrealistic promises of "permanent immunity" or "instant cures" without evidence-based antifungal medicine.',
      icon: ShieldCheck,
    },
  ];

  // Red Flag Alert Criteria
  const redFlags = [
    'The circular rash is spreading rapidly across multiple body parts',
    'The affected skin becomes intensely swollen, hot to touch, throbbing or severely painful',
    'Visible pus, yellow oozing crusts, or signs of secondary bacterial cellulitis develop',
    'Scalp ringworm develops boggy, tender, painful swelling (kerion) with patchy hair loss',
    'The fungal infection affects the delicate skin of the face, eyelids, or multiple nails',
    'The rash shows zero improvement after 2 weeks of proper antifungal cream application',
    'Fungal infections repeatedly return despite completing full treatment cycles',
    'The patient has diabetes mellitus, immunosuppression, or chronic medical conditions',
  ];

  // Preventive & Recurrence Management Tips
  const preventiveTips = [
    {
      title: 'Keep Skin Clean & Completely Dry',
      desc: 'Thoroughly dry groin folds, underarms, and between toes after bathing. Fungi require warmth and moisture to proliferate.',
      icon: Droplets,
    },
    {
      title: 'Change Sweaty Clothing Promptly',
      desc: 'Change out of damp workout gear, sports uniforms, or rain-soaked garments immediately. Wear loose, breathable cotton fabrics.',
      icon: Heart,
    },
    {
      title: 'Never Share Personal Grooming Items',
      desc: 'Do not share towels, washcloths, clothing, footwear, bedsheets, razors, or hairbrushes with family members or roommates.',
      icon: Scissors,
    },
    {
      title: 'Wear Protective Footwear in Public Areas',
      desc: 'Always wear sandals or waterproof flip-flops in public locker rooms, swimming pool decks, communal showers, and gym washrooms.',
      icon: ShieldCheck,
    },
    {
      title: 'Wash Bedding & Linens in Hot Water',
      desc: 'Launder towels, socks, and bedsheets regularly in hot water and dry thoroughly in direct sunlight to eliminate lingering fungal spores.',
      icon: Sun,
    },
    {
      title: 'Veterinary Check for Household Pets',
      desc: 'Inspect dogs, cats, and farm animals for scaly, circular patches of fur loss. Have infected pets treated promptly by a veterinarian to prevent re-infection.',
      icon: Bug,
    },
  ];

  // 10 FAQs provided by user
  const faqs = [
    {
      q: 'What is ringworm?',
      a: 'Ringworm is a contagious fungal infection caused by dermatophytes. It commonly affects the skin but can also involve the scalp, feet, groin and nails. It is not caused by a worm.',
    },
    {
      q: 'Is ringworm contagious?',
      a: 'Yes. Ringworm can spread through direct contact with infected skin, contaminated personal items, surfaces and infected animals. Good hygiene and appropriate treatment help reduce transmission.',
    },
    {
      q: 'What are the common symptoms of ringworm?',
      a: 'Common symptoms include circular or oval rashes, itching, redness, scaling, peeling and raised borders. Scalp infections may cause broken hair and patchy hair loss.',
    },
    {
      q: 'How is ringworm diagnosed?',
      a: 'A healthcare professional may examine the affected area. Skin scraping, microscopic examination or fungal culture may be recommended when necessary to confirm the infection.',
    },
    {
      q: 'Can homoeopathy cure ringworm?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy can cure ringworm or eliminate the fungi responsible for it. Evidence-based antifungal treatment remains the recommended approach for confirmed fungal infections.',
    },
    {
      q: 'How long does ringworm treatment take?',
      a: 'The duration depends on the affected area, severity, type of infection and medicine used. Some skin infections improve with a few weeks of appropriate topical treatment, while scalp and nail infections may require longer treatment.',
    },
    {
      q: 'Can ringworm return after treatment?',
      a: 'Yes. Reinfection or recurrence can occur through contact with infected people, animals or contaminated items. Incomplete treatment and certain health conditions may also contribute.',
    },
    {
      q: 'Can I use steroid creams for ringworm?',
      a: 'Do not use steroid creams without medical advice. Steroids can mask the symptoms and may allow fungal infections to spread or become more difficult to diagnose.',
    },
    {
      q: 'Does scalp ringworm cause hair loss?',
      a: 'Yes. Scalp ringworm can cause broken hair and patchy hair loss. Prompt medical treatment is important because severe inflammation can sometimes lead to permanent scarring and hair loss.',
    },
    {
      q: 'When should I consult a doctor for ringworm?',
      a: 'Consult a healthcare professional if the rash spreads, causes significant discomfort, affects the scalp or nails, becomes inflamed, repeatedly returns or does not improve with appropriate treatment.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Ringworm Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Homoeopathic Clinic in Kuttippuram for Ringworm Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Bug className="w-4 h-4 text-emerald-400" />}
        badgeText="FUNGAL DERMATOLOGY & TINEA CARE • KUTTIPPURAM"
        title="Homoeopathic Clinic in Kuttippuram for Ringworm Treatment"
        subtitle="A comprehensive clinical guide explaining ringworm (tinea), circular itchy rashes, scalp ringworm, jock itch, transmission modes, steroid cream hazards, evidence-based antifungal therapies, and responsible care in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Fungal & Skin Health"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, detailed fungal rash assessments, hygiene counselling, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely medical dermatologist referrals for recurrent, extensive, and scalp tinea infections."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14 space-y-12">
        {/* Intro Context Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Ringworm (Tinea) & Responsible Fungal Skin Care in Kuttippuram
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Ringworm is a common fungal skin infection that can affect people of different ages. It usually appears as a circular, reddish, itchy rash that may gradually spread to other parts of the body. Despite its name, ringworm is not caused by a worm. It is a fungal infection that can affect the skin, scalp, feet, groin and other areas. Early identification, appropriate medical treatment and good personal hygiene are important for managing the condition and reducing the risk of spreading it to others.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              People looking for <strong className="text-[#1E2559]">Ring worm Treatment in Kuttippuram</strong> may have questions about the causes, symptoms, available treatment options and ways to prevent recurring infections. If you are searching for a Homoeopathic Clinic in Kuttippuram for Ring worm Treatment, it is important to choose a healthcare provider who understands the need for accurate diagnosis and responsible care.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 mt-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-950 leading-relaxed">
                <strong>Medical Assessment Principle:</strong> Homoeopathy may be discussed as a complementary healthcare approach, but <strong>there is insufficient reliable scientific evidence that homoeopathic medicines can cure ringworm or eliminate the fungi responsible for the infection. Proven antifungal treatment should not be delayed or replaced.</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Key Takeaways */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              CLINICAL SUMMARY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Key Takeaways on Ringworm</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential facts regarding dermatophyte biology, contagion routes, diagnostic testing, and evidence-based antifungal medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E2559] font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Ringworm and Causes */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-indigo-600" />
              FUNGAL BIOLOGY & TRANSMISSION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Ringworm and Its Causes
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Ringworm, medically known as dermatophytosis or tinea, is caused by microscopic filamentous fungi called dermatophytes (chiefly <em>Trichophyton</em>, <em>Microsporum</em>, and <em>Epidermophyton</em> species). These fungi consume keratin—the protective structural protein found in the stratum corneum of the epidermis, hair shafts, and nails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                <Bug className="w-5 h-5 text-indigo-600" />
                How Ringworm Spreads
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Direct skin-to-skin contact:</strong> Touching active annular lesions on an infected individual.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Contact with infected animals:</strong> Stroking cats, dogs, or cattle harbouring zoophilic dermatophytes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Shared personal items (Fomites):</strong> Using unwashed towels, combs, bedding, clothes, or sports gear.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Contaminated surfaces:</strong> Walking barefoot on moist locker-room floors, public showers, or swimming pools.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Occlusive tight clothing:</strong> Wearing synthetic, non-breathable fabrics that trap perspiration and body heat.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50/70 border border-indigo-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#1E2559] flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-700" />
                  Why Proper Diagnosis Matters in Kuttippuram
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  People searching online for Ring worm Treatment in Kuttippuram should recognize that not every circular rash is a fungal infection. Annular conditions such as nummular eczema, plaque psoriasis, pityriasis rosea, contact dermatitis, and granuloma annulare can mimic ringworm closely.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Treating non-fungal conditions with antifungal creams is ineffective; conversely, misdiagnosing ringworm and applying steroid creams can trigger a severe flare known as <em>tinea incognito</em>.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-200 text-xs text-indigo-900 font-semibold">
                When uncertainty exists, clinicians perform a gentle skin scraping for Potassium Hydroxide (KOH) direct microscopy or fungal culture to verify fungal hyphae.
              </div>
            </div>
          </div>
        </section>

        {/* 5 Different Types of Ringworm */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              ANATOMICAL CLASSIFICATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Different Types of Ringworm</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Dermatophytosis is classified according to the anatomical site affected, each requiring specialized topical or systemic management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ringwormTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">{item.number}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#1E2559] font-medium border border-blue-100">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E2559]">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Key Features:</span>
                  {item.signs.map((sign, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scientific Evidence Disclosure on Homoeopathy */}
        <section className="bg-amber-50/90 rounded-2xl p-6 sm:p-8 border border-amber-300 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl text-amber-700 shrink-0">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold uppercase">
                SCIENTIFIC TRANSPARENCY & CLINICAL ETHICS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
                Understanding Homoeopathic Ringworm Treatment in Kuttippuram
              </h2>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                People exploring <strong>Homoeopathic Ring worm Treatment in Kuttippuram</strong> may be interested in an individualised complementary approach to skin health. Homoeopathy is a system of healthcare that considers a person’s reported symptoms and overall health when selecting remedies. However, <strong>there is currently insufficient reliable scientific evidence that homoeopathic medicines eliminate dermatophyte fungi or cure ringworm</strong>.
              </p>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                A person considering a homoeopathic consultation should obtain an accurate medical diagnosis and adhere to evidence-based antifungal treatment when ringworm is confirmed. Homoeopathic remedies should never be used as a substitute for proven antifungal medicines, nor should prescribed medicines be stopped without consulting your treating clinician.
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium space-y-2">
                <p>
                  <strong>Clinical Notice on Scalp & Extensive Infections:</strong> Scalp ringworm (tinea capitis) can cause irreversible follicle scarring if left untreated with prescription oral antifungals. Always seek evidence-based medical treatment to halt the infection and prevent family transmission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence-Based Antifungal Treatment Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <Pill className="w-3.5 h-3.5 text-blue-600" />
              EVIDENCE-BASED OPTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Evidence-Based Treatment Options for Ringworm
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              Because ringworm is an active fungal infection, clinical treatment focuses on eradicating the dermatophyte organism using proven topical or oral antifungal medications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {antifungalOptions.map((opt, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1E2559] text-base">{opt.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-[#1E2559] font-medium border border-blue-200">
                    {opt.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Standards for Choosing a Provider */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              PATIENT GUIDANCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Choosing a Ringworm Health Clinic in Kuttippuram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Selecting a suitable healthcare provider is essential when managing persistent or recurring skin rashes. Consider the practitioner’s qualifications, diagnostic transparency, and willingness to recommend proven antifungal medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerGuidelines.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#1E2559] flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Red Flag Symptoms - When to Seek Medical Advice */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              CLINICAL ALERT CRITERIA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Ringworm Doctor in Kuttippuram: When Should You Seek Medical Attention?
            </h2>
            <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
              While localized skin ringworm often resolves with appropriate antifungal creams, specific symptoms require prompt evaluation by a qualified medical professional or dermatologist:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {redFlags.map((flag, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">{flag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Preventive Measures & Recurrence Management */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              PREVENTING RECURRENCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Managing Recurring Ringworm Problems & Hygiene Guidelines
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Incomplete treatment, persistent moisture, or contact with untreated household members and pets are common reasons fungal infections return. These habits support lasting skin recovery:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventiveTips.map((tip, idx) => {
              const IconComp = tip.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">{tip.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{tip.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive FAQ Section with 10 FAQs */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              PATIENT FAQS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Ringworm Treatment in Kuttippuram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Clear, evidence-grounded answers addressing contagion, steroid risks, scalp hair loss, diagnostic scrapings, and homoeopathy limitations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-[#1E2559] hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base flex items-center gap-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Q{idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Conclusion Summary */}
        <section className="bg-gradient-to-br from-[#1E2559] to-[#2B3577] text-white rounded-2xl p-8 sm:p-10 shadow-lg space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial">
            Consult a Healthcare Professional for Ringworm Concerns in Kuttippuram
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Ringworm is a common but contagious fungal infection that requires proper identification and appropriate treatment. Understanding its symptoms, causes and transmission can help individuals take timely action and reduce the risk of spreading the infection.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            If you are searching for <strong className="text-white">Ring worm Treatment in Kuttippuram</strong>, Homoeopathic Ring worm Treatment in Kuttippuram or a Homoeopathic Doctor for Ring worm Problems in Kuttippuram, make informed healthcare decisions by prioritising accurate diagnosis and evidence-based treatment.
          </p>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            A healthcare consultation can help you understand your skin concerns, identify whether further investigations are necessary and determine the appropriate next steps. Homoeopathy may be discussed as a complementary approach, but it should not replace proven antifungal medicines or delay necessary medical care.
          </p>
        </section>

        {/* In-page Appointment Booking Engine */}
        <section id="booking-section" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              ONLINE & IN-CLINIC SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Schedule Your Skin Consultation
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select in-clinic appointment at Kuttippuram (Tirur-Kuttippuram Road) or Puthanathani, or book an online video consultation.
            </p>
          </div>
          <AppointmentBookingEngine />
        </section>

        {/* Contact & Location Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E2559] flex items-center justify-center">
              <Phone className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Direct Phone Inquiries</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Call our reception for appointment slots, consulting hours, or directions to the Kuttippuram clinic.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${phonePrimary}`}
                className="text-base font-bold text-blue-700 hover:text-blue-900 block"
              >
                {phonePrimary}
              </a>
              <a
                href={`tel:${phoneSecondary.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-slate-600 hover:text-slate-800 block mt-0.5"
              >
                {phoneSecondary}
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">WhatsApp Support</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Message our clinical desk directly for quick inquiries, skin care questions, or booking confirmations.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Clinic Locations</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              <strong>Kuttippuram Clinic:</strong> Near Railway Station, Tirur-Kuttippuram Road, Malappuram.<br />
              <strong>Puthanathani Clinic:</strong> Main Road, Puthanathani, Malappuram District.
            </p>
            <div className="pt-1 text-xs text-slate-500 font-medium">
              Daily OPD Hours: 9:00 AM – 7:30 PM
            </div>
          </div>
        </section>

        {/* Cross-linking Related Regional Guides */}
        <section className="pt-8">
          <RegionalRelatedGuides currentGuideKey="ringworm-treatment-kuttippuram" />
        </section>
      </div>
    </div>
  );
};
