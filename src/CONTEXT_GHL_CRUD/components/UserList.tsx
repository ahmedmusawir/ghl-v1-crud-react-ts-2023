import { Link } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import "./UserList.scss";
import { User } from "../entities";

interface Props {
  users: User[] | undefined;
}

const ContactsList = ({ users }: Props) => {
  // console.log("CONTACT LIST", contacts);

  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={"bg-gray-100"}>
        <Box className="">
          <ul className="list-group">
            {users
              ?.slice()
              .reverse()
              .map((user) => (
                <Link to={`/users/${user.id}`} key={user.id}>
                  <li className="p-4 my-2 bg-primary text-white">
                    {user.firstName}
                  </li>
                </Link>
              ))}
          </ul>
        </Box>
      </Container>
    </Main>
  );
};

export default ContactsList;
