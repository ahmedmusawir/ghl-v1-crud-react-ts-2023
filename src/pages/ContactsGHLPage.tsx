import { Container, Row, Box } from "../components/layouts";

const ContactsGHLPage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Contacts"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Contacts</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
    </Container>
  );
};

export default ContactsGHLPage;
