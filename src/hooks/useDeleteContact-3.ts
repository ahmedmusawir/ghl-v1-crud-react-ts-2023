import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CONTACTS, Contact } from "../entities";
import contactService from "../services/contactService";
import { ApiResponse } from "../services/apiClient";

const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return contactService.delete(id);
    },

    onMutate: async (id: string) => {
      // Cancel any outgoing refetches to prevent them from clashing with our optimistic update
      await queryClient.cancelQueries(CACHE_KEY_CONTACTS);

      // Snapshot the previous value
      const previousContacts =
        queryClient.getQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS);

      // Optimistically remove the contact from cache
      if (previousContacts && Array.isArray(previousContacts.contacts)) {
        previousContacts.contacts = previousContacts.contacts.filter(
          (contact) => contact.id !== id
        );
        queryClient.setQueryData(CACHE_KEY_CONTACTS, previousContacts);
      }

      // Return the snapshotted value for error handling in `onError`
      return { previousContacts };
    },

    onError: (err, id, context) => {
      // If the mutation fails, rollback to the previous value
      queryClient.setQueryData(CACHE_KEY_CONTACTS, context?.previousContacts);
    },

    onSettled: () => {
      // Force a refetch of the contacts after mutation is settled
      queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
  });
};

export default useDeleteContact;
