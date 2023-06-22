import { Container, Row, Box } from "../components/layouts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import useSlots from "../hooks/useSlots";
import Spinner from "../components/ui-ux/Spinner";

// FOR TROUBLESHOOTING ONLY
const formatDate = (date: Date | null) => {
  return date ? moment(date).format("MMM D, YYYY") : "No date selected";
};

const SlotsGHLPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [startMilliseconds, setStartMilliseconds] = useState<number>(0);
  const [endMilliseconds, setEndMilliseconds] = useState<number>(0);

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
      // setDatesSelected(true);
    } else {
      console.log("Please select both start and end dates.");
    }
  };

  // console.log("Start Date in Milliseconds: ", startMilliseconds);
  // console.log("Start Date: ", formatDate(startDate));
  // console.log("End Date in Milliseconds: ", endMilliseconds);
  // console.log("End Date: ", formatDate(endDate));

  const { data, error, isLoading } = useSlots({
    calendarId: "LtoA6eEnqtWbvggtrsVv",
    startDate: startMilliseconds,
    endDate: endMilliseconds,
    timezone: "America/New_York",
  });

  // const { data, error, isLoading } = useSlots({
  //   calendarId: "LtoA6eEnqtWbvggtrsVv",
  //   startDate: 1686618166716,
  //   endDate: 1688062098126,
  //   timezone: "America/New_York",
  // });

  console.log("GHL SLOTS", data);

  // const slots = data?.[date].slots

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
        <Box className={"border bg-gray-100 prose text-center pt-3"}>
          <h3 className="text-primary">Time Slots</h3>
          <hr />
          {isLoading && <Spinner />}

          {!isLoading &&
            data &&
            Object.keys(data).map((date: string) => (
              <div key={date}>
                <h3>{date}</h3>
                {(data as { [key: string]: { slots: string[] } })[
                  date
                ].slots.map((slot: string, index: number) => (
                  <div key={index}>{slot}</div>
                ))}
              </div>
            ))}

          {/* KEEP THE FOLLOWING AS A REF FOR THE FUTURE. THE FOLLOWING WAS NOT WORKING */}

          {/* {!isLoading &&
            data &&
            Object.keys(data).map((date: string) => (
              <div key={date}>
                <h3>{date}</h3>
                {data.[date].slots && data.[date].slots.map((slot: string, index: number) => (
                  <div key={index}>{slot}</div>
                ))}
                
              </div>
            ))} */}
        </Box>
      </Row>
    </Container>
  );
};

export default SlotsGHLPage;
