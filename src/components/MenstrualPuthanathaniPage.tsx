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
  UserCheck,
  Smile,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const MenstrualPuthanathaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';
  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for menstrual health and period problems at Puthanathani Clinic.'
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
    navigateToBookingWithReason('Menstrual Health Consultation - Puthanathani', 'clinic');
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
      title: 'Normal Variability vs. Persistent Concerns',
      desc: 'Menstrual cycles can vary naturally, but persistent irregularities or significant sudden changes in cycle length should be assessed.',
    },
    {
      title: 'Six Common Menstrual Presentations',
      desc: 'Common period problems include painful periods (dysmenorrhoea), heavy bleeding, missed periods, irregular cycles, PMS, and spotting between periods.',
    },
    {
      title: 'Hormonal & Pelvic Root Factors',
      desc: 'Hormonal fluctuations, PCOS, thyroid disorders, uterine fibroids, and endometriosis can all contribute to significant menstrual problems.',
    },
    {
      title: 'Menstrual Diary Diagnostics',
      desc: 'Keeping a menstrual diary or tracking app helps identify changes in cycle length, flow volume, clot sizes, and pain patterns.',
    },
    {
      title: 'Investigation for Severe Pain & Bleeding',
      desc: 'Severe period pain interfering with daily life and unusually heavy bleeding causing fatigue require timely medical investigation.',
    },
    {
      title: 'Aetiology-Specific Treatment Paths',
      desc: 'Treatment depends strictly on the underlying cause and may include medical therapies, hormonal care, lifestyle adjustments, or specialist gynaecological management.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has not been proven to cure menstrual disorders, correct systemic hormonal imbalances, or shrink uterine fibroids.',
    },
    {
      title: 'Emergency Medical Red Flags',
      desc: 'Sudden severe pelvic pain, fainting, breathlessness, or heavy bleeding accompanied by dizziness requires urgent hospital medical attention.',
    },
    {
      title: 'Regular Checks & Preventive Care',
      desc: 'Regular medical check-ups, timely assessments, and transparent clinical triage support better long-term women’s health.',
    },
  ];

  // 6 Common Menstrual Problems
  const commonProblems = [
    {
      title: '1. Irregular Periods',
      badge: 'Oligomenorrhoea / Irregular Cycles',
      desc: 'Irregular periods occur when menstrual cycles vary considerably in length (shorter than 21 days or longer than 35 days) or when periods do not follow a predictable pattern. Hormonal changes, emotional stress, PCOS, thyroid disorders, and sudden weight changes may contribute.',
      clinicalNote:
        'Occasional variation may not indicate a serious problem, but persistent irregularity should be clinically assessed.',
    },
    {
      title: '2. Painful Periods',
      badge: 'Dysmenorrhoea',
      desc: 'Painful menstruation causes throbbing or cramping in the lower abdomen. Some women also experience radiating lower back pain, headaches, nausea, fatigue, or loose stools caused by prostaglandins. Severe or worsening menstrual pain can sometimes be associated with endometriosis, adenomyosis, or fibroids.',
      clinicalNote:
        'Cramps requiring excessive painkillers or keeping you from work/school deserve formal pelvic evaluation.',
    },
    {
      title: '3. Heavy Menstrual Bleeding',
      badge: 'Menorrhagia',
      desc: 'Heavy menstrual bleeding involves excessive blood loss or bleeding that interferes with everyday activities. Signs include needing to change sanitary pads/tampons every 1–2 hours, prolonged bleeding lasting over 7 days, or passing large blood clots. Chronic heavy bleeding can lead to iron deficiency anaemia.',
      clinicalNote:
        'Medical assessment is important to evaluate blood counts, ferritin levels, and uterine structural health.',
    },
    {
      title: '4. Missed Periods',
      badge: 'Amenorrhoea',
      desc: 'A missed period can occur because of pregnancy, emotional stress, significant weight loss or gain, excessive athletic exercise, hormonal conditions, or thyroid problems. If pregnancy is possible, taking a pregnancy test is an essential first step. Repeated missed periods require medical evaluation.',
      clinicalNote:
        'Absence of menstruation for three consecutive cycles should always be investigated.',
    },
    {
      title: '5. Premenstrual Syndrome (PMS)',
      badge: 'PMS & Premenstrual Distress',
      desc: 'Premenstrual syndrome refers to a cluster of physical and emotional symptoms that occur in the luteal phase before menstruation. Common symptoms include abdominal bloating, breast tenderness, headaches, mood swings, irritability, extreme tiredness, food cravings, and sleep difficulties.',
      clinicalNote:
        'Symptoms can vary in intensity and may significantly impact daily activities, study, and relationships.',
    },
    {
      title: '6. Spotting Between Periods',
      badge: 'Intermenstrual Bleeding',
      desc: 'Bleeding or brownish discharge between regular menstrual periods may occur due to hormonal contraception, cervical conditions, vaginal or uterine infections, endometrial polyps, or early pregnancy-related causes. Any unexplained or repeated intermenstrual spotting should be evaluated.',
      clinicalNote:
        'Never ignore unexpected bleeding, particularly if accompanied by pelvic discomfort.',
    },
  ];

  // Causes of Menstrual Problems
  const causesList = [
    {
      title: 'Polycystic Ovary Syndrome (PCOS)',
      desc: 'A common endocrine condition that can cause irregular or absent periods, elevated androgen levels, cystic ovarian changes, facial/body hair growth (hirsutism), stubborn acne, and difficulties with ovulation.',
    },
    {
      title: 'Thyroid Disorders',
      desc: 'Both an underactive thyroid (hypothyroidism) and an overactive thyroid (hyperthyroidism) alter metabolic hormones and disrupt menstrual frequency, flow volume, and regularity.',
    },
    {
      title: 'Endometriosis',
      desc: 'Tissue similar to the uterine lining grows outside the uterus (on ovaries, fallopian tubes, or pelvic peritoneum), triggering chronic pelvic inflammation, severe period cramps, deep pain, and fertility concerns.',
    },
    {
      title: 'Uterine Fibroids & Polyps',
      desc: 'Non-cancerous muscular growths in or around the uterine wall that, depending on their size and location, can cause heavy prolonged bleeding, pelvic pressure, frequent urination, and painful periods.',
    },
    {
      title: 'Stress and Lifestyle Changes',
      desc: 'Elevated cortisol from psychological stress, shift work, poor sleep, extreme physical training, and restrictive eating can temporarily suppress hypothalamic-pituitary-ovarian signaling.',
    },
    {
      title: 'Pregnancy and Breastfeeding',
      desc: 'Menstrual patterns naturally cease during pregnancy and may remain altered post-partum. Elevated prolactin during exclusive breastfeeding often delays the resumption of regular ovulation.',
    },
    {
      title: 'Perimenopause',
      desc: 'The natural transition leading up to menopause (often in a woman’s 40s) involves fluctuating oestrogen and progesterone levels, resulting in irregular cycle lengths, skipped cycles, and varied flow.',
    },
  ];

  // Diagnostic Steps
  const diagnosticSteps = [
    {
      title: 'Menstrual History Intake',
      desc: 'Recording date of Last Menstrual Period (LMP), average cycle length, duration and volume of bleeding, pain severity, and presence of clots.',
    },
    {
      title: 'Pregnancy & Hormone Assessment',
      desc: 'Pregnancy testing (urine hCG or serum beta-hCG), followed by serum FSH, LH, oestradiol, progesterone, and prolactin when indicated.',
    },
    {
      title: 'Complete Thyroid & Blood Panel',
      desc: 'TSH, free T3/T4 profiles, along with Complete Blood Count (CBC) and serum ferritin to rule out iron deficiency anaemia from heavy blood loss.',
    },
    {
      title: 'Pelvic Ultrasound (USG)',
      desc: 'Transabdominal or transvaginal ultrasound imaging to assess endometrial thickness, uterine anatomy, fibroids, adenomyosis, and polycystic ovarian morphology.',
    },
    {
      title: 'Specialist Gynaecological Triage',
      desc: 'Timely referral to an obstetrician-gynaecologist for cervical smears, endometrial biopsies, or laparoscopy when complex pathology is suspected.',
    },
  ];

  // Evidence-Based Treatment Options
  const evidenceTreatments = [
    {
      title: '1. Treatment for Painful Periods',
      tag: 'Dysmenorrhoea Care',
      desc: 'Non-steroidal anti-inflammatory medicines (NSAIDs) reduce prostaglandin synthesis to relieve uterine cramping when medically suitable. Low-dose hormonal contraception or progestins may be considered for cyclical control. Severe pain requires investigation for endometriosis or adenomyosis.',
    },
    {
      title: '2. Management of Heavy Bleeding',
      tag: 'Menorrhagia Control',
      desc: 'Evidence-based options include antifibrinolytic medicines (e.g. tranexamic acid), hormonal therapies (such as progestin-releasing IUDs or oral agents), and iron supplementation for anaemia. Structural causes like fibroids or polyps may require surgical intervention.',
    },
    {
      title: '3. Comprehensive PCOS Management',
      tag: 'Endocrine Support',
      desc: 'Individualised care incorporating structured nutrition, physical activity, insulin-sensitizing support, cycle-regulating therapies, dermatological care for acne/hirsutism, and fertility support when pregnancy is desired.',
    },
    {
      title: '4. Thyroid-Related Menstrual Care',
      tag: 'Endocrine Normalization',
      desc: 'When thyroid dysfunction causes menstrual irregularities, medically supervised thyroid hormone optimization often restores normal cycle rhythm and bleeding patterns.',
    },
    {
      title: '5. Care for Fibroids & Endometriosis',
      tag: 'Specialist Protocols',
      desc: 'Management depends on symptom severity, tumour dimensions, and reproductive goals. Options span targeted hormonal therapies, minimally invasive hysteroscopic/laparoscopic procedures, and surgical removal.',
    },
  ];

  // 10 Lifestyle Tips
  const lifestyleTips = [
    'Maintain a balanced, wholesome diet featuring fresh vegetables, fruits, whole grains, and adequate protein.',
    'Include iron-rich foods (green leafy vegetables, legumes, dates, seeds) especially if bleeding is heavy.',
    'Engage in gentle, regular physical activity and walking to support pelvic circulation and mood stability.',
    'Establish a consistent sleep schedule to support hypothalamic hormone regulation.',
    'Practice relaxation techniques such as deep breathing, gentle yoga, and mindfulness to manage cortisol.',
    'Drink adequate water throughout the day to support hydration and reduce bloating.',
    'Avoid excessive high-intensity workouts and extreme caloric restriction that can halt ovulation.',
    'Keep a detailed menstrual diary or mobile tracking app recording cycle dates, flow volume, and symptoms.',
    'Attend regular general health and gynaecological check-ups as recommended by your physician.',
    'Seek professional medical advice promptly whenever your cycle pattern or pain changes significantly.',
  ];

  // Provider Criteria
  const providerCriteria = [
    {
      title: 'Professional Registration & BHMS Credentials',
      desc: 'Ensure the practitioner holds recognized university medical qualifications and valid state medical council registration.',
    },
    {
      title: 'Detailed Menstrual & Medical History Review',
      desc: 'A dedicated doctor reviews your complete menstrual timeline, reproductive history, and previous medications with care.',
    },
    {
      title: 'Transparent Explanation of Possible Causes',
      desc: 'The provider clearly outlines potential hormonal, mechanical, or lifestyle factors behind your symptoms.',
    },
    {
      title: 'Recommends Appropriate Investigations',
      desc: 'The clinic advises necessary blood panels, ultrasound scans, or pregnancy tests instead of dispensing blind remedies.',
    },
    {
      title: 'Communicates Complementary Limitations Clearly',
      desc: 'Explains transparently that homoeopathy is complementary and does not replace gynaecological care or cure structural disease.',
    },
    {
      title: 'Facilitates Timely Gynaecological Referral',
      desc: 'Recognizes warning signs and promptly coordinates specialist gynaecological referral when advanced care is needed.',
    },
  ];

  // Emergency Red Flags
  const redFlags = [
    'Very heavy menstrual bleeding (soaking through two or more pads per hour for consecutive hours) accompanied by dizziness, fainting, or breathlessness.',
    'Sudden, severe, or agonizing pelvic or lower abdominal pain that comes on rapidly.',
    'Severe lower abdominal pain when pregnancy is possible (urgent risk of ectopic pregnancy).',
    'Heavy vaginal bleeding or clotting during confirmed or suspected pregnancy.',
    'High fever, chills, pelvic tenderness, or foul-smelling vaginal discharge (suspected pelvic inflammatory disease).',
    'Severe weakness, cold clammy skin, or pale conjunctiva suggesting significant acute or chronic blood loss anaemia.',
  ];

  // 10 Interactive FAQs
  const faqs = [
    {
      q: 'What are common menstrual problems?',
      a: 'Common menstrual problems include irregular periods, painful menstruation, heavy bleeding, missed periods, spotting and premenstrual symptoms.',
    },
    {
      q: 'What causes irregular periods?',
      a: 'Irregular periods may be associated with PCOS, thyroid disorders, stress, weight changes, excessive exercise, pregnancy and other hormonal or reproductive health conditions.',
    },
    {
      q: 'When should I consult a menstrual problems doctor?',
      a: 'Seek medical advice if periods are repeatedly irregular, unusually heavy, very painful or accompanied by bleeding between periods.',
    },
    {
      q: 'Can homoeopathy cure menstrual disorders?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy cures menstrual disorders or corrects hormonal imbalances. It should not replace appropriate medical diagnosis and evidence-based treatment.',
    },
    {
      q: 'Is period pain normal?',
      a: 'Mild to moderate cramps are common for many women. However, severe, worsening or persistent pain should be evaluated because conditions such as endometriosis and fibroids may cause painful menstruation.',
    },
    {
      q: 'Can PCOS cause irregular periods?',
      a: 'Yes. PCOS can affect ovulation and hormone levels, resulting in irregular or infrequent periods. Medical assessment can help determine appropriate management.',
    },
    {
      q: 'What should I track before a menstrual consultation?',
      a: 'Record the first day of each period, cycle length, bleeding duration, approximate flow, pain severity and any additional symptoms.',
    },
    {
      q: 'Can stress affect menstrual cycles?',
      a: 'Significant stress can influence the hormonal processes involved in menstruation and may contribute to cycle changes. Persistent irregularities should still be medically assessed.',
    },
    {
      q: 'What causes heavy menstrual bleeding?',
      a: 'Possible causes include fibroids, hormonal conditions, adenomyosis, bleeding disorders, certain medicines and other reproductive health conditions. Investigation may be necessary.',
    },
    {
      q: 'When is period pain an emergency?',
      a: 'Sudden severe pelvic pain, particularly when pregnancy is possible, or heavy bleeding accompanied by fainting, dizziness or breathlessness requires urgent medical attention.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Periods & Menstrual Health Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="womens-health-care"
        categoryLabel="Women's Health Care"
        pageTitle="Homeopathic Doctor Near Puthanathani for Periods Problem"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Heart className="w-4 h-4 text-rose-400" />}
        badgeText="WOMEN’S REPRODUCTIVE HEALTH • PUTHANATHANI"
        title="Homeopathic Doctor Near Puthanathani for Periods Problem"
        subtitle="A comprehensive clinical care guide explaining irregular cycles, painful periods (dysmenorrhoea), heavy bleeding, PCOS, thyroid factors, diagnostic investigations, and responsible women’s healthcare guidance in Puthanathani."
        metrics={[
          { label: 'Primary Clinic', value: 'Puthanathani' },
          { label: 'Branch Center', value: 'Kuttippuram' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Women’s Health & Wellness"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical consultations, detailed menstrual history evaluations, lifestyle counselling, and responsible triage for women experiencing menstrual irregularities and period pain at Anjali Homoeo Clinic in Puthanathani and Kuttippuram, coordinating timely gynaecological referrals when indicated."
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
              Understanding Menstrual Health & Responsible Women’s Care in Puthanathani
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Menstrual health is an important part of a woman's overall well-being. A regular menstrual cycle is influenced by hormones, reproductive health, lifestyle and general physical condition. However, many women experience period-related concerns such as irregular periods, painful menstruation, heavy bleeding, missed periods, spotting and premenstrual symptoms. These problems can affect daily activities, emotional well-being, sleep and quality of life.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Women looking for a <strong className="text-[#1E2559]">Homeopathic doctor near Puthanathani for Periods Problem</strong> may want to understand the possible causes of menstrual irregularities and explore available healthcare options. While occasional changes in the menstrual cycle can happen, persistent or severe symptoms should not be ignored. A proper medical assessment can help identify underlying conditions and guide appropriate treatment.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 mt-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-950 leading-relaxed">
                <strong>Medical Assessment Principle:</strong> If you are searching for Menstrual Treatment in Puthanathani, it is important to choose a healthcare provider who understands women's health concerns and recognises when further investigation or specialist referral is needed. <strong>Homoeopathy may be considered as a complementary healthcare approach, but reliable scientific evidence has not established that homoeopathic medicines can treat or cure menstrual disorders or correct hormonal imbalances. Evidence-based medical care should not be delayed or replaced.</strong>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Key Takeaways on Menstrual Health
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential medical facts regarding menstrual cycle biology, diagnostic evaluation, and evidence-based clinical care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 font-bold text-[#1E2559] text-base mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#1E2559]/10 text-[#1E2559] text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {item.title}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Menstrual Health Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <Heart className="w-3.5 h-3.5" />
              PHYSIOLOGY & HORMONES
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Menstrual Health
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              The menstrual cycle is a natural biological process controlled by complex hormonal feedback loops involving the brain (hypothalamus and pituitary) and the ovaries, mainly mediated by oestrogen and progesterone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose-600" />
                Cycle Counting
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A menstrual cycle is counted from the first day of one period (Day 1) to the first day of the next period. Normal cycle length typically ranges between 21 and 35 days, with 2 to 7 days of bleeding.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                Life Transitions
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Cycle length and bleeding patterns naturally vary between individuals and shift during key reproductive milestones: adolescence, after childbirth, during lactation, and as perimenopause approaches.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Temporary vs. Persistent
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Temporary changes occur due to emotional stress, acute illness, travel, weight changes, or intense workouts. However, repeated irregularities or worsening pain indicate a need for professional evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* 6 Common Menstrual Problems */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" />
              CLINICAL SYMPTOM PATTERNS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Common Menstrual Problems in Women
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Menstrual problems can occur in different forms. Recognising the symptoms can help women decide when to seek professional medical advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#1E2559]">{prob.title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                      {prob.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{prob.desc}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-[#1E2559]">Clinical Guidance:</strong> {prob.clinicalNote}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Causes of Menstrual Problems */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Compass className="w-3.5 h-3.5" />
              ROOT CAUSES & AETIOLOGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Causes of Menstrual Problems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Menstrual irregularities can stem from several hormonal, structural, or environmental factors. A healthcare professional considers age, medical history, symptoms, and reproductive goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {causesList.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559] mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    {cause.title}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{cause.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Proper Diagnosis Matters */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-2">
              <AlertCircle className="w-3.5 h-3.5" />
              DIAGNOSTIC PROTOCOLS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Menstrual Treatment in Puthanathani: Why Proper Diagnosis Matters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Women searching for Menstrual Treatment in Puthanathani should understand that treatment depends entirely on the underlying cause. The same symptom (such as irregular cycles or pelvic pain) can occur across vastly different conditions. Treating symptoms without identifying the cause may delay critical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diagnosticSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-[#059669] block mb-1">
                  Investigation Step {idx + 1}
                </span>
                <h3 className="font-bold text-[#1E2559] text-base mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Puthanathani Consultation Scope:</strong> A <strong className="text-[#1E2559]">Menstrual Disorder Consultation in Puthanathani</strong> helps women determine which laboratory tests or imaging scans are appropriate and coordinates timely referral to a qualified gynaecologist.
          </div>
        </section>

        {/* Evidence-Based Treatment Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              CONVENTIONAL EVIDENCE-BASED MEDICINE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Evidence-Based Treatment Options for Menstrual Problems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Evidence-based medical management is customized according to the formal diagnosis, severity of symptoms, age, and individual reproductive plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {evidenceTreatments.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#1E2559] text-base">{item.title}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Homeopathic Treatment in Puthanathani */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
              <Info className="w-3.5 h-3.5" />
              SCIENTIFIC TRANSPARENCY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Homeopathic Treatment for Menstrual Problems in Puthanathani
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Women exploring Homeopathic Treatment for Menstrual Problems in Puthanathani may be interested in an individualised complementary approach to healthcare. Homoeopathy traditionally considers reported symptoms, emotional well-being, and lifestyle when selecting remedies.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <strong className="text-[#1E2559] text-base block">
                  Scientific Evidence Disclosure & Limitations:
                </strong>
                <p>
                  Current reliable scientific evidence <strong>does not establish that homoeopathic medicines can regulate menstrual cycles, correct hormonal imbalances, treat PCOS, shrink uterine fibroids, or cure endometriosis.</strong>
                </p>
                <p>
                  A responsible <strong>Homeopathy Clinic for Menstrual Problems in Puthanathani</strong> must communicate these scientific realities transparently and support evidence-based medical treatment.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-[#1E2559] text-sm mb-3">
                Guidance for Women Considering Complementary Consultations:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Obtain an appropriate medical assessment and pelvic evaluation for persistent symptoms.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Discuss any complementary approaches with your qualified healthcare provider.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Never stop or adjust prescribed conventional medicines without medical advice.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Do not delay pregnancy testing or gynaecological investigations for abnormal bleeding.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect from a Women's Health Consultation */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Calendar className="w-3.5 h-3.5" />
              APPOINTMENT OVERVIEW
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What to Expect from a Women's Health Consultation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A <strong className="text-[#1E2559]">Homeopathic Doctor for Women's Health in Puthanathani</strong> conducts a thorough, confidential review of your menstrual history, symptom patterns, and overall well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#059669]" />
                Key Discussion Topics:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Age when menstruation first started (menarche).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Regularity, cycle interval, and duration of bleeding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Pain severity, cramping location, and response to painkillers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Bleeding quantity, pad usage, and presence of blood clots.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Premenstrual mood changes, sleep, stress, and energy levels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Previous obstetric and gynaecological investigations.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2 mb-2">
                  <UserCheck className="w-4 h-4 text-purple-600" />
                  Diagnostic Boundaries & Referrals
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  A homoeopathic consultation does not replace a physical gynaecological examination, cervical pap smear, or diagnostic pelvic ultrasound when clinically indicated.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A responsible <strong className="text-[#1E2559]">Women's Health Doctor in Puthanathani</strong> ensures that patients with persistent or concerning symptoms receive appropriate medical evaluation and specialist care.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>Confidential Consultations:</strong> Both in-clinic appointments at our Puthanathani / Kuttippuram centres and secure online teleconsultations are conducted with absolute privacy and empathy.
              </div>
            </div>
          </div>
        </section>

        {/* 10 Lifestyle Tips */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-2">
              <Utensils className="w-3.5 h-3.5" />
              PRACTICAL SELF-CARE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Tips for Maintaining Better Menstrual Health
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Healthy daily habits support overall hormonal balance and can help manage cyclical discomfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lifestyleTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed border border-slate-200">
            <em>Menstrual Diary Recommendation:</em> A menstrual tracking app or physical notebook recording cycle dates, bleeding days, flow volume, and pain intensity provides invaluable clinical information during medical consultations.
          </div>
        </section>

        {/* Choosing a Menstrual Health Clinic */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              PATIENT SELECTION STANDARDS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Choosing a Menstrual Health Clinic in Puthanathani
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Selecting the right healthcare provider is essential when dealing with recurring period irregularities or pain. Women searching for a <strong className="text-[#1E2559]">Menstrual Health Clinic in Puthanathani</strong> should prioritize transparency, privacy, and clear clinical boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {providerCriteria.map((crit, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-[#1E2559] text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  {crit.title}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{crit.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong>Ethical Clinical Standard:</strong> A Women's Health Homeopathy Clinic in Puthanathani should provide transparent information and avoid guaranteeing results for conditions that require medical diagnosis or specialist management.
          </div>
        </section>

        {/* Emergency Red Flags */}
        <section className="bg-rose-50/70 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              URGENT MEDICAL RED FLAGS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-rose-950">
              When Should You Seek Immediate Medical Attention?
            </h2>
            <p className="text-rose-900/80 text-sm sm:text-base mt-2">
              Some menstrual and pelvic symptoms require prompt emergency assessment to prevent complications or blood loss shock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {redFlags.map((rf, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-rose-200 shadow-xs flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {rf}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-rose-100/70 border border-rose-300 text-xs sm:text-sm text-rose-950 leading-relaxed font-semibold">
            Seek urgent hospital medical attention if you experience very heavy bleeding with fainting, sudden severe pelvic pain (especially with pregnancy possibility), or high fever with pelvic tenderness.
          </div>
        </section>

        {/* 10 Interactive FAQs */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              PATIENT FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Period Problems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Answers to common questions regarding irregular cycles, severe cramps, PCOS, heavy flow, and evidence-based care.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-[#1E2559] text-sm sm:text-base">
                      {idx + 1}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#059669]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Booking Consultation Section */}
        <section
          id="booking-section"
          className="bg-gradient-to-br from-[#1E2559] to-[#2B3577] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl space-y-8"
        >
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase border border-emerald-500/30">
              PUTHANATHANI WOMEN'S HEALTH DESK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Consult a Women's Health Professional Near Puthanathani
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Menstrual problems can affect physical comfort, emotional well-being and everyday routines. Understanding the possible causes and seeking timely medical advice can help women make informed decisions about their reproductive health.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If you are searching for <strong className="text-white">Period Problems Treatment in Puthanathani</strong>, <strong className="text-white">Menstrual Disorder Consultation in Puthanathani</strong> or a <strong className="text-white">Homeopathic Doctor for Women's Health in Puthanathani</strong>, choose a healthcare provider who values proper assessment, clear communication and responsible treatment guidance.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A consultation can help you discuss your symptoms, understand whether further investigations are needed and identify suitable next steps. Homoeopathy may be discussed as a complementary approach, but it should not replace evidence-based treatment for menstrual disorders or delay necessary gynaecological care.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 text-[#1E2559]">
            <h3 className="text-xl font-bold mb-4 text-[#1E2559]">
              Schedule Your Confidential Women's Health Consultation
            </h3>
            <AppointmentBookingEngine />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-slate-300 text-xs">Puthanathani Clinic Desk:</div>
                <a href={`tel:${phonePrimary}`} className="font-bold text-white hover:underline">
                  {phonePrimary}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-slate-300 text-xs">Direct Line:</div>
                <a href={`tel:${phoneSecondary}`} className="font-bold text-white hover:underline">
                  {phoneSecondary}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-slate-300 text-xs">WhatsApp Enquiries:</div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-300 hover:underline"
                >
                  Chat with Clinic
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Clinic Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <Heart className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Qualified Women's Care</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, menstrual health assessments, and compassionate lifestyle guidance across Puthanathani and Kuttippuram.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Consultation Hours</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Monday to Sunday: 9:00 AM – 7:30 PM.<br />
              Both in-clinic appointments at Puthanathani / Kuttippuram and confidential online teleconsultations are available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Clinic Locations</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              <strong>Puthanathani Clinic:</strong> Main Road, Puthanathani, Malappuram District, Kerala.<br />
              <strong>Kuttippuram Clinic:</strong> Near Railway Station, Tirur-Kuttippuram Road, Malappuram.
            </p>
            <div className="pt-1 text-xs text-slate-500 font-medium">
              Daily OPD Hours: 9:00 AM – 7:30 PM
            </div>
          </div>
        </section>

        {/* Cross-linking Related Regional Guides */}
        <section className="pt-8">
          <RegionalRelatedGuides currentGuideKey="menstrual-doctor-puthanathani" />
        </section>
      </div>
    </div>
  );
};
