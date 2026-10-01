export type ConsultationType = 'online' | 'clinic';

export type AppointmentStatus =
  | 'NEW'
  | 'PENDING'
  | 'CONFIRMED'
  | 'RESCHEDULED'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'NO_SHOW';

export interface Appointment {
  id: string;
  bookingReference: string;
  patientName: string;
  mobileNumber: string;
  email: string;
  consultationType: ConsultationType;
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string; // HH:MM AM/PM
  practitionerId: string;
  practitionerName: string;
  reasonForVisit: string;
  uploadedDocumentName?: string;
  status: AppointmentStatus;
  meetingLink?: string;
  internalNotes?: string;
  fee: number;
  createdAt: string;
}

export interface Practitioner {
  id: string;
  name: string;
  qualifications: string;
  title: string;
  experienceYears: number;
  registrationNumber: string;
  bio: string;
  specialties: string[];
  availableTypes: ConsultationType[];
  avatarInitial: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Wellness' | 'Immunity' | 'Skin & Hair' | 'Digestion' | 'Stress & Sleep';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  indications: string[];
  dosage: string;
  ingredients: string;
  warnings: string;
  volume: string;
  inStock: boolean;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

export type OrderStatus =
  | 'PAYMENT PENDING'
  | 'ORDER CONFIRMED'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED';

export interface Order {
  id: string;
  orderNumber: string;
  customerInfo: OrderCustomerInfo;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  createdAt: string;
}

export interface ClinicSettings {
  clinicName: string;
  tagline: string;
  practitionerName: string;
  practitionerQualification: string;
  registrationNumber: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  weekdayHours: string;
  sundayHours: string;
  onlineFee: number;
  clinicFee: number;
  slotDurationMinutes: number;
}

export interface Testimonial {
  id: string;
  patientName: string;
  consultationType: 'Online Consultation' | 'In-Clinic Consultation' | 'Product Follow-up';
  rating: number;
  quote: string;
  location: string;
  date: string;
}

export interface FaqItem {
  id: string;
  category: 'Consultation' | 'Booking' | 'Products' | 'General';
  question: string;
  answer: string;
}
