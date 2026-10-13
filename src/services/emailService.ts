/**
 * Email Service for Anjali Homoeo Clinic
 * Destination: anjalihomoeoclinic@gmail.com
 */

import { Appointment, Order } from '../types';

export const CLINIC_OFFICIAL_EMAIL = 'anjalihomoeoclinic@gmail.com';

export interface EmailSendResult {
  success: boolean;
  message: string;
}

/**
 * Sends form data to anjalihomoeoclinic@gmail.com via FormSubmit AJAX service
 */
async function postToEmailEndpoint(payload: Record<string, string>): Promise<EmailSendResult> {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${CLINIC_OFFICIAL_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        _captcha: 'false',
        _template: 'table',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || `Email successfully dispatched to ${CLINIC_OFFICIAL_EMAIL}`,
      };
    } else {
      console.warn('FormSubmit responded with error status:', response.status);
      return {
        success: false,
        message: `Delivery service returned status ${response.status}`,
      };
    }
  } catch (error) {
    console.error('Failed to dispatch email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Network error sending email',
    };
  }
}

/**
 * 1. Send Appointment Booking Email to anjalihomoeoclinic@gmail.com
 */
export async function sendAppointmentBookingEmail(
  appointment: Appointment
): Promise<EmailSendResult> {
  const isOnline = appointment.consultationType === 'online';
  const subject = `[New Appointment] ${appointment.bookingReference} - ${appointment.patientName} (${appointment.preferredDate} ${appointment.preferredTime})`;

  const messageText = [
    `NEW APPOINTMENT BOOKING DETAILS:`,
    `----------------------------------------`,
    `Reference ID: ${appointment.bookingReference}`,
    `Patient Name: ${appointment.patientName}`,
    `Mobile Number: ${appointment.mobileNumber}`,
    `Patient Email: ${appointment.email || 'Not provided'}`,
    `Consultation Mode: ${isOnline ? 'Online Video Consultation' : 'In-Clinic Consultation'}`,
    `Date & Time: ${appointment.preferredDate} at ${appointment.preferredTime}`,
    `Physician: ${appointment.practitionerName}`,
    `Fee: ₹${appointment.fee}`,
    `Health Concern / Reason: ${appointment.reasonForVisit}`,
    appointment.uploadedDocumentName ? `Uploaded Report: ${appointment.uploadedDocumentName}` : null,
    isOnline
      ? `Meeting Link: ${appointment.meetingLink || 'To be shared via WhatsApp/Email'}`
      : `Clinic Location: Kuttippuram / Puthanathani (Kerala)`,
    `Created At: ${new Date(appointment.createdAt).toLocaleString('en-IN')}`,
    `----------------------------------------`,
    `Clinic Recipient: ${CLINIC_OFFICIAL_EMAIL}`,
  ]
    .filter(Boolean)
    .join('\n');

  const payload: Record<string, string> = {
    _subject: subject,
    'Booking Reference': appointment.bookingReference,
    'Patient Name': appointment.patientName,
    'Mobile Phone': appointment.mobileNumber,
    'Patient Email': appointment.email || 'Not provided',
    'Consultation Type': isOnline ? 'Online Video' : 'In-Clinic',
    'Scheduled Date': appointment.preferredDate,
    'Scheduled Time': appointment.preferredTime,
    Physician: appointment.practitionerName,
    Fee: `₹${appointment.fee}`,
    'Health Concern / Symptoms': appointment.reasonForVisit,
    'Uploaded Document': appointment.uploadedDocumentName || 'None',
    'Meeting Link / Location': isOnline
      ? appointment.meetingLink || 'Google Meet'
      : 'Kuttippuram / Puthanathani Clinic',
    message: messageText,
  };

  if (appointment.email && appointment.email.includes('@')) {
    payload._replyto = appointment.email;
  }

  return postToEmailEndpoint(payload);
}

/**
 * Generates a pre-filled mailto URL for appointment details
 */
