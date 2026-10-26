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
  Sun,
  Flame,
} from 'lucide-react';

export const SkinManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Phone numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Skin Health & Treatment (Manjeri patient guide).'
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
    navigateToBookingWithReason('Skin Health Consultation - Manjeri', 'online');
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
      title: 'Multifactorial Causes',
      desc: 'Skin problems can have many causes, including allergies, infections, inflammation, hormonal changes, and environmental triggers.',
    },
    {
      title: 'Accurate Diagnosis First',
      desc: 'An accurate diagnosis is important because different skin conditions may look similar but require completely different treatments.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'People searching for Skin Homoeopathic Treatment in Manjeri should understand that homoeopathy has not been proven effective for treating skin diseases.',
    },
    {
      title: 'Professional Medical Care',
      desc: 'Persistent acne, eczema, psoriasis, fungal infections, and unexplained rashes require clinical assessment by a qualified medical professional.',
    },
    {
      title: 'Avoid Self-Medicating',
      desc: 'Avoid self-medicating with prescription steroid creams or delaying appropriate treatment, which can worsen skin barrier damage.',
    },
    {
      title: 'Daily Barrier Care',
      desc: 'Gentle skincare, regular moisturizing, and broad-spectrum sun protection can support general skin health and barrier recovery.',
    },
    {
      title: 'Examine Credentials',
      desc: 'Check a practitioner’s qualifications and registration, and be cautious of unrealistic claims promising guaranteed or rapid cures.',
    },
    {
      title: 'Emergency Red Flags',
      desc: 'Seek urgent medical care for severe allergic reactions, rapidly spreading redness with fever, extensive blistering, or severe skin pain.',
    },
  ];

  const commonSkinConcerns = [
    'Acne and pimples (blackheads, whiteheads, cystic lesions)',
    'Eczema and dermatitis (atopic, contact, seborrhoeic)',
    'Psoriasis (plaque, guttate, inverse, or scalp psoriasis)',
    'Fungal skin infections (tinea, ringworm, athlete’s foot, candidiasis)',
    'Skin allergies, hives (urticaria), and recurring itchy rashes',
    'Dryness, barrier breakdown, and painful scaling',
    'Persistent itching (pruritus) without an obvious rash',
    'Raised, warm, itchy patches or wheals',
    'Skin pigmentation changes (hyperpigmentation, melasma, hypopigmentation)',
    'Scalp irritation, persistent dandruff, and folliculitis',
  ];

  const consultationPoints = [
    'When the symptoms first appeared and whether they have spread over time',
    'The precise location, pattern, and physical appearance of the affected skin',
    'Whether itching, pain, swelling, tenderness, or burning sensations are present',
    'Possible occupational or domestic exposure to allergens, chemicals, or irritating cosmetics',
    'Previous skin conditions, treatments tried, and response to earlier therapies',
    'Current prescription medicines, topical creams, vitamins, and dietary supplements',
    'Relevant family history of allergies, atopy, eczema, asthma, or autoimmune skin conditions',
    'Whether skin symptoms disrupt sleep, confidence, or everyday social and work activities',
    'Whether skin scraping, patch testing, blood tests, or dermatologist referral are indicated',
  ];

  const commonConditions = [
    {
      id: 'acne-pimples',
      title: '1. Acne and Pimples',
      desc: 'Acne is a common skin condition that develops when hair follicles become blocked by excess sebum and dead skin cells. It may cause blackheads, whiteheads, pimples, inflamed papules, or deeper painful cystic lesions. Hormonal fluctuations, genetics, certain medications, and pore-clogging products contribute to its development.',
      tip: 'Avoid squeezing pimples, as this increases inflammation and scarring risk. Seek a medical assessment when acne is persistent, painful, or scarring.',
    },
    {
      id: 'eczema-dermatitis',
      title: '2. Eczema and Dermatitis',
      desc: 'Eczema comprises a group of conditions that cause dry, itchy, inflamed skin with redness, scaling, and cracked surfaces. Dermatitis can develop from genetic skin-barrier defects, irritants, or allergic contact. Flare-ups occur periodically and require ongoing barrier maintenance.',
      tip: 'Regular moisturizing, avoiding identified triggers, and using prescribed anti-inflammatory topical care form the cornerstone of management.',
    },
    {
      id: 'psoriasis',
      title: '3. Psoriasis',
      desc: 'Psoriasis is a chronic autoimmune inflammatory condition causing accelerated skin cell turnover, resulting in raised, red plaques covered with silvery scales on elbows, knees, scalp, or lower back. It is non-contagious and varies from mild to extensive involvement.',
      tip: 'Medical assessment is essential, especially when patches are extensive or accompanied by joint pain. Be cautious of claims promising permanent unproven cures.',
    },
    {
      id: 'fungal-infections',
      title: '4. Fungal Skin Infections',
      desc: 'Fungal skin infections affect areas such as the feet (tinea pedis), groin (jock itch), body (ringworm), and scalp. Symptoms include intense itching, scaling, and ring-shaped lesions with raised edges. Warm, humid climates and shared towels facilitate fungal growth.',
      tip: 'Accurate diagnosis is crucial because fungal infections resemble eczema. Established antifungal treatment is necessary; delaying it can cause spreading.',
    },
    {
      id: 'skin-allergies-rashes',
      title: '5. Skin Allergies and Rashes',
      desc: 'Allergic and irritant contact reactions cause sudden redness, itching, swelling, or blistering patches. Triggers include fragrances, preservatives, hair dyes, metals (nickel), detergents, and plants. Identifying and eliminating the allergen is the key step.',
      tip: 'Seek emergency medical help if a rash coincides with difficulty breathing, facial/throat swelling, or faintness (signs of anaphylaxis).',
    },
    {
      id: 'dry-skin-itching',
      title: '6. Dry Skin and Persistent Itching (Pruritus)',
      desc: 'Dry skin develops from environmental exposure, harsh soaps, low humidity, or underlying health issues. Ongoing itching without a clear rash can sometimes be associated with allergies, medication reactions, thyroid disorders, or internal conditions.',
      tip: 'Mild dryness responds to gentle cleansers and barrier creams. However, unexplained persistent itching should always be assessed clinically.',
    },
  ];

  const clinicChoiceStandards = [
    {
      title: 'Professional Qualifications',
      desc: 'Check the practitioner’s accredited qualifications (such as BHMS) and active registration with the state medical council in Kerala.',
    },
    {
      title: 'Accurate Assessment',
      desc: 'Skin symptoms can have multiple overlapping causes. The provider should recognize when physical examination, dermoscopy, or laboratory testing is required.',
    },
    {
      title: 'Transparent Communication',
      desc: 'Patients must receive honest information about treatment possibilities, evidence limitations, and when conventional medical therapies are indispensable.',
    },
    {
      title: 'Realistic Expectations',
      desc: 'Be cautious of providers advertising guaranteed cures or rapid miraculous relief for chronic conditions like psoriasis or eczema.',
    },
    {
      title: 'Patient Privacy & Dignity',
      desc: 'Skin concerns can be emotionally sensitive. Consultations should take place in a private, supportive, and non-judgmental environment.',
    },
    {
      title: 'Coordination with Medical Care',
      desc: 'Complementary approaches should never interfere with prescribed dermatologist treatments, oral antifungals, or essential antibiotics.',
    },
  ];

  const everydayHabits = [
    {
      number: '01',
      title: 'Maintain a Gentle Skincare Routine',
      desc: 'Cleanse with mild, soap-free cleansers. Avoid harsh scrubbing or abrasive exfoliants that strip the protective lipid mantle.',
    },
    {
      number: '02',
      title: 'Moisturise Regularly',
      desc: 'Apply a fragrance-free, ceramide-rich moisturiser within three minutes after bathing to lock in hydration and reinforce the epidermal barrier.',
    },
    {
      number: '03',
      title: 'Protect Your Skin from the Sun',
      desc: 'Apply broad-spectrum sunscreen (SPF 30+) daily, wear protective clothing, and seek shade during peak UV hours to prevent post-inflammatory hyperpigmentation.',
    },
    {
      number: '04',
      title: 'Maintain a Balanced Diet',
      desc: 'Consume plenty of fresh vegetables, fruits, whole grains, and healthy fats rich in omega-3s. Stay well hydrated throughout the day.',
    },
    {
      number: '05',
      title: 'Avoid Self-Medicating with Steroid Creams',
      desc: 'Never apply over-the-counter steroid creams or strong bleaching agents without medical guidance; misuse can cause skin thinning, dependence, and severe rebound.',
    },
    {
      number: '06',
      title: 'Identify & Avoid Potential Triggers',
      desc: 'If flare-ups correlate with specific cosmetics, detergents, or synthetic fabrics, discontinue use promptly and note the reaction.',
    },
    {
      number: '07',
      title: 'Follow Your Clinical Treatment Plan',
      desc: 'Adhere consistently to prescribed applications and attend scheduled follow-ups to evaluate objective skin healing.',
    },
  ];

  const whenToConsultDoctor = [
    'A rash that persists, spreads rapidly, or repeatedly returns after clearing',
    'Severe, unremitting itching that disrupts your sleep or daily concentration',
    'Painful, hot, swollen, or inflamed skin that feels warm to the touch',
    'Acne that is causing deep cysts, nodules, or permanent textural scars',
    'Patches of skin that become excessively thickened, cracked, or bleed',
    'A suspected fungal infection that is expanding despite home remedies',
    'A mole or pigmented spot that changes in size, border, color, or symmetry',
    'A skin wound, ulcer, or lesion that does not heal within two weeks',
    'Skin symptoms that worsen or fail to respond to standard skincare measures',
  ];

  const emergencyRedFlags = [
    {
      title: 'Rapidly Spreading Redness with Fever',
      desc: 'Warm, tender redness spreading across the skin accompanied by chills and fever, signaling possible cellulitis requiring immediate antibiotics.',
    },
    {
      title: 'Extensive Blistering or Skin Peeling',
      desc: 'Sudden widespread formation of fluid-filled blisters, skin sloughing, or mouth/eye sores requiring emergency hospital care.',
    },
    {
      title: 'Severe, Sudden Skin Pain',
      desc: 'Disproportionately severe skin pain that can indicate a deep soft-tissue infection needing urgent surgical evaluation.',
    },
    {
      title: 'Severe Allergic Anaphylaxis Signs',
      desc: 'Hives accompanied by facial swelling, lip or tongue edema, wheezing, breathlessness, or dizziness requiring emergency intervention.',
    },
  ];

  const faqs = [
    {
      question: '1. Where can I find Skin Homoeopathic Treatment in Manjeri?',
      answer:
        'You can research healthcare providers in Manjeri and verify their accredited qualifications (such as BHMS), registration with the state medical council, and clinical experience. Before selecting a homoeopathic provider, understand that homoeopathy has not been shown reliably in scientific trials to treat skin diseases. Persistent, painful, or severe skin conditions should always be evaluated by a qualified medical practitioner or dermatologist.',
    },
    {
      question: '2. What skin problems may require medical consultation?',
      answer:
        'Skin concerns warranting medical assessment include persistent acne, eczema, psoriasis, recurrent rashes, suspected fungal infections, unexplained chronic itching, changing moles, and non-healing sores. The degree of urgency depends on symptom severity, duration, and whether signs of infection are present.',
    },
    {
      question: '3. Is Homoeopathic Skin Treatment in Manjeri effective for eczema?',
      answer:
        'Reliable scientific clinical evidence has not established homoeopathy as an effective medical treatment for eczema beyond placebo. Evidence-based care relies on regular emollient barrier repair, identifying and avoiding environmental triggers, and medically prescribed anti-inflammatory treatments tailored to flare severity.',
    },
    {
      question: '4. When should I consult a Skin Doctor in Manjeri?',
      answer:
        'Consult a doctor if a rash spreads, itching becomes intractable, acne causes scarring, or symptoms fail to improve with gentle skincare. Immediate emergency care is essential for serious allergic reactions, extensive skin blistering, rapidly spreading redness with fever, or severe skin pain.',
    },
    {
      question: '5. Can fungal skin infections be treated with homoeopathy?',
      answer:
        'Homoeopathy has not been demonstrated to cure fungal skin infections. Fungal conditions (like ringworm, athlete’s foot, or jock itch) generally require targeted topical or oral antifungal medications. Accurate diagnosis is vital because fungal infections closely resemble eczema, and improper steroid use can cause fungal spreading (tinea incognito).',
    },
    {
      question: '6. What should I look for when choosing a Skin Specialist in Manjeri?',
      answer:
        'Look for recognized medical qualifications, active professional registration, clinical transparency regarding treatment capabilities and limitations, and a willingness to perform diagnostic scrapings, biopsies, or blood tests when indicated. Qualified dermatologists are the appropriate choice for complex, persistent, or diagnostic challenges.',
    },
    {
      question: '7. How can I maintain healthy skin?',
      answer:
        'Adopt a gentle daily skincare regimen with soap-free cleansers, moisturize within minutes of bathing, wear daily sun protection (SPF 30+), eat a wholesome nutrient-rich diet, avoid harsh self-prescribed steroid creams, and seek timely professional advice when skin concerns arise.',
    },
    {
      question: '8. Can I stop prescribed skin medication if I want to try homoeopathy?',
      answer:
        'No. Never discontinue or alter prescribed medical treatments—such as oral antibiotics, antifungals, immunosuppressants, or prescription topicals—without direct consultation with your prescribing doctor. Abruptly stopping prescribed medications can cause severe flare-ups, infection spread, or disease complications.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Mobile / Quick Action Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8E1F5] p-3 shadow-lg flex items-center justify-between sm:hidden">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wide">
              Skin Health Guide
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
              className="px-3.5 py-2 rounded-lg bg-[#F59E0B] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consult</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Doctor Profile on Left */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FEF8EE] via-[#F8FAFD] to-[#F8FAFD] pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-[#FDE68A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Doctor Profile Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-[#FDE68A] shadow-md hover:shadow-lg transition-all">
                
                {/* Doctor Visual & Credentials */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#FDE68A] mb-5 group bg-slate-100">
                  <img
                    src="/images/dr-anjali-portrait-closeup.jpg"
                    alt="Dr. Anjali Chandrasekhar (BHMS) - Skin Health & Constitutional Consultations"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/treatment-skin-hair.svg';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2559]/90 via-[#1E2559]/20 to-transparent pointer-events-none" />

                  {/* Registered Medical Council Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#B45309] border border-[#FDE68A] shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Kerala Council Reg: 16503</span>
                  </div>

                  {/* Doctor Details at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-editorial text-xl font-bold text-white">
                      Dr. Anjali Chandrasekhar
                    </h3>
                    <p className="text-xs text-[#FDE68A] font-medium font-sans">
                      BHMS • Senior Homeopathic Physician
                    </p>
                    <p className="text-[11px] text-white/80 font-sans mt-0.5">
                      Skin &amp; Hair Constitutional Consultations
                    </p>
                  </div>
                </div>

                {/* 4 Interactive Credentials Cards */}
                <div className="grid grid-cols-2 gap-2.5 text-center font-sans mb-4">
                  <div className="bg-[#FFFBEB] rounded-xl p-2.5 border border-[#FEF3C7]">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#B45309] block tabular-nums">
                      10+ Years
                    </span>
                    <span className="text-[10px] text-[#78350F] font-semibold uppercase tracking-wider">
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

                <div className="space-y-2 text-xs text-[#475569] border-t border-[#FDE68A] pt-3">
                  <p className="flex items-center gap-1.5 text-[#1E2559] font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Confidential, individualized consultations for patients in Manjeri and Malappuram district.</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[#64748B]">
                    <Lock className="w-3.5 h-3.5 text-[#303A88]" />
                    <span>Private online video consultations &amp; in-clinic visits available.</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#FDE68A] flex items-center justify-between gap-2">
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Manjeri Patient Information
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88] border border-[#303A88]/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#303A88]" />
                  Evidence-Informed Healthcare
                </span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight">
                Skin Homoeopathic Treatment in Manjeri
              </h1>

              <div className="prose text-[#475569] space-y-3 text-sm sm:text-base leading-relaxed">
                <p>
                  Healthy skin is an important part of overall well-being. However, many people experience skin concerns such as acne, itching, rashes, dryness, redness, eczema, psoriasis, and recurring skin irritation. These conditions can affect physical comfort, confidence, and everyday activities. Understanding the possible causes of skin problems and seeking appropriate medical advice are important steps towards maintaining skin health.
                </p>

                <p>
                  For people searching for <strong>Skin Homoeopathic Treatment in Manjeri</strong>, it is important to understand the available healthcare options and the need for an accurate assessment of skin symptoms. Skin conditions can develop for many reasons, including allergies, infections, hormonal changes, environmental exposure, genetic factors, and underlying medical conditions. The appropriate approach depends on the specific condition and the individual's health history.
                </p>

                <p>
                  People looking for <strong>Skin Treatment in Manjeri</strong> may have concerns about persistent itching, acne, skin discolouration, dry patches, or recurring rashes. Although some skin problems improve with simple skincare measures, others require prescription medication, laboratory testing, or assessment by a qualified dermatologist.
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#FDE68A] shadow-2xs">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    A consultation at a Skin Health Clinic in Manjeri can help individuals understand their symptoms, discuss their medical history, and determine whether further examination or specialist care is needed. Patients interested in complementary healthcare should also understand the scientific evidence: <strong>homoeopathy has not been shown by reliable scientific evidence to be an effective treatment for skin diseases</strong>. It should not replace proven medical care, particularly for infections or conditions that can worsen without appropriate treatment.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm shadow-md shadow-[#F59E0B]/20 transition-all hover:shadow-lg"
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
                <Info className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>
                  Consultations prioritize diagnostic clarity, safe treatment choices, and realistic expectations for skin recovery.
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
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#F59E0B] block">
                EXECUTIVE SUMMARY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2559]">
                Important Key Takeaways for Patients in Manjeri
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#F59E0B]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
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

      {/* Section 1: Understanding Common Skin Problems */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Understanding Common Skin Problems
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Skin is the body's largest organ and provides a protective barrier against environmental factors. Its appearance and condition can be influenced by genetics, hormones, nutrition, climate, personal care products, and general health.
            </p>

            <p>
              Some skin conditions are temporary, while others may persist or recur over time. Recognising the symptoms and understanding when to seek medical advice can help people make informed decisions about their care.
            </p>

            {/* Common Skin Concerns List */}
            <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
              <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#F59E0B]" />
                Common Skin Concerns Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#334155]">
                {commonSkinConcerns.map((concern, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              People searching for <strong>Skin Problems Treatment in Manjeri</strong> should remember that different conditions can produce similar symptoms. For example, an itchy, red rash may be caused by eczema, an allergic reaction, or a fungal infection. These conditions require very different treatments.
            </p>

            <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#D8E1F5] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#303A88] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#303A88] font-medium leading-relaxed">
                A proper assessment is essential before choosing a treatment approach. Using an unsuitable cream (such as applying topical steroids to an undiagnosed fungal infection) or delaying medical care can worsen a skin condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Skin Homoeopathic Treatment in Manjeri: Understanding Your Options */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              TREATMENT LANDSCAPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Skin Homoeopathic Treatment in Manjeri: Understanding Your Options
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              People exploring <strong>Homoeopathic Skin Treatment in Manjeri</strong> may want to discuss recurring skin symptoms, their treatment preferences, and general health concerns with a healthcare professional.
            </p>

            <p>
              A responsible consultation begins with an understanding of the patient's symptoms, medical history, previous treatments, allergies, and any factors that may trigger or worsen the condition. Depending on the symptoms, the healthcare professional may recommend a physical examination, laboratory testing, or referral to a dermatologist.
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
                    It is important to distinguish between discussing homoeopathy and establishing that it is effective. <strong>Reliable scientific evidence has not demonstrated that homoeopathy can effectively treat skin diseases.</strong> Patients should be informed about evidence-based treatment options and the limitations of complementary approaches.
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Established treatments vary according to the diagnosis:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-[#475569] space-y-1">
                    <li><strong>Acne:</strong> Managed with appropriate topical medicines, retinoids, or systemic therapies depending on severity.</li>
                    <li><strong>Eczema:</strong> Requires barrier repair moisturisers, trigger avoidance, and prescribed anti-inflammatory treatments.</li>
                    <li><strong>Fungal infections:</strong> Generally require targeted antifungal medication.</li>
                    <li><strong>Psoriasis:</strong> Managed with topical treatments, phototherapy, or systemic medications under medical supervision.</li>
                    <li><strong>Allergic skin reactions:</strong> Improve when the trigger is identified and allergen exposure eliminated.</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              The most suitable approach depends on the individual's condition, age, medical history, and symptom severity. People who wish to explore complementary healthcare should discuss this with their medical practitioner and avoid stopping prescribed medicines without professional guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Seek Skin Treatment in Manjeri? */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              WHAT TO EXPECT DURING CONSULTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Why Seek Skin Treatment in Manjeri?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Skin symptoms can affect people of different ages and backgrounds. Some individuals experience occasional pimples or dry skin, while others deal with persistent inflammation, recurring rashes, or discomfort that interferes with daily life.
          </p>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Seeking <strong>Skin Treatment in Manjeri</strong> can help patients understand their symptoms and identify the appropriate next steps. Early assessment is particularly useful when symptoms persist, spread, become painful, or fail to improve with basic skincare measures.
          </p>

          {/* Consultation Checklist */}
          <div className="p-6 rounded-2xl bg-white border border-[#D8E1F5]">
            <h3 className="font-bold text-[#1E2559] text-base sm:text-lg mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#303A88]" />
              A Comprehensive Clinical Skin Consultation Covers:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#334155]">
              {consultationPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B]">
            This information helps a healthcare professional assess possible causes and decide whether treatment or further investigation is appropriate. When choosing a <strong>Skin Homoeopathy Clinic in Manjeri</strong>, patients should look for clear communication, appropriate qualifications, respect for privacy, and honest information about the limitations of proposed treatments.
          </p>
        </div>
      </section>

      {/* Section 4: Common Skin Conditions and Their Symptoms (6 In-Depth Cards) */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#F59E0B] block">
              DIAGNOSTIC GUIDELINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Common Skin Conditions and Their Symptoms
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Clinical characteristics and care considerations for six prominent dermatological presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {commonConditions.map((cond) => (
              <div
                key={cond.id}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5] hover:border-[#F59E0B]/30 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-[#1E2559] text-lg mb-2">
                    {cond.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {cond.desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#D8E1F5] flex items-center gap-2.5 text-xs text-[#303A88] font-medium">
                  <Check className="w-4 h-4 text-[#45AC4B] shrink-0" />
                  <span>{cond.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Choosing a Skin Homoeopathy Clinic in Manjeri */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              CLINIC SELECTION STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Choosing a Skin Homoeopathy Clinic in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              People researching a <strong>Skin Homoeopathy Clinic in Manjeri</strong> should consider more than convenience or promotional claims. The quality of communication, professional qualifications, and willingness to recommend appropriate medical care are essential:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {clinicChoiceStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] space-y-2 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#F59E0B]/15 text-[#B45309] text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-[#1E2559] text-base">
                      {std.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#D8E1F5] text-xs sm:text-sm text-[#475569] leading-relaxed">
            A <strong>Homoeopathy Clinic for Skin Problems in Manjeri</strong> should communicate honestly about the scientific evidence supporting its services. Homoeopathy has not been proven to cure eczema, psoriasis, acne, fungal infections, or other skin diseases. Patients should be encouraged to seek evidence-based medical care when needed and to discuss all remedies and supplements they use with their healthcare providers.
          </div>
        </div>
      </section>

      {/* Section 6: When Should You Consult a Skin Doctor in Manjeri? */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-rose-700 block">
              CLINICAL ADVICE &amp; WARNING SIGNS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              When Should You Consult a Skin Doctor in Manjeri?
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              A <strong>Skin Doctor in Manjeri</strong> can assess persistent skin symptoms and help determine whether further investigation or specialist care is necessary. Consider seeking medical advice if you experience:
            </p>
          </div>

          {/* Appointment indications checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {whenToConsultDoctor.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#D8E1F5] flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
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
              A qualified dermatologist in Manjeri is appropriate when symptoms are persistent, complicated, or difficult to diagnose. Early assessment can help identify the cause, reduce discomfort, and ensure that appropriate treatment is started.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Everyday Habits for Supporting Skin Health */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#45AC4B] block">
              SUPPORTIVE LIFESTYLE PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Everyday Habits for Supporting Skin Health
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Good skincare habits can support skin comfort and help protect the skin barrier. They do not replace medical treatment for an underlying skin disease, but they may complement a suitable care plan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {everydayHabits.map((habit) => (
              <div
                key={habit.number}
                className="p-5 rounded-xl bg-white border border-[#D8E1F5] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#45AC4B]/15 text-[#1F5C24] font-bold text-xs flex items-center justify-center mb-3">
                    {habit.number}
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

      {/* Section 8: What to Expect During a Skin Health Consultation in Manjeri */}
      <section className="py-14 sm:py-16 bg-white border-b border-[#D8E1F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] block">
              PATIENT CONSULTATION EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              What to Expect During a Skin Health Consultation in Manjeri
            </h2>
          </div>

          <div className="prose max-w-none text-[#475569] space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              When arranging an appointment at a <strong>Skin Health Clinic in Manjeri</strong>, prepare to describe your symptoms clearly.
            </p>

            <p>
              The healthcare professional may ask when the problem began, whether it has changed, what makes it better or worse, and whether you have experienced similar symptoms previously. You may also be asked about medicines, allergies, personal care products, and relevant medical history.
            </p>

            <p>
              Depending on the condition, the assessment may involve examining the affected skin under magnification, taking a skin sample, arranging blood tests, or recommending a specialist referral. Not every patient requires testing; investigations are selected according to the symptoms and clinical findings.
            </p>

            <div className="p-4 rounded-xl bg-[#EEF2FB] border border-[#D8E1F5] text-xs sm:text-sm text-[#1E2559] font-medium leading-relaxed">
              People looking for <strong>Skin Disease Treatment in Manjeri</strong> should choose a provider who values accurate diagnosis and explains the evidence supporting the recommended care. For patients interested in homoeopathy, it is important to understand that reliable scientific evidence does not establish it as an effective treatment for skin diseases. Any complementary approach should be discussed openly with a qualified healthcare professional and should never delay necessary medical treatment.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (8 FAQs) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFD] border-b border-[#D8E1F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F59E0B]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Questions Patients Ask About Skin Treatment in Manjeri
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Evidence-based answers to help individuals make informed decisions about dermatological concerns.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#D8E1F5] overflow-hidden bg-white transition-all shadow-2xs"
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
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#D8E1F5]/60 bg-[#F8FAFD]">
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
      <section id="booking-section" className="py-16 bg-[#FEF8EE] border-b border-[#FDE68A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#F59E0B]">
              CLINICAL APPOINTMENT ENGINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Schedule Your Skin Health Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Confidential online video visits or in-clinic consultations at our Kuttippuram and Puthanathani branches.
            </p>
          </div>

          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Conclusion & Clinic Contact Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E2559] via-[#2A347D] to-[#1E2559] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-[#FDE68A]">
            INFORMED HEALTHCARE DECISIONS
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Conclusion &amp; Next Steps Towards Healthier Skin
          </h2>

          <div className="text-sm sm:text-base text-[#D3DBF4] max-w-3xl mx-auto leading-relaxed space-y-3">
            <p>
              Healthy skin starts with understanding your symptoms, identifying possible triggers, and seeking appropriate medical advice when necessary. Whether you are experiencing acne, itching, eczema, psoriasis, dryness, or recurring skin irritation, an accurate assessment can help determine the next steps.
            </p>
            <p>
              People searching for <strong>Skin Homoeopathic Treatment in Manjeri</strong>, <strong>Skin Treatment in Manjeri</strong>, or a <strong>Homoeopathy Clinic for Skin Problems in Manjeri</strong> should prioritise healthcare providers who communicate clearly, respect patient privacy, and explain the limitations of proposed treatments.
            </p>
            <p>
              Homoeopathy has not been established as an effective treatment for skin diseases, so it should not replace evidence-based medical care. Persistent, severe, or unexplained skin symptoms deserve proper evaluation by a qualified healthcare professional.
            </p>
            <p className="font-medium text-white">
              By following appropriate skincare practices, avoiding unsuitable self-treatment, and seeking timely medical advice, individuals can make informed decisions about their skin health and overall well-being.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`tel:${phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-white text-[#1E2559] font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
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
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
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
