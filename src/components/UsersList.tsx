import { Link } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import "./UsersList.scss";
import useUsers from "../hooks/useUsers";
import Spinner from "./ui-ux/Spinner";

const UsersList = () => {
  const { data, isLoading, error } = useUsers();
  const users = data?.users;
  console.log(users);

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={"bg-gray-100"}>
        <Box className="">
          <ul className="list-group">
            {!isLoading &&
              users?.map((user) => (
                <Link to={`/users/${user.id}`} key={user.id}>
                  <li className="list-group-item my-2">{user.name}</li>
                </Link>
              ))}
          </ul>
        </Box>
      </Container>
    </Main>
  );
};

export default UsersList;
