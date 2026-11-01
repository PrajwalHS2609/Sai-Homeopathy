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
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
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
      desc: 'Chronic constipation, heavy straining, prolonged toilet sitting, and a low-fibre diet directly aggravate anorectal veins.',
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
      title: 'Evidence-Based Management',
      desc: 'High-fibre diet, adequate hydration, avoiding straining, sitz baths, and minor medical procedures manage symptoms effectively.',
    },
    {
      title: 'Timely Medical Review',
      desc: 'Persistent, painful, or bleeding anal symptoms require assessment by a qualified doctor rather than self-management.',
    },
    {
      title: 'Emergency Warning Signs',
      desc: 'Heavy rectal bleeding, dizziness, weakness, severe sudden anal pain, or black tarry stools require urgent hospital emergency care.',
    },
  ];

  const pilesGrades = [
    {
      grade: 'Grade I (Internal)',
      title: 'Bleeding without Prolapse',
      desc: 'Enlarged vascular cushions remain entirely inside the anal canal. The hallmark presentation is painless bright red rectal bleeding during defecation.',
    },
    {
      grade: 'Grade II (Internal)',
      title: 'Spontaneous Reduction',
      desc: 'Haemorrhoids prolapse outward through the anal verge during defecation or straining, but return spontaneously inside once straining stops.',
    },
    {
      grade: 'Grade III (Internal)',
      title: 'Manual Reduction Required',
      desc: 'Prolapse occurs during defecation, heavy lifting, or prolonged standing and does not retract spontaneously; requires gentle manual repositioning.',
    },
    {
      grade: 'Grade IV / External',
      title: 'Irreducible Prolapse / External',
      desc: 'Vascular cushions remain permanently outside the anal margin and cannot be manually reduced. High risk of thrombosis, ulceration, and strangulation.',
    },
  ];

  const evidenceManagement = [
    {
      step: '01',
      title: 'High-Fibre Nutrition',
      badge: 'First-Line Foundation',
      desc: 'Aim for 25–35 grams of daily dietary fibre from oats, whole wheat, legumes, lentils, papaya, pears, and psyllium husk to produce soft, bulky stools.',
    },
    {
      step: '02',
      title: 'Maintain Sufficient Hydration',
      badge: 'Fluid Balance',
      desc: 'Fibre requires adequate water to soften stools effectively. Drink 2.5 to 3 litres of fluids daily including plain water, buttermilk, and clear soups.',
    },
    {
      step: '03',
      title: 'Avoid Toilet Straining',
      badge: 'Behavioral Care',
      desc: 'Never delay the natural urge to defecate. Keep toilet sessions under 3–5 minutes and avoid mobile phone use on the commode.',
    },
    {
      step: '04',
      title: 'Warm Water Sitz Baths',
      badge: 'Symptomatic Relief',
      desc: 'Sitting in comfortably warm water for 10–15 minutes two to three times daily relaxes the internal anal sphincter and reduces localized irritation.',
    },
    {
      step: '05',
      title: 'Appropriate Medical Formulations',
      badge: 'Pharmacological Support',
      desc: 'Osmotic stool softeners, local anaesthetic ointments, and short-term topical anti-inflammatory creams provide symptomatic support under medical guidance.',
    },
    {
      step: '06',
      title: 'Procedural & Surgical Intervention',
      badge: 'Advanced Intervention',
      desc: 'Persistent bleeding or Grade III/IV prolapse responds definitively to outpatient rubber band ligation, sclerotherapy, or surgical haemorrhoidectomy.',
    },
  ];

  const preparationPoints = [
    {
      title: 'Symptom Timeline',
      detail: 'Note when your symptoms began and whether they are intermittent or continuous.',
    },
    {
      title: 'Bleeding Details',
      detail: 'Describe the colour (bright red vs dark maroon), volume, and whether it coats the stool or drips into the pan.',
    },
    {
      title: 'Bowel Habit Log',
      detail: 'Track bowel frequency, stool firmness, straining episodes, and whether you feel incomplete evacuation.',
    },
    {
      title: 'Pain & Swelling Association',
      detail: 'Specify whether pain occurs during, immediately after, or between bowel movements, and whether lumps reduce spontaneously.',
    },
    {
      title: 'Current Medications',
      detail: 'List all prescribed drugs, anticoagulants, aspirin, over-the-counter laxatives, pain medications, or herbal supplements.',
    },
    {
      title: 'Medical History',
      detail: 'Mention previous anorectal procedures, pregnancy history, chronic illnesses, and any family history of colorectal disease.',
    },
    {
      title: 'Constitutional Changes',
      detail: 'Inform the doctor of any unexplained weight loss, fatigue, loss of appetite, or persistent alterations in bowel frequency.',
    },
  ];

  // FAQs (12 high-yield proctology questions)
  const faqs = [
    {
      q: 'What is a homeopathy clinic for piles in Malappuram?',
      a: 'The term generally refers to a clinic offering consultations for people experiencing symptoms associated with piles (haemorrhoids). However, homeopathy has not been established by reliable scientific evidence as an effective curative treatment for haemorrhoids. People experiencing persistent bleeding, pain, or lumps should seek medical assessment to confirm an accurate diagnosis.',
    },
    {
      q: 'Can piles be treated without surgery?',
      a: 'Yes. Many mild to moderate cases improve significantly with dietary fibre, adequate fluid intake, avoiding toilet straining, and symptomatic measures such as warm sitz baths and short-term topical treatments. If symptoms persist or haemorrhoids become severe (grades III–IV), medical procedures such as rubber band ligation or surgery may be recommended.',
    },
    {
      q: 'Is homeopathy effective for piles?',
      a: 'Reliable scientific evidence has not established homeopathy as an effective treatment for haemorrhoids. It should not replace physical medical examination, evidence-based pharmacological treatments, or surgical interventions when rectal bleeding, severe pain, or prolapse is present.',
    },
    {
      q: 'Which doctor should I consult for piles in Malappuram?',
      a: 'A qualified general physician, general surgeon, or colorectal specialist (proctologist) is the appropriate professional to assess suspected haemorrhoids. If you consult a homeopathic physician like Dr. Anjali Chandrasekhar (BHMS) for constitutional supportive care, clinical evaluation and triage are provided, with prompt referral for proctoscopy or advanced intervention when indicated.',
    },
    {
      q: 'What foods help manage piles?',
      a: 'Fibre-rich foods such as vegetables, whole grains (brown rice, oats), legumes, lentils, and fruits (pears, apples with skin, figs, papaya) help soften stools and reduce straining. Dietary fibre should be increased gradually alongside sufficient fluid intake to prevent gas and bloating.',
    },
    {
      q: 'When should I seek urgent care for piles symptoms?',
      a: 'Seek urgent hospital care if you experience heavy or continuous rectal bleeding, dizziness, lightheadedness, fainting, severe unbearable anal pain, black or tarry stools, or fever accompanied by worsening anal swelling and discharge.',
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
      a: 'Yes. Dr. Anjali Chandrasekhar offers confidential in-clinic consultations at Kuttippuram and Puthanathani clinics as well as online video consultations. Online consultations are suitable for initial symptom review, dietary planning, and medical triage. If physical examination or procedural intervention is warranted, in-person assessment or surgeon referral is coordinated.',
    },
    {
      q: 'How can I prevent piles from recurring after recovery?',
      a: 'Long-term prevention centres on maintaining soft, effortless stools through high-fibre eating, drinking 2.5–3 litres of fluid daily, avoiding straining or lingering on the toilet, exercising regularly, and promptly managing acute constipation with gentle osmotic laxatives before painful swelling develops.',
    },
    {
      q: 'How do internal and external haemorrhoids differ?',
      a: 'Internal haemorrhoids develop above the pectinate line inside the rectum; they are covered by visceral mucosa, usually cause painless bleeding or prolapse, and only cause sharp pain if strangulated. External haemorrhoids develop below the pectinate line under sensitive somatic skin, frequently causing itching, swelling, and acute pain if thrombosed.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Piles Clinic in Malappuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="anorectal-vascular-care"
        categoryLabel="Anorectal & Vascular Care"
        pageTitle="Homeopathy Clinic for Piles in Malappuram"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Droplets className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Anorectal Care Guide • Malappuram Patients"
        title="Homeopathy Clinic for Piles in Malappuram"
        subtitle="Comprehensive clinical information on haemorrhoids, anal fissures, dietary fibre regimens, and confidential medical triage for patients in Malappuram district."
        metrics={[
          { label: 'Condition Focus', value: 'Haemorrhoids & Piles' },
          { label: 'Diagnostic Standard', value: 'Proctology & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Anorectal & Constitutional Care"
        doctorBio="10+ years of dedicated clinical experience assessing haemorrhoidal stages, bowel regulation strategies, nutritional fibre therapy, and surgical triage in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] block">
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
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#10B981]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
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

      {/* Section 1: Understanding Piles & Haemorrhoids */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Piles (Haemorrhoids)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Haemorrhoids are vascular cushions in the anal canal that help maintain continence. When chronically engorged or displaced, they become pathological piles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {pilesGrades.map((g, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#10B981]/30 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                    {g.grade}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-lg">
                  {g.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Homeopathy Clinic for Piles in Malappuram: What Should You Know? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathy Clinic for Piles in Malappuram: What Should You Know?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for a <strong>Homeopathy Clinic for Piles in Malappuram</strong> often look for a supportive setting to discuss sensitive anorectal symptoms.
            </p>
            <p>
              Homeopathic practitioners evaluate individual lifestyle factors, bowel habits, and constitutional state.
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
                    Reliable scientific clinical evidence has not established that homeopathy cures haemorrhoids or reverses vascular enlargement. Homeopathy should not replace physical medical examination, evidence-based pharmacological treatments, or surgical interventions when rectal bleeding, severe pain, or prolapse is present.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Evidence-Based Management */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PRACTICAL GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Management of Piles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {evidenceManagement.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#10B981]/40 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#047857] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                    Step {m.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B]">
                    {m.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2559] text-base">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What to Expect During a Consultation */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Preparing for Your Piles Consultation in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Consultations are conducted in complete medical confidentiality. Sharing clear details helps the doctor make an accurate assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {preparationPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#1E2559] text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: When to Seek Urgent Medical Care */}
      <section className="py-14 sm:py-16 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#DC2626]" />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
                SAFETY PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#991B1B]">
                When to Seek Urgent Emergency Care
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#FCA5A5] shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-[#7F1D1D] font-medium leading-relaxed">
              Certain symptoms cannot wait for routine homeopathic or outpatient clinic visits. Go immediately to the nearest hospital emergency department if you experience:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#991B1B]">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Heavy or continuous rectal bleeding that fills the toilet bowl</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Feeling faint, lightheaded, dizzy, or short of breath</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Sudden, excruciating, unbearable anal pain (thrombosed external pile)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Black, tarry, sticky stools or vomiting blood</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>High fever, chills, or foul-smelling pus discharge near the anus</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span>Inability to pass stools or gas accompanied by severe abdominal distension</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Frequently Asked Questions */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT EDUCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Piles in Malappuram
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Common questions answered transparently to help patients in Malappuram understand diagnosis and treatment pathways.
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
                    <HelpCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-[#10B981]' : ''
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
              Schedule Your Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Select In-Clinic consultation at Kuttippuram or Puthanathani, or book an Online Video Consultation from the privacy of your home.
            </p>
          </div>

          <AppointmentBookingEngine />
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="piles-clinic-malappuram" />
    </div>
  );
};
