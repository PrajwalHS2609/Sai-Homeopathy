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
  FileText,
} from 'lucide-react';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const MenstrualMalappuramPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Menstrual Health & Cycle Problems (Malappuram patient guide).'
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
    navigateToBookingWithReason('Menstrual Health Consultation (Malappuram)', 'clinic');
  };

  const handleBookOnline = () => {
    navigateToBookingWithReason('Menstrual Health Online Consultation (Malappuram)', 'online');
  };

  const keyTakeaways = [
    {
      title: 'Spectrum of Menstrual Concerns',
      desc: 'Menstrual problems include irregular periods, painful menstruation (dysmenorrhea), unusually heavy bleeding (menorrhagia), missed periods (amenorrhea), and severe premenstrual symptoms.',
    },
    {
      title: 'Prompt Clinical Evaluation',
      desc: 'Persistent, severe, or worsening menstrual symptoms should be thoroughly evaluated by a qualified healthcare professional rather than dismissed as routine.',
    },
    {
      title: 'Common Underlying Conditions',
      desc: 'Conditions such as polycystic ovary syndrome (PCOS), thyroid disorders, endometriosis, adenomyosis, uterine fibroids, and hormonal imbalances frequently affect menstrual health.',
    },
    {
      title: 'Scientific Evidence Transparency',
      desc: 'Homeopathy has not been shown by reliable scientific evidence to effectively treat menstrual disorders or correct underlying hormonal pathologies. Do not use it to replace evidence-based care.',
    },
    {
      title: 'Individualized Evidence-Based Options',
      desc: 'Evidence-based treatment depends on the precise medical diagnosis, symptom severity, patient age, medical history, and reproductive/fertility goals.',
    },
    {
      title: 'Diagnostic Menstrual Tracking',
      desc: 'Keeping a detailed menstrual diary or tracking cycle app records helps clinicians understand changes in cycle length, flow volume, and pain patterns.',
    },
    {
      title: 'Urgent Red Flag Symptoms',
      desc: 'Sudden severe pelvic pain, fainting, dizziness, marked breathlessness, or very heavy bleeding (soaking a pad an hour) require urgent emergency medical care.',
    },
  ];

  const commonMenstrualConcerns = [
    {
      number: '01',
      title: 'Irregular Periods (Oligomenorrhea)',
      badge: 'Cycle Variability',
      desc: 'Irregular periods occur when menstrual cycles vary considerably in length or bleeding patterns. While occasional changes happen due to acute stress, illness, rapid weight changes, or intense exercise, persistent irregularity often points toward hormonal disturbances, PCOS, thyroid disorders, or anovulatory cycles.',
      care: 'A medical assessment is essential if cycles consistently fall below 21 days or exceed 35 days, stop unexpectedly, or fluctuate unpredictably.',
    },
    {
      number: '02',
      title: 'Painful Periods (Dysmenorrhea)',
      badge: 'Pelvic & Cramping Pain',
      desc: 'Menstrual cramps cause throbbing or aching pain in the lower abdomen, radiating to the lower back and inner thighs. While mild prostaglandin-mediated cramping is common, severe pain that prevents attending work, school, or routine tasks may indicate secondary dysmenorrhea caused by endometriosis, adenomyosis, or fibroids.',
      care: 'A Period Pain Consultation in Malappuram allows clinicians to evaluate the onset, intensity, duration, and associated nausea or bowel symptoms.',
    },
    {
      number: '03',
      title: 'Heavy Menstrual Bleeding (Menorrhagia)',
      badge: 'Volume & Anemia Risk',
      desc: 'Heavy bleeding can disrupt daily routines and lead to chronic iron-deficiency anemia. Signs include soaking through one or more tampons or pads every hour for consecutive hours, needing double protection, passing blood clots larger than a coin, or experiencing severe fatigue and shortness of breath.',
      care: 'Causes range from uterine fibroids, polyps, and adenomyosis to hormonal anovulation and coagulopathies. Medical assessment and serum ferritin checks are vital.',
    },
    {
      number: '04',
      title: 'Missed Periods (Amenorrhea)',
      badge: 'Ovulatory Disruption',
      desc: 'A missed period can occur for several reasons, including pregnancy, acute emotional stress, rapid weight loss, nutritional depletion, hyperprolactinemia, or premature ovarian insufficiency. If pregnancy is possible, a urine pregnancy test is the first mandatory step.',
      care: 'The clinical approach must identify the underlying endocrine cause rather than arbitrarily administering unprescribed remedies to force bleeding.',
    },
    {
      number: '05',
      title: 'Severe Premenstrual Symptoms (PMS & PMDD)',
      badge: 'Luteal Phase Distress',
      desc: 'Physical or emotional symptoms emerging during the late luteal phase (7–10 days before bleeding) and resolving shortly after onset. Symptoms include marked abdominal bloating, mastalgia, migraines, severe mood swings, depressive thoughts, and anxiety.',
      care: 'Differentiating mild physiological PMS from Premenstrual Dysphoric Disorder (PMDD) ensures appropriate supportive and medical management.',
    },
  ];

  const commonCauses = [
    {
      title: 'Hormonal Fluctuations',
      desc: 'Hormones (estrogen, progesterone, LH, FSH) orchestrate ovulation and endometrial shedding. Disruptions commonly occur in adolescence, perimenopause, or secondary to metabolic shifts.',
      action: 'Baseline endocrine evaluation (FSH, LH, estradiol, prolactin).',
    },
    {
      title: 'Polycystic Ovary Syndrome (PCOS)',
      desc: 'PCOS involves irregular periods, hyperandrogenism (facial hair, acne), metabolic insulin resistance, and anovulation with multiple small ovarian follicles.',
      action: 'Pelvic ultrasonography, fasting insulin, HbA1c, and lipid panels.',
    },
    {
      title: 'Thyroid Imbalances',
      desc: 'Both hypothyroidism (sluggish thyroid causing heavy, frequent periods) and hyperthyroidism (causing scanty, missed periods) profoundly impact menstrual cycles.',
      action: 'Comprehensive thyroid panel including TSH and free T4.',
    },
    {
      title: 'Endometriosis & Adenomyosis',
      desc: 'Endometriosis occurs when endometrial-like tissue implants outside the uterus; adenomyosis involves tissue invading the uterine muscle wall, causing severe cramps and chronic pelvic pain.',
      action: 'High-resolution pelvic ultrasound or MRI with gynecologist evaluation.',
    },
    {
      title: 'Uterine Fibroids (Leiomyomas)',
      desc: 'Non-cancerous muscular tumors within the uterine wall. Depending on submucosal or intramural location, they cause profuse menorrhagia, pressure, and pelvic pain.',
      action: 'Pelvic imaging and complete blood count to rule out anemia.',
    },
    {
      title: 'Stress, Sleep & Weight Changes',
      desc: 'Elevated cortisol from chronic stress, insufficient sleep, rapid weight changes, or eating disorders suppresses the hypothalamic-pituitary-ovarian axis.',
      action: 'Holistic lifestyle review alongside clinical exclusions.',
    },
  ];

  const evidenceBasedOptions = [
    {
      step: '01',
      title: 'Anti-Inflammatory Pain Relief',
      subtitle: 'Targeting Prostaglandin Synthesis',
      desc: 'Non-steroidal anti-inflammatory drugs (NSAIDs) reduce excessive endometrial prostaglandin production, relieving severe uterine cramping and reducing heavy flow when taken at onset.',
    },
    {
      step: '02',
      title: 'Prescription Hormonal Regulators',
      subtitle: 'Cycle Regularity & Symptom Control',
      desc: 'Depending on diagnosis and fertility plans, combined oral contraceptives, cyclical progestins, or a levonorgestrel-releasing intrauterine system (LNG-IUS) regulate cycles and reduce endometriosis pain.',
    },
    {
      step: '03',
      title: 'Treatments for Menorrhagia & Anemia',
      subtitle: 'Antifibrinolytics & Iron Therapy',
      desc: 'Tranexamic acid safely reduces heavy menstrual blood loss by up to 50% during bleeding days. Oral or intravenous iron restores depleted ferritin stores and resolves chronic fatigue.',
    },
    {
      step: '04',
      title: 'Specialist PCOS & Thyroid Management',
      subtitle: 'Endocrine & Metabolic Balancing',
      desc: 'PCOS protocols target cycle regularity and insulin sensitivity (metformin, inositol, lifestyle therapy). Thyroid hormone replacement (levothyroxine) corrects thyroid-induced bleeding disorders.',
    },
    {
      step: '05',
      title: 'Minimally Invasive Procedures',
      subtitle: 'Surgical Care for Fibroids & Endometriosis',
      desc: 'When fibroids or deep infiltrating endometriosis fail to respond to medications, gynecological specialists may consider hysteroscopic resection, laparoscopy, or uterine artery embolization.',
    },
  ];

  const consultationChecklist = [
    'The exact first day of your last normal menstrual period (LMP)',
    'Your usual cycle length (counting from Day 1 of one period to Day 1 of the next)',
    'How many days your bleeding typically lasts and whether it is getting longer',
    'Whether you pass blood clots larger than a 1-rupee coin or need double pads',
    'The exact location, severity, and timing of menstrual pain (pre-period vs during)',
    'Accompanying symptoms: dizziness, fainting, severe fatigue, migraines, or pelvic pressure',
    'Complete list of current prescription medications, herbal tonics, and supplements',
    'Whether pregnancy is possible, or if you are actively attempting to conceive',
  ];

  const supportiveHabits = [
    {
      title: 'Maintain a Nutrient-Rich Diet',
      desc: 'Eat iron-rich foods (spinach, lentils, dates, lean meats), leafy greens, whole grains, and omega-3 fatty acids to help replenish blood loss and reduce systemic inflammation.',
    },
    {
      title: 'Stay Regularly Active',
      desc: 'Gentle aerobic exercise, yoga, stretching, and brisk walking release natural endorphins that relieve pelvic congestion and moderate prostaglandin-driven cramps.',
    },
    {
      title: 'Prioritize Restorative Sleep',
      desc: 'Aim for 7–8 hours of consistent nightly sleep. Adequate rest stabilizes melatonin and cortisol rhythms that influence the hypothalamic-pituitary-ovarian axis.',
    },
    {
      title: 'Practice Stress Mitigation',
      desc: 'Deep breathing exercises, meditation, and delegating strenuous tasks during the luteal phase lower sympathetic nervous system tension and period discomfort.',
    },
    {
      title: 'Track Cycles Diligently',
      desc: 'Log dates, flow volume, and pain scores in a menstrual diary or mobile app. This objective record helps clinicians diagnose subtle cycle changes accurately.',
    },
  ];

  const redFlags = [
    {
      sign: 'Very Heavy Bleeding (Soaking a Pad/Hour)',
      urgency: 'URGENT: Emergency Care',
      reason: 'Risk of acute hypovolemia, severe anemia, or acute uterine hemorrhage.',
    },
    {
      sign: 'Bleeding with Fainting, Dizziness or Pallor',
      urgency: 'URGENT: Emergency Medical Attention',
      reason: 'Sign of hemodynamic instability from rapid blood loss requiring immediate medical stabilization.',
    },
    {
      sign: 'Sudden, Agonizing Pelvic or Abdominal Pain',
      urgency: 'URGENT: Hospital Evaluation',
      reason: 'May indicate ruptured ovarian cyst, ectopic pregnancy, or ovarian torsion.',
    },
    {
      sign: 'Severe Pain or Bleeding in Possible Pregnancy',
      urgency: 'EMERGENCY: Immediate Medical Care',
      reason: 'Requires urgent ultrasound to exclude life-threatening ectopic pregnancy or miscarriage.',
    },
    {
      sign: 'Pelvic Pain Accompanied by High Fever',
      urgency: 'Prompt Hospital Care',
      reason: 'Classic signs of acute pelvic inflammatory disease (PID) or tubo-ovarian abscess.',
    },
    {
      sign: 'Any Vaginal Bleeding After Menopause',
      urgency: 'Prompt Gynecological Assessment',
      reason: 'Postmenopausal bleeding is abnormal and requires urgent endometrial evaluation to exclude malignancy.',
    },
  ];

  const clinicSelectionCriteria = [
    {
      title: 'Recognized Medical Qualifications',
      desc: 'Verify that the physician possesses recognized degrees (BHMS or MBBS/MD Gynecology) and valid registration with medical councils (e.g., KA-HOM-15563 or Travancore-Cochin Councils).',
    },
    {
      title: 'Comprehensive Gynecological Triage',
      desc: 'A reputable clinic reviews your full menstrual timeline, past pregnancies, contraceptive history, and previous ultrasound scans before recommending care.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Expect honest explanations of suspected causes, realistic expectations, treatment limitations, and clear indications for specialist referral.',
    },
    {
      title: 'Zero Guaranteed "Permanent Cure" Claims',
      desc: 'Ethical practitioners never promise 100% permanent hormonal cures or guarantee pregnancy/ovulation without diagnostic workups.',
    },
    {
      title: 'Active Referral to Gynecologists',
      desc: 'A responsible clinic immediately connects patients with board-certified gynecologists whenever imaging reveals fibroids, cysts, or severe bleeding.',
    },
    {
      title: 'Clear, Transparent Costs',
      desc: 'All consultation fees, routine blood panels, and medicines must be clearly explained upfront without high-cost recurring packages.',
    },
  ];

  const questionsToAsk = [
    'What are the clinician’s specific qualifications, board registrations, and experience in women’s health?',
    'Will my consultation include a thorough review of my cycle history, previous scans, and current medicines?',
    'Will I be promptly referred for an ultrasound or gynecological evaluation if my symptoms warrant it?',
    'Is there scientific medical evidence supporting the recommended approach for my specific condition?',
    'Are there any potential interactions between recommended remedies and my current prescription drugs?',
    'Will the clinic encourage appropriate blood investigations (TSH, CBC, ferritin, hormonal profile)?',
    'What is the clear protocol if my period pain worsens or if bleeding becomes excessively heavy?',
  ];

  const faqs = [
    {
      q: 'What is Menstrual Homeopathic Treatment in Malappuram?',
      a: 'The term refers to complementary homeopathic consultations sought by women experiencing cycle irregularities, cramps, or PMS. However, reliable scientific evidence has not established homeopathy as an effective treatment for menstrual disorders. Women with persistent period concerns should receive an accurate medical assessment by a qualified doctor to identify underlying conditions and explore evidence-based options.',
    },
    {
      q: 'Is homeopathy effective for irregular periods?',
      a: 'No. Reliable scientific evidence does not show that homeopathy effectively regulates menstrual cycles or addresses the biological causes of irregular menstruation. Irregular periods may be caused by PCOS, thyroid dysfunction, hyperprolactinemia, or stress. An accurate medical assessment is essential to determine the root cause.',
    },
    {
      q: 'Which doctor should I consult for period pain in Malappuram?',
      a: 'A gynecologist or a qualified medical professional with women’s health experience is the most appropriate specialist to assess persistent or severe period pain. The clinician can examine pelvic organs, arrange an ultrasound to rule out endometriosis or fibroids, and prescribe targeted pain-relieving treatments.',
    },
    {
      q: 'Can homeopathy treat PCOS-related menstrual problems?',
      a: 'There is no reliable scientific evidence that homeopathy treats PCOS or corrects its underlying hormonal and metabolic features (such as insulin resistance or hyperandrogenism). PCOS management should be guided by a qualified healthcare professional and tailored to menstrual regulation, metabolic health, and fertility goals.',
    },
    {
      q: 'What should I bring to a menstrual health consultation?',
      a: 'Bring your menstrual cycle records (start dates, duration, flow intensity, clot size), a detailed pain timeline, a list of current medications and supplements, and any previous pelvic ultrasound scans or blood test reports (TSH, CBC, hormone profiles).',
    },
    {
      q: 'When should irregular periods be medically checked?',
      a: 'Arrange a medical assessment if irregular periods persist for more than 3 consecutive cycles, if menstruation stops completely for over 90 days (and pregnancy is ruled out), if bleeding lasts longer than 7 days, or if cycles are shorter than 21 days or longer than 35 days.',
    },
    {
      q: 'How can I choose a reliable Women’s Health Doctor in Malappuram?',
      a: 'Look for an appropriately qualified professional with verified council registration who conducts comprehensive evaluations, orders ultrasound scans when indicated, and communicates transparently without making unscientific guaranteed-cure claims.',
    },
    {
      q: 'Can heavy bleeding cause chronic anemia?',
      a: 'Yes. Heavy menstrual bleeding (menorrhagia) is the leading cause of iron-deficiency anemia in women of reproductive age. If you feel constantly fatigued, dizzy, cold, or short of breath, ask your doctor to test both your hemoglobin and serum ferritin levels.',
    },
    {
      q: 'What are the main warning signs of endometriosis?',
      a: 'Key warning signs include severe dysmenorrhea that does not respond to standard pain relievers, deep pelvic pain during or after sexual intercourse (dyspareunia), painful bowel movements or urination during menstruation, and difficulty conceiving.',
    },
    {
      q: 'What happens during a menstrual disorder consultation with Dr. Anjali?',
      a: 'During a consultation, Dr. Anjali Chandrasekhar conducts a systematic review of your cycle history, bleeding volume, pain timing, dietary habits, and emotional stress. She provides constitutional holistic guidance, reviews previous lab reports, and recommends gynecological ultrasound or specialist referral whenever clinical signs indicate structural or complex endocrine disease.',
    },
    {
      q: 'Can lifestyle changes alone fix painful periods?',
      a: 'For mild primary dysmenorrhea, regular physical activity, stress reduction, heat therapy, and a nutrient-rich diet can provide meaningful relief. However, if pain is caused by secondary conditions like endometriosis or fibroids, lifestyle changes alone are insufficient and require targeted medical therapies.',
    },
    {
      q: 'Does Dr. Anjali offer online video consultations for menstrual health?',
      a: 'Yes. Dr. Anjali Chandrasekhar offers online video consultations for women across Malappuram and Kerala, allowing comfortable, confidential discussions of menstrual history, symptom review, and constitutional care from home, as well as in-person visits at Kuttippuram and Puthanathani clinics.',
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
                Menstrual Health &amp; Cycle Care – Malappuram Patient Guide
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
              Women’s Health Care
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1E2559] font-semibold">
              Menstrual Homeopathic Treatment in Malappuram
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
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E11D48] via-[#FB7185] to-[#303A88]" />

                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
                  <div className="relative group">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
                      <img
                        src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
                        alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting for Menstrual Health and Women's Care in Malappuram"
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
                      10+ years of dedicated clinical practice supporting women through menstrual irregularities, dysmenorrhea, PCOS evaluations, and constitutional care across Malappuram district.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#FDA4AF]">
                <Heart className="w-3.5 h-3.5 text-[#FDA4AF]" />
                <span>Regional Women’s Health Guide • Malappuram Patients</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Menstrual Homeopathic Treatment in Malappuram
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
                Menstrual health is an important part of a woman's overall well-being. Regular menstrual cycles, manageable period pain, and predictable bleeding patterns contribute to physical comfort and emotional balance. However, many women experience menstrual problems that interfere with daily activities, work, education, sleep, and quality of life. Irregular periods, painful menstruation, heavy bleeding, missed periods, and premenstrual symptoms are among the common concerns requiring medical attention.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Clinical Priority
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Root Cause Diagnosis
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Evaluation
                  </p>
                  <p className="text-white font-bold text-sm mt-0.5">
                    Endocrine &amp; Pelvic
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 col-span-2 sm:col-span-1">
                  <p className="text-white/70 text-[11px] uppercase tracking-wider font-semibold">
                    Care Format
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Clinical Essentials
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Key Takeaways on Menstrual Health in Malappuram
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Essential medical principles every woman should know regarding menstrual symptoms, underlying causes, and evidence-based care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#E11D48]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3">
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
                <div className="w-8 h-8 rounded-xl bg-white/20 text-[#FDA4AF] flex items-center justify-center font-bold text-xs mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-white mb-1.5">
                  Timely Medical Assessment
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Never dismiss severe period pain or heavy bleeding as an inevitable burden. Identifying conditions like PCOS, fibroids, or endometriosis early prevents long-term health and fertility complications.
                </p>
              </div>
              <button
                onClick={handleBookConsultation}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#FDA4AF] hover:text-white transition-colors"
              >
                <span>Schedule Malappuram Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: UNDERSTANDING COMMON MENSTRUAL PROBLEMS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Cycle Physiology &amp; Variations
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Understanding Menstrual Health and Common Period Problems
            </h2>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              The menstrual cycle is a natural process influenced by hormones that regulate the reproductive system. Although cycle length and bleeding patterns vary between individuals, significant changes in menstruation may indicate an underlying health concern.
            </p>
            <p className="text-sm text-[#475569] mt-2 leading-relaxed">
              Some women experience mild discomfort, while others face symptoms that disrupt work, school, sleep, and family life. Understanding these differences helps determine when a professional assessment is needed.
            </p>
          </div>

          <div className="space-y-5">
            {commonMenstrualConcerns.map((concern, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-rose-50 text-[#E11D48] font-bold text-xs flex items-center justify-center">
                      {concern.number}
                    </span>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      {concern.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    {concern.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {concern.desc}
                </p>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-start gap-2 text-xs text-[#0D9488] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0D9488] mt-0.5" />
                  <span>{concern.care}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SCIENTIFIC EVIDENCE DISCLOSURE ON HOMEOPATHY */}
      <section className="py-14 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Evidence Disclosures &amp; Ethics
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Menstrual Homeopathic Treatment in Malappuram: What Should Women Know?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              An evidence-informed, honest medical perspective for women considering complementary consultations for cycle concerns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-3xl bg-[#F8FAFD] border border-[#E2E8F0] shadow-sm">
              <p className="text-sm text-[#475569] leading-relaxed">
                Women exploring <strong>Homeopathic Treatment for Menstrual Problems in Malappuram</strong> may be interested in consultations that consider their overall physical health, emotional well-being, and constitutional history. Homeopathy is a complementary system based on highly diluted substances and individualised symptom profiles.
              </p>

              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <p className="font-bold mb-1 flex items-center gap-1.5 text-amber-900 text-sm">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>Important Scientific Disclosure</span>
                </p>
                <p>
                  Reliable scientific evidence has not established that homeopathy effectively treats menstrual disorders, corrects hormonal imbalances, improves fertility, or addresses the underlying structural causes of conditions such as PCOS, fibroids, or endometriosis. Women considering homeopathy should understand these limitations before making treatment decisions. Homeopathic remedies must never replace a formal medical evaluation, prescribed medication, or recommended diagnostic imaging.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Share Full Health History
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Always share your complete menstrual dates, past ultrasounds, and medications. Never withhold conventional diagnoses or discontinue prescribed drugs without consulting your treating doctor.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Avoid Guaranteed Hormone Cures
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Be deeply cautious of claims promising guaranteed permanent hormonal correction, miracle fertility cures, or overnight fibroid dissolution without scientific trial evidence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="font-bold text-sm text-[#1E2559] mb-1.5">
                  Prioritize Timely Diagnosis
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Endometriosis and adenomyosis require early clinical management to halt chronic pelvic scarring. Delaying medical care in favor of unproven remedies risks permanent complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMON CAUSES OF MENSTRUAL DISORDERS */}
      <section className="py-14 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Etiological Diagnosis
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Common Causes of Menstrual Disorders
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Menstrual symptoms can develop for several reasons. Identifying the root cause is essential because each condition requires a different clinical approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonCauses.map((cause, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#1E2559] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {cause.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9]">
                  <p className="text-[11px] font-bold text-[#1E2559] uppercase tracking-wider mb-1">
                    Diagnostic Next Step
                  </p>
                  <p className="text-xs text-[#0D9488] font-medium leading-relaxed">
                    {cause.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: EVIDENCE-BASED TREATMENT OPTIONS */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Medical Modalities
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Evidence-Based Treatment Options for Menstrual Problems
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Appropriate medical therapies depend on the confirmed diagnosis, symptom severity, age, and individual reproductive goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceBasedOptions.map((modality, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFD] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white bg-[#0D9488] px-2.5 py-1 rounded-full">
                      Modality {modality.step}
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

            {/* Assessment Consultation Card */}
            <div className="bg-gradient-to-br from-[#1E2559] to-[#242C66] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#FDA4AF] bg-white/10 px-2.5 py-1 rounded-full">
                  Doctor Guidance
                </span>
                <h3 className="font-bold text-lg text-white mt-3 mb-2">
                  Need an In-Depth Cycle Review?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Consult with Dr. Anjali Chandrasekhar for a careful review of your menstrual history, ultrasound reports, and personalized supportive care plan.
                </p>
              </div>
              <button
                onClick={handleBookConsultation}
                className="mt-5 w-full py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book In-Clinic Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PREPARING FOR CONSULTATION & SUPPORTIVE HABITS */}
      <section className="py-14 bg-[#F8FAFD] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
                Consultation Readiness
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Preparing for a Menstrual Disorder Consultation in Malappuram
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Recording your cycle details before visiting the clinic makes your consultation much more informative and allows your doctor to pinpoint cycle irregularities faster.
              </p>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm space-y-2.5">
                <h4 className="font-bold text-xs text-[#1E2559] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#303A88]" />
                  <span>Key Details to Record Before Your Appointment:</span>
                </h4>
                {consultationChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                    <Check className="w-3.5 h-3.5 text-[#E11D48] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Supportive Well-Being
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Everyday Habits That Support Menstrual Health
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Healthy routines cannot replace medical treatment when organic conditions like fibroids exist, but they provide substantial physical relief and metabolic stabilization.
              </p>

              <div className="space-y-3">
                {supportiveHabits.map((habit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm"
                  >
                    <h4 className="font-bold text-xs text-[#1E2559] mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#10B981] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{habit.title}</span>
                    </h4>
                    <p className="text-[11px] text-[#64748B] leading-relaxed pl-7">
                      {habit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: RED FLAGS & WHEN TO SEEK URGENT MEDICAL ATTENTION */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Emergency Clinical Triage
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              When Should You Seek Immediate Medical Attention?
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Certain acute menstrual symptoms require urgent hospital assessment rather than a routine outpatient appointment.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#F8FAFD] rounded-3xl border border-[#E2E8F0] shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1E2559] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-bold">Observable Symptom</th>
                  <th className="py-3.5 px-4 font-bold">Recommended Urgency</th>
                  <th className="py-3.5 px-4 font-bold">Potential Underlying Danger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {redFlags.map((flag, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
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
        </div>
      </section>

      {/* SECTION 9: CHOOSING A DOCTOR & QUESTIONS TO ASK */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#0D9488] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Consumer Safety Guide
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
                  Finding a Menstrual Problems Doctor in Malappuram
                </h2>
                <p className="text-sm text-[#475569] mt-2">
                  Selecting the right practitioner involves assessing medical credentials, a systematic examination process, and a commitment to diagnostic investigations rather than vague promises.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinicSelectionCriteria.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm"
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
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
                  Patient Checklist
                </span>
                <h3 className="font-bold text-base text-[#1E2559]">
                  Questions to Ask at a Women’s Health Clinic
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A trustworthy clinic respects your right to understand the evidence behind any suggested therapy and prioritize your long-term health.
                </p>

                <div className="space-y-2 pt-1">
                  {questionsToAsk.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0] flex items-start gap-2 text-xs text-[#334155]"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: INTERACTIVE FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Doctor Answers
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Frequently Asked Questions on Menstrual Health
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Direct, evidence-informed answers to common questions about menstrual disorders and healthcare options in Malappuram.
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
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-[#E11D48] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#E11D48]' : ''
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

      {/* SECTION 11: APPOINTMENT BOOKING ENGINE */}
      <section className="py-14 bg-[#F8FAFD] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D8E1F5]">
              Direct Scheduling
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-3">
              Book Your Menstrual Health Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Schedule an in-clinic appointment at Kuttippuram or Puthanathani, or book a confidential online video consultation with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* SECTION 12: REGIONAL RELATED GUIDES */}
      <RegionalRelatedGuides currentGuideKey="menstrual-treatment-malappuram" />
    </div>
  );
};
