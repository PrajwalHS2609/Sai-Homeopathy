import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { X, ShieldAlert, Check } from 'lucide-react';

export const MedicalDisclaimerModal: React.FC = () => {
  const { isDisclaimerOpen, setIsDisclaimerOpen, settings } = useClinic();

  if (!isDisclaimerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#DCEBDD] shadow-2xl relative space-y-5">
        
        <button
          onClick={() => setIsDisclaimerOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#5F6F65] hover:text-[#173A2A] rounded-full hover:bg-[#EEF7EE]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-3 border-b border-[#DCEBDD]">
          <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-editorial text-xl font-bold text-[#173A2A]">
              Medical Disclaimer & Policies
            </h3>
            <span className="text-xs text-[#5F6F65]">
              {settings.clinicName} · Bengaluru
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs text-[#173A2A] leading-relaxed max-h-96 overflow-y-auto pr-2">
          <div>
            <h4 className="font-bold text-[#0B5D3B] uppercase mb-1">
              1. General Healthcare Informational Notice
            </h4>
            <p className="text-[#5F6F65]">
              The content published on this website is for general educational,
              informational, and appointment scheduling purposes only. It is not
              intended as a substitute for professional clinical medical evaluation,
              diagnosis, or acute intervention.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0B5D3B] uppercase mb-1">
              2. Emergency Medical Care
            </h4>
            <p className="text-[#5F6F65]">
              If you or a family member are experiencing a medical emergency, acute
              chest pain, severe breathing difficulty, sudden trauma, or any
              life-threatening condition, please immediately visit the nearest
              emergency hospital or contact emergency services (112 / 108).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0B5D3B] uppercase mb-1">
              3. Homeopathic Constitutional Consultation
            </h4>
            <p className="text-[#5F6F65]">
              Homeopathic treatment aims to support the body’s innate healing mechanism
              through personalized constitutional remedies. Individual outcomes may
              vary based on chronic disease duration, lifestyle compliance, and
              individual constitution. We do not make false guarantees of instant cures.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0B5D3B] uppercase mb-1">
              4. Product Delivery & Returns
            </h4>
            <p className="text-[#5F6F65]">
              Genuine homeopathic preparations are sealed in tamper-evident bottles.
              Opened medicinal bottles cannot be returned due to pharmaceutical safety
              hygiene regulations. Damaged shipments are replaced promptly upon
              delivery notification.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-[#DCEBDD] flex justify-end">
          <button
            onClick={() => setIsDisclaimerOpen(false)}
            className="px-6 py-2.5 rounded-full bg-[#0B5D3B] text-white text-xs font-semibold hover:bg-[#145C3A] transition-colors"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
