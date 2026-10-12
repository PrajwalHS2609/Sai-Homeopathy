import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Heart,
  Wind,
  Sparkles,
  Brain,
  Activity,
  Layers,
  ShieldCheck,
  Eye,
  ArrowRight,
  CheckCircle2,
  X,
  Stethoscope,
  Calendar,
  Sparkle,
  ChevronRight,
  Clock,
  PhoneCall,
  Info,
} from 'lucide-react';

export interface TreatmentCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  commonConditions: string[];
  constitutionalApproach: string;
  badge: string;
  iconType: 'women' | 'respiratory' | 'skin' | 'neuro' | 'thyroid' | 'vascular' | 'joint' | 'eye';
  keyRemediesNote: string;
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: 'womens-health-gynecology',
    title: 'Women’s Health & Gynecological Care',
    shortDescription: 'Comprehensive gentle healing for PCOD/PCOS, menstrual irregularities, uterine fibroids, endometriosis, and menopause transitions.',
    fullOverview: 'Classical homeopathy takes a comprehensive, non-invasive view of the female endocrine system. Rather than administering synthetic hormone replacements that suppress natural feedback loops, individualized constitutional therapy stimulates the pituitary-ovarian axis, rebalancing hormones and supporting emotional stability.',
    commonConditions: [
      'PCOD / PCOS (Polycystic Ovarian Syndrome) & Cystic Ovaries',
      'Irregular, Delayed, Heavy or Painful Menses (Dysmenorrhea)',
      'Uterine Fibroids, Ovarian Cysts & Endometriosis Care',
      'Perimenopause & Menopausal Hot Flashes, Mood Swings',
      'Hormonal Acne, Hirsutism & Infertility Constitutional Support',
    ],
    constitutionalApproach: 'Constitutional remedies (such as Pulsatilla, Sepia, Natrum Muriaticum, and Calcarea Carbonica) tailored to personal temperament to restore natural ovulatory rhythms and hormonal equilibrium.',
    keyRemediesNote: 'Non-hormonal, non-habit forming gentle drops matched to constitutional pathology.',
    badge: 'Gynecology & Hormones',
    iconType: 'women',
  },
  {
    id: 'respiratory-ent-allergy',
    title: 'Respiratory, ENT & Allergy Conditions',
    shortDescription: 'Long-term constitutional immunity for allergic rhinitis, asthma, chronic sinusitis, nasal polyps, and weather sensitivities.',
    fullOverview: 'Rather than temporarily suppressing airway spasms with heavy inhalers or sedative antihistamines, homeopathic treatment works to desensitize mucosal hyper-reactivity. It strengthens respiratory resilience and lung vitality against weather transitions, urban smog, and allergens.',
    commonConditions: [
      'Allergic Rhinitis (Morning Paroxysmal Sneezing, Watery Eyes)',
      'Bronchial Asthma & Cold-Weather Night Wheezing',
      'Chronic Sinusitis, Frontal Headaches & Post-Nasal Drip',
      'Recurrent Tonsillitis, Adenoids & Childhood Pharyngitis',
      'Dust Mite, Smog & Pollen Sensitivity without Sedation',
    ],
    constitutionalApproach: 'Targeted dilutions (such as Allium Cepa, Arsenicum Album, Blatta Orientalis, and Drosera) that stabilize mast cells and rebuild mucosal defence against climatic triggers.',
    keyRemediesNote: 'Strengthens internal mucosal resistance without steroid rebound or drowsiness.',
    badge: 'ENT & Pulmonology',
    iconType: 'respiratory',
  },
  {
    id: 'skin-hair-scalp',
    title: 'Skin, Hair & Scalp Conditions',
    shortDescription: 'Deep constitutional healing for psoriasis, chronic eczema, stubborn cystic acne, alopecia areata, and scalp dermatitis.',
    fullOverview: 'In classical homeopathy, the skin is recognized as an external mirror of internal metabolic and immune harmony. We address dermatological flare-ups at the root cellular level, eliminating toxin build-up and calming hyper-reactive dermal inflammation without steroid creams.',
    commonConditions: [
      'Psoriasis Plaques, Silvery Scaling & Guttate Lesions',
      'Atopic Eczema, Contact Dermatitis & Intense Pruritus',
      'Cystic Acne Vulgaris, Comedones & Post-Acne Hyperpigmentation',
      'Alopecia Areata (Patchy Hair Loss), Diffuse Thinning & Fragility',
      'Seborrheic Dermatitis, Recurrent Dandruff & Chronic Urticaria (Hives)',
    ],
    constitutionalApproach: 'Constitutional remedies (Berberis Aquifolium, Graphites, Sulphur, and Natrum Mur) paired with pure botanicals to promote skin cellular renewal and follicular nourishment.',
    keyRemediesNote: 'Non-steroidal internal detoxification for lasting dermal clarity and scalp vitality.',
    badge: 'Dermatology & Scalp',
    iconType: 'skin',
  },
  {
    id: 'neurological-headache',
    title: 'Neurological & Headache Conditions',
    shortDescription: 'Gentle cranial nerve restoration for migraines, cluster headaches, trigeminal neuralgia, vertigo, and chronic stress exhaustion.',
    fullOverview: 'Gentle classical therapeutics address hyper-excitable cranial nerve pathways and neuro-vascular spasms. By calming the autonomic nervous system, treatment restores clarity and calm without creating sedative dependency or daytime drowsiness.',
    commonConditions: [
      'Vascular & Throbbing Migraines (Unilateral, Aura, Photophobia)',
      'Chronic Tension Headaches & Stress-Induced Band-Like Pressure',
      'Trigeminal Neuralgia, Facial Spasms & Radiating Nerve Pain',
      'Vestibular Vertigo, Labyrinthitis & Dizziness on Movement',
      'Chronic Insomnia, Night-Time Restlessness & Mental Exhaustion',
    ],
    constitutionalApproach: 'Remedies like Belladonna, Spigelia, Gelsemium, and bio-chemic tissue salts (Kali Phos, Mag Phos) that relieve vascular spasms and soothe stressed nerve endings.',
    keyRemediesNote: 'Calms neuro-vascular tension naturally without grogginess or cognitive impairment.',
    badge: 'Neurology & Stress',
    iconType: 'neuro',
  },
  {
    id: 'renal-urinary-gallbladder-thyroid',
    title: 'Renal, Urinary, Gallbladder & Thyroid Conditions',
    shortDescription: 'Metabolic recalibration for hypothyroidism, recurrent kidney stones (renal calculi), gallbladder comfort, and recurrent UTIs.',
    fullOverview: 'Homeopathic organ drainage and constitutional therapy assist visceral organ filtration and endocrine communication. It helps clear stone crystal deposits in the urinary tract, promotes smooth biliary flow, and optimizes thyroid metabolism naturally.',
    commonConditions: [
      'Hypothyroidism Support & Hashimoto’s Metabolic Sluggishness',
      'Recurrent Kidney Stones (Calcium Oxalate / Uric Acid Stone Expulsion)',
      'Biliary Dyspepsia, Sluggish Gallbladder & Right Hypochondriac Heaviness',
      'Recurrent Urinary Tract Infections (UTI), Burning Micturition (Dysuria)',
      'Metabolic Sluggishness, Fluid Retention & Chronic Fatigue',
    ],
    constitutionalApproach: 'Organ drainage potencies (Berberis Vulgaris, Lycopodium, Sarsaparilla, and Thyroidinum) promoting stone passage and normalizing urine chemistry.',
    keyRemediesNote: 'Supports non-invasive expulsion of smaller calculi and stabilizes metabolic output.',
    badge: 'Metabolic & Visceral',
    iconType: 'thyroid',
  },
  {
    id: 'anorectal-vascular',
    title: 'Anorectal & Vascular Conditions',
    shortDescription: 'Non-surgical relief for piles (hemorrhoids), painful anal fissures, chronic constipation, and varicose vein circulation.',
    fullOverview: 'Focuses on relieving pelvic venous congestion and portal pressure. Non-invasive homeopathic protocols soothe inflamed tissues, heal anal fissures, strengthen venous wall elasticity, and facilitate smooth, pain-free bowel movements.',
    commonConditions: [
      'Bleeding & Non-Bleeding Piles (Hemorrhoids, External & Internal)',
      'Painful Anal Fissures & Cutting Burning Pains Post-Defecation',
      'Chronic Sluggish Bowel Movement (Habitual Constipation)',
      'Varicose Veins, Spider Veins & Heavy, Aching Lower Limbs',
      'Pelvic Venous Engorgement & Night-Time Calves Cramping',
    ],
    constitutionalApproach: 'Vascular tonics and connective-tissue restoratives (Hamamelis Virginica, Collinsonia, Ratanhia, and Aesculus) to decompress engorged venous cushions.',
    keyRemediesNote: 'Non-surgical resolution designed to heal sensitive rectal tissues and tone vein walls.',
    badge: 'Proctology & Veins',
    iconType: 'vascular',
  },
  {
    id: 'joint-musculoskeletal-chronic',
    title: 'Joint, Musculoskeletal & Chronic Conditions',
    shortDescription: 'Synovial nourishment and anti-inflammatory relief for osteoarthritis, cervical/lumbar spondylosis, sciatica, and gout.',
    fullOverview: 'Alleviates synovial inflammation, slows cartilage degradation, and promotes smooth joint lubrication while neutralizing uric acid crystal deposits—all without causing gastric ulcers or acidity typical of standard pain relievers.',
    commonConditions: [
      'Knee Joint Osteoarthritis, Crepitus & Morning Joint Stiffness',
      'Cervical Spondylosis (Neck Stiffness, Arm Radiating Numbness)',
      'Lumbar Spondylosis, Slip Disc & Sciatica Nerve Shooting Pain',
      'High Uric Acid, Gouty Arthritis & Acute Big Toe Inflammation',
      'Frozen Shoulder, Heel Spurs (Plantar Fasciitis) & Fibromyalgia',
    ],
    constitutionalApproach: 'Constitutional remedies (Rhus Toxicodendron, Bryonia Alba, Ledum Palustre, Colchicum, and Ruta Graveolens) matching motion modalities and seasonal dampness sensitivity.',
    keyRemediesNote: 'Gastric-safe joint comfort that supports long-term mobility and cartilage health.',
    badge: 'Orthopedics & Mobility',
    iconType: 'joint',
  },
  {
    id: 'ophthalmic-eye',
    title: 'Ophthalmic / Eye Conditions',
    shortDescription: 'Gentle ocular mucosal therapy for allergic conjunctivitis, dry eye syndrome, recurrent styes, blepharitis, and digital screen strain.',
    fullOverview: 'Gentle constitutional therapy relieves chronic ocular allergies and strengthens tear film dynamics, especially for individuals spending long hours on digital devices or in air-conditioned environments.',
    commonConditions: [
      'Chronic Allergic Conjunctivitis (Itchy, Gritty, Pink Eyes)',
      'Dry Eye Syndrome & Screen-Induced Asthenopia Discomfort',
      'Recurrent Styes (Hordeolum) & Hardened Eyelid Chalazions',
      'Blepharitis (Eyelid Margin Inflammation & Morning Crusting)',
      'Watery Eyes (Epiphora) in Cold, Windy Weather & Digital Fatigue',
    ],
    constitutionalApproach: 'Gentle ocular-affinity remedies (Euphrasia Officinalis, Staphysagria, Pulsatilla, and Ruta) that regulate meibomian gland secretion and mucosal resistance.',
    keyRemediesNote: 'Soothes delicate eye mucous membranes and prevents recurrent eyelid infections.',
    badge: 'Ocular Wellness',
    iconType: 'eye',
  },
];

