import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";

const UserDetails = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <Main>
      <Container
        FULL={false}
        pageTitle="Routing"
        className={"bg-gray-100 border-2 border-gray-400"}
      >
        <Box className="p-5 prose max-w-none">
          <h2>User ID: {params.id}</h2>
        </Box>
      </Container>
    </Main>
  );
};

export default UserDetails;
