import { useParams } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import useSingleUser from "../hooks/useSingleUser";
import Spinner from "./ui-ux/Spinner";

const UserDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useSingleUser(params.id);

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  // console.log(data);

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
            {data?.firstName}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Last Name:</span>{" "}
            {data?.lastName}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Email:</span>{" "}
            {data?.email}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Location:</span>{" "}
            {data?.roles.locationIds}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Role:</span>{" "}
            {data?.roles.role}
          </h3>
          <h3>
            <span className="font-extrabold text-primary">Type:</span>{" "}
            {data?.roles.type}
          </h3>
        </Box>
      </Container>
    </Main>
  );
};

export default UserDetails;
