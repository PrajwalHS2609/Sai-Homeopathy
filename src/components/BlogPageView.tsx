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
} from 'lucide-react';

export const BlogPageView: React.FC = () => {
  const {
    blogPosts,
    selectedPostForReader,
    setSelectedPostForReader,
    openBlogPost,
    navigateToBooking,
    showToast,
  } = useClinic();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Homeopathy',
    'Patient Education',
    'Digestive Health',
    'Stress Relief',
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
    const shareUrl = window.location.href;
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
      <div className="py-12 bg-[#FCFBF6] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Back Button Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedPostForReader(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0B5D3B] hover:text-[#145C3A] bg-[#EEF7EE] hover:bg-[#DCEBDD] px-4 py-2 rounded-full border border-[#DCEBDD] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Knowledge Hub</span>
            </button>

            <button
              onClick={() => handleShare(post)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F6F65] hover:text-[#173A2A] bg-white border border-[#DCEBDD] px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>

          {/* Article Header */}
          <header className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-wider text-[#0B5D3B] bg-[#EEF7EE] px-3 py-1 rounded-full border border-[#DCEBDD]">
                {post.category}
              </span>
              <span className="text-[#5F6F65] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#A4C4A8]" />
                <span>{post.readTime}</span>
              </span>
              <span className="text-[#5F6F65]">·</span>
              <span className="text-[#5F6F65] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#A4C4A8]" />
                <span>{post.publishedDate}</span>
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] leading-tight">
              {post.title}
            </h1>

            {/* Author Profile Lockup */}
            <div className="flex items-center gap-3.5 py-4 border-y border-[#DCEBDD]/80">
              <div className="w-12 h-12 rounded-full bg-[#0B5D3B] text-white flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
                AS
              </div>
              <div>
                <span className="text-sm font-bold text-[#173A2A] block">
                  {post.author}
                </span>
                <span className="text-xs text-[#5F6F65]">
                  {post.authorTitle} · Sai Homeopathy Clinic
                </span>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="rounded-3xl bg-[#EEF7EE] p-6 sm:p-8 border border-[#DCEBDD] space-y-3 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D3B] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D8B45A]" />
              <span>Key Clinical Takeaways</span>
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#173A2A]">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5D3B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Article Body */}
          <article className="prose prose-slate max-w-none text-sm sm:text-base text-[#173A2A] leading-relaxed space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Tags */}
          <div className="pt-6 border-t border-[#DCEBDD] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#5F6F65]">Tags:</span>
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-white border border-[#DCEBDD] text-[#173A2A] px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Consultation Conversion Card */}
          <div className="rounded-3xl bg-gradient-to-r from-[#173A2A] to-[#0B5D3B] text-white p-8 sm:p-10 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-[#D8B45A] uppercase tracking-wider">
              INDIVIDUALIZED CARE
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">
              Looking for guidance tailored to your constitutional health?
            </h3>
            <p className="text-xs sm:text-sm text-[#EEF7EE]/90 max-w-xl">
              Schedule an in-depth 45-minute consultation with Dr. Ananya Sharma online from anywhere, or visit our clinic in Indiranagar, Bengaluru.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#173A2A] text-xs font-semibold hover:bg-[#F8F5EA] transition-colors shadow-md"
              >
                <Video className="w-3.5 h-3.5 text-[#0B5D3B]" />
                <span>Book Online Consultation</span>
              </button>
              <button
                onClick={() => navigateToBooking('clinic')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
              >
                <Building2 className="w-3.5 h-3.5 text-[#D8B45A]" />
                <span>Book In-Clinic Visit</span>
              </button>
            </div>
          </div>

          {/* Medical Notice */}
          <div className="flex items-start gap-2.5 text-xs text-[#5F6F65] bg-[#F8F5EA] p-4 rounded-2xl border border-[#DCEBDD]">
            <ShieldAlert className="w-4 h-4 text-[#D8B45A] shrink-0 mt-0.5" />
            <p>
              <strong>Clinical Educational Disclaimer:</strong> Articles are intended for health education and constitutional wellness. They do not constitute individualized medical prescriptions. Always consult a licensed homeopathic practitioner before beginning remedies.
            </p>
          </div>

          {/* Related Articles Section */}
          <div className="pt-10 border-t border-[#DCEBDD] space-y-6">
            <h3 className="font-editorial text-2xl font-bold text-[#173A2A]">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => openBlogPost(rel)}
                  className="bg-white rounded-3xl border border-[#DCEBDD] p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer space-y-3"
                >
                  <span className="text-[11px] font-bold uppercase text-[#0B5D3B] bg-[#EEF7EE] px-2.5 py-0.5 rounded-full">
                    {rel.category}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-[#173A2A] hover:text-[#0B5D3B] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#5F6F65] line-clamp-2">
                    {rel.excerpt}
                  </p>
                  <span className="text-xs font-bold text-[#0B5D3B] inline-flex items-center gap-1 pt-1">
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
    <div className="py-12 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD] inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB & ARTICLES</span>
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A]">
            Homeopathy & Holistic Health
          </h1>
          <p className="text-sm sm:text-base text-[#5F6F65]">
            Clinical insights, constitutional wellness guides, and practical lifestyle advice from our senior physician.
          </p>
        </div>

        {/* Featured Article Marquee Banner */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div
            onClick={() => openBlogPost(featuredPost)}
            className="rounded-3xl bg-gradient-to-br from-[#F8F5EA] to-[#EEF7EE] border border-[#DCEBDD] p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-bold text-[#0B5D3B] bg-white px-3 py-1 rounded-full border border-[#DCEBDD]">
                  FEATURED ARTICLE
                </span>
                <span className="text-[#5F6F65]">{featuredPost.readTime}</span>
                <span className="text-[#5F6F65]">·</span>
                <span className="text-[#5F6F65]">{featuredPost.publishedDate}</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173A2A] group-hover:text-[#0B5D3B] transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-sm text-[#5F6F65] leading-relaxed max-w-2xl">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#0B5D3B]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#DCEBDD] space-y-3 text-xs text-[#173A2A]">
              <span className="font-bold uppercase tracking-wider text-[#0B5D3B] block">
                Article Highlights
              </span>
              <ul className="space-y-2 text-[#5F6F65]">
                {featuredPost.keyTakeaways.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5D3B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Search & Categories Bar */}
        <div className="bg-white rounded-3xl p-5 border border-[#DCEBDD] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#5F6F65] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles (e.g. allergies, constitutional, digestion)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCEBDD] text-xs text-[#173A2A] bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
              />
            </div>

            <span className="text-xs text-[#5F6F65] font-semibold tabular-nums self-end md:self-auto">
              {filteredPosts.length} Articles Found
            </span>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-4 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0B5D3B] text-white shadow-2xs'
                    : 'bg-[#FCFBF6] hover:bg-[#EEF7EE] text-[#173A2A] border border-[#DCEBDD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DCEBDD] p-8 space-y-3">
            <p className="text-base font-semibold text-[#173A2A]">
              No articles match "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-[#0B5D3B] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => openBlogPost(post)}
                className="bg-white rounded-3xl border border-[#DCEBDD] p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B5D3B] bg-[#EEF7EE] px-3 py-1 rounded-full border border-[#DCEBDD]">
                      {post.category}
                    </span>
                    <span className="text-[#5F6F65] flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#A4C4A8]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#173A2A] group-hover:text-[#0B5D3B] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5F6F65] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

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
        )}

      </div>
    </div>
  );
};
