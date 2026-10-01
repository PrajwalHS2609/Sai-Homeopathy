import React from 'react';
import { ClinicProvider, useClinic } from './context/ClinicContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureBar } from './components/FeatureBar';
import { ConsultationOptions } from './components/ConsultationOptions';
import { AppointmentProcess } from './components/AppointmentProcess';
import { BestSellingProducts } from './components/BestSellingProducts';
import { ProductShopBanner } from './components/ProductShopBanner';
import { PractitionerProfile } from './components/PractitionerProfile';
import { WhyChooseClinic } from './components/WhyChooseClinic';
import { ProductConsultationBanner } from './components/ProductConsultationBanner';
import { PatientTestimonials } from './components/PatientTestimonials';
import { AppointmentBookingEngine } from './components/AppointmentBookingEngine';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { Footer } from './components/Footer';
import { ProductsCatalogView } from './components/ProductsCatalogView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { MedicalDisclaimerModal } from './components/MedicalDisclaimerModal';
import { ToastContainer } from './components/ToastContainer';
import { Video, Building2, Calendar, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentView, navigateToBooking, settings } = useClinic();

  // Route 1: Admin Dashboard View
  if (currentView === 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <AdminDashboard />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    );
  }

  // Route 2: Products Catalog View
  if (currentView === 'products') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <ProductsCatalogView />
          <ProductConsultationBanner />
          <FinalCtaBanner />
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Route 3: Dedicated Book Appointment View
  if (currentView === 'book-appointment') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AppointmentBookingEngine />
          </div>
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Route 4: Dedicated About View
  if (currentView === 'about') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <div className="py-12 bg-[#F8F5EA] text-center border-b border-[#DCEBDD]">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B]">
              ABOUT OUR PRACTICE
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] mt-2">
              Natural Care. Personalized Healing.
            </h1>
          </div>
          <PractitionerProfile />
          <WhyChooseClinic />
          <PatientTestimonials />
          <FinalCtaBanner />
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Route 5: Dedicated Consultations View
  if (currentView === 'consultations') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <ConsultationOptions />
          <AppointmentProcess />
          <div className="py-16 bg-[#FCFBF6] border-t border-[#DCEBDD]">
            <div className="max-w-3xl mx-auto px-4">
              <AppointmentBookingEngine />
            </div>
          </div>
          <FinalCtaBanner />
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Route 6: Reviews View
  if (currentView === 'reviews') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <div className="py-12 bg-[#F8F5EA] text-center border-b border-[#DCEBDD]">
            <span className="text-xs uppercase tracking-widest font-bold text-[#0B5D3B]">
              VERIFIED PATIENT EXPERIENCES
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173A2A] mt-2">
              Patient Feedback & Stories
            </h1>
          </div>
          <PatientTestimonials />
          <WhyChooseClinic />
          <FinalCtaBanner />
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Route 7: FAQ View
  if (currentView === 'faq') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <FaqSection />
          <FinalCtaBanner />
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Route 8: Contact View
  if (currentView === 'contact') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
        <Header />
        <main className="flex-1">
          <ContactSection />
          <FinalCtaBanner />
        </main>
        <Footer />
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <MedicalDisclaimerModal />
        <FloatingWhatsapp />
        <ToastContainer />
      </div>
    );
  }

  // Default: Full Structured Homepage (Section 49 Homepage Structure)
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF6]">
      {/* 1. Sticky Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section (Split Layout) */}
        <HeroSection />

        {/* 3. Floating Trust / Service Features */}
        <FeatureBar />

        {/* 4. Consultation Options (Online vs Clinic) */}
        <ConsultationOptions />

        {/* 5. 4-Step Consultation Process */}
        <AppointmentProcess />

        {/* 6. Best-Selling Products */}
        <BestSellingProducts />

        {/* 7. Product Shop Banner */}
        <ProductShopBanner />

        {/* 8. Practitioner Profile (Dr. Ananya Sharma) */}
        <PractitionerProfile />

        {/* 9. Why Choose Our Clinic (5 Feature Cards) */}
        <WhyChooseClinic />

        {/* 10. Product Consultation CTA Banner */}
        <ProductConsultationBanner />

        {/* 11. Patient Testimonials (Carousel & Cards) */}
        <PatientTestimonials />

        {/* 12. Book Appointment (Core Functional Booking Engine) */}
        <section id="book-appointment-section" className="py-20 bg-[#FCFBF6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentBookingEngine />
          </div>
        </section>

        {/* 13. Online vs Clinic Contact Section (Address, Hours, Map, Inquiries) */}
        <ContactSection />

        {/* 14. FAQ Accordion */}
        <FaqSection />

        {/* 15. Final Dark Green CTA Banner */}
        <FinalCtaBanner />
      </main>

      {/* 16. Multi-Column Footer */}
      <Footer />

      {/* Modals, Drawers & Overlays */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <MedicalDisclaimerModal />
      <FloatingWhatsapp />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ClinicProvider>
      <MainContent />
    </ClinicProvider>
  );
};

export default App;
