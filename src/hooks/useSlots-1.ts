import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { AppointmentSlots } from "../entities";
import { ApiResponse } from "../services/apiClient";
import slotService from "../services/slotService";

// const useSlots = (params: {
//   calendarId: string;
//   startDate: number;
//   endDate: number;
//   timezone: string;
// }) =>
//   useQuery<ApiResponse<AppointmentSlots>, Error>({
//     queryKey: ["slots"],
//     queryFn: () => slotService.getAllSlots(params),
//     staleTime: ms("2m"), // 2 minutes
//     enabled: params.startDate !== 0 && params.endDate !== 0,
//   });

// export default useSlots;