export function getAppointmentMailtoUrl(appointment: Appointment): string {
  const isOnline = appointment.consultationType === 'online';
  const subject = encodeURIComponent(
    `[Appointment Booking ${appointment.bookingReference}] ${appointment.patientName} - ${appointment.preferredDate}`
  );
  const body = encodeURIComponent(
    `Dear Dr. Anjali Chandrasekhar / Anjali Homoeo Clinic,\n\n` +
      `Here are my appointment details:\n` +
      `• Booking Reference: ${appointment.bookingReference}\n` +
      `• Patient Name: ${appointment.patientName}\n` +
      `• Phone Number: ${appointment.mobileNumber}\n` +
      `• Mode: ${isOnline ? 'Online Video Consultation' : 'In-Clinic Consultation'}\n` +
      `• Date & Time: ${appointment.preferredDate} at ${appointment.preferredTime}\n` +
      `• Chief Complaint / Concern: ${appointment.reasonForVisit}\n` +
      (appointment.uploadedDocumentName ? `• Uploaded Document: ${appointment.uploadedDocumentName}\n` : '') +
      `\nPlease confirm receipt of my booking.\n\n` +
      `Thank you,\n${appointment.patientName}`
  );

  return `mailto:${CLINIC_OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * 2. Send Contact Form Inquiry Email to anjalihomoeoclinic@gmail.com
 */
export async function sendContactInquiryEmail(data: {
  name: string;
  phone: string;
  email?: string;
  branch?: string;
  message: string;
}): Promise<EmailSendResult> {
  const branchLabel =
    data.branch === 'kuttippuram'
      ? 'Kuttippuram Branch'
      : data.branch === 'puthanathani'
      ? 'Puthanathani Branch'
      : 'General Inquiry';

  const subject = `[Patient Inquiry] ${data.name} - ${branchLabel}`;

  const payload: Record<string, string> = {
    _subject: subject,
    'Patient Name': data.name,
    'Phone Number': data.phone,
    'Email Address': data.email || 'Not provided',
    'Preferred Branch': branchLabel,
    'Message / Query': data.message,
    'Recipient Email': CLINIC_OFFICIAL_EMAIL,
  };

  if (data.email && data.email.includes('@')) {
    payload._replyto = data.email;
  }

  return postToEmailEndpoint(payload);
}

/**
 * Generates mailto URL for Contact Form
 */
export function getContactMailtoUrl(data: {
  name: string;
  phone: string;
  email?: string;
  branch?: string;
  message: string;
}): string {
  const subject = encodeURIComponent(`[Inquiry] ${data.name} (${data.branch || 'General'})`);
  const body = encodeURIComponent(
    `Hello Dr. Anjali & Clinic Team,\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email || 'N/A'}\n` +
      `Branch Preference: ${data.branch || 'General'}\n\n` +
      `Message:\n${data.message}\n`
  );

  return `mailto:${CLINIC_OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * 3. Send Product Order Notification Email to anjalihomoeoclinic@gmail.com
 */
export async function sendOrderNotificationEmail(order: Order): Promise<EmailSendResult> {
  const customer = order.customerInfo;
  const subject = `[New Order ${order.orderNumber || order.id}] ${customer.fullName} - ₹${order.total}`;

  const itemsList = order.items
    .map(
      (item) =>
        `• ${item.product.name} (${item.quantity}x ₹${item.product.price}) = ₹${
          item.product.price * item.quantity
        }`
    )
    .join('\n');

  const payload: Record<string, string> = {
    _subject: subject,
    'Order Number': order.orderNumber || order.id,
    'Customer Name': customer.fullName,
    'Customer Phone': customer.phone,
    'Customer Email': customer.email || 'Not provided',
    'Shipping Address': `${customer.address}, ${customer.city}, ${customer.pincode}`,
    'Ordered Items': itemsList,
    'Total Amount': `₹${order.total}`,
    'Payment Method': order.paymentMethod,
    'Order Date': new Date(order.createdAt).toLocaleString('en-IN'),
  };

  if (customer.email && customer.email.includes('@')) {
    payload._replyto = customer.email;
  }

  return postToEmailEndpoint(payload);
}

/**
 * 4. Send Medical Q&A Inquiry Email to anjalihomoeoclinic@gmail.com
 */
export async function sendFaqQuestionEmail(data: {
  patientName?: string;
  phone?: string;
  email?: string;
  question: string;
}): Promise<EmailSendResult> {
  const subject = `[Clinical Question] from ${data.patientName || 'Patient'}`;

  const payload: Record<string, string> = {
    _subject: subject,
    'Patient Name': data.patientName || 'Anonymous / Website Visitor',
    Phone: data.phone || 'Not provided',
    Email: data.email || 'Not provided',
    Question: data.question,
    Recipient: CLINIC_OFFICIAL_EMAIL,
  };

  if (data.email && data.email.includes('@')) {
    payload._replyto = data.email;
  }

  return postToEmailEndpoint(payload);
}
