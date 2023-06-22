import { Container, Row, Box } from "../components/layouts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import useSlots from "../hooks/useSlots";
import ms from "ms";
import slotService from "../services/slotService";

const SlotsGHLPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Declare startMilliseconds and endMilliseconds as state variables
  const [startMilliseconds, setStartMilliseconds] = useState<number | string>(
    0
  );
  const [endMilliseconds, setEndMilliseconds] = useState<number | string>(0);

  const [datesSelected, setDatesSelected] = useState<boolean>(false);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleButtonClick = () => {
    if (startDate && endDate) {
      setStartMilliseconds(moment(startDate).valueOf());
      setEndMilliseconds(moment(endDate).valueOf());
      setDatesSelected(true);
    } else {
      console.log("Please select both start and end dates.");
    }
  };

  // const handleButtonClick = () => {
  //   setStartMilliseconds(
  //     startDate ? moment(startDate).valueOf() : "No date selected"
  //   );
  //   setEndMilliseconds(
  //     endDate ? moment(endDate).valueOf() : "No date selected"
  //   );

  //   console.log("Start Date in Milliseconds: ", startMilliseconds);
  //   console.log("End Date in Milliseconds: ", endMilliseconds);
  // };

  // const handleButtonClick = () => {
  //   startMilliseconds = startDate
  //     ? moment(startDate).valueOf()
  //     : "No date selected";
  //   endMilliseconds = endDate ? moment(endDate).valueOf() : "No date selected";

  //   console.log("Start Date in Milliseconds: ", startMilliseconds);
  //   console.log("End Date in Milliseconds: ", endMilliseconds);
  // };

  //   const { data, error, isLoading } = useSlots({
  //     calendarId: "LtoA6eEnqtWbvggtrsVv",
  //     startDate: startMilliseconds,
  //     endDate: endMilliseconds,
  //     timezone: "America/New_York",
  //   });

  //   const { data, error, isLoading } = useSlots({
  //     calendarId: "LtoA6eEnqtWbvggtrsVv",
  //     startDate: 1686618166716,
  //     endDate: 1688062098126,
  //     timezone: "America/New_York",
  //   });

  // console.log("GHL SLOTS", data);

  return (
    <Container className={""} FULL={false} pageTitle={"Appointments"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Appointments</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
      <Row className={"grid gap-3 grid-auto-fit p-1"}>
        <Box className={""}>
          <div className="p-10">
            <div className="mb-5">
              <label className="block mb-1">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-1">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <button onClick={handleButtonClick} className="btn btn-primary">
              Show dates in milliseconds
            </button>
          </div>
        </Box>
        <Box className={"border bg-gray-100"}>Time Slots</Box>
      </Row>
    </Container>
  );
};

export default SlotsGHLPage;
