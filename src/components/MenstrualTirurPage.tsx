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

export const MenstrualTirurPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for menstrual health and period problems (Tirur patient guide).'
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
    navigateToBookingWithReason('Menstrual Health Consultation - Tirur', 'online');
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
      title: 'Spectrum of Period Concerns',
      desc: 'Menstrual problems include irregular cycles, painful menstruation (dysmenorrhea), heavy bleeding (menorrhagia), missed periods, and premenstrual symptoms.',
    },
    {
      title: 'Evaluate Persistent Changes',
      desc: 'Persistent changes in menstrual patterns, cycle duration, or pain severity should be formally evaluated by a qualified healthcare professional.',
    },
    {
      title: 'Underlying Medical Causes',
      desc: 'Conditions such as PCOS, thyroid disorders, endometriosis, adenomyosis, and uterine fibroids directly affect menstrual health.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homeopathy has not been shown by reliable scientific evidence to effectively treat menstrual disorders or correct underlying hormonal imbalances.',
    },
    {
      title: 'Individualized Treatment Basis',
      desc: 'Treatment must be based on the confirmed underlying cause, symptoms, medical history, age, and individual reproductive healthcare needs.',
    },
    {
      title: 'Cycle & Symptom Tracking',
      desc: 'Tracking menstrual dates, bleeding volume, pain timing, and accompanying symptoms helps clinicians assess patterns and guide care.',
    },
    {
      title: 'Emergency Red Flags',
      desc: 'Severe sudden pelvic pain, fainting, marked weakness, or soaking through two pads per hour may require urgent emergency hospital attention.',
    },
    {
      title: 'Timely Clinical Assessment',
      desc: 'A timely medical assessment identifies the specific cause of menstrual problems early and prevents secondary complications like anaemia.',
    },
  ];

  // 5 Common Menstrual Problems from user document
  const commonProblems = [
    {
      number: '01',
      title: 'Irregular Periods (Oligomenorrhea & Cycle Variability)',
      badge: 'Cycle Rhythm',
      desc: 'Irregular periods occur when menstrual cycles vary considerably in length (under 21 days or over 35 days) or unpredictability. While occasional variations occur with acute stress, travel, or transient illness, persistent irregularity is frequently associated with PCOS, thyroid dysfunction, perimenopause, or hormonal anovulation.',
      clinicalNote:
        'A medical assessment is recommended if periods frequently become unpredictable, stop unexpectedly, or deviate significantly from your baseline pattern.',
    },
    {
      number: '02',
      title: 'Painful Periods (Dysmenorrhea)',
      badge: 'Pelvic & Uterine Pain',
      desc: 'Menstrual cramps cause throbbing or aching pain in the lower abdomen, lower back, or inner thighs. While primary dysmenorrhea relates to uterine prostaglandin release, severe or worsening pain may indicate secondary causes such as endometriosis, adenomyosis, uterine fibroids, or chronic pelvic inflammation.',
      clinicalNote:
        'A Period Pain Consultation near Tirur helps evaluate the timing, intensity, and duration of pain to rule out underlying structural pelvic conditions.',
    },
    {
      number: '03',
      title: 'Heavy Menstrual Bleeding (Menorrhagia)',
      badge: 'Excessive Blood Loss',
      desc: 'Heavy bleeding can interfere with daily life, school, work, and sleep, and frequently leads to iron deficiency anaemia. Hallmarks include bleeding lasting more than 7 days, soaking through sanitary pads or tampons every hour for consecutive hours, passing large blood clots, or experiencing fatigue and breathlessness.',
      clinicalNote:
        'Persistent heavy bleeding requires thorough diagnostic assessment (including pelvic ultrasound and ferritin testing) rather than relying solely on home remedies.',
    },
    {
      number: '04',
      title: 'Missed Periods (Secondary Amenorrhea)',
      badge: 'Absence of Menses',
      desc: 'A missed period can happen due to pregnancy, severe psychological stress, significant rapid weight loss, intensive athletic training, or endocrine disturbances. If pregnancy is excluded, the absence of menstruation for three or more consecutive cycles warrants formal endocrine evaluation.',
      clinicalNote:
        'Clinical management focuses on diagnosing and treating the underlying metabolic or hormonal cause rather than forcing a temporary bleed.',
    },
    {
      number: '05',
      title: 'Premenstrual Symptoms (PMS & PMDD)',
      badge: 'Luteal Phase Changes',
      desc: 'Many women experience physical and emotional symptoms in the 7–10 days prior to menstruation, including abdominal bloating, breast tenderness, cyclical headaches, extreme fatigue, irritability, mood swings, and food cravings.',
      clinicalNote:
        'When emotional or physical premenstrual symptoms severely disrupt personal relationships or work, professional medical support and lifestyle interventions are indicated.',
    },
  ];

  // Common causes
  const causesAndContributors = [
    {
      title: 'Hormonal Fluctuations',
      tag: 'Endocrine Regulation',
      desc: 'Imbalances between estrogen and progesterone disrupt ovulation and endometrial lining shedding, leading to skipped periods or irregular spotting. Common during adolescence and perimenopause.',
    },
    {
      title: 'Polycystic Ovary Syndrome (PCOS)',
      tag: 'Metabolic & Ovarian',
      desc: 'PCOS involves ovarian follicles failing to mature regularly, often producing elevated androgens, irregular cycles, hirsutism, acne, and insulin resistance that requires metabolic and lifestyle management.',
    },
    {
      title: 'Thyroid Disorders (Hypo & Hyperthyroidism)',
      tag: 'Thyroid Axis',
      desc: 'The thyroid gland regulates basal metabolic rate and reproductive hormones. Both hypothyroidism (underactive) and hyperthyroidism (overactive) can cause irregular, heavy, or absent periods.',
    },
    {
      title: 'Endometriosis and Adenomyosis',
      tag: 'Structural & Inflammatory',
      desc: 'Endometriosis occurs when tissue similar to the uterine lining implants outside the uterus; adenomyosis involves lining growth into the muscular wall. Both cause severe, progressive dysmenorrhea.',
    },
    {
      title: 'Uterine Fibroids & Endometrial Polyps',
      tag: 'Benign Growths',
      desc: 'Non-cancerous muscular tumours of the uterus or mucosal polyps can enlarge the endometrial surface area, causing protracted heavy bleeding, pressure, and severe menstrual cramping.',
    },
    {
      title: 'Chronic Stress & Lifestyle Disruptions',
      tag: 'Hypothalamic Impact',
      desc: 'Severe emotional stress, extreme calorie restriction, intense overtraining, and chronic sleep deprivation suppress hypothalamic gonadotropin-releasing hormone (GnRH), halting normal menstruation.',
    },
  ];

  // Evidence-based medical modalities
  const evidenceBasedTreatments = [
    {
      step: '01',
      title: 'Medication for Period Pain',
      badge: 'Analgesic Support',
      desc: 'Non-steroidal anti-inflammatory drugs (NSAIDs) such as mefenamic acid or ibuprofen inhibit uterine prostaglandin production, effectively reducing cramp intensity when started at pain onset.',
      points: [
        'Targets biochemical prostaglandins that trigger uterine contractions',
        'Should be used under clinical or pharmacy guidance to avoid gastric irritation',
        'Not suitable for patients with active gastric ulcers, kidney disease, or bleeding disorders',
      ],
    },
    {
      step: '02',
      title: 'Hormonal Medical Therapies',
      badge: 'Cycle Regulation',
      desc: 'Depending on diagnosis and reproductive goals, hormonal treatments help regulate bleeding, reduce heavy blood loss, and alleviate chronic pelvic pain.',
      points: [
        'Combined oral contraceptive pills (COCs) to regularise cycles and relieve dysmenorrhea',
        'Oral progestins or progestin-only pills for cycle regulation in PCOS',
        'Levonorgestrel intrauterine system (LNG-IUS) to dramatically reduce heavy menstrual bleeding',
      ],
    },
    {
      step: '03',
      title: 'Treatment for Heavy Bleeding & Anaemia',
      badge: 'Hemostasis & Iron',
      desc: 'Targeted medical therapies decrease bleeding volume during heavy cycle days and restore depleted iron stores.',
      points: [
        'Antifibrinolytics (tranexamic acid) taken only during heavy bleeding days to reduce flow by up to 50%',
        'Oral or intravenous iron supplementation to correct iron deficiency anaemia and relieve chronic fatigue',
        'Endometrial biopsy or specialist imaging when abnormal bleeding occurs in women over 40',
      ],
    },
    {
      step: '04',
      title: 'Management of PCOS and Thyroid Conditions',
      badge: 'Endocrine Care',
      desc: 'Addressing systemic endocrine conditions normalizes metabolic function and restores regular ovulatory cycles.',
      points: [
        'Levothyroxine replacement therapy to correct hypothyroidism and normalize cycles',
        'Lifestyle modifications, dietary glycemic management, and insulin-sensitizing agents for PCOS',
        'Periodic metabolic monitoring of lipid profiles and fasting blood glucose',
      ],
    },
    {
      step: '05',
      title: 'Further Assessment for Persistent Pelvic Pain',
      badge: 'Specialist Intervention',
      desc: 'When pain fails to respond to initial analgesics or suggests deep pelvic pathology, advanced gynaecological modalities are indicated.',
      points: [
        'High-resolution transvaginal ultrasound or pelvic MRI to map adenomyosis and endometriomas',
        'Diagnostic laparoscopy by experienced gynaecological surgeons for endometriosis staging',
        'Minimally invasive hysteroscopic removal of bleeding endometrial polyps or submucosal fibroids',
      ],
    },
  ];

  // 9 Consultation preparation points from user document
  const preparationPoints = [
    {
      icon: Calendar,
      title: 'First Day of Last Period',
      detail: 'Note the exact starting date of your most recent menstrual cycle.',
    },
    {
      icon: Clock,
      title: 'Usual Cycle Length',
      detail: 'Count the number of days from the start of one period to the start of the next.',
    },
    {
      icon: Droplets,
      title: 'Bleeding Duration & Flow',
      detail: 'Record how many days bleeding typically lasts and whether flow has become heavier or lighter.',
    },
    {
      icon: Activity,
      title: 'Pain Location & Intensity',
      detail: 'Note whether pain is crampy, sharp, throbbing, radiates to back/legs, and how many days it lasts.',
    },
    {
      icon: AlertCircle,
      title: 'Associated Symptoms',
      detail: 'Track any dizziness, headaches, pelvic pressure, nausea, or mood fluctuations around your period.',
    },
    {
      icon: FileText,
      title: 'Current Medications',
      detail: 'List all prescribed drugs, thyroid pills, pain relievers, vitamins, iron pills, and homeopathic remedies.',
    },
    {
      icon: Heart,
      title: 'Medical & Family History',
      detail: 'Note any family history of fibroids, endometriosis, thyroid problems, early menopause, or bleeding disorders.',
    },
    {
      icon: ShieldCheck,
      title: 'Pregnancy Possibility',
      detail: 'State whether pregnancy is possible, whether you have taken a home test, or if you are planning to conceive.',
    },
    {
      icon: BookOpen,
      title: 'Symptom Diary or App Log',
      detail: 'Bring 2–3 months of cycle tracking from an app or notebook to help your clinician spot patterns.',
    },
  ];

  // Supportive everyday habits
  const supportiveHabits = [
    {
      title: 'Maintain a Balanced Diet',
      desc: 'Consume plenty of fresh vegetables, fruits, whole grains, and protein. Emphasize iron-rich foods (greens, lentils, dates, lean meats) to protect against anaemia from menstrual blood loss.',
    },
    {
      title: 'Stay Physically Active',
      desc: 'Regular moderate aerobic movement, walking, yoga, and gentle stretching enhance pelvic blood flow, trigger endorphin release, and reduce the severity of menstrual cramps.',
    },
    {
      title: 'Prioritise Rest & Sleep',
      desc: 'Maintain a consistent sleep routine of 7–8 hours nightly. Good sleep hygiene balances hypothalamic-pituitary-adrenal (HPA) axis hormones and reduces luteal mood swings.',
    },
    {
      title: 'Active Stress Management',
      desc: 'Deep breathing exercises, meditation, and unhurried daily routines help moderate cortisol levels, which directly interact with reproductive hormones and ovulatory regularity.',
    },
  ];

  // 12 FAQs (7 from document + 5 high-yield clinical questions tailored to Tirur & Malappuram region)
  const faqs = [
    {
      q: 'What does a homeopathic doctor near Tirur for periods problem treat?',
      a: 'The phrase generally refers to homeopathy consultations sought by women experiencing menstrual concerns such as irregular cycles, painful periods, or premenstrual discomfort. However, reliable scientific evidence has not established homeopathy as an effective treatment for menstrual disorders. Women with persistent symptoms should seek appropriate medical assessment from a qualified doctor to identify the cause and discuss evidence-based options.',
    },
    {
      q: 'Is homeopathy effective for irregular periods?',
      a: 'Homeopathy has not been shown by reliable scientific evidence to effectively regulate menstrual cycles or treat the underlying causes of irregular periods. Irregular menstruation may be associated with pregnancy, PCOS, thyroid disorders, stress, or other conditions. Appropriate medical assessment—including pelvic ultrasound and hormonal blood tests—can help determine the exact cause.',
    },
    {
      q: 'Which doctor should I consult for period pain in Tirur?',
      a: 'A qualified gynaecologist or women’s healthcare physician is the primary specialist to evaluate persistent or severe period pain. Dr. Anjali Chandrasekhar (BHMS) offers confidential clinical consultations, menstrual health reviews, and medical triage at her Kuttippuram clinic (just 15 minutes from Tirur along the Tirur-Kuttippuram Road) or online, providing prompt referral to gynaecologists when pelvic imaging or specialized treatment is indicated.',
    },
    {
      q: 'Can homeopathy treat PCOS-related menstrual problems?',
      a: 'There is no reliable scientific evidence that homeopathy treats PCOS or corrects its underlying hormonal and metabolic features. PCOS management should be guided by a qualified healthcare professional and tailored to symptoms, metabolic risks, and reproductive goals, incorporating lifestyle changes, dietary support, and evidence-based medical therapies.',
    },
    {
      q: 'What should I bring to a menstrual health consultation?',
      a: 'Bring details of your menstrual dates, bleeding patterns, pain intensity, associated symptoms, existing medical conditions, and a list of current medicines or supplements. Previous ultrasound reports or blood test results are also very helpful. Accurate information helps your healthcare professional decide whether further investigations are needed.',
    },
    {
      q: 'When should irregular periods be checked?',
      a: 'Arrange a medical assessment if irregular periods persist for more than three cycles, menstruation stops unexpectedly, your cycle length is consistently shorter than 21 days or longer than 35 days, or your usual pattern changes significantly. If pregnancy is possible, take a home pregnancy test first.',
    },
    {
      q: 'How can I choose a women’s health doctor in Tirur?',
      a: 'Look for an appropriately qualified professional with verified state council registration who listens carefully, explains possible causes, recommends investigations when indicated, and discusses treatment options transparently. Avoid providers who promise guaranteed cures or advise you to delay necessary medical care.',
    },
    {
      q: 'How far is Anjali Homoeo Clinic from Tirur for women’s health consultations?',
      a: 'Anjali Homoeo Clinic’s main clinic is located in Kuttippuram on the Tirur-Kuttippuram Road, approximately 15 to 20 minutes from Tirur town and Tirur Railway Station. A branch clinic is also located at Puthanathani. Patients from Tirur can easily visit either clinic or schedule a confidential online video consultation from home.',
    },
    {
      q: 'What investigations are standard for evaluating menstrual irregularities?',
      a: 'Standard diagnostic investigations include a pelvic ultrasound (to inspect the ovaries, endometrial thickness, and uterine structure for fibroids or cysts), hormonal blood tests (FSH, LH, prolactin, estradiol, and androgen panel), thyroid function tests (TSH), and a complete blood count with serum ferritin to assess anaemia.',
    },
    {
      q: 'Can severe period pain be a sign of endometriosis?',
      a: 'Yes. While mild cramping is common, debilitating period pain that causes vomiting, fainting, missed work/school, or pain during intercourse or bowel movements strongly warrants investigation for endometriosis or adenomyosis. These conditions require comprehensive gynaecological evaluation.',
    },
    {
      q: 'How is heavy menstrual bleeding treated in medical practice?',
      a: 'Evidence-based medical management includes antifibrinolytics like tranexamic acid taken on heavy bleeding days to reduce flow, NSAIDs to lessen cramps and bleeding, combined hormonal contraceptives, progestin therapy, or the levonorgestrel intrauterine system (LNG-IUS). Iron therapy is also prescribed to correct anaemia.',
    },
    {
      q: 'Are online video consultations available for patients in Tirur?',
      a: 'Yes. Dr. Anjali Chandrasekhar offers confidential online video consultations for women in Tirur who wish to discuss menstrual symptoms, review cycle tracking logs, or receive guidance on diet and lifestyle support. If pelvic examination, ultrasound, or prescription hormonal therapy is needed, an in-clinic visit or gynaecologist referral is coordinated.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-[#1E2559] font-sans">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-[#1E2559] text-white shadow-md border-b border-white/10 py-2.5 px-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] animate-pulse" />
              <span className="font-semibold text-white">
                Menstrual Health &amp; Periods Care – Tirur Patient Guide
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white font-semibold transition-colors shadow-sm"
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
              onClick={() => setCurrentView('womens-health-care')}
              className="hover:text-[#303A88] transition-colors"
            >
              Women&apos;s Health Care
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1E2559] font-semibold">
              Homeopathic Doctor Near Tirur for Periods Problem
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
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Women's Health and Period Problems near Tirur"
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.src = '/images/dr-anjali-malayali-doctor.jpg';
                        }}
                      />
                    </div>
                    <span className="absolute bottom-1 right-2 bg-[#E11D48] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-white">
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
                    <p className="text-xs font-semibold text-[#E11D48] mt-0.5">
                      BHMS | Lead Homeopathic Physician
                    </p>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      10+ years of dedicated clinical practice offering compassionate, confidential menstrual health assessments, constitutional care, and medical triage across Tirur taluk and Malappuram district.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#FDA4AF]">
                <Layers className="w-3.5 h-3.5 text-[#FDA4AF]" />
                <span>Regional Clinical Women&apos;s Health Guide • Tirur &amp; Surrounding Areas</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Homeopathic Doctor Near Tirur for Periods Problem
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Menstrual health is an important part of a woman&apos;s overall well-being. A regular menstrual cycle, manageable period pain, and predictable bleeding patterns can help women maintain their daily routines and quality of life. However, many women experience menstrual problems that affect their physical comfort, emotional well-being, work, education, and social activities. Irregular periods, painful menstruation, heavy bleeding, missed periods, and premenstrual symptoms are common concerns that may require professional medical attention.
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                <ShieldCheck className="w-4 h-4 text-[#FDA4AF]" />
                <span>
                  Consultations conducted with utmost privacy, compassionate female healthcare support, and medical dignity.
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
            <a href="#common-problems" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Period Problems
            </a>
            <a href="#evidence" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Homeopathy Facts
            </a>
            <a href="#causes" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Causes &amp; Triggers
            </a>
            <a href="#specialist" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Finding a Doctor
            </a>
            <a href="#treatments" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Evidence-Based Care
            </a>
            <a href="#preparation" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              Preparation
            </a>
            <a href="#when-to-see-doctor" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              When to Consult
            </a>
            <a href="#faqs" className="hover:text-[#303A88] transition-colors whitespace-nowrap">
              FAQs (12)
            </a>
            <a href="#booking-section" className="text-[#E11D48] hover:text-[#be123c] transition-colors whitespace-nowrap ml-auto">
              Book Appointment →
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: KEY TAKEAWAYS */}
      <section id="takeaways" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Essential Clinical Facts
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Key Takeaways: Menstrual Health Care Near Tirur
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Before exploring treatment pathways in Tirur and surrounding Malappuram areas, review these fundamental clinical principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E11D48] opacity-70 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-rose-50 text-[#E11D48] font-bold text-xs flex items-center justify-center border border-rose-200">
                      {idx + 1}
                    </span>
                    <CheckCircle className="w-4 h-4 text-[#E11D48]" />
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

      {/* SECTION 2: UNDERSTANDING COMMON MENSTRUAL PROBLEMS */}
      <section id="common-problems" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Symptom Profiles
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Understanding Common Menstrual Problems
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              The menstrual cycle is regulated by hormones that influence the reproductive system. Although cycle length and bleeding patterns vary between individuals, significant changes from your usual baseline may require medical assessment.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:border-[#E11D48]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-rose-50 text-[#E11D48] font-bold text-xs flex items-center justify-center border border-rose-200">
                      {prob.number}
                    </span>
                    <h3 className="font-editorial text-xl font-bold text-[#1E2559]">
                      {prob.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-[#E11D48] border border-rose-200 self-start sm:self-auto">
                    {prob.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                  {prob.desc}
                </p>
                <div className="bg-white rounded-xl p-3 border border-[#E2E8F0] flex items-start gap-2 text-xs text-[#64748B]">
                  <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                  <span>
                    <strong>Clinical Guidance:</strong> {prob.clinicalNote}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOMEOPATHIC TREATMENT FOR MENSTRUAL PROBLEMS IN TIRUR */}
      <section id="evidence" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-md max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0 border border-rose-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
                  Evidence-Informed Healthcare Disclosure
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                  Homeopathic Treatment for Menstrual Problems in Tirur
                </h2>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-[#475569] space-y-4 text-xs sm:text-sm leading-relaxed">
              <p>
                Women researching <strong>Homeopathic Treatment for Menstrual Problems in Tirur</strong> may want to understand how homeopathy consultations are conducted and whether this approach can help with period-related symptoms. Homeopathy is a complementary healthcare system based on individualised consultations that take a person’s reported symptoms and general constitution into consideration.
              </p>

              <div className="bg-[#FEF2F2] border-l-4 border-[#EF4444] p-4 rounded-r-xl">
                <p className="text-xs font-semibold text-[#991B1B] mb-1">
                  Transparent Scientific Evidence Disclosure
                </p>
                <p className="text-xs text-[#7F1D1D] leading-relaxed">
                  However, it is important to distinguish between the way a treatment is described and the scientific evidence supporting its effectiveness. <strong>Reliable scientific evidence has not established homeopathy as an effective treatment for irregular periods, severe menstrual pain, heavy bleeding, PCOS, or other menstrual disorders. Homeopathy has also not been demonstrated to correct underlying hormonal imbalances or reliably address conditions such as endometriosis and uterine fibroids.</strong>
                </p>
              </div>

              <p>
                Women considering a homeopathy consultation near Tirur should understand these limitations before making treatment decisions:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong>Do not replace medical assessment:</strong> Homeopathic remedies should not replace medical evaluation, pelvic examination, hormonal blood panels, or ultrasound imaging recommended by qualified medical doctors.
                </li>
                <li>
                  <strong>Disclose all medicines and remedies:</strong> Openly share your complete health history, thyroid prescriptions, oral contraceptives, iron supplements, and any complementary preparations with every clinician involved in your care.
                </li>
                <li>
                  <strong>Do not discontinue prescribed care:</strong> Never stop prescription hormonal medications, thyroid replacement therapy, or recommended gynaecological procedures without direct medical supervision.
                </li>
                <li>
                  <strong>Priority on accurate diagnosis:</strong> The clinical priority must always remain identifying the exact biological cause of menstrual symptoms and choosing an evidence-supported treatment pathway.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMON CAUSES OF MENSTRUAL DISORDERS */}
      <section id="causes" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Etiology &amp; Contributing Factors
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Common Causes of Menstrual Disorders
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Menstrual problems can arise from several underlying factors. Understanding these possibilities helps explain why professional diagnostic testing is essential.
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

      {/* SECTION 5: FINDING A MENSTRUAL PROBLEMS DOCTOR IN TIRUR */}
      <section id="specialist" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Provider Selection Guide
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Finding a Menstrual Problems Doctor in Tirur
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Choosing the right healthcare professional ensures accurate clinical evaluation, compassionate communication, and timely access to evidence-based care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3 border border-rose-200">
                01
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Professional Qualifications
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Confirm that the clinician has appropriate formal medical degrees and active registration with state medical councils for the services provided.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3 border border-rose-200">
                02
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Comprehensive Assessment
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                The consultation should include a thorough review of menstrual cycle dates, flow volume, cramp severity, medical history, and current medicines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3 border border-rose-200">
                03
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Appropriate Investigations
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Pelvic ultrasound, hormonal panels, and thyroid testing should be recommended in accordance with reported symptoms rather than omitted.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3 border border-rose-200">
                04
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Clear Communication
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Your doctor should clearly explain possible underlying causes, medical treatment options, potential side effects, and follow-up plans.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3 border border-rose-200">
                05
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Continuity of Care &amp; Referral
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Persistent or complex symptoms like deep endometriosis or severe menorrhagia require seamless coordination with gynaecological specialists.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center font-bold text-xs mb-3 border border-red-200">
                06
              </div>
              <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1">
                Transparent Claims (No Cures)
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Be extremely cautious of practitioners promising guaranteed cures or claiming remedies permanently fix complex hormonal conditions like PCOS without evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EVIDENCE-BASED TREATMENT OPTIONS FOR PERIOD PROBLEMS */}
      <section id="treatments" className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Therapeutic Pathways
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Evidence-Based Treatment Options for Period Problems
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Medical treatment depends on the underlying diagnosis, symptom severity, age, and individual reproductive goals.
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
                    <span className="text-[11px] font-semibold text-[#E11D48] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
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
                        <Check className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
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

      {/* SECTION 7: PREPARING FOR A MENSTRUAL DISORDER CONSULTATION IN TIRUR */}
      <section id="preparation" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Patient Checklist
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Preparing for a Menstrual Disorder Consultation in Tirur
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Compiling your menstrual history and symptoms in advance makes your consultation significantly more informative and accurate.
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
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
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

      {/* SECTION 8: SUPPORTIVE EVERYDAY HABITS */}
      <section className="py-12 sm:py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Lifestyle &amp; Self-Care
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Everyday Habits That Support Menstrual Well-Being
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Healthy routines support hormonal balance and help manage discomfort, though they do not replace formal medical care for organic pelvic conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {supportiveHabits.map((h, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559] mb-2">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHEN TO SEEK MEDICAL ATTENTION & EMERGENCY WARNINGS */}
      <section id="when-to-see-doctor" className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#EF4444] bg-[#FEF2F2] px-3 py-1 rounded-full border border-[#FECACA]">
              Clinical Triage
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Recognizing when menstrual changes require routine clinical evaluation versus urgent emergency care protects your long-term health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Appointment */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#303A88]" />
                <h3 className="font-editorial text-xl font-bold text-[#1E2559]">
                  Schedule a Medical Appointment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] mb-4 leading-relaxed">
                Arrange a doctor consultation near Tirur if you experience:
              </p>
              <ul className="text-xs sm:text-sm text-[#475569] space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Periods repeatedly become irregular, unpredictable, or infrequent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>You miss periods for three consecutive months without pregnancy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Period cramps interfere with work, school, sleep, or daily routines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Bleeding duration extends beyond 7 days on a recurring basis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88] mt-1.5 shrink-0" />
                  <span>Severe emotional or physical premenstrual symptoms disrupt life</span>
                </li>
              </ul>
            </div>

            {/* Emergency Red Flags */}
            <div className="bg-[#FEF2F2] rounded-2xl p-6 sm:p-7 border border-[#FECACA] shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
                <h3 className="font-editorial text-xl font-bold text-[#991B1B]">
                  Seek Urgent Emergency Attention
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7F1D1D] mb-4 leading-relaxed">
                Go immediately to the nearest hospital casualty or emergency unit if you experience:
              </p>
              <ul className="text-xs sm:text-sm text-[#991B1B] space-y-2.5 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Very heavy bleeding soaking through two or more pads per hour for 2+ hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Severe dizziness, fainting, marked pallor, or shortness of breath</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Sudden, agonizing, unbearable pelvic or lower abdominal pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Severe pain or heavy vaginal bleeding when pregnancy is possible (ectopic risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Pelvic pain accompanied by high fever or foul-smelling vaginal discharge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                  <span>Any vaginal bleeding occurring after menopause</span>
                </li>
              </ul>
            </div>
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
              Frequently Asked Questions: Periods Care Near Tirur
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Medically grounded answers to common questions about menstrual health, clinical testing, and local consultations.
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
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-editorial font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#E11D48] transition-colors"
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
      <RegionalRelatedGuides currentGuideKey="menstrual-doctor-tirur" />

      {/* SECTION 12: APPOINTMENT BOOKING ENGINE */}
      <section id="booking-section" className="py-12 sm:py-16 bg-[#EEF2FB] border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Confidential Medical Care
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-3">
              Schedule Your Menstrual Health Consultation Near Tirur
            </h2>
            <p className="text-sm text-[#64748B] mt-2 max-w-xl mx-auto">
              Consult with Dr. Anjali Chandrasekhar (BHMS) for thorough symptom evaluation, cycle review, and professional triage at our Kuttippuram clinic (15 mins from Tirur) or via online video consultation.
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
