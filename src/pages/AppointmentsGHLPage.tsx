import { Container, Row, Box } from "../components/layouts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import useAppointments from "../hooks/useAppointments";
import Spinner from "../components/ui-ux/Spinner";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
} from "../RTK_APPOINTMENTS/services/dummyTriggerApi";
import { skipToken } from "@reduxjs/toolkit/query/react";

const AppointmentsGHLPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data: allProducts, isFetching: isFetchingAllProducts } =
    useGetAllProductsQuery();

  // console.log("Dummy Json Data:", allProducts?.products);

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

  // const { data, error, isLoading } = useAppointments({
  //   calendarId: "LtoA6eEnqtWbvggtrsVv",
  //   startDate: 1686618166716,
  //   endDate: 1688062098126,
  //   includeAll: true,
  // });

  // const appointments = data?.appointments;

  // if (isLoading) return <Spinner />;

  // if (error) return <h1>A Moose error has occured! </h1>;

  // console.log("All Appointments", data);

  return (
    <Container className={""} FULL pageTitle={"Appointments"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Appointments</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
      <Row className={"flex p-1"}>
        <Box className={"flex-2 border border-gray-300"}>
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
              Show Appointments
            </button>
          </div>
        </Box>
        <Box
          className={
            "flex-1 border bg-gray-100 prose max-w-none text-center pt-3"
          }
        >
          <h3 className="text-primary">Appointments</h3>
          <hr />
          {/* <Box className="grid gap-3 grid-auto-fit p-1">
            {appointments?.map((appointment) => (
              <div
                className="card w-full bg-primary text-primary-content"
                key={appointment.id}
              >
                <div className="card-body text-left">
                  <h2 className="card-title text-white">
                    {appointment.contact.firstName}{" "}
                    {appointment.contact.lastName}
                  </h2>
                  <p className="">
                    <span className="font-bold">ID:</span> {appointment.id}
                  </p>
                  <p className="">
                    <span className="font-bold">STATUS:</span>{" "}
                    {appointment.appointmentStatus}
                  </p>
                  <p className="">
                    <span className="font-bold">EMAIL:</span>{" "}
                    {appointment.contact.email}
                  </p>
                  <p className="">
                    <span className="font-bold">PHONE:</span>{" "}
                    {appointment.contact.phone}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-warning">Reschedule</button>
                    <button className="btn btn-error">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </Box> */}
        </Box>
      </Row>
    </Container>
  );
};

export default AppointmentsGHLPage;
