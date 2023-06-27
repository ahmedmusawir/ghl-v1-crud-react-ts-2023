import { Link } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import "./UsersList.scss";
import { User } from "../entities";

interface Props {
  users: User[] | undefined;
}

const UsersList = ({ users }: Props) => {
  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={"bg-gray-100"}>
        <Box className="">
          <ul className="list-group">
            {users?.map((user) => (
              <Link to={`/users/${user.id}`} key={user.id}>
                <li className="bg-primary text-white p-4 my-2">{user.name}</li>
              </Link>
            ))}
          </ul>
        </Box>
      </Container>
    </Main>
  );
};

export default UsersList;
