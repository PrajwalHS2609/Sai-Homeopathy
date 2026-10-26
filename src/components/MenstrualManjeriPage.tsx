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
  Award,
  UserCheck,
  Lock,
} from 'lucide-react';

export const MenstrualManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Menstrual Health & Treatment (Manjeri patient guide).'
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
    navigateToBookingWithReason('Menstrual Health Consultation - Manjeri', 'online');
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
      title: 'Essential Part of Well-Being',
      desc: 'Menstrual health is an important part of overall physical and reproductive well-being for women of all ages.',
    },
    {
      title: 'Seek Qualified Assessment',
      desc: 'Persistent irregular periods, heavy bleeding, and severe menstrual pain should be assessed by a qualified healthcare professional.',
    },
    {
      title: 'Individualized Consultation',
      desc: 'A Menstrual Disorder Consultation in Manjeri can help determine whether diagnostic investigations or specialist referral are needed.',
    },
    {
      title: 'Record Keeping Helps',
      desc: 'Keeping a record of menstrual dates, bleeding patterns, and symptoms can support a more informed and accurate medical consultation.',
    },
    {
      title: 'Evidence-Based Care',
      desc: 'Treatment depends on the underlying cause and may include medication, hormonal treatment, iron supplementation, or specialist care.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'Reliable scientific evidence has not established homoeopathy as an effective treatment for menstrual disorders.',
    },
    {
      title: 'Do Not Replace Care',
      desc: 'Complementary healthcare should not replace necessary medical investigations or prescribed conventional treatment.',
    },
    {
      title: 'Emergency Red Flags',
      desc: 'Seek urgent medical care for extremely heavy bleeding, fainting, severe abdominal pain, or possible pregnancy accompanied by pain or bleeding.',
    },
    {
      title: 'Choose Providers Responsibly',
      desc: 'Choose a healthcare provider who communicates clearly, respects patient privacy, and does not promise unrealistic or guaranteed results.',
    },
  ];

  const commonConcerns = [
    'Irregular menstrual cycles (shorter, longer, or fluctuating intervals)',
    'Painful periods and severe lower abdominal cramps (dysmenorrhoea)',
    'Heavy menstrual bleeding (soaking through pads/tampons, passing clots)',
    'Periods that are unusually light or scanty in volume',
    'Missed, delayed, or absent periods (amenorrhoea)',
    'Premenstrual syndrome (PMS) with physical and emotional symptoms',
    'Bloating, pelvic heaviness, and breast tenderness before menstruation',
    'Fatigue, dizziness, and menstrual migraine headaches',
    'Mood changes, irritability, anxiety, and sleep disturbance before or during periods',
    'Menstrual symptoms associated with conditions such as endometriosis, adenomyosis, or polycystic ovary syndrome (PCOS)',
  ];

  const consultationDiscussionPoints = [
    'The exact date and duration of your last menstrual period (LMP)',
    'The usual length and regularity of your menstrual cycle over the past 6 to 12 months',
    'The duration, intensity, and heaviness of bleeding (number of sanitary pads used per day)',
    'The location, severity, character, and timing of period pain (cramping, radiating back/leg pain)',
    'Associated symptoms such as dizziness, lightheadedness, nausea, or cyclical headaches',
    'Current prescription medicines, contraceptive pills, dietary supplements, and laxatives',
    'Personal medical history and family history of gynecological, thyroid, or bleeding disorders',
    'Pregnancy possibility or recent reproductive health events, where relevant',
    'Lifestyle factors, occupational stress levels, sleep regularity, and recent changes in weight',
    'The clinical rationale for blood tests, pelvic ultrasonography, or gynaecologist referral',
  ];

  const commonProblems = [
    {
      id: 'irregular-periods',
      title: '1. Irregular Periods',
      desc: 'Irregular periods occur when menstrual cycles vary considerably in length or menstruation happens unpredictably. Occasional changes may occur because of stress, illness, travel, or normal hormonal variation. Persistent irregularity, however, can sometimes be associated with PCOS, thyroid disorders, significant weight changes, or other health conditions. Women seeking Period Problems Treatment in Manjeri should consider a medical assessment if irregular periods continue, menstruation stops unexpectedly, or changes occur alongside other symptoms.',
      tip: 'Keeping a menstrual calendar can help record the first day of each period, the duration of bleeding, and associated symptoms for your doctor.',
    },
    {
      id: 'painful-periods',
      title: '2. Painful Periods',
      desc: 'Menstrual cramps are common and may occur shortly before or during menstruation. Some women experience mild discomfort, while others have severe pain that affects their ability to attend work, school, or routine activities. Painful periods can sometimes be associated with conditions such as endometriosis, adenomyosis, or fibroids. Severe, worsening, or persistent pain deserves medical evaluation rather than being dismissed as a normal part of menstruation.',
      tip: 'A Period Pain Consultation in Manjeri can help women discuss the severity and timing of symptoms to determine whether specialist referral is needed.',
    },
    {
      id: 'heavy-bleeding',
      title: '3. Heavy Menstrual Bleeding (Menorrhagia)',
      desc: 'Heavy menstrual bleeding may involve soaking through sanitary products frequently, needing to change protection during the night, passing large blood clots, or experiencing prolonged bleeding. Heavy periods can interfere with everyday activities and may lead to iron deficiency or anaemia. Symptoms such as unusual tiredness, weakness, breathlessness, dizziness, or paleness should be taken seriously.',
      tip: 'A healthcare professional may recommend blood tests (such as haemoglobin and ferritin) to identify the cause and prevent complications.',
    },
    {
      id: 'pms',
      title: '4. Premenstrual Syndrome (PMS)',
      desc: 'Premenstrual syndrome refers to physical and emotional symptoms that occur before menstruation. These may include bloating, breast tenderness, headaches, irritability, fatigue, changes in appetite, and mood fluctuations. Symptoms vary between individuals and from one cycle to another. Tracking symptoms over several cycles can help identify whether they follow a consistent luteal-phase pattern.',
      tip: 'Lifestyle measures, gentle exercise, adequate sleep, and a balanced diet may help. Severe mood symptoms warrant professional evaluation.',
    },
    {
      id: 'missed-periods',
      title: '5. Missed or Delayed Periods',
      desc: 'A delayed or missed period can occur for several reasons, including pregnancy, stress, changes in body weight, intensive exercise, breastfeeding, hormonal conditions, and certain medicines. If pregnancy is possible, taking an appropriate pregnancy test is an important first step. Persistent absence of menstruation should be assessed by a healthcare professional to identify the underlying cause.',
      tip: 'A missed period accompanied by severe abdominal pain, fainting, or spotting requires urgent medical attention to rule out ectopic pregnancy.',
    },
  ];

  const clinicChoiceFactors = [
    {
      title: 'Qualified Practitioners',
      desc: 'Check the practitioner’s recognized qualifications (such as BHMS), registration with state medical councils, and clear clinical scope of practice.',
    },
    {
      title: 'Clear Communication',
      desc: 'The provider should listen carefully, explain the limitations of proposed treatments, and answer questions honestly without making unrealistic promises.',
    },
    {
      title: 'Appropriate Assessment',
      desc: 'Persistent irregular periods, heavy bleeding, or severe pain may require diagnostic investigations (ultrasound, hormonal profiles) or referral to a gynaecologist.',
    },
    {
      title: 'Transparent Treatment Information',
      desc: 'Patients should understand the purpose, expected benefits, possible risks, costs, and limitations of any recommended supportive treatment.',
    },
    {
      title: 'Respect for Privacy',
      desc: 'Menstrual health is deeply personal. Patients should feel respected, secure, and fully comfortable discussing symptoms in a safe, confidential environment.',
    },
    {
      title: 'Coordination with Medical Care',
      desc: 'Complementary healthcare should never delay necessary investigations or interfere with prescribed medical treatments and conventional prescriptions.',
    },
  ];

  const everydayHabits = [
    {
      title: 'Maintain a Balanced Diet',
      desc: 'Include a variety of vegetables, fruits, whole grains, protein-rich foods, and iron-dense sources. Women experiencing heavy bleeding require assessment for iron deficiency rather than relying on food adjustments alone.',
    },
    {
      title: 'Stay Physically Active',
      desc: 'Regular, moderate physical activity supports circulation and may help some women manage pelvic discomfort. Choose activities that suit your fitness level and reduce intensity during heavy flow days.',
    },
    {
      title: 'Prioritise Sleep & Rest',
      desc: 'Maintaining a consistent sleep routine of 7–8 hours supports circadian rhythms, energy levels, and emotional balance, particularly in the premenstrual phase.',
    },
    {
      title: 'Manage Stress Mindfully',
      desc: 'High cortisol and stress can disrupt the hypothalamic-pituitary-ovarian axis, altering cycle regularity. Gentle breathing, social support, and balanced pacing can be restorative.',
    },
    {
      title: 'Track Your Menstrual Cycle',
      desc: 'Record the start date, duration, flow volume, cramp severity, and accompanying symptoms in a paper journal or mobile app. This data is invaluable during clinical consultations.',
    },
    {
      title: 'Avoid Self-Medicating',
      desc: 'Do not consume hormonal pills, unverified concoctions, or remedies intended to forcibly induce menstruation without proper medical guidance and pregnancy confirmation.',
    },
  ];

  const whenToConsult = [
    'Periods that repeatedly occur much earlier or later than expected (cycle lengths under 21 or over 35 days)',
    'Menstrual bleeding lasting longer than 7 days continuously',
    'Heavy bleeding that requires changing pads/tampons every 1–2 hours or passing clots larger than a coin',
    'Period pain that impairs your ability to attend work, school, or routine activities despite rest',
    'Bleeding or spotting between periods or following sexual intercourse',
    'Repeatedly missed periods when pregnancy is not the explanation',
    'Symptoms of anaemia, such as persistent exhaustion, weakness, paleness, or shortness of breath',
    'Menstrual changes accompanied by unexplained weight changes, severe acne, or hirsutism (unusual facial hair)',
  ];

  const emergencyRedFlags = [
    {
      title: 'Extremely Heavy Bleeding',
      desc: 'Soaking through two or more thick pads per hour for several consecutive hours, or bleeding that does not slow down.',
    },
    {
      title: 'Fainting, Dizziness, or Collapse',
      desc: 'Feeling lightheaded, losing consciousness, or experiencing severe pallor and racing pulse from acute blood loss.',
    },
    {
      title: 'Severe, Sudden, or Unbearable Abdominal Pain',
      desc: 'Acute sharp pelvic pain that comes on abruptly, which may indicate ovarian cyst rupture, torsion, or appendicitis.',
    },
    {
      title: 'Pregnancy Possibility with Pain or Bleeding',
      desc: 'Positive pregnancy test or missed period with one-sided pelvic pain or vaginal bleeding (high risk of ectopic pregnancy).',
    },
  ];

  const faqs = [
    {
      question: '1. Where can I seek Menstrual Homoeopathic Treatment in Manjeri?',
      answer:
        'Women in Manjeri can research local healthcare providers and check their recognized qualifications (such as BHMS), registration with state medical councils, and services offered. Before choosing a homoeopathic provider, understand that homoeopathy has not been shown reliably to treat menstrual disorders in scientific trials. Persistent, painful, or severe symptoms should always be assessed by a qualified medical doctor or gynaecologist.',
    },
    {
      question: '2. What are the common symptoms of menstrual problems?',
      answer:
        'Common symptoms include irregular cycles, painful abdominal cramps, unusually heavy bleeding, missed periods, bloating, cyclical headaches, breast tenderness, fatigue, and mood fluctuations. The clinical significance of these symptoms depends on their frequency, severity, duration, and the extent to which they affect daily life.',
    },
    {
      question: '3. When should I consult a Menstrual Problems Doctor in Manjeri?',
      answer:
        'Arrange an appointment if your periods become persistently irregular, bleeding is unusually heavy, pain interferes with everyday activities, or you experience repeated missed periods. Sudden severe pelvic pain, fainting, or extremely heavy bleeding requires immediate emergency medical attention.',
    },
    {
      question: '4. Can homoeopathy cure irregular periods?',
      answer:
        'There is no reliable scientific evidence that homoeopathy cures irregular periods or permanently eliminates their underlying biological causes. Irregular menstruation can stem from conditions such as polycystic ovary syndrome (PCOS), thyroid disorders, significant weight changes, chronic stress, or pregnancy. Appropriate clinical assessment helps identify the true cause and guide effective care.',
    },
    {
      question: '5. What should I discuss during a Period Pain Consultation in Manjeri?',
      answer:
        'Explain exactly when the pain begins, its location and severity, how long it lasts, and whether it prevents you from working, studying, or sleeping. Mention any heavy bleeding, fever, dizziness, unusual vaginal discharge, or possibility of pregnancy. This detailed information allows the clinician to determine whether further investigations (such as a pelvic ultrasound) are warranted.',
    },
    {
      question: '6. Can lifestyle changes improve menstrual health?',
      answer:
        'Yes. Regular physical activity, balanced nutrition rich in iron and wholesome nutrients, adequate sleep, and mindful stress management support general hormonal balance and may help many women manage mild symptoms. However, lifestyle habits alone cannot cure structural conditions like endometriosis, uterine fibroids, or severe hormonal disorders, which require medical management.',
    },
    {
      question: '7. Do irregular periods always indicate a medical problem?',
      answer:
        'No. Menstrual cycle length naturally varies across life stages—such as during adolescence, after childbirth, during breastfeeding, and during perimenopause. Temporary changes can also occur due to stress, travel, or acute illness. However, persistent irregularity, repeated missed cycles, or accompanying symptoms like severe pain and heavy bleeding should always be evaluated.',
    },
    {
      question: '8. What should I look for in a Homoeopathy Clinic for Menstrual Problems in Manjeri?',
      answer:
        'Look for verified qualifications (BHMS from recognized universities), active medical council registration, clear and honest communication regarding treatment scope and evidence, strict patient confidentiality, and a willingness to refer to gynaecologists for diagnostic ultrasound or blood work. Avoid providers who guarantee miraculous cures, promise to reverse PCOS, or advise stopping prescribed conventional medications.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Mobile / Quick Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-3 shadow-lg flex items-center justify-between sm:hidden">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#E11D48] uppercase tracking-wide">
              Menstrual Health Guide
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
              className="px-3.5 py-2 rounded-lg bg-[#E11D48] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Doctor Profile on Left */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF2F4] via-[#F8FAFD] to-[#F8FAFD] pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-[#F4D1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Doctor Profile Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-[#F4D1D8] shadow-md hover:shadow-lg transition-all">
                
                {/* Doctor Visual & Credentials */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#FBCFE8] mb-5 group bg-slate-100">
                  <img
                    src="/images/dr-anjali-women-doctor.jpg"
                    alt="Dr. Anjali Chandrasekhar (BHMS) - Menstrual Health & Women's Care"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to SVG if image not found
                      e.currentTarget.src = '/images/treatment-womens-health.svg';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2559]/90 via-[#1E2559]/20 to-transparent pointer-events-none" />

                  {/* Registered Medical Council Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#E11D48] border border-[#FBCFE8] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Kerala Council Reg: 16503</span>
                  </div>

                  {/* Doctor Details at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-editorial text-xl font-bold text-white">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs text-[#FBCFE8] font-medium font-sans">
                      BHMS • Senior Homeopathic Physician
                    </p>
                    <p className="text-[11px] text-white/80 font-sans mt-0.5">
                      Women’s Health &amp; Constitutional Consultations
                    </p>
                  </div>
                </div>

                {/* 4 Interactive Credentials Cards */}
                <div className="grid grid-cols-2 gap-2.5 text-center font-sans mb-4">
                  <div className="bg-[#FFF1F2] rounded-xl p-2.5 border border-[#FFE4E6]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#E11D48] block tabular-nums">
                      10+ Years
                    </span>
                    <span className="text-[10px] text-[#881337] font-semibold uppercase tracking-wider">
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

                <div className="space-y-2 text-xs text-[#475569] border-t border-[#F4D1D8] pt-3">
                  <p className="flex items-center gap-1.5 text-[#1E2559] font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Confidential, patient-focused consultations for women in Manjeri and Malappuram district.</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[#64748B]">
                    <Lock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Private video consultations &amp; in-clinic visits available.</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F4D1D8] flex items-center justify-between gap-2">
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                  Manjeri Patient Information
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88] border border-[#303A88]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#303A88]" />
                  Evidence-Informed Healthcare
                </span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight">
                Menstrual Homoeopathic Treatment in Manjeri
              </h1>

              <div className="prose text-[#475569] space-y-3 text-sm sm:text-base leading-relaxed">
                <p>
                  Menstrual health is an important part of a woman's overall well-being. A regular menstrual cycle can provide useful information about reproductive health, while changes in periods may sometimes indicate an underlying health concern. Many women experience menstrual symptoms such as abdominal cramps, irregular periods, heavy bleeding, delayed menstruation, mood changes, fatigue, and discomfort before or during their periods. When these symptoms interfere with daily activities, seeking appropriate medical advice is an important step towards better menstrual health.
                </p>

                <p>
                  For women looking for <strong>Menstrual Homoeopathic Treatment in Manjeri</strong>, understanding menstrual symptoms and obtaining an appropriate health assessment can help them make informed decisions about their care. Menstrual concerns vary from person to person, and treatment should be guided by the symptoms, medical history, age, and possible underlying causes.
                </p>

                <p>
                  Women searching for <strong>Menstrual Treatment in Manjeri</strong> may have questions about irregular cycles, period pain, premenstrual symptoms, or changes in menstrual flow. A consultation provides an opportunity to discuss these concerns, understand potential contributing factors, and determine whether further examination or investigations are needed.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#F4D1D8] shadow-2xs">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    A women's health service in Manjeri can help patients understand their symptoms and identify suitable next steps. Homoeopathy may be discussed as a complementary approach, but <strong>it is important to understand that reliable scientific evidence has not established homoeopathy as an effective treatment for menstrual disorders</strong>. It should not replace evidence-based medical assessment or proven treatment options.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold text-sm shadow-md shadow-[#E11D48]/20 transition-all hover:shadow-lg"
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
                  <span>Call: {phonePrimary}</span>
                </a>
              </div>

              <p className="text-xs text-[#64748B] flex items-center gap-1.5 pt-1">
                <Info className="w-4 h-4 text-[#E11D48] shrink-0" />
                <span>
                  Consultations conducted with utmost privacy, compassionate case-listening, and evidence-based clinical guidance.
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
            <div className="w-8 h-8 rounded-lg bg-[#E11D48]/10 flex items-center justify-center text-[#E11D48]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Important Key Takeaways for Patients in Manjeri
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#E11D48]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E11D48] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
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

      {/* Section 1: Understanding Menstrual Health & Common Period Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Menstrual Health and Common Period Problems
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The menstrual cycle is a natural process regulated by hormonal changes that prepare the body for a possible pregnancy. The length and pattern of the cycle can vary, particularly during adolescence, after pregnancy, during breastfeeding, and in the years leading up to menopause.
            </p>

            <p>
              However, persistent changes in menstrual patterns or symptoms that affect everyday life should not be ignored. Women may experience different types of menstrual problems, and identifying the underlying cause is important for selecting appropriate care.
            </p>

            {/* Common Menstrual Concerns List */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
              <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#E11D48]" />
                Common Menstrual Concerns Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#334155]">
                {commonConcerns.map((concern, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                    <span>{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Women looking for a <strong>Menstrual Problems Doctor in Manjeri</strong> should consider seeking an assessment when symptoms become persistent, worsen over time, or interfere with work, education, sleep, exercise, or family responsibilities.
            </p>

            <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#D8E1F5] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
                Not every menstrual change indicates a serious condition. Nevertheless, understanding the difference between common cycle variations and symptoms requiring medical attention can help women make informed decisions about their health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Menstrual Homoeopathic Treatment in Manjeri: Understanding Your Options */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT LANDSCAPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Menstrual Homoeopathic Treatment in Manjeri: Understanding Your Options
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Women exploring <strong>Homoeopathic Treatment for Menstrual Problems in Manjeri</strong> may be interested in discussing their symptoms, general health, and treatment preferences with a healthcare professional. A consultation can provide an opportunity to explain the nature of the problem, how long it has been occurring, and how it affects everyday life.
            </p>

            <p>
              A responsible consultation should begin with a clear understanding of the patient's symptoms and medical history. Depending on the circumstances, the healthcare professional may recommend a physical examination, pregnancy testing, blood tests, an ultrasound, or referral to a gynaecologist.
            </p>

            {/* Scientific Evidence Transparency Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#303A88]/30 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#303A88] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1E2559] text-base sm:text-lg">
                    Distinguishing Consultation from Scientific Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    It is important to distinguish between discussing homoeopathy and establishing that it is effective. <strong>Current reliable scientific evidence does not demonstrate that homoeopathy can reliably treat menstrual disorders.</strong> Patients should therefore be informed about established treatment options and the importance of investigating persistent or severe symptoms.
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Evidence-based care for menstrual problems varies according to the underlying cause. For example, a healthcare professional may recommend appropriate pain-relieving medication, hormonal treatment, iron supplementation for confirmed iron deficiency, or further evaluation for conditions such as fibroids, endometriosis, thyroid disorders, or PCOS.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Women who prefer complementary healthcare can discuss their preferences openly with a qualified medical professional. Any complementary approach should be considered carefully, particularly if the patient is taking medication, planning a pregnancy, or experiencing significant menstrual symptoms.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Clinical Priority:</strong> The priority should always be an accurate assessment, appropriate treatment, and the prevention of avoidable complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Seek a Menstrual Health Consultation in Manjeri? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              WHAT HAPPENS DURING A VISIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Seek a Menstrual Health Consultation in Manjeri?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Menstrual symptoms can affect physical comfort, emotional well-being, and daily routines. Some women experience mild cramps that improve with simple measures, while others have pain or bleeding that significantly disrupts their lives.
          </p>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A <strong>Menstrual Disorder Consultation in Manjeri</strong> can help women discuss these symptoms and understand which steps may be appropriate. Seeking medical advice is especially important when a previously predictable cycle becomes irregular or when pain and bleeding become more severe.
          </p>

          {/* Consultation Checklist */}
          <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
            <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#303A88]" />
              During a Consultation, a Healthcare Professional May Discuss:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              {consultationDiscussionPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B]">
            These details help identify patterns and determine whether symptoms require additional investigation. Women searching for a <strong>Menstrual Health Clinic in Manjeri</strong> should look for a service that encourages open communication, respects privacy, explains treatment choices, and recognises when specialist care is necessary.
          </p>
        </div>
      </section>

      {/* Section 4: Common Menstrual Problems That May Require Medical Attention (5 In-Depth Cards) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              DIAGNOSTIC CRITERIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Menstrual Problems That May Require Medical Attention
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Understanding the clinical presentation of five primary menstrual disorders.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {commonProblems.map((prob) => (
              <div
                key={prob.id}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#E11D48]/30 transition-all space-y-3"
              >
                <h3 className="font-bold text-[#1E2559] text-lg sm:text-xl">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {prob.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#D8E1F5] flex items-center gap-2.5 text-xs text-[#303A88] font-medium">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>{prob.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Choosing a Women's Health Homoeopathy Clinic in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINIC EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Choosing a Women's Health Homoeopathy Clinic in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Women researching a <strong>Homoeopathy Clinic for Menstrual Problems in Manjeri</strong> may want a healthcare setting where they can discuss their concerns comfortably and receive clear information about available care. When choosing a provider, consider the following standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {clinicChoiceFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] space-y-2 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-[#1E2559] text-base">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            A Women's Health Homoeopathy Clinic in Manjeri should communicate honestly about the evidence supporting its services. Homoeopathy has not been proven to cure menstrual disorders, and patients should not be encouraged to stop prescribed medication or postpone appropriate medical care. The goal of any healthcare consultation should be to support informed decisions, recognise potential health risks, and help patients access suitable treatment.
          </div>
        </div>
      </section>

      {/* Section 6: The Role of a Homoeopathic Doctor for Women's Health in Manjeri */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PROFESSIONAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              The Role of a Homoeopathic Doctor for Women's Health in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              A <strong>Homoeopathic Doctor for Women's Health in Manjeri</strong> may provide a setting for patients to discuss menstrual concerns and ask questions about complementary healthcare. However, patients should confirm the practitioner's qualifications and understand the distinction between a homoeopathic consultation and specialist gynaecological assessment.
            </p>

            <p>
              Menstrual disorders can have several underlying causes, and symptoms alone may not be enough to identify the problem. For this reason, a healthcare professional should consider whether testing or referral is needed.
            </p>

            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-2">
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                Exercise Caution Regarding Unproven Clinical Claims
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-rose-900/90">
                Women should be particularly cautious about claims that a remedy can permanently regulate periods, reverse PCOS, eliminate fibroids, treat endometriosis, or guarantee fertility. Such outcomes should not be promised without reliable supporting scientific evidence.
              </p>
            </div>

            <p>
              If a patient chooses to explore complementary care, it is advisable to inform all healthcare providers about medicines, remedies, and supplements being used. This helps support safer and better-coordinated care. For severe pain, persistent irregularity, heavy bleeding, or symptoms suggestive of a significant medical condition, consultation with a qualified medical doctor or gynaecologist is important.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Everyday Habits That Support Menstrual Health */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#45AC4B] block">
              PRACTICAL SUPPORT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Everyday Habits That Support Menstrual Health
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Although lifestyle changes cannot treat every menstrual disorder, healthy daily habits may support general well-being and help women manage some symptoms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {everydayHabits.map((habit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-[#1E2559] text-base mb-1.5">
                    {habit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {habit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: When Should You Consult a Women's Health Doctor in Manjeri? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48] block">
              WHEN TO SEEK MEDICAL ATTENTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Consult a Women's Health Doctor in Manjeri?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              A Women's Health Doctor in Manjeri can help assess menstrual changes and determine whether further tests or treatment are necessary. Consider arranging a medical appointment if you experience:
            </p>
          </div>

          {/* Appointment indications checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {whenToConsult.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Urgent Emergency Red Flags */}
          <div className="pt-6">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-widest mb-3">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>URGENT MEDICAL ATTENTION REQUIRED</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyRedFlags.map((flag, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-rose-950 text-sm mb-1">
                      {flag.title}
                    </h3>
                    <p className="text-xs text-rose-900/80 leading-relaxed">
                      {flag.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#64748B] mt-3">
              Early assessment can help identify treatable causes and reduce the risk of complications. Patients should not assume that severe symptoms are simply a normal part of the menstrual cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: What to Expect During Menstrual Treatment in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT-CENTERED CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Expect During Menstrual Treatment in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Women arranging <strong>Menstrual Treatment in Manjeri</strong> can prepare for their appointment by recording their symptoms and noting when the changes began.
            </p>

            <p>
              The consultation may include questions about menstrual history, general health, medication use, family history, and reproductive health. Depending on the symptoms, a healthcare professional may recommend a pregnancy test, blood tests, hormone-related investigations, or an ultrasound.
            </p>

            <p>
              Not every patient needs every test. Investigations should be selected according to the person's symptoms, age, medical history, and clinical assessment.
            </p>

            <p>
              After the assessment, the healthcare professional should explain the possible causes, recommended next steps, and available treatment options. These may include symptom management, medication, lifestyle guidance, or referral to a gynaecologist.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#1E2559] font-medium leading-relaxed">
              Women seeking Homoeopathic Treatment for Menstrual Problems in Manjeri should ask questions about the scientific evidence for any proposed remedy and ensure that necessary medical investigations are not delayed. A patient-centred approach should prioritise safety, informed consent, realistic expectations, and access to evidence-based treatment.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (8 FAQs) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Questions Patients Ask About Menstrual Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Reliable, evidence-grounded answers to help women make informed decisions about menstrual health.
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
      <section id="booking-section" className="py-16 bg-[#FDF2F4] border-b border-[#F4D1D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E11D48]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Menstrual Health Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Confidential online video consultations or in-person visits at our Kuttippuram and Puthanathani branches.
            </p>
          </div>

          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Conclusion & Clinic Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] via-[#2A347D] to-[#1E2559] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#FBCFE8]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Conclusion &amp; Next Steps Towards Better Menstrual Health
          </h2>

          <div className="text-sm sm:text-base text-[#D3DBF4] max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Menstrual health concerns deserve careful attention, clear information, and appropriate medical assessment. Whether you are experiencing irregular periods, painful menstruation, heavy bleeding, or premenstrual symptoms, understanding the possible causes is an important step towards making informed decisions about your health.
            </p>
            <p>
              Women searching online for <strong>Menstrual Homoeopathic Treatment in Manjeri</strong>, <strong>Menstrual Health Clinic in Manjeri</strong>, or <strong>Period Problems Treatment in Manjeri</strong> should prioritise qualified healthcare providers who communicate honestly about treatment options and their limitations.
            </p>
            <p>
              A consultation can help you discuss your symptoms, understand whether further investigations are needed, and identify appropriate next steps. Homoeopathy has not been established as an effective treatment for menstrual disorders, so it should not replace evidence-based care.
            </p>
            <p className="font-medium text-white">
              By tracking menstrual changes, seeking timely medical advice, and choosing healthcare services that prioritise patient safety, women can take informed steps towards better menstrual health and overall well-being.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E11D48]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
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
