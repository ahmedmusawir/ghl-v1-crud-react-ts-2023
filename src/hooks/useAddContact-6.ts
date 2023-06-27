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
      try {
        queryClient.cancelQueries(CACHE_KEY_CONTACTS);

        const previousContacts =
          queryClient.getQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS);

        if (previousContacts && Array.isArray(previousContacts.contact)) {
          console.log("Before:", previousContacts.contact);
          previousContacts.contact = [...previousContacts.contact, newContact];
          console.log("After:", previousContacts.contact);
          queryClient.setQueryData<ApiResponse<Contact>>(
            CACHE_KEY_CONTACTS,
            previousContacts
          );
        }

        // console.log("PREV CONTACTS", previousContacts);

        return { previousContacts };
      } catch (error) {
        console.error("Error in onMutate:", error);
      }
    },

    onSuccess: (savedContact, newContact) => {
      queryClient.setQueryData<ApiResponse<Contact>>(
        CACHE_KEY_CONTACTS,
        (previousContacts) => {
          if (previousContacts && Array.isArray(previousContacts.contact)) {
            return {
              ...previousContacts,
              contact: previousContacts.contact.map((contact) =>
                contact === newContact ? savedContact : contact
              ),
            };
          }
          return previousContacts;
        }
      );
    },

    onError: (err, newContact, context) => {
      // If the mutation fails, rollback to the previous value
      queryClient.setQueryData<ApiResponse<Contact>>(
        CACHE_KEY_CONTACTS,
        context?.previousContacts
      );
    },

    onSettled: () => {
      // Force a refetch of the contacts after mutation is settled
      queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
  });
};

export default useAddContact;
