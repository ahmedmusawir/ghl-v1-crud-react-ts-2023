export interface Appointment {
  id: string;
  address: string;
  calendarId: string;
  contactId: string;
  locationId: string;
  appointmentStatus: string;
  isFullDay: boolean;
  selectedTimezone: string;
  isRecurring: boolean;
  status: string;
  contact: Contact;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppointmentResponse {
  appointments: Appointment[];
}

export interface Slots {
  slots: string[];
}

export interface AppointmentSlots {
  [date: string]: Slots;
}

export interface Contact {
  id: string;
  locationId: string;
  contactName: string;
  firstName: string | null;
  lastName: string | null;
  companyName: string | null;
  email: string;
  phone: string | null;
  timezone: string | null;
}

export interface ContactSingle {
  contact: Contact;
}

export interface User {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roles: {
    type: string;
    role: string;
    locationIds: string[];
  };
}
