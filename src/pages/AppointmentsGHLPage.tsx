import { Container, Row, Box } from "../components/layouts";

const AppointmentsGHLPage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Appointments"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Appointments</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
    </Container>
  );
};

export default AppointmentsGHLPage;
