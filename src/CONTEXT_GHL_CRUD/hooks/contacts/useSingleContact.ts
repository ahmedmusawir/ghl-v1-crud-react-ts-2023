import { useContext, useEffect, useState } from "react";
import { CanceledError } from "../../services/apiClient";
import contactService from "../../services/userService";
import { ContactContext } from "../../contexts/ContactContext";
import { Contact } from "../../services/contactService";

const useSingleContact = (id: string = "") => {
  const { state, dispatch } = useContext(ContactContext);

  useEffect(() => {
    // Try to find the user in the state
    const contact = state.contacts.find((contact) => contact.id === id);

    if (contact) {
      // If the contact is in the state, use that
      dispatch({ type: "FETCH_CONTACT", payload: contact });
    } else {
      // Otherwise, fall back to an API call
      dispatch({ type: "FETCH_CONTACTS_START" });

      const { request, cancel } = contactService.get<Contact>(id);

      request
        .then((res) => {
          dispatch({ type: "FETCH_CONTACT", payload: res.data });
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          dispatch({ type: "FETCH_CONTACTS_ERROR", payload: err.message });
        });

      // Clean up
      return () => cancel();
    }
  }, [id, dispatch, state.contacts]);

  return {
    contact: state.contact,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default useSingleContact;
