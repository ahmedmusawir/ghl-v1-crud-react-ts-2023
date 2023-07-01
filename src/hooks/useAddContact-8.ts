import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CONTACTS, Contact } from "../entities";
import contactService from "../services/contactService";
import { ApiResponse } from "../services/apiClient";

const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newContact: Contact) => {
      console.log("Adding contact", newContact);
      return contactService.post(newContact);
    },
    onMutate: (newContact: Contact) => {
      console.log("onMutate: started");
      queryClient.cancelQueries(CACHE_KEY_CONTACTS);

      const previousContacts =
        queryClient.getQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS);
      console.log("onMutate: got previous contacts", previousContacts);

      if (previousContacts && Array.isArray(previousContacts.contacts)) {
        console.log("Before:", previousContacts.contacts);
        previousContacts.contacts = [...previousContacts.contacts, newContact];
        console.log("After:", previousContacts.contacts);
        queryClient.setQueryData<ApiResponse<Contact>>(
          CACHE_KEY_CONTACTS,
          previousContacts
        );
      }

      console.log("onMutate: end");
      return { previousContacts };
    },
    onError: (err, newContact, context) => {
      queryClient.setQueryData<ApiResponse<Contact>>(
        CACHE_KEY_CONTACTS,
        context?.previousContacts
      );
    },
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData<ApiResponse<Contact>>(
        CACHE_KEY_CONTACTS,
        (oldData) =>
          oldData && Array.isArray(oldData.contacts)
            ? {
                ...oldData,
                contacts: oldData.contacts.map((contact) =>
                  contact === variables ? data : contact
                ),
              }
            : oldData
      );
    },
    onSettled: () => {
      queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
  });
};

export default useAddContact;
