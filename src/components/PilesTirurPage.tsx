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
  Award,
  Sparkles,
  BookOpen,
  Layers,
  FileText,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PilesTirurPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles / Haemorrhoids (Tirur patient guide).'
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
    navigateToBookingWithReason('Piles Consultation - Tirur', 'online');
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
      title: 'Swollen Blood Vessels',
      desc: 'Piles, or haemorrhoids, are swollen blood vessels and supporting connective tissues in and around the anus or lower rectum.',
    },
    {
      title: 'Common Symptoms',
      desc: 'Common symptoms include anal itching, localized swelling, discomfort, and bright-red bleeding during or after bowel movements.',
    },
    {
      title: 'Contributing Factors',
      desc: 'Constipation, straining during bowel movements, prolonged toilet sitting (such as phone use), and insufficient dietary fibre contribute to piles.',
    },
    {
      title: 'Bleeding Demands Evaluation',
      desc: 'Rectal bleeding should not automatically be assumed to be piles because other medical conditions can cause similar signs.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homeopathy has not been shown by reliable scientific evidence to effectively treat haemorrhoids or reverse vascular enlargement.',
    },
    {
      title: 'Dietary & Fluid Management',
      desc: 'Increasing dietary fibre, drinking sufficient fluids, and avoiding straining can significantly help manage bowel symptoms.',
    },
    {
      title: 'Medical Assessment Essential',
      desc: 'Persistent or recurrent anorectal symptoms should be formally assessed by a qualified healthcare professional.',
    },
    {
      title: 'Emergency Red Flags',
      desc: 'Heavy continuous bleeding, dizziness, black or tarry stools, or severe anal pain require urgent emergency hospital attention.',
    },
  ];

  // 5 Common Symptoms of Piles from user document
  const commonSymptoms = [
    {
      number: '01',
      title: 'Rectal Bleeding',
      badge: 'Bright-Red Blood',
      desc: 'Bright-red blood may appear on toilet paper, on the surface of stools, or in the toilet bowl after a bowel movement. Although haemorrhoids can cause this symptom, anal fissures, inflammatory bowel disease (IBD), colorectal polyps, and other conditions may also cause bleeding.',
      clinicalNote:
        'Persistent or unexplained rectal bleeding should always be medically assessed by a qualified physician rather than assumed to be harmless piles.',
    },
    {
      number: '02',
      title: 'Anal Itching and Irritation (Pruritus Ani)',
      badge: 'Perianal Discomfort',
      desc: 'Swelling, moisture, and irritation around the anal opening can cause intense itching. Excessive wiping with dry paper, fragranced products, and harsh soaps may worsen the discomfort and compromise the skin barrier.',
      clinicalNote:
        'Gentle cleaning with lukewarm water and avoiding irritating chemical products help reduce irritation while the underlying cause is clinically assessed.',
    },
    {
      number: '03',
      title: 'Pain and Discomfort',
      badge: 'Soreness & Spasm',
      desc: 'External haemorrhoids can cause discomfort, particularly when inflamed or affected by a blood clot (thrombosis). However, severe sharp pain is not typical of uncomplicated internal haemorrhoids and may indicate an anal fissure or perianal abscess.',
      clinicalNote:
        'A healthcare professional can help determine the exact cause of pain and recommend targeted evidence-based treatment.',
    },
    {
      number: '04',
      title: 'Swelling or a Lump',
      badge: 'Palpable Tissue',
      desc: 'A lump around the anus may be associated with external haemorrhoids or a prolapsing internal haemorrhoid. Other conditions, including a thrombosed vein, skin tag, or perianal abscess, can cause similar lumps.',
      clinicalNote:
        'A new, painful, tender, or unexplained lump should be physically examined by a doctor rather than treated through self-diagnosis.',
    },
    {
      number: '05',
      title: 'Difficulty Passing Stools',
      badge: 'Constipation & Straining',
      desc: 'Constipation and hard stools make bowel movements uncomfortable and increase the need for forceful straining. This added mechanical friction further aggravates inflamed haemorrhoidal cushions.',
      clinicalNote:
        'Managing constipation through proper dietary fibre and hydration is an important foundation for reducing pressure on the affected tissues.',
    },
  ];

  // What causes piles
  const causesAndContributors = [
    {
      title: 'Constipation and Straining',
      tag: 'Mechanical Pressure',
      desc: 'Hard, bulky stools and repeated straining increase intra-abdominal pressure around the anus and lower rectum, progressively stretching supportive venous cushions.',
    },
    {
      title: 'Low Dietary Fibre',
      tag: 'Stool Quality',
      desc: 'Fibre helps soften stools and supports regular, effortless bowel movements. Diets lacking whole grains, fresh vegetables, and fruits increase the likelihood of constipation.',
    },
    {
      title: 'Prolonged Sitting on the Toilet',
      tag: 'Venous Pooling',
      desc: 'Spending excessive time sitting on the toilet seat—particularly while reading or using mobile phones—causes blood to pool in perianal veins due to gravity and lack of pelvic floor support.',
    },
    {
      title: 'Pregnancy and Childbirth',
      tag: 'Pelvic Vascular Pressure',
      desc: 'The enlarging uterus increases downward pressure in the pelvic region, while hormonal progesterone relaxes vascular walls. Straining during labour can also trigger haemorrhoids.',
    },
    {
      title: 'Age-Related Changes',
      tag: 'Connective Tissue',
      desc: 'The fibroelastic tissues that anchor haemorrhoidal cushions to the anal wall naturally weaken and lose elasticity with age, increasing susceptibility to prolapse.',
    },
    {
      title: 'Sedentary Lifestyle & Heavy Lifting',
      tag: 'Pressure Spikes',
      desc: 'Prolonged desk sitting slows colonic peristalsis, while sudden heavy weight lifting without proper exhalation creates spikes in anorectal venous pressure.',
    },
  ];

  // Evidence-based medical modalities
  const evidenceBasedTreatments = [
    {
      step: '01',
      title: 'Increase Dietary Fibre',
      badge: 'Conservative Care',
      desc: 'Fibre softens stools, increases bulk, and reduces the need for straining during defecation.',
      points: [
        'Fresh fruits (papaya, pears, apples with peel) and leafy vegetables',
        'Whole grains, unpolished rice, oats, and bran cereals',
        'Beans, chickpeas, and lentils introduced gradually to minimise gas',
        'Natural bulk-forming supplements like isabgol (psyllium husk) taken with plenty of water',
      ],
    },
    {
      step: '02',
      title: 'Drink Sufficient Fluids',
      badge: 'Hydration Therapy',
      desc: 'Adequate fluid intake supports normal bowel function and prevents stools from becoming dry and hard.',
      points: [
        'Drink adequate water, buttermilk, and clear soups throughout the day',
        'Avoid excessive consumption of caffeinated drinks and carbonated beverages',
        'Follow individualized clinician guidelines if you have heart or kidney fluid restrictions',
      ],
    },
    {
      step: '03',
      title: 'Avoid Toilet Straining & Bad Habits',
      badge: 'Habit Correction',
      desc: 'Correcting bathroom posture and habits prevents unnecessary mechanical pressure on the anorectum.',
      points: [
        'Respond promptly to the natural urge to pass stools; never postpone defecation',
        'Keep toilet sitting strictly under 3–5 minutes; keep mobile phones outside the bathroom',
        'Use a low footstool to elevate knees into a squatting angle for straighter anorectal alignment',
      ],
    },
    {
      step: '04',
      title: 'Warm Water Sitz Baths',
      badge: 'Symptom Relief',
      desc: 'Sitting in comfortably warm water for 10–15 minutes several times daily provides soothing temporary relief.',
      points: [
        'Relaxes the internal anal sphincter and relieves painful pelvic muscle spasms',
        'Use plain lukewarm water; avoid hot water that could burn delicate skin',
        'Gently pat dry with a soft cotton towel or use a cool hairdryer; avoid vigorous wiping',
      ],
    },
    {
      step: '05',
      title: 'Appropriate Medical Formulations',
      badge: 'Pharmacological Care',
      desc: 'Clinicians or pharmacists can recommend short-term topical treatments and stool softeners.',
      points: [
        'Short-term topical soothing ointments and local anaesthetics for acute flare-ups',
        'Osmotic stool softeners (lactulose or macrogol) to prevent hard stools during healing',
        'Avoid prolonged unsupervised use of steroid creams, which can cause skin thinning',
      ],
    },
    {
      step: '06',
      title: 'Medical Procedures & Surgical Options',
      badge: 'Procedural Options',
      desc: 'If symptoms persist despite conservative treatment, in-clinic medical procedures provide definitive relief.',
      points: [
        'Rubber Band Ligation: Elastic bands cut off vascular supply to internal haemorrhoids',
        'Injection Sclerotherapy: Chemical solution creates scarring to shrink swollen tissue',
        'Infrared Coagulation (IRC): Focused infrared light coagulates bleeding internal piles',
        'Haemorrhoidectomy / Stapled Hemorrhoidopexy: For severe grade III–IV or prolapsing piles',
      ],
    },
  ];

  // 7 Consultation preparation points from user document
  const preparationPoints = [
    {
      icon: Clock,
      title: 'Symptom Timeline',
      detail: 'Note when your symptoms began and whether they have been getting progressively worse.',
    },
    {
      icon: Droplets,
      title: 'Bleeding Description',
      detail: 'Observe whether bleeding is bright red, dark, on the toilet paper, in the bowl, or mixed with stool.',
    },
    {
      icon: Activity,
      title: 'Bowel Habit Log',
      detail: 'Record how often you pass stools, whether you experience constipation, and if you feel incomplete evacuation.',
    },
    {
      icon: Heart,
      title: 'Pain & Swelling Timing',
      detail: 'Note whether pain occurs during, immediately after, or continuously between bowel movements.',
    },
    {
      icon: FileText,
      title: 'Current Medications',
      detail: 'List all prescribed drugs, blood thinners, over-the-counter laxatives, pain medicines, or herbal remedies.',
    },
    {
      icon: ShieldCheck,
      title: 'Medical History',
      detail: 'Mention previous anorectal conditions, childbirth history, chronic medical diagnoses, and family history.',
    },
    {
      icon: AlertCircle,
      title: 'Constitutional Changes',
      detail: 'Report any recent changes in bowel calibre, unexpected weight loss, fatigue, or loss of appetite.',
    },
  ];

  // 12 FAQs (7 from document + 5 high-yield clinical questions tailored to Tirur & Malappuram region)
  const faqs = [
    {
      q: 'What is a homeopathy clinic for piles near Tirur?',
      a: 'The phrase generally refers to a homeopathy clinic offering consultations to people experiencing symptoms they associate with piles (haemorrhoids). However, homeopathy has not been established by reliable scientific evidence as an effective treatment for haemorrhoids. Persistent or concerning symptoms—especially rectal bleeding or severe pain—should be medically assessed by a qualified doctor.',
    },
    {
      q: 'Can piles be treated without surgery?',
      a: 'Yes. Many mild to moderate cases improve with increased dietary fibre, adequate fluid intake, avoiding toilet straining, and appropriate symptom management like warm sitz baths and stool softeners. If symptoms persist or haemorrhoids become severe (grades III or IV), a clinician may recommend a minor procedure (such as rubber band ligation) or surgery.',
    },
    {
      q: 'Is homeopathy effective for piles?',
      a: 'Reliable scientific evidence has not established homeopathy as an effective treatment for haemorrhoids. It should not replace physical medical assessment, proctological examination, or evidence-based care, particularly when rectal bleeding, intense pain, or suspected thrombosis is present.',
    },
    {
      q: 'Which doctor should I consult for piles in Tirur?',
      a: 'A qualified general physician, general surgeon, or colorectal specialist (proctologist) is the appropriate professional to diagnose and manage haemorrhoids. Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, dietary habit coaching, and medical triage at her Kuttippuram clinic (conveniently accessible along the Tirur-Kuttippuram Road) with prompt surgical referral when procedural intervention is indicated.',
    },
    {
      q: 'What foods may help manage piles?',
      a: 'Fibre-rich foods such as vegetables, whole grains (brown rice, oats), beans, lentils, and fruits (pears, papaya, oranges, apples) help soften stools and reduce straining. Dietary fibre should be increased gradually alongside sufficient fluid intake to avoid gas and abdominal bloating.',
    },
    {
      q: 'When should I seek urgent medical care?',
      a: 'Seek urgent hospital emergency care for heavy or continuous rectal bleeding, fainting, lightheadedness, severe anal pain, black or tarry stools, or high fever accompanied by worsening anal swelling and discharge.',
    },
    {
      q: 'How can I reduce the risk of recurring piles?',
      a: 'Helpful measures include consuming 25–35 grams of dietary fibre daily, drinking adequate fluids throughout the day, never straining on the toilet, limiting toilet sitting to under 3–5 minutes, staying physically active, and responding promptly to the urge to pass stools.',
    },
    {
      q: 'How far is Anjali Homoeo Clinic from Tirur?',
      a: 'Anjali Homoeo Clinic’s main center is located in Kuttippuram on the Tirur-Kuttippuram Road, approximately 15 to 20 minutes from Tirur town and Tirur Railway Station. A branch clinic is also located at Puthanathani. Patients from Tirur can easily visit either center or book a secure online video consultation.',
    },
    {
      q: 'How can I tell if my rectal bleeding is from piles or an anal fissure?',
      a: 'While both can cause bright-red blood, piles are usually relatively painless unless thrombosed or prolapsed. In contrast, an anal fissure produces an intense, sharp, cutting or burning pain during bowel movements that often persists for hours afterwards. A physical examination by a healthcare professional is necessary for an accurate diagnosis.',
    },
    {
      q: 'What is a thrombosed external haemorrhoid and what should be done?',
      a: 'A thrombosed external haemorrhoid occurs when a blood clot develops inside an external vein, forming a firm, tense, bluish-purple perianal lump that causes sudden, intense pain. When evaluated within the first 48 to 72 hours, an in-office minor procedure can excise or evacuate the clot under local anaesthesia for rapid pain relief.',
    },
    {
      q: 'What happens during a clinical piles consultation near Tirur?',
      a: 'The consultation begins with a confidential discussion of your bowel habits, symptom duration, bleeding characteristics, and medical history. The doctor conducts a visual external examination and, if appropriate, a gentle digital rectal examination or anoscopy to confirm the diagnosis and rule out other anorectal conditions.',
    },
    {
      q: 'Are online video consultations available for patients in Tirur?',
      a: 'Yes. Dr. Anjali Chandrasekhar offers confidential online video consultations for patients in Tirur who wish to discuss symptoms, review bowel and dietary management, or seek clinical triage from home. If an in-person physical examination or surgical procedure is needed, an in-clinic visit or specialist referral will be arranged.',
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
                Piles Clinic &amp; Haemorrhoid Care – Tirur Patient Guide
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
              onClick={() => setCurrentView('anorectal-vascular-care')}
              className="hover:text-[#303A88] transition-colors"
            >
              Anorectal &amp; Vascular Care
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1E2559] font-semibold">
              Homeopathy Clinic for Piles Near Tirur
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
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#10B981] via-[#45AC4B] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Piles and Haemorrhoids near Tirur"
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
                    <p className="text-xs font-semibold text-[#10B981] mt-0.5">
                      BHMS | Lead Homeopathic Physician
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      10+ years of clinical practice offering compassionate, dignified anorectal consultations, bowel habit correction, and surgical referral across Tirur taluk and Malappuram district.
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-left">
                      <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                        <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                          Kuttippuram Clinic
                        </p>
                        <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                          Tirur-Kuttippuram Rd
                        </p>
                        <p className="text-[10px] text-[#64748B]">15 min from Tirur town</p>
                      </div>
                      <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
                        <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                          Puthanathani Clinic
                        </p>
                        <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                          Opp. Police Station
                        </p>
                        <p className="text-[10px] text-[#64748B]">Near NH 66</p>
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
                <span>Regional Clinical Anorectal Guide • Tirur &amp; Surrounding Areas</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Homeopathy Clinic for Piles Near Tirur
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Piles, also known as haemorrhoids, are a common health concern that can cause itching, swelling, discomfort, and bleeding during bowel movements. These symptoms can affect everyday activities, work, sleep, and overall quality of life. Although piles are common, many people hesitate to seek medical advice because they feel embarrassed discussing symptoms related to the anal or rectal area. Understanding the condition and available treatment options can help you take appropriate steps towards better health.
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
                    Evidence-Based Care
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Accessibility
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Near Tirur Town
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation Near Tirur</span>
                </button>
                <a
                  href={`tel:${phonePrimary}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {phonePrimary}</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-[#94A3B8] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#86EFAC]" />
                <span>
                  Consultations conducted with utmost privacy, compassionate care, and medical confidentiality.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SECTION JUMP LINKS */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-8 py-3 text-xs font-semibold text-[#64748B] overflow-x-auto">
            <a href="#takeaways" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Key Takeaways
            </a>
            <a href="#what-are-piles" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Piles Types
            </a>
            <a href="#symptoms" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Symptoms
            </a>
            <a href="#causes" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Causes &amp; Triggers
            </a>
            <a href="#evidence" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Homeopathy Facts
            </a>
            <a href="#treatments" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Evidence-Based Care
            </a>
            <a href="#specialist" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Finding a Specialist
            </a>
            <a href="#when-to-see-doctor" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              When to Consult
            </a>
            <a href="#faqs" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              FAQs (12)
            </a>
            <a href="#booking-section" className="text-[#10B981] hover:text-[#059669] transition-colors whitespace-nowrap ml-auto">
              Book Appointment →
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: KEY TAKEAWAYS */}
      <section id="takeaways" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Essential Overview
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Key Takeaways: Piles Care Near Tirur
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Before exploring treatment pathways in Tirur and surrounding Malappuram areas, review these essential clinical facts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10B981] opacity-70 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#10B981] font-bold text-xs flex items-center justify-center border border-[#A7F3D0]">
                      {idx + 1}
                    </span>
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: UNDERSTANDING PILES AND THEIR TYPES */}
      <section id="what-are-piles" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Clinical Classification
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Understanding Piles and Their Types
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              Piles occur when the blood vessels and supporting tissues in the lower rectum or around the anus become enlarged. They are generally classified as internal or external haemorrhoids.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Internal Haemorrhoids */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1E2559] mb-2">
                Internal Haemorrhoids
              </h3>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
                Located Inside the Rectum
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                Internal haemorrhoids develop inside the rectum above the pectinate line. They may cause painless bleeding during bowel movements and can sometimes protrude through the anal opening:
              </p>
              <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade I:</strong> Prominent internal vessels that bleed but do not prolapse</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade II:</strong> Prolapse during bowel movements, retract spontaneously</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade III:</strong> Prolapse during straining, require gentle manual replacement</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade IV:</strong> Irreducibly prolapsed tissues requiring surgical evaluation</span>
                </li>
              </ul>
            </div>

            {/* External Haemorrhoids */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1E2559] mb-2">
                External Haemorrhoids
              </h3>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                Beneath Perianal Skin
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                External haemorrhoids develop under the sensitive skin around the anus. They are covered by somatic nerves and frequently produce noticeable discomfort:
              </p>
              <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Persistent anal itching, skin irritation, and soreness</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Palpable soft perianal lumps or residual cutaneous skin tags</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Discomfort during sitting, riding vehicles, or passing hard stools</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Difficulty maintaining anal hygiene without local irritation</span>
                </li>
              </ul>
            </div>

            {/* Thrombosed External Haemorrhoid */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1E2559] mb-2">
                Thrombosed Piles
              </h3>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-3">
                Acute Clot Formation
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                A blood clot can occasionally develop inside an external haemorrhoid, producing a sudden, exquisitely tender, bluish-purple lump:
              </p>
              <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Sudden onset of severe, throbbing pain peaking within 24–48 hours</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Firm, tense, grape-sized lump at the anal margin</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Prompt medical assessment can determine whether minor evacuation is needed</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Conservative management with sitz baths if presenting after 72 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMON SYMPTOMS OF PILES */}
      <section id="symptoms" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Clinical Signs
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Common Symptoms of Piles
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              The symptoms of piles can differ from one person to another. Some experience mild irritation, while others have recurrent bleeding, swelling, or significant discomfort.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {commonSymptoms.map((symp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:border-[#10B981]/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#EEF2FB] text-[#303A88] font-bold text-xs flex items-center justify-center">
                      {symp.number}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-[#1E2559]">
                      {symp.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ECFDF5] text-[#10B981] border border-[#A7F3D0] self-start sm:self-auto">
                    {symp.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                  {symp.desc}
                </p>
                <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#E2E8F0] flex items-start gap-2 text-xs text-[#64748B]">
                  <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                  <span>
                    <strong>Clinical Note:</strong> {symp.clinicalNote}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT CAUSES PILES? */}
      <section id="causes" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Root Causes &amp; Triggers
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              What Causes Piles? Contributing Factors
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Several lifestyle, physiological, and anatomical factors increase pressure on anorectal veins and weaken supporting connective tissues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndContributors.map((c, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#303A88] inline-block mb-3">
                    {c.tag}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOMEOPATHY CLINIC FOR PILES IN TIRUR: WHAT SHOULD YOU KNOW? */}
      <section id="evidence" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-md max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
                  Evidence-Based Patient Information
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                  Homeopathy Clinic for Piles in Tirur: What Should You Know?
                </h2>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-[#475569] space-y-4 text-xs sm:text-sm leading-relaxed">
              <p>
                People searching for a <strong>Piles Homeopathic Clinic in Tirur</strong> may want to understand whether homeopathy can help relieve symptoms or treat haemorrhoids. Homeopathy is a complementary healthcare system that uses highly diluted preparations, where practitioners take a person’s reported symptoms and overall constitutional health into consideration.
              </p>

              <div className="bg-[#FEF2F2] border-l-4 border-[#EF4444] p-4 rounded-r-xl">
                <p className="text-xs font-semibold text-[#991B1B] mb-1">
                  Transparent Scientific Evidence Disclosure
                </p>
                <p className="text-xs text-[#7F1D1D] leading-relaxed">
                  However, treatment descriptions should not be confused with scientific evidence of effectiveness. <strong>Reliable scientific evidence has not established homeopathy as an effective treatment for haemorrhoids, and it has not been shown to reliably reverse haemorrhoidal swelling or prevent complications.</strong>
                </p>
              </div>

              <p>
                People considering <strong>Piles Homeopathy Treatment in Tirur</strong> should understand these limitations before making treatment decisions:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong>Do not replace medical examination:</strong> Homeopathic remedies should never substitute for a direct physical examination, proctoscopy, or recommended investigations for rectal bleeding.
                </li>
                <li>
                  <strong>Disclose all medicines and remedies:</strong> If you consult a homeopathic practitioner, openly disclose all medicines, laxatives, and supplements you use.
                </li>
                <li>
                  <strong>Do not delay recommended care:</strong> Do not discontinue prescribed medications or postpone recommended procedural interventions without consulting your medical specialist.
                </li>
                <li>
                  <strong>Priority on accurate diagnosis:</strong> The primary objective should always be identifying the exact anatomical cause of symptoms and selecting an approach supported by sound medical evidence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EVIDENCE-BASED PILES TREATMENT IN TIRUR */}
      <section id="treatments" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Therapeutic Modalities
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Evidence-Based Piles Treatment in Tirur
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Treatment depends on symptom severity, haemorrhoid type and grade, and the individual&apos;s overall health. Many mild cases resolve with conservative self-care, while persistent or prolapsing cases require clinical procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceBasedTreatments.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-1 rounded-lg">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#10B981] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINDING A PILES SPECIALIST IN TIRUR */}
      <section id="specialist" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Doctor Selection Criteria
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Finding a Piles Specialist in Tirur: What to Consider
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Choosing an appropriate healthcare professional ensures accurate clinical evaluation, dignity, and timely access to evidence-based medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Professional Qualifications
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Check that the practitioner is appropriately qualified and registered with the state medical council for the services and therapies offered.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                02
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Comprehensive Assessment
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                The clinician should review your symptoms, medical history, bowel habits, dietary fibre intake, and current medicines in detail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Appropriate Examination
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                An anorectal examination is necessary to confirm whether symptoms are caused by haemorrhoids or an anal fissure, fistula, or polyp.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                04
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Clear Explanations
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                The provider should explain the diagnosis, treatment options, procedural risks, and realistic recovery timelines transparently.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                05
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Follow-Up &amp; Referral Support
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Persistent or recurrent symptoms should be promptly referred to colorectal surgeons or gastroenterologists for sigmoidoscopy or colonoscopy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center font-bold text-xs mb-3">
                06
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Transparent Claims (No False Promises)
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Be cautious of promotional claims guaranteeing &ldquo;permanent 100% cure without surgery&rdquo; or discouraging essential diagnostic evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHEN TO SEEK MEDICAL ATTENTION & EMERGENCY WARNINGS */}
      <section id="when-to-see-doctor" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#EF4444] bg-[#FEF2F2] px-3 py-1 rounded-full border border-[#FECACA]">
              Patient Safety
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Recognizing when symptoms can be managed conservatively versus when urgent emergency hospital care is needed protects patient health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Appointment */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0]">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#303A88]" />
                <h3 className="font-editorial text-xl font-bold text-[#1E2559]">
                  Arrange a Medical Appointment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] mb-4 leading-relaxed">
                Schedule a consultation if you experience any of the following:
              </p>
              <ul className="text-xs sm:text-sm text-[#475569] space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Repeated bleeding during or after bowel movements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Persistent itching, swelling, or pain around the anus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>A new, firm, or painful lump near the anal opening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Constipation that continues despite appropriate dietary self-care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Symptoms that do not improve with basic measures within 1–2 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Unexplained changes in bowel habits or unexpected weight loss</span>
                </li>
              </ul>
            </div>

            {/* Emergency Red Flags */}
            <div className="bg-[#FEF2F2] rounded-2xl p-6 sm:p-7 border border-[#FECACA]">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                <h3 className="font-editorial text-xl font-bold text-[#991B1B]">
                  Seek Urgent Emergency Attention
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7F1D1D] mb-4 leading-relaxed">
                Go immediately to the nearest hospital emergency department if you experience:
              </p>
              <ul className="text-xs sm:text-sm text-[#991B1B] space-y-2.5 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Heavy or continuous rectal bleeding filling the toilet bowl</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Dizziness, lightheadedness, pale skin, or fainting episodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Black or tarry stools (melena) suggesting upper gastrointestinal bleeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Sudden, unbearable anal pain that makes sitting impossible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Fever, chills, and purulent anal discharge indicating perianal infection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PREPARING FOR A PILES CONSULTATION IN TIRUR */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Patient Checklist
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Preparing for a Piles Consultation in Tirur
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              A clinical consultation is more productive when you prepare details about your symptoms and medical history in advance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {preparationPoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {pt.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Patient Knowledge Base
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Frequently Asked Questions: Piles Care Near Tirur
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Accurate, evidence-informed answers to common questions about haemorrhoids, treatments, and local clinic visits.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all bg-[#F8FAFD]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-editorial font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#303A88] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]/60 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: RELATED REGIONAL GUIDES */}
      <RegionalRelatedGuides currentGuideKey="piles-clinic-tirur" />

      {/* SECTION 12: APPOINTMENT BOOKING ENGINE */}
      <section id="booking-section" className="py-12 sm:py-16 bg-[#EEF2FB] border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-white px-3 py-1 rounded-full border border-[#D8E1F5]">
              Confidential Medical Consultation
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Schedule Your Piles Consultation Near Tirur
            </h2>
            <p className="text-sm text-[#64748B] mt-2 max-w-xl mx-auto">
              Consult with Dr. Anjali Chandrasekhar (BHMS) for thorough symptom evaluation, dietary fibre guidance, and professional triage at our Kuttippuram clinic (15 mins from Tirur) or via online video consultation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#D8E1F5]">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>
    </div>
  );
};
