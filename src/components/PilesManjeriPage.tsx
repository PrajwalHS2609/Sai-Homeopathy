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
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Info,
  Calendar,
  Check,
  ShieldAlert,
  Activity,
  Heart,
  Droplets,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const PilesManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Piles / Haemorrhoids (Manjeri patient guide).'
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
    navigateToBookingWithReason('Piles Consultation - Manjeri', 'online');
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
      title: 'Understand your symptoms',
      desc: 'Rectal bleeding, itching, swelling, and discomfort can occur with haemorrhoids, but other conditions may cause similar symptoms.',
    },
    {
      title: 'Seek appropriate medical advice',
      desc: 'A qualified healthcare professional can assess your symptoms and recommend suitable investigations or treatment.',
    },
    {
      title: 'Explore treatment options carefully',
      desc: 'Piles management depends on the severity of symptoms and the underlying diagnosis.',
    },
    {
      title: 'Understand the evidence',
      desc: 'Current scientific evidence does not establish homoeopathy as an effective treatment for piles beyond placebo.',
    },
    {
      title: 'Avoid delaying care',
      desc: 'Persistent rectal bleeding, severe pain, or heavy bleeding requires prompt medical attention.',
    },
    {
      title: 'Choose healthcare responsibly',
      desc: 'Consider professional qualifications, transparent communication, and access to appropriate medical referral when selecting a clinic in Manjeri.',
    },
  ];

  const preparationChecklist = [
    'The duration and frequency of your symptoms',
    'Whether you have noticed bleeding during bowel movements (bright red blood in the pan or on toilet paper)',
    'Any pain, swelling, itching, burning, or discomfort around the anal region',
    'Changes in bowel regularity, stool consistency, or persistent straining',
    'Current medicines, laxatives, and dietary supplements you are taking',
    'Previous diagnoses, treatments, or surgical consultations',
    'Other relevant medical conditions (pregnancy, portal hypertension, inflammatory bowel issues)',
  ];

  const choiceFactors = [
    {
      number: '01',
      title: 'Professional Qualifications',
      desc: 'Ensure the practitioner holds recognized, accredited qualifications (such as BHMS) and is registered with the state medical council in Kerala.',
    },
    {
      number: '02',
      title: 'Thorough Clinical Assessment',
      desc: 'A responsible clinic takes a comprehensive medical history, evaluates dietary and lifestyle factors, and emphasizes diagnostic clarity rather than quick assumptions.',
    },
    {
      number: '03',
      title: 'Transparent Communication',
      desc: 'Healthcare providers should provide realistic information about what conservative care can achieve and be open about the scientific limitations of treatments.',
    },
    {
      number: '04',
      title: 'Access to Medical Referral',
      desc: 'Select a clinic that maintains collaborative ties with general surgeons, gastroenterologists, and diagnostic imaging centers for prompt referral when needed.',
    },
    {
      number: '05',
      title: 'Continuity of Care & Follow-Up',
      desc: 'Clear follow-up schedules ensure that symptoms are monitored over time and treatment strategies adjusted if adequate improvement is not observed.',
    },
  ];

  const questionsToAsk = [
    'What is your assessment of my symptoms, and is a physical examination or proctoscopy necessary?',
    'What does current medical evidence say about the effectiveness of homeopathic care for my grade of piles?',
    'What specific dietary, hydration, and toilet habits should I adopt to support bowel health?',
    'What warning signs or symptoms should prompt me to seek immediate conventional or surgical care?',
    'How will we measure whether my symptoms are improving, and what is the expected follow-up timeframe?',
    'Could my symptoms be caused by an anal fissure, polyp, fistula, or another gastrointestinal condition?',
  ];

  const redFlags = [
    {
      title: 'Severe, Sudden, or Excruciating Pain',
      desc: 'Intense throbbing pain near the anus can signal a thrombosed external haemorrhoid, strangulated internal prolapse, or perianal abscess requiring immediate medical care.',
    },
    {
      title: 'Heavy, Continuous, or Uncontrolled Bleeding',
      desc: 'Rectal bleeding that does not stop after defecation, fills the toilet bowl, or produces blood clots warrants emergency hospital evaluation.',
    },
    {
      title: 'Dizziness, Faintness, or Paleness',
      desc: 'Feeling lightheaded, weak, dizzy, or experiencing rapid heartbeat can indicate significant acute or chronic blood loss leading to anemia.',
    },
    {
      title: 'Black, Maroon, or Tarry Stools',
      desc: 'Stools that appear dark black or tarry (melena) indicate upper gastrointestinal bleeding and must never be attributed to simple piles.',
    },
    {
      title: 'Fever, Chills, or Foul-Smelling Discharge',
      desc: 'Constitutional symptoms accompanied by perianal heat, discharge, or swelling point towards an infection or anal fistula.',
    },
  ];

  const lifestyleHabits = [
    {
      number: '1',
      title: 'Increase Dietary Fibre Steadily',
      desc: 'Gradually increase soluble and insoluble fibre (25–35 g daily) from fresh vegetables, oats, whole pulses, papaya, apples, and psyllium husk (isabgol) to form soft, bulky stools.',
    },
    {
      number: '2',
      title: 'Maintain Consistent Hydration',
      desc: 'Drink 2 to 2.5 litres of water throughout the day. Adequate water is vital for dietary fibre to soften stool and facilitate smooth evacuation.',
    },
    {
      number: '3',
      title: 'Avoid Straining and Prolonged Sitting on the Toilet',
      desc: 'Never force or strain during bowel movements. Limit toilet time to 3–5 minutes and avoid reading or using mobile phones on the commode.',
    },
    {
      number: '4',
      title: 'Use Optimal Defecation Posture',
      desc: 'Placing a small footstool beneath your feet elevates the knees above the hips, opening the anorectal angle and allowing gravity-assisted defecation without pressure.',
    },
    {
      number: '5',
      title: 'Gentle Perianal Hygiene & Warm Sitz Baths',
      desc: 'Cleanse gently with lukewarm water rather than dry abrasive tissue. Soak in a warm sitz bath for 10–15 minutes twice daily to soothe irritation and relax sphincter tension.',
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between internal and external piles?',
      answer:
        'Piles (haemorrhoids) are classified by their anatomical location relative to the dentate line in the anal canal. Internal haemorrhoids originate inside the rectum above the dentate line; because this area lacks somatic pain receptors, they often cause painless bright-red bleeding during bowel movements or may prolapse during defecation. External haemorrhoids develop beneath the skin around the anal verge, where sensory nerves are abundant. They can cause swelling, itching, burning, and sudden severe pain if a blood clot forms inside (thrombosed external piles).',
    },
    {
      question: 'Can piles heal on their own without medical intervention?',
      answer:
        'Mild, early-stage haemorrhoids (Grade I) often improve spontaneously or with conservative lifestyle measures such as increasing dietary fibre, drinking adequate water, avoiding prolonged toilet straining, and utilizing warm sitz baths. However, if symptoms persist, bleeding is recurrent, or prolapse develops, medical consultation is essential to confirm the diagnosis and rule out other anorectal or gastrointestinal conditions.',
    },
    {
      question: 'When should I consult a doctor for piles symptoms in Manjeri?',
      answer:
        'You should arrange a consultation whenever you notice rectal bleeding, anal pain, persistent itching, or a newly felt lump near the anus. A proper assessment ensures an accurate diagnosis. Immediate medical attention is vital if you experience severe pain, heavy or continuous bleeding, dizziness, blood mixed with black stools, or fever.',
    },
    {
      question: 'What does current medical evidence say about homeopathic treatment for piles?',
      answer:
        'Current rigorous scientific clinical trials have not established homoeopathy as an effective medical treatment for piles beyond a placebo response. While individual patients may explore constitutional homoeopathy alongside lifestyle and dietary habits, responsible healthcare mandates that patients understand the scientific evidence, obtain a clear medical diagnosis, and do not delay necessary conventional medical or surgical interventions.',
    },
    {
      question: 'What lifestyle changes help prevent piles from recurring?',
      answer:
        'Key preventive habits include maintaining a high-fibre diet (whole grains, vegetables, fruits, legumes), drinking at least 2 litres of water daily, engaging in regular moderate physical exercise (such as brisk walking), avoiding prolonged toilet sitting, responding promptly to the urge to pass stool, and maintaining gentle perianal hygiene.',
    },
    {
      question: 'How can I differentiate between piles and an anal fissure or other condition?',
      answer:
        'While piles frequently cause painless bleeding or soft external lumps, an anal fissure is a mucosal tear that typically triggers sharp, razor-cutting pain during and for several hours after passing stool. Other conditions such as anal fistulas, perianal abscesses, polyps, or inflammatory bowel diseases have distinct clinical features. Because symptoms can overlap, a clinical examination by a qualified practitioner is the only reliable way to distinguish between them.',
    },
    {
      question: 'How do I prepare for a piles consultation at the clinic in Manjeri?',
      answer:
        'Note down when your symptoms began, how frequently they occur, whether bleeding is present, and what makes symptoms better or worse. Bring a list of your current medications, dietary supplements, and details of any previous treatments or examinations. Write down any questions you wish to ask your doctor regarding your diagnosis and care plan.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Mobile / Quick Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-3 shadow-lg flex items-center justify-between sm:hidden">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#303A88] uppercase tracking-wide">
              Piles Clinic Guide
            </span>
            <span className="text-xs font-semibold text-[#1E2559]">
              Manjeri & Malappuram
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${phonePrimary}`}
              className="px-3 py-2 rounded-lg bg-[#303A88] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              onClick={handleBookConsultation}
              className="px-3.5 py-2 rounded-lg bg-[#45AC4B] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF2FB] via-[#F4F7FC] to-[#F8FAFD] pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88] border border-[#303A88]/20">
                <MapPin className="w-3.5 h-3.5 text-[#303A88]" />
                Manjeri Patient Information
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#45AC4B]/15 text-[#1F5C24] border border-[#45AC4B]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#45AC4B]" />
                Evidence-Informed Healthcare
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight">
              Piles Homoeopathic Clinic in Manjeri
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Are you looking for information about piles consultation and treatment options in Manjeri, Kerala? Piles, also known as haemorrhoids, are a common condition affecting the blood vessels in and around the lower rectum and anus. Symptoms such as rectal bleeding, itching, swelling, and discomfort can interfere with daily activities and affect your quality of life. Understanding these symptoms and seeking appropriate medical advice are important steps towards managing the condition.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              Our Piles Homoeopathic Clinic in Manjeri aims to provide a welcoming environment where patients can discuss their health concerns, understand their symptoms, and receive information about available healthcare options. We encourage individuals experiencing piles-related symptoms to seek a proper medical assessment before deciding on a treatment approach.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#45AC4B] hover:bg-[#39933E] text-white font-semibold text-sm shadow-md shadow-[#45AC4B]/20 transition-all hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Consultation</span>
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
                <span>Ph: {phonePrimary}</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-[#64748B] flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#303A88] shrink-0" />
              <span>
                Whether you are searching for Piles Consultation in Manjeri, Piles Treatment in Manjeri, or a Piles Clinic in Manjeri, understanding the available options helps you make informed decisions.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-12 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#303A88]/10 flex items-center justify-center text-[#303A88]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Key Takeaways for Patients in Manjeri
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#303A88]/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#303A88] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0" />
                    <span>Point {idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-2">
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

      {/* Clinical Section 1: Understanding Piles & Haemorrhoids */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                CLINICAL OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
                Understanding Piles and Haemorrhoids
              </h2>
            </div>

            <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Piles, medically called haemorrhoids, are swollen vascular structures in the anal canal. They are commonly classified as <strong>internal</strong> or <strong>external</strong> haemorrhoids, depending on their location relative to the dentate line.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white border border-[#D8E1F5] shadow-xs">
                  <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#303A88]" />
                    Internal Haemorrhoids
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Develop inside the rectum. Because internal tissues have minimal pain receptors, they often present as painless, bright-red bleeding during bowel movements. In some cases, they enlarge and protrude through the anal opening (prolapse).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[#D8E1F5] shadow-xs">
                  <h3 className="font-bold text-[#1E2559] text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#45AC4B]" />
                    External Haemorrhoids
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Develop beneath the skin around the anus and are lined with sensitive somatic nerves. They may cause itching, swelling, or discomfort. When a blood clot forms within an external haemorrhoid (thrombosis), it can result in sudden, significant pain.
                  </p>
                </div>
              </div>

              <p className="pt-2">
                Several factors may contribute to haemorrhoid symptoms, including chronic constipation, straining during bowel movements, prolonged sitting on the toilet, low physical activity, and inadequate dietary fibre intake. Pregnancy and ageing can also increase the likelihood of developing haemorrhoids due to pelvic venous pressure and natural weakening of supportive tissues.
              </p>

              <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#D8E1F5] flex items-start gap-3">
                <Info className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
                  <strong>Important Clinical Note:</strong> Not every case of rectal bleeding or anal discomfort is caused by piles. Anal fissures, inflammatory bowel conditions (IBD), polyps, infections, and other gastrointestinal disorders can produce similar symptoms. A medical assessment helps determine the true cause and identify whether additional diagnostic investigation is needed.
                </p>
              </div>

              <p>
                If you are searching online for a <strong>Piles Specialist in Manjeri</strong>, prioritise a healthcare professional who can appropriately evaluate your symptoms, conduct a careful clinical review, and explain the full spectrum of available treatment choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section 2: Piles Consultation in Manjeri */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                WHAT TO EXPECT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
                Piles Consultation in Manjeri
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Arranging a Piles Consultation in Manjeri can be an important first step if you experience recurring anal discomfort, itching, swelling, or bleeding during bowel movements.
            </p>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              During a consultation, a healthcare professional may ask when your symptoms began, how frequently they occur, whether you experience pain during or after defecation, and whether your bowel habits have changed. Your medical history, current medicines, and any previous treatments may also be relevant. Depending on your symptoms, the assessment may involve a physical examination or referral for proctoscopy or colonoscopy to distinguish haemorrhoids from other conditions that require different treatment.
            </p>

            {/* Preparation Checklist */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
              <h3 className="font-bold text-[#1E2559] text-base sm:text-lg flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#303A88]" />
                Before Attending an Appointment: Information to Prepare
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-4">
                Providing accurate information helps your healthcare professional understand your concerns and determine appropriate next steps:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                {preparationChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Avoid Delaying Care:</strong> If you have unexplained or persistent rectal bleeding, do not postpone medical assessment while trying unverified home remedies or alternative treatments. Bleeding should always be evaluated by a medical doctor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section 3: Treatment Options & Evidence */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                TREATMENT LANDSCAPE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
                Piles Treatment in Manjeri: Understanding Available Options
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              The appropriate approach to Piles Treatment in Manjeri depends on symptom severity, whether haemorrhoids are internal or external, and whether complications such as thrombosis or ulceration are present.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-5 rounded-xl bg-white border border-[#D8E1F5]">
                <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] flex items-center justify-center font-bold text-xs mb-3">
                  01
                </div>
                <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                  Conservative Management
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Dietary fibre optimization, increased fluid intake, warm sitz baths, and avoiding straining. These measures soften stool and reduce vascular engorgement.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#D8E1F5]">
                <div className="w-7 h-7 rounded-lg bg-[#303A88]/15 text-[#303A88] flex items-center justify-center font-bold text-xs mb-3">
                  02
                </div>
                <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                  Minimally Invasive Procedures
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Outpatient procedures such as rubber band ligation, sclerotherapy, or infrared coagulation for symptomatic internal haemorrhoids that fail conservative care.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#D8E1F5]">
                <div className="w-7 h-7 rounded-lg bg-[#1E2559]/15 text-[#1E2559] flex items-center justify-center font-bold text-xs mb-3">
                  03
                </div>
                <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                  Surgical Procedures
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Haemorrhoidectomy or stapled haemorrhoidopexy for advanced Grade III or Grade IV prolapsed piles, or acutely strangulated thrombosed cushions.
                </p>
              </div>
            </div>

            {/* Scientific Evidence Transparency Box */}
            <div className="mt-6 p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Scientific Evidence on Homoeopathic Treatment for Piles
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Patients in Manjeri often inquire whether homoeopathy can treat piles without procedural intervention. It is essential to communicate transparently: <strong>current scientific evidence from peer-reviewed clinical trials does not establish homoeopathy as an effective treatment for haemorrhoids beyond placebo.</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    While some patients choose to explore homoeopathy alongside dietary and lifestyle adjustments, it should never replace a proper clinical diagnosis, nor should it be used as a reason to postpone necessary conventional medical or surgical interventions when red flags or advanced disease are present.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section 4: Making an Informed Choice */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                SELECTION CRITERIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
                Piles Homoeopathic Clinic in Manjeri: Making an Informed Choice
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              When choosing a healthcare clinic in Manjeri or across Malappuram district, patients should carefully evaluate key standards of clinical practice:
            </p>

            <div className="space-y-4 pt-2">
              {choiceFactors.map((factor) => (
                <div
                  key={factor.number}
                  className="p-5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <span className="text-lg font-black text-[#303A88] font-editorial px-3 py-1 rounded-md bg-[#303A88]/10 shrink-0">
                    {factor.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1E2559] text-base">
                      {factor.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                      {factor.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section 5: What Patients Should Know */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                PATIENT ADVOCACY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
                Homoeopathy Clinic for Piles in Manjeri: What Patients Should Know
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Before beginning any course of treatment for piles symptoms, empower yourself by asking your healthcare provider these essential questions during your consultation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {questionsToAsk.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#D8E1F5] flex items-start gap-3"
                >
                  <HelpCircle className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#1E2559] font-medium leading-relaxed">
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section 6: When to Seek Medical Help / Red Flags */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>URGENT MEDICAL ATTENTION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Piles Doctor in Manjeri: When Should You Seek Medical Help?
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Certain symptoms cannot be managed with watchful waiting or conservative care. If you experience any of the following red flags, seek immediate medical care from an emergency facility or qualified colorectal specialist in Manjeri:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {redFlags.map((flag, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-rose-50/50 border border-rose-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wide mb-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Red Flag {idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-rose-950 text-sm sm:text-base mb-1.5">
                      {flag.title}
                    </h3>
                    <p className="text-xs text-rose-900/80 leading-relaxed">
                      {flag.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Section 7: Lifestyle Measures */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
                PRACTICAL PREVENTION & CARE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
                Lifestyle Measures That May Help Manage Haemorrhoid Symptoms
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Regardless of the medical approach you choose, foundational lifestyle adjustments reduce pelvic vascular congestion and help maintain comfortable bowel habits:
            </p>

            <div className="space-y-4 pt-2">
              {lifestyleHabits.map((habit) => (
                <div
                  key={habit.number}
                  className="p-5 rounded-xl bg-white border border-[#D8E1F5] flex items-start gap-4 shadow-2xs"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] font-bold text-sm flex items-center justify-center shrink-0">
                    {habit.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1E2559] text-base">
                      {habit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                      {habit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Questions Patients Ask About Piles in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Accurate, evidence-informed answers to guide your healthcare decisions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#D8E1F5] overflow-hidden bg-[#F8FAFD] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#EEF2FB]/50 transition-colors"
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
      <section id="booking-section" className="py-16 bg-[#EEF2FB] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book a Confidential Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Online video consultations or in-person clinic appointments at our Kuttippuram and Puthanathani branches.
            </p>
          </div>

          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Closing Call to Action & Clinic Contact Info */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] to-[#28327A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#86EFAC]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Take the Next Step Towards Informed Healthcare
          </h2>

          <p className="text-sm sm:text-base text-[#D3DBF4] max-w-2xl mx-auto leading-relaxed">
            Contact our clinic to discuss consultation availability and learn about the services offered. Whether you reside in Manjeri, Malappuram, or neighboring areas, we are committed to clear medical assessment and ethical healthcare.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#303A88]" />
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

          {/* Regional Clinic Locations info */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-xs text-[#CBD5E1]">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#45AC4B]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#45AC4B]" />
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
