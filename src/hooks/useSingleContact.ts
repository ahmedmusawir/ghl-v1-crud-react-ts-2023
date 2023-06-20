import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Contact } from "../entities";
import { singleContactService } from "../services/contactService";

interface ContactResponse {
  contact: Contact;
}

const useSingleContact = (id: string = "") =>
  useQuery<ContactResponse | null, Error>({
    queryKey: ["contact", id],
    queryFn: () => singleContactService.get(id),
    enabled: !!id,
    staleTime: ms("2m"), // 2 minutes
  });

export default useSingleContact;
