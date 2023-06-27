import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import Spinner from "./ui-ux/Spinner";
import useSingleContact from "../hooks/useSingleContact";
import useDeleteContact from "../hooks/useDeleteContact";

const ContactDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useSingleContact(params.id);
  const { contact } = data || {};

  const { mutateAsync } = useDeleteContact();

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  const deleteItem = async (id: string = "") => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await mutateAsync(id);
        console.log("Todo deleted successfully");
        // window.location.reload();
      } catch (err) {
        console.log("An error occurred:", err);
      }
    } else {
      console.log("Deletion cancelled");
    }
  };

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
        </Box>
        <Box className="p-7 prose max-w-none">
          <button
            className="btn btn-error"
            onClick={() => deleteItem(contact?.id)}
          >
            Delete
          </button>
        </Box>
      </Container>
    </Main>
  );
};

export default ContactDetails;
