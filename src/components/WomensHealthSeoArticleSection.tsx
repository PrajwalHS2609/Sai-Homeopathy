import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Sparkles,
  CheckCircle2,
  Heart,
  UserCheck,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  ExternalLink,
  HelpCircle,
  Stethoscope,
  Activity,
  Layers,
  Phone,
  MessageCircle,
} from 'lucide-react';

export const WomensHealthSeoArticleSection: React.FC = () => {
  const { setCurrentView, openBlogPost, blogPosts, navigateToBooking, settings } = useClinic();
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleNavigateBlog = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    const targetPost = blogPosts.find((p) => p.slug === slug);
    if (targetPost) {
      openBlogPost(targetPost);
    } else {
      setCurrentView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateTreatment = (
    e: React.MouseEvent,
    view:
      | 'womens-health-care'
      | 'respiratory-care'
      | 'skin-hair-care'
      | 'renal-thyroid-care'
      | 'neurological-care'
      | 'anorectal-vascular-care'
      | 'joint-musculoskeletal-care'
      | 'ophthalmic-eye-care'
  ) => {
    e.preventDefault();
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Where can I find a Women's Health Clinic in Malappuram?",
      answer:
        "You can research local healthcare providers, including Anjali Homoeo Clinic in Kuttippuram and Puthanathani, and verify their services and practitioner qualifications. For reproductive health concerns, confirm that you can access appropriate medical assessment and specialist referral when necessary.",
    },
    {
      question: 'What is included in a PCOS Consultation in Malappuram?',
      answer:
        'A medical assessment for suspected PCOS may involve reviewing menstrual history, symptoms, medical history, and relevant examination findings. Blood tests (LH, FSH, AMH, insulin) or imaging may be recommended when clinically appropriate.',
    },
    {
      question: 'When should I seek care for menstrual irregularities?',
      answer:
        'Seek medical advice if your periods become persistently irregular, stop unexpectedly, or involve unusually heavy bleeding or severe pain. Urgent symptoms require prompt medical assessment.',
    },
    {
      question: 'Do uterine fibroids always require treatment?',
      answer:
        'No. Some fibroids cause no symptoms and may only require monitoring. Others need medication, procedures, or surgery depending on their size, location, symptoms, and the patient\'s circumstances.',
    },
    {
      question: 'What should I discuss during a menopause consultation?',
      answer:
        'Discuss your symptoms, menstrual changes, sleep, mood, medical history, and any effect on your daily life. A qualified healthcare professional can help you understand the available evidence-based management options.',
    },
    {
      question: 'Can homeopathy treat PCOS, fibroids, or menopause symptoms?',
      answer:
        'Reliable scientific evidence has not established that homeopathy effectively treats PCOS, uterine fibroids, or menopause symptoms beyond placebo effects. It should not replace evidence-based treatment or delay medical evaluation.',
    },
  ];

  return (
    <section
      id="womens-health-clinic-malappuram-guide"
      aria-labelledby="womens-health-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F8] border border-[#FBCFE8] text-xs font-bold text-[#BE185D] uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>WOMEN'S REPRODUCTIVE HEALTH &amp; GYNECOLOGICAL CARE · MALAPPURAM</span>
          </div>

          <h2
            id="womens-health-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Women's Health Consultation in Malappuram
          </h2>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#64748B] pt-1 border-b border-[#EEF2FB] pb-4">
            <span className="flex items-center gap-1.5 font-medium text-[#1E2559]">
              <UserCheck className="w-4 h-4 text-[#45AC4B]" />
              <span>Medically Reviewed by Dr. Anjali Chandrasekhar (BHMS)</span>
            </span>
            <span className="hidden sm:inline opacity-40">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#303A88]" />
              <span>Kuttippuram &amp; Puthanathani, Malappuram, Kerala</span>
            </span>
            <span className="hidden sm:inline opacity-40">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#45AC4B]" />
              <span>Updated October 2026 · Clinical Patient Guide</span>
            </span>
          </div>
        </div>

        {/* Lead Introduction */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-[#475569] space-y-4 font-normal">
          <p>
            Women's health requires attention, understanding, and appropriate medical care at every stage of life. From menstrual irregularities and PCOS to uterine fibroids and menopause-related changes, women may experience different health concerns that affect their physical comfort, emotional well-being, and daily activities.
          </p>
          <p>
            If you are searching for a <strong className="text-[#1E2559] font-semibold">Homeopathic Clinic in Malappuram</strong>, understanding your symptoms and exploring appropriate healthcare options is an important first step. Anjali Homoeo Clinic provides a local point of contact for individuals seeking information about homeopathic consultations and available services in Malappuram, Kerala.
          </p>
          <p>
            Women's health concerns can have several underlying causes, and the right approach begins with an appropriate medical assessment. Symptoms such as irregular periods, severe menstrual cramps, persistent pelvic discomfort, and unexpected bleeding should not be ignored. A qualified healthcare professional can help determine whether further investigations, specialist care, or evidence-based treatment are needed.
          </p>
          <p>
            This page explains common women's health concerns, important considerations when choosing a healthcare provider, and what to know before arranging a consultation in Malappuram.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#FDF2F8] p-6 sm:p-8 border border-[#FBCFE8] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9D174D] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DB2777]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#9D174D] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#FBCFE8]">
              Women's Health Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span>Women's health concerns can change throughout adolescence, reproductive years, pregnancy, and menopause.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span><strong>PCOS Consultation in Malappuram</strong> may be relevant for women experiencing irregular periods, acne, or other symptoms associated with polycystic ovary syndrome.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span>Persistent menstrual irregularities, severe period pain, and unusual bleeding may require medical evaluation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span>Uterine fibroids and chronic pelvic discomfort should be assessed by an appropriate healthcare professional.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span>Menopause-related symptoms can vary considerably and may benefit from individualized, evidence-based medical guidance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span>When choosing a healthcare provider in Malappuram, consider professional qualifications, clear communication, and appropriate referral practices.</span>
            </li>
            <li className="flex items-start gap-2.5 md:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
              <span>Homeopathy has not been shown to effectively treat specific health conditions beyond placebo effects and should not replace evidence-based medical care.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Women's Health Consultation in Malappuram: Understanding Your Healthcare Needs */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Women's Health Consultation in Malappuram: Understanding Your Healthcare Needs
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Women's health includes reproductive health, menstrual well-being, hormonal changes, and health concerns that may develop at different stages of life. Symptoms can vary from mild and temporary to persistent problems that require further investigation.
            </p>
            <p>
              Choosing a healthcare provider in Malappuram involves considering the provider's qualifications, the type of consultation offered, and whether the provider recognizes when specialist assessment is necessary.
            </p>
            <p>
              Women may seek healthcare advice for irregular menstrual cycles, painful periods, PCOS symptoms, uterine fibroids, pelvic discomfort, or changes associated with perimenopause and menopause.
            </p>
            <p>
              These concerns should be evaluated according to their symptoms and possible causes. A careful medical history and appropriate investigations can help guide decisions about diagnosis and treatment.
            </p>
            <p>
              Anjali Homoeo Clinic is a local clinic to contact when enquiring about homeopathic consultation services in Malappuram. Before booking, confirm the available services, practitioner qualifications, and whether your specific concern falls within the clinic's scope of practice.
            </p>
          </div>
        </div>

        {/* Section 2: PCOS Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              PCOS Consultation in Malappuram
            </h3>
            <a
              href="/pcod-symptoms-causes-diagnosis-treatment/"
              onClick={(e) => handleNavigateBlog(e, 'pcod-symptoms-causes-diagnosis-treatment')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE185D] hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Clinical Blog: PCOD/PCOS Explained</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Polycystic ovary syndrome, commonly known as PCOS, is a hormonal and metabolic condition that can affect menstrual cycles, skin health, and fertility. Its symptoms and severity differ between individuals. Women searching for a PCOS Consultation in Malappuram may have concerns about irregular periods, acne, increased facial or body hair, or difficulties becoming pregnant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#303A88]" />
                <span>Common Symptoms Associated With PCOS</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="text-[#BE185D] font-bold">•</span>
                  <span>Irregular or infrequent menstrual periods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BE185D] font-bold">•</span>
                  <span>Acne or oily skin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BE185D] font-bold">•</span>
                  <span>Increased facial or body hair (hirsutism)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BE185D] font-bold">•</span>
                  <span>Thinning scalp hair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BE185D] font-bold">•</span>
                  <span>Difficulty conceiving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BE185D] font-bold">•</span>
                  <span>Signs of insulin resistance in some individuals</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic pt-1">
                Not everyone experiences all these symptoms. PCOS cannot be diagnosed from a single symptom alone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#45AC4B]" />
                <span>Why Medical Assessment Matters</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A healthcare professional may review menstrual history, symptoms, medical history, and relevant examination findings. Blood tests or ultrasound investigations may be recommended when clinically appropriate.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Management depends on the individual's symptoms, reproductive goals, and overall health. Evidence-based options may include lifestyle support and medicines for specific concerns.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homeopathy has not been established as an effective treatment for PCOS. Women should not rely on homeopathic remedies in place of appropriate medical assessment or proven treatment options.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: PCOD Consultation in Malappuram */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            PCOD Consultation in Malappuram
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              PCOD is a commonly used term for polycystic ovarian disease, although PCOS is the more widely recognized medical term for the condition discussed in clinical guidelines.
            </p>
            <p>
              Women looking for a PCOD Consultation in Malappuram may be concerned about menstrual changes, acne, weight changes, or other symptoms that they believe could be related to hormonal health. Irregular periods can have several causes, including PCOS, thyroid disorders, elevated prolactin levels, significant weight changes, stress, and other medical conditions.
            </p>
            <p>
              For this reason, self-diagnosis is not recommended. A healthcare professional can assess the symptoms and determine whether testing or referral to a gynaecologist or endocrinologist is appropriate. Women should also discuss their menstrual history, current medicines, and pregnancy plans where relevant. Appropriate assessment can help identify the underlying cause and guide an individualized management plan.
            </p>
          </div>
        </div>

        {/* Section 4: Menstrual Irregularities in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Menstrual Irregularities in Malappuram
            </h3>
            <a
              href="/severe-period-pain-when-to-worry/"
              onClick={(e) => handleNavigateBlog(e, 'severe-period-pain-when-to-worry')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE185D] hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read: Severe Period Pain &amp; Cramps Guide</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Menstrual cycles naturally vary between individuals, but substantial or persistent changes can sometimes indicate an underlying health concern. Women seeking advice about Menstrual Irregularities in Malappuram may experience periods that arrive unexpectedly, missed periods, unusually heavy bleeding, or changes in the duration of their menstrual cycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2.5">
              <h4 className="text-base font-bold text-[#1E2559]">Possible Causes of Irregular Periods</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>PCOS and other hormonal conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>Thyroid disorders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>Stress or substantial lifestyle changes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>Significant weight loss or weight gain</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>Certain medicines &amp; contraception</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>Pregnancy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]"></span>
                  <span>Perimenopause</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] pt-1">
                The appropriate response depends on the person's age, symptoms, medical history, and the nature of the menstrual changes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-2.5">
              <h4 className="text-base font-bold text-[#991B1B] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#EF4444]" />
                <span>When Should You Seek Medical Advice?</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
                Arrange a medical assessment if your periods become persistently irregular, stop unexpectedly, or change significantly from your usual pattern.
              </p>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                Seek prompt medical care for very heavy bleeding, severe pelvic pain, dizziness, or fainting. If pregnancy is possible and you experience pain or bleeding, obtain urgent medical advice.
              </p>
              <p className="text-xs text-[#7F1D1D] italic pt-1">
                Treatment should address the underlying cause rather than simply attempting to regulate the menstrual cycle without a diagnosis.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Uterine Fibroids Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Uterine Fibroids Consultation in Malappuram
            </h3>
            <a
              href="/uterine-fibroids-symptoms-diagnosis-treatment/"
              onClick={(e) => handleNavigateBlog(e, 'uterine-fibroids-symptoms-diagnosis-treatment')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BE185D] hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read: Uterine Fibroids Symptoms &amp; Treatment</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Uterine fibroids are growths that develop in or around the uterus. They are usually non-cancerous, and some women have no symptoms. Others may experience symptoms that affect their comfort and quality of life. A Uterine Fibroids Consultation in Malappuram may be appropriate for women experiencing heavy menstrual bleeding, pelvic pressure, lower abdominal discomfort, or urinary symptoms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2.5">
              <h4 className="text-base font-bold text-[#1E2559]">Common Symptoms of Uterine Fibroids</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Heavy or prolonged menstrual bleeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Pelvic pressure or discomfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Frequent urination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Lower abdominal fullness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Pain during sexual intercourse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Fertility or pregnancy-related concerns in some cases</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic">
                These symptoms can also occur with other conditions, so an accurate diagnosis is important.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2.5">
              <h4 className="text-base font-bold text-[#1E2559]">Diagnosis and Treatment Considerations</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A healthcare professional may recommend an examination, pelvic ultrasound, or other investigations based on symptoms. Management depends on the size and location of the fibroids, symptom severity, age, and reproductive plans. Options may include monitoring, medication, minimally invasive procedures, or surgery when indicated.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homeopathic remedies have not been shown to reliably shrink uterine fibroids or treat their complications. Women should seek appropriate gynaecological care and should not delay investigations or effective treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Menopause Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Menopause Consultation in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Menopause is a natural stage of life that marks the end of menstrual periods. The transition leading up to menopause is known as perimenopause, during which hormonal changes can cause a range of symptoms. Women seeking a Menopause Consultation in Malappuram may want information about irregular periods, hot flashes, night sweats, sleep difficulties, mood changes, or vaginal dryness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2.5">
              <h4 className="text-base font-bold text-[#1E2559]">Common Menopause-Related Changes</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Hot flashes and night sweats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Changes in menstrual frequency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Sleep disturbances and fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Mood changes and irritability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Vaginal dryness or discomfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Changes in sexual health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#303A88] font-bold">•</span>
                  <span>Reduced bone density after menopause</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic">
                Not every woman experiences the same symptoms, and some symptoms may have causes unrelated to menopause.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2.5">
              <h4 className="text-base font-bold text-[#1E2559]">Understanding Your Care Options</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A healthcare professional can help determine whether symptoms are related to perimenopause or menopause and discuss suitable management options. Depending on individual circumstances, evidence-based options may include lifestyle changes, non-hormonal medicines, or menopausal hormone therapy for appropriate candidates.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed font-semibold">
                Unexpected bleeding after menopause requires prompt medical evaluation. Women should also seek advice if symptoms substantially affect sleep, work, relationships, or daily life.
              </p>
              <p className="text-xs text-[#475569] italic">
                Homeopathy has not been established as an effective treatment for menopause symptoms. Discuss available options with a qualified healthcare professional before starting or changing treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Choosing the Right Homeopathic Clinic in Malappuram */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Choosing the Right Homeopathic Clinic in Malappuram
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] mt-1 leading-relaxed">
                Selecting a healthcare provider is an important decision, particularly when symptoms are persistent or involve reproductive health:
              </p>
            </div>
            <a
              href="/homeopathic-clinic-in-malappuram-guide/"
              onClick={(e) => handleNavigateBlog(e, 'homeopathic-clinic-in-malappuram-guide')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] bg-[#EEF2FB] hover:bg-[#D3DBF4] px-4 py-2 rounded-full transition-colors shrink-0"
            >
              <span>Guide to Choosing a Clinic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Verify Professional Qualifications</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Confirm the practitioner's recognized qualifications (e.g. BHMS) and professional registration where applicable. Make sure the provider clearly explains the services they offer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Look for Clear Communication</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                You should be able to explain your symptoms, ask questions, and understand the information provided. A responsible practitioner is transparent about limitations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Ask About Medical Assessment</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Women's health symptoms can have multiple causes. Ask whether your symptoms require blood investigations, pelvic ultrasound, a gynaecological examination, or referral.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Understand Treatment Limitations</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Be cautious of claims promising guaranteed cures, permanent results, or treatment for every hormonal condition. Homeopathy has not been shown to treat these conditions beyond placebo effects.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs md:col-span-2 lg:col-span-2">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Consider Patient Safety</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Choose healthcare providers who encourage appropriate medical assessment and do not recommend stopping prescribed medicines without consulting the clinician responsible for your care.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: About Anjali Homoeo Clinic */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            About Anjali Homoeo Clinic
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Anjali Homoeo Clinic is a local healthcare option to consider when researching homeopathic consultation services in Malappuram, Kerala.
            </p>
            <p>
              Patients interested in the clinic should confirm its current consultation services, practitioner credentials, operating hours, and appointment arrangements before visiting.
            </p>
            <p>
              If you are experiencing PCOS symptoms, menstrual irregularities, pelvic discomfort, suspected fibroids, or menopause-related changes, obtaining an appropriate medical assessment is important. Depending on your symptoms, a gynaecologist or another qualified medical professional may be the most suitable starting point.
            </p>
            <p>
              When enquiring about a consultation at Anjali Homoeo Clinic, ask about the practitioner's qualifications, the consultation process, and how the clinic handles concerns that require further investigation or specialist care. Making an informed choice means understanding the available evidence and selecting care that prioritizes your health and safety.
            </p>
          </div>
        </div>

        {/* Section 9: Frequently Asked Questions (Accordion) */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FDF2F8] flex items-center justify-center text-[#DB2777] shrink-0">
              <HelpCircle className="w-5 h-5 text-[#DB2777]" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] m-0">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#64748B] m-0 mt-0.5">
                Clinical answers to common questions about women's health consultations in Malappuram.
              </p>
            </div>
          </div>

          <div className="space-y-3 font-sans">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs[idx] ?? false;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1E2559] hover:bg-[#F8FAFD] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#303A88] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#45AC4B]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#64748B]" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-3 bg-[#F8FAFD]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 10: Conclusion & Call to Action */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E2559] via-[#303A88] to-[#1E2559] text-white p-8 sm:p-10 space-y-4 shadow-xl border-2 border-[#45AC4B]/40 font-sans">
            <span className="text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
              PRIORITIZING WOMEN'S HEALTH IN MALAPPURAM
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Conclusion: Making Informed Decisions for Your Health
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Women's health concerns deserve careful assessment, accurate information, and appropriate medical care. Whether you are experiencing PCOS symptoms, irregular periods, suspected uterine fibroids, persistent pelvic discomfort, or menopause-related changes, understanding the possible causes is an important first step.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              If you are searching for a Homeopathic Clinic in Malappuram, Anjali Homoeo Clinic is one local option to enquire about for information on its services and consultations. For PCOS Consultation in Malappuram, PCOD Consultation in Malappuram, Menstrual Irregularities in Malappuram, Menopause Consultation in Malappuram, or Uterine Fibroids Consultation in Malappuram, prioritize qualified medical advice and evidence-based care. Your health and well-being should always come first.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#45AC4B] text-white text-xs font-semibold hover:bg-[#39933E] transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Consultation with Dr. Anjali</span>
              </button>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Hello Dr. Anjali, I would like to enquire about women's health consultations in Malappuram."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
