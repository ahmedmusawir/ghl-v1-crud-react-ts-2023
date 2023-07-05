import { useContext, useState } from "react";
import contactService, { Contact } from "../../services/contactService";
import { ContactContext } from "../../contexts/ContactContext";

const useAddContact = () => {
  const { state, dispatch } = useContext(ContactContext);

  const addContact = async (contact: Contact) => {
    dispatch({ type: "FETCH_CONTACTS_START" });
    try {
      const res = await contactService.post(contact);
      dispatch({ type: "ADD_CONTACT", payload: res.data.contact });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "FETCH_CONTACTS_ERROR", payload: err.message });
      }
    }
  };

  return { addContact, error: state.error, isLoading: state.isLoading };
};

export default useAddContact;
