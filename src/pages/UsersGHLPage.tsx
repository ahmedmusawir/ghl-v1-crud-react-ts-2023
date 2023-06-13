import { Container, Row, Box } from "../components/layouts";

const UsersGHLPage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Users"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Users</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
    </Container>
  );
};

export default UsersGHLPage;
