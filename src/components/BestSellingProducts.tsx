import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Star, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { Product } from '../types';

export const BestSellingProducts: React.FC = () => {
  const { products, addToCart, setSelectedProductForModal, setCurrentView } = useClinic();

  // Pick first 4 best-selling products matching prompt specifications
  const featured = products.slice(0, 4);

  return (
    <section id="products-section" className="py-20 bg-[#FCFBF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3.5 py-1 rounded-full border border-[#DCEBDD]">
              SHOP OUR RANGE
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] tracking-tight">
              Our Best-Selling Homeopathy Products
            </h2>
            <p className="text-base text-[#5F6F65]">
              Explore some of our popular products selected for our customers.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5D3B] hover:text-[#145C3A] group py-2 border-b-2 border-[#DCEBDD] hover:border-[#0B5D3B] transition-colors self-start md:self-auto whitespace-nowrap"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-[#DCEBDD] p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Visual Container with Botanical Bottle Vector */}
                <div
                  onClick={() => setSelectedProductForModal(prod)}
                  className="cursor-pointer relative aspect-4/3 rounded-2xl bg-gradient-to-br from-[#F8F5EA] to-[#EEF7EE] border border-[#DCEBDD]/60 flex flex-col items-center justify-center p-4 overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-200"
                >
                  {/* Tag */}
                  {prod.tag && (
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-[#0B5D3B] bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#DCEBDD] shadow-2xs">
                      {prod.tag}
                    </span>
                  )}

                  {/* Volume pill */}
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-semibold text-[#5F6F65] bg-white/80 px-2 py-0.5 rounded">
                    {prod.volume}
                  </span>

                  {/* Stylized Amber Glass Homeopathy Dropper Bottle Vector */}
                  <div className="relative w-20 h-28 flex items-center justify-center">
                    <svg viewBox="0 0 80 120" className="w-full h-full drop-shadow-md">
                      {/* Black rubber bulb dropper */}
                      <rect x="34" y="2" width="12" height="14" rx="6" fill="#242C28" />
                      {/* Gold ring cap */}
                      <rect x="30" y="16" width="20" height="8" rx="2" fill="#D8B45A" />
                      {/* Neck */}
                      <rect x="32" y="24" width="16" height="10" fill="#8C531B" />
                      {/* Amber glass bottle body */}
                      <rect x="18" y="34" width="44" height="74" rx="8" fill="#B36B22" />
                      {/* Highlight reflection */}
                      <path d="M22 40 L26 40 L26 100 L22 100 Z" fill="#D98E3A" opacity="0.6" />
                      {/* White modern label */}
                      <rect x="22" y="52" width="36" height="44" rx="3" fill="#FCFBF6" />
                      {/* Green botanical cross / leaf mark on label */}
                      <circle cx="40" cy="64" r="5" fill="#0B5D3B" />
                      <line x1="28" y1="76" x2="52" y2="76" stroke="#173A2A" strokeWidth="1.5" />
                      <line x1="30" y1="82" x2="50" y2="82" stroke="#5F6F65" strokeWidth="1" />
                      <line x1="32" y1="87" x2="48" y2="87" stroke="#A4C4A8" strokeWidth="1" />
                    </svg>
                  </div>

                  <span className="text-[11px] font-medium text-[#0B5D3B] mt-2 group-hover:underline">
                    Quick Details
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

                {/* Name */}
                <h3
                  onClick={() => setSelectedProductForModal(prod)}
                  className="font-editorial text-lg font-bold text-[#173A2A] group-hover:text-[#0B5D3B] transition-colors leading-snug cursor-pointer line-clamp-1"
                >
                  {prod.name}
                </h3>

                {/* Short description */}
                <p className="text-xs text-[#5F6F65] line-clamp-2 mt-1.5 leading-relaxed">
                  {prod.description}
                </p>
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
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#173A2A] bg-[#FCFBF6] hover:bg-[#EEF7EE] border border-[#DCEBDD] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#5F6F65]" />
                    <span>VIEW</span>
                  </button>

                  <button
                    onClick={() => addToCart(prod, 1)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-xl transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
