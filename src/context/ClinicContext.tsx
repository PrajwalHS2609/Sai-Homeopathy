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
  | 'ophthalmic-eye-care';

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

const isWomensHealthPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-womens-health-gynocological-care' ||
    clean === '/homoeopathic-treatment-for-womens-health-gynecological-care'
  );
};

const isRespiratoryPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-respiratory-ent-allergy-conditions' ||
    clean === '/homoeopathic-treatment-for-respiratory-ent-allergy' ||
    clean === '/respiratory-ent-allergy' ||
    clean === '/health-conditions/respiratory-ent-allergy'
  );
};

const isSkinHairPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-skin-hair-scalp-conditions' ||
    clean === '/homoeopathic-treatment-for-skin-hair-scalp' ||
    clean === '/skin-hair-scalp' ||
    clean === '/health-conditions/skin-hair-scalp'
  );
};

const isRenalThyroidPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions' ||
    clean === '/homoeopathic-treatment-for-renal-urinary-thyroid' ||
    clean === '/renal-urinary-gallbladder-thyroid' ||
    clean === '/health-conditions/renal-urinary-gallbladder-thyroid'
  );
};

const isNeurologicalPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-neurological-headache-conditions' ||
    clean === '/homoeopathic-treatment-for-neurological-headache' ||
    clean === '/neurological-headache' ||
    clean === '/health-conditions/neurological-headache'
  );
};

const isAnorectalVascularPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-anorectal-vascular-conditions' ||
    clean === '/homoeopathic-treatment-for-anorectal-vascular' ||
    clean === '/anorectal-vascular-conditions' ||
    clean === '/anorectal-vascular' ||
    clean === '/health-conditions/anorectal-vascular'
  );
};

const isJointMusculoskeletalPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions' ||
    clean === '/homoeopathic-treatment-for-joint-musculoskeletal-conditions' ||
    clean === '/joint-musculoskeletal-chronic-conditions' ||
    clean === '/joint-musculoskeletal-conditions' ||
    clean === '/joint-musculoskeletal' ||
    clean === '/health-conditions/joint-musculoskeletal'
  );
};

const isOphthalmicEyePath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/homoeopathic-treatment-for-ophthalmic-eye-conditions' ||
    clean === '/homoeopathic-treatment-for-eye-conditions' ||
    clean === '/ophthalmic-eye-conditions' ||
    clean === '/eye-conditions' ||
    clean === '/health-conditions/eye-conditions'
  );
};

const isPcodBlogPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/pcod-symptoms-causes-diagnosis-treatment' ||
    clean === '/pcod-explained-symptoms-causes-diagnosis-and-treatment-options' ||
    clean === '/blog/pcod-symptoms-causes-diagnosis-treatment'
  );
};

const isSeverePeriodPainPath = (pathname: string) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  return (
    clean === '/severe-period-pain-when-to-worry' ||
    clean === '/blog/severe-period-pain-when-to-worry' ||
    clean === '/severe-period-pain-when-are-menstrual-cramps-a-concern'
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
      if (isSeverePeriodPainPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-severe-period-pain') || INITIAL_BLOG_POSTS[0];
      }
      if (isPcodBlogPath(window.location.pathname)) {
        return INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod') || INITIAL_BLOG_POSTS[0];
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
      } else if (isSeverePeriodPainPath(window.location.pathname)) {
        setCurrentView('blog');
        const post = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-severe-period-pain') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(post);
      } else if (isPcodBlogPath(window.location.pathname)) {
        setCurrentView('blog');
        const pcodPost = INITIAL_BLOG_POSTS.find((p) => p.id === 'post-pcod') || INITIAL_BLOG_POSTS[0];
        setSelectedPostForReader(pcodPost);
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
      const targetUrl = '/homoeopathic-treatment-for-womens-health-gynecological-care/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'womens-health-care' }, '', targetUrl);
      }
    } else if (currentView === 'respiratory-care') {
      const targetUrl = '/homoeopathic-treatment-for-respiratory-ent-allergy-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'respiratory-care' }, '', targetUrl);
      }
    } else if (currentView === 'skin-hair-care') {
      const targetUrl = '/homoeopathic-treatment-for-skin-hair-scalp-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'skin-hair-care' }, '', targetUrl);
      }
    } else if (currentView === 'renal-thyroid-care') {
      const targetUrl = '/homoeopathic-treatment-for-renal-urinary-gallbladder-thyroid-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'renal-thyroid-care' }, '', targetUrl);
      }
    } else if (currentView === 'neurological-care') {
      const targetUrl = '/homoeopathic-treatment-for-neurological-headache-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'neurological-care' }, '', targetUrl);
      }
    } else if (currentView === 'anorectal-vascular-care') {
      const targetUrl = '/homoeopathic-treatment-for-anorectal-vascular-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'anorectal-vascular-care' }, '', targetUrl);
      }
    } else if (currentView === 'joint-musculoskeletal-care') {
      const targetUrl = '/homoeopathic-treatment-for-joint-musculoskeletal-chronic-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'joint-musculoskeletal-care' }, '', targetUrl);
      }
    } else if (currentView === 'ophthalmic-eye-care') {
      const targetUrl = '/homoeopathic-treatment-for-ophthalmic-eye-conditions/';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ view: 'ophthalmic-eye-care' }, '', targetUrl);
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
        isSeverePeriodPainPath(window.location.pathname)
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
      parsed.branches = INITIAL_SETTINGS.branches;
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
        if (p.name && p.name.includes('Ananya')) {
          return {
            ...p,
            id: 'dr-anjali',
            name: 'Dr. Anjali Chandrasekhar',
            avatarInitial: 'AC',
            bio: p.bio.replace(/Dr\. Ananya Sharma/g, 'Dr. Anjali Chandrasekhar'),
          };
        }
        return p;
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
