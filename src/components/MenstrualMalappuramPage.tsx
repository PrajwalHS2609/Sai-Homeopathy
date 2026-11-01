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
  Calendar,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  Sparkles,
  BookOpen,
  FileText,
  AlertCircle,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const MenstrualMalappuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
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
    navigateToBookingWithReason('Menstrual Health Consultation (Malappuram)', 'online');
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
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Menstrual Health & Cycle Care – Malappuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="womens-health-care"
        categoryLabel="Women's Health & Gynecological Care"
        pageTitle="Menstrual Homeopathic Treatment in Malappuram"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Heart className="w-3.5 h-3.5 text-[#FDA4AF]" />}
        badgeText="Women's Health Guide • Malappuram Patient Resource"
        title="Menstrual Homeopathic Treatment in Malappuram"
        subtitle="Comprehensive clinical guidance on irregular periods, dysmenorrhea, menorrhagia, PCOS, and evidence-grounded gynecological triage for women across Malappuram."
        metrics={[
          { label: 'Condition Focus', value: 'Cycle & Hormonal Care' },
          { label: 'Diagnostic Standard', value: 'Labs & Ultrasound' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Women's Constitutional Healthcare"
        doctorBio="10+ years of dedicated clinical experience assessing menstrual cycle irregularity, pelvic pain disorders, PCOS lifestyle guidance, and evidence-grounded constitutional care in Malappuram district."
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
                Important Key Takeaways for Patients in Malappuram
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

      {/* Section 1: Common Menstrual Health Concerns */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Menstrual Health Concerns
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Every woman's menstrual rhythm is unique, yet persistent deviations in frequency, duration, volume, or comfort warrant clinical evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {commonMenstrualConcerns.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/30 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#BE123C] uppercase tracking-wider">
                    Concern {c.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] bg-[#FFF1F2] px-2.5 py-0.5 rounded-full border border-[#FECDD3]">
                    {c.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {c.desc}
                </p>
                <div className="pt-2 border-t border-[#F1F5F9] text-xs font-medium text-[#303A88]">
                  {c.care}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Homeopathy Options: Evidence & Transparency */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Menstrual Homeopathic Treatment in Malappuram: Clinical Perspective
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Women searching for <strong>Menstrual Homeopathic Treatment in Malappuram</strong> often look for a gentle, empathetic setting to discuss menstrual and emotional well-being.
            </p>
            <p>
              Homeopathic consultations focus on holistic history-taking, exploring lifestyle, emotional stress, and constitutional patterns alongside physical symptoms.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Important Scientific Evidence Disclosure
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Reliable scientific evidence has not shown that homeopathy effectively treats menstrual disorders or corrects underlying endocrine pathologies (such as PCOS, hyperprolactinemia, thyroid dysfunction, or endometriosis). Homeopathy must never be used as a substitute for evidence-based gynecological care, imaging, or hormonal management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Possible Causes of Menstrual Symptoms */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              DIAGNOSTIC ETIOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Possible Causes of Menstrual Irregularities &amp; Period Pain
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Menstrual concerns arise from a complex interplay of endocrine hormones, reproductive anatomy, and metabolic factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonCauses.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#E11D48]/40 transition-all space-y-2"
              >
                <h3 className="font-bold text-[#1E2559] text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 border-t border-[#F1F5F9] text-xs font-semibold text-[#0D9488]">
                  Clinical Action: {item.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Evidence-Based Management */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              THERAPEUTIC STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Approaches to Menstrual Health
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88]/40 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#303A88] bg-[#EEF2FB] px-2.5 py-0.5 rounded-full border border-[#D8E1F5]">
                    Option {opt.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B]">
                    {opt.subtitle}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-base">
                  {opt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Consultation Checklist */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT PREPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Share During Your Menstrual Health Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Providing clear, detailed history helps the doctor evaluate whether hormonal assays, pelvic ultrasound, or specialist referral is required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {consultationChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#D8E1F5] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Red Flag Symptoms */}
      <section className="py-14 sm:py-16 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#DC2626]" />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
                SAFETY PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#991B1B]">
                When to Seek Immediate Emergency Medical Care
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#FCA5A5] shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-[#7F1D1D] font-medium leading-relaxed">
              If you experience any of the following symptoms, seek urgent hospital emergency medical care immediately:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#991B1B]">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Soaking through one or more sanitary pads every hour for 2+ consecutive hours</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Bleeding accompanied by fainting, dizziness, severe pallor, or shortness of breath</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Sudden, agonizing, unilateral lower abdominal or pelvic pain (ectopic risk)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Severe pelvic pain accompanied by high-grade fever and foul vaginal discharge</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Severe bleeding or cramping in a known or suspected early pregnancy</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Any vaginal bleeding occurring after menopause</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT EDUCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Menstrual Health in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Common questions answered transparently to help women make informed decisions about menstrual and reproductive care.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#1E2559] hover:bg-[#F8FAFD] transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className="w-4 h-4 text-[#E11D48] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-[#E11D48]' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Scheduling Booking Engine */}
      <section id="booking-section" className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CONFIDENTIAL APPOINTMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book Your Menstrual Health Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              In-clinic appointments at Kuttippuram and Puthanathani, or comfortable Online Video Consultations from home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="menstrual-treatment-malappuram" />
    </div>
  );
};
