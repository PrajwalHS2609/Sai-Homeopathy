import React, { useState } from 'react';
import { INITIAL_FAQS } from '../data/initialData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(INITIAL_FAQS[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Consultation', 'Booking', 'Products', 'General'];

  const filteredFaqs = INITIAL_FAQS.filter((item) => {
    const matchesCategory =
      filterCategory === 'All' || item.category === filterCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#F8F5EA] border-t border-[#DCEBDD]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-base text-[#5F6F65]">
            Clear answers about our appointment booking, online video visits, in-clinic care, and genuine homeopathic remedies.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`py-1.5 px-4 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#0B5D3B] text-white shadow-2xs'
                  : 'bg-white hover:bg-[#EEF7EE] text-[#173A2A] border border-[#DCEBDD]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#DCEBDD] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-[#173A2A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EEF7EE] flex items-center justify-center text-[#0B5D3B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0B5D3B] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5F6F65] leading-relaxed border-t border-[#DCEBDD]/40 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper */}
        <div className="text-center pt-4">
          <p className="text-xs text-[#5F6F65]">
            Have another question? Reach out directly via{' '}
            <a
              href="https://wa.me/919845012345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5D3B] font-bold hover:underline"
            >
              WhatsApp Support
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
