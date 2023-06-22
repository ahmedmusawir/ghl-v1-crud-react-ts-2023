import { useQuery } from "@tanstack/react-query";
import slotService from "../services/slotService";
import { AppointmentSlots } from "../entities";
import ms from "ms";

const useSlots = (params: {
  calendarId: string;
  startDate: number;
  endDate: number;
  timezone: string;
}) =>
  useQuery<AppointmentSlots, Error>({
    queryKey: ["slots", params.startDate, params.endDate],
    queryFn: () => slotService.getAllSlots(params),
    staleTime: ms("2m"), // 2 minutes
    enabled: params.startDate !== 0 && params.endDate !== 0,
  });

export default useSlots;
