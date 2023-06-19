import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { User } from "../entities";
import userService from "../services/userService";
import { ApiResponse } from "../services/apiClient";

const useUsers = () =>
  useQuery<ApiResponse<User>, Error>({
    queryKey: ["users"],
    queryFn: userService.getAll,
    staleTime: ms("2m"), // 2 minutes
  });

// const useUsers = () => {
//   return useQuery(["users"], userService.getAll, {
//     staleTime: ms("2m"),
//   });
// };

export default useUsers;
