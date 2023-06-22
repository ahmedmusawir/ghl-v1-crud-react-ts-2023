import { useQuery } from "@tanstack/react-query";
import { Appointment, AppointmentResponse } from "../entities";
import ms from "ms";
import AppointmentService from "../services/appointmentService";

const useAppointments = (params: {
  calendarId: string;
  startDate: number;
  endDate: number;
  includeAll: boolean;
}) =>
  useQuery<AppointmentResponse, Error>({
    queryKey: ["appointments", params.startDate, params.endDate],
    queryFn: () => AppointmentService.getAllAppointments(params),
    staleTime: ms("2m"), // 2 minutes
    enabled: params.startDate !== 0 && params.endDate !== 0,
  });

export default useAppointments;
