import { Appointment, AppointmentResponse } from "../entities";
import APIClient from "./apiClient";

class AppointmentService extends APIClient<AppointmentResponse> {
  constructor() {
    super("/v1/appointments");
  }

  getAllAppointments = (params: {
    calendarId: string;
    startDate: number;
    endDate: number;
    includeAll: boolean;
  }) => {
    return this.getAllWithParams(params);
  };
}

export default new AppointmentService();
