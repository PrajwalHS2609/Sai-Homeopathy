import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBookingEngine } from './AppointmentBookingEngine';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  ShieldAlert,
  Wind,
  Droplets,
  Sparkles,
  UserCheck,
  Lock,
  Sun,
  Activity,
  Home,
  Trees,
  Check,
} from 'lucide-react';

export const AllergicRhinitisManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Allergic Rhinitis & Respiratory Care (Manjeri patient guide).'
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
    navigateToBookingWithReason('Allergic Rhinitis Consultation - Manjeri', 'online');
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
      title: 'Immune Inflammatory Condition',
      desc: 'Allergic rhinitis is an inflammatory response in the nasal lining commonly triggered by environmental allergens like dust mites, pollen, and mould.',
    },
    {
      title: 'Distinct Clinical Presentation',
      desc: 'Common symptoms include repetitive sneezing, persistent nasal congestion, thin watery rhinorrhoea, and intense itching of the nose or eyes.',
    },
    {
      title: 'Importance of Differential Assessment',
      desc: 'A clinical consultation helps distinguish allergic rhinitis from acute viral infections, non-allergic vasomotor rhinitis, and chronic sinusitis.',
    },
    {
      title: 'Evidence-Based Management',
      desc: 'Established treatments include allergen avoidance, sterile saline irrigation, non-sedating antihistamines, corticosteroid nasal sprays, and specialist immunotherapy.',
    },
    {
      title: 'Sleep & Cognitive Impact',
      desc: 'Nasal blockage disrupts sleep quality, producing chronic daytime fatigue, impaired work/study concentration, and reduced general well-being.',
    },
    {
      title: 'Scientific Evidence Disclosure',
      desc: 'Reliable scientific clinical evidence has not established homoeopathy as an effective medical treatment or cure for allergic rhinitis beyond placebo.',
    },
    {
      title: 'Maintain Prescribed Therapies',
      desc: 'Do not discontinue or replace medically prescribed allergy sprays, antihistamines, or asthma medications without specialist consultation.',
    },
    {
      title: 'When to Seek Medical Care',
      desc: 'Promptly arrange evaluation when symptoms persist, disturb sleep, resist over-the-counter care, or co-occur with chest wheezing or asthma.',
    },
  ];

  const commonSymptoms = [
    'Repeated, paroxysmal sneezing, particularly upon waking or after allergen exposure',
    'Clear, thin, watery nasal discharge (rhinorrhoea)',
    'Persistent nasal congestion or bilateral nasal blockage interfering with nasal breathing',
    'Pruritus or intense itching inside the nose, soft palate, and ear canals',
    'Allergic conjunctivitis: itchy, red, watery eyes with swollen or puffy eyelids',
    'Itchy throat, hoarseness, or mucosal irritation around the nasal passages',
    'Postnasal drip causing frequent throat clearing and a chronic nocturnal cough',
    'Impaired sleep quality, frequent nighttime awakening, and morning tiredness',
    'Cognitive fatigue and difficulty concentrating during professional work or study',
    'Cyclical recurrence of symptoms upon re-exposure to environmental triggers',
  ];

  const allergyTriggers = [
    {
      title: '1. Dust Mites (Dermatophagoides)',
      desc: 'Microscopic arthropods commonly colonising household mattresses, pillows, blankets, upholstered sofas, and carpets. In sensitive individuals, inhaled dust mite faecal proteins trigger immediate mast cell degranulation, sneezing, nasal pruritus, and morning congestion.',
      tip: 'Regular hot-water laundering of bed linens (>60°C), micro-weave allergen encasings, and keeping indoor humidity below 50% significantly reduce mite loads.',
    },
    {
      title: '2. Plant Pollen (Trees, Grasses, Weeds)',
      desc: 'Microscopic airborne pollen grains from flowering trees, wild grasses, and weeds trigger seasonal allergic rhinitis (hay fever). Affected patients experience sharp seasonal peaks in sneezing, watery rhinorrhoea, and acute eye redness.',
      tip: 'Monitor local pollen advisories, keep residential windows closed during morning pollen surges, and shower/change clothes immediately after extended outdoor exposure.',
    },
    {
      title: '3. Fungal Mould Spores',
      desc: 'Microscopic fungal spores proliferating in damp bathrooms, leaking ceilings, poorly ventilated kitchens, air conditioner cooling coils, and decaying organic mulch. Inhalation sustains chronic upper airway inflammation.',
      tip: 'Remediate indoor plumbing leaks, ensure continuous exhaust ventilation in humid rooms, and scrub mildew with fungicidal agents.',
    },
    {
      title: '4. Animal Epithelial Allergens',
      desc: 'Potent airborne protein complexes found in dander (shed skin flakes), saliva, and urine of domestic cats, dogs, and birds. These tiny particles remain suspended in ambient air for hours and trigger rapid mucosal reactions.',
      tip: 'Maintain pet-free bedrooms, install high-efficiency particulate air (HEPA) room purifiers, and wash hands promptly after handling domestic animals.',
    },
    {
      title: '5. Non-Allergic Airborne Irritants',
      desc: 'Combustion smoke (tobacco smoke, biomass fuel, vehicle exhaust), strong fragrances, household aerosol cleaners, chemical fumes, and industrial particulate air pollution. While non-antigenic, they hyper-sensitise inflamed nasal mucosa.',
      tip: 'Eliminate indoor tobacco use, replace strong scented aerosols with fragrance-free alternatives, and wear protective masks in heavily polluted traffic zones.',
    },
  ];

  const assessmentQuestions = [
    'The precise onset, chronological timeline, and seasonal variation of nasal symptoms',
    'Frequency, severity, and duration of sneezing spells and nasal congestion episodes',
    'Whether symptoms predominate indoors (bedrooms, basements) or outdoors (gardens, windy days)',
    'Correlation with known exposures to domestic pets, textile dust, damp spaces, or specific workplaces',
    'Impact on sleep architecture, daytime alertness, snoring, mouth-breathing, and academic/work output',
    'Personal and family history of atopic conditions, including childhood eczema, food allergies, or asthma',
    'Currently used over-the-counter decongestants, systemic antihistamines, corticosteroid sprays, or home remedies',
  ];

  const consultationSteps = [
    {
      title: '1. Detailed Symptom Review',
      desc: 'The physician evaluates the specific nature of your nasal discharge (clear watery vs. purulent), sneezing patterns, ocular involvement, and temporal variations to distinguish allergic rhinitis from other rhinitis phenotypes.',
    },
    {
      title: '2. Medical & Atopic History',
      desc: 'A thorough exploration of personal and familial atopy (eczema, asthma, allergic conjunctivitis) and an audit of prior prescription and OTC medications used.',
    },
    {
      title: '3. Trigger & Environmental Mapping',
      desc: 'Systematic analysis of domestic, bedroom, occupational, and outdoor environments to map likely allergen exposure vectors and seasonal patterns.',
    },
    {
      title: '4. Physical Examination & Testing',
      desc: 'Anterior rhinoscopy to assess mucosal pallor, hypertrophy of the inferior turbinates, and nasal secretions. When indicated, specific IgE blood panels or skin prick testing are recommended.',
    },
    {
      title: '5. Evidence-Based Options Discussion',
      desc: 'A transparent discussion of proven pharmacological options (intranasal steroids, second-generation antihistamines), nasal saline hygiene, and specialist allergen immunotherapy when indicated.',
    },
  ];

  const treatmentModalityOptions = [
    {
      title: 'Allergen Avoidance Measures',
      desc: 'Minimising contact with verified aeroallergens is the clinical cornerstone. Strategies include dust-mite impermeable mattress encasings, HEPA air filtration, humidity control below 50%, and avoidance of smoke and irritants.',
    },
    {
      title: 'Isotonic / Hypertonic Saline Irrigation',
      desc: 'Daily nasal irrigation using sterile, distilled, or boiled-and-cooled saline rinses flushes out trapped allergens, inflammatory mediators, and thick mucus, enhancing mucosal ciliary clearance without drug side effects.',
    },
    {
      title: 'Second-Generation Antihistamines',
      desc: 'Oral or intranasal non-sedating H1-receptor antagonists provide rapid, effective relief from paroxysmal sneezing, rhinorrhoea, and ocular itching by blocking histamine receptor activity without significant sedation.',
    },
    {
      title: 'Intranasal Corticosteroid Sprays',
      desc: 'First-line medical therapy for moderate-to-severe and persistent allergic rhinitis. They exert potent topical anti-inflammatory action, relieving profound nasal congestion, rhinorrhoea, and ocular symptoms with high safety profiles.',
    },
    {
      title: 'Allergen Immunotherapy (AIT)',
      desc: 'Under the supervision of an allergy specialist, subcutaneous or sublingual immunotherapy (allergy shots/tablets) induces immunological tolerance by gradually modifying the underlying allergic immune response for long-term remission.',
    },
  ];

  const whenToSeekAdvice = [
    'Sneezing, nasal blockage, or watery discharge persists continuously beyond 2 to 3 weeks',
    'Nasal obstruction consistently disrupts sleep, causing chronic morning fatigue or daytime drowsiness',
    'Over-the-counter antihistamines or nasal decongestants fail to deliver adequate, sustained relief',
    'Symptoms interfere with professional work, educational study, or routine physical activities',
    'You experience recurring sinus pressure, facial headaches, ear fullness, or persistent cough',
    'Nasal symptoms co-occur with wheezing, chest tightness, coughing spells, or shortness of breath (suspected asthma)',
    'A child suffers from persistent nasal obstruction, chronic mouth breathing, or recurrent ear infections',
  ];

  const faqs = [
    {
      question: '1. What is allergic rhinitis?',
      answer:
        'Allergic rhinitis is an IgE-mediated inflammatory response of the nasal mucous membranes triggered by exposure to airborne environmental allergens. In sensitized individuals, mast cells in the nasal mucosa release histamine and leukotrienes upon allergen contact, causing paroxysmal sneezing, nasal congestion, a watery runny nose, and itching of the nose and eyes.',
    },
    {
      question: '2. Where can I seek allergic rhinitis treatment in Manjeri?',
      answer:
        'If you are seeking allergic rhinitis care in Manjeri, consult a qualified medical professional or ENT specialist who can perform a formal anterior rhinoscopy, evaluate suspected triggers, recommend diagnostic IgE allergy tests, and formulate an evidence-based management plan suited to your lifestyle.',
    },
    {
      question: '3. Can homoeopathy cure allergic rhinitis?',
      answer:
        'Homoeopathy has not been established by reliable scientific clinical evidence as an effective medical treatment or cure for allergic rhinitis beyond a placebo effect. Evidence-based care relies on proven interventions such as allergen avoidance, sterile saline nasal irrigation, second-generation antihistamines, intranasal corticosteroid sprays, and allergen immunotherapy.',
    },
    {
      question: '4. What are the common triggers of allergic rhinitis?',
      answer:
        'The most common indoor and outdoor allergens include house dust mites, plant and tree pollens, mould spores, and animal dander proteins (cats, dogs, birds). In addition, airborne irritants like vehicle exhaust, cigarette smoke, strong perfumes, and ambient air pollution can exacerbate symptoms in hyperreactive nasal passages.',
    },
    {
      question: '5. What is the difference between seasonal and perennial allergic rhinitis?',
      answer:
        'Seasonal allergic rhinitis (often called hay fever) flares up during specific times of the year corresponding to outdoor pollination seasons of trees, grasses, and weeds. Perennial allergic rhinitis persists throughout the entire year, typically triggered by continuous exposure to indoor aeroallergens such as house dust mites, indoor moulds, or domestic pets.',
    },
    {
      question: '6. Can allergic rhinitis affect sleep?',
      answer:
        'Yes, significantly. Chronic mucosal swelling causes nasal airway resistance, leading to mandatory mouth breathing, dry mouth, frequent nocturnal awakenings, snoring, and fragmented sleep. This frequently produces morning headaches, cognitive grogginess, daytime somnolence, and impaired concentration at work or school.',
    },
    {
      question: '7. Is allergic rhinitis the same as sinusitis?',
      answer:
        'No. Allergic rhinitis is an allergic inflammation limited primarily to the nasal passages, characterized by clear watery discharge and itching. Sinusitis involves bacterial, viral, or chronic inflammatory involvement of the paranasal sinus cavities, typically presenting with thick discoloured mucus, facial pain or pressure over the cheeks/forehead, reduced smell, and sometimes fever. However, uncontrolled allergic rhinitis can block sinus ostia, predisposing patients to secondary sinusitis.',
    },
    {
      question: '8. When should I consult an allergic rhinitis specialist?',
      answer:
        'You should seek specialist evaluation if your symptoms persist despite basic over-the-counter measures, if nasal congestion severely impairs your sleep or quality of life, if you experience co-existing asthma symptoms (wheezing, shortness of breath), or if you require formal allergy testing (skin prick or blood specific-IgE) to evaluate eligibility for allergen immunotherapy.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Mobile / Quick Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-3 shadow-lg flex items-center justify-between sm:hidden">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wide">
              Allergy Care Guide
            </span>
            <span className="text-xs text-[#475569] font-medium truncate max-w-[200px]">
              Dr. Anjali Chandrasekhar (BHMS)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${phonePrimary}`}
              className="p-2 rounded-lg bg-[#303A88] text-white text-xs font-bold flex items-center justify-center"
              aria-label="Call Doctor Desk"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={handleBookConsultation}
              className="px-3.5 py-2 rounded-lg bg-[#0284C7] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Doctor Profile on Left */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#F8FAFD] to-[#F8FAFD] pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-[#BAE6FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Doctor Profile Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-[#BAE6FD] shadow-md hover:shadow-lg transition-all">
                
                {/* Doctor Visual & Credentials */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#BAE6FD] mb-5 group bg-slate-100">
                  <img
                    src="/images/dr-anjali-malayali-doctor.jpg"
                    alt="Dr. Anjali Chandrasekhar (BHMS) - Allergic Rhinitis & Respiratory Care"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/treatment-respiratory.svg';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2559]/90 via-[#1E2559]/20 to-transparent pointer-events-none" />

                  {/* Registered Medical Council Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#0369A1] border border-[#BAE6FD] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Kerala Council Reg: 16503</span>
                  </div>

                  {/* Doctor Details at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-editorial text-xl font-bold text-white">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs text-[#BAE6FD] font-medium font-sans">
                      BHMS • Senior Homeopathic Physician
                    </p>
                    <p className="text-[11px] text-white/80 font-sans mt-0.5">
                      Allergic Rhinitis, ENT &amp; Constitutional Consultations
                    </p>
                  </div>
                </div>

                {/* 4 Interactive Credentials Cards */}
                <div className="grid grid-cols-2 gap-2.5 text-center font-sans mb-4">
                  <div className="bg-[#F0F9FF] rounded-xl p-2.5 border border-[#E0F2FE]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#0284C7] block tabular-nums">
                      10+ Years
                    </span>
                    <span className="text-[10px] text-[#0369A1] font-semibold uppercase tracking-wider">
                      Clinical Care
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-2.5 border border-[#D8E1F5]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#303A88] block tabular-nums">
                      2,000+
                    </span>
                    <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                      Patients Consulted
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-2.5 border border-[#D8E1F5]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#303A88] block">
                      Kuttippuram
                    </span>
                    <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                      Main Clinic
                    </span>
                  </div>

                  <div className="bg-[#F8FAFD] rounded-xl p-2.5 border border-[#D8E1F5]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#45AC4B] block">
                      Puthanathani
                    </span>
                    <span className="text-[10px] text-[#475569] font-semibold uppercase tracking-wider">
                      Branch Clinic
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#475569] border-t border-[#BAE6FD] pt-3">
                  <p className="flex items-center gap-1.5 text-[#1E2559] font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Confidential, evidence-grounded consultations for patients in Manjeri and Malappuram district.</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[#64748B]">
                    <Lock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Private online video consultations &amp; in-clinic visits available.</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#BAE6FD] flex items-center justify-between gap-2">
                  <a
                    href={`tel:${phonePrimary}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#303A88] text-white text-xs font-bold text-center hover:bg-[#252E6D] transition-colors"
                  >
                    Call: {phonePrimary}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-[#45AC4B] text-white text-xs font-bold text-center hover:bg-[#39933E] transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0284C7]/10 text-[#0369A1] border border-[#0284C7]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                  Manjeri Patient Information
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88] border border-[#303A88]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#303A88]" />
                  Evidence-Informed Healthcare
                </span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight">
                Allergic Rhinitis Homoeopathic Treatment in Manjeri
              </h1>

              <div className="prose text-[#475569] space-y-3 text-sm sm:text-base leading-relaxed">
                <p>
                  Allergic rhinitis is a common condition that affects the nose and may cause frequent sneezing, a runny nose, nasal congestion, and itching of the nose or eyes. These symptoms can interfere with sleep, concentration, work, studies, and everyday activities. For people experiencing recurring nasal allergy symptoms, understanding the possible triggers and seeking appropriate medical advice are important steps towards better symptom management.
                </p>

                <p>
                  If you are looking for <strong>Allergic Rhinitis Homoeopathic Treatment in Manjeri</strong>, learning about the condition, its symptoms, potential triggers, and available treatment options can help you make informed healthcare decisions. An allergy consultation can help assess your symptoms, identify possible causes, and determine whether further examination or testing is necessary.
                </p>

                <p>
                  People searching for <strong>Allergic Rhinitis Treatment in Manjeri</strong> may experience symptoms during particular seasons or throughout the year. A suitable care plan depends on the nature and severity of the symptoms, the patient's medical history, and the factors that trigger the allergic response.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#BAE6FD] shadow-2xs">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    A responsible approach to nasal allergy focuses on clinical trigger identification and objective diagnosis. <strong>Homoeopathy has not been established by reliable scientific evidence as an effective medical treatment or cure for allergic rhinitis</strong>. Individuals considering complementary healthcare should understand its limitations and avoid postponing evidence-based medical treatments.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm shadow-md shadow-[#0284C7]/20 transition-all hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Allergy Consultation</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#1E2559] border border-[#D8E1F5] font-semibold text-sm shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
                  <span>WhatsApp: {phoneWhatsApp}</span>
                </a>

                <a
                  href={`tel:${phonePrimary}`}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#303A88] border border-[#D8E1F5] font-semibold text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {phonePrimary}</span>
                </a>
              </div>

              <p className="text-xs text-[#64748B] flex items-center gap-1.5 pt-1">
                <Info className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>
                  Consultations prioritize trigger assessment, differential diagnosis, and evidence-informed supportive care.
                </span>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Important Key Takeaways */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#0284C7]/10 flex items-center justify-center text-[#0284C7]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Important Key Takeaways for Patients in Manjeri
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#0284C7]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0369A1] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
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

      {/* Section 1: Understanding Allergic Rhinitis */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Allergic Rhinitis
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Allergic rhinitis occurs when the immune system reacts to substances in the environment that are usually harmless to most people. These substances, known as allergens, can trigger inflammation inside the nose.
            </p>

            <p>
              Common allergens include dust mites, pollen, mould, and animal allergens. Exposure may lead to sneezing, nasal itching, a watery discharge, and congestion. Some people also experience itchy or watery eyes, throat irritation, or postnasal drip.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
              <div className="p-5 rounded-2xl bg-white border border-[#BAE6FD]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-2">
                  <Sun className="w-4 h-4 text-[#0284C7]" />
                  <span>Seasonal Allergic Rhinitis</span>
                </div>
                <h4 className="font-bold text-[#1E2559] text-base mb-2">Seasonal (Intermittent) Form</h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Associated with outdoor allergens that surge during particular periods of the year, such as tree, weed, and grass pollens. Symptoms often intensify during dry, windy weather conditions when airborne pollen counts peak.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#BAE6FD]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#303A88] uppercase tracking-wider mb-2">
                  <Home className="w-4 h-4 text-[#303A88]" />
                  <span>Perennial Allergic Rhinitis</span>
                </div>
                <h4 className="font-bold text-[#1E2559] text-base mb-2">Perennial (Persistent) Form</h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Continues throughout the entire year due to continuous exposure to indoor environmental allergens such as house dust mites, indoor fungal mould, or household animal dander. Symptoms tend to be chronic rather than episodic.
                </p>
              </div>
            </div>

            <p>
              Understanding the difference can help healthcare professionals evaluate symptoms and recommend appropriate management strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Common Symptoms of Allergic Rhinitis */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] block">
              SYMPTOM IDENTIFICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Symptoms of Allergic Rhinitis
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Recognising the symptoms of allergic rhinitis can help people decide when to seek medical advice. Symptoms may vary from person to person and may range from occasional discomfort to persistent nasal problems:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {commonSymptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] text-xs sm:text-sm text-[#0369A1] leading-relaxed flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
            <p>
              Although these symptoms are common in allergic rhinitis, other conditions can cause similar problems. A proper medical assessment is important, especially when symptoms are persistent, severe, or accompanied by fever, facial pain, breathing difficulties, or unusual nasal discharge.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Common Triggers of Nasal Allergies */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              AEROALLERGENS &amp; IRRITANTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Triggers of Nasal Allergies
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Identifying potential triggers is an important part of managing allergic rhinitis. Symptoms may develop shortly after exposure to an allergen, although the timing and severity can vary:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {allergyTriggers.map((trigger, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-2 hover:border-[#0284C7]/50 transition-all shadow-2xs"
              >
                <h3 className="font-bold text-[#1E2559] text-base sm:text-lg flex items-center gap-2">
                  <Wind className="w-4 h-4 text-[#0284C7]" />
                  <span>{trigger.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {trigger.desc}
                </p>
                <div className="p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] text-xs text-[#0369A1] font-medium flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>{trigger.tip}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            Recognising the difference between an allergic trigger and a non-allergic irritant can help guide appropriate care and avoid unnecessary restriction of daily activities.
          </div>
        </div>
      </section>

      {/* Section 4: Allergic Rhinitis Treatment in Manjeri: Why Assessment Matters */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] block">
              DIAGNOSTIC RIGOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Allergic Rhinitis Treatment in Manjeri: Why Assessment Matters
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People seeking <strong>Allergy Treatment in Manjeri</strong> may have different symptoms, medical histories, and environmental triggers. For this reason, treatment should not rely on symptoms alone or assume that every episode of sneezing is caused by an allergy.
            </p>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
              <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#0284C7]" />
                Key Inquiries During an Allergy Assessment:
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                {assessmentQuestions.map((q, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Depending on the symptoms, the clinician may recommend a physical examination or allergy testing. Testing is not necessary for every person, but it may help when the diagnosis is uncertain or identifying a particular allergen would affect management.
            </p>

            <div className="p-4 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#0369A1] font-medium leading-relaxed">
                A personalised assessment can also help distinguish allergic rhinitis from sinus problems, recurrent viral infections, and non-allergic rhinitis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Homoeopathic Treatment for Allergic Rhinitis in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT LANDSCAPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Homoeopathic Treatment for Allergic Rhinitis in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People interested in complementary healthcare may search for <strong>Homoeopathic Treatment for Allergic Rhinitis in Manjeri</strong> or a <strong>Homoeopathic Doctor for Allergic Rhinitis in Manjeri</strong>.
            </p>

            <p>
              Homoeopathy is a system of alternative medicine based on principles such as the use of highly diluted substances. Some people seek homoeopathic consultations because they prefer an individualised discussion of their symptoms, health history, and general wellbeing.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Scientific Evidence Clarification</span>
              </div>
              <p className="leading-relaxed">
                Reliable scientific clinical evidence has not established that homoeopathy is effective for treating allergic rhinitis beyond placebo effects. It should not be presented as a proven cure or as a replacement for evidence-based allergy treatment.
              </p>
            </div>

            <p>
              If you are considering <strong>Allergy Homoeopathic Treatment in Manjeri</strong>, discuss your options openly with a qualified healthcare professional. Make sure you understand the evidence, limitations, and potential risks associated with any proposed treatment. Do not stop prescribed medicines or delay appropriate medical care in favour of an unproven approach.
            </p>

            <p>
              An informed consultation should help you understand your condition and make decisions based on your individual needs and reliable medical information.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: What to Expect from an Allergic Rhinitis Consultation */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] block">
              CLINICAL PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Expect from an Allergic Rhinitis Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              An <strong>Allergic Rhinitis Consultation in Manjeri</strong> should focus on understanding the patient's symptoms and identifying an appropriate plan for assessment and management:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {consultationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
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

      {/* Section 7: Nasal Allergy Treatment in Manjeri: Understanding Available Options */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              EVIDENCE-BASED CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Nasal Allergy Treatment in Manjeri: Understanding Available Options
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              <strong>Nasal Allergy Treatment in Manjeri</strong> may involve several approaches, depending on what is causing the symptoms and how much they affect everyday life:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {treatmentModalityOptions.map((opt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#0284C7]/10 flex items-center justify-center text-[#0284C7] text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {opt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-8">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Seasonal Allergy Treatment in Manjeri & Impact on Daily Life */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] block">
              SEASONAL INSIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Seasonal Allergy Treatment in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People experiencing symptoms during particular seasons may look for <strong>Seasonal Allergy Treatment in Manjeri</strong>. Seasonal allergic rhinitis can be triggered by pollen or other allergens that become more prevalent at certain times.
            </p>

            <p>
              Keeping a record of symptoms, the weather, outdoor activities, and possible allergen exposure may help identify patterns. When pollen exposure appears to be a trigger, practical measures may include changing clothes after spending time outdoors, showering to remove pollen from hair and skin, and keeping windows closed when outdoor pollen levels are high.
            </p>

            <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
              Seasonal symptoms should not automatically be attributed to pollen. A medical assessment can help determine whether allergic rhinitis or another condition is responsible.
            </div>

            <div className="pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2559] mb-2">
                How Allergic Rhinitis Can Affect Daily Life
              </h3>
              <p>
                Persistent nasal allergy symptoms can affect more than the nose. Congestion may interfere with sleep, while repeated sneezing and itching can make work, studying, travelling, and social activities uncomfortable.
              </p>
              <p>
                Some people experience fatigue because their sleep is disturbed. Others may find it difficult to concentrate when symptoms are active.
              </p>
              <p>
                People with allergic rhinitis may also have asthma or other allergic conditions. Anyone experiencing wheezing, chest tightness, or recurring breathing symptoms should discuss these concerns with a healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: When Should You Seek Medical Advice? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-rose-700 block">
              WHEN TO SEEK MEDICAL EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Seek Medical Advice?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Consider arranging a medical consultation if:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {whenToSeekAdvice.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm flex items-start gap-3 mt-4">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p>
              <strong>Urgent Emergency Warning:</strong> Seek urgent medical attention for severe breathing difficulty, wheezing, or swelling of the tongue, lips, or throat. These symptoms may indicate an acute systemic allergic reaction (anaphylaxis) or severe asthma flare-up requiring emergency hospital care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (8 FAQs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Questions Patients Ask About Allergic Rhinitis Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Reliable, evidence-grounded answers to help patients make informed decisions about nasal allergy care.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#D8E1F5] overflow-hidden bg-[#F8FAFD] transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#EEF2FB]/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1E2559]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#303A88] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#D8E1F5]/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Engine Section */}
      <section id="booking-section" className="py-16 bg-[#F0F9FF] border-b border-[#BAE6FD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Allergic Rhinitis Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Confidential online video visits or in-clinic consultations at our Kuttippuram and Puthanathani branches.
            </p>
          </div>

          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Related Regional Clinic Guides & Other Pages */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#0284C7] block">
                SPECIALIZED HEALTHCARE GUIDES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Explore Other Regional Patient Guides in Manjeri
              </h3>
            </div>
            <p className="text-xs text-[#64748B]">
              Comprehensive guides on common health concerns across Malappuram
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            <button
              onClick={() => {
                setCurrentView('hair-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#0D9488] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#0D9488] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#0D9488] transition-colors">
                  Hair Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Hair fall causes, thinning, scalp health, and evidence-based care guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0D9488] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('skin-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#F59E0B] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#F59E0B] transition-colors">
                  Skin Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Acne, eczema, psoriasis, fungal rashes, and dermatological care guide.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#F59E0B] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('menstrual-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#E11D48] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#E11D48] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#E11D48] transition-colors">
                  Menstrual Treatment in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Period pain, irregular cycles, heavy flow, PMS, and women's health.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#E11D48] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => {
                setCurrentView('piles-homoeopathic-clinic-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-xl bg-white border border-[#D8E1F5] hover:border-[#45AC4B] hover:shadow-xs transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="inline-block w-2 h-2 rounded-full bg-[#45AC4B] mb-2" />
                <h4 className="font-bold text-sm text-[#1E2559] group-hover:text-[#45AC4B] transition-colors">
                  Piles Clinic in Manjeri
                </h4>
                <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                  Haemorrhoids consultation, fissure symptoms, and anorectal care.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#45AC4B] mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Conclusion & Clinic Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] via-[#1B3A4B] to-[#1E2559] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#BAE6FD]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Conclusion &amp; Next Steps Towards Better Allergy Management
          </h2>

          <div className="text-sm sm:text-base text-[#D3DBF4] max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Allergic rhinitis can affect comfort, sleep, concentration, and quality of life, particularly when symptoms occur frequently or continue throughout the year. Understanding possible triggers and obtaining an appropriate assessment are important steps towards effective symptom management.
            </p>
            <p>
              If you are searching for <strong>Allergic Rhinitis Homoeopathic Treatment in Manjeri</strong>, <strong>Allergic Rhinitis Clinic in Manjeri</strong>, or <strong>Homoeopathic Doctor for Allergic Rhinitis in Manjeri</strong>, make sure your healthcare decisions are guided by accurate information about the condition and the available evidence.
            </p>
            <p>
              A suitable care plan should consider your symptoms, medical history, potential allergens, and evidence-based treatment options. For persistent or severe symptoms, consult a qualified healthcare professional to determine the most appropriate next steps.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0284C7]" />
              <span>Call Doctor Desk: {phonePrimary}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#45AC4B] text-white font-bold text-sm hover:bg-[#39933E] transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {phoneWhatsApp}</span>
            </a>
          </div>

          {/* Regional Clinic Locations Info */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-xs text-[#CBD5E1]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                Kuttippuram Clinic
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571
              </p>
              <p className="mt-1 text-[#86EFAC] font-semibold">
                Ph: {phonePrimary} / {phoneSecondary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                Puthanathani Clinic
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                Chembayil complex, opp. Thavakkal gold, Puthanathani, Kerala 676552
              </p>
              <p className="mt-1 text-[#86EFAC] font-semibold">
                Ph: 089211 80408
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
