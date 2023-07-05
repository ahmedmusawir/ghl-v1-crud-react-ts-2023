import create from "./httpService";

export interface Contact {
  id: string;
  locationId: string;
  contactName: string;
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  email?: string;
  phone?: string | null;
  timezone: string | null;
}

export interface ContactSingle {
  contact: Contact;
}

export default create("/v1/contacts");
