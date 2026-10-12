import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Product } from '../types';
import {
  Search,
  ShoppingBag,
  Eye,
  Star,
  HelpCircle,
} from 'lucide-react';

export const ProductsCatalogView: React.FC = () => {
  const {
    products,
    addToCart,
    setSelectedProductForModal,
    navigateToBooking,
  } = useClinic();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = ['All', 'Immunity', 'Stress & Sleep', 'Skin & Hair', 'Digestion'];

  // Filter & Search
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.indications.some((ind) =>
        ind.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // default featured
  });

  return (
    <div className="py-12 bg-[#F8FAFD] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] bg-[#EEF2FB] px-3.5 py-1 rounded-full border border-[#D3DBF4]">
            APOTHECARY & REMEDIES
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559]">
            Genuine Homeopathic Products
          </h1>
          <p className="text-sm sm:text-base text-[#5F6F65]">
            Hand-selected classical formulations prepared under strict Homeopathic Pharmacopoeia standards at Anjali Homoeo Clinic.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-5 border border-[#D8E1F5] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#5F6F65] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search remedies, symptoms (e.g. immunity, stress, skin)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D8E1F5] text-xs text-[#1E2559] bg-[#F8FAFD] focus:outline-none focus:ring-2 focus:ring-[#303A88]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto text-xs text-[#5F6F65]">
              <span className="font-medium whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl border border-[#D8E1F5] bg-[#F8FAFD] text-xs font-semibold text-[#1E2559] focus:outline-none focus:ring-2 focus:ring-[#303A88]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
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

        {/* Product Cards Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#D8E1F5] p-8 space-y-3">
            <p className="text-base font-semibold text-[#1E2559]">
              No products match "{searchQuery}"
            </p>
            <p className="text-xs text-[#5F6F65]">
              Try clearing your search filters or browse other categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-[#303A88] hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl border border-[#D8E1F5] p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#303A88]/40"
              >
                <div>
                  {/* Thumbnail / Vector Bottle Frame */}
                  <div
                    onClick={() => setSelectedProductForModal(prod)}
                    className="cursor-pointer relative aspect-4/3 rounded-2xl bg-gradient-to-br from-[#EEF2FB] to-white border border-[#D8E1F5]/80 flex flex-col items-center justify-center p-4 overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-200"
                  >
                    {prod.tag && (
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-[#303A88] bg-white px-2.5 py-0.5 rounded-full border border-[#D8E1F5] shadow-xs">
                        {prod.tag}
                      </span>
                    )}

                    <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-[#5F6F65] bg-white/90 px-2 py-0.5 rounded border border-[#D8E1F5]">
                      {prod.volume}
                    </span>

                    {/* Bottle Vector Art */}
                    <div className="w-16 h-24 relative flex items-center justify-center">
                      <svg viewBox="0 0 80 120" className="w-full h-full drop-shadow-md">
                        <rect x="34" y="2" width="12" height="14" rx="6" fill="#1E2559" />
                        <rect x="30" y="16" width="20" height="8" rx="2" fill="#45AC4B" />
                        <rect x="32" y="24" width="16" height="10" fill="#303A88" />
                        <rect x="18" y="34" width="44" height="74" rx="8" fill="#1E2559" />
                        <path d="M22 40 L26 40 L26 100 L22 100 Z" fill="#303A88" opacity="0.6" />
                        <rect x="22" y="52" width="36" height="44" rx="3" fill="#FFFFFF" />
                        <circle cx="40" cy="64" r="5" fill="#45AC4B" />
                        <line x1="28" y1="76" x2="52" y2="76" stroke="#303A88" strokeWidth="1.5" />
                        <line x1="30" y1="82" x2="50" y2="82" stroke="#5F6F65" strokeWidth="1" />
                      </svg>
                    </div>

                    <span className="text-[11px] font-medium text-[#303A88] mt-2 group-hover:underline">
                      View Formula Details
                    </span>
                  </div>

                  {/* Rating & Category */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#5F6F65] font-medium uppercase tracking-wider text-[11px]">
                      {prod.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-[#1E2559] text-xs tabular-nums">
                        {prod.rating}
                      </span>
                      <span className="text-[#5F6F65] text-[10px] tabular-nums">
                        ({prod.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3
                    onClick={() => setSelectedProductForModal(prod)}
                    className="font-heading text-xl font-bold text-[#1E2559] group-hover:text-[#303A88] transition-colors leading-snug cursor-pointer"
                  >
                    {prod.name}
                  </h3>

                  <p className="text-xs text-[#5F6F65] mt-1.5 leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>

                  {/* Indications list preview */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {prod.indications.slice(0, 2).map((ind, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-[#303A88] bg-[#EEF2FB] px-2 py-0.5 rounded border border-[#D3DBF4]"
                      >
                        ✓ {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-4 mt-4 border-t border-[#D8E1F5]/80 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#1E2559] tabular-nums">
                      ₹{prod.price}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs text-[#5F6F65] line-through tabular-nums">
                        ₹{prod.originalPrice}
                      </span>
                    )}
                    <span className="text-[11px] text-[#45AC4B] font-semibold ml-auto">
                      In Stock
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProductForModal(prod)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#1E2559] bg-[#F8FAFD] hover:bg-[#EEF2FB] border border-[#D8E1F5] rounded-xl transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#5F6F65]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => addToCart(prod, 1)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#328336] rounded-xl transition-colors shadow-2xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guidance Notice Banner */}
        <div className="bg-[#EEF2FB] rounded-3xl p-6 border border-[#D3DBF4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#303A88] shrink-0" />
            <p className="text-xs text-[#1E2559] leading-relaxed">
              <strong>Need physician guidance before ordering?</strong> Individualized constitutional matching ensures the highest efficacy. You can consult online with Dr. Anjali Chandrasekhar at Anjali Homoeo Clinic before finalizing your remedy.
            </p>
          </div>
          <button
            onClick={() => navigateToBooking('online')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#303A88] text-white text-xs font-semibold hover:bg-[#252E6D] transition-colors whitespace-nowrap shadow-xs"
          >
            Book Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
