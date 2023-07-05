import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CONTACTS, Contact } from "../entities";
import contactService from "../services/contactService";

const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newContact: Contact) => {
      console.log("Adding contact", newContact);
      return contactService.post(newContact);
    },

    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries([CACHE_KEY_CONTACTS, "all"]);
      queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    },
    // onSettled: () => {
    //   // Force a refetch of the contacts after mutation is settled
    //   queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    // },
  });
};

export default useAddContact;
