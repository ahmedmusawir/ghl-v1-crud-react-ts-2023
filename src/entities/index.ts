export interface Slots {
  slots: string[];
}

export interface AppointmentSlots {
  date: Slots;
}

export interface Contact {
  id: string;
  locationId: string;
  contactName: string;
  firstName: string;
  lastName: string;
  companyName: string | null;
  email: string;
  phone: string | null;
  timezone: string | null;
}

export interface ContactSingle {
  contact: Contact;
}

// export interface ContactsData {
//   contacts: Contact[];
// }

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

// export interface UsersData {
//   users: User[];
// }
