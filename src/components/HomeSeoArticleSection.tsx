import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Sparkles,
  CheckCircle2,
  Building2,
  UserCheck,
  Stethoscope,
  HeartHandshake,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  ExternalLink,
  Activity,
  Heart,
  Droplets,
  Wind,
  Layers,
  HelpCircle,
} from 'lucide-react';

export const HomeSeoArticleSection: React.FC = () => {
  const { setCurrentView, openBlogPost, blogPosts, navigateToBooking, settings } = useClinic();
  const [isExpanded, setIsExpanded] = useState(true);

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

  return (
    <section
      id="malappuram-homoeopathic-clinic-guide"
      aria-labelledby="malappuram-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] border border-[#D3DBF4] text-xs font-bold text-[#303A88] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#45AC4B]" />
            <span>PATIENT EDUCATION & REGIONAL HEALTHCARE GUIDE · MALAPPURAM</span>
          </div>

          <h2
            id="malappuram-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic
          </h2>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#64748B] pt-1 border-b border-[#EEF2FB] pb-4">
            <span className="flex items-center gap-1.5 font-medium text-[#1E2559]">
              <UserCheck className="w-4 h-4 text-[#45AC4B]" />
              <span>Medically Reviewed by Dr. Anjali Chandrasekhar (BHMS)</span>
            </span>
            <span className="hidden sm:inline opacity-40">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#303A88]" />
              <span>Kuttippuram & Puthanathani, Malappuram, Kerala</span>
            </span>
            <span className="hidden sm:inline opacity-40">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#45AC4B]" />
              <span>Updated October 2026 · Evidence-Informed Practice</span>
            </span>
          </div>
        </div>

        {/* Lead Introduction */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-[#475569] space-y-4 font-normal">
          <p>
            Finding the right healthcare provider is an important step towards maintaining your health and well-being. If you are searching for a{' '}
            <strong className="text-[#1E2559] font-semibold">Homoeopathic Clinic in Malappuram</strong>, Anjali Homoeo Clinic offers a patient-focused approach to consultations, health assessments, and individualized care. Understanding your symptoms, medical history, lifestyle, and health concerns is an important part of making informed healthcare decisions.
          </p>
          <p>
            Located in Malappuram, Kerala, Anjali Homoeo Clinic aims to provide a welcoming environment where patients can discuss their health concerns and receive appropriate guidance. Whether you are exploring homoeopathy as a complementary healthcare option or seeking advice about a long-standing health concern, a professional consultation can help you understand the available options and determine the next steps.
          </p>
          <p>
            Choosing among the{' '}
            <strong className="text-[#1E2559] font-semibold">Homoeopathic Doctors in Malappuram</strong> involves considering factors such as qualifications, experience, communication, and the quality of patient care. At Anjali Homoeo Clinic, the focus is on understanding each patient's concerns and discussing suitable care options while recognizing the importance of evidence-based medical advice.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#EDF8EE] p-6 sm:p-8 border border-[#C4EAC7] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F8335] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#45AC4B]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#2F8335] font-semibold bg-white/70 px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
              Regional Patient Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
              <span><strong>Personalized consultations:</strong> Discuss your symptoms, health history, and individual concerns with a healthcare professional.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
              <span><strong>Patient-focused care:</strong> Clear communication and a respectful approach help patients make informed healthcare decisions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
              <span><strong>Individual health assessment:</strong> Treatment decisions should consider your medical history, current symptoms, and existing medications.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
              <span><strong>Informed healthcare choices:</strong> Understand the benefits, limitations, and evidence behind any proposed treatment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
              <span><strong>Professional medical guidance:</strong> Persistent, worsening, or severe symptoms require appropriate medical evaluation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
              <span><strong>Convenient local access:</strong> Anjali Homoeo Clinic serves people looking for a Homeopathic Clinic in Malappuram.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: About Anjali Homoeo Clinic in Malappuram */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            About Anjali Homoeo Clinic in Malappuram
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Anjali Homoeo Clinic is a healthcare facility in Malappuram, Kerala, where patients can seek consultations regarding their health concerns and explore appropriate care options. The clinic aims to make healthcare interactions more comfortable by encouraging patients to explain their symptoms, ask questions, and understand the guidance they receive.
            </p>
            <p>
              Every patient has a different medical history, lifestyle, and set of concerns. A consultation should therefore begin with a careful discussion of the patient's symptoms, their duration, previous diagnoses, current medications, and any treatment already received.
            </p>
            <p>
              For individuals searching online for Anjali Homoeopathic Clinic, choosing a healthcare provider should involve more than location alone. Patients should consider the practitioner's professional qualifications, registration where applicable, experience, consultation process, and willingness to explain treatment options and their limitations.
            </p>
            <p>
              The clinic's patient-focused approach supports informed discussions about healthcare needs. Patients should always share complete and accurate medical information so that their care can be considered in the context of their overall health.
            </p>
          </div>
        </div>

        {/* Section 2: Why Choose a Homoeopathic Clinic in Malappuram? */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Why Choose a Homoeopathic Clinic in Malappuram?
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              Malappuram has a diverse community with healthcare needs that vary by age, lifestyle, and medical history. Finding a clinic that is accessible and encourages open communication can make it easier to discuss health concerns and understand available options. When considering a Homoeopathic Clinic in Malappuram, patients may look for the following qualities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors space-y-2">
              <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white flex items-center justify-center text-sm font-bold">1</span>
              <h4 className="text-base font-bold text-[#1E2559] pt-1">Individual Attention</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A healthcare consultation should provide an opportunity to explain symptoms, ask questions, and discuss concerns without feeling rushed. Individual attention also allows the practitioner to understand relevant medical history and identify situations that may require further investigation.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors space-y-2">
              <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white flex items-center justify-center text-sm font-bold">2</span>
              <h4 className="text-base font-bold text-[#1E2559] pt-1">Clear Communication</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Patients need understandable information about their health and the options available to them. A good consultation should explain what is known, what remains uncertain, and when additional tests or a referral to another healthcare professional may be appropriate.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors space-y-2">
              <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white flex items-center justify-center text-sm font-bold">3</span>
              <h4 className="text-base font-bold text-[#1E2559] pt-1">Convenient Location</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Choosing a clinic in Malappuram may make appointments easier for residents of nearby communities. However, accessibility should be considered alongside professional qualifications, appropriate medical assessment, and the suitability of the proposed care.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors space-y-2">
              <span className="w-8 h-8 rounded-lg bg-[#303A88] text-white flex items-center justify-center text-sm font-bold">4</span>
              <h4 className="text-base font-bold text-[#1E2559] pt-1">Respectful Patient Care</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Healthcare decisions are personal. Patients should feel comfortable discussing their symptoms, asking about potential risks, and expressing concerns about treatment. Respectful communication helps people participate more actively in decisions about their health.
              </p>
            </div>

            <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#D8E1F5] hover:border-[#303A88]/40 transition-colors space-y-2 md:col-span-2 lg:col-span-2">
              <span className="w-8 h-8 rounded-lg bg-[#45AC4B] text-white flex items-center justify-center text-sm font-bold">5</span>
              <h4 className="text-base font-bold text-[#1E2559] pt-1">Responsible Healthcare Guidance</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                No healthcare approach should promise guaranteed results or discourage necessary medical treatment. Patients should receive balanced information about treatment options, including the quality of available scientific evidence. These considerations help people evaluate different Homoeopathic Doctors in Malappuram and select a provider who communicates clearly and supports informed decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Understanding Homoeopathy and Its Role in Healthcare */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Understanding Homoeopathy and Its Role in Healthcare
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Homoeopathy is a system of alternative medicine based on historical principles of treatment. It is important, however, to distinguish its traditional principles from established scientific evidence.
            </p>
            <p>
              Scientific evidence has not established that homoeopathic remedies are effective treatments for specific health conditions beyond placebo effects. Some products labelled as homoeopathic may also contain ingredients that could cause side effects or interact with other medicines.
            </p>
            <p>
              Patients considering homoeopathy should understand these limitations before making healthcare decisions. They should not discontinue prescribed medicines, delay diagnosis, or replace evidence-based treatment for serious or chronic illnesses with homoeopathic remedies.
            </p>
            <p>
              A responsible consultation at a Homeopathic Clinic in Malappuram should support transparent discussions about a treatment's evidence, potential risks, and appropriate alternatives. If you are considering homoeopathy, discuss your decision with a qualified healthcare professional who can help you understand the available evidence and the role of conventional medical care in managing your condition.
            </p>
          </div>
        </div>

        {/* Section 4: Health Concerns You Can Discuss During a Consultation (WITH RICH DEEP INTERLINKS) */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF8EE] border border-[#C4EAC7] text-xs font-bold text-[#2F8335] mb-2 uppercase tracking-wider">
              <span>EXPLORE CLINICAL DOMAINS & INTERLINKED CARE</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Health Concerns You Can Discuss During a Consultation
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              Patients may visit healthcare providers to discuss a wide range of symptoms and concerns. The appropriate assessment depends on the nature of the problem, how long it has been present, and whether other symptoms are occurring. At Anjali Homoeo Clinic, patients can enquire about consultations for their individual concerns:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Skin and Hair Concerns */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] hover:border-[#45AC4B]/60 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF8EE] text-[#45AC4B] flex items-center justify-center shrink-0">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2559]">1. Skin and Hair Concerns</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Skin changes, itching, rashes, hair thinning, and scalp irritation can have many causes. These may include allergies, infections, nutritional deficiencies, hormonal changes, or underlying medical conditions. A proper assessment is important before deciding on treatment. Persistent skin problems, sudden hair loss, painful lesions, or signs of infection may require evaluation by a dermatologist or another appropriate medical professional.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2FB]">
                <a
                  href="/homoeopathic-treatment-for-skin-hair-scalp-conditions/"
                  onClick={(e) => handleNavigateTreatment(e, 'skin-hair-care')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] transition-colors"
                >
                  <span>Explore Skin, Hair & Scalp Treatment Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Digestive Health Concerns */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] hover:border-[#45AC4B]/60 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2559]">2. Digestive Health Concerns</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Constipation, bloating, abdominal discomfort, and changes in bowel habits are common reasons people seek healthcare advice. These symptoms can result from dietary habits, medication effects, digestive disorders, or other medical conditions. Blood in the stool, severe abdominal pain, persistent vomiting, or unexplained weight loss requires prompt medical evaluation.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2FB] flex flex-col gap-1.5">
                <a
                  href="/homoeopathic-treatment-for-anorectal-vascular-conditions/"
                  onClick={(e) => handleNavigateTreatment(e, 'anorectal-vascular-care')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] transition-colors"
                >
                  <span>Anorectal & Vascular Care (Piles, Fissures)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/what-causes-piles-risk-factors-prevention/"
                  onClick={(e) => handleNavigateBlog(e, 'what-causes-piles-risk-factors-prevention')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#1E2559] transition-colors"
                >
                  <BookOpen className="w-3 h-3 text-[#45AC4B]" />
                  <span>Clinical Guide: What Causes Piles? Risk Factors & Prevention</span>
                </a>
              </div>
            </div>

            {/* 3. Women's Health Concerns */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] hover:border-[#45AC4B]/60 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] text-[#DB2777] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2559]">3. Women's Health Concerns</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Menstrual irregularities, painful periods, and other reproductive health concerns can affect daily activities and quality of life. Their causes vary and may require a clinical examination, laboratory tests, imaging, or specialist assessment. People experiencing unusual bleeding, severe pelvic pain, or persistent changes in menstrual patterns should seek appropriate medical care.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2FB] flex flex-col gap-1.5">
                <a
                  href="/homoeopathic-treatment-for-womens-health-gynecological-care/"
                  onClick={(e) => handleNavigateTreatment(e, 'womens-health-care')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] transition-colors"
                >
                  <span>Women's Health & Gynecological Treatment Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#64748B]">
                  <a
                    href="/pcod-symptoms-causes-diagnosis-treatment/"
                    onClick={(e) => handleNavigateBlog(e, 'pcod-symptoms-causes-diagnosis-treatment')}
                    className="hover:text-[#1E2559] hover:underline"
                  >
                    • PCOD Guide
                  </a>
                  <a
                    href="/severe-period-pain-when-to-worry/"
                    onClick={(e) => handleNavigateBlog(e, 'severe-period-pain-when-to-worry')}
                    className="hover:text-[#1E2559] hover:underline"
                  >
                    • Severe Period Pain
                  </a>
                  <a
                    href="/uterine-fibroids-symptoms-diagnosis-treatment/"
                    onClick={(e) => handleNavigateBlog(e, 'uterine-fibroids-symptoms-diagnosis-treatment')}
                    className="hover:text-[#1E2559] hover:underline"
                  >
                    • Uterine Fibroids
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Joint and Musculoskeletal Concerns */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] hover:border-[#45AC4B]/60 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2559]">4. Joint & Musculoskeletal Concerns</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Joint discomfort, back pain, stiffness, and muscle aches can develop for several reasons, including injury, inflammation, degenerative changes, and other medical conditions. Persistent or recurring pain should be assessed to determine its cause. Sudden severe pain, significant swelling, fever accompanying joint pain, or an inability to bear weight may require urgent medical attention.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2FB]">
                <a
                  href="/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/"
                  onClick={(e) => handleNavigateTreatment(e, 'joint-musculoskeletal-care')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] transition-colors"
                >
                  <span>Joint & Musculoskeletal Care Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 5. Respiratory and Allergy-Related Symptoms */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D8E1F5] hover:border-[#45AC4B]/60 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between md:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center shrink-0">
                    <Wind className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E2559]">5. Respiratory and Allergy-Related Symptoms</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Sneezing, nasal congestion, coughing, wheezing, and breathlessness may be associated with allergies, asthma, infections, or other respiratory conditions. These symptoms should not automatically be attributed to an allergy or treated without appropriate assessment. Asthma and other respiratory diseases may require established medical treatment and ongoing monitoring. Severe difficulty breathing, blue or grey lips, confusion, or rapidly worsening respiratory symptoms require emergency medical assistance.
                </p>
              </div>
              <div className="pt-3 border-t border-[#EEF2FB] flex flex-wrap items-center justify-between gap-3">
                <a
                  href="/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/"
                  onClick={(e) => handleNavigateTreatment(e, 'respiratory-care')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] transition-colors"
                >
                  <span>Respiratory & ENT Care Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <div className="flex flex-wrap gap-3 text-xs text-[#64748B]">
                  <a
                    href="/chronic-sinusitis-symptoms-causes-treatment/"
                    onClick={(e) => handleNavigateBlog(e, 'chronic-sinusitis-symptoms-causes-treatment')}
                    className="hover:text-[#1E2559] hover:underline"
                  >
                    • Chronic Sinusitis Guide
                  </a>
                  <a
                    href="/asthma-symptoms-early-warning-signs/"
                    onClick={(e) => handleNavigateBlog(e, 'asthma-symptoms-early-warning-signs')}
                    className="hover:text-[#1E2559] hover:underline"
                  >
                    • Asthma Early Signs
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <p className="m-0 leading-relaxed">
              <strong>Important Clinical Distinction:</strong> The examples above describe common health concerns, not conditions that homoeopathy has been proven to treat. A consultation should help patients understand the need for appropriate diagnosis and evidence-based care.
            </p>
          </div>
        </div>

        {/* Section 5: What to Expect During a Consultation */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What to Expect During a Consultation
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              Knowing what happens during a healthcare appointment can help patients feel more prepared. When visiting Anjali Homoeo Clinic, patients can enquire about the consultation process and any information they should bring:
            </p>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                <h4 className="text-sm sm:text-base font-bold text-[#1E2559]">Step 1: Explain Your Main Concern</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] pl-8.5 m-0 leading-relaxed">
                Start by describing your symptoms, when they began, how frequently they occur, and whether anything makes them better or worse. Mention any effect the symptoms have on your sleep, work, studies, or everyday activities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                <h4 className="text-sm sm:text-base font-bold text-[#1E2559]">Step 2: Share Your Medical History</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] pl-8.5 m-0 leading-relaxed">
                Provide information about previous diagnoses, allergies, ongoing medical conditions, past procedures, and any relevant family history. Mention all prescribed medicines, over-the-counter products, and supplements you currently use. This information helps healthcare professionals consider potential risks and determine whether further evaluation is necessary.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                <h4 className="text-sm sm:text-base font-bold text-[#1E2559]">Step 3: Discuss Previous Investigations</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] pl-8.5 m-0 leading-relaxed">
                If you have undergone blood tests, scans, or other medical investigations, bring the available reports. Previous results can help your healthcare provider understand your history and identify questions that need further attention.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                <h4 className="text-sm sm:text-base font-bold text-[#1E2559]">Step 4: Ask About Available Options</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] pl-8.5 m-0 leading-relaxed">
                Ask what may be causing your symptoms, whether additional testing is necessary, and which treatment options are supported by scientific evidence. You can also ask about expected benefits, potential side effects, costs, and when to seek further care.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center shrink-0">5</span>
                <h4 className="text-sm sm:text-base font-bold text-[#1E2559]">Step 5: Understand Follow-Up Recommendations</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] pl-8.5 m-0 leading-relaxed">
                Before leaving, make sure you understand the next steps. These may include monitoring symptoms, arranging investigations, consulting a specialist, or continuing treatment already prescribed by another healthcare professional. Patients should not stop or change prescribed medication without discussing it with the clinician responsible for their care.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: How to Choose the Right Homoeopathic Doctors in Malappuram */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                How to Choose the Right Homoeopathic Doctors in Malappuram
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] mt-1 leading-relaxed">
                Use the following practical checklist to evaluate your healthcare options:
              </p>
            </div>
            <a
              href="/homoeopathic-clinic-in-malappuram-guide/"
              onClick={(e) => handleNavigateBlog(e, 'homoeopathic-clinic-in-malappuram-guide')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] bg-[#EEF2FB] hover:bg-[#D3DBF4] px-4 py-2 rounded-full transition-colors shrink-0"
            >
              <span>Read Full Clinic Guide Article</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#1E2559] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B]"></span>
                <span>Check Professional Qualifications</span>
              </h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Confirm the practitioner's educational qualifications (e.g. BHMS) and professional registration where applicable. Patients should understand the practitioner's training and scope of services.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#1E2559] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B]"></span>
                <span>Clear & Honest Communication</span>
              </h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                A provider should explain options clearly. Be cautious of anyone promising a guaranteed cure, claiming to treat every disease, or discouraging necessary conventional medical advice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#1E2559] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B]"></span>
                <span>Ask About Treatment Safety</span>
              </h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Discuss potential side effects, interactions, and limitations. Share all current medications with your doctor, especially prescriptions for long-term chronic conditions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#1E2559] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B]"></span>
                <span>Consider Overall Healthcare Needs</span>
              </h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                The right provider recognizes when a condition falls outside their scope. Urgent symptoms, specialist referrals, or investigations cannot be replaced by routine consultations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#1E2559] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B]"></span>
                <span>Evaluate Accessibility & Follow-Up</span>
              </h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Consider appointment scheduling, clinic location (Kuttippuram / Puthanathani), and responsive communication for continuity when follow-ups are needed.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <h4 className="font-bold text-[#1E2559] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B]"></span>
                <span>Make an Informed Decision</span>
              </h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Read available information carefully and ask questions before agreeing to any treatment. A qualified provider respects your right to understand benefits, risks, and alternatives.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: The Importance of Early Medical Assessment */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            The Importance of Early Medical Assessment
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              People sometimes delay seeking healthcare because symptoms appear mild or intermittent. However, persistent symptoms can occasionally indicate an underlying condition that needs investigation.
            </p>
            <p>
              Early assessment can help identify possible causes and determine whether treatment, monitoring, or referral is necessary. The urgency depends on the symptom, its severity, and the patient's overall health.
            </p>
          </div>

          <div className="rounded-2xl bg-[#FEF2F2] p-5 sm:p-6 border border-[#FCA5A5] text-xs sm:text-sm text-[#991B1B] space-y-2">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px] text-[#B91C1C]">
              <ShieldAlert className="w-4 h-4 text-[#EF4444]" />
              <span>Emergency Warning Signs & Urgent Medical Care</span>
            </div>
            <p className="leading-relaxed m-0 text-[#7F1D1D]">
              Seek prompt medical attention for unexplained bleeding, persistent fever, severe pain, sudden weakness, new neurological symptoms, or symptoms that continue to worsen. For emergencies such as severe breathing difficulty, chest pain, loss of consciousness, or signs of stroke, contact local emergency services immediately. A visit to a Homoeopathic Clinic in Malappuram should never delay emergency treatment or necessary diagnostic evaluation.
            </p>
          </div>
        </div>

        {/* Section 8: Supporting Your Health Through Everyday Habits */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Supporting Your Health Through Everyday Habits
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] mt-2 leading-relaxed">
              Alongside appropriate medical care, everyday habits can contribute to general health and well-being. The right approach will depend on your age, existing medical conditions, and individual circumstances:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1">
              <span className="text-xs font-bold text-[#303A88] block">1. Balanced Diet</span>
              <p className="text-xs text-[#475569] leading-relaxed m-0">
                Choose a varied diet with vegetables, fruits, whole grains, protein, and adequate fluids.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1">
              <span className="text-xs font-bold text-[#303A88] block">2. Regular Activity</span>
              <p className="text-xs text-[#475569] leading-relaxed m-0">
                Engage in moderate physical activity to support cardiovascular health, mobility, and strength.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1">
              <span className="text-xs font-bold text-[#303A88] block">3. Restful Sleep</span>
              <p className="text-xs text-[#475569] leading-relaxed m-0">
                Maintain consistent sleep routines to support concentration, mood, and daily functioning.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1">
              <span className="text-xs font-bold text-[#303A88] block">4. Manage Stress</span>
              <p className="text-xs text-[#475569] leading-relaxed m-0">
                Use relaxation exercises, enjoyable activities, and social support to manage everyday stress.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-1">
              <span className="text-xs font-bold text-[#45AC4B] block">5. Regular Check-Ups</span>
              <p className="text-xs text-[#475569] leading-relaxed m-0">
                Attend preventive screenings and medical check-ups appropriate to your age and health history.
              </p>
            </div>
          </div>
          <p className="text-xs text-[#64748B] italic">
            Healthy habits complement appropriate healthcare; they do not replace diagnosis or treatment when a medical condition is present.
          </p>
        </div>

        {/* Section 9: Why Consider Anjali Homoeo Clinic? & Making Informed Decisions */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] rounded-3xl p-8 sm:p-10 border border-[#D8E1F5]">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#303A88] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#D3DBF4]">
                MALAPPURAM CONSULTATIONS
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Make Informed Healthcare Decisions in Malappuram
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                When looking for Anjali Homoeopathic Clinic in Malappuram, patients should consider whether the clinic's services meet their needs and whether the consultation process provides clear, responsible guidance. A positive healthcare experience includes respectful communication, careful consideration of medical history, and the opportunity to ask questions.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                When comparing Homoeopathic Doctors in Malappuram, prioritize transparent information and responsible guidance. Understand the scientific evidence behind proposed treatments, continue necessary prescribed medication, and seek appropriate medical assessment whenever symptoms require it. Your health deserves thoughtful decisions, accurate information, and care that puts your well-being first.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#D8E1F5] space-y-4 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#303A88] text-white flex items-center justify-center mx-auto font-editorial font-bold text-lg">
                AC
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E2559]">Dr. Anjali Chandrasekhar</h4>
                <p className="text-xs text-[#64748B]">Senior Homeopathic Physician (BHMS)</p>
                <p className="text-[11px] text-[#45AC4B] font-semibold mt-0.5">Kuttippuram & Puthanathani</p>
              </div>
              <button
                onClick={() => navigateToBooking('clinic')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Clinic Consultation</span>
              </button>
              <button
                onClick={() => navigateToBooking('online')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#EEF2FB] hover:bg-[#D3DBF4] text-[#303A88] text-xs font-semibold transition-colors"
              >
                <span>Book Online Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Directory of All Additional Treatment Pages for Complete SEO Linking */}
        <div className="mt-12 pt-8 border-t border-[#EEF2FB] space-y-3 font-sans">
          <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider block">
            Related Homoeopathic Treatment Pages & Patient Services in Malappuram:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/homoeopathic-treatment-for-womens-health-gynecological-care/"
              onClick={(e) => handleNavigateTreatment(e, 'womens-health-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Women's Health & Gynecological Care
            </a>
            <a
              href="/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'respiratory-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Respiratory, ENT & Allergy Care
            </a>
            <a
              href="/homoeopathic-treatment-for-skin-hair-scalp-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'skin-hair-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Skin, Hair & Scalp Conditions
            </a>
            <a
              href="/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'renal-thyroid-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Renal, Urinary & Thyroid Care
            </a>
            <a
              href="/homoeopathic-treatment-for-neurological-headache-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'neurological-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Neurological & Headache Conditions
            </a>
            <a
              href="/homoeopathic-treatment-for-anorectal-vascular-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'anorectal-vascular-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Anorectal & Vascular Care
            </a>
            <a
              href="/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'joint-musculoskeletal-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Joint & Musculoskeletal Care
            </a>
            <a
              href="/homoeopathic-treatment-for-ophthalmic-eye-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'ophthalmic-eye-care')}
              className="text-xs bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#303A88] border border-[#D8E1F5] px-3 py-1.5 rounded-full transition-colors font-medium"
            >
              Ophthalmic & Eye Conditions
            </a>
            <a
              href="/homoeopathic-clinic-in-malappuram-guide/"
              onClick={(e) => handleNavigateBlog(e, 'homoeopathic-clinic-in-malappuram-guide')}
              className="text-xs bg-[#EDF8EE] hover:bg-[#DCF3DE] text-[#2F8335] border border-[#C4EAC7] px-3 py-1.5 rounded-full transition-colors font-semibold"
            >
              Choosing a Clinic Guide
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
