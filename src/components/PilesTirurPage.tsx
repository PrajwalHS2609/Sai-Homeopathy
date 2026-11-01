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

export const PilesTirurPage: React.FC = () => {
  const { setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Clinic contact phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles / Haemorrhoids (Tirur patient guide).'
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
    navigateToBookingWithReason('Piles Consultation - Tirur', 'online');
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
      desc: 'Piles, or haemorrhoids, are swollen blood vessels and supporting connective tissues in and around the anus or lower rectum.',
    },
    {
      title: 'Common Symptoms',
      desc: 'Common symptoms include anal itching, localized swelling, discomfort, and bright-red bleeding during or after bowel movements.',
    },
    {
      title: 'Multifactorial Causes',
      desc: 'Contributing factors include chronic constipation, prolonged straining, pregnancy, heavy lifting, low-fiber diet, and sitting for long periods.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Reliable scientific clinical evidence has not established homeopathy as an effective curative treatment for piles or rectal vascular disease.',
    },
    {
      title: 'Evidence-Based Management',
      desc: 'Appropriate evidence-based care depends on the grade and severity: dietary modifications, stool softeners, topical treatments, or minor procedures.',
    },
    {
      title: 'High-Fiber & Hydration Base',
      desc: 'Increasing dietary fiber, drinking sufficient fluids, and avoiding straining are essential first-line steps to support soft, effortless bowel movements.',
    },
    {
      title: 'Clinical Examination Necessity',
      desc: 'Persistent, painful, or bleeding anal symptoms should be evaluated by a qualified doctor rather than self-managed with unproven remedies.',
    },
    {
      title: 'Emergency Medical Warning Signs',
      desc: 'Heavy rectal bleeding, dark tarry stools, dizziness, or severe sudden anal pain require prompt emergency hospital attention.',
    },
  ];

  // 4 Grades of Internal Piles
  const pilesGrades = [
    {
      grade: 'Grade I',
      title: 'Internal & Non-Prolapsing',
      desc: 'Swollen cushions remain entirely inside the anal canal. They do not protrude outward through the anus. Often painless, though they may cause painless, bright-red blood coating stools or toilet tissue.',
    },
    {
      grade: 'Grade II',
      title: 'Prolapse on Straining, Spontaneous Return',
      desc: 'Haemorrhoidal cushions protrude past the anal sphincter during defecation or heavy straining, but spontaneously retract back inside once straining ceases.',
    },
    {
      grade: 'Grade III',
      title: 'Prolapse Requiring Manual Reduction',
      desc: 'Piles protrude during bowel movements or physical exertion and do not return on their own. The patient must gently push them back inside manually.',
    },
    {
      grade: 'Grade IV',
      title: 'Permanently Prolapsed & Irreducible',
      desc: 'Swollen cushions remain permanently outside the anal opening and cannot be reduced manually. At risk of acute strangulation, thrombosis, severe pain, and ulceration.',
    },
  ];

  // Contributing factors
  const contributingFactors = [
    {
      title: 'Chronic Constipation & Hard Stools',
      desc: 'Straining against hard, dry stools dramatically spikes hydrostatic venous pressure in the rectal submucosal plexus, stretching venous walls.',
    },
    {
      title: 'Low Dietary Fiber & Low Hydration',
      desc: 'Diets lacking in soluble and insoluble fiber lead to small, hard stools that demand excessive abdominal effort during daily evacuation.',
    },
    {
      title: 'Prolonged Toilet Sitting',
      desc: 'Sitting on the toilet for extended periods (especially with mobile phones) causes the pelvic floor to sag unsupported, engorging anal veins.',
    },
    {
      title: 'Pregnancy & Childbirth',
      desc: 'Elevated progesterone softens vein walls, while the growing uterus compresses pelvic veins, impeding venous drainage from the lower rectum.',
    },
    {
      title: 'Heavy Lifting & Occupational Strain',
      desc: 'Repeated intra-abdominal pressure spikes during heavy lifting, prolonged standing, or intense straining directly distend rectal vessels.',
    },
    {
      title: 'Chronic Diarrhoea',
      desc: 'Frequent loose stools cause recurrent anal irritation, mucosal inflammation, and frequent vascular congestion in the perianal area.',
    },
  ];

  // 5 Evidence-based treatment options
  const evidenceBasedOptions = [
    {
      step: '01',
      title: 'Dietary Modifications & Fiber Therapy',
      badge: 'First-Line Foundation',
      desc: 'Increasing dietary fiber to 25–35 grams daily and drinking adequate water produces bulky, soft stools that glide without straining.',
      points: [
        'Soluble fiber supplements (ispaghula husk / psyllium) to soften stool consistency',
        'Abundant dietary vegetables, whole grains, pulses, and fresh fruits',
        'Ensuring 2 to 2.5 litres of daily hydration to prevent hard fecal impaction',
      ],
    },
    {
      step: '02',
      title: 'Topical Creams & Soothing Ointments',
      badge: 'Symptom Relief',
      desc: 'Short courses of medicated ointments reduce localized burning, swelling, and perianal itching during acute flare-ups.',
      points: [
        'Mild barrier ointments containing zinc oxide to protect delicate perianal skin',
        'Topical local anaesthetics (lignocaine) to ease acute painful bowel movements',
        'Short-course mild steroid creams (used under 7 days) to calm inflammatory edema',
      ],
    },
    {
      step: '03',
      title: 'Warm Sitz Baths',
      badge: 'Spasm Reduction',
      desc: 'Sitting in a shallow tub of warm water for 10–15 minutes two to three times daily relaxes the hypertonic internal anal sphincter.',
      points: [
        'Improves local perianal blood circulation and accelerates tissue recovery',
        'Reduces post-defecation spasm and relieves throbbing anal pain',
        'Provides hygienic cleansing without friction from abrasive dry toilet paper',
      ],
    },
    {
      step: '04',
      title: 'Office-Based Minor Procedures',
      badge: 'Grade I–III Interventions',
      desc: 'When bleeding or prolapse persists despite conservative habits, minimally invasive outpatient procedures are highly effective.',
      points: [
        'Rubber band ligation: tiny elastic bands applied to cut off haemorrhoid blood supply',
        'Infrared coagulation or sclerotherapy injections to shrink bleeding cushions',
        'Performed in outpatient settings with minimal discomfort and quick recovery',
      ],
    },
    {
      step: '05',
      title: 'Surgical Options for Advanced Haemorrhoids',
      badge: 'Grade IV & Complicated',
      desc: 'For large, permanently prolapsed, or thrombosed haemorrhoids that fail non-surgical methods, definitive surgery is indicated.',
      points: [
        'Haemorrhoidectomy (open or closed) to excise redundant vascular cushions',
        'Stapled haemorrhoidopexy (PPH) or Doppler-guided haemorrhoidal artery ligation',
        'Prompt emergency excision for acutely thrombosed, strangulated external piles',
      ],
    },
  ];

  // 8 Consultation preparation points
  const preparationPoints = [
    {
      icon: Calendar,
      title: 'Timeline of Symptoms',
      detail: 'Note when itching, pain, bleeding, or lumps first appeared and whether symptoms are worsening.',
    },
    {
      icon: Droplets,
      title: 'Bleeding Characteristics',
      detail: 'Describe if blood is bright red on tissue/bowl, mixed with stool, or dark/maroon in colour.',
    },
    {
      icon: Activity,
      title: 'Bowel Movement Frequency',
      detail: 'Record how often you pass stools, whether stools are hard/lumpy, and if you need to strain.',
    },
    {
      icon: AlertCircle,
      title: 'Presence of Tissue Prolapse',
      detail: 'Note if lumps bulge out during stools, whether they pop back in on their own, or need manual pushing.',
    },
    {
      icon: Heart,
      title: 'Dietary & Fluid Habits',
      detail: 'List typical daily water intake, intake of fruits/vegetables, and consumption of spicy foods.',
    },
    {
      icon: FileText,
      title: 'Current Medications',
      detail: 'List all prescription drugs (especially blood thinners), pain relievers, iron pills, and laxatives.',
    },
    {
      icon: AlertTriangle,
      title: 'Past Treatments & Ointments',
      detail: 'Note all over-the-counter creams, herbal pastes, sitz baths, or home remedies previously applied.',
    },
    {
      icon: ShieldCheck,
      title: 'Family & Medical History',
      detail: 'Disclose personal or family history of inflammatory bowel disease (IBD), polyps, or colorectal cancer.',
    },
  ];

  // 12 FAQs
  const faqs = [
    {
      q: 'What is a homeopathy clinic for piles near Tirur?',
      a: 'The phrase generally refers to homeopathy consultations sought by people experiencing piles or haemorrhoid symptoms in the Tirur and Malappuram areas. However, reliable scientific evidence has not established homeopathy as an effective curative treatment for piles. People with persistent, painful, or bleeding anal complaints should seek appropriate medical assessment from a qualified doctor to confirm the diagnosis and explore evidence-based therapies.',
    },
    {
      q: 'Is homeopathy effective for piles and fissures?',
      a: 'Reliable scientific clinical evidence has not demonstrated that homeopathic remedies shrink enlarged hemorrhoidal vascular cushions, reverse tissue prolapse, or heal chronic anal fissures. Evidence-based medical management focuses on dietary fiber, stool softeners, topical therapies, sitz baths, and minor medical procedures when indicated.',
    },
    {
      q: 'Which doctor should I consult for piles near Tirur?',
      a: 'A qualified general surgeon, proctologist, or colorectal physician is the primary specialist to evaluate and manage piles, anal fissures, and perianal fistulas. Dr. Anjali Chandrasekhar (BHMS) provides confidential clinical evaluations, dietary counseling, and medical triage at Anjali Homoeo Clinic in Kuttippuram (just 15–20 minutes from Tirur) and online, coordinating referrals to proctologists whenever proctoscopy or procedural intervention is needed.',
    },
    {
      q: 'Can piles be cured without surgery?',
      a: 'Yes. Many mild to moderate cases (Grade I and Grade II internal piles) improve significantly with conservative, non-surgical approaches: increasing dietary fiber, drinking 2–2.5 litres of water daily, avoiding toilet straining, taking warm sitz baths, and using short courses of topical creams. Surgery is typically reserved for advanced Grade III or Grade IV prolapsed or thrombosed piles.',
    },
    {
      q: 'What should I bring to a piles consultation?',
      a: 'Bring details about when your symptoms started, whether you have noticed bright red blood or painful lumps, your daily bowel frequency and stool consistency, and a list of all current medications (especially blood thinners or iron supplements) and previous creams or laxatives you have tried.',
    },
    {
      q: 'When should bleeding from the rectum be checked?',
      a: 'Any rectal bleeding should be evaluated by a healthcare professional. Although piles are a common cause of bright-red blood, rectal bleeding can also stem from anal fissures, inflammatory bowel disease, polyps, or colorectal conditions. Never assume rectal bleeding is simply caused by piles without a medical examination.',
    },
    {
      q: 'How can I choose a clinic for piles near Tirur?',
      a: 'Look for an appropriately qualified healthcare provider with recognized qualifications and medical board registration who performs a thorough assessment, explains treatment options transparently, and refers patients for proctological examination or surgical care when indicated. Be cautious of clinics promising permanent, guaranteed cures without surgery or evidence.',
    },
    {
      q: 'How far is Anjali Homoeo Clinic from Tirur for piles consultations?',
      a: 'Anjali Homoeo Clinic is conveniently located in Kuttippuram on the Tirur-Kuttippuram Road, approximately 15 to 20 minutes from Tirur town and Tirur Railway Station. A branch clinic is also located at Puthanathani. Patients from Tirur, Tanur, Tirunnavaya, and surrounding towns can visit in person or arrange a confidential online video consultation.',
    },
    {
      q: 'What is the difference between piles and an anal fissure?',
      a: 'Piles are swollen, dilated blood vessels in the anal canal that typically cause painless bleeding or protruding lumps. An anal fissure is a sharp tear or crack in the mucosal lining of the anal verge, characterized by severe, sharp, cutting pain during and for hours after passing stools, often accompanied by bright-red blood on the toilet paper.',
    },
    {
      q: 'What foods should I avoid if I have piles in Tirur?',
      a: 'Avoid heavily spiced curries, excessive red meat, highly refined flour (maida), fried snacks, and excessive black tea or coffee, which can worsen constipation and irritate the anal lining. Instead, emphasize fiber-rich foods such as whole grains, lentils, fresh leafy greens, papaya, and plenty of water.',
    },
    {
      q: 'What is a thrombosed external haemorrhoid?',
      a: 'A thrombosed external piles occurs when a blood clot forms inside an external hemorrhoidal vein under the perianal skin. It presents as a sudden, firm, bluish-purple, extremely painful lump near the anal verge. A medical doctor should evaluate it promptly, as in-office clot evacuation within the first 48–72 hours provides dramatic, immediate pain relief.',
    },
    {
      q: 'Can I book an online video consultation for piles triage from Tirur?',
      a: 'Yes. Dr. Anjali Chandrasekhar offers confidential online video consultations for patients in Tirur. During the consultation, she reviews your symptoms, assesses bleeding characteristics, provides personalized dietary and fiber regimens, and advises whether an in-person physical examination or surgical referral is required.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Piles Clinic Near Tirur"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="anorectal-vascular-care"
        categoryLabel="Anorectal & Vascular Care"
        pageTitle="Homeopathy Clinic for Piles Near Tirur"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#86EFAC]" />}
        badgeText="Regional Proctology Care Guide • Tirur Patients"
        title="Homeopathy Clinic for Piles Near Tirur"
        subtitle="Individualized clinical guidance for patients in Tirur and Malappuram experiencing painful piles, anal fissures, swelling, discomfort, and rectal bleeding."
        metrics={[
          { label: 'Condition Focus', value: 'Piles & Fissures' },
          { label: 'Diagnostic Standard', value: 'Proctology & Triage' },
          { label: 'Evidence Policy', value: 'Transparent Care' },
        ]}
        doctorSubtitle="BHMS | Proctology & Anorectal Care"
        doctorBio="10+ years of dedicated clinical experience conducting confidential anorectal assessments, piles grading, dietary fiber counseling, and evidence-grounded constitutional care in Malappuram district."
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
                Important Key Takeaways for Patients in Tirur
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

      {/* Section 2: Homeopathy Clinic for Piles Near Tirur: What Should You Know? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homeopathy Clinic for Piles Near Tirur: What Should You Know?
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People searching for a <strong>Homeopathy Clinic for Piles Near Tirur</strong> often seek a supportive setting to discuss sensitive anorectal symptoms.
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
                    Distinguishing Consultation from Scientific Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    It is essential to distinguish between a consultation and reliable scientific evidence of therapeutic efficacy. <strong>Reliable scientific clinical evidence has not established that homeopathy effectively cures piles, eliminates hemorrhoidal tissue prolapse, or resolves chronic anorectal disease.</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Relying exclusively on homeopathic remedies without medical examination can delay diagnosis of conditions causing rectal bleeding or result in severe acute complications like hemorrhoidal strangulation or chronic anemia.
                  </p>
                </div>
              </div>
            </div>

            <p>
              If consulting a homeopathic doctor, always disclose current medications and never postpone an examination by a qualified surgeon or proctologist when bleeding or pain persists.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Contributing Causes of Piles */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] block">
              ETIOLOGY &amp; MECHANISMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Causes of Piles (Haemorrhoids)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Haemorrhoids develop when chronic intra-abdominal pressure or straining distends the vascular cushions lining the anal canal.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {contributingFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#10B981]/30 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Evidence-Based Treatment Options for Piles */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              THERAPEUTIC MODALITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Evidence-Based Treatment Options for Piles
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Clinical management follows a stepwise approach tailored strictly to symptom severity and the anatomical grade of hemorrhoidal prolapse.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {evidenceBasedOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8E1F5] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1E2559] text-white flex items-center justify-center font-bold text-xs">
                      {opt.step}
                    </span>
                    <h3 className="font-bold text-lg text-[#1E2559]">
                      {opt.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] w-fit">
                    {opt.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {opt.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {opt.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-white border border-[#D8E1F5] text-xs text-[#334155] flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Preparing for a Piles Consultation in Tirur */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] block">
              PATIENT PREPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Preparing for a Piles Consultation in Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Preparing details about your bowel patterns and symptoms helps ensure an informative and productive consultation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              {preparationPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[#F8FAFD] border border-[#D8E1F5]">
                    <Icon className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1E2559] block">{item.title}:</strong>
                      <span className="text-[#64748B] text-xs">{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: When Should You Seek Medical Attention? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#DC2626] block">
              CLINICAL TRIAGE &amp; RED FLAGS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Attention?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Recognizing when anorectal symptoms indicate benign hemorrhoids versus serious colorectal conditions is essential for your safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                Prompt Clinical Review Advised
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-amber-900/90">
                <li>• Any new onset of rectal bleeding during bowel movements.</li>
                <li>• Anal lumps that fail to reduce spontaneously after defecation.</li>
                <li>• Chronic constipation requiring daily straining or laxatives.</li>
                <li>• Persistent anal itching, burning, or mucosal discharge.</li>
                <li>• Change in bowel habits lasting longer than two weeks.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-3">
              <h3 className="font-bold text-base flex items-center gap-2 text-rose-900">
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                Emergency Medical Red Flags
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-900/90">
                <li>• Large amounts of rectal bleeding (toilet bowl filling with blood).</li>
                <li>• Passing dark maroon or tarry black stools (melena).</li>
                <li>• Rectal bleeding accompanied by dizziness, fainting, or confusion.</li>
                <li>• Severe, agonizing, sudden anal pain (thrombosed external piles).</li>
                <li>• High fever with severe perianal swelling, redness, and throbbing pain (abscess).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Frequently Asked Questions (12 Interactive FAQs) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] block">
              PATIENT INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Frequently Asked Questions: Piles Clinic Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Common questions from patients in Tirur and Malappuram regarding piles, fissures, homeopathy, and proctology consultations.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#10B981] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#10B981] shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#10B981]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-4 bg-[#F8FAFD]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#10B981] block">
              DIRECT APPOINTMENT SCHEDULING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book Your Piles &amp; Proctology Consultation Near Tirur
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select an in-clinic appointment at our Kuttippuram center or schedule a confidential online video consultation with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] shadow-sm">
            <AppointmentBookingEngine />
          </div>
        </div>
      </section>

      {/* Regional Related Guides */}
      <RegionalRelatedGuides currentGuideKey="piles-clinic-tirur" />
    </div>
  );
};
