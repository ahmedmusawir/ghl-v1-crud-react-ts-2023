import { Outlet } from "react-router-dom";
import UsersList from "../components/UsersList";
import { Container, Row, Box } from "../components/layouts";

const UsersGHLPage = () => {
  // const apiKey = process.env.REACT_APP_GHL_API_KEY;
  // console.log({ apiKey });

  return (
    <Container className={""} FULL={false} pageTitle={"Users"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Users</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
      <Row className={"grid gap-3 grid-auto-fit p-1"}>
        <Box className={""}>
          <UsersList />
        </Box>
        <Box className={""}>
          <Outlet />
        </Box>
      </Row>
    </Container>
  );
};

export default UsersGHLPage;
