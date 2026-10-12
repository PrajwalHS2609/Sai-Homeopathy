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
      <div className="bg-[#303A88] text-white text-xs py-2 px-4 shadow-xs font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#45AC4B] animate-pulse"></span>
            <span className="font-medium">
              Clinics: Kuttippuram &amp; Puthanathani, Kerala
            </span>
            <span className="hidden sm:inline text-[#8FA3E8]">|</span>
            <span className="hidden sm:inline text-[#D3DBF4]">
              {settings.weekdayHours}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 text-xs font-sans">
            <a
              href="tel:09895101707"
              className="flex items-center gap-1 hover:text-[#86EFAC] transition-colors"
              title="Call Kuttippuram Clinic"
            >
              <Phone className="w-3 h-3 text-[#45AC4B]" />
              <span className="text-[11px] text-[#D3DBF4]">Kuttippuram:</span>
              <span className="tabular-nums font-semibold">098951 01707</span>
            </a>
            <span className="text-[#8FA3E8] hidden md:inline">|</span>
            <a
              href="tel:08921180408"
              className="flex items-center gap-1 hover:text-[#86EFAC] transition-colors"
              title="Call Puthanathani Clinic"
            >
              <Phone className="w-3 h-3 text-[#45AC4B]" />
              <span className="text-[11px] text-[#D3DBF4]">Puthanathani:</span>
              <span className="tabular-nums font-semibold">089211 80408</span>
            </a>
            <span className="text-[#8FA3E8] hidden md:inline">|</span>
            <a
              href="https://wa.me/918921180408?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#86EFAC] hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 text-[#45AC4B]" />
              <span className="font-semibold">WhatsApp: 89211 80408</span>
            </a>
            <button
              onClick={() => handleNavClick('admin')}
              className="text-[#D3DBF4] hover:text-white hover:underline font-medium ml-1 transition-colors"
              title="Admin CMS & Appointments Management"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Top Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D8E1F5] py-3'
            : 'bg-white border-b border-[#EEF2FB] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Official Brand Logo & Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88] rounded-xl p-1 transition-transform hover:scale-[1.01]"
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

            {/* Zone 3: Primary Actions (Cart + WhatsApp + Primary CTA) */}
            <div className="flex items-center gap-3">
              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-[#303A88] hover:bg-[#EEF2FB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#45AC4B] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white tabular-nums">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Link (Desktop) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2F8335] bg-[#EDF8EE] hover:bg-[#D3EED6] border border-[#C4EAC7] rounded-full transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#45AC4B]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary CTA: Book Appointment (Engaging Green #45AC4B) */}
              <button
                onClick={() => navigateToBooking('online')}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] active:bg-[#2F8335] rounded-full transition-all duration-200 shadow-xs hover:shadow whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#45AC4B]"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#303A88] hover:bg-[#EEF2FB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#303A88]"
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
          <div className="lg:hidden border-t border-[#D8E1F5] bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#EEF2FB]">
              <AnjaliLogo size="sm" />
            </div>

            <div className="space-y-1 pb-3 border-b border-[#EEF2FB]">
              {navLinks.map((item) => {
                const isTreatments = item.view === 'treatments';
                const isActive = currentView === item.view;

                if (isTreatments) {
                  return (
                    <div key={item.view} className="space-y-1">
                      <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#EEF2FB]">
                        <button
                          onClick={() => handleNavClick(item.view)}
                          className={`text-left text-sm font-medium ${
                            isActive ? 'text-[#303A88] font-bold' : 'text-[#334155]'
                          }`}
                        >
                          {item.label}
                        </button>
                        <button
                          onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                          className="p-1 text-[#64748B] hover:text-[#303A88]"
                          aria-label="Expand treatment subcategories"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileTreatmentsOpen ? 'rotate-180 text-[#303A88]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable Subcategories in Mobile */}
                      {mobileTreatmentsOpen && (
                        <div className="pl-3 pr-1 py-1 space-y-1 bg-[#F8FAFD] rounded-xl border border-[#D8E1F5]">
                          <span className="text-[10px] uppercase font-bold text-[#303A88] px-2 pt-1 block">
                            Specialized Subcategories:
                          </span>
                          {TREATMENT_CATEGORIES.map((subcat) => (
                            <button
                              key={subcat.id}
                              onClick={() => handleSubcategoryClick(subcat.id)}
                              className="w-full text-left p-2 rounded-lg text-xs text-[#334155] hover:bg-white hover:text-[#303A88] flex items-center gap-2 transition-colors"
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
                    className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#303A88] text-white font-semibold'
                        : 'text-[#334155] hover:bg-[#EEF2FB]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => navigateToBooking('online')}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#45AC4B] hover:bg-[#39933E] rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://wa.me/918921180408?text=Hello%20Anjali%20Homoeo%20Clinic,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-[#45AC4B] rounded-lg shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp (89211 80408)</span>
                </a>

                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href="tel:09895101707"
                    className="flex flex-col items-center justify-center py-2 px-1 text-[11px] font-semibold text-[#303A88] bg-[#EEF2FB] border border-[#D3DBF4] rounded-lg text-center"
                  >
                    <span className="text-[10px] text-[#64748B]">Kuttippuram</span>
                    <span className="tabular-nums font-bold">098951 01707</span>
                  </a>
                  <a
                    href="tel:08921180408"
                    className="flex flex-col items-center justify-center py-2 px-1 text-[11px] font-semibold text-[#303A88] bg-[#EEF2FB] border border-[#D3DBF4] rounded-lg text-center"
                  >
                    <span className="text-[10px] text-[#64748B]">Puthanathani</span>
                    <span className="tabular-nums font-bold">089211 80408</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('admin')}
                className="text-xs text-center text-[#64748B] hover:text-[#303A88] py-1"
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
