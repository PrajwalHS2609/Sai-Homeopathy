import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ClinicSettings,
  Practitioner,
  Product,
  CartItem,
  Appointment,
  AppointmentStatus,
  ConsultationType,
  Order,
  OrderCustomerInfo,
  BlogPost,
} from '../types';
import {
  INITIAL_SETTINGS,
  INITIAL_PRACTITIONERS,
  INITIAL_PRODUCTS,
  INITIAL_APPOINTMENTS,
  INITIAL_BLOG_POSTS,
} from '../data/initialData';
import { PageSeoMetadata } from '../types/seo';
import { DEFAULT_SEO_PAGES } from '../data/defaultSeoData';
import {
  loadStoredSeoPages,
  saveStoredSeoPages,
  generateDefaultSchema,
} from '../services/seoService';

export type NavView =
  | 'home'
  | 'about'
  | 'treatments'
  | 'consultations'
  | 'products'
  | 'blog'
  | 'reviews'
  | 'faq'
  | 'qa'
  | 'contact'
  | 'book-appointment'
  | 'admin'
  | 'womens-health-care'
  | 'respiratory-care'
  | 'skin-hair-care'
  | 'renal-thyroid-care'
  | 'neurological-care'
  | 'anorectal-vascular-care'
  | 'joint-musculoskeletal-care'
  | 'ophthalmic-eye-care'
  | 'piles-homeopathic-clinic-manjeri'
  | 'piles-homoeopathic-clinic-manjeri'
  | 'menstrual-treatment-manjeri'
  | 'skin-treatment-manjeri'
  | 'hair-treatment-manjeri'
  | 'allergic-rhinitis-manjeri'
  | 'acne-treatment-manjeri'
  | 'eczema-treatment-manjeri'
  | 'warts-treatment-manjeri'
  | 'corns-treatment-manjeri'
  | 'psoriasis-treatment-manjeri'
  | 'ringworm-treatment-manjeri'
  | 'alopecia-treatment-manjeri'
  | 'alopecia-treatment-malappuram'
  | 'hair-treatment-malappuram'
  | 'skin-treatment-malappuram'
  | 'menstrual-treatment-malappuram'
  | 'piles-clinic-malappuram'
  | 'piles-clinic-tirur'
  | 'menstrual-doctor-tirur'
  | 'skin-treatment-tirur'
  | 'hair-treatment-tirur';

interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

interface ClinicContextType {
  // Navigation & View
  currentView: NavView;
  setCurrentView: (view: NavView) => void;
  bookingTypePreset: ConsultationType;
  setBookingTypePreset: (type: ConsultationType) => void;
  bookingReasonPreset: string;
  setBookingReasonPreset: (reason: string) => void;
  navigateToBooking: (type?: ConsultationType) => void;
  navigateToBookingWithReason: (reason: string, type?: ConsultationType) => void;

  // Settings
  settings: ClinicSettings;
  updateSettings: (newSettings: Partial<ClinicSettings>) => void;

  // Practitioners
  practitioners: Practitioner[];
  updatePractitioner: (id: string, updates: Partial<Practitioner>) => void;

  // Appointments
  appointments: Appointment[];
  bookAppointment: (data: Omit<Appointment, 'id' | 'bookingReference' | 'status' | 'createdAt' | 'fee'>) => Appointment;
  updateAppointmentStatus: (id: string, status: AppointmentStatus, internalNotes?: string) => void;
  rescheduleAppointment: (id: string, newDate: string, newTime: string) => void;
  isSlotBooked: (date: string, time: string, consultationType: ConsultationType) => boolean;
  getAvailableSlots: (dateString: string, consultationType: ConsultationType) => string[];

  // Products & E-Commerce
  products: Product[];
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (product: Product | null) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Checkout & Orders
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  orders: Order[];
  createOrder: (customerInfo: OrderCustomerInfo, paymentMethod: string) => Order;
  lastConfirmedOrder: Order | null;
  setLastConfirmedOrder: (order: Order | null) => void;

  // Blog
  blogPosts: BlogPost[];
  selectedPostForReader: BlogPost | null;
  setSelectedPostForReader: (post: BlogPost | null) => void;
  openBlogPost: (post: BlogPost) => void;

  // Medical Disclaimer Modal
  isDisclaimerOpen: boolean;
  setIsDisclaimerOpen: (open: boolean) => void;

  // Toast
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;

  // SEO Meta Data Management
  seoPages: PageSeoMetadata[];
  currentPageSeo: PageSeoMetadata;
  updatePageSeo: (id: string, updates: Partial<PageSeoMetadata>) => void;
  addPageSeo: (newPage: PageSeoMetadata) => void;
  deletePageSeo: (id: string) => void;
  resetPageSeoToDefault: (id: string) => void;
  resetAllSeoToDefault: () => void;
  isQuickSeoModalOpen: boolean;
  setIsQuickSeoModalOpen: (open: boolean) => void;
  openQuickSeoModal: () => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

const normalizeRoutePath = (pathname: string) => {
  return pathname.toLowerCase().replace(/\/+$/, '').replace(/homoeopathic/g, 'homeopathic');
};

const isWomensHealthPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-womens-health-gynocological-care' ||
    clean === '/homeopathic-treatment-for-womens-health-gynecological-care'
  );
};

const isRespiratoryPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-respiratory-ent-allergy-conditions' ||
    clean === '/homeopathic-treatment-for-respiratory-ent-allergy' ||
    clean === '/respiratory-ent-allergy' ||
    clean === '/health-conditions/respiratory-ent-allergy'
  );
};

const isSkinHairPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-skin-hair-scalp-conditions' ||
    clean === '/homeopathic-treatment-for-skin-hair-scalp' ||
    clean === '/skin-hair-scalp' ||
    clean === '/health-conditions/skin-hair-scalp'
  );
};

const isRenalThyroidPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions' ||
    clean === '/homeopathic-treatment-for-renal-urinary-thyroid' ||
    clean === '/renal-urinary-gallbladder-thyroid' ||
    clean === '/health-conditions/renal-urinary-gallbladder-thyroid'
  );
};

const isNeurologicalPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-neurological-headache-conditions' ||
    clean === '/homeopathic-treatment-for-neurological-headache' ||
    clean === '/neurological-headache' ||
    clean === '/health-conditions/neurological-headache'
  );
};

const isAnorectalVascularPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-anorectal-vascular-conditions' ||
    clean === '/homeopathic-treatment-for-anorectal-vascular' ||
    clean === '/anorectal-vascular-conditions' ||
    clean === '/anorectal-vascular' ||
    clean === '/health-conditions/anorectal-vascular'
  );
};

const isJointMusculoskeletalPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-joint-musculoskeletal-chronic-conditions' ||
    clean === '/homeopathic-treatment-for-joint-musculoskeletal-conditions' ||
    clean === '/joint-musculoskeletal-chronic-conditions' ||
    clean === '/joint-musculoskeletal-conditions' ||
    clean === '/joint-musculoskeletal' ||
    clean === '/health-conditions/joint-musculoskeletal'
  );
};

const isOphthalmicEyePath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-ophthalmic-eye-conditions' ||
    clean === '/homeopathic-treatment-for-eye-conditions' ||
    clean === '/ophthalmic-eye-conditions' ||
    clean === '/eye-conditions' ||
    clean === '/health-conditions/eye-conditions'
  );
};

const isPcodBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/pcod-symptoms-causes-diagnosis-treatment' ||
    clean === '/pcod-explained-symptoms-causes-diagnosis-and-treatment-options' ||
    clean === '/blog/pcod-symptoms-causes-diagnosis-treatment'
  );
};

const isPcodFertilityBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/pcod-and-fertility-what-every-woman-should-know' ||
    clean === '/blog/pcod-and-fertility-what-every-woman-should-know' ||
    clean === '/pcod-and-fertility' ||
    clean === '/pcod-fertility'
  );
};

const isHormonalImbalanceBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/hormonal-imbalance-in-women-signs-causes-tests' ||
    clean === '/blog/hormonal-imbalance-in-women-signs-causes-tests' ||
    clean === '/hormonal-imbalance-in-women' ||
    clean === '/hormonal-imbalance'
  );
};

const isPainfulPeriodsBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/painful-periods-diagnosis-and-treatment-options' ||
    clean === '/blog/painful-periods-diagnosis-and-treatment-options' ||
    clean === '/painful-periods' ||
    clean === '/painful-periods-diagnosis-and-treatment'
  );
};

const isOvarianCystsBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/ovarian-cysts-symptoms-diagnosis-and-follow-up-care' ||
    clean === '/ovarian-cysts-symptoms-diagnosis-follow-up-care' ||
    clean === '/blog/ovarian-cysts-symptoms-diagnosis-and-follow-up-care' ||
    clean === '/ovarian-cysts-symptoms-and-care' ||
    clean === '/ovarian-cysts'
  );
};

const isNasalPolypsBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/nasal-polyps-symptoms-diagnosis-and-available-treatments' ||
    clean === '/nasal-polyps-symptoms-diagnosis-available-treatments' ||
    clean === '/blog/nasal-polyps-symptoms-diagnosis-and-available-treatments' ||
    clean === '/nasal-polyps-symptoms-and-treatments' ||
    clean === '/nasal-polyps'
  );
};

const isSeverePeriodPainPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/severe-period-pain-when-to-worry' ||
    clean === '/blog/severe-period-pain-when-to-worry' ||
    clean === '/severe-period-pain-when-are-menstrual-cramps-a-concern'
  );
};

const isUterineFibroidsBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/uterine-fibroids-symptoms-diagnosis-treatment' ||
    clean === '/uterine-fibroids-symptoms-diagnosis-and-treatment-options' ||
    clean === '/blog/uterine-fibroids-symptoms-diagnosis-treatment' ||
    clean === '/uterine-fibroids'
  );
};

const isChronicSinusitisBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/chronic-sinusitis-symptoms-causes-treatment' ||
    clean === '/chronic-sinusitis-symptoms-causes-and-treatment-options' ||
    clean === '/blog/chronic-sinusitis-symptoms-causes-treatment' ||
    clean === '/chronic-sinusitis'
  );
};

const isAsthmaSymptomsBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/asthma-symptoms-early-warning-signs' ||
    clean === '/asthma-symptoms-early-warning-signs-you-should-recognize' ||
    clean === '/blog/asthma-symptoms-early-warning-signs' ||
    clean === '/asthma-symptoms'
  );
};

const isAllergicRhinitisBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/allergic-rhinitis-symptoms-causes-and-treatment-options' ||
    clean === '/allergic-rhinitis-symptoms-causes-treatment-options' ||
    clean === '/blog/allergic-rhinitis-symptoms-causes-and-treatment-options' ||
    clean === '/blog/allergic-rhinitis-symptoms-causes-treatment-options' ||
    clean === '/allergic-rhinitis-symptoms-causes-treatment' ||
    clean === '/allergic-rhinitis-guide'
  );
};

const isPersistentCoughBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/persistent-cough-common-causes-and-when-to-see-a-doctor' ||
    clean === '/persistent-cough-causes-and-when-to-see-a-doctor' ||
    clean === '/persistent-cough-causes-when-to-see-a-doctor' ||
    clean === '/blog/persistent-cough-common-causes-and-when-to-see-a-doctor' ||
    clean === '/persistent-cough-causes' ||
    clean === '/persistent-cough'
  );
};

const isTonsillitisBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/tonsillitis-symptoms-causes-and-available-treatment-options' ||
    clean === '/tonsillitis-symptoms-causes-treatment-options' ||
    clean === '/tonsillitis-symptoms-causes-and-treatment-options' ||
    clean === '/blog/tonsillitis-symptoms-causes-and-available-treatment-options' ||
    clean === '/tonsillitis-symptoms-causes' ||
    clean === '/tonsillitis'
  );
};

const isEczemaVsPsoriasisBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/eczema-vs-psoriasis-how-to-understand-the-differences' ||
    clean === '/eczema-vs-psoriasis-understanding-differences' ||
    clean === '/eczema-vs-psoriasis-differences' ||
    clean === '/blog/eczema-vs-psoriasis-how-to-understand-the-differences' ||
    clean === '/eczema-vs-psoriasis'
  );
};

const isHomoeoClinicMalappuramBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-clinic-in-malappuram-guide' ||
    clean === '/homeopathic-clinic-in-malappuram' ||
    clean === '/blog/homeopathic-clinic-in-malappuram-guide' ||
    clean === '/homeopathic-clinic-malappuram' ||
    clean === '/homeopathic-clinic-in-malappuram-a-guide-to-choosing-a-clinic'
  );
};

const isPilesBlogPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/what-causes-piles-risk-factors-prevention' ||
    clean === '/what-causes-piles' ||
    clean === '/blog/what-causes-piles-risk-factors-prevention' ||
    clean === '/piles-causes-risk-factors-prevention' ||
    clean === '/what-causes-piles-common-risk-factors-and-prevention-tips'
  );
};

const isPilesManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/piles-homeopathic-clinic-in-manjeri' ||
    clean === '/piles-homeopathic-clinic-manjeri' ||
    clean === '/piles-clinic-manjeri' ||
    clean === '/piles-clinic-in-manjeri' ||
    clean === '/piles-consultation-in-manjeri'
  );
};

const isMenstrualManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/menstrual-homeopathic-treatment-in-manjeri' ||
    clean === '/menstrual-homeopathic-treatment-manjeri' ||
    clean === '/menstrual-treatment-manjeri' ||
    clean === '/menstrual-treatment-in-manjeri' ||
    clean === '/menstrual-health-clinic-in-manjeri' ||
    clean === '/menstrual-problems-doctor-in-manjeri'
  );
};

const isSkinManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/skin-homeopathic-treatment-in-manjeri' ||
    clean === '/skin-homeopathic-treatment-manjeri' ||
    clean === '/skin-treatment-manjeri' ||
    clean === '/skin-treatment-in-manjeri' ||
    clean === '/skin-health-clinic-in-manjeri' ||
    clean === '/skin-problems-treatment-in-manjeri' ||
    clean === '/skin-disease-treatment-in-manjeri'
  );
};

const isHairManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/hair-homeopathic-treatment-in-manjeri' ||
    clean === '/hair-homeopathic-treatment-manjeri' ||
    clean === '/hair-treatment-manjeri' ||
    clean === '/hair-treatment-in-manjeri' ||
    clean === '/hair-health-clinic-in-manjeri' ||
    clean === '/hair-fall-treatment-in-manjeri' ||
    clean === '/hair-loss-treatment-in-manjeri' ||
    clean === '/hair-doctor-in-manjeri' ||
    clean === '/hair-specialist-in-manjeri'
  );
};

const isAllergicRhinitisManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/allergic-rhinitis-homeopathic-treatment-in-manjeri' ||
    clean === '/allergic-rhinitis-homeopathic-treatment-manjeri' ||
    clean === '/allergic-rhinitis-treatment-in-manjeri' ||
    clean === '/allergic-rhinitis-treatment-manjeri' ||
    clean === '/allergic-rhinitis-clinic-in-manjeri' ||
    clean === '/allergic-rhinitis-doctor-in-manjeri' ||
    clean === '/allergic-rhinitis-specialist-in-manjeri' ||
    clean === '/nasal-allergy-treatment-in-manjeri' ||
    clean === '/seasonal-allergy-treatment-in-manjeri'
  );
};

const isAcneManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-acne-skin-problems-in-manjeri' ||
    clean === '/homeopathic-treatment-for-acne-skin-problems-manjeri' ||
    clean === '/acne-skin-problems-treatment-in-manjeri' ||
    clean === '/acne-treatment-in-manjeri' ||
    clean === '/acne-treatment-manjeri' ||
    clean === '/acne-clinic-in-manjeri' ||
    clean === '/acne-doctor-in-manjeri' ||
    clean === '/acne-specialist-in-manjeri' ||
    clean === '/pimples-treatment-in-manjeri' ||
    clean === '/homeopathic-acne-treatment-in-manjeri' ||
    clean === '/acne-homeopathic-treatment-in-manjeri'
  );
};

const isEczemaManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-for-eczema-skin-problems-in-manjeri' ||
    clean === '/homeopathic-treatment-for-eczema-skin-problems-manjeri' ||
    clean === '/eczema-skin-problems-treatment-in-manjeri' ||
    clean === '/eczema-treatment-in-manjeri' ||
    clean === '/eczema-treatment-manjeri' ||
    clean === '/eczema-clinic-in-manjeri' ||
    clean === '/eczema-doctor-in-manjeri' ||
    clean === '/eczema-specialist-in-manjeri' ||
    clean === '/homeopathic-eczema-treatment-in-manjeri' ||
    clean === '/eczema-homeopathic-treatment-in-manjeri'
  );
};

const isWartsManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/skin-warts-homeopathic-treatment-in-manjeri' ||
    clean === '/skin-warts-homeopathic-treatment-manjeri' ||
    clean === '/skin-warts-treatment-in-manjeri' ||
    clean === '/skin-warts-treatment-manjeri' ||
    clean === '/warts-treatment-in-manjeri' ||
    clean === '/warts-treatment-manjeri' ||
    clean === '/skin-warts-clinic-in-manjeri' ||
    clean === '/skin-warts-doctor-in-manjeri' ||
    clean === '/skin-warts-specialist-in-manjeri' ||
    clean === '/homeopathic-treatment-for-skin-warts-in-manjeri' ||
    clean === '/skin-wart-removal-treatment-in-manjeri'
  );
};

const isCornsManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/skin-corns-homeopathic-treatment-in-manjeri' ||
    clean === '/skin-corns-homeopathic-treatment-manjeri' ||
    clean === '/skin-corns-treatment-in-manjeri' ||
    clean === '/skin-corns-treatment-manjeri' ||
    clean === '/corns-treatment-in-manjeri' ||
    clean === '/corns-treatment-manjeri' ||
    clean === '/corn-treatment-in-manjeri' ||
    clean === '/foot-corn-treatment-in-manjeri' ||
    clean === '/corns-clinic-in-manjeri' ||
    clean === '/foot-corn-clinic-in-manjeri' ||
    clean === '/corns-doctor-in-manjeri' ||
    clean === '/corns-specialist-in-manjeri' ||
    clean === '/homeopathic-treatment-for-corns-in-manjeri' ||
    clean === '/corn-removal-treatment-in-manjeri'
  );
};

const isPsoriasisManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/psoriasis-homeopathic-treatment-in-manjeri' ||
    clean === '/psoriasis-homeopathic-treatment-manjeri' ||
    clean === '/psoriasis-treatment-in-manjeri' ||
    clean === '/psoriasis-treatment-manjeri' ||
    clean === '/skin-psoriasis-treatment-in-manjeri' ||
    clean === '/chronic-psoriasis-treatment-in-manjeri' ||
    clean === '/psoriasis-clinic-in-manjeri' ||
    clean === '/psoriasis-doctor-in-manjeri' ||
    clean === '/psoriasis-specialist-in-manjeri' ||
    clean === '/homeopathy-for-psoriasis-in-manjeri' ||
    clean === '/homeopathic-treatment-for-psoriasis-in-manjeri' ||
    clean === '/psoriasis-homeopathy-clinic-in-manjeri'
  );
};

const isRingwormManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/ringworm-homeopathic-treatment-in-manjeri' ||
    clean === '/ringworm-homeopathic-treatment-manjeri' ||
    clean === '/ringworm-treatment-in-manjeri' ||
    clean === '/ringworm-treatment-manjeri' ||
    clean === '/skin-ringworm-treatment-in-manjeri' ||
    clean === '/fungal-skin-infection-treatment-in-manjeri' ||
    clean === '/ringworm-clinic-in-manjeri' ||
    clean === '/ringworm-doctor-in-manjeri' ||
    clean === '/ringworm-specialist-in-manjeri' ||
    clean === '/homeopathy-for-ringworm-in-manjeri' ||
    clean === '/homeopathic-treatment-for-ringworm-in-manjeri' ||
    clean === '/ringworm-consultation-in-manjeri'
  );
};

const isAlopeciaManjeriPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/alopecia-homeopathic-treatment-in-manjeri' ||
    clean === '/alopecia-homeopathic-treatment-manjeri' ||
    clean === '/alopecia-treatment-in-manjeri' ||
    clean === '/alopecia-treatment-manjeri' ||
    clean === '/hair-loss-treatment-in-manjeri' ||
    clean === '/hair-loss-homeopathic-treatment-in-manjeri' ||
    clean === '/hair-thinning-treatment-in-manjeri' ||
    clean === '/alopecia-clinic-in-manjeri' ||
    clean === '/alopecia-doctor-in-manjeri' ||
    clean === '/alopecia-specialist-in-manjeri' ||
    clean === '/homeopathy-for-alopecia-in-manjeri' ||
    clean === '/homeopathic-treatment-for-alopecia-in-manjeri' ||
    clean === '/alopecia-consultation-in-manjeri' ||
    clean === '/alopecia-areata-treatment-in-manjeri'
  );
};

const isAlopeciaMalappuramPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/alopecia-homeopathic-treatment-in-malappuram' ||
    clean === '/alopecia-homoeopathic-treatment-in-malappuram' ||
    clean === '/alopecia-treatment-in-malappuram' ||
    clean === '/alopecia-treatment-malappuram' ||
    clean === '/hair-loss-treatment-in-malappuram' ||
    clean === '/hair-fall-treatment-in-malappuram' ||
    clean === '/hair-loss-homeopathic-treatment-in-malappuram' ||
    clean === '/hair-thinning-treatment-in-malappuram' ||
    clean === '/alopecia-clinic-in-malappuram' ||
    clean === '/alopecia-doctor-in-malappuram' ||
    clean === '/alopecia-specialist-in-malappuram' ||
    clean === '/homeopathy-for-alopecia-in-malappuram' ||
    clean === '/homeopathic-treatment-for-alopecia-in-malappuram' ||
    clean === '/alopecia-consultation-in-malappuram' ||
    clean === '/alopecia-areata-treatment-in-malappuram'
  );
};

const isHairMalappuramPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/hair-and-scalp-homoeopathic-treatment-in-malappuram' ||
    clean === '/hair-and-scalp-homeopathic-treatment-in-malappuram' ||
    clean === '/hair-and-scalp-treatment-in-malappuram' ||
    clean === '/hair-treatment-in-malappuram' ||
    clean === '/hair-treatment-malappuram' ||
    clean === '/scalp-treatment-in-malappuram' ||
    clean === '/hair-doctor-in-malappuram' ||
    clean === '/hair-specialist-in-malappuram' ||
    clean === '/hair-homoeopathy-clinic-in-malappuram' ||
    clean === '/hair-homeopathy-clinic-in-malappuram' ||
    clean === '/homoeopathic-doctor-for-hair-problems-in-malappuram' ||
    clean === '/homeopathic-doctor-for-hair-problems-in-malappuram' ||
    clean === '/hair-care-clinic-in-malappuram' ||
    clean === '/hair-health-clinic-in-malappuram'
  );
};

const isSkinMalappuramPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/skin-homeopathic-treatment-in-malappuram' ||
    clean === '/skin-homoeopathic-treatment-in-malappuram' ||
    clean === '/skin-treatment-in-malappuram' ||
    clean === '/skin-treatment-malappuram' ||
    clean === '/skin-problems-treatment-in-malappuram' ||
    clean === '/skin-disease-treatment-in-malappuram' ||
    clean === '/skin-doctor-in-malappuram' ||
    clean === '/skin-specialist-in-malappuram' ||
    clean === '/skin-homeopathy-clinic-in-malappuram' ||
    clean === '/skin-homoeopathy-clinic-in-malappuram' ||
    clean === '/homeopathic-doctor-for-skin-problems-in-malappuram' ||
    clean === '/homoeopathic-doctor-for-skin-problems-in-malappuram' ||
    clean === '/skin-health-clinic-in-malappuram'
  );
};

const isMenstrualMalappuramPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/menstrual-homeopathic-treatment-in-malappuram' ||
    clean === '/menstrual-homoeopathic-treatment-in-malappuram' ||
    clean === '/menstrual-treatment-in-malappuram' ||
    clean === '/menstrual-treatment-malappuram' ||
    clean === '/period-pain-treatment-in-malappuram' ||
    clean === '/period-problems-treatment-in-malappuram' ||
    clean === '/menstrual-problems-doctor-in-malappuram' ||
    clean === '/womens-health-doctor-in-malappuram' ||
    clean === '/menstrual-disorder-consultation-in-malappuram' ||
    clean === '/menstrual-health-clinic-in-malappuram' ||
    clean === '/homeopathy-clinic-for-menstrual-problems-in-malappuram' ||
    clean === '/homoeopathy-clinic-for-menstrual-problems-in-malappuram'
  );
};

const isPilesMalappuramPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathy-clinic-for-piles-in-malappuram' ||
    clean === '/homoeopathy-clinic-for-piles-in-malappuram' ||
    clean === '/piles-homeopathic-clinic-in-malappuram' ||
    clean === '/piles-homoeopathic-clinic-in-malappuram' ||
    clean === '/piles-treatment-in-malappuram' ||
    clean === '/piles-clinic-in-malappuram' ||
    clean === '/piles-specialist-in-malappuram' ||
    clean === '/piles-doctor-in-malappuram' ||
    clean === '/haemorrhoids-treatment-in-malappuram'
  );
};

const isPilesTirurPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathy-clinic-for-piles-near-tirur' ||
    clean === '/homoeopathy-clinic-for-piles-near-tirur' ||
    clean === '/piles-homeopathic-clinic-near-tirur' ||
    clean === '/piles-homoeopathic-clinic-near-tirur' ||
    clean === '/piles-treatment-in-tirur' ||
    clean === '/piles-clinic-in-tirur' ||
    clean === '/piles-specialist-in-tirur' ||
    clean === '/piles-doctor-in-tirur' ||
    clean === '/piles-treatment-near-tirur' ||
    clean === '/piles-consultation-in-tirur'
  );
};

const isMenstrualTirurPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-doctor-near-tirur-for-periods-problem' ||
    clean === '/homoeopathic-doctor-near-tirur-for-periods-problem' ||
    clean === '/homeopathic-doctor-near-tirur-for-period-problem' ||
    clean === '/homeopathy-doctor-near-tirur-for-periods-problem' ||
    clean === '/menstrual-problems-doctor-in-tirur' ||
    clean === '/menstrual-treatment-in-tirur' ||
    clean === '/period-pain-consultation-in-tirur' ||
    clean === '/homeopathic-treatment-for-menstrual-problems-in-tirur' ||
    clean === '/homeopathy-clinic-for-menstrual-problems-in-tirur' ||
    clean === '/period-problems-treatment-in-tirur' ||
    clean === '/womens-health-doctor-in-tirur'
  );
};

const isSkinTirurPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homeopathic-treatment-near-tirur-for-skin-problems' ||
    clean === '/homoeopathic-treatment-near-tirur-for-skin-problems' ||
    clean === '/homeopathic-treatment-near-tirur-for-skin-problem' ||
    clean === '/skin-doctor-in-tirur' ||
    clean === '/skin-treatment-in-tirur' ||
    clean === '/skin-specialist-in-tirur' ||
    clean === '/homeopathy-clinic-for-skin-problems-in-tirur' ||
    clean === '/homeopathic-skin-treatment-in-tirur' ||
    clean === '/skin-homeopathic-treatment-in-tirur' ||
    clean === '/skin-homeopathy-clinic-in-tirur' ||
    clean === '/skin-problems-treatment-in-tirur' ||
    clean === '/skin-health-clinic-in-tirur'
  );
};

