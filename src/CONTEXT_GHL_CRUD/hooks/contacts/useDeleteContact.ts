import { useContext, useState } from "react";
import userService from "../../services/userService";
import { ContactContext } from "../../contexts/ContactContext";
import contactService from "../../services/contactService";

const useDeleteContact = (id: string = "") => {
  const { state, dispatch } = useContext(ContactContext);

  const deleteContact = async (id: string = "") => {
    dispatch({ type: "FETCH_CONTACTS_START" });

    try {
      const res = await contactService.delete(id);
      // console.log("Deleted User:", res.data);
      dispatch({ type: "REMOVE_CONTACT", payload: id });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "FETCH_CONTACTS_ERROR", payload: err.message });
      }
    }
  };

  return { deleteContact, error: state.error, isLoading: state.isLoading };
};

export default useDeleteContact;
