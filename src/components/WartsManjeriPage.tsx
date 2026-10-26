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
  Eye,
  Scissors,
} from 'lucide-react';

export const WartsManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Skin Warts & Lesion Assessment (Manjeri patient guide).'
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
    navigateToBookingWithReason('Skin Warts Assessment - Manjeri', 'online');
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
      title: 'Viral Origin (HPV)',
      desc: 'Skin warts are usually caused by specific strains of the Human Papillomavirus (HPV) affecting the outer epidermal layer.',
    },
    {
      title: 'Diverse Body Locations',
      desc: 'Warts can appear on the hands, feet, face, fingers, knees, and around fingernails or toenails.',
    },
    {
      title: 'Diagnosis Matters',
      desc: 'Not every skin growth is a wart; professional assessment is crucial to distinguish warts from moles, skin tags, corns, or calluses.',
    },
    {
      title: 'Natural Regression Possible',
      desc: 'Some warts disappear naturally without treatment as the immune system clears the virus, while others persist for months or years.',
    },
    {
      title: 'Evidence-Based Options',
      desc: 'Proven clinical methods include prescription salicylic acid formulations and professional in-clinic cryotherapy (freezing).',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'High-quality scientific trials have not established homoeopathy as an effective treatment or definitive cure for skin warts.',
    },
    {
      title: 'Avoid Dangerous DIY Removal',
      desc: 'Never cut, burn, peel, or apply unverified caustic acids to skin growths at home, as this risks burns, deep scarring, and infection.',
    },
    {
      title: 'Seek Prompt Assessment',
      desc: 'Consult a healthcare professional for rapidly growing, painful, bleeding, ulcerated, or cosmetically concerning lesions.',
    },
    {
      title: 'Diabetic & Circulation Care',
      desc: 'Individuals with diabetes, neuropathy, or poor circulation must never treat foot warts at home; seek professional foot care.',
    },
    {
      title: 'Sensible Hygiene Precautions',
      desc: 'Practising good hygiene, avoiding scratching or picking, and wearing footwear in wet communal areas reduce viral transmission.',
    },
  ];

  const wartCharacteristics = [
    'Small raised or flattened skin growths with distinct borders',
    'A rough, grainy, or pebble-like "cauliflower" surface texture',
    'Skin-coloured, brownish, greyish, pink, or darker pigmentation',
    'Tiny dark pinpoint dots (clotted capillary blood vessels) visible within common warts',
    'Growths tightly hugging fingernails or toenails (periungual warts)',
    'Thickened, inward-pressing lesions on the weight-bearing soles of the feet (plantar warts)',
    'Multiple small, flat lesions appearing in clusters or linear groupings',
  ];

  const wartTypes = [
    {
      id: 'common-warts',
      name: '1. Common Warts (Verruca Vulgaris)',
      location: 'Fingers, hands, knees, elbows',
      desc: 'Common warts typically develop on the fingers, dorsal hands, and around the nails. They feature a rough, firm, grainy surface with visible tiny black dots representing clotted micro-vessels. They can spread to adjacent skin when picked, bitten, or scratched.',
      caution: 'Biting fingernails or picking cuticles significantly raises the likelihood of spreading warts across fingers.',
    },
    {
      id: 'plantar-warts',
      name: '2. Plantar Warts (Verruca Plantaris)',
      location: 'Soles, heels, and balls of the feet',
      desc: 'Plantar warts occur on weight-bearing areas of the soles. Walking and standing pressure forces them to grow inward beneath thick calluses, causing discomfort similar to stepping on a small stone. They can easily be confused with corns.',
      caution: 'Patients with diabetes, neuropathy, or peripheral vascular disease should never perform self-treatment on plantar lesions.',
    },
    {
      id: 'flat-warts',
      name: '3. Flat Warts (Verruca Plana)',
      location: 'Face, forehead, back of hands, shaved legs/arms',
      desc: 'Flat warts are smaller, smoother, and flatter than other warts. They often appear in large numbers (clusters of 20 to 100) and are skin-coloured or light brown. In men, they can spread along beard lines; in women, along legs after shaving.',
      caution: 'Avoid shaving directly over areas with flat warts to prevent widespread viral inoculation.',
    },
    {
      id: 'filiform-warts',
      name: '4. Filiform Warts (Facial Digitate Warts)',
      location: 'Eyelids, around the nose, lips, chin, neck',
      desc: 'Filiform warts are thin, elongated, finger-like projections that emerge quickly around facial orifices. Because they grow near sensitive structures such as the eyes and mouth, aggressive OTC chemicals must never be applied.',
      caution: 'Only qualified medical practitioners or dermatologists should treat growths near the eyes or lips.',
    },
    {
      id: 'periungual-warts',
      name: '5. Periungual & Subungual Warts',
      location: 'Surrounding or beneath fingernails and toenails',
      desc: 'These warts form rough clusters around the nail folds or under the nail plate. As they grow, they can deform nail contour, disrupt cuticle integrity, cause persistent throbbing discomfort, and prove difficult to eradicate.',
      caution: 'Professional assessment is critical before the nail bed or germinal matrix suffers permanent structural damage.',
    },
  ];

  const contributingFactors = [
    {
      title: 'Direct Skin-to-Skin Contact',
      desc: 'Certain HPV strains spread easily through direct contact with an existing wart on yourself or another person.',
    },
    {
      title: 'Micro-Abrasions & Skin Breaks',
      desc: 'Tiny scratches, cuts, hangnails, or skin cracks provide an open doorway for the virus to infect the epidermal basal layer.',
    },
    {
      title: 'Picking, Scratching & Shaving',
      desc: 'Fiddling with, picking, or shaving over warts directly transfers active viral particles to adjacent unaffected skin (autoinoculation).',
    },
    {
      title: 'Shared Personal Grooming Tools',
      desc: 'Sharing nail clippers, pumice stones, emery boards, razors, or towels with someone who has warts facilitates transmission.',
    },
    {
      title: 'Communal Wet Environments',
      desc: 'Walking barefoot on warm, moist surfaces around swimming pools, public showers, and locker rooms increases plantar wart risks.',
    },
    {
      title: 'Individual Immune Status',
      desc: 'The body’s cell-mediated immune response determines whether HPV is cleared rapidly or leads to persistent, recurring warts.',
    },
  ];

  const warningSigns = [
    'The growth changes rapidly in size, outline, border, or colour.',
    'The lesion bleeds spontaneously, oozes, or develops an open ulcer.',
    'It causes persistent throbbing pain or interferes with daily walking and hand use.',
    'The growth is situated on the face, eyelids, lips, or genital/anal area.',
    'The patient is immunocompromised, on immunosuppressive medication, or has diabetes.',
    'The growth looks unusual, lacks typical wart features, or resembles an atypical mole or skin malignancy.',
  ];

  const consultationQuestions = [
    'Is this growth definitely a wart, or could it be a mole, corn, or skin tag?',
    'Is active treatment strictly necessary, or is clinical observation recommended?',
    'Which evidence-based treatment is most appropriate for this specific body location?',
    'What are the realistic risks of pain, blistering, or scarring with clinical procedures?',
    'How can I prevent the virus from spreading to other fingers or family members?',
    'What should I do if the wart returns after an apparently successful removal?',
    'Are there any specific precautions I should take based on my general health or diabetes?',
    'Under what clinical signs should I seek emergency or dermatologist assessment?',
  ];

  const preventionTips = [
    'Avoid picking, scratching, or biting warts: Picking irritates the lesion and seeds virus into nearby dermal layers.',
    'Keep affected areas clean and dry: Wash hands thoroughly after touching or applying any prescribed medication to a wart.',
    'Do not share personal tools: Never share nail clippers, emery boards, pumice stones, razors, or towels.',
    'Protect your skin barrier: Keep hands and cuticles moisturised to prevent tiny cracks and hangnails where HPV can enter.',
    'Wear waterproof sandals in public wet areas: Use flip-flops in gym locker rooms, communal showers, and swimming pools.',
    'Avoid shaving over warts: Shaving creates multiple micro-cuts that spread viral particles along the razor stroke line.',
    'Follow professional aftercare: If you undergo clinical wart treatment, adhere strictly to dressing and wound-care guidance.',
  ];

  const faqs = [
    {
      question: '1. Where can I find Skin Warts Treatment in Manjeri?',
      answer:
        'You can seek consultation with qualified healthcare professionals and clinics in and around Manjeri. A medical practitioner will carefully inspect the lesion, confirm whether it is genuinely an HPV-related wart, explain evidence-based clinical options (such as topical keratolytics or cryotherapy), and refer you to a dermatologist if the growth is atypical or resistant.',
    },
    {
      question: '2. Is Homoeopathic Treatment for Skin Warts in Manjeri effective?',
      answer:
        'There is no reliable, high-quality scientific evidence establishing homoeopathy as an effective treatment or definitive cure for skin warts. Because warts frequently resolve spontaneously as the patient’s immune system clears HPV, clinical improvements are often mistaken for therapeutic efficacy. Patients should understand these evidence boundaries and ensure that changing, bleeding, or unusual growths receive prompt medical evaluation.',
    },
    {
      question: '3. What causes skin warts?',
      answer:
        'Most skin warts are caused by specific subtypes of the Human Papillomavirus (HPV). The virus penetrates the outermost epidermal layer through tiny micro-abrasions, causing localized keratinocytes to proliferate more rapidly than normal. Transmission can occur through direct skin contact or contaminated shared items, though not everyone exposed develops a wart.',
    },
    {
      question: '4. Can skin warts disappear without treatment?',
      answer:
        'Yes. In many individuals—particularly children and young adults with intact immune systems—warts eventually regress and vanish on their own over several months to a couple of years. However, if a wart causes physical pain, spreads rapidly, impairs nail growth, or presents cosmetic concerns, professional medical guidance is recommended.',
    },
    {
      question: '5. What treatments are available for skin wart removal?',
      answer:
        'Established evidence-based options include carefully applied prescription-strength salicylic acid preparations (which gently peel away infected keratin layers), professional cryotherapy (freezing the wart with liquid nitrogen), and specialist dermatological procedures such as curettage, electrosurgery, or laser ablation. The choice depends on the wart’s location, depth, number, and patient comfort.',
    },
    {
      question: '6. Should I remove a wart at home?',
      answer:
        'No, you should never attempt to cut, burn, tie off, or use unverified caustic home acids on skin growths. Doing so frequently results in severe chemical burns, bacterial superinfection, permanent scars, and viral dissemination. Over-the-counter products should only be used after a doctor has confirmed the diagnosis and verified the product is safe for that specific anatomical area.',
    },
    {
      question: '7. When should I consult a Skin Warts Specialist in Manjeri?',
      answer:
        'You should promptly consult a healthcare professional if a growth alters rapidly in size, shape, or pigmentation; bleeds without provocation; causes persistent discomfort; develops an ulcer; occurs on the face, eyelids, or genital area; or if you have diabetes or an impaired immune system.',
    },
    {
      question: '8. Can skin warts return after treatment?',
      answer:
        'Yes. Even when a visible wart is successfully destroyed by cryotherapy or salicylic acid, dormant HPV particles may remain in clinically normal adjacent skin cells. Recurrence is therefore possible, particularly if the underlying immune clearance is incomplete.',
    },
    {
      question: '9. Are skin warts contagious?',
      answer:
        'Yes, skin warts are mildly contagious. They can spread directly through intimate or prolonged physical contact, as well as indirectly via contaminated damp surfaces, nail clippers, towels, or razor blades. Avoiding picking, covering the lesion, and practising good hand hygiene minimise contagion.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Mobile / Quick Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-3 shadow-lg flex items-center justify-between sm:hidden">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wide">
              Skin Warts Guide
            </span>
            <span className="text-xs font-semibold text-[#1E2559]">
              Manjeri & Malappuram
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${phonePrimary}`}
              className="px-3 py-2 rounded-lg bg-[#303A88] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              onClick={handleBookConsultation}
              className="px-3.5 py-2 rounded-lg bg-[#0D9488] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Doctor Profile on Left */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFD] to-[#F8FAFD] pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Doctor Profile Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-[#99F6E4] shadow-md hover:shadow-lg transition-all">
                
                {/* Doctor Visual & Credentials */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#5EEAD4] mb-5 group bg-slate-100">
                  <img
                    src="/images/dr-anjali-malayali-doctor.jpg"
                    alt="Dr. Anjali Chandrasekhar (BHMS) - Skin & Wart Consultations"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/treatment-skin-hair.svg';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2559]/90 via-[#1E2559]/20 to-transparent pointer-events-none" />

                  {/* Registered Medical Council Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#0D9488] border border-[#99F6E4] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Kerala Council Reg: 16503</span>
                  </div>

                  {/* Doctor Details at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-editorial text-xl font-bold text-white">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs text-[#99F6E4] font-medium font-sans">
                      BHMS • Senior Homeopathic Physician
                    </p>
                    <p className="text-[11px] text-white/80 font-sans mt-0.5">
                      Skin &amp; Constitutional Consultations
                    </p>
                  </div>
                </div>

                {/* 4 Interactive Credentials Cards */}
                <div className="grid grid-cols-2 gap-2.5 text-center font-sans mb-4">
                  <div className="bg-[#F0FDFA] rounded-xl p-2.5 border border-[#CCFBF1]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#0D9488] block tabular-nums">
                      10+ Years
                    </span>
                    <span className="text-[10px] text-[#134E4A] font-semibold uppercase tracking-wider">
                      Clinical Care
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-2.5 border border-[#D8E1F5]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#303A88] block tabular-nums">
                      2,000+
                    </span>
                    <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                      Patients Consulted
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-2.5 border border-[#D8E1F5]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#303A88] block">
                      Kuttippuram
                    </span>
                    <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                      Main Clinic
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-2.5 border border-[#D8E1F5]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#45AC4B] block">
                      Puthanathani
                    </span>
                    <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                      Branch Clinic
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#475569] border-t border-[#CCFBF1] pt-3">
                  <p className="flex items-center gap-1.5 text-[#1E2559] font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Personalized clinical assessment for patients in Manjeri and across Malappuram district.</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[#64748B]">
                    <Lock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Private video consultations &amp; in-clinic visits available.</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#CCFBF1] flex items-center justify-between gap-2">
                  <a
                    href={`tel:${phonePrimary}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#303A88] text-white text-xs font-bold text-center hover:bg-[#252E6D] transition-colors"
                  >
                    Call: {phonePrimary}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#45AC4B] text-white text-xs font-bold text-center hover:bg-[#39933E] transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#0D9488]" />
                  Manjeri Patient Information
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88] border border-[#303A88]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#303A88]" />
                  Evidence-Informed Healthcare
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#45AC4B]/10 text-[#45AC4B] border border-[#45AC4B]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#45AC4B]" />
                  Skin &amp; Wart Assessment
                </span>
              </div>

              {/* Main H1 Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2559] leading-[1.15]">
                Skin Warts Homoeopathic Treatment in Manjeri
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-sans">
                Skin warts are common skin growths that can develop on different parts of the body, including the hands, fingers, feet, face, and other areas. Although warts are usually harmless, they may cause discomfort, affect appearance, or become a concern when they spread or repeatedly return. Understanding what causes skin warts and knowing when to seek professional advice can help people make informed decisions about their skin health.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                If you are looking for <strong className="text-[#1E2559]">Skin Warts Treatment in Manjeri</strong>, it is important to understand the different types of warts, their possible causes, and the available treatment options. People interested in <strong className="text-[#1E2559]">Homoeopathic Treatment for Skin Warts in Manjeri</strong> may also want to discuss their concerns with a qualified healthcare professional and understand the scientific evidence behind the available approaches.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#CCFBF1] shadow-xs">
                <p className="text-xs sm:text-sm text-[#0F766E] font-medium leading-relaxed">
                  Warts are generally associated with certain types of human papillomavirus (HPV), which affect the outer layer of the skin. They may vary in size, shape, texture, and location. Some disappear without treatment, while others persist for months or years. A proper assessment can help distinguish warts from other skin growths and identify the most suitable next steps.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="px-6 py-3 rounded-xl bg-[#0D9488] text-white font-bold text-sm shadow-md hover:bg-[#0F766E] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Skin Warts Consultation</span>
                </button>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="px-5 py-3 rounded-xl bg-white text-[#303A88] font-bold text-sm border border-[#D8E1F5] hover:bg-[#F8FAFD] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#303A88]" />
                  <span>Call Doctor Desk ({phoneSecondary})</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10 Important Key Takeaways Grid */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] font-sans">
              QUICK CLINICAL SUMMARY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Important Key Takeaways
            </h2>
            <p className="text-sm text-[#64748B] mt-2 font-sans">
              Essential facts regarding skin warts, diagnosis, HPV transmission, home precautions, and evidence-informed care in Manjeri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#99F6E4] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                    0{idx + 1}
                  </div>
                  <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] text-[#0D9488] font-semibold font-sans">
                  <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Clinical Insight</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Are Skin Warts? */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              UNDERSTANDING THE CONDITION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What Are Skin Warts?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Skin warts are small, usually non-cancerous growths that develop when certain types of HPV infect the skin. The virus can enter through tiny cuts or breaks in the skin and cause cells in the outer skin layer to grow more rapidly than usual.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Warts may appear as rough bumps, smooth growths, thickened patches, or small clusters of skin-coloured or darker lesions. Their appearance often depends on the type of wart and the area affected.
            </p>
          </div>

          {/* Characteristics Checklist */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#1E2559] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0D9488]" />
              <span>Common Clinical Characteristics of Skin Warts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {wartCharacteristics.map((char, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-2 h-2 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Caveat Box */}
          <div className="rounded-2xl bg-[#FFFBEB] p-5 sm:p-6 border border-[#FDE68A] space-y-2">
            <h4 className="font-editorial text-base font-bold text-[#92400E] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <span>Not Every Raised Skin Growth Is a Wart</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
              Skin tags, moles, corns, calluses, and certain other skin conditions may look similar. A healthcare professional can assess the lesion and determine whether further examination is necessary. When considering <strong className="text-[#92400E]">Skin Warts Consultation in Manjeri</strong>, it is helpful to describe when the growth first appeared, whether it has changed, and whether it causes pain, itching, bleeding, or other symptoms.
            </p>
          </div>

        </div>
      </section>

      {/* Common Types of Skin Warts */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL CLASSIFICATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Common Types of Skin Warts
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Understanding the different types of warts can help explain why their appearance and treatment may vary.
            </p>
          </div>

          <div className="space-y-4">
            {wartTypes.map((type) => (
              <div
                key={type.id}
                className="rounded-2xl p-5 sm:p-6 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#99F6E4] transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                    {type.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#CCFBF1] text-[#0F766E] w-fit">
                    <MapPin className="w-3 h-3 text-[#0F766E]" />
                    {type.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {type.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0D9488] font-medium flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>{type.caution}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] text-center pt-2">
            Different wart types may require different treatment approaches. A qualified practitioner can help determine whether a lesion is a wart and whether treatment is necessary.
          </p>

        </div>
      </section>

      {/* What Causes Skin Warts? */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              ETIOLOGY & TRANSMISSION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What Causes Skin Warts?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Most common skin warts are caused by particular types of HPV. The virus may spread through direct skin contact or contact with contaminated surfaces. However, exposure does not always result in a wart, and the time between exposure and the appearance of a growth can vary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributingFactors.map((factor, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white border border-[#E2E8F0] shadow-xs space-y-2"
              >
                <div className="w-7 h-7 rounded-full bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="font-editorial text-base font-bold text-[#1E2559]">
                  {factor.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Hygiene Misconception Box */}
          <div className="rounded-2xl bg-white p-5 border border-[#CCFBF1] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              <strong className="text-[#1E2559]">Hygiene Clarification:</strong> Warts are common and can affect people of different ages. Their presence does not mean that someone has poor hygiene. Avoiding unnecessary skin trauma and practising sensible hygiene can help reduce the chance of spreading them.
            </p>
          </div>

        </div>
      </section>

      {/* Skin Warts Treatment in Manjeri: Why Diagnosis Matters */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL SAFETY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Skin Warts Treatment in Manjeri: Why Diagnosis Matters
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Before choosing a treatment, it is important to establish whether a skin growth is actually a wart. Some lesions that resemble warts may need a different approach, and certain changing or unusual growths require prompt medical assessment.
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              During an examination, a healthcare professional may consider the lesion's location, shape, colour, surface, size, and duration. They may also ask whether it has grown, spread, become painful, or changed in appearance.
            </p>
          </div>

          {/* Warning Signs Box */}
          <div className="rounded-2xl bg-[#FFF1F2] p-6 sm:p-8 border border-[#FFE4E6] space-y-4">
            <div className="flex items-center gap-2 text-[#BE123C]">
              <AlertCircle className="w-5 h-5 text-[#E11D48]" />
              <h3 className="font-editorial text-lg font-bold">
                You Should Seek Professional Assessment If a Skin Growth:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#881337]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
            <p className="text-xs sm:text-sm text-[#303A88] leading-relaxed">
              Searching for a <strong className="text-[#1E2559]">Skin Warts Doctor in Manjeri</strong> or a <strong className="text-[#1E2559]">Skin Warts Specialist in Manjeri</strong> can be a starting point for finding appropriate care. Look for a qualified healthcare professional who can assess the growth, explain treatment choices, and arrange referral to a dermatologist when necessary.
            </p>
          </div>

        </div>
      </section>

      {/* Exploring Homoeopathic Treatment for Skin Warts in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL TRANSPARENCY & SCIENTIFIC PERSPECTIVE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Exploring Homoeopathic Treatment for Skin Warts in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Some people search for <strong className="text-[#1E2559]">Homoeopathic Skin Warts Treatment in Manjeri</strong> because they are interested in homoeopathy or wish to discuss different approaches to recurring skin complaints.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A consultation with a qualified homoeopathic practitioner may provide an opportunity to discuss the history of the skin growth, previous treatments, concerns about appearance, and preferences regarding care. However, it is important to distinguish a consultation from evidence that a treatment is effective.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-7 border border-[#CCFBF1] space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#0F766E] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#0D9488]" />
              <span>Scientific Evidence &amp; Natural Regression</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              There is no reliable, high-quality scientific evidence establishing homoeopathy as an effective treatment for skin warts. Warts may also disappear naturally as the immune system responds to the virus, making it difficult to attribute improvement to a particular unproven treatment.
            </p>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              People considering Homoeopathic Treatment for Skin Warts in Manjeri should understand these limitations and avoid delaying appropriate medical assessment, especially when a growth is changing, painful, bleeding, or located near sensitive areas.
            </p>
            <p className="text-xs text-[#64748B] italic">
              A healthcare professional should provide clear information about the likely diagnosis, available evidence-based treatments, possible risks, and circumstances in which specialist care is recommended. No treatment should be promoted as a guaranteed way to remove every wart or prevent all future warts.
            </p>
          </div>

        </div>
      </section>

      {/* Evidence-Based Options for Skin Wart Removal Treatment in Manjeri */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL THERAPEUTICS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Evidence-Based Options for Skin Wart Removal Treatment in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              The appropriate treatment depends on the type, size, number, and location of the warts, as well as the person's age and general health. Some warts disappear without treatment, so observation may be reasonable when the diagnosis is clear and the lesions are not causing problems. When treatment is desired, established options may include the following:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Salicylic Acid */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">Option 01</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Salicylic Acid Products
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Certain over-the-counter products containing salicylic acid can help remove layers of wart tissue gradually. They are commonly used for some warts on the hands and feet.
              </p>
              <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#475569] space-y-1">
                <p className="font-semibold text-[#1E2559]">Precautions:</p>
                <p>These products must be used according to their instructions. They are not suitable for every lesion or body area and should not be applied to the face, genital area, or irritated or broken skin without appropriate medical advice. People with diabetes, poor circulation, or reduced sensation should consult a healthcare professional before using wart-removal products on their feet.</p>
              </div>
            </div>

            {/* Cryotherapy */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">Option 02</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Cryotherapy (Freezing)
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Cryotherapy involves freezing a wart, commonly with liquid nitrogen, to damage the affected tissue. It is performed by trained healthcare professionals and may require more than one session.
              </p>
              <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#475569] space-y-1">
                <p className="font-semibold text-[#1E2559]">Possible Effects:</p>
                <p>Possible effects include temporary pain, blistering, changes in skin colour, and, occasionally, scarring. The suitability of cryotherapy depends on the lesion and its location.</p>
              </div>
            </div>

            {/* Other Clinical Procedures */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">Option 03</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Other Clinical Procedures
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Depending on the case, a dermatologist may consider other methods, such as selected topical medicines, curettage, electrosurgery, or laser treatment.
              </p>
              <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#475569] space-y-1">
                <p className="font-semibold text-[#1E2559]">Considerations:</p>
                <p>Not every procedure is appropriate for every wart, and some methods may cause scarring or pigment changes. Treatment decisions should take into account the likelihood of recurrence, discomfort, cosmetic concerns, and the risk of damaging surrounding skin.</p>
              </div>
            </div>

            {/* Observation */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">Option 04</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Observation (Watchful Waiting)
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Some warts disappear naturally without treatment. If a wart is not painful, is not spreading significantly, and has been correctly identified, a healthcare professional may recommend monitoring it rather than treating it immediately.
              </p>
              <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#475569] space-y-1">
                <p className="font-semibold text-[#1E2559]">When Appropriate:</p>
                <p>This can be particularly relevant when treatment might cause discomfort or scarring in young children or delicate skin areas.</p>
              </div>
            </div>

          </div>

          <div className="rounded-2xl bg-[#FFFBEB] p-4 border border-[#FDE68A] text-center">
            <p className="text-xs sm:text-sm text-[#92400E]">
              People searching for <strong className="text-[#92400E]">Skin Wart Removal Treatment in Manjeri</strong> should discuss these options with a qualified professional rather than attempting to cut, burn, or chemically remove a growth at home.
            </p>
          </div>

        </div>
      </section>

      {/* What to Expect During a Skin Warts Consultation in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL VISIT PREPARATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What to Expect During a Skin Warts Consultation in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A consultation can help determine the nature of a skin growth and whether it requires treatment. Before your appointment, consider noting when the wart appeared, whether it has changed, and whether you have tried any products or procedures. Mention any pain, bleeding, itching, or growths appearing in other areas.
            </p>
          </div>

          {/* Useful Questions */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#1E2559] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0D9488]" />
              <span>Useful Questions to Ask During Your Visit</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {consultationQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-5 h-5 rounded-full bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#CCFBF1] text-xs text-[#475569]">
            A <strong className="text-[#1E2559]">Skin Warts Clinic in Manjeri</strong> should be evaluated according to the qualifications of its practitioners and the services it genuinely provides. Where a lesion is unusual or the diagnosis is uncertain, referral for dermatological assessment may be appropriate. A clear explanation of the treatment plan helps patients make informed choices and understand realistic expectations.
          </div>

        </div>
      </section>

      {/* How to Reduce the Spread of Skin Warts */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              PREVENTION &amp; HYGIENE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              How to Reduce the Spread of Skin Warts
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Although it may not always be possible to prevent warts, certain everyday precautions can reduce opportunities for transmission.
            </p>
          </div>

          <div className="space-y-3">
            {preventionTips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#64748B] italic">
            These measures may reduce the risk of spreading existing warts, but they cannot guarantee that new warts will never develop.
          </p>

        </div>
      </section>

      {/* Skin Problems Treatment in Manjeri: Choosing the Right Care */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              INFORMED HEALTHCARE DECISIONS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Skin Problems Treatment in Manjeri: Choosing the Right Care
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              People searching for <strong className="text-[#1E2559]">Skin Problems Treatment in Manjeri</strong> may have warts, skin tags, corns, calluses, moles, or other types of skin growths. Although these conditions can sometimes look similar, they do not all have the same cause or require the same treatment.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A correct diagnosis is particularly important before removing a lesion. Using acids, sharp tools, or home remedies on an incorrectly identified growth can cause burns, infection, bleeding, or scarring.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              People exploring <strong className="text-[#1E2559]">Homoeopathic Skin Treatment in Manjeri</strong> should receive accurate information about the evidence for the treatment being considered. Homoeopathy has not been established as an effective treatment for skin warts and should not replace appropriate diagnosis or proven treatment options.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-[#E2E8F0] space-y-2">
            <h4 className="font-editorial text-base font-bold text-[#1E2559]">
              Provider Selection Principles:
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              When selecting a healthcare provider, consider professional qualifications, transparent communication, patient safety, and willingness to refer patients when necessary. Avoid providers who guarantee complete removal or claim that a particular approach will prevent every recurrence. The goal should be to identify the skin condition accurately, understand the available options, and choose a suitable approach based on medical evidence and individual circumstances.
            </p>
          </div>

        </div>
      </section>

      {/* Conclusion Banner */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 font-sans">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
            CONCLUSION &amp; NEXT STEPS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Safe, Evidence-Informed Skin Assessment in Manjeri
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Skin warts are common growths usually associated with certain types of HPV. Although they are generally harmless, they can spread, cause discomfort, or create cosmetic concerns. Some disappear naturally, while others may benefit from established treatments such as salicylic acid or professional cryotherapy.
          </p>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            If you are searching for Skin Warts Treatment in Manjeri, the first step is to confirm the diagnosis and understand the available treatment options. People interested in Homoeopathic Skin Warts Treatment in Manjeri should be aware that scientific evidence does not establish homoeopathy as an effective wart treatment. Avoid cutting, burning, or using harsh substances on skin growths at home. Seek professional assessment if a lesion changes, bleeds, becomes painful, or appears in a sensitive area.
          </p>
          <div className="pt-2">
            <button
              onClick={handleBookConsultation}
              className="px-6 py-3 rounded-xl bg-[#0D9488] text-white font-bold text-sm shadow-md hover:bg-[#0F766E] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Clinical Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Comprehensive questions and evidence-based answers regarding skin warts and clinical guidance in Manjeri.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-editorial text-base sm:text-lg font-bold text-[#1E2559] hover:text-[#0D9488] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0D9488] shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-sans">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              CLINICAL APPOINTMENTS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book a Skin &amp; Wart Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select online video assessment or in-person clinic visit with Dr. Anjali Chandrasekhar.
            </p>
          </div>
          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Related Regional Patient Guides in Manjeri */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-sans">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488]">
              EXPLORE OTHER GUIDES
            </span>
            <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#1E2559] mt-1">
              Related Regional Patient Guides in Manjeri
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              Evidence-based information for patients across Malappuram district.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
            
            <button
              onClick={() => {
                setCurrentView('eczema-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#10B981] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#10B981] transition-colors">
                Eczema Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Atopic dermatitis, skin barrier repair, allergy triggers, and medical management.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('acne-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#E11D48] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#E11D48] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#E11D48] transition-colors">
                Acne Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Pimples, blackheads, hormonal breakouts, scar prevention, and clinical care.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('skin-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#F59E0B] transition-colors">
                General Skin Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Chronic dermatitis, fungal infections, rashes, and constitutional assessment.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('hair-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0D9488] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D9488] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#0D9488] transition-colors">
                Hair Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Hair fall, thinning, dandruff, scalp psoriasis, and follicular care.
              </p>
            </button>

          </div>
        </div>
      </section>

      {/* Clinic Branches & Direct Contact Details */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kuttippuram Clinic */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88]">
                <MapPin className="w-3.5 h-3.5" />
                KUTTIPPURAM MAIN CLINIC
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Anjali Homoeo Clinic - Kavumopuram
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${phonePrimary}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#303A88] text-white text-xs font-bold"
                >
                  Call: {phonePrimary}
                </a>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#D8E1F5] text-[#303A88] text-xs font-bold"
                >
                  {phoneSecondary}
                </a>
              </div>
            </div>

            {/* Puthanathani Clinic */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#45AC4B]/10 text-[#45AC4B]">
                <MapPin className="w-3.5 h-3.5" />
                PUTHANATHANI BRANCH
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Anjali Homoeo Clinic - Chembayil Complex
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Opp. Thavakkal Gold, Puthanathani, Kurumbathur, Kerala 676552
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:08921180408`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#45AC4B] text-white text-xs font-bold"
                >
                  Call: 089211 80408
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#CCFBF1] text-[#0F766E] text-xs font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
