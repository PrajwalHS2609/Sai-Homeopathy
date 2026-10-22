import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Sparkles,
  CheckCircle2,
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
  AlertTriangle,
  Brain,
  Zap,
  Smile,
  HeartPulse,
  Wind,
  Check,
} from 'lucide-react';

export const NeurologicalSeoArticleSection: React.FC = () => {
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
      question: 'When does a headache or migraine require emergency medical attention?',
      answer:
        'Seek immediate emergency medical care for a sudden, extremely severe headache (thunderclap headache), a headache accompanied by facial weakness, speech difficulty, vision loss, confusion, high fever with neck stiffness, or headache following a head injury.',
    },
    {
      question: 'What is the difference between a tension headache and a migraine attack?',
      answer:
        'Tension-type headaches usually cause a dull, steady aching pressure or band-like tightness around both sides of the head and neck. In contrast, migraines typically cause moderate-to-severe throbbing pain (often on one side), accompanied by nausea, vomiting, and marked sensitivity to light and sound.',
    },
    {
      question: 'What are medication-overuse headaches (rebound headaches)?',
      answer:
        'Medication-overuse headaches occur when acute pain relievers, triptans, or combination analgesics are taken frequently (typically 10 to 15 days or more per month). Over time, the medicine causes headaches to become more frequent and daily, requiring structured medication withdrawal under clinical supervision.',
    },
    {
      question: 'Can homoeopathy cure clinical anxiety disorders or depression?',
      answer:
        'Reliable scientific evidence has not shown homoeopathy to effectively treat clinical anxiety disorders, panic disorders, or depression. These mental health conditions benefit from evidence-based care, including cognitive behavioural therapy (CBT) and prescribed medical treatments.',
    },
    {
      question: 'What causes persistent brain fog and memory difficulties in adults?',
      answer:
        'Brain fog and concentration difficulties can arise from chronic sleep deprivation, severe psychological stress, anxiety, depressive disorders, thyroid dysfunction (hypothyroidism), nutritional deficiencies (vitamin B12, iron), medication side effects, or neurological disorders.',
    },
    {
      question: 'How should child attention and learning difficulties (suspected ADHD) be evaluated?',
      answer:
        'Child developmental, attention, or learning concerns should never be diagnosed via brief online checklists or unproven therapies. They require a comprehensive multidisciplinary clinical assessment involving paediatricians, child psychologists, educators, and developmental specialists.',
    },
  ];

  return (
    <section
      id="neurological-headache-malappuram-guide"
      aria-labelledby="neurological-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>NEUROLOGICAL, HEADACHE &amp; STRESS CARE · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="neurological-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Neurological &amp; Headache Conditions Homoeopathic Clinic in Malappuram
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
            Headaches, recurring migraines, stress, anxiety, memory difficulties, and concentration problems can affect everyday comfort, productivity, sleep, and quality of life. These concerns may develop gradually or appear during periods of physical strain, emotional pressure, illness, or changes in daily routines. When symptoms occur frequently, understanding their possible causes and seeking appropriate professional guidance are important steps towards better health management.
          </p>
          <p>
            If you are searching for a <strong className="text-[#1E2559] font-semibold">Neurological &amp; Headache Conditions Homoeopathic Clinic in Malappuram</strong>, it is important to choose a healthcare provider who takes your concerns seriously, reviews your health history, and explains when further medical assessment may be necessary.
          </p>
          <p>
            Headaches and memory problems can have several causes, including migraine disorders, tension-type headaches, sleep disturbances, medication effects, and other medical conditions. Similarly, stress and anxiety can affect concentration, energy levels, and emotional well-being. Children who experience attention or learning difficulties may also need an individualised developmental assessment.
          </p>
          <p>
            A consultation can help you discuss your symptoms, understand possible contributing factors, and identify appropriate next steps. However, reliable scientific evidence has not established homoeopathy as an effective treatment for migraines, neurological disorders, anxiety disorders, or developmental conditions. Homoeopathic consultation should not replace evidence-based medical care or delay an appropriate diagnosis.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#EFF6FF] p-6 sm:p-8 border border-[#BFDBFE] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#1E40AF] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
              Headache &amp; Neurological Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Recurring headaches and migraines should be assessed to identify their type, possible triggers, and appropriate treatment options.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>A <strong>Headache Consultation in Malappuram</strong> can be an opportunity to discuss symptom patterns and determine whether further medical evaluation is needed.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Persistent stress and anxiety may benefit from professional assessment and evidence-based psychological or medical care.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Memory problems can have several causes, including sleep difficulties, stress, medication effects, and underlying health conditions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Children with persistent attention, behavioural, or learning difficulties may need assessment by qualified paediatric, developmental, psychological, or educational professionals.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Sudden severe headaches, new neurological symptoms, confusion, or weakness require urgent medical attention.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Homoeopathy has not been shown reliably to treat migraine disorders, anxiety disorders, or neurological conditions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>Do not stop prescribed medication or delay necessary medical treatment in favour of an unproven approach.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Understanding Headaches and Neurological Concerns */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Understanding Headaches and Neurological Concerns
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Headaches are common, but they do not all have the same cause. Some are associated with muscle tension, while others involve neurological processes, such as migraine. Headaches may also occur alongside infections, vision problems, sleep disturbances, medication overuse, or other medical conditions.
            </p>
            <div className="bg-[#F8FAFD] border border-[#D8E1F5] rounded-2xl p-6 my-4">
              <h4 className="text-base font-bold text-[#1E2559] mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#2563EB]" />
                <span>Common Concerns Include:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Frequent or recurring headaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Migraine attacks with or without aura</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Tension-type headaches and band-like pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Headaches associated with stress and posture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Difficulty concentrating and mental fatigue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Brain fog, forgetfulness and memory difficulties</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Sleep-related problems and insomnia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Stress and chronic anxiety symptoms</span>
                </div>
              </div>
            </div>
            <p>
              Understanding the pattern of symptoms is important. A healthcare professional may ask when the symptoms started, how frequently they occur, how long they last, and whether they are accompanied by nausea, visual changes, dizziness, or other symptoms.
            </p>
            <p>
              If you are considering a <strong className="text-[#1E2559] font-semibold">Headache Consultation in Malappuram</strong>, keeping a record of headache frequency, duration, severity, medication use, and possible triggers in a headache diary can help make the medical assessment far more informative.
            </p>
          </div>
        </div>

        {/* Section 2: Headache Consultation in Malappuram for Recurring Headaches */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Headache Consultation in Malappuram for Recurring Headaches
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A recurring headache can interfere with work, education, family responsibilities, and social activities. Some people experience mild discomfort occasionally, while others experience frequent or disabling episodes. Headaches may be associated with dehydration, missed meals, inadequate sleep, stress, muscle tension, vision problems, or a primary headache disorder. Identifying the underlying cause is important because treatment recommendations vary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Tension-Type Headaches</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                These often cause pressure or a tight, aching sensation around the forehead, temples, or back of the head. Neck and shoulder muscle discomfort commonly occur as well.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Migraine Headaches</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                These may involve moderate to severe head pain, nausea, sensitivity to light or sound, and difficulty carrying out normal activities. Some people experience visual or sensory symptoms known as aura.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Medication-Overuse Headaches</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Frequent use of certain headache medicines can contribute to increasingly frequent headaches. A healthcare professional can help review medication use and discuss appropriate management.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Secondary Headaches</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                These occur because of another condition, such as an infection, structural vascular issue, or other medical problem. Some causes require urgent investigation.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#64748B] italic pt-1">
            A proper assessment helps distinguish between these possibilities. Homoeopathy has not been established as an effective treatment for headache disorders, so people with recurring or disabling headaches should discuss evidence-based management with a qualified healthcare professional.
          </p>
        </div>

        {/* Section 3: Migraine Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Migraine Consultation in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Migraine is a neurological disorder that can cause repeated attacks of head pain and other symptoms. The experience varies from person to person, and not every migraine includes the same combination of symptoms. People seeking a <strong className="text-[#1E2559] font-semibold">Migraine Consultation in Malappuram</strong> may be experiencing headaches that interfere with work, school, household activities, or sleep.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#2563EB]" />
                <span>Common Migraine Symptoms</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Moderate or severe head pain</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Pain that may be more noticeable on one side</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Nausea or vomiting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Sensitivity to light (photophobia) or sound (phonophobia)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Worsening discomfort with ordinary physical activity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Visual or sensory changes before or during an attack (aura)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Tiredness or difficulty concentrating</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Managing Migraine Symptoms</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Evidence-based migraine care may include acute medication, preventive treatment when appropriate, regular sleep, hydration, consistent meals, and an individualised management plan.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A headache diary may help identify patterns by recording the date, duration, symptoms, medication use, sleep, and possible triggers. However, trigger avoidance alone may not be sufficient for people with frequent or severe migraines.
              </p>
              <div className="p-3 bg-[#FEF2F2] rounded-xl border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed font-semibold">
                Emergency Red Flag: Seek emergency medical attention for a sudden, extremely severe headache, a headache accompanied by new weakness or difficulty speaking, a seizure, significant confusion, or a headache with fever and neck stiffness.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Stress Management Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Stress Management Consultation in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Stress is a normal response to demanding situations, but persistent stress can affect sleep, concentration, mood, and physical comfort. Work pressure, academic responsibilities, financial concerns, family challenges, and major life changes can all contribute to stress. People looking for a <strong className="text-[#1E2559] font-semibold">Stress Management Consultation in Malappuram</strong> may wish to discuss ongoing tension, mental fatigue, irritability, difficulty relaxing, or stress-related changes in their daily routines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Common Signs of Persistent Stress</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Feeling overwhelmed by everyday responsibilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Difficulty relaxing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Changes in sleep patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Irritability or restlessness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Difficulty concentrating</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Muscle tension</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Reduced motivation and persistent tiredness</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic pt-1">
                These symptoms can also occur with medical or mental health conditions, so persistent difficulties should not automatically be attributed to stress alone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Practical Stress Management Strategies</h4>
              <div className="space-y-2 text-xs sm:text-sm text-[#475569]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Maintain a consistent sleep and waking schedule.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Take regular breaks during work or study.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Engage in physical activity suited to your health and abilities.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Practise relaxation techniques, such as slow breathing or mindfulness.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Maintain social connections and seek support from trusted people.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Break demanding tasks into manageable steps.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>Seek professional support when stress begins to interfere with daily life.</span>
                </div>
              </div>
              <p className="text-xs text-[#64748B] italic pt-1">
                Homoeopathy has not been established as an effective treatment for chronic stress-related or mental health disorders.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Anxiety Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Anxiety Consultation in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Anxiety involves feelings of worry, apprehension, or fear. Occasional anxiety is a normal human response, but persistent or excessive anxiety can interfere with relationships, sleep, education, and work. An <strong className="text-[#1E2559] font-semibold">Anxiety Consultation in Malappuram</strong> may be relevant for people who experience ongoing worry, physical tension, restlessness, or difficulty managing everyday responsibilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Possible Symptoms of Anxiety</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Excessive or persistent worrying</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Restlessness and physical tension</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Irritability and difficulty concentrating</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Sleep disturbances and nighttime awakenings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Muscle tension and trembling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>A racing heartbeat during anxious episodes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Avoidance of situations because of fear or worry</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Evidence-Based Support for Anxiety</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Depending on the person's needs, treatment may include psychological therapies such as cognitive behavioural therapy (CBT), medication, or a combination of approaches. Lifestyle measures and social support may also contribute to well-being.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                If anxiety is affecting daily activities, professional assessment can help identify suitable support. Homoeopathy has not been shown reliably to treat anxiety disorders and should not replace established mental health care.
              </p>
              <div className="p-3 bg-[#FEF2F2] rounded-xl border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed font-semibold">
                Crisis Support Note: Anyone experiencing severe emotional distress or thoughts of self-harm should seek immediate support from a qualified mental health professional or emergency service.
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Memory Problems Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Memory Problems Consultation in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Memory difficulties can range from occasional forgetfulness to persistent problems that affect everyday functioning. People may describe these experiences as brain fog, mental fatigue, reduced concentration, or difficulty recalling information. A <strong className="text-[#1E2559] font-semibold">Memory Problems Consultation in Malappuram</strong> may be appropriate when memory changes persist, worsen, or interfere with routine activities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Common Factors Associated with Memory Difficulties</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Inadequate or disrupted sleep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Ongoing stress or chronic anxiety</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Depressive disorders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Medication side effects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Nutritional deficiencies (e.g., Vitamin B12, iron)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Thyroid conditions (hypothyroidism)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Neurological conditions</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic pt-1">
                The cause cannot be determined from forgetfulness alone. A healthcare professional may review symptoms, medications, sleep patterns, and medical history.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Supporting Everyday Memory &amp; Red Flags</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Practical approaches to support daily functioning include keeping a regular sleep schedule, using calendars and written lists, completing demanding tasks in quiet environments, and reviewing medications with a clinician.
              </p>
              <div className="p-3 bg-[#FEF2F2] rounded-xl border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed font-semibold">
                Urgent Warning: Sudden confusion or an abrupt change in memory, especially when accompanied by weakness, speech difficulties, severe headache, or other neurological symptoms, requires urgent medical assessment.
              </div>
              <p className="text-xs text-[#64748B] italic">
                Homoeopathy has not been established as an effective treatment for memory disorders or cognitive impairment.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Pediatric Consultation in Malappuram for Child Development Concerns */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Pediatric Consultation in Malappuram for Child Development Concerns
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Children develop at different rates, but persistent concerns about attention, behaviour, learning, communication, or everyday functioning may benefit from professional assessment. A <strong className="text-[#1E2559] font-semibold">Pediatric Consultation in Malappuram</strong> can help parents discuss their child's developmental progress, sleep, behaviour, school experiences, and other concerns with an appropriately qualified healthcare professional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Common Concerns Parents May Notice</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Difficulty maintaining attention</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Frequent distractibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Impulsivity or unusually high activity levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Difficulty following multi-step instructions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Persistent challenges with reading or writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Changes in sleep or behaviour</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>Difficulties affecting school or family life</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] pt-1">
                These signs do not automatically mean a child has ADHD or a learning disability. Similar difficulties can occur with sleep problems, anxiety, hearing or vision difficulties, learning differences, or other developmental concerns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Understanding ADHD and Learning Difficulties</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Attention-deficit/hyperactivity disorder (ADHD) is a neurodevelopmental condition involving persistent patterns of inattention and/or hyperactivity and impulsivity that affect functioning. Diagnosis requires an appropriate professional assessment; it cannot be established through a single symptom or a brief online checklist.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Specific learning disabilities may affect reading, written expression, or mathematics. Children may benefit from formal educational or psychological assessment, targeted learning support, and appropriate school accommodations.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homoeopathy has not been shown reliably to treat ADHD or specific learning disabilities. It should not replace established assessment, educational support, behavioural interventions, or prescribed treatment. Parents should seek advice from qualified paediatric, developmental, psychological, or educational professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: What to Expect During a Consultation */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            What to Expect During a Consultation
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Whether you are seeking a <strong className="text-[#1E2559] font-semibold">Headache Consultation in Malappuram</strong>, a <strong className="text-[#1E2559] font-semibold">Stress Management Consultation in Malappuram</strong>, or a <strong className="text-[#1E2559] font-semibold">Memory Problems Consultation in Malappuram</strong>, a useful appointment should help clarify the symptoms and identify appropriate next steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Symptom History</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Discuss when symptoms began, how often they occur, their intensity, and how they affect daily life.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Health History</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Share relevant medical conditions, medications, earlier neurological scans, and family medical history.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Lifestyle Factors</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Discuss sleep patterns, daily routines, hydration, screen time, work demands, and stress levels.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Clinical Assessment</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Seek appropriate neurological examination and investigation when symptoms suggest an underlying medical condition.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Treatment Discussion</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Ask about evidence-based options, expected benefits, limitations, and potential risks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Referral &amp; Follow-Up</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Understand when specialist neurological, psychiatric, or developmental assessment is needed and which warning signs require emergency care.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Choosing a Healthcare Clinic in Malappuram */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Choosing a Healthcare Clinic in Malappuram
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] mt-1 leading-relaxed">
                When looking for a <strong className="text-[#1E2559] font-semibold">Neurological &amp; Headache Conditions Homoeopathic Clinic in Malappuram</strong>, consider whether the provider communicates transparently about professional qualifications, treatment limitations, and the need for medical referral:
              </p>
            </div>
            <a
              href="/homoeopathic-clinic-in-malappuram-guide/"
              onClick={(e) => handleNavigateBlog(e, 'homoeopathic-clinic-in-malappuram-guide')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] bg-[#EEF2FB] hover:bg-[#D3DBF4] px-4 py-2 rounded-full transition-colors shrink-0"
            >
              <span>Guide to Choosing a Clinic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Appropriate Qualifications</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Verify the practitioner's recognised BHMS medical council registration and clinical background.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Clear Explanations</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Look for understandable information about possible causes and available care without unrealistic claims.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Responsible Referral</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Headaches, cognitive symptoms, and developmental concerns may require assessment by a neurologist, psychiatrist, or paediatrician.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Evidence-Aware Guidance</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Ask about the scientific evidence supporting any proposed treatment and maintain realistic expectations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Respect for Existing Care</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Do not stop prescribed medicines or established treatment plans without advice from the clinician responsible for your care.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Follow-Up Planning</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Make sure you understand when to seek further evaluation if symptoms continue or worsen.
              </p>
            </div>
          </div>
        </div>

        {/* Section 10: Frequently Asked Questions (Accordion) */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
              <HelpCircle className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] m-0">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#64748B] m-0 mt-0.5">
                Clinical answers regarding headaches, migraines, stress, memory, and child development consultations in Malappuram.
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

        {/* Section 11: Interlinks to Other Treatment Categories */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Explore Related Clinical Care Programs
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Anjali Homoeo Clinic offers personalized homoeopathic consultations across multiple clinical specialties:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
            <a
              href="/homoeopathic-treatment-for-womens-health-gynecological-care/"
              onClick={(e) => handleNavigateTreatment(e, 'womens-health-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FDF2F8] text-[#DB2777] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Women's Health &amp; Gynecological Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  PCOD/PCOS, menstrual irregularities, fibroids &amp; menopause
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'respiratory-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Wind className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Respiratory, ENT &amp; Allergy Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Sinusitis, dust allergies, asthma support, cough &amp; tonsils
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homoeopathic-treatment-for-skin-hair-scalp-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'skin-hair-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Skin, Hair &amp; Scalp Conditions
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Eczema, psoriasis, acne, melasma, alopecia &amp; dandruff
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homoeopathic-treatment-for-renal-calculi-thyroid-dysfunction/"
              onClick={(e) => handleNavigateTreatment(e, 'renal-thyroid-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Renal Calculi &amp; Thyroid Dysfunction
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Kidney stones, recurrent calculi, hypothyroidism &amp; nodules
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homoeopathic-treatment-for-anorectal-vascular-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'anorectal-vascular-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Anorectal &amp; Vascular Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Piles, hemorrhoids, fissures, fistula &amp; varicose veins
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homoeopathic-treatment-for-joint-musculoskeletal-disorders/"
              onClick={(e) => handleNavigateTreatment(e, 'joint-musculoskeletal-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Joint &amp; Musculoskeletal Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Arthritis, cervical spondylosis, sciatica &amp; lumbar pain
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>
          </div>
        </div>

        {/* Section 12: Conclusion & Booking CTA */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E2559] via-[#303A88] to-[#1E2559] text-white p-8 sm:p-10 space-y-4 shadow-xl border-2 border-[#45AC4B]/40 font-sans">
            <span className="text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
              PRIORITIZING NEUROLOGICAL &amp; MENTAL HEALTH IN MALAPPURAM
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Conclusion: Making Informed Decisions for Neurological &amp; Headache Care
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Recurring headaches, migraines, stress, anxiety, memory difficulties, and childhood developmental concerns can affect people in different ways. Understanding the symptoms and identifying possible underlying causes are important steps towards choosing appropriate care.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              If you are searching for a Headache Consultation in Malappuram, a Migraine Consultation in Malappuram, or a Stress Management Consultation in Malappuram, prioritise clear communication, accurate assessment, and evidence-based treatment options. Similarly, people seeking an Anxiety Consultation in Malappuram, a Child Development Consultation in Malappuram, or a Pediatric Consultation in Malappuram should ensure that their needs are assessed by professionals with appropriate qualifications.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              For persistent forgetfulness or changes in concentration, a Memory Problems Consultation in Malappuram may be a starting point for discussing symptoms and identifying the need for further evaluation. A responsible approach to health focuses on understanding the cause of symptoms, choosing appropriate care, and recognising when specialist support is necessary. Homoeopathic consultation should not replace proven treatment for migraines, neurological disorders, anxiety disorders, ADHD, or learning disabilities. Seek appropriate medical attention whenever symptoms are persistent, severe, sudden, or worsening.
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
                  "Hello Dr. Anjali, I would like to enquire about headache and neurological consultations in Malappuram."
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
