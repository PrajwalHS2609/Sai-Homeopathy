import React, { useState, useEffect, useRef } from 'react';
import { useClinic } from '../context/ClinicContext';
import { NavView } from '../context/ClinicContext';
import { AnjaliLogo } from './AnjaliLogo';
import { TREATMENT_CATEGORIES, TreatmentCategory } from './TreatmentCategoriesSection';
import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  ArrowRight,
  ChevronDown,
  Heart,
  Wind,
  Sparkles,
  Brain,
  Activity,
  Layers,
  ShieldCheck,
  Eye,
  Stethoscope,
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
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    { label: 'Treatments', view: 'treatments' },
    { label: 'Consultations', view: 'consultations' },
    { label: 'Q&A', view: 'faq' },
    { label: 'Blog', view: 'blog' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: NavView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setTreatmentsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubcategoryClick = (subcatId: string) => {
    setTreatmentsDropdownOpen(false);
    setMobileMenuOpen(false);

    if (subcatId === 'womens-health-gynecology') {
      setCurrentView('womens-health-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (subcatId === 'respiratory-ent-allergy') {
      setCurrentView('respiratory-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (subcatId === 'skin-hair-scalp') {
      setCurrentView('skin-hair-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (subcatId === 'renal-urinary-gallbladder-thyroid') {
      setCurrentView('renal-thyroid-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (subcatId === 'neurological-headache') {
      setCurrentView('neurological-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (subcatId === 'anorectal-vascular' || subcatId === 'anorectal-vascular-conditions') {
      setCurrentView('anorectal-vascular-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      subcatId === 'joint-musculoskeletal' ||
      subcatId === 'joint-musculoskeletal-chronic' ||
      subcatId === 'joint-musculoskeletal-chronic-conditions'
    ) {
      setCurrentView('joint-musculoskeletal-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      subcatId === 'ophthalmic-eye' ||
      subcatId === 'eye-conditions' ||
      subcatId === 'ophthalmic-eye-conditions'
    ) {
      setCurrentView('ophthalmic-eye-care');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentView('treatments');

    // Give react time to mount view before scrolling to specific anchor
    setTimeout(() => {
      const el = document.getElementById(`subcat-${subcatId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleMouseEnterTreatments = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setTreatmentsDropdownOpen(true);
  };

  const handleMouseLeaveTreatments = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setTreatmentsDropdownOpen(false);
    }, 200);
  };

  const renderSubcategoryIcon = (type: TreatmentCategory['iconType']) => {
    switch (type) {
      case 'women':
        return <Heart className="w-4 h-4 text-[#303A88]" />;
      case 'respiratory':
        return <Wind className="w-4 h-4 text-[#303A88]" />;
      case 'skin':
        return <Sparkles className="w-4 h-4 text-[#303A88]" />;
      case 'neuro':
        return <Brain className="w-4 h-4 text-[#303A88]" />;
      case 'thyroid':
        return <Activity className="w-4 h-4 text-[#303A88]" />;
      case 'vascular':
        return <Layers className="w-4 h-4 text-[#303A88]" />;
      case 'joint':
        return <ShieldCheck className="w-4 h-4 text-[#303A88]" />;
      case 'eye':
        return <Eye className="w-4 h-4 text-[#303A88]" />;
      default:
        return <Stethoscope className="w-4 h-4 text-[#303A88]" />;
    }
  };

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello, I would like to book a homeopathy consultation with ${settings.clinicName}.`
  )}`;

  return (
    <>
      {/* Top Banner Notice: Timings & Guidance in Clinic Navy #303A88 */}
      <div className="bg-[#303A88] text-white text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-xs font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-center sm:text-left">
          {/* Clinic Status / Locations */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse shrink-0"></span>
            <span className="font-medium whitespace-nowrap">
              Clinics: Kuttippuram &amp; Puthanathani, Kerala
            </span>
            <span className="hidden md:inline text-[#8FA3E8]">|</span>
            <span className="hidden md:inline text-[#D3DBF4]">
              {settings.weekdayHours}
            </span>
          </div>

          {/* Quick Contact Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-1 text-[10.5px] sm:text-xs font-sans">
            <a
              href="tel:0989101707"
              className="flex items-center gap-1 hover:text-[#86EFAC] transition-colors whitespace-nowrap"
              title="Call Doctor Desk: 0989101707"
            >
              <Phone className="w-3 h-3 text-[#45AC4B] shrink-0" />
              <span className="text-[#D3DBF4]">Desk:</span>
              <span className="tabular-nums font-semibold">0989101707</span>
            </a>
            <span className="text-[#8FA3E8]">·</span>
            <a
              href="tel:09895101707"
              className="flex items-center gap-1 hover:text-[#86EFAC] transition-colors whitespace-nowrap"
              title="Call Kuttippuram Clinic: 098951 01707"
            >
              <Phone className="w-3 h-3 text-[#45AC4B] shrink-0" />
              <span className="text-[#D3DBF4]">Kuttippuram:</span>
              <span className="tabular-nums font-semibold">098951 01707</span>
            </a>
            <span className="text-[#8FA3E8]">·</span>
            <a
              href="tel:08921180408"
              className="flex items-center gap-1 hover:text-[#86EFAC] transition-colors whitespace-nowrap"
              title="Call Puthanathani Clinic: 089211 80408"
            >
              <Phone className="w-3 h-3 text-[#45AC4B] shrink-0" />
              <span className="text-[#D3DBF4]">Puthanathani:</span>
              <span className="tabular-nums font-semibold">089211 80408</span>
            </a>
            <span className="text-[#8FA3E8] hidden sm:inline">|</span>
            <a
              href="https://wa.me/918921180408?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#86EFAC] hover:text-white transition-colors whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 text-[#45AC4B] shrink-0" />
              <span className="font-semibold">WhatsApp: 89211 80408</span>
            </a>
            <span className="text-[#8FA3E8] hidden lg:inline">|</span>
            <a
              href="mailto:anjalihomoeoclinic@gmail.com"
              className="hidden lg:flex items-center gap-1 text-[#D3DBF4] hover:text-white transition-colors whitespace-nowrap"
              title="Email Clinic"
            >
              <Mail className="w-3 h-3 text-[#86EFAC] shrink-0" />
              <span className="text-[11px]">anjalihomoeoclinic@gmail.com</span>
            </a>
            <span className="text-[#8FA3E8] hidden md:inline">|</span>
            <button
              onClick={() => handleNavClick('admin')}
              className="text-[#D3DBF4] hover:text-white hover:underline font-medium transition-colors hidden md:inline whitespace-nowrap"
              title="Admin CMS & Appointments Management"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Top Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 font-sans relative ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D8E1F5] py-2 sm:py-3'
            : 'bg-white border-b border-[#EEF2FB] py-2 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Zone 1: Official Brand Logo & Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] rounded-xl p-0.5 sm:p-1 transition-transform hover:scale-[1.01] shrink-0"
              aria-label={`${settings.clinicName} Home`}
            >
              <AnjaliLogo size="md" />
            </button>

            {/* Zone 2: Primary Nav Links with Treatments Subcategory Dropdown */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => {
                const isActive = currentView === item.view;
                const isTreatments = item.view === 'treatments';

                if (isTreatments) {
                  return (
                    <div
                      key={item.view}
                      className="relative"
                      onMouseEnter={handleMouseEnterTreatments}
                      onMouseLeave={handleMouseLeaveTreatments}
                    >
                      <button
                        onClick={() => handleNavClick(item.view)}
                        className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] rounded inline-flex items-center gap-1 ${
                          isActive
                            ? 'text-[#303A88] font-semibold'
                            : 'text-[#475569] hover:text-[#303A88]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${treatmentsDropdownOpen ? 'rotate-180 text-[#303A88]' : 'text-[#64748B]'}`} />
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#45AC4B] rounded-full" />
                        )}
                      </button>

                      {/* Modern 2-Column Treatments Mega-Menu Dropdown */}
                      {treatmentsDropdownOpen && (
                        <div className="absolute top-full -left-20 w-[640px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="bg-white rounded-3xl p-5 border border-[#D8E1F5] shadow-2xl space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-[#EEF2FB]">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#303A88]">
                                <Stethoscope className="w-4 h-4 text-[#45AC4B]" />
                                <span>Treatment Specialties & Sub-Categories</span>
                              </div>
                              <span className="text-[11px] text-[#64748B]">8 Focused Disciplines</span>
                            </div>

                            {/* 8 Subcategories Grid */}
                            <div className="grid grid-cols-2 gap-2.5">
                              {TREATMENT_CATEGORIES.map((subcat) => (
                                <button
                                  key={subcat.id}
                                  onClick={() => handleSubcategoryClick(subcat.id)}
                                  className="text-left p-3 rounded-2xl hover:bg-[#EEF2FB] border border-transparent hover:border-[#D8E1F5] transition-all duration-150 flex items-start gap-3 group/item"
                                >
                                  <div className="w-9 h-9 rounded-xl bg-[#EEF2FB] group-hover/item:bg-[#303A88] text-[#303A88] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                                    {renderSubcategoryIcon(subcat.iconType)}
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="text-xs font-bold text-[#1E2559] group-hover/item:text-[#303A88] leading-tight line-clamp-1">
                                      {subcat.title}
                                    </h4>
                                    <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                                      {subcat.commonConditions.slice(0, 2).join(', ')}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>

                            {/* Dropdown Footer */}
                            <div className="pt-3 border-t border-[#EEF2FB] flex items-center justify-between text-xs">
                              <span className="text-[#64748B]">
                                Individualized constitutional prescribing
                              </span>
                              <button
                                onClick={() => handleNavClick('treatments')}
                                className="font-semibold text-[#303A88] hover:text-[#45AC4B] inline-flex items-center gap-1 transition-colors"
                              >
                                <span>View All Modalities</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.view}
                    onClick={() => handleNavClick(item.view)}
                    className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] rounded ${
                      isActive
                        ? 'text-[#303A88] font-semibold'
                        : 'text-[#475569] hover:text-[#303A88]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#45AC4B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions (Cart + Primary CTA + Hamburger) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-[#303A88] hover:bg-[#EEF2FB] border border-[#D8E1F5]/70 sm:border-transparent transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] shrink-0"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#303A88]" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#45AC4B] text-white text-[10px] font-bold min-w-4.5 h-4.5 px-1 rounded-full flex items-center justify-center border-2 border-white tabular-nums shadow-xs">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Link (Desktop/Tablet only) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 h-10 px-3.5 text-xs font-semibold text-[#2F8335] bg-[#EDF8EE] hover:bg-[#D3EED6] border border-[#C4EAC7] rounded-full transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA: Book Appointment (Adaptive on mobile) */}
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center justify-center gap-1.5 h-9 sm:h-10 px-3 sm:px-5 text-xs sm:text-sm font-bold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-full transition-all duration-200 shadow-xs hover:shadow whitespace-nowrap group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#45AC4B]"
              >
                <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="inline sm:hidden font-bold tracking-wider">BOOK</span>
                <span className="hidden sm:inline">BOOK APPOINTMENT</span>
                <ArrowRight className="hidden sm:inline w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-[#303A88] bg-[#F4F7FD] hover:bg-[#EEF2FB] active:bg-[#D8E1F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] shrink-0 border border-[#D8E1F5] transition-all"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#303A88]" />
                ) : (
                  <Menu className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#303A88]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Backdrop Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-[#D8E1F5] px-4 pt-3.5 pb-28 space-y-4 shadow-2xl z-40 max-h-[calc(100vh-65px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {/* Drawer Header with Title and Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-[#EEF2FB]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse" />
                <span className="text-xs font-bold text-[#1E2559] uppercase tracking-wider">
                  Menu &amp; Services
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#1E2559] hover:bg-[#EEF2FB] transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 pb-3 border-b border-[#EEF2FB]">
              {navLinks.map((item) => {
                const isTreatments = item.view === 'treatments';
                const isActive = currentView === item.view;

                if (isTreatments) {
                  return (
                    <div key={item.view} className="space-y-1">
                      <div
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                          isActive
                            ? 'bg-[#EEF2FB] text-[#303A88] font-bold border-l-4 border-[#303A88]'
                            : 'text-[#1E2559] hover:bg-[#F8FAFD]'
                        }`}
                      >
                        <button
                          onClick={() => handleNavClick(item.view)}
                          className="text-left text-sm font-semibold flex-1"
                        >
                          {item.label}
                        </button>
                        <button
                          onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                          className="p-1 text-[#64748B] hover:text-[#303A88] flex items-center gap-1"
                          aria-label="Expand treatment subcategories"
                        >
                          <span className="text-[10px] font-bold text-[#45AC4B] uppercase">8 Types</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileTreatmentsOpen ? 'rotate-180 text-[#303A88]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable Subcategories in Mobile */}
                      {mobileTreatmentsOpen && (
                        <div className="ml-2 pl-3 pr-2 py-2 space-y-1 bg-[#F8FAFD] rounded-xl border border-[#D8E1F5]">
                          <span className="text-[10px] uppercase font-bold text-[#303A88] px-2 py-1 block">
                            Specialized Disciplines:
                          </span>
                          {TREATMENT_CATEGORIES.map((subcat) => (
                            <button
                              key={subcat.id}
                              onClick={() => handleSubcategoryClick(subcat.id)}
                              className="w-full text-left py-2 px-2.5 rounded-lg text-xs font-medium text-[#334155] hover:bg-white hover:text-[#303A88] flex items-center gap-2 transition-colors border border-transparent hover:border-[#D8E1F5]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#45AC4B] shrink-0" />
                              <span className="line-clamp-1">{subcat.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.view}
                    onClick={() => handleNavClick(item.view)}
                    className={`w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#303A88] text-white shadow-xs font-bold'
                        : 'text-[#1E2559] hover:bg-[#EEF2FB]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Action Buttons & Contact Info */}
            <div className="pt-1 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateToBooking('online');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-xl shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://wa.me/918921180408?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] rounded-xl shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp: 89211 80408</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:09895101707"
                    className="flex flex-col items-center justify-center py-2 px-1 text-[11px] font-semibold text-[#303A88] bg-[#EEF2FB] hover:bg-[#E2E8F8] border border-[#D3DBF4] rounded-xl text-center transition-colors"
                  >
                    <span className="text-[10px] text-[#64748B]">Kuttippuram</span>
                    <span className="tabular-nums font-bold">098951 01707</span>
                  </a>
                  <a
                    href="tel:08921180408"
                    className="flex flex-col items-center justify-center py-2 px-1 text-[11px] font-semibold text-[#303A88] bg-[#EEF2FB] hover:bg-[#E2E8F8] border border-[#D3DBF4] rounded-xl text-center transition-colors"
                  >
                    <span className="text-[10px] text-[#64748B]">Puthanathani</span>
                    <span className="tabular-nums font-bold">089211 80408</span>
                  </a>
                </div>
              </div>

              {/* Official Clinic Email */}
              <a
                href="mailto:anjalihomoeoclinic@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-[#303A88] bg-[#F8FAFD] hover:bg-[#EEF2FB] border border-[#D8E1F5] rounded-xl transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>anjalihomoeoclinic@gmail.com</span>
              </a>

              <button
                onClick={() => handleNavClick('admin')}
                className="text-xs text-center text-[#64748B] hover:text-[#303A88] py-1 transition-colors"
              >
                Access Admin Portal →
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
