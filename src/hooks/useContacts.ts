import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { ApiResponse } from "../services/apiClient";
import contactService from "../services/contactService";
import { CACHE_KEY_CONTACTS, Contact } from "../entities";

const useContacts = () =>
  useQuery<ApiResponse<Contact>, Error>({
    queryKey: [CACHE_KEY_CONTACTS, "all"],
    queryFn: contactService.getAll,
    staleTime: ms("2m"), // 2 minutes
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // retry: false,
  });

export default useContacts;
