import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export const HomeBlogSection: React.FC = () => {
  const { blogPosts, openBlogPost, setCurrentView } = useClinic();

  // Show top 3 recent articles on homepage
  const recentPosts = blogPosts.slice(0, 3);

  const handleViewAll = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white border-t border-[#D8E1F5]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2F8335] bg-[#EDF8EE] px-3.5 py-1 rounded-full border border-[#C4EAC7] inline-flex items-center gap-1.5 font-sans">
              <BookOpen className="w-3.5 h-3.5 text-[#45AC4B]" />
              <span>CLINICAL INSIGHTS & WELLNESS</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] tracking-tight">
              From Dr. Anjali's Desk
            </h2>
            <p className="text-base text-[#64748B] font-sans">
              Evidence-grounded education on constitutional homeopathy, seasonal wellness, and holistic health.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#303A88] hover:text-[#45AC4B] group py-2 border-b-2 border-[#D8E1F5] hover:border-[#45AC4B] transition-colors self-start md:self-auto whitespace-nowrap font-sans"
          >
            <span>EXPLORE ALL ARTICLES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Articles Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
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
                      post.id === 'post-homoeopathic-clinic-in-malappuram' ||
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
                        post.id === 'post-homoeopathic-clinic-in-malappuram' ||
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
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#303A88] bg-[#EEF2FB] px-3 py-1 rounded-full border border-[#D3DBF4]">
                    {post.category}
                  </span>
                  <span className="text-[#64748B] flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-[#45AC4B]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 font-sans">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-6 mt-6 border-t border-[#EEF2FB] flex items-center justify-between font-sans">
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

        {/* Small Bottom Strip CTA to Main Blog Page */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#EEF2FB] to-[#EDF8EE] p-5 border border-[#D8E1F5] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <div className="flex items-center gap-3 text-xs text-[#1E2559]">
            <Sparkles className="w-4 h-4 text-[#45AC4B] shrink-0" />
            <span className="font-medium">
              Looking for patient guides on chronic conditions, seasonal remedies, and pediatric care?
            </span>
          </div>
          <button
            onClick={handleViewAll}
            className="shrink-0 text-xs font-bold text-[#303A88] hover:text-[#45AC4B] underline underline-offset-4 transition-colors"
          >
            Visit Knowledge Hub →
          </button>
        </div>

      </div>
    </section>
  );
};
