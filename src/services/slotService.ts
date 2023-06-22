import { AppointmentSlots } from "../entities";
import APIClient from "../services/apiClient";

class SlotService extends APIClient<AppointmentSlots> {
  constructor() {
    super("/v1/appointments/slots");
  }

  getAllSlots = (params: {
    calendarId: string;
    startDate: number;
    endDate: number;
    timezone: string;
  }) => {
    return this.getAllWithParams(params);
  };
}

export default new SlotService();
