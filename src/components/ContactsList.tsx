import { Link } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import "./UsersList.scss";
import { Contact, User } from "../entities";

interface Props {
  contacts: Contact[] | undefined;
}

const ContactsList = ({ contacts }: Props) => {
  // console.log("CONTACT LIST", contacts);

  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={"bg-gray-100"}>
        <Box className="">
          <ul className="list-group">
            {contacts
              ?.slice()
              .reverse()
              .map((contact) => (
                <Link to={`/contacts/${contact.id}`} key={contact.id}>
                  <li className="p-4 my-2 bg-primary text-white">
                    {/* {contact.contactName} */}
                    {contact.firstName} : {contact.email}
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
