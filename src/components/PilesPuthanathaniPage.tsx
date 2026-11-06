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
  Flame,
  UserCheck,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PilesPuthanathaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details
  const phonePrimary = '089211 80408';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';
  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles Treatment at Puthanathani Clinic.'
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
    navigateToBookingWithReason('Piles Consultation - Puthanathani', 'clinic');
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
      title: 'Vascular Structures in the Anal Canal',
      desc: 'Piles, also called haemorrhoids, are swollen vascular structures in and around the anus and lower rectum that become inflamed or enlarged.',
    },
    {
      title: 'Core Characteristic Symptoms',
      desc: 'Common symptoms include bright red rectal bleeding, anal itching, swelling, discomfort, and a palpable lump near the anal opening.',
    },
    {
      title: 'Mandatory Bleeding Assessment',
      desc: 'Rectal bleeding should be medically assessed rather than automatically assumed to be caused by piles, as other conditions share similar signs.',
    },
    {
      title: 'Contributing Mechanical Pressures',
      desc: 'Constipation, straining during bowel movements, and prolonged sitting on the toilet can significantly contribute to symptoms.',
    },
    {
      title: 'Fibre & Hydration Relief',
      desc: 'Increasing dietary fibre and avoiding excessive straining soften stools and help relieve mild haemorrhoidal symptoms.',
    },
    {
      title: 'Severity-Guided Medical Care',
      desc: 'Medical treatment depends on the specific anatomical type (internal vs. external), severity grade, and persistence of haemorrhoids.',
    },
    {
      title: 'Procedural & Surgical Options',
      desc: 'Procedures such as rubber band ligation, sclerotherapy, and surgery may be recommended in selected persistent or prolapsing cases.',
    },
    {
      title: 'Transparent Homoeopathy Limitations',
      desc: 'Homoeopathy has not been proven to cure piles or reliably shrink haemorrhoidal tissue and should not replace established medical care.',
    },
    {
      title: 'Urgent Red-Flag Warning Signs',
      desc: 'Severe pain, heavy continuous bleeding, fainting, fever, or black tarry stools require prompt emergency medical attention.',
    },
  ];

  // Types of Piles
  const pilesTypes = [
    {
      type: '1. Internal Haemorrhoids',
      badge: 'Inside the Lower Rectum',
      summary: 'Develop inside the rectum above the dentate line.',
      desc: 'Internal haemorrhoids are often painless because the upper anal lining has fewer pain-sensitive nerves. The most noticeable symptom is typically bright red blood during or after passing stools.',
      prolapseInfo:
        'In some cases, internal haemorrhoids may enlarge and protrude through the anus during bowel movements (prolapse). Depending on severity, they may return inside naturally or require manual repositioning.',
      grades: [
        { grade: 'Grade I', detail: 'Bleed without prolapsing outside the anal verge.' },
        { grade: 'Grade II', detail: 'Prolapse on straining but reduce spontaneously.' },
        { grade: 'Grade III', detail: 'Prolapse on defecation and require manual reduction.' },
        { grade: 'Grade IV', detail: 'Permanently prolapsed and irreducible; high risk of strangulation.' },
      ],
    },
    {
      type: '2. External Haemorrhoids',
      badge: 'Beneath the Skin Around the Anus',
      summary: 'Develop under the sensitive perianal skin.',
      desc: 'External haemorrhoids may cause itching, swelling, irritation and discomfort, especially while sitting or passing stools, due to rich somatic sensory nerve supply.',
      prolapseInfo:
        'Thrombosed External Haemorrhoid: Sometimes a blood clot forms inside an external haemorrhoid, resulting in an acutely painful, tense, purplish lump. Sudden severe pain or swelling should be evaluated promptly by a healthcare professional.',
      grades: null,
    },
  ];

  // Common Symptoms of Piles
  const commonSymptoms = [
    {
      title: 'Bright Red Blood During or After Stools',
      desc: 'Painless fresh bleeding noticed on toilet tissue, streaking the stool, or dripping into the toilet bowl.',
    },
    {
      title: 'Itching or Irritation Around the Anus',
      desc: 'Persistent perianal irritation (pruritus ani) caused by swelling, skin fold moisture, or mucus discharge.',
    },
    {
      title: 'Swelling Near the Anal Opening',
      desc: 'Tender, inflamed or puffy tissues at the anal verge that become more prominent after bowel movements.',
    },
    {
      title: 'A Lump Around the Anus',
      desc: 'A palpable soft fold or firm nodule (which may be thrombosed) noticed during cleaning or sitting.',
    },
    {
      title: 'Pain or Discomfort While Sitting',
      desc: 'Persistent dull aching or throbbing pressure around the perineum exacerbated by prolonged sitting on hard surfaces.',
    },
    {
      title: 'Mucus Discharge in Some Cases',
      desc: 'Moist mucus leakage from prolapsing internal haemorrhoidal cushions causing soiled underwear and skin irritation.',
    },
    {
      title: 'Feeling of Incomplete Bowel Evacuation',
      desc: 'A sensation that the rectum has not emptied completely, leading to repeated, unproductive straining.',
    },
    {
      title: 'Protrusion of Internal Haemorrhoids',
      desc: 'Soft tissue masses that push out through the anus during defecation and may need to be gently pushed back.',
    },
  ];

  // Causes and Risk Factors
  const riskFactors = [
    {
      title: 'Chronic Constipation',
      desc: 'Hard, dry stools and infrequent bowel movements significantly increase pressure in the lower rectal veins, causing vascular cushions to stretch.',
    },
    {
      title: 'Straining During Bowel Movements',
      desc: 'Excessive pushing during defecation places severe mechanical pressure on blood vessels and connective tissue supports in the anal canal.',
    },
    {
      title: 'Prolonged Sitting on the Toilet',
      desc: 'Spending extended time sitting on the toilet (especially while using a smartphone or reading) allows pelvic venous pooling without floor support.',
    },
    {
      title: 'Low-Fibre Diet',
      desc: 'Insufficient dietary fibre leads to small, hard stools requiring greater effort to expel, worsening anal friction and venous engorgement.',
    },
    {
      title: 'Pregnancy',
      desc: 'The enlarging uterus exerts downward pressure on pelvic veins, combined with progesterone-induced smooth muscle relaxation and constipation.',
    },
    {
      title: 'Ageing',
      desc: 'The fibroelastic tissues and smooth muscle supporting haemorrhoidal cushions naturally weaken with age, increasing susceptibility to prolapse.',
    },
    {
      title: 'Other Contributing Factors',
      desc: 'Obesity, frequent heavy lifting, chronic persistent diarrhoea, sedentary occupation, and genetic family history of venous insufficiency.',
    },
  ];

  // Diagnostic Procedures
  const diagnosticSteps = [
    {
      title: 'Detailed Clinical History',
      desc: 'Assessing duration of symptoms, bowel frequency, stool consistency, colour and volume of bleeding, presence of pain, and previous treatments.',
    },
    {
      title: 'Visual Perianal Examination',
      desc: 'Careful inspection of the anal verge to identify external haemorrhoids, skin tags, fissures, fistulae, signs of inflammation, or thrombosis.',
    },
    {
      title: 'Digital Rectal Examination (DRE)',
      desc: 'When appropriate, gentle palpation of the lower rectum to assess sphincter tone, evaluate tenderness, and rule out palpable rectal masses.',
    },
    {
      title: 'Anoscopy / Proctoscopy',
      desc: 'Using a small illuminated scope to directly visualize the anal canal, evaluate internal haemorrhoidal grade, and locate bleeding points.',
    },
    {
      title: 'Colonoscopy or Sigmoidoscopy',
      desc: 'Recommended when indicated by patient age (over 45–50), family history of colorectal neoplasia, altered bowel habits, weight loss, or unexplained anaemia.',
    },
  ];

  // Evidence-Based Treatment Modalities
  const treatmentModalities = [
    {
      title: '1. Dietary Fibre',
      tag: 'Conservative Foundation',
      desc: 'Increasing fibre intake helps soften stools and reduces straining. Foods rich in soluble and insoluble fibre include fresh fruits, leafy vegetables, whole grains, oats, lentils, beans, and seeds. Fibre supplements (such as isabgol/psyllium) may be considered under medical advice.',
    },
    {
      title: '2. Adequate Fluid Intake',
      tag: 'Hydration Therapy',
      desc: 'Drinking sufficient water and fluids throughout the day supports normal stool consistency and facilitates smooth bowel transit. Individual requirements vary, especially for people with heart or kidney disease requiring fluid restrictions.',
    },
    {
      title: '3. Avoiding Straining',
      tag: 'Bowel Habit Retraining',
      desc: 'Responding promptly to the natural urge to defecate without delay, avoiding prolonged toilet sitting, and refraining from excessive pushing reduces anal venous pressure.',
    },
    {
      title: '4. Warm Sitz Baths',
      tag: 'Perianal Comfort',
      desc: 'Sitting in a tub of comfortably warm water for 10 to 15 minutes, two to three times daily, relaxes the internal anal sphincter, relieves muscle spasms, and soothes irritation.',
    },
    {
      title: '5. Medicines for Symptom Relief',
      tag: 'Pharmacotherapy',
      desc: 'Topical soothing creams, stool softeners, and mild analgesics recommended by medical professionals provide temporary relief from pruritus and swelling, though they do not eliminate enlarged tissue.',
    },
    {
      title: '6. Office-Based Procedures',
      tag: 'Outpatient Interventions',
      desc: 'For persistent grade I–III internal piles: Rubber band ligation (a small band cuts off blood supply), Sclerotherapy (chemical injection to shrink vessels), or Infrared coagulation (thermal energy to coagulate tissue).',
    },
    {
      title: '7. Surgical Treatment',
      tag: 'Definitive Surgery',
      desc: 'Haemorrhoidectomy or stapled haemorrhoidopexy may be indicated for large, irreducible grade IV prolapsed haemorrhoids, strangulated piles, or when conservative measures fail.',
    },
  ];

  // Lifestyle Habits
  const lifestyleHabits = [
    'Include fibre-rich foods in your daily meals (fruits, vegetables, whole grains, pulses).',
    'Drink adequate fluids throughout the day, unless medically restricted for kidney or heart conditions.',
    'Avoid sitting on the toilet for unnecessarily long periods; finish promptly without mobile phones.',
    'Do not strain excessively or hold your breath during bowel movements.',
    'Maintain regular physical activity and gentle daily walking to stimulate normal bowel peristalsis.',
    'Avoid repeatedly delaying or suppressing the natural urge to pass stools.',
    'Maintain a healthy body weight to minimize chronic intra-abdominal pressure.',
    'Follow professional medical advice for persistent or recurring constipation.',
    'Keep the anal area gently clean using warm water or moist wipes without harsh rubbing.',
    'Seek prompt medical advice if rectal bleeding, prolapse, or anal discomfort continues.',
  ];

  // Provider Criteria
  const providerCriteria = [
    {
      title: 'Appropriate Professional Qualifications',
      desc: 'Verify that the physician is legally registered with recognized medical or homoeopathic councils and possesses verified clinical training.',
    },
    {
      title: 'Comprehensive Symptom Assessment First',
      desc: 'A responsible clinic conducts thorough clinical intake before suggesting any treatment rather than dispensing quick remedies.',
    },
    {
      title: 'Transparent Discussion of Treatment Options',
      desc: 'The provider clearly explains conservative, procedural, and surgical avenues based on haemorrhoid grade.',
    },
    {
      title: 'Recognition of Warning Signs & Referrals',
      desc: 'The clinician immediately identifies red-flag symptoms requiring emergency surgical or gastroenterological referral.',
    },
    {
      title: 'Clear Explanation of Complementary Limitations',
      desc: 'Transparently communicates that homoeopathy does not reliably shrink haemorrhoidal tissue and should not replace evidence-based care.',
    },
    {
      title: 'Structured Follow-Up & Continuity',
      desc: 'Ensures structured follow-up monitoring to check bowel regularity, stool consistency, and resolution of symptoms.',
    },
  ];

  // Red Flags
  const redFlags = [
    'Heavy or continuous rectal bleeding that drips into the toilet or coats large amounts of tissue.',
    'Dizziness, lightheadedness, fainting, pallor, or unusual profound weakness accompanying bleeding.',
    'Black, tarry, or foul-smelling stools (melaena), which indicates bleeding higher up in the digestive tract.',
    'Severe, sudden, or rapidly worsening anal pain that prevents sitting, walking, or resting.',
    'High fever, chills, or foul-smelling pus draining from around the anal region (suspected abscess or fistula).',
    'Significant perianal swelling, redness, or a hard, exquisitely tender, dark purplish lump (thrombosed haemorrhoid).',
    'Unexplained weight loss, persistent abdominal cramps, or a lasting change in bowel habits (diarrhoea/constipation alternating).',
  ];

  // 10 Interactive FAQs
  const faqs = [
    {
      q: 'What are piles?',
      a: 'Piles, or haemorrhoids, are swollen vascular structures in and around the anus and lower rectum. They may cause bleeding, itching, swelling and discomfort.',
    },
    {
      q: 'What are the common symptoms of piles?',
      a: 'Common symptoms include bright red rectal bleeding, itching, swelling, discomfort, a lump near the anus and prolapse during bowel movements.',
    },
    {
      q: 'Can piles improve without surgery?',
      a: 'Many mild cases improve with dietary changes, fibre, adequate fluids and avoiding straining. Some persistent cases may require office-based procedures or surgery.',
    },
    {
      q: 'Can homoeopathy cure piles?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy cures haemorrhoids or removes haemorrhoidal tissue. Evidence-based medical assessment and treatment should not be replaced by homoeopathy.',
    },
    {
      q: 'Is rectal bleeding always caused by piles?',
      a: 'No. Rectal bleeding can have several causes, including anal fissures, inflammatory bowel conditions and other gastrointestinal problems. Medical assessment is important.',
    },
    {
      q: 'What foods may help people with piles?',
      a: 'Fibre-rich foods such as fruits, vegetables, whole grains, oats, beans and lentils may help soften stools and reduce constipation-related straining.',
    },
    {
      q: 'Are piles dangerous?',
      a: 'Many cases are not serious, but persistent bleeding, severe pain or other unusual symptoms require medical evaluation. Rectal bleeding should never be ignored.',
    },
    {
      q: 'Can piles come back after treatment?',
      a: 'Yes. Symptoms may recur, particularly if constipation, straining and other contributing factors continue. Lifestyle changes can help reduce these risks.',
    },
    {
      q: 'When should I consult a piles doctor?',
      a: 'Consult a healthcare professional if you notice rectal bleeding, persistent itching, swelling, pain, a lump near the anus or recurring bowel discomfort.',
    },
    {
      q: 'How can I prevent piles from worsening?',
      a: 'Eat fibre-rich foods, drink adequate fluids, avoid straining, limit time spent on the toilet and maintain regular physical activity.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-[#1E2559] flex flex-col font-sans">
      {/* Sticky Quick Contact Bar on scroll */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Piles Treatment Guide • Puthanathani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="treatments"
        categoryLabel="Treatments"
        pageTitle="Homeopathy Clinic Near Puthanathani for Piles Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        badgeText="ANORECTAL CLINICAL CARE • PUTHANATHANI"
        title="Homeopathy Clinic Near Puthanathani for Piles Treatment"
        subtitle="A comprehensive clinical guide explaining piles (haemorrhoids), rectal bleeding, internal & external classifications, risk factors, evidence-based surgical/procedural options, and transparent healthcare guidance in Puthanathani."
        metrics={[
          { label: 'Primary Clinic', value: 'Puthanathani' },
          { label: 'Branch Center', value: 'Kuttippuram' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Anorectal & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, detailed bowel habit assessments, dietary counselling, and responsible triage for patients experiencing piles, rectal bleeding, and anal discomfort at Anjali Homoeo Clinic in Puthanathani and Kuttippuram, ensuring timely surgical referrals when indicated."
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
              Understanding Piles (Haemorrhoids) & Responsible Medical Assessment in Puthanathani
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Piles, medically known as haemorrhoids, are a common condition affecting the blood vessels and supporting tissues around the anus and lower rectum. They may cause discomfort, itching, swelling, irritation and bleeding during bowel movements. Although piles are common, symptoms should not be ignored, particularly when rectal bleeding occurs. Early medical assessment can help identify the cause of the symptoms and determine suitable treatment.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              People searching for <strong className="text-[#1E2559]">Piles Treatment in Puthanathani</strong> may be looking for guidance about symptoms, causes, available treatment options and ways to prevent recurring discomfort. Understanding the condition is an important first step towards making informed healthcare decisions. A healthcare professional can assess the symptoms, identify possible contributing factors and recommend appropriate care.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 mt-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-950 leading-relaxed">
                <strong>Medical Disclosure on Complementary Care:</strong> If you are looking for a Homeopathy clinic for piles in Puthanathani, it is important to understand the available treatment approaches and their scientific limitations. <strong>Homoeopathy is a complementary system of medicine, but reliable scientific evidence has not established that homoeopathic medicines can cure haemorrhoids or reliably shrink piles. Evidence-based medical care should not be delayed or replaced by complementary treatment.</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Key Takeaways */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              CLINICAL HIGHLIGHTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Key Takeaways on Piles</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential medical facts regarding haemorrhoidal vascular anatomy, clinical presentations, and care pathways.
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

        {/* What Are Piles? Classification */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-semibold mb-2">
              <Stethoscope className="w-3.5 h-3.5" />
              ANATOMICAL CLASSIFICATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">What Are Piles?</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Piles are swollen vascular structures located in the anal canal and around the anus. These structures are part of normal human anatomy (vascular cushions that assist in continence), but they can become enlarged, inflamed or symptomatic. The condition is commonly classified into two main types: internal and external haemorrhoids.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pilesTypes.map((pt, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#1E2559]">{pt.type}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                      {pt.badge}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm font-medium mb-3">{pt.summary}</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{pt.desc}</p>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    <strong className="text-[#1E2559] block mb-1">Prolapse & Complication Features:</strong>
                    {pt.prolapseInfo}
                  </div>

                  {pt.grades && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-200">
                      <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider block">
                        Four Clinical Grades of Internal Piles:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {pt.grades.map((g, gIdx) => (
                          <div key={gIdx} className="p-2.5 bg-white rounded-lg border border-slate-200">
                            <strong className="text-[#059669] block">{g.grade}</strong>
                            <span className="text-slate-600">{g.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Symptoms of Piles */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
              <Eye className="w-3.5 h-3.5" />
              CLINICAL PRESENTATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Common Symptoms of Piles</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              The symptoms of haemorrhoids can vary depending on their location and severity. Some people experience mild irritation, while others may have persistent discomfort or bleeding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commonSymptoms.map((symp, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-sm mb-2">{symp.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{symp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed">
            <strong>Clinical Advice for Puthanathani Residents:</strong> People looking for <strong className="text-[#1E2559]">Piles Consultation in Puthanathani</strong> should seek an assessment if they notice bleeding, persistent pain or a change in bowel habits. These symptoms can also occur with other conditions, so an accurate diagnosis is essential before undertaking any treatment.
          </div>
        </section>

        {/* Causes and Risk Factors of Piles */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-2">
              <Compass className="w-3.5 h-3.5" />
              AETIOLOGY & PHYSIOLOGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">Causes and Risk Factors of Piles</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Several factors can contribute to the development or worsening of haemorrhoids. Increased pressure in the lower rectum and anal region is one of the main contributing mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {riskFactors.map((rf, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559] mb-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    {rf.title}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{rf.desc}</p>
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
              DIAGNOSTIC RIGOUR
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Piles Treatment in Puthanathani: Why Proper Diagnosis Matters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              People searching for Piles Treatment in Puthanathani should understand that not every case of anal pain, itching or bleeding is caused by haemorrhoids. Anal fissures, infections, inflammatory bowel disease (Crohn’s or ulcerative colitis), perianal fistulae, and colorectal polyps or malignancies can produce very similar symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diagnosticSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-[#059669] block mb-1">Evaluation Step {idx + 1}</span>
                <h3 className="font-bold text-[#1E2559] text-base mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-red-900 leading-relaxed">
              <strong>Rectal Bleeding Rule:</strong> Rectal bleeding should not be dismissed as piles without professional medical assessment. The clinician may recommend further investigation based on the person’s age, medical history, symptoms, and risk factors.
            </div>
          </div>
        </section>

        {/* Evidence-Based Treatment Options */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              EVIDENCE-BASED CARE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Evidence-Based Treatment Options for Piles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Treatment depends on the severity of symptoms, type of haemorrhoids, and response to initial management. Many mild cases improve significantly with lifestyle changes and conservative care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatmentModalities.map((item, idx) => (
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

        {/* Understanding Piles Homeopathy Treatment in Puthanathani */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
              <Info className="w-3.5 h-3.5" />
              SCIENTIFIC TRANSPARENCY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Understanding Piles Homeopathy Treatment in Puthanathani
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              People exploring Piles Homeopathy treatment in Puthanathani may be interested in a complementary approach to healthcare. Homoeopathy traditionally considers an individual's reported symptoms, lifestyle, digestion, and general health when selecting remedies.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
              <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <strong className="text-[#1E2559] text-base block">
                  Scientific Evidence & Clinical Scope:
                </strong>
                <p>
                  Current reliable scientific evidence <strong>does not establish that homoeopathic medicines can cure haemorrhoids, remove enlarged haemorrhoidal tissue, or prevent vascular complications.</strong> Patients should not rely on homoeopathy instead of established medical treatment.
                </p>
                <p>
                  A responsible <strong>Piles Homeopathic Clinic in Puthanathani</strong> should explain these limitations clearly and encourage evidence-based medical care.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-[#1E2559] text-sm mb-3">
                Guidance for Anyone Considering Complementary Care:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Obtain a formal medical diagnosis before starting any therapy.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Discuss all medicines and complementary products with your doctor.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Continue prescribed conventional medicines unless your clinician advises otherwise.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Avoid delaying clinical investigations for rectal bleeding.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect During a Piles Consultation */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Calendar className="w-3.5 h-3.5" />
              APPOINTMENT PREPARATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What to Expect During a Piles Consultation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              People searching for a <strong className="text-[#1E2559]">Piles doctor in Puthanathani</strong> may want to know what happens during an appointment. A consultation generally begins with a detailed, confidential discussion of symptoms and medical history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#059669]" />
                Questions the Healthcare Professional May Ask:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>How long have you experienced the symptoms?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Is there bleeding during bowel movements? Is it bright red or dark?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Do you experience pain, itching, or swelling?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Do you have chronic constipation or frequent diarrhoea?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Have you noticed a lump around the anus? Does it retract automatically?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Have you used any over-the-counter medicines or creams?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-2" />
                  <span>Have similar symptoms occurred previously in your family?</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2 mb-2">
                  <UserCheck className="w-4 h-4 text-purple-600" />
                  Professional Credentials & Referrals
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  An examination may be recommended to identify the cause and severity of the problem. If the symptoms suggest another condition or advanced prolapse, the clinician will recommend specialist surgical referral or colonoscopy.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A <strong className="text-[#1E2559]">Piles specialist in Puthanathani</strong> should be appropriately qualified for the services being provided. Patients should check the practitioner’s credentials and seek specialist medical care when required.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                <strong>Anjali Homoeo Clinic Practice:</strong> Clinical consultations at our Puthanathani and Kuttippuram centres adhere strictly to recognized diagnostic protocols, safe complementary support, and prompt surgical triage.
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Tips to Reduce Piles Discomfort */}
        <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-2">
              <Utensils className="w-3.5 h-3.5" />
              DAILY SELF-CARE HABITS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Lifestyle Tips to Reduce Piles Discomfort
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Lifestyle modifications can help reduce constipation, minimise straining, and support long-term bowel health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lifestyleHabits.map((tip, idx) => (
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
            <em>Note:</em> These measures can help manage contributing factors and relieve mild discomfort, but they do not replace professional medical assessment or treatment when needed.
          </div>
        </section>

        {/* Choosing a Piles Clinic in Puthanathani */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              PATIENT DECISION GUIDE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Choosing a Piles Clinic in Puthanathani
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Choosing a suitable healthcare provider is important when dealing with recurring anal discomfort or bleeding. People looking for a <strong className="text-[#1E2559]">Piles Clinic in Puthanathani</strong> should consider whether the provider explains the condition clearly and recognises when further medical assessment is necessary.
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
            <strong>Patient Safety Standard:</strong> A Piles Homeopathic Clinic in Puthanathani should not promise guaranteed cures or advise patients to discontinue prescribed medicines. A Homeopathy clinic for piles in Puthanathani should prioritise transparent communication, patient safety and appropriate referral.
          </div>
        </section>

        {/* When Should You Seek Urgent Medical Attention? (Red Flags) */}
        <section className="bg-rose-50/70 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              EMERGENCY RED FLAGS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-rose-950">
              When Should You Seek Urgent Medical Attention?
            </h2>
            <p className="text-rose-900/80 text-sm sm:text-base mt-2">
              Some symptoms require prompt emergency medical assessment. Do not assume that severe or unusual symptoms are simply piles.
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
            These symptoms may indicate conditions that require urgent investigation and timely hospital or surgical treatment.
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1E2559] text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              PATIENT FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions About Piles Treatment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Common questions answered by clinicians regarding piles, haemorrhoid grades, dietary relief, and treatment limits.
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
              PUTHANATHANI CLINICAL DESK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Book a Piles Consultation Near Puthanathani
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Piles can affect everyday comfort, bowel habits and quality of life. Understanding the symptoms, causes and available treatment options can help individuals make informed decisions about their health.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If you are searching for <strong className="text-white">Piles Consultation in Puthanathani</strong>, <strong className="text-white">Piles Treatment in Puthanathani</strong> or a <strong className="text-white">Homeopathic doctor for piles in Puthanathani</strong>, choose a healthcare provider who values accurate assessment, clear communication and responsible treatment guidance.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A consultation can help you discuss your symptoms, understand whether further investigations are necessary and identify appropriate next steps. Homoeopathy may be discussed as a complementary healthcare approach, but it should not replace established treatment for haemorrhoids or delay assessment of rectal bleeding.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 text-[#1E2559]">
            <h3 className="text-xl font-bold mb-4 text-[#1E2559]">
              Schedule Your Confidential Consultation
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
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Qualified Medical Supervision</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dr. Anjali Chandrasekhar (BHMS) provides professional clinical evaluations, bowel health guidance, and transparent referrals across Puthanathani and Kuttippuram.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-[#1E2559] text-base">Consultation Hours</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Monday to Sunday: 9:00 AM – 7:30 PM.<br />
              Both in-clinic appointments at Puthanathani / Kuttippuram and confidential online consultations are available.
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
          <RegionalRelatedGuides currentGuideKey="piles-treatment-puthanathani" />
        </section>
      </div>
    </div>
  );
};
