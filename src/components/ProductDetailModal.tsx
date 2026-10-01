import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  X,
  Star,
  ShoppingBag,
  ShieldCheck,
  AlertTriangle,
  Heart,
  Droplet,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProductForModal,
    setSelectedProductForModal,
    addToCart,
    setIsCartOpen,
  } = useClinic();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'dosage' | 'warnings'>('details');

  if (!selectedProductForModal) return null;
  const prod = selectedProductForModal;

  const handleAddAndOpenCart = () => {
    addToCart(prod, quantity);
    setSelectedProductForModal(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full border border-[#DCEBDD] shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-[#EEF7EE] text-[#173A2A] border border-[#DCEBDD] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Top Section: Visual & Key Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Visual Box */}
            <div className="sm:col-span-5 aspect-square rounded-2xl bg-gradient-to-br from-[#F8F5EA] to-[#EEF7EE] border border-[#DCEBDD] flex flex-col items-center justify-center p-6 relative">
              {prod.tag && (
                <span className="absolute top-3 left-3 text-[10px] font-bold text-[#0B5D3B] bg-white px-2.5 py-0.5 rounded-full border border-[#DCEBDD]">
                  {prod.tag}
                </span>
              )}

              {/* Amber Dropper Bottle Vector */}
              <div className="w-24 h-36 relative flex items-center justify-center">
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

              <span className="text-xs font-semibold text-[#5F6F65] mt-2">
                {prod.volume}
              </span>
            </div>

            {/* Product Header & Pricing */}
            <div className="sm:col-span-7 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B5D3B] bg-[#EEF7EE] px-2.5 py-0.5 rounded-full">
                {prod.category}
              </span>

              <h3 className="font-editorial text-2xl font-bold text-[#173A2A] leading-snug">
                {prod.name}
              </h3>

              <p className="text-xs text-[#5F6F65]">
                {prod.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#D8B45A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#173A2A] tabular-nums">
                  {prod.rating}
                </span>
                <span className="text-xs text-[#5F6F65] tabular-nums">
                  ({prod.reviewCount} patient reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-bold text-[#0B5D3B] tabular-nums">
                  ₹{prod.price}
                </span>
                {prod.originalPrice && (
                  <span className="text-sm text-[#5F6F65] line-through tabular-nums">
                    ₹{prod.originalPrice}
                  </span>
                )}
                <span className="text-xs text-emerald-700 font-semibold ml-2">
                  ✓ In Stock & Ready to Dispatch
                </span>
              </div>
            </div>

          </div>

          {/* Interactive Navigation Tabs */}
          <div className="border-b border-[#DCEBDD] flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'details'
                  ? 'text-[#0B5D3B]'
                  : 'text-[#5F6F65] hover:text-[#173A2A]'
              }`}
            >
              Description & Uses
              {activeTab === 'details' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B5D3B]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('dosage')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'dosage'
                  ? 'text-[#0B5D3B]'
                  : 'text-[#5F6F65] hover:text-[#173A2A]'
              }`}
            >
              Dosage Guidance
              {activeTab === 'dosage' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B5D3B]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('ingredients')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'ingredients'
                  ? 'text-[#0B5D3B]'
                  : 'text-[#5F6F65] hover:text-[#173A2A]'
              }`}
            >
              Ingredients
              {activeTab === 'ingredients' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B5D3B]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('warnings')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'warnings'
                  ? 'text-[#0B5D3B]'
                  : 'text-[#5F6F65] hover:text-[#173A2A]'
              }`}
            >
              Storage & Precautions
              {activeTab === 'warnings' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B5D3B]" />
              )}
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="bg-[#FCFBF6] rounded-2xl p-4 sm:p-5 border border-[#DCEBDD] text-xs leading-relaxed text-[#173A2A] min-h-[110px]">
            {activeTab === 'details' && (
              <div className="space-y-3">
                <p>{prod.description}</p>
                <div>
                  <span className="font-bold text-[#173A2A] block mb-1">
                    Indications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prod.indications.map((ind, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-[#DCEBDD] px-2.5 py-0.5 rounded text-[11px] text-[#0B5D3B]"
                      >
                        ✓ {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dosage' && (
              <div className="space-y-2">
                <p className="font-medium text-[#173A2A]">{prod.dosage}</p>
                <p className="text-[#5F6F65]">
                  * Best taken 15-20 minutes away from meals and beverages. Ensure the mouth is clean of strong lingering flavours like mint, coffee, or garlic.
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-2">
                <p className="font-mono text-[11px] text-[#173A2A] bg-white p-3 rounded-xl border border-[#DCEBDD]">
                  {prod.ingredients}
                </p>
                <p className="text-[#5F6F65]">
                  Prepared according to classical Homeopathic Pharmacopoeia of India (HPI) guidelines.
                </p>
              </div>
            )}

            {activeTab === 'warnings' && (
              <div className="space-y-2">
                <p className="text-[#173A2A]">{prod.warnings}</p>
                <div className="flex items-center gap-1.5 text-amber-800 text-[11px] pt-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>
                    Keep away from strong electromagnetic fields, camphor, and direct sunlight.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Footer: Quantity Controls & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#DCEBDD] rounded-xl bg-[#FCFBF6] p-1 self-start sm:self-auto">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1.5 rounded-lg hover:bg-white text-[#173A2A] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-bold text-sm text-[#173A2A] tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1.5 rounded-lg hover:bg-white text-[#173A2A] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  addToCart(prod, quantity);
                  setSelectedProductForModal(null);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-[#173A2A] bg-white hover:bg-[#EEF7EE] border border-[#DCEBDD] rounded-xl transition-colors"
              >
                <Check className="w-3.5 h-3.5 text-[#0B5D3B]" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleAddAndOpenCart}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] rounded-xl transition-colors shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Buy Now (₹{prod.price * quantity})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
