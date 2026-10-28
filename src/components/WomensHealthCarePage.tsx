import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  Heart,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award,
  UserCheck,
  FileText,
  Activity,
  Layers,
  HelpCircle,
  Stethoscope,
  Info,
  MapPin,
  ExternalLink,
  ChevronRight,
  Shield,
  Pill,
  Maximize2,
  X,
  Check,
} from 'lucide-react';

export const WomensHealthCarePage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers as requested (0989101707 and secondary 098951 01707)
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';

  // WhatsApp helper
  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Dr. Anjali, I would like to enquire about homeopathic consultation for Women's Health & Gynecological Care."
  )}`;

  // Scroll to top on mount, and track scroll for mobile sticky bar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookConsultation = (specificReason?: string) => {
    navigateToBookingWithReason(specificReason || "Women's Health & Gynecological Care", 'online');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const treatmentConditions = [
    {
      id: 'pcod-pcos',
      title: 'PCOD / PCOS (Polycystic Ovarian Syndrome)',
      tagline: 'Restoring Natural Ovulatory Cycles & Metabolic Harmony',
      badge: 'High Prevalance',
      overview:
        'Polycystic Ovarian Disease is an endocrine-metabolic imbalance marked by chronic anovulation, multiple small ovarian follicles, insulin resistance, and elevated androgen levels. Conventional therapy often relies on synthetic oral contraceptive pills that induce artificial withdrawal bleeds without correcting underlying ovarian dysfunction.',
      homeoApproach:
        'Classical constitutional homeopathy stimulates the hypothalamic-pituitary-ovarian (HPO) axis naturally. Remedies such as Pulsatilla, Sepia, Calcarea Carb, and Natrum Mur are selected based on personal metabolic, thermal, and emotional totality to encourage spontaneous egg maturation, reverse hormonal acne, control unwanted facial hair, and stabilize healthy weight without synthetic hormones.',
      keySymptoms: [
        'Delayed, irregular, or skipped menstrual periods (Oligomenorrhea)',
        'Weight gain around the abdomen and insulin resistance',
        'Hormonal cystic acne along the chin, jawline, and back',
        'Thinning scalp hair and unwanted facial/body hair (Hirsutism)',
        'Mood swings, chronic lethargy, and ovulatory infertility concerns',
      ],
      investigations: ['Pelvic Ultrasound (USG)', 'Serum LH, FSH & AMH', 'Fasting Insulin & Blood Sugar', 'TSH & Free Testosterone'],
      constitutionalNote: 'Non-hormonal, non-habit forming. Works synergistically with dietary modifications.',
    },
    {
      id: 'menstrual-irregularities',
      title: 'Menstrual Irregularities & Cycle Fluctuations',
      tagline: 'Gentle Endocrine Recalibration for Predictable, Healthy Cycles',
      badge: 'Hormonal Wellness',
      overview:
        'A healthy menstrual cycle typically ranges between 24 and 35 days. Frequent variations, delayed cycles (stretching to 45–90 days), abnormally short intervals, or unpredictable spotting signify an underlying neuro-endocrine rhythm disruption, emotional stress, thyroid disturbance, or nutritional imbalance.',
      homeoApproach:
        'Rather than forcing bleeding through cyclical synthetic progesterone, homeopathy works on the neuro-endocrine axis. By identifying constitutional vulnerabilities—whether driven by academic stress, emotional trauma, travel, or post-illness fatigue—constitutional remedies gently re-establish biological clock synchronization and ovarian responsiveness.',
      keySymptoms: [
        'Cycles longer than 35 days or irregular monthly arrival',
        'Unpredictable spotting between regular cycles',
        'Scanty, dark, or brown discharge instead of normal bright flow',
        'Sudden cessation of periods following emotional stress or illness',
        'Premenstrual water retention, breast tenderness, and irritability',
      ],
      investigations: ['Menstrual Cycle Calendar (3-6 Months)', 'Thyroid Profile (TSH, FT4)', 'Prolactin Level', 'Pelvic Sonography'],
      constitutionalNote: 'Restores the body’s own rhythm naturally without synthetic hormones.',
    },
    {
      id: 'dysmenorrhea-cramps',
      title: 'Severe Menstrual Cramps (Dysmenorrhea)',
      tagline: 'Non-Steroidal Natural Relief from Spasmodic Pelvic Pain',
      badge: 'Pain Relief',
      overview:
        'Severe dysmenorrhea involves sharp, throbbing, or bearing-down pelvic cramping that radiates to the thighs and lower back. Primary dysmenorrhea stems from excessive uterine prostaglandin release causing muscular hypercontractility, while secondary dysmenorrhea is often linked to underlying endometriosis, adenomyosis, or pelvic congestion.',
      homeoApproach:
        'Homeopathic constitutional remedies address both the neurovascular reactivity of uterine muscle fibers and systemic pain thresholds. Remedies like Magnesia Phosphorica, Colocynthis, Viburnum Opulus, and Chamomilla offer gentle antispasmodic action during cycles, while constitutional management gradually reduces inflammatory prostaglandin hypersensitivity month after month.',
      keySymptoms: [
        'Intense, incapacitating pelvic colic 24–48 hours before or during flow',
        'Pain radiating down the sacrum, inner thighs, and groin',
        'Accompanying nausea, vomiting, dizziness, and cold sweats',
        'Dependency on heavy NSAIDs / painkiller injections each month',
        'Profound fatigue and inability to attend school, college, or workplace',
      ],
      investigations: ['Pelvic Ultrasound to exclude Endometriosis / Adenomyosis', 'CBC to rule out Pelvic Infection'],
      constitutionalNote: 'Gastric-safe: does not cause acidity, stomach ulcers, or renal strain.',
    },
    {
      id: 'uterine-fibroids',
      title: 'Uterine Fibroids (Leiomyomas)',
      tagline: 'Conservative, Non-Surgical Management & Bleeding Control',
      badge: 'Pelvic Health',
      overview:
        'Uterine fibroids are benign non-cancerous smooth muscle tumors of the myometrium. Depending on their location (submucosal, intramural, or subserosal), they can produce profuse prolonged menstrual bleeding (menorrhagia), severe anemia, pelvic heaviness, and frequent urinary urgency from bladder compression.',
      homeoApproach:
        'Homeopathic therapeutics provide a conservative, tissue-sparing approach. Remedies such as Fraxinus Americana, Thlaspi Bursa Pastoris, Sabina, and Calcarea Fluorica help reduce pelvic vascular engorgement, check excessive menstrual flow, prevent anemia, and inhibit further fibroid enlargement. Ultrasound monitoring tracks structural changes objectively.',
      keySymptoms: [
        'Heavy menstrual bleeding with large clots lasting more than 7 days',
        'Sensation of pelvic heaviness, fullness, or abdominal enlargement',
        'Chronic fatigue, paleness, and breathlessness due to low hemoglobin (anemia)',
        'Frequent urination caused by fibroid pressure on the urinary bladder',
        'Lower back aching and constipation due to rectal pressure',
      ],
      investigations: ['High-Resolution Pelvic Ultrasound', 'Complete Blood Count (Hemoglobin & Ferritin)', 'Pelvic MRI (if multiple fibroids)'],
      constitutionalNote: 'Safe conservative approach for women wishing to avoid premature hysterectomy.',
    },
    {
      id: 'pelvic-pain-endometriosis',
      title: 'Chronic Pelvic Pain & Endometriosis Support',
      tagline: 'Soothing Deep Pelvic Inflammation & Visceral Discomfort',
      badge: 'Comprehensive Care',
      overview:
        'Endometriosis and chronic pelvic congestion occur when endometrial-like tissue implants outside the uterus on ovaries, fallopian tubes, and pelvic peritoneum, triggering chronic cyclical inflammation, scarring, and pelvic nerve hypersensitivity that conventional analgesics often fail to calm.',
      homeoApproach:
        'Homeopathy works systemically to reduce peritoneal micro-inflammation, regulate cytokine pathways, and improve pelvic venous microcirculation. Tailored constitutional treatment alleviates deep-seated bearing-down sensations, painful intercourse (dyspareunia), and painful bowel movements, supporting emotional resilience alongside physical comfort.',
      keySymptoms: [
        'Deep pelvic aching that worsens in the premenstrual and ovulatory phases',
        'Painful intercourse (dyspareunia) and pain during bowel movements',
        'Chronic lower back and sacral pain unalleviated by rest',
        'Pelvic adhesions and generalized pelvic congestion',
        'Chronic fatigue, sleep disruption, and anxiety around period dates',
      ],
      investigations: ['Transvaginal Ultrasound with Endometriosis Protocol', 'Pelvic MRI', 'Diagnostic Laparoscopy Records'],
      constitutionalNote: 'Complements multidisciplinary care with gentle anti-inflammatory constitutional prescribing.',
    },
    {
      id: 'leucorrhea-discharge',
      title: 'Leucorrhea & Recurrent Vaginal Discharge',
      tagline: 'Strengthening Mucosal Immunity & Restoring Microbiome Balance',
      badge: 'Hygiene & Immunity',
      overview:
        'While physiological discharge is normal, chronic, thick, curd-like, yellow, or foul-smelling leucorrhea indicates recurrent candidiasis, bacterial vaginosis, or cervical erosion. Repeated rounds of conventional antifungal or antibiotic washes frequently disrupt the delicate vaginal Lactobacillus flora, leading to immediate post-treatment rebound.',
      homeoApproach:
        'Homeopathy focuses on rebuilding local mucosal resistance and normalizing systemic immune defenses. Remedies like Kreosotum, Hydrastis, Sepia, and Alumina treat chronic burning, excoriation, and itching while promoting the body’s natural microbial balance without irritating sensitive epithelial tissues.',
      keySymptoms: [
        'Persistent curdy white, yellowish, or brownish discharge',
        'Vulvar itching, redness, soreness, and burning micturition',
        'Unpleasant odor that worsens pre- or post-menstruation',
        'Associated dull sacral backache and general weakness',
        'Recurrence shortly after stopping conventional vaginal pessaries or washes',
      ],
      investigations: ['High Vaginal Swab (HVS) Culture & Wet Mount', 'Vaginal pH Testing', 'Fasting Blood Sugar'],
      constitutionalNote: 'Internal constitutional healing; no harsh chemical douches required.',
    },
    {
      id: 'ovarian-cysts',
      title: 'Ovarian Cysts & Benign Masses',
      tagline: 'Objective Ultrasound Surveillance & Constitutional Care',
      badge: 'Ultrasound Verified',
      overview:
        'Ovarian cysts range from physiological functional cysts (follicular or corpus luteum cysts that often fluctuate with menstrual cycles) to complex endometriomas and benign solid tumors (ovarian fibromas). Accurate diagnostic differentiation via ultrasound is critical for clinical safety.',
      homeoApproach:
        'Homeopathy supports functional cystic resolution and prevents recurrent cyst formation by balancing gonadotropin secretion. We mandate repeat ultrasound imaging at 6–8 week intervals to ensure objective clinical monitoring, providing transparent and medically safe co-care alongside specialist gynecologists.',
      keySymptoms: [
        'Unilateral dull aching or dragging feeling in the lower abdomen',
        'Abdominal bloating and discomfort during ovulation',
        'Urinary urgency when cysts exert pressure on the bladder',
        'Irregular menstrual spotting or sudden cycle delay',
        'Discomfort during physical exertion or intimate moments',
      ],
      investigations: ['Pelvic Ultrasound with Color Doppler', 'Serum CA-125 Biomarker (when indicated)', 'Follow-up Scan at 6-8 weeks'],
      constitutionalNote: 'Strict medical protocols: immediate hospital referral if torsion symptoms occur.',
    },
    {
      id: 'perimenopause-menopause',
      title: 'Perimenopause & Menopausal Transitions',
      tagline: 'Graceful Natural Transitions Without Hormone Replacement Risks',
      badge: 'Mature Wellness',
      overview:
        'The transition into menopause (perimenopause) involves fluctuating estrogen and progesterone levels. Women frequently endure disruptive vasomotor symptoms (hot flashes, night sweats), insomnia, sudden mood swings, palpitations, vaginal dryness, and joint stiffness.',
      homeoApproach:
        'Homeopathy offers a proven, safe alternative to Hormone Replacement Therapy (HRT), avoiding the cardiovascular and oncological risks associated with synthetic estrogens. Remedies like Lachesis, Sepia, Cimicifuga, and Sulphur harmonize autonomic nervous system instability, calm hot flashes, improve restorative sleep, and preserve vitality.',
      keySymptoms: [
        'Sudden intense hot flashes spreading over the face, neck, and chest',
        'Drenching night sweats leading to chronic sleep deprivation',
        'Irritability, sudden mood shifts, brain fog, and anxiety',
        'Irregular, unpredictable menstrual intervals before complete cessation',
        'Vaginal dryness, loss of mucosal elasticity, and generalized joint stiffness',
      ],
      investigations: ['Serum FSH & Estradiol Levels', 'Bone Mineral Density (DEXA Scan)', 'Thyroid Profile & Lipid Profile'],
      constitutionalNote: 'Zero carcinogenic risks; supports bone health and emotional equilibrium naturally.',
    },
  ];

  const filteredConditions =
    activeTab === 'all'
      ? treatmentConditions
      : treatmentConditions.filter((c) => c.id === activeTab);

  const faqs = [
    {
      question: 'How does constitutional homeopathy treat PCOD/PCOS without birth control pills?',
      answer:
        'Conventional birth control pills provide synthetic hormones that temporarily create an artificial bleed, but they do not stimulate spontaneous ovulation. Once pills are stopped, PCOD symptoms frequently return. Constitutional homeopathy approaches PCOD at the root neuro-endocrine level. By carefully analyzing your metabolic tendencies, thermal preferences, cycle milestones, and emotional stressors, Dr. Anjali selects remedies (such as Pulsatilla, Sepia, and Calcarea Carb) that encourage your ovaries to mature follicles independently, restore natural ovulatory rhythms, improve insulin sensitivity, and clear hormonal acne without hormone dependency.',
    },
    {
      question: 'Is homeopathic treatment safe for young teenage girls suffering from severe period cramps?',
      answer:
        'Yes, homeopathy is exceptionally gentle and safe for adolescent girls. Teenage menstrual cramps (primary dysmenorrhea) often result from excessive prostaglandin release causing painful uterine muscle spasms. Unlike repeated high-dose NSAID painkillers which can cause stomach acidity, gastritis, and ulcers, homeopathic remedies like Magnesia Phosphorica and Colocynthis act as natural muscle relaxants without any gastrointestinal side effects. Constitutional care also helps regulate irregular teenage cycles as the reproductive axis matures.',
    },
    {
      question: 'Can uterine fibroids be controlled or reduced with homeopathy without surgery?',
      answer:
        'For small to moderate fibroids, homeopathy provides an effective conservative approach. While homeopathy does not claim overnight disappearance of large calcified masses, individualized constitutional remedies (such as Fraxinus Americana, Thlaspi Bursa Pastoris, and Sabina) are highly effective in controlling heavy bleeding (menorrhagia), reducing pelvic congestion, correcting secondary anemia, and arresting further tumor progression. We always require objective periodic pelvic ultrasound scans to track fibroid dimensions responsibly and ensure complete patient safety.',
    },
    {
      question: 'Can I take homeopathic medicines if I am already taking thyroid (Thyronorm) or diabetes medications?',
      answer:
        'Yes, absolutely. Homeopathic medicines operate through micro-dilutions that stimulate physiological regulation and do not interfere with, metabolize against, or chemically interact with allopathic medications like levothyroxine (Thyronorm/Eltroxin), metformin, or blood pressure tablets. You should continue all prescribed conventional medications. As your symptoms and blood parameters improve under homeopathic care, your prescribing physician can adjust conventional dosages based on verified lab tests.',
    },
    {
      question: 'How long does a homeopathic course take to regulate irregular menstrual cycles?',
      answer:
        'Because constitutional care works with your body’s natural biological rhythms, treatment duration depends on how long the irregularity has persisted, whether ultrasound scans show ovarian cysts or endometrial changes, and your overall metabolic health. Typically, patients notice improvements in pain, premenstrual tension, and cycle consistency within 2 to 3 menstrual cycles. A sustained 6 to 9-month constitutional program is recommended for deep-rooted conditions like chronic PCOD to ensure lasting hormonal stability.',
    },
    {
      question: 'Do you offer private, confidential online consultations for women who cannot visit the clinic in person?',
      answer:
        'Yes. We provide complete, secure online video consultations via Google Meet / WhatsApp Video with Dr. Anjali Chandrasekhar. This service is ideal for women across Kerala, India, and overseas who prefer the privacy and convenience of consulting from home. After your detailed consultation, genuine German/SBL constitutional medicines are safely packed and dispatched via express courier directly to your doorstep with clear dosage instructions.',
    },
    {
      question: 'What medical reports, blood tests, or ultrasound scans should I bring or upload?',
      answer:
        'We encourage you to share any recent pelvic ultrasound (USG Abdomen & Pelvis) scans, hormone blood tests (LH, FSH, AMH, Prolactin, Free Testosterone), Thyroid profile (TSH), Complete Blood Count (Hemoglobin), and fasting blood sugar/insulin reports. If you do not have recent investigations, Dr. Anjali will review your clinical history first and advise which specific investigations are necessary.',
    },
    {
      question: 'When should I urgently consult an emergency hospital or gynecologist instead?',
      answer:
        'Patient safety is our foremost commitment. You should seek immediate emergency medical care if you experience: sudden, excruciating, one-sided lower abdominal pain with vomiting or fainting (rule out ovarian torsion or ruptured ectopic pregnancy); continuous massive vaginal hemorrhaging soaking more than one pad per hour; high fever with foul-smelling vaginal discharge; or unexplained bleeding occurring after menopause. Constitutional homeopathy is non-emergency care.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] font-sans pb-24 lg:pb-0">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'MedicalWebPage',
                '@id': 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/#webpage',
                url: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/',
                name: 'Women’s Health Gynecological Homeopathic Treatment in Malappuram',
                description:
                  "Explore women's health and gynecological care at Anjali Homoeo Clinic in Malappuram, Kerala. Learn about menstrual health and personalized consultations.",
                isPartOf: {
                  '@type': 'WebSite',
                  '@id': 'https://anjalihomoeoclinic.com/#website',
                  name: 'Anjali Homoeo Clinic',
                  url: 'https://anjalihomoeoclinic.com',
                },
                about: {
                  '@type': 'MedicalSpecialty',
                  name: 'Homeopathic Gynecology & Women’s Health',
                },
                audience: {
                  '@type': 'Patient',
                  audienceType: 'Women with PCOD, irregular cycles, fibroids, or hormonal concerns',
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://anjalihomoeoclinic.com/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Treatments',
                    item: 'https://anjalihomoeoclinic.com/#treatments',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Women’s Health Gynecological Homeopathic Treatment in Malappuram',
                    item: 'https://anjalihomoeoclinic.com/homoeopathic-treatment-for-womens-health-gynecological-care/',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumbs" className="bg-[#EEF2FB] border-b border-[#D8E1F5] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#5F6F65]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#303A88] font-medium transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <button
              onClick={() => {
                setCurrentView('treatments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#303A88] font-medium transition-colors"
            >
              Treatments
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="text-[#303A88] font-bold">Women’s Health & Gynecological Care</span>
          </div>

          <button
            onClick={() => {
              setCurrentView('treatments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-1 text-[#303A88] hover:text-[#45AC4B] font-semibold transition-colors"
          >
            <span>All Specialties</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#EEF2FB] via-white to-[#F8FAFD] border-b border-[#D8E1F5] pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#45AC4B]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#303A88]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Heading, Badges, Clinical Copy, and Action Buttons */}
            <div className="lg:col-span-7">
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] shadow-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-4">
                <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]/20" />
                <span>Specialized Clinical Discipline • Gynecology & Hormones</span>
              </div>

              {/* H1 Main Title */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-[1.15] tracking-tight">
                Homoeopathic Treatment for Women’s Health & Gynecological Care
              </h1>

              {/* Lead Narrative */}
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Safe, natural, and non-hormonal constitutional care tailored to women at every stage of life. From PCOD/PCOS and menstrual irregularities to severe period cramps, uterine fibroids, chronic pelvic discomfort, and menopause transitions — Dr. Anjali Chandrasekhar provides compassionate, individualized healing without hormone suppression or side effects.
              </p>

              {/* Key Clinical Badges */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-semibold text-[#1E2559]">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>100% Non-Hormonal</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <UserCheck className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Female Doctor Care</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Activity className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>Root-Cause Balance</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#D8E1F5] flex items-center gap-2 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#303A88] shrink-0" />
                  <span>Zero Habit Formation</span>
                </div>
              </div>

              {/* CTA Section - Elegant Desktop & Mobile Versions */}
              <div className="mt-8 space-y-4">
                {/* Main CTA Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                  
                  {/* Primary CTA: Book Gynecological Consultation (takes 7 cols on tablet/desktop, full width on mobile) */}
                  <button
                    onClick={() => handleBookConsultation()}
                    className="sm:col-span-7 group relative inline-flex items-center justify-between gap-3 bg-gradient-to-r from-[#303A88] via-[#2A3478] to-[#1E2559] hover:from-[#252E6D] hover:to-[#171D47] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-[#45AC4B]" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                          Book Gynecological Consultation
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#D8E1F5] font-normal">
                          Online Video or In-Clinic Slot • Instant Confirm
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#45AC4B] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                  {/* WhatsApp CTA: Enquire via WhatsApp (takes 5 cols on tablet/desktop, full width on mobile) */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:col-span-5 group relative inline-flex items-center justify-between sm:justify-start gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BD5A] hover:to-[#0E776B] text-white p-4 sm:p-4.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.99] border border-white/25"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 border border-white/30 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-sm sm:text-[15px] leading-snug">
                        Enquire via WhatsApp
                      </div>
                      <div className="text-[11px] sm:text-xs text-white/90 font-normal">
                        Quick Reply within 15 mins
                      </div>
                    </div>
                  </a>

                </div>

                {/* Secondary Row: Direct Phone Line 0989101707 + Kerala Clinic Line */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D8E1F5] shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] flex items-center justify-center shrink-0 text-[#303A88] border border-[#D8E1F5]">
                      <Phone className="w-4 h-4 text-[#45AC4B]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] font-medium flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                        <span>Direct Doctor Consultation Desk:</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={`tel:${phonePrimary}`}
                          className="font-bold text-base sm:text-lg text-[#1E2559] hover:text-[#303A88] tracking-tight transition-colors"
                          title="Call 0989101707"
                        >
                          {phonePrimary}
                        </a>
                        <span className="text-[#94A3B8] text-xs">|</span>
                        <a
                          href={`tel:09895101707`}
                          className="text-xs font-semibold text-[#475569] hover:text-[#303A88] transition-colors"
                          title="Call Kuttippuram Clinic: 098951 01707"
                        >
                          Kuttippuram: <span className="text-[#1E2559] font-bold">{phoneSecondary}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:${phonePrimary}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#EEF2FB] hover:bg-[#303A88] text-[#303A88] hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now ({phonePrimary})</span>
                  </a>
                </div>

                {/* Trust Reassurance Strip */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] pt-1 px-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#45AC4B]" />
                    <span>100% Confidential Female Consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Mon–Sat: 9 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Authentic Indian Malayali Female Doctor in Uniform HD Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                
                {/* Decorative Soft Ambient Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#303A88]/20 via-[#45AC4B]/15 to-[#EEF2FB] rounded-[36px] blur-xl opacity-80" />

                {/* Main Treatment Protocol Frame */}
                <div className="relative rounded-3xl bg-white p-3 sm:p-4 border border-[#D8E1F5] shadow-2xl">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EEF2FB] to-[#D8E1F5] shadow-inner group">
                    <img
                      src="/images/treatment-womens-health.svg"
                      alt="Women's Health & Gynecology Clinical Homeopathic Treatment Protocol"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* Subtle Corner Vignette */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                    {/* Top Left: Treatment Focus Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#1E2559] border border-[#D8E1F5] shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
                      <span>Gynecological & Hormonal Protocol</span>
                    </div>

                    {/* Top Right: Protocol Badge + Zoom Button */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#303A88]/95 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
                        <Award className="w-3.5 h-3.5 text-[#45AC4B]" />
                        <span>Evidence-Based Care</span>
                      </div>
                      <button
                        onClick={() => setIsPhotoModalOpen(true)}
                        className="p-1.5 rounded-full bg-white/90 hover:bg-white text-[#1E2559] shadow-md transition-colors cursor-pointer"
                        title="View Full High-Definition Photo"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom floating quick-tag on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="bg-[#1E2559]/85 backdrop-blur-md text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                        Stethoscope &amp; Doctor Coat Verified
                      </span>
                      <button
                        onClick={() => setIsPhotoModalOpen(true)}
                        className="pointer-events-auto bg-white/95 hover:bg-white text-[#303A88] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-1"
                      >
                        <span>Inspect HD</span>
                        <Maximize2 className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* Clean Credentials Card Below Photo (Preserving 100% of the photo without dark obscuring text overlays) */}
                  <div className="mt-3.5 p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="bg-[#45AC4B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Lead Physician
                          </span>
                          <span className="text-[11px] text-[#303A88] font-bold">Board Reg. KA-HOM-15563</span>
                        </div>
                        <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1E2559] mt-1 leading-tight">
                          Dr. Anjali Chandrasekhar (BHMS)
                        </h3>
                        <p className="text-xs text-[#475569] font-medium mt-0.5">
                          Senior Homeopathic Gynecological &amp; Hormonal Specialist
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#D8E1F5] flex items-center justify-between text-xs text-[#64748B]">
                      <span className="font-semibold text-[#303A88]">12+ Years Experience</span>
                      <span>Kuttippuram &amp; Puthanathani</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. Practitioner Insight & Constitutional Philosophy */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 bg-[#EEF2FB] rounded-3xl p-6 sm:p-8 border border-[#D8E1F5] relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-white">
                  <img
                    src="/images/treatment-womens-health.svg"
                    alt="Women's Health Protocol"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-bold text-[#1E2559]">Dr. Anjali Chandrasekhar</h3>
                  <p className="text-xs font-semibold text-[#303A88]">BHMS • Board Reg. KA-HOM-15563</p>
                  <p className="text-xs text-[#64748B]">Lead Homeopathic Physician & Women’s Health Consultant</p>
                </div>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed italic">
                “Female reproductive health is an intricate, delicately synchronized hormonal orchestra. When imbalances arise, suppressing symptoms with synthetic birth control pills or heavy analgesics is rarely the definitive answer. Classical homeopathy listens closely to the individual, stimulating the body’s innate self-regulating mechanisms to bring lasting hormonal, emotional, and pelvic harmony.”
              </p>
              <div className="mt-5 pt-4 border-t border-[#D8E1F5] flex items-center justify-between text-xs font-medium text-[#303A88]">
                <span>12+ Years Clinical Experience</span>
                <span>Kuttippuram & Puthanathani</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#45AC4B]">
                <Stethoscope className="w-4 h-4" />
                <span>Our Constitutional Treatment Philosophy</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Why Homeopathy for Gynecological Conditions?
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Conventional gynecology frequently relies on hormonal therapies (oral contraceptives, progesterone injections) that introduce external artificial hormones. While these can suppress symptoms or force artificial withdrawal bleeds, they often lead to recurrence once discontinued and carry risks such as weight gain, mood changes, headaches, and fertility delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#F8FAFD] p-3.5 rounded-2xl border border-[#D8E1F5]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#303A88]">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>Preserves Natural Ovulation</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    Stimulates spontaneous follicle maturation without synthetic estrogen or progesterone suppression.
                  </p>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-2xl border border-[#D8E1F5]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#303A88]">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>Holistic Mind-Body Balance</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    Addresses emotional stress, sleep cycles, thyroid dynamics, and insulin sensitivity collectively.
                  </p>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-2xl border border-[#D8E1F5]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#303A88]">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>No Side Effects or Dependency</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    Gentle micro-dilutions that are completely safe for adolescents, young women, and perimenopausal ages.
                  </p>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-2xl border border-[#D8E1F5]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#303A88]">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>Ultrasound-Monitored Care</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-1">
                    All fibroids, cysts, and endometrial layers are tracked with objective diagnostic sonography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Jump / Condition Filter Navigation */}
      <section className="py-6 bg-[#EEF2FB] border-b border-[#D8E1F5] sticky top-[60px] sm:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
            <span className="text-[#303A88] shrink-0 uppercase tracking-wider text-[11px] mr-1">
              Select Condition:
            </span>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#303A88] text-white shadow-xs'
                  : 'bg-white text-[#475569] hover:bg-white/80 border border-[#D8E1F5]'
              }`}
            >
              All Conditions (8)
            </button>
            {treatmentConditions.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-[#303A88] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-white/80 border border-[#D8E1F5]'
                }`}
              >
                {item.title.split('(')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Detailed Condition Cards & Clinical Protocols */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
            EVIDENCE-INFORMED CLINICAL PROTOCOLS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
            Detailed Gynecological Treatments & Modalities
          </h2>
          <p className="text-sm text-[#64748B] mt-2">
            Explore specific medical overviews, clinical symptom patterns, and our gentle homeopathic constitutional approach for each condition.
          </p>
        </div>

        <div className="space-y-10">
          {filteredConditions.map((condition) => (
            <article
              key={condition.id}
              id={`condition-${condition.id}`}
              className="bg-white rounded-3xl border border-[#D8E1F5] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#EEF2FB]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#EEF2FB] text-[#303A88] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {condition.badge}
                      </span>
                      <span className="text-xs text-[#64748B] font-medium">Individualized Care Protocol</span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                      {condition.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#45AC4B] mt-0.5">
                      {condition.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      navigateToBookingWithReason(`Women's Health: ${condition.title}`, 'online');
                      const el = document.getElementById('booking-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#EEF2FB] hover:bg-[#303A88] text-[#303A88] hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shrink-0 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire for {condition.title.split('(')[0]}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                  {/* Left Column: Overview & Symptoms */}
                  <div className="lg:col-span-6 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88] mb-1.5">
                        Medical Overview & Pathophysiology
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {condition.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559] mb-2">
                        Common Clinical Manifestations
                      </h4>
                      <ul className="space-y-1.5">
                        {condition.keySymptoms.map((symp, sIdx) => (
                          <li key={sIdx} className="text-xs sm:text-sm text-[#475569] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                            <span>{symp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Homeopathic Protocol & Diagnostics */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="bg-[#F8FAFD] p-5 rounded-2xl border border-[#D8E1F5]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#45AC4B] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#45AC4B]" />
                        <span>Constitutional Homeopathic Protocol</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {condition.homeoApproach}
                      </p>
                      <p className="text-[11px] font-semibold text-[#303A88] mt-3 pt-2 border-t border-[#D8E1F5]/60">
                        {condition.constitutionalNote}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#303A88]" />
                        <span>Recommended Medical Diagnostics</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.investigations.map((inv, iIdx) => (
                          <span
                            key={iIdx}
                            className="bg-white border border-[#D8E1F5] text-[#1E2559] text-xs font-medium px-2.5 py-1 rounded-lg"
                          >
                            {inv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Comparison Table: Homeopathy vs Conventional Hormonal Therapy */}
      <section className="py-14 bg-white border-y border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
              CLINICAL COMPARISON
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-2">
              Constitutional Homeopathy vs. Conventional Hormonal Suppression
            </h2>
            <p className="text-sm text-[#64748B] mt-1.5">
              Understanding why natural physiological regulation provides deeper, sustainable healing compared to temporary hormonal suppression.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-[#F8FAFD] rounded-2xl overflow-hidden border border-[#D8E1F5] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#303A88] text-white">
                  <th className="p-3.5 sm:p-4 font-bold">Clinical Parameter</th>
                  <th className="p-3.5 sm:p-4 font-bold bg-[#252E6D] text-[#45AC4B]">
                    Anjali Homeo Clinic Constitutional Care
                  </th>
                  <th className="p-3.5 sm:p-4 font-bold text-[#CBD5E1]">
                    Conventional Hormonal Suppression (OCPs/HRT)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8E1F5] text-[#475569]">
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Mechanism of Action</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Stimulates pituitary-ovarian axis & innate feedback regulation
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Suppresses natural ovulation; introduces exogenous synthetic hormones
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Long-Term Dependency</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Non-habit forming; medicine tapered once cycles stabilize
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Frequent rebound of PCOD/irregularities once pills are stopped
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Side Effect Profile</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Zero weight gain, zero gastric ulcers, zero clotting risks
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Risk of nausea, mood swings, weight changes, hyperpigmentation, deep vein thrombosis
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Fertility Preservation</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Actively supports natural follicular growth & spontaneous ovulation
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Contraceptive action; post-pill amenorrhea can delay conception plans
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-[#1E2559]">Mind & Emotional State</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-[#303A88] bg-white">
                    Evaluates anxiety, depression, and stress as integral parts of diagnosis
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Emotional aspects frequently treated separately with sedatives
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Responsible Medical Safety & Red Flag Warnings */}
      <section className="py-12 bg-[#FEF2F2] border-b border-[#FCA5A5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-[#E11D48] text-white rounded-2xl shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#991B1B]">
                Medical Safety Protocol: When to Seek Immediate Emergency Hospital Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-[#7F1D1D] mt-1 leading-relaxed">
                Constitutional homeopathy is designed for non-emergency, chronic and functional hormonal imbalances. You must proceed immediately to a hospital emergency or casualty department if you encounter any of the following acute symptoms:
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-semibold text-[#991B1B]">
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Sudden acute severe one-sided lower abdominal pain</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Massive hemorrhage soaking &gt;1 pad/hr continuously</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>High fever with foul-smelling vaginal discharge</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#FCA5A5]/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Any vaginal bleeding occurring post-menopause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Gynecological Consultation Banner */}
      <section className="py-12 bg-gradient-to-r from-[#1E2559] via-[#2A3478] to-[#303A88] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-5">
              <div
                onClick={() => setIsPhotoModalOpen(true)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg shrink-0 cursor-pointer relative group bg-white"
                title="Click to view treatment artwork"
              >
                <img
                  src="/images/treatment-womens-health.svg"
                  alt="Women's Health Treatment Protocol"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold text-[#86EFAC] mb-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                  <span>Confidential Gynecological Care</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Speak Directly with Dr. Anjali Chandrasekhar
                </h3>
                <p className="text-xs sm:text-sm text-[#D8E1F5] max-w-xl mt-1">
                  12+ Years experience guiding women with PCOD, irregular cycles, fibroids &amp; hormonal imbalances. Private consultation online or in-clinic.
                </p>
              </div>
            </div>

            {/* Banner Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => handleBookConsultation()}
                className="inline-flex items-center justify-center gap-2 bg-[#45AC4B] hover:bg-[#3B9640] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Gynecological Consultation</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${phonePrimary}`}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-3 rounded-xl font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#86EFAC]" />
                <span>{phonePrimary}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Comprehensive FAQs Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] mt-2">
            Questions on Women’s Health &amp; Homeopathy
          </h2>
          <p className="text-sm text-[#64748B] mt-1.5">
            Transparent answers regarding safety, medical reports, timelines, and consultation protocols.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#D8E1F5] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1E2559] hover:text-[#303A88] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#303A88]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] bg-[#F8FAFD]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Direct Embedded Booking Engine */}
      <section id="booking-section" className="py-16 bg-[#EEF2FB] border-t border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D8E1F5] px-3.5 py-1 rounded-full text-xs font-bold text-[#303A88] uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#45AC4B]" />
              <span>CONFIDENTIAL CONSULTATION BOOKING</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Schedule Your Women’s Health Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto mt-1.5">
              Choose an online video consultation from home or visit our clinic in Kuttippuram or Puthanathani. Confidential and respectful care with Dr. Anjali Chandrasekhar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-[#D8E1F5]">
            <AppointmentBookingEngine initialType="online" />
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Floating Quick-Action Dock (visible on mobile screens) */}
      <aside
        aria-label="Mobile quick actions"
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] px-3 py-2 shadow-2xl transition-transform duration-300 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
          
          {/* Quick Call Button: 0989101707 */}
          <a
            href={`tel:${phonePrimary}`}
            className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#EEF2FB] hover:bg-[#D8E1F5] text-[#303A88] font-bold text-[11px] transition-colors border border-[#D8E1F5] active:scale-95"
            title="Call 0989101707"
          >
            <Phone className="w-4 h-4 text-[#45AC4B] mb-0.5" />
            <span className="truncate w-full text-center">0989101707</span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-4 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-[11px] transition-colors shadow-xs active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
            <span className="truncate w-full text-center">WhatsApp</span>
          </a>

          {/* Primary Book Consultation Button */}
          <button
            onClick={() => handleBookConsultation()}
            className="col-span-5 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#303A88] hover:bg-[#252E6D] text-white font-bold text-xs transition-colors shadow-sm active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#45AC4B] shrink-0" />
            <span className="truncate">Book Consultation</span>
          </button>

        </div>
      </aside>

      {/* Full HD Doctor Photo Preview Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-[#303A88] text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                <span className="font-bold text-sm">Dr. Anjali Chandrasekhar (BHMS)</span>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
                title="Close Photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Treatment Artwork Container */}
            <div className="relative max-h-[65vh] overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src="/images/treatment-womens-health.svg"
                alt="Women's Health Clinical Homeopathic Treatment Protocol Artwork"
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Body & Credentials */}
            <div className="p-4 sm:p-5 bg-white space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#1E2559]">
                    Dr. Anjali Chandrasekhar
                  </h4>
                  <p className="text-xs font-semibold text-[#303A88]">
                    BHMS • Board Reg. KA-HOM-15563
                  </p>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Lead Physician • Indian Malayali Doctor in Official Uniform &amp; Stethoscope
                  </p>
                </div>
                <span className="bg-[#EEF2FB] text-[#303A88] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#D8E1F5]">
                  12+ Yrs Exp
                </span>
              </div>

              {/* Modal CTAs */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#D8E1F5]">
                <button
                  onClick={() => {
                    setIsPhotoModalOpen(false);
                    handleBookConsultation();
                  }}
                  className="flex items-center justify-center gap-1.5 bg-[#303A88] hover:bg-[#252E6D] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>Book Consultation</span>
                </button>
                <a
                  href={`tel:${phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 bg-[#EEF2FB] hover:bg-[#D8E1F5] text-[#303A88] py-2.5 px-3 rounded-xl font-bold text-xs border border-[#D8E1F5]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#45AC4B]" />
                  <span>Call {phonePrimary}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
