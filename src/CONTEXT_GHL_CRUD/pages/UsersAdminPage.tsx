import { Outlet } from "react-router-dom";
import UserList from "../components/UserList";
import { Container, Row, Box } from "../components/layouts";
import Spinner from "../components/ui-ux/Spinner";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import useUsers from "../hooks/users/useUsers";
import UserInsertForm from "../components/UserInsertForm";

const UsersAdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { users, isLoading, error } = useUsers();

  // console.log("data:", users);

  const styles = useSpring({
    to: async (next, cancel) => {
      if (isOpen) {
        await next({ display: "block" });
        await next({ opacity: 1, maxHeight: 1000 });
      } else {
        await next({ opacity: 0, maxHeight: 0 });
        await next({ display: "none" });
      }
    },
    from: { opacity: 0, maxHeight: 0, display: "none" },
  });

  if (error) return <h1>A Moose error has occured! </h1>;

  const openInsertContact = () => {
    // console.log("Open Insert");
    setIsOpen((prev) => prev !== true);
  };

  return (
    <Container className={""} FULL={false} pageTitle={"Contacts"}>
      <Row className={"prose flex justify-between"}>
        <div className="header-text">
          <h1 className="h1">
            Context CRUD Project: <br /> <small>User Admin Page</small>
          </h1>
          <h4 className="pr-10">
            Based on local Json Server. Here we only setup the generic http
            server with Axios, have a apiClent with the API URL and headers,
            Services like userService with data type details and custom hooks
            like useUsers.ts, addUsers.ts, deleteUsers.ts and updateUsers.ts.
            CONTEXT/REDUCER implementation has begun
          </h4>
        </div>
        <button
          className="btn btn-primary my-5 btn-wide btn-lg"
          type="button"
          onClick={openInsertContact}
        >
          {isOpen ? "Close Form" : "Add Contact"}
        </button>
      </Row>
      {/* <Row className={isOpen ? "prose max-w-none" : "prose max-w-none hidden"}> */}
      <animated.div style={styles}>
        {/* <Row className={`prose max-w-none ${isOpen ? "" : "hidden"}`}> */}
        <Row className={`prose max-w-none`}>
          <h2 className="h1">Insert Contacts</h2>
          <hr />
          <Box className="card-normal bg-base-100 shadow-xl px-10">
            <UserInsertForm />
          </Box>
        </Row>
      </animated.div>
      <Row className={"grid gap-3 grid-auto-fit p-1"}>
        <Box className={""}>
          {isLoading && <Spinner />}
          {!isLoading && <UserList users={users} />}
        </Box>
        <Box className={"border bg-gray-100"}>
          <Outlet />
        </Box>
      </Row>
    </Container>
  );
};

export default UsersAdminPage;
