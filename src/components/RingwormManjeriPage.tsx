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
  Sparkles,
  Award,
  UserCheck,
  Lock,
  Layers,
  AlertCircle,
  Sun,
  Droplets,
  Bug,
  Flame,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const RingwormManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Ringworm & Fungal Skin Care (Manjeri patient guide).'
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
    navigateToBookingWithReason('Ringworm Assessment - Manjeri', 'online');
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
      title: 'Fungal Origin, Not a Worm',
      desc: 'Ringworm is caused by dermatophyte fungi that feed on keratin in the epidermis, hair, and nails—there is no parasite or worm involved.',
    },
    {
      title: 'Contagious & Spreads Easily',
      desc: 'Transmitted through direct skin-to-skin contact, infected household pets (cats/dogs), contaminated towels, combs, or damp floor surfaces.',
    },
    {
      title: 'Characteristic Annular Morphology',
      desc: 'Classic lesion presents as an expanding circular or oval patch with a raised, scaly, active inflammatory border and central clearing.',
    },
    {
      title: 'Accurate Diagnosis Is Crucial',
      desc: 'Eczema, psoriasis, pityriasis rosea, and annular erythemas can mimic ringworm; clinical examination prevents inappropriate treatment.',
    },
    {
      title: 'Established Antifungal Therapies',
      desc: 'Evidence-based management requires targeted topical or oral antifungal medications (e.g., terbinafine, clotrimazole) to eradicate the fungal pathogen.',
    },
    {
      title: 'Oral Therapy for Scalp & Nails',
      desc: 'Scalp ringworm (tinea capitis) and nail fungal infections penetrate deep hair follicles or nail plates, requiring prescription oral antifungals.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'High-quality scientific trials have not established homoeopathy as an effective treatment, cure, or pathogen eliminator for fungal ringworm.',
    },
    {
      title: 'Danger of Steroid Creams Alone',
      desc: 'Never apply topical corticosteroids alone to suspected ringworm; they temporarily mask redness while allowing the fungus to flourish (Tinea Incognito).',
    },
    {
      title: 'Moisture Control & Hygiene',
      desc: 'Keeping skin folds dry, changing sweaty garments promptly in Malappuram’s humid climate, and avoiding shared items drastically reduce recurrence.',
    },
    {
      title: 'Specialist Red Flags',
      desc: 'Rapidly spreading lesions, severe pain, pus formation, secondary bacterial cellulitis, or immunocompromised health status require prompt medical care.',
    },
  ];

  const commonSymptoms = [
    'Itchy, round, oval, or polycyclic patches with well-defined borders',
    'Raised, red, brownish, or scaly advancing margins that gradually expand outward',
    'Central clearing or lighter skin in the interior of the circle as the patch enlarges',
    'Dryness, peeling, flaking, or fine powdery desquamation across the affected area',
    'Intense pruritus (itching) that often intensifies with heat, sweating, and humidity',
    'Broken hair shafts, patchy alopecia, or boggy tender swellings (kerion) on the scalp',
    'Macerated, white, peeling skin and painful fissures between the toes (Athlete’s foot)',
    'Thickened, discoloured, yellowish-brown, brittle, or crumbling nails (onychomycosis)',
  ];

  const infectionTypes = [
    {
      name: 'Ringworm of the Body (Tinea Corporis)',
      icon: 'ShieldCheck',
      badge: 'Trunk, Arms & Legs',
      desc: 'Commonly produces circular, expanding annular lesions with erythematous, vesicular, or scaly borders across the torso, arms, neck, or extremities.',
      care: 'Managed typically with targeted topical antifungal creams applied 2 cm beyond the lesion border for at least 2–4 weeks.',
    },
    {
      name: 'Scalp Ringworm (Tinea Capitis)',
      icon: 'AlertTriangle',
      badge: 'Hair & Follicles',
      desc: 'Affects hair follicles and the scalp, causing scaling, itching, broken stubbly hairs ("black dots"), and circular patches of hair loss.',
      care: 'Requires prescription oral systemic antifungal medicines because topical creams cannot penetrate inside active hair follicle roots.',
    },
    {
      name: 'Ringworm of the Groin (Tinea Cruris)',
      icon: 'Droplets',
      badge: 'Groin & Thigh Folds',
      desc: 'Also called jock itch, presenting as intensely itchy, symmetrical red or brownish rashes in the groin folds and upper inner thighs, often sparing the scrotum.',
      care: 'Moisture reduction, loose breathable cotton innerwear, thorough post-bath drying, and topical antifungal formulations.',
    },
    {
      name: 'Athlete’s Foot (Tinea Pedis)',
      icon: 'Layers',
      badge: 'Toes & Soles',
      desc: 'Fungal infection affecting the toe webs and plantar surfaces. Causes maceration, peeling, itching, burning, and cracked fissure bleeding.',
      care: 'Keep feet bone dry, use open footwear, change socks twice daily, and treat shoes with antifungal powder to prevent reinfection.',
    },
    {
      name: 'Fungal Nail Infections (Tinea Unguium / Onychomycosis)',
      icon: 'Activity',
      badge: 'Nails & Beds',
      desc: 'Causes nails to become thickened, yellowish, brittle, detached from the nail bed (onycholysis), and friable with subungual hyperkeratosis.',
      care: 'Requires laboratory confirmation (KOH / culture) and prolonged course of prescription oral antifungal therapy or medicated nail lacquers.',
    },
  ];

  const causesAndTransmission = [
    {
      title: 'Direct Human-to-Human Contact',
      desc: 'Close skin-to-skin physical contact with an infected family member, sports partner, or school peer is a primary route of transmission.',
      tip: 'Avoid direct physical contact with active rashes until antifungal therapy has been underway for at least 48 hours.',
    },
    {
      title: 'Domestic Animals & Pets (Zoophilic Fungi)',
      desc: 'Cats (especially kittens), dogs, calves, and livestock carry Microsporum canis or Trichophyton verrucosum, frequently without obvious signs.',
      tip: 'Examine family pets for scaly hairless patches; consult a veterinarian for screening if children develop recurring lesions.',
    },
    {
      title: 'Contaminated Shared Personal Items (Fomites)',
      desc: 'Fungal spores survive for weeks on unwashed bath towels, bed linens, clothes, combs, hair brushes, caps, and salon equipment.',
      tip: 'Never share towels or bedding. Launder textiles used by an infected person in hot water (above 60°C) with antiseptic wash.',
    },
    {
      title: 'Warm & Humid Tropical Climates',
      desc: 'Kerala’s tropical Malappuram climate, persistent sweating, and trapped moisture create optimal incubators for dermatophyte spores to germinate.',
      tip: 'Shower twice daily after sweating, dry skin folds thoroughly with a dedicated towel, and wear breathable 100% cotton garments.',
    },
    {
      title: 'Occlusive & Synthetic Footwear / Clothing',
      desc: 'Tight jeans, synthetic leggings, polyester underwear, and damp closed boots trap perspiration and macerate epidermal skin barriers.',
      tip: 'Choose loose, well-ventilated clothing. Let leather shoes air out for 24 hours between wearings.',
    },
    {
      title: 'Communal Bathrooms, Gyms & Swimming Pools',
      desc: 'Walking barefoot on damp tiles in communal showers, prayer ablution areas, public swimming pools, and gym locker rooms.',
      tip: 'Always wear waterproof flip-flops or sandals in shared wet spaces; dry between toes meticulously.',
    },
  ];

  const differentialMimics = [
    {
      condition: 'Nummular (Discoid) Eczema',
      distinction: 'Coin-shaped itchy plaques that are uniformly scaly or vesicular throughout without a central clearing. Typically bilateral and symmetrical on limbs.',
    },
    {
      condition: 'Psoriasis (Plaque or Guttate)',
      distinction: 'Thick, silvery micaceous scales over dark red plaques on elbows, knees, or scalp. Removing scales yields pinpoint bleeding (Auspitz sign). Negative for fungal hyphae.',
    },
    {
      condition: 'Pityriasis Rosea',
      distinction: 'Begins with a single larger "herald patch" followed by smaller oval plaques along skin cleavage lines ("Christmas tree" pattern) on the back. Self-limiting viral rash.',
    },
    {
      condition: 'Annular Contact Dermatitis',
      distinction: 'Allergic reaction to nickel watches, waistband elastics, soaps, or perfumes. Sharply delimited to contact zones without fungal spores.',
    },
    {
      condition: 'Granuloma Annulare',
      distinction: 'Smooth, firm, non-scaly dermal rings commonly found on hands, knuckles, or feet. Surface epidermis remains intact with no scaling or itching.',
    },
    {
      condition: 'Tinea Incognito (Steroid-Modified)',
      distinction: 'A ringworm rash altered by prior steroid application. Loses its raised border, becomes flat, dusky, or pustular, and spreads silently.',
    },
  ];

  const medicalEvidenceOptions = [
    {
      step: '01',
      title: 'Topical Antifungal Formulations',
      subtitle: 'First-Line for Localized Skin & Groin',
      desc: 'Modern allylamines (terbinafine) and imidazoles (clotrimazole, miconazole, ketoconazole) inhibit fungal ergosterol biosynthesis, killing the fungus or stopping its growth. Must be applied continuously for 1–2 weeks after visual clearance.',
    },
    {
      step: '02',
      title: 'Prescription Oral Antifungals',
      subtitle: 'Mandatory for Scalp, Nails & Extensive Disease',
      desc: 'Oral terbinafine, itraconazole, or fluconazole reach high concentrations in keratinised tissue, hair follicles, and nail matrices. Prescribed under medical supervision with baseline liver function monitoring if prolonged.',
    },
    {
      step: '03',
      title: 'Laboratory Scraping & Direct Microscopy',
      subtitle: 'Potassium Hydroxide (KOH) & Fungal Culture',
      desc: 'In atypical, recurring, or steroid-treated cases, painless skin scraping analyzed under microscopy reveals branching fungal hyphae and spores, confirming definitive diagnosis before initiating medication.',
    },
    {
      step: '04',
      title: 'Strict Steroid Avoidance Warning',
      subtitle: 'Preventing Tinea Incognito & Recalcitrant Fungal Infection',
      desc: 'Over-the-counter mixed creams containing betamethasone, clobetasol, or hydrocortisone suppress local immunity. They provide temporary anti-inflammatory relief while accelerating fungal invasion and thinning the skin.',
    },
    {
      step: '05',
      title: 'Environmental Decontamination Protocol',
      subtitle: 'Breaking Household Spore Reservoirs',
      desc: 'Antifungal washing of bed sheets, regular hot-water laundering, disinfection of bathroom floors, cleaning of hair grooming tools with bleach/antiseptic, and treating household contacts simultaneously.',
    },
    {
      step: '06',
      title: 'Long-Term Prophylaxis & Barrier Maintenance',
      subtitle: 'Preventing Re-Infection in Humid Weather',
      desc: 'Using dusting powders (antifungal or zinc-based) in body folds, wearing sandals in monsoon humidity, and addressing underlying factors like uncontrolled diabetes or excessive perspiration.',
    },
  ];

  const faqs = [
    {
      q: 'Where can I find Ringworm Treatment in Manjeri?',
      a: 'You can consult qualified healthcare professionals and clinics offering clinical dermatology and skin assessments in the Manjeri and wider Malappuram region. Dr. Anjali Chandrasekhar offers comprehensive outpatient skin evaluations at Anjali Homoeo Clinic (located at Kuttippuram with a branch at Puthanathani, accessible to Manjeri patients) as well as secure online video consultations for initial rash assessment, differential diagnosis, and appropriate treatment recommendations.',
    },
    {
      q: 'Is Homoeopathic Treatment for Ringworm in Manjeri effective?',
      a: 'Rigorous scientific and clinical evidence does not establish homoeopathy as an effective treatment, cure, or pathogen eliminator for fungal skin infections such as ringworm. Ringworm is caused by dermatophyte fungi that require established antifungal medicines to eradicate. Relying solely on unproven therapies can lead to spreading, severe inflammation, scarring, and transmission to household members. Patients should always discuss treatment options transparently with a qualified practitioner and must not discontinue or delay prescribed antifungal medicines.',
    },
    {
      q: 'What are the common symptoms of ringworm?',
      a: 'Common symptoms include intensely itchy, circular, ring-shaped, or oval patches on the skin with raised, red, brownish, or scaly borders and central clearing. As the infection progresses, multiple expanding patches may develop. Scalp ringworm causes scaly bald spots and broken hairs, while foot ringworm causes maceration, peeling, and cracked fissures between toes.',
    },
    {
      q: 'Is ringworm contagious?',
      a: 'Yes, ringworm is highly contagious. Dermatophyte fungi shed microscopic spores that spread through direct skin-to-skin contact with infected people, handling infected domestic pets (such as cats and dogs), or touching contaminated objects (fomites) such as towels, bedding, gym mats, clothing, and combs.',
    },
    {
      q: 'How is ringworm treated?',
      a: 'Uncomplicated fungal infections on the trunk, groin, or feet are generally treated with topical antifungal creams (such as terbinafine or clotrimazole) applied daily for several consecutive weeks. Scalp ringworm, nail fungal infections, or extensive body infections require prescription oral antifungal tablets under medical supervision because topical creams cannot reach the fungus deep within hair follicles or the nail matrix.',
    },
    {
      q: 'Can I use steroid cream for ringworm?',
      a: 'No, you should never use steroid creams (or combination steroid-antifungal-antibacterial triple creams) alone on suspected ringworm. While steroids temporarily reduce itching and redness by suppressing local immunity, they do not kill the fungal organisms. The fungus multiplies rapidly in the immunosuppressed skin, resulting in a dangerous condition called "Tinea Incognito," where the infection becomes deeper, more extensive, and far more difficult to cure.',
    },
    {
      q: 'When should I consult a Ringworm Doctor in Manjeri?',
      a: 'You should seek professional medical evaluation if the rash is rapidly spreading, fails to improve after 1–2 weeks of over-the-counter care, affects the scalp, beard, or nails, becomes hot, swollen, painful, or discharges pus (indicating secondary bacterial infection), or if you have diabetes or an impaired immune system.',
    },
    {
      q: 'How can I prevent ringworm from returning?',
      a: 'To prevent recurring fungal infections: keep skin dry and clean, dry skin folds thoroughly after showering, wear loose-fitting breathable cotton clothing, change sweaty clothes and socks promptly, do not share towels or personal items, wash bedding in hot water, wear footwear in public wet areas, and have pets evaluated by a vet if they show hair loss or crusting.',
    },
    {
      q: 'Can ringworm cause hair loss?',
      a: 'Yes. Scalp ringworm (tinea capitis) infects hair follicles and causes brittle, broken hairs that leave circular scaly patches of hair loss ("black dot" appearance). In severe inflammatory cases, it can form a swollen, boggy, pus-filled mass known as a "kerion." Without prompt oral antifungal treatment, kerions can cause permanent cicatricial (scarring) alopecia.',
    },
    {
      q: 'Is a ringworm infection caused by poor hygiene?',
      a: 'No. Ringworm is a very common biological fungal infection that affects individuals of all ages and socio-economic backgrounds regardless of personal hygiene. However, environmental factors common in Kerala—such as high ambient humidity, heavy sweating during work, and athletic activities—create moisture conditions where fungal spores easily proliferate.',
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
                Ringworm &amp; Fungal Skin Consultation – Manjeri &amp; Malappuram Patient Guide
              </span>
              <span className="hidden md:inline text-white/70">
                | Dr. Anjali Chandrasekhar (BHMS, Reg: 16503)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${phonePrimary}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Call Clinic</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white font-semibold transition-colors"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
              Ringworm Homoeopathic Treatment in Manjeri
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
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#10B981] via-[#0D9488] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Ringworm and Skin Care in Manjeri and Malappuram"
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
                      <span>Kerala State Council Reg: 16503</span>
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-[#1E2559]">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs font-semibold text-[#0D9488] mt-0.5">
                      BHMS | Chief Homoeopathic Physician
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      10+ years of clinical experience in dermatology evaluations, chronic fungal skin management, and evidence-based patient consultations across Malappuram district.
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-left">
                      <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                        <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                          Main Clinic
                        </p>
                        <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                          Kuttippuram
                        </p>
                        <p className="text-[10px] text-[#64748B]">Near Railway Station</p>
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
                <Bug className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Regional Clinical Dermatology Guide • Manjeri Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ringworm Homoeopathic Treatment in Manjeri
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Comprehensive patient guide for individuals in Manjeri and Malappuram experiencing circular itchy skin rashes, jock itch, scalp scaling, athlete’s foot, or recurring fungal infections. Understand pathogen causes, diagnostic mimics, evidence-based antifungal medicine, and scientific evidence disclosures.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Condition Type
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Fungal (Tinea)
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Primary Organism
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Dermatophytes
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Clinical Standard
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Antifungal Care
                  </p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Clinical Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#86EFAC]" />
                  <span>Secondary Desk: {phoneSecondary}</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#CBD5E1] pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Online &amp; In-Person Outpatient Visits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Scientific Evidence Disclosures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRITICAL EVIDENCE-BASED TRANSPARENCY NOTICE */}
      <section className="bg-[#EFF6FF] border-b border-[#BFDBFE] py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#1E3A8A] text-white rounded-xl shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-[#93C5FD]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E3A8A]">
                Medical Evidence Disclosure Regarding Ringworm &amp; Homoeopathy
              </h4>
              <p className="text-xs text-[#1E40AF] mt-0.5 leading-relaxed">
                Ringworm is caused by infectious dermatophyte fungi. Homoeopathy has not been established by rigorous scientific trials to kill fungi or cure ringworm. Effective elimination requires established antifungal medications. Never discontinue or delay prescribed antifungal therapies in favour of unproven alternative treatments.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('scientific-evidence');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1"
          >
            <span>Read scientific transparency details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 10 IMPORTANT KEY TAKEAWAYS */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL SUMMARY &amp; ESSENTIAL KNOWLEDGE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              10 Important Key Takeaways: Ringworm Care
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Essential medical facts every patient in Manjeri and Malappuram should know before treating ring-shaped rashes, itchy skin folds, or suspected fungal infections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#EEF2FB] text-[#303A88] font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Clinical Takeaway
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center text-[11px] text-[#0D9488] font-semibold gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Medical Fact</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT IS RINGWORM? */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
                PATHOLOGY &amp; CLINICAL DEFINITION
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559]">
                What Is Ringworm?
              </h2>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Ringworm, medically designated as <strong>tinea</strong>, is a contagious superficial fungal infection of the keratinised tissues including the epidermis, hair shafts, and nails. Despite its colloquial name, <em>ringworm is not caused by a worm or any parasitic organism</em>. It develops from microscopic fungal pathogens classified as <strong>dermatophytes</strong> (predominantly belonging to the genera <em>Trichophyton</em>, <em>Microsporum</em>, and <em>Epidermophyton</em>).
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                These fungi produce specialised enzymes called keratinases that digest keratin, a fibrous protective protein concentrated in the stratum corneum of our skin, hair, and nails. As the fungus feeds and multiplies, the infection radiates centrifugally outwards, producing a circular or ring-shaped lesion. The active edge remains raised, inflamed, and scaly where fungal activity is highest, while the centre frequently clears as the local inflammatory response subsides, giving rise to its classic annular pattern.
              </p>

              <div className="p-5 bg-white rounded-2xl border border-[#CBD5E1] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <AlertCircle className="w-4 h-4 text-[#E11D48]" />
                  <span>Not Every Ring-Shaped Rash Is Ringworm</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Fungal infections do not always present with a textbook circular shape. Many appear irregular, diffuse, or eczema-like. Conversely, inflammatory dermatoses like nummular eczema, plaque psoriasis, granuloma annulare, and pityriasis rosea frequently form rings. Accurate assessment prevents the dangerous pitfall of treating non-fungal conditions with antifungals, or worse, treating ringworm with immunosuppressive steroid creams.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-sm text-[#1E2559] uppercase tracking-wider mb-3">
                  Hallmark Signs &amp; Associated Symptoms
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {commonSymptoms.map((sym, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#334155]"
                    >
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Card: Consultation Expectations */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CBD5E1] shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[#EEF2FB] text-[#303A88] rounded-2xl">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      Ringworm Consultation in Manjeri
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Structured Clinical Assessment
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  If you notice a persistent, expanding, itchy, or circular rash that resists ordinary moisturisers, scheduling a dedicated evaluation helps determine whether dermatophyte fungi are present and outlines the safest therapeutic pathway.
                </p>

                <div className="space-y-3 border-t border-[#E2E8F0] pt-4 text-xs text-[#334155]">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Visual Dermoscopy:</strong> Magnified examination of the active advancing peripheral scaling border.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Wood’s Lamp Examination:</strong> Highlighting subtle fluorescence in certain fungal strains (e.g., Microsporum).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Medication Review:</strong> Screening for prior over-the-counter steroid usage that modifies lesion appearance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#303A88] shrink-0">•</span>
                    <span><strong>Referral Guidance:</strong> Skin scrapings, KOH mounts, or specialist dermatology referral when resistant.</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <button
                    onClick={handleBookConsultation}
                    className="w-full py-3 px-4 rounded-xl bg-[#303A88] hover:bg-[#222a63] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Outpatient Consultation</span>
                  </button>
                </div>
              </div>

              {/* Climate Alert for Manjeri & Malappuram */}
              <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5 text-xs text-[#991B1B] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#B91C1C]">
                  <Flame className="w-4 h-4" />
                  <span>Monsoon Humidity &amp; Fungal Proliferation in Malappuram</span>
                </div>
                <p className="leading-relaxed">
                  During peak Kerala monsoon months and warm coastal seasons, ambient humidity exceeds 85%. Sweat pooling in groin creases, armpits, and between toes accelerates dermatophyte spore germination tenfold compared to dry climates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON TYPES OF RINGWORM (5 SUBTYPES) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ANATOMICAL CLASSIFICATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Common Types of Ringworm
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Ringworm behaves differently depending on the anatomical area involved. Medical management must be tailored to the tissue thickness, moisture exposure, and follicular penetration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infectionTypes.map((type, tIdx) => (
              <div
                key={tIdx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EEF2FB] text-[#303A88]">
                      {type.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">
                      Type #{tIdx + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#1E2559] mb-2.5">
                    {type.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {type.desc}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-[#E2E8F0]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] mb-1">
                    Standard Medical Approach
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {type.care}
                  </p>
                </div>
              </div>
            ))}

            {/* Special Highlight: Tinea Capitis Warning */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#2B3577] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-white mb-3">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#FCD34D]" />
                  <span>Crucial Pediatric Alert</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  Scalp Ringworm in School Children
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Tinea capitis is particularly frequent in school-going children in Malappuram. Topical oils, herbal pastes, or antifungal shampoos alone cannot penetrate the hair follicle bulb. Prompt oral prescription treatment prevents formation of inflammatory kerions and permanent cicatricial hair loss.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/20">
                <button
                  onClick={handleBookConsultation}
                  className="w-full py-2.5 px-3 rounded-xl bg-white text-[#1E2559] text-xs font-bold hover:bg-[#EEF2FB] transition-colors text-center"
                >
                  Book Pediatric Skin Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CAUSES RINGWORM & TRANSMISSION VECTORS */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ETIOLOGY &amp; SPREAD PATTERNS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              What Causes Ringworm &amp; How Does It Spread?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Dermatophyte fungi are ubiquitous in our environment. Infection requires fungal contact combined with epidermal micro-trauma or persistent warmth and moisture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndTransmission.map((cause, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-2xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-sm mb-4">
                    0{cIdx + 1}
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {cause.desc}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] p-3 rounded-2xl border border-[#E2E8F0]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] mb-0.5">
                    Prevention Measure
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {cause.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Destigmatisation Callout */}
          <div className="mt-8 bg-white rounded-3xl p-6 sm:p-7 border border-[#CBD5E1] shadow-sm flex flex-col sm:flex-row items-center gap-5">
            <div className="p-3 bg-[#EEF2FB] text-[#303A88] rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base text-[#1E2559]">
                Ringworm Is an Infection, Not a Reflection of Poor Hygiene
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Many patients in Manjeri feel embarrassed or stigmatized when diagnosed with ringworm, mistakenly assuming it denotes personal uncleanliness. Fungal spores are airborne, soil-borne, and transfer easily between highly active, hygienic individuals through sweat, sports, or touching household pets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ACCURATE DIAGNOSIS MATTERS & DIFFERENTIAL MIMICS */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL SAFETY &amp; DIFFERENTIAL DIAGNOSIS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Why Accurate Diagnosis Matters: Conditions That Mimic Ringworm
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Annular lesions are among the most misleading clinical presentations in dermatology. Treating an inflammatory eczema as ringworm or applying steroid creams to true ringworm can cause severe deterioration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentialMimics.map((mimic, mIdx) => (
              <div
                key={mIdx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-[#1E2559]">
                    {mimic.condition}
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-[#64748B] px-2 py-0.5 rounded bg-white border border-[#E2E8F0]">
                    Mimic
                  </span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {mimic.distinction}
                </p>
              </div>
            ))}
          </div>

          {/* When to Seek Professional Assessment Box */}
          <div className="mt-8 bg-[#FFFBEB] rounded-3xl p-6 sm:p-7 border border-[#FDE68A] space-y-4">
            <div className="flex items-center gap-2.5 text-[#B45309] font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-[#D97706]" />
              <span>When Should You Seek Immediate Professional Assessment in Manjeri?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#92400E] leading-relaxed">
              Do not rely on self-medication or friend-recommended over-the-counter creams. Prompt medical evaluation by a qualified doctor is indicated if you experience any of the following:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-[#78350F]">
              <div className="p-3 bg-white/80 rounded-xl border border-[#FDE68A]">
                <strong>• Spreading or Extensive Rash:</strong> Multiple body sites affected simultaneously or rings enlarging rapidly.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-[#FDE68A]">
                <strong>• Scalp, Beard or Nail Involvement:</strong> Hair breakage or nail discoloration requires oral prescription medication.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-[#FDE68A]">
                <strong>• Pain, Warmth or Pus Discharge:</strong> Suggests secondary bacterial superinfection (impetigo or cellulitis).
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-[#FDE68A]">
                <strong>• Chronic Recurrence or Treatment Failure:</strong> Over-the-counter creams have not helped after 14 days of use.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC EVIDENCE DISCLOSURE SECTION */}
      <section id="scientific-evidence" className="py-12 lg:py-16 bg-[#EEF2FB] border-y border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              CLINICAL ETHICS &amp; EVIDENCE TRANSPARENCY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Exploring Homoeopathic Treatment for Ringworm in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3">
              Clear, transparent communication regarding the scientific standing of homoeopathy in infectious fungal diseases.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#CBD5E1] shadow-md space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EEF2FB] text-[#303A88] rounded-2xl shrink-0 mt-1">
                <ShieldAlert className="w-7 h-7 text-[#303A88]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-[#1E2559]">
                  What Does Scientific Evidence Say About Homoeopathy for Fungal Ringworm?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Some individuals in Manjeri search for <em>Homoeopathy for Ringworm in Manjeri</em> because they prefer natural treatment modalities, have concerns regarding conventional side effects, or wish to address frequent recurrent skin complaints.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  However, it is clinically essential to understand the scientific consensus: <strong>Homoeopathy has not been shown reliably in rigorous randomized controlled clinical trials to kill dermatophyte fungi or eliminate fungal skin infections</strong>. It is not an established primary treatment for active tinea infections.
                </p>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Because ringworm is an active infectious process caused by invasive micro-organisms feeding on bodily keratin, effective resolution requires established antifungal medications that dismantle the fungal cell membrane. Relying solely on homoeopathy while delaying antifungal treatment can allow the infection to spread across the body, worsen into deep kerions, and transmit to children and household family members.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
              <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#10B981]" />
                  <span>The Role of an Ethical Consultation</span>
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A consultation with a qualified homoeopathic physician provides an opportunity to evaluate the full health history, past steroid abuse, constitutional skin susceptibility, and recurring tendencies. A responsible practitioner will always prioritize patient safety and direct you to evidence-based antifungal therapy where infection is active.
                </p>
              </div>

              <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#1E2559] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#E11D48]" />
                  <span>Do Not Discontinue Prescribed Antifungals</span>
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Patients must never stop, substitute, or delay their medically prescribed antifungal treatments in favour of alternative remedies. Supportive consultations focus on general immune well-being, dietary optimization, and skin barrier health alongside verified antifungal eradication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE-BASED FUNGAL SKIN INFECTION TREATMENT IN MANJERI */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ESTABLISHED CLINICAL THERAPIES
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Evidence-Based Fungal Skin Infection Treatment in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Established therapeutic pathways recommended by international dermatological associations to completely eliminate dermatophyte fungi and restore the epidermal barrier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalEvidenceOptions.map((opt, oIdx) => (
              <div
                key={oIdx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#0D9488] bg-[#EEF2FB] px-3 py-1 rounded-full">
                      Step {opt.step}
                    </span>
                    <span className="text-[10px] font-semibold text-[#94A3B8] uppercase">
                      Clinical Protocol
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#1E2559] mb-1">
                    {opt.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#303A88] mb-3">
                    {opt.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DANGER CALLOUT: TINEA INCOGNITO */}
          <div className="mt-8 bg-[#FFF1F2] rounded-3xl p-6 sm:p-8 border border-[#FECDD3] text-[#9F1239] space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#E11D48] text-white rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#9F1239]">
                Critical Warning: The Epidemic of Tinea Incognito in Kerala
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
              In Kerala, easy over-the-counter access to combination steroid creams (frequently marketed for "itching" or "skin allergies") has triggered widespread <strong>Tinea Incognito</strong>. When potent steroids (such as clobetasol propionate) are applied to ringworm, they temporarily relieve itching by shutting down the local immune response. However, the fungus proliferates unchecked deep into hair follicles, creating steroid-dependent, disfiguring, and resistant fungal infections.
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#9F1239]">
              Rule of Thumb: Never apply any cream containing corticosteroids to an undiagnosed itchy circular rash without explicit prescription from a qualified physician.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO PREVENT RINGWORM FROM SPREADING (PRACTICAL PROTOCOL) */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              HYGIENE &amp; REINFECTION PREVENTION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              How to Prevent Ringworm from Spreading
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Fungal spores are remarkably resilient. Implementing disciplined daily hygiene protocols protects household members and prevents annoying recurrences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h4 className="font-bold text-sm text-[#1E2559]">
                Keep Skin Thoroughly Dry
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Pat skin completely dry with a dedicated towel after bathing. Pay meticulous attention to groin creases, axillae, under-breast folds, and toe webs.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h4 className="font-bold text-sm text-[#1E2559]">
                Zero Sharing of Personal Items
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Never share bath towels, bedsheets, nail clippers, hair combs, helmets, or prayer caps. Keep infected clothing isolated until washed.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h4 className="font-bold text-sm text-[#1E2559]">
                Hot Laundry &amp; Sun Drying
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Wash underwear and towels in hot water with laundry disinfectant. Sun-dry garments in direct ultraviolet sunlight to destroy fungal spores.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs">
                4
              </div>
              <h4 className="font-bold text-sm text-[#1E2559]">
                Footwear in Public Wet Zones
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Always wear flip-flops in shared locker rooms, mosque ablution areas, hostel showers, and poolside tiles. Never walk barefoot on damp communal floors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BOOKING SECTION */}
      <section id="booking-section" className="py-12 lg:py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL CONSULTATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Schedule Your Skin Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Consult Dr. Anjali Chandrasekhar via secure Online Video Consultation or visit our Outpatient Clinics in Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-[#CBD5E1] shadow-xl">
            <AppointmentBookingEngine initialType="online" />
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (10 ACCORDION ITEMS) */}
      <section className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              PATIENT QUESTIONS &amp; CLINICAL ANSWERS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Common enquiries regarding Ringworm Treatment, homoeopathy disclosures, and fungal skincare in Manjeri and Malappuram.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1E2559] hover:text-[#303A88] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] shrink-0 transform transition-transform duration-200 ${
                      activeFaq === fIdx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === fIdx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] bg-[#FAFCFF]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Regional Guides Cross-Linking & Footer Notes */}
      <RegionalRelatedGuides currentGuideKey="ringworm-treatment-manjeri" />
    </div>
  );
};
