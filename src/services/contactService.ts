import { Contact, ContactSingle } from "../entities";
import APIClient from "../services/apiClient";

export const singleContactService = new APIClient<ContactSingle>(
  "/v1/contacts"
);

export default new APIClient<Contact>("/v1/contacts");
