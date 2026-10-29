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
  Eye,
  Shield,
  Check,
  Zap,
  Droplet,
} from 'lucide-react';

export const OphthalmicEyeSeoArticleSection: React.FC = () => {
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
      question: 'Can homeopathy cure glaucoma or lower elevated intraocular pressure (IOP)?',
      answer:
        'No. Reliable scientific evidence has not shown that homeopathic remedies can lower intraocular pressure, reverse optic nerve damage, or prevent glaucoma progression. Glaucoma is a progressive optic neuropathy that can lead to irreversible visual field loss and blindness if left untreated. Evidence-based treatment requires prescription pressure-lowering eye drops, laser trabeculoplasty, or surgical filtering procedures directed by a qualified ophthalmologist. Homeopathy should never replace or delay ophthalmologist-directed medical treatment.',
    },
    {
      question: 'What should I do if I develop sudden, severe eye pain accompanied by nausea and a red eye?',
      answer:
        'This combination of symptoms is a hallmark of acute angle-closure glaucoma, an ophthalmic medical emergency. A sudden blockage in the eye’s trabecular drainage angle causes intraocular pressure to spike rapidly to dangerous levels, risking permanent blindness within hours. You must proceed immediately to the nearest hospital emergency eye department for acute medical decompression. Do not take home remedies or delay urgent hospital care.',
    },
    {
      question: 'Why does my conjunctivitis (pink eye) keep recurring repeatedly?',
      answer:
        'Recurrent red, irritated eyes are frequently not a single lingering infection, but can arise from chronic underlying conditions such as allergic conjunctivitis (triggered by dust mites or pollen in Kerala’s climate), chronic blepharitis (meibomian gland dysfunction and eyelid margin inflammation), severe dry eye disease, poor contact lens hygiene, or unsterile self-medication. A comprehensive slit-lamp examination by an eye care professional is needed to pinpoint the exact root cause.',
    },
    {
      question: 'Is it safe to put homeopathic eye drops or diluted solutions directly into my eyes?',
      answer:
        'You should never instill unsterile, non-prescribed liquid preparations, homemade concoctions, or unverified drops into your eyes. The cornea and conjunctiva are extremely delicate tissues; non-sterile drops introduce serious risks of corneal ulcers, severe chemical irritation, and sight-threatening microbial infections. Only use sterile ophthalmic drops prescribed by a licensed eye specialist or manufactured strictly in sterile pharmaceutical conditions.',
    },
    {
      question: 'What is the fundamental difference between ocular hypertension and glaucoma?',
      answer:
        'Ocular hypertension means that fluid pressure inside the eye (intraocular pressure) is consistently higher than the typical statistical threshold (usually above 21 mm Hg), but there is currently no detectable damage to the optic nerve and no peripheral visual field loss. In contrast, glaucoma is diagnosed when characteristic optic nerve fiber layer thinning and corresponding visual field deficits are present, regardless of whether the measured pressure is high or within the statistically normal range (normal-tension glaucoma).',
    },
    {
      question: 'How can a homeopathic consultation support my overall eye health responsibly?',
      answer:
        'At Anjali Homoeo Clinic, supportive care focuses on whole-person constitutional health, exploring lifestyle ergonomics (such as screen fatigue and 20-20-20 rule adoption), allergic tendencies, and emotional well-being. Dr. Anjali Chandrasekhar (BHMS) provides transparent guidance, emphasizes the strict necessity of ophthalmologist appointments and prescription eye-drop adherence, and ensures timely referral for any condition requiring medical or surgical eye care.',
    },
  ];

  return (
    <section
      id="ophthalmic-eye-malappuram-guide"
      aria-labelledby="ophthalmic-eye-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-bold text-[#047857] uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-[#059669]" />
            <span>OPHTHALMIC WELLNESS &amp; VISION CARE · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="ophthalmic-eye-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Ophthalmic &amp; Eye Homeopathic Clinic in Malappuram
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
            Eye health plays an essential role in maintaining independence, comfort, and quality of life. From reading and working to driving and performing everyday activities, healthy vision helps people interact confidently with the world around them. However, recurrent eye redness, irritation, watering, and concerns about elevated eye pressure can cause discomfort and anxiety. Understanding these symptoms and seeking appropriate professional evaluation are important steps towards protecting your vision.
          </p>
          <p>
            The <strong className="text-[#1E2559] font-semibold">Ophthalmic &amp; Eye Homeopathic Clinic in Malappuram</strong> is a dedicated topic for individuals seeking information about recurrent conjunctivitis, pink eye, ocular hypertension, and supportive care alongside conventional ophthalmic treatment. The aim of this page is to help readers understand common eye conditions, recognize warning signs, and make informed decisions about appropriate eye health services.
          </p>
          <p>
            People searching for an <strong className="text-[#1E2559] font-semibold">Eye Consultation in Malappuram</strong> may have different concerns. Some may experience repeated episodes of red or watery eyes, while others may have been informed that their intraocular pressure is elevated or that they are at risk of glaucoma. Since these conditions have different causes and potential complications, a proper eye examination by a qualified ophthalmologist is essential.
          </p>
          <p>
            Homeopathy has not been established by reliable scientific evidence as an effective treatment for conjunctivitis, ocular hypertension, or glaucoma. It should not replace ophthalmologist-directed treatment, prescribed eye drops, or regular monitoring. Appropriate eye care begins with accurate assessment, clear information, and timely medical attention.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#ECFDF5] p-6 sm:p-8 border border-[#A7F3D0] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#065F46] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#059669]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#065F46] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
              Vision &amp; Eye Safety Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span><strong>Recurrent Eye Redness:</strong> Recurrent redness and irritation can have several causes, including infections, allergies, blepharitis, and eyelid disorders.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span><strong>Conjunctivitis Assessment:</strong> Conjunctivitis should be assessed appropriately, especially when symptoms recur, worsen, or do not improve.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span><strong>Ocular Hypertension:</strong> Ocular hypertension means elevated pressure inside the eye and may increase the risk of developing glaucoma.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span><strong>Glaucoma Risks:</strong> Glaucoma can damage the optic nerve and cause permanent vision loss, often without noticeable early warning symptoms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span><strong>Scientific Boundaries:</strong> Homeopathy has not been shown reliably to treat conjunctivitis, lower eye pressure, or prevent glaucoma progression.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <span><strong>Prescription Adherence:</strong> Never stop prescribed eye drops or delay ophthalmologist appointments in favour of an unproven treatment.</span>
            </li>
            <li className="flex items-start gap-2.5 md:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Emergency Warning:</strong> Sudden vision changes, severe eye pain, or a painful red eye with nausea require urgent emergency medical evaluation.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Understanding Common Eye Health Concerns */}
        <div className="space-y-5 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            1. Understanding Common Eye Health Concerns
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Eye symptoms may affect the conjunctiva, cornea, eyelids, tear film, optic nerve, or other structures. Although several eye conditions can produce similar symptoms, their causes and treatments can differ considerably.
            </p>
            <p>
              For example, eye redness may be associated with allergic irritation, a viral or bacterial infection, dry eyes, or a more serious problem inside the eye such as anterior uveitis or acute glaucoma. Elevated eye pressure, meanwhile, may not cause any obvious symptoms initially but can be an important risk factor for permanent optic nerve damage.
            </p>
            <p>
              An <strong className="text-[#1E2559] font-semibold">Eye Health Consultation in Malappuram</strong> may be sought by individuals who want to understand recurring symptoms or learn about appropriate eye health assessment. However, a homeopathic consultation is not a substitute for an ophthalmic examination, particularly when a condition could affect vision.
            </p>
            <p>
              A qualified eye specialist can assess visual acuity, examine the anterior and posterior eye structures under a slit lamp, measure intraocular pressure using applanation tonometry, and evaluate the optic nerve head. Further testing may be recommended according to the patient's symptoms and medical history.
            </p>
            <p>
              Early assessment is particularly important when symptoms are persistent, unexplained, recurrent, or associated with pain or changes in vision.
            </p>
          </div>
        </div>

        {/* Section 2: Recurrent Conjunctivitis and Pink Eye */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            2. Recurrent Conjunctivitis and Pink Eye
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Conjunctivitis is inflammation of the conjunctiva, the thin membrane covering the white part of the eye (sclera) and the inner surface of the eyelids. It is commonly called pink eye because vascular engorgement can make the affected eye appear red or pink.
            </p>
            <p>
              Symptoms may include redness, watering, irritation, a gritty foreign-body sensation, itching, and purulent or watery discharge. One or both eyes may be affected, depending on the cause.
            </p>
            <p>
              Conjunctivitis can be caused by viruses (such as adenoviruses), bacteria, allergens, or chemical irritants. Viral and bacterial forms may be highly contagious, while allergic conjunctivitis is non-contagious and often seasonal or perennial. Because symptoms can overlap closely, the underlying cause cannot always be determined from external appearance alone.
            </p>
            <p>
              People seeking a <strong className="text-[#1E2559] font-semibold">Conjunctivitis Consultation in Malappuram</strong> may be experiencing redness, discharge, or irritation that interferes with work, study, or daily activities. A <strong className="text-[#1E2559] font-semibold">Pink Eye Consultation in Malappuram</strong> may also be relevant for individuals whose symptoms repeatedly return or fail to resolve as expected.
            </p>
            
            <h4 className="font-semibold text-[#1E2559] text-lg pt-2">
              Why Can Eye Infections Recur?
            </h4>
            <p>
              Repeated episodes of red or irritated eyes do not necessarily mean that the exact same infection is returning. Potential explanations include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-sm text-[#1E2559]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Repeated exposure to environmental allergens or humid dust irritants</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Incomplete resolution or premature cessation of earlier medication</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Eyelid margin inflammation (blepharitis) and meibomian dysfunction</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Incorrect self-diagnosis or inappropriate over-the-counter drop usage</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Re-exposure to infectious agents via contaminated linens or cosmetics</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Dry eye disease or ocular surface instability resembling pink eye</span>
              </div>
            </div>
            <p>
              A healthcare professional can help determine whether symptoms are consistent with conjunctivitis or another eye disorder. Recurrent symptoms deserve assessment rather than repeated use of leftover medication or unverified eye preparations.
            </p>
          </div>
        </div>

        {/* Section 3: Responsible Care for Recurrent Conjunctivitis */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            3. Responsible Care for Recurrent Conjunctivitis
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Management depends strictly on the underlying cause. Some viral cases improve with time, cool compresses, and supportive measures, while bacterial infections may require specific topical antibiotic treatment. Allergic conjunctivitis may require allergen avoidance, mast-cell stabilizers, or antihistamine drops recommended by a qualified clinician.
            </p>
            <p>
              Practical precautions can include washing hands regularly, avoiding eye rubbing, not sharing towels or eye cosmetics, and following appropriate contact lens hygiene. Contact lens users should stop wearing their lenses immediately when an eye infection is suspected and seek professional advice to rule out infectious microbial keratitis.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-2 my-3">
              <h4 className="font-bold text-[#B45309] text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D97706]" />
                <span>Critical Safety Warning on Eye Preparations</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
                Homeopathy has not been established as an effective treatment for infectious or allergic conjunctivitis. Homeopathic preparations should never be used in place of appropriate diagnosis or prescribed treatment. <strong>Never put unsterile preparations, non-prescribed tinctures, or home-diluted substances into the eyes</strong>, as these may cause severe chemical injury, corneal ulceration, or permanent vision loss.
              </p>
            </div>
            <p>
              A red eye accompanied by severe pain, marked light sensitivity, blurred or reduced vision, or significant swelling needs prompt medical evaluation. Contact lens wearers with a painful red eye should seek urgent assessment.
            </p>
          </div>
        </div>

        {/* Section 4: Ocular Hypertension and Elevated Eye Pressure */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            4. Ocular Hypertension and Elevated Eye Pressure
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Ocular hypertension refers to pressure inside the eye that is higher than the expected statistical range (typically greater than 21 mm Hg), without evidence of the optic nerve damage or visual field loss characteristic of glaucoma at the time of assessment. The condition is often identified during a routine eye checkup because it usually produces no noticeable symptoms.
            </p>
            <p>
              Intraocular pressure is influenced by the balance between the production and drainage of aqueous humor fluid inside the eye. When the trabecular meshwork drainage pathway slows, pressure may rise. However, an elevated measurement does not automatically mean that a person has glaucoma.
            </p>
            <p>
              An <strong className="text-[#1E2559] font-semibold">Ocular Hypertension Consultation in Malappuram</strong> may be relevant to individuals who have received an elevated eye pressure reading or have been advised to undergo further monitoring.
            </p>
            
            <h4 className="font-semibold text-[#1E2559] text-lg pt-2">
              Why Is Elevated Eye Pressure Important?
            </h4>
            <p>
              Persistently elevated intraocular pressure is the single most important modifiable risk factor for glaucoma, although not everyone with ocular hypertension develops the condition. Individual risk depends on several factors, including the pressure level, optic nerve appearance (cup-to-disc ratio), central corneal thickness, age, family history, and other clinical findings.
            </p>
            <p>
              An ophthalmologist may recommend:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-[#475569]">
              <li>Measuring intraocular pressure at different times of the day (diurnal curve).</li>
              <li>Examining the optic nerve head with dilated ophthalmoscopy or optical coherence tomography (OCT).</li>
              <li>Assessing the peripheral visual field with automated perimetry.</li>
              <li>Measuring central corneal thickness with pachymetry to adjust IOP readings.</li>
              <li>Evaluating the anterior chamber drainage angle with gonioscopy.</li>
              <li>Scheduling regular follow-up examinations according to individual risk stratification.</li>
            </ul>
            <p>
              Depending on the person's risk, the ophthalmologist may recommend regular observation or pressure-lowering drops. Homeopathy has not been shown reliably to lower intraocular pressure or prevent glaucoma. Individuals with ocular hypertension must continue recommended monitoring and follow the advice of their ophthalmologist.
            </p>
          </div>
        </div>

        {/* Section 5: Glaucoma: Understanding the Risks to Vision */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            5. Glaucoma: Understanding the Risks to Vision
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Glaucoma refers to a group of eye conditions that damage the optic nerve, which carries visual information from the retina to the brain. The damage is often associated with elevated intraocular pressure, although glaucoma can also occur when measured pressure is within the usual range (normal-tension glaucoma).
            </p>
            <p>
              One of the greatest challenges with glaucoma is that early stages typically produce no pain and no noticeable symptoms. Peripheral vision loss develops gradually and insidiously, earning it the title of the "silent thief of sight." Optic nerve tissue that has already been damaged cannot generally be restored or regenerated.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5">
                  Primary Open-Angle Glaucoma (POAG)
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The most common form. It progresses slowly over years. The drainage angle remains anatomically open, but trabecular outflow is sluggish. Peripheral vision gradually constricts into "tunnel vision" before central vision is impaired. Regular OCT and visual field checks are the only way to detect progression early.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5">
                  Angle-Closure Glaucoma
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Occurs when the iris bunches up against the cornea, completely blocking the eye's drainage angle. In acute angle closure, eye pressure spikes abruptly, causing severe eye pain, corneal clouding, blurred vision, rainbow-colored halos around lights, headache, nausea, and vomiting. It is an immediate ophthalmic emergency.
                </p>
              </div>
            </div>

            <p>
              A <strong className="text-[#1E2559] font-semibold">Glaucoma Consultation in Malappuram</strong> should involve appropriate ophthalmic assessment or a clear referral to a qualified eye specialist. Treatment options may include prescription prostaglandin analogs, beta-blockers, alpha-agonists, laser trabeculoplasty, or filtration surgery.
            </p>
            <p>
              Patients should use prescribed eye drops consistently as directed and attend all recommended follow-up appointments, even when vision feels completely normal. Homeopathy has not been established as an effective treatment for glaucoma, and must never replace proven medical care.
            </p>
          </div>
        </div>

        {/* Section 6: Supportive Eye Health Guidance and Co-Management */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            6. Supportive Eye Health Guidance and Co-Management
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Individuals living with chronic eye conditions may need ongoing education, reassurance, and practical reminders about the vital importance of regular follow-up and daily eye-drop compliance.
            </p>
            <p>
              The term <em>supportive co-management</em> should be used only when it accurately reflects genuine educational support alongside conventional ophthalmic care. It should never imply that homeopathy can reduce eye pressure, reverse optic nerve cupping, or control glaucoma independently.
            </p>
            <p>
              Supportive care discussions focus on understanding the diagnosis, recognizing urgent warning signs, maintaining medication routines, adopting digital eye-strain hygiene, and attending scheduled ophthalmologist reviews. These supportive steps foster patient engagement with their established treatment plan without substituting for medical ophthalmology.
            </p>
            <p>
              Patients must always inform their ophthalmologist about any complementary remedies or oral supplements they use, and never adjust or discontinue prescribed glaucoma drops without their specialist’s explicit advice.
            </p>
          </div>
        </div>

        {/* Section 7: Choosing an Eye Care Service in Malappuram */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            7. Choosing an Eye Care Service in Malappuram
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              When searching for an <strong className="text-[#1E2559] font-semibold">Eye Care Clinic in Malappuram</strong>, it is important to understand the qualifications of the healthcare professional and the services actually available.
            </p>
            <p>
              For symptoms such as recurrent conjunctivitis, a slit-lamp examination by an eye specialist can identify whether the problem is infectious, allergic, or related to eyelid margins. For ocular hypertension or suspected glaucoma, assessment with specialized tonometry, pachymetry, and optical coherence tomography (OCT) is essential.
            </p>
            <p>
              A responsible healthcare provider communicates honestly about the limits of alternative approaches, avoids promising quick cures for complex eye diseases, and prioritizes timely referral to qualified ophthalmologists whenever sight could be at risk.
            </p>
          </div>
        </div>

        {/* Section 8: Everyday Steps to Support Eye Health */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            8. Everyday Steps to Support Eye Health
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Although daily habits cannot cure underlying genetic or anatomical eye diseases, several practical habits reduce avoidable irritation and protect overall ocular wellness:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-[#059669]" />
                  Maintain Hand Hygiene &amp; Avoid Rubbing
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Wash hands with soap before touching the face or eye area. Avoid vigorous eye rubbing, which can aggravate corneal biomechanics (risk of keratoconus) and transfer bacteria.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#303A88]" />
                  Practise Safe Contact Lens Hygiene
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Adhere strictly to lens cleaning solutions and replacement schedules. Never sleep in lenses unless prescribed, and remove lenses immediately if redness or irritation occurs.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#D97706]" />
                  Avoid Sharing Personal Items
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Do not share towels, pillowcases, eye makeup, or bottles of eye drops. Discard eye cosmetics after 3–6 months to prevent bacterial colonisation.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#2563EB]" />
                  Attend Routine Comprehensive Eye Exams
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Adults over 40, individuals with diabetes, or anyone with a family history of glaucoma should have regular dilated eye exams to check intraocular pressure and the optic disc.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#45AC4B]" />
                  Use Prescribed Drops Consistently
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Administer glaucoma or anti-allergy drops exactly as scheduled. Learn the punctual occlusion technique (pressing the inner corner of the eye for 1 minute) to maximize drop absorption.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#DC2626]" />
                  Never Use Unsterile Eye Preparations
                </h5>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Never put homemade remedies, non-sterile water, rose water of unverified sterility, or self-prepared solutions into the eyes. Only use sterile ophthalmic products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Medical Attention Warning Box */}
        <div className="my-10 rounded-3xl bg-[#FEF2F2] p-6 sm:p-8 border-2 border-[#FCA5A5] space-y-4 shadow-sm">
          <div className="flex items-center gap-3 text-[#991B1B]">
            <ShieldAlert className="w-6 h-6 text-[#DC2626] shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold font-editorial">
              When Should You Seek Urgent Eye Care?
            </h3>
          </div>
          <p className="text-sm text-[#7F1D1D] leading-relaxed">
            Certain ocular symptoms can indicate a sight-threatening emergency requiring immediate emergency eye hospital care:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#991B1B] pt-2">
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Sudden Vision Loss:</strong> Sudden, partial or complete reduction of vision in one or both eyes.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Acute Angle-Closure Signs:</strong> Severe, deep eye pain with intense redness, headache, nausea, or vomiting.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Retinal Warning Signs:</strong> New sudden flashes of light, a shower of floaters, or a dark curtain-like shadow falling across your vision.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Chemical or Physical Trauma:</strong> Chemical splash, penetration injury, or blunt impact to the eyeball—rinse with sterile saline/water and seek immediate care.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Severe Corneal Symptoms:</strong> Intense light sensitivity (photophobia), severe foreign-body sensation, or a visible white spot on the cornea in a contact lens wearer.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Rainbow Halos:</strong> Seeing colored rings or halos around light sources, especially when accompanied by blurred vision and eye aching.</span>
            </div>
          </div>
          <p className="text-xs text-[#7F1D1D] pt-1 italic">
            Do not wait for a routine appointment or try an alternative remedy when these warning signs occur. Prompt evaluation by an ophthalmologist can be essential to protecting your vision.
          </p>
        </div>

        {/* Section 10: Prioritizing Your Long-Term Eye Health */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Prioritizing Your Long-Term Eye Health
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Recurrent conjunctivitis, ocular hypertension, and glaucoma require different approaches to assessment and management. Recognizing symptoms, understanding risk factors, and seeking appropriate professional care can help people make informed decisions about their eye health.
            </p>
            <p>
              The <strong className="text-[#1E2559] font-semibold">Ophthalmic &amp; Eye Homeopathic Clinic in Malappuram</strong> is a relevant website topic for individuals exploring eye health information and consultation options. However, homeopathy should not be presented as a proven treatment for eye infections, elevated intraocular pressure, or glaucoma.
            </p>
            <p>
              For people seeking an <strong className="text-[#1E2559] font-semibold">Eye Health Consultation in Malappuram</strong>, the priority should be an accurate diagnosis, timely referral when necessary, and adherence to evidence-based treatment. If you have been diagnosed with ocular hypertension or glaucoma, continue your ophthalmologist-directed care and attend regular monitoring appointments.
            </p>
            <p>
              Protecting vision requires informed choices and prompt attention to symptoms. When eye problems recur or your vision changes, seek appropriate professional assessment rather than relying on self-treatment.
            </p>
          </div>
        </div>

        {/* Educational Clinic Guide Banner Link */}
        <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#16A34A]" />
              Clinical Guide
            </span>
            <p className="text-sm font-semibold text-[#1E2559]">
              How to Choose a Homeopathic Clinic in Malappuram
            </p>
            <p className="text-xs text-[#475569]">
              Read our comprehensive patient checklist on practitioner credentials, consultation ethics, and evidence-based safety.
            </p>
          </div>
          <a
            href="/homeopathic-clinic-in-malappuram-guide/"
            onClick={(e) => handleNavigateBlog(e, 'homeopathic-clinic-in-malappuram-guide')}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#45AC4B] text-white text-xs font-bold hover:bg-[#3d9842] transition-colors shadow-2xs"
          >
            <span>Read Clinic Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
        <div className="space-y-6 pt-6 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#303A88] mb-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Ophthalmic &amp; Eye Care FAQs
              </h3>
            </div>
            <span className="text-xs text-[#64748B]">Click any question to view clinical guidance</span>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = !!openFaqs[index];
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-[#1E2559] hover:bg-[#F8FAFD] transition-colors text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-[#303A88] p-1 rounded-full bg-[#EEF2FB]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-[#475569] border-t border-[#F1F5F9] bg-[#FCFDFE]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interlinks to Other Treatment Programs */}
        <div className="mt-14 pt-8 border-t border-[#EEF2FB] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#303A88] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#45AC4B]" />
            <span>Explore Other Dedicated Treatment Programs at Anjali Homoeo Clinic</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <a
              href="/homeopathic-treatment-for-womens-health-gynecological-care/"
              onClick={(e) => handleNavigateTreatment(e, 'womens-health-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Women's Health</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/homeopathic-treatment-for-respiratory-ent-allergy-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'respiratory-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Respiratory &amp; ENT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/homeopathic-treatment-for-skin-hair-scalp-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'skin-hair-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Skin &amp; Hair Care</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/homeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'renal-thyroid-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Renal &amp; Thyroid</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/homeopathic-treatment-for-neurological-headache-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'neurological-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Neurological &amp; Headache</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/homeopathic-treatment-for-anorectal-vascular-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'anorectal-vascular-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Anorectal &amp; Vascular</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/homeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'joint-musculoskeletal-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Joint &amp; Musculoskeletal</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/piles-causes-risk-factors-prevention/"
              onClick={(e) => handleNavigateBlog(e, 'piles-causes-risk-factors-prevention')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Piles &amp; Anorectal Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#303A88] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Clinical Contact & Booking CTA Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1E2559] to-[#303A88] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-editorial text-xl sm:text-2xl font-bold">
              Consult Dr. Anjali Chandrasekhar (BHMS)
            </h4>
            <p className="text-xs sm:text-sm text-[#D8E1F5] max-w-xl">
              Confidential, patient-focused supportive consultations for recurrent eye irritation, allergic conjunctivitis, and chronic ocular wellness at Kuttippuram &amp; Puthanathani, Malappuram.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigateToBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#45AC4B] text-white text-xs sm:text-sm font-bold hover:bg-[#3d9842] transition-colors cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
            <a
              href={`https://wa.me/${(settings?.whatsappNumber || '919895101707').replace(/[^0-9]/g, '')}?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20would%20like%20to%20consult%20regarding%20eye%20or%20vision%20health%20concerns`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#45AC4B]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
