import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Product } from '../types';
import {
  Search,
  Filter,
  ShoppingBag,
  Eye,
  Star,
  Sparkles,
  HelpCircle,
  ArrowRight,
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
    <div className="py-12 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
            APOTHECARY & REMEDIES
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A]">
            Genuine Homeopathic Products
          </h1>
          <p className="text-sm sm:text-base text-[#5F6F65]">
            Hand-selected classical formulations prepared under strict Homeopathic Pharmacopoeia standards.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-5 border border-[#DCEBDD] shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#5F6F65] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search remedies, symptoms (e.g. immunity, stress, skin)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCEBDD] text-xs text-[#173A2A] bg-[#FCFBF6] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto text-xs text-[#5F6F65]">
              <span className="font-medium whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl border border-[#DCEBDD] bg-[#FCFBF6] text-xs font-semibold text-[#173A2A] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]"
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
                    ? 'bg-[#0B5D3B] text-white shadow-2xs'
                    : 'bg-[#FCFBF6] hover:bg-[#EEF7EE] text-[#173A2A] border border-[#DCEBDD]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DCEBDD] p-8 space-y-3">
            <p className="text-base font-semibold text-[#173A2A]">
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
              className="text-xs font-bold text-[#0B5D3B] hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl border border-[#DCEBDD] p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail / Vector Bottle Frame */}
                  <div
                    onClick={() => setSelectedProductForModal(prod)}
                    className="cursor-pointer relative aspect-4/3 rounded-2xl bg-gradient-to-br from-[#F8F5EA] to-[#EEF7EE] border border-[#DCEBDD]/60 flex flex-col items-center justify-center p-4 overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-200"
                  >
                    {prod.tag && (
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-[#0B5D3B] bg-white px-2.5 py-0.5 rounded-full border border-[#DCEBDD]">
                        {prod.tag}
                      </span>
                    )}

                    <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-[#5F6F65] bg-white/80 px-2 py-0.5 rounded">
                      {prod.volume}
                    </span>

                    {/* Bottle Vector Art */}
                    <div className="w-16 h-24 relative flex items-center justify-center">
                      <svg viewBox="0 0 80 120" className="w-full h-full drop-shadow-md">
                        <rect x="34" y="2" width="12" height="14" rx="6" fill="#242C28" />
                        <rect x="30" y="16" width="20" height="8" rx="2" fill="#D8B45A" />
                        <rect x="32" y="24" width="16" height="10" fill="#8C531B" />
                        <rect x="18" y="34" width="44" height="74" rx="8" fill="#B36B22" />
                        <path d="M22 40 L26 40 L26 100 L22 100 Z" fill="#D98E3A" opacity="0.6" />
                        <rect x="22" y="52" width="36" height="44" rx="3" fill="#FCFBF6" />
                        <circle cx="40" cy="64" r="5" fill="#0B5D3B" />
                        <line x1="28" y1="76" x2="52" y2="76" stroke="#173A2A" strokeWidth="1.5" />
                        <line x1="30" y1="82" x2="50" y2="82" stroke="#5F6F65" strokeWidth="1" />
                      </svg>
                    </div>

                    <span className="text-[11px] font-medium text-[#0B5D3B] mt-2 group-hover:underline">
                      View Formula Details
                    </span>
                  </div>

                  {/* Rating & Category */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#5F6F65] font-medium uppercase tracking-wider text-[11px]">
                      {prod.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#D8B45A]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-[#173A2A] text-xs tabular-nums">
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
                    className="font-editorial text-xl font-bold text-[#173A2A] group-hover:text-[#0B5D3B] transition-colors leading-snug cursor-pointer"
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
                        className="text-[10px] text-[#0B5D3B] bg-[#EEF7EE] px-2 py-0.5 rounded"
                      >
                        ✓ {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="pt-4 mt-4 border-t border-[#DCEBDD]/60 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#173A2A] tabular-nums">
                      ₹{prod.price}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs text-[#5F6F65] line-through tabular-nums">
                        ₹{prod.originalPrice}
                      </span>
                    )}
                    <span className="text-[11px] text-emerald-700 font-semibold ml-auto">
                      In Stock
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProductForModal(prod)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#173A2A] bg-[#FCFBF6] hover:bg-[#EEF7EE] border border-[#DCEBDD] rounded-xl transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#5F6F65]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => addToCart(prod, 1)}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-xl transition-colors shadow-2xs"
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
        <div className="bg-[#EEF7EE] rounded-3xl p-6 border border-[#DCEBDD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#0B5D3B] shrink-0" />
            <p className="text-xs text-[#173A2A] leading-relaxed">
              <strong>Need physician guidance before ordering?</strong> Individualized constitutional matching ensures the highest efficacy. You can consult online with Dr. Sharma before finalizing your remedy.
            </p>
          </div>
          <button
            onClick={() => navigateToBooking('online')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#0B5D3B] text-white text-xs font-semibold hover:bg-[#145C3A] transition-colors whitespace-nowrap"
          >
            Book Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
