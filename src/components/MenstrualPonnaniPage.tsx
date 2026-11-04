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
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const MenstrualPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for menstrual health and period problems (Ponnani patient guide).'
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
    navigateToBookingWithReason('Menstrual Health Consultation - Ponnani', 'online');
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
      title: 'Spectrum of Menstrual Problems',
      desc: 'Menstrual problems include irregular periods, painful menstruation, heavy bleeding and missed periods.',
    },
    {
      title: 'Multifactorial Causes',
      desc: 'Hormonal changes, PCOS, thyroid conditions, stress and reproductive disorders can affect menstrual cycles.',
    },
    {
      title: 'Do Not Ignore Severe Symptoms',
      desc: 'Persistent period pain or unusually heavy bleeding should not be ignored.',
    },
    {
      title: 'Value of Cycle Tracking',
      desc: 'Tracking menstrual dates, bleeding patterns and associated symptoms can help during medical consultation.',
    },
    {
      title: 'Targeted Management',
      desc: 'Treatment depends on the underlying cause of the menstrual problem.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homeopathy has not been proven to cure menstrual disorders or correct hormonal imbalances.',
    },
    {
      title: 'Timely Clinical Evaluation',
      desc: 'Early medical evaluation can help identify conditions that require specific treatment.',
    },
  ];

  // 5 Common Menstrual Problems
  const commonProblems = [
    {
      number: '01',
      title: 'Irregular Periods',
      desc: 'Irregular periods occur when menstrual cycles frequently vary in length or become unpredictable.',
      factors: [
        'Hormonal fluctuations during puberty or perimenopause',
        'Polycystic ovary syndrome (PCOS)',
        'Thyroid disorders (hypothyroidism or hyperthyroidism)',
        'Significant weight changes and restrictive diets',
        'Excessive physical activity or athletic training',
        'Stress and sleep disturbances',
      ],
    },
    {
      number: '02',
      title: 'Painful Periods (Dysmenorrhoea)',
      desc: 'Painful menstruation can cause cramps in the lower abdomen and pelvis, interfering with daily activities.',
      factors: [
        'Lower back pain and pelvic heaviness',
        'Headaches and migraine-like throbbing',
        'Nausea, vomiting, and diarrhoea',
        'Persistent fatigue and sleep disruptions',
        'Underlying conditions like endometriosis or adenomyosis',
        'Uterine fibroids or pelvic inflammatory changes',
      ],
    },
    {
      number: '03',
      title: 'Heavy Menstrual Bleeding (Menorrhagia)',
      desc: 'Heavy menstrual bleeding involves excessive blood loss or prolonged bleeding that interferes with daily life.',
      factors: [
        'Frequently changing sanitary products (every 1 to 2 hours)',
        'Passing large blood clots larger than a coin',
        'Bleeding lasting longer than seven continuous days',
        'Fatigue, weakness, breathlessness, and dizziness',
        'Signs of iron-deficiency anaemia requiring medical blood tests',
        'Uterine fibroids, endometrial polyps, or hormonal imbalances',
      ],
    },
    {
      number: '04',
      title: 'Missed Periods (Amenorrhoea)',
      desc: 'A missed period can occur due to pregnancy, stress, hormonal shifts, intense exercise, or underlying medical conditions.',
      factors: [
        'Early pregnancy (taking an appropriate pregnancy test is a vital first step)',
        'Elevated physiological or emotional stress',
        'Hormonal dysfunction affecting the hypothalamic-pituitary-ovarian axis',
        'Low body fat percentage and rapid weight loss',
        'Prolactinoma or other endocrine gland disorders',
        'Repeated missed periods require professional diagnostic assessment',
      ],
    },
    {
      number: '05',
      title: 'Premenstrual Syndrome (PMS & PMDD)',
      desc: 'Physical and emotional symptoms that develop before menstruation and resolve once bleeding commences.',
      factors: [
        'Breast tenderness and abdominal bloating',
        'Tension headaches, joint aches, and fluid retention',
        'Mood changes, irritability, anxiety, and tearfulness',
        'Intense food cravings and digestive shifts',
        'Severe emotional impairment indicating Premenstrual Dysphoric Disorder (PMDD)',
        'PMDD requires formal medical and psychiatric evaluation',
      ],
    },
  ];

  // Causes of Menstrual Problems
  const causesList = [
    {
      title: 'Hormonal Imbalance',
      desc: 'Hormones regulate ovulation and menstruation. Changes in estrogen and progesterone levels may cause irregular periods, missed cycles or abnormal bleeding.',
    },
    {
      title: 'Polycystic Ovary Syndrome (PCOS)',
      desc: 'PCOS is a hormonal and metabolic condition that can affect ovulation and menstrual regularity. Common symptoms include irregular or infrequent periods, acne, excess facial or body hair, hair thinning, weight concerns and difficulty becoming pregnant.',
    },
    {
      title: 'Thyroid Disorders',
      desc: 'Both an underactive thyroid (hypothyroidism) and an overactive thyroid (hyperthyroidism) can affect menstrual cycles. Women may also experience fatigue, weight changes, hair thinning and fluctuations in energy levels.',
    },
    {
      title: 'Endometriosis',
      desc: 'Endometriosis occurs when tissue similar to the lining of the uterus grows outside the uterus on the ovaries, fallopian tubes, or pelvic peritoneum, causing severe menstrual pain, chronic pelvic discomfort, pain during intercourse and fertility difficulties.',
    },
    {
      title: 'Uterine Fibroids',
      desc: 'Fibroids are non-cancerous growths that develop in or around the muscular uterine wall. Depending on their size and location, they may contribute to heavy menstrual bleeding, pelvic pressure and painful periods.',
    },
    {
      title: 'Stress & Lifestyle Changes',
      desc: 'Emotional stress, inadequate sleep, restrictive diets, significant weight changes and excessive exercise directly influence the brain-ovary signalling axis, disrupting hormonal regulation and menstrual regularity.',
    },
  ];

  // 6 Clinic Selection Criteria
  const selectionCriteria = [
    {
      number: '01',
      title: 'Professional Qualifications',
      desc: 'Verify that the practitioner holds recognised, accredited medical qualifications (such as BHMS) and is formally registered with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Patient Privacy & Dignity',
      desc: 'Menstrual and reproductive health discussions should take place in a respectful, confidential, and comfortable clinical environment where patients feel safe.',
    },
    {
      number: '03',
      title: 'Detailed Consultation Process',
      desc: 'A practitioner should listen carefully to the patient’s concerns, conduct a meticulous history of bleeding dates and pain, and assess overall health without rushing.',
    },
    {
      number: '04',
      title: 'Medical Awareness & Diagnostic Triage',
      desc: 'The healthcare provider should clearly recognise symptoms and red flags that require pelvic ultrasound, blood tests, or gynaecological investigation.',
    },
    {
      number: '05',
      title: 'Transparent Guidance',
      desc: 'Treatment limitations, expected outcomes, the evidence base, and conventional healthcare options should be explained clearly without unscientific claims.',
    },
    {
      number: '06',
      title: 'Appropriate Specialist Referral',
      desc: 'The clinic must maintain collaborative referral links to qualified gynaecologists, diagnostic imaging centres, and surgeons when underlying organic conditions are suspected.',
    },
  ];

  // 6 Lifestyle Tips
  const lifestyleTips = [
    {
      number: '1',
      title: 'Follow a Balanced Diet',
      desc: 'Include vegetables, fruits, whole grains, protein-rich foods, and healthy fats in your daily meals. Women with heavy bleeding should emphasize iron-rich foods (spinach, lentils, dates, jaggery) to prevent nutritional anaemia.',
    },
    {
      number: '2',
      title: 'Stay Physically Active',
      desc: 'Regular moderate physical activity supports metabolic function, insulin sensitivity, cardiovascular health, and emotional well-being. Walking, swimming, and yoga can help relieve pelvic muscle tension.',
    },
    {
      number: '3',
      title: 'Maintain Healthy Sleep Habits',
      desc: 'Adequate, restorative sleep (7–8 hours nightly) supports endocrine health and helps the pituitary gland regulate reproductive hormones. Maintain regular bedtimes and wake times.',
    },
    {
      number: '4',
      title: 'Manage Stress Effectively',
      desc: 'Chronic stress spikes cortisol, which suppresses ovarian steroidogenesis. Breathing exercises, gentle mindfulness, hobbies, and adequate leisure time help modulate the sympathetic nervous system.',
    },
    {
      number: '5',
      title: 'Track Your Menstrual Cycle',
      desc: 'Maintain an accurate record of the first day of each period, bleeding duration, intensity (number of pads used), pain levels, and any unusual symptoms like spotting between cycles.',
    },
    {
      number: '6',
      title: 'Avoid Self-Medication',
      desc: 'Never take hormonal pills, tranexamic acid, unprescribed painkillers, or commercial herbal concoctions without understanding their medical indications and potential risks.',
    },
  ];

  // 10 Detailed FAQs from user prompt
  const faqs = [
    {
      q: 'Where can I find a homeopathic doctor near Ponnani for period problems?',
      a: 'You can look for qualified homeopathic practitioners and women\'s healthcare providers in Ponnani and surrounding areas, including Kuttippuram (15–20 minutes from Ponnani) and Puthanathani. Check professional qualifications (such as BHMS), state medical council registration, and consultation services before booking an appointment. Dr. Anjali Chandrasekhar provides confidential in-clinic consultations at Kuttippuram and Puthanathani, as well as secure online video visits.',
    },
    {
      q: 'What is the best treatment for irregular periods?',
      a: 'Treatment depends on the underlying cause. Conditions such as PCOS, thyroid disorders, early pregnancy, hyperprolactinemia, high stress, and perimenopause require completely different clinical approaches. A formal medical evaluation—including hormonal blood panels and pelvic ultrasonography—helps determine the appropriate evidence-based treatment.',
    },
    {
      q: 'Can homeopathy cure irregular periods?',
      a: 'There is no reliable scientific evidence that homeopathy cures irregular periods or permanently corrects hormonal imbalances. While some women choose homeopathic consultations for individualized constitutional discussions and lifestyle guidance, women with persistent menstrual irregularities should obtain a formal gynaecological evaluation.',
    },
    {
      q: 'When should I consult a menstrual problems doctor?',
      a: 'Consult a healthcare professional if you experience repeated irregular cycles (<21 days or >35 days), heavy bleeding lasting longer than 7 days, severe cramps that disrupt normal work or studies, missed periods, or bleeding between periods and after intercourse.',
    },
    {
      q: 'Are painful periods normal?',
      a: 'Mild cramping during the first day or two of menstruation is common due to prostaglandin release. However, severe pain that interferes with daily activities, causes nausea and vomiting, or becomes progressively worse is not normal and should be investigated for conditions such as endometriosis, adenomyosis, or fibroids.',
    },
    {
      q: 'Can PCOS cause irregular periods?',
      a: 'Yes. Polycystic ovary syndrome (PCOS) is a common endocrine disorder characterized by ovulatory dysfunction, androgen excess, and insulin resistance. It frequently leads to irregular, delayed, or absent menstrual cycles. Medical diagnosis and tailored long-term metabolic management are essential.',
    },
    {
      q: 'Can stress affect menstrual cycles?',
      a: 'Yes. Significant physical, nutritional, or emotional stress stimulates the hypothalamic-pituitary-adrenal (HPA) axis, elevating cortisol and suppressing the pulsatile release of GnRH. This can disrupt ovulation and lead to delayed, skipped, or irregular periods.',
    },
    {
      q: 'What should I bring for a menstrual disorder consultation?',
      a: 'Bring your previous medical reports, recent pelvic ultrasound (USG) scans, thyroid and hormonal blood test results, a list of current medications or supplements, and an accurate log of your recent menstrual dates, cycle lengths, and bleeding patterns.',
    },
    {
      q: 'Can lifestyle changes improve menstrual health?',
      a: 'Balanced nutrition, regular physical activity, adequate sleep, and stress management support general metabolic and endocrine health. However, while lifestyle modifications provide a foundational benefit, they alone may not treat underlying gynaecological conditions like fibroids or severe endometriosis.',
    },
    {
      q: 'Is heavy menstrual bleeding a serious concern?',
      a: 'Yes. Heavy bleeding can lead to chronic iron-deficiency anaemia, causing severe fatigue, weakness, dizziness, and shortness of breath. It may also indicate an underlying reproductive condition like uterine fibroids, endometrial polyps, or adenomyosis. Medical assessment is strongly recommended.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Periods Problem Doctor Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="womens-health-care"
        categoryLabel="Women's Health Care"
        pageTitle="Homeopathic Doctor Near Ponnani for Periods Problem"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<Heart className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Women's Health Guide • Ponnani Patients"
        title="Homeopathic Doctor Near Ponnani for Periods Problem"
        subtitle="Confidential clinical guidance and evidence-informed consultations for women in Ponnani, Edappal, and Malappuram experiencing irregular cycles, severe period pain, heavy bleeding, PCOS, and menstrual discomfort."
        metrics={[
          { label: 'Condition Focus', value: 'Periods & PCOS' },
          { label: 'Clinical Assessment', value: 'History & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Women's Health & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential women's health assessments, menstrual cycle evaluations, lifestyle counseling, and evidence-grounded constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Menstrual health is an important part of a woman's overall well-being. A regular menstrual cycle is influenced by hormonal changes, reproductive health, lifestyle habits, nutrition and general physical condition. However, many women experience menstrual problems such as irregular periods, painful menstruation, excessive bleeding, missed periods and premenstrual discomfort. These symptoms can affect everyday activities, emotional well-being, education, professional responsibilities and quality of life.
          </p>
          <p>
            If you are searching for a <strong>Homeopathic Doctor Near Ponnani for Periods Problem</strong>, understanding your symptoms and seeking appropriate medical guidance are important first steps. Menstrual changes can occur for several reasons, including hormonal imbalances, polycystic ovary syndrome (PCOS), thyroid disorders, endometriosis and other reproductive health conditions.
          </p>
          <p>
            Women looking for <strong>Menstrual Treatment in Ponnani</strong> may prefer a consultation that gives them an opportunity to discuss their menstrual history, symptoms, lifestyle and overall health concerns. Homeopathy is an alternative system of medicine that some women consider for individualised healthcare consultations. However, scientific evidence has not established homeopathy as an effective treatment for menstrual disorders or their underlying causes. It should not replace gynaecological assessment or evidence-based medical treatment.
          </p>
          <p>
            This comprehensive guide explains common period problems, their possible causes, symptoms, medical evaluation, treatment options and the importance of maintaining good menstrual health.
          </p>
        </div>
      </section>

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
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
                Key Takeaways for Patients in Ponnani
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-white border border-[#D8E1F5] hover:border-[#E11D48]/40 hover:shadow-xs transition-all flex flex-col justify-between"
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

      {/* Section 1: Understanding Menstrual Health */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PHYSIOLOGY & HORMONAL REGULATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Menstrual Health
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The menstrual cycle is a natural biological process controlled by hormones that prepare the body for a possible pregnancy. The cycle begins on the first day of menstrual bleeding and continues until the day before the next period starts.
            </p>
            <p>
              A typical menstrual cycle lasts approximately <strong>21 to 35 days</strong> in adults, although some variation is normal. Menstrual bleeding commonly lasts between <strong>two and seven days</strong>.
            </p>
            <p>
              Hormones such as <strong>oestrogen and progesterone</strong> regulate the menstrual cycle. Changes in these hormones influence the development of the uterine lining, ovulation and menstruation.
            </p>
            <p>
              A change in menstrual patterns does not always indicate a serious health problem. However, repeated irregularities, severe pain or unusual bleeding may require medical investigation. Women experiencing persistent symptoms can consider a <strong>Menstrual Disorder Consultation in Ponnani</strong> to discuss their concerns with an appropriately qualified healthcare professional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
                <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                  Normal Cycle Length
                </span>
                <p className="text-sm font-bold text-[#1E2559]">21 to 35 Days</p>
                <p className="text-xs text-[#64748B]">Counted from day 1 of one period to day 1 of the next period.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
                <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                  Normal Bleeding Duration
                </span>
                <p className="text-sm font-bold text-[#1E2559]">2 to 7 Days</p>
                <p className="text-xs text-[#64748B]">Average blood loss is about 30 to 40 ml per cycle.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
                <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                  Hormonal Drivers
                </span>
                <p className="text-sm font-bold text-[#1E2559]">Estrogen &amp; Progesterone</p>
                <p className="text-xs text-[#64748B]">Regulated by pituitary FSH and LH secretion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Common Menstrual Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL CONDITIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Menstrual Problems Experienced by Women
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Menstrual problems can develop at different stages of life, including adolescence, reproductive adulthood and the years approaching menopause.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                    Condition {prob.number}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg sm:text-xl">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {prob.desc}
                </p>

                <div className="pt-3 border-t border-[#F1F5F9] grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {prob.factors.map((factor, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What Causes Menstrual Problems? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              ETIOLOGY & UNDERLYING DISORDERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What Causes Menstrual Problems?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Menstrual irregularities and discomfort can develop due to several factors. Identifying the underlying cause is essential for choosing appropriate treatment when seeking Period Problems Treatment in Ponnani.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {causesList.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#E11D48]/40 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E11D48]/15 text-[#E11D48] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {cause.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-8">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Homeopathic Doctor for Women's Health in Ponnani: What to Expect */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CONSULTATION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathic Doctor for Women's Health in Ponnani: What to Expect
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Women looking for a <strong>Homeopathic Doctor for Women's Health in Ponnani</strong> may want to discuss menstrual irregularities, period pain and other reproductive health concerns in a comfortable consultation setting.
            </p>
            <p>
              A homeopathic consultation may involve discussing:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Menstrual cycle history and dates',
                'Frequency and duration of bleeding episodes',
                'Bleeding patterns and volume (clots, pad frequency)',
                'Period-related discomfort, cramping, and radiating pain',
                'Sleep patterns, appetite, and dietary habits',
                'Stress levels and personal or professional lifestyle factors',
                'Previous medical and gynaecological conditions',
                'Current medicines, birth control, and treatments',
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#D8E1F5] flex items-center gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="pt-2">
              A detailed discussion can help document the patient's concerns and determine whether further medical assessment is necessary. However, homeopathy has not been demonstrated to reliably treat PCOS, endometriosis, fibroids, thyroid disorders or other causes of menstrual irregularities. Patients should not discontinue prescribed hormonal medicines or other treatments without discussing this with their treating doctor.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Homeopathic Treatment for Menstrual Problems in Ponnani */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY & EVIDENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathic Treatment for Menstrual Problems in Ponnani
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for <strong>Homeopathic Treatment for Menstrual Problems in Ponnani</strong> may be interested in an individualised approach to discussing their symptoms and general health.
            </p>
            <p>
              Homeopathy uses remedies selected according to its own traditional principles. Some practitioners consider a patient's physical symptoms, emotional experiences and general health history when discussing treatment.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-[#FFF1F2] border-2 border-[#E11D48]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#E11D48] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#9F1239] text-base sm:text-lg">
                    Important Scientific Evidence & Safety Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
                    There is insufficient reliable scientific evidence that homeopathic remedies can regulate menstrual cycles, balance reproductive hormones, reduce menstrual blood loss or treat underlying gynaecological disorders. Women should be cautious of treatment claims promising guaranteed results, permanent hormonal correction or a cure for all menstrual problems.
                  </p>
                </div>
              </div>
            </div>

            <p className="pt-2 font-semibold text-[#1E2559]">
              A responsible healthcare approach should prioritise:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Understanding the menstrual symptoms thoroughly',
                'Identifying possible underlying medical conditions',
                'Recommending appropriate investigations when required',
                'Explaining evidence-based treatment options',
                'Referring patients to a gynaecologist when necessary',
                'Monitoring persistent or worsening symptoms',
              ].map((pri, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-center gap-2 text-xs text-[#334155]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{pri}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How to Choose a Homeopathy Clinic for Menstrual Problems in Ponnani */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              How to Choose a Homeopathy Clinic for Menstrual Problems in Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Choosing a healthcare provider is an important decision, particularly when discussing sensitive women's health concerns. A Women's Health Homeopathy Clinic in Ponnani should provide responsible consultation without making unsupported promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {selectionCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/40 transition-all space-y-2"
              >
                <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                  {crit.number}
                </span>
                <h3 className="font-bold text-[#1E2559] text-base">
                  {crit.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {crit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: When Should You Consult a Women's Health Doctor? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL TRIAGE & RED FLAGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Consult a Women's Health Doctor?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Not every menstrual variation requires medical treatment. However, certain symptoms should always be evaluated by a healthcare professional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'Periods that repeatedly occur less than 21 days apart or more than 35 days apart',
              'Menstrual bleeding lasting longer than seven continuous days',
              'Very heavy bleeding (soaking through a pad or tampon every hour)',
              'Severe menstrual cramps that do not respond to common pain relief',
              'Periods that suddenly become irregular after being consistent for years',
              'Bleeding between menstrual cycles (intermenstrual bleeding)',
              'Bleeding after sexual intercourse (postcoital bleeding)',
              'Missed periods without an identified reason',
              'Persistent chronic pelvic pain outside of menstrual bleeding',
              'Difficulty becoming pregnant after 12 months of regular unprotected intercourse',
            ].map((warn, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                <AlertCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <span>{warn}</span>
              </div>
            ))}
          </div>

          {/* Urgent Emergency Red Flags */}
          <div className="p-6 rounded-2xl bg-[#FFF1F2] border-2 border-[#FECDD3] space-y-3 mt-6">
            <div className="flex items-center gap-2 text-sm font-bold text-[#9F1239]">
              <ShieldAlert className="w-5 h-5 text-[#E11D48]" />
              <span>Urgent Medical Emergency Warning</span>
            </div>
            <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
              Seek urgent medical attention if you experience <strong>very heavy bleeding accompanied by dizziness, fainting, breathlessness or severe weakness</strong>. Severe sudden pelvic pain, particularly when pregnancy is possible, also requires urgent emergency assessment because it may indicate life-threatening conditions such as an <strong>ectopic pregnancy</strong> or ovarian torsion.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Lifestyle Tips for Better Menstrual Health */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              SUPPORTIVE SELF-CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Lifestyle Tips for Better Menstrual Health
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Healthy lifestyle habits can support general well-being and may help manage some menstrual symptoms. They do not replace medical treatment for underlying reproductive disorders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {lifestyleTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/40 transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E11D48]/15 text-[#E11D48] font-bold text-sm flex items-center justify-center">
                    {tip.number}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Book a Women's Health Consultation Near Ponnani */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINIC OVERVIEW & ACCESSIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book a Women's Health Consultation Near Ponnani
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Menstrual health concerns should never be ignored or treated as something women simply have to tolerate. Persistent irregular periods, painful menstruation, excessive bleeding and other reproductive health symptoms deserve appropriate attention.
            </p>
            <p>
              If you are searching for a <strong>Homeopathic Doctor Near Ponnani for Periods Problem</strong>, choose a qualified practitioner who listens to your concerns, explains available healthcare options and recognises when specialist medical assessment is necessary. Whether you need information about <strong>Menstrual Treatment in Ponnani</strong>, <strong>Period Problems Treatment in Ponnani</strong>, or a <strong>Period Pain Consultation in Ponnani</strong>, taking the first step towards professional guidance can help you understand your health better.
            </p>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <MapPin className="w-4 h-4 text-[#E11D48]" />
                  <span>Kuttippuram Clinic (Near Ponnani)</span>
                </div>
                <p className="text-xs text-[#64748B]">
                  Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Keralam 679571
                </p>
                <p className="text-xs text-[#303A88] font-semibold">
                  Distance from Ponnani: ~20 km (25–30 mins drive)
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <Clock className="w-4 h-4 text-[#E11D48]" />
                  <span>Clinic Timings & Booking</span>
                </div>
                <p className="text-xs text-[#64748B]">
                  Monday to Saturday: 9:30 AM – 6:30 PM<br />
                  Sunday: 9:30 AM – 1:30 PM (By prior appointment)
                </p>
                <p className="text-xs text-[#10B981] font-semibold">
                  Confidential online video visits available across Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions (10 FAQs) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              WOMEN'S HEALTH Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Period Problems
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Common questions answered by Dr. Anjali Chandrasekhar (BHMS) regarding menstrual health, irregular cycles, and medical care.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-[#1E2559] hover:bg-[#F8FAFD] transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] shrink-0 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 11: Related Regional Guides */}
      <RegionalRelatedGuides
        currentCity="Ponnani"
        currentCondition="Menstrual Health & Periods"
        categoryView="womens-health-care"
      />

      {/* Section 12: Integrated Appointment Booking Engine */}
      <section id="booking-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CONFIDENTIAL DOCTOR CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Book Your Menstrual Health Consultation with Dr. Anjali
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto">
              Choose a private online video consultation from home in Ponnani, or schedule an in-person clinic visit at Kuttippuram or Puthanathani.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-lg">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>
    </div>
  );
};
