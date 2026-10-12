import React, { useState } from 'react';
import { INITIAL_TESTIMONIALS } from '../data/initialData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const PatientTestimonials: React.FC = () => {
  const testimonials = INITIAL_TESTIMONIALS;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setActiveIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-white border-y border-[#D8E1F5]/80 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 font-sans">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4]">
              PATIENT FEEDBACK
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-base text-[#64748B]">
              Real experiences from patients who consulted with us online and in clinic.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white hover:bg-[#EEF2FB] border border-[#D8E1F5] text-[#303A88] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white hover:bg-[#EEF2FB] border border-[#D8E1F5] text-[#303A88] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {testimonials.map((t, idx) => {
            const isFeatured = idx === activeIndex;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-white border-[#45AC4B] shadow-lg ring-2 ring-[#45AC4B]/20'
                    : 'bg-[#F8FAFD] border-[#D8E1F5] hover:bg-white shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Rating & Consultation Type */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#45AC4B]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#2F8335] bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                      {t.consultationType}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-[#334155] leading-relaxed italic font-sans">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 mt-6 border-t border-[#EEF2FB] flex items-center justify-between font-sans">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#1E2559]">
                        {t.patientName}
                      </span>
                      <span title="Verified Consultation">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B]" />
                      </span>
                    </div>
                    <span className="text-xs text-[#64748B]">
                      {t.location} · {t.date}
                    </span>
                  </div>

                  <Quote className="w-5 h-5 text-[#8FA3E8]/30" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Notice regarding patient reviews */}
        <p className="text-[11px] text-[#64748B] text-center mt-8 font-sans">
          * Note: Individual responses to homeopathic remedies may vary based on individual constitutional factors.
        </p>

      </div>
    </section>
  );
};
