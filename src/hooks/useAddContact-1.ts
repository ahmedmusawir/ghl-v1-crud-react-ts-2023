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
    onMutate: async (newContact: Contact) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(CACHE_KEY_CONTACTS);

      // Snapshot the previous value
      const previousContacts =
        queryClient.getQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS);

      // Optimistically update to the new value
      if (previousContacts) {
        queryClient.setQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS, {
          ...previousContacts,
          contact: [...previousContacts.contact, newContact],
        });
      }

      // Return the snapshotted value (to be used in onError)
      return { previousContacts };
    },
    // onError: (err, newContact, context) => {
    //   // If the mutation fails, rollback to the previous value
    //   queryClient.setQueryData<ApiResponse<Contact>>(
    //     CACHE_KEY_CONTACTS,
    //     context?.previousContacts
    //   );
    // },
    // onSuccess: () => {
    //   // Invalidate and refetch
    //   queryClient.invalidateQueries(CACHE_KEY_CONTACTS);
    //   // queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    // },
    onSettled: () => {
      // Force a refetch of the contacts after mutation is settled
      queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
  });
};

export default useAddContact;
