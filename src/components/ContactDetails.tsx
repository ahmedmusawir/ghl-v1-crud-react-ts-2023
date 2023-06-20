import { useParams } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import Spinner from "./ui-ux/Spinner";
import useSingleContact from "../hooks/useSingleContact";

const ContactDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useSingleContact(params.id);
  const { contact } = data || {};

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  //   console.log(contact?.email);

  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={""}>
        <Box className="p-7 prose max-w-none">
          <h3>Contact ID: {params.id}</h3>
          <h3>First Name: {contact?.firstName}</h3>
          <h3>Last Name: {contact?.lastName}</h3>
          <h3>Email: {contact?.email}</h3>
        </Box>
      </Container>
    </Main>
  );
};

export default ContactDetails;
