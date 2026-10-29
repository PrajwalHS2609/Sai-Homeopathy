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
  Wind,
  Droplet,
  Shield,
  Check,
} from 'lucide-react';

export const RenalThyroidSeoArticleSection: React.FC = () => {
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
      question: 'When does a kidney stone or urinary calculus require emergency hospital care?',
      answer:
        'Seek immediate emergency medical care if flank or abdominal pain is accompanied by high fever, shaking chills, persistent vomiting, complete inability to pass urine (anuria), or if you have a single functioning kidney. An obstructing stone combined with a urinary tract infection is a urological emergency (sepsis risk).',
    },
    {
      question: 'Can homeopathic remedies dissolve kidney stones or gallbladder stones?',
      answer:
        'Reliable scientific evidence has not demonstrated that homeopathic remedies can dissolve kidney stones or gallstones or eliminate urinary obstruction. Clinical management depends on stone dimensions, composition, and location, often requiring urological evaluation or surgical assessment.',
    },
    {
      question: 'Can thyroid hormone medication (Levothyroxine) be replaced with homeopathy?',
      answer:
        'No. In primary hypothyroidism and advanced Hashimoto’s thyroiditis, the thyroid gland lacks the biological capacity to synthesize sufficient thyroxine (T4). Discontinuing or replacing prescribed levothyroxine with unproven remedies can lead to worsening fatigue, cardiovascular strain, severe metabolic slowing, and myxoedema coma.',
    },
    {
      question: 'What are the classic warning signs of acute gallbladder complications?',
      answer:
        'Seek urgent medical attention if gallstone pain (biliary colic) does not subside within a few hours, or is accompanied by jaundice (yellowing of the skin or eyes), fever, chills, dark tea-colored urine, or pale clay-colored stools. These signs indicate acute cholecystitis, cholangitis, or common bile duct obstruction.',
    },
    {
      question: 'What tests are necessary for a comprehensive thyroid consultation in Malappuram?',
      answer:
        'A thorough thyroid evaluation typically involves serum Thyroid Stimulating Hormone (TSH), Free T4, and Free T3. When autoimmune thyroiditis or structural enlargement (goiter/nodules) is suspected, thyroid peroxidase antibodies (anti-TPO), thyroglobulin antibodies (anti-Tg), and high-resolution thyroid ultrasound are recommended.',
    },
    {
      question: 'Why should people with Hashimoto’s thyroiditis be cautious with iodine supplements?',
      answer:
        'Excessive iodine intake (from kelp, seaweed extracts, or high-dose supplements) can aggravate autoimmune thyroid inflammation, trigger antibody spikes, and precipitate acute thyroid dysfunction (Wolff-Chaikoff effect or iodine-induced thyrotoxicosis). Supplementation should only occur under medical supervision.',
    },
  ];

  return (
    <section
      id="renal-thyroid-malappuram-guide"
      aria-labelledby="renal-thyroid-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#D97706]" />
            <span>NEPHROLOGY, UROLOGY &amp; THYROID CARE · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="renal-thyroid-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Renal, Urinary, Gallbladder &amp; Thyroid Homeopathic Clinic in Malappuram
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
            The kidneys, urinary tract, gallbladder, and thyroid gland play important roles in maintaining the body's normal functioning. Health conditions affecting these organs can cause discomfort, changes in daily activities, and concerns about long-term well-being. Kidney stones, urinary calculi, gallbladder stones, hypothyroidism, Hashimoto’s thyroiditis, and goiter are among the conditions that require appropriate assessment, accurate diagnosis, and suitable medical management.
          </p>
          <p>
            The <strong className="text-[#1E2559] font-semibold">Renal, Urinary, Gallbladder &amp; Thyroid Homeopathic Clinic in Malappuram</strong> focuses on providing a setting where individuals can discuss their health concerns, understand their existing medical reports, and learn about appropriate care options. People searching for a <strong className="text-[#1E2559] font-semibold">Homeopathic Clinic in Malappuram</strong> may have questions about recurrent urinary stones, abdominal discomfort, thyroid hormone imbalances, or enlargement of the thyroid gland.
          </p>
          <p>
            Every patient has a different medical history, symptom pattern, and set of healthcare needs. Therefore, a careful approach should consider the individual's symptoms, diagnostic findings, current medications, and previous treatment history. Kidney and gallbladder stones may sometimes lead to serious complications, while thyroid disorders can require ongoing monitoring and long-term treatment.
          </p>
          <p>
            It is important to distinguish between discussing complementary healthcare and treating a diagnosed medical condition. Reliable scientific evidence has not established homeopathy as an effective treatment for dissolving kidney or gallbladder stones, correcting thyroid hormone deficiencies, or reversing autoimmune thyroid disease. Homeopathic consultation should not replace appropriate medical assessment, prescribed treatment, or specialist care.
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 rounded-3xl bg-[#FFFBEB] p-6 sm:p-8 border border-[#FDE68A] space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#92400E] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <span className="text-[11px] text-[#92400E] font-semibold bg-white/80 px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
              Renal, Biliary &amp; Thyroid Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Kidney stones:</strong> Renal calculi may cause severe side or back pain, blood in the urine, nausea, and urinary discomfort. Diagnosis helps determine the stone's size, location, and appropriate management.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Urinary stones:</strong> Ureteral and bladder calculi can interfere with normal urine flow and may require urological treatment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Gallbladder stones:</strong> Gallstones can cause abdominal pain and potentially serious complications, sometimes requiring surgical assessment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Thyroid health:</strong> Hypothyroidism, Hashimoto’s thyroiditis, and goiter have different causes and require appropriate clinical evaluation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Individualized care:</strong> Medical history, diagnostic reports, laboratory results, and current medication are important when discussing health concerns.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span><strong>Evidence-based treatment:</strong> Homeopathy should not replace established treatment for stones or thyroid disorders, and urgent symptoms require prompt medical attention.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Kidney Stones (Renal Calculi): Understanding Kidney Health */}
        <div className="space-y-5 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            1. Kidney Stones (Renal Calculi): Understanding Kidney Health
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Kidney stones, medically known as renal calculi, are solid deposits that form when certain minerals and substances in urine crystallize. They vary in size and composition and may remain in the kidneys without producing noticeable symptoms. However, when a stone moves into the urinary tract or blocks the flow of urine, it can cause significant discomfort.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Common symptoms include sharp pain in the side or back (renal colic), pain extending toward the lower abdomen or groin, nausea, vomiting, blood in the urine (haematuria), and frequent or painful urination. The severity of symptoms depends on the size and location of the stone and whether an obstruction is present.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#303A88]" />
                <span>Diagnostic Evaluation &amp; Management</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                People searching for a <strong className="text-[#1E2559] font-semibold">Kidney Stone Consultation in Malappuram</strong> should understand the importance of proper medical evaluation. Depending on the symptoms, healthcare professionals may recommend urine analysis, serum creatinine/electrolytes, ultrasound, or non-contrast CT scans. These assessments help identify the stone's exact location, dimensions, and evaluate kidney function.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Management depends on the stone's size, location, composition, presence of infection, and overall renal health. Small stones (&lt;5mm) may pass spontaneously with medical expulsive therapy, while larger or obstructing stones require urological procedures (such as shockwave lithotripsy, ureteroscopy, or PCNL).
              </p>
              <p className="text-xs text-[#64748B] italic">
                Staying adequately hydrated may help reduce recurrence risk, although fluid intake should be individualized for people with cardiovascular or advanced kidney diseases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-3">
              <h4 className="text-base font-bold text-[#991B1B] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
                <span>Recognizing Warning Signs: Emergency Red Flags</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                Severe or persistent flank pain, fever, chills, repeated vomiting, or difficulty passing urine requires urgent emergency medical attention.
              </p>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
                A urinary stone associated with infection and obstruction can rapidly progress to urosepsis, which is a life-threatening medical emergency. Individuals with a solitary functioning kidney, transplanted kidney, or chronic kidney disease should never delay evaluation.
              </p>
              <div className="p-3 bg-white/80 rounded-xl border border-[#FCA5A5] text-xs text-[#7F1D1D]">
                Homeopathy has not been shown reliably to dissolve renal calculi or relieve acute urinary tract obstruction.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Ureteral and Bladder Calculi: Supporting Urinary Health */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            2. Ureteral and Bladder Calculi: Supporting Urinary Health
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Urinary stones can occur in different parts of the urinary tract. Ureteral stones develop in or migrate into the narrow muscular tubes connecting the kidneys to the bladder, while bladder stones form within the bladder itself. Their symptoms and management vary according to their size, location, and effect on urinary flow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Symptoms &amp; Mechanisms</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Ureteral stones often cause intense, wave-like pain (ureteric colic) radiating from the flank down to the groin, testicles, or labia, along with hematuria and acute nausea. Bladder stones frequently cause lower abdominal heaviness, painful micturition, terminal hematuria, interrupted urine stream, and incomplete bladder emptying.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Bladder calculi typically arise when the bladder cannot empty fully, often secondary to benign prostatic hyperplasia (BPH), urethral strictures, or neurogenic bladder conditions. Identifying and correcting the anatomical or functional obstruction is vital to prevent stone recurrence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Urinary Stone Consultation in Malappuram</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A <strong className="text-[#1E2559] font-semibold">Urinary Stone Consultation in Malappuram</strong> should involve careful review of prior stone episodes, biochemical urine profiles, imaging studies, and renal function. Treatment depends on stone caliber, degree of hydronephrosis, and infection markers.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Some stones require cystoscopic or endoscopic extraction. Patients interested in complementary care should maintain coordinated urological supervision; homeopathy has not been established as an effective means of dissolving ureteral or bladder calculi.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Gallbladder Stones (Cholelithiasis): Understanding Gallbladder Health */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            3. Gallbladder Stones (Cholelithiasis): Understanding Gallbladder Health
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Gallbladder stones, also called gallstones or cholelithiasis, are hardened deposits that form inside the gallbladder. They may consist mainly of cholesterol, bilirubin pigment substances, or mixed components. Some people have asymptomatic gallstones ('silent gallstones'), while others develop episodic biliary pain or severe inflammatory complications.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Common symptoms include steady, severe ache in the upper-right or epigastric abdomen, particularly following fatty or heavy meals. The discomfort may radiate toward the back or right shoulder blade and may be accompanied by nausea and indigestion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Gallbladder Stone Consultation in Malappuram</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Medical evaluation for suspected gallstones involves abdominal ultrasound, liver function tests (LFTs), and clinical examination. Asymptomatic stones generally require observation rather than surgical intervention.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                However, recurrent biliary colic or complicated disease usually requires surgical assessment for laparoscopic cholecystectomy. There is no reliable scientific evidence that homeopathy dissolves or expels gallstones, and attempting unverified stone flushes can risk acute ductal impaction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-3">
              <h4 className="text-base font-bold text-[#991B1B] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
                <span>When to Seek Urgent Medical Attention</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                Severe or persistent abdominal pain lasting more than a few hours, fever, chills, yellowing of the skin or eyes (jaundice), dark tea-colored urine, or pale clay-colored stools requires urgent emergency medical evaluation.
              </p>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
                These symptoms indicate dangerous complications such as acute cholecystitis, choledocholithiasis (stone in the common bile duct), cholangitis, or gallstone pancreatitis.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Thyroid Consultation in Malappuram: Understanding Thyroid Function */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            4. Thyroid Consultation in Malappuram: Understanding Thyroid Function
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            The thyroid gland is located at the front of the neck and produces thyroxine (T4) and triiodothyronine (T3) hormones that regulate cellular metabolism, basal energy expenditure, body temperature, cardiovascular hemodynamics, and neuromuscular coordination. Changes in thyroid function can affect multiple organ systems and often develop insidiously.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A <strong className="text-[#1E2559] font-semibold">Thyroid Consultation in Malappuram</strong> is appropriate for individuals experiencing chronic fatigue, unexplained weight changes, temperature dysregulation, altered bowel motility, menstrual irregularities, or visible swelling in the neck.
          </p>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
            <h4 className="text-base font-bold text-[#1E2559]">Clinical Diagnostic Pathways</h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Assessment begins with comprehensive symptom history and neck palpation, followed by blood tests: Thyroid-Stimulating Hormone (TSH) and Free T4. When autoimmune disease or structural changes are suspected, anti-thyroid peroxidase (anti-TPO) antibodies, anti-thyroglobulin (anti-Tg) antibodies, and high-resolution thyroid ultrasonography are indicated.
            </p>
            <p className="text-xs text-[#64748B] italic">
              Homeopathy has not been shown reliably to restore normal hormone levels in clinical hypothyroidism or replace evidence-based hormone replacement therapy.
            </p>
          </div>
        </div>

        {/* Section 5: Hypothyroidism: Recognizing an Underactive Thyroid */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            5. Hypothyroidism: Recognizing an Underactive Thyroid
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hypothyroidism occurs when the thyroid gland produces insufficient thyroid hormones to fulfill metabolic demands. Reduced circulating thyroid hormone slows metabolism across bodily tissues, leading to lethargy, cold intolerance, constipation, xerosis (dry skin), diffuse hair thinning, cognitive slowing ('brain fog'), depressed mood, bradycardia, and weight gain despite preserved appetite.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Hypothyroidism Consultation in Malappuram</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A <strong className="text-[#1E2559] font-semibold">Hypothyroidism Consultation in Malappuram</strong> provides an opportunity to evaluate ongoing symptoms, review serial TSH reports, and ensure optimal therapeutic control.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Levothyroxine (synthetic T4) is the clinical standard of care for primary hypothyroidism. Dosing is individualized based on lean body mass, cardiac status, age, pregnancy status, and serum TSH monitoring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-3">
              <h4 className="text-base font-bold text-[#991B1B]">Essential Safety &amp; Medication Compliance</h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                Patients taking thyroid hormone replacement must never stop, reduce, or substitute prescribed levothyroxine with homeopathic formulations without explicit medical supervision.
              </p>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
                Discontinuing hormone replacement can cause severe symptom relapse, dyslipidemia, cardiac dysfunction, and in advanced untreated cases, life-threatening myxoedema coma. Lifestyle and nutritional measures provide valuable supportive well-being but cannot synthesize absent hormone molecules.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Hashimoto’s Thyroiditis: Understanding Autoimmune Thyroid Disease */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            6. Hashimoto’s Thyroiditis: Understanding Autoimmune Thyroid Disease
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Hashimoto’s thyroiditis (chronic lymphocytic thyroiditis) is the most common cause of hypothyroidism in iodine-sufficient areas. In this condition, the body's immune system mistakenly produces antibodies against thyroid peroxidase (TPO) and thyroglobulin, leading to progressive lymphocytic infiltration, chronic inflammation, and eventual follicular cell destruction.
          </p>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
            <h4 className="text-base font-bold text-[#1E2559]">Hashimoto’s Thyroiditis Consultation in Malappuram &amp; Iodine Caution</h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              During a <strong className="text-[#1E2559] font-semibold">Hashimoto’s Thyroiditis Consultation in Malappuram</strong>, clinicians evaluate whether the patient is in an euthyroid, subclinical hypothyroid, or overt hypothyroid phase. Long-term management requires regular TSH surveillance and appropriate hormone replacement when gland failure ensues.
            </p>
            <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed font-medium">
              <strong>Iodine Warning:</strong> Excessive dietary or supplemental iodine (from kelp, spirulina, bladderwrack, or unverified homeo-ayurvedic tinctures) can exacerbate autoimmune thyroid damage and worsen hypothyroidism. Never start high-dose iodine supplements without consulting your endocrinologist.
            </div>
            <p className="text-xs text-[#64748B] italic">
              There is no reliable clinical evidence that homeopathy halts autoimmune destructive pathways or reverses established Hashimoto’s thyroiditis.
            </p>
          </div>
        </div>

        {/* Section 7: Goiter: Understanding Thyroid Enlargement */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            7. Goiter: Understanding Thyroid Enlargement
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Goiter refers to any abnormal enlargement of the thyroid gland. It may present as a smooth, diffuse neck swelling or as a multinodular goiter with discrete nodules. Goiters can occur in euthyroid individuals, as well as those with hypothyroid (e.g., Hashimoto's, iodine deficiency) or hyperthyroid (e.g., Graves' disease, toxic multinodular goiter) states.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Goiter Consultation in Malappuram</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A <strong className="text-[#1E2559] font-semibold">Goiter Consultation in Malappuram</strong> helps determine whether neck swelling requires ultrasound stratification, fine needle aspiration cytology (FNAC) for dominant nodules, or medical therapy.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Patients should never assume that an asymptomatic neck lump is benign without proper radiological and clinical evaluation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-3">
              <h4 className="text-base font-bold text-[#991B1B]">Compressive Emergency Symptoms</h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                Difficulty breathing (dyspnea), noisy inspiratory breathing (stridor), rapidly expanding neck swelling, or significant difficulty swallowing (dysphagia) requires immediate emergency medical evaluation.
              </p>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
                Large substernal goiters or expanding masses can compress the trachea and esophagus, demanding urgent surgical decompression.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Preparing for a Healthcare Consultation */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            8. Preparing for a Healthcare Consultation
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Thorough preparation makes any consultation significantly more productive, whether discussing kidney calculi, biliary colic, or chronic thyroid disease:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Imaging &amp; Lab Records</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Bring ultrasound scans, CT reports, urine microscopic analyses, serum creatinine, and serial thyroid hormone (TSH, Free T4) panels.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Current Medication List</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Provide precise doses of prescribed levothyroxine, antihypertensives, diuretics, analgesics, and dietary supplements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Symptom Timeline</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Document pain characteristics (colic vs dull ache), relationship to meals, urinary changes, weight changes, and cold intolerance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Coordinated Care</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Discussions regarding complementary support should remain closely aligned with your urologist, nephrologist, or endocrinologist.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Frequently Asked Questions (Accordion) */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFFBEB] flex items-center justify-center text-[#D97706] shrink-0">
              <HelpCircle className="w-5 h-5 text-[#D97706]" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] m-0">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#64748B] m-0 mt-0.5">
                Clinical guidance regarding kidney stones, gallstones, hypothyroidism, and goiter consultations in Malappuram.
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

        {/* Section 10: Interlinks to Other Treatment Categories */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Explore Related Clinical Care Programs
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Anjali Homoeo Clinic offers personalized consultations across multiple specialized clinical areas:
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
              href="/homeopathic-treatment-for-skin-hair-scalp-conditions/"
              onClick={(e) => handleNavigateTreatment(e, 'skin-hair-care')}
              className="p-4 rounded-2xl bg-white border border-[#D8E1F5] hover:border-[#303A88] transition-all group flex items-start gap-3 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Skin, Hair &amp; Scalp Conditions
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Eczema, psoriasis, acne, melasma, alopecia &amp; dandruff
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
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors truncate">
                  Neurological &amp; Headache Care
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  Migraine, tension headaches, stress, anxiety &amp; memory
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
          </div>
        </div>

        {/* Section 11: Conclusion & Booking CTA */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="rounded-3xl bg-gradient-to-br from-[#1E2559] via-[#303A88] to-[#1E2559] text-white p-8 sm:p-10 space-y-4 shadow-xl border-2 border-[#45AC4B]/40 font-sans">
            <span className="text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
              PRIORITIZING RENAL, BILIARY &amp; THYROID HEALTH IN MALAPPURAM
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Conclusion: Making Informed Decisions for Renal &amp; Thyroid Health
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Kidney stones, ureteral and bladder calculi, gallbladder stones, hypothyroidism, Hashimoto’s thyroiditis, and goiter are distinct medical conditions that require appropriate assessment and individualized management. Understanding symptoms and obtaining an accurate diagnosis can help patients make informed decisions about their health.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              The Renal, Urinary, Gallbladder &amp; Thyroid Homeopathic Clinic in Malappuram provides a relevant setting for people wishing to discuss these health concerns and their questions about complementary care. Any consultation should be approached responsibly, with appropriate medical investigations, prescribed treatment, and specialist assessment remaining priorities. People searching for Kidney Stone Consultation in Malappuram, Urinary Stone Consultation in Malappuram, or Gallbladder Stone Consultation in Malappuram should prioritize identifying the cause of symptoms and preventing complications.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Similarly, those seeking Thyroid Consultation in Malappuram, Hypothyroidism Consultation in Malappuram, Hashimoto’s Thyroiditis Consultation in Malappuram, or Goiter Consultation in Malappuram should receive clear information about diagnostic testing, treatment options, and follow-up. Informed healthcare decisions, timely medical evaluation, and ongoing communication with qualified healthcare professionals are essential for protecting long-term well-being.
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
                  "Hello Dr. Anjali, I would like to enquire about kidney, urinary, gallstone or thyroid consultations in Malappuram."
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
