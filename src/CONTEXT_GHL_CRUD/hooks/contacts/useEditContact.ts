import { useContext, useState } from "react";
import userService, { User } from "../../services/userService";
import { ContactContext } from "../../contexts/ContactContext";
import { Contact } from "../../services/contactService";
import contactService from "../../services/contactService";

const useEditContact = () => {
  const { state, dispatch } = useContext(ContactContext);

  const editContact = async (contact: Contact) => {
    try {
      const res = await contactService.update(contact);
      dispatch({ type: "UPDATE_CONTACT", payload: res.data.contact });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "FETCH_CONTACTS_ERROR", payload: err.message });
      }
    }
  };

  return { editContact, error: state.error, isLoading: state.isLoading };
};

export default useEditContact;
