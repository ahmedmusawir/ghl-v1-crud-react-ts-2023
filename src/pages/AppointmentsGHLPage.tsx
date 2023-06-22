import { Container, Row, Box } from "../components/layouts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentsGHLPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleButtonClick = () => {
    const startMilliseconds = startDate
      ? moment(startDate).valueOf()
      : "No date selected";
    const endMilliseconds = endDate
      ? moment(endDate).valueOf()
      : "No date selected";

    console.log("Start Date in Milliseconds: ", startMilliseconds);
    console.log("End Date in Milliseconds: ", endMilliseconds);
  };

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

export default AppointmentsGHLPage;
