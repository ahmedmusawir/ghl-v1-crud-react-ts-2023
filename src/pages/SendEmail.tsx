import Contact from "../components/Contact";
import { Container, Row, Box } from "../components/layouts";

const SendEmail = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"prose"}>
        <h1 className="h1">Send Email w/ EmailJS</h1>
      </Row>
      <Row>
        <Contact />
      </Row>
    </Container>
  );
};

export default SendEmail;
