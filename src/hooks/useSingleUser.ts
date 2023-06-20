import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import userService from "../services/userService";
import { User } from "../entities";

const useSingleUser = (id: string = "") =>
  useQuery<User | null, Error>({
    queryKey: ["user", id],
    queryFn: () => userService.get(id),
    enabled: !!id,
    staleTime: ms("2m"), // 2 minutes
  });

// THE FOLLOWING IS ALSO A STANDARD PRACTICE
// const useSingleUser = (id?: string) =>
//   useQuery<User, Error>(
//     ["user", id],
//     () => {
//       if (id) {
//         return userService.get(id);
//       }
//       throw new Error("ID is not provided.");
//     },
//     {
//       enabled: !!id,
//       staleTime: ms("2m"),
//     }
//   );

export default useSingleUser;
