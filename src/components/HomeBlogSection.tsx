import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

export const HomeBlogSection: React.FC = () => {
  const { blogPosts, openBlogPost, setCurrentView } = useClinic();

  // Show top 3 recent articles on homepage
  const recentPosts = blogPosts.slice(0, 3);

  const handleViewAll = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#FCFBF6] border-t border-[#DCEBDD]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with View All Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD] inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CLINICAL INSIGHTS & WELLNESS</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
              From Dr. Ananya's Desk
            </h2>
            <p className="text-base text-[#5F6F65]">
              Evidence-grounded education on constitutional homeopathy, seasonal wellness, and holistic health.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5D3B] hover:text-[#145C3A] group py-2 border-b-2 border-[#DCEBDD] hover:border-[#0B5D3B] transition-colors self-start md:self-auto whitespace-nowrap"
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
              className="bg-white rounded-3xl border border-[#DCEBDD] p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B5D3B] bg-[#EEF7EE] px-3 py-1 rounded-full border border-[#DCEBDD]">
                    {post.category}
                  </span>
                  <span className="text-[#5F6F65] flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-[#A4C4A8]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl font-bold text-[#173A2A] group-hover:text-[#0B5D3B] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#5F6F65] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-6 mt-6 border-t border-[#DCEBDD]/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#173A2A] block">
                    {post.author}
                  </span>
                  <span className="text-[11px] text-[#5F6F65]">
                    {post.publishedDate}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#0B5D3B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Small Bottom Strip CTA to Main Blog Page */}
        <div className="mt-12 rounded-2xl bg-[#EEF7EE] p-5 border border-[#DCEBDD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#173A2A]">
            <Sparkles className="w-4 h-4 text-[#D8B45A] shrink-0" />
            <span>
              Looking for patient guides on chronic conditions, seasonal remedies, and pediatric care?
            </span>
          </div>
          <button
            onClick={handleViewAll}
            className="shrink-0 text-xs font-bold text-[#0B5D3B] hover:text-[#145C3A] underline underline-offset-4"
          >
            Visit Knowledge Hub →
          </button>
        </div>

      </div>
    </section>
  );
};
