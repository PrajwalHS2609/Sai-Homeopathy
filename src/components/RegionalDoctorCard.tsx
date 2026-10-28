import React from 'react';
import { Award, Phone, MessageCircle, Clock } from 'lucide-react';

interface RegionalDoctorCardProps {
  doctorSubtitle?: string;
  doctorBio?: string;
  phonePrimary?: string;
  whatsappUrl: string;
}

export const RegionalDoctorCard: React.FC<RegionalDoctorCardProps> = ({
  doctorSubtitle = 'BHMS | Chief Homoeopathic Physician',
  doctorBio = '10+ years of dedicated clinical experience conducting detailed patient assessments, root-cause evaluations, and evidence-guided constitutional homoeopathic care across Malappuram district.',
  phonePrimary = '0989101707',
  whatsappUrl,
}) => {
  return (
    <div className="bg-white text-[#1E2559] rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 relative overflow-hidden">
      {/* Decorative Accent Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0D9488] via-[#10B981] to-[#303A88]" />

      <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 text-center sm:text-left lg:text-center">
        <div className="relative group">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-[#EEF2FB] shadow-lg mx-auto bg-[#F1F5F9]">
            <img
              src="/assets/aistudio/Smiling_South_Asian_Doctor_Portrait_a779a860.png"
              alt="Dr. Anjali Chandrasekhar, BHMS Doctor consulting in Malappuram district"
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = '/images/dr-anjali-malayali-doctor.jpg';
              }}
            />
          </div>
          <span className="absolute bottom-1 right-2 bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-white">
            Verified BHMS
          </span>
        </div>

        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-[#303A88]" />
            <span>Kerala State Council Reg: 16503</span>
          </div>
          <h3 className="font-editorial text-2xl font-bold text-[#1E2559]">
            Dr. Anjali Chandrasekhar
          </h3>
          <p className="text-xs font-semibold text-[#0D9488] mt-0.5">
            {doctorSubtitle}
          </p>
          <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
            {doctorBio}
          </p>

          <div className="mt-4 pt-4 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-left">
            <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
              <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                Main Clinic
              </p>
              <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                Kuttippuram
              </p>
              <p className="text-[10px] text-[#64748B]">Near Railway Station</p>
            </div>
            <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-[#E2E8F0]">
              <p className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                Branch Clinic
              </p>
              <p className="text-xs font-bold text-[#1E2559] mt-0.5">
                Puthanathani
              </p>
              <p className="text-[10px] text-[#64748B]">Opp. Police Station</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
            <a
              href={`tel:${phonePrimary}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#303A88] hover:bg-[#232b66] text-white text-xs font-bold transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {phonePrimary}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <p className="text-[11px] text-[#94A3B8] text-center mt-3 flex items-center justify-center gap-1">
            <Clock className="w-3 h-3 text-[#10B981]" />
            <span>Mon – Sat: 9:30 AM – 6:30 PM | Sunday By Prior Appt</span>
          </p>
        </div>
      </div>
    </div>
  );
};
