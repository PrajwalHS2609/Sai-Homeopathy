import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useClinic();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-16 md:bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#173A2A] text-white px-4 py-3 rounded-2xl shadow-xl border border-[#0B5D3B] flex items-center justify-between gap-3 text-xs animate-in slide-in-from-bottom duration-200"
        >
          <div className="flex items-center gap-2">
            {toast.type === 'info' ? (
              <Info className="w-4 h-4 text-[#D8B45A] shrink-0" />
            ) : toast.type === 'warning' ? (
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <span className="leading-snug">{toast.message}</span>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/60 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
