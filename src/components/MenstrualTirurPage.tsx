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
  Clock,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
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
      badge: 'Luteal Phase Distress',
      desc: 'Physical and emotional symptoms that develop predictably during the luteal phase (one to two weeks before bleeding) and subside shortly after menstruation begins. Symptoms include abdominal bloating, breast tenderness, mood swings, irritability, sleep disruptions, and severe dysphoria.',
      clinicalNote:
        'A medical evaluation helps differentiate manageable PMS from premenstrual dysphoric disorder (PMDD) or underlying affective disorders.',
    },
  ];

  // 6 Diagnostic and root causes
  const rootCauses = [
    {
      id: 'hormonal-imbalances',
      title: 'Hormonal Imbalances & Anovulation',
      desc: 'The menstrual cycle is orchestrated by complex feedback loops between the hypothalamus, pituitary gland, and ovaries. Fluctuations in estrogen, progesterone, or gonadotropins disrupt follicular maturation and endometrial shedding.',
    },
    {
      id: 'pcos',
      title: 'Polycystic Ovary Syndrome (PCOS)',
      desc: 'PCOS is a leading cause of ovulatory dysfunction and irregular cycles. It involves insulin resistance, elevated androgens, and multiple immature subcapsular ovarian follicles, often causing acne, facial hair, and weight challenges.',
    },
    {
      id: 'thyroid-disorders',
      title: 'Thyroid Dysfunction (Hypothyroidism & Hyperthyroidism)',
      desc: 'Thyroid hormones directly interact with ovarian steroidogenesis. Underactive thyroid function (hypothyroidism) frequently leads to heavy or frequent bleeding, while hyperthyroidism causes sparse or missed periods.',
    },
    {
      id: 'endometriosis',
      title: 'Endometriosis and Adenomyosis',
      desc: 'Endometriosis occurs when tissue similar to the uterine lining implants outside the uterus; adenomyosis occurs when it grows into the muscular uterine wall. Both cause severe debilitating menstrual cramps, heavy bleeding, and chronic pelvic pain.',
    },
    {
      id: 'uterine-fibroids',
      title: 'Uterine Fibroids and Endometrial Polyps',
      desc: 'Non-cancerous growths within the myometrium or endometrium distort the uterine cavity, prevent effective vascular contraction, and lead to prolonged, heavy bleeding with large clots.',
    },
    {
      id: 'stress-weight',
      title: 'Lifestyle, Acute Stress & Rapid Weight Shifts',
      desc: 'High cortisol levels, dramatic caloric restriction, strenuous athletic training, and poor sleep impair hypothalamic GnRH pulsatility, causing delayed or suppressed ovulatory cycles.',
    },
  ];

  // 6 Doctor-finding factors
  const doctorFactors = [
    {
      number: '01',
      title: 'Recognized Qualifications & State Council Registration',
      desc: 'Verify that your clinician possesses recognised medical qualifications (such as MBBS/MD Gynaecology or BHMS) and active registration with recognized medical councils.',
    },
    {
      number: '02',
      title: 'Thorough Diagnostic Assessment & Case-Taking',
      desc: 'A comprehensive women’s health consultation should review your complete menstrual timeline, cycle length variations, pain characteristics, medical history, and current medications.',
    },
    {
      number: '03',
      title: 'Standard Medical Investigations & Imaging',
      desc: 'The doctor should support and advise essential diagnostic investigations—including pelvic ultrasound scans, complete blood counts, thyroid profiles, and hormonal blood tests.',
    },
    {
      number: '04',
      title: 'Transparent Explanations & Realistic Timelines',
      desc: 'Your provider must clearly explain the likely diagnostic causes, potential treatment options, side effects, and follow-up expectations in simple, understandable terms.',
    },
    {
      number: '05',
      title: 'Ongoing Monitoring for Chronic Gynecological Concerns',
      desc: 'Conditions such as PCOS, endometriosis, and recurrent dysmenorrhea require monitored, long-term care plans with periodic follow-ups rather than quick one-time prescriptions.',
    },
    {
      number: '06',
      title: 'Strict Avoidance of "Guaranteed Cure" Promises',
      desc: 'Be cautious of practitioners advertising guaranteed quick cures or claiming to permanently eliminate hormonal or structural disorders without clinical evidence.',
    },
  ];

  // 5 Evidence-based treatment modalities
  const evidenceBasedTreatments = [
    {
      step: '01',
      title: 'Pain Relief for Dysmenorrhea',
      badge: 'First-Line Analgesia',
      desc: 'Non-steroidal anti-inflammatory drugs (NSAIDs) inhibit endometrial prostaglandin synthesis, significantly reducing uterine contractions and pain severity.',
      points: [
        'Mefenamic acid or ibuprofen initiated at the onset of bleeding or cramps',
        'Targeted use for 2–3 days during the peak cramping window',
        'Effective relief without causing hormonal alteration or dependency',
      ],
    },
    {
      step: '02',
      title: 'Hormonal Treatments for Cycle Regulation',
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

  // 9 Consultation preparation points
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

  // 12 FAQs
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
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Periods Doctor Near Tirur"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="womens-health-care"
        categoryLabel="Women's Health Care"
        pageTitle="Homeopathic Doctor Near Tirur for Periods Problem"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Heart className="w-3.5 h-3.5 text-[#FDA4AF]" />}
        badgeText="Regional Women's Health Guide • Tirur Patients"
        title="Homeopathic Doctor Near Tirur for Periods Problem"
        subtitle="Individualized clinical guidance for women in Tirur and Malappuram experiencing irregular cycles, severe dysmenorrhea, heavy bleeding, PCOS, and premenstrual discomfort."
        metrics={[
          { label: 'Condition Focus', value: 'Menstrual Health' },
          { label: 'Diagnostic Standard', value: 'Ultrasound & Labs' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Women's Health & Menstrual Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential women's health assessments, menstrual cycle evaluation, PCOS screening, and evidence-guided constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#E11D48]/10 flex items-center justify-center text-[#E11D48]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Important Key Takeaways for Patients in Tirur
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#E11D48]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#BE123C] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
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

      {/* Section 1: Understanding Common Menstrual Problems (5 Conditions) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Common Menstrual Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Menstrual health reflects overall neuro-endocrine harmony. Recognizing patterns early helps women seek timely medical advice.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {commonProblems.map((cond, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                    {cond.number} • {cond.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {cond.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cond.desc}
                </p>
                <div className="p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] text-xs text-[#9F1239] font-medium">
                  <strong>Clinical Note:</strong> {cond.clinicalNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Homeopathic Doctor Near Tirur for Periods: What Should You Know? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathic Doctor Near Tirur for Periods Problem: What Should You Know?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Women searching for a <strong>Homeopathic Doctor Near Tirur for Periods Problem</strong> often seek an approachable setting to discuss personal symptoms, emotional health, diet, and stress.
            </p>
            <p>
              Homeopathic practitioners evaluate individual symptom profiles and lifestyle factors as part of their holistic assessment.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Distinguishing Consultation from Scientific Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    It is crucial to differentiate between an attentive consultation and reliable evidence of therapeutic efficacy. <strong>Reliable scientific evidence has not demonstrated that homeopathy effectively regulates menstrual cycles, resolves structural gynecological pathology (such as fibroids or endometriosis), or corrects endocrine disorders.</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Delayed diagnosis of conditions causing abnormal uterine bleeding can lead to severe iron-deficiency anaemia or progression of pelvic disease. Patients should always undergo conventional gynecological evaluation and diagnostic imaging when symptoms persist.
                  </p>
                </div>
              </div>
            </div>

            <p>
              If consulting a homeopathic doctor, always disclose current medications, hormonal pills, and vitamins, and never discontinue prescribed gynecological therapy without consulting your treating doctor.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Diagnostic and Root Causes of Menstrual Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              DIAGNOSTIC ETIOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Causes of Menstrual Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Understanding the biological factors causing abnormal bleeding or severe dysmenorrhea ensures appropriate medical targeting.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {rootCauses.map((cause) => (
              <div
                key={cause.id}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/30 transition-all space-y-1.5"
              >
                <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                  {cause.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Finding a Doctor Near Tirur for Menstrual Health */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PROVIDER SELECTION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Finding a Doctor Near Tirur for Periods Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Key standards to keep in mind when choosing a healthcare professional for menstrual and gynecological concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {doctorFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88]/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#303A88] text-white flex items-center justify-center font-bold text-xs">
                    {factor.number}
                  </span>
                  <h3 className="font-bold text-base text-[#1E2559]">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Evidence-Based Treatment Options for Menstrual Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              THERAPEUTIC MODALITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Treatment Options for Menstrual Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Modern gynecology offers targeted medical therapies based on symptoms, ultrasound findings, and individual reproductive goals.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {evidenceBasedTreatments.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8E1F5] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1E2559] text-white flex items-center justify-center font-bold text-xs">
                      {opt.step}
                    </span>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      {opt.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] w-fit">
                    {opt.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {opt.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {opt.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] text-xs text-[#334155] flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Preparing for a Menstrual Health Consultation in Tirur */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT PREPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Preparing for a Menstrual Health Consultation in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Having accurate records of your menstrual dates and symptoms helps your doctor evaluate patterns efficiently.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#334155]">
              {preparationPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-[#D8E1F5]">
                    <Icon className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E2559] block">{item.title}:</strong>
                      <span className="text-[#64748B] text-xs">{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: When Should You Seek Medical Attention? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
              CLINICAL TRIAGE &amp; RED FLAGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Recognizing when period symptoms represent benign variations versus urgent emergencies is vital for your safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                Schedule a Medical Assessment
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-900/90">
                <li>• Menstrual bleeding lasting longer than 7 consecutive days.</li>
                <li>• Severe dysmenorrhea that fails to respond to standard OTC analgesics.</li>
                <li>• Bleeding or spotting between periods or after sexual intercourse.</li>
                <li>• Menstrual cycles consistently shorter than 21 days or longer than 35 days.</li>
                <li>• Sudden change in your established menstrual pattern without obvious cause.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-rose-900">
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                Urgent Emergency Red Flags
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-900/90">
                <li>• Severe sudden-onset lower pelvic or abdominal pain.</li>
                <li>• Fainting, severe dizziness, lightheadedness, or extreme weakness.</li>
                <li>• Heavy bleeding soaking through 2 or more large pads/tampons per hour.</li>
                <li>• Passing blood clots larger than a 5-rupee coin repeatedly.</li>
                <li>• Heavy bleeding accompanied by high fever, chills, or foul-smelling discharge.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Frequently Asked Questions (12 Interactive FAQs) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              PATIENT INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Periods Doctor Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Common questions from women in Tirur and Malappuram regarding period pain, irregular cycles, homeopathy, and diagnostic testing.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-[#F8FAFD] overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#E11D48] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#E11D48] shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E11D48]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-4 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              DIRECT APPOINTMENT SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book Your Menstrual Health Consultation Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select an in-clinic appointment at our Kuttippuram center or schedule a confidential online video consultation with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-sm">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="menstrual-doctor-tirur" />
    </div>
  );
};