const isHairTirurPath = (pathname: string) => {
  const clean = normalizeRoutePath(pathname);
  return (
    clean === '/homoeopathic-treatment-in-tirur-for-hair-and-scalp' ||
    clean === '/homeopathic-treatment-in-tirur-for-hair-and-scalp' ||
    clean === '/hair-treatment-in-tirur' ||
    clean === '/hair-fall-treatment-in-tirur' ||
    clean === '/hair-specialist-in-tirur' ||
    clean === '/hair-doctor-in-tirur' ||
    clean === '/hair-health-clinic-in-tirur' ||
    clean === '/hair-and-scalp-treatment-in-tirur' ||
    clean === '/homoeopathic-hair-treatment-in-tirur' ||
    clean === '/homeopathic-hair-treatment-in-tirur' ||
    clean === '/hair-homoeopathy-clinic-in-tirur' ||
    clean === '/hair-homeopathy-clinic-in-tirur' ||
    clean === '/hair-care-clinic-in-tirur' ||
    clean === '/homoeopathic-doctor-for-hair-problems-in-tirur' ||
    clean === '/homeopathic-doctor-for-hair-problems-in-tirur'
  );
};

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [currentView, setCurrentView] = useState<NavView>(() => {
    if (typeof window !== 'undefined') {
      if (isSeverePeriodPainPath(window.location.pathname)) {
        return 'blog';
      }
      if (isPcodBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isPcodFertilityBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isHormonalImbalanceBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isPainfulPeriodsBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isOvarianCystsBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isNasalPolypsBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isUterineFibroidsBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isChronicSinusitisBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isAsthmaSymptomsBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isHomoeoClinicMalappuramBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isPilesBlogPath(window.location.pathname)) {
        return 'blog';
      }
      if (isWomensHealthPath(window.location.pathname)) {
        return 'womens-health-care';
      }
      if (isRespiratoryPath(window.location.pathname)) {
        return 'respiratory-care';
      }
      if (isSkinHairPath(window.location.pathname)) {
        return 'skin-hair-care';
      }
      if (isRenalThyroidPath(window.location.pathname)) {
        return 'renal-thyroid-care';
      }
      if (isNeurologicalPath(window.location.pathname)) {
        return 'neurological-care';
      }
      if (isAnorectalVascularPath(window.location.pathname)) {
        return 'anorectal-vascular-care';
      }
      if (isJointMusculoskeletalPath(window.location.pathname)) {
        return 'joint-musculoskeletal-care';
      }
      if (isOphthalmicEyePath(window.location.pathname)) {
        return 'ophthalmic-eye-care';
      }
      if (isPilesManjeriPath(window.location.pathname)) {
        return 'piles-homeopathic-clinic-manjeri';
      }
      if (isMenstrualManjeriPath(window.location.pathname)) {
        return 'menstrual-treatment-manjeri';
      }
      if (isSkinManjeriPath(window.location.pathname)) {
        return 'skin-treatment-manjeri';
      }
      if (isHairManjeriPath(window.location.pathname)) {
        return 'hair-treatment-manjeri';
      }
      if (isAllergicRhinitisManjeriPath(window.location.pathname)) {
        return 'allergic-rhinitis-manjeri';
      }
      if (isAcneManjeriPath(window.location.pathname)) {
        return 'acne-treatment-manjeri';
      }
      if (isEczemaManjeriPath(window.location.pathname)) {
        return 'eczema-treatment-manjeri';
      }
      if (isWartsManjeriPath(window.location.pathname)) {
        return 'warts-treatment-manjeri';
      }
      if (isCornsManjeriPath(window.location.pathname)) {
        return 'corns-treatment-manjeri';
      }
      if (isPsoriasisManjeriPath(window.location.pathname)) {
        return 'psoriasis-treatment-manjeri';
      }
      if (isRingwormManjeriPath(window.location.pathname)) {
        return 'ringworm-treatment-manjeri';
      }
      if (isAlopeciaManjeriPath(window.location.pathname)) {
        return 'alopecia-treatment-manjeri';
      }
      if (isAlopeciaMalappuramPath(window.location.pathname)) {
        return 'alopecia-treatment-malappuram';
      }
      if (isHairMalappuramPath(window.location.pathname)) {
        return 'hair-treatment-malappuram';
      }
      if (isSkinMalappuramPath(window.location.pathname)) {
        return 'skin-treatment-malappuram';
      }
      if (isMenstrualMalappuramPath(window.location.pathname)) {
        return 'menstrual-treatment-malappuram';
      }
      if (isPilesMalappuramPath(window.location.pathname)) {
        return 'piles-clinic-malappuram';
      }
      if (isPilesTirurPath(window.location.pathname)) {
        return 'piles-clinic-tirur';
      }
      if (isMenstrualTirurPath(window.location.pathname)) {
        return 'menstrual-doctor-tirur';
      }
      if (isSkinTirurPath(window.location.pathname)) {
        return 'skin-treatment-tirur';
      }
      if (isHairTirurPath(window.location.pathname)) {
        return 'hair-treatment-tirur';
      }
    }
    return 'home';
  });
  const [bookingTypePreset, setBookingTypePreset] = useState<ConsultationType>('online');
  const [bookingReasonPreset, setBookingReasonPreset] = useState<string>('');

  // Blog Posts & Reader State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const removedIds = new Set(['post-1', 'post-2', 'post-3', 'post-4']);
    const removedSlugs = new Set([
      'understanding-constitutional-homeopathy',
      'seasonal-allergies-respiratory-health',
      'restoring-digestive-equilibrium-naturally',
      'managing-sensory-overload-restful-sleep',
    ]);

    const saved = localStorage.getItem('sai_clinic_blogs');
    if (saved) {
      try {
        let parsed: BlogPost[] = JSON.parse(saved);
        // Exclude user-requested removed articles
        parsed = parsed.filter(
          (p) => !removedIds.has(p.id) && !removedSlugs.has(p.slug)
        );

        const eczemaPsoriasisPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-eczema-vs-psoriasis');
        if (eczemaPsoriasisPost) {
          const epIdx = parsed.findIndex((p) => p.id === 'post-eczema-vs-psoriasis' || p.slug === 'eczema-vs-psoriasis-how-to-understand-the-differences');
          if (epIdx >= 0) {
            parsed[epIdx] = { ...parsed[epIdx], ...eczemaPsoriasisPost, image: eczemaPsoriasisPost.image };
          } else {
            parsed.unshift(eczemaPsoriasisPost);
          }
        }

        const tonsillitisPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-tonsillitis');
        if (tonsillitisPost) {
          const tonIdx = parsed.findIndex((p) => p.id === 'post-tonsillitis' || p.slug === 'tonsillitis-symptoms-causes-and-available-treatment-options');
          if (tonIdx >= 0) {
            parsed[tonIdx] = { ...parsed[tonIdx], ...tonsillitisPost, image: tonsillitisPost.image };
          } else {
            parsed.unshift(tonsillitisPost);
          }
        }

        const persistentCoughPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-persistent-cough');
        if (persistentCoughPost) {
          const pcIdx = parsed.findIndex((p) => p.id === 'post-persistent-cough' || p.slug === 'persistent-cough-common-causes-and-when-to-see-a-doctor');
          if (pcIdx >= 0) {
            parsed[pcIdx] = { ...parsed[pcIdx], ...persistentCoughPost, image: persistentCoughPost.image };
          } else {
            parsed.unshift(persistentCoughPost);
          }
        }

        const allergicRhinitisPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-allergic-rhinitis');
        if (allergicRhinitisPost) {
          const arIdx = parsed.findIndex((p) => p.id === 'post-allergic-rhinitis' || p.slug === 'allergic-rhinitis-symptoms-causes-and-treatment-options');
          if (arIdx >= 0) {
            parsed[arIdx] = { ...parsed[arIdx], ...allergicRhinitisPost, image: allergicRhinitisPost.image };
          } else {
            parsed.unshift(allergicRhinitisPost);
          }
        }

        const severePeriodPainPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-severe-period-pain');
        if (severePeriodPainPost) {
          const sIdx = parsed.findIndex((p) => p.id === 'post-severe-period-pain' || p.slug === 'severe-period-pain-when-to-worry');
          if (sIdx >= 0) {
            parsed[sIdx] = { ...parsed[sIdx], ...severePeriodPainPost, image: severePeriodPainPost.image };
          } else {
            parsed.unshift(severePeriodPainPost);
          }
        }
        const pcodPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod');
        if (pcodPost) {
          const pIdx = parsed.findIndex((p) => p.id === 'post-pcod' || p.slug === 'pcod-symptoms-causes-diagnosis-treatment');
          if (pIdx >= 0) {
            parsed[pIdx] = { ...parsed[pIdx], ...pcodPost, image: pcodPost.image };
          } else {
            const insertIdx = parsed.some((p) => p.id === 'post-severe-period-pain') ? 1 : 0;
            parsed.splice(insertIdx, 0, pcodPost);
          }
        }
        const uterineFibroidsPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-uterine-fibroids');
        if (uterineFibroidsPost) {
          const uIdx = parsed.findIndex((p) => p.id === 'post-uterine-fibroids' || p.slug === 'uterine-fibroids-symptoms-diagnosis-treatment');
          if (uIdx >= 0) {
            parsed[uIdx] = { ...parsed[uIdx], ...uterineFibroidsPost, image: uterineFibroidsPost.image };
          } else {
            parsed.push(uterineFibroidsPost);
          }
        }
        const chronicSinusitisPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-chronic-sinusitis');
        if (chronicSinusitisPost) {
          const cIdx = parsed.findIndex((p) => p.id === 'post-chronic-sinusitis' || p.slug === 'chronic-sinusitis-symptoms-causes-treatment');
          if (cIdx >= 0) {
            parsed[cIdx] = { ...parsed[cIdx], ...chronicSinusitisPost, image: chronicSinusitisPost.image };
          } else {
            parsed.push(chronicSinusitisPost);
          }
        }
        const asthmaPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-asthma-symptoms');
        if (asthmaPost) {
          const aIdx = parsed.findIndex((p) => p.id === 'post-asthma-symptoms' || p.slug === 'asthma-symptoms-early-warning-signs');
          if (aIdx >= 0) {
            parsed[aIdx] = { ...parsed[aIdx], ...asthmaPost, image: asthmaPost.image };
          } else {
            parsed.push(asthmaPost);
          }
        }
        const clinicGuidePost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-homeopathic-clinic-in-malappuram');
        if (clinicGuidePost) {
          const cgIdx = parsed.findIndex((p) => p.id === 'post-homeopathic-clinic-in-malappuram' || p.slug === 'homeopathic-clinic-in-malappuram-guide');
          if (cgIdx >= 0) {
            parsed[cgIdx] = { ...parsed[cgIdx], ...clinicGuidePost, image: clinicGuidePost.image };
          } else {
            parsed.push(clinicGuidePost);
          }
        }
        const pilesPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-what-causes-piles');
        if (pilesPost) {
          const piIdx = parsed.findIndex((p) => p.id === 'post-what-causes-piles' || p.slug === 'what-causes-piles-risk-factors-prevention');
          if (piIdx >= 0) {
            parsed[piIdx] = { ...parsed[piIdx], ...pilesPost, image: pilesPost.image };
          } else {
            parsed.unshift(pilesPost);
          }
        }
        const pcodFertilityPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod-and-fertility');
        if (pcodFertilityPost) {
          const pfIdx = parsed.findIndex((p) => p.id === 'post-pcod-and-fertility' || p.slug === 'pcod-and-fertility-what-every-woman-should-know');
          if (pfIdx >= 0) {
            parsed[pfIdx] = { ...parsed[pfIdx], ...pcodFertilityPost, image: pcodFertilityPost.image };
          } else {
            parsed.unshift(pcodFertilityPost);
          }
        }
        const hormonalImbalancePost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-hormonal-imbalance');
        if (hormonalImbalancePost) {
          const hiIdx = parsed.findIndex((p) => p.id === 'post-hormonal-imbalance' || p.slug === 'hormonal-imbalance-in-women-signs-causes-tests');
          if (hiIdx >= 0) {
            parsed[hiIdx] = { ...parsed[hiIdx], ...hormonalImbalancePost, image: hormonalImbalancePost.image };
          } else {
            parsed.unshift(hormonalImbalancePost);
          }
        }
        const painfulPeriodsPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-painful-periods');
        if (painfulPeriodsPost) {
          const ppIdx = parsed.findIndex((p) => p.id === 'post-painful-periods' || p.slug === 'painful-periods-diagnosis-and-treatment-options');
          if (ppIdx >= 0) {
            parsed[ppIdx] = { ...parsed[ppIdx], ...painfulPeriodsPost, image: painfulPeriodsPost.image };
          } else {
            parsed.unshift(painfulPeriodsPost);
          }
        }
        const ovarianCystsPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-ovarian-cysts');
        if (ovarianCystsPost) {
          const ocIdx = parsed.findIndex((p) => p.id === 'post-ovarian-cysts' || p.slug === 'ovarian-cysts-symptoms-diagnosis-and-follow-up-care');
          if (ocIdx >= 0) {
            parsed[ocIdx] = { ...parsed[ocIdx], ...ovarianCystsPost, image: ovarianCystsPost.image };
          } else {
            parsed.unshift(ovarianCystsPost);
          }
        }
        const nasalPolypsPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-nasal-polyps');
        if (nasalPolypsPost) {
          const npIdx = parsed.findIndex((p) => p.id === 'post-nasal-polyps' || p.slug === 'nasal-polyps-symptoms-diagnosis-and-available-treatments');
          if (npIdx >= 0) {
            parsed[npIdx] = { ...parsed[npIdx], ...nasalPolypsPost, image: nasalPolypsPost.image };
          } else {
            parsed.unshift(nasalPolypsPost);
          }
        }
        localStorage.setItem('sai_clinic_blogs', JSON.stringify(parsed));
        return parsed.length > 0 ? parsed : INITIAL_BLOG_POSTS;
      } catch {
        return INITIAL_BLOG_POSTS;
      }
    }
    return INITIAL_BLOG_POSTS;
  });
  const [selectedPostForReader, setSelectedPostForReader] = useState<BlogPost | null>(() => {
    if (typeof window !== 'undefined') {
      if (isEczemaVsPsoriasisBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-eczema-vs-psoriasis') || INITIAL_BLOG_POSTS[0];
      }
      if (isTonsillitisBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-tonsillitis') || INITIAL_BLOG_POSTS[0];
      }
      if (isPersistentCoughBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-persistent-cough') || INITIAL_BLOG_POSTS[0];
      }
      if (isAllergicRhinitisBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-allergic-rhinitis') || INITIAL_BLOG_POSTS[0];
      }
      if (isSeverePeriodPainPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-severe-period-pain') || INITIAL_BLOG_POSTS[0];
      }
      if (isPcodBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod') || INITIAL_BLOG_POSTS[0];
      }
      if (isPcodFertilityBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod-and-fertility') || INITIAL_BLOG_POSTS[0];
      }
      if (isHormonalImbalanceBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-hormonal-imbalance') || INITIAL_BLOG_POSTS[0];
      }
      if (isPainfulPeriodsBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-painful-periods') || INITIAL_BLOG_POSTS[0];
      }
      if (isOvarianCystsBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-ovarian-cysts') || INITIAL_BLOG_POSTS[0];
      }
      if (isNasalPolypsBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-nasal-polyps') || INITIAL_BLOG_POSTS[0];
      }
      if (isUterineFibroidsBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-uterine-fibroids') || INITIAL_BLOG_POSTS[0];
      }
      if (isChronicSinusitisBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-chronic-sinusitis') || INITIAL_BLOG_POSTS[0];
      }
      if (isAsthmaSymptomsBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-asthma-symptoms') || INITIAL_BLOG_POSTS[0];
      }
      if (isHomoeoClinicMalappuramBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-homeopathic-clinic-in-malappuram') || INITIAL_BLOG_POSTS[0];
      }
      if (isPilesBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-what-causes-piles') || INITIAL_BLOG_POSTS[0];
      }
    }
    return null;
  });

  // Sync URL with currentView & handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      if (isWomensHealthPath(window.location.pathname)) {
        setCurrentView('womens-health-care');
      } else if (isRespiratoryPath(window.location.pathname)) {
        setCurrentView('respiratory-care');
      } else if (isSkinHairPath(window.location.pathname)) {
        setCurrentView('skin-hair-care');
      } else if (isRenalThyroidPath(window.location.pathname)) {
        setCurrentView('renal-thyroid-care');
      } else if (isNeurologicalPath(window.location.pathname)) {
        setCurrentView('neurological-care');
      } else if (isAnorectalVascularPath(window.location.pathname)) {
        setCurrentView('anorectal-vascular-care');
      } else if (isJointMusculoskeletalPath(window.location.pathname)) {
        setCurrentView('joint-musculoskeletal-care');
      } else if (isOphthalmicEyePath(window.location.pathname)) {
        setCurrentView('ophthalmic-eye-care');
      } else if (isPilesManjeriPath(window.location.pathname)) {
        setCurrentView('piles-homeopathic-clinic-manjeri');
      } else if (isMenstrualManjeriPath(window.location.pathname)) {
        setCurrentView('menstrual-treatment-manjeri');
      } else if (isSkinManjeriPath(window.location.pathname)) {
        setCurrentView('skin-treatment-manjeri');
      } else if (isHairManjeriPath(window.location.pathname)) {
        setCurrentView('hair-treatment-manjeri');
      } else if (isAllergicRhinitisManjeriPath(window.location.pathname)) {
        setCurrentView('allergic-rhinitis-manjeri');
      } else if (isAcneManjeriPath(window.location.pathname)) {
        setCurrentView('acne-treatment-manjeri');
      } else if (isEczemaManjeriPath(window.location.pathname)) {
        setCurrentView('eczema-treatment-manjeri');
      } else if (isWartsManjeriPath(window.location.pathname)) {
        setCurrentView('warts-treatment-manjeri');
      } else if (isCornsManjeriPath(window.location.pathname)) {
        setCurrentView('corns-treatment-manjeri');
      } else if (isPsoriasisManjeriPath(window.location.pathname)) {
        setCurrentView('psoriasis-treatment-manjeri');
      } else if (isRingwormManjeriPath(window.location.pathname)) {
        setCurrentView('ringworm-treatment-manjeri');
      } else if (isAlopeciaManjeriPath(window.location.pathname)) {
        setCurrentView('alopecia-treatment-manjeri');
      } else if (isAlopeciaMalappuramPath(window.location.pathname)) {
        setCurrentView('alopecia-treatment-malappuram');
      } else if (isHairMalappuramPath(window.location.pathname)) {
        setCurrentView('hair-treatment-malappuram');
      } else if (isSkinMalappuramPath(window.location.pathname)) {
        setCurrentView('skin-treatment-malappuram');
      } else if (isMenstrualMalappuramPath(window.location.pathname)) {
        setCurrentView('menstrual-treatment-malappuram');
      } else if (isPilesMalappuramPath(window.location.pathname)) {
        setCurrentView('piles-clinic-malappuram');
      } else if (isPilesTirurPath(window.location.pathname)) {
        setCurrentView('piles-clinic-tirur');
      } else if (isMenstrualTirurPath(window.location.pathname)) {
        setCurrentView('menstrual-doctor-tirur');
      } else if (isSkinTirurPath(window.location.pathname)) {
        setCurrentView('skin-treatment-tirur');
      } else if (isHairTirurPath(window.location.pathname)) {
        setCurrentView('hair-treatment-tirur');
      } else if (isEczemaVsPsoriasisBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const epPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-eczema-vs-psoriasis') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(epPost);
      } else if (isTonsillitisBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const tonPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-tonsillitis') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(tonPost);
      } else if (isPersistentCoughBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const pcPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-persistent-cough') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(pcPost);
      } else if (isAllergicRhinitisBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const arPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-allergic-rhinitis') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(arPost);
      } else if (isSeverePeriodPainPath(window.location.pathname)) {
        setCurrentView('blog');
        const post = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-severe-period-pain') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(post);
      } else if (isPcodBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const pcodPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(pcodPost);
      } else if (isPcodFertilityBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const pfPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod-and-fertility') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(pfPost);
      } else if (isHormonalImbalanceBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const hiPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-hormonal-imbalance') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(hiPost);
      } else if (isPainfulPeriodsBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const ppPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-painful-periods') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(ppPost);
      } else if (isOvarianCystsBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const ocPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-ovarian-cysts') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(ocPost);
      } else if (isNasalPolypsBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const npPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-nasal-polyps') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(npPost);
      } else if (isUterineFibroidsBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const fibroidPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-uterine-fibroids') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(fibroidPost);
      } else if (isChronicSinusitisBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const sinusPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-chronic-sinusitis') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(sinusPost);
      } else if (isAsthmaSymptomsBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const asthmaPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-asthma-symptoms') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(asthmaPost);
      } else if (isHomoeoClinicMalappuramBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const guidePost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-homeopathic-clinic-in-malappuram') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(guidePost);
      } else if (isPilesBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const pilesPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-what-causes-piles') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(pilesPost);
      } else {
        const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
        if (path === '' || path === '/') {
          setCurrentView('home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentView === 'womens-health-care') {
      const targetUrl = '/homeopathic-treatment-for-womens-health-gynecological-care/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'womens-health-care' }, '', targetUrl);
      }
    } else if (currentView === 'respiratory-care') {
      const targetUrl = '/homeopathic-treatment-for-respiratory-ent-allergy-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'respiratory-care' }, '', targetUrl);
      }
    } else if (currentView === 'skin-hair-care') {
      const targetUrl = '/homeopathic-treatment-for-skin-hair-scalp-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'skin-hair-care' }, '', targetUrl);
      }
    } else if (currentView === 'renal-thyroid-care') {
      const targetUrl = '/homeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'renal-thyroid-care' }, '', targetUrl);
      }
    } else if (currentView === 'neurological-care') {
      const targetUrl = '/homeopathic-treatment-for-neurological-headache-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'neurological-care' }, '', targetUrl);
      }
    } else if (currentView === 'anorectal-vascular-care') {
      const targetUrl = '/homeopathic-treatment-for-anorectal-vascular-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'anorectal-vascular-care' }, '', targetUrl);
      }
    } else if (currentView === 'joint-musculoskeletal-care') {
      const targetUrl = '/homeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'joint-musculoskeletal-care' }, '', targetUrl);
      }
    } else if (currentView === 'ophthalmic-eye-care') {
      const targetUrl = '/homeopathic-treatment-for-ophthalmic-eye-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'ophthalmic-eye-care' }, '', targetUrl);
      }
    } else if (currentView === 'piles-homeopathic-clinic-manjeri') {
      const targetUrl = '/piles-homeopathic-clinic-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'piles-homeopathic-clinic-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'menstrual-treatment-manjeri') {
      const targetUrl = '/menstrual-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'menstrual-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'skin-treatment-manjeri') {
      const targetUrl = '/skin-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'skin-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'hair-treatment-manjeri') {
      const targetUrl = '/hair-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'hair-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'allergic-rhinitis-manjeri') {
      const targetUrl = '/allergic-rhinitis-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'allergic-rhinitis-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'acne-treatment-manjeri') {
      const targetUrl = '/homeopathic-treatment-for-acne-skin-problems-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'acne-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'eczema-treatment-manjeri') {
      const targetUrl = '/homeopathic-treatment-for-eczema-skin-problems-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'eczema-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'warts-treatment-manjeri') {
      const targetUrl = '/skin-warts-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'warts-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'corns-treatment-manjeri') {
      const targetUrl = '/skin-corns-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'corns-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'psoriasis-treatment-manjeri') {
      const targetUrl = '/psoriasis-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'psoriasis-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'ringworm-treatment-manjeri') {
      const targetUrl = '/ringworm-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'ringworm-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'alopecia-treatment-manjeri') {
      const targetUrl = '/alopecia-homeopathic-treatment-in-manjeri/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'alopecia-treatment-manjeri' }, '', targetUrl);
      }
    } else if (currentView === 'alopecia-treatment-malappuram') {
      const targetUrl = '/alopecia-homeopathic-treatment-in-malappuram/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'alopecia-treatment-malappuram' }, '', targetUrl);
      }
    } else if (currentView === 'hair-treatment-malappuram') {
      const targetUrl = '/hair-and-scalp-homoeopathic-treatment-in-malappuram/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'hair-treatment-malappuram' }, '', targetUrl);
      }
    } else if (currentView === 'skin-treatment-malappuram') {
      const targetUrl = '/skin-homeopathic-treatment-in-malappuram/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'skin-treatment-malappuram' }, '', targetUrl);
      }
    } else if (currentView === 'menstrual-treatment-malappuram') {
      const targetUrl = '/menstrual-homeopathic-treatment-in-malappuram/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'menstrual-treatment-malappuram' }, '', targetUrl);
      }
    } else if (currentView === 'piles-clinic-malappuram') {
      const targetUrl = '/homeopathy-clinic-for-piles-in-malappuram/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'piles-clinic-malappuram' }, '', targetUrl);
      }
    } else if (currentView === 'piles-clinic-tirur') {
      const targetUrl = '/homeopathy-clinic-for-piles-near-tirur/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'piles-clinic-tirur' }, '', targetUrl);
      }
    } else if (currentView === 'menstrual-doctor-tirur') {
      const targetUrl = '/homeopathic-doctor-near-tirur-for-periods-problem/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'menstrual-doctor-tirur' }, '', targetUrl);
      }
    } else if (currentView === 'skin-treatment-tirur') {
      const targetUrl = '/homeopathic-treatment-near-tirur-for-skin-problems/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'skin-treatment-tirur' }, '', targetUrl);
      }
    } else if (currentView === 'hair-treatment-tirur') {
      const targetUrl = '/homoeopathic-treatment-in-tirur-for-hair-and-scalp/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'hair-treatment-tirur' }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'eczema-vs-psoriasis-how-to-understand-the-differences') {
      const targetUrl = '/eczema-vs-psoriasis-how-to-understand-the-differences/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'tonsillitis-symptoms-causes-and-available-treatment-options') {
      const targetUrl = '/tonsillitis-symptoms-causes-and-available-treatment-options/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'persistent-cough-common-causes-and-when-to-see-a-doctor') {
      const targetUrl = '/persistent-cough-common-causes-and-when-to-see-a-doctor/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'allergic-rhinitis-symptoms-causes-and-treatment-options') {
      const targetUrl = '/allergic-rhinitis-symptoms-causes-and-treatment-options/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'severe-period-pain-when-to-worry') {
      const targetUrl = '/severe-period-pain-when-to-worry/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'pcod-symptoms-causes-diagnosis-treatment') {
      const targetUrl = '/pcod-symptoms-causes-diagnosis-treatment/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'pcod-and-fertility-what-every-woman-should-know') {
      const targetUrl = '/pcod-and-fertility-what-every-woman-should-know/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'hormonal-imbalance-in-women-signs-causes-tests') {
      const targetUrl = '/hormonal-imbalance-in-women-signs-causes-tests/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'painful-periods-diagnosis-and-treatment-options') {
      const targetUrl = '/painful-periods-diagnosis-and-treatment-options/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'ovarian-cysts-symptoms-diagnosis-and-follow-up-care') {
      const targetUrl = '/ovarian-cysts-symptoms-diagnosis-and-follow-up-care/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'nasal-polyps-symptoms-diagnosis-and-available-treatments') {
      const targetUrl = '/nasal-polyps-symptoms-diagnosis-and-available-treatments/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'uterine-fibroids-symptoms-diagnosis-treatment') {
      const targetUrl = '/uterine-fibroids-symptoms-diagnosis-treatment/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'chronic-sinusitis-symptoms-causes-treatment') {
      const targetUrl = '/chronic-sinusitis-symptoms-causes-treatment/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'asthma-symptoms-early-warning-signs') {
      const targetUrl = '/asthma-symptoms-early-warning-signs/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'homeopathic-clinic-in-malappuram-guide') {
      const targetUrl = '/homeopathic-clinic-in-malappuram-guide/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'blog' && selectedPostForReader?.slug === 'what-causes-piles-risk-factors-prevention') {
      const targetUrl = '/what-causes-piles-risk-factors-prevention/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: selectedPostForReader.slug }, '', targetUrl);
      }
    } else if (currentView === 'home') {
      if (
        isWomensHealthPath(window.location.pathname) ||
        isRespiratoryPath(window.location.pathname) ||
        isSkinHairPath(window.location.pathname) ||
        isRenalThyroidPath(window.location.pathname) ||
        isNeurologicalPath(window.location.pathname) ||
        isAnorectalVascularPath(window.location.pathname) ||
        isJointMusculoskeletalPath(window.location.pathname) ||
        isOphthalmicEyePath(window.location.pathname) ||
        isPcodBlogPath(window.location.pathname) ||
        isPcodFertilityBlogPath(window.location.pathname) ||
        isHormonalImbalanceBlogPath(window.location.pathname) ||
        isPainfulPeriodsBlogPath(window.location.pathname) ||
        isOvarianCystsBlogPath(window.location.pathname) ||
        isNasalPolypsBlogPath(window.location.pathname) ||
        isSeverePeriodPainPath(window.location.pathname) ||
        isUterineFibroidsBlogPath(window.location.pathname) ||
        isChronicSinusitisBlogPath(window.location.pathname) ||
        isAsthmaSymptomsBlogPath(window.location.pathname) ||
        isHomoeoClinicMalappuramBlogPath(window.location.pathname) ||
        isPilesBlogPath(window.location.pathname) ||
        isPilesManjeriPath(window.location.pathname) ||
        isMenstrualManjeriPath(window.location.pathname) ||
        isSkinManjeriPath(window.location.pathname) ||
        isHairManjeriPath(window.location.pathname) ||
        isAllergicRhinitisManjeriPath(window.location.pathname) ||
        isAcneManjeriPath(window.location.pathname) ||
        isEczemaManjeriPath(window.location.pathname) ||
        isWartsManjeriPath(window.location.pathname) ||
        isCornsManjeriPath(window.location.pathname) ||
        isPsoriasisManjeriPath(window.location.pathname) ||
        isRingwormManjeriPath(window.location.pathname) ||
        isAlopeciaManjeriPath(window.location.pathname)
      ) {
        window.history.pushState({ view: 'home' }, '', '/');
      }
    }
  }, [currentView, selectedPostForReader]);

  const openBlogPost = (post: BlogPost) => {
    setSelectedPostForReader(post);
    setCurrentView('blog');
    if (post.slug === 'severe-period-pain-when-to-worry') {
      const targetUrl = '/severe-period-pain-when-to-worry/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'pcod-symptoms-causes-diagnosis-treatment') {
      const targetUrl = '/pcod-symptoms-causes-diagnosis-treatment/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'pcod-and-fertility-what-every-woman-should-know') {
      const targetUrl = '/pcod-and-fertility-what-every-woman-should-know/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'hormonal-imbalance-in-women-signs-causes-tests') {
      const targetUrl = '/hormonal-imbalance-in-women-signs-causes-tests/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'painful-periods-diagnosis-and-treatment-options') {
      const targetUrl = '/painful-periods-diagnosis-and-treatment-options/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'ovarian-cysts-symptoms-diagnosis-and-follow-up-care') {
      const targetUrl = '/ovarian-cysts-symptoms-diagnosis-and-follow-up-care/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'nasal-polyps-symptoms-diagnosis-and-available-treatments') {
      const targetUrl = '/nasal-polyps-symptoms-diagnosis-and-available-treatments/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'uterine-fibroids-symptoms-diagnosis-treatment') {
      const targetUrl = '/uterine-fibroids-symptoms-diagnosis-treatment/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'chronic-sinusitis-symptoms-causes-treatment') {
      const targetUrl = '/chronic-sinusitis-symptoms-causes-treatment/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'asthma-symptoms-early-warning-signs') {
      const targetUrl = '/asthma-symptoms-early-warning-signs/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'homeopathic-clinic-in-malappuram-guide') {
      const targetUrl = '/homeopathic-clinic-in-malappuram-guide/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'what-causes-piles-risk-factors-prevention') {
      const targetUrl = '/what-causes-piles-risk-factors-prevention/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'allergic-rhinitis-symptoms-causes-and-treatment-options') {
      const targetUrl = '/allergic-rhinitis-symptoms-causes-and-treatment-options/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'persistent-cough-common-causes-and-when-to-see-a-doctor') {
      const targetUrl = '/persistent-cough-common-causes-and-when-to-see-a-doctor/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'tonsillitis-symptoms-causes-and-available-treatment-options') {
      const targetUrl = '/tonsillitis-symptoms-causes-and-available-treatment-options/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    } else if (post.slug === 'eczema-vs-psoriasis-how-to-understand-the-differences') {
      const targetUrl = '/eczema-vs-psoriasis-how-to-understand-the-differences/';
      if (typeof window !== 'undefined' && window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'blog', slug: post.slug }, '', targetUrl);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Settings
  const [settings, setSettings] = useState<ClinicSettings>(() => {
    const saved = localStorage.getItem('sai_clinic_settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.practitionerName && parsed.practitionerName.includes('Ananya')) {
        parsed.practitionerName = 'Dr. Anjali Chandrasekhar';
      }
      if (!parsed.clinicName || parsed.clinicName.toLowerCase().includes('sai')) {
        parsed.clinicName = 'Anjali Homoeo Clinic';
        parsed.city = 'Kuttippuram & Puthanathani';
        parsed.state = 'Keralam';
        parsed.addressLine1 = 'Tirur - Kuttippuram Rd, Kavumopuram';
        parsed.addressLine2 = 'Kuttippuram';
        parsed.pincode = '679571 / 676552';
      }
      // Ensure email is always updated to anjalihomoeoclinic@gmail.com
      parsed.email = 'anjalihomoeoclinic@gmail.com';
      // Ensure WhatsApp number is always updated to 89211 80408
      parsed.whatsappNumber = '+918921180408';
      parsed.registrationNumber = 'KA-HOM-15563';
      parsed.branches = INITIAL_SETTINGS.branches;
      parsed.instagramUrl = INITIAL_SETTINGS.instagramUrl;
      parsed.facebookUrl = INITIAL_SETTINGS.facebookUrl;
      parsed.practoUrl = INITIAL_SETTINGS.practoUrl;
      parsed.justdialUrl = INITIAL_SETTINGS.justdialUrl;
      localStorage.setItem('sai_clinic_settings', JSON.stringify(parsed));
      return parsed;
    }
    return INITIAL_SETTINGS;
  });

  // Practitioners
  const [practitioners, setPractitioners] = useState<Practitioner[]>(() => {
    const saved = localStorage.getItem('sai_clinic_practitioners');
    if (saved) {
      const parsed = JSON.parse(saved);
      const migrated = parsed.map((p: Practitioner) => {
        const updated = {
          ...p,
          registrationNumber: 'KA-HOM-15563',
        };
        if (p.name && p.name.includes('Ananya')) {
          return {
            ...updated,
            id: 'dr-anjali',
            name: 'Dr. Anjali Chandrasekhar',
            avatarInitial: 'AC',
            bio: p.bio.replace(/Dr\. Ananya Sharma/g, 'Dr. Anjali Chandrasekhar'),
          };
        }
        return updated;
      });
      localStorage.setItem('sai_clinic_practitioners', JSON.stringify(migrated));
      return migrated;
    }
    return INITIAL_PRACTITIONERS;
  });

  // Products
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('sai_clinic_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  // Appointments
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('sai_clinic_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('sai_clinic_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('sai_clinic_orders');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [lastConfirmedOrder, setLastConfirmedOrder] = useState<Order | null>(null);

  // Modals
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('sai_clinic_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('sai_clinic_practitioners', JSON.stringify(practitioners));
  }, [practitioners]);

  useEffect(() => {
    localStorage.setItem('sai_clinic_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('sai_clinic_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('sai_clinic_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sai_clinic_orders', JSON.stringify(orders));
  }, [orders]);

  const updateSettings = (newSettings: Partial<ClinicSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    showToast('Clinic settings updated successfully.');
  };

  const updatePractitioner = (id: string, updates: Partial<Practitioner>) => {
    setPractitioners((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
    showToast('Practitioner information updated.');
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
    showToast('Product updated successfully.');
  };

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: `prod-${Date.now()}`,
    };
    setProducts((prev) => [newProduct, ...prev]);
    showToast('New product added to catalog.');
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to cart.`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Appointment operations
  const isSlotBooked = (date: string, time: string, consultationType: ConsultationType): boolean => {
    return appointments.some(
      (a) =>
        a.preferredDate === date &&
        a.preferredTime === time &&
        a.consultationType === consultationType &&
        a.status !== 'CANCELLED' &&
        a.status !== 'NO_SHOW'
    );
  };

  const getAvailableSlots = (dateString: string, consultationType: ConsultationType): string[] => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // 0 is Sunday, 1-6 Mon-Sat

    let allSlots: string[] = [];
    if (dayOfWeek === 0) {
      // Sunday: 10:00 AM - 2:00 PM
      allSlots = [
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '01:00 PM',
        '01:30 PM',
      ];
    } else {
      // Monday - Saturday: 9:00 AM - 8:00 PM (excluding lunch break 1:30 - 3:00)
      allSlots = [
        '09:00 AM',
        '09:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '01:00 PM',
        '03:30 PM',
        '04:00 PM',
        '04:30 PM',
        '05:00 PM',
        '05:30 PM',
        '06:00 PM',
        '06:30 PM',
        '07:00 PM',
        '07:30 PM',
      ];
    }

    // Filter out already booked slots
    return allSlots.filter((slot) => !isSlotBooked(dateString, slot, consultationType));
  };

  const bookAppointment = (
    data: Omit<Appointment, 'id' | 'bookingReference' | 'status' | 'createdAt' | 'fee'>
  ): Appointment => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingReference = `AHC-2026-${randomCode}`;
    const fee = data.consultationType === 'online' ? settings.onlineFee : settings.clinicFee;

    const newAppointment: Appointment = {
      ...data,
      id: `apt-${Date.now()}`,
      bookingReference,
      status: 'CONFIRMED',
      meetingLink:
        data.consultationType === 'online'
          ? `https://meet.google.com/ahc-${randomCode}`
          : undefined,
      fee,
      createdAt: new Date().toISOString(),
    };

    setAppointments((prev) => [newAppointment, ...prev]);
    showToast(`Appointment confirmed! Reference: ${bookingReference}`);
    return newAppointment;
  };

  const updateAppointmentStatus = (
    id: string,
    status: AppointmentStatus,
    internalNotes?: string
  ) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status,
              internalNotes: internalNotes !== undefined ? internalNotes : a.internalNotes,
            }
          : a
      )
    );
    showToast(`Appointment status updated to ${status}.`);
  };

  const rescheduleAppointment = (id: string, newDate: string, newTime: string) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              preferredDate: newDate,
              preferredTime: newTime,
              status: 'RESCHEDULED',
            }
          : a
      )
    );
    showToast('Appointment successfully rescheduled.');
  };

  const createOrder = (
    customerInfo: OrderCustomerInfo,
    paymentMethod: string
  ): Order => {
    const orderNum = `ORD-AHC-${Math.floor(10000 + Math.random() * 90000)}`;
    const shipping = cartTotal >= 600 ? 0 : 50;
    const total = cartTotal + shipping;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: orderNum,
      customerInfo,
      items: [...cart],
      subtotal: cartTotal,
      shipping,
      total,
      status: 'ORDER CONFIRMED',
      paymentMethod,
      createdAt: new Date().toISOString(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastConfirmedOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
    showToast(`Order placed successfully! Order #${orderNum}`);
    return newOrder;
  };

  const navigateToBooking = (type?: ConsultationType) => {
    if (type) setBookingTypePreset(type);
    setCurrentView('book-appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBookingWithReason = (reason: string, type?: ConsultationType) => {
    setBookingReasonPreset(reason);
    if (type) setBookingTypePreset(type);
    setCurrentView('book-appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO Meta Data Management
  const [seoPages, setSeoPages] = useState<PageSeoMetadata[]>(() => loadStoredSeoPages());
  const [isQuickSeoModalOpen, setIsQuickSeoModalOpen] = useState(false);

  const updatePageSeo = (id: string, updates: Partial<PageSeoMetadata>) => {
    setSeoPages((prev) => {
      const idx = prev.findIndex((p) => p.id === id);
      let updated: PageSeoMetadata[];
      if (idx >= 0) {
        updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          ...updates,
          lastUpdated: new Date().toISOString().split('T')[0],
        };
      } else {
        updated = [
          ...prev,
          {
            ...(updates as PageSeoMetadata),
            id,
            lastUpdated: new Date().toISOString().split('T')[0],
          },
        ];
      }
      saveStoredSeoPages(updated);
      return updated;
    });
  };

  const addPageSeo = (newPage: PageSeoMetadata) => {
    setSeoPages((prev) => {
      const updated = [newPage, ...prev.filter((p) => p.id !== newPage.id)];
      saveStoredSeoPages(updated);
      return updated;
    });
  };

  const deletePageSeo = (id: string) => {
    setSeoPages((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      saveStoredSeoPages(updated);
      return updated;
    });
  };

  const resetPageSeoToDefault = (id: string) => {
    const defaultPage = DEFAULT_SEO_PAGES.find((p) => p.id === id);
    if (defaultPage) {
      updatePageSeo(id, defaultPage);
    }
  };

  const resetAllSeoToDefault = () => {
    setSeoPages(DEFAULT_SEO_PAGES);
    saveStoredSeoPages(DEFAULT_SEO_PAGES);
  };

  const openQuickSeoModal = () => {
    setIsQuickSeoModalOpen(true);
  };

  // Dynamically resolve current page SEO configuration
  const currentPageSeo = React.useMemo<PageSeoMetadata>(() => {
    let targetId = 'home';
    if (currentView === 'womens-health-care') targetId = 'womens-health-care';
    else if (currentView === 'respiratory-care') targetId = 'respiratory-care';
    else if (currentView === 'skin-hair-care') targetId = 'skin-hair-care';
    else if (currentView === 'renal-thyroid-care') targetId = 'renal-thyroid-care';
    else if (currentView === 'neurological-care') targetId = 'neurological-care';
    else if (currentView === 'anorectal-vascular-care') targetId = 'anorectal-vascular-care';
    else if (currentView === 'joint-musculoskeletal-care') targetId = 'joint-musculoskeletal-care';
    else if (currentView === 'ophthalmic-eye-care') targetId = 'ophthalmic-eye-care';
    else if (currentView === 'piles-homeopathic-clinic-manjeri') targetId = 'piles-homeopathic-clinic-manjeri';
    else if (currentView === 'menstrual-treatment-manjeri') targetId = 'menstrual-treatment-manjeri';
    else if (currentView === 'skin-treatment-manjeri') targetId = 'skin-treatment-manjeri';
    else if (currentView === 'hair-treatment-manjeri') targetId = 'hair-treatment-manjeri';
    else if (currentView === 'allergic-rhinitis-manjeri') targetId = 'allergic-rhinitis-manjeri';
    else if (currentView === 'acne-treatment-manjeri') targetId = 'acne-treatment-manjeri';
    else if (currentView === 'eczema-treatment-manjeri') targetId = 'eczema-treatment-manjeri';
    else if (currentView === 'warts-treatment-manjeri') targetId = 'warts-treatment-manjeri';
    else if (currentView === 'corns-treatment-manjeri') targetId = 'corns-treatment-manjeri';
    else if (currentView === 'psoriasis-treatment-manjeri') targetId = 'psoriasis-treatment-manjeri';
    else if (currentView === 'ringworm-treatment-manjeri') targetId = 'ringworm-treatment-manjeri';
    else if (currentView === 'alopecia-treatment-manjeri') targetId = 'alopecia-treatment-manjeri';
    else if (currentView === 'alopecia-treatment-malappuram') targetId = 'alopecia-treatment-malappuram';
    else if (currentView === 'hair-treatment-malappuram') targetId = 'hair-treatment-malappuram';
    else if (currentView === 'skin-treatment-malappuram') targetId = 'skin-treatment-malappuram';
    else if (currentView === 'menstrual-treatment-malappuram') targetId = 'menstrual-treatment-malappuram';
    else if (currentView === 'piles-clinic-malappuram') targetId = 'piles-clinic-malappuram';
    else if (currentView === 'piles-clinic-tirur') targetId = 'piles-clinic-tirur';
    else if (currentView === 'menstrual-doctor-tirur') targetId = 'menstrual-doctor-tirur';
    else if (currentView === 'skin-treatment-tirur') targetId = 'skin-treatment-tirur';
    else if (currentView === 'hair-treatment-tirur') targetId = 'hair-treatment-tirur';
    else if (currentView === 'treatments') targetId = 'treatments';
    else if (currentView === 'consultations') targetId = 'consultations';
    else if (currentView === 'book-appointment') targetId = 'book-appointment';
    else if (currentView === 'about') targetId = 'about';
    else if (currentView === 'reviews') targetId = 'reviews';
    else if (currentView === 'faq' || currentView === 'qa') targetId = 'faq';
    else if (currentView === 'contact') targetId = 'contact';
    else if (currentView === 'products') targetId = 'products';
    else if (currentView === 'blog') {
      if (selectedPostForReader?.slug === 'severe-period-pain-when-to-worry') {
        targetId = 'blog-severe-period-pain';
      } else if (selectedPostForReader?.slug === 'pcod-symptoms-causes-diagnosis-treatment') {
        targetId = 'blog-pcod';
      } else if (selectedPostForReader?.slug === 'pcod-and-fertility-what-every-woman-should-know') {
        targetId = 'blog-pcod-and-fertility';
      } else if (selectedPostForReader?.slug === 'hormonal-imbalance-in-women-signs-causes-tests') {
        targetId = 'blog-hormonal-imbalance';
      } else if (selectedPostForReader?.slug === 'painful-periods-diagnosis-and-treatment-options') {
        targetId = 'blog-painful-periods';
      } else if (selectedPostForReader?.slug === 'ovarian-cysts-symptoms-diagnosis-and-follow-up-care') {
        targetId = 'blog-ovarian-cysts';
      } else if (selectedPostForReader?.slug === 'nasal-polyps-symptoms-diagnosis-and-available-treatments') {
        targetId = 'blog-nasal-polyps';
      } else if (selectedPostForReader?.slug === 'uterine-fibroids-symptoms-diagnosis-treatment') {
        targetId = 'blog-uterine-fibroids';
      } else if (selectedPostForReader?.slug === 'chronic-sinusitis-symptoms-causes-treatment') {
        targetId = 'blog-chronic-sinusitis';
      } else if (selectedPostForReader?.slug === 'asthma-symptoms-early-warning-signs') {
        targetId = 'blog-asthma-symptoms';
      } else if (selectedPostForReader?.slug === 'homeopathic-clinic-in-malappuram-guide') {
        targetId = 'blog-homeopathic-clinic-in-malappuram';
      } else if (selectedPostForReader?.slug === 'what-causes-piles-risk-factors-prevention') {
        targetId = 'blog-what-causes-piles';
      } else if (selectedPostForReader) {
        const found = seoPages.find(
          (p) =>
            p.path.includes(selectedPostForReader.slug) ||
            p.id === `blog-${selectedPostForReader.slug}`
        );
        if (found) return found;
        return {
          id: `blog-${selectedPostForReader.slug}`,
          pageName: `Blog: ${selectedPostForReader.title}`,
          category: 'blog',
          path: `/${selectedPostForReader.slug}/`,
          title: selectedPostForReader.seoTitle || `${selectedPostForReader.title} | Anjali Homoeo Clinic`,
          description: selectedPostForReader.seoDescription || selectedPostForReader.excerpt,
          url: selectedPostForReader.canonicalUrl || `https://anjalihomoeoclinic.com/${selectedPostForReader.slug}`,
          canonicalUrl: selectedPostForReader.canonicalUrl || `https://anjalihomoeoclinic.com/${selectedPostForReader.slug}`,
          ogType: 'article',
          schemaType: 'BlogPosting',
          schemaJson: generateDefaultSchema(
            'BlogPosting',
            selectedPostForReader.title,
            selectedPostForReader.title,
            selectedPostForReader.excerpt,
            selectedPostForReader.canonicalUrl || `https://anjalihomoeoclinic.com/${selectedPostForReader.slug}`
          ),
          lastUpdated: new Date().toISOString().split('T')[0],
        };
      } else {
        targetId = 'blog';
      }
    }

    const match = seoPages.find((p) => p.id === targetId);
    return match || seoPages[0] || DEFAULT_SEO_PAGES[0];
  }, [currentView, selectedPostForReader, seoPages]);

  return (
    <ClinicContext.Provider
      value={{
        currentView,
        setCurrentView,
        bookingTypePreset,
        setBookingTypePreset,
        bookingReasonPreset,
        setBookingReasonPreset,
        navigateToBooking,
        navigateToBookingWithReason,
        settings,
        updateSettings,
        practitioners,
        updatePractitioner,
        appointments,
        bookAppointment,
        updateAppointmentStatus,
        rescheduleAppointment,
        isSlotBooked,
        getAvailableSlots,
        products,
        selectedProductForModal,
        setSelectedProductForModal,
        updateProduct,
        addProduct,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        orders,
        createOrder,
        lastConfirmedOrder,
        setLastConfirmedOrder,
        blogPosts,
        selectedPostForReader,
        setSelectedPostForReader,
        openBlogPost,
        isDisclaimerOpen,
        setIsDisclaimerOpen,
        toasts,
        showToast,
        removeToast,
        seoPages,
        currentPageSeo,
        updatePageSeo,
        addPageSeo,
        deletePageSeo,
        resetPageSeoToDefault,
        resetAllSeoToDefault,
        isQuickSeoModalOpen,
        setIsQuickSeoModalOpen,
        openQuickSeoModal,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
