import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { BlogPost } from '../types';
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  Video,
  Building2,
  Sparkles,
  ShieldAlert,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Info,
} from 'lucide-react';

export const BlogPageView: React.FC = () => {
  const {
    settings,
    blogPosts,
    selectedPostForReader,
    setSelectedPostForReader,
    openBlogPost,
    navigateToBooking,
    showToast,
  } = useClinic();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const categories = [
    'All',
    ...Array.from(new Set(blogPosts.map((p) => p.category))),
  ];

  // Filtered posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const handleShare = (post: BlogPost) => {
    const shareUrl = post.canonicalUrl || window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      showToast('Article link copied to clipboard!');
    }
  };

  // ------------------------------------------------------------------
  // 1. DEDICATED ARTICLE READER VIEW
  // ------------------------------------------------------------------
  if (selectedPostForReader) {
    const post = selectedPostForReader;
    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

    return (
      <div className="py-12 bg-[#F8FAFD] min-h-screen font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Back Button Navigation */}
          <div className="flex items-center justify-between font-sans">
            <button
              onClick={() => {
                setSelectedPostForReader(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] bg-[#EEF2FB] hover:bg-[#D8E1F5] px-4 py-2 rounded-full border border-[#D3DBF4] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Knowledge Hub</span>
            </button>

            <button
              onClick={() => handleShare(post)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#1E2559] bg-white border border-[#D8E1F5] px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>

          {/* Article Header */}
          <header className="space-y-4 pt-2 font-sans">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-wider text-[#2F8335] bg-[#EDF8EE] px-3 py-1 rounded-full border border-[#C4EAC7]">
                {post.category}
              </span>
              <span className="text-[#64748B] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#45AC4B]" />
                <span>{post.readTime}</span>
              </span>
              <span className="text-[#64748B]">·</span>
              <span className="text-[#64748B] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#45AC4B]" />
                <span>{post.publishedDate}</span>
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] leading-tight">
              {post.title}
            </h1>

            {/* Dedicated Hero Image Banner - Directly Below Blog Title */}
            {post.image && (
              <div className="rounded-2xl overflow-hidden border border-[#D8E1F5] shadow-sm my-6 w-full bg-white">
                <img
                  src={post.image}
                  alt={post.title}
                  width="1200"
                  height="600"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block aspect-[2/1] object-contain"
                />
              </div>
            )}

            {/* Lead Excerpt Description */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal pt-1">
              {post.excerpt}
            </p>

            {/* Canonical URL Link Bar */}
            {post.canonicalUrl && (
              <div className="text-[11px] text-[#64748B] flex flex-wrap items-center gap-2 font-mono bg-white px-3.5 py-2 rounded-xl border border-[#D8E1F5]">
                <span className="text-[#303A88] font-bold font-sans">Official URL:</span>
                <a
                  href={post.canonicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#45AC4B] hover:underline font-mono break-all font-semibold"
                >
                  {post.canonicalUrl}
                </a>
              </div>
            )}

            {/* Author Profile Lockup */}
            <div className="flex items-center gap-3.5 py-4 border-y border-[#EEF2FB]">
              <div className="w-12 h-12 rounded-full bg-[#303A88] text-white flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
                AC
              </div>
              <div>
                <span className="text-sm font-bold text-[#1E2559] block">
                  {post.author}
                </span>
                <span className="text-xs text-[#64748B]">
                  {post.authorTitle} · {settings.clinicName}
                </span>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="rounded-3xl bg-[#EDF8EE] p-6 sm:p-8 border border-[#C4EAC7] space-y-3 shadow-xs font-sans">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F8335] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#45AC4B]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1E2559]">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Article Body */}
          <article className="prose prose-slate max-w-none text-sm sm:text-base text-[#334155] leading-relaxed space-y-5 font-sans">
            {post.content.map((paragraph, index) => {
              // Skip raw FAQ lines if interactive FAQ accordion is active
              if (
                post.faqs &&
                post.faqs.length > 0 &&
                post.faqs.some(
                  (faq, fIdx) =>
                    paragraph.startsWith(`${fIdx + 1}. `) &&
                    paragraph.toLowerCase().includes(faq.question.toLowerCase().slice(0, 15))
                )
              ) {
                return null;
              }

              // Medical Disclaimer block
              if (paragraph.startsWith('Medical disclaimer:')) {
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#FFFBEB] p-5 sm:p-6 border border-[#FDE68A] text-xs sm:text-sm text-[#92400E] flex items-start gap-3.5 my-8 shadow-2xs not-prose"
                  >
                    <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#78350F] uppercase tracking-wider text-[11px] mb-1">
                        Medical Disclaimer
                      </span>
                      <p className="m-0 leading-relaxed text-[#92400E]">
                        {paragraph.replace('Medical disclaimer:', '').trim()}
                      </p>
                    </div>
                  </div>
                );
              }

              // FAQ Section Accordion
              if (
                paragraph.startsWith('### Frequently Asked Questions') &&
                post.faqs &&
                post.faqs.length > 0
              ) {
                return (
                  <div key={index} className="my-10 pt-4 not-prose">
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#EEF2FB]">
                      <div className="w-9 h-9 rounded-xl bg-[#EDF8EE] flex items-center justify-center text-[#2F8335] shrink-0">
                        <HelpCircle className="w-5 h-5 text-[#45AC4B]" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] m-0">
                          {paragraph.replace('### ', '')}
                        </h3>
                        <p className="text-xs text-[#64748B] m-0 mt-1">
                          Frequently asked clinical questions regarding {post.title.toLowerCase().replace(/[:|].*$/, '')}, symptoms, and individualized care.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 font-sans">
                      {post.faqs.map((faq, fIdx) => {
                        const isOpen = openFaqs[fIdx] ?? true;
                        return (
                          <div
                            key={fIdx}
                            className="rounded-2xl border border-[#D8E1F5] bg-white overflow-hidden shadow-2xs hover:border-[#303A88]/30 transition-all"
                          >
                            <button
                              type="button"
                              onClick={() => toggleFaq(fIdx)}
                              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#F8FAFD] transition-colors cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-[#EEF2FB] text-[#303A88] text-xs font-bold flex items-center justify-center shrink-0">
                                  Q{fIdx + 1}
                                </span>
                                <span className="text-sm sm:text-base font-bold text-[#1E2559]">
                                  {faq.question}
                                </span>
                              </div>
                              <div className="w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] shrink-0">
                                {isOpen ? (
                                  <ChevronUp className="w-4 h-4 text-[#303A88]" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-[#64748B]" />
                                )}
                              </div>
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9] bg-[#FDFEFE]">
                                <p className="m-0">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // Embedded attached image in content body for Uterine Fibroids article
              const isUterineTreatmentHeading =
                post.id === 'post-uterine-fibroids' &&
                paragraph.startsWith('### Available Treatment Options');

              // Embedded attached image in content body for Chronic Sinusitis article
              const isSinusitisTreatmentHeading =
                post.id === 'post-chronic-sinusitis' &&
                paragraph.startsWith('### Treatment Options for Chronic Sinusitis');

              // Embedded attached image in content body for Asthma Symptoms article
              const isAsthmaTreatmentHeading =
                post.id === 'post-asthma-symptoms' &&
                paragraph.startsWith('### Available Treatment Options for Asthma');

              // Embedded attached image in content body for Homeopathic Clinic in Malappuram guide
              const isClinicGuideHeading =
                post.id === 'post-homeopathic-clinic-in-malappuram' &&
                paragraph.startsWith('### 6. How to Identify the Best Homeopathic Clinic');

              // Embedded attached image in content body for What Causes Piles article
              const isPilesPreventionHeading =
                post.id === 'post-what-causes-piles' &&
                paragraph.startsWith('### 5. Prevention Tips');

              if (paragraph.startsWith('### ')) {
                return (
                  <React.Fragment key={index}>
                    {isUterineTreatmentHeading && (
                      <figure className="my-8 rounded-3xl overflow-hidden border border-[#D8E1F5] shadow-md bg-white not-prose">
                        <div className="bg-[#F8FAFD] px-5 py-3 border-b border-[#EEF2FB] flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#303A88]">
                            Attached Clinical Infographic · Uterine Fibroids
                          </span>
                          <span className="text-[11px] text-[#45AC4B] font-semibold bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                            Patient Education
                          </span>
                        </div>
                        <div className="p-2 sm:p-5 bg-white flex justify-center">
                          <img
                            src="/assets/aistudio/Uterine_Fibroids_Medical_Infographic_0f41f481.png"
                            alt="Uterine Fibroids: Symptoms, Diagnosis and Available Treatment Options Medical Infographic"
                            className="w-full h-auto max-h-[520px] object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="p-4 bg-[#F8FAFD] border-t border-[#EEF2FB] text-xs text-[#64748B] flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                          <span>
                            Visual guide illustrating uterine fibroid types, common clinical presentations (menstrual pain, heavy bleeding), ultrasound evaluation, and treatment choices.
                          </span>
                        </figcaption>
                      </figure>
                    )}

                    {isSinusitisTreatmentHeading && (
                      <figure className="my-8 rounded-3xl overflow-hidden border border-[#D8E1F5] shadow-md bg-white not-prose">
                        <div className="bg-[#F8FAFD] px-5 py-3 border-b border-[#EEF2FB] flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#303A88]">
                            Attached Clinical Guide · Chronic Sinusitis
                          </span>
                          <span className="text-[11px] text-[#45AC4B] font-semibold bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                            Patient Education
                          </span>
                        </div>
                        <div className="p-2 sm:p-5 bg-white flex justify-center">
                          <img
                            src="/assets/aistudio/Chronic_Sinusitis__Symptoms_and_Treatment_e14a9354.png"
                            alt="Chronic Sinusitis: Symptoms and Treatment Options Clinical Guide"
                            className="w-full h-auto max-h-[520px] object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="p-4 bg-[#F8FAFD] border-t border-[#EEF2FB] text-xs text-[#64748B] flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                          <span>
                            Clinical reference illustrating chronic sinusitis symptoms, facial pressure patterns, diagnostic assessment, and evidence-informed treatment pathways.
                          </span>
                        </figcaption>
                      </figure>
                    )}

                    {isAsthmaTreatmentHeading && (
                      <figure className="my-8 rounded-3xl overflow-hidden border border-[#D8E1F5] shadow-md bg-white not-prose">
                        <div className="bg-[#F8FAFD] px-5 py-3 border-b border-[#EEF2FB] flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#303A88]">
                            Attached Clinical Guide · Asthma Early Warning Signs
                          </span>
                          <span className="text-[11px] text-[#45AC4B] font-semibold bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                            Patient Education
                          </span>
                        </div>
                        <div className="p-2 sm:p-5 bg-white flex justify-center">
                          <img
                            src="/assets/aistudio/Asthma_Symptoms_Awareness_Banner_fe3d3622.png"
                            alt="Asthma Symptoms: Early Warning Signs You Should Recognize Clinical Guide"
                            className="w-full h-auto max-h-[520px] object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="p-4 bg-[#F8FAFD] border-t border-[#EEF2FB] text-xs text-[#64748B] flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                          <span>
                            Clinical guide illustrating early asthma warning signs (persistent cough, wheezing, nighttime breathlessness), common triggers, spirometry assessment, and personalized management pathways.
                          </span>
                        </figcaption>
                      </figure>
                    )}

                    {isClinicGuideHeading && (
                      <figure className="my-8 rounded-3xl overflow-hidden border border-[#D8E1F5] shadow-md bg-white not-prose">
                        <div className="bg-[#F8FAFD] px-5 py-3 border-b border-[#EEF2FB] flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#303A88]">
                            Attached Clinical Guide · Choosing a Homeopathic Clinic in Malappuram
                          </span>
                          <span className="text-[11px] text-[#45AC4B] font-semibold bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                            Patient Education
                          </span>
                        </div>
                        <div className="p-2 sm:p-5 bg-white flex justify-center">
                          <img
                            src="/assets/aistudio/Homeopathic_Clinic_in_Malappuram_3c8baf0d.png"
                            alt="Homeopathic Clinic in Malappuram: A Guide to Choosing a Clinic"
                            className="w-full h-auto max-h-[520px] object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="p-4 bg-[#F8FAFD] border-t border-[#EEF2FB] text-xs text-[#64748B] flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                          <span>
                            Clinical guide illustrating key steps in selecting a homeopathic clinic in Malappuram: verifying credentials, assessing communication, reviewing services, and prioritizing patient safety.
                          </span>
                        </figcaption>
                      </figure>
                    )}

                    {isPilesPreventionHeading && (
                      <figure className="my-8 rounded-3xl overflow-hidden border border-[#D8E1F5] shadow-md bg-white not-prose">
                        <div className="bg-[#F8FAFD] px-5 py-3 border-b border-[#EEF2FB] flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#303A88]">
                            Attached Clinical Guide · Causes, Risk Factors & Prevention of Piles
                          </span>
                          <span className="text-[11px] text-[#45AC4B] font-semibold bg-[#EDF8EE] px-2.5 py-0.5 rounded-full border border-[#C4EAC7]">
                            Patient Education
                          </span>
                        </div>
                        <div className="p-2 sm:p-5 bg-white flex justify-center">
                          <img
                            src="/assets/aistudio/What_Causes_Piles__Risk_Factors___Prevention_9dd18daf.png"
                            alt="What Causes Piles? Common Risk Factors and Prevention Tips Clinical Guide"
                            className="w-full h-auto max-h-[520px] object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="p-4 bg-[#F8FAFD] border-t border-[#EEF2FB] text-xs text-[#64748B] flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#303A88] shrink-0 mt-0.5" />
                          <span>
                            Clinical guide highlighting primary causes of piles (chronic constipation, straining, low dietary fibre), common risk factors, evidence-based prevention habits, and warning signs requiring medical assessment.
                          </span>
                        </figcaption>
                      </figure>
                    )}
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E2559] pt-6 pb-2 border-b border-[#EEF2FB]">
                      {paragraph.replace('### ', '')}
                    </h3>
                  </React.Fragment>
                );
              }

              // Bullet points
              if (paragraph.startsWith('•\t') || paragraph.startsWith('• ')) {
                return (
                  <div key={index} className="flex items-start gap-2.5 pl-2 sm:pl-4">
                    <CheckCircle2 className="w-4 h-4 text-[#45AC4B] shrink-0 mt-1" />
                    <p className="leading-relaxed text-[#334155] m-0">
                      {paragraph.replace(/^[•\t\s]+/, '')}
                    </p>
                  </div>
                );
              }

              // Numbered points with bold headers (e.g. 1. Intramural Fibroids: ...)
              const numMatch = paragraph.match(/^(\d+)\.\s+([^:]+):(.*)$/);
              if (numMatch) {
                return (
                  <div key={index} className="pt-2">
                    <h4 className="text-sm sm:text-base font-bold text-[#1E2559] flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-md bg-[#EEF2FB] text-[#303A88] text-xs font-bold flex items-center justify-center shrink-0">
                        {numMatch[1]}
                      </span>
                      <span>{numMatch[2]}</span>
                    </h4>
                    <p className="leading-relaxed pl-7 m-0 text-[#334155]">
                      {numMatch[3].trim()}
                    </p>
                  </div>
                );
              }

              return (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Tags */}
          <div className="pt-6 border-t border-[#D8E1F5] flex flex-wrap items-center gap-2 font-sans">
            <span className="text-xs font-bold text-[#64748B]">Tags:</span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-white border border-[#D8E1F5] text-[#1E2559] px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Consultation Conversion Card */}
          <div className="rounded-3xl bg-gradient-to-r from-[#1E2559] via-[#303A88] to-[#1E2559] text-white p-8 sm:p-10 space-y-4 shadow-xl border-2 border-[#45AC4B]/40 font-sans">
            <span className="text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
              INDIVIDUALIZED CARE
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Looking for guidance tailored to your constitutional health?
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-xl">
              Schedule an in-depth 45-minute consultation with Dr. Anjali Chandrasekhar online from anywhere, or visit our clinic in Malappuram.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#45AC4B] text-white text-xs font-semibold hover:bg-[#39933E] transition-colors shadow-md"
              >
                <Video className="w-3.5 h-3.5 text-white" />
                <span>Book Online Consultation</span>
              </button>
              <button
                onClick={() => navigateToBooking('clinic')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
              >
                <Building2 className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Book In-Clinic Visit</span>
              </button>
            </div>
          </div>

          {/* Medical Notice */}
          <div className="flex items-start gap-2.5 text-xs text-[#64748B] bg-[#F8FAFD] p-4 rounded-2xl border border-[#D8E1F5] font-sans">
            <ShieldAlert className="w-4 h-4 text-[#45AC4B] shrink-0 mt-0.5" />
            <p>
              <strong>Clinical Educational Disclaimer:</strong> Articles are intended for health education and constitutional wellness. They do not constitute individualized medical prescriptions. Always consult a licensed homeopathic practitioner before beginning remedies.
            </p>
          </div>

          {/* Related Articles Section */}
          <div className="pt-10 border-t border-[#D8E1F5] space-y-6 font-sans">
            <h3 className="font-editorial text-2xl font-bold text-[#1E2559]">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => openBlogPost(rel)}
                  className="bg-white rounded-3xl border border-[#D8E1F5] hover:border-[#45AC4B]/50 p-6 shadow-xs hover:shadow-md transition-shadow cursor-pointer space-y-3"
                >
                  <span className="text-[11px] font-bold uppercase text-[#303A88] bg-[#EEF2FB] px-2.5 py-0.5 rounded-full border border-[#D3DBF4]">
                    {rel.category}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-[#1E2559] hover:text-[#303A88] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#64748B] line-clamp-2">
                    {rel.excerpt}
                  </p>
                  <span className="text-xs font-bold text-[#45AC4B] inline-flex items-center gap-1 pt-1">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // 2. MAIN BLOG CATALOG VIEW
  // ------------------------------------------------------------------
  return (
    <div className="py-12 bg-[#F8FAFD] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 font-sans">
          <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4] inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#45AC4B]" />
            <span>KNOWLEDGE HUB & ARTICLES</span>
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559]">
            Homeopathy & Holistic Health
          </h1>
          <p className="text-sm sm:text-base text-[#64748B]">
            Clinical insights, constitutional wellness guides, and practical lifestyle advice from our senior physician.
          </p>
        </div>

        {/* Featured Article Marquee Banner */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div
            onClick={() => openBlogPost(featuredPost)}
            className="rounded-3xl bg-gradient-to-br from-[#EEF2FB] via-[#F4F7FD] to-[#EDF8EE] border border-[#D8E1F5] p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group font-sans"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-bold text-[#303A88] bg-white px-3 py-1 rounded-full border border-[#D3DBF4]">
                  FEATURED ARTICLE
                </span>
                <span className="text-[#64748B]">{featuredPost.readTime}</span>
                <span className="text-[#64748B]">·</span>
                <span className="text-[#64748B]">{featuredPost.publishedDate}</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-sm text-[#64748B] leading-relaxed max-w-2xl">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#45AC4B]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {featuredPost.image && (
                <div
                  className={`w-full ${
                    featuredPost.id === 'post-severe-period-pain' ||
                    featuredPost.id === 'post-uterine-fibroids' ||
                    featuredPost.id === 'post-chronic-sinusitis' ||
                    featuredPost.id === 'post-asthma-symptoms' ||
                    featuredPost.id === 'post-homeopathic-clinic-in-malappuram' ||
                    featuredPost.id === 'post-what-causes-piles' ||
                    featuredPost.id === 'post-pcod-and-fertility' ||
                    featuredPost.id === 'post-hormonal-imbalance' ||
                    featuredPost.id === 'post-painful-periods' ||
                    featuredPost.id === 'post-ovarian-cysts' ||
                    featuredPost.id === 'post-nasal-polyps'
                      ? 'aspect-[2/1] bg-white'
                      : 'aspect-[16/9] bg-[#FDF2F8]'
                  } rounded-2xl overflow-hidden border border-[#D8E1F5] shadow-sm group-hover:shadow-md transition-shadow`}
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${
                      featuredPost.id === 'post-severe-period-pain' ||
                      featuredPost.id === 'post-uterine-fibroids' ||
                      featuredPost.id === 'post-chronic-sinusitis' ||
                      featuredPost.id === 'post-asthma-symptoms' ||
                      featuredPost.id === 'post-homeopathic-clinic-in-malappuram' ||
                      featuredPost.id === 'post-what-causes-piles' ||
                      featuredPost.id === 'post-pcod-and-fertility' ||
                      featuredPost.id === 'post-hormonal-imbalance' ||
                      featuredPost.id === 'post-painful-periods' ||
                      featuredPost.id === 'post-ovarian-cysts' ||
                      featuredPost.id === 'post-nasal-polyps'
                        ? 'object-contain'
                        : 'object-cover'
                    } group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
              )}
              <div className="bg-white rounded-2xl p-5 border border-[#D8E1F5] space-y-2 text-xs text-[#1E2559]">
                <span className="font-bold uppercase tracking-wider text-[#303A88] block text-[11px]">
                  Article Highlights
                </span>
                <ul className="space-y-1.5 text-[#64748B]">
                  {featuredPost.keyTakeaways.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#45AC4B] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Search & Categories Bar */}
        <div className="bg-white rounded-3xl p-5 border border-[#D8E1F5] shadow-xs space-y-4 font-sans">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles (e.g. allergies, constitutional, digestion)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8E1F5] text-xs text-[#1E2559] bg-[#F8FAFD] focus:outline-none focus:ring-2 focus:ring-[#303A88]"
              />
            </div>

            <span className="text-xs text-[#64748B] font-semibold tabular-nums self-end md:self-auto">
              {filteredPosts.length} Articles Found
            </span>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-4 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#303A88] text-white shadow-2xs'
                    : 'bg-[#F8FAFD] hover:bg-[#EEF2FB] text-[#1E2559] border border-[#D8E1F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#D8E1F5] p-8 space-y-3 font-sans">
            <p className="text-base font-semibold text-[#1E2559]">
              No articles match "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-[#303A88] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => openBlogPost(post)}
                className="bg-white rounded-3xl border border-[#D8E1F5] hover:border-[#45AC4B]/50 p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Optional Blog Image Banner */}
                  {post.image && (
                    <div
                      className={`w-full ${
                        post.id === 'post-severe-period-pain' ||
                        post.id === 'post-uterine-fibroids' ||
                        post.id === 'post-chronic-sinusitis' ||
                        post.id === 'post-asthma-symptoms' ||
                        post.id === 'post-homeopathic-clinic-in-malappuram' ||
                        post.id === 'post-what-causes-piles' ||
                        post.id === 'post-pcod-and-fertility' ||
                        post.id === 'post-hormonal-imbalance' ||
                        post.id === 'post-painful-periods' ||
                        post.id === 'post-ovarian-cysts' ||
                        post.id === 'post-nasal-polyps'
                          ? 'aspect-[2/1] bg-white'
                          : 'aspect-[16/9] bg-[#FDF2F8]'
                      } rounded-2xl overflow-hidden mb-3 border border-[#D8E1F5] group-hover:shadow-md transition-shadow`}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full ${
                          post.id === 'post-severe-period-pain' ||
                          post.id === 'post-uterine-fibroids' ||
                          post.id === 'post-chronic-sinusitis' ||
                          post.id === 'post-asthma-symptoms' ||
                          post.id === 'post-homeopathic-clinic-in-malappuram' ||
                          post.id === 'post-what-causes-piles' ||
                          post.id === 'post-pcod-and-fertility' ||
                          post.id === 'post-hormonal-imbalance' ||
                          post.id === 'post-painful-periods' ||
                          post.id === 'post-ovarian-cysts' ||
                          post.id === 'post-nasal-polyps'
                            ? 'object-contain'
                            : 'object-cover'
                        } group-hover:scale-105 transition-transform duration-300`}
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D3DBF4]">
                      {post.category}
                    </span>
                    <span className="text-[#64748B] flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#45AC4B]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EEF2FB] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1E2559] block">
                      {post.author}
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      {post.publishedDate}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#45AC4B] group-hover:text-[#303A88] group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
