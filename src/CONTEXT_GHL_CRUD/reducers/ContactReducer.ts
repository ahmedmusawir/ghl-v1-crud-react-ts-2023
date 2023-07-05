import { Contact } from "../services/contactService";

export type ContactState = {
  contact: Contact | null;
  contacts: Contact[];
  isLoading: boolean;
  error: string | null;
};

export type ContactAction =
  | { type: "FETCH_CONTACT"; payload: Contact }
  | { type: "FETCH_CONTACTS"; payload: Contact[] }
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "UPDATE_CONTACT"; payload: Contact }
  | { type: "REMOVE_CONTACT"; payload: string }
  | { type: "FETCH_CONTACTS_START" }
  | { type: "FETCH_CONTACTS_ERROR"; payload: string };

export const contactReducer = (
  state: ContactState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case "FETCH_CONTACTS_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_CONTACT":
      return {
        ...state,
        contact: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_CONTACTS":
      return { ...state, contacts: action.payload, isLoading: false };
    case "FETCH_CONTACTS_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "ADD_CONTACT":
      console.log("ADD CONTACT REDUCER PAYLOAD:", action.payload);
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        isLoading: false,
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        isLoading: false,
      };
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        isLoading: false,
      };
    default:
      return state;
  }
};
