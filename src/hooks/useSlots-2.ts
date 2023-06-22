import { useQuery } from "@tanstack/react-query";
import slotService from "../services/slotService";
import { ApiResponse } from "../services/apiClient";
import { AppointmentSlots } from "../entities";
import ms from "ms";

interface UseSlotsProps {
  calendarId: string;
  startDate?: number;
  endDate?: number;
  timezone: string;
}

// const useSlots = ({
//   calendarId,
//   startDate,
//   endDate,
//   timezone,
// }: UseSlotsProps) => {
//   return useQuery<ApiResponse<AppointmentSlots>, Error>(
//     ["slots", calendarId, startDate, endDate, timezone],
//     () =>
//       startDate && endDate
//         ? slotService.getAllSlots({ calendarId, startDate, endDate, timezone })
//         : Promise.resolve({ data: {} }),
//     {
//       staleTime: ms("2m"), // 2 minutes
//       enabled: !!startDate && !!endDate, // the query will not run until startDate and endDate are defined
//     }
//   );
// };
// export default useSlots;
