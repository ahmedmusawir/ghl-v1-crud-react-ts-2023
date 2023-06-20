import { Outlet } from "react-router-dom";
import UsersList from "../components/UsersList";
import { Container, Row, Box } from "../components/layouts";
import { Spinner } from "flowbite-react";
import useUsers from "../hooks/useUsers";

const UsersGHLPage = () => {
  const { data, isLoading, error } = useUsers();
  const users = data?.users;
  console.log(users);

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  return (
    <Container className={""} FULL={false} pageTitle={"Users"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Users</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
      <Row className={"grid gap-3 grid-auto-fit p-1"}>
        <Box className={""}>
          <UsersList users={users} />
        </Box>
        <Box className={"border bg-gray-100"}>
          <Outlet />
        </Box>
      </Row>
    </Container>
  );
};

export default UsersGHLPage;
