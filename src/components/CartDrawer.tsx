import React from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    setIsCheckoutOpen,
    setCurrentView,
  } = useClinic();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 600;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#1E2559]/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200 font-sans">
      
      {/* Background click handler */}
      <div className="flex-1" onClick={() => setIsCartOpen(false)} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#D8E1F5] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#D8E1F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#303A88]" />
            <h3 className="font-heading text-lg font-bold text-[#1E2559]">
              Your Remedies Cart
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EEF2FB] text-[#303A88] border border-[#D3DBF4] tabular-nums">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-[#5F6F65] hover:text-[#303A88] hover:bg-[#EEF2FB] transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-[#F8FAFD] px-5 py-3 border-b border-[#D8E1F5]/80 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#1E2559] font-medium flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#45AC4B]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#45AC4B] font-semibold">
                  You unlocked FREE express delivery!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#303A88]">₹{remainingForFreeShipping}</strong> more for FREE shipping
                </span>
              )}
            </span>
            <span className="text-[11px] font-bold text-[#5F6F65] tabular-nums">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full bg-[#D8E1F5] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#45AC4B] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EEF2FB] text-[#303A88] flex items-center justify-center border border-[#D3DBF4]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-lg font-bold text-[#1E2559]">
                Your cart is currently empty
              </h4>
              <p className="text-xs text-[#5F6F65] max-w-xs">
                Browse our selection of genuine classical homeopathic remedies and wellness drops from Anjali Homoeo Clinic.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentView('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#303A88] text-white text-xs font-semibold hover:bg-[#252E6D] transition-colors shadow-xs"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#D8E1F5] bg-[#F8FAFD] hover:bg-white transition-colors"
              >
                {/* Product Thumbnail */}
                <div className="w-14 h-16 rounded-xl bg-[#EEF2FB] flex items-center justify-center shrink-0 border border-[#D3DBF4]">
                  <span className="text-xl">🌿</span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-[#1E2559] truncate">
                    {item.product.name}
                  </h4>
                  <span className="text-[11px] text-[#5F6F65] block">
                    {item.product.volume}
                  </span>
                  <span className="text-xs font-bold text-[#303A88] tabular-nums block mt-1">
                    ₹{item.product.price}
                  </span>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-rose-600 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center border border-[#D8E1F5] rounded-lg bg-white p-0.5">
                    <button
                      onClick={() =>
                        updateCartQuantity(item.product.id, item.quantity - 1)
                      }
                      className="p-1 text-[#1E2559] hover:bg-[#EEF2FB] rounded"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateCartQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-1 text-[#1E2559] hover:bg-[#EEF2FB] rounded"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#D8E1F5] bg-[#F8FAFD] space-y-4">
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#5F6F65]">
                <span>Subtotal</span>
                <span className="font-semibold text-[#1E2559] tabular-nums">
                  ₹{cartTotal}
                </span>
              </div>

              <div className="flex items-center justify-between text-[#5F6F65]">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-[#1E2559] tabular-nums">
                  {cartTotal >= freeShippingThreshold ? (
                    <span className="text-[#45AC4B] font-bold">FREE</span>
                  ) : (
                    '₹50'
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm font-bold text-[#1E2559] pt-2 border-t border-[#D8E1F5]">
                <span>Total Amount</span>
                <span className="text-[#303A88] text-base tabular-nums">
                  ₹{cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 50)}
                </span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#328336] rounded-xl transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45AC4B]"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#5F6F65]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#303A88]" />
              <span>Authentic Homeopathic Care · Secure Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
