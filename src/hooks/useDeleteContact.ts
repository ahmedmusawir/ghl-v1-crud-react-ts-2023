import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CONTACTS } from "../entities";
import contactService from "../services/contactService";

const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return contactService.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([CACHE_KEY_CONTACTS, "all"]);
      queryClient.refetchQueries([CACHE_KEY_CONTACTS, "all"]);
    },

    // onSettled: () => {
    //   // Force a refetch of the contacts after mutation is settled
    //   queryClient.refetchQueries(CACHE_KEY_CONTACTS);
    // },
  });
};

export default useDeleteContact;
