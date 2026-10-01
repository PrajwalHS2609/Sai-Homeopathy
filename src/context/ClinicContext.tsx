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
} from '../types';
import {
  INITIAL_SETTINGS,
  INITIAL_PRACTITIONERS,
  INITIAL_PRODUCTS,
  INITIAL_APPOINTMENTS,
} from '../data/initialData';

export type NavView =
  | 'home'
  | 'about'
  | 'consultations'
  | 'products'
  | 'reviews'
  | 'faq'
  | 'contact'
  | 'book-appointment'
  | 'admin';

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
  navigateToBooking: (type?: ConsultationType) => void;

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

  // Medical Disclaimer Modal
  isDisclaimerOpen: boolean;
  setIsDisclaimerOpen: (open: boolean) => void;

  // Toast
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [bookingTypePreset, setBookingTypePreset] = useState<ConsultationType>('online');

  // Settings
  const [settings, setSettings] = useState<ClinicSettings>(() => {
    const saved = localStorage.getItem('sai_clinic_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // Practitioners
  const [practitioners, setPractitioners] = useState<Practitioner[]>(() => {
    const saved = localStorage.getItem('sai_clinic_practitioners');
    return saved ? JSON.parse(saved) : INITIAL_PRACTITIONERS;
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
    const bookingReference = `SAI-2026-${randomCode}`;
    const fee = data.consultationType === 'online' ? settings.onlineFee : settings.clinicFee;

    const newAppointment: Appointment = {
      ...data,
      id: `apt-${Date.now()}`,
      bookingReference,
      status: 'CONFIRMED',
      meetingLink:
        data.consultationType === 'online'
          ? `https://meet.google.com/sai-${randomCode}`
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
    const orderNum = `ORD-SAI-${Math.floor(10000 + Math.random() * 90000)}`;
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

  return (
    <ClinicContext.Provider
      value={{
        currentView,
        setCurrentView,
        bookingTypePreset,
        setBookingTypePreset,
        navigateToBooking,
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
        isDisclaimerOpen,
        setIsDisclaimerOpen,
        toasts,
        showToast,
        removeToast,
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
