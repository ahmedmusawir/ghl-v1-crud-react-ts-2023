import { Contact, ContactSingle } from "../entities";
import APIClient from "../services/apiClientJsonSrv";

export const singleContactService = new APIClient<ContactSingle>("/contacts");

export default new APIClient<Contact>("/contacts");
