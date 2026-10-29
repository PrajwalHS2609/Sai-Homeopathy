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

export const AnorectalVascularSeoArticleSection: React.FC = () => {
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
      question: 'Why is it dangerous to assume that all rectal bleeding is caused by piles (hemorrhoids)?',
      answer:
        'While hemorrhoids are a frequent cause of bright red rectal bleeding, assuming that every episode of rectal bleeding is benign piles can delay the diagnosis of serious colorectal pathology. Conditions such as anal fissures, inflammatory bowel disease (Crohn’s disease or ulcerative colitis), diverticular bleeding, polyps, and colorectal cancer can present with identical or overlapping bleeding symptoms. Any rectal bleeding—especially if accompanied by altered bowel habits, unexplained weight loss, fatigue, persistent mucus, or in individuals over 40—requires a formal clinical examination (such as digital rectal exam, anoscopy, or colonoscopy) by a qualified physician.',
    },
    {
      question: 'Can homeopathy cure a complex perianal fistula without surgical evaluation?',
      answer:
        'A perianal fistula (fistula-in-ano) is a chronic epithelialized abnormal tract that connects the anal canal to the perianal skin. While homeopathic supportive care can assist in symptom relief, wound healing support, and managing constitutional factors, reliable scientific evidence has not shown that homeopathic remedies can eliminate complex epithelialized fistula tracts or replace surgical evaluation. Because complex fistulas carry risks of branching, recurrent abscesses, and sphincter damage, patients should be evaluated with appropriate imaging (such as MRI fistulogram) and reviewed by a colorectal or general surgeon.',
    },
    {
      question: 'What is the fundamental difference between an anal fissure and hemorrhoids?',
      answer:
        'An anal fissure is a sharp, painful tear or split in the mucous lining (anoderm) of the lower anal canal, characterized by intense cutting or burning pain during bowel movements that often lingers for hours afterward, typically with streaks of bright red blood on the stool or toilet paper. In contrast, uncomplicated internal hemorrhoids are swollen vascular cushions located above the dentate line; they are typically painless and cause blood dripping into the toilet bowl without severe acute pain. Painful external hemorrhoids usually occur when a blood clot develops within them (thrombosed external hemorrhoid).',
    },
    {
      question: 'How can I relieve excruciating pain during and after bowel movements caused by an anal fissure?',
      answer:
        'Immediate supportive care focuses on breaking the vicious cycle of anal sphincter muscle spasm. Warm water sitz baths (soaking the perianal area in warm water for 15 minutes twice daily and immediately after defecation) help relax hypertonic internal sphincter muscles and improve local microcirculation. Increasing dietary soluble fiber and water intake prevents hard, bulky stools that re-tear the healing fissure. Avoiding straining, avoiding dry or rough toilet paper (using gentle warm water rinses instead), and clinical evaluation for prescription topical agents or constitutional remedies under medical supervision are advised.',
    },
    {
      question: 'Can varicose veins in the legs lead to serious or life-threatening blood clots?',
      answer:
        'Varicose veins occur in the superficial venous system of the legs due to incompetent venous valves and venous reflux. They can cause superficial thrombophlebitis (painful, hard, inflamed cords in superficial veins). More importantly, chronic severe venous stasis increases the risk of Deep Vein Thrombosis (DVT), a condition where blood clots form in the deep veins of the calf or thigh. DVT can dislodge and travel to the lungs, causing a life-threatening pulmonary embolism (PE). Any sudden, unilateral calf swelling, redness, deep calf tenderness, or sudden shortness of breath requires immediate emergency hospital care.',
    },
    {
      question: 'What should I bring and expect during an anorectal or vascular consultation in Malappuram?',
      answer:
        'For your consultation at Anjali Homoeo Clinic, bring any previous diagnostic reports including proctoscopy, colonoscopy, biopsy records, pelvic scans, or lower-limb venous Doppler ultrasound reports, along with a list of all current medications (including blood thinners and laxatives). The doctor will conduct a sensitive, confidential, and comprehensive review of your symptoms, bowel patterns, standing/sitting habits, dietary history, and overall well-being to formulate an individualized, supportive care plan and coordinate specialist referrals whenever indicated.',
    },
  ];

  return (
    <section
      id="anorectal-vascular-malappuram-guide"
      aria-labelledby="anorectal-vascular-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F2] border border-[#FECDD3] text-xs font-bold text-[#BE123C] uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>PROCTOLOGY &amp; VASCULAR CARE · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="anorectal-vascular-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Anorectal &amp; Vascular Homeopathic Clinic in Malappuram
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
            Anorectal and vascular health are important aspects of overall well-being. Conditions such as hemorrhoids (piles), painful anal fissures, perianal fistulas, and lower-extremity varicose veins can cause discomfort, interfere with everyday activities, and affect quality of life. Recognizing symptoms early and obtaining an appropriate medical assessment can help individuals understand their condition and make informed decisions about care.
          </p>
          <p>
            The <strong className="text-[#1E2559] font-semibold">Anorectal &amp; Vascular Homeopathic Clinic in Malappuram</strong> provides a setting for discussing concerns related to anorectal discomfort and visible or symptomatic leg veins. People searching for an <strong className="text-[#1E2559] font-semibold">Anorectal Consultation in Malappuram</strong> may be experiencing rectal bleeding, pain during bowel movements, swelling around the anus, or persistent discharge. Others seeking a <strong className="text-[#1E2559] font-semibold">Vascular Consultation in Malappuram</strong> may have concerns about prominent leg veins, leg heaviness, ankle swelling, or discomfort after prolonged standing.
          </p>
          <p>
            Although these conditions affect distinct anatomical regions, they often share underlying physiological risk factors, such as increased venous congestion, elevated intra-abdominal pressure, chronic straining, sedentary habits, occupational standing, and pelvic circulatory impairment. Early clinical evaluation ensures accurate differentiation between benign functional conditions and deeper pathologies requiring surgical or vascular intervention.
          </p>
          <p>
            It is essential to distinguish between supportive homeopathic consultations and necessary medical or surgical interventions. Advanced hemorrhoidal prolapse, acute perianal abscesses, complex branched fistulas, and deep vein thrombosis require prompt conventional clinical, radiologic, and surgical management. Homeopathy offers supportive and individualized care alongside evidence-based medical diagnostics.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#FFF1F2] p-6 sm:p-8 border border-[#FECDD3] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9F1239] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E11D48]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#9F1239] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#FECDD3]">
              Proctology &amp; Venous Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
              <span><strong>Hemorrhoids (Piles):</strong> Swollen anorectal vascular cushions cause rectal bleeding, itching, and swelling. Clinical grading determines whether supportive homeopathy, dietary adjustments, or surgical evaluation is appropriate.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
              <span><strong>Anal Fissures:</strong> Tears in the anal lining cause sharp, burning pain during defecation accompanied by internal sphincter spasm. Early management prevents progression into chronic ischemic fissures.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
              <span><strong>Perianal Fistulas:</strong> Abnormal epithelialized tracts from infected anal crypt glands cause intermittent discharge and swelling, requiring careful imaging to avoid recurrent abscesses and sphincter compromise.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
              <span><strong>Lower-Extremity Varicose Veins:</strong> Venous valve failure leads to blood pooling, superficial vein dilation, leg heaviness, and skin changes. Duplex ultrasound rules out deep vein thrombosis (DVT).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
              <span><strong>Patient-Centred Consultation:</strong> Medical history, bowel transit patterns, occupational standing/sitting, and diagnostic investigations guide personalized healthcare decisions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
              <span><strong>Evidence-Based &amp; Referral Minded:</strong> Homeopathy provides complementary symptom relief and lifestyle guidance; urgent red flags require immediate emergency or surgical care.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Hemorrhoids (Piles) */}
        <div className="space-y-5 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            1. Hemorrhoids (Piles): Types, Symptoms &amp; Clinical Management
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Hemorrhoids, commonly referred to as piles, are vascular cushions located in the submucosa of the anal canal. Under normal circumstances, they act as physiological seals assisting with anal continence. However, chronic excessive pressure, prolonged straining during bowel movements, chronic constipation or recurrent diarrhea, pregnancy, and a sedentary lifestyle can lead to engorgement, stretching of supporting connective tissue, and symptomatic hemorrhoidal disease.
            </p>
            <p>
              Clinically, hemorrhoids are categorized according to their anatomical location relative to the dentate (pectinate) line:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#303A88]"></span>
                  Internal Hemorrhoids
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Located above the dentate line and covered by insensitive visceral mucosa. They typically present with painless, bright red bleeding during defecation (often dripping or splashing into the toilet bowl) and mucus discharge. They are graded from Grade I (no prolapse) to Grade IV (permanently prolapsed and irreducible).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h4 className="font-semibold text-[#1E2559] text-base mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]"></span>
                  External Hemorrhoids
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Located below the dentate line and covered by sensitive squamous epithelium (anoderm) rich in somatic pain receptors. External piles cause swelling, itching, perianal irritation, and difficulties maintaining hygiene. When a blood clot forms within them, they produce an exquisitely painful, firm bluish lump (thrombosed external hemorrhoid).
                </p>
              </div>
            </div>

            {/* In-depth educational blog link callout */}
            <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] my-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#166534] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#16A34A]" />
                  Educational Resource
                </span>
                <p className="text-sm font-semibold text-[#1E2559]">
                  Want to learn more about preventing hemorrhoid flare-ups and diet modifications?
                </p>
                <p className="text-xs text-[#475569]">
                  Read our in-depth clinical guide on causes, stages, and daily prevention tips.
                </p>
              </div>
              <a
                href="/piles-causes-risk-factors-prevention/"
                onClick={(e) => handleNavigateBlog(e, 'piles-causes-risk-factors-prevention')}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#45AC4B] text-white text-xs font-bold hover:bg-[#3d9842] transition-colors shadow-2xs"
              >
                <span>Read Piles Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p>
              Conservative management and supportive homeopathic consultations focus on reducing venous congestion, improving portal circulation, and restoring natural, effortless bowel evacuations. However, when hemorrhoids progress to severe irreducible prolapse (Grade IV), strangulation, gangrenous tissue changes, or cause chronic blood loss with systemic iron-deficiency anemia, surgical and proctological interventions (such as rubber band ligation, laser hemorrhoidoplasty, or hemorrhoidectomy) are essential.
            </p>
          </div>
        </div>

        {/* Section 2: Anal Fissures */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            2. Anal Fissures: Severe Defecation Pain, Sphincter Spasm &amp; Healing
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              An anal fissure is a longitudinal tear or ulceration in the sensitive lining of the anal canal (the anoderm), most commonly located in the posterior midline (90% of cases). The hallmark symptom of an anal fissure is sharp, intense, knife-like or burning pain during defecation, which frequently persists for several hours after bowel evacuation, causing severe emotional distress and fear of passing stool.
            </p>
            <p>
              The primary mechanism perpetuating an anal fissure is the <strong className="text-[#1E2559] font-semibold">vicious cycle of sphincter spasm and ischemia</strong>:
            </p>
            <div className="bg-[#F8FAFD] border border-[#D8E1F5] rounded-2xl p-5 my-3">
              <ol className="space-y-3 text-sm text-[#334155]">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E2559] text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <span><strong>Initial Trauma:</strong> Passage of hard, dry, compacted stool or severe explosive diarrhea causes a mechanical tear in the delicate anoderm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E2559] text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <span><strong>Sphincter Hypertonicity:</strong> Severe pain triggers an involuntary reflex spasm (hypertonia) of the internal anal sphincter muscle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E2559] text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <span><strong>Microvascular Ischemia:</strong> The elevated sphincter resting pressure compresses the small inferior rectal blood vessels passing through the muscle, cutting off microvascular blood supply to the posterior midline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E2559] text-white font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                  <span><strong>Chronic Non-Healing &amp; Fear:</strong> Without adequate perfusion, the wound fails to heal. Patients instinctively delay defecation to avoid agonizing pain, leading to harder stools that re-tear the ulcer on the next bowel movement.</span>
                </li>
              </ol>
            </div>
            <p>
              Fissures that persist beyond six weeks often develop chronic anatomical features, including an external skin tag (sentinel pile), a hypertrophied anal papilla at the proximal end, and visible horizontal fibers of the internal anal sphincter at the base of the ulcer. 
            </p>
            <p>
              Supportive measures include warm sitz baths to relax sphincter muscle hypertonicity, dietary modification with abundant soluble fiber and water, and individualized constitutional homeopathy. Furthermore, fissures located in atypical positions (lateral or multiple) warrant thorough medical investigation to rule out inflammatory bowel disease (Crohn’s disease), sexually transmitted infections, or neoplasia.
            </p>
          </div>
        </div>

        {/* Section 3: Perianal Fistulas */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            3. Perianal Fistulas (Fistula-in-ano) &amp; Perianal Abscess
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              A perianal fistula (fistula-in-ano) is an abnormal epithelialized hollow tract that connects an internal opening within the anal canal (typically at the level of the dentate line) to an external opening on the perianal skin. Most fistulas originate from the <strong className="text-[#1E2559] font-semibold">cryptoglandular hypothesis</strong>: the blockage and subsequent infection of one of the small anal crypt glands, leading to an acute abscess.
            </p>
            <p>
              When a perianal abscess spontaneously bursts or is surgically drained without addressing the infected internal source gland, a persistent communicating tract is left behind. Common symptoms of a fistula include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#475569]">
              <li>Intermittent or continuous purulent, foul-smelling, or blood-stained drainage onto underclothing.</li>
              <li>Recurrent perianal throbbing pain and localized swelling that temporarily relieves after a discharge of pus.</li>
              <li>Perianal skin irritation, itching (pruritus ani), and excoriation due to chronic moisture.</li>
              <li>Palpable firm cord-like induration extending from the perianal skin toward the anal verge.</li>
            </ul>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-2 my-3">
              <h4 className="font-bold text-[#B45309] text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D97706]" />
                <span>Importance of Surgical Evaluation &amp; MRI Fistulogram</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
                Perianal fistulas vary widely in complexity. While simple intersphincteric fistulas involve minimal sphincter muscle, complex transsphincteric, suprasphincteric, or horseshoe fistulas traverse significant portions of the internal and external anal sphincters. Injudicious procedures or untreated tracts risk permanent fecal incontinence or recurring severe abscesses. Pelvic MRI (MRI fistulogram) or endoanal ultrasound provides essential anatomical mapping to guide safe colorectal management.
              </p>
            </div>

            <p>
              Homeopathic consultations can provide supportive adjunctive care focused on constitutional health, reduction of chronic perianal inflammation, and post-procedural comfort. However, homeopathy must never replace surgical diagnosis or urgent drainage when an acute locked abscess is present.
            </p>
          </div>
        </div>

        {/* Section 4: Lower-Extremity Varicose Veins */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            4. Lower-Extremity Varicose Veins &amp; Chronic Venous Insufficiency
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Varicose veins are dilated, elongated, and tortuous superficial veins (most commonly the great and small saphenous veins and their tributaries) in the lower limbs. Under healthy physiological conditions, one-way bicuspid venous valves direct venous blood against gravity upward toward the heart, aided by the rhythmic contraction of calf muscles (the "peripheral venous heart").
            </p>
            <p>
              When these venous valves become incompetent—due to hereditary weakness of the vein wall, prolonged standing occupations (such as shopkeepers, teachers, and healthcare staff in Malappuram), obesity, multiple pregnancies, or prior deep vein thrombosis—blood flows backward (venous reflux) and pools in the superficial venous system under high gravitational hydrostatic pressure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-sm mb-1">Early Symptoms</h5>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Aching, heavy, or tired legs towards evening; dull burning sensations, nocturnal muscle cramps, restless legs, and mild ankle swelling that improves after night-time leg elevation.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-sm mb-1">Skin &amp; Tissue Changes</h5>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Chronic venous hypertension causes red blood cells to extravasate into dermal tissues, causing brown hemosiderin staining, stasis eczema (pruritic, scaling patches), and indurated lipodermatosclerosis around the lower calf and gaiter area.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <h5 className="font-semibold text-[#1E2559] text-sm mb-1">Advanced Complications</h5>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Development of chronic venous stasis ulcers (painful, slow-healing wounds over the medial malleolus), spontaneous superficial thrombophlebitis, or sudden bleeding from a thinned overlying vein (varicorrhagia).
                </p>
              </div>
            </div>

            <p>
              A lower-limb venous duplex ultrasound scan is the gold standard diagnostic tool to map incompetent saphenofemoral or saphenopopliteal junctions and assess the patency of deep veins. Supportive non-surgical management includes graduated compression stockings, calf muscle pump activation exercises, avoiding prolonged stationary standing, and constitutional homeopathic care for vascular tone and systemic comfort.
            </p>
          </div>
        </div>

        {/* Section 5: Patient-Centred Consultation */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            5. Patient-Centred Consultation at Anjali Homoeo Clinic
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              At Anjali Homoeo Clinic in Kuttippuram and Puthanathani, Malappuram, consultations for anorectal and vascular concerns are conducted with the utmost confidentiality, compassion, and clinical sensitivity. Because symptoms in the perineum or visible leg disfigurement often cause embarrassment, patients frequently delay seeking help until symptoms become debilitating.
            </p>
            <p>
              Dr. Anjali Chandrasekhar (BHMS) approaches each case by examining the patient as a whole individual, taking time to understand:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-sm text-[#1E2559]">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span>Bowel frequency, consistency, and straining history</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span>Exact characteristics of bleeding or purulent drainage</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span>Occupational factors (prolonged sitting or standing)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span>Prior medical, obstetric, and surgical interventions</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span>Dietary fiber balance and daily fluid hydration patterns</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5]">
                <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                <span>Review of previous colonoscopy or Doppler reports</span>
              </div>
            </div>
            <p>
              The consultation clarifies whether your condition can be managed safely with supportive homeopathic constitutional care, lifestyle adaptation, and conservative measures, or whether formal referral for surgical intervention or further endoscopic investigation is medically indicated.
            </p>
          </div>
        </div>

        {/* Section 6: Everyday Well-Being & Supportive Self-Care */}
        <div className="space-y-5 pt-8 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            6. Everyday Well-Being, Dietary Habits &amp; Supportive Self-Care
          </h3>
          <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#475569] space-y-4">
            <p>
              Conservative supportive self-care forms the foundational cornerstone for both anorectal comfort and lower-extremity venous health:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                <h4 className="font-semibold text-[#1E2559] text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#45AC4B]" />
                  Bowel Hygiene &amp; Posture
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Never resist the urge to defecate. Avoid spending more than 3 to 5 minutes on the toilet—especially avoid using mobile phones or reading, which encourages prolonged pelvic venous engorgement. Using a small footstool to elevate the knees mimics a natural squatting posture, straightening the anorectal angle and allowing smooth evacuation without straining.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                <h4 className="font-semibold text-[#1E2559] text-base flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-[#303A88]" />
                  Fiber &amp; Hydration Balance
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Gradually increase dietary fiber to 25–35 grams daily with whole grains, oats, leafy green vegetables, lentils, and flaxseeds to create soft, bulky, formed stools. Accompany fiber intake with 2.5 to 3 liters of water daily; inadequate fluid intake with high fiber can paradoxically worsen constipation and fecal impaction.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
                <h4 className="font-semibold text-[#1E2559] text-base flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#E11D48]" />
                  Venous Circulation Habits
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  For individuals with standing or sedentary jobs, take regular 2-minute walking intervals every hour or perform seated calf raises to engage the calf muscle pump. Elevate legs above heart level for 15 minutes each evening. When recommended by a clinician, wear graduated compression stockings during active daytime hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgent Medical Attention Warning Box */}
        <div className="my-10 rounded-3xl bg-[#FEF2F2] p-6 sm:p-8 border-2 border-[#FCA5A5] space-y-4 shadow-sm">
          <div className="flex items-center gap-3 text-[#991B1B]">
            <ShieldAlert className="w-6 h-6 text-[#DC2626] shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold font-editorial">
              When to Seek Urgent or Emergency Medical Attention
            </h3>
          </div>
          <p className="text-sm text-[#7F1D1D] leading-relaxed">
            Homeopathy provides supportive consultation. Certain anorectal and vascular symptoms represent serious medical emergencies requiring immediate hospital emergency department evaluation or urgent surgical intervention:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#991B1B] pt-2">
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Massive or Continuous Bleeding:</strong> Heavy rectal hemorrhage, passing blood clots, black tarry stools (melena), or bleeding accompanied by dizziness, faintness, or pale cold skin.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Suspected Perianal Abscess:</strong> Severe, unrelenting, throbbing perianal pain accompanied by high fever, chills, spreading redness, or difficulty urinating.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Suspected Deep Vein Thrombosis (DVT):</strong> Sudden, painful swelling of one calf or entire leg, with redness, warmth, and deep muscular tenderness.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Signs of Pulmonary Embolism (PE):</strong> Sudden shortness of breath, unexplained rapid breathing, sharp chest pain worse on breathing in, or coughing up blood—call emergency services immediately.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Severe Thrombosed Hemorrhoid:</strong> Acutely strangulated, gangrenous, or exquisitely painful purple perianal mass that cannot be reduced.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/70 p-3 rounded-xl border border-[#FECACA]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span><strong>Active Bleeding from Varicose Vein:</strong> Ruptured superficial vein requires immediate direct pressure, elevation of the limb, and urgent emergency assessment.</span>
            </div>
          </div>
        </div>

        {/* Section 7: Frequently Asked Questions (FAQ Accordion) */}
        <div className="space-y-6 pt-6 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#303A88] mb-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Anorectal &amp; Vascular Care FAQs
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
              href="/homeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'joint-musculoskeletal-care')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Joint &amp; Musculoskeletal</span>
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
              href="/homeopathic-clinic-in-malappuram-guide/"
              onClick={(e) => handleNavigateBlog(e, 'homeopathic-clinic-in-malappuram-guide')}
              className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88] hover:bg-[#EEF2FB] transition-colors text-xs font-semibold text-[#1E2559] flex items-center justify-between group"
            >
              <span>Malappuram Clinic Guide</span>
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
              Confidential, professional consultations for piles, anal fissures, perianal concerns, and varicose veins at Kuttippuram &amp; Puthanathani, Malappuram.
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
              href={`https://wa.me/${(settings?.whatsappNumber || '919895101707').replace(/[^0-9]/g, '')}?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20would%20like%20to%20consult%20regarding%20anorectal%20or%20vascular%20concerns`}
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
