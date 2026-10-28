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
  Sparkles,
  Award,
  UserCheck,
  Lock,
  Layers,
  AlertCircle,
  Scissors,
} from 'lucide-react';
import { RegionalStickyBar } from './RegionalStickyBar';
import { RegionalBreadcrumb } from './RegionalBreadcrumb';
import { RegionalHeroSection } from './RegionalHeroSection';
import { RegionalRelatedGuides } from './RegionalRelatedGuides';

export const CornsManjeriPage: React.FC = () => {
  const { settings, setCurrentView, navigateToBookingWithReason } = useClinic();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Contact numbers
  const phonePrimary = '0989101707';
  const phoneSecondary = '098951 01707';
  const phoneWhatsApp = '89211 80408';

  const whatsappUrl = `https://wa.me/918921180408?text=${encodeURIComponent(
    'Hello Dr. Anjali, I would like to enquire about consultation for Foot Corns & Pressure Point Assessment (Manjeri patient guide).'
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
    navigateToBookingWithReason('Skin Corns & Foot Care Consultation - Manjeri', 'online');
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
      title: 'Mechanical Friction & Pressure',
      desc: 'Corns are localised areas of thickened, hyperkeratotic skin caused primarily by repetitive mechanical pressure and friction.',
    },
    {
      title: 'Common Foot Locations',
      desc: 'They most frequently appear on the tops and sides of toes, between the toes, and on weight-bearing soles of the feet.',
    },
    {
      title: 'Footwear & Gait Factors',
      desc: 'Tight toe-boxes, high heels, unsupportive soles, hammertoes, bunions, and abnormal gait patterns are major contributing triggers.',
    },
    {
      title: 'Accurate Diagnosis Is Vital',
      desc: 'Corns can closely resemble plantar warts or diffuse calluses; clinical differentiation is critical as treatments differ completely.',
    },
    {
      title: 'Pressure Relief & Prevention',
      desc: 'Wearing properly fitted shoes with adequate toe room and protective silicone cushioning is the cornerstone of preventing recurrence.',
    },
    {
      title: 'Safe Professional Reduction',
      desc: 'Trained medical practitioners or podiatrists can carefully debride thickened skin; never use razor blades or sharp knives at home.',
    },
    {
      title: 'Scientific Evidence Note',
      desc: 'High-quality scientific trials have not established homoeopathy as an effective treatment or removal method for mechanical corns.',
    },
    {
      title: 'Diabetic Foot Warning',
      desc: 'Patients with diabetes, peripheral neuropathy, or poor circulation must never self-treat corns due to high risks of foot ulcers and infection.',
    },
    {
      title: 'Avoid Unsupervised Caustic Acids',
      desc: 'Over-the-counter salicylic acid corn plasters can burn healthy surrounding tissue and cause severe chemical wounds if misused.',
    },
    {
      title: 'Seek Assessment for Red Flags',
      desc: 'Persistent severe pain, difficulty walking, redness, swelling, warmth, bleeding, or open discharge requires immediate clinical assessment.',
    },
  ];

  const cornCharacteristics = [
    'A small, discrete, well-defined circular area of hyperkeratotic (thickened) skin',
    'A hard, raised, or rough conical surface that presses inward into dermal tissue',
    'A firm, dense, hyperkeratotic central core that targets sensory nerve endings',
    'Sharp, pinpoint tenderness or aching when direct downward pressure is applied',
    'Severe discomfort while walking, standing for long hours, or wearing certain tight shoes',
    'Yellowish, greyish, or translucent skin discoloration around the pressure epicentre',
    'Macerated, whitish, rubbery texture when developing between damp adjacent toes (soft corns)',
  ];

  const cornTypes = [
    {
      id: 'hard-corns',
      name: '1. Hard Corns (Heloma Durum)',
      location: 'Tops and outer sides of the 5th toe, dorsal interphalangeal joints',
      desc: 'Hard corns are dense, compact plugs of hardened skin with a firm conical core that points inward. They typically form over prominent bony joints where tight shoes exert constant friction. When compressed by footwear, they cause sharp, localised pain.',
      tip: 'Shoes with a wide, rounded toe-box prevent the shoe upper from rubbing against the dorsal toe joints.',
    },
    {
      id: 'soft-corns',
      name: '2. Soft Corns (Heloma Molle)',
      location: 'Web spaces between adjacent toes (most often 4th and 5th toes)',
      desc: 'Soft corns develop between toes where perspiration and interdigital moisture keep the thickened keratin soft, macerated, and whitish. They are often intensely tender because of bony prominences rubbing against each other inside narrow shoes.',
      tip: 'Keeping the interdigital spaces clean and dry, using toe separators, and avoiding narrow shoes helps prevent soft corns.',
    },
    {
      id: 'seed-corns',
      name: '3. Seed Corns (Heloma Milliare)',
      location: 'Plantar surface, balls of feet, non-weight-bearing arches',
      desc: 'Seed corns are tiny, discrete, painless or mildly tender hard spots that resemble small seeds embedded in the plantar skin. They often occur in clusters on extremely dry, calloused soles or areas subjected to shear friction.',
      tip: 'Regular application of a rich urea-based foot moisturiser helps maintain epidermal elasticity and softens seed corns.',
    },
  ];

  const contributingFactors = [
    {
      title: 'Tight & Narrow Footwear',
      desc: 'Shoes that squeeze the toes together concentrate continuous mechanical pressure on the tops and outer sides of the toes.',
    },
    {
      title: 'Poorly Fitting or Slipping Shoes',
      desc: 'Footwear that is too loose causes the foot to slide forward with each step, creating constant shear friction against the skin.',
    },
    {
      title: 'High-Heeled Shoes',
      desc: 'Elevated heels force the body weight forward onto the metatarsal heads and toes, dramatically increasing forefoot pressure.',
    },
    {
      title: 'Thin, Worn-Out Soles',
      desc: 'Shoes lacking adequate shock absorption and internal cushioning transfer ground impact force directly onto bony foot prominences.',
    },
    {
      title: 'Toe & Foot Structural Deformities',
      desc: 'Hammertoes, claw toes, bunions (hallux valgus), and bone spurs alter normal foot biomechanics, concentrating localized pressure.',
    },
    {
      title: 'Prolonged Standing & High-Impact Activity',
      desc: 'Occupations involving continuous standing on hard concrete floors or repetitive running amplify mechanical stress on the soles.',
    },
    {
      title: 'Altered Gait & Biomechanical Patterns',
      desc: 'Walking with an inward (overpronation) or outward (supination) roll shifts pressure unevenly across specific foot zones.',
    },
  ];

  const redFlags = [
    'The corn causes severe, disabling pain that impairs walking or normal standing.',
    'The surrounding skin becomes noticeably red, hot to the touch, or swollen (signs of cellulitis or bursitis).',
    'There is pus, drainage, bleeding, or an open ulcerated sore beneath the corn.',
    'You have diabetes, peripheral neuropathy, poor circulation, or an autoimmune disease.',
    'The lesion repeatedly recurs despite changing footwear and using non-medicated pads.',
    'You are uncertain whether the lesion is a corn, a plantar wart (verruca), or a foreign body.',
  ];

  const consultationQuestions = [
    'Is this foot lesion definitely a corn, or could it be a plantar wart, callus, or foreign body?',
    'What underlying mechanical pressure point or footwear habit is causing this specific corn?',
    'Which footwear modifications, toe-box designs, or orthotic insoles would benefit my foot shape?',
    'Would a protective silicone pad, toe spacer, or orthotic offloading device help alleviate pressure?',
    'Is in-clinic professional reduction (debridement) safe and necessary for my condition?',
    'What should I do to prevent this corn from returning once the thickened skin is removed?',
    'Are there specific risks I need to be aware of if I have borderline blood sugar or circulation issues?',
    'When should I consult a podiatrist, orthopedic foot specialist, or dermatologist?',
  ];

  const preventionMeasures = [
    'Choose comfortable footwear with adequate toe room: Ensure a thumb’s width between your longest toe and the shoe tip.',
    'Avoid repeated friction: Discontinue wearing shoes that rub, pinch, or cause red marks on your toes or heels.',
    'Use silicone cushioning and toe spacers: Protective offloading sleeves relieve pressure on bony deformities.',
    'Keep feet clean and dry: Thoroughly dry between the toes after bathing to prevent moisture-induced soft corns.',
    'Moisturise dry foot skin daily: Apply an emollient or 10-20% urea foot cream to keep the skin supple and crack-free.',
    'Inspect your feet regularly: Check your soles and toes under good light, particularly if you have diabetes or reduced sensation.',
    'Address structural foot issues early: Consult a specialist if bunions, hammertoes, or abnormal arches cause recurring corns.',
  ];

  const faqs = [
    {
      question: '1. Where can I find Corns Treatment in Manjeri?',
      answer:
        'You can seek consultation with qualified healthcare professionals, clinics, and foot-care practitioners in and around Manjeri. A healthcare provider will inspect your feet, differentiate corns from plantar warts or calluses, discuss footwear ergonomics, safely debride thickened skin if appropriate, and advise on offloading orthotics.',
    },
    {
      question: '2. Is Homoeopathic Treatment for Corns in Manjeri effective?',
      answer:
        'There is no reliable, high-quality scientific evidence establishing homoeopathy as an effective medical treatment or permanent cure for corns. Because corns develop purely from mechanical friction and focal pressure, sustainable resolution requires removing the physical pressure source through proper footwear, orthotic offloading, and safe skin care. Homoeopathy should never replace appropriate foot assessment or pressure reduction.',
    },
    {
      question: '3. What causes corns on the feet?',
      answer:
        'Corns develop when the skin responds to repeated friction and mechanical pressure by generating thick, protective layers of keratin. Contributing causes include tight or narrow shoes, high heels, loose shoes that slide, thin soles, hammertoes, bunions, and prolonged standing or walking on hard surfaces.',
    },
    {
      question: '4. Are corns and calluses the same?',
      answer:
        'No, although both are caused by pressure. Corns are smaller, distinctly localised, and have a dense central core that pushes inward into deeper dermal tissue, causing sharp pain. Calluses are broader, flatter, and diffuse areas of thickened skin without a focal core, typically forming over weight-bearing surfaces like the heels or the balls of the feet.',
    },
    {
      question: '5. Can I remove a corn at home?',
      answer:
        'You should never attempt to cut, slice, or dig out a corn with razor blades, nail clippers, or scissors. Doing so carries an extremely high risk of lacerating healthy tissue, severe bleeding, and deep bacterial infection. While gentle pumice stone filing after a warm soak is acceptable for healthy individuals, people with diabetes or poor circulation must never perform bathroom surgery and should seek professional foot care.',
    },
    {
      question: '6. Can corns return after removal?',
      answer:
        'Yes. Even if a corn is professionally removed, it will almost certainly recur if the underlying mechanical pressure or rubbing friction continues. Permanent relief relies on eliminating the physical trigger through wider footwear, orthotic insoles, or correcting structural toe misalignments.',
    },
    {
      question: '7. When should I consult a Corns Specialist in Manjeri?',
      answer:
        'You should seek immediate medical assessment if the corn causes severe pain while walking, shows signs of infection (redness, warmth, swelling, pus), begins to bleed, or develops an open sore. Patients with diabetes, peripheral neuropathy, or poor circulation must consult a doctor at the first sign of any corn.',
    },
    {
      question: '8. How can I prevent foot corns?',
      answer:
        'Wear shoes with a wide, deep toe-box that do not squeeze your toes; avoid wearing high heels for extended periods; use soft silicone protective pads or orthotic insoles; apply foot moisturiser daily; and inspect your feet regularly. If corns repeatedly develop in the same spot, have your foot structure and gait evaluated.',
    },
  ];

  return (
    <div className="bg-[#F8FAFD] text-[#1E2559] min-h-screen">
      {/* Sticky Quick Contact / Booking Strip */}
      {showStickyBar && (
        <RegionalStickyBar
          pageTitle="Corns Treatment in Manjeri"
          phonePrimary={phonePrimary}
          whatsappUrl={whatsappUrl}
          onBookClick={handleBookConsultation}
        />
      )}

      {/* Breadcrumb Navigation */}
      <RegionalBreadcrumb
        categoryView="skin-hair-care"
        categoryLabel="Skin & Hair Care"
        pageTitle="Corns Treatment in Manjeri"
      />

      {/* Hero Section with Doctor Profile on Left */}
      <RegionalHeroSection
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#D97706]" />}
        badgeText="Regional Clinical Corns Guide • Manjeri Patients"
        title="Skin Corns Homoeopathic Treatment in Manjeri"
        subtitle="Individualized clinical guidance for men, women, and seniors in Manjeri and Malappuram experiencing painful foot corns, helomas, deep pressure calluses, and footwear friction discomfort."
        metrics={[
          { label: 'Condition Category', value: 'Hyperkeratotic Corns' },
          { label: 'Evaluation Protocol', value: 'Mechanical Pressure & Core' },
          { label: 'Clinical Transparency', value: 'Evidence Grounded' },
        ]}
        doctorSubtitle="BHMS | Foot Corns & Skin Consultations"
        doctorBio="10+ years of dedicated clinical experience assessing hard and soft corns, mechanical friction, pressure offloading, differential diagnosis with plantar verrucae, and constitutional support across Malappuram district."
        phonePrimary={phonePrimary}
        phoneWhatsApp={phoneWhatsApp}
        whatsappUrl={whatsappUrl}
        onBookClick={handleBookConsultation}
      />

      {/* 10 Important Key Takeaways Grid */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706] font-sans">
              QUICK CLINICAL SUMMARY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Important Key Takeaways
            </h2>
            <p className="text-sm text-[#64748B] mt-2 font-sans">
              Essential medical facts regarding foot corns, mechanical pressure, footwear ergonomics, prevention, and evidence-informed care in Manjeri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {keyTakeaways.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#FCD34D] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold text-xs mb-3 font-sans">
                    0{idx + 1}
                  </div>
                  <h3 className="font-editorial text-base font-bold text-[#1E2559] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] text-[#D97706] font-semibold font-sans">
                  <Check className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Clinical Insight</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Are Skin Corns? */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              UNDERSTANDING THE CONDITION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What Are Skin Corns?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A corn is a small, localised area of thickened skin that develops in response to repeated pressure or friction. The skin naturally produces additional layers of protective tissue when it experiences ongoing mechanical stress. However, when the pressure is concentrated in one place, the thickened area can become uncomfortable.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Corns commonly develop over bony areas of the feet, particularly on the tops and sides of the toes. Some occur between the toes, where moisture and friction may soften the thickened skin.
            </p>
          </div>

          {/* Characteristics Checklist */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#1E2559] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#D97706]" />
              <span>Typical Characteristics of Foot Corns</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cornCharacteristics.map((char, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-1.5 shrink-0" />
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Differential Diagnosis Box */}
          <div className="rounded-2xl bg-[#FFFBEB] p-5 sm:p-6 border border-[#FDE68A] space-y-2">
            <h4 className="font-editorial text-base font-bold text-[#92400E] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#D97706]" />
              <span>Differentiating Corns from Other Foot Conditions</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
              Corns are different from ordinary dry skin because they tend to develop in specific locations exposed to repeated pressure. Their appearance can also overlap with other foot conditions, including calluses and plantar warts. Before choosing a <strong className="text-[#92400E]">Skin Corn Treatment in Manjeri</strong>, it is important to make sure that the affected area is actually a corn. A healthcare professional can assess the lesion and recommend suitable care.
            </p>
          </div>

        </div>
      </section>

      {/* Common Types of Corns */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              CLINICAL CLASSIFICATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Common Types of Corns
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Corns may vary in appearance depending on their location and the amount of pressure applied to the skin.
            </p>
          </div>

          <div className="space-y-4">
            {cornTypes.map((type) => (
              <div
                key={type.id}
                className="rounded-2xl p-5 sm:p-6 bg-[#F8FAFD] border border-[#E2E8F0] hover:border-[#FCD34D] transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                    {type.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] w-fit">
                    <MapPin className="w-3 h-3 text-[#92400E]" />
                    {type.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {type.desc}
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#92400E] font-medium flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>{type.tip}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] text-center pt-2">
            The type, location, and severity of a corn influence which management options may be suitable. People with recurring symptoms may benefit from professional advice rather than repeatedly attempting removal at home.
          </p>

        </div>
      </section>

      {/* What Causes Corns on the Feet? */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              ETIOLOGY & RISK FACTORS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What Causes Corns on the Feet?
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Corns develop primarily because of repeated friction and pressure. They are not usually caused by an infection and are not generally contagious.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributingFactors.map((factor, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white border border-[#E2E8F0] shadow-xs space-y-2"
              >
                <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="font-editorial text-base font-bold text-[#1E2559]">
                  {factor.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FDE68A] text-xs sm:text-sm text-[#92400E]">
            <strong className="text-[#1E2559]">Key Principle:</strong> Understanding the underlying cause is important because removing the thickened skin without reducing the pressure may allow the corn to return.
          </div>

        </div>
      </section>

      {/* Corns Treatment in Manjeri: Why Proper Assessment Matters */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              CLINICAL SAFETY & EVALUATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Corns Treatment in Manjeri: Why Proper Assessment Matters
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Although many corns can be managed by reducing pressure and improving footwear, persistent or painful lesions may need professional assessment.
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              A corn may resemble a plantar wart, callus, or another skin condition. Plantar warts are caused by a virus, while corns develop mainly because of mechanical pressure. The distinction matters because the appropriate treatment can differ. During an assessment, a healthcare professional may examine the location, shape, thickness, and tenderness of the lesion. They may also ask about footwear, walking habits, existing foot conditions, and previous attempts to remove the corn.
            </p>
          </div>

          {/* Red Flags Alert Box */}
          <div className="rounded-2xl bg-[#FFF1F2] p-6 sm:p-8 border border-[#FFE4E6] space-y-4">
            <div className="flex items-center gap-2 text-[#BE123C]">
              <AlertCircle className="w-5 h-5 text-[#E11D48]" />
              <h3 className="font-editorial text-lg font-bold">
                Professional Assessment Is Particularly Important When:
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {redFlags.map((sign, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#881337]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#D8E1F5]">
            <p className="text-xs sm:text-sm text-[#303A88] leading-relaxed">
              People searching for a <strong className="text-[#1E2559]">Corns Doctor in Manjeri</strong> or a <strong className="text-[#1E2559]">Corns Specialist in Manjeri</strong> should look for a qualified healthcare professional who can assess the lesion, explain suitable treatment options, and recommend referral when necessary.
            </p>
          </div>

        </div>
      </section>

      {/* Exploring Homoeopathic Treatment for Corns in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              CLINICAL EVIDENCE & TRANSPARENCY
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Exploring Homoeopathic Treatment for Corns in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Some people search for <strong className="text-[#1E2559]">Homoeopathic Corns Treatment in Manjeri</strong> because they are interested in homoeopathy or prefer to discuss different approaches to managing recurring skin concerns.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A consultation with a qualified homoeopathic practitioner may provide an opportunity to discuss the history of the corn, the discomfort it causes, footwear habits, and previous treatment experiences.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-7 border border-[#FDE68A] space-y-3">
            <h3 className="font-editorial text-base font-bold text-[#92400E] flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#D97706]" />
              <span>Scientific Evidence &amp; Mechanical Stress Reality</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              However, it is important to understand the scientific evidence. There is no reliable, high-quality scientific evidence establishing homoeopathy as an effective treatment for corns or demonstrating that it removes the thickened skin caused by repeated pressure.
            </p>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              Corns develop mainly because of mechanical stress rather than an internal infection. Reducing that stress is therefore central to management. A corn may improve when pressure is relieved, but improvement should not automatically be attributed to an unproven treatment.
            </p>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              People considering Homoeopathic Treatment for Corns in Manjeri should discuss their options openly with a qualified healthcare professional. They should not delay appropriate foot care or rely on homoeopathy as a substitute for treating the underlying pressure. This is especially important for people with diabetes, poor circulation, reduced foot sensation, or other conditions that increase the risk of foot complications.
            </p>
            <p className="text-xs text-[#64748B] italic pt-1">
              A responsible consultation should explain the available options, the limitations of the evidence, and when specialist foot care is needed.
            </p>
          </div>

        </div>
      </section>

      {/* Foot Corn Treatment in Manjeri: Evidence-Based Management Options */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              EVIDENCE-BASED CARE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Foot Corn Treatment in Manjeri: Evidence-Based Management Options
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Treatment for corns focuses on relieving pressure, reducing friction, and managing the thickened skin safely. The most appropriate approach depends on the location of the corn, the severity of discomfort, and the person's overall foot health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Step 1 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Option 01</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                1. Wear Properly Fitting Footwear
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Choosing shoes with adequate room for the toes is one of the most important steps in managing corns. Footwear should not squeeze the toes together or create repeated rubbing against the skin.
              </p>
              <p className="text-xs text-[#64748B]">
                Shoes with a comfortable fit, supportive soles, and sufficient cushioning may help distribute pressure more evenly. Avoid wearing footwear that consistently causes pain or irritation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Option 02</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                2. Reduce Pressure and Friction
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Soft protective pads or cushioning may help reduce pressure on a corn. These should be positioned carefully so that they do not increase pressure on the affected area.
              </p>
              <p className="text-xs text-[#64748B]">
                A healthcare professional can advise whether an appropriate pad, insole, or footwear modification may help. People with diabetes or reduced foot sensation should seek professional advice before using medicated or adhesive corn products.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Option 03</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                3. Soften Thickened Skin Carefully
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                For some people without high-risk foot conditions, gently soaking the feet in warm water may soften thickened skin. A pumice stone may then be used cautiously to remove small amounts of dead skin.
              </p>
              <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#BE123C] font-semibold">
                Do not use sharp blades, scissors, or other cutting instruments to remove a corn yourself. Excessive filing can damage healthy skin and cause bleeding or infection. If you have diabetes, avoid self-treatment.
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl p-6 bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Option 04</span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                4. Consider Salicylic Acid Products Carefully
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Certain over-the-counter products containing salicylic acid are designed to soften thickened skin. However, they can also damage healthy tissue, particularly when used incorrectly.
              </p>
              <p className="text-xs text-[#64748B]">
                These products may not be suitable for everyone. People with diabetes, circulation problems, fragile skin, or reduced foot sensation should not use medicated corn-removal products without professional advice.
              </p>
            </div>

          </div>

          {/* Professional Removal Step */}
          <div className="rounded-2xl p-6 bg-[#F0FDFA] border border-[#99F6E4] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">Option 05</span>
            <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
              5. Professional Removal &amp; Podiatric Debridement
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              A trained healthcare professional may carefully reduce thickened skin when appropriate. This can provide relief from pressure, although the corn may return if the underlying cause remains. In some cases, repeated corns caused by toe deformities or persistent pressure points may require assessment by a podiatrist, dermatologist, or other suitable specialist.
            </p>
            <p className="text-xs text-[#0F766E] font-medium">
              People searching for <strong className="text-[#1E2559]">Corn Removal Treatment in Manjeri</strong> should understand that successful management involves more than removing the visible thickened skin. Preventing repeated friction and pressure is essential for reducing recurrence.
            </p>
          </div>

        </div>
      </section>

      {/* What to Expect During a Corns Consultation in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              CLINICAL VISIT PREPARATION
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              What to Expect During a Corns Consultation in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A consultation can help determine why a corn has developed and which management options are suitable. Before your appointment, consider noting how long the corn has been present, whether it hurts during walking, and which shoes seem to make it worse. Tell the healthcare professional about any existing foot conditions, medicines, or previous removal attempts.
            </p>
          </div>

          {/* Useful Questions */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#1E2559] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#D97706]" />
              <span>Questions to Discuss During Your Visit</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {consultationQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-5 h-5 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#FDE68A] text-xs text-[#475569]">
            People searching for a <strong className="text-[#1E2559]">Corns Clinic in Manjeri</strong> or a <strong className="text-[#1E2559]">Foot Corn Clinic in Manjeri</strong> should check the qualifications of the professionals involved and confirm that the service can provide appropriate assessment and referral. If the corn is associated with a foot deformity, severe pain, or an underlying medical condition, a more specialised assessment may be necessary.
          </div>

        </div>
      </section>

      {/* How to Prevent Corns from Returning */}
      <section className="py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              PREVENTION STRATEGIES
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              How to Prevent Corns from Returning
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Corns may recur when the same pressure or friction continues. Prevention therefore focuses on reducing the mechanical stress that caused the thickened skin to develop.
            </p>
          </div>

          <div className="space-y-3">
            {preventionMeasures.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#64748B] italic">
            These measures can support long-term foot health and reduce the likelihood of recurring discomfort.
          </p>

        </div>
      </section>

      {/* Foot Skin Problems Treatment in Manjeri */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 font-sans">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              COMPREHENSIVE FOOT CARE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Foot Skin Problems Treatment in Manjeri
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              People searching for <strong className="text-[#1E2559]">Foot Skin Problems Treatment in Manjeri</strong> may have corns, calluses, cracked heels, plantar warts, fungal infections, or other foot-related concerns. Although these conditions can cause discomfort and changes in skin texture, they have different causes and may require different treatment approaches.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Using the wrong treatment can irritate the skin or delay appropriate care. A professional assessment is especially important when a lesion is painful, bleeding, changing, or difficult to identify.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              People exploring <strong className="text-[#1E2559]">Homoeopathic Doctor for Corns in Manjeri</strong> services should ask about practitioner qualifications, the evidence for the proposed treatment, and whether the approach addresses the mechanical pressure responsible for the corn. Homoeopathy has not been established as an effective treatment for corns. It should not replace appropriate foot assessment, pressure reduction, or necessary medical care.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-[#E2E8F0] space-y-2">
            <h4 className="font-editorial text-base font-bold text-[#1E2559]">
              Responsible Foot Care Aim:
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The aim of a responsible approach is to identify the cause of the foot problem, relieve discomfort safely, and help prevent further skin damage.
            </p>
          </div>

        </div>
      </section>

      {/* Conclusion Banner */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 font-sans">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
            CONCLUSION &amp; NEXT STEPS
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
            Safe, Pressure-Relieving Foot Health in Manjeri
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Corns are areas of thickened skin that usually develop because of repeated friction or pressure. They most often occur on the toes and soles of the feet and may cause pain when walking or wearing certain shoes. If you are looking for Corns Treatment in Manjeri, start by identifying the cause of the pressure and choosing appropriate footwear. Depending on the severity, management may include protective padding, careful skin care, professional reduction of thickened skin, and specialist assessment when necessary.
          </p>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            People interested in Homoeopathic Corns Treatment in Manjeri should understand that reliable scientific evidence does not establish homoeopathy as an effective treatment for corns. Removing pressure and protecting the affected area remain important aspects of appropriate care. Avoid cutting corns yourself, and seek professional advice before using medicated corn-removal products, especially if you have diabetes, poor circulation, or reduced foot sensation.
          </p>
          <div className="pt-2">
            <button
              onClick={handleBookConsultation}
              className="px-6 py-3 rounded-xl bg-[#D97706] text-white font-bold text-sm shadow-md hover:bg-[#B45309] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Foot &amp; Skin Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="py-14 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Detailed clinical answers regarding foot corns, prevention, differentiation from warts, and treatment in Manjeri.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-editorial text-base sm:text-lg font-bold text-[#1E2559] hover:text-[#D97706] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D97706] shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Appointment Booking Engine */}
      <section id="booking-section" className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-sans">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              CLINICAL APPOINTMENTS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Book a Foot Corn &amp; Skin Consultation
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Select online video assessment or in-person clinic visit with Dr. Anjali Chandrasekhar.
            </p>
          </div>
          <AppointmentBookingEngine initialType="online" />
        </div>
      </section>

      {/* Related Regional Patient Guides in Manjeri */}
      <section className="py-12 bg-[#F8FAFD] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 font-sans">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D97706]">
              EXPLORE OTHER GUIDES
            </span>
            <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#1E2559] mt-1">
              Related Regional Patient Guides in Manjeri
            </h2>
            <p className="text-xs text-[#64748B] mt-1">
              Evidence-based information for patients across Malappuram district.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
            
            <button
              onClick={() => {
                setCurrentView('warts-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0D9488] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D9488] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#0D9488] transition-colors">
                Skin Warts in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                HPV-related growths, plantar warts vs corns, safe clinical removal, and prevention.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('eczema-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#10B981] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#10B981] transition-colors">
                Eczema Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Atopic dermatitis, skin barrier repair, allergy triggers, and medical management.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('skin-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#F59E0B] transition-colors">
                General Skin Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Chronic dermatitis, fungal infections, rashes, and constitutional assessment.
              </p>
            </button>

            <button
              onClick={() => {
                setCurrentView('acne-treatment-manjeri');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#E11D48] hover:shadow-md transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#E11D48] inline-block mb-2" />
              <h3 className="font-editorial text-sm font-bold text-[#1E2559] group-hover:text-[#E11D48] transition-colors">
                Acne Treatment in Manjeri
              </h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                Pimples, blackheads, hormonal breakouts, scar prevention, and clinical care.
              </p>
            </button>

          </div>
        </div>
      </section>

      {/* Clinic Branches & Direct Contact Details */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kuttippuram Clinic */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#303A88]/10 text-[#303A88]">
                <MapPin className="w-3.5 h-3.5" />
                KUTTIPPURAM MAIN CLINIC
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Anjali Homoeo Clinic - Kavumopuram
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Tirur - Kuttippuram Rd, Kavumopuram, Kuttippuram, Kerala 679571
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${phonePrimary}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#303A88] text-white text-xs font-bold"
                >
                  Call: {phonePrimary}
                </a>
                <a
                  href={`tel:${phoneSecondary}`}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#D8E1F5] text-[#303A88] text-xs font-bold"
                >
                  {phoneSecondary}
                </a>
              </div>
            </div>

            {/* Puthanathani Clinic */}
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#45AC4B]/10 text-[#45AC4B]">
                <MapPin className="w-3.5 h-3.5" />
                PUTHANATHANI BRANCH
              </span>
              <h3 className="font-editorial text-lg font-bold text-[#1E2559]">
                Anjali Homoeo Clinic - Chembayil Complex
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Opp. Thavakkal Gold, Puthanathani, Kurumbathur, Kerala 676552
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:08921180408`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#45AC4B] text-white text-xs font-bold"
                >
                  Call: 089211 80408
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#FEF3C7] text-[#92400E] text-xs font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Common Regional Guides Cross-Linking & Footer Notes */}
      <RegionalRelatedGuides currentGuideKey="corns-treatment-manjeri" />
    </div>
  );
};
