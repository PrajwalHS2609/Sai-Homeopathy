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
  HeartPulse,
  Droplet,
  Shield,
  Check,
  Zap,
} from 'lucide-react';

export const JointMusculoskeletalSeoArticleSection: React.FC = () => {
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
      question: 'Can homeopathy cure knee osteoarthritis or regenerate eroded cartilage?',
      answer:
        'Reliable scientific evidence has not shown that homeopathic remedies can reverse osteoarthritis, rebuild lost articular cartilage, or alter bone-on-bone joint deformity. In osteoarthritis, the loss of hyaline cartilage is a progressive biomechanical and degenerative process. Homeopathic consultations can provide supportive constitutional care, address general lifestyle comfort, and assist with muscle relaxation, but they must never replace proven evidence-based interventions such as physiotherapy, quadriceps strengthening, weight management, and orthopaedic evaluation.',
    },
    {
      question: 'What should I do if my lower back pain radiates down into my leg (sciatica)?',
      answer:
        'Pain traveling from the lower back through the buttock and down the leg indicates irritation or mechanical compression of the sciatic nerve roots (frequently from a herniated intervertebral disc, degenerative disc disease, or lumbar spinal stenosis). You should arrange a medical evaluation to determine the precise anatomical cause. Remain gently active within comfortable limits, avoid heavy lifting or prolonged sitting, and seek urgent hospital care if leg weakness worsens rapidly or if you experience numbness around the groin or bladder changes.',
    },
    {
      question: 'When does back or neck pain become an emergency medical situation?',
      answer:
        'Seek immediate emergency hospital attention if back or neck pain is accompanied by: (1) loss of bowel or bladder control, or new difficulty urinating; (2) numbness or loss of sensation in the saddle area (inner thighs, perineum, genitals); (3) rapidly progressive weakness in the legs or feet (such as foot drop); (4) high fever with spinal tenderness; or (5) severe pain resulting from major traumatic impact. These red flags can indicate Cauda Equina Syndrome or acute cord compression, requiring urgent neurosurgical or spinal intervention within hours.',
    },
    {
      question: 'What is the fundamental difference between osteoarthritis and rheumatoid arthritis?',
      answer:
        'Osteoarthritis is predominantly a degenerative "wear-and-repair" condition of joint cartilage and underlying bone, typically worsened by weight-bearing movement and eased by rest, with brief morning stiffness (under 30 minutes). In contrast, rheumatoid arthritis is a systemic autoimmune disease where the immune system attacks the synovial joint lining, causing symmetrical joint swelling, warmth, systemic fatigue, and prolonged morning stiffness lasting over an hour. Rheumatoid arthritis requires specialized rheumatologist care and disease-modifying antirheumatic drugs (DMARDs) to prevent permanent joint destruction.',
    },
    {
      question: 'Can I take homeopathic remedies alongside my prescribed arthritis or pain medications?',
      answer:
        'Yes, homeopathic micro-dilutions can generally be taken alongside conventional medications without harmful pharmacological interactions. However, it is vital that you never discontinue, reduce, or substitute prescribed anti-inflammatory drugs, DMARDs, immunosuppressants, or painkillers on your own. Always inform both your prescribing doctor and your homeopathic practitioner about all medications, supplements, and remedies you are taking.',
    },
    {
      question: 'What diagnostic tests or imaging should I bring to a joint and spine consultation in Malappuram?',
      answer:
        'Please bring any available spinal or joint X-rays, MRI scans, CT reports, bone mineral density (DEXA) scans, and recent blood test panels (such as Complete Blood Count, ESR, C-Reactive Protein, Rheumatoid Factor, Anti-CCP, Serum Uric Acid, and Vitamin D levels). Reviewing these existing reports allows Dr. Anjali Chandrasekhar (BHMS) to understand your anatomical diagnosis, establish safe clinical boundaries, and guide supportive constitutional care responsibly.',
    },
  ];

  return (
    <section
      id="joint-musculoskeletal-malappuram-guide"
      aria-labelledby="joint-musculoskeletal-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>RHEUMATOLOGY &amp; ORTHOPAEDIC WELLNESS · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="joint-musculoskeletal-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Joint, Musculoskeletal &amp; Chronic Homeopathic Clinic in Malappuram
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
            Joint pain, stiffness, back discomfort, and neck pain can affect everyday activities, mobility, sleep, and overall quality of life. Whether you experience occasional knee discomfort or have been living with a long-term musculoskeletal condition, understanding the cause of your symptoms is an important first step towards appropriate care.
          </p>
          <p>
            The <strong className="text-[#1E2559] font-semibold">Joint, Musculoskeletal &amp; Chronic Homeopathic Clinic in Malappuram</strong> focuses on providing information and consultation opportunities for individuals experiencing joint discomfort, osteoarthritis, arthritis-related symptoms, cervical spine problems, lumbar spondylosis, and other chronic musculoskeletal concerns. The aim is to help individuals understand their symptoms, recognize when medical assessment is necessary, and make informed decisions about their healthcare.
          </p>
          <p>
            People searching for <strong className="text-[#1E2559] font-semibold">Joint Pain Consultation in Malappuram</strong> may have different concerns. Some experience pain while walking or climbing stairs, while others struggle with morning stiffness, persistent back discomfort, or pain that travels from the lower back into the leg. Identifying the underlying problem is essential because similar symptoms can occur in several different conditions, each requiring an appropriate assessment and management plan.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#EFF6FF] p-6 sm:p-8 border border-[#BFDBFE] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#1E40AF] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
              Orthopaedic &amp; Spine Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span><strong>Medical Evaluation:</strong> Persistent joint, neck, or back pain deserves proper medical evaluation to identify its underlying cause.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span><strong>Knee Osteoarthritis:</strong> Knee osteoarthritis can cause pain, stiffness, and difficulty with everyday movements.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span><strong>Inflammatory Rheumatic Diseases:</strong> Autoimmune and inflammatory rheumatic conditions may require early diagnosis and specialist-directed treatment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span><strong>Cervical &amp; Lumbar Spine:</strong> Spine conditions can cause pain, restricted movement, and, in some cases, nerve-related symptoms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span><strong>Scientific Boundaries:</strong> Homeopathy has not been established by reliable scientific evidence as an effective treatment for osteoarthritis, autoimmune rheumatic diseases, spondylosis, or sciatica.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span><strong>Prescription Adherence:</strong> Do not stop prescribed medicines or delay evidence-based treatment in favour of an unproven therapy.</span>
            </li>
            <li className="flex items-start gap-2.5 md:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Urgent Neurological Warning:</strong> New muscle weakness, loss of bladder or bowel control, or numbness around the groin requires urgent emergency medical attention.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Understanding Joint and Musculoskeletal Conditions */}
        <div className="space-y-5 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            1. Understanding Joint and Musculoskeletal Conditions
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              The musculoskeletal system includes the bones, joints, muscles, ligaments, tendons, and other structures that support the body and enable movement. Problems affecting these structures can lead to pain, stiffness, swelling, weakness, and reduced mobility.
            </p>
            <p>
              Musculoskeletal symptoms can develop gradually because of ageing, joint degeneration, repetitive movements, previous injuries, inflammatory conditions, or changes affecting the spine. In some cases, discomfort may be temporary. In others, persistent symptoms may indicate a condition that requires medical investigation and ongoing care.
            </p>
            <p>
              A <strong className="text-[#1E2559] font-semibold">Joint Pain Consultation in Malappuram</strong> may be sought by individuals experiencing discomfort in the knees, shoulders, hips, hands, or other joints. The appropriate assessment depends on the location of the pain, how long it has been present, whether swelling is present, and whether symptoms interfere with normal activities.
            </p>
            <p>
              A healthcare professional may review your medical history, examine the affected area, and recommend investigations when necessary. Depending on the symptoms, these may include blood tests or imaging studies.
            </p>
            <p>
              Understanding the diagnosis is important before choosing a treatment approach. Pain relief alone may not address the underlying cause, particularly when symptoms are associated with inflammatory arthritis, nerve compression, or other significant medical conditions.
            </p>
          </div>
        </div>

        {/* Section 2: Chronic Joint Pain and Its Impact on Daily Life */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            2. Chronic Joint Pain and Its Impact on Daily Life
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Chronic joint pain is discomfort that persists or repeatedly returns over an extended period. It may affect one joint or several joints and can make ordinary tasks increasingly difficult.
            </p>
            <p>
              People living with chronic joint pain may experience:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-sm text-[#1E2559]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>Stiffness after waking up or sitting for a long time</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>Discomfort while walking, standing, or climbing stairs</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>Reduced flexibility or restricted range of movement</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>Swelling or tenderness around an affected joint</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>Difficulty completing household or work-related tasks</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#303A88] shrink-0" />
                <span>Sleep disturbance caused by nighttime aching and pain</span>
              </div>
            </div>
            <p>
              A <strong className="text-[#1E2559] font-semibold">Chronic Joint Pain Consultation in Malappuram</strong> can help individuals understand why their symptoms persist and whether further investigation is required. Causes may include osteoarthritis, inflammatory arthritis, previous injuries, tendon disorders, or other medical conditions.
            </p>
            <p>
              Persistent symptoms should not automatically be attributed to ageing. Joint pain accompanied by warmth, significant swelling, fever, unexplained weight loss, or prolonged morning stiffness may require prompt assessment.
            </p>
            <p>
              Appropriate management depends on the diagnosis. Depending on the condition, a clinician may recommend physiotherapy, suitable physical activity, weight management, prescribed medication, specialist referral, or other evidence-based interventions.
            </p>
          </div>
        </div>

        {/* Section 3: Knee Osteoarthritis and Knee Pain */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            3. Knee Osteoarthritis and Knee Pain
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Knee osteoarthritis is a common joint condition involving changes in the cartilage and other structures of the knee. It can develop gradually and may affect walking, climbing stairs, standing for extended periods, and getting up from a seated position.
            </p>
            <p>
              Typical symptoms include pain during movement, stiffness after periods of rest, tenderness, swelling, and reduced flexibility. Some individuals also notice a grinding sensation (crepitus) or difficulty fully bending or straightening the knee.
            </p>
            <p>
              People seeking <strong className="text-[#1E2559] font-semibold">Knee Pain Consultation in Malappuram</strong> may be concerned about discomfort that interferes with daily routines. However, knee pain can have several causes, including osteoarthritis, ligament injuries, meniscal problems, inflammatory arthritis, and other conditions. A proper assessment helps distinguish between these possibilities.
            </p>
            <p>
              An <strong className="text-[#1E2559] font-semibold">Osteoarthritis Consultation in Malappuram</strong> may be relevant for individuals who have received an osteoarthritis diagnosis or are experiencing symptoms that require evaluation.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] my-3">
              <h4 className="font-semibold text-[#1E2559] text-base mb-2">
                Evidence-Based Knee Osteoarthritis Management:
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#475569]">
                <li>Tailored quadriceps strengthening, hamstring stretching, and low-impact mobility exercises.</li>
                <li>Physiotherapy and joint-friendly activity modification (such as swimming or stationary cycling).</li>
                <li>Weight management where appropriate to reduce joint load (every kilogram lost reduces multi-fold knee pressure during walking).</li>
                <li>Suitable pain-relief medication recommended by a qualified clinician.</li>
                <li>Supportive devices, such as knee braces or walking aids, when indicated.</li>
                <li>Specialist orthopaedic assessment for persistent or severe functional limitation.</li>
              </ul>
            </div>
            <p>
              Homeopathy has not been shown by reliable scientific evidence to reverse osteoarthritis or reliably relieve its symptoms. Individuals considering homeopathic consultation should understand this limitation and should not use it as a replacement for proven treatment. Appropriate exercise, pain management, and medical follow-up remain important parts of care.
            </p>
          </div>
        </div>

        {/* Section 4: Arthritis and Inflammatory Rheumatic Diseases */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            4. Arthritis and Inflammatory Rheumatic Diseases
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Arthritis is a broad term that describes conditions affecting the joints. Some forms are associated with degenerative changes, while others involve inflammation caused by autoimmune or inflammatory processes.
            </p>
            <p>
              Rheumatoid arthritis is an autoimmune disease in which the immune system mistakenly attacks tissues in the joints. It can cause persistent pain, swelling, warmth, and stiffness, often affecting several joints symmetrically (such as the small joints of both hands, wrists, or feet). Other inflammatory rheumatic diseases may involve the spine (ankylosing spondylitis), skin (psoriatic arthritis), eyes, connective tissues, or internal organs.
            </p>
            <p>
              Symptoms that deserve medical assessment include persistent joint swelling, prolonged morning stiffness lasting greater than 45–60 minutes, pain affecting several joints simultaneously, and difficulty performing everyday activities.
            </p>
            <p>
              An <strong className="text-[#1E2559] font-semibold">Arthritis Consultation in Malappuram</strong> can be a starting point for discussing symptoms and identifying whether further testing or referral is necessary. A diagnosis may involve a physical examination, blood tests (such as ESR, CRP, Rheumatoid Factor, and Anti-CCP), imaging, and assessment by a rheumatology specialist.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-2 my-3">
              <h4 className="font-bold text-[#B45309] text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D97706]" />
                <span>Critical Safety Note on Autoimmune Rheumatic Medications</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
                Autoimmune rheumatic diseases may require disease-modifying antirheumatic drugs (DMARDs) and regular monitoring to control systemic inflammation and reduce the risk of permanent joint destruction or internal organ complications. Early treatment can be particularly vital to preserve joint architecture. Homeopathy has not been established as an effective treatment for autoimmune rheumatic diseases. It should never replace specialist-directed treatment, and prescribed medications must never be discontinued without medical guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Cervical Spondylosis and Neck Pain */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            5. Cervical Spondylosis and Neck Pain
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Cervical spondylosis refers to age-related degenerative changes affecting the bones, discs, and facet joints of the neck. These changes are common, particularly as people grow older, but not everyone with radiographic changes experiences symptoms.
            </p>
            <p>
              When symptoms occur, they may include neck stiffness, discomfort when turning the head, shoulder-area pain, or headaches associated with neck muscle tension (cervicogenic headaches). In some cases, changes in the cervical spine can irritate or compress cervical nerve roots (cervical radiculopathy), causing radiating pain, tingling, numbness, or weakness in an arm or hand.
            </p>
            <p>
              People searching for <strong className="text-[#1E2559] font-semibold">Neck Pain Consultation in Malappuram</strong> may be experiencing discomfort after prolonged desk work, repetitive movements, poor sleep positioning, an injury, or a spinal condition. However, neck pain has multiple possible causes, and symptoms alone cannot confirm cervical spondylosis.
            </p>
            <p>
              Assessment may include reviewing the duration and pattern of pain, checking neck range of motion, and evaluating neurological function. Cervical spine X-rays or MRI scans may be recommended when clinically indicated.
            </p>
            <p>
              Depending on the diagnosis, management may involve guided exercises, physiotherapy, ergonomic adjustments to work habits, suitable pain relief, and medical follow-up. Avoid prolonged immobilization in neck collars or forceful neck manipulation without appropriate professional advice.
            </p>
            <p>
              Seek prompt medical attention if neck pain is accompanied by new limb weakness, difficulty walking, loss of coordination, fever, or a severe sudden headache. Symptoms following a significant motor vehicle accident or high-impact injury also require urgent hospital evaluation.
            </p>
          </div>
        </div>

        {/* Section 6: Lumbar Spondylosis and Lower Back Pain */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            6. Lumbar Spondylosis and Lower Back Pain
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Lumbar spondylosis describes degenerative changes affecting the lower portion of the spine. These changes may involve the intervertebral discs (disc desiccation or height loss), facet joints, and surrounding spinal ligaments.
            </p>
            <p>
              Symptoms can include lower back discomfort, morning stiffness, reduced spinal flexibility, and difficulty standing or moving comfortably. Some people experience symptoms intermittently after physical exertion, while others have persistent pain that affects work, sleep, or physical activity.
            </p>
            <p>
              A <strong className="text-[#1E2559] font-semibold">Back Pain Consultation in Malappuram</strong> may help individuals determine whether their discomfort is associated with lumbar spondylosis or another cause, such as a muscular strain, intervertebral disc herniation, spinal stenosis, vertebral fracture, or an inflammatory condition.
            </p>
            <p>
              A healthcare professional will assess when the pain began, whether it radiates into the buttocks or legs, what activities aggravate or relieve it, and whether sensory numbness or motor weakness is present.
            </p>
            <p>
              Management varies according to the cause and severity of symptoms. It may include remaining gently active, a tailored core and back exercise programme, physiotherapy, appropriate medication, and specialist evaluation when needed.
            </p>
            <p>
              Although degenerative changes are common on spinal imaging, they do not always explain a person's pain. Treatment decisions should therefore consider the individual's symptoms, physical examination findings, and overall health rather than imaging results alone.
            </p>
          </div>
        </div>

        {/* Section 7: Sciatica and Nerve-Related Pain */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            7. Sciatica and Nerve-Related Pain
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Sciatica describes pain associated with irritation or compression of the sciatic nerve or its lumbar nerve roots (L4, L5, S1). It commonly causes a sharp, burning, or shooting pain that travels from the lower back or buttock down the back or side of one leg, sometimes reaching the calf or foot. Some individuals also experience tingling (pins and needles), numbness, or motor weakness.
            </p>
            <p>
              Possible causes include a herniated lumbar intervertebral disc, degenerative lumbar spinal canal stenosis, spondylolisthesis, or piriformis muscle syndrome. Sciatica is a clinical symptom pattern rather than a standalone diagnosis in itself, so identifying its anatomical origin is essential.
            </p>
            <p>
              Medical evaluation is particularly important when pain is severe, persistent, worsening, or accompanied by neurological deficits. Treatment depends on the underlying cause and may involve guided rehabilitation exercises, physiotherapy, neuropathic or analgesic medication, or orthopaedic/neurosurgical review.
            </p>
            <p>
              Homeopathy has not been established as an effective treatment for sciatica or the underlying mechanical causes of nerve root compression. It should never delay diagnostic imaging or appropriate neuro-orthopaedic treatment.
            </p>
          </div>
        </div>

        {/* Section 8: The Role of Consultation and Individualized Care */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            8. The Role of Consultation and Individualized Care
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              People with musculoskeletal symptoms often have different needs, even when their symptoms appear similar. The most suitable care depends on the underlying diagnosis, symptom severity, medical history, mobility, age, and other health conditions.
            </p>
            <p>
              A consultation should help clarify the symptoms, identify warning signs, and determine whether further investigations or referral are needed. Where appropriate, a care plan may involve evidence-based pain management, physical rehabilitation, lifestyle adjustments, and follow-up with a relevant specialist.
            </p>
            <p>
              Individuals considering a homeopathic consultation should receive clear information about the limits of the evidence. There is no reliable scientific evidence that homeopathy cures osteoarthritis, autoimmune rheumatic diseases, cervical or lumbar spondylosis, or sciatica. Any consultation should complement—not replace or delay—necessary medical assessment and proven treatment.
            </p>
            <p>
              For those seeking a <strong className="text-[#1E2559] font-semibold">Joint Pain Consultation in Malappuram</strong>, clear communication about symptom duration, previous diagnoses, current medication, and changes in mobility can help healthcare professionals assess the situation more effectively.
            </p>
          </div>
        </div>

        {/* Section 9: Everyday Measures That May Support Joint and Spine Health */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            9. Everyday Measures That May Support Joint and Spine Health
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Depending on the diagnosis and individual abilities, several measures may support mobility and general musculoskeletal health:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#45AC4B]" />
                  Stay Appropriately Active
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Gentle movement and individualized exercises can help maintain joint lubricating fluid, muscle strength, and flexibility. A physiotherapist or clinician can recommend activities suited to your condition.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#303A88]" />
                  Avoid Prolonged Inactivity
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Changing position regularly may help reduce stiffness associated with extended sitting or desk work. Increase activity gradually and follow professional advice if movement aggravates your symptoms.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#E11D48]" />
                  Maintain a Suitable Body Weight
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  For individuals with knee or hip osteoarthritis, weight management reduces joint mechanical stress and forms an essential component of a broader management plan.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D97706]" />
                  Use Safe Lifting Techniques
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Keep loads close to the body, bend your knees rather than rounding your back, avoid sudden twisting while lifting heavy objects, and seek assistance with unmanageable loads.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                  Pay Attention to Persistent Symptoms
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Repeated swelling, increasing pain, unexplained motor weakness, or a noticeable reduction in mobility should not be ignored or endured without medical review.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#2563EB]" />
                  Follow Prescribed Treatment
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Take medicines as directed and attend recommended follow-up appointments. Do not discontinue prescribed medication or substitute an unproven therapy without consulting the clinician responsible for your care.
                </p>
              </div>
            </div>
            <p>
              These measures do not replace diagnosis or treatment, but they contribute to a practical, individualized approach to maintaining physical function and well-being.
            </p>
          </div>
        </div>

        {/* Emergency Medical Attention Warning Box */}
        <div className="my-10 rounded-3xl bg-[#FEF2F2] p-6 sm:p-8 border-2 border-[#FCA5A5] space-y-4 shadow-sm">
          <div className="flex items-center gap-3 text-[#991B1B]">
            <ShieldAlert className="w-6 h-6 text-[#DC2626] shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold font-editorial">
              When Should You Seek Immediate Medical Attention?
            </h3>
          </div>
          <p className="text-sm text-[#7F1D1D] leading-relaxed">
            Not all joint or spine symptoms require emergency treatment, but certain red-flag warning signs must never be overlooked:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#991B1B] pt-2">
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Cauda Equina Syndrome:</strong> Loss of bladder or bowel control, or new difficulty passing urine accompanied by lower back or leg pain.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Saddle Anesthesia:</strong> Numbness, tingling, or loss of sensation around the groin, genitals, buttocks, or inner thighs.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Progressive Motor Weakness:</strong> Rapidly worsening weakness in one or both legs, such as foot drop, leg buckling, or tripping while walking.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Suspected Septic Arthritis:</strong> A hot, acutely swollen, exquisitely painful joint accompanied by fever, chills, and malaise.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Traumatic Spine Injury:</strong> Severe, sharp back or neck pain following a major accident, fall from height, or direct impact.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Cervical Myelopathy Signs:</strong> Difficulty walking, loss of fine hand coordination (dropping cups, buttoning difficulty), or unexplained stumbling.</span>
            </div>
          </div>
          <p className="text-xs text-[#7F1D1D] pt-1 italic">
            Arrange timely medical assessment for persistent or worsening joint pain, unexplained swelling, prolonged morning stiffness, recurrent back pain, or pain accompanied by numbness or tingling. Early assessment can help identify conditions that need specific treatment and reduce the risk of permanent joint or nerve complications.
          </p>
        </div>

        {/* Section 11: Your Joint and Musculoskeletal Health Matters */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Your Joint and Musculoskeletal Health Matters
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Joint pain, osteoarthritis, inflammatory rheumatic diseases, neck discomfort, and lower back problems can affect many aspects of daily life. Understanding the cause of symptoms is an important step towards choosing appropriate care and maintaining mobility.
            </p>
            <p>
              The <strong className="text-[#1E2559] font-semibold">Joint, Musculoskeletal &amp; Chronic Homeopathic Clinic in Malappuram</strong> provides a focused context for people seeking information about chronic joint and musculoskeletal concerns. If you are considering a consultation, make sure you understand the available evidence, the purpose of the proposed approach, and when conventional medical assessment or specialist treatment is needed.
            </p>
            <p>
              Whether you are experiencing knee discomfort, persistent joint stiffness, cervical spine symptoms, or lower back pain, prioritize a clear diagnosis and a responsible care plan. For individuals seeking <strong className="text-[#1E2559] font-semibold">Chronic Joint Pain Consultation in Malappuram</strong>, informed decisions, appropriate medical follow-up, and evidence-based management are essential to protecting long-term health and function.
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
              Read our comprehensive patient checklist on practitioner qualifications, consultation ethics, and healthcare safety.
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

        {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
        <div className="space-y-6 pt-6 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#303A88] mb-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Joint &amp; Musculoskeletal Care FAQs
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
              href="/homeopathic-treatment-for-ophthalmic-eye-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'ophthalmic-eye-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Eye &amp; Vision Care</span>
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
              Professional, patient-focused consultations for joint discomfort, knee osteoarthritis, cervical spine, lumbar back pain, and chronic musculoskeletal concerns at Kuttippuram &amp; Puthanathani, Malappuram.
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
              href={`https://wa.me/${(settings?.whatsappNumber || '919895101707').replace(/[^0-9]/g, '')}?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20would%20like%20to%20consult%20regarding%20joint%20or%20musculoskeletal%20concerns`}
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
