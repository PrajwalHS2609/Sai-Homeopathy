import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Sparkles,
  CheckCircle2,
  Wind,
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
  Volume2,
  Baby,
  Feather,
  HeartPulse,
} from 'lucide-react';

export const RespiratorySeoArticleSection: React.FC = () => {
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
      question: 'When should I consult a doctor for recurring sinus problems in Malappuram?',
      answer:
        'You should seek medical evaluation if sinus symptoms such as facial pressure, persistent nasal obstruction, headache, or thick discharge last for several weeks or return frequently. Seek urgent medical care if you experience vision changes, swelling around the eyes, or severe headache.',
    },
    {
      question: 'Can homeopathy cure asthma or replace prescribed inhalers?',
      answer:
        'No. Reliable scientific evidence has not shown homeopathy to be an effective replacement for evidence-based asthma treatment. Patients should never discontinue or reduce prescribed inhalers, steroid preventers, or emergency bronchodilators without explicit medical instruction.',
    },
    {
      question: 'What are the main causes of dust allergy and persistent sneezing?',
      answer:
        'Dust allergy is commonly triggered by microscopic house dust mites, mould spores, animal dander, and fabric fibres. When inhaled, these airborne allergens induce histamine release in sensitive individuals, causing sneezing, runny nose, and ocular itching.',
    },
    {
      question: 'How do I know if my child has enlarged adenoids?',
      answer:
        'Signs of enlarged adenoids include persistent mouth breathing, loud snoring, restless sleep, paused breathing during sleep (suspected sleep apnoea), recurrent ear fullness or infections, and persistent nasal speech. Assessment by a paediatrician or ENT specialist is recommended.',
    },
    {
      question: 'When does a chronic cough require urgent medical investigation?',
      answer:
        'A cough persisting beyond 3 to 4 weeks warrants comprehensive medical investigation. Immediate emergency assessment is critical if the cough is accompanied by coughing up blood (haemoptysis), unexplained weight loss, shortness of breath, severe chest pain, or high fever.',
    },
    {
      question: 'What vocal hygiene measures are recommended for teachers and singers experiencing voice strain?',
      answer:
        'Professional voice users should maintain adequate hydration, schedule deliberate vocal rest periods, avoid frequent throat-clearing and whispering, use microphone amplification in large classrooms, and seek an ENT evaluation if hoarseness persists beyond 3 to 4 weeks.',
    },
  ];

  return (
    <section
      id="respiratory-ent-allergy-malappuram-guide"
      aria-labelledby="respiratory-guide-heading"
      className="bg-white border-t border-[#D8E1F5] py-16 lg:py-24 relative font-sans text-[#334155]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & SEO Badge */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold text-[#0369A1] uppercase tracking-wider">
            <Wind className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>RESPIRATORY, ENT &amp; ALLERGY CARE · MALAPPURAM, KERALA</span>
          </div>

          <h2
            id="respiratory-guide-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight"
          >
            Homeopathic Doctor for Respiratory, ENT &amp; Allergy Conditions
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
            Respiratory, ear, nose, and throat (ENT) concerns can affect everyday comfort, sleep, communication, and overall quality of life. Symptoms such as recurring sinus congestion, sneezing, dust allergies, persistent coughing, wheezing, throat irritation, and voice strain can make routine activities challenging. For children, repeated nasal blockage, mouth breathing, or throat complaints may also cause concerns for parents.
          </p>
          <p>
            Finding the right healthcare professional is an important step towards understanding these symptoms and receiving appropriate care. If you are looking for a <strong className="text-[#1E2559] font-semibold">Homeopathic Clinic in Malappuram</strong>, it is essential to choose a clinic that prioritises a detailed consultation, responsible guidance, and referral for medical evaluation whenever necessary.
          </p>
          <p>
            A consultation may help you discuss your symptom history, possible triggers, previous treatments, and general health concerns. Homeopathic care should not replace evidence-based medical treatment for conditions such as asthma, serious infections, or significant breathing difficulties. Understanding the cause of your symptoms and receiving appropriate medical assessment are important parts of managing respiratory and ENT health.
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
              Respiratory &amp; ENT Guide
            </span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1E2559]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Recurring sinus congestion, sneezing, coughing, and throat discomfort can have several different causes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Identifying potential triggers, including dust, smoke, pollen, and weather changes, may help people understand their symptoms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Asthma and wheezing require appropriate medical assessment and evidence-based treatment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Children with persistent nasal blockage, snoring, mouth breathing, or recurrent throat infections may need assessment by a paediatrician or ENT specialist.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Persistent hoarseness and voice strain should be evaluated, particularly among teachers, singers, and other professional voice users.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>A homeopathic consultation should complement—not replace—necessary medical investigations, prescribed treatment, or specialist care.</span>
            </li>
            <li className="flex items-start gap-2.5 md:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Choosing a <strong>Homeopathic Clinic in Malappuram</strong> that communicates clearly about treatment limitations and referral needs supports informed healthcare decisions.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Understanding Respiratory, ENT & Allergy Conditions */}
        <div className="space-y-4 pt-6 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Understanding Respiratory, ENT &amp; Allergy Conditions
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Respiratory and ENT symptoms can occur because of allergies, infections, environmental irritants, structural problems, or other medical conditions. Some people experience symptoms occasionally, while others report recurring discomfort that affects work, education, sleep, or daily activities.
            </p>
            <div className="bg-[#F8FAFD] border border-[#D8E1F5] rounded-2xl p-6 my-4">
              <h4 className="text-base font-bold text-[#1E2559] mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#303A88]" />
                <span>Common Concerns Include:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Recurrent sinus symptoms and nasal congestion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Dust and seasonal allergies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Sneezing and a persistently runny or blocked nose</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Chronic or recurring cough</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Asthma symptoms and wheezing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Repeated tonsil inflammation or sore throat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Enlarged adenoids and nasal obstruction in children</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>Hoarseness, vocal fatigue, and voice strain</span>
                </div>
              </div>
            </div>
            <p>
              Although these conditions can share similar symptoms, they may require different approaches to assessment and treatment. For example, a cough may be associated with asthma, an infection, allergies, acid reflux, or another underlying condition. A proper evaluation helps determine the most appropriate next steps.
            </p>
          </div>
        </div>

        {/* Section 2: Homeopathic Clinic for Sinus Problems in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Homeopathic Clinic for Sinus Problems in Malappuram
            </h3>
            <a
              href="/chronic-sinusitis-symptoms-causes-treatment/"
              onClick={(e) => handleNavigateBlog(e, 'chronic-sinusitis-symptoms-causes-treatment')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Clinical Blog: Chronic Sinusitis Guide</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Sinus-related symptoms can include facial pressure, nasal congestion, a reduced sense of smell, headache, and thick nasal discharge. Some people experience symptoms during respiratory infections, while others have recurring problems associated with allergies or chronic inflammation.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            If you are searching for a <strong className="text-[#1E2559] font-semibold">Homeopathic clinic for sinus problems in Malappuram</strong>, consider discussing the frequency and duration of your symptoms, possible environmental triggers, previous diagnoses, and any treatments you have tried.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Wind className="w-4 h-4 text-[#0284C7]" />
                <span>Common Symptoms Associated with Sinus Problems</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>A blocked or stuffy nose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>Pressure around the cheeks, forehead, or eyes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>Nasal discharge or postnasal drip</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>Reduced sense of smell</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>Headache or facial discomfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>Repeated episodes of nasal congestion</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic pt-1">
                Sinus symptoms do not always indicate a bacterial infection. Allergic rhinitis, viral infections, and other nasal conditions can produce similar complaints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#45AC4B]" />
                <span>Why Medical Assessment Matters</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A healthcare professional can help assess whether further investigation or treatment is needed. Although patients may seek homeopathic consultation for recurring sinus symptoms, reliable scientific evidence has not established homeopathy as an effective treatment for sinusitis. Persistent, severe, or frequently recurring symptoms deserve appropriate medical evaluation.
              </p>
              <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed">
                <strong>Warning:</strong> Urgent medical attention is advised if sinus symptoms are accompanied by high fever, severe eye swelling, visual disturbances, or stiff neck.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Homeopathic Clinic for Respiratory Allergies in Malappuram */}
        <div className="space-y-4 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Clinic for Respiratory Allergies in Malappuram
          </h3>
          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#334155] space-y-3.5">
            <p>
              Respiratory allergies may cause repeated sneezing, nasal irritation, watery eyes, congestion, and postnasal drip. In some individuals, exposure to allergens can also trigger coughing or worsen asthma symptoms.
            </p>
            <p>
              People looking for a <strong className="text-[#1E2559] font-semibold">Homeopathic clinic for respiratory allergies in Malappuram</strong> may want to discuss when symptoms occur, how long they last, and whether they are associated with particular environments or activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#303A88]" />
                <span>Common Allergy Triggers</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>House dust mites</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Pollen and outdoor allergens</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Mould and damp indoor environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Animal dander</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Smoke and air pollution</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Workplace dust and airborne irritants</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Seasonal or weather-related changes coinciding with allergen exposure</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] italic pt-1">
                Weather changes do not necessarily cause an allergy directly, but changes in humidity, temperature, or airborne allergens may aggravate symptoms in some people.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#45AC4B]" />
                <span>Understanding Allergy Management</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Keeping track of symptoms and possible triggers can help patients and clinicians identify patterns. Depending on the symptoms, a healthcare professional may recommend allergy assessment, environmental changes, medication, or referral to an allergy specialist.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Homeopathic products have not been shown reliably to treat respiratory allergies. They should not replace proven allergy treatments or prescribed asthma medication. Anyone experiencing persistent symptoms should seek an appropriate medical assessment.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Homeopathic Clinic for Dust Allergy in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Clinic for Dust Allergy in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Dust exposure can trigger sneezing, nasal congestion, itchy eyes, and coughing in people who are sensitive to airborne allergens or irritants. House dust may contain dust mites, fabric fibres, mould particles, and other substances, so identifying the actual trigger can be helpful.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            When searching for a <strong className="text-[#1E2559] font-semibold">Homeopathic clinic for dust allergy in Malappuram</strong>, patients may wish to discuss symptoms that occur during house cleaning, handling stored clothes, working in dusty environments, or spending time in rooms with soft furnishings.
          </p>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
            <h4 className="text-base font-bold text-[#1E2559]">Practical Ways to Reduce Dust Exposure</h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Simple environmental measures may help reduce exposure to some common indoor allergens:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                <span>Clean living and working areas regularly using methods that minimise airborne dust.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                <span>Wash bedding regularly and keep sleeping areas clean.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                <span>Address dampness and visible mould where present.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                <span>Improve ventilation when outdoor air quality is suitable.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                <span>Use suitable protective equipment when workplace dust exposure cannot be avoided.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                <span>Discuss persistent symptoms with a qualified healthcare professional.</span>
              </div>
            </div>
            <p className="text-xs text-[#991B1B] pt-2">
              <strong>Clinical note:</strong> These measures may be helpful, but the most appropriate approach depends on the specific trigger and the person's medical history. If dust exposure causes wheezing, chest tightness, or difficulty breathing, prompt medical assessment is important.
            </p>
          </div>
        </div>

        {/* Section 5: Asthma and Wheezing: Why Proper Medical Care Matters */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Asthma and Wheezing: Why Proper Medical Care Matters
            </h3>
            <a
              href="/asthma-symptoms-early-warning-signs/"
              onClick={(e) => handleNavigateBlog(e, 'asthma-symptoms-early-warning-signs')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read: Early Warning Signs of Asthma</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Asthma is a chronic respiratory condition involving inflammation and narrowing of the airways. Symptoms may include wheezing, breathlessness, chest tightness, and coughing, particularly at night, during exercise, or after exposure to certain triggers. Wheezing can also occur for reasons other than asthma, which is why an accurate diagnosis matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#303A88]" />
                <span>Symptoms That Need Attention</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Repeated episodes of wheezing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Breathlessness during ordinary activities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Coughing that worsens at night</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Chest tightness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Symptoms triggered by exercise, allergens, or respiratory infections</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] pt-1 leading-relaxed">
                People experiencing these symptoms should consult an appropriate healthcare professional. Asthma may require inhaled medication and a personalised management plan. Homeopathy has not been shown to be an effective replacement for evidence-based asthma treatment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] space-y-3">
              <h4 className="text-base font-bold text-[#991B1B] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
                <span>Emergency Signs &amp; Inhaler Safety</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed font-semibold">
                Never stop or reduce prescribed inhalers or other asthma medication without medical advice.
              </p>
              <p className="text-xs sm:text-sm text-[#7F1D1D] leading-relaxed">
                Severe breathing difficulty, difficulty speaking because of breathlessness, bluish lips or nails, or rapidly worsening symptoms require emergency medical assistance immediately.
              </p>
              <div className="p-3 bg-white/80 rounded-xl border border-[#FCA5A5] text-xs text-[#7F1D1D]">
                A homeopathic consultation is strictly an adjunct support for constitution and lifestyle and must never delay emergency intervention.
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Homeopathic Consultation for Chronic Cough in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Consultation for Chronic Cough in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A cough is a protective reflex that helps clear the airways. However, a cough that persists or repeatedly returns may interfere with sleep, work, and everyday activities.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            People seeking a <strong className="text-[#1E2559] font-semibold">Homeopathic consultation for chronic cough in Malappuram</strong> should first consider the importance of identifying the underlying cause. A persistent cough can be associated with asthma, postnasal drip, respiratory infections, acid reflux, medication side effects, or other medical conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Dry Cough</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A cough without noticeable mucus. It may occur with airway irritation, cough-variant asthma, allergies, or certain viral infections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Productive Cough</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A cough that brings up mucus or phlegm. Depending on its duration, color, and associated fever, it may require formal medical assessment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Night-time Cough</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A cough that becomes more noticeable at night may be associated with asthma, postnasal drip from sinusitis, or gastroesophageal reflux.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-2">
              <h4 className="font-bold text-[#1E2559] text-sm">Recurring Cough</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Repeated episodes may be linked to environmental exposure, recurrent respiratory infections, or an underlying chronic respiratory condition.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-2">
            <h4 className="font-bold text-[#1E2559] text-sm">When Should You Seek Medical Advice?</h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Consult a healthcare professional if a cough persists, repeatedly returns, disrupts sleep, or is accompanied by fever or other concerning symptoms. Coughing up blood, severe breathlessness, chest pain, or a significant deterioration in general health warrants urgent assessment.
            </p>
            <p className="text-xs text-[#64748B] italic">
              Homeopathic treatment has not been established as an effective treatment for chronic cough. Appropriate investigation and evidence-based care are important, especially when the cough has no clear explanation.
            </p>
          </div>
        </div>

        {/* Section 7: Children's Respiratory Health Consultation in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Children's Respiratory Health Consultation in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Children may experience respiratory and ENT symptoms more frequently because of their developing immune systems and exposure to infections at school or daycare. Persistent nasal congestion, recurrent cough, snoring, mouth breathing, and repeated sore throats can concern parents.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Families looking for <strong className="text-[#1E2559] font-semibold">Children's respiratory health consultation in Malappuram</strong> should choose a healthcare professional who takes children's symptoms seriously and recognises when paediatric or ENT assessment is needed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Baby className="w-4 h-4 text-[#303A88]" />
                <span>Common Concerns in Children</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Repeated nasal congestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Persistent sneezing or allergy symptoms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Frequent coughing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Snoring during sleep</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Mouth breathing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Recurrent sore throats</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Possible enlarged adenoids or tonsils</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748B] pt-1">
                A child's symptoms should not automatically be attributed to allergies or recurrent infections. The child's age, symptom duration, sleep quality, growth, medical history, and examination findings may all be relevant.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Understanding Enlarged Adenoids</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Adenoids are lymphoid tissue located behind the nose. When enlarged, they may contribute to nasal obstruction, mouth breathing, snoring, and recurrent ear-related problems.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A paediatrician or ENT specialist can assess whether enlarged adenoids are likely to be contributing to a child's symptoms. Depending on the findings, management may involve monitoring, appropriate medication, further evaluation, or surgery in selected cases.
              </p>
              <p className="text-xs text-[#991B1B] bg-[#FEF2F2] p-3 rounded-xl border border-[#FCA5A5] leading-relaxed">
                Homeopathy has not been shown reliably to shrink enlarged adenoids or prevent related complications. Persistent nasal obstruction, breathing difficulties during sleep, or suspected sleep apnoea should be evaluated by an appropriate medical specialist.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Homeopathic Consultation for Recurring Tonsillitis in Malappuram */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Homeopathic Consultation for Recurring Tonsillitis in Malappuram
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Tonsillitis refers to inflammation of the tonsils, which may occur due to viral or bacterial infections. Symptoms can include a sore throat, painful swallowing, fever, swollen tonsils, and tender glands in the neck.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            People looking for a <strong className="text-[#1E2559] font-semibold">Homeopathic consultation for recurring tonsillitis in Malappuram</strong> should understand that repeated episodes may need medical assessment to establish the cause and determine whether additional treatment is required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Signs and Symptoms of Tonsillitis</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Sore throat and pain or difficulty when swallowing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Red or swollen tonsils (sometimes with white spots or exudate)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Fever and chills</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Swollen, tender lymph glands in the neck</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Bad breath and difficulty opening the mouth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Repeated episodes of throat discomfort</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Bacterial vs. Viral Infection &amp; Warnings</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Not every sore throat requires antibiotics. A healthcare professional can assess whether testing or specific treatment is appropriate. Antibiotics may be needed for certain bacterial infections (like Group A Streptococcus), but they do not treat viral infections.
              </p>
              <div className="p-3 bg-[#FEF2F2] rounded-xl border border-[#FCA5A5] text-xs text-[#991B1B] leading-relaxed font-semibold">
                Seek urgent medical care if there is difficulty breathing, inability to swallow saliva, severe dehydration, or rapidly worsening throat swelling.
              </div>
              <p className="text-xs text-[#64748B] italic">
                Homeopathy has not been established as an effective treatment for tonsillitis or as a reliable way to prevent recurrent throat infections. Repeated episodes should be reviewed by a qualified healthcare professional, who can advise whether an ENT referral is appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Voice Strain and Vocal Cord Health for Professional Voice Users */}
        <div className="space-y-5 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Voice Strain and Vocal Cord Health for Professional Voice Users
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Teachers, singers, trainers, public speakers, customer-service professionals, and other people who use their voices extensively may experience vocal fatigue or hoarseness.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Voice strain can be associated with prolonged speaking, shouting, poor vocal technique, dehydration, respiratory infections, reflux, allergies, or other conditions affecting the vocal cords.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] space-y-3">
              <h4 className="text-base font-bold text-[#1E2559] flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#303A88]" />
                <span>Common Symptoms of Vocal Strain</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Hoarseness or a rough, raspy voice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Vocal fatigue after prolonged speaking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Throat discomfort, tension, or dryness while talking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>A reduced vocal range and pitch breaks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Frequent throat clearing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#303A88]" />
                  <span>Difficulty projecting the voice in classroom or auditorium settings</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5] shadow-2xs space-y-3">
              <h4 className="text-base font-bold text-[#1E2559]">Supporting Healthy Voice Use</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Professional voice users may benefit from taking regular voice breaks, drinking sufficient water, avoiding shouting, and using suitable microphone support when possible. Persistent hoarseness should not automatically be attributed to overuse.
              </p>
              <div className="p-3 bg-[#EEF2FB] rounded-xl border border-[#D8E1F5] text-xs text-[#1E2559] leading-relaxed">
                <strong>The 4-Week Rule:</strong> If voice changes persist for around four weeks, or sooner if there are concerning symptoms or significant risk factors, medical assessment with direct vocal cord visualization (laryngoscopy) is recommended. Sudden voice loss after strenuous vocal activity also requires prompt evaluation.
              </div>
              <p className="text-xs text-[#64748B] italic">
                Homeopathy has not been shown reliably to treat vocal cord disorders. A clinician may recommend an ENT specialist or speech-language professional, depending on the symptoms and findings.
              </p>
            </div>
          </div>
        </div>

        {/* Section 10: What to Expect During a Consultation */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            What to Expect During a Consultation
          </h3>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Whether you are exploring a <strong className="text-[#1E2559] font-semibold">Homeopathic Clinic in Malappuram</strong> for sinus symptoms, allergies, cough, or other concerns, a useful consultation should provide an opportunity to discuss your health history and understand the next steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Symptom History</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Discuss when the symptoms started, how frequently they occur, and whether they affect sleep, work, school, or daily activities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Possible Triggers</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Describe any relationship between symptoms and dust, weather changes, workplace exposure, exercise, or particular environments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Previous Medical Care</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Share relevant diagnoses, spirometry reports, allergy tests, chest imaging, prescribed inhalers, and earlier treatments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Clinical Assessment &amp; Referral</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Seek appropriate examination or referral to an ENT specialist, pulmonologist, or paediatrician when symptoms suggest an underlying condition needing investigation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs md:col-span-2 lg:col-span-2">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Follow-Up &amp; Safety Planning</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Understand when to return for review and which symptoms require prompt or emergency care. A responsible consultation explains limitations, avoids unsupported claims, and ensures prescribed treatments continue safely.
              </p>
            </div>
          </div>
        </div>

        {/* Section 11: Choosing a Homeopathic Clinic in Malappuram */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
                Choosing a Homeopathic Clinic in Malappuram
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] mt-1 leading-relaxed">
                When comparing healthcare providers for respiratory and ENT complaints, look beyond promotional claims and consider quality and transparency:
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
              <h4 className="font-bold text-[#1E2559] pt-1">Professional Qualifications</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Check the practitioner's recognised BHMS qualification and state council medical registration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Clear Communication</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Choose a practitioner who explains what is known and what remains uncertain about your symptoms without making unrealistic promises.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Responsible Referral</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                A suitable provider should recommend conventional medical assessment, pulmonology review, or ENT specialist care whenever necessary.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Transparent Treatment Info</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Ask about the proposed approach, potential risks, fees, and scheduled follow-up appointments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#303A88] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Respect for Prescribed Medication</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                Do not discontinue evidence-based inhalers, steroids, or allergy medicines because of a homeopathic consultation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D8E1F5] space-y-1.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-[#45AC4B] text-white text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="font-bold text-[#1E2559] pt-1">Child-Friendly Care</h4>
              <p className="text-[#475569] leading-relaxed m-0 text-xs">
                For children, make sure their symptoms are assessed gently and appropriately, and that specialist paediatric or ENT referrals are arranged when indicated.
              </p>
            </div>
          </div>
        </div>

        {/* Section 12: Frequently Asked Questions (Accordion) */}
        <div className="space-y-6 pt-10 border-t border-[#EEF2FB]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] shrink-0">
              <HelpCircle className="w-5 h-5 text-[#0284C7]" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] m-0">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#64748B] m-0 mt-0.5">
                Clinical answers regarding respiratory, ENT, allergy, and asthma consultations in Malappuram.
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
                Anjali Homoeo Clinic offers personalized homeopathic consultations across multiple clinical specialties:
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
                  Psoriasis, eczema, urticaria, acne, alopecia &amp; dandruff
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
              PRIORITIZING RESPIRATORY &amp; ENT HEALTH IN MALAPPURAM
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Conclusion: Making Informed Decisions for Respiratory &amp; ENT Health
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Respiratory, ENT, and allergy symptoms can have several underlying causes, and choosing the right approach begins with understanding those causes. Recurring sinus problems, dust allergies, chronic cough, wheezing, tonsillitis, childhood adenoid symptoms, and vocal strain may all require different assessments and care plans.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              If you are searching for a Homeopathic clinic for sinus problems in Malappuram, a Homeopathic clinic for respiratory allergies in Malappuram, or a Homeopathic consultation for chronic cough in Malappuram, prioritise a consultation that provides clear information, recognises treatment limitations, and supports appropriate medical referral.
            </p>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              For families seeking Children's respiratory health consultation in Malappuram, timely assessment is especially important when symptoms affect breathing, sleep, eating, or everyday activities. A responsible Homeopathic Clinic in Malappuram should encourage informed healthcare decisions and ensure that homeopathic consultation does not delay proven treatment. For asthma, significant breathing difficulties, persistent infections, enlarged adenoids, or ongoing voice problems, appropriate medical evaluation remains essential.
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
                  "Hello Dr. Anjali, I would like to enquire about respiratory, ENT and allergy consultations in Malappuram."
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
