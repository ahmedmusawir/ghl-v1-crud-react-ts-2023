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
          <h3>
            <span className="font-extrabold text-primary">User ID:</span>{" "}
            {params.id}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">First Name:</span>{" "}
            {contact?.firstName}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Last Name:</span>{" "}
            {contact?.lastName}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Email:</span>{" "}
            {contact?.email}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Phone:</span>{" "}
            {contact?.phone}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Company:</span>{" "}
            {contact?.companyName}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Location:</span>{" "}
            {contact?.locationId}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Time Zone:</span>{" "}
            {contact?.timezone}
          </h3>
        </Box>
      </Container>
    </Main>
  );
};

export default ContactDetails;
