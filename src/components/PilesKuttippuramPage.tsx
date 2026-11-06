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
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PilesKuttippuramPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles Treatment (Kuttippuram patient guide).'
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
    navigateToBookingWithReason('Piles Consultation - Kuttippuram', 'online');
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
      title: 'Vascular & Connective Tissue Cushions',
      desc: 'Piles, or haemorrhoids, are swollen blood vessels and supporting connective tissues around the anus and lower rectum that become inflamed or enlarged.',
    },
    {
      title: 'Distinguishable Core Symptoms',
      desc: 'Common symptoms include anal itching, discomfort, localized swelling, pain when sitting or defecating, and painless bright-red bleeding during bowel movements.',
    },
    {
      title: 'Major Contributing Triggers',
      desc: 'Chronic constipation, excessive toilet straining, prolonged sitting on the commode, low dietary fiber, pregnancy, and physical inactivity contribute to piles.',
    },
    {
      title: 'Mandatory Rectal Bleeding Assessment',
      desc: 'Rectal bleeding must never be assumed to be piles without medical evaluation; anal fissures, polyps, colitis, and colorectal conditions share overlapping signs.',
    },
    {
      title: 'Graded Evidence-Based Treatment',
      desc: 'Appropriate treatment depends strictly on the type (internal vs. external) and clinical severity/grade of haemorrhoids, moving from conservative to procedural care.',
    },
    {
      title: 'Fibre & Hydration Foundation',
      desc: 'Consuming high-fibre foods, drinking adequate water daily, and establishing healthy bowel habits soften stools and prevent symptom recurrence.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Homoeopathy has not been established as an effective curative treatment for piles or vascular prolapse through reliable scientific evidence.',
    },
    {
      title: 'Urgent Emergency Warning Signs',
      desc: 'Heavy continuous rectal bleeding, black tarry stools, dizziness, fainting, high fever, or severe sudden anal pain require prompt emergency medical attention.',
    },
  ];

  // Types of Piles
  const pilesTypes = [
    {
      type: '1. Internal Piles',
      badge: 'Above Dentate Line (Insensate)',
      summary: 'Internal haemorrhoids develop inside the lower rectum.',
      desc: 'Because the upper rectum lacks somatic pain-sensing nerves, internal piles are typically painless. However, they commonly cause bright-red blood coating stools or dripping into the toilet bowl.',
      prolapseInfo:
        'In more advanced stages, internal piles may prolapse through the anus. Known as prolapsed haemorrhoids, they cause irritation, mucus discharge, and difficulty maintaining perianal hygiene.',
      grades: [
        { grade: 'Grade I', detail: 'Bleed without prolapsing outside the anal verge.' },
        { grade: 'Grade II', detail: 'Prolapse on straining but retract spontaneously.' },
        { grade: 'Grade III', detail: 'Prolapse on defecation and require manual reduction.' },
        { grade: 'Grade IV', detail: 'Permanently prolapsed, irreducible, high thrombosis risk.' },
      ],
    },
    {
      type: '2. External Piles',
      badge: 'Below Dentate Line (Pain-Sensitive)',
      summary: 'External haemorrhoids develop under the sensitive skin around the anus.',
      desc: 'Because this area is richly innervated with somatic nerves, external piles frequently cause intense itching, swelling, stinging irritation, and pain while sitting.',
      prolapseInfo:
        'Thrombosed External Haemorrhoid: Sometimes, blood pools and forms a clot inside an external haemorrhoid. This causes sudden, agonizing pain, bluish discolouration, and a firm, tender perianal lump that may require urgent medical clot evacuation.',
      grades: null,
    },
  ];

  // 8 Symptoms of Piles
  const commonSymptoms = [
    {
      title: 'Bright-Red Blood During or After Stools',
      desc: 'Fresh bright blood seen on toilet paper, dripping into the commode, or streaking the surface of hard stools.',
    },
    {
      title: 'Persistent Itching Around the Anus (Pruritus Ani)',
      desc: 'Chronic perianal irritation and itching caused by mucus discharge, skin tags, or incomplete cleaning.',
    },
    {
      title: 'Pain or Discomfort While Sitting',
      desc: 'Aching pressure, throbbing, or soreness around the tailbone and anal opening, exacerbated by hard chairs.',
    },
    {
      title: 'Swelling Near the Anal Opening',
      desc: 'Puffy, tender, or inflamed skin folds around the anus that become sensitive after bowel movements.',
    },
    {
      title: 'A Palpable Lump or Protrusion Around the Anus',
      desc: 'A noticeable protrusion that emerges during straining or remains permanently outside the anal verge.',
    },
    {
      title: 'Irritation & Burning After Bowel Movements',
      desc: 'Stinging sensation after passing stools or after wiping, often aggravated by friction or harsh soaps.',
    },
    {
      title: 'Mucus Discharge in Some Cases',
      desc: 'Slimy perianal moisture produced by exposed rectal mucosa of prolapsed internal haemorrhoids.',
    },
    {
      title: 'Feeling of Incomplete Bowel Evacuation (Tenesmus)',
      desc: 'A persistent sensation that the rectum still contains stool even after finishing a bowel movement.',
    },
  ];

  // 7 Causes and Risk Factors
  const causesAndRiskFactors = [
    {
      title: '1. Chronic Constipation',
      desc: 'Passing hard, dry stools significantly increases hydrostatic pressure around the rectum and anus. Repeated straining weakens venous connective tissues and forces vascular cushions to swell.',
      icon: AlertCircle,
    },
    {
      title: '2. Excessive Straining',
      desc: 'Straining forcefully during bowel movements places acute hydrostatic pressure on the delicate venous plexus of the anal sphincter, accelerating haemorrhoidal engorgement.',
      icon: Activity,
    },
    {
      title: '3. Prolonged Sitting on the Toilet',
      desc: 'Spending extended periods seated on the toilet commode—frequently aggravated by smartphone browsing—leaves the pelvic floor unsupported, allowing venous pooling in anal cushions.',
      icon: Clock,
    },
    {
      title: '4. Low-Fibre Diet',
      desc: 'A diet lacking dietary fiber from whole grains, legumes, fruits, and leafy vegetables results in small, dense stools that fail to stimulate normal peristalsis, causing difficult evacuation.',
      icon: Utensils,
    },
    {
      title: '5. Pregnancy & Hormonal Changes',
      desc: 'Pregnancy increases intra-abdominal pressure from the expanding uterus against pelvic veins. Circulating progesterone also relaxes venous smooth muscle walls, promoting haemorrhoids.',
      icon: Heart,
    },
    {
      title: '6. Ageing & Connective Tissue Weakening',
      desc: 'As individuals grow older, the fibroelastic connective tissues supporting the rectal and anal vascular cushions naturally stretch, lose elasticity, and predispose to prolapse.',
      icon: ShieldCheck,
    },
    {
      title: '7. Obesity & Physical Inactivity',
      desc: 'Excess body weight elevates intra-abdominal pressure. A sedentary lifestyle reduces colonic transit speed, exacerbating chronic constipation and venous congestion.',
      icon: Compass,
    },
  ];

  // Clinical Questions during Consultation
  const consultationQuestions = [
    'How long have you noticed symptoms, discomfort, or lumps?',
    'Does bleeding occur during or after bowel movements, and what color is it?',
    'Is there active pain, burning, or itching around the anus?',
    'How often do you experience constipation or difficulty passing stools?',
    'Is there a noticeable lump or protrusion around the anus that requires pushing back?',
    'What home remedies, ointments, or previous piles treatments have you tried?',
    'Do you have other digestive conditions, such as inflammatory bowel disease or liver disorders?',
  ];

  // 4 Available Medical Treatment Options
  const medicalOptions = [
    {
      step: '01',
      title: 'Dietary & Lifestyle Changes',
      badge: 'First-Line Conservative Foundation',
      desc: 'For mild to moderate haemorrhoids, optimizing stool consistency and bowel habits forms the cornerstone of effective management.',
      points: [
        'Eating abundant vegetables, fruits, legumes, and whole grains',
        'Increasing dietary fiber gradually (25–35 grams daily) to prevent bloating',
        'Drinking 2 to 2.5 litres of water daily unless medically restricted',
        'Avoiding excessive straining and responding promptly to the urge to defecate',
        'Eliminating prolonged toilet sitting (limit to 3–5 minutes)',
        'Maintaining regular physical activity (walking, swimming, light exercise)',
      ],
    },
    {
      step: '02',
      title: 'Medicines & Symptom Relief',
      badge: 'Short-Term Relief & Topical Care',
      desc: 'Physicians may prescribe evidence-based topical barrier ointments and local agents to reduce itching, inflammation, and discomfort.',
      points: [
        'Zinc oxide and soothing barrier creams to shield perianal skin',
        'Topical local anaesthetics (such as lignocaine) for acute discomfort',
        'Short-course mild corticosteroid creams strictly under medical supervision',
        'Gentle osmotic laxatives or stool softeners (isabgol, lactulose) when indicated',
        'Avoid prolonged unmonitored self-medication to prevent skin thinning',
      ],
    },
    {
      step: '03',
      title: 'Minimally Invasive Procedures',
      badge: 'Outpatient Interventions for Grade I–III',
      desc: 'When internal piles persist or bleed despite conservative management, safe outpatient procedural therapies are recommended.',
      points: [
        'Rubber band ligation: Application of tiny elastic bands to cut blood flow to internal cushions',
        'Sclerotherapy: Targeted chemical injection that causes the vascular cushion to shrink and scar',
        'Infrared coagulation: Application of infrared light energy to coagulate small internal haemorrhoidal vessels',
        'Minimal downtime, usually conducted in specialized clinics without hospitalization',
      ],
    },
    {
      step: '04',
      title: 'Surgical Treatment',
      badge: 'Advanced Grade IV & Complex Cases',
      desc: 'Severe, recurring, heavily bleeding, or irreducible piles require consultation with a qualified general or colorectal surgeon.',
      points: [
        'Conventional Haemorrhoidectomy (surgical excision of enlarged cushions)',
        'Stapled Haemorrhoidopexy (PPH) to reposition prolapsed tissue',
        'Doppler-guided haemorrhoidal artery ligation (DG-HAL)',
        'Urgent surgical excision/drainage for acute thrombosed external haemorrhoids',
        'Thorough surgeon consultation regarding benefits, risks, and post-operative recovery',
      ],
    },
  ];

  // 6 Clinic Selection Standards
  const selectionCriteria = [
    {
      title: 'Qualified Practitioners',
      desc: 'Check accredited medical qualifications (such as BHMS) and verified registration with the State Medical Council in Kerala.',
    },
    {
      title: 'Accurate Differential Diagnosis',
      desc: 'Ensure symptoms are professionally evaluated through clinical assessment rather than automatically assumed to be piles.',
    },
    {
      title: 'Clear Treatment Explanations',
      desc: 'Look for doctors who transparently explain the clinical benefits, limitations, and realistic expectations of every therapy.',
    },
    {
      title: 'Established Referral Protocols',
      desc: 'Responsible clinics maintain prompt referral pathways to general surgeons or proctologists when procedural care is indicated.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Honest billing, clear consultation fee structures, and transparent follow-up timelines with zero hidden commercial packages.',
    },
    {
      title: 'Patient Safety & Ethical Standards',
      desc: 'Never consult practitioners who promise unscientific guaranteed cures or advise against necessary medical investigations.',
    },
  ];

  // 7 Questions to Ask Before Choosing a Provider
  const questionsToAsk = [
    {
      q: 'What could be causing my symptoms?',
      why: 'Clarifies whether constipation, diet, lifestyle, or another condition is the primary driver.',
    },
    {
      q: 'Do I need an examination or further investigation?',
      why: 'Determines if a digital rectal exam, anoscopy, or proctoscopy is warranted.',
    },
    {
      q: 'Could my bleeding be related to another condition?',
      why: 'Ensures anal fissures, polyps, or colorectal diseases are systematically ruled out.',
    },
    {
      q: 'What evidence-based treatment options are available?',
      why: 'Helps compare conservative dietary therapy against procedural or surgical interventions.',
    },
    {
      q: 'When should I consult a surgeon?',
      why: 'Establishes clear clinical benchmarks for when non-surgical therapies are no longer appropriate.',
    },
    {
      q: 'What symptoms require urgent medical attention?',
      why: 'Empowers you with critical knowledge on red-flag emergencies like heavy bleeding or dizziness.',
    },
    {
      q: 'What are the limitations of the treatment being suggested?',
      why: 'Ensures you have realistic expectations and transparent knowledge of clinical efficacy.',
    },
  ];

  // Everyday Prevention Tips
  const preventionTips = [
    {
      title: 'Eat Fibre-Rich Foods',
      desc: 'Include fruits, vegetables, legumes, whole grains, and oats in your daily meals. Increase fibre gradually with plenty of fluids to avoid abdominal gas.',
      icon: Utensils,
    },
    {
      title: 'Drink Adequate Water',
      desc: 'Sufficient daily fluid intake softens stools and enables dietary fibre to create smooth bowel transit. Drink 2–2.5 litres daily unless fluid-restricted.',
      icon: Droplets,
    },
    {
      title: 'Avoid Straining at Stool',
      desc: 'Try not to force bowel movements. If stools are hard or difficult to pass, consult your doctor regarding safe stool softeners rather than bearing down.',
      icon: AlertCircle,
    },
    {
      title: 'Stay Physically Active',
      desc: 'Regular daily walking (20–30 minutes) and moderate physical exercise stimulate intestinal peristalsis and help maintain regular bowel habits.',
      icon: Activity,
    },
    {
      title: 'Avoid Prolonged Toilet Sitting',
      desc: 'Do not spend unnecessary time sitting on the toilet commode. Leave your smartphone outside the bathroom and avoid delaying bowel movements.',
      icon: Clock,
    },
    {
      title: 'Maintain Gentle Anal Hygiene',
      desc: 'Clean the perianal area gently with warm water after bowel movements. Avoid aggressive rubbing with dry toilet paper or using perfumed soaps.',
      icon: ShieldCheck,
    },
  ];

  // Emergency Red Flags
  const redFlags = [
    {
      title: 'Heavy or Continuous Rectal Bleeding',
      desc: 'Blood pouring steadily into the toilet bowl, passing large clots, or bleeding that does not stop.',
    },
    {
      title: 'Dizziness, Fainting, or Unusual Weakness',
      desc: 'Lightheadedness, pale skin, cold sweats, or collapse suggesting acute significant blood loss.',
    },
    {
      title: 'Black or Tarry Stools (Melena)',
      desc: 'Sticky, foul-smelling dark black stools indicating bleeding from the upper gastrointestinal tract.',
    },
    {
      title: 'Severe or Rapidly Worsening Anal Pain',
      desc: 'Excruciating sudden pain that prevents sitting, walking, or passing stools (possible acute thrombosis).',
    },
    {
      title: 'Fever or Pus Around the Anal Area',
      desc: 'Chills, fever, or purulent foul drainage pointing to an active perianal abscess or fistula.',
    },
    {
      title: 'Painful Swelling With Infection Signs',
      desc: 'Hot, red, exquisitely tender perianal mass requiring urgent surgical evaluation and antibiotics.',
    },
    {
      title: 'Bleeding With Weight Loss or Bowel Changes',
      desc: 'Unexplained weight loss, persistent diarrhoea, or altered stool caliber requiring colorectal investigation.',
    },
  ];

  // 10 Detailed FAQs from user prompt
  const faqs = [
    {
      q: '1. What are piles?',
      a: 'Piles, also known as haemorrhoids, are swollen vascular structures and supporting connective tissues located in and around the anus and lower rectum. They are normal anatomical cushions that help maintain continence, but when swollen or inflamed, they can cause rectal bleeding, itching, swelling, irritation, and discomfort.',
    },
    {
      q: '2. Where can I get Piles Consultation in Kuttippuram?',
      a: 'You can consult qualified healthcare professionals in and around Kuttippuram. Anjali Homoeo Clinic is conveniently located right in Kuttippuram on the Tirur-Kuttippuram Road (near Mini Civil Station, Kavumopuram), with a branch in Puthanathani. Patients from Kuttippuram, Valanchery, Tirur, Edappal, and surrounding areas can book in-person clinical consultations or confidential online video consultations for initial symptom assessment, lifestyle triage, and referral coordination.',
    },
    {
      q: '3. Is Piles Homeopathy Treatment in Kuttippuram effective?',
      a: 'There is insufficient reliable scientific evidence that homoeopathy can cure piles, shrink enlarged haemorrhoidal cushions, or permanently reverse prolapse. While some patients explore homoeopathy for constitutional wellbeing alongside dietary changes, established evidence-based medical treatments and surgical procedures remain the proven approaches. Homeopathic remedies should never delay necessary medical investigations or replace surgical referral.',
    },
    {
      q: '4. Can piles cause bleeding?',
      a: 'Yes. Internal haemorrhoids frequently cause painless, bright-red bleeding during or immediately after bowel movements, which may coat the stool or drip into the toilet bowl. However, rectal bleeding should never be assumed to be piles without a medical examination, as anal fissures, polyps, inflammatory bowel disease (IBD), and colorectal conditions can produce similar bleeding.',
    },
    {
      q: '5. Can piles disappear without surgery?',
      a: 'Yes, mild cases (such as Grade I and early Grade II internal piles or mild external swelling) often improve with conservative measures, including high-fibre nutrition, drinking 2 to 2.5 litres of water daily, avoiding toilet straining, taking warm sitz baths, and using short courses of soothing topical ointments. However, advanced, prolapsed, or thrombosed piles may require office-based procedures or surgery.',
    },
    {
      q: '6. Which doctor should I consult for piles?',
      a: 'A qualified general physician or homoeopathic doctor can perform an initial symptom assessment, review bowel habits, and provide lifestyle guidance. For persistent bleeding, severe pain, Grade III/IV prolapse, or suspected thrombosis, consultation with a general surgeon or colorectal specialist (proctologist) is recommended for definitive examination and procedural management.',
    },
    {
      q: '7. Does constipation cause piles?',
      a: 'Yes. Chronic constipation is one of the leading causes of piles. Passing hard, dry stools requires prolonged, forceful straining, which places intense hydrostatic pressure on the vascular cushions around the lower rectum and anus, causing veins to dilate, weaken, and engorge.',
    },
    {
      q: '8. What foods should I eat if I have piles?',
      a: 'You should eat fibre-rich foods such as green leafy vegetables, fresh fruits (papaya, apples, pears), lentils, legumes, oats, whole grains, and psyllium husk (isabgol). Fiber absorbs water, creating soft, bulky stools that glide smoothly through the anal canal without straining. Always increase fibre intake gradually and drink plenty of water.',
    },
    {
      q: '9. Can piles come back after treatment?',
      a: 'Yes. Piles can recur after medical treatments, procedural banding, or even surgery if underlying triggers persist. Chronic constipation, toilet straining, sedentary lifestyle, and low-fibre intake can lead to new swollen vascular cushions. Long-term dietary fiber, good hydration, and healthy toilet habits are crucial to prevent recurrence.',
    },
    {
      q: '10. When should I see a Piles specialist in Kuttippuram?',
      a: 'You should see a doctor or piles specialist if you experience persistent rectal bleeding, recurring anal discomfort, painful lumps, or symptoms that fail to improve after conservative lifestyle measures. Seek immediate emergency medical care if you notice heavy continuous bleeding, dizziness, black tarry stools, high fever, or severe sudden anal pain.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Sticky Bar for Quick Mobile/Desktop Booking & WhatsApp */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Piles Treatment Guide • Kuttippuram"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="anorectal-vascular-care"
        categoryLabel="Anorectal & Vascular Care"
        pageTitle="Homeopathy Clinic near Kuttippuram for Piles Treatment"
      />

      {/* Hero Section with DOCTOR CARD ON THE LEFT */}
      <RegionalHeroSection
        badgeIcon={<Activity className="w-4 h-4 text-emerald-400" />}
        badgeText="CLINICAL ANORECTAL CARE GUIDE • KUTTIPPURAM"
        title="Homeopathy Clinic near Kuttippuram for Piles Treatment"
        subtitle="A comprehensive clinical guide explaining piles (haemorrhoids), internal vs external types, risk factors, evidence-based medical care, diagnostic evaluation, and ethical healthcare guidance in Kuttippuram."
        metrics={[
          { label: 'Primary Clinic', value: 'Kuttippuram' },
          { label: 'Branch Center', value: 'Puthanathani' },
          { label: 'Consultation Mode', value: 'In-Clinic & Online' },
          { label: 'Registration', value: 'Council Reg. BHMS' },
        ]}
        doctorSubtitle="Consultant Homoeopathic Physician • Anorectal & Lifestyle Care"
        doctorBio="Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, dietary fiber protocols, and medical triage at Anjali Homoeo Clinic, Kuttippuram (Tirur-Kuttippuram Road) and Puthanathani, coordinating timely surgical referrals whenever indicated."
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
              Piles, medically known as <strong>haemorrhoids</strong>, are a common condition that affects the blood vessels and supporting tissues around the anus and lower rectum. They can cause discomfort, itching, swelling, irritation and bleeding during bowel movements. Although piles are common, symptoms should not be ignored because rectal bleeding and anal discomfort can also be associated with other medical conditions that require proper evaluation.
            </p>
            <p>
              People experiencing these symptoms may look for a reliable <strong>Piles Clinic in Kuttippuram</strong> to understand their condition and explore suitable treatment options. Whether you experience occasional discomfort, persistent itching or bleeding during bowel movements, getting an accurate diagnosis is an important first step.
            </p>
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm sm:text-base flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Evidence-Based Clarity:</strong> If you are searching for a Homeopathy Clinic near Kuttippuram for Piles Treatment, it is useful to understand the different types of piles, their possible causes, available medical treatments and preventive measures. Homoeopathy is one approach some people explore, but there is insufficient reliable scientific evidence that homoeopathic medicines can cure piles or reliably shrink haemorrhoids. Established medical treatments should not be delayed or replaced with unproven remedies.
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              This guide explains the symptoms, causes, diagnosis, treatment options and important considerations when seeking piles care near Kuttippuram.
            </p>
          </div>
        </section>

        {/* 8 Key Takeaways */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Essential Clinical Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Key Takeaways
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Vital insights to understand haemorrhoids, rectal bleeding, and safe medical pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-sm mb-3">
                    {idx + 1}
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

        {/* What Are Piles? Internal vs. External */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Anatomy & Classification
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              What Are Piles?
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Piles are swollen vascular structures located in and around the anus and lower rectum. These structures are naturally present and help support normal bowel control and continence. Problems arise when they become enlarged, swollen, congested or symptomatic due to elevated pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pilesTypes.map((type, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block text-xs font-bold text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-3">
                    {type.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {type.type}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {type.desc}
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-slate-200/90 text-sm text-slate-700 mb-4">
                    <p className="font-semibold text-slate-900 mb-1">Prolapse & Complication Insight:</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {type.prolapseInfo}
                    </p>
                  </div>
                </div>

                {type.grades && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Four Clinical Grades of Internal Piles:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {type.grades.map((g, gIdx) => (
                        <div key={gIdx} className="p-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="font-bold text-indigo-600 block">{g.grade}</span>
                          <span className="text-slate-600">{g.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Common Symptoms of Piles */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-rose-700 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Clinical Manifestations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Common Symptoms of Piles
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Symptoms vary significantly based on internal versus external location, degree of swelling, and stool consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonSymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-start"
              >
                <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 font-bold flex items-center justify-center text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  {symptom.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {symptom.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Differential Diagnosis Warning */}
          <div className="mt-8 bg-rose-50 border border-rose-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-rose-950 mb-1">
                Rectal Bleeding Notice: Do Not Self-Diagnose
              </h4>
              <p className="text-rose-900 text-sm leading-relaxed">
                If you notice bleeding, do not assume that piles are the sole cause. Anal fissures, inflammatory bowel conditions (Crohn’s, ulcerative colitis), infections, polyps, and colorectal diseases can also produce similar symptoms. A qualified doctor should assess persistent or unexplained bleeding.
              </p>
            </div>
          </div>
        </section>

        {/* Causes & Risk Factors */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Etiology & Triggers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Causes and Risk Factors of Piles
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Understanding these risk factors helps individuals identify everyday bowel habits and lifestyle factors that can be modified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causesAndRiskFactors.map((cause, idx) => {
              const Icon = cause.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-600 mb-3 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Piles Consultation in Kuttippuram: Why Proper Diagnosis Matters */}
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-300 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Clinical Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Piles Consultation in Kuttippuram: Why Proper Diagnosis Matters
            </h2>
            <p className="text-indigo-200 mt-3 text-sm sm:text-base leading-relaxed">
              People experiencing anal discomfort or rectal bleeding should consider a medical consultation before choosing a treatment. A thorough consultation evaluates your entire health picture rather than assuming every anal symptom is simple haemorrhoids.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-semibold text-white text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Key Assessment Questions Asked During Consultation:
              </h3>
              <div className="space-y-2">
                {consultationQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-indigo-100 flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-300" />
                Physical Examination Protocols
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                Depending on the symptoms, the doctor may recommend a visual inspection, digital rectal examination (DRE), or proctoscopy/anoscopy.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-black/20 border border-white/10 text-xs text-indigo-100">
                  <strong>Digital Rectal Examination (DRE):</strong> Palpating the anal canal to assess sphincter tone, identify lumps, tenderness, or induration.
                </div>
                <div className="p-3 rounded-lg bg-black/20 border border-white/10 text-xs text-indigo-100">
                  <strong>Anoscopy / Proctoscopy:</strong> Inserting a short, lighted diagnostic scope to visually evaluate internal haemorrhoid cushions and mucosal integrity.
                </div>
                <div className="p-3 rounded-lg bg-black/20 border border-white/10 text-xs text-indigo-100">
                  <strong>Further Specialist Referral:</strong> When bleeding is persistent, unexplained, or occurs in patients over 40–50, colonoscopy is coordinated to rule out colorectal pathologies.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Medical Options */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Evidence-Based Modalities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Piles Treatment in Kuttippuram: Available Medical Options
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Treatment depends on the severity of symptoms, the type of haemorrhoids, and the patient’s overall health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicalOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      {opt.badge}
                    </span>
                    <span className="text-slate-400 font-mono text-xs">{opt.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {opt.desc}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {opt.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Piles Homeopathy Treatment in Kuttippuram: Important Information */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Scientific Evidence Disclosure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Piles Homeopathy Treatment in Kuttippuram: Important Information
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Some people explore homoeopathy when looking for ways to manage recurring piles symptoms. A <strong>Piles Homeopathy Treatment in Kuttippuram</strong> consultation may involve discussing bowel habits, lifestyle, personal health history and previous treatment experiences.
            </p>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
              <h4 className="font-bold text-purple-900 text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-700" />
                Transparency on Scientific Evidence & Limitations
              </h4>
              <p className="text-sm leading-relaxed">
                However, it is important to understand the available scientific evidence. There is insufficient reliable evidence that homoeopathic medicines can cure haemorrhoids, shrink swollen haemorrhoidal tissue or prevent complications.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-medium">
                Homoeopathy should not replace established medical treatment or delay assessment of rectal bleeding.
              </p>
            </div>
            <p>
              If you are considering a Piles Homeopathic Clinic in Kuttippuram, discuss your symptoms with a qualified medical professional and understand the limitations of homoeopathic treatment.
            </p>
            <p>
              A responsible <strong>Homeopathic doctor for piles in Kuttippuram</strong> should communicate clearly about the evidence, avoid guaranteeing a cure and recommend referral when medical or surgical evaluation is necessary. Do not discontinue prescribed medicines or postpone recommended procedures without consulting your treating doctor.
            </p>
          </div>
        </section>

        {/* Choosing a Piles Clinic in Kuttippuram */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Clinic Selection Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Choosing a Piles Clinic in Kuttippuram
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Selecting an appropriate healthcare provider is important when dealing with recurring anal discomfort or bleeding.
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
                    0{idx + 1}
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

          <div className="mt-6 p-5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong>Referral Notice:</strong> A Piles specialist in Kuttippuram should be able to assess the condition and recommend appropriate care. For complex, persistent or severe haemorrhoids, a general surgeon or colorectal specialist may be required. People searching for a Homeopathy clinic for piles in Kuttippuram should also understand that homoeopathy has not been proven to cure this condition.
          </div>
        </section>

        {/* Questions to Ask */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-cyan-700 uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Patient Empowerment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Homeopathy Clinic for Piles in Kuttippuram: Questions to Ask
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Before choosing a healthcare provider, consider asking these crucial clinical questions to make informed decisions:
            </p>
          </div>

          <div className="space-y-4">
            {questionsToAsk.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    {item.q}
                  </span>
                </div>
                <span className="text-xs text-slate-500 sm:text-right shrink-0">
                  {item.why}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Everyday Prevention Tips */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Long-Term Bowel Health
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Piles Treatment near Kuttippuram: Everyday Prevention Tips
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Healthy bowel habits can help reduce the risk of piles and prevent symptoms from worsening or recurring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionTips.map((tip, idx) => {
              const Icon = tip.icon;
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
                      {tip.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {tip.desc}
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
              Emergency Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              When Should You Seek Immediate Medical Attention?
            </h2>
            <p className="text-rose-100 mt-2 text-sm sm:text-base leading-relaxed">
              Although piles are common, certain symptoms should never be ignored. Heavy bleeding, fainting, severe pain or black stools may require urgent emergency hospital assessment. Do not assume these symptoms are caused by piles.
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

        {/* 10 FAQs Section (Interactive Accordion) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Answers to common questions about piles consultation, evidence, symptoms, and care options near Kuttippuram.
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
                        isOpen ? 'rotate-180 text-indigo-600' : ''
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
            <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Take the Right Steps Towards Better Bowel Health
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Schedule Your Confidential Consultation
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Piles can affect everyday comfort, bowel habits and quality of life. Although many cases can be managed with appropriate lifestyle changes and medical treatment, persistent symptoms should not be ignored. Begin with a proper medical consultation at Anjali Homoeo Clinic in Kuttippuram or Puthanathani.
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
