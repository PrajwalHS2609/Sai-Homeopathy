import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { NavView } from '../context/ClinicContext';
import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    cartItemCount,
    setIsCartOpen,
    navigateToBooking,
    settings,
  } = useClinic();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: NavView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Consultations', view: 'consultations' },
    { label: 'Products', view: 'products' },
    { label: 'Reviews', view: 'reviews' },
    { label: 'FAQ', view: 'faq' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: NavView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello, I would like to book a homeopathy consultation with Sai Homeopathy Clinic.'
  )}`;

  return (
    <>
      {/* Top Banner Notice: Timings & Emergency Guidance */}
      <div className="bg-[#145C3A] text-[#EEF7EE] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D8B45A] animate-pulse"></span>
            <span>
              Consultations Available Online & In Clinic ({settings.city})
            </span>
            <span className="hidden sm:inline text-[#A4C4A8]">|</span>
            <span className="hidden sm:inline text-[#DCEBDD]">
              {settings.weekdayHours}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 hover:text-[#D8B45A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D8B45A]" />
              <span className="tabular-nums">{settings.phone}</span>
            </a>
            <button
              onClick={() => handleNavClick('admin')}
              className="text-[#D8B45A] hover:underline font-medium ml-2"
              title="Admin CMS & Appointments Management"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Top Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFBF6]/95 backdrop-blur-md shadow-sm border-b border-[#DCEBDD]/80 py-3'
            : 'bg-[#FCFBF6] border-b border-[#DCEBDD]/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand Wordmark with Botanical Leaf Symbol */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full bg-[#0B5D3B] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                {/* Botanical leaf emblem */}
                <svg
                  className="w-5 h-5 text-[#F8F5EA]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>

              <div>
                <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#173A2A] block leading-none">
                  {settings.clinicName}
                </span>
                <span className="text-[11px] text-[#5F6F65] tracking-wider uppercase font-medium mt-0.5 block">
                  {settings.tagline}
                </span>
              </div>
            </button>

            {/* Zone 2: Primary Nav Links (Single-Line, Clean Typography) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    onClick={() => handleNavClick(item.view)}
                    className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B] rounded ${
                      isActive
                        ? 'text-[#0B5D3B] font-semibold'
                        : 'text-[#173A2A] hover:text-[#0B5D3B]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B5D3B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions (Cart + WhatsApp + Primary CTA) */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-[#173A2A] hover:bg-[#EEF7EE] hover:text-[#0B5D3B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#0B5D3B] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FCFBF6] tabular-nums">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Link (Desktop) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0B5D3B] bg-[#EEF7EE] hover:bg-[#DCEBDD] border border-[#DCEBDD] rounded-full transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#0B5D3B]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA: Book Appointment */}
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B5D3B] hover:bg-[#145C3A] active:bg-[#08452B] rounded-full transition-all duration-200 shadow-sm hover:shadow whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5D3B]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D8B45A]" />
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#173A2A] hover:bg-[#EEF7EE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D3B]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#DCEBDD] bg-[#FCFBF6] px-4 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#DCEBDD]/60">
              {navLinks.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentView === item.view
                      ? 'bg-[#0B5D3B] text-white font-semibold'
                      : 'text-[#173A2A] hover:bg-[#EEF7EE]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => navigateToBooking('online')}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0B5D3B] rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#D8B45A]" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#0B5D3B] bg-[#EEF7EE] border border-[#DCEBDD] rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#173A2A] bg-white border border-[#DCEBDD] rounded-lg"
                >
                  <Phone className="w-4 h-4 text-[#0B5D3B]" />
                  <span>Call Clinic</span>
                </a>
              </div>

              <button
                onClick={() => handleNavClick('admin')}
                className="text-xs text-center text-[#5F6F65] hover:text-[#0B5D3B] py-1"
              >
                Access Admin Dashboard →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
