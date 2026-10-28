import React from 'react';
import { ClinicProvider, useClinic } from './context/ClinicContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureBar } from './components/FeatureBar';
import { TreatmentCategoriesSection } from './components/TreatmentCategoriesSection';
import { ConsultationOptions } from './components/ConsultationOptions';
import { AppointmentProcess } from './components/AppointmentProcess';
import { ProductShopBanner } from './components/ProductShopBanner';
import { PractitionerProfile } from './components/PractitionerProfile';
import { WhyChooseClinic } from './components/WhyChooseClinic';
import { ProductConsultationBanner } from './components/ProductConsultationBanner';
import { PatientTestimonials } from './components/PatientTestimonials';
import { AppointmentBookingEngine } from './components/AppointmentBookingEngine';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { HomeSeoArticleSection } from './components/HomeSeoArticleSection';
import { WomensHealthSeoArticleSection } from './components/WomensHealthSeoArticleSection';
import { RespiratorySeoArticleSection } from './components/RespiratorySeoArticleSection';
import { SkinHairSeoArticleSection } from './components/SkinHairSeoArticleSection';
import { NeurologicalSeoArticleSection } from './components/NeurologicalSeoArticleSection';
import { RenalThyroidSeoArticleSection } from './components/RenalThyroidSeoArticleSection';
import { AnorectalVascularSeoArticleSection } from './components/AnorectalVascularSeoArticleSection';
import { JointMusculoskeletalSeoArticleSection } from './components/JointMusculoskeletalSeoArticleSection';
import { OphthalmicEyeSeoArticleSection } from './components/OphthalmicEyeSeoArticleSection';
import { Footer } from './components/Footer';
import { ProductsCatalogView } from './components/ProductsCatalogView';
import { HomeBlogSection } from './components/HomeBlogSection';
import { BlogPageView } from './components/BlogPageView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { MedicalDisclaimerModal } from './components/MedicalDisclaimerModal';
import { ToastContainer } from './components/ToastContainer';
import { WomensHealthCarePage } from './components/WomensHealthCarePage';
import { RespiratoryCarePage } from './components/RespiratoryCarePage';
import { SkinHairCarePage } from './components/SkinHairCarePage';
import { RenalThyroidCarePage } from './components/RenalThyroidCarePage';
import { NeurologicalCarePage } from './components/NeurologicalCarePage';
import { AnorectalVascularCarePage } from './components/AnorectalVascularCarePage';
import { JointMusculoskeletalCarePage } from './components/JointMusculoskeletalCarePage';
import { OphthalmicEyeCarePage } from './components/OphthalmicEyeCarePage';
import { PilesManjeriPage } from './components/PilesManjeriPage';
import { MenstrualManjeriPage } from './components/MenstrualManjeriPage';
import { SkinManjeriPage } from './components/SkinManjeriPage';
import { HairManjeriPage } from './components/HairManjeriPage';
import { AllergicRhinitisManjeriPage } from './components/AllergicRhinitisManjeriPage';
import { AcneManjeriPage } from './components/AcneManjeriPage';
import { EczemaManjeriPage } from './components/EczemaManjeriPage';
import { WartsManjeriPage } from './components/WartsManjeriPage';
import { CornsManjeriPage } from './components/CornsManjeriPage';
import { PsoriasisManjeriPage } from './components/PsoriasisManjeriPage';
import { RingwormManjeriPage } from './components/RingwormManjeriPage';
import { AlopeciaManjeriPage } from './components/AlopeciaManjeriPage';
import { SeoHead } from './components/SeoHead';
import { SeoPageEditModal } from './components/SeoPageEditModal';
import { FloatingSeoBadge } from './components/FloatingSeoBadge';

