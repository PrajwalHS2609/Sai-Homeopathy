import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  HelpCircle,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  Sparkles,
  FileText,
  AlertCircle,
  Clock,
  Compass,
  ArrowRight,
  Info,
  Stethoscope,
  Utensils,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const MenstrualKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for menstrual health and period problems (Kuttippuram patient guide).'
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
    navigateToBookingWithReason('Menstrual Health Consultation - Kuttippuram', 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 7 Key Takeaways from user document
  const keyTakeaways = [
    {
      title: 'Broad Spectrum of Concerns',
      desc: 'Menstrual problems can include irregular periods, painful cramps (dysmenorrhoea), heavy bleeding (menorrhagia), missed periods, and severe premenstrual symptoms.',
    },
    {
      title: 'Underlying Pathological Causes',
      desc: 'Hormonal imbalances, PCOS, thyroid disorders, uterine fibroids, and endometriosis are among the recognized medical conditions causing menstrual disruption.',
    },
    {
      title: 'Mandatory Clinical Evaluation',
      desc: 'Recurring or unusual menstrual changes should always be evaluated by a qualified healthcare professional rather than simply trying to force a bleed.',
    },
    {
      title: 'Etiology-Guided Treatment',
      desc: 'Appropriate medical treatment strictly depends on the underlying cause, the patient’s age, reproductive goals, symptom severity, and individual health requirements.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has not been established by reliable scientific evidence as an effective curative treatment for menstrual disorders or hormonal imbalances.',
    },
    {
      title: 'Never Postpone Conventional Care',
      desc: 'Women should not delay evidence-based medical diagnostics or discontinue prescribed medicines (such as thyroid or hormonal therapy) in favour of alternative remedies.',
    },
    {
      title: 'Emergency Warning Signs',
      desc: 'Severe sudden pelvic pain, very heavy bleeding with dizziness/fainting, high fever, or possible pregnancy-related complications require prompt emergency medical attention.',
    },
  ];

  // 5 Common Menstrual Problems
  const commonProblems = [
    {
      number: '01',
      title: '1. Irregular Periods (Oligomenorrhoea / Metrorrhagia)',
      badge: 'Cycle Variability',
      desc: 'Irregular periods occur when menstrual cycles vary considerably in length or when periods arrive unpredictably. Some women experience cycles shorter than 21 days, while others have gaps exceeding 35 to 90 days.',
      causes: [
        'Polycystic ovary syndrome (PCOS / PCOD) causing anovulation',
        'Thyroid dysfunction (hypothyroidism or hyperthyroidism)',
        'Significant weight loss, rapid weight gain, or restrictive dieting',
        'Excessive high-intensity athletic training',
        'Chronic psychological stress and sleep disruption',
        'Perimenopausal hormonal transitions in women aged 40–50',
      ],
      insight:
        'Persistent cycle irregularity should be assessed through clinical history and ultrasound rather than assumed to be harmless.',
    },
    {
      number: '02',
      title: '2. Painful Periods (Dysmenorrhoea)',
      badge: 'Pelvic Cramping',
      desc: 'Menstrual cramps are common due to uterine prostaglandins, but severe, incapacitating, or worsening pain should never be dismissed as normal.',
      causes: [
        'Primary Dysmenorrhoea: Menstrual cramping without identifiable pelvic pathology, typically beginning in adolescence.',
        'Secondary Dysmenorrhoea: Menstrual pain caused by underlying pelvic conditions such as endometriosis, adenomyosis, or uterine fibroids.',
      ],
      insight:
        'Women seeking a Period Pain Consultation in Kuttippuram should explain the severity, duration, and pattern of pain to help differentiate primary from secondary dysmenorrhoea.',
    },
    {
      number: '03',
      title: '3. Heavy Menstrual Bleeding (Menorrhagia)',
      badge: 'Excessive Blood Loss',
      desc: 'Heavy menstrual bleeding involves prolonged bleeding (lasting more than 7 days), soaking through pads/tampons every 1–2 hours, passing large blood clots (larger than a coin), or bleeding that disrupts daily life.',
      causes: [
        'Uterine fibroids (benign muscular growths in the uterine wall)',
        'Adenomyosis (endometrial tissue growing into the uterine muscle)',
        'Endometrial polyps or hormonal anovulatory cycles',
        'Underlying bleeding disorders or thyroid disease',
      ],
      insight:
        'Chronic heavy bleeding frequently leads to iron-deficiency anaemia, causing severe fatigue, weakness, dizziness, and breathlessness. Blood counts and iron studies are vital.',
    },
    {
      number: '04',
      title: '4. Missed or Delayed Periods (Amenorrhoea)',
      badge: 'Absence of Menses',
      desc: 'A missed period can occur for several reasons. In any woman of reproductive age who has been sexually active, pregnancy is the primary possibility that must be ruled out first.',
      causes: [
        'Pregnancy (must be evaluated via reliable urine/blood hCG test)',
        'PCOS with chronic anovulatory cycles',
        'Thyroid disorders (elevated TSH altering prolactin and gonadotropins)',
        'Hypothalamic amenorrhoea caused by extreme stress, low caloric intake, or intense exercise',
        'Hyperprolactinaemia (elevated prolactin levels)',
      ],
      insight:
        'Repeatedly missing periods is a clinical indicator of altered endocrine balance and should not be dismissed as a minor inconvenience.',
    },
    {
      number: '05',
      title: '5. Severe Premenstrual Symptoms (PMS / PMDD)',
      badge: 'Cyclic Physical & Emotional Symptoms',
      desc: 'Many women experience physical and emotional changes during the luteal phase (7–10 days prior to menstruation) that resolve once bleeding starts.',
      causes: [
        'Physical symptoms: Breast tenderness, abdominal bloating, water retention, headaches, joint aches, and fatigue',
        'Emotional symptoms: Marked mood swings, irritability, tearfulness, anxiety, food cravings, and insomnia',
      ],
      insight:
        'When premenstrual symptoms become debilitating or interfere with work and relationships, professional evaluation can determine whether Premenstrual Dysphoric Disorder (PMDD) is present.',
    },
  ];

  // Why Do Menstrual Problems Occur? (Etiological Factors)
  const etiologyFactors = [
    {
      title: 'Hormonal Imbalances',
      desc: 'Oestrogen and progesterone regulate the growth and shedding of the uterine lining (endometrium). Fluctuations or failure of normal ovulation disrupt this synchronization, leading to irregular bleeding, skipped cycles, or endometrial hyperplasia.',
      icon: Activity,
    },
    {
      title: 'Polycystic Ovary Syndrome (PCOS)',
      desc: 'PCOS is a common endocrine and metabolic disorder marked by elevated androgens, irregular ovulation, and multiple small ovarian follicles. It frequently presents with irregular periods, acne, excess facial/body hair (hirsutism), and weight challenges.',
      icon: Heart,
    },
    {
      title: 'Thyroid Disorders',
      desc: 'The thyroid gland regulates basal metabolism and interacts directly with ovarian hormones. Both hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid) frequently cause cycle disturbances, menorrhagia, or missed periods.',
      icon: ShieldCheck,
    },
    {
      title: 'Stress & Lifestyle Factors',
      desc: 'Long-term physiological or psychological stress elevates cortisol and impairs GnRH release from the hypothalamus. Inadequate sleep, restrictive diets, sudden weight fluctuations, and excessive exercise disrupt normal menstrual rhythm.',
      icon: Compass,
    },
    {
      title: 'Endometriosis & Uterine Conditions',
      desc: 'Conditions such as endometriosis (tissue resembling the uterine lining growing outside the uterus), adenomyosis, and uterine fibroids generate inflammation and pelvic congestion, resulting in severe period pain and heavy bleeding.',
      icon: AlertCircle,
    },
  ];

  // 4 Components of a Responsible Consultation
  const consultationComponents = [
    {
      step: '01',
      title: 'Detailed Menstrual History',
      desc: 'The doctor explores menarche age, average cycle length, bleeding duration, pad usage, clot size, pain scale, and past gynaecological history.',
      points: [
        'First day of last menstrual period (LMP)',
        'Frequency, duration, and predictability of cycles',
        'Severity, onset, and duration of pelvic pain or cramping',
        'Use of menstrual diary or tracking applications',
      ],
    },
    {
      step: '02',
      title: 'General Health & Lifestyle Review',
      desc: 'Evaluating systemic health factors that directly impact endocrine function and reproductive wellness.',
      points: [
        'Recent weight gain or sudden weight loss',
        'Sleep quality, stress levels, and occupational demands',
        'Associated symptoms: Acne, hirsutism, alopecia, fatigue, or cold intolerance',
        'Review of current prescription medications and nutritional habits',
      ],
    },
    {
      step: '03',
      title: 'Appropriate Diagnostic Investigations',
      desc: 'Ordering targeted clinical tests to determine the precise biological driver rather than guessing.',
      points: [
        'Urine or serum pregnancy testing (hCG)',
        'Thyroid profile (TSH, Free T3, Free T4)',
        'Complete Blood Count (CBC) & serum ferritin for anaemia',
        'Hormonal assays (FSH, LH, Prolactin, Total Testosterone, DHEAS)',
        'Pelvic ultrasound scan (USG) to evaluate ovaries and uterine structure',
      ],
    },
    {
      step: '04',
      title: 'Discussion of Evidence-Based Care Options',
      desc: 'Formulating an individualized care pathway aligned with the diagnosis, medical history, and reproductive priorities.',
      points: [
        'Medical therapies: Hormonal regulators, tranexamic acid, NSAIDs, or thyroid medication',
        'Iron supplementation for diagnosed deficiency anaemia',
        'Nutritional, metabolic, and weight-management guidance for PCOS',
        'Direct referral to gynaecologists or surgeons when fibroids or endometriosis warrant intervention',
      ],
    },
  ];

  // 6 Clinic Selection Standards
  const selectionCriteria = [
    {
      number: '01',
      title: 'Accredited Medical Qualifications',
      desc: 'Verify that the physician holds recognized medical qualifications (such as BHMS) and is formally registered with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Detailed Clinical History',
      desc: 'Choose a professional who listens attentively, reviews your complete menstrual timeline, and provides a compassionate, unhurried consultation.',
    },
    {
      number: '03',
      title: 'Diagnosis-Focused Approach',
      desc: 'Menstrual irregularities should be medically investigated to identify root causes (thyroid, PCOS, fibroids) rather than simply promising period regulation.',
    },
    {
      number: '04',
      title: 'Transparent Treatment Advice',
      desc: 'The practitioner must honestly explain the scientific evidence, limitations, and realistic expectations of any supportive therapy.',
    },
    {
      number: '05',
      title: 'Timely Specialist Referrals',
      desc: 'Responsible clinics maintain prompt referral pathways to gynaecologists, endocrinologists, and radiologists whenever advanced care is indicated.',
    },
    {
      number: '06',
      title: 'Consistent Follow-Up Care',
      desc: 'A dedicated doctor monitors your cycle response, tracks symptom diaries, and adjusts recommendations based on clinical progress.',
    },
  ];

  // Important Considerations Checklist
  const importantConsiderations = [
    'Do not assume every irregular period is simply caused by mild stress or hormonal imbalance; clinical testing is essential.',
    'Do not rely on over-the-counter remedies or unregulated pills advertised as guaranteed cures for PCOS or period regulation.',
    'Never discontinue prescribed hormonal, thyroid, or antidiabetic medications without consulting your prescribing doctor.',
    'Seek prompt medical assessment for worsening pain, debilitating cramps, or prolonged heavy bleeding.',
    'Ask transparently about the scientific evidence supporting any suggested complementary therapy.',
    'Keep consistent written records of cycle start dates, flow intensity, pain scores, and medication usage.',
  ];

  // 5 Lifestyle Habits Supporting Menstrual Health
  const lifestyleHabits = [
    {
      title: 'Maintain a Balanced, Nutrient-Dense Diet',
      desc: 'Incorporate diverse vegetables, fruits, whole grains, pulses, lean proteins, and healthy omega-3 fats. For heavy menstrual bleeding, focus on iron-rich foods (spinach, dates, pomegranate, lentils) paired with vitamin C.',
      icon: Utensils,
    },
    {
      title: 'Engage in Regular Moderate Physical Activity',
      desc: 'Engage in 30 minutes of moderate activity daily (brisk walking, swimming, light cycling, yoga). Avoid extreme overtraining that can trigger hypothalamic suppression.',
      icon: Activity,
    },
    {
      title: 'Active Stress Management',
      desc: 'Practice relaxation techniques, mindful breathing, meditation, or hobbies to attenuate hypothalamic-pituitary-adrenal (HPA) axis stress responses.',
      icon: Heart,
    },
    {
      title: 'Prioritize Consistent, Restful Sleep',
      desc: 'Maintain a consistent sleep schedule of 7–8 hours in a dark, quiet room. Regulated circadian rhythms support healthy nocturnal melatonin and LH pulsatility.',
      icon: Clock,
    },
    {
      title: 'Track Your Menstrual Cycle Diligently',
      desc: 'Log the first day of each cycle, bleeding volume, pain scores, and premenstrual symptoms using a calendar or tracking app to provide valuable medical data.',
      icon: FileText,
    },
  ];

  // Emergency Red Flags
  const redFlags = [
    {
      title: 'Very Heavy Bleeding With Weakness or Fainting',
      desc: 'Soaking through multiple sanitary pads per hour, passing clots larger than a coin, or experiencing lightheadedness, pale skin, or collapse.',
    },
    {
      title: 'Fainting, Severe Breathlessness, or Chest Discomfort',
      desc: 'Signs of acute hemodynamic instability or severe acute anaemia requiring immediate emergency hospital evaluation.',
    },
    {
      title: 'Sudden or Severe Pelvic / Abdominal Pain',
      desc: 'Excruciating pain that comes on suddenly, particularly if localized to one side (possible ovarian cyst rupture, torsion, or ectopic pregnancy).',
    },
    {
      title: 'Severe Pelvic Pain With High Fever or Foul Discharge',
      desc: 'Chills, high body temperature, or abnormal vaginal discharge suggesting acute Pelvic Inflammatory Disease (PID) requiring IV antibiotics.',
    },
    {
      title: 'Bleeding or Pelvic Pain When Pregnancy Is Possible',
      desc: 'Any vaginal bleeding or sharp abdominal pain in a woman of reproductive age with missed periods must be evaluated immediately to exclude ectopic pregnancy.',
    },
    {
      title: 'Sudden Severe Pain With Vomiting or Collapse',
      desc: 'Acute abdominal emergencies require immediate hospitalization and surgical assessment without delay.',
    },
  ];

  // 10 Detailed FAQs from user prompt
  const faqs = [
    {
      q: '1. What are the common signs of menstrual problems?',
      a: 'Common signs include irregular cycles (shorter than 21 days or longer than 35 days), missed periods, unusually heavy bleeding (soaking through pads every 1–2 hours or passing large clots), severe menstrual cramps (dysmenorrhoea), prolonged bleeding lasting more than 7 days, and significant premenstrual physical or emotional distress. Persistent changes in your normal menstrual rhythm should always be medically assessed.',
    },
    {
      q: '2. When should I consult a doctor for irregular periods?',
      a: 'You should consult a healthcare professional if your periods become repeatedly irregular, if you miss three or more consecutive cycles, if bleeding occurs between periods or after intercourse, or if you notice associated symptoms such as acne, excess facial/body hair, unexplained weight changes, or pelvic pain. Prompt evaluation helps diagnose treatable conditions like PCOS or thyroid disorders early.',
    },
    {
      q: '3. Can PCOS cause irregular periods?',
      a: 'Yes. Polycystic Ovary Syndrome (PCOS) is one of the leading causes of irregular, infrequent (oligomenorrhoea), or completely absent (amenorrhoea) periods in reproductive-age women. In PCOS, hormonal imbalances prevent the regular maturation and release of an egg (anovulation). A healthcare professional can perform clinical evaluation, hormonal blood panels, and pelvic ultrasound to confirm PCOS and formulate an evidence-based metabolic and lifestyle management plan.',
    },
    {
      q: '4. Is homeopathy a proven treatment for menstrual problems?',
      a: 'No reliable scientific evidence establishes homoeopathy as an effective or curative treatment for menstrual disorders, hormonal imbalances, PCOS, endometriosis, or uterine fibroids. While some women explore homoeopathy for constitutional support alongside lifestyle changes, it should never replace evidence-based medical diagnosis, conventional hormonal therapies, or necessary gynaecological and surgical care.',
    },
    {
      q: '5. What causes painful periods?',
      a: 'Mild to moderate period pain is often primary dysmenorrhoea, caused by natural uterine muscle contractions stimulated by prostaglandins. However, severe, debilitating, or worsening pelvic pain is frequently secondary dysmenorrhoea, associated with structural conditions such as endometriosis, adenomyosis, uterine fibroids, or pelvic inflammatory disease. These conditions require specific medical diagnosis and treatment.',
    },
    {
      q: '6. Can stress affect menstrual cycles?',
      a: 'Yes. Significant psychological or physiological stress stimulates the hypothalamus and adrenal glands to produce cortisol and CRH, which can suppress the normal secretion of GnRH, LH, and FSH. This can delay or prevent ovulation, leading to late or missed periods. However, recurring menstrual irregularities should never be automatically attributed to stress without ruling out medical conditions like thyroid disorders or PCOS.',
    },
    {
      q: '7. What tests may be needed for menstrual problems?',
      a: 'Depending on your symptoms and clinical history, a doctor may recommend: a urine or blood pregnancy test (hCG), thyroid function tests (TSH, Free T4), complete blood count (CBC) and serum ferritin for anaemia, hormonal profiles (FSH, LH, Prolactin, Total Testosterone), and a pelvic ultrasound scan to examine the uterus and ovaries. The exact tests are personalized based on clinical findings.',
    },
    {
      q: '8. Can lifestyle changes improve menstrual health?',
      a: 'Yes, adopting a balanced, nutrient-rich diet, engaging in regular moderate exercise, managing stress, prioritizing 7–8 hours of restful sleep, and maintaining a healthy body weight support overall endocrine health and metabolic regularity. However, lifestyle changes alone may not resolve structural or medical conditions such as fibroids, endometriosis, or marked thyroid disease, which require medical treatment.',
    },
    {
      q: '9. Should I ignore a missed period if I feel healthy?',
      a: 'No. If pregnancy is possible, take a reliable pregnancy test right away. Even if pregnancy is excluded and you feel otherwise healthy, repeatedly missing periods indicates that ovulation is not occurring normally. Chronic anovulation can lead to prolonged unopposed oestrogen stimulation of the uterine lining, increasing long-term health risks. An accurate medical assessment is recommended.',
    },
    {
      q: '10. How can I prepare for a menstrual health consultation?',
      a: 'You can prepare by recording the exact start date of your last few periods, cycle length, bleeding duration, pad/tampon count, severity and timing of pain, premenstrual symptoms, recent weight changes, and current medications. Keeping a simple menstrual calendar or smartphone app diary helps the healthcare professional evaluate your health history accurately.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Periods Problem Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="womens-health-care"
        categoryLabel="Women’s Health Care"
        pageTitle="Homeopathic Doctor Near Kuttippuram for Periods Problem"
      />

      {/* Hero Section with DOCTOR PROFILE ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Heart className="w-4 h-4 text-rose-400" />}
        badgeText="WOMEN'S HEALTHCARE & MENSTRUAL GUIDE • KUTTIPPURAM"
        title="Homeopathic Doctor Near Kuttippuram for Periods Problem"
        subtitle="A comprehensive clinical guide explaining menstrual irregularities, severe period pain, heavy bleeding, delayed cycles, underlying hormonal causes, diagnostic investigations, and ethical healthcare guidance in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Women’s Health & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential women's health consultations, menstrual history evaluations, cycle tracking guidance, and medical triage at Anjali Homoeo Clinic in Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely gynaecological referrals whenever needed."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
        {/* Intro Context Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Menstrual health is an important part of a woman's overall well-being. A regular menstrual cycle is influenced by several factors, including hormones, lifestyle, nutrition, stress levels and general health. However, many women experience menstrual problems such as irregular periods, painful menstruation, heavy bleeding, delayed periods, missed cycles and premenstrual symptoms. These concerns can affect everyday activities, emotional well-being, work and quality of life.
            </p>
            <p>
              Women experiencing recurring menstrual difficulties often look for professional guidance to understand the possible causes and identify suitable treatment options. If you are searching for a <strong>Homeopathic doctor near Kuttippuram for Periods Problem</strong>, it is important to choose a healthcare professional who listens to your concerns, considers your medical history and encourages appropriate investigations whenever necessary.
            </p>
            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-rose-950 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <strong>Holistic Diagnostic Focus:</strong> A consultation for menstrual concerns should focus on identifying the underlying reason for the symptoms rather than simply trying to regulate the menstrual cycle. Hormonal conditions, polycystic ovary syndrome (PCOS), thyroid disorders, uterine fibroids, endometriosis and other health conditions can contribute to menstrual irregularities. A responsible approach combines accurate diagnosis, evidence-based medical treatment, lifestyle guidance and regular follow-up.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This guide provides clear medical information on symptoms, causes, investigations, and responsible healthcare options for women in Kuttippuram, Valanchery, Tirur, and surrounding areas.
            </p>
          </div>
        </section>

        {/* 7 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Essential Clinical Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Key medical principles to understand menstrual problems, diagnostic testing, and ethical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold flex items-center justify-center text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Common Menstrual Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Symptom Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Understanding Common Menstrual Problems
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              The menstrual cycle is a natural process controlled by hormones that regulate the development and release of an egg and prepare the uterus for a possible pregnancy. Although cycle length and bleeding patterns can vary between individuals, significant or persistent changes may require medical evaluation. Women searching for <strong>Menstrual Treatment in Kuttippuram</strong> frequently encounter one or more of these conditions:
            </p>
          </div>

          <div className="space-y-8">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                      {prob.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{prob.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    {prob.desc}
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key Causes & Risk Factors:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {prob.causes.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-indigo-50/70 border border-indigo-200/80 text-xs sm:text-sm text-indigo-950 flex items-start gap-2">
                    <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{prob.insight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Do Menstrual Problems Occur? */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Etiology & Physiology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Why Do Menstrual Problems Occur?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Menstrual disorders can have several underlying causes. Identifying these biological factors is an essential component of appropriate medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiologyFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {factor.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Homeopathic Treatment for Menstrual Problems in Kuttippuram: Scientific Evidence */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Scientific Evidence Disclosure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homeopathic Treatment for Menstrual Problems in Kuttippuram
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Women exploring <strong>Homeopathic Treatment for Menstrual Problems in Kuttippuram</strong> may be interested in an approach that considers their overall health, symptom history and personal experiences. Homeopathy is an alternative system of healthcare based on principles such as individualised remedy selection.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
              <h4 className="font-bold text-purple-900 text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700" />
                Transparency on Scientific Evidence & Limitations
              </h4>
              <p className="text-sm leading-relaxed">
                However, it is important to understand the scientific evidence before choosing it for a menstrual condition. At present, reliable scientific evidence does not establish homeopathy as an effective treatment for menstrual disorders, hormonal imbalances, PCOS, endometriosis, fibroids or other underlying gynaecological conditions.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-medium">
                It should not be presented as a proven method for regulating periods, correcting hormone levels, restoring ovulation or treating reproductive health conditions. Women should not postpone appropriate diagnosis or evidence-based treatment while trying homoeopathic remedies.
              </p>
            </div>
            <p>
              If a woman chooses to consult a homoeopathic practitioner, the consultation should be transparent about the limitations of this approach. It should not involve promises of guaranteed results, advice to stop prescribed medication or discouragement from seeing a qualified medical doctor or gynaecologist.
            </p>
          </div>
        </section>

        {/* What to Expect During a Menstrual Disorder Consultation in Kuttippuram */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-300 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Clinical Assessment Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              What to Expect During a Menstrual Disorder Consultation in Kuttippuram
            </h2>
            <p className="text-indigo-200 mt-3 text-sm sm:text-base leading-relaxed">
              A detailed consultation is an important first step towards understanding menstrual symptoms. Women looking for a <strong>Menstrual Disorder Consultation in Kuttippuram</strong> should expect a healthcare professional to review their complete timeline, general health, and risk factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultationComponents.map((comp, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-rose-300 bg-rose-500/20 px-2.5 py-1 rounded-md">
                      STEP {comp.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed mb-4">
                    {comp.desc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-indigo-200">
                    {comp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Choosing a Menstrual Problems Doctor in Kuttippuram */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Provider Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Choosing a Menstrual Problems Doctor in Kuttippuram
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Selecting the right healthcare professional is important when dealing with recurring menstrual difficulties. A responsible doctor explains when specialist referral or further investigations are indicated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-xs mb-3">
                    {crit.number}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {crit.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Considerations Checklist */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Patient Safety & Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homeopathy Clinic for Menstrual Problems in Kuttippuram: Important Considerations
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              A <strong>Women's Health Homeopathy Clinic in Kuttippuram</strong> should communicate honestly about what its services can and cannot establish. It should never claim that alternative remedies can replace necessary gynaecological care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importantConsiderations.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Lifestyle Habits That Support Menstrual Health */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Wellness & Routine
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Lifestyle Habits That Support Menstrual Health
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Healthy lifestyle habits contribute to general physical and emotional well-being. Although they cannot cure every menstrual disorder, they support endocrine and metabolic balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleHabits.map((habit, idx) => {
              const Icon = habit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {habit.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {habit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* When Should You Seek Immediate Medical Attention? Red Flags */}
        <section className="bg-rose-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-200 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Emergency Medical Warning
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              When Should You Seek Immediate Medical Attention?
            </h2>
            <p className="text-rose-100 mt-2 text-sm sm:text-base leading-relaxed">
              Some menstrual symptoms require urgent hospital evaluation. Do not delay emergency care while waiting for an alternative treatment to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {redFlags.map((flag, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/10 border border-white/10 text-white flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">
                    {flag.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                    {flag.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* A Personalised Healthcare Journey */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Personalized Healthcare
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Period Problems Treatment in Kuttippuram: A Personalised Healthcare Journey
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              There is no single treatment suitable for every menstrual problem. The right approach depends on the cause, the woman's age, medical history, symptoms and reproductive health needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Irregular Periods with PCOS:</strong> Requires metabolic evaluation, lifestyle adjustments, and targeted medical management to encourage regular ovulatory cycles.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Heavy Menstrual Bleeding:</strong> Requires evaluation for fibroids, adenomyosis, endometrial polyps, or systemic coagulopathies, with iron supplementation for anaemia.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Painful Periods (Dysmenorrhoea):</strong> Requires clinical examination and ultrasound imaging to investigate secondary causes such as endometriosis or adenomyosis.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong>Thyroid-Related Menstrual Changes:</strong> Improves directly when the underlying underactive or overactive thyroid disorder is medically managed with levothyroxine or antithyroid agents.
              </div>
            </div>
            <p className="pt-2">
              Women seeking <strong>Period Problems Treatment in Kuttippuram</strong> should therefore focus on finding the exact cause rather than relying on general claims about period regulation.
            </p>
          </div>
        </section>

        {/* 10 FAQs Section (Interactive Accordion) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear, medically informed answers to common inquiries regarding period problems, PCOS, and healthcare near Kuttippuram.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left font-semibold text-slate-900 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-rose-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA & Booking Engine */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-bold tracking-wider text-rose-300 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Personalized Healthcare Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Schedule Your Menstrual Health Consultation
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Your menstrual health deserves attention, reliable information and professional care. Do not ignore persistent symptoms or rely on guaranteed treatment claims. Seek qualified medical guidance at Anjali Homoeo Clinic in Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 text-slate-900 shadow-md">
            <AppointmentBookingEngine />
          </div>

          {/* Quick contact strip */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-indigo-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Tirur - Kuttippuram Rd, near Mini Civil Station, Kuttippuram</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400" />
              <a href={`tel:${phonePrimary}`} className="hover:text-white transition-colors">
                {phonePrimary}
              </a>
              <span>/</span>
              <a href={`tel:${phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {phoneSecondary}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 font-medium transition-colors"
              >
                WhatsApp: {phoneWhatsApp}
              </a>
            </div>
          </div>
        </section>

        {/* Related Regional Guides for Kuttippuram & Surrounding Areas */}
        <RegionalRelatedGuides currentCity="Kuttippuram" />
      </main>
    </div>
  );
};
