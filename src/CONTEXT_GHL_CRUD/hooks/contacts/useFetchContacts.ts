import { useContext, useEffect, useState } from "react";
import { CanceledError } from "../../services/apiClient";
import { ContactContext } from "../../contexts/ContactContext";
import contactService, { Contact } from "../../services/contactService";

const useFetchContacts = () => {
  const { state, dispatch } = useContext(ContactContext);

  useEffect(() => {
    dispatch({ type: "FETCH_CONTACTS_START" });
    const { request, cancel } = contactService.getAll<Contact>();

    request
      .then((res) => {
        dispatch({ type: "FETCH_CONTACTS", payload: res.data.contacts });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_CONTACTS_ERROR", payload: err.message });
        if (err instanceof CanceledError) return;
      });

    // Clean up
    // return () => cancel();
  }, [dispatch]);

  return {
    contacts: state.contacts,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default useFetchContacts;
