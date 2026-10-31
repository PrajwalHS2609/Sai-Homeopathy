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

export const PilesMalappuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles / Haemorrhoids (Malappuram clinic guide).'
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
    navigateToBookingWithReason('Piles Consultation - Malappuram', 'online');
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
      desc: 'Piles, or haemorrhoids, are swollen and enlarged blood vessels in and around the anus or lower rectum.',
    },
    {
      title: 'Common Symptom Cluster',
      desc: 'Common symptoms include anal itching, discomfort, localized swelling, and bright-red bleeding during bowel movements.',
    },
    {
      title: 'Key Contributing Factors',
      desc: 'Chronic constipation, heavy straining, prolonged toilet sitting (such as phone use), and a low-fibre diet directly aggravate anorectal veins.',
    },
    {
      title: 'Bleeding Demands Evaluation',
      desc: 'Rectal bleeding should not automatically be assumed to be piles; anal fissures, polyps, or inflammatory bowel conditions produce similar signs.',
    },
    {
      title: 'Evidence Disclosure',
      desc: 'Current reliable scientific evidence does not establish that homeopathy cures haemorrhoids or reverses vascular enlargement.',
    },
    {
      title: 'Dietary & Fluid Support',
      desc: 'Gradually increasing dietary fibre, drinking sufficient fluids, and avoiding toilet straining significantly relieve bowel friction.',
    },
    {
      title: 'Persistent Symptoms Need Care',
      desc: 'Persistent, severe, or recurrent anorectal symptoms require professional medical assessment to confirm accurate diagnosis.',
    },
    {
      title: 'Emergency Red Flags',
      desc: 'Heavy continuous bleeding, black or tarry stools, dizziness, faintness, or sudden excruciating anal pain require urgent medical attention.',
    },
  ];

  // 5 Common Symptoms of Piles
  const commonSymptoms = [
    {
      number: '01',
      title: 'Rectal Bleeding',
      badge: 'Bright Red Blood',
      desc: 'Bright-red blood may appear on toilet paper, in the toilet bowl, or streaking the surface of formed stools. While haemorrhoids are a common cause, rectal bleeding can also stem from anal fissures, inflammatory bowel disease (IBD), colorectal polyps, or other gastrointestinal conditions.',
      clinicalNote:
        'Persistent, unexplained, or dark rectal bleeding should always be evaluated promptly by a qualified physician.',
    },
    {
      number: '02',
      title: 'Pain and Discomfort',
      badge: 'Anal & Perianal Aches',
      desc: 'External haemorrhoids can cause noticeable throbbing or sharp pain, particularly when perianal swelling or a blood clot develops. Sharp, tearing pain during the passage of hard stools may also point towards an acute anal fissure or other anorectal disorder.',
      clinicalNote:
        'Severe, persistent, or worsening anal pain should not be ignored or endured without medical review.',
    },
    {
      number: '03',
      title: 'Itching and Irritation (Pruritus Ani)',
      badge: 'Skin Sensitivity',
      desc: 'Mucus leakage, local inflammation, and moisture around the anal opening can cause intense itching and cutaneous irritation. Overzealous rubbing with dry toilet paper or the use of fragranced wipes can worsen skin breakdown and aggravate discomfort.',
      clinicalNote:
        'Gentle cleansing with plain water, patting dry with a soft towel, and avoiding harsh soaps help restore skin comfort.',
    },
    {
      number: '04',
      title: 'Swelling or a Lump Near the Anus',
      badge: 'Vascular Protrusion',
      desc: 'External haemorrhoids frequently manifest as soft or firm subcutaneous lumps around the anal verge. Internal haemorrhoids may prolapse through the anal canal during defecation and may either reduce spontaneously or require gentle manual repositioning.',
      clinicalNote:
        'A new, rapidly enlarging, discoloured, or exquisitely tender lump should be examined to rule out thrombosed haemorrhoids or perianal abscess.',
    },
    {
      number: '05',
      title: 'Discomfort During Bowel Movements',
      badge: 'Tenesmus & Straining',
      desc: 'Passing hard, bulky stools increases venous pressure and exacerbates inflammation. Many individuals also report a persistent sensation of incomplete evacuation (tenesmus), which encourages further harmful straining.',
      clinicalNote:
        'Softening stools through adequate hydration and soluble fibre reduces pelvic floor resistance and protects delicate tissues.',
    },
  ];

  // What causes piles
  const causesAndContributors = [
    {
      title: 'Chronic Constipation & Hard Stools',
      tag: 'Mechanical Pressure',
      desc: 'Passing infrequent, dry, or hard stools requires vigorous straining, which dramatically increases venous pressures in the haemorrhoidal plexus, weakening connective tissue support.',
    },
    {
      title: 'Low-Fibre Dietary Habits',
      tag: 'Stool Consistency',
      desc: 'Diets lacking adequate dietary fibre from fresh vegetables, legumes, whole grains, and fruits lead to small, hard stools that transit sluggishly through the colon.',
    },
    {
      title: 'Prolonged Sitting on the Toilet',
      tag: 'Postural Pooling',
      desc: 'Spending excess time sitting on toilet seats—especially while browsing mobile phones or reading—causes venous blood to pool in the anorectum due to gravity and lack of pelvic floor support.',
    },
    {
      title: 'Pregnancy and Childbirth',
      tag: 'Pelvic Venous Pressure',
      desc: 'Progesterone relaxes vascular smooth muscle, while the expanding gravid uterus compresses the inferior vena cava and pelvic veins. Vigorous bearing down during vaginal delivery can also trigger haemorrhoids.',
    },
    {
      title: 'Ageing & Connective Tissue Weakening',
      tag: 'Structural Loss',
      desc: 'As people grow older, the fibroelastic connective tissue cushions that anchor haemorrhoidal vessels to the underlying anal sphincter naturally attenuate and lose tensile strength.',
    },
    {
      title: 'Sedentary Lifestyle & Heavy Lifting',
      tag: 'Intra-Abdominal Strain',
      desc: 'Prolonged uninterrupted desk sitting slows colonic peristalsis, while sudden heavy weight lifting without correct exhalation spikes intra-abdominal and anorectal venous tension.',
    },
  ];

  // Evidence-based medical modalities
  const evidenceBasedTreatments = [
    {
      step: '01',
      title: 'Gradually Increase Dietary Fibre',
      badge: 'Foundation of Care',
      desc: 'Dietary fibre increases stool bulk, absorbs moisture, and creates softer, easier-to-pass bowel motions that eliminate straining.',
      points: [
        'Fresh leafy greens, cruciferous vegetables, and seasonal fruits',
        'Whole grains such as brown rice, oats, barley, and whole wheat',
        'Legumes, lentils, and beans introduced gradually to avoid initial bloating',
        'Bulk-forming supplements like isabgol (psyllium husk) with ample water',
      ],
    },
    {
      step: '02',
      title: 'Maintain Sufficient Hydration',
      badge: 'Fluid Balance',
      desc: 'Fibre cannot soften stools without adequate water. Adequate fluids prevent fecal impaction and ease bowel regularity.',
      points: [
        'Consume adequate plain water, clear soups, and buttermilk throughout the day',
        'Limit excessive caffeine and dehydrating carbonated beverages',
        'Patients with renal, cardiac, or hepatic fluid restrictions must follow specialist guidance',
      ],
    },
    {
      step: '03',
      title: 'Avoid Toilet Straining & Habit Correction',
      badge: 'Behavioral Care',
      desc: 'Correcting bathroom posture and toileting habits relieves chronic mechanical pressure across the anal canal.',
      points: [
        'Never delay or suppress the natural urge to pass stools',
        'Limit toilet time strictly to under 3–5 minutes; leave phones outside the restroom',
        'Consider using a low toilet footstool to elevate knees into a squatting angle for easier rectal alignment',
      ],
    },
    {
      step: '04',
      title: 'Warm Water Sitz Baths',
      badge: 'Symptomatic Relief',
      desc: 'Immersing the perineal area in comfortably warm plain water for 10–15 minutes several times daily relaxes the internal anal sphincter, relieves muscle spasms, and soothes irritated skin.',
      points: [
        'Ensure water temperature is comfortably lukewarm, never uncomfortably hot',
        'Avoid adding harsh antiseptics, perfumed salts, or chemical bubble soaps',
        'Gently pat the anal skin dry with a clean cotton towel or dry with cool hairdryer air',
      ],
    },
    {
      step: '05',
      title: 'Appropriate Medical Formulations',
      badge: 'Pharmacological Support',
      desc: 'Under professional medical supervision, temporary topical ointments, local anaesthetics, hydrocortisone creams (short-term only), and osmotic stool softeners reduce swelling and pain.',
      points: [
        'Osmotic laxatives (lactulose, polyethylene glycol) for acute hard stool relief',
        'Topical analgesic ointments to soothe perianal burning during flare-ups',
        'Consult a doctor before prolonged use of over-the-counter medicated creams',
      ],
    },
    {
      step: '06',
      title: 'Medical Procedures & Surgical Options',
      badge: 'Advanced Intervention',
      desc: 'For persistent grade II–IV prolapsing internal haemorrhoids or bleeding unresponsive to conservative care, medical procedures provide definitive relief.',
      points: [
        'Rubber Band Ligation: Small elastic bands placed around internal piles cut off blood supply',
        'Injection Sclerotherapy: Chemical solution injected into the pile tissue to induce fibrotic shrinkage',
        'Infrared Coagulation (IRC): Focused heat coagulates small bleeding internal haemorrhoids',
        'Surgical Haemorrhoidectomy / Stapled Hemorrhoidopexy: For severe, large prolapsing or thrombosed haemorrhoids',
      ],
    },
  ];

  // 7 Consultation preparation points from document
  const preparationPoints = [
    {
      icon: Clock,
      title: 'Symptom Timeline',
      detail: 'Note when your symptoms began and whether they are intermittent or continuous.',
    },
    {
      icon: Droplets,
      title: 'Bleeding Details',
      detail: 'Describe the colour (bright red vs dark maroon), volume, and whether it coats the stool or drips into the pan.',
    },
    {
      icon: Activity,
      title: 'Bowel Habit Log',
      detail: 'Track bowel frequency, stool firmness, straining episodes, and whether you feel incomplete evacuation.',
    },
    {
      icon: Heart,
      title: 'Pain & Swelling Association',
      detail: 'Specify whether pain occurs during, immediately after, or between bowel movements, and whether lumps reduce spontaneously.',
    },
    {
      icon: FileText,
      title: 'Current Medications',
      detail: 'List all prescribed drugs, anticoagulants, aspirin, over-the-counter laxatives, pain medications, or herbal supplements.',
    },
    {
      icon: ShieldCheck,
      title: 'Medical History',
      detail: 'Mention previous anorectal procedures, pregnancy history, chronic illnesses, and any family history of colorectal disease.',
    },
    {
      icon: AlertCircle,
      title: 'Constitutional Changes',
      detail: 'Inform the doctor of any unexplained weight loss, fatigue, loss of appetite, or persistent alterations in bowel frequency.',
    },
  ];

  // FAQs (7 from document + 5 high-yield proctology questions = 12 total)
  const faqs = [
    {
      q: 'What is a homeopathy clinic for piles in Malappuram?',
      a: 'The term generally refers to a homeopathy clinic offering consultations to people experiencing symptoms they associate with piles (haemorrhoids). However, homeopathy has not been established by reliable scientific evidence as an effective treatment for haemorrhoids. People experiencing persistent bleeding, pain, or lumps should seek appropriate medical assessment from qualified clinicians to confirm an accurate diagnosis.',
    },
    {
      q: 'Can piles be treated without surgery?',
      a: 'Yes. Many mild to moderate cases improve significantly with dietary fibre, adequate fluid intake, avoiding toilet straining, and appropriate symptom management such as warm sitz baths and short-term topical treatments. If symptoms persist or haemorrhoids become severe or prolapsed (grades III–IV), medical procedures such as rubber band ligation, sclerotherapy, or surgery may be recommended.',
    },
    {
      q: 'Is homeopathy effective for piles?',
      a: 'Reliable scientific evidence has not established homeopathy as an effective treatment for haemorrhoids. It should not replace physical medical examination, evidence-based pharmacological treatments, or surgical interventions when rectal bleeding, severe pain, or prolapse is present.',
    },
    {
      q: 'Which doctor should I consult for piles in Malappuram?',
      a: 'A qualified general physician, general surgeon, or colorectal specialist (proctologist) is the appropriate professional to assess suspected haemorrhoids. If you consult a homeopathic physician like Dr. Anjali Chandrasekhar (BHMS) for constitutional supportive care, clinical evaluation and triage are provided, with prompt referral to surgeons for proctoscopy or advanced intervention when indicated.',
    },
    {
      q: 'What foods may help manage piles?',
      a: 'Fibre-rich foods such as vegetables, whole grains (brown rice, oats), legumes, lentils, and fruits (pears, apples with skin, figs, papaya) help soften stools and reduce straining. Dietary fibre should be increased gradually alongside sufficient fluid intake to prevent gas and bloating.',
    },
    {
      q: 'When should I seek urgent care for piles symptoms?',
      a: 'Seek urgent hospital care if you experience heavy or continuous rectal bleeding, dizziness, lightheadedness, fainting, severe unbearable anal pain, black or tarry stools, or fever accompanied by worsening anal swelling and discharge.',
    },
    {
      q: 'How can I prevent piles from getting worse?',
      a: 'Helpful preventive habits include eating 25–35 grams of dietary fibre daily, drinking adequate fluids throughout the day, never straining on the toilet, limiting toilet sitting to less than 3–5 minutes, staying physically active, and responding promptly to the urge to defecate.',
    },
    {
      q: 'What is the difference between piles (haemorrhoids) and an anal fissure?',
      a: 'Piles are swollen, dilated venous cushions in the lower rectum and anal verge that typically cause painless bright-red bleeding or swelling. An anal fissure is a small superficial tear or crack in the anal mucosa that causes intense, sharp, burning or cutting pain during bowel movements, often persisting for hours after passing stool.',
    },
    {
      q: 'Can rectal bleeding be a sign of something more serious than piles?',
      a: 'Yes. While haemorrhoids are a common cause of bright-red bleeding, rectal bleeding can also indicate anal fissures, colorectal polyps, inflammatory bowel disease (Crohn’s disease or ulcerative colitis), diverticular disease, or colorectal cancer. Any new, unexplained, recurrent, or changing rectal bleeding requires medical evaluation rather than self-diagnosis.',
    },
    {
      q: 'What is a thrombosed external haemorrhoid and how is it managed?',
      a: 'A thrombosed external haemorrhoid occurs when a small blood clot forms inside an external haemorrhoidal vein, creating a firm, tense, bluish-purple lump at the anal verge accompanied by sudden, severe pain. Within the first 48 to 72 hours, a simple in-office minor procedure can evacuate the clot under local anaesthesia to provide rapid relief.',
    },
    {
      q: 'What does a clinical piles consultation in Malappuram involve?',
      a: 'A clinical evaluation begins with a detailed confidential history of bowel habits, bleeding, and pain patterns. The clinician then conducts a gentle physical visual inspection and, if indicated, a digital rectal examination or anoscopy/proctoscopy to grade haemorrhoids and exclude other anorectal pathology.',
    },
    {
      q: 'Does Dr. Anjali Chandrasekhar provide both in-clinic and online piles consultations?',
      a: 'Yes. Dr. Anjali Chandrasekhar offers confidential in-clinic consultations at Kuttippuram and Puthanathani clinics as well as online video consultations. Online consultations are suitable for initial symptom review, dietary planning, and medical triage. If physical examination, proctoscopy, or procedural intervention is warranted, in-person assessment or surgeon referral is coordinated.',
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
                Piles Clinic &amp; Haemorrhoid Care – Malappuram Patient Guide
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
              Homeopathy Clinic for Piles in Malappuram
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
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Piles and Anorectal Conditions in Malappuram"
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
                      10+ years of dedicated clinical experience providing compassionate, confidential anorectal health assessments, bowel regulation strategies, and surgical triage across Malappuram district.
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
                <span>Regional Clinical Anorectal Guide • Malappuram Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Homeopathy Clinic for Piles in Malappuram
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Piles, also known as haemorrhoids, are a common health concern that can cause discomfort, itching, swelling, and bleeding during bowel movements. These symptoms can affect everyday activities, sleep, work, and overall quality of life. Although many people experience piles at some point, they may feel uncomfortable discussing the condition or seeking medical advice. Understanding the symptoms and available treatment options can help you take the right steps towards better digestive health.
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
                    Care Format
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    In-Clinic &amp; Online
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation in Malappuram</span>
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
                  Consultations conducted in complete medical confidentiality &amp; professional dignity.
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
              What Are Piles?
            </a>
            <a href="#symptoms" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Symptoms
            </a>
            <a href="#causes" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Causes &amp; Triggers
            </a>
            <a href="#evidence" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Homeopathy Options
            </a>
            <a href="#treatments" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Evidence-Based Care
            </a>
            <a href="#specialist" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Choosing a Specialist
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
              Key Takeaways: Piles &amp; Anorectal Care
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Before exploring treatment pathways in Malappuram, understanding these fundamental clinical principles ensures safe, informed healthcare decisions.
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

      {/* SECTION 2: WHAT ARE PILES? (INTERNAL VS EXTERNAL VS THROMBOSED) */}
      <section id="what-are-piles" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Anatomy &amp; Classification
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              What Are Piles? Understanding Types &amp; Grading
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              Piles are swollen, enlarged blood vessels in the lower rectum and anal canal. Depending on whether they originate above or below the dentate line, they behave and present differently.
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
                Above Dentate Line (Visceral Nerves)
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                Internal haemorrhoids develop inside the rectum. Because this area lacks somatic pain receptors, they often cause painless bright-red bleeding during bowel movements. In more advanced stages, they may prolapse through the anal sphincter:
              </p>
              <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade I:</strong> Bleed without prolapsing past anal margin</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade II:</strong> Prolapse during straining, reduce spontaneously</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade III:</strong> Prolapse during defecation, require manual reduction</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span><strong>Grade IV:</strong> Permanently prolapsed; cannot be manually reduced</span>
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
                Below Dentate Line (Somatic Nerves)
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                External haemorrhoids develop beneath the sensitive anoderm skin surrounding the anus. Because this tissue is rich in pain fibers, external piles are more likely to cause noticeable discomfort:
              </p>
              <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Perianal itching and stinging caused by moisture retention</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Palpable soft lumps or swollen skin tags around the anal verge</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Difficulty maintaining hygienic cleanliness after bowel movements</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Discomfort during prolonged sitting or rigorous physical activity</span>
                </li>
              </ul>
            </div>

            {/* Thrombosed External Haemorrhoid */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1E2559] mb-2">
                Thrombosed Haemorrhoids
              </h3>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-3">
                Acute Clot Formation
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                A blood clot can suddenly form inside an external haemorrhoid, creating a firm, tense, intensely painful bluish lump. This acute event requires prompt medical evaluation:
              </p>
              <ul className="text-xs text-[#475569] space-y-2 border-t border-[#E2E8F0] pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Sudden onset of severe, throbbing perianal pain within hours</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Dark, firm, grape-like lump that is exquisitely tender to touch</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Pain peaks during the first 48 hours; may ulcerate and bleed dark clot</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#EF4444] font-bold">•</span>
                  <span>Minor in-clinic surgical evacuation or conservative sitz care depending on timing</span>
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
              Clinical Presentation
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              5 Common Symptoms of Piles
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Symptoms vary depending on whether piles are internal or external, their clinical grade, and whether acute thrombosis is present.
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
              Etiology &amp; Risk Factors
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              What Causes Piles? Primary Contributors
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Piles develop when persistent pressure on the blood vessels and connective tissues around the anal verge and lower rectum leads to vascular dilation and weakening of supportive mucosal anchors.
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

      {/* SECTION 5: HOMEOPATHY CLINIC FOR PILES IN MALAPPURAM: UNDERSTANDING YOUR OPTIONS */}
      <section id="evidence" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-md max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
                  Evidence-Informed Healthcare Disclosure
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                  Homeopathy Clinic for Piles in Malappuram: Understanding Your Options
                </h2>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-[#475569] space-y-4 text-xs sm:text-sm leading-relaxed">
              <p>
                People researching a <strong>Piles Homeopathic Clinic in Malappuram</strong> may want to understand whether homeopathy can help manage their symptoms. Homeopathy is a complementary healthcare system based on the principle of individualised symptom evaluation, where practitioners assess physical complaints, general constitution, and lifestyle factors.
              </p>

              <div className="bg-[#FEF2F2] border-l-4 border-[#EF4444] p-4 rounded-r-xl">
                <p className="text-xs font-semibold text-[#991B1B] mb-1">
                  Important Scientific Evidence Disclosure
                </p>
                <p className="text-xs text-[#7F1D1D] leading-relaxed">
                  However, the way a treatment is described does not establish that it works. <strong>Reliable scientific evidence has not demonstrated that homeopathy effectively treats haemorrhoids, reverses the anatomical swelling of haemorrhoidal tissues, or prevents clinical complications.</strong>
                </p>
              </div>

              <p>
                People considering <strong>Piles Homeopathy Treatment in Malappuram</strong> should understand these limitations before making healthcare decisions:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong>Do not replace medical examination:</strong> Rectal bleeding, persistent anal pain, or palpable lumps must never be treated purely symptomatically without a physical examination to rule out fissures, polyps, or malignancy.
                </li>
                <li>
                  <strong>Do not discontinue prescribed medications:</strong> Never stop prescription stool softeners, cardiovascular medications, or scheduled procedural interventions without direct guidance from your treating specialist.
                </li>
                <li>
                  <strong>Disclose all remedies:</strong> Always inform your medical doctors, surgeons, and gastroenterologists about any homeopathic or herbal preparations you are taking to prevent adverse interactions.
                </li>
                <li>
                  <strong>Focus on verified root causes:</strong> The clinical priority must always remain identifying the precise anatomical cause of symptoms and selecting an approach supported by robust medical evidence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EVIDENCE-BASED PILES TREATMENT IN MALAPPURAM */}
      <section id="treatments" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Clinical Modalities
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Evidence-Based Piles Treatment in Malappuram
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Treatment for haemorrhoids depends on symptom severity, clinical grade, and whether complications exist. Many mild cases resolve with conservative self-care, while persistent or severe cases benefit from in-clinic procedures.
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

      {/* SECTION 7: FINDING A PILES SPECIALIST IN MALAPPURAM */}
      <section id="specialist" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Provider Selection Guide
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Finding a Piles Specialist in Malappuram: What to Consider
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Choosing a suitable healthcare professional ensures accurate clinical evaluation, dignity, and access to evidence-based medical interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Verified Medical Qualifications
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Confirm that the clinician has formal medical or surgical degrees (such as MBBS, MS General Surgery, DNB, or BHMS for complementary triage) with active state medical council registration.
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
                Choose a provider who reviews your symptoms, medical history, bowel habits, dietary fibre intake, and current medicines thoroughly rather than dispensing generic remedies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Appropriate Physical Examination
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Visual and digital rectal examination or proctoscopy is necessary to differentiate haemorrhoids from anal fissures, fistulas, perianal abscesses, or polyps.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                04
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Clear Treatment Explanations
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Your doctor should transparently explain conservative care, in-office procedures (banding/sclerotherapy), surgical options, and realistic recovery timelines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                05
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Structured Follow-Up &amp; Referral
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Persistent or recurrent symptoms require prompt escalation to gastroenterologists for colonoscopy when bleeding is atypical or non-responsive.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center font-bold text-xs mb-3">
                06
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Transparent Claims (No False Cures)
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Be extremely cautious of clinics promising &ldquo;permanent 100% cures without surgery&rdquo; or advising you to avoid essential hospital investigations for rectal bleeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHEN TO SEE A DOCTOR & EMERGENCY RED FLAGS */}
      <section id="when-to-see-doctor" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#EF4444] bg-[#FEF2F2] px-3 py-1 rounded-full border border-[#FECACA]">
              Safety First
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              When Should You Consult a Piles Doctor in Malappuram?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Recognizing the boundary between manageable mild discomfort and red-flag symptoms protects long-term health and prevents critical medical delays.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Medical Appointment */}
            <div className="bg-[#F8FAFD] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0]">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#303A88]" />
                <h3 className="font-editorial text-xl font-bold text-[#1E2559]">
                  Schedule a Clinical Appointment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] mb-4 leading-relaxed">
                Arrange a doctor consultation in Malappuram if you experience any of the following:
              </p>
              <ul className="text-xs sm:text-sm text-[#475569] space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Repeated bleeding during or immediately after bowel movements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Persistent anal itching, burning, soreness, or swelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>A perianal lump that is new, enlarging, or difficult to push back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Chronic constipation continuing despite high-fibre diet and fluid intake</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Unexplained changes in bowel frequency or stool calibre in individuals over 40</span>
                </li>
              </ul>
            </div>

            {/* Emergency Red Flags */}
            <div className="bg-[#FEF2F2] rounded-2xl p-6 sm:p-7 border border-[#FECACA]">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                <h3 className="font-editorial text-xl font-bold text-[#991B1B]">
                  Urgent Emergency Care Needed
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7F1D1D] mb-4 leading-relaxed">
                Go immediately to the nearest hospital casualty or emergency department if you notice:
              </p>
              <ul className="text-xs sm:text-sm text-[#991B1B] space-y-2.5 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Heavy, brisk, or continuous rectal bleeding filling the toilet bowl</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Dizziness, lightheadedness, pale skin, weakness, or fainting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Black, sticky, tarry stools (melena) indicating upper gastrointestinal hemorrhage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Sudden, agonizing, unbearable anal pain that prevents sitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>High fever, chills, and purulent discharge suggesting a perianal abscess</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PREPARING FOR A PILES CONSULTATION IN MALAPPURAM */}
      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
              Patient Checklist
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Preparing for a Piles Consultation in Malappuram
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              A clinical consultation is more accurate and productive when you compile pertinent symptom and health history details in advance.
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
              Frequently Asked Questions: Piles &amp; Anorectal Care
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Straightforward, medically verified answers to common questions asked by patients in Malappuram.
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
      <RegionalRelatedGuides currentGuideKey="piles-clinic-malappuram" />

      {/* SECTION 12: APPOINTMENT BOOKING ENGINE */}
      <section id="booking-section" className="py-12 sm:py-16 bg-[#EEF2FB] border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-white px-3 py-1 rounded-full border border-[#D8E1F5]">
              Confidential Medical Consultation
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Schedule Your Piles Consultation in Malappuram
            </h2>
            <p className="text-sm text-[#64748B] mt-2 max-w-xl mx-auto">
              Consult with Dr. Anjali Chandrasekhar (BHMS) for thorough symptom evaluation, dietary fibre guidance, and professional triage at our Kuttippuram or Puthanathani clinics, or via online video consultation.
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
