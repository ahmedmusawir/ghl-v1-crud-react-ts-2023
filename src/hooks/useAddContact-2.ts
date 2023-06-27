import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CONTACTS, Contact } from "../entities";
import contactService from "../services/contactService";
import { ApiResponse } from "../services/apiClient";

// interface ApiResponse<T> {
//   [key: string]: T[];
// }

const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newContact: Contact) => {
      console.log("Adding contact", newContact);
      return contactService.post(newContact);
    },
    onMutate: async (newContact: Contact) => {
      console.log("OnMutate", newContact);

      // Snapshot the previous value
      const previousContacts =
        queryClient.getQueryData<ApiResponse<Contact>>(CACHE_KEY_CONTACTS);

      // Optimistically update to the new value
      await queryClient.setQueryData<ApiResponse<Contact>>(
        CACHE_KEY_CONTACTS,
        (oldData) => {
          return {
            ...oldData,
            // contact: [...oldData?.contact, newContact],
          };
        }
      );

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
