import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  X,
  CheckCircle2,
  Truck,
  CreditCard,
  QrCode,
  ArrowRight,
  Package,
} from 'lucide-react';
import { OrderCustomerInfo } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    createOrder,
    lastConfirmedOrder,
    setLastConfirmedOrder,
  } = useClinic();

  const [customer, setCustomer] = useState<OrderCustomerInfo>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Malappuram',
    state: 'Kerala',
    pincode: '676505',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen && !lastConfirmedOrder) return null;

  const shipping = cartTotal >= 600 ? 0 : 50;
  const grandTotal = cartTotal + shipping;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customer.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!customer.phone.trim()) errs.phone = 'Phone number is required';
    if (!customer.address.trim()) errs.address = 'Delivery address is required';
    if (!customer.city.trim()) errs.city = 'City is required';
    if (!customer.pincode.trim()) errs.pincode = 'PIN code is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);
    setTimeout(() => {
      createOrder(customer, paymentMethod.toUpperCase());
      setIsProcessing(false);
    }, 500);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setLastConfirmedOrder(null);
  };

  // ----------------------------------------------------
  // ORDER CONFIRMED SCREEN
  // ----------------------------------------------------
  if (lastConfirmedOrder) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E2559]/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-[#D8E1F5] shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#EEF2FB] text-[#45AC4B] mx-auto flex items-center justify-center border border-[#D3DBF4]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#303A88]">
              ORDER SUCCESSFUL
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E2559] mt-1">
              Thank You for Your Order!
            </h3>
            <p className="text-xs text-[#5F6F65] mt-1">
              Your remedies have been safely booked for pharmaceutical dispensing from Anjali Homoeo Clinic.
            </p>
          </div>

          <div className="bg-[#F8FAFD] rounded-2xl p-5 border border-[#D8E1F5] text-left space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-[#D8E1F5]">
              <span className="text-[#5F6F65]">Order Number</span>
              <span className="font-mono font-bold text-[#303A88]">
                {lastConfirmedOrder.orderNumber}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5F6F65]">Recipient</span>
              <span className="font-semibold text-[#1E2559]">
                {lastConfirmedOrder.customerInfo.fullName}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#5F6F65]">Shipping Address</span>
              <span className="font-semibold text-[#1E2559] text-right truncate max-w-[200px]">
                {lastConfirmedOrder.customerInfo.address}, {lastConfirmedOrder.customerInfo.city}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-[#D8E1F5]">
              <span className="text-[#5F6F65]">Total Paid</span>
              <span className="font-bold text-[#303A88] text-sm tabular-nums">
                ₹{lastConfirmedOrder.total} ({lastConfirmedOrder.paymentMethod})
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-full py-3.5 px-6 rounded-full bg-[#45AC4B] text-white text-xs font-semibold hover:bg-[#39933E] transition-colors shadow-sm"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // CHECKOUT FORM
  // ----------------------------------------------------
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E2559]/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans">
      <div className="relative bg-white rounded-3xl max-w-xl w-full border border-[#D8E1F5] shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-6 border-b border-[#D8E1F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-[#303A88]" />
            <h3 className="font-heading text-xl font-bold text-[#1E2559]">
              Secure Order Checkout
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full text-[#5F6F65] hover:bg-[#EEF2FB] hover:text-[#303A88] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6">
          
          {/* Shipping Details */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E2559] block">
              1. Delivery Address
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-[#1E2559] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={customer.fullName}
                  onChange={(e) =>
                    setCustomer({ ...customer, fullName: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8E1F5] text-xs focus:ring-2 focus:ring-[#303A88] focus:outline-none"
                />
                {errors.fullName && (
                  <p className="text-[10px] text-rose-600 mt-0.5">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-[#1E2559] block mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98450 12345"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8E1F5] text-xs focus:ring-2 focus:ring-[#303A88] focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-[10px] text-rose-600 mt-0.5">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#1E2559] block mb-1">
                Street Address *
              </label>
              <input
                type="text"
                placeholder="House/Flat No, Apartment, Street name"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-[#D8E1F5] text-xs focus:ring-2 focus:ring-[#303A88] focus:outline-none"
              />
              {errors.address && (
                <p className="text-[10px] text-rose-600 mt-0.5">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-xs font-medium text-[#1E2559] block mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={customer.city}
                  onChange={(e) =>
                    setCustomer({ ...customer, city: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#D8E1F5] text-xs focus:ring-2 focus:ring-[#303A88] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#1E2559] block mb-1">
                  State
                </label>
                <input
                  type="text"
                  value={customer.state}
                  onChange={(e) =>
                    setCustomer({ ...customer, state: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#D8E1F5] text-xs focus:ring-2 focus:ring-[#303A88] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#1E2559] block mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  value={customer.pincode}
                  onChange={(e) =>
                    setCustomer({ ...customer, pincode: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#D8E1F5] text-xs focus:ring-2 focus:ring-[#303A88] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-3 pt-2 border-t border-[#D8E1F5]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E2559] block">
              2. Payment Method
            </span>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-[#303A88] bg-[#EEF2FB] text-[#303A88] font-bold shadow-xs'
                    : 'border-[#D8E1F5] bg-[#F8FAFD] text-[#5F6F65]'
                }`}
              >
                <QrCode className="w-4 h-4 mx-auto mb-1 text-[#303A88]" />
                <span className="text-[11px] block">UPI / QR</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#303A88] bg-[#EEF2FB] text-[#303A88] font-bold shadow-xs'
                    : 'border-[#D8E1F5] bg-[#F8FAFD] text-[#5F6F65]'
                }`}
              >
                <CreditCard className="w-4 h-4 mx-auto mb-1 text-[#303A88]" />
                <span className="text-[11px] block">Card / NetBanking</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-[#303A88] bg-[#EEF2FB] text-[#303A88] font-bold shadow-xs'
                    : 'border-[#D8E1F5] bg-[#F8FAFD] text-[#5F6F65]'
                }`}
              >
                <Truck className="w-4 h-4 mx-auto mb-1 text-[#303A88]" />
                <span className="text-[11px] block">Pay on Delivery</span>
              </button>
            </div>
          </div>

          {/* Order Summary Line */}
          <div className="bg-[#F8FAFD] rounded-xl p-4 border border-[#D8E1F5] flex items-center justify-between text-xs">
            <div>
              <span className="text-[#5F6F65] block">Items in Order</span>
              <span className="font-bold text-[#1E2559]">
                {cart.reduce((s, i) => s + i.quantity, 0)} remedies
              </span>
            </div>
            <div className="text-right">
              <span className="text-[#5F6F65] block">Total Payable</span>
              <span className="font-bold text-[#303A88] text-base tabular-nums">
                ₹{grandTotal}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#45AC4B] hover:bg-[#39933E] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md disabled:opacity-50"
          >
            {isProcessing ? (
              <span>Confirming Dispatch...</span>
            ) : (
              <>
                <span>PLACE ORDER (₹{grandTotal})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
};
