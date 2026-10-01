import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Video,
  Building2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Settings,
  Package,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileText,
  DollarSign,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';
import { Appointment, AppointmentStatus, ConsultationType, Product } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    appointments,
    updateAppointmentStatus,
    rescheduleAppointment,
    bookAppointment,
    settings,
    updateSettings,
    products,
    updateProduct,
    addProduct,
    orders,
    practitioners,
    setCurrentView,
  } = useClinic();

  const [activeTab, setActiveTab] = useState<'appointments' | 'calendar' | 'products' | 'orders' | 'settings'>('appointments');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Appointment for Detail / Notes editing
  const [selectedApt, setSelectedApt] = useState<Appointment | null>(null);
  const [noteText, setNoteText] = useState<string>('');

  // Manual Appointment creation modal state
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [manualForm, setManualForm] = useState({
    patientName: '',
    mobileNumber: '',
    email: '',
    consultationType: 'online' as ConsultationType,
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTime: '10:00 AM',
    reasonForVisit: '',
  });

  // Settings local state
  const [settingsForm, setSettingsForm] = useState({ ...settings });

  // Product edit modal state
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Metrics computation
  const todayStr = new Date().toISOString().split('T')[0];
  const todayApts = appointments.filter((a) => a.preferredDate === todayStr);
  const pendingApts = appointments.filter((a) => a.status === 'PENDING' || a.status === 'NEW');
  const confirmedApts = appointments.filter((a) => a.status === 'CONFIRMED');
  const completedApts = appointments.filter((a) => a.status === 'COMPLETED');
  const cancelledApts = appointments.filter((a) => a.status === 'CANCELLED');
  const onlineCount = appointments.filter((a) => a.consultationType === 'online').length;
  const clinicCount = appointments.filter((a) => a.consultationType === 'clinic').length;

  const totalRevenue = appointments
    .filter((a) => a.status !== 'CANCELLED' && a.status !== 'NO_SHOW')
    .reduce((sum, a) => sum + (a.fee || (a.consultationType === 'online' ? settings.onlineFee : settings.clinicFee)), 0) +
    orders.reduce((sum, o) => sum + o.total, 0);

  // Filtered appointments list
  const filteredAppointments = appointments.filter((apt) => {
    const matchesStatus = statusFilter === 'ALL' || apt.status === statusFilter;
    const matchesType = typeFilter === 'ALL' || apt.consultationType === typeFilter;
    const matchesSearch =
      apt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.mobileNumber.includes(searchQuery) ||
      apt.bookingReference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  const handleOpenDetail = (apt: Appointment) => {
    setSelectedApt(apt);
    setNoteText(apt.internalNotes || '');
  };

  const handleSaveNotes = () => {
    if (selectedApt) {
      updateAppointmentStatus(selectedApt.id, selectedApt.status, noteText);
      setSelectedApt({ ...selectedApt, internalNotes: noteText });
    }
  };

  const handleManualBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.patientName || !manualForm.mobileNumber) return;

    bookAppointment({
      patientName: manualForm.patientName,
      mobileNumber: manualForm.mobileNumber,
      email: manualForm.email || 'patient@example.com',
      consultationType: manualForm.consultationType,
      preferredDate: manualForm.preferredDate,
      preferredTime: manualForm.preferredTime,
      practitionerId: 'dr-ananya',
      practitionerName: settings.practitionerName,
      reasonForVisit: manualForm.reasonForVisit || 'Admin manual booking',
    });

    setIsManualModalOpen(false);
    setManualForm({
      patientName: '',
      mobileNumber: '',
      email: '',
      consultationType: 'online',
      preferredDate: todayStr,
      preferredTime: '10:00 AM',
      reasonForVisit: '',
    });
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
  };

  return (
    <div className="py-10 bg-[#FCFBF6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DCEBDD] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF7EE] text-[11px] font-bold text-[#0B5D3B] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CLINICAL CMS & SCHEDULING PORTAL</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-[#173A2A]">
              Sai Clinic Administration Hub
            </h1>
            <p className="text-xs text-[#5F6F65]">
              Real-time patient bookings, calendar slots, product inventory, and clinic timings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsManualModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B5D3B] text-white text-xs font-semibold hover:bg-[#145C3A] transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>New Appointment</span>
            </button>

            <button
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-xl bg-white border border-[#DCEBDD] text-xs font-semibold text-[#173A2A] hover:bg-[#EEF7EE] transition-colors"
            >
              View Public Website
            </button>
          </div>
        </div>

        {/* KPI Scorecard Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-2xs">
            <span className="text-[11px] font-medium text-[#5F6F65] block">Today's Visits</span>
            <span className="font-editorial text-2xl font-bold text-[#0B5D3B] tabular-nums">
              {todayApts.length}
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-2xs">
            <span className="text-[11px] font-medium text-[#5F6F65] block">Pending / New</span>
            <span className="font-editorial text-2xl font-bold text-amber-700 tabular-nums">
              {pendingApts.length}
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-2xs">
            <span className="text-[11px] font-medium text-[#5F6F65] block">Confirmed</span>
            <span className="font-editorial text-2xl font-bold text-[#145C3A] tabular-nums">
              {confirmedApts.length}
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-2xs">
            <span className="text-[11px] font-medium text-[#5F6F65] block">Online / Clinic</span>
            <span className="text-sm font-bold text-[#173A2A] tabular-nums block mt-1">
              {onlineCount} <span className="text-xs text-[#5F6F65]">/</span> {clinicCount}
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-2xs">
            <span className="text-[11px] font-medium text-[#5F6F65] block">Product Orders</span>
            <span className="font-editorial text-2xl font-bold text-[#173A2A] tabular-nums">
              {orders.length}
            </span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-2xs">
            <span className="text-[11px] font-medium text-[#5F6F65] block">Total Est. Revenue</span>
            <span className="font-editorial text-xl font-bold text-[#0B5D3B] tabular-nums">
              ₹{totalRevenue}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#DCEBDD] overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`py-2 px-4 rounded-t-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'appointments'
                ? 'bg-white text-[#0B5D3B] border-t-2 border-[#0B5D3B] shadow-2xs'
                : 'text-[#5F6F65] hover:text-[#173A2A]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Appointments List ({appointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`py-2 px-4 rounded-t-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'calendar'
                ? 'bg-white text-[#0B5D3B] border-t-2 border-[#0B5D3B] shadow-2xs'
                : 'text-[#5F6F65] hover:text-[#173A2A]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Day / Calendar Schedule</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-4 rounded-t-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'products'
                ? 'bg-white text-[#0B5D3B] border-t-2 border-[#0B5D3B] shadow-2xs'
                : 'text-[#5F6F65] hover:text-[#173A2A]'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Remedy Catalog CMS ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`py-2 px-4 rounded-t-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'orders'
                ? 'bg-white text-[#0B5D3B] border-t-2 border-[#0B5D3B] shadow-2xs'
                : 'text-[#5F6F65] hover:text-[#173A2A]'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Product Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-2 px-4 rounded-t-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-white text-[#0B5D3B] border-t-2 border-[#0B5D3B] shadow-2xs'
                : 'text-[#5F6F65] hover:text-[#173A2A]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Clinic Timings & Settings</span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: APPOINTMENTS LIST */}
        {/* ======================================================== */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-[#5F6F65] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search patient, phone, ref ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DCEBDD] text-xs bg-[#FCFBF6] focus:outline-none focus:ring-1 focus:ring-[#0B5D3B]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs w-full md:w-auto">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#5F6F65]">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="p-1.5 rounded-lg border border-[#DCEBDD] bg-[#FCFBF6] text-xs"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="NEW">NEW</option>
                    <option value="PENDING">PENDING</option>
                    <option value="CONFIRMED">CONFIRMED</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[#5F6F65]">Type:</span>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="p-1.5 rounded-lg border border-[#DCEBDD] bg-[#FCFBF6] text-xs"
                  >
                    <option value="ALL">All Modes</option>
                    <option value="online">Online Consultation</option>
                    <option value="clinic">Clinic In-Person</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Appointments Table */}
            <div className="bg-white rounded-3xl border border-[#DCEBDD] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FCFBF6] border-b border-[#DCEBDD] text-[#5F6F65] uppercase font-semibold">
                    <tr>
                      <th className="py-3 px-4">Ref & Patient</th>
                      <th className="py-3 px-4">Mode</th>
                      <th className="py-3 px-4">Date & Slot</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Doctor Notes</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DCEBDD]/50 text-[#173A2A]">
                    {filteredAppointments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#5F6F65]">
                          No appointments match the selected filter.
                        </td>
                      </tr>
                    ) : (
                      filteredAppointments.map((apt) => (
                        <tr key={apt.id} className="hover:bg-[#EEF7EE]/30 transition-colors">
                          <td className="py-3.5 px-4">
                            <span className="font-mono text-[11px] font-bold text-[#0B5D3B] block">
                              {apt.bookingReference}
                            </span>
                            <span className="font-bold text-xs text-[#173A2A] block">
                              {apt.patientName}
                            </span>
                            <span className="text-[11px] text-[#5F6F65] tabular-nums">
                              {apt.mobileNumber}
                            </span>
                          </td>

                          <td className="py-3.5 px-4 whitespace-nowrap">
                            {apt.consultationType === 'online' ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                <Video className="w-3 h-3 text-emerald-600" />
                                <span>Online</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                                <Building2 className="w-3 h-3 text-blue-600" />
                                <span>In Clinic</span>
                              </span>
                            )}
                          </td>

                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="font-semibold block">{apt.preferredDate}</span>
                            <span className="text-[11px] text-[#5F6F65] tabular-nums">
                              {apt.preferredTime}
                            </span>
                          </td>

                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <select
                              value={apt.status}
                              onChange={(e) =>
                                updateAppointmentStatus(apt.id, e.target.value as AppointmentStatus)
                              }
                              className={`text-[11px] font-bold px-2 py-1 rounded-md border ${
                                apt.status === 'CONFIRMED'
                                  ? 'bg-[#EEF7EE] text-[#0B5D3B] border-[#DCEBDD]'
                                  : apt.status === 'COMPLETED'
                                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                                  : apt.status === 'CANCELLED'
                                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                                  : 'bg-amber-50 text-amber-800 border-amber-200'
                              }`}
                            >
                              <option value="NEW">NEW</option>
                              <option value="PENDING">PENDING</option>
                              <option value="CONFIRMED">CONFIRMED</option>
                              <option value="RESCHEDULED">RESCHEDULED</option>
                              <option value="COMPLETED">COMPLETED</option>
                              <option value="CANCELLED">CANCELLED</option>
                              <option value="NO_SHOW">NO SHOW</option>
                            </select>
                          </td>

                          <td className="py-3.5 px-4 max-w-xs">
                            <p className="text-[11px] text-[#5F6F65] truncate">
                              {apt.internalNotes || apt.reasonForVisit || 'No notes added'}
                            </p>
                          </td>

                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <button
                              onClick={() => handleOpenDetail(apt)}
                              className="px-2.5 py-1 text-[11px] font-semibold text-[#0B5D3B] bg-[#EEF7EE] hover:bg-[#DCEBDD] rounded-lg transition-colors"
                            >
                              Manage / Notes
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: CALENDAR SCHEDULE */}
        {/* ======================================================== */}
        {activeTab === 'calendar' && (
          <div className="bg-white rounded-3xl p-6 border border-[#DCEBDD] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#DCEBDD]">
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#173A2A]">
                  Daily Consultation Schedule
                </h3>
                <p className="text-xs text-[#5F6F65]">
                  Visual hourly timeline for today and upcoming appointments.
                </p>
              </div>
              <span className="text-xs font-bold text-[#0B5D3B] bg-[#EEF7EE] px-3 py-1 rounded-full">
                Active Date: {todayStr}
              </span>
            </div>

            <div className="space-y-3">
              {appointments
                .slice()
                .sort((a, b) => a.preferredDate.localeCompare(b.preferredDate))
                .map((apt) => (
                  <div
                    key={apt.id}
                    className="p-4 rounded-2xl border border-[#DCEBDD] bg-[#FCFBF6] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#DCEBDD] flex flex-col items-center justify-center text-center shrink-0">
                        <Clock className="w-4 h-4 text-[#0B5D3B]" />
                        <span className="text-[10px] font-bold text-[#173A2A] mt-0.5 tabular-nums">
                          {apt.preferredTime}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-[#173A2A]">
                            {apt.patientName}
                          </h4>
                          <span className="text-[10px] font-mono text-[#5F6F65]">
                            ({apt.bookingReference})
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5F6F65] mt-0.5">
                          Date: <strong>{apt.preferredDate}</strong> · Mode:{' '}
                          <span className="capitalize font-semibold">{apt.consultationType}</span> · Reason:{' '}
                          {apt.reasonForVisit}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      {apt.meetingLink && (
                        <a
                          href={apt.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#0B5D3B] text-white text-[11px] font-semibold flex items-center gap-1"
                        >
                          <Video className="w-3 h-3 text-[#D8B45A]" />
                          <span>Join Video</span>
                        </a>
                      )}

                      <button
                        onClick={() => handleOpenDetail(apt)}
                        className="px-3 py-1.5 rounded-lg bg-white border border-[#DCEBDD] text-xs font-semibold hover:bg-[#EEF7EE]"
                      >
                        Notes
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: PRODUCTS CMS */}
        {/* ======================================================== */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-3xl p-6 border border-[#DCEBDD] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#DCEBDD]">
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#173A2A]">
                  Homeopathic Remedy Catalog
                </h3>
                <p className="text-xs text-[#5F6F65]">
                  Update inventory prices, indications, stock availability, and new remedies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 rounded-2xl border border-[#DCEBDD] bg-[#FCFBF6] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#0B5D3B] bg-[#EEF7EE] px-2 py-0.5 rounded">
                        {prod.category}
                      </span>
                      <span className="text-xs font-bold text-[#173A2A] tabular-nums">
                        ₹{prod.price}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-[#173A2A] mt-2">
                      {prod.name}
                    </h4>
                    <p className="text-[11px] text-[#5F6F65] mt-1 line-clamp-2">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#DCEBDD]/60 flex items-center justify-between text-xs">
                    <button
                      onClick={() =>
                        updateProduct(prod.id, { inStock: !prod.inStock })
                      }
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        prod.inStock
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {prod.inStock ? 'In Stock' : 'Out of Stock'}
                    </button>

                    <button
                      onClick={() => {
                        const newPrice = prompt(`Enter new price for ${prod.name}:`, String(prod.price));
                        if (newPrice && !isNaN(Number(newPrice))) {
                          updateProduct(prod.id, { price: Number(newPrice) });
                        }
                      }}
                      className="text-[11px] font-bold text-[#0B5D3B] hover:underline"
                    >
                      Edit Price
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: PRODUCT ORDERS */}
        {/* ======================================================== */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl p-6 border border-[#DCEBDD] space-y-6">
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#173A2A]">
                E-Commerce Orders
              </h3>
              <p className="text-xs text-[#5F6F65]">
                Track customer remedies, deliveries, and payment receipts.
              </p>
            </div>

            {orders.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#5F6F65] bg-[#FCFBF6] rounded-2xl border border-[#DCEBDD]">
                No customer orders received yet. Once users complete checkout, orders will appear here.
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-2xl border border-[#DCEBDD] bg-[#FCFBF6] space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#DCEBDD]">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#0B5D3B]">
                          {ord.orderNumber}
                        </span>
                        <span className="text-xs text-[#5F6F65] ml-2">
                          {new Date(ord.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EEF7EE] text-[#0B5D3B]">
                        {ord.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[#5F6F65] block">Customer</span>
                        <span className="font-semibold text-[#173A2A]">
                          {ord.customerInfo.fullName} ({ord.customerInfo.phone})
                        </span>
                      </div>
                      <div>
                        <span className="text-[#5F6F65] block">Ship To</span>
                        <span className="font-semibold text-[#173A2A] truncate block">
                          {ord.customerInfo.address}, {ord.customerInfo.city} - {ord.customerInfo.pincode}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#5F6F65] block">Total Amount</span>
                        <span className="font-bold text-[#0B5D3B] tabular-nums">
                          ₹{ord.total} ({ord.paymentMethod})
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#5F6F65] bg-white p-2 rounded-lg border border-[#DCEBDD]/60">
                      <strong>Items:</strong>{' '}
                      {ord.items.map((i) => `${i.product.name} (x${i.quantity})`).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: CLINIC TIMINGS & SETTINGS */}
        {/* ======================================================== */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCEBDD] max-w-3xl">
            <h3 className="font-editorial text-xl font-bold text-[#173A2A] mb-1">
              Clinic Configuration & Contact Details
            </h3>
            <p className="text-xs text-[#5F6F65] mb-6">
              Editable values reflecting the clinic's operating schedule, consultation rates, and address.
            </p>

            <form onSubmit={handleSaveSettings} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Clinic Brand Name
                  </label>
                  <input
                    type="text"
                    value={settingsForm.clinicName}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, clinicName: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={settingsForm.tagline}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, tagline: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Practitioner Name
                  </label>
                  <input
                    type="text"
                    value={settingsForm.practitionerName}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, practitionerName: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Practitioner Qualifications
                  </label>
                  <input
                    type="text"
                    value={settingsForm.practitionerQualification}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        practitionerQualification: e.target.value,
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Board Registration ID
                  </label>
                  <input
                    type="text"
                    value={settingsForm.registrationNumber}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, registrationNumber: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Official Telephone
                  </label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, phone: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    WhatsApp Number (with country code)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsappNumber}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, email: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>
              </div>

              {/* Timings & Fees */}
              <div className="pt-4 border-t border-[#DCEBDD] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Weekday Hours (Mon–Sat)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.weekdayHours}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, weekdayHours: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Sunday Hours
                  </label>
                  <input
                    type="text"
                    value={settingsForm.sundayHours}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, sundayHours: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Online Consultation Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={settingsForm.onlineFee}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        onlineFee: Number(e.target.value),
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    In-Clinic Consultation Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={settingsForm.clinicFee}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        clinicFee: Number(e.target.value),
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="pt-4 border-t border-[#DCEBDD] space-y-3">
                <div>
                  <label className="font-semibold text-[#173A2A] block mb-1">
                    Clinic Physical Address Line 1
                  </label>
                  <input
                    type="text"
                    value={settingsForm.addressLine1}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, addressLine1: e.target.value })
                    }
                    className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={settingsForm.city}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, city: e.target.value })
                      }
                      className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={settingsForm.state}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, state: e.target.value })
                      }
                      className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-[#173A2A] block mb-1">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      value={settingsForm.pincode}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, pincode: e.target.value })
                      }
                      className="w-full p-2.5 rounded-xl border border-[#DCEBDD]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#0B5D3B] text-white font-semibold text-xs hover:bg-[#145C3A] transition-colors"
                >
                  Save Clinic Settings
                </button>
              </div>
            </form>
          </div>
        )}

      </div>

      {/* Appointment Detail & Notes Modal */}
      {selectedApt && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-[#DCEBDD] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#DCEBDD]">
              <div>
                <span className="font-mono text-xs font-bold text-[#0B5D3B]">
                  {selectedApt.bookingReference}
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#173A2A]">
                  {selectedApt.patientName}
                </h4>
              </div>
              <button
                onClick={() => setSelectedApt(null)}
                className="text-[#5F6F65] hover:text-[#173A2A]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs text-[#173A2A]">
              <p>
                <strong>Mode:</strong> {selectedApt.consultationType.toUpperCase()}
              </p>
              <p>
                <strong>Date & Time:</strong> {selectedApt.preferredDate} at {selectedApt.preferredTime}
              </p>
              <p>
                <strong>Contact:</strong> {selectedApt.mobileNumber} · {selectedApt.email}
              </p>
              <p>
                <strong>Reason for Visit:</strong> {selectedApt.reasonForVisit}
              </p>
              {selectedApt.uploadedDocumentName && (
                <p>
                  <strong>Uploaded Document:</strong>{' '}
                  <span className="text-emerald-700 font-semibold">
                    📎 {selectedApt.uploadedDocumentName}
                  </span>
                </p>
              )}
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[#DCEBDD]">
              <label className="text-xs font-bold text-[#173A2A] block">
                Internal Physician Notes
              </label>
              <textarea
                rows={3}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Prescription recommendations, constitutional analysis notes..."
                className="w-full p-2.5 rounded-xl border border-[#DCEBDD] text-xs resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedApt(null)}
                className="px-4 py-2 rounded-xl text-xs border border-[#DCEBDD] hover:bg-[#EEF7EE]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 rounded-xl text-xs bg-[#0B5D3B] text-white font-semibold hover:bg-[#145C3A]"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manual Appointment Modal */}
      {isManualModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#DCEBDD] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#DCEBDD]">
              <h4 className="font-editorial text-lg font-bold text-[#173A2A]">
                Create Manual Appointment
              </h4>
              <button
                onClick={() => setIsManualModalOpen(false)}
                className="text-[#5F6F65]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleManualBookingSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-medium text-[#173A2A] block mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={manualForm.patientName}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, patientName: e.target.value })
                  }
                  className="w-full p-2 rounded-xl border border-[#DCEBDD]"
                />
              </div>

              <div>
                <label className="font-medium text-[#173A2A] block mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={manualForm.mobileNumber}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, mobileNumber: e.target.value })
                  }
                  className="w-full p-2 rounded-xl border border-[#DCEBDD]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-medium text-[#173A2A] block mb-1">
                    Mode
                  </label>
                  <select
                    value={manualForm.consultationType}
                    onChange={(e) =>
                      setManualForm({
                        ...manualForm,
                        consultationType: e.target.value as ConsultationType,
                      })
                    }
                    className="w-full p-2 rounded-xl border border-[#DCEBDD]"
                  >
                    <option value="online">Online Video</option>
                    <option value="clinic">In Clinic</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium text-[#173A2A] block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={manualForm.preferredDate}
                    onChange={(e) =>
                      setManualForm({ ...manualForm, preferredDate: e.target.value })
                    }
                    className="w-full p-2 rounded-xl border border-[#DCEBDD]"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-[#173A2A] block mb-1">
                  Time Slot
                </label>
                <input
                  type="text"
                  value={manualForm.preferredTime}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, preferredTime: e.target.value })
                  }
                  className="w-full p-2 rounded-xl border border-[#DCEBDD]"
                />
              </div>

              <div>
                <label className="font-medium text-[#173A2A] block mb-1">
                  Reason for Visit
                </label>
                <textarea
                  rows={2}
                  value={manualForm.reasonForVisit}
                  onChange={(e) =>
                    setManualForm({ ...manualForm, reasonForVisit: e.target.value })
                  }
                  className="w-full p-2 rounded-xl border border-[#DCEBDD]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsManualModalOpen(false)}
                  className="px-4 py-2 border rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0B5D3B] text-white rounded-xl font-semibold"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
