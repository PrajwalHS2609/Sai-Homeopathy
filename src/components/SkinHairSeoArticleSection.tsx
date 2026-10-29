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
  Sun,
  Shield,
  HeartPulse,
  Wind,
  Scissors,
  Check,
} from 'lucide-react';

export const SkinHairSeoArticleSection: React.FC = () => {
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
      question: 'When should I consult a doctor for recurring skin problems in Malappuram?',
      answer:
        'You should seek medical evaluation if skin symptoms such as intense itching, spreading redness, scaling patches, painful cystic acne, or unexplained pigmentation persist for several weeks or recur repeatedly. Any rapidly changing, bleeding, or unusual mole requires immediate dermatological assessment.',
    },
    {
      question: 'Can homeopathy cure chronic eczema or psoriasis?',
      answer:
        'Reliable scientific evidence has not established homeopathy as a curative treatment for eczema or psoriasis. These chronic inflammatory conditions require evidence-based management, skin barrier restoration, and medical supervision to prevent flare-ups, skin infections, and complications such as psoriatic arthritis.',
    },
    {
      question: 'What is the difference between ordinary hair shedding and alopecia areata?',
      answer:
        'Ordinary hair shedding (telogen effluvium) typically involves diffuse, uniform thinning across the scalp often triggered by stress, illness, or nutritional deficits. In contrast, alopecia areata is an autoimmune condition causing distinct, smooth, circular or oval bald patches that require clinical evaluation by a healthcare professional.',
    },
    {
      question: 'How should severe cystic acne be treated to prevent permanent scarring?',
      answer:
        'Severe or cystic acne involves deep follicular inflammation that risks permanent pitted scars and post-inflammatory hyperpigmentation. Evidence-based care with topical retinoids, benzoyl peroxide, or oral medications prescribed by a qualified clinician should be initiated early, while avoiding picking or squeezing lesions.',
    },
    {
      question: 'What triggers chronic urticaria (hives) and when is it an emergency?',
      answer:
        'Chronic urticaria produces itchy welts that persist or recur over more than six weeks, often linked to autoimmune factors, viral infections, or physical triggers. It requires immediate emergency medical attention if accompanied by lip, tongue, or facial swelling (angioedema), difficulty breathing, or dizziness.',
    },
    {
      question: 'Why is early antiviral treatment essential for shingles (herpes zoster)?',
      answer:
        'Shingles causes a painful blistering rash following a nerve pathway. Prompt medical assessment within 72 hours allows prescription of antiviral therapy that limits rash severity and substantially reduces the risk of long-term debilitating nerve pain known as postherpetic neuralgia.',
    },
  ];

  return (
    <section
      id="skin-hair-malappuram-guide"
      aria-labelledby="skin-hair-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-bold text-[#065F46] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#059669]" />
            <span>DERMATOLOGY, TRICHOLOGY &amp; SCALP CARE · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="skin-hair-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Skin &amp; Hair Homeopathic Clinic in Malappuram
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
            Healthy skin and hair contribute to comfort, confidence, and overall well-being. However, recurring skin irritation, persistent itching, acne, pigmentation, hair thinning, patchy hair loss, and scalp problems can affect people of different ages. These concerns may develop gradually or appear suddenly, and they can sometimes interfere with daily activities, sleep, work, and self-confidence.
          </p>
          <p>
            Understanding the possible causes of skin and hair changes is an important first step towards choosing appropriate care. If you are looking for a <strong className="text-[#1E2559] font-semibold">Skin &amp; Hair Homeopathic Clinic in Malappuram</strong>, consider a healthcare provider who listens carefully to your concerns, explains available options, and recognises when examination or specialist referral is necessary.
          </p>
          <p>
            Skin and hair conditions can have different causes, including inflammation, infections, allergies, hormonal changes, genetics, environmental factors, and underlying medical conditions. An accurate assessment helps determine which treatment options may be appropriate.
          </p>
          <p>
            A homeopathic consultation may provide an opportunity to discuss your symptoms and health history. However, reliable scientific evidence has not established homeopathy as an effective treatment for skin or hair disorders. It should not replace proven medical care, particularly for severe, persistent, or potentially serious conditions.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#F0FDF4] p-6 sm:p-8 border border-[#BBF7D0] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#166534] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#16A34A]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#166534] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
              Dermatology &amp; Trichology Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Skin and hair concerns can have several causes, so an accurate assessment is important.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Eczema, psoriasis, acne, pigmentation, hair loss, urticaria, warts, and dandruff may require different approaches to diagnosis and management.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>A <strong>Homeopathic Skin Clinic in Malappuram</strong> should communicate clearly about the limitations of homeopathy and the importance of appropriate medical care.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Persistent or sudden hair loss may require evaluation by a qualified healthcare professional.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Severe acne should be treated appropriately to reduce the risk of permanent scarring.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>New, changing, painful, or unusual skin lesions should be medically assessed.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>A <strong>Skin Disease Consultation in Malappuram</strong> should help patients understand their symptoms and when further examination or specialist care may be necessary.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Avoid stopping prescribed medication or delaying proven treatment in favour of unproven remedies.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Understanding Common Skin and Hair Problems */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Understanding Common Skin and Hair Problems
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Skin and hair concerns can affect people at different stages of life. Some conditions are temporary, while others may continue for months or recur over time.
            </p>
            <p>
              Common skin concerns include eczema, psoriasis, acne, melasma, urticaria, warts, and persistent itching. Hair and scalp concerns may include excessive hair shedding, patchy hair loss, dandruff, scalp irritation, and changes in hair texture.
            </p>
            <p>
              Although some symptoms appear similar, their causes can differ considerably. For example, an itchy rash may be related to eczema, contact dermatitis, an infection, or another skin condition. Likewise, hair loss may be associated with genetics, nutritional deficiencies, hormonal changes, autoimmune conditions, medication effects, or scalp disorders.
            </p>
            <p>
              People seeking a <strong className="text-[#1E2559] font-semibold">Homeopathic Doctor for Skin Problems in Malappuram</strong> should consider the importance of identifying the underlying condition rather than relying on symptoms alone. A healthcare professional may examine the affected area, review medical history, ask about symptom duration, and recommend tests or referrals when appropriate.
            </p>
          </div>
        </div>

        {/* Section 2: Homeopathic Skin Clinic in Malappuram for Recurring Skin Concerns */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Skin Clinic in Malappuram for Recurring Skin Concerns
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Skin problems can affect comfort and everyday life, particularly when symptoms recur or remain unexplained. Redness, dryness, itching, scaling, swelling, and changes in skin colour may indicate different underlying conditions. If you are searching for a <strong className="text-[#1E2559] font-semibold">Homeopathic Skin Clinic in Malappuram</strong>, it is helpful to understand the range of skin concerns that may require professional assessment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Eczema */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#059669]" />
                <span>Eczema and Persistent Skin Irritation</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Eczema is a group of inflammatory skin conditions that can cause dryness, itching, redness, and irritated patches. Symptoms may fluctuate and can be aggravated by certain soaps, fragrances, environmental conditions, or other triggers.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Persistent itching can disturb sleep and may lead to scratching, skin damage, or secondary infection. Appropriate management depends on the type and severity of eczema. Evidence-based options may include moisturisers, trigger avoidance, prescribed topical treatments, and other therapies recommended by a healthcare professional.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homeopathy has not been established as an effective treatment for eczema. Patients with persistent symptoms should seek appropriate medical advice, especially when the skin becomes painful, warm, swollen, or infected.
              </p>
            </div>

            {/* Psoriasis */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#303A88]" />
                <span>Psoriasis and Scaly Skin Patches</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Psoriasis is a chronic inflammatory condition that may produce raised, red patches covered with scales. It commonly affects areas such as the elbows, knees, scalp, and lower back, although other areas can also be involved.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Symptoms can vary, and some people experience itching, cracking, or discomfort. Psoriasis may also affect the nails and, in some cases, be associated with joint inflammation (psoriatic arthritis).
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A healthcare professional can help distinguish psoriasis from other skin conditions and recommend appropriate treatment. Depending on severity, management may involve topical medicines, phototherapy, or systemic treatments.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homeopathy has not been shown reliably to control psoriasis. People with suspected psoriasis should seek an accurate diagnosis and discuss evidence-based treatment options.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Skin Disease Consultation in Malappuram for Pigmentation and Melasma */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Skin Disease Consultation in Malappuram for Pigmentation and Melasma
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Changes in skin colour can develop for several reasons, including sun exposure, hormonal influences, inflammation, certain medications, and other medical conditions. Melasma commonly appears as brown or grey-brown patches, particularly on the face. It may affect the cheeks, forehead, nose, or upper lip and can be more noticeable following sun exposure.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            People considering a <strong className="text-[#1E2559] font-semibold">Skin Disease Consultation in Malappuram</strong> for facial pigmentation should understand that different pigmentation disorders may look similar but require different approaches.
          </p>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
            <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#D97706]" />
              <span>Understanding Melasma, Dark Spots &amp; Useful Sun-Protection Practices</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Melasma is a common pigmentation condition that may be associated with hormonal factors and ultraviolet or visible light exposure. It can be persistent and may recur even after improvement. A healthcare professional can assess the pigmentation and discuss suitable treatment options, including sun protection, topical treatments, or specialist care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#475569] pt-1">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Applying broad-spectrum sunscreen as directed.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Wearing a wide-brimmed hat when outdoors.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Seeking shade during periods of strong sunlight.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Avoiding unverified skin-lightening products.</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <Check className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Following professional advice before using active skincare ingredients.</span>
              </div>
            </div>
            <p className="text-xs text-[#991B1B] pt-2 leading-relaxed">
              <strong>Clinical alert:</strong> Homeopathy has not been established as an effective treatment for melasma or other pigmentation disorders. If a dark spot changes rapidly, bleeds, becomes painful, or has an unusual asymmetrical appearance, seek medical assessment rather than assuming it is ordinary pigmentation.
            </p>
          </div>
        </div>

        {/* Section 4: Homeopathic Doctor for Skin Problems in Malappuram: Acne and Cystic Acne */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Doctor for Skin Problems in Malappuram: Acne and Cystic Acne
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Acne is a common skin condition that develops when hair follicles become blocked and inflamed. It may produce blackheads, whiteheads, pimples, deeper nodules, or painful cyst-like lesions. Acne can affect the face, chest, shoulders, and back. In more severe cases, it may cause permanent scars and changes in skin pigmentation.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A <strong className="text-[#1E2559] font-semibold">Homeopathic Doctor for Skin Problems in Malappuram</strong> may be one of the practitioners people consider when looking for advice about recurring skin complaints. However, it is important to understand that homeopathy has not been shown reliably to treat acne.
          </p>

          <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
            <h4 className="text-base font-bold text-[#1E2559]">Why Appropriate Acne Care Matters</h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The most suitable treatment depends on acne severity, skin type, age, medical history, and other factors. Evidence-based options may include topical retinoids, benzoyl peroxide, other prescribed topical medicines, or oral medication when appropriate.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              People with deep, painful, recurring acne should seek medical advice early because effective treatment can help reduce the risk of scarring.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed">
              <strong>Patient guidance:</strong> Avoid squeezing or picking acne lesions, as this can worsen inflammation and increase the chance of permanent scarring. Use gentle skincare products and seek professional advice before combining multiple active ingredients.
            </div>
          </div>
        </div>

        {/* Section 5: Homeopathic Hair Clinic in Malappuram for Hair and Scalp Concerns */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Hair Clinic in Malappuram for Hair and Scalp Concerns
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hair loss and scalp irritation can have several possible causes. Some people experience gradual thinning, while others notice sudden shedding or distinct patches of missing hair. If you are searching for a <strong className="text-[#1E2559] font-semibold">Homeopathic Hair Clinic in Malappuram</strong>, it is important to consider whether the hair changes require medical examination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#059669]" />
                <span>Common Hair and Scalp Concerns</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Excessive hair shedding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Gradual hair thinning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Patchy hair loss</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Scalp itching and irritation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Persistent dandruff</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Hair breakage and split ends</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  <span>Changes in scalp condition</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] pt-1">
                Hair loss can be associated with hereditary factors, stress, recent illness, nutritional deficiencies, thyroid disorders, hormonal changes, medication effects, or autoimmune conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Alopecia Areata and Patchy Hair Loss</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Alopecia areata is an autoimmune condition that can cause smooth, round or oval patches of hair loss. It may affect the scalp, eyebrows, beard, or other areas of the body. Hair regrowth patterns vary, and some people experience repeated episodes.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Sudden patchy hair loss should not automatically be attributed to stress or nutritional problems. Early assessment by a dermatologist can help establish the diagnosis and rule out other causes, including fungal scalp infections (tinea capitis).
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homeopathy has not been established as an effective treatment for hair loss. Avoid relying on unproven remedies when hair loss is sudden, extensive, painful, or associated with scalp inflammation.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Homeopathic Doctor for Hair Problems in Malappuram: Understanding Dandruff */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Doctor for Hair Problems in Malappuram: Understanding Dandruff
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Dandruff is a common scalp condition associated with flaking and sometimes itching. More persistent scalp symptoms may be related to seborrhoeic dermatitis, psoriasis, eczema, contact dermatitis, or other conditions.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            People looking for a <strong className="text-[#1E2559] font-semibold">Homeopathic Doctor for Hair Problems in Malappuram</strong> may want to discuss persistent dandruff, scalp discomfort, or hair shedding.
          </p>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
            <h4 className="text-base font-bold text-[#1E2559]">Managing Persistent Dandruff &amp; Scalp Health</h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Depending on the cause, evidence-based management may include medicated anti-dandruff shampoos containing ingredients such as ketoconazole, selenium sulphide, zinc pyrithione, or other recommended agents.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For best results, follow the product instructions or advice from a healthcare professional. Avoid scratching the scalp aggressively, and be cautious with harsh chemical styling products or unverified home concoctions.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed">
              <strong>When to seek medical evaluation:</strong> If the scalp becomes very red, painful, swollen, develops oozing sores, or shows areas of hair loss, seek medical evaluation. Persistent flaking may require a clinical diagnosis rather than routine dandruff care alone.
            </div>
          </div>
        </div>

        {/* Section 7: Skin Allergy Consultation in Malappuram for Itching, Rashes and Urticaria */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Skin Allergy Consultation in Malappuram for Itching, Rashes and Urticaria
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Allergic and inflammatory skin conditions can cause itching, redness, swelling, or raised patches. Identifying the trigger may help guide appropriate care, although not every rash is caused by an allergy. A <strong className="text-[#1E2559] font-semibold">Skin Allergy Consultation in Malappuram</strong> may be relevant for people experiencing recurring hives, contact reactions, or unexplained skin irritation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Understanding Chronic Urticaria</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Urticaria, commonly called hives, produces raised, itchy welts that may appear and disappear over hours. Chronic urticaria refers to hives that recur over a period longer than six weeks.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                The cause is not always identifiable. Some episodes may be associated with infections, medications, physical triggers, or other factors, while many cases have no clear external trigger. Antihistamines are commonly used for urticaria, with additional treatment considered when symptoms are not adequately controlled.
              </p>
              <p className="text-xs text-[#64748B] italic">
                Homeopathy has not been established as an effective treatment for chronic urticaria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-3">
              <h4 className="text-base font-bold text-[#991B1B] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
                <span>Emergency Warning: Anaphylaxis &amp; Angioedema</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                If hives occur alongside swelling of the tongue, lips, face, or throat, difficulty breathing, wheezing, dizziness, or collapse, seek emergency medical assistance immediately.
              </p>
              <p className="text-xs text-[#7F1D1D] leading-relaxed">
                These symptoms indicate angioedema or anaphylaxis, which are medical emergencies requiring immediate conventional emergency intervention (such as epinephrine).
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Warts and Other Persistent Skin Growths */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Warts and Other Persistent Skin Growths
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3">
            <p>
              Warts are usually caused by certain types of human papillomavirus (HPV) and can appear on the hands, feet, or other areas of the skin. Some disappear naturally, while others persist, multiply, or spread to adjacent skin.
            </p>
            <p>
              Persistent growths should be assessed when their diagnosis is uncertain, they become painful, bleed, change in appearance, or occur in sensitive areas. Evidence-based treatments may include salicylic acid, cryotherapy, or other options recommended by a healthcare professional. Treatment choice depends on the location, size, and type of lesion.
            </p>
            <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed font-medium">
              Homeopathy has not been shown reliably to eliminate warts. Avoid cutting, burning, or applying harsh chemicals to skin growths without appropriate medical guidance, as this risks scarring and severe infection.
            </p>
          </div>
        </div>

        {/* Section 9: Shingles and Persistent Nerve Pain */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Shingles and Persistent Nerve Pain
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3">
            <p>
              Shingles is caused by reactivation of the varicella-zoster virus (the same virus responsible for chickenpox). It often produces a painful rash with fluid-filled blisters, typically affecting one side of the body or face along a specific dermatome.
            </p>
            <p>
              Prompt medical assessment is crucial because prescription antiviral medication is most effective when started early (within 72 hours of rash onset). Shingles affecting the eye or face requires urgent ophthalmological evaluation to prevent vision damage.
            </p>
            <p>
              Some people experience persistent burning or shooting nerve pain long after the rash has healed. This is known as postherpetic neuralgia and requires specific pain-management treatment. Homeopathy has not been established as an effective treatment for shingles or postherpetic neuralgia. Do not delay medical care while trying unproven remedies.
            </p>
          </div>
        </div>

        {/* Section 10: What to Expect During a Skin or Hair Consultation */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            What to Expect During a Skin or Hair Consultation
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Whether you are considering a <strong className="text-[#1E2559] font-semibold">Homeopathic Skin Clinic in Malappuram</strong> or a <strong className="text-[#1E2559] font-semibold">Homeopathic Hair Clinic in Malappuram</strong>, a useful consultation should provide an opportunity to explain your concerns and understand the next steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Symptom History</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Describe when the problem began, how frequently it occurs, and whether it has changed over time.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Previous Treatment</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Share details of medicines, skincare products, shampoos, or other topical treatments you have used.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Possible Triggers</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Discuss changes associated with weather, sunlight, cosmetics, food, medication, stress, or workplace exposure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Medical Assessment</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Seek appropriate examination or referral to establish the biological cause of unexplained symptoms.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Treatment Discussion</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Ask about the evidence supporting the proposed approach, possible risks, expected outcomes, and fees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Follow-up Planning</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Understand which symptoms require further investigation and when to seek urgent specialist medical care.
              </p>
            </div>
          </div>
        </div>

        {/* Section 11: Choosing a Skin Specialist in Malappuram */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Choosing a Skin Specialist in Malappuram
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] mt-1 leading-relaxed">
                When searching for a <strong className="text-[#1E2559] font-semibold">Skin Specialist in Malappuram</strong>, consider the practitioner's qualifications, experience, and ability to assess skin and hair concerns appropriately:
              </p>
            </div>
            <a
              href="/homeopathic-clinic-in-malappuram-guide/"
              onClick={(e) => handleNavigateBlog(e, 'homeopathic-clinic-in-malappuram-guide')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] bg-[#EEF2FB] hover:bg-[#D3DBF4] px-4 py-2 rounded-full transition-colors shrink-0"
            >
              <span>Guide to Choosing a Clinic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Recognised Qualifications</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Check whether the practitioner has verified medical council registration and recognized credentials.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Accurate Assessment</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Choose a provider who recognises that similar symptoms can have vastly different clinical causes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Transparent Advice</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Ask for clear information about available treatments, limitations, potential risks, and fees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Appropriate Referrals</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Persistent, severe, or unusual symptoms may require assessment by a dermatologist or another specialist.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Responsible Treatment</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Avoid providers who promise guaranteed cures or advise stopping necessary prescribed medication.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Follow-up Support</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Understand how symptoms will be reviewed and when additional medical care may be needed.
              </p>
            </div>
          </div>
        </div>

        {/* Section 12: Frequently Asked Questions (Accordion) */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#059669] shrink-0">
              <HelpCircle className="w-5 h-5 text-[#059669]" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] m-0">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#64748B] m-0 mt-0.5">
                Clinical answers regarding skin, hair loss, eczema, acne, and scalp consultations in Malappuram.
              </p>
            </div>
          </div>

          <div className="space-y-3 font-sans">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs[idx] ?? false;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1E2559] hover:bg-[#F8FAFD] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#303A88] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#45AC4B]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#64748B]" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] pt-3 bg-[#F8FAFD]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 13: Interlinks to Other Treatment Categories */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Explore Related Clinical Care Programs
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Anjali Homoeo Clinic offers personalized consultations across multiple specialized healthcare areas:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
            <a
              href="/homeopathic-treatment-for-womens-health-gynecological-care/"
              onClick={(e) => handleNavigateTreatment(e, 'womens-health-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FDF2F8] text-[#DB2777] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Women's Health &amp; Gynecological Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  PCOD/PCOS, menstrual irregularities, fibroids &amp; menopause
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homeopathic-treatment-for-respiratory-ent-allergy-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'respiratory-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Wind className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Respiratory, ENT &amp; Allergy Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Sinusitis, dust allergies, asthma support, cough &amp; tonsils
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homeopathic-treatment-for-renal-calculi-thyroid-dysfunction/"
              onClick={(e) => handleNavigateTreatment(e, 'renal-thyroid-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Renal Calculi &amp; Thyroid Dysfunction
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Kidney stones, recurrent calculi, hypothyroidism &amp; nodules
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homeopathic-treatment-for-anorectal-vascular-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'anorectal-vascular-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Anorectal &amp; Vascular Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Piles, hemorrhoids, fissures, fistula &amp; varicose veins
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homeopathic-treatment-for-joint-musculoskeletal-disorders/"
              onClick={(e) => handleNavigateTreatment(e, 'joint-musculoskeletal-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Joint &amp; Musculoskeletal Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Arthritis, cervical spondylosis, sciatica &amp; lumbar pain
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>

            <a
              href="/homeopathic-treatment-for-neurological-lifestyle-disorders/"
              onClick={(e) => handleNavigateTreatment(e, 'neurological-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Wind className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Neurological &amp; Lifestyle Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Migraine, tension headaches, anxiety &amp; sleep issues
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </a>
          </div>
        </div>

        {/* Section 14: Conclusion & Booking CTA */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E2559] via-[#303A88] to-[#1E2559] text-white p-8 sm:p-10 space-y-4 shadow-xl border-2 border-[#45AC4B]/40 font-sans">
            <span className="text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
              PRIORITIZING SKIN &amp; HAIR HEALTH IN MALAPPURAM
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Conclusion: Prioritizing Evidence-Based Skin &amp; Hair Health
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Skin and hair concerns can affect physical comfort, confidence, and everyday life. Conditions such as eczema, psoriasis, melasma, acne, urticaria, alopecia areata, warts, and persistent dandruff may have different causes and require different approaches to assessment and management.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              If you are searching for a Homeopathic Skin Clinic in Malappuram, a Homeopathic Hair Clinic in Malappuram, or a Homeopathic Doctor for Skin Problems in Malappuram, prioritise clear communication, accurate health information, and appropriate medical referral. A Hair Loss Consultation in Malappuram can be an opportunity to discuss changes in hair growth and understand why further assessment may be necessary. Similarly, a Skin Allergy Consultation in Malappuram can help address recurring symptoms and identify whether additional investigation is appropriate.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Choosing a Homeopathic Doctor for Hair Problems in Malappuram or another healthcare provider should involve understanding the practitioner's qualifications and the evidence supporting any proposed treatment. A responsible approach to skin and hair health focuses on identifying the underlying condition, considering proven treatment options, and seeking specialist care when necessary. Homeopathy should not replace evidence-based treatment for skin and hair disorders, and patients should not delay appropriate medical assessment for persistent or concerning symptoms.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#45AC4B] text-white text-xs font-semibold hover:bg-[#39933E] transition-colors shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Consultation with Dr. Anjali</span>
              </button>
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Hello Dr. Anjali, I would like to enquire about skin and hair consultations in Malappuram."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
