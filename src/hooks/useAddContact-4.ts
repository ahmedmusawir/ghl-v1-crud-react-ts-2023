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

        if (previousContacts) {
          queryClient.setQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS, {
            ...previousContacts,
            contact: [...previousContacts.contact, newContact],
          });
        }

        return { previousContacts };
      } catch (error) {
        console.error("Error in onMutate:", error);
      }
    },

    onError: (err, newContact, context) => {
      // If the mutation fails, rollback to the previous value
      queryClient.setQueryData<ApiResponse<Contact>>(
        CACHE_KEY_CONTACTS,
        context?.previousContacts
      );
    },
    // onSuccess: () => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries(CACHE_KEY_CONTACTS);
    //   // queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    // },
    onSettled: () => {
      // Force a refetch of the contacts after mutation is settled
      // queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
  });
};

export default useAddContact;