const MainContent: React.FC = () => {
  const { currentView } = useClinic();

  // Route 1: Admin Dashboard View
  if (currentView === 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
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
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
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
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
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
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <div className="py-12 bg-[#EEF2FB] text-center border-b border-[#D8E1F5]">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              ABOUT OUR PRACTICE
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] mt-2">
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

  // Route: Dedicated Women's Health & Gynecological Care View
  // URL: /homoeopathic-treatment-for-womens-health-gynecological-care/
  if (currentView === 'womens-health-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <WomensHealthCarePage />
          <FinalCtaBanner />
          <WomensHealthSeoArticleSection />
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

  // Route: Dedicated Respiratory, ENT & Allergy Conditions View
  // URL: /homoeopathic-treatment-for-respiratory-ent-allergy-conditions/
  if (currentView === 'respiratory-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <RespiratoryCarePage />
          <FinalCtaBanner />
          <RespiratorySeoArticleSection />
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

  // Route: Dedicated Skin, Hair & Scalp Conditions View
  // URL: /homoeopathic-treatment-for-skin-hair-scalp-conditions/
  if (currentView === 'skin-hair-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <SkinHairCarePage />
          <FinalCtaBanner />
          <SkinHairSeoArticleSection />
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

  // Route: Dedicated Renal, Urinary, Gallbladder & Thyroid Conditions View
  // URL: /homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/
  if (currentView === 'renal-thyroid-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <RenalThyroidCarePage />
          <FinalCtaBanner />
          <RenalThyroidSeoArticleSection />
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

  // Route: Dedicated Neurological & Headache Conditions View
  // URL: /homoeopathic-treatment-for-neurological-headache-conditions/
  if (currentView === 'neurological-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <NeurologicalCarePage />
          <FinalCtaBanner />
          <NeurologicalSeoArticleSection />
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

  // Route: Dedicated Anorectal & Vascular Conditions View
  // URL: /homoeopathic-treatment-for-anorectal-vascular-conditions/
  if (currentView === 'anorectal-vascular-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <AnorectalVascularCarePage />
          <FinalCtaBanner />
          <AnorectalVascularSeoArticleSection />
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

  // Route: Dedicated Joint, Musculoskeletal & Chronic Conditions View
  // URL: /homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/
  if (currentView === 'joint-musculoskeletal-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <JointMusculoskeletalCarePage />
          <FinalCtaBanner />
          <JointMusculoskeletalSeoArticleSection />
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

  // Route: Dedicated Ophthalmic / Eye Conditions View
  // URL: /homoeopathic-treatment-for-ophthalmic-eye-conditions/
  if (currentView === 'ophthalmic-eye-care') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <OphthalmicEyeCarePage />
          <FinalCtaBanner />
          <OphthalmicEyeSeoArticleSection />
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

  // Route: Dedicated Piles Homoeopathic Clinic in Manjeri View
  // URL: /piles-homoeopathic-clinic-in-manjeri/
  if (currentView === 'piles-homoeopathic-clinic-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <PilesManjeriPage />
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

  // Route: Dedicated Menstrual Homoeopathic Treatment in Manjeri View
  // URL: /menstrual-homoeopathic-treatment-in-manjeri/
  if (currentView === 'menstrual-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <MenstrualManjeriPage />
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

  // Route: Dedicated Skin Homoeopathic Treatment in Manjeri View
  // URL: /skin-homoeopathic-treatment-in-manjeri/
  if (currentView === 'skin-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <SkinManjeriPage />
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

  // Route: Dedicated Hair Homoeopathic Treatment in Manjeri View
  // URL: /hair-homoeopathic-treatment-in-manjeri/
  if (currentView === 'hair-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <HairManjeriPage />
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

  // Route: Dedicated Allergic Rhinitis Homoeopathic Treatment in Manjeri View
  // URL: /allergic-rhinitis-homoeopathic-treatment-in-manjeri/
  if (currentView === 'allergic-rhinitis-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <AllergicRhinitisManjeriPage />
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

  // Route: Dedicated Homoeopathic Treatment for Acne Skin Problems in Manjeri View
  // URL: /homoeopathic-treatment-for-acne-skin-problems-in-manjeri/
  if (currentView === 'acne-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <AcneManjeriPage />
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

  // Route: Dedicated Homoeopathic Treatment for Eczema Skin Problems in Manjeri View
  // URL: /homoeopathic-treatment-for-eczema-skin-problems-in-manjeri/
  if (currentView === 'eczema-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <EczemaManjeriPage />
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

  // Route: Dedicated Skin Warts Homoeopathic Treatment in Manjeri View
  // URL: /skin-warts-homoeopathic-treatment-in-manjeri/
  if (currentView === 'warts-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <WartsManjeriPage />
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

  // Route: Dedicated Skin Corns Homoeopathic Treatment in Manjeri View
  // URL: /skin-corns-homoeopathic-treatment-in-manjeri/
  if (currentView === 'corns-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <CornsManjeriPage />
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

  // Route: Dedicated Psoriasis Homoeopathic Treatment in Manjeri View
  // URL: /psoriasis-homoeopathic-treatment-in-manjeri/
  if (currentView === 'psoriasis-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <PsoriasisManjeriPage />
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

  // Route: Dedicated Ringworm Homoeopathic Treatment in Manjeri View
  // URL: /ringworm-homoeopathic-treatment-in-manjeri/
  if (currentView === 'ringworm-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <RingwormManjeriPage />
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

  // Route: Dedicated Alopecia Homoeopathic Treatment in Manjeri View
  // URL: /alopecia-homoeopathic-treatment-in-manjeri/
  if (currentView === 'alopecia-treatment-manjeri') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <AlopeciaManjeriPage />
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

  // Route 4.5: Dedicated Treatments View
  if (currentView === 'treatments') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <div className="py-12 bg-[#EEF2FB] text-center border-b border-[#D8E1F5]">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              SPECIALIZED CLINICAL CARE
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] mt-2">
              Homeopathic Treatments & Modalities
            </h1>
            <p className="text-sm sm:text-base text-[#5F6F65] max-w-2xl mx-auto mt-2 px-4">
              Gentle, personalized treatment protocols addressing root causes across chronic and lifestyle health conditions.
            </p>
          </div>
          <TreatmentCategoriesSection />
          <ConsultationOptions />
          <AppointmentProcess />
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
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <ConsultationOptions />
          <TreatmentCategoriesSection />
          <AppointmentProcess />
          <div className="py-16 bg-[#F8FAFD] border-t border-[#D8E1F5]">
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

  // Route 6: Blog & Knowledge Hub View
  if (currentView === 'blog') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <BlogPageView />
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

  // Route 7: Reviews View
  if (currentView === 'reviews') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
        <Header />
        <main className="flex-1">
          <div className="py-12 bg-[#EEF2FB] text-center border-b border-[#D8E1F5]">
            <span className="text-xs uppercase tracking-widest font-bold text-[#303A88] font-sans">
              VERIFIED PATIENT EXPERIENCES
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2559] mt-2">
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

  // Route 8: Q&A / FAQ View
  if (currentView === 'faq' || currentView === 'qa') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
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

  // Route 9: Contact View
  if (currentView === 'contact') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
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

  // Default: Full Structured Homepage
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] font-sans">
      {/* 1. Sticky Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section (Split Layout) */}
        <HeroSection />

        {/* 3. Floating Trust / Service Features */}
        <FeatureBar />

        {/* 4. Main Homeopathy Treatment Categories */}
        <TreatmentCategoriesSection />

        {/* 5. Consultation Options (Online vs Clinic) */}
        <ConsultationOptions />

        {/* 6. 4-Step Consultation Process */}
        <AppointmentProcess />

        {/* 7. Product Shop Banner */}
        <ProductShopBanner />

        {/* 9. Practitioner Profile (Dr. Anjali Chandrasekhar) */}
        <PractitionerProfile />

        {/* 10. Why Choose Our Clinic (8 Feature Cards) */}
        <WhyChooseClinic />

        {/* 11. Product Consultation CTA Banner */}
        <ProductConsultationBanner />

        {/* 12. Patient Testimonials (Carousel & Cards) */}
        <PatientTestimonials />

        {/* 13. Clinical Insights & Knowledge Column */}
        <HomeBlogSection />

        {/* 14. Book Appointment (Core Functional Booking Engine) */}
        <section id="book-appointment-section" className="py-20 bg-[#F8FAFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppointmentBookingEngine />
          </div>
        </section>

        {/* 15. Online vs Clinic Contact Section (Address, Hours, Map, Inquiries) */}
        <ContactSection />

        {/* 16. FAQ Accordion */}
        <FaqSection />

        {/* 17. Final CTA Banner */}
        <FinalCtaBanner />

        {/* 18. Website SEO Content: Homoeopathic Clinic in Malappuram – Anjali Homoeo Clinic */}
        <HomeSeoArticleSection />
      </main>

      {/* 20. Multi-Column Footer */}
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

const AppShell: React.FC = () => {
  const {
    currentPageSeo,
    isQuickSeoModalOpen,
    setIsQuickSeoModalOpen,
    updatePageSeo,
  } = useClinic();

  return (
    <>
      <SeoHead seo={currentPageSeo} />
      <MainContent />
      <FloatingSeoBadge />
      <SeoPageEditModal
        page={currentPageSeo}
        isOpen={isQuickSeoModalOpen}
        onClose={() => setIsQuickSeoModalOpen(false)}
        onSave={(updated) => updatePageSeo(updated.id, updated)}
      />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ClinicProvider>
      <AppShell />
    </ClinicProvider>
  );
};

export default App;
