import { Outlet } from "react-router-dom";
import UsersList from "../components/UsersList";
import { Container, Row, Box } from "../components/layouts";

import Spinner from "../components/ui-ux/Spinner";
import useUsers from "../CONTEXT_GHL_CRUD/hooks/users/useUsers";
// import useUsers from "../hooks/useUsers";

const UsersGHLPage = () => {
  const { users, isLoading, error } = useUsers();

  // if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  // console.log(users);

  return (
    <Container className={""} FULL={false} pageTitle={"Users"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Users</h1>
        <h4 className="h2">REST API v.1 w/ CONTEXT & REDUCER</h4>
      </Row>
      <Row className={"grid gap-3 grid-auto-fit p-1"}>
        <Box className={""}>
          {isLoading && <Spinner />}
          <UsersList users={users} />
        </Box>
        <Box className={"border bg-gray-100"}>
          <Outlet />{" "}
        </Box>
      </Row>
    </Container>
  );
};

export default UsersGHLPage;
