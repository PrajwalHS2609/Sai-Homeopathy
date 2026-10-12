import React, { useState } from 'react';
import { INITIAL_FAQS } from '../data/initialData';
import {
  ChevronDown,
  Search,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Calendar,
} from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const FaqSection: React.FC = () => {
  const { settings, showToast, navigateToBooking } = useClinic();
  const [openId, setOpenId] = useState<string | null>(INITIAL_FAQS[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [userQuestionSubmitted, setUserQuestionSubmitted] = useState(false);

  const categories = [
    { label: 'All Questions', value: 'All' },
    { label: 'Treatments & Modalities', value: 'Treatments' },
    { label: 'Consultations & Online', value: 'Consultation' },
    { label: 'Appointments & Booking', value: 'Booking' },
    { label: 'Remedies & Delivery', value: 'Products' },
    { label: 'Clinic Information', value: 'General' },
  ];

  const filteredFaqs = INITIAL_FAQS.filter((item) => {
    const matchesCategory =
      filterCategory === 'All' || item.category === filterCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleAskQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    // Launch WhatsApp with prefilled custom question
    const targetUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Hello ${settings.clinicName}, I have a clinical question: "${userQuestion.trim()}"`
    )}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setUserQuestionSubmitted(true);
    showToast('Your question has been prepared for Dr. Anjali! Connecting via WhatsApp.', 'success');
    setUserQuestion('');
  };

  const whatsappGeneralUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello ${settings.clinicName}, I have a question regarding consultations and treatments.`
  )}`;

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#F8FAFD] border-t border-[#D8E1F5]/80 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 font-sans">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2FB] border border-[#D3DBF4] text-xs font-bold text-[#303A88] tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#303A88]" />
            <span>PATIENT QUESTIONS & ANSWERS</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
            Frequently Asked Questions & Answers (Q&A)
          </h1>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            Clear, doctor-reviewed guidance about our homeopathic treatments, online video consultations, in-clinic visits, and remedies.
          </p>
        </div>

        {/* Live Search & Filter Controls */}
        <div className="space-y-4">
          {/* Search Input Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8FA3E8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Q&A (e.g., PCOD, Asthma, Video visit, Diet, Booking, Side effects)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-[#D8E1F5] text-sm text-[#1E2559] placeholder-[#94A3B8] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#303A88] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B] hover:text-[#1E2559] p-1"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilterCategory(cat.value)}
                className={`py-2 px-4 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  filterCategory === cat.value
                    ? 'bg-[#303A88] text-white shadow-xs'
                    : 'bg-white hover:bg-[#EEF2FB] text-[#1E2559] border border-[#D8E1F5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Count Indicator */}
        <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
          <span>
            Showing <strong className="text-[#1E2559]">{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? 'answer' : 'answers'}
            {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
          </span>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterCategory('All');
              }}
              className="text-[#303A88] font-semibold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 font-sans">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 border border-[#D8E1F5] text-center space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#303A88] flex items-center justify-center mx-auto">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1E2559]">
                No matching questions found
              </h3>
              <p className="text-xs text-[#64748B] max-w-md mx-auto">
                Couldn&apos;t find what you are looking for? Send your question directly to Dr. Anjali Chandrasekhar via WhatsApp for personalized guidance.
              </p>
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#45AC4B] text-white font-semibold text-xs hover:bg-[#39933E] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                    isOpen ? 'border-[#303A88]/60 ring-1 ring-[#303A88]/20' : 'border-[#D8E1F5] hover:border-[#8FA3E8]'
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
                  >
                    <div className="space-y-1">
                      <span className="font-heading text-base sm:text-lg font-bold text-[#1E2559] block leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#303A88] bg-[#EEF2FB] px-2 py-0.5 rounded-md inline-block">
                        {faq.category}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 sm:mt-0 ${
                        isOpen
                          ? 'rotate-180 bg-[#45AC4B] text-white shadow-2xs'
                          : 'bg-[#EEF2FB] text-[#303A88]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#475569] leading-relaxed border-t border-[#EEF2FB] animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Interactive "Ask Dr. Anjali a Question" Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1E2559] to-[#303A88] text-white p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#86EFAC] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Doctor Q&A Help Desk</span>
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                Have a specific health question?
              </h3>
              <p className="text-xs sm:text-sm text-[#D3DBF4] max-w-xl">
                Type your question below to consult directly with Dr. Anjali Chandrasekhar via WhatsApp.
              </p>
            </div>

            <button
              onClick={() => navigateToBooking('online')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs font-bold transition-colors shrink-0 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          <form onSubmit={handleAskQuestionSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="Type your question (e.g. Can homeopathy help severe migraine with aura?)..."
                className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:bg-white focus:text-[#1E2559] focus:placeholder-[#94A3B8] transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#45AC4B] hover:bg-[#39933E] text-white text-sm font-bold transition-all shadow-md shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>Submit Question</span>
              </button>
            </div>

            {userQuestionSubmitted && (
              <p className="text-xs text-[#86EFAC] flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Question sent! You can also chat anytime with our clinic desk.</span>
              </p>
            )}
          </form>

          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#D3DBF4]">
            <span className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Clinic Desk: {settings.phone} ({settings.weekdayHours})</span>
            </span>

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86EFAC] hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>Instant WhatsApp Inquiry →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
