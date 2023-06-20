import { Outlet } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import { Container, Row, Box } from "../components/layouts";
import Spinner from "../components/ui-ux/Spinner";
import useContacts from "../hooks/useContacts";

const ContactsGHLPage = () => {
  const { data, isLoading, error } = useContacts();
  const contacts = data?.contacts;
  console.log(contacts);

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;
  return (
    <Container className={""} FULL={false} pageTitle={"Contacts"}>
      <Row className={"prose"}>
        <h1 className="h1">GHL Contacts</h1>
        <h4 className="h2">REST API v.1</h4>
      </Row>
      <Row className={"grid gap-3 grid-auto-fit p-1"}>
        <Box className={""}>
          <ContactsList contacts={contacts} />
        </Box>
        <Box className={"border bg-gray-100"}>
          <Outlet />
        </Box>
      </Row>
    </Container>
  );
};

export default ContactsGHLPage;
