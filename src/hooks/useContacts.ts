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
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

export default useContacts;

// const useContacts = () => {
//   const { state, dispatch } = useContext(ContactContext);

//   useEffect(() => {
//     dispatch({ type: "FETCH_CONTACTS_START" });

//     const request = contactService.getAll();

//     console.log("FETCH ALL CONTACTS HOOK:", request);

//     request
//       .then((res) => {
//         dispatch({ type: "FETCH_CONTACTS", payload: res.items });
//         console.log("FETCH ALL CONTACTS IN HOOK:", res);
//       })
//       .catch((err) => {
//         dispatch({ type: "FETCH_CONTACTS_ERROR", payload: err.message });
//         // if (err instanceof CanceledError) return;
//         console.log("FETCH ALL CONTACTS FAILED:", err.message);
//       });
//   }, [dispatch]);

//   return {
//     contacts: state.contacts,
//     error: state.error,
//     isLoading: state.isLoading,
//   };
// };