export const TreatmentCategoriesSection: React.FC = () => {
  const { navigateToBookingWithReason } = useClinic();
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<TreatmentCategory | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const renderIcon = (type: TreatmentCategory['iconType']) => {
    switch (type) {
      case 'women':
        return <Heart className="w-6 h-6 text-current" />;
      case 'respiratory':
        return <Wind className="w-6 h-6 text-current" />;
      case 'skin':
        return <Sparkles className="w-6 h-6 text-current" />;
      case 'neuro':
        return <Brain className="w-6 h-6 text-current" />;
      case 'thyroid':
        return <Activity className="w-6 h-6 text-current" />;
      case 'vascular':
        return <Layers className="w-6 h-6 text-current" />;
      case 'joint':
        return <ShieldCheck className="w-6 h-6 text-current" />;
      case 'eye':
        return <Eye className="w-6 h-6 text-current" />;
      default:
        return <Stethoscope className="w-6 h-6 text-current" />;
    }
  };

  const handleBookForCategory = (cat: TreatmentCategory) => {
    const reasonText = `Consultation for ${cat.title} (${cat.commonConditions.slice(0, 2).join(', ')})`;
    setSelectedCategoryModal(null);
    navigateToBookingWithReason(reasonText);
  };

  const filteredCategories =
    activeFilter === 'all'
      ? TREATMENT_CATEGORIES
      : TREATMENT_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="treatment-categories" className="py-20 bg-[#F8FAFD] border-b border-[#D8E1F5]/80 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2FB] border border-[#D3DBF4] text-xs font-bold text-[#303A88] tracking-wider uppercase font-sans">
            <Stethoscope className="w-3.5 h-3.5 text-[#303A88]" />
            <span>TREATMENT SPECIALTIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight text-balance">
            Specialized Homeopathy Treatment Modalities
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed text-balance font-sans">
            Comprehensive, patient-focused care tailored to root causes across 8 specialized clinical disciplines — available online and at our Malappuram clinic.
          </p>
        </div>

        {/* Modern Interactive Filter Tabs Bar */}
        <div className="w-full flex justify-center mb-8 px-2">
          <div className="flex items-center justify-start sm:justify-center flex-nowrap sm:flex-wrap gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-1.5 px-3 sm:px-4 rounded-full bg-white/80 backdrop-blur-xs border border-[#D8E1F5] shadow-xs scrollbar-none">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-[#303A88] text-white shadow-xs ring-1 ring-[#303A88]'
                  : 'text-[#475569] hover:text-[#1E2559] hover:bg-[#EEF2FB]'
              }`}
            >
              All Specialties
            </button>
            {TREATMENT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-[#45AC4B] text-white font-semibold shadow-xs ring-1 ring-[#45AC4B]'
                    : 'text-[#475569] hover:text-[#1E2559] hover:bg-[#EDF8EE]'
                }`}
              >
                {cat.badge}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Modern Treatment Subcategory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              id={`subcat-${cat.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#303A88]/50 relative overflow-hidden"
            >
              {/* Subtle decorative background hover glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#EEF2FB] rounded-full opacity-0 group-hover:opacity-70 transition-opacity pointer-events-none blur-xl" />

              <div className="space-y-4 relative z-10">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] group-hover:bg-[#303A88] text-[#303A88] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                    {renderIcon(cat.iconType)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F8335] bg-[#EDF8EE] px-2.5 py-1 rounded-full border border-[#C4EAC7]">
                    {cat.badge}
                  </span>
                </div>

                {/* Subcategory Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors leading-snug">
                  {cat.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                  {cat.shortDescription}
                </p>

                {/* Common Conditions List Preview */}
                <div className="space-y-1.5 pt-3 border-t border-[#EEF2FB] text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E2559]/70 block">
                    Key Conditions Treated:
                  </span>
                  <ul className="space-y-1 text-[#334155]">
                    {cat.commonConditions.slice(0, 3).map((cond, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cond}</span>
                      </li>
                    ))}
                  </ul>
                  {cat.commonConditions.length > 3 && (
                    <span className="text-[10px] text-[#303A88] font-medium block pt-0.5">
                      +{cat.commonConditions.length - 3} more conditions treated
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-[#EEF2FB] flex items-center justify-between gap-2 relative z-10">
                <button
                  type="button"
                  onClick={() => setSelectedCategoryModal(cat)}
                  className="text-xs font-semibold text-[#64748B] hover:text-[#303A88] underline underline-offset-4 transition-colors"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => handleBookForCategory(cat)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EDF8EE] hover:bg-[#45AC4B] text-[#2F8335] hover:text-white text-xs font-semibold transition-all duration-200 shadow-2xs group/btn"
                >
                  <span>Consult</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Clinical Assurance Strip */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] p-6 sm:p-8 border border-[#D8E1F5] flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1E2559]">
              Have multi-system symptoms or unlisted conditions?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              During constitutional case taking, Dr. Anjali Chandrasekhar evaluates your physical, mental, and constitutional factors comprehensively.
            </p>
          </div>

          <button
            onClick={() => navigateToBookingWithReason('General Constitutional Health Review')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#303A88] hover:bg-[#252E6D] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md whitespace-nowrap"
          >
            <span>Book Clinical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Comprehensive In-Depth Clinical Modal for Selected Category */}
      {selectedCategoryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E2559]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200 font-sans">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full border border-[#D8E1F5] shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#EEF2FB] to-white border-b border-[#D8E1F5] flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#303A88] text-white flex items-center justify-center shadow-sm">
                  {renderIcon(selectedCategoryModal.iconType)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F8335] bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                    {selectedCategoryModal.badge}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E2559] mt-1 leading-snug">
                    {selectedCategoryModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="p-2 rounded-full text-[#64748B] hover:text-[#1E2559] hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Detailed Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#303A88]">
                  Clinical Overview & Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {selectedCategoryModal.fullOverview}
                </p>
              </div>

              {/* Conditions Treated Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2559]">
                  Conditions Frequently Managed Under This Specialty
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedCategoryModal.commonConditions.map((cond, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-center gap-2.5 text-xs text-[#1E2559]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                      <span className="font-medium">{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Constitutional Protocol */}
              <div className="p-4 rounded-2xl bg-[#EEF2FB] border border-[#D3DBF4] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#303A88] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#45AC4B]" />
                  <span>Individualized Constitutional Approach</span>
                </div>
                <p className="text-[#334155] leading-relaxed">
                  {selectedCategoryModal.constitutionalApproach}
                </p>
                <div className="pt-2 text-[11px] text-[#475569] border-t border-[#D3DBF4]/60">
                  💡 <em>{selectedCategoryModal.keyRemediesNote}</em>
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-4 border-t border-[#D8E1F5] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#64748B]">
                  Online Video & In-Clinic Consultations Available
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCategoryModal(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-[#64748B] hover:text-[#1E2559] transition-colors"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => handleBookForCategory(selectedCategoryModal)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book for this Specialty</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
