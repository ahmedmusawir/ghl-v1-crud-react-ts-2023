import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Contact } from "../entities";
import { ApiResponse } from "../services/apiClient";
import contactService from "../services/contactService";

const useContacts = () =>
  useQuery<ApiResponse<Contact>, Error>({
    queryKey: ["contacts"],
    queryFn: contactService.getAll,
    staleTime: ms("2m"), // 2 minutes
  });

// const useContacts = () => {
//   return useQuery(["users"], userService.getAll, {
//     staleTime: ms("2m"),
//   });
// };

export default useContacts;
