import React from 'react';
import { useClinic, NavView } from '../context/ClinicContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
} from 'lucide-react';

interface RegionalRelatedGuidesProps {
  currentGuideKey?: NavView;
}

export const RegionalRelatedGuides: React.FC<RegionalRelatedGuidesProps> = ({
  currentGuideKey,
}) => {
  const { setCurrentView } = useClinic();

  const regionalGuides: Array<{
    key: NavView;
    title: string;
    condition: string;
    badge: string;
    badgeColor: string;
    dotColor: string;
  }> = [
    {
      key: 'piles-homeopathic-clinic-manjeri',
      title: 'Piles Homeopathic Clinic in Manjeri',
      condition: 'Haemorrhoids & Fissures',
      badge: 'Proctology',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      dotColor: 'bg-[#45AC4B]',
    },
    {
      key: 'menstrual-treatment-manjeri',
      title: 'Menstrual Treatment in Manjeri',
      condition: 'Irregular Cycles & PCOS',
      badge: 'Women’s Care',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      dotColor: 'bg-[#E11D48]',
    },
    {
      key: 'skin-treatment-manjeri',
      title: 'Skin Treatment in Manjeri',
      condition: 'Chronic Dermatological Care',
      badge: 'Dermatology',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      dotColor: 'bg-[#F59E0B]',
    },
    {
      key: 'hair-treatment-manjeri',
      title: 'Hair Treatment in Manjeri',
      condition: 'Hair Fall & Scalp Health',
      badge: 'Trichology',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      dotColor: 'bg-[#0D9488]',
    },
    {
      key: 'allergic-rhinitis-manjeri',
      title: 'Allergic Rhinitis in Manjeri',
      condition: 'Sneezing, Nasal Congestion & Sinusitis',
      badge: 'Respiratory',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      dotColor: 'bg-[#0284C7]',
    },
    {
      key: 'acne-treatment-manjeri',
      title: 'Acne Treatment in Manjeri',
      condition: 'Pimples, Hormonal Acne & Scars',
      badge: 'Acne Care',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      dotColor: 'bg-[#E11D48]',
    },
    {
      key: 'eczema-treatment-manjeri',
      title: 'Eczema Treatment in Manjeri',
      condition: 'Atopic & Contact Dermatitis',
      badge: 'Skin Barrier',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      dotColor: 'bg-[#10B981]',
    },
    {
      key: 'warts-treatment-manjeri',
      title: 'Skin Warts Treatment in Manjeri',
      condition: 'Common, Plantar & Flat Warts',
      badge: 'HPV Care',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      dotColor: 'bg-[#0D9488]',
    },
    {
      key: 'corns-treatment-manjeri',
      title: 'Skin Corns Treatment in Manjeri',
      condition: 'Foot Corns & Calluses',
      badge: 'Podiatry',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      dotColor: 'bg-[#D97706]',
    },
    {
      key: 'psoriasis-treatment-manjeri',
      title: 'Psoriasis Treatment in Manjeri',
      condition: 'Plaque Psoriasis & Scalp Flaking',
      badge: 'Autoimmune',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      dotColor: 'bg-[#E11D48]',
    },
    {
      key: 'ringworm-treatment-manjeri',
      title: 'Ringworm Treatment in Manjeri',
      condition: 'Tinea Corporis, Cruris & Pedis',
      badge: 'Fungal Care',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      dotColor: 'bg-[#10B981]',
    },
    {
      key: 'alopecia-treatment-manjeri',
      title: 'Alopecia Treatment in Manjeri',
      condition: 'Pattern Thinning & Patchy Alopecia',
      badge: 'Hair Regrowth',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      dotColor: 'bg-[#0D9488]',
    },
    {
      key: 'alopecia-treatment-malappuram',
      title: 'Alopecia Treatment in Malappuram',
      condition: 'Alopecia Subtypes & Scalp Assessment',
      badge: 'Trichology Care',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      dotColor: 'bg-[#14B8A6]',
    },
    {
      key: 'hair-treatment-malappuram',
      title: 'Hair & Scalp Treatment in Malappuram',
      condition: 'Hair Fall, Dandruff & Scalp Health',
      badge: 'Hair & Scalp',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      dotColor: 'bg-[#0D9488]',
    },
    {
      key: 'skin-treatment-malappuram',
      title: 'Skin Treatment in Malappuram',
      condition: 'Acne, Eczema, Psoriasis & Rashes',
      badge: 'Dermatology Care',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      dotColor: 'bg-[#F59E0B]',
    },
    {
      key: 'menstrual-treatment-malappuram',
      title: 'Menstrual Treatment in Malappuram',
      condition: 'Irregular Cycles, Period Pain & PCOS',
      badge: 'Women’s Care',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      dotColor: 'bg-[#E11D48]',
    },
    {
      key: 'piles-clinic-malappuram',
      title: 'Piles Clinic in Malappuram',
      condition: 'Haemorrhoids, Fissures & Anorectal Care',
      badge: 'Proctology Care',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      dotColor: 'bg-[#10B981]',
    },
  ];

  const departmentCarePages: Array<{
    key: NavView;
    title: string;
    dotColor: string;
  }> = [
    {
      key: 'womens-health-care',
      title: 'Women’s Health & Gynecological Care',
      dotColor: 'bg-[#E11D48]',
    },
    {
      key: 'respiratory-care',
      title: 'Respiratory, ENT & Allergy Care',
      dotColor: 'bg-[#38BDF8]',
    },
    {
      key: 'skin-hair-care',
      title: 'Skin, Hair & Scalp Care',
      dotColor: 'bg-[#F59E0B]',
    },
    {
      key: 'renal-thyroid-care',
      title: 'Renal, Gallbladder & Thyroid Care',
      dotColor: 'bg-[#0284C7]',
    },
    {
      key: 'neurological-care',
      title: 'Neurological & Headache Care',
      dotColor: 'bg-[#8B5CF6]',
    },
    {
      key: 'anorectal-vascular-care',
      title: 'Anorectal & Vascular Care',
      dotColor: 'bg-[#38BDF8]',
    },
    {
      key: 'joint-musculoskeletal-care',
      title: 'Joint, Spine & Musculoskeletal Care',
      dotColor: 'bg-[#2563EB]',
    },
    {
      key: 'ophthalmic-eye-care',
      title: 'Ophthalmic / Eye Conditions',
      dotColor: 'bg-[#0284C7]',
    },
  ];

  const navigateTo = (view: NavView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-16 bg-white border-t border-[#D8E1F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E8F0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#303A88]/10 text-[#303A88] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#303A88]" />
              <span>Comprehensive Regional Knowledge Base</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559]">
              Regional Clinic Guides &amp; Other Condition Pages
            </h2>
            <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
              Explore specialized patient information guides across Malappuram &amp; Kerala covering clinical features, evidence disclosures, and doctor consultations.
            </p>
          </div>
          <button
            onClick={() => navigateTo('treatments')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#303A88] hover:text-[#232b66] transition-colors group self-start md:self-end"
          >
            <span>View All Clinical Departments</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Regional Clinic Guides Grid (12 items) */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#303A88]" />
            <span>Manjeri Regional Patient Clinical Guides (12 Specialized Topics)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {regionalGuides.map((item) => {
              const isCurrent = currentGuideKey === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => navigateTo(item.key)}
                  className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between group ${
                    isCurrent
                      ? 'bg-[#EEF2FB] border-[#303A88] ring-2 ring-[#303A88]/20 shadow-sm'
                      : 'bg-[#F8FAFD] border-[#E2E8F0] hover:border-[#303A88]/40 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                      {isCurrent ? (
                        <span className="text-[10px] font-bold text-[#303A88] bg-white px-2 py-0.5 rounded-full border border-[#D8E1F5]">
                          Current Guide
                        </span>
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#303A88] group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                    <h4
                      className={`text-sm font-bold leading-snug line-clamp-2 ${
                        isCurrent
                          ? 'text-[#303A88]'
                          : 'text-[#1E2559] group-hover:text-[#303A88]'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 line-clamp-1">
                      {item.condition}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Specialized Department Care Section (8 departments) */}
        <div className="pt-4 border-t border-[#E2E8F0]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
            Specialized Clinical Care Disciplines
          </h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {departmentCarePages.map((dept) => {
              const isCurrent = currentGuideKey === dept.key;
              return (
                <button
                  key={dept.key}
                  onClick={() => navigateTo(dept.key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    isCurrent
                      ? 'bg-[#1E2559] text-white border-[#1E2559]'
                      : 'bg-[#F8FAFD] text-[#334155] border-[#E2E8F0] hover:bg-white hover:border-[#303A88] hover:text-[#303A88]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${dept.dotColor}`} />
                  <span>{dept.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinic Footnote with Branch Locations & Phone */}
        <div className="rounded-2xl p-5 bg-[#F8FAFD] border border-[#D8E1F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 text-xs">
            <p className="font-bold text-[#1E2559] flex items-center gap-1.5 text-sm">
              <MapPin className="w-4 h-4 text-[#0D9488]" />
              <span>Dr. Anjali's Homeopathic Multispeciality Clinic</span>
            </p>
            <p className="text-[#64748B]">
              <strong className="text-[#1E2559]">Kuttippuram Main Clinic:</strong> Near Railway Station, Kuttippuram, Malappuram |{' '}
              <strong className="text-[#1E2559]">Puthanathani Branch:</strong> Opp. Police Station, NH 66, Malappuram
            </p>
            <p className="text-[#64748B] flex items-center gap-2 pt-0.5">
              <Clock className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Monday – Saturday: 9:30 AM – 6:30 PM • Sunday Consultations by Prior Appointment</span>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:0989101707"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#303A88] hover:bg-[#232b66] text-white text-xs font-bold transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0989101707</span>
            </a>
            <a
              href="https://wa.me/918921180408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
