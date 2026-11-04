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
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const PilesPonnaniPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact details
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles Treatment (Ponnani patient guide).'
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
    navigateToBookingWithReason('Piles Consultation - Ponnani', 'online');
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
      desc: 'Piles, medically known as haemorrhoids, are swollen blood vessels and supporting connective tissues in and around the lower rectum and anal canal.',
    },
    {
      title: 'Common Symptoms',
      desc: 'Common symptoms include rectal bleeding, anal itching, localized discomfort, swelling or lumps, and pain during or after bowel movements.',
    },
    {
      title: 'Multifactorial Causes',
      desc: 'Major contributing causes include chronic constipation, straining, low-fiber intake, prolonged toilet sitting, diarrhoea, pregnancy, and heavy lifting.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'There is currently insufficient reliable scientific evidence to demonstrate that homeopathic treatments are effective for piles or reversing vascular prolapse.',
    },
    {
      title: 'Evidence-Based Management',
      desc: 'Management depends on the type, severity, and grade of piles: dietary modifications, fiber supplementation, topical ointments, sitz baths, or surgical intervention.',
    },
    {
      title: 'Fiber & Hydration Foundation',
      desc: 'Increasing dietary fiber to 25–35 grams daily, drinking plenty of water, and avoiding toilet straining are critical first-line measures for smooth bowel movements.',
    },
    {
      title: 'Clinical Assessment Necessity',
      desc: 'Persistent rectal bleeding or anal discomfort should always be evaluated by a qualified doctor to confirm the diagnosis and rule out other serious conditions.',
    },
    {
      title: 'Emergency Warning Signs',
      desc: 'Heavy, continuous bleeding, dark tarry stools, dizziness, weakness, or severe sudden anal pain require immediate emergency medical attention.',
    },
  ];

  // 4 Grades of Internal Piles
  const pilesGrades = [
    {
      grade: 'Grade I',
      title: 'Internal & Non-Prolapsing',
      desc: 'Vascular cushions remain completely inside the anal canal and do not protrude through the anus. Often painless, but may cause bright-red bleeding coating the stool or toilet paper.',
    },
    {
      grade: 'Grade II',
      title: 'Prolapse on Straining, Spontaneous Retraction',
      desc: 'Haemorrhoidal cushions bulge outside the anal sphincter during defecation or heavy straining, but spontaneously retract back inside once straining stops.',
    },
    {
      grade: 'Grade III',
      title: 'Prolapse Requiring Manual Reduction',
      desc: 'Piles protrude outside the anus during bowel movements or physical exertion and do not return automatically. The patient must push them back inside manually.',
    },
    {
      grade: 'Grade IV',
      title: 'Permanently Prolapsed & Irreducible',
      desc: 'Swollen cushions remain permanently outside the anal opening and cannot be manually reduced. High risk of strangulation, blood clots (thrombosis), and intense pain.',
    },
  ];

  // 8 Contributing causes of piles
  const causesOfPiles = [
    {
      title: 'Chronic Constipation & Straining',
      desc: 'Straining against hard, dry stools creates immense hydrostatic pressure within the pelvic and rectal veins, stretching and weakening vessel walls.',
    },
    {
      title: 'Low Dietary Fiber & Poor Hydration',
      desc: 'Diets lacking whole grains, vegetables, and fluids produce small, firm stools that require high muscular effort and straining during defecation.',
    },
    {
      title: 'Prolonged Sitting on the Toilet',
      desc: 'Sitting for extended periods on the toilet seat (often exacerbated by smartphone use) leaves the pelvic floor unsupported, allowing blood to pool in anal veins.',
    },
    {
      title: 'Chronic Diarrhoea',
      desc: 'Frequent loose, watery bowel movements cause continuous perianal irritation, sphincter spasm, and recurring vascular congestion in the anal cushions.',
    },
    {
      title: 'Pregnancy & Childbirth',
      desc: 'High circulating progesterone weakens vein walls, while the growing baby exerts direct pressure on pelvic blood vessels, impeding venous drainage.',
    },
    {
      title: 'Heavy Lifting & Strenuous Physical Exertion',
      desc: 'Frequent heavy lifting or occupations requiring intense abdominal straining repeatedly raise intra-abdominal pressure, aggravating vascular cushions.',
    },
    {
      title: 'Excess Body Weight & Pelvic Pressure',
      desc: 'Increased body weight raises intra-abdominal and pelvic pressure, placing extra strain on the vascular network of the lower rectum and anus.',
    },
    {
      title: 'Ageing & Tissue Weakening',
      desc: 'As people grow older, the connective tissues supporting the veins in the rectum and anal canal naturally stretch, weaken, and lose elasticity.',
    },
  ];

  // 5 Steps of the Consultation Process
  const consultationSteps = [
    {
      step: '01',
      title: 'Detailed Symptom & Clinical History',
      desc: 'The doctor reviews the timeline of your symptoms, bleeding characteristics, pain levels, and any previous treatments or over-the-counter remedies.',
    },
    {
      step: '02',
      title: 'Bowel Habits & Lifestyle Review',
      desc: 'A comprehensive evaluation of your daily fiber intake, fluid hydration, physical activity, and toilet habits to identify root triggers of constipation.',
    },
    {
      step: '03',
      title: 'Assessment & Examination Guidance',
      desc: 'Determining whether an in-person physical assessment or proctoscopy is necessary to confirm piles and differentiate from anal fissures, fistulas, or polyps.',
    },
    {
      step: '04',
      title: 'Personalised Evidence-Based Care Plan',
      desc: 'Formulating an individualized care strategy comprising dietary fiber adjustments, hydration goals, gentle topical care, and constitutional homeopathic support if requested.',
    },
    {
      step: '05',
      title: 'Monitoring & Referral Protocol',
      desc: 'Clear follow-up guidance to track your recovery, with prompt referral pathways to general surgeons or proctologists if procedural intervention is required.',
    },
  ];

  // 6 Medical Treatment Options
  const medicalOptions = [
    {
      step: '01',
      title: 'Dietary Modifications & Fiber Supplementation',
      badge: 'First-Line Conservative Care',
      desc: 'Consuming 25 to 35 grams of dietary fiber daily alongside 2–2.5 litres of water produces soft, bulky stools that pass smoothly without straining.',
      points: [
        'Soluble and insoluble fiber from oats, lentils, vegetables, and psyllium husk',
        'Adequate hydration throughout the day to prevent fecal impaction',
        'Gradual fiber increase to avoid bloating or gas',
      ],
    },
    {
      step: '02',
      title: 'Topical Medicated Ointments & Creams',
      badge: 'Symptom Relief',
      desc: 'Short courses of soothing creams and protective barrier ointments help alleviate localized itching, burning discomfort, and swelling.',
      points: [
        'Zinc oxide barrier ointments to soothe irritated perianal skin',
        'Topical local anaesthetics (such as lignocaine) to relieve acute discomfort',
        'Short-course mild steroid ointments used strictly under medical supervision',
      ],
    },
    {
      step: '03',
      title: 'Warm Sitz Baths',
      badge: 'Spasm & Pain Reduction',
      desc: 'Soaking the anal region in a tub of warm water for 10–15 minutes two to three times daily helps relax the hypertonic anal sphincter.',
      points: [
        'Relieves anal muscle spasms and aching after bowel movements',
        'Improves local blood flow to promote tissue healing',
        'Provides gentle, non-abrasive cleansing after passing stools',
      ],
    },
    {
      step: '04',
      title: 'Stool Softeners & Osmotic Laxatives',
      badge: 'Constipation Management',
      desc: 'When dietary changes alone are insufficient, gentle stool softeners or osmotic laxatives may be recommended short-term to avoid straining.',
      points: [
        'Prevents hard stools from scratching or irritating enlarged veins',
        'Used under medical guidance to establish regular bowel transit',
        'Avoiding stimulant laxatives that can cause abdominal cramps',
      ],
    },
    {
      step: '05',
      title: 'Minimally Invasive Outpatient Procedures',
      badge: 'Grade I–III Interventions',
      desc: 'For bleeding or prolapsing internal piles that do not respond to conservative care, office-based medical procedures offer high success rates.',
      points: [
        'Rubber band ligation: tiny elastic bands applied to cut off blood flow',
        'Sclerotherapy: injection of a chemical agent to shrink swollen cushions',
        'Infrared coagulation: application of infrared light to coagulate vessels',
      ],
    },
    {
      step: '06',
      title: 'Surgical Treatment for Advanced Haemorrhoids',
      badge: 'Grade IV & Complicated Cases',
      desc: 'When piles are permanently prolapsed, heavily bleeding, or acutely thrombosed, surgical consultation provides definitive resolution.',
      points: [
        'Haemorrhoidectomy (surgical excision of vascular cushions)',
        'Stapled haemorrhoidopexy (PPH) or Doppler-guided arterial ligation',
        'Urgent outpatient clot evacuation for thrombosed external piles',
      ],
    },
  ];

  // Specialist Selection Criteria
  const selectionCriteria = [
    {
      number: '01',
      title: 'Accredited Medical Qualifications',
      desc: 'Verify that the doctor holds recognized, accredited qualifications (such as BHMS) and is formally registered with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Thorough Clinical Assessment',
      desc: 'A dedicated doctor conducts a detailed medical history, evaluates bowel regularity and dietary habits, and emphasizes accurate clinical diagnosis.',
    },
    {
      number: '03',
      title: 'Transparent Efficacy Communication',
      desc: 'Reputable healthcare providers clearly disclose the evidence base of treatments and explain realistic expectations rather than promising magical cures.',
    },
    {
      number: '04',
      title: 'Collaborative Surgical Referral Pathways',
      desc: 'Ensure the clinic maintains active referral relationships with general surgeons, proctologists, and diagnostic imaging centres when procedural care is warranted.',
    },
    {
      number: '05',
      title: 'Patient Privacy & Confidential Care',
      desc: 'Anorectal concerns require a sensitive, respectful, and fully confidential consultation environment where patients feel heard and supported.',
    },
  ];

  // Lifestyle Prevention Tips
  const lifestyleTips = [
    {
      number: '1',
      title: 'Eat a High-Fiber Diet Daily',
      desc: 'Incorporate plenty of whole grains, brown rice, oats, lentils, green leafy vegetables, papaya, apples, and psyllium husk into your daily meals.',
    },
    {
      number: '2',
      title: 'Maintain Consistent Daily Hydration',
      desc: 'Drink at least 2 to 2.5 litres of clean water throughout the day. Water is essential for dietary fiber to swell and create soft, easily passed stools.',
    },
    {
      number: '3',
      title: 'Never Ignore or Delay the Urge',
      desc: 'Go to the toilet as soon as you feel the urge to pass stool. Delaying allows the rectum to absorb more water, making stools dry, hard, and painful.',
    },
    {
      number: '4',
      title: 'Avoid Straining & Limit Toilet Sitting Time',
      desc: 'Do not strain or force bowel movements. Limit commode time to 3–5 minutes and avoid bringing mobile phones, newspapers, or books to the toilet.',
    },
    {
      number: '5',
      title: 'Gentle Perianal Cleansing',
      desc: 'Wash gently with warm water instead of vigorous wiping with rough toilet paper. Pat dry with a soft cloth to prevent skin irritation.',
    },
    {
      number: '6',
      title: 'Adopt an Optimal Posture (Squatting Angle)',
      desc: 'Use a low footstool to elevate your knees slightly above your hips while seated on a Western commode. This straightens the anorectal passage for easier evacuation.',
    },
    {
      number: '7',
      title: 'Engage in Regular Physical Exercise',
      desc: 'Moderate daily exercise such as brisk walking, swimming, or yoga stimulates intestinal motility and helps prevent constipation and venous pooling.',
    },
  ];

  // Emergency Red Flags
  const redFlags = [
    {
      title: 'Heavy, Continuous Rectal Bleeding',
      desc: 'Bleeding that pours continuously, fills the toilet bowl with bright blood, or produces large blood clots requires urgent hospital evaluation.',
    },
    {
      title: 'Severe, Sudden, Agonizing Anal Pain',
      desc: 'Sudden excruciating pain can indicate a thrombosed external haemorrhoid, strangulated prolapse, or perianal abscess requiring immediate medical care.',
    },
    {
      title: 'Dizziness, Faintness, or Extreme Weakness',
      desc: 'Feeling lightheaded, breathless, pale, or weak suggests significant acute or chronic blood loss resulting in clinical anemia.',
    },
    {
      title: 'Black, Maroon, or Tarry Stools (Melena)',
      desc: 'Dark black or sticky tarry stools signify bleeding from the upper gastrointestinal tract and must never be dismissed as simple piles.',
    },
    {
      title: 'Fever, Chills, or Foul-Smelling Perianal Discharge',
      desc: 'Systemic signs such as fever or pus discharge indicate a localized bacterial infection, perianal abscess, or anal fistula requiring prompt surgical drainage.',
    },
  ];

  // 10 Detailed FAQs from user prompt
  const faqs = [
    {
      q: 'What is a homeopathy clinic near Ponnani for piles treatment?',
      a: 'A homeopathy clinic near Ponnani for piles treatment refers to healthcare facilities and qualified practitioners in the nearby region (such as Kuttippuram or Puthanathani) offering consultations for individuals experiencing piles or haemorrhoid symptoms. While homeopathy takes an individualized, holistic approach to patient health, patients should understand that current reliable scientific evidence has not established homeopathic remedies as an effective curative treatment for piles. A qualified physician provides clinical evaluation, dietary guidance, and triage to ensure safe, evidence-based care.',
    },
    {
      q: 'Can piles be treated or managed without surgery?',
      a: 'Yes. Many early-stage cases (Grade I and Grade II internal piles) improve significantly with conservative, non-surgical approaches. These include increasing dietary fiber, drinking 2 to 2.5 litres of water daily, avoiding toilet straining, taking warm sitz baths, and using short courses of soothing topical ointments. Surgery is generally reserved for advanced Grade III or IV piles, persistent bleeding, or painful complications.',
    },
    {
      q: 'When should I consult a doctor for piles in Ponnani?',
      a: 'You should consult a healthcare professional whenever you experience rectal bleeding, anal pain, persistent itching, or a newly felt lump near the anus. Although piles are common, rectal bleeding can also arise from anal fissures, polyps, inflammatory bowel disease, or other serious colorectal conditions. Prompt medical evaluation confirms the correct diagnosis and prevents complications.',
    },
    {
      q: 'Is homeopathy clinically proven to cure piles?',
      a: 'Currently, there is insufficient reliable scientific clinical trial evidence to prove that homeopathic remedies shrink enlarged hemorrhoidal vascular cushions, reverse tissue prolapse, or provide a permanent cure for piles. While some patients explore homeopathy alongside lifestyle habits, responsible healthcare requires obtaining an accurate clinical diagnosis and not delaying conventional medical or surgical interventions when necessary.',
    },
    {
      q: 'What is the difference between internal and external piles?',
      a: 'Internal piles originate inside the lower rectum above the dentate line. Because this upper zone lacks somatic pain-sensing nerves, internal piles are typically painless, though they may bleed during bowel movements or prolapse outward. External piles develop under the sensitive skin around the anal verge below the dentate line. They can cause itching, swelling, burning, and severe pain if a blood clot develops inside (thrombosed external haemorrhoid).',
    },
    {
      q: 'What should I expect during a piles consultation near Ponnani?',
      a: 'During a consultation, the doctor will take a thorough medical history regarding your symptom timeline, bowel frequency, stool consistency, bleeding characteristics, and diet. The practitioner will evaluate your overall health, provide tailored dietary fiber and hydration advice, explain appropriate treatment pathways, and determine if an in-person physical assessment or proctoscopy by a specialist is required.',
    },
    {
      q: 'How can I differentiate piles from an anal fissure?',
      a: 'Piles typically present with painless bright-red bleeding coating the stool or a soft protruding lump. An anal fissure, on the other hand, is a sharp tear in the mucosal lining of the anal canal that produces intense, razor-sharp, cutting pain during and for several hours after passing stool, accompanied by streaks of bright blood on toilet paper. Because symptoms can overlap, a doctor’s examination is essential.',
    },
    {
      q: 'What lifestyle changes help manage piles symptoms?',
      a: 'Essential lifestyle habits include eating 25–35 grams of dietary fiber daily (from vegetables, fruits, whole grains, and psyllium husk), drinking at least 2 litres of water daily, avoiding straining on the toilet, limiting commode sitting time to 3–5 minutes, maintaining gentle perianal hygiene with warm water, and engaging in regular moderate physical exercise like walking.',
    },
    {
      q: 'How far is Anjali Homoeo Clinic from Ponnani?',
      a: 'Anjali Homoeo Clinic in Kuttippuram is located approximately 18 to 22 kilometres from Ponnani town, making it easily accessible in about 25 to 30 minutes by car, bus, or taxi via Chamravattom / Tirur–Kuttippuram Road. A branch clinic is also located at Puthanathani. Patients from Ponnani, Edappal, Changaramkulam, and Chamravattom can attend in person or opt for confidential online video consultations.',
    },
    {
      q: 'Can I book an online consultation if I live in Ponnani?',
      a: 'Yes. Dr. Anjali Chandrasekhar (BHMS) provides confidential online video consultations for patients in Ponnani and across Kerala. During the online session, you can discuss your symptoms in complete privacy, receive personalized dietary and lifestyle recommendations, and receive clinical advice on whether an in-person examination or surgical evaluation is necessary.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Piles Treatment Near Ponnani"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="anorectal-vascular-care"
        categoryLabel="Anorectal & Vascular Care"
        pageTitle="Homeopathy Clinic Near Ponnani for Piles Treatment"
      />

      {/* Hero Section with Doctor Profile on the LEFT side */}
      <RegionalHeroSection
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Clinical Proctology Guide • Ponnani Patients"
        title="Homeopathy Clinic Near Ponnani for Piles Treatment"
        subtitle="Clinical guidance and evidence-informed consultations for patients in Ponnani, Edappal, and Malappuram experiencing piles, haemorrhoids, rectal bleeding, anal fissures, or anorectal discomfort."
        metrics={[
          { label: 'Condition Focus', value: 'Piles & Haemorrhoids' },
          { label: 'Clinical Assessment', value: 'Proctology & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Proctology & Anorectal Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential anorectal assessments, piles grading, dietary fiber counseling, and evidence-grounded constitutional care in Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* Opening Intro Section */}
      <section className="py-10 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          <p className="font-medium text-[#1E2559] text-base sm:text-lg">
            Piles, medically known as haemorrhoids, are a common health concern that can affect people of different age groups. Symptoms such as rectal bleeding, itching, discomfort, swelling and pain during bowel movements can interfere with everyday activities and reduce quality of life. Although many people hesitate to discuss these symptoms, seeking timely medical advice is important for identifying the cause and choosing appropriate treatment.
          </p>
          <p>
            If you are searching for a <strong>homeopathy clinic near Ponnani for piles treatment</strong>, understanding the condition and available healthcare options can help you make an informed decision. A consultation with a qualified healthcare professional can help assess your symptoms, identify possible contributing factors and determine whether homeopathic care, conventional treatment or specialist evaluation is appropriate.
          </p>
          <p>
            People looking for <strong>Piles Consultation in Ponnani</strong>, <strong>Piles Treatment in Ponnani</strong> or a <strong>Piles Homeopathic Clinic in Ponnani</strong> should understand that treatment depends on the type, severity and underlying cause of the symptoms. Homeopathy is sometimes chosen by people seeking an individualised approach to healthcare. However, there is currently insufficient reliable scientific evidence to demonstrate that homeopathic treatments are effective for piles or other vascular conditions.
          </p>
          <p>
            This clinical guide provides an overview of piles, common symptoms, possible causes, treatment considerations and what to expect during a medical consultation.
          </p>
        </div>
      </section>

      {/* Important Key Takeaways (Executive Summary) */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
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
                Important Key Takeaways for Patients in Ponnani
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-white border border-[#D8E1F5] hover:border-[#10B981]/40 hover:shadow-xs transition-all flex flex-col justify-between"
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

      {/* Section 1: What Are Piles? (Internal & External Haemorrhoids) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              ANATOMICAL CLASSIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What Are Piles? (Internal & External Haemorrhoids)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-3xl">
              Haemorrhoids are naturally occurring vascular cushions located within the submucosa of the anal canal that aid continence. When these cushions become abnormally swollen, inflamed, or stretched, they are medically termed piles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#303A88]/10 text-[#303A88] text-xs font-bold uppercase tracking-wider">
                Internal Haemorrhoids
              </span>
              <h3 className="font-bold text-[#1E2559] text-lg">
                Above the Dentate Line
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Internal piles develop within the lower rectum above the pectinate (dentate) line. Because this region lacks somatic sensory pain receptors, internal haemorrhoids are usually painless. They often manifest as painless, bright-red rectal bleeding during defecation or protrude out through the anus when straining.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
                External Haemorrhoids
              </span>
              <h3 className="font-bold text-[#1E2559] text-lg">
                Below the Dentate Line
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                External piles arise beneath the skin surrounding the anal opening (below the dentate line). This area is rich in sensitive somatic nerve endings. External haemorrhoids cause palpable swelling, anal irritation, itching, burning discomfort, and intense pain if a blood clot forms inside (thrombosed external piles).
              </p>
            </div>
          </div>

          {/* 4 Grades of Internal Piles Grid */}
          <div className="pt-6">
            <h3 className="font-bold text-[#1E2559] text-lg sm:text-xl mb-4">
              The 4 Clinical Grades of Internal Piles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pilesGrades.map((g, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border-2 border-[#E2E8F0] hover:border-[#10B981] transition-all space-y-2 shadow-xs"
                >
                  <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">
                    {g.grade}
                  </span>
                  <h4 className="font-bold text-[#1E2559] text-sm">
                    {g.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Common Symptoms of Piles */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              SYMPTOM PROFILE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Symptoms of Piles
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Symptoms vary depending on whether piles are internal or external, their severity, and whether secondary inflammation or thrombosis is present.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              {
                icon: Droplets,
                title: 'Rectal Bleeding',
                desc: 'Bright red blood noticed on toilet tissue, coating the surface of the stool, or dripping into the toilet bowl during or after defecation.',
              },
              {
                icon: AlertCircle,
                title: 'Anal Itching & Irritation',
                desc: 'Persistent pruritus and burning sensation around the anus, often caused by mucus leakage or localized inflammatory swelling.',
              },
              {
                icon: Activity,
                title: 'Pain & Discomfort',
                desc: 'A dull ache, throbbing tenderness, or sharp pain, particularly marked with thrombosed external piles or accompanying anal fissures.',
              },
              {
                icon: ShieldAlert,
                title: 'Swelling & Palpable Lumps',
                desc: 'A sensitive lump or prolapsing mass felt protruding at the anal verge, which may retract spontaneously or require gentle manual repositioning.',
              },
              {
                icon: Droplets,
                title: 'Mucous Discharge & Moisture',
                desc: 'Involuntary discharge of mucus from prolapsed internal mucosal tissues, leading to perianal skin maceration and irritation.',
              },
              {
                icon: Heart,
                title: 'Incomplete Evacuation Sensation',
                desc: 'A persistent feeling of fullness in the rectum or the sensation that bowel movements are never completely finished (tenesmus).',
              },
            ].map((sym, idx) => {
              const IconComp = sym.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#303A88]/40 transition-all space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#303A88]/10 text-[#303A88] flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {sym.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {sym.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: What Causes Piles? (8 Contributing Causes) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              ETIOLOGY & RISK FACTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What Causes Piles?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Piles arise from sustained hydrostatic pressure in the rectal submucosal venous network, coupled with weakening of the fibroelastic connective tissue support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {causesOfPiles.map((cause, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#10B981]/50 transition-all flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#10B981]/15 text-[#10B981] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-sm sm:text-base">
                    {cause.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Consider Piles Consultation in Ponnani / Near Ponnani */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              REGIONAL HEALTHCARE ACCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Consider Piles Consultation Near Ponnani?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              For residents in and around Ponnani, Edappal, Chamravattom, and Changaramkulam, anorectal symptoms are often suffered in silence due to personal embarrassment or fear of surgical procedures. Seeking early medical advice from a trusted clinic nearby can prevent mild haemorrhoids from progressing into advanced prolapsing or thrombosed complications.
            </p>
            <p>
              An individualised consultation ensures that rectal bleeding is not mistakenly assumed to be benign piles. Other gastrointestinal disorders, including anal fissures, perianal abscesses, fistulas, polyps, or early malignancies, can mimic piles symptoms and require completely different management protocols.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] space-y-1.5">
                <div className="text-xs font-bold text-[#303A88] uppercase tracking-wider">
                  Accurate Diagnosis
                </div>
                <p className="text-xs text-[#64748B]">
                  Differentiating piles from fissures, fistulas, polyps, and inflammatory bowel conditions through methodical triage.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] space-y-1.5">
                <div className="text-xs font-bold text-[#303A88] uppercase tracking-wider">
                  Convenient Proximity
                </div>
                <p className="text-xs text-[#64748B]">
                  Anjali Homoeo Clinic at Kuttippuram is only 25–30 minutes away from Ponnani via direct arterial road connections.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] space-y-1.5">
                <div className="text-xs font-bold text-[#303A88] uppercase tracking-wider">
                  Confidential & Non-Invasive
                </div>
                <p className="text-xs text-[#64748B]">
                  A private, patient-centric setting with options for online video consultations from the comfort of home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Homeopathy Clinic for Piles in Ponnani: What Should You Know? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY & EVIDENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathy Clinic for Piles in Ponnani: What Should You Know?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Patients searching for a <strong>Homeopathy Clinic for Piles in Ponnani</strong> often seek holistic, constitutional healthcare that looks beyond isolated symptoms to consider whole-body wellness, emotional factors, bowel motility, and long-term habits.
            </p>
            <p>
              A responsible practitioner provides detailed dietary guidance, hydration strategies, and lifestyle corrections. However, healthcare ethics and consumer protection require complete transparency regarding the medical evidence:
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-[#EEF2FB] border-2 border-[#303A88]/40 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Current Scientific Evidence & Patient Safety Disclosure
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    There is currently insufficient reliable scientific evidence to demonstrate that homeopathic treatments are effective for curing piles or reversing structurally enlarged hemorrhoidal cushions. Patients with persistent bleeding, acute thrombosis, or tissue prolapse must receive comprehensive clinical evaluation and should never delay necessary conventional medical or surgical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Consultation Process (5 Steps) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              WHAT TO EXPECT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              The 5-Step Piles Consultation Process
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              What patients from Ponnani can expect during a clinical consultation at Anjali Homoeo Clinic.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {consultationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#10B981]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#303A88] text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Medical Treatment Options (6 Categories) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              COMPREHENSIVE CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Medical Treatment Options
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Piles treatment is guided by anatomical location, severity grade, and individual health requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {medicalOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                      Option {opt.step}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#D8E1F5] text-[#303A88]">
                      {opt.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-lg">
                    {opt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] space-y-1.5">
                  {opt.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: How to Choose a Piles Specialist in Ponnani */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT GUIDANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              How to Choose a Piles Specialist Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Key standards to keep in mind when choosing a clinic or practitioner for anorectal care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {selectionCriteria.map((crit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#10B981]/50 transition-all space-y-2"
              >
                <span className="text-xs font-bold text-[#303A88] uppercase tracking-wider">
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

      {/* Section 9: Lifestyle Tips to Help Prevent Piles */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PREVENTIVE HABITS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Lifestyle Tips to Help Prevent Piles
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Healthy daily habits reduce venous pressure and maintain natural, effortless bowel transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {lifestyleTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-3.5 hover:border-[#10B981]/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 text-[#10B981] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {tip.number}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: When Should You Seek Immediate Medical Attention? (Red Flags) */}
      <section className="py-14 sm:py-16 bg-[#FFF1F2] border-b border-[#FECDD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48] text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
                SAFETY & RED FLAGS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9F1239]">
                When Should You Seek Immediate Medical Attention?
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#881337] leading-relaxed">
            While most piles symptoms are manageable through conservative measures, certain critical warning signs indicate acute complications or upper gastrointestinal emergencies that require immediate hospital care:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {redFlags.map((flag, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#FECDD3] shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#E11D48]">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Critical Sign {idx + 1}</span>
                </div>
                <h3 className="font-bold text-[#9F1239] text-base">
                  {flag.title}
                </h3>
                <p className="text-xs text-[#4C0519] leading-relaxed">
                  {flag.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Piles Treatment Near Ponnani: Finding the Right Healthcare Support */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINIC OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Piles Treatment Near Ponnani: Finding the Right Healthcare Support
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Anjali Homoeo Clinic, led by <strong>Dr. Anjali Chandrasekhar (BHMS)</strong>, provides confidential, patient-oriented healthcare support for individuals in Ponnani, Edappal, and surrounding areas suffering from piles, rectal bleeding, and anal fissures.
            </p>
            <p>
              With fully equipped clinics located at <strong>Kuttippuram</strong> (Tirur-Kuttippuram Rd, Kavumopuram) and <strong>Puthanathani</strong> (Chembayil complex, opp. Thavakkal gold), the clinic is readily accessible via a short 25-minute drive from Ponnani town. For those unable to travel, confidential <strong>online video consultations</strong> are offered.
            </p>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2559]">
                  <MapPin className="w-4 h-4 text-[#10B981]" />
                  <span>Kuttippuram Main Clinic</span>
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
                  <Clock className="w-4 h-4 text-[#10B981]" />
                  <span>Clinic Timings & Booking</span>
                </div>
                <p className="text-xs text-[#64748B]">
                  Monday to Saturday: 9:30 AM – 6:30 PM<br />
                  Sunday: 9:30 AM – 1:30 PM (By prior appointment)
                </p>
                <p className="text-xs text-[#10B981] font-semibold">
                  Online video visits available daily across Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions (10 FAQs) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              PATIENT Q&amp;A
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions: Piles Treatment Near Ponnani
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Common questions answered by Dr. Anjali Chandrasekhar regarding haemorrhoids, symptoms, and medical options.
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

      {/* Section 13: Related Regional Guides */}
      <RegionalRelatedGuides
        currentCity="Ponnani"
        currentCondition="Piles & Haemorrhoids"
        categoryView="anorectal-vascular-care"
      />

      {/* Section 14: Integrated Appointment Booking Engine */}
      <section id="booking-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981]">
              CONFIDENTIAL DOCTOR CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Book Your Piles Consultation with Dr. Anjali
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto">
              Choose an online video consultation from home in Ponnani, or schedule an in-person clinic visit at Kuttippuram or Puthanathani.
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
